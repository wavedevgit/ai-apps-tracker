import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Q0 as n,
    fF as r,
    t2 as i,
    uF as a
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    $xt as o,
    FPt as s,
    HIn as ee,
    KDt as c,
    MPt as l,
    NPt as u,
    ODt as d,
    OPt as f,
    VIn as p,
    WIn as m,
    X9t as te,
    Y9t as h,
    YDt as g,
    _Dt as ne,
    aPt as re,
    bNn as _,
    cDt as v,
    cPt as y,
    dDt as b,
    eFt as x,
    eSt as S,
    hFn as ie,
    iLn as C,
    ien as ae,
    kDt as w,
    mFn as T,
    nen as E,
    rDt as D,
    sDt as oe,
    sPt as O,
    tFt as se,
    tLn as ce,
    uDt as k,
    vDt as A,
    vNn as le
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    n as j,
    r as ue
} from "./3cf4f9ac-hdtliug5mwagtayb.js";
import {
    n as M,
    t as de
} from "./dcea21c8-fj5c5imkgfsg3905.js";

function N(e) {
    let t = e.classifiers.library_artifact_type;
    if (e.libraryFileId == null || e.sharingEntryId != null && e.sharingCanManage === !1 || O(e) || e.gizmoId != null || e.classifiers.library_file_is_project === 1 || !k(t).canShare) return !1;
    if (e.status === `available`) return !0;
    if (e.status !== `unavailable`) return !1;
    let n = e.classifiers.library_file_state;
    return (n === `created` || n === `indexing`) && e.source?.type === `chat_upload` && e.deletedAt == null && t !== `site` && t !== `learning_quiz`
}
var P = e((() => {
        y(), b()
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
    }, a = e.source?.type === `external_library` && C(e.source.fileId) ? e.source.fileId : void 0, o = a != null;
    return e.source?.type !== `google_drive` && !o ? {
        fileReference: await i()
    } : {
        fileReference: {
            fileId: a ?? e.id,
            fileName: f(e),
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
    clientThreadId: r,
    fileId: s,
    fileName: l,
    libraryFileId: p,
    sharedLibraryFileId: h,
    mimeType: g,
    onClose: _,
    onDelete: y,
    onDownload: b,
    onSaved: x,
    providesOpenLibraryFileContext: S = !1,
    resolveFileReference: w,
    readOnly: T = !1,
    previewFileReference: E,
    sidePaneHandoff: D,
    showDelete: k,
    showOpenLibraryFileComposerContext: A = !1,
    sidePaneShellHostStore: j,
    sizeBytes: M,
    fullscreenShellEnabled: P
}) {
    let F = h ?? p ?? e.libraryFileId,
        I = T || h != null,
        L = l == null ? f(e) : F == null ? l : u({
            libraryFileId: F,
            fileName: l
        }),
        R = typeof e.classifiers.parent_directory_id == `string` ? e.classifiers.parent_directory_id : void 0,
        z = typeof e.classifiers.library_artifact_type == `string` ? e.classifiers.library_artifact_type : void 0,
        B = g ?? e.mimeType,
        V = e.source?.type === `external_library` ? e.source.fileId : void 0,
        H = [e.id, e.libraryFileId, V, s],
        U = H.some(e => ee(e?.replace(/^(?:file-library:)+/, ``))),
        W = m(...H),
        fe = !U || C(W) && (e.source == null || e.source.type === `external_library` && C(e.source.fileId) && e.source.fileId === W) && !s.startsWith(`file-library:`) && te(e.mimeType),
        pe = ce(e.id) ? e.id : U && C(W) ? W : void 0,
        G = M ?? e.sizeBytes,
        K = re(e),
        q = h == null && e.source?.type === `google_drive` ? e.source : void 0,
        me = h == null && e.source?.type === `external_library` && ne({
            mountedLibraryFileId: e.source.fileId,
            sourceUrl: e.source.sourceUrl
        }) != null ? e.source : void 0,
        he = q == null ? void 0 : c({
            mountedLibraryFileId: q.fileId,
            sourceMimeType: e.mimeType,
            sourceUrl: q.sourceUrl
        }),
        J = m(...H, e.source != null && `fileId` in e.source ? e.source.fileId : void 0),
        Y = le(J ?? ``) == null ? K === `native` ? F : void 0 : J,
        X = r == null ? null : a(r),
        Z = X != null && h == null && F != null && S && ie() ? oe(X, {
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
            X != null && Z != null && v(X, Z), _?.()
        };
    if (h == null && F && se(e)) {
        D?.onUnavailable(), i(o, {
            fileId: s,
            fileName: L,
            libraryFileId: F,
            libraryProvider: K,
            libraryEntrypoint: `library_start_chat`,
            mimeType: B,
            sizeBytes: G,
            showAskAboutComposer: !0,
            useFullscreenShell: P,
            onDelete: y,
            onClose: Z == null ? _ : Q
        });
        return
    }
    let $ = {
        analyticsSession: t,
        favoritesAnalyticsSource: n,
        artifactId: h == null ? e.id : void 0,
        clientThreadId: r,
        fileId: s,
        mountedLibraryFileId: h == null ? pe : void 0,
        libraryFileId: h == null ? F : void 0,
        ...h == null ? {} : {
            sharedLibraryFileId: h
        },
        libraryDirectoryId: R,
        libraryArtifactType: z,
        libraryProvider: K,
        librarySourceFileName: O(e) ? f(e) : void 0,
        librarySourceMimeType: O(e) ? e.mimeType : void 0,
        librarySourceUrl: he ?? me?.sourceUrl,
        libraryEntrypoint: `library_start_chat`,
        ...Y == null ? {} : {
            libraryChatUsageResourceId: Y
        },
        fileName: L,
        originConversationId: h == null ? e.originationThreadId : void 0,
        originMessageId: h == null ? e.originationMessageId : void 0,
        imageGenAttribution: e.imageGenAttribution,
        mimeType: B,
        sizeBytes: G,
        canRenameFile: !I && !O(e) && ue(e),
        canShareFile: N(e) && (!I || h != null && ae()),
        sharingEntryId: e.sharingEntryId,
        gizmoId: h == null ? e.gizmoId : void 0,
        fullscreenShellEnabled: P,
        hideComposer: h == null && !fe || void 0,
        isEditable: !I && void 0,
        unifiedImageViewerEligible: h == null,
        onSaved: h == null ? x : void 0,
        onDownload: h == null ? b : void 0,
        onDelete: h == null ? y : void 0,
        preferSidePaneForWritingBlockEditor: j != null,
        resolveFileReference: h == null ? w : void 0,
        previewFileReference: h == null ? E : void 0,
        sidePaneHandoff: D,
        showDelete: h == null && k,
        onClose: Z == null ? _ : Q
    };
    if (j != null) {
        i(de, {
            ...$,
            sidePaneShellHostStore: j
        });
        return
    }
    i(d, $)
}
var R = e((() => {
    p(), r(), n(), s(), D(), T(), E(), l(), g(), _(), y(), A(), h(), P(), x(), j(), w(), M(), S()
}));
export {
    P as a, I as i, L as n, N as o, F as r, R as t
};
//# sourceMappingURL=f3a2e2fc-nkcjyfksp33d7e28.js.map