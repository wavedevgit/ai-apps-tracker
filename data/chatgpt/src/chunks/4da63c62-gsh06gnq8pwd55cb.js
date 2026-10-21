import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    kst as t,
    oct as n
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    t as r
} from "./343cb406-d69bck6k47arlhci.js";

function i(e) {
    let t = e.trim().toLowerCase().replace(/[^a-z0-9-]+/g, `-`).replace(/-{2,}/g, `-`).replace(/^-+|-+$/g, ``);
    return t.length >= 2 ? t : null
}

function a(e) {
    let t = e.trim().toLowerCase();
    if (!t) return null;
    let n = (0, c.parse)(t);
    if (!(`error` in n) || n.error == null) {
        let {
            sld: e,
            domain: t
        } = n, r = e ?? t?.split(`.`).filter(Boolean)[0] ?? null;
        if (r) return i(r)
    }
    let r = t.split(`.`).filter(Boolean);
    if (r.length === 0) return null;
    let a = r[r.length === 1 ? 0 : r.length - 2];
    return a ? i(a) : null
}

function o(e) {
    let n = new Set;
    for (let r of e) {
        if (r.status !== t.VERIFIED) continue;
        let e = a(r.hostname);
        e && n.add(e)
    }
    return Array.from(n).sort((e, t) => e.localeCompare(t)).map(e => ({
        slug: e
    }))
}

function s(e) {
    let n = new Set;
    for (let r of e) {
        if (r.status !== t.VERIFIED) continue;
        let e = r.hostname.trim().toLowerCase();
        e && n.add(`sites.${e}`)
    }
    return Array.from(n).sort((e, t) => e.localeCompare(t)).map(e => ({
        domain: e
    }))
}
var c, l = e((() => {
    n(), c = r()
}));

function u(e) {
    return [`admin`, `app-garden`, `workspace`, e]
}
var d = e((() => {}));
export {
    l as a, o as i, d as n, s as r, u as t
};
//# sourceMappingURL=4da63c62-gsh06gnq8pwd55cb.js.map