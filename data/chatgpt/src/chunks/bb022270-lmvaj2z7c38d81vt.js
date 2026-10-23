import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    K5 as n,
    q5 as r
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as i,
    Ln as a,
    Nn as o,
    Rn as s,
    Vn as c,
    wn as l,
    zn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $in as d,
    Fon as ee,
    tan as f
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Sm as p,
    _m as te,
    vm as m,
    ym as h
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    i as g,
    r as _,
    t as v
} from "./cf38d95c-ecylawypz26iazhe.js";
import {
    n as ne,
    t as re
} from "./c96c6d5b-jno6mca8p0to3rts.js";
var y, ie, b, ae = e((() => {
        y = `_2zJzbW_savingsBadge`, ie = `_2zJzbW_selectedBadge`, b = {
            savingsBadge: y,
            selectedBadge: ie
        }
    })),
    x, oe, se, S = e((() => {
        x = i(), c(), oe = e => (0, x.jsx)(`svg`, {
            preserveAspectRatio: `none`,
            overflow: `visible`,
            style: {
                display: `block`
            },
            width: 2,
            height: 2,
            viewBox: `0 0 2 2`,
            fill: `none`,
            xmlns: `http://www.w3.org/2000/svg`,
            ...e,
            children: (0, x.jsx)(`circle`, {
                id: `dot`,
                cx: 1,
                cy: 1,
                r: 1,
                fill: `#BFBFBF`
            })
        }), se = oe
    })),
    C, ce = e((() => {
        s(), C = a({
            amountGroupLegend: {
                id: `chatgpt.checkout.credit_discount.amount.option_group.legend`,
                defaultMessage: `Credit purchase amount`
            },
            amountSavingsBadge: {
                id: `chatgpt.checkout.credit_discount.amount.option.savings_badge`,
                defaultMessage: `Save {discountPercentage}`
            },
            otherAmount: {
                id: `chatgpt.checkout.credit_discount.amount.option.other`,
                defaultMessage: `Other`
            },
            modalOtherAmount: {
                id: `chatgpt.checkout.credit_discount.amount.option.other.modal`,
                defaultMessage: `Other amount`
            },
            amountOptionLabel: {
                id: `chatgpt.checkout.credit_discount.amount.option.accessible_label`,
                defaultMessage: `{price}, {creditQuantityLabel}, save {discountPercentage}`
            },
            amountOptionLabelWithDiscountedPrice: {
                id: `chatgpt.checkout.credit_discount.amount.option.accessible_label.discounted_price`,
                defaultMessage: `Now {discountedPrice}, was {originalPrice}, {creditQuantity, plural, one {# credit} other {# credits}}, save {discountPercentage}`
            },
            amountOptionLabelWithoutDiscount: {
                id: `chatgpt.checkout.credit_discount.amount.option.accessible_label.no_discount`,
                defaultMessage: `{price}, {creditQuantityLabel}`
            },
            otherAmountLabel: {
                id: `chatgpt.checkout.credit_discount.amount.option.other.currency_input.accessible_label`,
                defaultMessage: `Enter another purchase amount`
            },
            customAmountInputLabel: {
                id: `chatgpt.checkout.credit_discount.amount.custom.currency_input.accessible_label`,
                defaultMessage: `Custom purchase amount in {currency}`
            },
            customAmountMinimumError: {
                id: `chatgpt.checkout.credit_discount.amount.custom.currency_input.error.minimum`,
                defaultMessage: `Minimum purchase is {minimumAmount}.`
            },
            modalCustomAmountMinimumError: {
                id: `chatgpt.checkout.credit_discount.amount.custom.currency_input.error.modal_minimum`,
                defaultMessage: `The minimum amount is {minimumAmount}.`
            },
            customAmountIncrementError: {
                id: `chatgpt.checkout.credit_discount.amount.custom.currency_input.error.increment`,
                defaultMessage: `Amount must be in increments of {incrementAmount}.`
            },
            customAmountMaximumError: {
                id: `chatgpt.checkout.credit_discount.amount.custom.currency_input.error.maximum_amount`,
                defaultMessage: `Maximum purchase is {maximumAmount}.`
            },
            customAmountCurrencyError: {
                id: `chatgpt.checkout.credit_discount.amount.custom.currency_input.error.conversion`,
                defaultMessage: `Enter an amount that converts to a whole number of credits.`
            },
            customAmountCreditIncrementError: {
                id: `chatgpt.checkout.credit_discount.amount.custom.currency_input.error.credit_increment`,
                defaultMessage: `Enter an amount that buys credits in increments of {creditIncrement, number}.`
            },
            customAmountInvalidNumberError: {
                id: `chatgpt.checkout.credit_discount.amount.custom.currency_input.error.invalid_number`,
                defaultMessage: `Enter a number.`
            },
            customAmountPriceVerificationError: {
                id: `chatgpt.checkout.credit_discount.amount.custom.currency_input.error.price_verification`,
                defaultMessage: `We couldn't confirm the total for this amount. Try again.`
            },
            customAmountCheckoutUpdateError: {
                id: `chatgpt.checkout.credit_discount.amount.custom.currency_input.error.checkout_update`,
                defaultMessage: `We couldn't update your checkout. Try again.`
            }
        })
    }));

