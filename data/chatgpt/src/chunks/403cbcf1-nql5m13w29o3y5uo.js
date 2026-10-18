import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Btt as t,
    FL as n,
    HL as r,
    Htt as i,
    IL as a
} from "./4813494d-cb22y2w19zwyshmt.js";

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
    i(), r(), d = {
        default: n.CHATGPT_WORKSPACE_SEAT_TYPE_DEFAULT,
        usage_based: n.CHATGPT_WORKSPACE_SEAT_TYPE_USAGE_BASED,
        prolite: n.CHATGPT_WORKSPACE_SEAT_TYPE_PROLITE
    }, f = {
        members_tab: a.CHATGPT_WORKSPACE_SEAT_TYPE_CHANGE_SURFACE_MEMBERS_TAB,
        invites_tab: a.CHATGPT_WORKSPACE_SEAT_TYPE_CHANGE_SURFACE_INVITES_TAB,
        invite_requests_tab: a.CHATGPT_WORKSPACE_SEAT_TYPE_CHANGE_SURFACE_INVITE_REQUESTS_TAB,
        identity_settings: a.CHATGPT_WORKSPACE_SEAT_TYPE_CHANGE_SURFACE_IDENTITY_SETTINGS,
        billing_settings: a.CHATGPT_WORKSPACE_SEAT_TYPE_CHANGE_SURFACE_BILLING_SETTINGS
    }
}));
export {
    u as n, l as r, p as t
};
//# sourceMappingURL=403cbcf1-nql5m13w29o3y5uo.js.map