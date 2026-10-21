import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as n,
    dF as r,
    n2 as i,
    pF as a
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    $9t as o,
    FPt as s,
    GIn as c,
    IPt as l,
    JIn as u,
    KIn as d,
    MDt as f,
    Q9t as p,
    QDt as m,
    RPt as h,
    SNn as g,
    YDt as ee,
    aLn as te,
    aen as _,
    bDt as ne,
    cLn as v,
    cPt as re,
    dDt as y,
    dPt as b,
    iFt as ie,
    jDt as ae,
    jPt as x,
    mDt as S,
    nSt as oe,
    oDt as C,
    pDt as w,
    rFt as T,
    rSt as E,
    sen as se,
    uDt as ce,
    uPt as D,
    vFn as O,
    wNn as k,
    xDt as A,
    yFn as le
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    n as j,
    r as ue
} from "./3cf4f9ac-dzvnigebu14330df.js";
import {
    n as M,
    t as de
} from "./dcea21c8-jblgz1k4h6hgzxrc.js";

function N(e) {
    let t = e.classifiers.library_artifact_type;
    if (e.libraryFileId == null || e.sharingEntryId != null && e.sharingCanManage === !1 || D(e) || e.gizmoId != null || e.classifiers.library_file_is_project === 1 || !w(t).canShare) return !1;
    if (e.status === `available`) return !0;
    if (e.status !== `unavailable`) return !1;
    let n = e.classifiers.library_file_state;
    return (n === `created` || n === `indexing`) && e.source?.type === `chat_upload` && e.deletedAt == null && t !== `site` && t !== `learning_quiz`
}
var P = e((() => {
        b(), S()
    })),
    F = t({
        openLibraryArtifactPreviewModal: () => L,
        resolveLibraryArtifactPreviewFileReference: () => I
    });
async function I({
    artifact: e,
    resolveFileReference: t,
    onError: n,
    signal: r
}) {
    let i = async () => {
        try {
            let e = await t();
            return r?.aborted === !0 ? null : e
        } catch (t) {
            return e.source?.type !== `google_drive` && r?.aborted !== !0 && n(t), null
        }
    }, a = e.source?.type === `external_library` && v(e.source.fileId) ? e.source.fileId : void 0, o = a != null;
    return e.source?.type !== `google_drive` && !o ? {
        fileReference: await i()
    } : {
        fileReference: {
            fileId: a ?? e.id,
            fileName: x(e),
            mimeType: e.mimeType,
            sizeBytes: e.sizeBytes
        },
        resolveFileReference: i
    }
}

