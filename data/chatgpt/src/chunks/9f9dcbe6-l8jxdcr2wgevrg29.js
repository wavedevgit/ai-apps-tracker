import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $Pt as t,
    FEt as n,
    REt as r,
    eFt as i,
    nOt as a,
    tOt as o
} from "./conversation-small-cawdu7il3ha6y70c.js";

function s(e) {
    if (e == null) return !1;
    let {
        mimeType: t,
        name: n
    } = e;
    return !(o({
        fileName: n,
        mimeType: t
    }) === `image` || i(e.libraryArtifactType) || e.libraryArtifactType === `flashcards` || n.toLowerCase().endsWith(`.flashcards`) || e.libraryArtifactType === `writing_block` || e.libraryArtifactType == null && r({
        fileName: n,
        fileSizeBytes: e.size,
        isLibraryFile: !0,
        mimeType: t
    }))
}
var c = e((() => {
    a(), t(), n()
}));
export {
    s as n, c as t
};
//# sourceMappingURL=9f9dcbe6-l8jxdcr2wgevrg29.js.map