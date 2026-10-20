import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    L1 as t,
    j1 as n
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    H as r,
    s as i,
    w as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    _Cn as o,
    eTn as s,
    hCn as c,
    mCn as l,
    tTn as u
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Av as d,
    Dv as f,
    kv as p
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    ty as m,
    xy as h
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    _ as g,
    b as _,
    m as v,
    r as y,
    v as b,
    y as x
} from "./5c40ce75-bsefnxiw0kzskfwy.js";

function S(e, t, i) {
    if (i?.throwIfAborted(), l(e), t === void 0 || n()?.normalizedAccountUserId !== t) throw new r({
        revert: !0
    })
}

function C(e) {
    return e.workspaceUserId !== void 0 && c(e.workspaceId) && n()?.normalizedAccountUserId === e.workspaceUserId && _() === e.referenceTransport
}

function w(e, t) {
    S(e.workspaceId, e.workspaceUserId, t), g(e.referenceTransport, e.workspaceId, t, e.workspaceUserId)
}

function T(e, t, r) {
    return !r || !t || e.workspaceUserId === void 0 || n()?.normalizedAccountUserId !== e.workspaceUserId ? !1 : b(e.referenceTransport, e.workspaceId, !0)
}

function E({
    queryClient: e,
    previous: t,
    next: n
}) {
    let r = t.workspaceId !== n.workspaceId || t.workspaceUserId !== n.workspaceUserId;
    if (!r && t.referenceTransport === n.referenceTransport) return;
    let i = e => e.some(n => typeof n != `object` || !n ? !1 : `canonicalReferenceTransport` in n ? n.canonicalReferenceTransport === t.referenceTransport && `workspaceUserId` in n && n.workspaceUserId === t.workspaceUserId : `canonicalReferenceActor` in n ? n.canonicalReferenceActor === t.workspaceUserId && (e.at(-1) === `app-reference-sheep` ? `sheep` : `legacy`) === t.referenceTransport : r && `canonicalActor` in n && n.canonicalActor === t.workspaceUserId);
    for (let n of [`canonical-app`, `app-references`]) {
        let r = {
            queryKey: p(n, t.workspaceId),
            predicate: e => i(e.queryKey)
        };
        e.cancelQueries(r), e.invalidateQueries({
            ...r,
            refetchType: `none`
        })
    }
}

function D(e, t) {
    let n = e.getQueryCache().find({
        queryKey: t,
        exact: !0
    });
    n != null && j.delete(n)
}

function O(e, t) {
    let n = e.getQueryCache().find({
        queryKey: t,
        exact: !0
    });
    if (n != null) {
        j.add(n);
        for (let t of M.get(e) ?? []) t()
    }
}

function k(e, t) {
    let n = e.getQueryCache().find({
        queryKey: t,
        exact: !0
    });
    return n != null && j.has(n)
}

function A({
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
            i = T(n, o != null && j.has(o) && (r || o.state.fetchStatus === `fetching`) || a?.usedFallback === !0 || r && typeof s == `object` && !!s && `usedFallback` in s && s.usedFallback === !0, !0)
        },
        o = () => a(),
        s = M.get(e);
    s ?? (s = new Set, M.set(e, s)), s.add(o);
    let c = e.getQueryCache().subscribe(o);
    return a(), {
        consumeResult: e => a(e),
        unsubscribe: () => {
            s.delete(o), c()
        }
    }
}
var j, M, N = e((() => {
    t(), i(), o(), x(), d(), j = new WeakSet, M = new WeakMap
}));

function P(e, t, n = !0) {
    let r = t.filter(t => t.canonical_app_id === e);
    if (r.length === 1) return r[0].id;
    if (r.length > 1 || !n) return null;
    let i = t.filter(t => {
        let n = Object.values(t.app_manifest?.apps ?? {});
        return n.length === 1 && n[0]?.id === e
    });
    return i.length === 1 ? i[0]?.id ?? null : null
}

function F({
    appId: e,
    canonicalPluginId: t,
    references: n
}) {
    let r = n.isComplete ? P(e, n.plugins, e.toLowerCase().startsWith(`templated_apps_`)) : null,
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
var I, L = e((() => {
    u(), h(), i(), y(), N(), d(), I = ({
        appId: e,
        materializedAppIds: t,
        workspaceId: n,
        workspaceUserId: r
    }) => {
        let i = t != null,
            o = [...new Set(t ?? [])].filter(e => e.trim() !== ``).sort()[0];
        return a({
            queryKey: p(`canonical-app`, n, e, ...o == null ? i ? [`unconfigured-template`] : [] : [o], ...r === void 0 ? [] : [{
                canonicalActor: r
            }]),
            queryFn: async ({
                client: t,
                signal: a
            }) => {
                r !== void 0 && S(n, r, a);
                let o = i ? await t.fetchQuery(I({
                    appId: e,
                    workspaceId: n,
                    workspaceUserId: r
                })) : await m(e, s.ADMIN_SETTING, n);
                if (a.throwIfAborted(), r !== void 0 && S(n, r, a), o != null || !i) return o;
                let c = await t.fetchQuery(v({
                    appId: e,
                    workspaceId: n,
                    workspaceUserId: r
                }));
                return a.throwIfAborted(), c.isComplete ? P(e, c.plugins) : null
            },
            enabled: n !== `` && e !== ``,
            staleTime: f,
            retry: !1
        })
    }
}));
export {
    S as a, N as c, E as d, A as f, L as i, C as l, P as n, w as o, k as p, F as r, D as s, I as t, O as u
};
//# sourceMappingURL=431d868b-bcl610tz6vjycoqz.js.map