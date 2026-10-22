import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ist as t,
    Pst as n,
    xct as r
} from "./4813494d-d7xm9wsvhdfbag9a.js";

function i(e) {
    return s.has(e)
}

function a(e) {
    if (!e) return null;
    let t = e.toLowerCase();
    return (o[e] ?? o[t]) || (i(t) ? t : n.PLUS)
}
var o, s, c = e((() => {
    r(), o = {
        [t.FREE]: n.FREE,
        [t.GO]: n.GO,
        [t.PLUS]: n.PLUS,
        [t.PLUS_FREE]: n.PLUS,
        [t.PLUS_NO_PAYMENT_TRIAL]: n.PLUS,
        [t.PROLITE]: n.PROLITE,
        [t.PRO]: n.PRO,
        [t.PROMAX]: n.PROMAX,
        [t.PROMAX_FREE]: n.PROMAX,
        [t.PRO_FREE]: n.PRO,
        [t.SELF_SERVE_BUSINESS]: n.SELF_SERVE_BUSINESS,
        [t.SELF_SERVE_BUSINESS_PROLITE]: n.SELF_SERVE_BUSINESS,
        [t.SELF_SERVE_BUSINESS_USAGE_BASED]: n.SELF_SERVE_BUSINESS,
        [t.SCI]: n.SCI,
        [t.ENTERPRISE_CBP_FLAT]: n.ENTERPRISE_CBP,
        [t.ENTERPRISE_CBP_SEAT_USAGE]: n.ENTERPRISE_CBP,
        [t.HC_FLAT]: n.HC,
        [t.HC_SEAT_USAGE]: n.HC,
        [t.FINSERV]: n.FINSERV,
        [t.LAW]: n.LAW,
        [t.HC_CONSUMPTION]: n.HC_CONSUMPTION,
        [t.ENT26]: n.ENT26,
        [t.EDUCATION_CBP_FLAT]: n.EDUCATION_CBP,
        [t.EDU_PLUS]: n.EDU_PLUS,
        [t.EDU_PRO]: n.EDU_PRO,
        [t.QUORUM]: n.QUORUM,
        [t.DEPRECATED_ENTERPRISE]: n.DEPRECATED_ENTERPRISE,
        [t.DEPRECATED_EDU]: n.DEPRECATED_EDU,
        [t.K12]: n.K12
    }, s = new Set(Object.values(n))
}));
export {
    a as n, c as t
};
//# sourceMappingURL=88fdc6d5-f8b49r058zoamlc5.js.map