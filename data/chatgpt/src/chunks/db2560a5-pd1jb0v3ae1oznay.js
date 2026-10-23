import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    RTn as t,
    zTn as n
} from "./conversation-small-bcbq46iub1p0ca1t.js";
var r, i, a = e((() => {
    n(), r = e => e.get(`product-sku`) === t.CODEX ? t.CODEX : void 0, i = ({
        defaultPlatform: e,
        locale: t,
        searchParams: n,
        workspace: i
    }) => {
        let a = r(n);
        return {
            country: n.get(`country`),
            platform: n.get(`platform`) ?? e ?? null,
            locale: n.get(`locale`) ?? t,
            ...a ? {
                productSku: a
            } : {},
            ...i === void 0 ? {} : {
                workspace: i
            }
        }
    }
}));
export {
    i as n, a as r, r as t
};
//# sourceMappingURL=db2560a5-pd1jb0v3ae1oznay.js.map