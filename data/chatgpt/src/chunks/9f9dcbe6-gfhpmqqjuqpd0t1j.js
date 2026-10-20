import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    REt as t,
    VEt as n,
    aOt as r,
    iOt as i,
    nFt as a,
    rFt as o
} from "./conversation-small-cy5f8pl0g26s86so.js";

function s(e) {
    if (e == null) return !1;
    let {
        mimeType: t,
        name: r
    } = e;
    return !(i({
        fileName: r,
        mimeType: t
    }) === `image` || o(e.libraryArtifactType) || e.libraryArtifactType === `flashcards` || r.toLowerCase().endsWith(`.flashcards`) || e.libraryArtifactType === `writing_block` || e.libraryArtifactType == null && n({
        fileName: r,
        fileSizeBytes: e.size,
        isLibraryFile: !0,
        mimeType: t
    }))
}
var c = e((() => {
    r(), a(), t()
}));
export {
    s as n, c as t
};
//# sourceMappingURL=9f9dcbe6-gfhpmqqjuqpd0t1j.js.map