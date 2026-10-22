import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bat as t,
    I7 as n,
    M1 as r,
    Pat as i,
    Qit as a,
    R1 as o,
    TK as s,
    Ynt as c,
    Znt as l,
    _8 as u,
    eat as d,
    fat as f,
    g8 as p,
    gat as m,
    hat as h,
    trt as g,
    wK as _,
    z7 as v
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    H as y,
    s as b,
    w as x
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Cnt as S,
    Snt as ee,
    _Cn as C,
    bCn as w,
    dwn as T,
    uwn as E,
    vCn as D
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    Av as O,
    By as k,
    Dv as A,
    Hy as j,
    kv as M
} from "./c2675c8c-ossqum2x3eut0sh8.js";

function N() {
    return c(`1850546582`, {
        disableExposureLog: !0
    })
}

function P() {
    return c(`1850546582`)
}
var F = e((() => {
    g()
}));

function I() {
    if (typeof window > `u`) return !1;
    let e = new URL(h, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function L() {
    return I() && N() ? `sheep` : `legacy`
}

function R() {
    return L() === `sheep` ? W.sheepDependencies : W.dependencies
}

function z(e, t, n, i, a) {
    if (n?.throwIfAborted(), C(t), e !== L() || i !== void 0 && !i || e === `sheep` && i === !0 && (a === void 0 || a !== r()?.normalizedAccountUserId)) throw new y({
        revert: !0
    })
}
async function B({
    pluginId: e,
    workspaceId: t,
    signal: i,
    includeAdminDetail: o = !1,
    includeDependencies: s = !o,
    workspaceUserId: c = r()?.normalizedAccountUserId
}) {
    return await T({
        operation: `plugin_detail`,
        transport: `sheep`,
        workspaceId: t,
        signal: i,
        request: async r => {
            if (o && s || (z(`sheep`, t, i, o ? void 0 : s, c), e === ``)) throw new y({
                revert: !0
            });
            H ??= new n({
                baseUrl: h.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let l = await H.safeGet(`/plugins/admin/{plugin_id}`, {
                ...r,
                authOption: f.Required,
                preserveAccountIdOnRetry: !0,
                signal: i,
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
                    } : o ? {
                        query: {
                            include: `admin_detail`
                        }
                    } : {}
                }
            });
            return z(`sheep`, t, i, o ? void 0 : s, c), l
        }
    })
}

function V(e, t, n) {
    return !n || !D(t) || e !== L() ? !1 : !I() || (P() ? `sheep` : `legacy`) === e
}
var H, U, W, G, K = e((() => {
    E(), o(), p(), m(), d(), v(), g(), s(), b(), w(), F(), U = e => {
        let t = l();
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
    }, G = u(R, U, {
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
        transport: i,
        includeDependencies: a
    } = R(), o = r()?.normalizedAccountUserId;
    return V(i, n, t), e.prefetchQuery($(t, n, i, a, o))
}
async function Z(e, t, n) {
    let {
        transport: i,
        includeDependencies: a
    } = R(), o = r()?.normalizedAccountUserId;
    if (z(i, n, void 0, a, o), !V(i, n, t)) throw new y({
        revert: !0
    });
    let s = await e.fetchQuery($(t, n, i, a, o));
    return z(i, n, void 0, a, o), s
}
var Q, $, te = e((() => {
    E(), K(), Y(), s(), o(), S(), m(), t(), d(), b(), k(), w(), O(), Q = e => {
        if (!(e instanceof i)) return !1;
        let t = e.status === 400 ? e.json.validation_errors : e.status === 422 ? e.detail : void 0;
        if (!Array.isArray(t) || t.length !== 1) return !1;
        let n = t[0];
        return typeof n == `object` && !!n && `type` in n && n.type === `enum` && `input` in n && n.input === `dependencies` && `loc` in n && Array.isArray(n.loc) && n.loc.length === 2 && n.loc[0] === `query` && n.loc[1] === `include`
    }, $ = (e, t, n = t ? L() : `legacy`, i = !0, o = r()?.normalizedAccountUserId) => x({
        queryKey: J(e, t, n, i, o),
        queryFn: async ({
            signal: r
        }) => await j({
            operation: `detail`,
            signal: r,
            request: async () => {
                if (C(t), !t) throw new y({
                    revert: !0
                });
                if (z(n, t, r, i, o), n === `sheep`) return await B({
                    pluginId: e,
                    workspaceId: t,
                    signal: r,
                    includeDependencies: i,
                    workspaceUserId: o
                });
                let s = async s => (z(n, t, r, i, o), await T({
                    operation: `plugin_detail`,
                    transport: `plugin_service`,
                    workspaceId: t,
                    signal: r,
                    request: n => ee.safeGet(`/plugins/admin/{plugin_id}`, {
                        ...n,
                        authOption: f.Required,
                        additionalHeaders: {
                            [a]: `ADMIN_SETTING`,
                            ...t === void 0 ? {} : _(t)
                        },
                        signal: r,
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
                    return z(n, t, r, i, o), e
                } catch (e) {
                    if (!Q(e)) throw e;
                    let a = await s(!1);
                    return z(n, t, r, i, o), a
                }
            }
        }),
        enabled: e !== `` && D(t) && (n !== `sheep` || !i || o !== void 0 && o === r()?.normalizedAccountUserId),
        staleTime: A
    })
}));
export {
    J as a, G as c, B as d, K as f, X as i, z as l, L as m, $ as n, q as o, R as p, te as r, Y as s, Z as t, V as u
};
//# sourceMappingURL=eec17ee5-jbcslct7u4xhdlsu.js.map