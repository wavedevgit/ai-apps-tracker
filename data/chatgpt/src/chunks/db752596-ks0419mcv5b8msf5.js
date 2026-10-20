import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CN as t,
    N5 as n,
    fF as r,
    gtt as i,
    h8 as a,
    htt as o,
    qB as ee,
    tV as s,
    uF as c,
    yN as l
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Rn as u,
    wn as d,
    zn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ast as p,
    But as te,
    i6 as m,
    jst as h,
    r6 as g,
    zut as _
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    i as v,
    r as ne
} from "./1c86a5ac-dcq271bjcu1g9eui.js";

function y(e) {
    "use forget";
    let r = (0, b.c)(43),
        {
            clientThreadId: i,
            viewParams: a,
            onRequestClose: s,
            onOnboardingCompleted: l,
            onOnboardingCancelled: u,
            onSendFollowUpMessage: d,
            onIntrinsicHeight: m,
            onRequestModal: h,
            onRequestLinkToConnector: _
        } = e,
        v = f(),
        y = t(),
        w, k;
    r[0] === i ? (w = r[1], k = r[2]) : (w = c(i), k = g(w), r[0] = i, r[1] = w, r[2] = k);
    let A = k,
        j;
    r[3] === Symbol.for(`react.memo_cache_sentinel`) ? (j = D(), r[3] = j) : j = r[3];
    let M = j,
        N;
    r[4] === Symbol.for(`react.memo_cache_sentinel`) ? (N = O(M, S), r[4] = N) : N = r[4];
    let P = N,
        F;
    r[5] === Symbol.for(`react.memo_cache_sentinel`) ? (F = {
        appOverride: p,
        templateOverride: C
    }, r[5] = F) : F = r[5];
    let I = te(P, F),
        L = I.isError || !I.html && !I.isLoading,
        R;
    r[6] === w ? R = r[7] : (R = () => w.serverId$(), r[6] = w, r[7] = R);
    let z = n(R),
        B = v.locale ?? `en-US`,
        V;
    r[8] !== z || r[9] !== I.csp || r[10] !== I.domain || r[11] !== I.redirectDomains ? (V = e => {
        let {
            href: t,
            redirectUrl: n,
            openMode: r
        } = e, i = n === !1 ? null : z ? new URL(ee(z), window.location.origin).toString() : new URL(window.location.href).toString();
        ne({
            attributionId: P.metadata.attribution_id ?? P.widgetParent,
            conversationId: z,
            href: t,
            messageId: P.widgetId,
            resolvedPineappleUri: x,
            csp: I.csp,
            redirectDomains: I.redirectDomains,
            domain: I.domain,
            distributionChannel: o.OPENAI,
            redirectUrl: i,
            openMode: r,
            sectionLocation: `widget`,
            widgetName: P.widgetType,
            widgetSessionId: P.widgetSessionId
        })
    }, r[8] = z, r[9] = I.csp, r[10] = I.domain, r[11] = I.redirectDomains, r[12] = V) : V = r[12];
    let H = V,
        U;
    r[13] === m ? U = r[14] : (U = m ? e => m(e) : void 0, r[13] = m, r[14] = U);
    let W;
    r[15] !== u || r[16] !== l || r[17] !== d ? (W = e => {
        e.prompt === T ? l?.() : e.prompt === E && u?.(), d?.(e)
    }, r[15] = u, r[16] = l, r[17] = d, r[18] = W) : W = r[18];
    let G, K, q, J;
    r[19] === A ? (G = r[20], K = r[21], q = r[22], J = r[23]) : (J = (e, t) => A.callTool$({
        appUri: x,
        name: e,
        args: t,
        callContext: {
            messageId: P.widgetId
        }
    }), G = e => A.uploadFile$(x, e), K = e => A.getFileDownloadUrl$(x, e.fileId), q = e => A.getFileMetadata$(x, e.fileId), r[19] = A, r[20] = G, r[21] = K, r[22] = q, r[23] = J);
    let Y;
    r[24] !== H || r[25] !== s || r[26] !== _ || r[27] !== h || r[28] !== G || r[29] !== K || r[30] !== q || r[31] !== U || r[32] !== W || r[33] !== J ? (Y = {
        notifyIntrinsicHeight: U,
        openExternal: H,
        requestModal: h,
        requestLinkToConnector: _,
        sendFollowUpMessage: W,
        callTool: J,
        uploadFile: G,
        getFileDownloadUrl: K,
        getFileMetadata: q
    }, s && (Y.requestClose = s, Y.notifyEscapeKey = s), r[24] = H, r[25] = s, r[26] = _, r[27] = h, r[28] = G, r[29] = K, r[30] = q, r[31] = U, r[32] = W, r[33] = J, r[34] = Y) : Y = r[34];
    let X = Y,
        Z = y ?? `light`,
        Q = z ?? null,
        $;
    return r[35] !== X || r[36] !== L || r[37] !== B || r[38] !== I || r[39] !== Z || r[40] !== Q || r[41] !== a ? ($ = {
        api: X,
        appUri: x,
        chatSDK: P,
        templatePointer: S,
        resolvedWidget: I,
        isWidgetError: L,
        ids: M,
        theme: Z,
        locale: B,
        viewParams: a,
        conversationId: Q
    }, r[35] = X, r[36] = L, r[37] = B, r[38] = I, r[39] = Z, r[40] = Q, r[41] = a, r[42] = $) : $ = r[42], $
}
var b, x, S, C, w, T, E, D, O, k, A = e((() => {
    b = d(), i(), r(), v(), m(), _(), h(), a(), l(), s(), u(), x = `connectors://${p}`, S = `olympic`, C = `internal://olympic`, w = () => typeof crypto < `u` && `randomUUID` in crypto ? crypto.randomUUID() : `potion_olympic_${Math.random().toString(36).slice(2)}`, T = `olympic_onboarding_completed`, E = `olympic_onboarding_cancelled`, D = () => {
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
        connectorId: p,
        toolMessageId: null,
        widgetType: S,
        widgetParent: x,
        toolInput: null,
        toolOutput: null,
        toolResponseMetadata: null,
        invocationUuid: e.invocationUuid,
        turnUuid: e.turnUuid,
        distributionChannel: o.OPENAI,
        fitWidth: !0,
        widgetSessionBehavior: `hide`
    }), k = () => O(D(), C)
}));
export {
    A as n, y as r, k as t
};
//# sourceMappingURL=db752596-ks0419mcv5b8msf5.js.map