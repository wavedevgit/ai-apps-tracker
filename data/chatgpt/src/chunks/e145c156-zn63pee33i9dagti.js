import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bn as n,
    Nn as r,
    Rn as i,
    Vn as a,
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    C3t as s,
    S3t as c,
    x3t as l
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    _h as u,
    gh as d
} from "./8b34dbc2-m4883pai3e8fx8q6.js";

function f(e) {
    "use forget";
    let t = (0, g.c)(19),
        {
            searchModelQueries: n,
            variant: i
        } = e,
        a, o;
    if (t[0] !== n || t[1] !== i) {
        let e = n === void 0 ? [] : n;
        o = i === void 0 ? `default` : i, a = e.map(h).filter(m), t[0] = n, t[1] = i, t[2] = a, t[3] = o
    } else a = t[2], o = t[3];
    let s = a,
        [u, f] = (0, _.useState)(!0),
        [x, S] = (0, _.useState)(0),
        C;
    t[4] === s.length ? C = t[5] : (C = () => {
        let e = null,
            t = null;
        return f(!0), S(0), s.length > 0 && (e = setTimeout(() => {
            f(!1), t = setInterval(() => {
                S(e => e + 1 >= s.length ? s.length - 1 : e + 1)
            }, b)
        }, y)), () => {
            e && clearTimeout(e), t && clearInterval(t)
        }
    }, t[4] = s.length, t[5] = C);
    let w;
    t[6] === s ? w = t[7] : (w = [s], t[6] = s, t[7] = w), (0, _.useEffect)(C, w);
    let T = p,
        E;
    t[8] !== x || t[9] !== s || t[10] !== u ? (E = !s.length || u ? (0, v.jsx)(r, {
        id: `CfufpV`,
        defaultMessage: `Searching the web`
    }) : (0, v.jsx)(r, {
        id: `DeF0zE`,
        defaultMessage: `Searching for {query}`,
        values: {
            query: s[x]
        }
    }), t[8] = x, t[9] = s, t[10] = u, t[11] = E) : E = t[11];
    let D = E;
    if (o === `typing-dot`) {
        let e;
        return t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, v.jsx)(`div`, {
            className: `flex min-h-[40vh] w-full items-start pb-6`,
            children: (0, v.jsx)(d, {
                className: `text-token-text-primary`
            })
        }), t[12] = e) : e = t[12], e
    }
    if (o === `minimal`) {
        let e;
        return t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, v.jsx)(`div`, {
            className: `mt-6 flex min-h-[40vh] w-full items-start pb-6`,
            children: (0, v.jsxs)(l, {
                className: `w-full max-w-[520px]`,
                children: [(0, v.jsx)(c, {
                    index: 0,
                    width: 72,
                    heightSize: `sm`
                }), (0, v.jsx)(c, {
                    index: 1,
                    width: 93,
                    heightSize: `sm`
                }), (0, v.jsx)(c, {
                    index: 2,
                    width: 58,
                    heightSize: `sm`
                })]
            })
        }), t[13] = e) : e = t[13], e
    }
    if (!s.length) {
        let e;
        t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, v.jsx)(T, {}), t[14] = e) : e = t[14];
        let n;
        return t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, v.jsxs)(v.Fragment, {
            children: [e, (0, v.jsx)(`div`, {
                className: `mt-6 flex min-h-[60vh] flex-col gap-12 pb-6`,
                children: (0, v.jsxs)(l, {
                    children: [(0, v.jsx)(c, {
                        index: 0,
                        width: 60,
                        heightSize: `sm`
                    }), (0, v.jsx)(c, {
                        index: 1,
                        width: 100,
                        heightSize: `sm`
                    }), (0, v.jsx)(c, {
                        index: 2,
                        width: 90,
                        heightSize: `sm`
                    }), (0, v.jsx)(c, {
                        index: 3,
                        width: 50,
                        heightSize: `sm`
                    })]
                })
            })]
        }), t[15] = n) : n = t[15], n
    }
    let O;
    t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (O = (0, v.jsx)(T, {}), t[16] = O) : O = t[16];
    let k;
    return t[17] === D ? k = t[18] : (k = (0, v.jsxs)(v.Fragment, {
        children: [O, (0, v.jsx)(`div`, {
            className: `mt-5 flex min-h-[60vh] w-full flex-col items-start gap-4 pb-6`,
            children: (0, v.jsx)(`span`, {
                className: `loading-shimmer text-token-text-secondary line-clamp-1 w-full truncate font-medium select-none`,
                children: D
            })
        })]
    }), t[17] = D, t[18] = k), k
}

function p() {
    "use forget";
    return (0, v.jsx)(`div`, {
        className: `bg-token-bg-secondary -mx-6 aspect-5/4 animate-pulse pb-2`,
        "data-entity-loading-image": !0
    })
}

function m(e) {
    return e.length > 0
}

function h(e) {
    return e.trim()
}
var g, _, v, y, b, x = e((() => {
    g = o(), s(), u(), _ = t(a()), i(), v = n(), y = 800, b = 1200
}));
export {
    x as n, f as t
};
//# sourceMappingURL=e145c156-zn63pee33i9dagti.js.map