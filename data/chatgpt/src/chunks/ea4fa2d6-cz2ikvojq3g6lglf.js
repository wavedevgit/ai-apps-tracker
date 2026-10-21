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
    hn as ee,
    iq as s,
    k8 as c,
    q5 as l,
    rq as u,
    u1 as d
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as f,
    In as p,
    Nn as m,
    Rn as h,
    Vn as g,
    wn as _
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    ACt as v,
    BUn as y,
    Cmn as b,
    Dmn as x,
    Emn as S,
    IUn as C,
    Omn as w,
    bGt as T,
    bmn as te,
    kCt as E,
    kmn as D,
    xGt as O
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    n as k,
    r as A
} from "./a4ef304b-gbijpzzs360u61hi.js";
import {
    t as j
} from "./cc275b97-mau49l3z8qv91h2x.js";
import {
    c as M,
    d as N,
    f as P,
    o as F,
    p as I,
    s as L,
    u as R
} from "./bc86e6a9-hkkc6tpit2be9ivy.js";
import {
    n as z,
    t as B
} from "./ecfbef4f-jjblp4orzzgned6b.js";
import {
    n as V,
    t as H
} from "./8d846022-kz7pyrbiduq9ktik.js";
import {
    n as U,
    t as W
} from "./e1a66d2b-nuc6dkyr8vjzvgvj.js";
import {
    n as G,
    t as ne
} from "./073fd849-gj79j6m5r5u9kihf.js";
var K, q, re = e((() => {
    i(), K = f(), q = ({
        size: e = `large`,
        position: t = `bottom`
    }) => {
        let n = r(),
            i = e === `large` ? `4em` : `50px`,
            a = `${n?`rgba(0,0,0,0)`:`rgba(255,255,255,0)`}, ${n?`#2f2f2f`:`#ffffff`}`;
        return t === `bottom` ? (0, K.jsx)(`div`, {
            className: `absolute bottom-0 z-20 h-24 w-full transition-colors`,
            style: {
                height: i,
                background: `linear-gradient(${a})`
            }
        }) : (0, K.jsx)(`div`, {
            className: `absolute end-0 top-0 bottom-0 z-20 transition-colors`,
            style: {
                width: i,
                background: `linear-gradient(to right, ${a})`
            }
        })
    }
}));

function ie() {
    return O().width
}
var J, Y, X, Z, Q, $, ae = e((() => {
    J = _(), I(), z(), A(), P(), V(), R(), L(), G(), U(), b(), E(), c(), u(), T(), d(), n(), Y = t(g()), h(), C(), X = f(), Z = () => (0, X.jsxs)(a.div, {
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
        }), (0, X.jsx)(W, {
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
            c = l(s),
            u = y(r),
            d = l(ie),
            f;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = v(), t[0] = f) : f = t[0];
        let p = f;
        if (!u) return null;
        let {
            versions: m
        } = u, h, g, _, b, C;
        if (t[1] !== a || t[2] !== c || t[3] !== n || t[4] !== u.metadata || t[5] !== m || t[6] !== d) {
            C = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = o(m);
                if (!e) {
                    C = null;
                    break bb0
                }
                let r = m.length > 1 ? m[m.length - 2] : null,
                    i = w(e),
                    s = D(e),
                    l = x(e),
                    f;t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (f = ne({
                    isReadonlyFromQueryParam: !0
                }), t[12] = f) : f = t[12];
                let v = f,
                    {
                        content: y,
                        currentlyStreamingLineIndex: T
                    } = F(e, r),
                    E = p ? N(e.comments) : [],
                    O = p ? H.ALL_HIDDEN : H.COMMENTS_READONLY,
                    A = null;bb1: switch (e?.type) {
                    case te.DOCUMENT:
                        A = (0, X.jsx)(M, {
                            value: y.trimEnd(),
                            previousValue: r?.content,
                            comments: E,
                            isRequestActive: i,
                            isRewriting: s,
                            isPreview: !0,
                            isDisabled: !0,
                            hideAccelerators: !0,
                            commentsMode: O,
                            readonlyReason: v,
                            hideToolbar: !0,
                            hideEditOverlay: !0,
                            width: d,
                            modelCursor: l || i && !s ? e?.modelCursor : void 0,
                            metadata: u.metadata
                        });
                        break bb1;
                    default:
                        e && S(e.type) && (A = (0, X.jsx)(B, {
                            id: `codemirror`,
                            currentlyStreamingLineIndex: T,
                            language: k(e.type),
                            value: y,
                            commentsMode: O,
                            hideToolbar: !0,
                            hideAccelerators: !0,
                            isPreview: !0,
                            readonlyReason: v,
                            comments: E,
                            isRequestActive: i
                        }))
                }
                g = j;
                let P = a || !c;t[13] !== A || t[14] !== n || t[15] !== P ? (b = (0, X.jsx)(j.Content, {
                    disableScroll: P,
                    onScroll: n,
                    children: A
                }), t[13] = A, t[14] = n, t[15] = P, t[16] = b) : b = t[16],
                h = ee,
                _ = x(e) && !p && (0, X.jsx)(Z, {})
            }
            t[1] = a, t[2] = c, t[3] = n, t[4] = u.metadata, t[5] = m, t[6] = d, t[7] = h, t[8] = g, t[9] = _, t[10] = b, t[11] = C
        } else h = t[7], g = t[8], _ = t[9], b = t[10], C = t[11];
        if (C !== Symbol.for(`react.early_return_sentinel`)) return C;
        let T;
        t[17] !== h || t[18] !== _ ? (T = (0, X.jsx)(h, {
            children: _
        }), t[17] = h, t[18] = _, t[19] = T) : T = t[19];
        let E;
        return t[20] !== g || t[21] !== b || t[22] !== T ? (E = (0, X.jsxs)(g, {
            children: [b, T]
        }), t[20] = g, t[21] = b, t[22] = T, t[23] = E) : E = t[23], E
    }, $ = (0, Y.memo)(Q)
}));
export {
    re as i, ae as n, q as r, $ as t
};
//# sourceMappingURL=ea4fa2d6-cz2ikvojq3g6lglf.js.map