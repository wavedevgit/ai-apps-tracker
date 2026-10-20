import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CK as n,
    F7 as r,
    Fat as i,
    R7 as a,
    Yit as o,
    dat as s,
    kat as c,
    qit as l,
    sat as u,
    uat as d,
    wK as f
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    bnt as p,
    eTn as m,
    tTn as h,
    ynt as g
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Kx as _,
    Lx as v,
    fS as y,
    hS as b,
    nS as x,
    sS as S
} from "./c2675c8c-9bs3zsr3vq259es7.js";

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
        MicrosoftAdminConsentSheepRequest: () => A,
        SHEEP_ROUTING_HEADERS: () => O,
        SharePointWorkspaceRequest: () => k,
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
        authOption: u.Required,
        signal: i,
        preserveAccountIdOnRetry: !0,
        cache: `no-store`,
        additionalHeaders: {
            ...n(e),
            [l]: m.ADMIN_SETTING,
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
    let o = a.result;
    if (o.isError) {
        let e = N.safeParse(o._meta);
        throw e.success && e.data[`openai/connector_auth`].connector_id === t && e.data[`openai/connector_auth`].link_id === r ? new c(`/mcp`, 403, {
            detail: {
                error_data: {
                    action: `TRIGGER_REAUTHENTICATION`
                }
            }
        }, void 0, Error(`Sensitivity-label catalog requires reconnection`)) : Error(`Sensitivity-label catalog action failed`)
    }
    let s = M.parse(o.structuredContent),
        d = [],
        f = [...s.value];
    for (let e = 0; e < f.length; e++) {
        let t = j.parse(f[e]),
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
        authOption: u.Required,
        additionalHeaders: {
            ...n(e),
            [l]: m.ADMIN_SETTING
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
var O, k, A, j, M, N, P = e((() => {
    h(), p(), w(), s(), i(), o(), a(), f(), v(), O = {
        "x-openai-use-sheep": `1`
    }, new r({
        baseUrl: C(d)
    }), k = new r({
        baseUrl: d,
        targetRoutesAreCanonical: !0
    }), A = new r({
        baseUrl: d,
        targetRoutesAreCanonical: !0
    }), j = S({
        id: y(),
        name: y(),
        display_name: y().nullish(),
        sublabels: _(b()).optional()
    }), M = S({
        value: _(b())
    }), N = S({
        "openai/tool_error_kind": x(`connector_auth_required`),
        "openai/connector_auth": S({
            connector_id: y(),
            link_id: y().nullish()
        })
    })
}));
export {
    P as a, E as i, k as n, D as o, T as r, O as t
};
//# sourceMappingURL=a4c0593a-d3svjzmes0jpvvnm.js.map