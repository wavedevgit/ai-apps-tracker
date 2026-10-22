import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    LTn as t,
    RTn as n
} from "./conversation-small-fh0oqifngkf5rvl1.js";
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
//# sourceMappingURL=db2560a5-edi6f9lifzfvatno.js.map