function w({
    intl: e,
    amountPerCredit: t,
    creditQuantity: n,
    currency: r,
    minorUnitExponent: i,
    discountPercent: a,
    originalPriceMinorUnits: o,
    payablePriceMinorUnits: s
}) {
    let c = o ?? te({
            amountPerCredit: t,
            creditQuantity: n,
            minorUnitExponent: i
        }),
        l = 10 ** i,
        u = ee({
            amount: c / l,
            currency: r,
            intl: e
        }),
        f = s ?? (a > 0 ? h(c, a) : c),
        p = f === c ? u : ee({
            amount: f / l,
            currency: r,
            intl: e
        }),
        m = e.formatMessage(d(), {
            credits: e.formatNumber(n)
        });
    if (a <= 0) return {
        priceLabel: p,
        originalPriceLabel: void 0,
        creditQuantityLabel: m,
        savingsLabel: void 0,
        accessibleLabel: e.formatMessage(C.amountOptionLabelWithoutDiscount, {
            price: p,
            creditQuantityLabel: m
        })
    };
    let g = e.formatNumber(a / 100, {
        maximumFractionDigits: 0,
        style: `percent`
    });
    return {
        priceLabel: p,
        originalPriceLabel: u,
        creditQuantityLabel: m,
        savingsLabel: e.formatMessage(C.amountSavingsBadge, {
            discountPercentage: g
        }),
        accessibleLabel: e.formatMessage(C.amountOptionLabelWithDiscountedPrice, {
            creditQuantity: n,
            discountedPrice: p,
            discountPercentage: g,
            originalPrice: u
        })
    }
}
var T = e((() => {
    _(), ce(), f(), p()
}));

function E({
    amountPerCredit: e,
    creditQuantity: t,
    creditQuantityStep: n = 1,
    currency: r,
    maximumCreditQuantity: i,
    minorUnitExponent: a
}) {
    let s = u();
    return t == null || !Number.isFinite(t) ? (0, D.jsx)(o, {
        ...C.customAmountInvalidNumberError
    }) : t > i ? (0, D.jsx)(o, {
        ...C.customAmountMaximumError,
        values: {
            maximumAmount: v({
                amount: te({
                    amountPerCredit: e,
                    creditQuantity: Math.floor(i / n) * n,
                    minorUnitExponent: a
                }),
                currency: r,
                intl: s
            })
        }
    }) : Number.isInteger(t) && n > 1 ? (0, D.jsx)(o, {
        ...C.customAmountCreditIncrementError,
        values: {
            creditIncrement: n
        }
    }) : (0, D.jsx)(o, {
        ...C.customAmountCurrencyError
    })
}
var D, O = e((() => {
    s(), _(), ce(), p(), D = i()
}));

function le({
    children: e,
    className: t,
    footer: r,
    ...i
}) {
    return (0, j.jsxs)(`div`, {
        ...i,
        className: n(`flex flex-col gap-1 rounded-2xl border border-token-border-default p-2`, t),
        children: [(0, j.jsx)(`div`, {
            className: `flex flex-col gap-1 [[data-stripe-checkout-dialog]_&]:max-h-29 [[data-stripe-checkout-dialog]_&]:overflow-y-auto [[data-stripe-checkout-dialog]_&]:overscroll-contain [[data-stripe-checkout-dialog]_&]:[scrollbar-color:var(--color-border)_transparent] [[data-stripe-checkout-dialog]_&]:[scrollbar-width:thin]`,
            children: e
        }), r == null ? null : (0, j.jsxs)(j.Fragment, {
            children: [(0, j.jsx)(`div`, {
                className: `border-token-border-default my-1 border-t`
            }), r]
        })]
    })
}

