import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $Dt as t,
    I9t as n,
    KIn as r,
    eOt as i,
    lDt as a,
    nFn as o,
    pDt as s,
    sFn as c
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as l,
    t as u
} from "./6bfd3273-njbtwk5rjb7kg9ly.js";

function d({
    artifact: e,
    fileName: n,
    mimeType: i,
    mountedLibraryFileId: o
}) {
    let s = t({
            fileName: n,
            mimeType: i
        }) === `image`,
        c = o != null && i != null && !i.startsWith(`image/`);
    return s && !r(o) && (c || !l()) || !f(e, o) ? null : {
        providerPreview: a({
            fileName: n,
            mimeType: i,
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
    u(), o(), i(), s(), n()
}));
export {
    p as n, f as r, d as t
};
//# sourceMappingURL=f6dba5e1-gi28wbggcqv1slwb.js.map