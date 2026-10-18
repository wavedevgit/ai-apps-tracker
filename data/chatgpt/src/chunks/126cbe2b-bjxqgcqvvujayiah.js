import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C1 as t,
    F_ as n,
    J8 as r,
    Y8 as i,
    gv as a,
    o1 as o,
    u1 as s
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    O as c,
    s as l,
    w as u,
    wn as d
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Gwn as f,
    HLt as p,
    KVt as m,
    MPn as h,
    Wwn as g,
    XLt as _,
    Yit as v,
    Zit as y,
    bPn as b,
    nHt as x
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    as as S,
    is as C
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
var w, T, E, D, O, k, A, j, M, N, P, F, I, L, R, z, B, V = e((() => {
        w = d(), _(), s(), i(), l(), T = [`builder-hermes-apps-browse`], E = () => {
            let e = o();
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
            let t = await p({
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
        }), P = () => r().getQueryData(D()), F = e => e.invalidateQueries({
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
        } = {}) => r().fetchQuery({
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
        x(), a(), f(), h(), V(), H = async e => {
            await Promise.all([e.invalidateQueries({
                queryKey: b(!0, n, g.HERMES)
            }), e.invalidateQueries({
                queryKey: b(!1, n, g.HERMES)
            }), F(e), e.invalidateQueries({
                queryKey: [m]
            })])
        }
    })),
    W, G, K = e((() => {
        W = d(), U(), C(), a(), f(), s(), v(), G = () => {
            "use forget";
            let e = (0, W.c)(2),
                r = t(),
                i;
            return e[0] === r ? i = e[1] : (i = {
                productSku: g.HERMES,
                includeTags: n,
                invalidateQueries: H,
                canReuseLink: e => y(e, r)
            }, e[0] = r, e[1] = i), S(i)
        }
    }));
export {
    z as a, R as c, L as d, B as f, H as i, V as l, G as n, I as o, U as r, P as s, K as t, F as u
};
//# sourceMappingURL=126cbe2b-bjxqgcqvvujayiah.js.map