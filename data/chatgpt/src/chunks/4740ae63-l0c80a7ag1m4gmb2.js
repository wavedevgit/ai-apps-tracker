import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Az as r,
    Bot as i,
    Ew as a,
    Go as o,
    Jtt as s,
    Lo as c,
    N5 as l,
    Sw as u,
    Tw as d,
    aq as f,
    fq as p,
    h8 as m,
    jz as h,
    oW as g,
    pnt as ee,
    pq as te,
    sW as _,
    ww as v,
    zot as ne
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    At as y,
    Bn as b,
    Q as x,
    Vn as S,
    wn as C
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $ut as w,
    But as T,
    Ftn as E,
    Fut as D,
    Hd as re,
    Itn as O,
    Iut as k,
    Lut as A,
    Mut as j,
    Rut as M,
    Ud as ie,
    Xut as N,
    Yut as ae,
    _Jt as oe,
    a6 as se,
    edt as ce,
    gJt as le,
    i6 as P,
    o6 as F,
    r6 as ue,
    tdt as I,
    vJt as L,
    yJt as de,
    zut as R
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    n as z,
    t as fe
} from "./f7e0bf69-hugrx1oxvlrf9yze.js";
import {
    a as B,
    i as pe,
    n as me,
    o as he,
    r as ge,
    s as V,
    t as H
} from "./da39060d-fg5r1diyo1nw6vyq.js";

