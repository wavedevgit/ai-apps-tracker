import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    Gt as r,
    HN as i,
    Jt as a,
    UN as o
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as s,
    Vn as c,
    wn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Dot as u,
    rst as d,
    yat as f
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function p(e) {
    let t = _.get(e);
    if (t) return t;
    let n = u[e],
        r = document.createElementNS(`http://www.w3.org/2000/svg`, `path`);
    r.setAttribute(`d`, n.path);
    let i = new DOMMatrix(n.transform.replaceAll(` `, `, `)),
        a = r.getTotalLength(),
        o = Array.from({
            length: g
        }, (e, t) => {
            let n = i.transformPoint(r.getPointAtLength(a * t / g));
            return [n.x, n.y]
        }),
        s = Array.from({
            length: h
        }, (e, t) => {
            let n = t / h * Math.PI * 2 - Math.PI / 2,
                r = Math.cos(n),
                i = Math.sin(n),
                a = 0;
            for (let e = 0; e < o.length; e++) {
                let t = o[e],
                    n = o[(e + 1) % o.length],
                    s = n[0] - t[0],
                    c = n[1] - t[1],
                    l = r * c - i * s;
                if (Math.abs(l) < 1e-12) continue;
                let u = t[0] - .5,
                    d = t[1] - .5,
                    f = (u * c - d * s) / l,
                    p = (u * i - d * r) / l;
                f >= 0 && p >= 0 && p <= 1 && (a = Math.max(a, f))
            }
            return [.5 + r * a, .5 + i * a]
        });
    return _.set(e, s), s
}

function m(e) {
    return e.map(([e, t], n) => `${n===0?`M`:`L`}${e.toFixed(6)} ${t.toFixed(6)}`).join(``) + `Z`
}
var h, g, _, v = e((() => {
    f(), h = 384, g = 1536, _ = new Map
}));

function y(e) {
    "use forget";
    let t = (0, S.c)(29),
        {
            shape: n,
            children: i,
            animateShape: s
        } = e,
        c = s !== void 0 && s,
        [l, d] = (0, C.useState)(!1),
        f = (0, C.useId)(),
        h = a(),
        g = (0, C.useRef)(null),
        _ = (0, C.useRef)(n),
        v = (0, C.useRef)(null),
        y = (0, C.useRef)(null),
        x, T;
    t[0] !== c || t[1] !== h || t[2] !== n ? (x = () => {
        let e = g.current;
        if (e == null) return;
        let t = _.current;
        _.current = n, y.current?.stop(), y.current = null, g.current?.setAttribute(`transform`, u[n].transform);
        let i = () => {
            e.setAttribute(`d`, u[n].path), e.setAttribute(`transform`, u[n].transform), v.current = null
        };
        if (!c || h || t === n && v.current == null) {
            i();
            return
        }
        let a = v.current ?? p(t),
            o = p(n);
        e.removeAttribute(`transform`), e.setAttribute(`d`, m(a));
        let s = r(0, 1, {
            duration: .32,
            ease: b,
            onUpdate: t => {
                let n = a.map((e, n) => [e[0] + (o[n][0] - e[0]) * t, e[1] + (o[n][1] - e[1]) * t]);
                v.current = n, e.setAttribute(`d`, m(n))
            },
            onComplete: i
        });
        return () => s.stop()
    }, T = [n, c, h], t[0] = c, t[1] = h, t[2] = n, t[3] = x, t[4] = T) : (x = t[3], T = t[4]), o(x, T);
    let E, D;
    t[5] !== c || t[6] !== l || t[7] !== h || t[8] !== n ? (E = () => {
        if (!l || !c || h || n !== `blossom`) return;
        let e = setTimeout(() => {
            y.current ??= r(0, 360, {
                type: `spring`,
                stiffness: 70,
                damping: 14,
                mass: 1,
                restDelta: .05,
                restSpeed: 1,
                onUpdate: e => g.current?.setAttribute(`transform`, `rotate(${e} .5 .5) ${u[n].transform}`),
                onComplete: () => {
                    g.current?.setAttribute(`transform`, u[n].transform), y.current = null
                }
            })
        }, 1e3);
        return () => clearTimeout(e)
    }, D = [l, c, h, n], t[5] = c, t[6] = l, t[7] = h, t[8] = n, t[9] = E, t[10] = D) : (E = t[9], D = t[10]), (0, C.useEffect)(E, D);
    let O, k;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (O = () => () => y.current?.stop(), k = [], t[11] = O, t[12] = k) : (O = t[11], k = t[12]), (0, C.useEffect)(O, k);
    let A, j;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (A = () => d(!0), j = () => d(!1), t[13] = A, t[14] = j) : (A = t[13], j = t[14]);
    let M = u[n],
        N = u[n],
        P;
    t[15] !== M.path || t[16] !== N.transform ? (P = (0, w.jsx)(`path`, {
        ref: g,
        d: M.path,
        transform: N.transform
    }), t[15] = M.path, t[16] = N.transform, t[17] = P) : P = t[17];
    let F;
    t[18] !== f || t[19] !== P ? (F = (0, w.jsx)(`svg`, {
        "aria-hidden": !0,
        className: `absolute size-0`,
        focusable: `false`,
        children: (0, w.jsx)(`defs`, {
            children: (0, w.jsx)(`clipPath`, {
                id: f,
                clipPathUnits: `objectBoundingBox`,
                children: P
            })
        })
    }), t[18] = f, t[19] = P, t[20] = F) : F = t[20];
    let I = `url(#${f})`,
        L;
    t[21] === I ? L = t[22] : (L = {
        clipPath: I
    }, t[21] = I, t[22] = L);
    let R;
    t[23] !== i || t[24] !== L ? (R = (0, w.jsx)(`span`, {
        className: `relative inline-flex`,
        style: L,
        children: i
    }), t[23] = i, t[24] = L, t[25] = R) : R = t[25];
    let z;
    return t[26] !== F || t[27] !== R ? (z = (0, w.jsxs)(`span`, {
        className: `relative inline-flex shrink-0`,
        onMouseEnter: A,
        onMouseLeave: j,
        children: [F, R]
    }), t[26] = F, t[27] = R, t[28] = z) : z = t[28], z
}

