import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as n,
    G5 as r,
    K5 as i,
    QT as a,
    ZT as o,
    aq as s,
    f8 as c,
    gT as l,
    nq as u,
    tq as d,
    vT as ee
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as f,
    Vn as p,
    wn as m
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $Hn as h,
    ZHn as te
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    hS as ne,
    mS as g
} from "./c2675c8c-fpv9s4kvd412dyap.js";
import {
    n as re,
    t as _
} from "./6fd2d070-cypbmx18ba1domo1.js";

function v(e, t, n = {
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

function y(e, t) {
    let n = t.top + b,
        r = t.bottom - b;
    return e < n ? -Math.max(1, Math.round(Math.min(1, (n - e) / b) * x)) : e > r ? Math.max(1, Math.round(Math.min(1, (e - r) / b) * x)) : 0
}
var b, x, S = e((() => {
    b = 48, x = 24
}));

function C(e, t) {
    return e.size === t.size && Array.from(e).every(e => t.has(e))
}

function w(e, t) {
    return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top
}

function T(e, t) {
    let n = e.surfaceRef.current;
    if (n == null) return;
    let r = {
            x: t.scrollRoot?.scrollLeft ?? 0,
            y: t.scrollRoot?.scrollTop ?? 0
        },
        i = v(t.origin, t.pointer, r),
        a = new Set(e.latestSelectableIdsRef.current),
        o = t.additive ? new Set(t.originalCheckedIds) : new Set,
        s = null;
    for (let e of n.querySelectorAll(A)) {
        let t = e.dataset.pageTableSelectionId;
        t == null || !a.has(t) || !w(i, e.getBoundingClientRect()) || (o.add(t), s = t)
    }
    e.setSelectionRectangle(i), C(t.lastCheckedIds, o) || (t.lastCheckedIds = o, e.latestSelectionChangeRef.current(o, s))
}

function ie(e, t) {
    let n = t.scrollRoot,
        r = e.surfaceRef.current?.ownerDocument.defaultView;
    n == null || r == null || e.animationFrameRef.current != null || y(t.pointer.y, n.getBoundingClientRect()) === 0 || (e.animationFrameRef.current = r.requestAnimationFrame(() => {
        if (e.animationFrameRef.current = null, e.sessionRef.current !== t || !t.active) return;
        let r = y(t.pointer.y, n.getBoundingClientRect()),
            i = Math.max(0, n.scrollHeight - n.clientHeight),
            a = n.scrollTop;
        n.scrollTop = Math.max(0, Math.min(i, a + r)), n.scrollTop !== a && (T(e, t), ie(e, t))
    }))
}

function E(e, t) {
    let n = e.sessionRef.current;
    if (n == null || t != null && n.pointerId != null && n.pointerId !== t) return;
    e.sessionRef.current = null, e.animationFrameRef.current != null && (window.cancelAnimationFrame(e.animationFrameRef.current), e.animationFrameRef.current = null);
    let r = e.surfaceRef.current;
    r != null && n.pointerId != null && r.hasPointerCapture?.(n.pointerId) && r.releasePointerCapture(n.pointerId), e.setSelectionRectangle(null)
}

function D(e) {
    "use forget";
    let t = (0, ae.c)(25),
        {
            checkedIds: i,
            enabled: a,
            multiselectEnabled$: o,
            selectableIds: s,
            onSelectionChange: c,
            onDoubleClick: u,
            children: d
        } = e,
        ee = a === void 0 || a,
        f = n(o),
        p = (0, O.useRef)(null),
        m = (0, O.useRef)(null),
        h = (0, O.useRef)(null),
        te = (0, O.useRef)(s),
        ne = (0, O.useRef)(c),
        [g, re] = (0, O.useState)(null),
        _;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = {
        surfaceRef: p,
        sessionRef: m,
        animationFrameRef: h,
        latestSelectableIdsRef: te,
        latestSelectionChangeRef: ne,
        setSelectionRectangle: re
    }, t[0] = _) : _ = t[0];
    let v = _,
        y, b;
    t[1] !== c || t[2] !== s ? (y = () => {
        te.current = s, ne.current = c
    }, b = [c, s], t[1] = c, t[2] = s, t[3] = y, t[4] = b) : (y = t[3], b = t[4]), (0, O.useEffect)(y, b);
    let x, S;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (x = () => () => {
        h.current != null && window.cancelAnimationFrame(h.current)
    }, S = [], t[5] = x, t[6] = S) : (x = t[5], S = t[6]), (0, O.useEffect)(x, S);
    let C;
    t[7] !== i || t[8] !== f ? (C = function(e) {
        if (!f || e.defaultPrevented || e.button !== 0 || !e.isPrimary || e.pointerType != null && e.pointerType !== `mouse`) return;
        let t = e.currentTarget,
            n = e.target;
        if (!(n instanceof Element) || !t.contains(n) || n.closest(se) != null) return;
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
    }, t[7] = i, t[8] = f, t[9] = C) : C = t[9];
    let w = C,
        D;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (D = function(e) {
        let t = m.current;
        if (t == null || t.pointerId != null && e.pointerId !== t.pointerId || (t.pointer = {
                x: e.clientX,
                y: e.clientY
            }, !t.active && Math.hypot(t.pointer.x - t.start.x, t.pointer.y - t.start.y) < oe)) return;
        t.active = !0;
        let n = v.surfaceRef.current;
        n != null && t.pointerId != null && n.setPointerCapture?.(t.pointerId), e.preventDefault(), T(v, t), ie(v, t)
    }, t[10] = D) : D = t[10];
    let A = D,
        j = g != null && `select-none`,
        M;
    t[11] === j ? M = t[12] : (M = r(`relative min-h-0 w-full flex-1`, j), t[11] = j, t[12] = M);
    let ce = ee && f ? w : void 0,
        N, P, F, I;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (N = e => E(v, e.pointerId), P = e => {
        m.current?.active !== !0 && E(v, e.pointerId)
    }, F = e => E(v, e.pointerId), I = e => E(v, e.pointerId), t[13] = N, t[14] = P, t[15] = F, t[16] = I) : (N = t[13], P = t[14], F = t[15], I = t[16]);
    let L;
    t[17] === g ? L = t[18] : (L = g == null ? null : (0, k.jsx)(l, {
        asChild: !0,
        children: (0, k.jsx)(`div`, {
            "aria-hidden": `true`,
            "data-testid": `page-table-marquee-selection-rectangle`,
            className: `border-token-text-primary bg-token-bg-tertiary/60 pointer-events-none fixed z-30 rounded-sm border`,
            style: {
                left: g.left,
                top: g.top,
                width: g.width,
                height: g.height
            }
        })
    }), t[17] = g, t[18] = L);
    let R;
    return t[19] !== d || t[20] !== u || t[21] !== M || t[22] !== ce || t[23] !== L ? (R = (0, k.jsxs)(`div`, {
        ref: p,
        "data-testid": `page-table-marquee-selection-surface`,
        className: M,
        onPointerDown: ce,
        onPointerMove: A,
        onPointerUp: N,
        onPointerLeave: P,
        onPointerCancel: F,
        onLostPointerCapture: I,
        onDoubleClick: u,
        children: [d, L]
    }), t[19] = d, t[20] = u, t[21] = M, t[22] = ce, t[23] = L, t[24] = R) : R = t[24], R
}
var ae, O, k, oe, A, se, j = e((() => {
    ae = m(), S(), c(), ee(), i(), O = t(p()), k = f(), oe = 5, A = `[data-page-table-selection-id]`, se = [A, `a`, `button`, `input`, `select`, `textarea`, `[contenteditable='true']`, `[draggable='true']`, `[role='button']`, `[role='checkbox']`, `[role='link']`, `[data-page-table-marquee-selection-ignore]`].join(`,`)
}));

function M(e, t) {
    let n = document.createElement(`div`);
    n.style.position = `absolute`, n.style.display = `none`, n.style.height = `var(${t},0px)`, e.appendChild(n);
    let r = getComputedStyle(n).height;
    return n.remove(), r
}

function ce(e) {
    return e ? `-${M(e,`--sticky-padding-top`)} 0px -${M(e,`--sticky-padding-bottom`)} 0px` : `0px`
}

function N(e) {
    "use forget";
    let t = (0, z.c)(8),
        n, i;
    t[0] === e ? (n = t[1], i = t[2]) : ({
        className: n,
        ...i
    } = e, t[0] = e, t[1] = n, t[2] = i);
    let a;
    t[3] === n ? a = t[4] : (a = r(`mx-auto flex w-full max-w-[810px] flex-col px-6 pt-3 md:pt-0`, n), t[3] = n, t[4] = a);
    let o;
    return t[5] !== i || t[6] !== a ? (o = (0, V.jsx)(`div`, {
        className: a,
        ...i
    }), t[5] = i, t[6] = a, t[7] = o) : o = t[7], o
}

function P(e) {
    "use forget";
    let t = (0, z.c)(8),
        n, i;
    t[0] === e ? (n = t[1], i = t[2]) : ({
        className: n,
        ...i
    } = e, t[0] = e, t[1] = n, t[2] = i);
    let a;
    t[3] === n ? a = t[4] : (a = r(`bg-token-bg-primary sticky top-0 z-20 border-b border-transparent`, n), t[3] = n, t[4] = a);
    let o;
    return t[5] !== i || t[6] !== a ? (o = (0, V.jsx)(`div`, {
        className: a,
        ...i
    }), t[5] = i, t[6] = a, t[7] = o) : o = t[7], o
}

function F(e) {
    "use forget";
    let t = (0, z.c)(8),
        n, i;
    t[0] === e ? (n = t[1], i = t[2]) : ({
        className: n,
        ...i
    } = e, t[0] = e, t[1] = n, t[2] = i);
    let a;
    t[3] === n ? a = t[4] : (a = r(`mx-auto flex w-full max-w-[810px] px-6`, n), t[3] = n, t[4] = a);
    let o;
    return t[5] !== i || t[6] !== a ? (o = (0, V.jsx)(`div`, {
        className: a,
        ...i
    }), t[5] = i, t[6] = a, t[7] = o) : o = t[7], o
}

function I(e) {
    "use forget";
    let t = (0, z.c)(8),
        n, i;
    t[0] === e ? (n = t[1], i = t[2]) : ({
        className: n,
        ...i
    } = e, t[0] = e, t[1] = n, t[2] = i);
    let a;
    t[3] === n ? a = t[4] : (a = r(`mx-auto flex h-full w-full max-w-[810px] flex-col px-6 pb-10 md:pb-12`, n), t[3] = n, t[4] = a);
    let o;
    return t[5] !== i || t[6] !== a ? (o = (0, V.jsx)(`div`, {
        "data-page-table-background": `true`,
        className: a,
        ...i
    }), t[5] = i, t[6] = a, t[7] = o) : o = t[7], o
}

function L(e) {
    "use forget";
    let t = (0, z.c)(12),
        n, i, a, o;
    t[0] === e ? (n = t[1], i = t[2], a = t[3], o = t[4]) : ({
        className: i,
        ref: o,
        children: n,
        ...a
    } = e, t[0] = e, t[1] = n, t[2] = i, t[3] = a, t[4] = o);
    let s;
    t[5] === i ? s = t[6] : (s = r(`mt-2 flex min-h-0 flex-1 flex-col`, i), t[5] = i, t[6] = s);
    let c;
    return t[7] !== n || t[8] !== a || t[9] !== o || t[10] !== s ? (c = (0, V.jsx)(`div`, {
        ref: o,
        "data-page-table-background": `true`,
        "data-testid": `page-table-background`,
        className: s,
        ...a,
        children: n
    }), t[7] = n, t[8] = a, t[9] = o, t[10] = s, t[11] = c) : c = t[11], c
}

function R(e) {
    "use forget";
    let t = (0, z.c)(72),
        {
            header: i,
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
            toolbarShellInnerTestId: re
        } = e,
        v = o !== void 0 && o,
        y = u === void 0 ? `default` : u,
        b = ee !== void 0 && ee,
        x = g === void 0 ? `page-table-toolbar-shell` : g,
        S = re === void 0 ? `page-table-toolbar-shell-inner` : re,
        C = s != null,
        w = C || v && i != null,
        T = y === `wide-compact`,
        ie = ne(!0),
        E = f ?? ie,
        ae = n(E),
        O = f != null && ae ? ue : void 0,
        [k, oe] = (0, B.useState)(null),
        [A, se] = (0, B.useState)(null),
        [j, M] = (0, B.useState)(null),
        R;
    t[0] === A ? R = t[1] : (R = A?.closest(`[data-scroll-root]`) ?? null, t[0] = A, t[1] = R);
    let H = R,
        U;
    t[2] === m ? U = t[3] : (U = e => {
        let t = e.target;
        e.defaultPrevented || e.button !== 0 || !(t instanceof Element) || t !== e.currentTarget && !t.matches(de) || (e.preventDefault(), m?.())
    }, t[2] = m, t[3] = U);
    let W = m == null ? void 0 : U,
        pe = p == null ? W : void 0,
        me, he;
    t[4] !== w || t[5] !== k ? (me = () => {
        if (!(!k || !w)) return a(k, `data-scroll-from-top`, !1), () => {
            a(k, `data-scroll-from-top`, !1)
        }
    }, he = [w, k], t[4] = w, t[5] = k, t[6] = me, t[7] = he) : (me = t[6], he = t[7]), (0, B.useEffect)(me, he);
    let ge, _e;
    t[8] !== k || t[9] !== H || t[10] !== v || t[11] !== j ? (ge = () => {
        if (!(v || !k || !j || typeof IntersectionObserver > `u`)) return te({
            target: j,
            onChange: e => {
                (0, B.startTransition)(() => {
                    a(k, `data-scroll-from-top`, !e)
                })
            },
            options: {
                root: H,
                rootMargin: ce(H),
                threshold: 0
            }
        })
    }, _e = [k, H, v, j], t[8] = k, t[9] = H, t[10] = v, t[11] = j, t[12] = ge, t[13] = _e) : (ge = t[12], _e = t[13]), (0, B.useEffect)(ge, _e);
    let ve, ye;
    t[14] !== b || t[15] !== E || t[16] !== k ? (ve = () => {
        if (!b) {
            E.set(!0);
            return
        }
        if (k == null) return;
        let e = () => {
            let e = k.getBoundingClientRect().width;
            E.set((e > 0 ? e : window.innerWidth) >= le)
        };
        if (e(), typeof ResizeObserver > `u`) return;
        let t = new ResizeObserver(e);
        return t.observe(k), () => t.disconnect()
    }, ye = [b, E, k], t[14] = b, t[15] = E, t[16] = k, t[17] = ve, t[18] = ye) : (ve = t[17], ye = t[18]), (0, B.useEffect)(ve, ye);
    let be;
    t[19] !== l?.headerWrapper || t[20] !== C || t[21] !== T || t[22] !== i || t[23] !== O || t[24] !== v ? (be = i && (0, V.jsx)(N, {
        className: r(C && `pb-6 md:pb-10`, T && (C ? `md:pb-3!` : `pb-0! md:pb-6!`), l?.headerWrapper, !v && O),
        children: i
    }), t[19] = l?.headerWrapper, t[20] = C, t[21] = T, t[22] = i, t[23] = O, t[24] = v, t[25] = be) : be = t[25];
    let xe = be,
        Se = v && xe,
        G;
    t[26] !== l?.toolbarInner || t[27] !== C || t[28] !== O || t[29] !== v || t[30] !== s || t[31] !== S ? (G = C && (0, V.jsx)(F, {
        "data-testid": S,
        className: r(l?.toolbarInner, !v && O),
        children: s
    }), t[26] = l?.toolbarInner, t[27] = C, t[28] = O, t[29] = v, t[30] = s, t[31] = S, t[32] = G) : G = t[32];
    let Ce;
    t[33] !== Se || t[34] !== G ? (Ce = (0, V.jsxs)(V.Fragment, {
        children: [Se, G]
    }), t[33] = Se, t[34] = G, t[35] = Ce) : Ce = t[35];
    let we = Ce,
        Te = T ? y : void 0,
        Ee = T ? fe : void 0,
        De = !v && xe,
        K;
    t[36] !== l?.stickyHeaderContent || t[37] !== l?.toolbarShell || t[38] !== w || t[39] !== O || t[40] !== v || t[41] !== we || t[42] !== x ? (K = w && (0, V.jsxs)(V.Fragment, {
        children: [(0, V.jsx)(`div`, {
            className: `pointer-events-none -mb-px h-px opacity-0`,
            ref: M
        }), (0, V.jsx)(P, {
            "data-page-table-background": `true`,
            "data-testid": x,
            className: r(v ? `group-data-scroll-from-top/scroll-root:border-token-border-light` : `group-data-scroll-from-top/page-table-scroll:border-token-border-light`, l?.toolbarShell),
            children: v ? (0, V.jsx)(`div`, {
                className: r(l?.stickyHeaderContent, O),
                children: we
            }) : we
        })]
    }), t[36] = l?.stickyHeaderContent, t[37] = l?.toolbarShell, t[38] = w, t[39] = O, t[40] = v, t[41] = we, t[42] = x, t[43] = K) : K = t[43];
    let Oe = l?.contentWrapper,
        q;
    t[44] !== O || t[45] !== Oe ? (q = r(Oe, O), t[44] = O, t[45] = Oe, t[46] = q) : q = t[46];
    let J;
    t[47] === d ? J = t[48] : (J = e => {
        se(e), d?.(e)
    }, t[47] = d, t[48] = J);
    let ke = l?.contentInner,
        Y;
    t[49] !== c || t[50] !== J || t[51] !== ke ? (Y = (0, V.jsx)(L, {
        ref: J,
        className: ke,
        children: c
    }), t[49] = c, t[50] = J, t[51] = ke, t[52] = Y) : Y = t[52];
    let X;
    t[53] !== q || t[54] !== Y ? (X = (0, V.jsx)(I, {
        className: q,
        children: Y
    }), t[53] = q, t[54] = Y, t[55] = X) : X = t[55];
    let Ae;
    t[56] !== pe || t[57] !== h || t[58] !== Te || t[59] !== Ee || t[60] !== De || t[61] !== K || t[62] !== X ? (Ae = (0, V.jsxs)(`div`, {
        ref: oe,
        className: `group/page-table-scroll w-full`,
        "data-page-table-background": `true`,
        "data-page-table-layout": Te,
        style: Ee,
        "data-testid": h,
        onDoubleClick: pe,
        children: [De, K, X]
    }), t[56] = pe, t[57] = h, t[58] = Te, t[59] = Ee, t[60] = De, t[61] = K, t[62] = X, t[63] = Ae) : Ae = t[63];
    let Z = Ae,
        Q;
    t[64] !== W || t[65] !== p || t[66] !== Z || t[67] !== E ? (Q = p == null ? Z : (0, V.jsx)(D, {
        ...p,
        multiselectEnabled$: E,
        onDoubleClick: W,
        children: Z
    }), t[64] = W, t[65] = p, t[66] = Z, t[67] = E, t[68] = Q) : Q = t[68];
    let $;
    return t[69] !== E || t[70] !== Q ? ($ = (0, V.jsx)(_, {
        multiselectEnabled$: E,
        children: Q
    }), t[69] = E, t[70] = Q, t[71] = $) : $ = t[71], $
}
var z, B, V, le, ue, de, fe, H, U = e((() => {
    z = m(), c(), g(), o(), h(), s(), i(), B = t(p()), re(), j(), V = f(), le = d[u.Medium], ue = `ps-12! md:ps-12!`, de = `[data-page-table-background]`, fe = {
        "--page-table-row-inset": `-1rem`,
        "--page-table-row-inset-size": `1rem`,
        "--page-table-checkbox-inset": `-3rem`
    }, H = {
        headerWrapper: `max-w-app-content px-4! pt-4 md:pt-10`,
        toolbarInner: `max-w-app-content px-4!`,
        contentWrapper: `max-w-app-content px-4! pb-8 md:pb-8`,
        contentInner: `mt-0`
    }
}));
export {
    R as n, U as r, H as t
};
//# sourceMappingURL=84bcef95-gx4v09sr4r263psk.js.map