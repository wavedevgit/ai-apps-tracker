import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Az as r,
    Ew as i,
    Io as a,
    Ktt as o,
    Lot as s,
    M5 as c,
    Rot as l,
    Sw as u,
    Tw as d,
    Wo as f,
    aq as p,
    dnt as m,
    fq as h,
    jz as g,
    m8 as _,
    oW as v,
    pq as ee,
    sW as te,
    ww as y
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $ as b,
    Hn as x,
    Tn as S,
    Vn as C,
    jt as ne
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    $ut as w,
    Aut as T,
    Ftn as E,
    Fut as D,
    Hd as O,
    Iut as re,
    Jut as k,
    Lut as A,
    Nut as j,
    Ptn as M,
    Put as ie,
    Qut as ae,
    Rut as oe,
    Ud as N,
    Zut as se,
    a6 as ce,
    gJt as le,
    hJt as P,
    i6 as F,
    mJt as ue,
    o6 as I,
    pJt as de,
    qut as fe,
    r6 as pe
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    n as L,
    t as me
} from "./f7e0bf69-dfh33vyqyj8mpiiq.js";
import {
    a as R,
    i as he,
    n as ge,
    o as _e,
    r as ve,
    s as z,
    t as B
} from "./da39060d-dp8acic3bvz45nnt.js";

