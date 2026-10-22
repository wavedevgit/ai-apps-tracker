import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Kt as n,
    Vn as r
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function i() {
    var e = [...arguments];
    return (0, T.useMemo)(() => t => {
        e.forEach(e => e(t))
    }, e)
}

function a(e) {
    let t = Object.prototype.toString.call(e);
    return t === `[object Window]` || t === `[object global]`
}

function o(e) {
    return `nodeType` in e
}

function s(e) {
    return e ? a(e) ? e : o(e) ? e.ownerDocument?.defaultView ?? window : window : window
}

function c(e) {
    let {
        Document: t
    } = s(e);
    return e instanceof t
}

function l(e) {
    return !a(e) && e instanceof s(e).HTMLElement
}

function u(e) {
    return e instanceof s(e).SVGElement
}

function d(e) {
    return e ? a(e) ? e.document : o(e) ? c(e) ? e : l(e) || u(e) ? e.ownerDocument : document : document : document
}

function f(e) {
    let t = (0, T.useRef)(e);
    return D(() => {
        t.current = e
    }), (0, T.useCallback)(function() {
        var e = [...arguments];
        return t.current == null ? void 0 : t.current(...e)
    }, [])
}

function p() {
    let e = (0, T.useRef)(null);
    return [(0, T.useCallback)((t, n) => {
        e.current = setInterval(t, n)
    }, []), (0, T.useCallback)(() => {
        e.current !== null && (clearInterval(e.current), e.current = null)
    }, [])]
}

function m(e, t) {
    t === void 0 && (t = [e]);
    let n = (0, T.useRef)(e);
    return D(() => {
        n.current !== e && (n.current = e)
    }, t), n
}

function h(e, t) {
    let n = (0, T.useRef)();
    return (0, T.useMemo)(() => {
        let t = e(n.current);
        return n.current = t, t
    }, [...t])
}

function g(e) {
    let t = f(e),
        n = (0, T.useRef)(null);
    return [n, (0, T.useCallback)(e => {
        e !== n.current && t?.(e, n.current), n.current = e
    }, [])]
}

function _(e) {
    let t = (0, T.useRef)();
    return (0, T.useEffect)(() => {
        t.current = e
    }, [e]), t.current
}

function v(e, t) {
    return (0, T.useMemo)(() => {
        if (t) return t;
        let n = O[e] == null ? 0 : O[e] + 1;
        return O[e] = n, e + `-` + n
    }, [e, t])
}

function y(e) {
    return function(t) {
        return [...arguments].slice(1).reduce((t, n) => {
            let r = Object.entries(n);
            for (let [n, i] of r) {
                let r = t[n];
                r != null && (t[n] = r + e * i)
            }
            return t
        }, {
            ...t
        })
    }
}

function b(e) {
    return `clientX` in e && `clientY` in e
}

function x(e) {
    if (!e) return !1;
    let {
        KeyboardEvent: t
    } = s(e.target);
    return t && e instanceof t
}

function S(e) {
    if (!e) return !1;
    let {
        TouchEvent: t
    } = s(e.target);
    return t && e instanceof t
}

function C(e) {
    if (S(e)) {
        if (e.touches && e.touches.length) {
            let {
                clientX: t,
                clientY: n
            } = e.touches[0];
            return {
                x: t,
                y: n
            }
        } else if (e.changedTouches && e.changedTouches.length) {
            let {
                clientX: t,
                clientY: n
            } = e.changedTouches[0];
            return {
                x: t,
                y: n
            }
        }
    }
    return b(e) ? {
        x: e.clientX,
        y: e.clientY
    } : null
}

function w(e) {
    return e.matches(ee) ? e : e.querySelector(ee)
}
var T, E, D, O, k, A, j, ee, M = e((() => {
    T = t(r()), E = typeof window < `u` && window.document !== void 0 && window.document.createElement !== void 0, D = E ? T.useLayoutEffect : T.useEffect, O = {}, k = y(1), A = y(-1), j = Object.freeze({
        Translate: {
            toString(e) {
                if (!e) return;
                let {
                    x: t,
                    y: n
                } = e;
                return `translate3d(` + (t ? Math.round(t) : 0) + `px, ` + (n ? Math.round(n) : 0) + `px, 0)`
            }
        },
        Scale: {
            toString(e) {
                if (!e) return;
                let {
                    scaleX: t,
                    scaleY: n
                } = e;
                return `scaleX(` + t + `) scaleY(` + n + `)`
            }
        },
        Transform: {
            toString(e) {
                if (e) return [j.Translate.toString(e), j.Scale.toString(e)].join(` `)
            }
        },
        Transition: {
            toString(e) {
                let {
                    property: t,
                    duration: n,
                    easing: r
                } = e;
                return t + ` ` + n + `ms ` + r
            }
        }
    }), ee = `a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]`
}));

function te(e) {
    let {
        id: t,
        value: n
    } = e;
    return P.createElement(`div`, {
        id: t,
        style: F
    }, n)
}

function N(e) {
    let {
        id: t,
        announcement: n,
        ariaLiveType: r = `assertive`
    } = e;
    return P.createElement(`div`, {
        id: t,
        style: {
            position: `fixed`,
            top: 0,
            left: 0,
            width: 1,
            height: 1,
            margin: -1,
            border: 0,
            padding: 0,
            overflow: `hidden`,
            clip: `rect(0 0 0 0)`,
            clipPath: `inset(100%)`,
            whiteSpace: `nowrap`
        },
        role: `status`,
        "aria-live": r,
        "aria-atomic": !0
    }, n)
}

function ne() {
    let [e, t] = (0, P.useState)(``);
    return {
        announce: (0, P.useCallback)(e => {
            e != null && t(e)
        }, []),
        announcement: e
    }
}
var P, F, re = e((() => {
    P = t(r()), F = {
        display: `none`
    }
}));

function ie(e) {
    let t = (0, q.useContext)(yt);
    (0, q.useEffect)(() => {
        if (!t) throw Error(`useDndMonitor must be used within a children of <DndContext>`);
        return t(e)
    }, [e, t])
}

function ae() {
    let [e] = (0, q.useState)(() => new Set), t = (0, q.useCallback)(t => (e.add(t), () => e.delete(t)), [e]);
    return [(0, q.useCallback)(t => {
        let {
            type: n,
            event: r
        } = t;
        e.forEach(e => e[n]?.call(e, r))
    }, [e]), t]
}

function oe(e) {
    let {
        announcements: t = xt,
        container: n,
        hiddenTextDescribedById: r,
        screenReaderInstructions: i = bt
    } = e, {
        announce: a,
        announcement: o
    } = ne(), s = v(`DndLiveRegion`), [c, l] = (0, q.useState)(!1);
    if ((0, q.useEffect)(() => {
            l(!0)
        }, []), ie((0, q.useMemo)(() => ({
            onDragStart(e) {
                let {
                    active: n
                } = e;
                a(t.onDragStart({
                    active: n
                }))
            },
            onDragMove(e) {
                let {
                    active: n,
                    over: r
                } = e;
                t.onDragMove && a(t.onDragMove({
                    active: n,
                    over: r
                }))
            },
            onDragOver(e) {
                let {
                    active: n,
                    over: r
                } = e;
                a(t.onDragOver({
                    active: n,
                    over: r
                }))
            },
            onDragEnd(e) {
                let {
                    active: n,
                    over: r
                } = e;
                a(t.onDragEnd({
                    active: n,
                    over: r
                }))
            },
            onDragCancel(e) {
                let {
                    active: n,
                    over: r
                } = e;
                a(t.onDragCancel({
                    active: n,
                    over: r
                }))
            }
        }), [a, t])), !c) return null;
    let u = q.createElement(q.Fragment, null, q.createElement(te, {
        id: r,
        value: i.draggable
    }), q.createElement(N, {
        id: s,
        announcement: o
    }));
    return n ? (0, vt.createPortal)(u, n) : u
}

function se() {}

function I(e, t) {
    return (0, q.useMemo)(() => ({
        sensor: e,
        options: t ?? {}
    }), [e, t])
}

function ce() {
    var e = [...arguments];
    return (0, q.useMemo)(() => [...e].filter(e => e != null), [...e])
}

function le(e, t) {
    return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2)
}

function ue(e, t) {
    let n = C(e);
    if (!n) return `0 0`;
    let r = {
        x: (n.x - t.left) / t.width * 100,
        y: (n.y - t.top) / t.height * 100
    };
    return r.x + `% ` + r.y + `%`
}

function L(e, t) {
    let {
        data: {
            value: n
        }
    } = e, {
        data: {
            value: r
        }
    } = t;
    return n - r
}

function de(e, t) {
    let {
        data: {
            value: n
        }
    } = e, {
        data: {
            value: r
        }
    } = t;
    return r - n
}

