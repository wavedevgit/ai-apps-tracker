import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    b5 as n,
    y5 as r
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as i,
    Vn as a,
    wn as o
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Ojt as s,
    kjt as c
} from "./conversation-small-fym1zmu9zimymmm1.js";

function l(e) {
    "use forget";
    let t = (0, d.c)(22),
        {
            presentation: n,
            name: i,
            description: a,
            icon: o,
            action: s,
            actionInsideClickTarget: c,
            onClick: l,
            ariaLabel: p,
            className: m
        } = e,
        h = n === void 0 ? `page` : n,
        g = c !== void 0 && c,
        _ = h === `dialog` ? `min-h-11 py-1` : `h-[66px]`,
        v;
    t[0] !== a || t[1] !== o || t[2] !== i || t[3] !== h ? (v = (0, f.jsx)(u, {
        presentation: h,
        name: i,
        description: a,
        icon: o
    }), t[0] = a, t[1] = o, t[2] = i, t[3] = h, t[4] = v) : v = t[4];
    let y = v,
        b;
    t[5] !== m || t[6] !== _ ? (b = r(`flex items-center gap-4`, _, m), t[5] = m, t[6] = _, t[7] = b) : b = t[7];
    let x;
    t[8] !== s || t[9] !== g || t[10] !== p || t[11] !== y || t[12] !== l ? (x = l ? (0, f.jsxs)(`button`, {
        type: `button`,
        "aria-label": p,
        className: `hover:bg-token-bg-secondary focus-visible:outline-token-border-default -mx-2 flex h-full min-w-0 flex-1 cursor-pointer items-center gap-4 rounded-lg px-2 text-start focus-visible:outline-2 focus-visible:outline-offset-[-2px]`,
        onClick: l,
        children: [y, g && s ? (0, f.jsx)(`div`, {
            className: `shrink-0`,
            children: s
        }) : null]
    }) : y, t[8] = s, t[9] = g, t[10] = p, t[11] = y, t[12] = l, t[13] = x) : x = t[13];
    let S;
    t[14] !== s || t[15] !== g || t[16] !== l ? (S = s && (!l || !g) ? (0, f.jsx)(`div`, {
        className: `shrink-0`,
        children: s
    }) : null, t[14] = s, t[15] = g, t[16] = l, t[17] = S) : S = t[17];
    let C;
    return t[18] !== b || t[19] !== x || t[20] !== S ? (C = (0, f.jsxs)(`div`, {
        className: b,
        children: [x, S]
    }), t[18] = b, t[19] = x, t[20] = S, t[21] = C) : C = t[21], C
}

function u({
    presentation: e = `page`,
    name: t,
    description: n,
    icon: i
}) {
    return (0, f.jsxs)(`div`, {
        className: r(`flex min-w-0 flex-1 items-center`, e === `dialog` ? `gap-3` : `gap-2`),
        children: [i, (0, f.jsxs)(`div`, {
            className: `min-w-0 flex-1`,
            children: [(0, f.jsx)(`div`, {
                className: r(`text-token-text-primary font-normal`, e === `dialog` ? `text-base leading-6` : `text-sm leading-5`),
                children: t
            }), n ? (0, f.jsx)(`div`, {
                className: `text-token-text-secondary mt-0.5 line-clamp-1 text-sm leading-5 break-words`,
                children: n
            }) : null]
        })]
    })
}
var d, f, p = e((() => {
    d = o(), n(), f = i()
}));

function m(e) {
    "use forget";
    let t = (0, v.c)(21),
        {
            presentation: n,
            name: i,
            description: a,
            icon: o,
            action: c,
            actionInsideClickTarget: d,
            onClick: f,
            ariaLabel: p,
            className: m,
            disabledReason: g,
            statusTooltip: _
        } = e,
        x = n === void 0 ? `page` : n,
        S = d !== void 0 && d,
        [C, w] = (0, y.useState)(!1);
    if (g) {
        let e = (C ? _ : void 0) ?? g,
            n;
        t[0] !== c || t[1] !== p || t[2] !== m || t[3] !== a || t[4] !== o || t[5] !== i || t[6] !== x ? (n = e => (0, b.jsxs)(`button`, {
            ...e,
            type: `button`,
            "aria-label": p,
            "aria-disabled": `true`,
            onClick: h,
            onPointerOver: e => {
                w(e.target instanceof Element && e.target.closest(`[data-plugin-status-icon]`) != null)
            },
            onPointerLeave: () => w(!1),
            className: r(`interactive-button focus-visible:outline-token-border-default flex w-full cursor-not-allowed items-center gap-4 rounded-lg text-start focus-visible:outline-2 focus-visible:outline-offset-2`, x === `dialog` ? `min-h-11 py-1` : `h-[66px]`, m),
            children: [(0, b.jsx)(u, {
                presentation: x,
                name: i,
                description: a,
                icon: o
            }), c ? (0, b.jsx)(`div`, {
                className: `shrink-0`,
                children: c
            }) : null]
        }), t[0] = c, t[1] = p, t[2] = m, t[3] = a, t[4] = o, t[5] = i, t[6] = x, t[7] = n) : n = t[7];
        let l;
        return t[8] !== e || t[9] !== n ? (l = (0, b.jsx)(s, {
            content: e,
            contentLayout: `multi-line`,
            children: n
        }), t[8] = e, t[9] = n, t[10] = l) : l = t[10], l
    }
    let T;
    return t[11] !== c || t[12] !== S || t[13] !== p || t[14] !== m || t[15] !== a || t[16] !== o || t[17] !== i || t[18] !== f || t[19] !== x ? (T = (0, b.jsx)(l, {
        presentation: x,
        name: i,
        description: a,
        icon: o,
        action: c,
        actionInsideClickTarget: S,
        onClick: f,
        ariaLabel: p,
        className: m
    }), t[11] = c, t[12] = S, t[13] = p, t[14] = m, t[15] = a, t[16] = o, t[17] = i, t[18] = f, t[19] = x, t[20] = T) : T = t[20], T
}

