import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Crt as n,
    I7 as r,
    Lat as i,
    N7 as a,
    Pat as o,
    Rat as s,
    SK as c,
    Sat as l,
    V1 as u,
    _rt as d,
    bat as f,
    cot as p,
    j8 as m,
    not as h,
    q1 as g,
    xK as _,
    yrt as ee
} from "./4813494d-mdvd4786a87166cc.js";
import {
    H as v,
    s as y,
    w as b
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Cn as x,
    Gwn as S,
    Kwn as C,
    _nt as w,
    ewn as T,
    gnt as E,
    nwn as D
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    $y as O,
    Bv as k,
    Rv as A,
    Vv as j,
    Zy as M
} from "./c2675c8c-oz03twoan08d72ud.js";

function N(e, t, n = !1) {
    let r = n ? [`dependencies`] : [];
    return t === void 0 ? [`plugin-admin-v2`, `detail`, ...r, e] : k(`detail`, t, ...r, e)
}

function P(e, t, n = `legacy`, r = !1, i) {
    let a = N(e, t, r);
    return n === `legacy` ? a : [...a, `detail-sheep`, ...r && i !== void 0 ? [{
        detailActor: i
    }] : []]
}
var F = e((() => {
    j()
}));

function I() {
    return d(`1850546582`, {
        disableExposureLog: !0
    })
}

function L() {
    return d(`1850546582`)
}
var R = e((() => {
    n()
}));

function z() {
    if (typeof window > `u`) return !1;
    let e = new URL(i, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function B() {
    return z() && I() ? `sheep` : `legacy`
}

function V() {
    return B() === `sheep` ? q.sheepDependencies : q.dependencies
}

function H(e, t, n, r, i) {
    if (n?.throwIfAborted(), x(t), e !== B() || r !== void 0 && !r || e === `sheep` && r === !0 && (i === void 0 || i !== u()?.normalizedAccountUserId)) throw new v({
        revert: !0
    })
}
async function U({
    pluginId: e,
    workspaceId: t,
    signal: n,
    includeAdminDetail: r = !1,
    includeDependencies: s = !r,
    workspaceUserId: c = u()?.normalizedAccountUserId
}) {
    return await C({
        operation: `plugin_detail`,
        transport: `sheep`,
        workspaceId: t,
        signal: n,
        request: async l => {
            if (r && s || (H(`sheep`, t, n, r ? void 0 : s, c), e === ``)) throw new v({
                revert: !0
            });
            G ??= new a({
                baseUrl: i.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let u = await G.safeGet(`/plugins/admin/{plugin_id}`, {
                ...l,
                authOption: o.Required,
                preserveAccountIdOnRetry: !0,
                signal: n,
                additionalHeaders: {
                    ..._(t),
                    [f]: `ADMIN_SETTING`,
                    "x-openai-use-sheep": `1`
                },
                parameters: {
                    path: {
                        plugin_id: e
                    },
                    ...s ? {
                        query: {
                            include: `dependencies`
                        }
                    } : r ? {
                        query: {
                            include: `admin_detail`
                        }
                    } : {}
                }
            });
            return H(`sheep`, t, n, r ? void 0 : s, c), u
        }
    })
}

function W(e, t, n) {
    return !n || !T(t) || e !== B() ? !1 : !z() || (L() ? `sheep` : `legacy`) === e
}
var G, K, q, J, Y = e((() => {
    S(), g(), t(), s(), l(), r(), n(), c(), y(), D(), R(), K = e => {
        let t = ee();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }, q = {
        dependencies: {
            transport: `legacy`,
            includeDependencies: !0
        },
        sheepDependencies: {
            transport: `sheep`,
            includeDependencies: !0
        }
    }, J = m(V, K, {
        name: `adminPluginDetailReadSelection`
    })
}));

function X(e, t, n) {
    let {
        transport: r,
        includeDependencies: i
    } = V(), a = u()?.normalizedAccountUserId;
    return W(r, n, t), e.prefetchQuery($(t, n, r, i, a))
}
async function Z(e, t, n) {
    let {
        transport: r,
        includeDependencies: i
    } = V(), a = u()?.normalizedAccountUserId;
    if (H(r, n, void 0, i, a), !W(r, n, t)) throw new v({
        revert: !0
    });
    let o = await e.fetchQuery($(t, n, r, i, a));
    return H(r, n, void 0, i, a), o
}
var Q, $, te = e((() => {
    S(), Y(), F(), c(), g(), w(), s(), p(), l(), y(), M(), D(), j(), Q = e => {
        if (!(e instanceof h)) return !1;
        let t = e.status === 400 ? e.json.validation_errors : e.status === 422 ? e.detail : void 0;
        if (!Array.isArray(t) || t.length !== 1) return !1;
        let n = t[0];
        return typeof n == `object` && !!n && `type` in n && n.type === `enum` && `input` in n && n.input === `dependencies` && `loc` in n && Array.isArray(n.loc) && n.loc.length === 2 && n.loc[0] === `query` && n.loc[1] === `include`
    }, $ = (e, t, n = t ? B() : `legacy`, r = !0, i = u()?.normalizedAccountUserId) => b({
        queryKey: P(e, t, n, r, i),
        queryFn: async ({
            signal: a
        }) => await O({
            operation: `detail`,
            signal: a,
            request: async () => {
                if (x(t), !t) throw new v({
                    revert: !0
                });
                if (H(n, t, a, r, i), n === `sheep`) return await U({
                    pluginId: e,
                    workspaceId: t,
                    signal: a,
                    includeDependencies: r,
                    workspaceUserId: i
                });
                let s = async s => (H(n, t, a, r, i), await C({
                    operation: `plugin_detail`,
                    transport: `plugin_service`,
                    workspaceId: t,
                    signal: a,
                    request: n => E.safeGet(`/plugins/admin/{plugin_id}`, {
                        ...n,
                        authOption: o.Required,
                        additionalHeaders: {
                            [f]: `ADMIN_SETTING`,
                            ...t === void 0 ? {} : _(t)
                        },
                        signal: a,
                        parameters: {
                            ...s ? {
                                query: {
                                    include: `dependencies`
                                }
                            } : {},
                            path: {
                                plugin_id: e
                            }
                        }
                    })
                }));
                try {
                    let e = await s(r);
                    return H(n, t, a, r, i), e
                } catch (e) {
                    if (!Q(e)) throw e;
                    let o = await s(!1);
                    return H(n, t, a, r, i), o
                }
            }
        }),
        enabled: e !== `` && T(t) && (n !== `sheep` || !r || i !== void 0 && i === u()?.normalizedAccountUserId),
        staleTime: A
    })
}));
export {
    J as a, U as c, B as d, P as f, X as i, Y as l, F as m, $ as n, H as o, N as p, te as r, W as s, Z as t, V as u
};
//# sourceMappingURL=eec17ee5-d6148prnk88r7jzf.js.map