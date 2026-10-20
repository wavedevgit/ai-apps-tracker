import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as n,
    N5 as r,
    QT as i,
    Y5 as a,
    ZT as o,
    aq as s,
    gT as c,
    h8 as l,
    nq as u,
    tq as d,
    vT as ee
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as f,
    Vn as p,
    wn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    YHn as h,
    qHn as te
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Fx as g,
    Ix as _
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    n as ne,
    t as v
} from "./6fd2d070-cg0jiam3fe8m0z4x.js";

function y(e, t, n = {
    x: 0,
    y: 0
}) {
    let r = t.x + n.x,
        i = t.y + n.y,
        a = Math.min(e.x, r) - n.x,
        o = Math.min(e.y, i) - n.y,
        s = Math.max(1, Math.abs(e.x - r)),
        c = Math.max(1, Math.abs(e.y - i));
    return {
        left: a,
        top: o,
        right: a + s,
        bottom: o + c,
        width: s,
        height: c
    }
}

function b(e, t) {
    let n = t.top + x,
        r = t.bottom - x;
    return e < n ? -Math.max(1, Math.round(Math.min(1, (n - e) / x) * S)) : e > r ? Math.max(1, Math.round(Math.min(1, (e - r) / x) * S)) : 0
}
var x, S, C = e((() => {
    x = 48, S = 24
}));

function w(e, t) {
    return e.size === t.size && Array.from(e).every(e => t.has(e))
}

function T(e, t) {
    return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top
}

function E(e, t) {
    let n = e.surfaceRef.current;
    if (n == null) return;
    let r = {
            x: t.scrollRoot?.scrollLeft ?? 0,
            y: t.scrollRoot?.scrollTop ?? 0
        },
        i = y(t.origin, t.pointer, r),
        a = new Set(e.latestSelectableIdsRef.current),
        o = t.additive ? new Set(t.originalCheckedIds) : new Set,
        s = null;
    for (let e of n.querySelectorAll(j)) {
        let t = e.dataset.pageTableSelectionId;
        t == null || !a.has(t) || !T(i, e.getBoundingClientRect()) || (o.add(t), s = t)
    }
    e.setSelectionRectangle(i), w(t.lastCheckedIds, o) || (t.lastCheckedIds = o, e.latestSelectionChangeRef.current(o, s))
}

function re(e, t) {
    let n = t.scrollRoot,
        r = e.surfaceRef.current?.ownerDocument.defaultView;
    n == null || r == null || e.animationFrameRef.current != null || b(t.pointer.y, n.getBoundingClientRect()) === 0 || (e.animationFrameRef.current = r.requestAnimationFrame(() => {
        if (e.animationFrameRef.current = null, e.sessionRef.current !== t || !t.active) return;
        let r = b(t.pointer.y, n.getBoundingClientRect()),
            i = Math.max(0, n.scrollHeight - n.clientHeight),
            a = n.scrollTop;
        n.scrollTop = Math.max(0, Math.min(i, a + r)), n.scrollTop !== a && (E(e, t), re(e, t))
    }))
}

function D(e, t) {
    let n = e.sessionRef.current;
    if (n == null || t != null && n.pointerId != null && n.pointerId !== t) return;
    e.sessionRef.current = null, e.animationFrameRef.current != null && (window.cancelAnimationFrame(e.animationFrameRef.current), e.animationFrameRef.current = null);
    let r = e.surfaceRef.current;
    r != null && n.pointerId != null && r.hasPointerCapture?.(n.pointerId) && r.releasePointerCapture(n.pointerId), e.setSelectionRectangle(null)
}

