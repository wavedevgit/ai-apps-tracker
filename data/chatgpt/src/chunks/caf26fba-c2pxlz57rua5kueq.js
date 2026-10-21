const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/87c18896-o6cml0vo2p1e041w.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-tap9fxyhk4ehe0bs.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-niqyapppecmq5jkn.js", "assets/ee72d6dc-bs9u6nkfwpkplnbl.js", "assets/conversation-small-nmt18uiom3b14vca.js", "assets/c470f5ab-uuoa2gfm4goj6p9f.js", "assets/0e5afe53-f7up6uuou2fv3lyg.js", "assets/conversation-small-bwtqiuwj.css", "assets/6105d6cc-f7urah36xjvrk760.js", "assets/686b9e77-hj8ru32gtgxeg96l.js", "assets/2686af9f-geeknnrbylzbpkqd.js", "assets/282bcbc3-gl6j5nc1vtue56ig.js", "assets/bb47c0a1-k8e1jp9q0afnfvqr.js", "assets/17789dc6-dcu4fhvryz7ofexs.js", "assets/c2675c8c-h5ybkhdzcoblzzdu.js", "assets/82782bc9-g3liom11amtlr9kq.js", "assets/8b34dbc2-ojcl97ddvu2212q0.js", "assets/global-modals-lv5n3ujm.css", "assets/bcae0416-ojxhpffjgpo2ol4n.js", "assets/f75c6596-hd1clrgicwul3oz2.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ka as n,
    LN as r,
    RN as i,
    Wa as a,
    X0 as o,
    Z0 as s,
    vN as c,
    yN as l
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    At as u,
    Bn as d,
    Nt as f,
    Q as p,
    Vn as m,
    cn as h,
    ln as g,
    wn as _
} from "./2340486e-i7pjxgdhv0bs6apg.js";
var v, y, b, x, S = e((() => {
        v = _(), c(), y = t(m()), b = d(), x = Object.assign(e => {
            "use forget";
            let t = (0, v.c)(8),
                {
                    content: n,
                    contentProps: r,
                    onClose: i
                } = e,
                a;
            t[0] === i ? a = t[1] : (a = () => {
                i()
            }, t[0] = i, t[1] = a);
            let o = l(a),
                s, c;
            t[2] === o ? (s = t[3], c = t[4]) : (s = () => {
                let e = e => {
                    e.key === `Escape` && (e.preventDefault(), o())
                };
                return document.addEventListener(`keydown`, e, {
                    capture: !0
                }), () => {
                    document.removeEventListener(`keydown`, e, {
                        capture: !0
                    })
                }
            }, c = [o], t[2] = o, t[3] = s, t[4] = c), (0, y.useEffect)(s, c);
            let u;
            return t[5] !== n || t[6] !== r ? (u = (0, b.jsx)(n, {
                ...r
            }), t[5] = n, t[6] = r, t[7] = u) : u = t[7], u
        }, {
            prefetch: async () => {},
            skipSuspense: () => {}
        })
    })),
    C, w, T, E = e((() => {
        C = _(), n(), S(), w = d(), T = e => {
            "use forget";
            let t = (0, C.c)(7),
                {
                    content: n,
                    contentProps: r,
                    onClose: i
                } = e,
                o;
            t[0] !== n || t[1] !== r || t[2] !== i ? (o = {
                content: n,
                contentProps: r,
                onClose: i
            }, t[0] = n, t[1] = r, t[2] = i, t[3] = o) : o = t[3];
            let s;
            return t[4] !== i || t[5] !== o ? (s = (0, w.jsx)(a, {
                for: x,
                withProps: o,
                open: !0,
                onClose: i,
                disableCloseOnEscape: !0
            }), t[4] = i, t[5] = o, t[6] = s) : s = t[6], s
        }
    })),
    D, O = e((() => {
        s(), g(), D = o(() => h(() => import(`./87c18896-o6cml0vo2p1e041w.js`).then(e => e.FuturesLightboxWinnerDetails), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22])))
    })),
    k, A, j, M = e((() => {
        k = _(), c(), r(), A = t(m()), j = e => {
            "use forget";
            let t = (0, k.c)(4),
                n = (0, A.useRef)(null),
                r, a;
            t[0] === e ? (r = t[1], a = t[2]) : (r = () => {
                if (!e) return;
                let t = document.body.style.overflow;
                document.body.style.overflow = `hidden`;
                let r = !1,
                    i = () => {
                        r || (document.body.style.overflow = t, r = !0, n.current === i && (n.current = null))
                    };
                return n.current = i, i
            }, a = [e], t[0] = e, t[1] = r, t[2] = a), i(r, a);
            let o;
            return t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (o = () => {
                n.current?.()
            }, t[3] = o) : o = t[3], l(o)
        }
    }));

