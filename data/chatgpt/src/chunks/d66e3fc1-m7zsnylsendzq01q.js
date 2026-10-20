import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $st as t,
    J5 as n,
    q5 as r,
    zst as i
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as a,
    En as o,
    Pn as s,
    Rn as c,
    Tn as l,
    Vn as u,
    zn as d
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    cc as f,
    ct as p,
    dt as m,
    lc as h,
    lt as g,
    oc as _,
    pc as v,
    sc as y,
    uc as b,
    ut as x
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
var S, C, w, T, E = e((() => {
    S = l(), n(), d(), b(), C = u(), w = e => {
        "use forget";
        let t = (0, S.c)(47),
            {
                className: n,
                model: i
            } = e,
            c = a(),
            l = `promotionDurationDays` in i && i.promotionDurationDays === 30,
            u = i.kind === `active-percentage-discount` ? `rounded-lg bg-[#F2FBF4] px-4 py-3 text-sm text-[#24622B]` : i.kind === `seats-promo-redemption` ? `rounded-lg bg-[#E0FFE7] px-4 py-3 text-sm text-[#24622B]` : `rounded-lg border border-[#C5CEFF] bg-[#ECF0FF] px-4 py-3 text-sm text-[#262B72]`,
            d;
        t[0] !== u || t[1] !== n ? (d = r(u, n), t[0] = u, t[1] = n, t[2] = d) : d = t[2];
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
        t[8] !== c || t[9] !== i.kind || t[10] !== i.months || t[11] !== i.seats || t[12] !== i.years ? (p = i.kind === `fixed-discount-seats` && (0, C.jsx)(s, {
            ...i.years == null ? i.months === 1 ? T.fixedDiscountSeatsOneMonth : i.months == null ? T.fixedDiscountSeatsUnspecified : T.fixedDiscountSeatsManyMonths : T.fixedDiscountSeatsYears,
            values: {
                months: i.months,
                seatCount: c.formatMessage(T.fixedDiscountSeatCount, {
                    seats: i.seats
                }),
                seats: i.seats,
                years: i.years
            }
        }), t[8] = c, t[9] = i.kind, t[10] = i.months, t[11] = i.seats, t[12] = i.years, t[13] = p) : p = t[13];
        let m;
        t[14] !== c || t[15] !== i.amount || t[16] !== i.currency || t[17] !== i.kind || t[18] !== i.months || t[19] !== i.years ? (m = i.kind === `fixed-discount-amount` && (0, C.jsx)(s, {
            ...i.years == null ? i.months === 1 ? T.fixedDiscountAmountOneMonth : i.months == null ? T.fixedDiscountAmountUnspecified : T.fixedDiscountAmountManyMonths : T.fixedDiscountAmountYears,
            values: {
                amount: c.formatNumber(i.amount, {
                    currency: i.currency,
                    style: `currency`
                }),
                months: i.months,
                years: i.years
            }
        }), t[14] = c, t[15] = i.amount, t[16] = i.currency, t[17] = i.kind, t[18] = i.months, t[19] = i.years, t[20] = m) : m = t[20];
        let h;
        t[21] !== i.discountPercent || t[22] !== i.kind || t[23] !== i.promotionDurationDays || t[24] !== i.standardSeatCount || t[25] !== l ? (h = i.kind === `seats-promo-qualified` && (0, C.jsx)(s, {
            ...T.seatsPromoQualified,
            values: {
                discountPercent: i.discountPercent,
                promotionDuration: i.promotionDurationDays,
                promotionDurationIsMonth: l ? `true` : `false`,
                seatCount: i.standardSeatCount
            }
        }), t[21] = i.discountPercent, t[22] = i.kind, t[23] = i.promotionDurationDays, t[24] = i.standardSeatCount, t[25] = l, t[26] = h) : h = t[26];
        let g;
        t[27] !== i.discountPercent || t[28] !== i.kind || t[29] !== i.promotionDurationDays || t[30] !== i.remainingStandardSeats || t[31] !== l ? (g = i.kind === `seats-promo-reminder` && (0, C.jsx)(s, {
            ...T.seatsPromoReminder,
            values: {
                discountPercent: i.discountPercent,
                promotionDuration: i.promotionDurationDays,
                promotionDurationIsMonth: l ? `true` : `false`,
                remainingSeats: i.remainingStandardSeats
            }
        }), t[27] = i.discountPercent, t[28] = i.kind, t[29] = i.promotionDurationDays, t[30] = i.remainingStandardSeats, t[31] = l, t[32] = g) : g = t[32];
        let _;
        t[33] !== i.discountPercent || t[34] !== i.kind || t[35] !== i.promotionDurationDays || t[36] !== i.redeemedAtDate || t[37] !== l ? (_ = i.kind === `seats-promo-redemption` && (0, C.jsxs)(C.Fragment, {
            children: [(0, C.jsx)(`div`, {
                className: `font-medium`,
                children: (0, C.jsx)(s, {
                    ...T.seatsPromoRedemptionSummary,
                    values: {
                        date: i.redeemedAtDate == null ? void 0 : (0, C.jsx)(o, {
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
                        promotionDurationIsMonth: l ? `true` : `false`
                    }
                })
            })]
        }), t[33] = i.discountPercent, t[34] = i.kind, t[35] = i.promotionDurationDays, t[36] = i.redeemedAtDate, t[37] = l, t[38] = _) : _ = t[38];
        let v;
        return t[39] !== d || t[40] !== f || t[41] !== p || t[42] !== m || t[43] !== h || t[44] !== g || t[45] !== _ ? (v = (0, C.jsxs)(`div`, {
            className: d,
            children: [f, p, m, h, g, _]
        }), t[39] = d, t[40] = f, t[41] = p, t[42] = m, t[43] = h, t[44] = g, t[45] = _, t[46] = v) : v = t[46], v
    }, T = c({
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
    additionalStandardSeats: t = 0,
    billingPeriod: n = `monthly`,
    currency: r,
    discountPercent: a = 25,
    includeExpiredRedemption: o = !1,
    perSeatBillingPeriod: s,
    perSeatMonthly: c,
    promoEligibility: l,
    seatThresholdGap: u,
    showReminder: d = !1,
    taxPercent: m
}) {
    let v = _(l) ?? 30;
    if (u != null) {
        let e = Math.max(u - t, 0);
        if (e === 0) return {
            discountPercent: a,
            kind: `seats-promo-qualified`,
            promotionDurationDays: v,
            standardSeatCount: u
        };
        if (d) return {
            discountPercent: a,
            kind: `seats-promo-reminder`,
            promotionDurationDays: v,
            remainingStandardSeats: e
        }
    }
    if (o ? y(l) != null : h(l)) return {
        discountPercent: a,
        kind: `seats-promo-redemption`,
        promotionDurationDays: v,
        redeemedAtDate: f(l) ?? void 0
    };
    let b = g(e);
    if (b == null) return null;
    let S = n === `yearly` ? b.discount_expires_at != null && Number.isFinite(Date.parse(b.discount_expires_at)) ? {
        years: b.duration_num_periods
    } : {} : {
        months: b.duration_num_periods
    };
    if (b.discount_type === i.PERCENTAGE) return {
        ...S,
        kind: `active-percentage-discount`,
        percent: b.amount
    };
    if (r == null || c == null) return null;
    let C = n === `yearly` && b.discount_type === i.FIXED ? s != null && Number.isFinite(s) && s > 0 && Math.max(0, Math.floor(p({
        amount: b.amount,
        currency: r,
        taxPercent: m
    }) / s)) || null : x({
        currency: r,
        discount: b,
        perSeatMonthly: c,
        taxPercent: m
    });
    return C == null ? b.discount_type === i.FIXED && b.amount > 0 ? {
        ...S,
        amount: b.amount,
        currency: r,
        kind: `fixed-discount-amount`
    } : null : {
        ...S,
        kind: `fixed-discount-seats`,
        seats: C
    }
}
var O = e((() => {
    t(), v(), m(), b()
}));
export {
    E as i, O as n, w as r, D as t
};
//# sourceMappingURL=d66e3fc1-m7zsnylsendzq01q.js.map