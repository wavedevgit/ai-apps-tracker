import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    JT as t,
    YT as n,
    Ynt as r,
    trt as i
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as a,
    Nn as o,
    Rn as s,
    wn as c
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bt as l,
    zt as u
} from "./c470f5ab-uuoa2gfm4goj6p9f.js";
import {
    i as d,
    r as f
} from "./ab92372e-bwyzbely1r25mun1.js";

function p(e) {
    "use forget";
    let t = (0, h.c)(4),
        n;
    t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
    let i = n;
    if (!r(`1437685011`)) return null;
    let a;
    return t[2] === i ? a = t[3] : (a = (0, g.jsx)(m, {
        ...i
    }), t[2] = i, t[3] = a), a
}

function m(e) {
    "use forget";
    let n = (0, h.c)(8),
        {
            connectorId: r,
            redirectAfter: i
        } = e,
        a = i === void 0 ? `/codex/cloud/settings/environments` : i,
        s;
    n[0] !== r || n[1] !== a ? (s = {
        connectorId: r,
        redirectAfter: a
    }, n[0] = r, n[1] = a, n[2] = s) : s = n[2];
    let {
        isConnected: c,
        isLoading: l,
        error: f,
        openConnectorModal: p,
        refetch: m,
        gitlabConnectorCandidates: _
    } = d(s);
    if (c || l || _.length === 0 && !f) return null;
    let v;
    n[3] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, g.jsx)(u, {
        "aria-hidden": !0,
        className: `icon`
    }), n[3] = v) : v = n[3];
    let y;
    return n[4] !== f || n[5] !== p || n[6] !== m ? (y = (0, g.jsxs)(`div`, {
        className: `draggable no-draggable-children bg-token-bg-secondary sticky top-0 z-20 flex min-h-12 w-full flex-row items-center justify-center gap-1.5 px-3 py-2`,
        children: [v, (0, g.jsx)(`span`, {
            className: `text-token-text-primary flex items-center text-sm font-normal`,
            children: f ? (0, g.jsxs)(g.Fragment, {
                children: [(0, g.jsx)(o, {
                    id: `wham.environments.gitlab_connection.alert.load_error.message`,
                    defaultMessage: `Codex couldn't load your GitLab connection.`
                }), (0, g.jsx)(t, {
                    type: `button`,
                    color: `ghost`,
                    size: `small`,
                    className: `h-auto px-1 font-semibold underline`,
                    onClick: m,
                    children: (0, g.jsx)(o, {
                        id: `wham.environments.gitlab_connection.alert.retry.button.label`,
                        defaultMessage: `Retry`
                    })
                })]
            }) : (0, g.jsxs)(g.Fragment, {
                children: [(0, g.jsx)(o, {
                    id: `wham.environments.gitlab_connection.alert.disconnected.message`,
                    defaultMessage: `Your GitLab account is not connected.`
                }), (0, g.jsx)(t, {
                    type: `button`,
                    color: `ghost`,
                    size: `small`,
                    className: `h-auto px-1 font-semibold underline`,
                    onClick: p,
                    children: (0, g.jsx)(o, {
                        id: `wham.environments.gitlab_connection.alert.connect.button.label`,
                        defaultMessage: `Connect now`
                    })
                })]
            })
        })]
    }), n[4] = f, n[5] = p, n[6] = m, n[7] = y) : y = n[7], y
}
var h, g, _ = e((() => {
    h = c(), n(), l(), i(), f(), s(), g = a()
}));
export {
    _ as n, p as t
};
//# sourceMappingURL=66a75a18-bi7hb5373wtjw21m.js.map