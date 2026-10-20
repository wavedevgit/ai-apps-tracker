import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CK as n,
    F7 as r,
    Git as i,
    M7 as a,
    Tat as o,
    Uit as s,
    jat as c,
    oat as l,
    rat as u,
    sat as d,
    wK as f
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    _nt as p,
    iTn as m,
    rTn as h,
    vnt as g
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    BS as _,
    FS as v,
    GS as y,
    JS as b,
    TS as x,
    gS as S
} from "./c2675c8c-fpv9s4kvd412dyap.js";

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
    let a = await p.safePost(`/mcp`, {
        authOption: u.Required,
        signal: i,
        preserveAccountIdOnRetry: !0,
        cache: `no-store`,
        additionalHeaders: {
            ...n(e),
            [s]: h.ADMIN_SETTING,
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
    let c = a.result;
    if (c.isError) {
        let e = P.safeParse(c._meta);
        throw e.success && e.data[`openai/connector_auth`].connector_id === t && e.data[`openai/connector_auth`].link_id === r ? new o(`/mcp`, 403, {
            detail: {
                error_data: {
                    action: `TRIGGER_REAUTHENTICATION`
                }
            }
        }, void 0, Error(`Sensitivity-label catalog requires reconnection`)) : Error(`Sensitivity-label catalog action failed`)
    }
    let l = N.parse(c.structuredContent),
        d = [],
        f = [...l.value];
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
    let o = await p.safePost(`/v2/connectors/{connector_id}/sharepoint/resolve_sites`, {
        authOption: u.Required,
        additionalHeaders: {
            ...n(e),
            [s]: h.ADMIN_SETTING
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
    f(), m(), g(), w(), d(), i(), c(), r(), S(), O = {
        "x-openai-use-sheep": `1`
    }, k = new a({
        baseUrl: C(l)
    }), A = new a({
        baseUrl: l,
        targetRoutesAreCanonical: !0
    }), j = new a({
        baseUrl: l,
        targetRoutesAreCanonical: !0
    }), M = _({
        id: y(),
        name: y(),
        display_name: y().nullish(),
        sublabels: x(b()).optional()
    }), N = _({
        value: x(b())
    }), P = _({
        "openai/tool_error_kind": v(`connector_auth_required`),
        "openai/connector_auth": _({
            connector_id: y(),
            link_id: y().nullish()
        })
    })
}));
export {
    E as a, T as i, O as n, F as o, A as r, D as s, k as t
};
//# sourceMappingURL=a4c0593a-o49bad3ofjm9p7ee.js.map