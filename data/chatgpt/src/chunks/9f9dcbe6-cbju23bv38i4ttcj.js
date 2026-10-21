import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    VEt as t,
    WEt as n,
    aFt as r,
    cOt as i,
    oFt as a,
    sOt as o
} from "./conversation-small-ikg0dwuw782klweb.js";

function s(e) {
    if (e == null) return !1;
    let {
        mimeType: t,
        name: r
    } = e;
    return !(o({
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
    i(), r(), t()
}));
export {
    s as n, c as t
};
//# sourceMappingURL=9f9dcbe6-cbju23bv38i4ttcj.js.map