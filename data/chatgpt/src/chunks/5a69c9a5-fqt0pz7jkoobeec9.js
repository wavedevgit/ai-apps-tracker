import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    Bnt as n,
    CK as r,
    F7 as i,
    FE as a,
    Git as o,
    Hnt as s,
    I1 as c,
    Knt as l,
    Lv as u,
    M7 as ee,
    NE as te,
    Pv as ne,
    Tat as d,
    Uit as f,
    f8 as p,
    jat as m,
    oat as h,
    p8 as g,
    rat as _,
    sat as v,
    wK as y
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    H as b,
    s as x,
    w as S
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Mwn as C,
    Own as w,
    dwn as T,
    fCn as E,
    hCn as D,
    iTn as O,
    lwn as k,
    pCn as A,
    rTn as j
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Qv as re,
    bb as M,
    ey as N,
    hb as P,
    ty as F
} from "./c2675c8c-fpv9s4kvd412dyap.js";

function I() {
    return n(`241231532`, {
        disableExposureLog: !0
    })
}

function L() {
    return n(`241231532`)
}
var R = e((() => {
    l()
}));

function z() {
    if (typeof window > `u`) return !1;
    let e = new URL(h, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function B() {
    return z() && I() ? `sheep` : `legacy`
}

function V(e, n, r, i) {
    if (r?.throwIfAborted(), e !== void 0 && (E(n), e !== B() || i !== void 0 && t()?.normalizedAccountUserId !== i)) throw new b({
        revert: !0
    })
}

function H(e, t, n) {
    return !n || !A(t) || e !== B() ? !1 : !z() || (L() ? `sheep` : `legacy`) === e
}
async function U({
    appIds: e,
    workspaceId: n,
    transport: i,
    signal: a,
    workspaceUserId: o
}) {
    let s = o ?? (i === void 0 ? void 0 : t()?.normalizedAccountUserId);
    if (V(i, n, a, s), e.length === 0) return new Map;
    let c;
    if (i !== `sheep`) c = await T({
        operation: `workspace_content`,
        transport: `sa_server`,
        workspaceId: n,
        signal: a,
        request: t => w(e, {
            workspace: !0,
            accountId: n,
            productSku: j.ADMIN_SETTING
        }, t)
    });
    else {
        if (s === void 0) throw new b({
            revert: !0
        });
        W ??= new ee({
            baseUrl: h.replace(/\/$/, ``),
            targetRoutesAreCanonical: !0
        });
        let t = W;
        c = await T({
            operation: `workspace_content`,
            transport: `sheep`,
            workspaceId: n,
            signal: a,
            request: async i => {
                let o = await t.safePost(`/apps/workspace/content`, {
                    ...i,
                    authOption: _.Required,
                    preserveAccountIdOnRetry: !0,
                    ...a === void 0 ? {} : {
                        signal: a
                    },
                    additionalHeaders: {
                        ...r(n),
                        [f]: j.ADMIN_SETTING,
                        "x-openai-use-sheep": `1`
                    },
                    parameters: {
                        query: {
                            detail: `full`
                        }
                    },
                    requestBody: {
                        app_ids: [...e]
                    }
                });
                return new Map(o.apps.map(e => [e.id, e]))
            }
        })
    }
    return V(i, n, a, s), c
}
var W, G, K = e((() => {
    k(), C(), O(), p(), c(), v(), o(), i(), l(), y(), x(), D(), R(), G = g(B, e => {
        let t = s();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }, {
        name: `adminPluginWorkspaceContentReadTransport`
    })
}));

function q(e) {
    if (e == null || e.workspaceUserId == null) return !1;
    let n = t();
    return A(e.workspaceId) && n?.getWorkspaceId() === e.workspaceId && n.normalizedAccountUserId === e.workspaceUserId && B() === e.transport
}

function J(e, t) {
    return e === void 0 ? [] : [{
        contentTransport: e,
        workspaceUserId: t
    }]
}

function Y(e, t) {
    let n = e.at(-1);
    return typeof n == `object` && !!n && `contentTransport` in n && n.contentTransport === t.transport && `workspaceUserId` in n && n.workspaceUserId === t.workspaceUserId
}

function ie({
    queryClient: e,
    previous: t,
    next: n
}) {
    if (!(t.workspaceId === n.workspaceId && t.transport === n.transport && t.workspaceUserId === n.workspaceUserId))
        for (let n of [`apps-details`, `impact`]) {
            let r = {
                queryKey: N(n, t.workspaceId),
                predicate: e => Y(e.queryKey, t)
            };
            e.cancelQueries(r), e.invalidateQueries({
                ...r,
                refetchType: `none`
            })
        }
}

function ae({
    queryClient: e,
    selection: t,
    appId: n,
    freshApps: r
}) {
    let i = r.get(n);
    i != null && i.id !== n || e.setQueriesData({
        queryKey: N(`apps-details`, t.workspaceId),
        predicate: e => Y(e.queryKey, t)
    }, e => {
        if (e == null || !e.has(n)) return e;
        let t = new Map(e);
        return i == null ? t.delete(n) : t.set(n, i), t
    })
}
var X = e((() => {
        c(), D(), K(), F()
    })),
    Z, Q, $, oe = e((() => {
        ne(), a(), O(), p(), c(), v(), m(), l(), x(), P(), F(), X(), K(), Z = () => n(`585473327`), Q = g(Z, e => {
            let t = s();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `nativeAdminPluginAppRecoveryEnabled`
        }), $ = ({
            appIds: e,
            workspaceId: n,
            transport: r,
            nativeAppDetailsRecoveryEnabled: i = !1,
            workspaceUserId: a = r === void 0 ? void 0 : t()?.normalizedAccountUserId
        }) => {
            let o = [...new Set(e)].sort(),
                s = i,
                c = e => {
                    if (r === `sheep` && a === void 0) throw new b({
                        revert: !0
                    });
                    return U({
                        appIds: o,
                        workspaceId: n,
                        workspaceUserId: a,
                        transport: r,
                        signal: e
                    })
                },
                l = async (e, t) => {
                    let i = await c(r === `sheep` ? t : void 0);
                    t.throwIfAborted();
                    let a = o.filter(e => !i.has(e) && u(e));
                    if (a.length === 0) return i;
                    let s;
                    try {
                        s = await te(e, a, {
                            workspaceId: n,
                            productSku: j.ADMIN_SETTING,
                            authOption: _.Required,
                            signal: t,
                            staleTime: 0
                        })
                    } catch (e) {
                        if (t.throwIfAborted(), e instanceof d) return i;
                        throw e
                    }
                    t.throwIfAborted();
                    let l = [...s].flatMap(([e, t]) => t.id === e && a.includes(e) ? [
                        [e, {
                            ...t,
                            logo_url_dark: t.logo_url_dark ?? null
                        }]
                    ] : []);
                    return l.length === 0 ? i : new Map([...i, ...l])
                };
            return S({
                queryKey: N(`apps-details`, n, {
                    appIds: Object.fromEntries(o.map(e => [e, !0])),
                    ...s ? {
                        nativeAppDetailsRecovery: !0
                    } : {}
                }, ...J(r, a)),
                queryFn: s ? ({
                    client: e,
                    signal: t
                }) => M({
                    operation: `app_details`,
                    signal: t,
                    request: () => l(e, t)
                }) : r === `sheep` ? ({
                    signal: e
                }) => M({
                    operation: `app_details`,
                    request: () => c(e)
                }) : () => M({
                    operation: `app_details`,
                    request: () => c()
                }),
                enabled: n !== `` && o.length > 0,
                ...s ? {
                    refetchOnMount: !0
                } : {},
                staleTime: re
            })
        }
    }));
export {
    X as a, ie as c, H as d, U as f, J as i, G as l, B as m, oe as n, q as o, K as p, Q as r, ae as s, $ as t, V as u
};
//# sourceMappingURL=5a69c9a5-fqt0pz7jkoobeec9.js.map