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
            r = n("ygO2"),
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
                let R = t;
                x[3] !== R || x[4] !== k || x[5] !== M ? (n = async () => {
                    await Promise.all([M((0, c.b)(k)), M(R), M([...h.b, k]), M([...h.c, k]), M(h.f), M(["user-saved-config"])])
                }, x[3] = R, x[4] = k, x[5] = M, x[6] = n) : n = x[6];
                let T = n;
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
                }, x[7] = k, x[8] = P, x[9] = C, x[10] = l) : l = x[10], x[11] !== R || x[12] !== P ? (v = async e => {
                    let {
                        appId: t,
                        enabled: n
                    } = e;
                    await P.cancelQueries({
                        queryKey: R
                    });
                    let o = P.getQueryData(R);
                    return o && P.setQueryData(R, o.map(e => e.id !== t || e.isEnabled === n ? e : {
                        ...e,
                        isEnabled: n
                    })), {
                        previousApps: o
                    }
                }, x[11] = R, x[12] = P, x[13] = v) : v = x[13], x[14] !== R || x[15] !== j || x[16] !== M || x[17] !== P || x[18] !== C ? (I = async (e, t, n) => {
                    let {
                        appId: o,
                        appName: i,
                        enabled: a
                    } = t;
                    if (a && n?.previousApps?.find(e => e.id === o)?.isEnabled === !1) {
                        await M(R);
                        let e = P.getQueryData(R)?.find(e => e.id === o);
                        if (e?.isEnabled === !1) throw Error("App remains disabled after updating its configuration")
                    }
                    let r = i ?? P.getQueryData(R)?.find(e => e.id === o)?.name ?? o;
                    C.get(g.f).success(j.formatMessage(a ? _.enableSuccess : _.disableSuccess, {
                        appName: r
                    }))
                }, x[14] = R, x[15] = j, x[16] = M, x[17] = P, x[18] = C, x[19] = I) : I = x[19], x[20] !== R || x[21] !== j || x[22] !== P || x[23] !== C ? (w = (e, t, n) => {
                    b.a.error("Failed to update app enablement", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), C.get(g.f).danger(j.formatMessage(_.updateError), {
                        errorAnalytics: {
                            toastId: "appsAvailability.onError.updateError"
                        }
                    }), n?.previousApps && P.setQueryData(R, n.previousApps)
                }, x[20] = R, x[21] = j, x[22] = P, x[23] = C, x[24] = w) : w = x[24], x[25] !== T || x[26] !== l || x[27] !== v || x[28] !== I || x[29] !== w ? (S = {
                    mutationFn: l,
                    onMutate: v,
                    onSuccess: I,
                    onError: w,
                    onSettled: T
                }, x[25] = T, x[26] = l, x[27] = v, x[28] = I, x[29] = w, x[30] = S) : S = x[30];
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
                    projectRoot: (0, o.Ue)(o.fd),
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
            k = n("FvYa"),
            C = n("Ot7V"),
            E = n("HOLv"),
            P = n("SGsN"),
            M = n("OWtl"),
            j = n("ecE5"),
            O = n("kfGJ"),
            R = n("hZax"),
            T = n("WFY2"),
            N = n("Hl7m"),
            q = n("GTV7");
        let D = (0, d.f)({
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
                let t, n, d, U, F, L, G, Q, V, z, B, W, K, X, H, J, Y, $, Z, ee, et, en, eo, ei, ea, er, el, es, ec = (0, i.c)(125),
                    {
                        conversationId: ed,
                        hostId: eu,
                        requestId: ep,
                        auth: eg
                    } = e,
                    eh = (0, r.y)(M.a),
                    ef = (0, u.a)(),
                    em = (0, a.c)(),
                    ey = (0, R.k)(),
                    eb = (0, r.z)(P.f),
                    [e_, ev] = (0, c.useState)(!1),
                    [eI, ew] = (0, c.useState)(!1),
                    [eS, eA] = (0, c.useState)(!1),
                    ex = (0, c.useRef)(!1),
                    ek = eu === l.Vb ? O.a : eu;
                ec[0] !== ek ? (t = {
                    hostId: ek
                }, ec[0] = ek, ec[1] = t) : t = ec[1];
                let {
                    data: eC,
                    hardRefetchAppsList: eE,
                    isPending: eP
                } = (0, S.m)(t);
                ec[2] !== eC ? (n = void 0 === eC ? [] : eC, ec[2] = eC, ec[3] = n) : n = ec[3];
                let eM = n;
                ec[4] !== eg.connector.connector_id ? (d = [eg.connector.connector_id], ec[4] = eg.connector.connector_id, ec[5] = d) : d = ec[5], ec[6] !== ek || ec[7] !== d ? (U = {
                    appIds: d,
                    hostId: ek
                }, ec[6] = ek, ec[7] = d, ec[8] = U) : U = ec[8];
                let {
                    data: ej
                } = (0, w.c)(U);
                ec[9] !== ej ? (F = void 0 === ej ? [] : ej, ec[9] = ej, ec[10] = F) : F = ec[10];
                let eO = F;
                ec[11] === Symbol.for("react.memo_cache_sentinel") ? (L = () => {
                    ev(!0)
                }, ec[11] = L) : L = ec[11], ec[12] !== eu ? (G = {
                    hostId: eu,
                    oauthReferrer: "conversation_auth",
                    onExternalConnectStarted: L
                }, ec[12] = eu, ec[13] = G) : G = ec[13];
                let {
                    clearConnectingApp: eR,
                    clearPendingAppConnect: eT,
                    connectingApp: eN,
                    handleAppConnectOAuthStarted: eq,
                    handleConnectApp: eD,
                    handleOpenAppUrl: eU,
                    isAppConnectPending: eF
                } = (0, A.a)(G), {
                    isAppConnectCallbackClaimed: eL
                } = (0, m.g)();
                ec[14] !== eM || ec[15] !== eg.connector.connector_id ? (Q = eM.find(e => e.id === eg.connector.connector_id) ?? null, ec[14] = eM, ec[15] = eg.connector.connector_id, ec[16] = Q) : Q = ec[16];
                let eG = Q;
                ec[17] !== eg.connector.connector_id || ec[18] !== eO ? (V = eO.find(e => e.id === eg.connector.connector_id) ?? null, ec[17] = eg.connector.connector_id, ec[18] = eO, ec[19] = V) : V = ec[19];
                let eQ = V,
                    eV = eQ?.name ?? eg.connector.connector_name,
                    ez = eg.connector.auth_reason,
                    eB = "missing_link" === ez;
                ec[20] !== eg.connector.connector_id ? (z = (0, y.a)(eg.connector.connector_id), ec[20] = eg.connector.connector_id, ec[21] = z) : z = ec[21];
                let eW = null != z,
                    eK = "oauth_upgrade_required" === ez;
                ec[22] !== eg.connector.connector_id || ec[23] !== eB || ec[24] !== ey ? (B = (0, b.d)({
                    connectorId: eg.connector.connector_id,
                    disableExposureLog: !0,
                    statsigClient: ey
                }), W = eB && null != (0, b.f)(eg.connector.connector_id, B), ec[22] = eg.connector.connector_id, ec[23] = eB, ec[24] = ey, ec[25] = B, ec[26] = W) : (B = ec[25], W = ec[26]);
                let eX = W;
                ec[27] !== eg.connector.connector_id || ec[28] !== eB || ec[29] !== ey ? (K = eB && (0, v.f)({
                    connectorId: eg.connector.connector_id,
                    disableExposureLog: !0,
                    statsigClient: ey
                }), ec[27] = eg.connector.connector_id, ec[28] = eB, ec[29] = ey, ec[30] = K) : K = ec[30];
                let eH = K,
                    eJ = eX || eH;
                ec[31] !== eg.connector.connector_id || ec[32] !== ed || ec[33] !== e_ || ec[34] !== eL || ec[35] !== eF || ec[36] !== ep || ec[37] !== eW ? (H = {
                    kind: "connector-auth-elicitation",
                    conversationId: ed,
                    requestId: ep
                }, X = eL(eg.connector.connector_id, H), J = !eW && (e_ || eF(eg.connector.connector_id, H)), ec[31] = eg.connector.connector_id, ec[32] = ed, ec[33] = e_, ec[34] = eL, ec[35] = eF, ec[36] = ep, ec[37] = eW, ec[38] = X, ec[39] = H, ec[40] = J) : (X = ec[38], H = ec[39], J = ec[40]);
                let eY = J,
                    e$ = D.reconnect;
                eY ? e$ = D.continue : eB ? e$ = D.connect : eK && (e$ = D.updateAccess), ec[41] !== eg.connector.connector_id || ec[42] !== eT || ec[43] !== ed || ec[44] !== eu || ec[45] !== ef || ec[46] !== ep || ec[47] !== H || ec[48] !== eh || ec[49] !== eb ? (Y = e => {
                    ex.current || (ex.current = !0, "decline" === e && eT({
                        appId: eg.connector.connector_id,
                        resumeTarget: H
                    }), (0, g.b)(eh, eu).replyWithMcpServerElicitationResponse(ed, ep, (0, s.b)(e)).then(() => {
                        eT({
                            appId: eg.connector.connector_id,
                            resumeTarget: H
                        })
                    }).catch(() => {
                        ex.current = !1, eb.danger(ef.formatMessage({
                            id: "composer.connectorAuth.responseError",
                            defaultMessage: "Could not submit your response. Please try again",
                            description: "Toast shown when accepting or declining a connector authentication request fails and the user can retry"
                        }), {
                            errorAnalytics: {
                                toastId: "composer.connectorAuth.responseError"
                            }
                        })
                    }))
                }, ec[41] = eg.connector.connector_id, ec[42] = eT, ec[43] = ed, ec[44] = eu, ec[45] = ef, ec[46] = ep, ec[47] = H, ec[48] = eh, ec[49] = eb, ec[50] = Y) : Y = ec[50];
                let eZ = Y;
                ec[51] !== eZ ? ($ = () => {
                    eZ("decline")
                }, ec[51] = eZ, ec[52] = $) : $ = ec[52];
                let e1 = $;
                ec[53] !== eg.connector.connector_id || ec[54] !== eg.connector.install_url || ec[55] !== eg.connector.link_id || ec[56] !== eg.connector.requested_scopes || ec[57] !== eg.url || ec[58] !== ez || ec[59] !== ek || ec[60] !== eV || ec[61] !== B || ec[62] !== eq || ec[63] !== eD || ec[64] !== eU || ec[65] !== ef || ec[66] !== eP || ec[67] !== eG || ec[68] !== em || ec[69] !== eZ || ec[70] !== eW || ec[71] !== H || ec[72] !== eh || ec[73] !== eX || ec[74] !== eH || ec[75] !== eJ || ec[76] !== eb ? (Z = async () => {
                    eW ? ew(!0) : eJ && eP || (eA(!0), await (async () => {
                        if (eJ && null != eG) {
                            let e = {
                                scope: eh,
                                appId: eg.connector.connector_id,
                                browserAccountId: (0, x.c)(eh) ?? void 0,
                                hostId: ek,
                                queryClient: em
                            };
                            if ((await (eX ? (0, _.a)({
                                    ...e,
                                    connectors: B
                                }) : (0, I.a)(e))).length > 0) return void await eD(eG, {
                                forceInApp: !0,
                                googleOAuthBundlePrepared: eX,
                                microsoftOAuthBundlePrepared: eH
                            })
                        }
                        let e = {
                                id: eg.connector.connector_id,
                                installUrl: eG?.installUrl ?? eg.connector.install_url,
                                name: eV
                            },
                            t = !1;
                        switch ((await (0, h.s)({
                                scope: eh,
                                appConnectOptions: {
                                    connectorId: eg.connector.connector_id,
                                    oauthReferrer: "conversation_auth"
                                },
                                app: e,
                                authReason: ez,
                                fallbackUrl: eg.url,
                                linkId: eg.connector.link_id,
                                onOAuthStarted: (n, o) => {
                                    t = !0, eq({
                                        app: e,
                                        oauthFlowCorrelationId: o?.oauthFlowCorrelationId,
                                        redirectUrl: n,
                                        resumeTarget: H
                                    })
                                },
                                openInBrowser: e => {
                                    t ? (0, C.f)({
                                        disposition: "current-tab",
                                        href: e,
                                        initiator: "open_in_browser_bridge",
                                        openTarget: "external-browser"
                                    }) : eU(e)
                                },
                                queryClient: em,
                                requestedScopes: eg.connector.requested_scopes
                            })).kind) {
                            case "requires-mfa":
                            case "requires-connection-form":
                                return void ew(!0);
                            case "connected-directly":
                                return void eZ("accept");
                            case "oauth-started":
                                ev(!0);
                                return;
                            case "browser-fallback":
                                return void ev(!0);
                            case "failed":
                                return void eb.danger(ef.formatMessage({
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
                        eA(!1)
                    }))
                }, ec[53] = eg.connector.connector_id, ec[54] = eg.connector.install_url, ec[55] = eg.connector.link_id, ec[56] = eg.connector.requested_scopes, ec[57] = eg.url, ec[58] = ez, ec[59] = ek, ec[60] = eV, ec[61] = B, ec[62] = eq, ec[63] = eD, ec[64] = eU, ec[65] = ef, ec[66] = eP, ec[67] = eG, ec[68] = em, ec[69] = eZ, ec[70] = eW, ec[71] = H, ec[72] = eh, ec[73] = eX, ec[74] = eH, ec[75] = eJ, ec[76] = eb, ec[77] = Z) : Z = ec[77];
                let e0 = Z;
                ec[78] !== e0 || ec[79] !== eZ || ec[80] !== eY ? (ee = () => {
                    eY ? eZ("accept") : e0()
                }, ec[78] = e0, ec[79] = eZ, ec[80] = eY, ec[81] = ee) : ee = ec[81];
                let e2 = ee;
                if (null != eg.connector.connection_consent) return null;
                if (eB) {
                    let e;
                    ec[84] !== eV ? (e = (0, o.jsx)(p.a, {
                        ...D.missingConnectionDescription,
                        values: {
                            connectorName: eV
                        }
                    }), ec[84] = eV, ec[85] = e) : e = ec[85], et = e
                } else if (eK) {
                    let e;
                    ec[86] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(p.a, {
                        ...D.missingScopesDescription
                    }), ec[86] = e) : e = ec[86], et = e
                } else {
                    let e;
                    ec[87] !== eV ? (e = (0, o.jsx)(p.a, {
                        ...D.reconnectDescription,
                        values: {
                            connectorName: eV
                        }
                    }), ec[87] = eV, ec[88] = e) : e = ec[88], et = e
                }
                let e3 = eQ?.iconUrl,
                    e4 = eQ?.iconUrlDark;
                ec[89] === Symbol.for("react.memo_cache_sentinel") ? (en = (0, o.jsx)(E.a, {
                    className: "text-secondary",
                    "aria-hidden": !1,
                    asset: q.a
                }), ec[89] = en) : en = ec[89], ec[90] !== eg.connector.connector_id || ec[91] !== eV || ec[92] !== e3 || ec[93] !== e4 ? (eo = (0, o.jsx)(k.a, {
                    alt: eV,
                    className: "icon-md rounded-sm object-contain",
                    knownAppId: eg.connector.connector_id,
                    logoUrl: e3,
                    logoDarkUrl: e4,
                    fallback: en
                }), ec[90] = eg.connector.connector_id, ec[91] = eV, ec[92] = e3, ec[93] = e4, ec[94] = eo) : eo = ec[94], ec[95] !== e$ ? (ei = (0, o.jsx)(p.a, {
                    ...e$
                }), ec[95] = e$, ec[96] = ei) : ei = ec[96];
                let e5 = eS || X || eJ && eP;
                return ec[97] !== eV || ec[98] !== et || ec[99] !== e1 || ec[100] !== e2 || ec[101] !== eo || ec[102] !== ei || ec[103] !== e5 ? (ea = (0, o.jsx)(N.a, {
                    icon: eo,
                    title: eV,
                    description: et,
                    primaryActionLabel: ei,
                    isPrimaryActionLoading: e5,
                    onDecline: e1,
                    onSubmit: e2
                }), ec[97] = eV, ec[98] = et, ec[99] = e1, ec[100] = e2, ec[101] = eo, ec[102] = ei, ec[103] = e5, ec[104] = ea) : ea = ec[104], ec[105] !== eg.connector.connector_id || ec[106] !== eg.connector.link_id || ec[107] !== ez || ec[108] !== ek || ec[109] !== eE || ec[110] !== eZ || ec[111] !== eI ? (er = eI ? (0, o.jsx)(f.b, {
                    oauthReferrer: "conversation_auth",
                    connectorId: eg.connector.connector_id,
                    connectorAuth: {
                        authReason: ez,
                        linkId: eg.connector.link_id
                    },
                    hostId: ek,
                    onConnected: () => {
                        eZ("accept"), eE().catch(() => {
                            T.a.warning("Failed to refresh apps after connection", {
                                safe: {
                                    connectorId: eg.connector.connector_id
                                }
                            })
                        })
                    },
                    onOpenChange: e => {
                        e || ew(!1)
                    }
                }) : null, ec[105] = eg.connector.connector_id, ec[106] = eg.connector.link_id, ec[107] = ez, ec[108] = ek, ec[109] = eE, ec[110] = eZ, ec[111] = eI, ec[112] = er) : er = ec[112], ec[113] !== eR || ec[114] !== eN || ec[115] !== ek || ec[116] !== eq || ec[117] !== eZ || ec[118] !== H || ec[119] !== eJ ? (el = eJ ? (0, o.jsx)(j.a, {
                    oauthReferrer: "conversation_auth",
                    app: eN,
                    hostId: ek,
                    onConnected: () => {
                        eZ("accept")
                    },
                    onExternalConnectStarted: () => {
                        ev(!0)
                    },
                    getOAuthResumeContext: () => ({
                        resumeTarget: H
                    }),
                    onOAuthStarted: e => {
                        eq({
                            ...e
                        }), ev(!0)
                    },
                    onOpenChange: e => {
                        e || eR()
                    }
                }) : null, ec[113] = eR, ec[114] = eN, ec[115] = ek, ec[116] = eq, ec[117] = eZ, ec[118] = H, ec[119] = eJ, ec[120] = el) : el = ec[120], ec[121] !== ea || ec[122] !== er || ec[123] !== el ? (es = (0, o.jsxs)(o.Fragment, {
                    children: [ea, er, el]
                }), ec[121] = ea, ec[122] = er, ec[123] = el, ec[124] = es) : es = ec[124], es
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
            R = n("h03E"),
            T = n("Pdbe"),
            N = n("a0aG"),
            q = n("aVTW"),
            D = n("loz7"),
            U = n("ntKy"),
            F = n("Hl7m"),
            L = n("OWtl"),
            G = n("odxv");

        function Q(e) {
            let t, n, a, l, s, d, u, p, h, f, m = (0, i.c)(25),
                {
                    onboarding: y
                } = e,
                b = (0, r.y)(L.a);
            m[0] !== y.plugin ? (t = (0, c.a)(y.plugin), m[0] = y.plugin, m[1] = t) : t = m[1];
            let _ = t;
            m[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, o.jsx)(R.a, {
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
        var V = n("uzkw"),
            z = n("ugfi"),
            B = n("EEop"),
            W = n("cLdu"),
            K = n("ueue"),
            X = n("tSEg"),
            H = n("ecE5"),
            J = n("nvO1"),
            Y = n("WFY2"),
            $ = n("GTV7");
        let Z = (0, P.a)(() => Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(642350)]).then(n.bind(n, "cUuO")).then(e => e.TeamAddPluginsModal));
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
            }) : (0, o.jsx)(Q, {
                onboarding: l
            }), a[4] = l, a[5] = e, a[6] = n) : n = a[6], n
        }

        function eo(e) {
            let t, n, u, S, P, G, Q, en, eo, el, es, ec, ed, eu, ep, eg, eh, ef, em, ey, eb, e_, ev, eI, ew, eS, eA, ex, ek, eC, eE, eP, eM, ej, eO, eR, eT, eN, eq, eD, eU, eF, eL, eG, eQ, eV, ez, eB, eW, eK, eX = (0, i.c)(250),
                {
                    conversationId: eH,
                    hostId: eJ,
                    requestId: eY,
                    suggestion: e$
                } = e,
                eZ = (0, r.y)(L.a),
                e1 = (0, r.z)(x.b),
                e0 = (0, r.z)(k.k),
                e2 = (0, r.z)(X.j);
            eX[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Set, eX[0] = t) : t = eX[0];
            let e3 = (0, d.useRef)(t),
                e4 = (0, p.a)(),
                e5 = (0, r.z)(M.f),
                e7 = (0, a.c)(),
                [e6, e8] = (0, d.useState)(null),
                [e9, te] = (0, d.useState)(!1),
                [tt, tn] = (0, d.useState)(null),
                [to, ti] = (0, d.useState)(null),
                [ta, tr] = (0, d.useState)(null),
                tl = (0, O.c)(eH);
            eX[1] !== eJ ? (n = (0, W.i)(eJ), eX[1] = eJ, eX[2] = n) : n = eX[2];
            let ts = n;
            eX[3] !== eH || eX[4] !== eJ ? (u = {
                hostId: eJ,
                threadId: eH
            }, eX[3] = eH, eX[4] = eJ, eX[5] = u) : u = eX[5];
            let tc = (0, r.x)(f.bc, u),
                td = "install" === e$.suggest_type && eJ === l.Vb && tc?.threadAccess === "shared",
                tu = "install" === e$.suggest_type && eJ === l.Vb && null == tc,
                tp = ts || tl.hostId !== eJ || null == tl.cwd ? void 0 : [tl.cwd],
                tg = !ts;
            eX[6] !== eJ || eX[7] !== tg ? (S = {
                hostId: eJ,
                enabled: tg
            }, eX[6] = eJ, eX[7] = tg, eX[8] = S) : S = eX[8];
            let th = (0, j.a)(S),
                tf = !ts && "plugin" === e$.tool_type && "enable" === e$.suggest_type,
                tm = !tf && "plugin" === e$.tool_type && (ts || th),
                ty = (0, d.useRef)(!1);
            eX[9] !== eH || eX[10] !== eJ || eX[11] !== eY || eX[12] !== eZ ? (P = e => {
                ty.current || (ty.current = !0, (0, h.b)(eZ, eJ).replyWithMcpServerElicitationResponse(eH, eY, (0, s.b)(e)).catch(() => {
                    ty.current = !1
                }))
            }, eX[9] = eH, eX[10] = eJ, eX[11] = eY, eX[12] = eZ, eX[13] = P) : P = eX[13];
            let tb = P,
                t_ = "connector" === e$.tool_type;
            eX[14] !== eJ || eX[15] !== t_ ? (G = {
                enabled: t_,
                hostId: eJ
            }, eX[14] = eJ, eX[15] = t_, eX[16] = G) : G = eX[16];
            let {
                data: tv,
                refetch: tI
            } = (0, w.m)(G);
            eX[17] !== e$.tool_id || eX[18] !== e$.tool_type ? (Q = "connector" === e$.tool_type ? [e$.tool_id] : [], eX[17] = e$.tool_id, eX[18] = e$.tool_type, eX[19] = Q) : Q = eX[19], eX[20] !== eJ || eX[21] !== Q ? (en = {
                appIds: Q,
                hostId: eJ
            }, eX[20] = eJ, eX[21] = Q, eX[22] = en) : en = eX[22];
            let {
                data: tw
            } = (0, I.c)(en);
            eX[23] !== tw ? (eo = void 0 === tw ? [] : tw, eX[23] = tw, eX[24] = eo) : eo = eX[24];
            let tS = eo,
                {
                    data: tA,
                    isLoading: tx,
                    refetch: tk
                } = (0, W.l)({
                    enabled: "plugin" === e$.tool_type && tf && th,
                    hostId: eJ,
                    roots: tp,
                    resolveActiveRoots: tf
                });
            eX[25] !== eY ? (el = () => {
                tn(eY)
            }, eX[25] = eY, eX[26] = el) : el = eX[26], eX[27] !== eJ || eX[28] !== el ? (es = {
                hostId: eJ,
                oauthReferrer: "tool_suggestion",
                onExternalConnectStarted: el
            }, eX[27] = eJ, eX[28] = el, eX[29] = es) : es = eX[29];
            let {
                clearConnectingApp: tC,
                connectingApp: tE,
                handleAppConnectOAuthStarted: tP,
                handleConnectApp: tM,
                handleOpenAppUrl: tj,
                isAppConnectPending: tO
            } = (0, A.a)(es), {
                clearPendingAppConnect: tR,
                getPendingTeamElicitationConnect: tT,
                isAppConnectCallbackClaimed: tN
            } = (0, m.g)();
            eX[30] !== eH || eX[31] !== tT || eX[32] !== eJ || eX[33] !== eY ? (ec = tT(eJ, eH, eY), eX[30] = eH, eX[31] = tT, eX[32] = eJ, eX[33] = eY, eX[34] = ec) : ec = eX[34];
            let tq = ec,
                tD = tq?.resumeTarget.kind === "service-account" ? tq.resumeTarget : null,
                tU = tD?.pendingElicitationReply?.oauth,
                tF = ta === eY || null != tq && (tq.claimed || tU?.kind === "connected") && tU?.kind !== "failed" && tq.oauthState !== to,
                tL = tU?.kind === "connected" ? tq?.oauthState : null,
                tG = tD?.accountId,
                tQ = tD?.pendingElicitationReply?.actorUserId;
            eX[35] !== eH || eX[36] !== ta || eX[37] !== eJ || eX[38] !== eY || eX[39] !== eZ ? (ed = () => {
                if (ta === eY) return eZ.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(f.E, eH) === eJ && t(f.ub, eH)?.some(e => e.id === eY) && (ty.current = !1, tr(null))
                })
            }, eu = [eH, ta, eJ, eY, eZ], eX[35] = eH, eX[36] = ta, eX[37] = eJ, eX[38] = eY, eX[39] = eZ, eX[40] = ed, eX[41] = eu) : (ed = eX[40], eu = eX[41]), (0, d.useEffect)(ed, eu), eX[42] !== eJ ? (ep = {
                hostId: eJ
            }, eX[42] = eJ, eX[43] = ep) : ep = eX[43];
            let {
                setAppEnabled: tV,
                updatingAppId: tz
            } = (0, b.a)(ep);
            eX[44] !== eJ ? (eg = {
                hostId: eJ
            }, eX[44] = eJ, eX[45] = eg) : eg = eX[45];
            let {
                pendingPluginId: tB,
                setPluginEnabled: tW
            } = (0, z.d)(eg), tK = "plugin" === e$.tool_type ? e$ : null, {
                installPlugin: tX,
                status: tH
            } = (0, U.e)(), tJ = (0, r.z)(D.o), tY = "connector" === e$.tool_type ? e$ : null;
            eX[46] !== tY ? (eh = tY?.suggest_type === "install" && null != (0, y.a)(tY.tool_id), eX[46] = tY, eX[47] = eh) : eh = eX[47];
            let t$ = eh,
                tZ = null == tY ? null : {
                    kind: "tool-suggestion-elicitation",
                    conversationId: eH,
                    requestId: eY,
                    response: (0, s.b)("accept")
                },
                t1 = null == tK ? null : tK.remote_plugin_id ?? (ts ? tK.tool_id : null),
                t0 = (0, B.f)({
                    hostId: eJ,
                    pluginId: ts ? t1 : tK?.tool_id ?? null,
                    remotePluginId: t1,
                    roots: tp
                });
            eX[48] !== tm ? (ef = {
                enabled: tm
            }, eX[48] = tm, eX[49] = ef) : ef = eX[49];
            let {
                data: t2,
                isLoading: t3,
                refetch: t4
            } = (0, r.x)(B.k, t0, ef), t5 = null == tY ? null : (void 0 === tv ? [] : tv).find(e => e.id === tY.tool_id) ?? null;
            eX[50] !== tS || eX[51] !== tY ? (em = null == tY ? null : tS.find(e => e.id === tY.tool_id) ?? null, eX[50] = tS, eX[51] = tY, eX[52] = em) : em = eX[52];
            let t7 = em,
                t6 = null == tK ? null : (tA ?? []).find(e => e.plugin.id === tK.tool_id) ?? null;
            tf || (t6 = tm && null != t2 ? (0, K.b)(t2) : null);
            let t8 = er({
                    app: t5,
                    plugin: t6,
                    suggestion: e$
                }),
                t9 = tE?.id === e$.tool_id,
                ne = null != tZ && tO(e$.tool_id, tZ),
                nt = null != tZ && tN(e$.tool_id, tZ),
                nn = (0, U.a)(tH, {
                    hostId: eJ,
                    pluginId: tH?.phase === "loading" ? t1 ?? e$.tool_id : t6?.plugin.id ?? e$.tool_id
                }),
                no = tt === eY || ne,
                ni = "plugin" === e$.tool_type && "install" === e$.suggest_type && "closed" !== tJ.kind && tJ.hostId === eJ && tJ.pendingElicitationReply?.conversationId === eH && tJ.pendingElicitationReply?.requestId === eY,
                na = ts && "plugin" === e$.tool_type && "install" === e$.suggest_type,
                nr = tB === (t6?.plugin.id ?? e$.tool_id);
            "connector" === e$.tool_type ? nr = "install" === e$.suggest_type ? t9 || nt : tz === e$.tool_id : "install" === e$.suggest_type && (nr = nn || ni);
            let nl = !td && (nt || !na && !nr && (t8 || no)),
                ns = tK?.suggest_type !== "install" || nl || e2 ? null : t1 ?? tK.tool_id;
            eX[53] !== e1 || eX[54] !== eH || eX[55] !== eJ || eX[56] !== t3 || eX[57] !== eY || eX[58] !== ns || eX[59] !== e0 ? (ey = null == ns || t3 ? void 0 : JSON.stringify([e1, e0, eJ, eH, eY, ns]), eX[53] = e1, eX[54] = eH, eX[55] = eJ, eX[56] = t3, eX[57] = eY, eX[58] = ns, eX[59] = e0, eX[60] = ey) : ey = eX[60];
            let nc = ey;
            eX[61] !== e1 || eX[62] !== eH || eX[63] !== t2 || eX[64] !== ns || eX[65] !== e0 ? (eb = e => {
                if (null == ns || null == e1 || null == e0 || ty.current) return;
                let t = null == t2 ? null : (0, q.a)(t2, void 0, null);
                (0, V.a)({
                    connectorId: null == t ? void 0 : (0, v.a)(t.id),
                    conversationId: eH,
                    eventType: e,
                    expectedIdentity: {
                        accountId: e1,
                        userId: e0
                    },
                    pluginId: ns,
                    productSurface: "CODEX"
                })
            }, eX[61] = e1, eX[62] = eH, eX[63] = t2, eX[64] = ns, eX[65] = e0, eX[66] = eb) : eb = eX[66];
            let nd = eb,
                nu = tu || null != tK && t3 || e9 || tF || nr || (ts || tf) && "plugin" === e$.tool_type && "enable" === e$.suggest_type && tx,
                np = et.enable;
            nl ? np = et.continue : "install" === e$.suggest_type && (np = et.install);
            let ng = null == t6 ? t7?.name ?? t5?.name ?? e$.tool_name : (0, c.a)(t6),
                nh = "plugin" === e$.tool_type ? t6?.description : t7?.description ?? t5?.description,
                nf = tY?.tool_id,
                nm = t7?.iconUrl,
                ny = t7?.iconUrlDark;
            eX[67] === Symbol.for("react.memo_cache_sentinel") ? (e_ = (0, o.jsx)(E.a, {
                className: "text-secondary",
                "aria-hidden": !1,
                asset: $.a
            }), eX[67] = e_) : e_ = eX[67], eX[68] !== ng || eX[69] !== nf || eX[70] !== nm || eX[71] !== ny ? (ev = (0, o.jsx)(C.a, {
                alt: ng,
                className: "icon-md rounded-sm object-contain",
                knownAppId: nf,
                logoUrl: nm,
                logoDarkUrl: ny,
                fallback: e_
            }), eX[68] = ng, eX[69] = nf, eX[70] = nm, eX[71] = ny, eX[72] = ev) : ev = eX[72];
            let nb = ev;
            if ("plugin" === e$.tool_type) {
                let e, t, n = t6?.logoDarkPath ?? null,
                    i = t6?.logoPath ?? null;
                eX[73] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(R.a, {
                    className: "icon-md text-secondary"
                }), eX[73] = e) : e = eX[73], eX[74] !== e$.tool_name || eX[75] !== n || eX[76] !== i ? (t = (0, o.jsx)(C.a, {
                    alt: e$.tool_name,
                    className: "icon-md rounded-sm object-contain",
                    logoDarkUrl: n,
                    logoUrl: i,
                    fallback: e
                }), eX[74] = e$.tool_name, eX[75] = n, eX[76] = i, eX[77] = t) : t = eX[77], nb = t
            }
            eX[78] !== nd || eX[79] !== tb ? (eI = () => {
                nd("dismiss"), tb("decline")
            }, eX[78] = nd, eX[79] = tb, eX[80] = eI) : eI = eX[80];
            let n_ = eI;
            eX[81] !== tY || eX[82] !== tM || eX[83] !== tj || eX[84] !== t$ || eX[85] !== t5 || eX[86] !== eY ? (ew = async () => {
                (t$ || tn(eY), null != t5) ? await tM(t5): null != tY && (tj(tY.install_url), tn(eY))
            }, eX[81] = tY, eX[82] = tM, eX[83] = tj, eX[84] = t$, eX[85] = t5, eX[86] = eY, eX[87] = ew) : ew = eX[87];
            let nv = ew;
            eX[88] !== eH || eX[89] !== eJ || eX[90] !== ts || eX[91] !== tX || eX[92] !== e4 || eX[93] !== t6 || eX[94] !== tK?.suggestion_id || eX[95] !== t4 || eX[96] !== t1 || eX[97] !== eY || eX[98] !== tm || eX[99] !== e$.tool_name || eX[100] !== e5 ? (eS = async () => {
                let e = t6;
                if (ts && null != t1) e = {
                    displayName: e$.tool_name,
                    remoteMarketplaceName: l.Zc,
                    remotePluginId: t1
                };
                else if (null == e && tm) {
                    te(!0);
                    let {
                        data: t
                    } = await t4().finally(() => {
                        te(!1)
                    });
                    e = null == t ? null : (0, K.b)(t)
                }
                null == e ? e5.danger(e4.formatMessage(et.missingPlugin), {
                    errorAnalytics: {
                        toastId: "inlineToolSuggestionRequestCard.handleInstallPlugin.missingPlugin"
                    }
                }) : tX(e, {
                    elicitationOwnsConnectorRefresh: !0,
                    hostId: eJ,
                    marketplaceAnalytics: {
                        ...N.b.composer,
                        suggestionId: tK?.suggestion_id
                    },
                    origin: "in_conversation_elicitation",
                    pendingElicitationReply: {
                        conversationId: eH,
                        requestId: eY,
                        response: (0, s.b)("accept")
                    }
                })
            }, eX[88] = eH, eX[89] = eJ, eX[90] = ts, eX[91] = tX, eX[92] = e4, eX[93] = t6, eX[94] = tK?.suggestion_id, eX[95] = t4, eX[96] = t1, eX[97] = eY, eX[98] = tm, eX[99] = e$.tool_name, eX[100] = e5, eX[101] = eS) : eS = eX[101];
            let nI = eS;
            eX[102] !== eY ? (eA = async e => {
                let {
                    enabled: t,
                    setEnabled: n
                } = e;
                t && tn(eY);
                try {
                    await n()
                } catch {
                    return
                }
            }, eX[102] = eY, eX[103] = eA) : eA = eX[103];
            let nw = eA;
            eX[104] !== nw || eX[105] !== tV ? (ex = e => {
                let {
                    appId: t,
                    enabled: n
                } = e;
                return nw({
                    enabled: n,
                    setEnabled: () => tV({
                        appId: t,
                        enabled: n
                    })
                })
            }, eX[104] = nw, eX[105] = tV, eX[106] = ex) : ex = eX[106];
            let nS = ex;
            eX[107] !== nw || eX[108] !== ts || eX[109] !== t6 || eX[110] !== tW ? (ek = e => {
                let {
                    pluginDisplayName: t,
                    pluginId: n,
                    enabled: o
                } = e;
                return nw({
                    enabled: o,
                    setEnabled: () => tW({
                        pluginDisplayName: t,
                        pluginId: n,
                        plugin: ts ? t6?.plugin : void 0,
                        enabled: o
                    })
                })
            }, eX[107] = nw, eX[108] = ts, eX[109] = t6, eX[110] = tW, eX[111] = ek) : ek = eX[111];
            let nA = ek;
            eX[112] !== e4 || eX[113] !== na || eX[114] !== tf || eX[115] !== ni || eX[116] !== tk || eX[117] !== t4 || eX[118] !== tb || eX[119] !== e$ || eX[120] !== e5 ? (eC = async () => {
                na || ni || (te(!0), await (async () => {
                    try {
                        let e;
                        if ("connector" === e$.tool_type) return void tb("accept");
                        if (tf) e = (await tk()).data?.find(e => e.plugin.id === e$.tool_id) ?? null;
                        else {
                            let {
                                data: t
                            } = await t4({
                                throwOnError: !0
                            });
                            e = null == t ? null : (0, K.b)(t)
                        }
                        if (!er({
                                app: null,
                                plugin: e,
                                suggestion: e$
                            })) return void e5.danger(e4.formatMessage(et.pluginNotReady, {
                            toolName: e$.tool_name
                        }), {
                            errorAnalytics: {
                                toastId: "inlineToolSuggestionRequestCard.handleContinue.pluginNotReady"
                            }
                        });
                        tb("accept")
                    } catch (e) {
                        Y.a.error("Failed to refresh tool suggestion readiness", {
                            safe: {
                                toolId: e$.tool_id,
                                toolType: e$.tool_type
                            },
                            sensitive: {
                                error: e
                            }
                        }), e5.danger(e4.formatMessage(et.genericLoadError), {
                            errorAnalytics: {
                                toastId: "inlineToolSuggestionRequestCard.handleContinue.genericLoadError"
                            }
                        })
                    }
                })().finally(() => {
                    te(!1)
                }))
            }, eX[112] = e4, eX[113] = na, eX[114] = tf, eX[115] = ni, eX[116] = tk, eX[117] = t4, eX[118] = tb, eX[119] = e$, eX[120] = e5, eX[121] = eC) : eC = eX[121];
            let nx = eC;
            eX[122] !== e4 || eX[123] !== e5 ? (eE = e => {
                e5.danger(e ?? e4.formatMessage(et.genericLoadError), {
                    errorAnalytics: {
                        toastId: "inlineToolSuggestionRequestCard.teamInstall"
                    }
                })
            }, eX[122] = e4, eX[123] = e5, eX[124] = eE) : eE = eX[124];
            let nk = eE;
            eX[125] !== tR || eX[126] !== eH || eX[127] !== eJ || eX[128] !== eY || eX[129] !== eZ || eX[130] !== nk || eX[131] !== tq?.oauthState ? (eP = async (e, t) => {
                let n = void 0 === e ? (0, s.b)("accept") : e,
                    o = t ?? tq?.oauthState;
                if (ty.current) return !0;
                ty.current = !0;
                try {
                    if (await (0, h.b)(eZ, eJ).replyWithMcpServerElicitationResponse(eH, eY, n), await (0, m.i)(eZ, eJ, eH, eY)) return null != o && (tr(eY), tR({
                        oauthState: o,
                        hostId: eJ
                    })), e8(null), !0
                } catch (e) {
                    Y.a.error("Failed to resume the Team chat", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                }
                return ty.current = !1, nk(), !1
            }, eX[125] = tR, eX[126] = eH, eX[127] = eJ, eX[128] = eY, eX[129] = eZ, eX[130] = nk, eX[131] = tq?.oauthState, eX[132] = eP) : eP = eX[132];
            let nC = eP;
            eX[133] !== eH || eX[134] !== to || eX[135] !== eJ || eX[136] !== e7 || eX[137] !== eY || eX[138] !== eZ || eX[139] !== nC || eX[140] !== nk || eX[141] !== tq ? (eM = async (e, t) => {
                let n = tq?.resumeTarget,
                    o = n?.kind === "service-account" ? n.pendingElicitationReply : void 0,
                    i = o?.oauth;
                if (tq?.oauthState !== e || n?.kind !== "service-account" || null == o || i?.kind !== "connected" || to === e) return;
                let a = () => null != o.actorUserId && eZ.get(k.k) === o.actorUserId && eZ.get(k.f) === n.accountId && eZ.get(f.E, eH) === eJ && eZ.get(f.ub, eH)?.some(e => e.id === eY) === !0;
                if (a()) {
                    if ((0, v.a)(tq.appId) !== (0, v.a)(i.connectorId)) {
                        ti(e), nk();
                        return
                    }
                    try {
                        await Promise.all([e7.invalidateQueries({
                            queryKey: ["service-account-plugins", n.accountId, n.serviceAccountId]
                        }), (0, J.e)(eZ, n.accountId)]);
                        let r = await ee(eZ, eJ, eH, [
                            [i.connectorId]
                        ]);
                        if (t() || !a()) return;
                        if (!r) {
                            ti(e), nk();
                            return
                        }
                        await nC(o.response, e) || t() || ti(e)
                    } catch (n) {
                        t() || (Y.a.error("Failed to resume Team app connect elicitation", {
                            safe: {
                                connectorId: i.connectorId
                            },
                            sensitive: {
                                error: n
                            }
                        }), ti(e), nk())
                    }
                }
            }, eX[133] = eH, eX[134] = to, eX[135] = eJ, eX[136] = e7, eX[137] = eY, eX[138] = eZ, eX[139] = nC, eX[140] = nk, eX[141] = tq, eX[142] = eM) : eM = eX[142];
            let nE = (0, d.useEffectEvent)(eM);
            eX[143] !== tL || eX[144] !== eH || eX[145] !== eJ || eX[146] !== eY || eX[147] !== nE || eX[148] !== eZ || eX[149] !== tG || eX[150] !== tQ ? (ej = () => {
                if (null == tL) return;
                let e = !1,
                    t = !1,
                    n = eZ.watch(n => {
                        let {
                            get: o
                        } = n, i = o(f.E, eH), a = o(f.ub, eH), r = o(k.f), l = o(k.k);
                        !t && i === eJ && a?.some(e => e.id === eY) && r === tG && l === tQ && (t = !0, nE(tL, () => e))
                    });
                return () => {
                    e = !0, n()
                }
            }, eX[143] = tL, eX[144] = eH, eX[145] = eJ, eX[146] = eY, eX[147] = nE, eX[148] = eZ, eX[149] = tG, eX[150] = tQ, eX[151] = ej) : ej = eX[151], eX[152] !== tL || eX[153] !== eH || eX[154] !== eJ || eX[155] !== eY || eX[156] !== eZ || eX[157] !== tG || eX[158] !== tQ ? (eO = [eZ, eJ, eH, eY, tL, tG, tQ], eX[152] = tL, eX[153] = eH, eX[154] = eJ, eX[155] = eY, eX[156] = eZ, eX[157] = tG, eX[158] = tQ, eX[159] = eO) : eO = eX[159], (0, d.useEffect)(ej, eO), eX[160] !== eH || eX[161] !== eJ || eX[162] !== e4 || eX[163] !== eZ || eX[164] !== nC || eX[165] !== nk || eX[166] !== e$.tool_name ? (eR = async e => {
                try {
                    if (await ee(eZ, eJ, eH, e)) return void await nC()
                } catch (e) {
                    Y.a.error("Failed to check Team setup", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                }
                nk(e4.formatMessage(et.pluginNotReady, {
                    toolName: e$.tool_name
                }))
            }, eX[160] = eH, eX[161] = eJ, eX[162] = e4, eX[163] = eZ, eX[164] = nC, eX[165] = nk, eX[166] = e$.tool_name, eX[167] = eR) : eR = eX[167];
            let nP = eR;
            eX[168] !== eH || eX[169] !== eJ || eX[170] !== e4 || eX[171] !== t7 || eX[172] !== t1 || eX[173] !== eZ || eX[174] !== nC || eX[175] !== nk || eX[176] !== e$.tool_id || eX[177] !== e$.tool_type ? (eT = async () => {
                try {
                    let e, t = await async function(e) {
                        let t = e.get(k.f);
                        return null == t ? null : null
                    }(eZ);
                    if (null == t) return void nk();
                    if ("connector" === e$.tool_type) {
                        if (null == t7) return void nk();
                        e = {
                            kind: "connector",
                            connectorId: (0, v.a)(e$.tool_id),
                            app: t7
                        }
                    } else {
                        if (null == t1) return void nk(e4.formatMessage(et.missingPlugin));
                        e = {
                            kind: "plugin",
                            pluginId: t1
                        }
                    }
                    let n = {
                        ...t,
                        start: e
                    };
                    if ("connector" === e.kind && await ee(eZ, eJ, eH, [
                            [e.connectorId]
                        ]).catch(ei)) return void await nC();
                    e8(n)
                } catch (e) {
                    Y.a.error("Failed to prepare Team setup", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), nk()
                }
            }, eX[168] = eH, eX[169] = eJ, eX[170] = e4, eX[171] = t7, eX[172] = t1, eX[173] = eZ, eX[174] = nC, eX[175] = nk, eX[176] = e$.tool_id, eX[177] = e$.tool_type, eX[178] = eT) : eT = eX[178];
            let nM = eT;
            eX[179] !== nx || eX[180] !== nv || eX[181] !== nI || eX[182] !== nS || eX[183] !== nA || eX[184] !== nM || eX[185] !== e4 || eX[186] !== td || eX[187] !== tu || eX[188] !== t5 || eX[189] !== t6 || eX[190] !== nd || eX[191] !== nl || eX[192] !== e$.suggest_type || eX[193] !== e$.tool_type || eX[194] !== e5 ? (eN = async () => {
                if (!tu) {
                    if (nd("click"), td) {
                        te(!0), await nM().finally(() => {
                            te(!1)
                        });
                        return
                    }
                    if (nl) return void await nx();
                    if ("connector" === e$.tool_type) return "install" === e$.suggest_type ? void await nv() : null == t5 ? void await nx() : void await nS({
                        appId: t5.id,
                        enabled: !0
                    });
                    if ("install" === e$.suggest_type) return void await nI();
                    if (null == t6) return void e5.danger(e4.formatMessage(et.missingPlugin), {
                        errorAnalytics: {
                            toastId: "inlineToolSuggestionRequestCard.handlePrimaryAction.missingPlugin"
                        }
                    });
                    await nA({
                        pluginDisplayName: (0, c.a)(t6),
                        pluginId: t6.plugin.id,
                        enabled: !0
                    })
                }
            }, eX[179] = nx, eX[180] = nv, eX[181] = nI, eX[182] = nS, eX[183] = nA, eX[184] = nM, eX[185] = e4, eX[186] = td, eX[187] = tu, eX[188] = t5, eX[189] = t6, eX[190] = nd, eX[191] = nl, eX[192] = e$.suggest_type, eX[193] = e$.tool_type, eX[194] = e5, eX[195] = eN) : eN = eX[195];
            let nj = eN;
            eX[196] !== e1 || eX[197] !== nc || eX[198] !== nd || eX[199] !== e0 ? (eq = e => {
                if (!(e?.parentElement == null || null == nc || null == e1 || null == e0 || e3.current.has(nc))) return (0, T.b)(e.parentElement, e3.current, void 0, {
                    loggedPluginIds: e3.current,
                    onViewed: () => nd("viewed")
                })
            }, eX[196] = e1, eX[197] = nc, eX[198] = nd, eX[199] = e0, eX[200] = eq) : eq = eX[200];
            let nO = nl && no;
            return eX[201] !== e$ || eX[202] !== ng || eX[203] !== nO ? (eD = (0, o.jsx)(ea, {
                showContinueTitle: nO,
                suggestion: e$,
                title: ng
            }), eX[201] = e$, eX[202] = ng, eX[203] = nO, eX[204] = eD) : eD = eX[204], eX[205] !== tF || eX[206] !== np ? (eU = tF ? (0, o.jsx)(g.a, {
                id: "settings.mcp.appConnectModal.completingConnectionButton",
                defaultMessage: "Finishing connection…",
                description: "Primary button label shown while an app connection OAuth callback is still completing in the background"
            }) : (0, o.jsx)(g.a, {
                ...np
            }), eX[205] = tF, eX[206] = np, eX[207] = eU) : eU = eX[207], eX[208] !== nj ? (eF = () => {
                nj()
            }, eX[208] = nj, eX[209] = eF) : eF = eX[209], eX[210] !== n_ || eX[211] !== nc || eX[212] !== nu || eX[213] !== nh || eX[214] !== nb || eX[215] !== eq || eX[216] !== eD || eX[217] !== eU || eX[218] !== eF ? (eL = (0, o.jsx)(F.a, {
                ref: eq,
                impressionId: nc,
                icon: nb,
                title: eD,
                description: nh,
                primaryActionLabel: eU,
                isPrimaryActionLoading: nu,
                onDecline: n_,
                onSubmit: eF
            }), eX[210] = n_, eX[211] = nc, eX[212] = nu, eX[213] = nh, eX[214] = nb, eX[215] = eq, eX[216] = eD, eX[217] = eU, eX[218] = eF, eX[219] = eL) : eL = eX[219], eX[220] !== nP || eX[221] !== eH || eX[222] !== eJ || eX[223] !== eY || eX[224] !== e6 ? (eG = null == e6 ? null : (0, o.jsx)(Z, {
                ...e6,
                onClose: () => e8(null),
                onComplete: nP,
                elicitation: {
                    hostId: eJ,
                    reply: {
                        conversationId: eH,
                        requestId: eY,
                        response: (0, s.b)("accept")
                    }
                }
            }), eX[220] = nP, eX[221] = eH, eX[222] = eJ, eX[223] = eY, eX[224] = e6, eX[225] = eG) : eG = eX[225], eX[226] !== tC ? (eQ = e => {
                e || tC()
            }, eX[226] = tC, eX[227] = eQ) : eQ = eX[227], eX[228] !== eJ || eX[229] !== t$ || eX[230] !== e7 || eX[231] !== tI || eX[232] !== eY ? (eV = async () => {
                t$ && tn(eY), await (0, _.a)({
                    hostId: eJ,
                    queryClient: e7,
                    refreshAppsList: async () => (await tI()).data ?? []
                })
            }, eX[228] = eJ, eX[229] = t$, eX[230] = e7, eX[231] = tI, eX[232] = eY, eX[233] = eV) : eV = eX[233], eX[234] !== eH || eX[235] !== eY ? (ez = () => ({
                resumeTarget: {
                    kind: "tool-suggestion-elicitation",
                    conversationId: eH,
                    requestId: eY,
                    response: (0, s.b)("accept")
                }
            }), eX[234] = eH, eX[235] = eY, eX[236] = ez) : ez = eX[236], eX[237] !== tP ? (eB = e => {
                tP({
                    ...e
                })
            }, eX[237] = tP, eX[238] = eB) : eB = eX[238], eX[239] !== tE || eX[240] !== eJ || eX[241] !== eQ || eX[242] !== eV || eX[243] !== ez || eX[244] !== eB ? (eW = (0, o.jsx)(H.a, {
                oauthReferrer: "tool_suggestion",
                app: tE,
                hostId: eJ,
                onOpenChange: eQ,
                onConnected: eV,
                getOAuthResumeContext: ez,
                onOAuthStarted: eB
            }), eX[239] = tE, eX[240] = eJ, eX[241] = eQ, eX[242] = eV, eX[243] = ez, eX[244] = eB, eX[245] = eW) : eW = eX[245], eX[246] !== eL || eX[247] !== eG || eX[248] !== eW ? (eK = (0, o.jsxs)(o.Fragment, {
                children: [eL, eG, eW]
            }), eX[246] = eL, eX[247] = eG, eX[248] = eW, eX[249] = eK) : eK = eX[249], eK
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
                        startChatGptPluginOnboarding: t
                    } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(544914)]).then(n.bind(n, "O68Q"));
                    return t(e, _, w)
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
            return "chatgpt" !== e.type || null == e.conversationId || !n(l.i, e.conversationId) && !n(s.ab, e.conversationId) && !(0, s.zb)(n(s._, e.conversationId))
        });
        n.d(t, {}, {
            a: function(e, t) {
                return null != t.conversationId || ("chatgpt" === t.type ? e.get(a.a, {
                    name: "chatgpt"
                }).isCapable && "allowed" === e.get(r.q).status : t.hostId !== i.Vb || e.get(d.e))
            },
            b: function(e, t) {
                return "chatgpt" === e.type ? (0, c.c)(t) : (0, p.a)((0, i.ce)((0, i.Qe)(t)), e.hostId)
            },
            c: g
        })
    })
};