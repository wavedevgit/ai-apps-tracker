import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    Bnt as n,
    CK as r,
    F7 as i,
    Git as a,
    Hnt as o,
    I1 as s,
    Knt as c,
    M7 as ee,
    Tat as l,
    Uit as u,
    f8 as d,
    jat as f,
    oat as p,
    p8 as m,
    rat as h,
    sat as g,
    wK as _
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    H as v,
    s as y,
    w as b
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    _nt as x,
    dwn as S,
    fCn as C,
    hCn as w,
    lwn as T,
    pCn as E,
    vnt as D
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Qv as O,
    bb as k,
    ey as A,
    hb as j,
    ty as M
} from "./c2675c8c-fpv9s4kvd412dyap.js";

function N() {
    return n(`1850546582`, {
        disableExposureLog: !0
    })
}

function P() {
    return n(`1850546582`)
}
var F = e((() => {
    c()
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
    if (r?.throwIfAborted(), C(n), e !== L() || i !== void 0 && !i || e === `sheep` && i === !0 && (a === void 0 || a !== t()?.normalizedAccountUserId)) throw new v({
        revert: !0
    })
}
async function B({
    pluginId: e,
    workspaceId: n,
    signal: i,
    includeAdminDetail: a = !1,
    includeDependencies: o = !a,
    workspaceUserId: s = t()?.normalizedAccountUserId
}) {
    return await S({
        operation: `plugin_detail`,
        transport: `sheep`,
        workspaceId: n,
        signal: i,
        request: async t => {
            if (a && o || (z(`sheep`, n, i, a ? void 0 : o, s), e === ``)) throw new v({
                revert: !0
            });
            H ??= new ee({
                baseUrl: p.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let c = await H.safeGet(`/plugins/admin/{plugin_id}`, {
                ...t,
                authOption: h.Required,
                preserveAccountIdOnRetry: !0,
                signal: i,
                additionalHeaders: {
                    ...r(n),
                    [u]: `ADMIN_SETTING`,
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
            return z(`sheep`, n, i, a ? void 0 : o, s), c
        }
    })
}

function V(e, t, n) {
    return !n || !E(t) || e !== L() ? !1 : !I() || (P() ? `sheep` : `legacy`) === e
}
var H, U, W, G, K = e((() => {
    T(), s(), d(), g(), a(), i(), c(), _(), y(), w(), F(), U = e => {
        let t = o();
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
    T(), K(), Y(), _(), s(), D(), g(), f(), a(), y(), j(), w(), M(), Q = e => {
        if (!(e instanceof l)) return !1;
        let t = e.status === 400 ? e.json.validation_errors : e.status === 422 ? e.detail : void 0;
        if (!Array.isArray(t) || t.length !== 1) return !1;
        let n = t[0];
        return typeof n == `object` && !!n && `type` in n && n.type === `enum` && `input` in n && n.input === `dependencies` && `loc` in n && Array.isArray(n.loc) && n.loc.length === 2 && n.loc[0] === `query` && n.loc[1] === `include`
    }, $ = (e, n, i = n ? L() : `legacy`, a = !0, o = t()?.normalizedAccountUserId) => b({
        queryKey: J(e, n, i, a, o),
        queryFn: async ({
            signal: t
        }) => await k({
            operation: `detail`,
            signal: t,
            request: async () => {
                if (C(n), !n) throw new v({
                    revert: !0
                });
                if (z(i, n, t, a, o), i === `sheep`) return await B({
                    pluginId: e,
                    workspaceId: n,
                    signal: t,
                    includeDependencies: a,
                    workspaceUserId: o
                });
                let s = async s => (z(i, n, t, a, o), await S({
                    operation: `plugin_detail`,
                    transport: `plugin_service`,
                    workspaceId: n,
                    signal: t,
                    request: i => x.safeGet(`/plugins/admin/{plugin_id}`, {
                        ...i,
                        authOption: h.Required,
                        additionalHeaders: {
                            [u]: `ADMIN_SETTING`,
                            ...n === void 0 ? {} : r(n)
                        },
                        signal: t,
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
                    let e = await s(a);
                    return z(i, n, t, a, o), e
                } catch (e) {
                    if (!Q(e)) throw e;
                    let r = await s(!1);
                    return z(i, n, t, a, o), r
                }
            }
        }),
        enabled: e !== `` && E(n) && (i !== `sheep` || !a || o !== void 0 && o === t()?.normalizedAccountUserId),
        staleTime: O
    })
}));
export {
    J as a, G as c, B as d, K as f, X as i, z as l, L as m, $ as n, q as o, R as p, te as r, Y as s, Z as t, V as u
};
//# sourceMappingURL=eec17ee5-fdfjyfmbzzdpknv9.js.map