import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $K as n,
    A8 as r,
    K5 as i,
    ST as a,
    eq as o,
    iE as s,
    j5 as c,
    q5 as l,
    rE as u,
    rq as d,
    wT as ee
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as f,
    Vn as p,
    wn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    GUn as te,
    qUn as h
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Bx as g,
    Vx as _
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    n as v,
    t as y
} from "./6fd2d070-gawo59r1sdvxfmak.js";

function b(e, t, n = {
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

function x(e, t) {
    let n = t.top + S,
        r = t.bottom - S;
    return e < n ? -Math.max(1, Math.round(Math.min(1, (n - e) / S) * C)) : e > r ? Math.max(1, Math.round(Math.min(1, (e - r) / S) * C)) : 0
}
var S, C, w = e((() => {
    S = 48, C = 24
}));

function T(e, t) {
    return e.size === t.size && Array.from(e).every(e => t.has(e))
}

function E(e, t) {
    return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top
}

function D(e, t) {
    let n = e.surfaceRef.current;
    if (n == null) return;
    let r = {
            x: t.scrollRoot?.scrollLeft ?? 0,
            y: t.scrollRoot?.scrollTop ?? 0
        },
        i = b(t.origin, t.pointer, r),
        a = new Set(e.latestSelectableIdsRef.current),
        o = t.additive ? new Set(t.originalCheckedIds) : new Set,
        s = null;
    for (let e of n.querySelectorAll(M)) {
        let t = e.dataset.pageTableSelectionId;
        t == null || !a.has(t) || !E(i, e.getBoundingClientRect()) || (o.add(t), s = t)
    }
    e.setSelectionRectangle(i), T(t.lastCheckedIds, o) || (t.lastCheckedIds = o, e.latestSelectionChangeRef.current(o, s))
}

function ne(e, t) {
    let n = t.scrollRoot,
        r = e.surfaceRef.current?.ownerDocument.defaultView;
    n == null || r == null || e.animationFrameRef.current != null || x(t.pointer.y, n.getBoundingClientRect()) === 0 || (e.animationFrameRef.current = r.requestAnimationFrame(() => {
        if (e.animationFrameRef.current = null, e.sessionRef.current !== t || !t.active) return;
        let r = x(t.pointer.y, n.getBoundingClientRect()),
            i = Math.max(0, n.scrollHeight - n.clientHeight),
            a = n.scrollTop;
        n.scrollTop = Math.max(0, Math.min(i, a + r)), n.scrollTop !== a && (D(e, t), ne(e, t))
    }))
}

function O(e, t) {
    let n = e.sessionRef.current;
    if (n == null || t != null && n.pointerId != null && n.pointerId !== t) return;
    e.sessionRef.current = null, e.animationFrameRef.current != null && (window.cancelAnimationFrame(e.animationFrameRef.current), e.animationFrameRef.current = null);
    let r = e.surfaceRef.current;
    r != null && n.pointerId != null && r.hasPointerCapture?.(n.pointerId) && r.releasePointerCapture(n.pointerId), e.setSelectionRectangle(null)
}

function k(e) {
    "use forget";
    let t = (0, re.c)(25),
        {
            checkedIds: n,
            enabled: r,
            multiselectEnabled$: o,
            selectableIds: s,
            onSelectionChange: l,
            onDoubleClick: u,
            children: d
        } = e,
        ee = r === void 0 || r,
        f = c(o),
        p = (0, A.useRef)(null),
        m = (0, A.useRef)(null),
        te = (0, A.useRef)(null),
        h = (0, A.useRef)(s),
        g = (0, A.useRef)(l),
        [_, v] = (0, A.useState)(null),
        y;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (y = {
        surfaceRef: p,
        sessionRef: m,
        animationFrameRef: te,
        latestSelectableIdsRef: h,
        latestSelectionChangeRef: g,
        setSelectionRectangle: v
    }, t[0] = y) : y = t[0];
    let b = y,
        x, S;
    t[1] !== l || t[2] !== s ? (x = () => {
        h.current = s, g.current = l
    }, S = [l, s], t[1] = l, t[2] = s, t[3] = x, t[4] = S) : (x = t[3], S = t[4]), (0, A.useEffect)(x, S);
    let C, w;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (C = () => () => {
        te.current != null && window.cancelAnimationFrame(te.current)
    }, w = [], t[5] = C, t[6] = w) : (C = t[5], w = t[6]), (0, A.useEffect)(C, w);
    let T;
    t[7] !== n || t[8] !== f ? (T = function(e) {
        if (!f || e.defaultPrevented || e.button !== 0 || !e.isPrimary || e.pointerType != null && e.pointerType !== `mouse`) return;
        let t = e.currentTarget,
            r = e.target;
        if (!(r instanceof Element) || !t.contains(r) || r.closest(ae) != null) return;
        let i = t.ownerDocument.scrollingElement,
            a = t.closest(`[data-scroll-root]`) ?? (i instanceof HTMLElement ? i : null),
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
            originalCheckedIds: new Set(n),
            lastCheckedIds: new Set(n),
            additive: e.metaKey || e.ctrlKey || e.shiftKey,
            active: !1,
            scrollRoot: a
        }
    }, t[7] = n, t[8] = f, t[9] = T) : T = t[9];
    let E = T,
        k;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (k = function(e) {
        let t = m.current;
        if (t == null || t.pointerId != null && e.pointerId !== t.pointerId || (t.pointer = {
                x: e.clientX,
                y: e.clientY
            }, !t.active && Math.hypot(t.pointer.x - t.start.x, t.pointer.y - t.start.y) < ie)) return;
        t.active = !0;
        let n = b.surfaceRef.current;
        n != null && t.pointerId != null && n.setPointerCapture?.(t.pointerId), e.preventDefault(), D(b, t), ne(b, t)
    }, t[10] = k) : k = t[10];
    let M = k,
        N = _ != null && `select-none`,
        P;
    t[11] === N ? P = t[12] : (P = i(`relative min-h-0 w-full flex-1`, N), t[11] = N, t[12] = P);
    let oe = ee && f ? E : void 0,
        F, I, L, R;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (F = e => O(b, e.pointerId), I = e => {
        m.current?.active !== !0 && O(b, e.pointerId)
    }, L = e => O(b, e.pointerId), R = e => O(b, e.pointerId), t[13] = F, t[14] = I, t[15] = L, t[16] = R) : (F = t[13], I = t[14], L = t[15], R = t[16]);
    let z;
    t[17] === _ ? z = t[18] : (z = _ == null ? null : (0, j.jsx)(a, {
        asChild: !0,
        children: (0, j.jsx)(`div`, {
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
    }), t[17] = _, t[18] = z);
    let B;
    return t[19] !== d || t[20] !== u || t[21] !== P || t[22] !== oe || t[23] !== z ? (B = (0, j.jsxs)(`div`, {
        ref: p,
        "data-testid": `page-table-marquee-selection-surface`,
        className: P,
        onPointerDown: oe,
        onPointerMove: M,
        onPointerUp: F,
        onPointerLeave: I,
        onPointerCancel: L,
        onLostPointerCapture: R,
        onDoubleClick: u,
        children: [d, z]
    }), t[19] = d, t[20] = u, t[21] = P, t[22] = oe, t[23] = z, t[24] = B) : B = t[24], B
}
var re, A, j, ie, M, ae, N = e((() => {
    re = m(), w(), r(), ee(), l(), A = t(p()), j = f(), ie = 5, M = `[data-page-table-selection-id]`, ae = [M, `a`, `button`, `input`, `select`, `textarea`, `[contenteditable='true']`, `[draggable='true']`, `[role='button']`, `[role='checkbox']`, `[role='link']`, `[data-page-table-marquee-selection-ignore]`].join(`,`)
}));

function P(e, t) {
    let n = document.createElement(`div`);
    n.style.position = `absolute`, n.style.display = `none`, n.style.height = `var(${t},0px)`, e.appendChild(n);
    let r = getComputedStyle(n).height;
    return n.remove(), r
}

function oe(e) {
    return e ? `-${P(e,`--sticky-padding-top`)} 0px -${P(e,`--sticky-padding-bottom`)} 0px` : `0px`
}

function F(e) {
    "use forget";
    let t = (0, V.c)(8),
        n, r;
    t[0] === e ? (n = t[1], r = t[2]) : ({
        className: n,
        ...r
    } = e, t[0] = e, t[1] = n, t[2] = r);
    let a;
    t[3] === n ? a = t[4] : (a = i(`mx-auto flex w-full max-w-[810px] flex-col px-6 pt-3 md:pt-0`, n), t[3] = n, t[4] = a);
    let o;
    return t[5] !== r || t[6] !== a ? (o = (0, U.jsx)(`div`, {
        className: a,
        ...r
    }), t[5] = r, t[6] = a, t[7] = o) : o = t[7], o
}

function I(e) {
    "use forget";
    let t = (0, V.c)(8),
        n, r;
    t[0] === e ? (n = t[1], r = t[2]) : ({
        className: n,
        ...r
    } = e, t[0] = e, t[1] = n, t[2] = r);
    let a;
    t[3] === n ? a = t[4] : (a = i(`bg-token-bg-primary sticky top-0 z-20 border-b border-transparent`, n), t[3] = n, t[4] = a);
    let o;
    return t[5] !== r || t[6] !== a ? (o = (0, U.jsx)(`div`, {
        className: a,
        ...r
    }), t[5] = r, t[6] = a, t[7] = o) : o = t[7], o
}

function L(e) {
    "use forget";
    let t = (0, V.c)(8),
        n, r;
    t[0] === e ? (n = t[1], r = t[2]) : ({
        className: n,
        ...r
    } = e, t[0] = e, t[1] = n, t[2] = r);
    let a;
    t[3] === n ? a = t[4] : (a = i(`mx-auto flex w-full max-w-[810px] px-6`, n), t[3] = n, t[4] = a);
    let o;
    return t[5] !== r || t[6] !== a ? (o = (0, U.jsx)(`div`, {
        className: a,
        ...r
    }), t[5] = r, t[6] = a, t[7] = o) : o = t[7], o
}

function R(e) {
    "use forget";
    let t = (0, V.c)(8),
        n, r;
    t[0] === e ? (n = t[1], r = t[2]) : ({
        className: n,
        ...r
    } = e, t[0] = e, t[1] = n, t[2] = r);
    let a;
    t[3] === n ? a = t[4] : (a = i(`mx-auto flex h-full w-full max-w-[810px] flex-col px-6 pb-10 md:pb-12`, n), t[3] = n, t[4] = a);
    let o;
    return t[5] !== r || t[6] !== a ? (o = (0, U.jsx)(`div`, {
        "data-page-table-background": `true`,
        className: a,
        ...r
    }), t[5] = r, t[6] = a, t[7] = o) : o = t[7], o
}

function z(e) {
    "use forget";
    let t = (0, V.c)(12),
        n, r, a, o;
    t[0] === e ? (n = t[1], r = t[2], a = t[3], o = t[4]) : ({
        className: r,
        ref: o,
        children: n,
        ...a
    } = e, t[0] = e, t[1] = n, t[2] = r, t[3] = a, t[4] = o);
    let s;
    t[5] === r ? s = t[6] : (s = i(`mt-2 flex min-h-0 flex-1 flex-col`, r), t[5] = r, t[6] = s);
    let c;
    return t[7] !== n || t[8] !== a || t[9] !== o || t[10] !== s ? (c = (0, U.jsx)(`div`, {
        ref: o,
        "data-page-table-background": `true`,
        "data-testid": `page-table-background`,
        className: s,
        ...a,
        children: n
    }), t[7] = n, t[8] = a, t[9] = o, t[10] = s, t[11] = c) : c = t[11], c
}

function B(e) {
    "use forget";
    let t = (0, V.c)(72),
        {
            header: n,
            stickyHeader: r,
            toolbar: a,
            children: o,
            classNames: l,
            layout: u,
            contentInnerRef: d,
            disableMultiselectMobile: ee,
            multiselectEnabled$: f,
            marqueeSelection: p,
            onBackgroundDoubleClick: m,
            rootTestId: h,
            toolbarShellTestId: g,
            toolbarShellInnerTestId: v
        } = e,
        b = r !== void 0 && r,
        x = u === void 0 ? `default` : u,
        S = ee !== void 0 && ee,
        C = g === void 0 ? `page-table-toolbar-shell` : g,
        w = v === void 0 ? `page-table-toolbar-shell-inner` : v,
        T = a != null,
        E = T || b && n != null,
        D = x === `wide-compact`,
        ne = _(!0),
        O = f ?? ne,
        re = c(O),
        A = f != null && re ? ce : void 0,
        [j, ie] = (0, H.useState)(null),
        [M, ae] = (0, H.useState)(null),
        [N, P] = (0, H.useState)(null),
        B;
    t[0] === M ? B = t[1] : (B = M?.closest(`[data-scroll-root]`) ?? null, t[0] = M, t[1] = B);
    let W = B,
        G;
    t[2] === m ? G = t[3] : (G = e => {
        let t = e.target;
        e.defaultPrevented || e.button !== 0 || !(t instanceof Element) || t !== e.currentTarget && !t.matches(le) || (e.preventDefault(), m?.())
    }, t[2] = m, t[3] = G);
    let de = m == null ? void 0 : G,
        fe = p == null ? de : void 0,
        pe, me;
    t[4] !== E || t[5] !== j ? (pe = () => {
        if (!(!j || !E)) return s(j, `data-scroll-from-top`, !1), () => {
            s(j, `data-scroll-from-top`, !1)
        }
    }, me = [E, j], t[4] = E, t[5] = j, t[6] = pe, t[7] = me) : (pe = t[6], me = t[7]), (0, H.useEffect)(pe, me);
    let he, ge;
    t[8] !== j || t[9] !== W || t[10] !== b || t[11] !== N ? (he = () => {
        if (!(b || !j || !N || typeof IntersectionObserver > `u`)) return te({
            target: N,
            onChange: e => {
                (0, H.startTransition)(() => {
                    s(j, `data-scroll-from-top`, !e)
                })
            },
            options: {
                root: W,
                rootMargin: oe(W),
                threshold: 0
            }
        })
    }, ge = [j, W, b, N], t[8] = j, t[9] = W, t[10] = b, t[11] = N, t[12] = he, t[13] = ge) : (he = t[12], ge = t[13]), (0, H.useEffect)(he, ge);
    let _e, ve;
    t[14] !== S || t[15] !== O || t[16] !== j ? (_e = () => {
        if (!S) {
            O.set(!0);
            return
        }
        if (j == null) return;
        let e = () => {
            let e = j.getBoundingClientRect().width;
            O.set((e > 0 ? e : window.innerWidth) >= se)
        };
        if (e(), typeof ResizeObserver > `u`) return;
        let t = new ResizeObserver(e);
        return t.observe(j), () => t.disconnect()
    }, ve = [S, O, j], t[14] = S, t[15] = O, t[16] = j, t[17] = _e, t[18] = ve) : (_e = t[17], ve = t[18]), (0, H.useEffect)(_e, ve);
    let ye;
    t[19] !== l?.headerWrapper || t[20] !== T || t[21] !== D || t[22] !== n || t[23] !== A || t[24] !== b ? (ye = n && (0, U.jsx)(F, {
        className: i(T && `pb-6 md:pb-10`, D && (T ? `md:pb-3!` : `pb-0! md:pb-6!`), l?.headerWrapper, !b && A),
        children: n
    }), t[19] = l?.headerWrapper, t[20] = T, t[21] = D, t[22] = n, t[23] = A, t[24] = b, t[25] = ye) : ye = t[25];
    let be = ye,
        xe = b && be,
        K;
    t[26] !== l?.toolbarInner || t[27] !== T || t[28] !== A || t[29] !== b || t[30] !== a || t[31] !== w ? (K = T && (0, U.jsx)(L, {
        "data-testid": w,
        className: i(l?.toolbarInner, !b && A),
        children: a
    }), t[26] = l?.toolbarInner, t[27] = T, t[28] = A, t[29] = b, t[30] = a, t[31] = w, t[32] = K) : K = t[32];
    let Se;
    t[33] !== xe || t[34] !== K ? (Se = (0, U.jsxs)(U.Fragment, {
        children: [xe, K]
    }), t[33] = xe, t[34] = K, t[35] = Se) : Se = t[35];
    let Ce = Se,
        we = D ? x : void 0,
        Te = D ? ue : void 0,
        Ee = !b && be,
        q;
    t[36] !== l?.stickyHeaderContent || t[37] !== l?.toolbarShell || t[38] !== E || t[39] !== A || t[40] !== b || t[41] !== Ce || t[42] !== C ? (q = E && (0, U.jsxs)(U.Fragment, {
        children: [(0, U.jsx)(`div`, {
            className: `pointer-events-none -mb-px h-px opacity-0`,
            ref: P
        }), (0, U.jsx)(I, {
            "data-page-table-background": `true`,
            "data-testid": C,
            className: i(b ? `group-data-scroll-from-top/scroll-root:border-token-border-light` : `group-data-scroll-from-top/page-table-scroll:border-token-border-light`, l?.toolbarShell),
            children: b ? (0, U.jsx)(`div`, {
                className: i(l?.stickyHeaderContent, A),
                children: Ce
            }) : Ce
        })]
    }), t[36] = l?.stickyHeaderContent, t[37] = l?.toolbarShell, t[38] = E, t[39] = A, t[40] = b, t[41] = Ce, t[42] = C, t[43] = q) : q = t[43];
    let De = l?.contentWrapper,
        J;
    t[44] !== A || t[45] !== De ? (J = i(De, A), t[44] = A, t[45] = De, t[46] = J) : J = t[46];
    let Y;
    t[47] === d ? Y = t[48] : (Y = e => {
        ae(e), d?.(e)
    }, t[47] = d, t[48] = Y);
    let Oe = l?.contentInner,
        X;
    t[49] !== o || t[50] !== Y || t[51] !== Oe ? (X = (0, U.jsx)(z, {
        ref: Y,
        className: Oe,
        children: o
    }), t[49] = o, t[50] = Y, t[51] = Oe, t[52] = X) : X = t[52];
    let Z;
    t[53] !== J || t[54] !== X ? (Z = (0, U.jsx)(R, {
        className: J,
        children: X
    }), t[53] = J, t[54] = X, t[55] = Z) : Z = t[55];
    let ke;
    t[56] !== fe || t[57] !== h || t[58] !== we || t[59] !== Te || t[60] !== Ee || t[61] !== q || t[62] !== Z ? (ke = (0, U.jsxs)(`div`, {
        ref: ie,
        className: `group/page-table-scroll w-full`,
        "data-page-table-background": `true`,
        "data-page-table-layout": we,
        style: Te,
        "data-testid": h,
        onDoubleClick: fe,
        children: [Ee, q, Z]
    }), t[56] = fe, t[57] = h, t[58] = we, t[59] = Te, t[60] = Ee, t[61] = q, t[62] = Z, t[63] = ke) : ke = t[63];
    let Q = ke,
        $;
    t[64] !== de || t[65] !== p || t[66] !== Q || t[67] !== O ? ($ = p == null ? Q : (0, U.jsx)(k, {
        ...p,
        multiselectEnabled$: O,
        onDoubleClick: de,
        children: Q
    }), t[64] = de, t[65] = p, t[66] = Q, t[67] = O, t[68] = $) : $ = t[68];
    let Ae;
    return t[69] !== O || t[70] !== $ ? (Ae = (0, U.jsx)(y, {
        multiselectEnabled$: O,
        children: $
    }), t[69] = O, t[70] = $, t[71] = Ae) : Ae = t[71], Ae
}
var V, H, U, se, ce, le, ue, W, G = e((() => {
    V = m(), r(), g(), u(), h(), d(), l(), H = t(p()), v(), N(), U = f(), se = n[o.Medium], ce = `ps-12! md:ps-12!`, le = `[data-page-table-background]`, ue = {
        "--page-table-row-inset": `-1rem`,
        "--page-table-row-inset-size": `1rem`,
        "--page-table-checkbox-inset": `-3rem`
    }, W = {
        headerWrapper: `max-w-app-content px-4! pt-4 md:pt-10`,
        toolbarInner: `max-w-app-content px-4!`,
        contentWrapper: `max-w-app-content px-4! pb-8 md:pb-8`,
        contentInner: `mt-0`
    }
}));
export {
    B as n, G as r, W as t
};
//# sourceMappingURL=84bcef95-lr373n3sujvwwqn0.js.map