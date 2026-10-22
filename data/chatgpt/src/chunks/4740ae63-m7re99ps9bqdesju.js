import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as r,
    Aw as i,
    J5 as a,
    Ko as o,
    Mw as s,
    Nnt as c,
    Ow as l,
    Ro as u,
    Rz as d,
    aW as f,
    ast as p,
    dq as m,
    iW as h,
    jw as g,
    mnt as _,
    ost as v,
    rq as ee,
    uq as te,
    zz as y
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    At as b,
    Bn as x,
    Q as S,
    Vn as C,
    wn as w
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    CJt as T,
    EJt as E,
    Fut as D,
    Iut as O,
    Jtn as k,
    Kut as ne,
    Lut as re,
    Mut as A,
    Nut as j,
    Put as M,
    Qut as N,
    TJt as ie,
    Ud as ae,
    Wd as oe,
    Xut as se,
    Zut as ce,
    d6 as le,
    f6 as P,
    kut as F,
    l6 as ue,
    qtn as I,
    qut as L,
    u6 as R,
    wJt as de
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    n as z,
    t as fe
} from "./f7e0bf69-or88np3h8mtxgafk.js";
import {
    a as B,
    i as pe,
    n as me,
    o as he,
    r as ge,
    s as V,
    t as H
} from "./da39060d-cafrblu12ngx9xql.js";

