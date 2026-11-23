export const __rspack_esm_ids = [631517];
export const __webpack_modules__ = {
    dBFT: (function(a, b, c) {
        c.d(b, {
            a: () => n
        });
        var d = c("rEML"),
            e = c("ABep"),
            f = c("QosV"),
            g = c("lAQI"),
            h = c("h6fL"),
            i = c("pEfp"),
            j = c("zOE4"),
            k = c("kErH"),
            l = c("jZDY");
        let m = g.F({
            accountId: g.N([g.L().trim().min(1)]),
            returnTo: g.N([g.L().min(1)]),
            attempted: g.g(g.p(["authenticate", "select"])).max(1)
        });
        var n = (0, d.kb)(function() {
            let a, b, c, g, n, o, p = (0, f.c)(19),
                {
                    authMethod: q,
                    isLoading: r
                } = (0, h.a)(),
                s = (0, l.a)(),
                t = (0, d.Z)(),
                u = (0, d.X)(t);
            if (!s || r) {
                let a;
                return p[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, e.jsx)(j.LoadingPage, {}), p[0] = a) : a = p[0], a
            }
            if (p[1] !== u) {
                c = Symbol.for("react.early_return_sentinel");
                a: {
                    if (g = new URL(u, window.location.origin), !(a = m.safeParse({
                            accountId: g.searchParams.getAll("account_id"),
                            returnTo: g.searchParams.getAll("return_to"),
                            attempted: g.searchParams.getAll("handoff_attempt")
                        })).success) {
                        let a;
                        p[6] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, e.jsx)(k.g, {
                            to: "/",
                            replace: !0
                        }), p[6] = a) : a = p[6], c = a;
                        break a
                    }
                    let f = URL.parse(a.data.returnTo[0], g);
                    if (null == f || f.origin !== g.origin || null == (0, d.L)("/admin/*", f.pathname) || null != (0, d.L)("/admin/workspace-handoff", f.pathname)) {
                        let a;
                        p[7] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, e.jsx)(k.g, {
                            to: "/",
                            replace: !0
                        }), p[7] = a) : a = p[7], c = a;
                        break a
                    }
                    f.searchParams.delete("account_id"),
                    f.hash || (f.hash = g.hash),
                    b = f.pathname + f.search + f.hash,
                    g.searchParams.set("return_to", b),
                    g.hash = ""
                }
                p[1] = u, p[2] = a, p[3] = b, p[4] = c, p[5] = g
            } else a = p[2], b = p[3], c = p[4], g = p[5];
            if (c !== Symbol.for("react.early_return_sentinel")) return c;
            if (null == q) {
                let a, b, c = g.pathname + g.search;
                p[8] !== c ? (a = new URLSearchParams({
                    next: c
                }), p[8] = c, p[9] = a) : a = p[9];
                let d = `/auth/login?${a}`;
                return p[10] !== d ? (b = (0, e.jsx)(k.g, {
                    to: d,
                    replace: !0
                }), p[10] = d, p[11] = b) : b = p[11], b
            }
            let v = t.pathname + g.search;
            return p[12] !== a.data.attempted[0] || p[13] !== v ? (n = {
                returnTo: v,
                attempted: a.data.attempted[0]
            }, p[12] = a.data.attempted[0], p[13] = v, p[14] = n) : n = p[14], p[15] !== a.data.accountId[0] || p[16] !== b || p[17] !== n ? (o = (0, e.jsx)(i.WorkspaceLinkRoute, {
                accountId: a.data.accountId[0],
                destination: b,
                documentHandoff: n,
                unavailablePath: "/"
            }), p[15] = a.data.accountId[0], p[16] = b, p[17] = n, p[18] = o) : o = p[18], o
        })
    }),
    dzzk: (function(a, b, c) {
        a.exports = c.p + "assets/icon.aff51c0cba.png"
    }),
    Wi2z: (function(a) {
        a.exports = '<svg\n  width="21"\n  height="21"\n  viewBox="0 0 21 21"\n  fill="none"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <path\n    d="M11.6475 18.3409C11.0975 18.3409 10.575 18.2364 10.08 18.0274C9.58502 17.8184 9.14502 17.5269 8.76002 17.1529C8.34202 17.2959 7.90751 17.3674 7.45651 17.3674C6.71951 17.3674 6.03751 17.1859 5.41051 16.8229C4.78351 16.4599 4.27751 15.9649 3.89251 15.3379C3.51851 14.7109 3.33151 14.0124 3.33151 13.2424C3.33151 12.9234 3.37551 12.5769 3.46351 12.2029C3.02351 11.7959 2.68251 11.3284 2.44051 10.8004C2.19851 10.2614 2.07751 9.70044 2.07751 9.11744C2.07751 8.52344 2.20401 7.95144 2.45701 7.40144C2.71001 6.85144 3.06201 6.37844 3.51301 5.98244C3.97501 5.57544 4.50851 5.29494 5.11351 5.14094C5.23451 4.51394 5.48751 3.95294 5.87251 3.45794C6.26851 2.95194 6.75252 2.55594 7.32452 2.26994C7.89652 1.98394 8.50702 1.84094 9.15602 1.84094C9.70602 1.84094 10.2285 1.94544 10.7235 2.15444C11.2185 2.36344 11.6585 2.65494 12.0435 3.02894C12.4615 2.88594 12.896 2.81444 13.347 2.81444C14.084 2.81444 14.766 2.99594 15.393 3.35894C16.02 3.72194 16.5205 4.21694 16.8945 4.84394C17.2795 5.47094 17.472 6.16944 17.472 6.93944C17.472 7.25844 17.428 7.60494 17.34 7.97894C17.78 8.38594 18.121 8.85894 18.363 9.39794C18.605 9.92594 18.726 10.4814 18.726 11.0644C18.726 11.6584 18.5995 12.2304 18.3465 12.7804C18.0935 13.3304 17.736 13.8089 17.274 14.2159C16.823 14.6119 16.295 14.8869 15.69 15.0409C15.569 15.6679 15.3105 16.2289 14.9145 16.7239C14.5295 17.2299 14.051 17.6259 13.479 17.9119C12.907 18.1979 12.2965 18.3409 11.6475 18.3409ZM7.57201 16.2784C8.12201 16.2784 8.60051 16.1629 9.00751 15.9319L12.1095 14.1499C12.2195 14.0729 12.2745 13.9684 12.2745 13.8364V12.4174L8.28152 14.7109C8.03952 14.8539 7.79751 14.8539 7.55552 14.7109L4.43701 12.9124C4.43701 12.9454 4.43151 12.9839 4.42051 13.0279C4.42051 13.0719 4.42051 13.1379 4.42051 13.2259C4.42051 13.7869 4.55252 14.3039 4.81651 14.7769C5.09152 15.2389 5.47101 15.6019 5.95501 15.8659C6.43901 16.1409 6.97801 16.2784 7.57201 16.2784ZM7.73701 13.5889C7.80301 13.6219 7.86351 13.6384 7.91851 13.6384C7.97351 13.6384 8.02852 13.6219 8.08352 13.5889L9.32101 12.8794L5.34451 10.5694C5.10251 10.4264 4.98151 10.2119 4.98151 9.92594V6.34544C4.43151 6.58744 3.99151 6.96144 3.66151 7.46744C3.33151 7.96244 3.16651 8.51244 3.16651 9.11744C3.16651 9.65644 3.30401 10.1734 3.57901 10.6684C3.85401 11.1634 4.21151 11.5374 4.65151 11.7904L7.73701 13.5889ZM11.6475 17.2519C12.2305 17.2519 12.7585 17.1199 13.2315 16.8559C13.7045 16.5919 14.0785 16.2289 14.3535 15.7669C14.6285 15.3049 14.766 14.7879 14.766 14.2159V10.6519C14.766 10.5199 14.711 10.4209 14.601 10.3549L13.347 9.62894V14.2324C13.347 14.5184 13.226 14.7329 12.984 14.8759L9.86551 16.6744C10.4045 17.0594 10.9985 17.2519 11.6475 17.2519ZM12.2745 11.2129V8.96894L10.41 7.91294L8.52902 8.96894V11.2129L10.41 12.2689L12.2745 11.2129ZM7.45651 5.94944C7.45651 5.66344 7.57752 5.44894 7.81952 5.30594L10.938 3.50744C10.399 3.12244 9.80502 2.92994 9.15602 2.92994C8.57302 2.92994 8.04501 3.06194 7.57201 3.32594C7.09902 3.58994 6.72502 3.95294 6.45002 4.41494C6.18602 4.87694 6.05401 5.39394 6.05401 5.96594V9.51344C6.05401 9.64544 6.10901 9.74994 6.21902 9.82694L7.45651 10.5529V5.94944ZM15.8385 13.8364C16.3885 13.5944 16.823 13.2204 17.142 12.7144C17.472 12.2084 17.637 11.6584 17.637 11.0644C17.637 10.5254 17.4995 10.0084 17.2245 9.51344C16.9495 9.01844 16.592 8.64444 16.152 8.39144L13.0665 6.60944C13.0005 6.56544 12.94 6.54894 12.885 6.55994C12.83 6.55994 12.775 6.57644 12.72 6.60944L11.4825 7.30244L15.4755 9.62894C15.5965 9.69494 15.6845 9.78294 15.7395 9.89294C15.8055 9.99194 15.8385 10.1129 15.8385 10.2559V13.8364ZM12.522 5.45444C12.764 5.30044 13.006 5.30044 13.248 5.45444L16.383 7.28594C16.383 7.20894 16.383 7.10994 16.383 6.98894C16.383 6.46094 16.251 5.96044 15.987 5.48744C15.734 5.00344 15.3655 4.61844 14.8815 4.33244C14.4085 4.04644 13.8585 3.90344 13.2315 3.90344C12.6815 3.90344 12.203 4.01894 11.796 4.24994L8.69402 6.03194C8.58402 6.10894 8.52902 6.21344 8.52902 6.34544V7.76444L12.522 5.45444Z"\n    fill="currentColor"\n  />\n</svg>\n'
    }),
    pEfp: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("T0Rc"),
            g = c("zd8w"),
            h = c("rEML"),
            i = c("lAQI"),
            j = c("HnGz"),
            k = c("l5Vd"),
            l = c("QdUF"),
            m = c("h6fL"),
            n = c("Kwur"),
            o = c("zOE4"),
            p = c("uHE8"),
            q = c("tSEg"),
            r = c("vLpE"),
            s = c("iPqE"),
            t = c("hZax"),
            u = c("dHX4");
        let v = i.L().regex(/^[a-zA-Z0-9_-]{1,255}$/),
            w = i.F({
                source: i.N([i.z("codex-code-attribution")]),
                accountId: i.N([v]),
                connectorId: i.g(v).max(1)
            });

        function x(a) {
            let b, c, i, v, w, x, z = (0, e.c)(35),
                {
                    accountId: A,
                    destination: B,
                    documentHandoff: C,
                    reloadOnSelection: D,
                    unavailablePath: E
                } = a,
                F = void 0 !== D && D,
                {
                    userId: G,
                    accountId: H
                } = (0, m.a)(),
                I = (0, h.Z)(),
                J = (0, g.useContext)(h.r).matches.at(-1)?.route.children,
                K = (0, h.X)(B),
                L = (0, h.X)(C?.returnTo ?? B),
                M = (0, h.X)(E),
                N = (0, t.i)();
            z[0] !== A || z[1] !== K || z[2] !== C || z[3] !== I.key || z[4] !== F || z[5] !== L || z[6] !== M || z[7] !== G ? (b = ["workspace-link-account", I.key, G, A, K, M, F, C, L], z[0] = A, z[1] = K, z[2] = C, z[3] = I.key, z[4] = F, z[5] = L, z[6] = M, z[7] = G, z[8] = b) : b = z[8], z[9] !== A || z[10] !== H || z[11] !== B || z[12] !== C || z[13] !== I.pathname || z[14] !== I.search || z[15] !== F || z[16] !== L || z[17] !== N || z[18] !== M ? (c = async a => {
                let {
                    signal: b
                } = a, c = await n.Request.safeGet("/accounts/check/{version}", {
                    parameters: {
                        path: {
                            version: "v4-2023-04-27"
                        }
                    },
                    signal: b
                });
                b.throwIfAborted();
                let d = "personal" === A && null == C ? Object.values(c.accounts).find(y) : c.accounts[A],
                    e = d?.account;
                if (null == d || e?.account_id == null || !0 === e.is_deactivated) return F ? ((0, s.setAccountCookie)((0, l.readChatGptTokenClaims)((0, l.getBrowserChatGptAuthSnapshot)()?.accessToken ?? "")?.accountId ?? void 0), await (0, s.handleBrowserAccountChangeAndRefresh)(M, b), "switching") : "unavailable";
                if (!F && H === e.account_id && !1 !== d.can_access_with_session && (null == C || (0, l.readChatGptTokenClaims)((0, l.getBrowserChatGptAuthSnapshot)()?.accessToken ?? "")?.accountId === e.account_id)) return null != C ? (window.location.replace("string" == typeof B ? B : (0, h.A)(B)), "switching") : "selected";
                if (C?.attempted === "select" || C?.attempted === "authenticate" && !1 === d.can_access_with_session) return "unavailable";
                let f = (0, h.L)(k.i, I.pathname)?.params.projectId,
                    g = (0, k.t)(new URLSearchParams(I.search));
                if (null != f && null != g && !1 !== d.can_access_with_session) {
                    try {
                        await n.Request.safeGet("/websites/{project_id}/access_request", {
                            additionalHeaders: {
                                "ChatGPT-Account-ID": e.account_id
                            },
                            parameters: {
                                path: {
                                    project_id: f
                                },
                                query: {
                                    token: g
                                }
                            },
                            signal: b
                        })
                    } catch {
                        return b.throwIfAborted(), "selected"
                    }
                    b.throwIfAborted()
                }
                let i = L;
                if (null != C) {
                    let a = new URL(L, window.location.origin);
                    a.searchParams.set("handoff_attempt", !1 === d.can_access_with_session ? "authenticate" : "select"), i = a.toString()
                }
                return await (0, s.switchBrowserWorkspaceAndRefresh)({
                    workspaceAccountId: e.account_id,
                    workspaceName: e.name ?? null,
                    workspaceImageUrl: e.profile_picture_url ?? null,
                    isPersonalWorkspace: "personal" === e.structure,
                    isDeactivated: e.is_deactivated,
                    accountResidencyRegion: e.account_residency_region,
                    isFedrampCompliantWorkspace: e.is_fedramp_compliant_workspace,
                    canAccessWithSession: d.can_access_with_session,
                    ssoConnectionName: d.sso_connection_name
                }, N, i, b), "switching"
            }, z[9] = A, z[10] = H, z[11] = B, z[12] = C, z[13] = I.pathname, z[14] = I.search, z[15] = F, z[16] = L, z[17] = N, z[18] = M, z[19] = c) : c = z[19], z[20] !== b || z[21] !== c ? (i = {
                queryKey: b,
                queryFn: c,
                staleTime: 1 / 0,
                gcTime: 0,
                retry: !1,
                refetchOnWindowFocus: !1,
                refetchOnReconnect: !1
            }, z[20] = b, z[21] = c, z[22] = i) : i = z[22];
            let {
                data: O,
                error: P
            } = (0, f.a)(i);
            if (P) throw P;
            if ("unavailable" === O) {
                let a;
                return z[23] !== E ? (a = (0, d.jsx)(h.l, {
                    to: E,
                    replace: !0
                }), z[23] = E, z[24] = a) : a = z[24], a
            }
            if ("selected" === O) {
                let a;
                return z[25] !== B ? (a = (0, d.jsx)(h.l, {
                    to: B,
                    replace: !0
                }), z[25] = B, z[26] = a) : a = z[26], a
            }
            let Q = r.a,
                R = q.b,
                S = null == J ? I.pathname : (0, j.e)(J, I.pathname);
            return z[27] !== I || z[28] !== R || z[29] !== S ? (v = R({
                ...I,
                routeTemplate: S
            }), z[27] = I, z[28] = R, z[29] = S, z[30] = v) : v = z[30], z[31] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, d.jsxs)(p.a, {
                children: [(0, d.jsx)(u.b, {}), (0, d.jsx)(o.LoadingPage, {})]
            }), z[31] = w) : w = z[31], z[32] !== Q || z[33] !== v ? (x = (0, d.jsx)(Q, {
                route: v,
                children: w
            }), z[32] = Q, z[33] = v, z[34] = x) : x = z[34], x
        }

        function y(a) {
            return "personal" === a.account.structure
        }
        c.d(b, {}, {
            CodeAttributionConnectorAccountRoute: function() {
                let a, b, c, f, g, i, j, k = (0, e.c)(14),
                    l = (0, h.Z)();
                if (k[0] !== l.search) {
                    g = Symbol.for("react.early_return_sentinel");
                    a: {
                        let e = new URLSearchParams(l.search),
                            i = w.safeParse({
                                source: e.getAll("source"),
                                accountId: e.getAll("account_id"),
                                connectorId: e.getAll("connector")
                            });
                        if (!i.success) {
                            let a;
                            k[6] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(h.l, {
                                to: "/settings/plugins-settings",
                                replace: !0
                            }), k[6] = a) : a = k[6], g = a;
                            break a
                        }
                        let j = new URLSearchParams({
                                "product-sku": "CODEX"
                            }),
                            m = i.data.connectorId[0];null != m && j.set("connector", m),
                        a = x,
                        f = i.data.accountId[0],
                        b = "/settings/connectors",
                        c = j.toString()
                    }
                    k[0] = l.search, k[1] = a, k[2] = b, k[3] = c, k[4] = f, k[5] = g
                } else a = k[1], b = k[2], c = k[3], f = k[4], g = k[5];
                return g !== Symbol.for("react.early_return_sentinel") ? g : (k[7] !== b || k[8] !== c ? (i = {
                    pathname: b,
                    search: c
                }, k[7] = b, k[8] = c, k[9] = i) : i = k[9], k[10] !== a || k[11] !== f || k[12] !== i ? (j = (0, d.jsx)(a, {
                    accountId: f,
                    destination: i,
                    unavailablePath: "/settings/plugins-settings"
                }), k[10] = a, k[11] = f, k[12] = i, k[13] = j) : j = k[13], j)
            },
            WorkspaceLinkRoute: x
        })
    }),
    EBQV: (function(b) {
        b.exports = a.ir("/cdn/assets/dotnet.js").then(function(a) {
            return a
        })
    })
};
import {
    __webpack_require__ as a
} from "./633146.1f27f5a9c8.js";
import * as b from "./418851.05e747fff0.js";
a.C(b);
import * as c from "./109308.d24e70db04.js";
a.C(c);
import * as d from "./399565.bde4033eb2.js";
a.C(d);
import * as e from "./257798.0095cbe700.js";
a.C(e);
import * as f from "./447351.05632d2214.js";
a.C(f);
import * as g from "./617936.75afa06ed2.js";
a.C(g);
import * as h from "./807489.5142370709.js";
a.C(h);
import * as i from "./337882.abb4bc92fd.js";
a.C(i);
import * as j from "./955979.54c13b0fc4.js";
a.C(j);
import * as k from "./646436.e4ed460833.js";
a.C(k);
import * as l from "./7078.61922297fe.js";
a.C(l);
import * as m from "./200429.e860765fad.js";
a.C(m);
import * as n from "./698524.4f94b9b043.js";
a.C(n);
import * as o from "./956483.afc3e2c9fd.js";
a.C(o);
import * as p from "./87162.e84f1cbe30.js";
a.C(p);
import * as q from "./396705.16d73232e5.js";
a.C(q);
import * as r from "./155568.18f2193ead.js";
a.C(r);
import * as s from "./731863.b14c3a25df.js";
a.C(s);
import * as t from "./767086.d600a395f4.js";
a.C(t);
import * as u from "./76629.2b5e8e87e6.js";
a.C(u);
import * as v from "./226913.748570e15f.js";
a.C(v);
import * as w from "./631517.1798838d2c.js";
a.C(w);
var x = a(a.s = "dBFT").a;
export {
    x as
    default
};