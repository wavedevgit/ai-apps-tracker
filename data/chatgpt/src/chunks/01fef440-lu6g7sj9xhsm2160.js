import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Lnt as t,
    ert as n,
    rrt as r,
    znt as i
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    HPn as a,
    VPn as o,
    aPn as s,
    iPn as c,
    mPn as l
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Bb as u,
    Db as d,
    ub as f
} from "./8b34dbc2-bgocf3s6t6l67twq.js";

function p({
    libraryFileIds: e,
    selectedCount: n,
    category: i,
    entityKind: a,
    isFavorited: s,
    isBulkSelection: u = n > 1,
    libraryOrigin: f,
    analyticsSession: p,
    conversationId: h,
    conversationOrigin: g
}) {
    let _ = Array.from(new Set(e));
    if (_.length === 0) return;
    let v = !u && n === 1 && _.length === 1,
        y = a === `library_file` || a === `assistant_response`,
        b = c(_),
        x = JSON.stringify({
            libraryFileIds: _
        }).length <= m ? _ : [];
    d({
        artifactIds: x,
        itemCount: n,
        libraryOrigin: f,
        conversationId: h
    }), t.logStructuredEvent(`ChatgptFileLibraryFileInteraction`, {
        interactionType: l.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DOWNLOAD,
        ...p,
        productExperience: o(g),
        ...i == null ? {} : {
            category: i
        },
        ...v && y ? {
            entityKind: a
        } : {},
        ...v && y && s != null ? {
            isFavorited: s
        } : {},
        libraryOrigin: f,
        conversationId: h,
        ...b == null ? {} : {
            provider: b
        },
        ...x.length > 0 ? {
            libraryFileIds: x
        } : {},
        selectedCount: r(n)
    })
}
var m, h = e((() => {
    a(), s(), f(), i(), n(), u(), m = 2e3
}));
export {
    p as n, h as t
};
//# sourceMappingURL=01fef440-lu6g7sj9xhsm2160.js.map