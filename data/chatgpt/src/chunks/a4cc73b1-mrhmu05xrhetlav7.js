import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Mtt as t,
    jtt as n
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    In as r,
    Rn as i
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AAt as a,
    CAt as o,
    wAt as s
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    o as c,
    t as l
} from "./4cf35c7a-fuufw34ubkxvq703.js";

function u() {
    let e = `mattress_ledger_detail_${typeof crypto<`u`&&`randomUUID`in crypto?crypto.randomUUID():Math.random().toString(36).slice(2)}`;
    return {
        invocationUuid: e,
        turnUuid: e,
        widgetId: `mattress-ledger-account-${e}`
    }
}

function d({
    invocationUuid: e,
    turnUuid: t,
    widgetId: r
}, i) {
    return {
        csp: null,
        path: null,
        linkId: null,
        isComplete: !0,
        oaiSubjectId: null,
        oaiSessionId: null,
        oaiOrganizationId: null,
        widgetSessionId: null,
        isError: !1,
        messages: [],
        metadata: {
            html_asset_pointer: p,
            resolved_pineapple_uri: o,
            prefers_border: !1,
            fit_width: !1,
            hide_widget_attribution: !0,
            widget_session_behavior: `hide`,
            turn_uuid: t,
            invocation_uuid: e,
            ...i ? {
                widget_state: JSON.stringify({
                    [l]: i.sensitiveValuesHidden
                })
            } : {}
        },
        widgetId: r,
        connectorId: s,
        toolMessageId: null,
        widgetType: f,
        widgetParent: o,
        toolInput: null,
        toolOutput: null,
        toolResponseMetadata: null,
        invocationUuid: e,
        turnUuid: t,
        distributionChannel: n.OPENAI,
        fitWidth: !1,
        widgetSessionBehavior: `hide`
    }
}
var f, p, m, h = e((() => {
    t(), a(), c(), i(), f = `ledger`, p = `internal://ledger`, m = r({
        id: `mattress.financeAccountLinking.title`,
        defaultMessage: `Connect finances`
    })
}));
export {
    h as i, d as n, m as r, u as t
};
//# sourceMappingURL=a4cc73b1-mrhmu05xrhetlav7.js.map