function R(e) {
    let {
        left: t,
        top: n,
        height: r,
        width: i
    } = e;
    return [{
        x: t,
        y: n
    }, {
        x: t + i,
        y: n
    }, {
        x: t,
        y: n + r
    }, {
        x: t + i,
        y: n + r
    }]
}

function fe(e, t) {
    if (!e || e.length === 0) return null;
    let [n] = e;
    return t ? n[t] : n
}

function pe(e, t, n) {
    return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
        x: t + e.width * .5,
        y: n + e.height * .5
    }
}

function z(e, t) {
    let n = Math.max(t.top, e.top),
        r = Math.max(t.left, e.left),
        i = Math.min(t.left + t.width, e.left + e.width),
        a = Math.min(t.top + t.height, e.top + e.height),
        o = i - r,
        s = a - n;
    if (r < i && n < a) {
        let n = t.width * t.height,
            r = e.width * e.height,
            i = o * s,
            a = i / (n + r - i);
        return Number(a.toFixed(4))
    }
    return 0
}

function me(e, t, n) {
    return {
        ...e,
        scaleX: t && n ? t.width / n.width : 1,
        scaleY: t && n ? t.height / n.height : 1
    }
}

function he(e, t) {
    return e && t ? {
        x: e.left - t.left,
        y: e.top - t.top
    } : Y
}

function B(e) {
    return function(t) {
        return [...arguments].slice(1).reduce((t, n) => ({
            ...t,
            top: t.top + e * n.y,
            bottom: t.bottom + e * n.y,
            left: t.left + e * n.x,
            right: t.right + e * n.x
        }), {
            ...t
        })
    }
}

function ge(e) {
    if (e.startsWith(`matrix3d(`)) {
        let t = e.slice(9, -1).split(/, /);
        return {
            x: +t[12],
            y: +t[13],
            scaleX: +t[0],
            scaleY: +t[5]
        }
    } else if (e.startsWith(`matrix(`)) {
        let t = e.slice(7, -1).split(/, /);
        return {
            x: +t[4],
            y: +t[5],
            scaleX: +t[0],
            scaleY: +t[3]
        }
    }
    return null
}

function _e(e, t, n) {
    let r = ge(t);
    if (!r) return e;
    let {
        scaleX: i,
        scaleY: a,
        x: o,
        y: s
    } = r, c = e.left - o - (1 - i) * parseFloat(n), l = e.top - s - (1 - a) * parseFloat(n.slice(n.indexOf(` `) + 1)), u = i ? e.width / i : e.width, d = a ? e.height / a : e.height;
    return {
        width: u,
        height: d,
        top: l,
        right: c + u,
        bottom: l + d,
        left: c
    }
}

function V(e, t) {
    t === void 0 && (t = Et);
    let n = e.getBoundingClientRect();
    if (t.ignoreTransform) {
        let {
            transform: t,
            transformOrigin: r
        } = s(e).getComputedStyle(e);
        t && (n = _e(n, t, r))
    }
    let {
        top: r,
        left: i,
        width: a,
        height: o,
        bottom: c,
        right: l
    } = n;
    return {
        top: r,
        left: i,
        width: a,
        height: o,
        bottom: c,
        right: l
    }
}

function H(e) {
    return V(e, {
        ignoreTransform: !0
    })
}

function ve(e) {
    let t = e.innerWidth,
        n = e.innerHeight;
    return {
        top: 0,
        left: 0,
        right: t,
        bottom: n,
        width: t,
        height: n
    }
}

function ye(e, t) {
    return t === void 0 && (t = s(e).getComputedStyle(e)), t.position === `fixed`
}

function be(e, t) {
    t === void 0 && (t = s(e).getComputedStyle(e));
    let n = /(auto|scroll|overlay)/;
    return [`overflow`, `overflowX`, `overflowY`].some(e => {
        let r = t[e];
        return typeof r == `string` && n.test(r)
    })
}

function xe(e, t) {
    let n = [];

    function r(i) {
        if (t != null && n.length >= t || !i) return n;
        if (c(i) && i.scrollingElement != null && !n.includes(i.scrollingElement)) return n.push(i.scrollingElement), n;
        if (!l(i) || u(i) || n.includes(i)) return n;
        let a = s(e).getComputedStyle(i);
        return i !== e && be(i, a) && n.push(i), ye(i, a) ? n : r(i.parentNode)
    }
    return e ? r(e) : n
}

function Se(e) {
    let [t] = xe(e, 1);
    return t ?? null
}

function Ce(e) {
    return !E || !e ? null : a(e) ? e : o(e) ? c(e) || e === d(e).scrollingElement ? window : l(e) ? e : null : null
}

function U(e) {
    return a(e) ? e.scrollX : e.scrollLeft
}

function W(e) {
    return a(e) ? e.scrollY : e.scrollTop
}

function G(e) {
    return {
        x: U(e),
        y: W(e)
    }
}

function we(e) {
    return !E || !e ? !1 : e === document.scrollingElement
}

function K(e) {
    let t = {
            x: 0,
            y: 0
        },
        n = we(e) ? {
            height: window.innerHeight,
            width: window.innerWidth
        } : {
            height: e.clientHeight,
            width: e.clientWidth
        },
        r = {
            x: e.scrollWidth - n.width,
            y: e.scrollHeight - n.height
        };
    return {
        isTop: e.scrollTop <= t.y,
        isLeft: e.scrollLeft <= t.x,
        isBottom: e.scrollTop >= r.y,
        isRight: e.scrollLeft >= r.x,
        maxScroll: r,
        minScroll: t
    }
}

function Te(e, t, n, r, i) {
    let {
        top: a,
        left: o,
        right: s,
        bottom: c
    } = n;
    r === void 0 && (r = 10), i === void 0 && (i = Dt);
    let {
        isTop: l,
        isBottom: u,
        isLeft: d,
        isRight: f
    } = K(e), p = {
        x: 0,
        y: 0
    }, m = {
        x: 0,
        y: 0
    }, h = {
        height: t.height * i.y,
        width: t.width * i.x
    };
    return !l && a <= t.top + h.height ? (p.y = X.Backward, m.y = r * Math.abs((t.top + h.height - a) / h.height)) : !u && c >= t.bottom - h.height && (p.y = X.Forward, m.y = r * Math.abs((t.bottom - h.height - c) / h.height)), !f && s >= t.right - h.width ? (p.x = X.Forward, m.x = r * Math.abs((t.right - h.width - s) / h.width)) : !d && o <= t.left + h.width && (p.x = X.Backward, m.x = r * Math.abs((t.left + h.width - o) / h.width)), {
        direction: p,
        speed: m
    }
}

function Ee(e) {
    if (e === document.scrollingElement) {
        let {
            innerWidth: e,
            innerHeight: t
        } = window;
        return {
            top: 0,
            left: 0,
            right: e,
            bottom: t,
            width: e,
            height: t
        }
    }
    let {
        top: t,
        left: n,
        right: r,
        bottom: i
    } = e.getBoundingClientRect();
    return {
        top: t,
        left: n,
        right: r,
        bottom: i,
        width: e.clientWidth,
        height: e.clientHeight
    }
}

function De(e) {
    return e.reduce((e, t) => k(e, G(t)), Y)
}

function Oe(e) {
    return e.reduce((e, t) => e + U(t), 0)
}

function ke(e) {
    return e.reduce((e, t) => e + W(t), 0)
}

function Ae(e, t) {
    if (t === void 0 && (t = V), !e) return;
    let {
        top: n,
        left: r,
        bottom: i,
        right: a
    } = t(e);
    Se(e) && (i <= 0 || a <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
        block: `center`,
        inline: `center`
    })
}

function je(e) {
    let {
        EventTarget: t
    } = s(e);
    return e instanceof t ? e : d(e)
}

function Me(e, t) {
    let n = Math.abs(e.x),
        r = Math.abs(e.y);
    return typeof t == `number` ? Math.sqrt(n ** 2 + r ** 2) > t : `x` in t && `y` in t ? n > t.x && r > t.y : `x` in t ? n > t.x : `y` in t && r > t.y
}

function Ne(e) {
    e.preventDefault()
}

function Pe(e) {
    e.stopPropagation()
}

function Fe(e) {
    return !!(e && `distance` in e)
}

function Ie(e) {
    return !!(e && `delay` in e)
}

