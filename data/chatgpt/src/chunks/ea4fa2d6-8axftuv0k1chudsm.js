import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    At as r,
    ON as i,
    TN as a,
    cn as o,
    d1 as s,
    hn as c,
    iq as l,
    j5 as u,
    rq as d,
    u1 as f
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as p,
    In as m,
    Nn as h,
    Rn as g,
    Vn as _,
    wn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    DCt as y,
    Jmn as b,
    OCt as x,
    Vmn as ee,
    Wmn as S,
    Xmn as C,
    Ymn as te,
    _Gt as w,
    gGt as T,
    mWn as E,
    qmn as D,
    vWn as O
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    n as k,
    r as A
} from "./a4ef304b-h8oqddluzvkqmza4.js";
import {
    t as j
} from "./cc275b97-hjpv0707hk67x9x8.js";
import {
    c as M,
    d as ne,
    f as N,
    o as re,
    p as ie,
    s as P,
    u as F
} from "./bc86e6a9-ab4c2u1x0yk9ndfo.js";
import {
    n as I,
    t as L
} from "./ecfbef4f-guicygoc4y3a8muo.js";
import {
    n as R,
    t as z
} from "./8d846022-kz7pyrbiduq9ktik.js";
import {
    n as B,
    t as V
} from "./e1a66d2b-j2ykv8vl373si05j.js";
import {
    n as H,
    t as U
} from "./073fd849-fdkg4spwe61sp7mn.js";
var W, G, K = e((() => {
    a(), W = p(), G = ({
        size: e = `large`,
        position: t = `bottom`
    }) => {
        let n = i(),
            r = e === `large` ? `4em` : `50px`,
            a = `${n?`rgba(0,0,0,0)`:`rgba(255,255,255,0)`}, ${n?`#2f2f2f`:`#ffffff`}`;
        return t === `bottom` ? (0, W.jsx)(`div`, {
            className: `absolute bottom-0 z-20 h-24 w-full transition-colors`,
            style: {
                height: r,
                background: `linear-gradient(${a})`
            }
        }) : (0, W.jsx)(`div`, {
            className: `absolute end-0 top-0 bottom-0 z-20 transition-colors`,
            style: {
                width: r,
                background: `linear-gradient(to right, ${a})`
            }
        })
    }
}));

function q() {
    return w().width
}
var J, Y, X, Z, Q, $, ae = e((() => {
    J = v(), ie(), I(), A(), N(), R(), F(), P(), H(), B(), S(), y(), n(), d(), T(), f(), r(), Y = t(_()), g(), E(), X = p(), Z = () => (0, X.jsxs)(o.div, {
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
            children: (0, X.jsx)(h, {
                ...m({
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
                disableScroll: i
            } = e,
            a = i !== void 0 && i,
            o = u(l),
            d = O(r),
            f = u(q),
            p;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = x(), t[0] = p) : p = t[0];
        let m = p;
        if (!d) return null;
        let {
            versions: h
        } = d, g, _, v, y, S;
        if (t[1] !== a || t[2] !== o || t[3] !== n || t[4] !== d.metadata || t[5] !== h || t[6] !== f) {
            S = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = s(h);
                if (!e) {
                    S = null;
                    break bb0
                }
                let r = h.length > 1 ? h[h.length - 2] : null,
                    i = te(e),
                    l = C(e),
                    u = b(e),
                    p;t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (p = U({
                    isReadonlyFromQueryParam: !0
                }), t[12] = p) : p = t[12];
                let x = p,
                    {
                        content: w,
                        currentlyStreamingLineIndex: T
                    } = re(e, r),
                    E = m ? ne(e.comments) : [],
                    O = m ? z.ALL_HIDDEN : z.COMMENTS_READONLY,
                    A = null;bb1: switch (e?.type) {
                    case ee.DOCUMENT:
                        A = (0, X.jsx)(M, {
                            value: w.trimEnd(),
                            previousValue: r?.content,
                            comments: E,
                            isRequestActive: i,
                            isRewriting: l,
                            isPreview: !0,
                            isDisabled: !0,
                            hideAccelerators: !0,
                            commentsMode: O,
                            readonlyReason: x,
                            hideToolbar: !0,
                            hideEditOverlay: !0,
                            width: f,
                            modelCursor: u || i && !l ? e?.modelCursor : void 0,
                            metadata: d.metadata
                        });
                        break bb1;
                    default:
                        e && D(e.type) && (A = (0, X.jsx)(L, {
                            id: `codemirror`,
                            currentlyStreamingLineIndex: T,
                            language: k(e.type),
                            value: w,
                            commentsMode: O,
                            hideToolbar: !0,
                            hideAccelerators: !0,
                            isPreview: !0,
                            readonlyReason: x,
                            comments: E,
                            isRequestActive: i
                        }))
                }
                _ = j;
                let N = a || !o;t[13] !== A || t[14] !== n || t[15] !== N ? (y = (0, X.jsx)(j.Content, {
                    disableScroll: N,
                    onScroll: n,
                    children: A
                }), t[13] = A, t[14] = n, t[15] = N, t[16] = y) : y = t[16],
                g = c,
                v = b(e) && !m && (0, X.jsx)(Z, {})
            }
            t[1] = a, t[2] = o, t[3] = n, t[4] = d.metadata, t[5] = h, t[6] = f, t[7] = g, t[8] = _, t[9] = v, t[10] = y, t[11] = S
        } else g = t[7], _ = t[8], v = t[9], y = t[10], S = t[11];
        if (S !== Symbol.for(`react.early_return_sentinel`)) return S;
        let w;
        t[17] !== g || t[18] !== v ? (w = (0, X.jsx)(g, {
            children: v
        }), t[17] = g, t[18] = v, t[19] = w) : w = t[19];
        let T;
        return t[20] !== _ || t[21] !== y || t[22] !== w ? (T = (0, X.jsxs)(_, {
            children: [y, w]
        }), t[20] = _, t[21] = y, t[22] = w, t[23] = T) : T = t[23], T
    }, $ = (0, Y.memo)(Q)
}));
export {
    K as i, ae as n, G as r, $ as t
};
//# sourceMappingURL=ea4fa2d6-8axftuv0k1chudsm.js.map