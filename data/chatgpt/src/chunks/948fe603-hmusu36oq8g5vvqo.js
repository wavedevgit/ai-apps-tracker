import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aat as t,
    Q7 as n,
    Y7 as r,
    kat as i
} from "./4813494d-nxpmzchfjvwqts17.js";

function a() {
    return new URL(i, globalThis.location?.origin ?? `http://localhost`).toString().replace(/\/$/, ``)
}

function o(e) {
    return {
        overrideBaseUrl: a(),
        overrideUrl: t => (t.pathname = t.pathname.replace(encodeURIComponent(e), e), t)
    }
}
var s, c = e((() => {
    t(), n(), s = new r({
        baseUrl: i
    })
}));
export {
    o as n, c as r, s as t
};
//# sourceMappingURL=948fe603-hmusu36oq8g5vvqo.js.map