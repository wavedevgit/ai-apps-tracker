import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as ee,
    Y5 as n,
    nx as te,
    tx as r
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as i,
    Vn as a,
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $8t as ne,
    J8t as re,
    Ust as ie,
    Wst as s,
    Z8t as ae,
    e5t as oe,
    r5t as c
} from "./conversation-small-cy5f8pl0g26s86so.js";
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
        y = p !== void 0 && p,
        me = de === void 0 ? c : de,
        b;
    t[0] === m ? b = t[1] : (b = typeof m == `object` ? Object.keys(m) : [], t[0] = m, t[1] = b);
    let x = b,
        [he, ge] = (0, d.useState)(x),
        [S, _e] = (0, d.useState)(0),
        C;
    t[2] !== g || t[3] !== m ? (C = e => {
        _e(e);
        let t = Object.keys(m)[e];
        t && g?.(t)
    }, t[2] = g, t[3] = m, t[4] = C) : C = t[4];
    let w = C;
    (x.length !== he.length || x.some((e, t) => e !== he[t])) && (ge(x), _e(0));
    let [T, E] = (0, d.useState)(-1), [ve, D] = (0, d.useState)(!1), [ye, O] = (0, d.useState)(!1), k;
    t[5] === m ? k = t[6] : (k = Array.isArray(m) ? m.length > 0 : Object.values(m).some(le), t[5] = m, t[6] = k);
    let be = k,
        A = Array.isArray(m) ? m : m[Object.keys(m)[S] ?? Object.keys(m)[0]],
        j;
    t[7] !== ye || t[8] !== s || t[9] !== y ? (j = y ? ye && s.trim() !== `` : s.trim() !== ``, t[7] = ye, t[8] = s, t[9] = y, t[10] = j) : j = t[10];
    let M = (n != null || j && be) && ve,
        N = te(),
        P = (0, d.useId)(),
        xe = (0, d.useRef)(null),
        F = (0, d.useRef)(null),
        I = (0, d.useRef)(null),
        Se = (0, d.useRef)(null),
        L;
    t[11] !== s || t[12] !== u ? (L = e => {
        let t = e.target.value;
        t !== s && (E(-1), I.current && (I.current.scrollTop = 0), u(t), O(!0), D(!0))
    }, t[11] = s, t[12] = u, t[13] = L) : L = t[13];
    let R = L,
        z;
    t[14] !== A.length || t[15] !== h ? (z = e => {
        E(e), e === A.length - 1 && h != null && I.current ? I.current.scrollTop = I.current.scrollHeight : F.current?.children.item(e)?.scrollIntoView({
            block: `nearest`
        })
    }, t[14] = A.length, t[15] = h, t[16] = z) : z = t[16];
    let B = z,
        V;
    t[17] !== A || t[18] !== B || t[19] !== T || t[20] !== S || t[21] !== M || t[22] !== w || t[23] !== m ? (V = e => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), E(-1), O(!1), D(!1)), e.key === `Tab` && (E(-1), O(!1), D(!1)), e.key === `ArrowDown` && A.length > 0 && (e.preventDefault(), B((T + 1) % A.length)), e.key === `ArrowUp` && A.length > 0 && (e.preventDefault(), B((T - 1 + A.length) % A.length)), T > -1 && !Array.isArray(m) && (e.key === `ArrowRight` && (e.preventDefault(), w((S + 1) % Object.keys(m).length), E(0)), e.key === `ArrowLeft` && (e.preventDefault(), w((S - 1 + Object.keys(m).length) % Object.keys(m).length), E(0)));
        let t = A[T];
        e.key === `Enter` && M && t && (e.preventDefault(), t.onClick(), E(-1), O(!1), D(!1))
    }, t[17] = A, t[18] = B, t[19] = T, t[20] = S, t[21] = M, t[22] = w, t[23] = m, t[24] = V) : V = t[24];
    let Ce = V,
        H;
    t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (H = [xe, F, I, Se], t[25] = H) : H = t[25];
    let we = H,
        U;
    t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (U = () => {
        E(-1), O(!1), D(!1)
    }, t[26] = U) : U = t[26], se(we, U);
    let Te = M && A[T]?.id != null ? P + A[T].id : void 0,
        W;
    t[27] !== a || t[28] !== c ? (W = a == null ? {
        ariaLabel: c
    } : {
        displayName: a
    }, t[27] = a, t[28] = c, t[29] = W) : W = t[29];
    let G;
    t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (G = () => {
        O(!1), D(!0)
    }, t[30] = G) : G = t[30];
    let Ee = T > -1,
        K;
    t[31] !== r || t[32] !== i || t[33] !== P || t[34] !== o || t[35] !== s || t[36] !== M || t[37] !== l || t[38] !== R || t[39] !== Ce || t[40] !== me || t[41] !== pe || t[42] !== Te || t[43] !== W || t[44] !== Ee || t[45] !== v ? (K = (0, f.jsx)(re, {
        asChild: !0,
        children: (0, f.jsx)(`div`, {
            className: `relative z-10 grow`,
            ref: xe,
            children: (0, f.jsx)(ie, {
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
                placeholder: me,
                required: pe,
                role: `combobox`,
                spellCheck: !1,
                suppressFocus: Ee,
                type: v,
                value: s
            })
        })
    }), t[31] = r, t[32] = i, t[33] = P, t[34] = o, t[35] = s, t[36] = M, t[37] = l, t[38] = R, t[39] = Ce, t[40] = me, t[41] = pe, t[42] = Te, t[43] = W, t[44] = Ee, t[45] = v, t[46] = K) : K = t[46];
    let q;
    t[47] === fe ? q = t[48] : (q = ee(`border-token-border-default bg-token-main-surface-secondary group-has-focus:border-token-border-xheavy relative -top-1 z-50 m-0 max-h-[calc(var(--radix-popper-available-height)-2rem)] w-[var(--radix-popper-anchor-width)] cursor-pointer overflow-y-auto rounded-lg rounded-t-none border border-t-0 px-1 py-1`, fe), t[47] = fe, t[48] = q);
    let J;
    t[49] !== _ || t[50] !== S || t[51] !== w || t[52] !== m ? (J = !Array.isArray(m) && (0, f.jsx)(`div`, {
        className: `mb-1 flex`,
        role: `tablist`,
        ref: Se,
        children: Object.keys(m).map((e, t) => (0, f.jsx)(`button`, {
            role: `tab`,
            className: ee(`text-token-text-tertiary px-3 pb-2 text-xs font-bold`, S === t ? `border-b-2 font-bold` : `hover:text-token-text-primary cursor-pointer font-semibold`),
            "aria-selected": S === t,
            onClick: () => {
                w(t), E(0)
            },
            children: _ ? (0, f.jsx)(_, {
                tab: e
            }) : e
        }, e))
    }), t[49] = _, t[50] = S, t[51] = w, t[52] = m, t[53] = J) : J = t[53];
    let Y;
    if (t[54] !== A || t[55] !== P || t[56] !== T) {
        let e;
        t[58] !== P || t[59] !== T ? (e = (e, t) => {
            let {
                id: n,
                className: te,
                focusedClassName: r,
                onClick: i,
                children: a
            } = e;
            return (0, f.jsx)(`li`, {
                id: P + n,
                role: `option`,
                className: ee(te, T === t && r),
                onClick: () => {
                    i(), E(-1), O(!1), D(!1)
                },
                "aria-selected": T === t,
                children: a
            }, n)
        }, t[58] = P, t[59] = T, t[60] = e) : e = t[60], Y = A.map(e), t[54] = A, t[55] = P, t[56] = T, t[57] = Y
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
    t[64] !== h || t[65] !== q || t[66] !== J || t[67] !== X || t[68] !== De ? (Z = (0, f.jsxs)(ae, {
        ref: I,
        className: q,
        onOpenAutoFocus: ce,
        children: [J, X, De, h]
    }), t[64] = h, t[65] = q, t[66] = J, t[67] = X, t[68] = De, t[69] = Z) : Z = t[69];
    let Q;
    t[70] !== N || t[71] !== Z ? (Q = (0, f.jsx)(ne, {
        ...N,
        children: Z
    }), t[70] = N, t[71] = Z, t[72] = Q) : Q = t[72];
    let $;
    return t[73] !== M || t[74] !== K || t[75] !== Q ? ($ = (0, f.jsxs)(oe, {
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
//# sourceMappingURL=92b4bb27-ohbsri0cnf4sf7zo.js.map