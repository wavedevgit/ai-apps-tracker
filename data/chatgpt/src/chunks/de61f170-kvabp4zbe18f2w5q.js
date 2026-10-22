import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Mtt as t,
    Ott as n,
    gX as r,
    hX as i
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Hht as a,
    Uht as o
} from "./conversation-small-dwpaie1hln28efxb.js";
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
        let e = i(t, {
            shouldGetTextFromContentReferences: !0,
            shouldGetVisibleText: !0
        });
        if (!e.trim()) continue;
        let r = o(e.replace(f, ``)).replace(/\s+/g, ` `).trim();
        if (r && !p.test(r)) return r
    }
    return null
}
var f, p, m = e((() => {
    t(), c(), r(), a(), f = /!\[[^\]]*\]\([^)]*\)/g, p = /^(?:image\s*)+$/i
}));
export {
    u as n, m as r, l as t
};
//# sourceMappingURL=de61f170-kvabp4zbe18f2w5q.js.map