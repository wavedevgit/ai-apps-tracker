import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    X5 as n,
    Y5 as r
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as i,
    Vn as a,
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    IUt as s,
    LHn as c,
    PUt as l,
    RHn as u,
    cGt as d,
    uGt as f
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    l as p,
    o as m,
    s as ee,
    t as h
} from "./9e958008-b2jwvhj9ix5x09hc.js";

function g(e) {
    "use forget";
    let t = (0, S.c)(11),
        {
            className: n,
            externalAccount: i,
            truncate: a
        } = e,
        o = a === void 0 || a,
        s;
    t[0] === i ? s = t[1] : (s = l(i), t[0] = i, t[1] = s);
    let c = s;
    if (c == null) return null;
    let u = o ? `max-w-[40%] shrink-0 truncate` : `max-w-full min-w-0 break-all`,
        d;
    t[2] !== n || t[3] !== u ? (d = r(`text-token-text-secondary`, u, n), t[2] = n, t[3] = u, t[4] = d) : d = t[4];
    let f;
    t[5] === c ? f = t[6] : (f = [`·`, c], t[5] = c, t[6] = f);
    let p = f.join(` `),
        m;
    return t[7] !== c || t[8] !== d || t[9] !== p ? (m = (0, w.jsx)(`span`, {
        title: c,
        className: d,
        children: p
    }), t[7] = c, t[8] = d, t[9] = p, t[10] = m) : m = t[10], m
}

function _() {
    let e = document.activeElement;
    if (!(e instanceof HTMLElement) || e.dataset.pageTableCheckboxFocusTarget !== `true`) return;
    let t = e.closest(`[data-page-table-selectable-row="true"]`);
    t != null && queueMicrotask(() => {
        t.focus()
    })
}

function v() {
    "use forget";
    let e = (0, S.c)(6),
        t = (0, C.useRef)(null),
        n = (0, C.useRef)(!1),
        [r, i] = (0, C.useState)(!1),
        a = r ? `[outline:none] focus:[outline:none] focus-visible:[outline:none]` : void 0,
        o, s, c, l;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = e => {
        if (!e) {
            i(!1);
            let e = t.current;
            n.current && e != null && window.setTimeout(() => {
                window.requestAnimationFrame(() => {
                    document.activeElement === e && e.blur()
                })
            }, 0), n.current = !1
        }
    }, s = () => {
        i(!1), n.current = !1
    }, c = () => {
        i(!1), n.current = !1
    }, l = () => {
        i(!0), n.current = !0
    }, e[0] = o, e[1] = s, e[2] = c, e[3] = l) : (o = e[0], s = e[1], c = e[2], l = e[3]);
    let u;
    return e[4] === a ? u = e[5] : (u = {
        triggerRef: t,
        itemClassName: a,
        handleOpenChange: o,
        handleContentKeyDown: s,
        handleTriggerKeyDown: c,
        handleTriggerPointerDown: l
    }, e[4] = a, e[5] = u), u
}

function y(e) {
    "use forget";
    let t = (0, S.c)(14),
        {
            children: n,
            className: i,
            googleDriveItemId: a,
            source: o
        } = e,
        s;
    t[0] !== a || t[1] !== o ? (s = o ?? (a == null ? void 0 : {
        provider: `google_drive`,
        itemId: a
    }), t[0] = a, t[1] = o, t[2] = s) : s = t[2];
    let c = s,
        l;
    t[3] === c ? l = t[4] : (l = c == null ? void 0 : `library-${c.provider.replace(`_`,`-`)}-primary-icon-${c.itemId}`, t[3] = c, t[4] = l);
    let u;
    t[5] === i ? u = t[6] : (u = r(`border-token-border-default bg-token-bg-primary flex size-8 shrink-0 items-center justify-center rounded-[8px] border`, i), t[5] = i, t[6] = u);
    let f;
    t[7] !== n || t[8] !== l || t[9] !== u ? (f = (0, w.jsx)(`div`, {
        "data-library-list-row-icon": `true`,
        "data-testid": l,
        className: u,
        children: n
    }), t[7] = n, t[8] = l, t[9] = u, t[10] = f) : f = t[10];
    let p = f,
        m;
    return t[11] !== p || t[12] !== c ? (m = (0, w.jsx)(d, {
        source: c,
        children: p
    }), t[11] = p, t[12] = c, t[13] = m) : m = t[13], m
}

