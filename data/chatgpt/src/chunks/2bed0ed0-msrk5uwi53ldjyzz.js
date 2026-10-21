import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as n,
    Bat as r,
    LN as i,
    Pat as a,
    RN as o,
    T8 as s,
    Wat as c,
    g5 as ee,
    g8 as l,
    grt as u,
    hW as d,
    hrt as f,
    mrt as p,
    pW as te,
    vN as m,
    w8 as h,
    yN as g,
    zU as _
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Ln as v,
    N as y,
    Rn as b,
    Vn as x,
    s as S,
    wn as C,
    zn as w
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Bn as T,
    DW as E,
    EW as ne,
    Ikt as D,
    LAt as O,
    QBn as k,
    Qkt as A,
    Ykt as re,
    _At as j,
    fW as M,
    gAt as N,
    hW as ie,
    iTn as P,
    jAt as ae,
    mW as oe,
    nAt as se,
    pAt as F,
    rTn as I,
    yAt as L
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    as as R,
    is as z
} from "./8b34dbc2-ba6wt3zxvh7jce7p.js";
import {
    a as ce,
    i as le,
    r as B,
    s as ue
} from "./6601bf01-beztsd2q4zzq3okk.js";
import {
    a as V,
    n as H,
    r as de
} from "./4f866508-ffl361mhp9york96.js";
import {
    n as fe,
    t as U
} from "./8be37a3d-lpzu7gt61wcbmcms.js";

function W(e, t) {
    let n = e.directConnectMetrics;
    if (!n || n.recordedStages.has(t)) return;
    n.recordedStages.add(t);
    let r = {
        stage: t
    };
    try {
        f.count(u.ECOSYSTEM, `ledger.direct_connect.stage`, r), t !== `started` && f.hist(u.ECOSYSTEM, `ledger.direct_connect.stage_latency_ms`, r, Math.max(0, Math.round(performance.now() - n.startedAtMs)))
    } catch {}
}

function G(e) {
    return Q(e) > 0
}