function L({
    artifact: e,
    analyticsSession: t,
    favoritesAnalyticsSource: n,
    clientThreadId: a,
    fileId: s,
    fileName: c,
    libraryFileId: f,
    sharedLibraryFileId: p,
    mimeType: m,
    onClose: h,
    onDelete: _,
    onDownload: b,
    onSaved: S,
    providesOpenLibraryFileContext: C = !1,
    resolveFileReference: w,
    readOnly: T = !1,
    previewFileReference: E,
    sidePaneHandoff: O,
    showDelete: k,
    showOpenLibraryFileComposerContext: A = !1,
    sidePaneShellHostStore: j,
    sizeBytes: M,
    fullscreenShellEnabled: P
}) {
    let F = p ?? f ?? e.libraryFileId,
        I = T || p != null,
        L = c == null ? x(e) : F == null ? c : l({
            libraryFileId: F,
            fileName: c
        }),
        R = typeof e.classifiers.parent_directory_id == `string` ? e.classifiers.parent_directory_id : void 0,
        z = typeof e.classifiers.library_artifact_type == `string` ? e.classifiers.library_artifact_type : void 0,
        B = m ?? e.mimeType,
        V = e.source?.type === `external_library` ? e.source.fileId : void 0,
        H = [e.id, e.libraryFileId, V, s],
        U = H.some(e => d(e?.replace(/^(?:file-library:)+/, ``))),
        W = u(...H),
        fe = !U || v(W) && (e.source == null || e.source.type === `external_library` && v(e.source.fileId) && e.source.fileId === W) && !s.startsWith(`file-library:`) && o(e.mimeType),
        pe = te(e.id) ? e.id : U && v(W) ? W : void 0,
        G = M ?? e.sizeBytes,
        K = re(e),
        q = p == null && e.source?.type === `google_drive` ? e.source : void 0,
        me = p == null && e.source?.type === `external_library` && ne({
            mountedLibraryFileId: e.source.fileId,
            sourceUrl: e.source.sourceUrl
        }) != null ? e.source : void 0,
        he = q == null ? void 0 : ee({
            mountedLibraryFileId: q.fileId,
            sourceMimeType: e.mimeType,
            sourceUrl: q.sourceUrl
        }),
        J = u(...H, e.source != null && `fileId` in e.source ? e.source.fileId : void 0),
        Y = g(J ?? ``) == null ? K === `native` ? F : void 0 : J,
        X = a == null ? null : r(a),
        Z = X != null && p == null && F != null && C && le() ? ce(X, {
            fileId: s,
            fileName: L,
            libraryFileId: F,
            libraryProvider: K,
            libraryEntrypoint: `library_start_chat`,
            mimeType: B,
            sizeBytes: G
        }, {
            showComposerContext: A
        }) : null,
        Q = () => {
            X != null && Z != null && y(X, Z), h?.()
        };
    if (p == null && F && ie(e)) {
        O?.onUnavailable(), i(oe, {
            fileId: s,
            fileName: L,
            libraryFileId: F,
            libraryProvider: K,
            libraryEntrypoint: `library_start_chat`,
            mimeType: B,
            sizeBytes: G,
            showAskAboutComposer: !0,
            useFullscreenShell: P,
            onDelete: _,
            onClose: Z == null ? h : Q
        });
        return
    }
    let $ = {
        analyticsSession: t,
        favoritesAnalyticsSource: n,
        artifactId: p == null ? e.id : void 0,
        clientThreadId: a,
        fileId: s,
        mountedLibraryFileId: p == null ? pe : void 0,
        libraryFileId: p == null ? F : void 0,
        ...p == null ? {} : {
            sharedLibraryFileId: p
        },
        libraryDirectoryId: R,
        libraryArtifactType: z,
        libraryProvider: K,
        librarySourceFileName: D(e) ? x(e) : void 0,
        librarySourceMimeType: D(e) ? e.mimeType : void 0,
        librarySourceUrl: he ?? me?.sourceUrl,
        libraryEntrypoint: `library_start_chat`,
        ...Y == null ? {} : {
            libraryChatUsageResourceId: Y
        },
        fileName: L,
        originConversationId: p == null ? e.originationThreadId : void 0,
        originMessageId: p == null ? e.originationMessageId : void 0,
        imageGenAttribution: e.imageGenAttribution,
        mimeType: B,
        sizeBytes: G,
        canRenameFile: !I && !D(e) && ue(e),
        canShareFile: N(e) && (!I || p != null && se()),
        sharingEntryId: e.sharingEntryId,
        gizmoId: p == null ? e.gizmoId : void 0,
        fullscreenShellEnabled: P,
        hideComposer: p == null && !fe || void 0,
        isEditable: !I && void 0,
        unifiedImageViewerEligible: p == null,
        onSaved: p == null ? S : void 0,
        onDownload: p == null ? b : void 0,
        onDelete: p == null ? _ : void 0,
        preferSidePaneForWritingBlockEditor: j != null,
        resolveFileReference: p == null ? w : void 0,
        previewFileReference: p == null ? E : void 0,
        sidePaneHandoff: O,
        showDelete: p == null && k,
        onClose: Z == null ? h : Q
    };
    if (j != null) {
        i(de, {
            ...$,
            sidePaneShellHostStore: j
        });
        return
    }
    i(ae, $)
}
var R = e((() => {
    c(), a(), n(), h(), C(), O(), _(), s(), m(), k(), b(), A(), p(), P(), T(), j(), f(), M(), E()
}));
export {
    P as a, I as i, L as n, N as o, F as r, R as t
};
//# sourceMappingURL=f3a2e2fc-bkvdrpx0tyyvfctb.js.map