import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    ftt as t,
    gX as n,
    gtt as r,
    hX as i
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Hht as a,
    Uht as o
} from "./conversation-small-bcbq46iub1p0ca1t.js";
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
    for (let n of [...e].reverse()) {
        if (n.author.role !== t.Assistant || n.status === `in_progress`) continue;
        let e = i(n, {
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
    r(), c(), n(), a(), f = /!\[[^\]]*\]\([^)]*\)/g, p = /^(?:image\s*)+$/i
}));
export {
    u as n, m as r, l as t
};
//# sourceMappingURL=de61f170-jxcxtk15k3bf96s9.js.map