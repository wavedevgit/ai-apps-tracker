import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    c2 as n,
    d2 as r,
    gF as i,
    vF as a
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    $Et as o,
    $Fn as s,
    BLn as ee,
    DLn as te,
    ELn as c,
    GDt as l,
    HDt as ne,
    Jxt as u,
    OPt as d,
    TDt as f,
    ULn as p,
    XPt as m,
    ZPt as re,
    aPn as h,
    cen as g,
    eIn as ie,
    iDt as _,
    iPt as v,
    jPt as y,
    kLn as b,
    kPt as ae,
    mDt as x,
    nen as oe,
    oDt as S,
    pDt as C,
    qxt as se,
    rDt as ce,
    rPn as le,
    rPt as w,
    sDt as T,
    tPt as E,
    ten as D,
    uen as O,
    wDt as ue,
    wPt as k
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    n as A,
    r as de
} from "./3cf4f9ac-h73fn3lszikmjecu.js";
import {
    n as j,
    t as fe
} from "./dcea21c8-krzift4madxel1u1.js";

function M(e) {
    let t = e.classifiers.library_artifact_type;
    if (e.libraryFileId == null || e.sharingEntryId != null && e.sharingCanManage === !1 || w(e) || e.gizmoId != null || e.classifiers.library_file_is_project === 1 || !S(t).canShare) return !1;
    if (e.status === `available`) return !0;
    if (e.status !== `unavailable`) return !1;
    let n = e.classifiers.library_file_state;
    return (n === `created` || n === `indexing`) && e.source?.type === `chat_upload` && e.deletedAt == null && t !== `site` && t !== `learning_quiz`
}
var N = e((() => {
        v(), T()
    })),
    P = t({
        openLibraryArtifactPreviewModal: () => I,
        resolveLibraryArtifactPreviewFileReference: () => F
    });
async function F({
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
    }, a = e.source?.type === `external_library` && p(e.source.fileId) ? e.source.fileId : void 0, o = a != null;
    return e.source?.type !== `google_drive` && !o ? {
        fileReference: await i()
    } : {
        fileReference: {
            fileId: a ?? e.id,
            fileName: k(e),
            mimeType: e.mimeType,
            sizeBytes: e.sizeBytes
        },
        resolveFileReference: i
    }
}

