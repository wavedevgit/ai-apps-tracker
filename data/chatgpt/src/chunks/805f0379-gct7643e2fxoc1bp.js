import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bn as n,
    Rn as r,
    Vn as i,
    wn as a,
    zn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AJt as s,
    O_n as c,
    Uvn as l,
    jJt as u,
    kvn as d
} from "./conversation-small-i79e9c315w50am5f.js";

function f(e) {
    "use forget";
    let t = (0, m.c)(17),
        {
            dateString: n,
            capitalizeJustNow: r
        } = e,
        i = r === void 0 || r,
        a = o(),
        [s, c] = (0, h.useState)(p),
        f;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = () => c(new Date), t[0] = f) : f = t[0], u(f, 6e4);
    let g;
    t[1] === n ? g = t[2] : (g = new Date(n), t[1] = n, t[2] = g);
    let _ = g,
        v = l(s, _),
        y = d(s, _);
    if (y < 1) {
        let e;
        return t[5] !== i || t[6] !== a ? (e = a.formatMessage(i ? {
            id: `wham.formattedRelativeDateTime.justNow`,
            defaultMessage: `Just now`,
            description: `Standalone label indicating something happened less than a minute ago in UI surfaces such as menus, rows, or status labels where sentence casing is appropriate.`
        } : {
            id: `wham.formattedRelativeDateTime.justNowLowercase`,
            defaultMessage: `just now`,
            description: `Inline label indicating something happened less than a minute ago when it is inserted after preceding text such as 'Last saved', so it should remain lowercase.`
        }), t[5] = i, t[6] = a, t[7] = e) : e = t[7], e
    } else if (y < 60) {
        let e;
        return t[8] !== a || t[9] !== y ? (e = a.formatMessage({
            id: `wham.formattedRelativeDateTime.minAgo`,
            defaultMessage: `{numMinsDiff} min ago`
        }, {
            numMinsDiff: y
        }), t[8] = a, t[9] = y, t[10] = e) : e = t[10], e
    } else if (v === 0) {
        let e;
        return t[11] !== _ || t[12] !== a.locale ? (e = _.toLocaleTimeString(a.locale, {
            hour: `numeric`,
            minute: `2-digit`
        }), t[11] = _, t[12] = a.locale, t[13] = e) : e = t[13], e
    } else {
        let e;
        return t[14] !== _ || t[15] !== a.locale ? (e = _.toLocaleDateString(a.locale, {
            month: `short`,
            day: `numeric`
        }), t[14] = _, t[15] = a.locale, t[16] = e) : e = t[16], e
    }
}

function p() {
    return new Date
}
var m, h, g = e((() => {
    m = a(), s(), c(), h = t(i()), r(), n()
}));
export {
    g as n, f as t
};
//# sourceMappingURL=805f0379-gct7643e2fxoc1bp.js.map