import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    I1 as n
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    W as r,
    s as i,
    w as a
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    gCn as o,
    mCn as s
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    ey as c,
    ny as l,
    ry as u
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    a as d,
    o as f
} from "./5c40ce75-kj85lvhmlo6bbao4.js";
import {
    a as p,
    c as m,
    d as h,
    f as g,
    h as _,
    i as v,
    l as y,
    m as b,
    n as x,
    o as S,
    s as C,
    t as w
} from "./431d868b-ogdvgbz5e7ncnndh.js";

function T(e) {
    let {
        appId: t,
        workspaceId: n,
        workspaceUserId: r,
        referenceTransport: i,
        materializedAppIds: o
    } = e, s = o !== void 0, u = [...new Set(o ?? [])].filter(e => e.trim() !== ``).sort()[0];
    return a({
        queryKey: l(`canonical-app`, n, t, ...u === void 0 ? s ? [`unconfigured-template`] : [] : [u], {
            canonicalReferenceTransport: i,
            workspaceUserId: r
        }),
        enabled: n !== `` && t !== `` && r !== void 0,
        staleTime: c,
        retry: !1,
        queryFn: async ({
            client: a,
            signal: o,
            queryKey: c
        }) => {
            S(e, o), C(a, c);
            let l = await a.fetchQuery(w({
                appId: t,
                workspaceId: n,
                workspaceUserId: r
            }));
            if (S(e, o), l !== null || !s) return {
                pluginId: l,
                usedFallback: !1
            };
            g(a, c);
            let u = await a.fetchQuery(d({
                appId: t,
                workspaceId: n,
                transport: i,
                workspaceUserId: r
            }));
            return S(e, o), {
                pluginId: u.isComplete ? x(t, u.plugins) : null,
                usedFallback: !0
            }
        }
    })
}

function E(e) {
    return typeof e == `object` && e ? e : {
        pluginId: e,
        usedFallback: !1
    }
}

function D(e) {
    return {
        ...e.materializedAppIds === void 0 ? w({
            appId: e.appId,
            workspaceId: e.workspaceId
        }) : T(e),
        select: E
    }
}

function O(e) {
    if (e.materializedAppIds !== void 0) return h(e);
    let n = t();
    return e.workspaceUserId !== void 0 && s(e.workspaceId) && n?.normalizedAccountUserId === e.workspaceUserId
}
async function k({
    queryClient: e,
    signal: t,
    ...n
}) {
    if (n.materializedAppIds === void 0) {
        p(n.workspaceId, n.workspaceUserId, t);
        let r = await e.fetchQuery(w({
            appId: n.appId,
            workspaceId: n.workspaceId
        }));
        return p(n.workspaceId, n.workspaceUserId, t), {
            pluginId: r,
            usedFallback: !1
        }
    }
    S(n, t);
    let r = T(n),
        i = e.fetchQuery(r),
        a = b({
            queryClient: e,
            queryKey: r.queryKey,
            selection: n,
            consumeCachedResult: !1
        });
    t?.addEventListener(`abort`, a.unsubscribe, {
        once: !0
    });
    try {
        let e = await i;
        return S(n, t), a.consumeResult(e), e
    } finally {
        t?.removeEventListener(`abort`, a.unsubscribe), a.unsubscribe()
    }
}
async function A(e) {
    return (await k(e)).pluginId
}

function j({
    queryClient: e,
    input: t,
    signal: n,
    pendingRead: i,
    setPending: a,
    onResolved: o,
    onError: s
}) {
    if (n?.aborted || !O(t)) return;
    let c = e => {
            e.usedFallback ? o(e.pluginId, t) : o(e.pluginId)
        },
        l = D(t),
        u = e.getQueryData(l.queryKey);
    if (u !== void 0) {
        let e = E(u);
        e.usedFallback && m(t, e), c(e);
        return
    }
    i.current = t, a(!0);
    let d = () => i.current === t ? (i.current = null, n?.aborted || a(!1), !0) : !1;
    k({
        ...t,
        queryClient: e,
        signal: n
    }).then(e => {
        d() && !n?.aborted && O(t) && c(e)
    }, i => {
        d() && !n?.aborted && !r(i) && O(t) && s(_(e, l.queryKey) ? t : void 0)
    })
}

function M({
    plugin: e,
    selection: t,
    queryClient: n
}) {
    let r = e?.release.app_templates ?? [],
        i = e?.scope === `GLOBAL` && r.length === 1,
        a = r[0],
        o = i && a?.template_id.trim() !== `` ? a?.template_id ?? `` : ``,
        s = a?.plugin_id?.trim() || void 0,
        c = T({
            ...t,
            appId: o,
            materializedAppIds: a?.materialized_app_ids ?? []
        });
    return {
        isPotentialTemplate: i,
        knownOwner: s,
        pluginTemplateId: o,
        queryOptions: {
            ...c,
            enabled: c.enabled && i && s == null
        },
        subscribe: () => c.enabled && i && s == null ? b({
            queryClient: n,
            queryKey: c.queryKey,
            selection: t
        }).unsubscribe : void 0,
        isPluginTemplate: r => {
            let a = n.getQueryData(w({
                appId: o,
                workspaceId: t.workspaceId,
                workspaceUserId: t.workspaceUserId
            }).queryKey);
            return i && (s ?? r?.pluginId ?? a) === e?.id
        }
    }
}
var N = e((() => {
    o(), n(), i(), f(), v(), y(), u()
}));
export {
    D as a, T as i, A as n, N as o, k as r, M as s, j as t
};
//# sourceMappingURL=096e6793-coq8xe1yfz7hnta4.js.map