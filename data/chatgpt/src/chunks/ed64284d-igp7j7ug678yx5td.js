import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BRt as t,
    F_t as n,
    J_t as r,
    RRt as i,
    X_t as a,
    Z_t as o
} from "./conversation-small-dwpaie1hln28efxb.js";
var s, c, l, u, d, f = e((() => {
    i(), n(), a(), s = new Map, c = null, l = {
        xs: 380,
        sm: 576,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536
    }, u = e => {
        if (!r || typeof getComputedStyle != `function`) {
            let t = e in l ? e : `lg`;
            return l[t]
        }
        if (!s.has(e)) {
            c ||= getComputedStyle(document.documentElement);
            let t = parseInt(c.getPropertyValue(`--breakpoint-${e}`).trim().replace(`px`, ``), 10);
            if (!t) {
                o && console.warn(`--breakpoint-${e} is not defined in :root. Falling back to default breakpoint map.\nThis usually means your postcss breakpoints and PlatformUIKit.Breakpoint types are out of sync.`);
                let t = e in l ? e : `lg`;
                return l[t]
            }
            s.set(e, t)
        }
        return s.get(e)
    }, d = (e, n) => t(`(min-width: ${u(e)}px)`, n)
}));
export {
    d as n, f as t
};
//# sourceMappingURL=ed64284d-igp7j7ug678yx5td.js.map