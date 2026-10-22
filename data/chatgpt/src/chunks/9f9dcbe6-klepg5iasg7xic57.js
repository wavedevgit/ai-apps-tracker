import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BEt as t,
    LEt as n,
    iOt as r,
    nFt as i,
    rOt as a,
    tFt as o
} from "./conversation-small-m7dgsxtvvivh3e6t.js";

function s(e) {
    if (e == null) return !1;
    let {
        mimeType: n,
        name: r
    } = e;
    return !(a({
        fileName: r,
        mimeType: n
    }) === `image` || i(e.libraryArtifactType) || e.libraryArtifactType === `flashcards` || r.toLowerCase().endsWith(`.flashcards`) || e.libraryArtifactType === `writing_block` || e.libraryArtifactType == null && t({
        fileName: r,
        fileSizeBytes: e.size,
        isLibraryFile: !0,
        mimeType: n
    }))
}
var c = e((() => {
    r(), o(), n()
}));
export {
    s as n, c as t
};
//# sourceMappingURL=9f9dcbe6-klepg5iasg7xic57.js.map