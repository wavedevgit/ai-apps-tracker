import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as n,
    GJ as r,
    Nrt as i,
    Prt as a,
    Ttt as o,
    WJ as s,
    _tt as c,
    i5 as l
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as u,
    Bn as d,
    Ut as f,
    Vn as p,
    lt as m,
    wn as h
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    At as g,
    Df as _,
    Ef as v,
    Gh as y,
    Hh as b,
    Tf as x,
    jt as S
} from "./8b34dbc2-gf9wnwcahty27ylx.js";

function C() {
    return w
}

function w() {
    x.set(!1)
}

function T() {
    return x() === !0
}

function E() {
    return s()
}
var D, O, k, A, j = e((() => {
    u(), D = h(), y(), S(), v(), n(), r(), i(), c(), O = t(p()), k = d(), A = f(function() {
        "use forget";
        let e = (0, D.c)(5),
            [t] = (0, O.useState)(E),
            n = a(),
            r = l(T),
            i;
        if (e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = [], e[0] = i) : i = e[0], (0, O.useEffect)(C, i), !n) {
            if (o()) return _(`no_auth`), null;
            let t;
            return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, k.jsx)(m, {
                to: `/auth/login/?${new URLSearchParams([[`next`,`/onboarding`]]).toString()}`,
                replace: !0
            }), e[1] = t) : t = e[1], t
        }
        if (r && !o()) {
            let t;
            return e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, k.jsx)(m, {
                to: `/`,
                replace: !0
            }), e[2] = t) : t = e[2], t
        }
        let s;
        return e[3] === t ? s = e[4] : (s = (0, k.jsx)(`div`, {
            className: `fixed inset-0 mt-[env(safe-area-inset-top,0px)] mb-[env(safe-area-inset-bottom,0px)]`,
            children: (0, k.jsx)(b, {
                children: (0, k.jsx)(g, {
                    clientThreadId: t,
                    forceNewOnboardingFlowModalOpen: !0
                })
            })
        }), e[3] = t, e[4] = s), s
    })
}));
e((() => {
    j()
}))();
export {
    A as
    default
};
//# sourceMappingURL=onboarding-g6nlhn9j.js.map