import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    d as t,
    s as n,
    u as r
} from "./6fd89734-l8h178glfzpxynlr.js";
import {
    a as i,
    i as a
} from "./74bc827c-ons6dtz8ehyfw016.js";
var o, s, c, l, u = e((() => {
        a(), n(), o = `role-workspace-member`, s = e => r(e) ? o : e.id, c = (e, n) => e.resource_type === `chatgpt.workspace` && !e.permissions.includes(`*`) && !i(e) && ([`role-workspace-member`, `role-workspace-member__chatgpt-workspace__${n}`, `role-workspace-member__chatgpt-workspace__${n}_overridden`].includes(e.id) || t(e, n)), l = (e, t) => {
            let n = e ?? {
                    "role-workspace-member": `on`
                },
                i = {
                    ...n
                };
            for (let e of t) r(e) || (i[e.id] = n[e.id] ?? `inherit`);
            return i
        }
    })),
    d, f, p, m, h, g = e((() => {
        a(), d = (e, t) => {
            let n = new Set(e),
                r = new Set(t);
            return n.size === r.size && [...n].every(e => r.has(e))
        }, f = ({
            baseline: e,
            role: t,
            includeDisallowedPermissions: n
        }) => e.name !== t.name || (e.description ?? null) !== (t.description ?? null) || !d(e.permissions, t.permissions) || n && !d(e.disallowed_permissions ?? [], t.disallowed_permissions ?? []), p = ({
            baseline: e,
            draft: t,
            latest: n,
            includeDisallowedPermissions: r
        }) => {
            let i = new Set([...e.permissions, ...t.permissions, ...r ? e.disallowed_permissions ?? [] : [], ...r ? t.disallowed_permissions ?? [] : []].filter(n => e.permissions.includes(n) !== t.permissions.includes(n) || r && (e.disallowed_permissions ?? []).includes(n) !== (t.disallowed_permissions ?? []).includes(n))),
                a = (e, t) => [...e.filter(e => !i.has(e)), ...t.filter(e => i.has(e))];
            return {
                ...n,
                permissions: a(n.permissions, t.permissions),
                ...r ? {
                    disallowed_permissions: a(n.disallowed_permissions ?? [], t.disallowed_permissions ?? [])
                } : {}
            }
        }, m = ({
            latest: e,
            desired: t,
            workspacePermissionsToEnable: n,
            workspacePermissionsToDisable: r
        }) => {
            let i = new Set((t.disallowed_permissions ?? []).filter(t => n.has(t) && !(e.disallowed_permissions ?? []).includes(t))),
                a = new Set(t.permissions.filter(n => r.has(n) && !(t.disallowed_permissions ?? []).includes(n) && (!e.permissions.includes(n) || (e.disallowed_permissions ?? []).includes(n))));
            return i.size === 0 && a.size === 0 ? null : {
                ...e,
                permissions: [...e.permissions.filter(e => !i.has(e)), ...[...a].filter(t => !e.permissions.includes(t))],
                disallowed_permissions: [...(e.disallowed_permissions ?? []).filter(e => !a.has(e)), ...i]
            }
        }, h = ({
            baselineRole: e,
            draftRole: t,
            baselineConnectorAccessEnabled: n,
            draftConnectorAccessEnabled: r,
            includeDisallowedPermissions: i
        }) => ({
            role: f({
                baseline: e,
                role: t,
                includeDisallowedPermissions: i
            }),
            connectors: typeof n == `boolean` && typeof r == `boolean` && n !== r
        })
    }));
export {
    p as a, s as c, g as i, u as l, h as n, o, f as r, l as s, m as t, c as u
};
//# sourceMappingURL=010ce0cb-nkbgm5bhb3f20eje.js.map