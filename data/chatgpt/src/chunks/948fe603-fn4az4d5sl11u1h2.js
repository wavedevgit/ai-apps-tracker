import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    Aat as n,
    X7 as r,
    jat as i
} from "./4813494d-i89nb6zlze66idsz.js";

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
//# sourceMappingURL=948fe603-fn4az4d5sl11u1h2.js.map