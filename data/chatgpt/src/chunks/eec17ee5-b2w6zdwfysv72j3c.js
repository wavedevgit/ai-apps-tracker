import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Dat as n,
    Kat as r,
    Oat as i,
    Q7 as a,
    Qat as o,
    SK as s,
    V1 as c,
    Y7 as l,
    fat as u,
    k8 as d,
    lrt as f,
    prt as p,
    q1 as m,
    srt as h,
    uat as g,
    wat as _,
    xK as v
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    H as y,
    s as b,
    w as x
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    ACn as S,
    Cwn as C,
    NCn as w,
    Swn as T,
    gnt as E,
    hnt as D,
    jCn as O
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Ky as k,
    Nv as A,
    Pv as j,
    Wy as M,
    jv as N
} from "./c2675c8c-p3x4d0bnf7e77o1n.js";

function P(e, t, n = !1) {
    let r = n ? [`dependencies`] : [];
    return t === void 0 ? [`plugin-admin-v2`, `detail`, ...r, e] : A(`detail`, t, ...r, e)
}

function F(e, t, n = `legacy`, r = !1, i) {
    let a = P(e, t, r);
    return n === `legacy` ? a : [...a, `detail-sheep`, ...r && i !== void 0 ? [{
        detailActor: i
    }] : []]
}
var I = e((() => {
    j()
}));

function L() {
    return h(`1850546582`, {
        disableExposureLog: !0
    })
}

function R() {
    return h(`1850546582`)
}
var ee = e((() => {
    p()
}));

function z() {
    if (typeof window > `u`) return !1;
    let e = new URL(n, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function B() {
    return z() && L() ? `sheep` : `legacy`
}

function V() {
    return B() === `sheep` ? q.sheepDependencies : q.dependencies
}

function H(e, t, n, r, i) {
    if (n?.throwIfAborted(), S(t), e !== B() || r !== void 0 && !r || e === `sheep` && r === !0 && (i === void 0 || i !== c()?.normalizedAccountUserId)) throw new y({
        revert: !0
    })
}
async function U({
    pluginId: e,
    workspaceId: t,
    signal: r,
    includeAdminDetail: i = !1,
    includeDependencies: a = !i,
    workspaceUserId: o = c()?.normalizedAccountUserId
}) {
    return await C({
        operation: `plugin_detail`,
        transport: `sheep`,
        workspaceId: t,
        signal: r,
        request: async s => {
            if (i && a || (H(`sheep`, t, r, i ? void 0 : a, o), e === ``)) throw new y({
                revert: !0
            });
            G ??= new l({
                baseUrl: n.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let c = await G.safeGet(`/plugins/admin/{plugin_id}`, {
                ...s,
                authOption: _.Required,
                preserveAccountIdOnRetry: !0,
                signal: r,
                additionalHeaders: {
                    ...v(t),
                    [g]: `ADMIN_SETTING`,
                    "x-openai-use-sheep": `1`
                },
                parameters: {
                    path: {
                        plugin_id: e
                    },
                    ...a ? {
                        query: {
                            include: `dependencies`
                        }
                    } : i ? {
                        query: {
                            include: `admin_detail`
                        }
                    } : {}
                }
            });
            return H(`sheep`, t, r, i ? void 0 : a, o), c
        }
    })
}

function W(e, t, n) {
    return !n || !O(t) || e !== B() ? !1 : !z() || (R() ? `sheep` : `legacy`) === e
}
var G, K, q, J, Y = e((() => {
    T(), m(), d(), i(), u(), a(), p(), s(), b(), w(), ee(), K = e => {
        let t = f();
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
    }, J = t(V, K, {
        name: `adminPluginDetailReadSelection`
    })
}));

function X(e, t, n) {
    let {
        transport: r,
        includeDependencies: i
    } = V(), a = c()?.normalizedAccountUserId;
    return W(r, n, t), e.prefetchQuery($(t, n, r, i, a))
}
async function Z(e, t, n) {
    let {
        transport: r,
        includeDependencies: i
    } = V(), a = c()?.normalizedAccountUserId;
    if (H(r, n, void 0, i, a), !W(r, n, t)) throw new y({
        revert: !0
    });
    let o = await e.fetchQuery($(t, n, r, i, a));
    return H(r, n, void 0, i, a), o
}
var Q, $, te = e((() => {
    T(), Y(), I(), s(), m(), E(), i(), o(), u(), b(), M(), w(), j(), Q = e => {
        if (!(e instanceof r)) return !1;
        let t = e.status === 400 ? e.json.validation_errors : e.status === 422 ? e.detail : void 0;
        if (!Array.isArray(t) || t.length !== 1) return !1;
        let n = t[0];
        return typeof n == `object` && !!n && `type` in n && n.type === `enum` && `input` in n && n.input === `dependencies` && `loc` in n && Array.isArray(n.loc) && n.loc.length === 2 && n.loc[0] === `query` && n.loc[1] === `include`
    }, $ = (e, t, n = t ? B() : `legacy`, r = !0, i = c()?.normalizedAccountUserId) => x({
        queryKey: F(e, t, n, r, i),
        queryFn: async ({
            signal: a
        }) => await k({
            operation: `detail`,
            signal: a,
            request: async () => {
                if (S(t), !t) throw new y({
                    revert: !0
                });
                if (H(n, t, a, r, i), n === `sheep`) return await U({
                    pluginId: e,
                    workspaceId: t,
                    signal: a,
                    includeDependencies: r,
                    workspaceUserId: i
                });
                let o = async o => (H(n, t, a, r, i), await C({
                    operation: `plugin_detail`,
                    transport: `plugin_service`,
                    workspaceId: t,
                    signal: a,
                    request: n => D.safeGet(`/plugins/admin/{plugin_id}`, {
                        ...n,
                        authOption: _.Required,
                        additionalHeaders: {
                            [g]: `ADMIN_SETTING`,
                            ...t === void 0 ? {} : v(t)
                        },
                        signal: a,
                        parameters: {
                            ...o ? {
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
                    let e = await o(r);
                    return H(n, t, a, r, i), e
                } catch (e) {
                    if (!Q(e)) throw e;
                    let s = await o(!1);
                    return H(n, t, a, r, i), s
                }
            }
        }),
        enabled: e !== `` && O(t) && (n !== `sheep` || !r || i !== void 0 && i === c()?.normalizedAccountUserId),
        staleTime: N
    })
}));
export {
    J as a, U as c, B as d, F as f, X as i, Y as l, I as m, $ as n, H as o, P as p, te as r, W as s, Z as t, V as u
};
//# sourceMappingURL=eec17ee5-b2w6zdwfysv72j3c.js.map