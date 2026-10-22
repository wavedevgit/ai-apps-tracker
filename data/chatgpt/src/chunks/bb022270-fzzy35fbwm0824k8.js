import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    l7 as n,
    u7 as r
} from "./4813494d-r54yv6lv29x4ew99.js";
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
    Mon as d,
    Qin as f,
    Xin as ee
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    _m as p,
    gm as te,
    vm as ne,
    xm as m
} from "./c2675c8c-jg3tpj8mw86wdc0g.js";
import {
    i as h,
    r as g,
    t as _
} from "./cf38d95c-cxqk92i5hg9e62xk.js";
import {
    n as re,
    t as ie
} from "./c96c6d5b-e3awy8v5cdzvmgv2.js";
var v, ae, y, oe = e((() => {
        v = `_2zJzbW_savingsBadge`, ae = `_2zJzbW_selectedBadge`, y = {
            savingsBadge: v,
            selectedBadge: ae
        }
    })),
    b, se, ce, x = e((() => {
        b = i(), c(), se = e => (0, b.jsx)(`svg`, {
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
            children: (0, b.jsx)(`circle`, {
                id: `dot`,
                cx: 1,
                cy: 1,
                r: 1,
                fill: `#BFBFBF`
            })
        }), ce = se
    })),
    S, le = e((() => {
        s(), S = a({
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

function C({
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
        u = d({
            amount: c / l,
            currency: r,
            intl: e
        }),
        f = s ?? (a > 0 ? ne(c, a) : c),
        p = f === c ? u : d({
            amount: f / l,
            currency: r,
            intl: e
        }),
        m = e.formatMessage(ee(), {
            credits: e.formatNumber(n)
        });
    if (a <= 0) return {
        priceLabel: p,
        originalPriceLabel: void 0,
        creditQuantityLabel: m,
        savingsLabel: void 0,
        accessibleLabel: e.formatMessage(S.amountOptionLabelWithoutDiscount, {
            price: p,
            creditQuantityLabel: m
        })
    };
    let h = e.formatNumber(a / 100, {
        maximumFractionDigits: 0,
        style: `percent`
    });
    return {
        priceLabel: p,
        originalPriceLabel: u,
        creditQuantityLabel: m,
        savingsLabel: e.formatMessage(S.amountSavingsBadge, {
            discountPercentage: h
        }),
        accessibleLabel: e.formatMessage(S.amountOptionLabelWithDiscountedPrice, {
            creditQuantity: n,
            discountedPrice: p,
            discountPercentage: h,
            originalPrice: u
        })
    }
}
var w = e((() => {
    g(), le(), f(), m()
}));

function T({
    amountPerCredit: e,
    creditQuantity: t,
    creditQuantityStep: n = 1,
    currency: r,
    maximumCreditQuantity: i,
    minorUnitExponent: a
}) {
    let s = u();
    return t == null || !Number.isFinite(t) ? (0, E.jsx)(o, {
        ...S.customAmountInvalidNumberError
    }) : t > i ? (0, E.jsx)(o, {
        ...S.customAmountMaximumError,
        values: {
            maximumAmount: _({
                amount: te({
                    amountPerCredit: e,
                    creditQuantity: Math.floor(i / n) * n,
                    minorUnitExponent: a
                }),
                currency: r,
                intl: s
            })
        }
    }) : Number.isInteger(t) && n > 1 ? (0, E.jsx)(o, {
        ...S.customAmountCreditIncrementError,
        values: {
            creditIncrement: n
        }
    }) : (0, E.jsx)(o, {
        ...S.customAmountCurrencyError
    })
}
var E, D = e((() => {
    s(), g(), le(), m(), E = i()
}));

function ue({
    children: e,
    className: t,
    footer: r,
    ...i
}) {
    return (0, A.jsxs)(`div`, {
        ...i,
        className: n(`flex flex-col gap-1 rounded-2xl border border-token-border-default p-2`, t),
        children: [(0, A.jsx)(`div`, {
            className: `flex flex-col gap-1 [[data-stripe-checkout-dialog]_&]:max-h-29 [[data-stripe-checkout-dialog]_&]:overflow-y-auto [[data-stripe-checkout-dialog]_&]:overscroll-contain [[data-stripe-checkout-dialog]_&]:[scrollbar-color:var(--color-border)_transparent] [[data-stripe-checkout-dialog]_&]:[scrollbar-width:thin]`,
            children: e
        }), r == null ? null : (0, A.jsxs)(A.Fragment, {
            children: [(0, A.jsx)(`div`, {
                className: `border-token-border-default my-1 border-t`
            }), r]
        })]
    })
}

function O({
    creditQuantityLabel: e,
    originalPriceLabel: t,
    priceLabel: n,
    savingsLabel: r,
    selected: i
}) {
    return (0, A.jsxs)(`div`, {
        "aria-hidden": `true`,
        className: `flex min-w-0 flex-1 items-center gap-1 text-sm leading-5`,
        children: [(0, A.jsx)(`span`, {
            className: `text-token-text-primary shrink-0 font-semibold`,
            children: n
        }), t == null ? null : (0, A.jsx)(`s`, {
            className: `text-token-text-secondary shrink-0`,
            children: t
        }), (0, A.jsx)(ce, {
            className: `shrink-0`
        }), (0, A.jsx)(`span`, {
            className: `text-token-text-secondary min-w-0 truncate`,
            children: e
        }), r == null ? null : (0, A.jsx)(k, {
            label: r,
            selected: i
        })]
    })
}

function de({
    descriptionId: e,
    focused: t,
    preview: n
}) {
    return (0, A.jsxs)(A.Fragment, {
        children: [t ? null : (0, A.jsx)(`div`, {
            "aria-hidden": `true`,
            className: `pointer-events-none absolute inset-0 flex items-center rounded-[10px] border border-token-border-heavy px-2.5 py-1.5 group-focus-within/credit-amount:hidden`,
            children: n.content
        }), (0, A.jsx)(`span`, {
            id: e,
            className: `sr-only`,
            children: n.description
        })]
    })
}

function k({
    label: e,
    selected: t
}) {
    return (0, A.jsx)(`div`, {
        className: `puik-root ms-auto shrink-0 ps-1`,
        children: (0, A.jsx)(`span`, {
            className: n(y.savingsBadge, t && y.selectedBadge),
            children: e
        })
    })
}

function fe({
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
    savingsLabel: f,
    value: ee
}) {
    return (0, A.jsxs)(`div`, {
        className: n(`relative flex min-h-9 items-center rounded-[10px] px-2.5 py-1.5 text-start transition-colors`, t ? `bg-token-interactive-bg-secondary-selected` : !i && `hover:bg-token-interactive-bg-secondary-hover`, i && `opacity-50`),
        children: [(0, A.jsx)(`input`, {
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
            value: ee
        }), (0, A.jsx)(`span`, {
            "aria-hidden": `true`,
            className: `pointer-events-none absolute inset-0 rounded-[10px] peer-focus-visible:ring-2 peer-focus-visible:ring-black/70 peer-focus-visible:ring-offset-2 dark:peer-focus-visible:ring-white/70 [[data-stripe-checkout-dialog]_&]:ring-inset [[data-stripe-checkout-dialog]_&]:peer-focus-visible:ring-offset-0`
        }), (0, A.jsx)(O, {
            creditQuantityLabel: r,
            originalPriceLabel: u,
            priceLabel: d,
            savingsLabel: f,
            selected: t
        })]
    })
}
var A, pe = e((() => {
        r(), oe(), x(), A = i(), w(), D()
    })),
    j, M, N, me, he, ge = e((() => {
        j = `nZdtgW_field`, M = `nZdtgW_inline`, N = `nZdtgW_inlineField`, me = `nZdtgW_modal`, he = {
            field: j,
            inline: M,
            inlineField: N,
            modal: me
        }
    }));

function _e({
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

function ve({
    amountPerCredit: e,
    decimalSeparator: t,
    groupSeparator: n,
    minorUnitExponent: r,
    value: i
}) {
    let a = we(i).trim().replaceAll(`٬`, n).replaceAll(`٫`, t).replaceAll(n, ``).replaceAll(t, `.`),
        o = /^(\d+)(?:\.(\d*))?$/.exec(a);
    if (o == null || !Number.isSafeInteger(r) || r < 0 || r > 3 || (o[2]?.length ?? 0) > r || !Number.isFinite(e) || e <= 0) return null;
    let s = BigInt(o[1] + (o[2] ?? ``).padEnd(r, `0`));
    if (s > BigInt(2 ** 53 - 1)) return null;
    let c = p({
        amountPerCredit: e,
        amountMinorUnits: s,
        minorUnitExponent: r
    });
    return c == null ? null : {
        amountMinorUnits: s.toString(),
        quantity: c
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
    let a = we(i).trim().replaceAll(`٬`, n).replaceAll(`٫`, t).replaceAll(n, ``).replaceAll(t, `.`).replace(/[^\d.]/g, ``);
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
    let [a = ``, o, ...s] = we(i).trim().replaceAll(`٬`, t).replaceAll(`٫`, e).split(e);
    if (s.length > 0 || o != null && !/^\d*$/.test(o) || n != null && !h(o?.length, n)) return !1;
    let c = a.split(t);
    return c.length === 1 ? /^\d*$/.test(a) : /^\d{1,3}$/.test(c[0] ?? ``) && c.slice(1).every(e => /^\d{3}$/.test(e)) || /^\d+$/.test(c.join(``)) && r.format(BigInt(c.join(``))) === a
}

function we(e) {
    return Array.from(e, e => {
        let t = e.codePointAt(0);
        return t == null ? e : t >= 1632 && t <= 1641 ? String(t - 1632) : t >= 1776 && t <= 1785 ? String(t - 1776) : e
    }).join(``)
}
var Te, P, F, I, Ee = e((() => {
    Te = l(), ie(), r(), P = t(c(), 1), s(), g(), pe(), m(), ge(), F = i(), I = e => {
        "use forget";
        let t = (0, Te.c)(142),
            {
                amountPerCredit: r,
                ariaLabel: i,
                className: a,
                creditQuantity: s,
                purchaseAmountMinorUnits: c,
                roundPurchaseCredits: l,
                currency: d,
                disabled: f,
                draftResetVersion: ee,
                error: p,
                inputRef: te,
                inlineCreditQuantity: ne,
                minorUnitExponent: m,
                name: h,
                onBlur: g,
                onCreditQuantityChange: _,
                onFocus: ie,
                onInvalidCurrencyDraftChange: v,
                onPressEnter: ae,
                payableAmount: y,
                preventInvalidPrecision: oe,
                originalPrice: b,
                placeholder: se,
                presentation: ce,
                savingsBadge: x,
                showCreditQuantityEstimate: S,
                showCurrencySymbolWhenEmpty: le,
                unfocusedPreview: C
            } = e,
            w = l !== void 0 && l,
            T = f !== void 0 && f,
            E = ee === void 0 ? 0 : ee,
            D = ne !== void 0 && ne,
            ue = oe !== void 0 && oe,
            O = ce === void 0 ? `page` : ce,
            k = S === void 0 || S,
            fe = le !== void 0 && le,
            A = u(),
            pe = O !== `page`,
            j = (0, P.useId)(),
            M = (0, P.useId)(),
            [N, me] = (0, P.useState)(!1),
            ge;
        t[0] === E ? ge = t[1] : (ge = {
            value: null,
            version: E
        }, t[0] = E, t[1] = ge);
        let [be, we] = (0, P.useState)(ge), I = be.version === E ? be.value : null, Ee;
        t[2] === E ? Ee = t[3] : (Ee = e => {
            we({
                value: e,
                version: E
            })
        }, t[2] = E, t[3] = Ee);
        let L = Ee,
            R, z, B, V, H, U, De;
        if (t[4] !== r || t[5] !== s || t[6] !== d || t[7] !== I || t[8] !== A || t[9] !== N || t[10] !== m || t[11] !== y || t[12] !== O || t[13] !== c || t[14] !== w || t[15] !== fe) {
            z = ye({
                currency: d,
                intl: A,
                minorUnitExponent: m
            }), H = y == null ? r : 1 / 10 ** m;
            let e = y == null ? s : y.minorUnits == null ? `` : String(y.minorUnits),
                n = _e({
                    amountPerCredit: H,
                    purchaseAmountMinorUnits: y == null && w ? c : null,
                    creditQuantity: Number.parseInt(e, 10),
                    trailingZeroDisplay: O === `inline` ? `stripIfInteger` : void 0,
                    currency: d,
                    intl: A,
                    minorUnitExponent: m
                });
            V = I ?? (N ? n?.replaceAll(z.groupSeparator, ``) : n) ?? e, B = V.length > 0 || fe ? z.currencySymbol : null, R = I == null || Ce({
                decimalSeparator: z.decimalSeparator,
                groupSeparator: z.groupSeparator,
                numberFormatter: z.numberFormatter,
                value: I
            }), U = y == null && w && R ? ve({
                amountPerCredit: r,
                decimalSeparator: z.decimalSeparator,
                groupSeparator: z.groupSeparator,
                minorUnitExponent: m,
                value: V
            }) : null, De = y == null ? w ? U?.quantity ?? null : R ? Se({
                amountPerCredit: r,
                decimalSeparator: z.decimalSeparator,
                groupSeparator: z.groupSeparator,
                minorUnitExponent: m,
                value: V
            }) : null : s === `` ? null : Number(s), t[4] = r, t[5] = s, t[6] = d, t[7] = I, t[8] = A, t[9] = N, t[10] = m, t[11] = y, t[12] = O, t[13] = c, t[14] = w, t[15] = fe, t[16] = R, t[17] = z, t[18] = B, t[19] = V, t[20] = H, t[21] = U, t[22] = De
        } else R = t[16], z = t[17], B = t[18], V = t[19], H = t[20], U = t[21], De = t[22];
        let W = De,
            G = (0, P.useId)(),
            Oe = C != null && `group/credit-amount relative`,
            ke;
        t[23] === Oe ? ke = t[24] : (ke = n(`puik-root flex w-full flex-col gap-1`, Oe), t[23] = Oe, t[24] = ke);
        let K;
        t[25] !== j || t[26] !== p || t[27] !== G || t[28] !== W || t[29] !== M || t[30] !== k || t[31] !== C ? (K = [C == null ? k && W != null ? j : null : M, p ? G : null].filter(Boolean).join(` `) || void 0, t[25] = j, t[26] = p, t[27] = G, t[28] = W, t[29] = M, t[30] = k, t[31] = C, t[32] = K) : K = t[32];
        let Ae = C != null && !N && `opacity-0 focus-within:opacity-100`,
            q;
        t[33] !== a || t[34] !== O || t[35] !== Ae ? (q = n(a, Ae, O === `inline` && [he.inlineField, `gap-0! rounded-xl`]), t[33] = a, t[34] = O, t[35] = Ae, t[36] = q) : q = t[36];
        let je = O === `inline` ? `lg` : `xl`,
            Me = O === `inline` ? `xs` : void 0,
            Ne = O === `inline` && `text-body-small! min-w-0 tabular-nums`,
            Pe = O === `inline` && D && `flex-initial! px-0! font-medium`,
            J;
        t[37] !== Ne || t[38] !== Pe ? (J = n(Ne, Pe), t[37] = Ne, t[38] = Pe, t[39] = J) : J = t[39];
        let Fe = !!p,
            Ie = !!p,
            Le = ue && m === 0 ? `numeric` : `decimal`,
            Y;
        t[40] !== z.currencyPrefix || t[41] !== B || t[42] !== D || t[43] !== O ? (Y = O === `inline` && D ? (0, F.jsx)(F.Fragment, {
            children: B != null && (0, F.jsx)(`span`, {
                "aria-hidden": `true`,
                className: n(`text-body-small-medium whitespace-pre`),
                children: z.currencyPrefix
            })
        }) : B, t[40] = z.currencyPrefix, t[41] = B, t[42] = D, t[43] = O, t[44] = Y) : Y = t[44];
        let X;
        t[45] !== z.currencySuffix || t[46] !== B || t[47] !== D || t[48] !== O ? (X = O === `inline` && D && B != null && (0, F.jsx)(`span`, {
            "aria-hidden": `true`,
            className: n(`text-body-small-medium whitespace-pre`),
            children: z.currencySuffix
        }), t[45] = z.currencySuffix, t[46] = B, t[47] = D, t[48] = O, t[49] = X) : X = t[49];
        let Z;
        t[50] !== b || t[51] !== O ? (Z = O === `inline` && b != null ? (0, F.jsx)(`span`, {
            className: `text-body-small ms-1 text-token-text-tertiary line-through`,
            children: b
        }) : null, t[50] = b, t[51] = O, t[52] = Z) : Z = t[52];
        let Re;
        t[53] !== j || t[54] !== W || t[55] !== O || t[56] !== k ? (Re = k && W != null ? (0, F.jsx)(`span`, {
            id: j,
            "aria-live": `polite`,
            "aria-atomic": `true`,
            className: n(`text-token-text-secondary`, O === `inline` ? `text-body-small ms-1 min-w-0 truncate` : `shrink-0 text-sm whitespace-nowrap`),
            children: O === `inline` ? (0, F.jsx)(o, {
                id: `chatgpt.inline_credit_checkout.amount.custom.credit_quantity`,
                defaultMessage: `· {creditQuantity, number} credits`,
                values: {
                    creditQuantity: W
                }
            }) : (0, F.jsx)(o, {
                id: `chatgpt.checkout.credit_discount.currency_input.credit_quantity`,
                defaultMessage: `{creditQuantity, number} credits`,
                values: {
                    creditQuantity: W
                }
            })
        }) : null, t[53] = j, t[54] = W, t[55] = O, t[56] = k, t[57] = Re) : Re = t[57];
        let ze;
        t[58] !== O || t[59] !== x ? (ze = O === `inline` && x != null ? (0, F.jsx)(`span`, {
            className: `ms-auto ps-1`,
            children: x
        }) : x, t[58] = O, t[59] = x, t[60] = ze) : ze = t[60];
        let Be;
        t[61] !== X || t[62] !== Z || t[63] !== Re || t[64] !== ze ? (Be = (0, F.jsxs)(F.Fragment, {
            children: [X, Z, Re, ze]
        }), t[61] = X, t[62] = Z, t[63] = Re, t[64] = ze, t[65] = Be) : Be = t[65];
        let Ve;
        t[66] !== I || t[67] !== R || t[68] !== z.decimalSeparator || t[69] !== z.groupSeparator || t[70] !== V || t[71] !== W || t[72] !== H || t[73] !== m || t[74] !== g || t[75] !== v || t[76] !== y || t[77] !== U?.quantity || t[78] !== w || t[79] !== L ? (Ve = e => {
            me(!1);
            let t = y == null && w ? U?.quantity ?? null : R ? xe({
                amountPerCredit: H,
                decimalSeparator: z.decimalSeparator,
                groupSeparator: z.groupSeparator,
                minorUnitExponent: m,
                value: V
            }) : null;
            (I == null || R && t != null) && L(null), v?.(I != null && I.length > 0 && (!R || t == null), W), g?.(e)
        }, t[66] = I, t[67] = R, t[68] = z.decimalSeparator, t[69] = z.groupSeparator, t[70] = V, t[71] = W, t[72] = H, t[73] = m, t[74] = g, t[75] = v, t[76] = y, t[77] = U?.quantity, t[78] = w, t[79] = L, t[80] = Ve) : Ve = t[80];
        let He;
        t[81] !== r || t[82] !== z.decimalSeparator || t[83] !== z.groupSeparator || t[84] !== z.numberFormatter || t[85] !== H || t[86] !== m || t[87] !== _ || t[88] !== v || t[89] !== y || t[90] !== ue || t[91] !== w || t[92] !== L ? (He = e => {
            let t = e.currentTarget.value,
                n = Ce({
                    decimalSeparator: z.decimalSeparator,
                    groupSeparator: z.groupSeparator,
                    minorUnitExponent: ue ? m : void 0,
                    numberFormatter: z.numberFormatter,
                    value: t
                });
            if (ue && !n) return;
            if (L(t), !n) {
                v?.(t.length > 0), y == null ? w ? _(``, null) : _(``) : y.onChange(null);
                return
            }
            if (y == null && w) {
                let e = ve({
                    amountPerCredit: r,
                    decimalSeparator: z.decimalSeparator,
                    groupSeparator: z.groupSeparator,
                    minorUnitExponent: m,
                    value: t
                });
                v?.(t.length > 0 && e == null), _(e == null ? `` : String(e.quantity), e?.amountMinorUnits ?? null);
                return
            }
            let i = xe({
                amountPerCredit: H,
                decimalSeparator: z.decimalSeparator,
                groupSeparator: z.groupSeparator,
                minorUnitExponent: m,
                value: t
            });
            v?.(t.length > 0 && i == null, i == null ? Se({
                amountPerCredit: H,
                decimalSeparator: z.decimalSeparator,
                groupSeparator: z.groupSeparator,
                minorUnitExponent: m,
                value: t
            }) : null), y == null ? _(i ?? ``) : y.onChange(i ? Number(i) : null)
        }, t[81] = r, t[82] = z.decimalSeparator, t[83] = z.groupSeparator, t[84] = z.numberFormatter, t[85] = H, t[86] = m, t[87] = _, t[88] = v, t[89] = y, t[90] = ue, t[91] = w, t[92] = L, t[93] = He) : He = t[93];
        let Q;
        t[94] === ie ? Q = t[95] : (Q = () => {
            me(!0), ie?.()
        }, t[94] = ie, t[95] = Q);
        let Ue;
        t[96] === ae ? Ue = t[97] : (Ue = e => {
            e.key === `Enter` && (e.preventDefault(), ae?.())
        }, t[96] = ae, t[97] = Ue);
        let We;
        t[98] !== V || t[99] !== D || t[100] !== O ? (We = O === `inline` && D ? {
            width: `${Math.max(V.length,1)}ch`
        } : void 0, t[98] = V, t[99] = D, t[100] = O, t[101] = We) : We = t[101];
        let Ge;
        t[102] !== i || t[103] !== T || t[104] !== V || t[105] !== te || t[106] !== h || t[107] !== se || t[108] !== K || t[109] !== q || t[110] !== je || t[111] !== Me || t[112] !== J || t[113] !== Fe || t[114] !== Ie || t[115] !== Le || t[116] !== Y || t[117] !== Be || t[118] !== Ve || t[119] !== He || t[120] !== Q || t[121] !== Ue || t[122] !== We ? (Ge = (0, F.jsx)(re, {
            "aria-describedby": K,
            "aria-label": i,
            autoComplete: `off`,
            className: q,
            size: je,
            gutterSize: Me,
            inputClassName: J,
            disabled: T,
            invalid: Fe,
            "aria-invalid": Ie,
            inputMode: Le,
            startAdornment: Y,
            endAdornment: Be,
            id: h,
            name: h,
            ref: te,
            onBlur: Ve,
            onChange: He,
            onFocus: Q,
            onKeyDown: Ue,
            placeholder: se,
            style: We,
            type: `text`,
            value: V
        }), t[102] = i, t[103] = T, t[104] = V, t[105] = te, t[106] = h, t[107] = se, t[108] = K, t[109] = q, t[110] = je, t[111] = Me, t[112] = J, t[113] = Fe, t[114] = Ie, t[115] = Le, t[116] = Y, t[117] = Be, t[118] = Ve, t[119] = He, t[120] = Q, t[121] = Ue, t[122] = We, t[123] = Ge) : Ge = t[123];
        let Ke;
        t[124] !== N || t[125] !== M || t[126] !== C ? (Ke = C == null ? null : (0, F.jsx)(de, {
            descriptionId: M,
            focused: N,
            preview: C
        }), t[124] = N, t[125] = M, t[126] = C, t[127] = Ke) : Ke = t[127];
        let $;
        t[128] !== p || t[129] !== G ? ($ = p ? (0, F.jsx)(`p`, {
            id: G,
            role: `alert`,
            className: `text-token-interactive-label-danger-secondary-default text-xs`,
            children: p
        }) : null, t[128] = p, t[129] = G, t[130] = $) : $ = t[130];
        let qe;
        t[131] !== ke || t[132] !== Ge || t[133] !== Ke || t[134] !== $ ? (qe = (0, F.jsxs)(`div`, {
            className: ke,
            children: [Ge, Ke, $]
        }), t[131] = ke, t[132] = Ge, t[133] = Ke, t[134] = $, t[135] = qe) : qe = t[135];
        let Je = qe,
            Ye;
        return t[136] !== T || t[137] !== Je || t[138] !== pe || t[139] !== h || t[140] !== O ? (Ye = pe ? (0, F.jsx)(`div`, {
            className: n(he.modal, O === `inline` && he.inline),
            onMouseDownCapture: e => {
                !T && e.button === 0 && e.target instanceof HTMLLabelElement && e.target.htmlFor === h && (e.preventDefault(), e.target.control?.focus())
            },
            children: Je
        }) : Je, t[136] = T, t[137] = Je, t[138] = pe, t[139] = h, t[140] = O, t[141] = Ye) : Ye = t[141], Ye
    }
}));
export {
    fe as a, T as c, w as d, S as f, ue as i, D as l, Ee as n, k as o, le as p, O as r, pe as s, I as t, C as u
};
//# sourceMappingURL=bb022270-fzzy35fbwm0824k8.js.map