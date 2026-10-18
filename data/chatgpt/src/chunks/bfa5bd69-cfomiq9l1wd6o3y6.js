import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bn as t,
    wn as n
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    dc as r
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    i,
    n as a,
    r as o,
    t as s
} from "./d66e3fc1-m53j6n9ed78r9tfw.js";

function c(e) {
    "use forget";
    let t = (0, l.c)(5),
        {
            promoEligibility: n,
            discountPercent: r
        } = e,
        i = r === void 0 ? 25 : r,
        a;
    t[0] !== i || t[1] !== n ? (a = s({
        discountPercent: i,
        includeExpiredRedemption: !0,
        promoEligibility: n
    }), t[0] = i, t[1] = n, t[2] = a) : a = t[2];
    let c = a,
        d;
    return t[3] === c ? d = t[4] : (d = c?.kind === `seats-promo-redemption` ? (0, u.jsx)(o, {
        className: `mb-3`,
        model: c
    }) : null, t[3] = c, t[4] = d), d
}
var l, u, d = e((() => {
    l = n(), r(), i(), a(), u = t()
}));
export {
    d as n, c as t
};
//# sourceMappingURL=bfa5bd69-cfomiq9l1wd6o3y6.js.map