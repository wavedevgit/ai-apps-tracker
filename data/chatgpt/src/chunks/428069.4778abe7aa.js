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
                    onOpenChange: A,
                    onRetry: k
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
            }), v[8] = n, v[9] = u, v[10] = p) : p = v[10], v[11] !== A ? (g = () => A(!1), v[11] = A, v[12] = g) : g = v[12], v[13] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, o.jsx)(i.a, {
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
            }), v[17] = m) : m = v[17], v[18] !== x || v[19] !== k ? (b = (0, o.jsx)(r.a, {
                color: "primary",
                loading: x,
                onClick: k,
                type: "button",
                children: m
            }), v[18] = x, v[19] = k, v[20] = b) : b = v[20], v[21] !== b || v[22] !== f ? (y = (0, o.jsxs)(s.c, {
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
            let t, n, l, w, I, x, A, k, S = (0, o.c)(36),
                j = e?.hostId ?? b.a,
                C = (0, r.y)(m.a),
                P = (0, r.z)(p.a),
                M = (0, a.c)(),
                E = (0, f.b)(),
                T = (0, s.a)();
            S[0] !== P || S[1] !== j || S[2] !== C ? (t = (0, u.g)(j, (0, y.a)(C, "403472035"), P ?? void 0), S[0] = P, S[1] = j, S[2] = C, S[3] = t) : t = S[3];
            let O = t;
            S[4] !== O || S[5] !== j || S[6] !== E ? (n = async () => {
                await Promise.all([E((0, c.b)(j)), E(O), E([...h.b, j]), E([...h.c, j]), E(h.f), E(["user-saved-config"])])
            }, S[4] = O, S[5] = j, S[6] = E, S[7] = n) : n = S[7];
            let N = n;
            S[8] !== j || S[9] !== M || S[10] !== C ? (l = async e => {
                let {
                    appId: t,
                    enabled: n
                } = e, o = await (0, h.l)(C, M, j);
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
            }, S[8] = j, S[9] = M, S[10] = C, S[11] = l) : l = S[11], S[12] !== O || S[13] !== M ? (w = async e => {
                let {
                    appId: t,
                    enabled: n
                } = e;
                await M.cancelQueries({
                    queryKey: O
                });
                let o = M.getQueryData(O);
                return o && M.setQueryData(O, o.map(e => e.id !== t || e.isEnabled === n ? e : {
                    ...e,
                    isEnabled: n
                })), {
                    previousApps: o
                }
            }, S[12] = O, S[13] = M, S[14] = w) : w = S[14], S[15] !== O || S[16] !== T || S[17] !== E || S[18] !== M || S[19] !== C ? (I = async (e, t, n) => {
                let {
                    appId: o,
                    appName: a,
                    enabled: i
                } = t;
                if (i && n?.previousApps?.find(e => e.id === o)?.isEnabled === !1) {
                    await E(O);
                    let e = M.getQueryData(O)?.find(e => e.id === o);
                    if (e?.isEnabled === !1) throw Error("App remains disabled after updating its configuration")
                }
                let r = a ?? M.getQueryData(O)?.find(e => e.id === o)?.name ?? o;
                C.get(g.f).success(T.formatMessage(i ? v.enableSuccess : v.disableSuccess, {
                    appName: r
                }))
            }, S[15] = O, S[16] = T, S[17] = E, S[18] = M, S[19] = C, S[20] = I) : I = S[20], S[21] !== O || S[22] !== T || S[23] !== M || S[24] !== C ? (x = (e, t, n) => {
                _.a.error("Failed to update app enablement", {
                    safe: {},
                    sensitive: {
                        error: e
                    }
                }), C.get(g.f).danger(T.formatMessage(v.updateError), {
                    errorAnalytics: {
                        toastId: "appsAvailability.onError.updateError"
                    }
                }), n?.previousApps && M.setQueryData(O, n.previousApps)
            }, S[21] = O, S[22] = T, S[23] = M, S[24] = C, S[25] = x) : x = S[25], S[26] !== N || S[27] !== l || S[28] !== w || S[29] !== I || S[30] !== x ? (A = {
                mutationFn: l,
                onMutate: w,
                onSuccess: I,
                onError: x,
                onSettled: N
            }, S[26] = N, S[27] = l, S[28] = w, S[29] = I, S[30] = x, S[31] = A) : A = S[31];
            let R = (0, i.a)(A),
                q = R.isPending ? R.variables?.appId ?? null : null;
            return S[32] !== R.isPending || S[33] !== R.mutateAsync || S[34] !== q ? (k = {
                setAppEnabled: R.mutateAsync,
                isUpdating: R.isPending,
                updatingAppId: q
            }, S[32] = R.isPending, S[33] = R.mutateAsync, S[34] = q, S[35] = k) : k = S[35], k
        }
        n.d(t, {
            a: () => w
        })
    }),
    oxjR: (function(e, t, n) {
        var o = n("o0PZ"),
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
            l = n("o0PZ"),
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
            A = n("yxN2"),
            k = n("OiCI"),
            S = n("FvYa"),
            j = n("Ot7V"),
            C = n("HOLv"),
            P = n("SGsN"),
            M = n("OWtl"),
            E = n("ecE5"),
            T = n("kfGJ"),
            O = n("hZax"),
            N = n("WFY2"),
            R = n("Hl7m"),
            q = n("Shju");
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
            let t, n, d, F, U, L, Q, G, V, B, z, K, W, H, Y, J, Z, $, X, ee, et, en, eo, ea, ei, er, el, es, ec = (0, a.c)(123),
                {
                    conversationId: ed,
                    hostId: eu,
                    requestId: ep,
                    auth: eg
                } = e,
                eh = (0, r.y)(M.a),
                ef = (0, u.a)(),
                em = (0, i.c)(),
                eb = (0, O.k)(),
                ey = (0, r.z)(P.f),
                [e_, ev] = (0, c.useState)(!1),
                [ew, eI] = (0, c.useState)(!1),
                [ex, eA] = (0, c.useState)(!1),
                ek = (0, c.useRef)(!1),
                eS = eu === l.Ub ? T.a : eu;
            ec[0] !== eS ? (t = {
                hostId: eS
            }, ec[0] = eS, ec[1] = t) : t = ec[1];
            let {
                data: ej,
                hardRefetchAppsList: eC,
                isPending: eP
            } = (0, x.m)(t);
            ec[2] !== ej ? (n = void 0 === ej ? [] : ej, ec[2] = ej, ec[3] = n) : n = ec[3];
            let eM = n;
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
                clearConnectingApp: eO,
                clearPendingAppConnect: eN,
                connectingApp: eR,
                handleAppConnectOAuthStarted: eq,
                handleConnectApp: eD,
                handleOpenAppUrl: eF,
                isAppConnectPending: eU
            } = (0, A.a)(Q), {
                isAppConnectCallbackClaimed: eL
            } = (0, m.g)();
            ec[14] !== eM || ec[15] !== eg.connector.connector_id ? (G = eM.find(e => e.id === eg.connector.connector_id) ?? null, ec[14] = eM, ec[15] = eg.connector.connector_id, ec[16] = G) : G = ec[16];
            let eQ = G;
            ec[17] !== eg.connector.connector_id || ec[18] !== eT ? (V = eT.find(e => e.id === eg.connector.connector_id) ?? null, ec[17] = eg.connector.connector_id, ec[18] = eT, ec[19] = V) : V = ec[19];
            let eG = V,
                eV = eG?.name ?? eg.connector.connector_name,
                eB = eg.connector.auth_reason,
                ez = "missing_link" === eB;
            ec[20] !== eg.connector.connector_id ? (B = (0, b.a)(eg.connector.connector_id), ec[20] = eg.connector.connector_id, ec[21] = B) : B = ec[21];
            let eK = null != B,
                eW = "oauth_upgrade_required" === eB;
            ec[22] !== eg.connector.connector_id || ec[23] !== ez || ec[24] !== eb ? (z = (0, y.c)({
                connectorId: eg.connector.connector_id,
                disableExposureLog: !0,
                statsigClient: eb
            }), K = ez && null != (0, y.e)(eg.connector.connector_id, z), ec[22] = eg.connector.connector_id, ec[23] = ez, ec[24] = eb, ec[25] = z, ec[26] = K) : (z = ec[25], K = ec[26]);
            let eH = K;
            ec[27] !== eg.connector.connector_id || ec[28] !== ez || ec[29] !== eb ? (W = ez && (0, v.f)({
                connectorId: eg.connector.connector_id,
                disableExposureLog: !0,
                statsigClient: eb
            }), ec[27] = eg.connector.connector_id, ec[28] = ez, ec[29] = eb, ec[30] = W) : W = ec[30];
            let eY = W,
                eJ = eH || eY;
            ec[31] !== eg.connector.connector_id || ec[32] !== ed || ec[33] !== e_ || ec[34] !== eL || ec[35] !== eU || ec[36] !== ep || ec[37] !== eK ? (Y = {
                kind: "connector-auth-elicitation",
                conversationId: ed,
                requestId: ep
            }, H = eL(eg.connector.connector_id, Y), J = !eK && (e_ || eU(eg.connector.connector_id, Y)), ec[31] = eg.connector.connector_id, ec[32] = ed, ec[33] = e_, ec[34] = eL, ec[35] = eU, ec[36] = ep, ec[37] = eK, ec[38] = H, ec[39] = Y, ec[40] = J) : (H = ec[38], Y = ec[39], J = ec[40]);
            let eZ = J,
                e$ = eZ ? D.continue : ez ? D.connect : eW ? D.updateAccess : D.reconnect;
            ec[41] !== eg.connector.connector_id || ec[42] !== eN || ec[43] !== ed || ec[44] !== eu || ec[45] !== ef || ec[46] !== ep || ec[47] !== Y || ec[48] !== eh || ec[49] !== ey ? (Z = e => {
                ek.current || (ek.current = !0, "decline" === e && eN({
                    appId: eg.connector.connector_id,
                    resumeTarget: Y
                }), (0, g.b)(eh, eu).replyWithMcpServerElicitationResponse(ed, ep, (0, s.b)(e)).then(() => {
                    eN({
                        appId: eg.connector.connector_id,
                        resumeTarget: Y
                    })
                }).catch(() => {
                    ek.current = !1, ey.danger(ef.formatMessage({
                        id: "composer.connectorAuth.responseError",
                        defaultMessage: "Could not submit your response. Please try again",
                        description: "Toast shown when accepting or declining a connector authentication request fails and the user can retry"
                    }), {
                        errorAnalytics: {
                            toastId: "composer.connectorAuth.responseError"
                        }
                    })
                }))
            }, ec[41] = eg.connector.connector_id, ec[42] = eN, ec[43] = ed, ec[44] = eu, ec[45] = ef, ec[46] = ep, ec[47] = Y, ec[48] = eh, ec[49] = ey, ec[50] = Z) : Z = ec[50];
            let eX = Z;
            ec[51] !== eX ? ($ = () => {
                eX("decline")
            }, ec[51] = eX, ec[52] = $) : $ = ec[52];
            let e1 = $;
            ec[53] !== eg.connector.connector_id || ec[54] !== eg.connector.install_url || ec[55] !== eg.connector.link_id || ec[56] !== eg.connector.requested_scopes || ec[57] !== eg.url || ec[58] !== eB || ec[59] !== eS || ec[60] !== eV || ec[61] !== z || ec[62] !== eq || ec[63] !== eD || ec[64] !== eF || ec[65] !== ef || ec[66] !== eP || ec[67] !== eQ || ec[68] !== em || ec[69] !== eX || ec[70] !== eK || ec[71] !== Y || ec[72] !== eh || ec[73] !== eH || ec[74] !== eY || ec[75] !== eJ || ec[76] !== ey ? (X = async () => {
                eK ? eI(!0) : eJ && eP || (eA(!0), await (async () => {
                    if (eJ && null != eQ) {
                        let e = {
                            scope: eh,
                            appId: eg.connector.connector_id,
                            browserAccountId: (0, k.c)(eh) ?? void 0,
                            hostId: eS,
                            queryClient: em
                        };
                        if ((await (eH ? (0, _.a)({
                                ...e,
                                connectors: z
                            }) : (0, w.a)(e))).length > 0) return void await eD(eQ, {
                            forceInApp: !0,
                            googleOAuthBundlePrepared: eH,
                            microsoftOAuthBundlePrepared: eY
                        })
                    }
                    let e = {
                            id: eg.connector.connector_id,
                            installUrl: eQ?.installUrl ?? eg.connector.install_url,
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
                            authReason: eB,
                            fallbackUrl: eg.url,
                            linkId: eg.connector.link_id,
                            onOAuthStarted: (n, o) => {
                                t = !0, eq({
                                    app: e,
                                    oauthFlowCorrelationId: o?.oauthFlowCorrelationId,
                                    redirectUrl: n,
                                    resumeTarget: Y
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
                            return void eX("accept");
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
                    eA(!1)
                }))
            }, ec[53] = eg.connector.connector_id, ec[54] = eg.connector.install_url, ec[55] = eg.connector.link_id, ec[56] = eg.connector.requested_scopes, ec[57] = eg.url, ec[58] = eB, ec[59] = eS, ec[60] = eV, ec[61] = z, ec[62] = eq, ec[63] = eD, ec[64] = eF, ec[65] = ef, ec[66] = eP, ec[67] = eQ, ec[68] = em, ec[69] = eX, ec[70] = eK, ec[71] = Y, ec[72] = eh, ec[73] = eH, ec[74] = eY, ec[75] = eJ, ec[76] = ey, ec[77] = X) : X = ec[77];
            let e0 = X;
            ec[78] !== e0 || ec[79] !== eX || ec[80] !== eZ ? (ee = () => {
                eZ ? eX("accept") : e0()
            }, ec[78] = e0, ec[79] = eX, ec[80] = eZ, ec[81] = ee) : ee = ec[81];
            let e2 = ee;
            if (null != eg.connector.connection_consent) return null;
            if (ez) {
                let e;
                ec[82] !== eV ? (e = (0, o.jsx)(p.a, {
                    ...D.missingConnectionDescription,
                    values: {
                        connectorName: eV
                    }
                }), ec[82] = eV, ec[83] = e) : e = ec[83], et = e
            } else if (eW) {
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
            let e5 = eG?.iconUrl,
                e3 = eG?.iconUrlDark;
            ec[87] === Symbol.for("react.memo_cache_sentinel") ? (en = (0, o.jsx)(C.a, {
                className: "text-secondary",
                "aria-hidden": !1,
                asset: q.a
            }), ec[87] = en) : en = ec[87], ec[88] !== eg.connector.connector_id || ec[89] !== eV || ec[90] !== e5 || ec[91] !== e3 ? (eo = (0, o.jsx)(S.a, {
                alt: eV,
                className: "icon-md rounded-sm object-contain",
                knownAppId: eg.connector.connector_id,
                logoUrl: e5,
                logoDarkUrl: e3,
                fallback: en
            }), ec[88] = eg.connector.connector_id, ec[89] = eV, ec[90] = e5, ec[91] = e3, ec[92] = eo) : eo = ec[92], ec[93] !== e$ ? (ea = (0, o.jsx)(p.a, {
                ...e$
            }), ec[93] = e$, ec[94] = ea) : ea = ec[94];
            let e4 = ex || H || eJ && eP;
            return ec[95] !== eV || ec[96] !== et || ec[97] !== e1 || ec[98] !== e2 || ec[99] !== eo || ec[100] !== ea || ec[101] !== e4 ? (ei = (0, o.jsx)(R.a, {
                icon: eo,
                title: eV,
                description: et,
                primaryActionLabel: ea,
                isPrimaryActionLoading: e4,
                onDecline: e1,
                onSubmit: e2
            }), ec[95] = eV, ec[96] = et, ec[97] = e1, ec[98] = e2, ec[99] = eo, ec[100] = ea, ec[101] = e4, ec[102] = ei) : ei = ec[102], ec[103] !== eg.connector.connector_id || ec[104] !== eg.connector.link_id || ec[105] !== eB || ec[106] !== eS || ec[107] !== eC || ec[108] !== eX || ec[109] !== ew ? (er = ew ? (0, o.jsx)(f.b, {
                oauthReferrer: "conversation_auth",
                connectorId: eg.connector.connector_id,
                connectorAuth: {
                    authReason: eB,
                    linkId: eg.connector.link_id
                },
                hostId: eS,
                onConnected: () => {
                    eX("accept"), eC().catch(() => {
                        N.a.warning("Failed to refresh apps after connection", {
                            safe: {
                                connectorId: eg.connector.connector_id
                            }
                        })
                    })
                },
                onOpenChange: e => {
                    e || eI(!1)
                }
            }) : null, ec[103] = eg.connector.connector_id, ec[104] = eg.connector.link_id, ec[105] = eB, ec[106] = eS, ec[107] = eC, ec[108] = eX, ec[109] = ew, ec[110] = er) : er = ec[110], ec[111] !== eO || ec[112] !== eR || ec[113] !== eS || ec[114] !== eq || ec[115] !== eX || ec[116] !== Y || ec[117] !== eJ ? (el = eJ ? (0, o.jsx)(E.a, {
                oauthReferrer: "conversation_auth",
                app: eR,
                hostId: eS,
                onConnected: () => {
                    eX("accept")
                },
                onExternalConnectStarted: () => {
                    ev(!0)
                },
                getOAuthResumeContext: () => ({
                    resumeTarget: Y
                }),
                onOAuthStarted: e => {
                    eq({
                        ...e
                    }), ev(!0)
                },
                onOpenChange: e => {
                    e || eO()
                }
            }) : null, ec[111] = eO, ec[112] = eR, ec[113] = eS, ec[114] = eq, ec[115] = eX, ec[116] = Y, ec[117] = eJ, ec[118] = el) : el = ec[118], ec[119] !== ei || ec[120] !== er || ec[121] !== el ? (es = (0, o.jsxs)(o.Fragment, {
                children: [ei, er, el]
            }), ec[119] = ei, ec[120] = er, ec[121] = el, ec[122] = es) : es = ec[122], es
        }
        n.d(t, {
            a: () => F
        })
    }),
    tjyI: (function(e, t, n) {
        n.d(t, {
            a: () => $
        });
        var o = n("ABep"),
            a = n("QosV"),
            i = n("irkb"),
            r = n("iTtm"),
            l = n("o0PZ"),
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
            A = n("yxN2"),
            k = n("Cslg"),
            S = n("FvYa"),
            j = n("HOLv"),
            C = n("Bbed"),
            P = n("SGsN"),
            M = n("rO8L"),
            E = n("an0a"),
            T = n("v6bU"),
            O = n("a0aG"),
            N = n("loz7"),
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
            V = n("ueue"),
            B = n("ecE5"),
            z = n("nvO1"),
            K = n("WFY2"),
            W = n("Shju");
        let H = (0, C.a)(() => Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(462534)]).then(n.bind(n, "cUuO")).then(e => e.TeamAddPluginsModal));
        async function Y(e, t) {
            return null == e.get(k.e) ? null : null
        }
        async function J(e, t, n, o) {
            let a = new Set(Array.from(await (0, x.a)(e, t, n, "shared"), v.a));
            return o.every(e => e.some(e => a.has((0, v.a)(e))))
        }
        let Z = (0, u.f)({
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

        function $(e) {
            let t, n, i = (0, a.c)(7);
            i[0] !== e.conversationId || i[1] !== e.hostId || i[2] !== e.requestId ? (t = {
                hostId: e.hostId,
                conversationId: e.conversationId,
                requestId: e.requestId
            }, i[0] = e.conversationId, i[1] = e.hostId, i[2] = e.requestId, i[3] = t) : t = i[3];
            let l = (0, r.x)(F.a, t);
            return i[4] !== l || i[5] !== e ? (n = null == l ? (0, o.jsx)(X, {
                ...e
            }) : (0, o.jsx)(U, {
                onboarding: l
            }), i[4] = l, i[5] = e, i[6] = n) : n = i[6], n
        }

        function X(e) {
            let t, n, u, x, C, F, U, $, X, eo, ea, ei, er, el, es, ec, ed, eu, ep, eg, eh, ef, em, eb, ey, e_, ev, ew, eI, ex, eA, ek, eS, ej, eC, eP, eM, eE, eT, eO, eN, eR, eq, eD, eF, eU, eL = (0, a.c)(227),
                {
                    conversationId: eQ,
                    hostId: eG,
                    requestId: eV,
                    suggestion: eB
                } = e,
                ez = (0, r.y)(D.a),
                eK = (0, p.a)(),
                eW = (0, r.z)(P.f),
                eH = (0, i.c)(),
                [eY, eJ] = (0, d.useState)(null),
                [eZ, e$] = (0, d.useState)(!1),
                [eX, e1] = (0, d.useState)(null),
                [e0, e2] = (0, d.useState)(null),
                [e5, e3] = (0, d.useState)(null),
                e4 = (0, E.c)(eQ);
            eL[0] !== eG ? (t = (0, G.i)(eG), eL[0] = eG, eL[1] = t) : t = eL[1];
            let e6 = t;
            eL[2] !== eQ || eL[3] !== eG || eL[4] !== ez || eL[5] !== eB.suggest_type ? (n = "install" === eB.suggest_type && eG === l.Ub && "shared" === (0, f.D)(ez, eQ, eG), eL[2] = eQ, eL[3] = eG, eL[4] = ez, eL[5] = eB.suggest_type, eL[6] = n) : n = eL[6];
            let e8 = n,
                e7 = e6 || e4.hostId !== eG || null == e4.cwd ? void 0 : [e4.cwd],
                e9 = !e6;
            eL[7] !== eG || eL[8] !== e9 ? (u = {
                hostId: eG,
                enabled: e9
            }, eL[7] = eG, eL[8] = e9, eL[9] = u) : u = eL[9];
            let te = (0, M.a)(u),
                tt = !e6 && "plugin" === eB.tool_type && "enable" === eB.suggest_type,
                tn = !tt && "plugin" === eB.tool_type && (e6 || te),
                to = (0, d.useRef)(!1);
            eL[10] !== eQ || eL[11] !== eG || eL[12] !== eV || eL[13] !== ez ? (x = e => {
                to.current || (to.current = !0, (0, h.b)(ez, eG).replyWithMcpServerElicitationResponse(eQ, eV, (0, s.b)(e)).catch(() => {
                    to.current = !1
                }))
            }, eL[10] = eQ, eL[11] = eG, eL[12] = eV, eL[13] = ez, eL[14] = x) : x = eL[14];
            let ta = x,
                ti = "connector" === eB.tool_type;
            eL[15] !== eG || eL[16] !== ti ? (C = {
                enabled: ti,
                hostId: eG
            }, eL[15] = eG, eL[16] = ti, eL[17] = C) : C = eL[17];
            let {
                data: tr,
                refetch: tl
            } = (0, I.m)(C);
            eL[18] !== eB.tool_id || eL[19] !== eB.tool_type ? (F = "connector" === eB.tool_type ? [eB.tool_id] : [], eL[18] = eB.tool_id, eL[19] = eB.tool_type, eL[20] = F) : F = eL[20], eL[21] !== eG || eL[22] !== F ? (U = {
                appIds: F,
                hostId: eG
            }, eL[21] = eG, eL[22] = F, eL[23] = U) : U = eL[23];
            let {
                data: ts
            } = (0, w.b)(U);
            eL[24] !== ts ? ($ = void 0 === ts ? [] : ts, eL[24] = ts, eL[25] = $) : $ = eL[25];
            let tc = $,
                {
                    data: td,
                    isLoading: tu,
                    refetch: tp
                } = (0, G.l)({
                    enabled: "plugin" === eB.tool_type && tt && te,
                    hostId: eG,
                    roots: e7,
                    resolveActiveRoots: tt
                });
            eL[26] !== eV ? (X = () => {
                e1(eV)
            }, eL[26] = eV, eL[27] = X) : X = eL[27], eL[28] !== eG || eL[29] !== X ? (eo = {
                hostId: eG,
                oauthReferrer: "tool_suggestion",
                onExternalConnectStarted: X
            }, eL[28] = eG, eL[29] = X, eL[30] = eo) : eo = eL[30];
            let {
                clearConnectingApp: tg,
                connectingApp: th,
                handleAppConnectOAuthStarted: tf,
                handleConnectApp: tm,
                handleOpenAppUrl: tb,
                isAppConnectPending: ty
            } = (0, A.a)(eo), {
                clearPendingAppConnect: t_,
                getPendingTeamElicitationConnect: tv,
                isAppConnectCallbackClaimed: tw
            } = (0, m.g)();
            eL[31] !== eQ || eL[32] !== tv || eL[33] !== eG || eL[34] !== eV ? (ea = tv(eG, eQ, eV), eL[31] = eQ, eL[32] = tv, eL[33] = eG, eL[34] = eV, eL[35] = ea) : ea = eL[35];
            let tI = ea,
                tx = tI?.resumeTarget.kind === "service-account" ? tI.resumeTarget : null,
                tA = tx?.pendingElicitationReply?.oauth,
                tk = e5 === eV || null != tI && (tI.claimed || tA?.kind === "connected") && tA?.kind !== "failed" && tI.oauthState !== e0,
                tS = tA?.kind === "connected" ? tI?.oauthState : null,
                tj = tx?.accountId,
                tC = tx?.pendingElicitationReply?.actorUserId;
            eL[36] !== eQ || eL[37] !== e5 || eL[38] !== eG || eL[39] !== eV || eL[40] !== ez ? (ei = () => {
                if (e5 === eV) return ez.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(f.K, eQ) === eG && t(f.Ab, eQ)?.some(e => e.id === eV) && (to.current = !1, e3(null))
                })
            }, er = [eQ, e5, eG, eV, ez], eL[36] = eQ, eL[37] = e5, eL[38] = eG, eL[39] = eV, eL[40] = ez, eL[41] = ei, eL[42] = er) : (ei = eL[41], er = eL[42]), (0, d.useEffect)(ei, er), eL[43] !== eG ? (el = {
                hostId: eG
            }, eL[43] = eG, eL[44] = el) : el = eL[44];
            let {
                setAppEnabled: tP,
                updatingAppId: tM
            } = (0, y.a)(el);
            eL[45] !== eG ? (es = {
                hostId: eG
            }, eL[45] = eG, eL[46] = es) : es = eL[46];
            let {
                pendingPluginId: tE,
                setPluginEnabled: tT
            } = (0, L.d)(es), tO = "plugin" === eB.tool_type ? eB : null, {
                installPlugin: tN,
                status: tR
            } = (0, R.e)(), tq = (0, r.z)(N.n), tD = "connector" === eB.tool_type ? eB : null;
            eL[47] !== tD ? (ec = tD?.suggest_type === "install" && null != (0, b.a)(tD.tool_id), eL[47] = tD, eL[48] = ec) : ec = eL[48];
            let tF = ec,
                tU = null == tD ? null : {
                    kind: "tool-suggestion-elicitation",
                    conversationId: eQ,
                    requestId: eV,
                    response: (0, s.b)("accept")
                },
                tL = null == tO ? null : tO.remote_plugin_id ?? (e6 ? tO.tool_id : null),
                tQ = (0, Q.f)({
                    hostId: eG,
                    pluginId: e6 ? tL : tO?.tool_id ?? null,
                    remotePluginId: tL,
                    roots: e7
                });
            eL[49] !== tn ? (ed = {
                enabled: tn
            }, eL[49] = tn, eL[50] = ed) : ed = eL[50];
            let {
                data: tG,
                isLoading: tV,
                refetch: tB
            } = (0, r.x)(Q.k, tQ, ed), tz = null == tD ? null : (void 0 === tr ? [] : tr).find(e => e.id === tD.tool_id) ?? null;
            eL[51] !== tc || eL[52] !== tD ? (eu = null == tD ? null : tc.find(e => e.id === tD.tool_id) ?? null, eL[51] = tc, eL[52] = tD, eL[53] = eu) : eu = eL[53];
            let tK = eu,
                tW = null == tO ? null : (td ?? []).find(e => e.plugin.id === tO.tool_id) ?? null;
            tt || (tW = tn && null != tG ? (0, V.b)(tG) : null);
            let tH = en({
                    app: tz,
                    plugin: tW,
                    suggestion: eB
                }),
                tY = th?.id === eB.tool_id,
                tJ = null != tU && ty(eB.tool_id, tU),
                tZ = null != tU && tw(eB.tool_id, tU),
                t$ = (0, R.a)(tR, {
                    hostId: eG,
                    pluginId: tR?.phase === "loading" ? tL ?? eB.tool_id : tW?.plugin.id ?? eB.tool_id
                }),
                tX = eX === eV || tJ,
                t1 = "plugin" === eB.tool_type && "install" === eB.suggest_type && "closed" !== tq.kind && tq.hostId === eG && tq.pendingElicitationReply?.conversationId === eQ && tq.pendingElicitationReply?.requestId === eV,
                t0 = e6 && "plugin" === eB.tool_type && "install" === eB.suggest_type,
                t2 = tE === (tW?.plugin.id ?? eB.tool_id);
            "connector" === eB.tool_type ? t2 = "install" === eB.suggest_type ? tY || tZ : tM === eB.tool_id : "install" === eB.suggest_type && (t2 = t$ || t1);
            let t5 = !e8 && (tZ || !t0 && !t2 && (tH || tX)),
                t3 = null != tO && tV || eZ || tk || t2 || (e6 || tt) && "plugin" === eB.tool_type && "enable" === eB.suggest_type && tu,
                t4 = Z.enable;
            t5 ? t4 = Z.continue : "install" === eB.suggest_type && (t4 = Z.install);
            let t6 = null == tW ? tK?.name ?? tz?.name ?? eB.tool_name : (0, c.a)(tW),
                t8 = "plugin" === eB.tool_type ? tW?.description : tK?.description ?? tz?.description,
                t7 = tD?.tool_id,
                t9 = tK?.iconUrl,
                ne = tK?.iconUrlDark;
            eL[54] === Symbol.for("react.memo_cache_sentinel") ? (ep = (0, o.jsx)(j.a, {
                className: "text-secondary",
                "aria-hidden": !1,
                asset: W.a
            }), eL[54] = ep) : ep = eL[54], eL[55] !== t6 || eL[56] !== t7 || eL[57] !== t9 || eL[58] !== ne ? (eg = (0, o.jsx)(S.a, {
                alt: t6,
                className: "icon-md rounded-sm object-contain",
                knownAppId: t7,
                logoUrl: t9,
                logoDarkUrl: ne,
                fallback: ep
            }), eL[55] = t6, eL[56] = t7, eL[57] = t9, eL[58] = ne, eL[59] = eg) : eg = eL[59];
            let nt = eg;
            if ("plugin" === eB.tool_type) {
                let e, t, n = tW?.logoDarkPath ?? null,
                    a = tW?.logoPath ?? null;
                eL[60] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(T.a, {
                    className: "icon-md text-secondary"
                }), eL[60] = e) : e = eL[60], eL[61] !== eB.tool_name || eL[62] !== n || eL[63] !== a ? (t = (0, o.jsx)(S.a, {
                    alt: eB.tool_name,
                    className: "icon-md rounded-sm object-contain",
                    logoDarkUrl: n,
                    logoUrl: a,
                    fallback: e
                }), eL[61] = eB.tool_name, eL[62] = n, eL[63] = a, eL[64] = t) : t = eL[64], nt = t
            }
            eL[65] !== ta ? (eh = () => {
                ta("decline")
            }, eL[65] = ta, eL[66] = eh) : eh = eL[66];
            let nn = eh;
            eL[67] !== tD || eL[68] !== tm || eL[69] !== tb || eL[70] !== tF || eL[71] !== tz || eL[72] !== eV ? (ef = async () => {
                (tF || e1(eV), null != tz) ? await tm(tz): null != tD && (tb(tD.install_url), e1(eV))
            }, eL[67] = tD, eL[68] = tm, eL[69] = tb, eL[70] = tF, eL[71] = tz, eL[72] = eV, eL[73] = ef) : ef = eL[73];
            let no = ef;
            eL[74] !== eQ || eL[75] !== eG || eL[76] !== e6 || eL[77] !== tN || eL[78] !== eK || eL[79] !== tW || eL[80] !== tO?.suggestion_id || eL[81] !== tB || eL[82] !== tL || eL[83] !== eV || eL[84] !== tn || eL[85] !== eB.tool_name || eL[86] !== eW ? (em = async () => {
                let e = tW;
                if (e6 && null != tL) e = {
                    displayName: eB.tool_name,
                    remoteMarketplaceName: l.Vc,
                    remotePluginId: tL
                };
                else if (null == e && tn) {
                    e$(!0);
                    let {
                        data: t
                    } = await tB().finally(() => {
                        e$(!1)
                    });
                    e = null == t ? null : (0, V.b)(t)
                }
                null == e ? eW.danger(eK.formatMessage(Z.missingPlugin), {
                    errorAnalytics: {
                        toastId: "inlineToolSuggestionRequestCard.handleInstallPlugin.missingPlugin"
                    }
                }) : tN(e, {
                    elicitationOwnsConnectorRefresh: !0,
                    hostId: eG,
                    marketplaceAnalytics: {
                        ...O.b.composer,
                        suggestionId: tO?.suggestion_id
                    },
                    origin: "in_conversation_elicitation",
                    pendingElicitationReply: {
                        conversationId: eQ,
                        requestId: eV,
                        response: (0, s.b)("accept")
                    }
                })
            }, eL[74] = eQ, eL[75] = eG, eL[76] = e6, eL[77] = tN, eL[78] = eK, eL[79] = tW, eL[80] = tO?.suggestion_id, eL[81] = tB, eL[82] = tL, eL[83] = eV, eL[84] = tn, eL[85] = eB.tool_name, eL[86] = eW, eL[87] = em) : em = eL[87];
            let na = em;
            eL[88] !== eV ? (eb = async e => {
                let {
                    enabled: t,
                    setEnabled: n
                } = e;
                t && e1(eV);
                try {
                    await n()
                } catch {
                    return
                }
            }, eL[88] = eV, eL[89] = eb) : eb = eL[89];
            let ni = eb;
            eL[90] !== ni || eL[91] !== tP ? (ey = e => {
                let {
                    appId: t,
                    enabled: n
                } = e;
                return ni({
                    enabled: n,
                    setEnabled: () => tP({
                        appId: t,
                        enabled: n
                    })
                })
            }, eL[90] = ni, eL[91] = tP, eL[92] = ey) : ey = eL[92];
            let nr = ey;
            eL[93] !== ni || eL[94] !== e6 || eL[95] !== tW || eL[96] !== tT ? (e_ = e => {
                let {
                    pluginDisplayName: t,
                    pluginId: n,
                    enabled: o
                } = e;
                return ni({
                    enabled: o,
                    setEnabled: () => tT({
                        pluginDisplayName: t,
                        pluginId: n,
                        plugin: e6 ? tW?.plugin : void 0,
                        enabled: o
                    })
                })
            }, eL[93] = ni, eL[94] = e6, eL[95] = tW, eL[96] = tT, eL[97] = e_) : e_ = eL[97];
            let nl = e_;
            eL[98] !== eK || eL[99] !== t0 || eL[100] !== tt || eL[101] !== t1 || eL[102] !== tp || eL[103] !== tB || eL[104] !== ta || eL[105] !== eB || eL[106] !== eW ? (ev = async () => {
                t0 || t1 || (e$(!0), await (async () => {
                    try {
                        let e;
                        if ("connector" === eB.tool_type) return void ta("accept");
                        if (tt) e = (await tp()).data?.find(e => e.plugin.id === eB.tool_id) ?? null;
                        else {
                            let {
                                data: t
                            } = await tB({
                                throwOnError: !0
                            });
                            e = null == t ? null : (0, V.b)(t)
                        }
                        if (!en({
                                app: null,
                                plugin: e,
                                suggestion: eB
                            })) return void eW.danger(eK.formatMessage(Z.pluginNotReady, {
                            toolName: eB.tool_name
                        }), {
                            errorAnalytics: {
                                toastId: "inlineToolSuggestionRequestCard.handleContinue.pluginNotReady"
                            }
                        });
                        ta("accept")
                    } catch (e) {
                        K.a.error("Failed to refresh tool suggestion readiness", {
                            safe: {
                                toolId: eB.tool_id,
                                toolType: eB.tool_type
                            },
                            sensitive: {
                                error: e
                            }
                        }), eW.danger(eK.formatMessage(Z.genericLoadError), {
                            errorAnalytics: {
                                toastId: "inlineToolSuggestionRequestCard.handleContinue.genericLoadError"
                            }
                        })
                    }
                })().finally(() => {
                    e$(!1)
                }))
            }, eL[98] = eK, eL[99] = t0, eL[100] = tt, eL[101] = t1, eL[102] = tp, eL[103] = tB, eL[104] = ta, eL[105] = eB, eL[106] = eW, eL[107] = ev) : ev = eL[107];
            let ns = ev;
            eL[108] !== eK || eL[109] !== eW ? (ew = e => {
                eW.danger(e ?? eK.formatMessage(Z.genericLoadError), {
                    errorAnalytics: {
                        toastId: "inlineToolSuggestionRequestCard.teamInstall"
                    }
                })
            }, eL[108] = eK, eL[109] = eW, eL[110] = ew) : ew = eL[110];
            let nc = ew;
            eL[111] !== t_ || eL[112] !== eQ || eL[113] !== eG || eL[114] !== eV || eL[115] !== ez || eL[116] !== nc || eL[117] !== tI?.oauthState ? (eI = async (e, t) => {
                let n = void 0 === e ? (0, s.b)("accept") : e,
                    o = t ?? tI?.oauthState;
                if (to.current) return !0;
                to.current = !0;
                try {
                    if (await (0, h.b)(ez, eG).replyWithMcpServerElicitationResponse(eQ, eV, n), await (0, m.i)(ez, eG, eQ, eV)) return null != o && (e3(eV), t_({
                        oauthState: o,
                        hostId: eG
                    })), eJ(null), !0
                } catch (e) {
                    K.a.error("Failed to resume the Team chat", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                }
                return to.current = !1, nc(), !1
            }, eL[111] = t_, eL[112] = eQ, eL[113] = eG, eL[114] = eV, eL[115] = ez, eL[116] = nc, eL[117] = tI?.oauthState, eL[118] = eI) : eI = eL[118];
            let nd = eI;
            eL[119] !== eQ || eL[120] !== e0 || eL[121] !== eG || eL[122] !== eH || eL[123] !== eV || eL[124] !== ez || eL[125] !== nd || eL[126] !== nc || eL[127] !== tI ? (ex = async (e, t) => {
                let n = tI?.resumeTarget,
                    o = n?.kind === "service-account" ? n.pendingElicitationReply : void 0,
                    a = o?.oauth;
                if (tI?.oauthState !== e || n?.kind !== "service-account" || null == o || a?.kind !== "connected" || e0 === e) return;
                let i = () => null != o.actorUserId && ez.get(k.j) === o.actorUserId && ez.get(k.e) === n.accountId && ez.get(f.K, eQ) === eG && ez.get(f.Ab, eQ)?.some(e => e.id === eV) === !0;
                if (i()) {
                    if ((0, v.a)(tI.appId) !== (0, v.a)(a.connectorId)) {
                        e2(e), nc();
                        return
                    }
                    try {
                        await Promise.all([eH.invalidateQueries({
                            queryKey: ["service-account-plugins", n.accountId, n.serviceAccountId]
                        }), (0, z.d)(ez, n.accountId)]);
                        let r = await J(ez, eG, eQ, [
                            [a.connectorId]
                        ]);
                        if (t() || !i()) return;
                        if (!r) {
                            e2(e), nc();
                            return
                        }
                        await nd(o.response, e) || t() || e2(e)
                    } catch (n) {
                        t() || (K.a.error("Failed to resume Team app connect elicitation", {
                            safe: {
                                connectorId: a.connectorId
                            },
                            sensitive: {
                                error: n
                            }
                        }), e2(e), nc())
                    }
                }
            }, eL[119] = eQ, eL[120] = e0, eL[121] = eG, eL[122] = eH, eL[123] = eV, eL[124] = ez, eL[125] = nd, eL[126] = nc, eL[127] = tI, eL[128] = ex) : ex = eL[128];
            let nu = (0, d.useEffectEvent)(ex);
            eL[129] !== tS || eL[130] !== eQ || eL[131] !== eG || eL[132] !== eV || eL[133] !== nu || eL[134] !== ez || eL[135] !== tj || eL[136] !== tC ? (eA = () => {
                if (null == tS) return;
                let e = !1,
                    t = !1,
                    n = ez.watch(n => {
                        let {
                            get: o
                        } = n, a = o(f.K, eQ), i = o(f.Ab, eQ), r = o(k.e), l = o(k.j);
                        !t && a === eG && i?.some(e => e.id === eV) && r === tj && l === tC && (t = !0, nu(tS, () => e))
                    });
                return () => {
                    e = !0, n()
                }
            }, eL[129] = tS, eL[130] = eQ, eL[131] = eG, eL[132] = eV, eL[133] = nu, eL[134] = ez, eL[135] = tj, eL[136] = tC, eL[137] = eA) : eA = eL[137], eL[138] !== tS || eL[139] !== eQ || eL[140] !== eG || eL[141] !== eV || eL[142] !== ez || eL[143] !== tj || eL[144] !== tC ? (ek = [ez, eG, eQ, eV, tS, tj, tC], eL[138] = tS, eL[139] = eQ, eL[140] = eG, eL[141] = eV, eL[142] = ez, eL[143] = tj, eL[144] = tC, eL[145] = ek) : ek = eL[145], (0, d.useEffect)(eA, ek), eL[146] !== eQ || eL[147] !== eG || eL[148] !== eK || eL[149] !== ez || eL[150] !== nd || eL[151] !== nc || eL[152] !== eB.tool_name ? (eS = async e => {
                try {
                    if (await J(ez, eG, eQ, e)) return void await nd()
                } catch (e) {
                    K.a.error("Failed to check Team setup", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                }
                nc(eK.formatMessage(Z.pluginNotReady, {
                    toolName: eB.tool_name
                }))
            }, eL[146] = eQ, eL[147] = eG, eL[148] = eK, eL[149] = ez, eL[150] = nd, eL[151] = nc, eL[152] = eB.tool_name, eL[153] = eS) : eS = eL[153];
            let np = eS;
            eL[154] !== eQ || eL[155] !== eG || eL[156] !== eK || eL[157] !== tK || eL[158] !== tL || eL[159] !== ez || eL[160] !== nd || eL[161] !== nc || eL[162] !== eB.tool_id || eL[163] !== eB.tool_type ? (ej = async () => {
                try {
                    let e, t = await Y(ez, eQ);
                    if (null == t) return void nc();
                    if ("connector" === eB.tool_type) {
                        if (null == tK) return void nc();
                        e = {
                            kind: "connector",
                            connectorId: (0, v.a)(eB.tool_id),
                            app: tK
                        }
                    } else {
                        if (null == tL) return void nc(eK.formatMessage(Z.missingPlugin));
                        e = {
                            kind: "plugin",
                            pluginId: tL
                        }
                    }
                    let n = {
                        ...t,
                        start: e
                    };
                    if ("connector" === e.kind && await J(ez, eG, eQ, [
                            [e.connectorId]
                        ]).catch(ee)) return void await nd();
                    eJ(n)
                } catch (e) {
                    K.a.error("Failed to prepare Team setup", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), nc()
                }
            }, eL[154] = eQ, eL[155] = eG, eL[156] = eK, eL[157] = tK, eL[158] = tL, eL[159] = ez, eL[160] = nd, eL[161] = nc, eL[162] = eB.tool_id, eL[163] = eB.tool_type, eL[164] = ej) : ej = eL[164];
            let ng = ej;
            eL[165] !== ns || eL[166] !== no || eL[167] !== na || eL[168] !== nr || eL[169] !== nl || eL[170] !== ng || eL[171] !== eK || eL[172] !== e8 || eL[173] !== tz || eL[174] !== tW || eL[175] !== t5 || eL[176] !== eB.suggest_type || eL[177] !== eB.tool_type || eL[178] !== eW ? (eC = async () => {
                if (e8) {
                    e$(!0), await ng().finally(() => {
                        e$(!1)
                    });
                    return
                }
                t5 ? await ns() : "connector" === eB.tool_type ? "install" === eB.suggest_type ? await no() : null == tz ? await ns() : await nr({
                    appId: tz.id,
                    enabled: !0
                }) : "install" === eB.suggest_type ? await na() : null == tW ? eW.danger(eK.formatMessage(Z.missingPlugin), {
                    errorAnalytics: {
                        toastId: "inlineToolSuggestionRequestCard.handlePrimaryAction.missingPlugin"
                    }
                }) : await nl({
                    pluginDisplayName: (0, c.a)(tW),
                    pluginId: tW.plugin.id,
                    enabled: !0
                })
            }, eL[165] = ns, eL[166] = no, eL[167] = na, eL[168] = nr, eL[169] = nl, eL[170] = ng, eL[171] = eK, eL[172] = e8, eL[173] = tz, eL[174] = tW, eL[175] = t5, eL[176] = eB.suggest_type, eL[177] = eB.tool_type, eL[178] = eW, eL[179] = eC) : eC = eL[179];
            let nh = eC,
                nf = t5 && tX;
            return eL[180] !== eB || eL[181] !== t6 || eL[182] !== nf ? (eP = (0, o.jsx)(et, {
                showContinueTitle: nf,
                suggestion: eB,
                title: t6
            }), eL[180] = eB, eL[181] = t6, eL[182] = nf, eL[183] = eP) : eP = eL[183], eL[184] !== tk || eL[185] !== t4 ? (eM = tk ? (0, o.jsx)(g.a, {
                id: "settings.mcp.appConnectModal.completingConnectionButton",
                defaultMessage: "Finishing connection…",
                description: "Primary button label shown while an app connection OAuth callback is still completing in the background"
            }) : (0, o.jsx)(g.a, {
                ...t4
            }), eL[184] = tk, eL[185] = t4, eL[186] = eM) : eM = eL[186], eL[187] !== nh ? (eE = () => {
                nh()
            }, eL[187] = nh, eL[188] = eE) : eE = eL[188], eL[189] !== nn || eL[190] !== t3 || eL[191] !== t8 || eL[192] !== nt || eL[193] !== eP || eL[194] !== eM || eL[195] !== eE ? (eT = (0, o.jsx)(q.a, {
                icon: nt,
                title: eP,
                description: t8,
                primaryActionLabel: eM,
                isPrimaryActionLoading: t3,
                onDecline: nn,
                onSubmit: eE
            }), eL[189] = nn, eL[190] = t3, eL[191] = t8, eL[192] = nt, eL[193] = eP, eL[194] = eM, eL[195] = eE, eL[196] = eT) : eT = eL[196], eL[197] !== np || eL[198] !== eQ || eL[199] !== eG || eL[200] !== eV || eL[201] !== eY ? (eO = null == eY ? null : (0, o.jsx)(H, {
                ...eY,
                onClose: () => eJ(null),
                onComplete: np,
                elicitation: {
                    hostId: eG,
                    reply: {
                        conversationId: eQ,
                        requestId: eV,
                        response: (0, s.b)("accept")
                    }
                }
            }), eL[197] = np, eL[198] = eQ, eL[199] = eG, eL[200] = eV, eL[201] = eY, eL[202] = eO) : eO = eL[202], eL[203] !== tg ? (eN = e => {
                e || tg()
            }, eL[203] = tg, eL[204] = eN) : eN = eL[204], eL[205] !== eG || eL[206] !== tF || eL[207] !== eH || eL[208] !== tl || eL[209] !== eV ? (eR = async () => {
                tF && e1(eV), await (0, _.a)({
                    hostId: eG,
                    queryClient: eH,
                    refreshAppsList: async () => (await tl()).data ?? []
                })
            }, eL[205] = eG, eL[206] = tF, eL[207] = eH, eL[208] = tl, eL[209] = eV, eL[210] = eR) : eR = eL[210], eL[211] !== eQ || eL[212] !== eV ? (eq = () => ({
                resumeTarget: {
                    kind: "tool-suggestion-elicitation",
                    conversationId: eQ,
                    requestId: eV,
                    response: (0, s.b)("accept")
                }
            }), eL[211] = eQ, eL[212] = eV, eL[213] = eq) : eq = eL[213], eL[214] !== tf ? (eD = e => {
                tf({
                    ...e
                })
            }, eL[214] = tf, eL[215] = eD) : eD = eL[215], eL[216] !== th || eL[217] !== eG || eL[218] !== eN || eL[219] !== eR || eL[220] !== eq || eL[221] !== eD ? (eF = (0, o.jsx)(B.a, {
                oauthReferrer: "tool_suggestion",
                app: th,
                hostId: eG,
                onOpenChange: eN,
                onConnected: eR,
                getOAuthResumeContext: eq,
                onOAuthStarted: eD
            }), eL[216] = th, eL[217] = eG, eL[218] = eN, eL[219] = eR, eL[220] = eq, eL[221] = eD, eL[222] = eF) : eF = eL[222], eL[223] !== eT || eL[224] !== eO || eL[225] !== eF ? (eU = (0, o.jsxs)(o.Fragment, {
                children: [eT, eO, eF]
            }), eL[223] = eT, eL[224] = eO, eL[225] = eF, eL[226] = eU) : eU = eL[226], eU
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
        var o = n("TPAN"),
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
        var o = n("o0PZ"),
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
                } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(544914)]).then(n.bind(n, "O68Q"));
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
            let A = t => "failed" === t.status ? t : "created" === t.status ? {
                    status: "started",
                    route: (0, m.b)(_, t.conversationId),
                    message: (0, c.a)(e, t)?.message
                } : {
                    status: "outcome-unknown",
                    message: (0, c.a)(e, t).message
                },
                k = !1,
                S = async e => {
                    b = e, k && await l?.(A(e))
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
                return k = !0, A(b ?? t)
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
            if (k = !0, "creation" !== j.kind) throw Error("Plugin setup requires a local conversation");
            return A(b ?? j.result)
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
            a = n("o0PZ"),
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
            return "chatgpt" !== e.type || null == e.conversationId || !n(l.h, e.conversationId) && !n(s._, e.conversationId) && !(0, s.xb)(n(s.Y, e.conversationId))
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