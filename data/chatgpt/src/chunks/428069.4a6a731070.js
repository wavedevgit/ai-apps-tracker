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
                return u[0] !== p || u[1] !== f ? (t = f, n = p, s = [...l(t), n], u[0] = p, u[1] = f, u[2] = s) : s = u[2], u[3] !== f ? (c = async () => await a.appServices.ambientSuggestions?.hasAccessibleAndEnabledApp({
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
                        children: f,
                        loading: h,
                        onOpenChange: m
                    } = e,
                    [b, y] = (0, r.useState)(null),
                    _ = (0, l.c)();
                g[0] !== b || g[1] !== _ ? (t = null == b ? void 0 : {
                    height: `min(${b}px, calc((100dvh - 2rem) / ${_}))`
                }, g[0] = b, g[1] = _, g[2] = t) : t = g[2], g[3] !== t ? (n = {
                    "aria-describedby": void 0,
                    style: t
                }, g[3] = t, g[4] = n) : n = g[4], g[5] !== b || g[6] !== h ? (c = e => {
                    !h && null == b && null != e && e.offsetHeight > 0 && y(e.offsetHeight)
                }, g[5] = b, g[6] = h, g[7] = c) : c = g[7];
                let v = (h || null != b) && "h-full",
                    I = null != b && "overflow-y-auto";
                return g[8] !== v || g[9] !== I ? (d = (0, a.b)(v, I), g[8] = v, g[9] = I, g[10] = d) : d = g[10], g[11] !== f || g[12] !== c || g[13] !== d ? (u = (0, o.jsx)("div", {
                    ref: c,
                    className: d,
                    children: f
                }), g[11] = f, g[12] = c, g[13] = d, g[14] = u) : u = g[14], g[15] !== m || g[16] !== n || g[17] !== u ? (p = (0, o.jsx)(s.b, {
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
            let t, n, c, u, p, g, f, h, m, b, y, _, v = (0, i.c)(27),
                {
                    isPending: I,
                    embedded: w,
                    isFetching: S,
                    onOpenChange: x,
                    onRetry: A
                } = e,
                k = void 0 !== w && w,
                C = k ? "h2" : l.e,
                E = k ? "p" : l.d;
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
            }), v[8] = n, v[9] = u, v[10] = p) : p = v[10], v[11] !== x ? (g = () => x(!1), v[11] = x, v[12] = g) : g = v[12], v[13] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, o.jsx)(a.a, {
                id: "beacons.connectApp.loadError.button.cancel",
                defaultMessage: "Cancel",
                description: "Button label in the app connection dialog for closing it after connector details requested by the user failed to load. Keep this short; there are no placeholders."
            }), v[13] = f) : f = v[13], v[14] !== S || v[15] !== g ? (h = (0, o.jsx)(r.a, {
                color: "secondary",
                disabled: S,
                onClick: g,
                type: "button",
                children: f
            }), v[14] = S, v[15] = g, v[16] = h) : h = v[16], v[17] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, o.jsx)(a.a, {
                id: "beacons.connectApp.loadError.button.retry",
                defaultMessage: "Retry",
                description: "Button label in the app connection dialog for retrying connector details that failed to load after an end user requested an app connection. Keep this short; there are no placeholders."
            }), v[17] = m) : m = v[17], v[18] !== S || v[19] !== A ? (b = (0, o.jsx)(r.a, {
                color: "primary",
                loading: S,
                onClick: A,
                type: "button",
                children: m
            }), v[18] = S, v[19] = A, v[20] = b) : b = v[20], v[21] !== b || v[22] !== h ? (y = (0, o.jsxs)(s.c, {
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
            r = n("iTtm"),
            l = n("Qgfj"),
            s = n("Wf1j"),
            c = n("VVkm"),
            d = n("Dgwo"),
            u = n("biqr"),
            p = n("OiCI"),
            g = n("SGsN"),
            f = n("a4MG"),
            h = n("sLlu"),
            m = n("OWtl"),
            b = n("kfGJ"),
            y = n("OMIV"),
            _ = n("WFY2");
        let v = (0, l.f)({
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
                let t, n, l, I, w, S, x, A, k = (0, o.c)(36),
                    C = e?.hostId ?? b.a,
                    E = (0, r.y)(m.a),
                    P = (0, r.z)(p.a),
                    M = (0, i.c)(),
                    j = (0, h.b)(),
                    O = (0, s.a)();
                k[0] !== P || k[1] !== C || k[2] !== E ? (t = (0, u.g)(C, (0, y.b)(E, "403472035"), P ?? void 0), k[0] = P, k[1] = C, k[2] = E, k[3] = t) : t = k[3];
                let T = t;
                k[4] !== T || k[5] !== C || k[6] !== j ? (n = async () => {
                    await Promise.all([j((0, c.b)(C)), j(T), j([...f.b, C]), j([...f.c, C]), j(f.f), j(["user-saved-config"])])
                }, k[4] = T, k[5] = C, k[6] = j, k[7] = n) : n = k[7];
                let R = n;
                k[8] !== C || k[9] !== M || k[10] !== E ? (l = async e => {
                    let {
                        appId: t,
                        enabled: n
                    } = e, o = await (0, f.l)(E, M, C);
                    if ("okOverridden" === (await (0, d.b)(E, C).sendRequest("config/batchWrite", {
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
                }, k[8] = C, k[9] = M, k[10] = E, k[11] = l) : l = k[11], k[12] !== T || k[13] !== M ? (I = async e => {
                    let {
                        appId: t,
                        enabled: n
                    } = e;
                    await M.cancelQueries({
                        queryKey: T
                    });
                    let o = M.getQueryData(T);
                    return o && M.setQueryData(T, o.map(e => e.id !== t || e.isEnabled === n ? e : {
                        ...e,
                        isEnabled: n
                    })), {
                        previousApps: o
                    }
                }, k[12] = T, k[13] = M, k[14] = I) : I = k[14], k[15] !== T || k[16] !== O || k[17] !== j || k[18] !== M || k[19] !== E ? (w = async (e, t, n) => {
                    let {
                        appId: o,
                        appName: i,
                        enabled: a
                    } = t;
                    if (a && n?.previousApps?.find(e => e.id === o)?.isEnabled === !1) {
                        await j(T);
                        let e = M.getQueryData(T)?.find(e => e.id === o);
                        if (e?.isEnabled === !1) throw Error("App remains disabled after updating its configuration")
                    }
                    let r = i ?? M.getQueryData(T)?.find(e => e.id === o)?.name ?? o;
                    E.get(g.f).success(O.formatMessage(a ? v.enableSuccess : v.disableSuccess, {
                        appName: r
                    }))
                }, k[15] = T, k[16] = O, k[17] = j, k[18] = M, k[19] = E, k[20] = w) : w = k[20], k[21] !== T || k[22] !== O || k[23] !== M || k[24] !== E ? (S = (e, t, n) => {
                    _.a.error("Failed to update app enablement", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), E.get(g.f).danger(O.formatMessage(v.updateError), {
                        errorAnalytics: {
                            toastId: "appsAvailability.onError.updateError"
                        }
                    }), n?.previousApps && M.setQueryData(T, n.previousApps)
                }, k[21] = T, k[22] = O, k[23] = M, k[24] = E, k[25] = S) : S = k[25], k[26] !== R || k[27] !== l || k[28] !== I || k[29] !== w || k[30] !== S ? (x = {
                    mutationFn: l,
                    onMutate: I,
                    onSuccess: w,
                    onError: S,
                    onSettled: R
                }, k[26] = R, k[27] = l, k[28] = I, k[29] = w, k[30] = S, k[31] = x) : x = k[31];
                let N = (0, a.a)(x),
                    q = N.isPending ? N.variables?.appId ?? null : null;
                return k[32] !== N.isPending || k[33] !== N.mutateAsync || k[34] !== q ? (A = {
                    setAppEnabled: N.mutateAsync,
                    isUpdating: N.isPending,
                    updatingAppId: q
                }, k[32] = N.isPending, k[33] = N.mutateAsync, k[34] = q, k[35] = A) : A = k[35], A
            }
        })
    }),
    oxjR: (function(e, t, n) {
        var o = n("xnQm"),
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
                    projectRoot: (0, o.Se)(o.dd),
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
            r = n("iTtm"),
            l = n("xnQm"),
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
            y = n("CMv2"),
            _ = n("QSD9"),
            v = n("pxeg"),
            I = n("PraM"),
            w = n("BQbE"),
            S = n("biqr"),
            x = n("yxN2"),
            A = n("OiCI"),
            k = n("FvYa"),
            C = n("Ot7V"),
            E = n("HOLv"),
            P = n("SGsN"),
            M = n("OWtl"),
            j = n("ecE5"),
            O = n("kfGJ"),
            T = n("hZax"),
            R = n("WFY2"),
            N = n("Hl7m"),
            q = n("zTIf");
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
                let t, n, d, U, F, L, Q, G, V, z, W, B, K, H, J, X, Y, $, Z, ee, et, en, eo, ei, ea, er, el, es, ec = (0, i.c)(123),
                    {
                        conversationId: ed,
                        hostId: eu,
                        requestId: ep,
                        auth: eg
                    } = e,
                    ef = (0, r.y)(M.a),
                    eh = (0, u.a)(),
                    em = (0, a.c)(),
                    eb = (0, T.k)(),
                    ey = (0, r.z)(P.f),
                    [e_, ev] = (0, c.useState)(!1),
                    [eI, ew] = (0, c.useState)(!1),
                    [eS, ex] = (0, c.useState)(!1),
                    eA = (0, c.useRef)(!1),
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
                } = (0, w.a)(U);
                ec[9] !== ej ? (F = void 0 === ej ? [] : ej, ec[9] = ej, ec[10] = F) : F = ec[10];
                let eO = F;
                ec[11] === Symbol.for("react.memo_cache_sentinel") ? (L = () => {
                    ev(!0)
                }, ec[11] = L) : L = ec[11], ec[12] !== eu ? (Q = {
                    hostId: eu,
                    oauthReferrer: "conversation_auth",
                    onExternalConnectStarted: L
                }, ec[12] = eu, ec[13] = Q) : Q = ec[13];
                let {
                    clearConnectingApp: eT,
                    clearPendingAppConnect: eR,
                    connectingApp: eN,
                    handleAppConnectOAuthStarted: eq,
                    handleConnectApp: eD,
                    handleOpenAppUrl: eU,
                    isAppConnectPending: eF
                } = (0, x.a)(Q), {
                    isAppConnectCallbackClaimed: eL
                } = (0, m.g)();
                ec[14] !== eM || ec[15] !== eg.connector.connector_id ? (G = eM.find(e => e.id === eg.connector.connector_id) ?? null, ec[14] = eM, ec[15] = eg.connector.connector_id, ec[16] = G) : G = ec[16];
                let eQ = G;
                ec[17] !== eg.connector.connector_id || ec[18] !== eO ? (V = eO.find(e => e.id === eg.connector.connector_id) ?? null, ec[17] = eg.connector.connector_id, ec[18] = eO, ec[19] = V) : V = ec[19];
                let eG = V,
                    eV = eG?.name ?? eg.connector.connector_name,
                    ez = eg.connector.auth_reason,
                    eW = "missing_link" === ez;
                ec[20] !== eg.connector.connector_id ? (z = (0, b.a)(eg.connector.connector_id), ec[20] = eg.connector.connector_id, ec[21] = z) : z = ec[21];
                let eB = null != z,
                    eK = "oauth_upgrade_required" === ez;
                ec[22] !== eg.connector.connector_id || ec[23] !== eW || ec[24] !== eb ? (W = (0, y.d)({
                    connectorId: eg.connector.connector_id,
                    disableExposureLog: !0,
                    statsigClient: eb
                }), B = eW && null != (0, y.f)(eg.connector.connector_id, W), ec[22] = eg.connector.connector_id, ec[23] = eW, ec[24] = eb, ec[25] = W, ec[26] = B) : (W = ec[25], B = ec[26]);
                let eH = B;
                ec[27] !== eg.connector.connector_id || ec[28] !== eW || ec[29] !== eb ? (K = eW && (0, v.f)({
                    connectorId: eg.connector.connector_id,
                    disableExposureLog: !0,
                    statsigClient: eb
                }), ec[27] = eg.connector.connector_id, ec[28] = eW, ec[29] = eb, ec[30] = K) : K = ec[30];
                let eJ = K,
                    eX = eH || eJ;
                ec[31] !== eg.connector.connector_id || ec[32] !== ed || ec[33] !== e_ || ec[34] !== eL || ec[35] !== eF || ec[36] !== ep || ec[37] !== eB ? (J = {
                    kind: "connector-auth-elicitation",
                    conversationId: ed,
                    requestId: ep
                }, H = eL(eg.connector.connector_id, J), X = !eB && (e_ || eF(eg.connector.connector_id, J)), ec[31] = eg.connector.connector_id, ec[32] = ed, ec[33] = e_, ec[34] = eL, ec[35] = eF, ec[36] = ep, ec[37] = eB, ec[38] = H, ec[39] = J, ec[40] = X) : (H = ec[38], J = ec[39], X = ec[40]);
                let eY = X,
                    e$ = eY ? D.continue : eW ? D.connect : eK ? D.updateAccess : D.reconnect;
                ec[41] !== eg.connector.connector_id || ec[42] !== eR || ec[43] !== ed || ec[44] !== eu || ec[45] !== eh || ec[46] !== ep || ec[47] !== J || ec[48] !== ef || ec[49] !== ey ? (Y = e => {
                    eA.current || (eA.current = !0, "decline" === e && eR({
                        appId: eg.connector.connector_id,
                        resumeTarget: J
                    }), (0, g.b)(ef, eu).replyWithMcpServerElicitationResponse(ed, ep, (0, s.b)(e)).then(() => {
                        eR({
                            appId: eg.connector.connector_id,
                            resumeTarget: J
                        })
                    }).catch(() => {
                        eA.current = !1, ey.danger(eh.formatMessage({
                            id: "composer.connectorAuth.responseError",
                            defaultMessage: "Could not submit your response. Please try again",
                            description: "Toast shown when accepting or declining a connector authentication request fails and the user can retry"
                        }), {
                            errorAnalytics: {
                                toastId: "composer.connectorAuth.responseError"
                            }
                        })
                    }))
                }, ec[41] = eg.connector.connector_id, ec[42] = eR, ec[43] = ed, ec[44] = eu, ec[45] = eh, ec[46] = ep, ec[47] = J, ec[48] = ef, ec[49] = ey, ec[50] = Y) : Y = ec[50];
                let eZ = Y;
                ec[51] !== eZ ? ($ = () => {
                    eZ("decline")
                }, ec[51] = eZ, ec[52] = $) : $ = ec[52];
                let e1 = $;
                ec[53] !== eg.connector.connector_id || ec[54] !== eg.connector.install_url || ec[55] !== eg.connector.link_id || ec[56] !== eg.connector.requested_scopes || ec[57] !== eg.url || ec[58] !== ez || ec[59] !== ek || ec[60] !== eV || ec[61] !== W || ec[62] !== eq || ec[63] !== eD || ec[64] !== eU || ec[65] !== eh || ec[66] !== eP || ec[67] !== eQ || ec[68] !== em || ec[69] !== eZ || ec[70] !== eB || ec[71] !== J || ec[72] !== ef || ec[73] !== eH || ec[74] !== eJ || ec[75] !== eX || ec[76] !== ey ? (Z = async () => {
                    eB ? ew(!0) : eX && eP || (ex(!0), await (async () => {
                        if (eX && null != eQ) {
                            let e = {
                                scope: ef,
                                appId: eg.connector.connector_id,
                                browserAccountId: (0, A.c)(ef) ?? void 0,
                                hostId: ek,
                                queryClient: em
                            };
                            if ((await (eH ? (0, _.a)({
                                    ...e,
                                    connectors: W
                                }) : (0, I.a)(e))).length > 0) return void await eD(eQ, {
                                forceInApp: !0,
                                googleOAuthBundlePrepared: eH,
                                microsoftOAuthBundlePrepared: eJ
                            })
                        }
                        let e = {
                                id: eg.connector.connector_id,
                                installUrl: eQ?.installUrl ?? eg.connector.install_url,
                                name: eV
                            },
                            t = !1;
                        switch ((await (0, f.t)({
                                scope: ef,
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
                                        resumeTarget: J
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
                                return void ey.danger(eh.formatMessage({
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
                        ex(!1)
                    }))
                }, ec[53] = eg.connector.connector_id, ec[54] = eg.connector.install_url, ec[55] = eg.connector.link_id, ec[56] = eg.connector.requested_scopes, ec[57] = eg.url, ec[58] = ez, ec[59] = ek, ec[60] = eV, ec[61] = W, ec[62] = eq, ec[63] = eD, ec[64] = eU, ec[65] = eh, ec[66] = eP, ec[67] = eQ, ec[68] = em, ec[69] = eZ, ec[70] = eB, ec[71] = J, ec[72] = ef, ec[73] = eH, ec[74] = eJ, ec[75] = eX, ec[76] = ey, ec[77] = Z) : Z = ec[77];
                let e0 = Z;
                ec[78] !== e0 || ec[79] !== eZ || ec[80] !== eY ? (ee = () => {
                    eY ? eZ("accept") : e0()
                }, ec[78] = e0, ec[79] = eZ, ec[80] = eY, ec[81] = ee) : ee = ec[81];
                let e2 = ee;
                if (null != eg.connector.connection_consent) return null;
                if (eW) {
                    let e;
                    ec[82] !== eV ? (e = (0, o.jsx)(p.a, {
                        ...D.missingConnectionDescription,
                        values: {
                            connectorName: eV
                        }
                    }), ec[82] = eV, ec[83] = e) : e = ec[83], et = e
                } else if (eK) {
                    let e;
                    ec[84] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(p.a, {
                        ...D.missingScopesDescription
                    }), ec[84] = e) : e = ec[84], et = e
                } else {
                    let e;
                    ec[85] !== eV ? (e = (0, o.jsx)(p.a, {
                        ...D.reconnectDescription,
                        values: {
                            connectorName: eV
                        }
                    }), ec[85] = eV, ec[86] = e) : e = ec[86], et = e
                }
                let e3 = eG?.iconUrl,
                    e4 = eG?.iconUrlDark;
                ec[87] === Symbol.for("react.memo_cache_sentinel") ? (en = (0, o.jsx)(E.a, {
                    className: "text-secondary",
                    "aria-hidden": !1,
                    asset: q.a
                }), ec[87] = en) : en = ec[87], ec[88] !== eg.connector.connector_id || ec[89] !== eV || ec[90] !== e3 || ec[91] !== e4 ? (eo = (0, o.jsx)(k.a, {
                    alt: eV,
                    className: "icon-md rounded-sm object-contain",
                    knownAppId: eg.connector.connector_id,
                    logoUrl: e3,
                    logoDarkUrl: e4,
                    fallback: en
                }), ec[88] = eg.connector.connector_id, ec[89] = eV, ec[90] = e3, ec[91] = e4, ec[92] = eo) : eo = ec[92], ec[93] !== e$ ? (ei = (0, o.jsx)(p.a, {
                    ...e$
                }), ec[93] = e$, ec[94] = ei) : ei = ec[94];
                let e5 = eS || H || eX && eP;
                return ec[95] !== eV || ec[96] !== et || ec[97] !== e1 || ec[98] !== e2 || ec[99] !== eo || ec[100] !== ei || ec[101] !== e5 ? (ea = (0, o.jsx)(N.a, {
                    icon: eo,
                    title: eV,
                    description: et,
                    primaryActionLabel: ei,
                    isPrimaryActionLoading: e5,
                    onDecline: e1,
                    onSubmit: e2
                }), ec[95] = eV, ec[96] = et, ec[97] = e1, ec[98] = e2, ec[99] = eo, ec[100] = ei, ec[101] = e5, ec[102] = ea) : ea = ec[102], ec[103] !== eg.connector.connector_id || ec[104] !== eg.connector.link_id || ec[105] !== ez || ec[106] !== ek || ec[107] !== eE || ec[108] !== eZ || ec[109] !== eI ? (er = eI ? (0, o.jsx)(h.b, {
                    oauthReferrer: "conversation_auth",
                    connectorId: eg.connector.connector_id,
                    connectorAuth: {
                        authReason: ez,
                        linkId: eg.connector.link_id
                    },
                    hostId: ek,
                    onConnected: () => {
                        eZ("accept"), eE().catch(() => {
                            R.a.warning("Failed to refresh apps after connection", {
                                safe: {
                                    connectorId: eg.connector.connector_id
                                }
                            })
                        })
                    },
                    onOpenChange: e => {
                        e || ew(!1)
                    }
                }) : null, ec[103] = eg.connector.connector_id, ec[104] = eg.connector.link_id, ec[105] = ez, ec[106] = ek, ec[107] = eE, ec[108] = eZ, ec[109] = eI, ec[110] = er) : er = ec[110], ec[111] !== eT || ec[112] !== eN || ec[113] !== ek || ec[114] !== eq || ec[115] !== eZ || ec[116] !== J || ec[117] !== eX ? (el = eX ? (0, o.jsx)(j.a, {
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
                        resumeTarget: J
                    }),
                    onOAuthStarted: e => {
                        eq({
                            ...e
                        }), ev(!0)
                    },
                    onOpenChange: e => {
                        e || eT()
                    }
                }) : null, ec[111] = eT, ec[112] = eN, ec[113] = ek, ec[114] = eq, ec[115] = eZ, ec[116] = J, ec[117] = eX, ec[118] = el) : el = ec[118], ec[119] !== ea || ec[120] !== er || ec[121] !== el ? (es = (0, o.jsxs)(o.Fragment, {
                    children: [ea, er, el]
                }), ec[119] = ea, ec[120] = er, ec[121] = el, ec[122] = es) : es = ec[122], es
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
            r = n("iTtm"),
            l = n("xnQm"),
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
            I = n("BQbE"),
            w = n("biqr"),
            S = n("PYah"),
            x = n("yxN2"),
            A = n("OiCI"),
            k = n("Cslg"),
            C = n("FvYa"),
            E = n("HOLv"),
            P = n("Bbed"),
            M = n("SGsN"),
            j = n("rO8L"),
            O = n("an0a"),
            T = n("aaty"),
            R = n("Pdbe"),
            N = n("a0aG"),
            q = n("aVTW"),
            D = n("loz7"),
            U = n("ntKy"),
            F = n("Hl7m"),
            L = n("OWtl"),
            Q = n("odxv");

        function G(e) {
            let t, n, a, l, s, d, u, p, f, h, m = (0, i.c)(25),
                {
                    onboarding: b
                } = e,
                y = (0, r.y)(L.a);
            m[0] !== b.plugin ? (t = (0, c.a)(b.plugin), m[0] = b.plugin, m[1] = t) : t = m[1];
            let _ = t;
            m[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, o.jsx)(T.a, {
                className: "icon-md text-secondary"
            }), m[2] = n) : n = m[2], m[3] !== b.plugin.logoDarkPath || m[4] !== b.plugin.logoPath || m[5] !== _ ? (a = (0, o.jsx)(C.a, {
                alt: _,
                className: "icon-md rounded-sm object-contain",
                logoDarkUrl: b.plugin.logoDarkPath,
                logoUrl: b.plugin.logoPath,
                fallback: n
            }), m[3] = b.plugin.logoDarkPath, m[4] = b.plugin.logoPath, m[5] = _, m[6] = a) : a = m[6], m[7] !== _ ? (l = (0, o.jsx)(g.a, {
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
            let v = "setup" === b.submittingAction,
                I = "skip" === b.submittingAction;
            return m[13] !== b || m[14] !== y ? (p = () => void(0, Q.b)(y, b, "skip"), f = () => void(0, Q.b)(y, b, "setup"), m[13] = b, m[14] = y, m[15] = p, m[16] = f) : (p = m[15], f = m[16]), m[17] !== p || m[18] !== f || m[19] !== a || m[20] !== l || m[21] !== s || m[22] !== v || m[23] !== I ? (h = (0, o.jsx)(F.a, {
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
        var V = n("uzkw"),
            z = n("ugfi"),
            W = n("EEop"),
            B = n("cLdu"),
            K = n("ueue"),
            H = n("tSEg"),
            J = n("ecE5"),
            X = n("nvO1"),
            Y = n("WFY2"),
            $ = n("zTIf");
        let Z = (0, P.a)(() => Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(366917)]).then(n.bind(n, "cUuO")).then(e => e.TeamAddPluginsModal));
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
            let l = (0, r.x)(Q.a, t);
            return a[4] !== l || a[5] !== e ? (n = null == l ? (0, o.jsx)(eo, {
                ...e
            }) : (0, o.jsx)(G, {
                onboarding: l
            }), a[4] = l, a[5] = e, a[6] = n) : n = a[6], n
        }

        function eo(e) {
            let t, n, u, S, P, Q, G, en, eo, el, es, ec, ed, eu, ep, eg, ef, eh, em, eb, ey, e_, ev, eI, ew, eS, ex, eA, ek, eC, eE, eP, eM, ej, eO, eT, eR, eN, eq, eD, eU, eF, eL, eQ, eG, eV, ez, eW, eB, eK, eH = (0, i.c)(250),
                {
                    conversationId: eJ,
                    hostId: eX,
                    requestId: eY,
                    suggestion: e$
                } = e,
                eZ = (0, r.y)(L.a),
                e1 = (0, r.z)(A.b),
                e0 = (0, r.z)(k.k),
                e2 = (0, r.z)(H.j);
            eH[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Set, eH[0] = t) : t = eH[0];
            let e3 = (0, d.useRef)(t),
                e4 = (0, p.a)(),
                e5 = (0, r.z)(M.f),
                e6 = (0, a.c)(),
                [e8, e7] = (0, d.useState)(null),
                [e9, te] = (0, d.useState)(!1),
                [tt, tn] = (0, d.useState)(null),
                [to, ti] = (0, d.useState)(null),
                [ta, tr] = (0, d.useState)(null),
                tl = (0, O.c)(eJ);
            eH[1] !== eX ? (n = (0, B.i)(eX), eH[1] = eX, eH[2] = n) : n = eH[2];
            let ts = n;
            eH[3] !== eJ || eH[4] !== eX ? (u = {
                hostId: eX,
                threadId: eJ
            }, eH[3] = eJ, eH[4] = eX, eH[5] = u) : u = eH[5];
            let tc = (0, r.x)(h.$b, u),
                td = "install" === e$.suggest_type && eX === l.Vb && tc?.threadAccess === "shared",
                tu = "install" === e$.suggest_type && eX === l.Vb && null == tc,
                tp = ts || tl.hostId !== eX || null == tl.cwd ? void 0 : [tl.cwd],
                tg = !ts;
            eH[6] !== eX || eH[7] !== tg ? (S = {
                hostId: eX,
                enabled: tg
            }, eH[6] = eX, eH[7] = tg, eH[8] = S) : S = eH[8];
            let tf = (0, j.a)(S),
                th = !ts && "plugin" === e$.tool_type && "enable" === e$.suggest_type,
                tm = !th && "plugin" === e$.tool_type && (ts || tf),
                tb = (0, d.useRef)(!1);
            eH[9] !== eJ || eH[10] !== eX || eH[11] !== eY || eH[12] !== eZ ? (P = e => {
                tb.current || (tb.current = !0, (0, f.b)(eZ, eX).replyWithMcpServerElicitationResponse(eJ, eY, (0, s.b)(e)).catch(() => {
                    tb.current = !1
                }))
            }, eH[9] = eJ, eH[10] = eX, eH[11] = eY, eH[12] = eZ, eH[13] = P) : P = eH[13];
            let ty = P,
                t_ = "connector" === e$.tool_type;
            eH[14] !== eX || eH[15] !== t_ ? (Q = {
                enabled: t_,
                hostId: eX
            }, eH[14] = eX, eH[15] = t_, eH[16] = Q) : Q = eH[16];
            let {
                data: tv,
                refetch: tI
            } = (0, w.m)(Q);
            eH[17] !== e$.tool_id || eH[18] !== e$.tool_type ? (G = "connector" === e$.tool_type ? [e$.tool_id] : [], eH[17] = e$.tool_id, eH[18] = e$.tool_type, eH[19] = G) : G = eH[19], eH[20] !== eX || eH[21] !== G ? (en = {
                appIds: G,
                hostId: eX
            }, eH[20] = eX, eH[21] = G, eH[22] = en) : en = eH[22];
            let {
                data: tw
            } = (0, I.a)(en);
            eH[23] !== tw ? (eo = void 0 === tw ? [] : tw, eH[23] = tw, eH[24] = eo) : eo = eH[24];
            let tS = eo,
                {
                    data: tx,
                    isLoading: tA,
                    refetch: tk
                } = (0, B.l)({
                    enabled: "plugin" === e$.tool_type && th && tf,
                    hostId: eX,
                    roots: tp,
                    resolveActiveRoots: th
                });
            eH[25] !== eY ? (el = () => {
                tn(eY)
            }, eH[25] = eY, eH[26] = el) : el = eH[26], eH[27] !== eX || eH[28] !== el ? (es = {
                hostId: eX,
                oauthReferrer: "tool_suggestion",
                onExternalConnectStarted: el
            }, eH[27] = eX, eH[28] = el, eH[29] = es) : es = eH[29];
            let {
                clearConnectingApp: tC,
                connectingApp: tE,
                handleAppConnectOAuthStarted: tP,
                handleConnectApp: tM,
                handleOpenAppUrl: tj,
                isAppConnectPending: tO
            } = (0, x.a)(es), {
                clearPendingAppConnect: tT,
                getPendingTeamElicitationConnect: tR,
                isAppConnectCallbackClaimed: tN
            } = (0, m.g)();
            eH[30] !== eJ || eH[31] !== tR || eH[32] !== eX || eH[33] !== eY ? (ec = tR(eX, eJ, eY), eH[30] = eJ, eH[31] = tR, eH[32] = eX, eH[33] = eY, eH[34] = ec) : ec = eH[34];
            let tq = ec,
                tD = tq?.resumeTarget.kind === "service-account" ? tq.resumeTarget : null,
                tU = tD?.pendingElicitationReply?.oauth,
                tF = ta === eY || null != tq && (tq.claimed || tU?.kind === "connected") && tU?.kind !== "failed" && tq.oauthState !== to,
                tL = tU?.kind === "connected" ? tq?.oauthState : null,
                tQ = tD?.accountId,
                tG = tD?.pendingElicitationReply?.actorUserId;
            eH[35] !== eJ || eH[36] !== ta || eH[37] !== eX || eH[38] !== eY || eH[39] !== eZ ? (ed = () => {
                if (ta === eY) return eZ.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(h.E, eJ) === eX && t(h.ub, eJ)?.some(e => e.id === eY) && (tb.current = !1, tr(null))
                })
            }, eu = [eJ, ta, eX, eY, eZ], eH[35] = eJ, eH[36] = ta, eH[37] = eX, eH[38] = eY, eH[39] = eZ, eH[40] = ed, eH[41] = eu) : (ed = eH[40], eu = eH[41]), (0, d.useEffect)(ed, eu), eH[42] !== eX ? (ep = {
                hostId: eX
            }, eH[42] = eX, eH[43] = ep) : ep = eH[43];
            let {
                setAppEnabled: tV,
                updatingAppId: tz
            } = (0, y.a)(ep);
            eH[44] !== eX ? (eg = {
                hostId: eX
            }, eH[44] = eX, eH[45] = eg) : eg = eH[45];
            let {
                pendingPluginId: tW,
                setPluginEnabled: tB
            } = (0, z.d)(eg), tK = "plugin" === e$.tool_type ? e$ : null, {
                installPlugin: tH,
                status: tJ
            } = (0, U.e)(), tX = (0, r.z)(D.o), tY = "connector" === e$.tool_type ? e$ : null;
            eH[46] !== tY ? (ef = tY?.suggest_type === "install" && null != (0, b.a)(tY.tool_id), eH[46] = tY, eH[47] = ef) : ef = eH[47];
            let t$ = ef,
                tZ = null == tY ? null : {
                    kind: "tool-suggestion-elicitation",
                    conversationId: eJ,
                    requestId: eY,
                    response: (0, s.b)("accept")
                },
                t1 = null == tK ? null : tK.remote_plugin_id ?? (ts ? tK.tool_id : null),
                t0 = (0, W.f)({
                    hostId: eX,
                    pluginId: ts ? t1 : tK?.tool_id ?? null,
                    remotePluginId: t1,
                    roots: tp
                });
            eH[48] !== tm ? (eh = {
                enabled: tm
            }, eH[48] = tm, eH[49] = eh) : eh = eH[49];
            let {
                data: t2,
                isLoading: t3,
                refetch: t4
            } = (0, r.x)(W.k, t0, eh), t5 = null == tY ? null : (void 0 === tv ? [] : tv).find(e => e.id === tY.tool_id) ?? null;
            eH[50] !== tS || eH[51] !== tY ? (em = null == tY ? null : tS.find(e => e.id === tY.tool_id) ?? null, eH[50] = tS, eH[51] = tY, eH[52] = em) : em = eH[52];
            let t6 = em,
                t8 = null == tK ? null : (tx ?? []).find(e => e.plugin.id === tK.tool_id) ?? null;
            th || (t8 = tm && null != t2 ? (0, K.b)(t2) : null);
            let t7 = er({
                    app: t5,
                    plugin: t8,
                    suggestion: e$
                }),
                t9 = tE?.id === e$.tool_id,
                ne = null != tZ && tO(e$.tool_id, tZ),
                nt = null != tZ && tN(e$.tool_id, tZ),
                nn = (0, U.a)(tJ, {
                    hostId: eX,
                    pluginId: tJ?.phase === "loading" ? t1 ?? e$.tool_id : t8?.plugin.id ?? e$.tool_id
                }),
                no = tt === eY || ne,
                ni = "plugin" === e$.tool_type && "install" === e$.suggest_type && "closed" !== tX.kind && tX.hostId === eX && tX.pendingElicitationReply?.conversationId === eJ && tX.pendingElicitationReply?.requestId === eY,
                na = ts && "plugin" === e$.tool_type && "install" === e$.suggest_type,
                nr = tW === (t8?.plugin.id ?? e$.tool_id);
            "connector" === e$.tool_type ? nr = "install" === e$.suggest_type ? t9 || nt : tz === e$.tool_id : "install" === e$.suggest_type && (nr = nn || ni);
            let nl = !td && (nt || !na && !nr && (t7 || no)),
                ns = tK?.suggest_type !== "install" || nl || e2 ? null : t1 ?? tK.tool_id;
            eH[53] !== e1 || eH[54] !== eJ || eH[55] !== eX || eH[56] !== t3 || eH[57] !== eY || eH[58] !== ns || eH[59] !== e0 ? (eb = null == ns || t3 ? void 0 : JSON.stringify([e1, e0, eX, eJ, eY, ns]), eH[53] = e1, eH[54] = eJ, eH[55] = eX, eH[56] = t3, eH[57] = eY, eH[58] = ns, eH[59] = e0, eH[60] = eb) : eb = eH[60];
            let nc = eb;
            eH[61] !== e1 || eH[62] !== eJ || eH[63] !== t2 || eH[64] !== ns || eH[65] !== e0 ? (ey = e => {
                if (null == ns || null == e1 || null == e0 || tb.current) return;
                let t = null == t2 ? null : (0, q.a)(t2, void 0, null);
                (0, V.a)({
                    connectorId: null == t ? void 0 : (0, v.a)(t.id),
                    conversationId: eJ,
                    eventType: e,
                    expectedIdentity: {
                        accountId: e1,
                        userId: e0
                    },
                    pluginId: ns,
                    productSurface: "CODEX"
                })
            }, eH[61] = e1, eH[62] = eJ, eH[63] = t2, eH[64] = ns, eH[65] = e0, eH[66] = ey) : ey = eH[66];
            let nd = ey,
                nu = tu || null != tK && t3 || e9 || tF || nr || (ts || th) && "plugin" === e$.tool_type && "enable" === e$.suggest_type && tA,
                np = et.enable;
            nl ? np = et.continue : "install" === e$.suggest_type && (np = et.install);
            let ng = null == t8 ? t6?.name ?? t5?.name ?? e$.tool_name : (0, c.a)(t8),
                nf = "plugin" === e$.tool_type ? t8?.description : t6?.description ?? t5?.description,
                nh = tY?.tool_id,
                nm = t6?.iconUrl,
                nb = t6?.iconUrlDark;
            eH[67] === Symbol.for("react.memo_cache_sentinel") ? (e_ = (0, o.jsx)(E.a, {
                className: "text-secondary",
                "aria-hidden": !1,
                asset: $.a
            }), eH[67] = e_) : e_ = eH[67], eH[68] !== ng || eH[69] !== nh || eH[70] !== nm || eH[71] !== nb ? (ev = (0, o.jsx)(C.a, {
                alt: ng,
                className: "icon-md rounded-sm object-contain",
                knownAppId: nh,
                logoUrl: nm,
                logoDarkUrl: nb,
                fallback: e_
            }), eH[68] = ng, eH[69] = nh, eH[70] = nm, eH[71] = nb, eH[72] = ev) : ev = eH[72];
            let ny = ev;
            if ("plugin" === e$.tool_type) {
                let e, t, n = t8?.logoDarkPath ?? null,
                    i = t8?.logoPath ?? null;
                eH[73] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(T.a, {
                    className: "icon-md text-secondary"
                }), eH[73] = e) : e = eH[73], eH[74] !== e$.tool_name || eH[75] !== n || eH[76] !== i ? (t = (0, o.jsx)(C.a, {
                    alt: e$.tool_name,
                    className: "icon-md rounded-sm object-contain",
                    logoDarkUrl: n,
                    logoUrl: i,
                    fallback: e
                }), eH[74] = e$.tool_name, eH[75] = n, eH[76] = i, eH[77] = t) : t = eH[77], ny = t
            }
            eH[78] !== nd || eH[79] !== ty ? (eI = () => {
                nd("dismiss"), ty("decline")
            }, eH[78] = nd, eH[79] = ty, eH[80] = eI) : eI = eH[80];
            let n_ = eI;
            eH[81] !== tY || eH[82] !== tM || eH[83] !== tj || eH[84] !== t$ || eH[85] !== t5 || eH[86] !== eY ? (ew = async () => {
                (t$ || tn(eY), null != t5) ? await tM(t5): null != tY && (tj(tY.install_url), tn(eY))
            }, eH[81] = tY, eH[82] = tM, eH[83] = tj, eH[84] = t$, eH[85] = t5, eH[86] = eY, eH[87] = ew) : ew = eH[87];
            let nv = ew;
            eH[88] !== eJ || eH[89] !== eX || eH[90] !== ts || eH[91] !== tH || eH[92] !== e4 || eH[93] !== t8 || eH[94] !== tK?.suggestion_id || eH[95] !== t4 || eH[96] !== t1 || eH[97] !== eY || eH[98] !== tm || eH[99] !== e$.tool_name || eH[100] !== e5 ? (eS = async () => {
                let e = t8;
                if (ts && null != t1) e = {
                    displayName: e$.tool_name,
                    remoteMarketplaceName: l.Xc,
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
                }) : tH(e, {
                    elicitationOwnsConnectorRefresh: !0,
                    hostId: eX,
                    marketplaceAnalytics: {
                        ...N.b.composer,
                        suggestionId: tK?.suggestion_id
                    },
                    origin: "in_conversation_elicitation",
                    pendingElicitationReply: {
                        conversationId: eJ,
                        requestId: eY,
                        response: (0, s.b)("accept")
                    }
                })
            }, eH[88] = eJ, eH[89] = eX, eH[90] = ts, eH[91] = tH, eH[92] = e4, eH[93] = t8, eH[94] = tK?.suggestion_id, eH[95] = t4, eH[96] = t1, eH[97] = eY, eH[98] = tm, eH[99] = e$.tool_name, eH[100] = e5, eH[101] = eS) : eS = eH[101];
            let nI = eS;
            eH[102] !== eY ? (ex = async e => {
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
            }, eH[102] = eY, eH[103] = ex) : ex = eH[103];
            let nw = ex;
            eH[104] !== nw || eH[105] !== tV ? (eA = e => {
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
            }, eH[104] = nw, eH[105] = tV, eH[106] = eA) : eA = eH[106];
            let nS = eA;
            eH[107] !== nw || eH[108] !== ts || eH[109] !== t8 || eH[110] !== tB ? (ek = e => {
                let {
                    pluginDisplayName: t,
                    pluginId: n,
                    enabled: o
                } = e;
                return nw({
                    enabled: o,
                    setEnabled: () => tB({
                        pluginDisplayName: t,
                        pluginId: n,
                        plugin: ts ? t8?.plugin : void 0,
                        enabled: o
                    })
                })
            }, eH[107] = nw, eH[108] = ts, eH[109] = t8, eH[110] = tB, eH[111] = ek) : ek = eH[111];
            let nx = ek;
            eH[112] !== e4 || eH[113] !== na || eH[114] !== th || eH[115] !== ni || eH[116] !== tk || eH[117] !== t4 || eH[118] !== ty || eH[119] !== e$ || eH[120] !== e5 ? (eC = async () => {
                na || ni || (te(!0), await (async () => {
                    try {
                        let e;
                        if ("connector" === e$.tool_type) return void ty("accept");
                        if (th) e = (await tk()).data?.find(e => e.plugin.id === e$.tool_id) ?? null;
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
                        ty("accept")
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
            }, eH[112] = e4, eH[113] = na, eH[114] = th, eH[115] = ni, eH[116] = tk, eH[117] = t4, eH[118] = ty, eH[119] = e$, eH[120] = e5, eH[121] = eC) : eC = eH[121];
            let nA = eC;
            eH[122] !== e4 || eH[123] !== e5 ? (eE = e => {
                e5.danger(e ?? e4.formatMessage(et.genericLoadError), {
                    errorAnalytics: {
                        toastId: "inlineToolSuggestionRequestCard.teamInstall"
                    }
                })
            }, eH[122] = e4, eH[123] = e5, eH[124] = eE) : eE = eH[124];
            let nk = eE;
            eH[125] !== tT || eH[126] !== eJ || eH[127] !== eX || eH[128] !== eY || eH[129] !== eZ || eH[130] !== nk || eH[131] !== tq?.oauthState ? (eP = async (e, t) => {
                let n = void 0 === e ? (0, s.b)("accept") : e,
                    o = t ?? tq?.oauthState;
                if (tb.current) return !0;
                tb.current = !0;
                try {
                    if (await (0, f.b)(eZ, eX).replyWithMcpServerElicitationResponse(eJ, eY, n), await (0, m.i)(eZ, eX, eJ, eY)) return null != o && (tr(eY), tT({
                        oauthState: o,
                        hostId: eX
                    })), e7(null), !0
                } catch (e) {
                    Y.a.error("Failed to resume the Team chat", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                }
                return tb.current = !1, nk(), !1
            }, eH[125] = tT, eH[126] = eJ, eH[127] = eX, eH[128] = eY, eH[129] = eZ, eH[130] = nk, eH[131] = tq?.oauthState, eH[132] = eP) : eP = eH[132];
            let nC = eP;
            eH[133] !== eJ || eH[134] !== to || eH[135] !== eX || eH[136] !== e6 || eH[137] !== eY || eH[138] !== eZ || eH[139] !== nC || eH[140] !== nk || eH[141] !== tq ? (eM = async (e, t) => {
                let n = tq?.resumeTarget,
                    o = n?.kind === "service-account" ? n.pendingElicitationReply : void 0,
                    i = o?.oauth;
                if (tq?.oauthState !== e || n?.kind !== "service-account" || null == o || i?.kind !== "connected" || to === e) return;
                let a = () => null != o.actorUserId && eZ.get(k.k) === o.actorUserId && eZ.get(k.f) === n.accountId && eZ.get(h.E, eJ) === eX && eZ.get(h.ub, eJ)?.some(e => e.id === eY) === !0;
                if (a()) {
                    if ((0, v.a)(tq.appId) !== (0, v.a)(i.connectorId)) {
                        ti(e), nk();
                        return
                    }
                    try {
                        await Promise.all([e6.invalidateQueries({
                            queryKey: ["service-account-plugins", n.accountId, n.serviceAccountId]
                        }), (0, X.e)(eZ, n.accountId)]);
                        let r = await ee(eZ, eX, eJ, [
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
            }, eH[133] = eJ, eH[134] = to, eH[135] = eX, eH[136] = e6, eH[137] = eY, eH[138] = eZ, eH[139] = nC, eH[140] = nk, eH[141] = tq, eH[142] = eM) : eM = eH[142];
            let nE = (0, d.useEffectEvent)(eM);
            eH[143] !== tL || eH[144] !== eJ || eH[145] !== eX || eH[146] !== eY || eH[147] !== nE || eH[148] !== eZ || eH[149] !== tQ || eH[150] !== tG ? (ej = () => {
                if (null == tL) return;
                let e = !1,
                    t = !1,
                    n = eZ.watch(n => {
                        let {
                            get: o
                        } = n, i = o(h.E, eJ), a = o(h.ub, eJ), r = o(k.f), l = o(k.k);
                        !t && i === eX && a?.some(e => e.id === eY) && r === tQ && l === tG && (t = !0, nE(tL, () => e))
                    });
                return () => {
                    e = !0, n()
                }
            }, eH[143] = tL, eH[144] = eJ, eH[145] = eX, eH[146] = eY, eH[147] = nE, eH[148] = eZ, eH[149] = tQ, eH[150] = tG, eH[151] = ej) : ej = eH[151], eH[152] !== tL || eH[153] !== eJ || eH[154] !== eX || eH[155] !== eY || eH[156] !== eZ || eH[157] !== tQ || eH[158] !== tG ? (eO = [eZ, eX, eJ, eY, tL, tQ, tG], eH[152] = tL, eH[153] = eJ, eH[154] = eX, eH[155] = eY, eH[156] = eZ, eH[157] = tQ, eH[158] = tG, eH[159] = eO) : eO = eH[159], (0, d.useEffect)(ej, eO), eH[160] !== eJ || eH[161] !== eX || eH[162] !== e4 || eH[163] !== eZ || eH[164] !== nC || eH[165] !== nk || eH[166] !== e$.tool_name ? (eT = async e => {
                try {
                    if (await ee(eZ, eX, eJ, e)) return void await nC()
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
            }, eH[160] = eJ, eH[161] = eX, eH[162] = e4, eH[163] = eZ, eH[164] = nC, eH[165] = nk, eH[166] = e$.tool_name, eH[167] = eT) : eT = eH[167];
            let nP = eT;
            eH[168] !== eJ || eH[169] !== eX || eH[170] !== e4 || eH[171] !== t6 || eH[172] !== t1 || eH[173] !== eZ || eH[174] !== nC || eH[175] !== nk || eH[176] !== e$.tool_id || eH[177] !== e$.tool_type ? (eR = async () => {
                try {
                    let e, t = await async function(e) {
                        let t = e.get(k.f);
                        return null == t ? null : null
                    }(eZ);
                    if (null == t) return void nk();
                    if ("connector" === e$.tool_type) {
                        if (null == t6) return void nk();
                        e = {
                            kind: "connector",
                            connectorId: (0, v.a)(e$.tool_id),
                            app: t6
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
                    if ("connector" === e.kind && await ee(eZ, eX, eJ, [
                            [e.connectorId]
                        ]).catch(ei)) return void await nC();
                    e7(n)
                } catch (e) {
                    Y.a.error("Failed to prepare Team setup", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), nk()
                }
            }, eH[168] = eJ, eH[169] = eX, eH[170] = e4, eH[171] = t6, eH[172] = t1, eH[173] = eZ, eH[174] = nC, eH[175] = nk, eH[176] = e$.tool_id, eH[177] = e$.tool_type, eH[178] = eR) : eR = eH[178];
            let nM = eR;
            eH[179] !== nA || eH[180] !== nv || eH[181] !== nI || eH[182] !== nS || eH[183] !== nx || eH[184] !== nM || eH[185] !== e4 || eH[186] !== td || eH[187] !== tu || eH[188] !== t5 || eH[189] !== t8 || eH[190] !== nd || eH[191] !== nl || eH[192] !== e$.suggest_type || eH[193] !== e$.tool_type || eH[194] !== e5 ? (eN = async () => {
                if (!tu) {
                    if (nd("click"), td) {
                        te(!0), await nM().finally(() => {
                            te(!1)
                        });
                        return
                    }
                    if (nl) return void await nA();
                    if ("connector" === e$.tool_type) return "install" === e$.suggest_type ? void await nv() : null == t5 ? void await nA() : void await nS({
                        appId: t5.id,
                        enabled: !0
                    });
                    if ("install" === e$.suggest_type) return void await nI();
                    if (null == t8) return void e5.danger(e4.formatMessage(et.missingPlugin), {
                        errorAnalytics: {
                            toastId: "inlineToolSuggestionRequestCard.handlePrimaryAction.missingPlugin"
                        }
                    });
                    await nx({
                        pluginDisplayName: (0, c.a)(t8),
                        pluginId: t8.plugin.id,
                        enabled: !0
                    })
                }
            }, eH[179] = nA, eH[180] = nv, eH[181] = nI, eH[182] = nS, eH[183] = nx, eH[184] = nM, eH[185] = e4, eH[186] = td, eH[187] = tu, eH[188] = t5, eH[189] = t8, eH[190] = nd, eH[191] = nl, eH[192] = e$.suggest_type, eH[193] = e$.tool_type, eH[194] = e5, eH[195] = eN) : eN = eH[195];
            let nj = eN;
            eH[196] !== e1 || eH[197] !== nc || eH[198] !== nd || eH[199] !== e0 ? (eq = e => {
                if (!(e?.parentElement == null || null == nc || null == e1 || null == e0 || e3.current.has(nc))) return (0, R.b)(e.parentElement, e3.current, void 0, {
                    loggedPluginIds: e3.current,
                    onViewed: () => nd("viewed")
                })
            }, eH[196] = e1, eH[197] = nc, eH[198] = nd, eH[199] = e0, eH[200] = eq) : eq = eH[200];
            let nO = nl && no;
            return eH[201] !== e$ || eH[202] !== ng || eH[203] !== nO ? (eD = (0, o.jsx)(ea, {
                showContinueTitle: nO,
                suggestion: e$,
                title: ng
            }), eH[201] = e$, eH[202] = ng, eH[203] = nO, eH[204] = eD) : eD = eH[204], eH[205] !== tF || eH[206] !== np ? (eU = tF ? (0, o.jsx)(g.a, {
                id: "settings.mcp.appConnectModal.completingConnectionButton",
                defaultMessage: "Finishing connection…",
                description: "Primary button label shown while an app connection OAuth callback is still completing in the background"
            }) : (0, o.jsx)(g.a, {
                ...np
            }), eH[205] = tF, eH[206] = np, eH[207] = eU) : eU = eH[207], eH[208] !== nj ? (eF = () => {
                nj()
            }, eH[208] = nj, eH[209] = eF) : eF = eH[209], eH[210] !== n_ || eH[211] !== nc || eH[212] !== nu || eH[213] !== nf || eH[214] !== ny || eH[215] !== eq || eH[216] !== eD || eH[217] !== eU || eH[218] !== eF ? (eL = (0, o.jsx)(F.a, {
                ref: eq,
                impressionId: nc,
                icon: ny,
                title: eD,
                description: nf,
                primaryActionLabel: eU,
                isPrimaryActionLoading: nu,
                onDecline: n_,
                onSubmit: eF
            }), eH[210] = n_, eH[211] = nc, eH[212] = nu, eH[213] = nf, eH[214] = ny, eH[215] = eq, eH[216] = eD, eH[217] = eU, eH[218] = eF, eH[219] = eL) : eL = eH[219], eH[220] !== nP || eH[221] !== eJ || eH[222] !== eX || eH[223] !== eY || eH[224] !== e8 ? (eQ = null == e8 ? null : (0, o.jsx)(Z, {
                ...e8,
                onClose: () => e7(null),
                onComplete: nP,
                elicitation: {
                    hostId: eX,
                    reply: {
                        conversationId: eJ,
                        requestId: eY,
                        response: (0, s.b)("accept")
                    }
                }
            }), eH[220] = nP, eH[221] = eJ, eH[222] = eX, eH[223] = eY, eH[224] = e8, eH[225] = eQ) : eQ = eH[225], eH[226] !== tC ? (eG = e => {
                e || tC()
            }, eH[226] = tC, eH[227] = eG) : eG = eH[227], eH[228] !== eX || eH[229] !== t$ || eH[230] !== e6 || eH[231] !== tI || eH[232] !== eY ? (eV = async () => {
                t$ && tn(eY), await (0, _.a)({
                    hostId: eX,
                    queryClient: e6,
                    refreshAppsList: async () => (await tI()).data ?? []
                })
            }, eH[228] = eX, eH[229] = t$, eH[230] = e6, eH[231] = tI, eH[232] = eY, eH[233] = eV) : eV = eH[233], eH[234] !== eJ || eH[235] !== eY ? (ez = () => ({
                resumeTarget: {
                    kind: "tool-suggestion-elicitation",
                    conversationId: eJ,
                    requestId: eY,
                    response: (0, s.b)("accept")
                }
            }), eH[234] = eJ, eH[235] = eY, eH[236] = ez) : ez = eH[236], eH[237] !== tP ? (eW = e => {
                tP({
                    ...e
                })
            }, eH[237] = tP, eH[238] = eW) : eW = eH[238], eH[239] !== tE || eH[240] !== eX || eH[241] !== eG || eH[242] !== eV || eH[243] !== ez || eH[244] !== eW ? (eB = (0, o.jsx)(J.a, {
                oauthReferrer: "tool_suggestion",
                app: tE,
                hostId: eX,
                onOpenChange: eG,
                onConnected: eV,
                getOAuthResumeContext: ez,
                onOAuthStarted: eW
            }), eH[239] = tE, eH[240] = eX, eH[241] = eG, eH[242] = eV, eH[243] = ez, eH[244] = eW, eH[245] = eB) : eB = eH[245], eH[246] !== eL || eH[247] !== eQ || eH[248] !== eB ? (eK = (0, o.jsxs)(o.Fragment, {
                children: [eL, eQ, eB]
            }), eH[246] = eL, eH[247] = eQ, eH[248] = eB, eH[249] = eK) : eK = eH[249], eK
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
        var o = n("xnQm"),
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
        async function b(e, t) {
            let n = t.pendingElicitationReply;
            if (null != n) try {
                await (0, l.b)(e, t.hostId).replyWithMcpServerElicitationResponse(n.conversationId, n.requestId, n.response)
            } catch {
                throw Error(e.get(h.a).formatMessage({
                    id: "plugins.onboarding.installCompletionFailed",
                    defaultMessage: "Couldn’t complete installation. Please try again",
                    description: "Error when continuing after installation or starting setup cannot resume the conversation's pending plugin installation request"
                }))
            }
        }
        n.d(t, {}, {
            a: b,
            b: async function(e, t, l) {
                let y, {
                        target: _
                    } = t,
                    v = (0, a.a)(t.plugin),
                    I = (0, g.c)(t.plugin.plugin.id),
                    w = e.get(h.a).formatMessage({
                        id: "plugins.onboarding.prompt",
                        defaultMessage: "Help me set up {plugin} with the {skill} skill",
                        description: "User message sent after choosing plugin setup; plugin and skill are clickable mentions"
                    }, {
                        plugin: (0, f.b)(`@${v}`, I),
                        skill: (0, f.b)(`${"chatgpt"===_.type?"@":"$"}${t.skill.name}`, t.skill.path)
                    });
                if (!(0, m.a)(e, _) || !e.get(m.c, _) || null != _.account && (e.get(u.b) !== _.account.accountId || e.get(p.k) !== _.account.userId)) return {
                    status: "failed",
                    message: e.get(h.a).formatMessage({
                        id: "plugins.onboarding.startFailed",
                        defaultMessage: "Couldn’t start setup. Please try again",
                        description: "Error when starting a plugin setup conversation fails"
                    })
                };
                if ("chatgpt" === _.type) {
                    let {
                        startChatGptPluginOnboarding: t
                    } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(544914)]).then(n.bind(n, "O68Q"));
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
                    await b(e, _);
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
                    A = !1,
                    k = async e => {
                        y = e, A && await l?.(x(e))
                    };
                if (_.hostId === o.Vb) {
                    let t = await (0, c.b)(e, _.hostId, {
                        input: [{
                            type: "text",
                            text: w,
                            text_elements: []
                        }, ...S],
                        cwd: o.dd,
                        workspaceRoots: [o.dd],
                        workspaceKind: "projectless",
                        cloudThreadPrototype: !0,
                        collaborationMode: null,
                        serviceTier: null,
                        useAppServerPermissionDefault: !0,
                        turnTrigger: "plugin_onboarding"
                    }, {
                        onSettled: k
                    });
                    return A = !0, x(y ?? t)
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
                if (A = !0, "creation" !== C.kind) throw Error("Plugin setup requires a local conversation");
                return x(y ?? C.result)
            }
        })
    }),
    odxv: (function(e, t, n) {
        var o = n("iTtm"),
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
        var o = n("iTtm"),
            i = n("xnQm"),
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
                }).isCapable && "allowed" === e.get(r.p).status : t.hostId !== i.Vb || e.get(d.e))
            },
            b: function(e, t) {
                return "chatgpt" === e.type ? (0, c.c)(t) : (0, p.a)((0, i.ae)((0, i.Oe)(t)), e.hostId)
            },
            c: g
        })
    })
};