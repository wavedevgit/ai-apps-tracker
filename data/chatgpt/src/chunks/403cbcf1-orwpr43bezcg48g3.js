import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    bnt as t,
    cR as n,
    nR as r,
    tR as i,
    vnt as a
} from "./4813494d-bo7e0c29ngt4zgx0.js";

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
    a.logStructuredEvent(`ChatgptWorkspaceSeatTypeChanged`, c({
        ...t,
        surface: e
    }))
}

function u({
    surface: e,
    ...t
}) {
    a.logStructuredEvent(`ChatgptWorkspaceDefaultSeatTypeChanged`, c({
        ...t,
        surface: e
    }))
}
var d, f, p = e((() => {
    t(), n(), d = {
        default: i.CHATGPT_WORKSPACE_SEAT_TYPE_DEFAULT,
        usage_based: i.CHATGPT_WORKSPACE_SEAT_TYPE_USAGE_BASED,
        prolite: i.CHATGPT_WORKSPACE_SEAT_TYPE_PROLITE
    }, f = {
        members_tab: r.CHATGPT_WORKSPACE_SEAT_TYPE_CHANGE_SURFACE_MEMBERS_TAB,
        invites_tab: r.CHATGPT_WORKSPACE_SEAT_TYPE_CHANGE_SURFACE_INVITES_TAB,
        invite_requests_tab: r.CHATGPT_WORKSPACE_SEAT_TYPE_CHANGE_SURFACE_INVITE_REQUESTS_TAB,
        identity_settings: r.CHATGPT_WORKSPACE_SEAT_TYPE_CHANGE_SURFACE_IDENTITY_SETTINGS,
        billing_settings: r.CHATGPT_WORKSPACE_SEAT_TYPE_CHANGE_SURFACE_BILLING_SETTINGS
    }
}));
export {
    u as n, l as r, p as t
};
//# sourceMappingURL=403cbcf1-orwpr43bezcg48g3.js.map