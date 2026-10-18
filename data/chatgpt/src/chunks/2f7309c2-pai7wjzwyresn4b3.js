import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    Cp as n,
    K8 as r,
    V6 as i,
    Y6 as a,
    a7 as o,
    bi as s,
    bm as c,
    l7 as l
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    HNt as u,
    WNt as d,
    v9t as f
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as p,
    t as m
} from "./3dcf3d3b-g5o24tflpbs5pxfo.js";
import {
    i as h,
    n as g
} from "./560eefd0-dsjkwwdx4281qp6m.js";
var _, v = e((() => {
    t(), d(), _ = a(e => i(() => u().getSessionSnapshot(e) ?? null, e => u().subscribe(e), {
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
    return s(), {
        fileId: t.file_id,
        libraryFileId: t.id,
        fileName: t.file_name,
        mimeType: t.mime_type || e.mimeType || c(t.file_name),
        versionNumber: typeof t.current_version_number == `number` ? t.current_version_number : null,
        originConversationId: typeof t.origination_thread_id == `string` ? t.origination_thread_id : null,
        libraryArtifactType: typeof t.library_artifact_type == `string` ? t.library_artifact_type : null
    }
}
var b = e((() => {
    f(), l(), n()
}));
async function x({
    content: e,
    contentFileId: t,
    fileName: n,
    libraryFileId: i,
    mimeType: a,
    queryClient: o,
    updateLibraryTextFileOverride: s,
    useOptimisticLock: c = !1
}) {
    let l = u(),
        d = null;
    return await l.enqueueSave({
        libraryFileId: i,
        save: async () => {
            if (r(() => p(i))) return;
            let u = l.beginSave({
                libraryFileId: i,
                content: e
            });
            if (u == null) return;
            let f = new AbortController,
                m = window.setTimeout(() => {
                    f.abort()
                }, S),
                g = await (s ?? y)({
                    libraryFileId: i,
                    mimeType: a,
                    content: e,
                    expectedCurrentVersion: c ? u.expectedCurrentVersion : void 0,
                    fileName: n,
                    abortSignal: f.signal
                }).catch(e => {
                    throw window.clearTimeout(m), l.completeSaveError({
                        libraryFileId: i,
                        saveSequence: u.saveSequence
                    }), h({
                        error: e,
                        fileId: t,
                        libraryFileId: i,
                        queryClient: o
                    }), e
                });
            window.clearTimeout(m), d = {
                completedSession: l.completeSaveSuccess({
                    libraryFileId: i,
                    saveSequence: u.saveSequence,
                    submittedContent: e,
                    fileId: g.fileId,
                    versionNumber: g.versionNumber
                }),
                result: g,
                submittedContent: e
            }
        }
    }), d
}
var S, C = e((() => {
    m(), t(), b(), d(), g(), S = 3e4
}));
export {
    _ as i, x as n, v as r, C as t
};
//# sourceMappingURL=2f7309c2-pai7wjzwyresn4b3.js.map