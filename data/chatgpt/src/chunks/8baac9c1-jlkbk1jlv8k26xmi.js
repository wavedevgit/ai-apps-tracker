import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CN as n,
    wN as r
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Vn as i,
    wn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    aTt as o,
    cTt as s,
    iTt as c,
    oTt as l,
    rTt as u,
    sTt as d
} from "./conversation-small-fh0oqifngkf5rvl1.js";

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
            rootRef: s,
            searchableText: l
        } = e,
        u = n === void 0 || n,
        p = a !== void 0 && a,
        g;
    t[0] === l ? g = t[1] : (g = f(l), t[0] = l, t[1] = g);
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
    t[7] !== u || t[8] !== i || t[9] !== _ || t[10] !== p || t[11] !== s ? (T = e => {
        let {
            hasVisibleCssHighlight: t,
            targetRoot: n,
            tokens: r
        } = e, a = s.current;
        if (!u || !a || !n.contains(a) || !p && t?.(a)) return [];
        let c = d({
                text: _,
                tokens: r
            }) || i && d({
                text: a.textContent,
                tokens: r
            }),
            l = () => {
                let e = s.current;
                return e ? o(e) : null
            };
        return !c || !l() ? [] : [{
            getElement: () => s.current,
            getRect: l
        }]
    }, t[7] = u, t[8] = i, t[9] = _, t[10] = p, t[11] = s, t[12] = T) : T = t[12];
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
    }, t[16] = S, t[17] = A, t[18] = E, t[19] = O, t[20] = j) : j = t[20], c(j), v
}
var m, h, g = e((() => {
    m = a(), l(), s(), u(), n(), h = t(i())
}));
export {
    p as n, g as t
};
//# sourceMappingURL=8baac9c1-jlkbk1jlv8k26xmi.js.map