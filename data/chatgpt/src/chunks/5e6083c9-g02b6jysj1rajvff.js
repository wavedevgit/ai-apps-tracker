import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cat as r,
    FT as i,
    GT as a,
    JT as o,
    KT as s,
    Ly as c,
    MT as l,
    NT as u,
    Ry as d,
    Tat as f,
    UT as p,
    WT as m,
    XT as h,
    YT as g,
    bT as _,
    c7 as v,
    jT as y,
    l7 as b,
    qT as x,
    xT as S
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as C,
    In as w,
    Nn as T,
    Rn as E,
    Vn as D,
    wn as O,
    zn as ee
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bst as k,
    Dmn as A,
    Omn as te,
    Vst as j
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Ov as M,
    kv as N
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    hC as P
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    h_ as F,
    m_ as I
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    n as ne,
    t as L
} from "./d524c1a0-gk811o5r27pg6gl8.js";
import {
    n as R,
    t as z
} from "./c51faa14-ovtqbvfxvysf50nx.js";
import {
    t as B
} from "./fa240cb5-0hqd4dje2l868xwd.js";
import {
    n as re,
    t as ie
} from "./1f6fa6f6-bdy374qgy05h85eg.js";

function ae() {
    return (0, se.useContext)(V)
}

function oe({
    value: e,
    children: t
}) {
    return se.createElement(V.Provider, {
        value: e
    }, t)
}
var se, ce, V, le = e((() => {
    se = n(D()), ce = {
        layout: `stacked`,
        showDialCodePrefix: !0,
        rounded: `full`,
        densePadding: !1,
        triggerShowOnlyDialCode: !1,
        fullWidthJustifyDialCode: !0,
        placeholderTextSize: `base`,
        dropdownPanelWidthPx: void 0,
        phoneInputStyle: `split`
    }, V = (0, se.createContext)(ce)
}));

function ue(e, t) {
    return q.useReducer((e, n) => t[e][n] ?? e, e)
}

function H(e) {
    return e ? parseInt(e, 10) : 0
}

function de(e, t) {
    let n = e / t;
    return isNaN(n) ? 0 : n
}

function U(e) {
    let t = de(e.viewport, e.content),
        n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
        r = (e.scrollbar.size - n) * t;
    return Math.max(r, 18)
}

function fe(e, t, n, r = `ltr`) {
    let i = U(n),
        a = i / 2,
        o = t || a,
        s = i - o,
        c = n.scrollbar.paddingStart + o,
        l = n.scrollbar.size - n.scrollbar.paddingEnd - s,
        u = n.content - n.viewport,
        d = r === `ltr` ? [0, u] : [u * -1, 0];
    return me([c, l], d)(e)
}

function pe(e, t, n = `ltr`) {
    let r = U(t),
        i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
        a = t.scrollbar.size - i,
        o = t.content - t.viewport,
        s = a - r,
        c = A(e, n === `ltr` ? [0, o] : [o * -1, 0]);
    return me([0, o], [0, s])(c)
}

function me(e, t) {
    return n => {
        if (e[0] === e[1] || t[0] === t[1]) return t[0];
        let r = (t[1] - t[0]) / (e[1] - e[0]);
        return t[0] + r * (n - e[0])
    }
}

function he(e, t) {
    return e > 0 && e < t
}

function W(e, t) {
    let n = l(e),
        r = K.useRef(0);
    return K.useEffect(() => () => window.clearTimeout(r.current), []), K.useCallback(() => {
        window.clearTimeout(r.current), r.current = window.setTimeout(n, t)
    }, [n, t])
}

