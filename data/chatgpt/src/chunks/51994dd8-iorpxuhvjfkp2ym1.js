import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $ot as t,
    Az as n,
    Fst as r,
    Fv as i,
    J5 as a,
    JT as o,
    L1 as s,
    N1 as c,
    Qot as l,
    Sw as u,
    Y5 as d,
    Z_ as f,
    cW as p,
    jz as m,
    lW as h,
    qT as g,
    tct as _,
    ww as v
} from "./4813494d-dfpv67hlp00pbohr.js";
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
} from "./99a48954-di1yvdw6ghqm4hqh.js";

function k(e) {
    for (let t of [`sharepoint_admin`, `teams_admin`, `outlook_email_admin`])
        if (e.knowledgeConfig.some(({
                key: e
            }) => e === t)) return t
}

function A(e) {
    return f[M[e]]
}

function j(e, t) {
    return t.get(A(e))
}
var M, N = e((() => {
        _(), i(), M = {
            sharepoint_admin: r.SHAREPOINT_ADMIN_CONNECTOR,
            teams_admin: r.TEAMS_ADMIN_CONNECTOR,
            outlook_email_admin: r.OUTLOOK_EMAIL_ADMIN_CONNECTOR
        }
    })),
    P, F, I, L = e((() => {
        P = T(), o(), v(), m(), C(), F = y(), I = e => {
            "use forget";
            let t = (0, P.c)(12),
                {
                    onClose: r,
                    hasError: i,
                    onRetry: a
                } = e,
                o = i !== void 0 && i,
                s = E(),
                c;
            t[0] === s ? c = t[1] : (c = s.formatMessage({
                id: `contextual-answers.admin.sync.setup.loading.title`,
                defaultMessage: `Sync setup`
            }), t[0] = s, t[1] = c);
            let l = o ? `alert` : `status`,
                d;
            t[2] !== o || t[3] !== a ? (d = o ? (0, F.jsxs)(F.Fragment, {
                children: [(0, F.jsx)(x, {
                    id: `contextual-answers.admin.sync.setup.loading.error`,
                    defaultMessage: `We couldn't load sync setup. Please try again.`
                }), a && (0, F.jsx)(g, {
                    color: `secondary`,
                    onClick: a,
                    children: (0, F.jsx)(x, {
                        id: `contextual-answers.admin.sync.setup.loading.retry`,
                        defaultMessage: `Retry`
                    })
                })]
            }) : (0, F.jsxs)(F.Fragment, {
                children: [(0, F.jsx)(n, {}), (0, F.jsx)(x, {
                    id: `contextual-answers.admin.sync.setup.loading.status`,
                    defaultMessage: `Loading sync setup…`
                })]
            }), t[2] = o, t[3] = a, t[4] = d) : d = t[4];
            let f;
            t[5] !== l || t[6] !== d ? (f = (0, F.jsx)(`div`, {
                className: `flex min-h-40 flex-col items-center justify-center gap-4 p-6 text-center`,
                role: l,
                children: d
            }), t[5] = l, t[6] = d, t[7] = f) : f = t[7];
            let p;
            return t[8] !== r || t[9] !== c || t[10] !== f ? (p = (0, F.jsx)(u, {
                testId: `modal-microsoft-admin-sync-loading`,
                isOpen: !0,
                onClose: r,
                size: `custom`,
                className: `max-w-[420px]`,
                title: c,
                children: f
            }), t[8] = r, t[9] = c, t[10] = f, t[11] = p) : p = t[11], p
        }
    }));

function R(e, t, n) {
    let r = c(l())?.getWorkspaceId(),
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
        s = a?.action_param_schemas;
    return {
        hasParameterConstraints: s != null && Object.keys(s).length > 0,
        isLoading: o
    }
}

function z({
    className: e
}) {
    return (0, V.jsxs)(`div`, {
        className: a(`bg-token-main-surface-secondary text-token-text-secondary flex items-start gap-3 rounded-xl p-3 text-sm`, e),
        children: [(0, V.jsx)(h, {
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
        className: a(`bg-token-main-surface-secondary text-token-text-secondary flex items-start gap-3 rounded-xl p-3 text-sm`, e),
        children: [(0, V.jsx)(h, {
            className: `icon mt-0.5 h-4 w-4 shrink-0`
        }), (0, V.jsx)(x, {
            ...H.microsoftSyncScopeNotice
        })]
    })
}
var V, H, U = e((() => {
    t(), D(), s(), w(), d(), C(), p(), V = y(), H = b({
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
//# sourceMappingURL=51994dd8-iorpxuhvjfkp2ym1.js.map