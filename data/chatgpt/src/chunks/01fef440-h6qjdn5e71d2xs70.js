import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Lnt as t,
    Pnt as n,
    _nt as r,
    ynt as i
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    bNn as a,
    kNn as o,
    nPn as s,
    rPn as c,
    yNn as l
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Lb as u,
    sb as d,
    wb as f
} from "./8b34dbc2-k1zgxrtsww83602u.js";

function p({
    libraryFileIds: e,
    selectedCount: n,
    category: i,
    entityKind: a,
    isFavorited: c,
    isBulkSelection: u = n > 1,
    libraryOrigin: d,
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
    f({
        artifactIds: x,
        itemCount: n,
        libraryOrigin: d,
        conversationId: h
    }), r.logStructuredEvent(`ChatgptFileLibraryFileInteraction`, {
        interactionType: o.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DOWNLOAD,
        ...p,
        productExperience: s(g),
        ...i == null ? {} : {
            category: i
        },
        ...v && y ? {
            entityKind: a
        } : {},
        ...v && y && c != null ? {
            isFavorited: c
        } : {},
        libraryOrigin: d,
        conversationId: h,
        ...b == null ? {} : {
            provider: b
        },
        ...x.length > 0 ? {
            libraryFileIds: x
        } : {},
        selectedCount: t(n)
    })
}
var m, h = e((() => {
    c(), a(), d(), i(), n(), u(), m = 2e3
}));
export {
    p as n, h as t
};
//# sourceMappingURL=01fef440-h6qjdn5e71d2xs70.js.map