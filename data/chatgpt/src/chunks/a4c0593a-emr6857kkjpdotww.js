import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    Aat as r,
    Dat as i,
    SK as a,
    X7 as o,
    Yat as s,
    hat as c,
    jat as l,
    pat as u,
    tot as d,
    xK as f
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    FTn as p,
    PTn as m,
    _nt as h,
    gnt as g
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Vx as _,
    Xx as v,
    dS as y,
    gS as b,
    oS as x,
    yS as S
} from "./c2675c8c-jg3tpj8mw86wdc0g.js";

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
    let a = await g.safePost(`/mcp`, {
        authOption: i.Required,
        signal: r,
        preserveAccountIdOnRetry: !0,
        cache: `no-store`,
        additionalHeaders: {
            ...f(e),
            [u]: m.ADMIN_SETTING,
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
        throw e.success && e.data[`openai/connector_auth`].connector_id === t && e.data[`openai/connector_auth`].link_id === n ? new s(`/mcp`, 403, {
            detail: {
                error_data: {
                    action: `TRIGGER_REAUTHENTICATION`
                }
            }
        }, void 0, Error(`Sensitivity-label catalog requires reconnection`)) : Error(`Sensitivity-label catalog action failed`)
    }
    let c = M.parse(o.structuredContent),
        l = [],
        d = [...c.value];
    for (let e = 0; e < d.length; e++) {
        let t = j.parse(d[e]),
            n = t.display_name?.trim() || t.name.trim();
        n && l.push({
            id: t.id,
            display_name: n
        }), d.push(...t.sublabels ?? [])
    }
    return {
        labels: l
    }
}
async function D({
    workspaceId: e,
    connectorId: t,
    linkId: n,
    siteCollectionIds: r,
    siteUrls: a
}) {
    let o = await g.safePost(`/v2/connectors/{connector_id}/sharepoint/resolve_sites`, {
        authOption: i.Required,
        additionalHeaders: {
            ...f(e),
            [u]: m.ADMIN_SETTING
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
    p(), h(), w(), l(), d(), c(), n(), a(), _(), O = {
        "x-openai-use-sheep": `1`
    }, new o({
        baseUrl: C(r)
    }), k = new o({
        baseUrl: r,
        targetRoutesAreCanonical: !0
    }), A = new o({
        baseUrl: r,
        targetRoutesAreCanonical: !0
    }), j = y({
        id: b(),
        name: b(),
        display_name: b().nullish(),
        sublabels: v(S()).optional()
    }), M = y({
        value: v(S())
    }), N = y({
        "openai/tool_error_kind": x(`connector_auth_required`),
        "openai/connector_auth": y({
            connector_id: b(),
            link_id: b().nullish()
        })
    })
}));
export {
    P as a, E as i, k as n, D as o, T as r, O as t
};
//# sourceMappingURL=a4c0593a-emr6857kkjpdotww.js.map