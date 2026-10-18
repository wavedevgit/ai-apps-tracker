import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    JP as n,
    KP as r,
    O0 as i,
    T0 as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    AIn as o,
    APt as s,
    CDt as ee,
    CPt as c,
    DPt as l,
    I9t as u,
    Jxt as d,
    KIn as f,
    L9t as p,
    MIn as m,
    OPt as te,
    QEt as h,
    U9t as g,
    UIn as ne,
    VDt as re,
    W9t as _,
    WDt as v,
    XPt as ie,
    YPt as y,
    Yxt as b,
    aDt as x,
    aNn as ae,
    ePt as oe,
    fDt as se,
    kIn as S,
    nDt as ce,
    nFn as C,
    nPt as w,
    oDt as T,
    pDt as E,
    rDt as D,
    rFn as le,
    rPt as O,
    sNn as k,
    wDt as A
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as j,
    r as ue
} from "./3cf4f9ac-cmrm7swhswxqg8t9.js";
import {
    n as M,
    t as de
} from "./dcea21c8-c7lngvro60y5dtxt.js";

function N(e) {
    let t = e.classifiers.library_artifact_type;
    if (e.libraryFileId == null || w(e) || e.gizmoId != null || e.classifiers.library_file_is_project === 1 || !x(t).canShare) return !1;
    if (e.status === `available`) return !0;
    if (e.status !== `unavailable`) return !1;
    let n = e.classifiers.library_file_state;
    return (n === `created` || n === `indexing`) && e.source?.type === `chat_upload` && e.deletedAt == null && t !== `site` && t !== `learning_quiz`
}
var P = e((() => {
        O(), T()
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
    }, a = e.source?.type === `external_library` && f(e.source.fileId) ? e.source.fileId : void 0, o = a != null;
    return e.source?.type !== `google_drive` && !o ? {
        fileReference: await i()
    } : {
        fileReference: {
            fileId: a ?? e.id,
            fileName: c(e),
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
    fileName: l,
    libraryFileId: u,
    sharedLibraryFileId: h,
    mimeType: g,
    onClose: v,
    onDelete: y,
    onDownload: b,
    onSaved: x,
    providesOpenLibraryFileContext: S = !1,
    resolveFileReference: C,
    readOnly: T = !1,
    previewFileReference: E,
    sidePaneHandoff: O,
    showDelete: k,
    showOpenLibraryFileComposerContext: A = !1,
    sidePaneShellHostStore: j,
    sizeBytes: M,
    fullscreenShellEnabled: P
}) {
    let F = h ?? u ?? e.libraryFileId,
        I = T || h != null,
        L = l == null ? c(e) : F == null ? l : te({
            libraryFileId: F,
            fileName: l
        }),
        R = typeof e.classifiers.parent_directory_id == `string` ? e.classifiers.parent_directory_id : void 0,
        z = typeof e.classifiers.library_artifact_type == `string` ? e.classifiers.library_artifact_type : void 0,
        B = g ?? e.mimeType,
        V = e.source?.type === `external_library` ? e.source.fileId : void 0,
        H = [e.id, e.libraryFileId, V, s],
        U = H.some(e => o(e?.replace(/^(?:file-library:)+/, ``))),
        W = m(...H),
        fe = !U || f(W) && (e.source == null || e.source.type === `external_library` && f(e.source.fileId) && e.source.fileId === W) && !s.startsWith(`file-library:`) && p(e.mimeType),
        pe = ne(e.id) ? e.id : U && f(W) ? W : void 0,
        G = M ?? e.sizeBytes,
        K = oe(e),
        q = h == null && e.source?.type === `google_drive` ? e.source : void 0,
        me = h == null && e.source?.type === `external_library` && se({
            mountedLibraryFileId: e.source.fileId,
            sourceUrl: e.source.sourceUrl
        }) != null ? e.source : void 0,
        he = q == null ? void 0 : re({
            mountedLibraryFileId: q.fileId,
            sourceMimeType: e.mimeType,
            sourceUrl: q.sourceUrl
        }),
        J = m(...H, e.source != null && `fileId` in e.source ? e.source.fileId : void 0),
        Y = ae(J ?? ``) == null ? K === `native` ? F : void 0 : J,
        X = a == null ? null : r(a),
        Z = X != null && h == null && F != null && S && le() ? ce(X, {
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
            X != null && Z != null && D(X, Z), v?.()
        };
    if (h == null && F && ie(e)) {
        O?.onUnavailable(), i(d, {
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
            onClose: Z == null ? v : Q
        });
        return
    }
    let $ = {
        analyticsSession: t,
        favoritesAnalyticsSource: n,
        artifactId: h == null ? e.id : void 0,
        clientThreadId: a,
        fileId: s,
        mountedLibraryFileId: h == null ? pe : void 0,
        libraryFileId: h == null ? F : void 0,
        ...h == null ? {} : {
            sharedLibraryFileId: h
        },
        libraryDirectoryId: R,
        libraryArtifactType: z,
        libraryProvider: K,
        librarySourceFileName: w(e) ? c(e) : void 0,
        librarySourceMimeType: w(e) ? e.mimeType : void 0,
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
        canRenameFile: !I && !w(e) && ue(e),
        canShareFile: N(e) && (!I || h != null && _()),
        gizmoId: h == null ? e.gizmoId : void 0,
        fullscreenShellEnabled: P,
        hideComposer: h == null && !fe || void 0,
        isEditable: !I && void 0,
        unifiedImageViewerEligible: h == null,
        onSaved: h == null ? x : void 0,
        onDownload: h == null ? b : void 0,
        onDelete: h == null ? y : void 0,
        preferSidePaneForWritingBlockEditor: j != null,
        resolveFileReference: h == null ? C : void 0,
        previewFileReference: h == null ? E : void 0,
        sidePaneHandoff: O,
        showDelete: h == null && k,
        onClose: Z == null ? v : Q
    };
    if (j != null) {
        i(de, {
            ...$,
            sidePaneShellHostStore: j
        });
        return
    }
    i(ee, $)
}
var R = e((() => {
    S(), n(), a(), s(), h(), C(), g(), l(), v(), k(), O(), E(), u(), P(), y(), j(), A(), M(), b()
}));
export {
    P as a, I as i, L as n, N as o, F as r, R as t
};
//# sourceMappingURL=f3a2e2fc-fckg8si3kcwljj1z.js.map