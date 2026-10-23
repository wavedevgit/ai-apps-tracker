import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Knt as t,
    Wnt as n,
    srt as r,
    urt as i
} from "./4813494d-mdvd4786a87166cc.js";
import {
    DPn as a,
    _Pn as o,
    eFn as s,
    tFn as c,
    vPn as l
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Bb as u,
    Db as d,
    ub as f
} from "./8b34dbc2-lmwubajnld74ksfm.js";

function p({
    libraryFileIds: e,
    selectedCount: t,
    category: r,
    entityKind: c,
    isFavorited: l,
    isBulkSelection: u = t > 1,
    libraryOrigin: f,
    analyticsSession: p,
    conversationId: h,
    conversationOrigin: g
}) {
    let _ = Array.from(new Set(e));
    if (_.length === 0) return;
    let v = !u && t === 1 && _.length === 1,
        y = c === `library_file` || c === `assistant_response`,
        b = o(_),
        x = JSON.stringify({
            libraryFileIds: _
        }).length <= m ? _ : [];
    d({
        artifactIds: x,
        itemCount: t,
        libraryOrigin: f,
        conversationId: h
    }), n.logStructuredEvent(`ChatgptFileLibraryFileInteraction`, {
        interactionType: a.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DOWNLOAD,
        ...p,
        productExperience: s(g),
        ...r == null ? {} : {
            category: r
        },
        ...v && y ? {
            entityKind: c
        } : {},
        ...v && y && l != null ? {
            isFavorited: l
        } : {},
        libraryOrigin: f,
        conversationId: h,
        ...b == null ? {} : {
            provider: b
        },
        ...x.length > 0 ? {
            libraryFileIds: x
        } : {},
        selectedCount: i(t)
    })
}
var m, h = e((() => {
    c(), l(), f(), t(), r(), u(), m = 2e3
}));
export {
    p as n, h as t
};
//# sourceMappingURL=01fef440-fhv3brbiyz37v70i.js.map