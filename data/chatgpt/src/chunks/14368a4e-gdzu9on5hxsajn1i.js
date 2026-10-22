import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Rz as n,
    f0 as r,
    p0 as i,
    zz as a
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as o,
    Ht as s,
    Nn as c,
    Q as l,
    Rn as u,
    Vn as d,
    kt as f,
    wn as p,
    zn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    la as h,
    ua as g
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    n as _,
    t as v
} from "./68b36cc8-b4t3ax7liydnquw9.js";

function y() {
    "use forget";
    let e = (0, b.c)(12),
        t = m(),
        r = f(),
        [a, o] = (0, x.useState)(!1),
        s, l;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = () => {
        let e = setTimeout(() => o(!0), 3e3);
        return () => clearTimeout(e)
    }, l = [], e[0] = s, e[1] = l) : (s = e[0], l = e[1]), (0, x.useEffect)(s, l);
    let u, d;
    e[2] !== r.isLoggedIn || e[3] !== a ? (u = () => {
        a && (r.isLoggedIn ? window.location.assign(`/#settings/DataControls`) : i({
            callbackUrl: `/#settings/DataControls`,
            fallbackScreenHint: `login`,
            useFallbackScreenHint: !0
        }))
    }, d = [r.isLoggedIn, a], e[2] = r.isLoggedIn, e[3] = a, e[4] = u, e[5] = d) : (u = e[4], d = e[5]), (0, x.useEffect)(u, d);
    let p;
    e[6] === t ? p = e[7] : (p = t.formatMessage({
        id: `data-controls.route.aria-label`,
        defaultMessage: `Data controls`
    }), e[6] = t, e[7] = p);
    let g;
    e[8] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, S.jsx)(n, {
        className: `text-token-text-primary h-10 w-10`
    }), e[8] = g) : g = e[8];
    let _;
    e[9] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, S.jsx)(`main`, {
        className: `flex h-full w-full items-center justify-center p-6`,
        role: `status`,
        "aria-live": `polite`,
        "aria-busy": `true`,
        children: (0, S.jsxs)(`div`, {
            className: `flex flex-col items-center gap-4 text-center`,
            children: [g, (0, S.jsx)(`p`, {
                className: `text-token-text-primary text-sm`,
                children: (0, S.jsx)(c, {
                    id: `data-controls.redirect-message`,
                    defaultMessage: `Data controls live in ChatGPT. You’re being redirected in a new tab.`
                })
            })]
        })
    }), e[9] = _) : _ = e[9];
    let y;
    return e[10] === p ? y = e[11] : (y = (0, S.jsx)(h, {
        ariaLabel: p,
        anchor: `vertical`,
        className: v.screen,
        children: _
    }), e[10] = p, e[11] = y), y
}
var b, x, S, C, w = e((() => {
    l(), b = p(), g(), _(), u(), a(), r(), x = t(d()), S = o(), C = s(function() {
        "use forget";
        let e = (0, b.c)(1),
            t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, S.jsx)(y, {}), e[0] = t) : t = e[0], t
    })
}));
export {
    w as n, C as t
};
//# sourceMappingURL=14368a4e-gdzu9on5hxsajn1i.js.map