import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ott as t,
    TN as n,
    gF as r,
    k8 as i,
    kN as a,
    ktt as o,
    lV as s,
    q5 as c,
    tV as ee,
    vF as l
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Rn as u,
    wn as d,
    zn as te
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Dst as f,
    Est as p,
    Fut as m,
    Iut as h,
    c6 as g,
    l6 as _
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    i as v,
    r as ne
} from "./1c86a5ac-hup25agwdipwyaew.js";

function y(e) {
    "use forget";
    let n = (0, b.c)(43),
        {
            clientThreadId: i,
            viewParams: o,
            onRequestClose: s,
            onOnboardingCompleted: l,
            onOnboardingCancelled: u,
            onSendFollowUpMessage: d,
            onIntrinsicHeight: f,
            onRequestModal: m,
            onRequestLinkToConnector: _
        } = e,
        v = te(),
        y = a(),
        w, k;
    n[0] === i ? (w = n[1], k = n[2]) : (w = r(i), k = g(w), n[0] = i, n[1] = w, n[2] = k);
    let A = k,
        j;
    n[3] === Symbol.for(`react.memo_cache_sentinel`) ? (j = D(), n[3] = j) : j = n[3];
    let M = j,
        N;
    n[4] === Symbol.for(`react.memo_cache_sentinel`) ? (N = O(M, S), n[4] = N) : N = n[4];
    let P = N,
        F;
    n[5] === Symbol.for(`react.memo_cache_sentinel`) ? (F = {
        appOverride: p,
        templateOverride: C
    }, n[5] = F) : F = n[5];
    let I = h(P, F),
        L = I.isError || !I.html && !I.isLoading,
        R;
    n[6] === w ? R = n[7] : (R = () => w.serverId$(), n[6] = w, n[7] = R);
    let z = c(R),
        B = v.locale ?? `en-US`,
        V;
    n[8] !== z || n[9] !== I.csp || n[10] !== I.domain || n[11] !== I.redirectDomains ? (V = e => {
        let {
            href: n,
            redirectUrl: r,
            openMode: i
        } = e, a = r === !1 ? null : z ? new URL(ee(z), window.location.origin).toString() : new URL(window.location.href).toString();
        ne({
            attributionId: P.metadata.attribution_id ?? P.widgetParent,
            conversationId: z,
            href: n,
            messageId: P.widgetId,
            resolvedPineappleUri: x,
            csp: I.csp,
            redirectDomains: I.redirectDomains,
            domain: I.domain,
            distributionChannel: t.OPENAI,
            redirectUrl: a,
            openMode: i,
            sectionLocation: `widget`,
            widgetName: P.widgetType,
            widgetSessionId: P.widgetSessionId
        })
    }, n[8] = z, n[9] = I.csp, n[10] = I.domain, n[11] = I.redirectDomains, n[12] = V) : V = n[12];
    let H = V,
        U;
    n[13] === f ? U = n[14] : (U = f ? e => f(e) : void 0, n[13] = f, n[14] = U);
    let W;
    n[15] !== u || n[16] !== l || n[17] !== d ? (W = e => {
        e.prompt === T ? l?.() : e.prompt === E && u?.(), d?.(e)
    }, n[15] = u, n[16] = l, n[17] = d, n[18] = W) : W = n[18];
    let G, K, q, J;
    n[19] === A ? (G = n[20], K = n[21], q = n[22], J = n[23]) : (J = (e, t) => A.callTool$({
        appUri: x,
        name: e,
        args: t,
        callContext: {
            messageId: P.widgetId
        }
    }), G = e => A.uploadFile$(x, e), K = e => A.getFileDownloadUrl$(x, e.fileId), q = e => A.getFileMetadata$(x, e.fileId), n[19] = A, n[20] = G, n[21] = K, n[22] = q, n[23] = J);
    let Y;
    n[24] !== H || n[25] !== s || n[26] !== _ || n[27] !== m || n[28] !== G || n[29] !== K || n[30] !== q || n[31] !== U || n[32] !== W || n[33] !== J ? (Y = {
        notifyIntrinsicHeight: U,
        openExternal: H,
        requestModal: m,
        requestLinkToConnector: _,
        sendFollowUpMessage: W,
        callTool: J,
        uploadFile: G,
        getFileDownloadUrl: K,
        getFileMetadata: q
    }, s && (Y.requestClose = s, Y.notifyEscapeKey = s), n[24] = H, n[25] = s, n[26] = _, n[27] = m, n[28] = G, n[29] = K, n[30] = q, n[31] = U, n[32] = W, n[33] = J, n[34] = Y) : Y = n[34];
    let X = Y,
        Z = y ?? `light`,
        Q = z ?? null,
        $;
    return n[35] !== X || n[36] !== L || n[37] !== B || n[38] !== I || n[39] !== Z || n[40] !== Q || n[41] !== o ? ($ = {
        api: X,
        appUri: x,
        chatSDK: P,
        templatePointer: S,
        resolvedWidget: I,
        isWidgetError: L,
        ids: M,
        theme: Z,
        locale: B,
        viewParams: o,
        conversationId: Q
    }, n[35] = X, n[36] = L, n[37] = B, n[38] = I, n[39] = Z, n[40] = Q, n[41] = o, n[42] = $) : $ = n[42], $
}
var b, x, S, C, w, T, E, D, O, k, A = e((() => {
    b = d(), o(), l(), v(), _(), m(), f(), i(), n(), s(), u(), x = `connectors://${p}`, S = `olympic`, C = `internal://olympic`, w = () => typeof crypto < `u` && `randomUUID` in crypto ? crypto.randomUUID() : `potion_olympic_${Math.random().toString(36).slice(2)}`, T = `olympic_onboarding_completed`, E = `olympic_onboarding_cancelled`, D = () => {
        let e = w();
        return {
            turnUuid: e,
            invocationUuid: e,
            widgetId: `potion-olympic-${e}`
        }
    }, O = (e, n) => ({
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
            html_asset_pointer: n,
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
        distributionChannel: t.OPENAI,
        fitWidth: !0,
        widgetSessionBehavior: `hide`
    }), k = () => O(D(), C)
}));
export {
    A as n, y as r, k as t
};
//# sourceMappingURL=db752596-czc6eultyjf8dxhj.js.map