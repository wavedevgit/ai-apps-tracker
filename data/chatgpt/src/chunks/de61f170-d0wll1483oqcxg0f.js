import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    _X as t,
    ctt as n,
    ftt as r,
    vX as i
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Ght as a,
    Kht as o
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
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
        if (r.author.role !== n.Assistant || r.status === `in_progress`) continue;
        let e = t(r, {
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
    r(), c(), i(), a(), f = /!\[[^\]]*\]\([^)]*\)/g, p = /^(?:image\s*)+$/i
}));
export {
    u as n, m as r, l as t
};
//# sourceMappingURL=de61f170-d0wll1483oqcxg0f.js.map