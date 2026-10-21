import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dat as t,
    JE as n,
    KE as r,
    Nat as i
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Ln as a,
    Rn as o,
    s,
    w as c,
    zn as l
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    QCn as u,
    twn as d
} from "./conversation-small-cawdu7il3ha6y70c.js";

function f(e, n) {
    return c({
        queryKey: [`plugin-shares`, e, n],
        queryFn: ({
            signal: r
        }) => u(n, r, e).catch(e => {
            if (e instanceof t && [403, 404].includes(e.status)) return null;
            throw e
        }),
        staleTime: 6e4,
        retry: !1,
        enabled: e != null
    })
}
var p = e((() => {
    d(), i(), s()
}));

function m(e, t) {
    return t != null && (e.scope === `USER` || e.scope === `WORKSPACE` && e.workspaceId === t)
}

function h({
    plugin: e,
    shares: t,
    workspacePublishingEnabled: n,
    workspaceId: r
}) {
    return m(e, r) && t != null && (n || e.scope === `WORKSPACE` && t.discoverability === `LISTED`) && (t.can_share_to_workspace === !0 || e.scope === `WORKSPACE` && t.can_publish_to_workspace === !0)
}

function g({
    plugin: e,
    shares: t,
    workspacePublishingEnabled: n,
    workspaceId: r,
    currentAccount: i
}) {
    let a = i != null && i.getWorkspaceId() === r && e.creatorAccountUserId != null && e.creatorAccountUserId === (e.scope === `USER` ? i.authUserId : i.normalizedAccountUserId);
    return h({
        plugin: e,
        shares: t,
        workspacePublishingEnabled: n,
        workspaceId: r
    }) && (a || t?.current_user_permissions == null || t.current_user_permissions.includes(`chatgpt.plugin_share.share`))
}

function _(e, t) {
    return e.sourceGizmoId != null && e.discoverability === `PRIVATE` && (e.scope === `USER` || e.sharePrincipals?.every(e => e.principal_type === `user` && e.principal_id === t) === !0)
}

function v(e, t) {
    return e.some(e => r(t, e)?.status === `ONLY_ME`)
}
var y, b, x, S, C = e((() => {
    n(), l(), y = a({
        id: `chatgpt.plugins.details.apps.workspace_approval.notice.description`,
        defaultMessage: `This app must be approved by a workspace admin before other people can use it.`
    }), b = a({
        id: `chatgpt.plugins.details.apps.workspace_approval.review.button.label`,
        defaultMessage: `Review app`
    }), x = o({
        approvalRequired: {
            id: `chatgpt.plugins.details.apps.row.workspace_status.approval_required`,
            defaultMessage: `Admin approval required`
        },
        available: {
            id: `chatgpt.plugins.details.apps.row.workspace_status.available`,
            defaultMessage: `Available in workspace`
        },
        disabled: {
            id: `chatgpt.plugins.details.apps.row.workspace_status.disabled`,
            defaultMessage: `Disabled by admin`
        }
    }), S = a({
        id: `chatgpt.plugins.sharing.menu.retry.label`,
        defaultMessage: `Couldn't load controls. Retry`
    })
}));
export {
    m as a, y as c, f as d, p as f, C as i, b as l, h as n, _ as o, v as r, S as s, g as t, x as u
};
//# sourceMappingURL=e231198e-o98eyxvmbzkyqd01.js.map