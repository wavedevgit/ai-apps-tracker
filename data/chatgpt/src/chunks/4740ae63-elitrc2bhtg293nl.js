import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as r,
    BK as i,
    FU as a,
    Io as o,
    Itt as s,
    NK as c,
    PU as l,
    VK as u,
    Wo as d,
    _tt as f,
    cot as p,
    cw as m,
    dz as h,
    fz as g,
    i5 as _,
    iw as v,
    lot as ee,
    ow as y,
    sw as b
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as x,
    Bn as S,
    Vn as C,
    jt as w,
    wn as T
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Fut as E,
    Gut as te,
    Hd as ne,
    Iut as D,
    Kut as O,
    Mut as re,
    Nut as k,
    Out as A,
    Put as ie,
    Stn as j,
    Ud as M,
    Xut as ae,
    Yut as oe,
    Zut as se,
    dJt as ce,
    fJt as N,
    i6 as P,
    jut as F,
    n6 as I,
    pJt as le,
    r6 as ue,
    t6 as de,
    uJt as fe,
    xtn as L
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as R,
    t as pe
} from "./f7e0bf69-hdoaxjv4q8h43ul9.js";
import {
    a as z,
    i as me,
    n as he,
    o as ge,
    r as _e,
    s as B,
    t as V
} from "./da39060d-kmeq2xnckyyf022v.js";

