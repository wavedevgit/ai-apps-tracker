const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/da5cab2f-ecrljr9d8wyqhosf.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/c2675c8c-ig7dykzhv7vbqkt7.js", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/global-modals-njebr7y8.css", "assets/9f2e6d33-favh86igrrldl3up.js", "assets/7cd4318d-oq6kyakhv4tl48o8.js", "assets/b3596021-g68qeogunvktwr6g.js", "assets/779905f4-lnxlgbttoml8sfyn.js", "assets/ef50f9ea-loe7pej9qqjhd9kr.js", "assets/4da63c62-dp1plalfpys6tt2u.js", "assets/343cb406-d69bck6k47arlhci.js", "assets/9f4af89c-ke6cr4l1vjkwumvv.js"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BW as t,
    C0 as n,
    C1 as r,
    HW as i,
    S0 as a,
    u1 as o,
    w3 as s,
    y3 as c
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as l,
    At as u,
    Bn as d,
    Ut as f,
    cn as p,
    jt as m,
    ln as h,
    lt as g,
    wn as _
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    n as v,
    r as y,
    t as b
} from "./8c6976e5-ibz7fcap50r267b6.js";
var x, S, C = e((() => {
    n(), h(), x = a(() => p(() => import(`./da5cab2f-ecrljr9d8wyqhosf.js`).then(e => e.SitesAdminConsoleHandoff), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])), {
        loading: () => null
    }), S = a(() => p(() => import(`./7cd4318d-oq6kyakhv4tl48o8.js`).then(e => e.AppGardenAdminPage), __vite__mapDeps([15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21])), {
        loading: () => null
    })
}));

function w() {
    "use forget";
    let e = (0, T.c)(5);
    y();
    let t = r(),
        {
            currentWorkspaceId: n
        } = v(),
        {
            consoleWorkspaceId: a
        } = u(),
        {
            search: o
        } = m(),
        c = t?.id ?? n;
    if (!i() || s(t?.planType)) {
        let t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, E.jsx)(g, {
            replace: !0,
            to: `/admin`
        }), e[0] = t) : t = e[0], t
    }
    if (a != null && a === c) {
        let t;
        return e[1] !== a || e[2] !== o ? (t = (0, E.jsx)(x, {
            workspaceId: a,
            sourceSearchParams: o
        }), e[1] = a, e[2] = o, e[3] = t) : t = e[3], t
    }
    let l;
    return e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, E.jsx)(S, {}), e[4] = l) : l = e[4], l
}
var T, E, D, O = e((() => {
    l(), T = _(), C(), t(), o(), c(), b(), E = d(), D = f(function() {
        "use forget";
        let e = (0, T.c)(2),
            {
                search: t
            } = m(),
            n;
        return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, E.jsx)(w, {}), e[1] = n) : n = e[1], n
    })
}));
e((() => {
    O()
}))();
export {
    D as
    default
};
//# sourceMappingURL=admin.sites-b367aaxt.js.map