function h(e) {
    return e.preventDefault()
}

function g(e) {
    "use forget";
    let t = (0, v.c)(17),
        {
            name: n,
            icon: i,
            buttonRef: a,
            onClick: o,
            disabledReason: c
        } = e,
        l;
    t[0] === n ? l = t[1] : (l = (0, b.jsx)(`span`, {
        children: n
    }), t[0] = n, t[1] = l);
    let u;
    t[2] !== i || t[3] !== l ? (u = (0, b.jsxs)(b.Fragment, {
        children: [i, l]
    }), t[2] = i, t[3] = l, t[4] = u) : u = t[4];
    let d = u;
    if (!o && !c) {
        let e;
        return t[5] === d ? e = t[6] : (e = (0, b.jsx)(`div`, {
            className: `border-token-border-default text-token-text-primary flex h-9 items-center gap-1 rounded-full border ps-2 pe-3 text-sm leading-[18px]`,
            children: d
        }), t[5] = d, t[6] = e), e
    }
    let f = !c,
        p;
    t[7] !== a || t[8] !== d || t[9] !== c || t[10] !== n || t[11] !== o ? (p = e => (0, b.jsx)(`button`, {
        ...e,
        ref: a,
        type: `button`,
        "aria-label": typeof n == `string` ? n : void 0,
        "aria-disabled": c ? !0 : void 0,
        className: r(`border-token-border-default text-token-text-primary flex h-9 items-center gap-1 rounded-full border ps-2 pe-3 text-sm leading-[18px]`, `interactive-button interactive-button-secondary interactive-outline-secondary cursor-pointer transition-colors aria-disabled:pointer-events-auto`),
        onClick: e => {
            if (c) {
                e.preventDefault();
                return
            }
            o?.()
        },
        children: d
    }), t[7] = a, t[8] = d, t[9] = c, t[10] = n, t[11] = o, t[12] = p) : p = t[12];
    let m;
    return t[13] !== c || t[14] !== f || t[15] !== p ? (m = (0, b.jsx)(s, {
        content: c,
        contentLayout: `multi-line`,
        disabled: f,
        children: p
    }), t[13] = c, t[14] = f, t[15] = p, t[16] = m) : m = t[16], m
}

function _(e) {
    "use forget";
    let t = (0, v.c)(10),
        {
            rows: n,
            variant: i
        } = e,
        a = (i === void 0 ? `flush` : i) === `card`,
        o = a ? `border-token-border-light divide-token-border-light overflow-hidden rounded-xl border` : `border-token-border-default divide-token-border-default mt-3 border-y`,
        s;
    t[0] === o ? s = t[1] : (s = r(`divide-y`, o), t[0] = o, t[1] = s);
    let c;
    if (t[2] !== a || t[3] !== n) {
        let e;
        t[5] === a ? e = t[6] : (e = e => (0, b.jsxs)(`div`, {
            className: r(`grid gap-4`, a ? `grid-cols-[128px_minmax(0,1fr)] px-4 py-3 sm:grid-cols-[188px_minmax(0,1fr)]` : `grid-cols-[146px_minmax(0,1fr)] py-3`),
            children: [(0, b.jsx)(`dt`, {
                className: `text-token-text-tertiary text-sm`,
                children: e.label
            }), (0, b.jsx)(`dd`, {
                className: `text-token-text-primary min-w-0 text-sm`,
                children: typeof e.value == `string` ? (0, b.jsx)(`span`, {
                    className: `break-words`,
                    children: e.value
                }) : e.value
            })]
        }, e.id), t[5] = a, t[6] = e), c = n.map(e), t[2] = a, t[3] = n, t[4] = c
    } else c = t[4];
    let l;
    return t[7] !== s || t[8] !== c ? (l = (0, b.jsx)(`dl`, {
        className: s,
        children: c
    }), t[7] = s, t[8] = c, t[9] = l) : l = t[9], l
}
var v, y, b, x = e((() => {
    v = o(), p(), c(), n(), y = t(a()), b = i()
}));
export {
    x as i, _ as n, g as r, m as t
};
//# sourceMappingURL=76d6530a-mbj20490bq9xb9ro.js.map