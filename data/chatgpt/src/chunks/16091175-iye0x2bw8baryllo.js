import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Qit as t,
    Zit as n,
    crt as r,
    dL as i,
    eat as a,
    lL as o,
    lrt as s,
    srt as c
} from "./4813494d-qsuygr73qjc6rh65.js";

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
    navigator.doNotTrack !== `1` && !i() && n.getBooleanCookie(a.ConsentAnalytics) === !0 && r.count(s.DEFAULT, e, {
        web_frontend: `core_web`,
        ...t
    })
}
var g = e((() => {
    o(), t(), c()
}));
export {
    d as a, l as i, m as n, u as o, p as r, f as s, g as t
};
//# sourceMappingURL=16091175-iye0x2bw8baryllo.js.map