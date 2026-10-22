import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Jx as t,
    Kx as n,
    Vx as r,
    gS as i,
    hS as a,
    oS as o,
    uS as s,
    vS as c
} from "./c2675c8c-4fpunyxk1uf8cfp1.js";
var l, u, d, f, p, m, h, g, _, v = e((() => {
    r(), l = a({
        version: o(1),
        delivery: n([`none`, `paid`])
    }), u = a({
        version: o(1),
        delivery: o(`free`),
        scope: o(`all_orders`)
    }), d = a({
        version: o(1),
        delivery: o(`free`),
        scope: o(`minimum_order`),
        minimum_order_amount: i(),
        currency: i().nullable()
    }), f = a({
        version: o(1),
        returns: o(`none`)
    }), p = a({
        version: o(1),
        returns: n([`fees`, `free`]),
        window_days: s().nullable()
    }), m = c([l, u, d.extend({
        minimum_order_amount: i().regex(/^(?:\d+(?:\.\d*)?|\.\d+)$/).refine(e => Number.isFinite(Number(e)) && Number(e) > 0),
        currency: i().regex(/^[A-Z]{3}$/)
    })]), h = c([f, p.extend({
        window_days: s().int().positive()
    })]), g = c([a({
        version: o(1),
        delivery: t()
    }), l, u, a({
        version: o(1),
        delivery: o(`free`),
        scope: t()
    }), d]), _ = c([a({
        version: o(1),
        returns: t()
    }), f, p])
}));
export {
    v as a, h as i, m as n, _ as r, g as t
};
//# sourceMappingURL=eed70aa1-dupny4ro1q8sf8qi.js.map