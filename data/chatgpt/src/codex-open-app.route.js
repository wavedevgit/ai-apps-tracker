export const __rspack_esm_ids = [29819];
export const __webpack_modules__ = {
    qUT6: (function(e, t, n) {
        n.d(t, {
            a: () => C
        });
        var o = n("rEML"),
            a = n("ABep"),
            s = n("QosV"),
            r = n("UKCO"),
            i = n("zd8w"),
            c = n("h6fL"),
            l = n("pEfp"),
            d = n("zOE4"),
            p = n("kErH"),
            u = n("U6A3"),
            h = n("jZDY"),
            m = n("tZ2c"),
            f = n("pICO"),
            C = (0, o.hb)(function() {
                let e, t = (0, s.c)(2),
                    n = (0, o.X)();
                return t[0] !== n.key ? (e = (0, a.jsx)(g, {}, n.key), t[0] = n.key, t[1] = e) : e = t[1], e
            });

        function g() {
            let e, t, n = (0, s.c)(10),
                c = new URLSearchParams((0, o.X)().search),
                {
                    isMobile: l,
                    downloadPlatform: d
                } = (0, o.W)(),
                p = (0, h.a)(),
                C = (0, r.pg)(c),
                g = (0, m.a)(c),
                [x, k] = (0, i.useState)(!1),
                j = c.get("source"),
                _ = l ? "mobile" : "opening";
            if (("cli-login" === j || "login" === j) && (_ = j), (0, i.useEffect)(() => {
                    if (!p || l || null == C) return;
                    if (null == g) return void window.location.assign(C);
                    let e = new AbortController,
                        t = () => {
                            e.abort(), k(!1)
                        },
                        n = () => {
                            "hidden" === document.visibilityState && t()
                        };
                    return (0, u.a)(C, e.signal).then(o => {
                        e.signal.aborted || "fallback" !== o || (window.addEventListener("pagehide", t), document.addEventListener("visibilitychange", n), k(!0))
                    }, w), () => {
                        e.abort(), window.removeEventListener("pagehide", t), document.removeEventListener("visibilitychange", n)
                    }
                }, [C, g, l, p]), (x || p && l) && null != g) {
                let e, t = c.get("account_id")?.trim();
                return n[0] !== g || n[1] !== t ? (e = (0, a.jsx)(b, {
                    destination: g,
                    accountId: t
                }), n[0] = g, n[1] = t, n[2] = e) : e = n[2], e
            }
            return n[3] !== C ? (e = () => {
                null != C && window.location.assign(C)
            }, n[3] = C, n[4] = e) : e = n[4], n[5] !== C || n[6] !== d || n[7] !== _ || n[8] !== e ? (t = (0, a.jsx)(f.a, {
                deepLink: C,
                downloadPlatform: d,
                status: _,
                onOpen: e
            }), n[5] = C, n[6] = d, n[7] = _, n[8] = e, n[9] = t) : t = n[9], t
        }

        function w() {}

        function b(e) {
            let t, n = (0, s.c)(10),
                {
                    destination: r,
                    accountId: i
                } = e,
                {
                    authMethod: u,
                    isLoading: h
                } = (0, c.a)(),
                m = (0, o.X)(),
                f = (0, o.V)(m);
            if (h) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(d.LoadingPage, {}), n[0] = e) : e = n[0], e
            }
            if (null == u) {
                let e, t;
                n[1] !== f ? (e = new URLSearchParams({
                    next: f
                }), n[1] = f, n[2] = e) : e = n[2];
                let o = `/auth/login?${e}`;
                return n[3] !== o ? (t = (0, a.jsx)(p.g, {
                    to: o,
                    replace: !0
                }), n[3] = o, n[4] = t) : t = n[4], t
            }
            if (i) {
                let e;
                return n[5] !== i || n[6] !== r ? (e = (0, a.jsx)(l.WorkspaceLinkRoute, {
                    accountId: i,
                    destination: r,
                    unavailablePath: "/"
                }), n[5] = i, n[6] = r, n[7] = e) : e = n[7], e
            }
            return n[8] !== r ? (t = (0, a.jsx)(p.g, {
                to: r,
                replace: !0
            }), n[8] = r, n[9] = t) : t = n[9], t
        }
    }),
    dzzk: (function(e, t, n) {
        e.exports = n.p + "assets/icon.aff51c0cba.png"
    }),
    Wi2z: (function(e) {
        e.exports = '<svg\n  width="21"\n  height="21"\n  viewBox="0 0 21 21"\n  fill="none"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <path\n    d="M11.6475 18.3409C11.0975 18.3409 10.575 18.2364 10.08 18.0274C9.58502 17.8184 9.14502 17.5269 8.76002 17.1529C8.34202 17.2959 7.90751 17.3674 7.45651 17.3674C6.71951 17.3674 6.03751 17.1859 5.41051 16.8229C4.78351 16.4599 4.27751 15.9649 3.89251 15.3379C3.51851 14.7109 3.33151 14.0124 3.33151 13.2424C3.33151 12.9234 3.37551 12.5769 3.46351 12.2029C3.02351 11.7959 2.68251 11.3284 2.44051 10.8004C2.19851 10.2614 2.07751 9.70044 2.07751 9.11744C2.07751 8.52344 2.20401 7.95144 2.45701 7.40144C2.71001 6.85144 3.06201 6.37844 3.51301 5.98244C3.97501 5.57544 4.50851 5.29494 5.11351 5.14094C5.23451 4.51394 5.48751 3.95294 5.87251 3.45794C6.26851 2.95194 6.75252 2.55594 7.32452 2.26994C7.89652 1.98394 8.50702 1.84094 9.15602 1.84094C9.70602 1.84094 10.2285 1.94544 10.7235 2.15444C11.2185 2.36344 11.6585 2.65494 12.0435 3.02894C12.4615 2.88594 12.896 2.81444 13.347 2.81444C14.084 2.81444 14.766 2.99594 15.393 3.35894C16.02 3.72194 16.5205 4.21694 16.8945 4.84394C17.2795 5.47094 17.472 6.16944 17.472 6.93944C17.472 7.25844 17.428 7.60494 17.34 7.97894C17.78 8.38594 18.121 8.85894 18.363 9.39794C18.605 9.92594 18.726 10.4814 18.726 11.0644C18.726 11.6584 18.5995 12.2304 18.3465 12.7804C18.0935 13.3304 17.736 13.8089 17.274 14.2159C16.823 14.6119 16.295 14.8869 15.69 15.0409C15.569 15.6679 15.3105 16.2289 14.9145 16.7239C14.5295 17.2299 14.051 17.6259 13.479 17.9119C12.907 18.1979 12.2965 18.3409 11.6475 18.3409ZM7.57201 16.2784C8.12201 16.2784 8.60051 16.1629 9.00751 15.9319L12.1095 14.1499C12.2195 14.0729 12.2745 13.9684 12.2745 13.8364V12.4174L8.28152 14.7109C8.03952 14.8539 7.79751 14.8539 7.55552 14.7109L4.43701 12.9124C4.43701 12.9454 4.43151 12.9839 4.42051 13.0279C4.42051 13.0719 4.42051 13.1379 4.42051 13.2259C4.42051 13.7869 4.55252 14.3039 4.81651 14.7769C5.09152 15.2389 5.47101 15.6019 5.95501 15.8659C6.43901 16.1409 6.97801 16.2784 7.57201 16.2784ZM7.73701 13.5889C7.80301 13.6219 7.86351 13.6384 7.91851 13.6384C7.97351 13.6384 8.02852 13.6219 8.08352 13.5889L9.32101 12.8794L5.34451 10.5694C5.10251 10.4264 4.98151 10.2119 4.98151 9.92594V6.34544C4.43151 6.58744 3.99151 6.96144 3.66151 7.46744C3.33151 7.96244 3.16651 8.51244 3.16651 9.11744C3.16651 9.65644 3.30401 10.1734 3.57901 10.6684C3.85401 11.1634 4.21151 11.5374 4.65151 11.7904L7.73701 13.5889ZM11.6475 17.2519C12.2305 17.2519 12.7585 17.1199 13.2315 16.8559C13.7045 16.5919 14.0785 16.2289 14.3535 15.7669C14.6285 15.3049 14.766 14.7879 14.766 14.2159V10.6519C14.766 10.5199 14.711 10.4209 14.601 10.3549L13.347 9.62894V14.2324C13.347 14.5184 13.226 14.7329 12.984 14.8759L9.86551 16.6744C10.4045 17.0594 10.9985 17.2519 11.6475 17.2519ZM12.2745 11.2129V8.96894L10.41 7.91294L8.52902 8.96894V11.2129L10.41 12.2689L12.2745 11.2129ZM7.45651 5.94944C7.45651 5.66344 7.57752 5.44894 7.81952 5.30594L10.938 3.50744C10.399 3.12244 9.80502 2.92994 9.15602 2.92994C8.57302 2.92994 8.04501 3.06194 7.57201 3.32594C7.09902 3.58994 6.72502 3.95294 6.45002 4.41494C6.18602 4.87694 6.05401 5.39394 6.05401 5.96594V9.51344C6.05401 9.64544 6.10901 9.74994 6.21902 9.82694L7.45651 10.5529V5.94944ZM15.8385 13.8364C16.3885 13.5944 16.823 13.2204 17.142 12.7144C17.472 12.2084 17.637 11.6584 17.637 11.0644C17.637 10.5254 17.4995 10.0084 17.2245 9.51344C16.9495 9.01844 16.592 8.64444 16.152 8.39144L13.0665 6.60944C13.0005 6.56544 12.94 6.54894 12.885 6.55994C12.83 6.55994 12.775 6.57644 12.72 6.60944L11.4825 7.30244L15.4755 9.62894C15.5965 9.69494 15.6845 9.78294 15.7395 9.89294C15.8055 9.99194 15.8385 10.1129 15.8385 10.2559V13.8364ZM12.522 5.45444C12.764 5.30044 13.006 5.30044 13.248 5.45444L16.383 7.28594C16.383 7.20894 16.383 7.10994 16.383 6.98894C16.383 6.46094 16.251 5.96044 15.987 5.48744C15.734 5.00344 15.3655 4.61844 14.8815 4.33244C14.4085 4.04644 13.8585 3.90344 13.2315 3.90344C12.6815 3.90344 12.203 4.01894 11.796 4.24994L8.69402 6.03194C8.58402 6.10894 8.52902 6.21344 8.52902 6.34544V7.76444L12.522 5.45444Z"\n    fill="currentColor"\n  />\n</svg>\n'
    }),
    pEfp: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            s = n("T0Rc"),
            r = n("zd8w"),
            i = n("rEML"),
            c = n("lAQI"),
            l = n("HnGz"),
            d = n("l5Vd"),
            p = n("QdUF"),
            u = n("h6fL"),
            h = n("Kwur"),
            m = n("zOE4"),
            f = n("uHE8"),
            C = n("tSEg"),
            g = n("vLpE"),
            w = n("iPqE"),
            b = n("hZax"),
            x = n("dHX4");
        let k = c.L().regex(/^[a-zA-Z0-9_-]{1,255}$/),
            j = c.F({
                source: c.N([c.z("codex-code-attribution")]),
                accountId: c.N([k]),
                connectorId: c.g(k).max(1)
            });

        function _(e) {
            let t, n, c, k, j, _, L = (0, a.c)(35),
                {
                    accountId: y,
                    destination: P,
                    documentHandoff: I,
                    reloadOnSelection: A,
                    unavailablePath: S
                } = e,
                E = void 0 !== A && A,
                {
                    userId: T,
                    accountId: M
                } = (0, u.a)(),
                D = (0, i.X)(),
                G = (0, r.useContext)(i.q).matches.at(-1)?.route.children,
                R = (0, i.V)(P),
                V = (0, i.V)(I?.returnTo ?? P),
                U = (0, i.V)(S),
                z = (0, b.i)();
            L[0] !== y || L[1] !== R || L[2] !== I || L[3] !== D.key || L[4] !== E || L[5] !== V || L[6] !== U || L[7] !== T ? (t = ["workspace-link-account", D.key, T, y, R, U, E, I, V], L[0] = y, L[1] = R, L[2] = I, L[3] = D.key, L[4] = E, L[5] = V, L[6] = U, L[7] = T, L[8] = t) : t = L[8], L[9] !== y || L[10] !== M || L[11] !== P || L[12] !== I || L[13] !== D.pathname || L[14] !== D.search || L[15] !== E || L[16] !== V || L[17] !== z || L[18] !== U ? (n = async e => {
                let {
                    signal: t
                } = e, n = await h.Request.safeGet("/accounts/check/{version}", {
                    parameters: {
                        path: {
                            version: "v4-2023-04-27"
                        }
                    },
                    signal: t
                });
                t.throwIfAborted();
                let o = "personal" === y && null == I ? Object.values(n.accounts).find(v) : n.accounts[y],
                    a = o?.account;
                if (null == o || a?.account_id == null || !0 === a.is_deactivated) return E ? ((0, w.setAccountCookie)((0, p.readChatGptTokenClaims)((0, p.getBrowserChatGptAuthSnapshot)()?.accessToken ?? "")?.accountId ?? void 0), await (0, w.handleBrowserAccountChangeAndRefresh)(U, t), "switching") : "unavailable";
                if (!E && M === a.account_id && !1 !== o.can_access_with_session && (null == I || (0, p.readChatGptTokenClaims)((0, p.getBrowserChatGptAuthSnapshot)()?.accessToken ?? "")?.accountId === a.account_id)) return null != I ? (window.location.replace("string" == typeof P ? P : (0, i.y)(P)), "switching") : "selected";
                if (I?.attempted === "select" || I?.attempted === "authenticate" && !1 === o.can_access_with_session) return "unavailable";
                let s = (0, i.J)(d.i, D.pathname)?.params.projectId,
                    r = (0, d.t)(new URLSearchParams(D.search));
                if (null != s && null != r && !1 !== o.can_access_with_session) {
                    try {
                        await h.Request.safeGet("/websites/{project_id}/access_request", {
                            additionalHeaders: {
                                "ChatGPT-Account-ID": a.account_id
                            },
                            parameters: {
                                path: {
                                    project_id: s
                                },
                                query: {
                                    token: r
                                }
                            },
                            signal: t
                        })
                    } catch {
                        return t.throwIfAborted(), "selected"
                    }
                    t.throwIfAborted()
                }
                let c = V;
                if (null != I) {
                    let e = new URL(V, window.location.origin);
                    e.searchParams.set("handoff_attempt", !1 === o.can_access_with_session ? "authenticate" : "select"), c = e.toString()
                }
                return await (0, w.switchBrowserWorkspaceAndRefresh)({
                    workspaceAccountId: a.account_id,
                    workspaceName: a.name ?? null,
                    workspaceImageUrl: a.profile_picture_url ?? null,
                    isPersonalWorkspace: "personal" === a.structure,
                    isDeactivated: a.is_deactivated,
                    accountResidencyRegion: a.account_residency_region,
                    isFedrampCompliantWorkspace: a.is_fedramp_compliant_workspace,
                    canAccessWithSession: o.can_access_with_session,
                    ssoConnectionName: o.sso_connection_name
                }, z, c, t), "switching"
            }, L[9] = y, L[10] = M, L[11] = P, L[12] = I, L[13] = D.pathname, L[14] = D.search, L[15] = E, L[16] = V, L[17] = z, L[18] = U, L[19] = n) : n = L[19], L[20] !== t || L[21] !== n ? (c = {
                queryKey: t,
                queryFn: n,
                staleTime: 1 / 0,
                gcTime: 0,
                retry: !1,
                refetchOnWindowFocus: !1,
                refetchOnReconnect: !1
            }, L[20] = t, L[21] = n, L[22] = c) : c = L[22];
            let {
                data: O,
                error: Z
            } = (0, s.a)(c);
            if (Z) throw Z;
            if ("unavailable" === O) {
                let e;
                return L[23] !== S ? (e = (0, o.jsx)(i.l, {
                    to: S,
                    replace: !0
                }), L[23] = S, L[24] = e) : e = L[24], e
            }
            if ("selected" === O) {
                let e;
                return L[25] !== P ? (e = (0, o.jsx)(i.l, {
                    to: P,
                    replace: !0
                }), L[25] = P, L[26] = e) : e = L[26], e
            }
            let q = g.a,
                N = C.b,
                B = null == G ? D.pathname : (0, l.e)(G, D.pathname);
            return L[27] !== D || L[28] !== N || L[29] !== B ? (k = N({
                ...D,
                routeTemplate: B
            }), L[27] = D, L[28] = N, L[29] = B, L[30] = k) : k = L[30], L[31] === Symbol.for("react.memo_cache_sentinel") ? (j = (0, o.jsxs)(f.a, {
                children: [(0, o.jsx)(x.b, {}), (0, o.jsx)(m.LoadingPage, {})]
            }), L[31] = j) : j = L[31], L[32] !== q || L[33] !== k ? (_ = (0, o.jsx)(q, {
                route: k,
                children: j
            }), L[32] = q, L[33] = k, L[34] = _) : _ = L[34], _
        }

        function v(e) {
            return "personal" === e.account.structure
        }
        n.d(t, {}, {
            CodeAttributionConnectorAccountRoute: function() {
                let e, t, n, s, r, c, l, d = (0, a.c)(14),
                    p = (0, i.X)();
                if (d[0] !== p.search) {
                    r = Symbol.for("react.early_return_sentinel");
                    e: {
                        let a = new URLSearchParams(p.search),
                            c = j.safeParse({
                                source: a.getAll("source"),
                                accountId: a.getAll("account_id"),
                                connectorId: a.getAll("connector")
                            });
                        if (!c.success) {
                            let e;
                            d[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(i.l, {
                                to: "/settings/plugins-settings",
                                replace: !0
                            }), d[6] = e) : e = d[6], r = e;
                            break e
                        }
                        let l = new URLSearchParams({
                                "product-sku": "CODEX"
                            }),
                            u = c.data.connectorId[0];null != u && l.set("connector", u),
                        e = _,
                        s = c.data.accountId[0],
                        t = "/settings/connectors",
                        n = l.toString()
                    }
                    d[0] = p.search, d[1] = e, d[2] = t, d[3] = n, d[4] = s, d[5] = r
                } else e = d[1], t = d[2], n = d[3], s = d[4], r = d[5];
                return r !== Symbol.for("react.early_return_sentinel") ? r : (d[7] !== t || d[8] !== n ? (c = {
                    pathname: t,
                    search: n
                }, d[7] = t, d[8] = n, d[9] = c) : c = d[9], d[10] !== e || d[11] !== s || d[12] !== c ? (l = (0, o.jsx)(e, {
                    accountId: s,
                    destination: c,
                    unavailablePath: "/settings/plugins-settings"
                }), d[10] = e, d[11] = s, d[12] = c, d[13] = l) : l = d[13], l)
            },
            WorkspaceLinkRoute: _
        })
    }),
    tZ2c: (function(e, t, n) {
        n.d(t, {
            a: () => c,
            b: () => i
        });
        var o = n("UKCO"),
            a = n("rEML"),
            s = n("lAQI");
        let r = [{
            path: ":locale?/codex/open-app"
        }];

        function i(e) {
            if ("https://chatgpt.com" !== e.origin || null == (0, a.K)(r, e.pathname)) return null;
            let t = (0, o.pg)(e.searchParams);
            return null == t ? null : new URL(t)
        }

        function c(e) {
            if ("cli-login" === e.get("source") || "work" !== e.get("fallback") || ["launch", "dots", "plugin"].includes(e.get("target") ?? "")) return null;
            let t = e.get("q")?.trim(),
                n = s.S().safeParse(e.get("chatgpt_conversation_id")?.trim()).data;
            if (!t && null == n) return null;
            let o = new URLSearchParams({
                    surface: "tpp"
                }),
                a = e.get("hints");
            if (null == n && a) {
                o.set("hints", a);
                let t = e.get("prompt");
                t && o.set("prompt", t)
            } else t && (o.set("prompt", t), o.set("promptSource", "codex-app"));
            return `${null==n?"/":`/c/${n}`}?${o}`
        }
    }),
    pICO: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            s = n("oyxz"),
            r = n("AlDs"),
            i = n("Sm6l");

        function c() {
            return u("https://chatgpt.com/download")
        }

        function l() {
            return u("https://persistent.oaistatic.com/codex-app-prod/ChatGPT-latest-x64.dmg")
        }

        function d() {
            return u("https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg")
        }

        function p() {
            return u("https://get.microsoft.com/installer/download/9PLM9XGG6VKS?cid=website_cta_psi")
        }

        function u(e) {
            "https://chatgpt.com/download" !== e && (0, r.b)("codex-download", {
                allowUnauthenticatedTracking: !0
            }), window.open(e, "_blank", "noopener,noreferrer")
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, r, u, h, m, f, C, g, w, b, x, k, j = (0, a.c)(42),
                    {
                        deepLink: _,
                        downloadPlatform: v,
                        status: L,
                        onOpen: y
                    } = e,
                    P = void 0 === L ? "opening" : L,
                    I = "login" === P || "cli-login" === P;
                return j[0] !== I ? (t = I ? (0, o.jsx)(s.a, {
                    id: "browser.codexDeeplink.signedIn",
                    defaultMessage: "You’re signed in"
                }) : null, j[0] = I, j[1] = t) : t = j[1], j[2] !== P ? (n = "mobile" === P ? (0, o.jsx)(s.a, {
                    id: "browser.codexDeeplink.mobileTitle",
                    defaultMessage: "Open the ChatGPT desktop app on your computer"
                }) : null, j[2] = P, j[3] = n) : n = j[3], j[4] !== P ? (r = "opening" === P ? (0, o.jsx)(s.a, {
                    id: "browser.codexDeeplink.title",
                    defaultMessage: "Opening ChatGPT…"
                }) : null, j[4] = P, j[5] = r) : r = j[5], j[6] !== t || j[7] !== n || j[8] !== r ? (u = (0, o.jsxs)("h1", {
                    className: "text-3xl font-semibold",
                    children: [t, n, r]
                }), j[6] = t, j[7] = n, j[8] = r, j[9] = u) : u = j[9], j[10] !== I ? (h = I ? (0, o.jsx)("p", {
                    className: "text-secondary",
                    children: (0, o.jsx)(s.a, {
                        id: "browser.codexDeeplink.signedInBody",
                        defaultMessage: "You’re signed in and may close this tab"
                    })
                }) : null, j[10] = I, j[11] = h) : h = j[11], j[12] !== P ? (m = "opening" === P ? (0, o.jsx)("p", {
                    className: "text-secondary",
                    children: (0, o.jsx)(s.a, {
                        id: "browser.codexDeeplink.body",
                        defaultMessage: "We're trying to open ChatGPT automatically. If nothing happens, download the app and try opening it again."
                    })
                }) : null, j[12] = P, j[13] = m) : m = j[13], j[14] !== _ || j[15] !== I ? (f = null != _ || I ? null : (0, o.jsx)("p", {
                    role: "alert",
                    className: "text-secondary",
                    children: (0, o.jsx)(s.a, {
                        id: "browser.codexDeeplink.missingDetails",
                        defaultMessage: "This link is missing the chat details ChatGPT needs to reopen your work"
                    })
                }), j[14] = _, j[15] = I, j[16] = f) : f = j[16], j[17] !== v || j[18] !== P ? (C = "opening" === P && "windows" === v ? (0, o.jsx)(i.a, {
                    color: "primary",
                    size: "auth",
                    onClick: p,
                    children: (0, o.jsx)(s.a, {
                        id: "browser.codexDeeplink.download",
                        defaultMessage: "Download the app"
                    })
                }) : null, j[17] = v, j[18] = P, j[19] = C) : C = j[19], j[20] !== v || j[21] !== P ? (g = "opening" === P && "mac" === v ? (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(i.a, {
                        color: "primary",
                        size: "auth",
                        onClick: d,
                        children: (0, o.jsx)(s.a, {
                            id: "browser.codexDeeplink.downloadAppleSilicon",
                            defaultMessage: "Download for Apple Silicon"
                        })
                    }), (0, o.jsx)(i.a, {
                        color: "outlineSurface",
                        size: "auth",
                        onClick: l,
                        children: (0, o.jsx)(s.a, {
                            id: "browser.codexDeeplink.downloadIntel",
                            defaultMessage: "Download for Intel Mac"
                        })
                    })]
                }) : null, j[20] = v, j[21] = P, j[22] = g) : g = j[22], j[23] !== P ? (w = "mobile" === P ? (0, o.jsx)(i.a, {
                    color: "primary",
                    size: "auth",
                    onClick: c,
                    children: (0, o.jsx)(s.a, {
                        id: "browser.codexDeeplink.learnMore",
                        defaultMessage: "Learn more"
                    })
                }) : null, j[23] = P, j[24] = w) : w = j[24], j[25] !== _ || j[26] !== v || j[27] !== I || j[28] !== y || j[29] !== P ? (b = "mobile" !== P && "cli-login" !== P ? (0, o.jsx)(i.a, {
                    color: null == v || I ? "primary" : "outlineSurface",
                    size: "auth",
                    disabled: null == _,
                    onClick: y,
                    children: (0, o.jsx)(s.a, {
                        id: "browser.codexDeeplink.open",
                        defaultMessage: "Open ChatGPT"
                    })
                }) : null, j[25] = _, j[26] = v, j[27] = I, j[28] = y, j[29] = P, j[30] = b) : b = j[30], j[31] !== g || j[32] !== w || j[33] !== b || j[34] !== C ? (x = (0, o.jsxs)("div", {
                    className: "flex flex-col gap-3",
                    children: [C, g, w, b]
                }), j[31] = g, j[32] = w, j[33] = b, j[34] = C, j[35] = x) : x = j[35], j[36] !== x || j[37] !== u || j[38] !== h || j[39] !== m || j[40] !== f ? (k = (0, o.jsx)("main", {
                    className: "flex min-h-screen flex-col items-center justify-center bg-surface px-6 py-12 text-default select-none",
                    children: (0, o.jsxs)("div", {
                        className: "flex w-full max-w-md flex-col gap-5",
                        children: [u, h, m, f, x]
                    })
                }), j[36] = x, j[37] = u, j[38] = h, j[39] = m, j[40] = f, j[41] = k) : k = j[41], k
            }
        })
    }),
    U6A3: (function(e, t, n) {
        n.d(t, {}, {
            a: async function(e, t) {
                return t.throwIfAborted(), new Promise((n, o) => {
                    let a, s = !1,
                        r = !1,
                        i = () => {
                            window.clearTimeout(a), a = void 0
                        },
                        c = () => {
                            r = !0, i(), window.removeEventListener("focus", u), window.removeEventListener("blur", i), window.removeEventListener("pagehide", p), document.removeEventListener("visibilitychange", h), t.removeEventListener("abort", d)
                        },
                        l = e => {
                            r || (c(), n(e))
                        },
                        d = () => {
                            r || (c(), o(t.reason))
                        },
                        p = () => {
                            s && l("opened")
                        },
                        u = () => {
                            if (i(), !r && document.hasFocus() && "visible" === document.visibilityState && (a = window.setTimeout(() => l("fallback"), 1500), !s)) {
                                s = !0;
                                try {
                                    window.location.assign(e)
                                } catch {
                                    l("fallback")
                                }
                            }
                        },
                        h = () => {
                            s && "hidden" === document.visibilityState ? l("opened") : u()
                        };
                    window.addEventListener("focus", u), window.addEventListener("blur", i), window.addEventListener("pagehide", p), document.addEventListener("visibilitychange", h), t.addEventListener("abort", d, {
                        once: !0
                    }), u()
                })
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
} from "./633146.468d071759.js";
import * as t from "./418851.f3d2ce19b4.js";
e.C(t);
import * as n from "./109308.4b30101b7c.js";
e.C(n);
import * as o from "./399565.7c8a3f7e95.js";
e.C(o);
import * as a from "./257798.b061e3b37a.js";
e.C(a);
import * as s from "./447351.9446ee3aae.js";
e.C(s);
import * as r from "./617936.a5a9458f41.js";
e.C(r);
import * as i from "./807489.503e8e46b2.js";
e.C(i);
import * as c from "./337882.42cb1bc757.js";
e.C(c);
import * as l from "./955979.7655b0fa98.js";
e.C(l);
import * as d from "./646436.ad0e600e92.js";
e.C(d);
import * as p from "./7078.20ffc77da3.js";
e.C(p);
import * as u from "./200429.b7f8e76f67.js";
e.C(u);
import * as h from "./698524.ab39482137.js";
e.C(h);
import * as m from "./956483.4dc58508d8.js";
e.C(m);
import * as f from "./87162.6154a54863.js";
e.C(f);
import * as C from "./396705.cf1cfb54a0.js";
e.C(C);
import * as g from "./155568.831b2b3d34.js";
e.C(g);
import * as w from "./731863.6fc88890bf.js";
e.C(w);
import * as b from "./767086.c88be6c073.js";
e.C(b);
import * as x from "./76629.30a094a9b3.js";
e.C(x);
import * as k from "./514085.037ce67b03.js";
e.C(k);
import * as j from "./226913.a7e38eae43.js";
e.C(j);
import * as _ from "./29819.e61d6f7cb7.js";
e.C(_);
var v = e(e.s = "qUT6").a;
export {
    v as
    default
};