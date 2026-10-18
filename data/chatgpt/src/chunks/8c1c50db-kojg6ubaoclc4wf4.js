import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    b5 as t,
    eh as n,
    ih as r,
    nh as i,
    y5 as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as o,
    Nn as s,
    Rn as c,
    wn as l
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $In as u,
    N9t as d,
    P9t as f,
    QIn as p,
    THn as m,
    ZIn as h,
    eLn as g,
    wHn as _
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Db as v,
    Eb as y,
    Rp as b,
    zp as x
} from "./30901919-e33mbl5u1y88w5wu.js";

function S(e) {
    "use forget";
    let t = (0, A.c)(6),
        {
            className: n,
            fileId: r
        } = e,
        i = n ?? `text-token-text-secondary`,
        o;
    t[0] === i ? o = t[1] : (o = a(`inline-flex size-3 shrink-0 items-center justify-center align-middle`, i), t[0] = i, t[1] = o);
    let s = `library-shared-file-icon-${r}`,
        c;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, j.jsx)(x, {
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
    let t = (0, A.c)(16),
        {
            avatarUrl: r,
            name: a,
            userId: o
        } = e;
    if (!a) {
        let e;
        return t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, j.jsx)(s, {
            ...f.unknownValue
        }), t[0] = e) : e = t[0], e
    }
    let c = o ?? a,
        l;
    t[1] === c ? l = t[2] : (l = i(c), t[1] = c, t[2] = l);
    let u;
    t[3] === a ? u = t[4] : (u = a.trim().split(/\s+/)[0] ?? a, t[3] = a, t[4] = u);
    let d = r ?? null,
        p;
    t[5] !== u || t[6] !== d ? (p = {
        name: u,
        picture: d
    }, t[5] = u, t[6] = d, t[7] = p) : p = t[7];
    let m;
    t[8] !== l || t[9] !== p ? (m = (0, j.jsx)(`span`, {
        "aria-hidden": `true`,
        className: `shrink-0`,
        children: (0, j.jsx)(n, {
            fallbackClassName: l,
            size: `small`,
            user: p
        })
    }), t[8] = l, t[9] = p, t[10] = m) : m = t[10];
    let h;
    t[11] === a ? h = t[12] : (h = (0, j.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: a
    }), t[11] = a, t[12] = h);
    let g;
    return t[13] !== m || t[14] !== h ? (g = (0, j.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [m, h]
    }), t[13] = m, t[14] = h, t[15] = g) : g = t[15], g
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
    return t[3] !== n || t[4] !== r || t[5] !== i ? (a = (0, j.jsx)(h, {
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
            fileName: r
        } = e,
        i, o, s, c, l, d;
    if (t[0] !== n || t[1] !== r) {
        d = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            if (i = u(r), i.extension == null) {
                let e;
                t[8] === n ? e = t[9] : (e = a(`block min-w-0 truncate`, n), t[8] = n, t[9] = e), d = (0, j.jsx)(`span`, {
                    className: e,
                    "data-file-name-truncation-target": `true`,
                    children: i.head
                });
                break bb0
            }
            t[10] === n ? o = t[11] : (o = a(`flex min-w-0 max-w-full items-baseline overflow-hidden`, n), t[10] = n, t[11] = o),
            t[12] === r ? s = t[13] : (s = (0, j.jsx)(`span`, {
                className: `sr-only`,
                children: r
            }), t[12] = r, t[13] = s),
            c = (0, j.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `min-w-0 overflow-hidden text-ellipsis whitespace-nowrap`,
                "data-file-name-truncation-target": `true`,
                children: i.head.replace(/ +$/, D)
            }),
            l = i.tail.length > 0 ? (0, j.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `max-w-[45%] shrink-0 overflow-hidden text-ellipsis whitespace-nowrap`,
                "data-file-name-truncation-target": `true`,
                children: i.tail.replace(/^ +/, E)
            }) : null
        }
        t[0] = n, t[1] = r, t[2] = i, t[3] = o, t[4] = s, t[5] = c, t[6] = l, t[7] = d
    } else i = t[2], o = t[3], s = t[4], c = t[5], l = t[6], d = t[7];
    if (d !== Symbol.for(`react.early_return_sentinel`)) return d;
    let f;
    t[14] === i.extension ? f = t[15] : (f = (0, j.jsx)(`span`, {
        "aria-hidden": `true`,
        className: `shrink-0 whitespace-nowrap`,
        "data-file-name-extension": `true`,
        children: i.extension
    }), t[14] = i.extension, t[15] = f);
    let p;
    return t[16] !== o || t[17] !== s || t[18] !== c || t[19] !== l || t[20] !== f ? (p = (0, j.jsxs)(`span`, {
        className: o,
        children: [s, c, l, f]
    }), t[16] = o, t[17] = s, t[18] = c, t[19] = l, t[20] = f, t[21] = p) : p = t[21], p
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
            onSelect: r
        } = e,
        i;
    t[0] === n ? i = t[1] : (i = a(`keyboard-focused:focus-ring`, `text-token-text-primary`, n), t[0] = n, t[1] = i);
    let o, c;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, j.jsx)(y, {
        "aria-hidden": `true`,
        className: `icon`
    }), c = (0, j.jsx)(s, {
        ...f.chatAboutThis
    }), t[2] = o, t[3] = c) : (o = t[2], c = t[3]);
    let l;
    t[4] === r ? l = t[5] : (l = e => {
        e.stopPropagation(), r()
    }, t[4] = r, t[5] = l);
    let u;
    return t[6] !== i || t[7] !== l ? (u = (0, j.jsx)(_.Item, {
        size: `large`,
        className: i,
        icon: o,
        label: c,
        onSelect: l
    }), t[6] = i, t[7] = l, t[8] = u) : u = t[8], u
}