function Le(e) {
    let {
        acceleration: t,
        activator: n = Ht.Pointer,
        canScroll: r,
        draggingRect: i,
        enabled: a,
        interval: o = 5,
        order: s = Ut.TreeOrder,
        pointerCoordinates: c,
        scrollableAncestors: l,
        scrollableAncestorRects: u,
        delta: d,
        threshold: f
    } = e, m = Re({
        delta: d,
        disabled: !a
    }), [h, g] = p(), _ = (0, q.useRef)({
        x: 0,
        y: 0
    }), v = (0, q.useRef)({
        x: 0,
        y: 0
    }), y = (0, q.useMemo)(() => {
        switch (n) {
            case Ht.Pointer:
                return c ? {
                    top: c.y,
                    bottom: c.y,
                    left: c.x,
                    right: c.x
                } : null;
            case Ht.DraggableRect:
                return i
        }
    }, [n, i, c]), b = (0, q.useRef)(null), x = (0, q.useCallback)(() => {
        let e = b.current;
        if (!e) return;
        let t = _.current.x * v.current.x,
            n = _.current.y * v.current.y;
        e.scrollBy(t, n)
    }, []), S = (0, q.useMemo)(() => s === Ut.TreeOrder ? [...l].reverse() : l, [s, l]);
    (0, q.useEffect)(() => {
        if (!a || !l.length || !y) {
            g();
            return
        }
        for (let e of S) {
            if (r?.(e) === !1) continue;
            let n = l.indexOf(e),
                i = u[n];
            if (!i) continue;
            let {
                direction: a,
                speed: s
            } = Te(e, i, y, t, f);
            for (let e of [`x`, `y`]) m[e][a[e]] || (s[e] = 0, a[e] = 0);
            if (s.x > 0 || s.y > 0) {
                g(), b.current = e, h(x, o), _.current = s, v.current = a;
                return
            }
        }
        _.current = {
            x: 0,
            y: 0
        }, v.current = {
            x: 0,
            y: 0
        }, g()
    }, [t, x, r, g, a, o, JSON.stringify(y), JSON.stringify(m), h, l, S, u, JSON.stringify(f)])
}

function Re(e) {
    let {
        delta: t,
        disabled: n
    } = e, r = _(t);
    return h(e => {
        if (n || !r || !e) return Wt;
        let i = {
            x: Math.sign(t.x - r.x),
            y: Math.sign(t.y - r.y)
        };
        return {
            x: {
                [X.Backward]: e.x[X.Backward] || i.x === -1,
                [X.Forward]: e.x[X.Forward] || i.x === 1
            },
            y: {
                [X.Backward]: e.y[X.Backward] || i.y === -1,
                [X.Forward]: e.y[X.Forward] || i.y === 1
            }
        }
    }, [n, t, r])
}

function ze(e, t) {
    let n = t == null ? void 0 : e.get(t),
        r = n ? n.node.current : null;
    return h(e => t == null ? null : r ?? e ?? null, [r, t])
}

function Be(e, t) {
    return (0, q.useMemo)(() => e.reduce((e, n) => {
        let {
            sensor: r
        } = n, i = r.activators.map(e => ({
            eventName: e.eventName,
            handler: t(e.handler, n)
        }));
        return [...e, ...i]
    }, []), [e, t])
}

function Ve(e, t) {
    let {
        dragging: n,
        dependencies: r,
        config: i
    } = t, [a, o] = (0, q.useState)(null), {
        frequency: s,
        measure: c,
        strategy: l
    } = i, u = (0, q.useRef)(e), d = v(), f = m(d), p = (0, q.useCallback)(function(e) {
        e === void 0 && (e = []), !f.current && o(t => t === null ? e : t.concat(e.filter(e => !t.includes(e))))
    }, [f]), g = (0, q.useRef)(null), _ = h(t => {
        if (d && !n) return qt;
        if (!t || t === qt || u.current !== e || a != null) {
            let t = new Map;
            for (let n of e) {
                if (!n) continue;
                if (a && a.length > 0 && !a.includes(n.id) && n.rect.current) {
                    t.set(n.id, n.rect.current);
                    continue
                }
                let e = n.node.current,
                    r = e ? new kt(c(e), e) : null;
                n.rect.current = r, r && t.set(n.id, r)
            }
            return t
        }
        return t
    }, [e, a, n, d, c]);
    return (0, q.useEffect)(() => {
        u.current = e
    }, [e]), (0, q.useEffect)(() => {
        d || p()
    }, [n, d]), (0, q.useEffect)(() => {
        a && a.length > 0 && o(null)
    }, [JSON.stringify(a)]), (0, q.useEffect)(() => {
        d || typeof s != `number` || g.current !== null || (g.current = setTimeout(() => {
            p(), g.current = null
        }, s))
    }, [s, d, p, ...r]), {
        droppableRects: _,
        measureDroppableContainers: p,
        measuringScheduled: a != null
    };

    function v() {
        switch (l) {
            case Gt.Always:
                return !1;
            case Gt.BeforeDragging:
                return n;
            default:
                return !n
        }
    }
}

function He(e, t) {
    return h(n => e ? n || (typeof t == `function` ? t(e) : e) : null, [t, e])
}

function Ue(e, t) {
    return He(e, t)
}

function We(e) {
    let {
        callback: t,
        disabled: n
    } = e, r = f(t), i = (0, q.useMemo)(() => {
        if (n || typeof window > `u` || window.MutationObserver === void 0) return;
        let {
            MutationObserver: e
        } = window;
        return new e(r)
    }, [r, n]);
    return (0, q.useEffect)(() => () => i?.disconnect(), [i]), i
}

function Ge(e) {
    let {
        callback: t,
        disabled: n
    } = e, r = f(t), i = (0, q.useMemo)(() => {
        if (n || typeof window > `u` || window.ResizeObserver === void 0) return;
        let {
            ResizeObserver: e
        } = window;
        return new e(r)
    }, [n]);
    return (0, q.useEffect)(() => () => i?.disconnect(), [i]), i
}

function Ke(e) {
    return new kt(V(e), e)
}

function qe(e, t, n) {
    t === void 0 && (t = Ke);
    let [r, i] = (0, q.useState)(null);

    function a() {
        i(r => {
            if (!e) return null;
            if (e.isConnected === !1) return r ?? n ?? null;
            let i = t(e);
            return JSON.stringify(r) === JSON.stringify(i) ? r : i
        })
    }
    let o = We({
            callback(t) {
                if (e)
                    for (let n of t) {
                        let {
                            type: t,
                            target: r
                        } = n;
                        if (t === `childList` && r instanceof HTMLElement && r.contains(e)) {
                            a();
                            break
                        }
                    }
            }
        }),
        s = Ge({
            callback: a
        });
    return D(() => {
        a(), e ? (s?.observe(e), o?.observe(document.body, {
            childList: !0,
            subtree: !0
        })) : (s?.disconnect(), o?.disconnect())
    }, [e]), r
}

function Je(e) {
    return he(e, He(e))
}

function Ye(e) {
    let t = (0, q.useRef)(e),
        n = h(n => e ? n && n !== Jt && e && t.current && e.parentNode === t.current.parentNode ? n : xe(e) : Jt, [e]);
    return (0, q.useEffect)(() => {
        t.current = e
    }, [e]), n
}

function Xe(e) {
    let [t, n] = (0, q.useState)(null), r = (0, q.useRef)(e), i = (0, q.useCallback)(e => {
        let t = Ce(e.target);
        t && n(e => e ? (e.set(t, G(t)), new Map(e)) : null)
    }, []);
    return (0, q.useEffect)(() => {
        let t = r.current;
        if (e !== t) {
            a(t);
            let o = e.map(e => {
                let t = Ce(e);
                return t ? (t.addEventListener(`scroll`, i, {
                    passive: !0
                }), [t, G(t)]) : null
            }).filter(e => e != null);
            n(o.length ? new Map(o) : null), r.current = e
        }
        return () => {
            a(e), a(t)
        };

        function a(e) {
            e.forEach(e => {
                Ce(e)?.removeEventListener(`scroll`, i)
            })
        }
    }, [i, e]), (0, q.useMemo)(() => e.length ? t ? Array.from(t.values()).reduce((e, t) => k(e, t), Y) : De(e) : Y, [e, t])
}

function Ze(e, t) {
    t === void 0 && (t = []);
    let n = (0, q.useRef)(null);
    return (0, q.useEffect)(() => {
        n.current = null
    }, t), (0, q.useEffect)(() => {
        let t = e !== Y;
        t && !n.current && (n.current = e), !t && n.current && (n.current = null)
    }, [e]), n.current ? A(e, n.current) : Y
}

function Qe(e) {
    (0, q.useEffect)(() => {
        if (!E) return;
        let t = e.map(e => {
            let {
                sensor: t
            } = e;
            return t.setup == null ? void 0 : t.setup()
        });
        return () => {
            for (let e of t) e?.()
        }
    }, e.map(e => {
        let {
            sensor: t
        } = e;
        return t
    }))
}

function $e(e, t) {
    return (0, q.useMemo)(() => e.reduce((e, n) => {
        let {
            eventName: r,
            handler: i
        } = n;
        return e[r] = e => {
            i(e, t)
        }, e
    }, {}), [e, t])
}

function et(e) {
    return (0, q.useMemo)(() => e ? ve(e) : null, [e])
}

function tt(e, t) {
    t === void 0 && (t = V);
    let [n] = e, r = et(n ? s(n) : null), [i, a] = (0, q.useState)(Yt);

    function o() {
        a(() => e.length ? e.map(e => we(e) ? r : new kt(t(e), e)) : Yt)
    }
    let c = Ge({
        callback: o
    });
    return D(() => {
        c?.disconnect(), o(), e.forEach(e => c?.observe(e))
    }, [e]), i
}

