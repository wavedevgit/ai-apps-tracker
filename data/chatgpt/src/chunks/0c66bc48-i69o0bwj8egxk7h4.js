import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    a as t,
    l as n,
    n as r,
    s as i
} from "./26265142-nyi2z6lhzlikrnes.js";
var a, o, s, c = e((() => {
    i(), a = e => e.scope === `USER` || e.discoverability === `PRIVATE`, o = e => {
        let t = [...new Set(e.filter(e => !a(e) && e.release.required_app_id_groups?.length !== 0).flatMap(r))].sort(),
            n = [];
        for (let e = 0; e < t.length; e += 100) n.push(t.slice(e, e + 100));
        return n
    }, s = ({
        plugin: e,
        appsById: i,
        appEnabledById: o
    }) => {
        if (a(e)) return `draft`;
        let s = e.release.required_app_id_groups ?? null;
        if ((s == null || s.some(e => e.length === 0)) && e.release.app_templates?.some(t => t.template_id.trim() !== `` && (t.materialized_app_ids?.length ?? 0) === 0 && n({
                plugin: e,
                template: t
            }))) return `disabled`;
        let c = r(e);
        return s?.length === 0 || s == null && c.length === 0 ? e.workspace_settings?.enabled === !1 ? `disabled` : `enabled` : t({
            appIds: c,
            appsById: i,
            requiredAppGroups: s,
            appEnabledById: o
        })
    }
}));
export {
    s as n, c as r, o as t
};
//# sourceMappingURL=0c66bc48-i69o0bwj8egxk7h4.js.map