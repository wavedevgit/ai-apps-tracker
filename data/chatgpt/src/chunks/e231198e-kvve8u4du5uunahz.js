import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bat as t,
    Pat as n,
    YE as r,
    qE as i
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    In as a,
    Ln as o,
    Rn as s,
    s as c,
    w as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    iwn as u,
    twn as d
} from "./conversation-small-kzsalymynzuddxee.js";

function f(e, t) {
    return l({
        queryKey: [`plugin-shares`, e, t],
        queryFn: ({
            signal: r
        }) => d(t, r, e).catch(e => {
            if (e instanceof n && [403, 404].includes(e.status)) return null;
            throw e
        }),
        staleTime: 6e4,
        retry: !1,
        enabled: e != null
    })
}
var p = e((() => {
    u(), t(), c()
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
    return e.some(e => i(t, e)?.status === `ONLY_ME`)
}
var v, y, b, x, S = e((() => {
    r(), s(), v = a({
        id: `chatgpt.plugins.details.apps.workspace_approval.notice.description`,
        defaultMessage: `This app must be approved by a workspace admin before other people can use it.`
    }), y = a({
        id: `chatgpt.plugins.details.apps.workspace_approval.review.button.label`,
        defaultMessage: `Review app`
    }), b = o({
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
    }), x = a({
        id: `chatgpt.plugins.sharing.menu.retry.label`,
        defaultMessage: `Couldn't load controls. Retry`
    })
}));
export {
    x as a, b as c, m as i, f as l, _ as n, v as o, S as r, y as s, g as t, p as u
};
//# sourceMappingURL=e231198e-kvve8u4du5uunahz.js.map