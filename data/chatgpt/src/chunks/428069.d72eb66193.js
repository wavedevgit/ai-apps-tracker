export const __rspack_esm_ids = [428069];
export const __webpack_modules__ = {
    VVkm: (function(a, b, c) {
        var d = c("QosV"),
            e = c("T0Rc"),
            f = c("GaA7"),
            g = c("rvFo");

        function h(a) {
            return ["new-chat-suggestion-source", "has-accessible-enabled-ambient-suggestion-app", a]
        }
        c.d(b, {}, {
            a: function(a) {
                let {
                    areNewChatPageSuggestionsLoading: b,
                    hasProjectRoot: c,
                    shouldShowHomeSuggestions: d,
                    shouldUseCuratedNewChatPageSuggestions: e
                } = a;
                return !b && (!!e || c && d)
            },
            b: h,
            c: function(a) {
                let {
                    debugOverride: b,
                    experimentEligible: c,
                    personalized: d
                } = a;
                return b ?? (c && d ? "generated" : "curated")
            },
            d: function(a) {
                let {
                    canUsePersonalizedSuggestions: b,
                    generatedSuggestionsEnabled: c,
                    hasGeneratedSuggestionsReadSettled: d,
                    shouldUseCuratedNewChatPageSuggestions: e
                } = a;
                return !!e || !c || !b || d
            },
            e: function(a) {
                var b, c;
                let i, j, k, l = (0, d.c)(9),
                    {
                        accountId: m,
                        enabled: n,
                        hostId: o
                    } = a;
                return l[0] !== m || l[1] !== o ? (b = o, c = m, i = [...h(b), c], l[0] = m, l[1] = o, l[2] = i) : i = l[2], l[3] !== o ? (j = async () => await f.b.ambientSuggestions?.hasAccessibleAndEnabledApp({
                    hostId: o
                }) ?? !1, l[3] = o, l[4] = j) : j = l[4], l[5] !== n || l[6] !== i || l[7] !== j ? (k = {
                    queryKey: i,
                    queryFn: j,
                    enabled: n,
                    retry: !1,
                    staleTime: g.b.FIVE_MINUTES
                }, l[5] = n, l[6] = i, l[7] = j, l[8] = k) : k = l[8], (0, e.a)(k)
            }
        })
    }),
    zvpH: (function(a, b, c) {
        var d = c("GaA7"),
            e = c("q77y");
        let f = ["vscode", "ambient-suggestions"],
            g = ["vscode", "ambient-suggestions-refresh"];
        c.d(b, {}, {
            a: f,
            b: g,
            c: function(a) {
                return [...f, JSON.stringify(a)]
            },
            d: function(a) {
                return [...g, JSON.stringify(a)]
            },
            e: async function(a, b) {
                let c = d.b?.ambientSuggestions;
                null != c && await (0, e.a)(c.refresh(a), b)
            }
        })
    }),
    FROa: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("zd8w"),
            h = c("oyxz"),
            i = c("wD9O"),
            j = c("JNtf"),
            k = c("mUDD"),
            l = c("bf6R");

        function m(a) {
            let b, c, f, g, k = (0, e.c)(10),
                {
                    children: m,
                    open: o,
                    onOpenChange: p,
                    style: q
                } = a,
                r = (0, i.c)(),
                s = `min(22rem, calc((100dvw - 2rem) / ${r}))`;
            return k[0] !== q || k[1] !== s ? (b = {
                "aria-describedby": void 0,
                style: {
                    maxWidth: s,
                    ...q
                }
            }, k[0] = q, k[1] = s, k[2] = b) : b = k[2], k[3] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(l.Pj, {
                className: "text-codex-icon"
            }), k[3] = c) : c = k[3], k[4] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, d.jsxs)(j.c, {
                autoFocus: !0,
                className: "absolute end-6 top-6 flex size-9 cursor-interaction items-center justify-center rounded-full bg-(--app-color-background-elevated-tertiary-opaque) leading-none no-drag hover:bg-secondary-ghost-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                onClick: n,
                children: [c, (0, d.jsx)("span", {
                    className: "sr-only",
                    children: (0, d.jsx)(h.a, {
                        id: "codex.dialog.closeButton",
                        defaultMessage: "Close dialog"
                    })
                })]
            }), k[4] = f) : f = k[4], k[5] !== m || k[6] !== p || k[7] !== o || k[8] !== b ? (g = (0, d.jsxs)(j.a, {
                open: o,
                onOpenChange: p,
                showDialogClose: !1,
                contentProps: b,
                children: [m, f]
            }), k[5] = m, k[6] = p, k[7] = o, k[8] = b, k[9] = g) : g = k[9], g
        }

        function n(a) {
            return a.stopPropagation()
        }
        c.d(b, {}, {
            a: "min(720px, calc(100vh - 2rem))",
            b: function(a) {
                let b, c, h, j, k, l = (0, e.c)(17),
                    {
                        children: n,
                        loading: o,
                        onOpenChange: p
                    } = a,
                    [q, r] = (0, g.useState)(null),
                    s = (0, i.c)();
                l[0] !== q || l[1] !== s ? (b = null == q ? void 0 : {
                    height: `min(${q}px, calc((100dvh - 2rem) / ${s}))`
                }, l[0] = q, l[1] = s, l[2] = b) : b = l[2], l[3] !== q || l[4] !== o ? (c = a => {
                    !o && null == q && null != a && a.offsetHeight > 0 && r(a.offsetHeight)
                }, l[3] = q, l[4] = o, l[5] = c) : c = l[5];
                let t = (o || null != q) && "h-full",
                    u = null != q && "overflow-y-auto";
                return l[6] !== t || l[7] !== u ? (h = (0, f.b)(t, u), l[6] = t, l[7] = u, l[8] = h) : h = l[8], l[9] !== n || l[10] !== c || l[11] !== h ? (j = (0, d.jsx)("div", {
                    ref: c,
                    className: h,
                    children: n
                }), l[9] = n, l[10] = c, l[11] = h, l[12] = j) : j = l[12], l[13] !== p || l[14] !== b || l[15] !== j ? (k = (0, d.jsx)(m, {
                    open: !0,
                    onOpenChange: p,
                    style: b,
                    children: j
                }), l[13] = p, l[14] = b, l[15] = j, l[16] = k) : k = l[16], k
            },
            c: m,
            d: function(a) {
                let b, c, f, g = (0, e.c)(9);
                return g[0] !== a.icon ? (b = (0, d.jsx)("span", {
                    className: "relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-[calc(var(--spacing)*5)] border border-subtle bg-surface shadow-sm",
                    children: a.icon
                }), g[0] = a.icon, g[1] = b) : b = g[1], g[2] !== a.subtitle || g[3] !== a.subtitleClassName || g[4] !== a.title ? (c = (0, d.jsx)(k.d, {
                    className: "w-full",
                    title: a.title,
                    titleSize: "base",
                    titleClassName: "text-lg leading-6.5",
                    subtitle: a.subtitle,
                    subtitleSize: "sm",
                    subtitleTone: "secondary",
                    subtitleClassName: a.subtitleClassName
                }), g[2] = a.subtitle, g[3] = a.subtitleClassName, g[4] = a.title, g[5] = c) : c = g[5], g[6] !== b || g[7] !== c ? (f = (0, d.jsxs)("div", {
                    className: "flex w-full flex-col items-center gap-4 text-center select-none",
                    children: [b, c]
                }), g[6] = b, g[7] = c, g[8] = f) : f = g[8], f
            }
        })
    }),
    TC6X: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("oyxz"),
            g = c("Sm6l"),
            h = c("JNtf"),
            i = c("mUDD"),
            j = c("FROa"),
            k = c("lmaZ");

        function l(a) {
            let b, c, j, l, m, n, o, p, q, r, s, t, u = (0, e.c)(27),
                {
                    isPending: v,
                    embedded: w,
                    isFetching: x,
                    onOpenChange: y,
                    onRetry: z
                } = a,
                A = void 0 !== w && w,
                B = A ? "h2" : h.f,
                C = A ? "p" : h.e;
            if (v) {
                let a;
                return u[0] !== A ? (a = (0, d.jsx)(k.a, {
                    embedded: A
                }), u[0] = A, u[1] = a) : a = u[1], a
            }
            return u[2] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(f.a, {
                id: "beacons.connectApp.loadError.title",
                defaultMessage: "Couldn\u2019t load connector"
            }), u[2] = b) : b = u[2], u[3] !== B ? (c = (0, d.jsx)(B, {
                children: b
            }), u[3] = B, u[4] = c) : c = u[4], u[5] === Symbol.for("react.memo_cache_sentinel") ? (j = (0, d.jsx)(f.a, {
                id: "beacons.connectApp.loadError.description",
                defaultMessage: "Try again, or cancel and return to the previous page"
            }), u[5] = j) : j = u[5], u[6] !== C ? (l = (0, d.jsx)(C, {
                children: j
            }), u[6] = C, u[7] = l) : l = u[7], u[8] !== c || u[9] !== l ? (m = (0, d.jsx)(i.d, {
                title: c,
                subtitle: l
            }), u[8] = c, u[9] = l, u[10] = m) : m = u[10], u[11] !== y ? (n = () => y(!1), u[11] = y, u[12] = n) : n = u[12], u[13] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, d.jsx)(f.a, {
                id: "beacons.connectApp.loadError.button.cancel",
                defaultMessage: "Cancel"
            }), u[13] = o) : o = u[13], u[14] !== x || u[15] !== n ? (p = (0, d.jsx)(g.a, {
                color: "secondary",
                disabled: x,
                onClick: n,
                type: "button",
                children: o
            }), u[14] = x, u[15] = n, u[16] = p) : p = u[16], u[17] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, d.jsx)(f.a, {
                id: "beacons.connectApp.loadError.button.retry",
                defaultMessage: "Retry"
            }), u[17] = q) : q = u[17], u[18] !== x || u[19] !== z ? (r = (0, d.jsx)(g.a, {
                color: "primary",
                loading: x,
                onClick: z,
                type: "button",
                children: q
            }), u[18] = x, u[19] = z, u[20] = r) : r = u[20], u[21] !== r || u[22] !== p ? (s = (0, d.jsxs)(i.c, {
                children: [p, r]
            }), u[21] = r, u[22] = p, u[23] = s) : s = u[23], u[24] !== s || u[25] !== m ? (t = (0, d.jsxs)(i.b, {
                className: "select-none",
                children: [m, s]
            }), u[24] = s, u[25] = m, u[26] = t) : t = u[26], t
        }
        c.d(b, {}, {
            a: l,
            b: function(a) {
                let b, c, f = (0, e.c)(6);
                return f[0] !== a ? (b = (0, d.jsx)(l, {
                    ...a
                }), f[0] = a, f[1] = b) : b = f[1], f[2] !== a.isPending || f[3] !== a.onOpenChange || f[4] !== b ? (c = (0, d.jsx)(j.b, {
                    loading: a.isPending,
                    onOpenChange: a.onOpenChange,
                    children: b
                }), f[2] = a.isPending, f[3] = a.onOpenChange, f[4] = b, f[5] = c) : c = f[5], c
            }
        })
    }),
    Sx5O: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("ecE5"),
            g = c("TC6X");
        c.d(b, {
            a: () => g.b
        }, {
            b: function(a) {
                let b, c = (0, e.c)(2);
                return c[0] !== a ? (b = (0, d.jsx)(f.a, {
                    ...a,
                    app: null
                }), c[0] = a, c[1] = b) : b = c[1], b
            }
        })
    }),
    IBgA: (function(a, b, c) {
        var d = c("QosV"),
            e = c("irkb"),
            f = c("xSOA"),
            g = c("Q840"),
            h = c("Qgfj"),
            i = c("Wf1j"),
            j = c("VVkm"),
            k = c("Dgwo"),
            l = c("HUHI"),
            m = c("OiCI"),
            n = c("SGsN"),
            o = c("a4MG"),
            p = c("sLlu"),
            q = c("OWtl"),
            r = c("kfGJ"),
            s = c("WFY2");
        let t = (0, h.f)({
            enableSuccess: {
                id: "apps.enable.success",
                defaultMessage: "{appName} app enabled"
            },
            disableSuccess: {
                id: "apps.disable.success",
                defaultMessage: "{appName} app disabled"
            },
            updateError: {
                id: "apps.update.error",
                defaultMessage: "Failed to update app"
            }
        });
        c.d(b, {}, {
            a: function(a) {
                let b, c, h, u, v, w, x, y, z = (0, d.c)(35),
                    A = a?.hostId ?? r.a,
                    B = (0, g.y)(q.a),
                    C = (0, g.z)(m.a),
                    D = (0, e.c)(),
                    E = (0, p.b)(),
                    F = (0, i.a)(),
                    G = C ?? void 0;
                z[0] !== A || z[1] !== G ? (b = (0, l.g)(A, G), z[0] = A, z[1] = G, z[2] = b) : b = z[2];
                let H = b;
                z[3] !== H || z[4] !== A || z[5] !== E ? (c = async () => {
                    await Promise.all([E((0, j.b)(A)), E(H), E([...o.b, A]), E([...o.c, A]), E(o.f), E(["user-saved-config"])])
                }, z[3] = H, z[4] = A, z[5] = E, z[6] = c) : c = z[6];
                let I = c;
                z[7] !== A || z[8] !== D || z[9] !== B ? (h = async a => {
                    let {
                        appId: b,
                        enabled: c
                    } = a, d = await (0, o.m)(B, D, A);
                    if ("okOverridden" === (await (0, k.b)(B, A).sendRequest("config/batchWrite", {
                            edits: function(a) {
                                let {
                                    appId: b,
                                    enabled: c
                                } = a;
                                return [{
                                    keyPath: `apps.${b}.enabled`,
                                    value: c,
                                    mergeStrategy: "upsert"
                                }]
                            }({
                                appId: b,
                                enabled: c
                            }),
                            filePath: d?.filePath ?? null,
                            expectedVersion: d?.expectedVersion ?? null,
                            reloadUserConfig: !0
                        })).status) throw Error("App setting is overridden by project configuration")
                }, z[7] = A, z[8] = D, z[9] = B, z[10] = h) : h = z[10], z[11] !== H || z[12] !== D ? (u = async a => {
                    let {
                        appId: b,
                        enabled: c
                    } = a;
                    await D.cancelQueries({
                        queryKey: H
                    });
                    let d = D.getQueryData(H);
                    return d && D.setQueryData(H, d.map(a => a.id !== b || a.isEnabled === c ? a : {
                        ...a,
                        isEnabled: c
                    })), {
                        previousApps: d
                    }
                }, z[11] = H, z[12] = D, z[13] = u) : u = z[13], z[14] !== H || z[15] !== F || z[16] !== E || z[17] !== D || z[18] !== B ? (v = async (a, b, c) => {
                    let {
                        appId: d,
                        appName: e,
                        enabled: f
                    } = b;
                    if (f && c?.previousApps?.find(a => a.id === d)?.isEnabled === !1) {
                        await E(H);
                        let a = D.getQueryData(H)?.find(a => a.id === d);
                        if (a?.isEnabled === !1) throw Error("App remains disabled after updating its configuration")
                    }
                    let g = e ?? D.getQueryData(H)?.find(a => a.id === d)?.name ?? d;
                    B.get(n.f).success(F.formatMessage(f ? t.enableSuccess : t.disableSuccess, {
                        appName: g
                    }))
                }, z[14] = H, z[15] = F, z[16] = E, z[17] = D, z[18] = B, z[19] = v) : v = z[19], z[20] !== H || z[21] !== F || z[22] !== D || z[23] !== B ? (w = (a, b, c) => {
                    s.a.error("Failed to update app enablement", {
                        safe: {},
                        sensitive: {
                            error: a
                        }
                    }), B.get(n.f).danger(F.formatMessage(t.updateError), {
                        errorAnalytics: {
                            toastId: "appsAvailability.onError.updateError"
                        }
                    }), c?.previousApps && D.setQueryData(H, c.previousApps)
                }, z[20] = H, z[21] = F, z[22] = D, z[23] = B, z[24] = w) : w = z[24], z[25] !== I || z[26] !== h || z[27] !== u || z[28] !== v || z[29] !== w ? (x = {
                    mutationFn: h,
                    onMutate: u,
                    onSuccess: v,
                    onError: w,
                    onSettled: I
                }, z[25] = I, z[26] = h, z[27] = u, z[28] = v, z[29] = w, z[30] = x) : x = z[30];
                let J = (0, f.a)(x),
                    K = J.isPending ? J.variables?.appId ?? null : null;
                return z[31] !== J.isPending || z[32] !== J.mutateAsync || z[33] !== K ? (y = {
                    setAppEnabled: J.mutateAsync,
                    isUpdating: J.isPending,
                    updatingAppId: K
                }, z[31] = J.isPending, z[32] = J.mutateAsync, z[33] = K, z[34] = y) : y = z[34], y
            }
        })
    }),
    GP9j: (function(a, b, c) {
        let d = (0, (c("Qgfj")).f)({
            signInWithSso: {
                id: "composer.connectorAuth.signInWithSso.button.label",
                defaultMessage: "Sign in with SSO"
            },
            signInDescription: {
                id: "composer.connectorAuth.signInWithSso.start.description",
                defaultMessage: "Sign in with your workspace account to use {connectorName}."
            },
            openingSignIn: {
                id: "composer.connectorAuth.signInWithSso.opening.button.label",
                defaultMessage: "Opening sign-in\u2026"
            },
            continueAfterSso: {
                id: "composer.connectorAuth.signInWithSso.return.description",
                defaultMessage: "After signing in, return here and select Continue. <signIn>Open sign-in again</signIn>"
            },
            workspaceSso: {
                id: "composer.connectorAuth.companyAccount.retry.description",
                defaultMessage: "To use {connectorName}, open ChatGPT from your company\u2019s app launcher or use the ChatGPT sign-in link from your IT team. Then return here and select Continue. <signIn>Try opening sign-in again</signIn>"
            },
            continue: {
                id: "composer.connectorAuth.continue.button.label",
                defaultMessage: "Continue"
            }
        });
        c.d(b, {}, {
            a: d
        })
    }),
    oxjR: (function(a, b, c) {
        var d = c("DBCl"),
            e = c("VVkm"),
            f = c("zvpH"),
            g = c("sLlu"),
            h = c("oo2L");
        let i = [null, "science"];

        function j(a) {
            return a.isAccessible && a.isEnabled
        }
        c.d(b, {}, {
            a: async function(a) {
                let {
                    hostId: b,
                    queryClient: c,
                    refreshAppsList: k
                } = a, l = c.getQueriesData({
                    queryKey: ["apps", "list", b]
                }), m = l.some(a => {
                    let [, b] = a;
                    return null != b
                }) ? l.flatMap(a => {
                    let [, b] = a;
                    return b ?? []
                }) : void 0, [n] = await Promise.all([k(), (0, g.a)(c, h.a)]);
                return ! function(a) {
                    let {
                        previousApps: b,
                        nextApps: c
                    } = a;
                    return null != b && !b.some(j) && c.some(j)
                }({
                    previousApps: m,
                    nextApps: n
                }) || (await (0, g.a)(c, (0, e.b)(b)), await Promise.all(i.map(a => (0, f.e)({
                    domain: a,
                    hostId: b,
                    projectRoot: (0, d.af)(d.ld),
                    mode: "first-plugin-connect"
                }))), await Promise.all([c.invalidateQueries({
                    queryKey: f.a
                }), c.invalidateQueries({
                    queryKey: f.b
                })])), n
            }
        })
    }),
    iQ2O: (function(a, b, c) {
        c.d(b, {
            a: () => s
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("zd8w"),
            h = c("oyxz"),
            i = c("OWtl"),
            j = c("GP9j"),
            k = c("DBCl"),
            l = c("ny3N"),
            m = c("OiCI"),
            n = c("Cslg"),
            o = c("Ot7V"),
            p = c("ReGc"),
            q = c("oo2L"),
            r = c("HFSu");

        function s(a) {
            let b, c, s, t, u, v, w, x, y = (0, e.c)(35),
                {
                    children: z,
                    connectorId: A,
                    connectorName: B,
                    disabled: C,
                    onContinue: D
                } = a,
                E = (0, f.y)(i.a),
                [F, G] = (0, g.useState)("idle"),
                [H, I] = (0, g.useState)(null);
            y[0] !== H ? (b = () => () => H?.abort(), y[0] = H, y[1] = b) : b = y[1], y[2] !== H || y[3] !== C ? (c = [H, C], y[2] = H, y[3] = C, y[4] = c) : c = y[4], (0, g.useEffect)(b, c), y[5] !== H || y[6] !== A || y[7] !== C || y[8] !== E ? (s = async () => {
                if (C || null != H) return;
                let a = new AbortController;
                I(a);
                let b = await async function(a, b, c) {
                    let d, e = a.get(m.b),
                        f = a.get(n.j);
                    if (!e || !f) return !1;
                    let g = () => d?.close();
                    try {
                        if (d = (0, l.e)("popup"), null === d) return !1;
                        c.addEventListener("abort", g, {
                            once: !0
                        });
                        let h = await async function(a) {
                            let {
                                accountId: b,
                                userId: c,
                                connectorId: d,
                                signal: e
                            } = a;
                            return (await r.CodexRequest.safeGet("/accounts/{workspaceId}/xaa/sign-in", {
                                parameters: {
                                    path: {
                                        workspaceId: b
                                    },
                                    query: {
                                        connector_id: d
                                    }
                                },
                                surface: "connector_setup",
                                expectedIdentity: {
                                    accountId: b,
                                    userId: c
                                },
                                additionalHeaders: {
                                    "X-OpenAI-Use-Sheep": "1",
                                    [q.b]: (0, q.j)(),
                                    "ChatGPT-Account-Id": b
                                },
                                retry: "never",
                                signal: e
                            })).sso_connection_id
                        }({
                            accountId: e,
                            userId: f,
                            connectorId: b,
                            signal: c
                        }), i = d ? window.location.origin : (await a.query.getOrFetch(p.a)).chatGptDesktopAuthOrigin ?? k.zb;
                        if (c.throwIfAborted(), a.get(m.b) !== e || a.get(n.j) !== f) return d?.close(), !1;
                        let j = new URL("/auth/login", i);
                        if (j.searchParams.set("sso", "true"), j.searchParams.set("connection", h), j.searchParams.set("wId", e), d) {
                            if (d.closed) return !1;
                            return d.opener = null, d.location.replace(j.href), !0
                        }
                        return (0, o.f)({
                            href: j.href,
                            initiator: "open_in_browser_bridge",
                            openTarget: "external-browser"
                        })
                    } catch {
                        return d?.close(), !1
                    } finally {
                        c.removeEventListener("abort", g)
                    }
                }(E, A, a.signal);
                I(null), a.signal.aborted || G(b ? "opened" : "manual")
            }, y[5] = H, y[6] = A, y[7] = C, y[8] = E, y[9] = s) : s = y[9];
            let J = s;
            y[10] !== H || y[11] !== C || y[12] !== J ? (t = a => (0, d.jsx)("button", {
                type: "button",
                className: "cursor-interaction underline underline-offset-2",
                disabled: C || null != H,
                onClick: () => void J(),
                children: a
            }, "sign-in"), y[10] = H, y[11] = C, y[12] = J, y[13] = t) : t = y[13];
            let K = t;
            if ("opened" === F) {
                let a;
                y[14] !== K ? (a = (0, d.jsx)(h.a, {
                    ...j.a.continueAfterSso,
                    values: {
                        signIn: K
                    }
                }), y[14] = K, y[15] = a) : a = y[15], u = a
            } else if ("manual" === F) {
                let a;
                y[16] !== B || y[17] !== K ? (a = (0, d.jsx)(h.a, {
                    ...j.a.workspaceSso,
                    values: {
                        connectorName: B,
                        signIn: K
                    }
                }), y[16] = B, y[17] = K, y[18] = a) : a = y[18], u = a
            } else {
                let a;
                y[19] !== B ? (a = (0, d.jsx)(h.a, {
                    ...j.a.signInDescription,
                    values: {
                        connectorName: B
                    }
                }), y[19] = B, y[20] = a) : a = y[20], u = a
            }
            if ("idle" !== F) {
                let a, b;
                return y[21] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(h.a, {
                    ...j.a.continue
                }), y[21] = a) : a = y[21], y[22] !== z || y[23] !== u || y[24] !== D ? (b = z({
                    description: u,
                    primaryLabel: a,
                    onPrimaryAction: D
                }), y[22] = z, y[23] = u, y[24] = D, y[25] = b) : b = y[25], b
            }
            return y[26] !== H ? (v = null != H ? (0, d.jsx)(h.a, {
                ...j.a.openingSignIn
            }) : (0, d.jsx)(h.a, {
                ...j.a.signInWithSso
            }), y[26] = H, y[27] = v) : v = y[27], y[28] !== J ? (w = () => void J(), y[28] = J, y[29] = w) : w = y[29], y[30] !== z || y[31] !== u || y[32] !== v || y[33] !== w ? (x = z({
                description: u,
                primaryLabel: v,
                onPrimaryAction: w
            }), y[30] = z, y[31] = u, y[32] = v, y[33] = w, y[34] = x) : x = y[34], x
        }
    }),
    atrt: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("irkb"),
            g = c("Q840"),
            h = c("DBCl"),
            i = c("I3F6"),
            j = c("zd8w"),
            k = c("Qgfj"),
            l = c("Wf1j"),
            m = c("oyxz"),
            n = c("Dgwo"),
            o = c("oo2L"),
            p = c("Sx5O"),
            q = c("yGJ5"),
            r = c("NcQ7"),
            s = c("GP9j"),
            t = c("CMv2"),
            u = c("QSD9"),
            v = c("pxeg"),
            w = c("PraM"),
            x = c("BQbE"),
            y = c("HUHI"),
            z = c("yxN2"),
            A = c("iQ2O"),
            B = c("OiCI"),
            C = c("AcSY"),
            D = c("FvYa"),
            E = c("Ot7V"),
            F = c("HOLv"),
            G = c("SGsN"),
            H = c("OWtl"),
            I = c("ecE5"),
            J = c("kfGJ"),
            K = c("hZax"),
            L = c("WFY2"),
            M = c("Hl7m"),
            N = c("CxX8");
        let O = (0, k.f)({
            reconnect: {
                id: "composer.connectorAuth.reconnect.button.label",
                defaultMessage: "Reconnect"
            },
            connect: {
                id: "composer.connectorAuth.connect.button.label",
                defaultMessage: "Connect"
            },
            updateAccess: {
                id: "composer.connectorAuth.updateAccess.button.label",
                defaultMessage: "Update access"
            },
            missingConnectionDescription: {
                id: "composer.connectorAuth.missingConnection.description",
                defaultMessage: "ChatGPT needs access to {connectorName} to help with this request"
            },
            missingScopesDescription: {
                id: "composer.connectorAuth.missingScopes.description",
                defaultMessage: "Your current connection doesn't include the permissions needed for this request."
            },
            reconnectDescription: {
                id: "composer.connectorAuth.reconnect.description",
                defaultMessage: "Your {connectorName} connection has expired. Reconnect it before ChatGPT can use it for this request."
            }
        });
        c.d(b, {}, {
            a: function(a) {
                let b, c, k, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am = (0, e.c)(137),
                    {
                        conversationId: an,
                        hostId: ao,
                        requestId: ap,
                        auth: aq
                    } = a,
                    ar = (0, g.y)(H.a),
                    as = (0, l.a)(),
                    at = (0, f.c)(),
                    au = (0, K.i)();
                am[0] === Symbol.for("react.memo_cache_sentinel") ? (b = {
                    preview: !1
                }, am[0] = b) : b = am[0];
                let {
                    data: av
                } = (0, C.f)(void 0, b), aw = (0, g.z)(G.f), [ax, ay] = (0, j.useState)(!1), [az, aA] = (0, j.useState)(!1), [aB, aC] = (0, j.useState)(!1), aD = (0, j.useRef)(!1), aE = ao === h.$b ? J.a : ao;
                am[1] !== aE ? (c = {
                    hostId: aE
                }, am[1] = aE, am[2] = c) : c = am[2];
                let {
                    data: aF,
                    hardRefetchAppsList: aG,
                    isPending: aH
                } = (0, y.m)(c);
                am[3] !== aF ? (k = void 0 === aF ? [] : aF, am[3] = aF, am[4] = k) : k = am[4];
                let aI = k;
                am[5] !== aq.connector.connector_id ? (P = [aq.connector.connector_id], am[5] = aq.connector.connector_id, am[6] = P) : P = am[6], am[7] !== aE || am[8] !== P ? (Q = {
                    appIds: P,
                    hostId: aE
                }, am[7] = aE, am[8] = P, am[9] = Q) : Q = am[9];
                let {
                    data: aJ
                } = (0, x.c)(Q);
                am[10] !== aJ ? (R = void 0 === aJ ? [] : aJ, am[10] = aJ, am[11] = R) : R = am[11];
                let aK = R;
                am[12] === Symbol.for("react.memo_cache_sentinel") ? (S = () => {
                    ay(!0)
                }, am[12] = S) : S = am[12], am[13] !== ao ? (T = {
                    hostId: ao,
                    oauthReferrer: "conversation_auth",
                    onExternalConnectStarted: S
                }, am[13] = ao, am[14] = T) : T = am[14];
                let {
                    clearConnectingApp: aL,
                    clearPendingAppConnect: aM,
                    connectingApp: aN,
                    handleAppConnectOAuthStarted: aO,
                    handleConnectApp: aP,
                    handleOpenAppUrl: aQ,
                    isAppConnectPending: aR
                } = (0, z.a)(T), {
                    isAppConnectCallbackClaimed: aS
                } = (0, q.g)();
                am[15] !== aI || am[16] !== aq.connector.connector_id ? (U = aI.find(a => a.id === aq.connector.connector_id) ?? null, am[15] = aI, am[16] = aq.connector.connector_id, am[17] = U) : U = am[17];
                let aT = U;
                am[18] !== aq.connector.connector_id || am[19] !== aK ? (V = aK.find(a => a.id === aq.connector.connector_id) ?? null, am[18] = aq.connector.connector_id, am[19] = aK, am[20] = V) : V = am[20];
                let aU = V,
                    aV = aU?.name ?? aq.connector.connector_name,
                    aW = aq.connector.auth_reason,
                    aX = "xaa_enrollment_required" === aW,
                    aY = "missing_link" === aW;
                am[21] !== aq.connector.connector_id ? (W = (0, r.a)(aq.connector.connector_id), am[21] = aq.connector.connector_id, am[22] = W) : W = am[22];
                let aZ = null != W,
                    a$ = "oauth_upgrade_required" === aW;
                am[23] !== aq.connector.connector_id || am[24] !== av?.plan_type || am[25] !== aY || am[26] !== au ? (X = (0, t.d)({
                    planType: av?.plan_type,
                    connectorId: aq.connector.connector_id,
                    disableExposureLog: !0,
                    statsigClient: au
                }), Y = aY && null != (0, t.f)(aq.connector.connector_id, X), am[23] = aq.connector.connector_id, am[24] = av?.plan_type, am[25] = aY, am[26] = au, am[27] = X, am[28] = Y) : (X = am[27], Y = am[28]);
                let a_ = Y;
                am[29] !== aq.connector.connector_id || am[30] !== av?.plan_type || am[31] !== aY || am[32] !== au ? (Z = aY && (0, v.f)({
                    planType: av?.plan_type,
                    connectorId: aq.connector.connector_id,
                    disableExposureLog: !0,
                    statsigClient: au
                }), am[29] = aq.connector.connector_id, am[30] = av?.plan_type, am[31] = aY, am[32] = au, am[33] = Z) : Z = am[33];
                let a0 = Z,
                    a1 = a_ || a0;
                am[34] !== aq.connector.connector_id || am[35] !== an || am[36] !== ax || am[37] !== aS || am[38] !== aR || am[39] !== ap || am[40] !== aZ ? (_ = {
                    kind: "connector-auth-elicitation",
                    conversationId: an,
                    requestId: ap
                }, $ = aS(aq.connector.connector_id, _), aa = !aZ && (ax || aR(aq.connector.connector_id, _)), am[34] = aq.connector.connector_id, am[35] = an, am[36] = ax, am[37] = aS, am[38] = aR, am[39] = ap, am[40] = aZ, am[41] = $, am[42] = _, am[43] = aa) : ($ = am[41], _ = am[42], aa = am[43]);
                let a2 = aa;
                am[44] !== aY || am[45] !== a$ || am[46] !== a2 ? (ab = O.reconnect, a2 ? ab = s.a.continue : aY ? ab = O.connect : a$ && (ab = O.updateAccess), am[44] = aY, am[45] = a$, am[46] = a2, am[47] = ab) : ab = am[47], am[48] !== aq.connector.connector_id || am[49] !== aM || am[50] !== an || am[51] !== ao || am[52] !== as || am[53] !== ap || am[54] !== _ || am[55] !== ar || am[56] !== aw ? (ac = a => {
                    aD.current || (aD.current = !0, aC(!0), "decline" === a && aM({
                        appId: aq.connector.connector_id,
                        resumeTarget: _
                    }), (0, n.b)(ar, ao).replyWithMcpServerElicitationResponse(an, ap, (0, i.b)(a)).then(() => {
                        aM({
                            appId: aq.connector.connector_id,
                            resumeTarget: _
                        })
                    }).catch(() => {
                        aD.current = !1, aw.danger(as.formatMessage({
                            id: "composer.connectorAuth.responseError",
                            defaultMessage: "Could not submit your response. Please try again"
                        }), {
                            errorAnalytics: {
                                toastId: "composer.connectorAuth.responseError"
                            }
                        })
                    }).finally(() => aC(!1)))
                }, am[48] = aq.connector.connector_id, am[49] = aM, am[50] = an, am[51] = ao, am[52] = as, am[53] = ap, am[54] = _, am[55] = ar, am[56] = aw, am[57] = ac) : ac = am[57];
                let a3 = ac;
                am[58] !== a3 ? (ad = () => {
                    a3("decline")
                }, am[58] = a3, am[59] = ad) : ad = am[59];
                let a4 = ad;
                am[60] !== aq.connector.connector_id || am[61] !== aq.connector.install_url || am[62] !== aq.connector.link_id || am[63] !== aq.connector.requested_scopes || am[64] !== aq.url || am[65] !== aW || am[66] !== aE || am[67] !== aV || am[68] !== X || am[69] !== aO || am[70] !== aP || am[71] !== aQ || am[72] !== as || am[73] !== aH || am[74] !== aT || am[75] !== at || am[76] !== a3 || am[77] !== aZ || am[78] !== _ || am[79] !== ar || am[80] !== a_ || am[81] !== a0 || am[82] !== a1 || am[83] !== aw ? (ae = async () => {
                    aZ ? aA(!0) : a1 && aH || (aC(!0), await (async () => {
                        if (a1 && null != aT) {
                            let a = {
                                scope: ar,
                                appId: aq.connector.connector_id,
                                browserAccountId: (0, B.c)(ar) ?? void 0,
                                hostId: aE,
                                queryClient: at
                            };
                            if ((await (a_ ? (0, u.a)({
                                    ...a,
                                    connectors: X
                                }) : (0, w.a)(a))).length > 0) return void await aP(aT, {
                                forceInApp: !0,
                                googleOAuthBundlePrepared: a_,
                                microsoftOAuthBundlePrepared: a0
                            })
                        }
                        let a = {
                                id: aq.connector.connector_id,
                                installUrl: aT?.installUrl ?? aq.connector.install_url,
                                name: aV
                            },
                            b = !1;
                        switch ((await (0, o.t)({
                                scope: ar,
                                appConnectOptions: {
                                    connectorId: aq.connector.connector_id,
                                    oauthReferrer: "conversation_auth"
                                },
                                app: a,
                                authReason: aW,
                                fallbackUrl: aq.url,
                                linkId: aq.connector.link_id,
                                onOAuthStarted: (c, d) => {
                                    b = !0, aO({
                                        app: a,
                                        oauthFlowCorrelationId: d?.oauthFlowCorrelationId,
                                        redirectUrl: c,
                                        resumeTarget: _
                                    })
                                },
                                openInBrowser: a => {
                                    b ? (0, E.f)({
                                        disposition: "current-tab",
                                        href: a,
                                        initiator: "open_in_browser_bridge",
                                        openTarget: "external-browser"
                                    }) : aQ(a)
                                },
                                queryClient: at,
                                requestedScopes: aq.connector.requested_scopes
                            })).kind) {
                            case "requires-mfa":
                            case "requires-connection-form":
                                return void aA(!0);
                            case "connected-directly":
                                return void a3("accept");
                            case "oauth-started":
                                ay(!0);
                                return;
                            case "browser-fallback":
                                return void ay(!0);
                            case "failed":
                                return void aw.danger(as.formatMessage({
                                    id: "composer.connectorAuth.startError",
                                    defaultMessage: "Could not start connector authentication"
                                }), {
                                    errorAnalytics: {
                                        toastId: "composer.connectorAuth.startError"
                                    }
                                })
                        }
                    })().finally(() => {
                        aC(!1)
                    }))
                }, am[60] = aq.connector.connector_id, am[61] = aq.connector.install_url, am[62] = aq.connector.link_id, am[63] = aq.connector.requested_scopes, am[64] = aq.url, am[65] = aW, am[66] = aE, am[67] = aV, am[68] = X, am[69] = aO, am[70] = aP, am[71] = aQ, am[72] = as, am[73] = aH, am[74] = aT, am[75] = at, am[76] = a3, am[77] = aZ, am[78] = _, am[79] = ar, am[80] = a_, am[81] = a0, am[82] = a1, am[83] = aw, am[84] = ae) : ae = am[84];
                let a5 = ae;
                am[85] !== a5 || am[86] !== a3 || am[87] !== a2 ? (af = () => {
                    a2 ? a3("accept") : a5()
                }, am[85] = a5, am[86] = a3, am[87] = a2, am[88] = af) : af = am[88];
                let a6 = af;
                if (null != aq.connector.connection_consent) return null;
                if (am[89] !== aV || am[90] !== aY || am[91] !== a$) {
                    if (aY) {
                        let a;
                        am[93] !== aV ? (a = {
                            connectorName: aV
                        }, am[93] = aV, am[94] = a) : a = am[94], ag = (0, d.jsx)(m.a, {
                            ...O.missingConnectionDescription,
                            values: a
                        })
                    } else if (a$) ag = (0, d.jsx)(m.a, {
                        ...O.missingScopesDescription
                    });
                    else {
                        let a;
                        am[95] !== aV ? (a = {
                            connectorName: aV
                        }, am[95] = aV, am[96] = a) : a = am[96], ag = (0, d.jsx)(m.a, {
                            ...O.reconnectDescription,
                            values: a
                        })
                    }
                    am[89] = aV, am[90] = aY, am[91] = a$, am[92] = ag
                } else ag = am[92];
                am[97] !== aq.connector.connector_id || am[98] !== aV || am[99] !== ag || am[100] !== a4 || am[101] !== a6 || am[102] !== aH || am[103] !== $ || am[104] !== aB || am[105] !== aU?.iconUrl || am[106] !== aU?.iconUrlDark || am[107] !== ab || am[108] !== a1 ? (ah = a => (0, d.jsx)(M.a, {
                    icon: (0, d.jsx)(D.a, {
                        alt: aV,
                        className: "icon-md rounded-sm object-contain",
                        knownAppId: aq.connector.connector_id,
                        logoUrl: aU?.iconUrl,
                        logoDarkUrl: aU?.iconUrlDark,
                        fallback: (0, d.jsx)(F.a, {
                            className: "text-secondary",
                            "aria-hidden": !1,
                            asset: N.a
                        })
                    }),
                    title: aV,
                    description: a?.description ?? ag,
                    primaryActionLabel: a?.primaryLabel ?? (0, d.jsx)(m.a, {
                        ...ab
                    }),
                    isPrimaryActionLoading: aB || $ || a1 && aH,
                    onDecline: a4,
                    onSubmit: a?.onPrimaryAction ?? a6
                }), am[97] = aq.connector.connector_id, am[98] = aV, am[99] = ag, am[100] = a4, am[101] = a6, am[102] = aH, am[103] = $, am[104] = aB, am[105] = aU?.iconUrl, am[106] = aU?.iconUrlDark, am[107] = ab, am[108] = a1, am[109] = ah) : ah = am[109];
                let a7 = ah;
                return am[110] !== aq.connector.connector_id || am[111] !== aV || am[112] !== aB || am[113] !== a7 || am[114] !== a3 || am[115] !== aX ? (ai = aX ? (0, d.jsx)(A.a, {
                    connectorId: aq.connector.connector_id,
                    connectorName: aV,
                    disabled: aB,
                    onContinue: () => a3("accept"),
                    children: a7
                }) : a7(), am[110] = aq.connector.connector_id, am[111] = aV, am[112] = aB, am[113] = a7, am[114] = a3, am[115] = aX, am[116] = ai) : ai = am[116], am[117] !== aq.connector.connector_id || am[118] !== aq.connector.link_id || am[119] !== aW || am[120] !== aE || am[121] !== aG || am[122] !== a3 || am[123] !== az ? (aj = az ? (0, d.jsx)(p.b, {
                    oauthReferrer: "conversation_auth",
                    connectorId: aq.connector.connector_id,
                    connectorAuth: {
                        authReason: aW,
                        linkId: aq.connector.link_id
                    },
                    hostId: aE,
                    onConnected: () => {
                        a3("accept"), aG().catch(() => {
                            L.a.warning("Failed to refresh apps after connection", {
                                safe: {
                                    connectorId: aq.connector.connector_id
                                }
                            })
                        })
                    },
                    onOpenChange: a => {
                        a || aA(!1)
                    }
                }) : null, am[117] = aq.connector.connector_id, am[118] = aq.connector.link_id, am[119] = aW, am[120] = aE, am[121] = aG, am[122] = a3, am[123] = az, am[124] = aj) : aj = am[124], am[125] !== aL || am[126] !== aN || am[127] !== aE || am[128] !== aO || am[129] !== a3 || am[130] !== _ || am[131] !== a1 ? (ak = a1 ? (0, d.jsx)(I.a, {
                    oauthReferrer: "conversation_auth",
                    app: aN,
                    hostId: aE,
                    onConnected: () => {
                        a3("accept")
                    },
                    onExternalConnectStarted: () => {
                        ay(!0)
                    },
                    getOAuthResumeContext: () => ({
                        resumeTarget: _
                    }),
                    onOAuthStarted: a => {
                        aO({
                            ...a
                        }), ay(!0)
                    },
                    onOpenChange: a => {
                        a || aL()
                    }
                }) : null, am[125] = aL, am[126] = aN, am[127] = aE, am[128] = aO, am[129] = a3, am[130] = _, am[131] = a1, am[132] = ak) : ak = am[132], am[133] !== ai || am[134] !== aj || am[135] !== ak ? (al = (0, d.jsxs)(d.Fragment, {
                    children: [ai, aj, ak]
                }), am[133] = ai, am[134] = aj, am[135] = ak, am[136] = al) : al = am[136], al
            }
        })
    }),
    tjyI: (function(a, b, c) {
        c.d(b, {
            a: () => ac
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("irkb"),
            g = c("Q840"),
            h = c("DBCl"),
            i = c("I3F6"),
            j = c("Haiv"),
            k = c("zd8w"),
            l = c("Qgfj"),
            m = c("Wf1j"),
            n = c("oyxz"),
            o = c("Dgwo"),
            p = c("tl5a"),
            q = c("yGJ5"),
            r = c("NcQ7"),
            s = c("IBgA"),
            t = c("oxjR"),
            u = c("hOO0"),
            v = c("BQbE"),
            w = c("HUHI"),
            x = c("PYah"),
            y = c("yxN2"),
            z = c("OiCI"),
            A = c("Cslg"),
            B = c("FvYa"),
            C = c("HOLv"),
            D = c("Bbed"),
            E = c("SGsN"),
            F = c("rO8L"),
            G = c("an0a"),
            H = c("DdAl"),
            I = c("Pdbe"),
            J = c("a0aG"),
            K = c("aVTW"),
            L = c("loz7"),
            M = c("ntKy"),
            N = c("Hl7m"),
            O = c("OWtl"),
            P = c("odxv");

        function Q(a) {
            let b, c, f, h, i, k, l, m, o, p, q = (0, e.c)(25),
                {
                    onboarding: r
                } = a,
                s = (0, g.y)(O.a);
            q[0] !== r.plugin ? (b = (0, j.a)(r.plugin), q[0] = r.plugin, q[1] = b) : b = q[1];
            let t = b;
            q[2] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(H.a, {
                className: "icon-md text-secondary"
            }), q[2] = c) : c = q[2], q[3] !== r.plugin.logoDarkPath || q[4] !== r.plugin.logoPath || q[5] !== t ? (f = (0, d.jsx)(B.a, {
                alt: t,
                className: "icon-md rounded-sm object-contain",
                logoDarkUrl: r.plugin.logoDarkPath,
                logoUrl: r.plugin.logoPath,
                fallback: c
            }), q[3] = r.plugin.logoDarkPath, q[4] = r.plugin.logoPath, q[5] = t, q[6] = f) : f = q[6], q[7] !== t ? (h = (0, d.jsx)(n.a, {
                id: "plugins.onboarding.title",
                defaultMessage: "{pluginName} is ready for use",
                values: {
                    pluginName: t
                }
            }), q[7] = t, q[8] = h) : h = q[8], q[9] !== t ? (i = (0, d.jsx)(n.a, {
                id: "plugins.onboarding.description",
                defaultMessage: "Set up {pluginName} to start using it in ChatGPT",
                values: {
                    pluginName: t
                }
            }), q[9] = t, q[10] = i) : i = q[10], q[11] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, d.jsx)(n.a, {
                id: "plugins.onboarding.inline.setup",
                defaultMessage: "Setup"
            }), l = (0, d.jsx)(n.a, {
                id: "plugins.onboarding.inline.skip",
                defaultMessage: "Skip"
            }), q[11] = k, q[12] = l) : (k = q[11], l = q[12]);
            let u = "setup" === r.submittingAction,
                v = "skip" === r.submittingAction;
            return q[13] !== r || q[14] !== s ? (m = () => void(0, P.b)(s, r, "skip"), o = () => void(0, P.b)(s, r, "setup"), q[13] = r, q[14] = s, q[15] = m, q[16] = o) : (m = q[15], o = q[16]), q[17] !== m || q[18] !== o || q[19] !== f || q[20] !== h || q[21] !== i || q[22] !== u || q[23] !== v ? (p = (0, d.jsx)(N.a, {
                icon: f,
                title: h,
                description: i,
                primaryActionLabel: k,
                secondaryActionLabel: l,
                isPrimaryActionLoading: u,
                isSecondaryActionLoading: v,
                onDecline: m,
                onSubmit: o
            }), q[17] = m, q[18] = o, q[19] = f, q[20] = h, q[21] = i, q[22] = u, q[23] = v, q[24] = p) : p = q[24], p
        }
        var R = c("uzkw"),
            S = c("ugfi"),
            T = c("EEop"),
            U = c("cLdu"),
            V = c("ueue"),
            W = c("tSEg"),
            X = c("ecE5"),
            Y = c("nvO1"),
            Z = c("WFY2"),
            $ = c("CxX8");
        let _ = (0, D.a)(() => Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(731556)]).then(() => c("cUuO")).then(a => a.TeamAddPluginsModal));
        async function aa(a, b, c, d) {
            let e = new Set(Array.from(await (0, x.a)(a, b, c, "shared"), u.a));
            return d.every(a => a.some(a => e.has((0, u.a)(a))))
        }
        let ab = (0, l.f)({
            install: {
                id: "composer.toolSuggestion.install",
                defaultMessage: "Install"
            },
            enable: {
                id: "composer.toolSuggestion.enable",
                defaultMessage: "Enable"
            },
            continue: {
                id: "composer.toolSuggestion.continue",
                defaultMessage: "Continue"
            },
            pluginNotReady: {
                id: "composer.toolSuggestion.plugin.notReady",
                defaultMessage: "{toolName} is not ready yet. Finish setting it up, then continue"
            },
            missingPlugin: {
                id: "composer.toolSuggestion.plugin.missing",
                defaultMessage: "Could not load this plugin right now"
            },
            genericLoadError: {
                id: "composer.toolSuggestion.loadError",
                defaultMessage: "Could not refresh this tool suggestion"
            }
        });

        function ac(a) {
            let b, c, f = (0, e.c)(7);
            f[0] !== a.conversationId || f[1] !== a.hostId || f[2] !== a.requestId ? (b = {
                hostId: a.hostId,
                conversationId: a.conversationId,
                requestId: a.requestId
            }, f[0] = a.conversationId, f[1] = a.hostId, f[2] = a.requestId, f[3] = b) : b = f[3];
            let h = (0, g.x)(P.a, b);
            return f[4] !== h || f[5] !== a ? (c = null == h ? (0, d.jsx)(ad, {
                ...a
            }) : (0, d.jsx)(Q, {
                onboarding: h
            }), f[4] = h, f[5] = a, f[6] = c) : c = f[6], c
        }

        function ad(a) {
            let b, c, l, x, D, P, Q, ac, ad, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY = (0, e.c)(254),
                {
                    conversationId: aZ,
                    hostId: a$,
                    requestId: a_,
                    suggestion: a0
                } = a,
                a1 = (0, g.y)(O.a),
                a2 = (0, g.z)(z.b),
                a3 = (0, g.z)(A.k),
                a4 = (0, g.z)(W.j);
            aY[0] === Symbol.for("react.memo_cache_sentinel") ? (b = new Set, aY[0] = b) : b = aY[0];
            let a5 = (0, k.useRef)(b),
                a6 = (0, m.a)(),
                a7 = (0, g.z)(E.f),
                a8 = (0, f.c)(),
                [a9, ba] = (0, k.useState)(null),
                [bb, bc] = (0, k.useState)(!1),
                [bd, be] = (0, k.useState)(null),
                [bf, bg] = (0, k.useState)(null),
                [bh, bi] = (0, k.useState)(null),
                bj = (0, G.c)(aZ);
            aY[1] !== a$ ? (c = (0, U.i)(a$), aY[1] = a$, aY[2] = c) : c = aY[2];
            let bk = c;
            aY[3] !== aZ || aY[4] !== a$ ? (l = {
                hostId: a$,
                threadId: aZ
            }, aY[3] = aZ, aY[4] = a$, aY[5] = l) : l = aY[5];
            let bl = (0, g.x)(p.fc, l),
                bm = "install" === a0.suggest_type && a$ === h.$b && bl?.threadAccess === "shared",
                bn = "install" === a0.suggest_type && a$ === h.$b && null == bl,
                bo = bk || bj.hostId !== a$ || null == bj.cwd ? void 0 : [bj.cwd],
                bp = !bk;
            aY[6] !== a$ || aY[7] !== bp ? (x = {
                hostId: a$,
                enabled: bp
            }, aY[6] = a$, aY[7] = bp, aY[8] = x) : x = aY[8];
            let bq = (0, F.a)(x),
                br = !bk && "plugin" === a0.tool_type && "enable" === a0.suggest_type,
                bs = !br && "plugin" === a0.tool_type && (bk || bq),
                bt = (0, k.useRef)(!1);
            aY[9] !== aZ || aY[10] !== a$ || aY[11] !== a_ || aY[12] !== a1 ? (D = a => {
                bt.current || (bt.current = !0, (0, o.b)(a1, a$).replyWithMcpServerElicitationResponse(aZ, a_, (0, i.b)(a)).catch(() => {
                    bt.current = !1
                }))
            }, aY[9] = aZ, aY[10] = a$, aY[11] = a_, aY[12] = a1, aY[13] = D) : D = aY[13];
            let bu = D,
                bv = "connector" === a0.tool_type;
            aY[14] !== a$ || aY[15] !== bv ? (P = {
                enabled: bv,
                hostId: a$
            }, aY[14] = a$, aY[15] = bv, aY[16] = P) : P = aY[16];
            let {
                data: bw,
                refetch: bx
            } = (0, w.m)(P);
            aY[17] !== bw ? (Q = void 0 === bw ? [] : bw, aY[17] = bw, aY[18] = Q) : Q = aY[18];
            let by = Q;
            aY[19] !== a0.tool_id || aY[20] !== a0.tool_type ? (ac = "connector" === a0.tool_type ? [a0.tool_id] : [], aY[19] = a0.tool_id, aY[20] = a0.tool_type, aY[21] = ac) : ac = aY[21], aY[22] !== a$ || aY[23] !== ac ? (ad = {
                appIds: ac,
                hostId: a$
            }, aY[22] = a$, aY[23] = ac, aY[24] = ad) : ad = aY[24];
            let {
                data: bz
            } = (0, v.c)(ad);
            aY[25] !== bz ? (ah = void 0 === bz ? [] : bz, aY[25] = bz, aY[26] = ah) : ah = aY[26];
            let bA = ah,
                {
                    data: bB,
                    isLoading: bC,
                    refetch: bD
                } = (0, U.l)({
                    enabled: "plugin" === a0.tool_type && br && bq,
                    hostId: a$,
                    roots: bo,
                    resolveActiveRoots: br
                });
            aY[27] !== bB ? (ai = bB ?? [], aY[27] = bB, aY[28] = ai) : ai = aY[28];
            let bE = ai;
            aY[29] !== a_ ? (aj = () => {
                be(a_)
            }, aY[29] = a_, aY[30] = aj) : aj = aY[30], aY[31] !== a$ || aY[32] !== aj ? (ak = {
                hostId: a$,
                oauthReferrer: "tool_suggestion",
                onExternalConnectStarted: aj
            }, aY[31] = a$, aY[32] = aj, aY[33] = ak) : ak = aY[33];
            let {
                clearConnectingApp: bF,
                connectingApp: bG,
                handleAppConnectOAuthStarted: bH,
                handleConnectApp: bI,
                handleOpenAppUrl: bJ,
                isAppConnectPending: bK
            } = (0, y.a)(ak), {
                clearPendingAppConnect: bL,
                getPendingTeamElicitationConnect: bM,
                isAppConnectCallbackClaimed: bN
            } = (0, q.g)();
            aY[34] !== aZ || aY[35] !== bM || aY[36] !== a$ || aY[37] !== a_ ? (al = bM(a$, aZ, a_), aY[34] = aZ, aY[35] = bM, aY[36] = a$, aY[37] = a_, aY[38] = al) : al = aY[38];
            let bO = al,
                bP = bO?.resumeTarget.kind === "service-account" ? bO.resumeTarget : null,
                bQ = bP?.pendingElicitationReply?.oauth,
                bR = bh === a_ || null != bO && (bO.claimed || bQ?.kind === "connected") && bQ?.kind !== "failed" && bO.oauthState !== bf,
                bS = bQ?.kind === "connected" ? bO?.oauthState : null,
                bT = bP?.accountId,
                bU = bP?.pendingElicitationReply?.actorUserId;
            aY[39] !== aZ || aY[40] !== bh || aY[41] !== a$ || aY[42] !== a_ || aY[43] !== a1 ? (am = () => {
                if (bh === a_) return a1.watch(a => {
                    let {
                        get: b
                    } = a;
                    b(p.H, aZ) === a$ && b(p.xb, aZ)?.some(a => a.id === a_) && (bt.current = !1, bi(null))
                })
            }, an = [aZ, bh, a$, a_, a1], aY[39] = aZ, aY[40] = bh, aY[41] = a$, aY[42] = a_, aY[43] = a1, aY[44] = am, aY[45] = an) : (am = aY[44], an = aY[45]), (0, k.useEffect)(am, an), aY[46] !== a$ ? (ao = {
                hostId: a$
            }, aY[46] = a$, aY[47] = ao) : ao = aY[47];
            let {
                setAppEnabled: bV,
                updatingAppId: bW
            } = (0, s.a)(ao);
            aY[48] !== a$ ? (ap = {
                hostId: a$
            }, aY[48] = a$, aY[49] = ap) : ap = aY[49];
            let {
                pendingPluginId: bX,
                setPluginEnabled: bY
            } = (0, S.d)(ap), bZ = "plugin" === a0.tool_type ? a0 : null, {
                installPlugin: b$,
                status: b_
            } = (0, M.f)(), b0 = (0, g.z)(L.o), b1 = "connector" === a0.tool_type ? a0 : null;
            aY[50] !== b1 ? (aq = b1?.suggest_type === "install" && null != (0, r.a)(b1.tool_id), aY[50] = b1, aY[51] = aq) : aq = aY[51];
            let b2 = aq,
                b3 = null == b1 ? null : {
                    kind: "tool-suggestion-elicitation",
                    conversationId: aZ,
                    requestId: a_,
                    response: (0, i.b)("accept")
                },
                b4 = null == bZ ? null : bZ.remote_plugin_id ?? (bk ? bZ.tool_id : null),
                b5 = (0, T.g)({
                    hostId: a$,
                    pluginId: bk ? b4 : bZ?.tool_id ?? null,
                    remotePluginId: b4,
                    roots: bo
                });
            aY[52] !== bs ? (ar = {
                enabled: bs
            }, aY[52] = bs, aY[53] = ar) : ar = aY[53];
            let {
                data: b6,
                isLoading: b7,
                refetch: b8
            } = (0, g.x)(T.l, b5, ar), b9 = null == b1 ? null : by.find(a => a.id === b1.tool_id) ?? null;
            aY[54] !== bA || aY[55] !== b1 ? (as = null == b1 ? null : bA.find(a => a.id === b1.tool_id) ?? null, aY[54] = bA, aY[55] = b1, aY[56] = as) : as = aY[56];
            let ca = as,
                cb = null == bZ ? null : bE.find(a => a.plugin.id === bZ.tool_id) ?? null;
            br || (cb = bs && null != b6 ? (0, V.c)(b6) : null);
            let cc = ag({
                    app: b9,
                    plugin: cb,
                    suggestion: a0
                }),
                cd = bG?.id === a0.tool_id,
                ce = null != b3 && bK(a0.tool_id, b3),
                cf = null != b3 && bN(a0.tool_id, b3),
                cg = (0, M.b)(b_, {
                    hostId: a$,
                    pluginId: b_?.phase === "loading" ? b4 ?? a0.tool_id : cb?.plugin.id ?? a0.tool_id
                }),
                ch = bd === a_ || ce,
                ci = "plugin" === a0.tool_type && "install" === a0.suggest_type && "closed" !== b0.kind && b0.hostId === a$ && b0.pendingElicitationReply?.conversationId === aZ && b0.pendingElicitationReply?.requestId === a_,
                cj = bk && "plugin" === a0.tool_type && "install" === a0.suggest_type,
                ck = bX === (cb?.plugin.id ?? a0.tool_id);
            "connector" === a0.tool_type ? ck = "install" === a0.suggest_type ? cd || cf : bW === a0.tool_id : "install" === a0.suggest_type && (ck = cg || ci);
            let cl = !bm && (cf || !cj && !ck && (cc || ch)),
                cm = bZ?.suggest_type !== "install" || cl || a4 ? null : b4 ?? bZ.tool_id;
            aY[57] !== a2 || aY[58] !== aZ || aY[59] !== a$ || aY[60] !== b7 || aY[61] !== a_ || aY[62] !== cm || aY[63] !== a3 ? (at = null == cm || b7 ? void 0 : JSON.stringify([a2, a3, a$, aZ, a_, cm]), aY[57] = a2, aY[58] = aZ, aY[59] = a$, aY[60] = b7, aY[61] = a_, aY[62] = cm, aY[63] = a3, aY[64] = at) : at = aY[64];
            let cn = at;
            aY[65] !== a2 || aY[66] !== aZ || aY[67] !== b6 || aY[68] !== cm || aY[69] !== a3 ? (au = a => {
                if (null == cm || null == a2 || null == a3 || bt.current) return;
                let b = null == b6 ? null : (0, K.a)(b6, void 0, null);
                (0, R.a)({
                    connectorId: null == b ? void 0 : (0, u.a)(b.id),
                    conversationId: aZ,
                    eventType: a,
                    expectedIdentity: {
                        accountId: a2,
                        userId: a3
                    },
                    pluginId: cm,
                    productSurface: "CODEX"
                })
            }, aY[65] = a2, aY[66] = aZ, aY[67] = b6, aY[68] = cm, aY[69] = a3, aY[70] = au) : au = aY[70];
            let co = au,
                cp = bn || null != bZ && b7 || bb || bR || ck || (bk || br) && "plugin" === a0.tool_type && "enable" === a0.suggest_type && bC,
                cq = ab.enable;
            cl ? cq = ab.continue : "install" === a0.suggest_type && (cq = ab.install);
            let cr = null == cb ? ca?.name ?? b9?.name ?? a0.tool_name : (0, j.a)(cb),
                cs = "plugin" === a0.tool_type ? cb?.description : ca?.description ?? b9?.description,
                ct = b1?.tool_id,
                cu = ca?.iconUrl,
                cv = ca?.iconUrlDark;
            aY[71] === Symbol.for("react.memo_cache_sentinel") ? (av = (0, d.jsx)(C.a, {
                className: "text-secondary",
                "aria-hidden": !1,
                asset: $.a
            }), aY[71] = av) : av = aY[71], aY[72] !== cr || aY[73] !== ct || aY[74] !== cu || aY[75] !== cv ? (aw = (0, d.jsx)(B.a, {
                alt: cr,
                className: "icon-md rounded-sm object-contain",
                knownAppId: ct,
                logoUrl: cu,
                logoDarkUrl: cv,
                fallback: av
            }), aY[72] = cr, aY[73] = ct, aY[74] = cu, aY[75] = cv, aY[76] = aw) : aw = aY[76];
            let cw = aw;
            if ("plugin" === a0.tool_type) {
                let a, b, c = cb?.logoDarkPath ?? null,
                    e = cb?.logoPath ?? null;
                aY[77] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(H.a, {
                    className: "icon-md text-secondary"
                }), aY[77] = a) : a = aY[77], aY[78] !== a0.tool_name || aY[79] !== c || aY[80] !== e ? (b = (0, d.jsx)(B.a, {
                    alt: a0.tool_name,
                    className: "icon-md rounded-sm object-contain",
                    logoDarkUrl: c,
                    logoUrl: e,
                    fallback: a
                }), aY[78] = a0.tool_name, aY[79] = c, aY[80] = e, aY[81] = b) : b = aY[81], cw = b
            }
            aY[82] !== co || aY[83] !== bu ? (ax = () => {
                co("dismiss"), bu("decline")
            }, aY[82] = co, aY[83] = bu, aY[84] = ax) : ax = aY[84];
            let cx = ax;
            aY[85] !== b1 || aY[86] !== bI || aY[87] !== bJ || aY[88] !== b2 || aY[89] !== b9 || aY[90] !== a_ ? (ay = async () => {
                (b2 || be(a_), null != b9) ? await bI(b9): null != b1 && (bJ(b1.install_url), be(a_))
            }, aY[85] = b1, aY[86] = bI, aY[87] = bJ, aY[88] = b2, aY[89] = b9, aY[90] = a_, aY[91] = ay) : ay = aY[91];
            let cy = ay;
            aY[92] !== aZ || aY[93] !== a$ || aY[94] !== bk || aY[95] !== b$ || aY[96] !== a6 || aY[97] !== cb || aY[98] !== bZ?.suggestion_id || aY[99] !== b8 || aY[100] !== b4 || aY[101] !== a_ || aY[102] !== bs || aY[103] !== a0.tool_name || aY[104] !== a7 ? (az = async () => {
                let a = cb;
                if (bk && null != b4) a = {
                    displayName: a0.tool_name,
                    remoteMarketplaceName: h.dd,
                    remotePluginId: b4
                };
                else if (null == a && bs) {
                    bc(!0);
                    let {
                        data: b
                    } = await b8().finally(() => {
                        bc(!1)
                    });
                    a = null == b ? null : (0, V.c)(b)
                }
                null == a ? a7.danger(a6.formatMessage(ab.missingPlugin), {
                    errorAnalytics: {
                        toastId: "inlineToolSuggestionRequestCard.handleInstallPlugin.missingPlugin"
                    }
                }) : b$(a, {
                    elicitationOwnsConnectorRefresh: !0,
                    hostId: a$,
                    marketplaceAnalytics: {
                        ...J.b.composer,
                        suggestionId: bZ?.suggestion_id
                    },
                    origin: "in_conversation_elicitation",
                    pendingElicitationReply: {
                        conversationId: aZ,
                        requestId: a_,
                        response: (0, i.b)("accept")
                    }
                })
            }, aY[92] = aZ, aY[93] = a$, aY[94] = bk, aY[95] = b$, aY[96] = a6, aY[97] = cb, aY[98] = bZ?.suggestion_id, aY[99] = b8, aY[100] = b4, aY[101] = a_, aY[102] = bs, aY[103] = a0.tool_name, aY[104] = a7, aY[105] = az) : az = aY[105];
            let cz = az;
            aY[106] !== a_ ? (aA = async a => {
                let {
                    enabled: b,
                    setEnabled: c
                } = a;
                b && be(a_);
                try {
                    await c()
                } catch {
                    return
                }
            }, aY[106] = a_, aY[107] = aA) : aA = aY[107];
            let cA = aA;
            aY[108] !== cA || aY[109] !== bV ? (aB = a => {
                let {
                    appId: b,
                    enabled: c
                } = a;
                return cA({
                    enabled: c,
                    setEnabled: () => bV({
                        appId: b,
                        enabled: c
                    })
                })
            }, aY[108] = cA, aY[109] = bV, aY[110] = aB) : aB = aY[110];
            let cB = aB;
            aY[111] !== cA || aY[112] !== bk || aY[113] !== cb || aY[114] !== bY ? (aC = a => {
                let {
                    pluginDisplayName: b,
                    pluginId: c,
                    enabled: d
                } = a;
                return cA({
                    enabled: d,
                    setEnabled: () => bY({
                        pluginDisplayName: b,
                        pluginId: c,
                        plugin: bk ? cb?.plugin : void 0,
                        enabled: d
                    })
                })
            }, aY[111] = cA, aY[112] = bk, aY[113] = cb, aY[114] = bY, aY[115] = aC) : aC = aY[115];
            let cC = aC;
            aY[116] !== a6 || aY[117] !== cj || aY[118] !== br || aY[119] !== ci || aY[120] !== bD || aY[121] !== b8 || aY[122] !== bu || aY[123] !== a0 || aY[124] !== a7 ? (aD = async () => {
                cj || ci || (bc(!0), await (async () => {
                    try {
                        let a;
                        if ("connector" === a0.tool_type) return void bu("accept");
                        if (br) a = (await bD()).data?.find(a => a.plugin.id === a0.tool_id) ?? null;
                        else {
                            let {
                                data: b
                            } = await b8({
                                throwOnError: !0
                            });
                            a = null == b ? null : (0, V.c)(b)
                        }
                        if (!ag({
                                app: null,
                                plugin: a,
                                suggestion: a0
                            })) return void a7.danger(a6.formatMessage(ab.pluginNotReady, {
                            toolName: a0.tool_name
                        }), {
                            errorAnalytics: {
                                toastId: "inlineToolSuggestionRequestCard.handleContinue.pluginNotReady"
                            }
                        });
                        bu("accept")
                    } catch (a) {
                        Z.a.error("Failed to refresh tool suggestion readiness", {
                            safe: {
                                toolId: a0.tool_id,
                                toolType: a0.tool_type
                            },
                            sensitive: {
                                error: a
                            }
                        }), a7.danger(a6.formatMessage(ab.genericLoadError), {
                            errorAnalytics: {
                                toastId: "inlineToolSuggestionRequestCard.handleContinue.genericLoadError"
                            }
                        })
                    }
                })().finally(() => {
                    bc(!1)
                }))
            }, aY[116] = a6, aY[117] = cj, aY[118] = br, aY[119] = ci, aY[120] = bD, aY[121] = b8, aY[122] = bu, aY[123] = a0, aY[124] = a7, aY[125] = aD) : aD = aY[125];
            let cD = aD;
            aY[126] !== a6 || aY[127] !== a7 ? (aE = a => {
                a7.danger(a ?? a6.formatMessage(ab.genericLoadError), {
                    errorAnalytics: {
                        toastId: "inlineToolSuggestionRequestCard.teamInstall"
                    }
                })
            }, aY[126] = a6, aY[127] = a7, aY[128] = aE) : aE = aY[128];
            let cE = aE;
            aY[129] !== bL || aY[130] !== aZ || aY[131] !== a$ || aY[132] !== a_ || aY[133] !== a1 || aY[134] !== cE || aY[135] !== bO?.oauthState ? (aF = async (a, b) => {
                let c = void 0 === a ? (0, i.b)("accept") : a,
                    d = b ?? bO?.oauthState;
                if (bt.current) return !0;
                bt.current = !0;
                try {
                    if (await (0, o.b)(a1, a$).replyWithMcpServerElicitationResponse(aZ, a_, c), await (0, q.i)(a1, a$, aZ, a_)) return null != d && (bi(a_), bL({
                        oauthState: d,
                        hostId: a$
                    })), ba(null), !0
                } catch (a) {
                    Z.a.error("Failed to resume the Team chat", {
                        safe: {},
                        sensitive: {
                            error: a
                        }
                    })
                }
                return bt.current = !1, cE(), !1
            }, aY[129] = bL, aY[130] = aZ, aY[131] = a$, aY[132] = a_, aY[133] = a1, aY[134] = cE, aY[135] = bO?.oauthState, aY[136] = aF) : aF = aY[136];
            let cF = aF;
            aY[137] !== aZ || aY[138] !== bf || aY[139] !== a$ || aY[140] !== a8 || aY[141] !== a_ || aY[142] !== a1 || aY[143] !== cF || aY[144] !== cE || aY[145] !== bO ? (aG = async (a, b) => {
                let c = bO?.resumeTarget,
                    d = c?.kind === "service-account" ? c.pendingElicitationReply : void 0,
                    e = d?.oauth;
                if (bO?.oauthState !== a || c?.kind !== "service-account" || null == d || e?.kind !== "connected" || bf === a) return;
                let f = () => null != d.actorUserId && a1.get(A.k) === d.actorUserId && a1.get(A.f) === c.accountId && a1.get(p.H, aZ) === a$ && a1.get(p.xb, aZ)?.some(a => a.id === a_) === !0;
                if (f()) {
                    if ((0, u.a)(bO.appId) !== (0, u.a)(e.connectorId)) {
                        bg(a), cE();
                        return
                    }
                    try {
                        await Promise.all([a8.invalidateQueries({
                            queryKey: ["service-account-plugins", c.accountId, c.serviceAccountId]
                        }), (0, Y.e)(a1, c.accountId)]);
                        let g = await aa(a1, a$, aZ, [
                            [e.connectorId]
                        ]);
                        if (b() || !f()) return;
                        if (!g) {
                            bg(a), cE();
                            return
                        }
                        await cF(d.response, a) || b() || bg(a)
                    } catch (c) {
                        b() || (Z.a.error("Failed to resume Team app connect elicitation", {
                            safe: {
                                connectorId: e.connectorId
                            },
                            sensitive: {
                                error: c
                            }
                        }), bg(a), cE())
                    }
                }
            }, aY[137] = aZ, aY[138] = bf, aY[139] = a$, aY[140] = a8, aY[141] = a_, aY[142] = a1, aY[143] = cF, aY[144] = cE, aY[145] = bO, aY[146] = aG) : aG = aY[146];
            let cG = (0, k.useEffectEvent)(aG);
            aY[147] !== bS || aY[148] !== aZ || aY[149] !== a$ || aY[150] !== a_ || aY[151] !== cG || aY[152] !== a1 || aY[153] !== bT || aY[154] !== bU ? (aH = () => {
                if (null == bS) return;
                let a = !1,
                    b = !1,
                    c = a1.watch(c => {
                        let {
                            get: d
                        } = c, e = d(p.H, aZ), f = d(p.xb, aZ), g = d(A.f), h = d(A.k);
                        !b && e === a$ && f?.some(a => a.id === a_) && g === bT && h === bU && (b = !0, cG(bS, () => a))
                    });
                return () => {
                    a = !0, c()
                }
            }, aY[147] = bS, aY[148] = aZ, aY[149] = a$, aY[150] = a_, aY[151] = cG, aY[152] = a1, aY[153] = bT, aY[154] = bU, aY[155] = aH) : aH = aY[155], aY[156] !== bS || aY[157] !== aZ || aY[158] !== a$ || aY[159] !== a_ || aY[160] !== a1 || aY[161] !== bT || aY[162] !== bU ? (aI = [a1, a$, aZ, a_, bS, bT, bU], aY[156] = bS, aY[157] = aZ, aY[158] = a$, aY[159] = a_, aY[160] = a1, aY[161] = bT, aY[162] = bU, aY[163] = aI) : aI = aY[163], (0, k.useEffect)(aH, aI), aY[164] !== aZ || aY[165] !== a$ || aY[166] !== a6 || aY[167] !== a1 || aY[168] !== cF || aY[169] !== cE || aY[170] !== a0.tool_name ? (aJ = async a => {
                try {
                    if (await aa(a1, a$, aZ, a)) return void await cF()
                } catch (a) {
                    Z.a.error("Failed to check Team setup", {
                        safe: {},
                        sensitive: {
                            error: a
                        }
                    })
                }
                cE(a6.formatMessage(ab.pluginNotReady, {
                    toolName: a0.tool_name
                }))
            }, aY[164] = aZ, aY[165] = a$, aY[166] = a6, aY[167] = a1, aY[168] = cF, aY[169] = cE, aY[170] = a0.tool_name, aY[171] = aJ) : aJ = aY[171];
            let cH = aJ;
            aY[172] !== aZ || aY[173] !== a$ || aY[174] !== a6 || aY[175] !== ca || aY[176] !== b4 || aY[177] !== a1 || aY[178] !== cF || aY[179] !== cE || aY[180] !== a0.tool_id || aY[181] !== a0.tool_type ? (aK = async () => {
                try {
                    let a, b = await async function(a) {
                        let b = a.get(A.f);
                        return null == b ? null : null
                    }(a1);
                    if (null == b) return void cE();
                    if ("connector" === a0.tool_type) {
                        if (null == ca) return void cE();
                        a = {
                            kind: "connector",
                            connectorId: (0, u.a)(a0.tool_id),
                            app: ca
                        }
                    } else {
                        if (null == b4) return void cE(a6.formatMessage(ab.missingPlugin));
                        a = {
                            kind: "plugin",
                            pluginId: b4
                        }
                    }
                    let c = {
                        ...b,
                        start: a
                    };
                    if ("connector" === a.kind && await aa(a1, a$, aZ, [
                            [a.connectorId]
                        ]).catch(ae)) return void await cF();
                    ba(c)
                } catch (a) {
                    Z.a.error("Failed to prepare Team setup", {
                        safe: {},
                        sensitive: {
                            error: a
                        }
                    }), cE()
                }
            }, aY[172] = aZ, aY[173] = a$, aY[174] = a6, aY[175] = ca, aY[176] = b4, aY[177] = a1, aY[178] = cF, aY[179] = cE, aY[180] = a0.tool_id, aY[181] = a0.tool_type, aY[182] = aK) : aK = aY[182];
            let cI = aK;
            aY[183] !== cD || aY[184] !== cy || aY[185] !== cz || aY[186] !== cB || aY[187] !== cC || aY[188] !== cI || aY[189] !== a6 || aY[190] !== bm || aY[191] !== bn || aY[192] !== b9 || aY[193] !== cb || aY[194] !== co || aY[195] !== cl || aY[196] !== a0.suggest_type || aY[197] !== a0.tool_type || aY[198] !== a7 ? (aL = async () => {
                if (!bn) {
                    if (co("click"), bm) {
                        bc(!0), await cI().finally(() => {
                            bc(!1)
                        });
                        return
                    }
                    if (cl) return void await cD();
                    if ("connector" === a0.tool_type) return "install" === a0.suggest_type ? void await cy() : null == b9 ? void await cD() : void await cB({
                        appId: b9.id,
                        enabled: !0
                    });
                    if ("install" === a0.suggest_type) return void await cz();
                    if (null == cb) return void a7.danger(a6.formatMessage(ab.missingPlugin), {
                        errorAnalytics: {
                            toastId: "inlineToolSuggestionRequestCard.handlePrimaryAction.missingPlugin"
                        }
                    });
                    await cC({
                        pluginDisplayName: (0, j.a)(cb),
                        pluginId: cb.plugin.id,
                        enabled: !0
                    })
                }
            }, aY[183] = cD, aY[184] = cy, aY[185] = cz, aY[186] = cB, aY[187] = cC, aY[188] = cI, aY[189] = a6, aY[190] = bm, aY[191] = bn, aY[192] = b9, aY[193] = cb, aY[194] = co, aY[195] = cl, aY[196] = a0.suggest_type, aY[197] = a0.tool_type, aY[198] = a7, aY[199] = aL) : aL = aY[199];
            let cJ = aL;
            aY[200] !== a2 || aY[201] !== cn || aY[202] !== co || aY[203] !== a3 ? (aM = a => {
                if (!(a?.parentElement == null || null == cn || null == a2 || null == a3 || a5.current.has(cn))) return (0, I.b)(a.parentElement, a5.current, void 0, {
                    loggedPluginIds: a5.current,
                    onViewed: () => co("viewed")
                })
            }, aY[200] = a2, aY[201] = cn, aY[202] = co, aY[203] = a3, aY[204] = aM) : aM = aY[204];
            let cK = cl && ch;
            return aY[205] !== a0 || aY[206] !== cr || aY[207] !== cK ? (aN = (0, d.jsx)(af, {
                showContinueTitle: cK,
                suggestion: a0,
                title: cr
            }), aY[205] = a0, aY[206] = cr, aY[207] = cK, aY[208] = aN) : aN = aY[208], aY[209] !== bR || aY[210] !== cq ? (aO = bR ? (0, d.jsx)(n.a, {
                id: "settings.mcp.appConnectModal.completingConnectionButton",
                defaultMessage: "Finishing connection\u2026"
            }) : (0, d.jsx)(n.a, {
                ...cq
            }), aY[209] = bR, aY[210] = cq, aY[211] = aO) : aO = aY[211], aY[212] !== cJ ? (aP = () => {
                cJ()
            }, aY[212] = cJ, aY[213] = aP) : aP = aY[213], aY[214] !== cx || aY[215] !== cn || aY[216] !== cp || aY[217] !== cs || aY[218] !== cw || aY[219] !== aM || aY[220] !== aN || aY[221] !== aO || aY[222] !== aP ? (aQ = (0, d.jsx)(N.a, {
                ref: aM,
                impressionId: cn,
                icon: cw,
                title: aN,
                description: cs,
                primaryActionLabel: aO,
                isPrimaryActionLoading: cp,
                onDecline: cx,
                onSubmit: aP
            }), aY[214] = cx, aY[215] = cn, aY[216] = cp, aY[217] = cs, aY[218] = cw, aY[219] = aM, aY[220] = aN, aY[221] = aO, aY[222] = aP, aY[223] = aQ) : aQ = aY[223], aY[224] !== cH || aY[225] !== aZ || aY[226] !== a$ || aY[227] !== a_ || aY[228] !== a9 ? (aR = null == a9 ? null : (0, d.jsx)(_, {
                ...a9,
                onClose: () => ba(null),
                onComplete: cH,
                elicitation: {
                    hostId: a$,
                    reply: {
                        conversationId: aZ,
                        requestId: a_,
                        response: (0, i.b)("accept")
                    }
                }
            }), aY[224] = cH, aY[225] = aZ, aY[226] = a$, aY[227] = a_, aY[228] = a9, aY[229] = aR) : aR = aY[229], aY[230] !== bF ? (aS = a => {
                a || bF()
            }, aY[230] = bF, aY[231] = aS) : aS = aY[231], aY[232] !== a$ || aY[233] !== b2 || aY[234] !== a8 || aY[235] !== bx || aY[236] !== a_ ? (aT = async () => {
                b2 && be(a_), await (0, t.a)({
                    hostId: a$,
                    queryClient: a8,
                    refreshAppsList: async () => (await bx()).data ?? []
                })
            }, aY[232] = a$, aY[233] = b2, aY[234] = a8, aY[235] = bx, aY[236] = a_, aY[237] = aT) : aT = aY[237], aY[238] !== aZ || aY[239] !== a_ ? (aU = () => ({
                resumeTarget: {
                    kind: "tool-suggestion-elicitation",
                    conversationId: aZ,
                    requestId: a_,
                    response: (0, i.b)("accept")
                }
            }), aY[238] = aZ, aY[239] = a_, aY[240] = aU) : aU = aY[240], aY[241] !== bH ? (aV = a => {
                bH({
                    ...a
                })
            }, aY[241] = bH, aY[242] = aV) : aV = aY[242], aY[243] !== bG || aY[244] !== a$ || aY[245] !== aS || aY[246] !== aT || aY[247] !== aU || aY[248] !== aV ? (aW = (0, d.jsx)(X.a, {
                oauthReferrer: "tool_suggestion",
                app: bG,
                hostId: a$,
                onOpenChange: aS,
                onConnected: aT,
                getOAuthResumeContext: aU,
                onOAuthStarted: aV
            }), aY[243] = bG, aY[244] = a$, aY[245] = aS, aY[246] = aT, aY[247] = aU, aY[248] = aV, aY[249] = aW) : aW = aY[249], aY[250] !== aQ || aY[251] !== aR || aY[252] !== aW ? (aX = (0, d.jsxs)(d.Fragment, {
                children: [aQ, aR, aW]
            }), aY[250] = aQ, aY[251] = aR, aY[252] = aW, aY[253] = aX) : aX = aY[253], aX
        }

        function ae() {
            return !1
        }

        function af(a) {
            let b = (0, e.c)(6),
                {
                    showContinueTitle: c,
                    suggestion: f,
                    title: g
                } = a;
            if ("install" !== f.suggest_type || !c) {
                let a;
                return b[0] !== g ? (a = (0, d.jsx)(d.Fragment, {
                    children: g
                }), b[0] = g, b[1] = a) : a = b[1], a
            }
            switch (f.tool_type) {
                case "connector": {
                    let a;
                    return b[2] !== g ? (a = (0, d.jsx)(n.a, {
                        id: "composer.toolSuggestion.connector.continueInstallTitle",
                        defaultMessage: "Click Continue when you're done connecting {toolName}",
                        values: {
                            toolName: g
                        }
                    }), b[2] = g, b[3] = a) : a = b[3], a
                }
                case "plugin": {
                    let a;
                    return b[4] !== g ? (a = (0, d.jsx)(n.a, {
                        id: "composer.toolSuggestion.plugin.continueInstallTitle",
                        defaultMessage: "Click Continue when you're done installing the {toolName} plugin",
                        values: {
                            toolName: g
                        }
                    }), b[4] = g, b[5] = a) : a = b[5], a
                }
            }
        }

        function ag(a) {
            let {
                app: b,
                plugin: c,
                suggestion: d
            } = a;
            switch (d.tool_type) {
                case "connector":
                    if (b?.isAccessible !== !0) return !1;
                    if ("install" === d.suggest_type) return !0;
                    return b.isEnabled;
                case "plugin":
                    if (c?.plugin.installed !== !0) return !1;
                    if ("install" === d.suggest_type) return !0;
                    return c.plugin.enabled
            }
        }
    }),
    Pdbe: (function(a, b, c) {
        var d = c("iRMi"),
            e = c("mfKi"),
            f = c("yGJW");
        c.d(b, {}, {
            a: function(a, b, c, g) {
                (0, f.a)(a, e.CodexPluginAction, {
                    action: g,
                    remotePluginId: c,
                    suggestionId: b.suggestionId,
                    source: d.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                    surface: d.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_IN_CHAT_SUGGESTIONS,
                    result: e.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
                    uiStyle: e.CodexPluginsSuggestionUiStyle.CODEX_PLUGINS_SUGGESTION_UI_STYLE_MCP
                })
            },
            b: function(a, b, c, d) {
                let e = new Map,
                    f = a.ownerDocument,
                    g = !0,
                    h = () => {
                        if (g && "visible" === f.visibilityState && null != d)
                            for (let [a, b] of e) d.loggedPluginIds.has(b) || (d.loggedPluginIds.add(b), d.onViewed(b)), i.unobserve(a), e.delete(a)
                    },
                    i = new IntersectionObserver(a => {
                        if (g) {
                            for (let f of a) {
                                if (!f.isIntersecting || f.intersectionRatio < .5) {
                                    e.delete(f.target);
                                    continue
                                }
                                let a = f.target.getAttribute("data-plugin-impression-id");
                                null != a && (null == c || b.has(a) || (b.add(a), c(a)), null == d ? i.unobserve(f.target) : e.set(f.target, a))
                            }
                            h()
                        }
                    }, {
                        threshold: .5
                    });
                for (let b of a.querySelectorAll("[data-plugin-impression-id]")) i.observe(b);
                return null != d && f.addEventListener("visibilitychange", h), () => {
                    g = !1, i.disconnect(), f.removeEventListener("visibilitychange", h)
                }
            }
        })
    }),
    jltc: (function(a, b, c) {
        var d = c("iRMi"),
            e = c("CjTC"),
            f = c("yGJW");
        c.d(b, {}, {
            a: function(a, b, c) {
                (0, f.a)(a, d.CodexMcpExtensionAction, {
                    feature: "onboarding",
                    action: c,
                    pluginId: (0, e.a)(b.plugin.plugin)
                })
            }
        })
    }),
    wGqp: (function(a, b, c) {
        var d = c("DBCl"),
            e = c("MKR8"),
            f = c("Haiv"),
            g = c("eYlV"),
            h = c("Dgwo"),
            i = c("whfw"),
            j = c("z0li"),
            k = c("PAzX"),
            l = c("OiCI"),
            m = c("Cslg"),
            n = c("XNvh"),
            o = c("rS3J"),
            p = c("svjy"),
            q = c("jhEa");
        async function r(a, b) {
            let c = b.pendingElicitationReply;
            if (null != c) try {
                await (0, h.b)(a, b.hostId).replyWithMcpServerElicitationResponse(c.conversationId, c.requestId, c.response)
            } catch {
                throw Error(a.get(p.a).formatMessage({
                    id: "plugins.onboarding.installCompletionFailed",
                    defaultMessage: "Couldn\u2019t complete installation. Please try again"
                }))
            }
        }
        c.d(b, {}, {
            a: r,
            b: async function(a, b, h) {
                let s, {
                        target: t
                    } = b,
                    u = (0, f.a)(b.plugin),
                    v = (0, n.c)(b.plugin.plugin.id),
                    w = a.get(p.a).formatMessage({
                        id: "plugins.onboarding.prompt",
                        defaultMessage: "Help me set up {plugin} with the {skill} skill"
                    }, {
                        plugin: (0, o.l)(`@${u}`, v),
                        skill: (0, o.l)(`${"chatgpt"===t.type?"@":"$"}${b.skill.name}`, b.skill.path)
                    });
                if (!(0, q.a)(a, t) || !a.get(q.c, t) || null != t.account && (a.get(l.b) !== t.account.accountId || a.get(m.k) !== t.account.userId)) return {
                    status: "failed",
                    message: a.get(p.a).formatMessage({
                        id: "plugins.onboarding.startFailed",
                        defaultMessage: "Couldn\u2019t start setup. Please try again"
                    })
                };
                if ("chatgpt" === t.type) {
                    let {
                        startChatGptPluginOnboarding: d
                    } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(544914)]).then(() => c("O68Q"));
                    return d(a, t, w, b.skill.name)
                }
                let x = [{
                    type: "mention",
                    name: u,
                    path: v
                }, {
                    type: "skill",
                    name: b.skill.name,
                    path: b.skill.path
                }];
                if (null != t.conversationId) {
                    let b, c = await (0, k.a)(a, t.hostId, null);
                    await r(a, t);
                    try {
                        await (0, i.a)(a, t.hostId, t.conversationId, {
                            prompt: w,
                            inputItems: x,
                            turnTrigger: "plugin_onboarding",
                            serviceTier: c
                        })
                    } catch (a) {
                        b = (0, e.a)(a)
                    }
                    return {
                        status: "started",
                        route: (0, q.b)(t, t.conversationId),
                        message: b
                    }
                }
                let y = b => "failed" === b.status ? b : "created" === b.status ? {
                        status: "started",
                        route: (0, q.b)(t, b.conversationId),
                        message: (0, j.a)(a, b)?.message
                    } : {
                        status: "outcome-unknown",
                        message: (0, j.a)(a, b).message
                    },
                    z = !1,
                    A = async a => {
                        s = a, z && await h?.(y(a))
                    };
                if (t.hostId === d.$b) {
                    let b = await (0, j.b)(a, t.hostId, {
                        input: [{
                            type: "text",
                            text: w,
                            text_elements: []
                        }, ...x],
                        cwd: d.ld,
                        workspaceRoots: [d.ld],
                        workspaceKind: "projectless",
                        cloudThreadPrototype: !0,
                        collaborationMode: null,
                        serviceTier: null,
                        useAppServerPermissionDefault: !0,
                        turnTrigger: "plugin_onboarding"
                    }, {
                        onSettled: A
                    });
                    return z = !0, y(s ?? b)
                }
                let B = await (0, g.b)({
                    scope: a,
                    additionalUserInput: x,
                    model: void 0,
                    thinking: void 0,
                    prompt: w,
                    target: {
                        type: "projectless"
                    },
                    turnTrigger: "plugin_onboarding",
                    onSettled: A
                });
                if (z = !0, "creation" !== B.kind) throw Error("Plugin setup requires a local conversation");
                return y(s ?? B.result)
            }
        })
    }),
    odxv: (function(a, b, c) {
        var d = c("Q840"),
            e = c("MKR8"),
            f = c("SGsN"),
            g = c("OWtl"),
            h = c("jltc"),
            i = c("wGqp");
        let j = (0, d.v)(g.a, a => null);
        c.d(b, {}, {
            a: j,
            b: async function(a, b, c) {
                let d = {
                        hostId: b.target.hostId,
                        conversationId: b.target.conversationId,
                        requestId: b.target.pendingElicitationReply.requestId
                    },
                    g = a.get(j, d);
                if (g !== b || null != g.submittingAction) return;
                (0, h.a)(a, b, "setup" === c ? "selected" : "skipped");
                let k = {
                    ...b,
                    submittingAction: c
                };
                a.set(j, d, k);
                try {
                    if ("skip" === c) await (0, i.a)(a, b.target);
                    else {
                        let c = await (0, i.b)(a, b);
                        if ("failed" === c.status) throw Error(c.message);
                        null != c.message && a.get(f.f).danger(c.message, {
                            errorAnalytics: {
                                toastId: "plugins.onboarding.sendOutcomeUnknown"
                            }
                        })
                    }
                    a.get(j, d) === k && a.set(j, d, null)
                } catch (b) {
                    a.get(f.f).danger((0, e.a)(b), {
                        errorAnalytics: {
                            toastId: "plugins.onboarding.submitFailed"
                        }
                    })
                } finally {
                    a.get(j, d) === k && a.set(j, d, b)
                }
            }
        })
    }),
    jhEa: (function(a, b, c) {
        var d = c("Q840"),
            e = c("DBCl"),
            f = c("StMt"),
            g = c("OFP1"),
            h = c("Ow2S"),
            i = c("dQRk"),
            j = c("jAnS"),
            k = c("j9xU"),
            l = c("OWtl"),
            m = c("Bc5r");
        let n = (0, d.d)(l.a, (a, b) => {
            let {
                get: c
            } = b;
            return "chatgpt" !== a.type || null == a.conversationId || !c(h.j, a.conversationId) && !c(i.eb, a.conversationId) && !(0, i.Db)(c(i.cb, a.conversationId))
        });
        c.d(b, {}, {
            a: function(a, b) {
                return null != b.conversationId || ("chatgpt" === b.type ? a.get(f.a, {
                    name: "chatgpt"
                }).isCapable && "allowed" === a.get(g.s).status : b.hostId !== e.$b || a.get(k.e))
            },
            b: function(a, b) {
                return "chatgpt" === a.type ? (0, j.c)(b) : (0, m.a)((0, e.ie)((0, e.Ye)(b)), a.hostId)
            },
            c: n
        })
    })
};