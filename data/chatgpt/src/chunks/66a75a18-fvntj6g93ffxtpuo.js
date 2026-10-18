import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as t,
    kT as n,
    pnt as r,
    ynt as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as a,
    Nn as o,
    Rn as s,
    wn as c
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Bt as l,
    zt as u
} from "./c470f5ab-m68dth1hatzjj8yh.js";
import {
    i as d,
    r as f
} from "./ab92372e-glzrgn0c7jblr8e0.js";

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
    let t = (0, h.c)(8),
        {
            connectorId: r,
            redirectAfter: i
        } = e,
        a = i === void 0 ? `/codex/cloud/settings/environments` : i,
        s;
    t[0] !== r || t[1] !== a ? (s = {
        connectorId: r,
        redirectAfter: a
    }, t[0] = r, t[1] = a, t[2] = s) : s = t[2];
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
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, g.jsx)(u, {
        "aria-hidden": !0,
        className: `icon`
    }), t[3] = v) : v = t[3];
    let y;
    return t[4] !== f || t[5] !== p || t[6] !== m ? (y = (0, g.jsxs)(`div`, {
        className: `draggable no-draggable-children bg-token-bg-secondary sticky top-0 z-20 flex min-h-12 w-full flex-row items-center justify-center gap-1.5 px-3 py-2`,
        children: [v, (0, g.jsx)(`span`, {
            className: `text-token-text-primary flex items-center text-sm font-normal`,
            children: f ? (0, g.jsxs)(g.Fragment, {
                children: [(0, g.jsx)(o, {
                    id: `wham.environments.gitlab_connection.alert.load_error.message`,
                    defaultMessage: `Codex couldn't load your GitLab connection.`
                }), (0, g.jsx)(n, {
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
                }), (0, g.jsx)(n, {
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
    }), t[4] = f, t[5] = p, t[6] = m, t[7] = y) : y = t[7], y
}
var h, g, _ = e((() => {
    h = c(), t(), l(), i(), f(), s(), g = a()
}));
export {
    _ as n, p as t
};
//# sourceMappingURL=66a75a18-fvntj6g93ffxtpuo.js.map