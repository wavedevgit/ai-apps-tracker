import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    fH as n,
    uH as r
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as i,
    Vn as a,
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function s(e) {
    "use forget";
    let t = (0, l.c)(8),
        {
            children: n,
            slug: r,
            effectiveLocale: i,
            layout: a
        } = e,
        [o, s] = (0, u.useState)(0),
        c;
    t[0] !== i || t[1] !== a || t[2] !== r || t[3] !== o ? (c = {
        effectiveLocale: i,
        layout: a,
        slug: r,
        theme: o,
        setTheme: s
    }, t[0] = i, t[1] = a, t[2] = r, t[3] = o, t[4] = c) : c = t[4];
    let p;
    return t[5] !== n || t[6] !== c ? (p = (0, d.jsx)(f.Provider, {
        value: c,
        children: n
    }), t[5] = n, t[6] = c, t[7] = p) : p = t[7], p
}

function c() {
    "use forget";
    let e = (0, u.useContext)(f);
    if (e == null) throw Error(`useContentfulPageContext hook must be used within ContentfulPageProvider`);
    return e
}
var l, u, d, f, p = e((() => {
    l = o(), n(), u = t(a()), d = i(), f = (0, u.createContext)({
        effectiveLocale: r,
        layout: void 0,
        slug: `/`,
        theme: 0,
        setTheme: () => {}
    })
}));
export {
    p as n, c as r, s as t
};
//# sourceMappingURL=bb47c0a1-is9kvtqictpz4a8f.js.map