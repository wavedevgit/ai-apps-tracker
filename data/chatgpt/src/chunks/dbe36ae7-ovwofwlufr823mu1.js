import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    vat as t,
    xat as n,
    yat as r
} from "./4813494d-nxpmzchfjvwqts17.js";

function i(e) {
    return e != null && s.test(e)
}

function a(e) {
    i(e) && t.setCookie(n.SignupRedirectUrl, e, {
        maxAge: c,
        path: `/`
    })
}

function o() {
    t.getCookie(n.SignupRedirectUrl)?.startsWith(`/paid-image-handoff?token=`) && t.deleteCookie(n.SignupRedirectUrl, {
        path: `/`
    })
}
var s, c, l = e((() => {
    r(), s = /^\/paid-image-handoff\?token=[A-Za-z0-9_-]{43}$/, c = 1800
}));
export {
    l as n, a as r, o as t
};
//# sourceMappingURL=dbe36ae7-ovwofwlufr823mu1.js.map