function k(e) {
    "use forget";
    let t = (0, A.c)(16),
        {
            ariaLabel: n,
            disabled: r,
            label: i,
            tone: o,
            tabIndex: s,
            children: c,
            onClick: l
        } = e,
        u = o === void 0 ? `default` : o,
        d;
    t[0] !== r || t[1] !== l ? (d = e => {
        if (e.stopPropagation(), r) {
            e.preventDefault();
            return
        }
        l?.(e)
    }, t[0] = r, t[1] = l, t[2] = d) : d = t[2];
    let f = u === `danger` ? `interactive-label-danger-soft dark:text-red-75!` : `text-token-text-secondary hover:text-token-text-primary`,
        p = r ? `opacity-40` : u === `danger` ? `interactive-bg-danger-ghost` : `hover:bg-token-bg-tertiary`,
        m;
    t[3] !== f || t[4] !== p ? (m = a(`relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-[6px] transition-colors`, `focus-visible:ring-token-ring focus-visible:ring-2 focus-visible:outline-none`, f, p), t[3] = f, t[4] = p, t[5] = m) : m = t[5];
    let h;
    t[6] === i ? h = t[7] : (h = (0, j.jsx)(`span`, {
        className: `sr-only`,
        children: i
    }), t[6] = i, t[7] = h);
    let g;
    return t[8] !== n || t[9] !== c || t[10] !== r || t[11] !== d || t[12] !== m || t[13] !== h || t[14] !== s ? (g = (0, j.jsxs)(`button`, {
        type: `button`,
        tabIndex: s,
        "aria-label": n,
        "aria-disabled": r,
        onClick: d,
        className: m,
        children: [c, h]
    }), t[8] = n, t[9] = c, t[10] = r, t[11] = d, t[12] = m, t[13] = h, t[14] = s, t[15] = g) : g = t[15], g
}
var A, j, M = e((() => {
    A = l(), r(), m(), v(), b(), p(), g(), t(), c(), d(), j = o()
}));
export {
    S as a, k as i, O as n, M as o, C as r, w as t
};
//# sourceMappingURL=8c1c50db-kojg6ubaoclc4wf4.js.map