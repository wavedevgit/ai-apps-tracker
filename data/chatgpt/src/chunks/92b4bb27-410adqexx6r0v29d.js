import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    c7 as ee,
    l7 as n,
    nx as r,
    rx as te
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as i,
    Vn as a,
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bst as ne,
    Vst as s,
    i5t as re,
    o5t as ie,
    s5t as ae,
    t5t as oe,
    u5t as c
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    n as se,
    t as l
} from "./83dae604-ouqjqme8ut81e5su.js";

function u(e) {
    "use forget";
    let t = (0, ue.c)(77),
        {
            children: n,
            className: r,
            disabled: i,
            displayName: a,
            inputClassName: o,
            inputValue: s,
            label: c,
            name: l,
            onInputChange: u,
            openOnlyOnInputChange: p,
            placeholder: de,
            popoverClassName: fe,
            required: pe,
            suggestions: m,
            suggestionsFooter: h,
            onTabChange: g,
            RenderTab: _,
            type: v
        } = e,
        me = p !== void 0 && p,
        he = de === void 0 ? c : de,
        y;
    t[0] === m ? y = t[1] : (y = typeof m == `object` ? Object.keys(m) : [], t[0] = m, t[1] = y);
    let b = y,
        [ge, _e] = (0, d.useState)(b),
        [x, ve] = (0, d.useState)(0),
        S;
    t[2] !== g || t[3] !== m ? (S = e => {
        ve(e);
        let t = Object.keys(m)[e];
        t && g?.(t)
    }, t[2] = g, t[3] = m, t[4] = S) : S = t[4];
    let C = S;
    (b.length !== ge.length || b.some((e, t) => e !== ge[t])) && (_e(b), ve(0));
    let [w, T] = (0, d.useState)(-1), [ye, E] = (0, d.useState)(!1), [D, O] = (0, d.useState)(!1), k;
    t[5] === m ? k = t[6] : (k = Array.isArray(m) ? m.length > 0 : Object.values(m).some(le), t[5] = m, t[6] = k);
    let be = k,
        A = Array.isArray(m) ? m : m[Object.keys(m)[x] ?? Object.keys(m)[0]],
        j;
    t[7] !== D || t[8] !== s || t[9] !== me ? (j = me ? D && s.trim() !== `` : s.trim() !== ``, t[7] = D, t[8] = s, t[9] = me, t[10] = j) : j = t[10];
    let M = (n != null || j && be) && ye,
        N = te(),
        P = (0, d.useId)(),
        xe = (0, d.useRef)(null),
        F = (0, d.useRef)(null),
        I = (0, d.useRef)(null),
        Se = (0, d.useRef)(null),
        L;
    t[11] !== s || t[12] !== u ? (L = e => {
        let t = e.target.value;
        t !== s && (T(-1), I.current && (I.current.scrollTop = 0), u(t), O(!0), E(!0))
    }, t[11] = s, t[12] = u, t[13] = L) : L = t[13];
    let R = L,
        z;
    t[14] !== A.length || t[15] !== h ? (z = e => {
        T(e), e === A.length - 1 && h != null && I.current ? I.current.scrollTop = I.current.scrollHeight : F.current?.children.item(e)?.scrollIntoView({
            block: `nearest`
        })
    }, t[14] = A.length, t[15] = h, t[16] = z) : z = t[16];
    let B = z,
        V;
    t[17] !== A || t[18] !== B || t[19] !== w || t[20] !== x || t[21] !== M || t[22] !== C || t[23] !== m ? (V = e => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), T(-1), O(!1), E(!1)), e.key === `Tab` && (T(-1), O(!1), E(!1)), e.key === `ArrowDown` && A.length > 0 && (e.preventDefault(), B((w + 1) % A.length)), e.key === `ArrowUp` && A.length > 0 && (e.preventDefault(), B((w - 1 + A.length) % A.length)), w > -1 && !Array.isArray(m) && (e.key === `ArrowRight` && (e.preventDefault(), C((x + 1) % Object.keys(m).length), T(0)), e.key === `ArrowLeft` && (e.preventDefault(), C((x - 1 + Object.keys(m).length) % Object.keys(m).length), T(0)));
        let t = A[w];
        e.key === `Enter` && M && t && (e.preventDefault(), t.onClick(), T(-1), O(!1), E(!1))
    }, t[17] = A, t[18] = B, t[19] = w, t[20] = x, t[21] = M, t[22] = C, t[23] = m, t[24] = V) : V = t[24];
    let Ce = V,
        H;
    t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (H = [xe, F, I, Se], t[25] = H) : H = t[25];
    let we = H,
        U;
    t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (U = () => {
        T(-1), O(!1), E(!1)
    }, t[26] = U) : U = t[26], se(we, U);
    let Te = M && A[w]?.id != null ? P + A[w].id : void 0,
        W;
    t[27] !== a || t[28] !== c ? (W = a == null ? {
        ariaLabel: c
    } : {
        displayName: a
    }, t[27] = a, t[28] = c, t[29] = W) : W = t[29];
    let G;
    t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (G = () => {
        O(!1), E(!0)
    }, t[30] = G) : G = t[30];
    let Ee = w > -1,
        K;
    t[31] !== r || t[32] !== i || t[33] !== P || t[34] !== o || t[35] !== s || t[36] !== M || t[37] !== l || t[38] !== R || t[39] !== Ce || t[40] !== he || t[41] !== pe || t[42] !== Te || t[43] !== W || t[44] !== Ee || t[45] !== v ? (K = (0, f.jsx)(oe, {
        asChild: !0,
        children: (0, f.jsx)(`div`, {
            className: `relative z-10 grow`,
            ref: xe,
            children: (0, f.jsx)(ne, {
                "aria-activedescendant": Te,
                "aria-autocomplete": `list`,
                "aria-controls": P,
                "aria-expanded": M,
                ...W,
                autoCapitalize: `off`,
                autoComplete: `off`,
                className: r,
                disabled: i,
                inputClassName: o,
                list: `suggested-choices`,
                name: l,
                onChange: R,
                onFocus: G,
                onKeyDown: Ce,
                placeholder: he,
                required: pe,
                role: `combobox`,
                spellCheck: !1,
                suppressFocus: Ee,
                type: v,
                value: s
            })
        })
    }), t[31] = r, t[32] = i, t[33] = P, t[34] = o, t[35] = s, t[36] = M, t[37] = l, t[38] = R, t[39] = Ce, t[40] = he, t[41] = pe, t[42] = Te, t[43] = W, t[44] = Ee, t[45] = v, t[46] = K) : K = t[46];
    let q;
    t[47] === fe ? q = t[48] : (q = ee(`border-token-border-default bg-token-main-surface-secondary group-has-focus:border-token-border-xheavy relative -top-1 z-50 m-0 max-h-[calc(var(--radix-popper-available-height)-2rem)] w-[var(--radix-popper-anchor-width)] cursor-pointer overflow-y-auto rounded-lg rounded-t-none border border-t-0 px-1 py-1`, fe), t[47] = fe, t[48] = q);
    let J;
    t[49] !== _ || t[50] !== x || t[51] !== C || t[52] !== m ? (J = !Array.isArray(m) && (0, f.jsx)(`div`, {
        className: `mb-1 flex`,
        role: `tablist`,
        ref: Se,
        children: Object.keys(m).map((e, t) => (0, f.jsx)(`button`, {
            role: `tab`,
            className: ee(`text-token-text-tertiary px-3 pb-2 text-xs font-bold`, x === t ? `border-b-2 font-bold` : `hover:text-token-text-primary cursor-pointer font-semibold`),
            "aria-selected": x === t,
            onClick: () => {
                C(t), T(0)
            },
            children: _ ? (0, f.jsx)(_, {
                tab: e
            }) : e
        }, e))
    }), t[49] = _, t[50] = x, t[51] = C, t[52] = m, t[53] = J) : J = t[53];
    let Y;
    if (t[54] !== A || t[55] !== P || t[56] !== w) {
        let e;
        t[58] !== P || t[59] !== w ? (e = (e, t) => {
            let {
                id: n,
                className: r,
                focusedClassName: te,
                onClick: i,
                children: a
            } = e;
            return (0, f.jsx)(`li`, {
                id: P + n,
                role: `option`,
                className: ee(r, w === t && te),
                onClick: () => {
                    i(), T(-1), O(!1), E(!1)
                },
                "aria-selected": w === t,
                children: a
            }, n)
        }, t[58] = P, t[59] = w, t[60] = e) : e = t[60], Y = A.map(e), t[54] = A, t[55] = P, t[56] = w, t[57] = Y
    } else Y = t[57];
    let X;
    t[61] !== P || t[62] !== Y ? (X = (0, f.jsx)(`ul`, {
        id: P,
        role: `listbox`,
        ref: F,
        children: Y
    }), t[61] = P, t[62] = Y, t[63] = X) : X = t[63];
    let De = A.length === 0 && n,
        Z;
    t[64] !== h || t[65] !== q || t[66] !== J || t[67] !== X || t[68] !== De ? (Z = (0, f.jsxs)(re, {
        ref: I,
        className: q,
        onOpenAutoFocus: ce,
        children: [J, X, De, h]
    }), t[64] = h, t[65] = q, t[66] = J, t[67] = X, t[68] = De, t[69] = Z) : Z = t[69];
    let Q;
    t[70] !== N || t[71] !== Z ? (Q = (0, f.jsx)(ie, {
        ...N,
        children: Z
    }), t[70] = N, t[71] = Z, t[72] = Q) : Q = t[72];
    let $;
    return t[73] !== M || t[74] !== K || t[75] !== Q ? ($ = (0, f.jsxs)(ae, {
        open: M,
        modal: !1,
        children: [K, Q]
    }), t[73] = M, t[74] = K, t[75] = Q, t[76] = $) : $ = t[76], $
}

function ce(e) {
    e.preventDefault()
}

function le(e) {
    return e.length > 0
}
var ue, d, f, p = e((() => {
    ue = o(), s(), r(), l(), c(), n(), d = t(a()), f = i()
}));
export {
    p as n, u as t
};
//# sourceMappingURL=92b4bb27-410adqexx6r0v29d.js.map