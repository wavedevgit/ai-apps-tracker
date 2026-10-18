import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ib as n,
    Lb as ee,
    b5 as r,
    y5 as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as a,
    Vn as o,
    wn as s
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Bst as c,
    S0t as te,
    T0t as l,
    g0t as ne,
    x0t as re,
    y0t as ie,
    zst as ae
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as oe,
    t as u
} from "./83dae604-exf5hv8enx5fcto5.js";

function d(e) {
    "use forget";
    let t = (0, le.c)(77),
        {
            children: n,
            className: r,
            disabled: a,
            displayName: o,
            inputClassName: s,
            inputValue: c,
            label: l,
            name: u,
            onInputChange: d,
            openOnlyOnInputChange: m,
            placeholder: ue,
            popoverClassName: de,
            required: fe,
            suggestions: h,
            suggestionsFooter: g,
            onTabChange: _,
            RenderTab: v,
            type: y
        } = e,
        pe = m !== void 0 && m,
        me = ue === void 0 ? l : ue,
        b;
    t[0] === h ? b = t[1] : (b = typeof h == `object` ? Object.keys(h) : [], t[0] = h, t[1] = b);
    let x = b,
        [he, ge] = (0, f.useState)(x),
        [S, _e] = (0, f.useState)(0),
        C;
    t[2] !== _ || t[3] !== h ? (C = e => {
        _e(e);
        let t = Object.keys(h)[e];
        t && _?.(t)
    }, t[2] = _, t[3] = h, t[4] = C) : C = t[4];
    let w = C;
    (x.length !== he.length || x.some((e, t) => e !== he[t])) && (ge(x), _e(0));
    let [T, E] = (0, f.useState)(-1), [ve, D] = (0, f.useState)(!1), [ye, O] = (0, f.useState)(!1), k;
    t[5] === h ? k = t[6] : (k = Array.isArray(h) ? h.length > 0 : Object.values(h).some(ce), t[5] = h, t[6] = k);
    let be = k,
        A = Array.isArray(h) ? h : h[Object.keys(h)[S] ?? Object.keys(h)[0]],
        j;
    t[7] !== ye || t[8] !== c || t[9] !== pe ? (j = pe ? ye && c.trim() !== `` : c.trim() !== ``, t[7] = ye, t[8] = c, t[9] = pe, t[10] = j) : j = t[10];
    let M = (n != null || j && be) && ve,
        N = ee(),
        P = (0, f.useId)(),
        xe = (0, f.useRef)(null),
        F = (0, f.useRef)(null),
        I = (0, f.useRef)(null),
        Se = (0, f.useRef)(null),
        L;
    t[11] !== c || t[12] !== d ? (L = e => {
        let t = e.target.value;
        t !== c && (E(-1), I.current && (I.current.scrollTop = 0), d(t), O(!0), D(!0))
    }, t[11] = c, t[12] = d, t[13] = L) : L = t[13];
    let R = L,
        z;
    t[14] !== A.length || t[15] !== g ? (z = e => {
        E(e), e === A.length - 1 && g != null && I.current ? I.current.scrollTop = I.current.scrollHeight : F.current?.children.item(e)?.scrollIntoView({
            block: `nearest`
        })
    }, t[14] = A.length, t[15] = g, t[16] = z) : z = t[16];
    let B = z,
        V;
    t[17] !== A || t[18] !== B || t[19] !== T || t[20] !== S || t[21] !== M || t[22] !== w || t[23] !== h ? (V = e => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), E(-1), O(!1), D(!1)), e.key === `Tab` && (E(-1), O(!1), D(!1)), e.key === `ArrowDown` && A.length > 0 && (e.preventDefault(), B((T + 1) % A.length)), e.key === `ArrowUp` && A.length > 0 && (e.preventDefault(), B((T - 1 + A.length) % A.length)), T > -1 && !Array.isArray(h) && (e.key === `ArrowRight` && (e.preventDefault(), w((S + 1) % Object.keys(h).length), E(0)), e.key === `ArrowLeft` && (e.preventDefault(), w((S - 1 + Object.keys(h).length) % Object.keys(h).length), E(0)));
        let t = A[T];
        e.key === `Enter` && M && t && (e.preventDefault(), t.onClick(), E(-1), O(!1), D(!1))
    }, t[17] = A, t[18] = B, t[19] = T, t[20] = S, t[21] = M, t[22] = w, t[23] = h, t[24] = V) : V = t[24];
    let Ce = V,
        H;
    t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (H = [xe, F, I, Se], t[25] = H) : H = t[25];
    let we = H,
        U;
    t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (U = () => {
        E(-1), O(!1), D(!1)
    }, t[26] = U) : U = t[26], oe(we, U);
    let Te = M && A[T]?.id != null ? P + A[T].id : void 0,
        W;
    t[27] !== o || t[28] !== l ? (W = o == null ? {
        ariaLabel: l
    } : {
        displayName: o
    }, t[27] = o, t[28] = l, t[29] = W) : W = t[29];
    let G;
    t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (G = () => {
        O(!1), D(!0)
    }, t[30] = G) : G = t[30];
    let Ee = T > -1,
        K;
    t[31] !== r || t[32] !== a || t[33] !== P || t[34] !== s || t[35] !== c || t[36] !== M || t[37] !== u || t[38] !== R || t[39] !== Ce || t[40] !== me || t[41] !== fe || t[42] !== Te || t[43] !== W || t[44] !== Ee || t[45] !== y ? (K = (0, p.jsx)(ne, {
        asChild: !0,
        children: (0, p.jsx)(`div`, {
            className: `relative z-10 grow`,
            ref: xe,
            children: (0, p.jsx)(ae, {
                "aria-activedescendant": Te,
                "aria-autocomplete": `list`,
                "aria-controls": P,
                "aria-expanded": M,
                ...W,
                autoCapitalize: `off`,
                autoComplete: `off`,
                className: r,
                disabled: a,
                inputClassName: s,
                list: `suggested-choices`,
                name: u,
                onChange: R,
                onFocus: G,
                onKeyDown: Ce,
                placeholder: me,
                required: fe,
                role: `combobox`,
                spellCheck: !1,
                suppressFocus: Ee,
                type: y,
                value: c
            })
        })
    }), t[31] = r, t[32] = a, t[33] = P, t[34] = s, t[35] = c, t[36] = M, t[37] = u, t[38] = R, t[39] = Ce, t[40] = me, t[41] = fe, t[42] = Te, t[43] = W, t[44] = Ee, t[45] = y, t[46] = K) : K = t[46];
    let q;
    t[47] === de ? q = t[48] : (q = i(`border-token-border-default bg-token-main-surface-secondary group-has-focus:border-token-border-xheavy relative -top-1 z-50 m-0 max-h-[calc(var(--radix-popper-available-height)-2rem)] w-[var(--radix-popper-anchor-width)] cursor-pointer overflow-y-auto rounded-lg rounded-t-none border border-t-0 px-1 py-1`, de), t[47] = de, t[48] = q);
    let J;
    t[49] !== v || t[50] !== S || t[51] !== w || t[52] !== h ? (J = !Array.isArray(h) && (0, p.jsx)(`div`, {
        className: `mb-1 flex`,
        role: `tablist`,
        ref: Se,
        children: Object.keys(h).map((e, t) => (0, p.jsx)(`button`, {
            role: `tab`,
            className: i(`text-token-text-tertiary px-3 pb-2 text-xs font-bold`, S === t ? `border-b-2 font-bold` : `hover:text-token-text-primary cursor-pointer font-semibold`),
            "aria-selected": S === t,
            onClick: () => {
                w(t), E(0)
            },
            children: v ? (0, p.jsx)(v, {
                tab: e
            }) : e
        }, e))
    }), t[49] = v, t[50] = S, t[51] = w, t[52] = h, t[53] = J) : J = t[53];
    let Y;
    if (t[54] !== A || t[55] !== P || t[56] !== T) {
        let e;
        t[58] !== P || t[59] !== T ? (e = (e, t) => {
            let {
                id: n,
                className: ee,
                focusedClassName: r,
                onClick: a,
                children: o
            } = e;
            return (0, p.jsx)(`li`, {
                id: P + n,
                role: `option`,
                className: i(ee, T === t && r),
                onClick: () => {
                    a(), E(-1), O(!1), D(!1)
                },
                "aria-selected": T === t,
                children: o
            }, n)
        }, t[58] = P, t[59] = T, t[60] = e) : e = t[60], Y = A.map(e), t[54] = A, t[55] = P, t[56] = T, t[57] = Y
    } else Y = t[57];
    let X;
    t[61] !== P || t[62] !== Y ? (X = (0, p.jsx)(`ul`, {
        id: P,
        role: `listbox`,
        ref: F,
        children: Y
    }), t[61] = P, t[62] = Y, t[63] = X) : X = t[63];
    let De = A.length === 0 && n,
        Z;
    t[64] !== g || t[65] !== q || t[66] !== J || t[67] !== X || t[68] !== De ? (Z = (0, p.jsxs)(ie, {
        ref: I,
        className: q,
        onOpenAutoFocus: se,
        children: [J, X, De, g]
    }), t[64] = g, t[65] = q, t[66] = J, t[67] = X, t[68] = De, t[69] = Z) : Z = t[69];
    let Q;
    t[70] !== N || t[71] !== Z ? (Q = (0, p.jsx)(re, {
        ...N,
        children: Z
    }), t[70] = N, t[71] = Z, t[72] = Q) : Q = t[72];
    let $;
    return t[73] !== M || t[74] !== K || t[75] !== Q ? ($ = (0, p.jsxs)(te, {
        open: M,
        modal: !1,
        children: [K, Q]
    }), t[73] = M, t[74] = K, t[75] = Q, t[76] = $) : $ = t[76], $
}

function se(e) {
    e.preventDefault()
}

function ce(e) {
    return e.length > 0
}
var le, f, p, m = e((() => {
    le = s(), c(), n(), u(), l(), r(), f = t(o()), p = a()
}));
export {
    m as n, d as t
};
//# sourceMappingURL=92b4bb27-kqzu96b4wlp8vsgl.js.map