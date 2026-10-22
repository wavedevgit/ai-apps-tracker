import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    _at as t,
    gat as n,
    yat as r
} from "./4813494d-t80q9ew944ej0mgk.js";

function i(e) {
    return e != null && s.test(e)
}

function a(e) {
    i(e) && n.setCookie(r.SignupRedirectUrl, e, {
        maxAge: c,
        path: `/`
    })
}

function o() {
    n.getCookie(r.SignupRedirectUrl)?.startsWith(`/paid-image-handoff?token=`) && n.deleteCookie(r.SignupRedirectUrl, {
        path: `/`
    })
}
var s, c, l = e((() => {
    t(), s = /^\/paid-image-handoff\?token=[A-Za-z0-9_-]{43}$/, c = 1800
}));
export {
    l as n, a as r, o as t
};
//# sourceMappingURL=dbe36ae7-ey7x5c3y1znkkscu.js.map