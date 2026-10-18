import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Btt as t,
    Htt as n,
    ont as r,
    rnt as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    UNn as a,
    WNn as o,
    gNn as s,
    oNn as c,
    sNn as l
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Lb as u,
    sb as d,
    wb as f
} from "./8b34dbc2-gf9wnwcahty27ylx.js";

function p({
    libraryFileIds: e,
    selectedCount: n,
    category: i,
    entityKind: o,
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
        y = o === `library_file` || o === `assistant_response`,
        b = c(_),
        x = JSON.stringify({
            libraryFileIds: _
        }).length <= m ? _ : [];
    f({
        artifactIds: x,
        itemCount: n,
        libraryOrigin: d,
        conversationId: h
    }), t.logStructuredEvent(`ChatgptFileLibraryFileInteraction`, {
        interactionType: s.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DOWNLOAD,
        ...p,
        productExperience: a(g),
        ...i == null ? {} : {
            category: i
        },
        ...v && y ? {
            entityKind: o
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
        selectedCount: r(n)
    })
}
var m, h = e((() => {
    o(), l(), d(), n(), i(), u(), m = 2e3
}));
export {
    p as n, h as t
};
//# sourceMappingURL=01fef440-i2gtj0bxgexd4nkx.js.map