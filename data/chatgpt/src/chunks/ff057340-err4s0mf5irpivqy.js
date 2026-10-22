import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as t,
    Qy as n,
    Zy as r,
    eE as i
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as a,
    Rn as o,
    wn as s,
    zn as c
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n_ as l,
    r_ as u
} from "./30901919-r9pahacmzqudnt4f.js";

function d() {
    "use forget";
    let e = (0, m.c)(2),
        t = c(),
        n;
    return e[0] === t ? n = e[1] : (n = t.formatMessage({
        id: `CodeBlockFullScreenButton.fullScreenTooltip`,
        defaultMessage: `Full screen`
    }), e[0] = t, e[1] = n), n
}

function f(e) {
    "use forget";
    let n = (0, m.c)(9),
        {
            onClick: i,
            className: a
        } = e,
        o = d(),
        s;
    n[0] === i ? s = n[1] : (s = e => {
        e.stopPropagation(), i?.()
    }, n[0] = i, n[1] = s);
    let c;
    n[2] !== o || n[3] !== s ? (c = (0, h.jsx)(t, {
        type: `button`,
        icon: l,
        color: `secondary`,
        size: `medium`,
        label: o,
        className: `shadow-elevation-01 rounded-full border-0`,
        onClick: s
    }), n[2] = o, n[3] = s, n[4] = c) : c = n[4];
    let u;
    return n[5] !== a || n[6] !== o || n[7] !== c ? (u = (0, h.jsx)(r, {
        label: o,
        className: a,
        children: c
    }), n[5] = a, n[6] = o, n[7] = c, n[8] = u) : u = n[8], u
}

function p(e) {
    "use forget";
    let n = (0, m.c)(10),
        {
            onClick: i,
            className: a
        } = e,
        o = d(),
        s;
    n[0] === i ? s = n[1] : (s = e => {
        e.stopPropagation(), i?.()
    }, n[0] = i, n[1] = s);
    let c;
    n[2] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, h.jsx)(l, {
        className: `icon-md`
    }), n[2] = c) : c = n[2];
    let u;
    n[3] !== o || n[4] !== s ? (u = (0, h.jsx)(t, {
        type: `button`,
        color: `ghost`,
        size: `medium`,
        label: o,
        className: `size-9 rounded-full px-2 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10`,
        onClick: s,
        children: c
    }), n[3] = o, n[4] = s, n[5] = u) : u = n[5];
    let f;
    return n[6] !== a || n[7] !== o || n[8] !== u ? (f = (0, h.jsx)(r, {
        label: o,
        className: a,
        children: u
    }), n[6] = a, n[7] = o, n[8] = u, n[9] = f) : f = n[9], f
}
var m, h, g = e((() => {
    m = s(), i(), n(), u(), o(), h = a()
}));
export {
    p as n, g as r, f as t
};
//# sourceMappingURL=ff057340-err4s0mf5irpivqy.js.map