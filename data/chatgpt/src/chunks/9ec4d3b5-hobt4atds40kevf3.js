import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bb as t,
    Fb as n,
    Gb as r,
    Hb as i,
    Ib as a,
    Jb as o,
    Kb as s,
    Lb as c,
    Mb as l,
    Nb as u,
    Pb as d,
    Rb as f,
    Ub as p,
    Vb as m,
    Wb as h,
    qb as g,
    zb as _
} from "./4813494d-dfpv67hlp00pbohr.js";

function v(e, t, r) {
    let {
        reference: i,
        floating: a
    } = e, o = h(t), s = n(t), l = c(s), u = p(t), f = o === `y`, m = i.x + i.width / 2 - a.width / 2, g = i.y + i.height / 2 - a.height / 2, _ = i[l] / 2 - a[l] / 2, v;
    switch (u) {
        case `top`:
            v = {
                x: m,
                y: i.y - a.height
            };
            break;
        case `bottom`:
            v = {
                x: m,
                y: i.y + i.height
            };
            break;
        case `right`:
            v = {
                x: i.x + i.width,
                y: g
            };
            break;
        case `left`:
            v = {
                x: i.x - a.width,
                y: g
            };
            break;
        default:
            v = {
                x: i.x,
                y: i.y
            }
    }
    switch (d(t)) {
        case `start`:
            v[s] -= _ * (r && f ? -1 : 1);
            break;
        case `end`:
            v[s] += _ * (r && f ? -1 : 1);
            break
    }
    return v
}
async function y(e, t) {
    t === void 0 && (t = {});
    let {
        x: n,
        y: r,
        platform: a,
        rects: s,
        elements: c,
        strategy: l
    } = e, {
        boundary: d = `clippingAncestors`,
        rootBoundary: f = `viewport`,
        elementContext: p = `floating`,
        altBoundary: m = !1,
        padding: h = 0
    } = u(t, e), g = i(h), _ = c[m ? p === `floating` ? `reference` : `floating` : p], v = o(await a.getClippingRect({
        element: await (a.isElement == null ? void 0 : a.isElement(_)) ?? !0 ? _ : _.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(c.floating)),
        boundary: d,
        rootBoundary: f,
        strategy: l
    })), y = p === `floating` ? {
        x: n,
        y: r,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference, b = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c.floating)), x = await (a.isElement == null ? void 0 : a.isElement(b)) && await (a.getScale == null ? void 0 : a.getScale(b)) || {
        x: 1,
        y: 1
    }, S = o(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: c,
        rect: y,
        offsetParent: b,
        strategy: l
    }) : y);
    return {
        top: (v.top - S.top + g.top) / x.y,
        bottom: (S.bottom - v.bottom + g.bottom) / x.y,
        left: (v.left - S.left + g.left) / x.x,
        right: (S.right - v.right + g.right) / x.x
    }
}
async function b(e, t) {
    let {
        placement: n,
        platform: r,
        elements: i
    } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = p(n), s = d(n), c = h(n) === `y`, l = w.has(o) ? -1 : 1, f = a && c ? -1 : 1, m = u(t, e), {
        mainAxis: g,
        crossAxis: _,
        alignmentAxis: v
    } = typeof m == `number` ? {
        mainAxis: m,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: m.mainAxis || 0,
        crossAxis: m.crossAxis || 0,
        alignmentAxis: m.alignmentAxis
    };
    return s && typeof v == `number` && (_ = s === `end` ? v * -1 : v), c ? {
        x: _ * f,
        y: g * l
    } : {
        x: g * l,
        y: _ * f
    }
}
var x, S, C, w, T, E, D, O = e((() => {
        r(), x = 50, S = async (e, t, n) => {
            let {
                placement: r = `bottom`,
                strategy: i = `absolute`,
                middleware: a = [],
                platform: o
            } = n, s = o.detectOverflow ? o : {
                ...o,
                detectOverflow: y
            }, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
                reference: e,
                floating: t,
                strategy: i
            }), {
                x: u,
                y: d
            } = v(l, r, c), f = r, p = 0, m = {};
            for (let n = 0; n < a.length; n++) {
                let h = a[n];
                if (!h) continue;
                let {
                    name: g,
                    fn: _
                } = h, {
                    x: y,
                    y: b,
                    data: S,
                    reset: C
                } = await _({
                    x: u,
                    y: d,
                    initialPlacement: r,
                    placement: f,
                    strategy: i,
                    middlewareData: m,
                    rects: l,
                    platform: s,
                    elements: {
                        reference: e,
                        floating: t
                    }
                });
                u = y ?? u, d = b ?? d, m[g] = {
                    ...m[g],
                    ...S
                }, C && p < x && (p++, typeof C == `object` && (C.placement && (f = C.placement), C.rects && (l = C.rects === !0 ? await o.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: i
                }) : C.rects), {
                    x: u,
                    y: d
                } = v(l, f, c)), n = -1)
            }
            return {
                x: u,
                y: d,
                placement: f,
                strategy: i,
                middlewareData: m
            }
        }, C = function(e) {
            return e === void 0 && (e = {}), {
                name: `flip`,
                options: e,
                async fn(n) {
                    var r;
                    let {
                        placement: i,
                        middlewareData: o,
                        rects: s,
                        initialPlacement: c,
                        platform: l,
                        elements: d
                    } = n, {
                        mainAxis: g = !0,
                        crossAxis: _ = !0,
                        fallbackPlacements: v,
                        fallbackStrategy: y = `bestFit`,
                        fallbackAxisSideDirection: b = `none`,
                        flipAlignment: x = !0,
                        ...S
                    } = u(e, n);
                    if ((r = o.arrow) != null && r.alignmentOffset) return {};
                    let C = p(i),
                        w = h(c),
                        T = p(c) === c,
                        E = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)),
                        D = v || (T || !x ? [m(c)] : f(c)),
                        O = b !== `none`;
                    !v && O && D.push(...t(c, x, b, E));
                    let k = [c, ...D],
                        A = await l.detectOverflow(n, S),
                        j = [],
                        M = o.flip?.overflows || [];
                    if (g && j.push(A[C]), _) {
                        let e = a(i, s, E);
                        j.push(A[e[0]], A[e[1]])
                    }
                    if (M = [...M, {
                            placement: i,
                            overflows: j
                        }], !j.every(e => e <= 0)) {
                        let e = (o.flip?.index || 0) + 1,
                            t = k[e];
                        if (t && (!(_ === `alignment` && w !== h(t)) || M.every(e => h(e.placement) !== w || e.overflows[0] > 0))) return {
                            data: {
                                index: e,
                                overflows: M
                            },
                            reset: {
                                placement: t
                            }
                        };
                        let n = M.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
                        if (!n) switch (y) {
                            case `bestFit`: {
                                let e = M.filter(e => {
                                    if (O) {
                                        let t = h(e.placement);
                                        return t === w || t === `y`
                                    }
                                    return !0
                                }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
                                e && (n = e);
                                break
                            }
                            case `initialPlacement`:
                                n = c;
                                break
                        }
                        if (i !== n) return {
                            reset: {
                                placement: n
                            }
                        }
                    }
                    return {}
                }
            }
        }, w = new Set([`left`, `top`]), T = function(e) {
            return e === void 0 && (e = 0), {
                name: `offset`,
                options: e,
                async fn(t) {
                    var n;
                    let {
                        x: r,
                        y: i,
                        placement: a,
                        middlewareData: o
                    } = t, s = await b(t, e);
                    return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
                        x: r + s.x,
                        y: i + s.y,
                        data: {
                            ...s,
                            placement: a
                        }
                    }
                }
            }
        }, E = function(e) {
            return e === void 0 && (e = {}), {
                name: `shift`,
                options: e,
                async fn(t) {
                    let {
                        x: n,
                        y: r,
                        placement: i,
                        platform: a
                    } = t, {
                        mainAxis: o = !0,
                        crossAxis: s = !1,
                        limiter: c = {
                            fn: e => {
                                let {
                                    x: t,
                                    y: n
                                } = e;
                                return {
                                    x: t,
                                    y: n
                                }
                            }
                        },
                        ...d
                    } = u(e, t), f = {
                        x: n,
                        y: r
                    }, m = await a.detectOverflow(t, d), g = h(p(i)), v = _(g), y = f[v], b = f[g];
                    if (o) {
                        let e = v === `y` ? `top` : `left`,
                            t = v === `y` ? `bottom` : `right`,
                            n = y + m[e],
                            r = y - m[t];
                        y = l(n, y, r)
                    }
                    if (s) {
                        let e = g === `y` ? `top` : `left`,
                            t = g === `y` ? `bottom` : `right`,
                            n = b + m[e],
                            r = b - m[t];
                        b = l(n, b, r)
                    }
                    let x = c.fn({
                        ...t,
                        [v]: y,
                        [g]: b
                    });
                    return {
                        ...x,
                        data: {
                            x: x.x - n,
                            y: x.y - r,
                            enabled: {
                                [v]: o,
                                [g]: s
                            }
                        }
                    }
                }
            }
        }, D = function(e) {
            return e === void 0 && (e = {}), {
                name: `size`,
                options: e,
                async fn(t) {
                    var n, r;
                    let {
                        placement: i,
                        rects: a,
                        platform: o,
                        elements: c
                    } = t, {
                        apply: l = () => {},
                        ...f
                    } = u(e, t), m = await o.detectOverflow(t, f), _ = p(i), v = d(i), y = h(i) === `y`, {
                        width: b,
                        height: x
                    } = a.floating, S, C;
                    _ === `top` || _ === `bottom` ? (S = _, C = v === (await (o.isRTL == null ? void 0 : o.isRTL(c.floating)) ? `start` : `end`) ? `left` : `right`) : (C = _, S = v === `end` ? `top` : `bottom`);
                    let w = x - m.top - m.bottom,
                        T = b - m.left - m.right,
                        E = g(x - m[S], w),
                        D = g(b - m[C], T),
                        O = !t.middlewareData.shift,
                        k = E,
                        A = D;
                    if ((n = t.middlewareData.shift) != null && n.enabled.x && (A = T), (r = t.middlewareData.shift) != null && r.enabled.y && (k = w), O && !v) {
                        let e = s(m.left, 0),
                            t = s(m.right, 0),
                            n = s(m.top, 0),
                            r = s(m.bottom, 0);
                        y ? A = b - 2 * (e !== 0 || t !== 0 ? e + t : s(m.left, m.right)) : k = x - 2 * (n !== 0 || r !== 0 ? n + r : s(m.top, m.bottom))
                    }
                    await l({
                        ...t,
                        availableWidth: A,
                        availableHeight: k
                    });
                    let j = await o.getDimensions(c.floating);
                    return b !== j.width || x !== j.height ? {
                        reset: {
                            rects: !0
                        }
                    } : {}
                }
            }
        }
    })),
    k, A, j, M, N, ee = e((() => {
        k = Math.min, A = Math.max, j = Math.round, M = Math.floor, N = e => ({
            x: e,
            y: e
        })
    }));

