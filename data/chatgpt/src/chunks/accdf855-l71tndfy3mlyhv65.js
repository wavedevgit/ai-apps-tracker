import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aq as t,
    Pq as n,
    kq as r,
    wq as i
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    CZ as a,
    F5 as o,
    I5 as s,
    L2 as c,
    R2 as l,
    SZ as u,
    z2 as d
} from "./conversation-small-m7dgsxtvvivh3e6t.js";

function f(e) {
    return l(e) || n(e) && r(e) === h
}

function p(e) {
    return e === i.PictureV2 || f(e)
}

function m(e, t) {
    let n = e.filter(e => a(e, t)),
        r = o(n),
        s = d(r, `document`)?.systemHint,
        c = d(r, `presentation`)?.systemHint,
        l = d(r, `spreadsheet`)?.systemHint,
        u = d(r, `site`)?.systemHint,
        f = n.find(e => e.systemHint === i.PictureV2)?.systemHint;
    return {
        ...s == null ? {} : {
            document: s
        },
        ...f == null ? {} : {
            image: f
        },
        ...c == null ? {} : {
            powerpoint: c
        },
        ...u == null ? {} : {
            site: u
        },
        ...l == null ? {} : {
            spreadsheet: l
        }
    }
}
var h, g = e((() => {
    c(), u(), s(), t(), h = `visualize`
}));
export {
    m as i, f as n, p as r, g as t
};
//# sourceMappingURL=accdf855-l71tndfy3mlyhv65.js.map