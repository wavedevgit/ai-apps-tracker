import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    _X as t,
    mtt as n,
    utt as r,
    vX as i
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Ght as a,
    Kht as o
} from "./conversation-small-cawdu7il3ha6y70c.js";
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
        if (n.author.role !== r.Assistant || n.status === `in_progress`) continue;
        let e = t(n, {
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
    n(), c(), i(), a(), f = /!\[[^\]]*\]\([^)]*\)/g, p = /^(?:image\s*)+$/i
}));
export {
    u as n, m as r, l as t
};
//# sourceMappingURL=de61f170-o830b1p94bab1upa.js.map