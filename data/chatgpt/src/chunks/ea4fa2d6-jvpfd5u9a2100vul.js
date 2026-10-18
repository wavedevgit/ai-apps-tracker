import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    B6 as r,
    NK as i,
    O$ as a,
    PK as o,
    cn as s,
    hn as c,
    i5 as l,
    iN as u,
    k$ as d,
    tN as f
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as p,
    In as m,
    Nn as h,
    Rn as g,
    Vn as _,
    wn as v
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Kpn as y,
    OCt as b,
    Qpn as ee,
    Upn as te,
    Xpn as x,
    Ypn as S,
    Zpn as C,
    dUn as w,
    kCt as T,
    sUn as E,
    vGt as D,
    yGt as O
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as k,
    r as A
} from "./a4ef304b-mdfguhztje8zepfd.js";
import {
    t as j
} from "./cc275b97-fanochffqsme4zaz.js";
import {
    c as M,
    d as ne,
    f as N,
    o as re,
    p as ie,
    s as P,
    u as F
} from "./bc86e6a9-dpmx4k2lptoanalv.js";
import {
    n as I,
    t as L
} from "./ecfbef4f-kqdms8julhrorr4e.js";
import {
    n as R,
    t as z
} from "./8d846022-kz7pyrbiduq9ktik.js";
import {
    n as B,
    t as V
} from "./e1a66d2b-dob1j28wge0fmdz8.js";
import {
    n as H,
    t as U
} from "./073fd849-npv0ykwfmvcugv1y.js";
var W, G, K = e((() => {
    f(), W = p(), G = ({
        size: e = `large`,
        position: t = `bottom`
    }) => {
        let n = u(),
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
    return O().width
}
var J, Y, X, Z, Q, $, ae = e((() => {
    J = v(), ie(), I(), A(), N(), R(), F(), P(), H(), B(), y(), b(), r(), i(), D(), a(), n(), Y = t(_()), g(), E(), X = p(), Z = () => (0, X.jsxs)(s.div, {
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
            s = l(o),
            u = w(r),
            f = l(q),
            p;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = T(), t[0] = p) : p = t[0];
        let m = p;
        if (!u) return null;
        let {
            versions: h
        } = u, g, _, v, y, b;
        if (t[1] !== a || t[2] !== s || t[3] !== n || t[4] !== u.metadata || t[5] !== h || t[6] !== f) {
            b = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = d(h);
                if (!e) {
                    b = null;
                    break bb0
                }
                let r = h.length > 1 ? h[h.length - 2] : null,
                    i = C(e),
                    o = ee(e),
                    l = x(e),
                    p;t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (p = U({
                    isReadonlyFromQueryParam: !0
                }), t[12] = p) : p = t[12];
                let w = p,
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
                            isRewriting: o,
                            isPreview: !0,
                            isDisabled: !0,
                            hideAccelerators: !0,
                            commentsMode: O,
                            readonlyReason: w,
                            hideToolbar: !0,
                            hideEditOverlay: !0,
                            width: f,
                            modelCursor: l || i && !o ? e?.modelCursor : void 0,
                            metadata: u.metadata
                        });
                        break bb1;
                    default:
                        e && S(e.type) && (A = (0, X.jsx)(L, {
                            id: `codemirror`,
                            currentlyStreamingLineIndex: E,
                            language: k(e.type),
                            value: T,
                            commentsMode: O,
                            hideToolbar: !0,
                            hideAccelerators: !0,
                            isPreview: !0,
                            readonlyReason: w,
                            comments: D,
                            isRequestActive: i
                        }))
                }
                _ = j;
                let N = a || !s;t[13] !== A || t[14] !== n || t[15] !== N ? (y = (0, X.jsx)(j.Content, {
                    disableScroll: N,
                    onScroll: n,
                    children: A
                }), t[13] = A, t[14] = n, t[15] = N, t[16] = y) : y = t[16],
                g = c,
                v = x(e) && !m && (0, X.jsx)(Z, {})
            }
            t[1] = a, t[2] = s, t[3] = n, t[4] = u.metadata, t[5] = h, t[6] = f, t[7] = g, t[8] = _, t[9] = v, t[10] = y, t[11] = b
        } else g = t[7], _ = t[8], v = t[9], y = t[10], b = t[11];
        if (b !== Symbol.for(`react.early_return_sentinel`)) return b;
        let E;
        t[17] !== g || t[18] !== v ? (E = (0, X.jsx)(g, {
            children: v
        }), t[17] = g, t[18] = v, t[19] = E) : E = t[19];
        let D;
        return t[20] !== _ || t[21] !== y || t[22] !== E ? (D = (0, X.jsxs)(_, {
            children: [y, E]
        }), t[20] = _, t[21] = y, t[22] = E, t[23] = D) : D = t[23], D
    }, $ = (0, Y.memo)(Q)
}));
export {
    K as i, ae as n, G as r, $ as t
};
//# sourceMappingURL=ea4fa2d6-jvpfd5u9a2100vul.js.map