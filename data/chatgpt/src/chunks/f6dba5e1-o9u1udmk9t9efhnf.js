import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    G9t as t,
    PFn as n,
    eOt as r,
    mDt as i,
    tOt as a,
    uDt as o,
    wLn as s,
    zFn as c
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    n as l,
    t as u
} from "./6bfd3273-ezm9irzuhcb63cu8.js";

function d({
    artifact: e,
    fileName: t,
    mimeType: n,
    mountedLibraryFileId: i
}) {
    let a = r({
            fileName: t,
            mimeType: n
        }) === `image`,
        c = i != null && n != null && !n.startsWith(`image/`);
    return a && !s(i) && (c || !l()) || !f(e, i) ? null : {
        providerPreview: o({
            fileName: t,
            mimeType: n,
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
    u(), n(), a(), i(), t()
}));
export {
    p as n, f as r, d as t
};
//# sourceMappingURL=f6dba5e1-o9u1udmk9t9efhnf.js.map