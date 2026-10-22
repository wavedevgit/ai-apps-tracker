import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    ELn as t,
    G9t as n,
    IFn as r,
    VFn as i,
    eOt as a,
    mDt as o,
    tOt as s,
    uDt as c
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    n as l,
    t as u
} from "./6bfd3273-ot51rr1s4f8evjqa.js";

function d({
    artifact: e,
    fileName: n,
    mimeType: r,
    mountedLibraryFileId: i
}) {
    let o = a({
            fileName: n,
            mimeType: r
        }) === `image`,
        s = i != null && r != null && !r.startsWith(`image/`);
    return o && !t(i) && (s || !l()) || !f(e, i) ? null : {
        providerPreview: c({
            fileName: n,
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
    u(), r(), s(), o(), n()
}));
export {
    p as n, f as r, d as t
};
//# sourceMappingURL=f6dba5e1-kcjdjf3014tall3m.js.map