import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Z0 as n,
    e2 as r,
    fF as i,
    uF as a
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    APt as o,
    CNn as s,
    EDt as c,
    GIn as l,
    J9t as ee,
    JIn as u,
    KDt as d,
    KIn as te,
    MPt as f,
    QPt as ne,
    TDt as p,
    TPt as m,
    UDt as h,
    Xxt as re,
    ZPt as g,
    Zxt as _,
    aDt as ie,
    aLn as ae,
    aPt as v,
    cDt as y,
    cLn as b,
    eDt as x,
    een as S,
    hDt as C,
    iDt as oe,
    iPt as w,
    kPt as T,
    mDt as se,
    nPt as E,
    nen as ce,
    q9t as D,
    sDt as O,
    vFn as k,
    xNn as A,
    yFn as le
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    n as j,
    r as ue
} from "./3cf4f9ac-khxrrcmaaez3kq4r.js";
import {
    n as M,
    t as de
} from "./dcea21c8-kpy3lr36b0mk8vze.js";

function N(e) {
    let t = e.classifiers.library_artifact_type;
    if (e.libraryFileId == null || e.sharingEntryId != null && e.sharingCanManage === !1 || w(e) || e.gizmoId != null || e.classifiers.library_file_is_project === 1 || !O(t).canShare) return !1;
    if (e.status === `available`) return !0;
    if (e.status !== `unavailable`) return !1;
    let n = e.classifiers.library_file_state;
    return (n === `created` || n === `indexing`) && e.source?.type === `chat_upload` && e.deletedAt == null && t !== `site` && t !== `learning_quiz`
}
var P = e((() => {
        v(), y()
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
    }, a = e.source?.type === `external_library` && b(e.source.fileId) ? e.source.fileId : void 0, o = a != null;
    return e.source?.type !== `google_drive` && !o ? {
        fileReference: await i()
    } : {
        fileReference: {
            fileId: a ?? e.id,
            fileName: m(e),
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
    clientThreadId: i,
    fileId: s,
    fileName: c,
    libraryFileId: l,
    sharedLibraryFileId: d,
    mimeType: f,
    onClose: g,
    onDelete: _,
    onDownload: v,
    onSaved: y,
    providesOpenLibraryFileContext: x = !1,
    resolveFileReference: S,
    readOnly: C = !1,
    previewFileReference: T,
    sidePaneHandoff: D,
    showDelete: O,
    showOpenLibraryFileComposerContext: k = !1,
    sidePaneShellHostStore: j,
    sizeBytes: M,
    fullscreenShellEnabled: P
}) {
    let F = d ?? l ?? e.libraryFileId,
        I = C || d != null,
        L = c == null ? m(e) : F == null ? c : o({
            libraryFileId: F,
            fileName: c
        }),
        R = typeof e.classifiers.parent_directory_id == `string` ? e.classifiers.parent_directory_id : void 0,
        z = typeof e.classifiers.library_artifact_type == `string` ? e.classifiers.library_artifact_type : void 0,
        B = f ?? e.mimeType,
        V = e.source?.type === `external_library` ? e.source.fileId : void 0,
        H = [e.id, e.libraryFileId, V, s],
        U = H.some(e => te(e?.replace(/^(?:file-library:)+/, ``))),
        W = u(...H),
        fe = !U || b(W) && (e.source == null || e.source.type === `external_library` && b(e.source.fileId) && e.source.fileId === W) && !s.startsWith(`file-library:`) && ee(e.mimeType),
        pe = ae(e.id) ? e.id : U && b(W) ? W : void 0,
        G = M ?? e.sizeBytes,
        K = E(e),
        q = d == null && e.source?.type === `google_drive` ? e.source : void 0,
        me = d == null && e.source?.type === `external_library` && se({
            mountedLibraryFileId: e.source.fileId,
            sourceUrl: e.source.sourceUrl
        }) != null ? e.source : void 0,
        he = q == null ? void 0 : h({
            mountedLibraryFileId: q.fileId,
            sourceMimeType: e.mimeType,
            sourceUrl: q.sourceUrl
        }),
        J = u(...H, e.source != null && `fileId` in e.source ? e.source.fileId : void 0),
        Y = A(J ?? ``) == null ? K === `native` ? F : void 0 : J,
        X = i == null ? null : a(i),
        Z = X != null && d == null && F != null && x && le() ? oe(X, {
            fileId: s,
            fileName: L,
            libraryFileId: F,
            libraryProvider: K,
            libraryEntrypoint: `library_start_chat`,
            mimeType: B,
            sizeBytes: G
        }, {
            showComposerContext: k
        }) : null,
        Q = () => {
            X != null && Z != null && ie(X, Z), g?.()
        };
    if (d == null && F && ne(e)) {
        D?.onUnavailable(), r(re, {
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
            onClose: Z == null ? g : Q
        });
        return
    }
    let $ = {
        analyticsSession: t,
        favoritesAnalyticsSource: n,
        artifactId: d == null ? e.id : void 0,
        clientThreadId: i,
        fileId: s,
        mountedLibraryFileId: d == null ? pe : void 0,
        libraryFileId: d == null ? F : void 0,
        ...d == null ? {} : {
            sharedLibraryFileId: d
        },
        libraryDirectoryId: R,
        libraryArtifactType: z,
        libraryProvider: K,
        librarySourceFileName: w(e) ? m(e) : void 0,
        librarySourceMimeType: w(e) ? e.mimeType : void 0,
        librarySourceUrl: he ?? me?.sourceUrl,
        libraryEntrypoint: `library_start_chat`,
        ...Y == null ? {} : {
            libraryChatUsageResourceId: Y
        },
        fileName: L,
        originConversationId: d == null ? e.originationThreadId : void 0,
        originMessageId: d == null ? e.originationMessageId : void 0,
        imageGenAttribution: e.imageGenAttribution,
        mimeType: B,
        sizeBytes: G,
        canRenameFile: !I && !w(e) && ue(e),
        canShareFile: N(e) && (!I || d != null && ce()),
        sharingEntryId: e.sharingEntryId,
        gizmoId: d == null ? e.gizmoId : void 0,
        fullscreenShellEnabled: P,
        hideComposer: d == null && !fe || void 0,
        isEditable: !I && void 0,
        unifiedImageViewerEligible: d == null,
        onSaved: d == null ? y : void 0,
        onDownload: d == null ? v : void 0,
        onDelete: d == null ? _ : void 0,
        preferSidePaneForWritingBlockEditor: j != null,
        resolveFileReference: d == null ? S : void 0,
        previewFileReference: d == null ? T : void 0,
        sidePaneHandoff: D,
        showDelete: d == null && O,
        onClose: Z == null ? g : Q
    };
    if (j != null) {
        r(de, {
            ...$,
            sidePaneShellHostStore: j
        });
        return
    }
    r(p, $)
}
var R = e((() => {
    l(), i(), n(), f(), x(), k(), S(), T(), d(), s(), v(), C(), D(), P(), g(), j(), c(), M(), _()
}));
export {
    P as a, I as i, L as n, N as o, F as r, R as t
};
//# sourceMappingURL=f3a2e2fc-ken5x6zs76882tb6.js.map