import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Qit as t,
    Xit as n,
    Yit as r,
    art as i,
    dL as a,
    lL as o,
    ort as s,
    srt as c
} from "./4813494d-ed29bs6yiwucn7st.js";

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
    navigator.doNotTrack !== `1` && !a() && r.getBooleanCookie(t.ConsentAnalytics) === !0 && s.count(c.DEFAULT, e, {
        web_frontend: `core_web`,
        ...n
    })
}
var g = e((() => {
    o(), n(), i()
}));
export {
    d as a, l as i, m as n, u as o, p as r, f as s, g as t
};
//# sourceMappingURL=16091175-ks8nwl10aiuesscs.js.map