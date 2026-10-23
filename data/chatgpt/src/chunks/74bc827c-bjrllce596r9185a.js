import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    oK as t,
    sK as n
} from "./4813494d-mdvd4786a87166cc.js";
import {
    d as r,
    i,
    l as a,
    p as o,
    s,
    u as c
} from "./4ed85438-egjmwvrzf8aj2kcd.js";
var l, u, d, f, p, m, h, g, _ = e((() => {
    o(), n(), s(), l = e => e.metadata != null && typeof e.metadata == `object` && `lockdown_mode` in e.metadata && e.metadata.lockdown_mode === !0, u = new Set([t.DeepResearchAccess, t.AgentModeAccess, t.CodexAgentNetworkAccess, `chatgpt.workspace.feature.flora-browser-use.access`, `chatgpt.workspace.feature.flora-network-access.access`, i, t.CanvasCodeNetworkAccess, t.UsePlugin, t.UseWorkspacePlugins, t.UploadWorkspacePluginsWithCustomMcpServers, t.PublishWorkspacePlugins]), d = {
        [c]: a,
        [r]: a
    }, f = new Set([t.SitesAccess, t.SitesPublishAccess, t.SkillsAccess, t.SkillsShare, t.SkillsShareWorkspace]), p = e => {
        let t = new Map(e.flatMap(e => {
            if (!e.rbac) return [];
            let t = e.dependsOnPermissionName ?? d[e.permissionName];
            return t == null ? [] : [
                [e.permissionName, t]
            ]
        }));
        return e.map(e => {
            if (!e.rbac) return e;
            let n = new Set,
                r = [e.permissionName];
            for (; r.length > 0;) {
                let e = r.pop();
                for (let [i, a] of t) a === e && !n.has(i) && (n.add(i), r.push(i))
            }
            let i = t.get(e.permissionName);
            return i == null && n.size === 0 ? e : {
                ...e,
                ...i == null ? {} : {
                    dependsOnPermissionName: i
                },
                ...n.size === 0 ? {} : {
                    permissionNamesToRemoveWhenDisabled: [...new Set([...e.permissionNamesToRemoveWhenDisabled ?? [], ...n])]
                }
            }
        })
    }, m = ({
        role: e,
        permissionName: t,
        additionalPermissionNames: n = []
    }) => {
        let r = [t, ...n],
            i = new Set(e.disallowed_permissions ?? []);
        return r.some(e => i.has(e)) ? `off` : r.every(t => e.permissions.includes(t)) ? `on` : `default`
    }, h = ({
        role: e,
        defaultRole: n
    }) => {
        let r = new Set(e.disallowed_permissions ?? []),
            i = l(e),
            a = new Set([...i ? [] : n?.permissions ?? [], ...e.permissions]);
        return i && a.add(t.SearchAccess), [...a].filter(e => (!r.has(e) || i && e === t.SearchAccess) && !(i && u.has(e)))
    }, g = ({
        role: e,
        state: t,
        permissionName: n,
        additionalPermissionNames: r = [],
        permissionNamesToRemoveWhenDisabled: i = [],
        defaultRole: a
    }) => {
        let o = [...new Set([n, ...r])],
            s = t === `off` || t === "default" && a != null,
            c = new Set([...o, ...s ? i : []]),
            l = e.permissions.filter(e => !c.has(e)),
            u = (e.disallowed_permissions ?? []).filter(e => !c.has(e));
        t === `on` && l.push(...o), t === `off` ? u.push(...c) : t === "default" && a != null && !f.has(n) && !o.every(e => a.permissions.includes(e)) && u.push(...i);
        let d = new Set(l);
        return {
            permissions: l,
            disallowed_permissions: u.filter(e => !d.has(e))
        }
    }
}));
export {
    l as a, _ as i, m as n, p as o, g as r, h as t
};
//# sourceMappingURL=74bc827c-bjrllce596r9185a.js.map