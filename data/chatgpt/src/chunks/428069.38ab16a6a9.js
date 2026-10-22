export const __rspack_esm_id = 428069;
export const __rspack_esm_ids = [428069];
export const __webpack_modules__ = {
    VVk: (function(e, t, n) {
        var o = n("Qo"),
            a = n("T0"),
            i = n("GaA"),
            r = n("rv");

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
    zvp: (function(e, t, n) {
        var o = n("GaA"),
            a = n("q7");
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
    FRO: (function(e, t, n) {
        var o = n("A"),
            a = n("Qo"),
            i = n("on"),
            r = n("zd"),
            l = n("wD9"),
            s = n("JN");

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
    TC6: (function(e, t, n) {
        var o = n("A"),
            a = n("Qo"),
            i = n("oy"),
            r = n("ygO"),
            l = n("JN"),
            s = n("mU"),
            c = n("FRO"),
            d = n("lma");

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
                C = S ? "h2" : l.e,
                M = S ? "p" : l.d;
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
            }), v[2] = t) : t = v[2], v[3] !== C ? (n = (0, o.jsx)(C, {
                children: t
            }), v[3] = C, v[4] = n) : n = v[4], v[5] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, o.jsx)(i.a, {
                id: "beacons.connectApp.loadError.description",
                defaultMessage: "Try again, or cancel and return to the previous page",
                description: "Actionable error explanation in the app connection dialog shown to an end user when connector details requested by the user could not be loaded. The dialog offers Retry and Cancel buttons. Keep this concise; there are no placeholders."
            }), v[5] = c) : c = v[5], v[6] !== M ? (u = (0, o.jsx)(M, {
                children: c
            }), v[6] = M, v[7] = u) : u = v[7], v[8] !== n || v[9] !== u ? (p = (0, o.jsx)(s.d, {
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
    Sx5: (function(e, t, n) {
        var o = n("A"),
            a = n("Qo"),
            i = n("ec"),
            r = n("TC6");

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
    IBg: (function(e, t, n) {
        var o = n("Qo"),
            a = n("ir"),
            i = n("xSO"),
            r = n("Xnl"),
            l = n("Qg"),
            s = n("Wf"),
            c = n("VVk"),
            d = n("Dg"),
            u = n("bi"),
            p = n("OiC"),
            g = n("SGs"),
            h = n("a4M"),
            f = n("sL"),
            m = n("OW"),
            b = n("kf"),
            y = n("OM"),
            _ = n("WF");
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
                C = e?.hostId ?? b.a,
                M = (0, r.z)(m.a),
                j = (0, r.A)(p.a),
                P = (0, a.c)(),
                E = (0, f.b)(),
                T = (0, s.a)();
            S[0] !== j || S[1] !== C || S[2] !== M ? (t = (0, u.g)(C, (0, y.a)(M, "403472035"), j ?? void 0), S[0] = j, S[1] = C, S[2] = M, S[3] = t) : t = S[3];
            let q = t;
            S[4] !== q || S[5] !== C || S[6] !== E ? (n = async () => {
                await Promise.all([E((0, c.b)(C)), E(q), E([...h.b, C]), E([...h.c, C]), E(h.f), E(["user-saved-config"])])
            }, S[4] = q, S[5] = C, S[6] = E, S[7] = n) : n = S[7];
            let O = n;
            S[8] !== C || S[9] !== P || S[10] !== M ? (l = async e => {
                let {
                    appId: t,
                    enabled: n
                } = e, o = await (0, h.l)(M, P, C);
                if ("okOverridden" === (await (0, d.b)(M, C).sendRequest("config/batchWrite", {
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
            }, S[8] = C, S[9] = P, S[10] = M, S[11] = l) : l = S[11], S[12] !== q || S[13] !== P ? (w = async e => {
                let {
                    appId: t,
                    enabled: n
                } = e;
                await P.cancelQueries({
                    queryKey: q
                });
                let o = P.getQueryData(q);
                return o && P.setQueryData(q, o.map(e => e.id !== t || e.isEnabled === n ? e : {
                    ...e,
                    isEnabled: n
                })), {
                    previousApps: o
                }
            }, S[12] = q, S[13] = P, S[14] = w) : w = S[14], S[15] !== q || S[16] !== T || S[17] !== E || S[18] !== P || S[19] !== M ? (I = async (e, t, n) => {
                let {
                    appId: o,
                    appName: a,
                    enabled: i
                } = t;
                if (i && n?.previousApps?.find(e => e.id === o)?.isEnabled === !1) {
                    await E(q);
                    let e = P.getQueryData(q)?.find(e => e.id === o);
                    if (e?.isEnabled === !1) throw Error("App remains disabled after updating its configuration")
                }
                let r = a ?? P.getQueryData(q)?.find(e => e.id === o)?.name ?? o;
                M.get(g.h).success(T.formatMessage(i ? v.enableSuccess : v.disableSuccess, {
                    appName: r
                }))
            }, S[15] = q, S[16] = T, S[17] = E, S[18] = P, S[19] = M, S[20] = I) : I = S[20], S[21] !== q || S[22] !== T || S[23] !== P || S[24] !== M ? (x = (e, t, n) => {
                _.a.error("Failed to update app enablement", {
                    safe: {},
                    sensitive: {
                        error: e
                    }
                }), M.get(g.h).danger(T.formatMessage(v.updateError), {
                    errorAnalytics: {
                        toastId: "appsAvailability.onError.updateError"
                    }
                }), n?.previousApps && P.setQueryData(q, n.previousApps)
            }, S[21] = q, S[22] = T, S[23] = P, S[24] = M, S[25] = x) : x = S[25], S[26] !== O || S[27] !== l || S[28] !== w || S[29] !== I || S[30] !== x ? (A = {
                mutationFn: l,
                onMutate: w,
                onSuccess: I,
                onError: x,
                onSettled: O
            }, S[26] = O, S[27] = l, S[28] = w, S[29] = I, S[30] = x, S[31] = A) : A = S[31];
            let N = (0, i.a)(A),
                R = N.isPending ? N.variables?.appId ?? null : null;
            return S[32] !== N.isPending || S[33] !== N.mutateAsync || S[34] !== R ? (k = {
                setAppEnabled: N.mutateAsync,
                isUpdating: N.isPending,
                updatingAppId: R
            }, S[32] = N.isPending, S[33] = N.mutateAsync, S[34] = R, S[35] = k) : k = S[35], k
        }
        n.d(t, {
            a: () => w
        })
    }),
    oxj: (function(e, t, n) {
        var o = n("aM"),
            a = n("VVk"),
            i = n("zvp"),
            r = n("sL"),
            l = n("oo");
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
                projectRoot: (0, o.Qe)(o.cd),
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
    atr: (function(e, t, n) {
        var o = n("A"),
            a = n("Qo"),
            i = n("ir"),
            r = n("Xnl"),
            l = n("aM"),
            s = n("I3F"),
            c = n("zd"),
            d = n("Qg"),
            u = n("Wf"),
            p = n("oy"),
            g = n("Dg"),
            h = n("oo"),
            f = n("Sx5"),
            m = n("yGJ"),
            b = n("NcQ"),
            y = n("CM"),
            _ = n("QSD"),
            v = n("pxe"),
            w = n("Pra"),
            I = n("BQb"),
            x = n("bi"),
            A = n("yxN"),
            k = n("OiC"),
            S = n("Fv"),
            C = n("Ot7"),
            M = n("HOL"),
            j = n("SGs"),
            P = n("OW"),
            E = n("ec"),
            T = n("kf"),
            q = n("hZa"),
            O = n("WF"),
            N = n("Hl7"),
            R = n("Shj");
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
            let t, n, d, F, Q, U, L, W, G, z, B, K, V, H, X, $, J, Y, Z, ee, et, en, eo, ea, ei, er, el, es, ec = (0, a.c)(123),
                {
                    conversationId: ed,
                    hostId: eu,
                    requestId: ep,
                    auth: eg
                } = e,
                eh = (0, r.z)(P.a),
                ef = (0, u.a)(),
                em = (0, i.c)(),
                eb = (0, q.k)(),
                ey = (0, r.A)(j.h),
                [e_, ev] = (0, c.useState)(!1),
                [ew, eI] = (0, c.useState)(!1),
                [ex, eA] = (0, c.useState)(!1),
                ek = (0, c.useRef)(!1),
                eS = eu === l.Vb ? T.a : eu;
            ec[0] !== eS ? (t = {
                hostId: eS
            }, ec[0] = eS, ec[1] = t) : t = ec[1];
            let {
                data: eC,
                hardRefetchAppsList: eM,
                isPending: ej
            } = (0, x.m)(t);
            ec[2] !== eC ? (n = void 0 === eC ? [] : eC, ec[2] = eC, ec[3] = n) : n = ec[3];
            let eP = n;
            ec[4] !== eg.connector.connector_id ? (d = [eg.connector.connector_id], ec[4] = eg.connector.connector_id, ec[5] = d) : d = ec[5], ec[6] !== eS || ec[7] !== d ? (F = {
                appIds: d,
                hostId: eS
            }, ec[6] = eS, ec[7] = d, ec[8] = F) : F = ec[8];
            let {
                data: eE
            } = (0, I.b)(F);
            ec[9] !== eE ? (Q = void 0 === eE ? [] : eE, ec[9] = eE, ec[10] = Q) : Q = ec[10];
            let eT = Q;
            ec[11] === Symbol.for("react.memo_cache_sentinel") ? (U = () => {
                ev(!0)
            }, ec[11] = U) : U = ec[11], ec[12] !== eu ? (L = {
                hostId: eu,
                oauthReferrer: "conversation_auth",
                onExternalConnectStarted: U
            }, ec[12] = eu, ec[13] = L) : L = ec[13];
            let {
                clearConnectingApp: eq,
                clearPendingAppConnect: eO,
                connectingApp: eN,
                handleAppConnectOAuthStarted: eR,
                handleConnectApp: eD,
                handleOpenAppUrl: eF,
                isAppConnectPending: eQ
            } = (0, A.a)(L), {
                isAppConnectCallbackClaimed: eU
            } = (0, m.f)();
            ec[14] !== eP || ec[15] !== eg.connector.connector_id ? (W = eP.find(e => e.id === eg.connector.connector_id) ?? null, ec[14] = eP, ec[15] = eg.connector.connector_id, ec[16] = W) : W = ec[16];
            let eL = W;
            ec[17] !== eg.connector.connector_id || ec[18] !== eT ? (G = eT.find(e => e.id === eg.connector.connector_id) ?? null, ec[17] = eg.connector.connector_id, ec[18] = eT, ec[19] = G) : G = ec[19];
            let eW = G,
                eG = eW?.name ?? eg.connector.connector_name,
                ez = eg.connector.auth_reason,
                eB = "missing_link" === ez;
            ec[20] !== eg.connector.connector_id ? (z = (0, b.a)(eg.connector.connector_id), ec[20] = eg.connector.connector_id, ec[21] = z) : z = ec[21];
            let eK = null != z,
                eV = "oauth_upgrade_required" === ez;
            ec[22] !== eg.connector.connector_id || ec[23] !== eB || ec[24] !== eb ? (B = (0, y.c)({
                connectorId: eg.connector.connector_id,
                disableExposureLog: !0,
                statsigClient: eb
            }), K = eB && null != (0, y.e)(eg.connector.connector_id, B), ec[22] = eg.connector.connector_id, ec[23] = eB, ec[24] = eb, ec[25] = B, ec[26] = K) : (B = ec[25], K = ec[26]);
            let eH = K;
            ec[27] !== eg.connector.connector_id || ec[28] !== eB || ec[29] !== eb ? (V = eB && (0, v.f)({
                connectorId: eg.connector.connector_id,
                disableExposureLog: !0,
                statsigClient: eb
            }), ec[27] = eg.connector.connector_id, ec[28] = eB, ec[29] = eb, ec[30] = V) : V = ec[30];
            let eX = V,
                e$ = eH || eX;
            ec[31] !== eg.connector.connector_id || ec[32] !== ed || ec[33] !== e_ || ec[34] !== eU || ec[35] !== eQ || ec[36] !== ep || ec[37] !== eK ? (X = {
                kind: "connector-auth-elicitation",
                conversationId: ed,
                requestId: ep
            }, H = eU(eg.connector.connector_id, X), $ = !eK && (e_ || eQ(eg.connector.connector_id, X)), ec[31] = eg.connector.connector_id, ec[32] = ed, ec[33] = e_, ec[34] = eU, ec[35] = eQ, ec[36] = ep, ec[37] = eK, ec[38] = H, ec[39] = X, ec[40] = $) : (H = ec[38], X = ec[39], $ = ec[40]);
            let eJ = $,
                eY = eJ ? D.continue : eB ? D.connect : eV ? D.updateAccess : D.reconnect;
            ec[41] !== eg.connector.connector_id || ec[42] !== eO || ec[43] !== ed || ec[44] !== eu || ec[45] !== ef || ec[46] !== ep || ec[47] !== X || ec[48] !== eh || ec[49] !== ey ? (J = e => {
                ek.current || (ek.current = !0, "decline" === e && eO({
                    appId: eg.connector.connector_id,
                    resumeTarget: X
                }), (0, g.b)(eh, eu).replyWithMcpServerElicitationResponse(ed, ep, (0, s.b)(e)).then(() => {
                    eO({
                        appId: eg.connector.connector_id,
                        resumeTarget: X
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
            }, ec[41] = eg.connector.connector_id, ec[42] = eO, ec[43] = ed, ec[44] = eu, ec[45] = ef, ec[46] = ep, ec[47] = X, ec[48] = eh, ec[49] = ey, ec[50] = J) : J = ec[50];
            let eZ = J;
            ec[51] !== eZ ? (Y = () => {
                eZ("decline")
            }, ec[51] = eZ, ec[52] = Y) : Y = ec[52];
            let e1 = Y;
            ec[53] !== eg.connector.connector_id || ec[54] !== eg.connector.install_url || ec[55] !== eg.connector.link_id || ec[56] !== eg.connector.requested_scopes || ec[57] !== eg.url || ec[58] !== ez || ec[59] !== eS || ec[60] !== eG || ec[61] !== B || ec[62] !== eR || ec[63] !== eD || ec[64] !== eF || ec[65] !== ef || ec[66] !== ej || ec[67] !== eL || ec[68] !== em || ec[69] !== eZ || ec[70] !== eK || ec[71] !== X || ec[72] !== eh || ec[73] !== eH || ec[74] !== eX || ec[75] !== e$ || ec[76] !== ey ? (Z = async () => {
                eK ? eI(!0) : e$ && ej || (eA(!0), await (async () => {
                    if (e$ && null != eL) {
                        let e = {
                            scope: eh,
                            appId: eg.connector.connector_id,
                            browserAccountId: (0, k.c)(eh) ?? void 0,
                            hostId: eS,
                            queryClient: em
                        };
                        if ((await (eH ? (0, _.a)({
                                ...e,
                                connectors: B
                            }) : (0, w.a)(e))).length > 0) return void await eD(eL, {
                            forceInApp: !0,
                            googleOAuthBundlePrepared: eH,
                            microsoftOAuthBundlePrepared: eX
                        })
                    }
                    let e = {
                            id: eg.connector.connector_id,
                            installUrl: eL?.installUrl ?? eg.connector.install_url,
                            name: eG
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
                                t = !0, eR({
                                    app: e,
                                    oauthFlowCorrelationId: o?.oauthFlowCorrelationId,
                                    redirectUrl: n,
                                    resumeTarget: X
                                })
                            },
                            openInBrowser: e => {
                                t ? (0, C.f)({
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
                    eA(!1)
                }))
            }, ec[53] = eg.connector.connector_id, ec[54] = eg.connector.install_url, ec[55] = eg.connector.link_id, ec[56] = eg.connector.requested_scopes, ec[57] = eg.url, ec[58] = ez, ec[59] = eS, ec[60] = eG, ec[61] = B, ec[62] = eR, ec[63] = eD, ec[64] = eF, ec[65] = ef, ec[66] = ej, ec[67] = eL, ec[68] = em, ec[69] = eZ, ec[70] = eK, ec[71] = X, ec[72] = eh, ec[73] = eH, ec[74] = eX, ec[75] = e$, ec[76] = ey, ec[77] = Z) : Z = ec[77];
            let e0 = Z;
            ec[78] !== e0 || ec[79] !== eZ || ec[80] !== eJ ? (ee = () => {
                eJ ? eZ("accept") : e0()
            }, ec[78] = e0, ec[79] = eZ, ec[80] = eJ, ec[81] = ee) : ee = ec[81];
            let e2 = ee;
            if (null != eg.connector.connection_consent) return null;
            if (eB) {
                let e;
                ec[82] !== eG ? (e = (0, o.jsx)(p.a, {
                    ...D.missingConnectionDescription,
                    values: {
                        connectorName: eG
                    }
                }), ec[82] = eG, ec[83] = e) : e = ec[83], et = e
            } else if (eV) {
                let e;
                ec[84] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(p.a, {
                    ...D.missingScopesDescription
                }), ec[84] = e) : e = ec[84], et = e
            } else {
                let e;
                ec[85] !== eG ? (e = (0, o.jsx)(p.a, {
                    ...D.reconnectDescription,
                    values: {
                        connectorName: eG
                    }
                }), ec[85] = eG, ec[86] = e) : e = ec[86], et = e
            }
            let e3 = eW?.iconUrl,
                e4 = eW?.iconUrlDark;
            ec[87] === Symbol.for("react.memo_cache_sentinel") ? (en = (0, o.jsx)(M.a, {
                className: "text-secondary",
                "aria-hidden": !1,
                asset: R.a
            }), ec[87] = en) : en = ec[87], ec[88] !== eg.connector.connector_id || ec[89] !== eG || ec[90] !== e3 || ec[91] !== e4 ? (eo = (0, o.jsx)(S.a, {
                alt: eG,
                className: "icon-md rounded-sm object-contain",
                knownAppId: eg.connector.connector_id,
                logoUrl: e3,
                logoDarkUrl: e4,
                fallback: en
            }), ec[88] = eg.connector.connector_id, ec[89] = eG, ec[90] = e3, ec[91] = e4, ec[92] = eo) : eo = ec[92], ec[93] !== eY ? (ea = (0, o.jsx)(p.a, {
                ...eY
            }), ec[93] = eY, ec[94] = ea) : ea = ec[94];
            let e5 = ex || H || e$ && ej;
            return ec[95] !== eG || ec[96] !== et || ec[97] !== e1 || ec[98] !== e2 || ec[99] !== eo || ec[100] !== ea || ec[101] !== e5 ? (ei = (0, o.jsx)(N.a, {
                icon: eo,
                title: eG,
                description: et,
                primaryActionLabel: ea,
                isPrimaryActionLoading: e5,
                onDecline: e1,
                onSubmit: e2
            }), ec[95] = eG, ec[96] = et, ec[97] = e1, ec[98] = e2, ec[99] = eo, ec[100] = ea, ec[101] = e5, ec[102] = ei) : ei = ec[102], ec[103] !== eg.connector.connector_id || ec[104] !== eg.connector.link_id || ec[105] !== ez || ec[106] !== eS || ec[107] !== eM || ec[108] !== eZ || ec[109] !== ew ? (er = ew ? (0, o.jsx)(f.b, {
                oauthReferrer: "conversation_auth",
                connectorId: eg.connector.connector_id,
                connectorAuth: {
                    authReason: ez,
                    linkId: eg.connector.link_id
                },
                hostId: eS,
                onConnected: () => {
                    eZ("accept"), eM().catch(() => {
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
            }) : null, ec[103] = eg.connector.connector_id, ec[104] = eg.connector.link_id, ec[105] = ez, ec[106] = eS, ec[107] = eM, ec[108] = eZ, ec[109] = ew, ec[110] = er) : er = ec[110], ec[111] !== eq || ec[112] !== eN || ec[113] !== eS || ec[114] !== eR || ec[115] !== eZ || ec[116] !== X || ec[117] !== e$ ? (el = e$ ? (0, o.jsx)(E.a, {
                oauthReferrer: "conversation_auth",
                app: eN,
                hostId: eS,
                onConnected: () => {
                    eZ("accept")
                },
                onExternalConnectStarted: () => {
                    ev(!0)
                },
                getOAuthResumeContext: () => ({
                    resumeTarget: X
                }),
                onOAuthStarted: e => {
                    eR({
                        ...e
                    }), ev(!0)
                },
                onOpenChange: e => {
                    e || eq()
                }
            }) : null, ec[111] = eq, ec[112] = eN, ec[113] = eS, ec[114] = eR, ec[115] = eZ, ec[116] = X, ec[117] = e$, ec[118] = el) : el = ec[118], ec[119] !== ei || ec[120] !== er || ec[121] !== el ? (es = (0, o.jsxs)(o.Fragment, {
                children: [ei, er, el]
            }), ec[119] = ei, ec[120] = er, ec[121] = el, ec[122] = es) : es = ec[122], es
        }
        n.d(t, {
            a: () => F
        })
    }),
    tjy: (function(e, t, n) {
        n.d(t, {
            a: () => Y
        });
        var o = n("A"),
            a = n("Qo"),
            i = n("ir"),
            r = n("Xnl"),
            l = n("aM"),
            s = n("I3F"),
            c = n("Ha"),
            d = n("zd"),
            u = n("Qg"),
            p = n("Wf"),
            g = n("oy"),
            h = n("Dg"),
            f = n("Jd"),
            m = n("yGJ"),
            b = n("NcQ"),
            y = n("IBg"),
            _ = n("oxj"),
            v = n("hO"),
            w = n("BQb"),
            I = n("bi"),
            x = n("PYa"),
            A = n("yxN"),
            k = n("Csl"),
            S = n("Fv"),
            C = n("HOL"),
            M = n("Bb"),
            j = n("SGs"),
            P = n("rO"),
            E = n("an"),
            T = n("v6b"),
            q = n("a0"),
            O = n("loz"),
            N = n("nt"),
            R = n("Hl7"),
            D = n("OW"),
            F = n("odx");

        function Q(e) {
            let t, n, i, l, s, d, u, p, h, f, m = (0, a.c)(25),
                {
                    onboarding: b
                } = e,
                y = (0, r.z)(D.a);
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
            return m[13] !== b || m[14] !== y ? (p = () => void(0, F.b)(y, b, "skip"), h = () => void(0, F.b)(y, b, "setup"), m[13] = b, m[14] = y, m[15] = p, m[16] = h) : (p = m[15], h = m[16]), m[17] !== p || m[18] !== h || m[19] !== i || m[20] !== l || m[21] !== s || m[22] !== v || m[23] !== w ? (f = (0, o.jsx)(R.a, {
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
        var U = n("ugf"),
            L = n("EE"),
            W = n("cLd"),
            G = n("ueu"),
            z = n("ec"),
            B = n("nv"),
            K = n("WF"),
            V = n("Shj");
        let H = (0, M.a)(() => Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(462534)]).then(n.bind(n, "cUu")).then(e => e.TeamAddPluginsModal));
        async function X(e, t) {
            return null == e.get(k.e) ? null : null
        }
        async function $(e, t, n, o) {
            let a = new Set(Array.from(await (0, x.a)(e, t, n, "shared"), v.a));
            return o.every(e => e.some(e => a.has((0, v.a)(e))))
        }
        let J = (0, u.f)({
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

        function Y(e) {
            let t, n, i = (0, a.c)(7);
            i[0] !== e.conversationId || i[1] !== e.hostId || i[2] !== e.requestId ? (t = {
                hostId: e.hostId,
                conversationId: e.conversationId,
                requestId: e.requestId
            }, i[0] = e.conversationId, i[1] = e.hostId, i[2] = e.requestId, i[3] = t) : t = i[3];
            let l = (0, r.x)(F.a, t);
            return i[4] !== l || i[5] !== e ? (n = null == l ? (0, o.jsx)(Z, {
                ...e
            }) : (0, o.jsx)(Q, {
                onboarding: l
            }), i[4] = l, i[5] = e, i[6] = n) : n = i[6], n
        }

        function Z(e) {
            let t, n, u, x, M, F, Q, Y, Z, eo, ea, ei, er, el, es, ec, ed, eu, ep, eg, eh, ef, em, eb, ey, e_, ev, ew, eI, ex, eA, ek, eS, eC, eM, ej, eP, eE, eT, eq, eO, eN, eR, eD, eF, eQ, eU = (0, a.c)(227),
                {
                    conversationId: eL,
                    hostId: eW,
                    requestId: eG,
                    suggestion: ez
                } = e,
                eB = (0, r.z)(D.a),
                eK = (0, p.a)(),
                eV = (0, r.A)(j.h),
                eH = (0, i.c)(),
                [eX, e$] = (0, d.useState)(null),
                [eJ, eY] = (0, d.useState)(!1),
                [eZ, e1] = (0, d.useState)(null),
                [e0, e2] = (0, d.useState)(null),
                [e3, e4] = (0, d.useState)(null),
                e5 = (0, E.c)(eL);
            eU[0] !== eW ? (t = (0, W.i)(eW), eU[0] = eW, eU[1] = t) : t = eU[1];
            let e6 = t;
            eU[2] !== eL || eU[3] !== eW || eU[4] !== eB || eU[5] !== ez.suggest_type ? (n = "install" === ez.suggest_type && eW === l.Vb && "shared" === (0, f.F)(eB, eL, eW), eU[2] = eL, eU[3] = eW, eU[4] = eB, eU[5] = ez.suggest_type, eU[6] = n) : n = eU[6];
            let e8 = n,
                e7 = e6 || e5.hostId !== eW || null == e5.cwd ? void 0 : [e5.cwd],
                e9 = !e6;
            eU[7] !== eW || eU[8] !== e9 ? (u = {
                hostId: eW,
                enabled: e9
            }, eU[7] = eW, eU[8] = e9, eU[9] = u) : u = eU[9];
            let te = (0, P.a)(u),
                tt = !e6 && "plugin" === ez.tool_type && "enable" === ez.suggest_type,
                tn = !tt && "plugin" === ez.tool_type && (e6 || te),
                to = (0, d.useRef)(!1);
            eU[10] !== eL || eU[11] !== eW || eU[12] !== eG || eU[13] !== eB ? (x = e => {
                to.current || (to.current = !0, (0, h.b)(eB, eW).replyWithMcpServerElicitationResponse(eL, eG, (0, s.b)(e)))
            }, eU[10] = eL, eU[11] = eW, eU[12] = eG, eU[13] = eB, eU[14] = x) : x = eU[14];
            let ta = x,
                ti = "connector" === ez.tool_type;
            eU[15] !== eW || eU[16] !== ti ? (M = {
                enabled: ti,
                hostId: eW
            }, eU[15] = eW, eU[16] = ti, eU[17] = M) : M = eU[17];
            let {
                data: tr,
                refetch: tl
            } = (0, I.m)(M);
            eU[18] !== ez.tool_id || eU[19] !== ez.tool_type ? (F = "connector" === ez.tool_type ? [ez.tool_id] : [], eU[18] = ez.tool_id, eU[19] = ez.tool_type, eU[20] = F) : F = eU[20], eU[21] !== eW || eU[22] !== F ? (Q = {
                appIds: F,
                hostId: eW
            }, eU[21] = eW, eU[22] = F, eU[23] = Q) : Q = eU[23];
            let {
                data: ts
            } = (0, w.b)(Q);
            eU[24] !== ts ? (Y = void 0 === ts ? [] : ts, eU[24] = ts, eU[25] = Y) : Y = eU[25];
            let tc = Y,
                {
                    data: td,
                    isLoading: tu,
                    refetch: tp
                } = (0, W.l)({
                    enabled: "plugin" === ez.tool_type && tt && te,
                    hostId: eW,
                    roots: e7,
                    resolveActiveRoots: tt
                });
            eU[26] !== eG ? (Z = () => {
                e1(eG)
            }, eU[26] = eG, eU[27] = Z) : Z = eU[27], eU[28] !== eW || eU[29] !== Z ? (eo = {
                hostId: eW,
                oauthReferrer: "tool_suggestion",
                onExternalConnectStarted: Z
            }, eU[28] = eW, eU[29] = Z, eU[30] = eo) : eo = eU[30];
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
            } = (0, m.f)();
            eU[31] !== eL || eU[32] !== tv || eU[33] !== eW || eU[34] !== eG ? (ea = tv(eW, eL, eG), eU[31] = eL, eU[32] = tv, eU[33] = eW, eU[34] = eG, eU[35] = ea) : ea = eU[35];
            let tI = ea,
                tx = tI?.resumeTarget.kind === "service-account" ? tI.resumeTarget : null,
                tA = tx?.pendingElicitationReply?.oauth,
                tk = e3 === eG || null != tI && (tI.claimed || tA?.kind === "connected") && tA?.kind !== "failed" && tI.oauthState !== e0,
                tS = tA?.kind === "connected" ? tI?.oauthState : null,
                tC = tx?.accountId,
                tM = tx?.pendingElicitationReply?.actorUserId;
            eU[36] !== eL || eU[37] !== e3 || eU[38] !== eW || eU[39] !== eG || eU[40] !== eB ? (ei = () => {
                if (e3 === eG) return eB.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(f.M, eL) === eW && t(f.Cb, eL)?.some(e => e.id === eG) && (to.current = !1, e4(null))
                })
            }, er = [eL, e3, eW, eG, eB], eU[36] = eL, eU[37] = e3, eU[38] = eW, eU[39] = eG, eU[40] = eB, eU[41] = ei, eU[42] = er) : (ei = eU[41], er = eU[42]), (0, d.useEffect)(ei, er), eU[43] !== eW ? (el = {
                hostId: eW
            }, eU[43] = eW, eU[44] = el) : el = eU[44];
            let {
                setAppEnabled: tj,
                updatingAppId: tP
            } = (0, y.a)(el);
            eU[45] !== eW ? (es = {
                hostId: eW
            }, eU[45] = eW, eU[46] = es) : es = eU[46];
            let {
                pendingPluginId: tE,
                setPluginEnabled: tT
            } = (0, U.d)(es), tq = "plugin" === ez.tool_type ? ez : null, {
                installPlugin: tO,
                status: tN
            } = (0, N.e)(), tR = (0, r.A)(O.n), tD = "connector" === ez.tool_type ? ez : null;
            eU[47] !== tD ? (ec = tD?.suggest_type === "install" && null != (0, b.a)(tD.tool_id), eU[47] = tD, eU[48] = ec) : ec = eU[48];
            let tF = ec,
                tQ = null == tD ? null : {
                    kind: "tool-suggestion-elicitation",
                    conversationId: eL,
                    requestId: eG,
                    response: (0, s.b)("accept")
                },
                tU = null == tq ? null : tq.remote_plugin_id ?? (e6 ? tq.tool_id : null),
                tL = (0, L.f)({
                    hostId: eW,
                    pluginId: e6 ? tU : tq?.tool_id ?? null,
                    remotePluginId: tU,
                    roots: e7
                });
            eU[49] !== tn ? (ed = {
                enabled: tn
            }, eU[49] = tn, eU[50] = ed) : ed = eU[50];
            let {
                data: tW,
                isLoading: tG,
                refetch: tz
            } = (0, r.x)(L.k, tL, ed), tB = null == tD ? null : (void 0 === tr ? [] : tr).find(e => e.id === tD.tool_id) ?? null;
            eU[51] !== tc || eU[52] !== tD ? (eu = null == tD ? null : tc.find(e => e.id === tD.tool_id) ?? null, eU[51] = tc, eU[52] = tD, eU[53] = eu) : eu = eU[53];
            let tK = eu,
                tV = null == tq ? null : (td ?? []).find(e => e.plugin.id === tq.tool_id) ?? null;
            tt || (tV = tn && null != tW ? (0, G.b)(tW) : null);
            let tH = en({
                    app: tB,
                    plugin: tV,
                    suggestion: ez
                }),
                tX = th?.id === ez.tool_id,
                t$ = null != tQ && ty(ez.tool_id, tQ),
                tJ = null != tQ && tw(ez.tool_id, tQ),
                tY = (0, N.a)(tN, {
                    hostId: eW,
                    pluginId: tN?.phase === "loading" ? tU ?? ez.tool_id : tV?.plugin.id ?? ez.tool_id
                }),
                tZ = eZ === eG || t$,
                t1 = "plugin" === ez.tool_type && "install" === ez.suggest_type && "closed" !== tR.kind && tR.hostId === eW && tR.pendingElicitationReply?.conversationId === eL && tR.pendingElicitationReply?.requestId === eG,
                t0 = e6 && "plugin" === ez.tool_type && "install" === ez.suggest_type,
                t2 = tE === (tV?.plugin.id ?? ez.tool_id);
            "connector" === ez.tool_type ? t2 = "install" === ez.suggest_type ? tX || tJ : tP === ez.tool_id : "install" === ez.suggest_type && (t2 = tY || t1);
            let t3 = !e8 && (tJ || !t0 && !t2 && (tH || tZ)),
                t4 = null != tq && tG || eJ || tk || t2 || (e6 || tt) && "plugin" === ez.tool_type && "enable" === ez.suggest_type && tu,
                t5 = J.enable;
            t3 ? t5 = J.continue : "install" === ez.suggest_type && (t5 = J.install);
            let t6 = null == tV ? tK?.name ?? tB?.name ?? ez.tool_name : (0, c.a)(tV),
                t8 = "plugin" === ez.tool_type ? tV?.description : tK?.description ?? tB?.description,
                t7 = tD?.tool_id,
                t9 = tK?.iconUrl,
                ne = tK?.iconUrlDark;
            eU[54] === Symbol.for("react.memo_cache_sentinel") ? (ep = (0, o.jsx)(C.a, {
                className: "text-secondary",
                "aria-hidden": !1,
                asset: V.a
            }), eU[54] = ep) : ep = eU[54], eU[55] !== t6 || eU[56] !== t7 || eU[57] !== t9 || eU[58] !== ne ? (eg = (0, o.jsx)(S.a, {
                alt: t6,
                className: "icon-md rounded-sm object-contain",
                knownAppId: t7,
                logoUrl: t9,
                logoDarkUrl: ne,
                fallback: ep
            }), eU[55] = t6, eU[56] = t7, eU[57] = t9, eU[58] = ne, eU[59] = eg) : eg = eU[59];
            let nt = eg;
            if ("plugin" === ez.tool_type) {
                let e, t, n = tV?.logoDarkPath ?? null,
                    a = tV?.logoPath ?? null;
                eU[60] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(T.a, {
                    className: "icon-md text-secondary"
                }), eU[60] = e) : e = eU[60], eU[61] !== ez.tool_name || eU[62] !== n || eU[63] !== a ? (t = (0, o.jsx)(S.a, {
                    alt: ez.tool_name,
                    className: "icon-md rounded-sm object-contain",
                    logoDarkUrl: n,
                    logoUrl: a,
                    fallback: e
                }), eU[61] = ez.tool_name, eU[62] = n, eU[63] = a, eU[64] = t) : t = eU[64], nt = t
            }
            eU[65] !== ta ? (eh = () => {
                ta("decline")
            }, eU[65] = ta, eU[66] = eh) : eh = eU[66];
            let nn = eh;
            eU[67] !== tD || eU[68] !== tm || eU[69] !== tb || eU[70] !== tF || eU[71] !== tB || eU[72] !== eG ? (ef = async () => {
                (tF || e1(eG), null != tB) ? await tm(tB): null != tD && (tb(tD.install_url), e1(eG))
            }, eU[67] = tD, eU[68] = tm, eU[69] = tb, eU[70] = tF, eU[71] = tB, eU[72] = eG, eU[73] = ef) : ef = eU[73];
            let no = ef;
            eU[74] !== eL || eU[75] !== eW || eU[76] !== e6 || eU[77] !== tO || eU[78] !== eK || eU[79] !== tV || eU[80] !== tq?.suggestion_id || eU[81] !== tz || eU[82] !== tU || eU[83] !== eG || eU[84] !== tn || eU[85] !== ez.tool_name || eU[86] !== eV ? (em = async () => {
                let e = tV;
                if (e6 && null != tU) e = {
                    displayName: ez.tool_name,
                    remoteMarketplaceName: l.Wc,
                    remotePluginId: tU
                };
                else if (null == e && tn) {
                    eY(!0);
                    let {
                        data: t
                    } = await tz().finally(() => {
                        eY(!1)
                    });
                    e = null == t ? null : (0, G.b)(t)
                }
                null == e ? eV.danger(eK.formatMessage(J.missingPlugin), {
                    errorAnalytics: {
                        toastId: "inlineToolSuggestionRequestCard.handleInstallPlugin.missingPlugin"
                    }
                }) : tO(e, {
                    elicitationOwnsConnectorRefresh: !0,
                    hostId: eW,
                    marketplaceAnalytics: {
                        ...q.b.composer,
                        suggestionId: tq?.suggestion_id
                    },
                    origin: "in_conversation_elicitation",
                    pendingElicitationReply: {
                        conversationId: eL,
                        requestId: eG,
                        response: (0, s.b)("accept")
                    }
                })
            }, eU[74] = eL, eU[75] = eW, eU[76] = e6, eU[77] = tO, eU[78] = eK, eU[79] = tV, eU[80] = tq?.suggestion_id, eU[81] = tz, eU[82] = tU, eU[83] = eG, eU[84] = tn, eU[85] = ez.tool_name, eU[86] = eV, eU[87] = em) : em = eU[87];
            let na = em;
            eU[88] !== eG ? (eb = async e => {
                let {
                    enabled: t,
                    setEnabled: n
                } = e;
                t && e1(eG);
                try {
                    await n()
                } catch {
                    return
                }
            }, eU[88] = eG, eU[89] = eb) : eb = eU[89];
            let ni = eb;
            eU[90] !== ni || eU[91] !== tj ? (ey = e => {
                let {
                    appId: t,
                    enabled: n
                } = e;
                return ni({
                    enabled: n,
                    setEnabled: () => tj({
                        appId: t,
                        enabled: n
                    })
                })
            }, eU[90] = ni, eU[91] = tj, eU[92] = ey) : ey = eU[92];
            let nr = ey;
            eU[93] !== ni || eU[94] !== e6 || eU[95] !== tV || eU[96] !== tT ? (e_ = e => {
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
                        plugin: e6 ? tV?.plugin : void 0,
                        enabled: o
                    })
                })
            }, eU[93] = ni, eU[94] = e6, eU[95] = tV, eU[96] = tT, eU[97] = e_) : e_ = eU[97];
            let nl = e_;
            eU[98] !== eK || eU[99] !== t0 || eU[100] !== tt || eU[101] !== t1 || eU[102] !== tp || eU[103] !== tz || eU[104] !== ta || eU[105] !== ez || eU[106] !== eV ? (ev = async () => {
                t0 || t1 || (eY(!0), await (async () => {
                    try {
                        let e;
                        if ("connector" === ez.tool_type) return void ta("accept");
                        if (tt) e = (await tp()).data?.find(e => e.plugin.id === ez.tool_id) ?? null;
                        else {
                            let {
                                data: t
                            } = await tz({
                                throwOnError: !0
                            });
                            e = null == t ? null : (0, G.b)(t)
                        }
                        if (!en({
                                app: null,
                                plugin: e,
                                suggestion: ez
                            })) return void eV.danger(eK.formatMessage(J.pluginNotReady, {
                            toolName: ez.tool_name
                        }), {
                            errorAnalytics: {
                                toastId: "inlineToolSuggestionRequestCard.handleContinue.pluginNotReady"
                            }
                        });
                        ta("accept")
                    } catch (e) {
                        K.a.error("Failed to refresh tool suggestion readiness", {
                            safe: {
                                toolId: ez.tool_id,
                                toolType: ez.tool_type
                            },
                            sensitive: {
                                error: e
                            }
                        }), eV.danger(eK.formatMessage(J.genericLoadError), {
                            errorAnalytics: {
                                toastId: "inlineToolSuggestionRequestCard.handleContinue.genericLoadError"
                            }
                        })
                    }
                })().finally(() => {
                    eY(!1)
                }))
            }, eU[98] = eK, eU[99] = t0, eU[100] = tt, eU[101] = t1, eU[102] = tp, eU[103] = tz, eU[104] = ta, eU[105] = ez, eU[106] = eV, eU[107] = ev) : ev = eU[107];
            let ns = ev;
            eU[108] !== eK || eU[109] !== eV ? (ew = e => {
                eV.danger(e ?? eK.formatMessage(J.genericLoadError), {
                    errorAnalytics: {
                        toastId: "inlineToolSuggestionRequestCard.teamInstall"
                    }
                })
            }, eU[108] = eK, eU[109] = eV, eU[110] = ew) : ew = eU[110];
            let nc = ew;
            eU[111] !== t_ || eU[112] !== eL || eU[113] !== eW || eU[114] !== eG || eU[115] !== eB || eU[116] !== nc || eU[117] !== tI?.oauthState ? (eI = async (e, t) => {
                let n = void 0 === e ? (0, s.b)("accept") : e,
                    o = t ?? tI?.oauthState;
                if (to.current) return !0;
                to.current = !0;
                try {
                    if (await (0, h.b)(eB, eW).replyWithMcpServerElicitationResponse(eL, eG, n), await (0, m.h)(eB, eW, eL, eG)) return null != o && (e4(eG), t_({
                        oauthState: o,
                        hostId: eW
                    })), e$(null), !0
                } catch (e) {
                    K.a.error("Failed to resume the Team chat", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                }
                return to.current = !1, nc(), !1
            }, eU[111] = t_, eU[112] = eL, eU[113] = eW, eU[114] = eG, eU[115] = eB, eU[116] = nc, eU[117] = tI?.oauthState, eU[118] = eI) : eI = eU[118];
            let nd = eI;
            eU[119] !== eL || eU[120] !== e0 || eU[121] !== eW || eU[122] !== eH || eU[123] !== eG || eU[124] !== eB || eU[125] !== nd || eU[126] !== nc || eU[127] !== tI ? (ex = async (e, t) => {
                let n = tI?.resumeTarget,
                    o = n?.kind === "service-account" ? n.pendingElicitationReply : void 0,
                    a = o?.oauth;
                if (tI?.oauthState !== e || n?.kind !== "service-account" || null == o || a?.kind !== "connected" || e0 === e) return;
                let i = () => null != o.actorUserId && eB.get(k.j) === o.actorUserId && eB.get(k.e) === n.accountId && eB.get(f.M, eL) === eW && eB.get(f.Cb, eL)?.some(e => e.id === eG) === !0;
                if (i()) {
                    if ((0, v.a)(tI.appId) !== (0, v.a)(a.connectorId)) {
                        e2(e), nc();
                        return
                    }
                    try {
                        await Promise.all([eH.invalidateQueries({
                            queryKey: ["service-account-plugins", n.accountId, n.serviceAccountId]
                        }), (0, B.d)(eB, n.accountId)]);
                        let r = await $(eB, eW, eL, [
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
            }, eU[119] = eL, eU[120] = e0, eU[121] = eW, eU[122] = eH, eU[123] = eG, eU[124] = eB, eU[125] = nd, eU[126] = nc, eU[127] = tI, eU[128] = ex) : ex = eU[128];
            let nu = (0, d.useEffectEvent)(ex);
            eU[129] !== tS || eU[130] !== eL || eU[131] !== eW || eU[132] !== eG || eU[133] !== nu || eU[134] !== eB || eU[135] !== tC || eU[136] !== tM ? (eA = () => {
                if (null == tS) return;
                let e = !1,
                    t = !1,
                    n = eB.watch(n => {
                        let {
                            get: o
                        } = n, a = o(f.M, eL), i = o(f.Cb, eL), r = o(k.e), l = o(k.j);
                        !t && a === eW && i?.some(e => e.id === eG) && r === tC && l === tM && (t = !0, nu(tS, () => e))
                    });
                return () => {
                    e = !0, n()
                }
            }, eU[129] = tS, eU[130] = eL, eU[131] = eW, eU[132] = eG, eU[133] = nu, eU[134] = eB, eU[135] = tC, eU[136] = tM, eU[137] = eA) : eA = eU[137], eU[138] !== tS || eU[139] !== eL || eU[140] !== eW || eU[141] !== eG || eU[142] !== eB || eU[143] !== tC || eU[144] !== tM ? (ek = [eB, eW, eL, eG, tS, tC, tM], eU[138] = tS, eU[139] = eL, eU[140] = eW, eU[141] = eG, eU[142] = eB, eU[143] = tC, eU[144] = tM, eU[145] = ek) : ek = eU[145], (0, d.useEffect)(eA, ek), eU[146] !== eL || eU[147] !== eW || eU[148] !== eK || eU[149] !== eB || eU[150] !== nd || eU[151] !== nc || eU[152] !== ez.tool_name ? (eS = async e => {
                try {
                    if (await $(eB, eW, eL, e)) return void await nd()
                } catch (e) {
                    K.a.error("Failed to check Team setup", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                }
                nc(eK.formatMessage(J.pluginNotReady, {
                    toolName: ez.tool_name
                }))
            }, eU[146] = eL, eU[147] = eW, eU[148] = eK, eU[149] = eB, eU[150] = nd, eU[151] = nc, eU[152] = ez.tool_name, eU[153] = eS) : eS = eU[153];
            let np = eS;
            eU[154] !== eL || eU[155] !== eW || eU[156] !== eK || eU[157] !== tK || eU[158] !== tU || eU[159] !== eB || eU[160] !== nd || eU[161] !== nc || eU[162] !== ez.tool_id || eU[163] !== ez.tool_type ? (eC = async () => {
                try {
                    let e, t = await X(eB, eL);
                    if (null == t) return void nc();
                    if ("connector" === ez.tool_type) {
                        if (null == tK) return void nc();
                        e = {
                            kind: "connector",
                            connectorId: (0, v.a)(ez.tool_id),
                            app: tK
                        }
                    } else {
                        if (null == tU) return void nc(eK.formatMessage(J.missingPlugin));
                        e = {
                            kind: "plugin",
                            pluginId: tU
                        }
                    }
                    let n = {
                        ...t,
                        start: e
                    };
                    if ("connector" === e.kind && await $(eB, eW, eL, [
                            [e.connectorId]
                        ]).catch(ee)) return void await nd();
                    e$(n)
                } catch (e) {
                    K.a.error("Failed to prepare Team setup", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), nc()
                }
            }, eU[154] = eL, eU[155] = eW, eU[156] = eK, eU[157] = tK, eU[158] = tU, eU[159] = eB, eU[160] = nd, eU[161] = nc, eU[162] = ez.tool_id, eU[163] = ez.tool_type, eU[164] = eC) : eC = eU[164];
            let ng = eC;
            eU[165] !== ns || eU[166] !== no || eU[167] !== na || eU[168] !== nr || eU[169] !== nl || eU[170] !== ng || eU[171] !== eK || eU[172] !== e8 || eU[173] !== tB || eU[174] !== tV || eU[175] !== t3 || eU[176] !== ez.suggest_type || eU[177] !== ez.tool_type || eU[178] !== eV ? (eM = async () => {
                if (e8) {
                    eY(!0), await ng().finally(() => {
                        eY(!1)
                    });
                    return
                }
                t3 ? await ns() : "connector" === ez.tool_type ? "install" === ez.suggest_type ? await no() : null == tB ? await ns() : await nr({
                    appId: tB.id,
                    enabled: !0
                }) : "install" === ez.suggest_type ? await na() : null == tV ? eV.danger(eK.formatMessage(J.missingPlugin), {
                    errorAnalytics: {
                        toastId: "inlineToolSuggestionRequestCard.handlePrimaryAction.missingPlugin"
                    }
                }) : await nl({
                    pluginDisplayName: (0, c.a)(tV),
                    pluginId: tV.plugin.id,
                    enabled: !0
                })
            }, eU[165] = ns, eU[166] = no, eU[167] = na, eU[168] = nr, eU[169] = nl, eU[170] = ng, eU[171] = eK, eU[172] = e8, eU[173] = tB, eU[174] = tV, eU[175] = t3, eU[176] = ez.suggest_type, eU[177] = ez.tool_type, eU[178] = eV, eU[179] = eM) : eM = eU[179];
            let nh = eM,
                nf = t3 && tZ;
            return eU[180] !== ez || eU[181] !== t6 || eU[182] !== nf ? (ej = (0, o.jsx)(et, {
                showContinueTitle: nf,
                suggestion: ez,
                title: t6
            }), eU[180] = ez, eU[181] = t6, eU[182] = nf, eU[183] = ej) : ej = eU[183], eU[184] !== tk || eU[185] !== t5 ? (eP = tk ? (0, o.jsx)(g.a, {
                id: "settings.mcp.appConnectModal.completingConnectionButton",
                defaultMessage: "Finishing connection…",
                description: "Primary button label shown while an app connection OAuth callback is still completing in the background"
            }) : (0, o.jsx)(g.a, {
                ...t5
            }), eU[184] = tk, eU[185] = t5, eU[186] = eP) : eP = eU[186], eU[187] !== nh ? (eE = () => {
                nh()
            }, eU[187] = nh, eU[188] = eE) : eE = eU[188], eU[189] !== nn || eU[190] !== t4 || eU[191] !== t8 || eU[192] !== nt || eU[193] !== ej || eU[194] !== eP || eU[195] !== eE ? (eT = (0, o.jsx)(R.a, {
                icon: nt,
                title: ej,
                description: t8,
                primaryActionLabel: eP,
                isPrimaryActionLoading: t4,
                onDecline: nn,
                onSubmit: eE
            }), eU[189] = nn, eU[190] = t4, eU[191] = t8, eU[192] = nt, eU[193] = ej, eU[194] = eP, eU[195] = eE, eU[196] = eT) : eT = eU[196], eU[197] !== np || eU[198] !== eL || eU[199] !== eW || eU[200] !== eG || eU[201] !== eX ? (eq = null == eX ? null : (0, o.jsx)(H, {
                ...eX,
                onClose: () => e$(null),
                onComplete: np,
                elicitation: {
                    hostId: eW,
                    reply: {
                        conversationId: eL,
                        requestId: eG,
                        response: (0, s.b)("accept")
                    }
                }
            }), eU[197] = np, eU[198] = eL, eU[199] = eW, eU[200] = eG, eU[201] = eX, eU[202] = eq) : eq = eU[202], eU[203] !== tg ? (eO = e => {
                e || tg()
            }, eU[203] = tg, eU[204] = eO) : eO = eU[204], eU[205] !== eW || eU[206] !== tF || eU[207] !== eH || eU[208] !== tl || eU[209] !== eG ? (eN = async () => {
                tF && e1(eG), await (0, _.a)({
                    hostId: eW,
                    queryClient: eH,
                    refreshAppsList: async () => (await tl()).data ?? []
                })
            }, eU[205] = eW, eU[206] = tF, eU[207] = eH, eU[208] = tl, eU[209] = eG, eU[210] = eN) : eN = eU[210], eU[211] !== eL || eU[212] !== eG ? (eR = () => ({
                resumeTarget: {
                    kind: "tool-suggestion-elicitation",
                    conversationId: eL,
                    requestId: eG,
                    response: (0, s.b)("accept")
                }
            }), eU[211] = eL, eU[212] = eG, eU[213] = eR) : eR = eU[213], eU[214] !== tf ? (eD = e => {
                tf({
                    ...e
                })
            }, eU[214] = tf, eU[215] = eD) : eD = eU[215], eU[216] !== th || eU[217] !== eW || eU[218] !== eO || eU[219] !== eN || eU[220] !== eR || eU[221] !== eD ? (eF = (0, o.jsx)(z.a, {
                oauthReferrer: "tool_suggestion",
                app: th,
                hostId: eW,
                onOpenChange: eO,
                onConnected: eN,
                getOAuthResumeContext: eR,
                onOAuthStarted: eD
            }), eU[216] = th, eU[217] = eW, eU[218] = eO, eU[219] = eN, eU[220] = eR, eU[221] = eD, eU[222] = eF) : eF = eU[222], eU[223] !== eT || eU[224] !== eq || eU[225] !== eF ? (eQ = (0, o.jsxs)(o.Fragment, {
                children: [eT, eq, eF]
            }), eU[223] = eT, eU[224] = eq, eU[225] = eF, eU[226] = eQ) : eQ = eU[226], eQ
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
    jlt: (function(e, t, n) {
        var o = n("TP"),
            a = n("CjT"),
            i = n("yG");

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
    wGq: (function(e, t, n) {
        var o = n("aM"),
            a = n("MK"),
            i = n("Ha"),
            r = n("eY"),
            l = n("Dg"),
            s = n("whf"),
            c = n("z0l"),
            d = n("PAz"),
            u = n("OiC"),
            p = n("Csl"),
            g = n("XN"),
            h = n("MX6"),
            f = n("svj"),
            m = n("jhE");
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
            if (_.hostId === o.Vb) {
                let t = await (0, c.b)(e, _.hostId, {
                    input: [{
                        type: "text",
                        text: I,
                        text_elements: []
                    }, ...x],
                    cwd: o.cd,
                    workspaceRoots: [o.cd],
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
            let C = await (0, r.b)({
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
            if (k = !0, "creation" !== C.kind) throw Error("Plugin setup requires a local conversation");
            return A(b ?? C.result)
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
    odx: (function(e, t, n) {
        var o = n("Xnl"),
            a = n("MK"),
            i = n("SGs"),
            r = n("OW"),
            l = n("jlt"),
            s = n("wGq");
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
                    null != n.message && e.get(i.h).danger(n.message, {
                        errorAnalytics: {
                            toastId: "plugins.onboarding.sendOutcomeUnknown"
                        }
                    })
                }
                e.get(c, o) === d && e.set(c, o, null)
            } catch (t) {
                e.get(i.h).danger((0, a.a)(t), {
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
    jhE: (function(e, t, n) {
        var o = n("Xnl"),
            a = n("aM"),
            i = n("hz"),
            r = n("OF"),
            l = n("Ow"),
            s = n("Mr"),
            c = n("jA"),
            d = n("j9"),
            u = n("OW"),
            p = n("Bc5");
        let g = (0, o.d)(u.a, (e, t) => {
            let {
                get: n
            } = t;
            return "chatgpt" !== e.type || null == e.conversationId || !n(l.h, e.conversationId) && !n(s.Z, e.conversationId) && !(0, s.wb)(n(s.X, e.conversationId))
        });

        function h(e, t) {
            return "chatgpt" === e.type ? (0, c.c)(t) : (0, p.a)((0, a.$d)((0, a.Me)(t)), e.hostId)
        }

        function f(e, t) {
            return null != t.conversationId || ("chatgpt" === t.type ? e.get(i.a, {
                name: "chatgpt"
            }).isCapable && "allowed" === e.get(r.p).status : t.hostId !== a.Vb || e.get(d.d))
        }
        n.d(t, {
            a: () => f,
            b: () => h
        }, {
            c: g
        })
    })
};