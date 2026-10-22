import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Qy as n,
    Zy as r,
    l7 as i,
    oW as a,
    sW as o,
    u7 as s
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as c,
    Ln as l,
    Nn as u,
    Rn as d,
    Vn as f,
    wn as p,
    zn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    HH as h
} from "./conversation-small-dwpaie1hln28efxb.js";

function g(e, t, n) {
    return t.formatNumber(n * Number(e.price_per_credit), {
        currency: e.currency,
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
        style: `currency`
    })
}

function _({
    explainabilityContext: e,
    intl: t,
    limit: n
}) {
    let r = n * Number(e.price_per_credit);
    return {
        currencyValue: t.formatNumber(r, {
            currency: e.currency,
            style: `currency`
        })
    }
}

function v(e, t) {
    return e != null && t != null && e < t
}
var y, b, x, S, C, w, T, E, D = e((() => {
    y = p(), n(), a(), s(), b = t(f()), d(), h(), x = c(), S = e => {
        "use forget";
        let t = (0, y.c)(28),
            {
                creditValueTooltip: n,
                explainabilityContext: i,
                limit: a
            } = e,
            o = m(),
            s = (0, b.useId)();
        if (a == null) {
            let e;
            return t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, x.jsx)(`span`, {
                className: `text-token-text-secondary`,
                children: (0, x.jsx)(u, {
                    ...E.noLimit
                })
            }), t[0] = e) : e = t[0], e
        }
        let c;
        t[1] !== o || t[2] !== a ? (c = a === `unlimited_platform_max` ? (0, x.jsx)(u, {
            ...E.unlimited
        }) : (0, x.jsx)(u, {
            ...E.creditValue,
            values: {
                limit: o.formatNumber(a)
            }
        }), t[1] = o, t[2] = a, t[3] = c) : c = t[3];
        let l = c,
            d;
        t[4] !== i || t[5] !== o || t[6] !== a ? (d = a === `unlimited_platform_max` || i == null ? null : (0, x.jsx)(`span`, {
            className: `text-token-text-tertiary`,
            children: (0, x.jsx)(u, {
                ...E.compactEstimatedValue,
                values: {
                    ..._({
                        explainabilityContext: i,
                        intl: o,
                        limit: a
                    })
                }
            })
        }), t[4] = i, t[5] = o, t[6] = a, t[7] = d) : d = t[7];
        let f = d,
            p;
        t[8] === f ? p = t[9] : (p = f == null ? null : (0, x.jsxs)(x.Fragment, {
            children: [` `, f]
        }), t[8] = f, t[9] = p);
        let h;
        t[10] !== l || t[11] !== p ? (h = (0, x.jsxs)(x.Fragment, {
            children: [l, p]
        }), t[10] = l, t[11] = p, t[12] = h) : h = t[12];
        let g = h;
        if (n == null) {
            let e;
            return t[13] === g ? e = t[14] : (e = (0, x.jsx)(`span`, {
                children: g
            }), t[13] = g, t[14] = e), e
        }
        let v;
        t[15] !== g || t[16] !== s ? (v = (0, x.jsx)(`button`, {
            type: `button`,
            "aria-describedby": s,
            className: `cursor-help p-0 text-start`,
            children: g
        }), t[15] = g, t[16] = s, t[17] = v) : v = t[17];
        let S;
        t[18] !== n.label || t[19] !== n.secondaryLabel || t[20] !== v ? (S = (0, x.jsx)(r, {
            label: n.label,
            secondaryLabel: n.secondaryLabel,
            triggerAs: null,
            side: `top`,
            align: `start`,
            labelTextAlign: `left`,
            children: v
        }), t[18] = n.label, t[19] = n.secondaryLabel, t[20] = v, t[21] = S) : S = t[21];
        let C;
        t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, x.jsx)(u, {
            ...E.creditValueTooltipAction
        }), t[22] = C) : C = t[22];
        let w;
        t[23] === s ? w = t[24] : (w = (0, x.jsx)(`span`, {
            id: s,
            className: `sr-only`,
            children: C
        }), t[23] = s, t[24] = w);
        let T;
        return t[25] !== S || t[26] !== w ? (T = (0, x.jsxs)(x.Fragment, {
            children: [S, w]
        }), t[25] = S, t[26] = w, t[27] = T) : T = t[27], T
    }, C = e => {
        "use forget";
        let t = (0, y.c)(17),
            {
                explainabilityContext: n,
                limit: r,
                lowLimitWarningConfig: i
            } = e,
            a = m();
        if (r == null) return null;
        let o = i?.thresholdCreditsPerMember,
            s;
        t[0] !== r || t[1] !== o ? (s = v(r, o), t[0] = r, t[1] = o, t[2] = s) : s = t[2];
        let c = s;
        if (!c && n == null) return null;
        let l;
        t[3] !== n || t[4] !== a || t[5] !== r ? (l = n == null ? null : _({
            explainabilityContext: n,
            intl: a,
            limit: r
        }), t[3] = n, t[4] = a, t[5] = r, t[6] = l) : l = t[6];
        let d = l,
            f;
        t[7] !== n || t[8] !== r || t[9] !== i || t[10] !== c ? (f = c && i != null ? (0, x.jsx)(w, {
            className: `mb-4`,
            explainabilityContext: n,
            limit: r,
            lowLimitWarningConfig: i,
            variant: `limit`
        }) : null, t[7] = n, t[8] = r, t[9] = i, t[10] = c, t[11] = f) : f = t[11];
        let p;
        t[12] === d ? p = t[13] : (p = d == null ? null : (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsxs)(`div`, {
                children: [(0, x.jsx)(`div`, {
                    className: `text-token-text-secondary text-xs`,
                    children: (0, x.jsx)(u, {
                        ...E.estimatedSpendAtOverageRateLabel
                    })
                }), (0, x.jsx)(`div`, {
                    className: `text-token-text-primary mt-1 text-base font-medium`,
                    children: (0, x.jsx)(u, {
                        ...E.approximateMonthlyCurrencyValue,
                        values: d
                    })
                })]
            }), (0, x.jsx)(`div`, {
                className: `text-token-text-tertiary mt-3 text-xs leading-4`,
                children: (0, x.jsx)(T, {})
            })]
        }), t[12] = d, t[13] = p);
        let h;
        return t[14] !== f || t[15] !== p ? (h = (0, x.jsxs)(`div`, {
            className: `mt-4`,
            children: [f, p]
        }), t[14] = f, t[15] = p, t[16] = h) : h = t[16], h
    }, w = e => {
        "use forget";
        let t = (0, y.c)(24),
            {
                className: n,
                explainabilityContext: r,
                limit: a,
                lowLimitWarningConfig: s,
                variant: c
            } = e,
            l = m();
        if (s == null || !v(a, s.thresholdCreditsPerMember)) return null;
        let d;
        t[0] !== l || t[1] !== s.averageMonthlyCreditsPerMember ? (d = l.formatNumber(s.averageMonthlyCreditsPerMember), t[0] = l, t[1] = s.averageMonthlyCreditsPerMember, t[2] = d) : d = t[2];
        let f = d,
            p;
        t[3] !== l || t[4] !== s.powerUserMonthlyCreditsPerMember ? (p = l.formatNumber(s.powerUserMonthlyCreditsPerMember), t[3] = l, t[4] = s.powerUserMonthlyCreditsPerMember, t[5] = p) : p = t[5];
        let h = p,
            _;
        t[6] !== r || t[7] !== l || t[8] !== s.averageMonthlyCreditsPerMember || t[9] !== s.powerUserMonthlyCreditsPerMember ? (_ = r == null ? null : {
            averageMonthlySpend: g(r, l, s.averageMonthlyCreditsPerMember),
            powerUserMonthlySpend: g(r, l, s.powerUserMonthlyCreditsPerMember)
        }, t[6] = r, t[7] = l, t[8] = s.averageMonthlyCreditsPerMember, t[9] = s.powerUserMonthlyCreditsPerMember, t[10] = _) : _ = t[10];
        let b = _,
            S;
        t[11] === n ? S = t[12] : (S = i(`bg-token-bg-status-warning text-token-text-primary flex items-start gap-2 rounded-xl px-4 py-3 text-sm leading-5`, n), t[11] = n, t[12] = S);
        let C;
        t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, x.jsx)(o, {
            className: `icon-sm mt-0.5 shrink-0`
        }), t[13] = C) : C = t[13];
        let w = b == null ? c === `workspace-default` ? E.workspaceDefaultLowLimitWarning : E.lowLimitWarning : c === `workspace-default` ? E.workspaceDefaultLowLimitWarningWithSpend : E.lowLimitWarningWithSpend,
            T;
        t[14] !== f || t[15] !== h || t[16] !== b ? (T = {
            averageMonthlyCreditsPerMember: f,
            powerUserMonthlyCreditsPerMember: h,
            ...b
        }, t[14] = f, t[15] = h, t[16] = b, t[17] = T) : T = t[17];
        let D;
        t[18] !== w || t[19] !== T ? (D = (0, x.jsx)(u, {
            ...w,
            values: T
        }), t[18] = w, t[19] = T, t[20] = D) : D = t[20];
        let O;
        return t[21] !== S || t[22] !== D ? (O = (0, x.jsxs)(`div`, {
            className: S,
            role: `alert`,
            children: [C, D]
        }), t[21] = S, t[22] = D, t[23] = O) : O = t[23], O
    }, T = () => {
        "use forget";
        let e = (0, y.c)(1),
            t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, x.jsx)(u, {
            ...E.estimatedSpendDescription
        }), e[0] = t) : t = e[0], t
    }, E = l({
        estimatedSpendDescription: {
            id: `admin.usageLimits.explainability.estimatedSpend.description`,
            defaultMessage: `Estimated spend is based on your workspace’s credit overage rate. Actual charges may vary depending on base credit rate, overage rate, and billing terms.`
        },
        compactEstimatedValue: {
            id: `admin.usageLimits.explainability.compactEstimatedValue`,
            defaultMessage: `(~{currencyValue})`
        },
        creditValue: {
            id: `admin.usageLimits.creditValue`,
            defaultMessage: `{limit} credits`
        },
        creditValueTooltipAction: {
            id: `admin.usageLimits.creditValue.tooltipTrigger.action`,
            defaultMessage: `View limit source details`
        },
        estimatedSpendAtOverageRateLabel: {
            id: `admin.usageLimits.explainability.estimatedSpend.label`,
            defaultMessage: `Estimated spend`
        },
        approximateMonthlyCurrencyValue: {
            id: `admin.usageLimits.explainability.approximateMonthlyCurrencyValue`,
            defaultMessage: `≈ {currencyValue} / month`
        },
        noLimit: {
            id: `admin.usageLimits.noLimit`,
            defaultMessage: `No limit`
        },
        unlimited: {
            id: `admin.usageLimits.unlimited`,
            defaultMessage: `Unlimited`
        },
        lowLimitWarning: {
            id: `admin.usageLimits.explainability.lowLimitWarning.usageGuidance`,
            defaultMessage: `This limit may be restrictive. Average users consume {averageMonthlyCreditsPerMember} credits per month, and power users consume {powerUserMonthlyCreditsPerMember} credits or more per month.`
        },
        lowLimitWarningWithSpend: {
            id: `admin.usageLimits.explainability.lowLimitWarning.withSpend`,
            defaultMessage: `This limit may be restrictive. Average users consume {averageMonthlyCreditsPerMember} credits (~{averageMonthlySpend}) per month, and power users consume {powerUserMonthlyCreditsPerMember} credits or more (~{powerUserMonthlySpend}) per month.`
        },
        workspaceDefaultLowLimitWarning: {
            id: `admin.usageLimits.explainability.workspaceDefaultLowLimitWarning.usageGuidance`,
            defaultMessage: `This default limit may be restrictive. Average users consume {averageMonthlyCreditsPerMember} credits per month, and power users consume {powerUserMonthlyCreditsPerMember} credits or more per month.`
        },
        workspaceDefaultLowLimitWarningWithSpend: {
            id: `admin.usageLimits.explainability.workspaceDefaultLowLimitWarning.withSpend`,
            defaultMessage: `This default limit may be restrictive. Average users consume {averageMonthlyCreditsPerMember} credits (~{averageMonthlySpend}) per month, and power users consume {powerUserMonthlyCreditsPerMember} credits or more (~{powerUserMonthlySpend}) per month.`
        }
    })
}));
export {
    D as i, C as n, w as r, S as t
};
//# sourceMappingURL=e6141aca-nmu3a0jtbnkwgt9m.js.map