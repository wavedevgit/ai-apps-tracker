import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    b5 as r,
    kT as i,
    y5 as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as ee,
    Nn as te,
    Rn as o,
    Vn as s,
    wn as c,
    zn as ne
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Bst as re,
    zst as ie
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Gh as l,
    Kh as ae,
    Sv as oe,
    xv as se
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Xv as u,
    Zv as d
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";

function ce(e) {
    "use forget";
    let t = (0, ue.c)(108),
        {
            value: n,
            title: r,
            rootClassName: ee,
            valueClassName: o,
            renderValue: s,
            valueDivClassName: c,
            valueVerticalAlign: re,
            deleteCellDivClassName: l,
            deleteVerticalAlign: se,
            deleteButtonClassName: d,
            deleteButtonColor: ce,
            deleteButtonSize: de,
            deleteIconClassName: m,
            getDeleteButtonLabel: h,
            emptyMessageClassName: fe,
            emptyMessageDivClassName: pe,
            hideHeader: me,
            maxVisibleEntries: he,
            onChange: g,
            emptyMessage: ge,
            addInputAriaLabel: _e,
            addButtonLabel: ve,
            confirmAddButtonLabel: ye,
            addFormClassName: be,
            addInputClassName: xe,
            addButtonClassName: Se,
            addRowDivClassName: Ce,
            addEntryButtonClassName: we,
            placeholder: Te,
            normalizeEntry: Ee,
            getEntryKey: _,
            invalidEntryMessage: v,
            getAsyncErrorMessage: De,
            dedupeEntries: Oe,
            duplicateEntryMessage: ke,
            disabled: Ae,
            addDisabled: je
        } = e,
        Me = ee === void 0 ? `w-auto` : ee,
        y = re === void 0 ? `top` : re,
        b = se === void 0 ? `top` : se,
        x = ce === void 0 ? `primary` : ce,
        S = de === void 0 ? `medium` : de,
        Ne = me !== void 0 && me,
        Pe = xe === void 0 ? `w-80` : xe,
        Fe = Se === void 0 ? `grow-0` : Se,
        Ie = Ce === void 0 ? `min-h-0 items-stretch` : Ce,
        Le = we === void 0 ? `mt-2` : we,
        Re = Te === void 0 ? `example.com` : Te,
        ze = Oe !== void 0 && Oe,
        C = Ae !== void 0 && Ae,
        w = je === void 0 ? C : je,
        [T, Be] = (0, f.useState)(!1),
        [E, Ve] = (0, f.useState)(``),
        [D, O] = (0, f.useState)(null),
        k = ne(),
        A = (0, f.useRef)(null),
        j = (0, f.useId)(),
        He = (0, f.useRef)(v),
        M, N;
    t[0] === v ? (M = t[1], N = t[2]) : (M = () => {
        let e = He.current;
        He.current = v, O(t => t === e ? null : t)
    }, N = [v], t[0] = v, t[1] = M, t[2] = N), (0, f.useEffect)(M, N);
    let Ue = le,
        P;
    t[3] !== ze || t[4] !== ke || t[5] !== De || t[6] !== _ || t[7] !== k || t[8] !== v || t[9] !== E || t[10] !== Ee || t[11] !== g || t[12] !== n ? (P = () => {
        O(null);
        let e = Ee ?? Ue,
            t = e(E);
        if (!t) {
            E.trim() && v && (O(v), A.current?.focus());
            return
        }
        let r = _ ?? e,
            i = _?.(t) ?? t;
        if (ze && n.some(e => r(e) === i)) {
            O(ke ?? k.formatMessage({
                id: `y4cF0D`,
                defaultMessage: `This domain has already been added.`
            })), A.current?.focus();
            return
        }
        let a = g([...n, t]);
        if (a) {
            a.then(() => {
                Be(!1), Ve(``)
            }, e => {
                let t = De?.(e);
                t && O(t), A.current?.focus()
            });
            return
        }
        Be(!1), Ve(``)
    }, t[3] = ze, t[4] = ke, t[5] = De, t[6] = _, t[7] = k, t[8] = v, t[9] = E, t[10] = Ee, t[11] = g, t[12] = n, t[13] = P) : P = t[13];
    let F = P,
        I;
    t[14] !== he || t[15] !== n ? (I = he == null ? n : n.slice(0, he), t[14] = he, t[15] = n, t[16] = I) : I = t[16];
    let We = I,
        L;
    t[17] !== Ne || t[18] !== r ? (L = !Ne && (0, p.jsxs)(u.Header, {
        children: [(0, p.jsx)(u.HeaderCell, {
            children: r
        }), (0, p.jsx)(u.HeaderCell, {})]
    }), t[17] = Ne, t[18] = r, t[19] = L) : L = t[19];
    let R;
    if (t[20] !== d || t[21] !== x || t[22] !== S || t[23] !== l || t[24] !== m || t[25] !== b || t[26] !== C || t[27] !== h || t[28] !== g || t[29] !== s || t[30] !== n || t[31] !== o || t[32] !== c || t[33] !== y || t[34] !== We) {
        let e;
        t[36] !== d || t[37] !== x || t[38] !== S || t[39] !== l || t[40] !== m || t[41] !== b || t[42] !== C || t[43] !== h || t[44] !== g || t[45] !== s || t[46] !== n || t[47] !== o || t[48] !== c || t[49] !== y ? (e = (e, t) => (0, p.jsxs)(u.Row, {
            children: [(0, p.jsx)(u.Cell, {
                className: o,
                divClassName: c,
                verticalAlign: y,
                children: s?.(e) ?? e
            }), (0, p.jsx)(u.Cell, {
                textAlign: `right`,
                divClassName: l,
                verticalAlign: b,
                children: (0, p.jsx)(i, {
                    type: `button`,
                    color: x,
                    size: S,
                    className: d,
                    label: h?.(e),
                    disabled: C,
                    onClick: () => {
                        g(n.filter((e, n) => n !== t))
                    },
                    children: (0, p.jsx)(oe, {
                        className: a(`icon-sm`, m)
                    })
                })
            })]
        }, t), t[36] = d, t[37] = x, t[38] = S, t[39] = l, t[40] = m, t[41] = b, t[42] = C, t[43] = h, t[44] = g, t[45] = s, t[46] = n, t[47] = o, t[48] = c, t[49] = y, t[50] = e) : e = t[50], R = We.map(e), t[20] = d, t[21] = x, t[22] = S, t[23] = l, t[24] = m, t[25] = b, t[26] = C, t[27] = h, t[28] = g, t[29] = s, t[30] = n, t[31] = o, t[32] = c, t[33] = y, t[34] = We, t[35] = R
    } else R = t[35];
    let z;
    t[51] !== ge || t[52] !== fe || t[53] !== pe || t[54] !== n ? (z = ge && n.length === 0 ? (0, p.jsx)(u.Row, {
        children: (0, p.jsx)(u.Cell, {
            colSpan: 2,
            divClassName: pe,
            className: a(`text-center text-sm italic`, fe),
            children: ge
        })
    }) : null, t[51] = ge, t[52] = fe, t[53] = pe, t[54] = n, t[55] = z) : z = t[55];
    let Ge = !T && `hidden`,
        B;
    t[56] === Ge ? B = t[57] : (B = a(`mt-2 w-full p-1`, Ge), t[56] = Ge, t[57] = B);
    let V;
    t[58] === be ? V = t[59] : (V = a(`flex flex-row items-start gap-2`, be), t[58] = be, t[59] = V);
    let H;
    t[60] !== _e || t[61] !== k ? (H = _e ?? k.formatMessage({
        id: `CgP6Du`,
        defaultMessage: `Add new domain`
    }), t[60] = _e, t[61] = k, t[62] = H) : H = t[62];
    let Ke = D == null ? void 0 : j,
        qe = D != null,
        U;
    t[63] === Symbol.for(`react.memo_cache_sentinel`) ? (U = e => {
        Ve(e.target.value), O(null)
    }, t[63] = U) : U = t[63];
    let W;
    t[64] !== w || t[65] !== Pe || t[66] !== F || t[67] !== E || t[68] !== Re || t[69] !== H || t[70] !== Ke || t[71] !== qe ? (W = (0, p.jsx)(ie, {
        ariaLabel: H,
        "aria-errormessage": Ke,
        "aria-invalid": qe,
        className: Pe,
        name: `newEntry`,
        value: E,
        onChange: U,
        ref: A,
        disabled: w,
        onPressEnter: F,
        placeholder: Re
    }), t[64] = w, t[65] = Pe, t[66] = F, t[67] = E, t[68] = Re, t[69] = H, t[70] = Ke, t[71] = qe, t[72] = W) : W = t[72];
    let G;
    t[73] === ye ? G = t[74] : (G = ye ?? (0, p.jsx)(te, {
        id: `svRVol`,
        defaultMessage: `Add`
    }), t[73] = ye, t[74] = G);
    let K;
    t[75] !== Fe || t[76] !== w || t[77] !== F || t[78] !== G ? (K = (0, p.jsx)(i, {
        className: Fe,
        onClick: F,
        disabled: w,
        children: G
    }), t[75] = Fe, t[76] = w, t[77] = F, t[78] = G, t[79] = K) : K = t[79];
    let q;
    t[80] !== V || t[81] !== W || t[82] !== K ? (q = (0, p.jsxs)(`div`, {
        className: V,
        children: [W, K]
    }), t[80] = V, t[81] = W, t[82] = K, t[83] = q) : q = t[83];
    let J;
    t[84] !== D || t[85] !== j ? (J = D != null && (0, p.jsx)(`p`, {
        id: j,
        role: `alert`,
        className: `text-token-interactive-label-danger-secondary-default mt-1 text-xs`,
        children: D
    }), t[84] = D, t[85] = j, t[86] = J) : J = t[86];
    let Y;
    t[87] !== B || t[88] !== q || t[89] !== J ? (Y = (0, p.jsxs)(`div`, {
        className: B,
        children: [q, J]
    }), t[87] = B, t[88] = q, t[89] = J, t[90] = Y) : Y = t[90];
    let X;
    t[91] !== ve || t[92] !== w || t[93] !== Le || t[94] !== T ? (X = !T && (0, p.jsxs)(i, {
        type: `button`,
        onClick: () => {
            O(null), Be(!0), setTimeout(() => {
                A.current?.focus()
            }, 0)
        },
        disabled: w,
        className: Le,
        children: [(0, p.jsx)(ae, {
            className: `icon-sm inline-block`
        }), ve ?? (0, p.jsx)(te, {
            id: `J5y3+M`,
            defaultMessage: `Add new domain`
        })]
    }), t[91] = ve, t[92] = w, t[93] = Le, t[94] = T, t[95] = X) : X = t[95];
    let Z;
    t[96] !== Ie || t[97] !== Y || t[98] !== X ? (Z = (0, p.jsx)(u.Row, {
        children: (0, p.jsxs)(u.Cell, {
            colSpan: 2,
            divClassName: Ie,
            children: [Y, X]
        })
    }), t[96] = Ie, t[97] = Y, t[98] = X, t[99] = Z) : Z = t[99];
    let Q;
    t[100] !== R || t[101] !== z || t[102] !== Z ? (Q = (0, p.jsxs)(u.Body, {
        children: [R, z, Z]
    }), t[100] = R, t[101] = z, t[102] = Z, t[103] = Q) : Q = t[103];
    let $;
    return t[104] !== Me || t[105] !== L || t[106] !== Q ? ($ = (0, p.jsxs)(u.Root, {
        className: Me,
        children: [L, Q]
    }), t[104] = Me, t[105] = L, t[106] = Q, t[107] = $) : $ = t[107], $
}

function le(e) {
    let t = e.trim();
    return t ? t.startsWith(`@`) ? t.slice(1) : t : ``
}
var ue, f, p, de = e((() => {
    ue = c(), n(), re(), d(), l(), se(), r(), f = t(s()), o(), p = ee()
}));
export {
    de as n, ce as t
};
//# sourceMappingURL=b3532ffc-gk8qu9q20lhj52je.js.map