function k({
    creditQuantityLabel: e,
    originalPriceLabel: t,
    priceLabel: n,
    savingsLabel: r,
    selected: i
}) {
    return (0, j.jsxs)(`div`, {
        "aria-hidden": `true`,
        className: `flex min-w-0 flex-1 items-center gap-1 text-sm leading-5`,
        children: [(0, j.jsx)(`span`, {
            className: `text-token-text-primary shrink-0 font-semibold`,
            children: n
        }), t == null ? null : (0, j.jsx)(`s`, {
            className: `text-token-text-secondary shrink-0`,
            children: t
        }), (0, j.jsx)(se, {
            className: `shrink-0`
        }), (0, j.jsx)(`span`, {
            className: `text-token-text-secondary min-w-0 truncate`,
            children: e
        }), r == null ? null : (0, j.jsx)(A, {
            label: r,
            selected: i
        })]
    })
}

function ue({
    descriptionId: e,
    focused: t,
    preview: n
}) {
    return (0, j.jsxs)(j.Fragment, {
        children: [t ? null : (0, j.jsx)(`div`, {
            "aria-hidden": `true`,
            className: `pointer-events-none absolute inset-0 flex items-center rounded-[10px] border border-token-border-heavy px-2.5 py-1.5 group-focus-within/credit-amount:hidden`,
            children: n.content
        }), (0, j.jsx)(`span`, {
            id: e,
            className: `sr-only`,
            children: n.description
        })]
    })
}

function A({
    label: e,
    selected: t
}) {
    return (0, j.jsx)(`div`, {
        className: `puik-root ms-auto shrink-0 ps-1`,
        children: (0, j.jsx)(`span`, {
            className: n(b.savingsBadge, t && b.selectedBadge),
            children: e
        })
    })
}

function de({
    accessibleLabel: e,
    checked: t,
    creditQuantityLabel: r,
    disabled: i,
    id: a,
    name: o,
    onChange: s,
    onClick: c,
    onPointerDown: l,
    originalPriceLabel: u,
    priceLabel: d,
    savingsLabel: ee,
    value: f
}) {
    return (0, j.jsxs)(`div`, {
        className: n(`relative flex min-h-9 items-center rounded-[10px] px-2.5 py-1.5 text-start transition-colors`, t ? `bg-token-interactive-bg-secondary-selected` : !i && `hover:bg-token-interactive-bg-secondary-hover`, i && `opacity-50`),
        children: [(0, j.jsx)(`input`, {
            id: a,
            "aria-label": e,
            checked: t,
            className: `peer absolute inset-0 z-10 m-0 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed`,
            disabled: i,
            name: o,
            onChange: s,
            onClick: c,
            onPointerDown: l,
            type: `radio`,
            value: f
        }), (0, j.jsx)(`span`, {
            "aria-hidden": `true`,
            className: `pointer-events-none absolute inset-0 rounded-[10px] peer-focus-visible:ring-2 peer-focus-visible:ring-black/70 peer-focus-visible:ring-offset-2 dark:peer-focus-visible:ring-white/70 [[data-stripe-checkout-dialog]_&]:ring-inset [[data-stripe-checkout-dialog]_&]:peer-focus-visible:ring-offset-0`
        }), (0, j.jsx)(k, {
            creditQuantityLabel: r,
            originalPriceLabel: u,
            priceLabel: d,
            savingsLabel: ee,
            selected: t
        })]
    })
}
var j, fe = e((() => {
        r(), ae(), S(), j = i(), T(), O()
    })),
    M, N, P, pe, me, he = e((() => {
        M = `nZdtgW_field`, N = `nZdtgW_inline`, P = `nZdtgW_inlineField`, pe = `nZdtgW_modal`, me = {
            field: M,
            inline: N,
            inlineField: P,
            modal: pe
        }
    }));

