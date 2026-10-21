import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ttt as t,
    gX as n,
    hX as r,
    ktt as i
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Ght as a,
    Wht as o
} from "./conversation-small-ocicxxw6jegn4vux.js";
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
        let e = r(n, {
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
    i(), c(), n(), o(), f = /!\[[^\]]*\]\([^)]*\)/g, p = /^(?:image\s*)+$/i
}));
export {
    u as n, m as r, l as t
};
//# sourceMappingURL=de61f170-ok3mhmti59c7v37y.js.map