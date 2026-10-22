import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    eE as r,
    l7 as i,
    u7 as a
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as o,
    Ln as s,
    Nn as c,
    Rn as l,
    Vn as u,
    wn as d,
    zn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    a_ as p,
    i_ as m,
    n_ as h,
    r_ as g
} from "./30901919-cmi3nh547dwrqkxv.js";
import {
    a as _,
    r as v
} from "./76b5a357-benxdh69028dkycz.js";
var y, b, x, S, C, w, T, E, D, O, k, A, j, M, N = e((() => {
    y = d(), r(), p(), g(), a(), _(), b = t(u()), l(), x = o(), S = function(e) {
        return e[e.New = 0] = `New`, e[e.Modified = 1] = `Modified`, e[e.Unmodified = 2] = `Unmodified`, e
    }({}), C = e => {
        "use forget";
        let t = (0, y.c)(5),
            {
                children: n,
                className: r
            } = e,
            a;
        t[0] === r ? a = t[1] : (a = i(r, `items-center rounded-full border px-1 py-0.5 text-[8px] leading-3 font-semibold uppercase`), t[0] = r, t[1] = a);
        let o;
        return t[2] !== n || t[3] !== a ? (o = (0, x.jsx)(`span`, {
            className: a,
            children: n
        }), t[2] = n, t[3] = a, t[4] = o) : o = t[4], o
    }, w = e => {
        "use forget";
        let t = (0, y.c)(2),
            {
                delta: n
            } = e;
        switch (n) {
            case 0: {
                let e;
                return t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, x.jsx)(C, {
                    className: `border-blue-100 text-blue-500 dark:border-blue-800 dark:text-blue-200`,
                    children: (0, x.jsx)(c, {
                        id: `5wPfIg`,
                        defaultMessage: `New`
                    })
                }), t[0] = e) : e = t[0], e
            }
            case 1: {
                let e;
                return t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, x.jsx)(C, {
                    className: `border-token-border-status-warning text-token-text-status-warning`,
                    children: (0, x.jsx)(c, {
                        id: `vpGa1d`,
                        defaultMessage: `Modified`
                    })
                }), t[1] = e) : e = t[1], e
            }
            default:
                return null
        }
    }, T = e => {
        try {
            return JSON.stringify(e, null, 2)
        } catch {
            return null
        }
    }, E = {
        key: `text-blue-500 dark:text-blue-300`,
        string: `text-green-600 dark:text-green-300`,
        number: `text-purple-500 dark:text-purple-300`,
        boolean: `text-orange-500 dark:text-orange-300`,
        nullish: `text-red-500 dark:text-red-300`
    }, D = e => {
        if (!e) return null;
        let t = /"(?:\\u[\da-fA-F]{4}|\\[^u]|[^\\"])*"|\btrue\b|\bfalse\b|\bnull\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
            n = [],
            r = 0,
            i, a = 0,
            o = e => {
                e.length !== 0 && n.push((0, x.jsx)(`span`, {
                    children: e
                }, `json-text-${a++}`))
            };
        for (;
            (i = t.exec(e)) != null;) {
            let t = i.index,
                s = i[0];
            t > r && o(e.slice(r, t));
            let c = t + s.length,
                l;
            if (s.startsWith(`"`)) {
                let t = c;
                for (; t < e.length && /\s/.test(e.charAt(t));) t += 1;
                l = e.charAt(t) === `:` ? E.key : E.string
            } else l = s === `true` || s === `false` ? E.boolean : s === `null` ? E.nullish : E.number;
            n.push((0, x.jsx)(`span`, {
                className: l,
                children: s
            }, `json-token-${a++}`)), r = c
        }
        return r < e.length && o(e.slice(r)), (0, x.jsx)(x.Fragment, {
            children: n
        })
    }, O = (e, t) => {
        if (e == null || t == null) return {
            diffCount: {
                added: 0,
                removed: 0
            },
            diffComponent: null
        };
        let n = 0,
            r = (e, t = ``, r) => (0, x.jsx)(`div`, {
                className: r,
                children: e.replace(`/^.{0,${t.length}}/gm`, t)
            }, `diff-block-${n++}`),
            i = {
                added: 0,
                removed: 0
            },
            a = [];
        return v(e, t).forEach(e => {
            let t = e.value.replace(/\n$/, ``);
            e.added ? (i.added += t.split(`
`).length, a.push(r(t, `+ `, `text-green-600 dark:text-green-300`))) : e.removed ? (i.removed += t.split(`
`).length, a.push(r(t, `- `, `text-red-500 dark:text-red-200`))) : a.push(r(t))
        }), {
            diffCount: i,
            diffComponent: a.length ? a : null
        }
    }, k = e => {
        "use forget";
        let t = (0, y.c)(49),
            {
                action: r,
                actionDelta: a,
                prevAction: o,
                className: s,
                initiallyCollapsed: l
            } = e,
            u = l !== void 0 && l,
            d = f(),
            p;
        t[0] === r ? p = t[1] : (p = T(r), t[0] = r, t[1] = p);
        let g = p,
            _;
        t[2] === g ? _ = t[3] : (_ = D(g), t[2] = g, t[3] = _);
        let v = _,
            [S, C] = (0, b.useState)(u),
            w;
        bb0: {
            if (a === 1 && o) {
                let e;
                t[4] !== o || t[5] !== g ? (e = O(T(o), g), t[4] = o, t[5] = g, t[6] = e) : e = t[6], w = e;
                break bb0
            }
            let e;t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
                diffCount: {
                    added: 0,
                    removed: 0
                },
                diffComponent: null
            }, t[7] = e) : e = t[7],
            w = e
        }
        let {
            diffCount: E,
            diffComponent: k
        } = w, A = S ? `end-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2` : `end-0`, j;
        t[8] === A ? j = t[9] : (j = i([`absolute bottom-0 z-20 transition-all duration-150`, A]), t[8] = A, t[9] = j);
        let N = S ? `secondary` : `ghost`,
            P;
        t[10] === S ? P = t[11] : (P = () => C(!S), t[10] = S, t[11] = P);
        let F = S ? h : m,
            I = !S && `text-token-text-tertiary hover:text-token-text-primary`,
            L;
        t[12] === I ? L = t[13] : (L = i([`m-2`, I]), t[12] = I, t[13] = L);
        let R;
        t[14] === S ? R = t[15] : (R = S ? (0, x.jsx)(c, {
            id: `0PERAC`,
            defaultMessage: `Expand`
        }) : (0, x.jsx)(`span`, {
            className: `sr-only`,
            children: (0, x.jsx)(c, {
                id: `KwNF2K`,
                defaultMessage: `Collapse`
            })
        }), t[14] = S, t[15] = R);
        let z;
        t[16] !== L || t[17] !== R || t[18] !== N || t[19] !== P || t[20] !== F ? (z = (0, x.jsx)(n, {
            size: `small`,
            color: N,
            onClick: P,
            icon: F,
            className: L,
            children: R
        }), t[16] = L, t[17] = R, t[18] = N, t[19] = P, t[20] = F, t[21] = z) : z = t[21];
        let B;
        t[22] !== z || t[23] !== j ? (B = (0, x.jsx)(`div`, {
            className: j,
            children: z
        }), t[22] = z, t[23] = j, t[24] = B) : B = t[24];
        let V = S && `opacity-100`,
            H;
        t[25] === V ? H = t[26] : (H = i(`from-token-bg-tertiary/30 to-token-bg-tertiary pointer-events-none absolute inset-0 z-10 h-full bg-gradient-to-b opacity-0 transition-opacity duration-150`, V), t[25] = V, t[26] = H);
        let U;
        t[27] === H ? U = t[28] : (U = (0, x.jsx)(`div`, {
            className: H,
            "aria-hidden": `true`
        }), t[27] = H, t[28] = U);
        let W = S ? `max-h-24 cursor-pointer overflow-hidden select-none` : `max-h-72 cursor-text overflow-auto select-text`,
            G;
        t[29] !== s || t[30] !== W ? (G = i([s, W, `bg-token-bg-tertiary text-token-text-secondary w-full px-3 py-2 font-mono text-xs leading-5 whitespace-pre-wrap transition-all duration-150`]), t[29] = s, t[30] = W, t[31] = G) : G = t[31];
        let K;
        t[32] === Symbol.for(`react.memo_cache_sentinel`) ? (K = () => C(!1), t[32] = K) : K = t[32];
        let q;
        t[33] !== k || t[34] !== v || t[35] !== d || t[36] !== g ? (q = k ?? v ?? g ?? d.formatMessage(M.actionDetailsSerializationError), t[33] = k, t[34] = v, t[35] = d, t[36] = g, t[37] = q) : q = t[37];
        let J;
        t[38] !== G || t[39] !== q ? (J = (0, x.jsx)(`pre`, {
            className: G,
            onClick: K,
            children: q
        }), t[38] = G, t[39] = q, t[40] = J) : J = t[40];
        let Y;
        t[41] !== E.added || t[42] !== E.removed ? (Y = E.added > 0 || E.removed > 0 ? (0, x.jsxs)(`div`, {
            className: `bg-token-bg-primary/80 absolute end-2 top-2 z-30 flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium backdrop-blur-sm`,
            children: [E.added > 0 && (0, x.jsxs)(`span`, {
                className: `text-green-600 dark:text-green-500`,
                children: [`+`, E.added]
            }), E.removed > 0 && (0, x.jsxs)(`span`, {
                className: `text-red-500 dark:text-red-300`,
                children: [`-`, E.removed]
            })]
        }) : null, t[41] = E.added, t[42] = E.removed, t[43] = Y) : Y = t[43];
        let X;
        return t[44] !== B || t[45] !== U || t[46] !== J || t[47] !== Y ? (X = (0, x.jsxs)(`div`, {
            className: `action-details border-token-border-default relative overflow-hidden rounded-xl border`,
            children: [B, U, J, Y]
        }), t[44] = B, t[45] = U, t[46] = J, t[47] = Y, t[48] = X) : X = t[48], X
    }, A = e => {
        let t = 0;
        for (let n of T(e) ?? ``) t = (t << 5) - t + n.charCodeAt(0), t |= 0;
        return t
    }, j = (e, t) => {
        "use forget";
        let n = (0, y.c)(4);
        if (!t) {
            let e;
            return n[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = new Map, n[0] = e) : e = n[0], e
        }
        let r;
        if (n[1] !== e || n[2] !== t) {
            r = new Map;
            for (let n of e.entries()) {
                let [e, i] = n, {
                    hash: a
                } = i, o = t.get(e);
                o ? o.hash !== a && r.set(e, 1) : r.set(e, 0)
            }
            n[1] = e, n[2] = t, n[3] = r
        } else r = n[3];
        return r
    }, M = s({
        actionDetailsSerializationError: {
            id: `j5DFg9`,
            defaultMessage: `Error serializing tool details`
        }
    })
}));
export {
    N as a, A as i, w as n, j as o, k as r, S as t
};
//# sourceMappingURL=b00adf98-bk669r9h9byz0s0y.js.map