function _e() {
    return {
        ok: !0
    }
}
var ve, U, W, ye, be, xe, G, Se = e((() => {
        ve = C(), L(), V(), z(), B(), P(), F(), I(), D(), N(), R(), H(), h(), s(), i(), U = n(S()), W = b(), ye = 400, be = e => typeof e?.reason == `string` ? e.reason : typeof e?.status == `string` ? `Tool call returned status ${e.status}.` : `The launcher tool call failed before it returned a reason.`, xe = e => {
            if (e != null) try {
                return JSON.stringify(e)
            } catch {
                return
            }
        }, G = e => {
            "use forget";
            let t = (0, ve.c)(156),
                {
                    conversation: n,
                    session: i,
                    onClose: a,
                    safeAreaInsetBottom: o
                } = e,
                s = o === void 0 ? 0 : o,
                c;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = ae(), t[0] = c) : c = t[0];
            let l = c,
                u;
            t[1] === n ? u = t[2] : (u = ue(n), t[1] = n, t[2] = u);
            let d = u,
                f;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (f = ne(), t[3] = f) : f = t[3];
            let {
                locale: p
            } = f, m;
            t[4] === i.widgetState ? m = t[5] : (m = xe(i.widgetState), t[4] = i.widgetState, t[5] = m);
            let h = m,
                g = (0, U.useRef)(null),
                te = (0, U.useRef)(null),
                _ = (0, U.useRef)(null),
                v;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (v = {
                sessionId: null,
                toolMessageId: null
            }, t[6] = v) : v = t[6];
            let y = (0, U.useRef)(v),
                b;
            t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (b = {
                sessionId: null,
                html: null
            }, t[7] = b) : b = t[7];
            let x = (0, U.useRef)(b),
                [S, C] = (0, U.useState)(!1),
                [E, D] = (0, U.useState)(!1),
                [re, O] = (0, U.useState)(!1),
                A;
            t[8] !== h || t[9] !== i.chatSDK.metadata ? (A = {
                ...i.chatSDK.metadata,
                widget_state: h
            }, t[8] = h, t[9] = i.chatSDK.metadata, t[10] = A) : A = t[10];
            let j = i.toolInput ?? i.chatSDK.toolInput,
                ie = i.toolOutput ?? i.chatSDK.toolOutput,
                N = i.toolResponseMetadata ?? i.chatSDK.toolResponseMetadata,
                P;
            t[11] !== i.chatSDK || t[12] !== ie || t[13] !== N || t[14] !== A || t[15] !== j ? (P = {
                ...i.chatSDK,
                metadata: A,
                toolInput: j,
                toolOutput: ie,
                toolResponseMetadata: N
            }, t[11] = i.chatSDK, t[12] = ie, t[13] = N, t[14] = A, t[15] = j, t[16] = P) : P = t[16];
            let F = P,
                I = i.status === `error` && F.toolResponseMetadata?.error_code === `tunnel_client_network_access_denied`,
                L;
            t[17] === I ? L = t[18] : (L = {
                ...I ? {
                    skipResolution: !0
                } : {},
                skipNetworkRequestWhenCacheHit: !0
            }, t[17] = I, t[18] = L);
            let R = T(F, void 0, L),
                z = F.metadata.resolved_pineapple_uri ?? null,
                B;
            t[19] !== I || t[20] !== R.error ? (B = I || de(R.error), t[19] = I, t[20] = R.error, t[21] = B) : B = t[21];
            let V = B,
                H;
            bb0: {
                if (V) {
                    let e;
                    t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
                        message: oe.defaultMessage,
                        failurePoint: `tool_call`,
                        reason: le
                    }, t[22] = e) : e = t[22], H = e;
                    break bb0
                }
                if (i.status === `error`) {
                    let e;
                    t[23] === i.toolResponseMetadata ? e = t[24] : (e = be(i.toolResponseMetadata), t[23] = i.toolResponseMetadata, t[24] = e);
                    let n = typeof i.toolResponseMetadata?.status == `string` ? i.toolResponseMetadata.status : null,
                        r;
                    t[25] === n ? r = t[26] : (r = {
                        label: `Tool status`,
                        value: n
                    }, t[25] = n, t[26] = r);
                    let a = typeof i.toolResponseMetadata?.request_id == `string` ? i.toolResponseMetadata.request_id : null,
                        o;
                    t[27] === a ? o = t[28] : (o = {
                        label: `Request ID`,
                        value: a
                    }, t[27] = a, t[28] = o);
                    let s = typeof i.toolResponseMetadata?.x_oai_request_id == `string` ? i.toolResponseMetadata.x_oai_request_id : null,
                        c;
                    t[29] === s ? c = t[30] : (c = {
                        label: `X-OAI Request ID`,
                        value: s
                    }, t[29] = s, t[30] = c);
                    let l = typeof i.toolResponseMetadata?.error_http_status_code == `number` ? i.toolResponseMetadata.error_http_status_code : null,
                        u;
                    t[31] === l ? u = t[32] : (u = {
                        label: `HTTP status`,
                        value: l
                    }, t[31] = l, t[32] = u);
                    let d = typeof i.toolResponseMetadata?.error_code == `string` ? i.toolResponseMetadata.error_code : null,
                        f;
                    t[33] === d ? f = t[34] : (f = {
                        label: `Error code`,
                        value: d
                    }, t[33] = d, t[34] = f);
                    let p;
                    t[35] === z ? p = t[36] : (p = {
                        label: `Resolved URI`,
                        value: z
                    }, t[35] = z, t[36] = p);
                    let m;
                    t[37] !== r || t[38] !== o || t[39] !== c || t[40] !== u || t[41] !== f || t[42] !== p ? (m = [r, o, c, u, f, p], t[37] = r, t[38] = o, t[39] = c, t[40] = u, t[41] = f, t[42] = p, t[43] = m) : m = t[43];
                    let h;
                    t[44] !== e || t[45] !== m ? (h = {
                        message: `Unable to launch this app right now.`,
                        failurePoint: `tool_call`,
                        reason: e,
                        extraDebugItems: m
                    }, t[44] = e, t[45] = m, t[46] = h) : h = t[46], H = h;
                    break bb0
                }
                if (R.isError) {
                    let e;
                    t[47] === z ? e = t[48] : (e = {
                        label: `Resolved URI`,
                        value: z
                    }, t[47] = z, t[48] = e);
                    let n;
                    t[49] !== R.error || t[50] !== e ? (n = {
                        message: `Unable to resolve this app.`,
                        failurePoint: `widget_resolution_request`,
                        reason: `The /ecosystem/widget request failed while resolving the launcher iframe.`,
                        extraDebugItems: [e, ...ce(R.error)]
                    }, t[49] = R.error, t[50] = e, t[51] = n) : n = t[51], H = n;
                    break bb0
                }
                if (!R.html && !R.isLoading) {
                    let e;
                    t[52] === z ? e = t[53] : (e = {
                        message: `Unable to resolve this app.`,
                        failurePoint: `widget_resolution_response`,
                        reason: `The /ecosystem/widget response did not include widget HTML.`,
                        extraDebugItems: [{
                            label: `Resolved URI`,
                            value: z
                        }]
                    }, t[52] = z, t[53] = e), H = e;
                    break bb0
                }
                H = null
            }
            let G = H,
                Se;
            t[54] !== R.hideFullScreenHeader || t[55] !== i.mode || t[56] !== G ? (Se = G == null && i.mode === `fullscreen` && !R.hideFullScreenHeader && !ee(), t[54] = R.hideFullScreenHeader, t[55] = i.mode, t[56] = G, t[57] = Se) : Se = t[57];
            let Ce = Se,
                we;
            t[58] !== R.hideFullScreenHeader || t[59] !== i.mode || t[60] !== G ? (we = i.mode === `fullscreen` && (G != null || R.hideFullScreenHeader || ee()), t[58] = R.hideFullScreenHeader, t[59] = i.mode, t[60] = G, t[61] = we) : we = t[61];
            let K = we,
                q;
            t[62] !== s || t[63] !== i.mode || t[64] !== K ? (q = i.mode === `fullscreen` ? {
                insets: {
                    top: K ? 40 : 0,
                    bottom: s,
                    left: 0,
                    right: 0
                }
            } : void 0, t[62] = s, t[63] = i.mode, t[64] = K, t[65] = q) : q = t[65];
            let J = q,
                Y = F.metadata.attribution_id ?? F.widgetParent,
                X;
            t[66] !== R.csp || t[67] !== R.domain || t[68] !== F.widgetId ? (X = {
                csp: R.csp,
                domain: R.domain,
                widgetId: F.widgetId,
                widgetRef: g
            }, t[66] = R.csp, t[67] = R.domain, t[68] = F.widgetId, t[69] = X) : X = t[69];
            let {
                openInApp: Te,
                setOpenInAppUrl: Z,
                shouldHideOpenInAppButton: Ee,
                widgetRedirectUrl: De
            } = me(X), Oe = i.mode === `modal` ? F.metadata.height_hint ?? R.heightHint ?? ye : null, ke = i.mode === `modal` && G == null && !re, Ae, je;
            t[70] !== V || t[71] !== d || t[72] !== i.chatSDK || t[73] !== i.id || t[74] !== i.launchAttemptId || t[75] !== i.payload || t[76] !== i.status || t[77] !== i.toolResponseMetadata || t[78] !== G ? (Ae = () => {
                if (!G || (d.cancelWidgetStateQueue$(i.id), V)) return;
                let e = `${i.id}:${G.failurePoint}:${G.reason}`;
                te.current !== e && (te.current = e, k({
                    host: `chatgpt`,
                    payload: i.payload,
                    session: {
                        id: i.id,
                        launchAttemptId: i.launchAttemptId,
                        status: i.status,
                        chatSDK: i.chatSDK
                    },
                    error: G,
                    toolResponseMetadata: i.toolResponseMetadata
                }))
            }, je = [V, i.id, i.launchAttemptId, i.payload, i.status, i.chatSDK, i.toolResponseMetadata, G, d], t[70] = V, t[71] = d, t[72] = i.chatSDK, t[73] = i.id, t[74] = i.launchAttemptId, t[75] = i.payload, t[76] = i.status, t[77] = i.toolResponseMetadata, t[78] = G, t[79] = Ae, t[80] = je) : (Ae = t[79], je = t[80]), (0, U.useEffect)(Ae, je);
            let Me;
            t[81] === Symbol.for(`react.memo_cache_sentinel`) ? (Me = () => {
                C(!1), D(!1)
            }, t[81] = Me) : Me = t[81];
            let Ne;
            t[82] === i.id ? Ne = t[83] : (Ne = [i.id], t[82] = i.id, t[83] = Ne), (0, U.useEffect)(Me, Ne);
            let Pe, Fe;
            t[84] !== R.html || t[85] !== R.isLoading || t[86] !== i.id ? (Pe = () => {
                let e = x.current;
                if (e.sessionId !== i.id) {
                    x.current = {
                        sessionId: i.id,
                        html: R.html
                    }, O(!1);
                    return
                }
                if (R.html == null && R.isLoading) return;
                let t = e.html !== R.html;
                x.current = {
                    sessionId: i.id,
                    html: R.html
                }, t && O(!1)
            }, Fe = [i.id, R.html, R.isLoading], t[84] = R.html, t[85] = R.isLoading, t[86] = i.id, t[87] = Pe, t[88] = Fe) : (Pe = t[87], Fe = t[88]), (0, U.useEffect)(Pe, Fe);
            let Ie, Le;
            t[89] !== d || t[90] !== i.id || t[91] !== i.widgetState || t[92] !== F.metadata.widget_state_revision || t[93] !== F.toolMessageId || t[94] !== F.widgetId || t[95] !== F.widgetParent || t[96] !== F.widgetSessionId ? (Ie = () => {
                y.current.sessionId !== i.id && (y.current = {
                    sessionId: i.id,
                    toolMessageId: null
                });
                let e = F.toolMessageId ?? null,
                    t = y.current.toolMessageId;
                y.current.toolMessageId = e, t == null && e != null && d.bindWidgetStateQueue$(i.id, e, F.metadata.widget_state_revision ?? 0, i.widgetState) === `not-pending` && i.widgetState != null && d.enqueueWidgetState$(e, i.widgetState, {
                    queueKey: i.id,
                    widgetContext: {
                        appUri: F.widgetParent,
                        widgetId: F.widgetId,
                        widgetSessionId: F.widgetSessionId,
                        source: `host`
                    }
                })
            }, Le = [d, i.id, i.widgetState, F.metadata.widget_state_revision, F.toolMessageId, F.widgetId, F.widgetParent, F.widgetSessionId], t[89] = d, t[90] = i.id, t[91] = i.widgetState, t[92] = F.metadata.widget_state_revision, t[93] = F.toolMessageId, t[94] = F.widgetId, t[95] = F.widgetParent, t[96] = F.widgetSessionId, t[97] = Ie, t[98] = Le) : (Ie = t[97], Le = t[98]), (0, U.useEffect)(Ie, Le);
            let Re, ze;
            t[99] !== d || t[100] !== i.id ? (Re = () => () => {
                d.cancelWidgetStateQueue$(i.id)
            }, ze = [d, i.id], t[99] = d, t[100] = i.id, t[101] = Re, t[102] = ze) : (Re = t[101], ze = t[102]), (0, U.useEffect)(Re, ze);
            let Be;
            t[103] !== a || t[104] !== i.id ? (Be = e => {
                l.setLastCheckoutRequestId$(i.id, e.id), a(`checkout_completed`)
            }, t[103] = a, t[104] = i.id, t[105] = Be) : Be = t[105];
            let Ve = Be,
                He;
            t[106] !== R.html || t[107] !== i.chatSDK || t[108] !== i.id || t[109] !== i.launchAttemptId || t[110] !== i.payload ? (He = () => {
                O(!0);
                let e = `${i.id}:${R.html??``}`;
                _.current !== e && (_.current = e, M({
                    host: `chatgpt`,
                    payload: i.payload,
                    session: {
                        id: i.id,
                        launchAttemptId: i.launchAttemptId,
                        chatSDK: i.chatSDK
                    }
                }))
            }, t[106] = R.html, t[107] = i.chatSDK, t[108] = i.id, t[109] = i.launchAttemptId, t[110] = i.payload, t[111] = He) : He = t[111];
            let Ue = He,
                We;
            t[112] !== Y || t[113] !== n || t[114] !== Ve || t[115] !== Ue || t[116] !== V || t[117] !== d || t[118] !== Oe || t[119] !== a || t[120] !== R || t[121] !== J || t[122] !== i.id || t[123] !== i.mode || t[124] !== i.payload || t[125] !== i.toolResponseMetadata?.status || t[126] !== F || t[127] !== G || t[128] !== Z ? (We = V ? (0, W.jsx)(`div`, {
                className: `p-6`,
                children: (0, W.jsx)(he, {})
            }) : G ? (0, W.jsx)(w, {
                error: G,
                payload: i.payload,
                sessionId: i.id
            }) : (0, W.jsx)(fe, {
                onReady: Ue,
                onClose: a,
                onCheckoutComplete: Ve,
                onCanGoBack: C,
                onCanGoForward: D,
                onSetOpenInAppUrl: Z,
                onUpdateWidgetState: (e, t, n) => {
                    l.setWidgetState$(i.id, t);
                    let r = n?.waitForPersistence === !0;
                    return d.enqueueWidgetState$(F.toolMessageId ?? null, t, {
                        queueKey: i.id,
                        waitForPersistence: r,
                        hydratedRevision: F.metadata.widget_state_revision ?? 0,
                        widgetContext: {
                            appUri: F.widgetParent,
                            widgetId: F.widgetId,
                            widgetSessionId: F.widgetSessionId,
                            source: `host`
                        }
                    }).then(_e, se)
                },
                title: R.name ?? ``,
                domain: R.domain,
                params: i.payload.viewParams,
                displayMode: i.mode,
                forceFullHeight: i.mode === `fullscreen`,
                heightHint: Oe,
                safeArea: J,
                widgetRef: g,
                conversation: n,
                chatSDK: F,
                isToolInputAuthorized: i.toolResponseMetadata?.status === `success`,
                clientThreadId: n.id,
                resolvedWidget: R,
                html: R.html,
                attributionId: Y,
                widgetId: F.widgetId,
                suggestionMessageId: F.metadata.suggestion_message_id ?? null,
                widgetType: F.widgetType,
                widgetParent: F.widgetParent,
                subdomain: R.subdomain,
                csp: R.csp,
                locale: p
            }), t[112] = Y, t[113] = n, t[114] = Ve, t[115] = Ue, t[116] = V, t[117] = d, t[118] = Oe, t[119] = a, t[120] = R, t[121] = J, t[122] = i.id, t[123] = i.mode, t[124] = i.payload, t[125] = i.toolResponseMetadata?.status, t[126] = F, t[127] = G, t[128] = Z, t[129] = We) : We = t[129];
            let Q = We;
            if (i.mode === `fullscreen`) {
                let e;
                t[130] !== S || t[131] !== E || t[132] !== a || t[133] !== Te || t[134] !== R.logoUrl || t[135] !== R.name || t[136] !== Ee || t[137] !== Ce || t[138] !== De ? (e = Ce && (0, W.jsx)(ge, {
                    logo: R.logoUrl,
                    hideOpenInAppButton: Ee,
                    onClickBack: () => g.current?.navigate({
                        delta: -1
                    }),
                    onClickClose: () => a(`user_dismissed`),
                    onClickForward: () => g.current?.navigate({
                        delta: 1
                    }),
                    canGoBack: S,
                    canGoForward: E,
                    title: R.name ?? ``,
                    widgetDisplayName: R.name ?? ``,
                    widgetDomain: De ?? null,
                    onClickOpenInApp: Te
                }), t[130] = S, t[131] = E, t[132] = a, t[133] = Te, t[134] = R.logoUrl, t[135] = R.name, t[136] = Ee, t[137] = Ce, t[138] = De, t[139] = e) : e = t[139];
                let n;
                t[140] !== S || t[141] !== E || t[142] !== a || t[143] !== K ? (n = K && (0, W.jsx)(pe, {
                    isNavOnly: !0,
                    onClickBack: () => g.current?.navigate({
                        delta: -1
                    }),
                    onClickForward: () => g.current?.navigate({
                        delta: 1
                    }),
                    onClickClose: () => a(`user_dismissed`),
                    canGoBack: S,
                    canGoForward: E
                }), t[140] = S, t[141] = E, t[142] = a, t[143] = K, t[144] = n) : n = t[144];
                let r;
                t[145] === Q ? r = t[146] : (r = (0, W.jsx)(`div`, {
                    className: `relative min-h-0 flex-1`,
                    children: Q
                }), t[145] = Q, t[146] = r);
                let i;
                return t[147] !== e || t[148] !== n || t[149] !== r ? (i = (0, W.jsxs)(`div`, {
                    className: `flex h-full min-h-0 flex-col`,
                    children: [e, n, r]
                }), t[147] = e, t[148] = n, t[149] = r, t[150] = i) : i = t[150], i
            }
            let $;
            t[151] === ke ? $ = t[152] : ($ = ke && (0, W.jsx)(`div`, {
                "data-testid": `ecosystem-launcher-loading-state`,
                className: `bg-token-bg-primary/80 pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-2xl backdrop-blur-xs sm:rounded-3xl`,
                children: (0, W.jsx)(r, {
                    className: `text-token-text-tertiary h-5 w-5`
                })
            }), t[151] = ke, t[152] = $);
            let Ge;
            return t[153] !== Q || t[154] !== $ ? (Ge = (0, W.jsxs)(`div`, {
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
    q = C(), O(), a(), v(), ie(), j(), Se(), N(), m(), c(), _(), f(), J = n(S()), x(), Y = b(), X = `pointer-events-none absolute start-0 end-0 top-0 z-10 min-h-0 border-0 p-2 [&>button]:pointer-events-auto`, Te = ({
        conversation: e,
        toolMessageId: t
    }) => {
        t != null && (E.set(e, void 0), requestAnimationFrame(() => {
            E.set(e, t)
        }))
    }, Z = e => {
        "use forget";
        let t = (0, q.c)(46),
            {
                conversation: n
            } = e,
            r;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = ae(), t[0] = r) : r = t[0];
        let i = r,
            a = y(),
            s = l(te),
            c = l(p),
            f = o(),
            m;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (m = () => i.activeSession$(), t[1] = m) : m = t[1];
        let h = l(m),
            ee = (0, J.useRef)(a.pathname),
            [_, v] = (0, J.useState)(null),
            ne;
        t[2] !== a.pathname || t[3] !== h ? (ne = () => {
            let e = ee.current;
            ee.current = a.pathname, h && e !== a.pathname && (A({
                host: `chatgpt`,
                payload: h.payload,
                session: h,
                closeReason: `navigation_changed`
            }), i.close$())
        }, t[2] = a.pathname, t[3] = h, t[4] = ne) : ne = t[4];
        let b;
        if (t[5] !== n.id || t[6] !== a.pathname || t[7] !== h ? (b = [n.id, i, a.pathname, h], t[5] = n.id, t[6] = a.pathname, t[7] = h, t[8] = b) : b = t[8], (0, J.useEffect)(ne, b), !h) return null;
        let x;
        t[9] !== n || t[10] !== h ? (x = e => {
            A({
                host: `chatgpt`,
                payload: h.payload,
                session: h,
                closeReason: e
            }), i.close$(), Te({
                conversation: n,
                toolMessageId: h.chatSDK.toolMessageId ?? null
            })
        }, t[9] = n, t[10] = h, t[11] = x) : x = t[11];
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
        if (h.mode === `fullscreen`) {
            let e = c && _?.sessionId === h.id ? _.height : 0,
                r;
            t[16] !== n || t[17] !== E || t[18] !== h || t[19] !== e ? (r = (0, Y.jsx)(G, {
                conversation: n,
                session: h,
                onClose: E,
                safeAreaInsetBottom: e
            }), t[16] = n, t[17] = E, t[18] = h, t[19] = e, t[20] = r) : r = t[20];
            let i = r;
            if (!c) {
                let e;
                t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(`span`, {
                    className: `sr-only`,
                    children: `Widget modal`
                }), t[21] = e) : e = t[21];
                let n;
                return t[22] !== i || t[23] !== w ? (n = (0, Y.jsx)(u, {
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
                    children: i
                }), t[22] = i, t[23] = w, t[24] = n) : n = t[24], n
            }
            let a = f ? `var(--sidebar-width)` : `var(--sidebar-rail-width)`,
                o;
            t[25] === a ? o = t[26] : (o = {
                insetInlineStart: a
            }, t[25] = a, t[26] = o);
            let s;
            t[27] === h.id ? s = t[28] : (s = g({
                axis: `height`,
                onChange: e => {
                    let {
                        height: t
                    } = e;
                    return v({
                        sessionId: h.id,
                        height: t
                    })
                }
            }), t[27] = h.id, t[28] = s);
            let l;
            t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, Y.jsx)(re.Outlet, {}), t[29] = l) : l = t[29];
            let d;
            t[30] === s ? d = t[31] : (d = (0, Y.jsx)(`div`, {
                className: `pointer-events-none absolute inset-x-0 bottom-0 z-60`,
                ref: s,
                children: l
            }), t[30] = s, t[31] = d);
            let p;
            return t[32] !== i || t[33] !== o || t[34] !== d ? (p = (0, Y.jsxs)(`div`, {
                className: `bg-token-main-surface-primary fixed inset-0 z-50`,
                style: o,
                children: [i, d]
            }), t[32] = i, t[33] = o, t[34] = d, t[35] = p) : p = t[35], p
        }
        let D = !s,
            O;
        t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (O = (0, Y.jsx)(`span`, {
            className: `sr-only`,
            children: `Widget modal`
        }), t[36] = O) : O = t[36];
        let k;
        t[37] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, Y.jsx)(d, {
            onPointerDown: we,
            onClick: K,
            iconSize: `lg`,
            className: `text-token-text-primary bg-token-main-surface-primary/60! hover:bg-token-main-surface-primary/70! keyboard-focused:bg-token-main-surface-primary/70! pointer-events-auto ms-auto backdrop-blur-xl backdrop-filter transition-colors`
        }), t[37] = k) : k = t[37];
        let j;
        t[38] !== n || t[39] !== E || t[40] !== h ? (j = (0, Y.jsx)(G, {
            conversation: n,
            session: h,
            onClose: E
        }), t[38] = n, t[39] = E, t[40] = h, t[41] = j) : j = t[41];
        let M;
        return t[42] !== w || t[43] !== j || t[44] !== D ? (M = (0, Y.jsx)(u, {
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
            children: j
        }), t[42] = w, t[43] = j, t[44] = D, t[45] = M) : M = t[45], M
    }
}));
export {
    Ce as n, Ee as r, Z as t
};
//# sourceMappingURL=4740ae63-l0c80a7ag1m4gmb2.js.map