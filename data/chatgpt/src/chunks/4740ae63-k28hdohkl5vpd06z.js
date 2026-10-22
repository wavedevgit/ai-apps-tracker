import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as r,
    Cw as i,
    Dw as a,
    Ew as o,
    Go as s,
    Got as c,
    Lo as l,
    Mz as u,
    P5 as d,
    Tw as f,
    Wot as p,
    cW as m,
    g8 as h,
    jz as ee,
    mq as g,
    oq as te,
    pq as ne,
    sW as _,
    vnt as v
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    At as y,
    Bn as b,
    Q as x,
    Vn as S,
    wn as C
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $ut as w,
    But as re,
    Fut as T,
    Hut as E,
    Qut as ie,
    Rtn as D,
    Rut as O,
    SJt as k,
    Ud as ae,
    Uut as A,
    Vut as j,
    Wd as oe,
    bJt as se,
    c6 as ce,
    idt as M,
    l6 as N,
    ndt as le,
    o6 as ue,
    rdt as de,
    s6 as P,
    xJt as F,
    yJt as fe,
    ztn as I,
    zut as pe
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    n as L,
    t as me
} from "./f7e0bf69-ivmxvtztv55qgtkt.js";
import {
    a as R,
    i as he,
    n as ge,
    o as _e,
    r as ve,
    s as z,
    t as B
} from "./da39060d-owtp6p5yehoobxfw.js";

