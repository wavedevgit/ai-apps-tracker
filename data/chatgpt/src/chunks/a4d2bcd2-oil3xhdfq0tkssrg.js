import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as t,
    Btt as n,
    Htt as r,
    IU as i,
    LU as a,
    b5 as o,
    kT as s,
    y5 as c
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as l,
    Nn as u,
    Rn as d,
    wn as f
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    okt as p,
    skt as m
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as h,
    r as g,
    t as _
} from "./d0d32730-c3kkenjv2zaob2gu.js";
var v, y, b, x, S, C, w = e((() => {
    v = f(), t(), i(), r(), p(), _(), o(), d(), y = l(), b = e => {
        "use forget";
        let t = (0, v.c)(16),
            {
                title: n,
                description: r,
                action: i,
                className: o
            } = e,
            s;
        t[0] === o ? s = t[1] : (s = c(`bg-token-theme-yellow-background text-token-theme-yellow-text flex items-start gap-2 rounded-xl p-3 text-xs leading-4`, o), t[0] = o, t[1] = s);
        let l;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, y.jsx)(a, {
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
        t[7] === i ? f = t[8] : (f = i ? (0, y.jsx)(`div`, {
            className: `mt-1`,
            children: i
        }) : null, t[7] = i, t[8] = f);
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
        let t = (0, v.c)(8),
            {
                analyticsSurface: r,
                onManageMonthlyLimit: i
            } = e,
            a;
        t[0] === r ? a = t[1] : (a = () => {
            n.logStructuredEvent(`ChatgptCodexAutoReloadLimitReachedWarningShown`, {
                surface: r
            })
        }, t[0] = r, t[1] = a), m(a);
        let o, c;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, y.jsx)(u, {
            id: `wham.autoRecharge.maximumMonthlySpendLimitReachedWarning.title`,
            defaultMessage: `Automatic reload is paused because you’ve reached your maximum monthly spend limit`
        }), c = (0, y.jsx)(u, {
            id: `wham.autoRecharge.maximumMonthlySpendLimitReachedWarning.description`,
            defaultMessage: `Increase your maximum monthly spend limit or remove it to resume automatic reloads.`
        }), t[2] = o, t[3] = c) : (o = t[2], c = t[3]);
        let l;
        t[4] === i ? l = t[5] : (l = i ? (0, y.jsx)(s, {
            type: `button`,
            color: `ghost`,
            size: `small`,
            className: `h-auto px-0 font-semibold underline`,
            onClick: i,
            children: (0, y.jsx)(u, {
                id: `wham.autoRecharge.maximumMonthlySpendLimitReachedWarning.manageMonthlyLimit`,
                defaultMessage: `Manage monthly limit`
            })
        }) : null, t[4] = i, t[5] = l);
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
                analyticsSurface: r,
                hasPaymentMethod: i,
                paymentMethodType: a
            } = e,
            o;
        t[0] !== r || t[1] !== i || t[2] !== a ? (o = () => {
            n.logStructuredEvent(`ChatgptCodexAutoReloadPaymentMethodWarningShown`, {
                hasPaymentMethod: i,
                surface: r,
                ...a == null ? {} : {
                    paymentMethodType: a
                }
            })
        }, t[0] = r, t[1] = i, t[2] = a, t[3] = o) : o = t[3], m(o);
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
                isPaymentMethodWarningEligible: i,
                onManageMonthlyLimit: a,
                className: o
            } = e,
            s = i === void 0 || i;
        if (!n.isEnabled) return null;
        let l;
        t[0] === n ? l = t[1] : (l = h(n), t[0] = n, t[1] = l);
        let u = l,
            d;
        t[2] !== n || t[3] !== s ? (d = s && g(n), t[2] = n, t[3] = s, t[4] = d) : d = t[4];
        let f = d;
        if (!u && !f) return null;
        let p;
        t[5] === o ? p = t[6] : (p = c(`flex flex-col gap-3`, o), t[5] = o, t[6] = p);
        let m;
        t[7] !== r || t[8] !== a || t[9] !== u ? (m = u ? (0, y.jsx)(x, {
            analyticsSurface: r,
            onManageMonthlyLimit: a
        }) : null, t[7] = r, t[8] = a, t[9] = u, t[10] = m) : m = t[10];
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
//# sourceMappingURL=a4d2bcd2-oil3xhdfq0tkssrg.js.map