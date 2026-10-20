import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as t,
    JT as n,
    _nt as r,
    cW as i,
    hnt as a,
    lW as o,
    q5 as s,
    qT as c
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Pn as l,
    Tn as u,
    Vn as d,
    zn as f
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    ckt as p,
    lkt as m
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    n as h,
    r as g,
    t as _
} from "./d0d32730-djoh1qis0573lc61.js";
var v, y, b, x, S, C, w = e((() => {
    v = u(), n(), i(), r(), p(), _(), t(), f(), y = d(), b = e => {
        "use forget";
        let t = (0, v.c)(16),
            {
                title: n,
                description: r,
                action: i,
                className: a
            } = e,
            c;
        t[0] === a ? c = t[1] : (c = s(`bg-token-theme-yellow-background text-token-theme-yellow-text flex items-start gap-2 rounded-xl p-3 text-xs leading-4`, a), t[0] = a, t[1] = c);
        let l;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, y.jsx)(o, {
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
        return t[13] !== c || t[14] !== p ? (m = (0, y.jsxs)(`div`, {
            className: c,
            role: `alert`,
            children: [l, p]
        }), t[13] = c, t[14] = p, t[15] = m) : m = t[15], m
    }, x = e => {
        "use forget";
        let t = (0, v.c)(8),
            {
                analyticsSurface: n,
                onManageMonthlyLimit: r
            } = e,
            i;
        t[0] === n ? i = t[1] : (i = () => {
            a.logStructuredEvent(`ChatgptCodexAutoReloadLimitReachedWarningShown`, {
                surface: n
            })
        }, t[0] = n, t[1] = i), m(i);
        let o, s;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, y.jsx)(l, {
            id: `wham.autoRecharge.maximumMonthlySpendLimitReachedWarning.title`,
            defaultMessage: `Automatic reload is paused because you’ve reached your maximum monthly spend limit`
        }), s = (0, y.jsx)(l, {
            id: `wham.autoRecharge.maximumMonthlySpendLimitReachedWarning.description`,
            defaultMessage: `Increase your maximum monthly spend limit or remove it to resume automatic reloads.`
        }), t[2] = o, t[3] = s) : (o = t[2], s = t[3]);
        let u;
        t[4] === r ? u = t[5] : (u = r ? (0, y.jsx)(c, {
            type: `button`,
            color: `ghost`,
            size: `small`,
            className: `h-auto px-0 font-semibold underline`,
            onClick: r,
            children: (0, y.jsx)(l, {
                id: `wham.autoRecharge.maximumMonthlySpendLimitReachedWarning.manageMonthlyLimit`,
                defaultMessage: `Manage monthly limit`
            })
        }) : null, t[4] = r, t[5] = u);
        let d;
        return t[6] === u ? d = t[7] : (d = (0, y.jsx)(b, {
            title: o,
            description: s,
            action: u
        }), t[6] = u, t[7] = d), d
    }, S = e => {
        "use forget";
        let t = (0, v.c)(5),
            {
                analyticsSurface: n,
                hasPaymentMethod: r,
                paymentMethodType: i
            } = e,
            o;
        t[0] !== n || t[1] !== r || t[2] !== i ? (o = () => {
            a.logStructuredEvent(`ChatgptCodexAutoReloadPaymentMethodWarningShown`, {
                hasPaymentMethod: r,
                surface: n,
                ...i == null ? {} : {
                    paymentMethodType: i
                }
            })
        }, t[0] = n, t[1] = r, t[2] = i, t[3] = o) : o = t[3], m(o);
        let s;
        return t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, y.jsx)(b, {
            title: (0, y.jsx)(l, {
                id: `wham.autoRecharge.paymentFailedTitle`,
                defaultMessage: `Your last automatic reload payment failed`
            }),
            description: (0, y.jsx)(l, {
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
            c = i === void 0 || i;
        if (!n.isEnabled) return null;
        let l;
        t[0] === n ? l = t[1] : (l = h(n), t[0] = n, t[1] = l);
        let u = l,
            d;
        t[2] !== n || t[3] !== c ? (d = c && g(n), t[2] = n, t[3] = c, t[4] = d) : d = t[4];
        let f = d;
        if (!u && !f) return null;
        let p;
        t[5] === o ? p = t[6] : (p = s(`flex flex-col gap-3`, o), t[5] = o, t[6] = p);
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
//# sourceMappingURL=a4d2bcd2-oii0avpml084lpsm.js.map