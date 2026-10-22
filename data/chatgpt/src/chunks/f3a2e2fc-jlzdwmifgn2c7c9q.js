import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    c2 as n,
    d2 as r,
    gF as i,
    vF as a
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    $Fn as o,
    $Pt as s,
    BLn as c,
    DDt as l,
    DLn as u,
    DPt as d,
    ELn as f,
    GDt as ee,
    JDt as p,
    MPt as te,
    ODt as m,
    PPt as h,
    ULn as g,
    Xxt as ne,
    Zxt as _,
    _Dt as v,
    aPn as y,
    den as re,
    eFt as ie,
    eIn as b,
    gDt as ae,
    iPt as oe,
    jPt as x,
    kLn as S,
    lDt as C,
    len as w,
    nDt as T,
    nen as E,
    oDt as se,
    oPt as D,
    rPn as ce,
    ren as O,
    sDt as le,
    sPt as k,
    uDt as A
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    n as j,
    r as ue
} from "./3cf4f9ac-ivtf16l4qm6dgdts.js";
import {
    n as M,
    t as de
} from "./dcea21c8-2rtp91xmk66gvwff.js";

function N(e) {
    let t = e.classifiers.library_artifact_type;
    if (e.libraryFileId == null || e.sharingEntryId != null && e.sharingCanManage === !1 || D(e) || e.gizmoId != null || e.classifiers.library_file_is_project === 1 || !C(t).canShare) return !1;
    if (e.status === `available`) return !0;
    if (e.status !== `unavailable`) return !1;
    let n = e.classifiers.library_file_state;
    return (n === `created` || n === `indexing`) && e.source?.type === `chat_upload` && e.deletedAt == null && t !== `site` && t !== `learning_quiz`
}
var P = e((() => {
        k(), A()
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
    }, a = e.source?.type === `external_library` && g(e.source.fileId) ? e.source.fileId : void 0, o = a != null;
    return e.source?.type !== `google_drive` && !o ? {
        fileReference: await i()
    } : {
        fileReference: {
            fileId: a ?? e.id,
            fileName: d(e),
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
    fileId: o,
    fileName: s,
    libraryFileId: f,
    sharedLibraryFileId: p,
    mimeType: m,
    onClose: h,
    onDelete: _,
    onDownload: v,
    onSaved: y,
    providesOpenLibraryFileContext: x = !1,
    resolveFileReference: C,
    readOnly: w = !1,
    previewFileReference: T,
    sidePaneHandoff: E,
    showDelete: k,
    showOpenLibraryFileComposerContext: A = !1,
    sidePaneShellHostStore: j,
    sizeBytes: M,
    fullscreenShellEnabled: P
}) {
    let F = p ?? f ?? e.libraryFileId,
        I = w || p != null,
        L = s == null ? d(e) : F == null ? s : te({
            libraryFileId: F,
            fileName: s
        }),
        R = typeof e.classifiers.parent_directory_id == `string` ? e.classifiers.parent_directory_id : void 0,
        z = typeof e.classifiers.library_artifact_type == `string` ? e.classifiers.library_artifact_type : void 0,
        B = m ?? e.mimeType,
        V = e.source?.type === `external_library` ? e.source.fileId : void 0,
        H = [e.id, e.libraryFileId, V, o],
        U = H.some(e => u(e?.replace(/^(?:file-library:)+/, ``))),
        W = S(...H),
        fe = !U || g(W) && (e.source == null || e.source.type === `external_library` && g(e.source.fileId) && e.source.fileId === W) && !o.startsWith(`file-library:`) && O(e.mimeType),
        pe = c(e.id) ? e.id : U && g(W) ? W : void 0,
        G = M ?? e.sizeBytes,
        K = oe(e),
        q = p == null && e.source?.type === `google_drive` ? e.source : void 0,
        me = p == null && e.source?.type === `external_library` && ae({
            mountedLibraryFileId: e.source.fileId,
            sourceUrl: e.source.sourceUrl
        }) != null ? e.source : void 0,
        he = q == null ? void 0 : ee({
            mountedLibraryFileId: q.fileId,
            sourceMimeType: e.mimeType,
            sourceUrl: q.sourceUrl
        }),
        J = S(...H, e.source != null && `fileId` in e.source ? e.source.fileId : void 0),
        Y = ce(J ?? ``) == null ? K === `native` ? F : void 0 : J,
        X = a == null ? null : i(a),
        Z = X != null && p == null && F != null && x && b() ? se(X, {
            fileId: o,
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
            X != null && Z != null && le(X, Z), h?.()
        };
    if (p == null && F && ie(e)) {
        E?.onUnavailable(), r(ne, {
            fileId: o,
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
        fileId: o,
        mountedLibraryFileId: p == null ? pe : void 0,
        libraryFileId: p == null ? F : void 0,
        ...p == null ? {} : {
            sharedLibraryFileId: p
        },
        libraryDirectoryId: R,
        libraryArtifactType: z,
        libraryProvider: K,
        librarySourceFileName: D(e) ? d(e) : void 0,
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
        canShareFile: N(e) && (!I || p != null && re()),
        sharingEntryId: e.sharingEntryId,
        gizmoId: p == null ? e.gizmoId : void 0,
        fullscreenShellEnabled: P,
        hideComposer: p == null && !fe || void 0,
        isEditable: !I && void 0,
        unifiedImageViewerEligible: p == null,
        onSaved: p == null ? y : void 0,
        onDownload: p == null ? v : void 0,
        onDelete: p == null ? _ : void 0,
        preferSidePaneForWritingBlockEditor: j != null,
        resolveFileReference: p == null ? C : void 0,
        previewFileReference: p == null ? T : void 0,
        sidePaneHandoff: E,
        showDelete: p == null && k,
        onClose: Z == null ? h : Q
    };
    if (j != null) {
        r(de, {
            ...$,
            sidePaneShellHostStore: j
        });
        return
    }
    r(l, $)
}
var R = e((() => {
    f(), a(), n(), h(), T(), o(), w(), x(), p(), y(), k(), v(), E(), P(), s(), j(), m(), M(), _()
}));
export {
    P as a, I as i, L as n, N as o, F as r, R as t
};
//# sourceMappingURL=f3a2e2fc-jlzdwmifgn2c7c9q.js.map