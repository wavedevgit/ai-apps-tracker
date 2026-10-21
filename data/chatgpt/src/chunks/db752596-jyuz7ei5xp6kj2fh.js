import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as t,
    CN as n,
    dtt as r,
    f8 as i,
    fF as a,
    ftt as o,
    qB as s,
    tV as c,
    uF as l,
    yN as u
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Rn as d,
    wn as f,
    zn as ee
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Lut as p,
    Ost as m,
    Rut as te,
    i6 as h,
    kst as g,
    r6 as ne
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    i as _,
    r as v
} from "./1c86a5ac-g1atr1nc30evonbc.js";

function y(e) {
    "use forget";
    let i = (0, b.c)(43),
        {
            clientThreadId: a,
            viewParams: o,
            onRequestClose: c,
            onOnboardingCompleted: u,
            onOnboardingCancelled: d,
            onSendFollowUpMessage: f,
            onIntrinsicHeight: p,
            onRequestModal: h,
            onRequestLinkToConnector: g
        } = e,
        _ = ee(),
        y = n(),
        w, k;
    i[0] === a ? (w = i[1], k = i[2]) : (w = l(a), k = ne(w), i[0] = a, i[1] = w, i[2] = k);
    let A = k,
        j;
    i[3] === Symbol.for(`react.memo_cache_sentinel`) ? (j = D(), i[3] = j) : j = i[3];
    let M = j,
        N;
    i[4] === Symbol.for(`react.memo_cache_sentinel`) ? (N = O(M, S), i[4] = N) : N = i[4];
    let P = N,
        F;
    i[5] === Symbol.for(`react.memo_cache_sentinel`) ? (F = {
        appOverride: m,
        templateOverride: C
    }, i[5] = F) : F = i[5];
    let I = te(P, F),
        L = I.isError || !I.html && !I.isLoading,
        R;
    i[6] === w ? R = i[7] : (R = () => w.serverId$(), i[6] = w, i[7] = R);
    let z = t(R),
        B = _.locale ?? `en-US`,
        V;
    i[8] !== z || i[9] !== I.csp || i[10] !== I.domain || i[11] !== I.redirectDomains ? (V = e => {
        let {
            href: t,
            redirectUrl: n,
            openMode: i
        } = e, a = n === !1 ? null : z ? new URL(s(z), window.location.origin).toString() : new URL(window.location.href).toString();
        v({
            attributionId: P.metadata.attribution_id ?? P.widgetParent,
            conversationId: z,
            href: t,
            messageId: P.widgetId,
            resolvedPineappleUri: x,
            csp: I.csp,
            redirectDomains: I.redirectDomains,
            domain: I.domain,
            distributionChannel: r.OPENAI,
            redirectUrl: a,
            openMode: i,
            sectionLocation: `widget`,
            widgetName: P.widgetType,
            widgetSessionId: P.widgetSessionId
        })
    }, i[8] = z, i[9] = I.csp, i[10] = I.domain, i[11] = I.redirectDomains, i[12] = V) : V = i[12];
    let H = V,
        U;
    i[13] === p ? U = i[14] : (U = p ? e => p(e) : void 0, i[13] = p, i[14] = U);
    let W;
    i[15] !== d || i[16] !== u || i[17] !== f ? (W = e => {
        e.prompt === T ? u?.() : e.prompt === E && d?.(), f?.(e)
    }, i[15] = d, i[16] = u, i[17] = f, i[18] = W) : W = i[18];
    let G, K, q, J;
    i[19] === A ? (G = i[20], K = i[21], q = i[22], J = i[23]) : (J = (e, t) => A.callTool$({
        appUri: x,
        name: e,
        args: t,
        callContext: {
            messageId: P.widgetId
        }
    }), G = e => A.uploadFile$(x, e), K = e => A.getFileDownloadUrl$(x, e.fileId), q = e => A.getFileMetadata$(x, e.fileId), i[19] = A, i[20] = G, i[21] = K, i[22] = q, i[23] = J);
    let Y;
    i[24] !== H || i[25] !== c || i[26] !== g || i[27] !== h || i[28] !== G || i[29] !== K || i[30] !== q || i[31] !== U || i[32] !== W || i[33] !== J ? (Y = {
        notifyIntrinsicHeight: U,
        openExternal: H,
        requestModal: h,
        requestLinkToConnector: g,
        sendFollowUpMessage: W,
        callTool: J,
        uploadFile: G,
        getFileDownloadUrl: K,
        getFileMetadata: q
    }, c && (Y.requestClose = c, Y.notifyEscapeKey = c), i[24] = H, i[25] = c, i[26] = g, i[27] = h, i[28] = G, i[29] = K, i[30] = q, i[31] = U, i[32] = W, i[33] = J, i[34] = Y) : Y = i[34];
    let X = Y,
        Z = y ?? `light`,
        Q = z ?? null,
        $;
    return i[35] !== X || i[36] !== L || i[37] !== B || i[38] !== I || i[39] !== Z || i[40] !== Q || i[41] !== o ? ($ = {
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
    }, i[35] = X, i[36] = L, i[37] = B, i[38] = I, i[39] = Z, i[40] = Q, i[41] = o, i[42] = $) : $ = i[42], $
}
var b, x, S, C, w, T, E, D, O, k, A = e((() => {
    b = f(), o(), a(), _(), h(), p(), g(), i(), u(), c(), d(), x = `connectors://${m}`, S = `olympic`, C = `internal://olympic`, w = () => typeof crypto < `u` && `randomUUID` in crypto ? crypto.randomUUID() : `potion_olympic_${Math.random().toString(36).slice(2)}`, T = `olympic_onboarding_completed`, E = `olympic_onboarding_cancelled`, D = () => {
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
        distributionChannel: r.OPENAI,
        fitWidth: !0,
        widgetSessionBehavior: `hide`
    }), k = () => O(D(), C)
}));
export {
    A as n, y as r, k as t
};
//# sourceMappingURL=db752596-jyuz7ei5xp6kj2fh.js.map