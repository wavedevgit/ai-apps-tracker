import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Knt as t,
    Wnt as n,
    oR as r,
    pR as i,
    sR as a
} from "./4813494d-mdvd4786a87166cc.js";

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
    ...t
}) {
    n.logStructuredEvent(`ChatgptWorkspaceSeatTypeChanged`, c({
        ...t,
        surface: e
    }))
}

function u({
    surface: e,
    ...t
}) {
    n.logStructuredEvent(`ChatgptWorkspaceDefaultSeatTypeChanged`, c({
        ...t,
        surface: e
    }))
}
var d, f, p = e((() => {
    t(), i(), d = {
        default: r.CHATGPT_WORKSPACE_SEAT_TYPE_DEFAULT,
        usage_based: r.CHATGPT_WORKSPACE_SEAT_TYPE_USAGE_BASED,
        prolite: r.CHATGPT_WORKSPACE_SEAT_TYPE_PROLITE
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
//# sourceMappingURL=403cbcf1-kztvbfwhcv7tb71l.js.map