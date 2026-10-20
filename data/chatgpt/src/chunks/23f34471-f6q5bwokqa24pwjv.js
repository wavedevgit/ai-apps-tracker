import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $ as t,
    xt as n
} from "./2340486e-komxp8tzs51ny4jj.js";

function r(e) {
    let t = new URL(e.url),
        n = ``;
    return t.pathname.startsWith(o) ? n = t.pathname.slice(16) : t.pathname.startsWith(a) && (n = t.pathname.slice(7)), `${s}${n}${t.search}`
}

function i(e) {
    throw n(r(e), {
        status: c
    })
}
var a, o, s, c, l = e((() => {
    t(), a = `/record`, o = `/record/meetings`, s = `/meetings`, c = 308
}));
export {
    i as n, l as t
};
//# sourceMappingURL=23f34471-f6q5bwokqa24pwjv.js.map