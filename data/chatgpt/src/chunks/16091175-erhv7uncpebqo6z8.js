import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Art as t,
    Sat as n,
    _L as r,
    bat as i,
    hL as a,
    jrt as o,
    krt as s,
    yat as c
} from "./4813494d-r54yv6lv29x4ew99.js";

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

function h(e, i) {
    navigator.doNotTrack !== `1` && !r() && c.getBooleanCookie(n.ConsentAnalytics) === !0 && t.count(o.DEFAULT, e, {
        web_frontend: `core_web`,
        ...i
    })
}
var g = e((() => {
    a(), i(), s()
}));
export {
    d as a, l as i, m as n, u as o, p as r, f as s, g as t
};
//# sourceMappingURL=16091175-erhv7uncpebqo6z8.js.map