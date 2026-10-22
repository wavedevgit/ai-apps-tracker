import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as t,
    Aw as n,
    Iv as r,
    Ow as i,
    Q_ as a,
    Rz as o,
    U1 as s,
    _st as c,
    bct as l,
    c7 as u,
    eE as d,
    ect as f,
    l7 as p,
    oW as m,
    q1 as h,
    sW as g,
    vst as _,
    zz as v
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as y,
    Ln as b,
    Nn as x,
    O as S,
    Rn as C,
    s as w,
    wn as T,
    zn as E
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n as D,
    t as O
} from "./99a48954-c3chku9kaz5xncgc.js";

function k(e) {
    for (let t of [`sharepoint_admin`, `teams_admin`, `outlook_email_admin`])
        if (e.knowledgeConfig.some(({
                key: e
            }) => e === t)) return t
}

function A(e) {
    return a[M[e]]
}

function j(e, t) {
    return t.get(A(e))
}
var M, N = e((() => {
        l(), r(), M = {
            sharepoint_admin: f.SHAREPOINT_ADMIN_CONNECTOR,
            teams_admin: f.TEAMS_ADMIN_CONNECTOR,
            outlook_email_admin: f.OUTLOOK_EMAIL_ADMIN_CONNECTOR
        }
    })),
    P, F, I, L = e((() => {
        P = T(), d(), n(), v(), C(), F = y(), I = e => {
            "use forget";
            let n = (0, P.c)(12),
                {
                    onClose: r,
                    hasError: a,
                    onRetry: s
                } = e,
                c = a !== void 0 && a,
                l = E(),
                u;
            n[0] === l ? u = n[1] : (u = l.formatMessage({
                id: `contextual-answers.admin.sync.setup.loading.title`,
                defaultMessage: `Sync setup`
            }), n[0] = l, n[1] = u);
            let d = c ? `alert` : `status`,
                f;
            n[2] !== c || n[3] !== s ? (f = c ? (0, F.jsxs)(F.Fragment, {
                children: [(0, F.jsx)(x, {
                    id: `contextual-answers.admin.sync.setup.loading.error`,
                    defaultMessage: `We couldn't load sync setup. Please try again.`
                }), s && (0, F.jsx)(t, {
                    color: `secondary`,
                    onClick: s,
                    children: (0, F.jsx)(x, {
                        id: `contextual-answers.admin.sync.setup.loading.retry`,
                        defaultMessage: `Retry`
                    })
                })]
            }) : (0, F.jsxs)(F.Fragment, {
                children: [(0, F.jsx)(o, {}), (0, F.jsx)(x, {
                    id: `contextual-answers.admin.sync.setup.loading.status`,
                    defaultMessage: `Loading sync setup…`
                })]
            }), n[2] = c, n[3] = s, n[4] = f) : f = n[4];
            let p;
            n[5] !== d || n[6] !== f ? (p = (0, F.jsx)(`div`, {
                className: `flex min-h-40 flex-col items-center justify-center gap-4 p-6 text-center`,
                role: d,
                children: f
            }), n[5] = d, n[6] = f, n[7] = p) : p = n[7];
            let m;
            return n[8] !== r || n[9] !== u || n[10] !== p ? (m = (0, F.jsx)(i, {
                testId: `modal-microsoft-admin-sync-loading`,
                isOpen: !0,
                onClose: r,
                size: `custom`,
                className: `max-w-[420px]`,
                title: u,
                children: p
            }), n[8] = r, n[9] = u, n[10] = p, n[11] = m) : m = n[11], m
        }
    }));

function R(e, t, n) {
    let r = s(c())?.getWorkspaceId(),
        i = e.primaryConnector.id,
        {
            data: a,
            isLoading: o
        } = S(O({
            queryKeyPrefix: `connector-workspace-permissions`,
            workspaceId: r,
            connectorId: i,
            enabled: !!(r && i),
            transport: t,
            actorId: n
        })),
        l = a?.action_param_schemas;
    return {
        hasParameterConstraints: l != null && Object.keys(l).length > 0,
        isLoading: o
    }
}

function z({
    className: e
}) {
    return (0, V.jsxs)(`div`, {
        className: u(`bg-token-main-surface-secondary text-token-text-secondary flex items-start gap-3 rounded-xl p-3 text-sm`, e),
        children: [(0, V.jsx)(g, {
            className: `icon mt-0.5 h-4 w-4 shrink-0`
        }), (0, V.jsx)(x, {
            ...H.syncNotice
        })]
    })
}

function B({
    className: e
}) {
    return (0, V.jsxs)(`div`, {
        className: u(`bg-token-main-surface-secondary text-token-text-secondary flex items-start gap-3 rounded-xl p-3 text-sm`, e),
        children: [(0, V.jsx)(g, {
            className: `icon mt-0.5 h-4 w-4 shrink-0`
        }), (0, V.jsx)(x, {
            ...H.microsoftSyncScopeNotice
        })]
    })
}
var V, H, U = e((() => {
    _(), D(), h(), w(), p(), C(), m(), V = y(), H = b({
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
    I as a, A as c, R as i, k as l, z as n, L as o, U as r, j as s, B as t, N as u
};
//# sourceMappingURL=51994dd8-cneecn7zwtlqfyji.js.map