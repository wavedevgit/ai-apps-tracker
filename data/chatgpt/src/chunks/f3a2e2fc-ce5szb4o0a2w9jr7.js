import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    c2 as n,
    d2 as r,
    gF as i,
    vF as a
} from "./4813494d-mdvd4786a87166cc.js";
import {
    $Ln as o,
    BDt as ee,
    BLn as te,
    CDt as s,
    EPt as c,
    Gxt as ne,
    HLn as l,
    JPt as re,
    Kxt as u,
    OPt as d,
    QNt as ie,
    SDt as f,
    TPt as p,
    UDt as m,
    ZEt as h,
    aDt as g,
    aen as ae,
    dDt as _,
    den as v,
    ePt as y,
    fDt as b,
    fIn as x,
    gPn as oe,
    iDt as S,
    ien as C,
    nDt as se,
    nRn as w,
    pIn as T,
    pen as ce,
    qPt as E,
    tDt as le,
    tPt as D,
    vPn as O,
    xPt as k,
    zLn as A
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    n as j,
    r as ue
} from "./3cf4f9ac-m0pscruzcopu0m0j.js";
import {
    n as M,
    t as de
} from "./dcea21c8-idf42pfxd3zw5ifl.js";

function N(e) {
    let t = e.classifiers.library_artifact_type;
    if (e.libraryFileId == null || e.sharingEntryId != null && e.sharingCanManage === !1 || y(e) || e.gizmoId != null || e.classifiers.library_file_is_project === 1 || !S(t).canShare) return !1;
    if (e.status === `available`) return !0;
    if (e.status !== `unavailable`) return !1;
    let n = e.classifiers.library_file_state;
    return (n === `created` || n === `indexing`) && e.source?.type === `chat_upload` && e.deletedAt == null && t !== `site` && t !== `learning_quiz`
}
var P = e((() => {
        D(), g()
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
    }, a = e.source?.type === `external_library` && w(e.source.fileId) ? e.source.fileId : void 0, o = a != null;
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

function L({
    artifact: e,
    analyticsSession: t,
    favoritesAnalyticsSource: n,
    clientThreadId: a,
    fileId: s,
    fileName: u,
    libraryFileId: d,
    sharedLibraryFileId: p,
    mimeType: m,
    onClose: h,
    onDelete: g,
    onDownload: v,
    onSaved: b,
    providesOpenLibraryFileContext: x = !1,
    resolveFileReference: S,
    readOnly: C = !1,
    previewFileReference: E,
    sidePaneHandoff: D,
    showDelete: O,
    showOpenLibraryFileComposerContext: A = !1,
    sidePaneShellHostStore: j,
    sizeBytes: M,
    fullscreenShellEnabled: P
}) {
    let F = p ?? d ?? e.libraryFileId,
        I = C || p != null,
        L = u == null ? k(e) : F == null ? u : c({
            libraryFileId: F,
            fileName: u
        }),
        R = typeof e.classifiers.parent_directory_id == `string` ? e.classifiers.parent_directory_id : void 0,
        z = typeof e.classifiers.library_artifact_type == `string` ? e.classifiers.library_artifact_type : void 0,
        B = m ?? e.mimeType,
        V = e.source?.type === `external_library` ? e.source.fileId : void 0,
        H = [e.id, e.libraryFileId, V, s],
        U = H.some(e => te(e?.replace(/^(?:file-library:)+/, ``))),
        W = l(...H),
        fe = !U || w(W) && (e.source == null || e.source.type === `external_library` && w(e.source.fileId) && e.source.fileId === W) && !s.startsWith(`file-library:`) && ae(e.mimeType),
        pe = o(e.id) ? e.id : U && w(W) ? W : void 0,
        G = M ?? e.sizeBytes,
        K = ie(e),
        q = p == null && e.source?.type === `google_drive` ? e.source : void 0,
        me = p == null && e.source?.type === `external_library` && _({
            mountedLibraryFileId: e.source.fileId,
            sourceUrl: e.source.sourceUrl
        }) != null ? e.source : void 0,
        he = q == null ? void 0 : ee({
            mountedLibraryFileId: q.fileId,
            sourceMimeType: e.mimeType,
            sourceUrl: q.sourceUrl
        }),
        J = l(...H, e.source != null && `fileId` in e.source ? e.source.fileId : void 0),
        Y = oe(J ?? ``) == null ? K === `native` ? F : void 0 : J,
        X = a == null ? null : i(a),
        Z = X != null && p == null && F != null && x && T() ? le(X, {
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
            X != null && Z != null && se(X, Z), h?.()
        };
    if (p == null && F && re(e)) {
        D?.onUnavailable(), r(ne, {
            fileId: s,
            fileName: L,
            libraryFileId: F,
            libraryProvider: K,
            libraryEntrypoint: `library_start_chat`,
            mimeType: B,
            sizeBytes: G,
            showAskAboutComposer: !0,
            useFullscreenShell: P,
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
        fileId: s,
        mountedLibraryFileId: p == null ? pe : void 0,
        libraryFileId: p == null ? F : void 0,
        ...p == null ? {} : {
            sharedLibraryFileId: p
        },
        libraryDirectoryId: R,
        libraryArtifactType: z,
        libraryProvider: K,
        librarySourceFileName: y(e) ? k(e) : void 0,
        librarySourceMimeType: y(e) ? e.mimeType : void 0,
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
        canRenameFile: !I && !y(e) && ue(e),
        canShareFile: N(e) && (!I || p != null && ce()),
        sharingEntryId: e.sharingEntryId,
        gizmoId: p == null ? e.gizmoId : void 0,
        fullscreenShellEnabled: P,
        hideComposer: p == null && !fe || void 0,
        isEditable: !I && void 0,
        unifiedImageViewerEligible: p == null,
        onSaved: p == null ? b : void 0,
        onDownload: p == null ? v : void 0,
        onDelete: p == null ? g : void 0,
        preferSidePaneForWritingBlockEditor: j != null,
        resolveFileReference: p == null ? S : void 0,
        previewFileReference: p == null ? E : void 0,
        sidePaneHandoff: D,
        showDelete: p == null && O,
        onClose: Z == null ? h : Q
    };
    if (j != null) {
        r(de, {
            ...$,
            sidePaneShellHostStore: j
        });
        return
    }
    r(f, $)
}
var R = e((() => {
    A(), a(), n(), d(), h(), x(), v(), p(), m(), O(), D(), b(), C(), P(), E(), j(), s(), M(), u()
}));
export {
    P as a, I as i, L as n, N as o, F as r, R as t
};
//# sourceMappingURL=f3a2e2fc-ce5szb4o0a2w9jr7.js.map