import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    K5 as t,
    Sh as n,
    bh as r,
    q5 as i,
    wh as a
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as o,
    Nn as s,
    Rn as c,
    wn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    MUn as u,
    cRn as d,
    jUn as f,
    lRn as p,
    nen as m,
    sRn as h,
    ten as g,
    uRn as _
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Ip as v,
    Lp as y,
    Sb as b,
    xb as x
} from "./30901919-s8bko9nrkqwv6i4f.js";

function S(e) {
    "use forget";
    let n = (0, A.c)(6),
        {
            className: r,
            fileId: i
        } = e,
        a = r ?? `text-token-text-secondary`,
        o;
    n[0] === a ? o = n[1] : (o = t(`inline-flex size-3 shrink-0 items-center justify-center align-middle`, a), n[0] = a, n[1] = o);
    let s = `library-shared-file-icon-${i}`,
        c;
    n[2] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, j.jsx)(y, {
        className: `h-[9px] w-[11.5px] shrink-0`
    }), n[2] = c) : c = n[2];
    let l;
    return n[3] !== o || n[4] !== s ? (l = (0, j.jsx)(`span`, {
        "aria-hidden": `true`,
        className: o,
        "data-testid": s,
        children: c
    }), n[3] = o, n[4] = s, n[5] = l) : l = n[5], l
}

function C(e) {
    "use forget";
    let t = (0, A.c)(16),
        {
            avatarUrl: i,
            name: a,
            userId: o
        } = e;
    if (!a) {
        let e;
        return t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, j.jsx)(s, {
            ...m.unknownValue
        }), t[0] = e) : e = t[0], e
    }
    let c = o ?? a,
        l;
    t[1] === c ? l = t[2] : (l = n(c), t[1] = c, t[2] = l);
    let u;
    t[3] === a ? u = t[4] : (u = a.trim().split(/\s+/)[0] ?? a, t[3] = a, t[4] = u);
    let d = i ?? null,
        f;
    t[5] !== u || t[6] !== d ? (f = {
        name: u,
        picture: d
    }, t[5] = u, t[6] = d, t[7] = f) : f = t[7];
    let p;
    t[8] !== l || t[9] !== f ? (p = (0, j.jsx)(`span`, {
        "aria-hidden": `true`,
        className: `shrink-0`,
        children: (0, j.jsx)(r, {
            fallbackClassName: l,
            size: `small`,
            user: f
        })
    }), t[8] = l, t[9] = f, t[10] = p) : p = t[10];
    let h;
    t[11] === a ? h = t[12] : (h = (0, j.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: a
    }), t[11] = a, t[12] = h);
    let g;
    return t[13] !== p || t[14] !== h ? (g = (0, j.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [p, h]
    }), t[13] = p, t[14] = h, t[15] = g) : g = t[15], g
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
    let n = (0, A.c)(22),
        {
            className: r,
            fileName: i
        } = e,
        a, o, s, c, l, u;
    if (n[0] !== r || n[1] !== i) {
        u = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            if (a = p(i), a.extension == null) {
                let e;
                n[8] === r ? e = n[9] : (e = t(`block min-w-0 truncate`, r), n[8] = r, n[9] = e), u = (0, j.jsx)(`span`, {
                    className: e,
                    "data-file-name-truncation-target": `true`,
                    children: a.head
                });
                break bb0
            }
            n[10] === r ? o = n[11] : (o = t(`flex min-w-0 max-w-full items-baseline overflow-hidden`, r), n[10] = r, n[11] = o),
            n[12] === i ? s = n[13] : (s = (0, j.jsx)(`span`, {
                className: `sr-only`,
                children: i
            }), n[12] = i, n[13] = s),
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
        n[0] = r, n[1] = i, n[2] = a, n[3] = o, n[4] = s, n[5] = c, n[6] = l, n[7] = u
    } else a = n[2], o = n[3], s = n[4], c = n[5], l = n[6], u = n[7];
    if (u !== Symbol.for(`react.early_return_sentinel`)) return u;
    let d;
    n[14] === a.extension ? d = n[15] : (d = (0, j.jsx)(`span`, {
        "aria-hidden": `true`,
        className: `shrink-0 whitespace-nowrap`,
        "data-file-name-extension": `true`,
        children: a.extension
    }), n[14] = a.extension, n[15] = d);
    let f;
    return n[16] !== o || n[17] !== s || n[18] !== c || n[19] !== l || n[20] !== d ? (f = (0, j.jsxs)(`span`, {
        className: o,
        children: [s, c, l, d]
    }), n[16] = o, n[17] = s, n[18] = c, n[19] = l, n[20] = d, n[21] = f) : f = n[21], f
}

