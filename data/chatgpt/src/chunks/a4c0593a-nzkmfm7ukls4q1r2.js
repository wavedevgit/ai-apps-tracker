import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dat as n,
    Kat as r,
    Oat as i,
    Q7 as a,
    Qat as o,
    SK as s,
    Y7 as c,
    fat as l,
    uat as u,
    wat as d,
    xK as f
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    _Tn as p,
    gnt as m,
    hnt as h,
    vTn as g
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    $x as _,
    Px as v,
    Ux as y,
    fS as b,
    iS as x,
    lS as S
} from "./c2675c8c-d62p1sdq1sy52umm.js";

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
    signal: i
}) {
    let a = await h.safePost(`/mcp`, {
        authOption: d.Required,
        signal: i,
        preserveAccountIdOnRetry: !0,
        cache: `no-store`,
        additionalHeaders: {
            ...f(e),
            [u]: p.ADMIN_SETTING,
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
    if (`error` in a || a.id !== 1) throw Error(`Sensitivity-label catalog request failed`);
    let o = a.result;
    if (o.isError) {
        let e = N.safeParse(o._meta);
        throw e.success && e.data[`openai/connector_auth`].connector_id === t && e.data[`openai/connector_auth`].link_id === n ? new r(`/mcp`, 403, {
            detail: {
                error_data: {
                    action: `TRIGGER_REAUTHENTICATION`
                }
            }
        }, void 0, Error(`Sensitivity-label catalog requires reconnection`)) : Error(`Sensitivity-label catalog action failed`)
    }
    let s = M.parse(o.structuredContent),
        c = [],
        l = [...s.value];
    for (let e = 0; e < l.length; e++) {
        let t = j.parse(l[e]),
            n = t.display_name?.trim() || t.name.trim();
        n && c.push({
            id: t.id,
            display_name: n
        }), l.push(...t.sublabels ?? [])
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
    let a = await h.safePost(`/v2/connectors/{connector_id}/sharepoint/resolve_sites`, {
        authOption: d.Required,
        additionalHeaders: {
            ...f(e),
            [u]: p.ADMIN_SETTING
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
        sites: a.sites,
        results: a.results ?? []
    }
}
var O, k, A, j, M, N, P = e((() => {
    g(), m(), w(), i(), o(), l(), a(), s(), v(), O = {
        "x-openai-use-sheep": `1`
    }, new c({
        baseUrl: C(n)
    }), k = new c({
        baseUrl: n,
        targetRoutesAreCanonical: !0
    }), A = new c({
        baseUrl: n,
        targetRoutesAreCanonical: !0
    }), j = x({
        id: S(),
        name: S(),
        display_name: S().nullish(),
        sublabels: y(b()).optional()
    }), M = x({
        value: y(b())
    }), N = x({
        "openai/tool_error_kind": _(`connector_auth_required`),
        "openai/connector_auth": x({
            connector_id: S(),
            link_id: S().nullish()
        })
    })
}));
export {
    P as a, E as i, k as n, D as o, T as r, O as t
};
//# sourceMappingURL=a4c0593a-nzkmfm7ukls4q1r2.js.map