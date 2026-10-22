import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $Fn as t,
    ULn as n,
    _Dt as r,
    iIn as i,
    iOt as a,
    nen as o,
    pDt as s,
    rOt as c
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    n as l,
    t as u
} from "./6bfd3273-lduzdxzm2tcnh36r.js";

function d({
    artifact: e,
    fileName: t,
    mimeType: r,
    mountedLibraryFileId: i
}) {
    let a = c({
            fileName: t,
            mimeType: r
        }) === `image`,
        o = i != null && r != null && !r.startsWith(`image/`);
    return a && !n(i) && (o || !l()) || !f(e, i) ? null : {
        providerPreview: s({
            fileName: t,
            mimeType: r,
            mountedLibraryFileId: i,
            sourceMimeType: e.mimeType
        }),
        supportsPersistentHostTransfer: !0
    }
}

function f(e, t) {
    return i({
        isWritingBlock: e.classifiers.library_artifact_type === `writing_block`,
        mountedLibraryFileId: t
    })
}
var p = e((() => {
    u(), t(), a(), r(), o()
}));
export {
    p as n, f as r, d as t
};
//# sourceMappingURL=f6dba5e1-hazfoswzjn63avgy.js.map