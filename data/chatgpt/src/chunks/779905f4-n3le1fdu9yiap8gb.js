import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F7 as t,
    z7 as n
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    d as r,
    l as i,
    m as a,
    p as o,
    r as s,
    v as c
} from "./82782bc9-idqd90kxtp4zogpp.js";

function l(e) {
    return e.users.filter(e => e.role !== `owner`).length
}

function u(e) {
    let t = new Set(e.allowed_workspace_group_ids),
        n = [`custom`, `workspace_all`];
    return e.capabilities?.can_set_public_access === !0 && n.push(`public`), {
        access_mode: e.access_mode,
        available_access_modes: n,
        has_private_tunnels: e.capabilities?.has_private_tunnels === !0,
        users: [...(e.allowed_editors ?? []).map(e => ({
            ...e,
            role: `editor`,
            editable: !0
        })), ...e.allowed_users.filter(t => t.account_user_id !== e.owner_account_user_id && !(e.allowed_editors ?? []).some(e => e.account_user_id === t.account_user_id)).map(e => ({
            ...e,
            account_user_id: e.is_external ? null : e.account_user_id,
            editable: !e.is_external || e.email != null,
            role: `viewer`
        }))],
        groups: e.allowed_groups.map(e => ({
            ...e,
            editable: t.has(e.id)
        }))
    }
}

function d(e) {
    return {
        defaultWorkspaceSlugsEnabled: e.default_workspace_slugs_enabled ?? !1,
        verifiedWorkspaceDomainsEnabled: e.verified_workspace_domains_enabled ?? !1,
        workspace: e.workspace == null ? null : {
            defaultDomainCnameTarget: e.workspace.default_domain_cname_target ?? null,
            defaultDomainStatus: e.workspace.default_domain_status ?? null,
            ...e.workspace.default_domain_activation_status == null ? {} : {
                defaultDomainActivationStatus: e.workspace.default_domain_activation_status
            },
            ...e.workspace.default_domain_reset_status == null ? {} : {
                defaultDomainResetStatus: e.workspace.default_domain_reset_status
            },
            defaultDomainValidationRecords: e.workspace.default_domain_validation_records ?? [],
            defaultDomain: e.workspace.default_domain ?? null,
            slug: e.workspace.slug ?? null
        }
    }
}
async function f() {
    return d(await t.safeGet(`/hosting/workspace`))
}
async function p(e) {
    return d(await t.safePost(`/hosting/workspace`, {
        requestBody: {
            slug: e
        }
    }))
}
async function m(e) {
    return d(await t.safePatch(`/hosting/workspace`, {
        requestBody: {
            default_domain: e
        }
    }))
}
async function h({
    after: e,
    siteUrl: n,
    signal: r
} = {}) {
    let i = {
            ...e == null ? {} : {
                after: e
            },
            ...n == null ? {} : {
                site_url: n
            }
        },
        a = Object.keys(i).length > 0,
        o = await t.safeGet(`/hosting/sites`, !a && r == null ? void 0 : {
            ...a ? {
                parameters: {
                    query: i
                }
            } : {},
            ...r == null ? {} : {
                signal: r
            }
        });
    return {
        cursor: o.cursor ?? null,
        items: o.items ?? []
    }
}
async function g(e) {
    let n = await t.safeGet(`/hosting/sites/{project_id}`, {
        parameters: {
            path: {
                project_id: e
            }
        }
    });
    return o(x, n).owner
}
async function _(e, n) {
    let r = await t.safePatch(`/hosting/sites/{project_id}`, {
        parameters: {
            path: {
                project_id: e
            }
        },
        requestBody: n
    });
    return o(x, r).owner
}
async function v(e) {
    let n = await t.safeGet(`/hosting/sites/{project_id}/access`, {
        parameters: {
            path: {
                project_id: e
            }
        }
    });
    return n == null ? null : u(n)
}
async function y(e, n, r) {
    let i = `access_mode` in n ? n.access_mode : r,
        a = `access_mode` in n ? n : `email` in n ? {
            viewer_changes: n.role == null ? {
                remove_external_visitor_emails: [n.email]
            } : {
                add_external_visitor_emails: [n.email]
            }
        } : n.recipient_type === `group` ? {
            viewer_changes: n.role == null ? {
                remove_viewer_workspace_group_ids: [n.recipient]
            } : {
                add_viewer_workspace_group_ids: [n.recipient]
            }
        } : {
            editor_changes: n.role === `editor` ? {
                add_editor_account_user_ids: [n.recipient]
            } : {
                remove_editor_account_user_ids: [n.recipient]
            },
            viewer_changes: n.role === `viewer` ? {
                add_viewer_account_user_ids: [n.recipient]
            } : n.role == null ? {
                remove_viewer_account_user_ids: [n.recipient]
            } : void 0
        };
    if (i == null || i === `admins_only`) throw Error(`Site access mode is unavailable`);
    return u(await t.safePost(`/hosting/sites/{project_id}/access`, {
        parameters: {
            path: {
                project_id: e
            }
        },
        disableAutomaticRetry: !0,
        requestBody: {
            ...a,
            access_mode: i
        }
    }))
}
var b, x, S = e((() => {
    n(), s(), b = r({
        account_user_id: i(c()),
        email: i(c()),
        name: i(c()),
        status: a([`active`, `inactive`, `unresolved`])
    }), x = r({
        owner: b
    })
}));
export {
    f as a, _ as c, g as i, m as l, l as n, S as o, v as r, h as s, p as t, y as u
};
//# sourceMappingURL=779905f4-n3le1fdu9yiap8gb.js.map