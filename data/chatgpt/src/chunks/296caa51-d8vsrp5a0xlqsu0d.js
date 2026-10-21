import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    HN as n,
    UN as r,
    aW as i,
    bx as a,
    c7 as o,
    fx as s,
    gq as c,
    k8 as l,
    l7 as u,
    q5 as d,
    rE as f,
    rW as p,
    rq as m,
    tE as h
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as g,
    Vn as _,
    wn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    axn as y,
    lUn as b,
    oxn as ee
} from "./conversation-small-ocicxxw6jegn4vux.js";

function te({
    itemCount: e,
    itemHeight: t,
    itemIndex: n,
    scrollTop: r,
    viewportHeight: i
}) {
    if (e <= 0 || !Number.isFinite(t) || t <= 0 || n < 0 || n >= e || !Number.isFinite(r) || !Number.isFinite(i) || i <= 0) return null;
    let a = t * 4,
        o = t * 2,
        s = o + n * (t + a),
        c = s + t,
        l = o * 2 + e * t + (e - 1) * a,
        u = Math.max(0, l - i),
        d = Math.min(Math.max(0, r), u);
    return s < d ? Math.min(s, u) : c > d + i ? Math.min(c - i, u) : d === r ? null : d
}
var x = e((() => {}));

function ne(e) {
    "use forget";
    let t = (0, re.c)(54),
        {
            items: n,
            activeItemId: i,
            onSelect: a,
            menuAnchor: l,
            className: u,
            maxHeightContainerRef: f,
            onOpenChange: m,
            closeOnSelect: g
        } = e,
        _ = g !== void 0 && g,
        v = d(c),
        y = (0, S.useRef)(null),
        b = (0, S.useRef)(null),
        x = (0, S.useRef)(null),
        ne = (0, S.useRef)(null),
        w = (0, S.useRef)(null),
        T = (0, S.useRef)(0),
        se = (0, S.useRef)(null),
        [ce, le] = (0, S.useState)(!1),
        [E, ue] = (0, S.useState)(!1),
        [de, fe] = (0, S.useState)(!1),
        [D, O] = (0, S.useState)(null),
        [k, pe] = (0, S.useState)(null),
        [A, me] = (0, S.useState)(null),
        [j, he] = (0, S.useState)(null),
        ge = n[0]?.id,
        M;
    t[0] === i ? M = t[1] : (M = e => e.id === i, t[0] = i, t[1] = M);
    let N = n.findIndex(M),
        _e = D?.isConnected ?? !1,
        P = n.length > 0 && (ce || _e),
        F = P || E,
        I;
    t[2] === k ? I = t[3] : (I = k == null ? void 0 : {
        maxHeight: k
    }, t[2] = k, t[3] = I);
    let ve = I,
        ye = () => {
            b.current &&= (clearTimeout(b.current), null), le(!1), O(null);
            let e = document.activeElement;
            e instanceof HTMLElement && y.current?.contains(e) && e.blur()
        },
        be = e => {
            a(e), _ && ye()
        },
        xe, L;
    t[4] !== m || t[5] !== F ? (xe = () => {
        m?.(F)
    }, L = [m, F], t[4] = m, t[5] = F, t[6] = xe, t[7] = L) : (xe = t[6], L = t[7]), r(xe, L);
    let R, z;
    t[8] !== E || t[9] !== P || t[10] !== v ? (R = () => {
        if (P) {
            x.current &&= (clearTimeout(x.current), null), ue(!0), v && fe(!0);
            return
        }
        if (E) {
            if (fe(!1), v) {
                ue(!1);
                return
            }
            return x.current = setTimeout(() => {
                x.current = null, ue(!1)
            }, ie), () => {
                x.current &&= (clearTimeout(x.current), null)
            }
        }
    }, z = [E, P, v], t[8] = E, t[9] = P, t[10] = v, t[11] = R, t[12] = z) : (R = t[11], z = t[12]), r(R, z);
    let B, V;
    t[13] !== E || t[14] !== P || t[15] !== v ? (B = () => {
        if (!P || !E || v) return;
        let e = null,
            t = window.requestAnimationFrame(() => {
                e = window.requestAnimationFrame(() => {
                    fe(!0)
                })
            });
        return () => {
            window.cancelAnimationFrame(t), e != null && window.cancelAnimationFrame(e)
        }
    }, V = [E, P, v], t[13] = E, t[14] = P, t[15] = v, t[16] = B, t[17] = V) : (B = t[16], V = t[17]), (0, S.useEffect)(B, V);
    let H, U;
    t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (H = () => () => {
        b.current && clearTimeout(b.current), x.current && clearTimeout(x.current)
    }, U = [], t[18] = H, t[19] = U) : (H = t[18], U = t[19]), (0, S.useEffect)(H, U);
    let W, G;
    t[20] === f ? (W = t[21], G = t[22]) : (W = () => {
        let e = f?.current;
        if (e instanceof HTMLElement) return p({
            axis: `height`,
            target: e,
            onChange(e) {
                let {
                    height: t
                } = e;
                (0, S.startTransition)(() => {
                    pe(oe(t))
                })
            }
        })
    }, G = [f], t[20] = f, t[21] = W, t[22] = G), (0, S.useEffect)(W, G);
    let K, q;
    t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (K = () => p({
        axis: `height`,
        target: ne.current,
        onChange(e, t) {
            let n = t.target;
            n instanceof HTMLElement && (0, S.startTransition)(() => {
                me(n.clientHeight)
            })
        }
    }), q = [], t[23] = K, t[24] = q) : (K = t[23], q = t[24]), (0, S.useEffect)(K, q);
    let J;
    t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (J = () => {
        let e = w.current?.firstElementChild;
        if (e instanceof HTMLElement) return p({
            axis: `height`,
            target: e,
            onChange(e) {
                let {
                    height: t
                } = e;
                (0, S.startTransition)(() => {
                    he(t > 0 ? t : null)
                })
            }
        })
    }, t[25] = J) : J = t[25];
    let Y;
    t[26] === ge ? Y = t[27] : (Y = [ge], t[26] = ge, t[27] = Y), (0, S.useEffect)(J, Y);
    let X;
    t[28] !== n.length || t[29] !== j || t[30] !== A ? (X = e => {
        let t = w.current;
        if (!t || A == null || j == null) return;
        let r = te({
            itemCount: n.length,
            itemHeight: j,
            itemIndex: e,
            scrollTop: T.current,
            viewportHeight: A
        });
        r != null && (T.current = r, t.style.transform = `translate3d(0, -${r}px, 0)`)
    }, t[28] = n.length, t[29] = j, t[30] = A, t[31] = X) : X = t[31];
    let Z = X,
        Q;
    t[32] !== N || t[33] !== D || t[34] !== n.length || t[35] !== Z ? (Q = () => {
        let e = D != null && y.current?.contains(D);
        D != null && !e && O(null);
        let t = D?.parentElement === w.current ? Number(D.dataset.tocItemIndex) : -1;
        t >= 0 ? Z(t) : N >= 0 && !e ? Z(N) : N < 0 && (!e || n.length === 0) && (T.current = 0, w.current?.style.removeProperty(`transform`))
    }, t[32] = N, t[33] = D, t[34] = n.length, t[35] = Z, t[36] = Q) : Q = t[36];
    let Se;
    t[37] !== N || t[38] !== D || t[39] !== n || t[40] !== Z ? (Se = [N, D, n, Z], t[37] = N, t[38] = D, t[39] = n, t[40] = Z, t[41] = Se) : Se = t[41], (0, S.useEffect)(Q, Se);
    let Ce;
    t[42] !== E || t[43] !== P ? (Ce = () => {
        if (!P || !E) return;
        let e = se.current?.querySelector(`[data-toc-active]`);
        e && ee({
            node: e,
            axis: `y`,
            options: {
                block: `nearest`
            }
        })
    }, t[42] = E, t[43] = P, t[44] = Ce) : Ce = t[44];
    let we;
    t[45] !== i || t[46] !== N || t[47] !== E || t[48] !== P ? (we = [i, N, E, P], t[45] = i, t[46] = N, t[47] = E, t[48] = P, t[49] = we) : we = t[49], (0, S.useEffect)(Ce, we);
    let Te, Ee, De, $;
    return t[50] === Symbol.for(`react.memo_cache_sentinel`) ? (Te = () => {
        b.current &&= (clearTimeout(b.current), null), le(!0)
    }, Ee = () => {
        b.current = setTimeout(() => {
            b.current = null, le(!1)
        }, ae)
    }, De = e => {
        b.current &&= (clearTimeout(b.current), null), O(e.target instanceof HTMLElement && e.target.matches(`:focus-visible`) ? e.target : null)
    }, $ = e => {
        let t = e.relatedTarget;
        t instanceof Node && y.current?.contains(t) || O(null)
    }, t[50] = Te, t[51] = Ee, t[52] = De, t[53] = $) : (Te = t[50], Ee = t[51], De = t[52], $ = t[53]), (0, C.jsx)(`div`, {
        ref: y,
        className: u,
        onMouseEnter: Te,
        onMouseLeave: Ee,
        onFocusCapture: De,
        onBlurCapture: $,
        children: (0, C.jsxs)(`div`, {
            className: `relative flex items-start`,
            children: [(0, C.jsx)(`div`, {
                ref: ne,
                className: `max-h-[50lvh] w-9 overflow-clip`,
                style: ve,
                children: (0, C.jsx)(`div`, {
                    ref: w,
                    className: `flex flex-col items-center gap-2 py-1`,
                    children: n.map((e, t) => {
                        let n = e.id === i;
                        return (0, C.jsx)(`button`, {
                            type: `button`,
                            onClick: () => be(e),
                            onFocus: () => Z(t),
                            className: o(`h-0.5 w-4.5 shrink-0 rounded-full transition-all`, n ? `bg-token-text-primary` : `bg-token-text-tertiary/60 hover:bg-token-text-secondary`),
                            "aria-label": e.label,
                            "data-toc-active": h(n),
                            "data-toc-item-index": t
                        }, e.id)
                    })
                })
            }), E && (0, C.jsx)(`div`, {
                "aria-hidden": !P,
                className: o(`z-50 max-w-xs rounded-2xl popover bg-token-main-surface-primary dark:bg-[#353535] shadow-long py-1.5 select-none`, `absolute top-1/2 z-10 max-w-85 min-w-60 -translate-y-1/2`, `not-motion-reduce:transition-[opacity,translate] not-motion-reduce:duration-[160ms] not-motion-reduce:ease-[cubic-bezier(0.33,1,0.68,1)]`, P && (de || v) ? `opacity-100 not-motion-reduce:translate-x-0` : l === `start` ? `opacity-0 not-motion-reduce:-translate-x-1 rtl:not-motion-reduce:translate-x-1` : `opacity-0 not-motion-reduce:translate-x-1 rtl:not-motion-reduce:-translate-x-1`, !P && `pointer-events-none`, l === `start` ? `inset-s-0` : `inset-e-0`),
                inert: !P,
                children: (0, C.jsx)(`ul`, {
                    className: `flex max-h-[50lvh] flex-col overflow-y-auto`,
                    ref: se,
                    style: ve,
                    children: n.map(e => (0, C.jsx)(`li`, {
                        children: (0, C.jsx)(s, {
                            as: `button`,
                            label: e.label,
                            onClick: () => be(e),
                            active: e.id === i,
                            fillContainer: !0,
                            className: `w-full text-start`,
                            "data-toc-active": h(e.id === i)
                        })
                    }, e.id))
                })
            })]
        })
    })
}
var re, S, C, w, ie, ae, oe, T = e((() => {
    re = v(), a(), b(), l(), x(), i(), f(), m(), y(), n(), u(), S = t(_()), C = g(), w = .5, ie = 160, ae = 250, oe = e => !Number.isFinite(e) || e <= 0 ? null : Math.floor(e * w)
}));

