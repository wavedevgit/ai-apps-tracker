import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Vn as n
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    C as r,
    S as i,
    _ as a,
    b as o,
    c as s,
    d as c,
    f as l,
    l as u,
    m as d,
    p as f,
    r as p,
    s as m,
    u as h,
    v as g,
    x as _,
    y as v
} from "./3440a47b-zixhz7o21k6pduwo.js";

function y(e, t, n) {
    let r = e.slice();
    return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r
}

function b(e, t) {
    return e.reduce((e, n, r) => {
        let i = t.get(n);
        return i && (e[r] = i), e
    }, Array(e.length))
}

function x(e) {
    return e !== null && e >= 0
}

function S(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t[n]) return !1;
    return !0
}

function C(e) {
    return typeof e == `boolean` ? {
        draggable: e,
        droppable: e
    } : e
}

function w(e, t, n) {
    let r = e[t],
        i = e[t - 1],
        a = e[t + 1];
    return !r || !i && !a ? 0 : n < t ? i ? r.left - (i.left + i.width) : a.left - (r.left + r.width) : a ? a.left - (r.left + r.width) : r.left - (i.left + i.width)
}

function T(e, t, n) {
    let r = e[t],
        i = e[t - 1],
        a = e[t + 1];
    return r ? n < t ? i ? r.top - (i.top + i.height) : a ? a.top - (r.top + r.height) : 0 : a ? a.top - (r.top + r.height) : i ? r.top - (i.top + i.height) : 0 : 0
}

function E(e) {
    let {
        children: t,
        id: n,
        items: a,
        strategy: o = P,
        disabled: s = !1
    } = e, {
        active: c,
        dragOverlay: u,
        droppableRects: d,
        over: f,
        measureDroppableContainers: p
    } = l(), m = r(L, n), h = u.rect !== null, g = (0, j.useMemo)(() => a.map(e => typeof e == `object` && `id` in e ? e.id : e), [a]), _ = c != null, v = c ? g.indexOf(c.id) : -1, y = f ? g.indexOf(f.id) : -1, x = (0, j.useRef)(g), w = !S(g, x.current), T = y !== -1 && v === -1 || w, E = C(s);
    i(() => {
        w && _ && p(g)
    }, [w, g, _, p]), (0, j.useEffect)(() => {
        x.current = g
    }, [g]);
    let ee = (0, j.useMemo)(() => ({
        activeIndex: v,
        containerId: m,
        disabled: E,
        disableTransforms: T,
        items: g,
        overIndex: y,
        useDragOverlay: h,
        sortedRects: b(g, d),
        strategy: o
    }), [v, m, E.draggable, E.droppable, T, g, y, d, h, o]);
    return j.createElement(R.Provider, {
        value: ee
    }, t)
}

function ee(e) {
    let {
        disabled: t,
        index: n,
        node: r,
        rect: a
    } = e, [o, c] = (0, j.useState)(null), l = (0, j.useRef)(n);
    return i(() => {
        if (!t && n !== l.current && r.current) {
            let e = a.current;
            if (e) {
                let t = s(r.current, {
                        ignoreTransform: !0
                    }),
                    n = {
                        x: e.left - t.left,
                        y: e.top - t.top,
                        scaleX: e.width / t.width,
                        scaleY: e.height / t.height
                    };
                (n.x || n.y) && c(n)
            }
        }
        n !== l.current && (l.current = n)
    }, [t, n, r, a]), (0, j.useEffect)(() => {
        o && c(null)
    }, [o]), o
}

