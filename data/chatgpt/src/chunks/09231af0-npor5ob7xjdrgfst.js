import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    b2 as t,
    y2 as n
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    xN as r,
    yN as i
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    BS as a,
    GS as o,
    JS as s,
    US as c,
    XS as l,
    gS as u,
    zS as d
} from "./c2675c8c-fpv9s4kvd412dyap.js";

function f(e) {
    return h.safeParse(e).data?.entity_data.canonical_business_profile
}

function p(e, n) {
    let r = g.safeParse(e).data?.opGenui.componentResults,
        a;
    for (let o of Object.keys(r ?? {})) {
        let r = _.safeParse(i(e, `Entity`, o)).data;
        if (r != null && t(r.action_payload, n)) {
            let e = m.safeParse(r.canonical_business_profile).data;
            if (e == null || a != null && !t(a, e)) return;
            a = e
        }
    }
    return a
}
var m, h, g, _, v = e((() => {
    n(), u(), r(), m = a({
        canonical_id: l(),
        profile_id: o().min(1),
        revision: d().int().positive(),
        content_sha256: o().regex(/^[0-9a-f]{64}$/),
        eligibility_expires_at: d().int().positive(),
        website_url: o().nullish()
    }), h = a({
        entity_data: a({
            canonical_business_profile: m
        })
    }), g = a({
        opGenui: a({
            componentResults: c(o(), s())
        })
    }), _ = a({
        action_payload: c(o(), s()),
        canonical_business_profile: s().optional()
    })
}));
export {
    f as n, v as r, p as t
};
//# sourceMappingURL=09231af0-npor5ob7xjdrgfst.js.map