function ye() {
    return {
        ok: !0
    }
}
var be, V, H, xe, Se, Ce, U, W = e((() => {
        be = C(), F(), z(), L(), R(), P(), N(), M(), O(), w(), E(), B(), u(), r(), c(), V = n(S()), H = b(), xe = 400, Se = e => typeof e?.reason == `string` ? e.reason : typeof e?.status == `string` ? `Tool call returned status ${e.status}.` : `The launcher tool call failed before it returned a reason.`, Ce = e => {
            if (e != null) try {
                return JSON.stringify(e)
            } catch {
                return
            }
        }, U = e => {
            "use forget";
            let t = (0, be.c)(156),
                {
                    conversation: n,
                    session: r,
                    onClose: i,
                    safeAreaInsetBottom: a
                } = e,
                o = a === void 0 ? 0 : a,
                s;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = ie(), t[0] = s) : s = t[0];
            let c = s,
                l;
            t[1] === n ? l = t[2] : (l = ue(n), t[1] = n, t[2] = l);
            let u = l,
                d;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (d = p(), t[3] = d) : d = t[3];
            let {
                locale: f
            } = d, m;
            t[4] === r.widgetState ? m = t[5] : (m = Ce(r.widgetState), t[4] = r.widgetState, t[5] = m);
            let h = m,
                g = (0, V.useRef)(null),
                te = (0, V.useRef)(null),
                ne = (0, V.useRef)(null),
                _;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = {
                sessionId: null,
                toolMessageId: null
            }, t[6] = _) : _ = t[6];
            let y = (0, V.useRef)(_),
                b;
            t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (b = {
                sessionId: null,
                html: null
            }, t[7] = b) : b = t[7];
            let x = (0, V.useRef)(b),
                [S, C] = (0, V.useState)(!1),
                [w, re] = (0, V.useState)(!1),
                [T, E] = (0, V.useState)(!1),
                D;
            t[8] !== h || t[9] !== r.chatSDK.metadata ? (D = {
                ...r.chatSDK.metadata,
                widget_state: h
            }, t[8] = h, t[9] = r.chatSDK.metadata, t[10] = D) : D = t[10];
            let O = r.toolInput ?? r.chatSDK.toolInput,
                ae = r.toolOutput ?? r.chatSDK.toolOutput,
                oe = r.toolResponseMetadata ?? r.chatSDK.toolResponseMetadata,
                M;
            t[11] !== r.chatSDK || t[12] !== ae || t[13] !== oe || t[14] !== D || t[15] !== O ? (M = {
                ...r.chatSDK,
                metadata: D,
                toolInput: O,
                toolOutput: ae,
                toolResponseMetadata: oe
            }, t[11] = r.chatSDK, t[12] = ae, t[13] = oe, t[14] = D, t[15] = O, t[16] = M) : M = t[16];
            let N = M,
                P = r.status === `error` && N.toolResponseMetadata?.error_code === `tunnel_client_network_access_denied`,
                F;
            t[17] === P ? F = t[18] : (F = {
                ...P ? {
                    skipResolution: !0
                } : {},
                skipNetworkRequestWhenCacheHit: !0
            }, t[17] = P, t[18] = F);
            let I = A(N, void 0, F),
                L = N.metadata.resolved_pineapple_uri ?? null,
                R;
            t[19] !== P || t[20] !== I.error ? (R = P || k(I.error), t[19] = P, t[20] = I.error, t[21] = R) : R = t[21];
            let z = R,
                B;
            bb0: {
                if (z) {
                    let e;
                    t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
                        message: se.defaultMessage,
                        failurePoint: `tool_call`,
                        reason: fe
                    }, t[22] = e) : e = t[22], B = e;
                    break bb0
                }
                if (r.status === `error`) {
                    let e;
                    t[23] === r.toolResponseMetadata ? e = t[24] : (e = Se(r.toolResponseMetadata), t[23] = r.toolResponseMetadata, t[24] = e);
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
                    t[35] === L ? p = t[36] : (p = {
                        label: `Resolved URI`,
                        value: L
                    }, t[35] = L, t[36] = p);
                    let m;
                    t[37] !== i || t[38] !== o || t[39] !== c || t[40] !== u || t[41] !== f || t[42] !== p ? (m = [i, o, c, u, f, p], t[37] = i, t[38] = o, t[39] = c, t[40] = u, t[41] = f, t[42] = p, t[43] = m) : m = t[43];
                    let h;
                    t[44] !== e || t[45] !== m ? (h = {
                        message: `Unable to launch this app right now.`,
                        failurePoint: `tool_call`,
                        reason: e,
                        extraDebugItems: m
                    }, t[44] = e, t[45] = m, t[46] = h) : h = t[46], B = h;
                    break bb0
                }
                if (I.isError) {
                    let e;
                    t[47] === L ? e = t[48] : (e = {
                        label: `Resolved URI`,
                        value: L
                    }, t[47] = L, t[48] = e);
                    let n;
                    t[49] !== I.error || t[50] !== e ? (n = {
                        message: `Unable to resolve this app.`,
                        failurePoint: `widget_resolution_request`,
                        reason: `The /ecosystem/widget request failed while resolving the launcher iframe.`,
                        extraDebugItems: [e, ...de(I.error)]
                    }, t[49] = I.error, t[50] = e, t[51] = n) : n = t[51], B = n;
                    break bb0
                }
                if (!I.html && !I.isLoading) {
                    let e;
                    t[52] === L ? e = t[53] : (e = {
                        message: `Unable to resolve this app.`,
                        failurePoint: `widget_resolution_response`,
                        reason: `The /ecosystem/widget response did not include widget HTML.`,
                        extraDebugItems: [{
                            label: `Resolved URI`,
                            value: L
                        }]
                    }, t[52] = L, t[53] = e), B = e;
                    break bb0
                }
                B = null
            }
            let U = B,
                W;
            t[54] !== I.hideFullScreenHeader || t[55] !== r.mode || t[56] !== U ? (W = U == null && r.mode === `fullscreen` && !I.hideFullScreenHeader && !v(), t[54] = I.hideFullScreenHeader, t[55] = r.mode, t[56] = U, t[57] = W) : W = t[57];
            let we = W,
                G;
            t[58] !== I.hideFullScreenHeader || t[59] !== r.mode || t[60] !== U ? (G = r.mode === `fullscreen` && (U != null || I.hideFullScreenHeader || v()), t[58] = I.hideFullScreenHeader, t[59] = r.mode, t[60] = U, t[61] = G) : G = t[61];
            let K = G,
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
                Y = N.metadata.attribution_id ?? N.widgetParent,
                X;
            t[66] !== I.csp || t[67] !== I.domain || t[68] !== N.widgetId ? (X = {
                csp: I.csp,
                domain: I.domain,
                widgetId: N.widgetId,
                widgetRef: g
            }, t[66] = I.csp, t[67] = I.domain, t[68] = N.widgetId, t[69] = X) : X = t[69];
            let {
                openInApp: Te,
                setOpenInAppUrl: Z,
                shouldHideOpenInAppButton: Ee,
                widgetRedirectUrl: De
            } = ge(X), Oe = r.mode === `modal` ? N.metadata.height_hint ?? I.heightHint ?? xe : null, ke = r.mode === `modal` && U == null && !T, Ae, je;
            t[70] !== z || t[71] !== u || t[72] !== r.chatSDK || t[73] !== r.id || t[74] !== r.launchAttemptId || t[75] !== r.payload || t[76] !== r.status || t[77] !== r.toolResponseMetadata || t[78] !== U ? (Ae = () => {
                if (!U || (u.cancelWidgetStateQueue$(r.id), z)) return;
                let e = `${r.id}:${U.failurePoint}:${U.reason}`;
                te.current !== e && (te.current = e, pe({
                    host: `chatgpt`,
                    payload: r.payload,
                    session: {
                        id: r.id,
                        launchAttemptId: r.launchAttemptId,
                        status: r.status,
                        chatSDK: r.chatSDK
                    },
                    error: U,
                    toolResponseMetadata: r.toolResponseMetadata
                }))
            }, je = [z, r.id, r.launchAttemptId, r.payload, r.status, r.chatSDK, r.toolResponseMetadata, U, u], t[70] = z, t[71] = u, t[72] = r.chatSDK, t[73] = r.id, t[74] = r.launchAttemptId, t[75] = r.payload, t[76] = r.status, t[77] = r.toolResponseMetadata, t[78] = U, t[79] = Ae, t[80] = je) : (Ae = t[79], je = t[80]), (0, V.useEffect)(Ae, je);
            let Me;
            t[81] === Symbol.for(`react.memo_cache_sentinel`) ? (Me = () => {
                C(!1), re(!1)
            }, t[81] = Me) : Me = t[81];
            let Ne;
            t[82] === r.id ? Ne = t[83] : (Ne = [r.id], t[82] = r.id, t[83] = Ne), (0, V.useEffect)(Me, Ne);
            let Pe, Fe;
            t[84] !== I.html || t[85] !== I.isLoading || t[86] !== r.id ? (Pe = () => {
                let e = x.current;
                if (e.sessionId !== r.id) {
                    x.current = {
                        sessionId: r.id,
                        html: I.html
                    }, E(!1);
                    return
                }
                if (I.html == null && I.isLoading) return;
                let t = e.html !== I.html;
                x.current = {
                    sessionId: r.id,
                    html: I.html
                }, t && E(!1)
            }, Fe = [r.id, I.html, I.isLoading], t[84] = I.html, t[85] = I.isLoading, t[86] = r.id, t[87] = Pe, t[88] = Fe) : (Pe = t[87], Fe = t[88]), (0, V.useEffect)(Pe, Fe);
            let Ie, Le;
            t[89] !== u || t[90] !== r.id || t[91] !== r.widgetState || t[92] !== N.metadata.widget_state_revision || t[93] !== N.toolMessageId || t[94] !== N.widgetId || t[95] !== N.widgetParent || t[96] !== N.widgetSessionId ? (Ie = () => {
                y.current.sessionId !== r.id && (y.current = {
                    sessionId: r.id,
                    toolMessageId: null
                });
                let e = N.toolMessageId ?? null,
                    t = y.current.toolMessageId;
                y.current.toolMessageId = e, t == null && e != null && u.bindWidgetStateQueue$(r.id, e, N.metadata.widget_state_revision ?? 0, r.widgetState) === `not-pending` && r.widgetState != null && u.enqueueWidgetState$(e, r.widgetState, {
                    queueKey: r.id,
                    widgetContext: {
                        appUri: N.widgetParent,
                        widgetId: N.widgetId,
                        widgetSessionId: N.widgetSessionId,
                        source: `host`
                    }
                })
            }, Le = [u, r.id, r.widgetState, N.metadata.widget_state_revision, N.toolMessageId, N.widgetId, N.widgetParent, N.widgetSessionId], t[89] = u, t[90] = r.id, t[91] = r.widgetState, t[92] = N.metadata.widget_state_revision, t[93] = N.toolMessageId, t[94] = N.widgetId, t[95] = N.widgetParent, t[96] = N.widgetSessionId, t[97] = Ie, t[98] = Le) : (Ie = t[97], Le = t[98]), (0, V.useEffect)(Ie, Le);
            let Re, ze;
            t[99] !== u || t[100] !== r.id ? (Re = () => () => {
                u.cancelWidgetStateQueue$(r.id)
            }, ze = [u, r.id], t[99] = u, t[100] = r.id, t[101] = Re, t[102] = ze) : (Re = t[101], ze = t[102]), (0, V.useEffect)(Re, ze);
            let Be;
            t[103] !== i || t[104] !== r.id ? (Be = e => {
                c.setLastCheckoutRequestId$(r.id, e.id), i(`checkout_completed`)
            }, t[103] = i, t[104] = r.id, t[105] = Be) : Be = t[105];
            let Ve = Be,
                He;
            t[106] !== I.html || t[107] !== r.chatSDK || t[108] !== r.id || t[109] !== r.launchAttemptId || t[110] !== r.payload ? (He = () => {
                E(!0);
                let e = `${r.id}:${I.html??``}`;
                ne.current !== e && (ne.current = e, j({
                    host: `chatgpt`,
                    payload: r.payload,
                    session: {
                        id: r.id,
                        launchAttemptId: r.launchAttemptId,
                        chatSDK: r.chatSDK
                    }
                }))
            }, t[106] = I.html, t[107] = r.chatSDK, t[108] = r.id, t[109] = r.launchAttemptId, t[110] = r.payload, t[111] = He) : He = t[111];
            let Ue = He,
                We;
            t[112] !== Y || t[113] !== n || t[114] !== Ve || t[115] !== Ue || t[116] !== z || t[117] !== u || t[118] !== Oe || t[119] !== i || t[120] !== I || t[121] !== J || t[122] !== r.id || t[123] !== r.mode || t[124] !== r.payload || t[125] !== r.toolResponseMetadata?.status || t[126] !== N || t[127] !== U || t[128] !== Z ? (We = z ? (0, H.jsx)(`div`, {
                className: `p-6`,
                children: (0, H.jsx)(_e, {})
            }) : U ? (0, H.jsx)(le, {
                error: U,
                payload: r.payload,
                sessionId: r.id
            }) : (0, H.jsx)(me, {
                onReady: Ue,
                onClose: i,
                onCheckoutComplete: Ve,
                onCanGoBack: C,
                onCanGoForward: re,
                onSetOpenInAppUrl: Z,
                onUpdateWidgetState: (e, t, n) => {
                    c.setWidgetState$(r.id, t);
                    let i = n?.waitForPersistence === !0;
                    return u.enqueueWidgetState$(N.toolMessageId ?? null, t, {
                        queueKey: r.id,
                        waitForPersistence: i,
                        hydratedRevision: N.metadata.widget_state_revision ?? 0,
                        widgetContext: {
                            appUri: N.widgetParent,
                            widgetId: N.widgetId,
                            widgetSessionId: N.widgetSessionId,
                            source: `host`
                        }
                    }).then(ye, ce)
                },
                title: I.name ?? ``,
                domain: I.domain,
                params: r.payload.viewParams,
                displayMode: r.mode,
                forceFullHeight: r.mode === `fullscreen`,
                heightHint: Oe,
                safeArea: J,
                widgetRef: g,
                conversation: n,
                chatSDK: N,
                isToolInputAuthorized: r.toolResponseMetadata?.status === `success`,
                clientThreadId: n.id,
                resolvedWidget: I,
                html: I.html,
                attributionId: Y,
                widgetId: N.widgetId,
                suggestionMessageId: N.metadata.suggestion_message_id ?? null,
                widgetType: N.widgetType,
                widgetParent: N.widgetParent,
                subdomain: I.subdomain,
                csp: I.csp,
                locale: f
            }), t[112] = Y, t[113] = n, t[114] = Ve, t[115] = Ue, t[116] = z, t[117] = u, t[118] = Oe, t[119] = i, t[120] = I, t[121] = J, t[122] = r.id, t[123] = r.mode, t[124] = r.payload, t[125] = r.toolResponseMetadata?.status, t[126] = N, t[127] = U, t[128] = Z, t[129] = We) : We = t[129];
            let Q = We;
            if (r.mode === `fullscreen`) {
                let e;
                t[130] !== S || t[131] !== w || t[132] !== i || t[133] !== Te || t[134] !== I.logoUrl || t[135] !== I.name || t[136] !== Ee || t[137] !== we || t[138] !== De ? (e = we && (0, H.jsx)(ve, {
                    logo: I.logoUrl,
                    hideOpenInAppButton: Ee,
                    onClickBack: () => g.current?.navigate({
                        delta: -1
                    }),
                    onClickClose: () => i(`user_dismissed`),
                    onClickForward: () => g.current?.navigate({
                        delta: 1
                    }),
                    canGoBack: S,
                    canGoForward: w,
                    title: I.name ?? ``,
                    widgetDisplayName: I.name ?? ``,
                    widgetDomain: De ?? null,
                    onClickOpenInApp: Te
                }), t[130] = S, t[131] = w, t[132] = i, t[133] = Te, t[134] = I.logoUrl, t[135] = I.name, t[136] = Ee, t[137] = we, t[138] = De, t[139] = e) : e = t[139];
                let n;
                t[140] !== S || t[141] !== w || t[142] !== i || t[143] !== K ? (n = K && (0, H.jsx)(he, {
                    isNavOnly: !0,
                    onClickBack: () => g.current?.navigate({
                        delta: -1
                    }),
                    onClickForward: () => g.current?.navigate({
                        delta: 1
                    }),
                    onClickClose: () => i(`user_dismissed`),
                    canGoBack: S,
                    canGoForward: w
                }), t[140] = S, t[141] = w, t[142] = i, t[143] = K, t[144] = n) : n = t[144];
                let r;
                t[145] === Q ? r = t[146] : (r = (0, H.jsx)(`div`, {
                    className: `relative min-h-0 flex-1`,
                    children: Q
                }), t[145] = Q, t[146] = r);
                let a;
                return t[147] !== e || t[148] !== n || t[149] !== r ? (a = (0, H.jsxs)(`div`, {
                    className: `flex h-full min-h-0 flex-col`,
                    children: [e, n, r]
                }), t[147] = e, t[148] = n, t[149] = r, t[150] = a) : a = t[150], a
            }
            let $;
            t[151] === ke ? $ = t[152] : ($ = ke && (0, H.jsx)(`div`, {
                "data-testid": `ecosystem-launcher-loading-state`,
                className: `bg-token-bg-primary/80 pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-2xl backdrop-blur-xs sm:rounded-3xl`,
                children: (0, H.jsx)(ee, {
                    className: `text-token-text-tertiary h-5 w-5`
                })
            }), t[151] = ke, t[152] = $);
            let Ge;
            return t[153] !== Q || t[154] !== $ ? (Ge = (0, H.jsxs)(`div`, {
                className: `relative min-h-0`,
                children: [Q, $]
            }), t[153] = Q, t[154] = $, t[155] = Ge) : Ge = t[155], Ge
        }
    })),
    we = t({
        EcosystemWidgetLaunchHost: () => Z
    });

