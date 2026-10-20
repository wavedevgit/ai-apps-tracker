import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C8 as t,
    L7 as n,
    N7 as r,
    Rm as i,
    Vp as a,
    b5 as o,
    bi as s,
    h8 as c,
    m8 as l
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    A9t as u,
    KNt as d,
    WNt as f
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    n as p,
    t as m
} from "./3dcf3d3b-nsrfeuaceqhi0459.js";
import {
    i as h,
    n as g
} from "./560eefd0-mofqkq9prvjmkcal.js";
var _, v = e((() => {
    l(), d(), _ = t(e => c(() => f().getSessionSnapshot(e) ?? null, e => f().subscribe(e), {
        name: `libraryBackedDocumentSession:${e}`
    }))
}));
async function y(e) {
    let t = await r.safePatch(`/files/library/files/{library_file_id}`, {
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
        mimeType: t.mime_type || e.mimeType || i(t.file_name),
        versionNumber: typeof t.current_version_number == `number` ? t.current_version_number : null,
        originConversationId: typeof t.origination_thread_id == `string` ? t.origination_thread_id : null,
        libraryArtifactType: typeof t.library_artifact_type == `string` ? t.library_artifact_type : null
    }
}
var b = e((() => {
    u(), n(), a()
}));
async function x({
    content: e,
    contentFileId: t,
    fileName: n,
    libraryFileId: r,
    mimeType: i,
    queryClient: a,
    updateLibraryTextFileOverride: s,
    useOptimisticLock: c = !1
}) {
    let l = f(),
        u = null;
    return await l.enqueueSave({
        libraryFileId: r,
        save: async () => {
            if (o(() => p(r))) return;
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
                    mimeType: i,
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
                        queryClient: a
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
    m(), l(), b(), d(), g(), S = 3e4
}));
export {
    _ as i, x as n, v as r, C as t
};
//# sourceMappingURL=2f7309c2-h8p9n1djg46jwwj1.js.map