function ge({
    amountPerCredit: e,
    purchaseAmountMinorUnits: t,
    creditQuantity: n,
    currency: r,
    intl: i,
    minorUnitExponent: a,
    trailingZeroDisplay: o
}) {
    return Number.isFinite(n) ? be({
        amount: t == null ? n * e : Number(t) / 10 ** a,
        currency: r,
        intl: i,
        minorUnitExponent: a,
        trailingZeroDisplay: o
    }).filter(e => [`integer`, `group`, `decimal`, `fraction`].includes(e.type)).map(e => e.value).join(``).trim() : null
}

function _e({
    amountPerCredit: e,
    decimalSeparator: t,
    groupSeparator: n,
    minorUnitExponent: r,
    value: i
}) {
    let a = F(i).trim().replaceAll(`٬`, n).replaceAll(`٫`, t).replaceAll(n, ``).replaceAll(t, `.`),
        o = /^(\d+)(?:\.(\d*))?$/.exec(a);
    return o == null || !Number.isSafeInteger(r) || r < 0 || r > 3 || (o[2]?.length ?? 0) > r ? null : ve({
        amountMinorUnits: o[1] + (o[2] ?? ``).padEnd(r, `0`),
        amountPerCredit: e,
        minorUnitExponent: r
    })
}

function ve({
    amountMinorUnits: e,
    amountPerCredit: t,
    minorUnitExponent: n
}) {
    if (!/^\d+$/.test(e) || !Number.isSafeInteger(n) || n < 0 || n > 3 || !Number.isFinite(t) || t <= 0) return null;
    let r = BigInt(e);
    if (r > BigInt(2 ** 53 - 1)) return null;
    let i = m({
        amountPerCredit: t,
        amountMinorUnits: r,
        minorUnitExponent: n
    });
    return i == null ? null : {
        amountMinorUnits: r.toString(),
        quantity: i
    }
}

function ye({
    currency: e,
    intl: t,
    minorUnitExponent: n
}) {
    let r = be({
            amount: 12345.6,
            currency: e,
            intl: t,
            minorUnitExponent: n
        }),
        i = t.formatters.getNumberFormat(t.locale, {
            numberingSystem: `latn`
        }),
        a = i.formatToParts(12345.6),
        o = r.findIndex(e => e.type === `integer`),
        s = r.findLastIndex(e => [`integer`, `fraction`].includes(e.type));
    return {
        currencySymbol: r.find(e => e.type === `currency`)?.value ?? null,
        currencyPrefix: r.slice(0, o).map(e => e.value).join(``),
        currencySuffix: r.slice(s + 1).map(e => e.value).join(``),
        decimalSeparator: a.find(e => e.type === `decimal`)?.value ?? `.`,
        groupSeparator: a.find(e => e.type === `group`)?.value ?? `,`,
        numberFormatter: i
    }
}

function be({
    amount: e,
    currency: t,
    intl: n,
    minorUnitExponent: r,
    trailingZeroDisplay: i
}) {
    return n.formatters.getNumberFormat(n.locale, {
        currency: t,
        maximumFractionDigits: r,
        minimumFractionDigits: r,
        numberingSystem: `latn`,
        trailingZeroDisplay: i,
        style: `currency`
    }).formatToParts(e)
}

function xe({
    amountPerCredit: e,
    decimalSeparator: t,
    groupSeparator: n,
    minorUnitExponent: r,
    value: i
}) {
    let a = i.trim();
    if (a.length === 0) return ``;
    let o = Se({
        amountPerCredit: e,
        decimalSeparator: t,
        groupSeparator: n,
        minorUnitExponent: r,
        value: a
    });
    if (o == null) return null;
    let s = Math.round(o);
    return Math.abs(o - s) > 1e-6 ? null : String(s)
}

function Se({
    amountPerCredit: e,
    decimalSeparator: t,
    groupSeparator: n,
    minorUnitExponent: r,
    value: i
}) {
    let a = F(i).trim().replaceAll(`٬`, n).replaceAll(`٫`, t).replaceAll(n, ``).replaceAll(t, `.`).replace(/[^\d.]/g, ``);
    if (!/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(a) || (a.split(`.`)[1]?.length ?? 0) > r) return null;
    let o = Number.parseFloat(a);
    return e <= 0 || !Number.isFinite(o) || o < 0 ? null : o / e
}

