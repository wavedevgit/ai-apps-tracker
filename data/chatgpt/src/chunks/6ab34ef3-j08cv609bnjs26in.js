import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Iat as t,
    dl as n,
    ml as r
} from "./4813494d-bo7e0c29ngt4zgx0.js";

function i(e) {
    if (e instanceof n) return e.payload.message;
    let t = e?.message ?? ``;
    return t.trim().startsWith(`500`) ? `Internal server error. Check console for details.` : t.length > 140 ? t.slice(0, 140) + `...` : t
}
var a = e((() => {
    t(), r()
}));
export {
    a as n, i as t
};
//# sourceMappingURL=6ab34ef3-j08cv609bnjs26in.js.map