function b(e) {
    "use forget";
    let t = (0, S.c)(37),
        {
            label: n,
            disabled: i,
            keepFocusableWhenDisabled: a,
            focusable$: o,
            onOpenChange: s,
            open: l,
            tabIndex: u,
            variant: d,
            children: f
        } = e,
        p = i !== void 0 && i,
        ee = a !== void 0 && a,
        h = d === void 0 ? `row` : d,
        {
            triggerRef: g,
            itemClassName: _,
            handleContentKeyDown: y,
            handleOpenChange: b,
            handleTriggerKeyDown: x,
            handleTriggerPointerDown: C
        } = v(),
        T;
    t[0] !== b || t[1] !== s ? (T = e => {
        b(e), s?.(e)
    }, t[0] = b, t[1] = s, t[2] = T) : T = t[2];
    let E = p && ee ? !0 : void 0,
        D = p && !ee,
        O = h !== `row` && `rounded-full!`,
        k = h === `grid` && `border! border-token-border-light bg-token-bg-primary shadow-elevation-01`,
        A = h === `image-grid` && `border-0! bg-black/20! text-white! shadow-xs`,
        j;
    t[3] !== O || t[4] !== k || t[5] !== A ? (j = r(O, k, A), t[3] = O, t[4] = k, t[5] = A, t[6] = j) : j = t[6];
    let M;
    t[7] !== p || t[8] !== x ? (M = e => {
        if (e.stopPropagation(), p) {
            (e.key === `Enter` || e.key === ` ` || e.key === `ArrowDown`) && e.preventDefault();
            return
        }
        x()
    }, t[7] = p, t[8] = x, t[9] = M) : M = t[9];
    let N;
    t[10] !== p || t[11] !== C ? (N = e => {
        if (e.stopPropagation(), p) {
            e.preventDefault();
            return
        }
        C()
    }, t[10] = p, t[11] = C, t[12] = N) : N = t[12];
    let P;
    t[13] === p ? P = t[14] : (P = e => {
        p && e.preventDefault()
    }, t[13] = p, t[14] = P);
    let F;
    t[15] !== o || t[16] !== n || t[17] !== j || t[18] !== M || t[19] !== N || t[20] !== P || t[21] !== E || t[22] !== D || t[23] !== u || t[24] !== g ? (F = (0, w.jsx)(c.BasicTrigger, {
        asChild: !0,
        children: (0, w.jsx)(m, {
            ref: g,
            "aria-disabled": E,
            disabled: D,
            label: n,
            focusable$: o,
            tabIndex: u,
            className: j,
            onKeyDown: M,
            onPointerDown: N,
            onClick: P
        })
    }), t[15] = o, t[16] = n, t[17] = j, t[18] = M, t[19] = N, t[20] = P, t[21] = E, t[22] = D, t[23] = u, t[24] = g, t[25] = F) : F = t[25];
    let I;
    t[26] !== f || t[27] !== _ ? (I = typeof f == `function` ? f({
        itemClassName: _
    }) : f, t[26] = f, t[27] = _, t[28] = I) : I = t[28];
    let L;
    t[29] !== y || t[30] !== I ? (L = (0, w.jsx)(c.Portal, {
        children: (0, w.jsx)(c.Content, {
            align: `end`,
            onKeyDown: y,
            size: `small`,
            className: `max-w-[var(--radix-dropdown-menu-content-available-width,100vw)]`,
            children: I
        })
    }), t[29] = y, t[30] = I, t[31] = L) : L = t[31];
    let R;
    return t[32] !== l || t[33] !== F || t[34] !== L || t[35] !== T ? (R = (0, w.jsxs)(c.Root, {
        modal: !1,
        open: l,
        onOpenChange: T,
        children: [F, L]
    }), t[32] = l, t[33] = F, t[34] = L, t[35] = T, t[36] = R) : R = t[36], R
}

