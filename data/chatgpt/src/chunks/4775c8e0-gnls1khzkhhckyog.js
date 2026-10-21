import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bz as t,
    Vz as n,
    dJ as r,
    yJ as i
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as a,
    Rn as o,
    wn as s,
    zn as c
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Xi as l,
    Zi as u
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    E_ as d,
    S_ as f,
    T_ as p,
    v_ as m
} from "./8b34dbc2-egl8cz04n8nmlktg.js";

function h(e) {
    "use forget";
    let t = (0, g.c)(11),
        n, r, a, o;
    t[0] === e ? (n = t[1], r = t[2], a = t[3], o = t[4]) : ({
        "aria-hidden": n,
        "aria-label": r,
        "aria-labelledby": a,
        ...o
    } = e, t[0] = e, t[1] = n, t[2] = r, t[3] = a, t[4] = o);
    let s = n ?? (r || a ? void 0 : !0),
        c;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (c = {
        __html: i(l)
    }, t[5] = c) : c = t[5];
    let u;
    return t[6] !== r || t[7] !== a || t[8] !== o || t[9] !== s ? (u = (0, _.jsx)(`svg`, {
        ...o,
        xmlns: `http://www.w3.org/2000/svg`,
        width: l.canvas.width,
        height: l.canvas.height,
        viewBox: l.canvas.viewBox,
        fill: `currentColor`,
        "data-rtl-flip": ``,
        "aria-label": r,
        "aria-labelledby": a,
        "aria-hidden": s,
        dangerouslySetInnerHTML: c
    }), t[6] = r, t[7] = a, t[8] = o, t[9] = s, t[10] = u) : u = t[10], u
}
var g, _, v = e((() => {
    g = s(), r(), u(), _ = a()
}));

function y() {
    "use forget";
    let e = (0, b.c)(8),
        n = d(),
        r = c(),
        i;
    e[0] === r ? i = e[1] : (i = r.formatMessage({
        id: `imagegen.actions.page.dismiss`,
        defaultMessage: `Dismiss`
    }), e[0] = r, e[1] = i);
    let a;
    e[2] === n ? a = e[3] : (a = () => {
        f(n, null)
    }, e[2] = n, e[3] = a);
    let o;
    e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, x.jsx)(t.Cross, {
        className: `h-5 w-5`
    }), e[4] = o) : o = e[4];
    let s;
    return e[5] !== i || e[6] !== a ? (s = (0, x.jsx)(`button`, {
        "aria-label": i,
        onClick: a,
        className: `text-token-text-primary flex shrink-0 items-center justify-center rounded-full transition sm:hidden`,
        children: o
    }), e[5] = i, e[6] = a, e[7] = s) : s = e[7], s
}
var b, x, S, C = e((() => {
    b = s(), o(), v(), n(), p(), m(), x = a(), S = e => {
        "use forget";
        let n = (0, b.c)(20),
            {
                pageIndex: r,
                pageCount: i,
                onPreviousPage: a,
                onNextPage: o,
                showDismissButton: s
            } = e,
            l = s !== void 0 && s,
            u = c(),
            d = Math.min(r, i - 1),
            f;
        n[0] === u ? f = n[1] : (f = u.formatMessage({
            id: `imagegen.actions.page.previous`,
            defaultMessage: `Previous page`
        }), n[0] = u, n[1] = f);
        let p = d <= 0,
            m;
        n[2] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, x.jsx)(h, {
            className: `icon-sm`
        }), n[2] = m) : m = n[2];
        let g;
        n[3] !== a || n[4] !== f || n[5] !== p ? (g = (0, x.jsx)(`button`, {
            "aria-label": f,
            onClick: a,
            disabled: p,
            className: `hover:bg-token-interactive-bg-tertiary-press bg-token-bg-primary border-token-border-heavy hidden size-9 items-center justify-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-30 sm:flex`,
            children: m
        }), n[3] = a, n[4] = f, n[5] = p, n[6] = g) : g = n[6];
        let _;
        n[7] === u ? _ = n[8] : (_ = u.formatMessage({
            id: `imagegen.actions.page.next`,
            defaultMessage: `Next page`
        }), n[7] = u, n[8] = _);
        let v = d >= i - 1,
            S;
        n[9] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, x.jsx)(t.ChevronRightSm, {
            className: `icon-sm`
        }), n[9] = S) : S = n[9];
        let C;
        n[10] !== o || n[11] !== _ || n[12] !== v ? (C = (0, x.jsx)(`button`, {
            "aria-label": _,
            onClick: o,
            disabled: v,
            className: `hover:bg-token-interactive-bg-tertiary-press bg-token-bg-primary border-token-border-heavy hidden size-9 items-center justify-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-30 sm:flex`,
            children: S
        }), n[10] = o, n[11] = _, n[12] = v, n[13] = C) : C = n[13];
        let w;
        n[14] === l ? w = n[15] : (w = l && (0, x.jsx)(y, {}), n[14] = l, n[15] = w);
        let T;
        return n[16] !== w || n[17] !== g || n[18] !== C ? (T = (0, x.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [g, C, w]
        }), n[16] = w, n[17] = g, n[18] = C, n[19] = T) : T = n[19], T
    }
}));
export {
    C as n, S as t
};
//# sourceMappingURL=4775c8e0-gnls1khzkhhckyog.js.map