export const __rspack_esm_ids = [631517];
export const __webpack_modules__ = {
    dBFT: (function(e, t, a) {
        a.d(t, {
            a: () => p
        });
        var r = a("rEML"),
            n = a("ABep"),
            s = a("QosV"),
            o = a("lAQI"),
            c = a("h6fL"),
            i = a("pEfp"),
            l = a("zOE4"),
            d = a("kErH"),
            u = a("jZDY");
        let m = o.F({
            accountId: o.N([o.L().trim().min(1)]),
            returnTo: o.N([o.L().min(1)]),
            attempted: o.g(o.p(["authenticate", "select"])).max(1)
        });
        var p = (0, r.hb)(function() {
            let e, t, a, o, p, C, h = (0, s.c)(19),
                {
                    authMethod: f,
                    isLoading: _
                } = (0, c.a)(),
                w = (0, u.a)(),
                g = (0, r.X)(),
                b = (0, r.V)(g);
            if (!w || _) {
                let e;
                return h[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(l.LoadingPage, {}), h[0] = e) : e = h[0], e
            }
            if (h[1] !== b) {
                a = Symbol.for("react.early_return_sentinel");
                e: {
                    if (o = new URL(b, window.location.origin), !(e = m.safeParse({
                            accountId: o.searchParams.getAll("account_id"),
                            returnTo: o.searchParams.getAll("return_to"),
                            attempted: o.searchParams.getAll("handoff_attempt")
                        })).success) {
                        let e;
                        h[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(d.g, {
                            to: "/",
                            replace: !0
                        }), h[6] = e) : e = h[6], a = e;
                        break e
                    }
                    let s = URL.parse(e.data.returnTo[0], o);
                    if (null == s || s.origin !== o.origin || null == (0, r.J)("/admin/*", s.pathname) || null != (0, r.J)("/admin/workspace-handoff", s.pathname)) {
                        let e;
                        h[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(d.g, {
                            to: "/",
                            replace: !0
                        }), h[7] = e) : e = h[7], a = e;
                        break e
                    }
                    s.searchParams.delete("account_id"),
                    s.hash || (s.hash = o.hash),
                    t = s.pathname + s.search + s.hash,
                    o.searchParams.set("return_to", t),
                    o.hash = ""
                }
                h[1] = b, h[2] = e, h[3] = t, h[4] = a, h[5] = o
            } else e = h[2], t = h[3], a = h[4], o = h[5];
            if (a !== Symbol.for("react.early_return_sentinel")) return a;
            if (null == f) {
                let e, t, a = o.pathname + o.search;
                h[8] !== a ? (e = new URLSearchParams({
                    next: a
                }), h[8] = a, h[9] = e) : e = h[9];
                let r = `/auth/login?${e}`;
                return h[10] !== r ? (t = (0, n.jsx)(d.g, {
                    to: r,
                    replace: !0
                }), h[10] = r, h[11] = t) : t = h[11], t
            }
            let j = g.pathname + o.search;
            return h[12] !== e.data.attempted[0] || h[13] !== j ? (p = {
                returnTo: j,
                attempted: e.data.attempted[0]
            }, h[12] = e.data.attempted[0], h[13] = j, h[14] = p) : p = h[14], h[15] !== e.data.accountId[0] || h[16] !== t || h[17] !== p ? (C = (0, n.jsx)(i.WorkspaceLinkRoute, {
                accountId: e.data.accountId[0],
                destination: t,
                documentHandoff: p,
                unavailablePath: "/"
            }), h[15] = e.data.accountId[0], h[16] = t, h[17] = p, h[18] = C) : C = h[18], C
        })
    }),
    dzzk: (function(e, t, a) {
        e.exports = a.p + "assets/icon.aff51c0cba.png"
    }),
    Wi2z: (function(e) {
        e.exports = '<svg\n  width="21"\n  height="21"\n  viewBox="0 0 21 21"\n  fill="none"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <path\n    d="M11.6475 18.3409C11.0975 18.3409 10.575 18.2364 10.08 18.0274C9.58502 17.8184 9.14502 17.5269 8.76002 17.1529C8.34202 17.2959 7.90751 17.3674 7.45651 17.3674C6.71951 17.3674 6.03751 17.1859 5.41051 16.8229C4.78351 16.4599 4.27751 15.9649 3.89251 15.3379C3.51851 14.7109 3.33151 14.0124 3.33151 13.2424C3.33151 12.9234 3.37551 12.5769 3.46351 12.2029C3.02351 11.7959 2.68251 11.3284 2.44051 10.8004C2.19851 10.2614 2.07751 9.70044 2.07751 9.11744C2.07751 8.52344 2.20401 7.95144 2.45701 7.40144C2.71001 6.85144 3.06201 6.37844 3.51301 5.98244C3.97501 5.57544 4.50851 5.29494 5.11351 5.14094C5.23451 4.51394 5.48751 3.95294 5.87251 3.45794C6.26851 2.95194 6.75252 2.55594 7.32452 2.26994C7.89652 1.98394 8.50702 1.84094 9.15602 1.84094C9.70602 1.84094 10.2285 1.94544 10.7235 2.15444C11.2185 2.36344 11.6585 2.65494 12.0435 3.02894C12.4615 2.88594 12.896 2.81444 13.347 2.81444C14.084 2.81444 14.766 2.99594 15.393 3.35894C16.02 3.72194 16.5205 4.21694 16.8945 4.84394C17.2795 5.47094 17.472 6.16944 17.472 6.93944C17.472 7.25844 17.428 7.60494 17.34 7.97894C17.78 8.38594 18.121 8.85894 18.363 9.39794C18.605 9.92594 18.726 10.4814 18.726 11.0644C18.726 11.6584 18.5995 12.2304 18.3465 12.7804C18.0935 13.3304 17.736 13.8089 17.274 14.2159C16.823 14.6119 16.295 14.8869 15.69 15.0409C15.569 15.6679 15.3105 16.2289 14.9145 16.7239C14.5295 17.2299 14.051 17.6259 13.479 17.9119C12.907 18.1979 12.2965 18.3409 11.6475 18.3409ZM7.57201 16.2784C8.12201 16.2784 8.60051 16.1629 9.00751 15.9319L12.1095 14.1499C12.2195 14.0729 12.2745 13.9684 12.2745 13.8364V12.4174L8.28152 14.7109C8.03952 14.8539 7.79751 14.8539 7.55552 14.7109L4.43701 12.9124C4.43701 12.9454 4.43151 12.9839 4.42051 13.0279C4.42051 13.0719 4.42051 13.1379 4.42051 13.2259C4.42051 13.7869 4.55252 14.3039 4.81651 14.7769C5.09152 15.2389 5.47101 15.6019 5.95501 15.8659C6.43901 16.1409 6.97801 16.2784 7.57201 16.2784ZM7.73701 13.5889C7.80301 13.6219 7.86351 13.6384 7.91851 13.6384C7.97351 13.6384 8.02852 13.6219 8.08352 13.5889L9.32101 12.8794L5.34451 10.5694C5.10251 10.4264 4.98151 10.2119 4.98151 9.92594V6.34544C4.43151 6.58744 3.99151 6.96144 3.66151 7.46744C3.33151 7.96244 3.16651 8.51244 3.16651 9.11744C3.16651 9.65644 3.30401 10.1734 3.57901 10.6684C3.85401 11.1634 4.21151 11.5374 4.65151 11.7904L7.73701 13.5889ZM11.6475 17.2519C12.2305 17.2519 12.7585 17.1199 13.2315 16.8559C13.7045 16.5919 14.0785 16.2289 14.3535 15.7669C14.6285 15.3049 14.766 14.7879 14.766 14.2159V10.6519C14.766 10.5199 14.711 10.4209 14.601 10.3549L13.347 9.62894V14.2324C13.347 14.5184 13.226 14.7329 12.984 14.8759L9.86551 16.6744C10.4045 17.0594 10.9985 17.2519 11.6475 17.2519ZM12.2745 11.2129V8.96894L10.41 7.91294L8.52902 8.96894V11.2129L10.41 12.2689L12.2745 11.2129ZM7.45651 5.94944C7.45651 5.66344 7.57752 5.44894 7.81952 5.30594L10.938 3.50744C10.399 3.12244 9.80502 2.92994 9.15602 2.92994C8.57302 2.92994 8.04501 3.06194 7.57201 3.32594C7.09902 3.58994 6.72502 3.95294 6.45002 4.41494C6.18602 4.87694 6.05401 5.39394 6.05401 5.96594V9.51344C6.05401 9.64544 6.10901 9.74994 6.21902 9.82694L7.45651 10.5529V5.94944ZM15.8385 13.8364C16.3885 13.5944 16.823 13.2204 17.142 12.7144C17.472 12.2084 17.637 11.6584 17.637 11.0644C17.637 10.5254 17.4995 10.0084 17.2245 9.51344C16.9495 9.01844 16.592 8.64444 16.152 8.39144L13.0665 6.60944C13.0005 6.56544 12.94 6.54894 12.885 6.55994C12.83 6.55994 12.775 6.57644 12.72 6.60944L11.4825 7.30244L15.4755 9.62894C15.5965 9.69494 15.6845 9.78294 15.7395 9.89294C15.8055 9.99194 15.8385 10.1129 15.8385 10.2559V13.8364ZM12.522 5.45444C12.764 5.30044 13.006 5.30044 13.248 5.45444L16.383 7.28594C16.383 7.20894 16.383 7.10994 16.383 6.98894C16.383 6.46094 16.251 5.96044 15.987 5.48744C15.734 5.00344 15.3655 4.61844 14.8815 4.33244C14.4085 4.04644 13.8585 3.90344 13.2315 3.90344C12.6815 3.90344 12.203 4.01894 11.796 4.24994L8.69402 6.03194C8.58402 6.10894 8.52902 6.21344 8.52902 6.34544V7.76444L12.522 5.45444Z"\n    fill="currentColor"\n  />\n</svg>\n'
    }),
    pEfp: (function(e, t, a) {
        var r = a("ABep"),
            n = a("QosV"),
            s = a("T0Rc"),
            o = a("zd8w"),
            c = a("rEML"),
            i = a("lAQI"),
            l = a("HnGz"),
            d = a("l5Vd"),
            u = a("QdUF"),
            m = a("h6fL"),
            p = a("Kwur"),
            C = a("zOE4"),
            h = a("uHE8"),
            f = a("tSEg"),
            _ = a("vLpE"),
            w = a("iPqE"),
            g = a("hZax"),
            b = a("dHX4");
        let j = i.L().regex(/^[a-zA-Z0-9_-]{1,255}$/),
            L = i.F({
                source: i.N([i.z("codex-code-attribution")]),
                accountId: i.N([j]),
                connectorId: i.g(j).max(1)
            });

        function k(e) {
            let t, a, i, j, L, k, y = (0, n.c)(35),
                {
                    accountId: A,
                    destination: I,
                    documentHandoff: v,
                    reloadOnSelection: S,
                    unavailablePath: P
                } = e,
                R = void 0 !== S && S,
                {
                    userId: V,
                    accountId: T
                } = (0, m.a)(),
                E = (0, c.X)(),
                Z = (0, o.useContext)(c.q).matches.at(-1)?.route.children,
                B = (0, c.V)(I),
                M = (0, c.V)(v?.returnTo ?? I),
                z = (0, c.V)(P),
                U = (0, g.i)();
            y[0] !== A || y[1] !== B || y[2] !== v || y[3] !== E.key || y[4] !== R || y[5] !== M || y[6] !== z || y[7] !== V ? (t = ["workspace-link-account", E.key, V, A, B, z, R, v, M], y[0] = A, y[1] = B, y[2] = v, y[3] = E.key, y[4] = R, y[5] = M, y[6] = z, y[7] = V, y[8] = t) : t = y[8], y[9] !== A || y[10] !== T || y[11] !== I || y[12] !== v || y[13] !== E.pathname || y[14] !== E.search || y[15] !== R || y[16] !== M || y[17] !== U || y[18] !== z ? (a = async e => {
                let {
                    signal: t
                } = e, a = await p.Request.safeGet("/accounts/check/{version}", {
                    parameters: {
                        path: {
                            version: "v4-2023-04-27"
                        }
                    },
                    signal: t
                });
                t.throwIfAborted();
                let r = "personal" === A && null == v ? Object.values(a.accounts).find(x) : a.accounts[A],
                    n = r?.account;
                if (null == r || n?.account_id == null || !0 === n.is_deactivated) return R ? ((0, w.setAccountCookie)((0, u.readChatGptTokenClaims)((0, u.getBrowserChatGptAuthSnapshot)()?.accessToken ?? "")?.accountId ?? void 0), await (0, w.handleBrowserAccountChangeAndRefresh)(z, t), "switching") : "unavailable";
                if (!R && T === n.account_id && !1 !== r.can_access_with_session && (null == v || (0, u.readChatGptTokenClaims)((0, u.getBrowserChatGptAuthSnapshot)()?.accessToken ?? "")?.accountId === n.account_id)) return null != v ? (window.location.replace("string" == typeof I ? I : (0, c.y)(I)), "switching") : "selected";
                if (v?.attempted === "select" || v?.attempted === "authenticate" && !1 === r.can_access_with_session) return "unavailable";
                let s = (0, c.J)(d.i, E.pathname)?.params.projectId,
                    o = (0, d.t)(new URLSearchParams(E.search));
                if (null != s && null != o && !1 !== r.can_access_with_session) {
                    try {
                        await p.Request.safeGet("/websites/{project_id}/access_request", {
                            additionalHeaders: {
                                "ChatGPT-Account-ID": n.account_id
                            },
                            parameters: {
                                path: {
                                    project_id: s
                                },
                                query: {
                                    token: o
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
                if (null != v) {
                    let e = new URL(M, window.location.origin);
                    e.searchParams.set("handoff_attempt", !1 === r.can_access_with_session ? "authenticate" : "select"), i = e.toString()
                }
                return await (0, w.switchBrowserWorkspaceAndRefresh)({
                    workspaceAccountId: n.account_id,
                    workspaceName: n.name ?? null,
                    workspaceImageUrl: n.profile_picture_url ?? null,
                    isPersonalWorkspace: "personal" === n.structure,
                    isDeactivated: n.is_deactivated,
                    accountResidencyRegion: n.account_residency_region,
                    isFedrampCompliantWorkspace: n.is_fedramp_compliant_workspace,
                    canAccessWithSession: r.can_access_with_session,
                    ssoConnectionName: r.sso_connection_name
                }, U, i, t), "switching"
            }, y[9] = A, y[10] = T, y[11] = I, y[12] = v, y[13] = E.pathname, y[14] = E.search, y[15] = R, y[16] = M, y[17] = U, y[18] = z, y[19] = a) : a = y[19], y[20] !== t || y[21] !== a ? (i = {
                queryKey: t,
                queryFn: a,
                staleTime: 1 / 0,
                gcTime: 0,
                retry: !1,
                refetchOnWindowFocus: !1,
                refetchOnReconnect: !1
            }, y[20] = t, y[21] = a, y[22] = i) : i = y[22];
            let {
                data: q,
                error: F
            } = (0, s.a)(i);
            if (F) throw F;
            if ("unavailable" === q) {
                let e;
                return y[23] !== P ? (e = (0, r.jsx)(c.l, {
                    to: P,
                    replace: !0
                }), y[23] = P, y[24] = e) : e = y[24], e
            }
            if ("selected" === q) {
                let e;
                return y[25] !== I ? (e = (0, r.jsx)(c.l, {
                    to: I,
                    replace: !0
                }), y[25] = I, y[26] = e) : e = y[26], e
            }
            let G = _.a,
                W = f.b,
                O = null == Z ? E.pathname : (0, l.e)(Z, E.pathname);
            return y[27] !== E || y[28] !== W || y[29] !== O ? (j = W({
                ...E,
                routeTemplate: O
            }), y[27] = E, y[28] = W, y[29] = O, y[30] = j) : j = y[30], y[31] === Symbol.for("react.memo_cache_sentinel") ? (L = (0, r.jsxs)(h.a, {
                children: [(0, r.jsx)(b.b, {}), (0, r.jsx)(C.LoadingPage, {})]
            }), y[31] = L) : L = y[31], y[32] !== G || y[33] !== j ? (k = (0, r.jsx)(G, {
                route: j,
                children: L
            }), y[32] = G, y[33] = j, y[34] = k) : k = y[34], k
        }

        function x(e) {
            return "personal" === e.account.structure
        }
        a.d(t, {}, {
            CodeAttributionConnectorAccountRoute: function() {
                let e, t, a, s, o, i, l, d = (0, n.c)(14),
                    u = (0, c.X)();
                if (d[0] !== u.search) {
                    o = Symbol.for("react.early_return_sentinel");
                    e: {
                        let n = new URLSearchParams(u.search),
                            i = L.safeParse({
                                source: n.getAll("source"),
                                accountId: n.getAll("account_id"),
                                connectorId: n.getAll("connector")
                            });
                        if (!i.success) {
                            let e;
                            d[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(c.l, {
                                to: "/settings/plugins-settings",
                                replace: !0
                            }), d[6] = e) : e = d[6], o = e;
                            break e
                        }
                        let l = new URLSearchParams({
                                "product-sku": "CODEX"
                            }),
                            m = i.data.connectorId[0];null != m && l.set("connector", m),
                        e = k,
                        s = i.data.accountId[0],
                        t = "/settings/connectors",
                        a = l.toString()
                    }
                    d[0] = u.search, d[1] = e, d[2] = t, d[3] = a, d[4] = s, d[5] = o
                } else e = d[1], t = d[2], a = d[3], s = d[4], o = d[5];
                return o !== Symbol.for("react.early_return_sentinel") ? o : (d[7] !== t || d[8] !== a ? (i = {
                    pathname: t,
                    search: a
                }, d[7] = t, d[8] = a, d[9] = i) : i = d[9], d[10] !== e || d[11] !== s || d[12] !== i ? (l = (0, r.jsx)(e, {
                    accountId: s,
                    destination: i,
                    unavailablePath: "/settings/plugins-settings"
                }), d[10] = e, d[11] = s, d[12] = i, d[13] = l) : l = d[13], l)
            },
            WorkspaceLinkRoute: k
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
import * as a from "./109308.4b30101b7c.js";
e.C(a);
import * as r from "./399565.7c8a3f7e95.js";
e.C(r);
import * as n from "./257798.b061e3b37a.js";
e.C(n);
import * as s from "./447351.9446ee3aae.js";
e.C(s);
import * as o from "./617936.a5a9458f41.js";
e.C(o);
import * as c from "./807489.503e8e46b2.js";
e.C(c);
import * as i from "./337882.42cb1bc757.js";
e.C(i);
import * as l from "./955979.7655b0fa98.js";
e.C(l);
import * as d from "./646436.ad0e600e92.js";
e.C(d);
import * as u from "./7078.20ffc77da3.js";
e.C(u);
import * as m from "./200429.b7f8e76f67.js";
e.C(m);
import * as p from "./698524.ab39482137.js";
e.C(p);
import * as C from "./956483.4dc58508d8.js";
e.C(C);
import * as h from "./87162.6154a54863.js";
e.C(h);
import * as f from "./396705.cf1cfb54a0.js";
e.C(f);
import * as _ from "./155568.831b2b3d34.js";
e.C(_);
import * as w from "./731863.6fc88890bf.js";
e.C(w);
import * as g from "./767086.c88be6c073.js";
e.C(g);
import * as b from "./76629.30a094a9b3.js";
e.C(b);
import * as j from "./514085.037ce67b03.js";
e.C(j);
import * as L from "./226913.a7e38eae43.js";
e.C(L);
import * as k from "./631517.adc7c1785b.js";
e.C(k);
var x = e(e.s = "dBFT").a;
export {
    x as
    default
};