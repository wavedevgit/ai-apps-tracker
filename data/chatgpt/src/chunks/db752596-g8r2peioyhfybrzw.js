import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    TN as n,
    gF as r,
    gtt as i,
    htt as a,
    j5 as o,
    kN as ee,
    lV as s,
    tV as c,
    vF as l
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Rn as u,
    wn as d,
    zn as te
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Dst as f,
    Nut as p,
    Ost as m,
    Put as h,
    l6 as g,
    u6 as _
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    i as v,
    r as ne
} from "./1c86a5ac-lb07v6ixov4iwl90.js";

function y(e) {
    "use forget";
    let t = (0, b.c)(43),
        {
            clientThreadId: n,
            viewParams: i,
            onRequestClose: s,
            onOnboardingCompleted: l,
            onOnboardingCancelled: u,
            onSendFollowUpMessage: d,
            onIntrinsicHeight: p,
            onRequestModal: m,
            onRequestLinkToConnector: _
        } = e,
        v = te(),
        y = ee(),
        w, k;
    t[0] === n ? (w = t[1], k = t[2]) : (w = r(n), k = g(w), t[0] = n, t[1] = w, t[2] = k);
    let A = k,
        j;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (j = D(), t[3] = j) : j = t[3];
    let M = j,
        N;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (N = O(M, S), t[4] = N) : N = t[4];
    let P = N,
        F;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (F = {
        appOverride: f,
        templateOverride: C
    }, t[5] = F) : F = t[5];
    let I = h(P, F),
        L = I.isError || !I.html && !I.isLoading,
        R;
    t[6] === w ? R = t[7] : (R = () => w.serverId$(), t[6] = w, t[7] = R);
    let z = o(R),
        B = v.locale ?? `en-US`,
        V;
    t[8] !== z || t[9] !== I.csp || t[10] !== I.domain || t[11] !== I.redirectDomains ? (V = e => {
        let {
            href: t,
            redirectUrl: n,
            openMode: r
        } = e, i = n === !1 ? null : z ? new URL(c(z), window.location.origin).toString() : new URL(window.location.href).toString();
        ne({
            attributionId: P.metadata.attribution_id ?? P.widgetParent,
            conversationId: z,
            href: t,
            messageId: P.widgetId,
            resolvedPineappleUri: x,
            csp: I.csp,
            redirectDomains: I.redirectDomains,
            domain: I.domain,
            distributionChannel: a.OPENAI,
            redirectUrl: i,
            openMode: r,
            sectionLocation: `widget`,
            widgetName: P.widgetType,
            widgetSessionId: P.widgetSessionId
        })
    }, t[8] = z, t[9] = I.csp, t[10] = I.domain, t[11] = I.redirectDomains, t[12] = V) : V = t[12];
    let H = V,
        U;
    t[13] === p ? U = t[14] : (U = p ? e => p(e) : void 0, t[13] = p, t[14] = U);
    let W;
    t[15] !== u || t[16] !== l || t[17] !== d ? (W = e => {
        e.prompt === T ? l?.() : e.prompt === E && u?.(), d?.(e)
    }, t[15] = u, t[16] = l, t[17] = d, t[18] = W) : W = t[18];
    let G, K, q, J;
    t[19] === A ? (G = t[20], K = t[21], q = t[22], J = t[23]) : (J = (e, t) => A.callTool$({
        appUri: x,
        name: e,
        args: t,
        callContext: {
            messageId: P.widgetId
        }
    }), G = e => A.uploadFile$(x, e), K = e => A.getFileDownloadUrl$(x, e.fileId), q = e => A.getFileMetadata$(x, e.fileId), t[19] = A, t[20] = G, t[21] = K, t[22] = q, t[23] = J);
    let Y;
    t[24] !== H || t[25] !== s || t[26] !== _ || t[27] !== m || t[28] !== G || t[29] !== K || t[30] !== q || t[31] !== U || t[32] !== W || t[33] !== J ? (Y = {
        notifyIntrinsicHeight: U,
        openExternal: H,
        requestModal: m,
        requestLinkToConnector: _,
        sendFollowUpMessage: W,
        callTool: J,
        uploadFile: G,
        getFileDownloadUrl: K,
        getFileMetadata: q
    }, s && (Y.requestClose = s, Y.notifyEscapeKey = s), t[24] = H, t[25] = s, t[26] = _, t[27] = m, t[28] = G, t[29] = K, t[30] = q, t[31] = U, t[32] = W, t[33] = J, t[34] = Y) : Y = t[34];
    let X = Y,
        Z = y ?? `light`,
        Q = z ?? null,
        $;
    return t[35] !== X || t[36] !== L || t[37] !== B || t[38] !== I || t[39] !== Z || t[40] !== Q || t[41] !== i ? ($ = {
        api: X,
        appUri: x,
        chatSDK: P,
        templatePointer: S,
        resolvedWidget: I,
        isWidgetError: L,
        ids: M,
        theme: Z,
        locale: B,
        viewParams: i,
        conversationId: Q
    }, t[35] = X, t[36] = L, t[37] = B, t[38] = I, t[39] = Z, t[40] = Q, t[41] = i, t[42] = $) : $ = t[42], $
}
var b, x, S, C, w, T, E, D, O, k, A = e((() => {
    b = d(), i(), l(), v(), _(), p(), m(), t(), n(), s(), u(), x = `connectors://${f}`, S = `olympic`, C = `internal://olympic`, w = () => typeof crypto < `u` && `randomUUID` in crypto ? crypto.randomUUID() : `potion_olympic_${Math.random().toString(36).slice(2)}`, T = `olympic_onboarding_completed`, E = `olympic_onboarding_cancelled`, D = () => {
        let e = w();
        return {
            turnUuid: e,
            invocationUuid: e,
            widgetId: `potion-olympic-${e}`
        }
    }, O = (e, t) => ({
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
            html_asset_pointer: t,
            resolved_pineapple_uri: x,
            prefers_border: !1,
            fit_width: !0,
            hide_widget_attribution: !0,
            widget_session_behavior: `hide`,
            turn_uuid: e.turnUuid,
            invocation_uuid: e.invocationUuid
        },
        widgetId: e.widgetId,
        connectorId: f,
        toolMessageId: null,
        widgetType: S,
        widgetParent: x,
        toolInput: null,
        toolOutput: null,
        toolResponseMetadata: null,
        invocationUuid: e.invocationUuid,
        turnUuid: e.turnUuid,
        distributionChannel: a.OPENAI,
        fitWidth: !0,
        widgetSessionBehavior: `hide`
    }), k = () => O(D(), C)
}));
export {
    A as n, y as r, k as t
};
//# sourceMappingURL=db752596-g8r2peioyhfybrzw.js.map