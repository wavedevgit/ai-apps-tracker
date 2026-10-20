import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    I1 as n
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    H as r,
    s as i,
    w as a
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    fCn as o,
    hCn as s,
    iTn as c,
    pCn as l,
    rTn as u
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Qv as d,
    ey as f,
    ty as p
} from "./c2675c8c-fpv9s4kvd412dyap.js";
import {
    by as m,
    ey as h
} from "./8b34dbc2-j8rcexxiltkm8ucr.js";
import {
    a as g,
    c as _,
    d as v,
    i as y,
    l as b,
    u as x
} from "./5c40ce75-d61jy5lroem1ouzv.js";

function S(e, n, i) {
    if (i?.throwIfAborted(), o(e), n === void 0 || t()?.normalizedAccountUserId !== n) throw new r({
        revert: !0
    })
}

function C(e) {
    return e.workspaceUserId !== void 0 && l(e.workspaceId) && t()?.normalizedAccountUserId === e.workspaceUserId && v() === e.referenceTransport
}

function w(e) {
    return e === void 0 || C(e)
}

function T(e, t) {
    S(e.workspaceId, e.workspaceUserId, t), _(e.referenceTransport, e.workspaceId, t, e.workspaceUserId)
}

function E(e, n, r) {
    return !r || !n || e.workspaceUserId === void 0 || t()?.normalizedAccountUserId !== e.workspaceUserId ? !1 : b(e.referenceTransport, e.workspaceId, !0)
}

function D(e, t) {
    if (T(e), t.usedFallback && !E(e, !0, !0)) throw new r({
        revert: !0
    });
    return t.pluginId
}

function O({
    queryClient: e,
    previous: t,
    next: n
}) {
    let r = t.workspaceId !== n.workspaceId || t.workspaceUserId !== n.workspaceUserId;
    if (!r && t.referenceTransport === n.referenceTransport) return;
    let i = e => e.some(n => typeof n != `object` || !n ? !1 : `canonicalReferenceTransport` in n ? n.canonicalReferenceTransport === t.referenceTransport && `workspaceUserId` in n && n.workspaceUserId === t.workspaceUserId : `canonicalReferenceActor` in n ? n.canonicalReferenceActor === t.workspaceUserId && (e.at(-1) === `app-reference-sheep` ? `sheep` : `legacy`) === t.referenceTransport : r && `canonicalActor` in n && n.canonicalActor === t.workspaceUserId);
    for (let n of [`canonical-app`, `app-references`]) {
        let r = {
            queryKey: f(n, t.workspaceId),
            predicate: e => i(e.queryKey)
        };
        e.cancelQueries(r), e.invalidateQueries({
            ...r,
            refetchType: `none`
        })
    }
}

function k(e, t) {
    let n = e.getQueryCache().find({
        queryKey: t,
        exact: !0
    });
    n != null && N.delete(n)
}

function A(e, t) {
    let n = e.getQueryCache().find({
        queryKey: t,
        exact: !0
    });
    if (n != null) {
        N.add(n);
        for (let t of P.get(e) ?? []) t()
    }
}

function j(e, t) {
    let n = e.getQueryCache().find({
        queryKey: t,
        exact: !0
    });
    return n != null && N.has(n)
}

function M({
    queryClient: e,
    queryKey: t,
    selection: n,
    consumeCachedResult: r = !0
}) {
    let i = !1,
        a = a => {
            if (i) return;
            let o = e.getQueryCache().find({
                    queryKey: t,
                    exact: !0
                }),
                s = o?.state.data;
            i = E(n, o != null && N.has(o) && (r || o.state.fetchStatus === `fetching`) || a?.usedFallback === !0 || r && typeof s == `object` && !!s && `usedFallback` in s && s.usedFallback === !0, !0)
        },
        o = () => a(),
        s = P.get(e);
    s ?? (s = new Set, P.set(e, s)), s.add(o);
    let c = e.getQueryCache().subscribe(o);
    return a(), {
        consumeResult: e => a(e),
        unsubscribe: () => {
            s.delete(o), c()
        }
    }
}
var N, P, F = e((() => {
    n(), i(), s(), x(), p(), N = new WeakSet, P = new WeakMap
}));

function I(e, t, n = !0) {
    let r = t.filter(t => t.canonical_app_id === e);
    if (r.length === 1) return r[0].id;
    if (r.length > 1 || !n) return null;
    let i = t.filter(t => {
        let n = Object.values(t.app_manifest?.apps ?? {});
        return n.length === 1 && n[0]?.id === e
    });
    return i.length === 1 ? i[0]?.id ?? null : null
}

function L({
    appId: e,
    canonicalPluginId: t,
    references: n
}) {
    let r = n.isComplete ? I(e, n.plugins, e.toLowerCase().startsWith(`templated_apps_`)) : null,
        i = t ?? r;
    return i == null ? n.isComplete && n.totalCount === 1 && n.plugins.length === 1 ? {
        kind: `detail`,
        pluginId: n.plugins[0].id
    } : {
        kind: `list`
    } : {
        kind: `detail`,
        pluginId: i
    }
}
var R, z = e((() => {
    c(), m(), i(), y(), F(), p(), R = ({
        appId: e,
        materializedAppIds: t,
        workspaceId: n,
        workspaceUserId: r
    }) => {
        let i = t != null,
            o = [...new Set(t ?? [])].filter(e => e.trim() !== ``).sort()[0];
        return a({
            queryKey: f(`canonical-app`, n, e, ...o == null ? i ? [`unconfigured-template`] : [] : [o], ...r === void 0 ? [] : [{
                canonicalActor: r
            }]),
            queryFn: async ({
                client: t,
                signal: a
            }) => {
                r !== void 0 && S(n, r, a);
                let o = i ? await t.fetchQuery(R({
                    appId: e,
                    workspaceId: n,
                    workspaceUserId: r
                })) : await h(e, u.ADMIN_SETTING, n);
                if (a.throwIfAborted(), r !== void 0 && S(n, r, a), o != null || !i) return o;
                let s = await t.fetchQuery(g({
                    appId: e,
                    workspaceId: n,
                    workspaceUserId: r
                }));
                return a.throwIfAborted(), s.isComplete ? I(e, s.plugins) : null
            },
            enabled: n !== `` && e !== ``,
            staleTime: d,
            retry: !1
        })
    }
}));
export {
    S as a, D as c, C as d, A as f, j as h, z as i, F as l, M as m, I as n, T as o, O as p, L as r, k as s, R as t, w as u
};
//# sourceMappingURL=431d868b-esdtt9p4lcwzu48r.js.map