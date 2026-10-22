import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fnt as t,
    Rnt as n,
    bnt as r,
    vnt as i
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    CNn as a,
    MNn as o,
    SNn as s,
    aPn as c,
    oPn as l
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Lb as u,
    sb as d,
    wb as f
} from "./8b34dbc2-dtawqv9t1aqckqj4.js";

function p({
    libraryFileIds: e,
    selectedCount: t,
    category: r,
    entityKind: a,
    isFavorited: l,
    isBulkSelection: u = t > 1,
    libraryOrigin: d,
    analyticsSession: p,
    conversationId: h,
    conversationOrigin: g
}) {
    let _ = Array.from(new Set(e));
    if (_.length === 0) return;
    let v = !u && t === 1 && _.length === 1,
        y = a === `library_file` || a === `assistant_response`,
        b = s(_),
        x = JSON.stringify({
            libraryFileIds: _
        }).length <= m ? _ : [];
    f({
        artifactIds: x,
        itemCount: t,
        libraryOrigin: d,
        conversationId: h
    }), i.logStructuredEvent(`ChatgptFileLibraryFileInteraction`, {
        interactionType: o.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DOWNLOAD,
        ...p,
        productExperience: c(g),
        ...r == null ? {} : {
            category: r
        },
        ...v && y ? {
            entityKind: a
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
        selectedCount: n(t)
    })
}
var m, h = e((() => {
    l(), a(), d(), r(), t(), u(), m = 2e3
}));
export {
    p as n, h as t
};
//# sourceMappingURL=01fef440-n7qpj0jc7h9sfsu5.js.map