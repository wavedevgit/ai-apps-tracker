import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Iv as t,
    L5 as n,
    R5 as r,
    U1 as i,
    o0 as a,
    q1 as o,
    tv as s
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    O as c,
    s as l,
    w as u,
    wn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Lt as f,
    FTn as p,
    GLt as m,
    PTn as h,
    Qit as g,
    Xit as _,
    YVt as v,
    aHt as y,
    kFn as b,
    vFn as x
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    as as S,
    is as C
} from "./8b34dbc2-n194ohawifys3bko.js";
var w, T, E, D, O, k, A, j, M, N, P, F, I, L, R, z, B, V = e((() => {
        w = d(), f(), o(), r(), l(), T = [`builder-hermes-apps-browse`], E = () => {
            let e = i();
            return e?.normalizedAccountUserId ?? e?.id ?? `anonymous-account`
        }, D = () => [...T, E()], O = e => {
            if (typeof e != `string`) return null;
            let t = e.trim();
            return t.length > 0 ? t : null
        }, k = e => `show_internal_badge` in e && e.show_internal_badge === !0, A = e => `disabled_by_admin` in e && e.disabled_by_admin === !0, j = e => ({
            id: e.id,
            displayName: e.display_name,
            subtitle: O(e.subtitle),
            logoUrl: O(e.logo_url),
            logoDarkUrl: O(e.logo_dark_url),
            showInternalBadge: k(e),
            disabledByAdmin: A(e)
        }), M = async e => {
            let t = await m({
                signal: e
            });
            return {
                recommendedApps: t.recommended_apps.map(j),
                publicApps: t.public_apps.map(j),
                workspaceApps: t.workspace_apps.map(j)
            }
        }, N = () => u({
            queryKey: D(),
            queryFn: ({
                signal: e
            }) => M(e)
        }), P = () => n().getQueryData(D()), F = e => e.invalidateQueries({
            queryKey: T
        }), I = e => [...e.recommendedApps, ...e.publicApps, ...e.workspaceApps], L = (e, t) => e.toLowerCase().includes(t), R = ({
            browseData: e,
            directoryAppIds: t,
            appScope: n,
            normalizedQuery: r
        }) => {
            if (e == null) return !1;
            let i = e => !t.has(e.id) && L(e.displayName, r);
            return [...e.recommendedApps, ...e.publicApps].some(e => (n !== `internal` || e.showInternalBadge) && i(e)) || e.workspaceApps.some(i)
        }, z = ({
            retry: e,
            staleTime: t
        } = {}) => n().fetchQuery({
            ...N(),
            retry: e,
            staleTime: t
        }), B = e => {
            "use forget";
            let t = (0, w.c)(5),
                n;
            t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
            let {
                enabled: r
            } = n, i = r === void 0 || r, a;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = N(), t[2] = a) : a = t[2];
            let o;
            return t[3] === i ? o = t[4] : (o = {
                ...a,
                enabled: i
            }, t[3] = i, t[4] = o), c(o)
        }
    })),
    H, U = e((() => {
        y(), t(), p(), b(), V(), H = async e => {
            await Promise.all([e.invalidateQueries({
                queryKey: x(!0, s, h.HERMES)
            }), e.invalidateQueries({
                queryKey: x(!1, s, h.HERMES)
            }), F(e), e.invalidateQueries({
                queryKey: [v]
            })])
        }
    })),
    W, G, K = e((() => {
        W = d(), U(), C(), t(), p(), o(), _(), G = () => {
            "use forget";
            let e = (0, W.c)(2),
                t = a(),
                n;
            return e[0] === t ? n = e[1] : (n = {
                productSku: h.HERMES,
                includeTags: s,
                invalidateQueries: H,
                canReuseLink: e => g(e, t)
            }, e[0] = t, e[1] = n), S(n)
        }
    }));
export {
    z as a, R as c, L as d, B as f, H as i, V as l, G as n, I as o, U as r, P as s, K as t, F as u
};
//# sourceMappingURL=126cbe2b-ndo6fr0dpjmg10um.js.map