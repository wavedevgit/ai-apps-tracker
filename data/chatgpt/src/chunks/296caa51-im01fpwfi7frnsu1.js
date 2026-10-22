import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    HN as r,
    J5 as i,
    UN as a,
    aW as o,
    bx as s,
    fx as c,
    gq as l,
    l7 as u,
    rE as d,
    rW as f,
    rq as p,
    tE as m,
    u7 as h
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as g,
    Vn as ee,
    wn as _
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    OUn as v,
    Txn as te,
    wxn as y
} from "./conversation-small-dwpaie1hln28efxb.js";

function ne({
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
var b = e((() => {}));

function re(e) {
    "use forget";
    let t = (0, ie.c)(54),
        {
            items: n,
            activeItemId: r,
            onSelect: o,
            menuAnchor: s,
            className: d,
            maxHeightContainerRef: p,
            onOpenChange: h,
            closeOnSelect: g
        } = e,
        ee = g !== void 0 && g,
        _ = i(l),
        v = (0, x.useRef)(null),
        y = (0, x.useRef)(null),
        b = (0, x.useRef)(null),
        re = (0, x.useRef)(null),
        C = (0, x.useRef)(null),
        w = (0, x.useRef)(0),
        ce = (0, x.useRef)(null),
        [le, ue] = (0, x.useState)(!1),
        [T, de] = (0, x.useState)(!1),
        [fe, pe] = (0, x.useState)(!1),
        [E, D] = (0, x.useState)(null),
        [O, me] = (0, x.useState)(null),
        [k, he] = (0, x.useState)(null),
        [A, ge] = (0, x.useState)(null),
        _e = n[0]?.id,
        j;
    t[0] === r ? j = t[1] : (j = e => e.id === r, t[0] = r, t[1] = j);
    let M = n.findIndex(j),
        ve = E?.isConnected ?? !1,
        N = n.length > 0 && (le || ve),
        P = N || T,
        F;
    t[2] === O ? F = t[3] : (F = O == null ? void 0 : {
        maxHeight: O
    }, t[2] = O, t[3] = F);
    let ye = F,
        be = () => {
            y.current &&= (clearTimeout(y.current), null), ue(!1), D(null);
            let e = document.activeElement;
            e instanceof HTMLElement && v.current?.contains(e) && e.blur()
        },
        xe = e => {
            o(e), ee && be()
        },
        I, L;
    t[4] !== h || t[5] !== P ? (I = () => {
        h?.(P)
    }, L = [h, P], t[4] = h, t[5] = P, t[6] = I, t[7] = L) : (I = t[6], L = t[7]), a(I, L);
    let R, z;
    t[8] !== T || t[9] !== N || t[10] !== _ ? (R = () => {
        if (N) {
            b.current &&= (clearTimeout(b.current), null), de(!0), _ && pe(!0);
            return
        }
        if (T) {
            if (pe(!1), _) {
                de(!1);
                return
            }
            return b.current = setTimeout(() => {
                b.current = null, de(!1)
            }, ae), () => {
                b.current &&= (clearTimeout(b.current), null)
            }
        }
    }, z = [T, N, _], t[8] = T, t[9] = N, t[10] = _, t[11] = R, t[12] = z) : (R = t[11], z = t[12]), a(R, z);
    let B, V;
    t[13] !== T || t[14] !== N || t[15] !== _ ? (B = () => {
        if (!N || !T || _) return;
        let e = null,
            t = window.requestAnimationFrame(() => {
                e = window.requestAnimationFrame(() => {
                    pe(!0)
                })
            });
        return () => {
            window.cancelAnimationFrame(t), e != null && window.cancelAnimationFrame(e)
        }
    }, V = [T, N, _], t[13] = T, t[14] = N, t[15] = _, t[16] = B, t[17] = V) : (B = t[16], V = t[17]), (0, x.useEffect)(B, V);
    let H, U;
    t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (H = () => () => {
        y.current && clearTimeout(y.current), b.current && clearTimeout(b.current)
    }, U = [], t[18] = H, t[19] = U) : (H = t[18], U = t[19]), (0, x.useEffect)(H, U);
    let W, G;
    t[20] === p ? (W = t[21], G = t[22]) : (W = () => {
        let e = p?.current;
        if (e instanceof HTMLElement) return f({
            axis: `height`,
            target: e,
            onChange(e) {
                let {
                    height: t
                } = e;
                (0, x.startTransition)(() => {
                    me(se(t))
                })
            }
        })
    }, G = [p], t[20] = p, t[21] = W, t[22] = G), (0, x.useEffect)(W, G);
    let K, q;
    t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (K = () => f({
        axis: `height`,
        target: re.current,
        onChange(e, t) {
            let n = t.target;
            n instanceof HTMLElement && (0, x.startTransition)(() => {
                he(n.clientHeight)
            })
        }
    }), q = [], t[23] = K, t[24] = q) : (K = t[23], q = t[24]), (0, x.useEffect)(K, q);
    let J;
    t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (J = () => {
        let e = C.current?.firstElementChild;
        if (e instanceof HTMLElement) return f({
            axis: `height`,
            target: e,
            onChange(e) {
                let {
                    height: t
                } = e;
                (0, x.startTransition)(() => {
                    ge(t > 0 ? t : null)
                })
            }
        })
    }, t[25] = J) : J = t[25];
    let Y;
    t[26] === _e ? Y = t[27] : (Y = [_e], t[26] = _e, t[27] = Y), (0, x.useEffect)(J, Y);
    let X;
    t[28] !== n.length || t[29] !== A || t[30] !== k ? (X = e => {
        let t = C.current;
        if (!t || k == null || A == null) return;
        let r = ne({
            itemCount: n.length,
            itemHeight: A,
            itemIndex: e,
            scrollTop: w.current,
            viewportHeight: k
        });
        r != null && (w.current = r, t.style.transform = `translate3d(0, -${r}px, 0)`)
    }, t[28] = n.length, t[29] = A, t[30] = k, t[31] = X) : X = t[31];
    let Z = X,
        Q;
    t[32] !== M || t[33] !== E || t[34] !== n.length || t[35] !== Z ? (Q = () => {
        let e = E != null && v.current?.contains(E);
        E != null && !e && D(null);
        let t = E?.parentElement === C.current ? Number(E.dataset.tocItemIndex) : -1;
        t >= 0 ? Z(t) : M >= 0 && !e ? Z(M) : M < 0 && (!e || n.length === 0) && (w.current = 0, C.current?.style.removeProperty(`transform`))
    }, t[32] = M, t[33] = E, t[34] = n.length, t[35] = Z, t[36] = Q) : Q = t[36];
    let Se;
    t[37] !== M || t[38] !== E || t[39] !== n || t[40] !== Z ? (Se = [M, E, n, Z], t[37] = M, t[38] = E, t[39] = n, t[40] = Z, t[41] = Se) : Se = t[41], (0, x.useEffect)(Q, Se);
    let Ce;
    t[42] !== T || t[43] !== N ? (Ce = () => {
        if (!N || !T) return;
        let e = ce.current?.querySelector(`[data-toc-active]`);
        e && te({
            node: e,
            axis: `y`,
            options: {
                block: `nearest`
            }
        })
    }, t[42] = T, t[43] = N, t[44] = Ce) : Ce = t[44];
    let we;
    t[45] !== r || t[46] !== M || t[47] !== T || t[48] !== N ? (we = [r, M, T, N], t[45] = r, t[46] = M, t[47] = T, t[48] = N, t[49] = we) : we = t[49], (0, x.useEffect)(Ce, we);
    let Te, Ee, De, $;
    return t[50] === Symbol.for(`react.memo_cache_sentinel`) ? (Te = () => {
        y.current &&= (clearTimeout(y.current), null), ue(!0)
    }, Ee = () => {
        y.current = setTimeout(() => {
            y.current = null, ue(!1)
        }, oe)
    }, De = e => {
        y.current &&= (clearTimeout(y.current), null), D(e.target instanceof HTMLElement && e.target.matches(`:focus-visible`) ? e.target : null)
    }, $ = e => {
        let t = e.relatedTarget;
        t instanceof Node && v.current?.contains(t) || D(null)
    }, t[50] = Te, t[51] = Ee, t[52] = De, t[53] = $) : (Te = t[50], Ee = t[51], De = t[52], $ = t[53]), (0, S.jsx)(`div`, {
        ref: v,
        className: d,
        onMouseEnter: Te,
        onMouseLeave: Ee,
        onFocusCapture: De,
        onBlurCapture: $,
        children: (0, S.jsxs)(`div`, {
            className: `relative flex items-start`,
            children: [(0, S.jsx)(`div`, {
                ref: re,
                className: `max-h-[50lvh] w-9 overflow-clip`,
                style: ye,
                children: (0, S.jsx)(`div`, {
                    ref: C,
                    className: `flex flex-col items-center gap-2 py-1`,
                    children: n.map((e, t) => {
                        let n = e.id === r;
                        return (0, S.jsx)(`button`, {
                            type: `button`,
                            onClick: () => xe(e),
                            onFocus: () => Z(t),
                            className: u(`h-0.5 w-4.5 shrink-0 rounded-full transition-all`, n ? `bg-token-text-primary` : `bg-token-text-tertiary/60 hover:bg-token-text-secondary`),
                            "aria-label": e.label,
                            "data-toc-active": m(n),
                            "data-toc-item-index": t
                        }, e.id)
                    })
                })
            }), T && (0, S.jsx)(`div`, {
                "aria-hidden": !N,
                className: u(`z-50 max-w-xs rounded-2xl popover bg-token-main-surface-primary dark:bg-[#353535] shadow-long py-1.5 select-none`, `absolute top-1/2 z-10 max-w-85 min-w-60 -translate-y-1/2`, `not-motion-reduce:transition-[opacity,translate] not-motion-reduce:duration-[160ms] not-motion-reduce:ease-[cubic-bezier(0.33,1,0.68,1)]`, N && (fe || _) ? `opacity-100 not-motion-reduce:translate-x-0` : s === `start` ? `opacity-0 not-motion-reduce:-translate-x-1 rtl:not-motion-reduce:translate-x-1` : `opacity-0 not-motion-reduce:translate-x-1 rtl:not-motion-reduce:-translate-x-1`, !N && `pointer-events-none`, s === `start` ? `inset-s-0` : `inset-e-0`),
                inert: !N,
                children: (0, S.jsx)(`ul`, {
                    className: `flex max-h-[50lvh] flex-col overflow-y-auto`,
                    ref: ce,
                    style: ye,
                    children: n.map(e => (0, S.jsx)(`li`, {
                        children: (0, S.jsx)(c, {
                            as: `button`,
                            label: e.label,
                            onClick: () => xe(e),
                            active: e.id === r,
                            fillContainer: !0,
                            className: `w-full text-start`,
                            "data-toc-active": m(e.id === r)
                        })
                    }, e.id))
                })
            })]
        })
    })
}
var ie, x, S, C, ae, oe, se, w = e((() => {
    ie = _(), s(), v(), n(), b(), o(), d(), p(), y(), r(), h(), x = t(ee()), S = g(), C = .5, ae = 160, oe = 250, se = e => !Number.isFinite(e) || e <= 0 ? null : Math.floor(e * C)
}));

function ce(e, t, n = {}) {
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
                i && window.clearTimeout(i), l && window.clearTimeout(l), t.removeEventListener(`scroll`, g, ee), t.removeEventListener(`scrollend`, h), u.forEach(e => {
                    t.removeEventListener(e, m, _)
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
            ee = {
                passive: !0
            },
            _ = {
                passive: !0,
                capture: !0
            };
        if (`onscrollend` in t ? t.addEventListener(`scrollend`, h, {
                once: !0
            }) : (t.addEventListener(`scroll`, g, ee), g()), u.forEach(e => {
                t.addEventListener(e, m, _)
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
var le = e((() => {}));
export {
    w as i, ce as n, re as r, le as t
};
//# sourceMappingURL=296caa51-im01fpwfi7frnsu1.js.map