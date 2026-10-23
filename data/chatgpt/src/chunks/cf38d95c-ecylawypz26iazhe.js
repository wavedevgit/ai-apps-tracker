import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    R3 as t,
    w3 as n
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Fon as r,
    Ron as i
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function a(e, t) {
    return e == null || e <= t
}
var o, s, c = e((() => {
    n(), i(), o = ({
        intl: e,
        amount: n,
        currency: r
    }) => {
        let i = t(r),
            a = n / 10 ** i;
        return e.formatNumber(a, {
            currency: r,
            style: `currency`,
            minimumFractionDigits: i,
            maximumFractionDigits: i
        })
    }, s = ({
        intl: e,
        amount: n,
        currency: i
    }) => r({
        intl: e,
        amount: n / 10 ** t(i),
        currency: i
    })
}));
export {
    a as i, s as n, c as r, o as t
};
//# sourceMappingURL=cf38d95c-ecylawypz26iazhe.js.map