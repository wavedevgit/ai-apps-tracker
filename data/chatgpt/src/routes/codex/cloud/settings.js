import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    Sot as n,
    i5 as r,
    xot as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as a,
    Bn as o,
    Ut as s,
    jt as c,
    lt as l,
    ut as u,
    wn as d
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    FMt as f,
    IMt as p
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as m,
    o as h,
    s as g,
    t as _
} from "./a0561fd6-b9jd91ykzfhn14lv.js";
import {
    n as v,
    t as y
} from "./333fd2ad-m2votvxaos5jmvvo.js";

function b(e) {
    return C.some(t => e === t || e.startsWith(`${t}/`))
}
var x, S, C, w, T, E = e((() => {
    a(), x = d(), n(), t(), h(), f(), v(), _(), S = o(), C = [`/codex/cloud/settings/access-tokens`, `/codex/cloud/settings/analytics`, `/codex/cloud/settings/managed-configs`, `/codex/cloud/settings/policies`], w = () => {
        "use forget";
        let e = (0, x.c)(5),
            t = i(),
            n = p(),
            a = r(y),
            o = r(m),
            s = g(t),
            d = c();
        if (b(d.pathname)) {
            let t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, S.jsx)(u, {}), e[0] = t) : t = e[0], t
        }
        let f = n === `DISABLED` && s && (a === `LOADING` || a !== `ENABLED` && o.isLoading);
        if (n === `LOADING` || f) return null;
        if (n === `DISABLED`) {
            let t = s && (a === `ENABLED` || !o.isError && o.data?.capabilities?.can_view === !0) ? `/codex/cloud/settings/policies` : `/codex/cloud/access`,
                n;
            return e[1] === t ? n = e[2] : (n = (0, S.jsx)(l, {
                to: t,
                replace: !0
            }), e[1] = t, e[2] = n), n
        }
        if (d.pathname === `/codex/cloud/settings`) {
            let t;
            return e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, S.jsx)(l, {
                to: `/codex/cloud/settings/general`,
                replace: !0
            }), e[3] = t) : t = e[3], t
        }
        let h;
        return e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, S.jsx)(u, {}), e[4] = h) : h = e[4], h
    }, T = s(w)
}));
e((() => {
    E()
}))();
export {
    T as
    default
};
//# sourceMappingURL=codex.cloud.settings-lc8ytn1h.js.map