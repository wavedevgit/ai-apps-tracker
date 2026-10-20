import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $it as t,
    eat as n,
    nat as r
} from "./4813494d-dfpv67hlp00pbohr.js";

function i(e) {
    return e != null && s.test(e)
}

function a(e) {
    i(e) && t.setCookie(r.SignupRedirectUrl, e, {
        maxAge: c,
        path: `/`
    })
}

function o() {
    t.getCookie(r.SignupRedirectUrl)?.startsWith(`/paid-image-handoff?token=`) && t.deleteCookie(r.SignupRedirectUrl, {
        path: `/`
    })
}
var s, c, l = e((() => {
    n(), s = /^\/paid-image-handoff\?token=[A-Za-z0-9_-]{43}$/, c = 1800
}));
export {
    l as n, a as r, o as t
};
//# sourceMappingURL=dbe36ae7-lhk6ftxtkhbo03i8.js.map