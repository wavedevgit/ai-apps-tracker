import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as t,
    JT as n,
    Y5 as r,
    _nt as i,
    cW as a,
    lW as o,
    qT as s,
    ynt as c
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as l,
    Nn as u,
    Rn as d,
    wn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    dkt as p,
    fkt as m
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    n as h,
    r as g,
    t as _
} from "./d0d32730-b2i0jqjlb5f1nrhq.js";
var v, y, b, x, S, C, w = e((() => {
    v = f(), n(), a(), c(), p(), _(), r(), d(), y = l(), b = e => {
        "use forget";
        let n = (0, v.c)(16),
            {
                title: r,
                description: i,
                action: a,
                className: s
            } = e,
            c;
        n[0] === s ? c = n[1] : (c = t(`bg-token-theme-yellow-background text-token-theme-yellow-text flex items-start gap-2 rounded-xl p-3 text-xs leading-4`, s), n[0] = s, n[1] = c);
        let l;
        n[2] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, y.jsx)(o, {
            className: `size-6 shrink-0`
        }), n[2] = l) : l = n[2];
        let u;
        n[3] === r ? u = n[4] : (u = (0, y.jsx)(`div`, {
            className: `font-semibold`,
            children: r
        }), n[3] = r, n[4] = u);
        let d;
        n[5] === i ? d = n[6] : (d = (0, y.jsx)(`div`, {
            children: i
        }), n[5] = i, n[6] = d);
        let f;
        n[7] === a ? f = n[8] : (f = a ? (0, y.jsx)(`div`, {
            className: `mt-1`,
            children: a
        }) : null, n[7] = a, n[8] = f);
        let p;
        n[9] !== u || n[10] !== d || n[11] !== f ? (p = (0, y.jsxs)(`div`, {
            className: `min-w-0`,
            children: [u, d, f]
        }), n[9] = u, n[10] = d, n[11] = f, n[12] = p) : p = n[12];
        let m;
        return n[13] !== c || n[14] !== p ? (m = (0, y.jsxs)(`div`, {
            className: c,
            role: `alert`,
            children: [l, p]
        }), n[13] = c, n[14] = p, n[15] = m) : m = n[15], m
    }, x = e => {
        "use forget";
        let t = (0, v.c)(8),
            {
                analyticsSurface: n,
                onManageMonthlyLimit: r
            } = e,
            a;
        t[0] === n ? a = t[1] : (a = () => {
            i.logStructuredEvent(`ChatgptCodexAutoReloadLimitReachedWarningShown`, {
                surface: n
            })
        }, t[0] = n, t[1] = a), m(a);
        let o, c;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, y.jsx)(u, {
            id: `wham.autoRecharge.maximumMonthlySpendLimitReachedWarning.title`,
            defaultMessage: `Automatic reload is paused because you’ve reached your maximum monthly spend limit`
        }), c = (0, y.jsx)(u, {
            id: `wham.autoRecharge.maximumMonthlySpendLimitReachedWarning.description`,
            defaultMessage: `Increase your maximum monthly spend limit or remove it to resume automatic reloads.`
        }), t[2] = o, t[3] = c) : (o = t[2], c = t[3]);
        let l;
        t[4] === r ? l = t[5] : (l = r ? (0, y.jsx)(s, {
            type: `button`,
            color: `ghost`,
            size: `small`,
            className: `h-auto px-0 font-semibold underline`,
            onClick: r,
            children: (0, y.jsx)(u, {
                id: `wham.autoRecharge.maximumMonthlySpendLimitReachedWarning.manageMonthlyLimit`,
                defaultMessage: `Manage monthly limit`
            })
        }) : null, t[4] = r, t[5] = l);
        let d;
        return t[6] === l ? d = t[7] : (d = (0, y.jsx)(b, {
            title: o,
            description: c,
            action: l
        }), t[6] = l, t[7] = d), d
    }, S = e => {
        "use forget";
        let t = (0, v.c)(5),
            {
                analyticsSurface: n,
                hasPaymentMethod: r,
                paymentMethodType: a
            } = e,
            o;
        t[0] !== n || t[1] !== r || t[2] !== a ? (o = () => {
            i.logStructuredEvent(`ChatgptCodexAutoReloadPaymentMethodWarningShown`, {
                hasPaymentMethod: r,
                surface: n,
                ...a == null ? {} : {
                    paymentMethodType: a
                }
            })
        }, t[0] = n, t[1] = r, t[2] = a, t[3] = o) : o = t[3], m(o);
        let s;
        return t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, y.jsx)(b, {
            title: (0, y.jsx)(u, {
                id: `wham.autoRecharge.paymentFailedTitle`,
                defaultMessage: `Your last automatic reload payment failed`
            }),
            description: (0, y.jsx)(u, {
                id: `wham.autoRecharge.paymentFailedDescription`,
                defaultMessage: `Make sure your selected payment method is valid and has sufficient funds.`
            })
        }), t[4] = s) : s = t[4], s
    }, C = e => {
        "use forget";
        let n = (0, v.c)(19),
            {
                autoTopOffServerState: r,
                analyticsSurface: i,
                isPaymentMethodWarningEligible: a,
                onManageMonthlyLimit: o,
                className: s
            } = e,
            c = a === void 0 || a;
        if (!r.isEnabled) return null;
        let l;
        n[0] === r ? l = n[1] : (l = h(r), n[0] = r, n[1] = l);
        let u = l,
            d;
        n[2] !== r || n[3] !== c ? (d = c && g(r), n[2] = r, n[3] = c, n[4] = d) : d = n[4];
        let f = d;
        if (!u && !f) return null;
        let p;
        n[5] === s ? p = n[6] : (p = t(`flex flex-col gap-3`, s), n[5] = s, n[6] = p);
        let m;
        n[7] !== i || n[8] !== o || n[9] !== u ? (m = u ? (0, y.jsx)(x, {
            analyticsSurface: i,
            onManageMonthlyLimit: o
        }) : null, n[7] = i, n[8] = o, n[9] = u, n[10] = m) : m = n[10];
        let _;
        n[11] !== i || n[12] !== r.paymentMethod || n[13] !== f ? (_ = f ? (0, y.jsx)(S, {
            analyticsSurface: i,
            hasPaymentMethod: r.paymentMethod != null,
            paymentMethodType: r.paymentMethod?.payment_type ?? void 0
        }) : null, n[11] = i, n[12] = r.paymentMethod, n[13] = f, n[14] = _) : _ = n[14];
        let b;
        return n[15] !== p || n[16] !== m || n[17] !== _ ? (b = (0, y.jsxs)(`div`, {
            className: p,
            children: [m, _]
        }), n[15] = p, n[16] = m, n[17] = _, n[18] = b) : b = n[18], b
    }
}));
export {
    w as n, C as t
};
//# sourceMappingURL=a4d2bcd2-dbcbr922wcbzvgsi.js.map