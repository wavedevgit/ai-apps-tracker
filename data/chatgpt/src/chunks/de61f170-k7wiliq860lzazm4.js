import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fet as t,
    GY as n,
    KY as r,
    zet as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Uht as a,
    Wht as o
} from "./conversation-small-fym1zmu9zimymmm1.js";
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
    for (let r of [...e].reverse()) {
        if (r.author.role !== t.Assistant || r.status === `in_progress`) continue;
        let e = n(r, {
            shouldGetTextFromContentReferences: !0,
            shouldGetVisibleText: !0
        });
        if (!e.trim()) continue;
        let i = o(e.replace(f, ``)).replace(/\s+/g, ` `).trim();
        if (i && !p.test(i)) return i
    }
    return null
}
var f, p, m = e((() => {
    i(), c(), r(), a(), f = /!\[[^\]]*\]\([^)]*\)/g, p = /^(?:image\s*)+$/i
}));
export {
    u as n, m as r, l as t
};
//# sourceMappingURL=de61f170-k7wiliq860lzazm4.js.map