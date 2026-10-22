import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Aat as n,
    Eat as r,
    Jat as i,
    Q7 as a,
    SK as o,
    V1 as s,
    Y7 as c,
    drt as l,
    eot as u,
    fat as d,
    hrt as f,
    k8 as p,
    kat as m,
    lrt as h,
    mat as g,
    q1 as _,
    xK as v
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    H as y,
    s as b,
    w as x
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Hwn as S,
    QCn as C,
    Vwn as w,
    XCn as T,
    YCn as E,
    _nt as D,
    gnt as O
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Ky as k,
    Nv as A,
    Pv as j,
    Wy as M,
    jv as N
} from "./c2675c8c-otyjprdiowg2v8hl.js";

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
    f()
}));

function z() {
    if (typeof window > `u`) return !1;
    let e = new URL(m, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function B() {
    return z() && L() ? `sheep` : `legacy`
}

function V() {
    return B() === `sheep` ? q.sheepDependencies : q.dependencies
}

function H(e, t, n, r, i) {
    if (n?.throwIfAborted(), E(t), e !== B() || r !== void 0 && !r || e === `sheep` && r === !0 && (i === void 0 || i !== s()?.normalizedAccountUserId)) throw new y({
        revert: !0
    })
}
async function U({
    pluginId: e,
    workspaceId: t,
    signal: n,
    includeAdminDetail: i = !1,
    includeDependencies: a = !i,
    workspaceUserId: o = s()?.normalizedAccountUserId
}) {
    return await S({
        operation: `plugin_detail`,
        transport: `sheep`,
        workspaceId: t,
        signal: n,
        request: async s => {
            if (i && a || (H(`sheep`, t, n, i ? void 0 : a, o), e === ``)) throw new y({
                revert: !0
            });
            G ??= new c({
                baseUrl: m.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let l = await G.safeGet(`/plugins/admin/{plugin_id}`, {
                ...s,
                authOption: r.Required,
                preserveAccountIdOnRetry: !0,
                signal: n,
                additionalHeaders: {
                    ...v(t),
                    [d]: `ADMIN_SETTING`,
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
            return H(`sheep`, t, n, i ? void 0 : a, o), l
        }
    })
}

function W(e, t, n) {
    return !n || !T(t) || e !== B() ? !1 : !z() || (R() ? `sheep` : `legacy`) === e
}
var G, K, q, J, Y = e((() => {
    w(), _(), p(), n(), g(), a(), f(), o(), b(), C(), ee(), K = e => {
        let t = l();
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
    } = V(), a = s()?.normalizedAccountUserId;
    return W(r, n, t), e.prefetchQuery($(t, n, r, i, a))
}
async function Z(e, t, n) {
    let {
        transport: r,
        includeDependencies: i
    } = V(), a = s()?.normalizedAccountUserId;
    if (H(r, n, void 0, i, a), !W(r, n, t)) throw new y({
        revert: !0
    });
    let o = await e.fetchQuery($(t, n, r, i, a));
    return H(r, n, void 0, i, a), o
}
var Q, $, te = e((() => {
    w(), Y(), I(), o(), _(), D(), n(), u(), g(), b(), M(), C(), j(), Q = e => {
        if (!(e instanceof i)) return !1;
        let t = e.status === 400 ? e.json.validation_errors : e.status === 422 ? e.detail : void 0;
        if (!Array.isArray(t) || t.length !== 1) return !1;
        let n = t[0];
        return typeof n == `object` && !!n && `type` in n && n.type === `enum` && `input` in n && n.input === `dependencies` && `loc` in n && Array.isArray(n.loc) && n.loc.length === 2 && n.loc[0] === `query` && n.loc[1] === `include`
    }, $ = (e, t, n = t ? B() : `legacy`, i = !0, a = s()?.normalizedAccountUserId) => x({
        queryKey: F(e, t, n, i, a),
        queryFn: async ({
            signal: o
        }) => await k({
            operation: `detail`,
            signal: o,
            request: async () => {
                if (E(t), !t) throw new y({
                    revert: !0
                });
                if (H(n, t, o, i, a), n === `sheep`) return await U({
                    pluginId: e,
                    workspaceId: t,
                    signal: o,
                    includeDependencies: i,
                    workspaceUserId: a
                });
                let s = async s => (H(n, t, o, i, a), await S({
                    operation: `plugin_detail`,
                    transport: `plugin_service`,
                    workspaceId: t,
                    signal: o,
                    request: n => O.safeGet(`/plugins/admin/{plugin_id}`, {
                        ...n,
                        authOption: r.Required,
                        additionalHeaders: {
                            [d]: `ADMIN_SETTING`,
                            ...t === void 0 ? {} : v(t)
                        },
                        signal: o,
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
                    let e = await s(i);
                    return H(n, t, o, i, a), e
                } catch (e) {
                    if (!Q(e)) throw e;
                    let r = await s(!1);
                    return H(n, t, o, i, a), r
                }
            }
        }),
        enabled: e !== `` && T(t) && (n !== `sheep` || !i || a !== void 0 && a === s()?.normalizedAccountUserId),
        staleTime: N
    })
}));
export {
    J as a, U as c, B as d, F as f, X as i, Y as l, I as m, $ as n, H as o, P as p, te as r, W as s, Z as t, V as u
};
//# sourceMappingURL=eec17ee5-o8e9qvbq3i6ltg2q.js.map