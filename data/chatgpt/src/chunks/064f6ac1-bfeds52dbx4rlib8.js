import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    c7 as n,
    l7 as r
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as i,
    Kt as a,
    Vn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    HRt as s,
    H_t as c,
    K_t as l,
    LRt as u,
    N_t as d,
    R_t as f,
    W_t as p,
    Y_t as m,
    v_t as h
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    g,
    l as _,
    u as v,
    y
} from "./707eab0c-eqm4zmw552znkezy.js";
import {
    C as b,
    S as x,
    b as S,
    t as C,
    w,
    x as T,
    y as E
} from "./bcae0416-frx726h3ax995aos.js";
import {
    n as D,
    t as O
} from "./d4c740a3-m98a0dejurzr8grq.js";
import {
    n as k,
    t as A
} from "./b1397234-m6cujjn3ydlq1nrk.js";

function j(e, t) {
    let n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        i = Math.abs(t.right - e.x),
        a = Math.abs(t.left - e.x);
    switch (Math.min(n, r, i, a)) {
        case a:
            return `left`;
        case i:
            return `right`;
        case n:
            return `top`;
        case r:
            return `bottom`;
        default:
            throw Error(`unreachable`)
    }
}

function ee(e, t, n = 5) {
    let r = [];
    switch (t) {
        case `top`:
            r.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case `bottom`:
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case `left`:
            r.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case `right`:
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            });
            break
    }
    return r
}

function te(e) {
    let {
        top: t,
        right: n,
        bottom: r,
        left: i
    } = e;
    return [{
        x: i,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: i,
        y: r
    }]
}

function ne(e, t) {
    let {
        x: n,
        y: r
    } = e, i = !1;
    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
        let o = t[e],
            s = t[a],
            c = o.x,
            l = o.y,
            u = s.x,
            d = s.y;
        l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i)
    }
    return i
}

function M(e) {
    let t = e.slice();
    return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), N(t)
}

