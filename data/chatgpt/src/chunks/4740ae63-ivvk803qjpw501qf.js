import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as r,
    Aw as i,
    Bnt as a,
    Ko as o,
    Mw as s,
    Ow as c,
    Ro as l,
    Rz as u,
    aW as d,
    dq as f,
    fst as p,
    iW as m,
    j5 as h,
    jw as g,
    pst as _,
    rq as v,
    uq as ee,
    xnt as te,
    zz as y
} from "./4813494d-mdvd4786a87166cc.js";
import {
    At as ne,
    Bn as b,
    Q as x,
    Vn as S,
    wn as C
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Aut as w,
    Eut as T,
    Jtn as E,
    Jut as re,
    Mut as D,
    Nut as O,
    Put as k,
    Ud as ie,
    Uut as ae,
    Wd as A,
    Wut as j,
    Yut as oe,
    _Jt as se,
    d6 as ce,
    f6 as M,
    gJt as le,
    hJt as ue,
    jut as N,
    kut as P,
    l6 as de,
    qtn as F,
    qut as fe,
    u6 as I,
    vJt as pe
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    n as L,
    t as me
} from "./f7e0bf69-kg4gumu5ukmjdoq0.js";
import {
    a as R,
    i as he,
    n as ge,
    o as _e,
    r as ve,
    s as z,
    t as B
} from "./da39060d-c6q3msatgvmdbdo0.js";

