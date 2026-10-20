import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J9t as t,
    dDt as n,
    hDt as r,
    lLn as i,
    nOt as a,
    tOt as o,
    wFn as s,
    yFn as c
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    n as l,
    t as u
} from "./6bfd3273-ogzxr1jug2r7n5mh.js";

function d({
    artifact: e,
    fileName: t,
    mimeType: r,
    mountedLibraryFileId: a
}) {
    let s = o({
            fileName: t,
            mimeType: r
        }) === `image`,
        c = a != null && r != null && !r.startsWith(`image/`);
    return s && !i(a) && (c || !l()) || !f(e, a) ? null : {
        providerPreview: n({
            fileName: t,
            mimeType: r,
            mountedLibraryFileId: a,
            sourceMimeType: e.mimeType
        }),
        supportsPersistentHostTransfer: !0
    }
}

function f(e, t) {
    return s({
        isWritingBlock: e.classifiers.library_artifact_type === `writing_block`,
        mountedLibraryFileId: t
    })
}
var p = e((() => {
    u(), c(), a(), r(), t()
}));
export {
    p as n, f as r, d as t
};
//# sourceMappingURL=f6dba5e1-dc4tu6h2c6mllmp4.js.map