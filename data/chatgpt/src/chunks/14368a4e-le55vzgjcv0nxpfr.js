import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Az as n,
    jz as r,
    n0 as i,
    t0 as a
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as o,
    At as s,
    Bn as c,
    Nn as l,
    Rn as u,
    Ut as d,
    Vn as f,
    wn as p,
    zn as m
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    la as h,
    ua as g
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    n as _,
    t as v
} from "./68b36cc8-b4t3ax7liydnquw9.js";

function y() {
    "use forget";
    let e = (0, b.c)(12),
        t = m(),
        r = s(),
        [a, o] = (0, x.useState)(!1),
        c, u;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = () => {
        let e = setTimeout(() => o(!0), 3e3);
        return () => clearTimeout(e)
    }, u = [], e[0] = c, e[1] = u) : (c = e[0], u = e[1]), (0, x.useEffect)(c, u);
    let d, f;
    e[2] !== r.isLoggedIn || e[3] !== a ? (d = () => {
        a && (r.isLoggedIn ? window.location.assign(`/#settings/DataControls`) : i({
            callbackUrl: `/#settings/DataControls`,
            fallbackScreenHint: `login`,
            useFallbackScreenHint: !0
        }))
    }, f = [r.isLoggedIn, a], e[2] = r.isLoggedIn, e[3] = a, e[4] = d, e[5] = f) : (d = e[4], f = e[5]), (0, x.useEffect)(d, f);
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
                children: (0, S.jsx)(l, {
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
    o(), b = p(), g(), _(), u(), r(), a(), x = t(f()), S = c(), C = d(function() {
        "use forget";
        let e = (0, b.c)(1),
            t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, S.jsx)(y, {}), e[0] = t) : t = e[0], t
    })
}));
export {
    w as n, C as t
};
//# sourceMappingURL=14368a4e-le55vzgjcv0nxpfr.js.map