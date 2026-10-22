import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    A8 as n,
    Bm as r,
    I5 as i,
    Up as a,
    Y7 as o,
    j8 as s,
    xi as c,
    z8 as l
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    GNt as u,
    L9t as d,
    UNt as f
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    n as p,
    t as m
} from "./3dcf3d3b-ok44haa58cfmzq1p.js";
import {
    i as h,
    n as g
} from "./560eefd0-ha8e59282cv0m22n.js";
var _, v = e((() => {
    n(), u(), _ = l(e => s(() => f().getSessionSnapshot(e) ?? null, e => f().subscribe(e), {
        name: `libraryBackedDocumentSession:${e}`
    }))
}));
async function y(e) {
    let t = await o.safePatch(`/files/library/files/{library_file_id}`, {
        parameters: {
            path: {
                library_file_id: e.libraryFileId
            }
        },
        requestBody: {
            ...e.fileName == null ? {} : {
                file_name: e.fileName
            },
            inline_content: e.content,
            ...e.expectedCurrentVersion == null ? {} : {
                expected_current_version: e.expectedCurrentVersion
            }
        },
        signal: e.abortSignal
    });
    return c(), {
        fileId: t.file_id,
        libraryFileId: t.id,
        fileName: t.file_name,
        mimeType: t.mime_type || e.mimeType || r(t.file_name),
        versionNumber: typeof t.current_version_number == `number` ? t.current_version_number : null,
        originConversationId: typeof t.origination_thread_id == `string` ? t.origination_thread_id : null,
        libraryArtifactType: typeof t.library_artifact_type == `string` ? t.library_artifact_type : null
    }
}
var b = e((() => {
    d(), t(), a()
}));
async function x({
    content: e,
    contentFileId: t,
    fileName: n,
    libraryFileId: r,
    mimeType: a,
    queryClient: o,
    updateLibraryTextFileOverride: s,
    useOptimisticLock: c = !1
}) {
    let l = f(),
        u = null;
    return await l.enqueueSave({
        libraryFileId: r,
        save: async () => {
            if (i(() => p(r))) return;
            let d = l.beginSave({
                libraryFileId: r,
                content: e
            });
            if (d == null) return;
            let f = new AbortController,
                m = window.setTimeout(() => {
                    f.abort()
                }, S),
                g = await (s ?? y)({
                    libraryFileId: r,
                    mimeType: a,
                    content: e,
                    expectedCurrentVersion: c ? d.expectedCurrentVersion : void 0,
                    fileName: n,
                    abortSignal: f.signal
                }).catch(e => {
                    throw window.clearTimeout(m), l.completeSaveError({
                        libraryFileId: r,
                        saveSequence: d.saveSequence
                    }), h({
                        error: e,
                        fileId: t,
                        libraryFileId: r,
                        queryClient: o
                    }), e
                });
            window.clearTimeout(m), u = {
                completedSession: l.completeSaveSuccess({
                    libraryFileId: r,
                    saveSequence: d.saveSequence,
                    submittedContent: e,
                    fileId: g.fileId,
                    versionNumber: g.versionNumber
                }),
                result: g,
                submittedContent: e
            }
        }
    }), u
}
var S, C = e((() => {
    m(), n(), b(), u(), g(), S = 3e4
}));
export {
    _ as i, x as n, v as r, C as t
};
//# sourceMappingURL=2f7309c2-mdik8yqva699umud.js.map