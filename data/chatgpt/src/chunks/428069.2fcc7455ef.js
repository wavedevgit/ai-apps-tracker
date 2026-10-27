export const __rspack_esm_id = 428069;
export const __rspack_esm_ids = [428069];
export const __webpack_modules__ = {
    VVkm: (function(e, t, n) {
        var o = n("QosV"),
            a = n("T0Rc"),
            i = n("GaA7"),
            r = n("rvFo");

        function l(e) {
            var t, n;
            let l, c, d, u = (0, o.c)(9),
                {
                    accountId: p,
                    enabled: g,
                    hostId: h
                } = e;
            return u[0] !== p || u[1] !== h ? (t = h, n = p, l = [...s(t), n], u[0] = p, u[1] = h, u[2] = l) : l = u[2], u[3] !== h ? (c = async () => await i.appServices.ambientSuggestions?.hasAccessibleAndEnabledApp({
                hostId: h
            }) ?? !1, u[3] = h, u[4] = c) : c = u[4], u[5] !== g || u[6] !== l || u[7] !== c ? (d = {
                queryKey: l,
                queryFn: c,
                enabled: g,
                retry: !1,
                staleTime: r.b.FIVE_MINUTES
            }, u[5] = g, u[6] = l, u[7] = c, u[8] = d) : d = u[8], (0, a.a)(d)
        }

        function s(e) {
            return ["new-chat-suggestion-source", "has-accessible-enabled-ambient-suggestion-app", e]
        }

        function c(e) {
            let {
                debugOverride: t,
                experimentEligible: n,
                personalized: o
            } = e;
            return t ?? (n && o ? "generated" : "curated")
        }

        function d(e) {
            let {
                canUsePersonalizedSuggestions: t,
                generatedSuggestionsEnabled: n,
                hasGeneratedSuggestionsReadSettled: o,
                shouldUseCuratedNewChatPageSuggestions: a
            } = e;
            return !!a || !n || !t || o
        }

        function u(e) {
            let {
                areNewChatPageSuggestionsLoading: t,
                hasProjectRoot: n,
                shouldShowHomeSuggestions: o,
                shouldUseCuratedNewChatPageSuggestions: a
            } = e;
            return !t && (!!a || n && o)
        }
        n.d(t, {
            a: () => u,
            b: () => s,
            c: () => c,
            d: () => d,
            e: () => l
        })
    }),
    zvpH: (function(e, t, n) {
        var o = n("GaA7"),
            a = n("q77y");
        let i = ["vscode", "ambient-suggestions"],
            r = ["vscode", "ambient-suggestions-refresh"];

        function l(e) {
            return [...i, JSON.stringify(e)]
        }

        function s(e) {
            return [...r, JSON.stringify(e)]
        }
        async function c(e, t) {
            let n = o.appServices?.ambientSuggestions;
            null != n && await (0, a.a)(n.refresh(e), t)
        }
        n.d(t, {
            c: () => l,
            d: () => s,
            e: () => c
        }, {
            a: i,
            b: r
        })
    }),
    FROa: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            i = n("on57"),
            r = n("zd8w"),
            l = n("wD9O"),
            s = n("JNtf");

        function c(e) {
            let t, n, c, d, u, p, g = (0, a.c)(19),
                {
                    children: h,
                    loading: f,
                    onOpenChange: m
                } = e,
                [b, y] = (0, r.useState)(null),
                _ = (0, l.c)();
            g[0] !== b || g[1] !== _ ? (t = null == b ? void 0 : {
                height: `min(${b}px, calc((100dvh - 2rem) / ${_}))`
            }, g[0] = b, g[1] = _, g[2] = t) : t = g[2], g[3] !== t ? (n = {
                "aria-describedby": void 0,
                style: t
            }, g[3] = t, g[4] = n) : n = g[4], g[5] !== b || g[6] !== f ? (c = e => {
                !f && null == b && null != e && e.offsetHeight > 0 && y(e.offsetHeight)
            }, g[5] = b, g[6] = f, g[7] = c) : c = g[7];
            let v = (f || null != b) && "h-full",
                w = null != b && "overflow-y-auto";
            return g[8] !== v || g[9] !== w ? (d = (0, i.b)(v, w), g[8] = v, g[9] = w, g[10] = d) : d = g[10], g[11] !== h || g[12] !== c || g[13] !== d ? (u = (0, o.jsx)("div", {
                ref: c,
                className: d,
                children: h
            }), g[11] = h, g[12] = c, g[13] = d, g[14] = u) : u = g[14], g[15] !== m || g[16] !== n || g[17] !== u ? (p = (0, o.jsx)(s.b, {
                open: !0,
                onOpenChange: m,
                autoFocusCloseButton: !0,
                size: "setup",
                contentProps: n,
                children: u
            }), g[15] = m, g[16] = n, g[17] = u, g[18] = p) : p = g[18], p
        }
        n.d(t, {
            b: () => c
        }, {
            a: "min(720px, calc(100vh - 2rem))"
        })
    }),
    TC6X: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            i = n("oyxz"),
            r = n("ygO2"),
            l = n("JNtf"),
            s = n("mUDD"),
            c = n("FROa"),
            d = n("lmaZ");

        function u(e) {
            let t, n, i = (0, a.c)(6);
            return i[0] !== e ? (t = (0, o.jsx)(p, {
                ...e
            }), i[0] = e, i[1] = t) : t = i[1], i[2] !== e.isPending || i[3] !== e.onOpenChange || i[4] !== t ? (n = (0, o.jsx)(c.b, {
                loading: e.isPending,
                onOpenChange: e.onOpenChange,
                children: t
            }), i[2] = e.isPending, i[3] = e.onOpenChange, i[4] = t, i[5] = n) : n = i[5], n
        }

        function p(e) {
            let t, n, c, u, p, g, h, f, m, b, y, _, v = (0, a.c)(27),
                {
                    isPending: w,
                    embedded: I,
                    isFetching: x,
                    onOpenChange: k,
                    onRetry: A
                } = e,
                S = void 0 !== I && I,
                j = S ? "h2" : l.e,
                C = S ? "p" : l.d;
            if (w) {
                let e;
                return v[0] !== S ? (e = (0, o.jsx)(d.a, {
                    embedded: S
                }), v[0] = S, v[1] = e) : e = v[1], e
            }
            return v[2] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(i.a, {
                id: "beacons.connectApp.loadError.title",
                defaultMessage: "Couldn’t load connector",
                description: "Error heading in the app connection dialog shown to an end user when connector details requested by the user could not be loaded. Keep this concise and nontechnical; there are no placeholders."
            }), v[2] = t) : t = v[2], v[3] !== j ? (n = (0, o.jsx)(j, {
                children: t
            }), v[3] = j, v[4] = n) : n = v[4], v[5] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, o.jsx)(i.a, {
                id: "beacons.connectApp.loadError.description",
                defaultMessage: "Try again, or cancel and return to the previous page",
                description: "Actionable error explanation in the app connection dialog shown to an end user when connector details requested by the user could not be loaded. The dialog offers Retry and Cancel buttons. Keep this concise; there are no placeholders."
            }), v[5] = c) : c = v[5], v[6] !== C ? (u = (0, o.jsx)(C, {
                children: c
            }), v[6] = C, v[7] = u) : u = v[7], v[8] !== n || v[9] !== u ? (p = (0, o.jsx)(s.d, {
                title: n,
                subtitle: u
            }), v[8] = n, v[9] = u, v[10] = p) : p = v[10], v[11] !== k ? (g = () => k(!1), v[11] = k, v[12] = g) : g = v[12], v[13] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, o.jsx)(i.a, {
                id: "beacons.connectApp.loadError.button.cancel",
                defaultMessage: "Cancel",
                description: "Button label in the app connection dialog for closing it after connector details requested by the user failed to load. Keep this short; there are no placeholders."
            }), v[13] = h) : h = v[13], v[14] !== x || v[15] !== g ? (f = (0, o.jsx)(r.a, {
                color: "secondary",
                disabled: x,
                onClick: g,
                type: "button",
                children: h
            }), v[14] = x, v[15] = g, v[16] = f) : f = v[16], v[17] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, o.jsx)(i.a, {
                id: "beacons.connectApp.loadError.button.retry",
                defaultMessage: "Retry",
                description: "Button label in the app connection dialog for retrying connector details that failed to load after an end user requested an app connection. Keep this short; there are no placeholders."
            }), v[17] = m) : m = v[17], v[18] !== x || v[19] !== A ? (b = (0, o.jsx)(r.a, {
                color: "primary",
                loading: x,
                onClick: A,
                type: "button",
                children: m
            }), v[18] = x, v[19] = A, v[20] = b) : b = v[20], v[21] !== b || v[22] !== f ? (y = (0, o.jsxs)(s.c, {
                children: [f, b]
            }), v[21] = b, v[22] = f, v[23] = y) : y = v[23], v[24] !== y || v[25] !== p ? (_ = (0, o.jsxs)(s.b, {
                className: "select-none",
                children: [p, y]
            }), v[24] = y, v[25] = p, v[26] = _) : _ = v[26], _
        }
        n.d(t, {
            a: () => p,
            b: () => u
        })
    }),
    Sx5O: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            i = n("ecE5"),
            r = n("TC6X");

        function l(e) {
            let t, n = (0, a.c)(2);
            return n[0] !== e ? (t = (0, o.jsx)(i.a, {
                ...e,
                app: null
            }), n[0] = e, n[1] = t) : t = n[1], t
        }
        n.d(t, {
            a: () => r.b,
            b: () => l
        })
    }),
    IBgA: (function(e, t, n) {
        var o = n("QosV"),
            a = n("irkb"),
            i = n("xSOA"),
            r = n("iTtm"),
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

        function w(e) {
            let t, n, l, w, I, x, k, A, S = (0, o.c)(36),
                j = e?.hostId ?? b.a,
                C = (0, r.y)(m.a),
                M = (0, r.z)(p.a),
                P = (0, a.c)(),
                E = (0, f.b)(),
                T = (0, s.a)();
            S[0] !== M || S[1] !== j || S[2] !== C ? (t = (0, u.g)(j, (0, y.a)(C, "403472035"), M ?? void 0), S[0] = M, S[1] = j, S[2] = C, S[3] = t) : t = S[3];
            let N = t;
            S[4] !== N || S[5] !== j || S[6] !== E ? (n = async () => {
                await Promise.all([E((0, c.b)(j)), E(N), E([...h.b, j]), E([...h.c, j]), E(h.f), E(["user-saved-config"])])
            }, S[4] = N, S[5] = j, S[6] = E, S[7] = n) : n = S[7];
            let O = n;
            S[8] !== j || S[9] !== P || S[10] !== C ? (l = async e => {
                let {
                    appId: t,
                    enabled: n
                } = e, o = await (0, h.l)(C, P, j);
                if ("okOverridden" === (await (0, d.b)(C, j).sendRequest("config/batchWrite", {
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
            }, S[8] = j, S[9] = P, S[10] = C, S[11] = l) : l = S[11], S[12] !== N || S[13] !== P ? (w = async e => {
                let {
                    appId: t,
                    enabled: n
                } = e;
                await P.cancelQueries({
                    queryKey: N
                });
                let o = P.getQueryData(N);
                return o && P.setQueryData(N, o.map(e => e.id !== t || e.isEnabled === n ? e : {
                    ...e,
                    isEnabled: n
                })), {
                    previousApps: o
                }
            }, S[12] = N, S[13] = P, S[14] = w) : w = S[14], S[15] !== N || S[16] !== T || S[17] !== E || S[18] !== P || S[19] !== C ? (I = async (e, t, n) => {
                let {
                    appId: o,
                    appName: a,
                    enabled: i
                } = t;
                if (i && n?.previousApps?.find(e => e.id === o)?.isEnabled === !1) {
                    await E(N);
                    let e = P.getQueryData(N)?.find(e => e.id === o);
                    if (e?.isEnabled === !1) throw Error("App remains disabled after updating its configuration")
                }
                let r = a ?? P.getQueryData(N)?.find(e => e.id === o)?.name ?? o;
                C.get(g.f).success(T.formatMessage(i ? v.enableSuccess : v.disableSuccess, {
                    appName: r
                }))
            }, S[15] = N, S[16] = T, S[17] = E, S[18] = P, S[19] = C, S[20] = I) : I = S[20], S[21] !== N || S[22] !== T || S[23] !== P || S[24] !== C ? (x = (e, t, n) => {
                _.a.error("Failed to update app enablement", {
                    safe: {},
                    sensitive: {
                        error: e
                    }
                }), C.get(g.f).danger(T.formatMessage(v.updateError), {
                    errorAnalytics: {
                        toastId: "appsAvailability.onError.updateError"
                    }
                }), n?.previousApps && P.setQueryData(N, n.previousApps)
            }, S[21] = N, S[22] = T, S[23] = P, S[24] = C, S[25] = x) : x = S[25], S[26] !== O || S[27] !== l || S[28] !== w || S[29] !== I || S[30] !== x ? (k = {
                mutationFn: l,
                onMutate: w,
                onSuccess: I,
                onError: x,
                onSettled: O
            }, S[26] = O, S[27] = l, S[28] = w, S[29] = I, S[30] = x, S[31] = k) : k = S[31];
            let R = (0, i.a)(k),
                q = R.isPending ? R.variables?.appId ?? null : null;
            return S[32] !== R.isPending || S[33] !== R.mutateAsync || S[34] !== q ? (A = {
                setAppEnabled: R.mutateAsync,
                isUpdating: R.isPending,
                updatingAppId: q
            }, S[32] = R.isPending, S[33] = R.mutateAsync, S[34] = q, S[35] = A) : A = S[35], A
        }
        n.d(t, {
            a: () => w
        })
    }),
    oxjR: (function(e, t, n) {
        var o = n("M7HN"),
            a = n("VVkm"),
            i = n("zvpH"),
            r = n("sLlu"),
            l = n("oo2L");
        let s = [null, "science"];
        async function c(e) {
            let {
                hostId: t,
                queryClient: n,
                refreshAppsList: c
            } = e, u = n.getQueriesData({
                queryKey: ["apps", "list", t]
            }), p = u.some(e => {
                let [, t] = e;
                return null != t
            }) ? u.flatMap(e => {
                let [, t] = e;
                return t ?? []
            }) : void 0, [g] = await Promise.all([c(), (0, r.a)(n, l.a)]);
            return ! function(e) {
                let {
                    previousApps: t,
                    nextApps: n
                } = e;
                return null != t && !t.some(d) && n.some(d)
            }({
                previousApps: p,
                nextApps: g
            }) || (await (0, r.a)(n, (0, a.b)(t)), await Promise.all(s.map(e => (0, i.e)({
                domain: e,
                hostId: t,
                projectRoot: (0, o.Pe)(o.bd),
                mode: "first-plugin-connect"
            }))), await Promise.all([n.invalidateQueries({
                queryKey: i.a
            }), n.invalidateQueries({
                queryKey: i.b
            })])), g
        }

        function d(e) {
            return e.isAccessible && e.isEnabled
        }
        n.d(t, {
            a: () => c
        })
    }),
    atrt: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            i = n("irkb"),
            r = n("iTtm"),
            l = n("M7HN"),
            s = n("I3F6"),
            c = n("zd8w"),
            d = n("Qgfj"),
            u = n("Wf1j"),
            p = n("oyxz"),
            g = n("Dgwo"),
            h = n("oo2L"),
            f = n("Sx5O"),
            m = n("yGJ5"),
            b = n("NcQ7"),
            y = n("CMv2"),
            _ = n("QSD9"),
            v = n("pxeg"),
            w = n("PraM"),
            I = n("BQbE"),
            x = n("biqr"),
            k = n("yxN2"),
            A = n("OiCI"),
            S = n("FvYa"),
            j = n("Ot7V"),
            C = n("HOLv"),
            M = n("SGsN"),
            P = n("OWtl"),
            E = n("ecE5"),
            T = n("kfGJ"),
            N = n("hZax"),
            O = n("WFY2"),
            R = n("Hl7m"),
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

        function F(e) {
            let t, n, d, F, U, L, Q, G, z, V, B, H, W, K, J, Y, $, X, Z, ee, et, en, eo, ea, ei, er, el, es, ec = (0, a.c)(123),
                {
                    conversationId: ed,
                    hostId: eu,
                    requestId: ep,
                    auth: eg
                } = e,
                eh = (0, r.y)(P.a),
                ef = (0, u.a)(),
                em = (0, i.c)(),
                eb = (0, N.k)(),
                ey = (0, r.z)(M.f),
                [e_, ev] = (0, c.useState)(!1),
                [ew, eI] = (0, c.useState)(!1),
                [ex, ek] = (0, c.useState)(!1),
                eA = (0, c.useRef)(!1),
                eS = eu === l.Ub ? T.a : eu;
            ec[0] !== eS ? (t = {
                hostId: eS
            }, ec[0] = eS, ec[1] = t) : t = ec[1];
            let {
                data: ej,
                hardRefetchAppsList: eC,
                isPending: eM
            } = (0, x.m)(t);
            ec[2] !== ej ? (n = void 0 === ej ? [] : ej, ec[2] = ej, ec[3] = n) : n = ec[3];
            let eP = n;
            ec[4] !== eg.connector.connector_id ? (d = [eg.connector.connector_id], ec[4] = eg.connector.connector_id, ec[5] = d) : d = ec[5], ec[6] !== eS || ec[7] !== d ? (F = {
                appIds: d,
                hostId: eS
            }, ec[6] = eS, ec[7] = d, ec[8] = F) : F = ec[8];
            let {
                data: eE
            } = (0, I.b)(F);
            ec[9] !== eE ? (U = void 0 === eE ? [] : eE, ec[9] = eE, ec[10] = U) : U = ec[10];
            let eT = U;
            ec[11] === Symbol.for("react.memo_cache_sentinel") ? (L = () => {
                ev(!0)
            }, ec[11] = L) : L = ec[11], ec[12] !== eu ? (Q = {
                hostId: eu,
                oauthReferrer: "conversation_auth",
                onExternalConnectStarted: L
            }, ec[12] = eu, ec[13] = Q) : Q = ec[13];
            let {
                clearConnectingApp: eN,
                clearPendingAppConnect: eO,
                connectingApp: eR,
                handleAppConnectOAuthStarted: eq,
                handleConnectApp: eD,
                handleOpenAppUrl: eF,
                isAppConnectPending: eU
            } = (0, k.a)(Q), {
                isAppConnectCallbackClaimed: eL
            } = (0, m.g)();
            ec[14] !== eP || ec[15] !== eg.connector.connector_id ? (G = eP.find(e => e.id === eg.connector.connector_id) ?? null, ec[14] = eP, ec[15] = eg.connector.connector_id, ec[16] = G) : G = ec[16];
            let eQ = G;
            ec[17] !== eg.connector.connector_id || ec[18] !== eT ? (z = eT.find(e => e.id === eg.connector.connector_id) ?? null, ec[17] = eg.connector.connector_id, ec[18] = eT, ec[19] = z) : z = ec[19];
            let eG = z,
                ez = eG?.name ?? eg.connector.connector_name,
                eV = eg.connector.auth_reason,
                eB = "missing_link" === eV;
            ec[20] !== eg.connector.connector_id ? (V = (0, b.a)(eg.connector.connector_id), ec[20] = eg.connector.connector_id, ec[21] = V) : V = ec[21];
            let eH = null != V,
                eW = "oauth_upgrade_required" === eV;
            ec[22] !== eg.connector.connector_id || ec[23] !== eB || ec[24] !== eb ? (B = (0, y.c)({
                connectorId: eg.connector.connector_id,
                disableExposureLog: !0,
                statsigClient: eb
            }), H = eB && null != (0, y.e)(eg.connector.connector_id, B), ec[22] = eg.connector.connector_id, ec[23] = eB, ec[24] = eb, ec[25] = B, ec[26] = H) : (B = ec[25], H = ec[26]);
            let eK = H;
            ec[27] !== eg.connector.connector_id || ec[28] !== eB || ec[29] !== eb ? (W = eB && (0, v.f)({
                connectorId: eg.connector.connector_id,
                disableExposureLog: !0,
                statsigClient: eb
            }), ec[27] = eg.connector.connector_id, ec[28] = eB, ec[29] = eb, ec[30] = W) : W = ec[30];
            let eJ = W,
                eY = eK || eJ;
            ec[31] !== eg.connector.connector_id || ec[32] !== ed || ec[33] !== e_ || ec[34] !== eL || ec[35] !== eU || ec[36] !== ep || ec[37] !== eH ? (J = {
                kind: "connector-auth-elicitation",
                conversationId: ed,
                requestId: ep
            }, K = eL(eg.connector.connector_id, J), Y = !eH && (e_ || eU(eg.connector.connector_id, J)), ec[31] = eg.connector.connector_id, ec[32] = ed, ec[33] = e_, ec[34] = eL, ec[35] = eU, ec[36] = ep, ec[37] = eH, ec[38] = K, ec[39] = J, ec[40] = Y) : (K = ec[38], J = ec[39], Y = ec[40]);
            let e$ = Y,
                eX = e$ ? D.continue : eB ? D.connect : eW ? D.updateAccess : D.reconnect;
            ec[41] !== eg.connector.connector_id || ec[42] !== eO || ec[43] !== ed || ec[44] !== eu || ec[45] !== ef || ec[46] !== ep || ec[47] !== J || ec[48] !== eh || ec[49] !== ey ? ($ = e => {
                eA.current || (eA.current = !0, "decline" === e && eO({
                    appId: eg.connector.connector_id,
                    resumeTarget: J
                }), (0, g.b)(eh, eu).replyWithMcpServerElicitationResponse(ed, ep, (0, s.b)(e)).then(() => {
                    eO({
                        appId: eg.connector.connector_id,
                        resumeTarget: J
                    })
                }).catch(() => {
                    eA.current = !1, ey.danger(ef.formatMessage({
                        id: "composer.connectorAuth.responseError",
                        defaultMessage: "Could not submit your response. Please try again",
                        description: "Toast shown when accepting or declining a connector authentication request fails and the user can retry"
                    }), {
                        errorAnalytics: {
                            toastId: "composer.connectorAuth.responseError"
                        }
                    })
                }))
            }, ec[41] = eg.connector.connector_id, ec[42] = eO, ec[43] = ed, ec[44] = eu, ec[45] = ef, ec[46] = ep, ec[47] = J, ec[48] = eh, ec[49] = ey, ec[50] = $) : $ = ec[50];
            let eZ = $;
            ec[51] !== eZ ? (X = () => {
                eZ("decline")
            }, ec[51] = eZ, ec[52] = X) : X = ec[52];
            let e1 = X;
            ec[53] !== eg.connector.connector_id || ec[54] !== eg.connector.install_url || ec[55] !== eg.connector.link_id || ec[56] !== eg.connector.requested_scopes || ec[57] !== eg.url || ec[58] !== eV || ec[59] !== eS || ec[60] !== ez || ec[61] !== B || ec[62] !== eq || ec[63] !== eD || ec[64] !== eF || ec[65] !== ef || ec[66] !== eM || ec[67] !== eQ || ec[68] !== em || ec[69] !== eZ || ec[70] !== eH || ec[71] !== J || ec[72] !== eh || ec[73] !== eK || ec[74] !== eJ || ec[75] !== eY || ec[76] !== ey ? (Z = async () => {
                eH ? eI(!0) : eY && eM || (ek(!0), await (async () => {
                    if (eY && null != eQ) {
                        let e = {
                            scope: eh,
                            appId: eg.connector.connector_id,
                            browserAccountId: (0, A.c)(eh) ?? void 0,
                            hostId: eS,
                            queryClient: em
                        };
                        if ((await (eK ? (0, _.a)({
                                ...e,
                                connectors: B
                            }) : (0, w.a)(e))).length > 0) return void await eD(eQ, {
                            forceInApp: !0,
                            googleOAuthBundlePrepared: eK,
                            microsoftOAuthBundlePrepared: eJ
                        })
                    }
                    let e = {
                            id: eg.connector.connector_id,
                            installUrl: eQ?.installUrl ?? eg.connector.install_url,
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
                            authReason: eV,
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
                                t ? (0, j.f)({
                                    disposition: "current-tab",
                                    href: e,
                                    initiator: "open_in_browser_bridge",
                                    openTarget: "external-browser"
                                }) : eF(e)
                            },
                            queryClient: em,
                            requestedScopes: eg.connector.requested_scopes
                        })).kind) {
                        case "requires-mfa":
                        case "requires-connection-form":
                            return void eI(!0);
                        case "connected-directly":
                            return void eZ("accept");
                        case "oauth-started":
                            ev(!0);
                            return;
                        case "browser-fallback":
                            return void ev(!0);
                        case "failed":
                            return void ey.danger(ef.formatMessage({
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
                    ek(!1)
                }))
            }, ec[53] = eg.connector.connector_id, ec[54] = eg.connector.install_url, ec[55] = eg.connector.link_id, ec[56] = eg.connector.requested_scopes, ec[57] = eg.url, ec[58] = eV, ec[59] = eS, ec[60] = ez, ec[61] = B, ec[62] = eq, ec[63] = eD, ec[64] = eF, ec[65] = ef, ec[66] = eM, ec[67] = eQ, ec[68] = em, ec[69] = eZ, ec[70] = eH, ec[71] = J, ec[72] = eh, ec[73] = eK, ec[74] = eJ, ec[75] = eY, ec[76] = ey, ec[77] = Z) : Z = ec[77];
            let e0 = Z;
            ec[78] !== e0 || ec[79] !== eZ || ec[80] !== e$ ? (ee = () => {
                e$ ? eZ("accept") : e0()
            }, ec[78] = e0, ec[79] = eZ, ec[80] = e$, ec[81] = ee) : ee = ec[81];
            let e2 = ee;
            if (null != eg.connector.connection_consent) return null;
            if (eB) {
                let e;
                ec[82] !== ez ? (e = (0, o.jsx)(p.a, {
                    ...D.missingConnectionDescription,
                    values: {
                        connectorName: ez
                    }
                }), ec[82] = ez, ec[83] = e) : e = ec[83], et = e
            } else if (eW) {
                let e;
                ec[84] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(p.a, {
                    ...D.missingScopesDescription
                }), ec[84] = e) : e = ec[84], et = e
            } else {
                let e;
                ec[85] !== ez ? (e = (0, o.jsx)(p.a, {
                    ...D.reconnectDescription,
                    values: {
                        connectorName: ez
                    }
                }), ec[85] = ez, ec[86] = e) : e = ec[86], et = e
            }
            let e3 = eG?.iconUrl,
                e5 = eG?.iconUrlDark;
            ec[87] === Symbol.for("react.memo_cache_sentinel") ? (en = (0, o.jsx)(C.a, {
                className: "text-secondary",
                "aria-hidden": !1,
                asset: q.a
            }), ec[87] = en) : en = ec[87], ec[88] !== eg.connector.connector_id || ec[89] !== ez || ec[90] !== e3 || ec[91] !== e5 ? (eo = (0, o.jsx)(S.a, {
                alt: ez,
                className: "icon-md rounded-sm object-contain",
                knownAppId: eg.connector.connector_id,
                logoUrl: e3,
                logoDarkUrl: e5,
                fallback: en
            }), ec[88] = eg.connector.connector_id, ec[89] = ez, ec[90] = e3, ec[91] = e5, ec[92] = eo) : eo = ec[92], ec[93] !== eX ? (ea = (0, o.jsx)(p.a, {
                ...eX
            }), ec[93] = eX, ec[94] = ea) : ea = ec[94];
            let e7 = ex || K || eY && eM;
            return ec[95] !== ez || ec[96] !== et || ec[97] !== e1 || ec[98] !== e2 || ec[99] !== eo || ec[100] !== ea || ec[101] !== e7 ? (ei = (0, o.jsx)(R.a, {
                icon: eo,
                title: ez,
                description: et,
                primaryActionLabel: ea,
                isPrimaryActionLoading: e7,
                onDecline: e1,
                onSubmit: e2
            }), ec[95] = ez, ec[96] = et, ec[97] = e1, ec[98] = e2, ec[99] = eo, ec[100] = ea, ec[101] = e7, ec[102] = ei) : ei = ec[102], ec[103] !== eg.connector.connector_id || ec[104] !== eg.connector.link_id || ec[105] !== eV || ec[106] !== eS || ec[107] !== eC || ec[108] !== eZ || ec[109] !== ew ? (er = ew ? (0, o.jsx)(f.b, {
                oauthReferrer: "conversation_auth",
                connectorId: eg.connector.connector_id,
                connectorAuth: {
                    authReason: eV,
                    linkId: eg.connector.link_id
                },
                hostId: eS,
                onConnected: () => {
                    eZ("accept"), eC().catch(() => {
                        O.a.warning("Failed to refresh apps after connection", {
                            safe: {
                                connectorId: eg.connector.connector_id
                            }
                        })
                    })
                },
                onOpenChange: e => {
                    e || eI(!1)
                }
            }) : null, ec[103] = eg.connector.connector_id, ec[104] = eg.connector.link_id, ec[105] = eV, ec[106] = eS, ec[107] = eC, ec[108] = eZ, ec[109] = ew, ec[110] = er) : er = ec[110], ec[111] !== eN || ec[112] !== eR || ec[113] !== eS || ec[114] !== eq || ec[115] !== eZ || ec[116] !== J || ec[117] !== eY ? (el = eY ? (0, o.jsx)(E.a, {
                oauthReferrer: "conversation_auth",
                app: eR,
                hostId: eS,
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
                    e || eN()
                }
            }) : null, ec[111] = eN, ec[112] = eR, ec[113] = eS, ec[114] = eq, ec[115] = eZ, ec[116] = J, ec[117] = eY, ec[118] = el) : el = ec[118], ec[119] !== ei || ec[120] !== er || ec[121] !== el ? (es = (0, o.jsxs)(o.Fragment, {
                children: [ei, er, el]
            }), ec[119] = ei, ec[120] = er, ec[121] = el, ec[122] = es) : es = ec[122], es
        }
        n.d(t, {
            a: () => F
        })
    }),
    tjyI: (function(e, t, n) {
        n.d(t, {
            a: () => X
        });
        var o = n("ABep"),
            a = n("QosV"),
            i = n("irkb"),
            r = n("iTtm"),
            l = n("M7HN"),
            s = n("I3F6"),
            c = n("Haiv"),
            d = n("zd8w"),
            u = n("Qgfj"),
            p = n("Wf1j"),
            g = n("oyxz"),
            h = n("Dgwo"),
            f = n("toag"),
            m = n("yGJ5"),
            b = n("NcQ7"),
            y = n("IBgA"),
            _ = n("oxjR"),
            v = n("hOO0"),
            w = n("BQbE"),
            I = n("biqr"),
            x = n("PYah"),
            k = n("yxN2"),
            A = n("Cslg"),
            S = n("FvYa"),
            j = n("HOLv"),
            C = n("Bbed"),
            M = n("SGsN"),
            P = n("rO8L"),
            E = n("an0a"),
            T = n("XmhH"),
            N = n("a0aG"),
            O = n("loz7"),
            R = n("ntKy"),
            q = n("Hl7m"),
            D = n("OWtl"),
            F = n("odxv");

        function U(e) {
            let t, n, i, l, s, d, u, p, h, f, m = (0, a.c)(25),
                {
                    onboarding: b
                } = e,
                y = (0, r.y)(D.a);
            m[0] !== b.plugin ? (t = (0, c.a)(b.plugin), m[0] = b.plugin, m[1] = t) : t = m[1];
            let _ = t;
            m[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, o.jsx)(T.a, {
                className: "icon-md text-secondary"
            }), m[2] = n) : n = m[2], m[3] !== b.plugin.logoDarkPath || m[4] !== b.plugin.logoPath || m[5] !== _ ? (i = (0, o.jsx)(S.a, {
                alt: _,
                className: "icon-md rounded-sm object-contain",
                logoDarkUrl: b.plugin.logoDarkPath,
                logoUrl: b.plugin.logoPath,
                fallback: n
            }), m[3] = b.plugin.logoDarkPath, m[4] = b.plugin.logoPath, m[5] = _, m[6] = i) : i = m[6], m[7] !== _ ? (l = (0, o.jsx)(g.a, {
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
                w = "skip" === b.submittingAction;
            return m[13] !== b || m[14] !== y ? (p = () => void(0, F.b)(y, b, "skip"), h = () => void(0, F.b)(y, b, "setup"), m[13] = b, m[14] = y, m[15] = p, m[16] = h) : (p = m[15], h = m[16]), m[17] !== p || m[18] !== h || m[19] !== i || m[20] !== l || m[21] !== s || m[22] !== v || m[23] !== w ? (f = (0, o.jsx)(q.a, {
                icon: i,
                title: l,
                description: s,
                primaryActionLabel: d,
                secondaryActionLabel: u,
                isPrimaryActionLoading: v,
                isSecondaryActionLoading: w,
                onDecline: p,
                onSubmit: h
            }), m[17] = p, m[18] = h, m[19] = i, m[20] = l, m[21] = s, m[22] = v, m[23] = w, m[24] = f) : f = m[24], f
        }
        var L = n("ugfi"),
            Q = n("EEop"),
            G = n("cLdu"),
            z = n("ueue"),
            V = n("ecE5"),
            B = n("nvO1"),
            H = n("WFY2"),
            W = n("zTIf");
        let K = (0, C.a)(() => Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(984133)]).then(n.bind(n, "cUuO")).then(e => e.TeamAddPluginsModal));
        async function J(e, t) {
            return null == e.get(A.e) ? null : null
        }
        async function Y(e, t, n, o) {
            let a = new Set(Array.from(await (0, x.a)(e, t, n, "shared"), v.a));
            return o.every(e => e.some(e => a.has((0, v.a)(e))))
        }
        let $ = (0, u.f)({
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

        function X(e) {
            let t, n, i = (0, a.c)(7);
            i[0] !== e.conversationId || i[1] !== e.hostId || i[2] !== e.requestId ? (t = {
                hostId: e.hostId,
                conversationId: e.conversationId,
                requestId: e.requestId
            }, i[0] = e.conversationId, i[1] = e.hostId, i[2] = e.requestId, i[3] = t) : t = i[3];
            let l = (0, r.x)(F.a, t);
            return i[4] !== l || i[5] !== e ? (n = null == l ? (0, o.jsx)(Z, {
                ...e
            }) : (0, o.jsx)(U, {
                onboarding: l
            }), i[4] = l, i[5] = e, i[6] = n) : n = i[6], n
        }

        function Z(e) {
            let t, n, u, x, C, F, U, X, Z, eo, ea, ei, er, el, es, ec, ed, eu, ep, eg, eh, ef, em, eb, ey, e_, ev, ew, eI, ex, ek, eA, eS, ej, eC, eM, eP, eE, eT, eN, eO, eR, eq, eD, eF, eU, eL = (0, a.c)(226),
                {
                    conversationId: eQ,
                    hostId: eG,
                    requestId: ez,
                    suggestion: eV
                } = e,
                eB = (0, r.y)(D.a),
                eH = (0, p.a)(),
                eW = (0, r.z)(M.f),
                eK = (0, i.c)(),
                [eJ, eY] = (0, d.useState)(null),
                [e$, eX] = (0, d.useState)(!1),
                [eZ, e1] = (0, d.useState)(null),
                [e0, e2] = (0, d.useState)(null),
                [e3, e5] = (0, d.useState)(null),
                e7 = (0, E.c)(eQ);
            eL[0] !== eG ? (t = (0, G.i)(eG), eL[0] = eG, eL[1] = t) : t = eL[1];
            let e6 = t;
            eL[2] !== eQ || eL[3] !== eG ? (n = {
                hostId: eG,
                threadId: eQ
            }, eL[2] = eQ, eL[3] = eG, eL[4] = n) : n = eL[4];
            let e8 = (0, r.x)(f.bc, n),
                e4 = "install" === eV.suggest_type && eG === l.Ub && e8?.threadAccess === "shared",
                e9 = "install" === eV.suggest_type && eG === l.Ub && null == e8,
                te = e6 || e7.hostId !== eG || null == e7.cwd ? void 0 : [e7.cwd],
                tt = !e6;
            eL[5] !== eG || eL[6] !== tt ? (u = {
                hostId: eG,
                enabled: tt
            }, eL[5] = eG, eL[6] = tt, eL[7] = u) : u = eL[7];
            let tn = (0, P.a)(u),
                to = !e6 && "plugin" === eV.tool_type && "enable" === eV.suggest_type,
                ta = !to && "plugin" === eV.tool_type && (e6 || tn),
                ti = (0, d.useRef)(!1);
            eL[8] !== eQ || eL[9] !== eG || eL[10] !== ez || eL[11] !== eB ? (x = e => {
                ti.current || (ti.current = !0, (0, h.b)(eB, eG).replyWithMcpServerElicitationResponse(eQ, ez, (0, s.b)(e)).catch(() => {
                    ti.current = !1
                }))
            }, eL[8] = eQ, eL[9] = eG, eL[10] = ez, eL[11] = eB, eL[12] = x) : x = eL[12];
            let tr = x,
                tl = "connector" === eV.tool_type;
            eL[13] !== eG || eL[14] !== tl ? (C = {
                enabled: tl,
                hostId: eG
            }, eL[13] = eG, eL[14] = tl, eL[15] = C) : C = eL[15];
            let {
                data: ts,
                refetch: tc
            } = (0, I.m)(C);
            eL[16] !== eV.tool_id || eL[17] !== eV.tool_type ? (F = "connector" === eV.tool_type ? [eV.tool_id] : [], eL[16] = eV.tool_id, eL[17] = eV.tool_type, eL[18] = F) : F = eL[18], eL[19] !== eG || eL[20] !== F ? (U = {
                appIds: F,
                hostId: eG
            }, eL[19] = eG, eL[20] = F, eL[21] = U) : U = eL[21];
            let {
                data: td
            } = (0, w.b)(U);
            eL[22] !== td ? (X = void 0 === td ? [] : td, eL[22] = td, eL[23] = X) : X = eL[23];
            let tu = X,
                {
                    data: tp,
                    isLoading: tg,
                    refetch: th
                } = (0, G.l)({
                    enabled: "plugin" === eV.tool_type && to && tn,
                    hostId: eG,
                    roots: te,
                    resolveActiveRoots: to
                });
            eL[24] !== ez ? (Z = () => {
                e1(ez)
            }, eL[24] = ez, eL[25] = Z) : Z = eL[25], eL[26] !== eG || eL[27] !== Z ? (eo = {
                hostId: eG,
                oauthReferrer: "tool_suggestion",
                onExternalConnectStarted: Z
            }, eL[26] = eG, eL[27] = Z, eL[28] = eo) : eo = eL[28];
            let {
                clearConnectingApp: tf,
                connectingApp: tm,
                handleAppConnectOAuthStarted: tb,
                handleConnectApp: ty,
                handleOpenAppUrl: t_,
                isAppConnectPending: tv
            } = (0, k.a)(eo), {
                clearPendingAppConnect: tw,
                getPendingTeamElicitationConnect: tI,
                isAppConnectCallbackClaimed: tx
            } = (0, m.g)();
            eL[29] !== eQ || eL[30] !== tI || eL[31] !== eG || eL[32] !== ez ? (ea = tI(eG, eQ, ez), eL[29] = eQ, eL[30] = tI, eL[31] = eG, eL[32] = ez, eL[33] = ea) : ea = eL[33];
            let tk = ea,
                tA = tk?.resumeTarget.kind === "service-account" ? tk.resumeTarget : null,
                tS = tA?.pendingElicitationReply?.oauth,
                tj = e3 === ez || null != tk && (tk.claimed || tS?.kind === "connected") && tS?.kind !== "failed" && tk.oauthState !== e0,
                tC = tS?.kind === "connected" ? tk?.oauthState : null,
                tM = tA?.accountId,
                tP = tA?.pendingElicitationReply?.actorUserId;
            eL[34] !== eQ || eL[35] !== e3 || eL[36] !== eG || eL[37] !== ez || eL[38] !== eB ? (ei = () => {
                if (e3 === ez) return eB.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(f.I, eQ) === eG && t(f.yb, eQ)?.some(e => e.id === ez) && (ti.current = !1, e5(null))
                })
            }, er = [eQ, e3, eG, ez, eB], eL[34] = eQ, eL[35] = e3, eL[36] = eG, eL[37] = ez, eL[38] = eB, eL[39] = ei, eL[40] = er) : (ei = eL[39], er = eL[40]), (0, d.useEffect)(ei, er), eL[41] !== eG ? (el = {
                hostId: eG
            }, eL[41] = eG, eL[42] = el) : el = eL[42];
            let {
                setAppEnabled: tE,
                updatingAppId: tT
            } = (0, y.a)(el);
            eL[43] !== eG ? (es = {
                hostId: eG
            }, eL[43] = eG, eL[44] = es) : es = eL[44];
            let {
                pendingPluginId: tN,
                setPluginEnabled: tO
            } = (0, L.d)(es), tR = "plugin" === eV.tool_type ? eV : null, {
                installPlugin: tq,
                status: tD
            } = (0, R.e)(), tF = (0, r.z)(O.n), tU = "connector" === eV.tool_type ? eV : null;
            eL[45] !== tU ? (ec = tU?.suggest_type === "install" && null != (0, b.a)(tU.tool_id), eL[45] = tU, eL[46] = ec) : ec = eL[46];
            let tL = ec,
                tQ = null == tU ? null : {
                    kind: "tool-suggestion-elicitation",
                    conversationId: eQ,
                    requestId: ez,
                    response: (0, s.b)("accept")
                },
                tG = null == tR ? null : tR.remote_plugin_id ?? (e6 ? tR.tool_id : null),
                tz = (0, Q.f)({
                    hostId: eG,
                    pluginId: e6 ? tG : tR?.tool_id ?? null,
                    remotePluginId: tG,
                    roots: te
                });
            eL[47] !== ta ? (ed = {
                enabled: ta
            }, eL[47] = ta, eL[48] = ed) : ed = eL[48];
            let {
                data: tV,
                isLoading: tB,
                refetch: tH
            } = (0, r.x)(Q.k, tz, ed), tW = null == tU ? null : (void 0 === ts ? [] : ts).find(e => e.id === tU.tool_id) ?? null;
            eL[49] !== tu || eL[50] !== tU ? (eu = null == tU ? null : tu.find(e => e.id === tU.tool_id) ?? null, eL[49] = tu, eL[50] = tU, eL[51] = eu) : eu = eL[51];
            let tK = eu,
                tJ = null == tR ? null : (tp ?? []).find(e => e.plugin.id === tR.tool_id) ?? null;
            to || (tJ = ta && null != tV ? (0, z.b)(tV) : null);
            let tY = en({
                    app: tW,
                    plugin: tJ,
                    suggestion: eV
                }),
                t$ = tm?.id === eV.tool_id,
                tX = null != tQ && tv(eV.tool_id, tQ),
                tZ = null != tQ && tx(eV.tool_id, tQ),
                t1 = (0, R.a)(tD, {
                    hostId: eG,
                    pluginId: tD?.phase === "loading" ? tG ?? eV.tool_id : tJ?.plugin.id ?? eV.tool_id
                }),
                t0 = eZ === ez || tX,
                t2 = "plugin" === eV.tool_type && "install" === eV.suggest_type && "closed" !== tF.kind && tF.hostId === eG && tF.pendingElicitationReply?.conversationId === eQ && tF.pendingElicitationReply?.requestId === ez,
                t3 = e6 && "plugin" === eV.tool_type && "install" === eV.suggest_type,
                t5 = tN === (tJ?.plugin.id ?? eV.tool_id);
            "connector" === eV.tool_type ? t5 = "install" === eV.suggest_type ? t$ || tZ : tT === eV.tool_id : "install" === eV.suggest_type && (t5 = t1 || t2);
            let t7 = !e4 && (tZ || !t3 && !t5 && (tY || t0)),
                t6 = e9 || null != tR && tB || e$ || tj || t5 || (e6 || to) && "plugin" === eV.tool_type && "enable" === eV.suggest_type && tg,
                t8 = $.enable;
            t7 ? t8 = $.continue : "install" === eV.suggest_type && (t8 = $.install);
            let t4 = null == tJ ? tK?.name ?? tW?.name ?? eV.tool_name : (0, c.a)(tJ),
                t9 = "plugin" === eV.tool_type ? tJ?.description : tK?.description ?? tW?.description,
                ne = tU?.tool_id,
                nt = tK?.iconUrl,
                nn = tK?.iconUrlDark;
            eL[52] === Symbol.for("react.memo_cache_sentinel") ? (ep = (0, o.jsx)(j.a, {
                className: "text-secondary",
                "aria-hidden": !1,
                asset: W.a
            }), eL[52] = ep) : ep = eL[52], eL[53] !== t4 || eL[54] !== ne || eL[55] !== nt || eL[56] !== nn ? (eg = (0, o.jsx)(S.a, {
                alt: t4,
                className: "icon-md rounded-sm object-contain",
                knownAppId: ne,
                logoUrl: nt,
                logoDarkUrl: nn,
                fallback: ep
            }), eL[53] = t4, eL[54] = ne, eL[55] = nt, eL[56] = nn, eL[57] = eg) : eg = eL[57];
            let no = eg;
            if ("plugin" === eV.tool_type) {
                let e, t, n = tJ?.logoDarkPath ?? null,
                    a = tJ?.logoPath ?? null;
                eL[58] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(T.a, {
                    className: "icon-md text-secondary"
                }), eL[58] = e) : e = eL[58], eL[59] !== eV.tool_name || eL[60] !== n || eL[61] !== a ? (t = (0, o.jsx)(S.a, {
                    alt: eV.tool_name,
                    className: "icon-md rounded-sm object-contain",
                    logoDarkUrl: n,
                    logoUrl: a,
                    fallback: e
                }), eL[59] = eV.tool_name, eL[60] = n, eL[61] = a, eL[62] = t) : t = eL[62], no = t
            }
            eL[63] !== tr ? (eh = () => {
                tr("decline")
            }, eL[63] = tr, eL[64] = eh) : eh = eL[64];
            let na = eh;
            eL[65] !== tU || eL[66] !== ty || eL[67] !== t_ || eL[68] !== tL || eL[69] !== tW || eL[70] !== ez ? (ef = async () => {
                (tL || e1(ez), null != tW) ? await ty(tW): null != tU && (t_(tU.install_url), e1(ez))
            }, eL[65] = tU, eL[66] = ty, eL[67] = t_, eL[68] = tL, eL[69] = tW, eL[70] = ez, eL[71] = ef) : ef = eL[71];
            let ni = ef;
            eL[72] !== eQ || eL[73] !== eG || eL[74] !== e6 || eL[75] !== tq || eL[76] !== eH || eL[77] !== tJ || eL[78] !== tR?.suggestion_id || eL[79] !== tH || eL[80] !== tG || eL[81] !== ez || eL[82] !== ta || eL[83] !== eV.tool_name || eL[84] !== eW ? (em = async () => {
                let e = tJ;
                if (e6 && null != tG) e = {
                    displayName: eV.tool_name,
                    remoteMarketplaceName: l.Vc,
                    remotePluginId: tG
                };
                else if (null == e && ta) {
                    eX(!0);
                    let {
                        data: t
                    } = await tH().finally(() => {
                        eX(!1)
                    });
                    e = null == t ? null : (0, z.b)(t)
                }
                null == e ? eW.danger(eH.formatMessage($.missingPlugin), {
                    errorAnalytics: {
                        toastId: "inlineToolSuggestionRequestCard.handleInstallPlugin.missingPlugin"
                    }
                }) : tq(e, {
                    elicitationOwnsConnectorRefresh: !0,
                    hostId: eG,
                    marketplaceAnalytics: {
                        ...N.b.composer,
                        suggestionId: tR?.suggestion_id
                    },
                    origin: "in_conversation_elicitation",
                    pendingElicitationReply: {
                        conversationId: eQ,
                        requestId: ez,
                        response: (0, s.b)("accept")
                    }
                })
            }, eL[72] = eQ, eL[73] = eG, eL[74] = e6, eL[75] = tq, eL[76] = eH, eL[77] = tJ, eL[78] = tR?.suggestion_id, eL[79] = tH, eL[80] = tG, eL[81] = ez, eL[82] = ta, eL[83] = eV.tool_name, eL[84] = eW, eL[85] = em) : em = eL[85];
            let nr = em;
            eL[86] !== ez ? (eb = async e => {
                let {
                    enabled: t,
                    setEnabled: n
                } = e;
                t && e1(ez);
                try {
                    await n()
                } catch {
                    return
                }
            }, eL[86] = ez, eL[87] = eb) : eb = eL[87];
            let nl = eb;
            eL[88] !== nl || eL[89] !== tE ? (ey = e => {
                let {
                    appId: t,
                    enabled: n
                } = e;
                return nl({
                    enabled: n,
                    setEnabled: () => tE({
                        appId: t,
                        enabled: n
                    })
                })
            }, eL[88] = nl, eL[89] = tE, eL[90] = ey) : ey = eL[90];
            let ns = ey;
            eL[91] !== nl || eL[92] !== e6 || eL[93] !== tJ || eL[94] !== tO ? (e_ = e => {
                let {
                    pluginDisplayName: t,
                    pluginId: n,
                    enabled: o
                } = e;
                return nl({
                    enabled: o,
                    setEnabled: () => tO({
                        pluginDisplayName: t,
                        pluginId: n,
                        plugin: e6 ? tJ?.plugin : void 0,
                        enabled: o
                    })
                })
            }, eL[91] = nl, eL[92] = e6, eL[93] = tJ, eL[94] = tO, eL[95] = e_) : e_ = eL[95];
            let nc = e_;
            eL[96] !== eH || eL[97] !== t3 || eL[98] !== to || eL[99] !== t2 || eL[100] !== th || eL[101] !== tH || eL[102] !== tr || eL[103] !== eV || eL[104] !== eW ? (ev = async () => {
                t3 || t2 || (eX(!0), await (async () => {
                    try {
                        let e;
                        if ("connector" === eV.tool_type) return void tr("accept");
                        if (to) e = (await th()).data?.find(e => e.plugin.id === eV.tool_id) ?? null;
                        else {
                            let {
                                data: t
                            } = await tH({
                                throwOnError: !0
                            });
                            e = null == t ? null : (0, z.b)(t)
                        }
                        if (!en({
                                app: null,
                                plugin: e,
                                suggestion: eV
                            })) return void eW.danger(eH.formatMessage($.pluginNotReady, {
                            toolName: eV.tool_name
                        }), {
                            errorAnalytics: {
                                toastId: "inlineToolSuggestionRequestCard.handleContinue.pluginNotReady"
                            }
                        });
                        tr("accept")
                    } catch (e) {
                        H.a.error("Failed to refresh tool suggestion readiness", {
                            safe: {
                                toolId: eV.tool_id,
                                toolType: eV.tool_type
                            },
                            sensitive: {
                                error: e
                            }
                        }), eW.danger(eH.formatMessage($.genericLoadError), {
                            errorAnalytics: {
                                toastId: "inlineToolSuggestionRequestCard.handleContinue.genericLoadError"
                            }
                        })
                    }
                })().finally(() => {
                    eX(!1)
                }))
            }, eL[96] = eH, eL[97] = t3, eL[98] = to, eL[99] = t2, eL[100] = th, eL[101] = tH, eL[102] = tr, eL[103] = eV, eL[104] = eW, eL[105] = ev) : ev = eL[105];
            let nd = ev;
            eL[106] !== eH || eL[107] !== eW ? (ew = e => {
                eW.danger(e ?? eH.formatMessage($.genericLoadError), {
                    errorAnalytics: {
                        toastId: "inlineToolSuggestionRequestCard.teamInstall"
                    }
                })
            }, eL[106] = eH, eL[107] = eW, eL[108] = ew) : ew = eL[108];
            let nu = ew;
            eL[109] !== tw || eL[110] !== eQ || eL[111] !== eG || eL[112] !== ez || eL[113] !== eB || eL[114] !== nu || eL[115] !== tk?.oauthState ? (eI = async (e, t) => {
                let n = void 0 === e ? (0, s.b)("accept") : e,
                    o = t ?? tk?.oauthState;
                if (ti.current) return !0;
                ti.current = !0;
                try {
                    if (await (0, h.b)(eB, eG).replyWithMcpServerElicitationResponse(eQ, ez, n), await (0, m.i)(eB, eG, eQ, ez)) return null != o && (e5(ez), tw({
                        oauthState: o,
                        hostId: eG
                    })), eY(null), !0
                } catch (e) {
                    H.a.error("Failed to resume the Team chat", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                }
                return ti.current = !1, nu(), !1
            }, eL[109] = tw, eL[110] = eQ, eL[111] = eG, eL[112] = ez, eL[113] = eB, eL[114] = nu, eL[115] = tk?.oauthState, eL[116] = eI) : eI = eL[116];
            let np = eI;
            eL[117] !== eQ || eL[118] !== e0 || eL[119] !== eG || eL[120] !== eK || eL[121] !== ez || eL[122] !== eB || eL[123] !== np || eL[124] !== nu || eL[125] !== tk ? (ex = async (e, t) => {
                let n = tk?.resumeTarget,
                    o = n?.kind === "service-account" ? n.pendingElicitationReply : void 0,
                    a = o?.oauth;
                if (tk?.oauthState !== e || n?.kind !== "service-account" || null == o || a?.kind !== "connected" || e0 === e) return;
                let i = () => null != o.actorUserId && eB.get(A.j) === o.actorUserId && eB.get(A.e) === n.accountId && eB.get(f.I, eQ) === eG && eB.get(f.yb, eQ)?.some(e => e.id === ez) === !0;
                if (i()) {
                    if ((0, v.a)(tk.appId) !== (0, v.a)(a.connectorId)) {
                        e2(e), nu();
                        return
                    }
                    try {
                        await Promise.all([eK.invalidateQueries({
                            queryKey: ["service-account-plugins", n.accountId, n.serviceAccountId]
                        }), (0, B.e)(eB, n.accountId)]);
                        let r = await Y(eB, eG, eQ, [
                            [a.connectorId]
                        ]);
                        if (t() || !i()) return;
                        if (!r) {
                            e2(e), nu();
                            return
                        }
                        await np(o.response, e) || t() || e2(e)
                    } catch (n) {
                        t() || (H.a.error("Failed to resume Team app connect elicitation", {
                            safe: {
                                connectorId: a.connectorId
                            },
                            sensitive: {
                                error: n
                            }
                        }), e2(e), nu())
                    }
                }
            }, eL[117] = eQ, eL[118] = e0, eL[119] = eG, eL[120] = eK, eL[121] = ez, eL[122] = eB, eL[123] = np, eL[124] = nu, eL[125] = tk, eL[126] = ex) : ex = eL[126];
            let ng = (0, d.useEffectEvent)(ex);
            eL[127] !== tC || eL[128] !== eQ || eL[129] !== eG || eL[130] !== ez || eL[131] !== ng || eL[132] !== eB || eL[133] !== tM || eL[134] !== tP ? (ek = () => {
                if (null == tC) return;
                let e = !1,
                    t = !1,
                    n = eB.watch(n => {
                        let {
                            get: o
                        } = n, a = o(f.I, eQ), i = o(f.yb, eQ), r = o(A.e), l = o(A.j);
                        !t && a === eG && i?.some(e => e.id === ez) && r === tM && l === tP && (t = !0, ng(tC, () => e))
                    });
                return () => {
                    e = !0, n()
                }
            }, eL[127] = tC, eL[128] = eQ, eL[129] = eG, eL[130] = ez, eL[131] = ng, eL[132] = eB, eL[133] = tM, eL[134] = tP, eL[135] = ek) : ek = eL[135], eL[136] !== tC || eL[137] !== eQ || eL[138] !== eG || eL[139] !== ez || eL[140] !== eB || eL[141] !== tM || eL[142] !== tP ? (eA = [eB, eG, eQ, ez, tC, tM, tP], eL[136] = tC, eL[137] = eQ, eL[138] = eG, eL[139] = ez, eL[140] = eB, eL[141] = tM, eL[142] = tP, eL[143] = eA) : eA = eL[143], (0, d.useEffect)(ek, eA), eL[144] !== eQ || eL[145] !== eG || eL[146] !== eH || eL[147] !== eB || eL[148] !== np || eL[149] !== nu || eL[150] !== eV.tool_name ? (eS = async e => {
                try {
                    if (await Y(eB, eG, eQ, e)) return void await np()
                } catch (e) {
                    H.a.error("Failed to check Team setup", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                }
                nu(eH.formatMessage($.pluginNotReady, {
                    toolName: eV.tool_name
                }))
            }, eL[144] = eQ, eL[145] = eG, eL[146] = eH, eL[147] = eB, eL[148] = np, eL[149] = nu, eL[150] = eV.tool_name, eL[151] = eS) : eS = eL[151];
            let nh = eS;
            eL[152] !== eQ || eL[153] !== eG || eL[154] !== eH || eL[155] !== tK || eL[156] !== tG || eL[157] !== eB || eL[158] !== np || eL[159] !== nu || eL[160] !== eV.tool_id || eL[161] !== eV.tool_type ? (ej = async () => {
                try {
                    let e, t = await J(eB, eQ);
                    if (null == t) return void nu();
                    if ("connector" === eV.tool_type) {
                        if (null == tK) return void nu();
                        e = {
                            kind: "connector",
                            connectorId: (0, v.a)(eV.tool_id),
                            app: tK
                        }
                    } else {
                        if (null == tG) return void nu(eH.formatMessage($.missingPlugin));
                        e = {
                            kind: "plugin",
                            pluginId: tG
                        }
                    }
                    let n = {
                        ...t,
                        start: e
                    };
                    if ("connector" === e.kind && await Y(eB, eG, eQ, [
                            [e.connectorId]
                        ]).catch(ee)) return void await np();
                    eY(n)
                } catch (e) {
                    H.a.error("Failed to prepare Team setup", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), nu()
                }
            }, eL[152] = eQ, eL[153] = eG, eL[154] = eH, eL[155] = tK, eL[156] = tG, eL[157] = eB, eL[158] = np, eL[159] = nu, eL[160] = eV.tool_id, eL[161] = eV.tool_type, eL[162] = ej) : ej = eL[162];
            let nf = ej;
            eL[163] !== nd || eL[164] !== ni || eL[165] !== nr || eL[166] !== ns || eL[167] !== nc || eL[168] !== nf || eL[169] !== eH || eL[170] !== e4 || eL[171] !== e9 || eL[172] !== tW || eL[173] !== tJ || eL[174] !== t7 || eL[175] !== eV.suggest_type || eL[176] !== eV.tool_type || eL[177] !== eW ? (eC = async () => {
                if (!e9) {
                    if (e4) {
                        eX(!0), await nf().finally(() => {
                            eX(!1)
                        });
                        return
                    }
                    if (t7) return void await nd();
                    if ("connector" === eV.tool_type) return "install" === eV.suggest_type ? void await ni() : null == tW ? void await nd() : void await ns({
                        appId: tW.id,
                        enabled: !0
                    });
                    if ("install" === eV.suggest_type) return void await nr();
                    if (null == tJ) return void eW.danger(eH.formatMessage($.missingPlugin), {
                        errorAnalytics: {
                            toastId: "inlineToolSuggestionRequestCard.handlePrimaryAction.missingPlugin"
                        }
                    });
                    await nc({
                        pluginDisplayName: (0, c.a)(tJ),
                        pluginId: tJ.plugin.id,
                        enabled: !0
                    })
                }
            }, eL[163] = nd, eL[164] = ni, eL[165] = nr, eL[166] = ns, eL[167] = nc, eL[168] = nf, eL[169] = eH, eL[170] = e4, eL[171] = e9, eL[172] = tW, eL[173] = tJ, eL[174] = t7, eL[175] = eV.suggest_type, eL[176] = eV.tool_type, eL[177] = eW, eL[178] = eC) : eC = eL[178];
            let nm = eC,
                nb = t7 && t0;
            return eL[179] !== eV || eL[180] !== t4 || eL[181] !== nb ? (eM = (0, o.jsx)(et, {
                showContinueTitle: nb,
                suggestion: eV,
                title: t4
            }), eL[179] = eV, eL[180] = t4, eL[181] = nb, eL[182] = eM) : eM = eL[182], eL[183] !== tj || eL[184] !== t8 ? (eP = tj ? (0, o.jsx)(g.a, {
                id: "settings.mcp.appConnectModal.completingConnectionButton",
                defaultMessage: "Finishing connection…",
                description: "Primary button label shown while an app connection OAuth callback is still completing in the background"
            }) : (0, o.jsx)(g.a, {
                ...t8
            }), eL[183] = tj, eL[184] = t8, eL[185] = eP) : eP = eL[185], eL[186] !== nm ? (eE = () => {
                nm()
            }, eL[186] = nm, eL[187] = eE) : eE = eL[187], eL[188] !== na || eL[189] !== t6 || eL[190] !== t9 || eL[191] !== no || eL[192] !== eM || eL[193] !== eP || eL[194] !== eE ? (eT = (0, o.jsx)(q.a, {
                icon: no,
                title: eM,
                description: t9,
                primaryActionLabel: eP,
                isPrimaryActionLoading: t6,
                onDecline: na,
                onSubmit: eE
            }), eL[188] = na, eL[189] = t6, eL[190] = t9, eL[191] = no, eL[192] = eM, eL[193] = eP, eL[194] = eE, eL[195] = eT) : eT = eL[195], eL[196] !== nh || eL[197] !== eQ || eL[198] !== eG || eL[199] !== ez || eL[200] !== eJ ? (eN = null == eJ ? null : (0, o.jsx)(K, {
                ...eJ,
                onClose: () => eY(null),
                onComplete: nh,
                elicitation: {
                    hostId: eG,
                    reply: {
                        conversationId: eQ,
                        requestId: ez,
                        response: (0, s.b)("accept")
                    }
                }
            }), eL[196] = nh, eL[197] = eQ, eL[198] = eG, eL[199] = ez, eL[200] = eJ, eL[201] = eN) : eN = eL[201], eL[202] !== tf ? (eO = e => {
                e || tf()
            }, eL[202] = tf, eL[203] = eO) : eO = eL[203], eL[204] !== eG || eL[205] !== tL || eL[206] !== eK || eL[207] !== tc || eL[208] !== ez ? (eR = async () => {
                tL && e1(ez), await (0, _.a)({
                    hostId: eG,
                    queryClient: eK,
                    refreshAppsList: async () => (await tc()).data ?? []
                })
            }, eL[204] = eG, eL[205] = tL, eL[206] = eK, eL[207] = tc, eL[208] = ez, eL[209] = eR) : eR = eL[209], eL[210] !== eQ || eL[211] !== ez ? (eq = () => ({
                resumeTarget: {
                    kind: "tool-suggestion-elicitation",
                    conversationId: eQ,
                    requestId: ez,
                    response: (0, s.b)("accept")
                }
            }), eL[210] = eQ, eL[211] = ez, eL[212] = eq) : eq = eL[212], eL[213] !== tb ? (eD = e => {
                tb({
                    ...e
                })
            }, eL[213] = tb, eL[214] = eD) : eD = eL[214], eL[215] !== tm || eL[216] !== eG || eL[217] !== eO || eL[218] !== eR || eL[219] !== eq || eL[220] !== eD ? (eF = (0, o.jsx)(V.a, {
                oauthReferrer: "tool_suggestion",
                app: tm,
                hostId: eG,
                onOpenChange: eO,
                onConnected: eR,
                getOAuthResumeContext: eq,
                onOAuthStarted: eD
            }), eL[215] = tm, eL[216] = eG, eL[217] = eO, eL[218] = eR, eL[219] = eq, eL[220] = eD, eL[221] = eF) : eF = eL[221], eL[222] !== eT || eL[223] !== eN || eL[224] !== eF ? (eU = (0, o.jsxs)(o.Fragment, {
                children: [eT, eN, eF]
            }), eL[222] = eT, eL[223] = eN, eL[224] = eF, eL[225] = eU) : eU = eL[225], eU
        }

        function ee() {
            return !1
        }

        function et(e) {
            let t = (0, a.c)(6),
                {
                    showContinueTitle: n,
                    suggestion: i,
                    title: r
                } = e;
            if ("install" !== i.suggest_type || !n) {
                let e;
                return t[0] !== r ? (e = (0, o.jsx)(o.Fragment, {
                    children: r
                }), t[0] = r, t[1] = e) : e = t[1], e
            }
            switch (i.tool_type) {
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

        function en(e) {
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
    jltc: (function(e, t, n) {
        var o = n("iRMi"),
            a = n("CjTC"),
            i = n("yGJW");

        function r(e, t, n) {
            (0, i.a)(e, o.CodexMcpExtensionAction, {
                feature: "onboarding",
                action: n,
                pluginId: (0, a.a)(t.plugin.plugin)
            })
        }
        n.d(t, {
            a: () => r
        })
    }),
    wGqp: (function(e, t, n) {
        var o = n("M7HN"),
            a = n("MKR8"),
            i = n("Haiv"),
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
        async function b(e, t, l) {
            let b, {
                    target: _
                } = t,
                v = (0, i.a)(t.plugin),
                w = (0, g.c)(t.plugin.plugin.id),
                I = e.get(f.a).formatMessage({
                    id: "plugins.onboarding.prompt",
                    defaultMessage: "Help me set up {plugin} with the {skill} skill",
                    description: "User message sent after choosing plugin setup; plugin and skill are clickable mentions"
                }, {
                    plugin: (0, h.b)(`@${v}`, w),
                    skill: (0, h.b)(`${"chatgpt"===_.type?"@":"$"}${t.skill.name}`, t.skill.path)
                });
            if (!(0, m.a)(e, _) || !e.get(m.c, _) || null != _.account && (e.get(u.b) !== _.account.accountId || e.get(p.j) !== _.account.userId)) return {
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
                } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(544914)]).then(n.bind(n, "O68Q"));
                return t(e, _, I)
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
                await y(e, _);
                try {
                    await (0, s.a)(e, _.hostId, _.conversationId, {
                        prompt: I,
                        inputItems: x,
                        turnTrigger: "plugin_onboarding",
                        serviceTier: n
                    })
                } catch (e) {
                    t = (0, a.a)(e)
                }
                return {
                    status: "started",
                    route: (0, m.b)(_, _.conversationId),
                    message: t
                }
            }
            let k = t => "failed" === t.status ? t : "created" === t.status ? {
                    status: "started",
                    route: (0, m.b)(_, t.conversationId),
                    message: (0, c.a)(e, t)?.message
                } : {
                    status: "outcome-unknown",
                    message: (0, c.a)(e, t).message
                },
                A = !1,
                S = async e => {
                    b = e, A && await l?.(k(e))
                };
            if (_.hostId === o.Ub) {
                let t = await (0, c.b)(e, _.hostId, {
                    input: [{
                        type: "text",
                        text: I,
                        text_elements: []
                    }, ...x],
                    cwd: o.bd,
                    workspaceRoots: [o.bd],
                    workspaceKind: "projectless",
                    cloudThreadPrototype: !0,
                    collaborationMode: null,
                    serviceTier: null,
                    useAppServerPermissionDefault: !0,
                    turnTrigger: "plugin_onboarding"
                }, {
                    onSettled: S
                });
                return A = !0, k(b ?? t)
            }
            let j = await (0, r.b)({
                scope: e,
                additionalUserInput: x,
                model: void 0,
                thinking: void 0,
                prompt: I,
                target: {
                    type: "projectless"
                },
                turnTrigger: "plugin_onboarding",
                onSettled: S
            });
            if (A = !0, "creation" !== j.kind) throw Error("Plugin setup requires a local conversation");
            return k(b ?? j.result)
        }
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
        n.d(t, {
            a: () => y,
            b: () => b
        })
    }),
    odxv: (function(e, t, n) {
        var o = n("iTtm"),
            a = n("MKR8"),
            i = n("SGsN"),
            r = n("OWtl"),
            l = n("jltc"),
            s = n("wGqp");
        let c = (0, o.v)(r.a, e => null);
        async function d(e, t, n) {
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
                    null != n.message && e.get(i.f).danger(n.message, {
                        errorAnalytics: {
                            toastId: "plugins.onboarding.sendOutcomeUnknown"
                        }
                    })
                }
                e.get(c, o) === d && e.set(c, o, null)
            } catch (t) {
                e.get(i.f).danger((0, a.a)(t), {
                    errorAnalytics: {
                        toastId: "plugins.onboarding.submitFailed"
                    }
                })
            } finally {
                e.get(c, o) === d && e.set(c, o, t)
            }
        }
        n.d(t, {
            b: () => d
        }, {
            a: c
        })
    }),
    jhEa: (function(e, t, n) {
        var o = n("iTtm"),
            a = n("M7HN"),
            i = n("hzGf"),
            r = n("OFP1"),
            l = n("Ow2S"),
            s = n("MrGp"),
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

        function h(e, t) {
            return "chatgpt" === e.type ? (0, c.c)(t) : (0, p.a)((0, a._d)((0, a.Le)(t)), e.hostId)
        }

        function f(e, t) {
            return null != t.conversationId || ("chatgpt" === t.type ? e.get(i.a, {
                name: "chatgpt"
            }).isCapable && "allowed" === e.get(r.p).status : t.hostId !== a.Ub || e.get(d.d))
        }
        n.d(t, {
            a: () => f,
            b: () => h
        }, {
            c: g
        })
    })
};