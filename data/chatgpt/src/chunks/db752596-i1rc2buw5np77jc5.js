import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    IB as n,
    JP as r,
    KP as i,
    OB as a,
    Ret as o,
    aN as ee,
    i5 as s,
    tN as c,
    zet as l
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Rn as u,
    wn as d,
    zn as te
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Dst as f,
    Est as p,
    Fut as m,
    Iut as h,
    n6 as g,
    t6 as ne
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    i as _,
    r as v
} from "./1c86a5ac-g8o3s7m87lyivalf.js";

function y(e) {
    "use forget";
    let t = (0, b.c)(43),
        {
            clientThreadId: n,
            viewParams: r,
            onRequestClose: c,
            onOnboardingCompleted: l,
            onOnboardingCancelled: u,
            onSendFollowUpMessage: d,
            onIntrinsicHeight: f,
            onRequestModal: m,
            onRequestLinkToConnector: g
        } = e,
        _ = te(),
        y = ee(),
        w, k;
    t[0] === n ? (w = t[1], k = t[2]) : (w = i(n), k = ne(w), t[0] = n, t[1] = w, t[2] = k);
    let A = k,
        j;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (j = D(), t[3] = j) : j = t[3];
    let M = j,
        N;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (N = O(M, S), t[4] = N) : N = t[4];
    let P = N,
        F;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (F = {
        appOverride: p,
        templateOverride: C
    }, t[5] = F) : F = t[5];
    let I = h(P, F),
        L = I.isError || !I.html && !I.isLoading,
        R;
    t[6] === w ? R = t[7] : (R = () => w.serverId$(), t[6] = w, t[7] = R);
    let z = s(R),
        B = _.locale ?? `en-US`,
        V;
    t[8] !== z || t[9] !== I.csp || t[10] !== I.domain || t[11] !== I.redirectDomains ? (V = e => {
        let {
            href: t,
            redirectUrl: n,
            openMode: r
        } = e, i = n === !1 ? null : z ? new URL(a(z), window.location.origin).toString() : new URL(window.location.href).toString();
        v({
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
    }, t[8] = z, t[9] = I.csp, t[10] = I.domain, t[11] = I.redirectDomains, t[12] = V) : V = t[12];
    let H = V,
        U;
    t[13] === f ? U = t[14] : (U = f ? e => f(e) : void 0, t[13] = f, t[14] = U);
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
    t[24] !== H || t[25] !== c || t[26] !== g || t[27] !== m || t[28] !== G || t[29] !== K || t[30] !== q || t[31] !== U || t[32] !== W || t[33] !== J ? (Y = {
        notifyIntrinsicHeight: U,
        openExternal: H,
        requestModal: m,
        requestLinkToConnector: g,
        sendFollowUpMessage: W,
        callTool: J,
        uploadFile: G,
        getFileDownloadUrl: K,
        getFileMetadata: q
    }, c && (Y.requestClose = c, Y.notifyEscapeKey = c), t[24] = H, t[25] = c, t[26] = g, t[27] = m, t[28] = G, t[29] = K, t[30] = q, t[31] = U, t[32] = W, t[33] = J, t[34] = Y) : Y = t[34];
    let X = Y,
        Z = y ?? `light`,
        Q = z ?? null,
        $;
    return t[35] !== X || t[36] !== L || t[37] !== B || t[38] !== I || t[39] !== Z || t[40] !== Q || t[41] !== r ? ($ = {
        api: X,
        appUri: x,
        chatSDK: P,
        templatePointer: S,
        resolvedWidget: I,
        isWidgetError: L,
        ids: M,
        theme: Z,
        locale: B,
        viewParams: r,
        conversationId: Q
    }, t[35] = X, t[36] = L, t[37] = B, t[38] = I, t[39] = Z, t[40] = Q, t[41] = r, t[42] = $) : $ = t[42], $
}
var b, x, S, C, w, T, E, D, O, k, A = e((() => {
    b = d(), l(), r(), _(), g(), m(), f(), t(), c(), n(), u(), x = `connectors://${p}`, S = `olympic`, C = `internal://olympic`, w = () => typeof crypto < `u` && `randomUUID` in crypto ? crypto.randomUUID() : `potion_olympic_${Math.random().toString(36).slice(2)}`, T = `olympic_onboarding_completed`, E = `olympic_onboarding_cancelled`, D = () => {
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
//# sourceMappingURL=db752596-i1rc2buw5np77jc5.js.map