function N(e) {
    return I(e)
}
var P, F, I, L, R, z, B, V = e((() => {
        P = _(), r(), F = t(m()), p(), M(), I = e => `#${encodeURIComponent(e)}`, L = (e, t) => `${e}${t}`, R = e => {
            if (!e.startsWith(`#`) || e.length === 1) return null;
            try {
                return decodeURIComponent(e.slice(1))
            } catch {
                return null
            }
        }, z = e => {
            Array.from(document.querySelectorAll(`[data-futures-content-slug]`)).find(t => t.dataset.futuresContentSlug === e)?.focus()
        }, B = e => {
            "use forget";
            let t = (0, P.c)(36),
                n = u(),
                r = f(),
                a = (0, F.useRef)(!1),
                o = (0, F.useRef)(!1),
                s = (0, F.useRef)(null),
                c = (0, F.useRef)(!1),
                [l, d] = (0, F.useState)(!1),
                [p, m] = (0, F.useState)(n.hash),
                h, g;
            t[0] !== p || t[1] !== e ? (h = R(p), g = h == null ? null : e(h), t[0] = p, t[1] = e, t[2] = h, t[3] = g) : (h = t[2], g = t[3]);
            let _ = g,
                v = _ ? h : null,
                y = j(v != null),
                b, x;
            t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (b = () => {
                d(!0)
            }, x = [], t[4] = b, t[5] = x) : (b = t[4], x = t[5]), (0, F.useEffect)(b, x);
            let S, C;
            t[6] === n.hash ? (S = t[7], C = t[8]) : (S = () => {
                m(n.hash)
            }, C = [n.hash], t[6] = n.hash, t[7] = S, t[8] = C), (0, F.useEffect)(S, C);
            let w, T;
            t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (w = () => {
                let e = () => {
                    m(window.location.hash)
                };
                return window.addEventListener(`hashchange`, e), () => {
                    window.removeEventListener(`hashchange`, e)
                }
            }, T = [], t[9] = w, t[10] = T) : (w = t[9], T = t[10]), (0, F.useEffect)(w, T);
            let E, D;
            t[11] === v ? (E = t[12], D = t[13]) : (E = () => {
                v != null && (a.current = !1)
            }, D = [v], t[11] = v, t[12] = E, t[13] = D), (0, F.useEffect)(E, D);
            let O, k;
            t[14] === v ? (O = t[15], k = t[16]) : (k = () => {
                if (v != null) {
                    s.current = v;
                    return
                }
                s.current != null && (z(s.current), s.current = null)
            }, O = [v], t[14] = v, t[15] = O, t[16] = k), i(k, O);
            let A, M;
            t[17] !== n.pathname || t[18] !== n.search || t[19] !== r || t[20] !== v ? (A = () => {
                let e = c.current;
                c.current = v != null, !(!e || v != null || !o.current) && (r(L(n.pathname, n.search), {
                    preventScrollReset: !0,
                    replace: !0
                }), o.current = !1)
            }, M = [n.pathname, n.search, r, v], t[17] = n.pathname, t[18] = n.search, t[19] = r, t[20] = v, t[21] = A, t[22] = M) : (A = t[21], M = t[22]), i(A, M);
            let B = N,
                V;
            t[23] === r ? V = t[24] : (V = e => {
                a.current = !1, o.current = !0, r(I(e), {
                    preventScrollReset: !0
                })
            }, t[23] = r, t[24] = V);
            let H = V,
                U;
            t[25] !== n.pathname || t[26] !== n.search || t[27] !== r || t[28] !== y ? (U = () => {
                if (!a.current && R(window.location.hash) != null) {
                    if (a.current = !0, y(), o.current) {
                        r(-1);
                        return
                    }
                    r(L(n.pathname, n.search), {
                        preventScrollReset: !0,
                        replace: !0
                    })
                }
            }, t[25] = n.pathname, t[26] = n.search, t[27] = r, t[28] = y, t[29] = U) : U = t[29];
            let W = U,
                G;
            return t[30] !== W || t[31] !== l || t[32] !== H || t[33] !== _ || t[34] !== v ? (G = {
                isHydrated: l,
                selectedSlug: v,
                selectedEntry: _,
                getLightboxHref: B,
                openLightbox: H,
                closeLightbox: W
            }, t[30] = W, t[31] = l, t[32] = H, t[33] = _, t[34] = v, t[35] = G) : G = t[35], G
        }
    })),
    H, U, W, G, K, q, J = e((() => {
        H = _(), U = t(m()), E(), O(), V(), W = d(), G = (0, U.createContext)(null), K = e => t => Object.hasOwn(e, t) ? {
            content: D,
            contentProps: {
                data: e[t]
            }
        } : null, q = e => {
            "use forget";
            let t = (0, H.c)(15),
                {
                    children: n,
                    modalDataBySlug: r
                } = e,
                i;
            t[0] === r ? i = t[1] : (i = K(r), t[0] = r, t[1] = i);
            let {
                isHydrated: a,
                selectedSlug: o,
                selectedEntry: s,
                getLightboxHref: c,
                openLightbox: l,
                closeLightbox: u
            } = B(i), d;
            t[2] !== c || t[3] !== l || t[4] !== o ? (d = {
                selectedSlug: o,
                getLightboxHref: c,
                openLightbox: l
            }, t[2] = c, t[3] = l, t[4] = o, t[5] = d) : d = t[5];
            let f;
            t[6] !== u || t[7] !== a || t[8] !== s || t[9] !== o ? (f = a && s && (0, W.jsx)(T, {
                content: s.content,
                contentProps: s.contentProps,
                onClose: u
            }, o), t[6] = u, t[7] = a, t[8] = s, t[9] = o, t[10] = f) : f = t[10];
            let p;
            return t[11] !== n || t[12] !== d || t[13] !== f ? (p = (0, W.jsxs)(G.Provider, {
                value: d,
                children: [n, f]
            }), t[11] = n, t[12] = d, t[13] = f, t[14] = p) : p = t[14], p
        }
    }));
export {
    q as n, J as r, G as t
};
//# sourceMappingURL=caf26fba-c2pxlz57rua5kueq.js.map