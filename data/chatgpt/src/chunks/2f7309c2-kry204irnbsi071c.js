import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Hp as t,
    P7 as n,
    R7 as r,
    bi as i,
    g8 as a,
    h8 as o,
    w8 as s,
    x5 as c,
    zm as l
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    YNt as u,
    j9t as d,
    qNt as f
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    n as p,
    t as m
} from "./3dcf3d3b-m9girfky08mett6w.js";
import {
    i as h,
    n as g
} from "./560eefd0-er495qv49u7e31py.js";
var _, v = e((() => {
    o(), u(), _ = s(e => a(() => f().getSessionSnapshot(e) ?? null, e => f().subscribe(e), {
        name: `libraryBackedDocumentSession:${e}`
    }))
}));
async function y(e) {
    let t = await n.safePatch(`/files/library/files/{library_file_id}`, {
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
    return i(), {
        fileId: t.file_id,
        libraryFileId: t.id,
        fileName: t.file_name,
        mimeType: t.mime_type || e.mimeType || l(t.file_name),
        versionNumber: typeof t.current_version_number == `number` ? t.current_version_number : null,
        originConversationId: typeof t.origination_thread_id == `string` ? t.origination_thread_id : null,
        libraryArtifactType: typeof t.library_artifact_type == `string` ? t.library_artifact_type : null
    }
}
var b = e((() => {
    d(), r(), t()
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
    let l = f(),
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
    m(), o(), b(), u(), g(), S = 3e4
}));
export {
    _ as i, x as n, v as r, C as t
};
//# sourceMappingURL=2f7309c2-kry204irnbsi071c.js.map