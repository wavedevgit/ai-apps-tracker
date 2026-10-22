import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    iGn as t,
    nGn as n
} from "./conversation-small-m08q51xmfe7gjq3d.js";

function r(e) {
    return e.type === `element`
}

function i(e) {
    return r(e) ? e.tagName === `code` : !1
}

function a() {
    return function(e) {
        t(e, `element`, function(e, t, n) {
            i(e) && (n && r(n) && n.tagName === `pre` ? e.properties.inline = !1 : e.properties.inline = !0)
        })
    }
}
var o = e((() => {
    n()
}));
export {
    a as n, o as t
};
//# sourceMappingURL=e87af100-gjole8ipij6r1nlu.js.map