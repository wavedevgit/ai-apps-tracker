import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    HN as n,
    UN as r,
    c7 as i,
    l7 as a
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as o,
    Vn as s,
    wn as c
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    ES as l,
    vS as u
} from "./c2675c8c-p3x4d0bnf7e77o1n.js";

function d(e) {
    return clearTimeout(e)
}
var f, p, m, h, g = e((() => {
    f = c(), a(), p = t(s()), u(), n(), m = o(), h = e => {
        "use forget";
        let t = (0, f.c)(27),
            {
                direction: n,
                items: a,
                carouselSpeed: o,
                itemWrapperClassName: s,
                threshold: c,
                contentfulDebugAttributes: u
            } = e,
            h = n === void 0 ? `Left` : n,
            g = o === void 0 ? 36 : o,
            _ = c === void 0 ? 1 : c,
            [v, y] = (0, p.useState)(3),
            b = (0, p.useRef)(null),
            x = (0, p.useRef)(null),
            [S, C] = (0, p.useState)(!0),
            [w, T] = (0, p.useState)(g * (a.length / 5)),
            E;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (E = function() {
            x?.current && (C(!1), setTimeout(() => {
                x?.current && C(!0)
            }, 10))
        }, t[0] = E) : E = t[0];
        let D = E,
            O;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (O = [], t[1] = O) : O = t[1];
        let k = (0, p.useRef)(O),
            A;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (A = {
            initializeWithValue: !1
        }, t[2] = A) : A = t[2];
        let {
            width: j
        } = l(A), M = j === void 0 ? 0 : j, N, P;
        t[3] === _ ? (N = t[4], P = t[5]) : (N = () => {
            let e = new Map,
                t = new IntersectionObserver(t => {
                    t.forEach(t => {
                        if (!(t.target instanceof HTMLDivElement)) return;
                        let n = t.target;
                        clearTimeout(e.get(n)), e.delete(n), e.set(n, setTimeout(() => {
                            t.isIntersecting ? n.classList.remove(`opacity-20`) : n.classList.add(`opacity-20`)
                        }, 100))
                    })
                }, {
                    root: null,
                    threshold: _
                });
            return k.current.forEach(e => {
                e && t.observe(e)
            }), () => {
                t.disconnect(), e.forEach(d)
            }
        }, P = [_], t[3] = _, t[4] = N, t[5] = P), (0, p.useEffect)(N, P);
        let F;
        t[6] !== g || t[7] !== a.length || t[8] !== v ? (F = () => {
            if (!x?.current || !b?.current) return;
            let {
                width: e
            } = x.current.getBoundingClientRect(), {
                width: t
            } = b.current.getBoundingClientRect(), n = t - e, r = e / x.current.children.length, i = g * (a.length / 5);
            T(i), n && v + Math.ceil(n / r) + 1 > v && (y(v + Math.ceil(n / r) + 1), D())
        }, t[6] = g, t[7] = a.length, t[8] = v, t[9] = F) : F = t[9];
        let I = F,
            L;
        t[10] === I ? L = t[11] : (L = () => {
            I()
        }, t[10] = I, t[11] = L);
        let R;
        t[12] !== I || t[13] !== M ? (R = [I, M], t[12] = I, t[13] = M, t[14] = R) : R = t[14], r(L, R);
        let z;
        t[15] === v ? z = t[16] : (z = [...Array(v)], t[15] = v, t[16] = z);
        let B;
        t[17] !== S || t[18] !== h || t[19] !== s || t[20] !== a || t[21] !== w || t[22] !== z ? (B = (0, m.jsx)(`div`, {
            className: `group/carousel flex w-[fit-content] justify-center`,
            ref: x,
            children: z.map((e, t) => (0, m.jsx)(`div`, {
                className: i(`flex w-[max-content] animate-none transition-opacity duration-800 [animation-play-state:paused]`, {
                    "group-hover/carousel:[animation-play-state:paused] motion-safe:animate-[mkt-slide-anim_linear_infinite] motion-safe:[animation-play-state:running]": S
                }),
                style: {
                    animationDuration: `${w}s`,
                    animationDirection: h === `Right` ? `reverse` : `normal`
                },
                children: a.map((e, t) => (0, m.jsx)(`div`, {
                    className: i(`mx-1 flex items-start transition-opacity duration-800`, s),
                    ref: e => {
                        e && !k.current.includes(e) && k.current.push(e)
                    },
                    children: e
                }, t))
            }, t))
        }), t[17] = S, t[18] = h, t[19] = s, t[20] = a, t[21] = w, t[22] = z, t[23] = B) : B = t[23];
        let V;
        return t[24] !== u || t[25] !== B ? (V = (0, m.jsx)(`div`, {
            ...u,
            className: `looper @container w-full`,
            ref: b,
            children: B
        }), t[24] = u, t[25] = B, t[26] = V) : V = t[26], V
    }
}));
export {
    g as n, h as t
};
//# sourceMappingURL=8a4ddaf7-dmuk1din750piqvq.js.map