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
} from "./4813494d-mdvd4786a87166cc.js";
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
    MUn as C,
    O6t as w,
    jUn as T
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Bm as E,
    Fc as D,
    Im as O,
    Lc as k,
    ec as A,
    tc as j
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    g_ as M,
    h_ as N
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    n as P,
    t as F
} from "./37b207d4-c11bu6stsfrwt1kc.js";
var I, L, R, z, B = e((() => {
    I = b(), k(), w(), A(), r(), v(), L = h(), R = e => {
        "use forget";
        let t = (0, I.c)(9),
            {
                seatType: n,
                monthlyPrice: r,
                currency: i
            } = e,
            a = x();
        if (r == null || i == null) {
            let e;
            return t[0] === n ? e = t[1] : (e = n === `premium` ? (0, L.jsx)(_, {
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
        return t[6] !== s || t[7] !== n ? (c = n === `premium` ? (0, L.jsx)(_, {
            id: `WorkspaceMembers.seatTypePremiumPriceDescription`,
            defaultMessage: `{price}/month, 5x more usage than Standard`,
            values: {
                price: s
            }
        }) : (0, L.jsx)(_, {
            id: `WorkspaceMembers.seatTypeStandardPriceDescription`,
            defaultMessage: `{price}/month`,
            values: {
                price: s
            }
        }), t[6] = s, t[7] = n, t[8] = c) : c = t[8], c
    }, z = e => {
        "use forget";
        let t = (0, I.c)(4),
            {
                seatType: n
            } = e,
            {
                data: r
            } = S(),
            a = j(r),
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
            u = s != null && D(c, a) ? c.currencyConfig[l]?.[s]?.amount : void 0,
            d;
        return t[0] !== o || t[1] !== u || t[2] !== n ? (d = (0, L.jsx)(R, {
            seatType: n,
            monthlyPrice: u,
            currency: o
        }), t[0] = o, t[1] = u, t[2] = n, t[3] = d) : d = t[3], d
    }
}));

function V(e, {
    includeUsageBased: t = !0,
    includeProlite: n = !1,
    preserveProlite: r = !1
} = {}) {
    return e === `prolite` && (n || r) ? e : e === `usage_based` && !t ? Q : W(e) ? e : Q
}

function ee(e) {
    "use forget";
    let t = (0, Y.c)(5),
        n = f(),
        r;
    if (t[0] !== e || t[1] !== n) {
        let i;
        t[3] === e ? i = t[4] : (i = t => t.id === e, t[3] = e, t[4] = i), r = P(n.find(i)), t[0] = e, t[1] = n, t[2] = r
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
    t[4] !== r || t[5] !== s.subtitle || t[6] !== n ? (l = r && n !== `usage_based` ? (0, Z.jsx)(z, {
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
    let l = c[V(n, {
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
    t[3] !== r || t[4] !== o || t[5] !== n ? (h = n === `select` ? (0, Z.jsx)(N.Item, {
        ...f,
        value: `prolite`,
        className: `items-start py-3`,
        iconClassName: `icon-sm mt-1`,
        secondary: (0, Z.jsx)(R, {
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
    t[2] !== r || t[3] !== h ? (y = r === `view_only` ? r : V(r, {
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
    let O = t => {
            if (!re(t) || !S.includes(t) || !d && t === b || f || p) return;
            let n;
            if (t === `prolite`) {
                if (e.includeProlite !== !0) return;
                n = e.onUpdateSeatType(t)
            } else n = e.onUpdateSeatType(t);
            Promise.resolve(n).catch(se)
        },
        k = T,
        A = f || p,
        j;
    t[8] !== C || t[9] !== p ? (j = p ? (0, Z.jsx)(o, {
        className: `icon-sm`
    }) : C ? (0, Z.jsx)(n.ChevronDownSm, {
        className: `icon-sm`
    }) : (0, Z.jsx)(n.ChevronRightSm, {
        className: `icon-sm`
    }), t[8] = C, t[9] = p, t[10] = j) : j = t[10];
    let M;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (M = e => {
        e.preventDefault(), w(oe)
    }, t[11] = M) : M = t[11];
    let N;
    t[12] === g ? N = t[13] : (N = g.formatMessage($.changeSeatType), t[12] = g, t[13] = N);
    let P;
    t[14] !== A || t[15] !== j || t[16] !== N ? (P = (0, Z.jsx)(T.Item, {
        disabled: A,
        trailing: j,
        onSelect: M,
        onClick: J,
        children: N
    }), t[14] = A, t[15] = j, t[16] = N, t[17] = P) : P = t[17];
    let F = C && (0, Z.jsx)(T.RadioGroup, {
            value: d ? void 0 : b,
            onValueChange: O,
            children: S.map(e => (0, Z.jsx)(T.RadioItem, {
                value: e,
                disabled: f || p,
                onSelect: q,
                onClick: K,
                children: v[e]
            }, e))
        }),
        I;
    return t[18] !== P || t[19] !== F || t[20] !== k.Group ? (I = (0, Z.jsxs)(k.Group, {
        separator: !1,
        children: [P, F]
    }), t[18] = P, t[19] = F, t[20] = k.Group, t[21] = I) : I = t[21], I
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
    t[0] !== g || t[1] !== n ? (v = !g && E(n), t[0] = g, t[1] = n, t[2] = v) : v = t[2];
    let y = v,
        b = g || y,
        x;
    t[3] === b ? x = t[4] : (x = {
        includeProlite: b
    }, t[3] = b, t[4] = x);
    let S = te(x),
        C;
    t[5] !== r || t[6] !== g || t[7] !== d || t[8] !== _ ? (C = V(r, {
        includeUsageBased: d,
        includeProlite: g,
        preserveProlite: _
    }), t[5] = r, t[6] = g, t[7] = d, t[8] = _, t[9] = C) : C = t[9];
    let w = C,
        T = ie({
            includeUsageBased: d,
            includeProlite: g
        }),
        [D, O] = (0, X.useState)(w),
        [k, A] = (0, X.useState)(!1),
        j, M;
    t[10] === w ? (j = t[11], M = t[12]) : (M = () => {
        O(w)
    }, j = [w], t[10] = w, t[11] = j, t[12] = M), (0, X.useEffect)(M, j);
    let P = N,
        F = e => {
            !re(e) || !T.includes(e) || o?.includes(e) || e !== D && (A(!0), Promise.resolve().then(() => i(e)).then(t => {
                t !== !1 && O(e)
            }, le).then(() => {
                A(!1)
            }))
        },
        I = m || k,
        L = S[D],
        R;
    t[13] === L ? R = t[14] : (R = (0, Z.jsx)(N.Value, {
        children: L
    }), t[13] = L, t[14] = R);
    let z;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (z = (0, Z.jsx)(N.Icon, {}), t[15] = z) : z = t[15];
    let B;
    t[16] !== u || t[17] !== R || t[18] !== h || t[19] !== l ? (B = (0, Z.jsxs)(N.Trigger, {
        id: l,
        "aria-labelledby": u,
        className: h,
        children: [R, z]
    }), t[16] = u, t[17] = R, t[18] = h, t[19] = l, t[20] = B) : B = t[20];
    let ee = N,
        H = N,
        U;
    t[21] !== o || t[22] !== g || t[23] !== y ? (U = e => (0, Z.jsx)(N.Item, {
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
    t[32] !== ee.Portal || t[33] !== K ? (q = (0, Z.jsx)(ee.Portal, {
        children: K
    }), t[32] = ee.Portal, t[33] = K, t[34] = q) : q = t[34];
    let J;
    return t[35] !== D || t[36] !== P.Root || t[37] !== F || t[38] !== I || t[39] !== B || t[40] !== q ? (J = (0, Z.jsxs)(P.Root, {
        value: D,
        onValueChange: F,
        disabled: I,
        children: [B, q]
    }), t[35] = D, t[36] = P.Root, t[37] = F, t[38] = I, t[39] = B, t[40] = q, t[41] = J) : J = t[41], J
}

function le() {}
var Y, X, Z, ue, de, Q, $, fe = e((() => {
    Y = b(), O(), C(), c(), M(), a(), m(), p(), F(), X = t(y()), v(), d(), B(), Z = h(), ue = [`default`, `usage_based`], de = [...ue, `prolite`], Q = `default`, $ = g({
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
    G as a, $ as c, U as i, ee as l, ae as n, fe as o, ce as r, V as s, Q as t
};
//# sourceMappingURL=1212b029-gea36v7yzle7vx36.js.map