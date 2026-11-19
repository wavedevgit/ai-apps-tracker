export const __rspack_esm_ids = [428069];
export const __webpack_modules__ = {
    VVkm: (function(e, t, n) {
        var o = n("QosV"),
            i = n("T0Rc"),
            a = n("GaA7"),
            r = n("rvFo");

        function l(e) {
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
            b: l,
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
                return u[0] !== p || u[1] !== f ? (t = f, n = p, s = [...l(t), n], u[0] = p, u[1] = f, u[2] = s) : s = u[2], u[3] !== f ? (c = async () => await a.a.ambientSuggestions?.hasAccessibleAndEnabledApp({
                    hostId: f
                }) ?? !1, u[3] = f, u[4] = c) : c = u[4], u[5] !== g || u[6] !== s || u[7] !== c ? (d = {
                    queryKey: s,
                    queryFn: c,
                    enabled: g,
                    retry: !1,
                    staleTime: r.b.FIVE_MINUTES
                }, u[5] = g, u[6] = s, u[7] = c, u[8] = d) : d = u[8], (0, i.a)(d)
            }
        })
    }),
    zvpH: (function(e, t, n) {
        var o = n("GaA7"),
            i = n("q77y");
        let a = ["vscode", "ambient-suggestions"],
            r = ["vscode", "ambient-suggestions-refresh"];
        n.d(t, {}, {
            a: a,
            b: r,
            c: function(e) {
                return [...a, JSON.stringify(e)]
            },
            d: function(e) {
                return [...r, JSON.stringify(e)]
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
            r = n("zd8w"),
            l = n("wD9O"),
            s = n("JNtf");
        n.d(t, {}, {
            a: "min(720px, calc(100vh - 2rem))",
            b: function(e) {
                let t, n, c, d, u, p, g = (0, i.c)(19),
                    {
                        children: f,
                        loading: h,
                        onOpenChange: m
                    } = e,
                    [y, b] = (0, r.useState)(null),
                    _ = (0, l.c)();
                g[0] !== y || g[1] !== _ ? (t = null == y ? void 0 : {
                    height: `min(${y}px, calc((100dvh - 2rem) / ${_}))`
                }, g[0] = y, g[1] = _, g[2] = t) : t = g[2], g[3] !== t ? (n = {
                    "aria-describedby": void 0,
                    style: t
                }, g[3] = t, g[4] = n) : n = g[4], g[5] !== y || g[6] !== h ? (c = e => {
                    !h && null == y && null != e && e.offsetHeight > 0 && b(e.offsetHeight)
                }, g[5] = y, g[6] = h, g[7] = c) : c = g[7];
                let v = (h || null != y) && "h-full",
                    I = null != y && "overflow-y-auto";
                return g[8] !== v || g[9] !== I ? (d = (0, a.b)(v, I), g[8] = v, g[9] = I, g[10] = d) : d = g[10], g[11] !== f || g[12] !== c || g[13] !== d ? (u = (0, o.jsx)("div", {
                    ref: c,
                    className: d,
                    children: f
                }), g[11] = f, g[12] = c, g[13] = d, g[14] = u) : u = g[14], g[15] !== m || g[16] !== n || g[17] !== u ? (p = (0, o.jsx)(s.a, {
                    open: !0,
                    onOpenChange: m,
                    autoFocusCloseButton: !0,
                    size: "setup",
                    contentProps: n,
                    children: u
                }), g[15] = m, g[16] = n, g[17] = u, g[18] = p) : p = g[18], p
            }
        })
    }),
    TC6X: (function(e, t, n) {
        var o = n("ABep"),
            i = n("QosV"),
            a = n("oyxz"),
            r = n("Sm6l"),
            l = n("JNtf"),
            s = n("mUDD"),
            c = n("FROa"),
            d = n("lmaZ");

        function u(e) {
            let t, n, c, u, p, g, f, h, m, y, b, _, v = (0, i.c)(27),
                {
                    isPending: I,
                    embedded: w,
                    isFetching: S,
                    onOpenChange: x,
                    onRetry: k
                } = e,
                A = void 0 !== w && w,
                C = A ? "h2" : l.f,
                E = A ? "p" : l.e;
            if (I) {
                let e;
                return v[0] !== A ? (e = (0, o.jsx)(d.a, {
                    embedded: A
                }), v[0] = A, v[1] = e) : e = v[1], e
            }
            return v[2] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(a.a, {
                id: "beacons.connectApp.loadError.title",
                defaultMessage: "Couldn’t load connector"
            }), v[2] = t) : t = v[2], v[3] !== C ? (n = (0, o.jsx)(C, {
                children: t
            }), v[3] = C, v[4] = n) : n = v[4], v[5] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, o.jsx)(a.a, {
                id: "beacons.connectApp.loadError.description",
                defaultMessage: "Try again, or cancel and return to the previous page"
            }), v[5] = c) : c = v[5], v[6] !== E ? (u = (0, o.jsx)(E, {
                children: c
            }), v[6] = E, v[7] = u) : u = v[7], v[8] !== n || v[9] !== u ? (p = (0, o.jsx)(s.d, {
                title: n,
                subtitle: u
            }), v[8] = n, v[9] = u, v[10] = p) : p = v[10], v[11] !== x ? (g = () => x(!1), v[11] = x, v[12] = g) : g = v[12], v[13] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, o.jsx)(a.a, {
                id: "beacons.connectApp.loadError.button.cancel",
                defaultMessage: "Cancel"
            }), v[13] = f) : f = v[13], v[14] !== S || v[15] !== g ? (h = (0, o.jsx)(r.a, {
                color: "secondary",
                disabled: S,
                onClick: g,
                type: "button",
                children: f
            }), v[14] = S, v[15] = g, v[16] = h) : h = v[16], v[17] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, o.jsx)(a.a, {
                id: "beacons.connectApp.loadError.button.retry",
                defaultMessage: "Retry"
            }), v[17] = m) : m = v[17], v[18] !== S || v[19] !== k ? (y = (0, o.jsx)(r.a, {
                color: "primary",
                loading: S,
                onClick: k,
                type: "button",
                children: m
            }), v[18] = S, v[19] = k, v[20] = y) : y = v[20], v[21] !== y || v[22] !== h ? (b = (0, o.jsxs)(s.c, {
                children: [h, y]
            }), v[21] = y, v[22] = h, v[23] = b) : b = v[23], v[24] !== b || v[25] !== p ? (_ = (0, o.jsxs)(s.b, {
                className: "select-none",
                children: [p, b]
            }), v[24] = b, v[25] = p, v[26] = _) : _ = v[26], _
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
            r = n("TC6X");
        n.d(t, {
            a: () => r.b
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
            r = n("Q840"),
            l = n("Qgfj"),
            s = n("Wf1j"),
            c = n("VVkm"),
            d = n("Dgwo"),
            u = n("HUHI"),
            p = n("OiCI"),
            g = n("SGsN"),
            f = n("a4MG"),
            h = n("sLlu"),
            m = n("OWtl"),
            y = n("kfGJ"),
            b = n("WFY2");
        let _ = (0, l.f)({
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
                let t, n, l, v, I, w, S, x, k = (0, o.c)(35),
                    A = e?.hostId ?? y.a,
                    C = (0, r.y)(m.a),
                    E = (0, r.z)(p.a),
                    P = (0, i.c)(),
                    j = (0, h.b)(),
                    M = (0, s.a)(),
                    O = E ?? void 0;
                k[0] !== A || k[1] !== O ? (t = (0, u.g)(A, O), k[0] = A, k[1] = O, k[2] = t) : t = k[2];
                let T = t;
                k[3] !== T || k[4] !== A || k[5] !== j ? (n = async () => {
                    await Promise.all([j((0, c.b)(A)), j(T), j([...f.b, A]), j([...f.c, A]), j(f.f), j(["user-saved-config"])])
                }, k[3] = T, k[4] = A, k[5] = j, k[6] = n) : n = k[6];
                let N = n;
                k[7] !== A || k[8] !== P || k[9] !== C ? (l = async e => {
                    let {
                        appId: t,
                        enabled: n
                    } = e, o = await (0, f.m)(C, P, A);
                    if ("okOverridden" === (await (0, d.b)(C, A).sendRequest("config/batchWrite", {
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
                }, k[7] = A, k[8] = P, k[9] = C, k[10] = l) : l = k[10], k[11] !== T || k[12] !== P ? (v = async e => {
                    let {
                        appId: t,
                        enabled: n
                    } = e;
                    await P.cancelQueries({
                        queryKey: T
                    });
                    let o = P.getQueryData(T);
                    return o && P.setQueryData(T, o.map(e => e.id !== t || e.isEnabled === n ? e : {
                        ...e,
                        isEnabled: n
                    })), {
                        previousApps: o
                    }
                }, k[11] = T, k[12] = P, k[13] = v) : v = k[13], k[14] !== T || k[15] !== M || k[16] !== j || k[17] !== P || k[18] !== C ? (I = async (e, t, n) => {
                    let {
                        appId: o,
                        appName: i,
                        enabled: a
                    } = t;
                    if (a && n?.previousApps?.find(e => e.id === o)?.isEnabled === !1) {
                        await j(T);
                        let e = P.getQueryData(T)?.find(e => e.id === o);
                        if (e?.isEnabled === !1) throw Error("App remains disabled after updating its configuration")
                    }
                    let r = i ?? P.getQueryData(T)?.find(e => e.id === o)?.name ?? o;
                    C.get(g.f).success(M.formatMessage(a ? _.enableSuccess : _.disableSuccess, {
                        appName: r
                    }))
                }, k[14] = T, k[15] = M, k[16] = j, k[17] = P, k[18] = C, k[19] = I) : I = k[19], k[20] !== T || k[21] !== M || k[22] !== P || k[23] !== C ? (w = (e, t, n) => {
                    b.a.error("Failed to update app enablement", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), C.get(g.f).danger(M.formatMessage(_.updateError), {
                        errorAnalytics: {
                            toastId: "appsAvailability.onError.updateError"
                        }
                    }), n?.previousApps && P.setQueryData(T, n.previousApps)
                }, k[20] = T, k[21] = M, k[22] = P, k[23] = C, k[24] = w) : w = k[24], k[25] !== N || k[26] !== l || k[27] !== v || k[28] !== I || k[29] !== w ? (S = {
                    mutationFn: l,
                    onMutate: v,
                    onSuccess: I,
                    onError: w,
                    onSettled: N
                }, k[25] = N, k[26] = l, k[27] = v, k[28] = I, k[29] = w, k[30] = S) : S = k[30];
                let R = (0, a.a)(S),
                    U = R.isPending ? R.variables?.appId ?? null : null;
                return k[31] !== R.isPending || k[32] !== R.mutateAsync || k[33] !== U ? (x = {
                    setAppEnabled: R.mutateAsync,
                    isUpdating: R.isPending,
                    updatingAppId: U
                }, k[31] = R.isPending, k[32] = R.mutateAsync, k[33] = U, k[34] = x) : x = k[34], x
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
            r = n("sLlu"),
            l = n("oo2L");
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
                }) : void 0, [g] = await Promise.all([d(), (0, r.a)(n, l.a)]);
                return ! function(e) {
                    let {
                        previousApps: t,
                        nextApps: n
                    } = e;
                    return null != t && !t.some(c) && n.some(c)
                }({
                    previousApps: p,
                    nextApps: g
                }) || (await (0, r.a)(n, (0, i.b)(t)), await Promise.all(s.map(e => (0, a.e)({
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
            r = n("Q840"),
            l = n("UKCO"),
            s = n("I3F6"),
            c = n("zd8w"),
            d = n("Qgfj"),
            u = n("Wf1j"),
            p = n("oyxz"),
            g = n("Dgwo"),
            f = n("oo2L"),
            h = n("Sx5O"),
            m = n("yGJ5"),
            y = n("NcQ7"),
            b = n("GP9j"),
            _ = n("CMv2"),
            v = n("QSD9"),
            I = n("pxeg"),
            w = n("PraM"),
            S = n("BQbE"),
            x = n("HUHI"),
            k = n("yxN2"),
            A = n("OiCI"),
            C = n("AcSY"),
            E = n("FvYa"),
            P = n("Ot7V"),
            j = n("HOLv"),
            M = n("SGsN"),
            O = n("OWtl"),
            T = n("ecE5"),
            N = n("kfGJ"),
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
                let t, n, d, L, G, Q, H, K, V, z, B, W, J, X, Y, $, Z, ee, et, en, eo, ei, ea, er, el, es, ec, ed, eu, ep = (0, i.c)(129),
                    {
                        conversationId: eg,
                        hostId: ef,
                        requestId: eh,
                        auth: em
                    } = e,
                    ey = (0, r.y)(O.a),
                    eb = (0, u.a)(),
                    e_ = (0, a.c)(),
                    ev = (0, R.i)();
                ep[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                    preview: !1
                }, ep[0] = t) : t = ep[0];
                let {
                    data: eI
                } = (0, C.f)(void 0, t), ew = (0, r.z)(M.f), [eS, ex] = (0, c.useState)(!1), [ek, eA] = (0, c.useState)(!1), [eC, eE] = (0, c.useState)(!1), eP = (0, c.useRef)(!1), ej = ef === l._b ? N.a : ef;
                ep[1] !== ej ? (n = {
                    hostId: ej
                }, ep[1] = ej, ep[2] = n) : n = ep[2];
                let {
                    data: eM,
                    hardRefetchAppsList: eO,
                    isPending: eT
                } = (0, x.m)(n);
                ep[3] !== eM ? (d = void 0 === eM ? [] : eM, ep[3] = eM, ep[4] = d) : d = ep[4];
                let eN = d;
                ep[5] !== em.connector.connector_id ? (L = [em.connector.connector_id], ep[5] = em.connector.connector_id, ep[6] = L) : L = ep[6], ep[7] !== ej || ep[8] !== L ? (G = {
                    appIds: L,
                    hostId: ej
                }, ep[7] = ej, ep[8] = L, ep[9] = G) : G = ep[9];
                let {
                    data: eR
                } = (0, S.c)(G);
                ep[10] !== eR ? (Q = void 0 === eR ? [] : eR, ep[10] = eR, ep[11] = Q) : Q = ep[11];
                let eU = Q;
                ep[12] === Symbol.for("react.memo_cache_sentinel") ? (H = () => {
                    ex(!0)
                }, ep[12] = H) : H = ep[12], ep[13] !== ef ? (K = {
                    hostId: ef,
                    oauthReferrer: "conversation_auth",
                    onExternalConnectStarted: H
                }, ep[13] = ef, ep[14] = K) : K = ep[14];
                let {
                    clearConnectingApp: eq,
                    clearPendingAppConnect: eD,
                    connectingApp: eF,
                    handleAppConnectOAuthStarted: eL,
                    handleConnectApp: eG,
                    handleOpenAppUrl: eQ,
                    isAppConnectPending: eH
                } = (0, k.a)(K), {
                    isAppConnectCallbackClaimed: eK
                } = (0, m.g)();
                ep[15] !== eN || ep[16] !== em.connector.connector_id ? (V = eN.find(e => e.id === em.connector.connector_id) ?? null, ep[15] = eN, ep[16] = em.connector.connector_id, ep[17] = V) : V = ep[17];
                let eV = V;
                ep[18] !== em.connector.connector_id || ep[19] !== eU ? (z = eU.find(e => e.id === em.connector.connector_id) ?? null, ep[18] = em.connector.connector_id, ep[19] = eU, ep[20] = z) : z = ep[20];
                let ez = z,
                    eB = ez?.name ?? em.connector.connector_name,
                    eW = em.connector.auth_reason,
                    eJ = "xaa_enrollment_required" === eW,
                    eX = "missing_link" === eW;
                ep[21] !== em.connector.connector_id ? (B = (0, y.a)(em.connector.connector_id), ep[21] = em.connector.connector_id, ep[22] = B) : B = ep[22];
                let eY = null != B,
                    e$ = "oauth_upgrade_required" === eW;
                ep[23] !== em.connector.connector_id || ep[24] !== eI?.plan_type || ep[25] !== eX || ep[26] !== ev ? (W = (0, _.d)({
                    planType: eI?.plan_type,
                    connectorId: em.connector.connector_id,
                    disableExposureLog: !0,
                    statsigClient: ev
                }), J = eX && null != (0, _.f)(em.connector.connector_id, W), ep[23] = em.connector.connector_id, ep[24] = eI?.plan_type, ep[25] = eX, ep[26] = ev, ep[27] = W, ep[28] = J) : (W = ep[27], J = ep[28]);
                let eZ = J;
                ep[29] !== em.connector.connector_id || ep[30] !== eI?.plan_type || ep[31] !== eX || ep[32] !== ev ? (X = eX && (0, I.f)({
                    planType: eI?.plan_type,
                    connectorId: em.connector.connector_id,
                    disableExposureLog: !0,
                    statsigClient: ev
                }), ep[29] = em.connector.connector_id, ep[30] = eI?.plan_type, ep[31] = eX, ep[32] = ev, ep[33] = X) : X = ep[33];
                let e1 = X,
                    e0 = eZ || e1;
                ep[34] !== em.connector.connector_id || ep[35] !== eg || ep[36] !== eS || ep[37] !== eK || ep[38] !== eH || ep[39] !== eh || ep[40] !== eY || ep[41] !== eJ ? ($ = {
                    kind: "connector-auth-elicitation",
                    conversationId: eg,
                    requestId: eh
                }, Y = eK(em.connector.connector_id, $), Z = eJ || !eY && (eS || eH(em.connector.connector_id, $)), ep[34] = em.connector.connector_id, ep[35] = eg, ep[36] = eS, ep[37] = eK, ep[38] = eH, ep[39] = eh, ep[40] = eY, ep[41] = eJ, ep[42] = Y, ep[43] = $, ep[44] = Z) : (Y = ep[42], $ = ep[43], Z = ep[44]);
                let e2 = Z,
                    e3 = F.reconnect;
                e2 ? e3 = b.a.continue : eX ? e3 = F.connect : e$ && (e3 = F.updateAccess), ep[45] !== em.connector.connector_id || ep[46] !== eD || ep[47] !== eg || ep[48] !== ef || ep[49] !== eb || ep[50] !== eh || ep[51] !== $ || ep[52] !== ey || ep[53] !== ew ? (ee = e => {
                    eP.current || (eP.current = !0, "decline" === e && eD({
                        appId: em.connector.connector_id,
                        resumeTarget: $
                    }), (0, g.b)(ey, ef).replyWithMcpServerElicitationResponse(eg, eh, (0, s.b)(e)).then(() => {
                        eD({
                            appId: em.connector.connector_id,
                            resumeTarget: $
                        })
                    }).catch(() => {
                        eP.current = !1, ew.danger(eb.formatMessage({
                            id: "composer.connectorAuth.responseError",
                            defaultMessage: "Could not submit your response. Please try again"
                        }), {
                            errorAnalytics: {
                                toastId: "composer.connectorAuth.responseError"
                            }
                        })
                    }))
                }, ep[45] = em.connector.connector_id, ep[46] = eD, ep[47] = eg, ep[48] = ef, ep[49] = eb, ep[50] = eh, ep[51] = $, ep[52] = ey, ep[53] = ew, ep[54] = ee) : ee = ep[54];
                let e4 = ee;
                ep[55] !== e4 ? (et = () => {
                    e4("decline")
                }, ep[55] = e4, ep[56] = et) : et = ep[56];
                let e5 = et;
                ep[57] !== em.connector.connector_id || ep[58] !== em.connector.install_url || ep[59] !== em.connector.link_id || ep[60] !== em.connector.requested_scopes || ep[61] !== em.url || ep[62] !== eW || ep[63] !== ej || ep[64] !== eB || ep[65] !== W || ep[66] !== eL || ep[67] !== eG || ep[68] !== eQ || ep[69] !== eb || ep[70] !== eT || ep[71] !== eV || ep[72] !== e_ || ep[73] !== e4 || ep[74] !== eY || ep[75] !== $ || ep[76] !== ey || ep[77] !== eZ || ep[78] !== e1 || ep[79] !== e0 || ep[80] !== ew ? (en = async () => {
                    eY ? eA(!0) : e0 && eT || (eE(!0), await (async () => {
                        if (e0 && null != eV) {
                            let e = {
                                scope: ey,
                                appId: em.connector.connector_id,
                                browserAccountId: (0, A.c)(ey) ?? void 0,
                                hostId: ej,
                                queryClient: e_
                            };
                            if ((await (eZ ? (0, v.a)({
                                    ...e,
                                    connectors: W
                                }) : (0, w.a)(e))).length > 0) return void await eG(eV, {
                                forceInApp: !0,
                                googleOAuthBundlePrepared: eZ,
                                microsoftOAuthBundlePrepared: e1
                            })
                        }
                        let e = {
                                id: em.connector.connector_id,
                                installUrl: eV?.installUrl ?? em.connector.install_url,
                                name: eB
                            },
                            t = !1;
                        switch ((await (0, f.s)({
                                scope: ey,
                                appConnectOptions: {
                                    connectorId: em.connector.connector_id,
                                    oauthReferrer: "conversation_auth"
                                },
                                app: e,
                                authReason: eW,
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
                                    t ? (0, P.f)({
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
                                return void eA(!0);
                            case "connected-directly":
                                return void e4("accept");
                            case "oauth-started":
                                ex(!0);
                                return;
                            case "browser-fallback":
                                return void ex(!0);
                            case "failed":
                                return void ew.danger(eb.formatMessage({
                                    id: "composer.connectorAuth.startError",
                                    defaultMessage: "Could not start connector authentication"
                                }), {
                                    errorAnalytics: {
                                        toastId: "composer.connectorAuth.startError"
                                    }
                                })
                        }
                    })().finally(() => {
                        eE(!1)
                    }))
                }, ep[57] = em.connector.connector_id, ep[58] = em.connector.install_url, ep[59] = em.connector.link_id, ep[60] = em.connector.requested_scopes, ep[61] = em.url, ep[62] = eW, ep[63] = ej, ep[64] = eB, ep[65] = W, ep[66] = eL, ep[67] = eG, ep[68] = eQ, ep[69] = eb, ep[70] = eT, ep[71] = eV, ep[72] = e_, ep[73] = e4, ep[74] = eY, ep[75] = $, ep[76] = ey, ep[77] = eZ, ep[78] = e1, ep[79] = e0, ep[80] = ew, ep[81] = en) : en = ep[81];
                let e7 = en;
                ep[82] !== e7 || ep[83] !== e4 || ep[84] !== e2 ? (eo = () => {
                    e2 ? e4("accept") : e7()
                }, ep[82] = e7, ep[83] = e4, ep[84] = e2, ep[85] = eo) : eo = ep[85];
                let e6 = eo;
                if (null != em.connector.connection_consent) return null;
                if (eJ) {
                    let e;
                    ep[86] !== eB ? (e = (0, o.jsx)(p.a, {
                        ...b.a.workspaceSso,
                        values: {
                            connectorName: eB
                        }
                    }), ep[86] = eB, ep[87] = e) : e = ep[87], ei = e
                } else if (eX) {
                    let e;
                    ep[88] !== eB ? (e = (0, o.jsx)(p.a, {
                        ...F.missingConnectionDescription,
                        values: {
                            connectorName: eB
                        }
                    }), ep[88] = eB, ep[89] = e) : e = ep[89], ei = e
                } else if (e$) {
                    let e;
                    ep[90] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(p.a, {
                        ...F.missingScopesDescription
                    }), ep[90] = e) : e = ep[90], ei = e
                } else {
                    let e;
                    ep[91] !== eB ? (e = (0, o.jsx)(p.a, {
                        ...F.reconnectDescription,
                        values: {
                            connectorName: eB
                        }
                    }), ep[91] = eB, ep[92] = e) : e = ep[92], ei = e
                }
                let e8 = ez?.iconUrl,
                    e9 = ez?.iconUrlDark;
                ep[93] === Symbol.for("react.memo_cache_sentinel") ? (ea = (0, o.jsx)(j.a, {
                    className: "text-secondary",
                    "aria-hidden": !1,
                    asset: D.a
                }), ep[93] = ea) : ea = ep[93], ep[94] !== em.connector.connector_id || ep[95] !== eB || ep[96] !== e8 || ep[97] !== e9 ? (er = (0, o.jsx)(E.a, {
                    alt: eB,
                    className: "icon-md rounded-sm object-contain",
                    knownAppId: em.connector.connector_id,
                    logoUrl: e8,
                    logoDarkUrl: e9,
                    fallback: ea
                }), ep[94] = em.connector.connector_id, ep[95] = eB, ep[96] = e8, ep[97] = e9, ep[98] = er) : er = ep[98], ep[99] !== e3 ? (el = (0, o.jsx)(p.a, {
                    ...e3
                }), ep[99] = e3, ep[100] = el) : el = ep[100];
                let te = eC || Y || e0 && eT;
                return ep[101] !== eB || ep[102] !== ei || ep[103] !== e5 || ep[104] !== e6 || ep[105] !== er || ep[106] !== el || ep[107] !== te ? (es = (0, o.jsx)(q.a, {
                    icon: er,
                    title: eB,
                    description: ei,
                    primaryActionLabel: el,
                    isPrimaryActionLoading: te,
                    onDecline: e5,
                    onSubmit: e6
                }), ep[101] = eB, ep[102] = ei, ep[103] = e5, ep[104] = e6, ep[105] = er, ep[106] = el, ep[107] = te, ep[108] = es) : es = ep[108], ep[109] !== em.connector.connector_id || ep[110] !== em.connector.link_id || ep[111] !== eW || ep[112] !== ej || ep[113] !== eO || ep[114] !== e4 || ep[115] !== ek ? (ec = ek ? (0, o.jsx)(h.b, {
                    oauthReferrer: "conversation_auth",
                    connectorId: em.connector.connector_id,
                    connectorAuth: {
                        authReason: eW,
                        linkId: em.connector.link_id
                    },
                    hostId: ej,
                    onConnected: () => {
                        e4("accept"), eO().catch(() => {
                            U.a.warning("Failed to refresh apps after connection", {
                                safe: {
                                    connectorId: em.connector.connector_id
                                }
                            })
                        })
                    },
                    onOpenChange: e => {
                        e || eA(!1)
                    }
                }) : null, ep[109] = em.connector.connector_id, ep[110] = em.connector.link_id, ep[111] = eW, ep[112] = ej, ep[113] = eO, ep[114] = e4, ep[115] = ek, ep[116] = ec) : ec = ep[116], ep[117] !== eq || ep[118] !== eF || ep[119] !== ej || ep[120] !== eL || ep[121] !== e4 || ep[122] !== $ || ep[123] !== e0 ? (ed = e0 ? (0, o.jsx)(T.a, {
                    oauthReferrer: "conversation_auth",
                    app: eF,
                    hostId: ej,
                    onConnected: () => {
                        e4("accept")
                    },
                    onExternalConnectStarted: () => {
                        ex(!0)
                    },
                    getOAuthResumeContext: () => ({
                        resumeTarget: $
                    }),
                    onOAuthStarted: e => {
                        eL({
                            ...e
                        }), ex(!0)
                    },
                    onOpenChange: e => {
                        e || eq()
                    }
                }) : null, ep[117] = eq, ep[118] = eF, ep[119] = ej, ep[120] = eL, ep[121] = e4, ep[122] = $, ep[123] = e0, ep[124] = ed) : ed = ep[124], ep[125] !== es || ep[126] !== ec || ep[127] !== ed ? (eu = (0, o.jsxs)(o.Fragment, {
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
            r = n("Q840"),
            l = n("UKCO"),
            s = n("I3F6"),
            c = n("Haiv"),
            d = n("zd8w"),
            u = n("Qgfj"),
            p = n("Wf1j"),
            g = n("oyxz"),
            f = n("Dgwo"),
            h = n("tl5a"),
            m = n("yGJ5"),
            y = n("NcQ7"),
            b = n("IBgA"),
            _ = n("oxjR"),
            v = n("hOO0"),
            I = n("BQbE"),
            w = n("HUHI"),
            S = n("PYah"),
            x = n("yxN2"),
            k = n("OiCI"),
            A = n("Cslg"),
            C = n("FvYa"),
            E = n("HOLv"),
            P = n("Bbed"),
            j = n("SGsN"),
            M = n("rO8L"),
            O = n("an0a"),
            T = n("CjMb"),
            N = n("Pdbe"),
            R = n("a0aG"),
            U = n("aVTW"),
            q = n("loz7"),
            D = n("ntKy"),
            F = n("Hl7m"),
            L = n("OWtl"),
            G = n("odxv");

        function Q(e) {
            let t, n, a, l, s, d, u, p, f, h, m = (0, i.c)(25),
                {
                    onboarding: y
                } = e,
                b = (0, r.y)(L.a);
            m[0] !== y.plugin ? (t = (0, c.a)(y.plugin), m[0] = y.plugin, m[1] = t) : t = m[1];
            let _ = t;
            m[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, o.jsx)(T.a, {
                className: "icon-md text-secondary"
            }), m[2] = n) : n = m[2], m[3] !== y.plugin.logoDarkPath || m[4] !== y.plugin.logoPath || m[5] !== _ ? (a = (0, o.jsx)(C.a, {
                alt: _,
                className: "icon-md rounded-sm object-contain",
                logoDarkUrl: y.plugin.logoDarkPath,
                logoUrl: y.plugin.logoPath,
                fallback: n
            }), m[3] = y.plugin.logoDarkPath, m[4] = y.plugin.logoPath, m[5] = _, m[6] = a) : a = m[6], m[7] !== _ ? (l = (0, o.jsx)(g.a, {
                id: "plugins.onboarding.title",
                defaultMessage: "{pluginName} is ready for use",
                values: {
                    pluginName: _
                }
            }), m[7] = _, m[8] = l) : l = m[8], m[9] !== _ ? (s = (0, o.jsx)(g.a, {
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
            let v = "setup" === y.submittingAction,
                I = "skip" === y.submittingAction;
            return m[13] !== y || m[14] !== b ? (p = () => void(0, G.b)(b, y, "skip"), f = () => void(0, G.b)(b, y, "setup"), m[13] = y, m[14] = b, m[15] = p, m[16] = f) : (p = m[15], f = m[16]), m[17] !== p || m[18] !== f || m[19] !== a || m[20] !== l || m[21] !== s || m[22] !== v || m[23] !== I ? (h = (0, o.jsx)(F.a, {
                icon: a,
                title: l,
                description: s,
                primaryActionLabel: d,
                secondaryActionLabel: u,
                isPrimaryActionLoading: v,
                isSecondaryActionLoading: I,
                onDecline: p,
                onSubmit: f
            }), m[17] = p, m[18] = f, m[19] = a, m[20] = l, m[21] = s, m[22] = v, m[23] = I, m[24] = h) : h = m[24], h
        }
        var H = n("uzkw"),
            K = n("ugfi"),
            V = n("EEop"),
            z = n("cLdu"),
            B = n("ueue"),
            W = n("tSEg"),
            J = n("ecE5"),
            X = n("nvO1"),
            Y = n("WFY2"),
            $ = n("NE4U");
        let Z = (0, P.a)(() => Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(19577)]).then(n.bind(n, "cUuO")).then(e => e.TeamAddPluginsModal));
        async function ee(e, t, n, o) {
            let i = new Set(Array.from(await (0, S.a)(e, t, n, "shared"), v.a));
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
            let l = (0, r.x)(G.a, t);
            return a[4] !== l || a[5] !== e ? (n = null == l ? (0, o.jsx)(eo, {
                ...e
            }) : (0, o.jsx)(Q, {
                onboarding: l
            }), a[4] = l, a[5] = e, a[6] = n) : n = a[6], n
        }

        function eo(e) {
            let t, n, u, S, P, G, Q, en, eo, el, es, ec, ed, eu, ep, eg, ef, eh, em, ey, eb, e_, ev, eI, ew, eS, ex, ek, eA, eC, eE, eP, ej, eM, eO, eT, eN, eR, eU, eq, eD, eF, eL, eG, eQ, eH, eK, eV, ez, eB, eW, eJ, eX = (0, i.c)(254),
                {
                    conversationId: eY,
                    hostId: e$,
                    requestId: eZ,
                    suggestion: e1
                } = e,
                e0 = (0, r.y)(L.a),
                e2 = (0, r.z)(k.b),
                e3 = (0, r.z)(A.k),
                e4 = (0, r.z)(W.j);
            eX[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Set, eX[0] = t) : t = eX[0];
            let e5 = (0, d.useRef)(t),
                e7 = (0, p.a)(),
                e6 = (0, r.z)(j.f),
                e8 = (0, a.c)(),
                [e9, te] = (0, d.useState)(null),
                [tt, tn] = (0, d.useState)(!1),
                [to, ti] = (0, d.useState)(null),
                [ta, tr] = (0, d.useState)(null),
                [tl, ts] = (0, d.useState)(null),
                tc = (0, O.c)(eY);
            eX[1] !== e$ ? (n = (0, z.i)(e$), eX[1] = e$, eX[2] = n) : n = eX[2];
            let td = n;
            eX[3] !== eY || eX[4] !== e$ ? (u = {
                hostId: e$,
                threadId: eY
            }, eX[3] = eY, eX[4] = e$, eX[5] = u) : u = eX[5];
            let tu = (0, r.x)(h.fc, u),
                tp = "install" === e1.suggest_type && e$ === l._b && tu?.threadAccess === "shared",
                tg = "install" === e1.suggest_type && e$ === l._b && null == tu,
                tf = td || tc.hostId !== e$ || null == tc.cwd ? void 0 : [tc.cwd],
                th = !td;
            eX[6] !== e$ || eX[7] !== th ? (S = {
                hostId: e$,
                enabled: th
            }, eX[6] = e$, eX[7] = th, eX[8] = S) : S = eX[8];
            let tm = (0, M.a)(S),
                ty = !td && "plugin" === e1.tool_type && "enable" === e1.suggest_type,
                tb = !ty && "plugin" === e1.tool_type && (td || tm),
                t_ = (0, d.useRef)(!1);
            eX[9] !== eY || eX[10] !== e$ || eX[11] !== eZ || eX[12] !== e0 ? (P = e => {
                t_.current || (t_.current = !0, (0, f.b)(e0, e$).replyWithMcpServerElicitationResponse(eY, eZ, (0, s.b)(e)).catch(() => {
                    t_.current = !1
                }))
            }, eX[9] = eY, eX[10] = e$, eX[11] = eZ, eX[12] = e0, eX[13] = P) : P = eX[13];
            let tv = P,
                tI = "connector" === e1.tool_type;
            eX[14] !== e$ || eX[15] !== tI ? (G = {
                enabled: tI,
                hostId: e$
            }, eX[14] = e$, eX[15] = tI, eX[16] = G) : G = eX[16];
            let {
                data: tw,
                refetch: tS
            } = (0, w.m)(G);
            eX[17] !== tw ? (Q = void 0 === tw ? [] : tw, eX[17] = tw, eX[18] = Q) : Q = eX[18];
            let tx = Q;
            eX[19] !== e1.tool_id || eX[20] !== e1.tool_type ? (en = "connector" === e1.tool_type ? [e1.tool_id] : [], eX[19] = e1.tool_id, eX[20] = e1.tool_type, eX[21] = en) : en = eX[21], eX[22] !== e$ || eX[23] !== en ? (eo = {
                appIds: en,
                hostId: e$
            }, eX[22] = e$, eX[23] = en, eX[24] = eo) : eo = eX[24];
            let {
                data: tk
            } = (0, I.c)(eo);
            eX[25] !== tk ? (el = void 0 === tk ? [] : tk, eX[25] = tk, eX[26] = el) : el = eX[26];
            let tA = el,
                {
                    data: tC,
                    isLoading: tE,
                    refetch: tP
                } = (0, z.l)({
                    enabled: "plugin" === e1.tool_type && ty && tm,
                    hostId: e$,
                    roots: tf,
                    resolveActiveRoots: ty
                });
            eX[27] !== tC ? (es = tC ?? [], eX[27] = tC, eX[28] = es) : es = eX[28];
            let tj = es;
            eX[29] !== eZ ? (ec = () => {
                ti(eZ)
            }, eX[29] = eZ, eX[30] = ec) : ec = eX[30], eX[31] !== e$ || eX[32] !== ec ? (ed = {
                hostId: e$,
                oauthReferrer: "tool_suggestion",
                onExternalConnectStarted: ec
            }, eX[31] = e$, eX[32] = ec, eX[33] = ed) : ed = eX[33];
            let {
                clearConnectingApp: tM,
                connectingApp: tO,
                handleAppConnectOAuthStarted: tT,
                handleConnectApp: tN,
                handleOpenAppUrl: tR,
                isAppConnectPending: tU
            } = (0, x.a)(ed), {
                clearPendingAppConnect: tq,
                getPendingTeamElicitationConnect: tD,
                isAppConnectCallbackClaimed: tF
            } = (0, m.g)();
            eX[34] !== eY || eX[35] !== tD || eX[36] !== e$ || eX[37] !== eZ ? (eu = tD(e$, eY, eZ), eX[34] = eY, eX[35] = tD, eX[36] = e$, eX[37] = eZ, eX[38] = eu) : eu = eX[38];
            let tL = eu,
                tG = tL?.resumeTarget.kind === "service-account" ? tL.resumeTarget : null,
                tQ = tG?.pendingElicitationReply?.oauth,
                tH = tl === eZ || null != tL && (tL.claimed || tQ?.kind === "connected") && tQ?.kind !== "failed" && tL.oauthState !== ta,
                tK = tQ?.kind === "connected" ? tL?.oauthState : null,
                tV = tG?.accountId,
                tz = tG?.pendingElicitationReply?.actorUserId;
            eX[39] !== eY || eX[40] !== tl || eX[41] !== e$ || eX[42] !== eZ || eX[43] !== e0 ? (ep = () => {
                if (tl === eZ) return e0.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(h.H, eY) === e$ && t(h.xb, eY)?.some(e => e.id === eZ) && (t_.current = !1, ts(null))
                })
            }, eg = [eY, tl, e$, eZ, e0], eX[39] = eY, eX[40] = tl, eX[41] = e$, eX[42] = eZ, eX[43] = e0, eX[44] = ep, eX[45] = eg) : (ep = eX[44], eg = eX[45]), (0, d.useEffect)(ep, eg), eX[46] !== e$ ? (ef = {
                hostId: e$
            }, eX[46] = e$, eX[47] = ef) : ef = eX[47];
            let {
                setAppEnabled: tB,
                updatingAppId: tW
            } = (0, b.a)(ef);
            eX[48] !== e$ ? (eh = {
                hostId: e$
            }, eX[48] = e$, eX[49] = eh) : eh = eX[49];
            let {
                pendingPluginId: tJ,
                setPluginEnabled: tX
            } = (0, K.d)(eh), tY = "plugin" === e1.tool_type ? e1 : null, {
                installPlugin: t$,
                status: tZ
            } = (0, D.e)(), t1 = (0, r.z)(q.o), t0 = "connector" === e1.tool_type ? e1 : null;
            eX[50] !== t0 ? (em = t0?.suggest_type === "install" && null != (0, y.a)(t0.tool_id), eX[50] = t0, eX[51] = em) : em = eX[51];
            let t2 = em,
                t3 = null == t0 ? null : {
                    kind: "tool-suggestion-elicitation",
                    conversationId: eY,
                    requestId: eZ,
                    response: (0, s.b)("accept")
                },
                t4 = null == tY ? null : tY.remote_plugin_id ?? (td ? tY.tool_id : null),
                t5 = (0, V.g)({
                    hostId: e$,
                    pluginId: td ? t4 : tY?.tool_id ?? null,
                    remotePluginId: t4,
                    roots: tf
                });
            eX[52] !== tb ? (ey = {
                enabled: tb
            }, eX[52] = tb, eX[53] = ey) : ey = eX[53];
            let {
                data: t7,
                isLoading: t6,
                refetch: t8
            } = (0, r.x)(V.l, t5, ey), t9 = null == t0 ? null : tx.find(e => e.id === t0.tool_id) ?? null;
            eX[54] !== tA || eX[55] !== t0 ? (eb = null == t0 ? null : tA.find(e => e.id === t0.tool_id) ?? null, eX[54] = tA, eX[55] = t0, eX[56] = eb) : eb = eX[56];
            let ne = eb,
                nt = null == tY ? null : tj.find(e => e.plugin.id === tY.tool_id) ?? null;
            ty || (nt = tb && null != t7 ? (0, B.c)(t7) : null);
            let nn = er({
                    app: t9,
                    plugin: nt,
                    suggestion: e1
                }),
                no = tO?.id === e1.tool_id,
                ni = null != t3 && tU(e1.tool_id, t3),
                na = null != t3 && tF(e1.tool_id, t3),
                nr = (0, D.a)(tZ, {
                    hostId: e$,
                    pluginId: tZ?.phase === "loading" ? t4 ?? e1.tool_id : nt?.plugin.id ?? e1.tool_id
                }),
                nl = to === eZ || ni,
                ns = "plugin" === e1.tool_type && "install" === e1.suggest_type && "closed" !== t1.kind && t1.hostId === e$ && t1.pendingElicitationReply?.conversationId === eY && t1.pendingElicitationReply?.requestId === eZ,
                nc = td && "plugin" === e1.tool_type && "install" === e1.suggest_type,
                nd = tJ === (nt?.plugin.id ?? e1.tool_id);
            "connector" === e1.tool_type ? nd = "install" === e1.suggest_type ? no || na : tW === e1.tool_id : "install" === e1.suggest_type && (nd = nr || ns);
            let nu = !tp && (na || !nc && !nd && (nn || nl)),
                np = tY?.suggest_type !== "install" || nu || e4 ? null : t4 ?? tY.tool_id;
            eX[57] !== e2 || eX[58] !== eY || eX[59] !== e$ || eX[60] !== t6 || eX[61] !== eZ || eX[62] !== np || eX[63] !== e3 ? (e_ = null == np || t6 ? void 0 : JSON.stringify([e2, e3, e$, eY, eZ, np]), eX[57] = e2, eX[58] = eY, eX[59] = e$, eX[60] = t6, eX[61] = eZ, eX[62] = np, eX[63] = e3, eX[64] = e_) : e_ = eX[64];
            let ng = e_;
            eX[65] !== e2 || eX[66] !== eY || eX[67] !== t7 || eX[68] !== np || eX[69] !== e3 ? (ev = e => {
                if (null == np || null == e2 || null == e3 || t_.current) return;
                let t = null == t7 ? null : (0, U.a)(t7, void 0, null);
                (0, H.a)({
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
            }, eX[65] = e2, eX[66] = eY, eX[67] = t7, eX[68] = np, eX[69] = e3, eX[70] = ev) : ev = eX[70];
            let nf = ev,
                nh = tg || null != tY && t6 || tt || tH || nd || (td || ty) && "plugin" === e1.tool_type && "enable" === e1.suggest_type && tE,
                nm = et.enable;
            nu ? nm = et.continue : "install" === e1.suggest_type && (nm = et.install);
            let ny = null == nt ? ne?.name ?? t9?.name ?? e1.tool_name : (0, c.a)(nt),
                nb = "plugin" === e1.tool_type ? nt?.description : ne?.description ?? t9?.description,
                n_ = t0?.tool_id,
                nv = ne?.iconUrl,
                nI = ne?.iconUrlDark;
            eX[71] === Symbol.for("react.memo_cache_sentinel") ? (eI = (0, o.jsx)(E.a, {
                className: "text-secondary",
                "aria-hidden": !1,
                asset: $.a
            }), eX[71] = eI) : eI = eX[71], eX[72] !== ny || eX[73] !== n_ || eX[74] !== nv || eX[75] !== nI ? (ew = (0, o.jsx)(C.a, {
                alt: ny,
                className: "icon-md rounded-sm object-contain",
                knownAppId: n_,
                logoUrl: nv,
                logoDarkUrl: nI,
                fallback: eI
            }), eX[72] = ny, eX[73] = n_, eX[74] = nv, eX[75] = nI, eX[76] = ew) : ew = eX[76];
            let nw = ew;
            if ("plugin" === e1.tool_type) {
                let e, t, n = nt?.logoDarkPath ?? null,
                    i = nt?.logoPath ?? null;
                eX[77] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(T.a, {
                    className: "icon-md text-secondary"
                }), eX[77] = e) : e = eX[77], eX[78] !== e1.tool_name || eX[79] !== n || eX[80] !== i ? (t = (0, o.jsx)(C.a, {
                    alt: e1.tool_name,
                    className: "icon-md rounded-sm object-contain",
                    logoDarkUrl: n,
                    logoUrl: i,
                    fallback: e
                }), eX[78] = e1.tool_name, eX[79] = n, eX[80] = i, eX[81] = t) : t = eX[81], nw = t
            }
            eX[82] !== nf || eX[83] !== tv ? (eS = () => {
                nf("dismiss"), tv("decline")
            }, eX[82] = nf, eX[83] = tv, eX[84] = eS) : eS = eX[84];
            let nS = eS;
            eX[85] !== t0 || eX[86] !== tN || eX[87] !== tR || eX[88] !== t2 || eX[89] !== t9 || eX[90] !== eZ ? (ex = async () => {
                (t2 || ti(eZ), null != t9) ? await tN(t9): null != t0 && (tR(t0.install_url), ti(eZ))
            }, eX[85] = t0, eX[86] = tN, eX[87] = tR, eX[88] = t2, eX[89] = t9, eX[90] = eZ, eX[91] = ex) : ex = eX[91];
            let nx = ex;
            eX[92] !== eY || eX[93] !== e$ || eX[94] !== td || eX[95] !== t$ || eX[96] !== e7 || eX[97] !== nt || eX[98] !== tY?.suggestion_id || eX[99] !== t8 || eX[100] !== t4 || eX[101] !== eZ || eX[102] !== tb || eX[103] !== e1.tool_name || eX[104] !== e6 ? (ek = async () => {
                let e = nt;
                if (td && null != t4) e = {
                    displayName: e1.tool_name,
                    remoteMarketplaceName: l.cd,
                    remotePluginId: t4
                };
                else if (null == e && tb) {
                    tn(!0);
                    let {
                        data: t
                    } = await t8().finally(() => {
                        tn(!1)
                    });
                    e = null == t ? null : (0, B.c)(t)
                }
                null == e ? e6.danger(e7.formatMessage(et.missingPlugin), {
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
            }, eX[92] = eY, eX[93] = e$, eX[94] = td, eX[95] = t$, eX[96] = e7, eX[97] = nt, eX[98] = tY?.suggestion_id, eX[99] = t8, eX[100] = t4, eX[101] = eZ, eX[102] = tb, eX[103] = e1.tool_name, eX[104] = e6, eX[105] = ek) : ek = eX[105];
            let nk = ek;
            eX[106] !== eZ ? (eA = async e => {
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
            }, eX[106] = eZ, eX[107] = eA) : eA = eX[107];
            let nA = eA;
            eX[108] !== nA || eX[109] !== tB ? (eC = e => {
                let {
                    appId: t,
                    enabled: n
                } = e;
                return nA({
                    enabled: n,
                    setEnabled: () => tB({
                        appId: t,
                        enabled: n
                    })
                })
            }, eX[108] = nA, eX[109] = tB, eX[110] = eC) : eC = eX[110];
            let nC = eC;
            eX[111] !== nA || eX[112] !== td || eX[113] !== nt || eX[114] !== tX ? (eE = e => {
                let {
                    pluginDisplayName: t,
                    pluginId: n,
                    enabled: o
                } = e;
                return nA({
                    enabled: o,
                    setEnabled: () => tX({
                        pluginDisplayName: t,
                        pluginId: n,
                        plugin: td ? nt?.plugin : void 0,
                        enabled: o
                    })
                })
            }, eX[111] = nA, eX[112] = td, eX[113] = nt, eX[114] = tX, eX[115] = eE) : eE = eX[115];
            let nE = eE;
            eX[116] !== e7 || eX[117] !== nc || eX[118] !== ty || eX[119] !== ns || eX[120] !== tP || eX[121] !== t8 || eX[122] !== tv || eX[123] !== e1 || eX[124] !== e6 ? (eP = async () => {
                nc || ns || (tn(!0), await (async () => {
                    try {
                        let e;
                        if ("connector" === e1.tool_type) return void tv("accept");
                        if (ty) e = (await tP()).data?.find(e => e.plugin.id === e1.tool_id) ?? null;
                        else {
                            let {
                                data: t
                            } = await t8({
                                throwOnError: !0
                            });
                            e = null == t ? null : (0, B.c)(t)
                        }
                        if (!er({
                                app: null,
                                plugin: e,
                                suggestion: e1
                            })) return void e6.danger(e7.formatMessage(et.pluginNotReady, {
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
                        }), e6.danger(e7.formatMessage(et.genericLoadError), {
                            errorAnalytics: {
                                toastId: "inlineToolSuggestionRequestCard.handleContinue.genericLoadError"
                            }
                        })
                    }
                })().finally(() => {
                    tn(!1)
                }))
            }, eX[116] = e7, eX[117] = nc, eX[118] = ty, eX[119] = ns, eX[120] = tP, eX[121] = t8, eX[122] = tv, eX[123] = e1, eX[124] = e6, eX[125] = eP) : eP = eX[125];
            let nP = eP;
            eX[126] !== e7 || eX[127] !== e6 ? (ej = e => {
                e6.danger(e ?? e7.formatMessage(et.genericLoadError), {
                    errorAnalytics: {
                        toastId: "inlineToolSuggestionRequestCard.teamInstall"
                    }
                })
            }, eX[126] = e7, eX[127] = e6, eX[128] = ej) : ej = eX[128];
            let nj = ej;
            eX[129] !== tq || eX[130] !== eY || eX[131] !== e$ || eX[132] !== eZ || eX[133] !== e0 || eX[134] !== nj || eX[135] !== tL?.oauthState ? (eM = async (e, t) => {
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
                return t_.current = !1, nj(), !1
            }, eX[129] = tq, eX[130] = eY, eX[131] = e$, eX[132] = eZ, eX[133] = e0, eX[134] = nj, eX[135] = tL?.oauthState, eX[136] = eM) : eM = eX[136];
            let nM = eM;
            eX[137] !== eY || eX[138] !== ta || eX[139] !== e$ || eX[140] !== e8 || eX[141] !== eZ || eX[142] !== e0 || eX[143] !== nM || eX[144] !== nj || eX[145] !== tL ? (eO = async (e, t) => {
                let n = tL?.resumeTarget,
                    o = n?.kind === "service-account" ? n.pendingElicitationReply : void 0,
                    i = o?.oauth;
                if (tL?.oauthState !== e || n?.kind !== "service-account" || null == o || i?.kind !== "connected" || ta === e) return;
                let a = () => null != o.actorUserId && e0.get(A.k) === o.actorUserId && e0.get(A.f) === n.accountId && e0.get(h.H, eY) === e$ && e0.get(h.xb, eY)?.some(e => e.id === eZ) === !0;
                if (a()) {
                    if ((0, v.a)(tL.appId) !== (0, v.a)(i.connectorId)) {
                        tr(e), nj();
                        return
                    }
                    try {
                        await Promise.all([e8.invalidateQueries({
                            queryKey: ["service-account-plugins", n.accountId, n.serviceAccountId]
                        }), (0, X.e)(e0, n.accountId)]);
                        let r = await ee(e0, e$, eY, [
                            [i.connectorId]
                        ]);
                        if (t() || !a()) return;
                        if (!r) {
                            tr(e), nj();
                            return
                        }
                        await nM(o.response, e) || t() || tr(e)
                    } catch (n) {
                        t() || (Y.a.error("Failed to resume Team app connect elicitation", {
                            safe: {
                                connectorId: i.connectorId
                            },
                            sensitive: {
                                error: n
                            }
                        }), tr(e), nj())
                    }
                }
            }, eX[137] = eY, eX[138] = ta, eX[139] = e$, eX[140] = e8, eX[141] = eZ, eX[142] = e0, eX[143] = nM, eX[144] = nj, eX[145] = tL, eX[146] = eO) : eO = eX[146];
            let nO = (0, d.useEffectEvent)(eO);
            eX[147] !== tK || eX[148] !== eY || eX[149] !== e$ || eX[150] !== eZ || eX[151] !== nO || eX[152] !== e0 || eX[153] !== tV || eX[154] !== tz ? (eT = () => {
                if (null == tK) return;
                let e = !1,
                    t = !1,
                    n = e0.watch(n => {
                        let {
                            get: o
                        } = n, i = o(h.H, eY), a = o(h.xb, eY), r = o(A.f), l = o(A.k);
                        !t && i === e$ && a?.some(e => e.id === eZ) && r === tV && l === tz && (t = !0, nO(tK, () => e))
                    });
                return () => {
                    e = !0, n()
                }
            }, eX[147] = tK, eX[148] = eY, eX[149] = e$, eX[150] = eZ, eX[151] = nO, eX[152] = e0, eX[153] = tV, eX[154] = tz, eX[155] = eT) : eT = eX[155], eX[156] !== tK || eX[157] !== eY || eX[158] !== e$ || eX[159] !== eZ || eX[160] !== e0 || eX[161] !== tV || eX[162] !== tz ? (eN = [e0, e$, eY, eZ, tK, tV, tz], eX[156] = tK, eX[157] = eY, eX[158] = e$, eX[159] = eZ, eX[160] = e0, eX[161] = tV, eX[162] = tz, eX[163] = eN) : eN = eX[163], (0, d.useEffect)(eT, eN), eX[164] !== eY || eX[165] !== e$ || eX[166] !== e7 || eX[167] !== e0 || eX[168] !== nM || eX[169] !== nj || eX[170] !== e1.tool_name ? (eR = async e => {
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
                nj(e7.formatMessage(et.pluginNotReady, {
                    toolName: e1.tool_name
                }))
            }, eX[164] = eY, eX[165] = e$, eX[166] = e7, eX[167] = e0, eX[168] = nM, eX[169] = nj, eX[170] = e1.tool_name, eX[171] = eR) : eR = eX[171];
            let nT = eR;
            eX[172] !== eY || eX[173] !== e$ || eX[174] !== e7 || eX[175] !== ne || eX[176] !== t4 || eX[177] !== e0 || eX[178] !== nM || eX[179] !== nj || eX[180] !== e1.tool_id || eX[181] !== e1.tool_type ? (eU = async () => {
                try {
                    let e, t = await async function(e) {
                        let t = e.get(A.f);
                        return null == t ? null : null
                    }(e0);
                    if (null == t) return void nj();
                    if ("connector" === e1.tool_type) {
                        if (null == ne) return void nj();
                        e = {
                            kind: "connector",
                            connectorId: (0, v.a)(e1.tool_id),
                            app: ne
                        }
                    } else {
                        if (null == t4) return void nj(e7.formatMessage(et.missingPlugin));
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
                    }), nj()
                }
            }, eX[172] = eY, eX[173] = e$, eX[174] = e7, eX[175] = ne, eX[176] = t4, eX[177] = e0, eX[178] = nM, eX[179] = nj, eX[180] = e1.tool_id, eX[181] = e1.tool_type, eX[182] = eU) : eU = eX[182];
            let nN = eU;
            eX[183] !== nP || eX[184] !== nx || eX[185] !== nk || eX[186] !== nC || eX[187] !== nE || eX[188] !== nN || eX[189] !== e7 || eX[190] !== tp || eX[191] !== tg || eX[192] !== t9 || eX[193] !== nt || eX[194] !== nf || eX[195] !== nu || eX[196] !== e1.suggest_type || eX[197] !== e1.tool_type || eX[198] !== e6 ? (eq = async () => {
                if (!tg) {
                    if (nf("click"), tp) {
                        tn(!0), await nN().finally(() => {
                            tn(!1)
                        });
                        return
                    }
                    if (nu) return void await nP();
                    if ("connector" === e1.tool_type) return "install" === e1.suggest_type ? void await nx() : null == t9 ? void await nP() : void await nC({
                        appId: t9.id,
                        enabled: !0
                    });
                    if ("install" === e1.suggest_type) return void await nk();
                    if (null == nt) return void e6.danger(e7.formatMessage(et.missingPlugin), {
                        errorAnalytics: {
                            toastId: "inlineToolSuggestionRequestCard.handlePrimaryAction.missingPlugin"
                        }
                    });
                    await nE({
                        pluginDisplayName: (0, c.a)(nt),
                        pluginId: nt.plugin.id,
                        enabled: !0
                    })
                }
            }, eX[183] = nP, eX[184] = nx, eX[185] = nk, eX[186] = nC, eX[187] = nE, eX[188] = nN, eX[189] = e7, eX[190] = tp, eX[191] = tg, eX[192] = t9, eX[193] = nt, eX[194] = nf, eX[195] = nu, eX[196] = e1.suggest_type, eX[197] = e1.tool_type, eX[198] = e6, eX[199] = eq) : eq = eX[199];
            let nR = eq;
            eX[200] !== e2 || eX[201] !== ng || eX[202] !== nf || eX[203] !== e3 ? (eD = e => {
                if (!(e?.parentElement == null || null == ng || null == e2 || null == e3 || e5.current.has(ng))) return (0, N.b)(e.parentElement, e5.current, void 0, {
                    loggedPluginIds: e5.current,
                    onViewed: () => nf("viewed")
                })
            }, eX[200] = e2, eX[201] = ng, eX[202] = nf, eX[203] = e3, eX[204] = eD) : eD = eX[204];
            let nU = nu && nl;
            return eX[205] !== e1 || eX[206] !== ny || eX[207] !== nU ? (eF = (0, o.jsx)(ea, {
                showContinueTitle: nU,
                suggestion: e1,
                title: ny
            }), eX[205] = e1, eX[206] = ny, eX[207] = nU, eX[208] = eF) : eF = eX[208], eX[209] !== tH || eX[210] !== nm ? (eL = tH ? (0, o.jsx)(g.a, {
                id: "settings.mcp.appConnectModal.completingConnectionButton",
                defaultMessage: "Finishing connection…"
            }) : (0, o.jsx)(g.a, {
                ...nm
            }), eX[209] = tH, eX[210] = nm, eX[211] = eL) : eL = eX[211], eX[212] !== nR ? (eG = () => {
                nR()
            }, eX[212] = nR, eX[213] = eG) : eG = eX[213], eX[214] !== nS || eX[215] !== ng || eX[216] !== nh || eX[217] !== nb || eX[218] !== nw || eX[219] !== eD || eX[220] !== eF || eX[221] !== eL || eX[222] !== eG ? (eQ = (0, o.jsx)(F.a, {
                ref: eD,
                impressionId: ng,
                icon: nw,
                title: eF,
                description: nb,
                primaryActionLabel: eL,
                isPrimaryActionLoading: nh,
                onDecline: nS,
                onSubmit: eG
            }), eX[214] = nS, eX[215] = ng, eX[216] = nh, eX[217] = nb, eX[218] = nw, eX[219] = eD, eX[220] = eF, eX[221] = eL, eX[222] = eG, eX[223] = eQ) : eQ = eX[223], eX[224] !== nT || eX[225] !== eY || eX[226] !== e$ || eX[227] !== eZ || eX[228] !== e9 ? (eH = null == e9 ? null : (0, o.jsx)(Z, {
                ...e9,
                onClose: () => te(null),
                onComplete: nT,
                elicitation: {
                    hostId: e$,
                    reply: {
                        conversationId: eY,
                        requestId: eZ,
                        response: (0, s.b)("accept")
                    }
                }
            }), eX[224] = nT, eX[225] = eY, eX[226] = e$, eX[227] = eZ, eX[228] = e9, eX[229] = eH) : eH = eX[229], eX[230] !== tM ? (eK = e => {
                e || tM()
            }, eX[230] = tM, eX[231] = eK) : eK = eX[231], eX[232] !== e$ || eX[233] !== t2 || eX[234] !== e8 || eX[235] !== tS || eX[236] !== eZ ? (eV = async () => {
                t2 && ti(eZ), await (0, _.a)({
                    hostId: e$,
                    queryClient: e8,
                    refreshAppsList: async () => (await tS()).data ?? []
                })
            }, eX[232] = e$, eX[233] = t2, eX[234] = e8, eX[235] = tS, eX[236] = eZ, eX[237] = eV) : eV = eX[237], eX[238] !== eY || eX[239] !== eZ ? (ez = () => ({
                resumeTarget: {
                    kind: "tool-suggestion-elicitation",
                    conversationId: eY,
                    requestId: eZ,
                    response: (0, s.b)("accept")
                }
            }), eX[238] = eY, eX[239] = eZ, eX[240] = ez) : ez = eX[240], eX[241] !== tT ? (eB = e => {
                tT({
                    ...e
                })
            }, eX[241] = tT, eX[242] = eB) : eB = eX[242], eX[243] !== tO || eX[244] !== e$ || eX[245] !== eK || eX[246] !== eV || eX[247] !== ez || eX[248] !== eB ? (eW = (0, o.jsx)(J.a, {
                oauthReferrer: "tool_suggestion",
                app: tO,
                hostId: e$,
                onOpenChange: eK,
                onConnected: eV,
                getOAuthResumeContext: ez,
                onOAuthStarted: eB
            }), eX[243] = tO, eX[244] = e$, eX[245] = eK, eX[246] = eV, eX[247] = ez, eX[248] = eB, eX[249] = eW) : eW = eX[249], eX[250] !== eQ || eX[251] !== eH || eX[252] !== eW ? (eJ = (0, o.jsxs)(o.Fragment, {
                children: [eQ, eH, eW]
            }), eX[250] = eQ, eX[251] = eH, eX[252] = eW, eX[253] = eJ) : eJ = eX[253], eJ
        }

        function ei() {
            return !1
        }

        function ea(e) {
            let t = (0, i.c)(6),
                {
                    showContinueTitle: n,
                    suggestion: a,
                    title: r
                } = e;
            if ("install" !== a.suggest_type || !n) {
                let e;
                return t[0] !== r ? (e = (0, o.jsx)(o.Fragment, {
                    children: r
                }), t[0] = r, t[1] = e) : e = t[1], e
            }
            switch (a.tool_type) {
                case "connector": {
                    let e;
                    return t[2] !== r ? (e = (0, o.jsx)(g.a, {
                        id: "composer.toolSuggestion.connector.continueInstallTitle",
                        defaultMessage: "Click Continue when you're done connecting {toolName}",
                        values: {
                            toolName: r
                        }
                    }), t[2] = r, t[3] = e) : e = t[3], e
                }
                case "plugin": {
                    let e;
                    return t[4] !== r ? (e = (0, o.jsx)(g.a, {
                        id: "composer.toolSuggestion.plugin.continueInstallTitle",
                        defaultMessage: "Click Continue when you're done installing the {toolName} plugin",
                        values: {
                            toolName: r
                        }
                    }), t[4] = r, t[5] = e) : e = t[5], e
                }
            }
        }

        function er(e) {
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
            a: function(e, t, n, r) {
                (0, a.a)(e, i.CodexPluginAction, {
                    action: r,
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
                    r = !0,
                    l = () => {
                        if (r && "visible" === a.visibilityState && null != o)
                            for (let [e, t] of i) o.loggedPluginIds.has(t) || (o.loggedPluginIds.add(t), o.onViewed(t)), s.unobserve(e), i.delete(e)
                    },
                    s = new IntersectionObserver(e => {
                        if (r) {
                            for (let a of e) {
                                if (!a.isIntersecting || a.intersectionRatio < .5) {
                                    i.delete(a.target);
                                    continue
                                }
                                let e = a.target.getAttribute("data-plugin-impression-id");
                                null != e && (null == n || t.has(e) || (t.add(e), n(e)), null == o ? s.unobserve(a.target) : i.set(a.target, e))
                            }
                            l()
                        }
                    }, {
                        threshold: .5
                    });
                for (let t of e.querySelectorAll("[data-plugin-impression-id]")) s.observe(t);
                return null != o && a.addEventListener("visibilitychange", l), () => {
                    r = !1, s.disconnect(), a.removeEventListener("visibilitychange", l)
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
            r = n("eYlV"),
            l = n("Dgwo"),
            s = n("whfw"),
            c = n("z0li"),
            d = n("PAzX"),
            u = n("OiCI"),
            p = n("Cslg"),
            g = n("XNvh"),
            f = n("MX6A"),
            h = n("svjy"),
            m = n("jhEa");
        async function y(e, t) {
            let n = t.pendingElicitationReply;
            if (null != n) try {
                await (0, l.b)(e, t.hostId).replyWithMcpServerElicitationResponse(n.conversationId, n.requestId, n.response)
            } catch {
                throw Error(e.get(h.a).formatMessage({
                    id: "plugins.onboarding.installCompletionFailed",
                    defaultMessage: "Couldn’t complete installation. Please try again"
                }))
            }
        }
        n.d(t, {}, {
            a: y,
            b: async function(e, t, l) {
                let b, {
                        target: _
                    } = t,
                    v = (0, a.a)(t.plugin),
                    I = (0, g.c)(t.plugin.plugin.id),
                    w = e.get(h.a).formatMessage({
                        id: "plugins.onboarding.prompt",
                        defaultMessage: "Help me set up {plugin} with the {skill} skill"
                    }, {
                        plugin: (0, f.b)(`@${v}`, I),
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
                    } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(544914)]).then(n.bind(n, "O68Q"));
                    return o(e, _, w, t.skill.name)
                }
                let S = [{
                    type: "mention",
                    name: v,
                    path: I
                }, {
                    type: "skill",
                    name: t.skill.name,
                    path: t.skill.path
                }];
                if (null != _.conversationId) {
                    let t, n = await (0, d.a)(e, _.hostId, null);
                    await y(e, _);
                    try {
                        await (0, s.a)(e, _.hostId, _.conversationId, {
                            prompt: w,
                            inputItems: S,
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
                let x = t => "failed" === t.status ? t : "created" === t.status ? {
                        status: "started",
                        route: (0, m.b)(_, t.conversationId),
                        message: (0, c.a)(e, t)?.message
                    } : {
                        status: "outcome-unknown",
                        message: (0, c.a)(e, t).message
                    },
                    k = !1,
                    A = async e => {
                        b = e, k && await l?.(x(e))
                    };
                if (_.hostId === o._b) {
                    let t = await (0, c.b)(e, _.hostId, {
                        input: [{
                            type: "text",
                            text: w,
                            text_elements: []
                        }, ...S],
                        cwd: o.kd,
                        workspaceRoots: [o.kd],
                        workspaceKind: "projectless",
                        cloudThreadPrototype: !0,
                        collaborationMode: null,
                        serviceTier: null,
                        useAppServerPermissionDefault: !0,
                        turnTrigger: "plugin_onboarding"
                    }, {
                        onSettled: A
                    });
                    return k = !0, x(b ?? t)
                }
                let C = await (0, r.b)({
                    scope: e,
                    additionalUserInput: S,
                    model: void 0,
                    thinking: void 0,
                    prompt: w,
                    target: {
                        type: "projectless"
                    },
                    turnTrigger: "plugin_onboarding",
                    onSettled: A
                });
                if (k = !0, "creation" !== C.kind) throw Error("Plugin setup requires a local conversation");
                return x(b ?? C.result)
            }
        })
    }),
    odxv: (function(e, t, n) {
        var o = n("Q840"),
            i = n("MKR8"),
            a = n("SGsN"),
            r = n("OWtl"),
            l = n("jltc"),
            s = n("wGqp");
        let c = (0, o.v)(r.a, e => null);
        n.d(t, {}, {
            a: c,
            b: async function(e, t, n) {
                let o = {
                        hostId: t.target.hostId,
                        conversationId: t.target.conversationId,
                        requestId: t.target.pendingElicitationReply.requestId
                    },
                    r = e.get(c, o);
                if (r !== t || null != r.submittingAction) return;
                (0, l.a)(e, t, "setup" === n ? "selected" : "skipped");
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
            r = n("OFP1"),
            l = n("Ow2S"),
            s = n("dQRk"),
            c = n("jAnS"),
            d = n("j9xU"),
            u = n("OWtl"),
            p = n("Bc5r");
        let g = (0, o.d)(u.a, (e, t) => {
            let {
                get: n
            } = t;
            return "chatgpt" !== e.type || null == e.conversationId || !n(l.j, e.conversationId) && !n(s.eb, e.conversationId) && !(0, s.Db)(n(s.cb, e.conversationId))
        });
        n.d(t, {}, {
            a: function(e, t) {
                return null != t.conversationId || ("chatgpt" === t.type ? e.get(a.a, {
                    name: "chatgpt"
                }).isCapable && "allowed" === e.get(r.r).status : t.hostId !== i._b || e.get(d.e))
            },
            b: function(e, t) {
                return "chatgpt" === e.type ? (0, c.c)(t) : (0, p.a)((0, i.he)((0, i.Xe)(t)), e.hostId)
            },
            c: g
        })
    })
};