import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Nat as r,
    Rz as i,
    VF as a,
    WF as o,
    eE as s,
    jat as c,
    zz as l
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as u,
    Nn as d,
    Rn as f,
    Vn as p,
    wn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    X0t as h,
    Y0t as g
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    A as _,
    d as v,
    f as y,
    g as b,
    h as x,
    k as S,
    m as C,
    p as w
} from "./c470f5ab-jwd0o7jx9i9say9k.js";

function T(e) {
    "use forget";
    let t = (0, D.c)(8),
        [n, r] = (0, O.useState)(!1),
        i;
    t[0] === e ? i = t[1] : (i = t => {
        e && r(t)
    }, t[0] = e, t[1] = i);
    let a = i,
        o, s;
    t[2] === e ? (o = t[3], s = t[4]) : (o = () => {
        if (!e) return;
        let t = function(e) {
            e.persisted && r(!1)
        };
        return window.addEventListener(`pagehide`, t), () => window.removeEventListener(`pagehide`, t)
    }, s = [e], t[2] = e, t[3] = o, t[4] = s), (0, O.useEffect)(o, s);
    let c;
    return t[5] !== n || t[6] !== a ? (c = [n, a], t[5] = n, t[6] = a, t[7] = c) : c = t[7], c
}

function E(e) {
    "use forget";
    let t = (0, D.c)(3),
        n, r;
    t[0] === e ? (n = t[1], r = t[2]) : (n = () => {
        let t = function(t) {
            t.persisted && e()
        };
        return window.addEventListener(`pagehide`, t), () => window.removeEventListener(`pagehide`, t)
    }, r = [e], t[0] = e, t[1] = n, t[2] = r), (0, O.useEffect)(n, r)
}
var D, O, k = e((() => {
        D = m(), O = t(p())
    })),
    A, j, M, N, P, F = e((() => {
        A = m(), b(), _(), C(), y(), j = u(), M = {
            openAI: v,
            apple: x,
            google: S,
            microsoft: w
        }, N = {
            openAI: M.openAI,
            apple: M.apple,
            google: M.google,
            microsoft: M.microsoft
        }, P = e => {
            "use forget";
            let t = (0, A.c)(4),
                {
                    name: n,
                    size: r,
                    className: i
                } = e,
                a = N[n],
                o;
            return t[0] !== a || t[1] !== i || t[2] !== r ? (o = (0, j.jsx)(a, {
                height: r,
                width: r,
                className: i
            }), t[0] = a, t[1] = i, t[2] = r, t[3] = o) : o = t[3], o
        }
    }));

function I(e, t) {
    let n = () => {
            document.visibilityState === `visible` && e()
        },
        r = window.setTimeout(e, t);
    return window.addEventListener(`pageshow`, e), window.addEventListener(`focus`, n), document.addEventListener(`visibilitychange`, n), () => {
        window.clearTimeout(r), window.removeEventListener(`pageshow`, e), window.removeEventListener(`focus`, n), document.removeEventListener(`visibilitychange`, n)
    }
}
var L = e((() => {})),
    R, z, B, V, H = e((() => {
        R = m(), s(), o(), h(), l(), r(), z = t(p()), f(), k(), F(), L(), B = u(), V = e => {
            "use forget";
            let t = (0, R.c)(22),
                {
                    provider: r,
                    className: o,
                    onClick: s,
                    disabled: l,
                    color: u,
                    canceledLoginRecoveryTimeoutMs: f
                } = e,
                p = u === void 0 ? `secondary` : u,
                m;
            t[0] === r ? m = t[1] : (m = function() {
                switch (r) {
                    case `apple`:
                        return {
                            logo: (0, B.jsx)(P, {
                                name: `apple`,
                                size: 20
                            }), ddActionName: `continue_with_apple`, children: (0, B.jsx)(g, {
                                parameter: `apple_label`,
                                children: (0, B.jsx)(d, {
                                    id: `socialLogin.apple`,
                                    defaultMessage: `Continue with Apple`
                                })
                            })
                        };
                    case `google`:
                        return {
                            logo: (0, B.jsx)(P, {
                                name: `google`,
                                size: 19
                            }), ddActionName: `continue_with_google`, children: (0, B.jsx)(g, {
                                parameter: `google_label`,
                                children: (0, B.jsx)(d, {
                                    id: `login.google`,
                                    defaultMessage: `Continue with Google`
                                })
                            })
                        };
                    case `microsoft`:
                        return {
                            logo: (0, B.jsx)(P, {
                                name: `microsoft`,
                                size: 17
                            }), ddActionName: `continue_with_microsoft`, children: (0, B.jsx)(d, {
                                id: `login.microsoft`,
                                defaultMessage: `Continue with Microsoft`
                            })
                        }
                }
            }(), t[0] = r, t[1] = m);
            let {
                logo: h,
                ddActionName: _,
                children: v
            } = m, y;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (y = a(), t[2] = y) : y = t[2];
            let b = y,
                [x, S] = T(b),
                C, w;
            t[3] !== f || t[4] !== x || t[5] !== S ? (C = () => {
                if (!(!b || !x || f == null)) return I(() => S(!1), f)
            }, w = [f, b, x, S], t[3] = f, t[4] = x, t[5] = S, t[6] = C, t[7] = w) : (C = t[6], w = t[7]), (0, z.useEffect)(C, w);
            let E;
            t[8] !== _ || t[9] !== s || t[10] !== S ? (E = e => {
                S(!0), c.addAction(`login-form.${_}`), s?.(e)
            }, t[8] = _, t[9] = s, t[10] = S, t[11] = E) : E = t[11];
            let D;
            t[12] !== v || t[13] !== x || t[14] !== h ? (D = x ? (0, B.jsxs)(B.Fragment, {
                children: [(0, B.jsx)(i, {
                    className: `text-token-text-tertiary`
                }), (0, B.jsx)(`span`, {
                    className: `sr-only`,
                    children: v
                })]
            }) : (0, B.jsxs)(B.Fragment, {
                children: [(0, B.jsx)(`span`, {
                    className: `relative grid h-4 w-4 place-items-center`,
                    children: (0, B.jsx)(`span`, {
                        className: `absolute`,
                        children: h
                    })
                }), v]
            }), t[12] = v, t[13] = x, t[14] = h, t[15] = D) : D = t[15];
            let O;
            return t[16] !== o || t[17] !== p || t[18] !== l || t[19] !== E || t[20] !== D ? (O = (0, B.jsx)(n, {
                type: `button`,
                onClick: E,
                className: o,
                contentWrapperClassName: `gap-2`,
                color: p,
                disabled: l,
                children: D
            }), t[16] = o, t[17] = p, t[18] = l, t[19] = E, t[20] = D, t[21] = O) : O = t[21], O
        }
    }));
export {
    k as a, I as i, H as n, T as o, L as r, E as s, V as t
};
//# sourceMappingURL=c09d86e5-kmotthzlhn8j33f3.js.map