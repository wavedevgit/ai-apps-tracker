export const __rspack_esm_ids = [428069];
export const __webpack_modules__ = {
    VVkm: (function(e, t, n) {
        var o = n("QosV"),
            i = n("T0Rc"),
            a = n("GaA7"),
            l = n("rvFo");

        function r(e) {
            return ["new-chat-suggestion-source", "has-accessible-enabled-ambient-suggestion-app", e]
        }
        n.d(t, {}, {
            a: function(e) {
                let {
                    areNewChatPageSuggestionsLoading: t,
                    hasProjectRoot: n,
                    shouldShowHomeSuggestions: o,
                    shouldUseCuratedNewChatPageSuggestions: i
                } = e;
                return !t && (!!i || n && o)
            },
            b: r,
            c: function(e) {
                let {
                    debugOverride: t,
                    experimentEligible: n,
                    personalized: o
                } = e;
                return t ?? (n && o ? "generated" : "curated")
            },
            d: function(e) {
                let {
                    canUsePersonalizedSuggestions: t,
                    generatedSuggestionsEnabled: n,
                    hasGeneratedSuggestionsReadSettled: o,
                    shouldUseCuratedNewChatPageSuggestions: i
                } = e;
                return !!i || !n || !t || o
            },
            e: function(e) {
                var t, n;
                let s, c, d, u = (0, o.c)(9),
                    {
                        accountId: p,
                        enabled: g,
                        hostId: f
                    } = e;
                return u[0] !== p || u[1] !== f ? (t = f, n = p, s = [...r(t), n], u[0] = p, u[1] = f, u[2] = s) : s = u[2], u[3] !== f ? (c = async () => await a.a.ambientSuggestions?.hasAccessibleAndEnabledApp({
                    hostId: f
                }) ?? !1, u[3] = f, u[4] = c) : c = u[4], u[5] !== g || u[6] !== s || u[7] !== c ? (d = {
                    queryKey: s,
                    queryFn: c,
                    enabled: g,
                    retry: !1,
                    staleTime: l.b.FIVE_MINUTES
                }, u[5] = g, u[6] = s, u[7] = c, u[8] = d) : d = u[8], (0, i.a)(d)
            }
        })
    }),
    zvpH: (function(e, t, n) {
        var o = n("GaA7"),
            i = n("q77y");
        let a = ["vscode", "ambient-suggestions"],
            l = ["vscode", "ambient-suggestions-refresh"];
        n.d(t, {}, {
            a: a,
            b: l,
            c: function(e) {
                return [...a, JSON.stringify(e)]
            },
            d: function(e) {
                return [...l, JSON.stringify(e)]
            },
            e: async function(e, t) {
                let n = o.a?.ambientSuggestions;
                null != n && await (0, i.a)(n.refresh(e), t)
            }
        })
    }),
    FROa: (function(e, t, n) {
        var o = n("ABep"),
            i = n("QosV"),
            a = n("on57"),
            l = n("zd8w"),
            r = n("oyxz"),
            s = n("wD9O"),
            c = n("JNtf"),
            d = n("mUDD"),
            u = n("bf6R");

        function p(e) {
            let t, n, a, l, d = (0, i.c)(10),
                {
                    children: p,
                    open: f,
                    onOpenChange: h,
                    style: m
                } = e,
                b = (0, s.c)(),
                y = `min(22rem, calc((100dvw - 2rem) / ${b}))`;
            return d[0] !== m || d[1] !== y ? (t = {
                "aria-describedby": void 0,
                style: {
                    maxWidth: y,
                    ...m
                }
            }, d[0] = m, d[1] = y, d[2] = t) : t = d[2], d[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, o.jsx)(u.Cj, {
                className: "text-codex-icon"
            }), d[3] = n) : n = d[3], d[4] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.jsxs)(c.c, {
                autoFocus: !0,
                className: "absolute end-6 top-6 flex size-9 cursor-interaction items-center justify-center rounded-full bg-(--app-color-background-elevated-tertiary-opaque) leading-none no-drag hover:bg-secondary-ghost-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                onClick: g,
                children: [n, (0, o.jsx)("span", {
                    className: "sr-only",
                    children: (0, o.jsx)(r.a, {
                        id: "codex.dialog.closeButton",
                        defaultMessage: "Close dialog"
                    })
                })]
            }), d[4] = a) : a = d[4], d[5] !== p || d[6] !== h || d[7] !== f || d[8] !== t ? (l = (0, o.jsxs)(c.a, {
                open: f,
                onOpenChange: h,
                showDialogClose: !1,
                contentProps: t,
                children: [p, a]
            }), d[5] = p, d[6] = h, d[7] = f, d[8] = t, d[9] = l) : l = d[9], l
        }

        function g(e) {
            return e.stopPropagation()
        }
        n.d(t, {}, {
            a: "min(720px, calc(100vh - 2rem))",
            b: function(e) {
                let t, n, r, c, d, u = (0, i.c)(17),
                    {
                        children: g,
                        loading: f,
                        onOpenChange: h
                    } = e,
                    [m, b] = (0, l.useState)(null),
                    y = (0, s.c)();
                u[0] !== m || u[1] !== y ? (t = null == m ? void 0 : {
                    height: `min(${m}px, calc((100dvh - 2rem) / ${y}))`
                }, u[0] = m, u[1] = y, u[2] = t) : t = u[2], u[3] !== m || u[4] !== f ? (n = e => {
                    !f && null == m && null != e && e.offsetHeight > 0 && b(e.offsetHeight)
                }, u[3] = m, u[4] = f, u[5] = n) : n = u[5];
                let _ = (f || null != m) && "h-full",
                    v = null != m && "overflow-y-auto";
                return u[6] !== _ || u[7] !== v ? (r = (0, a.b)(_, v), u[6] = _, u[7] = v, u[8] = r) : r = u[8], u[9] !== g || u[10] !== n || u[11] !== r ? (c = (0, o.jsx)("div", {
                    ref: n,
                    className: r,
                    children: g
                }), u[9] = g, u[10] = n, u[11] = r, u[12] = c) : c = u[12], u[13] !== h || u[14] !== t || u[15] !== c ? (d = (0, o.jsx)(p, {
                    open: !0,
                    onOpenChange: h,
                    style: t,
                    children: c
                }), u[13] = h, u[14] = t, u[15] = c, u[16] = d) : d = u[16], d
            },
            c: p,
            d: function(e) {
                let t, n, a, l = (0, i.c)(9);
                return l[0] !== e.icon ? (t = (0, o.jsx)("span", {
                    className: "relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-[calc(var(--spacing)*5)] border border-subtle bg-surface shadow-sm",
                    children: e.icon
                }), l[0] = e.icon, l[1] = t) : t = l[1], l[2] !== e.subtitle || l[3] !== e.subtitleClassName || l[4] !== e.title ? (n = (0, o.jsx)(d.d, {
                    className: "w-full",
                    title: e.title,
                    titleSize: "base",
                    titleClassName: "text-lg leading-6.5",
                    subtitle: e.subtitle,
                    subtitleSize: "sm",
                    subtitleTone: "secondary",
                    subtitleClassName: e.subtitleClassName
                }), l[2] = e.subtitle, l[3] = e.subtitleClassName, l[4] = e.title, l[5] = n) : n = l[5], l[6] !== t || l[7] !== n ? (a = (0, o.jsxs)("div", {
                    className: "flex w-full flex-col items-center gap-4 text-center select-none",
                    children: [t, n]
                }), l[6] = t, l[7] = n, l[8] = a) : a = l[8], a
            }
        })
    }),
    TC6X: (function(e, t, n) {
        var o = n("ABep"),
            i = n("QosV"),
            a = n("oyxz"),
            l = n("Sm6l"),
            r = n("JNtf"),
            s = n("mUDD"),
            c = n("FROa"),
            d = n("lmaZ");

        function u(e) {
            let t, n, c, u, p, g, f, h, m, b, y, _, v = (0, i.c)(27),
                {
                    isPending: w,
                    embedded: I,
                    isFetching: x,
                    onOpenChange: S,
                    onRetry: C
                } = e,
                k = void 0 !== I && I,
                A = k ? "h2" : r.f,
                j = k ? "p" : r.e;
            if (w) {
                let e;
                return v[0] !== k ? (e = (0, o.jsx)(d.a, {
                    embedded: k
                }), v[0] = k, v[1] = e) : e = v[1], e
            }
            return v[2] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(a.a, {
                id: "beacons.connectApp.loadError.title",
                defaultMessage: "Couldn’t load connector"
            }), v[2] = t) : t = v[2], v[3] !== A ? (n = (0, o.jsx)(A, {
                children: t
            }), v[3] = A, v[4] = n) : n = v[4], v[5] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, o.jsx)(a.a, {
                id: "beacons.connectApp.loadError.description",
                defaultMessage: "Try again, or cancel and return to the previous page"
            }), v[5] = c) : c = v[5], v[6] !== j ? (u = (0, o.jsx)(j, {
                children: c
            }), v[6] = j, v[7] = u) : u = v[7], v[8] !== n || v[9] !== u ? (p = (0, o.jsx)(s.d, {
                title: n,
                subtitle: u
            }), v[8] = n, v[9] = u, v[10] = p) : p = v[10], v[11] !== S ? (g = () => S(!1), v[11] = S, v[12] = g) : g = v[12], v[13] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, o.jsx)(a.a, {
                id: "beacons.connectApp.loadError.button.cancel",
                defaultMessage: "Cancel"
            }), v[13] = f) : f = v[13], v[14] !== x || v[15] !== g ? (h = (0, o.jsx)(l.a, {
                color: "secondary",
                disabled: x,
                onClick: g,
                type: "button",
                children: f
            }), v[14] = x, v[15] = g, v[16] = h) : h = v[16], v[17] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, o.jsx)(a.a, {
                id: "beacons.connectApp.loadError.button.retry",
                defaultMessage: "Retry"
            }), v[17] = m) : m = v[17], v[18] !== x || v[19] !== C ? (b = (0, o.jsx)(l.a, {
                color: "primary",
                loading: x,
                onClick: C,
                type: "button",
                children: m
            }), v[18] = x, v[19] = C, v[20] = b) : b = v[20], v[21] !== b || v[22] !== h ? (y = (0, o.jsxs)(s.c, {
                children: [h, b]
            }), v[21] = b, v[22] = h, v[23] = y) : y = v[23], v[24] !== y || v[25] !== p ? (_ = (0, o.jsxs)(s.b, {
                className: "select-none",
                children: [p, y]
            }), v[24] = y, v[25] = p, v[26] = _) : _ = v[26], _
        }
        n.d(t, {}, {
            a: u,
            b: function(e) {
                let t, n, a = (0, i.c)(6);
                return a[0] !== e ? (t = (0, o.jsx)(u, {
                    ...e
                }), a[0] = e, a[1] = t) : t = a[1], a[2] !== e.isPending || a[3] !== e.onOpenChange || a[4] !== t ? (n = (0, o.jsx)(c.b, {
                    loading: e.isPending,
                    onOpenChange: e.onOpenChange,
                    children: t
                }), a[2] = e.isPending, a[3] = e.onOpenChange, a[4] = t, a[5] = n) : n = a[5], n
            }
        })
    }),
    Sx5O: (function(e, t, n) {
        var o = n("ABep"),
            i = n("QosV"),
            a = n("ecE5"),
            l = n("TC6X");
        n.d(t, {
            a: () => l.b
        }, {
            b: function(e) {
                let t, n = (0, i.c)(2);
                return n[0] !== e ? (t = (0, o.jsx)(a.a, {
                    ...e,
                    app: null
                }), n[0] = e, n[1] = t) : t = n[1], t
            }
        })
    }),
    IBgA: (function(e, t, n) {
        var o = n("QosV"),
            i = n("irkb"),
            a = n("xSOA"),
            l = n("Q840"),
            r = n("Qgfj"),
            s = n("Wf1j"),
            c = n("VVkm"),
            d = n("Dgwo"),
            u = n("HUHI"),
            p = n("OiCI"),
            g = n("SGsN"),
            f = n("a4MG"),
            h = n("sLlu"),
            m = n("OWtl"),
            b = n("kfGJ"),
            y = n("WFY2");
        let _ = (0, r.f)({
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
        n.d(t, {}, {
            a: function(e) {
                let t, n, r, v, w, I, x, S, C = (0, o.c)(35),
                    k = e?.hostId ?? b.a,
                    A = (0, l.y)(m.a),
                    j = (0, l.z)(p.a),
                    E = (0, i.c)(),
                    P = (0, h.b)(),
                    M = (0, s.a)(),
                    N = j ?? void 0;
                C[0] !== k || C[1] !== N ? (t = (0, u.g)(k, N), C[0] = k, C[1] = N, C[2] = t) : t = C[2];
                let O = t;
                C[3] !== O || C[4] !== k || C[5] !== P ? (n = async () => {
                    await Promise.all([P((0, c.b)(k)), P(O), P([...f.b, k]), P([...f.c, k]), P(f.f), P(["user-saved-config"])])
                }, C[3] = O, C[4] = k, C[5] = P, C[6] = n) : n = C[6];
                let T = n;
                C[7] !== k || C[8] !== E || C[9] !== A ? (r = async e => {
                    let {
                        appId: t,
                        enabled: n
                    } = e, o = await (0, f.m)(A, E, k);
                    if ("okOverridden" === (await (0, d.b)(A, k).sendRequest("config/batchWrite", {
                            edits: function(e) {
                                let {
                                    appId: t,
                                    enabled: n
                                } = e;
                                return [{
                                    keyPath: `apps.${t}.enabled`,
                                    value: n,
                                    mergeStrategy: "upsert"
                                }]
                            }({
                                appId: t,
                                enabled: n
                            }),
                            filePath: o?.filePath ?? null,
                            expectedVersion: o?.expectedVersion ?? null,
                            reloadUserConfig: !0
                        })).status) throw Error("App setting is overridden by project configuration")
                }, C[7] = k, C[8] = E, C[9] = A, C[10] = r) : r = C[10], C[11] !== O || C[12] !== E ? (v = async e => {
                    let {
                        appId: t,
                        enabled: n
                    } = e;
                    await E.cancelQueries({
                        queryKey: O
                    });
                    let o = E.getQueryData(O);
                    return o && E.setQueryData(O, o.map(e => e.id !== t || e.isEnabled === n ? e : {
                        ...e,
                        isEnabled: n
                    })), {
                        previousApps: o
                    }
                }, C[11] = O, C[12] = E, C[13] = v) : v = C[13], C[14] !== O || C[15] !== M || C[16] !== P || C[17] !== E || C[18] !== A ? (w = async (e, t, n) => {
                    let {
                        appId: o,
                        appName: i,
                        enabled: a
                    } = t;
                    if (a && n?.previousApps?.find(e => e.id === o)?.isEnabled === !1) {
                        await P(O);
                        let e = E.getQueryData(O)?.find(e => e.id === o);
                        if (e?.isEnabled === !1) throw Error("App remains disabled after updating its configuration")
                    }
                    let l = i ?? E.getQueryData(O)?.find(e => e.id === o)?.name ?? o;
                    A.get(g.f).success(M.formatMessage(a ? _.enableSuccess : _.disableSuccess, {
                        appName: l
                    }))
                }, C[14] = O, C[15] = M, C[16] = P, C[17] = E, C[18] = A, C[19] = w) : w = C[19], C[20] !== O || C[21] !== M || C[22] !== E || C[23] !== A ? (I = (e, t, n) => {
                    y.a.error("Failed to update app enablement", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), A.get(g.f).danger(M.formatMessage(_.updateError), {
                        errorAnalytics: {
                            toastId: "appsAvailability.onError.updateError"
                        }
                    }), n?.previousApps && E.setQueryData(O, n.previousApps)
                }, C[20] = O, C[21] = M, C[22] = E, C[23] = A, C[24] = I) : I = C[24], C[25] !== T || C[26] !== r || C[27] !== v || C[28] !== w || C[29] !== I ? (x = {
                    mutationFn: r,
                    onMutate: v,
                    onSuccess: w,
                    onError: I,
                    onSettled: T
                }, C[25] = T, C[26] = r, C[27] = v, C[28] = w, C[29] = I, C[30] = x) : x = C[30];
                let R = (0, a.a)(x),
                    U = R.isPending ? R.variables?.appId ?? null : null;
                return C[31] !== R.isPending || C[32] !== R.mutateAsync || C[33] !== U ? (S = {
                    setAppEnabled: R.mutateAsync,
                    isUpdating: R.isPending,
                    updatingAppId: U
                }, C[31] = R.isPending, C[32] = R.mutateAsync, C[33] = U, C[34] = S) : S = C[34], S
            }
        })
    }),
    GP9j: (function(e, t, n) {
        let o = (0, (n("Qgfj")).f)({
            workspaceSso: {
                id: "composer.connectorAuth.companyAccount.description",
                defaultMessage: "To use {connectorName}, open ChatGPT from your company’s app launcher or use the ChatGPT sign-in link from your IT team. Then return here and select Continue."
            },
            continue: {
                id: "composer.connectorAuth.continue.button.label",
                defaultMessage: "Continue"
            }
        });
        n.d(t, {}, {
            a: o
        })
    }),
    oxjR: (function(e, t, n) {
        var o = n("UKCO"),
            i = n("VVkm"),
            a = n("zvpH"),
            l = n("sLlu"),
            r = n("oo2L");
        let s = [null, "science"];

        function c(e) {
            return e.isAccessible && e.isEnabled
        }
        n.d(t, {}, {
            a: async function(e) {
                let {
                    hostId: t,
                    queryClient: n,
                    refreshAppsList: d
                } = e, u = n.getQueriesData({
                    queryKey: ["apps", "list", t]
                }), p = u.some(e => {
                    let [, t] = e;
                    return null != t
                }) ? u.flatMap(e => {
                    let [, t] = e;
                    return t ?? []
                }) : void 0, [g] = await Promise.all([d(), (0, l.a)(n, r.a)]);
                return ! function(e) {
                    let {
                        previousApps: t,
                        nextApps: n
                    } = e;
                    return null != t && !t.some(c) && n.some(c)
                }({
                    previousApps: p,
                    nextApps: g
                }) || (await (0, l.a)(n, (0, i.b)(t)), await Promise.all(s.map(e => (0, a.e)({
                    domain: e,
                    hostId: t,
                    projectRoot: (0, o.$e)(o.kd),
                    mode: "first-plugin-connect"
                }))), await Promise.all([n.invalidateQueries({
                    queryKey: a.a
                }), n.invalidateQueries({
                    queryKey: a.b
                })])), g
            }
        })
    }),
    atrt: (function(e, t, n) {
        var o = n("ABep"),
            i = n("QosV"),
            a = n("irkb"),
            l = n("Q840"),
            r = n("UKCO"),
            s = n("I3F6"),
            c = n("zd8w"),
            d = n("Qgfj"),
            u = n("Wf1j"),
            p = n("oyxz"),
            g = n("Dgwo"),
            f = n("oo2L"),
            h = n("Sx5O"),
            m = n("yGJ5"),
            b = n("NcQ7"),
            y = n("GP9j"),
            _ = n("CMv2"),
            v = n("QSD9"),
            w = n("pxeg"),
            I = n("PraM"),
            x = n("BQbE"),
            S = n("HUHI"),
            C = n("yxN2"),
            k = n("OiCI"),
            A = n("AcSY"),
            j = n("FvYa"),
            E = n("Ot7V"),
            P = n("HOLv"),
            M = n("SGsN"),
            N = n("OWtl"),
            O = n("ecE5"),
            T = n("kfGJ"),
            R = n("hZax"),
            U = n("WFY2"),
            q = n("Hl7m"),
            D = n("NE4U");
        let F = (0, d.f)({
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
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, L, G, Q, z, H, K, V, W, B, J, X, Y, $, Z, ee, et, en, eo, ei, ea, el, er, es, ec, ed, eu, ep = (0, i.c)(129),
                    {
                        conversationId: eg,
                        hostId: ef,
                        requestId: eh,
                        auth: em
                    } = e,
                    eb = (0, l.y)(N.a),
                    ey = (0, u.a)(),
                    e_ = (0, a.c)(),
                    ev = (0, R.i)();
                ep[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                    preview: !1
                }, ep[0] = t) : t = ep[0];
                let {
                    data: ew
                } = (0, A.f)(void 0, t), eI = (0, l.z)(M.f), [ex, eS] = (0, c.useState)(!1), [eC, ek] = (0, c.useState)(!1), [eA, ej] = (0, c.useState)(!1), eE = (0, c.useRef)(!1), eP = ef === r._b ? T.a : ef;
                ep[1] !== eP ? (n = {
                    hostId: eP
                }, ep[1] = eP, ep[2] = n) : n = ep[2];
                let {
                    data: eM,
                    hardRefetchAppsList: eN,
                    isPending: eO
                } = (0, S.m)(n);
                ep[3] !== eM ? (d = void 0 === eM ? [] : eM, ep[3] = eM, ep[4] = d) : d = ep[4];
                let eT = d;
                ep[5] !== em.connector.connector_id ? (L = [em.connector.connector_id], ep[5] = em.connector.connector_id, ep[6] = L) : L = ep[6], ep[7] !== eP || ep[8] !== L ? (G = {
                    appIds: L,
                    hostId: eP
                }, ep[7] = eP, ep[8] = L, ep[9] = G) : G = ep[9];
                let {
                    data: eR
                } = (0, x.c)(G);
                ep[10] !== eR ? (Q = void 0 === eR ? [] : eR, ep[10] = eR, ep[11] = Q) : Q = ep[11];
                let eU = Q;
                ep[12] === Symbol.for("react.memo_cache_sentinel") ? (z = () => {
                    eS(!0)
                }, ep[12] = z) : z = ep[12], ep[13] !== ef ? (H = {
                    hostId: ef,
                    oauthReferrer: "conversation_auth",
                    onExternalConnectStarted: z
                }, ep[13] = ef, ep[14] = H) : H = ep[14];
                let {
                    clearConnectingApp: eq,
                    clearPendingAppConnect: eD,
                    connectingApp: eF,
                    handleAppConnectOAuthStarted: eL,
                    handleConnectApp: eG,
                    handleOpenAppUrl: eQ,
                    isAppConnectPending: ez
                } = (0, C.a)(H), {
                    isAppConnectCallbackClaimed: eH
                } = (0, m.g)();
                ep[15] !== eT || ep[16] !== em.connector.connector_id ? (K = eT.find(e => e.id === em.connector.connector_id) ?? null, ep[15] = eT, ep[16] = em.connector.connector_id, ep[17] = K) : K = ep[17];
                let eK = K;
                ep[18] !== em.connector.connector_id || ep[19] !== eU ? (V = eU.find(e => e.id === em.connector.connector_id) ?? null, ep[18] = em.connector.connector_id, ep[19] = eU, ep[20] = V) : V = ep[20];
                let eV = V,
                    eW = eV?.name ?? em.connector.connector_name,
                    eB = em.connector.auth_reason,
                    eJ = "xaa_enrollment_required" === eB,
                    eX = "missing_link" === eB;
                ep[21] !== em.connector.connector_id ? (W = (0, b.a)(em.connector.connector_id), ep[21] = em.connector.connector_id, ep[22] = W) : W = ep[22];
                let eY = null != W,
                    e$ = "oauth_upgrade_required" === eB;
                ep[23] !== em.connector.connector_id || ep[24] !== ew?.plan_type || ep[25] !== eX || ep[26] !== ev ? (B = (0, _.d)({
                    planType: ew?.plan_type,
                    connectorId: em.connector.connector_id,
                    disableExposureLog: !0,
                    statsigClient: ev
                }), J = eX && null != (0, _.f)(em.connector.connector_id, B), ep[23] = em.connector.connector_id, ep[24] = ew?.plan_type, ep[25] = eX, ep[26] = ev, ep[27] = B, ep[28] = J) : (B = ep[27], J = ep[28]);
                let eZ = J;
                ep[29] !== em.connector.connector_id || ep[30] !== ew?.plan_type || ep[31] !== eX || ep[32] !== ev ? (X = eX && (0, w.f)({
                    planType: ew?.plan_type,
                    connectorId: em.connector.connector_id,
                    disableExposureLog: !0,
                    statsigClient: ev
                }), ep[29] = em.connector.connector_id, ep[30] = ew?.plan_type, ep[31] = eX, ep[32] = ev, ep[33] = X) : X = ep[33];
                let e1 = X,
                    e0 = eZ || e1;
                ep[34] !== em.connector.connector_id || ep[35] !== eg || ep[36] !== ex || ep[37] !== eH || ep[38] !== ez || ep[39] !== eh || ep[40] !== eY || ep[41] !== eJ ? ($ = {
                    kind: "connector-auth-elicitation",
                    conversationId: eg,
                    requestId: eh
                }, Y = eH(em.connector.connector_id, $), Z = eJ || !eY && (ex || ez(em.connector.connector_id, $)), ep[34] = em.connector.connector_id, ep[35] = eg, ep[36] = ex, ep[37] = eH, ep[38] = ez, ep[39] = eh, ep[40] = eY, ep[41] = eJ, ep[42] = Y, ep[43] = $, ep[44] = Z) : (Y = ep[42], $ = ep[43], Z = ep[44]);
                let e2 = Z,
                    e3 = F.reconnect;
                e2 ? e3 = y.a.continue : eX ? e3 = F.connect : e$ && (e3 = F.updateAccess), ep[45] !== em.connector.connector_id || ep[46] !== eD || ep[47] !== eg || ep[48] !== ef || ep[49] !== ey || ep[50] !== eh || ep[51] !== $ || ep[52] !== eb || ep[53] !== eI ? (ee = e => {
                    eE.current || (eE.current = !0, "decline" === e && eD({
                        appId: em.connector.connector_id,
                        resumeTarget: $
                    }), (0, g.b)(eb, ef).replyWithMcpServerElicitationResponse(eg, eh, (0, s.b)(e)).then(() => {
                        eD({
                            appId: em.connector.connector_id,
                            resumeTarget: $
                        })
                    }).catch(() => {
                        eE.current = !1, eI.danger(ey.formatMessage({
                            id: "composer.connectorAuth.responseError",
                            defaultMessage: "Could not submit your response. Please try again"
                        }), {
                            errorAnalytics: {
                                toastId: "composer.connectorAuth.responseError"
                            }
                        })
                    }))
                }, ep[45] = em.connector.connector_id, ep[46] = eD, ep[47] = eg, ep[48] = ef, ep[49] = ey, ep[50] = eh, ep[51] = $, ep[52] = eb, ep[53] = eI, ep[54] = ee) : ee = ep[54];
                let e4 = ee;
                ep[55] !== e4 ? (et = () => {
                    e4("decline")
                }, ep[55] = e4, ep[56] = et) : et = ep[56];
                let e5 = et;
                ep[57] !== em.connector.connector_id || ep[58] !== em.connector.install_url || ep[59] !== em.connector.link_id || ep[60] !== em.connector.requested_scopes || ep[61] !== em.url || ep[62] !== eB || ep[63] !== eP || ep[64] !== eW || ep[65] !== B || ep[66] !== eL || ep[67] !== eG || ep[68] !== eQ || ep[69] !== ey || ep[70] !== eO || ep[71] !== eK || ep[72] !== e_ || ep[73] !== e4 || ep[74] !== eY || ep[75] !== $ || ep[76] !== eb || ep[77] !== eZ || ep[78] !== e1 || ep[79] !== e0 || ep[80] !== eI ? (en = async () => {
                    eY ? ek(!0) : e0 && eO || (ej(!0), await (async () => {
                        if (e0 && null != eK) {
                            let e = {
                                scope: eb,
                                appId: em.connector.connector_id,
                                browserAccountId: (0, k.c)(eb) ?? void 0,
                                hostId: eP,
                                queryClient: e_
                            };
                            if ((await (eZ ? (0, v.a)({
                                    ...e,
                                    connectors: B
                                }) : (0, I.a)(e))).length > 0) return void await eG(eK, {
                                forceInApp: !0,
                                googleOAuthBundlePrepared: eZ,
                                microsoftOAuthBundlePrepared: e1
                            })
                        }
                        let e = {
                                id: em.connector.connector_id,
                                installUrl: eK?.installUrl ?? em.connector.install_url,
                                name: eW
                            },
                            t = !1;
                        switch ((await (0, f.t)({
                                scope: eb,
                                appConnectOptions: {
                                    connectorId: em.connector.connector_id,
                                    oauthReferrer: "conversation_auth"
                                },
                                app: e,
                                authReason: eB,
                                fallbackUrl: em.url,
                                linkId: em.connector.link_id,
                                onOAuthStarted: (n, o) => {
                                    t = !0, eL({
                                        app: e,
                                        oauthFlowCorrelationId: o?.oauthFlowCorrelationId,
                                        redirectUrl: n,
                                        resumeTarget: $
                                    })
                                },
                                openInBrowser: e => {
                                    t ? (0, E.f)({
                                        disposition: "current-tab",
                                        href: e,
                                        initiator: "open_in_browser_bridge",
                                        openTarget: "external-browser"
                                    }) : eQ(e)
                                },
                                queryClient: e_,
                                requestedScopes: em.connector.requested_scopes
                            })).kind) {
                            case "requires-mfa":
                            case "requires-connection-form":
                                return void ek(!0);
                            case "connected-directly":
                                return void e4("accept");
                            case "oauth-started":
                                eS(!0);
                                return;
                            case "browser-fallback":
                                return void eS(!0);
                            case "failed":
                                return void eI.danger(ey.formatMessage({
                                    id: "composer.connectorAuth.startError",
                                    defaultMessage: "Could not start connector authentication"
                                }), {
                                    errorAnalytics: {
                                        toastId: "composer.connectorAuth.startError"
                                    }
                                })
                        }
                    })().finally(() => {
                        ej(!1)
                    }))
                }, ep[57] = em.connector.connector_id, ep[58] = em.connector.install_url, ep[59] = em.connector.link_id, ep[60] = em.connector.requested_scopes, ep[61] = em.url, ep[62] = eB, ep[63] = eP, ep[64] = eW, ep[65] = B, ep[66] = eL, ep[67] = eG, ep[68] = eQ, ep[69] = ey, ep[70] = eO, ep[71] = eK, ep[72] = e_, ep[73] = e4, ep[74] = eY, ep[75] = $, ep[76] = eb, ep[77] = eZ, ep[78] = e1, ep[79] = e0, ep[80] = eI, ep[81] = en) : en = ep[81];
                let e6 = en;
                ep[82] !== e6 || ep[83] !== e4 || ep[84] !== e2 ? (eo = () => {
                    e2 ? e4("accept") : e6()
                }, ep[82] = e6, ep[83] = e4, ep[84] = e2, ep[85] = eo) : eo = ep[85];
                let e7 = eo;
                if (null != em.connector.connection_consent) return null;
                if (eJ) {
                    let e;
                    ep[86] !== eW ? (e = (0, o.jsx)(p.a, {
                        ...y.a.workspaceSso,
                        values: {
                            connectorName: eW
                        }
                    }), ep[86] = eW, ep[87] = e) : e = ep[87], ei = e
                } else if (eX) {
                    let e;
                    ep[88] !== eW ? (e = (0, o.jsx)(p.a, {
                        ...F.missingConnectionDescription,
                        values: {
                            connectorName: eW
                        }
                    }), ep[88] = eW, ep[89] = e) : e = ep[89], ei = e
                } else if (e$) {
                    let e;
                    ep[90] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(p.a, {
                        ...F.missingScopesDescription
                    }), ep[90] = e) : e = ep[90], ei = e
                } else {
                    let e;
                    ep[91] !== eW ? (e = (0, o.jsx)(p.a, {
                        ...F.reconnectDescription,
                        values: {
                            connectorName: eW
                        }
                    }), ep[91] = eW, ep[92] = e) : e = ep[92], ei = e
                }
                let e8 = eV?.iconUrl,
                    e9 = eV?.iconUrlDark;
                ep[93] === Symbol.for("react.memo_cache_sentinel") ? (ea = (0, o.jsx)(P.a, {
                    className: "text-secondary",
                    "aria-hidden": !1,
                    asset: D.a
                }), ep[93] = ea) : ea = ep[93], ep[94] !== em.connector.connector_id || ep[95] !== eW || ep[96] !== e8 || ep[97] !== e9 ? (el = (0, o.jsx)(j.a, {
                    alt: eW,
                    className: "icon-md rounded-sm object-contain",
                    knownAppId: em.connector.connector_id,
                    logoUrl: e8,
                    logoDarkUrl: e9,
                    fallback: ea
                }), ep[94] = em.connector.connector_id, ep[95] = eW, ep[96] = e8, ep[97] = e9, ep[98] = el) : el = ep[98], ep[99] !== e3 ? (er = (0, o.jsx)(p.a, {
                    ...e3
                }), ep[99] = e3, ep[100] = er) : er = ep[100];
                let te = eA || Y || e0 && eO;
                return ep[101] !== eW || ep[102] !== ei || ep[103] !== e5 || ep[104] !== e7 || ep[105] !== el || ep[106] !== er || ep[107] !== te ? (es = (0, o.jsx)(q.a, {
                    icon: el,
                    title: eW,
                    description: ei,
                    primaryActionLabel: er,
                    isPrimaryActionLoading: te,
                    onDecline: e5,
                    onSubmit: e7
                }), ep[101] = eW, ep[102] = ei, ep[103] = e5, ep[104] = e7, ep[105] = el, ep[106] = er, ep[107] = te, ep[108] = es) : es = ep[108], ep[109] !== em.connector.connector_id || ep[110] !== em.connector.link_id || ep[111] !== eB || ep[112] !== eP || ep[113] !== eN || ep[114] !== e4 || ep[115] !== eC ? (ec = eC ? (0, o.jsx)(h.b, {
                    oauthReferrer: "conversation_auth",
                    connectorId: em.connector.connector_id,
                    connectorAuth: {
                        authReason: eB,
                        linkId: em.connector.link_id
                    },
                    hostId: eP,
                    onConnected: () => {
                        e4("accept"), eN().catch(() => {
                            U.a.warning("Failed to refresh apps after connection", {
                                safe: {
                                    connectorId: em.connector.connector_id
                                }
                            })
                        })
                    },
                    onOpenChange: e => {
                        e || ek(!1)
                    }
                }) : null, ep[109] = em.connector.connector_id, ep[110] = em.connector.link_id, ep[111] = eB, ep[112] = eP, ep[113] = eN, ep[114] = e4, ep[115] = eC, ep[116] = ec) : ec = ep[116], ep[117] !== eq || ep[118] !== eF || ep[119] !== eP || ep[120] !== eL || ep[121] !== e4 || ep[122] !== $ || ep[123] !== e0 ? (ed = e0 ? (0, o.jsx)(O.a, {
                    oauthReferrer: "conversation_auth",
                    app: eF,
                    hostId: eP,
                    onConnected: () => {
                        e4("accept")
                    },
                    onExternalConnectStarted: () => {
                        eS(!0)
                    },
                    getOAuthResumeContext: () => ({
                        resumeTarget: $
                    }),
                    onOAuthStarted: e => {
                        eL({
                            ...e
                        }), eS(!0)
                    },
                    onOpenChange: e => {
                        e || eq()
                    }
                }) : null, ep[117] = eq, ep[118] = eF, ep[119] = eP, ep[120] = eL, ep[121] = e4, ep[122] = $, ep[123] = e0, ep[124] = ed) : ed = ep[124], ep[125] !== es || ep[126] !== ec || ep[127] !== ed ? (eu = (0, o.jsxs)(o.Fragment, {
                    children: [es, ec, ed]
                }), ep[125] = es, ep[126] = ec, ep[127] = ed, ep[128] = eu) : eu = ep[128], eu
            }
        })
    }),
    tjyI: (function(e, t, n) {
        n.d(t, {
            a: () => en
        });
        var o = n("ABep"),
            i = n("QosV"),
            a = n("irkb"),
            l = n("Q840"),
            r = n("UKCO"),
            s = n("I3F6"),
            c = n("Haiv"),
            d = n("zd8w"),
            u = n("Qgfj"),
            p = n("Wf1j"),
            g = n("oyxz"),
            f = n("Dgwo"),
            h = n("tl5a"),
            m = n("yGJ5"),
            b = n("NcQ7"),
            y = n("IBgA"),
            _ = n("oxjR"),
            v = n("hOO0"),
            w = n("BQbE"),
            I = n("HUHI"),
            x = n("PYah"),
            S = n("yxN2"),
            C = n("OiCI"),
            k = n("Cslg"),
            A = n("FvYa"),
            j = n("HOLv"),
            E = n("Bbed"),
            P = n("SGsN"),
            M = n("rO8L"),
            N = n("an0a"),
            O = n("CjMb"),
            T = n("Pdbe"),
            R = n("a0aG"),
            U = n("aVTW"),
            q = n("loz7"),
            D = n("ntKy"),
            F = n("Hl7m"),
            L = n("OWtl"),
            G = n("odxv");

        function Q(e) {
            let t, n, a, r, s, d, u, p, f, h, m = (0, i.c)(25),
                {
                    onboarding: b
                } = e,
                y = (0, l.y)(L.a);
            m[0] !== b.plugin ? (t = (0, c.a)(b.plugin), m[0] = b.plugin, m[1] = t) : t = m[1];
            let _ = t;
            m[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, o.jsx)(O.a, {
                className: "icon-md text-secondary"
            }), m[2] = n) : n = m[2], m[3] !== b.plugin.logoDarkPath || m[4] !== b.plugin.logoPath || m[5] !== _ ? (a = (0, o.jsx)(A.a, {
                alt: _,
                className: "icon-md rounded-sm object-contain",
                logoDarkUrl: b.plugin.logoDarkPath,
                logoUrl: b.plugin.logoPath,
                fallback: n
            }), m[3] = b.plugin.logoDarkPath, m[4] = b.plugin.logoPath, m[5] = _, m[6] = a) : a = m[6], m[7] !== _ ? (r = (0, o.jsx)(g.a, {
                id: "plugins.onboarding.title",
                defaultMessage: "{pluginName} is ready for use",
                values: {
                    pluginName: _
                }
            }), m[7] = _, m[8] = r) : r = m[8], m[9] !== _ ? (s = (0, o.jsx)(g.a, {
                id: "plugins.onboarding.description",
                defaultMessage: "Set up {pluginName} to start using it in ChatGPT",
                values: {
                    pluginName: _
                }
            }), m[9] = _, m[10] = s) : s = m[10], m[11] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, o.jsx)(g.a, {
                id: "plugins.onboarding.inline.setup",
                defaultMessage: "Setup"
            }), u = (0, o.jsx)(g.a, {
                id: "plugins.onboarding.inline.skip",
                defaultMessage: "Skip"
            }), m[11] = d, m[12] = u) : (d = m[11], u = m[12]);
            let v = "setup" === b.submittingAction,
                w = "skip" === b.submittingAction;
            return m[13] !== b || m[14] !== y ? (p = () => void(0, G.b)(y, b, "skip"), f = () => void(0, G.b)(y, b, "setup"), m[13] = b, m[14] = y, m[15] = p, m[16] = f) : (p = m[15], f = m[16]), m[17] !== p || m[18] !== f || m[19] !== a || m[20] !== r || m[21] !== s || m[22] !== v || m[23] !== w ? (h = (0, o.jsx)(F.a, {
                icon: a,
                title: r,
                description: s,
                primaryActionLabel: d,
                secondaryActionLabel: u,
                isPrimaryActionLoading: v,
                isSecondaryActionLoading: w,
                onDecline: p,
                onSubmit: f
            }), m[17] = p, m[18] = f, m[19] = a, m[20] = r, m[21] = s, m[22] = v, m[23] = w, m[24] = h) : h = m[24], h
        }
        var z = n("uzkw"),
            H = n("ugfi"),
            K = n("EEop"),
            V = n("cLdu"),
            W = n("ueue"),
            B = n("tSEg"),
            J = n("ecE5"),
            X = n("nvO1"),
            Y = n("WFY2"),
            $ = n("NE4U");
        let Z = (0, E.a)(() => Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(19577)]).then(n.bind(n, "cUuO")).then(e => e.TeamAddPluginsModal));
        async function ee(e, t, n, o) {
            let i = new Set(Array.from(await (0, x.a)(e, t, n, "shared"), v.a));
            return o.every(e => e.some(e => i.has((0, v.a)(e))))
        }
        let et = (0, u.f)({
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

        function en(e) {
            let t, n, a = (0, i.c)(7);
            a[0] !== e.conversationId || a[1] !== e.hostId || a[2] !== e.requestId ? (t = {
                hostId: e.hostId,
                conversationId: e.conversationId,
                requestId: e.requestId
            }, a[0] = e.conversationId, a[1] = e.hostId, a[2] = e.requestId, a[3] = t) : t = a[3];
            let r = (0, l.x)(G.a, t);
            return a[4] !== r || a[5] !== e ? (n = null == r ? (0, o.jsx)(eo, {
                ...e
            }) : (0, o.jsx)(Q, {
                onboarding: r
            }), a[4] = r, a[5] = e, a[6] = n) : n = a[6], n
        }

        function eo(e) {
            let t, n, u, x, E, G, Q, en, eo, er, es, ec, ed, eu, ep, eg, ef, eh, em, eb, ey, e_, ev, ew, eI, ex, eS, eC, ek, eA, ej, eE, eP, eM, eN, eO, eT, eR, eU, eq, eD, eF, eL, eG, eQ, ez, eH, eK, eV, eW, eB, eJ, eX = (0, i.c)(254),
                {
                    conversationId: eY,
                    hostId: e$,
                    requestId: eZ,
                    suggestion: e1
                } = e,
                e0 = (0, l.y)(L.a),
                e2 = (0, l.z)(C.b),
                e3 = (0, l.z)(k.k),
                e4 = (0, l.z)(B.j);
            eX[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Set, eX[0] = t) : t = eX[0];
            let e5 = (0, d.useRef)(t),
                e6 = (0, p.a)(),
                e7 = (0, l.z)(P.f),
                e8 = (0, a.c)(),
                [e9, te] = (0, d.useState)(null),
                [tt, tn] = (0, d.useState)(!1),
                [to, ti] = (0, d.useState)(null),
                [ta, tl] = (0, d.useState)(null),
                [tr, ts] = (0, d.useState)(null),
                tc = (0, N.c)(eY);
            eX[1] !== e$ ? (n = (0, V.i)(e$), eX[1] = e$, eX[2] = n) : n = eX[2];
            let td = n;
            eX[3] !== eY || eX[4] !== e$ ? (u = {
                hostId: e$,
                threadId: eY
            }, eX[3] = eY, eX[4] = e$, eX[5] = u) : u = eX[5];
            let tu = (0, l.x)(h.fc, u),
                tp = "install" === e1.suggest_type && e$ === r._b && tu?.threadAccess === "shared",
                tg = "install" === e1.suggest_type && e$ === r._b && null == tu,
                tf = td || tc.hostId !== e$ || null == tc.cwd ? void 0 : [tc.cwd],
                th = !td;
            eX[6] !== e$ || eX[7] !== th ? (x = {
                hostId: e$,
                enabled: th
            }, eX[6] = e$, eX[7] = th, eX[8] = x) : x = eX[8];
            let tm = (0, M.a)(x),
                tb = !td && "plugin" === e1.tool_type && "enable" === e1.suggest_type,
                ty = !tb && "plugin" === e1.tool_type && (td || tm),
                t_ = (0, d.useRef)(!1);
            eX[9] !== eY || eX[10] !== e$ || eX[11] !== eZ || eX[12] !== e0 ? (E = e => {
                t_.current || (t_.current = !0, (0, f.b)(e0, e$).replyWithMcpServerElicitationResponse(eY, eZ, (0, s.b)(e)).catch(() => {
                    t_.current = !1
                }))
            }, eX[9] = eY, eX[10] = e$, eX[11] = eZ, eX[12] = e0, eX[13] = E) : E = eX[13];
            let tv = E,
                tw = "connector" === e1.tool_type;
            eX[14] !== e$ || eX[15] !== tw ? (G = {
                enabled: tw,
                hostId: e$
            }, eX[14] = e$, eX[15] = tw, eX[16] = G) : G = eX[16];
            let {
                data: tI,
                refetch: tx
            } = (0, I.m)(G);
            eX[17] !== tI ? (Q = void 0 === tI ? [] : tI, eX[17] = tI, eX[18] = Q) : Q = eX[18];
            let tS = Q;
            eX[19] !== e1.tool_id || eX[20] !== e1.tool_type ? (en = "connector" === e1.tool_type ? [e1.tool_id] : [], eX[19] = e1.tool_id, eX[20] = e1.tool_type, eX[21] = en) : en = eX[21], eX[22] !== e$ || eX[23] !== en ? (eo = {
                appIds: en,
                hostId: e$
            }, eX[22] = e$, eX[23] = en, eX[24] = eo) : eo = eX[24];
            let {
                data: tC
            } = (0, w.c)(eo);
            eX[25] !== tC ? (er = void 0 === tC ? [] : tC, eX[25] = tC, eX[26] = er) : er = eX[26];
            let tk = er,
                {
                    data: tA,
                    isLoading: tj,
                    refetch: tE
                } = (0, V.l)({
                    enabled: "plugin" === e1.tool_type && tb && tm,
                    hostId: e$,
                    roots: tf,
                    resolveActiveRoots: tb
                });
            eX[27] !== tA ? (es = tA ?? [], eX[27] = tA, eX[28] = es) : es = eX[28];
            let tP = es;
            eX[29] !== eZ ? (ec = () => {
                ti(eZ)
            }, eX[29] = eZ, eX[30] = ec) : ec = eX[30], eX[31] !== e$ || eX[32] !== ec ? (ed = {
                hostId: e$,
                oauthReferrer: "tool_suggestion",
                onExternalConnectStarted: ec
            }, eX[31] = e$, eX[32] = ec, eX[33] = ed) : ed = eX[33];
            let {
                clearConnectingApp: tM,
                connectingApp: tN,
                handleAppConnectOAuthStarted: tO,
                handleConnectApp: tT,
                handleOpenAppUrl: tR,
                isAppConnectPending: tU
            } = (0, S.a)(ed), {
                clearPendingAppConnect: tq,
                getPendingTeamElicitationConnect: tD,
                isAppConnectCallbackClaimed: tF
            } = (0, m.g)();
            eX[34] !== eY || eX[35] !== tD || eX[36] !== e$ || eX[37] !== eZ ? (eu = tD(e$, eY, eZ), eX[34] = eY, eX[35] = tD, eX[36] = e$, eX[37] = eZ, eX[38] = eu) : eu = eX[38];
            let tL = eu,
                tG = tL?.resumeTarget.kind === "service-account" ? tL.resumeTarget : null,
                tQ = tG?.pendingElicitationReply?.oauth,
                tz = tr === eZ || null != tL && (tL.claimed || tQ?.kind === "connected") && tQ?.kind !== "failed" && tL.oauthState !== ta,
                tH = tQ?.kind === "connected" ? tL?.oauthState : null,
                tK = tG?.accountId,
                tV = tG?.pendingElicitationReply?.actorUserId;
            eX[39] !== eY || eX[40] !== tr || eX[41] !== e$ || eX[42] !== eZ || eX[43] !== e0 ? (ep = () => {
                if (tr === eZ) return e0.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(h.H, eY) === e$ && t(h.xb, eY)?.some(e => e.id === eZ) && (t_.current = !1, ts(null))
                })
            }, eg = [eY, tr, e$, eZ, e0], eX[39] = eY, eX[40] = tr, eX[41] = e$, eX[42] = eZ, eX[43] = e0, eX[44] = ep, eX[45] = eg) : (ep = eX[44], eg = eX[45]), (0, d.useEffect)(ep, eg), eX[46] !== e$ ? (ef = {
                hostId: e$
            }, eX[46] = e$, eX[47] = ef) : ef = eX[47];
            let {
                setAppEnabled: tW,
                updatingAppId: tB
            } = (0, y.a)(ef);
            eX[48] !== e$ ? (eh = {
                hostId: e$
            }, eX[48] = e$, eX[49] = eh) : eh = eX[49];
            let {
                pendingPluginId: tJ,
                setPluginEnabled: tX
            } = (0, H.d)(eh), tY = "plugin" === e1.tool_type ? e1 : null, {
                installPlugin: t$,
                status: tZ
            } = (0, D.e)(), t1 = (0, l.z)(q.o), t0 = "connector" === e1.tool_type ? e1 : null;
            eX[50] !== t0 ? (em = t0?.suggest_type === "install" && null != (0, b.a)(t0.tool_id), eX[50] = t0, eX[51] = em) : em = eX[51];
            let t2 = em,
                t3 = null == t0 ? null : {
                    kind: "tool-suggestion-elicitation",
                    conversationId: eY,
                    requestId: eZ,
                    response: (0, s.b)("accept")
                },
                t4 = null == tY ? null : tY.remote_plugin_id ?? (td ? tY.tool_id : null),
                t5 = (0, K.g)({
                    hostId: e$,
                    pluginId: td ? t4 : tY?.tool_id ?? null,
                    remotePluginId: t4,
                    roots: tf
                });
            eX[52] !== ty ? (eb = {
                enabled: ty
            }, eX[52] = ty, eX[53] = eb) : eb = eX[53];
            let {
                data: t6,
                isLoading: t7,
                refetch: t8
            } = (0, l.x)(K.l, t5, eb), t9 = null == t0 ? null : tS.find(e => e.id === t0.tool_id) ?? null;
            eX[54] !== tk || eX[55] !== t0 ? (ey = null == t0 ? null : tk.find(e => e.id === t0.tool_id) ?? null, eX[54] = tk, eX[55] = t0, eX[56] = ey) : ey = eX[56];
            let ne = ey,
                nt = null == tY ? null : tP.find(e => e.plugin.id === tY.tool_id) ?? null;
            tb || (nt = ty && null != t6 ? (0, W.c)(t6) : null);
            let nn = el({
                    app: t9,
                    plugin: nt,
                    suggestion: e1
                }),
                no = tN?.id === e1.tool_id,
                ni = null != t3 && tU(e1.tool_id, t3),
                na = null != t3 && tF(e1.tool_id, t3),
                nl = (0, D.a)(tZ, {
                    hostId: e$,
                    pluginId: tZ?.phase === "loading" ? t4 ?? e1.tool_id : nt?.plugin.id ?? e1.tool_id
                }),
                nr = to === eZ || ni,
                ns = "plugin" === e1.tool_type && "install" === e1.suggest_type && "closed" !== t1.kind && t1.hostId === e$ && t1.pendingElicitationReply?.conversationId === eY && t1.pendingElicitationReply?.requestId === eZ,
                nc = td && "plugin" === e1.tool_type && "install" === e1.suggest_type,
                nd = tJ === (nt?.plugin.id ?? e1.tool_id);
            "connector" === e1.tool_type ? nd = "install" === e1.suggest_type ? no || na : tB === e1.tool_id : "install" === e1.suggest_type && (nd = nl || ns);
            let nu = !tp && (na || !nc && !nd && (nn || nr)),
                np = tY?.suggest_type !== "install" || nu || e4 ? null : t4 ?? tY.tool_id;
            eX[57] !== e2 || eX[58] !== eY || eX[59] !== e$ || eX[60] !== t7 || eX[61] !== eZ || eX[62] !== np || eX[63] !== e3 ? (e_ = null == np || t7 ? void 0 : JSON.stringify([e2, e3, e$, eY, eZ, np]), eX[57] = e2, eX[58] = eY, eX[59] = e$, eX[60] = t7, eX[61] = eZ, eX[62] = np, eX[63] = e3, eX[64] = e_) : e_ = eX[64];
            let ng = e_;
            eX[65] !== e2 || eX[66] !== eY || eX[67] !== t6 || eX[68] !== np || eX[69] !== e3 ? (ev = e => {
                if (null == np || null == e2 || null == e3 || t_.current) return;
                let t = null == t6 ? null : (0, U.a)(t6, void 0, null);
                (0, z.a)({
                    connectorId: null == t ? void 0 : (0, v.a)(t.id),
                    conversationId: eY,
                    eventType: e,
                    expectedIdentity: {
                        accountId: e2,
                        userId: e3
                    },
                    pluginId: np,
                    productSurface: "CODEX"
                })
            }, eX[65] = e2, eX[66] = eY, eX[67] = t6, eX[68] = np, eX[69] = e3, eX[70] = ev) : ev = eX[70];
            let nf = ev,
                nh = tg || null != tY && t7 || tt || tz || nd || (td || tb) && "plugin" === e1.tool_type && "enable" === e1.suggest_type && tj,
                nm = et.enable;
            nu ? nm = et.continue : "install" === e1.suggest_type && (nm = et.install);
            let nb = null == nt ? ne?.name ?? t9?.name ?? e1.tool_name : (0, c.a)(nt),
                ny = "plugin" === e1.tool_type ? nt?.description : ne?.description ?? t9?.description,
                n_ = t0?.tool_id,
                nv = ne?.iconUrl,
                nw = ne?.iconUrlDark;
            eX[71] === Symbol.for("react.memo_cache_sentinel") ? (ew = (0, o.jsx)(j.a, {
                className: "text-secondary",
                "aria-hidden": !1,
                asset: $.a
            }), eX[71] = ew) : ew = eX[71], eX[72] !== nb || eX[73] !== n_ || eX[74] !== nv || eX[75] !== nw ? (eI = (0, o.jsx)(A.a, {
                alt: nb,
                className: "icon-md rounded-sm object-contain",
                knownAppId: n_,
                logoUrl: nv,
                logoDarkUrl: nw,
                fallback: ew
            }), eX[72] = nb, eX[73] = n_, eX[74] = nv, eX[75] = nw, eX[76] = eI) : eI = eX[76];
            let nI = eI;
            if ("plugin" === e1.tool_type) {
                let e, t, n = nt?.logoDarkPath ?? null,
                    i = nt?.logoPath ?? null;
                eX[77] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(O.a, {
                    className: "icon-md text-secondary"
                }), eX[77] = e) : e = eX[77], eX[78] !== e1.tool_name || eX[79] !== n || eX[80] !== i ? (t = (0, o.jsx)(A.a, {
                    alt: e1.tool_name,
                    className: "icon-md rounded-sm object-contain",
                    logoDarkUrl: n,
                    logoUrl: i,
                    fallback: e
                }), eX[78] = e1.tool_name, eX[79] = n, eX[80] = i, eX[81] = t) : t = eX[81], nI = t
            }
            eX[82] !== nf || eX[83] !== tv ? (ex = () => {
                nf("dismiss"), tv("decline")
            }, eX[82] = nf, eX[83] = tv, eX[84] = ex) : ex = eX[84];
            let nx = ex;
            eX[85] !== t0 || eX[86] !== tT || eX[87] !== tR || eX[88] !== t2 || eX[89] !== t9 || eX[90] !== eZ ? (eS = async () => {
                (t2 || ti(eZ), null != t9) ? await tT(t9): null != t0 && (tR(t0.install_url), ti(eZ))
            }, eX[85] = t0, eX[86] = tT, eX[87] = tR, eX[88] = t2, eX[89] = t9, eX[90] = eZ, eX[91] = eS) : eS = eX[91];
            let nS = eS;
            eX[92] !== eY || eX[93] !== e$ || eX[94] !== td || eX[95] !== t$ || eX[96] !== e6 || eX[97] !== nt || eX[98] !== tY?.suggestion_id || eX[99] !== t8 || eX[100] !== t4 || eX[101] !== eZ || eX[102] !== ty || eX[103] !== e1.tool_name || eX[104] !== e7 ? (eC = async () => {
                let e = nt;
                if (td && null != t4) e = {
                    displayName: e1.tool_name,
                    remoteMarketplaceName: r.cd,
                    remotePluginId: t4
                };
                else if (null == e && ty) {
                    tn(!0);
                    let {
                        data: t
                    } = await t8().finally(() => {
                        tn(!1)
                    });
                    e = null == t ? null : (0, W.c)(t)
                }
                null == e ? e7.danger(e6.formatMessage(et.missingPlugin), {
                    errorAnalytics: {
                        toastId: "inlineToolSuggestionRequestCard.handleInstallPlugin.missingPlugin"
                    }
                }) : t$(e, {
                    elicitationOwnsConnectorRefresh: !0,
                    hostId: e$,
                    marketplaceAnalytics: {
                        ...R.b.composer,
                        suggestionId: tY?.suggestion_id
                    },
                    origin: "in_conversation_elicitation",
                    pendingElicitationReply: {
                        conversationId: eY,
                        requestId: eZ,
                        response: (0, s.b)("accept")
                    }
                })
            }, eX[92] = eY, eX[93] = e$, eX[94] = td, eX[95] = t$, eX[96] = e6, eX[97] = nt, eX[98] = tY?.suggestion_id, eX[99] = t8, eX[100] = t4, eX[101] = eZ, eX[102] = ty, eX[103] = e1.tool_name, eX[104] = e7, eX[105] = eC) : eC = eX[105];
            let nC = eC;
            eX[106] !== eZ ? (ek = async e => {
                let {
                    enabled: t,
                    setEnabled: n
                } = e;
                t && ti(eZ);
                try {
                    await n()
                } catch {
                    return
                }
            }, eX[106] = eZ, eX[107] = ek) : ek = eX[107];
            let nk = ek;
            eX[108] !== nk || eX[109] !== tW ? (eA = e => {
                let {
                    appId: t,
                    enabled: n
                } = e;
                return nk({
                    enabled: n,
                    setEnabled: () => tW({
                        appId: t,
                        enabled: n
                    })
                })
            }, eX[108] = nk, eX[109] = tW, eX[110] = eA) : eA = eX[110];
            let nA = eA;
            eX[111] !== nk || eX[112] !== td || eX[113] !== nt || eX[114] !== tX ? (ej = e => {
                let {
                    pluginDisplayName: t,
                    pluginId: n,
                    enabled: o
                } = e;
                return nk({
                    enabled: o,
                    setEnabled: () => tX({
                        pluginDisplayName: t,
                        pluginId: n,
                        plugin: td ? nt?.plugin : void 0,
                        enabled: o
                    })
                })
            }, eX[111] = nk, eX[112] = td, eX[113] = nt, eX[114] = tX, eX[115] = ej) : ej = eX[115];
            let nj = ej;
            eX[116] !== e6 || eX[117] !== nc || eX[118] !== tb || eX[119] !== ns || eX[120] !== tE || eX[121] !== t8 || eX[122] !== tv || eX[123] !== e1 || eX[124] !== e7 ? (eE = async () => {
                nc || ns || (tn(!0), await (async () => {
                    try {
                        let e;
                        if ("connector" === e1.tool_type) return void tv("accept");
                        if (tb) e = (await tE()).data?.find(e => e.plugin.id === e1.tool_id) ?? null;
                        else {
                            let {
                                data: t
                            } = await t8({
                                throwOnError: !0
                            });
                            e = null == t ? null : (0, W.c)(t)
                        }
                        if (!el({
                                app: null,
                                plugin: e,
                                suggestion: e1
                            })) return void e7.danger(e6.formatMessage(et.pluginNotReady, {
                            toolName: e1.tool_name
                        }), {
                            errorAnalytics: {
                                toastId: "inlineToolSuggestionRequestCard.handleContinue.pluginNotReady"
                            }
                        });
                        tv("accept")
                    } catch (e) {
                        Y.a.error("Failed to refresh tool suggestion readiness", {
                            safe: {
                                toolId: e1.tool_id,
                                toolType: e1.tool_type
                            },
                            sensitive: {
                                error: e
                            }
                        }), e7.danger(e6.formatMessage(et.genericLoadError), {
                            errorAnalytics: {
                                toastId: "inlineToolSuggestionRequestCard.handleContinue.genericLoadError"
                            }
                        })
                    }
                })().finally(() => {
                    tn(!1)
                }))
            }, eX[116] = e6, eX[117] = nc, eX[118] = tb, eX[119] = ns, eX[120] = tE, eX[121] = t8, eX[122] = tv, eX[123] = e1, eX[124] = e7, eX[125] = eE) : eE = eX[125];
            let nE = eE;
            eX[126] !== e6 || eX[127] !== e7 ? (eP = e => {
                e7.danger(e ?? e6.formatMessage(et.genericLoadError), {
                    errorAnalytics: {
                        toastId: "inlineToolSuggestionRequestCard.teamInstall"
                    }
                })
            }, eX[126] = e6, eX[127] = e7, eX[128] = eP) : eP = eX[128];
            let nP = eP;
            eX[129] !== tq || eX[130] !== eY || eX[131] !== e$ || eX[132] !== eZ || eX[133] !== e0 || eX[134] !== nP || eX[135] !== tL?.oauthState ? (eM = async (e, t) => {
                let n = void 0 === e ? (0, s.b)("accept") : e,
                    o = t ?? tL?.oauthState;
                if (t_.current) return !0;
                t_.current = !0;
                try {
                    if (await (0, f.b)(e0, e$).replyWithMcpServerElicitationResponse(eY, eZ, n), await (0, m.i)(e0, e$, eY, eZ)) return null != o && (ts(eZ), tq({
                        oauthState: o,
                        hostId: e$
                    })), te(null), !0
                } catch (e) {
                    Y.a.error("Failed to resume the Team chat", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                }
                return t_.current = !1, nP(), !1
            }, eX[129] = tq, eX[130] = eY, eX[131] = e$, eX[132] = eZ, eX[133] = e0, eX[134] = nP, eX[135] = tL?.oauthState, eX[136] = eM) : eM = eX[136];
            let nM = eM;
            eX[137] !== eY || eX[138] !== ta || eX[139] !== e$ || eX[140] !== e8 || eX[141] !== eZ || eX[142] !== e0 || eX[143] !== nM || eX[144] !== nP || eX[145] !== tL ? (eN = async (e, t) => {
                let n = tL?.resumeTarget,
                    o = n?.kind === "service-account" ? n.pendingElicitationReply : void 0,
                    i = o?.oauth;
                if (tL?.oauthState !== e || n?.kind !== "service-account" || null == o || i?.kind !== "connected" || ta === e) return;
                let a = () => null != o.actorUserId && e0.get(k.k) === o.actorUserId && e0.get(k.f) === n.accountId && e0.get(h.H, eY) === e$ && e0.get(h.xb, eY)?.some(e => e.id === eZ) === !0;
                if (a()) {
                    if ((0, v.a)(tL.appId) !== (0, v.a)(i.connectorId)) {
                        tl(e), nP();
                        return
                    }
                    try {
                        await Promise.all([e8.invalidateQueries({
                            queryKey: ["service-account-plugins", n.accountId, n.serviceAccountId]
                        }), (0, X.e)(e0, n.accountId)]);
                        let l = await ee(e0, e$, eY, [
                            [i.connectorId]
                        ]);
                        if (t() || !a()) return;
                        if (!l) {
                            tl(e), nP();
                            return
                        }
                        await nM(o.response, e) || t() || tl(e)
                    } catch (n) {
                        t() || (Y.a.error("Failed to resume Team app connect elicitation", {
                            safe: {
                                connectorId: i.connectorId
                            },
                            sensitive: {
                                error: n
                            }
                        }), tl(e), nP())
                    }
                }
            }, eX[137] = eY, eX[138] = ta, eX[139] = e$, eX[140] = e8, eX[141] = eZ, eX[142] = e0, eX[143] = nM, eX[144] = nP, eX[145] = tL, eX[146] = eN) : eN = eX[146];
            let nN = (0, d.useEffectEvent)(eN);
            eX[147] !== tH || eX[148] !== eY || eX[149] !== e$ || eX[150] !== eZ || eX[151] !== nN || eX[152] !== e0 || eX[153] !== tK || eX[154] !== tV ? (eO = () => {
                if (null == tH) return;
                let e = !1,
                    t = !1,
                    n = e0.watch(n => {
                        let {
                            get: o
                        } = n, i = o(h.H, eY), a = o(h.xb, eY), l = o(k.f), r = o(k.k);
                        !t && i === e$ && a?.some(e => e.id === eZ) && l === tK && r === tV && (t = !0, nN(tH, () => e))
                    });
                return () => {
                    e = !0, n()
                }
            }, eX[147] = tH, eX[148] = eY, eX[149] = e$, eX[150] = eZ, eX[151] = nN, eX[152] = e0, eX[153] = tK, eX[154] = tV, eX[155] = eO) : eO = eX[155], eX[156] !== tH || eX[157] !== eY || eX[158] !== e$ || eX[159] !== eZ || eX[160] !== e0 || eX[161] !== tK || eX[162] !== tV ? (eT = [e0, e$, eY, eZ, tH, tK, tV], eX[156] = tH, eX[157] = eY, eX[158] = e$, eX[159] = eZ, eX[160] = e0, eX[161] = tK, eX[162] = tV, eX[163] = eT) : eT = eX[163], (0, d.useEffect)(eO, eT), eX[164] !== eY || eX[165] !== e$ || eX[166] !== e6 || eX[167] !== e0 || eX[168] !== nM || eX[169] !== nP || eX[170] !== e1.tool_name ? (eR = async e => {
                try {
                    if (await ee(e0, e$, eY, e)) return void await nM()
                } catch (e) {
                    Y.a.error("Failed to check Team setup", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                }
                nP(e6.formatMessage(et.pluginNotReady, {
                    toolName: e1.tool_name
                }))
            }, eX[164] = eY, eX[165] = e$, eX[166] = e6, eX[167] = e0, eX[168] = nM, eX[169] = nP, eX[170] = e1.tool_name, eX[171] = eR) : eR = eX[171];
            let nO = eR;
            eX[172] !== eY || eX[173] !== e$ || eX[174] !== e6 || eX[175] !== ne || eX[176] !== t4 || eX[177] !== e0 || eX[178] !== nM || eX[179] !== nP || eX[180] !== e1.tool_id || eX[181] !== e1.tool_type ? (eU = async () => {
                try {
                    let e, t = await async function(e) {
                        let t = e.get(k.f);
                        return null == t ? null : null
                    }(e0);
                    if (null == t) return void nP();
                    if ("connector" === e1.tool_type) {
                        if (null == ne) return void nP();
                        e = {
                            kind: "connector",
                            connectorId: (0, v.a)(e1.tool_id),
                            app: ne
                        }
                    } else {
                        if (null == t4) return void nP(e6.formatMessage(et.missingPlugin));
                        e = {
                            kind: "plugin",
                            pluginId: t4
                        }
                    }
                    let n = {
                        ...t,
                        start: e
                    };
                    if ("connector" === e.kind && await ee(e0, e$, eY, [
                            [e.connectorId]
                        ]).catch(ei)) return void await nM();
                    te(n)
                } catch (e) {
                    Y.a.error("Failed to prepare Team setup", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), nP()
                }
            }, eX[172] = eY, eX[173] = e$, eX[174] = e6, eX[175] = ne, eX[176] = t4, eX[177] = e0, eX[178] = nM, eX[179] = nP, eX[180] = e1.tool_id, eX[181] = e1.tool_type, eX[182] = eU) : eU = eX[182];
            let nT = eU;
            eX[183] !== nE || eX[184] !== nS || eX[185] !== nC || eX[186] !== nA || eX[187] !== nj || eX[188] !== nT || eX[189] !== e6 || eX[190] !== tp || eX[191] !== tg || eX[192] !== t9 || eX[193] !== nt || eX[194] !== nf || eX[195] !== nu || eX[196] !== e1.suggest_type || eX[197] !== e1.tool_type || eX[198] !== e7 ? (eq = async () => {
                if (!tg) {
                    if (nf("click"), tp) {
                        tn(!0), await nT().finally(() => {
                            tn(!1)
                        });
                        return
                    }
                    if (nu) return void await nE();
                    if ("connector" === e1.tool_type) return "install" === e1.suggest_type ? void await nS() : null == t9 ? void await nE() : void await nA({
                        appId: t9.id,
                        enabled: !0
                    });
                    if ("install" === e1.suggest_type) return void await nC();
                    if (null == nt) return void e7.danger(e6.formatMessage(et.missingPlugin), {
                        errorAnalytics: {
                            toastId: "inlineToolSuggestionRequestCard.handlePrimaryAction.missingPlugin"
                        }
                    });
                    await nj({
                        pluginDisplayName: (0, c.a)(nt),
                        pluginId: nt.plugin.id,
                        enabled: !0
                    })
                }
            }, eX[183] = nE, eX[184] = nS, eX[185] = nC, eX[186] = nA, eX[187] = nj, eX[188] = nT, eX[189] = e6, eX[190] = tp, eX[191] = tg, eX[192] = t9, eX[193] = nt, eX[194] = nf, eX[195] = nu, eX[196] = e1.suggest_type, eX[197] = e1.tool_type, eX[198] = e7, eX[199] = eq) : eq = eX[199];
            let nR = eq;
            eX[200] !== e2 || eX[201] !== ng || eX[202] !== nf || eX[203] !== e3 ? (eD = e => {
                if (!(e?.parentElement == null || null == ng || null == e2 || null == e3 || e5.current.has(ng))) return (0, T.b)(e.parentElement, e5.current, void 0, {
                    loggedPluginIds: e5.current,
                    onViewed: () => nf("viewed")
                })
            }, eX[200] = e2, eX[201] = ng, eX[202] = nf, eX[203] = e3, eX[204] = eD) : eD = eX[204];
            let nU = nu && nr;
            return eX[205] !== e1 || eX[206] !== nb || eX[207] !== nU ? (eF = (0, o.jsx)(ea, {
                showContinueTitle: nU,
                suggestion: e1,
                title: nb
            }), eX[205] = e1, eX[206] = nb, eX[207] = nU, eX[208] = eF) : eF = eX[208], eX[209] !== tz || eX[210] !== nm ? (eL = tz ? (0, o.jsx)(g.a, {
                id: "settings.mcp.appConnectModal.completingConnectionButton",
                defaultMessage: "Finishing connection…"
            }) : (0, o.jsx)(g.a, {
                ...nm
            }), eX[209] = tz, eX[210] = nm, eX[211] = eL) : eL = eX[211], eX[212] !== nR ? (eG = () => {
                nR()
            }, eX[212] = nR, eX[213] = eG) : eG = eX[213], eX[214] !== nx || eX[215] !== ng || eX[216] !== nh || eX[217] !== ny || eX[218] !== nI || eX[219] !== eD || eX[220] !== eF || eX[221] !== eL || eX[222] !== eG ? (eQ = (0, o.jsx)(F.a, {
                ref: eD,
                impressionId: ng,
                icon: nI,
                title: eF,
                description: ny,
                primaryActionLabel: eL,
                isPrimaryActionLoading: nh,
                onDecline: nx,
                onSubmit: eG
            }), eX[214] = nx, eX[215] = ng, eX[216] = nh, eX[217] = ny, eX[218] = nI, eX[219] = eD, eX[220] = eF, eX[221] = eL, eX[222] = eG, eX[223] = eQ) : eQ = eX[223], eX[224] !== nO || eX[225] !== eY || eX[226] !== e$ || eX[227] !== eZ || eX[228] !== e9 ? (ez = null == e9 ? null : (0, o.jsx)(Z, {
                ...e9,
                onClose: () => te(null),
                onComplete: nO,
                elicitation: {
                    hostId: e$,
                    reply: {
                        conversationId: eY,
                        requestId: eZ,
                        response: (0, s.b)("accept")
                    }
                }
            }), eX[224] = nO, eX[225] = eY, eX[226] = e$, eX[227] = eZ, eX[228] = e9, eX[229] = ez) : ez = eX[229], eX[230] !== tM ? (eH = e => {
                e || tM()
            }, eX[230] = tM, eX[231] = eH) : eH = eX[231], eX[232] !== e$ || eX[233] !== t2 || eX[234] !== e8 || eX[235] !== tx || eX[236] !== eZ ? (eK = async () => {
                t2 && ti(eZ), await (0, _.a)({
                    hostId: e$,
                    queryClient: e8,
                    refreshAppsList: async () => (await tx()).data ?? []
                })
            }, eX[232] = e$, eX[233] = t2, eX[234] = e8, eX[235] = tx, eX[236] = eZ, eX[237] = eK) : eK = eX[237], eX[238] !== eY || eX[239] !== eZ ? (eV = () => ({
                resumeTarget: {
                    kind: "tool-suggestion-elicitation",
                    conversationId: eY,
                    requestId: eZ,
                    response: (0, s.b)("accept")
                }
            }), eX[238] = eY, eX[239] = eZ, eX[240] = eV) : eV = eX[240], eX[241] !== tO ? (eW = e => {
                tO({
                    ...e
                })
            }, eX[241] = tO, eX[242] = eW) : eW = eX[242], eX[243] !== tN || eX[244] !== e$ || eX[245] !== eH || eX[246] !== eK || eX[247] !== eV || eX[248] !== eW ? (eB = (0, o.jsx)(J.a, {
                oauthReferrer: "tool_suggestion",
                app: tN,
                hostId: e$,
                onOpenChange: eH,
                onConnected: eK,
                getOAuthResumeContext: eV,
                onOAuthStarted: eW
            }), eX[243] = tN, eX[244] = e$, eX[245] = eH, eX[246] = eK, eX[247] = eV, eX[248] = eW, eX[249] = eB) : eB = eX[249], eX[250] !== eQ || eX[251] !== ez || eX[252] !== eB ? (eJ = (0, o.jsxs)(o.Fragment, {
                children: [eQ, ez, eB]
            }), eX[250] = eQ, eX[251] = ez, eX[252] = eB, eX[253] = eJ) : eJ = eX[253], eJ
        }

        function ei() {
            return !1
        }

        function ea(e) {
            let t = (0, i.c)(6),
                {
                    showContinueTitle: n,
                    suggestion: a,
                    title: l
                } = e;
            if ("install" !== a.suggest_type || !n) {
                let e;
                return t[0] !== l ? (e = (0, o.jsx)(o.Fragment, {
                    children: l
                }), t[0] = l, t[1] = e) : e = t[1], e
            }
            switch (a.tool_type) {
                case "connector": {
                    let e;
                    return t[2] !== l ? (e = (0, o.jsx)(g.a, {
                        id: "composer.toolSuggestion.connector.continueInstallTitle",
                        defaultMessage: "Click Continue when you're done connecting {toolName}",
                        values: {
                            toolName: l
                        }
                    }), t[2] = l, t[3] = e) : e = t[3], e
                }
                case "plugin": {
                    let e;
                    return t[4] !== l ? (e = (0, o.jsx)(g.a, {
                        id: "composer.toolSuggestion.plugin.continueInstallTitle",
                        defaultMessage: "Click Continue when you're done installing the {toolName} plugin",
                        values: {
                            toolName: l
                        }
                    }), t[4] = l, t[5] = e) : e = t[5], e
                }
            }
        }

        function el(e) {
            let {
                app: t,
                plugin: n,
                suggestion: o
            } = e;
            switch (o.tool_type) {
                case "connector":
                    if (t?.isAccessible !== !0) return !1;
                    if ("install" === o.suggest_type) return !0;
                    return t.isEnabled;
                case "plugin":
                    if (n?.plugin.installed !== !0) return !1;
                    if ("install" === o.suggest_type) return !0;
                    return n.plugin.enabled
            }
        }
    }),
    Pdbe: (function(e, t, n) {
        var o = n("iRMi"),
            i = n("mfKi"),
            a = n("yGJW");
        n.d(t, {}, {
            a: function(e, t, n, l) {
                (0, a.a)(e, i.CodexPluginAction, {
                    action: l,
                    remotePluginId: n,
                    suggestionId: t.suggestionId,
                    source: o.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                    surface: o.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_IN_CHAT_SUGGESTIONS,
                    result: i.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
                    uiStyle: i.CodexPluginsSuggestionUiStyle.CODEX_PLUGINS_SUGGESTION_UI_STYLE_MCP
                })
            },
            b: function(e, t, n, o) {
                let i = new Map,
                    a = e.ownerDocument,
                    l = !0,
                    r = () => {
                        if (l && "visible" === a.visibilityState && null != o)
                            for (let [e, t] of i) o.loggedPluginIds.has(t) || (o.loggedPluginIds.add(t), o.onViewed(t)), s.unobserve(e), i.delete(e)
                    },
                    s = new IntersectionObserver(e => {
                        if (l) {
                            for (let a of e) {
                                if (!a.isIntersecting || a.intersectionRatio < .5) {
                                    i.delete(a.target);
                                    continue
                                }
                                let e = a.target.getAttribute("data-plugin-impression-id");
                                null != e && (null == n || t.has(e) || (t.add(e), n(e)), null == o ? s.unobserve(a.target) : i.set(a.target, e))
                            }
                            r()
                        }
                    }, {
                        threshold: .5
                    });
                for (let t of e.querySelectorAll("[data-plugin-impression-id]")) s.observe(t);
                return null != o && a.addEventListener("visibilitychange", r), () => {
                    l = !1, s.disconnect(), a.removeEventListener("visibilitychange", r)
                }
            }
        })
    }),
    jltc: (function(e, t, n) {
        var o = n("iRMi"),
            i = n("CjTC"),
            a = n("yGJW");
        n.d(t, {}, {
            a: function(e, t, n) {
                (0, a.a)(e, o.CodexMcpExtensionAction, {
                    feature: "onboarding",
                    action: n,
                    pluginId: (0, i.a)(t.plugin.plugin)
                })
            }
        })
    }),
    wGqp: (function(e, t, n) {
        var o = n("UKCO"),
            i = n("MKR8"),
            a = n("Haiv"),
            l = n("eYlV"),
            r = n("Dgwo"),
            s = n("whfw"),
            c = n("z0li"),
            d = n("PAzX"),
            u = n("OiCI"),
            p = n("Cslg"),
            g = n("XNvh"),
            f = n("MX6A"),
            h = n("svjy"),
            m = n("jhEa");
        async function b(e, t) {
            let n = t.pendingElicitationReply;
            if (null != n) try {
                await (0, r.b)(e, t.hostId).replyWithMcpServerElicitationResponse(n.conversationId, n.requestId, n.response)
            } catch {
                throw Error(e.get(h.a).formatMessage({
                    id: "plugins.onboarding.installCompletionFailed",
                    defaultMessage: "Couldn’t complete installation. Please try again"
                }))
            }
        }
        n.d(t, {}, {
            a: b,
            b: async function(e, t, r) {
                let y, {
                        target: _
                    } = t,
                    v = (0, a.a)(t.plugin),
                    w = (0, g.c)(t.plugin.plugin.id),
                    I = e.get(h.a).formatMessage({
                        id: "plugins.onboarding.prompt",
                        defaultMessage: "Help me set up {plugin} with the {skill} skill"
                    }, {
                        plugin: (0, f.b)(`@${v}`, w),
                        skill: (0, f.b)(`${"chatgpt"===_.type?"@":"$"}${t.skill.name}`, t.skill.path)
                    });
                if (!(0, m.a)(e, _) || !e.get(m.c, _) || null != _.account && (e.get(u.b) !== _.account.accountId || e.get(p.k) !== _.account.userId)) return {
                    status: "failed",
                    message: e.get(h.a).formatMessage({
                        id: "plugins.onboarding.startFailed",
                        defaultMessage: "Couldn’t start setup. Please try again"
                    })
                };
                if ("chatgpt" === _.type) {
                    let {
                        startChatGptPluginOnboarding: o
                    } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(544914)]).then(n.bind(n, "O68Q"));
                    return o(e, _, I, t.skill.name)
                }
                let x = [{
                    type: "mention",
                    name: v,
                    path: w
                }, {
                    type: "skill",
                    name: t.skill.name,
                    path: t.skill.path
                }];
                if (null != _.conversationId) {
                    let t, n = await (0, d.a)(e, _.hostId, null);
                    await b(e, _);
                    try {
                        await (0, s.a)(e, _.hostId, _.conversationId, {
                            prompt: I,
                            inputItems: x,
                            turnTrigger: "plugin_onboarding",
                            serviceTier: n
                        })
                    } catch (e) {
                        t = (0, i.a)(e)
                    }
                    return {
                        status: "started",
                        route: (0, m.b)(_, _.conversationId),
                        message: t
                    }
                }
                let S = t => "failed" === t.status ? t : "created" === t.status ? {
                        status: "started",
                        route: (0, m.b)(_, t.conversationId),
                        message: (0, c.a)(e, t)?.message
                    } : {
                        status: "outcome-unknown",
                        message: (0, c.a)(e, t).message
                    },
                    C = !1,
                    k = async e => {
                        y = e, C && await r?.(S(e))
                    };
                if (_.hostId === o._b) {
                    let t = await (0, c.b)(e, _.hostId, {
                        input: [{
                            type: "text",
                            text: I,
                            text_elements: []
                        }, ...x],
                        cwd: o.kd,
                        workspaceRoots: [o.kd],
                        workspaceKind: "projectless",
                        cloudThreadPrototype: !0,
                        collaborationMode: null,
                        serviceTier: null,
                        useAppServerPermissionDefault: !0,
                        turnTrigger: "plugin_onboarding"
                    }, {
                        onSettled: k
                    });
                    return C = !0, S(y ?? t)
                }
                let A = await (0, l.b)({
                    scope: e,
                    additionalUserInput: x,
                    model: void 0,
                    thinking: void 0,
                    prompt: I,
                    target: {
                        type: "projectless"
                    },
                    turnTrigger: "plugin_onboarding",
                    onSettled: k
                });
                if (C = !0, "creation" !== A.kind) throw Error("Plugin setup requires a local conversation");
                return S(y ?? A.result)
            }
        })
    }),
    odxv: (function(e, t, n) {
        var o = n("Q840"),
            i = n("MKR8"),
            a = n("SGsN"),
            l = n("OWtl"),
            r = n("jltc"),
            s = n("wGqp");
        let c = (0, o.v)(l.a, e => null);
        n.d(t, {}, {
            a: c,
            b: async function(e, t, n) {
                let o = {
                        hostId: t.target.hostId,
                        conversationId: t.target.conversationId,
                        requestId: t.target.pendingElicitationReply.requestId
                    },
                    l = e.get(c, o);
                if (l !== t || null != l.submittingAction) return;
                (0, r.a)(e, t, "setup" === n ? "selected" : "skipped");
                let d = {
                    ...t,
                    submittingAction: n
                };
                e.set(c, o, d);
                try {
                    if ("skip" === n) await (0, s.a)(e, t.target);
                    else {
                        let n = await (0, s.b)(e, t);
                        if ("failed" === n.status) throw Error(n.message);
                        null != n.message && e.get(a.f).danger(n.message, {
                            errorAnalytics: {
                                toastId: "plugins.onboarding.sendOutcomeUnknown"
                            }
                        })
                    }
                    e.get(c, o) === d && e.set(c, o, null)
                } catch (t) {
                    e.get(a.f).danger((0, i.a)(t), {
                        errorAnalytics: {
                            toastId: "plugins.onboarding.submitFailed"
                        }
                    })
                } finally {
                    e.get(c, o) === d && e.set(c, o, t)
                }
            }
        })
    }),
    jhEa: (function(e, t, n) {
        var o = n("Q840"),
            i = n("UKCO"),
            a = n("StMt"),
            l = n("OFP1"),
            r = n("Ow2S"),
            s = n("dQRk"),
            c = n("jAnS"),
            d = n("j9xU"),
            u = n("OWtl"),
            p = n("Bc5r");
        let g = (0, o.d)(u.a, (e, t) => {
            let {
                get: n
            } = t;
            return "chatgpt" !== e.type || null == e.conversationId || !n(r.j, e.conversationId) && !n(s.eb, e.conversationId) && !(0, s.Db)(n(s.cb, e.conversationId))
        });
        n.d(t, {}, {
            a: function(e, t) {
                return null != t.conversationId || ("chatgpt" === t.type ? e.get(a.a, {
                    name: "chatgpt"
                }).isCapable && "allowed" === e.get(l.r).status : t.hostId !== i._b || e.get(d.e))
            },
            b: function(e, t) {
                return "chatgpt" === e.type ? (0, c.c)(t) : (0, p.a)((0, i.he)((0, i.Xe)(t)), e.hostId)
            },
            c: g
        })
    })
};