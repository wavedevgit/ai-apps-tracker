import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    Jl as r,
    K5 as i,
    Qy as a,
    Wl as o,
    Xl as s,
    Yl as c,
    Zy as l,
    j5 as u,
    q5 as d,
    ql as f,
    rq as p,
    uq as m
} from "./4813494d-mdvd4786a87166cc.js";
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
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Gm as E,
    Gv as D,
    Wm as O,
    Wv as k
} from "./30901919-s8bko9nrkqwv6i4f.js";

function A() {
    let {
        data: e
    } = S({
        poll: !0,
        staleTime: 0,
        refetchOnWindowFocus: !0
    }), t = T(e => !!e._forcedRateLimit), n = e?.rate_limit ?? null, r = c(e);
    return !n || !r ? null : (0, N.jsx)(j, {
        resetAfterSeconds: f(e),
        limitReached: s(e),
        hasForcedRateLimit: t
    })
}

function j({
    resetAfterSeconds: e,
    limitReached: t = !1,
    hasForcedRateLimit: n = !1
}) {
    let r = x(),
        a = !u(m),
        [s, c] = (0, M.useState)(!1),
        d = e == null ? null : r.formatMessage({
            id: `Vdw3Zf`,
            defaultMessage: `Resets {time}`
        }, {
            time: o(r, e)
        });
    return (0, N.jsx)(l, {
        open: a ? s : void 0,
        onOpenChange: c,
        label: d ?? r.formatMessage({
            id: `z90MsD`,
            defaultMessage: `Usage resets soon`
        }),
        children: (0, N.jsxs)(`div`, {
            className: i(`inline-flex items-center gap-1.5 rounded-full py-2 ps-3 pe-3.5 text-sm font-medium`, t ? `bg-token-text-status-error/15 text-token-text-status-error` : `bg-token-text-status-warning/15 text-token-text-status-warning`),
            onClick: a ? () => c(e => !e) : void 0,
            children: [(0, N.jsxs)(`div`, {
                className: `flex items-center gap-1.5`,
                children: [(0, N.jsx)(O, {
                    className: `icon`
                }), t ? (0, N.jsx)(g, {
                    id: `JH4ShQ`,
                    defaultMessage: `Usage limit reached`
                }) : (0, N.jsx)(g, {
                    id: `k4kW93`,
                    defaultMessage: `Usage nearing limit`
                })]
            }), location.pathname !== `/codex/cloud/settings/usage` && (0, N.jsx)(l, {
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
                    children: (0, N.jsx)(k, {
                        className: `icon-sm`
                    })
                })
            }), !1]
        })
    })
}
var M, N, P = e((() => {
    D(), E(), a(), n(), p(), r(), C(), w(), d(), M = t(y()), v(), _(), N = h()
}));
export {
    P as n, A as t
};
//# sourceMappingURL=dd81d43b-gtom5r9lrd65ywna.js.map