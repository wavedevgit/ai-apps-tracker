import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    s as t,
    w as n
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    J6 as r,
    K6 as i,
    X6 as a
} from "./conversation-small-fym1zmu9zimymmm1.js";
var o, s = e((() => {
    o = 60 * 1e3
}));

function c({
    accountId: e,
    enabled: t,
    projectId: r
}) {
    return n({
        enabled: t,
        queryFn: () => i(r),
        queryKey: a(e, r),
        retry: !1,
        staleTime: o
    })
}

function l(e, t) {
    return e == null || t == null || t === e.url ? e : {
        ...e,
        url: t
    }
}
var u = e((() => {
    t(), r(), s()
}));
export {
    s as a, o as i, u as n, l as r, c as t
};
//# sourceMappingURL=d8c30629-hxy6vraw9wlimdke.js.map