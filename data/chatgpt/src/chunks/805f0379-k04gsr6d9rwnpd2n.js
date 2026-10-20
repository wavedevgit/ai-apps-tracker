import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bn as n,
    Hn as r,
    Tn as i,
    Vn as a,
    zn as o
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    MJt as s,
    jJt as c,
    l_n as l,
    uvn as u,
    wvn as d
} from "./conversation-small-cawdu7il3ha6y70c.js";

function f(e) {
    "use forget";
    let t = (0, m.c)(17),
        {
            dateString: r,
            capitalizeJustNow: i
        } = e,
        a = i === void 0 || i,
        o = n(),
        [c, l] = (0, h.useState)(p),
        f;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = () => l(new Date), t[0] = f) : f = t[0], s(f, 6e4);
    let g;
    t[1] === r ? g = t[2] : (g = new Date(r), t[1] = r, t[2] = g);
    let _ = g,
        v = d(c, _),
        y = u(c, _);
    if (y < 1) {
        let e;
        return t[5] !== a || t[6] !== o ? (e = o.formatMessage(a ? {
            id: `wham.formattedRelativeDateTime.justNow`,
            defaultMessage: `Just now`,
            description: `Standalone label indicating something happened less than a minute ago in UI surfaces such as menus, rows, or status labels where sentence casing is appropriate.`
        } : {
            id: `wham.formattedRelativeDateTime.justNowLowercase`,
            defaultMessage: `just now`,
            description: `Inline label indicating something happened less than a minute ago when it is inserted after preceding text such as 'Last saved', so it should remain lowercase.`
        }), t[5] = a, t[6] = o, t[7] = e) : e = t[7], e
    } else if (y < 60) {
        let e;
        return t[8] !== o || t[9] !== y ? (e = o.formatMessage({
            id: `wham.formattedRelativeDateTime.minAgo`,
            defaultMessage: `{numMinsDiff} min ago`
        }, {
            numMinsDiff: y
        }), t[8] = o, t[9] = y, t[10] = e) : e = t[10], e
    } else if (v === 0) {
        let e;
        return t[11] !== _ || t[12] !== o.locale ? (e = _.toLocaleTimeString(o.locale, {
            hour: `numeric`,
            minute: `2-digit`
        }), t[11] = _, t[12] = o.locale, t[13] = e) : e = t[13], e
    } else {
        let e;
        return t[14] !== _ || t[15] !== o.locale ? (e = _.toLocaleDateString(o.locale, {
            month: `short`,
            day: `numeric`
        }), t[14] = _, t[15] = o.locale, t[16] = e) : e = t[16], e
    }
}

function p() {
    return new Date
}
var m, h, g = e((() => {
    m = i(), c(), l(), h = t(r()), o(), a()
}));
export {
    g as n, f as t
};
//# sourceMappingURL=805f0379-k04gsr6d9rwnpd2n.js.map