function nt(e) {
    if (!e) return null;
    if (e.children.length > 1) return e;
    let t = e.children[0];
    return l(t) ? t : e
}

function rt(e) {
    let {
        measure: t
    } = e, [n, r] = (0, q.useState)(null), i = Ge({
        callback: (0, q.useCallback)(e => {
            for (let {
                    target: n
                }
                of e)
                if (l(n)) {
                    r(e => {
                        let r = t(n);
                        return e ? {
                            ...e,
                            width: r.width,
                            height: r.height
                        } : r
                    });
                    break
                }
        }, [t])
    }), [a, o] = g((0, q.useCallback)(e => {
        let n = nt(e);
        i?.disconnect(), n && i?.observe(n), r(n ? t(n) : null)
    }, [t, i]));
    return (0, q.useMemo)(() => ({
        nodeRef: a,
        rect: n,
        setRef: o
    }), [n, a, o])
}

function it() {
    return {
        draggable: {
            active: null,
            initialCoordinates: {
                x: 0,
                y: 0
            },
            nodes: new Map,
            translate: {
                x: 0,
                y: 0
            }
        },
        droppable: {
            containers: new $t
        }
    }
}

function at(e, t) {
    switch (t.type) {
        case J.DragStart:
            return {
                ...e, draggable: {
                    ...e.draggable,
                    initialCoordinates: t.initialCoordinates,
                    active: t.active
                }
            };
        case J.DragMove:
            return e.draggable.active == null ? e : {
                ...e,
                draggable: {
                    ...e.draggable,
                    translate: {
                        x: t.coordinates.x - e.draggable.initialCoordinates.x,
                        y: t.coordinates.y - e.draggable.initialCoordinates.y
                    }
                }
            };
        case J.DragEnd:
        case J.DragCancel:
            return {
                ...e, draggable: {
                    ...e.draggable,
                    active: null,
                    initialCoordinates: {
                        x: 0,
                        y: 0
                    },
                    translate: {
                        x: 0,
                        y: 0
                    }
                }
            };
        case J.RegisterDroppable: {
            let {
                element: n
            } = t, {
                id: r
            } = n, i = new $t(e.droppable.containers);
            return i.set(r, n), {
                ...e,
                droppable: {
                    ...e.droppable,
                    containers: i
                }
            }
        }
        case J.SetDroppableDisabled: {
            let {
                id: n,
                key: r,
                disabled: i
            } = t, a = e.droppable.containers.get(n);
            if (!a || r !== a.key) return e;
            let o = new $t(e.droppable.containers);
            return o.set(n, {
                ...a,
                disabled: i
            }), {
                ...e,
                droppable: {
                    ...e.droppable,
                    containers: o
                }
            }
        }
        case J.UnregisterDroppable: {
            let {
                id: n,
                key: r
            } = t, i = e.droppable.containers.get(n);
            if (!i || r !== i.key) return e;
            let a = new $t(e.droppable.containers);
            return a.delete(n), {
                ...e,
                droppable: {
                    ...e.droppable,
                    containers: a
                }
            }
        }
        default:
            return e
    }
}

function ot(e) {
    let {
        disabled: t
    } = e, {
        active: n,
        activatorEvent: r,
        draggableNodes: i
    } = (0, q.useContext)(nn), a = _(r), o = _(n?.id);
    return (0, q.useEffect)(() => {
        if (!t && !r && a && o != null) {
            if (!x(a) || document.activeElement === a.target) return;
            let e = i.get(o);
            if (!e) return;
            let {
                activatorNode: t,
                node: n
            } = e;
            if (!t.current && !n.current) return;
            requestAnimationFrame(() => {
                for (let e of [t.current, n.current]) {
                    if (!e) continue;
                    let t = w(e);
                    if (t) {
                        t.focus();
                        break
                    }
                }
            })
        }
    }, [r, t, i, o, a]), null
}

function st(e, t) {
    let {
        transform: n,
        ...r
    } = t;
    return e != null && e.length ? e.reduce((e, t) => t({
        transform: e,
        ...r
    }), n) : n
}

function ct(e) {
    return (0, q.useMemo)(() => ({
        draggable: {
            ...Qt.draggable,
            ...e?.draggable
        },
        droppable: {
            ...Qt.droppable,
            ...e?.droppable
        },
        dragOverlay: {
            ...Qt.dragOverlay,
            ...e?.dragOverlay
        }
    }), [e?.draggable, e?.droppable, e?.dragOverlay])
}

function lt(e) {
    let {
        activeNode: t,
        measure: n,
        initialRect: r,
        config: i = !0
    } = e, a = (0, q.useRef)(!1), {
        x: o,
        y: s
    } = typeof i == `boolean` ? {
        x: i,
        y: i
    } : i;
    D(() => {
        if (!o && !s || !t) {
            a.current = !1;
            return
        }
        if (a.current || !r) return;
        let e = t?.node.current;
        if (!e || e.isConnected === !1) return;
        let i = he(n(e), r);
        if (o || (i.x = 0), s || (i.y = 0), a.current = !0, Math.abs(i.x) > 0 || Math.abs(i.y) > 0) {
            let t = Se(e);
            t && t.scrollBy({
                top: i.y,
                left: i.x
            })
        }
    }, [t, o, s, r, n])
}

function ut(e) {
    let {
        id: t,
        data: n,
        disabled: r = !1,
        attributes: i
    } = e, a = v(ln), {
        activators: o,
        activatorEvent: s,
        active: c,
        activeNodeRect: l,
        ariaDescribedById: u,
        draggableNodes: d,
        over: f
    } = (0, q.useContext)(nn), {
        role: p = cn,
        roleDescription: h = `draggable`,
        tabIndex: _ = 0
    } = i ?? {}, y = c?.id === t, b = (0, q.useContext)(y ? an : sn), [x, S] = g(), [C, w] = g(), T = $e(o, t), E = m(n);
    return D(() => (d.set(t, {
        id: t,
        key: a,
        node: x,
        activatorNode: C,
        data: E
    }), () => {
        let e = d.get(t);
        e && e.key === a && d.delete(t)
    }), [d, t]), {
        active: c,
        activatorEvent: s,
        activeNodeRect: l,
        attributes: (0, q.useMemo)(() => ({
            role: p,
            tabIndex: _,
            "aria-disabled": r,
            "aria-pressed": y && p === cn ? !0 : void 0,
            "aria-roledescription": h,
            "aria-describedby": u.draggable
        }), [r, p, _, y, h, u.draggable]),
        isDragging: y,
        listeners: r ? void 0 : T,
        node: x,
        over: f,
        setNodeRef: S,
        setActivatorNodeRef: w,
        transform: b
    }
}

function dt() {
    return (0, q.useContext)(rn)
}

function ft(e) {
    let {
        data: t,
        disabled: n = !1,
        id: r,
        resizeObserverConfig: i
    } = e, a = v(un), {
        active: o,
        dispatch: s,
        over: c,
        measureDroppableContainers: l
    } = (0, q.useContext)(nn), u = (0, q.useRef)({
        disabled: n
    }), d = (0, q.useRef)(!1), f = (0, q.useRef)(null), p = (0, q.useRef)(null), {
        disabled: h,
        updateMeasurementsFor: _,
        timeout: y
    } = {
        ...dn,
        ...i
    }, b = m(_ ?? r), x = Ge({
        callback: (0, q.useCallback)(() => {
            if (!d.current) {
                d.current = !0;
                return
            }
            p.current != null && clearTimeout(p.current), p.current = setTimeout(() => {
                l(Array.isArray(b.current) ? b.current : [b.current]), p.current = null
            }, y)
        }, [y]),
        disabled: h || !o
    }), [S, C] = g((0, q.useCallback)((e, t) => {
        x && (t && (x.unobserve(t), d.current = !1), e && x.observe(e))
    }, [x])), w = m(t);
    return (0, q.useEffect)(() => {
        !x || !S.current || (x.disconnect(), d.current = !1, x.observe(S.current))
    }, [S, x]), (0, q.useEffect)(() => (s({
        type: J.RegisterDroppable,
        element: {
            id: r,
            key: a,
            disabled: n,
            node: S,
            rect: f,
            data: w
        }
    }), () => s({
        type: J.UnregisterDroppable,
        key: a,
        id: r
    })), [r]), (0, q.useEffect)(() => {
        n !== u.current.disabled && (s({
            type: J.SetDroppableDisabled,
            id: r,
            key: a,
            disabled: n
        }), u.current.disabled = n)
    }, [r, a, n, s]), {
        active: o,
        rect: f,
        isOver: c?.id === r,
        node: S,
        over: c,
        setNodeRef: C
    }
}