function x(e) {
    "use forget";
    let t = (0, S.c)(57),
        {
            containerProps: n,
            containerRef: i,
            selectionEnabled: a,
            selectionId: o,
            checked: s,
            active: c,
            showCheckbox: l,
            checkboxLabel: u,
            checkboxBridgeTestId: d,
            onActivate: f,
            onCheckedChange: p,
            actions: m,
            actionsHidden: g,
            actionsWrapperTestId: _,
            actionsVisibility: v,
            actionsFocusable: y,
            actionsClassName: b,
            className: x,
            mainCellClassName: C,
            titleRowClassName: T,
            secondaryCellClassName: E,
            tertiaryCellClassName: D,
            leadingVisual: O,
            title: k,
            titleAccessory: A,
            mobileMetadata: j,
            secondaryContent: M,
            tertiaryContent: N
        } = e,
        P = a === void 0 || a,
        F = g !== void 0 && g,
        I = v === void 0 ? `mobile-always` : v,
        L;
    t[0] !== m || t[1] !== F || t[2] !== _ ? (L = m == null ? void 0 : e => {
        let t = typeof m == `function` ? m(e) : m;
        return (0, w.jsx)(`div`, {
            "data-testid": _,
            "aria-hidden": F ? !0 : void 0,
            className: r(F && `pointer-events-none invisible`),
            children: t
        })
    }, t[0] = m, t[1] = F, t[2] = _, t[3] = L) : L = t[3];
    let R = L,
        z;
    t[4] === C ? z = t[5] : (z = r(`relative z-10 flex min-w-0 items-center gap-3 text-start`, C), t[4] = C, t[5] = z);
    let B;
    t[6] === T ? B = t[7] : (B = r(`flex min-w-0 items-center gap-2`, T), t[6] = T, t[7] = B);
    let V;
    t[8] === k ? V = t[9] : (V = (0, w.jsx)(`div`, {
        className: `min-w-0 flex-1 overflow-hidden`,
        children: k
    }), t[8] = k, t[9] = V);
    let H;
    t[10] === A ? H = t[11] : (H = A == null ? null : (0, w.jsx)(`div`, {
        className: `shrink-0`,
        children: A
    }), t[10] = A, t[11] = H);
    let U;
    t[12] !== B || t[13] !== V || t[14] !== H ? (U = (0, w.jsxs)(`div`, {
        className: B,
        children: [V, H]
    }), t[12] = B, t[13] = V, t[14] = H, t[15] = U) : U = t[15];
    let W;
    t[16] === j ? W = t[17] : (W = j == null ? null : (0, w.jsx)(`div`, {
        className: `text-token-text-secondary mt-1 truncate text-[12px] leading-[16px] sm:hidden`,
        children: j
    }), t[16] = j, t[17] = W);
    let G;
    t[18] !== W || t[19] !== U ? (G = (0, w.jsxs)(`div`, {
        className: `min-w-0 flex-1 overflow-hidden`,
        children: [U, W]
    }), t[18] = W, t[19] = U, t[20] = G) : G = t[20];
    let K;
    t[21] !== O || t[22] !== G || t[23] !== z ? (K = (0, w.jsxs)(h, {
        className: z,
        children: [O, G]
    }), t[21] = O, t[22] = G, t[23] = z, t[24] = K) : K = t[24];
    let q;
    t[25] === E ? q = t[26] : (q = r(`text-token-text-secondary relative z-10 hidden truncate text-start text-[14px] leading-5 sm:block`, E), t[25] = E, t[26] = q);
    let J;
    t[27] !== M || t[28] !== q ? (J = (0, w.jsx)(h, {
        className: q,
        children: M
    }), t[27] = M, t[28] = q, t[29] = J) : J = t[29];
    let Y;
    t[30] === D ? Y = t[31] : (Y = r(`text-token-text-secondary relative z-10 hidden truncate text-start text-[14px] leading-5 sm:block`, D), t[30] = D, t[31] = Y);
    let X;
    t[32] !== Y || t[33] !== N ? (X = (0, w.jsx)(h, {
        className: Y,
        children: N
    }), t[32] = Y, t[33] = N, t[34] = X) : X = t[34];
    let Z;
    t[35] !== b || t[36] !== y || t[37] !== I || t[38] !== c || t[39] !== d || t[40] !== u || t[41] !== s || t[42] !== x || t[43] !== f || t[44] !== p || t[45] !== R || t[46] !== P || t[47] !== o || t[48] !== l || t[49] !== K || t[50] !== J || t[51] !== X ? (Z = (0, w.jsxs)(ee, {
        selectionEnabled: P,
        selectionId: o,
        checked: s,
        active: c,
        showCheckbox: l,
        checkboxLabel: u,
        checkboxBridgeTestId: d,
        onActivate: f,
        onCheckedChange: p,
        actions: R,
        actionsVisibility: I,
        actionsFocusable: y,
        actionsClassName: b,
        className: x,
        children: [K, J, X]
    }), t[35] = b, t[36] = y, t[37] = I, t[38] = c, t[39] = d, t[40] = u, t[41] = s, t[42] = x, t[43] = f, t[44] = p, t[45] = R, t[46] = P, t[47] = o, t[48] = l, t[49] = K, t[50] = J, t[51] = X, t[52] = Z) : Z = t[52];
    let Q = Z;
    if (n == null && i == null) return Q;
    let $;
    return t[53] !== n || t[54] !== i || t[55] !== Q ? ($ = (0, w.jsx)(`div`, {
        ref: i,
        ...n,
        children: Q
    }), t[53] = n, t[54] = i, t[55] = Q, t[56] = $) : $ = t[56], $
}
var S, C, w, T = e((() => {
    S = o(), u(), f(), s(), p(), n(), C = t(a()), w = i()
}));
export {
    _ as a, b as i, g as n, T as o, y as r, x as t
};
//# sourceMappingURL=e60f01a5-hod77ewu7vjlzrbn.js.map