function K(e) {
    "use forget";
    let t = (0, q.c)(38),
        n;
    t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
    let {
        conversation: r,
        connectorLinkProductSku: i
    } = n, s = i === void 0 ? I.CONNECTOR_SETTING : i, l = w(), u = y(), d;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (d = _(), t[2] = d) : d = t[2];
    let f = d,
        p = (0, J.useRef)(null),
        m = (0, J.useRef)(!1),
        [h, v] = (0, J.useState)(null),
        b = h != null,
        x;
    t[3] === s ? x = t[4] : (x = {
        productSku: s
    }, t[3] = s, t[4] = x);
    let S = R(x),
        C;
    t[5] === l ? C = t[6] : (C = e => {
        if (m.current) {
            let t = e instanceof a && e.isClientError() ? c(e)?.trim() : void 0;
            f.warning(t || l.formatMessage(X.connectionFailedToast))
        }
    }, t[5] = l, t[6] = C);
    let T = g(C),
        E;
    t[7] !== l || t[8] !== u ? (E = () => {
        f.success(l.formatMessage(X.repairSuccessToast)), u.invalidateQueries({
            queryKey: D,
            refetchType: `all`
        }).catch(be)
    }, t[7] = l, t[8] = u, t[9] = E) : E = t[9];
    let O = E,
        A;
    t[10] !== r || t[11] !== S || t[12] !== O || t[13] !== l || t[14] !== u || t[15] !== T ? (A = async (e, t) => {
        let {
            accountLinkingContext: n,
            autoStartOauthLinkId: i,
            onConnectionConfirmed: a,
            onSuccess: o,
            prepareConnectorLink: s
        } = e ?? {}, c = () => p.current === t && !t.signal.aborted, d = !1, h, g, _, y = !1, b = !1, x = !1, C, w = () => {
            C != null && (window.clearTimeout(C), C = void 0)
        }, E = () => {
            w(), !(!b || !r) && (b = !1, ee(() => Q.set(r, ye)))
        }, k = () => {
            b || !r || !m.current || !g || i || (b = !0, ee(() => Q.set(r, ve)), x || (x = !0, g.finally(E)))
        }, A = () => {
            d = !0, W(t, `connection_confirmed`), w(), m.current && a?.(), h?.()
        }, M, N, P = new AbortController, F = async () => {
            te(l.formatMessage(oe));
            let e = t.linkingAttempt.context;
            L(e, `plaid_link_requested`);
            try {
                let n = await se({
                    ...i ? {
                        link_id: i
                    } : {},
                    flow_id: e.flowId,
                    native_android: !1,
                    native_ios: !1
                }, t.signal);
                return typeof n.token == `string` && L(e, `plaid_token_ready`), n
            } catch (n) {
                let r = n;
                throw t.signal.aborted ? t.didTimeOut || t.linkingAttempt.recordCancellation() : L(e, `plaid_link_request_failed`), r
            }
        }, I = (r, a) => {
            if (typeof r.token != `string`) throw Error(`Ledger OAuth response did not include a Link token`);
            return {
                ...n ? {
                    accountLinkingContext: n
                } : {},
                trackingContext: t.linkingAttempt.context,
                canOpen: async () => await a && c(),
                beforeOpen: async () => {
                    if (n) return e?.beforeOpen && !await e.beforeOpen() ? !1 : (W(t, `link_ready`), !0);
                    let a = i == null && u.getQueryData(D) != null ? await V(u) : void 0;
                    return e?.beforeOpen && !await e.beforeOpen() ? !1 : (W(t, `link_ready`), _ = () => fe(r.oauth_state_id, u, {
                        onConnectionConfirmed: () => {
                            d || A()
                        },
                        onTimedOut: () => {
                            y = !0
                        },
                        signal: P.signal,
                        linksBeforeLinking: a
                    }).catch(_e), g = _(), !0)
                },
                linkToken: r.token,
                onOpen: () => {
                    t.hasOpenedPlaid = !0, L(t.linkingAttempt.context, `plaid_open`), v(null)
                },
                onReady: () => L(t.linkingAttempt.context, `plaid_sdk_ready`),
                oauthStateId: r.oauth_state_id,
                signal: t.signal,
                startupTimeoutSignal: t.startupTimeoutController.signal
            }
        };
        if (s) {
            let e = await s(c, t.signal, async () => {
                v({
                    oauthLinkId: i
                }), M = await F(), c() && (N = await ue(I(M, Promise.resolve(!0))))
            }, t.linkingAttempt.context);
            if (!c() || !e) return;
            v({
                oauthLinkId: i
            })
        }
        let R = M ?? await F();
        if (!c()) return;
        if (typeof R.token != `string`) throw Error(`Ledger OAuth response did not include a Link token`);
        let z = s ? Promise.resolve(!0) : ne(t.linkingAttempt.context, e => S(ae, {
            ...e,
            signal: t.signal
        })).then(ge);
        z.catch(he);
        let B = N ? await N.open() : await ce(I(R, z));
        if (B.type === `exited` && t.signal.aborted) {
            P.abort();
            return
        }
        if (le(B)) throw L(t.linkingAttempt.context, `link_failed`), P.abort(), Error(`Plaid Link failed to launch`);
        if (B.type === `exited`) {
            if (L(t.linkingAttempt.context, `plaid_exit`), (B.plaidExitStatus === `failed` || B.plaidErrorCode) && B.plaidErrorCode !== `launch_cancelled` && B.plaidErrorCode !== `presentation_dismissed` ? L(t.linkingAttempt.context, `link_failed`) : B.plaidErrorCode !== `presentation_dismissed` && t.linkingAttempt.recordCancellation(), e?.onExit?.(), n) {
                if (P.abort(), B.plaidErrorCode && B.plaidErrorCode !== `launch_cancelled` && B.plaidErrorCode !== `presentation_dismissed`) throw Error(`Plaid Link exited with an error`);
                return
            }
            if (B.plaidErrorCode === `launch_cancelled`) {
                P.abort();
                return
            }
            return h = k, d ? k() : B.plaidErrorCode === `presentation_dismissed` && (k(), b && (C = window.setTimeout(() => {
                C = void 0, d || E()
            }, xe))), {
                confirmation: g?.then(e => {
                    d && !e && T()
                })
            }
        }
        if (t.didTimeOut || !j(t.linkingAttempt.context)) {
            P.abort();
            return
        }
        return L(t.linkingAttempt.context, `plaid_success`), n && o && c() && (v({
            isFinishing: !0
        }), te(l.formatMessage(ie))), y && !P.signal.aborted && j(t.linkingAttempt.context) && (g = _?.()), k(), await re({
            oauthStateId: R.oauth_state_id,
            linkToken: R.token,
            publicToken: B.publicToken,
            trackingContext: t.linkingAttempt.context
        }), o && c() && await Promise.resolve().then(() => o(c, t.signal)).then(e => {
            if (e === !1 && c()) throw Error(`Ledger onboarding handoff did not start`)
        }).catch(async e => {
            throw n && c() && await V(u).catch(me), e
        }), {
            confirmation: g?.then(e => {
                m.current && (e ? i ? O() : f.success(l.formatMessage(X.accountConnectedToast)) : T())
            })
        }
    }, t[10] = r, t[11] = S, t[12] = O, t[13] = l, t[14] = u, t[15] = T, t[16] = A) : A = t[16];
    let M = A,
        N;
    t[17] !== b || t[18] !== h?.isAwaitingConnectorConsent || t[19] !== h?.isFinishing || t[20] !== T ? (N = () => {
        if (!b || h?.isAwaitingConnectorConsent || h?.isFinishing) return;
        let e = p.current;
        if (!e) return;
        let t = window.setTimeout(() => {
            p.current === e && (p.current = null, e.didTimeOut = !0, L(e.linkingAttempt.context, `link_failed`), e.startupTimeoutController.abort(), e.controller.abort(), e.hasOpenedPlaid || e.linkingAttempt.finish(), v(null), T())
        }, Y);
        return () => window.clearTimeout(t)
    }, t[17] = b, t[18] = h?.isAwaitingConnectorConsent, t[19] = h?.isFinishing, t[20] = T, t[21] = N) : N = t[21];
    let P = h?.isAwaitingConnectorConsent,
        z = h?.isFinishing,
        B;
    t[22] !== b || t[23] !== T || t[24] !== z || t[25] !== P ? (B = [b, P, z, T], t[22] = b, t[23] = T, t[24] = z, t[25] = P, t[26] = B) : B = t[26], (0, J.useEffect)(N, B);
    let H, U;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (H = () => (m.current = !0, () => {
        m.current = !1;
        let e = p.current;
        p.current = null, e?.controller.abort(), e && !e.hasOpenedPlaid && (e.linkingAttempt.recordCancellation(), e.linkingAttempt.finish())
    }), U = [], t[27] = H, t[28] = U) : (H = t[27], U = t[28]), o(H, U);
    let G;
    t[29] !== s || t[30] !== u || t[31] !== M || t[32] !== T ? (G = e => {
        if (!m.current || p.current || e?.signal?.aborted) return e?.linkingAttempt?.cancelPending(), !1;
        let t = e?.linkingAttempt ?? F(e?.trackingContext, e?.autoStartOauthLinkId ? `unknown` : `direct_plaid`);
        if (!t?.claim()) return !1;
        e = {
            ...e,
            trackingContext: t.context,
            linkingAttempt: t
        };
        let n = new AbortController,
            r = {
                linkingAttempt: t,
                hasOpenedPlaid: !1,
                didTimeOut: !1,
                controller: n,
                startupTimeoutController: new AbortController,
                directConnectMetrics: s === I.JIT_PLUGIN ? {
                    recordedStages: new Set,
                    startedAtMs: performance.now()
                } : void 0,
                signal: e?.signal && !e.accountLinkingContext ? k([n.signal, e.signal]) : n.signal
            };
        return p.current = r, W(r, `started`), v({
            oauthLinkId: e?.autoStartOauthLinkId,
            ...e?.prepareConnectorLink ? {
                isAwaitingConnectorConsent: !0
            } : {}
        }), M(e, r).catch(e => {
            r.signal.aborted || (e instanceof a && e.status === 409 && e.code === Se && de(u), p.current === r && T(e))
        }).finally(() => {
            r.signal.aborted && !r.hasOpenedPlaid && !r.didTimeOut && r.linkingAttempt.recordCancellation(), r.controller.abort(), r.linkingAttempt.finish(), p.current === r && (p.current = null, v(null))
        }).then(pe).finally(() => e?.onSettled?.()), !0
    }, t[29] = s, t[30] = u, t[31] = M, t[32] = T, t[33] = G) : G = t[33];
    let K = g(G),
        Z = h?.oauthLinkId,
        $;
    return t[34] !== b || t[35] !== K || t[36] !== Z ? ($ = {
        isInitializing: b,
        loadingOauthLinkId: Z,
        start: K
    }, t[34] = b, t[35] = K, t[36] = Z, t[37] = $) : $ = t[37], $
}

