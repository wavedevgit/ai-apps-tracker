import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $_ as t,
    C5 as n,
    I1 as r,
    M1 as i,
    Pv as a,
    S5 as o,
    Y1 as s
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    O as c,
    Tn as l,
    s as u,
    w as d
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    $it as f,
    HLt as p,
    KVt as m,
    LPn as h,
    XLt as g,
    YPn as _,
    Zit as v,
    aTn as y,
    iTn as b,
    nHt as x
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    as as S,
    is as C
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
var w, T, E, D, O, k, A, j, M, N, P, F, I, L, R, z, B, V = e((() => {
        w = l(), g(), r(), n(), u(), T = [`builder-hermes-apps-browse`], E = () => {
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
            let t = await p({
                signal: e
            });
            return {
                recommendedApps: t.recommended_apps.map(j),
                publicApps: t.public_apps.map(j),
                workspaceApps: t.workspace_apps.map(j)
            }
        }, N = () => d({
            queryKey: D(),
            queryFn: ({
                signal: e
            }) => M(e)
        }), P = () => o().getQueryData(D()), F = e => e.invalidateQueries({
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
        } = {}) => o().fetchQuery({
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
        x(), a(), y(), _(), V(), H = async e => {
            await Promise.all([e.invalidateQueries({
                queryKey: h(!0, t, b.HERMES)
            }), e.invalidateQueries({
                queryKey: h(!1, t, b.HERMES)
            }), F(e), e.invalidateQueries({
                queryKey: [m]
            })])
        }
    })),
    W, G, K = e((() => {
        W = l(), U(), C(), a(), y(), r(), v(), G = () => {
            "use forget";
            let e = (0, W.c)(2),
                n = s(),
                r;
            return e[0] === n ? r = e[1] : (r = {
                productSku: b.HERMES,
                includeTags: t,
                invalidateQueries: H,
                canReuseLink: e => f(e, n)
            }, e[0] = n, e[1] = r), S(r)
        }
    }));
export {
    z as a, R as c, L as d, B as f, H as i, V as l, G as n, I as o, U as r, P as s, K as t, F as u
};
//# sourceMappingURL=126cbe2b-oahabwiriuz5th2c.js.map