function ye() {
    return {
        ok: !0
    }
}
var be, V, H, xe, Se, Ce, U, W = e((() => {
        be = C(), se(), z(), L(), R(), I(), M(), oe(), P(), j(), O(), B(), y(), te(), _(), V = n(S()), H = b(), xe = 400, Se = e => typeof e?.reason == `string` ? e.reason : typeof e?.status == `string` ? `Tool call returned status ${e.status}.` : `The launcher tool call failed before it returned a reason.`, Ce = e => {
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
                    safeAreaInsetBottom: o
                } = e,
                s = o === void 0 ? 0 : o,
                c;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = ae(), t[0] = c) : c = t[0];
            let l = c,
                d;
            t[1] === n ? d = t[2] : (d = de(n), t[1] = n, t[2] = d);
            let f = d,
                m;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (m = p(), t[3] = m) : m = t[3];
            let {
                locale: h
            } = m, g;
            t[4] === r.widgetState ? g = t[5] : (g = Ce(r.widgetState), t[4] = r.widgetState, t[5] = g);
            let _ = g,
                v = (0, V.useRef)(null),
                ee = (0, V.useRef)(null),
                te = (0, V.useRef)(null),
                y;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (y = {
                sessionId: null,
                toolMessageId: null
            }, t[6] = y) : y = t[6];
            let ne = (0, V.useRef)(y),
                b;
            t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (b = {
                sessionId: null,
                html: null
            }, t[7] = b) : b = t[7];
            let x = (0, V.useRef)(b),
                [S, C] = (0, V.useState)(!1),
                [T, E] = (0, V.useState)(!1),
                [O, ie] = (0, V.useState)(!1),
                A;
            t[8] !== _ || t[9] !== r.chatSDK.metadata ? (A = {
                ...r.chatSDK.metadata,
                widget_state: _
            }, t[8] = _, t[9] = r.chatSDK.metadata, t[10] = A) : A = t[10];
            let j = r.toolInput ?? r.chatSDK.toolInput,
                oe = r.toolOutput ?? r.chatSDK.toolOutput,
                se = r.toolResponseMetadata ?? r.chatSDK.toolResponseMetadata,
                M;
            t[11] !== r.chatSDK || t[12] !== oe || t[13] !== se || t[14] !== A || t[15] !== j ? (M = {
                ...r.chatSDK,
                metadata: A,
                toolInput: j,
                toolOutput: oe,
                toolResponseMetadata: se
            }, t[11] = r.chatSDK, t[12] = oe, t[13] = se, t[14] = A, t[15] = j, t[16] = M) : M = t[16];
            let N = M,
                P = r.status === `error` && N.toolResponseMetadata?.error_code === `tunnel_client_network_access_denied`,
                F;
            t[17] === P ? F = t[18] : (F = {
                ...P ? {
                    skipResolution: !0
                } : {},
                skipNetworkRequestWhenCacheHit: !0
            }, t[17] = P, t[18] = F);
            let I = k(N, void 0, F),
                L = N.metadata.resolved_pineapple_uri ?? null,
                R;
            t[19] !== P || t[20] !== I.error ? (R = P || pe(I.error), t[19] = P, t[20] = I.error, t[21] = R) : R = t[21];
            let z = R,
                B;
            bb0: {
                if (z) {
                    let e;
                    t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
                        message: le.defaultMessage,
                        failurePoint: `tool_call`,
                        reason: ue
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
                        extraDebugItems: [e, ...re(I.error)]
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
            t[54] !== I.hideFullScreenHeader || t[55] !== r.mode || t[56] !== U ? (W = U == null && r.mode === `fullscreen` && !I.hideFullScreenHeader && !a(), t[54] = I.hideFullScreenHeader, t[55] = r.mode, t[56] = U, t[57] = W) : W = t[57];
            let we = W,
                G;
            t[58] !== I.hideFullScreenHeader || t[59] !== r.mode || t[60] !== U ? (G = r.mode === `fullscreen` && (U != null || I.hideFullScreenHeader || a()), t[58] = I.hideFullScreenHeader, t[59] = r.mode, t[60] = U, t[61] = G) : G = t[61];
            let K = G,
                q;
            t[62] !== s || t[63] !== r.mode || t[64] !== K ? (q = r.mode === `fullscreen` ? {
                insets: {
                    top: K ? 40 : 0,
                    bottom: s,
                    left: 0,
                    right: 0
                }
            } : void 0, t[62] = s, t[63] = r.mode, t[64] = K, t[65] = q) : q = t[65];
            let J = q,
                Y = N.metadata.attribution_id ?? N.widgetParent,
                X;
            t[66] !== I.csp || t[67] !== I.domain || t[68] !== N.widgetId ? (X = {
                csp: I.csp,
                domain: I.domain,
                widgetId: N.widgetId,
                widgetRef: v
            }, t[66] = I.csp, t[67] = I.domain, t[68] = N.widgetId, t[69] = X) : X = t[69];
            let {
                openInApp: Te,
                setOpenInAppUrl: Z,
                shouldHideOpenInAppButton: Ee,
                widgetRedirectUrl: De
            } = ge(X), Oe = r.mode === `modal` ? N.metadata.height_hint ?? I.heightHint ?? xe : null, ke = r.mode === `modal` && U == null && !O, Ae, je;
            t[70] !== z || t[71] !== f || t[72] !== r.chatSDK || t[73] !== r.id || t[74] !== r.launchAttemptId || t[75] !== r.payload || t[76] !== r.status || t[77] !== r.toolResponseMetadata || t[78] !== U ? (Ae = () => {
                if (!U || (f.cancelWidgetStateQueue$(r.id), z)) return;
                let e = `${r.id}:${U.failurePoint}:${U.reason}`;
                ee.current !== e && (ee.current = e, w({
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
            }, je = [z, r.id, r.launchAttemptId, r.payload, r.status, r.chatSDK, r.toolResponseMetadata, U, f], t[70] = z, t[71] = f, t[72] = r.chatSDK, t[73] = r.id, t[74] = r.launchAttemptId, t[75] = r.payload, t[76] = r.status, t[77] = r.toolResponseMetadata, t[78] = U, t[79] = Ae, t[80] = je) : (Ae = t[79], je = t[80]), (0, V.useEffect)(Ae, je);
            let Me;
            t[81] === Symbol.for(`react.memo_cache_sentinel`) ? (Me = () => {
                C(!1), E(!1)
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
                    }, ie(!1);
                    return
                }
                if (I.html == null && I.isLoading) return;
                let t = e.html !== I.html;
                x.current = {
                    sessionId: r.id,
                    html: I.html
                }, t && ie(!1)
            }, Fe = [r.id, I.html, I.isLoading], t[84] = I.html, t[85] = I.isLoading, t[86] = r.id, t[87] = Pe, t[88] = Fe) : (Pe = t[87], Fe = t[88]), (0, V.useEffect)(Pe, Fe);
            let Ie, Le;
            t[89] !== f || t[90] !== r.id || t[91] !== r.widgetState || t[92] !== N.metadata.widget_state_revision || t[93] !== N.toolMessageId || t[94] !== N.widgetId || t[95] !== N.widgetParent || t[96] !== N.widgetSessionId ? (Ie = () => {
                ne.current.sessionId !== r.id && (ne.current = {
                    sessionId: r.id,
                    toolMessageId: null
                });
                let e = N.toolMessageId ?? null,
                    t = ne.current.toolMessageId;
                ne.current.toolMessageId = e, t == null && e != null && f.bindWidgetStateQueue$(r.id, e, N.metadata.widget_state_revision ?? 0, r.widgetState) === `not-pending` && r.widgetState != null && f.enqueueWidgetState$(e, r.widgetState, {
                    queueKey: r.id,
                    widgetContext: {
                        appUri: N.widgetParent,
                        widgetId: N.widgetId,
                        widgetSessionId: N.widgetSessionId,
                        source: `host`
                    }
                })
            }, Le = [f, r.id, r.widgetState, N.metadata.widget_state_revision, N.toolMessageId, N.widgetId, N.widgetParent, N.widgetSessionId], t[89] = f, t[90] = r.id, t[91] = r.widgetState, t[92] = N.metadata.widget_state_revision, t[93] = N.toolMessageId, t[94] = N.widgetId, t[95] = N.widgetParent, t[96] = N.widgetSessionId, t[97] = Ie, t[98] = Le) : (Ie = t[97], Le = t[98]), (0, V.useEffect)(Ie, Le);
            let Re, ze;
            t[99] !== f || t[100] !== r.id ? (Re = () => () => {
                f.cancelWidgetStateQueue$(r.id)
            }, ze = [f, r.id], t[99] = f, t[100] = r.id, t[101] = Re, t[102] = ze) : (Re = t[101], ze = t[102]), (0, V.useEffect)(Re, ze);
            let Be;
            t[103] !== i || t[104] !== r.id ? (Be = e => {
                l.setLastCheckoutRequestId$(r.id, e.id), i(`checkout_completed`)
            }, t[103] = i, t[104] = r.id, t[105] = Be) : Be = t[105];
            let Ve = Be,
                He;
            t[106] !== I.html || t[107] !== r.chatSDK || t[108] !== r.id || t[109] !== r.launchAttemptId || t[110] !== r.payload ? (He = () => {
                ie(!0);
                let e = `${r.id}:${I.html??``}`;
                te.current !== e && (te.current = e, D({
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
            t[112] !== Y || t[113] !== n || t[114] !== Ve || t[115] !== Ue || t[116] !== z || t[117] !== f || t[118] !== Oe || t[119] !== i || t[120] !== I || t[121] !== J || t[122] !== r.id || t[123] !== r.mode || t[124] !== r.payload || t[125] !== r.toolResponseMetadata?.status || t[126] !== N || t[127] !== U || t[128] !== Z ? (We = z ? (0, H.jsx)(`div`, {
                className: `p-6`,
                children: (0, H.jsx)(_e, {})
            }) : U ? (0, H.jsx)(fe, {
                error: U,
                payload: r.payload,
                sessionId: r.id
            }) : (0, H.jsx)(me, {
                onReady: Ue,
                onClose: i,
                onCheckoutComplete: Ve,
                onCanGoBack: C,
                onCanGoForward: E,
                onSetOpenInAppUrl: Z,
                onUpdateWidgetState: (e, t, n) => {
                    l.setWidgetState$(r.id, t);
                    let i = n?.waitForPersistence === !0;
                    return f.enqueueWidgetState$(N.toolMessageId ?? null, t, {
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
                widgetRef: v,
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
                locale: h
            }), t[112] = Y, t[113] = n, t[114] = Ve, t[115] = Ue, t[116] = z, t[117] = f, t[118] = Oe, t[119] = i, t[120] = I, t[121] = J, t[122] = r.id, t[123] = r.mode, t[124] = r.payload, t[125] = r.toolResponseMetadata?.status, t[126] = N, t[127] = U, t[128] = Z, t[129] = We) : We = t[129];
            let Q = We;
            if (r.mode === `fullscreen`) {
                let e;
                t[130] !== S || t[131] !== T || t[132] !== i || t[133] !== Te || t[134] !== I.logoUrl || t[135] !== I.name || t[136] !== Ee || t[137] !== we || t[138] !== De ? (e = we && (0, H.jsx)(ve, {
                    logo: I.logoUrl,
                    hideOpenInAppButton: Ee,
                    onClickBack: () => v.current?.navigate({
                        delta: -1
                    }),
                    onClickClose: () => i(`user_dismissed`),
                    onClickForward: () => v.current?.navigate({
                        delta: 1
                    }),
                    canGoBack: S,
                    canGoForward: T,
                    title: I.name ?? ``,
                    widgetDisplayName: I.name ?? ``,
                    widgetDomain: De ?? null,
                    onClickOpenInApp: Te
                }), t[130] = S, t[131] = T, t[132] = i, t[133] = Te, t[134] = I.logoUrl, t[135] = I.name, t[136] = Ee, t[137] = we, t[138] = De, t[139] = e) : e = t[139];
                let n;
                t[140] !== S || t[141] !== T || t[142] !== i || t[143] !== K ? (n = K && (0, H.jsx)(he, {
                    isNavOnly: !0,
                    onClickBack: () => v.current?.navigate({
                        delta: -1
                    }),
                    onClickForward: () => v.current?.navigate({
                        delta: 1
                    }),
                    onClickClose: () => i(`user_dismissed`),
                    canGoBack: S,
                    canGoForward: T
                }), t[140] = S, t[141] = T, t[142] = i, t[143] = K, t[144] = n) : n = t[144];
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
                children: (0, H.jsx)(u, {
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
    q = C(), E(), s(), i(), A(), T(), W(), j(), r(), l(), d(), v(), J = n(S()), x(), Y = b(), X = `pointer-events-none absolute start-0 end-0 top-0 z-10 min-h-0 border-0 p-2 [&>button]:pointer-events-auto`, Te = ({
        conversation: e,
        toolMessageId: t
    }) => {
        t != null && (F.set(e, void 0), requestAnimationFrame(() => {
            F.set(e, t)
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
            a = ne(),
            s = h(f),
            l = h(ee),
            u = o(),
            d;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (d = () => i.activeSession$(), t[1] = d) : d = t[1];
        let p = h(d),
            _ = (0, J.useRef)(a.pathname),
            [v, te] = (0, J.useState)(null),
            y;
        t[2] !== a.pathname || t[3] !== p ? (y = () => {
            let e = _.current;
            _.current = a.pathname, p && e !== a.pathname && (N({
                host: `chatgpt`,
                payload: p.payload,
                session: p,
                closeReason: `navigation_changed`
            }), i.close$())
        }, t[2] = a.pathname, t[3] = p, t[4] = y) : y = t[4];
        let b;
        if (t[5] !== n.id || t[6] !== a.pathname || t[7] !== p ? (b = [n.id, i, a.pathname, p], t[5] = n.id, t[6] = a.pathname, t[7] = p, t[8] = b) : b = t[8], (0, J.useEffect)(y, b), !p) return null;
        let x;
        t[9] !== n || t[10] !== p ? (x = e => {
            N({
                host: `chatgpt`,
                payload: p.payload,
                session: p,
                closeReason: e
            }), i.close$(), Te({
                conversation: n,
                toolMessageId: p.chatSDK.toolMessageId ?? null
            })
        }, t[9] = n, t[10] = p, t[11] = x) : x = t[11];
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
        if (p.mode === `fullscreen`) {
            let e = l && v?.sessionId === p.id ? v.height : 0,
                r;
            t[16] !== n || t[17] !== E || t[18] !== p || t[19] !== e ? (r = (0, Y.jsx)(U, {
                conversation: n,
                session: p,
                onClose: E,
                safeAreaInsetBottom: e
            }), t[16] = n, t[17] = E, t[18] = p, t[19] = e, t[20] = r) : r = t[20];
            let i = r;
            if (!l) {
                let e;
                t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(`span`, {
                    className: `sr-only`,
                    children: `Widget modal`
                }), t[21] = e) : e = t[21];
                let n;
                return t[22] !== i || t[23] !== w ? (n = (0, Y.jsx)(c, {
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
            let a = u ? `var(--sidebar-width)` : `var(--sidebar-rail-width)`,
                o;
            t[25] === a ? o = t[26] : (o = {
                insetInlineStart: a
            }, t[25] = a, t[26] = o);
            let s;
            t[27] === p.id ? s = t[28] : (s = m({
                axis: `height`,
                onChange: e => {
                    let {
                        height: t
                    } = e;
                    return te({
                        sessionId: p.id,
                        height: t
                    })
                }
            }), t[27] = p.id, t[28] = s);
            let d;
            t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Y.jsx)(ie.Outlet, {}), t[29] = d) : d = t[29];
            let f;
            t[30] === s ? f = t[31] : (f = (0, Y.jsx)(`div`, {
                className: `pointer-events-none absolute inset-x-0 bottom-0 z-60`,
                ref: s,
                children: d
            }), t[30] = s, t[31] = f);
            let h;
            return t[32] !== i || t[33] !== o || t[34] !== f ? (h = (0, Y.jsxs)(`div`, {
                className: `bg-token-main-surface-primary fixed inset-0 z-50`,
                style: o,
                children: [i, f]
            }), t[32] = i, t[33] = o, t[34] = f, t[35] = h) : h = t[35], h
        }
        let re = !s,
            D;
        t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (D = (0, Y.jsx)(`span`, {
            className: `sr-only`,
            children: `Widget modal`
        }), t[36] = D) : D = t[36];
        let O;
        t[37] === Symbol.for(`react.memo_cache_sentinel`) ? (O = (0, Y.jsx)(g, {
            onPointerDown: G,
            onClick: K,
            iconSize: `lg`,
            className: `text-token-text-primary bg-token-main-surface-primary/60! hover:bg-token-main-surface-primary/70! keyboard-focused:bg-token-main-surface-primary/70! pointer-events-auto ms-auto backdrop-blur-xl backdrop-filter transition-colors`
        }), t[37] = O) : O = t[37];
        let k;
        t[38] !== n || t[39] !== E || t[40] !== p ? (k = (0, Y.jsx)(U, {
            conversation: n,
            session: p,
            onClose: E
        }), t[38] = n, t[39] = E, t[40] = p, t[41] = k) : k = t[41];
        let A;
        return t[42] !== w || t[43] !== k || t[44] !== re ? (A = (0, Y.jsx)(c, {
            isOpen: !0,
            onClose: w,
            isBottomSheet: re,
            size: `custom`,
            title: D,
            noPadding: !0,
            isScrollable: !1,
            showCloseButton: !0,
            closeButton: O,
            headerClassName: X,
            handle: !1,
            contentSize: `fill`,
            className: `max-h-[min(90vh,900px)] w-full max-w-xl lg:max-w-3xl`,
            contentClassName: `flex min-h-0 flex-col p-0`,
            testId: `modal-ecosystem-widget-launch`,
            children: k
        }), t[42] = w, t[43] = k, t[44] = re, t[45] = A) : A = t[45], A
    }
}));
export {
    we as n, Ee as r, Z as t
};
//# sourceMappingURL=4740ae63-ivvk803qjpw501qf.js.map