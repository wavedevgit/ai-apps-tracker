import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    c2 as n,
    d2 as r,
    gF as i,
    vF as a
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    $Pt as o,
    ALn as ee,
    DDt as s,
    DPt as c,
    GDt as te,
    JDt as l,
    KLn as u,
    MLn as d,
    MPt as ne,
    ODt as f,
    PPt as p,
    ULn as re,
    Xxt as ie,
    Zxt as m,
    _Dt as h,
    aen as ae,
    cPn as g,
    den as _,
    eFt as oe,
    gDt as se,
    iPt as v,
    ien as y,
    jPt as b,
    kLn as x,
    lDt as S,
    nDt as C,
    nIn as w,
    oDt as ce,
    oPn as le,
    oPt as T,
    pen as E,
    rIn as D,
    sDt as ue,
    sPt as O,
    uDt as k
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    n as A,
    r as de
} from "./3cf4f9ac-j7hw9zj8nfch4lnt.js";
import {
    n as j,
    t as fe
} from "./dcea21c8-h2m61vyd1trupyrp.js";

function M(e) {
    let t = e.classifiers.library_artifact_type;
    if (e.libraryFileId == null || e.sharingEntryId != null && e.sharingCanManage === !1 || T(e) || e.gizmoId != null || e.classifiers.library_file_is_project === 1 || !S(t).canShare) return !1;
    if (e.status === `available`) return !0;
    if (e.status !== `unavailable`) return !1;
    let n = e.classifiers.library_file_state;
    return (n === `created` || n === `indexing`) && e.source?.type === `chat_upload` && e.deletedAt == null && t !== `site` && t !== `learning_quiz`
}
var N = e((() => {
        O(), k()
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
    }, a = e.source?.type === `external_library` && u(e.source.fileId) ? e.source.fileId : void 0, o = a != null;
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

function I({
    artifact: e,
    analyticsSession: t,
    favoritesAnalyticsSource: n,
    clientThreadId: a,
    fileId: o,
    fileName: l,
    libraryFileId: f,
    sharedLibraryFileId: p,
    mimeType: m,
    onClose: h,
    onDelete: g,
    onDownload: _,
    onSaved: y,
    providesOpenLibraryFileContext: b = !1,
    resolveFileReference: x,
    readOnly: S = !1,
    previewFileReference: C,
    sidePaneHandoff: w,
    showDelete: O,
    showOpenLibraryFileComposerContext: k = !1,
    sidePaneShellHostStore: A,
    sizeBytes: j,
    fullscreenShellEnabled: N
}) {
    let P = p ?? f ?? e.libraryFileId,
        F = S || p != null,
        I = l == null ? c(e) : P == null ? l : ne({
            libraryFileId: P,
            fileName: l
        }),
        L = typeof e.classifiers.parent_directory_id == `string` ? e.classifiers.parent_directory_id : void 0,
        R = typeof e.classifiers.library_artifact_type == `string` ? e.classifiers.library_artifact_type : void 0,
        z = m ?? e.mimeType,
        B = e.source?.type === `external_library` ? e.source.fileId : void 0,
        V = [e.id, e.libraryFileId, B, o],
        H = V.some(e => ee(e?.replace(/^(?:file-library:)+/, ``))),
        U = d(...V),
        pe = !H || u(U) && (e.source == null || e.source.type === `external_library` && u(e.source.fileId) && e.source.fileId === U) && !o.startsWith(`file-library:`) && ae(e.mimeType),
        me = re(e.id) ? e.id : H && u(U) ? U : void 0,
        W = j ?? e.sizeBytes,
        G = v(e),
        K = p == null && e.source?.type === `google_drive` ? e.source : void 0,
        he = p == null && e.source?.type === `external_library` && se({
            mountedLibraryFileId: e.source.fileId,
            sourceUrl: e.source.sourceUrl
        }) != null ? e.source : void 0,
        q = K == null ? void 0 : te({
            mountedLibraryFileId: K.fileId,
            sourceMimeType: e.mimeType,
            sourceUrl: K.sourceUrl
        }),
        J = d(...V, e.source != null && `fileId` in e.source ? e.source.fileId : void 0),
        Y = le(J ?? ``) == null ? G === `native` ? P : void 0 : J,
        X = a == null ? null : i(a),
        Z = X != null && p == null && P != null && b && D() ? ce(X, {
            fileId: o,
            fileName: I,
            libraryFileId: P,
            libraryProvider: G,
            libraryEntrypoint: `library_start_chat`,
            mimeType: z,
            sizeBytes: W
        }, {
            showComposerContext: k
        }) : null,
        Q = () => {
            X != null && Z != null && ue(X, Z), h?.()
        };
    if (p == null && P && oe(e)) {
        w?.onUnavailable(), r(ie, {
            fileId: o,
            fileName: I,
            libraryFileId: P,
            libraryProvider: G,
            libraryEntrypoint: `library_start_chat`,
            mimeType: z,
            sizeBytes: W,
            showAskAboutComposer: !0,
            useFullscreenShell: N,
            onDelete: g,
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
        mountedLibraryFileId: p == null ? me : void 0,
        libraryFileId: p == null ? P : void 0,
        ...p == null ? {} : {
            sharedLibraryFileId: p
        },
        libraryDirectoryId: L,
        libraryArtifactType: R,
        libraryProvider: G,
        librarySourceFileName: T(e) ? c(e) : void 0,
        librarySourceMimeType: T(e) ? e.mimeType : void 0,
        librarySourceUrl: q ?? he?.sourceUrl,
        libraryEntrypoint: `library_start_chat`,
        ...Y == null ? {} : {
            libraryChatUsageResourceId: Y
        },
        fileName: I,
        originConversationId: p == null ? e.originationThreadId : void 0,
        originMessageId: p == null ? e.originationMessageId : void 0,
        imageGenAttribution: e.imageGenAttribution,
        mimeType: z,
        sizeBytes: W,
        canRenameFile: !F && !T(e) && de(e),
        canShareFile: M(e) && (!F || p != null && E()),
        sharingEntryId: e.sharingEntryId,
        gizmoId: p == null ? e.gizmoId : void 0,
        fullscreenShellEnabled: N,
        hideComposer: p == null && !pe || void 0,
        isEditable: !F && void 0,
        unifiedImageViewerEligible: p == null,
        onSaved: p == null ? y : void 0,
        onDownload: p == null ? _ : void 0,
        onDelete: p == null ? g : void 0,
        preferSidePaneForWritingBlockEditor: A != null,
        resolveFileReference: p == null ? x : void 0,
        previewFileReference: p == null ? C : void 0,
        sidePaneHandoff: w,
        showDelete: p == null && O,
        onClose: Z == null ? h : Q
    };
    if (A != null) {
        r(fe, {
            ...$,
            sidePaneShellHostStore: A
        });
        return
    }
    r(s, $)
}
var L = e((() => {
    x(), a(), n(), p(), C(), w(), _(), b(), l(), g(), O(), h(), y(), N(), o(), A(), f(), j(), m()
}));
export {
    N as a, F as i, I as n, M as o, P as r, L as t
};
//# sourceMappingURL=f3a2e2fc-nmyxswxav24h9zui.js.map