function D(e) {
    let {
        animateLayoutChanges: t = B,
        attributes: n,
        disabled: r,
        data: i,
        getNewIndex: o = z,
        id: s,
        strategy: c,
        resizeObserverConfig: l,
        transition: u = V
    } = e, {
        items: p,
        containerId: m,
        activeIndex: h,
        disabled: g,
        disableTransforms: y,
        sortedRects: b,
        overIndex: S,
        useDragOverlay: C,
        strategy: w
    } = (0, j.useContext)(R), T = te(r, g), E = p.indexOf(s), D = (0, j.useMemo)(() => ({
        sortable: {
            containerId: m,
            index: E,
            items: p
        },
        ...i
    }), [m, i, E, p]), O = (0, j.useMemo)(() => p.slice(p.indexOf(s)), [p, s]), {
        rect: k,
        node: A,
        isOver: M,
        setNodeRef: N
    } = d({
        id: s,
        data: D,
        disabled: T.droppable,
        resizeObserverConfig: {
            updateMeasurementsFor: O,
            ...l
        }
    }), {
        active: P,
        activatorEvent: F,
        activeNodeRect: I,
        attributes: L,
        setNodeRef: G,
        listeners: K,
        isDragging: q,
        over: ne,
        setActivatorNodeRef: re,
        transform: ie
    } = f({
        id: s,
        data: D,
        attributes: {
            ...W,
            ...n
        },
        disabled: T.draggable
    }), ae = _(N, G), J = !!P, Y = J && !y && x(h) && x(S), X = !C && q, oe = Y ? (X && Y ? ie : null) ?? (c ?? w)({
        rects: b,
        activeNodeRect: I,
        activeIndex: h,
        overIndex: S,
        index: E
    }) : null, Z = x(h) && x(S) ? o({
        id: s,
        items: p,
        activeIndex: h,
        overIndex: S
    }) : E, Q = P?.id, $ = (0, j.useRef)({
        activeId: Q,
        items: p,
        newIndex: Z,
        containerId: m
    }), se = p !== $.current.items, ce = t({
        active: P,
        containerId: m,
        isDragging: q,
        isSorting: J,
        id: s,
        index: E,
        items: p,
        newIndex: $.current.newIndex,
        previousItems: $.current.items,
        previousContainerId: $.current.containerId,
        transition: u,
        wasDragging: $.current.activeId != null
    }), le = ee({
        disabled: !ce,
        index: E,
        node: A,
        rect: k
    });
    return (0, j.useEffect)(() => {
        J && $.current.newIndex !== Z && ($.current.newIndex = Z), m !== $.current.containerId && ($.current.containerId = m), p !== $.current.items && ($.current.items = p)
    }, [J, Z, m, p]), (0, j.useEffect)(() => {
        if (Q === $.current.activeId) return;
        if (Q != null && $.current.activeId == null) {
            $.current.activeId = Q;
            return
        }
        let e = setTimeout(() => {
            $.current.activeId = Q
        }, 50);
        return () => clearTimeout(e)
    }, [Q]), {
        active: P,
        activeIndex: h,
        attributes: L,
        data: D,
        rect: k,
        index: E,
        newIndex: Z,
        items: p,
        isOver: M,
        isSorting: J,
        isDragging: q,
        listeners: K,
        node: A,
        overIndex: S,
        over: ne,
        setNodeRef: ae,
        setActivatorNodeRef: re,
        setDroppableNodeRef: N,
        setDraggableNodeRef: G,
        transform: le ?? oe,
        transition: ue()
    };

    function ue() {
        if (le || se && $.current.newIndex === E) return U;
        if (!(X && !v(F) || !u) && (J || ce)) return a.Transition.toString({
            ...u,
            property: H
        })
    }
}

function te(e, t) {
    return typeof e == `boolean` ? {
        draggable: e,
        droppable: !1
    } : {
        draggable: e?.draggable ?? t.draggable,
        droppable: e?.droppable ?? t.droppable
    }
}

function O(e) {
    if (!e) return !1;
    let t = e.data.current;
    return !!(t && `sortable` in t && typeof t.sortable == `object` && `containerId` in t.sortable && `items` in t.sortable && `index` in t.sortable)
}

