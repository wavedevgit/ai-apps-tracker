import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    JT as n,
    Nz as r,
    Pz as i,
    X5 as a,
    Y5 as o,
    YT as s
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as c,
    Kt as l,
    Nn as u,
    Rn as d,
    Vn as f,
    wn as p,
    zn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n_ as h,
    r_ as g
} from "./30901919-i8ip8r0znvgcym38.js";
import {
    t as _
} from "./24c0da2c-bx2qul3cpe0cu1wg.js";
import {
    l as v,
    t as y
} from "./5ab42519-n9cavghro7flx4v9.js";

function b(e) {
    "use forget";
    let t = (0, x.c)(7),
        {
            children: n,
            position: r,
            show: i
        } = e,
        a = r === void 0 ? `top-right` : r,
        o = i === void 0 || i,
        [s, c] = (0, S.useState)(null),
        l;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (l = () => {
        let e = null;
        return {
            onAdd() {
                let t = document.createElement(`div`);
                return t.className = `mapboxgl-ctrl`, e = t, c(t), t
            },
            onRemove() {
                e?.remove(), e = null, c(null)
            }
        }
    }, t[0] = l) : l = t[0];
    let u;
    t[1] === a ? u = t[2] : (u = {
        position: a
    }, t[1] = a, t[2] = u), v(l, u);
    let d;
    return t[3] !== n || t[4] !== s || t[5] !== o ? (d = s && o ? (0, C.createPortal)(n, s) : null, t[3] = n, t[4] = s, t[5] = o, t[6] = d) : d = t[6], d
}
var x, S, C, w = e((() => {
    x = p(), _(), S = t(f()), C = t(l()), y()
}));

function T(e) {
    "use forget";
    let t = (0, D.c)(7),
        {
            isFullScreen: n,
            onClick: r,
            position: i
        } = e,
        a = i === void 0 ? `top-right` : i,
        o = !n,
        s;
    t[0] !== n || t[1] !== r || t[2] !== o ? (s = (0, O.jsx)(E, {
        isFullScreen: n,
        isInlineMap: o,
        onClick: r
    }), t[0] = n, t[1] = r, t[2] = o, t[3] = s) : s = t[3];
    let c;
    return t[4] !== a || t[5] !== s ? (c = (0, O.jsx)(b, {
        position: a,
        children: s
    }), t[4] = a, t[5] = s, t[6] = c) : c = t[6], c
}

function E(e) {
    "use forget";
    let t = (0, D.c)(18),
        {
            isFullScreen: i,
            isInlineMap: a,
            onClick: s
        } = e,
        c = a !== void 0 && a,
        l = m(),
        d = i ? `w-9 h-9` : c ? `me-1.5 mt-1.5 h-7 min-w-[85px] px-3` : `ps-2 pe-4`,
        f;
    t[0] === d ? f = t[1] : (f = o(`btn border-token-border-default text-token-text-primary disabled:text-token-text-tertiary relative flex items-center justify-center border bg-clip-padding drop-shadow-sm`, d), t[0] = d, t[1] = f);
    let p = c ? `flex-row-reverse text-xs font-normal` : `font-semibold`,
        g = !i && (c ? `gap-[5px]` : `gap-1`),
        _;
    t[2] !== p || t[3] !== g ? (_ = o(p, g), t[2] = p, t[3] = g, t[4] = _) : _ = t[4];
    let v;
    t[5] === s ? v = t[6] : (v = e => {
        e.preventDefault(), s()
    }, t[5] = s, t[6] = v);
    let y;
    t[7] !== l || t[8] !== i ? (y = i ? l.formatMessage({
        id: `N1ms3w`,
        defaultMessage: `Exit full screen`
    }) : l.formatMessage({
        id: `676SBY`,
        defaultMessage: `Enter full screen`
    }), t[7] = l, t[8] = i, t[9] = y) : y = t[9];
    let b;
    t[10] === i ? b = t[11] : (b = i ? (0, O.jsx)(r.Cross, {
        className: `icon h-[18px]! w-[18px]!`
    }) : (0, O.jsxs)(O.Fragment, {
        children: [(0, O.jsx)(h, {
            className: `icon h-3.5! w-3.5!`
        }), (0, O.jsx)(u, {
            id: `maps.inlineMap.expand`,
            defaultMessage: `Expand`
        })]
    }), t[10] = i, t[11] = b);
    let x;
    return t[12] !== f || t[13] !== _ || t[14] !== v || t[15] !== y || t[16] !== b ? (x = (0, O.jsx)(n, {
        type: `button`,
        color: `secondary`,
        size: `small`,
        className: f,
        contentWrapperClassName: _,
        onClick: v,
        title: y,
        children: b
    }), t[12] = f, t[13] = _, t[14] = v, t[15] = y, t[16] = b, t[17] = x) : x = t[17], x
}
var D, O, k = e((() => {
    D = p(), s(), g(), i(), a(), d(), w(), O = c()
}));
export {
    w as a, b as i, E as n, k as r, T as t
};
//# sourceMappingURL=b58ae57c-lrwoibe4fuu0eqes.js.map