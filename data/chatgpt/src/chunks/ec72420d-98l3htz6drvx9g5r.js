import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F7 as t,
    Mst as n,
    oct as r,
    z7 as i
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Zy as a,
    eg as o,
    ng as s,
    rg as c,
    sb as l
} from "./8b34dbc2-ba6wt3zxvh7jce7p.js";

function u(e, t, n) {
    if (typeof e == `string` && e.trim().length > 0) return e;
    throw Error(`Library file ${n} returned an invalid ${t} field.`)
}

function d(e) {
    return typeof e == `string` ? e : null
}

function f(e, t, n) {
    if (typeof e == `number` && Number.isInteger(e)) return e;
    throw Error(`Library file ${n} returned an invalid ${t} field.`)
}

function p(e) {
    return typeof e == `number` && Number.isInteger(e) ? e : null
}

function m(e, t, n) {
    if (typeof e == `boolean`) return e;
    throw Error(`Library file ${n} returned an invalid ${t} field.`)
}

function h(e) {
    switch (e) {
        case `create`:
        case `edit`:
        case `restore`:
            return e;
        default:
            return null
    }
}

function g(e) {
    switch (e) {
        case `user`:
        case `agent`:
            return e;
        default:
            return null
    }
}

function _(e) {
    if (typeof e != `object` || !e) return {
        action: `edit`,
        actor: `user`,
        reason: null
    };
    let t = e,
        n = d(t.actor_id),
        r = d(t.actor_email),
        i = d(t.actor_display_name);
    return {
        action: h(t.action) ?? `edit`,
        actor: g(t.actor) ?? `user`,
        ...n == null ? {} : {
            actorId: n
        },
        ...r == null ? {} : {
            actorEmail: r
        },
        ...i == null ? {} : {
            actorDisplayName: i
        },
        reason: d(t.reason)
    }
}

function v(e, t) {
    if (typeof e != `object` || !e) throw Error(`Library file ${t} returned an invalid version payload.`);
    let n = e,
        r = f(n.version_number, `version_number`, t),
        i = d(n.version_created_at) ?? u(n.file_upload_time, `file_upload_time`, t),
        a = _(n.version_provenance);
    return {
        id: `version-${r}`,
        fileId: u(n.file_id, `file_id`, t),
        fileName: u(n.file_name, `file_name`, t),
        mimeType: d(n.mime_type),
        sizeBytes: p(n.file_size_bytes),
        gizmoId: d(n.gizmo_id),
        versionNumber: r,
        createdAt: i,
        isCurrent: m(n.is_current, `is_current`, t),
        action: a.action,
        actor: a.actor,
        ...a.actorId == null ? {} : {
            actorId: a.actorId
        },
        ...a.actorEmail == null ? {} : {
            actorEmail: a.actorEmail
        },
        ...a.actorDisplayName == null ? {} : {
            actorDisplayName: a.actorDisplayName
        },
        reason: a.reason,
        sourceVersionNumber: p(n.source_version_number)
    }
}

function y(e, t) {
    if (typeof e != `object` || !e) throw Error(`Library file ${t} returned an invalid versions payload.`);
    let n = e;
    if (!Array.isArray(n.items)) throw Error(`Library file ${t} returned an invalid versions payload.`);
    return {
        items: n.items.map(e => v(e, t)),
        cursor: d(n.cursor)
    }
}

function b(e, t, n) {
    if (typeof e != `object` || !e) throw Error(`Library file ${t} returned an invalid restore payload.`);
    return {
        fileId: t,
        currentVersionNumber: p(e.current_version_number) ?? n,
        restoredVersionNumber: n
    }
}

function x(e, t, n) {
    if (typeof e != `object` || !e) throw Error(`Library file ${t} returned an invalid update payload.`);
    let r = e;
    return {
        fileId: d(r.id) ?? u(r.id, `id`, t),
        currentVersionNumber: p(r.current_version_number) ?? n ?? 0
    }
}
async function S({
    sourceFile: e
}) {
    return new Promise((t, r) => {
        c(o(e), e, null, null, {
            kind: n.MyFiles
        }, {
            onFileCreated: () => {},
            onFileUploadProgress: () => {},
            onFileUploaded: (e, n) => {
                t(n)
            },
            onError: (e, t) => {
                r(Error(`Failed to upload replacement file with reason: ${t}`))
            }
        }, {
            entrySurface: `file_preview`,
            selectionMethod: `file_picker`,
            storeInLibrary: !1,
            uploadSource: `file_version_history_testing_harness`,
            isTemporaryChat: !1,
            isProjectThread: !1
        })
    })
}
async function C({
    fileId: e,
    cursor: n,
    limit: r
}) {
    try {
        let i = y(await t.safeGet(`/files/library/files/{library_file_id}/versions`, {
            parameters: {
                path: {
                    library_file_id: e
                },
                query: {
                    cursor: n ?? void 0,
                    limit: r
                }
            }
        }), e);
        return a({
            success: !0,
            itemCount: i.items.length
        }), i
    } catch (e) {
        throw a({
            success: !1
        }), e
    }
}
async function w({
    fileId: e,
    versionNumber: t
}) {
    let n = null;
    for (;;) {
        let r = await C({
                fileId: e,
                cursor: n,
                limit: 100
            }),
            i = r.items.find(e => e.versionNumber === t) ?? null;
        if (i != null || r.cursor == null) return i;
        n = r.cursor
    }
}
async function T({
    fileId: e,
    sourceFile: n,
    expectedCurrentVersion: r,
    versionReason: i
}) {
    let a = {
        source_file_id: await S({
            sourceFile: n
        }),
        ...r == null ? {} : {
            expected_current_version: r
        },
        ...i == null ? {} : {
            version_reason: i
        }
    };
    return x(await t.safePatch(`/files/library/files/{library_file_id}`, {
        parameters: {
            path: {
                library_file_id: e
            }
        },
        requestBody: a
    }), e, r == null ? null : r + 1)
}
async function E({
    fileId: e,
    versionNumber: n,
    expectedCurrentVersion: r,
    versionReason: i
}) {
    let a = {
        ...r == null ? {} : {
            expected_current_version: r
        },
        ...i == null ? {} : {
            version_reason: i
        }
    };
    return b(await t.safePost(`/files/library/files/{library_file_id}/versions/{version_number}/restore`, {
        parameters: {
            path: {
                library_file_id: e,
                version_number: n
            }
        },
        ...Object.keys(a).length > 0 ? {
            requestBody: a
        } : {}
    }), e, n)
}
var D = e((() => {
    r(), s(), l(), i()
}));
export {
    E as a, C as i, w as n, D as r, T as t
};
//# sourceMappingURL=ec72420d-98l3htz6drvx9g5r.js.map