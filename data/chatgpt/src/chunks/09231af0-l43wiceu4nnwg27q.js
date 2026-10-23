import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    _B as t,
    hB as n
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Hx as r,
    SS as i,
    Zx as a,
    _S as o,
    bS as s,
    dS as c,
    fS as l,
    hS as u,
    qx as d,
    sS as f
} from "./c2675c8c-oz03twoan08d72ud.js";

function p(e) {
    return _.some(t => t === e)
}

function m(e) {
    return y.safeParse(e).data?.entity_data.canonical_business_profile
}

function h(e, t) {
    let r = b.safeParse(e).data?.opGenui.componentResults,
        a = l({
            extraParams: l({
                provider: f(`canonical-business-profile`),
                business_id: i()
            })
        }).safeParse(t).data?.extraParams;
    if (a != null)
        for (let t of Object.keys(r ?? {})) {
            let r = x.safeParse(n(e, `Entity`, t)).data,
                i = v.safeParse(r?.canonical_business_profile).data;
            if (i?.canonical_id === a.business_id) return i
        }
}

function g(e) {
    return l({
        type: f(`entity_metadata`),
        entity_type: d(_),
        entity_data: v
    }).safeParse(e).data?.entity_data
}
var _, v, y, b, x, S = e((() => {
    r(), t(), _ = [`brand`, `company`, `organization`], v = l({
        canonical_id: i(),
        profile_id: o().min(1),
        revision: c().int().positive(),
        content_sha256: o().regex(/^[0-9a-f]{64}$/),
        eligibility_expires_at: c().int().positive(),
        display_name: o(),
        kind: o(),
        website_url: o().nullish(),
        description: o().nullish(),
        categories: a(o()).default([]),
        delivery_policy: o().nullish(),
        returns_policy: o().nullish()
    }), y = l({
        entity_data: l({
            canonical_business_profile: v
        })
    }), b = l({
        opGenui: l({
            componentResults: u(o(), s())
        })
    }), x = l({
        canonical_business_profile: s().optional()
    })
}));
export {
    p as a, S as i, m as n, g as r, h as t
};
//# sourceMappingURL=09231af0-l43wiceu4nnwg27q.js.map