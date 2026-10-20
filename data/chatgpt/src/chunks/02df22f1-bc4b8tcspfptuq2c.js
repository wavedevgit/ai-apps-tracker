import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    S8 as t,
    m8 as n
} from "./4813494d-qsuygr73qjc6rh65.js";

function r({
    items: e,
    maxUncollapsedItems: t = 4,
    shouldCollapseAncestors: n,
    trailingItemCount: r = 2
}) {
    if (!n || e.length <= t) return e.map((e, t) => ({
        type: `breadcrumb`,
        item: e,
        itemIndex: t
    }));
    let i = e[0],
        a = e.length - r;
    return i == null ? [] : [{
        type: `breadcrumb`,
        item: i,
        itemIndex: 0
    }, {
        type: `collapsed`,
        hiddenItems: e.slice(1, a).map((e, t) => ({
            item: e,
            itemIndex: t + 1
        }))
    }, ...e.slice(a).map((e, t) => ({
        type: `breadcrumb`,
        item: e,
        itemIndex: a + t
    }))]
}
var i, a = e((() => {
    n(), i = t(null)
}));
export {
    a as n, i as r, r as t
};
//# sourceMappingURL=02df22f1-bc4b8tcspfptuq2c.js.map