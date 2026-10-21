import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BE as t,
    F7 as n,
    HE as r,
    M1 as i,
    Qit as a,
    R1 as o,
    UE as s,
    aat as c,
    eat as l,
    iat as u,
    sat as d,
    z7 as f
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    s as p,
    w as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    bCn as h,
    dwn as g,
    iTn as _,
    rTn as v,
    uwn as y
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    Av as b,
    Dv as x,
    kv as S
} from "./c2675c8c-h5ybkhdzcoblzzdu.js";
import {
    h as C,
    m as w
} from "./5c40ce75-foool2ecmvvy57ip.js";
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
} from "./431d868b-lxh0bo83qqf1nzfv.js";
var P, F, I, L, R, z = e((() => {
    y(), _(), o(), s(), c(), l(), f(), p(), b(), P = (e, t) => {
        let n = i();
        if (n?.getWorkspaceId() !== e || n.normalizedAccountUserId !== t || u.getCookie(d.Workspace) !== e) throw Error(`The selected workspace or user changed while loading the app template.`)
    }, F = (e, t, n) => {
        if (e.id.trim() === `` || e.status !== `ENABLED` && e.status !== `DISABLED_BY_ADMIN` && e.status !== `ONLY_ME` || e.labels?.admin_only_connector === `true`) return !1;
        if (e.status === `ONLY_ME`) return e.owners.length > 0 && e.owners.every(e => e.type === `USER` && e.id === n);
        let r = e.owners.filter(e => e.type === `WORKSPACE`);
        return !r.some(e => e.id !== t) && r.some(e => e.id === t)
    }, I = async (e, i, o) => {
        o.throwIfAborted(), P(e, i);
        let s = await g({
            operation: `template_catalog`,
            transport: `sa_server`,
            workspaceId: e,
            signal: o,
            request: e => n.safePost(`/aip/connectors/list_accessible`, {
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
                    [a]: v.ADMIN_SETTING
                }
            })
        });
        o.throwIfAborted(), P(e, i);
        let c = new Map,
            l = r();
        for (let n of s.connectors ?? []) F(n, e, i) && !c.has(n.id) && c.set(n.id, t(n, {
            preferIconAssets: l
        }));
        return {
            templates: s.app_templates ?? [],
            connectors: [...c.values()]
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
    o(), p(), h(), C(), O(), E(), b()
}));
export {
    P as a, z as c, U as i, V as n, L as o, B as r, R as s, H as t
};
//# sourceMappingURL=096e6793-i8pz3iy6zju28zh4.js.map