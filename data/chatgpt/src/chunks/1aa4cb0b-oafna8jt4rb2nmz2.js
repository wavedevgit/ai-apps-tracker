import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    X5 as n,
    Y5 as r
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as i,
    Vn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n as o,
    t as s
} from "./7004d116-dtkyeg51rb6ho84f.js";
var c, l, u, d, f = e((() => {
        n(), c = t(a()), o(), l = i(), u = new Set, d = ({
            src: e,
            className: t,
            draggable: n = !1,
            onLoad: i,
            onError: a,
            forceRenderAfterLoadFail: o = !1,
            ...d
        }) => {
            let [f, p] = (0, c.useState)(() => e && u.has(e)), [m, h] = (0, c.useState)(!1), g = f || m && o;
            return !e || !o && m ? null : (0, l.jsx)(`img`, {
                ...d,
                src: e,
                className: r(s.Image, t),
                onLoad: t => {
                    p(!0), u.add(e), i?.(t)
                },
                onError: e => {
                    h(!0), a?.(e)
                },
                "data-loaded": g ? `` : void 0,
                draggable: n
            })
        }
    })),
    p = e((() => {
        f()
    }));
export {
    d as n, f as r, p as t
};
//# sourceMappingURL=1aa4cb0b-oafna8jt4rb2nmz2.js.map