function se(e, t, n = {}) {
    if (!e || !t) return Promise.resolve();
    let {
        padding: r = 0,
        behavior: i = `smooth`,
        signal: a,
        idleMs: o = 120,
        timeoutMs: s = 4e3,
        resolveOnUserInterruption: c = !0
    } = n, l = t.getBoundingClientRect(), u = e.getBoundingClientRect(), d = Number.parseFloat(getComputedStyle(e).scrollMarginTop), f = u.top - l.top + t.scrollTop - r - (Number.isFinite(d) ? d : 0);
    return t.scrollTo({
        top: f,
        behavior: i
    }), i !== `smooth` && Math.abs(t.scrollTop - f) <= 1 ? Promise.resolve() : new Promise((e, n) => {
        let r = !1,
            i, l, u = [`wheel`, `touchstart`, `mousedown`, `keydown`],
            d = () => {
                i && window.clearTimeout(i), l && window.clearTimeout(l), t.removeEventListener(`scroll`, g, _), t.removeEventListener(`scrollend`, h), u.forEach(e => {
                    t.removeEventListener(e, m, v)
                }), a?.removeEventListener(`abort`, p)
            },
            f = () => {
                r || (r = !0, d(), e())
            },
            p = () => {
                d(), n(new DOMException(`Scroll aborted`, `AbortError`))
            },
            m = () => {
                c ? f() : (d(), n(Error(`Scroll interrupted by user`)))
            },
            h = () => f(),
            g = () => {
                i && window.clearTimeout(i), i = window.setTimeout(() => {
                    f()
                }, o)
            },
            _ = {
                passive: !0
            },
            v = {
                passive: !0,
                capture: !0
            };
        if (`onscrollend` in t ? t.addEventListener(`scrollend`, h, {
                once: !0
            }) : (t.addEventListener(`scroll`, g, _), g()), u.forEach(e => {
                t.addEventListener(e, m, v)
            }), a) {
            if (a.aborted) return p();
            a.addEventListener(`abort`, p, {
                once: !0
            })
        }
        l = window.setTimeout(() => {
            f()
        }, s)
    })
}
var ce = e((() => {}));
export {
    T as i, se as n, ne as r, ce as t
};
//# sourceMappingURL=296caa51-d8vsrp5a0xlqsu0d.js.map