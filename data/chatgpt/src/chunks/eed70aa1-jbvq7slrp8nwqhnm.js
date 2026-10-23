import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Hx as t,
    Yx as n,
    _S as r,
    dS as i,
    gS as a,
    qx as o,
    sS as s,
    yS as c
} from "./c2675c8c-oz03twoan08d72ud.js";
var l, u, d, f, p, m, h, g, _, v = e((() => {
    t(), l = a({
        version: s(1),
        delivery: o([`none`, `paid`])
    }), u = a({
        version: s(1),
        delivery: s(`free`),
        scope: s(`all_orders`)
    }), d = a({
        version: s(1),
        delivery: s(`free`),
        scope: s(`minimum_order`),
        minimum_order_amount: r(),
        currency: r().nullable()
    }), f = a({
        version: s(1),
        returns: s(`none`)
    }), p = a({
        version: s(1),
        returns: o([`fees`, `free`]),
        window_days: i().nullable()
    }), m = c([l, u, d.extend({
        minimum_order_amount: r().regex(/^(?:\d+(?:\.\d*)?|\.\d+)$/).refine(e => Number.isFinite(Number(e)) && Number(e) > 0),
        currency: r().regex(/^[A-Z]{3}$/)
    })]), h = c([f, p.extend({
        window_days: i().int().positive()
    })]), g = c([a({
        version: s(1),
        delivery: n()
    }), l, u, a({
        version: s(1),
        delivery: s(`free`),
        scope: n()
    }), d]), _ = c([a({
        version: s(1),
        returns: n()
    }), f, p])
}));
export {
    v as a, h as i, m as n, _ as r, g as t
};
//# sourceMappingURL=eed70aa1-jbvq7slrp8nwqhnm.js.map