import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    JB as t,
    P5 as n,
    _tt as r,
    bN as i,
    dF as a,
    g8 as o,
    gtt as s,
    nV as c,
    pF as l,
    wN as ee
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Rn as u,
    wn as d,
    zn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Hut as p,
    Nst as m,
    Pst as h,
    Uut as te,
    o6 as ne,
    s6 as g
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    i as _,
    r as v
} from "./1c86a5ac-l382ikjo20sm5hof.js";

function y(e) {
    "use forget";
    let r = (0, b.c)(43),
        {
            clientThreadId: i,
            viewParams: o,
            onRequestClose: c,
            onOnboardingCompleted: l,
            onOnboardingCancelled: u,
            onSendFollowUpMessage: d,
            onIntrinsicHeight: p,
            onRequestModal: h,
            onRequestLinkToConnector: g
        } = e,
        _ = f(),
        y = ee(),
        w, k;
    r[0] === i ? (w = r[1], k = r[2]) : (w = a(i), k = ne(w), r[0] = i, r[1] = w, r[2] = k);
    let A = k,
        j;
    r[3] === Symbol.for(`react.memo_cache_sentinel`) ? (j = D(), r[3] = j) : j = r[3];
    let M = j,
        N;
    r[4] === Symbol.for(`react.memo_cache_sentinel`) ? (N = O(M, S), r[4] = N) : N = r[4];
    let P = N,
        F;
    r[5] === Symbol.for(`react.memo_cache_sentinel`) ? (F = {
        appOverride: m,
        templateOverride: C
    }, r[5] = F) : F = r[5];
    let I = te(P, F),
        L = I.isError || !I.html && !I.isLoading,
        R;
    r[6] === w ? R = r[7] : (R = () => w.serverId$(), r[6] = w, r[7] = R);
    let z = n(R),
        B = _.locale ?? `en-US`,
        V;
    r[8] !== z || r[9] !== I.csp || r[10] !== I.domain || r[11] !== I.redirectDomains ? (V = e => {
        let {
            href: n,
            redirectUrl: r,
            openMode: i
        } = e, a = r === !1 ? null : z ? new URL(t(z), window.location.origin).toString() : new URL(window.location.href).toString();
        v({
            attributionId: P.metadata.attribution_id ?? P.widgetParent,
            conversationId: z,
            href: n,
            messageId: P.widgetId,
            resolvedPineappleUri: x,
            csp: I.csp,
            redirectDomains: I.redirectDomains,
            domain: I.domain,
            distributionChannel: s.OPENAI,
            redirectUrl: a,
            openMode: i,
            sectionLocation: `widget`,
            widgetName: P.widgetType,
            widgetSessionId: P.widgetSessionId
        })
    }, r[8] = z, r[9] = I.csp, r[10] = I.domain, r[11] = I.redirectDomains, r[12] = V) : V = r[12];
    let H = V,
        U;
    r[13] === p ? U = r[14] : (U = p ? e => p(e) : void 0, r[13] = p, r[14] = U);
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
    r[24] !== H || r[25] !== c || r[26] !== g || r[27] !== h || r[28] !== G || r[29] !== K || r[30] !== q || r[31] !== U || r[32] !== W || r[33] !== J ? (Y = {
        notifyIntrinsicHeight: U,
        openExternal: H,
        requestModal: h,
        requestLinkToConnector: g,
        sendFollowUpMessage: W,
        callTool: J,
        uploadFile: G,
        getFileDownloadUrl: K,
        getFileMetadata: q
    }, c && (Y.requestClose = c, Y.notifyEscapeKey = c), r[24] = H, r[25] = c, r[26] = g, r[27] = h, r[28] = G, r[29] = K, r[30] = q, r[31] = U, r[32] = W, r[33] = J, r[34] = Y) : Y = r[34];
    let X = Y,
        Z = y ?? `light`,
        Q = z ?? null,
        $;
    return r[35] !== X || r[36] !== L || r[37] !== B || r[38] !== I || r[39] !== Z || r[40] !== Q || r[41] !== o ? ($ = {
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
    }, r[35] = X, r[36] = L, r[37] = B, r[38] = I, r[39] = Z, r[40] = Q, r[41] = o, r[42] = $) : $ = r[42], $
}
var b, x, S, C, w, T, E, D, O, k, A = e((() => {
    b = d(), r(), l(), _(), g(), p(), h(), o(), i(), c(), u(), x = `connectors://${m}`, S = `olympic`, C = `internal://olympic`, w = () => typeof crypto < `u` && `randomUUID` in crypto ? crypto.randomUUID() : `potion_olympic_${Math.random().toString(36).slice(2)}`, T = `olympic_onboarding_completed`, E = `olympic_onboarding_cancelled`, D = () => {
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
        connectorId: m,
        toolMessageId: null,
        widgetType: S,
        widgetParent: x,
        toolInput: null,
        toolOutput: null,
        toolResponseMetadata: null,
        invocationUuid: e.invocationUuid,
        turnUuid: e.turnUuid,
        distributionChannel: s.OPENAI,
        fitWidth: !0,
        widgetSessionBehavior: `hide`
    }), k = () => O(D(), C)
}));
export {
    A as n, y as r, k as t
};
//# sourceMappingURL=db752596-iemrhaydedf1dm8e.js.map