function k(e, t) {
    return !O(e) || !O(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId
}

function A(e, t) {
    return !O(e) || !O(t) || !k(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index
}
var j, M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q = e((() => {
    j = t(n()), c(), g(), M = {
        scaleX: 1,
        scaleY: 1
    }, N = e => {
        let {
            rects: t,
            activeNodeRect: n,
            activeIndex: r,
            overIndex: i,
            index: a
        } = e, o = t[r] ?? n;
        if (!o) return null;
        let s = w(t, a, r);
        if (a === r) {
            let e = t[i];
            return e ? {
                x: r < i ? e.left + e.width - (o.left + o.width) : e.left - o.left,
                y: 0,
                ...M
            } : null
        }
        return a > r && a <= i ? {
            x: -o.width - s,
            y: 0,
            ...M
        } : a < r && a >= i ? {
            x: o.width + s,
            y: 0,
            ...M
        } : {
            x: 0,
            y: 0,
            ...M
        }
    }, P = e => {
        let {
            rects: t,
            activeIndex: n,
            overIndex: r,
            index: i
        } = e, a = y(t, r, n), o = t[i], s = a[i];
        return !s || !o ? null : {
            x: s.left - o.left,
            y: s.top - o.top,
            scaleX: s.width / o.width,
            scaleY: s.height / o.height
        }
    }, F = {
        scaleX: 1,
        scaleY: 1
    }, I = e => {
        let {
            activeIndex: t,
            activeNodeRect: n,
            index: r,
            rects: i,
            overIndex: a
        } = e, o = i[t] ?? n;
        if (!o) return null;
        if (r === t) {
            let e = i[a];
            return e ? {
                x: 0,
                y: t < a ? e.top + e.height - (o.top + o.height) : e.top - o.top,
                ...F
            } : null
        }
        let s = T(i, r, t);
        return r > t && r <= a ? {
            x: 0,
            y: -o.height - s,
            ...F
        } : r < t && r >= a ? {
            x: 0,
            y: o.height + s,
            ...F
        } : {
            x: 0,
            y: 0,
            ...F
        }
    }, L = `Sortable`, R = j.createContext({
        activeIndex: -1,
        containerId: L,
        disableTransforms: !1,
        items: [],
        overIndex: -1,
        useDragOverlay: !1,
        sortedRects: [],
        strategy: P,
        disabled: {
            draggable: !1,
            droppable: !1
        }
    }), z = e => {
        let {
            id: t,
            items: n,
            activeIndex: r,
            overIndex: i
        } = e;
        return y(n, r, i).indexOf(t)
    }, B = e => {
        let {
            containerId: t,
            isSorting: n,
            wasDragging: r,
            index: i,
            items: a,
            newIndex: o,
            previousItems: s,
            previousContainerId: c,
            transition: l
        } = e;
        return !l || !r || s !== a && i === o ? !1 : n ? !0 : o !== i && t === c
    }, V = {
        duration: 200,
        easing: `ease`
    }, H = `transform`, U = a.Transition.toString({
        property: H,
        duration: 0,
        easing: `linear`
    }), W = {
        roleDescription: `sortable`
    }, G = [p.Down, p.Right, p.Up, p.Left], K = (e, t) => {
        let {
            context: {
                active: n,
                collisionRect: r,
                droppableRects: i,
                droppableContainers: a,
                over: s,
                scrollableAncestors: c
            }
        } = t;
        if (G.includes(e.code)) {
            if (e.preventDefault(), !n || !r) return;
            let t = [];
            a.getEnabled().forEach(n => {
                if (!n || n != null && n.disabled) return;
                let a = i.get(n.id);
                if (a) switch (e.code) {
                    case p.Down:
                        r.top < a.top && t.push(n);
                        break;
                    case p.Up:
                        r.top > a.top && t.push(n);
                        break;
                    case p.Left:
                        r.left > a.left && t.push(n);
                        break;
                    case p.Right:
                        r.left < a.left && t.push(n);
                        break
                }
            });
            let l = m({
                    active: n,
                    collisionRect: r,
                    droppableRects: i,
                    droppableContainers: t,
                    pointerCoordinates: null
                }),
                d = u(l, `id`);
            if (d === s?.id && l.length > 1 && (d = l[1].id), d != null) {
                let e = a.get(n.id),
                    t = a.get(d),
                    s = t ? i.get(t.id) : null,
                    l = t?.node.current;
                if (l && s && e && t) {
                    let n = h(l).some((e, t) => c[t] !== e),
                        i = k(e, t),
                        a = A(e, t),
                        u = n || !i ? {
                            x: 0,
                            y: 0
                        } : {
                            x: a ? r.width - s.width : 0,
                            y: a ? r.height - s.height : 0
                        },
                        d = {
                            x: s.left,
                            y: s.top
                        };
                    return u.x && u.y ? d : o(d, u)
                }
            }
        }
    }
}));
export {
    P as a, I as c, q as i, y as n, K as o, N as r, D as s, E as t
};
//# sourceMappingURL=84a03c8b-hrszvmsygwss9aud.js.map