import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Lnt as t,
    oR as n,
    pR as r,
    sR as i,
    znt as a
} from "./4813494d-d7xm9wsvhdfbag9a.js";

function o(e) {
    return d[e]
}

function s(e) {
    return f[e]
}

function c({
    flowId: e,
    workspaceId: t,
    previousSeatType: n,
    nextSeatType: r,
    surface: i
}) {
    return {
        flowId: e,
        workspaceId: t,
        previousSeatType: o(n),
        nextSeatType: o(r),
        surface: s(i)
    }
}

function l({
    surface: e,
    ...n
}) {
    t.logStructuredEvent(`ChatgptWorkspaceSeatTypeChanged`, c({
        ...n,
        surface: e
    }))
}

function u({
    surface: e,
    ...n
}) {
    t.logStructuredEvent(`ChatgptWorkspaceDefaultSeatTypeChanged`, c({
        ...n,
        surface: e
    }))
}
var d, f, p = e((() => {
    a(), r(), d = {
        default: n.CHATGPT_WORKSPACE_SEAT_TYPE_DEFAULT,
        usage_based: n.CHATGPT_WORKSPACE_SEAT_TYPE_USAGE_BASED,
        prolite: n.CHATGPT_WORKSPACE_SEAT_TYPE_PROLITE
    }, f = {
        members_tab: i.CHATGPT_WORKSPACE_SEAT_TYPE_CHANGE_SURFACE_MEMBERS_TAB,
        invites_tab: i.CHATGPT_WORKSPACE_SEAT_TYPE_CHANGE_SURFACE_INVITES_TAB,
        invite_requests_tab: i.CHATGPT_WORKSPACE_SEAT_TYPE_CHANGE_SURFACE_INVITE_REQUESTS_TAB,
        identity_settings: i.CHATGPT_WORKSPACE_SEAT_TYPE_CHANGE_SURFACE_IDENTITY_SETTINGS,
        billing_settings: i.CHATGPT_WORKSPACE_SEAT_TYPE_CHANGE_SURFACE_BILLING_SETTINGS
    }
}));
export {
    u as n, l as r, p as t
};
//# sourceMappingURL=403cbcf1-eynjepofcabqtk3s.js.map