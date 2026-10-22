import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    J5 as r,
    Jl as i,
    Qy as a,
    Wl as o,
    Xl as s,
    Yl as c,
    Zy as l,
    l7 as u,
    ql as d,
    rq as f,
    u7 as p,
    uq as m
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as h,
    Nn as g,
    Q as _,
    Rn as v,
    Vn as y,
    it as b,
    zn as x
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Gun as S,
    mun as C,
    odn as w,
    sdn as T
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    Km as E,
    Kv as D,
    qm as O,
    qv as k
} from "./30901919-cmi3nh547dwrqkxv.js";

function A() {
    let {
        data: e
    } = S({
        poll: !0,
        staleTime: 0,
        refetchOnWindowFocus: !0
    }), t = T(e => !!e._forcedRateLimit), n = e?.rate_limit ?? null, r = c(e);
    return !n || !r ? null : (0, N.jsx)(j, {
        resetAfterSeconds: d(e),
        limitReached: s(e),
        hasForcedRateLimit: t
    })
}

function j({
    resetAfterSeconds: e,
    limitReached: t = !1,
    hasForcedRateLimit: n = !1
}) {
    let i = x(),
        a = !r(m),
        [s, c] = (0, M.useState)(!1),
        d = e == null ? null : i.formatMessage({
            id: `Vdw3Zf`,
            defaultMessage: `Resets {time}`
        }, {
            time: o(i, e)
        });
    return (0, N.jsx)(l, {
        open: a ? s : void 0,
        onOpenChange: c,
        label: d ?? i.formatMessage({
            id: `z90MsD`,
            defaultMessage: `Usage resets soon`
        }),
        children: (0, N.jsxs)(`div`, {
            className: u(`inline-flex items-center gap-1.5 rounded-full py-2 ps-3 pe-3.5 text-sm font-medium`, t ? `bg-token-text-status-error/15 text-token-text-status-error` : `bg-token-text-status-warning/15 text-token-text-status-warning`),
            onClick: a ? () => c(e => !e) : void 0,
            children: [(0, N.jsxs)(`div`, {
                className: `flex items-center gap-1.5`,
                children: [(0, N.jsx)(E, {
                    className: `icon`
                }), t ? (0, N.jsx)(g, {
                    id: `JH4ShQ`,
                    defaultMessage: `Usage limit reached`
                }) : (0, N.jsx)(g, {
                    id: `k4kW93`,
                    defaultMessage: `Usage nearing limit`
                })]
            }), location.pathname !== `/codex/cloud/settings/usage` && (0, N.jsx)(l, {
                label: i.formatMessage({
                    id: `jqcjgs`,
                    defaultMessage: `Open usage settings`
                }),
                children: (0, N.jsx)(b, {
                    to: `/codex/cloud/settings/usage`,
                    "aria-label": i.formatMessage({
                        id: `Xo2nko`,
                        defaultMessage: `Open usage settings`
                    }),
                    children: (0, N.jsx)(D, {
                        className: `icon-sm`
                    })
                })
            }), !1]
        })
    })
}
var M, N, P = e((() => {
    k(), O(), a(), n(), f(), i(), C(), w(), p(), M = t(y()), v(), _(), N = h()
}));
export {
    P as n, A as t
};
//# sourceMappingURL=dd81d43b-cknc0pf2fpwou55e.js.map