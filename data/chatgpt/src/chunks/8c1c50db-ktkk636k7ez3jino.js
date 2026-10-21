import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ch as t,
    J5 as n,
    Y5 as r,
    xh as i,
    yh as a
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as o,
    Nn as s,
    Rn as c,
    wn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    K9t as u,
    NHn as d,
    PHn as f,
    dLn as p,
    fLn as m,
    lLn as h,
    q9t as g,
    uLn as _
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Cb as v,
    Rp as y,
    wb as b,
    zp as x
} from "./30901919-7dzdc1ou0jtwkwpt.js";

function S(e) {
    "use forget";
    let t = (0, A.c)(6),
        {
            className: r,
            fileId: i
        } = e,
        a = r ?? `text-token-text-secondary`,
        o;
    t[0] === a ? o = t[1] : (o = n(`inline-flex size-3 shrink-0 items-center justify-center align-middle`, a), t[0] = a, t[1] = o);
    let s = `library-shared-file-icon-${i}`,
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
            avatarUrl: n,
            name: r,
            userId: o
        } = e;
    if (!r) {
        let e;
        return t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, j.jsx)(s, {
            ...g.unknownValue
        }), t[0] = e) : e = t[0], e
    }
    let c = o ?? r,
        l;
    t[1] === c ? l = t[2] : (l = i(c), t[1] = c, t[2] = l);
    let u;
    t[3] === r ? u = t[4] : (u = r.trim().split(/\s+/)[0] ?? r, t[3] = r, t[4] = u);
    let d = n ?? null,
        f;
    t[5] !== u || t[6] !== d ? (f = {
        name: u,
        picture: d
    }, t[5] = u, t[6] = d, t[7] = f) : f = t[7];
    let p;
    t[8] !== l || t[9] !== f ? (p = (0, j.jsx)(`span`, {
        "aria-hidden": `true`,
        className: `shrink-0`,
        children: (0, j.jsx)(a, {
            fallbackClassName: l,
            size: `small`,
            user: f
        })
    }), t[8] = l, t[9] = f, t[10] = p) : p = t[10];
    let m;
    t[11] === r ? m = t[12] : (m = (0, j.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: r
    }), t[11] = r, t[12] = m);
    let h;
    return t[13] !== p || t[14] !== m ? (h = (0, j.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [p, m]
    }), t[13] = p, t[14] = m, t[15] = h) : h = t[15], h
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
            className: r,
            fileName: i
        } = e,
        a, o, s, c, l, u;
    if (t[0] !== r || t[1] !== i) {
        u = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            if (a = p(i), a.extension == null) {
                let e;
                t[8] === r ? e = t[9] : (e = n(`block min-w-0 truncate`, r), t[8] = r, t[9] = e), u = (0, j.jsx)(`span`, {
                    className: e,
                    "data-file-name-truncation-target": `true`,
                    children: a.head
                });
                break bb0
            }
            t[10] === r ? o = t[11] : (o = n(`flex min-w-0 max-w-full items-baseline overflow-hidden`, r), t[10] = r, t[11] = o),
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
        t[0] = r, t[1] = i, t[2] = a, t[3] = o, t[4] = s, t[5] = c, t[6] = l, t[7] = u
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
            itemClassName: r,
            onSelect: i
        } = e,
        a;
    t[0] === r ? a = t[1] : (a = n(`keyboard-focused:focus-ring`, `text-token-text-primary`, r), t[0] = r, t[1] = a);
    let o, c;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, j.jsx)(v, {
        "aria-hidden": `true`,
        className: `icon`
    }), c = (0, j.jsx)(s, {
        ...g.chatAboutThis
    }), t[2] = o, t[3] = c) : (o = t[2], c = t[3]);
    let l;
    t[4] === i ? l = t[5] : (l = e => {
        e.stopPropagation(), i()
    }, t[4] = i, t[5] = l);
    let u;
    return t[6] !== a || t[7] !== l ? (u = (0, j.jsx)(d.Item, {
        size: `large`,
        className: a,
        icon: o,
        label: c,
        onSelect: l
    }), t[6] = a, t[7] = l, t[8] = u) : u = t[8], u
}

function k(e) {
    "use forget";
    let t = (0, A.c)(16),
        {
            ariaLabel: r,
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
    t[3] !== f || t[4] !== p ? (m = n(`relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-[6px] transition-colors`, `focus-visible:ring-token-ring focus-visible:ring-2 focus-visible:outline-none`, f, p), t[3] = f, t[4] = p, t[5] = m) : m = t[5];
    let h;
    t[6] === a ? h = t[7] : (h = (0, j.jsx)(`span`, {
        className: `sr-only`,
        children: a
    }), t[6] = a, t[7] = h);
    let g;
    return t[8] !== r || t[9] !== c || t[10] !== i || t[11] !== d || t[12] !== m || t[13] !== h || t[14] !== s ? (g = (0, j.jsxs)(`button`, {
        type: `button`,
        tabIndex: s,
        "aria-label": r,
        "aria-disabled": i,
        onClick: d,
        className: m,
        children: [c, h]
    }), t[8] = r, t[9] = c, t[10] = i, t[11] = d, t[12] = m, t[13] = h, t[14] = s, t[15] = g) : g = t[15], g
}
var A, j, M = e((() => {
    A = l(), t(), f(), b(), y(), _(), m(), r(), c(), u(), j = o()
}));
export {
    S as a, k as i, O as n, M as o, C as r, w as t
};
//# sourceMappingURL=8c1c50db-ktkk636k7ez3jino.js.map