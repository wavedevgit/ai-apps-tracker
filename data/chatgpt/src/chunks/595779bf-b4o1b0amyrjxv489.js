import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CE as t,
    Cit as n,
    Sit as r,
    Tit as i,
    a7 as a,
    git as o,
    i1 as s,
    l7 as c,
    u1 as l,
    vit as u,
    wE as d,
    xE as f
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    s as p,
    w as m
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Gwn as h,
    QCn as g,
    Wwn as _,
    XCn as v
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Qv as y,
    ey as b,
    ty as x
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
var S, C, w, T, E, D = e((() => {
    v(), h(), l(), d(), n(), u(), c(), p(), x(), S = (e, t) => {
        let n = s();
        if (n?.getWorkspaceId() !== e || n.normalizedAccountUserId !== t || r.getCookie(i.Workspace) !== e) throw Error(`The selected workspace or user changed while loading the app template.`)
    }, C = (e, t, n) => {
        if (e.id.trim() === `` || e.status !== `ENABLED` && e.status !== `DISABLED_BY_ADMIN` && e.status !== `ONLY_ME` || e.labels?.admin_only_connector === `true`) return !1;
        if (e.status === `ONLY_ME`) return e.owners.length > 0 && e.owners.every(e => e.type === `USER` && e.id === n);
        let r = e.owners.filter(e => e.type === `WORKSPACE`);
        return !r.some(e => e.id !== t) && r.some(e => e.id === t)
    }, w = async (e, n, r) => {
        r.throwIfAborted(), S(e, n);
        let i = await g({
            operation: `template_catalog`,
            transport: `sa_server`,
            workspaceId: e,
            signal: r,
            request: e => a.safePost(`/aip/connectors/list_accessible`, {
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
                    [o]: _.ADMIN_SETTING
                }
            })
        });
        r.throwIfAborted(), S(e, n);
        let s = new Map,
            c = t();
        for (let t of i.connectors ?? []) C(t, e, n) && !s.has(t.id) && s.set(t.id, f(t, {
            preferIconAssets: c
        }));
        return {
            templates: i.app_templates ?? [],
            connectors: [...s.values()]
        }
    }, T = ({
        catalog: e,
        templateId: t
    }) => {
        if (e == null) return null;
        let n = e.templates.find(e => e.template_id === t);
        return n == null ? null : {
            template: n,
            connectors: e.connectors.filter(e => e.template_id === t)
        }
    }, E = (e, t) => m({
        queryKey: b(`app-template-catalog`, e, t ?? ``),
        enabled: e !== `` && !!t,
        staleTime: y,
        queryFn: ({
            signal: n
        }) => {
            if (!t) throw Error(`The selected workspace or user changed while loading the app template.`);
            return w(e, t, n)
        }
    })
}));
export {
    D as i, T as n, E as r, S as t
};
//# sourceMappingURL=595779bf-b4o1b0amyrjxv489.js.map