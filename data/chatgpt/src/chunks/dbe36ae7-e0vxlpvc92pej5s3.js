import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Sat as t,
    bat as n,
    yat as r
} from "./4813494d-d7xm9wsvhdfbag9a.js";

function i(e) {
    return e != null && s.test(e)
}

function a(e) {
    i(e) && r.setCookie(t.SignupRedirectUrl, e, {
        maxAge: c,
        path: `/`
    })
}

function o() {
    r.getCookie(t.SignupRedirectUrl)?.startsWith(`/paid-image-handoff?token=`) && r.deleteCookie(t.SignupRedirectUrl, {
        path: `/`
    })
}
var s, c, l = e((() => {
    n(), s = /^\/paid-image-handoff\?token=[A-Za-z0-9_-]{43}$/, c = 1800
}));
export {
    l as n, a as r, o as t
};
//# sourceMappingURL=dbe36ae7-e0vxlpvc92pej5s3.js.map