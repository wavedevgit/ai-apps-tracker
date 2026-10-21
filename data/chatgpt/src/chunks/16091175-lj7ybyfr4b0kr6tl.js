import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    aat as t,
    fL as n,
    grt as r,
    hrt as i,
    iat as a,
    mrt as o,
    sat as s,
    uL as c
} from "./4813494d-tap9fxyhk4ehe0bs.js";

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

function h(e, t) {
    navigator.doNotTrack !== `1` && !n() && a.getBooleanCookie(s.ConsentAnalytics) === !0 && i.count(r.DEFAULT, e, {
        web_frontend: `core_web`,
        ...t
    })
}
var g = e((() => {
    c(), t(), o()
}));
export {
    d as a, l as i, m as n, u as o, p as r, f as s, g as t
};
//# sourceMappingURL=16091175-lj7ybyfr4b0kr6tl.js.map