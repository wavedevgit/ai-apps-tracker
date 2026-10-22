import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    A8 as n,
    Aat as r,
    Dat as i,
    SK as a,
    V1 as o,
    X7 as s,
    Yat as c,
    frt as l,
    grt as u,
    hat as d,
    j8 as f,
    jat as p,
    pat as m,
    q1 as h,
    tot as g,
    urt as _,
    xK as v
} from "./4813494d-r54yv6lv29x4ew99.js";
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
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Bv as k,
    Lv as ee,
    Qy as A,
    Xy as j,
    zv as M
} from "./c2675c8c-jg3tpj8mw86wdc0g.js";

function N(e, t, n = !1) {
    let r = n ? [`dependencies`] : [];
    return t === void 0 ? [`plugin-admin-v2`, `detail`, ...r, e] : M(`detail`, t, ...r, e)
}

function P(e, t, n = `legacy`, r = !1, i) {
    let a = N(e, t, r);
    return n === `legacy` ? a : [...a, `detail-sheep`, ...r && i !== void 0 ? [{
        detailActor: i
    }] : []]
}
var F = e((() => {
    k()
}));

function I() {
    return _(`1850546582`, {
        disableExposureLog: !0
    })
}

function L() {
    return _(`1850546582`)
}
var R = e((() => {
    u()
}));

function z() {
    if (typeof window > `u`) return !1;
    let e = new URL(r, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function B() {
    return z() && I() ? `sheep` : `legacy`
}

function V() {
    return B() === `sheep` ? q.sheepDependencies : q.dependencies
}

function H(e, t, n, r, i) {
    if (n?.throwIfAborted(), E(t), e !== B() || r !== void 0 && !r || e === `sheep` && r === !0 && (i === void 0 || i !== o()?.normalizedAccountUserId)) throw new y({
        revert: !0
    })
}
async function U({
    pluginId: e,
    workspaceId: t,
    signal: n,
    includeAdminDetail: a = !1,
    includeDependencies: c = !a,
    workspaceUserId: l = o()?.normalizedAccountUserId
}) {
    return await S({
        operation: `plugin_detail`,
        transport: `sheep`,
        workspaceId: t,
        signal: n,
        request: async o => {
            if (a && c || (H(`sheep`, t, n, a ? void 0 : c, l), e === ``)) throw new y({
                revert: !0
            });
            G ??= new s({
                baseUrl: r.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let u = await G.safeGet(`/plugins/admin/{plugin_id}`, {
                ...o,
                authOption: i.Required,
                preserveAccountIdOnRetry: !0,
                signal: n,
                additionalHeaders: {
                    ...v(t),
                    [m]: `ADMIN_SETTING`,
                    "x-openai-use-sheep": `1`
                },
                parameters: {
                    path: {
                        plugin_id: e
                    },
                    ...c ? {
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
            return H(`sheep`, t, n, a ? void 0 : c, l), u
        }
    })
}

function W(e, t, n) {
    return !n || !T(t) || e !== B() ? !1 : !z() || (L() ? `sheep` : `legacy`) === e
}
var G, K, q, J, Y = e((() => {
    w(), h(), n(), p(), d(), t(), u(), a(), b(), C(), R(), K = e => {
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
    }, J = f(V, K, {
        name: `adminPluginDetailReadSelection`
    })
}));

function X(e, t, n) {
    let {
        transport: r,
        includeDependencies: i
    } = V(), a = o()?.normalizedAccountUserId;
    return W(r, n, t), e.prefetchQuery($(t, n, r, i, a))
}
async function Z(e, t, n) {
    let {
        transport: r,
        includeDependencies: i
    } = V(), a = o()?.normalizedAccountUserId;
    if (H(r, n, void 0, i, a), !W(r, n, t)) throw new y({
        revert: !0
    });
    let s = await e.fetchQuery($(t, n, r, i, a));
    return H(r, n, void 0, i, a), s
}
var Q, $, te = e((() => {
    w(), Y(), F(), a(), h(), D(), p(), g(), d(), b(), j(), C(), k(), Q = e => {
        if (!(e instanceof c)) return !1;
        let t = e.status === 400 ? e.json.validation_errors : e.status === 422 ? e.detail : void 0;
        if (!Array.isArray(t) || t.length !== 1) return !1;
        let n = t[0];
        return typeof n == `object` && !!n && `type` in n && n.type === `enum` && `input` in n && n.input === `dependencies` && `loc` in n && Array.isArray(n.loc) && n.loc.length === 2 && n.loc[0] === `query` && n.loc[1] === `include`
    }, $ = (e, t, n = t ? B() : `legacy`, r = !0, a = o()?.normalizedAccountUserId) => x({
        queryKey: P(e, t, n, r, a),
        queryFn: async ({
            signal: o
        }) => await A({
            operation: `detail`,
            signal: o,
            request: async () => {
                if (E(t), !t) throw new y({
                    revert: !0
                });
                if (H(n, t, o, r, a), n === `sheep`) return await U({
                    pluginId: e,
                    workspaceId: t,
                    signal: o,
                    includeDependencies: r,
                    workspaceUserId: a
                });
                let s = async s => (H(n, t, o, r, a), await S({
                    operation: `plugin_detail`,
                    transport: `plugin_service`,
                    workspaceId: t,
                    signal: o,
                    request: n => O.safeGet(`/plugins/admin/{plugin_id}`, {
                        ...n,
                        authOption: i.Required,
                        additionalHeaders: {
                            [m]: `ADMIN_SETTING`,
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
                    let e = await s(r);
                    return H(n, t, o, r, a), e
                } catch (e) {
                    if (!Q(e)) throw e;
                    let i = await s(!1);
                    return H(n, t, o, r, a), i
                }
            }
        }),
        enabled: e !== `` && T(t) && (n !== `sheep` || !r || a !== void 0 && a === o()?.normalizedAccountUserId),
        staleTime: ee
    })
}));
export {
    J as a, U as c, B as d, P as f, X as i, Y as l, F as m, $ as n, H as o, N as p, te as r, W as s, Z as t, V as u
};
//# sourceMappingURL=eec17ee5-crsr4ohz0cdbgby0.js.map