export const __rspack_esm_ids = [631517];
export const __webpack_modules__ = {
    YYy6: (function(e, t, a) {
        a.d(t, {
            a: () => p
        });
        var r = a("jqIZ"),
            s = a("ABep"),
            o = a("QosV"),
            n = a("ASxG"),
            c = a("EOo5"),
            i = a("pEfp"),
            l = a("zOE4"),
            m = a("jZDY");
        let u = n.object({
            accountId: n.tuple([n.string().trim().min(1)]),
            returnTo: n.tuple([n.string().min(1)]),
            attempted: n.array(n.enum(["authenticate", "select"])).max(1)
        });
        var p = (0, r.hb)(function() {
            let e, t, a, n, p, d, f = (0, o.c)(19),
                {
                    authMethod: C,
                    isLoading: h
                } = (0, c.a)(),
                _ = (0, m.a)(),
                j = (0, r.Y)(),
                w = (0, r.W)(j);
            if (!_ || h) {
                let e;
                return f[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.jsx)(l.LoadingPage, {}), f[0] = e) : e = f[0], e
            }
            if (f[1] !== w) {
                a = Symbol.for("react.early_return_sentinel");
                e: {
                    if (n = new URL(w, window.location.origin), !(e = u.safeParse({
                            accountId: n.searchParams.getAll("account_id"),
                            returnTo: n.searchParams.getAll("return_to"),
                            attempted: n.searchParams.getAll("handoff_attempt")
                        })).success) {
                        let e;
                        f[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.jsx)(r.l, {
                            to: "/",
                            replace: !0
                        }), f[6] = e) : e = f[6], a = e;
                        break e
                    }
                    let o = URL.parse(e.data.returnTo[0], n);
                    if (null == o || o.origin !== n.origin || null == (0, r.J)("/admin/*", o.pathname) || null != (0, r.J)("/admin/workspace-handoff", o.pathname)) {
                        let e;
                        f[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.jsx)(r.l, {
                            to: "/",
                            replace: !0
                        }), f[7] = e) : e = f[7], a = e;
                        break e
                    }
                    o.searchParams.delete("account_id"),
                    o.hash || (o.hash = n.hash),
                    t = o.pathname + o.search + o.hash,
                    n.searchParams.set("return_to", t),
                    n.hash = ""
                }
                f[1] = w, f[2] = e, f[3] = t, f[4] = a, f[5] = n
            } else e = f[2], t = f[3], a = f[4], n = f[5];
            if (a !== Symbol.for("react.early_return_sentinel")) return a;
            if (null == C) {
                let e, t, a = n.pathname + n.search;
                f[8] !== a ? (e = new URLSearchParams({
                    next: a
                }), f[8] = a, f[9] = e) : e = f[9];
                let o = `/auth/login?${e}`;
                return f[10] !== o ? (t = (0, s.jsx)(r.l, {
                    to: o,
                    replace: !0
                }), f[10] = o, f[11] = t) : t = f[11], t
            }
            let b = j.pathname + n.search;
            return f[12] !== e.data.attempted[0] || f[13] !== b ? (p = {
                returnTo: b,
                attempted: e.data.attempted[0]
            }, f[12] = e.data.attempted[0], f[13] = b, f[14] = p) : p = f[14], f[15] !== e.data.accountId[0] || f[16] !== t || f[17] !== p ? (d = (0, s.jsx)(i.WorkspaceLinkRoute, {
                accountId: e.data.accountId[0],
                destination: t,
                documentHandoff: p,
                unavailablePath: "/"
            }), f[15] = e.data.accountId[0], f[16] = t, f[17] = p, f[18] = d) : d = f[18], d
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
            s = a("QosV"),
            o = a("T0Rc"),
            n = a("zd8w"),
            c = a("jqIZ"),
            i = a("ASxG"),
            l = a("HnGz"),
            m = a("l5Vd"),
            u = a("QdUF"),
            p = a("EOo5"),
            d = a("Kwur"),
            f = a("zOE4"),
            C = a("uHE8"),
            h = a("tSEg"),
            _ = a("vLpE"),
            j = a("iPqE"),
            w = a("hZax"),
            b = a("dHX4");
        let g = i.string().regex(/^[a-zA-Z0-9_-]{1,255}$/),
            L = i.object({
                source: i.tuple([i.literal("codex-code-attribution")]),
                accountId: i.tuple([g]),
                connectorId: i.array(g).max(1)
            });

        function k(e) {
            let t, a, i, g, L, k, y = (0, s.c)(35),
                {
                    accountId: A,
                    destination: I,
                    documentHandoff: v,
                    reloadOnSelection: S,
                    unavailablePath: P
                } = e,
                R = void 0 !== S && S,
                {
                    userId: T,
                    accountId: V
                } = (0, p.a)(),
                Z = (0, c.Y)(),
                E = (0, n.useContext)(c.q).matches.at(-1)?.route.children,
                W = (0, c.W)(I),
                q = (0, c.W)(v?.returnTo ?? I),
                G = (0, c.W)(P),
                O = (0, w.i)();
            y[0] !== A || y[1] !== W || y[2] !== v || y[3] !== Z.key || y[4] !== R || y[5] !== q || y[6] !== G || y[7] !== T ? (t = ["workspace-link-account", Z.key, T, A, W, G, R, v, q], y[0] = A, y[1] = W, y[2] = v, y[3] = Z.key, y[4] = R, y[5] = q, y[6] = G, y[7] = T, y[8] = t) : t = y[8], y[9] !== A || y[10] !== V || y[11] !== I || y[12] !== v || y[13] !== Z.pathname || y[14] !== Z.search || y[15] !== R || y[16] !== q || y[17] !== O || y[18] !== G ? (a = async e => {
                let {
                    signal: t
                } = e, a = await d.Request.safeGet("/accounts/check/{version}", {
                    parameters: {
                        path: {
                            version: "v4-2023-04-27"
                        }
                    },
                    signal: t
                });
                t.throwIfAborted();
                let r = "personal" === A && null == v ? Object.values(a.accounts).find(x) : a.accounts[A],
                    s = r?.account;
                if (null == r || s?.account_id == null || !0 === s.is_deactivated) return R ? ((0, j.setAccountCookie)((0, u.readChatGptTokenClaims)((0, u.getBrowserChatGptAuthSnapshot)()?.accessToken ?? "")?.accountId ?? void 0), await (0, j.handleBrowserAccountChangeAndRefresh)(G, t), "switching") : "unavailable";
                if (!R && V === s.account_id && !1 !== r.can_access_with_session && (null == v || (0, u.readChatGptTokenClaims)((0, u.getBrowserChatGptAuthSnapshot)()?.accessToken ?? "")?.accountId === s.account_id)) return null != v ? (window.location.replace("string" == typeof I ? I : (0, c.y)(I)), "switching") : "selected";
                if (v?.attempted === "select" || v?.attempted === "authenticate" && !1 === r.can_access_with_session) return "unavailable";
                let o = (0, c.J)(m.i, Z.pathname)?.params.projectId,
                    n = (0, m.t)(new URLSearchParams(Z.search));
                if (null != o && null != n && !1 !== r.can_access_with_session) {
                    try {
                        await d.Request.safeGet("/websites/{project_id}/access_request", {
                            additionalHeaders: {
                                "ChatGPT-Account-ID": s.account_id
                            },
                            parameters: {
                                path: {
                                    project_id: o
                                },
                                query: {
                                    token: n
                                }
                            },
                            signal: t
                        })
                    } catch {
                        return t.throwIfAborted(), "selected"
                    }
                    t.throwIfAborted()
                }
                let i = q;
                if (null != v) {
                    let e = new URL(q, window.location.origin);
                    e.searchParams.set("handoff_attempt", !1 === r.can_access_with_session ? "authenticate" : "select"), i = e.toString()
                }
                return await (0, j.switchBrowserWorkspaceAndRefresh)({
                    workspaceAccountId: s.account_id,
                    workspaceName: s.name ?? null,
                    workspaceImageUrl: s.profile_picture_url ?? null,
                    isPersonalWorkspace: "personal" === s.structure,
                    isDeactivated: s.is_deactivated,
                    accountResidencyRegion: s.account_residency_region,
                    isFedrampCompliantWorkspace: s.is_fedramp_compliant_workspace,
                    canAccessWithSession: r.can_access_with_session,
                    ssoConnectionName: r.sso_connection_name
                }, O, i, t), "switching"
            }, y[9] = A, y[10] = V, y[11] = I, y[12] = v, y[13] = Z.pathname, y[14] = Z.search, y[15] = R, y[16] = q, y[17] = O, y[18] = G, y[19] = a) : a = y[19], y[20] !== t || y[21] !== a ? (i = {
                queryKey: t,
                queryFn: a,
                staleTime: 1 / 0,
                gcTime: 0,
                retry: !1,
                refetchOnWindowFocus: !1,
                refetchOnReconnect: !1
            }, y[20] = t, y[21] = a, y[22] = i) : i = y[22];
            let {
                data: U,
                error: z
            } = (0, o.a)(i);
            if (z) throw z;
            if ("unavailable" === U) {
                let e;
                return y[23] !== P ? (e = (0, r.jsx)(c.l, {
                    to: P,
                    replace: !0
                }), y[23] = P, y[24] = e) : e = y[24], e
            }
            if ("selected" === U) {
                let e;
                return y[25] !== I ? (e = (0, r.jsx)(c.l, {
                    to: I,
                    replace: !0
                }), y[25] = I, y[26] = e) : e = y[26], e
            }
            let B = _.a,
                M = h.b,
                Y = null == E ? Z.pathname : (0, l.e)(E, Z.pathname);
            return y[27] !== Z || y[28] !== M || y[29] !== Y ? (g = M({
                ...Z,
                routeTemplate: Y
            }), y[27] = Z, y[28] = M, y[29] = Y, y[30] = g) : g = y[30], y[31] === Symbol.for("react.memo_cache_sentinel") ? (L = (0, r.jsxs)(C.a, {
                children: [(0, r.jsx)(b.b, {}), (0, r.jsx)(f.LoadingPage, {})]
            }), y[31] = L) : L = y[31], y[32] !== B || y[33] !== g ? (k = (0, r.jsx)(B, {
                route: g,
                children: L
            }), y[32] = B, y[33] = g, y[34] = k) : k = y[34], k
        }

        function x(e) {
            return "personal" === e.account.structure
        }
        a.d(t, {}, {
            CodeAttributionConnectorAccountRoute: function() {
                let e, t, a, o, n, i, l, m = (0, s.c)(14),
                    u = (0, c.Y)();
                if (m[0] !== u.search) {
                    n = Symbol.for("react.early_return_sentinel");
                    e: {
                        let s = new URLSearchParams(u.search),
                            i = L.safeParse({
                                source: s.getAll("source"),
                                accountId: s.getAll("account_id"),
                                connectorId: s.getAll("connector")
                            });
                        if (!i.success) {
                            let e;
                            m[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(c.l, {
                                to: "/settings/plugins-settings",
                                replace: !0
                            }), m[6] = e) : e = m[6], n = e;
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
                    m[0] = u.search, m[1] = e, m[2] = t, m[3] = a, m[4] = o, m[5] = n
                } else e = m[1], t = m[2], a = m[3], o = m[4], n = m[5];
                return n !== Symbol.for("react.early_return_sentinel") ? n : (m[7] !== t || m[8] !== a ? (i = {
                    pathname: t,
                    search: a
                }, m[7] = t, m[8] = a, m[9] = i) : i = m[9], m[10] !== e || m[11] !== o || m[12] !== i ? (l = (0, r.jsx)(e, {
                    accountId: o,
                    destination: i,
                    unavailablePath: "/settings/plugins-settings"
                }), m[10] = e, m[11] = o, m[12] = i, m[13] = l) : l = m[13], l)
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
} from "./633146.79c7577f6d.js";
import * as t from "./418851.4cf783e1e4.js";
e.C(t);
import * as a from "./109308.fbb414d4aa.js";
e.C(a);
import * as r from "./399565.ed5e74a86b.js";
e.C(r);
import * as s from "./257798.0b3d6025cd.js";
e.C(s);
import * as o from "./153380.6675e448cd.js";
e.C(o);
import * as n from "./617936.5a72737818.js";
e.C(n);
import * as c from "./807489.54f5772d0d.js";
e.C(c);
import * as i from "./337882.26e5bd2b09.js";
e.C(i);
import * as l from "./955979.c158e14c67.js";
e.C(l);
import * as m from "./646436.73183b8431.js";
e.C(m);
import * as u from "./7078.92e3c91286.js";
e.C(u);
import * as p from "./200429.073fa1ac67.js";
e.C(p);
import * as d from "./698524.d0f80a4f75.js";
e.C(d);
import * as f from "./956483.7057f5dd90.js";
e.C(f);
import * as C from "./87162.29ee0bd2a9.js";
e.C(C);
import * as h from "./396705.c39944bbf2.js";
e.C(h);
import * as _ from "./155568.7bbfb72b85.js";
e.C(_);
import * as j from "./731863.8b87e9728a.js";
e.C(j);
import * as w from "./767086.6da4be4bcc.js";
e.C(w);
import * as b from "./76629.4a3def3f3d.js";
e.C(b);
import * as g from "./514085.fce2779453.js";
e.C(g);
import * as L from "./204542.ebe6ed48ad.js";
e.C(L);
import * as k from "./982651.7bfd071e83.js";
e.C(k);
import * as x from "./673108.aaf568e9f3.js";
e.C(x);
import * as y from "./487481.699d7b5953.js";
e.C(y);
import * as A from "./229522.110e65fd00.js";
e.C(A);
import * as I from "./390575.8e5cb2c01a.js";
e.C(I);
import * as v from "./353032.9312ae4acb.js";
e.C(v);
import * as S from "./637885.3e8c638fde.js";
e.C(S);
import * as P from "./226913.6965f848b1.js";
e.C(P);
import * as R from "./631517.6fbb445e3e.js";
e.C(R);
var T = e(e.s = "YYy6").a;
export {
    T as
    default
};