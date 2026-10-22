import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A2 as t,
    j2 as n
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    _B as r,
    hB as i
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    Vx as a,
    dS as o,
    gS as s,
    mS as c,
    uS as l,
    xS as u,
    yS as d
} from "./c2675c8c-4fpunyxk1uf8cfp1.js";

function f(e) {
    return h.safeParse(e).data?.entity_data.canonical_business_profile
}

function p(e, t) {
    let r = g.safeParse(e).data?.opGenui.componentResults,
        a;
    for (let o of Object.keys(r ?? {})) {
        let r = _.safeParse(i(e, `Entity`, o)).data;
        if (r != null && n(r.action_payload, t)) {
            let e = m.safeParse(r.canonical_business_profile).data;
            if (e == null || a != null && !n(a, e)) return;
            a = e
        }
    }
    return a
}
var m, h, g, _, v = e((() => {
    t(), a(), r(), m = o({
        canonical_id: u(),
        profile_id: s().min(1),
        revision: l().int().positive(),
        content_sha256: s().regex(/^[0-9a-f]{64}$/),
        eligibility_expires_at: l().int().positive(),
        website_url: s().nullish()
    }), h = o({
        entity_data: o({
            canonical_business_profile: m
        })
    }), g = o({
        opGenui: o({
            componentResults: c(s(), d())
        })
    }), _ = o({
        action_payload: c(s(), d()),
        canonical_business_profile: d().optional()
    })
}));
export {
    f as n, v as r, p as t
};
//# sourceMappingURL=09231af0-erqq29ixcsmt815d.js.map