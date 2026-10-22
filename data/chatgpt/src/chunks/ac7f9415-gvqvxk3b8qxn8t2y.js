const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/12cc112f-fvi2nvuteae3ysgf.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-itnrgnth03y1sm9d.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-i79e9c315w50am5f.js", "assets/30901919-ikyi1r55w2i02fom.js", "assets/c470f5ab-lpy67c9in1skobas.js", "assets/0e5afe53-jfvcgv06snw44wce.js", "assets/conversation-small-dl8qqd6x.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    A1 as r,
    N1 as i,
    Wrt as a,
    a2 as o,
    eE as s,
    k8 as c,
    o2 as l,
    q1 as u,
    q5 as d,
    z1 as f
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    At as p,
    Bn as m,
    N as h,
    Nn as g,
    Q as _,
    Rn as v,
    Vn as y,
    cn as b,
    ct as x,
    ln as S,
    s as C,
    wn as w
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FCn as T,
    jCn as E,
    jGn as D
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    b as O,
    d as k,
    t as A,
    x as j
} from "./707eab0c-eqm4zmw552znkezy.js";

function M({
    hasError: e
}) {
    let t = h(),
        [n, r] = (0, F.useState)(!1),
        [i, a] = (0, F.useState)(0);
    (0, F.useEffect)(() => {
        let e = window.setTimeout(() => r(!0), 15e3);
        return () => window.clearTimeout(e)
    }, [i]);
    let o = e || n;
    return (0, I.jsx)(`div`, {
        role: o ? `alert` : `status`,
        "aria-busy": !o,
        className: `flex min-h-60 flex-1 flex-col items-center justify-center gap-3 text-center`,
        children: o ? (0, I.jsxs)(I.Fragment, {
            children: [(0, I.jsx)(g, {
                id: `admin.plugins.access.loading.failure`,
                defaultMessage: `Workspace access could not be confirmed. Check your connection and try again.`
            }), (0, I.jsx)(k, {
                color: `secondary`,
                size: `sm`,
                variant: `outline`,
                onClick: () => {
                    r(!1), a(e => e + 1), t.cancelQueries({
                        queryKey: f().queryKey,
                        exact: !0
                    }).then(() => t.refetchQueries({
                        queryKey: f().queryKey,
                        exact: !0,
                        type: `active`
                    }))
                },
                children: (0, I.jsx)(g, {
                    id: `admin.plugins.access.loading.retry`,
                    defaultMessage: `Try again`
                })
            })]
        }) : (0, I.jsxs)(I.Fragment, {
            children: [(0, I.jsx)(j, {
                size: 20
            }), (0, I.jsx)(g, {
                id: `admin.plugins.access.loading`,
                defaultMessage: `Loading workspace access...`
            })]
        })
    })
}

function N(e) {
    "use forget";
    let t = (0, P.c)(12),
        {
            surface: n,
            children: o
        } = e,
        s = n === void 0 ? `plugins` : n,
        c;
    t[0] === s ? c = t[1] : (c = () => E(s), t[0] = s, t[1] = c);
    let l = d(c),
        u = d(r),
        f = d(i)?.id,
        m = p();
    if (l === `loading`) {
        let e;
        return t[2] !== u.isError || t[3] !== f ? (e = (0, I.jsx)(M, {
            hasError: u.isError
        }, f), t[2] = u.isError, t[3] = f, t[4] = e) : e = t[4], e
    }
    if (l === `locked`) {
        let e;
        return t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, I.jsx)(L, {}), t[5] = e) : e = t[5], e
    }
    if (l === `fedramp`) {
        let e = `/admin/apps${m.search}${m.hash}`,
            n;
        return t[6] === e ? n = t[7] : (n = (0, I.jsx)(x, {
            replace: !0,
            to: e
        }), t[6] = e, t[7] = n), n
    }
    if (l !== `allowed`) {
        let e;
        t[8] === m.search ? e = t[9] : (e = a(`/admin/members`, m.search), t[8] = m.search, t[9] = e);
        let n;
        return t[10] === e ? n = t[11] : (n = (0, I.jsx)(x, {
            replace: !0,
            to: e
        }), t[10] = e, t[11] = n), n
    }
    return o
}
var P, F, I, L, R = e((() => {
    P = w(), D(), A(), O(), l(), c(), u(), C(), F = t(y()), v(), _(), T(), I = m(), S(), L = o(() => b(() => import(`./12cc112f-fvi2nvuteae3ysgf.js`).then(e => (e.r(), e.n)).then(e => e.FreeWorkspaceLockedSection), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])))
}));

function z() {
    "use forget";
    let e = (0, V.c)(7),
        t = p(),
        r;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, H.jsx)(`p`, {
        role: `status`,
        children: (0, H.jsx)(g, {
            id: `admin.plugins.migration.unavailable.description`,
            defaultMessage: `Plugin and marketplace administration is unavailable for this workspace. You can try again or manage legacy apps.`
        })
    }), e[0] = r) : r = e[0];
    let i;
    e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, H.jsx)(n, {
        type: `button`,
        color: `secondary`,
        onClick: B,
        children: (0, H.jsx)(g, {
            id: `admin.plugins.migration.unavailable.retry.label`,
            defaultMessage: `Retry`
        })
    }), e[1] = i) : i = e[1];
    let o;
    e[2] === t.search ? o = e[3] : (o = a(`/admin/apps`, t.search), e[2] = t.search, e[3] = o);
    let s;
    e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, H.jsx)(g, {
        id: `admin.plugins.migration.unavailable.legacy_apps.label`,
        defaultMessage: `Manage legacy apps`
    }), e[4] = s) : s = e[4];
    let c;
    return e[5] === o ? c = e[6] : (c = (0, H.jsx)(N, {
        children: (0, H.jsxs)(`div`, {
            className: `flex min-h-60 flex-col items-center justify-center gap-4 px-6 text-center`,
            children: [r, (0, H.jsxs)(`div`, {
                className: `flex flex-wrap justify-center gap-3`,
                children: [i, (0, H.jsx)(n, {
                    as: `link`,
                    to: o,
                    color: `primary`,
                    children: s
                })]
            })]
        })
    }), e[5] = o, e[6] = c), c
}

function B() {
    return window.location.reload()
}
var V, H, U = e((() => {
    V = w(), s(), D(), v(), _(), R(), H = m()
}));
export {
    U as n, z as t
};
//# sourceMappingURL=ac7f9415-gvqvxk3b8qxn8t2y.js.map