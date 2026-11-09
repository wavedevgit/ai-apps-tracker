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
                let s, c, u, d = (0, o.c)(9),
                    {
                        accountId: p,
                        enabled: g,
                        hostId: h
                    } = e;
                return d[0] !== p || d[1] !== h ? (t = h, n = p, s = [...l(t), n], d[0] = p, d[1] = h, d[2] = s) : s = d[2], d[3] !== h ? (c = async () => await a.a.ambientSuggestions?.hasAccessibleAndEnabledApp({
                    hostId: h
                }) ?? !1, d[3] = h, d[4] = c) : c = d[4], d[5] !== g || d[6] !== s || d[7] !== c ? (u = {
                    queryKey: s,
                    queryFn: c,
                    enabled: g,
                    retry: !1,
                    staleTime: r.b.FIVE_MINUTES
                }, d[5] = g, d[6] = s, d[7] = c, d[8] = u) : u = d[8], (0, i.a)(u)
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
                let t, n, c, u, d, p, g = (0, i.c)(19),
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
                    w = null != y && "overflow-y-auto";
                return g[8] !== v || g[9] !== w ? (u = (0, a.b)(v, w), g[8] = v, g[9] = w, g[10] = u) : u = g[10], g[11] !== h || g[12] !== c || g[13] !== u ? (d = (0, o.jsx)("div", {
                    ref: c,
                    className: u,
                    children: h
                }), g[11] = h, g[12] = c, g[13] = u, g[14] = d) : d = g[14], g[15] !== m || g[16] !== n || g[17] !== d ? (p = (0, o.jsx)(s.a, {
                    open: !0,
                    onOpenChange: m,
                    autoFocusCloseButton: !0,
                    size: "setup",
                    contentProps: n,
                    children: d
                }), g[15] = m, g[16] = n, g[17] = d, g[18] = p) : p = g[18], p
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
            u = n("lmaZ");

        function d(e) {
            let t, n, c, d, p, g, h, f, m, y, b, _, v = (0, i.c)(27),
                {
                    isPending: w,
                    embedded: I,
                    isFetching: S,
                    onOpenChange: A,
                    onRetry: x
                } = e,
                k = void 0 !== I && I,
                C = k ? "h2" : l.e,
                E = k ? "p" : l.d;
            if (w) {
                let e;
                return v[0] !== k ? (e = (0, o.jsx)(u.a, {
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
            }), v[5] = c) : c = v[5], v[6] !== E ? (d = (0, o.jsx)(E, {
                children: c
            }), v[6] = E, v[7] = d) : d = v[7], v[8] !== n || v[9] !== d ? (p = (0, o.jsx)(s.d, {
                title: n,
                subtitle: d
            }), v[8] = n, v[9] = d, v[10] = p) : p = v[10], v[11] !== A ? (g = () => A(!1), v[11] = A, v[12] = g) : g = v[12], v[13] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, o.jsx)(a.a, {
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
            a: d,
            b: function(e) {
                let t, n, a = (0, i.c)(6);
                return a[0] !== e ? (t = (0, o.jsx)(d, {
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
            u = n("Dgwo"),
            d = n("biqr"),
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
                let t, n, l, v, w, I, S, A, x = (0, o.c)(35),
                    k = e?.hostId ?? y.a,
                    C = (0, r.y)(m.a),
                    E = (0, r.z)(p.a),
                    P = (0, i.c)(),
                    M = (0, f.b)(),
                    j = (0, s.a)(),
                    O = E ?? void 0;
                x[0] !== k || x[1] !== O ? (t = (0, d.g)(k, O), x[0] = k, x[1] = O, x[2] = t) : t = x[2];
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
                    if ("okOverridden" === (await (0, u.b)(C, k).sendRequest("config/batchWrite", {
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
                }, x[11] = T, x[12] = P, x[13] = v) : v = x[13], x[14] !== T || x[15] !== j || x[16] !== M || x[17] !== P || x[18] !== C ? (w = async (e, t, n) => {
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
                }, x[14] = T, x[15] = j, x[16] = M, x[17] = P, x[18] = C, x[19] = w) : w = x[19], x[20] !== T || x[21] !== j || x[22] !== P || x[23] !== C ? (I = (e, t, n) => {
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
                }, x[20] = T, x[21] = j, x[22] = P, x[23] = C, x[24] = I) : I = x[24], x[25] !== R || x[26] !== l || x[27] !== v || x[28] !== w || x[29] !== I ? (S = {
                    mutationFn: l,
                    onMutate: v,
                    onSuccess: w,
                    onError: I,
                    onSettled: R
                }, x[25] = R, x[26] = l, x[27] = v, x[28] = w, x[29] = I, x[30] = S) : S = x[30];
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
        var o = n("wWGv"),
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
                    refreshAppsList: u
                } = e, d = n.getQueriesData({
                    queryKey: ["apps", "list", t]
                }), p = d.some(e => {
                    let [, t] = e;
                    return null != t
                }) ? d.flatMap(e => {
                    let [, t] = e;
                    return t ?? []
                }) : void 0, [g] = await Promise.all([u(), (0, r.a)(n, l.a)]);
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
            l = n("wWGv"),
            s = n("I3F6"),
            c = n("zd8w"),
            u = n("Qgfj"),
            d = n("Wf1j"),
            p = n("oyxz"),
            g = n("Dgwo"),
            h = n("oo2L"),
            f = n("Sx5O"),
            m = n("yGJ5"),
            y = n("NcQ7"),
            b = n("CMv2"),
            _ = n("QSD9"),
            v = n("pxeg"),
            w = n("PraM"),
            I = n("BQbE"),
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
        let U = (0, u.f)({
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
                let t, n, u, G, F, L, V, Q, B, W, z, K, X, H, J, Y, $, Z, ee, et, en, eo, ei, ea, er, el, es, ec, eu, ed = (0, i.c)(128),
                    {
                        conversationId: ep,
                        hostId: eg,
                        requestId: eh,
                        auth: ef
                    } = e,
                    em = (0, r.y)(j.a),
                    ey = (0, d.a)(),
                    eb = (0, a.c)(),
                    e_ = (0, R.k)();
                ed[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                    preview: !1
                }, ed[0] = t) : t = ed[0];
                let {
                    data: ev
                } = (0, k.i)(void 0, t), ew = (0, r.z)(M.f), [eI, eS] = (0, c.useState)(!1), [eA, ex] = (0, c.useState)(!1), [ek, eC] = (0, c.useState)(!1), eE = (0, c.useRef)(!1), eP = eg === l.Vb ? T.a : eg;
                ed[1] !== eP ? (n = {
                    hostId: eP
                }, ed[1] = eP, ed[2] = n) : n = ed[2];
                let {
                    data: eM,
                    hardRefetchAppsList: ej,
                    isPending: eO
                } = (0, S.m)(n);
                ed[3] !== eM ? (u = void 0 === eM ? [] : eM, ed[3] = eM, ed[4] = u) : u = ed[4];
                let eT = u;
                ed[5] !== ef.connector.connector_id ? (G = [ef.connector.connector_id], ed[5] = ef.connector.connector_id, ed[6] = G) : G = ed[6], ed[7] !== eP || ed[8] !== G ? (F = {
                    appIds: G,
                    hostId: eP
                }, ed[7] = eP, ed[8] = G, ed[9] = F) : F = ed[9];
                let {
                    data: eR
                } = (0, I.c)(F);
                ed[10] !== eR ? (L = void 0 === eR ? [] : eR, ed[10] = eR, ed[11] = L) : L = ed[11];
                let eN = L;
                ed[12] === Symbol.for("react.memo_cache_sentinel") ? (V = () => {
                    eS(!0)
                }, ed[12] = V) : V = ed[12], ed[13] !== eg ? (Q = {
                    hostId: eg,
                    oauthReferrer: "conversation_auth",
                    onExternalConnectStarted: V
                }, ed[13] = eg, ed[14] = Q) : Q = ed[14];
                let {
                    clearConnectingApp: eq,
                    clearPendingAppConnect: eD,
                    connectingApp: eU,
                    handleAppConnectOAuthStarted: eG,
                    handleConnectApp: eF,
                    handleOpenAppUrl: eL,
                    isAppConnectPending: eV
                } = (0, A.a)(Q), {
                    isAppConnectCallbackClaimed: eQ
                } = (0, m.g)();
                ed[15] !== eT || ed[16] !== ef.connector.connector_id ? (B = eT.find(e => e.id === ef.connector.connector_id) ?? null, ed[15] = eT, ed[16] = ef.connector.connector_id, ed[17] = B) : B = ed[17];
                let eB = B;
                ed[18] !== ef.connector.connector_id || ed[19] !== eN ? (W = eN.find(e => e.id === ef.connector.connector_id) ?? null, ed[18] = ef.connector.connector_id, ed[19] = eN, ed[20] = W) : W = ed[20];
                let eW = W,
                    ez = eW?.name ?? ef.connector.connector_name,
                    eK = ef.connector.auth_reason,
                    eX = "missing_link" === eK;
                ed[21] !== ef.connector.connector_id ? (z = (0, y.a)(ef.connector.connector_id), ed[21] = ef.connector.connector_id, ed[22] = z) : z = ed[22];
                let eH = null != z,
                    eJ = "oauth_upgrade_required" === eK;
                ed[23] !== ef.connector.connector_id || ed[24] !== ev?.plan_type || ed[25] !== eX || ed[26] !== e_ ? (K = (0, b.d)({
                    planType: ev?.plan_type,
                    connectorId: ef.connector.connector_id,
                    disableExposureLog: !0,
                    statsigClient: e_
                }), X = eX && null != (0, b.f)(ef.connector.connector_id, K), ed[23] = ef.connector.connector_id, ed[24] = ev?.plan_type, ed[25] = eX, ed[26] = e_, ed[27] = K, ed[28] = X) : (K = ed[27], X = ed[28]);
                let eY = X;
                ed[29] !== ef.connector.connector_id || ed[30] !== ev?.plan_type || ed[31] !== eX || ed[32] !== e_ ? (H = eX && (0, v.f)({
                    planType: ev?.plan_type,
                    connectorId: ef.connector.connector_id,
                    disableExposureLog: !0,
                    statsigClient: e_
                }), ed[29] = ef.connector.connector_id, ed[30] = ev?.plan_type, ed[31] = eX, ed[32] = e_, ed[33] = H) : H = ed[33];
                let e$ = H,
                    eZ = eY || e$;
                ed[34] !== ef.connector.connector_id || ed[35] !== ep || ed[36] !== eI || ed[37] !== eQ || ed[38] !== eV || ed[39] !== eh || ed[40] !== eH ? (Y = {
                    kind: "connector-auth-elicitation",
                    conversationId: ep,
                    requestId: eh
                }, J = eQ(ef.connector.connector_id, Y), $ = !eH && (eI || eV(ef.connector.connector_id, Y)), ed[34] = ef.connector.connector_id, ed[35] = ep, ed[36] = eI, ed[37] = eQ, ed[38] = eV, ed[39] = eh, ed[40] = eH, ed[41] = J, ed[42] = Y, ed[43] = $) : (J = ed[41], Y = ed[42], $ = ed[43]);
                let e1 = $,
                    e0 = U.reconnect;
                e1 ? e0 = U.continue : eX ? e0 = U.connect : eJ && (e0 = U.updateAccess), ed[44] !== ef.connector.connector_id || ed[45] !== eD || ed[46] !== ep || ed[47] !== eg || ed[48] !== ey || ed[49] !== eh || ed[50] !== Y || ed[51] !== em || ed[52] !== ew ? (Z = e => {
                    eE.current || (eE.current = !0, "decline" === e && eD({
                        appId: ef.connector.connector_id,
                        resumeTarget: Y
                    }), (0, g.b)(em, eg).replyWithMcpServerElicitationResponse(ep, eh, (0, s.b)(e)).then(() => {
                        eD({
                            appId: ef.connector.connector_id,
                            resumeTarget: Y
                        })
                    }).catch(() => {
                        eE.current = !1, ew.danger(ey.formatMessage({
                            id: "composer.connectorAuth.responseError",
                            defaultMessage: "Could not submit your response. Please try again",
                            description: "Toast shown when accepting or declining a connector authentication request fails and the user can retry"
                        }), {
                            errorAnalytics: {
                                toastId: "composer.connectorAuth.responseError"
                            }
                        })
                    }))
                }, ed[44] = ef.connector.connector_id, ed[45] = eD, ed[46] = ep, ed[47] = eg, ed[48] = ey, ed[49] = eh, ed[50] = Y, ed[51] = em, ed[52] = ew, ed[53] = Z) : Z = ed[53];
                let e2 = Z;
                ed[54] !== e2 ? (ee = () => {
                    e2("decline")
                }, ed[54] = e2, ed[55] = ee) : ee = ed[55];
                let e3 = ee;
                ed[56] !== ef.connector.connector_id || ed[57] !== ef.connector.install_url || ed[58] !== ef.connector.link_id || ed[59] !== ef.connector.requested_scopes || ed[60] !== ef.url || ed[61] !== eK || ed[62] !== eP || ed[63] !== ez || ed[64] !== K || ed[65] !== eG || ed[66] !== eF || ed[67] !== eL || ed[68] !== ey || ed[69] !== eO || ed[70] !== eB || ed[71] !== eb || ed[72] !== e2 || ed[73] !== eH || ed[74] !== Y || ed[75] !== em || ed[76] !== eY || ed[77] !== e$ || ed[78] !== eZ || ed[79] !== ew ? (et = async () => {
                    eH ? ex(!0) : eZ && eO || (eC(!0), await (async () => {
                        if (eZ && null != eB) {
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
                                }) : (0, w.a)(e))).length > 0) return void await eF(eB, {
                                forceInApp: !0,
                                googleOAuthBundlePrepared: eY,
                                microsoftOAuthBundlePrepared: e$
                            })
                        }
                        let e = {
                                id: ef.connector.connector_id,
                                installUrl: eB?.installUrl ?? ef.connector.install_url,
                                name: ez
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
                                    t = !0, eG({
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
                                    }) : eL(e)
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
                                return void ew.danger(ey.formatMessage({
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
                }, ed[56] = ef.connector.connector_id, ed[57] = ef.connector.install_url, ed[58] = ef.connector.link_id, ed[59] = ef.connector.requested_scopes, ed[60] = ef.url, ed[61] = eK, ed[62] = eP, ed[63] = ez, ed[64] = K, ed[65] = eG, ed[66] = eF, ed[67] = eL, ed[68] = ey, ed[69] = eO, ed[70] = eB, ed[71] = eb, ed[72] = e2, ed[73] = eH, ed[74] = Y, ed[75] = em, ed[76] = eY, ed[77] = e$, ed[78] = eZ, ed[79] = ew, ed[80] = et) : et = ed[80];
                let e5 = et;
                ed[81] !== e5 || ed[82] !== e2 || ed[83] !== e1 ? (en = () => {
                    e1 ? e2("accept") : e5()
                }, ed[81] = e5, ed[82] = e2, ed[83] = e1, ed[84] = en) : en = ed[84];
                let e4 = en;
                if (null != ef.connector.connection_consent) return null;
                if (eX) {
                    let e;
                    ed[87] !== ez ? (e = (0, o.jsx)(p.a, {
                        ...U.missingConnectionDescription,
                        values: {
                            connectorName: ez
                        }
                    }), ed[87] = ez, ed[88] = e) : e = ed[88], eo = e
                } else if (eJ) {
                    let e;
                    ed[89] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(p.a, {
                        ...U.missingScopesDescription
                    }), ed[89] = e) : e = ed[89], eo = e
                } else {
                    let e;
                    ed[90] !== ez ? (e = (0, o.jsx)(p.a, {
                        ...U.reconnectDescription,
                        values: {
                            connectorName: ez
                        }
                    }), ed[90] = ez, ed[91] = e) : e = ed[91], eo = e
                }
                let e7 = eW?.iconUrl,
                    e6 = eW?.iconUrlDark;
                ed[92] === Symbol.for("react.memo_cache_sentinel") ? (ei = (0, o.jsx)(P.a, {
                    className: "text-secondary",
                    "aria-hidden": !1,
                    asset: D.a
                }), ed[92] = ei) : ei = ed[92], ed[93] !== ef.connector.connector_id || ed[94] !== ez || ed[95] !== e7 || ed[96] !== e6 ? (ea = (0, o.jsx)(C.a, {
                    alt: ez,
                    className: "icon-md rounded-sm object-contain",
                    knownAppId: ef.connector.connector_id,
                    logoUrl: e7,
                    logoDarkUrl: e6,
                    fallback: ei
                }), ed[93] = ef.connector.connector_id, ed[94] = ez, ed[95] = e7, ed[96] = e6, ed[97] = ea) : ea = ed[97], ed[98] !== e0 ? (er = (0, o.jsx)(p.a, {
                    ...e0
                }), ed[98] = e0, ed[99] = er) : er = ed[99];
                let e8 = ek || J || eZ && eO;
                return ed[100] !== ez || ed[101] !== eo || ed[102] !== e3 || ed[103] !== e4 || ed[104] !== ea || ed[105] !== er || ed[106] !== e8 ? (el = (0, o.jsx)(q.a, {
                    icon: ea,
                    title: ez,
                    description: eo,
                    primaryActionLabel: er,
                    isPrimaryActionLoading: e8,
                    onDecline: e3,
                    onSubmit: e4
                }), ed[100] = ez, ed[101] = eo, ed[102] = e3, ed[103] = e4, ed[104] = ea, ed[105] = er, ed[106] = e8, ed[107] = el) : el = ed[107], ed[108] !== ef.connector.connector_id || ed[109] !== ef.connector.link_id || ed[110] !== eK || ed[111] !== eP || ed[112] !== ej || ed[113] !== e2 || ed[114] !== eA ? (es = eA ? (0, o.jsx)(f.b, {
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
                }) : null, ed[108] = ef.connector.connector_id, ed[109] = ef.connector.link_id, ed[110] = eK, ed[111] = eP, ed[112] = ej, ed[113] = e2, ed[114] = eA, ed[115] = es) : es = ed[115], ed[116] !== eq || ed[117] !== eU || ed[118] !== eP || ed[119] !== eG || ed[120] !== e2 || ed[121] !== Y || ed[122] !== eZ ? (ec = eZ ? (0, o.jsx)(O.a, {
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
                        eG({
                            ...e
                        }), eS(!0)
                    },
                    onOpenChange: e => {
                        e || eq()
                    }
                }) : null, ed[116] = eq, ed[117] = eU, ed[118] = eP, ed[119] = eG, ed[120] = e2, ed[121] = Y, ed[122] = eZ, ed[123] = ec) : ec = ed[123], ed[124] !== el || ed[125] !== es || ed[126] !== ec ? (eu = (0, o.jsxs)(o.Fragment, {
                    children: [el, es, ec]
                }), ed[124] = el, ed[125] = es, ed[126] = ec, ed[127] = eu) : eu = ed[127], eu
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
            l = n("wWGv"),
            s = n("I3F6"),
            c = n("Haiv"),
            u = n("zd8w"),
            d = n("Qgfj"),
            p = n("Wf1j"),
            g = n("oyxz"),
            h = n("Dgwo"),
            f = n("tl5a"),
            m = n("yGJ5"),
            y = n("NcQ7"),
            b = n("IBgA"),
            _ = n("oxjR"),
            v = n("hOO0"),
            w = n("BQbE"),
            I = n("biqr"),
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
            G = n("Hl7m"),
            F = n("OWtl"),
            L = n("odxv");

        function V(e) {
            let t, n, a, l, s, u, d, p, h, f, m = (0, i.c)(25),
                {
                    onboarding: y
                } = e,
                b = (0, r.y)(F.a);
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
            }), m[9] = _, m[10] = s) : s = m[10], m[11] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, o.jsx)(g.a, {
                id: "plugins.onboarding.inline.setup",
                defaultMessage: "Setup",
                description: "Start optional setup for the newly installed plugin in this conversation"
            }), d = (0, o.jsx)(g.a, {
                id: "plugins.onboarding.inline.skip",
                defaultMessage: "Skip",
                description: "Skip optional plugin setup and resume the conversation's original task"
            }), m[11] = u, m[12] = d) : (u = m[11], d = m[12]);
            let v = "setup" === y.submittingAction,
                w = "skip" === y.submittingAction;
            return m[13] !== y || m[14] !== b ? (p = () => void(0, L.b)(b, y, "skip"), h = () => void(0, L.b)(b, y, "setup"), m[13] = y, m[14] = b, m[15] = p, m[16] = h) : (p = m[15], h = m[16]), m[17] !== p || m[18] !== h || m[19] !== a || m[20] !== l || m[21] !== s || m[22] !== v || m[23] !== w ? (f = (0, o.jsx)(G.a, {
                icon: a,
                title: l,
                description: s,
                primaryActionLabel: u,
                secondaryActionLabel: d,
                isPrimaryActionLoading: v,
                isSecondaryActionLoading: w,
                onDecline: p,
                onSubmit: h
            }), m[17] = p, m[18] = h, m[19] = a, m[20] = l, m[21] = s, m[22] = v, m[23] = w, m[24] = f) : f = m[24], f
        }
        var Q = n("uzkw"),
            B = n("ugfi"),
            W = n("EEop"),
            z = n("cLdu"),
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
        let et = (0, d.f)({
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
            let l = (0, r.x)(L.a, t);
            return a[4] !== l || a[5] !== e ? (n = null == l ? (0, o.jsx)(eo, {
                ...e
            }) : (0, o.jsx)(V, {
                onboarding: l
            }), a[4] = l, a[5] = e, a[6] = n) : n = a[6], n
        }

        function eo(e) {
            let t, n, d, S, P, L, V, en, eo, el, es, ec, eu, ed, ep, eg, eh, ef, em, ey, eb, e_, ev, ew, eI, eS, eA, ex, ek, eC, eE, eP, eM, ej, eO, eT, eR, eN, eq, eD, eU, eG, eF, eL, eV, eQ, eB, eW, ez, eK, eX, eH, eJ = (0, i.c)(254),
                {
                    conversationId: eY,
                    hostId: e$,
                    requestId: eZ,
                    suggestion: e1
                } = e,
                e0 = (0, r.y)(F.a),
                e2 = (0, r.z)(x.b),
                e3 = (0, r.z)(k.k),
                e5 = (0, r.z)(X.j);
            eJ[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Set, eJ[0] = t) : t = eJ[0];
            let e4 = (0, u.useRef)(t),
                e7 = (0, p.a)(),
                e6 = (0, r.z)(M.f),
                e8 = (0, a.c)(),
                [e9, te] = (0, u.useState)(null),
                [tt, tn] = (0, u.useState)(!1),
                [to, ti] = (0, u.useState)(null),
                [ta, tr] = (0, u.useState)(null),
                [tl, ts] = (0, u.useState)(null),
                tc = (0, O.c)(eY);
            eJ[1] !== e$ ? (n = (0, z.i)(e$), eJ[1] = e$, eJ[2] = n) : n = eJ[2];
            let tu = n;
            eJ[3] !== eY || eJ[4] !== e$ ? (d = {
                hostId: e$,
                threadId: eY
            }, eJ[3] = eY, eJ[4] = e$, eJ[5] = d) : d = eJ[5];
            let td = (0, r.x)(f.bc, d),
                tp = "install" === e1.suggest_type && e$ === l.Vb && td?.threadAccess === "shared",
                tg = "install" === e1.suggest_type && e$ === l.Vb && null == td,
                th = tu || tc.hostId !== e$ || null == tc.cwd ? void 0 : [tc.cwd],
                tf = !tu;
            eJ[6] !== e$ || eJ[7] !== tf ? (S = {
                hostId: e$,
                enabled: tf
            }, eJ[6] = e$, eJ[7] = tf, eJ[8] = S) : S = eJ[8];
            let tm = (0, j.a)(S),
                ty = !tu && "plugin" === e1.tool_type && "enable" === e1.suggest_type,
                tb = !ty && "plugin" === e1.tool_type && (tu || tm),
                t_ = (0, u.useRef)(!1);
            eJ[9] !== eY || eJ[10] !== e$ || eJ[11] !== eZ || eJ[12] !== e0 ? (P = e => {
                t_.current || (t_.current = !0, (0, h.b)(e0, e$).replyWithMcpServerElicitationResponse(eY, eZ, (0, s.b)(e)).catch(() => {
                    t_.current = !1
                }))
            }, eJ[9] = eY, eJ[10] = e$, eJ[11] = eZ, eJ[12] = e0, eJ[13] = P) : P = eJ[13];
            let tv = P,
                tw = "connector" === e1.tool_type;
            eJ[14] !== e$ || eJ[15] !== tw ? (L = {
                enabled: tw,
                hostId: e$
            }, eJ[14] = e$, eJ[15] = tw, eJ[16] = L) : L = eJ[16];
            let {
                data: tI,
                refetch: tS
            } = (0, I.m)(L);
            eJ[17] !== tI ? (V = void 0 === tI ? [] : tI, eJ[17] = tI, eJ[18] = V) : V = eJ[18];
            let tA = V;
            eJ[19] !== e1.tool_id || eJ[20] !== e1.tool_type ? (en = "connector" === e1.tool_type ? [e1.tool_id] : [], eJ[19] = e1.tool_id, eJ[20] = e1.tool_type, eJ[21] = en) : en = eJ[21], eJ[22] !== e$ || eJ[23] !== en ? (eo = {
                appIds: en,
                hostId: e$
            }, eJ[22] = e$, eJ[23] = en, eJ[24] = eo) : eo = eJ[24];
            let {
                data: tx
            } = (0, w.c)(eo);
            eJ[25] !== tx ? (el = void 0 === tx ? [] : tx, eJ[25] = tx, eJ[26] = el) : el = eJ[26];
            let tk = el,
                {
                    data: tC,
                    isLoading: tE,
                    refetch: tP
                } = (0, z.l)({
                    enabled: "plugin" === e1.tool_type && ty && tm,
                    hostId: e$,
                    roots: th,
                    resolveActiveRoots: ty
                });
            eJ[27] !== tC ? (es = tC ?? [], eJ[27] = tC, eJ[28] = es) : es = eJ[28];
            let tM = es;
            eJ[29] !== eZ ? (ec = () => {
                ti(eZ)
            }, eJ[29] = eZ, eJ[30] = ec) : ec = eJ[30], eJ[31] !== e$ || eJ[32] !== ec ? (eu = {
                hostId: e$,
                oauthReferrer: "tool_suggestion",
                onExternalConnectStarted: ec
            }, eJ[31] = e$, eJ[32] = ec, eJ[33] = eu) : eu = eJ[33];
            let {
                clearConnectingApp: tj,
                connectingApp: tO,
                handleAppConnectOAuthStarted: tT,
                handleConnectApp: tR,
                handleOpenAppUrl: tN,
                isAppConnectPending: tq
            } = (0, A.a)(eu), {
                clearPendingAppConnect: tD,
                getPendingTeamElicitationConnect: tU,
                isAppConnectCallbackClaimed: tG
            } = (0, m.g)();
            eJ[34] !== eY || eJ[35] !== tU || eJ[36] !== e$ || eJ[37] !== eZ ? (ed = tU(e$, eY, eZ), eJ[34] = eY, eJ[35] = tU, eJ[36] = e$, eJ[37] = eZ, eJ[38] = ed) : ed = eJ[38];
            let tF = ed,
                tL = tF?.resumeTarget.kind === "service-account" ? tF.resumeTarget : null,
                tV = tL?.pendingElicitationReply?.oauth,
                tQ = tl === eZ || null != tF && (tF.claimed || tV?.kind === "connected") && tV?.kind !== "failed" && tF.oauthState !== ta,
                tB = tV?.kind === "connected" ? tF?.oauthState : null,
                tW = tL?.accountId,
                tz = tL?.pendingElicitationReply?.actorUserId;
            eJ[39] !== eY || eJ[40] !== tl || eJ[41] !== e$ || eJ[42] !== eZ || eJ[43] !== e0 ? (ep = () => {
                if (tl === eZ) return e0.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(f.E, eY) === e$ && t(f.ub, eY)?.some(e => e.id === eZ) && (t_.current = !1, ts(null))
                })
            }, eg = [eY, tl, e$, eZ, e0], eJ[39] = eY, eJ[40] = tl, eJ[41] = e$, eJ[42] = eZ, eJ[43] = e0, eJ[44] = ep, eJ[45] = eg) : (ep = eJ[44], eg = eJ[45]), (0, u.useEffect)(ep, eg), eJ[46] !== e$ ? (eh = {
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
            } = (0, B.d)(ef), tY = "plugin" === e1.tool_type ? e1 : null, {
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
                t5 = null == tY ? null : tY.remote_plugin_id ?? (tu ? tY.tool_id : null),
                t4 = (0, W.g)({
                    hostId: e$,
                    pluginId: tu ? t5 : tY?.tool_id ?? null,
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
            } = (0, r.x)(W.l, t4, ey), t9 = null == t0 ? null : tA.find(e => e.id === t0.tool_id) ?? null;
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
                na = null != t3 && tG(e1.tool_id, t3),
                nr = (0, U.a)(tZ, {
                    hostId: e$,
                    pluginId: tZ?.phase === "loading" ? t5 ?? e1.tool_id : nt?.plugin.id ?? e1.tool_id
                }),
                nl = to === eZ || ni,
                ns = "plugin" === e1.tool_type && "install" === e1.suggest_type && "closed" !== t1.kind && t1.hostId === e$ && t1.pendingElicitationReply?.conversationId === eY && t1.pendingElicitationReply?.requestId === eZ,
                nc = tu && "plugin" === e1.tool_type && "install" === e1.suggest_type,
                nu = tH === (nt?.plugin.id ?? e1.tool_id);
            "connector" === e1.tool_type ? nu = "install" === e1.suggest_type ? no || na : tX === e1.tool_id : "install" === e1.suggest_type && (nu = nr || ns);
            let nd = !tp && (na || !nc && !nu && (nn || nl)),
                np = tY?.suggest_type !== "install" || nd || e5 ? null : t5 ?? tY.tool_id;
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
                nf = tg || null != tY && t6 || tt || tQ || nu || (tu || ty) && "plugin" === e1.tool_type && "enable" === e1.suggest_type && tE,
                nm = et.enable;
            nd ? nm = et.continue : "install" === e1.suggest_type && (nm = et.install);
            let ny = null == nt ? ne?.name ?? t9?.name ?? e1.tool_name : (0, c.a)(nt),
                nb = "plugin" === e1.tool_type ? nt?.description : ne?.description ?? t9?.description,
                n_ = t0?.tool_id,
                nv = ne?.iconUrl,
                nw = ne?.iconUrlDark;
            eJ[71] === Symbol.for("react.memo_cache_sentinel") ? (ew = (0, o.jsx)(E.a, {
                className: "text-secondary",
                "aria-hidden": !1,
                asset: $.a
            }), eJ[71] = ew) : ew = eJ[71], eJ[72] !== ny || eJ[73] !== n_ || eJ[74] !== nv || eJ[75] !== nw ? (eI = (0, o.jsx)(C.a, {
                alt: ny,
                className: "icon-md rounded-sm object-contain",
                knownAppId: n_,
                logoUrl: nv,
                logoDarkUrl: nw,
                fallback: ew
            }), eJ[72] = ny, eJ[73] = n_, eJ[74] = nv, eJ[75] = nw, eJ[76] = eI) : eI = eJ[76];
            let nI = eI;
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
                }), eJ[78] = e1.tool_name, eJ[79] = n, eJ[80] = i, eJ[81] = t) : t = eJ[81], nI = t
            }
            eJ[82] !== nh || eJ[83] !== tv ? (eS = () => {
                nh("dismiss"), tv("decline")
            }, eJ[82] = nh, eJ[83] = tv, eJ[84] = eS) : eS = eJ[84];
            let nS = eS;
            eJ[85] !== t0 || eJ[86] !== tR || eJ[87] !== tN || eJ[88] !== t2 || eJ[89] !== t9 || eJ[90] !== eZ ? (eA = async () => {
                (t2 || ti(eZ), null != t9) ? await tR(t9): null != t0 && (tN(t0.install_url), ti(eZ))
            }, eJ[85] = t0, eJ[86] = tR, eJ[87] = tN, eJ[88] = t2, eJ[89] = t9, eJ[90] = eZ, eJ[91] = eA) : eA = eJ[91];
            let nA = eA;
            eJ[92] !== eY || eJ[93] !== e$ || eJ[94] !== tu || eJ[95] !== t$ || eJ[96] !== e7 || eJ[97] !== nt || eJ[98] !== tY?.suggestion_id || eJ[99] !== t8 || eJ[100] !== t5 || eJ[101] !== eZ || eJ[102] !== tb || eJ[103] !== e1.tool_name || eJ[104] !== e6 ? (ex = async () => {
                let e = nt;
                if (tu && null != t5) e = {
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
            }, eJ[92] = eY, eJ[93] = e$, eJ[94] = tu, eJ[95] = t$, eJ[96] = e7, eJ[97] = nt, eJ[98] = tY?.suggestion_id, eJ[99] = t8, eJ[100] = t5, eJ[101] = eZ, eJ[102] = tb, eJ[103] = e1.tool_name, eJ[104] = e6, eJ[105] = ex) : ex = eJ[105];
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
            eJ[111] !== nk || eJ[112] !== tu || eJ[113] !== nt || eJ[114] !== tJ ? (eE = e => {
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
                        plugin: tu ? nt?.plugin : void 0,
                        enabled: o
                    })
                })
            }, eJ[111] = nk, eJ[112] = tu, eJ[113] = nt, eJ[114] = tJ, eJ[115] = eE) : eE = eJ[115];
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
            eJ[129] !== tD || eJ[130] !== eY || eJ[131] !== e$ || eJ[132] !== eZ || eJ[133] !== e0 || eJ[134] !== nM || eJ[135] !== tF?.oauthState ? (ej = async (e, t) => {
                let n = void 0 === e ? (0, s.b)("accept") : e,
                    o = t ?? tF?.oauthState;
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
            }, eJ[129] = tD, eJ[130] = eY, eJ[131] = e$, eJ[132] = eZ, eJ[133] = e0, eJ[134] = nM, eJ[135] = tF?.oauthState, eJ[136] = ej) : ej = eJ[136];
            let nj = ej;
            eJ[137] !== eY || eJ[138] !== ta || eJ[139] !== e$ || eJ[140] !== e8 || eJ[141] !== eZ || eJ[142] !== e0 || eJ[143] !== nj || eJ[144] !== nM || eJ[145] !== tF ? (eO = async (e, t) => {
                let n = tF?.resumeTarget,
                    o = n?.kind === "service-account" ? n.pendingElicitationReply : void 0,
                    i = o?.oauth;
                if (tF?.oauthState !== e || n?.kind !== "service-account" || null == o || i?.kind !== "connected" || ta === e) return;
                let a = () => null != o.actorUserId && e0.get(k.k) === o.actorUserId && e0.get(k.f) === n.accountId && e0.get(f.E, eY) === e$ && e0.get(f.ub, eY)?.some(e => e.id === eZ) === !0;
                if (a()) {
                    if ((0, v.a)(tF.appId) !== (0, v.a)(i.connectorId)) {
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
            }, eJ[137] = eY, eJ[138] = ta, eJ[139] = e$, eJ[140] = e8, eJ[141] = eZ, eJ[142] = e0, eJ[143] = nj, eJ[144] = nM, eJ[145] = tF, eJ[146] = eO) : eO = eJ[146];
            let nO = (0, u.useEffectEvent)(eO);
            eJ[147] !== tB || eJ[148] !== eY || eJ[149] !== e$ || eJ[150] !== eZ || eJ[151] !== nO || eJ[152] !== e0 || eJ[153] !== tW || eJ[154] !== tz ? (eT = () => {
                if (null == tB) return;
                let e = !1,
                    t = !1,
                    n = e0.watch(n => {
                        let {
                            get: o
                        } = n, i = o(f.E, eY), a = o(f.ub, eY), r = o(k.f), l = o(k.k);
                        !t && i === e$ && a?.some(e => e.id === eZ) && r === tW && l === tz && (t = !0, nO(tB, () => e))
                    });
                return () => {
                    e = !0, n()
                }
            }, eJ[147] = tB, eJ[148] = eY, eJ[149] = e$, eJ[150] = eZ, eJ[151] = nO, eJ[152] = e0, eJ[153] = tW, eJ[154] = tz, eJ[155] = eT) : eT = eJ[155], eJ[156] !== tB || eJ[157] !== eY || eJ[158] !== e$ || eJ[159] !== eZ || eJ[160] !== e0 || eJ[161] !== tW || eJ[162] !== tz ? (eR = [e0, e$, eY, eZ, tB, tW, tz], eJ[156] = tB, eJ[157] = eY, eJ[158] = e$, eJ[159] = eZ, eJ[160] = e0, eJ[161] = tW, eJ[162] = tz, eJ[163] = eR) : eR = eJ[163], (0, u.useEffect)(eT, eR), eJ[164] !== eY || eJ[165] !== e$ || eJ[166] !== e7 || eJ[167] !== e0 || eJ[168] !== nj || eJ[169] !== nM || eJ[170] !== e1.tool_name ? (eN = async e => {
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
            eJ[183] !== nP || eJ[184] !== nA || eJ[185] !== nx || eJ[186] !== nC || eJ[187] !== nE || eJ[188] !== nR || eJ[189] !== e7 || eJ[190] !== tp || eJ[191] !== tg || eJ[192] !== t9 || eJ[193] !== nt || eJ[194] !== nh || eJ[195] !== nd || eJ[196] !== e1.suggest_type || eJ[197] !== e1.tool_type || eJ[198] !== e6 ? (eD = async () => {
                if (!tg) {
                    if (nh("click"), tp) {
                        tn(!0), await nR().finally(() => {
                            tn(!1)
                        });
                        return
                    }
                    if (nd) return void await nP();
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
            }, eJ[183] = nP, eJ[184] = nA, eJ[185] = nx, eJ[186] = nC, eJ[187] = nE, eJ[188] = nR, eJ[189] = e7, eJ[190] = tp, eJ[191] = tg, eJ[192] = t9, eJ[193] = nt, eJ[194] = nh, eJ[195] = nd, eJ[196] = e1.suggest_type, eJ[197] = e1.tool_type, eJ[198] = e6, eJ[199] = eD) : eD = eJ[199];
            let nN = eD;
            eJ[200] !== e2 || eJ[201] !== ng || eJ[202] !== nh || eJ[203] !== e3 ? (eU = e => {
                if (!(e?.parentElement == null || null == ng || null == e2 || null == e3 || e4.current.has(ng))) return (0, R.b)(e.parentElement, e4.current, void 0, {
                    loggedPluginIds: e4.current,
                    onViewed: () => nh("viewed")
                })
            }, eJ[200] = e2, eJ[201] = ng, eJ[202] = nh, eJ[203] = e3, eJ[204] = eU) : eU = eJ[204];
            let nq = nd && nl;
            return eJ[205] !== e1 || eJ[206] !== ny || eJ[207] !== nq ? (eG = (0, o.jsx)(ea, {
                showContinueTitle: nq,
                suggestion: e1,
                title: ny
            }), eJ[205] = e1, eJ[206] = ny, eJ[207] = nq, eJ[208] = eG) : eG = eJ[208], eJ[209] !== tQ || eJ[210] !== nm ? (eF = tQ ? (0, o.jsx)(g.a, {
                id: "settings.mcp.appConnectModal.completingConnectionButton",
                defaultMessage: "Finishing connection…",
                description: "Primary button label shown while an app connection OAuth callback is still completing in the background"
            }) : (0, o.jsx)(g.a, {
                ...nm
            }), eJ[209] = tQ, eJ[210] = nm, eJ[211] = eF) : eF = eJ[211], eJ[212] !== nN ? (eL = () => {
                nN()
            }, eJ[212] = nN, eJ[213] = eL) : eL = eJ[213], eJ[214] !== nS || eJ[215] !== ng || eJ[216] !== nf || eJ[217] !== nb || eJ[218] !== nI || eJ[219] !== eU || eJ[220] !== eG || eJ[221] !== eF || eJ[222] !== eL ? (eV = (0, o.jsx)(G.a, {
                ref: eU,
                impressionId: ng,
                icon: nI,
                title: eG,
                description: nb,
                primaryActionLabel: eF,
                isPrimaryActionLoading: nf,
                onDecline: nS,
                onSubmit: eL
            }), eJ[214] = nS, eJ[215] = ng, eJ[216] = nf, eJ[217] = nb, eJ[218] = nI, eJ[219] = eU, eJ[220] = eG, eJ[221] = eF, eJ[222] = eL, eJ[223] = eV) : eV = eJ[223], eJ[224] !== nT || eJ[225] !== eY || eJ[226] !== e$ || eJ[227] !== eZ || eJ[228] !== e9 ? (eQ = null == e9 ? null : (0, o.jsx)(Z, {
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
            }), eJ[224] = nT, eJ[225] = eY, eJ[226] = e$, eJ[227] = eZ, eJ[228] = e9, eJ[229] = eQ) : eQ = eJ[229], eJ[230] !== tj ? (eB = e => {
                e || tj()
            }, eJ[230] = tj, eJ[231] = eB) : eB = eJ[231], eJ[232] !== e$ || eJ[233] !== t2 || eJ[234] !== e8 || eJ[235] !== tS || eJ[236] !== eZ ? (eW = async () => {
                t2 && ti(eZ), await (0, _.a)({
                    hostId: e$,
                    queryClient: e8,
                    refreshAppsList: async () => (await tS()).data ?? []
                })
            }, eJ[232] = e$, eJ[233] = t2, eJ[234] = e8, eJ[235] = tS, eJ[236] = eZ, eJ[237] = eW) : eW = eJ[237], eJ[238] !== eY || eJ[239] !== eZ ? (ez = () => ({
                resumeTarget: {
                    kind: "tool-suggestion-elicitation",
                    conversationId: eY,
                    requestId: eZ,
                    response: (0, s.b)("accept")
                }
            }), eJ[238] = eY, eJ[239] = eZ, eJ[240] = ez) : ez = eJ[240], eJ[241] !== tT ? (eK = e => {
                tT({
                    ...e
                })
            }, eJ[241] = tT, eJ[242] = eK) : eK = eJ[242], eJ[243] !== tO || eJ[244] !== e$ || eJ[245] !== eB || eJ[246] !== eW || eJ[247] !== ez || eJ[248] !== eK ? (eX = (0, o.jsx)(H.a, {
                oauthReferrer: "tool_suggestion",
                app: tO,
                hostId: e$,
                onOpenChange: eB,
                onConnected: eW,
                getOAuthResumeContext: ez,
                onOAuthStarted: eK
            }), eJ[243] = tO, eJ[244] = e$, eJ[245] = eB, eJ[246] = eW, eJ[247] = ez, eJ[248] = eK, eJ[249] = eX) : eX = eJ[249], eJ[250] !== eV || eJ[251] !== eQ || eJ[252] !== eX ? (eH = (0, o.jsxs)(o.Fragment, {
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
        var o = n("wWGv"),
            i = n("MKR8"),
            a = n("Haiv"),
            r = n("eYlV"),
            l = n("Dgwo"),
            s = n("whfw"),
            c = n("z0li"),
            u = n("PAzX"),
            d = n("OiCI"),
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
                    w = (0, g.c)(t.plugin.plugin.id),
                    I = e.get(f.a).formatMessage({
                        id: "plugins.onboarding.prompt",
                        defaultMessage: "Help me set up {plugin} with the {skill} skill",
                        description: "User message sent after choosing plugin setup; plugin and skill are clickable mentions"
                    }, {
                        plugin: (0, h.b)(`@${v}`, w),
                        skill: (0, h.b)(`${"chatgpt"===_.type?"@":"$"}${t.skill.name}`, t.skill.path)
                    });
                if (!(0, m.a)(e, _) || !e.get(m.c, _) || null != _.account && (e.get(d.b) !== _.account.accountId || e.get(p.k) !== _.account.userId)) return {
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
                    return o(e, _, I, t.skill.name)
                }
                let S = [{
                    type: "mention",
                    name: v,
                    path: w
                }, {
                    type: "skill",
                    name: t.skill.name,
                    path: t.skill.path
                }];
                if (null != _.conversationId) {
                    let t, n = await (0, u.a)(e, _.hostId, null);
                    await y(e, _);
                    try {
                        await (0, s.a)(e, _.hostId, _.conversationId, {
                            prompt: I,
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
                            text: I,
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
                    prompt: I,
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
                let u = {
                    ...t,
                    submittingAction: n
                };
                e.set(c, o, u);
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
                    e.get(c, o) === u && e.set(c, o, null)
                } catch (t) {
                    e.get(a.f).danger((0, i.a)(t), {
                        errorAnalytics: {
                            toastId: "plugins.onboarding.submitFailed"
                        }
                    })
                } finally {
                    e.get(c, o) === u && e.set(c, o, t)
                }
            }
        })
    }),
    jhEa: (function(e, t, n) {
        var o = n("BolX"),
            i = n("wWGv"),
            a = n("StMt"),
            r = n("OFP1"),
            l = n("Ow2S"),
            s = n("dQRk"),
            c = n("jAnS"),
            u = n("j9xU"),
            d = n("OWtl"),
            p = n("Bc5r");
        let g = (0, o.d)(d.a, (e, t) => {
            let {
                get: n
            } = t;
            return "chatgpt" !== e.type || null == e.conversationId || !n(l.j, e.conversationId) && !n(s.bb, e.conversationId) && !(0, s.Ab)(n(s.$, e.conversationId))
        });
        n.d(t, {}, {
            a: function(e, t) {
                return null != t.conversationId || ("chatgpt" === t.type ? e.get(a.a, {
                    name: "chatgpt"
                }).isCapable && "allowed" === e.get(r.q).status : t.hostId !== i.Vb || e.get(u.e))
            },
            b: function(e, t) {
                return "chatgpt" === e.type ? (0, c.c)(t) : (0, p.a)((0, i.ce)((0, i.Re)(t)), e.hostId)
            },
            c: g
        })
    })
};