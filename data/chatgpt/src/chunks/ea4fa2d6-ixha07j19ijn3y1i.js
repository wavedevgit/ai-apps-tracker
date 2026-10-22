import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    At as r,
    J5 as i,
    ON as a,
    TN as o,
    cn as s,
    d1 as c,
    hn as l,
    iq as u,
    rq as d,
    u1 as f
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as p,
    In as m,
    Nn as h,
    Rn as g,
    Vn as _,
    wn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    ACt as y,
    Bmn as b,
    Gmn as x,
    Kmn as ee,
    Lmn as te,
    SGt as S,
    Umn as C,
    Wmn as w,
    aWn as T,
    kCt as E,
    tWn as D,
    xGt as O
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    n as k,
    r as A
} from "./a4ef304b-jsook38kgo9pau05.js";
import {
    t as j
} from "./cc275b97-lasxka5nv7hbomjx.js";
import {
    c as M,
    d as ne,
    f as N,
    o as re,
    p as ie,
    s as P,
    u as F
} from "./bc86e6a9-gd73c9vtaf35341z.js";
import {
    n as I,
    t as L
} from "./ecfbef4f-eomgl4ofqcnu28ir.js";
import {
    n as R,
    t as z
} from "./8d846022-kz7pyrbiduq9ktik.js";
import {
    n as B,
    t as V
} from "./e1a66d2b-hj96kc07wk4dn9ot.js";
import {
    n as H,
    t as U
} from "./073fd849-gsbf4ym7k3g83tro.js";
var W, G, K = e((() => {
    o(), W = p(), G = ({
        size: e = `large`,
        position: t = `bottom`
    }) => {
        let n = a(),
            r = e === `large` ? `4em` : `50px`,
            i = `${n?`rgba(0,0,0,0)`:`rgba(255,255,255,0)`}, ${n?`#2f2f2f`:`#ffffff`}`;
        return t === `bottom` ? (0, W.jsx)(`div`, {
            className: `absolute bottom-0 z-20 h-24 w-full transition-colors`,
            style: {
                height: r,
                background: `linear-gradient(${i})`
            }
        }) : (0, W.jsx)(`div`, {
            className: `absolute end-0 top-0 bottom-0 z-20 transition-colors`,
            style: {
                width: r,
                background: `linear-gradient(to right, ${i})`
            }
        })
    }
}));

function q() {
    return S().width
}
var J, Y, X, Z, Q, $, ae = e((() => {
    J = v(), ie(), I(), A(), N(), R(), F(), P(), H(), B(), b(), E(), n(), d(), O(), f(), r(), Y = t(_()), g(), D(), X = p(), Z = () => (0, X.jsxs)(s.div, {
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
                disableScroll: a
            } = e,
            o = a !== void 0 && a,
            s = i(u),
            d = T(r),
            f = i(q),
            p;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = y(), t[0] = p) : p = t[0];
        let m = p;
        if (!d) return null;
        let {
            versions: h
        } = d, g, _, v, b, S;
        if (t[1] !== o || t[2] !== s || t[3] !== n || t[4] !== d.metadata || t[5] !== h || t[6] !== f) {
            S = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = c(h);
                if (!e) {
                    S = null;
                    break bb0
                }
                let r = h.length > 1 ? h[h.length - 2] : null,
                    i = x(e),
                    a = ee(e),
                    u = w(e),
                    p;t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (p = U({
                    isReadonlyFromQueryParam: !0
                }), t[12] = p) : p = t[12];
                let y = p,
                    {
                        content: T,
                        currentlyStreamingLineIndex: E
                    } = re(e, r),
                    D = m ? ne(e.comments) : [],
                    O = m ? z.ALL_HIDDEN : z.COMMENTS_READONLY,
                    A = null;bb1: switch (e?.type) {
                    case te.DOCUMENT:
                        A = (0, X.jsx)(M, {
                            value: T.trimEnd(),
                            previousValue: r?.content,
                            comments: D,
                            isRequestActive: i,
                            isRewriting: a,
                            isPreview: !0,
                            isDisabled: !0,
                            hideAccelerators: !0,
                            commentsMode: O,
                            readonlyReason: y,
                            hideToolbar: !0,
                            hideEditOverlay: !0,
                            width: f,
                            modelCursor: u || i && !a ? e?.modelCursor : void 0,
                            metadata: d.metadata
                        });
                        break bb1;
                    default:
                        e && C(e.type) && (A = (0, X.jsx)(L, {
                            id: `codemirror`,
                            currentlyStreamingLineIndex: E,
                            language: k(e.type),
                            value: T,
                            commentsMode: O,
                            hideToolbar: !0,
                            hideAccelerators: !0,
                            isPreview: !0,
                            readonlyReason: y,
                            comments: D,
                            isRequestActive: i
                        }))
                }
                _ = j;
                let N = o || !s;t[13] !== A || t[14] !== n || t[15] !== N ? (b = (0, X.jsx)(j.Content, {
                    disableScroll: N,
                    onScroll: n,
                    children: A
                }), t[13] = A, t[14] = n, t[15] = N, t[16] = b) : b = t[16],
                g = l,
                v = w(e) && !m && (0, X.jsx)(Z, {})
            }
            t[1] = o, t[2] = s, t[3] = n, t[4] = d.metadata, t[5] = h, t[6] = f, t[7] = g, t[8] = _, t[9] = v, t[10] = b, t[11] = S
        } else g = t[7], _ = t[8], v = t[9], b = t[10], S = t[11];
        if (S !== Symbol.for(`react.early_return_sentinel`)) return S;
        let E;
        t[17] !== g || t[18] !== v ? (E = (0, X.jsx)(g, {
            children: v
        }), t[17] = g, t[18] = v, t[19] = E) : E = t[19];
        let D;
        return t[20] !== _ || t[21] !== b || t[22] !== E ? (D = (0, X.jsxs)(_, {
            children: [b, E]
        }), t[20] = _, t[21] = b, t[22] = E, t[23] = D) : D = t[23], D
    }, $ = (0, Y.memo)(Q)
}));
export {
    K as i, ae as n, G as r, $ as t
};
//# sourceMappingURL=ea4fa2d6-ixha07j19ijn3y1i.js.map