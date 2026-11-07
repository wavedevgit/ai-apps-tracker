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
                        hostId: h
                    } = e;
                return u[0] !== p || u[1] !== h ? (t = h, n = p, s = [...l(t), n], u[0] = p, u[1] = h, u[2] = s) : s = u[2], u[3] !== h ? (c = async () => await a.appServices.ambientSuggestions?.hasAccessibleAndEnabledApp({
                    hostId: h
                }) ?? !1, u[3] = h, u[4] = c) : c = u[4], u[5] !== g || u[6] !== s || u[7] !== c ? (d = {
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
                let n = o.appServices?.ambientSuggestions;
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
                        children: h,
                        loading: f,
                        onOpenChange: m
                    } = e,
                    [y, b] = (0, r.useState)(null),
                    _ = (0, l.c)();
                g[0] !== y || g[1] !== _ ? (t = null == y ? void 0 : {
                    height: `min(${y}px, calc((100dvh - 2rem) / ${_}))`
                }, g[0] = y, g[1] = _, g[2] = t) : t = g[2], g[3] !== t ? (n = {
                    "aria-describedby": void 0,
                    style: t
                }, g[3] = t, g[4] = n) : n = g[4], g[5] !== y || g[6] !== f ? (c = e => {
                    !f && null == y && null != e && e.offsetHeight > 0 && b(e.offsetHeight)
                }, g[5] = y, g[6] = f, g[7] = c) : c = g[7];
                let v = (f || null != y) && "h-full",
                    I = null != y && "overflow-y-auto";
                return g[8] !== v || g[9] !== I ? (d = (0, a.b)(v, I), g[8] = v, g[9] = I, g[10] = d) : d = g[10], g[11] !== h || g[12] !== c || g[13] !== d ? (u = (0, o.jsx)("div", {
                    ref: c,
                    className: d,
                    children: h
                }), g[11] = h, g[12] = c, g[13] = d, g[14] = u) : u = g[14], g[15] !== m || g[16] !== n || g[17] !== u ? (p = (0, o.jsx)(s.a, {
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
            let t, n, c, u, p, g, h, f, m, y, b, _, v = (0, i.c)(27),
                {
                    isPending: I,
                    embedded: w,
                    isFetching: S,
                    onOpenChange: A,
                    onRetry: x
                } = e,
                k = void 0 !== w && w,
                C = k ? "h2" : l.d,
                E = k ? "p" : l.c;
            if (I) {
                let e;
                return v[0] !== k ? (e = (0, o.jsx)(d.a, {
                    embedded: k
                }), v[0] = k, v[1] = e) : e = v[1], e
            }
            return v[2] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(a.a, {
                id: "beacons.connectApp.loadError.title",
                defaultMessage: "Couldn’t load connector",
                description: "Error heading in the app connection dialog shown to an end user when connector details requested by the user could not be loaded. Keep this concise and nontechnical; there are no placeholders."
            }), v[2] = t) : t = v[2], v[3] !== C ? (n = (0, o.jsx)(C, {
                children: t
            }), v[3] = C, v[4] = n) : n = v[4], v[5] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, o.jsx)(a.a, {
                id: "beacons.connectApp.loadError.description",
                defaultMessage: "Try again, or cancel and return to the previous page",
                description: "Actionable error explanation in the app connection dialog shown to an end user when connector details requested by the user could not be loaded. The dialog offers Retry and Cancel buttons. Keep this concise; there are no placeholders."
            }), v[5] = c) : c = v[5], v[6] !== E ? (u = (0, o.jsx)(E, {
                children: c
            }), v[6] = E, v[7] = u) : u = v[7], v[8] !== n || v[9] !== u ? (p = (0, o.jsx)(s.d, {
                title: n,
                subtitle: u
            }), v[8] = n, v[9] = u, v[10] = p) : p = v[10], v[11] !== A ? (g = () => A(!1), v[11] = A, v[12] = g) : g = v[12], v[13] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, o.jsx)(a.a, {
                id: "beacons.connectApp.loadError.button.cancel",
                defaultMessage: "Cancel",
                description: "Button label in the app connection dialog for closing it after connector details requested by the user failed to load. Keep this short; there are no placeholders."
            }), v[13] = h) : h = v[13], v[14] !== S || v[15] !== g ? (f = (0, o.jsx)(r.a, {
                color: "secondary",
                disabled: S,
                onClick: g,
                type: "button",
                children: h
            }), v[14] = S, v[15] = g, v[16] = f) : f = v[16], v[17] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, o.jsx)(a.a, {
                id: "beacons.connectApp.loadError.button.retry",
                defaultMessage: "Retry",
                description: "Button label in the app connection dialog for retrying connector details that failed to load after an end user requested an app connection. Keep this short; there are no placeholders."
            }), v[17] = m) : m = v[17], v[18] !== S || v[19] !== x ? (y = (0, o.jsx)(r.a, {
                color: "primary",
                loading: S,
                onClick: x,
                type: "button",
                children: m
            }), v[18] = S, v[19] = x, v[20] = y) : y = v[20], v[21] !== y || v[22] !== f ? (b = (0, o.jsxs)(s.c, {
                children: [f, y]
            }), v[21] = y, v[22] = f, v[23] = b) : b = v[23], v[24] !== b || v[25] !== p ? (_ = (0, o.jsxs)(s.b, {
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
            r = n("BolX"),
            l = n("Qgfj"),
            s = n("Wf1j"),
            c = n("VVkm"),
            d = n("Dgwo"),
            u = n("biqr"),
            p = n("OiCI"),
            g = n("SGsN"),
            h = n("a4MG"),
            f = n("sLlu"),
            m = n("OWtl"),
            y = n("kfGJ"),
            b = n("WFY2");
        let _ = (0, l.f)({
            enableSuccess: {
                id: "apps.enable.success",
                defaultMessage: "{appName} app enabled",
                description: "Toast shown after successfully enabling an app"
            },
            disableSuccess: {
                id: "apps.disable.success",
                defaultMessage: "{appName} app disabled",
                description: "Toast shown after successfully disabling an app"
            },
            updateError: {
                id: "apps.update.error",
                defaultMessage: "Failed to update app",
                description: "Toast shown when enabling or disabling an app fails"
            }
        });
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, v, I, w, S, A, x = (0, o.c)(35),
                    k = e?.hostId ?? y.a,
                    C = (0, r.y)(m.a),
                    E = (0, r.z)(p.a),
                    P = (0, i.c)(),
                    M = (0, f.b)(),
                    j = (0, s.a)(),
                    O = E ?? void 0;
                x[0] !== k || x[1] !== O ? (t = (0, u.g)(k, O), x[0] = k, x[1] = O, x[2] = t) : t = x[2];
                let T = t;
                x[3] !== T || x[4] !== k || x[5] !== M ? (n = async () => {
                    await Promise.all([M((0, c.b)(k)), M(T), M([...h.b, k]), M([...h.c, k]), M(h.f), M(["user-saved-config"])])
                }, x[3] = T, x[4] = k, x[5] = M, x[6] = n) : n = x[6];
                let R = n;
                x[7] !== k || x[8] !== P || x[9] !== C ? (l = async e => {
                    let {
                        appId: t,
                        enabled: n
                    } = e, o = await (0, h.m)(C, P, k);
                    if ("okOverridden" === (await (0, d.b)(C, k).sendRequest("config/batchWrite", {
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
                }, x[7] = k, x[8] = P, x[9] = C, x[10] = l) : l = x[10], x[11] !== T || x[12] !== P ? (v = async e => {
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
                }, x[11] = T, x[12] = P, x[13] = v) : v = x[13], x[14] !== T || x[15] !== j || x[16] !== M || x[17] !== P || x[18] !== C ? (I = async (e, t, n) => {
                    let {
                        appId: o,
                        appName: i,
                        enabled: a
                    } = t;
                    if (a && n?.previousApps?.find(e => e.id === o)?.isEnabled === !1) {
                        await M(T);
                        let e = P.getQueryData(T)?.find(e => e.id === o);
                        if (e?.isEnabled === !1) throw Error("App remains disabled after updating its configuration")
                    }
                    let r = i ?? P.getQueryData(T)?.find(e => e.id === o)?.name ?? o;
                    C.get(g.f).success(j.formatMessage(a ? _.enableSuccess : _.disableSuccess, {
                        appName: r
                    }))
                }, x[14] = T, x[15] = j, x[16] = M, x[17] = P, x[18] = C, x[19] = I) : I = x[19], x[20] !== T || x[21] !== j || x[22] !== P || x[23] !== C ? (w = (e, t, n) => {
                    b.a.error("Failed to update app enablement", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), C.get(g.f).danger(j.formatMessage(_.updateError), {
                        errorAnalytics: {
                            toastId: "appsAvailability.onError.updateError"
                        }
                    }), n?.previousApps && P.setQueryData(T, n.previousApps)
                }, x[20] = T, x[21] = j, x[22] = P, x[23] = C, x[24] = w) : w = x[24], x[25] !== R || x[26] !== l || x[27] !== v || x[28] !== I || x[29] !== w ? (S = {
                    mutationFn: l,
                    onMutate: v,
                    onSuccess: I,
                    onError: w,
                    onSettled: R
                }, x[25] = R, x[26] = l, x[27] = v, x[28] = I, x[29] = w, x[30] = S) : S = x[30];
                let N = (0, a.a)(S),
                    q = N.isPending ? N.variables?.appId ?? null : null;
                return x[31] !== N.isPending || x[32] !== N.mutateAsync || x[33] !== q ? (A = {
                    setAppEnabled: N.mutateAsync,
                    isUpdating: N.isPending,
                    updatingAppId: q
                }, x[31] = N.isPending, x[32] = N.mutateAsync, x[33] = q, x[34] = A) : A = x[34], A
            }
        })
    }),
    oxjR: (function(e, t, n) {
        var o = n("d0tz"),
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
                    projectRoot: (0, o.Ve)(o.fd),
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
            r = n("BolX"),
            l = n("d0tz"),
            s = n("I3F6"),
            c = n("zd8w"),
            d = n("Qgfj"),
            u = n("Wf1j"),
            p = n("oyxz"),
            g = n("Dgwo"),
            h = n("oo2L"),
            f = n("Sx5O"),
            m = n("yGJ5"),
            y = n("NcQ7"),
            b = n("CMv2"),
            _ = n("QSD9"),
            v = n("pxeg"),
            I = n("PraM"),
            w = n("BQbE"),
            S = n("biqr"),
            A = n("yxN2"),
            x = n("OiCI"),
            k = n("AcSY"),
            C = n("FvYa"),
            E = n("Ot7V"),
            P = n("HOLv"),
            M = n("SGsN"),
            j = n("OWtl"),
            O = n("ecE5"),
            T = n("kfGJ"),
            R = n("hZax"),
            N = n("WFY2"),
            q = n("Hl7m"),
            D = n("GTV7");
        let U = (0, d.f)({
            reconnect: {
                id: "composer.connectorAuth.reconnect.button.label",
                defaultMessage: "Reconnect",
                description: "Primary action label for reconnecting expired connector credentials."
            },
            continue: {
                id: "composer.connectorAuth.continue.button.label",
                defaultMessage: "Continue",
                description: "Primary action label shown after the user has opened the connector auth flow and Codex is checking whether auth completed."
            },
            connect: {
                id: "composer.connectorAuth.connect.button.label",
                defaultMessage: "Connect",
                description: "Primary action label for starting a first-time connector auth flow."
            },
            updateAccess: {
                id: "composer.connectorAuth.updateAccess.button.label",
                defaultMessage: "Update access",
                description: "Primary action label for starting a connector permission-upgrade auth flow."
            },
            companyAccount: {
                id: "composer.connectorAuth.companyAccount.button.label",
                defaultMessage: "Sign in",
                description: "Button that opens company sign-in to restore the employee's app access."
            },
            companyAccountDescription: {
                id: "composer.connectorAuth.companyAccount.description",
                defaultMessage: "Sign in with your company account to use {connectorName}. Then return here and select Continue.",
                description: "Prompts an employee to sign in with their company, then return to the conversation and select the Continue button. {connectorName} is the app name."
            },
            missingConnectionDescription: {
                id: "composer.connectorAuth.missingConnection.description",
                defaultMessage: "ChatGPT needs access to {connectorName} to help with this request",
                description: "Description for a connector auth elicitation that requires first-time connection. Placeholder {connectorName} is the connector name, for example Gmail."
            },
            missingScopesDescription: {
                id: "composer.connectorAuth.missingScopes.description",
                defaultMessage: "Your current connection doesn't include the permissions needed for this request.",
                description: "Description for a connector auth elicitation that requires additional permissions."
            },
            reconnectDescription: {
                id: "composer.connectorAuth.reconnect.description",
                defaultMessage: "Your {connectorName} connection has expired. Reconnect it before ChatGPT can use it for this request.",
                description: "Description for a connector auth elicitation that requires reconnecting expired connector credentials. Placeholder {connectorName} is the connector name, for example Gmail."
            }
        });
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, F, L, G, V, Q, z, B, W, K, X, H, J, Y, $, Z, ee, et, en, eo, ei, ea, er, el, es, ec, ed, eu = (0, i.c)(128),
                    {
                        conversationId: ep,
                        hostId: eg,
                        requestId: eh,
                        auth: ef
                    } = e,
                    em = (0, r.y)(j.a),
                    ey = (0, u.a)(),
                    eb = (0, a.c)(),
                    e_ = (0, R.k)();
                eu[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                    preview: !1
                }, eu[0] = t) : t = eu[0];
                let {
                    data: ev
                } = (0, k.i)(void 0, t), eI = (0, r.z)(M.f), [ew, eS] = (0, c.useState)(!1), [eA, ex] = (0, c.useState)(!1), [ek, eC] = (0, c.useState)(!1), eE = (0, c.useRef)(!1), eP = eg === l.Vb ? T.a : eg;
                eu[1] !== eP ? (n = {
                    hostId: eP
                }, eu[1] = eP, eu[2] = n) : n = eu[2];
                let {
                    data: eM,
                    hardRefetchAppsList: ej,
                    isPending: eO
                } = (0, S.m)(n);
                eu[3] !== eM ? (d = void 0 === eM ? [] : eM, eu[3] = eM, eu[4] = d) : d = eu[4];
                let eT = d;
                eu[5] !== ef.connector.connector_id ? (F = [ef.connector.connector_id], eu[5] = ef.connector.connector_id, eu[6] = F) : F = eu[6], eu[7] !== eP || eu[8] !== F ? (L = {
                    appIds: F,
                    hostId: eP
                }, eu[7] = eP, eu[8] = F, eu[9] = L) : L = eu[9];
                let {
                    data: eR
                } = (0, w.c)(L);
                eu[10] !== eR ? (G = void 0 === eR ? [] : eR, eu[10] = eR, eu[11] = G) : G = eu[11];
                let eN = G;
                eu[12] === Symbol.for("react.memo_cache_sentinel") ? (V = () => {
                    eS(!0)
                }, eu[12] = V) : V = eu[12], eu[13] !== eg ? (Q = {
                    hostId: eg,
                    oauthReferrer: "conversation_auth",
                    onExternalConnectStarted: V
                }, eu[13] = eg, eu[14] = Q) : Q = eu[14];
                let {
                    clearConnectingApp: eq,
                    clearPendingAppConnect: eD,
                    connectingApp: eU,
                    handleAppConnectOAuthStarted: eF,
                    handleConnectApp: eL,
                    handleOpenAppUrl: eG,
                    isAppConnectPending: eV
                } = (0, A.a)(Q), {
                    isAppConnectCallbackClaimed: eQ
                } = (0, m.g)();
                eu[15] !== eT || eu[16] !== ef.connector.connector_id ? (z = eT.find(e => e.id === ef.connector.connector_id) ?? null, eu[15] = eT, eu[16] = ef.connector.connector_id, eu[17] = z) : z = eu[17];
                let ez = z;
                eu[18] !== ef.connector.connector_id || eu[19] !== eN ? (B = eN.find(e => e.id === ef.connector.connector_id) ?? null, eu[18] = ef.connector.connector_id, eu[19] = eN, eu[20] = B) : B = eu[20];
                let eB = B,
                    eW = eB?.name ?? ef.connector.connector_name,
                    eK = ef.connector.auth_reason,
                    eX = "missing_link" === eK;
                eu[21] !== ef.connector.connector_id ? (W = (0, y.a)(ef.connector.connector_id), eu[21] = ef.connector.connector_id, eu[22] = W) : W = eu[22];
                let eH = null != W,
                    eJ = "oauth_upgrade_required" === eK;
                eu[23] !== ef.connector.connector_id || eu[24] !== ev?.plan_type || eu[25] !== eX || eu[26] !== e_ ? (K = (0, b.d)({
                    planType: ev?.plan_type,
                    connectorId: ef.connector.connector_id,
                    disableExposureLog: !0,
                    statsigClient: e_
                }), X = eX && null != (0, b.f)(ef.connector.connector_id, K), eu[23] = ef.connector.connector_id, eu[24] = ev?.plan_type, eu[25] = eX, eu[26] = e_, eu[27] = K, eu[28] = X) : (K = eu[27], X = eu[28]);
                let eY = X;
                eu[29] !== ef.connector.connector_id || eu[30] !== ev?.plan_type || eu[31] !== eX || eu[32] !== e_ ? (H = eX && (0, v.f)({
                    planType: ev?.plan_type,
                    connectorId: ef.connector.connector_id,
                    disableExposureLog: !0,
                    statsigClient: e_
                }), eu[29] = ef.connector.connector_id, eu[30] = ev?.plan_type, eu[31] = eX, eu[32] = e_, eu[33] = H) : H = eu[33];
                let e$ = H,
                    eZ = eY || e$;
                eu[34] !== ef.connector.connector_id || eu[35] !== ep || eu[36] !== ew || eu[37] !== eQ || eu[38] !== eV || eu[39] !== eh || eu[40] !== eH ? (Y = {
                    kind: "connector-auth-elicitation",
                    conversationId: ep,
                    requestId: eh
                }, J = eQ(ef.connector.connector_id, Y), $ = !eH && (ew || eV(ef.connector.connector_id, Y)), eu[34] = ef.connector.connector_id, eu[35] = ep, eu[36] = ew, eu[37] = eQ, eu[38] = eV, eu[39] = eh, eu[40] = eH, eu[41] = J, eu[42] = Y, eu[43] = $) : (J = eu[41], Y = eu[42], $ = eu[43]);
                let e1 = $,
                    e0 = U.reconnect;
                e1 ? e0 = U.continue : eX ? e0 = U.connect : eJ && (e0 = U.updateAccess), eu[44] !== ef.connector.connector_id || eu[45] !== eD || eu[46] !== ep || eu[47] !== eg || eu[48] !== ey || eu[49] !== eh || eu[50] !== Y || eu[51] !== em || eu[52] !== eI ? (Z = e => {
                    eE.current || (eE.current = !0, "decline" === e && eD({
                        appId: ef.connector.connector_id,
                        resumeTarget: Y
                    }), (0, g.b)(em, eg).replyWithMcpServerElicitationResponse(ep, eh, (0, s.b)(e)).then(() => {
                        eD({
                            appId: ef.connector.connector_id,
                            resumeTarget: Y
                        })
                    }).catch(() => {
                        eE.current = !1, eI.danger(ey.formatMessage({
                            id: "composer.connectorAuth.responseError",
                            defaultMessage: "Could not submit your response. Please try again",
                            description: "Toast shown when accepting or declining a connector authentication request fails and the user can retry"
                        }), {
                            errorAnalytics: {
                                toastId: "composer.connectorAuth.responseError"
                            }
                        })
                    }))
                }, eu[44] = ef.connector.connector_id, eu[45] = eD, eu[46] = ep, eu[47] = eg, eu[48] = ey, eu[49] = eh, eu[50] = Y, eu[51] = em, eu[52] = eI, eu[53] = Z) : Z = eu[53];
                let e2 = Z;
                eu[54] !== e2 ? (ee = () => {
                    e2("decline")
                }, eu[54] = e2, eu[55] = ee) : ee = eu[55];
                let e3 = ee;
                eu[56] !== ef.connector.connector_id || eu[57] !== ef.connector.install_url || eu[58] !== ef.connector.link_id || eu[59] !== ef.connector.requested_scopes || eu[60] !== ef.url || eu[61] !== eK || eu[62] !== eP || eu[63] !== eW || eu[64] !== K || eu[65] !== eF || eu[66] !== eL || eu[67] !== eG || eu[68] !== ey || eu[69] !== eO || eu[70] !== ez || eu[71] !== eb || eu[72] !== e2 || eu[73] !== eH || eu[74] !== Y || eu[75] !== em || eu[76] !== eY || eu[77] !== e$ || eu[78] !== eZ || eu[79] !== eI ? (et = async () => {
                    eH ? ex(!0) : eZ && eO || (eC(!0), await (async () => {
                        if (eZ && null != ez) {
                            let e = {
                                scope: em,
                                appId: ef.connector.connector_id,
                                browserAccountId: (0, x.c)(em) ?? void 0,
                                hostId: eP,
                                queryClient: eb
                            };
                            if ((await (eY ? (0, _.a)({
                                    ...e,
                                    connectors: K
                                }) : (0, I.a)(e))).length > 0) return void await eL(ez, {
                                forceInApp: !0,
                                googleOAuthBundlePrepared: eY,
                                microsoftOAuthBundlePrepared: e$
                            })
                        }
                        let e = {
                                id: ef.connector.connector_id,
                                installUrl: ez?.installUrl ?? ef.connector.install_url,
                                name: eW
                            },
                            t = !1;
                        switch ((await (0, h.s)({
                                scope: em,
                                appConnectOptions: {
                                    connectorId: ef.connector.connector_id,
                                    oauthReferrer: "conversation_auth"
                                },
                                app: e,
                                authReason: eK,
                                fallbackUrl: ef.url,
                                linkId: ef.connector.link_id,
                                onOAuthStarted: (n, o) => {
                                    t = !0, eF({
                                        app: e,
                                        oauthFlowCorrelationId: o?.oauthFlowCorrelationId,
                                        redirectUrl: n,
                                        resumeTarget: Y
                                    })
                                },
                                openInBrowser: e => {
                                    t ? (0, E.f)({
                                        disposition: "current-tab",
                                        href: e,
                                        initiator: "open_in_browser_bridge",
                                        openTarget: "external-browser"
                                    }) : eG(e)
                                },
                                queryClient: eb,
                                requestedScopes: ef.connector.requested_scopes
                            })).kind) {
                            case "requires-mfa":
                            case "requires-connection-form":
                                return void ex(!0);
                            case "connected-directly":
                                return void e2("accept");
                            case "oauth-started":
                                eS(!0);
                                return;
                            case "browser-fallback":
                                return void eS(!0);
                            case "failed":
                                return void eI.danger(ey.formatMessage({
                                    id: "composer.connectorAuth.startError",
                                    defaultMessage: "Could not start connector authentication",
                                    description: "Toast shown when a connector auth elicitation cannot start authentication"
                                }), {
                                    errorAnalytics: {
                                        toastId: "composer.connectorAuth.startError"
                                    }
                                })
                        }
                    })().finally(() => {
                        eC(!1)
                    }))
                }, eu[56] = ef.connector.connector_id, eu[57] = ef.connector.install_url, eu[58] = ef.connector.link_id, eu[59] = ef.connector.requested_scopes, eu[60] = ef.url, eu[61] = eK, eu[62] = eP, eu[63] = eW, eu[64] = K, eu[65] = eF, eu[66] = eL, eu[67] = eG, eu[68] = ey, eu[69] = eO, eu[70] = ez, eu[71] = eb, eu[72] = e2, eu[73] = eH, eu[74] = Y, eu[75] = em, eu[76] = eY, eu[77] = e$, eu[78] = eZ, eu[79] = eI, eu[80] = et) : et = eu[80];
                let e5 = et;
                eu[81] !== e5 || eu[82] !== e2 || eu[83] !== e1 ? (en = () => {
                    e1 ? e2("accept") : e5()
                }, eu[81] = e5, eu[82] = e2, eu[83] = e1, eu[84] = en) : en = eu[84];
                let e4 = en;
                if (null != ef.connector.connection_consent) return null;
                if (eX) {
                    let e;
                    eu[87] !== eW ? (e = (0, o.jsx)(p.a, {
                        ...U.missingConnectionDescription,
                        values: {
                            connectorName: eW
                        }
                    }), eu[87] = eW, eu[88] = e) : e = eu[88], eo = e
                } else if (eJ) {
                    let e;
                    eu[89] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(p.a, {
                        ...U.missingScopesDescription
                    }), eu[89] = e) : e = eu[89], eo = e
                } else {
                    let e;
                    eu[90] !== eW ? (e = (0, o.jsx)(p.a, {
                        ...U.reconnectDescription,
                        values: {
                            connectorName: eW
                        }
                    }), eu[90] = eW, eu[91] = e) : e = eu[91], eo = e
                }
                let e7 = eB?.iconUrl,
                    e6 = eB?.iconUrlDark;
                eu[92] === Symbol.for("react.memo_cache_sentinel") ? (ei = (0, o.jsx)(P.a, {
                    className: "text-secondary",
                    "aria-hidden": !1,
                    asset: D.a
                }), eu[92] = ei) : ei = eu[92], eu[93] !== ef.connector.connector_id || eu[94] !== eW || eu[95] !== e7 || eu[96] !== e6 ? (ea = (0, o.jsx)(C.a, {
                    alt: eW,
                    className: "icon-md rounded-sm object-contain",
                    knownAppId: ef.connector.connector_id,
                    logoUrl: e7,
                    logoDarkUrl: e6,
                    fallback: ei
                }), eu[93] = ef.connector.connector_id, eu[94] = eW, eu[95] = e7, eu[96] = e6, eu[97] = ea) : ea = eu[97], eu[98] !== e0 ? (er = (0, o.jsx)(p.a, {
                    ...e0
                }), eu[98] = e0, eu[99] = er) : er = eu[99];
                let e8 = ek || J || eZ && eO;
                return eu[100] !== eW || eu[101] !== eo || eu[102] !== e3 || eu[103] !== e4 || eu[104] !== ea || eu[105] !== er || eu[106] !== e8 ? (el = (0, o.jsx)(q.a, {
                    icon: ea,
                    title: eW,
                    description: eo,
                    primaryActionLabel: er,
                    isPrimaryActionLoading: e8,
                    onDecline: e3,
                    onSubmit: e4
                }), eu[100] = eW, eu[101] = eo, eu[102] = e3, eu[103] = e4, eu[104] = ea, eu[105] = er, eu[106] = e8, eu[107] = el) : el = eu[107], eu[108] !== ef.connector.connector_id || eu[109] !== ef.connector.link_id || eu[110] !== eK || eu[111] !== eP || eu[112] !== ej || eu[113] !== e2 || eu[114] !== eA ? (es = eA ? (0, o.jsx)(f.b, {
                    oauthReferrer: "conversation_auth",
                    connectorId: ef.connector.connector_id,
                    connectorAuth: {
                        authReason: eK,
                        linkId: ef.connector.link_id
                    },
                    hostId: eP,
                    onConnected: () => {
                        e2("accept"), ej().catch(() => {
                            N.a.warning("Failed to refresh apps after connection", {
                                safe: {
                                    connectorId: ef.connector.connector_id
                                }
                            })
                        })
                    },
                    onOpenChange: e => {
                        e || ex(!1)
                    }
                }) : null, eu[108] = ef.connector.connector_id, eu[109] = ef.connector.link_id, eu[110] = eK, eu[111] = eP, eu[112] = ej, eu[113] = e2, eu[114] = eA, eu[115] = es) : es = eu[115], eu[116] !== eq || eu[117] !== eU || eu[118] !== eP || eu[119] !== eF || eu[120] !== e2 || eu[121] !== Y || eu[122] !== eZ ? (ec = eZ ? (0, o.jsx)(O.a, {
                    oauthReferrer: "conversation_auth",
                    app: eU,
                    hostId: eP,
                    onConnected: () => {
                        e2("accept")
                    },
                    onExternalConnectStarted: () => {
                        eS(!0)
                    },
                    getOAuthResumeContext: () => ({
                        resumeTarget: Y
                    }),
                    onOAuthStarted: e => {
                        eF({
                            ...e
                        }), eS(!0)
                    },
                    onOpenChange: e => {
                        e || eq()
                    }
                }) : null, eu[116] = eq, eu[117] = eU, eu[118] = eP, eu[119] = eF, eu[120] = e2, eu[121] = Y, eu[122] = eZ, eu[123] = ec) : ec = eu[123], eu[124] !== el || eu[125] !== es || eu[126] !== ec ? (ed = (0, o.jsxs)(o.Fragment, {
                    children: [el, es, ec]
                }), eu[124] = el, eu[125] = es, eu[126] = ec, eu[127] = ed) : ed = eu[127], ed
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
            r = n("BolX"),
            l = n("d0tz"),
            s = n("I3F6"),
            c = n("Haiv"),
            d = n("zd8w"),
            u = n("Qgfj"),
            p = n("Wf1j"),
            g = n("oyxz"),
            h = n("Dgwo"),
            f = n("tl5a"),
            m = n("yGJ5"),
            y = n("NcQ7"),
            b = n("IBgA"),
            _ = n("oxjR"),
            v = n("hOO0"),
            I = n("BQbE"),
            w = n("biqr"),
            S = n("PYah"),
            A = n("yxN2"),
            x = n("OiCI"),
            k = n("Cslg"),
            C = n("FvYa"),
            E = n("HOLv"),
            P = n("Bbed"),
            M = n("SGsN"),
            j = n("rO8L"),
            O = n("an0a"),
            T = n("h03E"),
            R = n("Pdbe"),
            N = n("a0aG"),
            q = n("aVTW"),
            D = n("loz7"),
            U = n("ntKy"),
            F = n("Hl7m"),
            L = n("OWtl"),
            G = n("odxv");

        function V(e) {
            let t, n, a, l, s, d, u, p, h, f, m = (0, i.c)(25),
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
                description: "Title after installing a plugin that offers a setup conversation",
                values: {
                    pluginName: _
                }
            }), m[7] = _, m[8] = l) : l = m[8], m[9] !== _ ? (s = (0, o.jsx)(g.a, {
                id: "plugins.onboarding.description",
                defaultMessage: "Set up {pluginName} to start using it in ChatGPT",
                description: "Invites the user to set up their newly installed plugin in a conversation",
                values: {
                    pluginName: _
                }
            }), m[9] = _, m[10] = s) : s = m[10], m[11] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, o.jsx)(g.a, {
                id: "plugins.onboarding.inline.setup",
                defaultMessage: "Setup",
                description: "Start optional setup for the newly installed plugin in this conversation"
            }), u = (0, o.jsx)(g.a, {
                id: "plugins.onboarding.inline.skip",
                defaultMessage: "Skip",
                description: "Skip optional plugin setup and resume the conversation's original task"
            }), m[11] = d, m[12] = u) : (d = m[11], u = m[12]);
            let v = "setup" === y.submittingAction,
                I = "skip" === y.submittingAction;
            return m[13] !== y || m[14] !== b ? (p = () => void(0, G.b)(b, y, "skip"), h = () => void(0, G.b)(b, y, "setup"), m[13] = y, m[14] = b, m[15] = p, m[16] = h) : (p = m[15], h = m[16]), m[17] !== p || m[18] !== h || m[19] !== a || m[20] !== l || m[21] !== s || m[22] !== v || m[23] !== I ? (f = (0, o.jsx)(F.a, {
                icon: a,
                title: l,
                description: s,
                primaryActionLabel: d,
                secondaryActionLabel: u,
                isPrimaryActionLoading: v,
                isSecondaryActionLoading: I,
                onDecline: p,
                onSubmit: h
            }), m[17] = p, m[18] = h, m[19] = a, m[20] = l, m[21] = s, m[22] = v, m[23] = I, m[24] = f) : f = m[24], f
        }
        var Q = n("uzkw"),
            z = n("ugfi"),
            B = n("EEop"),
            W = n("cLdu"),
            K = n("ueue"),
            X = n("tSEg"),
            H = n("ecE5"),
            J = n("nvO1"),
            Y = n("WFY2"),
            $ = n("GTV7");
        let Z = (0, P.a)(() => Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(642350)]).then(n.bind(n, "cUuO")).then(e => e.TeamAddPluginsModal));
        async function ee(e, t, n, o) {
            let i = new Set(Array.from(await (0, S.a)(e, t, n, "shared"), v.a));
            return o.every(e => e.some(e => i.has((0, v.a)(e))))
        }
        let et = (0, u.f)({
            install: {
                id: "composer.toolSuggestion.install",
                defaultMessage: "Install",
                description: "Primary action label for starting an MCP tool suggestion install flow"
            },
            enable: {
                id: "composer.toolSuggestion.enable",
                defaultMessage: "Enable",
                description: "Primary action label for enabling an MCP tool suggestion target"
            },
            continue: {
                id: "composer.toolSuggestion.continue",
                defaultMessage: "Continue",
                description: "Tooltip label for re-checking whether an MCP tool suggestion target is ready"
            },
            pluginNotReady: {
                id: "composer.toolSuggestion.plugin.notReady",
                defaultMessage: "{toolName} is not ready yet. Finish setting it up, then continue",
                description: "Toast shown when the user asks to continue but the suggested plugin is still not ready"
            },
            missingPlugin: {
                id: "composer.toolSuggestion.plugin.missing",
                defaultMessage: "Could not load this plugin right now",
                description: "Toast shown when plugin metadata cannot be loaded for an MCP tool suggestion panel"
            },
            genericLoadError: {
                id: "composer.toolSuggestion.loadError",
                defaultMessage: "Could not refresh this tool suggestion",
                description: "Toast shown when the tool suggestion panel cannot refresh its backing data"
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
            }) : (0, o.jsx)(V, {
                onboarding: l
            }), a[4] = l, a[5] = e, a[6] = n) : n = a[6], n
        }

        function eo(e) {
            let t, n, u, S, P, G, V, en, eo, el, es, ec, ed, eu, ep, eg, eh, ef, em, ey, eb, e_, ev, eI, ew, eS, eA, ex, ek, eC, eE, eP, eM, ej, eO, eT, eR, eN, eq, eD, eU, eF, eL, eG, eV, eQ, ez, eB, eW, eK, eX, eH, eJ = (0, i.c)(254),
                {
                    conversationId: eY,
                    hostId: e$,
                    requestId: eZ,
                    suggestion: e1
                } = e,
                e0 = (0, r.y)(L.a),
                e2 = (0, r.z)(x.b),
                e3 = (0, r.z)(k.k),
                e5 = (0, r.z)(X.j);
            eJ[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Set, eJ[0] = t) : t = eJ[0];
            let e4 = (0, d.useRef)(t),
                e7 = (0, p.a)(),
                e6 = (0, r.z)(M.f),
                e8 = (0, a.c)(),
                [e9, te] = (0, d.useState)(null),
                [tt, tn] = (0, d.useState)(!1),
                [to, ti] = (0, d.useState)(null),
                [ta, tr] = (0, d.useState)(null),
                [tl, ts] = (0, d.useState)(null),
                tc = (0, O.c)(eY);
            eJ[1] !== e$ ? (n = (0, W.i)(e$), eJ[1] = e$, eJ[2] = n) : n = eJ[2];
            let td = n;
            eJ[3] !== eY || eJ[4] !== e$ ? (u = {
                hostId: e$,
                threadId: eY
            }, eJ[3] = eY, eJ[4] = e$, eJ[5] = u) : u = eJ[5];
            let tu = (0, r.x)(f.bc, u),
                tp = "install" === e1.suggest_type && e$ === l.Vb && tu?.threadAccess === "shared",
                tg = "install" === e1.suggest_type && e$ === l.Vb && null == tu,
                th = td || tc.hostId !== e$ || null == tc.cwd ? void 0 : [tc.cwd],
                tf = !td;
            eJ[6] !== e$ || eJ[7] !== tf ? (S = {
                hostId: e$,
                enabled: tf
            }, eJ[6] = e$, eJ[7] = tf, eJ[8] = S) : S = eJ[8];
            let tm = (0, j.a)(S),
                ty = !td && "plugin" === e1.tool_type && "enable" === e1.suggest_type,
                tb = !ty && "plugin" === e1.tool_type && (td || tm),
                t_ = (0, d.useRef)(!1);
            eJ[9] !== eY || eJ[10] !== e$ || eJ[11] !== eZ || eJ[12] !== e0 ? (P = e => {
                t_.current || (t_.current = !0, (0, h.b)(e0, e$).replyWithMcpServerElicitationResponse(eY, eZ, (0, s.b)(e)).catch(() => {
                    t_.current = !1
                }))
            }, eJ[9] = eY, eJ[10] = e$, eJ[11] = eZ, eJ[12] = e0, eJ[13] = P) : P = eJ[13];
            let tv = P,
                tI = "connector" === e1.tool_type;
            eJ[14] !== e$ || eJ[15] !== tI ? (G = {
                enabled: tI,
                hostId: e$
            }, eJ[14] = e$, eJ[15] = tI, eJ[16] = G) : G = eJ[16];
            let {
                data: tw,
                refetch: tS
            } = (0, w.m)(G);
            eJ[17] !== tw ? (V = void 0 === tw ? [] : tw, eJ[17] = tw, eJ[18] = V) : V = eJ[18];
            let tA = V;
            eJ[19] !== e1.tool_id || eJ[20] !== e1.tool_type ? (en = "connector" === e1.tool_type ? [e1.tool_id] : [], eJ[19] = e1.tool_id, eJ[20] = e1.tool_type, eJ[21] = en) : en = eJ[21], eJ[22] !== e$ || eJ[23] !== en ? (eo = {
                appIds: en,
                hostId: e$
            }, eJ[22] = e$, eJ[23] = en, eJ[24] = eo) : eo = eJ[24];
            let {
                data: tx
            } = (0, I.c)(eo);
            eJ[25] !== tx ? (el = void 0 === tx ? [] : tx, eJ[25] = tx, eJ[26] = el) : el = eJ[26];
            let tk = el,
                {
                    data: tC,
                    isLoading: tE,
                    refetch: tP
                } = (0, W.l)({
                    enabled: "plugin" === e1.tool_type && ty && tm,
                    hostId: e$,
                    roots: th,
                    resolveActiveRoots: ty
                });
            eJ[27] !== tC ? (es = tC ?? [], eJ[27] = tC, eJ[28] = es) : es = eJ[28];
            let tM = es;
            eJ[29] !== eZ ? (ec = () => {
                ti(eZ)
            }, eJ[29] = eZ, eJ[30] = ec) : ec = eJ[30], eJ[31] !== e$ || eJ[32] !== ec ? (ed = {
                hostId: e$,
                oauthReferrer: "tool_suggestion",
                onExternalConnectStarted: ec
            }, eJ[31] = e$, eJ[32] = ec, eJ[33] = ed) : ed = eJ[33];
            let {
                clearConnectingApp: tj,
                connectingApp: tO,
                handleAppConnectOAuthStarted: tT,
                handleConnectApp: tR,
                handleOpenAppUrl: tN,
                isAppConnectPending: tq
            } = (0, A.a)(ed), {
                clearPendingAppConnect: tD,
                getPendingTeamElicitationConnect: tU,
                isAppConnectCallbackClaimed: tF
            } = (0, m.g)();
            eJ[34] !== eY || eJ[35] !== tU || eJ[36] !== e$ || eJ[37] !== eZ ? (eu = tU(e$, eY, eZ), eJ[34] = eY, eJ[35] = tU, eJ[36] = e$, eJ[37] = eZ, eJ[38] = eu) : eu = eJ[38];
            let tL = eu,
                tG = tL?.resumeTarget.kind === "service-account" ? tL.resumeTarget : null,
                tV = tG?.pendingElicitationReply?.oauth,
                tQ = tl === eZ || null != tL && (tL.claimed || tV?.kind === "connected") && tV?.kind !== "failed" && tL.oauthState !== ta,
                tz = tV?.kind === "connected" ? tL?.oauthState : null,
                tB = tG?.accountId,
                tW = tG?.pendingElicitationReply?.actorUserId;
            eJ[39] !== eY || eJ[40] !== tl || eJ[41] !== e$ || eJ[42] !== eZ || eJ[43] !== e0 ? (ep = () => {
                if (tl === eZ) return e0.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(f.E, eY) === e$ && t(f.ub, eY)?.some(e => e.id === eZ) && (t_.current = !1, ts(null))
                })
            }, eg = [eY, tl, e$, eZ, e0], eJ[39] = eY, eJ[40] = tl, eJ[41] = e$, eJ[42] = eZ, eJ[43] = e0, eJ[44] = ep, eJ[45] = eg) : (ep = eJ[44], eg = eJ[45]), (0, d.useEffect)(ep, eg), eJ[46] !== e$ ? (eh = {
                hostId: e$
            }, eJ[46] = e$, eJ[47] = eh) : eh = eJ[47];
            let {
                setAppEnabled: tK,
                updatingAppId: tX
            } = (0, b.a)(eh);
            eJ[48] !== e$ ? (ef = {
                hostId: e$
            }, eJ[48] = e$, eJ[49] = ef) : ef = eJ[49];
            let {
                pendingPluginId: tH,
                setPluginEnabled: tJ
            } = (0, z.d)(ef), tY = "plugin" === e1.tool_type ? e1 : null, {
                installPlugin: t$,
                status: tZ
            } = (0, U.e)(), t1 = (0, r.z)(D.o), t0 = "connector" === e1.tool_type ? e1 : null;
            eJ[50] !== t0 ? (em = t0?.suggest_type === "install" && null != (0, y.a)(t0.tool_id), eJ[50] = t0, eJ[51] = em) : em = eJ[51];
            let t2 = em,
                t3 = null == t0 ? null : {
                    kind: "tool-suggestion-elicitation",
                    conversationId: eY,
                    requestId: eZ,
                    response: (0, s.b)("accept")
                },
                t5 = null == tY ? null : tY.remote_plugin_id ?? (td ? tY.tool_id : null),
                t4 = (0, B.g)({
                    hostId: e$,
                    pluginId: td ? t5 : tY?.tool_id ?? null,
                    remotePluginId: t5,
                    roots: th
                });
            eJ[52] !== tb ? (ey = {
                enabled: tb
            }, eJ[52] = tb, eJ[53] = ey) : ey = eJ[53];
            let {
                data: t7,
                isLoading: t6,
                refetch: t8
            } = (0, r.x)(B.l, t4, ey), t9 = null == t0 ? null : tA.find(e => e.id === t0.tool_id) ?? null;
            eJ[54] !== tk || eJ[55] !== t0 ? (eb = null == t0 ? null : tk.find(e => e.id === t0.tool_id) ?? null, eJ[54] = tk, eJ[55] = t0, eJ[56] = eb) : eb = eJ[56];
            let ne = eb,
                nt = null == tY ? null : tM.find(e => e.plugin.id === tY.tool_id) ?? null;
            ty || (nt = tb && null != t7 ? (0, K.b)(t7) : null);
            let nn = er({
                    app: t9,
                    plugin: nt,
                    suggestion: e1
                }),
                no = tO?.id === e1.tool_id,
                ni = null != t3 && tq(e1.tool_id, t3),
                na = null != t3 && tF(e1.tool_id, t3),
                nr = (0, U.a)(tZ, {
                    hostId: e$,
                    pluginId: tZ?.phase === "loading" ? t5 ?? e1.tool_id : nt?.plugin.id ?? e1.tool_id
                }),
                nl = to === eZ || ni,
                ns = "plugin" === e1.tool_type && "install" === e1.suggest_type && "closed" !== t1.kind && t1.hostId === e$ && t1.pendingElicitationReply?.conversationId === eY && t1.pendingElicitationReply?.requestId === eZ,
                nc = td && "plugin" === e1.tool_type && "install" === e1.suggest_type,
                nd = tH === (nt?.plugin.id ?? e1.tool_id);
            "connector" === e1.tool_type ? nd = "install" === e1.suggest_type ? no || na : tX === e1.tool_id : "install" === e1.suggest_type && (nd = nr || ns);
            let nu = !tp && (na || !nc && !nd && (nn || nl)),
                np = tY?.suggest_type !== "install" || nu || e5 ? null : t5 ?? tY.tool_id;
            eJ[57] !== e2 || eJ[58] !== eY || eJ[59] !== e$ || eJ[60] !== t6 || eJ[61] !== eZ || eJ[62] !== np || eJ[63] !== e3 ? (e_ = null == np || t6 ? void 0 : JSON.stringify([e2, e3, e$, eY, eZ, np]), eJ[57] = e2, eJ[58] = eY, eJ[59] = e$, eJ[60] = t6, eJ[61] = eZ, eJ[62] = np, eJ[63] = e3, eJ[64] = e_) : e_ = eJ[64];
            let ng = e_;
            eJ[65] !== e2 || eJ[66] !== eY || eJ[67] !== t7 || eJ[68] !== np || eJ[69] !== e3 ? (ev = e => {
                if (null == np || null == e2 || null == e3 || t_.current) return;
                let t = null == t7 ? null : (0, q.a)(t7, void 0, null);
                (0, Q.a)({
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
            }, eJ[65] = e2, eJ[66] = eY, eJ[67] = t7, eJ[68] = np, eJ[69] = e3, eJ[70] = ev) : ev = eJ[70];
            let nh = ev,
                nf = tg || null != tY && t6 || tt || tQ || nd || (td || ty) && "plugin" === e1.tool_type && "enable" === e1.suggest_type && tE,
                nm = et.enable;
            nu ? nm = et.continue : "install" === e1.suggest_type && (nm = et.install);
            let ny = null == nt ? ne?.name ?? t9?.name ?? e1.tool_name : (0, c.a)(nt),
                nb = "plugin" === e1.tool_type ? nt?.description : ne?.description ?? t9?.description,
                n_ = t0?.tool_id,
                nv = ne?.iconUrl,
                nI = ne?.iconUrlDark;
            eJ[71] === Symbol.for("react.memo_cache_sentinel") ? (eI = (0, o.jsx)(E.a, {
                className: "text-secondary",
                "aria-hidden": !1,
                asset: $.a
            }), eJ[71] = eI) : eI = eJ[71], eJ[72] !== ny || eJ[73] !== n_ || eJ[74] !== nv || eJ[75] !== nI ? (ew = (0, o.jsx)(C.a, {
                alt: ny,
                className: "icon-md rounded-sm object-contain",
                knownAppId: n_,
                logoUrl: nv,
                logoDarkUrl: nI,
                fallback: eI
            }), eJ[72] = ny, eJ[73] = n_, eJ[74] = nv, eJ[75] = nI, eJ[76] = ew) : ew = eJ[76];
            let nw = ew;
            if ("plugin" === e1.tool_type) {
                let e, t, n = nt?.logoDarkPath ?? null,
                    i = nt?.logoPath ?? null;
                eJ[77] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(T.a, {
                    className: "icon-md text-secondary"
                }), eJ[77] = e) : e = eJ[77], eJ[78] !== e1.tool_name || eJ[79] !== n || eJ[80] !== i ? (t = (0, o.jsx)(C.a, {
                    alt: e1.tool_name,
                    className: "icon-md rounded-sm object-contain",
                    logoDarkUrl: n,
                    logoUrl: i,
                    fallback: e
                }), eJ[78] = e1.tool_name, eJ[79] = n, eJ[80] = i, eJ[81] = t) : t = eJ[81], nw = t
            }
            eJ[82] !== nh || eJ[83] !== tv ? (eS = () => {
                nh("dismiss"), tv("decline")
            }, eJ[82] = nh, eJ[83] = tv, eJ[84] = eS) : eS = eJ[84];
            let nS = eS;
            eJ[85] !== t0 || eJ[86] !== tR || eJ[87] !== tN || eJ[88] !== t2 || eJ[89] !== t9 || eJ[90] !== eZ ? (eA = async () => {
                (t2 || ti(eZ), null != t9) ? await tR(t9): null != t0 && (tN(t0.install_url), ti(eZ))
            }, eJ[85] = t0, eJ[86] = tR, eJ[87] = tN, eJ[88] = t2, eJ[89] = t9, eJ[90] = eZ, eJ[91] = eA) : eA = eJ[91];
            let nA = eA;
            eJ[92] !== eY || eJ[93] !== e$ || eJ[94] !== td || eJ[95] !== t$ || eJ[96] !== e7 || eJ[97] !== nt || eJ[98] !== tY?.suggestion_id || eJ[99] !== t8 || eJ[100] !== t5 || eJ[101] !== eZ || eJ[102] !== tb || eJ[103] !== e1.tool_name || eJ[104] !== e6 ? (ex = async () => {
                let e = nt;
                if (td && null != t5) e = {
                    displayName: e1.tool_name,
                    remoteMarketplaceName: l.Zc,
                    remotePluginId: t5
                };
                else if (null == e && tb) {
                    tn(!0);
                    let {
                        data: t
                    } = await t8().finally(() => {
                        tn(!1)
                    });
                    e = null == t ? null : (0, K.b)(t)
                }
                null == e ? e6.danger(e7.formatMessage(et.missingPlugin), {
                    errorAnalytics: {
                        toastId: "inlineToolSuggestionRequestCard.handleInstallPlugin.missingPlugin"
                    }
                }) : t$(e, {
                    elicitationOwnsConnectorRefresh: !0,
                    hostId: e$,
                    marketplaceAnalytics: {
                        ...N.b.composer,
                        suggestionId: tY?.suggestion_id
                    },
                    origin: "in_conversation_elicitation",
                    pendingElicitationReply: {
                        conversationId: eY,
                        requestId: eZ,
                        response: (0, s.b)("accept")
                    }
                })
            }, eJ[92] = eY, eJ[93] = e$, eJ[94] = td, eJ[95] = t$, eJ[96] = e7, eJ[97] = nt, eJ[98] = tY?.suggestion_id, eJ[99] = t8, eJ[100] = t5, eJ[101] = eZ, eJ[102] = tb, eJ[103] = e1.tool_name, eJ[104] = e6, eJ[105] = ex) : ex = eJ[105];
            let nx = ex;
            eJ[106] !== eZ ? (ek = async e => {
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
            }, eJ[106] = eZ, eJ[107] = ek) : ek = eJ[107];
            let nk = ek;
            eJ[108] !== nk || eJ[109] !== tK ? (eC = e => {
                let {
                    appId: t,
                    enabled: n
                } = e;
                return nk({
                    enabled: n,
                    setEnabled: () => tK({
                        appId: t,
                        enabled: n
                    })
                })
            }, eJ[108] = nk, eJ[109] = tK, eJ[110] = eC) : eC = eJ[110];
            let nC = eC;
            eJ[111] !== nk || eJ[112] !== td || eJ[113] !== nt || eJ[114] !== tJ ? (eE = e => {
                let {
                    pluginDisplayName: t,
                    pluginId: n,
                    enabled: o
                } = e;
                return nk({
                    enabled: o,
                    setEnabled: () => tJ({
                        pluginDisplayName: t,
                        pluginId: n,
                        plugin: td ? nt?.plugin : void 0,
                        enabled: o
                    })
                })
            }, eJ[111] = nk, eJ[112] = td, eJ[113] = nt, eJ[114] = tJ, eJ[115] = eE) : eE = eJ[115];
            let nE = eE;
            eJ[116] !== e7 || eJ[117] !== nc || eJ[118] !== ty || eJ[119] !== ns || eJ[120] !== tP || eJ[121] !== t8 || eJ[122] !== tv || eJ[123] !== e1 || eJ[124] !== e6 ? (eP = async () => {
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
                            e = null == t ? null : (0, K.b)(t)
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
            }, eJ[116] = e7, eJ[117] = nc, eJ[118] = ty, eJ[119] = ns, eJ[120] = tP, eJ[121] = t8, eJ[122] = tv, eJ[123] = e1, eJ[124] = e6, eJ[125] = eP) : eP = eJ[125];
            let nP = eP;
            eJ[126] !== e7 || eJ[127] !== e6 ? (eM = e => {
                e6.danger(e ?? e7.formatMessage(et.genericLoadError), {
                    errorAnalytics: {
                        toastId: "inlineToolSuggestionRequestCard.teamInstall"
                    }
                })
            }, eJ[126] = e7, eJ[127] = e6, eJ[128] = eM) : eM = eJ[128];
            let nM = eM;
            eJ[129] !== tD || eJ[130] !== eY || eJ[131] !== e$ || eJ[132] !== eZ || eJ[133] !== e0 || eJ[134] !== nM || eJ[135] !== tL?.oauthState ? (ej = async (e, t) => {
                let n = void 0 === e ? (0, s.b)("accept") : e,
                    o = t ?? tL?.oauthState;
                if (t_.current) return !0;
                t_.current = !0;
                try {
                    if (await (0, h.b)(e0, e$).replyWithMcpServerElicitationResponse(eY, eZ, n), await (0, m.i)(e0, e$, eY, eZ)) return null != o && (ts(eZ), tD({
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
                return t_.current = !1, nM(), !1
            }, eJ[129] = tD, eJ[130] = eY, eJ[131] = e$, eJ[132] = eZ, eJ[133] = e0, eJ[134] = nM, eJ[135] = tL?.oauthState, eJ[136] = ej) : ej = eJ[136];
            let nj = ej;
            eJ[137] !== eY || eJ[138] !== ta || eJ[139] !== e$ || eJ[140] !== e8 || eJ[141] !== eZ || eJ[142] !== e0 || eJ[143] !== nj || eJ[144] !== nM || eJ[145] !== tL ? (eO = async (e, t) => {
                let n = tL?.resumeTarget,
                    o = n?.kind === "service-account" ? n.pendingElicitationReply : void 0,
                    i = o?.oauth;
                if (tL?.oauthState !== e || n?.kind !== "service-account" || null == o || i?.kind !== "connected" || ta === e) return;
                let a = () => null != o.actorUserId && e0.get(k.k) === o.actorUserId && e0.get(k.f) === n.accountId && e0.get(f.E, eY) === e$ && e0.get(f.ub, eY)?.some(e => e.id === eZ) === !0;
                if (a()) {
                    if ((0, v.a)(tL.appId) !== (0, v.a)(i.connectorId)) {
                        tr(e), nM();
                        return
                    }
                    try {
                        await Promise.all([e8.invalidateQueries({
                            queryKey: ["service-account-plugins", n.accountId, n.serviceAccountId]
                        }), (0, J.e)(e0, n.accountId)]);
                        let r = await ee(e0, e$, eY, [
                            [i.connectorId]
                        ]);
                        if (t() || !a()) return;
                        if (!r) {
                            tr(e), nM();
                            return
                        }
                        await nj(o.response, e) || t() || tr(e)
                    } catch (n) {
                        t() || (Y.a.error("Failed to resume Team app connect elicitation", {
                            safe: {
                                connectorId: i.connectorId
                            },
                            sensitive: {
                                error: n
                            }
                        }), tr(e), nM())
                    }
                }
            }, eJ[137] = eY, eJ[138] = ta, eJ[139] = e$, eJ[140] = e8, eJ[141] = eZ, eJ[142] = e0, eJ[143] = nj, eJ[144] = nM, eJ[145] = tL, eJ[146] = eO) : eO = eJ[146];
            let nO = (0, d.useEffectEvent)(eO);
            eJ[147] !== tz || eJ[148] !== eY || eJ[149] !== e$ || eJ[150] !== eZ || eJ[151] !== nO || eJ[152] !== e0 || eJ[153] !== tB || eJ[154] !== tW ? (eT = () => {
                if (null == tz) return;
                let e = !1,
                    t = !1,
                    n = e0.watch(n => {
                        let {
                            get: o
                        } = n, i = o(f.E, eY), a = o(f.ub, eY), r = o(k.f), l = o(k.k);
                        !t && i === e$ && a?.some(e => e.id === eZ) && r === tB && l === tW && (t = !0, nO(tz, () => e))
                    });
                return () => {
                    e = !0, n()
                }
            }, eJ[147] = tz, eJ[148] = eY, eJ[149] = e$, eJ[150] = eZ, eJ[151] = nO, eJ[152] = e0, eJ[153] = tB, eJ[154] = tW, eJ[155] = eT) : eT = eJ[155], eJ[156] !== tz || eJ[157] !== eY || eJ[158] !== e$ || eJ[159] !== eZ || eJ[160] !== e0 || eJ[161] !== tB || eJ[162] !== tW ? (eR = [e0, e$, eY, eZ, tz, tB, tW], eJ[156] = tz, eJ[157] = eY, eJ[158] = e$, eJ[159] = eZ, eJ[160] = e0, eJ[161] = tB, eJ[162] = tW, eJ[163] = eR) : eR = eJ[163], (0, d.useEffect)(eT, eR), eJ[164] !== eY || eJ[165] !== e$ || eJ[166] !== e7 || eJ[167] !== e0 || eJ[168] !== nj || eJ[169] !== nM || eJ[170] !== e1.tool_name ? (eN = async e => {
                try {
                    if (await ee(e0, e$, eY, e)) return void await nj()
                } catch (e) {
                    Y.a.error("Failed to check Team setup", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                }
                nM(e7.formatMessage(et.pluginNotReady, {
                    toolName: e1.tool_name
                }))
            }, eJ[164] = eY, eJ[165] = e$, eJ[166] = e7, eJ[167] = e0, eJ[168] = nj, eJ[169] = nM, eJ[170] = e1.tool_name, eJ[171] = eN) : eN = eJ[171];
            let nT = eN;
            eJ[172] !== eY || eJ[173] !== e$ || eJ[174] !== e7 || eJ[175] !== ne || eJ[176] !== t5 || eJ[177] !== e0 || eJ[178] !== nj || eJ[179] !== nM || eJ[180] !== e1.tool_id || eJ[181] !== e1.tool_type ? (eq = async () => {
                try {
                    let e, t = await async function(e) {
                        let t = e.get(k.f);
                        return null == t ? null : null
                    }(e0);
                    if (null == t) return void nM();
                    if ("connector" === e1.tool_type) {
                        if (null == ne) return void nM();
                        e = {
                            kind: "connector",
                            connectorId: (0, v.a)(e1.tool_id),
                            app: ne
                        }
                    } else {
                        if (null == t5) return void nM(e7.formatMessage(et.missingPlugin));
                        e = {
                            kind: "plugin",
                            pluginId: t5
                        }
                    }
                    let n = {
                        ...t,
                        start: e
                    };
                    if ("connector" === e.kind && await ee(e0, e$, eY, [
                            [e.connectorId]
                        ]).catch(ei)) return void await nj();
                    te(n)
                } catch (e) {
                    Y.a.error("Failed to prepare Team setup", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), nM()
                }
            }, eJ[172] = eY, eJ[173] = e$, eJ[174] = e7, eJ[175] = ne, eJ[176] = t5, eJ[177] = e0, eJ[178] = nj, eJ[179] = nM, eJ[180] = e1.tool_id, eJ[181] = e1.tool_type, eJ[182] = eq) : eq = eJ[182];
            let nR = eq;
            eJ[183] !== nP || eJ[184] !== nA || eJ[185] !== nx || eJ[186] !== nC || eJ[187] !== nE || eJ[188] !== nR || eJ[189] !== e7 || eJ[190] !== tp || eJ[191] !== tg || eJ[192] !== t9 || eJ[193] !== nt || eJ[194] !== nh || eJ[195] !== nu || eJ[196] !== e1.suggest_type || eJ[197] !== e1.tool_type || eJ[198] !== e6 ? (eD = async () => {
                if (!tg) {
                    if (nh("click"), tp) {
                        tn(!0), await nR().finally(() => {
                            tn(!1)
                        });
                        return
                    }
                    if (nu) return void await nP();
                    if ("connector" === e1.tool_type) return "install" === e1.suggest_type ? void await nA() : null == t9 ? void await nP() : void await nC({
                        appId: t9.id,
                        enabled: !0
                    });
                    if ("install" === e1.suggest_type) return void await nx();
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
            }, eJ[183] = nP, eJ[184] = nA, eJ[185] = nx, eJ[186] = nC, eJ[187] = nE, eJ[188] = nR, eJ[189] = e7, eJ[190] = tp, eJ[191] = tg, eJ[192] = t9, eJ[193] = nt, eJ[194] = nh, eJ[195] = nu, eJ[196] = e1.suggest_type, eJ[197] = e1.tool_type, eJ[198] = e6, eJ[199] = eD) : eD = eJ[199];
            let nN = eD;
            eJ[200] !== e2 || eJ[201] !== ng || eJ[202] !== nh || eJ[203] !== e3 ? (eU = e => {
                if (!(e?.parentElement == null || null == ng || null == e2 || null == e3 || e4.current.has(ng))) return (0, R.b)(e.parentElement, e4.current, void 0, {
                    loggedPluginIds: e4.current,
                    onViewed: () => nh("viewed")
                })
            }, eJ[200] = e2, eJ[201] = ng, eJ[202] = nh, eJ[203] = e3, eJ[204] = eU) : eU = eJ[204];
            let nq = nu && nl;
            return eJ[205] !== e1 || eJ[206] !== ny || eJ[207] !== nq ? (eF = (0, o.jsx)(ea, {
                showContinueTitle: nq,
                suggestion: e1,
                title: ny
            }), eJ[205] = e1, eJ[206] = ny, eJ[207] = nq, eJ[208] = eF) : eF = eJ[208], eJ[209] !== tQ || eJ[210] !== nm ? (eL = tQ ? (0, o.jsx)(g.a, {
                id: "settings.mcp.appConnectModal.completingConnectionButton",
                defaultMessage: "Finishing connection…",
                description: "Primary button label shown while an app connection OAuth callback is still completing in the background"
            }) : (0, o.jsx)(g.a, {
                ...nm
            }), eJ[209] = tQ, eJ[210] = nm, eJ[211] = eL) : eL = eJ[211], eJ[212] !== nN ? (eG = () => {
                nN()
            }, eJ[212] = nN, eJ[213] = eG) : eG = eJ[213], eJ[214] !== nS || eJ[215] !== ng || eJ[216] !== nf || eJ[217] !== nb || eJ[218] !== nw || eJ[219] !== eU || eJ[220] !== eF || eJ[221] !== eL || eJ[222] !== eG ? (eV = (0, o.jsx)(F.a, {
                ref: eU,
                impressionId: ng,
                icon: nw,
                title: eF,
                description: nb,
                primaryActionLabel: eL,
                isPrimaryActionLoading: nf,
                onDecline: nS,
                onSubmit: eG
            }), eJ[214] = nS, eJ[215] = ng, eJ[216] = nf, eJ[217] = nb, eJ[218] = nw, eJ[219] = eU, eJ[220] = eF, eJ[221] = eL, eJ[222] = eG, eJ[223] = eV) : eV = eJ[223], eJ[224] !== nT || eJ[225] !== eY || eJ[226] !== e$ || eJ[227] !== eZ || eJ[228] !== e9 ? (eQ = null == e9 ? null : (0, o.jsx)(Z, {
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
            }), eJ[224] = nT, eJ[225] = eY, eJ[226] = e$, eJ[227] = eZ, eJ[228] = e9, eJ[229] = eQ) : eQ = eJ[229], eJ[230] !== tj ? (ez = e => {
                e || tj()
            }, eJ[230] = tj, eJ[231] = ez) : ez = eJ[231], eJ[232] !== e$ || eJ[233] !== t2 || eJ[234] !== e8 || eJ[235] !== tS || eJ[236] !== eZ ? (eB = async () => {
                t2 && ti(eZ), await (0, _.a)({
                    hostId: e$,
                    queryClient: e8,
                    refreshAppsList: async () => (await tS()).data ?? []
                })
            }, eJ[232] = e$, eJ[233] = t2, eJ[234] = e8, eJ[235] = tS, eJ[236] = eZ, eJ[237] = eB) : eB = eJ[237], eJ[238] !== eY || eJ[239] !== eZ ? (eW = () => ({
                resumeTarget: {
                    kind: "tool-suggestion-elicitation",
                    conversationId: eY,
                    requestId: eZ,
                    response: (0, s.b)("accept")
                }
            }), eJ[238] = eY, eJ[239] = eZ, eJ[240] = eW) : eW = eJ[240], eJ[241] !== tT ? (eK = e => {
                tT({
                    ...e
                })
            }, eJ[241] = tT, eJ[242] = eK) : eK = eJ[242], eJ[243] !== tO || eJ[244] !== e$ || eJ[245] !== ez || eJ[246] !== eB || eJ[247] !== eW || eJ[248] !== eK ? (eX = (0, o.jsx)(H.a, {
                oauthReferrer: "tool_suggestion",
                app: tO,
                hostId: e$,
                onOpenChange: ez,
                onConnected: eB,
                getOAuthResumeContext: eW,
                onOAuthStarted: eK
            }), eJ[243] = tO, eJ[244] = e$, eJ[245] = ez, eJ[246] = eB, eJ[247] = eW, eJ[248] = eK, eJ[249] = eX) : eX = eJ[249], eJ[250] !== eV || eJ[251] !== eQ || eJ[252] !== eX ? (eH = (0, o.jsxs)(o.Fragment, {
                children: [eV, eQ, eX]
            }), eJ[250] = eV, eJ[251] = eQ, eJ[252] = eX, eJ[253] = eH) : eH = eJ[253], eH
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
                        description: "Title prompting the user to continue an MCP connector suggestion after finishing connection",
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
                        description: "Title prompting the user to continue an MCP plugin suggestion after finishing installation",
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
        var o = n("d0tz"),
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
            h = n("MX6A"),
            f = n("svjy"),
            m = n("jhEa");
        async function y(e, t) {
            let n = t.pendingElicitationReply;
            if (null != n) try {
                await (0, l.b)(e, t.hostId).replyWithMcpServerElicitationResponse(n.conversationId, n.requestId, n.response)
            } catch {
                throw Error(e.get(f.a).formatMessage({
                    id: "plugins.onboarding.installCompletionFailed",
                    defaultMessage: "Couldn’t complete installation. Please try again",
                    description: "Error when continuing after installation or starting setup cannot resume the conversation's pending plugin installation request"
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
                    w = e.get(f.a).formatMessage({
                        id: "plugins.onboarding.prompt",
                        defaultMessage: "Help me set up {plugin} with the {skill} skill",
                        description: "User message sent after choosing plugin setup; plugin and skill are clickable mentions"
                    }, {
                        plugin: (0, h.b)(`@${v}`, I),
                        skill: (0, h.b)(`${"chatgpt"===_.type?"@":"$"}${t.skill.name}`, t.skill.path)
                    });
                if (!(0, m.a)(e, _) || !e.get(m.c, _) || null != _.account && (e.get(u.b) !== _.account.accountId || e.get(p.k) !== _.account.userId)) return {
                    status: "failed",
                    message: e.get(f.a).formatMessage({
                        id: "plugins.onboarding.startFailed",
                        defaultMessage: "Couldn’t start setup. Please try again",
                        description: "Error when starting a plugin setup conversation fails"
                    })
                };
                if ("chatgpt" === _.type) {
                    let {
                        startChatGptPluginOnboarding: o
                    } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(544914)]).then(n.bind(n, "O68Q"));
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
                let A = t => "failed" === t.status ? t : "created" === t.status ? {
                        status: "started",
                        route: (0, m.b)(_, t.conversationId),
                        message: (0, c.a)(e, t)?.message
                    } : {
                        status: "outcome-unknown",
                        message: (0, c.a)(e, t).message
                    },
                    x = !1,
                    k = async e => {
                        b = e, x && await l?.(A(e))
                    };
                if (_.hostId === o.Vb) {
                    let t = await (0, c.b)(e, _.hostId, {
                        input: [{
                            type: "text",
                            text: w,
                            text_elements: []
                        }, ...S],
                        cwd: o.fd,
                        workspaceRoots: [o.fd],
                        workspaceKind: "projectless",
                        cloudThreadPrototype: !0,
                        collaborationMode: null,
                        serviceTier: null,
                        useAppServerPermissionDefault: !0,
                        turnTrigger: "plugin_onboarding"
                    }, {
                        onSettled: k
                    });
                    return x = !0, A(b ?? t)
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
                    onSettled: k
                });
                if (x = !0, "creation" !== C.kind) throw Error("Plugin setup requires a local conversation");
                return A(b ?? C.result)
            }
        })
    }),
    odxv: (function(e, t, n) {
        var o = n("BolX"),
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
        var o = n("BolX"),
            i = n("d0tz"),
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
            return "chatgpt" !== e.type || null == e.conversationId || !n(l.i, e.conversationId) && !n(s.bb, e.conversationId) && !(0, s.Ab)(n(s.$, e.conversationId))
        });
        n.d(t, {}, {
            a: function(e, t) {
                return null != t.conversationId || ("chatgpt" === t.type ? e.get(a.a, {
                    name: "chatgpt"
                }).isCapable && "allowed" === e.get(r.q).status : t.hostId !== i.Vb || e.get(d.e))
            },
            b: function(e, t) {
                return "chatgpt" === e.type ? (0, c.c)(t) : (0, p.a)((0, i.ce)((0, i.Re)(t)), e.hostId)
            },
            c: g
        })
    })
};