function Ce({
    decimalSeparator: e,
    groupSeparator: t,
    minorUnitExponent: n,
    numberFormatter: r,
    value: i
}) {
    let [a = ``, o, ...s] = F(i).trim().replaceAll(`٬`, t).replaceAll(`٫`, e).split(e);
    if (s.length > 0 || o != null && !/^\d*$/.test(o) || n != null && !g(o?.length, n)) return !1;
    let c = a.split(t);
    return c.length === 1 ? /^\d*$/.test(a) : /^\d{1,3}$/.test(c[0] ?? ``) && c.slice(1).every(e => /^\d{3}$/.test(e)) || /^\d+$/.test(c.join(``)) && r.format(BigInt(c.join(``))) === a
}

function F(e) {
    return Array.from(e, e => {
        let t = e.codePointAt(0);
        return t == null ? e : t >= 1632 && t <= 1641 ? String(t - 1632) : t >= 1776 && t <= 1785 ? String(t - 1776) : e
    }).join(``)
}
var we, I, L, R, z = e((() => {
    we = l(), re(), r(), I = t(c(), 1), s(), _(), fe(), p(), he(), L = i(), R = e => {
        "use forget";
        let t = (0, we.c)(142),
            {
                amountPerCredit: r,
                ariaLabel: i,
                className: a,
                creditQuantity: s,
                purchaseAmountMinorUnits: c,
                roundPurchaseCredits: l,
                currency: d,
                disabled: ee,
                draftResetVersion: f,
                error: p,
                inputRef: te,
                inlineCreditQuantity: m,
                minorUnitExponent: h,
                name: g,
                onBlur: _,
                onCreditQuantityChange: v,
                onFocus: re,
                onInvalidCurrencyDraftChange: y,
                onPressEnter: ie,
                payableAmount: b,
                preventInvalidPrecision: ae,
                originalPrice: x,
                placeholder: oe,
                presentation: se,
                savingsBadge: S,
                showCreditQuantityEstimate: C,
                showCurrencySymbolWhenEmpty: ce,
                unfocusedPreview: w
            } = e,
            T = l !== void 0 && l,
            E = ee !== void 0 && ee,
            D = f === void 0 ? 0 : f,
            O = m !== void 0 && m,
            le = ae !== void 0 && ae,
            k = se === void 0 ? `page` : se,
            A = C === void 0 || C,
            de = ce !== void 0 && ce,
            j = u(),
            fe = k !== `page`,
            M = (0, I.useId)(),
            N = (0, I.useId)(),
            [P, pe] = (0, I.useState)(!1),
            he;
        t[0] === D ? he = t[1] : (he = {
            value: null,
            version: D
        }, t[0] = D, t[1] = he);
        let [ve, be] = (0, I.useState)(he), F = ve.version === D ? ve.value : null, R;
        t[2] === D ? R = t[3] : (R = e => {
            be({
                value: e,
                version: D
            })
        }, t[2] = D, t[3] = R);
        let z = R,
            B, V, H, U, W, G, Te;
        if (t[4] !== r || t[5] !== s || t[6] !== d || t[7] !== F || t[8] !== j || t[9] !== P || t[10] !== h || t[11] !== b || t[12] !== k || t[13] !== c || t[14] !== T || t[15] !== de) {
            V = ye({
                currency: d,
                intl: j,
                minorUnitExponent: h
            }), W = b == null ? r : 1 / 10 ** h;
            let e = b == null ? s : b.minorUnits == null ? `` : String(b.minorUnits),
                n = ge({
                    amountPerCredit: W,
                    purchaseAmountMinorUnits: b == null && T ? c : null,
                    creditQuantity: Number.parseInt(e, 10),
                    trailingZeroDisplay: k === `inline` ? `stripIfInteger` : void 0,
                    currency: d,
                    intl: j,
                    minorUnitExponent: h
                });
            U = F ?? (P ? n?.replaceAll(V.groupSeparator, ``) : n) ?? e, H = U.length > 0 || de ? V.currencySymbol : null, B = F == null || Ce({
                decimalSeparator: V.decimalSeparator,
                groupSeparator: V.groupSeparator,
                numberFormatter: V.numberFormatter,
                value: F
            }), G = b == null && T && B ? _e({
                amountPerCredit: r,
                decimalSeparator: V.decimalSeparator,
                groupSeparator: V.groupSeparator,
                minorUnitExponent: h,
                value: U
            }) : null, Te = b != null || T ? s === `` ? null : Number(s) : B ? Se({
                amountPerCredit: r,
                decimalSeparator: V.decimalSeparator,
                groupSeparator: V.groupSeparator,
                minorUnitExponent: h,
                value: U
            }) : null, t[4] = r, t[5] = s, t[6] = d, t[7] = F, t[8] = j, t[9] = P, t[10] = h, t[11] = b, t[12] = k, t[13] = c, t[14] = T, t[15] = de, t[16] = B, t[17] = V, t[18] = H, t[19] = U, t[20] = W, t[21] = G, t[22] = Te
        } else B = t[16], V = t[17], H = t[18], U = t[19], W = t[20], G = t[21], Te = t[22];
        let K = Te,
            q = (0, I.useId)(),
            Ee = w != null && `group/credit-amount relative`,
            J;
        t[23] === Ee ? J = t[24] : (J = n(`puik-root flex w-full flex-col gap-1`, Ee), t[23] = Ee, t[24] = J);
        let Y;
        t[25] !== M || t[26] !== p || t[27] !== q || t[28] !== K || t[29] !== N || t[30] !== A || t[31] !== w ? (Y = [w == null ? A && K != null ? M : null : N, p ? q : null].filter(Boolean).join(` `) || void 0, t[25] = M, t[26] = p, t[27] = q, t[28] = K, t[29] = N, t[30] = A, t[31] = w, t[32] = Y) : Y = t[32];
        let De = w != null && !P && `opacity-0 focus-within:opacity-100`,
            X;
        t[33] !== a || t[34] !== k || t[35] !== De ? (X = n(a, De, k === `inline` && [me.inlineField, `gap-0! rounded-xl`]), t[33] = a, t[34] = k, t[35] = De, t[36] = X) : X = t[36];
        let Oe = k === `inline` ? `lg` : `xl`,
            ke = k === `inline` ? `xs` : void 0,
            Ae = k === `inline` && `text-body-small! min-w-0 tabular-nums`,
            je = k === `inline` && O && `flex-initial! px-0! font-medium`,
            Z;
        t[37] !== Ae || t[38] !== je ? (Z = n(Ae, je), t[37] = Ae, t[38] = je, t[39] = Z) : Z = t[39];
        let Me = !!p,
            Ne = !!p,
            Pe = le && h === 0 ? `numeric` : `decimal`,
            Fe;
        t[40] !== V.currencyPrefix || t[41] !== H || t[42] !== O || t[43] !== k ? (Fe = k === `inline` && O ? (0, L.jsx)(L.Fragment, {
            children: H != null && (0, L.jsx)(`span`, {
                "aria-hidden": `true`,
                className: n(`text-body-small-medium whitespace-pre`),
                children: V.currencyPrefix
            })
        }) : H, t[40] = V.currencyPrefix, t[41] = H, t[42] = O, t[43] = k, t[44] = Fe) : Fe = t[44];
        let Ie;
        t[45] !== V.currencySuffix || t[46] !== H || t[47] !== O || t[48] !== k ? (Ie = k === `inline` && O && H != null && (0, L.jsx)(`span`, {
            "aria-hidden": `true`,
            className: n(`text-body-small-medium whitespace-pre`),
            children: V.currencySuffix
        }), t[45] = V.currencySuffix, t[46] = H, t[47] = O, t[48] = k, t[49] = Ie) : Ie = t[49];
        let Le;
        t[50] !== x || t[51] !== k ? (Le = k === `inline` && x != null ? (0, L.jsx)(`span`, {
            className: `text-body-small ms-1 text-token-text-tertiary line-through`,
            children: x
        }) : null, t[50] = x, t[51] = k, t[52] = Le) : Le = t[52];
        let Re;
        t[53] !== M || t[54] !== K || t[55] !== k || t[56] !== A ? (Re = A && K != null ? (0, L.jsx)(`span`, {
            id: M,
            "aria-live": `polite`,
            "aria-atomic": `true`,
            className: n(`text-token-text-secondary`, k === `inline` ? `text-body-small ms-1 min-w-0 truncate` : `shrink-0 text-sm whitespace-nowrap`),
            children: k === `inline` ? (0, L.jsx)(o, {
                id: `chatgpt.inline_credit_checkout.amount.custom.credit_quantity`,
                defaultMessage: `· {creditQuantity, number} credits`,
                values: {
                    creditQuantity: K
                }
            }) : (0, L.jsx)(o, {
                id: `chatgpt.checkout.credit_discount.currency_input.credit_quantity`,
                defaultMessage: `{creditQuantity, number} credits`,
                values: {
                    creditQuantity: K
                }
            })
        }) : null, t[53] = M, t[54] = K, t[55] = k, t[56] = A, t[57] = Re) : Re = t[57];
        let ze;
        t[58] !== k || t[59] !== S ? (ze = k === `inline` && S != null ? (0, L.jsx)(`span`, {
            className: `ms-auto ps-1`,
            children: S
        }) : S, t[58] = k, t[59] = S, t[60] = ze) : ze = t[60];
        let Be;
        t[61] !== Ie || t[62] !== Le || t[63] !== Re || t[64] !== ze ? (Be = (0, L.jsxs)(L.Fragment, {
            children: [Ie, Le, Re, ze]
        }), t[61] = Ie, t[62] = Le, t[63] = Re, t[64] = ze, t[65] = Be) : Be = t[65];
        let Ve;
        t[66] !== F || t[67] !== B || t[68] !== V.decimalSeparator || t[69] !== V.groupSeparator || t[70] !== U || t[71] !== K || t[72] !== W || t[73] !== h || t[74] !== _ || t[75] !== y || t[76] !== b || t[77] !== G?.quantity || t[78] !== T || t[79] !== z ? (Ve = e => {
            pe(!1);
            let t = b == null && T ? G?.quantity ?? null : B ? xe({
                amountPerCredit: W,
                decimalSeparator: V.decimalSeparator,
                groupSeparator: V.groupSeparator,
                minorUnitExponent: h,
                value: U
            }) : null;
            (F == null || B && t != null) && z(null), y?.(F != null && F.length > 0 && (!B || t == null), K), _?.(e)
        }, t[66] = F, t[67] = B, t[68] = V.decimalSeparator, t[69] = V.groupSeparator, t[70] = U, t[71] = K, t[72] = W, t[73] = h, t[74] = _, t[75] = y, t[76] = b, t[77] = G?.quantity, t[78] = T, t[79] = z, t[80] = Ve) : Ve = t[80];
        let He;
        t[81] !== r || t[82] !== V.decimalSeparator || t[83] !== V.groupSeparator || t[84] !== V.numberFormatter || t[85] !== W || t[86] !== h || t[87] !== v || t[88] !== y || t[89] !== b || t[90] !== le || t[91] !== T || t[92] !== z ? (He = e => {
            let t = e.currentTarget.value,
                n = Ce({
                    decimalSeparator: V.decimalSeparator,
                    groupSeparator: V.groupSeparator,
                    minorUnitExponent: le ? h : void 0,
                    numberFormatter: V.numberFormatter,
                    value: t
                });
            if (le && !n) return;
            if (z(t), !n) {
                y?.(t.length > 0), b == null ? T ? v(``, null) : v(``) : b.onChange(null);
                return
            }
            if (b == null && T) {
                let e = _e({
                    amountPerCredit: r,
                    decimalSeparator: V.decimalSeparator,
                    groupSeparator: V.groupSeparator,
                    minorUnitExponent: h,
                    value: t
                });
                y?.(t.length > 0 && e == null), v(e == null ? `` : String(e.quantity), e?.amountMinorUnits ?? null);
                return
            }
            let i = xe({
                amountPerCredit: W,
                decimalSeparator: V.decimalSeparator,
                groupSeparator: V.groupSeparator,
                minorUnitExponent: h,
                value: t
            });
            y?.(t.length > 0 && i == null, i == null ? Se({
                amountPerCredit: W,
                decimalSeparator: V.decimalSeparator,
                groupSeparator: V.groupSeparator,
                minorUnitExponent: h,
                value: t
            }) : null), b == null ? v(i ?? ``) : b.onChange(i ? Number(i) : null)
        }, t[81] = r, t[82] = V.decimalSeparator, t[83] = V.groupSeparator, t[84] = V.numberFormatter, t[85] = W, t[86] = h, t[87] = v, t[88] = y, t[89] = b, t[90] = le, t[91] = T, t[92] = z, t[93] = He) : He = t[93];
        let Q;
        t[94] === re ? Q = t[95] : (Q = () => {
            pe(!0), re?.()
        }, t[94] = re, t[95] = Q);
        let Ue;
        t[96] === ie ? Ue = t[97] : (Ue = e => {
            e.key === `Enter` && (e.preventDefault(), ie?.())
        }, t[96] = ie, t[97] = Ue);
        let We;
        t[98] !== U || t[99] !== O || t[100] !== k ? (We = k === `inline` && O ? {
            width: `${Math.max(U.length,1)}ch`
        } : void 0, t[98] = U, t[99] = O, t[100] = k, t[101] = We) : We = t[101];
        let Ge;
        t[102] !== i || t[103] !== E || t[104] !== U || t[105] !== te || t[106] !== g || t[107] !== oe || t[108] !== Y || t[109] !== X || t[110] !== Oe || t[111] !== ke || t[112] !== Z || t[113] !== Me || t[114] !== Ne || t[115] !== Pe || t[116] !== Fe || t[117] !== Be || t[118] !== Ve || t[119] !== He || t[120] !== Q || t[121] !== Ue || t[122] !== We ? (Ge = (0, L.jsx)(ne, {
            "aria-describedby": Y,
            "aria-label": i,
            autoComplete: `off`,
            className: X,
            size: Oe,
            gutterSize: ke,
            inputClassName: Z,
            disabled: E,
            invalid: Me,
            "aria-invalid": Ne,
            inputMode: Pe,
            startAdornment: Fe,
            endAdornment: Be,
            id: g,
            name: g,
            ref: te,
            onBlur: Ve,
            onChange: He,
            onFocus: Q,
            onKeyDown: Ue,
            placeholder: oe,
            style: We,
            type: `text`,
            value: U
        }), t[102] = i, t[103] = E, t[104] = U, t[105] = te, t[106] = g, t[107] = oe, t[108] = Y, t[109] = X, t[110] = Oe, t[111] = ke, t[112] = Z, t[113] = Me, t[114] = Ne, t[115] = Pe, t[116] = Fe, t[117] = Be, t[118] = Ve, t[119] = He, t[120] = Q, t[121] = Ue, t[122] = We, t[123] = Ge) : Ge = t[123];
        let Ke;
        t[124] !== P || t[125] !== N || t[126] !== w ? (Ke = w == null ? null : (0, L.jsx)(ue, {
            descriptionId: N,
            focused: P,
            preview: w
        }), t[124] = P, t[125] = N, t[126] = w, t[127] = Ke) : Ke = t[127];
        let $;
        t[128] !== p || t[129] !== q ? ($ = p ? (0, L.jsx)(`p`, {
            id: q,
            role: `alert`,
            className: `text-token-interactive-label-danger-secondary-default text-xs`,
            children: p
        }) : null, t[128] = p, t[129] = q, t[130] = $) : $ = t[130];
        let qe;
        t[131] !== J || t[132] !== Ge || t[133] !== Ke || t[134] !== $ ? (qe = (0, L.jsxs)(`div`, {
            className: J,
            children: [Ge, Ke, $]
        }), t[131] = J, t[132] = Ge, t[133] = Ke, t[134] = $, t[135] = qe) : qe = t[135];
        let Je = qe,
            Ye;
        return t[136] !== E || t[137] !== Je || t[138] !== fe || t[139] !== g || t[140] !== k ? (Ye = fe ? (0, L.jsx)(`div`, {
            className: n(me.modal, k === `inline` && me.inline),
            onMouseDownCapture: e => {
                !E && e.button === 0 && e.target instanceof HTMLLabelElement && e.target.htmlFor === g && (e.preventDefault(), e.target.control?.focus())
            },
            children: Je
        }) : Je, t[136] = E, t[137] = Je, t[138] = fe, t[139] = g, t[140] = k, t[141] = Ye) : Ye = t[141], Ye
    }
}));
export {
    le as a, fe as c, w as d, T as f, k as i, E as l, ce as m, ve as n, de as o, C as p, z as r, A as s, R as t, O as u
};
//# sourceMappingURL=bb022270-lmvaj2z7c38d81vt.js.map