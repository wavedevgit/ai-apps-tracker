import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    gTn as t,
    hTn as n
} from "./conversation-small-ocicxxw6jegn4vux.js";
var r, i, a = e((() => {
    t(), r = e => e.get(`product-sku`) === n.CODEX ? n.CODEX : void 0, i = ({
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
//# sourceMappingURL=db2560a5-i2du0t816h1ja3pd.js.map