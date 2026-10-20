import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    F7 as n,
    Git as r,
    HE as i,
    I1 as a,
    Qit as o,
    Uit as s,
    VE as c,
    Xit as l,
    Yit as u,
    j7 as d,
    zE as f
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    s as p,
    w as m
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    dwn as h,
    iTn as g,
    lwn as _,
    rTn as v
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Qv as y,
    ey as b,
    ty as x
} from "./c2675c8c-fpv9s4kvd412dyap.js";
var S, C, w, T, E, D = e((() => {
    _(), g(), a(), i(), l(), r(), n(), p(), x(), S = (e, n) => {
        let r = t();
        if (r?.getWorkspaceId() !== e || r.normalizedAccountUserId !== n || u.getCookie(o.Workspace) !== e) throw Error(`The selected workspace or user changed while loading the app template.`)
    }, C = (e, t, n) => {
        if (e.id.trim() === `` || e.status !== `ENABLED` && e.status !== `DISABLED_BY_ADMIN` && e.status !== `ONLY_ME` || e.labels?.admin_only_connector === `true`) return !1;
        if (e.status === `ONLY_ME`) return e.owners.length > 0 && e.owners.every(e => e.type === `USER` && e.id === n);
        let r = e.owners.filter(e => e.type === `WORKSPACE`);
        return !r.some(e => e.id !== t) && r.some(e => e.id === t)
    }, w = async (e, t, n) => {
        n.throwIfAborted(), S(e, t);
        let r = await h({
            operation: `template_catalog`,
            transport: `sa_server`,
            workspaceId: e,
            signal: n,
            request: e => d.safePost(`/aip/connectors/list_accessible`, {
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
                    [s]: v.ADMIN_SETTING
                }
            })
        });
        n.throwIfAborted(), S(e, t);
        let i = new Map,
            a = c();
        for (let n of r.connectors ?? []) C(n, e, t) && !i.has(n.id) && i.set(n.id, f(n, {
            preferIconAssets: a
        }));
        return {
            templates: r.app_templates ?? [],
            connectors: [...i.values()]
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
//# sourceMappingURL=595779bf-krq1t0u91xc2vyfv.js.map