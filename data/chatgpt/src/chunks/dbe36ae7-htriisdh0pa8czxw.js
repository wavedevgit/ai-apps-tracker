import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Qit as t,
    Xit as n,
    Yit as r
} from "./4813494d-ed29bs6yiwucn7st.js";

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
//# sourceMappingURL=dbe36ae7-htriisdh0pa8czxw.js.map