function E(e) {
    return `\xA0`.repeat(e.length)
}

function D(e) {
    return `\xA0`.repeat(e.length)
}

function O(e) {
    "use forget";
    let n = (0, A.c)(9),
        {
            itemClassName: r,
            onSelect: i
        } = e,
        a;
    n[0] === r ? a = n[1] : (a = t(`keyboard-focused:focus-ring`, `text-token-text-primary`, r), n[0] = r, n[1] = a);
    let o, c;
    n[2] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, j.jsx)(x, {
        "aria-hidden": `true`,
        className: `icon`
    }), c = (0, j.jsx)(s, {
        ...m.chatAboutThis
    }), n[2] = o, n[3] = c) : (o = n[2], c = n[3]);
    let l;
    n[4] === i ? l = n[5] : (l = e => {
        e.stopPropagation(), i()
    }, n[4] = i, n[5] = l);
    let u;
    return n[6] !== a || n[7] !== l ? (u = (0, j.jsx)(f.Item, {
        size: `large`,
        className: a,
        icon: o,
        label: c,
        onSelect: l
    }), n[6] = a, n[7] = l, n[8] = u) : u = n[8], u
}

function k(e) {
    "use forget";
    let n = (0, A.c)(16),
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
    n[0] !== i || n[1] !== l ? (d = e => {
        if (e.stopPropagation(), i) {
            e.preventDefault();
            return
        }
        l?.(e)
    }, n[0] = i, n[1] = l, n[2] = d) : d = n[2];
    let f = u === `danger` ? `interactive-label-danger-soft dark:text-red-75!` : `text-token-text-secondary hover:text-token-text-primary`,
        p = i ? `opacity-40` : u === `danger` ? `interactive-bg-danger-ghost` : `hover:bg-token-bg-tertiary`,
        m;
    n[3] !== f || n[4] !== p ? (m = t(`relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-[6px] transition-colors`, `focus-visible:ring-token-ring focus-visible:ring-2 focus-visible:outline-none`, f, p), n[3] = f, n[4] = p, n[5] = m) : m = n[5];
    let h;
    n[6] === a ? h = n[7] : (h = (0, j.jsx)(`span`, {
        className: `sr-only`,
        children: a
    }), n[6] = a, n[7] = h);
    let g;
    return n[8] !== r || n[9] !== c || n[10] !== i || n[11] !== d || n[12] !== m || n[13] !== h || n[14] !== s ? (g = (0, j.jsxs)(`button`, {
        type: `button`,
        tabIndex: s,
        "aria-label": r,
        "aria-disabled": i,
        onClick: d,
        className: m,
        children: [c, h]
    }), n[8] = r, n[9] = c, n[10] = i, n[11] = d, n[12] = m, n[13] = h, n[14] = s, n[15] = g) : g = n[15], g
}
var A, j, M = e((() => {
    A = l(), a(), u(), b(), v(), d(), _(), i(), c(), g(), j = o()
}));
export {
    S as a, k as i, O as n, M as o, C as r, w as t
};
//# sourceMappingURL=8c1c50db-cbuurzbip2pl2c7i.js.map