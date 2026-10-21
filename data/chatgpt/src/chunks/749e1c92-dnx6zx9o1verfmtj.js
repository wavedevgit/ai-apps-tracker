import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";

function t(e, t) {
    return t?.status === `available` ? t.five_hour != null : t?.status === `not_applicable` ? !1 : t?.plan_type == null ? e !== `prolite` : t.plan_type !== `self_serve_business_prolite`
}

function n(e, t) {
    return e === `team` ? t === `upgrade_to_premium` ? `upgrade_to_premium` : `keep_standard` : e === `self_serve_business_prolite` ? `keep_premium` : `unsupported_plan`
}

function r(e, t, n) {
    let r = n === "default" ? `team` : n === `prolite` ? `self_serve_business_prolite` : void 0;
    return r == null ? void 0 : e.data.find(e => e.user_id === t && e.plan_type === r)
}

function i(e, t) {
    let n = e.data.filter(e => e.user_id === t && (e.plan_type === `team` || e.plan_type === `self_serve_business_prolite`)),
        r = (e, t) => {
            let r = n.map(t => t[e]),
                i = 0,
                a = 0;
            for (let e of r) {
                let t = e.average_bucket_count ?? 0;
                e.average_used_percent != null && t > 0 && (i += e.average_used_percent * t, a += t)
            }
            return {
                window_minutes: t,
                average_used_percent: a > 0 ? i / a : null,
                rate_limit_hit_count: r.length > 0 && r.every(e => e.rate_limit_hit_count != null) ? r.reduce((e, t) => e + (t.rate_limit_hit_count ?? 0), 0) : null
            }
        };
    return {
        weekly: r(`weekly`, 10080),
        five_hour: r(`five_hour`, 300)
    }
}
var a, o = e((() => {
    a = `actual-periods-v2`
}));
export {
    n as a, o as i, r as n, i as o, t as r, a as t
};
//# sourceMappingURL=749e1c92-dnx6zx9o1verfmtj.js.map