import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ant as r,
    Aw as i,
    Ko as a,
    Mw as o,
    Ow as s,
    Ro as c,
    Rz as l,
    aW as u,
    dnt as d,
    dq as f,
    iW as p,
    jw as m,
    k8 as h,
    nst as ee,
    q5 as g,
    rq as _,
    rst as te,
    uq as ne,
    zz as v
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    At as y,
    Bn as b,
    Q as x,
    Vn as S,
    wn as C
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ftn as w,
    Fut as T,
    Gut as re,
    Iut as E,
    Kut as D,
    Mut as O,
    Nut as k,
    Out as A,
    Ptn as j,
    Put as M,
    Ud as ie,
    Wd as ae,
    Xut as oe,
    Yut as se,
    Zut as N,
    c6 as ce,
    d6 as P,
    fJt as le,
    hJt as ue,
    jut as F,
    l6 as I,
    mJt as L,
    pJt as de,
    u6 as fe
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    n as R,
    t as pe
} from "./f7e0bf69-cfpyp1h2kfkt4f9j.js";
import {
    a as me,
    i as he,
    n as ge,
    o as _e,
    r as ve,
    s as z,
    t as B
} from "./da39060d-hl8nlxxyz5l4wor1.js";

function ye() {
    return {
        ok: !0
    }
}
var be, V, H, xe, Se, Ce, U, W = e((() => {
        be = C(), L(), z(), R(), me(), I(), P(), N(), F(), D(), T(), B(), v(), d(), te(), V = n(S()), H = b(), xe = 400, Se = e => typeof e?.reason == `string` ? e.reason : typeof e?.status == `string` ? `Tool call returned status ${e.status}.` : `The launcher tool call failed before it returned a reason.`, Ce = e => {
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
                    session: i,
                    onClose: a,
                    safeAreaInsetBottom: o
                } = e,
                s = o === void 0 ? 0 : o,
                c;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = re(), t[0] = c) : c = t[0];
            let u = c,
                d;
            t[1] === n ? d = t[2] : (d = ce(n), t[1] = n, t[2] = d);
            let f = d,
                p;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (p = ee(), t[3] = p) : p = t[3];
            let {
                locale: m
            } = p, h;
            t[4] === i.widgetState ? h = t[5] : (h = Ce(i.widgetState), t[4] = i.widgetState, t[5] = h);
            let g = h,
                _ = (0, V.useRef)(null),
                te = (0, V.useRef)(null),
                ne = (0, V.useRef)(null),
                v;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (v = {
                sessionId: null,
                toolMessageId: null
            }, t[6] = v) : v = t[6];
            let y = (0, V.useRef)(v),
                b;
            t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (b = {
                sessionId: null,
                html: null
            }, t[7] = b) : b = t[7];
            let x = (0, V.useRef)(b),
                [S, C] = (0, V.useState)(!1),
                [w, T] = (0, V.useState)(!1),
                [D, k] = (0, V.useState)(!1),
                A;
            t[8] !== g || t[9] !== i.chatSDK.metadata ? (A = {
                ...i.chatSDK.metadata,
                widget_state: g
            }, t[8] = g, t[9] = i.chatSDK.metadata, t[10] = A) : A = t[10];
            let j = i.toolInput ?? i.chatSDK.toolInput,
                ie = i.toolOutput ?? i.chatSDK.toolOutput,
                ae = i.toolResponseMetadata ?? i.chatSDK.toolResponseMetadata,
                N;
            t[11] !== i.chatSDK || t[12] !== ie || t[13] !== ae || t[14] !== A || t[15] !== j ? (N = {
                ...i.chatSDK,
                metadata: A,
                toolInput: j,
                toolOutput: ie,
                toolResponseMetadata: ae
            }, t[11] = i.chatSDK, t[12] = ie, t[13] = ae, t[14] = A, t[15] = j, t[16] = N) : N = t[16];
            let P = N,
                F = i.status === `error` && P.toolResponseMetadata?.error_code === `tunnel_client_network_access_denied`,
                I;
            t[17] === F ? I = t[18] : (I = {
                ...F ? {
                    skipResolution: !0
                } : {},
                skipNetworkRequestWhenCacheHit: !0
            }, t[17] = F, t[18] = I);
            let L = E(P, void 0, I),
                R = P.metadata.resolved_pineapple_uri ?? null,
                me;
            t[19] !== F || t[20] !== L.error ? (me = F || ue(L.error), t[19] = F, t[20] = L.error, t[21] = me) : me = t[21];
            let z = me,
                B;
            bb0: {
                if (z) {
                    let e;
                    t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
                        message: de.defaultMessage,
                        failurePoint: `tool_call`,
                        reason: le
                    }, t[22] = e) : e = t[22], B = e;
                    break bb0
                }
                if (i.status === `error`) {
                    let e;
                    t[23] === i.toolResponseMetadata ? e = t[24] : (e = Se(i.toolResponseMetadata), t[23] = i.toolResponseMetadata, t[24] = e);
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
                    t[35] === R ? p = t[36] : (p = {
                        label: `Resolved URI`,
                        value: R
                    }, t[35] = R, t[36] = p);
                    let m;
                    t[37] !== r || t[38] !== o || t[39] !== c || t[40] !== u || t[41] !== f || t[42] !== p ? (m = [r, o, c, u, f, p], t[37] = r, t[38] = o, t[39] = c, t[40] = u, t[41] = f, t[42] = p, t[43] = m) : m = t[43];
                    let h;
                    t[44] !== e || t[45] !== m ? (h = {
                        message: `Unable to launch this app right now.`,
                        failurePoint: `tool_call`,
                        reason: e,
                        extraDebugItems: m
                    }, t[44] = e, t[45] = m, t[46] = h) : h = t[46], B = h;
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
                        extraDebugItems: [e, ...oe(L.error)]
                    }, t[49] = L.error, t[50] = e, t[51] = n) : n = t[51], B = n;
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
                    }, t[52] = R, t[53] = e), B = e;
                    break bb0
                }
                B = null
            }
            let U = B,
                W;
            t[54] !== L.hideFullScreenHeader || t[55] !== i.mode || t[56] !== U ? (W = U == null && i.mode === `fullscreen` && !L.hideFullScreenHeader && !r(), t[54] = L.hideFullScreenHeader, t[55] = i.mode, t[56] = U, t[57] = W) : W = t[57];
            let we = W,
                G;
            t[58] !== L.hideFullScreenHeader || t[59] !== i.mode || t[60] !== U ? (G = i.mode === `fullscreen` && (U != null || L.hideFullScreenHeader || r()), t[58] = L.hideFullScreenHeader, t[59] = i.mode, t[60] = U, t[61] = G) : G = t[61];
            let K = G,
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
                Y = P.metadata.attribution_id ?? P.widgetParent,
                X;
            t[66] !== L.csp || t[67] !== L.domain || t[68] !== P.widgetId ? (X = {
                csp: L.csp,
                domain: L.domain,
                widgetId: P.widgetId,
                widgetRef: _
            }, t[66] = L.csp, t[67] = L.domain, t[68] = P.widgetId, t[69] = X) : X = t[69];
            let {
                openInApp: Te,
                setOpenInAppUrl: Z,
                shouldHideOpenInAppButton: Ee,
                widgetRedirectUrl: De
            } = ge(X), Oe = i.mode === `modal` ? P.metadata.height_hint ?? L.heightHint ?? xe : null, ke = i.mode === `modal` && U == null && !D, Ae, je;
            t[70] !== z || t[71] !== f || t[72] !== i.chatSDK || t[73] !== i.id || t[74] !== i.launchAttemptId || t[75] !== i.payload || t[76] !== i.status || t[77] !== i.toolResponseMetadata || t[78] !== U ? (Ae = () => {
                if (!U || (f.cancelWidgetStateQueue$(i.id), z)) return;
                let e = `${i.id}:${U.failurePoint}:${U.reason}`;
                te.current !== e && (te.current = e, O({
                    host: `chatgpt`,
                    payload: i.payload,
                    session: {
                        id: i.id,
                        launchAttemptId: i.launchAttemptId,
                        status: i.status,
                        chatSDK: i.chatSDK
                    },
                    error: U,
                    toolResponseMetadata: i.toolResponseMetadata
                }))
            }, je = [z, i.id, i.launchAttemptId, i.payload, i.status, i.chatSDK, i.toolResponseMetadata, U, f], t[70] = z, t[71] = f, t[72] = i.chatSDK, t[73] = i.id, t[74] = i.launchAttemptId, t[75] = i.payload, t[76] = i.status, t[77] = i.toolResponseMetadata, t[78] = U, t[79] = Ae, t[80] = je) : (Ae = t[79], je = t[80]), (0, V.useEffect)(Ae, je);
            let Me;
            t[81] === Symbol.for(`react.memo_cache_sentinel`) ? (Me = () => {
                C(!1), T(!1)
            }, t[81] = Me) : Me = t[81];
            let Ne;
            t[82] === i.id ? Ne = t[83] : (Ne = [i.id], t[82] = i.id, t[83] = Ne), (0, V.useEffect)(Me, Ne);
            let Pe, Fe;
            t[84] !== L.html || t[85] !== L.isLoading || t[86] !== i.id ? (Pe = () => {
                let e = x.current;
                if (e.sessionId !== i.id) {
                    x.current = {
                        sessionId: i.id,
                        html: L.html
                    }, k(!1);
                    return
                }
                if (L.html == null && L.isLoading) return;
                let t = e.html !== L.html;
                x.current = {
                    sessionId: i.id,
                    html: L.html
                }, t && k(!1)
            }, Fe = [i.id, L.html, L.isLoading], t[84] = L.html, t[85] = L.isLoading, t[86] = i.id, t[87] = Pe, t[88] = Fe) : (Pe = t[87], Fe = t[88]), (0, V.useEffect)(Pe, Fe);
            let Ie, Le;
            t[89] !== f || t[90] !== i.id || t[91] !== i.widgetState || t[92] !== P.metadata.widget_state_revision || t[93] !== P.toolMessageId || t[94] !== P.widgetId || t[95] !== P.widgetParent || t[96] !== P.widgetSessionId ? (Ie = () => {
                y.current.sessionId !== i.id && (y.current = {
                    sessionId: i.id,
                    toolMessageId: null
                });
                let e = P.toolMessageId ?? null,
                    t = y.current.toolMessageId;
                y.current.toolMessageId = e, t == null && e != null && f.bindWidgetStateQueue$(i.id, e, P.metadata.widget_state_revision ?? 0, i.widgetState) === `not-pending` && i.widgetState != null && f.enqueueWidgetState$(e, i.widgetState, {
                    queueKey: i.id,
                    widgetContext: {
                        appUri: P.widgetParent,
                        widgetId: P.widgetId,
                        widgetSessionId: P.widgetSessionId,
                        source: `host`
                    }
                })
            }, Le = [f, i.id, i.widgetState, P.metadata.widget_state_revision, P.toolMessageId, P.widgetId, P.widgetParent, P.widgetSessionId], t[89] = f, t[90] = i.id, t[91] = i.widgetState, t[92] = P.metadata.widget_state_revision, t[93] = P.toolMessageId, t[94] = P.widgetId, t[95] = P.widgetParent, t[96] = P.widgetSessionId, t[97] = Ie, t[98] = Le) : (Ie = t[97], Le = t[98]), (0, V.useEffect)(Ie, Le);
            let Re, ze;
            t[99] !== f || t[100] !== i.id ? (Re = () => () => {
                f.cancelWidgetStateQueue$(i.id)
            }, ze = [f, i.id], t[99] = f, t[100] = i.id, t[101] = Re, t[102] = ze) : (Re = t[101], ze = t[102]), (0, V.useEffect)(Re, ze);
            let Be;
            t[103] !== a || t[104] !== i.id ? (Be = e => {
                u.setLastCheckoutRequestId$(i.id, e.id), a(`checkout_completed`)
            }, t[103] = a, t[104] = i.id, t[105] = Be) : Be = t[105];
            let Ve = Be,
                He;
            t[106] !== L.html || t[107] !== i.chatSDK || t[108] !== i.id || t[109] !== i.launchAttemptId || t[110] !== i.payload ? (He = () => {
                k(!0);
                let e = `${i.id}:${L.html??``}`;
                ne.current !== e && (ne.current = e, M({
                    host: `chatgpt`,
                    payload: i.payload,
                    session: {
                        id: i.id,
                        launchAttemptId: i.launchAttemptId,
                        chatSDK: i.chatSDK
                    }
                }))
            }, t[106] = L.html, t[107] = i.chatSDK, t[108] = i.id, t[109] = i.launchAttemptId, t[110] = i.payload, t[111] = He) : He = t[111];
            let Ue = He,
                We;
            t[112] !== Y || t[113] !== n || t[114] !== Ve || t[115] !== Ue || t[116] !== z || t[117] !== f || t[118] !== Oe || t[119] !== a || t[120] !== L || t[121] !== J || t[122] !== i.id || t[123] !== i.mode || t[124] !== i.payload || t[125] !== i.toolResponseMetadata?.status || t[126] !== P || t[127] !== U || t[128] !== Z ? (We = z ? (0, H.jsx)(`div`, {
                className: `p-6`,
                children: (0, H.jsx)(_e, {})
            }) : U ? (0, H.jsx)(se, {
                error: U,
                payload: i.payload,
                sessionId: i.id
            }) : (0, H.jsx)(pe, {
                onReady: Ue,
                onClose: a,
                onCheckoutComplete: Ve,
                onCanGoBack: C,
                onCanGoForward: T,
                onSetOpenInAppUrl: Z,
                onUpdateWidgetState: (e, t, n) => {
                    u.setWidgetState$(i.id, t);
                    let r = n?.waitForPersistence === !0;
                    return f.enqueueWidgetState$(P.toolMessageId ?? null, t, {
                        queueKey: i.id,
                        waitForPersistence: r,
                        hydratedRevision: P.metadata.widget_state_revision ?? 0,
                        widgetContext: {
                            appUri: P.widgetParent,
                            widgetId: P.widgetId,
                            widgetSessionId: P.widgetSessionId,
                            source: `host`
                        }
                    }).then(ye, fe)
                },
                title: L.name ?? ``,
                domain: L.domain,
                params: i.payload.viewParams,
                displayMode: i.mode,
                forceFullHeight: i.mode === `fullscreen`,
                heightHint: Oe,
                safeArea: J,
                widgetRef: _,
                conversation: n,
                chatSDK: P,
                isToolInputAuthorized: i.toolResponseMetadata?.status === `success`,
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
            }), t[112] = Y, t[113] = n, t[114] = Ve, t[115] = Ue, t[116] = z, t[117] = f, t[118] = Oe, t[119] = a, t[120] = L, t[121] = J, t[122] = i.id, t[123] = i.mode, t[124] = i.payload, t[125] = i.toolResponseMetadata?.status, t[126] = P, t[127] = U, t[128] = Z, t[129] = We) : We = t[129];
            let Q = We;
            if (i.mode === `fullscreen`) {
                let e;
                t[130] !== S || t[131] !== w || t[132] !== a || t[133] !== Te || t[134] !== L.logoUrl || t[135] !== L.name || t[136] !== Ee || t[137] !== we || t[138] !== De ? (e = we && (0, H.jsx)(ve, {
                    logo: L.logoUrl,
                    hideOpenInAppButton: Ee,
                    onClickBack: () => _.current?.navigate({
                        delta: -1
                    }),
                    onClickClose: () => a(`user_dismissed`),
                    onClickForward: () => _.current?.navigate({
                        delta: 1
                    }),
                    canGoBack: S,
                    canGoForward: w,
                    title: L.name ?? ``,
                    widgetDisplayName: L.name ?? ``,
                    widgetDomain: De ?? null,
                    onClickOpenInApp: Te
                }), t[130] = S, t[131] = w, t[132] = a, t[133] = Te, t[134] = L.logoUrl, t[135] = L.name, t[136] = Ee, t[137] = we, t[138] = De, t[139] = e) : e = t[139];
                let n;
                t[140] !== S || t[141] !== w || t[142] !== a || t[143] !== K ? (n = K && (0, H.jsx)(he, {
                    isNavOnly: !0,
                    onClickBack: () => _.current?.navigate({
                        delta: -1
                    }),
                    onClickForward: () => _.current?.navigate({
                        delta: 1
                    }),
                    onClickClose: () => a(`user_dismissed`),
                    canGoBack: S,
                    canGoForward: w
                }), t[140] = S, t[141] = w, t[142] = a, t[143] = K, t[144] = n) : n = t[144];
                let r;
                t[145] === Q ? r = t[146] : (r = (0, H.jsx)(`div`, {
                    className: `relative min-h-0 flex-1`,
                    children: Q
                }), t[145] = Q, t[146] = r);
                let i;
                return t[147] !== e || t[148] !== n || t[149] !== r ? (i = (0, H.jsxs)(`div`, {
                    className: `flex h-full min-h-0 flex-col`,
                    children: [e, n, r]
                }), t[147] = e, t[148] = n, t[149] = r, t[150] = i) : i = t[150], i
            }
            let $;
            t[151] === ke ? $ = t[152] : ($ = ke && (0, H.jsx)(`div`, {
                "data-testid": `ecosystem-launcher-loading-state`,
                className: `bg-token-bg-primary/80 pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-2xl backdrop-blur-xs sm:rounded-3xl`,
                children: (0, H.jsx)(l, {
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
    q = C(), w(), o(), i(), ae(), A(), W(), D(), h(), c(), u(), _(), J = n(S()), x(), Y = b(), X = `pointer-events-none absolute start-0 end-0 top-0 z-10 min-h-0 border-0 p-2 [&>button]:pointer-events-auto`, Te = ({
        conversation: e,
        toolMessageId: t
    }) => {
        t != null && (j.set(e, void 0), requestAnimationFrame(() => {
            j.set(e, t)
        }))
    }, Z = e => {
        "use forget";
        let t = (0, q.c)(46),
            {
                conversation: n
            } = e,
            r;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = re(), t[0] = r) : r = t[0];
        let i = r,
            o = y(),
            c = g(f),
            l = g(ne),
            u = a(),
            d;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (d = () => i.activeSession$(), t[1] = d) : d = t[1];
        let h = g(d),
            ee = (0, J.useRef)(o.pathname),
            [_, te] = (0, J.useState)(null),
            v;
        t[2] !== o.pathname || t[3] !== h ? (v = () => {
            let e = ee.current;
            ee.current = o.pathname, h && e !== o.pathname && (k({
                host: `chatgpt`,
                payload: h.payload,
                session: h,
                closeReason: `navigation_changed`
            }), i.close$())
        }, t[2] = o.pathname, t[3] = h, t[4] = v) : v = t[4];
        let b;
        if (t[5] !== n.id || t[6] !== o.pathname || t[7] !== h ? (b = [n.id, i, o.pathname, h], t[5] = n.id, t[6] = o.pathname, t[7] = h, t[8] = b) : b = t[8], (0, J.useEffect)(v, b), !h) return null;
        let x;
        t[9] !== n || t[10] !== h ? (x = e => {
            k({
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
            let e = l && _?.sessionId === h.id ? _.height : 0,
                r;
            t[16] !== n || t[17] !== E || t[18] !== h || t[19] !== e ? (r = (0, Y.jsx)(U, {
                conversation: n,
                session: h,
                onClose: E,
                safeAreaInsetBottom: e
            }), t[16] = n, t[17] = E, t[18] = h, t[19] = e, t[20] = r) : r = t[20];
            let i = r;
            if (!l) {
                let e;
                t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(`span`, {
                    className: `sr-only`,
                    children: `Widget modal`
                }), t[21] = e) : e = t[21];
                let n;
                return t[22] !== i || t[23] !== w ? (n = (0, Y.jsx)(s, {
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
            let c;
            t[27] === h.id ? c = t[28] : (c = p({
                axis: `height`,
                onChange: e => {
                    let {
                        height: t
                    } = e;
                    return te({
                        sessionId: h.id,
                        height: t
                    })
                }
            }), t[27] = h.id, t[28] = c);
            let d;
            t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Y.jsx)(ie.Outlet, {}), t[29] = d) : d = t[29];
            let f;
            t[30] === c ? f = t[31] : (f = (0, Y.jsx)(`div`, {
                className: `pointer-events-none absolute inset-x-0 bottom-0 z-60`,
                ref: c,
                children: d
            }), t[30] = c, t[31] = f);
            let m;
            return t[32] !== i || t[33] !== o || t[34] !== f ? (m = (0, Y.jsxs)(`div`, {
                className: `bg-token-main-surface-primary fixed inset-0 z-50`,
                style: o,
                children: [i, f]
            }), t[32] = i, t[33] = o, t[34] = f, t[35] = m) : m = t[35], m
        }
        let D = !c,
            O;
        t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (O = (0, Y.jsx)(`span`, {
            className: `sr-only`,
            children: `Widget modal`
        }), t[36] = O) : O = t[36];
        let A;
        t[37] === Symbol.for(`react.memo_cache_sentinel`) ? (A = (0, Y.jsx)(m, {
            onPointerDown: G,
            onClick: K,
            iconSize: `lg`,
            className: `text-token-text-primary bg-token-main-surface-primary/60! hover:bg-token-main-surface-primary/70! keyboard-focused:bg-token-main-surface-primary/70! pointer-events-auto ms-auto backdrop-blur-xl backdrop-filter transition-colors`
        }), t[37] = A) : A = t[37];
        let j;
        t[38] !== n || t[39] !== E || t[40] !== h ? (j = (0, Y.jsx)(U, {
            conversation: n,
            session: h,
            onClose: E
        }), t[38] = n, t[39] = E, t[40] = h, t[41] = j) : j = t[41];
        let M;
        return t[42] !== w || t[43] !== j || t[44] !== D ? (M = (0, Y.jsx)(s, {
            isOpen: !0,
            onClose: w,
            isBottomSheet: D,
            size: `custom`,
            title: O,
            noPadding: !0,
            isScrollable: !1,
            showCloseButton: !0,
            closeButton: A,
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
    we as n, Ee as r, Z as t
};
//# sourceMappingURL=4740ae63-ju8ji2b9i6ivuydw.js.map