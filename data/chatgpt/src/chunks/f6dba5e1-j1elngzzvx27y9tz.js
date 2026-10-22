import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $Fn as t,
    ULn as n,
    eOt as r,
    iIn as i,
    mDt as a,
    tOt as o,
    ten as s,
    uDt as c
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    n as l,
    t as u
} from "./6bfd3273-f092ilhew7ba7ukh.js";

function d({
    artifact: e,
    fileName: t,
    mimeType: i,
    mountedLibraryFileId: a
}) {
    let o = r({
            fileName: t,
            mimeType: i
        }) === `image`,
        s = a != null && i != null && !i.startsWith(`image/`);
    return o && !n(a) && (s || !l()) || !f(e, a) ? null : {
        providerPreview: c({
            fileName: t,
            mimeType: i,
            mountedLibraryFileId: a,
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
    u(), t(), o(), a(), s()
}));
export {
    p as n, f as r, d as t
};
//# sourceMappingURL=f6dba5e1-j1elngzzvx27y9tz.js.map