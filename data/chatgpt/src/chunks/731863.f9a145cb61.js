export const __rspack_esm_ids = [731863];
export const __webpack_modules__ = {
    cae3: (function(a, b, c) {
        let d = !1;
        c.d(b, {
            a: () => d
        }, {
            b: function(a) {
                d = a
            }
        })
    }),
    hczB: (function(a, b, c) {
        c("Ot7V");
        var d = c("CV1W"),
            e = c("k7G6");

        function f(a) {
            return "plugin" === a.type ? (0, e.b)(a.pluginId) : (0, d.e)("apps", a.appId)
        }
        c.d(b, {}, {
            a: f,
            b: function(a, b) {
                return null == b ? {
                    type: "app",
                    appId: a
                } : {
                    type: "plugin",
                    pluginId: b
                }
            },
            c: function(a, b) {
                "plugin" === a.type ? (0, e.c)(a.pluginId, b) : b(f(a))
            }
        })
    }),
    WXrt: (function(a, b, c) {
        var d = c("QosV"),
            e = c("S2r0"),
            f = c("T0Rc"),
            g = c("fxCc"),
            h = c("dSKa"),
            i = c("Q840"),
            j = c("DBCl"),
            k = c("GaA7"),
            l = c("OWtl"),
            m = c("ADAj"),
            n = c("rvFo");
        let o = (0, i.c)(l.a, a => {
            let {
                get: b
            } = a;
            return new Map(Object.keys(h.e).filter(h.D).map(a => [a, (0, m.b)(b, j.Oe[a])]))
        });

        function p(a) {
            let {
                browserFamily: b,
                enabled: c,
                refetchOnWindowFocus: d
            } = a, f = k.b?.chromiumBrowser;
            return (0, e.a)({
                enabled: !1 !== c && !1,
                queryKey: ["chromium-browser-extension-status", b],
                queryFn: async () => null == f ? {
                    installUrl: null,
                    installedExtensionId: null
                } : f.getExtensionStatus({
                    browserFamily: b
                }),
                refetchOnWindowFocus: d,
                staleTime: n.b.FIVE_SECONDS
            })
        }
        c.d(b, {}, {
            a: o,
            b: p,
            c: function(a) {
                let b, c, e, g = (0, d.c)(11),
                    {
                        browserFamily: h
                    } = a;
                g[0] !== h ? (b = p({
                    browserFamily: h,
                    refetchOnWindowFocus: !0
                }), g[0] = h, g[1] = b) : b = g[1];
                let {
                    data: i,
                    isLoading: j,
                    isError: k,
                    refetch: l
                } = (0, f.a)(b), m = i?.installedExtensionId ?? null, n = i?.installUrl ?? null, o = null != m, q = i?.detectionError ?? (k ? "unknown" : void 0);
                return g[2] !== l ? (c = () => {
                    l()
                }, g[2] = l, g[3] = c) : c = g[3], g[4] !== m || g[5] !== j || g[6] !== n || g[7] !== o || g[8] !== q || g[9] !== c ? (e = {
                    installUrl: n,
                    installedExtensionId: m,
                    isInstalled: o,
                    isLoading: j,
                    detectionError: q,
                    retry: c
                }, g[4] = m, g[5] = j, g[6] = n, g[7] = o, g[8] = q, g[9] = c, g[10] = e) : e = g[10], e
            },
            d: function(a, b) {
                let c, e, f, h, i = (0, d.c)(14);
                i[0] !== b ? (c = void 0 === b ? {} : b, i[0] = b, i[1] = c) : c = i[1];
                let {
                    refetchOnWindowFocus: j
                } = c, k = void 0 === j || j;
                if (i[2] !== a || i[3] !== k) {
                    let b;
                    i[5] !== k ? (b = a => {
                        let {
                            browserFamily: b
                        } = a;
                        return p({
                            browserFamily: b,
                            refetchOnWindowFocus: k
                        })
                    }, i[5] = k, i[6] = b) : b = i[6], e = a.map(b), i[2] = a, i[3] = k, i[4] = e
                } else e = i[4];
                i[7] !== e ? (f = {
                    queries: e
                }, i[7] = e, i[8] = f) : f = i[8];
                let l = (0, g.a)(f);
                if (i[9] !== a || i[10] !== l) {
                    let b;
                    i[12] !== l ? (b = (a, b) => {
                        let {
                            browserFamily: c
                        } = a, d = l[b], e = d?.data?.installedExtensionId ?? null;
                        return [c, {
                            installUrl: d?.data?.installUrl ?? null,
                            installedExtensionId: e,
                            isInstalled: null != e,
                            isLoading: d?.isLoading === !0,
                            detectionError: d?.data?.detectionError ?? (d?.isError ? "unknown" : void 0)
                        }]
                    }, i[12] = l, i[13] = b) : b = i[13], h = new Map(a.map(b)), i[9] = a, i[10] = l, i[11] = h
                } else h = i[11];
                return h
            }
        })
    }),
    joT6: (function(a, b, c) {
        var d = c("QosV"),
            e = c("T0Rc"),
            f = c("dSKa"),
            g = c("WLmQ"),
            h = c("DBCl"),
            i = c("lAQI"),
            j = c("EJTT"),
            k = c("MI1z"),
            l = c("ywWc"),
            m = c("uNQ5"),
            n = c("C0re"),
            o = c("EEop"),
            p = c("YeiR"),
            q = c("RHhA"),
            r = c("WFY2"),
            s = c("bnxy"),
            t = c("rvFo"),
            u = c("WXrt"),
            v = c("ueue");
        let w = i.p([h.eb, "chrome", "chrome-dev", "chrome-internal"]),
            x = i.F({
                browserFamily: i.k(a => "string" == typeof a && (0, f.D)(a)),
                extensionIds: i.g(i.L().trim().min(1)).min(1),
                browserIconAssetPath: i.L().trim().min(1),
                storeExtensionId: i.L().trim().min(1).nullable().optional(),
                storeUrl: i.S().nullable()
            }),
            y = i.F({
                browserExtensions: i.g(x)
            });
        async function z(a) {
            let {
                codexHome: b,
                params: c,
                plugin: d
            } = a, e = await (0, m.a)(c);
            return function(a) {
                let {
                    config: b,
                    codexHome: c,
                    plugin: d
                } = a, e = (0, q.a)(), i = "prod";
                e === h.qb.Dev ? i = "dev" : (h.qb.isInternal(e) || e === h.qb.Agent) && (i = "internal");
                let k = B(d) === h.eb,
                    l = null == c || "local" !== d.plugin.source.type ? null : (0, h.Hg)({
                        codexHome: c,
                        localVersion: d.plugin.localVersion,
                        marketplaceName: d.marketplaceName,
                        pluginName: d.plugin.name
                    });
                return b.browserExtensions.filter(a => {
                    let {
                        browserFamily: b
                    } = a;
                    return k || "chrome" === b
                }).map(a => {
                    let b = k && "dev" !== i ? (0, g.d)(a.browserFamily, i) : null,
                        c = k ? (0, j.b)(a.browserFamily) : C(null == l ? null : (0, s.p)(l, a.browserIconAssetPath)) ?? C(d.logoPath),
                        e = b?.storeUrl ?? a.storeUrl;
                    if ("dev" === i) {
                        let b = a.extensionIds[0];
                        e = null == b ? null : (0, f.z)(b)
                    }
                    return {
                        browserFamily: a.browserFamily,
                        extensionIds: null == b ? a.extensionIds : [...new Set([...b.extensionIds, ...a.extensionIds])],
                        iconUrl: c,
                        storeExtensionId: "dev" === i ? null : b?.extensionIds[0] ?? a.storeExtensionId ?? null,
                        storeUrl: e
                    }
                })
            }({
                config: y.parse(JSON.parse(e.contents)),
                codexHome: b,
                plugin: d
            })
        }

        function A(a, b) {
            return null == a || b?.plugin.source.type !== "local" || null == B(b) ? null : (0, s.p)((0, h.Hg)({
                codexHome: a,
                localVersion: b.plugin.localVersion,
                marketplaceName: b.marketplaceName,
                pluginName: b.plugin.name
            }), "scripts/extension-ids.json")
        }

        function B(a) {
            let b = w.safeParse(a.plugin.name);
            return b.success && a.plugin.id.startsWith(`${b.data}@`) ? b.data : null
        }

        function C(a) {
            let b = a?.trim();
            if (null == b || 0 === b.length) return null;
            let c = b.toLowerCase();
            return c.startsWith("app:") || c.startsWith("data:") || c.startsWith("http:") || c.startsWith("https:") || c.startsWith("/@fs") ? b : (0, h.Nh)(b) ? "http:" === window.location.protocol || "https:" === window.location.protocol ? (0, p.b)(b) : (0, p.a)(b) : null
        }

        function D(a) {
            let {
                hostId: b,
                path: c
            } = a;
            return [...(0, n.b)(b, "browser-extension-setup"), c]
        }
        c.d(b, {}, {
            a: async function(a) {
                let {
                    scope: b,
                    authPolicy: c,
                    browserFamily: d,
                    codexHome: e,
                    hostId: f,
                    plugin: g,
                    queryClient: h,
                    windowType: i
                } = a;
                if ("ON_INSTALL" !== c || "electron" !== i || null == B(g)) return [];
                let j = e ?? (await (0, l.d)(f)).codexHome,
                    k = await async function(a) {
                        let {
                            scope: b,
                            hostId: c,
                            plugin: d
                        } = a;
                        try {
                            let a = await b.query.getOrFetch(o.l, {
                                hostId: c,
                                marketplacePath: d.marketplacePath,
                                pluginName: (0, v.l)(d).pluginName,
                                remoteMarketplaceName: d.remoteMarketplaceName ?? null
                            });
                            return (0, v.c)(a)
                        } catch (a) {
                            return r.a.warning("Failed to read installed plugin browser extension setup", {
                                safe: {},
                                sensitive: {
                                    error: a,
                                    pluginId: d.plugin.id
                                }
                            }), d
                        }
                    }({
                        scope: b,
                        hostId: f,
                        plugin: g
                    }), m = (await async function(a) {
                        let {
                            codexHome: b,
                            hostId: c,
                            plugin: d,
                            queryClient: e
                        } = a;
                        try {
                            let a = A(b, d);
                            if (null == a) return [];
                            let f = {
                                hostId: c,
                                path: a
                            };
                            return await e.fetchQuery({
                                queryFn: () => z({
                                    codexHome: b,
                                    params: f,
                                    plugin: d
                                }),
                                queryKey: D(f),
                                retry: !1,
                                staleTime: t.b.INFINITE
                            })
                        } catch (a) {
                            return r.a.warning("Failed to read plugin browser extension setup", {
                                safe: {},
                                sensitive: {
                                    error: a,
                                    pluginId: d.plugin.id
                                }
                            }), []
                        }
                    }({
                        codexHome: j,
                        hostId: f,
                        plugin: k,
                        queryClient: h
                    })).filter(a => {
                        let {
                            browserFamily: b
                        } = a;
                        return null == d || b === d
                    }), n = await Promise.all(m.map(async a => h.fetchQuery({
                        ...(0, u.b)({
                            browserFamily: a.browserFamily
                        }),
                        staleTime: 0
                    })));
                return n.some(a => {
                    let {
                        installedExtensionId: b,
                        detectionError: c
                    } = a;
                    return null != b || "permission-denied" === c
                }) ? [] : m.map((a, b) => ({
                    ...a,
                    storeUrl: n[b]?.installUrl ?? a.storeUrl
                })).filter(a => {
                    let {
                        storeUrl: b
                    } = a;
                    return null != b
                }).slice(0, 1)
            },
            b: function(a) {
                let b, c, f, g, h, i, j = (0, d.c)(19),
                    {
                        enabled: l,
                        hostId: m,
                        plugin: n
                    } = a,
                    {
                        data: o,
                        isError: p,
                        isPending: q
                    } = (0, k.b)(m),
                    r = o?.codexHome;
                j[0] !== r || j[1] !== l || j[2] !== m || j[3] !== n ? (b = A(r, n), g = e.a, c = l && null != b, f = null == b ? ["plugins", "browser-extension-setup", "missing"] : D({
                    hostId: m,
                    path: b
                }), j[0] = r, j[1] = l, j[2] = m, j[3] = n, j[4] = b, j[5] = c, j[6] = f, j[7] = g) : (b = j[4], c = j[5], f = j[6], g = j[7]), j[8] !== r || j[9] !== b || j[10] !== m || j[11] !== n ? (h = async () => null == b || null == n ? [] : z({
                    codexHome: r,
                    params: {
                        hostId: m,
                        path: b
                    },
                    plugin: n
                }), j[8] = r, j[9] = b, j[10] = m, j[11] = n, j[12] = h) : h = j[12], j[13] !== c || j[14] !== f || j[15] !== h ? (i = {
                    enabled: c,
                    queryKey: f,
                    queryFn: h,
                    retry: !1,
                    staleTime: t.b.INFINITE
                }, j[13] = c, j[14] = f, j[15] = h, j[16] = i) : i = j[16];
                let {
                    data: s,
                    isError: u
                } = g(i);
                if (!l || null == n) {
                    let a;
                    return j[17] === Symbol.for("react.memo_cache_sentinel") ? (a = [], j[17] = a) : a = j[17], a
                }
                if ("local" !== n.plugin.source.type || null == B(n) || !q) {
                    if (null == b || p || u) {
                        let a;
                        return j[18] === Symbol.for("react.memo_cache_sentinel") ? (a = [], j[18] = a) : a = j[18], a
                    }
                    return s
                }
            }
        })
    }),
    NFKX: (function(a, b, c) {
        let d = (0, (c("Qgfj")).f)({
            label: {
                id: "composer.pluginMention.browserUse.label",
                defaultMessage: "Browser"
            },
            restrictedAvailabilityDescription: {
                id: "settings.browserPlugin.restrictedAvailabilityDescription",
                defaultMessage: "Disabled by your organization or unavailable in your region"
            }
        });
        c.d(b, {}, {
            a: d
        })
    }),
    OF5O: (function(a, b, c) {
        var d = c("Q840"),
            e = c("GaA7"),
            f = c("OWtl");
        let g = (0, d.q)(f.a, a => ({
            queryKey: ["bundled-plugin-auto-install", a],
            staleTime: 5e3,
            enabled: null != e.b.bundledPluginPreferences,
            queryFn: async () => {
                let b = e.b.bundledPluginPreferences;
                if (null == b) throw Error("Bundled plugin preferences are unavailable");
                return b.readAutoInstallDisabled(a)
            }
        }));
        c.d(b, {}, {
            a: async function(a, b, c) {
                let d = e.b.bundledPluginPreferences;
                null != d && (await d.setAutoInstallDisabled(b, c), await a.query.invalidate(g, b))
            }
        })
    }),
    xWQV: (function(a, b, c) {
        var d = c("bTvG"),
            e = c("lSdY"),
            f = c("mfKi"),
            g = c("lAQI"),
            h = c("yGJW");
        let i = g.F({
                conversationId: g.L().optional(),
                installAction: g.p(d.x).optional(),
                productExperience: g.p(e.a),
                surface: g.p(d.z)
            }),
            j = {
                [f.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_INSTALL_CONSENT]: "CHATGPT_PLUGIN_ACTION_TYPE_INSTALL_CONSENT",
                [f.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_INSTALL]: "CHATGPT_PLUGIN_ACTION_TYPE_INSTALL",
                [f.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_ENABLE]: "CHATGPT_PLUGIN_ACTION_TYPE_ENABLE",
                [f.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_REMOVE]: "CHATGPT_PLUGIN_ACTION_TYPE_REMOVE",
                [f.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_OPEN_CONNECTOR_SETUP]: "CHATGPT_PLUGIN_ACTION_TYPE_OPEN_CONNECTOR_SETUP",
                [f.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR]: "CHATGPT_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR"
            },
            k = {
                [f.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_CANCELLED]: "CHATGPT_PLUGIN_ACTION_RESULT_CANCELLED",
                [f.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_UNSPECIFIED]: "CHATGPT_PLUGIN_ACTION_RESULT_UNSPECIFIED",
                [f.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_INITIATED]: "CHATGPT_PLUGIN_ACTION_RESULT_INITIATED",
                [f.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS]: "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS",
                [f.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_FAILURE]: "CHATGPT_PLUGIN_ACTION_RESULT_FAILURE",
                [f.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_BLOCKED]: "CHATGPT_PLUGIN_ACTION_RESULT_BLOCKED",
                [f.CodexPluginActionResult.UNRECOGNIZED]: "UNRECOGNIZED"
            };

        function l(a, b, c) {
            let e, {
                    action: f,
                    connectorId: g,
                    errorType: i,
                    installAttemptId: j,
                    pluginId: k,
                    pluginIds: l,
                    referrerInstallAttemptId: m,
                    referrerPluginId: n,
                    result: o,
                    sourceAttributionId: p,
                    suggestionId: q,
                    voiceSessionId: r
                } = c,
                s = "CHATGPT_PLUGIN_ACTION_TYPE_INSTALL" === f && "CHATGPT_PLUGIN_ACTION_RESULT_INITIATED" === o;
            "CHATGPT_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR" === f ? e = d.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_CONNECT_SINGLE : "CHATGPT_PLUGIN_ACTION_TYPE_INSTALL" === f && (e = b.installAction), (0, h.a)(a, d.q, {
                action: f,
                result: o,
                pluginId: k,
                pluginIds: l,
                connectorId: g,
                errorType: i,
                installAttemptId: j,
                installAction: e,
                conversationId: s ? b.conversationId : void 0,
                voiceSessionId: s ? r : void 0,
                sourceAttributionId: s ? p : void 0,
                referrerInstallAttemptId: s ? m : void 0,
                referrerPluginId: s ? n : void 0,
                suggestionId: q,
                productExperience: b.productExperience,
                surface: b.surface
            })
        }
        c.d(b, {}, {
            a: i,
            b: function(a) {
                let b = g.F({
                    status: g.E()
                }).safeParse(a);
                return b.success ? `http_${b.data.status}` : a instanceof Error ? "error" : "unknown"
            },
            c: l,
            d: function(a, b, c) {
                let {
                    action: d,
                    connectorId: e,
                    errorType: f,
                    installAttemptId: g,
                    pluginId: h,
                    result: i,
                    sourceAttributionId: m,
                    suggestionId: n,
                    voiceSessionId: o
                } = c, p = j[d];
                return null != b && null != p && (l(a, b, {
                    action: p,
                    result: k[i],
                    pluginId: h,
                    connectorId: e,
                    errorType: f,
                    installAttemptId: g,
                    sourceAttributionId: m,
                    suggestionId: n,
                    voiceSessionId: o
                }), !0)
            },
            e: function(a, b, c) {
                let {
                    connectorId: e,
                    installAttemptId: f,
                    pluginId: g,
                    interstitialAction: i,
                    suggestionId: j
                } = c, k = "CHATGPT_PLUGIN_ACTION_RESULT_INITIATED";
                null == i ? k = "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS" : "dismissed" === i && (k = "CHATGPT_PLUGIN_ACTION_RESULT_CANCELLED"), (0, h.a)(a, d.q, {
                    action: null == i ? "CHATGPT_PLUGIN_ACTION_TYPE_AUTH_INTERSTITIAL_SHOWN" : "CHATGPT_PLUGIN_ACTION_TYPE_AUTH_INTERSTITIAL_ACTION",
                    result: k,
                    pluginId: g,
                    connectorId: e,
                    installAttemptId: f,
                    interstitialAction: i,
                    suggestionId: j,
                    productExperience: b.productExperience,
                    surface: b.surface
                })
            }
        })
    }),
    SaEY: (function(a, b, c) {
        var d = c("QosV"),
            e = c("T0Rc"),
            f = c("fxCc"),
            g = c("Q840"),
            h = c("oo2L"),
            i = c("S7fj"),
            j = c("hOO0"),
            k = c("BQbE"),
            l = c("pDRe"),
            m = c("OiCI"),
            n = c("Cslg"),
            o = c("EEop"),
            p = c("sFqu"),
            q = c("WzdM");
        let r = "DISABLED_BY_ADMIN";

        function s(a) {
            return a?.availability === "DISABLED_BY_ADMIN"
        }

        function t(a) {
            return s(a) ? "disabled-by-admin" : a?.installPolicy !== "NOT_AVAILABLE" || a.installed ? null : "installation-unavailable"
        }

        function u(a) {
            return null != a.error
        }

        function v(a) {
            return a.isPending
        }

        function w(a) {
            return a.length > 0
        }

        function x(a) {
            return a.id
        }
        c.d(b, {}, {
            a: t,
            b: s,
            c: function(a) {
                var b, c, s, y;
                let z, A, B, C, D = (0, d.c)(17),
                    {
                        enabled: E,
                        hostId: F,
                        pluginApps: G,
                        pluginSummary: H,
                        marketplacePath: I,
                        pluginName: J,
                        remoteMarketplaceName: K,
                        productContext: L,
                        appConnectOptions: M
                    } = a,
                    N = void 0 === E || E;
                D[0] !== F ? (z = (0, i.b)(F), D[0] = F, D[1] = z) : z = D[1];
                let O = z,
                    P = (0, g.z)(m.a),
                    Q = (0, g.z)(n.k),
                    R = N && null == G && (null != I || null != K) && null != J,
                    S = I ?? null,
                    T = J ?? null,
                    U = K ?? null;
                D[2] !== F || D[3] !== L || D[4] !== R || D[5] !== S || D[6] !== T || D[7] !== U ? (A = {
                    hostId: F,
                    productContext: L,
                    marketplacePath: S,
                    pluginName: T,
                    remoteMarketplaceName: U,
                    enabled: R
                }, D[2] = F, D[3] = L, D[4] = R, D[5] = S, D[6] = T, D[7] = U, D[8] = A) : A = D[8];
                let {
                    isLoading: V,
                    plugin: W
                } = (0, o.m)(A);
                D[9] !== N || D[10] !== W?.apps || D[11] !== G ? (B = N ? G ?? W?.apps ?? [] : [], D[9] = N, D[10] = W?.apps, D[11] = G, D[12] = B) : B = D[12];
                let X = B,
                    Y = H ?? W?.summary,
                    Z = Y?.source.type === "remote",
                    $ = Array.from(new Set(X.map(x).filter(w))),
                    {
                        data: _,
                        isLoading: aa,
                        error: ab
                    } = (0, k.c)({
                        appIds: $,
                        enabled: !O && null == L && $.length > 0,
                        hostId: F
                    }),
                    {
                        data: ac,
                        isPending: ad,
                        error: ae
                    } = (0, e.a)((0, l.b)({
                        userId: Q,
                        accountId: P,
                        appIds: $,
                        productSku: null == L ? void 0 : q.a[L],
                        enabled: O && N
                    })),
                    af = (0, f.a)({
                        queries: (O ? [] : $).map(a => (0, h.f)(a, {
                            productSku: (0, p.a)(a, {
                                productContext: L,
                                appConnectOptions: M
                            })?.productSku
                        }))
                    }),
                    ag = R && V || (O ? $.length > 0 && ad : null == L && aa) || af.some(v),
                    ah = {},
                    ai = [];
                for (let [a, d] of $.entries()) {
                    let e;
                    if (O) e = function(a, b) {
                        if (null == b) return null;
                        let c = b.find(b => (0, j.a)(b.id) === (0, j.a)(a));
                        return c?.status === r || c?.disabled_reason === "disabled_by_admin" ? "disabled-by-admin" : null != c && c.available && (c.installed || c.can_install) ? null : "connector-unavailable"
                    }(d, ac);
                    else {
                        let f = null == L && !aa && null == ab && !_?.some(a => a.id === d);
                        b = af[a], c = f, e = b?.data?.status === r ? "disabled-by-admin" : c || null != b && !b.isPending && null == b.error && null == b.data ? "connector-unavailable" : null
                    }
                    ah[d] = e, ai.push(e)
                }
                return D[13] !== ab || D[14] !== af || D[15] !== ae ? (C = null != ab || null != ae || af.some(u), D[13] = ab, D[14] = af, D[15] = ae, D[16] = C) : C = D[16], {
                    blockedReasonsByConnectorId: ah,
                    hasConnectorAvailabilityError: C,
                    isConnectorAvailabilityLoading: ag,
                    isLoading: !Z && ag,
                    blockedReason: (s = Y, y = ai, s?.source.type === "remote" ? t(s) : 0 === y.length || y.includes(null) ? null : y.every(a => "disabled-by-admin" === a) ? "disabled-by-admin" : "connector-unavailable")
                }
            }
        })
    }),
    p84t: (function(a, b, c) {
        c("GaA7"), c.d(b, {}, {
            a: async function(a) {
                let {
                    hostId: b,
                    marketplacePath: c,
                    pluginName: d
                } = a
            },
            b: async function(a) {
                let {
                    hostId: b,
                    marketplaceName: c,
                    pluginName: d
                } = a
            }
        })
    }),
    uUv4: (function(a, b, c) {
        c.d(b, {}, {
            a: {
                box: "plugin_asdk_app_695bfc98071c8191bac7bc479aa27de7",
                gmail: "plugin_connector_1p_95d39881713c8191931482a62d6edff9",
                "google-calendar": "plugin_connector_1p_f8509de903288191b14a160c6c5d20b0",
                "google-drive": "plugin_connector_1p_ab21a553bfbc81919ea8fd1858e3ffa7",
                notion: "plugin_asdk_app_69c18c28f1188191bf5b8445c4ab0a2e",
                "outlook-calendar": "plugin_connector_1p_fd0f4f41caa88191a9456514bbffa06d",
                "outlook-email": "plugin_connector_1p_6bcb5879c73c819196abc70016166099",
                salesforce: "plugin_asdk_app_697d413990c88191a2bf4799604f8f6c",
                sharepoint: "plugin_connector_1p_dca009ae2c848191ae14df3a47c5e7fd",
                slack: "plugin_asdk_app_69a1d78e929881919bba0dbda1f6436d",
                teams: "plugin_connector_1p_eba8b52fe53881918408d4b46b957644"
            }
        })
    }),
    IwvW: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("v4LA"),
            g = c("hZax"),
            h = c("ZqLP");
        let i = (0, f.a)(async () => (await Promise.all([c.e(893387), c.e(161167), c.e(703253), c.e(284162), c.e(584510), c.e(922515)]).then(() => c("zLjj"))).PluginEditorPage),
            j = (0, f.a)(async () => (await c.e(239046).then(() => c("oVqR"))).PluginDetailEmptyState);
        c.d(b, {}, {
            a: function() {
                let a, b = (0, e.c)(2),
                    c = (0, g.f)(h.c);
                return (0, g.g)(h.c) ? null : (b[0] !== c ? (a = c ? (0, d.jsx)(i, {}) : (0, d.jsx)("div", {
                    className: "flex h-full flex-col px-toolbar",
                    children: (0, d.jsx)(j, {
                        state: "missing"
                    })
                }), b[0] = c, b[1] = a) : a = b[1], a)
            }
        })
    }),
    Brn9: (function(a, b, c) {
        var d = c("dSKa"),
            e = c("lAQI"),
            f = c("EZRW");
        let g = "plugin_connector_1p_51c1ba70f47481919149861084681943",
            h = e.F({
                type: e.z("mcpToolCall"),
                result: e.F({
                    _meta: e.F({
                        "codex/toolSurface": e.F({
                            kind: e.z("browserUse"),
                            backend: e.z("chrome"),
                            browserFamily: e.k(a => "string" == typeof a && (0, d.D)(a))
                        })
                    })
                })
            });

        function i(a) {
            return a === g
        }
        c.d(b, {}, {
            a: g,
            b: function(a) {
                return i(a) ? (0, f.a)() : null
            },
            c: function(a) {
                let b = h.safeParse(a);
                return b.success ? b.data.result._meta["codex/toolSurface"].browserFamily : null
            },
            d: i
        })
    }),
    e2wX: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("rEML"),
            h = c("hczB"),
            i = c("tlx5"),
            j = c("ygu7");
        c.d(b, {}, {
            a: function(a) {
                let b, c, k, l, m, n, o, p, q = (0, e.c)(19),
                    {
                        appId: r,
                        pluginId: s,
                        children: t
                    } = a,
                    u = (0, g.ab)();
                q[0] !== r ? (b = {
                    appId: r
                }, q[0] = r, q[1] = b) : b = q[1];
                let v = null == s;
                q[2] !== v ? (c = {
                    enabled: v
                }, q[2] = v, q[3] = c) : c = q[3];
                let {
                    data: w,
                    isError: x
                } = (0, f.x)(j.a, b, c), y = s ?? w;
                return void 0 === y || null == s && x ? t : (q[4] !== r || q[5] !== y ? (l = (0, h.b)(r, y), k = g.g, m = "inline cursor-interaction bg-transparent p-0 text-start align-baseline", n = (0, h.a)(l), q[4] = r, q[5] = y, q[6] = k, q[7] = l, q[8] = m, q[9] = n) : (k = q[6], l = q[7], m = q[8], n = q[9]), q[10] !== l || q[11] !== u ? (o = a => (0, i.a)(a, () => (0, h.c)(l, u)), q[10] = l, q[11] = u, q[12] = o) : o = q[12], q[13] !== k || q[14] !== t || q[15] !== m || q[16] !== n || q[17] !== o ? (p = (0, d.jsx)(k, {
                    className: m,
                    to: n,
                    onClick: o,
                    children: t
                }), q[13] = k, q[14] = t, q[15] = m, q[16] = n, q[17] = o, q[18] = p) : p = q[18], p)
            }
        })
    }),
    Y2Gi: (function(a, b, c) {
        var d = c("EAlS");
        let e = [{
                campaign_id: "hubspot-2026-11",
                plugin_id: "plugin_asdk_app_697acb8e53d88191bf7a79e62012ae14"
            }, {
                campaign_id: "docusign-2026-11",
                plugin_id: "plugin_asdk_app_69fcc3b7582c81918df4ffae40cb7204"
            }, {
                campaign_id: "klaviyo-2026-11",
                plugin_id: "plugin_asdk_app_694421e60cc88191a1e5bb4aa79950e4"
            }],
            f = [...d.d, ...d.f, ...e];
        c.d(b, {}, {
            a: f,
            b: {
                campaign_id: "capcut-2026-12",
                plugin_id: "plugin_asdk_app_6aec387659ec8191ac71a0b22848f2a0"
            },
            c: function(a) {
                return f.find(b => b.campaign_id === a)
            },
            d: function(a) {
                return e.some(b => b.campaign_id === a)
            },
            e: e
        })
    }),
    q9zg: (function(a, b, c) {
        var d = c("zPtR"),
            e = c("mfKi"),
            f = c("Q840"),
            g = c("EAlS"),
            h = c("lAQI"),
            i = c("OiCI"),
            j = c("Cslg"),
            k = c("OFP1"),
            l = c("laUo"),
            m = c("yGJW"),
            n = c("GaA7"),
            o = c("OWtl"),
            p = c("kfGJ"),
            q = c("OMIV"),
            r = c("Nwp9"),
            s = c("UR81"),
            t = c("Y2Gi");
        let u = "hubspot-2026-09",
            v = [...g.f, {
                campaign_id: "codex-stripe",
                plugin_id: "plugin_connector_690ab09fa43c8191bca40280e4563238"
            }, {
                campaign_id: "codex-quickbooks",
                plugin_id: "plugin_asdk_app_697aea3231288191b28a0061066e51bd"
            }, {
                campaign_id: u,
                plugin_id: "plugin_asdk_app_697acb8e53d88191bf7a79e62012ae14"
            }, {
                campaign_id: "codex-hubspot",
                plugin_id: "plugin_asdk_app_697acb8e53d88191bf7a79e62012ae14"
            }, {
                campaign_id: "codex-gusto",
                plugin_id: "plugin_asdk_app_69375d9f172c8191b23d73be4107128a"
            }, ...g.d, {
                campaign_id: "codex-dropbox",
                plugin_id: "plugin_asdk_app_69b31dc2110c8191b8b47dc98fe5a052"
            }, {
                campaign_id: "codex-canva",
                plugin_id: "plugin_connector_68df33b1a2d081918778431a9cfca8ba"
            }],
            w = h.J(h.L(), h.E()).catch({}),
            x = (0, r.b)("capcut-incentive-receipt-interests", {}, {
                coerceStoredValue: a => w.parse(a)
            }),
            y = {
                impression: e.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_IMPRESSION,
                cancelled: e.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_CANCELLED,
                declined: e.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_DECLINED,
                accept_clicked: e.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_ACCEPT_CLICKED,
                accept_failed: e.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_ACCEPT_FAILED,
                accepted: e.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_ACCEPTED,
                install_started: e.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_INSTALL_STARTED,
                install_failed: e.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_INSTALL_FAILED,
                installed: e.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_INSTALLED,
                receipt_shown: e.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_RECEIPT_SHOWN
            },
            z = {
                "identity-changed": e.CodexPluginsIncentiveFailureReason.CODEX_PLUGINS_INCENTIVE_FAILURE_REASON_IDENTITY_CHANGED,
                unavailable: e.CodexPluginsIncentiveFailureReason.CODEX_PLUGINS_INCENTIVE_FAILURE_REASON_UNAVAILABLE,
                "capacity-exhausted": e.CodexPluginsIncentiveFailureReason.CODEX_PLUGINS_INCENTIVE_FAILURE_REASON_CAPACITY_EXHAUSTED,
                retryable: e.CodexPluginsIncentiveFailureReason.CODEX_PLUGINS_INCENTIVE_FAILURE_REASON_OUTCOME_UNKNOWN,
                "invalid-offer": e.CodexPluginsIncentiveFailureReason.CODEX_PLUGINS_INCENTIVE_FAILURE_REASON_INVALID_OFFER,
                "install-failed": e.CodexPluginsIncentiveFailureReason.CODEX_PLUGINS_INCENTIVE_FAILURE_REASON_INSTALL_FAILED
            },
            A = (0, f.h)(o.a, () => Date.now(), a => {
                let {
                    set: b
                } = a, c = setInterval(() => b(Date.now()), 3e4);
                return () => clearInterval(c)
            }),
            B = (0, f.c)(o.a, a => {
                let {
                    get: b
                } = a, {
                    accountStructure: c,
                    plan: d
                } = b(j.n);
                return "personal" === c && (0, l.g)(d)
            }),
            C = (0, f.c)(o.a, a => {
                let {
                    get: b
                } = a, c = b(j.f), d = b(j.k), e = b(j.n);
                if (n.b?.pluginIncentives == null || null == c || null == d || e.accountLoading || e.accountId !== c || b(i.d) !== c) return null;
                if (b(B)) return {
                    accountId: c,
                    userId: d
                };
                if (!(0, s.g)(e.plan)) return null;
                let {
                    data: f,
                    isLoading: g,
                    isError: h
                } = b(k.n, c);
                return g || h || f?.plugin_incentives_ui_enabled !== !0 ? null : {
                    accountId: c,
                    userId: d
                }
            }),
            D = (0, f.c)(o.a, a => {
                let {
                    get: b
                } = a;
                return n.b?.pluginIncentives == null || null == b(C) ? [] : b(B) ? [t.b] : [...t.e, ...v]
            }),
            E = (0, f.c)(o.a, a => {
                let {
                    get: b
                } = a;
                return !b(q.i) && !0 === b(q.e, "1129613321")
            }),
            F = (0, f.c)(o.a, a => {
                let {
                    get: b
                } = a, c = b(D);
                return b(B) && !b(E) ? [] : c
            });

        function G(a, b) {
            return a.get(F).find(a => b.includes(a.plugin_id))
        }
        let H = (0, f.r)(o.a, a => {
                let {
                    get: b,
                    scope: c
                } = a, d = b(C), e = n.b?.pluginIncentives, f = null != d && null != e && !b(B);
                return {
                    queryKey: ["plugin-incentive-claims", d?.userId, d?.accountId],
                    enabled: f,
                    staleTime: 3e5,
                    retry: !1,
                    refetchOnWindowFocus: !0,
                    refetchOnReconnect: !0,
                    queryFn: async a => {
                        let {
                            signal: b
                        } = a;
                        if (!f) return {
                            kind: "identity-changed"
                        };
                        let g = await e.listClaims({
                            identity: d,
                            hostId: p.a
                        });
                        if (b.throwIfAborted(), !R(c, d)) return {
                            kind: "identity-changed"
                        };
                        if ("retryable" === g.kind) throw Error("Plugin credit claims temporarily unavailable");
                        return g
                    }
                }
            }),
            I = (0, f.c)(o.a, a => {
                let {
                    get: b
                } = a, c = b(C);
                if (null == c) return null;
                if (b(B)) {
                    let a = b(x)[Q(c)];
                    return null != a && Date.now() - a < 2592e6 ? [t.b.campaign_id] : null
                }
                let {
                    data: d
                } = b(H);
                return d?.kind === "claims" ? d.campaignIds : null
            }),
            J = (0, f.q)(o.a, (a, b) => {
                let c, {
                        campaignId: d,
                        hostId: e
                    } = a,
                    {
                        get: f,
                        scope: g
                    } = b,
                    h = f(C),
                    i = f(D).find(a => a.campaign_id === d);
                return {
                    queryKey: ["plugin-incentive", h?.userId, h?.accountId, e, d, i?.plugin_id],
                    enabled: null != h && null != i && n.b?.pluginIncentives != null,
                    staleTime: 3e4,
                    retry: !1,
                    refetchOnMount: a => a.state.isInvalidated,
                    refetchOnWindowFocus: !0,
                    refetchOnReconnect: !0,
                    refetchIntervalInBackground: !1,
                    refetchInterval: a => {
                        let b = a.state.data;
                        if (b?.kind !== "offer") return !1;
                        let d = T(b.offer);
                        return "pending" !== d && "processing" !== d ? (c = void 0, !1) : (null == c && (c = Date.now() + 18e5), !(Date.now() >= c || null != a.state.error && Date.now() - a.state.dataUpdatedAt > 3e5 || null != b.offer.reward_expires_at && Date.parse(b.offer.reward_expires_at) <= Date.now()) && 3e4)
                    },
                    queryFn: async a => {
                        let {
                            signal: b
                        } = a;
                        if (null == h || n.b?.pluginIncentives == null) return {
                            kind: "identity-changed"
                        };
                        if (null == i) return {
                            kind: "unavailable"
                        };
                        let c = await n.b.pluginIncentives.read({
                            campaignId: d,
                            hostId: e,
                            identity: h
                        });
                        if (b.throwIfAborted(), !R(g, h)) return {
                            kind: "identity-changed"
                        };
                        if ("retryable" === c.kind) throw Error("Plugin credit status temporarily unavailable");
                        if ("offer" === c.kind && c.offer.plugin_id !== i.plugin_id) throw Error("Plugin credit offer configuration mismatch");
                        if (d === t.b.campaign_id && "offer" === c.kind && O(g, c.offer), null != (0, t.c)(d) && "offer" === c.kind && null != c.offer.claim_status && null == c.offer.reward_granted_at) {
                            let a = g.get(H).data;
                            a?.kind === "claims" && a.campaignIds.includes(d) || O(g, c.offer)
                        }
                        return c
                    }
                }
            }),
            K = (0, f.d)(o.a, (a, b) => {
                let {
                    get: c
                } = b, d = c(J, a);
                return a.campaignId !== u ? d : M(d, c(J, {
                    ...a,
                    campaignId: "codex-hubspot"
                }), c(A)).query
            });
        async function L(a, b) {
            let c = a.get(J, b).refetch({
                cancelRefetch: !1
            });
            if (b.campaignId !== u) return {
                campaignId: b.campaignId,
                query: await c
            };
            let d = a.get(J, {
                    ...b,
                    campaignId: "codex-hubspot"
                }).refetch({
                    cancelRefetch: !1,
                    throwOnError: !1
                }),
                e = await c;
            return N(e, Date.now()) ? {
                campaignId: b.campaignId,
                query: e
            } : M(e, await d, Date.now())
        }

        function M(a, b, c) {
            if (N(a, c)) return {
                campaignId: u,
                query: a
            };
            let d = b.data?.kind === "offer" ? b.data.offer : null,
                e = null == d ? null : T(d, c);
            return "pending" === e || "processing" === e || "capacity-exhausted" === e ? {
                campaignId: "codex-hubspot",
                query: b
            } : a.isError || a.data?.kind !== "unavailable" && a.data?.kind !== "capacity-exhausted" ? {
                campaignId: u,
                query: a
            } : {
                campaignId: "codex-hubspot",
                query: b
            }
        }

        function N(a, b) {
            return !a.isError && a.data?.kind === "offer" && "expired" !== T(a.data.offer, b)
        }

        function O(a, b) {
            let c = b.campaign_id;
            if (c === t.b.campaign_id) {
                let c = a.get(C),
                    d = T(b);
                null != c && ("pending" === d || "processing" === d) && P(a, c);
                return
            }
            a.query.setData(H, a => ({
                kind: "claims",
                campaignIds: [...new Set([...a?.kind === "claims" ? a.campaignIds : [], c])]
            })), a.query.invalidate(H)
        }

        function P(a, b) {
            let c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                d = Q(b),
                e = Date.now(),
                f = a.get(x),
                g = f[d],
                h = null != g && e - g < 2592e6;
            if (!h || c) {
                let b = Math.max(e, (g ?? 0) + 1);
                return a.set(x, {
                    ...Object.fromEntries(Object.entries(f).filter(a => {
                        let [, b] = a;
                        return e - b < 2592e6
                    }).slice(-99)),
                    [d]: b
                }), h ? void 0 : b
            }
        }

        function Q(a) {
            return JSON.stringify([a.userId, a.accountId])
        }

        function R(a, b) {
            let c = a.get(C);
            return c?.accountId === b.accountId && c?.userId === b.userId
        }

        function S(a) {
            return a === t.b.campaign_id || null != (0, g.b)(a) || null != (0, g.a)(a) || (0, t.d)(a)
        }

        function T(a) {
            let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            return null != a.reward_granted_at ? "paid" : "success_verified" === a.claim_status ? "processing" : "pending" !== a.claim_status ? "available" : null != a.claim_expires_at && Date.parse(a.claim_expires_at) <= b ? "expired" : 0 === a.remaining_redemptions ? "capacity-exhausted" : "pending"
        }
        c.d(b, {}, {
            a: u,
            b: O,
            c: S,
            d: E,
            e: function(a, b, c) {
                let d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                a.set(x, a => {
                    let {
                        [Q(b)]: e, ...f
                    } = a;
                    return null == e || (d ? e !== c : e > c) ? a : f
                })
            },
            f: T,
            g: G,
            h: D,
            i: H,
            j: C,
            k: J,
            l: F,
            m: I,
            n: A,
            o: R,
            p: function(a, b, c, f, g) {
                let h = a.get(D).find(a => a.campaign_id === b);
                null != h && R(a, c) && (0, m.a)(a, e.CodexPluginsIncentiveEvent, {
                    legacyStatsigEventName: "codex_plugin_incentive_action",
                    action: y[f],
                    campaignId: b,
                    remotePluginId: h.plugin_id,
                    surface: g?.surface,
                    remainingEffectiveRedemptions: g?.remainingEffectiveRedemptions == null ? void 0 : (0, d.b)(g.remainingEffectiveRedemptions),
                    failureReason: g?.reason == null ? void 0 : z[g.reason]
                })
            },
            q: L,
            r: P,
            s: K,
            t: async function(a, b, c) {
                let d = G(a, c),
                    e = a.get(C);
                if (null == d || null == e) return !1;
                let {
                    query: {
                        data: f,
                        isError: g
                    }
                } = await L(a, {
                    campaignId: d.campaign_id,
                    hostId: b
                });
                if (!R(a, e)) return !0;
                if (g) return !S(d.campaign_id);
                if (f?.kind === "unavailable" || f?.kind === "capacity-exhausted") return !1;
                if (f?.kind !== "offer") return !0;
                let h = T(f.offer);
                return "available" === h || "pending" === h
            }
        })
    }),
    K4kL: (function(a, b, c) {
        var d = c("qKkM"),
            e = c("Q840"),
            f = c("CWeU"),
            g = c("HwRo"),
            h = c("OWtl"),
            i = c("OMIV"),
            j = c("Nwp9"),
            k = c("K0RC");
        let l = (0, j.b)("pending-plugin-installations-v1", {}),
            m = (0, e.d)(h.a, (a, b) => {
                let {
                    accountId: c,
                    hostId: d
                } = a, {
                    get: e
                } = b;
                return new Set(e(l)[(0, k.b)(c, d)] ?? [])
            });
        c.d(b, {}, {
            a: function(a, b, c) {
                a.set(l, (0, d.i)(a => {
                    delete a[(0, k.b)(b, c)]
                }))
            },
            b: m,
            c: function(a, b, c, e) {
                let h = (0, k.b)(a.get(f.a), b);
                (0, k.d)(a, h, c, e);
                let j = (0, g.b)();
                ("boolean" == typeof j ? j : a.get(i.e, j)) && a.set(l, (0, d.i)(a => {
                    let b = a[h] ?? [];
                    for (let d of (a[h] = b, [c, e])) null == d || b.includes(d) || b.push(d)
                }))
            }
        })
    }),
    a0aG: (function(a, b, c) {
        var d = c("bTvG"),
            e = c("lSdY"),
            f = c("iRMi");
        let g = {
            pluginRedirect: {
                source: f.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: f.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_PLUGIN_REDIRECT,
                chatgpt: {
                    productExperience: e.a.CHATGPT_PRODUCT_EXPERIENCE_WORK,
                    surface: d.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_PLUGIN_REDIRECT
                }
            },
            ambientSuggestion: {
                source: f.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: f.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_AMBIENT_SUGGESTION
            },
            composer: {
                source: f.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: f.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_COMPOSER
            },
            workComposer: {
                source: f.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: f.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_COMPOSER,
                chatgpt: {
                    productExperience: e.a.CHATGPT_PRODUCT_EXPERIENCE_WORK,
                    surface: d.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_COMPOSER_FOOTER
                }
            },
            globalAnnouncement: {
                source: f.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: f.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_GLOBAL_ANNOUNCEMENT
            },
            onboarding: {
                source: f.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: f.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_ONBOARDING
            },
            onboardingRolePreinstall: {
                source: f.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: f.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_ONBOARDING_ROLE_PREINSTALL
            },
            settings: {
                source: f.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: f.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_SETTINGS
            }
        };
        c.d(b, {}, {
            a: function(a) {
                let {
                    apps: b,
                    pluginInstalled: c
                } = a;
                return 0 === b.length ? d.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_INSTALL : 1 === b.length ? b[0].isAccessible ? d.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_INSTALL : d.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_CONNECT_SINGLE : c && b.every(a => a.isAccessible) ? d.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_INSTALL : d.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_OPEN_SETUP
            },
            b: g
        })
    }),
    sFqu: (function(a, b, c) {
        var d = c("bTvG"),
            e = c("iRMi"),
            f = c("o6hs"),
            g = c("WzdM");
        c.d(b, {}, {
            a: function(a, b) {
                let c = (0, f.e)(a, b?.appConnectOptions),
                    h = "plugin_install",
                    i = b?.marketplaceAnalytics?.chatgpt?.surface,
                    j = b?.marketplaceAnalytics?.surface;
                return (b?.origin === "in_conversation_elicitation" || i === d.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_IN_CHAT_SUGGESTIONS || j === e.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_IN_CHAT_SUGGESTIONS ? h = "plugin_suggestion" : i === d.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_PLUGIN_REDIRECT || j === e.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_PLUGIN_REDIRECT ? h = "plugin_redirect" : i === d.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_COMPOSER_FOOTER || i === d.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_COMPOSER_HINTS || j === e.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_COMPOSER ? h = "composer" : i === d.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_DETAILS || j === e.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_DETAILS ? h = "plugin_details" : i === d.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_AMBIENT_SUGGESTION || j === e.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_AMBIENT_SUGGESTION ? h = "home_suggestion" : i === d.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_LIBRARY && (h = "library"), c = {
                    ...c = {
                        connectorId: a,
                        ...c,
                        oauthReferrer: c?.oauthReferrer ?? h
                    },
                    oauthPresentation: "popup"
                }, c?.productSku != null || b?.productContext == null) ? c : {
                    ...c,
                    productSku: g.a[b.productContext]
                }
            }
        })
    }),
    aVTW: (function(a, b, c) {
        var d = c("S2r0"),
            e = c("oo2L"),
            f = c("o6hs"),
            g = c("hOO0"),
            h = c("OiCI"),
            i = c("rvFo"),
            j = c("HFSu");
        c("OHD8");
        var k = c("sFqu"),
            l = c("loz7");

        function m(a) {
            return "ON_INSTALL" === a.authPolicy && ["plugin_connector_1p_1a69035c238881919c4190932b2df699", "plugin_connector_1p_5925693c1aa88191a4959257e60d0734"].includes(a.remotePluginId ?? a.id)
        }
        c.d(b, {}, {
            a: function(a, b, c) {
                return null != b ? a.apps.find(a => (0, g.a)(a.id) === (0, g.a)(b)) ?? null : m(a.summary) && 2 === a.apps.length && null != c && a.apps.some(a => "disabled-by-admin" === c[a.id]) ? a.apps.find(a => null === c[a.id]) ?? null : 1 === a.apps.length ? a.apps[0] : null
            },
            b: function(a, b, c) {
                let g = c.hostedAccountId ?? a.get(h.d) ?? null,
                    m = (0, k.a)(b, c)?.productSku ?? (0, e.j)();
                return (0, d.a)({
                    queryKey: ["plugin-install-app-link", g, c.installAttemptId, b, m],
                    queryFn: async d => {
                        let {
                            signal: e
                        } = d, i = new AbortController, k = a.watch(a => {
                            let b = a.get(l.o);
                            ((a.get(h.d) ?? null) !== g || "closed" === b.kind || b.installAttemptId !== c.installAttemptId) && i.abort()
                        });
                        try {
                            let a = AbortSignal.any([e, i.signal]);
                            a.throwIfAborted();
                            let c = await j.CodexRequest.safeGet("/aip/connectors/{connector_id}/link", {
                                surface: "connector_setup",
                                parameters: {
                                    path: {
                                        connector_id: b
                                    }
                                },
                                additionalHeaders: {
                                    [f.a]: m
                                },
                                signal: a
                            });
                            return a.throwIfAborted(), c.link
                        } finally {
                            k()
                        }
                    },
                    retry: (a, b) => !1,
                    retryDelay: a => 250 * 2 ** a,
                    staleTime: null == c.installAttemptId ? 0 : i.b.ONE_MINUTE,
                    gcTime: i.b.ONE_MINUTE
                })
            },
            c: m
        })
    }),
    WUyT: (function(a, b, c) {
        var d = c("iRMi"),
            e = c("dSKa"),
            f = c("DBCl"),
            g = c("lAQI"),
            h = c("o6hs"),
            i = c("JngQ"),
            j = c("xWQV");
        let k = g.F({
                conversationId: g.L().transform(f.Ye),
                requestId: g.Q([g.L(), g.E()]).transform(f.gf),
                response: g.F({
                    action: g.p(["accept", "decline", "cancel"]),
                    content: g.x().nullable(),
                    _meta: g.x().nullable()
                })
            }),
            l = g.g(g.F({
                category: g.L().nullable(),
                description: g.L().nullable(),
                id: g.L().min(1),
                installUrl: g.L().nullable(),
                name: g.L()
            })),
            m = g.m("projectKind", [g.F({
                projectId: g.L(),
                projectKind: g.z("local"),
                rootPaths: g.g(g.L()).optional()
            }), g.F({
                projectId: g.L(),
                projectKind: g.z("remote")
            })]).nullable(),
            n = g.F({
                kind: g.z("chatgpt").optional()
            }),
            o = g.F({
                installAttemptId: g.L().optional(),
                pluginId: g.L().optional(),
                childInstall: g.j(),
                terminalResult: g.p(["success", "failure", "cancelled"]).optional()
            }),
            p = g.F({
                requiredAppAnalytics: g.J(g.L(), o),
                suppressSuccessToast: g.j(),
                successToast: g.z("connected"),
                appConnectOptions: h.d,
                skipGoogleOAuthBundle: g.j(),
                activeProject: m,
                conversation: g.m("type", [g.F({
                    type: g.z("app-server"),
                    conversationId: g.L().transform(f.Ye)
                }), g.F({
                    type: g.z("chatgpt"),
                    conversationId: g.L().min(1)
                })]),
                browserFamily: g.k(a => "string" == typeof a && (0, e.D)(a)),
                elicitationOwnsConnectorRefresh: g.j(),
                hostedAccountId: g.L().min(1),
                pluginRedirect: g.F({
                    search: g.L(),
                    consentAfterOAuth: g.j().optional(),
                    hasAcceptedInstallConsent: g.j().optional()
                }),
                productContext: g.p(["catalog", "chatgpt", "codex"]),
                onboardingMode: g.p(["work", "codex"]),
                installAttemptId: g.L(),
                requestedCompanionConnectorIds: g.g(g.L()),
                marketplaceAnalytics: g.F({
                    chatgpt: j.a.optional(),
                    source: g.p(d.CodexPluginSource),
                    suggestionId: g.L().optional(),
                    surface: g.p(d.CodexPluginMarketplaceSurface),
                    voiceSessionId: g.L().optional()
                }),
                origin: g.p(["in_conversation_elicitation", "setup_codex", "plugin_creator"]),
                pendingElicitationReply: k,
                postInstallComposerPrefill: g.L(),
                postInstallPluginSuggestion: g.F({
                    accountId: g.L().min(1),
                    userId: g.L().min(1),
                    conversationId: g.L().min(1),
                    messageId: g.L().min(1),
                    pluginId: g.L().min(1)
                }).and(g.m("kind", [n, i.a])),
                postInstallConnectorSetup: g.F({
                    accountId: g.L().min(1),
                    userId: g.L().min(1),
                    connectorId: g.L().min(1),
                    installationKey: g.L().min(1),
                    options: h.d.optional()
                }),
                postInstallNewConversation: g.F({
                    activeProject: m,
                    codexAppMode: f.Ge,
                    replace: g.j(),
                    startInSidebar: g.j()
                }).partial(),
                requestId: g.E(),
                requiresAppSetup: g.j(),
                postConnectSource: g.p(["plugin_install", "elicitation", "zero_state"]),
                requestedConnectorId: g.L().min(1),
                source: g.p(d.CodexPluginSource),
                sourceAttributionId: g.L(),
                sourceSectionId: g.L(),
                telemetry: g.F({
                    categoryId: g.L(),
                    source: g.z("new_chat_page_suggestions"),
                    suggestionId: g.L(),
                    suggestionLevel: g.p(d.CodexNewChatSuggestionLevel),
                    surface: g.p(d.CodexAmbientSuggestionSurface)
                })
            }).partial();
        c.d(b, {}, {
            a: p,
            b: k,
            c: l,
            d: o
        })
    }),
    loz7: (function(a, b, c) {
        var d = c("QosV"),
            e = c("nuXe"),
            f = c.n(e),
            g = c("Q840"),
            h = c("OiCI"),
            i = c("GaA7"),
            j = c("OWtl"),
            k = c("SaEY"),
            l = c("Y2Gi"),
            m = c("q9zg"),
            n = c("cLdu");
        let o = (0, g.v)(j.a, a => !1),
            p = (0, g.u)(j.a, {
                kind: "closed"
            }, {
                onMount: (a, b) => b.watch(b => {
                    let c = b.get(h.d) ?? void 0;
                    a(a => "closed" !== a.kind && null != a.hostedAccountId && a.hostedAccountId !== c ? G(a) : a)
                })
            }),
            q = (0, g.c)(j.a, a => {
                let {
                    get: b
                } = a;
                return F(b(p))
            }),
            r = 0,
            s = new Map;

        function t(a, b, c) {
            if (!(0, n.i)(b)) return c;
            let d = a.get(h.d) ?? void 0;
            return {
                ...c,
                hostedAccountId: c.hostedAccountId ?? d
            }
        }

        function u(a, b) {
            a.set(p, D(b, "ON_INSTALL" === b.plugin.plugin.authPolicy || "plugin_creator" === b.origin)), v(a)
        }

        function v(a) {
            let b = a.get(p);
            if ("details" !== b.kind && "installing" !== b.kind || null != b.incentiveDecision && (0, m.o)(a, b.incentiveDecision.identity)) return !1;
            let c = (0, m.g)(a, [b.plugin.plugin.id, b.plugin.plugin.remotePluginId, b.plugin.plugin.shareContext?.remotePluginId]),
                d = a.get(m.j);
            if (null == c || null == d) return !1;
            let e = {
                ...b,
                kind: "reviewIncentive",
                pluginRedirect: "details" === b.kind && null != b.pluginRedirect ? {
                    ...b.pluginRedirect,
                    hasAcceptedInstallConsent: !0
                } : b.pluginRedirect,
                incentiveCampaignId: c.campaign_id,
                incentiveChecking: !0,
                incentiveIdentity: d
            };
            return a.set(p, e), w(a, e), !0
        }
        async function w(a, b) {
            if (a.get(p) !== b) return;
            if (b.incentiveCampaignId === l.b.campaign_id && !a.get(m.d) && (b.incentiveChecking || !(0, m.o)(a, b.incentiveIdentity) || !b.incentiveDecision?.accepted && !a.get(m.m)?.includes(b.incentiveCampaignId))) return void x(a, b, !1);
            let {
                campaignId: c,
                query: {
                    data: d,
                    isError: e
                }
            } = await (0, m.q)(a, {
                campaignId: b.incentiveCampaignId,
                hostId: b.hostId
            });
            if (a.get(p) !== b) return;
            let f = c === b.incentiveCampaignId ? b : {
                ...b,
                incentiveCampaignId: c
            };
            if (f !== b && a.set(p, f), e && b.incentiveChecking && (0, m.c)(c) && (0, m.o)(a, b.incentiveIdentity)) return void x(a, f, !1);
            if (!e && (0, m.o)(a, b.incentiveIdentity)) {
                if (d?.kind === "unavailable" || d?.kind === "capacity-exhausted") return void x(a, f, !1);
                if (d?.kind === "offer" && (null != d.offer.claim_status || null != d.offer.reward_granted_at)) {
                    if (await a.query.cancel(m.i), a.get(p) !== f || !(0, m.o)(a, b.incentiveIdentity)) return;
                    (0, m.b)(a, d.offer);
                    let c = (0, m.f)(d.offer);
                    x(a, f, "expired" !== c && "capacity-exhausted" !== c);
                    return
                }
            }
            a.set(p, {
                ...f,
                incentiveChecking: !1
            })
        }

        function x(a, b, c) {
            a.get(p) !== b || (0, m.o)(a, b.incentiveIdentity) && a.set(p, D({
                ...b,
                incentiveDecision: {
                    campaignId: b.incentiveCampaignId,
                    identity: b.incentiveIdentity,
                    accepted: c
                }
            }, "ON_INSTALL" === b.plugin.plugin.authPolicy || "plugin_creator" === b.origin))
        }

        function y(a, b) {
            return "closed" !== a.kind && null != b && a.requestId === b
        }

        function z(a, b) {
            let {
                apps: c,
                browserExtensions: d,
                connectingAppId: e,
                hostId: f,
                options: g,
                plugin: h,
                installedInThisFlow: i
            } = b, j = !1;
            return a.set(p, a => {
                if ("closed" === a.kind || "loadingPlugin" === a.kind || a.hostId !== f || a.plugin.plugin.id !== h.plugin.id || !y(a, g?.requestId ?? a.requestId)) return a;
                let b = c.map(b => {
                        let c = "pending";
                        return "connectAppBeforeInstall" === a.kind && a.app.id === b.id ? c = a.status : "installing" === a.kind && a.connectedAppId === b.id && (c = "connected"), {
                            app: b,
                            status: c
                        }
                    }),
                    k = b.find(a => a.app.id === e),
                    l = g?.pendingElicitationReply != null && a.pendingElicitationReply === g.pendingElicitationReply ? a.pendingElicitationReplyFailureCount : void 0;
                return j = !0, null == k ? {
                    ...a,
                    ...g,
                    kind: "needsApps",
                    installedInThisFlow: i,
                    hostId: f,
                    pendingElicitationReplyFailureCount: l,
                    plugin: h,
                    requiredApps: b,
                    requiredBrowserExtensions: d
                } : {
                    ...a,
                    ...g,
                    kind: "connectApp",
                    installedInThisFlow: i,
                    hostId: f,
                    pendingElicitationReplyFailureCount: l,
                    plugin: h,
                    app: k.app,
                    requiredApps: b,
                    requiredBrowserExtensions: d
                }
            }), j
        }

        function A(a) {
            return "connectAppBeforeInstall" === a.kind ? G(a) : a
        }

        function B(a) {
            return "connectApp" !== a.kind ? a : 1 === a.requiredApps.length && 0 === a.requiredBrowserExtensions.length && a.requiredApps[0]?.status !== "connected" && a.requiredApps[0]?.status !== "waitingForCallback" ? G(a) : {
                ...a,
                kind: "needsApps"
            }
        }

        function C(a, b) {
            let {
                appId: c,
                requestedCompanionConnectorIds: d,
                status: e
            } = b;
            a.set(p, a => {
                if ("closed" === a.kind) return a;
                let b = "waitingForCallback" === e && null != d ? f()([...a.requestedCompanionConnectorIds ?? [], ...d]) : void 0;
                return "connectAppBeforeInstall" === a.kind ? a.app.id !== c ? a : {
                    ...a,
                    ...null == b ? {} : {
                        requestedCompanionConnectorIds: b
                    },
                    status: e
                } : "needsApps" !== a.kind && "connectApp" !== a.kind ? a : {
                    ...a,
                    ...null == b ? {} : {
                        requestedCompanionConnectorIds: b
                    },
                    requiredApps: a.requiredApps.map(a => a.app.id === c ? {
                        ...a,
                        status: e
                    } : a)
                }
            })
        }

        function D(a, b) {
            return {
                ...a,
                kind: "installing",
                installStarted: !1,
                phase: b ? "loading" : "installing",
                progressPercent: 0,
                requiresAppPreparation: b
            }
        }

        function E(a) {
            return ("needsApps" === a.kind || "connectApp" === a.kind) && a.requiredApps.length > 0 && a.requiredApps.every(a => "connected" === a.status) && 0 === a.requiredBrowserExtensions.length
        }

        function F(a) {
            return !(E(a) || "closed" !== a.kind && null != a.pendingElicitationReply || "loadingPlugin" === a.kind || "confirmConnect" === a.kind || "reviewIncentive" === a.kind || "installing" === a.kind || "preparingApp" === a.kind || "connectAppBeforeInstall" === a.kind && ("automatic" !== a.connectMode || "waitingForCallback" !== a.status))
        }

        function G(a) {
            let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "cancelled";
            if ("closed" !== a.kind && null != a.requestId) {
                let c = s.get(a.requestId);
                s.delete(a.requestId), "failed" === b ? c?.onError?.() : c?.onCancel?.()
            }
            return {
                kind: "closed"
            }
        }

        function H(a) {
            "closed" !== a.kind && null != a.requestId && s.delete(a.requestId)
        }
        c.d(b, {}, {
            a: q,
            b: async function(a, b, c) {
                let d, e = c.incentiveDecision;
                if (null == e) return !0;
                if ((0, m.o)(a, e.identity)) {
                    if (e.accepted) {
                        let a = await i.b.pluginIncentives?.checkIdentity({
                            campaignId: e.campaignId,
                            hostId: b,
                            identity: e.identity
                        }).catch(() => "retryable");
                        "matched" !== a && (d = a ?? "retryable")
                    }
                } else d = "identity-changed";
                if ((0, m.o)(a, e.identity) || (d = "identity-changed"), null == d) return !0;
                let f = a.get(p);
                return "closed" !== f.kind && "loadingPlugin" !== f.kind && f.incentiveDecision === e && f.requestId === c.requestId && f.hostId === b && (a.set(p, {
                    ...f,
                    kind: "reviewIncentive",
                    incentiveCampaignId: e.campaignId,
                    incentiveChecking: !1,
                    incentiveIdentity: e.identity,
                    incentiveFailure: d
                }), !1)
            },
            c: function(a, b) {
                if (null == b) throw Error("Cannot complete an unregistered plugin installation");
                return !a.get(o, b) && (a.set(o, b, !0), !0)
            },
            d: function(a, b) {
                let {
                    hostId: c,
                    requestId: d
                } = b, e = !1;
                return a.set(p, a => "loadingPlugin" !== a.kind || a.hostId !== c || a.requestId !== d ? a : (e = !0, G(a, "failed"))), e
            },
            e: G,
            f: function(a, b) {
                let c = a.get(p);
                if ("confirmConnect" === c.kind && c.requestId === b) {
                    if ((0, n.i)(c.hostId) && a.get(h.d) !== c.hostedAccountId) return void a.set(p, G(c));
                    u(a, c)
                }
            },
            g: x,
            h: function(a) {
                return "loadingPlugin" === a.kind ? a : "installing" === a.kind ? {
                    hostId: a.hostId,
                    installAttemptId: a.installAttemptId,
                    kind: "installing",
                    phase: a.phase,
                    plugin: a.plugin,
                    progressPercent: a.progressPercent,
                    sourceSectionId: a.sourceSectionId
                } : ("needsApps" === a.kind || "connectApp" === a.kind) && (E(a) || !0 === a.pendingElicitationReplyClaimed) ? {
                    hostId: a.hostId,
                    installAttemptId: a.installAttemptId,
                    kind: "installing",
                    phase: "loading",
                    plugin: a.plugin,
                    progressPercent: 100,
                    sourceSectionId: a.sourceSectionId
                } : "reviewIncentive" === a.kind && a.incentiveChecking || "preparingApp" === a.kind || "connectAppBeforeInstall" === a.kind && "automatic" === a.connectMode && "waitingForCallback" !== a.status ? {
                    hostId: a.hostId,
                    installAttemptId: a.installAttemptId,
                    kind: "installing",
                    phase: "loading",
                    plugin: a.plugin,
                    progressPercent: 0,
                    sourceSectionId: a.sourceSectionId
                } : null
            },
            i: function(a) {
                return "closed" === a.kind ? null : a.hostId
            },
            j: C,
            k: y,
            l: function(a, b) {
                let c = null == a ? void 0 : s.get(a);
                c?.onAppConnected == null || c.connectedAppIds?.has(b) || (c.connectedAppIds = c.connectedAppIds ?? new Set, c.connectedAppIds.add(b), c.onAppConnected(b))
            },
            m: function(a, b) {
                let {
                    hostId: c,
                    onAppConnected: d,
                    onCancel: e,
                    onError: f,
                    onSuccess: g,
                    options: h = {},
                    plugin: i
                } = b, j = a.get(p);
                if (!F(j)) return null;
                H(j);
                let k = t(a, c, h),
                    l = r += 1;
                return (null != d || null != e || null != f || null != g) && s.set(l, {
                    onAppConnected: d,
                    onCancel: e,
                    onError: f,
                    onSuccess: g
                }), a.set(p, {
                    ...k,
                    hostId: c,
                    kind: "loadingPlugin",
                    phase: "loading",
                    plugin: {
                        displayName: i.displayName,
                        plugin: {
                            id: i.remotePluginId,
                            remotePluginId: i.remotePluginId
                        }
                    },
                    progressPercent: 0,
                    requestId: l,
                    source: k.source ?? k.marketplaceAnalytics?.source
                }), l
            },
            n: function(a, b) {
                let {
                    hostId: c,
                    loadingRequestId: d,
                    mode: e,
                    onAppConnected: f,
                    onCancel: g,
                    onError: h,
                    onSuccess: i,
                    options: j = {},
                    plugin: l
                } = b, m = a.get(p);
                if ("loadingPlugin" === m.kind) {
                    if ("install" !== e || m.hostId !== c || m.requestId !== d) return !1
                } else if (!F(m)) return !1;
                H(m);
                let n = t(a, c, j);
                r += 1, (null != f || null != g || null != h || null != i) && s.set(r, {
                    onAppConnected: f,
                    onCancel: g,
                    onError: h,
                    onSuccess: i
                });
                let o = {
                    ...n,
                    hostId: c,
                    installAttemptId: "install" === e ? n.installAttemptId ?? n.appConnectOptions?.installAttemptId ?? crypto.randomUUID() : n.installAttemptId,
                    plugin: l,
                    requestId: r,
                    source: n.source ?? n.marketplaceAnalytics?.source
                };
                return "details" === e ? a.set(p, {
                    ...o,
                    kind: "details"
                }) : j.offersPluginDetailsBeforeConnect && !1 === l.plugin.mustShowInstallationInterstitial && null == (0, k.a)(l.plugin) ? a.set(p, {
                    ...o,
                    kind: "confirmConnect"
                }) : u(a, o), !0
            },
            o: p,
            p: w,
            q: v,
            r: async function(a) {
                let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null == a) return;
                let c = s.get(a)?.onSuccess;
                s.delete(a), await c?.(b)
            },
            s: z,
            t: function() {
                let a, b, c, e, f, h, i, k, l, m, n, o, q, r, s, t, u, v, w, x = (0, d.c)(59),
                    E = (0, g.y)(j.a),
                    F = (0, g.z)(p);
                x[0] !== E ? (a = a => {
                    E.set(p, a)
                }, x[0] = E, x[1] = a) : a = x[1];
                let H = a;
                x[2] !== E ? (b = a => (function(a, b) {
                    let {
                        hostId: c,
                        pluginId: d
                    } = b, e = a.get(p);
                    return ("installing" === e.kind || "connectAppBeforeInstall" === e.kind) && e.hostId === c && e.plugin.plugin.id === d && !e.installStarted && (a.set(p, {
                        ...e,
                        installStarted: !0
                    }), !0)
                })(E, a), x[2] = E, x[3] = b) : b = x[3];
                let I = b;
                x[4] !== E || x[5] !== F ? (c = () => "closed" !== F.kind && y(E.get(p), F.requestId), x[4] = E, x[5] = F, x[6] = c) : c = x[6];
                let J = c;
                x[7] !== J || x[8] !== E ? (e = a => {
                    let {
                        hostId: b,
                        pluginId: c
                    } = a, d = E.get(p);
                    return J() && "closed" !== d.kind && "loadingPlugin" !== d.kind && d.hostId === b && d.plugin.plugin.id === c && null != d.pendingElicitationReply ? !0 === d.pendingElicitationReplyClaimed || (d.pendingElicitationReplyFailureCount ?? 0) >= 2 ? {
                        kind: "already-claimed"
                    } : (E.set(p, {
                        ...d,
                        pendingElicitationReplyClaimed: !0
                    }), {
                        kind: "claimed",
                        reply: d.pendingElicitationReply
                    }) : {
                        kind: "not-pending"
                    }
                }, x[7] = J, x[8] = E, x[9] = e) : e = x[9];
                let K = e;
                x[10] !== E ? (f = a => {
                    let {
                        completed: b,
                        hostId: c,
                        pluginId: d,
                        reply: e
                    } = a, f = E.get(p);
                    return "closed" !== f.kind && "loadingPlugin" !== f.kind && f.hostId === c && f.plugin.plugin.id === d && f.pendingElicitationReply === e && !0 === f.pendingElicitationReplyClaimed && (E.set(p, {
                        ...f,
                        pendingElicitationReply: b ? void 0 : f.pendingElicitationReply,
                        pendingElicitationReplyClaimed: !!b && void 0,
                        pendingElicitationReplyFailureCount: b ? void 0 : (f.pendingElicitationReplyFailureCount ?? 0) + 1
                    }), !0)
                }, x[10] = E, x[11] = f) : f = x[11];
                let L = f;
                x[12] !== H ? (h = (a, b, c) => {
                    let d = void 0 === c ? {} : c,
                        e = !1;
                    return H(c => "installing" !== c.kind && ("details" !== c.kind || null == c.pluginRedirect) || "installing" === c.kind && c.installStarted || c.hostId !== a || c.plugin.plugin.id !== b.plugin.id ? c : (e = !0, {
                        ...c,
                        ...d,
                        kind: "preparingApp",
                        hostId: a,
                        plugin: b
                    })), e
                }, x[12] = H, x[13] = h) : h = x[13];
                let M = h;
                x[14] !== H ? (i = a => {
                    let {
                        app: b,
                        authTypeOverride: c,
                        connectMode: d,
                        hostId: e,
                        options: f,
                        plugin: g,
                        status: h
                    } = a, i = void 0 === d ? "interactive" : d, j = void 0 === h ? "pending" : h;
                    H(a => "preparingApp" !== a.kind && "connectAppBeforeInstall" !== a.kind || a.hostId !== e || a.plugin.plugin.id !== g.plugin.id || "connectAppBeforeInstall" === a.kind && a.app.id !== b.id ? a : {
                        ...a,
                        ...f,
                        authTypeOverride: c,
                        kind: "connectAppBeforeInstall",
                        app: b,
                        connectMode: i,
                        hostId: e,
                        installStarted: "connectAppBeforeInstall" === a.kind && a.installStarted,
                        plugin: g,
                        status: j
                    })
                }, x[14] = H, x[15] = i) : i = x[15];
                let N = i;
                x[16] !== H ? (k = a => {
                    let {
                        hostId: b,
                        pluginId: c
                    } = a;
                    H(a => "preparingApp" === a.kind && a.hostId === b && a.plugin.plugin.id === c ? G(a, "failed") : a)
                }, x[16] = H, x[17] = k) : k = x[17];
                let O = k;
                x[18] !== H ? (l = a => {
                    let {
                        hostId: b,
                        pluginId: c
                    } = a;
                    H(a => "preparingApp" === a.kind && a.hostId === b && a.plugin.plugin.id === c ? D(a, !1) : a)
                }, x[18] = H, x[19] = l) : l = x[19];
                let P = l;
                x[20] !== E ? (m = a => {
                    let {
                        appId: b,
                        hostId: c,
                        pluginId: d
                    } = a, e = E.get(p);
                    return "connectAppBeforeInstall" === e.kind && e.app.id === b && e.hostId === c && e.plugin.plugin.id === d && (E.set(p, {
                        ...D(e, !1),
                        connectedAppId: b,
                        installStarted: e.installStarted
                    }), !0)
                }, x[20] = E, x[21] = m) : m = x[21];
                let Q = m;
                x[22] !== H ? (n = (a, b, c) => {
                    H({
                        ...void 0 === c ? {} : c,
                        kind: "details",
                        hostId: a,
                        plugin: b
                    })
                }, x[22] = H, x[23] = n) : n = x[23];
                let R = n;
                x[24] !== J || x[25] !== H ? (o = a => {
                    let b = void 0 === a ? "cancelled" : a;
                    return !!J() && (H(a => G(a, b)), !0)
                }, x[24] = J, x[25] = H, x[26] = o) : o = x[26];
                let S = o;
                x[27] !== J || x[28] !== H ? (q = a => {
                    J() && H(b => "installing" === b.kind ? {
                        ...b,
                        progressPercent: a
                    } : b)
                }, x[27] = J, x[28] = H, x[29] = q) : q = x[29];
                let T = q;
                x[30] !== H ? (r = a => {
                    H(b => {
                        if ("needsApps" !== b.kind) return b;
                        let c = b.requiredApps.find(b => b.app.id === a);
                        return null == c ? b : {
                            ...b,
                            kind: "connectApp",
                            app: c.app
                        }
                    })
                }, x[30] = H, x[31] = r) : r = x[31];
                let U = r;
                x[32] !== H ? (s = () => {
                    H(B)
                }, x[32] = H, x[33] = s) : s = x[33];
                let V = s;
                x[34] !== H ? (t = () => {
                    H(A)
                }, x[34] = H, x[35] = t) : t = x[35];
                let W = t;
                return x[36] !== E ? (u = a => C(E, a), x[36] = E, x[37] = u) : u = x[37], x[38] !== J || x[39] !== E ? (v = a => !!J() && z(E, a), x[38] = J, x[39] = E, x[40] = v) : v = x[40], x[41] !== O || x[42] !== K || x[43] !== I || x[44] !== S || x[45] !== V || x[46] !== W || x[47] !== N || x[48] !== R || x[49] !== U || x[50] !== M || x[51] !== Q || x[52] !== F || x[53] !== T || x[54] !== L || x[55] !== P || x[56] !== u || x[57] !== v ? (w = {
                    cancelPluginInstallAppPreparation: O,
                    claimPluginInstall: I,
                    claimPendingElicitationReply: K,
                    closePluginInstallAppConnectBeforeInstall: W,
                    closePluginInstallAppConnect: V,
                    closePluginInstall: S,
                    markRequiredAppStatus: u,
                    openPluginInstallDetails: R,
                    openPluginInstallAppConnectBeforeInstall: N,
                    openRequiredAppConnect: U,
                    preparePluginInstallAppConnect: M,
                    session: F,
                    setPluginInstallProgress: T,
                    setPluginInstallNeedsApps: v,
                    settlePendingElicitationReply: L,
                    startPluginInstallAfterAppPreparation: P,
                    resumePluginInstallAfterAppConnect: Q
                }, x[41] = O, x[42] = K, x[43] = I, x[44] = S, x[45] = V, x[46] = W, x[47] = N, x[48] = R, x[49] = U, x[50] = M, x[51] = Q, x[52] = F, x[53] = T, x[54] = L, x[55] = P, x[56] = u, x[57] = v, x[58] = w) : w = x[58], w
            }
        })
    }),
    TupU: (function(a, b, c) {
        c.d(b, {
            a: () => E,
            b: () => D
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("irkb"),
            g = c("Q840"),
            h = c("zd8w"),
            i = c("yGJ5"),
            j = c("r4w4"),
            k = c("Bbed"),
            l = c("OWtl"),
            m = c("SGsN"),
            n = c("gPv1"),
            o = c("svjy"),
            p = c("vLsY"),
            q = c("GaA7"),
            r = c("kfGJ"),
            s = c("soaw"),
            t = c("Y2Gi"),
            u = c("q9zg");
        let v = (0, g.u)(l.a, () => new Set),
            w = (0, g.u)(l.a, () => new Set);

        function x() {
            let a, b, c = (0, e.c)(9),
                f = (0, g.z)(u.j),
                h = (0, g.z)(u.h),
                i = (0, g.z)(u.m);
            if (null == f) return null;
            if (c[0] !== i || c[1] !== h || c[2] !== f) {
                let b;
                c[4] !== i || c[5] !== f ? (b = a => {
                    let {
                        campaign_id: b
                    } = a, c = i?.includes(b) ?? !1;
                    return c || b === t.b.campaign_id ? (0, d.jsx)(y, {
                        campaignId: b,
                        identity: f,
                        enabled: c
                    }, JSON.stringify([f.userId, f.accountId, b])) : null
                }, c[4] = i, c[5] = f, c[6] = b) : b = c[6], a = h.map(b), c[0] = i, c[1] = h, c[2] = f, c[3] = a
            } else a = c[3];
            return c[7] !== a ? (b = (0, d.jsx)(d.Fragment, {
                children: a
            }), c[7] = a, c[8] = b) : b = c[8], b
        }

        function y(a) {
            let b, c, d, f, i, j = (0, e.c)(20),
                {
                    campaignId: k,
                    identity: x,
                    enabled: y
                } = a,
                A = (0, g.y)(l.a),
                B = (0, s.a)(),
                [C, D] = (0, h.useState)(!1),
                {
                    data: E,
                    dataUpdatedAt: F,
                    isError: G,
                    isFetching: H,
                    isStale: I
                } = (0, g.x)(y || C ? u.k : null, {
                    campaignId: k,
                    hostId: r.a
                }) ?? {},
                J = (0, h.useRef)(null),
                K = (0, h.useRef)(void 0);
            j[0] !== k || j[1] !== E || j[2] !== F || j[3] !== x || j[4] !== G || j[5] !== H || j[6] !== B || j[7] !== I || j[8] !== A ? (b = async () => {
                if (E?.kind !== "offer" || null == F || G || H || I || !(0, u.o)(A, x)) return;
                let a = E.offer,
                    b = J.current,
                    c = (0, u.f)(a);
                if (J.current = c, k === t.b.campaign_id && ("paid" === c || "expired" === c ? (D(!1), (0, u.e)(A, x, F)) : ("pending" === c || "processing" === c) && D(!0)), "success_verified" === a.claim_status || null != a.reward_granted_at) {
                    let b = JSON.stringify([x.userId, x.accountId, k, a.claim_expires_at]),
                        c = A.get(w);
                    c.has(b) || (A.set(w, new Set(c).add(b)), A.queryClient.invalidateQueries({
                        queryKey: ["plugin-incentive", x.userId],
                        predicate: a => {
                            let {
                                queryKey: b
                            } = a;
                            return b[2] !== x.accountId || b[3] !== r.a || b[4] !== k
                        }
                    }), (0, p.a)(["plugin-incentive", x.userId]))
                }
                if (null == a.reward_granted_at) return;
                let d = JSON.stringify([x.userId, x.accountId, k, a.reward_granted_at]),
                    e = A.get(v);
                if (e.has(d) || (A.set(v, new Set(e).add(d)), "pending" !== b && "processing" !== b || null != a.reward_expires_at && Date.parse(a.reward_expires_at) <= Date.now()) || (A.query.invalidate(n.c), !await Promise.resolve(q.b?.pluginIncentives?.acknowledgeReceipt(d)).catch(z) || !B() || !(0, u.o)(A, x))) return;
                (0, u.p)(A, k, x, "receipt_shown");
                let f = A.get(o.a);
                K.current = A.get(m.f).success(k === t.b.campaign_id ? f.formatMessage({
                    id: "plugins.incentive.capcut.personalCreditsAdded",
                    defaultMessage: "{credits, plural, one {# credit} other {# credits}} added to your personal account"
                }, {
                    credits: a.reward_credits
                }) : f.formatMessage({
                    id: "plugins.incentive.workspaceCreditsAdded",
                    defaultMessage: "{credits, plural, one {# credit} other {# credits}} added to your workspace"
                }, {
                    credits: a.reward_credits
                }), {
                    id: d,
                    position: "top-center"
                })
            }, j[0] = k, j[1] = E, j[2] = F, j[3] = x, j[4] = G, j[5] = H, j[6] = B, j[7] = I, j[8] = A, j[9] = b) : b = j[9];
            let L = (0, h.useEffectEvent)(b);
            return j[10] !== L ? (c = () => {
                let a = !0;
                return queueMicrotask(() => {
                    a && L()
                }), () => {
                    a = !1
                }
            }, j[10] = L, j[11] = c) : c = j[11], j[12] !== E || j[13] !== F || j[14] !== G || j[15] !== H || j[16] !== I ? (d = [E, F, G, H, I], j[12] = E, j[13] = F, j[14] = G, j[15] = H, j[16] = I, j[17] = d) : d = j[17], (0, h.useEffect)(c, d), j[18] === Symbol.for("react.memo_cache_sentinel") ? (f = () => () => K.current?.close(), i = [], j[18] = f, j[19] = i) : (f = j[18], i = j[19]), (0, h.useEffect)(f, i), null
        }

        function z() {
            return !1
        }
        var A = c("loz7"),
            B = c("Rbbe");
        let C = (0, k.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(907643), c.e(521574)]).then(() => c("xB4C"))).PluginInstallationContent);

        function D() {
            return C.prefetch()
        }

        function E() {
            let a, b, c, k, m, n, o, p = (0, e.c)(15),
                q = (0, g.y)(l.a),
                r = (0, f.c)(),
                {
                    clearPendingAppConnect: s
                } = (0, i.g)(),
                t = (0, h.useEffectEvent)(s),
                u = (0, g.z)(A.o),
                [v, w] = (0, h.useState)(!1);
            return v || "closed" === u.kind || w(!0), p[0] !== t || p[1] !== r || p[2] !== q ? (a = () => (0, B.f)(q, r, t), p[0] = t, p[1] = r, p[2] = q, p[3] = a) : a = p[3], p[4] !== r || p[5] !== q ? (b = [r, q], p[4] = r, p[5] = q, p[6] = b) : b = p[6], (0, h.useEffect)(a, b), p[7] !== q ? (c = () => (0, j.a)(q), k = [q], p[7] = q, p[8] = c, p[9] = k) : (c = p[8], k = p[9]), (0, h.useEffect)(c, k), p[10] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, d.jsx)(x, {}), p[10] = m) : m = p[10], p[11] !== v ? (n = v ? (0, d.jsx)(C, {}) : null, p[11] = v, p[12] = n) : n = p[12], p[13] !== n ? (o = (0, d.jsxs)(d.Fragment, {
                children: [m, n]
            }), p[13] = n, p[14] = o) : o = p[14], o
        }
    }),
    Rbbe: (function(a, b, c) {
        var d = c("HJEB"),
            e = c("I3F6"),
            f = c("Haiv"),
            g = c("SqAt"),
            h = c("Dgwo"),
            i = c("HUHI"),
            j = c("OiCI"),
            k = c("SGsN"),
            l = c("svjy"),
            m = c("WFY2"),
            n = c("kpIY"),
            o = c("Nwp9"),
            p = c("ugfi"),
            q = c("cLdu"),
            r = c("ueue"),
            s = c("loz7"),
            t = c("TZ9K");
        let u = "plugin-oauth-install-reconciliation-by-state-v1",
            v = {},
            w = (0, o.b)(u, v),
            x = new Map,
            y = new Set;
        async function z(a, b, c) {
            let d = a.get(w)[b];
            if (null == d || d.rolledBack) return;
            if (!E(a, d)) return void A(a, b);
            C(b);
            let e = {
                ...d,
                oauthFailed: !0
            };
            a.set(w, a => ({
                ...a,
                [b]: e
            })), e.installed && await D(a, e, c)
        }

        function A(a, b) {
            C(b), a.set(w, a => {
                if (!(b in a)) return a;
                let {
                    [b]: c, ...d
                } = a;
                return d
            })
        }

        function B(a, b, c) {
            C(b.oauthState), x.set(b.oauthState, setTimeout(() => {
                x.delete(b.oauthState), (async function(a, b, c) {
                    let f = a.get(w)[b];
                    if (null == f || f.oauthFailed || f.rolledBack) return;
                    if (!E(a, f)) return void A(a, b);
                    let g = !1;
                    try {
                        if (null != f.productSku) {
                            let a = await (0, t.a)({
                                requiresAppSetup: !0,
                                requestedConnectorId: f.appId,
                                appConnectOptions: {
                                    connectorId: f.appId,
                                    productSku: f.productSku
                                }
                            });
                            g = "ready" === a.kind
                        } else {
                            let {
                                apps: b
                            } = await (0, h.b)(a, (0, i.h)(f.hostId)).sendRequest("app/installed", {
                                forceRefresh: !0
                            });
                            g = b.some(a => a.id === f.appId && a.callable)
                        }
                    } catch (a) {
                        m.a.error("Failed to verify an expired plugin OAuth installation", {
                            safe: {
                                pluginId: f.pluginId
                            },
                            sensitive: {
                                error: a
                            }
                        })
                    }
                    if (!E(a, f) || g) return void A(a, b);
                    let j = a.get(w)[b];
                    if (null == j || j.oauthFailed || j.rolledBack) return;
                    let n = a.get(s.o);
                    "closed" !== n.kind && "loadingPlugin" !== n.kind && n.hostId === j.hostId && n.plugin.plugin.id === j.pluginId && n.requestId === j.requestId && a.set(s.o, (0, s.e)(n, "failed")), a.get(k.f).danger(a.get(l.a).formatMessage({
                        id: "plugins.install.oauthTimedOutWithPluginName",
                        defaultMessage: "Installation of {pluginName} timed out. Please try again"
                    }, {
                        pluginName: j.pluginDisplayName ?? (0, d.a)(j.pluginName)
                    }), {
                        errorAnalytics: {
                            toastId: "plugins.install.oauthTimedOut"
                        }
                    });
                    try {
                        await z(a, b, c)
                    } finally {
                        if (null != j.pendingElicitationReply && E(a, j)) try {
                            await (0, h.b)(a, j.hostId).replyWithMcpServerElicitationResponse(j.pendingElicitationReply.conversationId, j.pendingElicitationReply.requestId, (0, e.b)("decline"))
                        } catch (a) {
                            m.a.error("Failed to decline an expired plugin install elicitation", {
                                safe: {
                                    pluginId: j.pluginId
                                },
                                sensitive: {
                                    error: a
                                }
                            })
                        }
                    }
                })(a, b.oauthState, c).catch(a => {
                    m.a.error("Failed to reconcile an expired plugin OAuth install", {
                        safe: {
                            pluginId: b.pluginId
                        },
                        sensitive: {
                            error: a
                        }
                    })
                })
            }, Math.max(0, b.expiresAtMs - Date.now())))
        }

        function C(a) {
            let b = x.get(a);
            null != b && (clearTimeout(b), x.delete(a))
        }
        async function D(a, b, c) {
            if (y.has(b.oauthState)) return;
            let d = a.get(w)[b.oauthState];
            if (null == d || d.requestId !== b.requestId) return;
            if (!E(a, b)) return void A(a, b.oauthState);
            let e = a.get(s.o);
            if ("closed" !== e.kind && "loadingPlugin" !== e.kind && e.hostId === b.hostId && e.plugin.plugin.id === b.pluginId && e.requestId !== b.requestId) return void A(a, b.oauthState);
            y.add(b.oauthState);
            try {
                if (await (0, p.b)({
                        scope: a,
                        disableBundledAutoInstall: !1,
                        hostId: b.hostId,
                        marketplaceName: b.marketplaceName,
                        pluginId: b.pluginId,
                        pluginName: b.pluginName,
                        queryClient: c,
                        requestPluginId: b.requestPluginId
                    }), !E(a, b)) return void A(a, b.oauthState);
                (0, q.i)(b.hostId) || (0, r.u)({
                    enabled: !1,
                    hostId: b.hostId,
                    installed: !1,
                    pluginId: b.pluginId,
                    queryClient: c
                }), a.set(w, a => ({
                    ...a,
                    [b.oauthState]: {
                        ...b,
                        oauthFailed: !0,
                        rolledBack: !0
                    }
                }))
            } finally {
                y.delete(b.oauthState);
                let c = a.get(s.o);
                "closed" !== c.kind && "loadingPlugin" !== c.kind && c.hostId === b.hostId && c.plugin.plugin.id === b.pluginId && c.requestId === b.requestId && a.set(s.o, (0, s.e)(c, "failed"))
            }
        }

        function E(a, b) {
            let c = a.get(j.d) ?? void 0;
            return !(0, q.i)(b.hostId) || null != b.accountId && b.accountId === c
        }
        c.d(b, {}, {
            a: function(a, b) {
                let {
                    appId: c,
                    hostId: d,
                    hostedAccountId: e,
                    installAttemptId: h,
                    oauthState: i,
                    pendingElicitationReply: j,
                    plugin: k,
                    productSku: l,
                    queryClient: m,
                    requestId: n
                } = b;
                if (null == n || "ON_INSTALL" !== k.plugin.authPolicy || k.plugin.installed) return;
                let o = {
                    accountId: (0, q.i)(d) ? e : void 0,
                    appId: c,
                    expiresAtMs: Date.now() + 6e5,
                    hostId: d,
                    installAttemptId: h,
                    installed: !1,
                    marketplaceName: k.marketplaceName,
                    oauthFailed: !1,
                    oauthState: i,
                    pendingElicitationReply: j,
                    pluginDisplayName: (0, f.a)(k),
                    pluginId: k.plugin.id,
                    pluginName: k.plugin.name,
                    productSku: l,
                    requestId: n,
                    requestPluginId: (0, g.b)(k),
                    rolledBack: !1
                };
                a.set(w, a => ({
                    ...Object.fromEntries(Object.entries(a).filter(a => {
                        let [b, c] = a;
                        return c.hostId !== d || c.pluginId !== k.plugin.id || (C(b), !1)
                    })),
                    [i]: o
                })), B(a, o, m)
            },
            b: z,
            c: A,
            d: function(a, b) {
                let c = a.get(w)[b];
                return c?.oauthFailed === !0 || c?.rolledBack === !0
            },
            e: async function(a, b, c) {
                let d = a.get(w)[b];
                if (null == d) return !0;
                if (!E(a, d)) return A(a, b), !1;
                if (d.rolledBack) return !1;
                let e = {
                    ...d,
                    installed: !0
                };
                return a.set(w, a => ({
                    ...a,
                    [b]: e
                })), !e.oauthFailed || (await D(a, e, c), !1)
            },
            f: function(a, b, c) {
                let d = () => {
                    let d = Date.now(),
                        e = (0, n.k)(u, v),
                        f = {};
                    for (let [b, g] of Object.entries({
                            ...e,
                            ...a.get(w)
                        })) g.rolledBack && g.expiresAtMs + 864e5 <= d ? c({
                        appId: g.appId,
                        hostId: g.hostId,
                        pluginInstallOAuthState: b
                    }) : f[b] = g;
                    for (let c of (a.set(w, f), Object.values(a.get(w)))) c.oauthFailed || c.rolledBack || B(a, c, b)
                };
                return d(), window.addEventListener("focus", d), document.addEventListener("visibilitychange", d), () => {
                    for (let a of (window.removeEventListener("focus", d), document.removeEventListener("visibilitychange", d), x.keys())) C(a)
                }
            }
        })
    }),
    JfPH: (function(a, b, c) {
        var d = c("DBCl"),
            e = c("hOO0"),
            f = c("ygu7"),
            g = c("EEop"),
            h = c("cLdu"),
            i = c("kfGJ");
        c.d(b, {}, {
            getPluginTargetForReference: async function(a, b) {
                let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.a,
                    j = await (0, h.d)(a, {
                        productContext: "chatgpt",
                        surface: "plugin_reference"
                    }).catch(() => []),
                    k = (0, e.a)(b),
                    l = j.find(a => (0, e.a)(a.plugin.remotePluginId ?? a.plugin.id) === k || null != a.canonicalAppId && (0, e.a)(a.canonicalAppId) === k);
                if (null != l) return {
                    displayName: l.displayName ?? l.plugin.name,
                    pluginId: l.plugin.remotePluginId ?? l.plugin.id
                };
                let m = b;
                if (!(0, d.hi)(b)) {
                    let c = await (0, f.b)(a, b).catch(() => null);
                    if (null == c) return null;
                    m = c
                }
                let n = await a.query.getOrFetch(g.l, {
                    hostId: c,
                    marketplacePath: null,
                    pluginName: m,
                    remoteMarketplaceName: d.Zb
                }).catch(() => null);
                return null == n ? null : {
                    displayName: n.summary.interface?.displayName ?? n.summary.name,
                    pluginId: n.summary.remotePluginId ?? m
                }
            }
        })
    }),
    H0Gm: (function(a, b, c) {
        var d = c("Q840"),
            e = c("OWtl");
        let f = (0, d.u)(e.a, []),
            g = (0, d.c)(e.a, a => {
                let {
                    get: b
                } = a, c = [];
                for (let {
                        hostId: a,
                        pluginId: d
                    }
                    of b(f)) c.some(b => b.hostId === a && b.pluginId === d) || c.push({
                    hostId: a,
                    pluginId: d
                });
                return c
            }, {
                isEqual: (a, b) => a.length === b.length && a.every((a, c) => a.hostId === b[c]?.hostId && a.pluginId === b[c]?.pluginId)
            }),
            h = 0;
        c.d(b, {}, {
            a: function(a, b) {
                a.set(f, a => a.filter(a => a.operationId !== b))
            },
            b: g,
            c: function(a, b) {
                let c = h += 1;
                return a.set(f, a => [...a, {
                    ...b,
                    operationId: c
                }]), c
            }
        })
    }),
    K0RC: (function(a, b, c) {
        var d = c("pBUY"),
            e = c.n(d),
            f = c("N2rm");
        let g = (0, c("Nwp9").b)("recent-plugin-install-times", {});
        c.d(b, {}, {
            a: 12096e5,
            b: function(a, b) {
                return JSON.stringify([a, b === f.a ? "local" : b])
            },
            c: g,
            d: function(a, b, c, d) {
                let f = Date.now();
                a.set(g, a => ({
                    ...a,
                    [b]: {
                        ...e()(a[b], a => a + 12096e5 > f),
                        [c]: f,
                        ...null != d ? {
                            [d]: f
                        } : {}
                    }
                }))
            }
        })
    }),
    TZ9K: (function(a, b, c) {
        var d = c("oo2L"),
            e = c("o6hs"),
            f = c("Rvvc"),
            g = c("LH8k"),
            h = c("WFY2"),
            i = c("HFSu"),
            j = c("OHD8"),
            k = c("eShZ"),
            l = c("sFqu");
        c.d(b, {}, {
            a: async function(a, b) {
                let c = a.requestedConnectorId;
                if (!a.requiresAppSetup || null == c) return {
                    kind: "ready"
                };
                let m = (0, l.a)(c, a),
                    n = m?.productSku ?? (0, d.j)(),
                    o = {
                        [e.a]: n
                    };
                try {
                    let [a, e] = await Promise.all([i.CodexRequest.safeGet("/aip/connectors/{connector_id}", {
                        surface: "connector_setup",
                        parameters: {
                            path: {
                                connector_id: c
                            }
                        },
                        additionalHeaders: o
                    }), async function(a, b, c) {
                        let d = async () => {
                            let {
                                link: d
                            } = await i.CodexRequest.safeGet("/aip/connectors/{connector_id}/link", {
                                surface: "connector_setup",
                                parameters: {
                                    path: {
                                        connector_id: a
                                    }
                                },
                                additionalHeaders: b,
                                ...null == c ? {} : {
                                    expectedIdentity: c.expectedIdentity
                                }
                            });
                            return d
                        };
                        try {
                            return await d()
                        } catch (a) {
                            if (null == c || !c.isCurrent() || !(a instanceof k.FetchError) || !(0, j.a)(a) || (await new Promise(a => setTimeout(a, 250)), !c.isCurrent())) throw a;
                            return d()
                        }
                    }(c, o, b)]);
                    if ("DISABLED_BY_ADMIN" === a.status) return {
                        kind: "unavailable"
                    };
                    if (null == e && (0, d.u)(a, m)) return {
                        kind: "ready"
                    };
                    let h = {
                        category: null,
                        description: a.description ?? null,
                        id: c,
                        installUrl: null,
                        name: a.name
                    };
                    if (null == e || null != e.auth_status && "ACTIVE" !== e.auth_status) return {
                        kind: "needsAuth",
                        app: h
                    };
                    if ("CODEX" === n && (c === f.c || a.template_id === f.a || "github" === a.service)) try {
                        await i.CodexRequest.safeGet("/wham/github/list-repositories", {
                            parameters: {
                                query: {
                                    connector_id: c,
                                    page: 1,
                                    per_page: 1
                                }
                            }
                        })
                    } catch (a) {
                        if (a instanceof Error && (0, g.a)(a)?.type === "missing_github_connector_link") return {
                            kind: "needsAuth",
                            app: h
                        };
                        throw a
                    }
                    return {
                        kind: "ready"
                    }
                } catch (a) {
                    return h.a.info("Requested plugin connection could not be verified", {
                        safe: {},
                        sensitive: {
                            error: a
                        }
                    }), {
                        kind: "unavailable"
                    }
                }
            }
        })
    }),
    ndO4: (function(a, b, c) {
        var d = c("bTvG"),
            e = c("hOO0"),
            f = c("pDRe"),
            g = c("OiCI"),
            h = c("Cslg"),
            i = c("xWQV"),
            j = c("v70x"),
            k = c("ygu7"),
            l = c("loz7");

        function m(a) {
            let b = a.marketplaceAnalytics?.chatgpt;
            return null == b ? void 0 : {
                ...b,
                installAction: d.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_CONNECT_SINGLE,
                surface: null != a.installAttemptId ? b.surface : d.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_CONNECTOR_SETUP
            }
        }

        function n(a, b, c) {
            let {
                appId: j,
                appIds: l,
                apps: m,
                parentPluginId: n,
                parentCanonicalAppId: o,
                parentInstallAttemptId: p,
                sourceAttributionId: q,
                allowChildInstall: r,
                blocked: s,
                previous: t
            } = c;
            if (null != t && "failure" !== t.terminalResult) return t;
            let u = a.queryClient.getQueryData((0, f.b)({
                    accountId: a.get(g.a),
                    userId: a.get(h.k),
                    appIds: l,
                    enabled: !1
                }).queryKey)?.find(a => (0, e.a)(a.id) === (0, e.a)(j)),
                v = a.queryClient.getQueryData((0, k.d)(j, a.get(g.d)).queryKey),
                w = t?.childInstall ?? (r && v?.plugin_id !== n && (0, e.a)(o ?? "") !== (0, e.a)(j) && !m.some(a => a.id === j && a.isAccessible) && !u?.installed && u?.can_install !== !1 && !s),
                x = null != t ? t.pluginId : v?.plugin_id ?? void 0,
                y = {
                    childInstall: w,
                    installAttemptId: w ? crypto.randomUUID() : t?.installAttemptId ?? p,
                    pluginId: w ? x : n
                };
            return w && (0, i.c)(a, {
                ...b,
                installAction: d.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_CONNECT_SINGLE
            }, {
                action: "CHATGPT_PLUGIN_ACTION_TYPE_INSTALL",
                connectorId: j,
                installAttemptId: y.installAttemptId,
                pluginId: y.pluginId,
                referrerInstallAttemptId: p,
                referrerPluginId: n,
                result: "CHATGPT_PLUGIN_ACTION_RESULT_INITIATED",
                sourceAttributionId: q
            }), y
        }
        c.d(b, {}, {
            a: function(a, b, c, d) {
                let e = a.get(l.o);
                if ("needsApps" !== e.kind && "connectApp" !== e.kind && "connectAppBeforeInstall" !== e.kind || e.marketplaceAnalytics?.chatgpt == null) return;
                let f = m(e);
                if (null == f) return;
                let g = "connectAppBeforeInstall" === e.kind ? [e.app.id] : e.requiredApps.map(a => {
                        let {
                            app: b
                        } = a;
                        return b.id
                    }),
                    h = e.requiredAppAnalytics?.[b],
                    i = n(a, f, {
                        appId: b,
                        appIds: g,
                        apps: c,
                        parentPluginId: (0, j.c)(e.plugin.plugin) ?? e.plugin.plugin.id,
                        parentCanonicalAppId: e.plugin.canonicalAppId,
                        parentInstallAttemptId: e.installAttemptId,
                        sourceAttributionId: e.sourceAttributionId,
                        allowChildInstall: "connectAppBeforeInstall" !== e.kind,
                        blocked: d,
                        previous: h?.terminalResult === "failure" ? h : void 0
                    });
                a.set(l.o, {
                    ...e,
                    requiredAppAnalytics: {
                        ...e.requiredAppAnalytics,
                        [b]: i
                    }
                })
            },
            b: m,
            c: function(a, b, c, e) {
                let {
                    appId: f,
                    result: g,
                    errorType: h,
                    linkId: j,
                    suggestionId: k
                } = e, m = a.get(l.o), n = "closed" === m.kind ? void 0 : m.requiredAppAnalytics?.[f], o = null != n && n.pluginId === c.pluginId && n.installAttemptId === c.installAttemptId;
                if (null == c.terminalResult && (!o || null == n.terminalResult)) {
                    if ("CHATGPT_PLUGIN_ACTION_RESULT_INITIATED" !== g && (!c.childInstall || "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS" !== g || j)) {
                        let b = "failure";
                        "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS" === g ? b = "success" : "CHATGPT_PLUGIN_ACTION_RESULT_CANCELLED" === g && (b = "cancelled"), "closed" !== m.kind && (o || null == n && null != c.installAttemptId && m.installAttemptId === c.installAttemptId) && a.set(l.o, {
                            ...m,
                            requiredAppAnalytics: {
                                ...m.requiredAppAnalytics,
                                [f]: {
                                    ...c,
                                    terminalResult: b
                                }
                            }
                        })
                    }(0, i.c)(a, b, {
                        action: "CHATGPT_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR",
                        connectorId: f,
                        installAttemptId: c.installAttemptId,
                        pluginId: c.pluginId,
                        result: g,
                        errorType: h,
                        suggestionId: k
                    }), c.childInstall && ("CHATGPT_PLUGIN_ACTION_RESULT_FAILURE" === g || "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS" === g && j) && (0, i.c)(a, {
                        ...b,
                        installAction: d.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_CONNECT_SINGLE
                    }, {
                        action: "CHATGPT_PLUGIN_ACTION_TYPE_INSTALL",
                        connectorId: f,
                        installAttemptId: c.installAttemptId,
                        pluginId: c.pluginId,
                        result: g,
                        errorType: h
                    })
                }
            },
            d: n
        })
    }),
    ntKy: (function(a, b, c) {
        c.d(b, {
            a: () => E,
            installPlugin: () => C,
            b: () => H,
            c: () => G,
            d: () => F,
            e: () => D,
            f: () => A
        });
        var d = c("QosV"),
            e = c("D7Ms"),
            f = c("Q840"),
            g = c("DBCl"),
            h = c("Haiv"),
            i = c("SqAt"),
            j = c("oo2L"),
            k = c("OiCI"),
            l = c("Cslg"),
            m = c("SGsN"),
            n = c("svjy"),
            o = c("EEop"),
            p = c("OWtl"),
            q = c("WFY2"),
            r = c("cLdu"),
            s = c("ueue"),
            t = c("sFqu"),
            u = c("aVTW"),
            v = c("loz7"),
            w = c("Elta"),
            x = c("hOYb"),
            y = c("H0Gm");
        let z = (0, f.c)(p.a, a => {
            let {
                get: b
            } = a, c = (0, v.h)(b(v.o));
            return null == c ? null : {
                hostId: c.hostId,
                phase: c.phase,
                pluginDisplayName: (0, h.a)(c.plugin),
                pluginId: c.plugin.plugin.id,
                progress: c.progressPercent,
                sourceSectionId: c.sourceSectionId
            }
        }, {
            isEqual: (a, b) => a === b || null != a && null != b && a.hostId === b.hostId && a.phase === b.phase && a.pluginDisplayName === b.pluginDisplayName && a.pluginId === b.pluginId && a.progress === b.progress && a.sourceSectionId === b.sourceSectionId
        });

        function A() {
            let a, b, c, e = (0, d.c)(9),
                g = (0, f.y)(p.a),
                h = (0, f.z)(z),
                i = (0, f.z)(y.b);
            return e[0] !== g ? (a = (a, b) => C(g, a, b), e[0] = g, e[1] = a) : a = e[1], e[2] !== g ? (b = (a, b) => {
                let {
                    hostId: c,
                    onAppConnected: d,
                    onCancel: e,
                    onError: f,
                    onSuccess: h,
                    ...i
                } = b;
                return (0, v.n)(g, {
                    hostId: c,
                    mode: "details",
                    onAppConnected: d,
                    onCancel: e,
                    onError: f,
                    onSuccess: h,
                    options: B(g, i),
                    plugin: a
                })
            }, e[2] = g, e[3] = b) : b = e[3], e[4] !== h || e[5] !== a || e[6] !== b || e[7] !== i ? (c = {
                installPlugin: a,
                status: h,
                uninstalling: i,
                showPluginInstallDetails: b
            }, e[4] = h, e[5] = a, e[6] = b, e[7] = i, e[8] = c) : c = e[8], c
        }

        function B(a, b) {
            var c;
            let d = b.marketplaceAnalytics;
            if (null == d || null != d.voiceSessionId) return b;
            let e = d.chatgpt?.conversationId ?? b.conversation?.conversationId ?? b.postInstallPluginSuggestion?.conversationId;
            return {
                ...b,
                marketplaceAnalytics: {
                    ...d,
                    voiceSessionId: (c = e ?? null, a.get(w.a, c) && a.get(x.h) || void 0)
                }
            }
        }

        function C(a, b, c) {
            let {
                hostId: d,
                onAppConnected: f,
                onCancel: g,
                onError: h,
                onSuccess: j,
                ...l
            } = c, p = B(a, l);
            if ("plugin" in b) return (0, v.n)(a, {
                hostId: d,
                mode: "install",
                onAppConnected: f,
                onCancel: g,
                onError: h,
                onSuccess: j,
                options: p,
                plugin: b
            });
            let t = {
                    ...p,
                    installAttemptId: p.installAttemptId ?? p.appConnectOptions?.installAttemptId ?? crypto.randomUUID()
                },
                w = (0, v.m)(a, {
                    hostId: d,
                    onAppConnected: f,
                    onCancel: g,
                    onError: h,
                    onSuccess: j,
                    options: t,
                    plugin: b
                });
            if (null == w) return !1;
            J(a, b.connectionAppId, t);
            let x = a.get(v.o),
                y = null != b.connectionAppId && "loadingPlugin" === x.kind ? (0, u.b)(a, b.connectionAppId, x) : null;
            return null != y && a.queryClient.prefetchQuery(y), I(a, b, d, p.productContext).then(b => {
                let c = a.get(v.o);
                if ("loadingPlugin" !== c.kind || c.hostId !== d || c.requestId !== w) return;
                let l = c.hostedAccountId,
                    m = a.get(k.d) ?? void 0;
                if ((0, r.i)(d) && (null == l || m !== l)) return void(0, v.d)(a, {
                    hostId: d,
                    requestId: w
                });
                let n = "ON_INSTALL" === b.summary.authPolicy ? (0, u.a)(b, c.requestedConnectorId, null) : null;
                null != y && (null == n || (0, e.f)(y.queryKey) !== (0, e.f)((0, u.b)(a, n.id, c).queryKey)) && a.queryClient.removeQueries({
                    queryKey: y.queryKey,
                    exact: !0
                });
                let q = (0, s.c)(b);
                a.queryClient.setQueryData((0, o.h)({
                    productContext: p.productContext,
                    accountId: l ?? null,
                    hostId: d,
                    marketplacePath: q.marketplacePath,
                    pluginName: (0, i.a)(q),
                    remoteMarketplaceName: q.remoteMarketplaceName ?? null
                }), b), (0, v.n)(a, {
                    hostId: d,
                    loadingRequestId: w,
                    mode: "install",
                    onAppConnected: f,
                    onCancel: g,
                    onError: h,
                    onSuccess: j,
                    options: {
                        ...t,
                        hostedAccountId: l
                    },
                    plugin: q
                })
            }).catch(b => {
                (0, v.d)(a, {
                    hostId: d,
                    requestId: w
                }) && (q.a.error("Failed to load plugin for installation", {
                    safe: {},
                    sensitive: {
                        error: b
                    }
                }), a.get(m.f).danger(a.get(n.a).formatMessage({
                    id: "plugins.install.error",
                    defaultMessage: "Failed to install plugin"
                }), {
                    errorAnalytics: {
                        toastId: "plugins.install.error"
                    }
                }))
            }), !0
        }
        async function D(a, b) {
            let {
                accountId: d,
                hostId: e,
                target: f,
                onSuccess: h,
                onCancel: i,
                onError: j
            } = b;
            if (null == d || null == f.pluginId) return void i?.();
            let p = (0, g.Yg)(f.pluginId),
                r = f.remotePluginId ?? (null == p ? f.pluginId : f.pluginId.slice(0, -p.length - 1)),
                t = f.installOptions?.postInstallPluginSuggestion;
            if (null != t && (t.accountId !== d || t.pluginId !== r)) return void i?.();
            let u = () => a.get(k.a) === d && (f.installOptions?.hostedAccountId == null || f.installOptions.hostedAccountId === d && a.get(k.d) === d) && (null == t || t.userId === a.get(l.k));
            if (!u()) return void i?.();
            try {
                let b = await a.queryClient.fetchQuery({
                    ...a.query.getOptions(o.l, {
                        hostId: e,
                        marketplacePath: null,
                        pluginName: r,
                        remoteMarketplaceName: null,
                        productContext: f.installOptions?.productContext
                    }),
                    retry: !1
                });
                if (!u()) return void i?.();
                let g = (0, s.c)(b),
                    {
                        requestId: k,
                        ...l
                    } = f.installOptions ?? {},
                    m = {
                        ...l,
                        hostedAccountId: d,
                        origin: f.origin ?? l.origin,
                        pendingElicitationReply: f.pendingElicitationReply
                    };
                if (!C(a, g, {
                        ...m,
                        hostId: e,
                        onCancel: i,
                        onError: j,
                        onSuccess: async () => {
                            if (t?.kind === "orbit") {
                                let {
                                    completeOrbitPluginInstallation: b
                                } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(313404)]).then(() => c("r2fg"));
                                await b(a, t)
                            }
                            await h?.(r, g)
                        }
                    })) return void j?.();
                null != f.postInstallRequiredApps && (0, v.s)(a, {
                    apps: f.postInstallRequiredApps,
                    installedInThisFlow: f.installedInThisFlow,
                    browserExtensions: [],
                    hostId: e,
                    options: m,
                    plugin: g
                })
            } catch (b) {
                if (!u()) return void i?.();
                q.a.error("Failed to resume plugin installation after OAuth", {
                    safe: {},
                    sensitive: {
                        error: b
                    }
                }), a.get(m.f).danger(a.get(n.a).formatMessage({
                    id: "plugins.install.error",
                    defaultMessage: "Failed to install plugin"
                }), {
                    errorAnalytics: {
                        toastId: "plugins.install.error"
                    }
                }), j?.()
            }
        }

        function E() {
            return "CONNECTOR_SETTING" === (0, j.j)() ? "catalog" : void 0
        }
        async function F(a, b, c, d) {
            "plugin" in b || (J(a, b.connectionAppId, {
                productContext: d
            }), await I(a, b, c, d))
        }

        function G(a, b) {
            return a.some(a => {
                let {
                    hostId: c,
                    pluginId: d
                } = a;
                return c === b.hostId && d === b.pluginId
            })
        }

        function H(a) {
            let {
                hostId: b,
                pluginId: c
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return null != a && (null == b || a.hostId === b) && (null == c || a.pluginId === c)
        }

        function I(a, b, c, d) {
            return a.queryClient.fetchQuery({
                ...a.query.getOptions(o.l, {
                    hostId: c,
                    marketplacePath: null,
                    pluginName: b.remotePluginId,
                    productContext: d,
                    remoteMarketplaceName: b.remoteMarketplaceName ?? null
                }),
                retry: !1
            })
        }

        function J(a, b, c) {
            if (null != b) {
                let d = a.get(k.d),
                    e = a.get(l.j);
                a.queryClient.prefetchQuery((0, j.f)(b, {
                    identity: d && e ? {
                        accountId: d,
                        userId: e
                    } : void 0,
                    productSku: (0, t.a)(b, c)?.productSku
                }))
            }
        }
    }),
    JRAe: (function(a, b, c) {
        var d = c("ZOvk"),
            e = c("fOcH"),
            f = c("i0mf"),
            g = c("IFeg"),
            h = c("jLtZ"),
            i = c("fD0V");
        let j = {
            gmail: k(g),
            "google-calendar": k(h),
            "google-docs": k(d),
            "google-drive": k(i),
            "google-sheets": k(e),
            "google-slides": k(f)
        };

        function k(a) {
            let b = a.trim().replace(/^<svg\b[^>]*>/u, '<svg x="24" y="24" width="144" height="144" viewBox="0 0 192 192">');
            return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192"><rect width="192" height="192" rx="40" fill="#fff"/>${b}</svg>`)}`
        }

        function l(a) {
            return (a.split("@")[0] ?? "").trim().toLowerCase().split(/[^a-z0-9]+/g).filter(a => a.length > 0).join("-")
        }
        c.d(b, {}, {
            a: function(a) {
                for (let b of [a.name, a.id, a.interface?.displayName ?? ""].map(l)) {
                    let a = function(a) {
                        let b = a.replace(/^connector-/u, "");
                        return j[a] ?? j[b] ?? j[b.replace(/-mcp-server$/u, "")] ?? null
                    }(b);
                    if (null != a) return a
                }
                return null
            }
        })
    }),
    ZqLP: (function(a, b, c) {
        function d(a, b, c) {
            let d = a.creator_account_user_id,
                e = "personal" === b.structure ? c : b.account_user_id;
            return null != d && d === e
        }
        c.d(b, {}, {
            a: function(a) {
                let {
                    plugin: b,
                    account: c,
                    userId: e,
                    hasWritePermission: f = !1,
                    isSourceManaged: g = !1
                } = a, h = d(b, c, e), i = "workspace" === c.structure && "WORKSPACE" === b.scope && b.workspace_id === c.id && ("account-admin" === c.account_user_role || "account-owner" === c.account_user_role);
                return !g && (h || i || f)
            },
            b: function(a) {
                let {
                    plugin: b,
                    account: c,
                    userId: e,
                    rbacEnabled: f,
                    canEditWithShares: g,
                    isSourceManaged: h = !1
                } = a, i = "workspace" === c.structure, j = i && b.workspace_id === c.id && "WORKSPACE" === b.scope, k = "USER" === b.scope && null == b.workspace_id, l = i && "USER" === b.scope && "PRIVATE" === b.discoverability && b.workspace_id === c.id, m = d(b, c, e), n = i && ("account-admin" === c.account_user_role || "account-owner" === c.account_user_role), o = b.share_principals?.some(a => {
                    let {
                        principal_type: b,
                        principal_id: d,
                        role: f
                    } = a;
                    return ("editor" === f || "owner" === f) && ("user" === b && d === e || "workspace" === b && d === c.id)
                });
                return {
                    canOpenVisualEditor: !h && ("USER" === b.scope || "WORKSPACE" === b.scope) && (m && (!i || c.account_user_id === `${e}__${c.id}`) && (null == b.workspace_id || i && b.workspace_id === c.id) || n && (j || function(a, b) {
                        if ("USER" !== a.scope || null != a.source_gizmo_id) return !1;
                        if (null != a.workspace_id) return a.workspace_id === b;
                        let [c, d, e] = a.creator_account_user_id?.split("__") ?? [];
                        return !!c && d === b && null == e
                    }(b, c.id)) || j && (g ?? !0 === o)),
                    canManageForWorkspace: n && ("USER" !== b.scope || m) && ("WORKSPACE" !== b.scope || j),
                    canDownload: "ENABLED" === b.status && null == b.template_plugin_id && ("USER" === b.scope || "WORKSPACE" === b.scope),
                    canUploadPersonal: m && k && !i,
                    canUploadWorkspaceWithShares: j && f && !h && !0 === g,
                    shouldCheckWorkspaceUpload: m && j,
                    canDelete: m && (null != b.canonical_app_id ? j || k || l : j || k && "PRIVATE" === b.discoverability)
                }
            },
            c: "3091128584"
        })
    }),
    w8IV: (function(a, b, c) {
        var d = c("DBCl");
        let e = `${d.mb}@${d.bd}`;
        c.d(b, {}, {
            a: e,
            b: "com.apple.MobileSMS"
        })
    }),
    BA9i: (function(a, b, c) {
        let d = "spreadsheets",
            e = "presentations",
            f = "documents",
            g = "openai-primary-runtime";

        function h(a, b) {
            return a.plugin.name === b && a.marketplaceName === g && a.plugin.id === `${b}@${g}`
        }
        c.d(b, {}, {
            a: d,
            b: "1288674243",
            c: "1623794951",
            d: e,
            e: f,
            f: function(a) {
                return h(a, d)
            },
            g: function(a) {
                return h(a, e)
            },
            h: function(a) {
                return h(a, f)
            }
        })
    }),
    yK38: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a, b, c, d) {
                let e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : b,
                    f = arguments.length > 5 ? arguments[5] : void 0,
                    g = [...new Set(b)],
                    h = new Set(e),
                    i = new Set,
                    j = !1,
                    k = new IntersectionObserver(a => {
                        if (j) return;
                        for (let b of a) {
                            let a = b.target instanceof HTMLElement ? b.target.dataset.pluginImpressionId : void 0;
                            null != a && (b.isIntersecting && b.intersectionRatio >= .5 ? i.add(a) : i.delete(a))
                        }
                        let b = g.filter(a => i.has(a));
                        f?.(b);
                        let e = b.filter(a => h.has(a) && !c.has(a));
                        if (e.length > 0) {
                            for (let a of e) c.add(a);
                            d(b, e)
                        }
                    }, {
                        threshold: .5
                    });
                for (let b of a.querySelectorAll("[data-plugin-impression-id]")) k.observe(b);
                return () => {
                    j = !0, k.disconnect()
                }
            }
        })
    }),
    Zpwo: (function(a, b, c) {
        function d(a, b, c) {
            let d = a.name.trim();
            if (!d || "connected" === d.toLocaleLowerCase()) return;
            let f = e(a),
                g = c ?? a.connector_name ?? b;
            return d.toLocaleLowerCase() === g.trim().toLocaleLowerCase() || d.toLocaleLowerCase() === f?.toLocaleLowerCase() ? void 0 : d
        }

        function e(a) {
            return a.owner_profile?.email?.trim() || a.owner_profile?.name?.trim() || a.owner_profile?.nickname?.trim() || void 0
        }
        c.d(b, {}, {
            a: d,
            b: function(a, b, c) {
                return a.owners.some(a => "USER" === a.type && a.id === c) ? b : void 0
            },
            c: function(a, b, c, f) {
                let g = e(a);
                return g || ("NONE" === a.auth_type && b.trim() ? b.trim() : d(a, b, f) ?? c)
            },
            d: e
        })
    }),
    C3Kr: (function(a, b, c) {
        let d = new WeakMap,
            e = new WeakMap,
            f = new WeakMap;

        function g(a) {
            let b = f.get(a);
            if (null != b) return b;
            let c = new Set([a.name, a.interface?.displayName ?? ""].map(j));
            return f.set(a, c), c
        }

        function h(a, b, c) {
            let d = a.get(b);
            null == d ? a.set(b, [c]) : d.push(c)
        }

        function i(a, b) {
            let c = new Set;
            for (let d of b)
                for (let b of a.get(d) ?? []) c.add(b);
            return Array.from(c)
        }

        function j(a) {
            return a.trim().toLowerCase().replaceAll(/[^a-z0-9]+/g, "")
        }
        c.d(b, {}, {
            a: function(a, b) {
                let c = g(b),
                    {
                        aliasAppsByKey: e,
                        exactAppsByKey: f
                    } = function(a) {
                        let b = d.get(a);
                        if (null != b) return b;
                        let c = new Map,
                            e = new Map;
                        for (let b of a)
                            for (let a of (h(c, j(b.name), b), new Set(b.pluginDisplayNames.map(j)))) h(e, a, b);
                        let f = {
                            aliasAppsByKey: e,
                            exactAppsByKey: c
                        };
                        return d.set(a, f), f
                    }(a),
                    k = i(f, c);
                if (k.length > 0) return 1 === k.length ? k[0] ?? null : null;
                let l = i(e, c);
                return 1 === l.length ? l[0] ?? null : null
            },
            b: function(a, b) {
                let c = g(b);
                for (let b of function(a) {
                        let b = e.get(a);
                        if (null != b) return b;
                        let c = new Set([a.name, ...a.pluginDisplayNames].map(j));
                        return e.set(a, c), c
                    }(a))
                    if (c.has(b)) return !0;
                return !1
            }
        })
    }),
    AjOy: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a) {
                return "chatgpt" === a
            }
        })
    }),
    md5w: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a) {
                let {
                    pluginId: b,
                    enabled: c
                } = a;
                return [{
                    keyPath: `plugins.${b}.enabled`,
                    value: c,
                    mergeStrategy: "upsert"
                }]
            }
        })
    }),
    MX3C: (function(a, b, c) {
        var d = c("Q840"),
            e = c("lAQI"),
            f = c("hOO0"),
            g = c("OWtl"),
            h = c("kpIY"),
            i = c("Nwp9");
        let j = "selected-plugin-links-v1",
            k = e.J(e.L(), e.L().nullable().catch(null)).catch({}),
            l = (0, i.b)(j, {}, {
                coerceStoredValue: a => k.parse(a)
            }),
            m = (0, d.d)(g.a, (a, b) => {
                let {
                    get: c
                } = b;
                return c(l)[n(a)] ?? null
            });

        function n(a) {
            let {
                accountId: b,
                userId: c,
                appId: d
            } = a;
            return JSON.stringify([b, c, d])
        }
        c.d(b, {}, {
            a: function(a, b) {
                let c = (0, f.a)(b);
                return a.filter(a => (0, f.a)(a.connector_id) === c && "HIDDEN" !== a.visibility && !a.id.startsWith("implicit_link::"))
            },
            b: function(a, b, c) {
                return a.some(a => (0, f.c)(a, b) && "OAUTH" === a.auth_type && "DISABLED_BY_ADMIN" !== a.connector_status && null == a.unavailable_reason && a.owners.some(a => "USER" === a.type && a.id === c))
            },
            c: m,
            d: function(a, b, c) {
                (0, h.t)(j, {
                    entries: {
                        [n(b)]: null == c ? null : {
                            value: c
                        }
                    },
                    maxEntries: 100
                }), a.set(l, (0, h.k)(j, {}))
            }
        })
    }),
    oszP: (function(a, b, c) {
        var d = c("oo2L"),
            e = c("hOO0"),
            f = c("bnxy");

        function g(a) {
            return (a ?? "").trim().toLowerCase().replace(/^connector[_-]/, "").replace(/^mcp[_-]/, "").replace(/[\s_-]+/g, "")
        }

        function h(a) {
            return a.branding?.category?.trim() || a.appMetadata?.categories?.find(a => a.trim())?.trim() || null
        }

        function i(a, b) {
            return null != a && null != b && (0, f.q)(b) === (0, f.q)((0, f.p)((0, f.r)(a), ".agents/plugins/marketplace.json"))
        }

        function j(a) {
            return (a ?? "").trim().toLowerCase().split(":").map(a => a.replace(/[\s_-]+/g, "")).join(":")
        }
        c.d(b, {}, {
            a: function(a) {
                let {
                    appsContent: b,
                    connections: c,
                    directoryApps: d,
                    includeUnavailableApps: f = !1,
                    pluginApps: g
                } = a, h = new Map(b.map(a => [(0, e.a)(a.id), a])), i = new Map(d.map(a => [(0, e.a)(a.id), a]));
                return g.flatMap(a => {
                    let b = (0, e.a)(a.id),
                        d = h.get(b);
                    if (null == d) {
                        let d = c?.get(b);
                        return f && (d?.isUnavailable || d?.isDisabledByAdmin) ? [{
                            appMetadata: null,
                            branding: null == a.category ? null : {
                                category: a.category,
                                developer: null,
                                isDiscoverableApp: !1,
                                privacyPolicy: null,
                                termsOfService: null,
                                website: null
                            },
                            description: a.description,
                            distributionChannel: null,
                            iconAssets: null,
                            iconDarkAssets: null,
                            id: a.id,
                            installUrl: null,
                            isAccessible: !1,
                            isEnabled: !1,
                            labels: null,
                            logoUrl: null,
                            logoUrlDark: null,
                            name: a.name,
                            pluginDisplayNames: []
                        }] : []
                    }
                    let g = i.get(b);
                    return [{
                        appMetadata: g?.appMetadata ?? null,
                        branding: {
                            category: g?.branding?.category ?? null,
                            developer: d.developer ?? g?.branding?.developer ?? null,
                            isDiscoverableApp: g?.branding?.isDiscoverableApp ?? !1,
                            privacyPolicy: g?.branding?.privacyPolicy ?? null,
                            termsOfService: g?.branding?.termsOfService ?? null,
                            website: g?.branding?.website ?? null
                        },
                        description: d.description || null,
                        distributionChannel: d.distribution_channel ?? g?.distributionChannel ?? null,
                        iconAssets: g?.iconAssets ?? null,
                        iconDarkAssets: g?.iconDarkAssets ?? null,
                        id: a.id,
                        installUrl: g?.installUrl ?? a.installUrl,
                        isAccessible: c?.get(b)?.isConnected ?? g?.isAccessible ?? !1,
                        isEnabled: g?.isEnabled ?? !0,
                        labels: g?.labels ?? null,
                        logoUrl: d.icon_url ?? g?.logoUrl ?? null,
                        logoUrlDark: d.icon_dark_url ?? g?.logoUrlDark ?? null,
                        name: d.name,
                        pluginDisplayNames: g?.pluginDisplayNames ?? []
                    }]
                })
            },
            b: function(a) {
                let {
                    connectorMetadata: b,
                    directoryApps: c,
                    appTemplates: d
                } = a;
                if (!Array.isArray(d)) return [];
                let e = new Map(c.map(a => [a.id, a])),
                    f = new Map(b.map(a => [a.id, a]));
                return d.map(a => {
                    let b = (null == a.canonicalConnectorId ? void 0 : e.get(a.canonicalConnectorId)) ?? e.get(a.templateId),
                        c = (null == a.canonicalConnectorId ? void 0 : f.get(a.canonicalConnectorId)) ?? f.get(a.templateId);
                    return {
                        ...a,
                        category: a.category?.trim() || (null == b ? null : h(b)),
                        description: a.description || c?.description || null,
                        logoUrl: a.logoUrl || c?.iconUrl || c?.iconUrlDark || null,
                        logoUrlDark: a.logoUrlDark || c?.iconUrlDark || c?.iconUrl || null
                    }
                })
            },
            c: function(a) {
                let {
                    connectorMetadata: b,
                    directoryApps: c,
                    pluginApps: d,
                    appTemplates: f
                } = a, g = new Map(b.map(a => [a.id, a])), i = new Map(c.map(a => [a.id, a]));
                return d.map(a => {
                    let b = g.get(a.id),
                        c = i.get(a.id),
                        d = f.find(b => b.materializedAppIds.some(b => (0, e.a)(b) === (0, e.a)(a.id))),
                        j = null != b && b.name !== b.id;
                    if (!j && null == d) return null;
                    let k = a.category?.trim() || (null == c ? null : h(c));
                    return {
                        appMetadata: c?.appMetadata ?? null,
                        description: b?.description ?? (null == d ? null : a.description),
                        distributionChannel: b?.distributionChannel ?? null,
                        iconAssets: c?.iconAssets ?? null,
                        iconDarkAssets: c?.iconDarkAssets ?? null,
                        id: a.id,
                        installUrl: b?.installUrl ?? c?.installUrl ?? a.installUrl,
                        isAccessible: c?.isAccessible ?? !1,
                        isEnabled: c?.isEnabled ?? !0,
                        labels: c?.labels ?? null,
                        logoUrl: b?.iconUrl ?? b?.iconUrlDark ?? d?.logoUrl ?? null,
                        logoUrlDark: b?.iconUrlDark ?? b?.iconUrl ?? d?.logoUrlDark ?? null,
                        name: j ? b.name : a.name,
                        pluginDisplayNames: b?.pluginDisplayNames ?? [],
                        branding: k ? {
                            ...c?.branding ?? {
                                category: null,
                                developer: null,
                                website: null,
                                privacyPolicy: null,
                                termsOfService: null,
                                isDiscoverableApp: !1
                            },
                            category: k
                        } : c?.branding ?? null
                    }
                }).filter(a => null != a)
            },
            d: function(a) {
                let {
                    apps: b,
                    configuredServers: c,
                    pluginServerNames: d,
                    mcpAppIdsByServerKey: f
                } = a;
                return d.map(a => {
                    var d, h;
                    let i, j, k = f?.get(a),
                        l = null == f ? (d = b, i = g(a), d.find(a => [a.id, a.name, ...a.pluginDisplayNames, ...Object.keys(a.labels ?? {}), ...Object.values(a.labels ?? {})].some(a => g(a) === i)) ?? null) : b.find(a => null != k && (0, e.a)(a.id) === (0, e.a)(k));
                    if (null != l) return {
                        kind: "app",
                        app: l,
                        manifestAppId: k
                    };
                    let m = (h = c, j = g(a), Object.entries(h).find(a => {
                            let [b, c] = a;
                            return [b, c.name].some(a => g(a) === j)
                        })?.[0] ?? null),
                        n = null == m ? null : c[m];
                    return {
                        configKey: m,
                        kind: "config",
                        enabled: n?.enabled !== !1,
                        installed: null != n,
                        name: a,
                        manifestAppId: k
                    }
                })
            },
            e: function(a) {
                let {
                    installedSkills: b,
                    pluginName: c,
                    pluginSkills: d
                } = a, e = function(a) {
                    let b = new Map,
                        c = new Map,
                        d = new Map;
                    for (let {
                            skill: e
                        }
                        of a) {
                        d.set(e.path, e), c.set(e.name, e);
                        let a = j(e.name),
                            f = b.get(a);
                        if (null == f) {
                            b.set(a, [e]);
                            continue
                        }
                        f.push(e)
                    }
                    return {
                        byComparableKey: b,
                        byName: c,
                        byPath: d
                    }
                }(b), f = [], g = [];
                for (let a of d) {
                    let b = function(a, b, c) {
                        let d = b.path ? c.byPath.get(b.path) : void 0;
                        if (null != d) return d;
                        let e = a.trim(),
                            f = b.name;
                        if (!b.path && !f.includes(":")) {
                            if (!e) return null;
                            f = `${e}:${f}`
                        }
                        let g = c.byName.get(f);
                        if (null != g) return g;
                        let h = c.byComparableKey.get(j(f));
                        return h?.length === 1 ? h[0] : null
                    }(c, a, e);
                    if (null != b) {
                        f.push({
                            installedSkill: b,
                            pluginSkill: a
                        });
                        continue
                    }
                    g.push(a)
                }
                return {
                    installedSkills: f,
                    unavailableSkills: g
                }
            },
            f: g,
            g: function(a) {
                let {
                    appIds: b,
                    noAuthCanonicalAppId: c,
                    appsContent: f,
                    availabilities: g,
                    links: h
                } = a, i = new Map(f?.map(a => [(0, e.a)(a.id), a]) ?? []), j = new Map(g.map(a => [(0, e.a)(a.id), a])), k = null == c ? null : (0, e.a)(c);
                return new Map(b.map(a => {
                    let b = (0, e.a)(a),
                        c = i.get(b)?.supported_auth_types,
                        f = j.get(b),
                        g = h.filter(a => (0, e.a)(a.connector_id) === b && "HIDDEN" !== a.visibility),
                        l = g.some(a => a.id.startsWith("implicit_link::")),
                        m = g.find(a => "REAUTH_REQUIRED" !== a.auth_status) ?? g[0],
                        n = null != m || f?.installed === !0,
                        o = null == f || !f.available || !f.installed && !f.can_install,
                        p = c?.length === 1 && "NONE" === c[0],
                        q = b === k && !n && !o && p && f?.isOpenAICatalogApp === !0;
                    return [b, {
                        canConnect: !q && !f?.supportsXaa && !l && (null == c || c.length > 0),
                        canReconnect: null != m && null != (0, d.p)(m),
                        isConnected: n,
                        requiresReauth: m?.auth_status === "REAUTH_REQUIRED",
                        linkId: m?.id.startsWith("implicit_link::") ? void 0 : m?.id,
                        isUnavailable: o,
                        isDisabledByAdmin: f?.status === "DISABLED_BY_ADMIN" || f?.disabled_reason === "disabled_by_admin"
                    }]
                }))
            },
            h: function(a) {
                let {
                    hasLoadedSharePrincipals: b,
                    canSharePlugin: c,
                    isInstalled: d,
                    isShareDisabled: e,
                    pluginShareUrl: f
                } = a;
                return d && c || (c || e) && (null == f || b) ? "share" : null == f ? null : "copy-link"
            },
            i: function(a, b, c) {
                return i(a, b) && "local" === c.type ? c.path : null
            },
            j: i,
            k: function(a) {
                let {
                    connectorMetadata: b,
                    plugin: c
                } = a;
                return "IMPLICIT_CANONICAL_APP" !== c.summary.installPolicySource || 1 !== c.apps.length || b?.find(a => a.id === c.apps[0]?.id)?.toolSummaries?.length !== 0
            }
        })
    }),
    jEyg: (function(a, b, c) {
        var d = c("iRMi"),
            e = c("DBCl"),
            f = c("lAQI"),
            g = c("hOO0"),
            h = c("YWcr"),
            i = c("xWQV"),
            j = c("k7G6"),
            k = c("CV1W"),
            l = c("ueue");
        let m = f.F({
                navigationStartedAtMs: f.E().nonnegative().optional(),
                referrer: f.Q([f.z(d.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_UNSPECIFIED), f.z(d.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_DIRECTORY), f.z(d.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_CATEGORY), f.z(d.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_WORKSPACE), f.z(d.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_PERSONAL), f.z(d.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_SEARCH), f.z(d.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_DEEP_LINK)]),
                source: f.Q([f.z(d.CodexPluginSource.CODEX_PLUGIN_SOURCE_CURATED), f.z(d.CodexPluginSource.CODEX_PLUGIN_SOURCE_WORKSPACE), f.z(d.CodexPluginSource.CODEX_PLUGIN_SOURCE_PERSONAL), f.z(d.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER)])
            }),
            n = f.F({
                openInstallModal: f.z(!0).optional(),
                pluginDisplayName: f.L().trim().min(1).optional(),
                pluginProductEventContext: m.optional(),
                suggestedPluginConnect: f.F({
                    accountId: f.L().min(1),
                    userId: f.L().min(1),
                    chatgpt: i.a.optional()
                }).optional()
            }).loose();

        function o(a, b) {
            return (0, j.a)({
                breadcrumb: b?.breadcrumb,
                browseSearch: b?.browseSearch,
                hostId: b?.hostId,
                pluginId: a.plugin.id,
                ...(0, l.l)(a)
            })
        }

        function p(a, b) {
            return "remote" === a.source.type && ("local" === b || b === e.$b) ? a.remotePluginId : null
        }

        function q(a) {
            if (null == a || "object" != typeof a) return null;
            let b = Reflect.get(a, "pluginDetailDeepLinkMode");
            return "share" === b || "view" === b ? b : null
        }
        c.d(b, {}, {
            a: function(a, b) {
                let c = {
                    pluginProductEventContext: a
                };
                return null != b && (c.pluginDisplayName = b), c
            },
            b: function(a) {
                let {
                    hostId: b,
                    requestedPluginId: c,
                    explicitMarketplacePath: d,
                    explicitPluginName: f,
                    explicitRemoteMarketplaceName: g,
                    routeParams: h
                } = a;
                if ("local" === b) return {
                    directMarketplacePath: null,
                    directPluginName: f ?? c,
                    directRemoteMarketplaceName: e.Zb
                };
                let i = null != d || null != g;
                return {
                    directMarketplacePath: i ? d ?? null : h?.marketplacePath ?? null,
                    directPluginName: f ?? h?.pluginName ?? null,
                    directRemoteMarketplaceName: i ? g ?? null : h?.remoteMarketplaceName ?? null
                }
            },
            c: p,
            d: function(a) {
                return `/codex/open-app?target=plugin&plugin_id=${encodeURIComponent(a)}`
            },
            e: q,
            f: function(a) {
                let b = new URLSearchParams(a);
                return b.has("install") ? {
                    prompt: b.get("prompt")?.replace(/\r\n/g, "\n").trim() || null
                } : null
            },
            g: o,
            h: function(a, b) {
                let c = (0, h.s)(a);
                if (null == c) return null;
                let d = b?.remotePluginId != null && (0, e.hi)(b.remotePluginId) ? b.remotePluginId : null;
                return (null == d && (0, e.hi)(c) && (d = c), b?.requireRemotePluginId && null == d) ? null : (0, j.a)({
                    hostId: b?.hostId,
                    pluginId: d ?? c
                })
            },
            i: function a(b) {
                let {
                    allowUniqueNameFallback: c = !1,
                    fallbackRequestedPluginId: d,
                    plugins: f,
                    requestedPluginId: g
                } = b;
                if ((0, e.hi)(g)) {
                    let a = f.find(a => {
                        var b, c;
                        return b = a, c = g, "local" === b.plugin.source.type && b.plugin.shareContext?.remotePluginId != null && (0, e.Qi)(b.plugin.shareContext.remotePluginId, c)
                    });
                    if (null != a) return a
                }
                let h = f.find(a => {
                    var b, c;
                    return b = a, c = g, (0, e.hi)(c) ? "remote" === b.plugin.source.type && null != b.plugin.remotePluginId && (0, e.Qi)(b.plugin.remotePluginId, c) : b.plugin.id === c
                }) ?? null;
                if (null != h) return h;
                if (null != d && d !== g) {
                    let b = a({
                        allowUniqueNameFallback: c,
                        plugins: f,
                        requestedPluginId: d
                    });
                    if (null != b) return b
                }
                if (!c || (0, e.hi)(g)) return null;
                let i = g.lastIndexOf("@"),
                    j = i > 0 ? g.slice(0, i) : g,
                    k = f.filter(a => a.plugin.name === j);
                return 1 === k.length ? k[0] : null
            },
            j: function(a) {
                let b = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    c = n.safeParse(a);
                return (c.success ? c.data.pluginProductEventContext : void 0) ?? {
                    referrer: null != q(a) || b ? d.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_DEEP_LINK : d.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_UNSPECIFIED,
                    source: d.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER
                }
            },
            k: function(a) {
                let b = n.safeParse(a);
                return b.success ? b.data.pluginDisplayName ?? null : null
            },
            l: function(a) {
                let b = new URLSearchParams(a),
                    c = b.get("marketplacePath")?.trim(),
                    d = b.get("remoteMarketplaceName")?.trim(),
                    e = b.get("pluginName")?.trim(),
                    f = b.get("hostId")?.trim() || null,
                    g = !!c || !!d;
                return c && d || g && !e || !g && e ? null : {
                    marketplacePath: c || null,
                    pluginName: e || null,
                    remoteMarketplaceName: d || null,
                    hostId: f
                }
            },
            m: function(a, b) {
                let c = p(a.plugin, b);
                if (null != c) return (0, k.e)(c);
                let d = o(a, {
                    hostId: b
                });
                return (0, k.e)("hosts", b, "plugins", a.plugin.id) + new URL(d, "https://chatgpt.com").search
            },
            n: function(a) {
                let b = n.safeParse(a);
                return b.success && !0 === b.data.openInstallModal
            },
            o: function(a) {
                let b = n.safeParse(a);
                return b.success ? b.data.suggestedPluginConnect ?? null : null
            },
            p: function(a) {
                let {
                    appIds: b,
                    canonicalAppId: c
                } = a;
                return (null == c ? null : b.find(a => (0, g.a)(a) === (0, g.a)(c))) ?? (1 === b.length ? b[0] ?? null : null)
            },
            q: function(a) {
                let {
                    hasHandledNavigation: b,
                    isInstallBlocked: c,
                    isPluginInstalled: d,
                    shouldOpenInstall: e
                } = a;
                return e && !b && (d || !c)
            }
        })
    }),
    k7G6: (function(a, b, c) {
        var d = c("DBCl");

        function e(a) {
            return f({
                pluginId: a,
                pluginName: a,
                remoteMarketplaceName: d.Zb,
                hostId: "local"
            })
        }

        function f(a) {
            return (a.hostId ?? "local") === "local" && null == a.marketplacePath ? (0, d.oe)({
                pluginId: a.pluginName ?? a.pluginId,
                deepLinkMode: a.deepLinkMode,
                breadcrumb: a.breadcrumb,
                browseSearch: a.browseSearch
            }) : (0, d.oe)(a)
        }
        c("Ot7V"), c.d(b, {}, {
            a: f,
            b: e,
            c: function(a, b, c) {
                b(e(a), c)
            }
        })
    }),
    R4kT: (function(a, b, c) {
        var d = c("kfGJ");
        c.d(b, {}, {
            a: function(a, b) {
                return a === d.a && !0 === b
            }
        })
    }),
    lhA2: (function(a, b, c) {
        var d = c("DBCl"),
            e = c("oliF"),
            f = c("kCRh"),
            g = c("sFpz"),
            h = c("hsuC"),
            i = c("MM6n"),
            j = c("MWSW"),
            k = c("UuTC"),
            l = c("aV4z"),
            m = c("sL0h"),
            n = c("cAdi"),
            o = c("u6oA"),
            p = c("VK1X"),
            q = c("ZdDq");
        let r = [e, f, g, h, i, j, k, l, m, n, o, p, c("mOOp"), q, c("Wmm1"), c("iXo5"), c("clRy"), c("C1cw"), c("dRs8"), c("orzE"), c("vTvp"), c("nu7J"), c("TF6s"), c("YezP"), c("jGMn")].map(a => `data:image/svg+xml,${encodeURIComponent(a)}`);
        c.d(b, {}, {
            a: function(a) {
                let b = (0, d.Li)(a) ? a.replace(/^plugins~/, "") : a,
                    c = 0;
                for (let a = 0; a < b.length; a += 1) c = (31 * c + b.charCodeAt(a)) % r.length;
                return r[c] ?? ""
            }
        })
    }),
    nMfq: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a) {
                return "remote" === a.source.type && a.installed && "INSTALLED_BY_DEFAULT" === a.installPolicy
            }
        })
    }),
    tlx5: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a, b) {
                null == b || null != a && (a.defaultPrevented || 0 !== a.button || a.metaKey || a.ctrlKey || a.shiftKey || a.altKey) || (a?.preventDefault(), b())
            }
        })
    }),
    v70x: (function(a, b, c) {
        var d = c("QosV"),
            e = c("zPtR"),
            f = c("bTvG"),
            g = c("iRMi"),
            h = c("mfKi"),
            i = c("CjTC"),
            j = c("zd8w"),
            k = c("rEML"),
            l = c("lAQI"),
            m = c("yGJW"),
            n = c("oom3"),
            o = c("OMIV"),
            p = c("WFY2"),
            q = c("xWQV");
        let r = new WeakSet,
            s = new WeakMap,
            t = ["account_selector", "callback_path", "prompt", "q", "query", "search", "snapshot"];

        function u(a) {
            switch (a) {
                case g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_WORKSPACE:
                    return "CHATGPT_APP_PAGE_NAME_APP_WORKSPACE";
                case g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_DIRECTORY:
                case g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_CATEGORY:
                case g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_PERSONAL:
                case g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_SEARCH:
                    return "CHATGPT_APP_PAGE_NAME_APP_DIRECTORY";
                case g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_UNSPECIFIED:
                case g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_DEEP_LINK:
                case g.CodexPluginPageReferrer.UNRECOGNIZED:
                    return "CHATGPT_APP_PAGE_NAME_UNSPECIFIED"
            }
        }

        function v(a) {
            let b = window.location.hash.indexOf("?"),
                c = b < 0 ? "" : window.location.hash.slice(b + 1),
                d = [new URLSearchParams(window.location.search).get("referrer"), new URLSearchParams(c).get("referrer"), s.get(a), document.referrer].map(w).find(a => null != a),
                e = w(window.location.href);
            return null != e && s.set(a, e), d
        }

        function w(a) {
            if (!a) return;
            if (/^[a-zA-Z0-9_-]{1,128}$/.test(a)) return a;
            let b = (0, e.f)(a, t);
            if (null != b) try {
                let a = new URL(b);
                return "https:" === a.protocol || "http:" === a.protocol || "app:" === a.protocol && "-" === a.hostname ? b : void 0
            } catch {
                return
            }
        }
        let x = l.F({
            pluginDirectoryEntrypoint: l.Q([l.z(g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_DIRECT), l.z(g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SETTINGS), l.z(g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SIDEBAR), l.z(g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER)]).optional()
        }).loose();

        function y(a) {
            let {
                categoryKey: b,
                directoryTab: c,
                isGlobalSearch: d,
                searchQuery: e
            } = a;
            if ("" !== e) return {
                pageName: g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_SEARCH,
                source: d ? g.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER : A(c)
            };
            if (null != b) return {
                pageName: g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_CATEGORY,
                source: A(c)
            };
            switch (c) {
                case "openai":
                    return {
                        pageName: g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DIRECTORY, source: g.CodexPluginSource.CODEX_PLUGIN_SOURCE_CURATED
                    };
                case "workspace":
                    return {
                        pageName: g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_WORKSPACE, source: g.CodexPluginSource.CODEX_PLUGIN_SOURCE_WORKSPACE
                    };
                case "personal":
                    return {
                        pageName: g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_PERSONAL, source: g.CodexPluginSource.CODEX_PLUGIN_SOURCE_PERSONAL
                    }
            }
        }

        function z(a) {
            let {
                canonicalCategoryIds: b,
                directoryTab: c,
                selectedCategoryTitle: d
            } = a;
            if ("openai" !== c || null == d) return;
            let e = d.trim().toLowerCase().replaceAll("-", " ");
            if ("" !== e) return b.find(a => a.trim().toLowerCase().replaceAll("-", " ") === e)
        }

        function A(a) {
            switch (a) {
                case "openai":
                    return g.CodexPluginSource.CODEX_PLUGIN_SOURCE_CURATED;
                case "workspace":
                    return g.CodexPluginSource.CODEX_PLUGIN_SOURCE_WORKSPACE;
                case "personal":
                    return g.CodexPluginSource.CODEX_PLUGIN_SOURCE_PERSONAL
            }
        }

        function B(a) {
            switch (a) {
                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DIRECTORY:
                    return g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_DIRECTORY;
                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_CATEGORY:
                    return g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_CATEGORY;
                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_WORKSPACE:
                    return g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_WORKSPACE;
                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_PERSONAL:
                    return g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_PERSONAL;
                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_SEARCH:
                    return g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_SEARCH;
                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_UNSPECIFIED:
                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DETAILS:
                case g.CodexPluginPageName.UNRECOGNIZED:
                    return g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_UNSPECIFIED
            }
        }
        c.d(b, {
            a: () => z,
            b: () => y,
            c: () => i.a
        }, {
            d: function(a, b) {
                let {
                    action: c,
                    chatgpt: d,
                    connectorId: e,
                    errorType: f,
                    installAttemptId: g,
                    plugin: j,
                    result: k,
                    source: l,
                    sourceAttributionId: n,
                    suggestionId: o,
                    surface: p,
                    voiceSessionId: r
                } = b;
                if ((0, q.d)(a, d, {
                        action: c,
                        connectorId: e,
                        errorType: f,
                        installAttemptId: g,
                        pluginId: (0, i.a)(j) ?? j.id,
                        result: k,
                        sourceAttributionId: n,
                        suggestionId: o,
                        voiceSessionId: r
                    })) return;
                let s = c === h.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_INSTALL && k === h.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_INITIATED;
                (0, m.a)(a, h.CodexPluginAction, {
                    action: c,
                    connectorId: e,
                    errorType: f,
                    installAttemptId: g,
                    pluginId: j.id,
                    voiceSessionId: s ? r : void 0,
                    remotePluginId: (0, i.a)(j),
                    result: k,
                    source: l,
                    ...s && void 0 !== n ? {
                        sourceAttributionId: n
                    } : {},
                    suggestionId: o,
                    surface: p
                })
            },
            e: function(a, b) {
                let {
                    categoryId: c,
                    plugin: d,
                    position: e,
                    sectionId: f,
                    source: h,
                    surface: j,
                    target: k
                } = b;
                (0, m.a)(a, g.CodexPluginClick, {
                    categoryId: c,
                    pluginId: d.id,
                    position: e,
                    remotePluginId: (0, i.a)(d),
                    sectionId: f,
                    source: h,
                    surface: j,
                    target: k
                })
            },
            f: function(a, b) {
                let {
                    placement: c,
                    pluginId: d,
                    remotePluginId: e,
                    source: f
                } = b;
                (0, m.a)(a, g.CodexPluginClick, {
                    categoryId: c?.kind === "category" ? c.categoryId : void 0,
                    pluginId: d,
                    position: c?.position,
                    remotePluginId: e,
                    sectionId: c?.kind === "home" ? c.sectionId : void 0,
                    source: f,
                    surface: g.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_DIRECTORY,
                    target: g.CodexPluginClickTarget.CODEX_PLUGIN_CLICK_TARGET_PLUGIN_ROW
                })
            },
            g: function(a) {
                let b, c, e, h, k = (0, d.c)(26),
                    {
                        scope: l,
                        enabled: n,
                        navigationKey: p,
                        navigationStartedAtMs: q,
                        plugin: s,
                        referrer: t,
                        source: w
                    } = a,
                    x = void 0 === n || n,
                    y = (0, j.useRef)(null),
                    z = (0, j.useRef)(null),
                    A = s?.summary.id,
                    B = s?.summary ?? null;
                k[0] !== B ? (b = (0, i.a)(B), k[0] = B, k[1] = b) : b = k[1];
                let C = b;
                k[2] !== s || k[3] !== A || k[4] !== t || k[5] !== C || k[6] !== l || k[7] !== w ? (c = (a, b, c) => {
                    (0, m.a)(l, g.CodexPluginPageView, {
                        enabled: s?.summary.enabled,
                        installed: s?.summary.installed,
                        marketplaceName: s?.marketplaceName,
                        pageName: g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DETAILS,
                        pluginId: A,
                        pluginSourceType: s?.summary.source.type,
                        referrer: t,
                        remotePluginId: C,
                        source: w
                    });
                    let d = v(l);
                    C && (0, m.a)(l, f.i, {
                        connectorId: C,
                        name: "CHATGPT_APP_PAGE_NAME_APP_DETAILS",
                        referrer: u(t),
                        referrerUrl: d
                    }), (0, m.a)(l, g.CodexPluginDetailPageLoaded, {
                        isFirstVisit: b,
                        newAppLifecycleEnabled: c,
                        loadDurationMs: Math.max(0, Math.round(performance.now() - a))
                    })
                }, k[2] = s, k[3] = A, k[4] = t, k[5] = C, k[6] = l, k[7] = w, k[8] = c) : c = k[8];
                let D = (0, j.useEffectEvent)(c);
                k[9] !== x || k[10] !== D || k[11] !== p || k[12] !== q || k[13] !== A || k[14] !== C || k[15] !== l ? (e = () => {
                    if (!x) return;
                    if (z.current?.navigationKey !== p) {
                        let a = !r.has(l);
                        r.add(l), z.current = {
                            isFirstVisit: a,
                            navigationKey: p,
                            newAppLifecycleEnabled: (0, o.b)(l, "403472035"),
                            startedAtMs: q ?? performance.now()
                        }
                    }
                    if (null == A) return;
                    let a = `${p}\0${A}\0${C??""}`;
                    if (y.current === a) return;
                    let {
                        isFirstVisit: b,
                        startedAtMs: c
                    } = z.current;
                    y.current = a, D(c, b, z.current.newAppLifecycleEnabled)
                }, k[9] = x, k[10] = D, k[11] = p, k[12] = q, k[13] = A, k[14] = C, k[15] = l, k[16] = e) : e = k[16], k[17] !== x || k[18] !== p || k[19] !== q || k[20] !== A || k[21] !== t || k[22] !== C || k[23] !== l || k[24] !== w ? (h = [x, p, q, A, t, C, l, w], k[17] = x, k[18] = p, k[19] = q, k[20] = A, k[21] = t, k[22] = C, k[23] = l, k[24] = w, k[25] = h) : h = k[25], (0, j.useEffect)(e, h)
            },
            h: function(a) {
                let b, c, e, h, i, k, l, n = (0, d.c)(33),
                    {
                        scope: o,
                        categoryId: p,
                        enabled: q,
                        entrypoint: r,
                        pageName: t,
                        searchQuery: w,
                        source: x
                    } = a,
                    y = (0, j.useRef)(!1),
                    z = (0, j.useRef)(null),
                    A = (0, j.useRef)(g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_UNSPECIFIED),
                    C = (0, j.useRef)("CHATGPT_APP_PAGE_NAME_UNSPECIFIED"),
                    D = (0, j.useRef)("");
                n[0] !== r || n[1] !== o ? (b = () => {
                    (0, m.a)(o, g.CodexPluginDirectoryImpression, {
                        entrypoint: r
                    }), (0, m.a)(o, f.g, {
                        entrypoint: function(a) {
                            switch (a) {
                                case g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SETTINGS:
                                    return "CHATGPT_APP_DIRECTORY_ENTRYPOINT_SETTINGS";
                                case g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SIDEBAR:
                                    return "CHATGPT_APP_DIRECTORY_ENTRYPOINT_SIDEBAR";
                                case g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_UNSPECIFIED:
                                case g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_DIRECT:
                                case g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER:
                                case g.CodexPluginDirectoryEntrypoint.UNRECOGNIZED:
                                    return "CHATGPT_APP_DIRECTORY_ENTRYPOINT_UNSPECIFIED"
                            }
                        }(r)
                    })
                }, n[0] = r, n[1] = o, n[2] = b) : b = n[2];
                let E = (0, j.useEffectEvent)(b);
                n[3] !== p || n[4] !== t || n[5] !== o || n[6] !== x ? (c = a => {
                    (0, m.a)(o, g.CodexPluginPageView, {
                        ...t === g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_CATEGORY && null != p ? {
                            categoryId: p
                        } : {},
                        pageName: t,
                        referrer: a,
                        source: x
                    });
                    let b = v(o),
                        c = function(a) {
                            switch (a) {
                                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_WORKSPACE:
                                    return "CHATGPT_APP_PAGE_NAME_APP_WORKSPACE";
                                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DETAILS:
                                    return "CHATGPT_APP_PAGE_NAME_APP_DETAILS";
                                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DIRECTORY:
                                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_CATEGORY:
                                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_PERSONAL:
                                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_SEARCH:
                                    return "CHATGPT_APP_PAGE_NAME_APP_DIRECTORY";
                                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_UNSPECIFIED:
                                case g.CodexPluginPageName.UNRECOGNIZED:
                                    return "CHATGPT_APP_PAGE_NAME_UNSPECIFIED"
                            }
                        }(t);
                    C.current !== c && ((0, m.a)(o, f.i, {
                        name: c,
                        referrer: u(a),
                        referrerUrl: b
                    }), C.current = c)
                }, n[3] = p, n[4] = t, n[5] = o, n[6] = x, n[7] = c) : c = n[7];
                let F = (0, j.useEffectEvent)(c);
                n[8] !== o || n[9] !== x ? (e = () => {
                    (0, m.a)(o, g.CodexPluginClick, {
                        source: x,
                        target: g.CodexPluginClickTarget.CODEX_PLUGIN_CLICK_TARGET_SUBMIT_SEARCH
                    })
                }, n[8] = o, n[9] = x, n[10] = e) : e = n[10];
                let G = (0, j.useEffectEvent)(e);
                n[11] !== p || n[12] !== q || n[13] !== E || n[14] !== F || n[15] !== t || n[16] !== o || n[17] !== x ? (h = () => {
                    if (!q) {
                        y.current = !1, z.current = null, A.current = g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_UNSPECIFIED, C.current = "CHATGPT_APP_PAGE_NAME_UNSPECIFIED", s.delete(o);
                        return
                    }
                    y.current || (y.current = !0, E());
                    let a = t === g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_CATEGORY ? p ?? "" : "",
                        b = `${t}\0${x}\0${a}`;
                    z.current !== b && (F(B(A.current)), z.current = b, A.current = t)
                }, n[11] = p, n[12] = q, n[13] = E, n[14] = F, n[15] = t, n[16] = o, n[17] = x, n[18] = h) : h = n[18], n[19] !== p || n[20] !== q || n[21] !== r || n[22] !== t || n[23] !== o || n[24] !== x ? (i = [p, q, r, t, o, x], n[19] = p, n[20] = q, n[21] = r, n[22] = t, n[23] = o, n[24] = x, n[25] = i) : i = n[25], (0, j.useEffect)(h, i), n[26] !== q || n[27] !== G || n[28] !== w ? (k = () => {
                    if (!q || "" === w) {
                        D.current = "";
                        return
                    }
                    let a = setTimeout(() => {
                        D.current !== w && (G(), D.current = w)
                    }, 1500);
                    return () => {
                        clearTimeout(a)
                    }
                }, n[26] = q, n[27] = G, n[28] = w, n[29] = k) : k = n[29], n[30] !== q || n[31] !== w ? (l = [q, w], n[30] = q, n[31] = w, n[32] = l) : l = n[32], (0, j.useEffect)(k, l)
            },
            i: function(a) {
                let b, c, e, f, h, i, j, l, m, o, p = (0, d.c)(27);
                p[0] !== a ? (b = void 0 === a ? {} : a, p[0] = a, p[1] = b) : b = p[1];
                let {
                    directoryTab: q
                } = b, r = (0, k.Z)();
                if (p[2] !== q || p[3] !== r.key || p[4] !== r.search || p[5] !== r.state) {
                    let a = new URLSearchParams(r.search),
                        b = a.get(n.a),
                        d = q ?? "openai";
                    null == q && ("workspace" === b || "teams" === b ? d = "workspace" : "personal" === b && (d = "personal"));
                    let k = a.get("category"),
                        {
                            pageName: o,
                            source: s
                        } = y({
                            categoryKey: k,
                            directoryTab: d,
                            isGlobalSearch: !0,
                            searchQuery: e = (c = a.get("search") ?? "").trim().toLowerCase()
                        });
                    f = s, h = k, i = d, p[14] !== r.key || p[15] !== r.state ? (j = function(a) {
                        let {
                            explicitEntrypoint: b,
                            locationKey: c,
                            locationState: d
                        } = a;
                        if (null != b) return b;
                        let e = x.safeParse(d);
                        return e.success && null != e.data.pluginDirectoryEntrypoint ? e.data.pluginDirectoryEntrypoint : "default" === c ? g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_DIRECT : g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER
                    }({
                        locationKey: r.key,
                        locationState: r.state
                    }), p[14] = r.key, p[15] = r.state, p[16] = j) : j = p[16], l = o, m = B(o), p[2] = q, p[3] = r.key, p[4] = r.search, p[5] = r.state, p[6] = c, p[7] = e, p[8] = f, p[9] = h, p[10] = i, p[11] = j, p[12] = l, p[13] = m
                } else c = p[6], e = p[7], f = p[8], h = p[9], i = p[10], j = p[11], l = p[12], m = p[13];
                return p[17] !== r.key || p[18] !== c || p[19] !== e || p[20] !== f || p[21] !== h || p[22] !== i || p[23] !== j || p[24] !== l || p[25] !== m ? (o = {
                    categoryKey: h,
                    directoryTab: i,
                    entrypoint: j,
                    pageName: l,
                    referrer: m,
                    routeKey: r.key,
                    searchQuery: c,
                    searchQueryNormalized: e,
                    source: f
                }, p[17] = r.key, p[18] = c, p[19] = e, p[20] = f, p[21] = h, p[22] = i, p[23] = j, p[24] = l, p[25] = m, p[26] = o) : o = p[26], o
            },
            j: function(a) {
                let b, c, e, f = (0, d.c)(13),
                    {
                        scope: h,
                        hasResults: i,
                        isReady: k,
                        searchQuery: l,
                        startedAtMs: n
                    } = a,
                    o = (0, j.useRef)(""),
                    q = (0, j.useRef)(null);
                f[0] !== h ? (b = (a, b) => {
                    try {
                        (0, m.a)(h, g.CodexPluginSearchResultsLoaded, {
                            hasResults: a,
                            searchDurationMs: b
                        })
                    } catch (a) {
                        p.a.error("Failed to log plugin search latency analytics", {
                            safe: {},
                            sensitive: {
                                error: a
                            }
                        })
                    }
                }, f[0] = h, f[1] = b) : b = f[1];
                let r = (0, j.useEffectEvent)(b);
                f[2] !== i || f[3] !== k || f[4] !== r || f[5] !== l || f[6] !== n ? (c = () => {
                    if ("" === l) {
                        o.current = "", q.current = null;
                        return
                    }
                    if (o.current === l) return;
                    q.current?.query !== l && (q.current = {
                        hasResults: null,
                        query: l,
                        readyAtMs: null,
                        startedAtMs: n ?? performance.now()
                    });
                    let a = q.current;
                    k && null == a.readyAtMs && (a.hasResults = i, a.readyAtMs = performance.now());
                    let {
                        hasResults: b,
                        readyAtMs: c
                    } = a;
                    if (null == b || null == c) return;
                    let d = setTimeout(() => {
                        q.current === a && (q.current = null, o.current = l, r(b, Math.max(0, Math.round(c - a.startedAtMs))))
                    }, Math.max(0, 1500 - (performance.now() - a.startedAtMs)));
                    return () => {
                        clearTimeout(d)
                    }
                }, f[2] = i, f[3] = k, f[4] = r, f[5] = l, f[6] = n, f[7] = c) : c = f[7], f[8] !== i || f[9] !== k || f[10] !== l || f[11] !== n ? (e = [i, k, l, n], f[8] = i, f[9] = k, f[10] = l, f[11] = n, f[12] = e) : e = f[12], (0, j.useEffect)(c, e)
            }
        })
    }),
    IVVU: (function(a, b, c) {
        var d = c("Q840"),
            e = c("DBCl"),
            f = c("CjTC"),
            g = c("lAQI"),
            h = c("OWtl"),
            i = c("GkpV"),
            j = c("JYRT"),
            k = c("jBHQ");
        let l = "1349514884",
            m = g.F({
                mention_surfaces_by_plugin_id: g.J(g.L(), g.g(g.L().min(1)).nullable().catch(null))
            }),
            n = g.F({
                hidden_plugin_ids: g.g(g.L()).default([])
            }).catch({
                hidden_plugin_ids: []
            });

        function o(a) {
            return {
                hiddenPluginIds: n.parse(a).hidden_plugin_ids
            }
        }
        let p = (0, d.c)(h.a, a => {
                let {
                    get: b
                } = a;
                return b(i.b) ? [] : [e.nb]
            }),
            q = (0, d.c)(h.a, a => {
                let {
                    get: b
                } = a;
                return b(k.a, i.a) ? [] : [e.nb]
            }),
            r = (0, d.c)(h.a, a => {
                let {
                    get: b
                } = a, {
                    hiddenPluginIds: c
                } = o(b(j.a, l)?.value);
                return {
                    hiddenPluginIds: [...c, ...b(p)]
                }
            }),
            s = (0, d.c)(h.a, a => {
                let {
                    get: b
                } = a, c = b(j.a, l)?.value, d = m.safeParse(c), e = new Map;
                for (let [a, b] of Object.entries(d.data?.mention_surfaces_by_plugin_id ?? {})) null != b && e.set(a, b);
                return e
            });
        c.d(b, {}, {
            a: p,
            b: q,
            c: function(a, b) {
                return b.has(a.id) || null != a.requestedId && b.has(a.requestedId) || "GLOBAL" === a.scope && "LISTED" === a.discoverability && null != a.name && b.has(`${a.name}@${e.dd}`)
            },
            d: function(a, b, c) {
                let {
                    plugin: d
                } = a, e = (0, f.a)(d) ?? d.id;
                return c.get(e)?.includes(b) ?? !0
            },
            e: o,
            f: s,
            g: r
        })
    }),
    H7Ld: (function(a, b, c) {
        var d = c("YWcr"),
            e = c("rS3J");
        c.d(b, {}, {
            a: "deep-research-workflow@openai-curated-remote",
            b: function(a) {
                let {
                    defaultPrompt: b,
                    pluginDisplayName: c,
                    pluginId: f
                } = a, g = `[@${c}](${(0,e.d)((0,d.w)(f))})`;
                return `${g} ${b?.trim()??""}`
            },
            c: function(a) {
                return a?.map(a => a.trim()).find(a => a.length > 0) ?? null
            }
        })
    }),
    C0re: (function(a, b, c) {
        var d = c("DBCl");
        let e = ["plugins"];

        function f(a) {
            for (var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            return [...e, "host", a, ...c]
        }

        function g(a) {
            return "local" === a || a === d.$b
        }
        async function h(a, b) {
            let c = {
                queryKey: b
            };
            await a.cancelQueries(c), await a.invalidateQueries(c, {
                cancelRefetch: !1
            })
        }
        c.d(b, {}, {
            a: e,
            b: f,
            c: function(a) {
                for (var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                return [...e, "directory", a, ...c]
            },
            d: function(a, b) {
                return g(a) ? [...e, b, a] : f(a, b)
            },
            e: function(a, b) {
                return h(a, f(b))
            },
            f: g,
            g: h
        })
    }),
    M3gf: (function(a, b, c) {
        var d = c("DBCl"),
            e = c("Dgwo"),
            f = c("WFY2");
        c.d(b, {}, {
            a: async function(a, b, c) {
                try {
                    let g = await (0, e.b)(a, b).sendRequest("marketplace/add", c);
                    return f.a.info("plugin_marketplace_add_succeeded", {
                        safe: {
                            ...(0, d.Kg)(c),
                            alreadyAdded: g.alreadyAdded,
                            marketplaceName: g.marketplaceName
                        },
                        sensitive: (0, d.Lg)(c)
                    }), g
                } catch (a) {
                    throw f.a.warning("plugin_marketplace_add_failed", {
                        safe: (0, d.Kg)(c),
                        sensitive: {
                            ...(0, d.Lg)(c),
                            error: a
                        }
                    }), a
                }
            },
            b: async function(a, b, c) {
                f.a.info("plugin_install_started", {
                    safe: (0, d._g)(c),
                    sensitive: {
                        hostId: b,
                        ...(0, d.$g)(c)
                    }
                });
                try {
                    let g = await (0, e.b)(a, b).sendRequest("plugin/install", c);
                    return f.a.info("plugin_install_succeeded", {
                        safe: (0, d._g)(c),
                        sensitive: {
                            hostId: b,
                            ...(0, d.$g)(c)
                        }
                    }), g
                } catch (a) {
                    throw f.a.warning("plugin_install_failed", {
                        safe: {
                            ...(0, d._g)(c),
                            errorCategory: (0, d.Zg)(a)
                        },
                        sensitive: {
                            ...(0, d.$g)(c),
                            hostId: b,
                            error: a
                        }
                    }), a
                }
            },
            c: async function(a, b, c) {
                try {
                    let d = await (0, e.b)(a, b).sendRequest("plugin/uninstall", c);
                    return f.a.info("plugin_uninstall_succeeded", {
                        safe: {
                            pluginId: c.pluginId
                        },
                        sensitive: {}
                    }), d
                } catch (a) {
                    throw f.a.warning("plugin_uninstall_failed", {
                        safe: {
                            pluginId: c.pluginId
                        },
                        sensitive: {
                            error: a
                        }
                    }), a
                }
            }
        })
    }),
    WzdM: (function(a, b, c) {
        var d = c("oo2L");
        let e = {
            catalog: "CONNECTOR_SETTING",
            chatgpt: "PROMPT_TEXT_AREA",
            codex: "CODEX",
            tpp: "TPP"
        };
        c.d(b, {}, {
            a: e,
            b: function(a) {
                return a.release.display_name.trim() || a.name
            },
            c: function(a) {
                return {
                    [d.b]: e[a ?? "catalog"]
                }
            }
        })
    }),
    ugfi: (function(a, b, c) {
        var d = c("QosV"),
            e = c("mfKi"),
            f = c("irkb"),
            g = c("xSOA"),
            h = c("Q840"),
            i = c("ZGX8"),
            j = c("Qgfj"),
            k = c("Wf1j"),
            l = c("Dgwo"),
            m = c("HUHI"),
            n = c("uc7r"),
            o = c("OiCI"),
            p = c("THSC"),
            q = c("SGsN"),
            r = c("C0re"),
            s = c("EEop"),
            t = c("vLsY"),
            u = c("a4MG"),
            v = c("sLlu"),
            w = c("OWtl"),
            x = c("oiUH"),
            y = c("kfGJ"),
            z = c("bPa2"),
            A = c("WFY2"),
            B = c("HFSu"),
            C = c("OF5O"),
            D = c("p84t"),
            E = c("H0Gm"),
            F = c("md5w"),
            G = c("v70x"),
            H = c("M3gf"),
            I = c("WzdM"),
            J = c("PmQd"),
            K = c("jShI"),
            L = c("cLdu"),
            M = c("ueue");
        let N = ["user-saved-config"],
            O = (0, j.f)({
                enabledSuccess: {
                    id: "plugins.card.enableSuccess",
                    defaultMessage: "{pluginName} plugin enabled"
                },
                disabledSuccess: {
                    id: "plugins.card.disableSuccess",
                    defaultMessage: "{pluginName} plugin disabled"
                },
                toggleError: {
                    id: "plugins.card.toggleError",
                    defaultMessage: "Failed to update plugin"
                },
                uninstallSuccess: {
                    id: "plugins.card.uninstallSuccess",
                    defaultMessage: "{pluginName} plugin uninstalled"
                },
                uninstallError: {
                    id: "plugins.card.uninstallError",
                    defaultMessage: "Failed to uninstall plugin"
                },
                marketplacesUpgradeSuccess: {
                    id: "plugins.marketplace.upgradeAllSuccess",
                    defaultMessage: "Marketplaces upgraded"
                },
                marketplaceUpgradeSuccess: {
                    id: "plugins.marketplace.upgradeSuccess",
                    defaultMessage: "{marketplaceName} marketplace upgraded"
                },
                marketplacesUpgradeError: {
                    id: "plugins.marketplace.upgradeAllError",
                    defaultMessage: "Some marketplaces failed to upgrade"
                },
                marketplaceUpgradeError: {
                    id: "plugins.marketplace.upgradeError",
                    defaultMessage: "Failed to upgrade marketplace"
                },
                marketplacesUpgradeRequestError: {
                    id: "plugins.marketplace.upgradeAllRequestError",
                    defaultMessage: "Failed to upgrade marketplaces"
                },
                skillCatalogReloadError: {
                    id: "plugins.skillCatalog.reloadError",
                    defaultMessage: "Plugin changed, but skills couldn't refresh. Reload skills before starting a new chat"
                }
            });

        function P(a) {
            A.a.error("Failed to refresh plugins after updating enabled state", {
                safe: {},
                sensitive: {
                    error: a
                }
            })
        }

        function Q(a) {
            var b;
            let [c, d] = a;
            return null != (b = d) && "object" == typeof b && "plugins" in b && Array.isArray(b.plugins) ? [
                [c, d]
            ] : []
        }

        function R(a) {
            A.a.error("Failed to refresh plugins after plugin uninstall", {
                safe: {},
                sensitive: {
                    error: a
                }
            })
        }

        function S(a, b, c, d) {
            let e = (0, L.i)(b);
            e && null == d || (a.setQueriesData({
                queryKey: [...(0, r.d)(b, "installed"), ...e ? ["hosted", d] : []]
            }, a => a?.some(a => a.plugin.id === c) ? a.filter(a => a.plugin.id !== c) : a), e || (a.setQueriesData({
                queryKey: (0, r.b)(b, "marketplace-kind")
            }, a => null == a ? a : T(a, c)), a.setQueriesData({
                queryKey: (0, r.b)(b, "list")
            }, a => {
                if (null == a) return a;
                let b = T(a.plugins, c);
                return b === a.plugins ? a : {
                    ...a,
                    plugins: b
                }
            })), a.setQueriesData({
                queryKey: (0, s.i)(b, d)
            }, a => null != a && a.summary.id === c && (a.summary.installed || a.summary.enabled) ? {
                ...a,
                summary: {
                    ...a.summary,
                    enabled: !1,
                    installed: !1
                }
            } : a))
        }

        function T(a, b) {
            return a.some(a => a.plugin.id === b && (a.plugin.installed || a.plugin.enabled)) ? a.map(a => a.plugin.id === b ? {
                ...a,
                plugin: {
                    ...a.plugin,
                    enabled: !1,
                    installed: !1
                }
            } : a) : a
        }
        async function U(a) {
            let {
                scope: b,
                hostId: c,
                intl: d,
                queryClient: e
            } = a;
            try {
                await (0, K.b)({
                    scope: b,
                    hostId: c,
                    queryClient: e
                })
            } catch (f) {
                A.a.error("plugin_skill_catalog_reload_failed_after_mutation", {
                    safe: {
                        hostId: c
                    },
                    sensitive: {
                        error: f
                    }
                });
                let a = b.get(q.f).warning(d.formatMessage(O.skillCatalogReloadError), {
                    duration: 0,
                    primaryAction: {
                        label: d.formatMessage({
                            id: "skills.page.refreshSkills",
                            defaultMessage: "Refresh"
                        }),
                        onClick: async () => {
                            a.close(), await Promise.all([U({
                                scope: b,
                                hostId: c,
                                intl: d,
                                queryClient: e
                            }), W(e, c), (0, v.a)(e, m.a)])
                        }
                    }
                })
            }
        }
        async function V(a, b, c, d) {
            await Promise.all([(0, v.a)(a, n.a), W(a, b, null != d && d !== c)])
        }
        async function W(a, b) {
            let c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                d = (0, L.i)(b);
            await Promise.all([(0, J.b)(a, d || c ? "account" : {
                hostId: b
            }), ...X(d).map(b => (0, v.a)(a, b))])
        }

        function X(a) {
            return [m.b, ["chatgpt-system-hints", "plugins"], ...a ? [] : [u.e, z.a, x.a, p.a, u.f, N]]
        }
        c.d(b, {}, {
            a: async function(a) {
                let b = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                await Promise.all([M.a, ...X(b)].map(a))
            },
            b: async function(a) {
                let {
                    scope: b,
                    disableBundledAutoInstall: c = !0,
                    hostId: d,
                    marketplaceName: e,
                    pluginId: f,
                    pluginName: g,
                    queryClient: h,
                    requestPluginId: j,
                    signal: k
                } = a;
                k?.throwIfAborted();
                let l = (0, E.c)(b, {
                        hostId: d,
                        pluginId: f
                    }),
                    n = (0, L.i)(d),
                    p = b.get(o.d) ?? void 0,
                    q = n ? p : void 0;
                try {
                    let a = (0, i.a)(f);
                    if (!n && c && null != a && await (0, C.a)(b, a, !0), k?.throwIfAborted(), n) {
                        if (null == q) throw Error("Plugin account changed before uninstalling plugin");
                        await B.CodexRequest.safePost("/ps/plugins/{plugin_id}/uninstall", {
                            surface: "other",
                            parameters: {
                                path: {
                                    plugin_id: j ?? f
                                }
                            },
                            additionalHeaders: (0, I.c)()
                        }), S(h, d, f, q);
                        return
                    }
                    await (0, H.c)(b, d, {
                        pluginId: j ?? f
                    }), S(h, d, f);
                    let l = (0, m.g)(d, (0, o.c)(b));
                    h.cancelQueries({
                        queryKey: l
                    }).then(() => (0, m.k)({
                        scope: b,
                        accountId: (0, o.c)(b),
                        hostId: d,
                        queryClient: h
                    })).finally(() => (0, t.a)(l)).catch(a => {
                        h.invalidateQueries({
                            queryKey: l,
                            refetchType: "none"
                        }), A.a.error("Failed to refresh apps after plugin uninstall", {
                            safe: {},
                            sensitive: {
                                error: a
                            }
                        })
                    }), await Promise.all([(0, K.b)({
                        scope: b,
                        hostId: d,
                        queryClient: h
                    }).catch(a => {
                        A.a.error("plugin_skill_catalog_reload_failed_after_mutation", {
                            safe: {
                                hostId: d
                            },
                            sensitive: {
                                error: a
                            }
                        })
                    }), (0, D.b)({
                        hostId: d,
                        marketplaceName: e,
                        pluginName: g
                    })])
                } finally {
                    (0, E.a)(b, l), V(h, d, f, j)
                }
            },
            c: function(a) {
                let b, c, j, l, n, p, r, s, u, v, x = (0, d.c)(36),
                    z = a?.hostId ?? y.a;
                x[0] !== z ? (b = (0, L.i)(z), x[0] = z, x[1] = b) : b = x[1];
                let F = b,
                    J = (0, h.y)(w.a),
                    K = (0, h.z)(o.a),
                    M = (0, f.c)(),
                    N = (0, k.a)(),
                    P = K ?? void 0;
                x[2] !== z || x[3] !== P ? (c = (0, m.g)(z, P), x[2] = z, x[3] = P, x[4] = c) : c = x[4];
                let Q = c;
                x[5] !== Q || x[6] !== z || x[7] !== F || x[8] !== N || x[9] !== M || x[10] !== J ? (j = async a => {
                    let {
                        marketplaceName: b,
                        pluginId: c,
                        pluginName: d,
                        requestPluginId: e,
                        accountId: f
                    } = a, g = J.get(o.d) ?? void 0, h = (0, i.a)(c);
                    if (F || null == h || await (0, C.a)(J, h, !0), F) {
                        if (null == f || g !== f) throw Error("Plugin account changed before uninstalling plugin");
                        await B.CodexRequest.safePost("/ps/plugins/{plugin_id}/uninstall", {
                            surface: "other",
                            parameters: {
                                path: {
                                    plugin_id: e ?? c
                                }
                            },
                            additionalHeaders: (0, I.c)()
                        }), S(M, z, c, f);
                        return
                    }
                    await (0, H.c)(J, z, {
                        pluginId: e ?? c
                    }), S(M, z, c);
                    let j = U({
                        scope: J,
                        hostId: z,
                        intl: N,
                        queryClient: M
                    });
                    M.cancelQueries({
                        queryKey: Q
                    }).then(() => (0, m.k)({
                        scope: J,
                        accountId: (0, o.c)(J),
                        hostId: z,
                        queryClient: M
                    })).finally(() => (0, t.a)(Q)).catch(a => {
                        M.invalidateQueries({
                            queryKey: Q,
                            refetchType: "none"
                        }), A.a.error("Failed to refresh apps after plugin uninstall", {
                            safe: {},
                            sensitive: {
                                error: a
                            }
                        })
                    }), await Promise.all([j, (0, D.b)({
                        hostId: z,
                        marketplaceName: b,
                        pluginName: d
                    })])
                }, x[5] = Q, x[6] = z, x[7] = F, x[8] = N, x[9] = M, x[10] = J, x[11] = j) : j = x[11], x[12] !== z || x[13] !== J ? (l = a => {
                    let {
                        marketplaceAnalytics: b,
                        pluginId: c
                    } = a;
                    return null != b && (0, G.d)(J, {
                        action: e.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_REMOVE,
                        result: e.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_INITIATED,
                        ...b
                    }), {
                        operationId: (0, E.c)(J, {
                            hostId: z,
                            pluginId: c
                        })
                    }
                }, x[12] = z, x[13] = J, x[14] = l) : l = x[14], x[15] !== N || x[16] !== J ? (n = (a, b) => {
                    let {
                        marketplaceAnalytics: c,
                        pluginDisplayName: d
                    } = b;
                    null != c && (0, G.d)(J, {
                        action: e.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_REMOVE,
                        result: e.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
                        ...c
                    }), J.get(q.f).success(N.formatMessage(O.uninstallSuccess, {
                        pluginName: d
                    }))
                }, p = (a, b) => {
                    let {
                        marketplaceAnalytics: c,
                        marketplaceName: d,
                        pluginId: f,
                        pluginName: g,
                        requestPluginId: h
                    } = b;
                    null != c && (0, G.d)(J, {
                        action: e.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_REMOVE,
                        errorType: "request_failed",
                        result: e.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_FAILURE,
                        ...c
                    }), A.a.error("manual_plugin_uninstall_failed", {
                        safe: {
                            marketplaceName: d,
                            pluginId: h ?? f,
                            pluginName: g
                        },
                        sensitive: {
                            error: a
                        }
                    }), J.get(q.f).danger(N.formatMessage(O.uninstallError), {
                        errorAnalytics: {
                            toastId: "pluginsAvailability.onError.uninstallError"
                        }
                    })
                }, x[15] = N, x[16] = J, x[17] = n, x[18] = p) : (n = x[17], p = x[18]), x[19] !== z || x[20] !== M || x[21] !== J ? (r = (a, b, c, d) => {
                    let {
                        pluginId: e,
                        requestPluginId: f,
                        accountId: g
                    } = c;
                    null != d && (0, E.a)(J, d.operationId), V(M, z, e, f).then(() => {
                        null == b && S(M, z, e, g)
                    }).catch(R)
                }, x[19] = z, x[20] = M, x[21] = J, x[22] = r) : r = x[22], x[23] !== j || x[24] !== l || x[25] !== n || x[26] !== p || x[27] !== r ? (s = {
                    mutationFn: j,
                    onMutate: l,
                    onSuccess: n,
                    onError: p,
                    onSettled: r
                }, x[23] = j, x[24] = l, x[25] = n, x[26] = p, x[27] = r, x[28] = s) : s = x[28];
                let T = (0, g.a)(s),
                    W = T.isPending ? T.variables?.pluginId ?? null : null;
                return x[29] !== F || x[30] !== T || x[31] !== J ? (u = a => {
                    let b = J.get(o.d) ?? void 0;
                    return T.mutateAsync({
                        ...a,
                        accountId: F ? b : void 0
                    })
                }, x[29] = F, x[30] = T, x[31] = J, x[32] = u) : u = x[32], x[33] !== u || x[34] !== W ? (v = {
                    pendingUninstallPluginId: W,
                    uninstallPlugin: u
                }, x[33] = u, x[34] = W, x[35] = v) : v = x[35], v
            },
            d: function(a) {
                let b, c, i, j, m, n, p, s, t, v = (0, d.c)(36),
                    x = a?.hostId ?? y.a;
                v[0] !== x ? (b = (0, L.i)(x), v[0] = x, v[1] = b) : b = v[1];
                let z = b,
                    C = (0, h.y)(w.a),
                    D = (0, f.c)(),
                    E = (0, k.a)();
                v[2] !== x || v[3] !== z || v[4] !== E || v[5] !== D || v[6] !== C ? (c = async a => {
                    let {
                        pluginId: b,
                        enabled: c,
                        plugin: d,
                        accountId: e,
                        changesPluginService: f
                    } = a, g = C.get(o.d) ?? void 0;
                    if (z && (null == e || g !== e)) throw Error("Plugin account changed before updating plugin");
                    if (f) {
                        if (await B.CodexRequest.safePost(c ? "/ps/plugins/{plugin_id}/enable" : "/ps/plugins/{plugin_id}/disable", {
                                surface: "other",
                                parameters: {
                                    path: {
                                        plugin_id: d?.remotePluginId ?? b
                                    }
                                },
                                additionalHeaders: (0, I.c)()
                            }), z) return
                    } else {
                        let a = await (0, u.m)(C, D, x);
                        await (0, l.b)(C, x).sendRequest("config/batchWrite", {
                            edits: (0, F.a)({
                                pluginId: b,
                                enabled: c
                            }),
                            filePath: a?.filePath ?? null,
                            expectedVersion: a?.expectedVersion ?? null,
                            reloadUserConfig: !0
                        })
                    }
                    await U({
                        scope: C,
                        hostId: x,
                        intl: E,
                        queryClient: D
                    })
                }, v[2] = x, v[3] = z, v[4] = E, v[5] = D, v[6] = C, v[7] = c) : c = v[7], v[8] !== x || v[9] !== z || v[10] !== D || v[11] !== C ? (i = async a => {
                    let {
                        pluginId: b,
                        enabled: c,
                        marketplaceAnalytics: d
                    } = a;
                    if (null != d && (0, G.d)(C, {
                            action: c ? e.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_ENABLE : e.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_DISABLE,
                            result: e.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_INITIATED,
                            ...d
                        }), z) return;
                    await Promise.all([D.cancelQueries({
                        queryKey: (0, r.b)(x, "list")
                    }), D.cancelQueries({
                        queryKey: u.f
                    })]);
                    let f = D.getQueryData(u.f),
                        g = D.getQueriesData({
                            queryKey: (0, r.b)(x, "list")
                        }).flatMap(Q);
                    for (let [a, d] of g) D.setQueryData(a, function(a, b, c) {
                        return {
                            ...a,
                            plugins: a.plugins.map(a => a.plugin.id !== b || a.plugin.enabled === c ? a : {
                                ...a,
                                plugin: {
                                    ...a.plugin,
                                    enabled: c
                                }
                            })
                        }
                    }(d, b, c));
                    if (f) {
                        var h, i, j;
                        let a, d, e = {
                            ...f.config
                        };
                        h = f.config.plugins, i = b, j = c, d = (a = null == h || "object" != typeof h || Array.isArray(h) ? {} : h)[i], e.plugins = {
                            ...a,
                            [i]: null == d || "object" != typeof d || Array.isArray(d) ? {
                                enabled: j
                            } : {
                                ...d,
                                enabled: j
                            }
                        }, D.setQueryData(u.f, {
                            ...f,
                            config: e
                        })
                    }
                    return {
                        previousPluginLists: g,
                        previousUserConfig: f
                    }
                }, v[8] = x, v[9] = z, v[10] = D, v[11] = C, v[12] = i) : i = v[12], v[13] !== E || v[14] !== C ? (j = (a, b) => {
                    let {
                        enabled: c,
                        marketplaceAnalytics: d,
                        pluginDisplayName: f
                    } = b;
                    null != d && (0, G.d)(C, {
                        action: c ? e.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_ENABLE : e.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_DISABLE,
                        result: e.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
                        ...d
                    }), C.get(q.f).success(E.formatMessage(c ? O.enabledSuccess : O.disabledSuccess, {
                        pluginName: f
                    }))
                }, v[13] = E, v[14] = C, v[15] = j) : j = v[15], v[16] !== E || v[17] !== D || v[18] !== C ? (m = (a, b, c) => {
                    let {
                        enabled: d,
                        marketplaceAnalytics: f
                    } = b;
                    for (let [b, g] of(null != f && (0, G.d)(C, {
                            action: d ? e.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_ENABLE : e.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_DISABLE,
                            errorType: "request_failed",
                            result: e.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_FAILURE,
                            ...f
                        }), A.a.error("Failed to update plugin enabled state", {
                            safe: {},
                            sensitive: {
                                error: a
                            }
                        }), c?.previousUserConfig && D.setQueryData(u.f, c.previousUserConfig), c?.previousPluginLists ?? [])) D.setQueryData(b, g);
                    C.get(q.f).danger(E.formatMessage(O.toggleError), {
                        errorAnalytics: {
                            toastId: "pluginsAvailability.onError.toggleError"
                        }
                    })
                }, v[16] = E, v[17] = D, v[18] = C, v[19] = m) : m = v[19], v[20] !== x || v[21] !== D ? (n = (a, b, c) => {
                    let {
                        changesPluginService: d
                    } = c;
                    W(D, x, d).catch(P)
                }, v[20] = x, v[21] = D, v[22] = n) : n = v[22], v[23] !== c || v[24] !== i || v[25] !== j || v[26] !== m || v[27] !== n ? (p = {
                    mutationFn: c,
                    onMutate: i,
                    onSuccess: j,
                    onError: m,
                    onSettled: n
                }, v[23] = c, v[24] = i, v[25] = j, v[26] = m, v[27] = n, v[28] = p) : p = v[28];
                let H = (0, g.a)(p),
                    J = H.isPending ? H.variables?.pluginId : null;
                return v[29] !== z || v[30] !== H || v[31] !== C ? (s = a => {
                    let b = C.get(o.d) ?? void 0,
                        c = a.plugin ?? a.marketplaceAnalytics?.plugin;
                    return H.mutateAsync({
                        ...a,
                        plugin: c,
                        changesPluginService: z || c?.source.type === "remote",
                        accountId: z ? b : void 0
                    })
                }, v[29] = z, v[30] = H, v[31] = C, v[32] = s) : s = v[32], v[33] !== J || v[34] !== s ? (t = {
                    pendingPluginId: J,
                    setPluginEnabled: s
                }, v[33] = J, v[34] = s, v[35] = t) : t = v[35], t
            }
        })
    }),
    SlNh: (function(a, b, c) {
        var d = c("nuXe"),
            e = c.n(d),
            f = c("DBCl"),
            g = c("Haiv"),
            h = c("oszP"),
            i = c("ueue"),
            j = c("bnxy"),
            k = c("SaEY");
        let l = "/.agents/plugins/marketplace.json",
            m = "/marketplace.json",
            n = [`computer-use@${f.bd}`, `${f.qc}@${f.bd}`, `chrome@${f.bd}`, `chrome-internal@${f.bd}`, "spreadsheets@openai-primary-runtime", "presentations@openai-primary-runtime"];

        function o(a) {
            return a.trim().toLowerCase()
        }

        function p(a) {
            return a.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()
        }

        function q(a) {
            switch (o(a).replace(/[_-]+/g, " ")) {
                case "built by openai":
                    return 0;
                case "chatgpt official":
                    return 1;
                default:
                    return 2
            }
        }

        function r(a, b) {
            return a.sort((a, c) => {
                let d = s(a, b);
                if (d !== s(c, b)) return d ? -1 : 1;
                let e = (0, k.b)(a.plugin);
                return e !== (0, k.b)(c.plugin) ? e ? 1 : -1 : 0
            })
        }

        function s(a, b) {
            return b?.has(a.plugin.id) === !0 || null != a.plugin.remotePluginId && b?.has(a.plugin.remotePluginId) === !0
        }
        c.d(b, {}, {
            a: function(a) {
                return (0, i.o)(a.marketplaceName) || null != a.marketplaceDisplayName && (0, i.o)(a.marketplaceDisplayName)
            },
            b: function(a) {
                return a.find(a => a.plugin.name === f.ob && (0, f.Bi)(a.marketplaceName)) ?? null
            },
            c: function(a) {
                let {
                    availablePlugins: b,
                    createdByMeRemotePlugins: c,
                    homeDirectory: d,
                    pluginShares: e,
                    storefrontPlugins: g
                } = a, j = b.find(a => (0, h.j)(d, a.marketplacePath)), k = null == j ? null : (0, i.i)(j), l = g.filter(a => null != k && (0, i.i)(a) === k), m = function(a, b, c) {
                    let d = new Set([...c.flatMap(a => {
                            let b = a.plugin.shareContext?.remotePluginId;
                            return null == b ? [] : [b]
                        }), ...b?.flatMap(a => {
                            let {
                                localPluginPath: b,
                                plugin: c
                            } = a;
                            if (null == b) return [];
                            if (null == c.remotePluginId) throw Error(`remote plugin share ${c.id} is missing remotePluginId`);
                            return [c.remotePluginId]
                        }) ?? []]),
                        e = [];
                    for (let b of a ?? []) {
                        let a = b.plugin.remotePluginId;
                        if (null == a) throw Error(`created by me remote plugin ${b.plugin.id} is missing remotePluginId`);
                        d.has(a) || (d.add(a), e.push(b))
                    }
                    if (null == b) return e;
                    for (let {
                            plugin: a
                        }
                        of b) {
                        let b = a.remotePluginId;
                        if (null == b) throw Error(`remote plugin share ${a.id} is missing remotePluginId`);
                        if (d.has(b)) continue;
                        let c = (0, f.Yg)(a.id);
                        if (null == c) throw Error(`remote plugin share ${a.id} is missing marketplace name`);
                        d.add(b), e.push({
                            ...(0, i.h)(a),
                            description: a.interface?.shortDescription ?? null,
                            displayName: a.interface?.displayName ?? null,
                            marketplaceDisplayName: null,
                            marketplaceName: c,
                            marketplacePath: null,
                            plugin: a,
                            keywords: a.keywords,
                            remoteMarketplaceName: c
                        })
                    }
                    return e
                }(c, e, l);
                return {
                    marketplaceFilterValue: k,
                    plugins: [...l, ...m]
                }
            },
            d: function(a) {
                return a.filter(a => a.plugin.installed && a.plugin.enabled && !(0, k.b)(a.plugin))
            },
            e: function(a) {
                let {
                    additionalSearchValues: b,
                    dedupeSearchResults: c = !1,
                    locale: d,
                    plugins: e,
                    marketplaceFilterValue: f = null,
                    query: h
                } = a, j = p(h), k = e.filter(a => (!(h.length > 0) || !!p([a.displayName ?? a.plugin.name, ...a.keywords ?? [], ...b?.(a) ?? []].join(" ")).includes(j)) && (null == f || (0, i.i)(a) === f && (a.marketplaceDisplayName?.trim() || a.marketplaceName).trim().length > 0)), l = c ? function(a) {
                    let b = new Map;
                    for (let c of a) {
                        let a = function(a) {
                                let b = a.plugin.remotePluginId ?? a.plugin.shareContext?.remotePluginId;
                                return null == b ? `plugin:${(0,i.i)(a)}:${a.plugin.id}` : `remote:${b}`
                            }(c),
                            d = b.get(a);
                        (null == d || !d.plugin.installed && c.plugin.installed) && b.set(a, c)
                    }
                    return Array.from(b.values())
                }(k) : k;
                if (null == d) return r(l);
                let m = new Intl.Collator(d, {
                    sensitivity: "base"
                });
                return l.sort((a, b) => m.compare((0, g.a)(a), (0, g.a)(b)))
            },
            f: function(a) {
                let b = new Set,
                    c = [];
                for (let d of a) {
                    let a = (0, i.i)(d),
                        e = d.marketplaceDisplayName?.trim() || d.marketplaceName;
                    0 !== e.trim().length && !b.has(a) && (b.add(a), c.push({
                        label: (0, i.o)(e) ? "Built by OpenAI" : e,
                        subLabelSource: null == d.marketplacePath ? d.remoteMarketplaceName : function(a) {
                            let b = (0, j.r)(a).replace(/\/+$/, "");
                            return b.endsWith(l) ? b.slice(0, -l.length) : b.endsWith(m) ? b.slice(0, -m.length) : b
                        }(d.marketplacePath),
                        value: a
                    }))
                }
                let d = new Map,
                    e = new Map;
                for (let a of c) {
                    let b = e.get(a.label);
                    if (null == b) {
                        e.set(a.label, [a]);
                        continue
                    }
                    b.push(a)
                }
                for (let a of e.values()) {
                    if (a.length <= 1) continue;
                    let b = function(a) {
                        let b = a.map(a => (0, j.r)(a).replace(/\/+$/, "").split("/").filter(Boolean)),
                            c = Math.max(1, ...b.map(a => a.length));
                        for (let a = 1; a <= c; a++) {
                            let c = b.map(b => (function(a, b) {
                                let c = a.slice(-b).join("/");
                                return 0 === c.length ? "" : 1 === b ? c : a.length > b ? `.../${c}` : c
                            })(b, a));
                            if (new Set(c).size === c.length) return c
                        }
                        return a.map(a => (0, j.r)(a))
                    }(a.map(a => a.subLabelSource));
                    for (let [c, e] of a.entries()) d.set(e.value, b[c])
                }
                return c.sort((a, b) => {
                    let c = q(a.label) - q(b.label);
                    return 0 !== c ? c : a.label.localeCompare(b.label) || (d.get(a.value) ?? "").localeCompare(d.get(b.value) ?? "")
                }).map(a => ({
                    label: a.label,
                    subLabel: d.get(a.value) ?? null,
                    value: a.value
                }))
            },
            g: function(a) {
                let {
                    categoryOrder: b = [],
                    categorySections: c = [],
                    collapsedCategoryIds: d = [],
                    plugins: g,
                    connectedPlugins: h = g,
                    featuredPluginIds: i
                } = a, j = h.filter(a => a.plugin.installed).sort((a, b) => {
                    let c = (0, k.b)(a.plugin);
                    if (c !== (0, k.b)(b.plugin)) return c ? 1 : -1;
                    if (c) return 0;
                    let d = (0, f.Bi)(a.marketplaceName) || a.marketplaceName === f.ed;
                    return d !== ((0, f.Bi)(b.marketplaceName) || b.marketplaceName === f.ed) ? d ? 1 : -1 : a.plugin.installed !== b.plugin.installed ? a.plugin.installed ? 1 : -1 : 0
                }), l = null == i ? [] : function(a, b) {
                    let c = new Map(a.map(a => [a.plugin.id, a])),
                        d = [];
                    for (let a of b) {
                        let b = c.get(a);
                        null != b && d.push(b)
                    }
                    return d
                }(g, e()([...n, ...i])), m = new Set(d.map(o)), p = new Map;
                for (let a of c) {
                    let b = o(a.id);
                    if ("featured" === b) continue;
                    let c = p.get(b) ?? new Set;
                    for (let b of a.pluginIds) c.add(b);
                    p.set(b, c)
                }
                let q = new Map;
                for (let a of g) {
                    let b = a.plugin.interface?.category ?? "Other",
                        c = m.has(o(b)) ? "Other" : b,
                        d = q.get(c);
                    if (null == d) {
                        q.set(c, [a]);
                        continue
                    }
                    d.push(a)
                }
                let t = new Map(b.map((a, b) => [o(a), b])),
                    u = Array.from(q.entries()).sort((a, c) => {
                        let [d] = a, [e] = c, f = t.get(o(d)) ?? b.length, g = t.get(o(e)) ?? b.length;
                        return f === g ? d.localeCompare(e) : f - g
                    }).map(a => {
                        let [b, c] = a, d = p.get(o(b));
                        return {
                            section: {
                                id: `plugins-${o(b).replaceAll(" ","-")}`,
                                title: b
                            },
                            plugins: r(c, d),
                            visibleItemLimit: null == d ? void 0 : c.filter(a => s(a, d)).length || void 0
                        }
                    });
                return [...j.length > 0 ? [{
                    section: {
                        id: "plugins-connected",
                        title: null
                    },
                    plugins: j
                }] : [], ...l.length > 0 ? [{
                    section: {
                        id: "plugins-featured",
                        title: "Featured"
                    },
                    plugins: l
                }] : [], ...u]
            },
            h: function(a) {
                return a.filter(a => {
                    let b = (0, f.Yg)(a.plugin.id);
                    return a.plugin.name !== f.qc || null == b || !(0, f.Bi)(b)
                })
            },
            i: function(a, b, c) {
                if (0 === b.length && !c) return a;
                let d = new Set(b);
                return a.filter(a => (!c || !(0, i.q)(a.plugin.id)) && !d.has(a.plugin.id))
            }
        })
    }),
    CBsD: (function(a, b, c) {
        var d = c("NFGs"),
            e = c.n(d),
            f = c("zKw6"),
            g = c.n(f);
        c("DBCl");
        var h = c("ZIaK"),
            i = c("fGzQ"),
            j = c("WFY2"),
            k = c("rvFo");
        let l = {
            ".svg": "image/svg+xml",
            ".png": "image/png",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".webp": "image/webp",
            ".gif": "image/gif",
            ".avif": "image/avif"
        };
        async function m(a, b, c, d, e, f) {
            let g = (0, h.c)(a);
            if (null == g) return null;
            try {
                let a = {
                        path: g,
                        hostId: b,
                        conversationId: e,
                        environmentId: f
                    },
                    h = await c.fetchQuery({
                        queryFn: b => {
                            let {
                                signal: c
                            } = b;
                            return (0, i.d)(a, null == d ? c : AbortSignal.any([c, d]))
                        },
                        queryKey: (0, i.f)(a),
                        retry: !1,
                        gcTime: k.b.FIVE_MINUTES,
                        staleTime: null != e && null == f ? 0 : k.b.INFINITE
                    });
                if (!h.contentsBase64) return null;
                return {
                    base64: h.contentsBase64,
                    mimeType: o(g)
                }
            } catch (a) {
                return j.a.warning("Failed to inline local image", {
                    safe: {},
                    sensitive: {
                        error: a,
                        resolvedImagePath: g
                    }
                }), null
            }
        }

        function n(a, b) {
            return `data:${o(a)};base64,${b}`
        }

        function o(a) {
            return l[g().extname(a).toLowerCase()] ?? "application/octet-stream"
        }
        c.d(b, {
            a: () => n,
            b: () => h.c
        }, {
            c: function(a, b, c, d, f) {
                if (null != d && null == f) return null;
                let g = (0, h.c)(a);
                for (let h of [a, g]) {
                    if (null == h) continue;
                    let a = {
                            path: h,
                            hostId: b,
                            conversationId: d,
                            environmentId: f
                        },
                        g = [(0, i.b)(a), (0, i.f)(a)].map(a => c.getQueryState(a)),
                        j = e()(g.filter(a => !a?.isInvalidated && a?.data?.contentsBase64), a => a?.dataUpdatedAt)?.data;
                    if (j?.contentsBase64) return `data:${j.mimeType??o(h)};base64,${j.contentsBase64}`
                }
                return null
            },
            d: m,
            e: async function(a, b, c, d, e, f) {
                let g = await m(a, b, c, d, e, f);
                return null == g ? null : `data:${g.mimeType};base64,${g.base64}`
            },
            f: async function(a) {
                let {
                    contentsBase64: b
                } = await (0, i.d)(a);
                return b ? n(a.path, b) : null
            }
        })
    }),
    tQpF: (function(a, b, c) {
        var d = c("DBCl"),
            e = c("XNvh"),
            f = c("D4ZO"),
            g = c("CjTC"),
            h = c("uUv4"),
            i = c("ABl9");

        function j(a) {
            return "workspace-directory" === a || "workspace-shared-with-me" === a
        }

        function k(a) {
            return null != a.ownership ? "WORKSPACE" === a.ownership.scope : j((0, d.Yg)(a.plugin.id))
        }

        function l(a, b) {
            let {
                id: c,
                name: e
            } = a;
            if (null != c && !c.includes("@")) return c;
            let f = null == c ? null : (0, d.Yg)(c);
            if (f === d.dd || b && (null == f || f === d.cd)) return h.a[null == c ? (e ?? "").trim().toLowerCase() : c.slice(0, -(f?.length ?? 0) - 1)]
        }
        c.d(b, {}, {
            a: function(a) {
                return null != a && (j((0, d.Yg)(a)) || (0, d.hi)(a))
            },
            b: function(a, b, c) {
                let e = (0, d.Yg)(b),
                    h = a.filter(a => (null == c || (0, g.a)(a.plugin) === c) && ((0, f.f)(a.plugin) === b || a.plugin.id === b || a.referenceIds?.includes(b) || null != c && (e === d.dd || j(e) && k(a)) && b === `${a.plugin.name}@${e}`));
                return 1 === h.length ? h[0] : void 0
            },
            c: function(a) {
                return null != a && (0, d.Yg)(a) === d.dd ? a : l({
                    id: a
                }, !0)
            },
            d: function(a) {
                let b = (0, e.c)(a.plugin.id);
                if (a.plugin.id === i.a && a.ownership?.scope === "GLOBAL") return b;
                let c = (0, g.a)(a.plugin);
                return null != c && (0, d.hi)(c) && (null != a.ownership || k(a)) ? `${b}?${new URLSearchParams({remotePluginId:c})}` : b
            },
            e: function(a) {
                let b = a.indexOf("?");
                if (-1 === b) return null;
                let c = new URLSearchParams(a.slice(b + 1)).get("remotePluginId");
                return null != c && (0, d.hi)(c) ? c : null
            },
            f: l
        })
    }),
    vj6P: (function(a, b, c) {
        var d = c("pkoC"),
            e = c.n(d),
            f = c("i5ac"),
            g = c.n(f),
            h = c("Q840"),
            i = c("DBCl"),
            j = c("D4ZO"),
            k = c("OiCI"),
            l = c("C0re"),
            m = c("EEop"),
            n = c("cLdu"),
            o = c("mq2k"),
            p = c("ueue"),
            q = c("OWtl"),
            r = c("ndjw"),
            s = c("rvFo"),
            t = c("fEwQ"),
            u = c("tQpF");
        let v = (0, h.j)(q.a, a => (0, t.a)(4)),
            w = (0, h.q)(q.a, (a, b) => {
                let {
                    hostId: c,
                    references: d,
                    roots: f
                } = a, {
                    get: h,
                    scope: j
                } = b, q = (0, n.i)(c), t = q ? h(k.a) : null, A = q || h(o.b, c);
                return {
                    enabled: d.length > 0 && null != A && (!q || null != t),
                    queryKey: [...(0, l.d)(c, "references"), t, f, d, A],
                    queryFn: async a => {
                        let {
                            signal: b
                        } = a, h = q ? void 0 : f ?? (await j.query.getOrFetch(r.j, {
                            hostId: c
                        })).roots, l = await (0, n.g)(j, {
                            accountId: q ? t : null,
                            hostId: c,
                            roots: h
                        }, "plugin_reference"), o = g()(d.filter(a => {
                            let {
                                id: b,
                                name: c
                            } = a;
                            return null != b || !!c?.trim()
                        }), a => {
                            let {
                                id: b,
                                name: c
                            } = a;
                            return JSON.stringify([b, c])
                        }), s = [], B = o.filter(a => {
                            let b = z(l, a, !0 === A);
                            return null == b || (s.push(y(b, a.id)), !1)
                        }), C = !q && B.some(a => null == (0, u.f)(a, !0 === A) && (null == a.id || a.id.includes("@"))) ? (await j.query.getOrFetch(p.s, {
                            hostId: c,
                            roots: h ?? [],
                            marketplaceKinds: ["local"],
                            isOpenAICuratedRemoteMarketplaceEnabled: !1
                        }).catch(() => void 0))?.plugins : void 0, D = B.filter(a => {
                            let b = z(C ?? [], a, !0 === A);
                            return null == b || (s.push(y(b, a.id)), !1)
                        });
                        if (q) {
                            let a = D.flatMap(a => {
                                    let b = (0, u.f)(a, !0) ?? (0, u.c)(a.id);
                                    return null == b ? [] : [{
                                        id: b,
                                        referenceId: a.id
                                    }]
                                }),
                                c = 0 === a.length ? void 0 : await j.query.getOrFetch(m.k, a.map(a => {
                                    let {
                                        id: b
                                    } = a;
                                    return b
                                })).catch(() => void 0);
                            for (let {
                                    id: b,
                                    referenceId: d
                                }
                                of a) {
                                let a = c?.get(b);
                                null != a && s.push(y(a, d))
                            }
                            return b.throwIfAborted(), x(void 0, s)
                        }
                        let [E, F] = e()(D, a => {
                            let {
                                id: b
                            } = a;
                            return null != t && (0, u.a)(b)
                        });
                        if (null != t && E.length > 0) {
                            if (b.throwIfAborted(), j.get(k.d) !== t) throw Error("Plugin account changed while loading references");
                            let a = await j.query.getOrFetch(w, {
                                hostId: i.$b,
                                references: E,
                                roots: void 0
                            }).catch(() => []);
                            s.push(...a)
                        }
                        let G = j.get(v, c),
                            H = await Promise.all(F.map(async a => {
                                let d = (0, u.f)(a, !0 === A),
                                    e = d ?? a.id;
                                if (null == e || null == d && e.includes("@")) return null;
                                let f = await G(() => j.queryClient.fetchQuery({
                                    ...j.query.getOptions(m.l, (0, m.g)({
                                        hostId: c,
                                        pluginId: e,
                                        remotePluginId: d,
                                        roots: h
                                    })),
                                    retry: !1
                                }), b).catch(() => null);
                                return null == f ? null : y((0, p.c)(f), a.id)
                            }));
                        return s.push(...H.filter(a => null != a)), b.throwIfAborted(), x(void 0, s)
                    },
                    retry: !1,
                    staleTime: s.b.ONE_MINUTE
                }
            });

        function x(a, b) {
            let c = new Map((a ?? []).map(a => [(0, j.f)(a.plugin), a]));
            for (let d of b ?? []) {
                let b = (0, j.f)(d.plugin),
                    e = c.get(b);
                c.set(b, {
                    ...e ?? d,
                    plugin: e?.plugin ?? (null != a ? {
                        ...d.plugin,
                        installed: !1,
                        enabled: !1
                    } : d.plugin),
                    referenceIds: Array.from(new Set([...e?.referenceIds ?? [], ...d.referenceIds ?? []]))
                })
            }
            return Array.from(c.values())
        }

        function y(a, b) {
            return null == b || a.referenceIds?.includes(b) ? a : {
                ...a,
                referenceIds: [...a.referenceIds ?? [], b]
            }
        }

        function z(a, b, c) {
            if (null != b.id) {
                let d = (0, u.f)(b, c),
                    e = b.id.replace(/@dev-mode$/, "@created-by-me-remote");
                return (0, u.b)(a, e) ?? (null == d || d === e ? void 0 : (0, u.b)(a, d))
            }
            let d = b.name?.trim().toLowerCase(),
                e = a.filter(a => a.plugin.name.toLowerCase() === d || a.displayName?.toLowerCase() === d);
            return 1 === e.length ? e[0] : void 0
        }
        c.d(b, {}, {
            a: x,
            b: w
        })
    }),
    PmQd: (function(a, b, c) {
        var d = c("vLsY");
        c("sLlu");
        var e = c("C0re");
        c.d(b, {}, {
            a: async function(a, b, c) {
                let d = (0, e.e)(a.queryClient, b);
                if ("reconnect" !== c) return d;
                await Promise.all([d, (0, e.g)(a.queryClient, (0, e.c)(b))])
            },
            b: async function(a, b) {
                let c = "account" === b ? e.a : (0, e.b)(b.hostId);
                (0, d.a)(c), await Promise.all([(0, e.g)(a, c), void 0])
            }
        })
    }),
    jShI: (function(a, b, c) {
        var d = c("GaA7"),
            e = c("kfGJ"),
            f = c("c1Td"),
            g = c("bPa2");
        class h extends Error {
            constructor(a) {
                super("Plugin skill catalog reload failed", {
                    cause: a
                }), this.name = "PluginSkillCatalogReloadError"
            }
        }
        c.d(b, {}, {
            a: h,
            b: async function(a) {
                let {
                    scope: b,
                    hostId: c,
                    queryClient: i
                } = a, j = new Map(i.getQueriesData({
                    queryKey: [...g.a, c]
                }).flatMap(a => {
                    let [b] = a, c = b[2];
                    return Array.isArray(c) && c.every(a => "string" == typeof a) ? [c] : []
                }).map(a => [a.join("\0"), a])), k = j.size > 0 ? Array.from(j.values()) : [
                    []
                ];
                try {
                    for (let {
                            cwds: a,
                            response: h
                        }
                        of(c === e.a && await d.b.browserPluginConfig?.syncAfterPluginChange(), await Promise.all(k.map(async a => ({
                            cwds: a,
                            response: await (0, f.a)(b, c, a, {
                                forceReload: !0
                            })
                        }))))) i.setQueryData([...g.a, c, a], h)
                } catch (a) {
                    throw new h(a)
                }
            }
        })
    }),
    cjoy: (function(a, b, c) {
        var d = c("WzdM"),
            e = c("HFSu");
        c.d(b, {}, {
            a: function(a) {
                let {
                    pluginId: b,
                    skillName: c,
                    enabled: f
                } = a;
                return e.CodexRequest.safePost(f ? "/ps/plugins/{plugin_id}/skills/{skill_name}/enable" : "/ps/plugins/{plugin_id}/skills/{skill_name}/disable", {
                    surface: "other",
                    parameters: {
                        path: {
                            plugin_id: b,
                            skill_name: c
                        }
                    },
                    additionalHeaders: (0, d.c)()
                })
            }
        })
    }),
    ABl9: (function(a, b, c) {
        var d = c("tRL3");
        let e = `sites@${d.n}`,
            f = `plugin://${e}`,
            g = /(^|[^\p{L}\p{N}_$\\])\$sites(?![\p{L}\p{N}_$-])/gu;
        c.d(b, {}, {
            a: e,
            b: f,
            c: g,
            d: function(a) {
                return a.replace(g, "$1@Sites")
            }
        })
    }),
    ygu7: (function(a, b, c) {
        var d = c("Q840"),
            e = c("hOO0"),
            f = c("OiCI"),
            g = c("WzdM"),
            h = c("OWtl"),
            i = c("rvFo"),
            j = c("HFSu"),
            k = c("bJEQ");
        let l = (0, d.q)(h.a, (a, b) => {
            let {
                appId: c,
                productContext: d
            } = a, {
                get: e
            } = b;
            return {
                ...m(c, e(f.d), d),
                select: a => a.plugin_id
            }
        });

        function m(a, b, c, d) {
            return {
                queryKey: ["plugins", "canonical-app", b, d?.exactAppId ? a : (0, e.a)(a), ...null == c ? [] : [c], ...d?.expectedIdentity == null ? [] : [d.expectedIdentity.userId]],
                enabled: null != b,
                queryFn: b => {
                    let {
                        signal: e
                    } = b;
                    return j.CodexRequest.safeGet("/ps/plugins/canonical-app/{app_id}", {
                        surface: d?.surface ?? "other",
                        expectedIdentity: d?.expectedIdentity,
                        parameters: {
                            path: {
                                app_id: encodeURIComponent(a)
                            }
                        },
                        additionalHeaders: {
                            ...(0, g.c)(c),
                            ...d?.expectedIdentity == null ? {} : {
                                "ChatGPT-Account-ID": d.expectedIdentity.accountId
                            }
                        },
                        signal: null == d ? e : (0, k.a)(e)
                    })
                },
                retry: !1,
                staleTime: i.b.FIVE_MINUTES
            }
        }
        c.d(b, {}, {
            a: l,
            b: async function(a, b) {
                return (await a.query.fetch(l, {
                    appId: b
                })).plugin_id
            },
            c: async function(a, b, c) {
                return (await a.fetchQuery(m(b, c))).plugin_id ?? null
            },
            d: m
        })
    }),
    Y6Vd: (function(a, b, c) {
        c.d(b, {
            a: () => n,
            b: () => l,
            c: () => m,
            d: () => p,
            e: () => o
        });
        var d = c("Q840");
        c("DBCl");
        var e = c("WzdM"),
            f = c("OWtl"),
            g = c("rvFo"),
            h = c("HFSu"),
            i = c("ygu7"),
            j = c("bJEQ"),
            k = c("hOO0");
        let l = (0, d.q)(f.a, a => {
            let {
                identity: b,
                appId: c,
                surface: d
            } = a;
            return (0, i.d)(c, b.accountId, "codex", {
                expectedIdentity: b,
                surface: d
            })
        });

        function m(a, b, c) {
            return h.CodexRequest.safePost("/ps/plugins/batch", {
                ...c,
                requestBody: {
                    plugin_ids: a
                },
                additionalHeaders: {
                    ...(0, e.c)(b),
                    ...null == c.expectedIdentity ? {} : {
                        "ChatGPT-Account-ID": c.expectedIdentity.accountId
                    }
                }
            })
        }
        let n = (0, d.q)(f.a, a => {
                let {
                    identity: b,
                    ids: c,
                    productContext: d = "codex",
                    surface: e = "workspace_agents"
                } = a, f = [...new Set(c)].sort();
                return {
                    queryKey: ["plugins", "connection-metadata", b.accountId, b.userId, d, f],
                    staleTime: g.b.ONE_MINUTE,
                    retry: !1,
                    queryFn: async a => {
                        let {
                            signal: c
                        } = a, {
                            results: g
                        } = await m(f, d, {
                            surface: e,
                            expectedIdentity: b,
                            signal: (0, j.a)(c)
                        });
                        return new Map(g.map(a => {
                            let {
                                requested_plugin_id: b,
                                plugin: c
                            } = a;
                            return [b, c]
                        }))
                    }
                }
            }),
            o = (0, d.q)(f.a, a => ({
                queryKey: ["workspace_connector_stats", a],
                queryFn: b => {
                    let {
                        signal: c
                    } = b;
                    return h.CodexRequest.safeGet("/aip/workspace/connector-stats", {
                        additionalHeaders: {
                            "ChatGPT-Account-Id": a.accountId
                        },
                        expectedIdentity: a,
                        signal: c
                    })
                },
                retry: !1,
                staleTime: g.b.FIVE_MINUTES,
                retryOnMount: !0,
                refetchOnMount: !0
            }));
        async function p(a, b) {
            let {
                identity: c,
                pluginIds: d,
                metadata: e
            } = b, f = new Set(e.plugin.dependencies?.filter(a => {
                let {
                    is_enabled: b,
                    availability_status: c
                } = a;
                return !1 !== b && null == c
            }).map(a => {
                let {
                    plugin_id: b
                } = a;
                return b
            })), g = [...new Set(d)].filter(a => f.has(a)).sort();
            if (0 === g.length) return {};
            let h = e.usedCodexFallback ? "codex" : "chatgpt",
                [i, j] = await Promise.all([a.query.fetch(o, c), Promise.allSettled(Array.from({
                    length: Math.ceil(g.length / 50)
                }, (b, d) => a.query.fetch(n, {
                    identity: c,
                    ids: g.slice(50 * d, (d + 1) * 50),
                    productContext: h,
                    surface: "connector_setup"
                })))]),
                l = new Map(j.flatMap(a => "fulfilled" === a.status ? [...a.value].map(a => {
                    let [b, c] = a;
                    return [b, [...new Set([c.connector_id, c.canonical_app_id, ...c.release.app_ids ?? [], ...(c.release.app_templates ?? []).flatMap(a => [a.canonical_connector_id, ...a.materialized_app_ids ?? [], ...(a.instances ?? []).map(a => a.id)])].flatMap(a => null == a || a.startsWith("templated_apps_") ? [] : [(0, k.a)(a)]))]]
                }) : []));
            return function(a, b, c) {
                if (a?.workspace_id !== b) return {};
                let d = new Map;
                for (let {
                        connector_id: b,
                        unique_user_cnt: c
                    }
                    of a.connector_stats ?? []) {
                    if ("number" != typeof c || !Number.isSafeInteger(c) || c < 0) continue;
                    let a = (0, k.a)(b);
                    d.set(a, Math.max(d.get(a) ?? 0, c))
                }
                let e = [];
                for (let [a, b] of c) {
                    let c;
                    for (let a of b) {
                        let b = d.get(a);
                        void 0 !== b && (void 0 === c || b > c) && (c = b)
                    }
                    void 0 !== c && e.push([a, c])
                }
                return Object.fromEntries(e)
            }(i, c.accountId, l)
        }
    }),
    NnK8: (function(a, b, c) {
        var d = c("Q840"),
            e = c("hOO0"),
            f = c("IVVU"),
            g = c("OWtl");
        let h = (0, d.c)(g.a, a => {
                let {
                    get: b
                } = a;
                return new Set(b(f.g).hiddenPluginIds)
            }),
            i = (0, d.c)(g.a, a => {
                let {
                    get: b
                } = a;
                return new Set(Array.from(b(h), e.a))
            });
        c.d(b, {}, {
            a: i,
            b: h
        })
    }),
    zDEm: (function(a, b, c) {
        var d = c("Q840"),
            e = c("OiCI"),
            f = c("CWeU"),
            g = c("K0RC"),
            h = c("tSEg"),
            i = c("ndjw"),
            j = c("cLdu");
        let k = (0, d.d)(h.a, (a, b) => {
            let {
                get: c,
                scope: d
            } = b, h = (0, j.i)(a), k = c(j.h, {
                hostId: a,
                accountId: h ? c(e.b) : null,
                productContext: "chatgpt-thread" === d.value.routeKind ? "chatgpt" : "codex",
                roots: h ? void 0 : c(i.j, {
                    hostId: a
                }).data?.roots
            }).data, l = c(g.c)[(0, g.b)(c(f.a), a)] ?? {}, m = new Map;
            for (let {
                    plugin: a
                }
                of k ?? []) {
                if (!a.installed || !a.enabled || "INSTALLED_BY_DEFAULT" === a.installPolicy) continue;
                let b = Math.max((a.installedAt ?? 0) * 1e3, l[a.id] ?? 0, null == a.remotePluginId ? 0 : l[a.remotePluginId] ?? 0);
                0 !== b && (m.set(a.id, b), null != a.remotePluginId && m.set(a.remotePluginId, b))
            }
            return m
        });
        c.d(b, {}, {
            a: k
        })
    }),
    EEop: (function(a, b, c) {
        var d = c("QosV"),
            e = c("T0Rc"),
            f = c("S2r0"),
            g = c("NxBK"),
            h = c("i5ac"),
            i = c.n(h),
            j = c("Q840"),
            k = c("DBCl"),
            l = c("Dgwo"),
            m = c("hOO0"),
            n = c("FpcZ"),
            o = c("pDRe"),
            p = c("OiCI"),
            q = c("Cslg"),
            r = c("IIEq"),
            s = c("rO8L"),
            t = c("IVVU"),
            u = c("C0re"),
            v = c("WzdM"),
            w = c("CBsD"),
            x = c("tQpF"),
            y = c("cLdu"),
            z = c("ueue"),
            A = c("OWtl"),
            B = c("kfGJ"),
            C = c("caug"),
            D = c("bnxy"),
            E = c("rvFo"),
            F = c("HFSu"),
            G = c("eShZ"),
            H = c("Y6Vd");
        let I = (0, j.q)(A.a, (a, b) => {
            let {
                get: c,
                queryClient: d,
                scope: e
            } = b, g = (0, y.i)(a.hostId), h = g ? c(p.b) : null;
            return {
                ... function(a) {
                    let {
                        scope: b,
                        accountId: c,
                        hostId: d,
                        marketplacePath: e,
                        pluginName: g,
                        queryClient: h,
                        remoteMarketplaceName: i,
                        requestOptions: j,
                        productContext: k,
                        prefetchAppsForUserId: m,
                        localMarketplaceName: r,
                        roots: s
                    } = a, t = (0, y.i)(d), u = b.get(p.d) ?? void 0, v = t && void 0 === c ? u : c;
                    return (0, f.a)({
                        queryKey: N({
                            accountId: v,
                            hostId: d,
                            marketplacePath: e,
                            pluginName: g,
                            remoteMarketplaceName: i,
                            localMarketplaceName: r,
                            roots: s,
                            productContext: k
                        }),
                        queryFn: async a => {
                            let {
                                signal: c
                            } = a;
                            if (null == g) throw Error("plugin detail query requires pluginName");
                            let f = b.get(p.d) ?? void 0;
                            if (t && (null == v || f !== v)) throw Error("Plugin account changed before loading plugin details");
                            let u = e;
                            if (!t && null == e && null == i && null != r) {
                                let {
                                    marketplaces: a
                                } = await b.query.getOrFetch(z.s, {
                                    hostId: d,
                                    isOpenAICuratedRemoteMarketplaceEnabled: !1,
                                    marketplaceKinds: ["local"],
                                    roots: s ?? []
                                });
                                if (null == (u = a.find(a => a.name === r)?.path ?? null)) throw Error("Local plugin marketplace is unavailable");
                                c.throwIfAborted()
                            }
                            let A = t ? await async function(a, b, c, d, e, f) {
                                if (null == (0, x.c)(b)) throw new G.FetchError("Plugin not found", 404, void 0, null);
                                let [{
                                    plugin: g,
                                    usedCodexFallback: h
                                }, i] = await Promise.all([a.queryClient.fetchQuery(R(d, b, void 0, e)).then(b => {
                                    let e = a.get(q.n);
                                    if (null != f && !c.aborted && !e.accountLoading && e.userId === f && null != d && a.get(p.a) === d && a.get(p.d) === d) {
                                        let c = W(b.plugin).map(a => {
                                            let {
                                                id: b
                                            } = a;
                                            return b
                                        });
                                        for (let b of (0, n.getHostedAppsContentQueriesOptions)({
                                                accountId: d,
                                                appIds: c,
                                                enabled: !0
                                            }).queries) a.queryClient.prefetchQuery(b);
                                        c.length > 0 && a.queryClient.prefetchQuery((0, o.b)({
                                            accountId: d,
                                            userId: f,
                                            appIds: c,
                                            enabled: !0
                                        }))
                                    }
                                    return b
                                }), (0, y.d)(a, {
                                    productContext: ("catalog" === e ? void 0 : e) ?? "chatgpt",
                                    signal: c,
                                    surface: "other"
                                })]);
                                c.throwIfAborted();
                                let j = (h ? await (0, y.d)(a, {
                                    productContext: "codex",
                                    signal: c,
                                    surface: "other"
                                }) : i).find(a => a.plugin.remotePluginId === g.id);
                                return T(g, j)
                            }(b, g, c, v, k, (0, o.c)(d) ? m : null): (await (0, l.b)(b, d).sendRequest("plugin/read", {
                                ...(0, z.j)({
                                    marketplacePath: u,
                                    remoteMarketplaceName: i
                                }),
                                pluginName: g
                            }, j)).plugin, B = b.get(p.d) ?? void 0;
                            if (t && B !== v) throw Error("Plugin account changed while loading plugin details");
                            let C = A.summary.interface,
                                D = (0, w.e)(C?.logo, d, h),
                                E = (0, w.e)(C?.logoDark, d, h),
                                F = (0, w.e)(C?.composerIcon, d, h),
                                H = Promise.all(A.skills.map(async a => {
                                    if (null == a.interface) return null;
                                    let [b, c] = await Promise.all([(0, w.e)(a.interface.iconSmall, d, h), (0, w.e)(a.interface.iconLarge, d, h)]);
                                    return {
                                        iconSmallDataUrl: b,
                                        iconLargeDataUrl: c
                                    }
                                })),
                                [I, J, K, L] = await Promise.all([F, D, E, H]);
                            return function(a, b) {
                                let {
                                    logoDataUrl: c,
                                    logoDarkDataUrl: d,
                                    composerIconDataUrl: e,
                                    skillImageDataUrls: f
                                } = b, g = a.summary.interface, h = a.skills.map((a, b) => {
                                    let c = f[b] ?? null;
                                    return null == a.interface || null == c ? a : {
                                        ...a,
                                        interface: {
                                            ...a.interface, ...null != c.iconSmallDataUrl ? {
                                                iconSmall: c.iconSmallDataUrl
                                            } : {}, ...null != c.iconLargeDataUrl ? {
                                                iconLarge: c.iconLargeDataUrl
                                            } : {}
                                        }
                                    }
                                });
                                return {
                                    ...a,
                                    summary: null != g && (null != e || null != c || null != d) ? {
                                        ...a.summary,
                                        interface: {
                                            ...g, ...null != e ? {
                                                composerIcon: e
                                            } : {}, ...null != c ? {
                                                logo: c
                                            } : {}, ...null != d ? {
                                                logoDark: d
                                            } : {}
                                        }
                                    } : a.summary,
                                    skills: h
                                }
                            }(A, {
                                composerIconDataUrl: I,
                                logoDataUrl: J,
                                logoDarkDataUrl: K,
                                skillImageDataUrls: L
                            })
                        },
                        retryOnMount: !t,
                        staleTime: E.b.FIVE_MINUTES
                    })
                }({
                    ...a,
                    accountId: h,
                    queryClient: d,
                    scope: e
                }),
                enabled: null != a.pluginName && (g || null != a.localMarketplaceName || null != a.marketplacePath || null != a.remoteMarketplaceName) && (!g || null != h),
                refetchOnMount: !0
            }
        });

        function J(a) {
            return a.template_id
        }

        function K(a) {
            return !0 === a.can_setup
        }

        function L(a) {
            let [b, c] = a;
            return [b, c.id]
        }
        async function M() {}

        function N(a) {
            let {
                accountId: b,
                hostId: c,
                marketplacePath: d,
                pluginName: e,
                remoteMarketplaceName: f,
                localMarketplaceName: g,
                roots: h,
                productContext: i
            } = a, j = (0, y.i)(c);
            return [...O(c, b), d ?? "", f ?? "", e ?? "", ...null == i ? [] : [i], ...j || null != d || null != f || null == g ? [] : ["local-marketplace", g, h ?? []]]
        }

        function O(a, b) {
            let c = (0, u.d)(a, "detail");
            return (0, y.i)(a) ? [...c, "hosted", b ?? null] : c
        }
        let P = (0, j.j)(A.a, (a, b) => {
                let {
                    scope: c
                } = b;
                return (0, C.a)({
                    key: a => a,
                    watchIdentity: () => {
                        let b = new AbortController,
                            d = c.watch(c => {
                                let {
                                    get: d
                                } = c;
                                (null == a || d(p.d) !== a) && b.abort(Error("Plugin account changed while loading metadata"))
                            });
                        return {
                            signal: b.signal,
                            stop: d
                        }
                    },
                    fetcher: async (a, b) => {
                        let {
                            results: c
                        } = await (0, H.c)(a, "chatgpt", {
                            signal: b
                        });
                        return new Map(c.map(a => {
                            let {
                                requested_plugin_id: b,
                                plugin: c
                            } = a;
                            return [b, c]
                        }))
                    }
                })
            }),
            Q = (0, j.q)(A.a, (a, b) => {
                let {
                    get: c,
                    queryClient: d,
                    scope: e
                } = b, f = c(p.d), h = [...new Set(a)].sort();
                return {
                    queryKey: ["plugins", "hosted-metadata-batch", f, h],
                    enabled: null != f && h.length > 0,
                    staleTime: E.b.FIVE_MINUTES,
                    retry: !1,
                    queryFn: async a => {
                        let {
                            signal: b
                        } = a, c = new Map, i = [];
                        await Promise.all(h.map(async a => {
                            let h = R(f, a),
                                j = d.getQueryState(h.queryKey),
                                k = j?.data;
                            if (null == k && j?.fetchStatus === "fetching") try {
                                k = await d.fetchQuery(h)
                            } catch (a) {
                                if (b.throwIfAborted(), a instanceof g.a || e.get(p.d) !== f) throw a;
                                if (a instanceof G.FetchError && 404 === a.status) return
                            }
                            null == k ? i.push(a) : c.set(a, (0, y.f)(k.plugin))
                        }));
                        let j = e.get(P, f);
                        if (await Promise.all(i.map(async a => {
                                let g = await j.fetch({
                                    target: a,
                                    signal: b
                                });
                                if (b.throwIfAborted(), e.get(p.d) !== f) throw Error("Plugin account changed while loading metadata");
                                if (null == g) return;
                                let h = {
                                    plugin: {
                                        ...g,
                                        workspace_id: g.workspace_id ?? null,
                                        release: {
                                            ...g.release,
                                            interface: {
                                                ...g.release.interface, short_description: g.release.interface.short_description ?? null, category: g.release.interface.category ?? null, capabilities: g.release.interface.capabilities ?? [], logo_url: g.release.interface.logo_url ?? null
                                            },
                                            skills: g.release.skills?.map(a => ({
                                                ...a,
                                                interface: null == a.interface ? null : {
                                                    ...a.interface,
                                                    display_name: a.interface.display_name ?? null,
                                                    short_description: a.interface.short_description ?? null,
                                                    icon_small_url: a.interface.icon_small_url ?? null,
                                                    icon_large_url: a.interface.icon_large_url ?? null
                                                }
                                            }))
                                        },
                                        dependencies: g.dependencies?.map(a => ({
                                            ...a,
                                            navigation: null == a.navigation ? null : {
                                                kind: "plugin_detail",
                                                plugin_id: a.navigation.plugin_id
                                            }
                                        }))
                                    },
                                    usedCodexFallback: !1
                                };
                                c.set(a, (0, y.f)(h.plugin));
                                let {
                                    queryKey: i
                                } = R(f, a);
                                null == d.getQueryData(i) && d.setQueryData(i, h, {
                                    updatedAt: 0
                                })
                            })), b.throwIfAborted(), e.get(p.d) !== f) throw Error("Plugin account changed while loading metadata");
                        return c
                    }
                }
            });

        function R(a, b, c, d) {
            return (0, f.a)({
                queryKey: ["plugins", "hosted-metadata", a, b, ...null == d ? [] : [d]],
                queryFn: async e => {
                    let {
                        signal: f
                    } = e;
                    if (null == a || null == b) throw Error("Hosted plugin metadata requires an account and plugin");
                    return async function(a, b, c) {
                        let d = (0, x.c)(a);
                        if (null == d) throw new G.FetchError("Plugin not found", 404, void 0, null);
                        let e = !1;
                        return {
                            plugin: await F.CodexRequest.safeGet("/ps/plugins/{plugin_id}", {
                                surface: "other",
                                parameters: {
                                    path: {
                                        plugin_id: d
                                    },
                                    ...S(c) ? {
                                        query: {
                                            useTemplatePresentation: !0
                                        }
                                    } : {}
                                },
                                additionalHeaders: (0, v.c)(c ?? "chatgpt"),
                                expectedErrorStatuses: null == c ? [404] : void 0,
                                signal: b
                            }).catch(a => {
                                if (null != c || !(a instanceof G.FetchError && 404 === a.status)) throw a;
                                return b.throwIfAborted(), e = !0, F.CodexRequest.safeGet("/ps/plugins/{plugin_id}", {
                                    surface: "other",
                                    parameters: {
                                        path: {
                                            plugin_id: d
                                        }
                                    },
                                    additionalHeaders: (0, v.c)("codex"),
                                    signal: b
                                })
                            }),
                            usedCodexFallback: e
                        }
                    }(b, null == c ? f : AbortSignal.any([f, c]), d)
                },
                retry: !1,
                staleTime: 0
            })
        }

        function S(a) {
            return "catalog" === a
        }

        function T(a, b) {
            let c = b ?? (0, y.f)(a);
            return {
                ...V(a, c.plugin.enabled, U(b) ?? []),
                hooks: [],
                marketplaceName: c.marketplaceName,
                marketplacePath: null,
                scheduledTasks: null,
                shareUrl: a.share_url ?? null,
                summary: c.plugin
            }
        }

        function U(a) {
            let b = a?.servicePlugin;
            return null != b && "disabled_skill_names" in b ? b.disabled_skill_names : void 0
        }

        function V(a, b, c) {
            var d;
            let e = (a.release.skills ?? []).map(a => ({
                description: a.description,
                enabled: !c.includes(a.name),
                interface: null == a.interface ? null : {
                    displayName: a.interface.display_name ?? void 0,
                    shortDescription: a.interface.short_description ?? void 0,
                    brandColor: a.interface.brand_color ?? void 0,
                    defaultPrompt: a.interface.default_prompt ?? void 0,
                    iconLargeUrl: a.interface.icon_large_url,
                    iconSmallUrl: a.interface.icon_small_url
                },
                name: a.name,
                path: null,
                shortDescription: a.interface?.short_description ?? null
            }));
            return {
                ...{
                    apps: W(d = a),
                    appTemplates: (d.release.app_templates ?? []).map(a => ({
                        canonicalConnectorId: a.canonical_connector_id ?? null,
                        category: null,
                        description: a.description ?? null,
                        logoUrl: a.logo_url ?? null,
                        logoUrlDark: a.logo_url_dark ?? null,
                        materializedAppIds: i()([...a.materialized_app_ids ?? [], ...(a.instances ?? []).filter(a => "USER" === a.scope).map(a => a.id)], m.a),
                        name: a.name,
                        reason: a.reason ?? null,
                        templateId: a.template_id
                    }))
                },
                description: a.release.interface.long_description ?? a.release.description,
                mcpServers: (a.release.mcp_servers ?? []).map(a => a.key),
                onboardingSkill: b ? e.find(b => b.enabled && b.name === a.release.onboarding_skill_name) ?? null : null,
                skills: e
            }
        }

        function W(a) {
            let b = (a.release.app_templates ?? []).flatMap(a => (a.instances ?? []).filter(a => "USER" === a.scope));
            return i()([...a.release.app_ids ?? [], ...b.map(a => a.id)], m.a).map(c => {
                let d = (0, m.a)(c),
                    e = a.release.app_templates?.find(a => null != a.canonical_connector_id && (0, m.a)(a.canonical_connector_id) === d || a.materialized_app_ids?.some(a => (0, m.a)(a) === d) === !0 || a.instances?.some(a => (0, m.a)(a.id) === d) === !0);
                return {
                    category: null,
                    description: e?.description ?? null,
                    id: c,
                    installUrl: null,
                    name: b.find(a => (0, m.a)(a.id) === d)?.name ?? e?.name ?? c
                }
            })
        }
        c.d(b, {}, {
            a: function(a) {
                let {
                    hostId: b,
                    pluginId: c
                } = a;
                return {
                    hostId: b,
                    marketplacePath: null,
                    pluginName: (0, y.i)(b) ? (0, x.c)(c) ?? null : c,
                    remoteMarketplaceName: k.Zb
                }
            },
            b: function(a) {
                return (0, D.p)(a, `.tmp/bundled-marketplaces/${k.bd}/.agents/plugins/marketplace.json`)
            },
            c: function(a, b) {
                let {
                    accountId: c,
                    hostId: d
                } = b;
                return (0, y.i)(d) && null == c ? [] : a.getQueriesData({
                    queryKey: O(d, c)
                }).flatMap(a => {
                    let [, b] = a;
                    return null == b ? [] : [b]
                })
            },
            d: async function(a, b, c, d, e) {
                let f = R(b, c, void 0, d),
                    g = a.getQueryData(f.queryKey);
                return null != g ? g.plugin.canonical_app_id ?? null : void 0 !== e ? e : (await a.fetchQuery(f)).plugin.canonical_app_id ?? null
            },
            e: R,
            f: T,
            g: function(a) {
                let {
                    hostId: b,
                    pluginId: c,
                    remotePluginId: d,
                    roots: e
                } = a, f = (0, y.i)(b), g = f || null != d || null == c ? null : (0, k.Yg)(c), h = f ? c : d ?? c;
                return null != g && null != c && (h = c.slice(0, -g.length - 1)), {
                    hostId: b,
                    marketplacePath: null,
                    pluginName: h,
                    localMarketplaceName: g,
                    remoteMarketplaceName: f || null != g ? null : k.Zb,
                    roots: e
                }
            },
            h: N,
            i: O,
            j: function(a, b, c) {
                return (0, f.a)({
                    queryKey: ["plugins", "workspace-template-instance", b, c],
                    queryFn: async d => {
                        let e, {
                            signal: f
                        } = d;
                        if (null == b || null == c) throw Error("Workspace template instance requires an account and template");
                        let g = new Set((await (0, y.d)(a, {
                                productContext: "chatgpt",
                                signal: f,
                                surface: "plugin_details"
                            })).map(a => a.plugin.remotePluginId)),
                            h = null;
                        for (let a = 0; a < 20; a++) {
                            let a = await F.CodexRequest.safeGet("/ps/plugins/workspace/template-instances", {
                                surface: "plugin_details",
                                parameters: {
                                    query: {
                                        template_plugin_id: c,
                                        limit: 30,
                                        ...null == e ? {} : {
                                            page_token: e
                                        }
                                    }
                                },
                                additionalHeaders: (0, v.c)("chatgpt"),
                                signal: f
                            });
                            for (let b of a.instances)
                                if (null != b.plugin_id && (null == h && (h = b), g.has(b.plugin_id))) return b;
                            if (0 === g.size && null != h || null == (e = a.pagination.next_page_token ?? void 0)) break
                        }
                        return h
                    },
                    staleTime: E.b.FIVE_MINUTES
                })
            },
            k: Q,
            l: I,
            m: function(a) {
                let b, c, f, g, h, i, k, l, m, n, o, q, u, v, w, x = (0, d.c)(76),
                    {
                        hostId: C,
                        marketplacePath: D,
                        pluginName: F,
                        remoteMarketplaceName: G,
                        localMarketplaceName: H,
                        roots: N,
                        enabled: O,
                        productContext: P,
                        prefetchAppsForUserId: Q
                    } = a,
                    T = void 0 === O || O,
                    W = (0, j.y)(A.a),
                    X = C ?? B.a,
                    Y = (0, j.z)(t.a);
                x[0] !== X ? (b = (0, y.i)(X), x[0] = X, x[1] = b) : b = x[1];
                let Z = b,
                    $ = (0, j.z)(p.b),
                    _ = !Z;
                x[2] !== X || x[3] !== _ ? (c = {
                    enabled: _,
                    hostId: X
                }, x[2] = X, x[3] = _, x[4] = c) : c = x[4];
                let aa = (0, s.a)(c);
                x[5] !== F ? (f = null != F && (0, z.p)(F), x[5] = F, x[6] = f) : f = x[6];
                let ab = f,
                    ac = Z ? B.a : X;
                x[7] !== ab || x[8] !== ac ? (g = {
                    enabled: ab,
                    hostId: ac
                }, x[7] = ab, x[8] = ac, x[9] = g) : g = x[9];
                let ad = (0, r.a)(g),
                    ae = (Z || null != H || null != D || null != G) && null != F,
                    af = (Z ? null != $ : aa) && T && ae && ab && ad.isLoading,
                    ag = (Z ? null != $ : aa) && T && ae && (!ab || ad.available),
                    ah = G ?? null;
                x[10] !== X || x[11] !== H || x[12] !== D || x[13] !== F || x[14] !== Q || x[15] !== P || x[16] !== N || x[17] !== ah ? (h = {
                    hostId: X,
                    marketplacePath: D,
                    pluginName: F,
                    remoteMarketplaceName: ah,
                    localMarketplaceName: H,
                    roots: N,
                    productContext: P,
                    prefetchAppsForUserId: Q
                }, x[10] = X, x[11] = H, x[12] = D, x[13] = F, x[14] = Q, x[15] = P, x[16] = N, x[17] = ah, x[18] = h) : h = x[18], x[19] !== ag ? (i = {
                    enabled: ag
                }, x[19] = ag, x[20] = i) : i = x[20];
                let {
                    data: ai,
                    error: aj,
                    isLoading: ak,
                    refetch: al
                } = (0, j.x)(I, h, i), am = !!ai?.appTemplates.length, an = Z ? F : null;
                !Z && null != ai && (X === B.a || am || ai.apps.length > 0 && ai.mcpServers.length > 0) && (an = ai.summary.remotePluginId ?? ai.summary.shareContext?.remotePluginId ?? null);
                let ao = ag && null != $ && null != an && (Z && null != ai || !1);
                x[21] !== $ || x[22] !== an || x[23] !== P ? (k = R($, an, void 0, P), x[21] = $, x[22] = an, x[23] = P, x[24] = k) : k = x[24];
                let ap = !Z || null != ai,
                    aq = Z ? E.b.FIVE_MINUTES : 0;
                x[25] !== ao || x[26] !== k || x[27] !== ap || x[28] !== aq ? (l = {
                    ...k,
                    subscribed: ap,
                    enabled: ao,
                    staleTime: aq
                }, x[25] = ao, x[26] = k, x[27] = ap, x[28] = aq, x[29] = l) : l = x[29];
                let {
                    data: ar,
                    error: as,
                    isLoading: at,
                    refetch: au
                } = (0, e.a)(l);
                if (!ag || null != ai && Y.includes(ai.summary.id)) {
                    let a;
                    return x[30] !== af ? (a = {
                        loadsCatalogMetadata: !1,
                        errorMessage: null,
                        hostedPlugin: null,
                        localPluginEditMetadata: null,
                        ownership: null,
                        isLoading: af,
                        isTemplate: !1,
                        isV2Template: !1,
                        isTemplateInstance: !1,
                        plugin: null,
                        requiresLocalExecutor: !1,
                        refetch: M
                    }, x[30] = af, x[31] = a) : a = x[31], a
                }
                let av = Z || am ? ar?.plugin.release.app_templates : void 0,
                    aw = Z || am ? ar?.plugin.canonical_app_id : void 0,
                    ax = ao && "catalog" === P,
                    ay = aj?.message ?? (ao ? as?.message ?? null : null),
                    az = Z ? ar?.plugin ?? null : null,
                    aA = !Z && X === B.a && ao && null == as && ar?.plugin.id === an && ar.plugin.workspace_id === $ && !0 !== ar.plugin.is_template && null == ar.plugin.template_plugin_id ? ar.plugin : null,
                    aB = ar?.plugin.scope;
                x[32] !== ar?.plugin || x[33] !== Z ? (m = Z ? (0, y.e)(ar?.plugin) : null, x[32] = ar?.plugin, x[33] = Z, x[34] = m) : m = x[34];
                let aC = Z ? ar?.plugin.source_gizmo_id ?? null : null,
                    aD = ak || ao && at,
                    aE = ar?.plugin.is_template === !0,
                    aF = ar?.plugin.is_v2_template === !0,
                    aG = ar?.plugin.template_plugin_id != null,
                    aH = ar?.plugin;
                x[35] !== aH ? (n = function(a) {
                    let b = a?.personal_mcp_template_setup,
                        c = a?.release.id;
                    if (a?.scope !== "GLOBAL" || !0 !== a.is_v2_template || null == b || 0 === b.url_templates.length || null == c) return;
                    let d = b.auth;
                    return null != d && "oauth" !== d.type ? null : {
                        pluginId: a.id,
                        releaseId: c,
                        mcpKey: b.mcp_key,
                        urlTemplates: b.url_templates,
                        allowsCustomUrl: !0 === b.allows_custom_url,
                        oauth: null == d ? void 0 : {
                            supports_dcr: d.supports_dcr ?? !1,
                            client_credentials_required: d.client_credentials_required ?? !0,
                            declared: d.declared
                        },
                        isOpenaiVerified: b.is_openai_verified
                    }
                }(aH), x[35] = aH, x[36] = n) : n = x[36], x[37] !== $ || x[38] !== ai || x[39] !== ar || x[40] !== Z || x[41] !== P || x[42] !== W ? (o = null != ai && Z && S(P) && ar?.plugin.is_template === !0 ? function(a, b, c, d) {
                    let {
                        interface: e,
                        keywords: f,
                        version: g
                    } = (0, y.f)(d).plugin, h = U(a.query.getData(y.h, {
                        accountId: b,
                        cacheOnly: !0,
                        hostId: B.a,
                        roots: void 0
                    })?.find(a => {
                        let {
                            plugin: b
                        } = a;
                        return b.remotePluginId === d.id
                    })) ?? c.skills.filter(a => !a.enabled).map(a => a.name);
                    return {
                        ...c,
                        ...V(d, c.summary.enabled, h),
                        summary: {
                            ...c.summary,
                            interface: e,
                            keywords: f,
                            version: g
                        }
                    }
                }(W, $, ai, ar.plugin) : ai ?? null, x[37] = $, x[38] = ai, x[39] = ar, x[40] = Z, x[41] = P, x[42] = W, x[43] = o) : o = x[43], x[44] !== ai || x[45] !== ar || x[46] !== Z ? (q = ar?.plugin.release.app_manifest?.apps != null && (Z || ai?.summary.version != null && ai.summary.version === ar.plugin.release.version) ? new Map(Object.entries(ar.plugin.release.app_manifest.apps).map(L)) : void 0, x[44] = ai, x[45] = ar, x[46] = Z, x[47] = q) : q = x[47], x[48] !== av ? (u = null == av ? void 0 : new Set(av.filter(K).map(J)), x[48] = av, x[49] = u) : u = x[49];
                let aI = Z && !ar?.usedCodexFallback ? ar?.plugin : void 0,
                    aJ = Z && ar?.plugin.release.requires_local_executor === !0;
                return x[50] !== Z || x[51] !== ao || x[52] !== al || x[53] !== au ? (v = async () => {
                    await Promise.all([al(), ...!Z && ao ? [au()] : []])
                }, x[50] = Z, x[51] = ao, x[52] = al, x[53] = au, x[54] = v) : v = x[54], x[55] !== av || x[56] !== aw || x[57] !== ax || x[58] !== ay || x[59] !== az || x[60] !== aA || x[61] !== aB || x[62] !== m || x[63] !== aC || x[64] !== aD || x[65] !== aE || x[66] !== aF || x[67] !== aG || x[68] !== n || x[69] !== o || x[70] !== q || x[71] !== u || x[72] !== aI || x[73] !== aJ || x[74] !== v ? (w = {
                    canonicalAppId: aw,
                    loadsCatalogMetadata: ax,
                    errorMessage: ay,
                    hostedPlugin: az,
                    localPluginEditMetadata: aA,
                    pluginScope: aB,
                    ownership: m,
                    sourceGizmoId: aC,
                    isLoading: aD,
                    isTemplate: aE,
                    isV2Template: aF,
                    isTemplateInstance: aG,
                    personalMcpTemplateSetup: n,
                    plugin: o,
                    mcpAppIdsByServerKey: q,
                    setupEligibleAppTemplateIds: u,
                    serviceAppTemplates: av,
                    servicePlugin: aI,
                    requiresLocalExecutor: aJ,
                    refetch: v
                }, x[55] = av, x[56] = aw, x[57] = ax, x[58] = ay, x[59] = az, x[60] = aA, x[61] = aB, x[62] = m, x[63] = aC, x[64] = aD, x[65] = aE, x[66] = aF, x[67] = aG, x[68] = n, x[69] = o, x[70] = q, x[71] = u, x[72] = aI, x[73] = aJ, x[74] = v, x[75] = w) : w = x[75], w
            }
        })
    }),
    aFrt: (function(a, b, c) {
        var d = c("DBCl"),
            e = c("D4ZO"),
            f = c("SaEY"),
            g = c("k7G6"),
            h = c("SlNh"),
            i = c("ueue");

        function j(a) {
            return {
                requiresLocalExecutor: a.requiresLocalExecutor,
                category: a.plugin.interface?.category ?? null,
                creatorName: a.plugin.shareContext?.creatorName?.trim() || null,
                developerName: a.plugin.interface?.developerName,
                description: a.description,
                disabledReason: a.plugin.disabledReason ?? null,
                displayName: a.displayName ?? a.plugin.name,
                enabled: a.plugin.enabled,
                id: (0, e.f)(a.plugin),
                installed: a.plugin.installed,
                isTemplate: !0 === a.isTemplate,
                installationPolicy: a.plugin.installPolicy,
                installedPlugin: a,
                keywords: a.keywords ?? [],
                logoDarkPath: a.logoDarkPath,
                logoPath: a.logoPath,
                marketplaceDisplayName: a.marketplaceDisplayName,
                marketplaceName: a.marketplaceName,
                marketplacePath: a.marketplacePath,
                name: a.plugin.name,
                origin: l(a.marketplaceName),
                pluginId: a.plugin.id,
                pluginSourceType: a.plugin.source.type,
                remoteMarketplaceName: a.remoteMarketplaceName ?? null,
                remotePluginId: a.plugin.remotePluginId ?? a.plugin.shareContext?.remotePluginId ?? null,
                source: "app-server",
                status: (0, f.b)(a.plugin) ? "DISABLED_BY_ADMIN" : "ENABLED"
            }
        }

        function k(a, b) {
            let c, d = a.release.interface;
            return "WORKSPACE" === a.scope ? c = "workspace" : "USER" === a.scope && (c = "user-cloud"), {
                requiresLocalExecutor: !0 === a.release.requires_local_executor,
                category: d.category ?? b?.plugin.interface?.category ?? null,
                connectionAppId: a.canonical_app_id ?? void 0,
                connectorId: a.connector_id ?? void 0,
                creatorName: (("creator_name" in a ? a.creator_name : null) ?? b?.plugin.shareContext?.creatorName)?.trim() || null,
                description: d.short_description ?? a.release.description,
                developerName: d.developer_name,
                disabledReason: a.disabled_reason ?? b?.plugin.disabledReason ?? null,
                displayName: a.release.display_name,
                enabled: b?.plugin.enabled ?? !1,
                id: a.id,
                isTemplate: !0 === a.is_template,
                installed: b?.plugin.installed ?? !1,
                installationPolicy: a.installation_policy,
                installedPlugin: b,
                keywords: d.capabilities,
                logoDarkPath: d.logo_url_dark ?? b?.logoDarkPath ?? null,
                logoPath: d.logo_url ?? b?.logoPath ?? null,
                marketplaceDisplayName: b?.marketplaceDisplayName ?? null,
                marketplaceName: b?.marketplaceName ?? null,
                marketplacePath: b?.marketplacePath ?? null,
                name: b?.plugin.name ?? a.name,
                origin: c,
                pluginId: b?.plugin.id ?? null,
                pluginSourceType: b?.plugin.source.type ?? null,
                remoteMarketplaceName: b?.remoteMarketplaceName ?? null,
                remotePluginId: a.id,
                scope: a.scope,
                source: "plugin-service",
                status: a.status
            }
        }

        function l(a) {
            return "created-by-me-remote" === a ? "user-cloud" : a?.startsWith("workspace-") ? "workspace" : void 0
        }
        c.d(b, {}, {
            a: j,
            b: function(a) {
                let {
                    homeDirectory: b,
                    plugins: c,
                    visibility: d
                } = a, e = (0, h.i)((0, i.e)({
                    plugins: c,
                    isComputerUseAvailable: d.isComputerUseAvailable,
                    isExternalBrowserUseAvailable: d.isExternalBrowserUseAvailable,
                    isInAppBrowserUseAvailable: d.isInAppBrowserUseAvailable,
                    isMessagesAvailable: d.isMessagesAvailable
                }), d.hiddenPluginIds, d.browserExtensionUnificationEnabled), f = (0, h.h)(e), {
                    marketplaceFilterValue: g,
                    plugins: j
                } = (0, h.c)({
                    availablePlugins: e,
                    createdByMeRemotePlugins: null,
                    homeDirectory: b,
                    pluginShares: null,
                    storefrontPlugins: f
                });
                return {
                    createdPlugins: j,
                    marketplacePlugins: f.filter(a => !(0, h.a)(a) && (null == g || (0, i.i)(a) !== g))
                }
            },
            c: function(a) {
                let {
                    createdByCurrentUser: b = !1,
                    hiddenPluginIds: c,
                    installedPlugins: d,
                    localPlugins: e,
                    remotePlugins: f
                } = a, g = new Map;
                for (let a of d)
                    for (let b of [a.plugin.id, a.plugin.remotePluginId, a.plugin.shareContext?.remotePluginId]) null != b && g.set(b, a);
                let i = new Set(c),
                    l = new Set(e.flatMap(a => {
                        let {
                            plugin: b
                        } = a, c = b.remotePluginId ?? b.shareContext?.remotePluginId;
                        return null == c ? [] : [c]
                    }));
                return [...(0, h.e)({
                    plugins: e,
                    query: ""
                }).map(a => ({
                    ...j(a),
                    origin: "local"
                })), ...f.flatMap(a => {
                    let c = g.get(a.id) ?? null;
                    return l.has(a.id) || i.has(a.id) || null != c && i.has(c.plugin.id) ? [] : (l.add(a.id), [{
                        ...k(a, c),
                        origin: b ? "user-cloud" : "workspace"
                    }])
                })]
            },
            d: function(a, b) {
                return (0, g.a)({
                    browseSearch: b?.browseSearch,
                    hostId: b?.hostId,
                    marketplacePath: a.marketplacePath,
                    pluginId: a.pluginId ?? a.id,
                    pluginName: null == a.marketplacePath ? a.remotePluginId ?? a.id : a.name,
                    remoteMarketplaceName: null == a.marketplacePath ? a.remoteMarketplaceName ?? d.Zb : null
                })
            },
            e: function(a, b) {
                return {
                    requiresLocalExecutor: a.requires_local_executor ?? b?.requiresLocalExecutor,
                    category: b?.plugin.interface?.category ?? null,
                    description: a.short_description ?? null,
                    disabledReason: a.disabled_reason ?? b?.plugin.disabledReason ?? null,
                    displayName: a.display_name,
                    enabled: b?.plugin.enabled ?? !1,
                    id: a.id,
                    isTemplate: !0 === a.is_template,
                    installed: void 0 === b ? void 0 : b?.plugin.installed ?? !1,
                    installationPolicy: a.installation_policy ?? void 0,
                    installedPlugin: b,
                    keywords: a.keywords ?? b?.keywords ?? [],
                    logoDarkPath: a.icon_url_dark ?? b?.logoDarkPath ?? null,
                    logoPath: a.icon_url ?? b?.logoPath ?? null,
                    marketplaceDisplayName: b?.marketplaceDisplayName ?? null,
                    marketplaceName: b?.marketplaceName ?? null,
                    marketplacePath: b?.marketplacePath ?? null,
                    name: b?.plugin.name ?? null,
                    origin: l(b?.marketplaceName),
                    pluginId: b?.plugin.id ?? null,
                    pluginSourceType: b?.plugin.source.type ?? null,
                    remoteMarketplaceName: b?.remoteMarketplaceName ?? null,
                    remotePluginId: a.id,
                    source: "plugin-service",
                    status: a.status
                }
            },
            f: k,
            g: function(a, b) {
                let {
                    browserExtensionUnificationEnabled: c,
                    hiddenPluginIds: e,
                    isComputerUseAvailable: f,
                    isExternalBrowserUseAvailable: g,
                    isInAppBrowserUseAvailable: j,
                    isMessagesAvailable: k
                } = b;
                return (0, h.h)((0, h.i)((0, i.e)({
                    isComputerUseAvailable: f,
                    isExternalBrowserUseAvailable: g,
                    isInAppBrowserUseAvailable: j,
                    isMessagesAvailable: k,
                    plugins: a
                }), e, c)).filter(a => {
                    if (!(0, h.a)(a)) return !1;
                    if (!(0, d.Bi)(a.marketplaceName)) return !0;
                    let b = (0, d.kg)(a.plugin.name);
                    return b?.installWhenMissing !== !0 || !0 === b.installWhenMissingRequiresOptIn
                })
            }
        })
    }),
    aaXU: (function(a, b, c) {
        let d = new WeakMap;

        function e(a, b) {
            return null == a ? b : d.get(a) ?? b
        }

        function f(a, b, c) {
            let e = d.get(a);
            d.set(a, b);
            try {
                return c()
            } finally {
                null == e ? d.delete(a) : d.set(a, e)
            }
        }
        c.d(b, {}, {
            a: e,
            b: function(a) {
                return {
                    onFetch(b, c) {
                        let d = e(c, a),
                            g = b.fetchFn;
                        b.fetchFn = () => f(c, d, g)
                    }
                }
            },
            c: f
        })
    }),
    bJEQ: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a) {
                return AbortSignal.any([a, AbortSignal.timeout(3e4)])
            }
        })
    }),
    d4xq: (function(a, b, c) {
        var d = c("Q840");
        c("w0gB");
        var e = c("mGK9"),
            f = c("OWtl");
        c("kfGJ");
        let g = (0, d.d)(f.a, (a, b) => {
            let {
                get: c
            } = b;
            return null
        });
        c.d(b, {}, {
            a: async function(a, b, c) {
                return "chatgpt" === c || "unavailable" === c ? "chatgpt" === c : await (0, e.a)(a, b) === "chatgpt"
            },
            b: function(a) {
                return null == a ? [] : [a]
            },
            c: g
        })
    }),
    G5ZH: (function(a, b, c) {
        var d = c("i5ac"),
            e = c.n(d),
            f = c("Q840"),
            g = c("DBCl"),
            h = c("OiCI"),
            i = c("jEyg"),
            j = c("C0re"),
            k = c("tQpF"),
            l = c("EEop"),
            m = c("ueue"),
            n = c("Gg2s"),
            o = c("OWtl"),
            p = c("ndjw"),
            q = c("eShZ"),
            r = c("cLdu"),
            s = c("mq2k");
        let t = (0, f.q)(o.a, (a, b) => {
            let {
                hostId: c,
                pluginId: d,
                allowUniqueNameFallback: f = !1,
                productContext: o,
                requestOptions: q
            } = a, {
                get: t,
                scope: v
            } = b, w = !(0, r.i)(c);
            return {
                queryKey: [...(0, j.d)(c, "requested"), t(h.a), d, f, o, w ? t(p.j, {
                    hostId: c
                }).data?.roots : void 0, w ? t(s.b, c) : void 0, w ? t(p.d, {
                    hostId: c
                }).data?.codexHome : void 0],
                enabled: null != d,
                queryFn: async a => {
                    let {
                        signal: b
                    } = a;
                    if (null == d) return null;
                    if ((0, r.i)(c)) {
                        let a = (0, l.a)({
                            hostId: c,
                            pluginId: (0, k.f)({
                                id: d
                            }, !0) ?? d
                        });
                        if (null == a.pluginName) return null;
                        let b = await v.query.getOrFetch(l.l, {
                            ...a,
                            productContext: o
                        }).catch(u);
                        return null == b ? null : (0, m.c)(b)
                    }
                    let h = d;
                    (0, g.Yg)(d) === g.cd && (null == v.get(s.b, c) && (await v.query.getOrFetch(n.b, c), await v.when(a => {
                        let {
                            get: b
                        } = a;
                        return null != b(s.b, c)
                    }), b.throwIfAborted()), v.get(s.b, c) && (h = `${d.slice(0,-g.cd.length)}${g.dd}`));
                    let [{
                        roots: j
                    }, {
                        codexHome: t
                    }] = await Promise.all([v.query.getOrFetch(p.j, {
                        hostId: c
                    }), v.query.getOrFetch(p.d, {
                        hostId: c
                    })]), [w, x] = await Promise.all([v.query.getOrFetch(r.b, {
                        hostId: c,
                        roots: j,
                        requestOptions: q
                    }), v.query.getOrFetch(m.s, {
                        hostId: c,
                        roots: (0, m.m)({
                            hostId: c,
                            codexHome: t,
                            workspaceRoots: j
                        }),
                        marketplaceKinds: ["local"],
                        isOpenAICuratedRemoteMarketplaceEnabled: !1
                    })]), y = e()([...(0, m.g)(w.marketplaces), ...x.plugins], a => {
                        let {
                            plugin: b,
                            marketplacePath: c
                        } = a;
                        return JSON.stringify([b.id, c])
                    }), z = (0, i.i)({
                        requestedPluginId: h,
                        plugins: y
                    });
                    if (null != z) return z;
                    b.throwIfAborted();
                    let A = (0, g.Yg)(h),
                        B = null == A ? h : h.slice(0, -A.length - 1),
                        C = (0, k.f)({
                            id: h
                        }, !0 === v.get(s.b, c)),
                        D = null == C ? x.marketplaces.find(a => {
                            let {
                                name: b
                            } = a;
                            return b === A
                        })?.path ?? null : null,
                        E = null != C || null == A ? g.Zb : A,
                        F = await v.queryClient.fetchQuery({
                            ...v.query.getOptions(l.l, {
                                hostId: c,
                                productContext: o,
                                marketplacePath: D,
                                pluginName: C ?? B,
                                remoteMarketplaceName: null == D ? E : null,
                                requestOptions: q
                            }),
                            retry: !1,
                            staleTime: 0
                        }).catch(u);
                    if (null == F) return (0, i.i)({
                        requestedPluginId: h,
                        plugins: y,
                        allowUniqueNameFallback: f
                    });
                    let G = F.summary;
                    return G.id === h || null != G.remotePluginId && (0, g.Qi)(G.remotePluginId, h) || G.shareContext?.remotePluginId === h || null != C && G.remotePluginId === C ? (0, m.c)(F) : null
                },
                retry: !1,
                staleTime: 0
            }
        });

        function u(a) {
            if (a instanceof q.FetchError && 404 === a.status || /plugin.*not found|not found.*plugin/i.test(a.message)) return null;
            throw a
        }
        c.d(b, {}, {
            a: t
        })
    }),
    cLdu: (function(a, b, c) {
        c.d(b, {
            a: () => J,
            b: () => K,
            c: () => L,
            d: () => Q,
            e: () => S,
            f: () => T,
            g: () => R,
            h: () => M,
            i: () => r.f,
            j: () => P,
            k: () => O,
            l: () => N
        });
        var d = c("QosV"),
            e = c("KUdL"),
            f = c.n(e),
            g = c("Q840"),
            h = c("DBCl"),
            i = c("D4ZO"),
            j = c("CjTC"),
            k = c("Dgwo"),
            l = c("rljs"),
            m = c("D5PZ"),
            n = c("OiCI"),
            o = c("OFP1"),
            p = c("h6fL"),
            q = c("IVVU"),
            r = c("C0re"),
            s = c("WzdM"),
            t = c("ueue"),
            u = c("OWtl"),
            v = c("ndjw"),
            w = c("kfGJ"),
            x = c("WFY2"),
            y = c("zUz7"),
            z = c("rvFo"),
            A = c("HFSu"),
            B = c("lAQI"),
            C = c("CsuQ");
        let D = B.F({
                app_id: B.L(),
                tool_name: B.L(),
                type: B.p(["global", "settings", "thread", "file"]),
                title: B.L(),
                icons: B.g(B.F({
                    src: B.L(),
                    mimeType: B.L().nullish(),
                    sizes: B.g(B.L()).nullish(),
                    theme: B.L().nullish()
                }))
            }).transform(a => {
                let {
                    app_id: b,
                    tool_name: c,
                    ...d
                } = a;
                return {
                    ...d,
                    appId: b,
                    toolName: c
                }
            }),
            E = B.F({
                app_id: B.L(),
                link_id: B.L(),
                tool_name: B.L(),
                title: B.L(),
                search_hint: B.L().trim().min(1).optional().catch(void 0),
                call: B.F({
                    name: B.L().min(1),
                    arguments: B.J(B.L(), B.x()),
                    _meta: B.F({
                        _codex_apps: B.F({
                            resource_uri: B.L().min(1)
                        }).catchall(B.x())
                    }).catchall(B.x())
                })
            }).transform(a => {
                let {
                    app_id: b,
                    link_id: c,
                    tool_name: d,
                    search_hint: e,
                    ...f
                } = a;
                return {
                    ...f,
                    appId: b,
                    linkId: c,
                    toolName: d,
                    searchHint: e
                }
            }),
            F = B.F({
                entrypoints: B.g(D).nullish(),
                search_mention_providers: B.g(E.nullable().catch(null)).catch([]).transform(a => a.filter(a => null != a)),
                settings_entrypoints: B.g(D).nullish(),
                thread_entrypoints: B.g(D).nullish(),
                file_handlers: B.g(D).nullish(),
                settings: B.g(B.F({
                    app_id: B.L(),
                    read_tool_name: B.L(),
                    update_tool_name: B.L()
                })).nullish()
            }).transform(a => ({
                searchMentionProviders: a.search_mention_providers,
                entrypoints: [...a.entrypoints ?? [], ...a.settings_entrypoints ?? [], ...a.thread_entrypoints ?? [], ...a.file_handlers ?? []],
                settings: (a.settings ?? []).map(a => ({
                    appId: a.app_id,
                    readToolName: a.read_tool_name,
                    updateToolName: a.update_tool_name
                }))
            }));
        var G = c("aaXU"),
            H = c("bJEQ"),
            I = c("mq2k");
        let J = w.a,
            K = (0, g.q)(u.a, (a, b) => {
                let {
                    hostId: c,
                    roots: d,
                    requestOptions: e
                } = a, {
                    scope: f
                } = b;
                return {
                    queryKey: [...(0, r.b)(c, "installed-inventory"), d, e?.priority ?? "background"],
                    queryFn: async () => {
                        x.a.info("Loading local plugin inventory", {
                            safe: {},
                            sensitive: {
                                hostId: c
                            }
                        });
                        try {
                            let a = await (0, k.b)(f, c).sendRequest("plugin/installed", null != d && d.length > 0 ? {
                                cwds: d
                            } : {}, {
                                priority: "background",
                                timeoutMs: 3e4,
                                ...e
                            });
                            return x.a.info("Loaded local plugin inventory", {
                                safe: {},
                                sensitive: {
                                    hostId: c
                                }
                            }), a
                        } catch (a) {
                            throw x.a.warning("Failed to load local plugin inventory", {
                                safe: {},
                                sensitive: {
                                    hostId: c,
                                    error: a
                                }
                            }), a
                        }
                    },
                    retry: !1,
                    staleTime: 0
                }
            });

        function L(a, b, c) {
            let d = a.queryClient.getQueriesData({
                    queryKey: (0, r.b)(b, "installed-inventory")
                }).flatMap(a => {
                    let [, b] = a;
                    return (b?.marketplaces ?? []).flatMap(a => {
                        let {
                            plugins: b
                        } = a;
                        return b.filter(a => a.installed && (a.id === c || (0, j.a)(a) === c))
                    })
                }),
                e = a.queryClient.getQueriesData({
                    queryKey: (0, r.d)(b, "installed")
                }).flatMap(a => {
                    let [, b] = a;
                    return (b ?? []).filter(a => {
                        let {
                            plugin: b
                        } = a;
                        return b.installed && (b.id === c || (0, j.a)(b) === c)
                    })
                }),
                f = new Set([...d.map(j.a), ...e.map(a => {
                    let {
                        plugin: b
                    } = a;
                    return (0, j.a)(b)
                })]);
            return 1 === f.size ? [...f][0] ?? void 0 : void 0
        }
        let M = (0, g.q)(u.a, (a, b) => {
            let {
                accountId: c,
                cacheOnly: d = !1,
                hostId: e,
                consumer: g = "ui",
                roots: i,
                productContext: j,
                includeExtensions: k = !0
            } = a, {
                get: m,
                queryClient: o,
                scope: p
            } = b, u = (0, r.f)(e), v = "chatgpt", y = !!u || m(d ? I.a : I.b, e), B = "executor" === g ? [] : m(d ? q.b : q.a);
            return {
                enabled: !d && (u ? null != c : null != i && (e === w.a || "connected" === m(l.b, e))),
                queryKey: u ? [...t.a, "installed", e, "hosted", c, ...null == j || j === v ? [] : [j], ...k ? [] : ["without-extensions"]] : [...(0, r.b)(e, "installed"), i, ..."executor" === g ? [g] : []],
                behavior: (0, G.b)("other"),
                queryFn: async a => {
                    let {
                        signal: b,
                        queryKey: d
                    } = a;
                    if (u) {
                        let a = o.getQueryCache().find({
                                queryKey: d,
                                exact: !0
                            }),
                            e = await async function(a) {
                                let b, {
                                        accountId: c,
                                        includeExtensions: d,
                                        productContext: e,
                                        signal: f,
                                        surface: g
                                    } = a,
                                    i = [];
                                x.a.info("Loading hosted plugin inventory", {
                                    safe: {
                                        productContext: e,
                                        surface: g,
                                        includeExtensions: d ?? ("chatgpt" === e || void 0)
                                    }
                                });
                                do {
                                    let a = await A.CodexRequest.safeGet("/ps/plugins/installed", {
                                        parameters: {
                                            query: {
                                                limit: 1e3,
                                                pageToken: b,
                                                includeExtensions: d ?? ("chatgpt" === e || void 0)
                                            }
                                        },
                                        additionalHeaders: {
                                            ...null == c ? {} : {
                                                "ChatGPT-Account-ID": c
                                            },
                                            ...(0, s.c)(e),
                                            [h.Db]: g
                                        },
                                        signal: null == f ? void 0 : (0, H.a)(f)
                                    }).catch(a => {
                                        throw x.a[f?.aborted ? "info" : "warning"](f?.aborted ? "Cancelled hosted plugin inventory read" : "Failed to read hosted plugin inventory", {
                                            safe: {
                                                productContext: e,
                                                surface: g
                                            },
                                            sensitive: {
                                                error: a
                                            }
                                        }), a
                                    });
                                    i.push(...a.plugins), b = a.pagination.next_page_token ?? void 0
                                } while (null != b) return x.a.info("Loaded hosted plugin inventory", {
                                    safe: {
                                        productContext: e,
                                        surface: g,
                                        pluginCount: i.length
                                    }
                                }), i
                            }({
                                accountId: c ?? void 0,
                                includeExtensions: k,
                                surface: (0, G.a)(a, "other"),
                                productContext: j ?? v,
                                signal: b
                            });
                        if (p.get(n.a) !== c) throw Error("Plugin account changed while loading installed plugins");
                        return e.map(T)
                    }
                    let {
                        marketplaces: f
                    } = await p.query.fetch(K, {
                        hostId: e,
                        roots: i
                    });
                    return (0, t.n)({
                        hostId: e,
                        plugins: (0, t.g)(f, void 0, g),
                        queryClient: o,
                        signal: (0, H.a)(b)
                    })
                },
                select: a => f()(a.filter(a => {
                    let {
                        marketplaceName: b,
                        plugin: c
                    } = a;
                    return (!y || b !== h.cd) && !B.includes(c.id)
                }), a => {
                    let {
                        plugin: b
                    } = a;
                    return -(b.installedAt ?? 0)
                }),
                retry: !1,
                staleTime: u ? z.b.FIVE_MINUTES : z.b.ONE_MINUTE
            }
        });

        function N(a) {
            let b, c, e, f, h, i, j, k, l = (0, d.c)(21),
                {
                    enabled: m,
                    hostId: o,
                    consumer: q,
                    roots: s,
                    resolveActiveRoots: t,
                    productContext: u,
                    includeExtensions: x
                } = a,
                y = void 0 === m || m,
                z = void 0 === q ? "ui" : q,
                A = void 0 !== t && t;
            l[0] !== o ? (b = (0, r.f)(o), l[0] = o, l[1] = b) : b = l[1];
            let B = b,
                C = (0, p.b)(B ? w.a : o),
                D = (0, g.z)(n.a);
            (0, g.z)(n.d), l[2] !== o ? (c = {
                hostId: o
            }, l[2] = o, l[3] = c) : c = l[3];
            let E = y && !B && A && null == s;
            l[4] !== E ? (e = {
                enabled: E
            }, l[4] = E, l[5] = e) : e = l[5];
            let {
                data: F,
                isError: G
            } = (0, g.x)(v.j, c, e), H = A ? s ?? F?.roots : s, I = B ? D : null;
            l[6] !== z || l[7] !== o || l[8] !== x || l[9] !== H || l[10] !== u || l[11] !== I ? (f = {
                accountId: I,
                hostId: o,
                consumer: z,
                roots: H,
                productContext: u,
                includeExtensions: x
            }, l[6] = z, l[7] = o, l[8] = x, l[9] = H, l[10] = u, l[11] = I, l[12] = f) : f = l[12];
            let J = y && (B || C?.isLoading !== !0);
            l[13] !== J ? (h = {
                enabled: J
            }, l[13] = J, l[14] = h) : h = l[14];
            let K = (0, g.x)(M, f, h);
            l[15] !== K ? ({
                isLoading: j,
                ...i
            } = K, l[15] = K, l[16] = i, l[17] = j) : (i = l[16], j = l[17]);
            let L = y && (j || !B && (C?.isLoading === !0 || null == H && !(A && G)));
            return l[18] !== i || l[19] !== L ? (k = {
                ...i,
                isLoading: L
            }, l[18] = i, l[19] = L, l[20] = k) : k = l[20], k
        }

        function O(a, b, c) {
            let d = (0, r.f)(b),
                e = d ? (0, n.c)(a) ?? null : null,
                f = d ? void 0 : a.query.getData(v.j, {
                    hostId: b
                })?.roots;
            if ((d ? null != e : null != f) && (c.marketplaceName !== h.cd || !0 !== a.get(I.b, b)))
                for (let g of d ? [void 0, "catalog"] : [void 0]) a.query.setData(M, {
                    accountId: e,
                    hostId: b,
                    roots: f,
                    productContext: g
                }, a => {
                    if (null == a) return;
                    let b = (0, i.f)(c.plugin),
                        d = a.find(a => {
                            let {
                                plugin: c
                            } = a;
                            return (0, i.f)(c) === b
                        }),
                        e = {
                            ...c,
                            plugin: {
                                ...c.plugin,
                                enabled: !0,
                                installed: !0,
                                installedAt: c.plugin.installedAt ?? d?.plugin.installedAt ?? null
                            }
                        };
                    return null != d ? a.map(a => (0, i.f)(a.plugin) === b ? e : a) : [...a, e]
                })
        }
        async function P(a, b, c) {
            if ((0, r.f)(b)) {
                let d = {
                    accountId: (0, n.c)(a) ?? null,
                    hostId: b,
                    roots: void 0,
                    productContext: c
                };
                if (!1 === a.query.getOptions(M, d).enabled) return;
                await R(a, d, "sidebar");
                return
            }
            let {
                roots: d
            } = await a.query.getOrFetch(v.j, {
                hostId: b
            }), {
                authLoading: e
            } = a.get(o.g);
            if (e) return;
            let f = {
                accountId: null,
                hostId: b,
                roots: d
            };
            !1 !== a.query.getOptions(M, f).enabled && await a.query.getOrFetch(M, f)
        }
        async function Q(a, b) {
            let {
                productContext: c,
                signal: d,
                surface: e
            } = b;
            d?.throwIfAborted();
            let f = a.get(n.a);
            if (null == f) throw Error("Installed plugins require an authenticated account");
            let g = await R(a, {
                accountId: f,
                hostId: w.a,
                roots: void 0,
                productContext: "chatgpt" === c ? void 0 : c
            }, e);
            if (d?.throwIfAborted(), a.get(n.a) !== f) throw Error("Plugin account changed while loading installed plugins");
            return g
        }

        function R(a, b, c) {
            let d = a.query.snapshot(M, b),
                e = a.queryClient.getQueryCache().build(a.queryClient, a.queryClient.defaultQueryOptions(d.getOptions()));
            return (0, G.c)(e, c, () => d.getOrFetch())
        }

        function S(a) {
            return null == a ? null : {
                creatorAccountUserId: a.creator_account_user_id ?? null,
                scope: a.scope,
                workspaceId: a.workspace_id
            }
        }

        function T(a) {
            var b, c;
            let d, e = a.release.interface,
                f = "enabled" in a,
                g = a.release.keywords ?? e.capabilities,
                i = f && a.enabled && "ENABLED" === a.status ? a.release.skills?.find(b => b.name === a.release.onboarding_skill_name && !a.disabled_skill_names.includes(b.name)) : null,
                j = (b = "extensions" in a ? a.extensions : void 0, c = a.id, d = F.safeParse(b), null == b || d.success || x.a.warning("Ignored invalid hosted plugin extension declarations", {
                    safe: {
                        pluginId: c
                    },
                    sensitive: {
                        validationErrors: C.e(d.error)
                    }
                }), d.success ? d.data : null);
            return {
                referenceIds: "WORKSPACE" === a.scope && null != a.discoverability ? [`${a.name}@${"LISTED"===a.discoverability?"workspace-directory":"workspace-shared-with-me"}`] : void 0,
                defaultPinned: "extensions" in a && a.extensions?.default_pinned === !0,
                canonicalAppId: a.canonical_app_id ?? null,
                discoverability: a.discoverability,
                hostedThreadEntrypoints: "extensions" in a ? a.extensions?.thread_entrypoints?.flatMap(a => {
                    let b = (0, m.a)({
                        appId: a.app_id,
                        toolName: a.tool_name,
                        title: a.title,
                        resourceUri: a.resource_uri,
                        icon: (0, y.a)(a),
                        linkId: a.link_id ?? void 0
                    });
                    return null == b ? [] : [b]
                }) : void 0,
                appIds: [a.canonical_app_id, a.connector_id, ...a.release.app_ids ?? []].filter(a => null != a),
                onboardingSkill: null == i ? null : {
                    name: i.name,
                    id: i.plugin_release_skill_id
                },
                isTemplate: a.is_template ?? !1,
                templatePluginId: a.template_plugin_id ?? null,
                ownership: S(a),
                extensions: j,
                servicePlugin: a,
                description: e.short_description ?? a.release.description,
                displayName: a.release.display_name,
                composerIconPath: e.composer_icon_url ?? null,
                logoDarkPath: e.logo_url_dark ?? null,
                logoPath: e.logo_url,
                marketplaceDisplayName: null,
                marketplaceName: h.dd,
                marketplacePath: null,
                remoteMarketplaceName: h.dd,
                keywords: g,
                requiresLocalExecutor: !0 === a.release.requires_local_executor,
                plugin: {
                    authPolicy: a.authentication_policy ?? "ON_USE",
                    installedAt: f && null != a.installed_at ? Date.parse(a.installed_at) / 1e3 : null,
                    disabledReason: a.disabled_reason ?? ("DISABLED_BY_ADMIN" === a.status ? "disabled_by_admin" : null),
                    eligiblePlanTypes: a.eligible_plan_types ?? null,
                    availability: "DISABLED_BY_ADMIN" === a.status ? "DISABLED_BY_ADMIN" : "AVAILABLE",
                    enabled: f && a.enabled,
                    id: `${a.name}@${h.dd}`,
                    installed: f,
                    installPolicy: a.installation_policy ?? "AVAILABLE",
                    installPolicySource: a.installation_policy_source ?? null,
                    interface: {
                        brandColor: e.brand_color ?? null,
                        capabilities: e.capabilities,
                        category: e.category,
                        composerIcon: null,
                        composerIconUrl: e.composer_icon_url ?? null,
                        defaultPrompt: e.default_prompts ?? (null == e.default_prompt ? null : [e.default_prompt]),
                        developerName: e.developer_name ?? null,
                        displayName: a.release.display_name,
                        logo: null,
                        logoDark: null,
                        logoUrl: e.logo_url,
                        logoUrlDark: e.logo_url_dark ?? null,
                        longDescription: e.long_description ?? null,
                        privacyPolicyUrl: e.privacy_policy_url ?? null,
                        screenshots: [],
                        screenshotUrls: e.screenshot_urls ?? [],
                        shortDescription: e.short_description,
                        termsOfServiceUrl: e.terms_of_service_url ?? null,
                        websiteUrl: e.website_url ?? null
                    },
                    keywords: g,
                    localVersion: null,
                    mustShowInstallationInterstitial: a.must_show_installation_interstitial ?? null,
                    name: a.name,
                    remotePluginId: a.id,
                    shareContext: null,
                    source: {
                        type: "remote"
                    },
                    version: a.release.version ?? null
                }
            }
        }
    }),
    Buqh: (function(a, b, c) {
        var d = c("Q840"),
            e = c("DBCl"),
            f = c("Dgwo"),
            g = c("tl5a"),
            h = c("IVVU"),
            i = c("C0re"),
            j = c("ueue"),
            k = c("OWtl"),
            l = c("ndjw"),
            m = c("kfGJ"),
            n = c("rvFo"),
            o = c("bJEQ"),
            p = c("mq2k");
        let q = (0, d.q)(k.a, (a, b) => {
            let {
                get: c,
                queryClient: d,
                scope: k
            } = b, q = c(p.b, a), r = c(h.a), {
                data: s,
                isFetched: t
            } = c(l.j, {
                hostId: a
            }), {
                data: u,
                isFetched: v
            } = c(l.d, {
                hostId: a
            }), w = (0, j.m)({
                codexHome: u?.codexHome,
                hostId: a,
                workspaceRoots: s?.roots
            });
            return {
                enabled: t && v && (a === m.a || "connected" === c(g.b, a)),
                queryKey: [...(0, i.b)(a, "local"), w],
                queryFn: async b => {
                    let {
                        signal: c
                    } = b, {
                        featuredPluginIds: e,
                        marketplaceLoadErrors: g,
                        marketplaces: h
                    } = await (0, f.b)(k, a).sendRequest("plugin/list", {
                        ...w.length > 0 ? {
                            cwds: w
                        } : {},
                        marketplaceKinds: ["local"]
                    });
                    return {
                        featuredPluginIds: e,
                        marketplaceLoadErrors: g,
                        marketplaces: (0, j.t)(h),
                        plugins: await (0, j.n)({
                            hostId: a,
                            plugins: (0, j.g)(h),
                            queryClient: d,
                            signal: (0, o.a)(c)
                        })
                    }
                },
                retry: !1,
                select: a => ({
                    ...a,
                    plugins: a.plugins.filter(a => {
                        let {
                            marketplaceName: b,
                            plugin: c
                        } = a;
                        return (!q || b !== e.cd) && !r.includes(c.id)
                    })
                }),
                staleTime: n.b.ONE_MINUTE
            }
        });
        c.d(b, {}, {
            a: q,
            b: async function(a, b) {
                await Promise.all([a.query.getOrFetch(l.j, {
                    hostId: b
                }), a.query.getOrFetch(l.d, {
                    hostId: b
                })]), !1 !== a.query.getOptions(q, b).enabled && await a.query.getOrFetch(q, b)
            }
        })
    }),
    PwKw: (function(a, b, c) {
        var d = c("QosV"),
            e = c("Q840"),
            f = c("OiCI"),
            g = c("usf5"),
            h = c("IIEq"),
            i = c("jWaO"),
            j = c("yrds"),
            k = c("Vyeu"),
            l = c("IVVU"),
            m = c("C0re"),
            n = c("WzdM"),
            o = c("SlNh"),
            p = c("ueue"),
            q = c("Gg2s"),
            r = c("OWtl"),
            s = c("ndjw"),
            t = c("kfGJ"),
            u = c("rvFo"),
            v = c("HFSu"),
            w = c("aFrt"),
            x = c("aaXU"),
            y = c("bJEQ"),
            z = c("d4xq"),
            A = c("cLdu"),
            B = c("Buqh"),
            C = c("mq2k");
        let D = (0, e.q)(r.a, (a, b) => {
            let {
                get: c,
                queryClient: d,
                scope: e
            } = b, g = c(z.c, a), h = c(f.a);
            return {
                enabled: null != h,
                queryKey: (0, m.c)(a, "home", ...null == h ? [] : [h], ...(0, z.b)(g)),
                behavior: (0, x.b)("plugin_directory"),
                queryFn: async b => {
                    let {
                        signal: c,
                        queryKey: f
                    } = b, h = (0, x.a)(d.getQueryCache().find({
                        queryKey: f,
                        exact: !0
                    }), "plugin_directory");
                    return a === t.a || await (0, z.a)(e, a, g) ? v.CodexRequest.safeGet("/ps/plugins/home", {
                        additionalHeaders: (0, n.c)(),
                        surface: h,
                        signal: (0, y.a)(c)
                    }) : null
                },
                retry: !1,
                staleTime: u.b.ONE_HOUR,
                gcTime: u.b.ONE_HOUR
            }
        });
        c.d(b, {}, {
            a: async function(a, b, c) {
                if (null == (0, f.c)(a)) return;
                let d = async () => {
                    let d = a.query.snapshot(D, b);
                    if (void 0 !== d.getData()) return;
                    let e = a.queryClient.getQueryCache().build(a.queryClient, a.queryClient.defaultQueryOptions(d.getOptions()));
                    await (0, x.c)(e, c, () => d.getOrFetch())
                };
                b === t.a ? await d() : await (0, z.a)(a, b, a.get(z.c, b)) ? (await a.query.getOrFetch(q.b, b), await Promise.all([...a.get(C.b, b) ? [d()] : [], (0, B.b)(a, b)])) : await (0, B.b)(a, b)
            },
            b: D,
            c: function(a) {
                let b, c, f, m, n, r, u, v, x, y, z, E, F, G, H = (0, d.c)(50),
                    {
                        hostId: I
                    } = a,
                    J = void 0 === I ? t.a : I,
                    K = J === t.a,
                    L = !K;
                H[0] !== L ? (b = {
                    enabled: L
                }, H[0] = L, H[1] = b) : b = H[1];
                let {
                    isLoading: M
                } = (0, e.x)(q.b, J, b), N = (0, e.x)(C.b, J);
                H[2] !== J ? (c = {
                    hostId: J
                }, H[2] = J, H[3] = c) : c = H[3];
                let O = !K;
                H[4] !== O ? (f = {
                    enabled: O
                }, H[4] = O, H[5] = f) : f = H[5];
                let {
                    data: P,
                    isLoading: Q
                } = (0, e.x)(s.j, c, f);
                H[6] !== J ? (m = {
                    hostId: J
                }, H[6] = J, H[7] = m) : m = H[7];
                let R = !K;
                H[8] !== R ? (n = {
                    enabled: R
                }, H[8] = R, H[9] = n) : n = H[9];
                let {
                    isLoading: S
                } = (0, e.x)(s.d, m, n), T = !K;
                H[10] !== T ? (r = {
                    enabled: T
                }, H[10] = T, H[11] = r) : r = H[11];
                let {
                    data: U,
                    error: V,
                    isLoading: W
                } = (0, e.x)(B.a, J, r), X = !0 === N;
                H[12] !== X ? (u = {
                    enabled: X
                }, H[12] = X, H[13] = u) : u = H[13];
                let {
                    data: Y,
                    error: Z,
                    isLoading: $
                } = (0, e.x)(D, J, u), _ = P?.roots;
                H[14] !== J || H[15] !== _ ? (v = {
                    hostId: J,
                    roots: _,
                    productContext: "catalog"
                }, H[14] = J, H[15] = _, H[16] = v) : v = H[16];
                let {
                    data: aa,
                    error: ab
                } = (0, A.l)(v), ac = (0, g.b)(), ad = !K;
                H[17] !== J || H[18] !== ad ? (x = {
                    enabled: ad,
                    hostId: J
                }, H[17] = J, H[18] = ad, H[19] = x) : x = H[19];
                let ae = (0, h.a)(x);
                H[20] !== ae || H[21] !== J ? (y = {
                    computerUseAvailability: ae,
                    hostId: J
                }, H[20] = ae, H[21] = J, H[22] = y) : y = H[22];
                let af = (0, k.a)(y),
                    ag = !K;
                H[23] !== J || H[24] !== ag ? (z = {
                    enabled: ag,
                    hostId: J
                }, H[23] = J, H[24] = ag, H[25] = z) : z = H[25];
                let ah = (0, i.a)(z),
                    ai = !K;
                H[26] !== J || H[27] !== ai ? (E = {
                    enabled: ai,
                    hostId: J
                }, H[26] = J, H[27] = ai, H[28] = E) : E = H[28];
                let aj = (0, j.a)(E),
                    {
                        hiddenPluginIds: ak
                    } = (0, e.z)(l.g),
                    al = (N ? Z : null) ?? (K ? null : V) ?? ab ?? null,
                    am = null == N || N && $ || !K && (M || Q || S || W || ae.isLoading || ah.isLoading || aj.isLoading || af.isLoading);
                if (null != al || am || !K && null == U || N && void 0 === Y) {
                    let a;
                    return H[29] !== al || H[30] !== am ? (a = {
                        categories: void 0,
                        error: al,
                        isLoading: am
                    }, H[29] = al, H[30] = am, H[31] = a) : a = H[31], a
                }
                if (H[32] !== ac || H[33] !== ae.available || H[34] !== ah.available || H[35] !== ak || H[36] !== aj.available || H[37] !== aa || H[38] !== K || H[39] !== N || H[40] !== U?.featuredPluginIds || H[41] !== U?.plugins || H[42] !== af.available || H[43] !== Y) {
                    let a, b = {
                        isComputerUseAvailable: ae.available,
                        isExternalBrowserUseAvailable: ah.available,
                        isInAppBrowserUseAvailable: aj.available,
                        isMessagesAvailable: af.available
                    };
                    H[45] !== K || H[46] !== U?.featuredPluginIds ? (a = K ? [] : U?.featuredPluginIds ?? [], H[45] = K, H[46] = U?.featuredPluginIds, H[47] = a) : a = H[47], F = function(a) {
                        let {
                            featuredPluginIds: b,
                            hiddenPluginIds: c,
                            installedPlugins: d,
                            localPlugins: e,
                            remoteHome: f
                        } = a, g = new Map;
                        for (let a of [...d ?? [], ...e])
                            for (let b of [a.plugin.id, a.plugin.remotePluginId, a.plugin.shareContext?.remotePluginId]) null != b && g.set(b, a);
                        let h = new Set(c),
                            i = new Map;
                        for (let a of f?.sections ?? []) {
                            let b = a.id,
                                c = a.plugins.flatMap(a => {
                                    let b = g.get(a.id) ?? (null == d ? void 0 : null);
                                    return h.has(a.id) || null != b && h.has(b.plugin.id) ? [] : [(0, w.e)(a, b)]
                                }),
                                e = a.id.trim() || a.url_slug?.trim();
                            e && c.forEach((a, b) => {
                                a.homeImpressionPlacement = {
                                    sectionId: e,
                                    position: b
                                }
                            });
                            let f = i.get(b);
                            null == f ? i.set(b, {
                                id: b,
                                title: a.title,
                                urlSlug: a.url_slug,
                                plugins: c
                            }) : (f.plugins.push(...c), null != a.url_slug && (f.urlSlug = a.url_slug))
                        }
                        if (null == f) {
                            let a = new Set;
                            for (let {
                                    plugins: c,
                                    section: d
                                }
                                of(0, o.g)({
                                    connectedPlugins: [],
                                    featuredPluginIds: b,
                                    plugins: e
                                })) {
                                let b = c.flatMap(b => a.has(b.plugin.id) ? [] : (a.add(b.plugin.id), [(0, w.a)(b)])),
                                    e = i.get(d.id);
                                null != e ? e.plugins.unshift(...b) : i.set(d.id, {
                                    id: d.id,
                                    title: d.title,
                                    urlSlug: null,
                                    plugins: b
                                })
                            }
                        }
                        return Array.from(i.values()).filter(a => {
                            let {
                                plugins: b
                            } = a;
                            return b.length > 0
                        }).map(a => ({
                            ...a,
                            plugins: a.plugins.slice(0, 9)
                        }))
                    }({
                        featuredPluginIds: (0, p.d)({
                            featuredPluginIds: a,
                            ...b
                        }),
                        hiddenPluginIds: ak,
                        installedPlugins: aa,
                        localPlugins: (0, w.g)(K ? [] : U?.plugins ?? [], {
                            browserExtensionUnificationEnabled: ac,
                            hiddenPluginIds: ak,
                            ...b
                        }),
                        remoteHome: N ? Y ?? void 0 : void 0
                    }), H[32] = ac, H[33] = ae.available, H[34] = ah.available, H[35] = ak, H[36] = aj.available, H[37] = aa, H[38] = K, H[39] = N, H[40] = U?.featuredPluginIds, H[41] = U?.plugins, H[42] = af.available, H[43] = Y, H[44] = F
                } else F = H[44];
                return H[48] !== F ? (G = {
                    categories: F,
                    error: null,
                    isLoading: !1
                }, H[48] = F, H[49] = G) : G = H[49], G
            }
        })
    }),
    mq2k: (function(a, b, c) {
        var d = c("Q840"),
            e = c("Gg2s"),
            f = c("OWtl"),
            g = c("kfGJ"),
            h = c("OMIV"),
            i = c("jBHQ");
        let j = "4218407052",
            k = (0, d.d)(f.a, (a, b) => {
                let {
                    get: c
                } = b;
                return m(a, c, !1)
            }),
            l = (0, d.d)(f.a, (a, b) => {
                let {
                    get: c
                } = b;
                return m(a, c, !0)
            });

        function m(a, b, c) {
            if (a === g.a) return !0;
            let {
                data: d
            } = c ? b(e.b, a, {
                enabled: !1
            }) : b(e.b, a);
            if (null == d) return;
            let f = d.find(a => "remote_plugin" === a.name);
            return null != f ? f.enabled : b(h.h, j) ? void 0 : b(c ? i.a : h.e, j)
        }
        c.d(b, {}, {
            a: l,
            b: k
        })
    }),
    ueue: (function(a, b, c) {
        var d = c("QosV"),
            e = c("Q840"),
            f = c("DBCl"),
            g = c("D4ZO"),
            h = c("SqAt"),
            i = c("Dgwo"),
            j = c("CfsC"),
            k = c("wHrF"),
            l = c("h6fL"),
            m = c("MI1z"),
            n = c("IIEq"),
            o = c("jWaO"),
            p = c("yrds"),
            q = c("rO8L"),
            r = c("Vyeu"),
            s = c("w8IV"),
            t = c("sLlu"),
            u = c("OWtl"),
            v = c("ndjw"),
            w = c("kfGJ"),
            x = c("hZax"),
            y = c("bnxy"),
            z = c("rvFo"),
            A = c("JRAe"),
            B = c("AjOy"),
            C = c("lhA2"),
            D = c("IVVU"),
            E = c("C0re"),
            F = c("CBsD");
        let G = new Set,
            H = [],
            I = [],
            J = [],
            K = [],
            L = [],
            M = [],
            N = [f.cd],
            O = ["datadog", "statsig"],
            P = new Set(["codex-official", f.bd, f.cd, f.dd, "openai-primary-runtime"].map(af)),
            Q = (0, e.q)(u.a, (a, b) => {
                var c, d, e;
                let g, {
                        hostId: h,
                        isOpenAICuratedRemoteMarketplaceEnabled: j,
                        marketplaceKinds: k,
                        roots: l
                    } = a,
                    {
                        get: m,
                        queryClient: n,
                        scope: o
                    } = b,
                    p = m(D.a),
                    q = function(a) {
                        let {
                            isOpenAICuratedRemoteMarketplaceEnabled: b
                        } = a;
                        return b ? N : K
                    }({
                        isOpenAICuratedRemoteMarketplaceEnabled: j
                    }),
                    r = (c = h, d = l, e = k, g = j ? f.dd : f.cd, null == e ? [...(0, E.b)(c, "list"), d, "curated-marketplace", g] : [...(0, E.b)(c, "list"), d, "marketplace-kinds", e, "curated-marketplace", g]);
                return {
                    queryKey: r,
                    queryFn: async () => {
                        var a, b;
                        let c = await (0, i.b)(o, h).sendRequest("plugin/list", null == k ? {
                                ...l.length > 0 ? {
                                    cwds: l
                                } : {},
                                forceRefetch: G.has(h) || void 0
                            } : {
                                ...l.length > 0 ? {
                                    cwds: l
                                } : {},
                                marketplaceKinds: k,
                                forceRefetch: G.has(h) || void 0
                            }),
                            d = (a = c.marketplaces, 0 === (b = q).length ? a : a.filter(a => !b.includes(a.name))),
                            e = al(d, n.getQueryData(r)?.plugins),
                            g = c.featuredPluginIds.filter(a => {
                                let b = ae(a).toLowerCase();
                                return !O.some(a => b === a || b.startsWith(`${a}-`))
                            }).filter(a => !q.some(b => a.endsWith(`@${b}`)));
                        return {
                            bundledCodexAppToolsPlugin: d.find(a => {
                                let {
                                    name: b
                                } = a;
                                return (0, f.Bi)(b)
                            })?.plugins.find(a => {
                                let {
                                    name: b
                                } = a;
                                return b === f.hb
                            }),
                            featuredPluginIds: g,
                            marketplaceLoadErrors: c.marketplaceLoadErrors,
                            marketplaces: ah(d),
                            plugins: await ai({
                                hostId: h,
                                plugins: e,
                                queryClient: n
                            })
                        }
                    },
                    select: a => ({
                        ...a,
                        plugins: a.plugins.filter(a => {
                            let {
                                plugin: b
                            } = a;
                            return !p.includes(b.id)
                        })
                    }),
                    staleTime: z.b.SIX_HOURS,
                    gcTime: z.b.FIVE_MINUTES
                }
            }),
            R = (0, e.q)(u.a, (a, b) => {
                let {
                    cacheOnly: c = !1,
                    hostId: d,
                    marketplaceKind: e
                } = a, {
                    get: f,
                    queryClient: g,
                    scope: h
                } = b, j = f(c ? D.b : D.a), k = [...(0, E.b)(d, "marketplace-kind"), e];
                return {
                    ...c ? {
                        enabled: !1
                    } : {},
                    queryKey: k,
                    queryFn: async () => {
                        let a = await (0, i.b)(h, d).sendRequest("plugin/list", {
                            marketplaceKinds: [e],
                            forceRefetch: G.has(d) || void 0
                        });
                        return ai({
                            hostId: d,
                            plugins: al(a.marketplaces, g.getQueryData(k)),
                            queryClient: g
                        })
                    },
                    select: a => a.filter(a => {
                        let {
                            plugin: b
                        } = a;
                        return !j.includes(b.id)
                    }),
                    staleTime: z.b.SIX_HOURS
                }
            }),
            S = (0, e.d)(u.a, (a, b) => {
                let {
                    get: c
                } = b;
                return c(R, {
                    cacheOnly: !0,
                    hostId: a,
                    marketplaceKind: "local"
                })
            });

        function T(a) {
            let {
                marketplacePath: b,
                remoteMarketplaceName: c
            } = a;
            if (null != b && null != c) throw Error("plugin marketplace request requires one marketplace source");
            if (null != b) return {
                marketplacePath: b
            };
            if (null != c) return {
                remoteMarketplaceName: c
            };
            throw Error("plugin marketplace request requires a marketplace source")
        }

        function U(a) {
            return a.marketplacePath ?? `remote:${a.remoteMarketplaceName}`
        }
        async function V() {}
        async function W() {}
        async function X() {
            return {
                availablePlugins: M,
                installedPlugins: M
            }
        }

        function Y(a) {
            let {
                featuredPluginIds: b,
                ...c
            } = a;
            return b.filter(a => aa(a, c))
        }

        function Z(a) {
            let {
                plugins: b,
                ...c
            } = a;
            return b.filter(a => aa(a.plugin.id, c))
        }

        function $(a) {
            return a.filter(a => a.plugin.installed)
        }

        function _(a) {
            let {
                enabled: b,
                installed: c,
                pluginId: d,
                plugins: e
            } = a;
            return e.some(a => a.plugin.id === d && (a.plugin.installed !== c || a.plugin.enabled !== b)) ? e.map(a => a.plugin.id === d ? {
                ...a,
                plugin: {
                    ...a.plugin,
                    enabled: b,
                    installed: c
                }
            } : a) : e
        }

        function aa(a, b) {
            let {
                isComputerUseAvailable: c,
                isExternalBrowserUseAvailable: d,
                isInAppBrowserUseAvailable: e,
                isMessagesAvailable: g
            } = b;
            return ae(a) === f.qc ? e || d : !(!e && ab(a) || !d && ac(a) || !c && ad(a)) && (!!g || a !== s.a)
        }

        function ab(a) {
            let b = ae(a);
            return b === f.qc || b === f.vc
        }

        function ac(a) {
            let b = ae(a);
            return "chrome" === b || "chrome-dev" === b || "chrome-internal" === b
        }

        function ad(a) {
            return "computer-use" === ae(a)
        }

        function ae(a) {
            let b = a.indexOf("@");
            return -1 === b ? a : a.slice(0, b)
        }

        function af(a) {
            return a.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function ag(a) {
            return P.has(af(a))
        }

        function ah(a) {
            let b = new Map;
            for (let c of a) {
                let a = `${c.name}\0${c.path??""}`;
                if (b.has(a)) continue;
                let d = ag(c.name);
                b.set(a, {
                    displayName: c.interface?.displayName ?? null,
                    isBuiltIn: d,
                    name: c.name,
                    path: c.path,
                    pluginCount: c.plugins.length
                })
            }
            return Array.from(b.values()).sort((a, b) => {
                let c = a.displayName?.trim() || a.name,
                    d = b.displayName?.trim() || b.name;
                return c.localeCompare(d)
            })
        }
        async function ai(a) {
            let {
                hostId: b,
                plugins: c,
                queryClient: d,
                signal: e
            } = a, f = [...c];
            return await Promise.all(Array.from({
                length: Math.min(4, c.length)
            }, (a, g) => (async function a(g) {
                let h = c[g];
                if (null == h) return;
                let [i, j, k] = await Promise.all([aj(h.composerIconPath, b, d, e), aj(h.logoPath, b, d, e), aj(h.logoDarkPath, b, d, e)]);
                (null != i || null != j || null != k) && (f[g] = {
                    ...h,
                    composerIconPath: i ?? h.composerIconPath,
                    logoDarkPath: k ?? h.logoDarkPath,
                    logoPath: j ?? h.logoPath,
                    plugin: h.plugin.interface ? {
                        ...h.plugin, interface: {
                            ...h.plugin.interface, composerIcon: i ?? h.plugin.interface.composerIcon, logo: j ?? h.plugin.interface.logo, ...null == k ? {} : {
                                logoDark: k
                            }
                        }
                    } : h.plugin
                }), await a(g + 4)
            })(g))), f
        }
        async function aj(a, b, c, d) {
            return (0, F.e)(a, b, c, d)
        }

        function ak(a) {
            var b, c;
            let {
                codexHome: d,
                hostId: e,
                rootsOverrideCwd: g,
                workspaceRoots: h
            } = a, i = e === w.a && null != d ? (0, y.p)(d, ".tmp/marketplaces/openai-internal-testing") : null;
            return b = [..."string" == typeof g ? [g] : g ?? h ?? [], ...null == i ? [] : [i]], c = d, Array.from(new Set(b.map(a => a.trim()).filter(a => {
                var b, d;
                return (0, f.Nh)(a) && (b = a, null == (d = c) || ((0, f.Zi)(d) || (0, f.$i)(d) ? (0, f.Zi)(b) || (0, f.$i)(b) : b.startsWith("/") && !b.startsWith("//")))
            })))
        }

        function al(a) {
            let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M,
                c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui",
                {
                    plugins: d,
                    freshDirectoryPluginIds: e
                } = (0, g.b)(a, c),
                f = new Map(b.map(a => [(0, g.f)(a.plugin), a])),
                h = !1,
                i = d.map(a => {
                    let b = {
                            ...a,
                            ...am(a.plugin)
                        },
                        c = (0, g.f)(b.plugin),
                        d = f.get(c);
                    return !b.plugin.installed || null == d || e.has(c) ? b : (h || (h = b.marketplaceName !== d.marketplaceName || b.marketplacePath !== d.marketplacePath), {
                        ...d,
                        plugin: {
                            ...b.plugin,
                            id: d.plugin.id,
                            interface: d.plugin.interface ?? b.plugin.interface,
                            keywords: d.plugin.keywords ?? b.plugin.keywords,
                            name: d.plugin.name,
                            remotePluginId: d.plugin.remotePluginId ?? b.plugin.remotePluginId,
                            shareContext: d.plugin.shareContext ?? b.plugin.shareContext,
                            source: d.plugin.source
                        }
                    })
                });
            if (!h) return i;
            let j = new Map(i.map(a => [(0, g.f)(a.plugin), a]));
            return [...b.flatMap(a => {
                let b = (0, g.f)(a.plugin),
                    c = j.get(b);
                return j.delete(b), null == c ? [] : [c]
            }), ...j.values()]
        }

        function am(a, b) {
            let c = (0, k.c)(a.remotePluginId)?.iconUrl;
            if (null != c) return {
                composerIconPath: c,
                logoDarkPath: c,
                logoPath: c
            };
            let d = a.interface,
                e = d?.composerIcon ?? d?.composerIconUrl,
                f = d?.logo ?? d?.logoUrl,
                g = d?.logoDark ?? d?.logoUrlDark,
                h = (0, A.a)(a),
                i = null != f || null != g,
                j = e ?? (i ? null : h),
                l = i ? f ?? g ?? null : h ?? b?.logoUrl ?? b?.logoUrlDark ?? null,
                m = i ? g ?? null : h ?? b?.logoUrlDark ?? b?.logoUrl ?? null;
            if (null != l) return {
                composerIconPath: j,
                logoDarkPath: m,
                logoPath: l
            };
            let n = (0, C.a)(a.remotePluginId ?? a.shareContext?.remotePluginId ?? a.id);
            return {
                composerIconPath: j ?? n,
                logoDarkPath: null,
                logoPath: n
            }
        }
        c.d(b, {
            a: () => E.a
        }, {
            b: S,
            c: function(a) {
                return {
                    ...am(a.summary),
                    description: a.summary.interface?.shortDescription ?? a.description ?? null,
                    displayName: a.summary.interface?.displayName ?? null,
                    marketplaceDisplayName: null,
                    marketplaceName: a.marketplaceName,
                    plugin: a.summary,
                    keywords: a.summary.keywords,
                    ...(0, g.e)({
                        marketplaceName: a.marketplaceName,
                        marketplacePath: a.marketplacePath
                    })
                }
            },
            d: Y,
            e: Z,
            f: function(a) {
                let {
                    buildFlavor: b,
                    plugins: c
                } = a, d = (0, f.Sg)(b);
                return c.filter(a => !(0, f.Bi)(a.marketplaceName) || a.marketplaceName === d)
            },
            g: al,
            h: am,
            i: U,
            j: T,
            k: function(a) {
                let b = a.plugin.remotePluginId ?? a.plugin.shareContext?.remotePluginId;
                return `${U(a)}:${a.plugin.id}:${b??""}`
            },
            l: function(a) {
                return {
                    ...T(a),
                    pluginName: (0, h.a)(a)
                }
            },
            m: ak,
            n: ai,
            o: ag,
            p: ad,
            q: ac,
            r: ab,
            s: Q,
            t: ah,
            u: function(a) {
                let {
                    enabled: b,
                    hostId: c,
                    installed: d,
                    pluginId: e,
                    queryClient: f
                } = a;
                f.setQueriesData({
                    queryKey: (0, E.b)(c, "list")
                }, a => {
                    if (null == a) return a;
                    let c = _({
                        enabled: b,
                        installed: d,
                        pluginId: e,
                        plugins: a.plugins
                    });
                    return c === a.plugins ? void 0 : {
                        ...a,
                        plugins: c
                    }
                }), f.setQueriesData({
                    queryKey: (0, E.b)(c, "marketplace-kind")
                }, a => {
                    if (null == a) return;
                    let c = _({
                        enabled: b,
                        installed: d,
                        pluginId: e,
                        plugins: a
                    });
                    return c === a ? void 0 : c
                }), f.setQueriesData({
                    queryKey: (0, E.d)(c, "installed")
                }, a => {
                    if (null == a) return;
                    if (!d) {
                        let b = a.filter(a => a.plugin.id !== e);
                        return b.length === a.length ? void 0 : b
                    }
                    let c = _({
                        enabled: b,
                        installed: d,
                        pluginId: e,
                        plugins: a
                    });
                    return c === a ? void 0 : c
                }), f.setQueriesData({
                    queryKey: (0, E.d)(c, "detail")
                }, a => {
                    if (null != a && a.summary.id === e && (a.summary.installed !== d || a.summary.enabled !== b)) return {
                        ...a,
                        summary: {
                            ...a.summary,
                            enabled: b,
                            installed: d
                        }
                    }
                })
            },
            v: function(a, b, c) {
                let f, g, h, i, k, s, u, w, y, z, A, C, D, F, K, N, O, P, R, S, T, U, _, aa = (0, d.c)(78),
                    ab = c?.enabled !== !1;
                aa[0] !== a || aa[1] !== ab ? (f = {
                    enabled: ab,
                    hostId: a
                }, aa[0] = a, aa[1] = ab, aa[2] = f) : f = aa[2];
                let ac = (0, q.a)(f) && ab,
                    ad = c?.additionalMarketplaceKinds ?? J,
                    ae = (0, x.f)("4218407052"),
                    af = (0, l.b)(a),
                    ag = c?.includeRemoteCatalog ?? !0;
                aa[3] !== ad || aa[4] !== af?.authMethod || aa[5] !== ae || aa[6] !== c?.includeRemoteCatalog || aa[7] !== ag ? (g = function(a) {
                    let {
                        additionalMarketplaceKinds: b,
                        includeRemoteCatalog: c,
                        includeVerticalCatalog: d
                    } = a;
                    return c && !d && 0 === b.length ? null : d ? ["local", "vertical", ...b] : ["local", ...b]
                }({
                    additionalMarketplaceKinds: ad,
                    includeRemoteCatalog: ag,
                    includeVerticalCatalog: c?.includeRemoteCatalog !== !1 && !ae && (0, B.a)(af?.authMethod ?? null)
                }), aa[3] = ad, aa[4] = af?.authMethod, aa[5] = ae, aa[6] = c?.includeRemoteCatalog, aa[7] = ag, aa[8] = g) : g = aa[8];
                let ah = g,
                    ai = (0, t.b)(),
                    aj = (0, e.z)(j.b);
                aa[9] !== a || aa[10] !== aj ? (h = aj.includes(a), aa[9] = a, aa[10] = aj, aa[11] = h) : h = aa[11];
                let al = h,
                    am = void 0 === b;
                aa[12] !== a ? (i = {
                    hostId: a
                }, aa[12] = a, aa[13] = i) : i = aa[13];
                let an = ac && al && am;
                aa[14] !== an ? (k = {
                    enabled: an
                }, aa[14] = an, aa[15] = k) : k = aa[15];
                let ao = (0, e.x)(v.j, i, k);
                aa[16] !== ac ? (s = {
                    enabled: ac
                }, aa[16] = ac, aa[17] = s) : s = aa[17];
                let ap = (0, m.a)(a, s),
                    aq = ac && al;
                aa[18] !== a || aa[19] !== aq ? (u = {
                    enabled: aq,
                    hostId: a
                }, aa[18] = a, aa[19] = aq, aa[20] = u) : u = aa[20];
                let ar = (0, n.a)(u);
                aa[21] !== ar || aa[22] !== a ? (w = {
                    computerUseAvailability: ar,
                    hostId: a
                }, aa[21] = ar, aa[22] = a, aa[23] = w) : w = aa[23];
                let as = (0, r.a)(w),
                    at = ac && al;
                aa[24] !== a || aa[25] !== at ? (y = {
                    enabled: at,
                    hostId: a
                }, aa[24] = a, aa[25] = at, aa[26] = y) : y = aa[26];
                let au = (0, p.a)(y),
                    av = ac && al;
                aa[27] !== a || aa[28] !== av ? (z = {
                    enabled: av,
                    hostId: a
                }, aa[27] = a, aa[28] = av, aa[29] = z) : z = aa[29];
                let aw = (0, o.a)(z),
                    ax = ao.data?.roots;
                aa[30] !== ap || aa[31] !== a || aa[32] !== b || aa[33] !== ax ? (A = ak({
                    codexHome: ap,
                    hostId: a,
                    rootsOverrideCwd: b,
                    workspaceRoots: ax
                }), aa[30] = ap, aa[31] = a, aa[32] = b, aa[33] = ax, aa[34] = A) : A = aa[34];
                let ay = A,
                    az = ac && af?.isLoading !== !0 && al && (void 0 !== b || ao.isFetched);
                aa[35] !== a || aa[36] !== ae || aa[37] !== ah || aa[38] !== ay ? (C = {
                    hostId: a,
                    isOpenAICuratedRemoteMarketplaceEnabled: ae,
                    marketplaceKinds: ah,
                    roots: ay
                }, aa[35] = a, aa[36] = ae, aa[37] = ah, aa[38] = ay, aa[39] = C) : C = aa[39], aa[40] !== az ? (D = {
                    enabled: az
                }, aa[40] = az, aa[41] = D) : D = aa[41];
                let aA = (0, e.x)(Q, C, D);
                if (!ac || !al) {
                    let a;
                    return aa[42] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                        availablePlugins: M,
                        featuredPluginIds: H,
                        installedPlugins: M,
                        marketplaceLoadErrors: I,
                        marketplaces: L,
                        errorMessage: null,
                        isLoading: !1,
                        isFetching: !1,
                        refetch: X,
                        reload: W,
                        forceReload: V
                    }, aa[42] = a) : a = aa[42], a
                }
                aa[43] !== ar.available || aa[44] !== aw.available || aa[45] !== au.available || aa[46] !== as.available || aa[47] !== aA.data?.bundledCodexAppToolsPlugin || aa[48] !== aA.data?.featuredPluginIds || aa[49] !== aA.data?.plugins ? (F = {
                    isComputerUseAvailable: ar.available,
                    isExternalBrowserUseAvailable: aw.available,
                    isInAppBrowserUseAvailable: au.available,
                    isMessagesAvailable: as.available
                }, N = Z({
                    plugins: K = aA.data?.plugins ?? M,
                    ...F
                }), O = aA.data?.bundledCodexAppToolsPlugin, P = Y({
                    featuredPluginIds: aA.data?.featuredPluginIds ?? H,
                    ...F
                }), aa[43] = ar.available, aa[44] = aw.available, aa[45] = au.available, aa[46] = as.available, aa[47] = aA.data?.bundledCodexAppToolsPlugin, aa[48] = aA.data?.featuredPluginIds, aa[49] = aA.data?.plugins, aa[50] = F, aa[51] = K, aa[52] = N, aa[53] = O, aa[54] = P) : (F = aa[50], K = aa[51], N = aa[52], O = aa[53], P = aa[54]), aa[55] !== K ? (R = $(K), aa[55] = K, aa[56] = R) : R = aa[56];
                let aB = aA.data?.marketplaceLoadErrors ?? I,
                    aC = aA.data?.marketplaces ?? L,
                    aD = aA.error ? aA.error.message : null,
                    aE = am && ao.isLoading || aA.isLoading || au.isLoading || aw.isLoading || ar.isLoading || as.isLoading,
                    aF = am && ao.isFetching || aA.isFetching || ar.isFetching;
                return aa[57] !== F || aa[58] !== aA ? (S = async () => {
                    let a = await aA.refetch(),
                        b = a.data?.plugins ?? M;
                    return {
                        availablePlugins: Z({
                            plugins: b,
                            ...F
                        }),
                        installedPlugins: $(b)
                    }
                }, aa[57] = F, aa[58] = aA, aa[59] = S) : S = aa[59], aa[60] !== ai ? (T = () => ai(E.a), aa[60] = ai, aa[61] = T) : T = aa[61], aa[62] !== a || aa[63] !== ai ? (U = async () => {
                    G.add(a), await (async () => {
                        await ai(E.a)
                    })().finally(() => {
                        G.delete(a)
                    })
                }, aa[62] = a, aa[63] = ai, aa[64] = U) : U = aa[64], aa[65] !== N || aa[66] !== O || aa[67] !== P || aa[68] !== R || aa[69] !== aB || aa[70] !== aC || aa[71] !== aD || aa[72] !== aE || aa[73] !== aF || aa[74] !== S || aa[75] !== T || aa[76] !== U ? (_ = {
                    availablePlugins: N,
                    bundledCodexAppToolsPlugin: O,
                    featuredPluginIds: P,
                    installedPlugins: R,
                    marketplaceLoadErrors: aB,
                    marketplaces: aC,
                    errorMessage: aD,
                    isLoading: aE,
                    isFetching: aF,
                    refetch: S,
                    reload: T,
                    forceReload: U
                }, aa[65] = N, aa[66] = O, aa[67] = P, aa[68] = R, aa[69] = aB, aa[70] = aC, aa[71] = aD, aa[72] = aE, aa[73] = aF, aa[74] = S, aa[75] = T, aa[76] = U, aa[77] = _) : _ = aa[77], _
            },
            w: function(a) {
                let b, c, f, g, h = (0, d.c)(10),
                    {
                        enabled: i,
                        hostId: j,
                        marketplaceKind: k
                    } = a;
                h[0] !== j ? (b = {
                    hostId: j
                }, h[0] = j, h[1] = b) : b = h[1];
                let m = (0, q.a)(b),
                    n = (0, l.b)(j);
                h[2] !== n?.authMethod || h[3] !== k ? (c = "local" === k || (0, B.a)(n?.authMethod ?? null), h[2] = n?.authMethod, h[3] = k, h[4] = c) : c = h[4];
                let o = c;
                h[5] !== j || h[6] !== k ? (f = {
                    hostId: j,
                    marketplaceKind: k
                }, h[5] = j, h[6] = k, h[7] = f) : f = h[7];
                let p = (void 0 === i || i) && m && o;
                return h[8] !== p ? (g = {
                    enabled: p
                }, h[8] = p, h[9] = g) : g = h[9], (0, e.x)(R, f, g)
            }
        })
    }),
    haw8: (function() {
        "function" != typeof AbortSignal.any && Object.defineProperty(AbortSignal, "any", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function(a) {
                let b = new AbortController,
                    c = a => {
                        b.abort(a.target.reason)
                    };
                for (let d of a) {
                    if (d.aborted) {
                        b.abort(d.reason);
                        break
                    }
                    d.addEventListener("abort", c, {
                        signal: b.signal
                    })
                }
                return b.signal
            }
        }), "function" != typeof AbortSignal.timeout && Object.defineProperty(AbortSignal, "timeout", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function(a) {
                let b = new AbortController;
                return globalThis.setTimeout(() => b.abort(new DOMException("The operation timed out.", "TimeoutError")), a), b.signal
            }
        })
    }),
    ipcG: (function(a, b, c) {
        let d, e = "u" < typeof Element || "u" < typeof Document ? [] : [Element.prototype, Document.prototype];

        function f(a) {
            return null != d && a.ariaNotify === d
        }
        c.d(b, {}, {
            a: function() {
                return e.some(f)
            },
            b: function(a) {
                for (let b of (d = a, e)) Reflect.has(b, "ariaNotify") || Object.defineProperty(b, "ariaNotify", {
                    value: a,
                    configurable: !0,
                    writable: !0
                })
            },
            c: function() {
                for (let a of e) f(a) && Reflect.deleteProperty(a, "ariaNotify")
            }
        })
    }),
    BX2G: (function(a, b, c) {
        let d;
        var e = c("ipcG");

        function f(a, b) {
            g().then(c => {
                c && this.ariaNotify(a, b)
            })
        }

        function g() {
            return null == d && (d = (globalThis.scheduler?.yield?.() ?? new Promise(a => setTimeout(a, 0))).then(() => c.e(959887).then(() => c("EHyc"))).then(a => a.installed).catch(() => ((0, e.b)(f), d = void 0, !1))), d
        }(0, e.b)(f), c.d(b, {}, {
            a: function() {
                (0, e.a)() && g()
            }
        })
    }),
    bW5B: (function(a, b, c) {
        c("eqYI"), c("yCBR")
    }),
    tFDr: (function(a, b, c) {
        c("UDML"), c("SDCy")
    }),
    UjfB: (function(a, b, c) {
        c("UDML"), c("mlfH")
    }),
    kzsq: (function(a, b, c) {
        c.a(a, async function(a, b) {
            try {
                let a = document.documentElement;
                ["feed", "grid", "itemcontrols", "noitemcontrols"].every(b => a.focusGroup?.supports(b)) || (await c.e(831843).then(() => c("XnnB"))).polyfillBodyAndObserve(), b()
            } catch (a) {
                b(a)
            }
        }, 1)
    }),
    D5xp: (function(a, b, c) {
        c.a(a, async function(a, b) {
            try {
                let a = ! function() {
                    try {
                        return "review" === new URL("codex://review").hostname
                    } catch {
                        return !1
                    }
                }();
                if (a || "function" != typeof URL.parse || "function" != typeof URL.canParse) {
                    let {
                        polyfillUrl: b
                    } = await c.e(329784).then(() => c("TsR8"));
                    await b(a)
                }("function" != typeof URL.createObjectURL || "function" != typeof URL.revokeObjectURL) && "u" > typeof webkitURL && await c.e(247248).then(() => c.t("jPdZ", 23)), b()
            } catch (a) {
                b(a)
            }
        }, 1)
    }),
    T5AA: (function(a, b, c) {
        c.d(b, {}, {
            a: function() {
                return null
            }
        })
    })
};