import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Jl as n,
    Kl as r,
    P5 as i,
    Ul as a,
    X5 as o,
    Xy as s,
    Y5 as c,
    Yl as l,
    Zy as u,
    g8 as d,
    oq as f,
    pq as p,
    ql as m
} from "./4813494d-lxa3wniynbx9ka2a.js";
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
    Qln as C,
    Wun as w,
    kun as T
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    Km as E,
    Kv as D,
    qm as O,
    qv as k
} from "./30901919-i8ip8r0znvgcym38.js";

function A() {
    let {
        data: e
    } = T({
        poll: !0,
        staleTime: 0,
        refetchOnWindowFocus: !0
    }), t = S(e => !!e._forcedRateLimit), i = e?.rate_limit ?? null, a = n(e);
    return !i || !a ? null : (0, N.jsx)(j, {
        resetAfterSeconds: r(e),
        limitReached: l(e),
        hasForcedRateLimit: t
    })
}

function j({
    resetAfterSeconds: e,
    limitReached: t = !1,
    hasForcedRateLimit: n = !1
}) {
    let r = x(),
        o = !i(p),
        [l, u] = (0, M.useState)(!1),
        d = e == null ? null : r.formatMessage({
            id: `Vdw3Zf`,
            defaultMessage: `Resets {time}`
        }, {
            time: a(r, e)
        });
    return (0, N.jsx)(s, {
        open: o ? l : void 0,
        onOpenChange: u,
        label: d ?? r.formatMessage({
            id: `z90MsD`,
            defaultMessage: `Usage resets soon`
        }),
        children: (0, N.jsxs)(`div`, {
            className: c(`inline-flex items-center gap-1.5 rounded-full py-2 ps-3 pe-3.5 text-sm font-medium`, t ? `bg-token-text-status-error/15 text-token-text-status-error` : `bg-token-text-status-warning/15 text-token-text-status-warning`),
            onClick: o ? () => u(e => !e) : void 0,
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
    k(), O(), u(), d(), f(), m(), C(), w(), o(), M = t(y()), v(), _(), N = h()
}));
export {
    P as n, A as t
};
//# sourceMappingURL=dd81d43b-bcgh71lbv54es820.js.map