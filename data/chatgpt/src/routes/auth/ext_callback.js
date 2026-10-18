import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B1 as n,
    Q1 as r,
    R1 as i,
    X1 as a,
    bit as o,
    yit as s
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as c,
    Ht as l,
    Ut as u,
    Vn as d,
    o as f
} from "./2340486e-oc6d2eodbcrmxur3.js";
var p, m, h, g = e((() => {
    c(), n(), r(), o(), p = f(), m = t(d()), h = u(function() {
        "use no forget";
        let [e] = l(), t = e.get(`next`), n = t?.startsWith(`/`) ? t : `/`, r = `/auth/ext_callback_refresh?next=` + encodeURIComponent(n);
        return (0, m.useEffect)(() => {
            (0, p.signIn)(i(e), {
                callbackUrl: r || `/`
            }, {
                ...a(s())
            })
        }, []), null
    })
}));
e((() => {
    g()
}))();
export {
    h as
    default
};
//# sourceMappingURL=auth.ext_callback-k4di836t.js.map