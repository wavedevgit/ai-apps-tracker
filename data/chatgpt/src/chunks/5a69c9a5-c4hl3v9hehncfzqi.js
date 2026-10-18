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
    _E as l,
    git as u,
    gv as d,
    hE as ee,
    hnt as f,
    i1 as p,
    iat as m,
    l7 as h,
    o7 as g,
    pnt as _,
    u1 as v,
    vit as y,
    ynt as b,
    yv as x
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    H as S,
    s as C,
    w
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $Sn as te,
    Gwn as T,
    QCn as E,
    Wwn as D,
    XCn as ne,
    eCn as O,
    hwn as k,
    nCn as A,
    ywn as j
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Eb as M,
    Qv as N,
    ey as P,
    jb as F,
    ty as I
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";

function re() {
    return _(`241231532`, {
        disableExposureLog: !0
    })
}

function L() {
    return _(`241231532`)
}
var R = e((() => {
    b()
}));

function z() {
    if (typeof window > `u`) return !1;
    let e = new URL(r, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function B() {
    return z() && re() ? `sheep` : `legacy`
}

function V(e, t, n, r) {
    if (n?.throwIfAborted(), e !== void 0 && (te(t), e !== B() || r !== void 0 && p()?.normalizedAccountUserId !== r)) throw new S({
        revert: !0
    })
}

function H(e, t, n) {
    return !n || !O(t) || e !== B() ? !1 : !z() || (L() ? `sheep` : `legacy`) === e
}
async function U({
    appIds: e,
    workspaceId: n,
    transport: i,
    signal: a,
    workspaceUserId: o
}) {
    let s = o ?? (i === void 0 ? void 0 : p()?.normalizedAccountUserId);
    if (V(i, n, a, s), e.length === 0) return new Map;
    let l;
    if (i !== `sheep`) l = await E({
        operation: `workspace_content`,
        transport: `sa_server`,
        workspaceId: n,
        signal: a,
        request: t => k(e, {
            workspace: !0,
            accountId: n,
            productSku: D.ADMIN_SETTING
        }, t)
    });
    else {
        if (s === void 0) throw new S({
            revert: !0
        });
        W ??= new g({
            baseUrl: r.replace(/\/$/, ``),
            targetRoutesAreCanonical: !0
        });
        let i = W;
        l = await E({
            operation: `workspace_content`,
            transport: `sheep`,
            workspaceId: n,
            signal: a,
            request: async r => {
                let o = await i.safePost(`/apps/workspace/content`, {
                    ...r,
                    authOption: t.Required,
                    preserveAccountIdOnRetry: !0,
                    ...a === void 0 ? {} : {
                        signal: a
                    },
                    additionalHeaders: {
                        ...c(n),
                        [u]: D.ADMIN_SETTING,
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
    return V(i, n, a, s), l
}
var W, G, K = e((() => {
    ne(), j(), T(), n(), v(), i(), y(), h(), b(), a(), C(), A(), R(), G = s(B, e => {
        let t = f();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }, {
        name: `adminPluginWorkspaceContentReadTransport`
    })
}));

function q(e) {
    if (e == null || e.workspaceUserId == null) return !1;
    let t = p();
    return O(e.workspaceId) && t?.getWorkspaceId() === e.workspaceId && t.normalizedAccountUserId === e.workspaceUserId && B() === e.transport
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
                queryKey: P(n, t.workspaceId),
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
        queryKey: P(`apps-details`, t.workspaceId),
        predicate: e => Y(e.queryKey, t)
    }, e => {
        if (e == null || !e.has(n)) return e;
        let t = new Map(e);
        return i == null ? t.delete(n) : t.set(n, i), t
    })
}
var X = e((() => {
        v(), A(), K(), I()
    })),
    Z, Q, $, oe = e((() => {
        d(), l(), T(), n(), v(), i(), m(), b(), C(), M(), I(), X(), K(), Z = () => _(`585473327`), Q = s(Z, e => {
            let t = f();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `nativeAdminPluginAppRecoveryEnabled`
        }), $ = ({
            appIds: e,
            workspaceId: n,
            transport: r,
            nativeAppDetailsRecoveryEnabled: i = !1,
            workspaceUserId: a = r === void 0 ? void 0 : p()?.normalizedAccountUserId
        }) => {
            let s = [...new Set(e)].sort(),
                c = i,
                l = e => {
                    if (r === `sheep` && a === void 0) throw new S({
                        revert: !0
                    });
                    return U({
                        appIds: s,
                        workspaceId: n,
                        workspaceUserId: a,
                        transport: r,
                        signal: e
                    })
                },
                u = async (e, i) => {
                    let a = await l(r === `sheep` ? i : void 0);
                    i.throwIfAborted();
                    let c = s.filter(e => !a.has(e) && x(e));
                    if (c.length === 0) return a;
                    let u;
                    try {
                        u = await ee(e, c, {
                            workspaceId: n,
                            productSku: D.ADMIN_SETTING,
                            authOption: t.Required,
                            signal: i,
                            staleTime: 0
                        })
                    } catch (e) {
                        if (i.throwIfAborted(), e instanceof o) return a;
                        throw e
                    }
                    i.throwIfAborted();
                    let d = [...u].flatMap(([e, t]) => t.id === e && c.includes(e) ? [
                        [e, {
                            ...t,
                            logo_url_dark: t.logo_url_dark ?? null
                        }]
                    ] : []);
                    return d.length === 0 ? a : new Map([...a, ...d])
                };
            return w({
                queryKey: P(`apps-details`, n, {
                    appIds: Object.fromEntries(s.map(e => [e, !0])),
                    ...c ? {
                        nativeAppDetailsRecovery: !0
                    } : {}
                }, ...J(r, a)),
                queryFn: c ? ({
                    client: e,
                    signal: t
                }) => F({
                    operation: `app_details`,
                    signal: t,
                    request: () => u(e, t)
                }) : r === `sheep` ? ({
                    signal: e
                }) => F({
                    operation: `app_details`,
                    request: () => l(e)
                }) : () => F({
                    operation: `app_details`,
                    request: () => l()
                }),
                enabled: n !== `` && s.length > 0,
                ...c ? {
                    refetchOnMount: !0
                } : {},
                staleTime: N
            })
        }
    }));
export {
    X as a, ie as c, H as d, U as f, J as i, G as l, B as m, oe as n, q as o, K as p, Q as r, ae as s, $ as t, V as u
};
//# sourceMappingURL=5a69c9a5-c4hl3v9hehncfzqi.js.map