function pt(e) {
    let {
        animation: t,
        children: n
    } = e, [r, i] = (0, q.useState)(null), [a, o] = (0, q.useState)(null), s = _(n);
    return !n && !r && s && i(s), D(() => {
        if (!a) return;
        let e = r?.key,
            n = r?.props.id;
        if (e == null || n == null) {
            i(null);
            return
        }
        Promise.resolve(t(n, a)).then(() => {
            i(null)
        })
    }, [t, r, a]), q.createElement(q.Fragment, null, n, r ? (0, q.cloneElement)(r, {
        ref: o
    }) : null)
}

function mt(e) {
    let {
        children: t
    } = e;
    return q.createElement(nn.Provider, {
        value: tn
    }, q.createElement(an.Provider, {
        value: fn
    }, t))
}

function ht(e) {
    let {
        config: t,
        draggableNodes: n,
        droppableContainers: r,
        measuringConfiguration: i
    } = e;
    return f((e, a) => {
        if (t === null) return;
        let o = n.get(e);
        if (!o) return;
        let c = o.node.current;
        if (!c) return;
        let l = nt(a);
        if (!l) return;
        let {
            transform: u
        } = s(a).getComputedStyle(a), d = ge(u);
        if (!d) return;
        let f = typeof t == `function` ? t : gt(t);
        return Ae(c, i.draggable.measure), f({
            active: {
                id: e,
                data: o.data,
                node: c,
                rect: i.draggable.measure(c)
            },
            draggableNodes: n,
            dragOverlay: {
                node: a,
                rect: i.dragOverlay.measure(l)
            },
            droppableContainers: r,
            measuringConfiguration: i,
            transform: d
        })
    })
}

function gt(e) {
    let {
        duration: t,
        easing: n,
        sideEffects: r,
        keyframes: i
    } = {
        ...vn,
        ...e
    };
    return e => {
        let {
            active: a,
            dragOverlay: o,
            transform: s,
            ...c
        } = e;
        if (!t) return;
        let l = {
                x: o.rect.left - a.rect.left,
                y: o.rect.top - a.rect.top
            },
            u = {
                scaleX: s.scaleX === 1 ? 1 : a.rect.width * s.scaleX / o.rect.width,
                scaleY: s.scaleY === 1 ? 1 : a.rect.height * s.scaleY / o.rect.height
            },
            d = {
                x: s.x - l.x,
                y: s.y - l.y,
                ...u
            },
            f = i({
                ...c,
                active: a,
                dragOverlay: o,
                transform: {
                    initial: s,
                    final: d
                }
            }),
            [p] = f,
            m = f[f.length - 1];
        if (JSON.stringify(p) === JSON.stringify(m)) return;
        let h = r?.({
                active: a,
                dragOverlay: o,
                ...c
            }),
            g = o.node.animate(f, {
                duration: t,
                easing: n,
                fill: `forwards`
            });
        return new Promise(e => {
            g.onfinish = () => {
                h?.(), e()
            }
        })
    }
}

