import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $Dt as t,
    QDt as n,
    _In as r,
    cDt as i,
    fDt as a,
    fIn as o,
    ien as s,
    nRn as c
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    n as l,
    t as u
} from "./6bfd3273-be0cogjp3mpgikms.js";

function d({
    artifact: e,
    fileName: t,
    mimeType: r,
    mountedLibraryFileId: a
}) {
    let o = n({
            fileName: t,
            mimeType: r
        }) === `image`,
        s = a != null && r != null && !r.startsWith(`image/`);
    return o && !c(a) && (s || !l()) || !f(e, a) ? null : {
        providerPreview: i({
            fileName: t,
            mimeType: r,
            mountedLibraryFileId: a,
            sourceMimeType: e.mimeType
        }),
        supportsPersistentHostTransfer: !0
    }
}

function f(e, t) {
    return r({
        isWritingBlock: e.classifiers.library_artifact_type === `writing_block`,
        mountedLibraryFileId: t
    })
}
var p = e((() => {
    u(), o(), t(), a(), s()
}));
export {
    p as n, f as r, d as t
};
//# sourceMappingURL=f6dba5e1-lh3rbjubq28l3zz2.js.map