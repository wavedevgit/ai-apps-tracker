import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    eTn as t,
    tTn as n
} from "./conversation-small-cy5f8pl0g26s86so.js";
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
//# sourceMappingURL=db2560a5-h0o21u1c3y1lxk2d.js.map