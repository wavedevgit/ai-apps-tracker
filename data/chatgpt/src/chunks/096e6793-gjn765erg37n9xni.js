import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $it as t,
    HE as n,
    L1 as r,
    P7 as i,
    R7 as a,
    VE as o,
    Yit as s,
    eat as c,
    j1 as l,
    nat as u,
    qit as d,
    zE as f
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    s as p,
    w as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    _Cn as h,
    cwn as g,
    eTn as _,
    swn as v,
    tTn as y
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Av as b,
    Dv as x,
    kv as S
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    h as C,
    m as w
} from "./5c40ce75-bsefnxiw0kzskfwy.js";
import {
    a as T,
    c as E,
    f as D,
    i as O,
    n as k,
    o as A,
    s as j,
    t as M,
    u as N
} from "./431d868b-bcl610tz6vjycoqz.js";
var P, F, I, L, R, z = e((() => {
    v(), y(), r(), n(), c(), s(), a(), p(), b(), P = (e, n) => {
        let r = l();
        if (r?.getWorkspaceId() !== e || r.normalizedAccountUserId !== n || t.getCookie(u.Workspace) !== e) throw Error(`The selected workspace or user changed while loading the app template.`)
    }, F = (e, t, n) => {
        if (e.id.trim() === `` || e.status !== `ENABLED` && e.status !== `DISABLED_BY_ADMIN` && e.status !== `ONLY_ME` || e.labels?.admin_only_connector === `true`) return !1;
        if (e.status === `ONLY_ME`) return e.owners.length > 0 && e.owners.every(e => e.type === `USER` && e.id === n);
        let r = e.owners.filter(e => e.type === `WORKSPACE`);
        return !r.some(e => e.id !== t) && r.some(e => e.id === t)
    }, I = async (e, t, n) => {
        n.throwIfAborted(), P(e, t);
        let r = await g({
            operation: `template_catalog`,
            transport: `sa_server`,
            workspaceId: e,
            signal: n,
            request: e => i.safePost(`/aip/connectors/list_accessible`, {
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
                    [d]: _.ADMIN_SETTING
                }
            })
        });
        n.throwIfAborted(), P(e, t);
        let a = new Map,
            s = o();
        for (let n of r.connectors ?? []) F(n, e, t) && !a.has(n.id) && a.set(n.id, f(n, {
            preferIconAssets: s
        }));
        return {
            templates: r.app_templates ?? [],
            connectors: [...a.values()]
        }
    }, L = ({
        catalog: e,
        templateId: t
    }) => {
        if (e == null) return null;
        let n = e.templates.find(e => e.template_id === t);
        return n == null ? null : {
            template: n,
            connectors: e.connectors.filter(e => e.template_id === t)
        }
    }, R = (e, t) => m({
        queryKey: S(`app-template-catalog`, e, t ?? ``),
        enabled: e !== `` && !!t,
        staleTime: x,
        queryFn: ({
            signal: n
        }) => {
            if (!t) throw Error(`The selected workspace or user changed while loading the app template.`);
            return I(e, t, n)
        }
    })
}));

function B(e) {
    let {
        appId: t,
        workspaceId: n,
        workspaceUserId: r,
        referenceTransport: i,
        materializedAppIds: a
    } = e, o = a !== void 0, s = [...new Set(a ?? [])].filter(e => e.trim() !== ``).sort()[0];
    return m({
        queryKey: S(`canonical-app`, n, t, ...s === void 0 ? o ? [`unconfigured-template`] : [] : [s], {
            canonicalReferenceTransport: i,
            workspaceUserId: r
        }),
        enabled: n !== `` && t !== `` && r !== void 0,
        staleTime: x,
        retry: !1,
        queryFn: async ({
            client: a,
            signal: s,
            queryKey: c
        }) => {
            A(e, s), j(a, c);
            let l = await a.fetchQuery(M({
                appId: t,
                workspaceId: n,
                workspaceUserId: r
            }));
            if (A(e, s), l !== null || !o) return {
                pluginId: l,
                usedFallback: !1
            };
            N(a, c);
            let u = await a.fetchQuery(w({
                appId: t,
                workspaceId: n,
                transport: i,
                workspaceUserId: r
            }));
            return A(e, s), {
                pluginId: u.isComplete ? k(t, u.plugins) : null,
                usedFallback: !0
            }
        }
    })
}
async function V({
    queryClient: e,
    signal: t,
    ...n
}) {
    if (n.materializedAppIds === void 0) {
        T(n.workspaceId, n.workspaceUserId, t);
        let r = await e.fetchQuery(M({
            appId: n.appId,
            workspaceId: n.workspaceId
        }));
        return T(n.workspaceId, n.workspaceUserId, t), {
            pluginId: r,
            usedFallback: !1
        }
    }
    A(n, t);
    let r = B(n),
        i = e.fetchQuery(r),
        a = D({
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
        return A(n, t), a.consumeResult(e), e
    } finally {
        t?.removeEventListener(`abort`, a.unsubscribe), a.unsubscribe()
    }
}
async function H(e) {
    return (await V(e)).pluginId
}
var U = e((() => {
    r(), p(), h(), C(), O(), E(), b()
}));
export {
    P as a, z as c, U as i, V as n, L as o, B as r, R as s, H as t
};
//# sourceMappingURL=096e6793-gjn765erg37n9xni.js.map