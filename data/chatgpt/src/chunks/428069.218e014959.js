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
                    projectRoot: (0, o.Ue)(o.ed),
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
                let t, n, d, D, F, L, G, Q, z, B, V, W, K, X, H, J, Y, $, Z, ee, et, en, eo, ei, ea, er, el, es, ec = (0, i.c)(125),
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
                    ek = eu === l.Ub ? O.a : eu;
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
                ec[4] !== eg.connector.connector_id ? (d = [eg.connector.connector_id], ec[4] = eg.connector.connector_id, ec[5] = d) : d = ec[5], ec[6] !== ek || ec[7] !== d ? (D = {
                    appIds: d,
                    hostId: ek
                }, ec[6] = ek, ec[7] = d, ec[8] = D) : D = ec[8];
                let {
                    data: ej
                } = (0, w.c)(D);
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
                    handleConnectApp: eU,
                    handleOpenAppUrl: eD,
                    isAppConnectPending: eF
                } = (0, A.a)(G), {
                    isAppConnectCallbackClaimed: eL
                } = (0, m.g)();
                ec[14] !== eM || ec[15] !== eg.connector.connector_id ? (Q = eM.find(e => e.id === eg.connector.connector_id) ?? null, ec[14] = eM, ec[15] = eg.connector.connector_id, ec[16] = Q) : Q = ec[16];
                let eG = Q;
                ec[17] !== eg.connector.connector_id || ec[18] !== eO ? (z = eO.find(e => e.id === eg.connector.connector_id) ?? null, ec[17] = eg.connector.connector_id, ec[18] = eO, ec[19] = z) : z = ec[19];
                let eQ = z,
                    ez = eQ?.name ?? eg.connector.connector_name,
                    eB = eg.connector.auth_reason,
                    eV = "missing_link" === eB;
                ec[20] !== eg.connector.connector_id ? (B = (0, y.a)(eg.connector.connector_id), ec[20] = eg.connector.connector_id, ec[21] = B) : B = ec[21];
                let eW = null != B,
                    eK = "oauth_upgrade_required" === eB;
                ec[22] !== eg.connector.connector_id || ec[23] !== eV || ec[24] !== ey ? (V = (0, b.d)({
                    connectorId: eg.connector.connector_id,
                    disableExposureLog: !0,
                    statsigClient: ey
                }), W = eV && null != (0, b.f)(eg.connector.connector_id, V), ec[22] = eg.connector.connector_id, ec[23] = eV, ec[24] = ey, ec[25] = V, ec[26] = W) : (V = ec[25], W = ec[26]);
                let eX = W;
                ec[27] !== eg.connector.connector_id || ec[28] !== eV || ec[29] !== ey ? (K = eV && (0, v.f)({
                    connectorId: eg.connector.connector_id,
                    disableExposureLog: !0,
                    statsigClient: ey
                }), ec[27] = eg.connector.connector_id, ec[28] = eV, ec[29] = ey, ec[30] = K) : K = ec[30];
                let eH = K,
                    eJ = eX || eH;
                ec[31] !== eg.connector.connector_id || ec[32] !== ed || ec[33] !== e_ || ec[34] !== eL || ec[35] !== eF || ec[36] !== ep || ec[37] !== eW ? (H = {
                    kind: "connector-auth-elicitation",
                    conversationId: ed,
                    requestId: ep
                }, X = eL(eg.connector.connector_id, H), J = !eW && (e_ || eF(eg.connector.connector_id, H)), ec[31] = eg.connector.connector_id, ec[32] = ed, ec[33] = e_, ec[34] = eL, ec[35] = eF, ec[36] = ep, ec[37] = eW, ec[38] = X, ec[39] = H, ec[40] = J) : (X = ec[38], H = ec[39], J = ec[40]);
                let eY = J,
                    e$ = U.reconnect;
                eY ? e$ = U.continue : eV ? e$ = U.connect : eK && (e$ = U.updateAccess), ec[41] !== eg.connector.connector_id || ec[42] !== eT || ec[43] !== ed || ec[44] !== eu || ec[45] !== ef || ec[46] !== ep || ec[47] !== H || ec[48] !== eh || ec[49] !== eb ? (Y = e => {
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
                ec[53] !== eg.connector.connector_id || ec[54] !== eg.connector.install_url || ec[55] !== eg.connector.link_id || ec[56] !== eg.connector.requested_scopes || ec[57] !== eg.url || ec[58] !== eB || ec[59] !== ek || ec[60] !== ez || ec[61] !== V || ec[62] !== eq || ec[63] !== eU || ec[64] !== eD || ec[65] !== ef || ec[66] !== eP || ec[67] !== eG || ec[68] !== em || ec[69] !== eZ || ec[70] !== eW || ec[71] !== H || ec[72] !== eh || ec[73] !== eX || ec[74] !== eH || ec[75] !== eJ || ec[76] !== eb ? (Z = async () => {
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
                                    connectors: V
                                }) : (0, I.a)(e))).length > 0) return void await eU(eG, {
                                forceInApp: !0,
                                googleOAuthBundlePrepared: eX,
                                microsoftOAuthBundlePrepared: eH
                            })
                        }
                        let e = {
                                id: eg.connector.connector_id,
                                installUrl: eG?.installUrl ?? eg.connector.install_url,
                                name: ez
                            },
                            t = !1;
                        switch ((await (0, h.s)({
                                scope: eh,
                                appConnectOptions: {
                                    connectorId: eg.connector.connector_id,
                                    oauthReferrer: "conversation_auth"
                                },
                                app: e,
                                authReason: eB,
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
                                    }) : eD(e)
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
                }, ec[53] = eg.connector.connector_id, ec[54] = eg.connector.install_url, ec[55] = eg.connector.link_id, ec[56] = eg.connector.requested_scopes, ec[57] = eg.url, ec[58] = eB, ec[59] = ek, ec[60] = ez, ec[61] = V, ec[62] = eq, ec[63] = eU, ec[64] = eD, ec[65] = ef, ec[66] = eP, ec[67] = eG, ec[68] = em, ec[69] = eZ, ec[70] = eW, ec[71] = H, ec[72] = eh, ec[73] = eX, ec[74] = eH, ec[75] = eJ, ec[76] = eb, ec[77] = Z) : Z = ec[77];
                let e0 = Z;
                ec[78] !== e0 || ec[79] !== eZ || ec[80] !== eY ? (ee = () => {
                    eY ? eZ("accept") : e0()
                }, ec[78] = e0, ec[79] = eZ, ec[80] = eY, ec[81] = ee) : ee = ec[81];
                let e2 = ee;
                if (null != eg.connector.connection_consent) return null;
                if (eV) {
                    let e;
                    ec[84] !== ez ? (e = (0, o.jsx)(p.a, {
                        ...U.missingConnectionDescription,
                        values: {
                            connectorName: ez
                        }
                    }), ec[84] = ez, ec[85] = e) : e = ec[85], et = e
                } else if (eK) {
                    let e;
                    ec[86] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(p.a, {
                        ...U.missingScopesDescription
                    }), ec[86] = e) : e = ec[86], et = e
                } else {
                    let e;
                    ec[87] !== ez ? (e = (0, o.jsx)(p.a, {
                        ...U.reconnectDescription,
                        values: {
                            connectorName: ez
                        }
                    }), ec[87] = ez, ec[88] = e) : e = ec[88], et = e
                }
                let e3 = eQ?.iconUrl,
                    e5 = eQ?.iconUrlDark;
                ec[89] === Symbol.for("react.memo_cache_sentinel") ? (en = (0, o.jsx)(E.a, {
                    className: "text-secondary",
                    "aria-hidden": !1,
                    asset: q.a
                }), ec[89] = en) : en = ec[89], ec[90] !== eg.connector.connector_id || ec[91] !== ez || ec[92] !== e3 || ec[93] !== e5 ? (eo = (0, o.jsx)(k.a, {
                    alt: ez,
                    className: "icon-md rounded-sm object-contain",
                    knownAppId: eg.connector.connector_id,
                    logoUrl: e3,
                    logoDarkUrl: e5,
                    fallback: en
                }), ec[90] = eg.connector.connector_id, ec[91] = ez, ec[92] = e3, ec[93] = e5, ec[94] = eo) : eo = ec[94], ec[95] !== e$ ? (ei = (0, o.jsx)(p.a, {
                    ...e$
                }), ec[95] = e$, ec[96] = ei) : ei = ec[96];
                let e4 = eS || X || eJ && eP;
                return ec[97] !== ez || ec[98] !== et || ec[99] !== e1 || ec[100] !== e2 || ec[101] !== eo || ec[102] !== ei || ec[103] !== e4 ? (ea = (0, o.jsx)(N.a, {
                    icon: eo,
                    title: ez,
                    description: et,
                    primaryActionLabel: ei,
                    isPrimaryActionLoading: e4,
                    onDecline: e1,
                    onSubmit: e2
                }), ec[97] = ez, ec[98] = et, ec[99] = e1, ec[100] = e2, ec[101] = eo, ec[102] = ei, ec[103] = e4, ec[104] = ea) : ea = ec[104], ec[105] !== eg.connector.connector_id || ec[106] !== eg.connector.link_id || ec[107] !== eB || ec[108] !== ek || ec[109] !== eE || ec[110] !== eZ || ec[111] !== eI ? (er = eI ? (0, o.jsx)(f.b, {
                    oauthReferrer: "conversation_auth",
                    connectorId: eg.connector.connector_id,
                    connectorAuth: {
                        authReason: eB,
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
                }) : null, ec[105] = eg.connector.connector_id, ec[106] = eg.connector.link_id, ec[107] = eB, ec[108] = ek, ec[109] = eE, ec[110] = eZ, ec[111] = eI, ec[112] = er) : er = ec[112], ec[113] !== eR || ec[114] !== eN || ec[115] !== ek || ec[116] !== eq || ec[117] !== eZ || ec[118] !== H || ec[119] !== eJ ? (el = eJ ? (0, o.jsx)(j.a, {
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
            U = n("loz7"),
            D = n("ntKy"),
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
        var z = n("uzkw"),
            B = n("ugfi"),
            V = n("EEop"),
            W = n("cLdu"),
            K = n("ueue"),
            X = n("tSEg"),
            H = n("ecE5"),
            J = n("nvO1"),
            Y = n("WFY2"),
            $ = n("GTV7");
        let Z = (0, P.a)(() => Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(954244), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(284470), n.e(642350)]).then(n.bind(n, "cUuO")).then(e => e.TeamAddPluginsModal));
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
            let t, n, u, S, P, G, Q, en, eo, el, es, ec, ed, eu, ep, eg, eh, ef, em, ey, eb, e_, ev, eI, ew, eS, eA, ex, ek, eC, eE, eP, eM, ej, eO, eR, eT, eN, eq, eU, eD, eF, eL, eG, eQ, ez, eB, eV, eW, eK, eX, eH, eJ = (0, i.c)(254),
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
                tp = "install" === e1.suggest_type && e$ === l.Ub && tu?.threadAccess === "shared",
                tg = "install" === e1.suggest_type && e$ === l.Ub && null == tu,
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
            eJ[17] !== tw ? (Q = void 0 === tw ? [] : tw, eJ[17] = tw, eJ[18] = Q) : Q = eJ[18];
            let tA = Q;
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
                handleAppConnectOAuthStarted: tR,
                handleConnectApp: tT,
                handleOpenAppUrl: tN,
                isAppConnectPending: tq
            } = (0, A.a)(ed), {
                clearPendingAppConnect: tU,
                getPendingTeamElicitationConnect: tD,
                isAppConnectCallbackClaimed: tF
            } = (0, m.g)();
            eJ[34] !== eY || eJ[35] !== tD || eJ[36] !== e$ || eJ[37] !== eZ ? (eu = tD(e$, eY, eZ), eJ[34] = eY, eJ[35] = tD, eJ[36] = e$, eJ[37] = eZ, eJ[38] = eu) : eu = eJ[38];
            let tL = eu,
                tG = tL?.resumeTarget.kind === "service-account" ? tL.resumeTarget : null,
                tQ = tG?.pendingElicitationReply?.oauth,
                tz = tl === eZ || null != tL && (tL.claimed || tQ?.kind === "connected") && tQ?.kind !== "failed" && tL.oauthState !== ta,
                tB = tQ?.kind === "connected" ? tL?.oauthState : null,
                tV = tG?.accountId,
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
            } = (0, B.d)(ef), tY = "plugin" === e1.tool_type ? e1 : null, {
                installPlugin: t$,
                status: tZ
            } = (0, D.e)(), t1 = (0, r.z)(U.o), t0 = "connector" === e1.tool_type ? e1 : null;
            eJ[50] !== t0 ? (em = t0?.suggest_type === "install" && null != (0, y.a)(t0.tool_id), eJ[50] = t0, eJ[51] = em) : em = eJ[51];
            let t2 = em,
                t3 = null == t0 ? null : {
                    kind: "tool-suggestion-elicitation",
                    conversationId: eY,
                    requestId: eZ,
                    response: (0, s.b)("accept")
                },
                t5 = null == tY ? null : tY.remote_plugin_id ?? (td ? tY.tool_id : null),
                t4 = (0, V.g)({
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
            } = (0, r.x)(V.l, t4, ey), t9 = null == t0 ? null : tA.find(e => e.id === t0.tool_id) ?? null;
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
                nr = (0, D.a)(tZ, {
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
            }, eJ[65] = e2, eJ[66] = eY, eJ[67] = t7, eJ[68] = np, eJ[69] = e3, eJ[70] = ev) : ev = eJ[70];
            let nh = ev,
                nf = tg || null != tY && t6 || tt || tz || nd || (td || ty) && "plugin" === e1.tool_type && "enable" === e1.suggest_type && tE,
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
                eJ[77] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(R.a, {
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
            eJ[85] !== t0 || eJ[86] !== tT || eJ[87] !== tN || eJ[88] !== t2 || eJ[89] !== t9 || eJ[90] !== eZ ? (eA = async () => {
                (t2 || ti(eZ), null != t9) ? await tT(t9): null != t0 && (tN(t0.install_url), ti(eZ))
            }, eJ[85] = t0, eJ[86] = tT, eJ[87] = tN, eJ[88] = t2, eJ[89] = t9, eJ[90] = eZ, eJ[91] = eA) : eA = eJ[91];
            let nA = eA;
            eJ[92] !== eY || eJ[93] !== e$ || eJ[94] !== td || eJ[95] !== t$ || eJ[96] !== e7 || eJ[97] !== nt || eJ[98] !== tY?.suggestion_id || eJ[99] !== t8 || eJ[100] !== t5 || eJ[101] !== eZ || eJ[102] !== tb || eJ[103] !== e1.tool_name || eJ[104] !== e6 ? (ex = async () => {
                let e = nt;
                if (td && null != t5) e = {
                    displayName: e1.tool_name,
                    remoteMarketplaceName: l.Yc,
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
            eJ[129] !== tU || eJ[130] !== eY || eJ[131] !== e$ || eJ[132] !== eZ || eJ[133] !== e0 || eJ[134] !== nM || eJ[135] !== tL?.oauthState ? (ej = async (e, t) => {
                let n = void 0 === e ? (0, s.b)("accept") : e,
                    o = t ?? tL?.oauthState;
                if (t_.current) return !0;
                t_.current = !0;
                try {
                    if (await (0, h.b)(e0, e$).replyWithMcpServerElicitationResponse(eY, eZ, n), await (0, m.i)(e0, e$, eY, eZ)) return null != o && (ts(eZ), tU({
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
            }, eJ[129] = tU, eJ[130] = eY, eJ[131] = e$, eJ[132] = eZ, eJ[133] = e0, eJ[134] = nM, eJ[135] = tL?.oauthState, eJ[136] = ej) : ej = eJ[136];
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
            eJ[147] !== tB || eJ[148] !== eY || eJ[149] !== e$ || eJ[150] !== eZ || eJ[151] !== nO || eJ[152] !== e0 || eJ[153] !== tV || eJ[154] !== tW ? (eR = () => {
                if (null == tB) return;
                let e = !1,
                    t = !1,
                    n = e0.watch(n => {
                        let {
                            get: o
                        } = n, i = o(f.E, eY), a = o(f.ub, eY), r = o(k.f), l = o(k.k);
                        !t && i === e$ && a?.some(e => e.id === eZ) && r === tV && l === tW && (t = !0, nO(tB, () => e))
                    });
                return () => {
                    e = !0, n()
                }
            }, eJ[147] = tB, eJ[148] = eY, eJ[149] = e$, eJ[150] = eZ, eJ[151] = nO, eJ[152] = e0, eJ[153] = tV, eJ[154] = tW, eJ[155] = eR) : eR = eJ[155], eJ[156] !== tB || eJ[157] !== eY || eJ[158] !== e$ || eJ[159] !== eZ || eJ[160] !== e0 || eJ[161] !== tV || eJ[162] !== tW ? (eT = [e0, e$, eY, eZ, tB, tV, tW], eJ[156] = tB, eJ[157] = eY, eJ[158] = e$, eJ[159] = eZ, eJ[160] = e0, eJ[161] = tV, eJ[162] = tW, eJ[163] = eT) : eT = eJ[163], (0, d.useEffect)(eR, eT), eJ[164] !== eY || eJ[165] !== e$ || eJ[166] !== e7 || eJ[167] !== e0 || eJ[168] !== nj || eJ[169] !== nM || eJ[170] !== e1.tool_name ? (eN = async e => {
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
            let nR = eN;
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
            let nT = eq;
            eJ[183] !== nP || eJ[184] !== nA || eJ[185] !== nx || eJ[186] !== nC || eJ[187] !== nE || eJ[188] !== nT || eJ[189] !== e7 || eJ[190] !== tp || eJ[191] !== tg || eJ[192] !== t9 || eJ[193] !== nt || eJ[194] !== nh || eJ[195] !== nu || eJ[196] !== e1.suggest_type || eJ[197] !== e1.tool_type || eJ[198] !== e6 ? (eU = async () => {
                if (!tg) {
                    if (nh("click"), tp) {
                        tn(!0), await nT().finally(() => {
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
            }, eJ[183] = nP, eJ[184] = nA, eJ[185] = nx, eJ[186] = nC, eJ[187] = nE, eJ[188] = nT, eJ[189] = e7, eJ[190] = tp, eJ[191] = tg, eJ[192] = t9, eJ[193] = nt, eJ[194] = nh, eJ[195] = nu, eJ[196] = e1.suggest_type, eJ[197] = e1.tool_type, eJ[198] = e6, eJ[199] = eU) : eU = eJ[199];
            let nN = eU;
            eJ[200] !== e2 || eJ[201] !== ng || eJ[202] !== nh || eJ[203] !== e3 ? (eD = e => {
                if (!(e?.parentElement == null || null == ng || null == e2 || null == e3 || e4.current.has(ng))) return (0, T.b)(e.parentElement, e4.current, void 0, {
                    loggedPluginIds: e4.current,
                    onViewed: () => nh("viewed")
                })
            }, eJ[200] = e2, eJ[201] = ng, eJ[202] = nh, eJ[203] = e3, eJ[204] = eD) : eD = eJ[204];
            let nq = nu && nl;
            return eJ[205] !== e1 || eJ[206] !== ny || eJ[207] !== nq ? (eF = (0, o.jsx)(ea, {
                showContinueTitle: nq,
                suggestion: e1,
                title: ny
            }), eJ[205] = e1, eJ[206] = ny, eJ[207] = nq, eJ[208] = eF) : eF = eJ[208], eJ[209] !== tz || eJ[210] !== nm ? (eL = tz ? (0, o.jsx)(g.a, {
                id: "settings.mcp.appConnectModal.completingConnectionButton",
                defaultMessage: "Finishing connection…",
                description: "Primary button label shown while an app connection OAuth callback is still completing in the background"
            }) : (0, o.jsx)(g.a, {
                ...nm
            }), eJ[209] = tz, eJ[210] = nm, eJ[211] = eL) : eL = eJ[211], eJ[212] !== nN ? (eG = () => {
                nN()
            }, eJ[212] = nN, eJ[213] = eG) : eG = eJ[213], eJ[214] !== nS || eJ[215] !== ng || eJ[216] !== nf || eJ[217] !== nb || eJ[218] !== nw || eJ[219] !== eD || eJ[220] !== eF || eJ[221] !== eL || eJ[222] !== eG ? (eQ = (0, o.jsx)(F.a, {
                ref: eD,
                impressionId: ng,
                icon: nw,
                title: eF,
                description: nb,
                primaryActionLabel: eL,
                isPrimaryActionLoading: nf,
                onDecline: nS,
                onSubmit: eG
            }), eJ[214] = nS, eJ[215] = ng, eJ[216] = nf, eJ[217] = nb, eJ[218] = nw, eJ[219] = eD, eJ[220] = eF, eJ[221] = eL, eJ[222] = eG, eJ[223] = eQ) : eQ = eJ[223], eJ[224] !== nR || eJ[225] !== eY || eJ[226] !== e$ || eJ[227] !== eZ || eJ[228] !== e9 ? (ez = null == e9 ? null : (0, o.jsx)(Z, {
                ...e9,
                onClose: () => te(null),
                onComplete: nR,
                elicitation: {
                    hostId: e$,
                    reply: {
                        conversationId: eY,
                        requestId: eZ,
                        response: (0, s.b)("accept")
                    }
                }
            }), eJ[224] = nR, eJ[225] = eY, eJ[226] = e$, eJ[227] = eZ, eJ[228] = e9, eJ[229] = ez) : ez = eJ[229], eJ[230] !== tj ? (eB = e => {
                e || tj()
            }, eJ[230] = tj, eJ[231] = eB) : eB = eJ[231], eJ[232] !== e$ || eJ[233] !== t2 || eJ[234] !== e8 || eJ[235] !== tS || eJ[236] !== eZ ? (eV = async () => {
                t2 && ti(eZ), await (0, _.a)({
                    hostId: e$,
                    queryClient: e8,
                    refreshAppsList: async () => (await tS()).data ?? []
                })
            }, eJ[232] = e$, eJ[233] = t2, eJ[234] = e8, eJ[235] = tS, eJ[236] = eZ, eJ[237] = eV) : eV = eJ[237], eJ[238] !== eY || eJ[239] !== eZ ? (eW = () => ({
                resumeTarget: {
                    kind: "tool-suggestion-elicitation",
                    conversationId: eY,
                    requestId: eZ,
                    response: (0, s.b)("accept")
                }
            }), eJ[238] = eY, eJ[239] = eZ, eJ[240] = eW) : eW = eJ[240], eJ[241] !== tR ? (eK = e => {
                tR({
                    ...e
                })
            }, eJ[241] = tR, eJ[242] = eK) : eK = eJ[242], eJ[243] !== tO || eJ[244] !== e$ || eJ[245] !== eB || eJ[246] !== eV || eJ[247] !== eW || eJ[248] !== eK ? (eX = (0, o.jsx)(H.a, {
                oauthReferrer: "tool_suggestion",
                app: tO,
                hostId: e$,
                onOpenChange: eB,
                onConnected: eV,
                getOAuthResumeContext: eW,
                onOAuthStarted: eK
            }), eJ[243] = tO, eJ[244] = e$, eJ[245] = eB, eJ[246] = eV, eJ[247] = eW, eJ[248] = eK, eJ[249] = eX) : eX = eJ[249], eJ[250] !== eQ || eJ[251] !== ez || eJ[252] !== eX ? (eH = (0, o.jsxs)(o.Fragment, {
                children: [eQ, ez, eX]
            }), eJ[250] = eQ, eJ[251] = ez, eJ[252] = eX, eJ[253] = eH) : eH = eJ[253], eH
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
                    } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(954244), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(284470), n.e(544914)]).then(n.bind(n, "O68Q"));
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
                if (_.hostId === o.Ub) {
                    let t = await (0, c.b)(e, _.hostId, {
                        input: [{
                            type: "text",
                            text: w,
                            text_elements: []
                        }, ...S],
                        cwd: o.ed,
                        workspaceRoots: [o.ed],
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
                }).isCapable && "allowed" === e.get(r.q).status : t.hostId !== i.Ub || e.get(d.e))
            },
            b: function(e, t) {
                return "chatgpt" === e.type ? (0, c.c)(t) : (0, p.a)((0, i.be)((0, i.Qe)(t)), e.hostId)
            },
            c: g
        })
    })
};