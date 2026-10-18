import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Kc as t,
    Yc as n,
    iat as r
} from "./4813494d-cb22y2w19zwyshmt.js";

function i(e) {
    if (e instanceof t) return e.payload.message;
    let n = e?.message ?? ``;
    return n.trim().startsWith(`500`) ? `Internal server error. Check console for details.` : n.length > 140 ? n.slice(0, 140) + `...` : n
}
var a = e((() => {
    r(), n()
}));
export {
    a as n, i as t
};
//# sourceMappingURL=6ab34ef3-bk9py1koawgm2ukb.js.map