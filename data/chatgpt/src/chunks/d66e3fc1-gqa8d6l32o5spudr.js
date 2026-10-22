import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Kst as t,
    X5 as n,
    Y5 as r,
    oct as i
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as a,
    Ln as o,
    Nn as s,
    Rn as c,
    Tn as l,
    wn as u,
    zn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Gs as f,
    Js as p,
    Ks as m,
    Ws as h,
    Zs as g,
    ct as _,
    dt as v,
    lt as y,
    qs as b,
    ut as x
} from "./c2675c8c-h5ybkhdzcoblzzdu.js";
var S, C, w, T, E = e((() => {
    S = u(), n(), c(), p(), C = a(), w = e => {
        "use forget";
        let t = (0, S.c)(47),
            {
                className: n,
                model: i
            } = e,
            a = d(),
            o = `promotionDurationDays` in i && i.promotionDurationDays === 30,
            c = i.kind === `active-percentage-discount` ? `rounded-lg bg-[#F2FBF4] px-4 py-3 text-sm text-[#24622B]` : i.kind === `seats-promo-redemption` ? `rounded-lg bg-[#E0FFE7] px-4 py-3 text-sm text-[#24622B]` : `rounded-lg border border-[#C5CEFF] bg-[#ECF0FF] px-4 py-3 text-sm text-[#262B72]`,
            u;
        t[0] !== c || t[1] !== n ? (u = r(c, n), t[0] = c, t[1] = n, t[2] = u) : u = t[2];
        let f;
        t[3] !== i.kind || t[4] !== i.months || t[5] !== i.percent || t[6] !== i.years ? (f = i.kind === `active-percentage-discount` && (0, C.jsx)(s, {
            ...i.years == null ? i.months == null ? T.percentDiscountUnspecified : T.percentDiscountInfo : T.percentDiscountInfoYears,
            values: {
                months: i.months,
                percent: i.percent,
                years: i.years
            }
        }), t[3] = i.kind, t[4] = i.months, t[5] = i.percent, t[6] = i.years, t[7] = f) : f = t[7];
        let p;
        t[8] !== a || t[9] !== i.kind || t[10] !== i.months || t[11] !== i.seats || t[12] !== i.years ? (p = i.kind === `fixed-discount-seats` && (0, C.jsx)(s, {
            ...i.years == null ? i.months === 1 ? T.fixedDiscountSeatsOneMonth : i.months == null ? T.fixedDiscountSeatsUnspecified : T.fixedDiscountSeatsManyMonths : T.fixedDiscountSeatsYears,
            values: {
                months: i.months,
                seatCount: a.formatMessage(T.fixedDiscountSeatCount, {
                    seats: i.seats
                }),
                seats: i.seats,
                years: i.years
            }
        }), t[8] = a, t[9] = i.kind, t[10] = i.months, t[11] = i.seats, t[12] = i.years, t[13] = p) : p = t[13];
        let m;
        t[14] !== a || t[15] !== i.amount || t[16] !== i.currency || t[17] !== i.kind || t[18] !== i.months || t[19] !== i.years ? (m = i.kind === `fixed-discount-amount` && (0, C.jsx)(s, {
            ...i.years == null ? i.months === 1 ? T.fixedDiscountAmountOneMonth : i.months == null ? T.fixedDiscountAmountUnspecified : T.fixedDiscountAmountManyMonths : T.fixedDiscountAmountYears,
            values: {
                amount: a.formatNumber(i.amount, {
                    currency: i.currency,
                    style: `currency`
                }),
                months: i.months,
                years: i.years
            }
        }), t[14] = a, t[15] = i.amount, t[16] = i.currency, t[17] = i.kind, t[18] = i.months, t[19] = i.years, t[20] = m) : m = t[20];
        let h;
        t[21] !== i.discountPercent || t[22] !== i.kind || t[23] !== i.promotionDurationDays || t[24] !== i.standardSeatCount || t[25] !== o ? (h = i.kind === `seats-promo-qualified` && (0, C.jsx)(s, {
            ...T.seatsPromoQualified,
            values: {
                discountPercent: i.discountPercent,
                promotionDuration: i.promotionDurationDays,
                promotionDurationIsMonth: o ? `true` : `false`,
                seatCount: i.standardSeatCount
            }
        }), t[21] = i.discountPercent, t[22] = i.kind, t[23] = i.promotionDurationDays, t[24] = i.standardSeatCount, t[25] = o, t[26] = h) : h = t[26];
        let g;
        t[27] !== i.discountPercent || t[28] !== i.kind || t[29] !== i.promotionDurationDays || t[30] !== i.remainingStandardSeats || t[31] !== o ? (g = i.kind === `seats-promo-reminder` && (0, C.jsx)(s, {
            ...T.seatsPromoReminder,
            values: {
                discountPercent: i.discountPercent,
                promotionDuration: i.promotionDurationDays,
                promotionDurationIsMonth: o ? `true` : `false`,
                remainingSeats: i.remainingStandardSeats
            }
        }), t[27] = i.discountPercent, t[28] = i.kind, t[29] = i.promotionDurationDays, t[30] = i.remainingStandardSeats, t[31] = o, t[32] = g) : g = t[32];
        let _;
        t[33] !== i.discountPercent || t[34] !== i.kind || t[35] !== i.promotionDurationDays || t[36] !== i.redeemedAtDate || t[37] !== o ? (_ = i.kind === `seats-promo-redemption` && (0, C.jsxs)(C.Fragment, {
            children: [(0, C.jsx)(`div`, {
                className: `font-medium`,
                children: (0, C.jsx)(s, {
                    ...T.seatsPromoRedemptionSummary,
                    values: {
                        date: i.redeemedAtDate == null ? void 0 : (0, C.jsx)(l, {
                            value: i.redeemedAtDate,
                            day: `numeric`,
                            month: `long`,
                            year: `numeric`
                        }),
                        discountPercent: i.discountPercent,
                        hasDate: i.redeemedAtDate == null ? `false` : `true`
                    }
                })
            }), (0, C.jsx)(`div`, {
                className: `mt-1 text-xs`,
                children: (0, C.jsx)(s, {
                    ...T.seatsPromoRedemptionDiscountInfo,
                    values: {
                        promotionDuration: i.promotionDurationDays,
                        promotionDurationIsMonth: o ? `true` : `false`
                    }
                })
            })]
        }), t[33] = i.discountPercent, t[34] = i.kind, t[35] = i.promotionDurationDays, t[36] = i.redeemedAtDate, t[37] = o, t[38] = _) : _ = t[38];
        let v;
        return t[39] !== u || t[40] !== f || t[41] !== p || t[42] !== m || t[43] !== h || t[44] !== g || t[45] !== _ ? (v = (0, C.jsxs)(`div`, {
            className: u,
            children: [f, p, m, h, g, _]
        }), t[39] = u, t[40] = f, t[41] = p, t[42] = m, t[43] = h, t[44] = g, t[45] = _, t[46] = v) : v = t[46], v
    }, T = o({
        percentDiscountUnspecified: {
            id: `teamPromotionBanner.workspace.percentDiscountUnspecified`,
            defaultMessage: `{percent}% off workspace plan`
        },
        fixedDiscountSeatsUnspecified: {
            id: `teamPromotionBanner.workspace.fixedDiscountSeatsUnspecified`,
            defaultMessage: `Up to {seatCount} free`
        },
        fixedDiscountAmountUnspecified: {
            id: `teamPromotionBanner.workspace.fixedDiscountAmountUnspecified`,
            defaultMessage: `{amount} off`
        },
        fixedDiscountSeatCount: {
            id: `teamPromotionBanner.workspace.fixedDiscountSeatCount`,
            defaultMessage: `{seats, plural, one {# Standard seat} other {# Standard seats}}`
        },
        fixedDiscountSeatsYears: {
            id: `teamPromotionBanner.workspace.fixedDiscountSeatsYears`,
            defaultMessage: `Up to {seatCount} free for {years, plural, one {# year} other {# years}}`
        },
        fixedDiscountAmountYears: {
            id: `teamPromotionBanner.workspace.fixedDiscountAmountYears`,
            defaultMessage: `{amount} off for {years, plural, one {# year} other {# years}}`
        },
        percentDiscountInfoYears: {
            id: `teamPromotionBanner.workspace.percentDiscountInfoYears`,
            defaultMessage: `{percent}% off workspace plan for {years, plural, one {# year} other {# years}}`
        },
        fixedDiscountSeatsManyMonths: {
            id: `teamPromotionBanner.workspace.fixedDiscountSeatsManyMonths`,
            defaultMessage: `Up to {seats} {seats, plural, one {Standard seat} other {Standard seats}} free for {months} months`
        },
        fixedDiscountSeatsOneMonth: {
            id: `teamPromotionBanner.workspace.fixedDiscountSeatsOneMonth`,
            defaultMessage: `Up to {seats} {seats, plural, one {Standard seat} other {Standard seats}} free for 1 month`
        },
        fixedDiscountAmountManyMonths: {
            id: `teamPromotionBanner.workspace.fixedDiscountAmountManyMonths`,
            defaultMessage: `{amount} off for {months} months`
        },
        fixedDiscountAmountOneMonth: {
            id: `teamPromotionBanner.workspace.fixedDiscountAmountOneMonth`,
            defaultMessage: `{amount} off for 1 month`
        },
        percentDiscountInfo: {
            id: `teamPromotionBanner.workspace.percentDiscountInfo`,
            defaultMessage: `{percent}% off workspace plan for {months, plural, one {# month} other {# months}}`
        },
        seatsPromoQualified: {
            id: `teamPromotionBanner.standardSeats.seatsPromoQualified`,
            defaultMessage: `You're all set! Purchasing {seatCount, plural, one {# Standard seat} other {# Standard seats}} gets you {discountPercent}% off your Standard seats for {promotionDurationIsMonth, select, true {1 month} other {{promotionDuration, plural, one {# day} other {# days}}}}.`
        },
        seatsPromoRedemptionDiscountInfo: {
            id: `teamPromotionBanner.standardSeats.seatsPromoRedemptionDiscountInfo`,
            defaultMessage: `This promotional discount on Standard seats is active for {promotionDurationIsMonth, select, true {1 month} other {{promotionDuration, plural, one {# day} other {# days}}}}.`
        },
        seatsPromoRedemptionSummary: {
            id: `teamPromotionBanner.standardSeats.seatsPromoRedemptionSummary`,
            defaultMessage: `Promotional {discountPercent}% discount on Standard seats redeemed{hasDate, select, true { on {date}} other {}}.`
        },
        seatsPromoReminder: {
            id: `teamPromotionBanner.standardSeats.seatsPromoReminder`,
            defaultMessage: `Add {remainingSeats, plural, one {# more Standard seat} other {# more Standard seats}} to get {discountPercent}% off your Standard seats for {promotionDurationIsMonth, select, true {1 month} other {{promotionDuration, plural, one {# day} other {# days}}}}.`
        }
    })
}));

