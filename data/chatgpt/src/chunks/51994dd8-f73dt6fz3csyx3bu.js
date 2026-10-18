import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    IU as t,
    LU as n,
    Sot as r,
    b5 as i,
    o1 as a,
    u1 as o,
    xot as s,
    y5 as c
} from "./4813494d-cb22y2w19zwyshmt.js";
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
} from "./99a48954-kcp7qbxopdlqkg42.js";

function _(e, t, n) {
    let r = a(s())?.getWorkspaceId(),
        i = e.primaryConnector.id,
        {
            data: o,
            isLoading: c
        } = f(g({
            queryKeyPrefix: `connector-workspace-permissions`,
            workspaceId: r,
            connectorId: i,
            enabled: !!(r && i),
            transport: t,
            actorId: n
        })),
        l = o?.action_param_schemas;
    return {
        hasParameterConstraints: l != null && Object.keys(l).length > 0,
        isLoading: c
    }
}

function v({
    className: e
}) {
    return (0, b.jsxs)(`div`, {
        className: c(`bg-token-main-surface-secondary text-token-text-secondary flex items-start gap-3 rounded-xl p-3 text-sm`, e),
        children: [(0, b.jsx)(n, {
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
        className: c(`bg-token-main-surface-secondary text-token-text-secondary flex items-start gap-3 rounded-xl p-3 text-sm`, e),
        children: [(0, b.jsx)(n, {
            className: `icon mt-0.5 h-4 w-4 shrink-0`
        }), (0, b.jsx)(d, {
            ...x.microsoftSyncScopeNotice
        })]
    })
}
var b, x, S = e((() => {
    r(), h(), o(), m(), i(), p(), t(), b = l(), x = u({
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
//# sourceMappingURL=51994dd8-f73dt6fz3csyx3bu.js.map