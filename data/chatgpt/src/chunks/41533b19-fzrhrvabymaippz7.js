import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CK as t,
    Git as n,
    L7 as r,
    N7 as i,
    aat as a,
    lat as o,
    qit as s,
    wK as c
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    _nt as l,
    aTn as u,
    iTn as d,
    vnt as f
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    n as p,
    t as m
} from "./99a48954-b5oyjy59r8mv6u45.js";
import {
    I as h,
    U as g,
    n as _
} from "./60b9a399-kmuq5xdit676qhfd.js";
import {
    a as v,
    o as y,
    s as b
} from "./a4c0593a-d6z1lrokcz1j51np.js";
async function x({
    workspaceId: e,
    connectionId: n,
    signal: r
}) {
    let o = await i.safeGet(`/ca/v2/admin/connection_instance/{connection_id}`, {
        authOption: a.Required,
        additionalHeaders: t(e),
        preserveAccountIdOnRetry: !0,
        parameters: {
            path: {
                connection_id: n
            },
            query: {
                account_id: e
            }
        },
        signal: r
    });
    if (o.connection_config.knowledge_connector_type !== `google_drive_dwd` || o.connection_config.connection_config_id !== n || ![`active`, `partially_activated`].includes(o.connection_status)) throw Error(`The selected Google Drive sync connection is unavailable`);
    let s = async (o, s) => {
        r.throwIfAborted();
        let c = await i.safeGet(`/ca/v2/admin/connection_instance/{connection_id}/list_item_scopes`, {
            authOption: a.Required,
            additionalHeaders: t(e),
            preserveAccountIdOnRetry: !0,
            parameters: {
                path: {
                    connection_id: n
                },
                query: {
                    account_id: e,
                    object_type: `shared_drive`,
                    selection_filter: o,
                    page_token: s
                }
            },
            signal: r
        });
        if (c.object_type !== `shared_drive` || ![`include`, `exclude`].includes(c.default_selection) || !Array.isArray(c.object_selections) || c.object_selections.some(e => e.selection !== o || typeof e.object_handle != `string` || g(e.object_handle) !== e.object_handle) || c.page_token != null && (typeof c.page_token != `string` || c.page_token.length === 0)) throw Error(`Invalid shared-drive sync settings`);
        return c
    }, c = await s(`exclude`, null), l = c.default_selection, u = l === `include` ? `exclude` : `include`;
    u === `include` && (c = await s(u, null));
    let d = new Set,
        f = new Set;
    for (let e = 0; e <= C; e++) {
        if (r.throwIfAborted(), c.default_selection !== l) throw Error(`Shared-drive sync settings changed during import`);
        let e = d.size;
        for (let e of c.object_selections) d.add(e.object_handle);
        if (d.size > C) throw Error(`The shared-drive sync list exceeds the supported limit`);
        if (c.page_token == null) return {
            defaultSelection: l,
            driveIds: [...d]
        };
        if (f.has(c.page_token) || d.size === e) throw Error(`Shared-drive sync pagination did not advance`);
        f.add(c.page_token), c = await s(u, c.page_token)
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
        c(), h(), o(), r(), C = 12e4
    })),
    T, E, D, O, k, A = e((() => {
        p(), c(), u(), f(), o(), s(), w(), y(), T = ({
            workspaceId: e,
            connectionId: r
        }) => ({
            queryKey: [`connector-safety-selective-sync`, e, r],
            retry: !1,
            queryFn: ({
                signal: i
            }) => {
                if (!e) throw Error(`Workspace ID is required.`);
                return l.safeGet(`/v2/connection_instances/{connection_id}/selective_sync`, {
                    authOption: a.Required,
                    signal: i,
                    preserveAccountIdOnRetry: !0,
                    cache: `no-store`,
                    additionalHeaders: {
                        ...t(e),
                        [n]: d.ADMIN_SETTING
                    },
                    parameters: {
                        path: {
                            connection_id: r
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
            } : await v({
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
//# sourceMappingURL=41533b19-fzrhrvabymaippz7.js.map