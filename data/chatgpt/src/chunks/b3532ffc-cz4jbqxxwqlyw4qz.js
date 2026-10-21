import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    c7 as r,
    eE as i,
    l7 as a
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as ee,
    Nn as te,
    Rn as o,
    Vn as s,
    wn as c,
    zn as ne
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bst as re,
    zst as ie
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Gh as l,
    Kh as ae,
    vv as oe,
    yv as se
} from "./30901919-r9pahacmzqudnt4f.js";
import {
    Av as u,
    kv as d
} from "./c2675c8c-p3x4d0bnf7e77o1n.js";

function ce(e) {
    "use forget";
    let t = (0, ue.c)(108),
        {
            value: i,
            title: a,
            rootClassName: ee,
            valueClassName: o,
            renderValue: s,
            valueDivClassName: c,
            valueVerticalAlign: re,
            deleteCellDivClassName: l,
            deleteVerticalAlign: oe,
            deleteButtonClassName: u,
            deleteButtonColor: ce,
            deleteButtonSize: de,
            deleteIconClassName: m,
            getDeleteButtonLabel: h,
            emptyMessageClassName: fe,
            emptyMessageDivClassName: pe,
            hideHeader: me,
            maxVisibleEntries: he,
            onChange: g,
            emptyMessage: _,
            addInputAriaLabel: ge,
            addButtonLabel: _e,
            confirmAddButtonLabel: ve,
            addFormClassName: ye,
            addInputClassName: be,
            addButtonClassName: xe,
            addRowDivClassName: Se,
            addEntryButtonClassName: Ce,
            placeholder: we,
            normalizeEntry: Te,
            getEntryKey: v,
            invalidEntryMessage: y,
            getAsyncErrorMessage: Ee,
            dedupeEntries: De,
            duplicateEntryMessage: Oe,
            disabled: ke,
            addDisabled: Ae
        } = e,
        je = ee === void 0 ? `w-auto` : ee,
        b = re === void 0 ? `top` : re,
        x = oe === void 0 ? `top` : oe,
        S = ce === void 0 ? `primary` : ce,
        C = de === void 0 ? `medium` : de,
        Me = me !== void 0 && me,
        Ne = be === void 0 ? `w-80` : be,
        Pe = xe === void 0 ? `grow-0` : xe,
        Fe = Se === void 0 ? `min-h-0 items-stretch` : Se,
        Ie = Ce === void 0 ? `mt-2` : Ce,
        Le = we === void 0 ? `example.com` : we,
        Re = De !== void 0 && De,
        w = ke !== void 0 && ke,
        T = Ae === void 0 ? w : Ae,
        [E, ze] = (0, f.useState)(!1),
        [D, Be] = (0, f.useState)(``),
        [O, k] = (0, f.useState)(null),
        A = ne(),
        j = (0, f.useRef)(null),
        Ve = (0, f.useId)(),
        He = (0, f.useRef)(y),
        M, N;
    t[0] === y ? (M = t[1], N = t[2]) : (M = () => {
        let e = He.current;
        He.current = y, k(t => t === e ? null : t)
    }, N = [y], t[0] = y, t[1] = M, t[2] = N), (0, f.useEffect)(M, N);
    let Ue = le,
        P;
    t[3] !== Re || t[4] !== Oe || t[5] !== Ee || t[6] !== v || t[7] !== A || t[8] !== y || t[9] !== D || t[10] !== Te || t[11] !== g || t[12] !== i ? (P = () => {
        k(null);
        let e = Te ?? Ue,
            t = e(D);
        if (!t) {
            D.trim() && y && (k(y), j.current?.focus());
            return
        }
        let n = v ?? e,
            r = v?.(t) ?? t;
        if (Re && i.some(e => n(e) === r)) {
            k(Oe ?? A.formatMessage({
                id: `y4cF0D`,
                defaultMessage: `This domain has already been added.`
            })), j.current?.focus();
            return
        }
        let a = g([...i, t]);
        if (a) {
            a.then(() => {
                ze(!1), Be(``)
            }, e => {
                let t = Ee?.(e);
                t && k(t), j.current?.focus()
            });
            return
        }
        ze(!1), Be(``)
    }, t[3] = Re, t[4] = Oe, t[5] = Ee, t[6] = v, t[7] = A, t[8] = y, t[9] = D, t[10] = Te, t[11] = g, t[12] = i, t[13] = P) : P = t[13];
    let F = P,
        I;
    t[14] !== he || t[15] !== i ? (I = he == null ? i : i.slice(0, he), t[14] = he, t[15] = i, t[16] = I) : I = t[16];
    let We = I,
        L;
    t[17] !== Me || t[18] !== a ? (L = !Me && (0, p.jsxs)(d.Header, {
        children: [(0, p.jsx)(d.HeaderCell, {
            children: a
        }), (0, p.jsx)(d.HeaderCell, {})]
    }), t[17] = Me, t[18] = a, t[19] = L) : L = t[19];
    let R;
    if (t[20] !== u || t[21] !== S || t[22] !== C || t[23] !== l || t[24] !== m || t[25] !== x || t[26] !== w || t[27] !== h || t[28] !== g || t[29] !== s || t[30] !== i || t[31] !== o || t[32] !== c || t[33] !== b || t[34] !== We) {
        let e;
        t[36] !== u || t[37] !== S || t[38] !== C || t[39] !== l || t[40] !== m || t[41] !== x || t[42] !== w || t[43] !== h || t[44] !== g || t[45] !== s || t[46] !== i || t[47] !== o || t[48] !== c || t[49] !== b ? (e = (e, t) => (0, p.jsxs)(d.Row, {
            children: [(0, p.jsx)(d.Cell, {
                className: o,
                divClassName: c,
                verticalAlign: b,
                children: s?.(e) ?? e
            }), (0, p.jsx)(d.Cell, {
                textAlign: `right`,
                divClassName: l,
                verticalAlign: x,
                children: (0, p.jsx)(n, {
                    type: `button`,
                    color: S,
                    size: C,
                    className: u,
                    label: h?.(e),
                    disabled: w,
                    onClick: () => {
                        g(i.filter((e, n) => n !== t))
                    },
                    children: (0, p.jsx)(se, {
                        className: r(`icon-sm`, m)
                    })
                })
            })]
        }, t), t[36] = u, t[37] = S, t[38] = C, t[39] = l, t[40] = m, t[41] = x, t[42] = w, t[43] = h, t[44] = g, t[45] = s, t[46] = i, t[47] = o, t[48] = c, t[49] = b, t[50] = e) : e = t[50], R = We.map(e), t[20] = u, t[21] = S, t[22] = C, t[23] = l, t[24] = m, t[25] = x, t[26] = w, t[27] = h, t[28] = g, t[29] = s, t[30] = i, t[31] = o, t[32] = c, t[33] = b, t[34] = We, t[35] = R
    } else R = t[35];
    let z;
    t[51] !== _ || t[52] !== fe || t[53] !== pe || t[54] !== i ? (z = _ && i.length === 0 ? (0, p.jsx)(d.Row, {
        children: (0, p.jsx)(d.Cell, {
            colSpan: 2,
            divClassName: pe,
            className: r(`text-center text-sm italic`, fe),
            children: _
        })
    }) : null, t[51] = _, t[52] = fe, t[53] = pe, t[54] = i, t[55] = z) : z = t[55];
    let Ge = !E && `hidden`,
        B;
    t[56] === Ge ? B = t[57] : (B = r(`mt-2 w-full p-1`, Ge), t[56] = Ge, t[57] = B);
    let V;
    t[58] === ye ? V = t[59] : (V = r(`flex flex-row items-start gap-2`, ye), t[58] = ye, t[59] = V);
    let H;
    t[60] !== ge || t[61] !== A ? (H = ge ?? A.formatMessage({
        id: `CgP6Du`,
        defaultMessage: `Add new domain`
    }), t[60] = ge, t[61] = A, t[62] = H) : H = t[62];
    let Ke = O == null ? void 0 : Ve,
        qe = O != null,
        U;
    t[63] === Symbol.for(`react.memo_cache_sentinel`) ? (U = e => {
        Be(e.target.value), k(null)
    }, t[63] = U) : U = t[63];
    let W;
    t[64] !== T || t[65] !== Ne || t[66] !== F || t[67] !== D || t[68] !== Le || t[69] !== H || t[70] !== Ke || t[71] !== qe ? (W = (0, p.jsx)(ie, {
        ariaLabel: H,
        "aria-errormessage": Ke,
        "aria-invalid": qe,
        className: Ne,
        name: `newEntry`,
        value: D,
        onChange: U,
        ref: j,
        disabled: T,
        onPressEnter: F,
        placeholder: Le
    }), t[64] = T, t[65] = Ne, t[66] = F, t[67] = D, t[68] = Le, t[69] = H, t[70] = Ke, t[71] = qe, t[72] = W) : W = t[72];
    let G;
    t[73] === ve ? G = t[74] : (G = ve ?? (0, p.jsx)(te, {
        id: `svRVol`,
        defaultMessage: `Add`
    }), t[73] = ve, t[74] = G);
    let K;
    t[75] !== Pe || t[76] !== T || t[77] !== F || t[78] !== G ? (K = (0, p.jsx)(n, {
        className: Pe,
        onClick: F,
        disabled: T,
        children: G
    }), t[75] = Pe, t[76] = T, t[77] = F, t[78] = G, t[79] = K) : K = t[79];
    let q;
    t[80] !== V || t[81] !== W || t[82] !== K ? (q = (0, p.jsxs)(`div`, {
        className: V,
        children: [W, K]
    }), t[80] = V, t[81] = W, t[82] = K, t[83] = q) : q = t[83];
    let J;
    t[84] !== O || t[85] !== Ve ? (J = O != null && (0, p.jsx)(`p`, {
        id: Ve,
        role: `alert`,
        className: `text-token-interactive-label-danger-secondary-default mt-1 text-xs`,
        children: O
    }), t[84] = O, t[85] = Ve, t[86] = J) : J = t[86];
    let Y;
    t[87] !== B || t[88] !== q || t[89] !== J ? (Y = (0, p.jsxs)(`div`, {
        className: B,
        children: [q, J]
    }), t[87] = B, t[88] = q, t[89] = J, t[90] = Y) : Y = t[90];
    let X;
    t[91] !== _e || t[92] !== T || t[93] !== Ie || t[94] !== E ? (X = !E && (0, p.jsxs)(n, {
        type: `button`,
        onClick: () => {
            k(null), ze(!0), setTimeout(() => {
                j.current?.focus()
            }, 0)
        },
        disabled: T,
        className: Ie,
        children: [(0, p.jsx)(ae, {
            className: `icon-sm inline-block`
        }), _e ?? (0, p.jsx)(te, {
            id: `J5y3+M`,
            defaultMessage: `Add new domain`
        })]
    }), t[91] = _e, t[92] = T, t[93] = Ie, t[94] = E, t[95] = X) : X = t[95];
    let Z;
    t[96] !== Fe || t[97] !== Y || t[98] !== X ? (Z = (0, p.jsx)(d.Row, {
        children: (0, p.jsxs)(d.Cell, {
            colSpan: 2,
            divClassName: Fe,
            children: [Y, X]
        })
    }), t[96] = Fe, t[97] = Y, t[98] = X, t[99] = Z) : Z = t[99];
    let Q;
    t[100] !== R || t[101] !== z || t[102] !== Z ? (Q = (0, p.jsxs)(d.Body, {
        children: [R, z, Z]
    }), t[100] = R, t[101] = z, t[102] = Z, t[103] = Q) : Q = t[103];
    let $;
    return t[104] !== je || t[105] !== L || t[106] !== Q ? ($ = (0, p.jsxs)(d.Root, {
        className: je,
        children: [L, Q]
    }), t[104] = je, t[105] = L, t[106] = Q, t[107] = $) : $ = t[107], $
}

function le(e) {
    let t = e.trim();
    return t ? t.startsWith(`@`) ? t.slice(1) : t : ``
}
var ue, f, p, de = e((() => {
    ue = c(), i(), re(), u(), l(), oe(), a(), f = t(s()), o(), p = ee()
}));
export {
    de as n, ce as t
};
//# sourceMappingURL=b3532ffc-cz4jbqxxwqlyw4qz.js.map