function pe(e) {
    return e?.confirmation
}

function me() {}

function he() {}

function ge(e) {
    return e?.auth_status === `ACTIVE`
}

function _e() {
    return !1
}

function ve(e) {
    return e + 1
}

function ye(e) {
    return e - 1
}

function be() {}
var q, J, Y, xe, Se, X, Z, Q, $ = e((() => {
    q = C(), z(), d(), B(), O(), A(), H(), U(), M(), P(), l(), n(), T(), r(), p(), m(), i(), N(), E(), S(), J = t(x()), b(), Y = 3e4, xe = 5e3, Se = `stale_plaid_item`, X = v({
        accountConnectedToast: {
            id: `mattress.ledger.account_connection.success.toast`,
            defaultMessage: `Your account is now connected`
        },
        repairSuccessToast: {
            id: `mattress.finance.accounts.repair.success.toast`,
            defaultMessage: `Account connected`
        },
        connectionFailedToast: {
            id: `mattress.ledger.account_connection.error.toast`,
            defaultMessage: `Something went wrong with setting up the connection`
        }
    }), Z = X.connectionFailedToast, Q = s(e => h(0))
}));
export {
    K as i, G as n, Z as r, $ as t
};
//# sourceMappingURL=2bed0ed0-msrk5uwi53ldjyzz.js.map