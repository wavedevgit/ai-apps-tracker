import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dat as t,
    Oat as n,
    Q7 as r,
    Y7 as i
} from "./4813494d-t80q9ew944ej0mgk.js";

function a() {
    return new URL(t, globalThis.location?.origin ?? `http://localhost`).toString().replace(/\/$/, ``)
}

function o(e) {
    return {
        overrideBaseUrl: a(),
        overrideUrl: t => (t.pathname = t.pathname.replace(encodeURIComponent(e), e), t)
    }
}
var s, c = e((() => {
    n(), r(), s = new i({
        baseUrl: t
    })
}));
export {
    o as n, c as r, s as t
};
//# sourceMappingURL=948fe603-d31hs2s3i0upht6y.js.map