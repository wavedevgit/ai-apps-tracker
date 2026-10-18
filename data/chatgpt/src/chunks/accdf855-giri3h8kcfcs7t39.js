import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    aq as t,
    eq as n,
    oq as r,
    uq as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    A2 as a,
    R5 as o,
    _Z as s,
    j2 as c,
    k2 as l,
    vZ as u,
    z5 as d
} from "./conversation-small-fym1zmu9zimymmm1.js";

function f(e) {
    return a(e) || i(e) && t(e) === h
}

function p(e) {
    return e === n.PictureV2 || f(e)
}

function m(e, t) {
    let r = e.filter(e => u(e, t)),
        i = o(r),
        a = c(i, `document`)?.systemHint,
        s = c(i, `presentation`)?.systemHint,
        l = c(i, `spreadsheet`)?.systemHint,
        d = c(i, `site`)?.systemHint,
        f = r.find(e => e.systemHint === n.PictureV2)?.systemHint;
    return {
        ...a == null ? {} : {
            document: a
        },
        ...f == null ? {} : {
            image: f
        },
        ...s == null ? {} : {
            powerpoint: s
        },
        ...d == null ? {} : {
            site: d
        },
        ...l == null ? {} : {
            spreadsheet: l
        }
    }
}
var h, g = e((() => {
    l(), s(), d(), r(), h = `visualize`
}));
export {
    m as i, f as n, p as r, g as t
};
//# sourceMappingURL=accdf855-giri3h8kcfcs7t39.js.map