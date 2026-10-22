import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bat as n,
    I7 as r,
    Pat as i,
    Qit as a,
    TK as o,
    eat as s,
    fat as c,
    gat as l,
    hat as u,
    wK as d,
    z7 as f
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Cnt as p,
    Snt as m,
    iTn as h,
    rTn as g
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    Kx as _,
    Lx as v,
    fS as y,
    hS as b,
    nS as x,
    sS as S
} from "./c2675c8c-ossqum2x3eut0sh8.js";

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
    let o = await m.safePost(`/mcp`, {
        authOption: c.Required,
        signal: r,
        preserveAccountIdOnRetry: !0,
        cache: `no-store`,
        additionalHeaders: {
            ...d(e),
            [a]: g.ADMIN_SETTING,
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
    if (`error` in o || o.id !== 1) throw Error(`Sensitivity-label catalog request failed`);
    let s = o.result;
    if (s.isError) {
        let e = N.safeParse(s._meta);
        throw e.success && e.data[`openai/connector_auth`].connector_id === t && e.data[`openai/connector_auth`].link_id === n ? new i(`/mcp`, 403, {
            detail: {
                error_data: {
                    action: `TRIGGER_REAUTHENTICATION`
                }
            }
        }, void 0, Error(`Sensitivity-label catalog requires reconnection`)) : Error(`Sensitivity-label catalog action failed`)
    }
    let l = M.parse(s.structuredContent),
        u = [],
        f = [...l.value];
    for (let e = 0; e < f.length; e++) {
        let t = j.parse(f[e]),
            n = t.display_name?.trim() || t.name.trim();
        n && u.push({
            id: t.id,
            display_name: n
        }), f.push(...t.sublabels ?? [])
    }
    return {
        labels: u
    }
}
async function D({
    workspaceId: e,
    connectorId: t,
    linkId: n,
    siteCollectionIds: r,
    siteUrls: i
}) {
    let o = await m.safePost(`/v2/connectors/{connector_id}/sharepoint/resolve_sites`, {
        authOption: c.Required,
        additionalHeaders: {
            ...d(e),
            [a]: g.ADMIN_SETTING
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
    h(), p(), w(), l(), n(), s(), f(), o(), v(), O = {
        "x-openai-use-sheep": `1`
    }, new r({
        baseUrl: C(u)
    }), k = new r({
        baseUrl: u,
        targetRoutesAreCanonical: !0
    }), A = new r({
        baseUrl: u,
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
//# sourceMappingURL=a4c0593a-mch3px0pfwhrnnz5.js.map