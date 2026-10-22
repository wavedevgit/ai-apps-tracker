import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Sh as t,
    bh as n,
    l7 as r,
    u7 as i,
    wh as a
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as o,
    Nn as s,
    Rn as c,
    wn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $9t as u,
    JLn as d,
    Q9t as f,
    XLn as p,
    YLn as m,
    ZLn as h,
    vUn as g,
    yUn as _
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Ip as v,
    Lp as y,
    Sb as b,
    xb as x
} from "./30901919-k5uqyx4vyplt9toa.js";

function S(e) {
    "use forget";
    let t = (0, A.c)(6),
        {
            className: n,
            fileId: i
        } = e,
        a = n ?? `text-token-text-secondary`,
        o;
    t[0] === a ? o = t[1] : (o = r(`inline-flex size-3 shrink-0 items-center justify-center align-middle`, a), t[0] = a, t[1] = o);
    let s = `library-shared-file-icon-${i}`,
        c;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, j.jsx)(y, {
        className: `h-[9px] w-[11.5px] shrink-0`
    }), t[2] = c) : c = t[2];
    let l;
    return t[3] !== o || t[4] !== s ? (l = (0, j.jsx)(`span`, {
        "aria-hidden": `true`,
        className: o,
        "data-testid": s,
        children: c
    }), t[3] = o, t[4] = s, t[5] = l) : l = t[5], l
}

function C(e) {
    "use forget";
    let r = (0, A.c)(16),
        {
            avatarUrl: i,
            name: a,
            userId: o
        } = e;
    if (!a) {
        let e;
        return r[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, j.jsx)(s, {
            ...u.unknownValue
        }), r[0] = e) : e = r[0], e
    }
    let c = o ?? a,
        l;
    r[1] === c ? l = r[2] : (l = t(c), r[1] = c, r[2] = l);
    let d;
    r[3] === a ? d = r[4] : (d = a.trim().split(/\s+/)[0] ?? a, r[3] = a, r[4] = d);
    let f = i ?? null,
        p;
    r[5] !== d || r[6] !== f ? (p = {
        name: d,
        picture: f
    }, r[5] = d, r[6] = f, r[7] = p) : p = r[7];
    let m;
    r[8] !== l || r[9] !== p ? (m = (0, j.jsx)(`span`, {
        "aria-hidden": `true`,
        className: `shrink-0`,
        children: (0, j.jsx)(n, {
            fallbackClassName: l,
            size: `small`,
            user: p
        })
    }), r[8] = l, r[9] = p, r[10] = m) : m = r[10];
    let h;
    r[11] === a ? h = r[12] : (h = (0, j.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: a
    }), r[11] = a, r[12] = h);
    let g;
    return r[13] !== m || r[14] !== h ? (g = (0, j.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [m, h]
    }), r[13] = m, r[14] = h, r[15] = g) : g = r[15], g
}

function w(e) {
    "use forget";
    let t = (0, A.c)(7),
        {
            className: n,
            fileName: r
        } = e,
        i;
    t[0] !== n || t[1] !== r ? (i = (0, j.jsx)(T, {
        className: n,
        fileName: r
    }), t[0] = n, t[1] = r, t[2] = i) : i = t[2];
    let a;
    return t[3] !== n || t[4] !== r || t[5] !== i ? (a = (0, j.jsx)(d, {
        className: n,
        fileName: r,
        legacy: i
    }), t[3] = n, t[4] = r, t[5] = i, t[6] = a) : a = t[6], a
}

