import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aq as t,
    Pq as n,
    kq as r,
    wq as i
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    F5 as a,
    I2 as o,
    L2 as s,
    P5 as c,
    R2 as l,
    SZ as u,
    xZ as d
} from "./conversation-small-i79e9c315w50am5f.js";

function f(e) {
    return s(e) || n(e) && r(e) === h
}

function p(e) {
    return e === i.PictureV2 || f(e)
}

function m(e, t) {
    let n = e.filter(e => u(e, t)),
        r = c(n),
        a = l(r, `document`)?.systemHint,
        o = l(r, `presentation`)?.systemHint,
        s = l(r, `spreadsheet`)?.systemHint,
        d = l(r, `site`)?.systemHint,
        f = n.find(e => e.systemHint === i.PictureV2)?.systemHint;
    return {
        ...a == null ? {} : {
            document: a
        },
        ...f == null ? {} : {
            image: f
        },
        ...o == null ? {} : {
            powerpoint: o
        },
        ...d == null ? {} : {
            site: d
        },
        ...s == null ? {} : {
            spreadsheet: s
        }
    }
}
var h, g = e((() => {
    o(), d(), a(), t(), h = `visualize`
}));
export {
    m as i, f as n, p as r, g as t
};
//# sourceMappingURL=accdf855-ov7ch2lvmw10pj5l.js.map