import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    N5 as r,
    SN as i,
    aq as a,
    cn as o,
    e1 as s,
    h8 as c,
    hn as ee,
    oq as l,
    t1 as u,
    yN as d
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as f,
    In as p,
    Nn as m,
    Rn as h,
    Vn as g,
    wn as _
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    NCt as v,
    PCt as y,
    TGt as b,
    bUn as x,
    dmn as S,
    fmn as C,
    gUn as w,
    imn as T,
    pmn as E,
    smn as D,
    umn as te,
    wGt as O
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    n as k,
    r as A
} from "./a4ef304b-g1bshrcgcahllv4q.js";
import {
    t as j
} from "./cc275b97-m98p0cj80co24kbs.js";
import {
    c as ne,
    d as M,
    f as N,
    o as re,
    p as ie,
    s as P,
    u as F
} from "./bc86e6a9-m06vmrj1wbpoxfgs.js";
import {
    n as I,
    t as L
} from "./ecfbef4f-d69m7kauhkskhti3.js";
import {
    n as R,
    t as z
} from "./8d846022-kz7pyrbiduq9ktik.js";
import {
    n as B,
    t as V
} from "./e1a66d2b-ji1c4uge7itb4rbv.js";
import {
    n as H,
    t as U
} from "./073fd849-mgani8emaqw2t5x7.js";
var W, G, K = e((() => {
    d(), W = f(), G = ({
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
    return b().width
}
var J, Y, X, Z, Q, $, ae = e((() => {
    J = _(), ie(), I(), A(), N(), R(), F(), P(), H(), B(), D(), v(), c(), a(), O(), s(), n(), Y = t(g()), h(), w(), X = f(), Z = () => (0, X.jsxs)(o.div, {
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
                textdocId: i,
                disableScroll: a
            } = e,
            o = a !== void 0 && a,
            s = r(l),
            c = x(i),
            d = r(q),
            f;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = y(), t[0] = f) : f = t[0];
        let p = f;
        if (!c) return null;
        let {
            versions: m
        } = c, h, g, _, v, b;
        if (t[1] !== o || t[2] !== s || t[3] !== n || t[4] !== c.metadata || t[5] !== m || t[6] !== d) {
            b = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = u(m);
                if (!e) {
                    b = null;
                    break bb0
                }
                let r = m.length > 1 ? m[m.length - 2] : null,
                    i = C(e),
                    a = E(e),
                    l = S(e),
                    f;t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (f = U({
                    isReadonlyFromQueryParam: !0
                }), t[12] = f) : f = t[12];
                let y = f,
                    {
                        content: x,
                        currentlyStreamingLineIndex: w
                    } = re(e, r),
                    D = p ? M(e.comments) : [],
                    O = p ? z.ALL_HIDDEN : z.COMMENTS_READONLY,
                    A = null;bb1: switch (e?.type) {
                    case T.DOCUMENT:
                        A = (0, X.jsx)(ne, {
                            value: x.trimEnd(),
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
                            width: d,
                            modelCursor: l || i && !a ? e?.modelCursor : void 0,
                            metadata: c.metadata
                        });
                        break bb1;
                    default:
                        e && te(e.type) && (A = (0, X.jsx)(L, {
                            id: `codemirror`,
                            currentlyStreamingLineIndex: w,
                            language: k(e.type),
                            value: x,
                            commentsMode: O,
                            hideToolbar: !0,
                            hideAccelerators: !0,
                            isPreview: !0,
                            readonlyReason: y,
                            comments: D,
                            isRequestActive: i
                        }))
                }
                g = j;
                let N = o || !s;t[13] !== A || t[14] !== n || t[15] !== N ? (v = (0, X.jsx)(j.Content, {
                    disableScroll: N,
                    onScroll: n,
                    children: A
                }), t[13] = A, t[14] = n, t[15] = N, t[16] = v) : v = t[16],
                h = ee,
                _ = S(e) && !p && (0, X.jsx)(Z, {})
            }
            t[1] = o, t[2] = s, t[3] = n, t[4] = c.metadata, t[5] = m, t[6] = d, t[7] = h, t[8] = g, t[9] = _, t[10] = v, t[11] = b
        } else h = t[7], g = t[8], _ = t[9], v = t[10], b = t[11];
        if (b !== Symbol.for(`react.early_return_sentinel`)) return b;
        let w;
        t[17] !== h || t[18] !== _ ? (w = (0, X.jsx)(h, {
            children: _
        }), t[17] = h, t[18] = _, t[19] = w) : w = t[19];
        let D;
        return t[20] !== g || t[21] !== v || t[22] !== w ? (D = (0, X.jsxs)(g, {
            children: [v, w]
        }), t[20] = g, t[21] = v, t[22] = w, t[23] = D) : D = t[23], D
    }, $ = (0, Y.memo)(Q)
}));
export {
    K as i, ae as n, G as r, $ as t
};
//# sourceMappingURL=ea4fa2d6-ks9ne2zsurg76td6.js.map