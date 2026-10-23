import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Oct as t,
    Ust as n,
    Vst as r
} from "./4813494d-mdvd4786a87166cc.js";

function i(e) {
    return s.has(e)
}

function a(e) {
    if (!e) return null;
    let t = e.toLowerCase();
    return (o[e] ?? o[t]) || (i(t) ? t : r.PLUS)
}
var o, s, c = e((() => {
    t(), o = {
        [n.FREE]: r.FREE,
        [n.GO]: r.GO,
        [n.PLUS]: r.PLUS,
        [n.PLUS_FREE]: r.PLUS,
        [n.PLUS_NO_PAYMENT_TRIAL]: r.PLUS,
        [n.PROLITE]: r.PROLITE,
        [n.PRO]: r.PRO,
        [n.PROMAX]: r.PROMAX,
        [n.PROMAX_FREE]: r.PROMAX,
        [n.PRO_FREE]: r.PRO,
        [n.SELF_SERVE_BUSINESS]: r.SELF_SERVE_BUSINESS,
        [n.SELF_SERVE_BUSINESS_PROLITE]: r.SELF_SERVE_BUSINESS,
        [n.SELF_SERVE_BUSINESS_USAGE_BASED]: r.SELF_SERVE_BUSINESS,
        [n.SCI]: r.SCI,
        [n.ENTERPRISE_CBP_FLAT]: r.ENTERPRISE_CBP,
        [n.ENTERPRISE_CBP_SEAT_USAGE]: r.ENTERPRISE_CBP,
        [n.HC_FLAT]: r.HC,
        [n.HC_SEAT_USAGE]: r.HC,
        [n.FINSERV]: r.FINSERV,
        [n.LAW]: r.LAW,
        [n.HC_CONSUMPTION]: r.HC_CONSUMPTION,
        [n.ENT26]: r.ENT26,
        [n.EDUCATION_CBP_FLAT]: r.EDUCATION_CBP,
        [n.EDU_PLUS]: r.EDU_PLUS,
        [n.EDU_PRO]: r.EDU_PRO,
        [n.QUORUM]: r.QUORUM,
        [n.DEPRECATED_ENTERPRISE]: r.DEPRECATED_ENTERPRISE,
        [n.DEPRECATED_EDU]: r.DEPRECATED_EDU,
        [n.K12]: r.K12
    }, s = new Set(Object.values(r))
}));
export {
    a as n, c as t
};
//# sourceMappingURL=88fdc6d5-hfv1na4vfqxl73oi.js.map