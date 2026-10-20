import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    _nt as t,
    eR as n,
    hnt as r,
    sR as i,
    tR as a
} from "./4813494d-qsuygr73qjc6rh65.js";

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
    r.logStructuredEvent(`ChatgptWorkspaceSeatTypeChanged`, c({
        ...t,
        surface: e
    }))
}

function u({
    surface: e,
    ...t
}) {
    r.logStructuredEvent(`ChatgptWorkspaceDefaultSeatTypeChanged`, c({
        ...t,
        surface: e
    }))
}
var d, f, p = e((() => {
    t(), i(), d = {
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
//# sourceMappingURL=403cbcf1-lcllg9zqa9r074x5.js.map