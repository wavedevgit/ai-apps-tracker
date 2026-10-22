import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bz as n,
    E6 as r,
    O6 as i,
    Qy as a,
    Rz as o,
    U1 as s,
    Vz as c,
    Xy as l,
    Zy as u,
    iO as d,
    pO as f,
    q1 as p,
    zz as m
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as h,
    Ln as g,
    Nn as _,
    Rn as v,
    Vn as y,
    wn as b,
    zn as x
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    F6t as S,
    H6t as C,
    SUn as w,
    xUn as T
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    Fc as E,
    Fm as D,
    Lc as ee,
    ec as O,
    tc as k,
    zm as A
} from "./c2675c8c-f8x469cgefxzeo6l.js";
import {
    g_ as j,
    h_ as M
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
import {
    n as N,
    t as P
} from "./37b207d4-n5mid9cmeyzinyps.js";
var F, I, L, R, z = e((() => {
    F = b(), ee(), S(), O(), r(), v(), I = h(), L = e => {
        "use forget";
        let t = (0, F.c)(9),
            {
                seatType: n,
                monthlyPrice: r,
                currency: i
            } = e,
            a = x();
        if (r == null || i == null) {
            let e;
            return t[0] === n ? e = t[1] : (e = n === `premium` ? (0, I.jsx)(_, {
                id: `WorkspaceMembers.seatTypePremiumUsageDescription`,
                defaultMessage: `5x more usage than Standard`
            }) : null, t[0] = n, t[1] = e), e
        }
        let o;
        t[2] !== i || t[3] !== a || t[4] !== r ? (o = a.formatNumber(r, {
            style: `currency`,
            currency: i,
            currencyDisplay: `narrowSymbol`,
            minimumFractionDigits: 0
        }), t[2] = i, t[3] = a, t[4] = r, t[5] = o) : o = t[5];
        let s = o,
            c;
        return t[6] !== s || t[7] !== n ? (c = n === `premium` ? (0, I.jsx)(_, {
            id: `WorkspaceMembers.seatTypePremiumPriceDescription`,
            defaultMessage: `{price}/month, 5x more usage than Standard`,
            values: {
                price: s
            }
        }) : (0, I.jsx)(_, {
            id: `WorkspaceMembers.seatTypeStandardPriceDescription`,
            defaultMessage: `{price}/month`,
            values: {
                price: s
            }
        }), t[6] = s, t[7] = n, t[8] = c) : c = t[8], c
    }, R = e => {
        "use forget";
        let t = (0, F.c)(4),
            {
                seatType: n
            } = e,
            {
                data: r
            } = C(),
            a = k(r),
            o = a?.billingCurrency,
            s = r?.billing_period === `yearly` ? `year` : r?.billing_period === `monthly` ? `month` : void 0,
            {
                data: c
            } = i({
                countryCode: a?.countryCode,
                currency: o,
                enabled: s != null && a != null
            }),
            l = n === `premium` ? `business_prolite` : r?.non_profit_org_discount_applied === !0 ? `business_non_profit` : `business`,
            u = s != null && E(c, a) ? c.currencyConfig[l]?.[s]?.amount : void 0,
            d;
        return t[0] !== o || t[1] !== u || t[2] !== n ? (d = (0, I.jsx)(L, {
            seatType: n,
            monthlyPrice: u,
            currency: o
        }), t[0] = o, t[1] = u, t[2] = n, t[3] = d) : d = t[3], d
    }
}));

function B(e, {
    includeUsageBased: t = !0,
    includeProlite: n = !1,
    preserveProlite: r = !1
} = {}) {
    return e === `prolite` && (n || r) ? e : e === `usage_based` && !t ? Q : W(e) ? e : Q
}

function V(e) {
    "use forget";
    let t = (0, Y.c)(5),
        n = f(),
        r;
    if (t[0] !== e || t[1] !== n) {
        let i;
        t[3] === e ? i = t[4] : (i = t => t.id === e, t[3] = e, t[4] = i), r = N(n.find(i)), t[0] = e, t[1] = n, t[2] = r
    } else r = t[2];
    return r
}

function te(e) {
    "use forget";
    let t = (0, Y.c)(8),
        n;
    t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
    let {
        includeProlite: r
    } = n, i = r !== void 0 && r, a;
    t[2] === i ? a = t[3] : (a = {
        includeProlite: i
    }, t[2] = i, t[3] = a);
    let o = H(a),
        s;
    return t[4] !== o.default.label || t[5] !== o.prolite.label || t[6] !== o.usage_based.label ? (s = {
        default: o.default.label,
        usage_based: o.usage_based.label,
        prolite: o.prolite.label
    }, t[4] = o.default.label, t[5] = o.prolite.label, t[6] = o.usage_based.label, t[7] = s) : s = t[7], s
}

function H(e) {
    "use forget";
    let t = (0, Y.c)(26),
        n;
    t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
    let {
        includeProlite: r
    } = n, i = r !== void 0 && r, a = x(), o;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (o = s()?.isEnterprisey(), t[2] = o) : o = t[2];
    let c = o,
        l;
    t[3] !== i || t[4] !== a ? (l = a.formatMessage(i ? $.standardSeatType : $.chatgptSeatType), t[3] = i, t[4] = a, t[5] = l) : l = t[5];
    let u;
    t[6] === a ? u = t[7] : (u = a.formatMessage(c ? $.chatgptSeatTypeSubtitleEnt : $.chatgptSeatTypeSubtitle), t[6] = a, t[7] = u);
    let d;
    t[8] !== l || t[9] !== u ? (d = {
        label: l,
        subtitle: u
    }, t[8] = l, t[9] = u, t[10] = d) : d = t[10];
    let f;
    t[11] === a ? f = t[12] : (f = a.formatMessage($.codexSeatType), t[11] = a, t[12] = f);
    let p;
    t[13] === a ? p = t[14] : (p = a.formatMessage(c ? $.codexSeatTypeSubtitleEnt : $.codexSeatTypeSubtitle), t[13] = a, t[14] = p);
    let m;
    t[15] !== f || t[16] !== p ? (m = {
        label: f,
        subtitle: p
    }, t[15] = f, t[16] = p, t[17] = m) : m = t[17];
    let h;
    t[18] === a ? h = t[19] : (h = a.formatMessage($.premiumSeatType), t[18] = a, t[19] = h);
    let g;
    t[20] === h ? g = t[21] : (g = {
        label: h,
        subtitle: null
    }, t[20] = h, t[21] = g);
    let _;
    return t[22] !== g || t[23] !== d || t[24] !== m ? (_ = {
        default: d,
        usage_based: m,
        prolite: g
    }, t[22] = g, t[23] = d, t[24] = m, t[25] = _) : _ = t[25], _
}

function ne(e) {
    "use forget";
    let t = (0, Y.c)(13),
        {
            seatType: n,
            includeProlite: r,
            showPremiumSeat: i
        } = e,
        a = i === void 0 ? r : i,
        o;
    t[0] === a ? o = t[1] : (o = {
        includeProlite: a
    }, t[0] = a, t[1] = o);
    let s = H(o)[n],
        c;
    t[2] === s.label ? c = t[3] : (c = (0, Z.jsx)(`span`, {
        className: `truncate`,
        children: s.label
    }), t[2] = s.label, t[3] = c);
    let l;
    t[4] !== r || t[5] !== s.subtitle || t[6] !== n ? (l = r && n !== `usage_based` ? (0, Z.jsx)(R, {
        seatType: n === `prolite` ? `premium` : `standard`
    }) : s.subtitle, t[4] = r, t[5] = s.subtitle, t[6] = n, t[7] = l) : l = t[7];
    let u;
    t[8] === l ? u = t[9] : (u = (0, Z.jsx)(`span`, {
        className: `text-token-text-secondary text-xs leading-snug whitespace-normal`,
        children: l
    }), t[8] = l, t[9] = u);
    let d;
    return t[10] !== c || t[11] !== u ? (d = (0, Z.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-1`,
        children: [c, u]
    }), t[10] = c, t[11] = u, t[12] = d) : d = t[12], d
}

function U(e) {
    "use forget";
    let t = (0, Y.c)(6),
        {
            seatType: n,
            isTrial: r,
            includeProlite: i
        } = e,
        a = r !== void 0 && r,
        o = i !== void 0 && i,
        s;
    t[0] === o ? s = t[1] : (s = {
        includeProlite: o
    }, t[0] = o, t[1] = s);
    let c = te(s);
    if (a) {
        let e;
        return t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Z.jsx)(_, {
            id: `WorkspaceMembers.seatTypeTrial`,
            defaultMessage: `Trial`
        }), t[2] = e) : e = t[2], e
    }
    if (n === `view_only`) {
        let e;
        return t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Z.jsx)(_, {
            id: `WorkspaceMembers.seatTypeViewOnly`,
            defaultMessage: `View only`
        }), t[3] = e) : e = t[3], e
    }
    let l = c[B(n, {
            includeProlite: o
        })],
        u;
    return t[4] === l ? u = t[5] : (u = (0, Z.jsx)(Z.Fragment, {
        children: l
    }), t[4] = l, t[5] = u), u
}

function W(e) {
    return ue.some(t => t === e)
}

function re(e) {
    return de.some(t => t === e)
}

function ie({
    includeUsageBased: e,
    includeProlite: t
}) {
    let n = [Q];
    return t && n.push(`prolite`), e && n.push(`usage_based`), n
}

function ae(e) {
    "use forget";
    let t = (0, Y.c)(11),
        {
            variant: n,
            className: r
        } = e,
        [i, a] = (0, X.useState)(!1),
        o = x(),
        s;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = e => {
        e.preventDefault(), e.stopPropagation(), a(!0)
    }, t[0] = s) : s = t[0];
    let c = s,
        d;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (d = {
        "aria-disabled": !0,
        onClick: c,
        onKeyDown: e => {
            (e.key === `Enter` || e.key === ` `) && c(e)
        }
    }, t[1] = d) : d = t[1];
    let f = d,
        p;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, Z.jsx)(_, {
        id: `WorkspaceMembers.premiumSeatPurchaseTooltip`,
        defaultMessage: `Start with Standard seats. Add Premium seats or upgrade existing seats later.`
    }), t[2] = p) : p = t[2];
    let m = n === `menu` ? `right` : void 0,
        h;
    t[3] !== r || t[4] !== o || t[5] !== n ? (h = n === `select` ? (0, Z.jsx)(M.Item, {
        ...f,
        value: `prolite`,
        className: `items-start py-3`,
        iconClassName: `icon-sm mt-1`,
        secondary: (0, Z.jsx)(L, {
            seatType: `premium`
        }),
        onPointerUp: c,
        children: o.formatMessage($.premiumSeatType)
    }) : (0, Z.jsx)(T.ItemAs, {
        ...f,
        as: `button`,
        className: r,
        onSelect: c,
        type: `button`,
        children: o.formatMessage($.premiumSeatType)
    }), t[3] = r, t[4] = o, t[5] = n, t[6] = h) : h = t[6];
    let g;
    return t[7] !== i || t[8] !== m || t[9] !== h ? (g = (0, Z.jsx)(l, {
        children: (0, Z.jsx)(u, {
            label: p,
            open: i,
            onOpenChange: a,
            side: m,
            triggerAs: null,
            wide: !0,
            children: h
        })
    }), t[7] = i, t[8] = m, t[9] = h, t[10] = g) : g = t[10], g
}

function G(e) {
    "use forget";
    let t = (0, Y.c)(22),
        {
            currentSeatType: r,
            isTrial: i,
            disabled: a,
            isUpdating: s,
            isMenuOpen: c,
            includeUsageBased: l,
            includeProlite: u
        } = e,
        d = i !== void 0 && i,
        f = a !== void 0 && a,
        p = s !== void 0 && s,
        m = l === void 0 || l,
        h = u !== void 0 && u,
        g = x(),
        _;
    t[0] === h ? _ = t[1] : (_ = {
        includeProlite: h
    }, t[0] = h, t[1] = _);
    let v = te(_),
        y;
    t[2] !== r || t[3] !== h ? (y = r === `view_only` ? r : B(r, {
        includeProlite: h
    }), t[2] = r, t[3] = h, t[4] = y) : y = t[4];
    let b = y,
        S = ie({
            includeUsageBased: m,
            includeProlite: h
        }),
        [C, w] = (0, X.useState)(!1),
        E, D;
    t[5] === c ? (E = t[6], D = t[7]) : (E = () => {
        c || w(!1)
    }, D = [c], t[5] = c, t[6] = E, t[7] = D), (0, X.useEffect)(E, D);
    let ee = t => {
            if (!re(t) || !S.includes(t) || !d && t === b || f || p) return;
            let n;
            if (t === `prolite`) {
                if (e.includeProlite !== !0) return;
                n = e.onUpdateSeatType(t)
            } else n = e.onUpdateSeatType(t);
            Promise.resolve(n).catch(se)
        },
        O = T,
        k = f || p,
        A;
    t[8] !== C || t[9] !== p ? (A = p ? (0, Z.jsx)(o, {
        className: `icon-sm`
    }) : C ? (0, Z.jsx)(n.ChevronDownSm, {
        className: `icon-sm`
    }) : (0, Z.jsx)(n.ChevronRightSm, {
        className: `icon-sm`
    }), t[8] = C, t[9] = p, t[10] = A) : A = t[10];
    let j;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (j = e => {
        e.preventDefault(), w(oe)
    }, t[11] = j) : j = t[11];
    let M;
    t[12] === g ? M = t[13] : (M = g.formatMessage($.changeSeatType), t[12] = g, t[13] = M);
    let N;
    t[14] !== k || t[15] !== A || t[16] !== M ? (N = (0, Z.jsx)(T.Item, {
        disabled: k,
        trailing: A,
        onSelect: j,
        onClick: J,
        children: M
    }), t[14] = k, t[15] = A, t[16] = M, t[17] = N) : N = t[17];
    let P = C && (0, Z.jsx)(T.RadioGroup, {
            value: d ? void 0 : b,
            onValueChange: ee,
            children: S.map(e => (0, Z.jsx)(T.RadioItem, {
                value: e,
                disabled: f || p,
                onSelect: q,
                onClick: K,
                children: v[e]
            }, e))
        }),
        F;
    return t[18] !== N || t[19] !== P || t[20] !== O.Group ? (F = (0, Z.jsxs)(O.Group, {
        separator: !1,
        children: [N, P]
    }), t[18] = N, t[19] = P, t[20] = O.Group, t[21] = F) : F = t[21], F
}

function K(e) {
    e.stopPropagation()
}

function q(e) {
    e.stopPropagation()
}

function J(e) {
    e.stopPropagation()
}

function oe(e) {
    return !e
}

function se() {}

function ce(e) {
    "use forget";
    let t = (0, Y.c)(42),
        {
            workspaceId: n,
            currentSeatType: r,
            onUpdateSeatType: i,
            disabled: a,
            disabledSeatTypes: o,
            triggerClassName: s,
            contentClassName: c,
            triggerId: l,
            ariaLabelledBy: u,
            includeUsageBased: d,
            includeProlite: f,
            preserveProlite: p
        } = e,
        m = a !== void 0 && a,
        h = s === void 0 ? `text-base` : s,
        g = f !== void 0 && f,
        _ = p !== void 0 && p,
        v;
    t[0] !== g || t[1] !== n ? (v = !g && A(n), t[0] = g, t[1] = n, t[2] = v) : v = t[2];
    let y = v,
        b = g || y,
        x;
    t[3] === b ? x = t[4] : (x = {
        includeProlite: b
    }, t[3] = b, t[4] = x);
    let S = te(x),
        C;
    t[5] !== r || t[6] !== g || t[7] !== d || t[8] !== _ ? (C = B(r, {
        includeUsageBased: d,
        includeProlite: g,
        preserveProlite: _
    }), t[5] = r, t[6] = g, t[7] = d, t[8] = _, t[9] = C) : C = t[9];
    let w = C,
        T = ie({
            includeUsageBased: d,
            includeProlite: g
        }),
        [E, D] = (0, X.useState)(w),
        [ee, O] = (0, X.useState)(!1),
        k, j;
    t[10] === w ? (k = t[11], j = t[12]) : (j = () => {
        D(w)
    }, k = [w], t[10] = w, t[11] = k, t[12] = j), (0, X.useEffect)(j, k);
    let N = M,
        P = e => {
            !re(e) || !T.includes(e) || o?.includes(e) || e !== E && (O(!0), Promise.resolve().then(() => i(e)).then(t => {
                t !== !1 && D(e)
            }, le).then(() => {
                O(!1)
            }))
        },
        F = m || ee,
        I = S[E],
        L;
    t[13] === I ? L = t[14] : (L = (0, Z.jsx)(M.Value, {
        children: I
    }), t[13] = I, t[14] = L);
    let R;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (R = (0, Z.jsx)(M.Icon, {}), t[15] = R) : R = t[15];
    let z;
    t[16] !== u || t[17] !== L || t[18] !== h || t[19] !== l ? (z = (0, Z.jsxs)(M.Trigger, {
        id: l,
        "aria-labelledby": u,
        className: h,
        children: [L, R]
    }), t[16] = u, t[17] = L, t[18] = h, t[19] = l, t[20] = z) : z = t[20];
    let V = M,
        H = M,
        U;
    t[21] !== o || t[22] !== g || t[23] !== y ? (U = e => (0, Z.jsx)(M.Item, {
        value: e,
        disabled: o?.includes(e),
        className: `items-start py-3`,
        iconClassName: `icon-sm mt-1`,
        children: (0, Z.jsx)(ne, {
            seatType: e,
            includeProlite: g,
            showPremiumSeat: g || y
        })
    }, e), t[21] = o, t[22] = g, t[23] = y, t[24] = U) : U = t[24];
    let W = T.map(U),
        G;
    t[25] === y ? G = t[26] : (G = y && (0, Z.jsx)(ae, {
        variant: `select`
    }), t[25] = y, t[26] = G);
    let K;
    t[27] !== c || t[28] !== H.Content || t[29] !== W || t[30] !== G ? (K = (0, Z.jsxs)(H.Content, {
        className: c,
        children: [W, G]
    }), t[27] = c, t[28] = H.Content, t[29] = W, t[30] = G, t[31] = K) : K = t[31];
    let q;
    t[32] !== V.Portal || t[33] !== K ? (q = (0, Z.jsx)(V.Portal, {
        children: K
    }), t[32] = V.Portal, t[33] = K, t[34] = q) : q = t[34];
    let J;
    return t[35] !== E || t[36] !== N.Root || t[37] !== P || t[38] !== F || t[39] !== z || t[40] !== q ? (J = (0, Z.jsxs)(N.Root, {
        value: E,
        onValueChange: P,
        disabled: F,
        children: [z, q]
    }), t[35] = E, t[36] = N.Root, t[37] = P, t[38] = F, t[39] = z, t[40] = q, t[41] = J) : J = t[41], J
}

function le() {}
var Y, X, Z, ue, de, Q, $, fe = e((() => {
    Y = b(), D(), w(), c(), j(), a(), m(), p(), P(), X = t(y()), v(), d(), z(), Z = h(), ue = [`default`, `usage_based`], de = [...ue, `prolite`], Q = `default`, $ = g({
        seatType: {
            id: `WorkspaceMembers.seatType`,
            defaultMessage: `Seat type`
        },
        chatgptSeatType: {
            id: `WorkspaceMembers.seatTypeChatgpt`,
            defaultMessage: `ChatGPT`
        },
        standardSeatType: {
            id: `WorkspaceMembers.seatTypeStandard`,
            defaultMessage: `Standard`
        },
        codexSeatType: {
            id: `WorkspaceMembers.seatTypeCodex`,
            defaultMessage: `Codex`
        },
        premiumSeatType: {
            id: `WorkspaceMembers.seatTypePremium`,
            defaultMessage: `Premium`
        },
        chatgptSeatTypeSubtitle: {
            id: `WorkspaceMembers.seatTypeChatgptSubtitle`,
            defaultMessage: `ChatGPT, ChatGPT Work, and Codex, fixed price per seat`
        },
        chatgptSeatTypeSubtitleEnt: {
            id: `WorkspaceMembers.seatTypeChatgptSubtitleEnt`,
            defaultMessage: `ChatGPT and Codex, full platform access`
        },
        codexSeatTypeSubtitle: {
            id: `WorkspaceMembers.seatTypeCodexSubtitle`,
            defaultMessage: `No fixed costs, pay as you go pricing`
        },
        codexSeatTypeSubtitleEnt: {
            id: `WorkspaceMembers.seatTypeCodexSubtitleEnt`,
            defaultMessage: `Codex only`
        },
        changeSeatType: {
            id: `WorkspaceMembers.changeSeatType`,
            defaultMessage: `Change seat type`
        }
    })
}));
export {
    G as a, $ as c, U as i, V as l, ae as n, fe as o, ce as r, B as s, Q as t
};
//# sourceMappingURL=1212b029-myzn49n30sx802sg.js.map