function b(e) {
    let t = e => 1 - Math.exp(-8 * e) * (Math.cos(10 * e) + .8 * Math.sin(10 * e));
    return t(e) / t(1)
}

function x(e) {
    "use forget";
    let t = (0, S.c)(4),
        {
            frame: n,
            children: r,
            animateShape: i
        } = e,
        a = i !== void 0 && i,
        o = n === `scalloped_circle` ? `blossom` : n === `rounded_square` ? `square` : n === `oval` ? `oval` : n === `scalloped_oval` ? `scalloped` : `circle`,
        s;
    return t[0] !== a || t[1] !== r || t[2] !== o ? (s = (0, w.jsx)(y, {
        shape: o,
        animateShape: a,
        children: r
    }), t[0] = a, t[1] = r, t[2] = o, t[3] = s) : s = t[3], s
}
var S, C, w, T = e((() => {
        S = l(), i(), n(), C = t(c()), v(), w = s()
    })),
    E, D, O, k, A = e((() => {
        E = l(), f(), D = t(c()), O = s(), k = e => {
            "use forget";
            let t = (0, E.c)(6),
                {
                    src: n,
                    name: r,
                    alt: i,
                    size: a
                } = e,
                o = a === void 0 ? `profile` : a,
                [s, c] = (0, D.useState)(null),
                l;
            return t[0] !== i || t[1] !== s || t[2] !== r || t[3] !== o || t[4] !== n ? (l = n && n !== s ? (0, O.jsx)(`img`, {
                src: n,
                alt: i,
                className: o === `picker` ? `size-12 object-cover` : `size-28 object-cover`,
                onError: () => c(n)
            }) : (0, O.jsx)(`span`, {
                className: `bg-token-bg-tertiary text-token-text-primary flex items-center justify-center ${o===`picker`?`size-12 text-lg`:`size-28 text-3xl`}`,
                children: d(r)
            }), t[0] = i, t[1] = s, t[2] = r, t[3] = o, t[4] = n, t[5] = l) : l = t[5], l
        }
    }));
export {
    T as i, A as n, x as r, k as t
};
//# sourceMappingURL=266db272-o2df2j60nwf34xm2.js.map