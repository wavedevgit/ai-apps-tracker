import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    J5 as r,
    R8 as i
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as a,
    Vn as o,
    wn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function c(e) {
    "use forget";
    let t = (0, u.c)(5),
        {
            multiselectEnabled$: n,
            children: r
        } = e,
        i;
    t[0] === n ? i = t[1] : (i = {
        multiselectEnabled$: n
    }, t[0] = n, t[1] = i);
    let a;
    return t[2] !== r || t[3] !== i ? (a = (0, f.jsx)(p.Provider, {
        value: i,
        children: r
    }), t[2] = r, t[3] = i, t[4] = a) : a = t[4], a
}

function l() {
    "use forget";
    let {
        multiselectEnabled$: e
    } = (0, d.useContext)(p);
    return r(e)
}
var u, d, f, p, m = e((() => {
    u = s(), n(), d = t(o()), f = a(), p = (0, d.createContext)({
        multiselectEnabled$: i(!0, {
            name: `pageTableMultiselectEnabled`
        })
    })
}));
export {
    m as n, l as r, c as t
};
//# sourceMappingURL=6fd2d070-cv2q02l39gxcjjrr.js.map