function I({
    artifact: e,
    analyticsSession: t,
    favoritesAnalyticsSource: n,
    clientThreadId: a,
    fileId: o,
    fileName: s,
    libraryFileId: c,
    sharedLibraryFileId: l,
    mimeType: u,
    onClose: d,
    onDelete: f,
    onDownload: m,
    onSaved: h,
    providesOpenLibraryFileContext: g = !1,
    resolveFileReference: v,
    readOnly: y = !1,
    previewFileReference: x,
    sidePaneHandoff: S,
    showDelete: T,
    showOpenLibraryFileComposerContext: D = !1,
    sidePaneShellHostStore: A,
    sizeBytes: j,
    fullscreenShellEnabled: N
}) {
    let P = l ?? c ?? e.libraryFileId,
        F = y || l != null,
        I = s == null ? k(e) : P == null ? s : ae({
            libraryFileId: P,
            fileName: s
        }),
        L = typeof e.classifiers.parent_directory_id == `string` ? e.classifiers.parent_directory_id : void 0,
        R = typeof e.classifiers.library_artifact_type == `string` ? e.classifiers.library_artifact_type : void 0,
        z = u ?? e.mimeType,
        B = e.source?.type === `external_library` ? e.source.fileId : void 0,
        V = [e.id, e.libraryFileId, B, o],
        H = V.some(e => te(e?.replace(/^(?:file-library:)+/, ``))),
        U = b(...V),
        pe = !H || p(U) && (e.source == null || e.source.type === `external_library` && p(e.source.fileId) && e.source.fileId === U) && !o.startsWith(`file-library:`) && oe(e.mimeType),
        me = ee(e.id) ? e.id : H && p(U) ? U : void 0,
        W = j ?? e.sizeBytes,
        G = E(e),
        K = l == null && e.source?.type === `google_drive` ? e.source : void 0,
        he = l == null && e.source?.type === `external_library` && C({
            mountedLibraryFileId: e.source.fileId,
            sourceUrl: e.source.sourceUrl
        }) != null ? e.source : void 0,
        q = K == null ? void 0 : ne({
            mountedLibraryFileId: K.fileId,
            sourceMimeType: e.mimeType,
            sourceUrl: K.sourceUrl
        }),
        J = b(...V, e.source != null && `fileId` in e.source ? e.source.fileId : void 0),
        Y = le(J ?? ``) == null ? G === `native` ? P : void 0 : J,
        X = a == null ? null : i(a),
        Z = X != null && l == null && P != null && g && ie() ? ce(X, {
            fileId: o,
            fileName: I,
            libraryFileId: P,
            libraryProvider: G,
            libraryEntrypoint: `library_start_chat`,
            mimeType: z,
            sizeBytes: W
        }, {
            showComposerContext: D
        }) : null,
        Q = () => {
            X != null && Z != null && _(X, Z), d?.()
        };
    if (l == null && P && re(e)) {
        S?.onUnavailable(), r(se, {
            fileId: o,
            fileName: I,
            libraryFileId: P,
            libraryProvider: G,
            libraryEntrypoint: `library_start_chat`,
            mimeType: z,
            sizeBytes: W,
            showAskAboutComposer: !0,
            useFullscreenShell: N,
            onDelete: f,
            onClose: Z == null ? d : Q
        });
        return
    }
    let $ = {
        analyticsSession: t,
        favoritesAnalyticsSource: n,
        artifactId: l == null ? e.id : void 0,
        clientThreadId: a,
        fileId: o,
        mountedLibraryFileId: l == null ? me : void 0,
        libraryFileId: l == null ? P : void 0,
        ...l == null ? {} : {
            sharedLibraryFileId: l
        },
        libraryDirectoryId: L,
        libraryArtifactType: R,
        libraryProvider: G,
        librarySourceFileName: w(e) ? k(e) : void 0,
        librarySourceMimeType: w(e) ? e.mimeType : void 0,
        librarySourceUrl: q ?? he?.sourceUrl,
        libraryEntrypoint: `library_start_chat`,
        ...Y == null ? {} : {
            libraryChatUsageResourceId: Y
        },
        fileName: I,
        originConversationId: l == null ? e.originationThreadId : void 0,
        originMessageId: l == null ? e.originationMessageId : void 0,
        imageGenAttribution: e.imageGenAttribution,
        mimeType: z,
        sizeBytes: W,
        canRenameFile: !F && !w(e) && de(e),
        canShareFile: M(e) && (!F || l != null && O()),
        sharingEntryId: e.sharingEntryId,
        gizmoId: l == null ? e.gizmoId : void 0,
        fullscreenShellEnabled: N,
        hideComposer: l == null && !pe || void 0,
        isEditable: !F && void 0,
        unifiedImageViewerEligible: l == null,
        onSaved: l == null ? h : void 0,
        onDownload: l == null ? m : void 0,
        onDelete: l == null ? f : void 0,
        preferSidePaneForWritingBlockEditor: A != null,
        resolveFileReference: l == null ? v : void 0,
        previewFileReference: l == null ? x : void 0,
        sidePaneHandoff: S,
        showDelete: l == null && T,
        onClose: Z == null ? d : Q
    };
    if (A != null) {
        r(fe, {
            ...$,
            sidePaneShellHostStore: A
        });
        return
    }
    r(ue, $)
}
var L = e((() => {
    c(), a(), n(), y(), o(), s(), g(), d(), l(), h(), v(), x(), D(), N(), m(), A(), f(), j(), u()
}));
export {
    N as a, F as i, I as n, M as o, P as r, L as t
};
//# sourceMappingURL=f3a2e2fc-fe20jxt35bvhxnym.js.map