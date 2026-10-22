import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J7 as t,
    Oat as n,
    Q7 as r,
    SK as i,
    fat as a,
    uat as o,
    wat as s,
    xK as c
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    gTn as l,
    gnt as u,
    hTn as d,
    hnt as f
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    n as p,
    t as m
} from "./99a48954-nkc0eri7c9f69gvz.js";
import {
    I as h,
    U as g,
    n as _
} from "./60b9a399-kkpvg5qi36oi3o4u.js";
import {
    a as v,
    i as y,
    o as b
} from "./a4c0593a-foatxug3fj9ro41f.js";
async function x({
    workspaceId: e,
    connectionId: n,
    signal: r
}) {
    let i = await t.safeGet(`/ca/v2/admin/connection_instance/{connection_id}`, {
        authOption: s.Required,
        additionalHeaders: c(e),
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
    if (i.connection_config.knowledge_connector_type !== `google_drive_dwd` || i.connection_config.connection_config_id !== n || ![`active`, `partially_activated`].includes(i.connection_status)) throw Error(`The selected Google Drive sync connection is unavailable`);
    let a = async (i, a) => {
        r.throwIfAborted();
        let o = await t.safeGet(`/ca/v2/admin/connection_instance/{connection_id}/list_item_scopes`, {
            authOption: s.Required,
            additionalHeaders: c(e),
            preserveAccountIdOnRetry: !0,
            parameters: {
                path: {
                    connection_id: n
                },
                query: {
                    account_id: e,
                    object_type: `shared_drive`,
                    selection_filter: i,
                    page_token: a
                }
            },
            signal: r
        });
        if (o.object_type !== `shared_drive` || ![`include`, `exclude`].includes(o.default_selection) || !Array.isArray(o.object_selections) || o.object_selections.some(e => e.selection !== i || typeof e.object_handle != `string` || g(e.object_handle) !== e.object_handle) || o.page_token != null && (typeof o.page_token != `string` || o.page_token.length === 0)) throw Error(`Invalid shared-drive sync settings`);
        return o
    }, o = await a(`exclude`, null), l = o.default_selection, u = l === `include` ? `exclude` : `include`;
    u === `include` && (o = await a(u, null));
    let d = new Set,
        f = new Set;
    for (let e = 0; e <= C; e++) {
        if (r.throwIfAborted(), o.default_selection !== l) throw Error(`Shared-drive sync settings changed during import`);
        let e = d.size;
        for (let e of o.object_selections) d.add(e.object_handle);
        if (d.size > C) throw Error(`The shared-drive sync list exceeds the supported limit`);
        if (o.page_token == null) return {
            defaultSelection: l,
            driveIds: [...d]
        };
        if (f.has(o.page_token) || d.size === e) throw Error(`Shared-drive sync pagination did not advance`);
        f.add(o.page_token), o = await a(u, o.page_token)
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
        i(), h(), n(), r(), C = 12e4
    })),
    T, E, D, O, k, A = e((() => {
        p(), i(), l(), u(), n(), a(), w(), v(), T = ({
            workspaceId: e,
            connectionId: t
        }) => ({
            queryKey: [`connector-safety-selective-sync`, e, t],
            retry: !1,
            queryFn: ({
                signal: n
            }) => {
                if (!e) throw Error(`Workspace ID is required.`);
                return f.safeGet(`/v2/connection_instances/{connection_id}/selective_sync`, {
                    authOption: s.Required,
                    signal: n,
                    preserveAccountIdOnRetry: !0,
                    cache: `no-store`,
                    additionalHeaders: {
                        ...c(e),
                        [o]: d.ADMIN_SETTING
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
//# sourceMappingURL=41533b19-l6hhmk9m7gih6exg.js.map