import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Bm as n,
    F5 as r,
    J7 as i,
    Q7 as a,
    R8 as o,
    Up as s,
    k8 as c,
    xi as l
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    D9t as u,
    GNt as d,
    UNt as f
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    n as p,
    t as m
} from "./3dcf3d3b-eddg2zpmlt2a8vo3.js";
import {
    i as h,
    n as g
} from "./560eefd0-cyih479q7h2jdob0.js";
var _, v = e((() => {
    c(), d(), _ = o(e => t(() => f().getSessionSnapshot(e) ?? null, e => f().subscribe(e), {
        name: `libraryBackedDocumentSession:${e}`
    }))
}));
async function y(e) {
    let t = await i.safePatch(`/files/library/files/{library_file_id}`, {
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
    return l(), {
        fileId: t.file_id,
        libraryFileId: t.id,
        fileName: t.file_name,
        mimeType: t.mime_type || e.mimeType || n(t.file_name),
        versionNumber: typeof t.current_version_number == `number` ? t.current_version_number : null,
        originConversationId: typeof t.origination_thread_id == `string` ? t.origination_thread_id : null,
        libraryArtifactType: typeof t.library_artifact_type == `string` ? t.library_artifact_type : null
    }
}
var b = e((() => {
    u(), a(), s()
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
    let l = f(),
        u = null;
    return await l.enqueueSave({
        libraryFileId: i,
        save: async () => {
            if (r(() => p(i))) return;
            let d = l.beginSave({
                libraryFileId: i,
                content: e
            });
            if (d == null) return;
            let f = new AbortController,
                m = window.setTimeout(() => {
                    f.abort()
                }, S),
                g = await (s ?? y)({
                    libraryFileId: i,
                    mimeType: a,
                    content: e,
                    expectedCurrentVersion: c ? d.expectedCurrentVersion : void 0,
                    fileName: n,
                    abortSignal: f.signal
                }).catch(e => {
                    throw window.clearTimeout(m), l.completeSaveError({
                        libraryFileId: i,
                        saveSequence: d.saveSequence
                    }), h({
                        error: e,
                        fileId: t,
                        libraryFileId: i,
                        queryClient: o
                    }), e
                });
            window.clearTimeout(m), u = {
                completedSession: l.completeSaveSuccess({
                    libraryFileId: i,
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
    m(), c(), b(), d(), g(), S = 3e4
}));
export {
    _ as i, x as n, v as r, C as t
};
//# sourceMappingURL=2f7309c2-bpmn7zf95xu6rwoa.js.map