import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A2 as t,
    j2 as n
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    _B as r,
    hB as i
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Fx as a,
    aS as o,
    cS as s,
    hS as c,
    iS as l,
    pS as u,
    uS as d
} from "./c2675c8c-otyjprdiowg2v8hl.js";

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
        canonical_id: c(),
        profile_id: d().min(1),
        revision: l().int().positive(),
        content_sha256: d().regex(/^[0-9a-f]{64}$/),
        eligibility_expires_at: l().int().positive(),
        website_url: d().nullish()
    }), h = o({
        entity_data: o({
            canonical_business_profile: m
        })
    }), g = o({
        opGenui: o({
            componentResults: s(d(), u())
        })
    }), _ = o({
        action_payload: s(d(), u()),
        canonical_business_profile: u().optional()
    })
}));
export {
    f as n, v as r, p as t
};
//# sourceMappingURL=09231af0-jkll06crbu53ld3h.js.map