function G(e) {
    e.stopPropagation()
}

function K(e) {
    e.stopPropagation()
}
var q, J, Y, X, Te, Z, Ee = e((() => {
    q = C(), I(), a(), f(), oe(), T(), W(), w(), h(), l(), m(), te(), J = n(S()), x(), Y = b(), X = `pointer-events-none absolute start-0 end-0 top-0 z-10 min-h-0 border-0 p-2 [&>button]:pointer-events-auto`, Te = ({
        conversation: e,
        toolMessageId: t
    }) => {
        t != null && (D.set(e, void 0), requestAnimationFrame(() => {
            D.set(e, t)
        }))
    }, Z = e => {
        "use forget";
        let t = (0, q.c)(46),
            {
                conversation: n
            } = e,
            r;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = ie(), t[0] = r) : r = t[0];
        let a = r,
            c = y(),
            l = d(g),
            u = d(ne),
            f = s(),
            p;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (p = () => a.activeSession$(), t[1] = p) : p = t[1];
        let m = d(p),
            h = (0, J.useRef)(c.pathname),
            [ee, te] = (0, J.useState)(null),
            v;
        t[2] !== c.pathname || t[3] !== m ? (v = () => {
            let e = h.current;
            h.current = c.pathname, m && e !== c.pathname && (re({
                host: `chatgpt`,
                payload: m.payload,
                session: m,
                closeReason: `navigation_changed`
            }), a.close$())
        }, t[2] = c.pathname, t[3] = m, t[4] = v) : v = t[4];
        let b;
        if (t[5] !== n.id || t[6] !== c.pathname || t[7] !== m ? (b = [n.id, a, c.pathname, m], t[5] = n.id, t[6] = c.pathname, t[7] = m, t[8] = b) : b = t[8], (0, J.useEffect)(v, b), !m) return null;
        let x;
        t[9] !== n || t[10] !== m ? (x = e => {
            re({
                host: `chatgpt`,
                payload: m.payload,
                session: m,
                closeReason: e
            }), a.close$(), Te({
                conversation: n,
                toolMessageId: m.chatSDK.toolMessageId ?? null
            })
        }, t[9] = n, t[10] = m, t[11] = x) : x = t[11];
        let S = x,
            C;
        if (t[12] !== S) {
            let e = () => {
                S(`user_dismissed`)
            };
            C = t => {
                e()
            }, t[12] = S, t[13] = C
        } else C = t[13];
        let w = C,
            T;
        t[14] === S ? T = t[15] : (T = e => {
            S(e ?? `user_dismissed`)
        }, t[14] = S, t[15] = T);
        let E = T;
        if (m.mode === `fullscreen`) {
            let e = u && ee?.sessionId === m.id ? ee.height : 0,
                r;
            t[16] !== n || t[17] !== E || t[18] !== m || t[19] !== e ? (r = (0, Y.jsx)(U, {
                conversation: n,
                session: m,
                onClose: E,
                safeAreaInsetBottom: e
            }), t[16] = n, t[17] = E, t[18] = m, t[19] = e, t[20] = r) : r = t[20];
            let a = r;
            if (!u) {
                let e;
                t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(`span`, {
                    className: `sr-only`,
                    children: `Widget modal`
                }), t[21] = e) : e = t[21];
                let n;
                return t[22] !== a || t[23] !== w ? (n = (0, Y.jsx)(i, {
                    isOpen: !0,
                    onClose: w,
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
                    children: a
                }), t[22] = a, t[23] = w, t[24] = n) : n = t[24], n
            }
            let o = f ? `var(--sidebar-width)` : `var(--sidebar-rail-width)`,
                s;
            t[25] === o ? s = t[26] : (s = {
                insetInlineStart: o
            }, t[25] = o, t[26] = s);
            let c;
            t[27] === m.id ? c = t[28] : (c = _({
                axis: `height`,
                onChange: e => {
                    let {
                        height: t
                    } = e;
                    return te({
                        sessionId: m.id,
                        height: t
                    })
                }
            }), t[27] = m.id, t[28] = c);
            let l;
            t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, Y.jsx)(ae.Outlet, {}), t[29] = l) : l = t[29];
            let d;
            t[30] === c ? d = t[31] : (d = (0, Y.jsx)(`div`, {
                className: `pointer-events-none absolute inset-x-0 bottom-0 z-60`,
                ref: c,
                children: l
            }), t[30] = c, t[31] = d);
            let p;
            return t[32] !== a || t[33] !== s || t[34] !== d ? (p = (0, Y.jsxs)(`div`, {
                className: `bg-token-main-surface-primary fixed inset-0 z-50`,
                style: s,
                children: [a, d]
            }), t[32] = a, t[33] = s, t[34] = d, t[35] = p) : p = t[35], p
        }
        let D = !l,
            O;
        t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (O = (0, Y.jsx)(`span`, {
            className: `sr-only`,
            children: `Widget modal`
        }), t[36] = O) : O = t[36];
        let k;
        t[37] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, Y.jsx)(o, {
            onPointerDown: G,
            onClick: K,
            iconSize: `lg`,
            className: `text-token-text-primary bg-token-main-surface-primary/60! hover:bg-token-main-surface-primary/70! keyboard-focused:bg-token-main-surface-primary/70! pointer-events-auto ms-auto backdrop-blur-xl backdrop-filter transition-colors`
        }), t[37] = k) : k = t[37];
        let A;
        t[38] !== n || t[39] !== E || t[40] !== m ? (A = (0, Y.jsx)(U, {
            conversation: n,
            session: m,
            onClose: E
        }), t[38] = n, t[39] = E, t[40] = m, t[41] = A) : A = t[41];
        let j;
        return t[42] !== w || t[43] !== A || t[44] !== D ? (j = (0, Y.jsx)(i, {
            isOpen: !0,
            onClose: w,
            isBottomSheet: D,
            size: `custom`,
            title: O,
            noPadding: !0,
            isScrollable: !1,
            showCloseButton: !0,
            closeButton: k,
            headerClassName: X,
            handle: !1,
            contentSize: `fill`,
            className: `max-h-[min(90vh,900px)] w-full max-w-xl lg:max-w-3xl`,
            contentClassName: `flex min-h-0 flex-col p-0`,
            testId: `modal-ecosystem-widget-launch`,
            children: A
        }), t[42] = w, t[43] = A, t[44] = D, t[45] = j) : j = t[45], j
    }
}));
export {
    we as n, Ee as r, Z as t
};
//# sourceMappingURL=4740ae63-k28hdohkl5vpd06z.js.map