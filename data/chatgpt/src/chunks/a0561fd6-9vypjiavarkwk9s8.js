import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bnt as t,
    Jot as n,
    Knt as r,
    Tat as i,
    Yot as a,
    f8 as o,
    fl as s,
    jat as c,
    pl as l,
    x8 as u,
    y8 as d
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    a as f,
    i as p,
    n as m,
    t as h
} from "./333fd2ad-b5u70cfshpk5iylu.js";

function g(e) {
    return t(`2732192698`)
}
var _ = e((() => {
    r()
}));

function v(e) {
    return [...y, e]
}
var y, b = e((() => {
    y = [`wham`, `config`, `enterprise-managed`]
}));

function x() {
    return S(p())
}
var S, C = e((() => {
    a(), o(), c(), r(), _(), f(), m(), l(), b(), S = u(e => d(() => ({
        queryKey: v(e),
        queryFn: () => s.getEnterpriseManagedConfig(e),
        retry: (e, t) => !(t instanceof i && (t.status === 403 || t.status === 404)) && e < 3,
        enabled: e != null
    }), {
        enabled$: () => {
            let r = n();
            return p() === e && h() === `DISABLED` && g(r) && t(`328809575`)
        }
    }))
}));
export {
    b as a, v as i, x as n, _ as o, y as r, g as s, C as t
};
//# sourceMappingURL=a0561fd6-9vypjiavarkwk9s8.js.map