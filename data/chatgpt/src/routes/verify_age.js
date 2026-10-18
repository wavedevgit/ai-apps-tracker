import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ant as n,
    Dit as r,
    Nrt as i,
    Prt as a,
    a7 as o,
    iy as s,
    kit as c,
    knt as l,
    l7 as u,
    qv as d,
    ry as f
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as p,
    Bn as m,
    Pt as h,
    Ut as g,
    Vn as _,
    wn as v
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $st as y,
    ect as b
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    a as x,
    i as S,
    o as C,
    s as w
} from "./8b34dbc2-gf9wnwcahty27ylx.js";

function T(e) {
    return typeof e == `object` && !!e && `has_verified_age_or_dob` in e
}
var E, D, O, k, A, j, M = e((() => {
    p(), E = v(), s(), y(), i(), c(), l(), u(), D = t(_()), C(), O = m(), k = x, A = w, j = g(function() {
        "use forget";
        let e = (0, E.c)(5),
            t;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = a(), e[0] = t) : t = e[0];
        let i = t,
            s = (0, D.useRef)(!1),
            c = h(),
            l, u;
        e[1] === c ? (l = e[2], u = e[3]) : (l = () => {
            if (!i || s.current) return;
            s.current = !0;
            let e = !0,
                t = null,
                a = () => {
                    let e = f(d.Account);
                    c({
                        pathname: `/`,
                        ...e
                    }, {
                        replace: !0
                    })
                };
            return (async () => {
                let i = !1;
                try {
                    i = !!(await o.safeGet(`/settings/age_verification_enabled`)).enabled
                } catch (e) {
                    let t = e;
                    n.error(`Failed to fetch age verification feature status`, {
                        error: t
                    })
                }
                if (!i || !e) {
                    a();
                    return
                }
                let s = !1;
                try {
                    let e = await o.safeGet(`/settings/is_adult`);
                    T(e) && (s = !!e.has_verified_age_or_dob)
                } catch (e) {
                    let t = e;
                    n.error(`Failed to fetch age verification status`, {
                        error: t
                    })
                }
                if (e) {
                    if (s) {
                        a();
                        return
                    }
                    t = b({}), r.addAction(`chatgpt.web.verifyAge.startPersonaAgeVerificationFlow`)
                }
            })(), () => {
                e = !1, t?.()
            }
        }, u = [i, c], e[1] = c, e[2] = l, e[3] = u), (0, D.useEffect)(l, u);
        let p;
        return e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, O.jsx)(S, {}), e[4] = p) : p = e[4], p
    })
}));
e((() => {
    M()
}))();
export {
    k as clientLoader, j as
    default, A as shouldRevalidate
};
//# sourceMappingURL=verify_age-lylo1mew.js.map