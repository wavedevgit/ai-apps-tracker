import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fnt as t,
    Mnt as n,
    _nt as r,
    hnt as i
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    CNn as a,
    NNn as o,
    oPn as s,
    sPn as c,
    wNn as l
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Lb as u,
    sb as d,
    wb as f
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";

function p({
    libraryFileIds: e,
    selectedCount: n,
    category: r,
    entityKind: c,
    isFavorited: l,
    isBulkSelection: u = n > 1,
    libraryOrigin: d,
    analyticsSession: p,
    conversationId: h,
    conversationOrigin: g
}) {
    let _ = Array.from(new Set(e));
    if (_.length === 0) return;
    let v = !u && n === 1 && _.length === 1,
        y = c === `library_file` || c === `assistant_response`,
        b = a(_),
        x = JSON.stringify({
            libraryFileIds: _
        }).length <= m ? _ : [];
    f({
        artifactIds: x,
        itemCount: n,
        libraryOrigin: d,
        conversationId: h
    }), i.logStructuredEvent(`ChatgptFileLibraryFileInteraction`, {
        interactionType: o.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DOWNLOAD,
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
    c(), l(), d(), r(), n(), u(), m = 2e3
}));
export {
    p as n, h as t
};
//# sourceMappingURL=01fef440-ogbezpii1fqnh1em.js.map