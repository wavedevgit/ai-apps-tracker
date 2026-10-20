import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    CK as n,
    Dat as r,
    Git as i,
    Hnt as a,
    I1 as o,
    Jnt as s,
    L7 as c,
    Nat as l,
    P7 as u,
    Wnt as d,
    aat as f,
    cat as p,
    h8 as m,
    lat as h,
    m8 as ee,
    qit as g,
    wK as _
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    H as v,
    s as y,
    w as b
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    _nt as x,
    fwn as S,
    gCn as C,
    mCn as w,
    pCn as T,
    uwn as E,
    vnt as D
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Sb as O,
    _b as k,
    ey as A,
    ny as j,
    ry as M
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";

function N() {
    return a(`1850546582`, {
        disableExposureLog: !0
    })
}

function P() {
    return a(`1850546582`)
}
var F = e((() => {
    s()
}));

function I() {
    if (typeof window > `u`) return !1;
    let e = new URL(p, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function L() {
    return I() && N() ? `sheep` : `legacy`
}

function R() {
    return L() === `sheep` ? W.sheepDependencies : W.dependencies
}

function z(e, n, r, i, a) {
    if (r?.throwIfAborted(), T(n), e !== L() || i !== void 0 && !i || e === `sheep` && i === !0 && (a === void 0 || a !== t()?.normalizedAccountUserId)) throw new v({
        revert: !0
    })
}
async function B({
    pluginId: e,
    workspaceId: r,
    signal: a,
    includeAdminDetail: o = !1,
    includeDependencies: s = !o,
    workspaceUserId: c = t()?.normalizedAccountUserId
}) {
    return await S({
        operation: `plugin_detail`,
        transport: `sheep`,
        workspaceId: r,
        signal: a,
        request: async t => {
            if (o && s || (z(`sheep`, r, a, o ? void 0 : s, c), e === ``)) throw new v({
                revert: !0
            });
            H ??= new u({
                baseUrl: p.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let l = await H.safeGet(`/plugins/admin/{plugin_id}`, {
                ...t,
                authOption: f.Required,
                preserveAccountIdOnRetry: !0,
                signal: a,
                additionalHeaders: {
                    ...n(r),
                    [i]: `ADMIN_SETTING`,
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
                    } : o ? {
                        query: {
                            include: `admin_detail`
                        }
                    } : {}
                }
            });
            return z(`sheep`, r, a, o ? void 0 : s, c), l
        }
    })
}

function V(e, t, n) {
    return !n || !w(t) || e !== L() ? !1 : !I() || (P() ? `sheep` : `legacy`) === e
}
var H, U, W, G, K = e((() => {
    E(), o(), ee(), h(), g(), c(), s(), _(), y(), C(), F(), U = e => {
        let t = d();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }, W = {
        dependencies: {
            transport: `legacy`,
            includeDependencies: !0
        },
        sheepDependencies: {
            transport: `sheep`,
            includeDependencies: !0
        }
    }, G = m(R, U, {
        name: `adminPluginDetailReadSelection`
    })
}));

function q(e, t, n = !1) {
    let r = n ? [`dependencies`] : [];
    return t === void 0 ? [`plugin-admin-v2`, `detail`, ...r, e] : j(`detail`, t, ...r, e)
}

function J(e, t, n = `legacy`, r = !1, i) {
    let a = q(e, t, r);
    return n === `legacy` ? a : [...a, `detail-sheep`, ...r && i !== void 0 ? [{
        detailActor: i
    }] : []]
}
var Y = e((() => {
    M()
}));

function X(e, n, r) {
    let {
        transport: i,
        includeDependencies: a
    } = R(), o = t()?.normalizedAccountUserId;
    return V(i, r, n), e.prefetchQuery($(n, r, i, a, o))
}
async function Z(e, n, r) {
    let {
        transport: i,
        includeDependencies: a
    } = R(), o = t()?.normalizedAccountUserId;
    if (z(i, r, void 0, a, o), !V(i, r, n)) throw new v({
        revert: !0
    });
    let s = await e.fetchQuery($(n, r, i, a, o));
    return z(i, r, void 0, a, o), s
}
var Q, $, te = e((() => {
    E(), K(), Y(), _(), o(), D(), h(), l(), g(), y(), k(), C(), M(), Q = e => {
        if (!(e instanceof r)) return !1;
        let t = e.status === 400 ? e.json.validation_errors : e.status === 422 ? e.detail : void 0;
        if (!Array.isArray(t) || t.length !== 1) return !1;
        let n = t[0];
        return typeof n == `object` && !!n && `type` in n && n.type === `enum` && `input` in n && n.input === `dependencies` && `loc` in n && Array.isArray(n.loc) && n.loc.length === 2 && n.loc[0] === `query` && n.loc[1] === `include`
    }, $ = (e, r, a = r ? L() : `legacy`, o = !0, s = t()?.normalizedAccountUserId) => b({
        queryKey: J(e, r, a, o, s),
        queryFn: async ({
            signal: t
        }) => await O({
            operation: `detail`,
            signal: t,
            request: async () => {
                if (T(r), !r) throw new v({
                    revert: !0
                });
                if (z(a, r, t, o, s), a === `sheep`) return await B({
                    pluginId: e,
                    workspaceId: r,
                    signal: t,
                    includeDependencies: o,
                    workspaceUserId: s
                });
                let c = async c => (z(a, r, t, o, s), await S({
                    operation: `plugin_detail`,
                    transport: `plugin_service`,
                    workspaceId: r,
                    signal: t,
                    request: a => x.safeGet(`/plugins/admin/{plugin_id}`, {
                        ...a,
                        authOption: f.Required,
                        additionalHeaders: {
                            [i]: `ADMIN_SETTING`,
                            ...r === void 0 ? {} : n(r)
                        },
                        signal: t,
                        parameters: {
                            ...c ? {
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
                    let e = await c(o);
                    return z(a, r, t, o, s), e
                } catch (e) {
                    if (!Q(e)) throw e;
                    let n = await c(!1);
                    return z(a, r, t, o, s), n
                }
            }
        }),
        enabled: e !== `` && w(r) && (a !== `sheep` || !o || s !== void 0 && s === t()?.normalizedAccountUserId),
        staleTime: A
    })
}));
export {
    J as a, G as c, B as d, K as f, X as i, z as l, L as m, $ as n, q as o, R as p, te as r, Y as s, Z as t, V as u
};
//# sourceMappingURL=eec17ee5-pfmqng99zntx5uvn.js.map