function ve() {
    return {
        ok: !0
    }
}
var ye, H, U, be, xe, Se, W, G = e((() => {
        ye = T(), N(), B(), R(), z(), I(), P(), se(), F(), O(), E(), V(), g(), f(), ee(), H = n(C()), U = S(), be = 400, xe = e => typeof e?.reason == `string` ? e.reason : typeof e?.status == `string` ? `Tool call returned status ${e.status}.` : `The launcher tool call failed before it returned a reason.`, Se = e => {
            if (e != null) try {
                return JSON.stringify(e)
            } catch {
                return
            }
        }, W = e => {
            "use forget";
            let t = (0, ye.c)(156),
                {
                    conversation: n,
                    session: r,
                    onClose: i,
                    safeAreaInsetBottom: a
                } = e,
                o = a === void 0 ? 0 : a,
                c;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = te(), t[0] = c) : c = t[0];
            let l = c,
                u;
            t[1] === n ? u = t[2] : (u = de(n), t[1] = n, t[2] = u);
            let d = u,
                f;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (f = p(), t[3] = f) : f = t[3];
            let {
                locale: m
            } = f, g;
            t[4] === r.widgetState ? g = t[5] : (g = Se(r.widgetState), t[4] = r.widgetState, t[5] = g);
            let _ = g,
                v = (0, H.useRef)(null),
                ee = (0, H.useRef)(null),
                y = (0, H.useRef)(null),
                b;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (b = {
                sessionId: null,
                toolMessageId: null
            }, t[6] = b) : b = t[6];
            let x = (0, H.useRef)(b),
                S;
            t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (S = {
                sessionId: null,
                html: null
            }, t[7] = S) : S = t[7];
            let C = (0, H.useRef)(S),
                [w, T] = (0, H.useState)(!1),
                [E, ne] = (0, H.useState)(!1),
                [O, k] = (0, H.useState)(!1),
                A;
            t[8] !== _ || t[9] !== r.chatSDK.metadata ? (A = {
                ...r.chatSDK.metadata,
                widget_state: _
            }, t[8] = _, t[9] = r.chatSDK.metadata, t[10] = A) : A = t[10];
            let j = r.toolInput ?? r.chatSDK.toolInput,
                M = r.toolOutput ?? r.chatSDK.toolOutput,
                se = r.toolResponseMetadata ?? r.chatSDK.toolResponseMetadata,
                N;
            t[11] !== r.chatSDK || t[12] !== M || t[13] !== se || t[14] !== A || t[15] !== j ? (N = {
                ...r.chatSDK,
                metadata: A,
                toolInput: j,
                toolOutput: M,
                toolResponseMetadata: se
            }, t[11] = r.chatSDK, t[12] = M, t[13] = se, t[14] = A, t[15] = j, t[16] = N) : N = t[16];
            let P = N,
                F = r.status === `error` && P.toolResponseMetadata?.error_code === `tunnel_client_network_access_denied`,
                I;
            t[17] === F ? I = t[18] : (I = {
                ...F ? {
                    skipResolution: !0
                } : {},
                skipNetworkRequestWhenCacheHit: !0
            }, t[17] = F, t[18] = I);
            let L = D(P, void 0, I),
                R = P.metadata.resolved_pineapple_uri ?? null,
                z;
            t[19] !== F || t[20] !== L.error ? (z = F || le(L.error), t[19] = F, t[20] = L.error, t[21] = z) : z = t[21];
            let B = z,
                V;
            bb0: {
                if (B) {
                    let e;
                    t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
                        message: ce.defaultMessage,
                        failurePoint: `tool_call`,
                        reason: fe
                    }, t[22] = e) : e = t[22], V = e;
                    break bb0
                }
                if (r.status === `error`) {
                    let e;
                    t[23] === r.toolResponseMetadata ? e = t[24] : (e = xe(r.toolResponseMetadata), t[23] = r.toolResponseMetadata, t[24] = e);
                    let n = typeof r.toolResponseMetadata?.status == `string` ? r.toolResponseMetadata.status : null,
                        i;
                    t[25] === n ? i = t[26] : (i = {
                        label: `Tool status`,
                        value: n
                    }, t[25] = n, t[26] = i);
                    let a = typeof r.toolResponseMetadata?.request_id == `string` ? r.toolResponseMetadata.request_id : null,
                        o;
                    t[27] === a ? o = t[28] : (o = {
                        label: `Request ID`,
                        value: a
                    }, t[27] = a, t[28] = o);
                    let s = typeof r.toolResponseMetadata?.x_oai_request_id == `string` ? r.toolResponseMetadata.x_oai_request_id : null,
                        c;
                    t[29] === s ? c = t[30] : (c = {
                        label: `X-OAI Request ID`,
                        value: s
                    }, t[29] = s, t[30] = c);
                    let l = typeof r.toolResponseMetadata?.error_http_status_code == `number` ? r.toolResponseMetadata.error_http_status_code : null,
                        u;
                    t[31] === l ? u = t[32] : (u = {
                        label: `HTTP status`,
                        value: l
                    }, t[31] = l, t[32] = u);
                    let d = typeof r.toolResponseMetadata?.error_code == `string` ? r.toolResponseMetadata.error_code : null,
                        f;
                    t[33] === d ? f = t[34] : (f = {
                        label: `Error code`,
                        value: d
                    }, t[33] = d, t[34] = f);
                    let p;
                    t[35] === R ? p = t[36] : (p = {
                        label: `Resolved URI`,
                        value: R
                    }, t[35] = R, t[36] = p);
                    let m;
                    t[37] !== i || t[38] !== o || t[39] !== c || t[40] !== u || t[41] !== f || t[42] !== p ? (m = [i, o, c, u, f, p], t[37] = i, t[38] = o, t[39] = c, t[40] = u, t[41] = f, t[42] = p, t[43] = m) : m = t[43];
                    let h;
                    t[44] !== e || t[45] !== m ? (h = {
                        message: `Unable to launch this app right now.`,
                        failurePoint: `tool_call`,
                        reason: e,
                        extraDebugItems: m
                    }, t[44] = e, t[45] = m, t[46] = h) : h = t[46], V = h;
                    break bb0
                }
                if (L.isError) {
                    let e;
                    t[47] === R ? e = t[48] : (e = {
                        label: `Resolved URI`,
                        value: R
                    }, t[47] = R, t[48] = e);
                    let n;
                    t[49] !== L.error || t[50] !== e ? (n = {
                        message: `Unable to resolve this app.`,
                        failurePoint: `widget_resolution_request`,
                        reason: `The /ecosystem/widget request failed while resolving the launcher iframe.`,
                        extraDebugItems: [e, ...ae(L.error)]
                    }, t[49] = L.error, t[50] = e, t[51] = n) : n = t[51], V = n;
                    break bb0
                }
                if (!L.html && !L.isLoading) {
                    let e;
                    t[52] === R ? e = t[53] : (e = {
                        message: `Unable to resolve this app.`,
                        failurePoint: `widget_resolution_response`,
                        reason: `The /ecosystem/widget response did not include widget HTML.`,
                        extraDebugItems: [{
                            label: `Resolved URI`,
                            value: R
                        }]
                    }, t[52] = R, t[53] = e), V = e;
                    break bb0
                }
                V = null
            }
            let W = V,
                G;
            t[54] !== L.hideFullScreenHeader || t[55] !== r.mode || t[56] !== W ? (G = W == null && r.mode === `fullscreen` && !L.hideFullScreenHeader && !s(), t[54] = L.hideFullScreenHeader, t[55] = r.mode, t[56] = W, t[57] = G) : G = t[57];
            let Ce = G,
                we;
            t[58] !== L.hideFullScreenHeader || t[59] !== r.mode || t[60] !== W ? (we = r.mode === `fullscreen` && (W != null || L.hideFullScreenHeader || s()), t[58] = L.hideFullScreenHeader, t[59] = r.mode, t[60] = W, t[61] = we) : we = t[61];
            let K = we,
                q;
            t[62] !== o || t[63] !== r.mode || t[64] !== K ? (q = r.mode === `fullscreen` ? {
                insets: {
                    top: K ? 40 : 0,
                    bottom: o,
                    left: 0,
                    right: 0
                }
            } : void 0, t[62] = o, t[63] = r.mode, t[64] = K, t[65] = q) : q = t[65];
            let J = q,
                Y = P.metadata.attribution_id ?? P.widgetParent,
                X;
            t[66] !== L.csp || t[67] !== L.domain || t[68] !== P.widgetId ? (X = {
                csp: L.csp,
                domain: L.domain,
                widgetId: P.widgetId,
                widgetRef: v
            }, t[66] = L.csp, t[67] = L.domain, t[68] = P.widgetId, t[69] = X) : X = t[69];
            let {
                openInApp: Te,
                setOpenInAppUrl: Z,
                shouldHideOpenInAppButton: Ee,
                widgetRedirectUrl: De
            } = he(X), Oe = r.mode === `modal` ? P.metadata.height_hint ?? L.heightHint ?? be : null, ke = r.mode === `modal` && W == null && !O, Ae, je;
            t[70] !== B || t[71] !== d || t[72] !== r.chatSDK || t[73] !== r.id || t[74] !== r.launchAttemptId || t[75] !== r.payload || t[76] !== r.status || t[77] !== r.toolResponseMetadata || t[78] !== W ? (Ae = () => {
                if (!W || (d.cancelWidgetStateQueue$(r.id), B)) return;
                let e = `${r.id}:${W.failurePoint}:${W.reason}`;
                ee.current !== e && (ee.current = e, re({
                    host: `chatgpt`,
                    payload: r.payload,
                    session: {
                        id: r.id,
                        launchAttemptId: r.launchAttemptId,
                        status: r.status,
                        chatSDK: r.chatSDK
                    },
                    error: W,
                    toolResponseMetadata: r.toolResponseMetadata
                }))
            }, je = [B, r.id, r.launchAttemptId, r.payload, r.status, r.chatSDK, r.toolResponseMetadata, W, d], t[70] = B, t[71] = d, t[72] = r.chatSDK, t[73] = r.id, t[74] = r.launchAttemptId, t[75] = r.payload, t[76] = r.status, t[77] = r.toolResponseMetadata, t[78] = W, t[79] = Ae, t[80] = je) : (Ae = t[79], je = t[80]), (0, H.useEffect)(Ae, je);
            let Me;
            t[81] === Symbol.for(`react.memo_cache_sentinel`) ? (Me = () => {
                T(!1), ne(!1)
            }, t[81] = Me) : Me = t[81];
            let Ne;
            t[82] === r.id ? Ne = t[83] : (Ne = [r.id], t[82] = r.id, t[83] = Ne), (0, H.useEffect)(Me, Ne);
            let Pe, Fe;
            t[84] !== L.html || t[85] !== L.isLoading || t[86] !== r.id ? (Pe = () => {
                let e = C.current;
                if (e.sessionId !== r.id) {
                    C.current = {
                        sessionId: r.id,
                        html: L.html
                    }, k(!1);
                    return
                }
                if (L.html == null && L.isLoading) return;
                let t = e.html !== L.html;
                C.current = {
                    sessionId: r.id,
                    html: L.html
                }, t && k(!1)
            }, Fe = [r.id, L.html, L.isLoading], t[84] = L.html, t[85] = L.isLoading, t[86] = r.id, t[87] = Pe, t[88] = Fe) : (Pe = t[87], Fe = t[88]), (0, H.useEffect)(Pe, Fe);
            let Ie, Le;
            t[89] !== d || t[90] !== r.id || t[91] !== r.widgetState || t[92] !== P.metadata.widget_state_revision || t[93] !== P.toolMessageId || t[94] !== P.widgetId || t[95] !== P.widgetParent || t[96] !== P.widgetSessionId ? (Ie = () => {
                x.current.sessionId !== r.id && (x.current = {
                    sessionId: r.id,
                    toolMessageId: null
                });
                let e = P.toolMessageId ?? null,
                    t = x.current.toolMessageId;
                x.current.toolMessageId = e, t == null && e != null && d.bindWidgetStateQueue$(r.id, e, P.metadata.widget_state_revision ?? 0, r.widgetState) === `not-pending` && r.widgetState != null && d.enqueueWidgetState$(e, r.widgetState, {
                    queueKey: r.id,
                    widgetContext: {
                        appUri: P.widgetParent,
                        widgetId: P.widgetId,
                        widgetSessionId: P.widgetSessionId,
                        source: `host`
                    }
                })
            }, Le = [d, r.id, r.widgetState, P.metadata.widget_state_revision, P.toolMessageId, P.widgetId, P.widgetParent, P.widgetSessionId], t[89] = d, t[90] = r.id, t[91] = r.widgetState, t[92] = P.metadata.widget_state_revision, t[93] = P.toolMessageId, t[94] = P.widgetId, t[95] = P.widgetParent, t[96] = P.widgetSessionId, t[97] = Ie, t[98] = Le) : (Ie = t[97], Le = t[98]), (0, H.useEffect)(Ie, Le);
            let Re, ze;
            t[99] !== d || t[100] !== r.id ? (Re = () => () => {
                d.cancelWidgetStateQueue$(r.id)
            }, ze = [d, r.id], t[99] = d, t[100] = r.id, t[101] = Re, t[102] = ze) : (Re = t[101], ze = t[102]), (0, H.useEffect)(Re, ze);
            let Be;
            t[103] !== i || t[104] !== r.id ? (Be = e => {
                l.setLastCheckoutRequestId$(r.id, e.id), i(`checkout_completed`)
            }, t[103] = i, t[104] = r.id, t[105] = Be) : Be = t[105];
            let Ve = Be,
                He;
            t[106] !== L.html || t[107] !== r.chatSDK || t[108] !== r.id || t[109] !== r.launchAttemptId || t[110] !== r.payload ? (He = () => {
                k(!0);
                let e = `${r.id}:${L.html??``}`;
                y.current !== e && (y.current = e, ie({
                    host: `chatgpt`,
                    payload: r.payload,
                    session: {
                        id: r.id,
                        launchAttemptId: r.launchAttemptId,
                        chatSDK: r.chatSDK
                    }
                }))
            }, t[106] = L.html, t[107] = r.chatSDK, t[108] = r.id, t[109] = r.launchAttemptId, t[110] = r.payload, t[111] = He) : He = t[111];
            let Ue = He,
                We;
            t[112] !== Y || t[113] !== n || t[114] !== Ve || t[115] !== Ue || t[116] !== B || t[117] !== d || t[118] !== Oe || t[119] !== i || t[120] !== L || t[121] !== J || t[122] !== r.id || t[123] !== r.mode || t[124] !== r.payload || t[125] !== r.toolResponseMetadata?.status || t[126] !== P || t[127] !== W || t[128] !== Z ? (We = B ? (0, U.jsx)(`div`, {
                className: `p-6`,
                children: (0, U.jsx)(ge, {})
            }) : W ? (0, U.jsx)(oe, {
                error: W,
                payload: r.payload,
                sessionId: r.id
            }) : (0, U.jsx)(pe, {
                onReady: Ue,
                onClose: i,
                onCheckoutComplete: Ve,
                onCanGoBack: T,
                onCanGoForward: ne,
                onSetOpenInAppUrl: Z,
                onUpdateWidgetState: (e, t, n) => {
                    l.setWidgetState$(r.id, t);
                    let i = n?.waitForPersistence === !0;
                    return d.enqueueWidgetState$(P.toolMessageId ?? null, t, {
                        queueKey: r.id,
                        waitForPersistence: i,
                        hydratedRevision: P.metadata.widget_state_revision ?? 0,
                        widgetContext: {
                            appUri: P.widgetParent,
                            widgetId: P.widgetId,
                            widgetSessionId: P.widgetSessionId,
                            source: `host`
                        }
                    }).then(ve, ue)
                },
                title: L.name ?? ``,
                domain: L.domain,
                params: r.payload.viewParams,
                displayMode: r.mode,
                forceFullHeight: r.mode === `fullscreen`,
                heightHint: Oe,
                safeArea: J,
                widgetRef: v,
                conversation: n,
                chatSDK: P,
                isToolInputAuthorized: r.toolResponseMetadata?.status === `success`,
                clientThreadId: n.id,
                resolvedWidget: L,
                html: L.html,
                attributionId: Y,
                widgetId: P.widgetId,
                suggestionMessageId: P.metadata.suggestion_message_id ?? null,
                widgetType: P.widgetType,
                widgetParent: P.widgetParent,
                subdomain: L.subdomain,
                csp: L.csp,
                locale: m
            }), t[112] = Y, t[113] = n, t[114] = Ve, t[115] = Ue, t[116] = B, t[117] = d, t[118] = Oe, t[119] = i, t[120] = L, t[121] = J, t[122] = r.id, t[123] = r.mode, t[124] = r.payload, t[125] = r.toolResponseMetadata?.status, t[126] = P, t[127] = W, t[128] = Z, t[129] = We) : We = t[129];
            let Q = We;
            if (r.mode === `fullscreen`) {
                let e;
                t[130] !== w || t[131] !== E || t[132] !== i || t[133] !== Te || t[134] !== L.logoUrl || t[135] !== L.name || t[136] !== Ee || t[137] !== Ce || t[138] !== De ? (e = Ce && (0, U.jsx)(_e, {
                    logo: L.logoUrl,
                    hideOpenInAppButton: Ee,
                    onClickBack: () => v.current?.navigate({
                        delta: -1
                    }),
                    onClickClose: () => i(`user_dismissed`),
                    onClickForward: () => v.current?.navigate({
                        delta: 1
                    }),
                    canGoBack: w,
                    canGoForward: E,
                    title: L.name ?? ``,
                    widgetDisplayName: L.name ?? ``,
                    widgetDomain: De ?? null,
                    onClickOpenInApp: Te
                }), t[130] = w, t[131] = E, t[132] = i, t[133] = Te, t[134] = L.logoUrl, t[135] = L.name, t[136] = Ee, t[137] = Ce, t[138] = De, t[139] = e) : e = t[139];
                let n;
                t[140] !== w || t[141] !== E || t[142] !== i || t[143] !== K ? (n = K && (0, U.jsx)(me, {
                    isNavOnly: !0,
                    onClickBack: () => v.current?.navigate({
                        delta: -1
                    }),
                    onClickForward: () => v.current?.navigate({
                        delta: 1
                    }),
                    onClickClose: () => i(`user_dismissed`),
                    canGoBack: w,
                    canGoForward: E
                }), t[140] = w, t[141] = E, t[142] = i, t[143] = K, t[144] = n) : n = t[144];
                let r;
                t[145] === Q ? r = t[146] : (r = (0, U.jsx)(`div`, {
                    className: `relative min-h-0 flex-1`,
                    children: Q
                }), t[145] = Q, t[146] = r);
                let a;
                return t[147] !== e || t[148] !== n || t[149] !== r ? (a = (0, U.jsxs)(`div`, {
                    className: `flex h-full min-h-0 flex-col`,
                    children: [e, n, r]
                }), t[147] = e, t[148] = n, t[149] = r, t[150] = a) : a = t[150], a
            }
            let $;
            t[151] === ke ? $ = t[152] : ($ = ke && (0, U.jsx)(`div`, {
                "data-testid": `ecosystem-launcher-loading-state`,
                className: `bg-token-bg-primary/80 pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-2xl backdrop-blur-xs sm:rounded-3xl`,
                children: (0, U.jsx)(h, {
                    className: `text-token-text-tertiary h-5 w-5`
                })
            }), t[151] = ke, t[152] = $);
            let Ge;
            return t[153] !== Q || t[154] !== $ ? (Ge = (0, U.jsxs)(`div`, {
                className: `relative min-h-0`,
                children: [Q, $]
            }), t[153] = Q, t[154] = $, t[155] = Ge) : Ge = t[155], Ge
        }
    })),
    Ce = t({
        EcosystemWidgetLaunchHost: () => Z
    });