function _t(e) {
    return (0, q.useMemo)(() => {
        if (e != null) return yn++, yn
    }, [e])
}
var q, vt, yt, bt, xt, J, Y, St, Ct, wt, Tt, Et, X, Dt, Ot, kt, At, Z, Q, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, $, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, _n, vn, yn, bn, xn = e((() => {
    q = t(r()), vt = t(n()), M(), re(), yt = (0, q.createContext)(null), bt = {
        draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
    }, xt = {
        onDragStart(e) {
            let {
                active: t
            } = e;
            return `Picked up draggable item ` + t.id + `.`
        },
        onDragOver(e) {
            let {
                active: t,
                over: n
            } = e;
            return n ? `Draggable item ` + t.id + ` was moved over droppable area ` + n.id + `.` : `Draggable item ` + t.id + ` is no longer over a droppable area.`
        },
        onDragEnd(e) {
            let {
                active: t,
                over: n
            } = e;
            return n ? `Draggable item ` + t.id + ` was dropped over droppable area ` + n.id : `Draggable item ` + t.id + ` was dropped.`
        },
        onDragCancel(e) {
            let {
                active: t
            } = e;
            return `Dragging was cancelled. Draggable item ` + t.id + ` was dropped.`
        }
    }, (function(e) {
        e.DragStart = `dragStart`, e.DragMove = `dragMove`, e.DragEnd = `dragEnd`, e.DragCancel = `dragCancel`, e.DragOver = `dragOver`, e.RegisterDroppable = `registerDroppable`, e.SetDroppableDisabled = `setDroppableDisabled`, e.UnregisterDroppable = `unregisterDroppable`
    })(J ||= {}), Y = Object.freeze({
        x: 0,
        y: 0
    }), St = e => {
        let {
            collisionRect: t,
            droppableRects: n,
            droppableContainers: r
        } = e, i = pe(t, t.left, t.top), a = [];
        for (let e of r) {
            let {
                id: t
            } = e, r = n.get(t);
            if (r) {
                let n = le(pe(r), i);
                a.push({
                    id: t,
                    data: {
                        droppableContainer: e,
                        value: n
                    }
                })
            }
        }
        return a.sort(L)
    }, Ct = e => {
        let {
            collisionRect: t,
            droppableRects: n,
            droppableContainers: r
        } = e, i = R(t), a = [];
        for (let e of r) {
            let {
                id: t
            } = e, r = n.get(t);
            if (r) {
                let n = R(r),
                    o = i.reduce((e, t, r) => e + le(n[r], t), 0),
                    s = Number((o / 4).toFixed(4));
                a.push({
                    id: t,
                    data: {
                        droppableContainer: e,
                        value: s
                    }
                })
            }
        }
        return a.sort(L)
    }, wt = e => {
        let {
            collisionRect: t,
            droppableRects: n,
            droppableContainers: r
        } = e, i = [];
        for (let e of r) {
            let {
                id: r
            } = e, a = n.get(r);
            if (a) {
                let n = z(a, t);
                n > 0 && i.push({
                    id: r,
                    data: {
                        droppableContainer: e,
                        value: n
                    }
                })
            }
        }
        return i.sort(de)
    }, Tt = B(1), Et = {
        ignoreTransform: !1
    }, (function(e) {
        e[e.Forward = 1] = `Forward`, e[e.Backward = -1] = `Backward`
    })(X ||= {}), Dt = {
        x: .2,
        y: .2
    }, Ot = [
        [`x`, [`left`, `right`], Oe],
        [`y`, [`top`, `bottom`], ke]
    ], kt = class {
        constructor(e, t) {
            this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
            let n = xe(t),
                r = De(n);
            this.rect = {
                ...e
            }, this.width = e.width, this.height = e.height;
            for (let [e, t, i] of Ot)
                for (let a of t) Object.defineProperty(this, a, {
                    get: () => {
                        let t = i(n),
                            o = r[e] - t;
                        return this.rect[a] + o
                    },
                    enumerable: !0
                });
            Object.defineProperty(this, "rect", {
                enumerable: !1
            })
        }
    }, At = class {
        constructor(e) {
            this.target = void 0, this.listeners = [], this.removeAll = () => {
                this.listeners.forEach(e => this.target?.removeEventListener(...e))
            }, this.target = e
        }
        add(e, t, n) {
            var r;
            (r = this.target) == null || r.addEventListener(e, t, n), this.listeners.push([e, t, n])
        }
    }, (function(e) {
        e.Click = `click`, e.DragStart = `dragstart`, e.Keydown = `keydown`, e.ContextMenu = `contextmenu`, e.Resize = `resize`, e.SelectionChange = `selectionchange`, e.VisibilityChange = `visibilitychange`
    })(Z ||= {}), (function(e) {
        e.Space = `Space`, e.Down = `ArrowDown`, e.Right = `ArrowRight`, e.Left = `ArrowLeft`, e.Up = `ArrowUp`, e.Esc = `Escape`, e.Enter = `Enter`, e.Tab = `Tab`
    })(Q ||= {}), jt = {
        start: [Q.Space, Q.Enter],
        cancel: [Q.Esc],
        end: [Q.Space, Q.Enter, Q.Tab]
    }, Mt = (e, t) => {
        let {
            currentCoordinates: n
        } = t;
        switch (e.code) {
            case Q.Right:
                return {
                    ...n, x: n.x + 25
                };
            case Q.Left:
                return {
                    ...n, x: n.x - 25
                };
            case Q.Down:
                return {
                    ...n, y: n.y + 25
                };
            case Q.Up:
                return {
                    ...n, y: n.y - 25
                }
        }
    }, Nt = class {
        constructor(e) {
            this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
            let {
                event: {
                    target: t
                }
            } = e;
            this.props = e, this.listeners = new At(d(t)), this.windowListeners = new At(s(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach()
        }
        attach() {
            this.handleStart(), this.windowListeners.add(Z.Resize, this.handleCancel), this.windowListeners.add(Z.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Z.Keydown, this.handleKeyDown))
        }
        handleStart() {
            let {
                activeNode: e,
                onStart: t
            } = this.props, n = e.node.current;
            n && Ae(n), t(Y)
        }
        handleKeyDown(e) {
            if (x(e)) {
                let {
                    active: t,
                    context: n,
                    options: r
                } = this.props, {
                    keyboardCodes: i = jt,
                    coordinateGetter: a = Mt,
                    scrollBehavior: o = `smooth`
                } = r, {
                    code: s
                } = e;
                if (i.end.includes(s)) {
                    this.handleEnd(e);
                    return
                }
                if (i.cancel.includes(s)) {
                    this.handleCancel(e);
                    return
                }
                let {
                    collisionRect: c
                } = n.current, l = c ? {
                    x: c.left,
                    y: c.top
                } : Y;
                this.referenceCoordinates ||= l;
                let u = a(e, {
                    active: t,
                    context: n.current,
                    currentCoordinates: l
                });
                if (u) {
                    let t = A(u, l),
                        r = {
                            x: 0,
                            y: 0
                        },
                        {
                            scrollableAncestors: i
                        } = n.current;
                    for (let n of i) {
                        let i = e.code,
                            {
                                isTop: a,
                                isRight: s,
                                isLeft: c,
                                isBottom: l,
                                maxScroll: d,
                                minScroll: f
                            } = K(n),
                            p = Ee(n),
                            m = {
                                x: Math.min(i === Q.Right ? p.right - p.width / 2 : p.right, Math.max(i === Q.Right ? p.left : p.left + p.width / 2, u.x)),
                                y: Math.min(i === Q.Down ? p.bottom - p.height / 2 : p.bottom, Math.max(i === Q.Down ? p.top : p.top + p.height / 2, u.y))
                            },
                            h = i === Q.Right && !s || i === Q.Left && !c,
                            g = i === Q.Down && !l || i === Q.Up && !a;
                        if (h && m.x !== u.x) {
                            let e = n.scrollLeft + t.x,
                                a = i === Q.Right && e <= d.x || i === Q.Left && e >= f.x;
                            if (a && !t.y) {
                                n.scrollTo({
                                    left: e,
                                    behavior: o
                                });
                                return
                            }
                            a ? r.x = n.scrollLeft - e : r.x = i === Q.Right ? n.scrollLeft - d.x : n.scrollLeft - f.x, r.x && n.scrollBy({
                                left: -r.x,
                                behavior: o
                            });
                            break
                        } else if (g && m.y !== u.y) {
                            let e = n.scrollTop + t.y,
                                a = i === Q.Down && e <= d.y || i === Q.Up && e >= f.y;
                            if (a && !t.x) {
                                n.scrollTo({
                                    top: e,
                                    behavior: o
                                });
                                return
                            }
                            a ? r.y = n.scrollTop - e : r.y = i === Q.Down ? n.scrollTop - d.y : n.scrollTop - f.y, r.y && n.scrollBy({
                                top: -r.y,
                                behavior: o
                            });
                            break
                        }
                    }
                    this.handleMove(e, k(A(u, this.referenceCoordinates), r))
                }
            }
        }
        handleMove(e, t) {
            let {
                onMove: n
            } = this.props;
            e.preventDefault(), n(t)
        }
        handleEnd(e) {
            let {
                onEnd: t
            } = this.props;
            e.preventDefault(), this.detach(), t()
        }
        handleCancel(e) {
            let {
                onCancel: t
            } = this.props;
            e.preventDefault(), this.detach(), t()
        }
        detach() {
            this.listeners.removeAll(), this.windowListeners.removeAll()
        }
    }, Nt.activators = [{
        eventName: `onKeyDown`,
        handler: (e, t, n) => {
            let {
                keyboardCodes: r = jt,
                onActivation: i
            } = t, {
                active: a
            } = n, {
                code: o
            } = e.nativeEvent;
            if (r.start.includes(o)) {
                let t = a.activatorNode.current;
                return t && e.target !== t ? !1 : (e.preventDefault(), i?.({
                    event: e.nativeEvent
                }), !0)
            }
            return !1
        }
    }], Pt = class {
        constructor(e, t, n) {
            n === void 0 && (n = je(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
            let {
                event: r
            } = e, {
                target: i
            } = r;
            this.props = e, this.events = t, this.document = d(i), this.documentListeners = new At(this.document), this.listeners = new At(n), this.windowListeners = new At(s(i)), this.initialCoordinates = C(r) ?? Y, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach()
        }
        attach() {
            let {
                events: e,
                props: {
                    options: {
                        activationConstraint: t,
                        bypassActivationConstraint: n
                    }
                }
            } = this;
            if (this.listeners.add(e.move.name, this.handleMove, {
                    passive: !1
                }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(Z.Resize, this.handleCancel), this.windowListeners.add(Z.DragStart, Ne), this.windowListeners.add(Z.VisibilityChange, this.handleCancel), this.windowListeners.add(Z.ContextMenu, Ne), this.documentListeners.add(Z.Keydown, this.handleKeydown), t) {
                if (n != null && n({
                        event: this.props.event,
                        activeNode: this.props.activeNode,
                        options: this.props.options
                    })) return this.handleStart();
                if (Ie(t)) {
                    this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
                    return
                }
                if (Fe(t)) {
                    this.handlePending(t);
                    return
                }
            }
            this.handleStart()
        }
        detach() {
            this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null)
        }
        handlePending(e, t) {
            let {
                active: n,
                onPending: r
            } = this.props;
            r(n, e, this.initialCoordinates, t)
        }
        handleStart() {
            let {
                initialCoordinates: e
            } = this, {
                onStart: t
            } = this.props;
            e && (this.activated = !0, this.documentListeners.add(Z.Click, Pe, {
                capture: !0
            }), this.removeTextSelection(), this.documentListeners.add(Z.SelectionChange, this.removeTextSelection), t(e))
        }
        handleMove(e) {
            let {
                activated: t,
                initialCoordinates: n,
                props: r
            } = this, {
                onMove: i,
                options: {
                    activationConstraint: a
                }
            } = r;
            if (!n) return;
            let o = C(e) ?? Y,
                s = A(n, o);
            if (!t && a) {
                if (Fe(a)) {
                    if (a.tolerance != null && Me(s, a.tolerance)) return this.handleCancel();
                    if (Me(s, a.distance)) return this.handleStart()
                }
                if (Ie(a) && Me(s, a.tolerance)) return this.handleCancel();
                this.handlePending(a, s);
                return
            }
            e.cancelable && e.preventDefault(), i(o)
        }
        handleEnd() {
            let {
                onAbort: e,
                onEnd: t
            } = this.props;
            this.detach(), this.activated || e(this.props.active), t()
        }
        handleCancel() {
            let {
                onAbort: e,
                onCancel: t
            } = this.props;
            this.detach(), this.activated || e(this.props.active), t()
        }
        handleKeydown(e) {
            e.code === Q.Esc && this.handleCancel()
        }
        removeTextSelection() {
            var e;
            (e = this.document.getSelection()) == null || e.removeAllRanges()
        }
    }, Ft = {
        cancel: {
            name: `pointercancel`
        },
        move: {
            name: `pointermove`
        },
        end: {
            name: `pointerup`
        }
    }, It = class extends Pt {
        constructor(e) {
            let {
                event: t
            } = e, n = d(t.target);
            super(e, Ft, n)
        }
    }, It.activators = [{
        eventName: `onPointerDown`,
        handler: (e, t) => {
            let {
                nativeEvent: n
            } = e, {
                onActivation: r
            } = t;
            return !n.isPrimary || n.button !== 0 ? !1 : (r?.({
                event: n
            }), !0)
        }
    }], Lt = {
        move: {
            name: `mousemove`
        },
        end: {
            name: `mouseup`
        }
    }, (function(e) {
        e[e.RightClick = 2] = `RightClick`
    })(Rt ||= {}), zt = class extends Pt {
        constructor(e) {
            super(e, Lt, d(e.event.target))
        }
    }, zt.activators = [{
        eventName: `onMouseDown`,
        handler: (e, t) => {
            let {
                nativeEvent: n
            } = e, {
                onActivation: r
            } = t;
            return n.button === Rt.RightClick ? !1 : (r?.({
                event: n
            }), !0)
        }
    }], Bt = {
        cancel: {
            name: `touchcancel`
        },
        move: {
            name: `touchmove`
        },
        end: {
            name: `touchend`
        }
    }, Vt = class extends Pt {
        constructor(e) {
            super(e, Bt)
        }
        static setup() {
            return window.addEventListener(Bt.move.name, e, {
                    capture: !1,
                    passive: !1
                }),
                function() {
                    window.removeEventListener(Bt.move.name, e)
                };

            function e() {}
        }
    }, Vt.activators = [{
        eventName: `onTouchStart`,
        handler: (e, t) => {
            let {
                nativeEvent: n
            } = e, {
                onActivation: r
            } = t, {
                touches: i
            } = n;
            return i.length > 1 ? !1 : (r?.({
                event: n
            }), !0)
        }
    }], (function(e) {
        e[e.Pointer = 0] = `Pointer`, e[e.DraggableRect = 1] = `DraggableRect`
    })(Ht ||= {}), (function(e) {
        e[e.TreeOrder = 0] = `TreeOrder`, e[e.ReversedTreeOrder = 1] = `ReversedTreeOrder`
    })(Ut ||= {}), Wt = {
        x: {
            [X.Backward]: !1,
            [X.Forward]: !1
        },
        y: {
            [X.Backward]: !1,
            [X.Forward]: !1
        }
    }, (function(e) {
        e[e.Always = 0] = `Always`, e[e.BeforeDragging = 1] = `BeforeDragging`, e[e.WhileDragging = 2] = `WhileDragging`
    })(Gt ||= {}), (function(e) {
        e.Optimized = `optimized`
    })(Kt ||= {}), qt = new Map, Jt = [], Yt = [], Xt = [{
        sensor: It,
        options: {}
    }, {
        sensor: Nt,
        options: {}
    }], Zt = {
        current: {}
    }, Qt = {
        draggable: {
            measure: H
        },
        droppable: {
            measure: H,
            strategy: Gt.WhileDragging,
            frequency: Kt.Optimized
        },
        dragOverlay: {
            measure: V
        }
    }, $t = class extends Map {
        get(e) {
            return e == null ? void 0 : super.get(e) ?? void 0
        }
        toArray() {
            return Array.from(this.values())
        }
        getEnabled() {
            return this.toArray().filter(e => {
                let {
                    disabled: t
                } = e;
                return !t
            })
        }
        getNodeFor(e) {
            return this.get(e)?.node.current ?? void 0
        }
    }, en = {
        activatorEvent: null,
        active: null,
        activeNode: null,
        activeNodeRect: null,
        collisions: null,
        containerNodeRect: null,
        draggableNodes: new Map,
        droppableRects: new Map,
        droppableContainers: new $t,
        over: null,
        dragOverlay: {
            nodeRef: {
                current: null
            },
            rect: null,
            setRef: se
        },
        scrollableAncestors: [],
        scrollableAncestorRects: [],
        measuringConfiguration: Qt,
        measureDroppableContainers: se,
        windowRect: null,
        measuringScheduled: !1
    }, tn = {
        activatorEvent: null,
        activators: [],
        active: null,
        activeNodeRect: null,
        ariaDescribedById: {
            draggable: ``
        },
        dispatch: se,
        draggableNodes: new Map,
        over: null,
        measureDroppableContainers: se
    }, nn = (0, q.createContext)(tn), rn = (0, q.createContext)(en), an = (0, q.createContext)({
        ...Y,
        scaleX: 1,
        scaleY: 1
    }), (function(e) {
        e[e.Uninitialized = 0] = `Uninitialized`, e[e.Initializing = 1] = `Initializing`, e[e.Initialized = 2] = `Initialized`
    })($ ||= {}), on = (0, q.memo)(function(e) {
        let {
            id: t,
            accessibility: n,
            autoScroll: r = !0,
            children: i,
            sensors: a = Xt,
            collisionDetection: o = wt,
            measuring: c,
            modifiers: l,
            ...u
        } = e, [d, f] = (0, q.useReducer)(at, void 0, it), [p, h] = ae(), [g, _] = (0, q.useState)($.Uninitialized), y = g === $.Initialized, {
            draggable: {
                active: b,
                nodes: x,
                translate: S
            },
            droppable: {
                containers: w
            }
        } = d, T = b == null ? null : x.get(b), E = (0, q.useRef)({
            initial: null,
            translated: null
        }), O = (0, q.useMemo)(() => b == null ? null : {
            id: b,
            data: T?.data ?? Zt,
            rect: E
        }, [b, T]), A = (0, q.useRef)(null), [j, ee] = (0, q.useState)(null), [M, te] = (0, q.useState)(null), N = m(u, Object.values(u)), ne = v(`DndDescribedBy`, t), P = (0, q.useMemo)(() => w.getEnabled(), [w]), F = ct(c), {
            droppableRects: re,
            measureDroppableContainers: ie,
            measuringScheduled: se
        } = Ve(P, {
            dragging: y,
            dependencies: [S.x, S.y],
            config: F.droppable
        }), I = ze(x, b), ce = (0, q.useMemo)(() => M ? C(M) : null, [M]), le = Me(), ue = Ue(I, F.draggable.measure);
        lt({
            activeNode: b == null ? null : x.get(b),
            config: le.layoutShiftCompensation,
            initialRect: ue,
            measure: F.draggable.measure
        });
        let L = qe(I, F.draggable.measure, ue),
            de = qe(I ? I.parentElement : null),
            R = (0, q.useRef)({
                activatorEvent: null,
                active: null,
                activeNode: I,
                collisionRect: null,
                collisions: null,
                droppableRects: re,
                draggableNodes: x,
                draggingNode: null,
                draggingNodeRect: null,
                droppableContainers: w,
                over: null,
                scrollableAncestors: [],
                scrollAdjustedTranslate: null
            }),
            pe = w.getNodeFor(R.current.over?.id),
            z = rt({
                measure: F.dragOverlay.measure
            }),
            he = z.nodeRef.current ?? I,
            B = y ? z.rect ?? L : null,
            ge = !!(z.nodeRef.current && z.rect),
            _e = Je(ge ? null : L),
            V = et(he ? s(he) : null),
            H = Ye(y ? pe ?? I : null),
            ve = tt(H),
            ye = st(l, {
                transform: {
                    x: S.x - _e.x,
                    y: S.y - _e.y,
                    scaleX: 1,
                    scaleY: 1
                },
                activatorEvent: M,
                active: O,
                activeNodeRect: L,
                containerNodeRect: de,
                draggingNodeRect: B,
                over: R.current.over,
                overlayNodeRect: z.rect,
                scrollableAncestors: H,
                scrollableAncestorRects: ve,
                windowRect: V
            }),
            be = ce ? k(ce, S) : null,
            xe = Xe(H),
            Se = Ze(xe),
            Ce = Ze(xe, [L]),
            U = k(ye, Se),
            W = B ? Tt(B, ye) : null,
            G = O && W ? o({
                active: O,
                collisionRect: W,
                droppableRects: re,
                droppableContainers: P,
                pointerCoordinates: be
            }) : null,
            we = fe(G, `id`),
            [K, Te] = (0, q.useState)(null),
            Ee = me(ge ? ye : k(ye, Ce), K?.rect ?? null, L),
            De = (0, q.useRef)(null),
            Oe = (0, q.useCallback)((e, t) => {
                let {
                    sensor: n,
                    options: r
                } = t;
                if (A.current == null) return;
                let i = x.get(A.current);
                if (!i) return;
                let a = e.nativeEvent,
                    o = new n({
                        active: A.current,
                        activeNode: i,
                        event: a,
                        options: r,
                        context: R,
                        onAbort(e) {
                            if (!x.get(e)) return;
                            let {
                                onDragAbort: t
                            } = N.current, n = {
                                id: e
                            };
                            t?.(n), p({
                                type: `onDragAbort`,
                                event: n
                            })
                        },
                        onPending(e, t, n, r) {
                            if (!x.get(e)) return;
                            let {
                                onDragPending: i
                            } = N.current, a = {
                                id: e,
                                constraint: t,
                                initialCoordinates: n,
                                offset: r
                            };
                            i?.(a), p({
                                type: `onDragPending`,
                                event: a
                            })
                        },
                        onStart(e) {
                            let t = A.current;
                            if (t == null) return;
                            let n = x.get(t);
                            if (!n) return;
                            let {
                                onDragStart: r
                            } = N.current, i = {
                                activatorEvent: a,
                                active: {
                                    id: t,
                                    data: n.data,
                                    rect: E
                                }
                            };
                            (0, vt.unstable_batchedUpdates)(() => {
                                r?.(i), _($.Initializing), f({
                                    type: J.DragStart,
                                    initialCoordinates: e,
                                    active: t
                                }), p({
                                    type: `onDragStart`,
                                    event: i
                                }), ee(De.current), te(a)
                            })
                        },
                        onMove(e) {
                            f({
                                type: J.DragMove,
                                coordinates: e
                            })
                        },
                        onEnd: s(J.DragEnd),
                        onCancel: s(J.DragCancel)
                    });
                De.current = o;

                function s(e) {
                    return async function() {
                        let {
                            active: t,
                            collisions: n,
                            over: r,
                            scrollAdjustedTranslate: i
                        } = R.current, o = null;
                        if (t && i) {
                            let {
                                cancelDrop: s
                            } = N.current;
                            o = {
                                activatorEvent: a,
                                active: t,
                                collisions: n,
                                delta: i,
                                over: r
                            }, e === J.DragEnd && typeof s == `function` && await Promise.resolve(s(o)) && (e = J.DragCancel)
                        }
                        A.current = null, (0, vt.unstable_batchedUpdates)(() => {
                            f({
                                type: e
                            }), _($.Uninitialized), Te(null), ee(null), te(null), De.current = null;
                            let t = e === J.DragEnd ? `onDragEnd` : `onDragCancel`;
                            if (o) {
                                let e = N.current[t];
                                e?.(o), p({
                                    type: t,
                                    event: o
                                })
                            }
                        })
                    }
                }
            }, [x]),
            ke = Be(a, (0, q.useCallback)((e, t) => (n, r) => {
                let i = n.nativeEvent,
                    a = x.get(r);
                if (A.current !== null || !a || i.dndKit || i.defaultPrevented) return;
                let o = {
                    active: a
                };
                e(n, t.options, o) === !0 && (i.dndKit = {
                    capturedBy: t.sensor
                }, A.current = r, Oe(n, t))
            }, [x, Oe]));
        Qe(a), D(() => {
            L && g === $.Initializing && _($.Initialized)
        }, [L, g]), (0, q.useEffect)(() => {
            let {
                onDragMove: e
            } = N.current, {
                active: t,
                activatorEvent: n,
                collisions: r,
                over: i
            } = R.current;
            if (!t || !n) return;
            let a = {
                active: t,
                activatorEvent: n,
                collisions: r,
                delta: {
                    x: U.x,
                    y: U.y
                },
                over: i
            };
            (0, vt.unstable_batchedUpdates)(() => {
                e?.(a), p({
                    type: `onDragMove`,
                    event: a
                })
            })
        }, [U.x, U.y]), (0, q.useEffect)(() => {
            let {
                active: e,
                activatorEvent: t,
                collisions: n,
                droppableContainers: r,
                scrollAdjustedTranslate: i
            } = R.current;
            if (!e || A.current == null || !t || !i) return;
            let {
                onDragOver: a
            } = N.current, o = r.get(we), s = o && o.rect.current ? {
                id: o.id,
                rect: o.rect.current,
                data: o.data,
                disabled: o.disabled
            } : null, c = {
                active: e,
                activatorEvent: t,
                collisions: n,
                delta: {
                    x: i.x,
                    y: i.y
                },
                over: s
            };
            (0, vt.unstable_batchedUpdates)(() => {
                Te(s), a?.(c), p({
                    type: `onDragOver`,
                    event: c
                })
            })
        }, [we]), D(() => {
            R.current = {
                activatorEvent: M,
                active: O,
                activeNode: I,
                collisionRect: W,
                collisions: G,
                droppableRects: re,
                draggableNodes: x,
                draggingNode: he,
                draggingNodeRect: B,
                droppableContainers: w,
                over: K,
                scrollableAncestors: H,
                scrollAdjustedTranslate: U
            }, E.current = {
                initial: B,
                translated: W
            }
        }, [O, I, G, W, x, he, B, re, w, K, H, U]), Le({
            ...le,
            delta: S,
            draggingRect: W,
            pointerCoordinates: be,
            scrollableAncestors: H,
            scrollableAncestorRects: ve
        });
        let Ae = (0, q.useMemo)(() => ({
                active: O,
                activeNode: I,
                activeNodeRect: L,
                activatorEvent: M,
                collisions: G,
                containerNodeRect: de,
                dragOverlay: z,
                draggableNodes: x,
                droppableContainers: w,
                droppableRects: re,
                over: K,
                measureDroppableContainers: ie,
                scrollableAncestors: H,
                scrollableAncestorRects: ve,
                measuringConfiguration: F,
                measuringScheduled: se,
                windowRect: V
            }), [O, I, L, M, G, de, z, x, w, re, K, ie, H, ve, F, se, V]),
            je = (0, q.useMemo)(() => ({
                activatorEvent: M,
                activators: ke,
                active: O,
                activeNodeRect: L,
                ariaDescribedById: {
                    draggable: ne
                },
                dispatch: f,
                draggableNodes: x,
                over: K,
                measureDroppableContainers: ie
            }), [M, ke, O, L, f, ne, x, K, ie]);
        return q.createElement(yt.Provider, {
            value: h
        }, q.createElement(nn.Provider, {
            value: je
        }, q.createElement(rn.Provider, {
            value: Ae
        }, q.createElement(an.Provider, {
            value: Ee
        }, i)), q.createElement(ot, {
            disabled: n?.restoreFocus === !1
        })), q.createElement(oe, {
            ...n,
            hiddenTextDescribedById: ne
        }));

        function Me() {
            let e = j?.autoScrollEnabled === !1,
                t = typeof r == `object` ? r.enabled === !1 : r === !1,
                n = y && !e && !t;
            return typeof r == `object` ? {
                ...r,
                enabled: n
            } : {
                enabled: n
            }
        }
    }), sn = (0, q.createContext)(null), cn = `button`, ln = `Draggable`, un = `Droppable`, dn = {
        timeout: 25
    }, fn = {
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1
    }, pn = {
        position: `fixed`,
        touchAction: `none`
    }, mn = e => x(e) ? `transform 250ms ease` : void 0, hn = (0, q.forwardRef)((e, t) => {
        let {
            as: n,
            activatorEvent: r,
            adjustScale: i,
            children: a,
            className: o,
            rect: s,
            style: c,
            transform: l,
            transition: u = mn
        } = e;
        if (!s) return null;
        let d = i ? l : {
                ...l,
                scaleX: 1,
                scaleY: 1
            },
            f = {
                ...pn,
                width: s.width,
                height: s.height,
                top: s.top,
                left: s.left,
                transform: j.Transform.toString(d),
                transformOrigin: i && r ? ue(r, s) : void 0,
                transition: typeof u == `function` ? u(r) : u,
                ...c
            };
        return q.createElement(n, {
            className: o,
            style: f,
            ref: t
        }, a)
    }), gn = e => t => {
        let {
            active: n,
            dragOverlay: r
        } = t, i = {}, {
            styles: a,
            className: o
        } = e;
        if (a != null && a.active)
            for (let [e, t] of Object.entries(a.active)) t !== void 0 && (i[e] = n.node.style.getPropertyValue(e), n.node.style.setProperty(e, t));
        if (a != null && a.dragOverlay)
            for (let [e, t] of Object.entries(a.dragOverlay)) t !== void 0 && r.node.style.setProperty(e, t);
        return o != null && o.active && n.node.classList.add(o.active), o != null && o.dragOverlay && r.node.classList.add(o.dragOverlay),
            function() {
                for (let [e, t] of Object.entries(i)) n.node.style.setProperty(e, t);
                o != null && o.active && n.node.classList.remove(o.active)
            }
    }, _n = e => {
        let {
            transform: {
                initial: t,
                final: n
            }
        } = e;
        return [{
            transform: j.Transform.toString(t)
        }, {
            transform: j.Transform.toString(n)
        }]
    }, vn = {
        duration: 250,
        easing: `ease`,
        keyframes: _n,
        sideEffects: gn({
            styles: {
                active: {
                    opacity: `0`
                }
            }
        })
    }, yn = 0, bn = q.memo(e => {
        let {
            adjustScale: t = !1,
            children: n,
            dropAnimation: r,
            style: i,
            transition: a,
            modifiers: o,
            wrapperElement: s = `div`,
            className: c,
            zIndex: l = 999
        } = e, {
            activatorEvent: u,
            active: d,
            activeNodeRect: f,
            containerNodeRect: p,
            draggableNodes: m,
            droppableContainers: h,
            dragOverlay: g,
            over: _,
            measuringConfiguration: v,
            scrollableAncestors: y,
            scrollableAncestorRects: b,
            windowRect: x
        } = dt(), S = (0, q.useContext)(an), C = _t(d?.id), w = st(o, {
            activatorEvent: u,
            active: d,
            activeNodeRect: f,
            containerNodeRect: p,
            draggingNodeRect: g.rect,
            over: _,
            overlayNodeRect: g.rect,
            scrollableAncestors: y,
            scrollableAncestorRects: b,
            transform: S,
            windowRect: x
        }), T = He(f), E = ht({
            config: r,
            draggableNodes: m,
            droppableContainers: h,
            measuringConfiguration: v
        }), D = T ? g.setRef : void 0;
        return q.createElement(mt, null, q.createElement(pt, {
            animation: E
        }, d && C ? q.createElement(hn, {
            key: C,
            id: d.id,
            ref: D,
            as: s,
            activatorEvent: u,
            adjustScale: t,
            className: c,
            transition: a,
            rect: T,
            style: {
                zIndex: l,
                ...i
            },
            transform: w
        }, n) : null))
    })
}));
export {
    v as C, D as S, j as _, It as a, A as b, V as c, xn as d, dt as f, ce as g, I as h, Nt as i, fe as l, ft as m, bn as n, St as o, ut as p, Q as r, Ct as s, on as t, xe as u, M as v, i as x, x as y
};
//# sourceMappingURL=3440a47b-zixhz7o21k6pduwo.js.map