function N(e) {
    if (e.length <= 1) return e.slice();
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        for (; t.length >= 2;) {
            let e = t[t.length - 1],
                n = t[t.length - 2];
            if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
            else break
        }
        t.push(r)
    }
    t.pop();
    let n = [];
    for (let t = e.length - 1; t >= 0; t--) {
        let r = e[t];
        for (; n.length >= 2;) {
            let e = n[n.length - 1],
                t = n[n.length - 2];
            if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
            else break
        }
        n.push(r)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var P, F = e((() => {
        P = (e, t) => {
            let n = e.currentTarget,
                r = {
                    x: e.clientX,
                    y: e.clientY
                },
                i = ee(r, j(r, n.getBoundingClientRect())),
                a = te(t.getBoundingClientRect());
            return M([...i, ...a])
        }
    })),
    I, L, R, z = e((() => {
        I = t(o()), L = (0, I.createContext)(null), R = () => {
            let e = (0, I.use)(L);
            if (!e) throw Error(`Popover components must be wrapped in <Popover />`);
            return e
        }
    })),
    B, V, H, U, W, G, K, q = e((() => {
        r(), C(), B = t(o()), u(), _(), O(), c(), g(), h(), F(), k(), z(), V = i(), H = ({
            open: e,
            onOpenChange: t,
            showOnHover: n = !1,
            hoverOpenDelay: r = 150,
            children: i
        }) => {
            let [a, o] = (0, B.useState)(!1), [c, l] = (0, B.useState)(!1), u = (0, B.useRef)(null), d = (0, B.useRef)(null), f = (0, B.useRef)(void 0), p = (0, B.useRef)(null), m = (0, B.useRef)(!1), h = e ?? a, [g, _] = (0, B.useState)(!1);
            s(() => _(!1), g ? 500 : null);
            let v = D(t),
                y = D(e => {
                    clearTimeout(f.current), h !== e && (e || (l(!1), n && p.current && p.current.focus(), p.current = null), v.current?.(e), o(e), n && _(e))
                }),
                x = (0, B.useCallback)(e => {
                    y.current(e)
                }, [y]),
                S = (0, B.useCallback)(() => {
                    f.current = setTimeout(() => x(!0), r)
                }, [x, r]),
                C = (0, B.useCallback)(() => {
                    clearTimeout(f.current)
                }, []);
            return (0, B.useEffect)(() => () => {
                clearTimeout(f.current)
            }, []), (0, V.jsx)(L, {
                value: (0, B.useMemo)(() => ({
                    open: h,
                    setOpen: x,
                    shake: c,
                    setShake: l,
                    showOnHover: n,
                    temporarilyPreventClickToClose: g,
                    onTriggerEnter: S,
                    onTriggerLeave: C,
                    isPointerInTransitRef: m,
                    triggerRef: u,
                    contentRef: d,
                    hoverOpenFocusTarget: p
                }), [h, x, c, l, n, g, p, m, S, C]),
                children: (0, V.jsx)(b, {
                    open: h,
                    onOpenChange: x,
                    modal: !1,
                    children: i
                })
            })
        }, U = ({
            children: e,
            onPointerDown: t,
            onClick: n
        }) => {
            let {
                setOpen: r,
                showOnHover: i,
                temporarilyPreventClickToClose: a,
                onTriggerEnter: o,
                onTriggerLeave: s,
                isPointerInTransitRef: c,
                triggerRef: l,
                contentRef: u
            } = R(), d = (0, B.useRef)(!1), f = e => {
                let t = e.target instanceof Element ? e.target.closest(`a[href]`) : null;
                !(e.currentTarget.nodeName.toLocaleLowerCase() === `a` || t !== null && e.currentTarget.contains(t)) && a && (e.preventDefault(), e.stopPropagation())
            };
            return (0, V.jsx)(w, {
                asChild: !0,
                ref: l,
                onPointerDown: e => {
                    f(e), t?.(e)
                },
                onClick: e => {
                    f(e), n?.(e)
                },
                onPointerMove: i ? e => {
                    e.pointerType !== `touch` && !d.current && !c.current && (o(), d.current = !0)
                } : void 0,
                onPointerLeave: i ? () => {
                    d.current &&= (s(), !1)
                } : void 0,
                onFocus: i ? () => r(!0) : void 0,
                onBlur: i ? () => {
                    setTimeout(() => {
                        u.current?.contains(document.activeElement) || r(!1)
                    }, 50)
                } : void 0,
                children: e
            })
        }, W = ({
            children: e,
            dir: t,
            "aria-label": r,
            avoidCollisions: i,
            collisionPadding: a = 20,
            arrowPadding: o,
            sticky: s,
            hideWhenDetached: c = !0,
            width: u,
            minWidth: d,
            maxWidth: m,
            side: h,
            sideOffset: g = 8,
            align: _,
            alignOffset: v,
            translucent: y,
            className: b,
            autoFocus: x = !0,
            onCloseAutoFocus: S,
            preventCloseOnFocusOutside: C = !1
        }) => {
            let {
                showOnHover: w,
                shake: E,
                contentRef: D
            } = R();
            return (0, B.useEffect)(() => {
                let e = D.current;
                !e || !x || e?.contains(document.activeElement) || w || e.focus({
                    preventScroll: !0
                })
            }, [D, w, x]), (0, V.jsx)(T, {
                forceMount: !0,
                dir: t,
                "aria-label": r,
                ref: D,
                className: n(A.Popover, b),
                style: l({
                    "popover-width": u,
                    "popover-min-width": d,
                    "popover-max-width": m
                }),
                onCloseAutoFocus: S ?? (w ? p : void 0),
                "data-animate": E ? `shake` : void 0,
                "data-translucent": y ? `true` : void 0,
                side: h,
                sideOffset: g,
                align: _,
                alignOffset: v ?? (_ === `center` ? 0 : -5),
                avoidCollisions: i ?? !0,
                sticky: s,
                hideWhenDetached: c,
                collisionPadding: a,
                arrowPadding: o,
                onFocusOutside: C ? p : void 0,
                onOpenAutoFocus: p,
                onEscapeKeyDown: p,
                onKeyDown: e => {
                    let t = D.current;
                    if (t && e.target === t && e.key === `Tab` && e.shiftKey) {
                        e.preventDefault(), e.stopPropagation();
                        let n = f(t);
                        n[n.length - 1]?.focus()
                    }
                },
                children: e
            })
        }, G = e => {
            let {
                setOpen: t,
                triggerRef: n,
                contentRef: r,
                isPointerInTransitRef: i,
                hoverOpenFocusTarget: a
            } = R(), [o, s] = (0, B.useState)(null), c = (0, B.useCallback)(() => {
                s(null), i.current = !1
            }, [i]), l = (0, B.useCallback)((e, t) => {
                let n = P(e, t);
                s(n), i.current = !0
            }, [i]);
            return (0, B.useEffect)(() => () => c(), [c]), (0, B.useEffect)(() => {
                let e = n.current,
                    t = r.current;
                if (!e || !t) return;
                let i = e => l(e, t),
                    a = t => l(t, e);
                return e.addEventListener(`pointerleave`, i), t.addEventListener(`pointerleave`, a), () => {
                    e.removeEventListener(`pointerleave`, i), t.removeEventListener(`pointerleave`, a)
                }
            }, [r, n, l, c]), (0, B.useEffect)(() => {
                if (!o) return;
                let e = e => {
                    let i = n.current,
                        a = r.current,
                        s = e.target,
                        l = {
                            x: e.clientX,
                            y: e.clientY
                        },
                        u = i?.contains(s) || a?.contains(s),
                        d = !ne(l, o),
                        f = s.hasAttribute(`aria-haspopup`);
                    u ? c() : (d || f) && (c(), t(!1))
                };
                return document.addEventListener(`pointermove`, e), () => document.removeEventListener(`pointermove`, e)
            }, [o, t, c, n, r]), (0, B.useEffect)(() => {
                let e = t => {
                    if (r.current && t.key === `Tab` && !t.shiftKey) {
                        let [i] = f(r.current);
                        if (i) {
                            t.preventDefault();
                            let r = document.activeElement,
                                o = n.current;
                            a.current = r instanceof HTMLElement && o?.contains(r) ? r : o && f(o)[0] || o, i.focus(), document.removeEventListener(`keydown`, e)
                        }
                    }
                };
                return document.addEventListener(`keydown`, e), () => {
                    document.removeEventListener(`keydown`, e)
                }
            }, [r, a, n]), (0, V.jsx)(W, {
                ...e
            })
        }, K = e => {
            let {
                open: t,
                showOnHover: n,
                setOpen: r
            } = R(), i = y();
            return v(t, () => {
                r(!1)
            }), (0, V.jsx)(x, {
                forceMount: !0,
                container: i,
                children: (0, V.jsx)(d, {
                    enterDuration: 600,
                    exitDuration: 300,
                    className: A.Transition,
                    children: t && (n ? (0, V.jsx)(G, {
                        ...e
                    }, `popover-hover`) : (0, V.jsx)(W, {
                        ...e
                    }, `popover`))
                })
            })
        }, H.Anchor = E, H.Trigger = U, H.Content = K, H.Arrow = S
    })),
    J, Y, X, Z, Q, $ = e((() => {
        J = t(o()), Y = t(a()), c(), z(), X = () => {
            let {
                setOpen: e
            } = R();
            return (0, J.useCallback)(() => e(!1), [e])
        }, Z = () => {
            let {
                setShake: e
            } = R();
            return (0, J.useCallback)(() => {
                (0, Y.flushSync)(() => {
                    e(!1)
                }), m(() => e(!0))
            }, [e])
        }, Q = () => {
            let e = Z();
            return {
                close: X(),
                shake: e
            }
        }
    })),
    re = e((() => {
        q(), $()
    }));
export {
    H as a, Q as i, $ as n, q as o, X as r, re as t
};
//# sourceMappingURL=064f6ac1-bfeds52dbx4rlib8.js.map