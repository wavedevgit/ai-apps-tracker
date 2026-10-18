import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Qit as n,
    Sot as r,
    a7 as i,
    iat as a,
    l7 as o,
    xot as s
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as c,
    Bn as l,
    Pt as u,
    Ut as d,
    Vn as f,
    wn as p
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    n as m,
    t as h
} from "./af004db9-6w68dbz1fjui3k0e.js";
var g, _, v, y, b = e((() => {
    c(), g = p(), m(), r(), a(), o(), _ = t(f()), v = l(), y = d(function() {
        "use forget";
        let e = (0, g.c)(4);
        s();
        let t = u(),
            r = (0, _.useRef)(!1),
            a, o;
        e[0] === t ? (a = e[1], o = e[2]) : (a = () => {
            r.current || (r.current = !0, (async function() {
                let e = window.location.href,
                    r = `/`;
                try {
                    r = (await i.safePost(`/aip/olympic/oauth/callback`, {
                        requestBody: {
                            full_redirect_url: e
                        }
                    })).postAuthRedirectPath
                } catch (e) {
                    let r = e;
                    if (r instanceof n) {
                        t(`/`);
                        return
                    }
                    throw r
                }
                window.close(), window.setTimeout(() => {
                    t(r)
                }, 150)
            })())
        }, o = [t], e[0] = t, e[1] = a, e[2] = o), (0, _.useEffect)(a, o);
        let c;
        return e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, v.jsx)(`div`, {
            className: `flex min-h-[40vh] items-center justify-center`,
            children: (0, v.jsx)(h, {})
        }), e[3] = c) : c = e[3], c
    })
}));
e((() => {
    b()
}))();
export {
    y as
    default
};
//# sourceMappingURL=chatgpt_health_oauth_redirect-glm4arc8.js.map