function O(e) {
    "use forget";
    let t = (0, ie.c)(25),
        {
            checkedIds: i,
            enabled: a,
            multiselectEnabled$: o,
            selectableIds: s,
            onSelectionChange: l,
            onDoubleClick: u,
            children: d
        } = e,
        ee = a === void 0 || a,
        f = r(o),
        p = (0, k.useRef)(null),
        m = (0, k.useRef)(null),
        h = (0, k.useRef)(null),
        te = (0, k.useRef)(s),
        g = (0, k.useRef)(l),
        [_, ne] = (0, k.useState)(null),
        v;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (v = {
        surfaceRef: p,
        sessionRef: m,
        animationFrameRef: h,
        latestSelectableIdsRef: te,
        latestSelectionChangeRef: g,
        setSelectionRectangle: ne
    }, t[0] = v) : v = t[0];
    let y = v,
        b, x;
    t[1] !== l || t[2] !== s ? (b = () => {
        te.current = s, g.current = l
    }, x = [l, s], t[1] = l, t[2] = s, t[3] = b, t[4] = x) : (b = t[3], x = t[4]), (0, k.useEffect)(b, x);
    let S, C;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (S = () => () => {
        h.current != null && window.cancelAnimationFrame(h.current)
    }, C = [], t[5] = S, t[6] = C) : (S = t[5], C = t[6]), (0, k.useEffect)(S, C);
    let w;
    t[7] !== i || t[8] !== f ? (w = function(e) {
        if (!f || e.defaultPrevented || e.button !== 0 || !e.isPrimary || e.pointerType != null && e.pointerType !== `mouse`) return;
        let t = e.currentTarget,
            n = e.target;
        if (!(n instanceof Element) || !t.contains(n) || n.closest(oe) != null) return;
        let r = t.ownerDocument.scrollingElement,
            a = t.closest(`[data-scroll-root]`) ?? (r instanceof HTMLElement ? r : null),
            o = {
                x: e.clientX,
                y: e.clientY
            };
        m.current = {
            pointerId: e.pointerId,
            origin: {
                x: o.x + (a?.scrollLeft ?? 0),
                y: o.y + (a?.scrollTop ?? 0)
            },
            start: o,
            pointer: o,
            originalCheckedIds: new Set(i),
            lastCheckedIds: new Set(i),
            additive: e.metaKey || e.ctrlKey || e.shiftKey,
            active: !1,
            scrollRoot: a
        }
    }, t[7] = i, t[8] = f, t[9] = w) : w = t[9];
    let T = w,
        O;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (O = function(e) {
        let t = m.current;
        if (t == null || t.pointerId != null && e.pointerId !== t.pointerId || (t.pointer = {
                x: e.clientX,
                y: e.clientY
            }, !t.active && Math.hypot(t.pointer.x - t.start.x, t.pointer.y - t.start.y) < ae)) return;
        t.active = !0;
        let n = y.surfaceRef.current;
        n != null && t.pointerId != null && n.setPointerCapture?.(t.pointerId), e.preventDefault(), E(y, t), re(y, t)
    }, t[10] = O) : O = t[10];
    let j = O,
        M = _ != null && `select-none`,
        N;
    t[11] === M ? N = t[12] : (N = n(`relative min-h-0 w-full flex-1`, M), t[11] = M, t[12] = N);
    let se = ee && f ? T : void 0,
        P, F, I, L;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (P = e => D(y, e.pointerId), F = e => {
        m.current?.active !== !0 && D(y, e.pointerId)
    }, I = e => D(y, e.pointerId), L = e => D(y, e.pointerId), t[13] = P, t[14] = F, t[15] = I, t[16] = L) : (P = t[13], F = t[14], I = t[15], L = t[16]);
    let R;
    t[17] === _ ? R = t[18] : (R = _ == null ? null : (0, A.jsx)(c, {
        asChild: !0,
        children: (0, A.jsx)(`div`, {
            "aria-hidden": `true`,
            "data-testid": `page-table-marquee-selection-rectangle`,
            className: `border-token-text-primary bg-token-bg-tertiary/60 pointer-events-none fixed z-30 rounded-sm border`,
            style: {
                left: _.left,
                top: _.top,
                width: _.width,
                height: _.height
            }
        })
    }), t[17] = _, t[18] = R);
    let z;
    return t[19] !== d || t[20] !== u || t[21] !== N || t[22] !== se || t[23] !== R ? (z = (0, A.jsxs)(`div`, {
        ref: p,
        "data-testid": `page-table-marquee-selection-surface`,
        className: N,
        onPointerDown: se,
        onPointerMove: j,
        onPointerUp: P,
        onPointerLeave: F,
        onPointerCancel: I,
        onLostPointerCapture: L,
        onDoubleClick: u,
        children: [d, R]
    }), t[19] = d, t[20] = u, t[21] = N, t[22] = se, t[23] = R, t[24] = z) : z = t[24], z
}
var ie, k, A, ae, j, oe, M = e((() => {
    ie = m(), C(), l(), ee(), a(), k = t(p()), A = f(), ae = 5, j = `[data-page-table-selection-id]`, oe = [j, `a`, `button`, `input`, `select`, `textarea`, `[contenteditable='true']`, `[draggable='true']`, `[role='button']`, `[role='checkbox']`, `[role='link']`, `[data-page-table-marquee-selection-ignore]`].join(`,`)
}));

