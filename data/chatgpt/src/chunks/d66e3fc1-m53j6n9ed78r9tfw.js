import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    b5 as t,
    ust as n,
    wst as r,
    y5 as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as a,
    Ln as o,
    Nn as s,
    Rn as c,
    Tn as l,
    wn as u,
    zn as d
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    ac as f,
    cc as p,
    ct as m,
    dc as h,
    dt as g,
    ic as _,
    lt as v,
    oc as y,
    sc as b,
    ut as x
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
var S, C, w, T, E = e((() => {
    S = u(), t(), c(), p(), C = a(), w = e => {
        "use forget";
        let t = (0, S.c)(47),
            {
                className: n,
                model: r
            } = e,
            a = d(),
            o = `promotionDurationDays` in r && r.promotionDurationDays === 30,
            c = r.kind === `active-percentage-discount` ? `rounded-lg bg-[#F2FBF4] px-4 py-3 text-sm text-[#24622B]` : r.kind === `seats-promo-redemption` ? `rounded-lg bg-[#E0FFE7] px-4 py-3 text-sm text-[#24622B]` : `rounded-lg border border-[#C5CEFF] bg-[#ECF0FF] px-4 py-3 text-sm text-[#262B72]`,
            u;
        t[0] !== c || t[1] !== n ? (u = i(c, n), t[0] = c, t[1] = n, t[2] = u) : u = t[2];
        let f;
        t[3] !== r.kind || t[4] !== r.months || t[5] !== r.percent || t[6] !== r.years ? (f = r.kind === `active-percentage-discount` && (0, C.jsx)(s, {
            ...r.years == null ? r.months == null ? T.percentDiscountUnspecified : T.percentDiscountInfo : T.percentDiscountInfoYears,
            values: {
                months: r.months,
                percent: r.percent,
                years: r.years
            }
        }), t[3] = r.kind, t[4] = r.months, t[5] = r.percent, t[6] = r.years, t[7] = f) : f = t[7];
        let p;
        t[8] !== a || t[9] !== r.kind || t[10] !== r.months || t[11] !== r.seats || t[12] !== r.years ? (p = r.kind === `fixed-discount-seats` && (0, C.jsx)(s, {
            ...r.years == null ? r.months === 1 ? T.fixedDiscountSeatsOneMonth : r.months == null ? T.fixedDiscountSeatsUnspecified : T.fixedDiscountSeatsManyMonths : T.fixedDiscountSeatsYears,
            values: {
                months: r.months,
                seatCount: a.formatMessage(T.fixedDiscountSeatCount, {
                    seats: r.seats
                }),
                seats: r.seats,
                years: r.years
            }
        }), t[8] = a, t[9] = r.kind, t[10] = r.months, t[11] = r.seats, t[12] = r.years, t[13] = p) : p = t[13];
        let m;
        t[14] !== a || t[15] !== r.amount || t[16] !== r.currency || t[17] !== r.kind || t[18] !== r.months || t[19] !== r.years ? (m = r.kind === `fixed-discount-amount` && (0, C.jsx)(s, {
            ...r.years == null ? r.months === 1 ? T.fixedDiscountAmountOneMonth : r.months == null ? T.fixedDiscountAmountUnspecified : T.fixedDiscountAmountManyMonths : T.fixedDiscountAmountYears,
            values: {
                amount: a.formatNumber(r.amount, {
                    currency: r.currency,
                    style: `currency`
                }),
                months: r.months,
                years: r.years
            }
        }), t[14] = a, t[15] = r.amount, t[16] = r.currency, t[17] = r.kind, t[18] = r.months, t[19] = r.years, t[20] = m) : m = t[20];
        let h;
        t[21] !== r.discountPercent || t[22] !== r.kind || t[23] !== r.promotionDurationDays || t[24] !== r.standardSeatCount || t[25] !== o ? (h = r.kind === `seats-promo-qualified` && (0, C.jsx)(s, {
            ...T.seatsPromoQualified,
            values: {
                discountPercent: r.discountPercent,
                promotionDuration: r.promotionDurationDays,
                promotionDurationIsMonth: o ? `true` : `false`,
                seatCount: r.standardSeatCount
            }
        }), t[21] = r.discountPercent, t[22] = r.kind, t[23] = r.promotionDurationDays, t[24] = r.standardSeatCount, t[25] = o, t[26] = h) : h = t[26];
        let g;
        t[27] !== r.discountPercent || t[28] !== r.kind || t[29] !== r.promotionDurationDays || t[30] !== r.remainingStandardSeats || t[31] !== o ? (g = r.kind === `seats-promo-reminder` && (0, C.jsx)(s, {
            ...T.seatsPromoReminder,
            values: {
                discountPercent: r.discountPercent,
                promotionDuration: r.promotionDurationDays,
                promotionDurationIsMonth: o ? `true` : `false`,
                remainingSeats: r.remainingStandardSeats
            }
        }), t[27] = r.discountPercent, t[28] = r.kind, t[29] = r.promotionDurationDays, t[30] = r.remainingStandardSeats, t[31] = o, t[32] = g) : g = t[32];
        let _;
        t[33] !== r.discountPercent || t[34] !== r.kind || t[35] !== r.promotionDurationDays || t[36] !== r.redeemedAtDate || t[37] !== o ? (_ = r.kind === `seats-promo-redemption` && (0, C.jsxs)(C.Fragment, {
            children: [(0, C.jsx)(`div`, {
                className: `font-medium`,
                children: (0, C.jsx)(s, {
                    ...T.seatsPromoRedemptionSummary,
                    values: {
                        date: r.redeemedAtDate == null ? void 0 : (0, C.jsx)(l, {
                            value: r.redeemedAtDate,
                            day: `numeric`,
                            month: `long`,
                            year: `numeric`
                        }),
                        discountPercent: r.discountPercent,
                        hasDate: r.redeemedAtDate == null ? `false` : `true`
                    }
                })
            }), (0, C.jsx)(`div`, {
                className: `mt-1 text-xs`,
                children: (0, C.jsx)(s, {
                    ...T.seatsPromoRedemptionDiscountInfo,
                    values: {
                        promotionDuration: r.promotionDurationDays,
                        promotionDurationIsMonth: o ? `true` : `false`
                    }
                })
            })]
        }), t[33] = r.discountPercent, t[34] = r.kind, t[35] = r.promotionDurationDays, t[36] = r.redeemedAtDate, t[37] = o, t[38] = _) : _ = t[38];
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
    additionalStandardSeats: t = 0,
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
    let h = _(l) ?? 30;
    if (u != null) {
        let e = Math.max(u - t, 0);
        if (e === 0) return {
            discountPercent: a,
            kind: `seats-promo-qualified`,
            promotionDurationDays: h,
            standardSeatCount: u
        };
        if (d) return {
            discountPercent: a,
            kind: `seats-promo-reminder`,
            promotionDurationDays: h,
            remainingStandardSeats: e
        }
    }
    if (o ? f(l) != null : b(l)) return {
        discountPercent: a,
        kind: `seats-promo-redemption`,
        promotionDurationDays: h,
        redeemedAtDate: y(l) ?? void 0
    };
    let g = v(e);
    if (g == null) return null;
    let S = r === `yearly` ? g.discount_expires_at != null && Number.isFinite(Date.parse(g.discount_expires_at)) ? {
        years: g.duration_num_periods
    } : {} : {
        months: g.duration_num_periods
    };
    if (g.discount_type === n.PERCENTAGE) return {
        ...S,
        kind: `active-percentage-discount`,
        percent: g.amount
    };
    if (i == null || c == null) return null;
    let C = r === `yearly` && g.discount_type === n.FIXED ? s != null && Number.isFinite(s) && s > 0 && Math.max(0, Math.floor(m({
        amount: g.amount,
        currency: i,
        taxPercent: p
    }) / s)) || null : x({
        currency: i,
        discount: g,
        perSeatMonthly: c,
        taxPercent: p
    });
    return C == null ? g.discount_type === n.FIXED && g.amount > 0 ? {
        ...S,
        amount: g.amount,
        currency: i,
        kind: `fixed-discount-amount`
    } : null : {
        ...S,
        kind: `fixed-discount-seats`,
        seats: C
    }
}
var O = e((() => {
    r(), h(), g(), p()
}));
export {
    E as i, O as n, w as r, D as t
};
//# sourceMappingURL=d66e3fc1-m53j6n9ed78r9tfw.js.map