function ye() {
    return {
        ok: !0
    }
}
var be, V, H, xe, Se, Ce, U, W = e((() => {
        be = S(), P(), z(), L(), R(), F(), I(), w(), j(), k(), A(), B(), g(), o(), l(), V = n(x()), H = C(), xe = 400, Se = e => typeof e?.reason == `string` ? e.reason : typeof e?.status == `string` ? `Tool call returned status ${e.status}.` : `The launcher tool call failed before it returned a reason.`, Ce = e => {
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
                c = o === void 0 ? 0 : o,
                l;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (l = fe(), t[0] = l) : l = t[0];
            let u = l,
                d;
            t[1] === n ? d = t[2] : (d = pe(n), t[1] = n, t[2] = d);
            let f = d,
                p;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (p = s(), t[3] = p) : p = t[3];
            let {
                locale: h
            } = p, g;
            t[4] === i.widgetState ? g = t[5] : (g = Ce(i.widgetState), t[4] = i.widgetState, t[5] = g);
            let _ = g,
                v = (0, V.useRef)(null),
                ee = (0, V.useRef)(null),
                te = (0, V.useRef)(null),
                y;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (y = {
                sessionId: null,
                toolMessageId: null
            }, t[6] = y) : y = t[6];
            let b = (0, V.useRef)(y),
                x;
            t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (x = {
                sessionId: null,
                html: null
            }, t[7] = x) : x = t[7];
            let S = (0, V.useRef)(x),
                [C, ne] = (0, V.useState)(!1),
                [w, T] = (0, V.useState)(!1),
                [E, D] = (0, V.useState)(!1),
                O;
            t[8] !== _ || t[9] !== i.chatSDK.metadata ? (O = {
                ...i.chatSDK.metadata,
                widget_state: _
            }, t[8] = _, t[9] = i.chatSDK.metadata, t[10] = O) : O = t[10];
            let k = i.toolInput ?? i.chatSDK.toolInput,
                A = i.toolOutput ?? i.chatSDK.toolOutput,
                j = i.toolResponseMetadata ?? i.chatSDK.toolResponseMetadata,
                M;
            t[11] !== i.chatSDK || t[12] !== A || t[13] !== j || t[14] !== O || t[15] !== k ? (M = {
                ...i.chatSDK,
                metadata: O,
                toolInput: k,
                toolOutput: A,
                toolResponseMetadata: j
            }, t[11] = i.chatSDK, t[12] = A, t[13] = j, t[14] = O, t[15] = k, t[16] = M) : M = t[16];
            let N = M,
                P = i.status === `error` && N.toolResponseMetadata?.error_code === `tunnel_client_network_access_denied`,
                F;
            t[17] === P ? F = t[18] : (F = {
                ...P ? {
                    skipResolution: !0
                } : {},
                skipNetworkRequestWhenCacheHit: !0
            }, t[17] = P, t[18] = F);
            let I = oe(N, void 0, F),
                L = N.metadata.resolved_pineapple_uri ?? null,
                R;
            t[19] !== P || t[20] !== I.error ? (R = P || le(I.error), t[19] = P, t[20] = I.error, t[21] = R) : R = t[21];
            let z = R,
                B;
            bb0: {
                if (z) {
                    let e;
                    t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
                        message: ue.defaultMessage,
                        failurePoint: `tool_call`,
                        reason: de
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
                    t[35] === L ? p = t[36] : (p = {
                        label: `Resolved URI`,
                        value: L
                    }, t[35] = L, t[36] = p);
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
                        extraDebugItems: [e, ...ae(I.error)]
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
            t[54] !== I.hideFullScreenHeader || t[55] !== i.mode || t[56] !== U ? (W = U == null && i.mode === `fullscreen` && !I.hideFullScreenHeader && !m(), t[54] = I.hideFullScreenHeader, t[55] = i.mode, t[56] = U, t[57] = W) : W = t[57];
            let we = W,
                G;
            t[58] !== I.hideFullScreenHeader || t[59] !== i.mode || t[60] !== U ? (G = i.mode === `fullscreen` && (U != null || I.hideFullScreenHeader || m()), t[58] = I.hideFullScreenHeader, t[59] = i.mode, t[60] = U, t[61] = G) : G = t[61];
            let K = G,
                q;
            t[62] !== c || t[63] !== i.mode || t[64] !== K ? (q = i.mode === `fullscreen` ? {
                insets: {
                    top: K ? 40 : 0,
                    bottom: c,
                    left: 0,
                    right: 0
                }
            } : void 0, t[62] = c, t[63] = i.mode, t[64] = K, t[65] = q) : q = t[65];
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
            } = ge(X), Oe = i.mode === `modal` ? N.metadata.height_hint ?? I.heightHint ?? xe : null, ke = i.mode === `modal` && U == null && !E, Ae, je;
            t[70] !== z || t[71] !== f || t[72] !== i.chatSDK || t[73] !== i.id || t[74] !== i.launchAttemptId || t[75] !== i.payload || t[76] !== i.status || t[77] !== i.toolResponseMetadata || t[78] !== U ? (Ae = () => {
                if (!U || (f.cancelWidgetStateQueue$(i.id), z)) return;
                let e = `${i.id}:${U.failurePoint}:${U.reason}`;
                ee.current !== e && (ee.current = e, ie({
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
                ne(!1), T(!1)
            }, t[81] = Me) : Me = t[81];
            let Ne;
            t[82] === i.id ? Ne = t[83] : (Ne = [i.id], t[82] = i.id, t[83] = Ne), (0, V.useEffect)(Me, Ne);
            let Pe, Fe;
            t[84] !== I.html || t[85] !== I.isLoading || t[86] !== i.id ? (Pe = () => {
                let e = S.current;
                if (e.sessionId !== i.id) {
                    S.current = {
                        sessionId: i.id,
                        html: I.html
                    }, D(!1);
                    return
                }
                if (I.html == null && I.isLoading) return;
                let t = e.html !== I.html;
                S.current = {
                    sessionId: i.id,
                    html: I.html
                }, t && D(!1)
            }, Fe = [i.id, I.html, I.isLoading], t[84] = I.html, t[85] = I.isLoading, t[86] = i.id, t[87] = Pe, t[88] = Fe) : (Pe = t[87], Fe = t[88]), (0, V.useEffect)(Pe, Fe);
            let Ie, Le;
            t[89] !== f || t[90] !== i.id || t[91] !== i.widgetState || t[92] !== N.metadata.widget_state_revision || t[93] !== N.toolMessageId || t[94] !== N.widgetId || t[95] !== N.widgetParent || t[96] !== N.widgetSessionId ? (Ie = () => {
                b.current.sessionId !== i.id && (b.current = {
                    sessionId: i.id,
                    toolMessageId: null
                });
                let e = N.toolMessageId ?? null,
                    t = b.current.toolMessageId;
                b.current.toolMessageId = e, t == null && e != null && f.bindWidgetStateQueue$(i.id, e, N.metadata.widget_state_revision ?? 0, i.widgetState) === `not-pending` && i.widgetState != null && f.enqueueWidgetState$(e, i.widgetState, {
                    queueKey: i.id,
                    widgetContext: {
                        appUri: N.widgetParent,
                        widgetId: N.widgetId,
                        widgetSessionId: N.widgetSessionId,
                        source: `host`
                    }
                })
            }, Le = [f, i.id, i.widgetState, N.metadata.widget_state_revision, N.toolMessageId, N.widgetId, N.widgetParent, N.widgetSessionId], t[89] = f, t[90] = i.id, t[91] = i.widgetState, t[92] = N.metadata.widget_state_revision, t[93] = N.toolMessageId, t[94] = N.widgetId, t[95] = N.widgetParent, t[96] = N.widgetSessionId, t[97] = Ie, t[98] = Le) : (Ie = t[97], Le = t[98]), (0, V.useEffect)(Ie, Le);
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
            t[106] !== I.html || t[107] !== i.chatSDK || t[108] !== i.id || t[109] !== i.launchAttemptId || t[110] !== i.payload ? (He = () => {
                D(!0);
                let e = `${i.id}:${I.html??``}`;
                te.current !== e && (te.current = e, re({
                    host: `chatgpt`,
                    payload: i.payload,
                    session: {
                        id: i.id,
                        launchAttemptId: i.launchAttemptId,
                        chatSDK: i.chatSDK
                    }
                }))
            }, t[106] = I.html, t[107] = i.chatSDK, t[108] = i.id, t[109] = i.launchAttemptId, t[110] = i.payload, t[111] = He) : He = t[111];
            let Ue = He,
                We;
            t[112] !== Y || t[113] !== n || t[114] !== Ve || t[115] !== Ue || t[116] !== z || t[117] !== f || t[118] !== Oe || t[119] !== a || t[120] !== I || t[121] !== J || t[122] !== i.id || t[123] !== i.mode || t[124] !== i.payload || t[125] !== i.toolResponseMetadata?.status || t[126] !== N || t[127] !== U || t[128] !== Z ? (We = z ? (0, H.jsx)(`div`, {
                className: `p-6`,
                children: (0, H.jsx)(_e, {})
            }) : U ? (0, H.jsx)(se, {
                error: U,
                payload: i.payload,
                sessionId: i.id
            }) : (0, H.jsx)(me, {
                onReady: Ue,
                onClose: a,
                onCheckoutComplete: Ve,
                onCanGoBack: ne,
                onCanGoForward: T,
                onSetOpenInAppUrl: Z,
                onUpdateWidgetState: (e, t, n) => {
                    u.setWidgetState$(i.id, t);
                    let r = n?.waitForPersistence === !0;
                    return f.enqueueWidgetState$(N.toolMessageId ?? null, t, {
                        queueKey: i.id,
                        waitForPersistence: r,
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
                params: i.payload.viewParams,
                displayMode: i.mode,
                forceFullHeight: i.mode === `fullscreen`,
                heightHint: Oe,
                safeArea: J,
                widgetRef: v,
                conversation: n,
                chatSDK: N,
                isToolInputAuthorized: i.toolResponseMetadata?.status === `success`,
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
            }), t[112] = Y, t[113] = n, t[114] = Ve, t[115] = Ue, t[116] = z, t[117] = f, t[118] = Oe, t[119] = a, t[120] = I, t[121] = J, t[122] = i.id, t[123] = i.mode, t[124] = i.payload, t[125] = i.toolResponseMetadata?.status, t[126] = N, t[127] = U, t[128] = Z, t[129] = We) : We = t[129];
            let Q = We;
            if (i.mode === `fullscreen`) {
                let e;
                t[130] !== C || t[131] !== w || t[132] !== a || t[133] !== Te || t[134] !== I.logoUrl || t[135] !== I.name || t[136] !== Ee || t[137] !== we || t[138] !== De ? (e = we && (0, H.jsx)(ve, {
                    logo: I.logoUrl,
                    hideOpenInAppButton: Ee,
                    onClickBack: () => v.current?.navigate({
                        delta: -1
                    }),
                    onClickClose: () => a(`user_dismissed`),
                    onClickForward: () => v.current?.navigate({
                        delta: 1
                    }),
                    canGoBack: C,
                    canGoForward: w,
                    title: I.name ?? ``,
                    widgetDisplayName: I.name ?? ``,
                    widgetDomain: De ?? null,
                    onClickOpenInApp: Te
                }), t[130] = C, t[131] = w, t[132] = a, t[133] = Te, t[134] = I.logoUrl, t[135] = I.name, t[136] = Ee, t[137] = we, t[138] = De, t[139] = e) : e = t[139];
                let n;
                t[140] !== C || t[141] !== w || t[142] !== a || t[143] !== K ? (n = K && (0, H.jsx)(he, {
                    isNavOnly: !0,
                    onClickBack: () => v.current?.navigate({
                        delta: -1
                    }),
                    onClickForward: () => v.current?.navigate({
                        delta: 1
                    }),
                    onClickClose: () => a(`user_dismissed`),
                    canGoBack: C,
                    canGoForward: w
                }), t[140] = C, t[141] = w, t[142] = a, t[143] = K, t[144] = n) : n = t[144];
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
                children: (0, H.jsx)(r, {
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
    q = S(), E(), i(), y(), N(), T(), W(), k(), _(), a(), te(), p(), J = n(x()), b(), Y = C(), X = `pointer-events-none absolute start-0 end-0 top-0 z-10 min-h-0 border-0 p-2 [&>button]:pointer-events-auto`, Te = ({
        conversation: e,
        toolMessageId: t
    }) => {
        t != null && (M.set(e, void 0), requestAnimationFrame(() => {
            M.set(e, t)
        }))
    }, Z = e => {
        "use forget";
        let t = (0, q.c)(46),
            {
                conversation: n
            } = e,
            r;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = fe(), t[0] = r) : r = t[0];
        let i = r,
            a = ne(),
            o = c(ee),
            s = c(h),
            l = f(),
            p;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (p = () => i.activeSession$(), t[1] = p) : p = t[1];
        let m = c(p),
            g = (0, J.useRef)(a.pathname),
            [_, te] = (0, J.useState)(null),
            y;
        t[2] !== a.pathname || t[3] !== m ? (y = () => {
            let e = g.current;
            g.current = a.pathname, m && e !== a.pathname && (D({
                host: `chatgpt`,
                payload: m.payload,
                session: m,
                closeReason: `navigation_changed`
            }), i.close$())
        }, t[2] = a.pathname, t[3] = m, t[4] = y) : y = t[4];
        let b;
        if (t[5] !== n.id || t[6] !== a.pathname || t[7] !== m ? (b = [n.id, i, a.pathname, m], t[5] = n.id, t[6] = a.pathname, t[7] = m, t[8] = b) : b = t[8], (0, J.useEffect)(y, b), !m) return null;
        let x;
        t[9] !== n || t[10] !== m ? (x = e => {
            D({
                host: `chatgpt`,
                payload: m.payload,
                session: m,
                closeReason: e
            }), i.close$(), Te({
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
            let e = s && _?.sessionId === m.id ? _.height : 0,
                r;
            t[16] !== n || t[17] !== E || t[18] !== m || t[19] !== e ? (r = (0, Y.jsx)(U, {
                conversation: n,
                session: m,
                onClose: E,
                safeAreaInsetBottom: e
            }), t[16] = n, t[17] = E, t[18] = m, t[19] = e, t[20] = r) : r = t[20];
            let i = r;
            if (!s) {
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
            let a = l ? `var(--sidebar-width)` : `var(--sidebar-rail-width)`,
                o;
            t[25] === a ? o = t[26] : (o = {
                insetInlineStart: a
            }, t[25] = a, t[26] = o);
            let c;
            t[27] === m.id ? c = t[28] : (c = v({
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
            let d;
            t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Y.jsx)(O.Outlet, {}), t[29] = d) : d = t[29];
            let f;
            t[30] === c ? f = t[31] : (f = (0, Y.jsx)(`div`, {
                className: `pointer-events-none absolute inset-x-0 bottom-0 z-60`,
                ref: c,
                children: d
            }), t[30] = c, t[31] = f);
            let p;
            return t[32] !== i || t[33] !== o || t[34] !== f ? (p = (0, Y.jsxs)(`div`, {
                className: `bg-token-main-surface-primary fixed inset-0 z-50`,
                style: o,
                children: [i, f]
            }), t[32] = i, t[33] = o, t[34] = f, t[35] = p) : p = t[35], p
        }
        let re = !o,
            k;
        t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, Y.jsx)(`span`, {
            className: `sr-only`,
            children: `Widget modal`
        }), t[36] = k) : k = t[36];
        let A;
        t[37] === Symbol.for(`react.memo_cache_sentinel`) ? (A = (0, Y.jsx)(d, {
            onPointerDown: G,
            onClick: K,
            iconSize: `lg`,
            className: `text-token-text-primary bg-token-main-surface-primary/60! hover:bg-token-main-surface-primary/70! keyboard-focused:bg-token-main-surface-primary/70! pointer-events-auto ms-auto backdrop-blur-xl backdrop-filter transition-colors`
        }), t[37] = A) : A = t[37];
        let j;
        t[38] !== n || t[39] !== E || t[40] !== m ? (j = (0, Y.jsx)(U, {
            conversation: n,
            session: m,
            onClose: E
        }), t[38] = n, t[39] = E, t[40] = m, t[41] = j) : j = t[41];
        let M;
        return t[42] !== w || t[43] !== j || t[44] !== re ? (M = (0, Y.jsx)(u, {
            isOpen: !0,
            onClose: w,
            isBottomSheet: re,
            size: `custom`,
            title: k,
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
        }), t[42] = w, t[43] = j, t[44] = re, t[45] = M) : M = t[45], M
    }
}));
export {
    we as n, Ee as r, Z as t
};
//# sourceMappingURL=4740ae63-f8leimewjn9ei6sf.js.map