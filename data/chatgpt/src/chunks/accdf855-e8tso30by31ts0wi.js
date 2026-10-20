import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Eq as t,
    Iq as n,
    Mq as r,
    jq as i
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    B5 as a,
    M2 as o,
    N2 as s,
    V5 as c,
    bZ as l,
    j2 as u,
    yZ as d
} from "./conversation-small-l6tnsr2xfn2d55kk.js";

function f(e) {
    return o(e) || n(e) && i(e) === h
}

function p(e) {
    return e === t.PictureV2 || f(e)
}

function m(e, n) {
    let r = e.filter(e => l(e, n)),
        i = a(r),
        o = s(i, `document`)?.systemHint,
        c = s(i, `presentation`)?.systemHint,
        u = s(i, `spreadsheet`)?.systemHint,
        d = s(i, `site`)?.systemHint,
        f = r.find(e => e.systemHint === t.PictureV2)?.systemHint;
    return {
        ...o == null ? {} : {
            document: o
        },
        ...f == null ? {} : {
            image: f
        },
        ...c == null ? {} : {
            powerpoint: c
        },
        ...d == null ? {} : {
            site: d
        },
        ...u == null ? {} : {
            spreadsheet: u
        }
    }
}
var h, g = e((() => {
    u(), d(), c(), r(), h = `visualize`
}));
export {
    m as i, f as n, p as r, g as t
};
//# sourceMappingURL=accdf855-e8tso30by31ts0wi.js.map