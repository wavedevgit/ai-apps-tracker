import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    n1 as n,
    u1 as r
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    N as i,
    Vn as a,
    s as o,
    wn as s
} from "./2340486e-oc6d2eodbcrmxur3.js";

function c() {
    "use forget";
    let e = (0, l.c)(3),
        t = i(),
        r, a;
    return e[0] === t ? (r = e[1], a = e[2]) : (r = () => {
        let e = () => {
                let e = n();
                t.getQueryState(e.queryKey) != null && t.refetchQueries(e, {
                    cancelRefetch: !1
                })
            },
            r = () => {
                document.visibilityState === `visible` && e()
            },
            i = t.getQueryState(n().queryKey);
        return i && Date.now() - i.dataUpdatedAt >= d && e(), document.addEventListener(`visibilitychange`, r), window.addEventListener(`focus`, e), window.addEventListener(`online`, e), () => {
            document.removeEventListener(`visibilitychange`, r), window.removeEventListener(`focus`, e), window.removeEventListener(`online`, e)
        }
    }, a = [t], e[0] = t, e[1] = r, e[2] = a), (0, u.useEffect)(r, a), null
}
var l, u, d, f = e((() => {
    l = s(), r(), o(), u = t(a()), d = 6e4
}));
export {
    f as n, c as t
};
//# sourceMappingURL=b5b42835-fmsn5ldafjkha1xl.js.map