function N(e, t) {
    let n = document.createElement(`div`);
    n.style.position = `absolute`, n.style.display = `none`, n.style.height = `var(${t},0px)`, e.appendChild(n);
    let r = getComputedStyle(n).height;
    return n.remove(), r
}

function se(e) {
    return e ? `-${N(e,`--sticky-padding-top`)} 0px -${N(e,`--sticky-padding-bottom`)} 0px` : `0px`
}

function P(e) {
    "use forget";
    let t = (0, B.c)(8),
        r, i;
    t[0] === e ? (r = t[1], i = t[2]) : ({
        className: r,
        ...i
    } = e, t[0] = e, t[1] = r, t[2] = i);
    let a;
    t[3] === r ? a = t[4] : (a = n(`mx-auto flex w-full max-w-[810px] flex-col px-6 pt-3 md:pt-0`, r), t[3] = r, t[4] = a);
    let o;
    return t[5] !== i || t[6] !== a ? (o = (0, H.jsx)(`div`, {
        className: a,
        ...i
    }), t[5] = i, t[6] = a, t[7] = o) : o = t[7], o
}

function F(e) {
    "use forget";
    let t = (0, B.c)(8),
        r, i;
    t[0] === e ? (r = t[1], i = t[2]) : ({
        className: r,
        ...i
    } = e, t[0] = e, t[1] = r, t[2] = i);
    let a;
    t[3] === r ? a = t[4] : (a = n(`bg-token-bg-primary sticky top-0 z-20 border-b border-transparent`, r), t[3] = r, t[4] = a);
    let o;
    return t[5] !== i || t[6] !== a ? (o = (0, H.jsx)(`div`, {
        className: a,
        ...i
    }), t[5] = i, t[6] = a, t[7] = o) : o = t[7], o
}

function I(e) {
    "use forget";
    let t = (0, B.c)(8),
        r, i;
    t[0] === e ? (r = t[1], i = t[2]) : ({
        className: r,
        ...i
    } = e, t[0] = e, t[1] = r, t[2] = i);
    let a;
    t[3] === r ? a = t[4] : (a = n(`mx-auto flex w-full max-w-[810px] px-6`, r), t[3] = r, t[4] = a);
    let o;
    return t[5] !== i || t[6] !== a ? (o = (0, H.jsx)(`div`, {
        className: a,
        ...i
    }), t[5] = i, t[6] = a, t[7] = o) : o = t[7], o
}

function L(e) {
    "use forget";
    let t = (0, B.c)(8),
        r, i;
    t[0] === e ? (r = t[1], i = t[2]) : ({
        className: r,
        ...i
    } = e, t[0] = e, t[1] = r, t[2] = i);
    let a;
    t[3] === r ? a = t[4] : (a = n(`mx-auto flex h-full w-full max-w-[810px] flex-col px-6 pb-10 md:pb-12`, r), t[3] = r, t[4] = a);
    let o;
    return t[5] !== i || t[6] !== a ? (o = (0, H.jsx)(`div`, {
        "data-page-table-background": `true`,
        className: a,
        ...i
    }), t[5] = i, t[6] = a, t[7] = o) : o = t[7], o
}

function R(e) {
    "use forget";
    let t = (0, B.c)(12),
        r, i, a, o;
    t[0] === e ? (r = t[1], i = t[2], a = t[3], o = t[4]) : ({
        className: i,
        ref: o,
        children: r,
        ...a
    } = e, t[0] = e, t[1] = r, t[2] = i, t[3] = a, t[4] = o);
    let s;
    t[5] === i ? s = t[6] : (s = n(`mt-2 flex min-h-0 flex-1 flex-col`, i), t[5] = i, t[6] = s);
    let c;
    return t[7] !== r || t[8] !== a || t[9] !== o || t[10] !== s ? (c = (0, H.jsx)(`div`, {
        ref: o,
        "data-page-table-background": `true`,
        "data-testid": `page-table-background`,
        className: s,
        ...a,
        children: r
    }), t[7] = r, t[8] = a, t[9] = o, t[10] = s, t[11] = c) : c = t[11], c
}

