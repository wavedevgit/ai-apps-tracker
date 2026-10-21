import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bst as t,
    Cw as n,
    Fv as r,
    JT as i,
    Mz as a,
    P1 as o,
    R1 as s,
    Tw as c,
    X5 as l,
    Y5 as u,
    YT as d,
    Z_ as f,
    ist as p,
    jz as m,
    lW as h,
    oct as g,
    rst as _,
    uW as v
} from "./4813494d-lxa3wniynbx9ka2a.js";
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
} from "./99a48954-mgardf9h5h58bj78.js";

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
        g(), r(), M = {
            sharepoint_admin: t.SHAREPOINT_ADMIN_CONNECTOR,
            teams_admin: t.TEAMS_ADMIN_CONNECTOR,
            outlook_email_admin: t.OUTLOOK_EMAIL_ADMIN_CONNECTOR
        }
    })),
    P, F, I, L = e((() => {
        P = T(), d(), c(), a(), C(), F = y(), I = e => {
            "use forget";
            let t = (0, P.c)(12),
                {
                    onClose: r,
                    hasError: a,
                    onRetry: o
                } = e,
                s = a !== void 0 && a,
                c = E(),
                l;
            t[0] === c ? l = t[1] : (l = c.formatMessage({
                id: `contextual-answers.admin.sync.setup.loading.title`,
                defaultMessage: `Sync setup`
            }), t[0] = c, t[1] = l);
            let u = s ? `alert` : `status`,
                d;
            t[2] !== s || t[3] !== o ? (d = s ? (0, F.jsxs)(F.Fragment, {
                children: [(0, F.jsx)(x, {
                    id: `contextual-answers.admin.sync.setup.loading.error`,
                    defaultMessage: `We couldn't load sync setup. Please try again.`
                }), o && (0, F.jsx)(i, {
                    color: `secondary`,
                    onClick: o,
                    children: (0, F.jsx)(x, {
                        id: `contextual-answers.admin.sync.setup.loading.retry`,
                        defaultMessage: `Retry`
                    })
                })]
            }) : (0, F.jsxs)(F.Fragment, {
                children: [(0, F.jsx)(m, {}), (0, F.jsx)(x, {
                    id: `contextual-answers.admin.sync.setup.loading.status`,
                    defaultMessage: `Loading sync setup…`
                })]
            }), t[2] = s, t[3] = o, t[4] = d) : d = t[4];
            let f;
            t[5] !== u || t[6] !== d ? (f = (0, F.jsx)(`div`, {
                className: `flex min-h-40 flex-col items-center justify-center gap-4 p-6 text-center`,
                role: u,
                children: d
            }), t[5] = u, t[6] = d, t[7] = f) : f = t[7];
            let p;
            return t[8] !== r || t[9] !== l || t[10] !== f ? (p = (0, F.jsx)(n, {
                testId: `modal-microsoft-admin-sync-loading`,
                isOpen: !0,
                onClose: r,
                size: `custom`,
                className: `max-w-[420px]`,
                title: l,
                children: f
            }), t[8] = r, t[9] = l, t[10] = f, t[11] = p) : p = t[11], p
        }
    }));

function R(e, t, n) {
    let r = o(_())?.getWorkspaceId(),
        i = e.primaryConnector.id,
        {
            data: a,
            isLoading: s
        } = S(O({
            queryKeyPrefix: `connector-workspace-permissions`,
            workspaceId: r,
            connectorId: i,
            enabled: !!(r && i),
            transport: t,
            actorId: n
        })),
        c = a?.action_param_schemas;
    return {
        hasParameterConstraints: c != null && Object.keys(c).length > 0,
        isLoading: s
    }
}

function z({
    className: e
}) {
    return (0, V.jsxs)(`div`, {
        className: u(`bg-token-main-surface-secondary text-token-text-secondary flex items-start gap-3 rounded-xl p-3 text-sm`, e),
        children: [(0, V.jsx)(v, {
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
        children: [(0, V.jsx)(v, {
            className: `icon mt-0.5 h-4 w-4 shrink-0`
        }), (0, V.jsx)(x, {
            ...H.microsoftSyncScopeNotice
        })]
    })
}
var V, H, U = e((() => {
    p(), D(), s(), w(), l(), C(), h(), V = y(), H = b({
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
//# sourceMappingURL=51994dd8-co85ycdizdiijjtf.js.map