import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Hnt as t,
    Snt as n,
    wnt as r,
    znt as i
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    CNn as a,
    NNn as o,
    oPn as s,
    sPn as c,
    wNn as l
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    Lb as u,
    sb as d,
    wb as f
} from "./8b34dbc2-ojcl97ddvu2212q0.js";

function p({
    libraryFileIds: e,
    selectedCount: r,
    category: i,
    entityKind: c,
    isFavorited: l,
    isBulkSelection: u = r > 1,
    libraryOrigin: d,
    analyticsSession: p,
    conversationId: h,
    conversationOrigin: g
}) {
    let _ = Array.from(new Set(e));
    if (_.length === 0) return;
    let v = !u && r === 1 && _.length === 1,
        y = c === `library_file` || c === `assistant_response`,
        b = a(_),
        x = JSON.stringify({
            libraryFileIds: _
        }).length <= m ? _ : [];
    f({
        artifactIds: x,
        itemCount: r,
        libraryOrigin: d,
        conversationId: h
    }), n.logStructuredEvent(`ChatgptFileLibraryFileInteraction`, {
        interactionType: o.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DOWNLOAD,
        ...p,
        productExperience: s(g),
        ...i == null ? {} : {
            category: i
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
        selectedCount: t(r)
    })
}
var m, h = e((() => {
    c(), l(), d(), r(), i(), u(), m = 2e3
}));
export {
    p as n, h as t
};
//# sourceMappingURL=01fef440-dzztia4248zbgd54.js.map