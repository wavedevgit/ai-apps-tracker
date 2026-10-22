import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as t,
    Int as n,
    Pnt as r,
    c7 as i,
    eE as a,
    l7 as o,
    oW as s,
    sW as c
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as l,
    Nn as u,
    Rn as d,
    wn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    ckt as p,
    skt as m
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    n as h,
    r as g,
    t as _
} from "./d0d32730-ng77sanfjdrqr0lx.js";
var v, y, b, x, S, C, w = e((() => {
    v = f(), a(), s(), n(), m(), _(), o(), d(), y = l(), b = e => {
        "use forget";
        let t = (0, v.c)(16),
            {
                title: n,
                description: r,
                action: a,
                className: o
            } = e,
            s;
        t[0] === o ? s = t[1] : (s = i(`bg-token-theme-yellow-background text-token-theme-yellow-text flex items-start gap-2 rounded-xl p-3 text-xs leading-4`, o), t[0] = o, t[1] = s);
        let l;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, y.jsx)(c, {
            className: `size-6 shrink-0`
        }), t[2] = l) : l = t[2];
        let u;
        t[3] === n ? u = t[4] : (u = (0, y.jsx)(`div`, {
            className: `font-semibold`,
            children: n
        }), t[3] = n, t[4] = u);
        let d;
        t[5] === r ? d = t[6] : (d = (0, y.jsx)(`div`, {
            children: r
        }), t[5] = r, t[6] = d);
        let f;
        t[7] === a ? f = t[8] : (f = a ? (0, y.jsx)(`div`, {
            className: `mt-1`,
            children: a
        }) : null, t[7] = a, t[8] = f);
        let p;
        t[9] !== u || t[10] !== d || t[11] !== f ? (p = (0, y.jsxs)(`div`, {
            className: `min-w-0`,
            children: [u, d, f]
        }), t[9] = u, t[10] = d, t[11] = f, t[12] = p) : p = t[12];
        let m;
        return t[13] !== s || t[14] !== p ? (m = (0, y.jsxs)(`div`, {
            className: s,
            role: `alert`,
            children: [l, p]
        }), t[13] = s, t[14] = p, t[15] = m) : m = t[15], m
    }, x = e => {
        "use forget";
        let n = (0, v.c)(8),
            {
                analyticsSurface: i,
                onManageMonthlyLimit: a
            } = e,
            o;
        n[0] === i ? o = n[1] : (o = () => {
            r.logStructuredEvent(`ChatgptCodexAutoReloadLimitReachedWarningShown`, {
                surface: i
            })
        }, n[0] = i, n[1] = o), p(o);
        let s, c;
        n[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, y.jsx)(u, {
            id: `wham.autoRecharge.maximumMonthlySpendLimitReachedWarning.title`,
            defaultMessage: `Automatic reload is paused because you’ve reached your maximum monthly spend limit`
        }), c = (0, y.jsx)(u, {
            id: `wham.autoRecharge.maximumMonthlySpendLimitReachedWarning.description`,
            defaultMessage: `Increase your maximum monthly spend limit or remove it to resume automatic reloads.`
        }), n[2] = s, n[3] = c) : (s = n[2], c = n[3]);
        let l;
        n[4] === a ? l = n[5] : (l = a ? (0, y.jsx)(t, {
            type: `button`,
            color: `ghost`,
            size: `small`,
            className: `h-auto px-0 font-semibold underline`,
            onClick: a,
            children: (0, y.jsx)(u, {
                id: `wham.autoRecharge.maximumMonthlySpendLimitReachedWarning.manageMonthlyLimit`,
                defaultMessage: `Manage monthly limit`
            })
        }) : null, n[4] = a, n[5] = l);
        let d;
        return n[6] === l ? d = n[7] : (d = (0, y.jsx)(b, {
            title: s,
            description: c,
            action: l
        }), n[6] = l, n[7] = d), d
    }, S = e => {
        "use forget";
        let t = (0, v.c)(5),
            {
                analyticsSurface: n,
                hasPaymentMethod: i,
                paymentMethodType: a
            } = e,
            o;
        t[0] !== n || t[1] !== i || t[2] !== a ? (o = () => {
            r.logStructuredEvent(`ChatgptCodexAutoReloadPaymentMethodWarningShown`, {
                hasPaymentMethod: i,
                surface: n,
                ...a == null ? {} : {
                    paymentMethodType: a
                }
            })
        }, t[0] = n, t[1] = i, t[2] = a, t[3] = o) : o = t[3], p(o);
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
        let t = (0, v.c)(19),
            {
                autoTopOffServerState: n,
                analyticsSurface: r,
                isPaymentMethodWarningEligible: a,
                onManageMonthlyLimit: o,
                className: s
            } = e,
            c = a === void 0 || a;
        if (!n.isEnabled) return null;
        let l;
        t[0] === n ? l = t[1] : (l = h(n), t[0] = n, t[1] = l);
        let u = l,
            d;
        t[2] !== n || t[3] !== c ? (d = c && g(n), t[2] = n, t[3] = c, t[4] = d) : d = t[4];
        let f = d;
        if (!u && !f) return null;
        let p;
        t[5] === s ? p = t[6] : (p = i(`flex flex-col gap-3`, s), t[5] = s, t[6] = p);
        let m;
        t[7] !== r || t[8] !== o || t[9] !== u ? (m = u ? (0, y.jsx)(x, {
            analyticsSurface: r,
            onManageMonthlyLimit: o
        }) : null, t[7] = r, t[8] = o, t[9] = u, t[10] = m) : m = t[10];
        let _;
        t[11] !== r || t[12] !== n.paymentMethod || t[13] !== f ? (_ = f ? (0, y.jsx)(S, {
            analyticsSurface: r,
            hasPaymentMethod: n.paymentMethod != null,
            paymentMethodType: n.paymentMethod?.payment_type ?? void 0
        }) : null, t[11] = r, t[12] = n.paymentMethod, t[13] = f, t[14] = _) : _ = t[14];
        let b;
        return t[15] !== p || t[16] !== m || t[17] !== _ ? (b = (0, y.jsxs)(`div`, {
            className: p,
            children: [m, _]
        }), t[15] = p, t[16] = m, t[17] = _, t[18] = b) : b = t[18], b
    }
}));
export {
    w as n, C as t
};
//# sourceMappingURL=a4d2bcd2-c5ustlx3gs9ftnnb.js.map