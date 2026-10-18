import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ait as n,
    Nit as r,
    Pit as i,
    QG as a,
    Qit as o,
    ZG as s,
    git as c,
    iat as l,
    l7 as u,
    o7 as d,
    vit as f
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Gwn as p,
    Wwn as m,
    gnt as h,
    hnt as g
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    AS as _,
    BS as v,
    FS as y,
    US as b,
    bS as x,
    dS as S
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";

function C(e, t = globalThis.location?.origin) {
    try {
        let n = new URL(e, t),
            r = n.pathname.replace(/\/+$/, ``);
        return r.endsWith(`/backend-api`) ? n.pathname = `${r}/admin` : r.endsWith(`/api`) ? n.pathname = `${r.slice(0,-4)}/admin` : n.pathname = `${r}/admin`, n.search = ``, n.hash = ``, n.toString()
    } catch {
        return `${e.replace(/\/+$/,``)}/admin`
    }
}
var w = e((() => {})),
    T = t({
        AdminConnectorsRequest: () => k,
        MicrosoftAdminConsentSheepRequest: () => j,
        SHEEP_ROUTING_HEADERS: () => O,
        SharePointWorkspaceRequest: () => A,
        getMicrosoftSensitivityLabels: () => E,
        resolveSharePointSites: () => D
    });
async function E({
    workspaceId: e,
    connectorId: t,
    linkId: r,
    signal: i
}) {
    let a = await g.safePost(`/mcp`, {
        authOption: n.Required,
        signal: i,
        preserveAccountIdOnRetry: !0,
        cache: `no-store`,
        additionalHeaders: {
            ...s(e),
            [c]: m.ADMIN_SETTING,
            Accept: `application/json`
        },
        requestBody: {
            jsonrpc: `2.0`,
            id: 1,
            method: `tools/call`,
            params: {
                name: `get_sensitivity_labels`,
                arguments: {},
                _meta: {
                    _codex_apps: {
                        resource_uri: `/${t}/${r}/get_sensitivity_labels`
                    }
                }
            }
        }
    });
    if (`error` in a || a.id !== 1) throw Error(`Sensitivity-label catalog request failed`);
    let l = a.result;
    if (l.isError) {
        let e = P.safeParse(l._meta);
        throw e.success && e.data[`openai/connector_auth`].connector_id === t && e.data[`openai/connector_auth`].link_id === r ? new o(`/mcp`, 403, {
            detail: {
                error_data: {
                    action: `TRIGGER_REAUTHENTICATION`
                }
            }
        }, void 0, Error(`Sensitivity-label catalog requires reconnection`)) : Error(`Sensitivity-label catalog action failed`)
    }
    let u = N.parse(l.structuredContent),
        d = [],
        f = [...u.value];
    for (let e = 0; e < f.length; e++) {
        let t = M.parse(f[e]),
            n = t.display_name?.trim() || t.name.trim();
        n && d.push({
            id: t.id,
            display_name: n
        }), f.push(...t.sublabels ?? [])
    }
    return {
        labels: d
    }
}
async function D({
    workspaceId: e,
    connectorId: t,
    linkId: r,
    siteCollectionIds: i,
    siteUrls: a
}) {
    let o = await g.safePost(`/v2/connectors/{connector_id}/sharepoint/resolve_sites`, {
        authOption: n.Required,
        additionalHeaders: {
            ...s(e),
            [c]: m.ADMIN_SETTING
        },
        parameters: {
            path: {
                connector_id: t
            }
        },
        requestBody: {
            link_id: r,
            ...i ? {
                site_collection_ids: i
            } : {},
            ...a ? {
                site_urls: a
            } : {}
        }
    });
    return {
        sites: o.sites,
        results: o.results ?? []
    }
}
var O, k, A, j, M, N, P, F = e((() => {
    a(), p(), h(), w(), i(), f(), l(), u(), S(), O = {
        "x-openai-use-sheep": `1`
    }, k = new d({
        baseUrl: C(r)
    }), A = new d({
        baseUrl: r,
        targetRoutesAreCanonical: !0
    }), j = new d({
        baseUrl: r,
        targetRoutesAreCanonical: !0
    }), M = y({
        id: v(),
        name: v(),
        display_name: v().nullish(),
        sublabels: x(b()).optional()
    }), N = y({
        value: x(b())
    }), P = y({
        "openai/tool_error_kind": _(`connector_auth_required`),
        "openai/connector_auth": y({
            connector_id: v(),
            link_id: v().nullish()
        })
    })
}));
export {
    E as a, T as i, O as n, F as o, A as r, D as s, k as t
};
//# sourceMappingURL=a4c0593a-hizzm22zlxke0akx.js.map