import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    CN as r,
    P5 as i,
    bN as a,
    cn as o,
    g8 as s,
    hn as c,
    n1 as ee,
    oq as l,
    sq as u,
    t1 as d
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as f,
    In as p,
    Nn as m,
    Rn as h,
    Vn as g,
    wn as _
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    CUn as v,
    DGt as y,
    ICt as b,
    LCt as x,
    OGt as S,
    gmn as C,
    hmn as w,
    mmn as T,
    pmn as E,
    smn as te,
    umn as D,
    yUn as O
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    n as k,
    r as A
} from "./a4ef304b-fpvtkn2zxu9nr0g8.js";
import {
    t as j
} from "./cc275b97-cj1qpi8ghtzfd7u4.js";
import {
    c as M,
    d as ne,
    f as N,
    o as re,
    p as ie,
    s as P,
    u as F
} from "./bc86e6a9-b3rt6d5r03zpn2d8.js";
import {
    n as I,
    t as L
} from "./ecfbef4f-l3b91ssghn9quyn6.js";
import {
    n as R,
    t as z
} from "./8d846022-kz7pyrbiduq9ktik.js";
import {
    n as B,
    t as V
} from "./e1a66d2b-jbxbfdrhakcg9jxz.js";
import {
    n as H,
    t as U
} from "./073fd849-e0teg8dkja6m05d7.js";
var W, G, K = e((() => {
    a(), W = f(), G = ({
        size: e = `large`,
        position: t = `bottom`
    }) => {
        let n = r(),
            i = e === `large` ? `4em` : `50px`,
            a = `${n?`rgba(0,0,0,0)`:`rgba(255,255,255,0)`}, ${n?`#2f2f2f`:`#ffffff`}`;
        return t === `bottom` ? (0, W.jsx)(`div`, {
            className: `absolute bottom-0 z-20 h-24 w-full transition-colors`,
            style: {
                height: i,
                background: `linear-gradient(${a})`
            }
        }) : (0, W.jsx)(`div`, {
            className: `absolute end-0 top-0 bottom-0 z-20 transition-colors`,
            style: {
                width: i,
                background: `linear-gradient(to right, ${a})`
            }
        })
    }
}));

function q() {
    return S().width
}
var J, Y, X, Z, Q, $, ae = e((() => {
    J = _(), ie(), I(), A(), N(), R(), F(), P(), H(), B(), D(), b(), s(), l(), y(), d(), n(), Y = t(g()), h(), O(), X = f(), Z = () => (0, X.jsxs)(o.div, {
        role: `button`,
        className: `border-token-border-default bg-token-bg-primary absolute start-0 end-0 bottom-3 z-50 mx-auto flex w-fit items-baseline gap-1 rounded-full border px-3 py-1`,
        initial: !1,
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0,
            scale: .9
        },
        children: [(0, X.jsx)(`span`, {
            className: `loading-shimmer-pure-text`,
            children: (0, X.jsx)(m, {
                ...p({
                    id: `qmLYih`,
                    defaultMessage: `Typing`
                })
            })
        }), (0, X.jsx)(V, {
            gap: 1,
            padding: 0
        })]
    }), Q = e => {
        "use forget";
        let t = (0, J.c)(24),
            {
                onScroll: n,
                textdocId: r,
                disableScroll: a
            } = e,
            o = a !== void 0 && a,
            s = i(u),
            l = v(r),
            d = i(q),
            f;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = x(), t[0] = f) : f = t[0];
        let p = f;
        if (!l) return null;
        let {
            versions: m
        } = l, h, g, _, y, b;
        if (t[1] !== o || t[2] !== s || t[3] !== n || t[4] !== l.metadata || t[5] !== m || t[6] !== d) {
            b = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = ee(m);
                if (!e) {
                    b = null;
                    break bb0
                }
                let r = m.length > 1 ? m[m.length - 2] : null,
                    i = w(e),
                    a = C(e),
                    u = T(e),
                    f;t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (f = U({
                    isReadonlyFromQueryParam: !0
                }), t[12] = f) : f = t[12];
                let v = f,
                    {
                        content: x,
                        currentlyStreamingLineIndex: S
                    } = re(e, r),
                    D = p ? ne(e.comments) : [],
                    O = p ? z.ALL_HIDDEN : z.COMMENTS_READONLY,
                    A = null;bb1: switch (e?.type) {
                    case te.DOCUMENT:
                        A = (0, X.jsx)(M, {
                            value: x.trimEnd(),
                            previousValue: r?.content,
                            comments: D,
                            isRequestActive: i,
                            isRewriting: a,
                            isPreview: !0,
                            isDisabled: !0,
                            hideAccelerators: !0,
                            commentsMode: O,
                            readonlyReason: v,
                            hideToolbar: !0,
                            hideEditOverlay: !0,
                            width: d,
                            modelCursor: u || i && !a ? e?.modelCursor : void 0,
                            metadata: l.metadata
                        });
                        break bb1;
                    default:
                        e && E(e.type) && (A = (0, X.jsx)(L, {
                            id: `codemirror`,
                            currentlyStreamingLineIndex: S,
                            language: k(e.type),
                            value: x,
                            commentsMode: O,
                            hideToolbar: !0,
                            hideAccelerators: !0,
                            isPreview: !0,
                            readonlyReason: v,
                            comments: D,
                            isRequestActive: i
                        }))
                }
                g = j;
                let N = o || !s;t[13] !== A || t[14] !== n || t[15] !== N ? (y = (0, X.jsx)(j.Content, {
                    disableScroll: N,
                    onScroll: n,
                    children: A
                }), t[13] = A, t[14] = n, t[15] = N, t[16] = y) : y = t[16],
                h = c,
                _ = T(e) && !p && (0, X.jsx)(Z, {})
            }
            t[1] = o, t[2] = s, t[3] = n, t[4] = l.metadata, t[5] = m, t[6] = d, t[7] = h, t[8] = g, t[9] = _, t[10] = y, t[11] = b
        } else h = t[7], g = t[8], _ = t[9], y = t[10], b = t[11];
        if (b !== Symbol.for(`react.early_return_sentinel`)) return b;
        let S;
        t[17] !== h || t[18] !== _ ? (S = (0, X.jsx)(h, {
            children: _
        }), t[17] = h, t[18] = _, t[19] = S) : S = t[19];
        let D;
        return t[20] !== g || t[21] !== y || t[22] !== S ? (D = (0, X.jsxs)(g, {
            children: [y, S]
        }), t[20] = g, t[21] = y, t[22] = S, t[23] = D) : D = t[23], D
    }, $ = (0, Y.memo)(Q)
}));
export {
    K as i, ae as n, G as r, $ as t
};
//# sourceMappingURL=ea4fa2d6-bwk20fsivykcc91e.js.map