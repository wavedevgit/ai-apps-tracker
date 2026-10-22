import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    R3 as t,
    w3 as n
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Fon as r,
    Mon as i
} from "./conversation-small-dwpaie1hln28efxb.js";

function a(e, t) {
    return e == null || e <= t
}
var o, s, c = e((() => {
    n(), r(), o = ({
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
        currency: r
    }) => i({
        intl: e,
        amount: n / 10 ** t(r),
        currency: r
    })
}));
export {
    a as i, s as n, c as r, o as t
};
//# sourceMappingURL=cf38d95c-cxqk92i5hg9e62xk.js.map