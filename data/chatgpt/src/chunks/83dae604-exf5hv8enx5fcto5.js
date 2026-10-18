import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Vn as n
} from "./2340486e-oc6d2eodbcrmxur3.js";

function r(e, t) {
    (0, i.useEffect)(() => {
        let n = n => {
            e.every(e => !e.current?.contains(n.target)) && t()
        };
        return document.addEventListener(`click`, n), () => {
            document.removeEventListener(`click`, n)
        }
    }, [t, e])
}
var i, a = e((() => {
    i = t(n())
}));
export {
    r as n, a as t
};
//# sourceMappingURL=83dae604-exf5hv8enx5fcto5.js.map