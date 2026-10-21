const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/87c18896-gax5s46cw4juj8ve.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-ed29bs6yiwucn7st.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/30901919-om7b3qf5hp4j9x4l.js", "assets/ee72d6dc-c7jh18p3xvrfc7xn.js", "assets/conversation-small-l6tnsr2xfn2d55kk.js", "assets/c470f5ab-d0jxi6yggehv1yt2.js", "assets/0e5afe53-goyw8fd3qndq8rq5.js", "assets/conversation-small-ixfdle4i.css", "assets/6105d6cc-e7tiyjn7ljvobl3g.js", "assets/686b9e77-gy8di8n3xdy6ve5f.js", "assets/2686af9f-e42exn870idta7xq.js", "assets/282bcbc3-cwuzhqw96tys22me.js", "assets/bb47c0a1-in2pfyh60b3pska3.js", "assets/17789dc6-epieob9ejisrdhab.js", "assets/c2675c8c-fpv9s4kvd412dyap.js", "assets/82782bc9-cz4jkhg31tycbqqf.js", "assets/8b34dbc2-j8rcexxiltkm8ucr.js", "assets/global-modals-lv5n3ujm.css", "assets/bcae0416-ojxhpffjgpo2ol4n.js", "assets/f75c6596-hd1clrgicwul3oz2.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ga as n,
    IN as r,
    J0 as i,
    LN as a,
    Ua as o,
    Y0 as s,
    _N as c,
    vN as l
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as u,
    Bn as d,
    Pt as f,
    Vn as p,
    cn as m,
    jt as h,
    ln as g,
    wn as _
} from "./2340486e-oc6d2eodbcrmxur3.js";
var v, y, b, x, S = e((() => {
        v = _(), c(), y = t(p()), b = d(), x = Object.assign(e => {
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
                a;
            t[0] !== n || t[1] !== r || t[2] !== i ? (a = {
                content: n,
                contentProps: r,
                onClose: i
            }, t[0] = n, t[1] = r, t[2] = i, t[3] = a) : a = t[3];
            let s;
            return t[4] !== i || t[5] !== a ? (s = (0, w.jsx)(o, {
                for: x,
                withProps: a,
                open: !0,
                onClose: i,
                disableCloseOnEscape: !0
            }), t[4] = i, t[5] = a, t[6] = s) : s = t[6], s
        }
    })),
    D, O = e((() => {
        s(), g(), D = i(() => m(() => import(`./87c18896-gax5s46cw4juj8ve.js`).then(e => e.FuturesLightboxWinnerDetails), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22])))
    })),
    k, A, j, M = e((() => {
        k = _(), c(), r(), A = t(p()), j = e => {
            "use forget";
            let t = (0, k.c)(4),
                n = (0, A.useRef)(null),
                r, i;
            t[0] === e ? (r = t[1], i = t[2]) : (r = () => {
                if (!e) return;
                let t = document.body.style.overflow;
                document.body.style.overflow = `hidden`;
                let r = !1,
                    i = () => {
                        r || (document.body.style.overflow = t, r = !0, n.current === i && (n.current = null))
                    };
                return n.current = i, i
            }, i = [e], t[0] = e, t[1] = r, t[2] = i), a(r, i);
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
        P = _(), r(), F = t(p()), u(), M(), I = e => `#${encodeURIComponent(e)}`, L = (e, t) => `${e}${t}`, R = e => {
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
                n = h(),
                r = f(),
                i = (0, F.useRef)(!1),
                o = (0, F.useRef)(!1),
                s = (0, F.useRef)(null),
                c = (0, F.useRef)(!1),
                [l, u] = (0, F.useState)(!1),
                [d, p] = (0, F.useState)(n.hash),
                m, g;
            t[0] !== d || t[1] !== e ? (m = R(d), g = m == null ? null : e(m), t[0] = d, t[1] = e, t[2] = m, t[3] = g) : (m = t[2], g = t[3]);
            let _ = g,
                v = _ ? m : null,
                y = j(v != null),
                b, x;
            t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (b = () => {
                u(!0)
            }, x = [], t[4] = b, t[5] = x) : (b = t[4], x = t[5]), (0, F.useEffect)(b, x);
            let S, C;
            t[6] === n.hash ? (S = t[7], C = t[8]) : (S = () => {
                p(n.hash)
            }, C = [n.hash], t[6] = n.hash, t[7] = S, t[8] = C), (0, F.useEffect)(S, C);
            let w, T;
            t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (w = () => {
                let e = () => {
                    p(window.location.hash)
                };
                return window.addEventListener(`hashchange`, e), () => {
                    window.removeEventListener(`hashchange`, e)
                }
            }, T = [], t[9] = w, t[10] = T) : (w = t[9], T = t[10]), (0, F.useEffect)(w, T);
            let E, D;
            t[11] === v ? (E = t[12], D = t[13]) : (E = () => {
                v != null && (i.current = !1)
            }, D = [v], t[11] = v, t[12] = E, t[13] = D), (0, F.useEffect)(E, D);
            let O, k;
            t[14] === v ? (O = t[15], k = t[16]) : (k = () => {
                if (v != null) {
                    s.current = v;
                    return
                }
                s.current != null && (z(s.current), s.current = null)
            }, O = [v], t[14] = v, t[15] = O, t[16] = k), a(k, O);
            let A, M;
            t[17] !== n.pathname || t[18] !== n.search || t[19] !== r || t[20] !== v ? (A = () => {
                let e = c.current;
                c.current = v != null, !(!e || v != null || !o.current) && (r(L(n.pathname, n.search), {
                    preventScrollReset: !0,
                    replace: !0
                }), o.current = !1)
            }, M = [n.pathname, n.search, r, v], t[17] = n.pathname, t[18] = n.search, t[19] = r, t[20] = v, t[21] = A, t[22] = M) : (A = t[21], M = t[22]), a(A, M);
            let B = N,
                V;
            t[23] === r ? V = t[24] : (V = e => {
                i.current = !1, o.current = !0, r(I(e), {
                    preventScrollReset: !0
                })
            }, t[23] = r, t[24] = V);
            let H = V,
                U;
            t[25] !== n.pathname || t[26] !== n.search || t[27] !== r || t[28] !== y ? (U = () => {
                if (!i.current && R(window.location.hash) != null) {
                    if (i.current = !0, y(), o.current) {
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
        H = _(), U = t(p()), E(), O(), V(), W = d(), G = (0, U.createContext)(null), K = e => t => Object.hasOwn(e, t) ? {
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
//# sourceMappingURL=caf26fba-l6ct3duqh2vs0md6.js.map