function G(e, t) {
    let n = l(t);
    m(() => {
        let t = 0;
        if (e) {
            let r = new ResizeObserver(() => {
                cancelAnimationFrame(t), t = window.requestAnimationFrame(n)
            });
            return r.observe(e), () => {
                window.cancelAnimationFrame(t), r.unobserve(e)
            }
        }
    }, [e, n])
}
var K, q, J, Y, ge, _e, ve, X, ye, be, xe, Se, Z, Ce, we, Te, Ee, De, Oe, ke, Ae, je, Me, Ne, Pe, Fe, Ie, Le, Re, ze, Be, Ve, He, Ue, We = e((() => {
    K = n(D(), 1), i(), S(), s(), x(), y(), c(), p(), te(), h(), q = n(D(), 1), J = C(), Y = `ScrollArea`, [ge, _e] = a(Y), [ve, X] = ge(Y), ye = K.forwardRef((e, t) => {
        let {
            __scopeScrollArea: n,
            type: r = `hover`,
            dir: i,
            scrollHideDelay: a = 600,
            ...s
        } = e, [c, l] = K.useState(null), [f, p] = K.useState(null), [m, h] = K.useState(null), [g, _] = K.useState(null), [v, y] = K.useState(null), [b, x] = K.useState(0), [S, C] = K.useState(0), [w, T] = K.useState(!1), [E, D] = K.useState(!1), O = o(t, l), ee = d(i);
        return (0, J.jsx)(ve, {
            scope: n,
            type: r,
            dir: ee,
            scrollHideDelay: a,
            scrollArea: c,
            viewport: f,
            onViewportChange: p,
            content: m,
            onContentChange: h,
            scrollbarX: g,
            onScrollbarXChange: _,
            scrollbarXEnabled: w,
            onScrollbarXEnabledChange: T,
            scrollbarY: v,
            onScrollbarYChange: y,
            scrollbarYEnabled: E,
            onScrollbarYEnabledChange: D,
            onCornerWidthChange: x,
            onCornerHeightChange: C,
            children: (0, J.jsx)(u.div, {
                dir: ee,
                ...s,
                ref: O,
                style: {
                    position: `relative`,
                    "--radix-scroll-area-corner-width": b + `px`,
                    "--radix-scroll-area-corner-height": S + `px`,
                    ...e.style
                }
            })
        })
    }), ye.displayName = Y, be = `ScrollAreaViewport`, xe = K.forwardRef((e, t) => {
        let {
            __scopeScrollArea: n,
            children: r,
            nonce: i,
            ...a
        } = e, s = X(be, n), c = o(t, K.useRef(null), s.onViewportChange);
        return (0, J.jsxs)(J.Fragment, {
            children: [(0, J.jsx)(Se, {
                nonce: i
            }), (0, J.jsx)(u.div, {
                "data-radix-scroll-area-viewport": ``,
                ...a,
                ref: c,
                style: {
                    overflowX: s.scrollbarXEnabled ? `scroll` : `hidden`,
                    overflowY: s.scrollbarYEnabled ? `scroll` : `hidden`,
                    ...e.style
                },
                children: (0, J.jsx)(`div`, {
                    ref: s.onContentChange,
                    style: {
                        minWidth: `100%`,
                        display: `table`
                    },
                    children: r
                })
            })]
        })
    }), xe.displayName = be, Se = K.memo(({
        nonce: e
    }) => (0, J.jsx)(`style`, {
        dangerouslySetInnerHTML: {
            __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`
        },
        nonce: e
    }), (e, t) => e.nonce === t.nonce), Z = `ScrollAreaScrollbar`, Ce = K.forwardRef((e, t) => {
        let {
            forceMount: n,
            ...r
        } = e, i = X(Z, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: o
        } = i, s = e.orientation === `horizontal`;
        return K.useEffect(() => (s ? a(!0) : o(!0), () => {
            s ? a(!1) : o(!1)
        }), [s, a, o]), i.type === `hover` ? (0, J.jsx)(we, {
            ...r,
            ref: t,
            forceMount: n
        }) : i.type === `scroll` ? (0, J.jsx)(Te, {
            ...r,
            ref: t,
            forceMount: n
        }) : i.type === `auto` ? (0, J.jsx)(Ee, {
            ...r,
            ref: t,
            forceMount: n
        }) : i.type === `always` ? (0, J.jsx)(De, {
            ...r,
            ref: t,
            "data-state": `visible`
        }) : null
    }), Ce.displayName = Z, we = K.forwardRef((e, t) => {
        let {
            forceMount: n,
            ...r
        } = e, i = X(Z, e.__scopeScrollArea), [a, o] = K.useState(!1);
        return K.useEffect(() => {
            let e = i.scrollArea,
                t = 0;
            if (e) {
                let n = () => {
                        window.clearTimeout(t), o(!0)
                    },
                    r = () => {
                        t = window.setTimeout(() => o(!1), i.scrollHideDelay)
                    };
                return e.addEventListener(`pointerenter`, n), e.addEventListener(`pointerleave`, r), () => {
                    window.clearTimeout(t), e.removeEventListener(`pointerenter`, n), e.removeEventListener(`pointerleave`, r)
                }
            }
        }, [i.scrollArea, i.scrollHideDelay]), (0, J.jsx)(_, {
            present: n || a,
            children: (0, J.jsx)(Ee, {
                "data-state": a ? `visible` : `hidden`,
                ...r,
                ref: t
            })
        })
    }), Te = K.forwardRef((e, t) => {
        let {
            forceMount: n,
            ...r
        } = e, i = X(Z, e.__scopeScrollArea), a = e.orientation === `horizontal`, o = W(() => c(`SCROLL_END`), 100), [s, c] = ue(`hidden`, {
            hidden: {
                SCROLL: `scrolling`
            },
            scrolling: {
                SCROLL_END: `idle`,
                POINTER_ENTER: `interacting`
            },
            interacting: {
                SCROLL: `interacting`,
                POINTER_LEAVE: `idle`
            },
            idle: {
                HIDE: `hidden`,
                SCROLL: `scrolling`,
                POINTER_ENTER: `interacting`
            }
        });
        return K.useEffect(() => {
            if (s === `idle`) {
                let e = window.setTimeout(() => c(`HIDE`), i.scrollHideDelay);
                return () => window.clearTimeout(e)
            }
        }, [s, i.scrollHideDelay, c]), K.useEffect(() => {
            let e = i.viewport,
                t = a ? `scrollLeft` : `scrollTop`;
            if (e) {
                let n = e[t],
                    r = () => {
                        let r = e[t];
                        n !== r && (c(`SCROLL`), o()), n = r
                    };
                return e.addEventListener(`scroll`, r), () => e.removeEventListener(`scroll`, r)
            }
        }, [i.viewport, a, c, o]), (0, J.jsx)(_, {
            present: n || s !== `hidden`,
            children: (0, J.jsx)(De, {
                "data-state": s === `hidden` ? `hidden` : `visible`,
                ...r,
                ref: t,
                onPointerEnter: g(e.onPointerEnter, () => c(`POINTER_ENTER`)),
                onPointerLeave: g(e.onPointerLeave, () => c(`POINTER_LEAVE`))
            })
        })
    }), Ee = K.forwardRef((e, t) => {
        let n = X(Z, e.__scopeScrollArea),
            {
                forceMount: r,
                ...i
            } = e,
            [a, o] = K.useState(!1),
            s = e.orientation === `horizontal`,
            c = W(() => {
                if (n.viewport) {
                    let e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                        t = n.viewport.offsetHeight < n.viewport.scrollHeight;
                    o(s ? e : t)
                }
            }, 10);
        return G(n.viewport, c), G(n.content, c), (0, J.jsx)(_, {
            present: r || a,
            children: (0, J.jsx)(De, {
                "data-state": a ? `visible` : `hidden`,
                ...i,
                ref: t
            })
        })
    }), De = K.forwardRef((e, t) => {
        let {
            orientation: n = `vertical`,
            ...r
        } = e, i = X(Z, e.__scopeScrollArea), a = K.useRef(null), o = K.useRef(0), [s, c] = K.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
                size: 0,
                paddingStart: 0,
                paddingEnd: 0
            }
        }), l = de(s.viewport, s.content), u = {
            ...r,
            sizes: s,
            onSizesChange: c,
            hasThumb: l > 0 && l < 1,
            onThumbChange: e => a.current = e,
            onThumbPointerUp: () => o.current = 0,
            onThumbPointerDown: e => o.current = e
        };

        function d(e, t) {
            return fe(e, o.current, s, t)
        }
        return n === `horizontal` ? (0, J.jsx)(Oe, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
                if (i.viewport && a.current) {
                    let e = i.viewport.scrollLeft,
                        t = pe(e, s, i.dir);
                    a.current.style.transform = `translate3d(${t}px, 0, 0)`
                }
            },
            onWheelScroll: e => {
                i.viewport && (i.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
                i.viewport && (i.viewport.scrollLeft = d(e, i.dir))
            }
        }) : n === `vertical` ? (0, J.jsx)(ke, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
                if (i.viewport && a.current) {
                    let e = i.viewport.scrollTop,
                        t = pe(e, s);
                    a.current.style.transform = `translate3d(0, ${t}px, 0)`
                }
            },
            onWheelScroll: e => {
                i.viewport && (i.viewport.scrollTop = e)
            },
            onDragScroll: e => {
                i.viewport && (i.viewport.scrollTop = d(e))
            }
        }) : null
    }), Oe = K.forwardRef((e, t) => {
        let {
            sizes: n,
            onSizesChange: r,
            ...i
        } = e, a = X(Z, e.__scopeScrollArea), [s, c] = K.useState(), l = K.useRef(null), u = o(t, l, a.onScrollbarXChange);
        return K.useEffect(() => {
            l.current && c(getComputedStyle(l.current))
        }, [l]), (0, J.jsx)(Me, {
            "data-orientation": `horizontal`,
            ...i,
            ref: u,
            sizes: n,
            style: {
                bottom: 0,
                left: a.dir === `rtl` ? `var(--radix-scroll-area-corner-width)` : 0,
                right: a.dir === `ltr` ? `var(--radix-scroll-area-corner-width)` : 0,
                "--radix-scroll-area-thumb-width": U(n) + `px`,
                ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, n) => {
                if (a.viewport) {
                    let r = a.viewport.scrollLeft + t.deltaX;
                    e.onWheelScroll(r), he(r, n) && t.preventDefault()
                }
            },
            onResize: () => {
                l.current && a.viewport && s && r({
                    content: a.viewport.scrollWidth,
                    viewport: a.viewport.offsetWidth,
                    scrollbar: {
                        size: l.current.clientWidth,
                        paddingStart: H(s.paddingLeft),
                        paddingEnd: H(s.paddingRight)
                    }
                })
            }
        })
    }), ke = K.forwardRef((e, t) => {
        let {
            sizes: n,
            onSizesChange: r,
            ...i
        } = e, a = X(Z, e.__scopeScrollArea), [s, c] = K.useState(), l = K.useRef(null), u = o(t, l, a.onScrollbarYChange);
        return K.useEffect(() => {
            l.current && c(getComputedStyle(l.current))
        }, [l]), (0, J.jsx)(Me, {
            "data-orientation": `vertical`,
            ...i,
            ref: u,
            sizes: n,
            style: {
                top: 0,
                right: a.dir === `ltr` ? 0 : void 0,
                left: a.dir === `rtl` ? 0 : void 0,
                bottom: `var(--radix-scroll-area-corner-height)`,
                "--radix-scroll-area-thumb-height": U(n) + `px`,
                ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, n) => {
                if (a.viewport) {
                    let r = a.viewport.scrollTop + t.deltaY;
                    e.onWheelScroll(r), he(r, n) && t.preventDefault()
                }
            },
            onResize: () => {
                l.current && a.viewport && s && r({
                    content: a.viewport.scrollHeight,
                    viewport: a.viewport.offsetHeight,
                    scrollbar: {
                        size: l.current.clientHeight,
                        paddingStart: H(s.paddingTop),
                        paddingEnd: H(s.paddingBottom)
                    }
                })
            }
        })
    }), [Ae, je] = ge(Z), Me = K.forwardRef((e, t) => {
        let {
            __scopeScrollArea: n,
            sizes: r,
            hasThumb: i,
            onThumbChange: a,
            onThumbPointerUp: s,
            onThumbPointerDown: c,
            onThumbPositionChange: d,
            onDragScroll: f,
            onWheelScroll: p,
            onResize: m,
            ...h
        } = e, _ = X(Z, n), [v, y] = K.useState(null), b = o(t, y), x = K.useRef(null), S = K.useRef(``), C = _.viewport, w = r.content - r.viewport, T = l(p), E = l(d), D = W(m, 10);

        function O(e) {
            if (x.current) {
                let t = e.clientX - x.current.left,
                    n = e.clientY - x.current.top;
                f({
                    x: t,
                    y: n
                })
            }
        }
        return K.useEffect(() => {
            let e = e => {
                let t = e.target;
                v?.contains(t) && T(e, w)
            };
            return document.addEventListener(`wheel`, e, {
                passive: !1
            }), () => document.removeEventListener(`wheel`, e, {
                passive: !1
            })
        }, [C, v, w, T]), K.useEffect(E, [r, E]), G(v, D), G(_.content, D), (0, J.jsx)(Ae, {
            scope: n,
            scrollbar: v,
            hasThumb: i,
            onThumbChange: l(a),
            onThumbPointerUp: l(s),
            onThumbPositionChange: E,
            onThumbPointerDown: l(c),
            children: (0, J.jsx)(u.div, {
                ...h,
                ref: b,
                style: {
                    position: `absolute`,
                    ...h.style
                },
                onPointerDown: g(e.onPointerDown, e => {
                    e.button === 0 && (e.target.setPointerCapture(e.pointerId), x.current = v.getBoundingClientRect(), S.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = `none`, _.viewport && (_.viewport.style.scrollBehavior = `auto`), O(e))
                }),
                onPointerMove: g(e.onPointerMove, O),
                onPointerUp: g(e.onPointerUp, e => {
                    let t = e.target;
                    t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = S.current, _.viewport && (_.viewport.style.scrollBehavior = ``), x.current = null
                })
            })
        })
    }), Ne = `ScrollAreaThumb`, Pe = K.forwardRef((e, t) => {
        let {
            forceMount: n,
            ...r
        } = e, i = je(Ne, e.__scopeScrollArea);
        return (0, J.jsx)(_, {
            present: n || i.hasThumb,
            children: (0, J.jsx)(Fe, {
                ref: t,
                ...r
            })
        })
    }), Fe = K.forwardRef((e, t) => {
        let {
            __scopeScrollArea: n,
            style: r,
            ...i
        } = e, a = X(Ne, n), s = je(Ne, n), {
            onThumbPositionChange: c
        } = s, l = o(t, s.onThumbChange), d = K.useRef(void 0), f = W(() => {
            d.current &&= (d.current(), void 0)
        }, 100);
        return K.useEffect(() => {
            let e = a.viewport;
            if (e) {
                let t = () => {
                    if (f(), !d.current) {
                        let t = ze(e, c);
                        d.current = t, c()
                    }
                };
                return c(), e.addEventListener(`scroll`, t), () => e.removeEventListener(`scroll`, t)
            }
        }, [a.viewport, f, c]), (0, J.jsx)(u.div, {
            "data-state": s.hasThumb ? `visible` : `hidden`,
            ...i,
            ref: l,
            style: {
                width: `var(--radix-scroll-area-thumb-width)`,
                height: `var(--radix-scroll-area-thumb-height)`,
                ...r
            },
            onPointerDownCapture: g(e.onPointerDownCapture, e => {
                let t = e.target.getBoundingClientRect(),
                    n = e.clientX - t.left,
                    r = e.clientY - t.top;
                s.onThumbPointerDown({
                    x: n,
                    y: r
                })
            }),
            onPointerUp: g(e.onPointerUp, s.onThumbPointerUp)
        })
    }), Pe.displayName = Ne, Ie = `ScrollAreaCorner`, Le = K.forwardRef((e, t) => {
        let n = X(Ie, e.__scopeScrollArea),
            r = !!(n.scrollbarX && n.scrollbarY);
        return n.type !== `scroll` && r ? (0, J.jsx)(Re, {
            ...e,
            ref: t
        }) : null
    }), Le.displayName = Ie, Re = K.forwardRef((e, t) => {
        let {
            __scopeScrollArea: n,
            ...r
        } = e, i = X(Ie, n), [a, o] = K.useState(0), [s, c] = K.useState(0), l = !!(a && s), {
            onCornerWidthChange: d,
            onCornerHeightChange: f
        } = i;
        return G(i.scrollbarX, () => {
            let e = i.scrollbarX?.offsetHeight || 0;
            i.onCornerHeightChange(e), c(e)
        }), G(i.scrollbarY, () => {
            let e = i.scrollbarY?.offsetWidth || 0;
            i.onCornerWidthChange(e), o(e)
        }), K.useEffect(() => () => {
            d(0), f(0)
        }, [d, f]), l ? (0, J.jsx)(u.div, {
            ...r,
            ref: t,
            style: {
                width: a,
                height: s,
                position: `absolute`,
                right: i.dir === `ltr` ? 0 : void 0,
                left: i.dir === `rtl` ? 0 : void 0,
                bottom: 0,
                ...e.style
            }
        }) : null
    }), ze = (e, t = () => {}) => {
        let n = {
                left: e.scrollLeft,
                top: e.scrollTop
            },
            r = 0;
        return (function i() {
            let a = {
                    left: e.scrollLeft,
                    top: e.scrollTop
                },
                o = n.left !== a.left,
                s = n.top !== a.top;
            (o || s) && t(), n = a, r = window.requestAnimationFrame(i)
        })(), () => window.cancelAnimationFrame(r)
    }, Be = ye, Ve = xe, He = Ce, Ue = Pe
}));

function Ge(e) {
    return e.label && e.value
}

function Ke(e) {
    return {
        value: e.value,
        countryName: e.label,
        countryCallingCode: ne(e.value),
        flagUrl: Xe.replace(`{XX}`, String(e.value))
    }
}

function qe(e) {
    return (0, Q.jsx)(`bdi`, {
        dir: `ltr`,
        children: e
    })
}

function Je(e) {
    return (0, Q.jsx)(I.Item, {
        value: e.value,
        className: `[background-size:24px_16px] [background-position:theme(spacing.3)_50%] bg-no-repeat ps-12 rtl:[background-position:right_theme(spacing.3)_center]`,
        style: {
            backgroundImage: `url(${e.flagUrl})`
        },
        children: (0, Q.jsx)(T, {
            id: `phoneNumberInput.formattedCountryCodeOption`,
            defaultMessage: `{countryName} <countryCallingCodeEl>(+{countryCallingCode})</countryCallingCodeEl>`,
            values: {
                countryName: e.countryName,
                countryCallingCode: e.countryCallingCode,
                countryCallingCodeEl: qe
            }
        })
    }, e.value)
}
var Ye, Q, Xe, Ze, Qe, $e = e((() => {
        Ye = O(), F(), We(), b(), L(), E(), le(), Q = C(), Xe = `/cdn/assets/flags/3x2/{XX}.svg`, Ze = e => {
            "use forget";
            let t = (0, Ye.c)(70),
                {
                    options: n,
                    onChange: r,
                    value: i,
                    disabled: a,
                    controlHeightClassName: o,
                    error: s,
                    addInternationalOption: c
                } = e,
                l = ee(),
                u = ae(),
                d;
            t[0] === n ? d = t[1] : (d = n.filter(Ge).map(Ke), t[0] = n, t[1] = d);
            let f = d,
                p, m, h, g, _, y, b, x, S, C;
            if (t[2] !== c || t[3] !== u.densePadding || t[4] !== u.fullWidthJustifyDialCode || t[5] !== u.layout || t[6] !== u.placeholderTextSize || t[7] !== u.rounded || t[8] !== o || t[9] !== a || t[10] !== s || t[11] !== r || t[12] !== f || t[13] !== i) {
                let e = {
                        full: `rounded-full`,
                        lg: `rounded-lg`,
                        md: `rounded-md`
                    },
                    n;
                t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (n = {
                    sm: `text-sm!`,
                    base: `text-base!`
                }, t[24] = n) : n = t[24], _ = n[u.placeholderTextSize];
                let l = e[u.rounded],
                    d = u.layout === `inline` ? `w-auto min-w-[72px]` : `w-full`;
                g = u.densePadding ? `py-2` : o ?? `h-13`;
                let w = u.densePadding ? `px-2` : `px-4`;
                h = u.fullWidthJustifyDialCode ? `w-full` : void 0, C = `relative`, m = I.Root, b = i ?? (c ? `international` : void 0), t[25] !== c || t[26] !== r || t[27] !== f ? (x = e => {
                    if (e === `international` && c) r(void 0);
                    else {
                        let t = f.find(t => t.value === e);
                        t != null && r(t.value)
                    }
                }, t[25] = c, t[26] = r, t[27] = f, t[28] = x) : x = t[28], S = a, p = I.Trigger, y = v(`bg-token-main-surface-primary text-token-text-primary btn-secondary h-auto! border placeholder-gray-500 outline-none`, d, l, w, `border-[var(--border-heavy)]`, s && `border-token-interactive-border-danger-secondary-default focus:border-token-interactive-border-danger-secondary-default`), t[2] = c, t[3] = u.densePadding, t[4] = u.fullWidthJustifyDialCode, t[5] = u.layout, t[6] = u.placeholderTextSize, t[7] = u.rounded, t[8] = o, t[9] = a, t[10] = s, t[11] = r, t[12] = f, t[13] = i, t[14] = p, t[15] = m, t[16] = h, t[17] = g, t[18] = _, t[19] = y, t[20] = b, t[21] = x, t[22] = S, t[23] = C
            } else p = t[14], m = t[15], h = t[16], g = t[17], _ = t[18], y = t[19], b = t[20], x = t[21], S = t[22], C = t[23];
            let w;
            t[29] === l ? w = t[30] : (w = l.formatMessage({
                id: `phoneNumberInput.countryCode`,
                defaultMessage: `Phone number country code`
            }), t[29] = l, t[30] = w);
            let E = `flex items-center justify-between gap-2 text-start ${g} ${_} ${h}`,
                D;
            t[31] !== c || t[32] !== u.triggerShowOnlyDialCode || t[33] !== i ? (D = i == null && c ? (0, Q.jsx)(T, {
                ...Qe
            }) : u.triggerShowOnlyDialCode && i != null ? (0, Q.jsx)(`span`, {
                className: `truncate`,
                children: (0, Q.jsx)(T, {
                    id: `phoneNumberInput.plusCode`,
                    defaultMessage: `+{code}`,
                    values: {
                        code: ne(i)
                    }
                })
            }) : (0, Q.jsx)(I.Value, {}), t[31] = c, t[32] = u.triggerShowOnlyDialCode, t[33] = i, t[34] = D) : D = t[34];
            let O;
            t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (O = (0, Q.jsx)(I.Icon, {}), t[35] = O) : O = t[35];
            let k;
            t[36] !== E || t[37] !== D ? (k = (0, Q.jsxs)(`div`, {
                className: E,
                children: [D, O]
            }), t[36] = E, t[37] = D, t[38] = k) : k = t[38];
            let A;
            t[39] !== p || t[40] !== k || t[41] !== y || t[42] !== w ? (A = (0, Q.jsx)(p, {
                className: y,
                "aria-label": w,
                children: k
            }), t[39] = p, t[40] = k, t[41] = y, t[42] = w, t[43] = A) : A = t[43];
            let te = u.dropdownPanelWidthPx ? `mt-2 max-h-[var(--radix-select-content-available-height)] max-w-none! min-w-0` : `mt-2 max-h-[var(--radix-select-content-available-height)] w-[var(--radix-select-trigger-width)] max-w-none! min-w-[var(--radix-select-trigger-width)]`,
                j = u.dropdownPanelWidthPx ? `${u.dropdownPanelWidthPx}px` : `var(--radix-select-trigger-width)`,
                M;
            t[44] === j ? M = t[45] : (M = {
                width: j,
                height: `auto`,
                maxHeight: `var(--radix-select-content-available-height, 60lvh)`
            }, t[44] = j, t[45] = M);
            let N;
            t[46] === c ? N = t[47] : (N = c ? (0, Q.jsx)(I.Item, {
                value: `international`,
                children: (0, Q.jsx)(T, {
                    ...Qe
                })
            }) : null, t[46] = c, t[47] = N);
            let P;
            t[48] === f ? P = t[49] : (P = f.map(Je), t[48] = f, t[49] = P);
            let F;
            t[50] !== N || t[51] !== P ? (F = (0, Q.jsx)(I.Viewport, {
                asChild: !0,
                children: (0, Q.jsxs)(Ve, {
                    className: `h-full w-full`,
                    children: [N, P]
                })
            }), t[50] = N, t[51] = P, t[52] = F) : F = t[52];
            let L;
            t[53] === Symbol.for(`react.memo_cache_sentinel`) ? (L = (0, Q.jsx)(He, {
                className: `w-[8px] py-[5px]`,
                orientation: `vertical`,
                children: (0, Q.jsx)(Ue, {
                    className: `w-[8px] rounded-[3px] bg-[var(--scrollbar-color)] hover:bg-[var(--scrollbar-color-hover)]`
                })
            }), t[53] = L) : L = t[53];
            let R;
            t[54] === F ? R = t[55] : (R = (0, Q.jsxs)(Be, {
                className: `h-full w-full`,
                type: `auto`,
                children: [F, L]
            }), t[54] = F, t[55] = R);
            let z;
            t[56] !== te || t[57] !== M || t[58] !== R ? (z = (0, Q.jsx)(I.Portal, {
                children: (0, Q.jsx)(I.Content, {
                    className: te,
                    style: M,
                    align: `start`,
                    alignOffset: 0,
                    sideOffset: 0,
                    children: R
                })
            }), t[56] = te, t[57] = M, t[58] = R, t[59] = z) : z = t[59];
            let B;
            t[60] !== m || t[61] !== A || t[62] !== z || t[63] !== b || t[64] !== x || t[65] !== S ? (B = (0, Q.jsxs)(m, {
                value: b,
                onValueChange: x,
                disabled: S,
                children: [A, z]
            }), t[60] = m, t[61] = A, t[62] = z, t[63] = b, t[64] = x, t[65] = S, t[66] = B) : B = t[66];
            let re;
            return t[67] !== B || t[68] !== C ? (re = (0, Q.jsx)(`div`, {
                className: C,
                children: B
            }), t[67] = B, t[68] = C, t[69] = re) : re = t[69], re
        }, Ze.displayName = `CountryCodeSelect`, Qe = w({
            id: `phoneNumberInput.internationalOption`,
            defaultMessage: `International`
        })
    })),
    et = t({
        PhoneNumberInput: () => ot
    });

function tt(e) {
    let t = new Intl.DisplayNames([e.locale], {
        type: `region`
    });
    return Object.fromEntries(P().map(e => [e, t.of(e)]))
}
var nt, rt, $, it, at, ot, st, ct = e((() => {
    nt = O(), N(), j(), f(), c(), b(), B(), L(), rt = n(D()), E(), ie(), le(), R(), $e(), $ = C(), it = e => {
        "use forget";
        let t = (0, nt.c)(6),
            {
                children: n,
                className: r,
                error: i
            } = e,
            a = i && `border-token-interactive-border-danger-secondary-default focus-within:border-token-interactive-border-danger-secondary-default focus-within:ring-token-border-error`,
            o;
        t[0] !== r || t[1] !== a ? (o = v(r, a), t[0] = r, t[1] = a, t[2] = o) : o = t[2];
        let s;
        return t[3] !== n || t[4] !== o ? (s = (0, $.jsx)(`div`, {
            className: o,
            children: n
        }), t[3] = n, t[4] = o, t[5] = s) : s = t[5], s
    }, at = e => {
        "use forget";
        let t = (0, nt.c)(10),
            {
                error: n,
                className: r
            } = e,
            i = ee(),
            a;
        t[0] === r ? a = t[1] : (a = v(`text-token-interactive-label-danger-secondary-default flex gap-1 text-xs`, r), t[0] = r, t[1] = a);
        let o;
        t[2] === i ? o = t[3] : (o = i.formatMessage({
            id: `phoneNumberInput.errorIcon`,
            defaultMessage: `Error`
        }), t[2] = i, t[3] = o);
        let s;
        t[4] === o ? s = t[5] : (s = (0, $.jsx)(M, {
            title: o
        }), t[4] = o, t[5] = s);
        let c;
        return t[6] !== n || t[7] !== a || t[8] !== s ? (c = (0, $.jsxs)(`p`, {
            className: a,
            children: [s, n]
        }), t[6] = n, t[7] = a, t[8] = s, t[9] = c) : c = t[9], c
    }, ot = e => {
        "use forget";
        let t = (0, nt.c)(65),
            {
                id: n,
                name: i,
                form: a,
                value: o,
                setValue: s,
                visibleLabel: c,
                visibleLabelClassName: l,
                onCountryChange: u,
                defaultCountry: d,
                countries: f,
                disabled: p,
                nativeInputRef: m,
                error: h,
                appearance: g,
                controlHeightClassName: _,
                inputHeightClassName: v,
                initialValueFormat: y,
                international: b,
                addInternationalOption: x,
                onPaste: S
            } = e,
            C = d === void 0 ? `US` : d,
            w = ee(),
            [T, E] = (0, rt.useState)(``),
            D = o ?? T,
            O = s ?? E,
            k;
        t[0] === C ? k = t[1] : (k = ne(C), t[0] = C, t[1] = k);
        let [A, te] = (0, rt.useState)(k), j;
        t[2] === w ? j = t[3] : (j = tt(w), t[2] = w, t[3] = j);
        let M = j,
            N = (0, rt.useRef)(null),
            P = g?.layout ?? `stacked`,
            F = g?.showDialCodePrefix ?? !0,
            I = g?.rounded ?? `full`,
            L = g?.densePadding ?? !1,
            R = g?.triggerShowOnlyDialCode ?? !1,
            B = g?.fullWidthJustifyDialCode ?? !0,
            ie = g?.placeholderTextSize ?? `base`,
            ae = g?.dropdownPanelWidthPx ?? void 0,
            se = g?.phoneInputStyle ?? `split`,
            ce;
        t[4] !== ie || t[5] !== ae || t[6] !== se || t[7] !== P || t[8] !== F || t[9] !== I || t[10] !== L || t[11] !== R || t[12] !== B ? (ce = {
            layout: P,
            showDialCodePrefix: F,
            rounded: I,
            densePadding: L,
            triggerShowOnlyDialCode: R,
            fullWidthJustifyDialCode: B,
            placeholderTextSize: ie,
            dropdownPanelWidthPx: ae,
            phoneInputStyle: se
        }, t[4] = ie, t[5] = ae, t[6] = se, t[7] = P, t[8] = F, t[9] = I, t[10] = L, t[11] = R, t[12] = B, t[13] = ce) : ce = t[13];
        let V = ce,
            le = V.layout === `inline` ? `flex items-center gap-2 w-full` : `flex flex-col gap-2`,
            ue;
        t[14] !== a || t[15] !== n || t[16] !== i || t[17] !== D ? (ue = (0, $.jsx)(`input`, {
            type: `hidden`,
            value: D,
            id: n,
            name: i,
            form: a
        }), t[14] = a, t[15] = n, t[16] = i, t[17] = D, t[18] = ue) : ue = t[18];
        let H;
        t[19] !== c || t[20] !== l ? (H = c ? (0, $.jsx)(`legend`, {
            className: l,
            children: c
        }) : null, t[19] = c, t[20] = l, t[21] = H) : H = t[21];
        let de = m,
            U;
        t[22] === O ? U = t[23] : (U = e => {
            O(e ?? ``)
        }, t[22] = O, t[23] = U);
        let fe = w.locale,
            pe = V.layout === `inline`,
            me;
        t[24] !== V.phoneInputStyle || t[25] !== A || t[26] !== p || t[27] !== h || t[28] !== v || t[29] !== pe ? (me = {
            countryCallingCode: A,
            error: h,
            disabled: p,
            inputRef: N,
            inputHeightClassName: v,
            suppressInlineError: pe,
            phoneInputStyle: V.phoneInputStyle
        }, t[24] = V.phoneInputStyle, t[25] = A, t[26] = p, t[27] = h, t[28] = v, t[29] = pe, t[30] = me) : me = t[30];
        let he = me,
            W = !!h,
            G;
        t[31] !== x || t[32] !== _ || t[33] !== W ? (G = {
            controlHeightClassName: _,
            error: W,
            addInternationalOption: x
        }, t[31] = x, t[32] = _, t[33] = W, t[34] = G) : G = t[34];
        let K;
        t[35] === u ? K = t[36] : (K = e => {
            e && (te(ne(e)), u && u(e), setTimeout(() => {
                N.current && z(N.current)
            }, 50), r.addAction(`chatgpt_auth_modal_country_code_changed`, {
                countryCode: e
            }))
        }, t[35] = u, t[36] = K);
        let q;
        t[37] !== x || t[38] !== f || t[39] !== M || t[40] !== C || t[41] !== p || t[42] !== y || t[43] !== b || t[44] !== w.locale || t[45] !== le || t[46] !== S || t[47] !== de || t[48] !== U || t[49] !== he || t[50] !== G || t[51] !== K || t[52] !== D ? (q = (0, $.jsx)(re, {
            className: le,
            ref: de,
            value: D,
            onChange: U,
            defaultCountry: C,
            countries: f,
            labels: M,
            locales: fe,
            limitMaxLength: !0,
            initialValueFormat: y,
            international: b,
            addInternationalOption: x,
            onPaste: S,
            inputComponent: st,
            numberInputProps: he,
            countrySelectComponent: Ze,
            countrySelectProps: G,
            onCountryChange: K,
            disabled: p
        }), t[37] = x, t[38] = f, t[39] = M, t[40] = C, t[41] = p, t[42] = y, t[43] = b, t[44] = w.locale, t[45] = le, t[46] = S, t[47] = de, t[48] = U, t[49] = he, t[50] = G, t[51] = K, t[52] = D, t[53] = q) : q = t[53];
        let J;
        t[54] !== H || t[55] !== q ? (J = (0, $.jsxs)(`fieldset`, {
            className: `w-full`,
            children: [H, q]
        }), t[54] = H, t[55] = q, t[56] = J) : J = t[56];
        let Y;
        t[57] !== V.layout || t[58] !== h ? (Y = h && V.layout === `inline` && (0, $.jsx)(at, {
            error: h
        }), t[57] = V.layout, t[58] = h, t[59] = Y) : Y = t[59];
        let ge;
        return t[60] !== V || t[61] !== ue || t[62] !== J || t[63] !== Y ? (ge = (0, $.jsxs)(oe, {
            value: V,
            children: [ue, J, Y]
        }), t[60] = V, t[61] = ue, t[62] = J, t[63] = Y, t[64] = ge) : ge = t[64], ge
    }, ot.displayName = `PhoneNumberInput`, st = (0, rt.forwardRef)(({
        countryCallingCode: e,
        error: t,
        value: n,
        disabled: r,
        inputRef: i,
        inputHeightClassName: a,
        suppressInlineError: o,
        phoneInputStyle: s,
        ...c
    }, l) => {
        let u = ee(),
            f = d(),
            p = ae(),
            m = (0, rt.useRef)(null),
            h = n?.trimStart().startsWith(`+`),
            g = u.formatMessage({
                id: `phoneNumberInput.phoneNumberLabel`,
                defaultMessage: `Phone number`
            });
        (0, rt.useImperativeHandle)(i, () => ({
            focus: () => {
                m.current?.focus()
            }
        }));
        let _ = {
                full: `rounded-full`,
                lg: `rounded-lg`,
                md: `rounded-md`
            },
            y = {
                full: f === `rtl` ? `rounded-s-full` : `rounded-e-full`,
                lg: f === `rtl` ? `rounded-s-lg` : `rounded-e-lg`,
                md: f === `rtl` ? `rounded-s-md` : `rounded-e-md`
            },
            b = {
                sm: `text-sm!`,
                base: `text-base!`
            } [p.placeholderTextSize],
            x = _[p.rounded],
            S = s === `cohesive` ? y[p.rounded] : _[p.rounded],
            C = p.densePadding ? `px-2! py-2!` : `px-1! py-3! ${a??`h-13!`}`;
        return (0, $.jsxs)(`div`, {
            className: p.layout === `inline` ? `flex-1` : ``,
            children: [(0, $.jsxs)(it, {
                error: !!t,
                className: v(`focus-within:border-token-border-heavy focus-within:ring-token-text-secondary bg-token-main-surface-primary flex items-center border border-[var(--border-heavy)] text-base focus-within:ring-1`, x),
                children: [p.showDialCodePrefix && !h && (0, $.jsx)(`span`, {
                    className: `text-token-interactive-label-tertiary-default pointer-events-none ps-4 pe-1`,
                    dir: `ltr`,
                    children: u.formatMessage({
                        id: `phoneNumberInput.plusCode`,
                        defaultMessage: `+{code}`
                    }, {
                        code: e
                    })
                }), (0, $.jsx)(k, {
                    ...c,
                    name: `phoneNumberInput`,
                    ariaLabel: g,
                    placeholder: g,
                    ref: e => {
                        let t = e => {
                            typeof l == `function` ? l(e) : l && `current` in l && (l.current = e), m.current = e
                        };
                        return t(e), () => t(null)
                    },
                    className: v(`flex-1 border-0! p-0! px-0! py-0! focus-within:border-0! focus-within:ring-0!`, x),
                    inputClassName: v(`border-0!`, b, C, p.showDialCodePrefix && h && `ps-4!`, S),
                    disabled: r,
                    value: n,
                    type: `tel`,
                    autoComplete: `tel`
                })]
            }), t && !o && (0, $.jsx)(at, {
                error: t,
                className: `mt-1 items-center`
            })]
        })
    }), st.displayName = `NumberInput`
}));
export {
    ct as n, et as r, ot as t
};
//# sourceMappingURL=5e6083c9-g02b6jysj1rajvff.js.map