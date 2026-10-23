import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    I7 as t,
    Lat as n,
    N7 as r,
    Rat as i
} from "./4813494d-mdvd4786a87166cc.js";

function a() {
    return new URL(n, globalThis.location?.origin ?? `http://localhost`).toString().replace(/\/$/, ``)
}

function o(e) {
    return {
        overrideBaseUrl: a(),
        overrideUrl: t => (t.pathname = t.pathname.replace(encodeURIComponent(e), e), t)
    }
}
var s, c = e((() => {
    i(), t(), s = new r({
        baseUrl: n
    })
}));
export {
    o as n, c as r, s as t
};
//# sourceMappingURL=948fe603-r9e0wcvjpd8t98jm.js.map