import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Snt as t,
    cR as n,
    nR as r,
    tR as i,
    wnt as a
} from "./4813494d-lxa3wniynbx9ka2a.js";

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
    a(), n(), d = {
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
//# sourceMappingURL=403cbcf1-jazeylklx1ax97f3.js.map