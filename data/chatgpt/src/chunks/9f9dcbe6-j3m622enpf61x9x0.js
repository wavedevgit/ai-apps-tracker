import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $Dt as t,
    FEt as n,
    MEt as r,
    QDt as i,
    XPt as a,
    YPt as o
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function s(e) {
    if (e == null) return !1;
    let {
        mimeType: t,
        name: r
    } = e;
    return !(i({
        fileName: r,
        mimeType: t
    }) === `image` || a(e.libraryArtifactType) || e.libraryArtifactType === `flashcards` || r.toLowerCase().endsWith(`.flashcards`) || e.libraryArtifactType === `writing_block` || e.libraryArtifactType == null && n({
        fileName: r,
        fileSizeBytes: e.size,
        isLibraryFile: !0,
        mimeType: t
    }))
}
var c = e((() => {
    t(), o(), r()
}));
export {
    s as n, c as t
};
//# sourceMappingURL=9f9dcbe6-j3m622enpf61x9x0.js.map