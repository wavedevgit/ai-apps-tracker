import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Nit as t,
    Pit as n,
    l7 as r,
    o7 as i
} from "./4813494d-cb22y2w19zwyshmt.js";

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
//# sourceMappingURL=948fe603-jmn3j8ixfx3i0uqo.js.map