function z(e) {
    "use forget";
    let t = (0, B.c)(72),
        {
            header: a,
            stickyHeader: o,
            toolbar: s,
            children: c,
            classNames: l,
            layout: u,
            contentInnerRef: d,
            disableMultiselectMobile: ee,
            multiselectEnabled$: f,
            marqueeSelection: p,
            onBackgroundDoubleClick: m,
            rootTestId: h,
            toolbarShellTestId: g,
            toolbarShellInnerTestId: ne
        } = e,
        y = o !== void 0 && o,
        b = u === void 0 ? `default` : u,
        x = ee !== void 0 && ee,
        S = g === void 0 ? `page-table-toolbar-shell` : g,
        C = ne === void 0 ? `page-table-toolbar-shell-inner` : ne,
        w = s != null,
        T = w || y && a != null,
        E = b === `wide-compact`,
        re = _(!0),
        D = f ?? re,
        ie = r(D),
        k = f != null && ie ? le : void 0,
        [A, ae] = (0, V.useState)(null),
        [j, oe] = (0, V.useState)(null),
        [M, N] = (0, V.useState)(null),
        z;
    t[0] === j ? z = t[1] : (z = j?.closest(`[data-scroll-root]`) ?? null, t[0] = j, t[1] = z);
    let U = z,
        W;
    t[2] === m ? W = t[3] : (W = e => {
        let t = e.target;
        e.defaultPrevented || e.button !== 0 || !(t instanceof Element) || t !== e.currentTarget && !t.matches(ue) || (e.preventDefault(), m?.())
    }, t[2] = m, t[3] = W);
    let G = m == null ? void 0 : W,
        fe = p == null ? G : void 0,
        K, pe;
    t[4] !== T || t[5] !== A ? (K = () => {
        if (!(!A || !T)) return i(A, `data-scroll-from-top`, !1), () => {
            i(A, `data-scroll-from-top`, !1)
        }
    }, pe = [T, A], t[4] = T, t[5] = A, t[6] = K, t[7] = pe) : (K = t[6], pe = t[7]), (0, V.useEffect)(K, pe);
    let me, he;
    t[8] !== A || t[9] !== U || t[10] !== y || t[11] !== M ? (me = () => {
        if (!(y || !A || !M || typeof IntersectionObserver > `u`)) return te({
            target: M,
            onChange: e => {
                (0, V.startTransition)(() => {
                    i(A, `data-scroll-from-top`, !e)
                })
            },
            options: {
                root: U,
                rootMargin: se(U),
                threshold: 0
            }
        })
    }, he = [A, U, y, M], t[8] = A, t[9] = U, t[10] = y, t[11] = M, t[12] = me, t[13] = he) : (me = t[12], he = t[13]), (0, V.useEffect)(me, he);
    let ge, _e;
    t[14] !== x || t[15] !== D || t[16] !== A ? (ge = () => {
        if (!x) {
            D.set(!0);
            return
        }
        if (A == null) return;
        let e = () => {
            let e = A.getBoundingClientRect().width;
            D.set((e > 0 ? e : window.innerWidth) >= ce)
        };
        if (e(), typeof ResizeObserver > `u`) return;
        let t = new ResizeObserver(e);
        return t.observe(A), () => t.disconnect()
    }, _e = [x, D, A], t[14] = x, t[15] = D, t[16] = A, t[17] = ge, t[18] = _e) : (ge = t[17], _e = t[18]), (0, V.useEffect)(ge, _e);
    let ve;
    t[19] !== l?.headerWrapper || t[20] !== w || t[21] !== E || t[22] !== a || t[23] !== k || t[24] !== y ? (ve = a && (0, H.jsx)(P, {
        className: n(w && `pb-6 md:pb-10`, E && (w ? `md:pb-3!` : `pb-0! md:pb-6!`), l?.headerWrapper, !y && k),
        children: a
    }), t[19] = l?.headerWrapper, t[20] = w, t[21] = E, t[22] = a, t[23] = k, t[24] = y, t[25] = ve) : ve = t[25];
    let ye = ve,
        be = y && ye,
        q;
    t[26] !== l?.toolbarInner || t[27] !== w || t[28] !== k || t[29] !== y || t[30] !== s || t[31] !== C ? (q = w && (0, H.jsx)(I, {
        "data-testid": C,
        className: n(l?.toolbarInner, !y && k),
        children: s
    }), t[26] = l?.toolbarInner, t[27] = w, t[28] = k, t[29] = y, t[30] = s, t[31] = C, t[32] = q) : q = t[32];
    let xe;
    t[33] !== be || t[34] !== q ? (xe = (0, H.jsxs)(H.Fragment, {
        children: [be, q]
    }), t[33] = be, t[34] = q, t[35] = xe) : xe = t[35];
    let Se = xe,
        Ce = E ? b : void 0,
        we = E ? de : void 0,
        Te = !y && ye,
        J;
    t[36] !== l?.stickyHeaderContent || t[37] !== l?.toolbarShell || t[38] !== T || t[39] !== k || t[40] !== y || t[41] !== Se || t[42] !== S ? (J = T && (0, H.jsxs)(H.Fragment, {
        children: [(0, H.jsx)(`div`, {
            className: `pointer-events-none -mb-px h-px opacity-0`,
            ref: N
        }), (0, H.jsx)(F, {
            "data-page-table-background": `true`,
            "data-testid": S,
            className: n(y ? `group-data-scroll-from-top/scroll-root:border-token-border-light` : `group-data-scroll-from-top/page-table-scroll:border-token-border-light`, l?.toolbarShell),
            children: y ? (0, H.jsx)(`div`, {
                className: n(l?.stickyHeaderContent, k),
                children: Se
            }) : Se
        })]
    }), t[36] = l?.stickyHeaderContent, t[37] = l?.toolbarShell, t[38] = T, t[39] = k, t[40] = y, t[41] = Se, t[42] = S, t[43] = J) : J = t[43];
    let Ee = l?.contentWrapper,
        Y;
    t[44] !== k || t[45] !== Ee ? (Y = n(Ee, k), t[44] = k, t[45] = Ee, t[46] = Y) : Y = t[46];
    let X;
    t[47] === d ? X = t[48] : (X = e => {
        oe(e), d?.(e)
    }, t[47] = d, t[48] = X);
    let De = l?.contentInner,
        Z;
    t[49] !== c || t[50] !== X || t[51] !== De ? (Z = (0, H.jsx)(R, {
        ref: X,
        className: De,
        children: c
    }), t[49] = c, t[50] = X, t[51] = De, t[52] = Z) : Z = t[52];
    let Q;
    t[53] !== Y || t[54] !== Z ? (Q = (0, H.jsx)(L, {
        className: Y,
        children: Z
    }), t[53] = Y, t[54] = Z, t[55] = Q) : Q = t[55];
    let Oe;
    t[56] !== fe || t[57] !== h || t[58] !== Ce || t[59] !== we || t[60] !== Te || t[61] !== J || t[62] !== Q ? (Oe = (0, H.jsxs)(`div`, {
        ref: ae,
        className: `group/page-table-scroll w-full`,
        "data-page-table-background": `true`,
        "data-page-table-layout": Ce,
        style: we,
        "data-testid": h,
        onDoubleClick: fe,
        children: [Te, J, Q]
    }), t[56] = fe, t[57] = h, t[58] = Ce, t[59] = we, t[60] = Te, t[61] = J, t[62] = Q, t[63] = Oe) : Oe = t[63];
    let ke = Oe,
        $;
    t[64] !== G || t[65] !== p || t[66] !== ke || t[67] !== D ? ($ = p == null ? ke : (0, H.jsx)(O, {
        ...p,
        multiselectEnabled$: D,
        onDoubleClick: G,
        children: ke
    }), t[64] = G, t[65] = p, t[66] = ke, t[67] = D, t[68] = $) : $ = t[68];
    let Ae;
    return t[69] !== D || t[70] !== $ ? (Ae = (0, H.jsx)(v, {
        multiselectEnabled$: D,
        children: $
    }), t[69] = D, t[70] = $, t[71] = Ae) : Ae = t[71], Ae
}
var B, V, H, ce, le, ue, de, U, W = e((() => {
    B = m(), l(), g(), o(), h(), s(), a(), V = t(p()), ne(), M(), H = f(), ce = d[u.Medium], le = `ps-12! md:ps-12!`, ue = `[data-page-table-background]`, de = {
        "--page-table-row-inset": `-1rem`,
        "--page-table-row-inset-size": `1rem`,
        "--page-table-checkbox-inset": `-3rem`
    }, U = {
        headerWrapper: `max-w-app-content px-4! pt-4 md:pt-10`,
        toolbarInner: `max-w-app-content px-4!`,
        contentWrapper: `max-w-app-content px-4! pb-8 md:pb-8`,
        contentInner: `mt-0`
    }
}));
export {
    z as n, W as r, U as t
};
//# sourceMappingURL=84bcef95-h2qt13aeeb6gcsss.js.map