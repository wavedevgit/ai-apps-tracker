import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CS as t,
    KS as n,
    LS as r,
    TS as i,
    VS as a,
    YS as o,
    qS as s,
    vS as c
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
var l, u, d, f, p, m, h, g, _, v = e((() => {
    c(), l = n({
        version: r(1),
        delivery: t([`none`, `paid`])
    }), u = n({
        version: r(1),
        delivery: r(`free`),
        scope: r(`all_orders`)
    }), d = n({
        version: r(1),
        delivery: r(`free`),
        scope: r(`minimum_order`),
        minimum_order_amount: s(),
        currency: s().nullable()
    }), f = n({
        version: r(1),
        returns: r(`none`)
    }), p = n({
        version: r(1),
        returns: t([`fees`, `free`]),
        window_days: a().nullable()
    }), m = o([l, u, d.extend({
        minimum_order_amount: s().regex(/^(?:\d+(?:\.\d*)?|\.\d+)$/).refine(e => Number.isFinite(Number(e)) && Number(e) > 0),
        currency: s().regex(/^[A-Z]{3}$/)
    })]), h = o([f, p.extend({
        window_days: a().int().positive()
    })]), g = o([n({
        version: r(1),
        delivery: i()
    }), l, u, n({
        version: r(1),
        delivery: r(`free`),
        scope: i()
    }), d]), _ = o([n({
        version: r(1),
        returns: i()
    }), f, p])
}));
export {
    v as a, h as i, m as n, _ as r, g as t
};
//# sourceMappingURL=eed70aa1-nkxaphfmj18mkn4i.js.map