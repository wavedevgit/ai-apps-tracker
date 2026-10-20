const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/12cc112f-fxjf39611l5ki2lk.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cy5f8pl0g26s86so.js", "assets/30901919-7dzdc1ou0jtwkwpt.js", "assets/c470f5ab-d4g7lc53n1e1ao7o.js", "assets/0e5afe53-o2mcfq1ky1uaktz5.js", "assets/conversation-small-j5v9ogf2.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C1 as n,
    Drt as r,
    JT as i,
    L1 as a,
    N5 as o,
    X0 as s,
    Y0 as c,
    b1 as l,
    h8 as u,
    k1 as d,
    qT as f
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    _Cn as T,
    lGn as E,
    pCn as D
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    b as O,
    d as k,
    t as A,
    x as j
} from "./707eab0c-iziu4upusihd9xbv.js";

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
                        queryKey: d().queryKey,
                        exact: !0
                    }).then(() => t.refetchQueries({
                        queryKey: d().queryKey,
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
            surface: i,
            children: a
        } = e,
        s = i === void 0 ? `plugins` : i,
        c;
    t[0] === s ? c = t[1] : (c = () => D(s), t[0] = s, t[1] = c);
    let u = o(c),
        d = o(l),
        f = o(n)?.id,
        m = p();
    if (u === `loading`) {
        let e;
        return t[2] !== d.isError || t[3] !== f ? (e = (0, I.jsx)(M, {
            hasError: d.isError
        }, f), t[2] = d.isError, t[3] = f, t[4] = e) : e = t[4], e
    }
    if (u === `locked`) {
        let e;
        return t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, I.jsx)(L, {}), t[5] = e) : e = t[5], e
    }
    if (u === `fedramp`) {
        let e = `/admin/apps${m.search}${m.hash}`,
            n;
        return t[6] === e ? n = t[7] : (n = (0, I.jsx)(x, {
            replace: !0,
            to: e
        }), t[6] = e, t[7] = n), n
    }
    if (u !== `allowed`) {
        let e;
        t[8] === m.search ? e = t[9] : (e = r(`/admin/members`, m.search), t[8] = m.search, t[9] = e);
        let n;
        return t[10] === e ? n = t[11] : (n = (0, I.jsx)(x, {
            replace: !0,
            to: e
        }), t[10] = e, t[11] = n), n
    }
    return a
}
var P, F, I, L, R = e((() => {
    P = w(), E(), A(), O(), s(), u(), a(), C(), F = t(y()), v(), _(), T(), I = m(), S(), L = c(() => b(() => import(`./12cc112f-fxjf39611l5ki2lk.js`).then(e => (e.r(), e.n)).then(e => e.FreeWorkspaceLockedSection), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])))
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
    let i;
    e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, H.jsx)(f, {
        type: `button`,
        color: `secondary`,
        onClick: B,
        children: (0, H.jsx)(g, {
            id: `admin.plugins.migration.unavailable.retry.label`,
            defaultMessage: `Retry`
        })
    }), e[1] = i) : i = e[1];
    let a;
    e[2] === t.search ? a = e[3] : (a = r(`/admin/apps`, t.search), e[2] = t.search, e[3] = a);
    let o;
    e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, H.jsx)(g, {
        id: `admin.plugins.migration.unavailable.legacy_apps.label`,
        defaultMessage: `Manage legacy apps`
    }), e[4] = o) : o = e[4];
    let s;
    return e[5] === a ? s = e[6] : (s = (0, H.jsx)(N, {
        children: (0, H.jsxs)(`div`, {
            className: `flex min-h-60 flex-col items-center justify-center gap-4 px-6 text-center`,
            children: [n, (0, H.jsxs)(`div`, {
                className: `flex flex-wrap justify-center gap-3`,
                children: [i, (0, H.jsx)(f, {
                    as: `link`,
                    to: a,
                    color: `primary`,
                    children: o
                })]
            })]
        })
    }), e[5] = a, e[6] = s), s
}

function B() {
    return window.location.reload()
}
var V, H, U = e((() => {
    V = w(), i(), E(), v(), _(), R(), H = m()
}));
export {
    U as n, z as t
};
//# sourceMappingURL=ac7f9415-g63q9kwz631lvilo.js.map