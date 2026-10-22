import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    s as t,
    w as n
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    e8 as r,
    i8 as i,
    n8 as a
} from "./conversation-small-fh0oqifngkf5rvl1.js";
var o, s = e((() => {
    o = 60 * 1e3
}));

function c({
    accountId: e,
    enabled: t,
    projectId: a
}) {
    return n({
        enabled: t,
        queryFn: () => r(a),
        queryKey: i(e, a),
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
    t(), a(), s()
}));
export {
    s as a, o as i, u as n, l as r, c as t
};
//# sourceMappingURL=d8c30629-f8as2iifpxosf5d8.js.map