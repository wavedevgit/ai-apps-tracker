import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    b2 as t,
    x2 as n
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    xN as r,
    yN as i
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Lx as a,
    _S as o,
    fS as s,
    hS as c,
    oS as l,
    sS as u,
    uS as d
} from "./c2675c8c-9bs3zsr3vq259es7.js";

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
    t(), a(), r(), m = u({
        canonical_id: o(),
        profile_id: s().min(1),
        revision: l().int().positive(),
        content_sha256: s().regex(/^[0-9a-f]{64}$/),
        eligibility_expires_at: l().int().positive(),
        website_url: s().nullish()
    }), h = u({
        entity_data: u({
            canonical_business_profile: m
        })
    }), g = u({
        opGenui: u({
            componentResults: d(s(), c())
        })
    }), _ = u({
        action_payload: d(s(), c()),
        canonical_business_profile: c().optional()
    })
}));
export {
    f as n, v as r, p as t
};
//# sourceMappingURL=09231af0-mb9azias91zaxsma.js.map