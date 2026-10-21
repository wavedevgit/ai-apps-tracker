import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    JT as n,
    Sw as ee,
    qT as r,
    ww as i
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as a,
    Ln as te,
    Nn as o,
    Rn as s,
    Vn as c,
    wn as l,
    zn as ne
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    fH as u,
    isn as d,
    lH as re,
    nsn as ie,
    rsn as ae,
    tsn as oe
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    n as f,
    t as p
} from "./bcae0416-h0upfmp84fw5vxxa.js";
import {
    n as m,
    t as se
} from "./4a5c97e1-ec446b97u9ph90pp.js";

function h({
    intl: e,
    limit: t,
    minimumLimit: n
}) {
    return {
        errorMessage: t != null && t < n ? e.formatMessage(x.minimumLimitError, {
            minimumLimit: n
        }) : void 0,
        isValid: t == null || t >= n
    }
}

function g(e) {
    "use forget";
    let t = (0, ce.c)(72),
        {
            currentLimit: n,
            getValidationResult: i,
            onClose: a,
            placeholder: te,
            renderLimitContext: s
        } = e,
        c = ne(),
        l = e.allowUnlimited === !0,
        u = e.previousStep == null,
        [d, f] = (0, _.useState)(typeof n == `number` ? n : null),
        [m, h] = (0, _.useState)(l && n === `unlimited_platform_max`),
        [g, S] = (0, _.useState)(!1),
        C;
    t[0] !== l || t[1] !== n ? (C = () => {
        f(typeof n == `number` ? n : null), h(l && n === `unlimited_platform_max`)
    }, t[0] = l, t[1] = n, t[2] = C) : C = t[2];
    let w;
    t[3] !== l || t[4] !== n || t[5] !== u ? (w = [l, n, u], t[3] = l, t[4] = n, t[5] = u, t[6] = w) : w = t[6], (0, _.useEffect)(C, w);
    let T = m ? re : d,
        le = !(!l && n === `unlimited_platform_max` && d == null) && T !== n,
        E;
    t[7] !== i || t[8] !== m || t[9] !== d ? (E = m ? void 0 : i?.(d), t[7] = i, t[8] = m, t[9] = d, t[10] = E) : E = t[10];
    let D = E,
        O = te ?? D?.placeholder ?? `0`,
        k;
    t[11] !== m || t[12] !== d ? (k = m || d == null || Number.isInteger(d) && d >= 0, t[11] = m, t[12] = d, t[13] = k) : k = t[13];
    let A = k,
        j = D?.isValid ?? !0,
        M = A && j,
        N;
    t[14] !== D?.errorMessage || t[15] !== A || t[16] !== c || t[17] !== j ? (N = A ? j ? void 0 : D?.errorMessage : c.formatMessage(x.amountValidationError), t[14] = D?.errorMessage, t[15] = A, t[16] = c, t[17] = j, t[18] = N) : N = t[18];
    let P = N,
        F = le && M && !g && (!e.requireLimit || T != null),
        I = (T != null || !l && n === `unlimited_platform_max`) && !g,
        L;
    t[19] === e ? L = t[20] : (L = async t => {
        if (e.allowUnlimited) {
            await e.onSave(t);
            return
        }
        await e.onSave(typeof t == `number` ? t : null)
    }, t[19] = e, t[20] = L);
    let R = L,
        z;
    t[21] !== F || t[22] !== T || t[23] !== R ? (z = async () => {
        F && (S(!0), await R(T).finally(() => S(!1)))
    }, t[21] = F, t[22] = T, t[23] = R, t[24] = z) : z = t[24];
    let B = z,
        V;
    t[25] !== I || t[26] !== n || t[27] !== R ? (V = async () => {
        if (I) {
            if (n == null) {
                f(null), h(!1);
                return
            }
            S(!0), await R(null).finally(() => S(!1))
        }
    }, t[25] = I, t[26] = n, t[27] = R, t[28] = V) : V = t[28];
    let H = V,
        U;
    t[29] === e.title ? U = t[30] : (U = e.title ?? (0, v.jsx)(o, {
        ...x.title
    }), t[29] = e.title, t[30] = U);
    let W = !F,
        G;
    t[31] !== T || t[32] !== e.renderSaveLabel ? (G = e.renderSaveLabel?.(T) ?? (0, v.jsx)(o, {
        ...x.saveButton
    }), t[31] = T, t[32] = e.renderSaveLabel, t[33] = G) : G = t[33];
    let K;
    t[34] !== B || t[35] !== g || t[36] !== G || t[37] !== W ? (K = (0, v.jsx)(r, {
        loading: g,
        disabled: W,
        onClick: B,
        children: G
    }), t[34] = B, t[35] = g, t[36] = G, t[37] = W, t[38] = K) : K = t[38];
    let q;
    t[39] !== I || t[40] !== H || t[41] !== g || t[42] !== e.onBack ? (q = e.onBack ? (0, v.jsx)(r, {
        color: `secondary`,
        disabled: g,
        onClick: e.onBack,
        children: (0, v.jsx)(o, {
            ...x.backButton
        })
    }) : (0, v.jsx)(r, {
        color: `danger-outline`,
        disabled: !I,
        onClick: H,
        children: (0, v.jsx)(o, {
            ...x.removeButton
        })
    }), t[39] = I, t[40] = H, t[41] = g, t[42] = e.onBack, t[43] = q) : q = t[43];
    let J;
    t[44] !== l || t[45] !== B || t[46] !== O || t[47] !== c || t[48] !== g || t[49] !== m || t[50] !== d ? (J = l ? (0, v.jsxs)(oe, {
        "aria-label": c.formatMessage(x.limitModeLabel),
        className: `mt-4 flex flex-col gap-3`,
        disabled: g,
        value: m ? `unlimited` : `amount`,
        onValueChange: e => h(e === `unlimited`),
        children: [(0, v.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [(0, v.jsx)(ae, {
                id: `seat-type-usage-limit-amount`,
                value: `amount`,
                "aria-label": c.formatMessage(x.amountOptionLabel),
                className: y,
                children: (0, v.jsx)(ie, {
                    className: b
                })
            }), (0, v.jsxs)(`fieldset`, {
                disabled: m,
                className: m ? `min-w-0 flex-1 opacity-50` : `min-w-0 flex-1`,
                children: [(0, v.jsx)(p, {
                    htmlFor: `seat-type-usage-limit-field`,
                    className: `sr-only`,
                    children: (0, v.jsx)(o, {
                        ...x.amountLabel
                    })
                }), (0, v.jsx)(se, {
                    value: d,
                    name: `seat-type-usage-limit-field`,
                    onChange: f,
                    onPressEnter: B,
                    placeholder: O,
                    unitLabel: (0, v.jsx)(o, {
                        ...x.unitLabel
                    })
                })]
            })]
        }), (0, v.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [(0, v.jsx)(ae, {
                id: `seat-type-usage-limit-unlimited`,
                value: `unlimited`,
                className: y,
                children: (0, v.jsx)(ie, {
                    className: b
                })
            }), (0, v.jsx)(p, {
                htmlFor: `seat-type-usage-limit-unlimited`,
                className: `cursor-pointer`,
                children: (0, v.jsx)(o, {
                    ...x.unlimitedLabel
                })
            })]
        })]
    }) : (0, v.jsxs)(`fieldset`, {
        children: [(0, v.jsx)(p, {
            htmlFor: `seat-type-usage-limit-field`,
            className: `mt-4 mb-2 block font-medium`,
            children: (0, v.jsx)(o, {
                ...x.amountLabel
            })
        }), (0, v.jsx)(se, {
            value: d,
            name: `seat-type-usage-limit-field`,
            onChange: f,
            onPressEnter: B,
            placeholder: O,
            unitLabel: (0, v.jsx)(o, {
                ...x.unitLabel
            })
        })]
    }), t[44] = l, t[45] = B, t[46] = O, t[47] = c, t[48] = g, t[49] = m, t[50] = d, t[51] = J) : J = t[51];
    let Y;
    t[52] === P ? Y = t[53] : (Y = P ? (0, v.jsx)(`div`, {
        className: `text-interactive-label-warning-secondary mt-2 text-sm`,
        children: P
    }) : null, t[52] = P, t[53] = Y);
    let X;
    t[54] !== m || t[55] !== M || t[56] !== d || t[57] !== s ? (X = !m && M ? s?.(d) : null, t[54] = m, t[55] = M, t[56] = d, t[57] = s, t[58] = X) : X = t[58];
    let Z;
    t[59] !== J || t[60] !== Y || t[61] !== X ? (Z = (0, v.jsxs)(`div`, {
        className: `px-6 pb-6`,
        children: [J, Y, X]
    }), t[59] = J, t[60] = Y, t[61] = X, t[62] = Z) : Z = t[62];
    let Q;
    t[63] !== a || t[64] !== e.contentRef || t[65] !== K || t[66] !== q || t[67] !== Z || t[68] !== U ? (Q = {
        testId: `modal-seat-type-usage-limit`,
        isOpen: !0,
        onClose: a,
        type: `success`,
        title: U,
        hideSeparator: !0,
        noPadding: !0,
        showCloseButton: !0,
        size: `large`,
        contentRef: e.contentRef,
        footerClassName: `p-6 pt-0`,
        primaryButton: K,
        secondaryButton: q,
        children: Z
    }, t[63] = a, t[64] = e.contentRef, t[65] = K, t[66] = q, t[67] = Z, t[68] = U, t[69] = Q) : Q = t[69];
    let ue = Q,
        de = e.previousStep ?? ue,
        $;
    return t[70] === de ? $ = t[71] : ($ = (0, v.jsx)(ee, {
        ...de
    }), t[70] = de, t[71] = $), $
}
var ce, _, v, y, b, x, S = e((() => {
    ce = l(), u(), n(), i(), f(), d(), _ = t(c()), s(), m(), v = a(), y = `border-token-text-tertiary hover:bg-token-main-surface-tertiary h-4 w-4 shrink-0 rounded-full border bg-transparent shadow-sm outline-hidden`, b = `after:bg-token-text-primary relative flex h-full w-full items-center justify-center after:block after:h-2 after:w-2 after:rounded-[50%] after:content-['']`, x = te({
        title: {
            id: `organizationBillingInfo.monthlyUsageLimits.modal.title`,
            defaultMessage: `Set custom usage limit`
        },
        amountLabel: {
            id: `organizationBillingInfo.monthlyUsageLimits.modal.amountLabel`,
            defaultMessage: `Amount:`
        },
        amountOptionLabel: {
            id: `organizationBillingInfo.monthlyUsageLimits.modal.amount.option.label`,
            defaultMessage: `Credit amount`
        },
        limitModeLabel: {
            id: `organizationBillingInfo.monthlyUsageLimits.modal.limitMode.label`,
            defaultMessage: `Usage limit type`
        },
        unlimitedLabel: {
            id: `organizationBillingInfo.monthlyUsageLimits.modal.unlimited.label`,
            defaultMessage: `Unlimited usage`
        },
        amountValidationError: {
            id: `organizationBillingInfo.monthlyUsageLimits.modal.amountValidationError`,
            defaultMessage: `Enter a whole number of 0 or more credits.`
        },
        minimumLimitError: {
            id: `organizationBillingInfo.monthlyUsageLimits.modal.minimumLimitError`,
            defaultMessage: `Enter at least {minimumLimit} {minimumLimit, plural, one {credit} other {credits}}.`
        },
        unitLabel: {
            id: `organizationBillingInfo.monthlyUsageLimits.modal.unitLabel`,
            defaultMessage: `credits / month`
        },
        saveButton: {
            id: `organizationBillingInfo.monthlyUsageLimits.modal.saveButton`,
            defaultMessage: `Save`
        },
        backButton: {
            id: `organizationBillingInfo.monthlyUsageLimits.modal.backButton`,
            defaultMessage: `Back`
        },
        removeButton: {
            id: `organizationBillingInfo.monthlyUsageLimits.modal.removeButton`,
            defaultMessage: `Remove`
        }
    })
}));
export {
    h as n, S as r, g as t
};
//# sourceMappingURL=ef852af5-ntv272msshygmo4v.js.map