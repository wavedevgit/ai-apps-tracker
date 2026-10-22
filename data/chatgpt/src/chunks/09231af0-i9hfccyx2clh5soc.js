import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A2 as t,
    j2 as n
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    gB as r,
    mB as i
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Px as a,
    fS as o,
    iS as s,
    lS as c,
    mS as l,
    rS as u,
    sS as d
} from "./c2675c8c-d62p1sdq1sy52umm.js";

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
    t(), a(), r(), m = s({
        canonical_id: l(),
        profile_id: c().min(1),
        revision: u().int().positive(),
        content_sha256: c().regex(/^[0-9a-f]{64}$/),
        eligibility_expires_at: u().int().positive(),
        website_url: c().nullish()
    }), h = s({
        entity_data: s({
            canonical_business_profile: m
        })
    }), g = s({
        opGenui: s({
            componentResults: d(c(), o())
        })
    }), _ = s({
        action_payload: d(c(), o()),
        canonical_business_profile: o().optional()
    })
}));
export {
    f as n, v as r, p as t
};
//# sourceMappingURL=09231af0-i9hfccyx2clh5soc.js.map