function T(e) {
    "use forget";
    let t = (0, A.c)(22),
        {
            className: n,
            fileName: i
        } = e,
        a, o, s, c, l, u;
    if (t[0] !== n || t[1] !== i) {
        u = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            if (a = p(i), a.extension == null) {
                let e;
                t[8] === n ? e = t[9] : (e = r(`block min-w-0 truncate`, n), t[8] = n, t[9] = e), u = (0, j.jsx)(`span`, {
                    className: e,
                    "data-file-name-truncation-target": `true`,
                    children: a.head
                });
                break bb0
            }
            t[10] === n ? o = t[11] : (o = r(`flex min-w-0 max-w-full items-baseline overflow-hidden`, n), t[10] = n, t[11] = o),
            t[12] === i ? s = t[13] : (s = (0, j.jsx)(`span`, {
                className: `sr-only`,
                children: i
            }), t[12] = i, t[13] = s),
            c = (0, j.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `min-w-0 overflow-hidden text-ellipsis whitespace-nowrap`,
                "data-file-name-truncation-target": `true`,
                children: a.head.replace(/ +$/, D)
            }),
            l = a.tail.length > 0 ? (0, j.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `max-w-[45%] shrink-0 overflow-hidden text-ellipsis whitespace-nowrap`,
                "data-file-name-truncation-target": `true`,
                children: a.tail.replace(/^ +/, E)
            }) : null
        }
        t[0] = n, t[1] = i, t[2] = a, t[3] = o, t[4] = s, t[5] = c, t[6] = l, t[7] = u
    } else a = t[2], o = t[3], s = t[4], c = t[5], l = t[6], u = t[7];
    if (u !== Symbol.for(`react.early_return_sentinel`)) return u;
    let d;
    t[14] === a.extension ? d = t[15] : (d = (0, j.jsx)(`span`, {
        "aria-hidden": `true`,
        className: `shrink-0 whitespace-nowrap`,
        "data-file-name-extension": `true`,
        children: a.extension
    }), t[14] = a.extension, t[15] = d);
    let f;
    return t[16] !== o || t[17] !== s || t[18] !== c || t[19] !== l || t[20] !== d ? (f = (0, j.jsxs)(`span`, {
        className: o,
        children: [s, c, l, d]
    }), t[16] = o, t[17] = s, t[18] = c, t[19] = l, t[20] = d, t[21] = f) : f = t[21], f
}

function E(e) {
    return `\xA0`.repeat(e.length)
}

function D(e) {
    return `\xA0`.repeat(e.length)
}

function O(e) {
    "use forget";
    let t = (0, A.c)(9),
        {
            itemClassName: n,
            onSelect: i
        } = e,
        a;
    t[0] === n ? a = t[1] : (a = r(`keyboard-focused:focus-ring`, `text-token-text-primary`, n), t[0] = n, t[1] = a);
    let o, c;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, j.jsx)(x, {
        "aria-hidden": `true`,
        className: `icon`
    }), c = (0, j.jsx)(s, {
        ...u.chatAboutThis
    }), t[2] = o, t[3] = c) : (o = t[2], c = t[3]);
    let l;
    t[4] === i ? l = t[5] : (l = e => {
        e.stopPropagation(), i()
    }, t[4] = i, t[5] = l);
    let d;
    return t[6] !== a || t[7] !== l ? (d = (0, j.jsx)(g.Item, {
        size: `large`,
        className: a,
        icon: o,
        label: c,
        onSelect: l
    }), t[6] = a, t[7] = l, t[8] = d) : d = t[8], d
}

function k(e) {
    "use forget";
    let t = (0, A.c)(16),
        {
            ariaLabel: n,
            disabled: i,
            label: a,
            tone: o,
            tabIndex: s,
            children: c,
            onClick: l
        } = e,
        u = o === void 0 ? `default` : o,
        d;
    t[0] !== i || t[1] !== l ? (d = e => {
        if (e.stopPropagation(), i) {
            e.preventDefault();
            return
        }
        l?.(e)
    }, t[0] = i, t[1] = l, t[2] = d) : d = t[2];
    let f = u === `danger` ? `interactive-label-danger-soft dark:text-red-75!` : `text-token-text-secondary hover:text-token-text-primary`,
        p = i ? `opacity-40` : u === `danger` ? `interactive-bg-danger-ghost` : `hover:bg-token-bg-tertiary`,
        m;
    t[3] !== f || t[4] !== p ? (m = r(`relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-[6px] transition-colors`, `focus-visible:ring-token-ring focus-visible:ring-2 focus-visible:outline-none`, f, p), t[3] = f, t[4] = p, t[5] = m) : m = t[5];
    let h;
    t[6] === a ? h = t[7] : (h = (0, j.jsx)(`span`, {
        className: `sr-only`,
        children: a
    }), t[6] = a, t[7] = h);
    let g;
    return t[8] !== n || t[9] !== c || t[10] !== i || t[11] !== d || t[12] !== m || t[13] !== h || t[14] !== s ? (g = (0, j.jsxs)(`button`, {
        type: `button`,
        tabIndex: s,
        "aria-label": n,
        "aria-disabled": i,
        onClick: d,
        className: m,
        children: [c, h]
    }), t[8] = n, t[9] = c, t[10] = i, t[11] = d, t[12] = m, t[13] = h, t[14] = s, t[15] = g) : g = t[15], g
}
var A, j, M = e((() => {
    A = l(), a(), _(), b(), v(), m(), h(), i(), c(), f(), j = o()
}));
export {
    S as a, k as i, O as n, M as o, C as r, w as t
};
//# sourceMappingURL=8c1c50db-h1mjd45x1w3d9uto.js.map