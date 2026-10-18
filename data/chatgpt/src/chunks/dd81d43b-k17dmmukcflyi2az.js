import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Al as n,
    B6 as r,
    BK as i,
    Dl as a,
    My as o,
    NK as s,
    Ol as c,
    b5 as l,
    i5 as u,
    jy as d,
    kl as f,
    wl as p,
    y5 as m
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as h,
    Bn as g,
    Nn as _,
    Rn as v,
    Vn as y,
    at as b,
    zn as x
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Dun as S,
    Eun as C,
    Pln as w,
    dun as T
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Km as E,
    Xv as D,
    Yv as O,
    qm as k
} from "./30901919-e33mbl5u1y88w5wu.js";

function A() {
    let {
        data: e
    } = T({
        poll: !0,
        staleTime: 0,
        refetchOnWindowFocus: !0
    }), t = S(e => !!e._forcedRateLimit), r = e?.rate_limit ?? null, i = f(e);
    return !r || !i ? null : (0, N.jsx)(j, {
        resetAfterSeconds: a(e),
        limitReached: n(e),
        hasForcedRateLimit: t
    })
}

function j({
    resetAfterSeconds: e,
    limitReached: t = !1,
    hasForcedRateLimit: n = !1
}) {
    let r = x(),
        a = !u(i),
        [o, s] = (0, M.useState)(!1),
        c = e == null ? null : r.formatMessage({
            id: `Vdw3Zf`,
            defaultMessage: `Resets {time}`
        }, {
            time: p(r, e)
        });
    return (0, N.jsx)(d, {
        open: a ? o : void 0,
        onOpenChange: s,
        label: c ?? r.formatMessage({
            id: `z90MsD`,
            defaultMessage: `Usage resets soon`
        }),
        children: (0, N.jsxs)(`div`, {
            className: m(`inline-flex items-center gap-1.5 rounded-full py-2 ps-3 pe-3.5 text-sm font-medium`, t ? `bg-token-text-status-error/15 text-token-text-status-error` : `bg-token-text-status-warning/15 text-token-text-status-warning`),
            onClick: a ? () => s(e => !e) : void 0,
            children: [(0, N.jsxs)(`div`, {
                className: `flex items-center gap-1.5`,
                children: [(0, N.jsx)(E, {
                    className: `icon`
                }), t ? (0, N.jsx)(_, {
                    id: `JH4ShQ`,
                    defaultMessage: `Usage limit reached`
                }) : (0, N.jsx)(_, {
                    id: `k4kW93`,
                    defaultMessage: `Usage nearing limit`
                })]
            }), location.pathname !== `/codex/cloud/settings/usage` && (0, N.jsx)(d, {
                label: r.formatMessage({
                    id: `jqcjgs`,
                    defaultMessage: `Open usage settings`
                }),
                children: (0, N.jsx)(b, {
                    to: `/codex/cloud/settings/usage`,
                    "aria-label": r.formatMessage({
                        id: `Xo2nko`,
                        defaultMessage: `Open usage settings`
                    }),
                    children: (0, N.jsx)(O, {
                        className: `icon-sm`
                    })
                })
            }), !1]
        })
    })
}
var M, N, P = e((() => {
    D(), k(), o(), r(), s(), c(), w(), C(), l(), M = t(y()), v(), h(), N = g()
}));
export {
    P as n, A as t
};
//# sourceMappingURL=dd81d43b-k17dmmukcflyi2az.js.map