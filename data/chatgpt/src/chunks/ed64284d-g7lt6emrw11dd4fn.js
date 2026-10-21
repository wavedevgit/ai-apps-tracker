import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $_t as t,
    LRt as n,
    L_t as r,
    Q_t as i,
    X_t as a,
    zRt as o
} from "./conversation-small-ocicxxw6jegn4vux.js";
var s, c, l, u, d, f = e((() => {
    n(), r(), i(), s = new Map, c = null, l = {
        xs: 380,
        sm: 576,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536
    }, u = e => {
        if (!a || typeof getComputedStyle != `function`) {
            let t = e in l ? e : `lg`;
            return l[t]
        }
        if (!s.has(e)) {
            c ||= getComputedStyle(document.documentElement);
            let n = parseInt(c.getPropertyValue(`--breakpoint-${e}`).trim().replace(`px`, ``), 10);
            if (!n) {
                t && console.warn(`--breakpoint-${e} is not defined in :root. Falling back to default breakpoint map.\nThis usually means your postcss breakpoints and PlatformUIKit.Breakpoint types are out of sync.`);
                let n = e in l ? e : `lg`;
                return l[n]
            }
            s.set(e, n)
        }
        return s.get(e)
    }, d = (e, t) => o(`(min-width: ${u(e)}px)`, t)
}));
export {
    d as n, f as t
};
//# sourceMappingURL=ed64284d-g7lt6emrw11dd4fn.js.map