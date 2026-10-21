const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/12cc112f-mjmvu6l8lywaw5p9.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-lxa3wniynbx9ka2a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-kzsalymynzuddxee.js", "assets/30901919-i8ip8r0znvgcym38.js", "assets/c470f5ab-poh7ivjvb3j2jlfz.js", "assets/0e5afe53-dz59mkfveu52getp.js", "assets/conversation-small-bwtqiuwj.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    JT as r,
    Mrt as i,
    P5 as a,
    R1 as o,
    X0 as s,
    YT as c,
    Z0 as l,
    g8 as u,
    w1 as d,
    x1 as f
} from "./4813494d-lxa3wniynbx9ka2a.js";
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
    bCn as T,
    gCn as E,
    pGn as D
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    b as O,
    d as k,
    t as A,
    x as j
} from "./707eab0c-dz0lipu7j9i9zym4.js";

function M({
    hasError: e
}) {
    let t = h(),
        [r, i] = (0, F.useState)(!1),
        [a, o] = (0, F.useState)(0);
    (0, F.useEffect)(() => {
        let e = window.setTimeout(() => i(!0), 15e3);
        return () => window.clearTimeout(e)
    }, [a]);
    let s = e || r;
    return (0, I.jsx)(`div`, {
        role: s ? `alert` : `status`,
        "aria-busy": !s,
        className: `flex min-h-60 flex-1 flex-col items-center justify-center gap-3 text-center`,
        children: s ? (0, I.jsxs)(I.Fragment, {
            children: [(0, I.jsx)(g, {
                id: `admin.plugins.access.loading.failure`,
                defaultMessage: `Workspace access could not be confirmed. Check your connection and try again.`
            }), (0, I.jsx)(k, {
                color: `secondary`,
                size: `sm`,
                variant: `outline`,
                onClick: () => {
                    i(!1), o(e => e + 1), t.cancelQueries({
                        queryKey: n().queryKey,
                        exact: !0
                    }).then(() => t.refetchQueries({
                        queryKey: n().queryKey,
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
            children: r
        } = e,
        o = n === void 0 ? `plugins` : n,
        s;
    t[0] === o ? s = t[1] : (s = () => E(o), t[0] = o, t[1] = s);
    let c = a(s),
        l = a(f),
        u = a(d)?.id,
        m = p();
    if (c === `loading`) {
        let e;
        return t[2] !== l.isError || t[3] !== u ? (e = (0, I.jsx)(M, {
            hasError: l.isError
        }, u), t[2] = l.isError, t[3] = u, t[4] = e) : e = t[4], e
    }
    if (c === `locked`) {
        let e;
        return t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, I.jsx)(L, {}), t[5] = e) : e = t[5], e
    }
    if (c === `fedramp`) {
        let e = `/admin/apps${m.search}${m.hash}`,
            n;
        return t[6] === e ? n = t[7] : (n = (0, I.jsx)(x, {
            replace: !0,
            to: e
        }), t[6] = e, t[7] = n), n
    }
    if (c !== `allowed`) {
        let e;
        t[8] === m.search ? e = t[9] : (e = i(`/admin/members`, m.search), t[8] = m.search, t[9] = e);
        let n;
        return t[10] === e ? n = t[11] : (n = (0, I.jsx)(x, {
            replace: !0,
            to: e
        }), t[10] = e, t[11] = n), n
    }
    return r
}
var P, F, I, L, R = e((() => {
    P = w(), D(), A(), O(), l(), u(), o(), C(), F = t(y()), v(), _(), T(), I = m(), S(), L = s(() => b(() => import(`./12cc112f-mjmvu6l8lywaw5p9.js`).then(e => (e.r(), e.n)).then(e => e.FreeWorkspaceLockedSection), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])))
}));

function z() {
    "use forget";
    let e = (0, V.c)(7),
        t = p(),
        n;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, H.jsx)(`p`, {
        role: `status`,
        children: (0, H.jsx)(g, {
            id: `admin.plugins.migration.unavailable.description`,
            defaultMessage: `Plugin and marketplace administration is unavailable for this workspace. You can try again or manage legacy apps.`
        })
    }), e[0] = n) : n = e[0];
    let a;
    e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, H.jsx)(r, {
        type: `button`,
        color: `secondary`,
        onClick: B,
        children: (0, H.jsx)(g, {
            id: `admin.plugins.migration.unavailable.retry.label`,
            defaultMessage: `Retry`
        })
    }), e[1] = a) : a = e[1];
    let o;
    e[2] === t.search ? o = e[3] : (o = i(`/admin/apps`, t.search), e[2] = t.search, e[3] = o);
    let s;
    e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, H.jsx)(g, {
        id: `admin.plugins.migration.unavailable.legacy_apps.label`,
        defaultMessage: `Manage legacy apps`
    }), e[4] = s) : s = e[4];
    let c;
    return e[5] === o ? c = e[6] : (c = (0, H.jsx)(N, {
        children: (0, H.jsxs)(`div`, {
            className: `flex min-h-60 flex-col items-center justify-center gap-4 px-6 text-center`,
            children: [n, (0, H.jsxs)(`div`, {
                className: `flex flex-wrap justify-center gap-3`,
                children: [a, (0, H.jsx)(r, {
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
    V = w(), c(), D(), v(), _(), R(), H = m()
}));
export {
    U as n, z as t
};
//# sourceMappingURL=ac7f9415-imv5ukwezrgp2b29.js.map