import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Q9t as t,
    SFn as n,
    _Dt as r,
    _Fn as i,
    cOt as a,
    sLn as o,
    sOt as s,
    xDt as c
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    n as l,
    t as u
} from "./6bfd3273-he4bixl6kpxeutf8.js";

function d({
    artifact: e,
    fileName: t,
    mimeType: n,
    mountedLibraryFileId: i
}) {
    let a = s({
            fileName: t,
            mimeType: n
        }) === `image`,
        c = i != null && n != null && !n.startsWith(`image/`);
    return a && !o(i) && (c || !l()) || !f(e, i) ? null : {
        providerPreview: r({
            fileName: t,
            mimeType: n,
            mountedLibraryFileId: i,
            sourceMimeType: e.mimeType
        }),
        supportsPersistentHostTransfer: !0
    }
}

function f(e, t) {
    return n({
        isWritingBlock: e.classifiers.library_artifact_type === `writing_block`,
        mountedLibraryFileId: t
    })
}
var p = e((() => {
    u(), i(), a(), c(), t()
}));
export {
    p as n, f as r, d as t
};
//# sourceMappingURL=f6dba5e1-gs5q1i7sd5m6qsp6.js.map