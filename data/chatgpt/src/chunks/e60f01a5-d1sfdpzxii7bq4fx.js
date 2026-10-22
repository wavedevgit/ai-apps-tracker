import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    c7 as n,
    l7 as r
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as i,
    Vn as a,
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    NUt as s,
    aGt as c,
    jUt as l,
    sGt as u,
    vUn as d,
    yUn as f
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    l as p,
    o as m,
    s as h,
    t as g
} from "./9e958008-hadaldgvwxwe6776.js";

function _(e) {
    "use forget";
    let t = (0, S.c)(11),
        {
            className: r,
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
    t[2] !== r || t[3] !== u ? (d = n(`text-token-text-secondary`, u, r), t[2] = r, t[3] = u, t[4] = d) : d = t[4];
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

function v() {
    let e = document.activeElement;
    if (!(e instanceof HTMLElement) || e.dataset.pageTableCheckboxFocusTarget !== `true`) return;
    let t = e.closest(`[data-page-table-selectable-row="true"]`);
    t != null && queueMicrotask(() => {
        t.focus()
    })
}

function ee() {
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
            children: r,
            className: i,
            googleDriveItemId: a,
            source: o
        } = e,
        s;
    t[0] !== a || t[1] !== o ? (s = o ?? (a == null ? void 0 : {
        provider: `google_drive`,
        itemId: a
    }), t[0] = a, t[1] = o, t[2] = s) : s = t[2];
    let l = s,
        u;
    t[3] === l ? u = t[4] : (u = l == null ? void 0 : `library-${l.provider.replace(`_`,`-`)}-primary-icon-${l.itemId}`, t[3] = l, t[4] = u);
    let d;
    t[5] === i ? d = t[6] : (d = n(`border-token-border-default bg-token-bg-primary flex size-8 shrink-0 items-center justify-center rounded-[8px] border`, i), t[5] = i, t[6] = d);
    let f;
    t[7] !== r || t[8] !== u || t[9] !== d ? (f = (0, w.jsx)(`div`, {
        "data-library-list-row-icon": `true`,
        "data-testid": u,
        className: d,
        children: r
    }), t[7] = r, t[8] = u, t[9] = d, t[10] = f) : f = t[10];
    let p = f,
        m;
    return t[11] !== p || t[12] !== l ? (m = (0, w.jsx)(c, {
        source: l,
        children: p
    }), t[11] = p, t[12] = l, t[13] = m) : m = t[13], m
}

function b(e) {
    "use forget";
    let t = (0, S.c)(37),
        {
            label: r,
            disabled: i,
            keepFocusableWhenDisabled: a,
            focusable$: o,
            onOpenChange: s,
            open: c,
            tabIndex: l,
            variant: u,
            children: f
        } = e,
        p = i !== void 0 && i,
        h = a !== void 0 && a,
        g = u === void 0 ? `row` : u,
        {
            triggerRef: _,
            itemClassName: v,
            handleContentKeyDown: y,
            handleOpenChange: b,
            handleTriggerKeyDown: x,
            handleTriggerPointerDown: C
        } = ee(),
        T;
    t[0] !== b || t[1] !== s ? (T = e => {
        b(e), s?.(e)
    }, t[0] = b, t[1] = s, t[2] = T) : T = t[2];
    let E = p && h ? !0 : void 0,
        D = p && !h,
        O = g !== `row` && `rounded-full!`,
        k = g === `grid` && `border! border-token-border-light bg-token-bg-primary shadow-elevation-01`,
        A = g === `image-grid` && `border-0! bg-black/20! text-white! shadow-xs`,
        j;
    t[3] !== O || t[4] !== k || t[5] !== A ? (j = n(O, k, A), t[3] = O, t[4] = k, t[5] = A, t[6] = j) : j = t[6];
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
    t[15] !== o || t[16] !== r || t[17] !== j || t[18] !== M || t[19] !== N || t[20] !== P || t[21] !== E || t[22] !== D || t[23] !== l || t[24] !== _ ? (F = (0, w.jsx)(d.BasicTrigger, {
        asChild: !0,
        children: (0, w.jsx)(m, {
            ref: _,
            "aria-disabled": E,
            disabled: D,
            label: r,
            focusable$: o,
            tabIndex: l,
            className: j,
            onKeyDown: M,
            onPointerDown: N,
            onClick: P
        })
    }), t[15] = o, t[16] = r, t[17] = j, t[18] = M, t[19] = N, t[20] = P, t[21] = E, t[22] = D, t[23] = l, t[24] = _, t[25] = F) : F = t[25];
    let I;
    t[26] !== f || t[27] !== v ? (I = typeof f == `function` ? f({
        itemClassName: v
    }) : f, t[26] = f, t[27] = v, t[28] = I) : I = t[28];
    let L;
    t[29] !== y || t[30] !== I ? (L = (0, w.jsx)(d.Portal, {
        children: (0, w.jsx)(d.Content, {
            align: `end`,
            onKeyDown: y,
            size: `small`,
            className: `max-w-[var(--radix-dropdown-menu-content-available-width,100vw)]`,
            children: I
        })
    }), t[29] = y, t[30] = I, t[31] = L) : L = t[31];
    let R;
    return t[32] !== c || t[33] !== F || t[34] !== L || t[35] !== T ? (R = (0, w.jsxs)(d.Root, {
        modal: !1,
        open: c,
        onOpenChange: T,
        children: [F, L]
    }), t[32] = c, t[33] = F, t[34] = L, t[35] = T, t[36] = R) : R = t[36], R
}

function x(e) {
    "use forget";
    let t = (0, S.c)(57),
        {
            containerProps: r,
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
            actionsHidden: _,
            actionsWrapperTestId: v,
            actionsVisibility: ee,
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
        F = _ !== void 0 && _,
        I = ee === void 0 ? `mobile-always` : ee,
        L;
    t[0] !== m || t[1] !== F || t[2] !== v ? (L = m == null ? void 0 : e => {
        let t = typeof m == `function` ? m(e) : m;
        return (0, w.jsx)(`div`, {
            "data-testid": v,
            "aria-hidden": F ? !0 : void 0,
            className: n(F && `pointer-events-none invisible`),
            children: t
        })
    }, t[0] = m, t[1] = F, t[2] = v, t[3] = L) : L = t[3];
    let R = L,
        z;
    t[4] === C ? z = t[5] : (z = n(`relative z-10 flex min-w-0 items-center gap-3 text-start`, C), t[4] = C, t[5] = z);
    let B;
    t[6] === T ? B = t[7] : (B = n(`flex min-w-0 items-center gap-2`, T), t[6] = T, t[7] = B);
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
    t[21] !== O || t[22] !== G || t[23] !== z ? (K = (0, w.jsxs)(g, {
        className: z,
        children: [O, G]
    }), t[21] = O, t[22] = G, t[23] = z, t[24] = K) : K = t[24];
    let q;
    t[25] === E ? q = t[26] : (q = n(`text-token-text-secondary relative z-10 hidden truncate text-start text-[14px] leading-5 sm:block`, E), t[25] = E, t[26] = q);
    let J;
    t[27] !== M || t[28] !== q ? (J = (0, w.jsx)(g, {
        className: q,
        children: M
    }), t[27] = M, t[28] = q, t[29] = J) : J = t[29];
    let Y;
    t[30] === D ? Y = t[31] : (Y = n(`text-token-text-secondary relative z-10 hidden truncate text-start text-[14px] leading-5 sm:block`, D), t[30] = D, t[31] = Y);
    let X;
    t[32] !== Y || t[33] !== N ? (X = (0, w.jsx)(g, {
        className: Y,
        children: N
    }), t[32] = Y, t[33] = N, t[34] = X) : X = t[34];
    let Z;
    t[35] !== b || t[36] !== y || t[37] !== I || t[38] !== c || t[39] !== d || t[40] !== u || t[41] !== s || t[42] !== x || t[43] !== f || t[44] !== p || t[45] !== R || t[46] !== P || t[47] !== o || t[48] !== l || t[49] !== K || t[50] !== J || t[51] !== X ? (Z = (0, w.jsxs)(h, {
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
    if (r == null && i == null) return Q;
    let $;
    return t[53] !== r || t[54] !== i || t[55] !== Q ? ($ = (0, w.jsx)(`div`, {
        ref: i,
        ...r,
        children: Q
    }), t[53] = r, t[54] = i, t[55] = Q, t[56] = $) : $ = t[56], $
}
var S, C, w, T = e((() => {
    S = o(), f(), u(), s(), p(), r(), C = t(a()), w = i()
}));
export {
    v as a, b as i, _ as n, T as o, y as r, x as t
};
//# sourceMappingURL=e60f01a5-d1sfdpzxii7bq4fx.js.map