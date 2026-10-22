import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Art as t,
    Ort as n,
    _L as r,
    hL as i,
    krt as a,
    vat as o,
    xat as s,
    yat as c
} from "./4813494d-nxpmzchfjvwqts17.js";

function l(e) {
    h(`profiles_v2.plugin_resolution_result`, {
        result: e
    })
}

function u(e) {
    h(`profiles_v2.showcase_save_result`, {
        result: e
    })
}

function d(e, t) {
    h(`profiles_v2.profile_load_result`, {
        result: e,
        view: t
    })
}

function f(e) {
    h(`profiles_v2.skill_install_result`, {
        result: e
    })
}

function p(e) {
    h(`profiles_v2.photo_save_result`, {
        result: e
    })
}

function m(e) {
    h(`profiles_v2.photo_processing_result`, {
        result: e
    })
}

function h(e, n) {
    navigator.doNotTrack !== `1` && !r() && o.getBooleanCookie(s.ConsentAnalytics) === !0 && a.count(t.DEFAULT, e, {
        web_frontend: `core_web`,
        ...n
    })
}
var g = e((() => {
    i(), c(), n()
}));
export {
    d as a, l as i, m as n, u as o, p as r, f as s, g as t
};
//# sourceMappingURL=16091175-k74c4tgug2moumo7.js.map