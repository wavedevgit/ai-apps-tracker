import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Lnt as t,
    ert as n,
    rrt as r,
    znt as i
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    GPn as a,
    WPn as o,
    _Pn as s,
    cPn as c,
    sPn as l
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    Bb as u,
    Db as d,
    ub as f
} from "./8b34dbc2-ik628tlti8ozm9vq.js";

function p({
    libraryFileIds: e,
    selectedCount: n,
    category: i,
    entityKind: a,
    isFavorited: c,
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
        b = l(_),
        x = JSON.stringify({
            libraryFileIds: _
        }).length <= m ? _ : [];
    d({
        artifactIds: x,
        itemCount: n,
        libraryOrigin: f,
        conversationId: h
    }), t.logStructuredEvent(`ChatgptFileLibraryFileInteraction`, {
        interactionType: s.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DOWNLOAD,
        ...p,
        productExperience: o(g),
        ...i == null ? {} : {
            category: i
        },
        ...v && y ? {
            entityKind: a
        } : {},
        ...v && y && c != null ? {
            isFavorited: c
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
    a(), c(), f(), i(), n(), u(), m = 2e3
}));
export {
    p as n, h as t
};
//# sourceMappingURL=01fef440-l7aqldt4usl5ax1d.js.map