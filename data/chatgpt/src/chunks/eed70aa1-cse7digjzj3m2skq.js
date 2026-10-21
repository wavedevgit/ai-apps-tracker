import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Hx as t,
    Lx as n,
    Wx as r,
    dS as i,
    fS as a,
    mS as o,
    nS as s,
    oS as c
} from "./c2675c8c-h5ybkhdzcoblzzdu.js";
var l, u, d, f, p, m, h, g, _, v = e((() => {
    n(), l = i({
        version: s(1),
        delivery: t([`none`, `paid`])
    }), u = i({
        version: s(1),
        delivery: s(`free`),
        scope: s(`all_orders`)
    }), d = i({
        version: s(1),
        delivery: s(`free`),
        scope: s(`minimum_order`),
        minimum_order_amount: a(),
        currency: a().nullable()
    }), f = i({
        version: s(1),
        returns: s(`none`)
    }), p = i({
        version: s(1),
        returns: t([`fees`, `free`]),
        window_days: c().nullable()
    }), m = o([l, u, d.extend({
        minimum_order_amount: a().regex(/^(?:\d+(?:\.\d*)?|\.\d+)$/).refine(e => Number.isFinite(Number(e)) && Number(e) > 0),
        currency: a().regex(/^[A-Z]{3}$/)
    })]), h = o([f, p.extend({
        window_days: c().int().positive()
    })]), g = o([i({
        version: s(1),
        delivery: r()
    }), l, u, i({
        version: s(1),
        delivery: s(`free`),
        scope: r()
    }), d]), _ = o([i({
        version: s(1),
        returns: r()
    }), f, p])
}));
export {
    v as a, h as i, m as n, _ as r, g as t
};
//# sourceMappingURL=eed70aa1-cse7digjzj3m2skq.js.map