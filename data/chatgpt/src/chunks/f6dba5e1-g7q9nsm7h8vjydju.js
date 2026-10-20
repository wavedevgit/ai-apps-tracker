import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Y9t as t,
    aOt as n,
    iLn as r,
    iOt as i,
    mDt as a,
    mFn as o,
    vDt as s,
    yFn as c
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    n as l,
    t as u
} from "./6bfd3273-hk7nysbf7r01j8we.js";

function d({
    artifact: e,
    fileName: t,
    mimeType: n,
    mountedLibraryFileId: o
}) {
    let s = i({
            fileName: t,
            mimeType: n
        }) === `image`,
        c = o != null && n != null && !n.startsWith(`image/`);
    return s && !r(o) && (c || !l()) || !f(e, o) ? null : {
        providerPreview: a({
            fileName: t,
            mimeType: n,
            mountedLibraryFileId: o,
            sourceMimeType: e.mimeType
        }),
        supportsPersistentHostTransfer: !0
    }
}

function f(e, t) {
    return c({
        isWritingBlock: e.classifiers.library_artifact_type === `writing_block`,
        mountedLibraryFileId: t
    })
}
var p = e((() => {
    u(), o(), n(), s(), t()
}));
export {
    p as n, f as r, d as t
};
//# sourceMappingURL=f6dba5e1-g7q9nsm7h8vjydju.js.map