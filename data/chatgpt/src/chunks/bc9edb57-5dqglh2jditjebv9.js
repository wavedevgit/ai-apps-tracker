import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Tn as t
} from "./2340486e-komxp8tzs51ny4jj.js";

function n(e, t) {
    "use forget";
    let n = (0, r.c)(3),
        a = t === void 0 ? i : t,
        o;
    return n[0] !== a || n[1] !== e ? (o = t => {
        if (t == null || e == null) return;
        let n, r = () => {
                typeof IntersectionObserver > `u` || (n = new IntersectionObserver(t => {
                    let [r] = t;
                    !r.isIntersecting || r.intersectionRatio < .5 || (e(), n?.disconnect())
                }, {
                    threshold: .5
                }), n.observe(t))
            },
            i;
        return a === 0 ? r() : i = window.setTimeout(r, a), () => {
            i != null && window.clearTimeout(i), n?.disconnect()
        }
    }, n[0] = a, n[1] = e, n[2] = o) : o = n[2], o
}
var r, i, a = e((() => {
    r = t(), i = 250
}));
export {
    n,
    a as t
};
//# sourceMappingURL=bc9edb57-5dqglh2jditjebv9.js.map