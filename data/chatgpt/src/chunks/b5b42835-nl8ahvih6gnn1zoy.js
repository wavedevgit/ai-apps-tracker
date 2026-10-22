import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    q1 as n,
    z1 as r
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    N as i,
    Vn as a,
    s as o,
    wn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function c() {
    "use forget";
    let e = (0, l.c)(3),
        t = i(),
        n, a;
    return e[0] === t ? (n = e[1], a = e[2]) : (n = () => {
        let e = () => {
                let e = r();
                t.getQueryState(e.queryKey) != null && t.refetchQueries(e, {
                    cancelRefetch: !1
                })
            },
            n = () => {
                document.visibilityState === `visible` && e()
            },
            i = t.getQueryState(r().queryKey);
        return i && Date.now() - i.dataUpdatedAt >= d && e(), document.addEventListener(`visibilitychange`, n), window.addEventListener(`focus`, e), window.addEventListener(`online`, e), () => {
            document.removeEventListener(`visibilitychange`, n), window.removeEventListener(`focus`, e), window.removeEventListener(`online`, e)
        }
    }, a = [t], e[0] = t, e[1] = n, e[2] = a), (0, u.useEffect)(n, a), null
}
var l, u, d, f = e((() => {
    l = s(), n(), o(), u = t(a()), d = 6e4
}));
export {
    f as n, c as t
};
//# sourceMappingURL=b5b42835-nl8ahvih6gnn1zoy.js.map