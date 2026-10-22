import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bn as n,
    Ln as r,
    Rn as i,
    Vn as a,
    wn as o,
    zn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    i as c,
    n as l,
    r as u,
    t as d
} from "./8d358735-bi7dq630d033394k.js";
import {
    a as f,
    n as p,
    o as m
} from "./6550989e-lyrtd8nel32w4kqa.js";

function h(e) {
    "use forget";
    let t = (0, g.c)(20),
        {
            icon: n,
            onIconChange: r
        } = e,
        i = s(),
        [a, o] = (0, _.useState)(y),
        l = n ?? a,
        u;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = [], t[0] = u) : u = t[0];
    let m = (0, _.useRef)(u),
        h = (0, _.useRef)(0),
        E;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (E = {
        interactive: !0,
        randomBlinkInterval: 1e4,
        size: b
    }, t[1] = E) : E = t[1];
    let D = c(E),
        O;
    t[2] === r ? O = t[3] : (O = e => {
        r?.(e), r ?? o(e)
    }, t[2] = r, t[3] = O);
    let k = O,
        A;
    t[4] !== D || t[5] !== l || t[6] !== k ? (A = () => {
        let e = Date.now();
        if (e < h.current) return;
        let t = m.current[m.current.length - 1];
        if (t != null && e - t > w && (m.current = []), m.current = m.current.filter(t => e - t < S), m.current.push(e), m.current.length >= x) {
            h.current = e + C, m.current = [], requestAnimationFrame(() => {
                D.animate(`nani`)
            });
            return
        }
        k(f({
            excludeIcon: l
        })), requestAnimationFrame(() => {
            D.animate(`nod`)
        })
    }, t[4] = D, t[5] = l, t[6] = k, t[7] = A) : A = t[7];
    let j = A,
        M;
    t[8] === i ? M = t[9] : (M = i.formatMessage(T.randomizeMascotLabel), t[8] = i, t[9] = M);
    let N;
    t[10] !== l.color || t[11] !== l.name ? (N = (0, v.jsx)(p, {
        color: l.color,
        name: l.name,
        size: b
    }), t[10] = l.color, t[11] = l.name, t[12] = N) : N = t[12];
    let P;
    t[13] !== D || t[14] !== N ? (P = (0, v.jsx)(d, {
        controller: D,
        enableRecalculationCheck: !0,
        children: N
    }), t[13] = D, t[14] = N, t[15] = P) : P = t[15];
    let F;
    return t[16] !== j || t[17] !== M || t[18] !== P ? (F = (0, v.jsx)(`div`, {
        "aria-label": M,
        className: `pointer-events-auto`,
        onClick: j,
        children: P
    }), t[16] = j, t[17] = M, t[18] = P, t[19] = F) : F = t[19], F
}
var g, _, v, y, b, x, S, C, w, T, E = e((() => {
    g = o(), l(), u(), _ = t(a()), i(), m(), v = n(), y = {
        color: `blue`,
        name: `bloop`
    }, b = 72, x = 9, S = 3e3, C = 2e3, w = 500, T = r({
        randomizeMascotLabel: {
            id: `Hermes.GptStudio.Chat.ChatSidebar.randomizeMascotLabel`,
            defaultMessage: `Change mascot`
        }
    })
}));
export {
    h as n, E as r, y as t
};
//# sourceMappingURL=6d879e29-eu988j1vyq88nxi2.js.map