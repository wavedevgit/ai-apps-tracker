import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cp as t,
    a7 as n,
    bm as r,
    l7 as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    DEt as a,
    EEt as o,
    OEt as s,
    TEt as c
} from "./conversation-small-fym1zmu9zimymmm1.js";

function l(e, t) {
    if (Number.isSafeInteger(e) && e >= 0) return e;
    throw Error(`Shared Library file returned an invalid ${t}.`)
}

function u(e) {
    if (e === `habitat` || e === `sediment`) return e;
    throw Error(`Shared Library file returned an invalid content_backing_kind.`)
}
async function d(e, t) {
    let r = await n.safeGet(`/files/library/shared/files/{library_file_id}/access`, {
        ...o(e, t),
        parameters: {
            path: {
                library_file_id: e.libraryFileId
            }
        }
    });
    if (c(e), r.library_file_id !== e.libraryFileId || typeof r.can_edit != `boolean`) throw Error(`Shared Library access returned a different file.`);
    return {
        libraryFileId: r.library_file_id,
        currentVersion: l(r.current_version, `current_version`),
        contentBackingKind: u(r.content_backing_kind),
        canEdit: r.can_edit
    }
}
async function f(e, t) {
    for (let n = 0; n < g; n++) {
        let n = await d(e, t);
        if (!n.canEdit) throw new _;
        let r = await s(e, t),
            i = await d(e, t);
        if (!i.canEdit) throw new _;
        if (n.currentVersion === i.currentVersion && n.contentBackingKind === i.contentBackingKind && (r.source === `legacy` || r.currentVersion === i.currentVersion && r.contentBackingKind === i.contentBackingKind)) return {
            ...i,
            canEdit: !0,
            content: r.content
        }
    }
    throw Error(`The shared document changed while it was being loaded.`)
}

function p(e, {
    contentBackingKind: t,
    expectedLibraryFileId: n,
    fileName: i,
    libraryArtifactType: a = null,
    mimeType: o
}) {
    let s = e.id;
    if (s !== n) throw Error(`Shared Library update returned a different file.`);
    return {
        fileId: s,
        libraryFileId: s,
        contentBackingKind: t,
        fileName: i,
        mimeType: o || r(i),
        versionNumber: l(e.current_version_number, `current_version_number`),
        originConversationId: null,
        libraryArtifactType: a
    }
}
async function m(e) {
    if (e.expectedCurrentVersion == null) throw Error(`Shared Library saves require an expected file version.`);
    let t = e.fileName;
    if (t == null || t.length === 0) throw Error(`Shared Library saves require a file name.`);
    let i = u(e.contentBackingKind),
        a = l(e.expectedCurrentVersion, `expected_current_version`);
    return i === `sediment` ? h({
        abortSignal: e.abortSignal,
        contentBackingKind: i,
        expectedCurrentVersion: a,
        fileName: t,
        libraryArtifactType: e.libraryArtifactType,
        libraryFileId: e.libraryFileId,
        sourceFile: new File([e.content], t, {
            type: e.mimeType || r(t)
        })
    }) : p(await n.safePatch(`/files/library/shared/files/{library_file_id}`, {
        parameters: {
            path: {
                library_file_id: e.libraryFileId
            }
        },
        requestBody: {
            inline_content: e.content,
            expected_current_version: a
        },
        signal: e.abortSignal
    }), {
        contentBackingKind: i,
        expectedLibraryFileId: e.libraryFileId,
        fileName: t,
        libraryArtifactType: e.libraryArtifactType,
        mimeType: e.mimeType
    })
}
async function h({
    abortSignal: e,
    contentBackingKind: t,
    expectedCurrentVersion: r,
    fileName: i,
    libraryArtifactType: a,
    libraryFileId: o,
    sourceFile: s,
    versionReason: c
}) {
    let d = u(t),
        f = l(r, `expected_current_version`);
    if (d === `habitat`) return p(await n.safePatch(`/files/library/shared/files/{library_file_id}`, {
        parameters: {
            path: {
                library_file_id: o
            }
        },
        requestBody: {
            inline_content: await s.text(),
            expected_current_version: f,
            ...c == null ? {} : {
                version_reason: c
            }
        },
        signal: e
    }), {
        contentBackingKind: d,
        expectedLibraryFileId: o,
        fileName: i ?? s.name,
        libraryArtifactType: a
    });
    let m = new FormData;
    m.append(`file`, s);
    let h = (await n.safePost(`/files/library/shared/files/{library_file_id}/upload`, {
        parameters: {
            path: {
                library_file_id: o
            }
        },
        requestBody: m,
        signal: e
    })).source_file_id;
    return p(await n.safePatch(`/files/library/shared/files/{library_file_id}`, {
        parameters: {
            path: {
                library_file_id: o
            }
        },
        requestBody: {
            source_file_id: h,
            expected_current_version: f,
            ...c == null ? {} : {
                version_reason: c
            }
        },
        signal: e
    }), {
        contentBackingKind: d,
        expectedLibraryFileId: o,
        fileName: i ?? s.name,
        libraryArtifactType: a,
        mimeType: s.type
    })
}
var g, _, v = e((() => {
    t(), a(), i(), g = 3, _ = class extends Error {
        constructor() {
            super(`Editor access is required to edit this shared document.`), this.name = `SharedLibraryEditAccessRevokedError`
        }
    }
}));
export {
    h as a, v as i, d as n, m as o, f as r, _ as t
};
//# sourceMappingURL=0f4877ff-cqntrc0ca1a51yfr.js.map