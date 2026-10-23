import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Bm as n,
    I7 as r,
    M7 as i,
    Up as a,
    j8 as o,
    xi as s,
    y5 as c,
    z8 as l
} from "./4813494d-mdvd4786a87166cc.js";
import {
    B9t as u,
    BNt as d,
    HNt as f
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    n as p,
    t as m
} from "./3dcf3d3b-fh6pwdwtoafskdvs.js";
import {
    i as h,
    n as g
} from "./560eefd0-dtbifflyfran362i.js";
var _, v = e((() => {
    t(), f(), _ = l(e => o(() => d().getSessionSnapshot(e) ?? null, e => d().subscribe(e), {
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
    return s(), {
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
    u(), r(), a()
}));
async function x({
    content: e,
    contentFileId: t,
    fileName: n,
    libraryFileId: r,
    mimeType: i,
    queryClient: a,
    updateLibraryTextFileOverride: o,
    useOptimisticLock: s = !1
}) {
    let l = d(),
        u = null;
    return await l.enqueueSave({
        libraryFileId: r,
        save: async () => {
            if (c(() => p(r))) return;
            let d = l.beginSave({
                libraryFileId: r,
                content: e
            });
            if (d == null) return;
            let f = new AbortController,
                m = window.setTimeout(() => {
                    f.abort()
                }, S),
                g = await (o ?? y)({
                    libraryFileId: r,
                    mimeType: i,
                    content: e,
                    expectedCurrentVersion: s ? d.expectedCurrentVersion : void 0,
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
    m(), t(), b(), f(), g(), S = 3e4
}));
export {
    _ as i, x as n, v as r, C as t
};
//# sourceMappingURL=2f7309c2-b1jsidc0z0hv3dt4.js.map