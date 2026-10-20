import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as n,
    dF as r,
    n2 as i,
    pF as a
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    $9t as o,
    CNn as s,
    FPt as c,
    GIn as l,
    IPt as ee,
    MDt as u,
    Q9t as d,
    QDt as f,
    RPt as p,
    WIn as m,
    YDt as te,
    _Fn as h,
    aen as g,
    bDt as ne,
    cPt as re,
    dDt as ie,
    dPt as _,
    iFt as v,
    iLn as y,
    jDt as ae,
    jPt as b,
    mDt as x,
    nSt as oe,
    oDt as S,
    pDt as C,
    qIn as w,
    rFt as T,
    rSt as E,
    sLn as D,
    sen as O,
    uDt as se,
    uPt as k,
    vFn as ce,
    xDt as A,
    xNn as le
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    n as j,
    r as ue
} from "./3cf4f9ac-i6zkbx9oywktzcmg.js";
import {
    n as M,
    t as de
} from "./dcea21c8-gqbfzgahsa66eu96.js";

function N(e) {
    let t = e.classifiers.library_artifact_type;
    if (e.libraryFileId == null || e.sharingEntryId != null && e.sharingCanManage === !1 || k(e) || e.gizmoId != null || e.classifiers.library_file_is_project === 1 || !C(t).canShare) return !1;
    if (e.status === `available`) return !0;
    if (e.status !== `unavailable`) return !1;
    let n = e.classifiers.library_file_state;
    return (n === `created` || n === `indexing`) && e.source?.type === `chat_upload` && e.deletedAt == null && t !== `site` && t !== `learning_quiz`
}
var P = e((() => {
        _(), x()
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
    }, a = e.source?.type === `external_library` && D(e.source.fileId) ? e.source.fileId : void 0, o = a != null;
    return e.source?.type !== `google_drive` && !o ? {
        fileReference: await i()
    } : {
        fileReference: {
            fileId: a ?? e.id,
            fileName: b(e),
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
    libraryFileId: u,
    sharedLibraryFileId: d,
    mimeType: f,
    onClose: p,
    onDelete: m,
    onDownload: h,
    onSaved: g,
    providesOpenLibraryFileContext: _ = !1,
    resolveFileReference: x,
    readOnly: S = !1,
    previewFileReference: C,
    sidePaneHandoff: T,
    showDelete: E,
    showOpenLibraryFileComposerContext: A = !1,
    sidePaneShellHostStore: j,
    sizeBytes: M,
    fullscreenShellEnabled: P
}) {
    let F = d ?? u ?? e.libraryFileId,
        I = S || d != null,
        L = c == null ? b(e) : F == null ? c : ee({
            libraryFileId: F,
            fileName: c
        }),
        R = typeof e.classifiers.parent_directory_id == `string` ? e.classifiers.parent_directory_id : void 0,
        z = typeof e.classifiers.library_artifact_type == `string` ? e.classifiers.library_artifact_type : void 0,
        B = f ?? e.mimeType,
        V = e.source?.type === `external_library` ? e.source.fileId : void 0,
        H = [e.id, e.libraryFileId, V, s],
        U = H.some(e => l(e?.replace(/^(?:file-library:)+/, ``))),
        W = w(...H),
        fe = !U || D(W) && (e.source == null || e.source.type === `external_library` && D(e.source.fileId) && e.source.fileId === W) && !s.startsWith(`file-library:`) && o(e.mimeType),
        pe = y(e.id) ? e.id : U && D(W) ? W : void 0,
        G = M ?? e.sizeBytes,
        K = re(e),
        q = d == null && e.source?.type === `google_drive` ? e.source : void 0,
        me = d == null && e.source?.type === `external_library` && ne({
            mountedLibraryFileId: e.source.fileId,
            sourceUrl: e.source.sourceUrl
        }) != null ? e.source : void 0,
        he = q == null ? void 0 : te({
            mountedLibraryFileId: q.fileId,
            sourceMimeType: e.mimeType,
            sourceUrl: q.sourceUrl
        }),
        J = w(...H, e.source != null && `fileId` in e.source ? e.source.fileId : void 0),
        Y = le(J ?? ``) == null ? K === `native` ? F : void 0 : J,
        X = a == null ? null : r(a),
        Z = X != null && d == null && F != null && _ && ce() ? se(X, {
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
            X != null && Z != null && ie(X, Z), p?.()
        };
    if (d == null && F && v(e)) {
        T?.onUnavailable(), i(oe, {
            fileId: s,
            fileName: L,
            libraryFileId: F,
            libraryProvider: K,
            libraryEntrypoint: `library_start_chat`,
            mimeType: B,
            sizeBytes: G,
            showAskAboutComposer: !0,
            useFullscreenShell: P,
            onDelete: m,
            onClose: Z == null ? p : Q
        });
        return
    }
    let $ = {
        analyticsSession: t,
        favoritesAnalyticsSource: n,
        artifactId: d == null ? e.id : void 0,
        clientThreadId: a,
        fileId: s,
        mountedLibraryFileId: d == null ? pe : void 0,
        libraryFileId: d == null ? F : void 0,
        ...d == null ? {} : {
            sharedLibraryFileId: d
        },
        libraryDirectoryId: R,
        libraryArtifactType: z,
        libraryProvider: K,
        librarySourceFileName: k(e) ? b(e) : void 0,
        librarySourceMimeType: k(e) ? e.mimeType : void 0,
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
        canRenameFile: !I && !k(e) && ue(e),
        canShareFile: N(e) && (!I || d != null && O()),
        sharingEntryId: e.sharingEntryId,
        gizmoId: d == null ? e.gizmoId : void 0,
        fullscreenShellEnabled: P,
        hideComposer: d == null && !fe || void 0,
        isEditable: !I && void 0,
        unifiedImageViewerEligible: d == null,
        onSaved: d == null ? g : void 0,
        onDownload: d == null ? h : void 0,
        onDelete: d == null ? m : void 0,
        preferSidePaneForWritingBlockEditor: j != null,
        resolveFileReference: d == null ? x : void 0,
        previewFileReference: d == null ? C : void 0,
        sidePaneHandoff: T,
        showDelete: d == null && E,
        onClose: Z == null ? p : Q
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
    m(), a(), n(), p(), S(), h(), g(), c(), f(), s(), _(), A(), d(), P(), T(), j(), u(), M(), E()
}));
export {
    P as a, I as i, L as n, N as o, F as r, R as t
};
//# sourceMappingURL=f3a2e2fc-gykkspi274nflyaw.js.map