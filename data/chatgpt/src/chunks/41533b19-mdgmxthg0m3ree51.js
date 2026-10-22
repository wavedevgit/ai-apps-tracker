import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aat as t,
    Eat as n,
    J7 as r,
    Q7 as i,
    SK as a,
    fat as o,
    mat as s,
    xK as c
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    FTn as l,
    PTn as u,
    _nt as d,
    gnt as f
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    n as p,
    t as m
} from "./99a48954-c3chku9kaz5xncgc.js";
import {
    I as h,
    U as g,
    n as _
} from "./60b9a399-leuoi101dsnjc4xl.js";
import {
    a as v,
    i as y,
    o as b
} from "./a4c0593a-h1af7e9fjmio3f73.js";
async function x({
    workspaceId: e,
    connectionId: t,
    signal: i
}) {
    let a = await r.safeGet(`/ca/v2/admin/connection_instance/{connection_id}`, {
        authOption: n.Required,
        additionalHeaders: c(e),
        preserveAccountIdOnRetry: !0,
        parameters: {
            path: {
                connection_id: t
            },
            query: {
                account_id: e
            }
        },
        signal: i
    });
    if (a.connection_config.knowledge_connector_type !== `google_drive_dwd` || a.connection_config.connection_config_id !== t || ![`active`, `partially_activated`].includes(a.connection_status)) throw Error(`The selected Google Drive sync connection is unavailable`);
    let o = async (a, o) => {
        i.throwIfAborted();
        let s = await r.safeGet(`/ca/v2/admin/connection_instance/{connection_id}/list_item_scopes`, {
            authOption: n.Required,
            additionalHeaders: c(e),
            preserveAccountIdOnRetry: !0,
            parameters: {
                path: {
                    connection_id: t
                },
                query: {
                    account_id: e,
                    object_type: `shared_drive`,
                    selection_filter: a,
                    page_token: o
                }
            },
            signal: i
        });
        if (s.object_type !== `shared_drive` || ![`include`, `exclude`].includes(s.default_selection) || !Array.isArray(s.object_selections) || s.object_selections.some(e => e.selection !== a || typeof e.object_handle != `string` || g(e.object_handle) !== e.object_handle) || s.page_token != null && (typeof s.page_token != `string` || s.page_token.length === 0)) throw Error(`Invalid shared-drive sync settings`);
        return s
    }, s = await o(`exclude`, null), l = s.default_selection, u = l === `include` ? `exclude` : `include`;
    u === `include` && (s = await o(u, null));
    let d = new Set,
        f = new Set;
    for (let e = 0; e <= C; e++) {
        if (i.throwIfAborted(), s.default_selection !== l) throw Error(`Shared-drive sync settings changed during import`);
        let e = d.size;
        for (let e of s.object_selections) d.add(e.object_handle);
        if (d.size > C) throw Error(`The shared-drive sync list exceeds the supported limit`);
        if (s.page_token == null) return {
            defaultSelection: l,
            driveIds: [...d]
        };
        if (f.has(s.page_token) || d.size === e) throw Error(`Shared-drive sync pagination did not advance`);
        f.add(s.page_token), s = await o(u, s.page_token)
    }
    throw Error(`The shared-drive sync list could not be read completely`)
}

function S({
    policy: e,
    maxEntries: t,
    supportsDenyList: n,
    denyListWritesEnabled: r,
    currentControls: i,
    persistedControls: a,
    enabledControlIds: o
}) {
    let s = e.defaultSelection === `include`,
        c = s && e.driveIds.length === 0,
        l = i?.google_drive_access_policy ?? {},
        u = a?.google_drive_access_policy ?? {},
        d = u.deny_list,
        f = e.driveIds.some(e => typeof d != `object` || !d || !Object.hasOwn(d, e));
    if (!o.has(`google_drive_access_policy`) || !n && Object.hasOwn(l, `deny_list`) || s && !c && (!n || !r && (!Object.hasOwn(u, `deny_list`) || f))) return {
        controls: {},
        changes: [],
        unsupported: [],
        mergeError: `drive_unavailable`
    };
    if (e.driveIds.length > t) return {
        controls: {},
        changes: [],
        unsupported: [],
        mergeError: `drive_limit`
    };
    let p = Object.fromEntries(e.driveIds.map(e => [e, {
        type: `drive`
    }]));
    return {
        controls: {
            [_]: {
                allow_list: s ? null : p,
                ...n && (s && !c || Object.hasOwn(l, `deny_list`)) ? {
                    deny_list: s && !c ? p : null
                } : {}
            }
        },
        changes: [{
            kind: `drives`,
            entries: e.driveIds.map(e => ({
                id: e,
                name: null
            })),
            mode: c ? `all` : s ? `deny` : `allow`
        }],
        unsupported: []
    }
}
var C, w = e((() => {
        a(), h(), t(), i(), C = 12e4
    })),
    T, E, D, O, k, A = e((() => {
        p(), a(), l(), d(), t(), s(), w(), v(), T = ({
            workspaceId: e,
            connectionId: t
        }) => ({
            queryKey: [`connector-safety-selective-sync`, e, t],
            retry: !1,
            queryFn: ({
                signal: r
            }) => {
                if (!e) throw Error(`Workspace ID is required.`);
                return f.safeGet(`/v2/connection_instances/{connection_id}/selective_sync`, {
                    authOption: n.Required,
                    signal: r,
                    preserveAccountIdOnRetry: !0,
                    cache: `no-store`,
                    additionalHeaders: {
                        ...c(e),
                        [o]: u.ADMIN_SETTING
                    },
                    parameters: {
                        path: {
                            connection_id: t
                        }
                    }
                })
            }
        }), E = ({
            workspaceId: e,
            connectionId: t,
            service: n,
            actorId: r,
            getMergeQueryOptions: i = T
        }) => ({
            queryKey: [`connector-safety-sync-import`, e, r, n, t],
            retry: !1,
            queryFn: async ({
                signal: r
            }) => n === `google_drive` ? {
                kind: `google_drive`,
                policy: await x({
                    workspaceId: e,
                    connectionId: t,
                    signal: r
                })
            } : {
                kind: `merge`,
                response: await i({
                    workspaceId: e,
                    connectionId: t
                }).queryFn({
                    signal: r
                })
            }
        }), D = ({
            workspaceId: e,
            connectorId: t,
            linkId: n
        }) => ({
            queryKey: [`microsoft-sensitivity-label-metadata`, e, t, n],
            retry: !1,
            queryFn: async ({
                signal: r
            }) => !e || !n ? {
                labels: []
            } : await y({
                workspaceId: e,
                connectorId: t,
                linkId: n,
                signal: r
            })
        }), O = ({
            workspaceId: e,
            connectorId: t,
            linkId: n,
            siteCollectionIds: r
        }) => ({
            queryKey: [`sharepoint-site-collection-metadata`, e, t, n, r],
            staleTime: 300 * 1e3,
            retry: !1,
            queryFn: async () => !e || !n ? {
                sites: [],
                results: []
            } : await b({
                workspaceId: e,
                connectorId: t,
                linkId: n,
                siteCollectionIds: r
            })
        }), k = ({
            workspaceId: e,
            connectorId: t,
            transport: n,
            actorId: r
        }) => m({
            queryKeyPrefix: `connector-workspace-permissions`,
            workspaceId: e,
            connectorId: t,
            includeAdminOnly: !0,
            enabled: !!(e && t),
            transport: n,
            actorId: r
        })
    }));
export {
    O as a, S as c, D as i, k as n, A as o, E as r, w as s, T as t
};
//# sourceMappingURL=41533b19-mdgmxthg0m3ree51.js.map