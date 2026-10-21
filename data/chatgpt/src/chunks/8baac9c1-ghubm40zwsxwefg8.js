import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CN as n,
    wN as r
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Vn as i,
    wn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    aTt as o,
    eTt as s,
    iTt as c,
    nTt as l,
    rTt as u,
    tTt as d
} from "./conversation-small-ocicxxw6jegn4vux.js";

function f(e) {
    if (typeof e == `string`) return e;
    if (e) return e.filter(e => !!e).join(` `) || void 0
}

function p(e) {
    "use forget";
    let t = (0, m.c)(21),
        {
            enabled: n,
            includeElementText: i,
            reportMatchDespiteCssHighlight: a,
            rootRef: o,
            searchableText: s
        } = e,
        u = n === void 0 || n,
        p = a !== void 0 && a,
        g;
    t[0] === s ? g = t[1] : (g = f(s), t[0] = s, t[1] = g);
    let _ = g,
        [v, y] = (0, h.useState)(!1),
        b = (0, h.useRef)(!1),
        x;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (x = () => {
        b.current = !1, y(!1)
    }, t[2] = x) : x = t[2];
    let S = r(x),
        C, w;
    t[3] !== S || t[4] !== u ? (C = () => {
        u || S()
    }, w = [S, u], t[3] = S, t[4] = u, t[5] = C, t[6] = w) : (C = t[5], w = t[6]), (0, h.useEffect)(C, w);
    let T;
    t[7] !== u || t[8] !== i || t[9] !== _ || t[10] !== p || t[11] !== o ? (T = e => {
        let {
            hasVisibleCssHighlight: t,
            targetRoot: n,
            tokens: r
        } = e, a = o.current;
        if (!u || !a || !n.contains(a) || !p && t?.(a)) return [];
        let s = c({
                text: _,
                tokens: r
            }) || i && c({
                text: a.textContent,
                tokens: r
            }),
            d = () => {
                let e = o.current;
                return e ? l(e) : null
            };
        return !s || !d() ? [] : [{
            getElement: () => o.current,
            getRect: d
        }]
    }, t[7] = u, t[8] = i, t[9] = _, t[10] = p, t[11] = o, t[12] = T) : T = t[12];
    let E = r(T),
        D;
    t[13] === S ? D = t[14] : (D = e => {
        if (e.length === 0) {
            S();
            return
        }
        b.current = !0
    }, t[13] = S, t[14] = D);
    let O = r(D),
        k;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (k = () => {
        b.current && y(!0)
    }, t[15] = k) : k = t[15];
    let A = r(k),
        j;
    return t[16] !== S || t[17] !== A || t[18] !== E || t[19] !== O ? (j = {
        clearHighlights: S,
        flashHighlights: A,
        getMatches: E,
        prepareHighlights: O
    }, t[16] = S, t[17] = A, t[18] = E, t[19] = O, t[20] = j) : j = t[20], d(j), v
}
var m, h, g = e((() => {
    m = a(), u(), o(), s(), n(), h = t(i())
}));
export {
    p as n, g as t
};
//# sourceMappingURL=8baac9c1-ghubm40zwsxwefg8.js.map