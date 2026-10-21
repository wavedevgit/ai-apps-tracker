import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    _tt as t,
    ptt as n,
    vX as r,
    yX as i
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Qht as a,
    Zht as o
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    n as s,
    r as c
} from "./27c18240-blu906be27xekuco.js";

function l(e) {
    return s(e ?? null)
}

function u({
    variant: e,
    title: t,
    messages: n,
    fallbackText: r
}) {
    let i = l(e);
    if (!i) return null;
    let a = r?.trim() || null,
        o = t?.trim() || a;
    return i.contentKind === `title` ? o : d(n) || a || o
}

function d(e) {
    for (let t of [...e].reverse()) {
        if (t.author.role !== n.Assistant || t.status === `in_progress`) continue;
        let e = r(t, {
            shouldGetTextFromContentReferences: !0,
            shouldGetVisibleText: !0
        });
        if (!e.trim()) continue;
        let i = a(e.replace(f, ``)).replace(/\s+/g, ` `).trim();
        if (i && !p.test(i)) return i
    }
    return null
}
var f, p, m = e((() => {
    t(), c(), i(), o(), f = /!\[[^\]]*\]\([^)]*\)/g, p = /^(?:image\s*)+$/i
}));
export {
    u as n, m as r, l as t
};
//# sourceMappingURL=de61f170-owh1rrtlwse5l9ha.js.map