function D({
    activeDiscount: e,
    additionalStandardSeats: n = 0,
    billingPeriod: r = `monthly`,
    currency: i,
    discountPercent: a = 25,
    includeExpiredRedemption: o = !1,
    perSeatBillingPeriod: s,
    perSeatMonthly: c,
    promoEligibility: l,
    seatThresholdGap: u,
    showReminder: d = !1,
    taxPercent: p
}) {
    let g = h(l) ?? 30;
    if (u != null) {
        let e = Math.max(u - n, 0);
        if (e === 0) return {
            discountPercent: a,
            kind: `seats-promo-qualified`,
            promotionDurationDays: g,
            standardSeatCount: u
        };
        if (d) return {
            discountPercent: a,
            kind: `seats-promo-reminder`,
            promotionDurationDays: g,
            remainingStandardSeats: e
        }
    }
    if (o ? f(l) != null : b(l)) return {
        discountPercent: a,
        kind: `seats-promo-redemption`,
        promotionDurationDays: g,
        redeemedAtDate: m(l) ?? void 0
    };
    let v = y(e);
    if (v == null) return null;
    let S = r === `yearly` ? v.discount_expires_at != null && Number.isFinite(Date.parse(v.discount_expires_at)) ? {
        years: v.duration_num_periods
    } : {} : {
        months: v.duration_num_periods
    };
    if (v.discount_type === t.PERCENTAGE) return {
        ...S,
        kind: `active-percentage-discount`,
        percent: v.amount
    };
    if (i == null || c == null) return null;
    let C = r === `yearly` && v.discount_type === t.FIXED ? s != null && Number.isFinite(s) && s > 0 && Math.max(0, Math.floor(_({
        amount: v.amount,
        currency: i,
        taxPercent: p
    }) / s)) || null : x({
        currency: i,
        discount: v,
        perSeatMonthly: c,
        taxPercent: p
    });
    return C == null ? v.discount_type === t.FIXED && v.amount > 0 ? {
        ...S,
        amount: v.amount,
        currency: i,
        kind: `fixed-discount-amount`
    } : null : {
        ...S,
        kind: `fixed-discount-seats`,
        seats: C
    }
}
var O = e((() => {
    i(), g(), v(), p()
}));
export {
    E as i, O as n, w as r, D as t
};
//# sourceMappingURL=d66e3fc1-gqa8d6l32o5spudr.js.map