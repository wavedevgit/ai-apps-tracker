import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    G5 as t,
    I1 as n,
    Jot as r,
    K5 as i,
    M1 as a,
    Yot as o,
    cW as s,
    lW as c
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as l,
    Ln as u,
    Nn as d,
    O as f,
    Rn as p,
    s as m
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    n as h,
    t as g
} from "./99a48954-kr1rwr2qdycogma7.js";

function _(e, t, n) {
    let i = a(r())?.getWorkspaceId(),
        o = e.primaryConnector.id,
        {
            data: s,
            isLoading: c
        } = f(g({
            queryKeyPrefix: `connector-workspace-permissions`,
            workspaceId: i,
            connectorId: o,
            enabled: !!(i && o),
            transport: t,
            actorId: n
        })),
        l = s?.action_param_schemas;
    return {
        hasParameterConstraints: l != null && Object.keys(l).length > 0,
        isLoading: c
    }
}

function v({
    className: e
}) {
    return (0, b.jsxs)(`div`, {
        className: t(`bg-token-main-surface-secondary text-token-text-secondary flex items-start gap-3 rounded-xl p-3 text-sm`, e),
        children: [(0, b.jsx)(c, {
            className: `icon mt-0.5 h-4 w-4 shrink-0`
        }), (0, b.jsx)(d, {
            ...x.syncNotice
        })]
    })
}

function y({
    className: e
}) {
    return (0, b.jsxs)(`div`, {
        className: t(`bg-token-main-surface-secondary text-token-text-secondary flex items-start gap-3 rounded-xl p-3 text-sm`, e),
        children: [(0, b.jsx)(c, {
            className: `icon mt-0.5 h-4 w-4 shrink-0`
        }), (0, b.jsx)(d, {
            ...x.microsoftSyncScopeNotice
        })]
    })
}
var b, x, S = e((() => {
    o(), h(), n(), m(), i(), p(), s(), b = l(), x = u({
        syncNotice: {
            id: `FZVRSl`,
            defaultMessage: `Parameter Constraints apply only to direct app tools. They do not limit content retrieved from this app’s synced data.`
        },
        microsoftSyncScopeNotice: {
            id: `mTvu9v`,
            defaultMessage: `Content Selection settings, such as Files and Sites, apply only to synced search and fetch results. They do not limit other tools, such as reading or fetching documents. Disable non-sync tools to apply Content Selection effectively for your workspace.`
        }
    })
}));
export {
    _ as i, v as n, S as r, y as t
};
//# sourceMappingURL=51994dd8-m6vrhv89eb2d5zj6.js.map