function we(e) {
    e.stopPropagation()
}

function K(e) {
    e.stopPropagation()
}
var q, J, Y, X, Te, Z, Ee = e((() => {
    q = T(), j(), m(), y(), M(), A(), G(), O(), r(), o(), a(), c(), J = n(C()), x(), Y = S(), X = `pointer-events-none absolute start-0 end-0 top-0 z-10 min-h-0 border-0 p-2 [&>button]:pointer-events-auto`, Te = ({
        conversation: e,
        toolMessageId: t
    }) => {
        t != null && (L.set(e, void 0), requestAnimationFrame(() => {
            L.set(e, t)
        }))
    }, Z = e => {
        "use forget";
        let t = (0, q.c)(46),
            {
                conversation: n
            } = e,
            r;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = te(), t[0] = r) : r = t[0];
        let a = r,
            o = w(),
            s = _(u),
            c = _(i),
            f = d(),
            p;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (p = () => a.activeSession$(), t[1] = p) : p = t[1];
        let m = _(p),
            h = (0, J.useRef)(o.pathname),
            [g, ee] = (0, J.useState)(null),
            y;
        t[2] !== o.pathname || t[3] !== m ? (y = () => {
            let e = h.current;
            h.current = o.pathname, m && e !== o.pathname && (k({
                host: `chatgpt`,
                payload: m.payload,
                session: m,
                closeReason: `navigation_changed`
            }), a.close$())
        }, t[2] = o.pathname, t[3] = m, t[4] = y) : y = t[4];
        let x;
        if (t[5] !== n.id || t[6] !== o.pathname || t[7] !== m ? (x = [n.id, a, o.pathname, m], t[5] = n.id, t[6] = o.pathname, t[7] = m, t[8] = x) : x = t[8], (0, J.useEffect)(y, x), !m) return null;
        let S;
        t[9] !== n || t[10] !== m ? (S = e => {
            k({
                host: `chatgpt`,
                payload: m.payload,
                session: m,
                closeReason: e
            }), a.close$(), Te({
                conversation: n,
                toolMessageId: m.chatSDK.toolMessageId ?? null
            })
        }, t[9] = n, t[10] = m, t[11] = S) : S = t[11];
        let C = S,
            T;
        if (t[12] !== C) {
            let e = () => {
                C(`user_dismissed`)
            };
            T = t => {
                e()
            }, t[12] = C, t[13] = T
        } else T = t[13];
        let E = T,
            D;
        t[14] === C ? D = t[15] : (D = e => {
            C(e ?? `user_dismissed`)
        }, t[14] = C, t[15] = D);
        let O = D;
        if (m.mode === `fullscreen`) {
            let e = c && g?.sessionId === m.id ? g.height : 0,
                r;
            t[16] !== n || t[17] !== O || t[18] !== m || t[19] !== e ? (r = (0, Y.jsx)(W, {
                conversation: n,
                session: m,
                onClose: O,
                safeAreaInsetBottom: e
            }), t[16] = n, t[17] = O, t[18] = m, t[19] = e, t[20] = r) : r = t[20];
            let i = r;
            if (!c) {
                let e;
                t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(`span`, {
                    className: `sr-only`,
                    children: `Widget modal`
                }), t[21] = e) : e = t[21];
                let n;
                return t[22] !== i || t[23] !== E ? (n = (0, Y.jsx)(v, {
                    isOpen: !0,
                    onClose: E,
                    size: `fullscreen`,
                    title: e,
                    noPadding: !0,
                    isScrollable: !1,
                    showOverlayBackground: !1,
                    removePopoverStyling: !0,
                    shadow: `custom`,
                    headerClassName: X,
                    contentClassName: `flex min-h-0 flex-col p-0`,
                    testId: `modal-ecosystem-widget-launch`,
                    children: i
                }), t[22] = i, t[23] = E, t[24] = n) : n = t[24], n
            }
            let a = f ? `var(--sidebar-width)` : `var(--sidebar-rail-width)`,
                o;
            t[25] === a ? o = t[26] : (o = {
                insetInlineStart: a
            }, t[25] = a, t[26] = o);
            let s;
            t[27] === m.id ? s = t[28] : (s = l({
                axis: `height`,
                onChange: e => {
                    let {
                        height: t
                    } = e;
                    return ee({
                        sessionId: m.id,
                        height: t
                    })
                }
            }), t[27] = m.id, t[28] = s);
            let u;
            t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, Y.jsx)(ne.Outlet, {}), t[29] = u) : u = t[29];
            let d;
            t[30] === s ? d = t[31] : (d = (0, Y.jsx)(`div`, {
                className: `pointer-events-none absolute inset-x-0 bottom-0 z-60`,
                ref: s,
                children: u
            }), t[30] = s, t[31] = d);
            let p;
            return t[32] !== i || t[33] !== o || t[34] !== d ? (p = (0, Y.jsxs)(`div`, {
                className: `bg-token-main-surface-primary fixed inset-0 z-50`,
                style: o,
                children: [i, d]
            }), t[32] = i, t[33] = o, t[34] = d, t[35] = p) : p = t[35], p
        }
        let re = !s,
            A;
        t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (A = (0, Y.jsx)(`span`, {
            className: `sr-only`,
            children: `Widget modal`
        }), t[36] = A) : A = t[36];
        let ie;
        t[37] === Symbol.for(`react.memo_cache_sentinel`) ? (ie = (0, Y.jsx)(b, {
            onPointerDown: we,
            onClick: K,
            iconSize: `lg`,
            className: `text-token-text-primary bg-token-main-surface-primary/60! hover:bg-token-main-surface-primary/70! keyboard-focused:bg-token-main-surface-primary/70! pointer-events-auto ms-auto backdrop-blur-xl backdrop-filter transition-colors`
        }), t[37] = ie) : ie = t[37];
        let j;
        t[38] !== n || t[39] !== O || t[40] !== m ? (j = (0, Y.jsx)(W, {
            conversation: n,
            session: m,
            onClose: O
        }), t[38] = n, t[39] = O, t[40] = m, t[41] = j) : j = t[41];
        let M;
        return t[42] !== E || t[43] !== j || t[44] !== re ? (M = (0, Y.jsx)(v, {
            isOpen: !0,
            onClose: E,
            isBottomSheet: re,
            size: `custom`,
            title: A,
            noPadding: !0,
            isScrollable: !1,
            showCloseButton: !0,
            closeButton: ie,
            headerClassName: X,
            handle: !1,
            contentSize: `fill`,
            className: `max-h-[min(90vh,900px)] w-full max-w-xl lg:max-w-3xl`,
            contentClassName: `flex min-h-0 flex-col p-0`,
            testId: `modal-ecosystem-widget-launch`,
            children: j
        }), t[42] = E, t[43] = j, t[44] = re, t[45] = M) : M = t[45], M
    }
}));
export {
    Ce as n, Ee as r, Z as t
};
//# sourceMappingURL=4740ae63-elitrc2bhtg293nl.js.map