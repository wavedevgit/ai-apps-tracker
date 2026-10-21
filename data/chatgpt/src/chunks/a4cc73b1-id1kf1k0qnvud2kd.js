import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    gtt as t,
    htt as n
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    In as r,
    Rn as i
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    DAt as a,
    OAt as o,
    PAt as s
} from "./conversation-small-cy5f8pl0g26s86so.js";
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
            resolved_pineapple_uri: a,
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
        connectorId: o,
        toolMessageId: null,
        widgetType: f,
        widgetParent: a,
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
    t(), s(), c(), i(), f = `ledger`, p = `internal://ledger`, m = r({
        id: `mattress.financeAccountLinking.title`,
        defaultMessage: `Connect finances`
    })
}));
export {
    h as i, d as n, m as r, u as t
};
//# sourceMappingURL=a4cc73b1-id1kf1k0qnvud2kd.js.map