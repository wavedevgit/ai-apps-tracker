import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aat as t,
    Gnt as n,
    I7 as r,
    Iat as i,
    Jit as a,
    M1 as o,
    R1 as s,
    TK as c,
    Xit as l,
    Znt as u,
    _8 as d,
    cat as f,
    dat as p,
    fat as m,
    g8 as h,
    qnt as g,
    wK as _,
    z7 as v
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    H as y,
    s as b,
    w as x
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Cnt as ee,
    Snt as S,
    _Cn as C,
    bCn as w,
    dwn as T,
    uwn as E,
    vCn as D
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Av as O,
    By as k,
    Dv as A,
    Hy as j,
    kv as M
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";

function N() {
    return n(`1850546582`, {
        disableExposureLog: !0
    })
}

function P() {
    return n(`1850546582`)
}
var F = e((() => {
    u()
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

function z(e, t, n, r, i) {
    if (n?.throwIfAborted(), C(t), e !== L() || r !== void 0 && !r || e === `sheep` && r === !0 && (i === void 0 || i !== o()?.normalizedAccountUserId)) throw new y({
        revert: !0
    })
}
async function B({
    pluginId: e,
    workspaceId: t,
    signal: n,
    includeAdminDetail: i = !1,
    includeDependencies: s = !i,
    workspaceUserId: c = o()?.normalizedAccountUserId
}) {
    return await T({
        operation: `plugin_detail`,
        transport: `sheep`,
        workspaceId: t,
        signal: n,
        request: async o => {
            if (i && s || (z(`sheep`, t, n, i ? void 0 : s, c), e === ``)) throw new y({
                revert: !0
            });
            H ??= new r({
                baseUrl: p.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let l = await H.safeGet(`/plugins/admin/{plugin_id}`, {
                ...o,
                authOption: f.Required,
                preserveAccountIdOnRetry: !0,
                signal: n,
                additionalHeaders: {
                    ..._(t),
                    [a]: `ADMIN_SETTING`,
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
                    } : i ? {
                        query: {
                            include: `admin_detail`
                        }
                    } : {}
                }
            });
            return z(`sheep`, t, n, i ? void 0 : s, c), l
        }
    })
}

function V(e, t, n) {
    return !n || !D(t) || e !== L() ? !1 : !I() || (P() ? `sheep` : `legacy`) === e
}
var H, U, W, G, K = e((() => {
    E(), s(), h(), m(), l(), v(), u(), c(), b(), w(), F(), U = e => {
        let t = g();
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
    } = R(), a = o()?.normalizedAccountUserId;
    return V(r, n, t), e.prefetchQuery($(t, n, r, i, a))
}
async function Z(e, t, n) {
    let {
        transport: r,
        includeDependencies: i
    } = R(), a = o()?.normalizedAccountUserId;
    if (z(r, n, void 0, i, a), !V(r, n, t)) throw new y({
        revert: !0
    });
    let s = await e.fetchQuery($(t, n, r, i, a));
    return z(r, n, void 0, i, a), s
}
var Q, $, te = e((() => {
    E(), K(), Y(), c(), s(), ee(), m(), i(), l(), b(), k(), w(), O(), Q = e => {
        if (!(e instanceof t)) return !1;
        let n = e.status === 400 ? e.json.validation_errors : e.status === 422 ? e.detail : void 0;
        if (!Array.isArray(n) || n.length !== 1) return !1;
        let r = n[0];
        return typeof r == `object` && !!r && `type` in r && r.type === `enum` && `input` in r && r.input === `dependencies` && `loc` in r && Array.isArray(r.loc) && r.loc.length === 2 && r.loc[0] === `query` && r.loc[1] === `include`
    }, $ = (e, t, n = t ? L() : `legacy`, r = !0, i = o()?.normalizedAccountUserId) => x({
        queryKey: J(e, t, n, r, i),
        queryFn: async ({
            signal: o
        }) => await j({
            operation: `detail`,
            signal: o,
            request: async () => {
                if (C(t), !t) throw new y({
                    revert: !0
                });
                if (z(n, t, o, r, i), n === `sheep`) return await B({
                    pluginId: e,
                    workspaceId: t,
                    signal: o,
                    includeDependencies: r,
                    workspaceUserId: i
                });
                let s = async s => (z(n, t, o, r, i), await T({
                    operation: `plugin_detail`,
                    transport: `plugin_service`,
                    workspaceId: t,
                    signal: o,
                    request: n => S.safeGet(`/plugins/admin/{plugin_id}`, {
                        ...n,
                        authOption: f.Required,
                        additionalHeaders: {
                            [a]: `ADMIN_SETTING`,
                            ...t === void 0 ? {} : _(t)
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
                    let e = await s(r);
                    return z(n, t, o, r, i), e
                } catch (e) {
                    if (!Q(e)) throw e;
                    let a = await s(!1);
                    return z(n, t, o, r, i), a
                }
            }
        }),
        enabled: e !== `` && D(t) && (n !== `sheep` || !r || i !== void 0 && i === o()?.normalizedAccountUserId),
        staleTime: A
    })
}));
export {
    J as a, G as c, B as d, K as f, X as i, z as l, L as m, $ as n, q as o, R as p, te as r, Y as s, Z as t, V as u
};
//# sourceMappingURL=eec17ee5-jld5k0qc8d0daoh5.js.map