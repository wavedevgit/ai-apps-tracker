import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $Dt as t,
    IEt as n,
    NEt as r,
    QPt as i,
    ZPt as a,
    eOt as o
} from "./conversation-small-fym1zmu9zimymmm1.js";

function s(e) {
    if (e == null) return !1;
    let {
        mimeType: r,
        name: a
    } = e;
    return !(t({
        fileName: a,
        mimeType: r
    }) === `image` || i(e.libraryArtifactType) || e.libraryArtifactType === `flashcards` || a.toLowerCase().endsWith(`.flashcards`) || e.libraryArtifactType === `writing_block` || e.libraryArtifactType == null && n({
        fileName: a,
        fileSizeBytes: e.size,
        isLibraryFile: !0,
        mimeType: r
    }))
}
var c = e((() => {
    o(), a(), r()
}));
export {
    s as n, c as t
};
//# sourceMappingURL=9f9dcbe6-bjkswxn3vdti8ket.js.map