import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F7 as t,
    R7 as n,
    dat as r,
    uat as i
} from "./4813494d-dfpv67hlp00pbohr.js";

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
    r(), n(), s = new t({
        baseUrl: i
    })
}));
export {
    o as n, c as r, s as t
};
//# sourceMappingURL=948fe603-cpky6ejpmy9ea971.js.map