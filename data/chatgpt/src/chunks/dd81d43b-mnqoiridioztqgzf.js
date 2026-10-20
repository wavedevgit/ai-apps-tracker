import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Gl as n,
    Hl as r,
    J5 as i,
    Jl as a,
    Kl as o,
    M5 as s,
    Xy as c,
    Yy as l,
    aq as u,
    fq as d,
    m8 as f,
    q5 as p,
    ql as m
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $ as h,
    Bn as g,
    Hn as _,
    Pn as v,
    Vn as y,
    at as b,
    zn as x
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Bun as S,
    Jln as C,
    Tun as w,
    Vun as T
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Km as E,
    Kv as D,
    qm as O,
    qv as k
} from "./30901919-jory365vq6ym5crx.js";

function A() {
    let {
        data: e
    } = w({
        poll: !0,
        staleTime: 0,
        refetchOnWindowFocus: !0
    }), t = T(e => !!e._forcedRateLimit), r = e?.rate_limit ?? null, i = m(e);
    return !r || !i ? null : (0, N.jsx)(j, {
        resetAfterSeconds: n(e),
        limitReached: a(e),
        hasForcedRateLimit: t
    })
}

function j({
    resetAfterSeconds: e,
    limitReached: t = !1,
    hasForcedRateLimit: n = !1
}) {
    let i = g(),
        a = !s(d),
        [o, c] = (0, M.useState)(!1),
        u = e == null ? null : i.formatMessage({
            id: `Vdw3Zf`,
            defaultMessage: `Resets {time}`
        }, {
            time: r(i, e)
        });
    return (0, N.jsx)(l, {
        open: a ? o : void 0,
        onOpenChange: c,
        label: u ?? i.formatMessage({
            id: `z90MsD`,
            defaultMessage: `Usage resets soon`
        }),
        children: (0, N.jsxs)(`div`, {
            className: p(`inline-flex items-center gap-1.5 rounded-full py-2 ps-3 pe-3.5 text-sm font-medium`, t ? `bg-token-text-status-error/15 text-token-text-status-error` : `bg-token-text-status-warning/15 text-token-text-status-warning`),
            onClick: a ? () => c(e => !e) : void 0,
            children: [(0, N.jsxs)(`div`, {
                className: `flex items-center gap-1.5`,
                children: [(0, N.jsx)(E, {
                    className: `icon`
                }), t ? (0, N.jsx)(v, {
                    id: `JH4ShQ`,
                    defaultMessage: `Usage limit reached`
                }) : (0, N.jsx)(v, {
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
    k(), O(), c(), f(), u(), o(), C(), S(), i(), M = t(_()), x(), h(), N = y()
}));
export {
    P as n, A as t
};
//# sourceMappingURL=dd81d43b-mnqoiridioztqgzf.js.map