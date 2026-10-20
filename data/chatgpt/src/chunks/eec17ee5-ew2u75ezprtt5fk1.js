import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CK as t,
    F7 as n,
    Fat as r,
    Knt as i,
    L1 as a,
    R7 as o,
    Wnt as s,
    Xnt as c,
    Yit as l,
    dat as u,
    g8 as d,
    h8 as f,
    j1 as p,
    kat as ee,
    qit as m,
    sat as h,
    uat as g,
    wK as _
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    H as v,
    s as y,
    w as b
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    _Cn as x,
    bnt as S,
    cwn as C,
    hCn as w,
    mCn as T,
    swn as E,
    ynt as D
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Av as O,
    By as k,
    Dv as A,
    Hy as j,
    kv as M
} from "./c2675c8c-9bs3zsr3vq259es7.js";

function N() {
    return s(`1850546582`, {
        disableExposureLog: !0
    })
}

function P() {
    return s(`1850546582`)
}
var F = e((() => {
    c()
}));

function I() {
    if (typeof window > `u`) return !1;
    let e = new URL(g, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function L() {
    return I() && N() ? `sheep` : `legacy`
}

function R() {
    return L() === `sheep` ? W.sheepDependencies : W.dependencies
}

function z(e, t, n, r, i) {
    if (n?.throwIfAborted(), T(t), e !== L() || r !== void 0 && !r || e === `sheep` && r === !0 && (i === void 0 || i !== p()?.normalizedAccountUserId)) throw new v({
        revert: !0
    })
}
async function B({
    pluginId: e,
    workspaceId: r,
    signal: i,
    includeAdminDetail: a = !1,
    includeDependencies: o = !a,
    workspaceUserId: s = p()?.normalizedAccountUserId
}) {
    return await C({
        operation: `plugin_detail`,
        transport: `sheep`,
        workspaceId: r,
        signal: i,
        request: async c => {
            if (a && o || (z(`sheep`, r, i, a ? void 0 : o, s), e === ``)) throw new v({
                revert: !0
            });
            H ??= new n({
                baseUrl: g.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let l = await H.safeGet(`/plugins/admin/{plugin_id}`, {
                ...c,
                authOption: h.Required,
                preserveAccountIdOnRetry: !0,
                signal: i,
                additionalHeaders: {
                    ...t(r),
                    [m]: `ADMIN_SETTING`,
                    "x-openai-use-sheep": `1`
                },
                parameters: {
                    path: {
                        plugin_id: e
                    },
                    ...o ? {
                        query: {
                            include: `dependencies`
                        }
                    } : a ? {
                        query: {
                            include: `admin_detail`
                        }
                    } : {}
                }
            });
            return z(`sheep`, r, i, a ? void 0 : o, s), l
        }
    })
}

function V(e, t, n) {
    return !n || !w(t) || e !== L() ? !1 : !I() || (P() ? `sheep` : `legacy`) === e
}
var H, U, W, G, K = e((() => {
    E(), a(), f(), u(), l(), o(), c(), _(), y(), x(), F(), U = e => {
        let t = i();
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
    }, G = d(R, U, {
        name: `adminPluginDetailReadSelection`
    })
}));

function q(e, t, n = !1) {
    let r = n ? [`dependencies`] : [];
    return t === void 0 ? [`plugin-admin-v2`, `detail`, ...r, e] : M(`detail`, t, ...r, e)
}

function J(e, t, n = `legacy`, r = !1, i) {
    let a = q(e, t, r);
    return n === `legacy` ? a : [...a, `detail-sheep`, ...r && i !== void 0 ? [{
        detailActor: i
    }] : []]
}
var Y = e((() => {
    O()
}));

function X(e, t, n) {
    let {
        transport: r,
        includeDependencies: i
    } = R(), a = p()?.normalizedAccountUserId;
    return V(r, n, t), e.prefetchQuery($(t, n, r, i, a))
}
async function Z(e, t, n) {
    let {
        transport: r,
        includeDependencies: i
    } = R(), a = p()?.normalizedAccountUserId;
    if (z(r, n, void 0, i, a), !V(r, n, t)) throw new v({
        revert: !0
    });
    let o = await e.fetchQuery($(t, n, r, i, a));
    return z(r, n, void 0, i, a), o
}
var Q, $, te = e((() => {
    E(), K(), Y(), _(), a(), S(), u(), r(), l(), y(), k(), x(), O(), Q = e => {
        if (!(e instanceof ee)) return !1;
        let t = e.status === 400 ? e.json.validation_errors : e.status === 422 ? e.detail : void 0;
        if (!Array.isArray(t) || t.length !== 1) return !1;
        let n = t[0];
        return typeof n == `object` && !!n && `type` in n && n.type === `enum` && `input` in n && n.input === `dependencies` && `loc` in n && Array.isArray(n.loc) && n.loc.length === 2 && n.loc[0] === `query` && n.loc[1] === `include`
    }, $ = (e, n, r = n ? L() : `legacy`, i = !0, a = p()?.normalizedAccountUserId) => b({
        queryKey: J(e, n, r, i, a),
        queryFn: async ({
            signal: o
        }) => await j({
            operation: `detail`,
            signal: o,
            request: async () => {
                if (T(n), !n) throw new v({
                    revert: !0
                });
                if (z(r, n, o, i, a), r === `sheep`) return await B({
                    pluginId: e,
                    workspaceId: n,
                    signal: o,
                    includeDependencies: i,
                    workspaceUserId: a
                });
                let s = async s => (z(r, n, o, i, a), await C({
                    operation: `plugin_detail`,
                    transport: `plugin_service`,
                    workspaceId: n,
                    signal: o,
                    request: r => D.safeGet(`/plugins/admin/{plugin_id}`, {
                        ...r,
                        authOption: h.Required,
                        additionalHeaders: {
                            [m]: `ADMIN_SETTING`,
                            ...n === void 0 ? {} : t(n)
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
                    return z(r, n, o, i, a), e
                } catch (e) {
                    if (!Q(e)) throw e;
                    let t = await s(!1);
                    return z(r, n, o, i, a), t
                }
            }
        }),
        enabled: e !== `` && w(n) && (r !== `sheep` || !i || a !== void 0 && a === p()?.normalizedAccountUserId),
        staleTime: A
    })
}));
export {
    J as a, G as c, B as d, K as f, X as i, z as l, L as m, $ as n, q as o, R as p, te as r, Y as s, Z as t, V as u
};
//# sourceMappingURL=eec17ee5-ew2u75ezprtt5fk1.js.map