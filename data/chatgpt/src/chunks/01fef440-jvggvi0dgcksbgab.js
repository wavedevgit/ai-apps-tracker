import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Int as t,
    Pnt as n,
    Znt as r,
    ert as i
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    HNn as a,
    TPn as o,
    VNn as s,
    ZNn as c,
    wPn as l
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Eb as u,
    lb as d,
    zb as f
} from "./8b34dbc2-m4883pai3e8fx8q6.js";

function p({
    libraryFileIds: e,
    selectedCount: t,
    category: r,
    entityKind: a,
    isFavorited: o,
    isBulkSelection: d = t > 1,
    libraryOrigin: f,
    analyticsSession: p,
    conversationId: h,
    conversationOrigin: g
}) {
    let _ = Array.from(new Set(e));
    if (_.length === 0) return;
    let v = !d && t === 1 && _.length === 1,
        y = a === `library_file` || a === `assistant_response`,
        b = s(_),
        x = JSON.stringify({
            libraryFileIds: _
        }).length <= m ? _ : [];
    u({
        artifactIds: x,
        itemCount: t,
        libraryOrigin: f,
        conversationId: h
    }), n.logStructuredEvent(`ChatgptFileLibraryFileInteraction`, {
        interactionType: c.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DOWNLOAD,
        ...p,
        productExperience: l(g),
        ...r == null ? {} : {
            category: r
        },
        ...v && y ? {
            entityKind: a
        } : {},
        ...v && y && o != null ? {
            isFavorited: o
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
    o(), a(), d(), t(), r(), f(), m = 2e3
}));
export {
    p as n, h as t
};
//# sourceMappingURL=01fef440-jvggvi0dgcksbgab.js.map