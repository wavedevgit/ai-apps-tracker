import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Vq as t,
    Yq as n,
    mz as r,
    pz as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as a,
    Rn as o,
    wn as s,
    zn as c
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Xi as l,
    Zi as u
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    T_ as d,
    __ as f,
    w_ as p,
    x_ as m
} from "./8b34dbc2-gf9wnwcahty27ylx.js";

function h(e) {
    "use forget";
    let t = (0, g.c)(11),
        r, i, a, o;
    t[0] === e ? (r = t[1], i = t[2], a = t[3], o = t[4]) : ({
        "aria-hidden": r,
        "aria-label": i,
        "aria-labelledby": a,
        ...o
    } = e, t[0] = e, t[1] = r, t[2] = i, t[3] = a, t[4] = o);
    let s = r ?? (i || a ? void 0 : !0),
        c;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (c = {
        __html: n(l)
    }, t[5] = c) : c = t[5];
    let u;
    return t[6] !== i || t[7] !== a || t[8] !== o || t[9] !== s ? (u = (0, _.jsx)(`svg`, {
        ...o,
        xmlns: `http://www.w3.org/2000/svg`,
        width: l.canvas.width,
        height: l.canvas.height,
        viewBox: l.canvas.viewBox,
        fill: `currentColor`,
        "data-rtl-flip": ``,
        "aria-label": i,
        "aria-labelledby": a,
        "aria-hidden": s,
        dangerouslySetInnerHTML: c
    }), t[6] = i, t[7] = a, t[8] = o, t[9] = s, t[10] = u) : u = t[10], u
}
var g, _, v = e((() => {
    g = s(), t(), u(), _ = a()
}));

function y() {
    "use forget";
    let e = (0, b.c)(8),
        t = d(),
        n = c(),
        r;
    e[0] === n ? r = e[1] : (r = n.formatMessage({
        id: `imagegen.actions.page.dismiss`,
        defaultMessage: `Dismiss`
    }), e[0] = n, e[1] = r);
    let a;
    e[2] === t ? a = e[3] : (a = () => {
        m(t, null)
    }, e[2] = t, e[3] = a);
    let o;
    e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, x.jsx)(i.Cross, {
        className: `h-5 w-5`
    }), e[4] = o) : o = e[4];
    let s;
    return e[5] !== r || e[6] !== a ? (s = (0, x.jsx)(`button`, {
        "aria-label": r,
        onClick: a,
        className: `text-token-text-primary flex shrink-0 items-center justify-center rounded-full transition sm:hidden`,
        children: o
    }), e[5] = r, e[6] = a, e[7] = s) : s = e[7], s
}
var b, x, S, C = e((() => {
    b = s(), o(), v(), r(), p(), f(), x = a(), S = e => {
        "use forget";
        let t = (0, b.c)(20),
            {
                pageIndex: n,
                pageCount: r,
                onPreviousPage: a,
                onNextPage: o,
                showDismissButton: s
            } = e,
            l = s !== void 0 && s,
            u = c(),
            d = Math.min(n, r - 1),
            f;
        t[0] === u ? f = t[1] : (f = u.formatMessage({
            id: `imagegen.actions.page.previous`,
            defaultMessage: `Previous page`
        }), t[0] = u, t[1] = f);
        let p = d <= 0,
            m;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, x.jsx)(h, {
            className: `icon-sm`
        }), t[2] = m) : m = t[2];
        let g;
        t[3] !== a || t[4] !== f || t[5] !== p ? (g = (0, x.jsx)(`button`, {
            "aria-label": f,
            onClick: a,
            disabled: p,
            className: `hover:bg-token-interactive-bg-tertiary-press bg-token-bg-primary border-token-border-heavy hidden size-9 items-center justify-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-30 sm:flex`,
            children: m
        }), t[3] = a, t[4] = f, t[5] = p, t[6] = g) : g = t[6];
        let _;
        t[7] === u ? _ = t[8] : (_ = u.formatMessage({
            id: `imagegen.actions.page.next`,
            defaultMessage: `Next page`
        }), t[7] = u, t[8] = _);
        let v = d >= r - 1,
            S;
        t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, x.jsx)(i.ChevronRightSm, {
            className: `icon-sm`
        }), t[9] = S) : S = t[9];
        let C;
        t[10] !== o || t[11] !== _ || t[12] !== v ? (C = (0, x.jsx)(`button`, {
            "aria-label": _,
            onClick: o,
            disabled: v,
            className: `hover:bg-token-interactive-bg-tertiary-press bg-token-bg-primary border-token-border-heavy hidden size-9 items-center justify-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-30 sm:flex`,
            children: S
        }), t[10] = o, t[11] = _, t[12] = v, t[13] = C) : C = t[13];
        let w;
        t[14] === l ? w = t[15] : (w = l && (0, x.jsx)(y, {}), t[14] = l, t[15] = w);
        let T;
        return t[16] !== w || t[17] !== g || t[18] !== C ? (T = (0, x.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [g, C, w]
        }), t[16] = w, t[17] = g, t[18] = C, t[19] = T) : T = t[19], T
    }
}));
export {
    C as n, S as t
};
//# sourceMappingURL=4775c8e0-pydxquor6rm5zu0t.js.map