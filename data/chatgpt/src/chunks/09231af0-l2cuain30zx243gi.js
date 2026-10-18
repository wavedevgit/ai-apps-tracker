import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J0 as t,
    q0 as n
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    _N as r,
    yN as i
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    BS as a,
    FS as o,
    GS as s,
    PS as c,
    RS as l,
    US as u,
    dS as d
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";

function f(e) {
    return h.safeParse(e).data?.entity_data.canonical_business_profile
}

function p(e, n) {
    let i = g.safeParse(e).data?.opGenui.componentResults,
        a;
    for (let o of Object.keys(i ?? {})) {
        let i = _.safeParse(r(e, `Entity`, o)).data;
        if (i != null && t(i.action_payload, n)) {
            let e = m.safeParse(i.canonical_business_profile).data;
            if (e == null || a != null && !t(a, e)) return;
            a = e
        }
    }
    return a
}
var m, h, g, _, v = e((() => {
    n(), d(), i(), m = o({
        canonical_id: s(),
        profile_id: a().min(1),
        revision: c().int().positive(),
        content_sha256: a().regex(/^[0-9a-f]{64}$/),
        eligibility_expires_at: c().int().positive()
    }), h = o({
        entity_data: o({
            canonical_business_profile: m
        })
    }), g = o({
        opGenui: o({
            componentResults: l(a(), u())
        })
    }), _ = o({
        action_payload: l(a(), u()),
        canonical_business_profile: u().optional()
    })
}));
export {
    f as n, v as r, p as t
};
//# sourceMappingURL=09231af0-l2cuain30zx243gi.js.map