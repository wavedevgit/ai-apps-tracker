import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    I7 as n,
    Lat as r,
    N7 as i,
    Pat as a,
    Rat as o,
    SK as s,
    Sat as c,
    bat as l,
    cot as u,
    not as d,
    xK as f
} from "./4813494d-mdvd4786a87166cc.js";
import {
    RTn as p,
    _nt as m,
    gnt as h,
    zTn as g
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Hx as _,
    Zx as v,
    _S as y,
    bS as b,
    fS as x,
    sS as S
} from "./c2675c8c-oz03twoan08d72ud.js";

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
    linkId: n,
    signal: r
}) {
    let i = await h.safePost(`/mcp`, {
        authOption: a.Required,
        signal: r,
        preserveAccountIdOnRetry: !0,
        cache: `no-store`,
        additionalHeaders: {
            ...f(e),
            [l]: p.ADMIN_SETTING,
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
                        resource_uri: `/${t}/${n}/get_sensitivity_labels`
                    }
                }
            }
        }
    });
    if (`error` in i || i.id !== 1) throw Error(`Sensitivity-label catalog request failed`);
    let o = i.result;
    if (o.isError) {
        let e = N.safeParse(o._meta);
        throw e.success && e.data[`openai/connector_auth`].connector_id === t && e.data[`openai/connector_auth`].link_id === n ? new d(`/mcp`, 403, {
            detail: {
                error_data: {
                    action: `TRIGGER_REAUTHENTICATION`
                }
            }
        }, void 0, Error(`Sensitivity-label catalog requires reconnection`)) : Error(`Sensitivity-label catalog action failed`)
    }
    let s = M.parse(o.structuredContent),
        c = [],
        u = [...s.value];
    for (let e = 0; e < u.length; e++) {
        let t = j.parse(u[e]),
            n = t.display_name?.trim() || t.name.trim();
        n && c.push({
            id: t.id,
            display_name: n
        }), u.push(...t.sublabels ?? [])
    }
    return {
        labels: c
    }
}
async function D({
    workspaceId: e,
    connectorId: t,
    linkId: n,
    siteCollectionIds: r,
    siteUrls: i
}) {
    let o = await h.safePost(`/v2/connectors/{connector_id}/sharepoint/resolve_sites`, {
        authOption: a.Required,
        additionalHeaders: {
            ...f(e),
            [l]: p.ADMIN_SETTING
        },
        parameters: {
            path: {
                connector_id: t
            }
        },
        requestBody: {
            link_id: n,
            ...r ? {
                site_collection_ids: r
            } : {},
            ...i ? {
                site_urls: i
            } : {}
        }
    });
    return {
        sites: o.sites,
        results: o.results ?? []
    }
}
var O, k, A, j, M, N, P = e((() => {
    g(), m(), w(), o(), u(), c(), n(), s(), _(), O = {
        "x-openai-use-sheep": `1`
    }, new i({
        baseUrl: C(r)
    }), k = new i({
        baseUrl: r,
        targetRoutesAreCanonical: !0
    }), A = new i({
        baseUrl: r,
        targetRoutesAreCanonical: !0
    }), j = x({
        id: y(),
        name: y(),
        display_name: y().nullish(),
        sublabels: v(b()).optional()
    }), M = x({
        value: v(b())
    }), N = x({
        "openai/tool_error_kind": S(`connector_auth_required`),
        "openai/connector_auth": x({
            connector_id: y(),
            link_id: y().nullish()
        })
    })
}));
export {
    P as a, E as i, k as n, D as o, T as r, O as t
};
//# sourceMappingURL=a4c0593a-ko21pnnc3qtfszg9.js.map