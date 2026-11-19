export const __rspack_esm_ids = [188556];
export const __webpack_modules__ = {
    P3fW: (function(e, t, a) {
        a.d(t, {
            a: () => j
        });
        var n = a("rEML"),
            r = a("ABep"),
            o = a("QosV"),
            s = a("v8gE"),
            c = a("T0Rc"),
            i = a("Q840"),
            l = a("zd8w"),
            u = a("h6fL"),
            d = a("pEfp"),
            p = a("Kwur"),
            f = a("aDEf"),
            m = a("dGxW"),
            h = a("H3ts"),
            C = a("v4LA"),
            _ = a("zOE4"),
            g = a("kErH"),
            y = a("OWtl"),
            b = a("jZDY");
        let w = (0, C.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(590659), a.e(538365), a.e(697374)]).then(a.bind(a, "zo53"))).JoinRequestsReview);
        var j = (0, n.kb)(function() {
            let e, t, a = (0, o.c)(6),
                s = (0, n.Z)();
            return a[0] !== s.pathname || a[1] !== s.search || a[2] !== s.state?.joinApprovalEntryKey ? (e = JSON.stringify([s.pathname, s.search, s.state?.joinApprovalEntryKey]), a[0] = s.pathname, a[1] = s.search, a[2] = s.state?.joinApprovalEntryKey, a[3] = e) : e = a[3], a[4] !== e ? (t = (0, r.jsx)(k, {}, e), a[4] = e, a[5] = t) : t = a[5], t
        });

        function k() {
            let e, t, a, C, j, k, v, I, L, x, A, P = (0, o.c)(48),
                E = (0, i.y)(y.a),
                {
                    accountId: R
                } = (0, n.eb)(),
                S = (0, u.a)(),
                q = (0, n.Z)(),
                U = (0, n.cb)(),
                V = (0, n.ab)(),
                W = (0, b.a)();
            P[0] !== R || P[1] !== q.state?.joinApprovalEntryKey || P[2] !== U || P[3] !== E ? (e = () => {
                let e = E.get(f.a);
                return null != e && U !== n.a.Pop && e.key === q.state?.joinApprovalEntryKey && e.accountId === R ? e : null
            }, P[0] = R, P[1] = q.state?.joinApprovalEntryKey, P[2] = U, P[3] = E, P[4] = e) : e = P[4];
            let [M] = (0, l.useState)(e);
            P[5] !== q.search ? (t = new URLSearchParams(q.search).get("notification"), P[5] = q.search, P[6] = t) : t = P[6];
            let Z = t,
                O = null != M && M.userId === S.userId || null != Z,
                z = (0, i.x)(O ? m.b : m.a, null != R && S.accountId === R ? R : null);
            P[7] !== R || P[8] !== Z || P[9] !== z ? (a = ["workspace", R, z, "join-notification", Z], P[7] = R, P[8] = Z, P[9] = z, P[10] = a) : a = P[10];
            let G = null != R && null != z && null != Z;
            P[11] !== R || P[12] !== Z || P[13] !== z ? (C = async e => {
                let t, {
                    signal: a
                } = e;
                if (!R || !z || !Z) return !1;
                do {
                    let e = await p.Request.safeGet("/notifications", {
                        ...(0, h.a)({
                            accountId: R,
                            userId: z
                        }),
                        signal: a,
                        parameters: {
                            query: {
                                limit: 30,
                                cursor: t,
                                notification_kind: "workspace_join_requested",
                                include_display_details: !1
                            }
                        }
                    });
                    if (e.items.some(e => e.notification_id === Z && "workspace_join_requested" === e.notification_kind)) return !0;
                    t = e.next_cursor ?? void 0
                } while (t) return !1
            }, P[11] = R, P[12] = Z, P[13] = z, P[14] = C) : C = P[14], P[15] !== a || P[16] !== G || P[17] !== C ? (j = {
                queryKey: a,
                enabled: G,
                queryFn: C,
                staleTime: 0
            }, P[15] = a, P[16] = G, P[17] = C, P[18] = j) : j = P[18];
            let K = (0, c.a)(j);
            if (!R || !/^[a-zA-Z0-9_-]{1,255}$/.test(R)) {
                let e;
                return P[19] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(g.g, {
                    to: "/",
                    replace: !0
                }), P[19] = e) : e = P[19], e
            }
            P[20] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(s.b, {
                    name: "route content"
                }), (0, r.jsx)(_.LoadingPage, {})]
            }), P[20] = k) : k = P[20];
            let T = k;
            if (!W || S.isLoading) return T;
            if (P[21] !== S.authMethod || P[22] !== q.pathname || P[23] !== q.search) {
                I = Symbol.for("react.early_return_sentinel");
                e: if (v = (0, n.A)({
                        pathname: q.pathname,
                        search: q.search
                    }), null == S.authMethod) {
                    let e, t = new URLSearchParams({
                            next: v
                        }),
                        a = `/auth/login?${t}`;
                    P[26] !== a ? (e = (0, r.jsx)(g.g, {
                        to: a,
                        replace: !0
                    }), P[26] = a, P[27] = e) : e = P[27], I = e;
                    break e
                } P[21] = S.authMethod, P[22] = q.pathname, P[23] = q.search, P[24] = v, P[25] = I
            } else v = P[24], I = P[25];
            if (I !== Symbol.for("react.early_return_sentinel")) return I;
            if ("chatgpt" !== S.authMethod) {
                let e;
                return P[28] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(g.g, {
                    to: "/",
                    replace: !0
                }), P[28] = e) : e = P[28], e
            }
            if (S.accountId !== R) {
                let e;
                return P[29] !== R || P[30] !== v ? (e = (0, r.jsx)(d.WorkspaceLinkRoute, {
                    accountId: R,
                    destination: v,
                    unavailablePath: "/"
                }), P[29] = R, P[30] = v, P[31] = e) : e = P[31], e
            }
            if (void 0 === z || null != z && null != Z && K.isPending) return T;
            if (null == z || null != Z && !0 !== K.data) {
                let e, t;
                P[32] !== R ? (e = new URLSearchParams({
                    account_id: R,
                    tab: "requests"
                }), P[32] = R, P[33] = e) : e = P[33];
                let a = e,
                    n = `/admin/members?${a}`;
                return P[34] !== n ? (t = (0, r.jsx)(g.g, {
                    to: n,
                    replace: !0
                }), P[34] = n, P[35] = t) : t = P[35], t
            }
            P[36] !== R || P[37] !== z ? (L = JSON.stringify([R, z]), P[36] = R, P[37] = z, P[38] = L) : L = P[38];
            let D = O ? "activity" : "home";
            return P[39] !== q.state?.activityPage || P[40] !== V ? (x = () => {
                q.state?.activityPage ? V(-1) : V("/", {
                    replace: !0
                })
            }, P[39] = q.state?.activityPage, P[40] = V, P[41] = x) : x = P[41], P[42] !== R || P[43] !== z || P[44] !== x || P[45] !== L || P[46] !== D ? (A = (0, r.jsx)(w, {
                presentation: "page",
                entry: D,
                accountId: R,
                userId: z,
                onClose: x
            }, L), P[42] = R, P[43] = z, P[44] = x, P[45] = L, P[46] = D, P[47] = A) : A = P[47], A
        }
    }),
    dzzk: (function(e, t, a) {
        e.exports = a.p + "assets/icon.aff51c0cba.png"
    }),
    Wi2z: (function(e) {
        e.exports = '<svg\n  width="21"\n  height="21"\n  viewBox="0 0 21 21"\n  fill="none"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <path\n    d="M11.6475 18.3409C11.0975 18.3409 10.575 18.2364 10.08 18.0274C9.58502 17.8184 9.14502 17.5269 8.76002 17.1529C8.34202 17.2959 7.90751 17.3674 7.45651 17.3674C6.71951 17.3674 6.03751 17.1859 5.41051 16.8229C4.78351 16.4599 4.27751 15.9649 3.89251 15.3379C3.51851 14.7109 3.33151 14.0124 3.33151 13.2424C3.33151 12.9234 3.37551 12.5769 3.46351 12.2029C3.02351 11.7959 2.68251 11.3284 2.44051 10.8004C2.19851 10.2614 2.07751 9.70044 2.07751 9.11744C2.07751 8.52344 2.20401 7.95144 2.45701 7.40144C2.71001 6.85144 3.06201 6.37844 3.51301 5.98244C3.97501 5.57544 4.50851 5.29494 5.11351 5.14094C5.23451 4.51394 5.48751 3.95294 5.87251 3.45794C6.26851 2.95194 6.75252 2.55594 7.32452 2.26994C7.89652 1.98394 8.50702 1.84094 9.15602 1.84094C9.70602 1.84094 10.2285 1.94544 10.7235 2.15444C11.2185 2.36344 11.6585 2.65494 12.0435 3.02894C12.4615 2.88594 12.896 2.81444 13.347 2.81444C14.084 2.81444 14.766 2.99594 15.393 3.35894C16.02 3.72194 16.5205 4.21694 16.8945 4.84394C17.2795 5.47094 17.472 6.16944 17.472 6.93944C17.472 7.25844 17.428 7.60494 17.34 7.97894C17.78 8.38594 18.121 8.85894 18.363 9.39794C18.605 9.92594 18.726 10.4814 18.726 11.0644C18.726 11.6584 18.5995 12.2304 18.3465 12.7804C18.0935 13.3304 17.736 13.8089 17.274 14.2159C16.823 14.6119 16.295 14.8869 15.69 15.0409C15.569 15.6679 15.3105 16.2289 14.9145 16.7239C14.5295 17.2299 14.051 17.6259 13.479 17.9119C12.907 18.1979 12.2965 18.3409 11.6475 18.3409ZM7.57201 16.2784C8.12201 16.2784 8.60051 16.1629 9.00751 15.9319L12.1095 14.1499C12.2195 14.0729 12.2745 13.9684 12.2745 13.8364V12.4174L8.28152 14.7109C8.03952 14.8539 7.79751 14.8539 7.55552 14.7109L4.43701 12.9124C4.43701 12.9454 4.43151 12.9839 4.42051 13.0279C4.42051 13.0719 4.42051 13.1379 4.42051 13.2259C4.42051 13.7869 4.55252 14.3039 4.81651 14.7769C5.09152 15.2389 5.47101 15.6019 5.95501 15.8659C6.43901 16.1409 6.97801 16.2784 7.57201 16.2784ZM7.73701 13.5889C7.80301 13.6219 7.86351 13.6384 7.91851 13.6384C7.97351 13.6384 8.02852 13.6219 8.08352 13.5889L9.32101 12.8794L5.34451 10.5694C5.10251 10.4264 4.98151 10.2119 4.98151 9.92594V6.34544C4.43151 6.58744 3.99151 6.96144 3.66151 7.46744C3.33151 7.96244 3.16651 8.51244 3.16651 9.11744C3.16651 9.65644 3.30401 10.1734 3.57901 10.6684C3.85401 11.1634 4.21151 11.5374 4.65151 11.7904L7.73701 13.5889ZM11.6475 17.2519C12.2305 17.2519 12.7585 17.1199 13.2315 16.8559C13.7045 16.5919 14.0785 16.2289 14.3535 15.7669C14.6285 15.3049 14.766 14.7879 14.766 14.2159V10.6519C14.766 10.5199 14.711 10.4209 14.601 10.3549L13.347 9.62894V14.2324C13.347 14.5184 13.226 14.7329 12.984 14.8759L9.86551 16.6744C10.4045 17.0594 10.9985 17.2519 11.6475 17.2519ZM12.2745 11.2129V8.96894L10.41 7.91294L8.52902 8.96894V11.2129L10.41 12.2689L12.2745 11.2129ZM7.45651 5.94944C7.45651 5.66344 7.57752 5.44894 7.81952 5.30594L10.938 3.50744C10.399 3.12244 9.80502 2.92994 9.15602 2.92994C8.57302 2.92994 8.04501 3.06194 7.57201 3.32594C7.09902 3.58994 6.72502 3.95294 6.45002 4.41494C6.18602 4.87694 6.05401 5.39394 6.05401 5.96594V9.51344C6.05401 9.64544 6.10901 9.74994 6.21902 9.82694L7.45651 10.5529V5.94944ZM15.8385 13.8364C16.3885 13.5944 16.823 13.2204 17.142 12.7144C17.472 12.2084 17.637 11.6584 17.637 11.0644C17.637 10.5254 17.4995 10.0084 17.2245 9.51344C16.9495 9.01844 16.592 8.64444 16.152 8.39144L13.0665 6.60944C13.0005 6.56544 12.94 6.54894 12.885 6.55994C12.83 6.55994 12.775 6.57644 12.72 6.60944L11.4825 7.30244L15.4755 9.62894C15.5965 9.69494 15.6845 9.78294 15.7395 9.89294C15.8055 9.99194 15.8385 10.1129 15.8385 10.2559V13.8364ZM12.522 5.45444C12.764 5.30044 13.006 5.30044 13.248 5.45444L16.383 7.28594C16.383 7.20894 16.383 7.10994 16.383 6.98894C16.383 6.46094 16.251 5.96044 15.987 5.48744C15.734 5.00344 15.3655 4.61844 14.8815 4.33244C14.4085 4.04644 13.8585 3.90344 13.2315 3.90344C12.6815 3.90344 12.203 4.01894 11.796 4.24994L8.69402 6.03194C8.58402 6.10894 8.52902 6.21344 8.52902 6.34544V7.76444L12.522 5.45444Z"\n    fill="currentColor"\n  />\n</svg>\n'
    }),
    pEfp: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            o = a("T0Rc"),
            s = a("zd8w"),
            c = a("rEML"),
            i = a("lAQI"),
            l = a("HnGz"),
            u = a("l5Vd"),
            d = a("QdUF"),
            p = a("h6fL"),
            f = a("Kwur"),
            m = a("zOE4"),
            h = a("uHE8"),
            C = a("tSEg"),
            _ = a("vLpE"),
            g = a("iPqE"),
            y = a("hZax"),
            b = a("dHX4");
        let w = i.L().regex(/^[a-zA-Z0-9_-]{1,255}$/),
            j = i.F({
                source: i.N([i.z("codex-code-attribution")]),
                accountId: i.N([w]),
                connectorId: i.g(w).max(1)
            });

        function k(e) {
            let t, a, i, w, j, k, I = (0, r.c)(35),
                {
                    accountId: L,
                    destination: x,
                    documentHandoff: A,
                    reloadOnSelection: P,
                    unavailablePath: E
                } = e,
                R = void 0 !== P && P,
                {
                    userId: S,
                    accountId: q
                } = (0, p.a)(),
                U = (0, c.Z)(),
                V = (0, s.useContext)(c.r).matches.at(-1)?.route.children,
                W = (0, c.X)(x),
                M = (0, c.X)(A?.returnTo ?? x),
                Z = (0, c.X)(E),
                O = (0, y.i)();
            I[0] !== L || I[1] !== W || I[2] !== A || I[3] !== U.key || I[4] !== R || I[5] !== M || I[6] !== Z || I[7] !== S ? (t = ["workspace-link-account", U.key, S, L, W, Z, R, A, M], I[0] = L, I[1] = W, I[2] = A, I[3] = U.key, I[4] = R, I[5] = M, I[6] = Z, I[7] = S, I[8] = t) : t = I[8], I[9] !== L || I[10] !== q || I[11] !== x || I[12] !== A || I[13] !== U.pathname || I[14] !== U.search || I[15] !== R || I[16] !== M || I[17] !== O || I[18] !== Z ? (a = async e => {
                let {
                    signal: t
                } = e, a = await f.Request.safeGet("/accounts/check/{version}", {
                    parameters: {
                        path: {
                            version: "v4-2023-04-27"
                        }
                    },
                    signal: t
                });
                t.throwIfAborted();
                let n = "personal" === L && null == A ? Object.values(a.accounts).find(v) : a.accounts[L],
                    r = n?.account;
                if (null == n || r?.account_id == null || !0 === r.is_deactivated) return R ? ((0, g.setAccountCookie)((0, d.readChatGptTokenClaims)((0, d.getBrowserChatGptAuthSnapshot)()?.accessToken ?? "")?.accountId ?? void 0), await (0, g.handleBrowserAccountChangeAndRefresh)(Z, t), "switching") : "unavailable";
                if (!R && q === r.account_id && !1 !== n.can_access_with_session && (null == A || (0, d.readChatGptTokenClaims)((0, d.getBrowserChatGptAuthSnapshot)()?.accessToken ?? "")?.accountId === r.account_id)) return null != A ? (window.location.replace("string" == typeof x ? x : (0, c.A)(x)), "switching") : "selected";
                if (A?.attempted === "select" || A?.attempted === "authenticate" && !1 === n.can_access_with_session) return "unavailable";
                let o = (0, c.L)(u.i, U.pathname)?.params.projectId,
                    s = (0, u.t)(new URLSearchParams(U.search));
                if (null != o && null != s && !1 !== n.can_access_with_session) {
                    try {
                        await f.Request.safeGet("/websites/{project_id}/access_request", {
                            additionalHeaders: {
                                "ChatGPT-Account-ID": r.account_id
                            },
                            parameters: {
                                path: {
                                    project_id: o
                                },
                                query: {
                                    token: s
                                }
                            },
                            signal: t
                        })
                    } catch {
                        return t.throwIfAborted(), "selected"
                    }
                    t.throwIfAborted()
                }
                let i = M;
                if (null != A) {
                    let e = new URL(M, window.location.origin);
                    e.searchParams.set("handoff_attempt", !1 === n.can_access_with_session ? "authenticate" : "select"), i = e.toString()
                }
                return await (0, g.switchBrowserWorkspaceAndRefresh)({
                    workspaceAccountId: r.account_id,
                    workspaceName: r.name ?? null,
                    workspaceImageUrl: r.profile_picture_url ?? null,
                    isPersonalWorkspace: "personal" === r.structure,
                    isDeactivated: r.is_deactivated,
                    accountResidencyRegion: r.account_residency_region,
                    isFedrampCompliantWorkspace: r.is_fedramp_compliant_workspace,
                    canAccessWithSession: n.can_access_with_session,
                    ssoConnectionName: n.sso_connection_name
                }, O, i, t), "switching"
            }, I[9] = L, I[10] = q, I[11] = x, I[12] = A, I[13] = U.pathname, I[14] = U.search, I[15] = R, I[16] = M, I[17] = O, I[18] = Z, I[19] = a) : a = I[19], I[20] !== t || I[21] !== a ? (i = {
                queryKey: t,
                queryFn: a,
                staleTime: 1 / 0,
                gcTime: 0,
                retry: !1,
                refetchOnWindowFocus: !1,
                refetchOnReconnect: !1
            }, I[20] = t, I[21] = a, I[22] = i) : i = I[22];
            let {
                data: z,
                error: G
            } = (0, o.a)(i);
            if (G) throw G;
            if ("unavailable" === z) {
                let e;
                return I[23] !== E ? (e = (0, n.jsx)(c.l, {
                    to: E,
                    replace: !0
                }), I[23] = E, I[24] = e) : e = I[24], e
            }
            if ("selected" === z) {
                let e;
                return I[25] !== x ? (e = (0, n.jsx)(c.l, {
                    to: x,
                    replace: !0
                }), I[25] = x, I[26] = e) : e = I[26], e
            }
            let K = _.a,
                T = C.b,
                D = null == V ? U.pathname : (0, l.e)(V, U.pathname);
            return I[27] !== U || I[28] !== T || I[29] !== D ? (w = T({
                ...U,
                routeTemplate: D
            }), I[27] = U, I[28] = T, I[29] = D, I[30] = w) : w = I[30], I[31] === Symbol.for("react.memo_cache_sentinel") ? (j = (0, n.jsxs)(h.a, {
                children: [(0, n.jsx)(b.b, {}), (0, n.jsx)(m.LoadingPage, {})]
            }), I[31] = j) : j = I[31], I[32] !== K || I[33] !== w ? (k = (0, n.jsx)(K, {
                route: w,
                children: j
            }), I[32] = K, I[33] = w, I[34] = k) : k = I[34], k
        }

        function v(e) {
            return "personal" === e.account.structure
        }
        a.d(t, {}, {
            CodeAttributionConnectorAccountRoute: function() {
                let e, t, a, o, s, i, l, u = (0, r.c)(14),
                    d = (0, c.Z)();
                if (u[0] !== d.search) {
                    s = Symbol.for("react.early_return_sentinel");
                    e: {
                        let r = new URLSearchParams(d.search),
                            i = j.safeParse({
                                source: r.getAll("source"),
                                accountId: r.getAll("account_id"),
                                connectorId: r.getAll("connector")
                            });
                        if (!i.success) {
                            let e;
                            u[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(c.l, {
                                to: "/settings/plugins-settings",
                                replace: !0
                            }), u[6] = e) : e = u[6], s = e;
                            break e
                        }
                        let l = new URLSearchParams({
                                "product-sku": "CODEX"
                            }),
                            p = i.data.connectorId[0];null != p && l.set("connector", p),
                        e = k,
                        o = i.data.accountId[0],
                        t = "/settings/connectors",
                        a = l.toString()
                    }
                    u[0] = d.search, u[1] = e, u[2] = t, u[3] = a, u[4] = o, u[5] = s
                } else e = u[1], t = u[2], a = u[3], o = u[4], s = u[5];
                return s !== Symbol.for("react.early_return_sentinel") ? s : (u[7] !== t || u[8] !== a ? (i = {
                    pathname: t,
                    search: a
                }, u[7] = t, u[8] = a, u[9] = i) : i = u[9], u[10] !== e || u[11] !== o || u[12] !== i ? (l = (0, n.jsx)(e, {
                    accountId: o,
                    destination: i,
                    unavailablePath: "/settings/plugins-settings"
                }), u[10] = e, u[11] = o, u[12] = i, u[13] = l) : l = u[13], l)
            },
            WorkspaceLinkRoute: k
        })
    }),
    aDEf: (function(e, t, a) {
        var n = a("Q840"),
            r = a("gbrq"),
            o = a("Cslg"),
            s = a("P1uk"),
            c = a("OWtl"),
            i = a("dGxW");
        let l = (0, n.u)(c.a, () => null);
        a.d(t, {}, {
            a: l,
            b: function(e, t, a, n) {
                let c = e.get(i.b, a),
                    u = e.get(o.n),
                    d = void 0 === c ? u.authenticatedUserId : c;
                if (!d || u.authenticatedAccountId !== a) return !1;
                (0, i.d)(e, "activity");
                let p = (0, i.e)(a),
                    f = e.get(s.f) ? e.get(s.a)?.openerKey : null;
                f || e.set(r.a, !1);
                let m = {
                    accountId: a,
                    userId: d,
                    key: crypto.randomUUID()
                };
                return e.set(l, m), t(p, {
                    state: {
                        sidebarPrimaryContent: !0,
                        activityPage: {
                            origin: f ?? null,
                            pathname: p,
                            notificationId: n
                        },
                        joinApprovalEntryKey: m.key
                    }
                }), !0
            }
        })
    }),
    dGxW: (function(e, t, a) {
        var n = a("Q840"),
            r = a("PFjh"),
            o = a("twmu"),
            s = a("Cslg"),
            c = a("mFDr");
        a("Ot7V");
        var i = a("Bbed"),
            l = a("X6Vn");
        a("zYeY");
        var u = a("OWtl"),
            d = a("OMIV"),
            p = a("UR81");
        let f = (0, i.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(590659), a.e(538365), a.e(697374), a.e(531525)]).then(a.bind(a, "zo53"))).JoinRequestsDialog),
            m = !1,
            h = (0, n.d)(u.a, (e, t) => {
                let {
                    get: a
                } = t;
                if (null == e) return null;
                let n = a(s.n);
                if (n.authLoading || n.accountLoading) return;
                if ("chatgpt" !== n.authMethod || n.authenticatedAccountId !== e || n.accountId !== e || !n.authenticatedUserId || !(0, p.g)(n.plan)) return null;
                let r = a(o.b, e);
                if (!r.isPending) return r.data?.accounts[e]?.account.account_user_role !== "account-owner" ? null : n.authenticatedUserId
            }),
            C = (0, n.d)(u.a, (e, t) => {
                let {
                    get: a
                } = t, n = a(h, e);
                if (null == n) return n;
                if (a(d.i)) return;
                let r = a(d.g),
                    o = a(s.n);
                return o.userId && r?.getContext().user.userID === o.userId && r?.getContext().user.customIDs?.workspace_id === e && r.getLayer("2076331205", {
                    disableExposureLog: !1
                }).get("enabled", !1) ? n : null
            });
        a.d(t, {}, {
            a: C,
            b: h,
            c: function(e, t, a, n) {
                let r = e.get(C, t);
                return !!r && ((0, l.f)(e, f, {
                    accountId: t,
                    userId: r,
                    initialTarget: a,
                    onRequestsResolved: n
                }), !0)
            },
            d: function(e, t) {
                if (m) return;
                m = !0;
                let a = performance.now(),
                    n = f.preload();
                if (!n) return;
                let o = (0, r.c)(e);

                function s(e) {
                    let n = {
                        entry: t,
                        outcome: e
                    };
                    o.count("payments", "business_seat_checkout.preload_finished", n), o.hist("payments", "business_seat_checkout.preload_duration_ms", n, performance.now() - a)
                }
                o.count("payments", "business_seat_checkout.preload_started", {
                    entry: t
                }), n.then(() => s("ready"), () => {
                    s("failed"), (0, c.b)(Error("Workspace join checkout preload failed"), {
                        entry: t
                    })
                })
            },
            e: function(e) {
                return `/workspace/${encodeURIComponent(e)}/join-requests`
            }
        })
    }),
    H3ts: (function(e, t, a) {
        var n = a("UKCO");
        a.d(t, {}, {
            a: function(e) {
                return {
                    expectedIdentity: e,
                    additionalHeaders: {
                        "ChatGPT-Account-ID": e.accountId,
                        [n.dc]: e.accountId
                    }
                }
            }
        })
    }),
    EBQV: (function(t) {
        t.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.2ddddba2a5.js";
import * as t from "./418851.f34514cc3f.js";
e.C(t);
import * as a from "./109308.8b09661749.js";
e.C(a);
import * as n from "./399565.edefe43a76.js";
e.C(n);
import * as r from "./257798.6b4268ddac.js";
e.C(r);
import * as o from "./447351.34d04099ca.js";
e.C(o);
import * as s from "./617936.4a1557f13c.js";
e.C(s);
import * as c from "./807489.6b5279adf3.js";
e.C(c);
import * as i from "./337882.568bafdf14.js";
e.C(i);
import * as l from "./955979.b2a7e19963.js";
e.C(l);
import * as u from "./646436.5963e38f02.js";
e.C(u);
import * as d from "./7078.0a9a41e515.js";
e.C(d);
import * as p from "./200429.a549930e29.js";
e.C(p);
import * as f from "./698524.48945354c5.js";
e.C(f);
import * as m from "./956483.962c0de04b.js";
e.C(m);
import * as h from "./87162.e4a69efaac.js";
e.C(h);
import * as C from "./396705.51be923e43.js";
e.C(C);
import * as _ from "./155568.1f7b7a00a5.js";
e.C(_);
import * as g from "./731863.5a49a2d190.js";
e.C(g);
import * as y from "./767086.61b8f8fca3.js";
e.C(y);
import * as b from "./226913.cf105b979e.js";
e.C(b);
import * as w from "./188556.42dbc25826.js";
e.C(w);
var j = e(e.s = "P3fW").a;
export {
    j as
    default
};