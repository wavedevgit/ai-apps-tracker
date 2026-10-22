import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    KLn as t,
    _Dt as n,
    iOt as r,
    ien as i,
    nIn as a,
    pDt as o,
    rOt as s,
    sIn as c
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    n as l,
    t as u
} from "./6bfd3273-d1i015nyvdnfb0td.js";

function d({
    artifact: e,
    fileName: n,
    mimeType: r,
    mountedLibraryFileId: i
}) {
    let a = s({
            fileName: n,
            mimeType: r
        }) === `image`,
        c = i != null && r != null && !r.startsWith(`image/`);
    return a && !t(i) && (c || !l()) || !f(e, i) ? null : {
        providerPreview: o({
            fileName: n,
            mimeType: r,
            mountedLibraryFileId: i,
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
    u(), a(), r(), n(), i()
}));
export {
    p as n, f as r, d as t
};
//# sourceMappingURL=f6dba5e1-bewnrvexdeb9wszz.js.map