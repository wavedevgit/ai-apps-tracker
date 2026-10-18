import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ait as t,
    B6 as n,
    Nit as r,
    Pit as i,
    QG as a,
    Qit as o,
    V6 as s,
    ZG as c,
    git as l,
    hnt as u,
    i1 as d,
    iat as f,
    l7 as p,
    o7 as m,
    pnt as h,
    u1 as g,
    vit as _,
    ynt as v
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    H as y,
    s as b,
    w as x
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $Sn as S,
    QCn as C,
    XCn as w,
    eCn as T,
    gnt as E,
    hnt as D,
    nCn as O
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Eb as ee,
    Qv as k,
    ey as A,
    jb as j,
    ty as M
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";

function N() {
    return h(`1850546582`, {
        disableExposureLog: !0
    })
}

function P() {
    return h(`1850546582`)
}
var F = e((() => {
    v()
}));

function I() {
    if (typeof window > `u`) return !1;
    let e = new URL(r, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function L() {
    return I() && N() ? `sheep` : `legacy`
}

function R() {
    return L() === `sheep` ? W.sheepDependencies : W.dependencies
}

function z(e, t, n, r, i) {
    if (n?.throwIfAborted(), S(t), e !== L() || r !== void 0 && !r || e === `sheep` && r === !0 && (i === void 0 || i !== d()?.normalizedAccountUserId)) throw new y({
        revert: !0
    })
}
async function B({
    pluginId: e,
    workspaceId: n,
    signal: i,
    includeAdminDetail: a = !1,
    includeDependencies: o = !a,
    workspaceUserId: s = d()?.normalizedAccountUserId
}) {
    return await C({
        operation: `plugin_detail`,
        transport: `sheep`,
        workspaceId: n,
        signal: i,
        request: async u => {
            if (a && o || (z(`sheep`, n, i, a ? void 0 : o, s), e === ``)) throw new y({
                revert: !0
            });
            H ??= new m({
                baseUrl: r.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let d = await H.safeGet(`/plugins/admin/{plugin_id}`, {
                ...u,
                authOption: t.Required,
                preserveAccountIdOnRetry: !0,
                signal: i,
                additionalHeaders: {
                    ...c(n),
                    [l]: `ADMIN_SETTING`,
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
            return z(`sheep`, n, i, a ? void 0 : o, s), d
        }
    })
}

function V(e, t, n) {
    return !n || !T(t) || e !== L() ? !1 : !I() || (P() ? `sheep` : `legacy`) === e
}
var H, U, W, G, K = e((() => {
    w(), g(), n(), i(), _(), p(), v(), a(), b(), O(), F(), U = e => {
        let t = u();
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
    }, G = s(R, U, {
        name: `adminPluginDetailReadSelection`
    })
}));

function q(e, t, n = !1) {
    let r = n ? [`dependencies`] : [];
    return t === void 0 ? [`plugin-admin-v2`, `detail`, ...r, e] : A(`detail`, t, ...r, e)
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

function X(e, t, n) {
    let {
        transport: r,
        includeDependencies: i
    } = R(), a = d()?.normalizedAccountUserId;
    return V(r, n, t), e.prefetchQuery($(t, n, r, i, a))
}
async function Z(e, t, n) {
    let {
        transport: r,
        includeDependencies: i
    } = R(), a = d()?.normalizedAccountUserId;
    if (z(r, n, void 0, i, a), !V(r, n, t)) throw new y({
        revert: !0
    });
    let o = await e.fetchQuery($(t, n, r, i, a));
    return z(r, n, void 0, i, a), o
}
var Q, $, te = e((() => {
    w(), K(), Y(), a(), g(), E(), i(), f(), _(), b(), ee(), O(), M(), Q = e => {
        if (!(e instanceof o)) return !1;
        let t = e.status === 400 ? e.json.validation_errors : e.status === 422 ? e.detail : void 0;
        if (!Array.isArray(t) || t.length !== 1) return !1;
        let n = t[0];
        return typeof n == `object` && !!n && `type` in n && n.type === `enum` && `input` in n && n.input === `dependencies` && `loc` in n && Array.isArray(n.loc) && n.loc.length === 2 && n.loc[0] === `query` && n.loc[1] === `include`
    }, $ = (e, n, r = n ? L() : `legacy`, i = !0, a = d()?.normalizedAccountUserId) => x({
        queryKey: J(e, n, r, i, a),
        queryFn: async ({
            signal: o
        }) => await j({
            operation: `detail`,
            signal: o,
            request: async () => {
                if (S(n), !n) throw new y({
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
                        authOption: t.Required,
                        additionalHeaders: {
                            [l]: `ADMIN_SETTING`,
                            ...n === void 0 ? {} : c(n)
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
        enabled: e !== `` && T(n) && (r !== `sheep` || !i || a !== void 0 && a === d()?.normalizedAccountUserId),
        staleTime: k
    })
}));
export {
    J as a, G as c, B as d, K as f, X as i, z as l, L as m, $ as n, q as o, R as p, te as r, Y as s, Z as t, V as u
};
//# sourceMappingURL=eec17ee5-lm6v8wlbrzui7fe1.js.map