function P() {
    return typeof window < `u`
}

function F(e) {
    return te(e) ? (e.nodeName || ``).toLowerCase() : `#document`
}

function I(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function L(e) {
    return ((te(e) ? e.ownerDocument : e.document) || window.document)?.documentElement
}

function te(e) {
    return P() ? e instanceof Node || e instanceof I(e).Node : !1
}

function R(e) {
    return P() ? e instanceof Element || e instanceof I(e).Element : !1
}

function z(e) {
    return P() ? e instanceof HTMLElement || e instanceof I(e).HTMLElement : !1
}

function ne(e) {
    return !P() || typeof ShadowRoot > `u` ? !1 : e instanceof ShadowRoot || e instanceof I(e).ShadowRoot
}

function B(e) {
    let {
        overflow: t,
        overflowX: n,
        overflowY: r,
        display: i
    } = W(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== `inline` && i !== `contents`
}

function re(e) {
    return /^(table|td|th)$/.test(F(e))
}

function V(e) {
    try {
        if (e.matches(`:popover-open`)) return !0
    } catch {}
    try {
        return e.matches(`:modal`)
    } catch {
        return !1
    }
}

function H(e) {
    let t = R(e) ? W(e) : e;
    return Y(t.transform) || Y(t.translate) || Y(t.scale) || Y(t.rotate) || Y(t.perspective) || !ae() && (Y(t.backdropFilter) || Y(t.filter)) || se.test(t.willChange || ``) || ce.test(t.contain || ``)
}

function ie(e) {
    let t = K(e);
    for (; z(t) && !U(t);) {
        if (H(t)) return t;
        if (V(t)) return null;
        t = K(t)
    }
    return null
}

function ae() {
    return le ??= typeof CSS < `u` && CSS.supports && CSS.supports(`-webkit-backdrop-filter`, `none`), le
}

function U(e) {
    return /^(html|body|#document)$/.test(F(e))
}

function W(e) {
    return I(e).getComputedStyle(e)
}

function G(e) {
    return R(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function K(e) {
    if (F(e) === `html`) return e;
    let t = e.assignedSlot || e.parentNode || ne(e) && e.host || L(e);
    return ne(t) ? t.host : t
}

function oe(e) {
    let t = K(e);
    return U(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : z(t) && B(t) ? t : oe(t)
}

function q(e, t, n) {
    t === void 0 && (t = []), n === void 0 && (n = !0);
    let r = oe(e),
        i = r === e.ownerDocument?.body,
        a = I(r);
    if (i) {
        let e = J(a);
        return t.concat(a, a.visualViewport || [], B(r) ? r : [], e && n ? q(e) : [])
    } else return t.concat(r, q(r, [], n))
}

function J(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
var se, ce, Y, le, ue = e((() => {
    se = /transform|translate|scale|rotate|perspective|filter/, ce = /paint|layout|strict|content/, Y = e => !!e && e !== `none`
}));

function de(e) {
    let t = W(e),
        n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0,
        i = z(e),
        a = i ? e.offsetWidth : n,
        o = i ? e.offsetHeight : r,
        s = j(n) !== a || j(r) !== o;
    return s && (n = a, r = o), {
        width: n,
        height: r,
        $: s
    }
}

function fe(e) {
    return R(e) ? e : e.contextElement
}

function X(e) {
    let t = fe(e);
    if (!z(t)) return N(1);
    let n = t.getBoundingClientRect(),
        {
            width: r,
            height: i,
            $: a
        } = de(t),
        o = (a ? j(n.width) : n.width) / r,
        s = (a ? j(n.height) : n.height) / i;
    return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
        x: o,
        y: s
    }
}

function pe(e) {
    let t = I(e);
    return !ae() || !t.visualViewport ? Pe : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function me(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== I(e) ? !1 : t
}

function Z(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    let i = e.getBoundingClientRect(),
        a = fe(e),
        s = N(1);
    t && (r ? R(r) && (s = X(r)) : s = X(e));
    let c = me(a, n, r) ? pe(a) : N(0),
        l = (i.left + c.x) / s.x,
        u = (i.top + c.y) / s.y,
        d = i.width / s.x,
        f = i.height / s.y;
    if (a) {
        let e = I(a),
            t = r && R(r) ? I(r) : r,
            n = e,
            i = J(n);
        for (; i && r && t !== n;) {
            let e = X(i),
                t = i.getBoundingClientRect(),
                r = W(i),
                a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
            l *= e.x, u *= e.y, d *= e.x, f *= e.y, l += a, u += o, n = I(i), i = J(n)
        }
    }
    return o({
        width: d,
        height: f,
        x: l,
        y: u
    })
}

function Q(e, t) {
    let n = G(e).scrollLeft;
    return t ? t.left + n : Z(L(e)).left + n
}

function he(e, t) {
    let n = e.getBoundingClientRect();
    return {
        x: n.left + t.scrollLeft - Q(e, n),
        y: n.top + t.scrollTop
    }
}

function ge(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: r,
        strategy: i
    } = e, a = i === `fixed`, o = L(r), s = t ? V(t.floating) : !1;
    if (r === o || s && a) return n;
    let c = {
            scrollLeft: 0,
            scrollTop: 0
        },
        l = N(1),
        u = N(0),
        d = z(r);
    if ((d || !d && !a) && ((F(r) !== `body` || B(o)) && (c = G(r)), d)) {
        let e = Z(r);
        l = X(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop
    }
    let f = o && !d && !a ? he(o, c) : N(0);
    return {
        width: n.width * l.x,
        height: n.height * l.y,
        x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
        y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
    }
}

function _e(e) {
    return Array.from(e.getClientRects())
}

function ve(e) {
    let t = L(e),
        n = G(e),
        r = e.ownerDocument.body,
        i = A(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        a = A(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
        o = -n.scrollLeft + Q(e),
        s = -n.scrollTop;
    return W(r).direction === `rtl` && (o += A(t.clientWidth, r.clientWidth) - i), {
        width: i,
        height: a,
        x: o,
        y: s
    }
}

function ye(e, t) {
    let n = I(e),
        r = L(e),
        i = n.visualViewport,
        a = r.clientWidth,
        o = r.clientHeight,
        s = 0,
        c = 0;
    if (i) {
        a = i.width, o = i.height;
        let e = ae();
        (!e || e && t === `fixed`) && (s = i.offsetLeft, c = i.offsetTop)
    }
    let l = Q(r);
    if (l <= 0) {
        let e = r.ownerDocument,
            t = e.body,
            n = getComputedStyle(t),
            i = e.compatMode === `CSS1Compat` && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
            o = Math.abs(r.clientWidth - t.clientWidth - i);
        o <= $ && (a -= o)
    } else l <= $ && (a += l);
    return {
        width: a,
        height: o,
        x: s,
        y: c
    }
}

function be(e, t) {
    let n = Z(e, !0, t === `fixed`),
        r = n.top + e.clientTop,
        i = n.left + e.clientLeft,
        a = z(e) ? X(e) : N(1);
    return {
        width: e.clientWidth * a.x,
        height: e.clientHeight * a.y,
        x: i * a.x,
        y: r * a.y
    }
}

function xe(e, t, n) {
    let r;
    if (t === `viewport`) r = ye(e, n);
    else if (t === `document`) r = ve(L(e));
    else if (R(t)) r = be(t, n);
    else {
        let n = pe(e);
        r = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
        }
    }
    return o(r)
}

function Se(e, t) {
    let n = K(e);
    return n === t || !R(n) || U(n) ? !1 : W(n).position === `fixed` || Se(n, t)
}

function Ce(e, t) {
    let n = t.get(e);
    if (n) return n;
    let r = q(e, [], !1).filter(e => R(e) && F(e) !== `body`),
        i = null,
        a = W(e).position === `fixed`,
        o = a ? K(e) : e;
    for (; R(o) && !U(o);) {
        let t = W(o),
            n = H(o);
        !n && t.position === `fixed` && (i = null), (a ? !n && !i : !n && t.position === `static` && i && (i.position === `absolute` || i.position === `fixed`) || B(o) && !n && Se(e, o)) ? r = r.filter(e => e !== o) : i = t, o = K(o)
    }
    return t.set(e, r), r
}

function we(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: r,
        strategy: i
    } = e, a = [...n === `clippingAncestors` ? V(t) ? [] : Ce(t, this._c) : [].concat(n), r], o = xe(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
    for (let e = 1; e < a.length; e++) {
        let n = xe(t, a[e], i);
        s = A(n.top, s), c = k(n.right, c), l = k(n.bottom, l), u = A(n.left, u)
    }
    return {
        width: c - u,
        height: l - s,
        x: u,
        y: s
    }
}

function Te(e) {
    let {
        width: t,
        height: n
    } = de(e);
    return {
        width: t,
        height: n
    }
}

function Ee(e, t, n) {
    let r = z(t),
        i = L(t),
        a = n === `fixed`,
        o = Z(e, !0, a, t),
        s = {
            scrollLeft: 0,
            scrollTop: 0
        },
        c = N(0);

    function l() {
        c.x = Q(i)
    }
    if (r || !r && !a)
        if ((F(t) !== `body` || B(i)) && (s = G(t)), r) {
            let e = Z(t, !0, a, t);
            c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop
        } else i && l();
    a && !r && i && l();
    let u = i && !r && !a ? he(i, s) : N(0);
    return {
        x: o.left + s.scrollLeft - c.x - u.x,
        y: o.top + s.scrollTop - c.y - u.y,
        width: o.width,
        height: o.height
    }
}

function De(e) {
    return W(e).position === `static`
}

function Oe(e, t) {
    if (!z(e) || W(e).position === `fixed`) return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return L(e) === n && (n = n.ownerDocument.body), n
}

function ke(e, t) {
    let n = I(e);
    if (V(e)) return n;
    if (!z(e)) {
        let t = K(e);
        for (; t && !U(t);) {
            if (R(t) && !De(t)) return t;
            t = K(t)
        }
        return n
    }
    let r = Oe(e, t);
    for (; r && re(r) && De(r);) r = Oe(r, t);
    return r && U(r) && De(r) && !H(r) ? n : r || ie(e) || n
}

function Ae(e) {
    return W(e).direction === `rtl`
}

function je(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}

function Me(e, t) {
    let n = null,
        r, i = L(e);

    function a() {
        var e;
        clearTimeout(r), (e = n) == null || e.disconnect(), n = null
    }

    function o(s, c) {
        s === void 0 && (s = !1), c === void 0 && (c = 1), a();
        let l = e.getBoundingClientRect(),
            {
                left: u,
                top: d,
                width: f,
                height: p
            } = l;
        if (s || t(), !f || !p) return;
        let m = M(d),
            h = M(i.clientWidth - (u + f)),
            g = M(i.clientHeight - (d + p)),
            _ = M(u),
            v = {
                rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
                threshold: A(0, k(1, c)) || 1
            },
            y = !0;

        function b(t) {
            let n = t[0].intersectionRatio;
            if (n !== c) {
                if (!y) return o();
                n ? o(!1, n) : r = setTimeout(() => {
                    o(!1, 1e-7)
                }, 1e3)
            }
            n === 1 && !je(l, e.getBoundingClientRect()) && o(), y = !1
        }
        try {
            n = new IntersectionObserver(b, {
                ...v,
                root: i.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(b, v)
        }
        n.observe(e)
    }
    return o(!0), a
}

function Ne(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        ancestorScroll: i = !0,
        ancestorResize: a = !0,
        elementResize: o = typeof ResizeObserver == `function`,
        layoutShift: s = typeof IntersectionObserver == `function`,
        animationFrame: c = !1
    } = r, l = fe(e), u = i || a ? [...l ? q(l) : [], ...t ? q(t) : []] : [];
    u.forEach(e => {
        i && e.addEventListener(`scroll`, n, {
            passive: !0
        }), a && e.addEventListener(`resize`, n)
    });
    let d = l && s ? Me(l, n) : null,
        f = -1,
        p = null;
    o && (p = new ResizeObserver(e => {
        let [r] = e;
        r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
            var e;
            (e = p) == null || e.observe(t)
        })), n()
    }), l && !c && p.observe(l), t && p.observe(t));
    let m, h = c ? Z(e) : null;
    c && g();

    function g() {
        let t = Z(e);
        h && !je(h, t) && n(), h = t, m = requestAnimationFrame(g)
    }
    return n(), () => {
        var e;
        u.forEach(e => {
            i && e.removeEventListener(`scroll`, n), a && e.removeEventListener(`resize`, n)
        }), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m)
    }
}
var Pe, $, Fe, Ie, Le, Re, ze, Be, Ve, He = e((() => {
    O(), ee(), ue(), Pe = N(0), $ = 25, Fe = async function(e) {
        let t = this.getOffsetParent || ke,
            n = this.getDimensions,
            r = await n(e.floating);
        return {
            reference: Ee(e.reference, await t(e.floating), e.strategy),
            floating: {
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
            }
        }
    }, Ie = {
        convertOffsetParentRelativeRectToViewportRelativeRect: ge,
        getDocumentElement: L,
        getClippingRect: we,
        getOffsetParent: ke,
        getElementRects: Fe,
        getClientRects: _e,
        getDimensions: Te,
        getScale: X,
        isElement: R,
        isRTL: Ae
    }, Le = T, Re = E, ze = C, Be = D, Ve = (e, t, n) => {
        let r = new Map,
            i = {
                platform: Ie,
                ...n
            },
            a = {
                ...i.platform,
                _c: r
            };
        return S(e, t, {
            ...i,
            platform: a
        })
    }
}));
export {
    Le as a, He as i, Ve as n, Re as o, ze as r, Be as s, Ne as t
};
//# sourceMappingURL=9ec4d3b5-hobt4atds40kevf3.js.map