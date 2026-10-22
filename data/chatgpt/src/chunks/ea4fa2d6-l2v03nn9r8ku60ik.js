import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    ON as r,
    TN as i,
    cn as a,
    d1 as o,
    hn as s,
    iq as c,
    k8 as l,
    q5 as u,
    rq as d,
    u1 as f
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as p,
    In as m,
    Nn as h,
    Rn as g,
    Vn as _,
    wn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bmn as y,
    Gmn as ee,
    Kmn as b,
    Lmn as te,
    MCt as x,
    NCt as S,
    TGt as C,
    Umn as w,
    Wmn as T,
    aWn as E,
    tWn as D,
    wGt as O
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    n as k,
    r as A
} from "./a4ef304b-k3103f2oo4p1mqfz.js";
import {
    t as j
} from "./cc275b97-l0fyyt323rngzlxq.js";
import {
    c as ne,
    d as re,
    f as M,
    o as ie,
    p as N,
    s as P,
    u as F
} from "./bc86e6a9-kgxc6p4h9cms5v8j.js";
import {
    n as I,
    t as L
} from "./ecfbef4f-etvwna9ttwtzi6be.js";
import {
    n as R,
    t as z
} from "./8d846022-kz7pyrbiduq9ktik.js";
import {
    n as B,
    t as V
} from "./e1a66d2b-ost0qyl4eh9wemvy.js";
import {
    n as H,
    t as U
} from "./073fd849-cx7ahesx3lgw2200.js";
var W, G, K = e((() => {
    i(), W = p(), G = ({
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
    return C().width
}
var J, Y, X, Z, Q, $, ae = e((() => {
    J = v(), N(), I(), A(), M(), R(), F(), P(), H(), B(), y(), x(), l(), d(), O(), f(), n(), Y = t(_()), g(), D(), X = p(), Z = () => (0, X.jsxs)(a.div, {
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
            l = u(c),
            d = E(r),
            f = u(q),
            p;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = S(), t[0] = p) : p = t[0];
        let m = p;
        if (!d) return null;
        let {
            versions: h
        } = d, g, _, v, y, x;
        if (t[1] !== a || t[2] !== l || t[3] !== n || t[4] !== d.metadata || t[5] !== h || t[6] !== f) {
            x = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = o(h);
                if (!e) {
                    x = null;
                    break bb0
                }
                let r = h.length > 1 ? h[h.length - 2] : null,
                    i = ee(e),
                    c = b(e),
                    u = T(e),
                    p;t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (p = U({
                    isReadonlyFromQueryParam: !0
                }), t[12] = p) : p = t[12];
                let S = p,
                    {
                        content: C,
                        currentlyStreamingLineIndex: E
                    } = ie(e, r),
                    D = m ? re(e.comments) : [],
                    O = m ? z.ALL_HIDDEN : z.COMMENTS_READONLY,
                    A = null;bb1: switch (e?.type) {
                    case te.DOCUMENT:
                        A = (0, X.jsx)(ne, {
                            value: C.trimEnd(),
                            previousValue: r?.content,
                            comments: D,
                            isRequestActive: i,
                            isRewriting: c,
                            isPreview: !0,
                            isDisabled: !0,
                            hideAccelerators: !0,
                            commentsMode: O,
                            readonlyReason: S,
                            hideToolbar: !0,
                            hideEditOverlay: !0,
                            width: f,
                            modelCursor: u || i && !c ? e?.modelCursor : void 0,
                            metadata: d.metadata
                        });
                        break bb1;
                    default:
                        e && w(e.type) && (A = (0, X.jsx)(L, {
                            id: `codemirror`,
                            currentlyStreamingLineIndex: E,
                            language: k(e.type),
                            value: C,
                            commentsMode: O,
                            hideToolbar: !0,
                            hideAccelerators: !0,
                            isPreview: !0,
                            readonlyReason: S,
                            comments: D,
                            isRequestActive: i
                        }))
                }
                _ = j;
                let M = a || !l;t[13] !== A || t[14] !== n || t[15] !== M ? (y = (0, X.jsx)(j.Content, {
                    disableScroll: M,
                    onScroll: n,
                    children: A
                }), t[13] = A, t[14] = n, t[15] = M, t[16] = y) : y = t[16],
                g = s,
                v = T(e) && !m && (0, X.jsx)(Z, {})
            }
            t[1] = a, t[2] = l, t[3] = n, t[4] = d.metadata, t[5] = h, t[6] = f, t[7] = g, t[8] = _, t[9] = v, t[10] = y, t[11] = x
        } else g = t[7], _ = t[8], v = t[9], y = t[10], x = t[11];
        if (x !== Symbol.for(`react.early_return_sentinel`)) return x;
        let C;
        t[17] !== g || t[18] !== v ? (C = (0, X.jsx)(g, {
            children: v
        }), t[17] = g, t[18] = v, t[19] = C) : C = t[19];
        let D;
        return t[20] !== _ || t[21] !== y || t[22] !== C ? (D = (0, X.jsxs)(_, {
            children: [y, C]
        }), t[20] = _, t[21] = y, t[22] = C, t[23] = D) : D = t[23], D
    }, $ = (0, Y.memo)(Q)
}));
export {
    K as i, ae as n, G as r, $ as t
};
//# sourceMappingURL=ea4fa2d6-l2v03nn9r8ku60ik.js.map