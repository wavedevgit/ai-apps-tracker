import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Jl as n,
    Qy as r,
    Wl as i,
    Xl as a,
    Yl as o,
    Zy as s,
    c7 as c,
    k8 as l,
    l7 as u,
    q5 as d,
    ql as f,
    rq as p,
    uq as m
} from "./4813494d-t80q9ew944ej0mgk.js";
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
    Bun as S,
    Jln as C,
    Tun as w,
    Vun as T
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Km as E,
    Kv as D,
    qm as O,
    qv as k
} from "./30901919-r9pahacmzqudnt4f.js";

function A() {
    let {
        data: e
    } = w({
        poll: !0,
        staleTime: 0,
        refetchOnWindowFocus: !0
    }), t = T(e => !!e._forcedRateLimit), n = e?.rate_limit ?? null, r = o(e);
    return !n || !r ? null : (0, N.jsx)(j, {
        resetAfterSeconds: f(e),
        limitReached: a(e),
        hasForcedRateLimit: t
    })
}

function j({
    resetAfterSeconds: e,
    limitReached: t = !1,
    hasForcedRateLimit: n = !1
}) {
    let r = x(),
        a = !d(m),
        [o, l] = (0, M.useState)(!1),
        u = e == null ? null : r.formatMessage({
            id: `Vdw3Zf`,
            defaultMessage: `Resets {time}`
        }, {
            time: i(r, e)
        });
    return (0, N.jsx)(s, {
        open: a ? o : void 0,
        onOpenChange: l,
        label: u ?? r.formatMessage({
            id: `z90MsD`,
            defaultMessage: `Usage resets soon`
        }),
        children: (0, N.jsxs)(`div`, {
            className: c(`inline-flex items-center gap-1.5 rounded-full py-2 ps-3 pe-3.5 text-sm font-medium`, t ? `bg-token-text-status-error/15 text-token-text-status-error` : `bg-token-text-status-warning/15 text-token-text-status-warning`),
            onClick: a ? () => l(e => !e) : void 0,
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
            }), location.pathname !== `/codex/cloud/settings/usage` && (0, N.jsx)(s, {
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
                    children: (0, N.jsx)(D, {
                        className: `icon-sm`
                    })
                })
            }), !1]
        })
    })
}
var M, N, P = e((() => {
    k(), O(), r(), l(), p(), n(), C(), S(), u(), M = t(y()), v(), _(), N = h()
}));
export {
    P as n, A as t
};
//# sourceMappingURL=dd81d43b-eoew3j4qpr9hxml0.js.map