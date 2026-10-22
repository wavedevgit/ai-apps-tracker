import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Drt as t,
    Ert as n,
    Ort as r,
    _L as i,
    _at as a,
    gat as o,
    hL as s,
    yat as c
} from "./4813494d-itnrgnth03y1sm9d.js";

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
    navigator.doNotTrack !== `1` && !i() && o.getBooleanCookie(c.ConsentAnalytics) === !0 && t.count(r.DEFAULT, e, {
        web_frontend: `core_web`,
        ...n
    })
}
var g = e((() => {
    s(), a(), n()
}));
export {
    d as a, l as i, m as n, u as o, p as r, f as s, g as t
};
//# sourceMappingURL=16091175-gz1texlljqutn92a.js.map