function _e() {
    return {
        ok: !0
    }
}
var ve, U, W, ye, be, xe, G, Se = e((() => {
        ve = w(), ie(), V(), z(), B(), R(), P(), N(), A(), L(), O(), H(), y(), _(), v(), U = n(C()), W = x(), ye = 400, be = e => typeof e?.reason == `string` ? e.reason : typeof e?.status == `string` ? `Tool call returned status ${e.status}.` : `The launcher tool call failed before it returned a reason.`, xe = e => {
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
                    session: r,
                    onClose: i,
                    safeAreaInsetBottom: a
                } = e,
                o = a === void 0 ? 0 : a,
                s;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = ne(), t[0] = s) : s = t[0];
            let l = s,
                u;
            t[1] === n ? u = t[2] : (u = ue(n), t[1] = n, t[2] = u);
            let f = u,
                m;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (m = p(), t[3] = m) : m = t[3];
            let {
                locale: h
            } = m, g;
            t[4] === r.widgetState ? g = t[5] : (g = xe(r.widgetState), t[4] = r.widgetState, t[5] = g);
            let _ = g,
                v = (0, U.useRef)(null),
                ee = (0, U.useRef)(null),
                te = (0, U.useRef)(null),
                y;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (y = {
                sessionId: null,
                toolMessageId: null
            }, t[6] = y) : y = t[6];
            let b = (0, U.useRef)(y),
                x;
            t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (x = {
                sessionId: null,
                html: null
            }, t[7] = x) : x = t[7];
            let S = (0, U.useRef)(x),
                [C, w] = (0, U.useState)(!1),
                [O, k] = (0, U.useState)(!1),
                [A, M] = (0, U.useState)(!1),
                N;
            t[8] !== _ || t[9] !== r.chatSDK.metadata ? (N = {
                ...r.chatSDK.metadata,
                widget_state: _
            }, t[8] = _, t[9] = r.chatSDK.metadata, t[10] = N) : N = t[10];
            let ie = r.toolInput ?? r.chatSDK.toolInput,
                ae = r.toolOutput ?? r.chatSDK.toolOutput,
                oe = r.toolResponseMetadata ?? r.chatSDK.toolResponseMetadata,
                P;
            t[11] !== r.chatSDK || t[12] !== ae || t[13] !== oe || t[14] !== N || t[15] !== ie ? (P = {
                ...r.chatSDK,
                metadata: N,
                toolInput: ie,
                toolOutput: ae,
                toolResponseMetadata: oe
            }, t[11] = r.chatSDK, t[12] = ae, t[13] = oe, t[14] = N, t[15] = ie, t[16] = P) : P = t[16];
            let F = P,
                I = r.status === `error` && F.toolResponseMetadata?.error_code === `tunnel_client_network_access_denied`,
                L;
            t[17] === I ? L = t[18] : (L = {
                ...I ? {
                    skipResolution: !0
                } : {},
                skipNetworkRequestWhenCacheHit: !0
            }, t[17] = I, t[18] = L);
            let R = re(F, void 0, L),
                z = F.metadata.resolved_pineapple_uri ?? null,
                B;
            t[19] !== I || t[20] !== R.error ? (B = I || E(R.error), t[19] = I, t[20] = R.error, t[21] = B) : B = t[21];
            let V = B,
                H;
            bb0: {
                if (V) {
                    let e;
                    t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
                        message: de.defaultMessage,
                        failurePoint: `tool_call`,
                        reason: T
                    }, t[22] = e) : e = t[22], H = e;
                    break bb0
                }
                if (r.status === `error`) {
                    let e;
                    t[23] === r.toolResponseMetadata ? e = t[24] : (e = be(r.toolResponseMetadata), t[23] = r.toolResponseMetadata, t[24] = e);
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
                    t[35] === z ? p = t[36] : (p = {
                        label: `Resolved URI`,
                        value: z
                    }, t[35] = z, t[36] = p);
                    let m;
                    t[37] !== i || t[38] !== o || t[39] !== c || t[40] !== u || t[41] !== f || t[42] !== p ? (m = [i, o, c, u, f, p], t[37] = i, t[38] = o, t[39] = c, t[40] = u, t[41] = f, t[42] = p, t[43] = m) : m = t[43];
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
            t[54] !== R.hideFullScreenHeader || t[55] !== r.mode || t[56] !== G ? (Se = G == null && r.mode === `fullscreen` && !R.hideFullScreenHeader && !c(), t[54] = R.hideFullScreenHeader, t[55] = r.mode, t[56] = G, t[57] = Se) : Se = t[57];
            let Ce = Se,
                we;
            t[58] !== R.hideFullScreenHeader || t[59] !== r.mode || t[60] !== G ? (we = r.mode === `fullscreen` && (G != null || R.hideFullScreenHeader || c()), t[58] = R.hideFullScreenHeader, t[59] = r.mode, t[60] = G, t[61] = we) : we = t[61];
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
                Y = F.metadata.attribution_id ?? F.widgetParent,
                X;
            t[66] !== R.csp || t[67] !== R.domain || t[68] !== F.widgetId ? (X = {
                csp: R.csp,
                domain: R.domain,
                widgetId: F.widgetId,
                widgetRef: v
            }, t[66] = R.csp, t[67] = R.domain, t[68] = F.widgetId, t[69] = X) : X = t[69];
            let {
                openInApp: Te,
                setOpenInAppUrl: Z,
                shouldHideOpenInAppButton: Ee,
                widgetRedirectUrl: De
            } = me(X), Oe = r.mode === `modal` ? F.metadata.height_hint ?? R.heightHint ?? ye : null, ke = r.mode === `modal` && G == null && !A, Ae, je;
            t[70] !== V || t[71] !== f || t[72] !== r.chatSDK || t[73] !== r.id || t[74] !== r.launchAttemptId || t[75] !== r.payload || t[76] !== r.status || t[77] !== r.toolResponseMetadata || t[78] !== G ? (Ae = () => {
                if (!G || (f.cancelWidgetStateQueue$(r.id), V)) return;
                let e = `${r.id}:${G.failurePoint}:${G.reason}`;
                ee.current !== e && (ee.current = e, j({
                    host: `chatgpt`,
                    payload: r.payload,
                    session: {
                        id: r.id,
                        launchAttemptId: r.launchAttemptId,
                        status: r.status,
                        chatSDK: r.chatSDK
                    },
                    error: G,
                    toolResponseMetadata: r.toolResponseMetadata
                }))
            }, je = [V, r.id, r.launchAttemptId, r.payload, r.status, r.chatSDK, r.toolResponseMetadata, G, f], t[70] = V, t[71] = f, t[72] = r.chatSDK, t[73] = r.id, t[74] = r.launchAttemptId, t[75] = r.payload, t[76] = r.status, t[77] = r.toolResponseMetadata, t[78] = G, t[79] = Ae, t[80] = je) : (Ae = t[79], je = t[80]), (0, U.useEffect)(Ae, je);
            let Me;
            t[81] === Symbol.for(`react.memo_cache_sentinel`) ? (Me = () => {
                w(!1), k(!1)
            }, t[81] = Me) : Me = t[81];
            let Ne;
            t[82] === r.id ? Ne = t[83] : (Ne = [r.id], t[82] = r.id, t[83] = Ne), (0, U.useEffect)(Me, Ne);
            let Pe, Fe;
            t[84] !== R.html || t[85] !== R.isLoading || t[86] !== r.id ? (Pe = () => {
                let e = S.current;
                if (e.sessionId !== r.id) {
                    S.current = {
                        sessionId: r.id,
                        html: R.html
                    }, M(!1);
                    return
                }
                if (R.html == null && R.isLoading) return;
                let t = e.html !== R.html;
                S.current = {
                    sessionId: r.id,
                    html: R.html
                }, t && M(!1)
            }, Fe = [r.id, R.html, R.isLoading], t[84] = R.html, t[85] = R.isLoading, t[86] = r.id, t[87] = Pe, t[88] = Fe) : (Pe = t[87], Fe = t[88]), (0, U.useEffect)(Pe, Fe);
            let Ie, Le;
            t[89] !== f || t[90] !== r.id || t[91] !== r.widgetState || t[92] !== F.metadata.widget_state_revision || t[93] !== F.toolMessageId || t[94] !== F.widgetId || t[95] !== F.widgetParent || t[96] !== F.widgetSessionId ? (Ie = () => {
                b.current.sessionId !== r.id && (b.current = {
                    sessionId: r.id,
                    toolMessageId: null
                });
                let e = F.toolMessageId ?? null,
                    t = b.current.toolMessageId;
                b.current.toolMessageId = e, t == null && e != null && f.bindWidgetStateQueue$(r.id, e, F.metadata.widget_state_revision ?? 0, r.widgetState) === `not-pending` && r.widgetState != null && f.enqueueWidgetState$(e, r.widgetState, {
                    queueKey: r.id,
                    widgetContext: {
                        appUri: F.widgetParent,
                        widgetId: F.widgetId,
                        widgetSessionId: F.widgetSessionId,
                        source: `host`
                    }
                })
            }, Le = [f, r.id, r.widgetState, F.metadata.widget_state_revision, F.toolMessageId, F.widgetId, F.widgetParent, F.widgetSessionId], t[89] = f, t[90] = r.id, t[91] = r.widgetState, t[92] = F.metadata.widget_state_revision, t[93] = F.toolMessageId, t[94] = F.widgetId, t[95] = F.widgetParent, t[96] = F.widgetSessionId, t[97] = Ie, t[98] = Le) : (Ie = t[97], Le = t[98]), (0, U.useEffect)(Ie, Le);
            let Re, ze;
            t[99] !== f || t[100] !== r.id ? (Re = () => () => {
                f.cancelWidgetStateQueue$(r.id)
            }, ze = [f, r.id], t[99] = f, t[100] = r.id, t[101] = Re, t[102] = ze) : (Re = t[101], ze = t[102]), (0, U.useEffect)(Re, ze);
            let Be;
            t[103] !== i || t[104] !== r.id ? (Be = e => {
                l.setLastCheckoutRequestId$(r.id, e.id), i(`checkout_completed`)
            }, t[103] = i, t[104] = r.id, t[105] = Be) : Be = t[105];
            let Ve = Be,
                He;
            t[106] !== R.html || t[107] !== r.chatSDK || t[108] !== r.id || t[109] !== r.launchAttemptId || t[110] !== r.payload ? (He = () => {
                M(!0);
                let e = `${r.id}:${R.html??``}`;
                te.current !== e && (te.current = e, D({
                    host: `chatgpt`,
                    payload: r.payload,
                    session: {
                        id: r.id,
                        launchAttemptId: r.launchAttemptId,
                        chatSDK: r.chatSDK
                    }
                }))
            }, t[106] = R.html, t[107] = r.chatSDK, t[108] = r.id, t[109] = r.launchAttemptId, t[110] = r.payload, t[111] = He) : He = t[111];
            let Ue = He,
                We;
            t[112] !== Y || t[113] !== n || t[114] !== Ve || t[115] !== Ue || t[116] !== V || t[117] !== f || t[118] !== Oe || t[119] !== i || t[120] !== R || t[121] !== J || t[122] !== r.id || t[123] !== r.mode || t[124] !== r.payload || t[125] !== r.toolResponseMetadata?.status || t[126] !== F || t[127] !== G || t[128] !== Z ? (We = V ? (0, W.jsx)(`div`, {
                className: `p-6`,
                children: (0, W.jsx)(he, {})
            }) : G ? (0, W.jsx)(se, {
                error: G,
                payload: r.payload,
                sessionId: r.id
            }) : (0, W.jsx)(fe, {
                onReady: Ue,
                onClose: i,
                onCheckoutComplete: Ve,
                onCanGoBack: w,
                onCanGoForward: k,
                onSetOpenInAppUrl: Z,
                onUpdateWidgetState: (e, t, n) => {
                    l.setWidgetState$(r.id, t);
                    let i = n?.waitForPersistence === !0;
                    return f.enqueueWidgetState$(F.toolMessageId ?? null, t, {
                        queueKey: r.id,
                        waitForPersistence: i,
                        hydratedRevision: F.metadata.widget_state_revision ?? 0,
                        widgetContext: {
                            appUri: F.widgetParent,
                            widgetId: F.widgetId,
                            widgetSessionId: F.widgetSessionId,
                            source: `host`
                        }
                    }).then(_e, le)
                },
                title: R.name ?? ``,
                domain: R.domain,
                params: r.payload.viewParams,
                displayMode: r.mode,
                forceFullHeight: r.mode === `fullscreen`,
                heightHint: Oe,
                safeArea: J,
                widgetRef: v,
                conversation: n,
                chatSDK: F,
                isToolInputAuthorized: r.toolResponseMetadata?.status === `success`,
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
                locale: h
            }), t[112] = Y, t[113] = n, t[114] = Ve, t[115] = Ue, t[116] = V, t[117] = f, t[118] = Oe, t[119] = i, t[120] = R, t[121] = J, t[122] = r.id, t[123] = r.mode, t[124] = r.payload, t[125] = r.toolResponseMetadata?.status, t[126] = F, t[127] = G, t[128] = Z, t[129] = We) : We = t[129];
            let Q = We;
            if (r.mode === `fullscreen`) {
                let e;
                t[130] !== C || t[131] !== O || t[132] !== i || t[133] !== Te || t[134] !== R.logoUrl || t[135] !== R.name || t[136] !== Ee || t[137] !== Ce || t[138] !== De ? (e = Ce && (0, W.jsx)(ge, {
                    logo: R.logoUrl,
                    hideOpenInAppButton: Ee,
                    onClickBack: () => v.current?.navigate({
                        delta: -1
                    }),
                    onClickClose: () => i(`user_dismissed`),
                    onClickForward: () => v.current?.navigate({
                        delta: 1
                    }),
                    canGoBack: C,
                    canGoForward: O,
                    title: R.name ?? ``,
                    widgetDisplayName: R.name ?? ``,
                    widgetDomain: De ?? null,
                    onClickOpenInApp: Te
                }), t[130] = C, t[131] = O, t[132] = i, t[133] = Te, t[134] = R.logoUrl, t[135] = R.name, t[136] = Ee, t[137] = Ce, t[138] = De, t[139] = e) : e = t[139];
                let n;
                t[140] !== C || t[141] !== O || t[142] !== i || t[143] !== K ? (n = K && (0, W.jsx)(pe, {
                    isNavOnly: !0,
                    onClickBack: () => v.current?.navigate({
                        delta: -1
                    }),
                    onClickForward: () => v.current?.navigate({
                        delta: 1
                    }),
                    onClickClose: () => i(`user_dismissed`),
                    canGoBack: C,
                    canGoForward: O
                }), t[140] = C, t[141] = O, t[142] = i, t[143] = K, t[144] = n) : n = t[144];
                let r;
                t[145] === Q ? r = t[146] : (r = (0, W.jsx)(`div`, {
                    className: `relative min-h-0 flex-1`,
                    children: Q
                }), t[145] = Q, t[146] = r);
                let a;
                return t[147] !== e || t[148] !== n || t[149] !== r ? (a = (0, W.jsxs)(`div`, {
                    className: `flex h-full min-h-0 flex-col`,
                    children: [e, n, r]
                }), t[147] = e, t[148] = n, t[149] = r, t[150] = a) : a = t[150], a
            }
            let $;
            t[151] === ke ? $ = t[152] : ($ = ke && (0, W.jsx)(`div`, {
                "data-testid": `ecosystem-launcher-loading-state`,
                className: `bg-token-bg-primary/80 pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-2xl backdrop-blur-xs sm:rounded-3xl`,
                children: (0, W.jsx)(d, {
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
    q = w(), k(), s(), i(), oe(), F(), Se(), L(), r(), u(), f(), ee(), J = n(C()), S(), Y = x(), X = `pointer-events-none absolute start-0 end-0 top-0 z-10 min-h-0 border-0 p-2 [&>button]:pointer-events-auto`, Te = ({
        conversation: e,
        toolMessageId: t
    }) => {
        t != null && (I.set(e, void 0), requestAnimationFrame(() => {
            I.set(e, t)
        }))
    }, Z = e => {
        "use forget";
        let t = (0, q.c)(46),
            {
                conversation: n
            } = e,
            r;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = ne(), t[0] = r) : r = t[0];
        let i = r,
            s = b(),
            c = a(m),
            u = a(te),
            d = o(),
            f;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (f = () => i.activeSession$(), t[1] = f) : f = t[1];
        let p = a(f),
            _ = (0, J.useRef)(s.pathname),
            [v, ee] = (0, J.useState)(null),
            y;
        t[2] !== s.pathname || t[3] !== p ? (y = () => {
            let e = _.current;
            _.current = s.pathname, p && e !== s.pathname && (M({
                host: `chatgpt`,
                payload: p.payload,
                session: p,
                closeReason: `navigation_changed`
            }), i.close$())
        }, t[2] = s.pathname, t[3] = p, t[4] = y) : y = t[4];
        let x;
        if (t[5] !== n.id || t[6] !== s.pathname || t[7] !== p ? (x = [n.id, i, s.pathname, p], t[5] = n.id, t[6] = s.pathname, t[7] = p, t[8] = x) : x = t[8], (0, J.useEffect)(y, x), !p) return null;
        let S;
        t[9] !== n || t[10] !== p ? (S = e => {
            M({
                host: `chatgpt`,
                payload: p.payload,
                session: p,
                closeReason: e
            }), i.close$(), Te({
                conversation: n,
                toolMessageId: p.chatSDK.toolMessageId ?? null
            })
        }, t[9] = n, t[10] = p, t[11] = S) : S = t[11];
        let C = S,
            w;
        if (t[12] !== C) {
            let e = () => {
                C(`user_dismissed`)
            };
            w = t => {
                e()
            }, t[12] = C, t[13] = w
        } else w = t[13];
        let T = w,
            E;
        t[14] === C ? E = t[15] : (E = e => {
            C(e ?? `user_dismissed`)
        }, t[14] = C, t[15] = E);
        let D = E;
        if (p.mode === `fullscreen`) {
            let e = u && v?.sessionId === p.id ? v.height : 0,
                r;
            t[16] !== n || t[17] !== D || t[18] !== p || t[19] !== e ? (r = (0, Y.jsx)(G, {
                conversation: n,
                session: p,
                onClose: D,
                safeAreaInsetBottom: e
            }), t[16] = n, t[17] = D, t[18] = p, t[19] = e, t[20] = r) : r = t[20];
            let i = r;
            if (!u) {
                let e;
                t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(`span`, {
                    className: `sr-only`,
                    children: `Widget modal`
                }), t[21] = e) : e = t[21];
                let n;
                return t[22] !== i || t[23] !== T ? (n = (0, Y.jsx)(l, {
                    isOpen: !0,
                    onClose: T,
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
                }), t[22] = i, t[23] = T, t[24] = n) : n = t[24], n
            }
            let a = d ? `var(--sidebar-width)` : `var(--sidebar-rail-width)`,
                o;
            t[25] === a ? o = t[26] : (o = {
                insetInlineStart: a
            }, t[25] = a, t[26] = o);
            let s;
            t[27] === p.id ? s = t[28] : (s = h({
                axis: `height`,
                onChange: e => {
                    let {
                        height: t
                    } = e;
                    return ee({
                        sessionId: p.id,
                        height: t
                    })
                }
            }), t[27] = p.id, t[28] = s);
            let c;
            t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Y.jsx)(ae.Outlet, {}), t[29] = c) : c = t[29];
            let f;
            t[30] === s ? f = t[31] : (f = (0, Y.jsx)(`div`, {
                className: `pointer-events-none absolute inset-x-0 bottom-0 z-60`,
                ref: s,
                children: c
            }), t[30] = s, t[31] = f);
            let m;
            return t[32] !== i || t[33] !== o || t[34] !== f ? (m = (0, Y.jsxs)(`div`, {
                className: `bg-token-main-surface-primary fixed inset-0 z-50`,
                style: o,
                children: [i, f]
            }), t[32] = i, t[33] = o, t[34] = f, t[35] = m) : m = t[35], m
        }
        let O = !c,
            k;
        t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, Y.jsx)(`span`, {
            className: `sr-only`,
            children: `Widget modal`
        }), t[36] = k) : k = t[36];
        let re;
        t[37] === Symbol.for(`react.memo_cache_sentinel`) ? (re = (0, Y.jsx)(g, {
            onPointerDown: we,
            onClick: K,
            iconSize: `lg`,
            className: `text-token-text-primary bg-token-main-surface-primary/60! hover:bg-token-main-surface-primary/70! keyboard-focused:bg-token-main-surface-primary/70! pointer-events-auto ms-auto backdrop-blur-xl backdrop-filter transition-colors`
        }), t[37] = re) : re = t[37];
        let A;
        t[38] !== n || t[39] !== D || t[40] !== p ? (A = (0, Y.jsx)(G, {
            conversation: n,
            session: p,
            onClose: D
        }), t[38] = n, t[39] = D, t[40] = p, t[41] = A) : A = t[41];
        let j;
        return t[42] !== T || t[43] !== A || t[44] !== O ? (j = (0, Y.jsx)(l, {
            isOpen: !0,
            onClose: T,
            isBottomSheet: O,
            size: `custom`,
            title: k,
            noPadding: !0,
            isScrollable: !1,
            showCloseButton: !0,
            closeButton: re,
            headerClassName: X,
            handle: !1,
            contentSize: `fill`,
            className: `max-h-[min(90vh,900px)] w-full max-w-xl lg:max-w-3xl`,
            contentClassName: `flex min-h-0 flex-col p-0`,
            testId: `modal-ecosystem-widget-launch`,
            children: A
        }), t[42] = T, t[43] = A, t[44] = O, t[45] = j) : j = t[45], j
    }
}));
export {
    Ce as n, Ee as r, Z as t
};
//# sourceMappingURL=4740ae63-m7re99ps9bqdesju.js.map