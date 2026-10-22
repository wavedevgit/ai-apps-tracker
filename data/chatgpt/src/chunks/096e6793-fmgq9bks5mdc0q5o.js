import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    GE as n,
    JE as r,
    Sat as i,
    V1 as a,
    Y7 as o,
    bat as s,
    hat as c,
    pat as l,
    q1 as u,
    qE as d,
    yat as f
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    s as p,
    w as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Gwn as h,
    LTn as g,
    RTn as _,
    Wwn as v
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    Bv as y,
    Lv as b,
    zv as x
} from "./c2675c8c-4fpunyxk1uf8cfp1.js";
import {
    _ as S,
    g as C
} from "./5c40ce75-et9364wpebibpjpv.js";
import {
    a as w,
    c as T,
    f as E,
    i as D,
    n as O,
    o as k,
    s as A,
    t as j,
    u as M
} from "./431d868b-ihzu7iilaag38hqy.js";
var N, P, F, I, L, R = e((() => {
    v(), _(), u(), r(), s(), c(), t(), p(), y(), N = (e, t) => {
        let n = a();
        if (n?.getWorkspaceId() !== e || n.normalizedAccountUserId !== t || f.getCookie(i.Workspace) !== e) throw Error(`The selected workspace or user changed while loading the app template.`)
    }, P = (e, t, n) => {
        if (e.id.trim() === `` || e.status !== `ENABLED` && e.status !== `DISABLED_BY_ADMIN` && e.status !== `ONLY_ME` || e.labels?.admin_only_connector === `true`) return !1;
        if (e.status === `ONLY_ME`) return e.owners.length > 0 && e.owners.every(e => e.type === `USER` && e.id === n);
        let r = e.owners.filter(e => e.type === `WORKSPACE`);
        return !r.some(e => e.id !== t) && r.some(e => e.id === t)
    }, F = async (e, t, r) => {
        r.throwIfAborted(), N(e, t);
        let i = await h({
            operation: `template_catalog`,
            transport: `sa_server`,
            workspaceId: e,
            signal: r,
            request: e => o.safePost(`/aip/connectors/list_accessible`, {
                ...e,
                requestBody: {
                    principals: [],
                    purpose: `workspace_settings`
                },
                parameters: {
                    query: {
                        include_actions: !1,
                        external_logos: !0
                    }
                },
                additionalHeaders: {
                    [l]: g.ADMIN_SETTING
                }
            })
        });
        r.throwIfAborted(), N(e, t);
        let a = new Map,
            s = d();
        for (let r of i.connectors ?? []) P(r, e, t) && !a.has(r.id) && a.set(r.id, n(r, {
            preferIconAssets: s
        }));
        return {
            templates: i.app_templates ?? [],
            connectors: [...a.values()]
        }
    }, I = ({
        catalog: e,
        templateId: t
    }) => {
        if (e == null) return null;
        let n = e.templates.find(e => e.template_id === t);
        return n == null ? null : {
            template: n,
            connectors: e.connectors.filter(e => e.template_id === t)
        }
    }, L = (e, t) => m({
        queryKey: x(`app-template-catalog`, e, t ?? ``),
        enabled: e !== `` && !!t,
        staleTime: b,
        queryFn: ({
            signal: n
        }) => {
            if (!t) throw Error(`The selected workspace or user changed while loading the app template.`);
            return F(e, t, n)
        }
    })
}));

function z(e) {
    let {
        appId: t,
        workspaceId: n,
        workspaceUserId: r,
        referenceTransport: i,
        materializedAppIds: a
    } = e, o = a !== void 0, s = [...new Set(a ?? [])].filter(e => e.trim() !== ``).sort()[0];
    return m({
        queryKey: x(`canonical-app`, n, t, ...s === void 0 ? o ? [`unconfigured-template`] : [] : [s], {
            canonicalReferenceTransport: i,
            workspaceUserId: r
        }),
        enabled: n !== `` && t !== `` && r !== void 0,
        staleTime: b,
        retry: !1,
        queryFn: async ({
            client: a,
            signal: s,
            queryKey: c
        }) => {
            k(e, s), A(a, c);
            let l = await a.fetchQuery(j({
                appId: t,
                workspaceId: n,
                workspaceUserId: r
            }));
            if (k(e, s), l !== null || !o) return {
                pluginId: l,
                usedFallback: !1
            };
            M(a, c);
            let u = await a.fetchQuery(C({
                appId: t,
                workspaceId: n,
                transport: i,
                workspaceUserId: r
            }));
            return k(e, s), {
                pluginId: u.isComplete ? O(t, u.plugins) : null,
                usedFallback: !0
            }
        }
    })
}
async function B({
    queryClient: e,
    signal: t,
    ...n
}) {
    if (n.materializedAppIds === void 0) {
        w(n.workspaceId, n.workspaceUserId, t);
        let r = await e.fetchQuery(j({
            appId: n.appId,
            workspaceId: n.workspaceId
        }));
        return w(n.workspaceId, n.workspaceUserId, t), {
            pluginId: r,
            usedFallback: !1
        }
    }
    k(n, t);
    let r = z(n),
        i = e.fetchQuery(r),
        a = E({
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
        return k(n, t), a.consumeResult(e), e
    } finally {
        t?.removeEventListener(`abort`, a.unsubscribe), a.unsubscribe()
    }
}
async function V(e) {
    return (await B(e)).pluginId
}
var H = e((() => {
    p(), S(), D(), T(), y()
}));
export {
    N as a, R as c, H as i, B as n, I as o, z as r, L as s, V as t
};
//# sourceMappingURL=096e6793-fmgq9bks5mdc0q5o.js.map