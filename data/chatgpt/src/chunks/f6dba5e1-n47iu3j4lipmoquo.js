import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CFn as t,
    cLn as n,
    dDt as r,
    hDt as i,
    nOt as a,
    q9t as o,
    tOt as s,
    vFn as c
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    n as l,
    t as u
} from "./6bfd3273-f0bba4wcqycwaetn.js";

function d({
    artifact: e,
    fileName: t,
    mimeType: i,
    mountedLibraryFileId: a
}) {
    let o = s({
            fileName: t,
            mimeType: i
        }) === `image`,
        c = a != null && i != null && !i.startsWith(`image/`);
    return o && !n(a) && (c || !l()) || !f(e, a) ? null : {
        providerPreview: r({
            fileName: t,
            mimeType: i,
            mountedLibraryFileId: a,
            sourceMimeType: e.mimeType
        }),
        supportsPersistentHostTransfer: !0
    }
}

function f(e, n) {
    return t({
        isWritingBlock: e.classifiers.library_artifact_type === `writing_block`,
        mountedLibraryFileId: n
    })
}
var p = e((() => {
    u(), c(), a(), i(), o()
}));
export {
    p as n, f as r, d as t
};
//# sourceMappingURL=f6dba5e1-n47iu3j4lipmoquo.js.map