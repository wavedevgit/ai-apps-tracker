import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Art as n,
    CN as r,
    HN as i,
    IU as a,
    Jat as o,
    L8 as s,
    LU as c,
    Ort as l,
    R8 as u,
    UN as d,
    eot as f,
    fW as p,
    iot as m,
    k5 as h,
    k8 as g,
    krt as _,
    uW as v,
    wN as y
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Ln as b,
    N as x,
    Rn as S,
    Vn as C,
    s as w,
    wn as T,
    zn as E
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    DAt as ee,
    DW as te,
    FTn as D,
    Gkt as ne,
    Jkt as O,
    Mkt as re,
    NAt as k,
    NVn as A,
    OW as j,
    PTn as M,
    PVn as N,
    Qkt as ie,
    fAt as P,
    gW as ae,
    hAt as F,
    hW as oe,
    lAt as I,
    pAt as se,
    pW as L
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    as as R,
    is as z
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    a as ce,
    i as le,
    r as B,
    s as ue
} from "./6601bf01-cvdbvsqw7mgi4cso.js";
import {
    a as V,
    n as H,
    r as de
} from "./4f866508-lwwle40ltedduaux.js";
import {
    n as fe,
    t as U
} from "./8be37a3d-klao2vhjegpxnx1w.js";

function W(e, t) {
    let r = e.directConnectMetrics;
    if (!r || r.recordedStages.has(t)) return;
    r.recordedStages.add(t);
    let i = {
        stage: t
    };
    try {
        _.count(n.ECOSYSTEM, `ledger.direct_connect.stage`, i), t !== `started` && _.hist(n.ECOSYSTEM, `ledger.direct_connect.stage_latency_ms`, i, Math.max(0, Math.round(performance.now() - r.startedAtMs)))
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
    } = n, s = i === void 0 ? M.CONNECTOR_SETTING : i, c = E(), l = x(), u;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (u = a(), t[2] = u) : u = t[2];
    let f = u,
        p = (0, J.useRef)(null),
        g = (0, J.useRef)(!1),
        [_, b] = (0, J.useState)(null),
        S = _ != null,
        C;
    t[3] === s ? C = t[4] : (C = {
        productSku: s
    }, t[3] = s, t[4] = C);
    let w = R(C),
        T;
    t[5] === c ? T = t[6] : (T = e => {
        if (g.current) {
            let t = e instanceof o && e.isClientError() ? m(e)?.trim() : void 0;
            f.warning(t || c.formatMessage(X.connectionFailedToast))
        }
    }, t[5] = c, t[6] = T);
    let D = y(T),
        O;
    t[7] !== c || t[8] !== l ? (O = () => {
        f.success(c.formatMessage(X.repairSuccessToast)), l.invalidateQueries({
            queryKey: re,
            refetchType: `all`
        }).catch(be)
    }, t[7] = c, t[8] = l, t[9] = O) : O = t[9];
    let k = O,
        j;
    t[10] !== r || t[11] !== w || t[12] !== k || t[13] !== c || t[14] !== l || t[15] !== D ? (j = async (e, t) => {
        let {
            accountLinkingContext: n,
            autoStartOauthLinkId: i,
            onConnectionConfirmed: a,
            onSuccess: o,
            prepareConnectorLink: s
        } = e ?? {}, u = () => p.current === t && !t.signal.aborted, d = !1, m, _, y, x = !1, S = !1, C = !1, T, E = () => {
            T != null && (window.clearTimeout(T), T = void 0)
        }, O = () => {
            E(), !(!S || !r) && (S = !1, h(() => Q.set(r, ye)))
        }, A = () => {
            S || !r || !g.current || !_ || i || (S = !0, h(() => Q.set(r, ve)), C || (C = !0, _.finally(O)))
        }, j = () => {
            d = !0, W(t, `connection_confirmed`), E(), g.current && a?.(), m?.()
        }, M, N, P = new AbortController, I = async () => {
            v(c.formatMessage(oe));
            let e = t.linkingAttempt.context;
            F(e, `plaid_link_requested`);
            try {
                let n = await ie({
                    ...i ? {
                        link_id: i
                    } : {},
                    flow_id: e.flowId,
                    native_android: !1,
                    native_ios: !1
                }, t.signal);
                return typeof n.token == `string` && F(e, `plaid_token_ready`), n
            } catch (n) {
                let r = n;
                throw t.signal.aborted ? t.didTimeOut || t.linkingAttempt.recordCancellation() : F(e, `plaid_link_request_failed`), r
            }
        }, L = (r, a) => {
            if (typeof r.token != `string`) throw Error(`Ledger OAuth response did not include a Link token`);
            return {
                ...n ? {
                    accountLinkingContext: n
                } : {},
                trackingContext: t.linkingAttempt.context,
                canOpen: async () => await a && u(),
                beforeOpen: async () => {
                    if (n) return e?.beforeOpen && !await e.beforeOpen() ? !1 : (W(t, `link_ready`), !0);
                    let a = i == null && l.getQueryData(re) != null ? await V(l) : void 0;
                    return e?.beforeOpen && !await e.beforeOpen() ? !1 : (W(t, `link_ready`), y = () => fe(r.oauth_state_id, l, {
                        onConnectionConfirmed: () => {
                            d || j()
                        },
                        onTimedOut: () => {
                            x = !0
                        },
                        signal: P.signal,
                        linksBeforeLinking: a
                    }).catch(_e), _ = y(), !0)
                },
                linkToken: r.token,
                onOpen: () => {
                    t.hasOpenedPlaid = !0, F(t.linkingAttempt.context, `plaid_open`), b(null)
                },
                onReady: () => F(t.linkingAttempt.context, `plaid_sdk_ready`),
                oauthStateId: r.oauth_state_id,
                signal: t.signal,
                startupTimeoutSignal: t.startupTimeoutController.signal
            }
        };
        if (s) {
            let e = await s(u, t.signal, async () => {
                b({
                    oauthLinkId: i
                }), M = await I(), u() && (N = await ue(L(M, Promise.resolve(!0))))
            }, t.linkingAttempt.context);
            if (!u() || !e) return;
            b({
                oauthLinkId: i
            })
        }
        let R = M ?? await I();
        if (!u()) return;
        if (typeof R.token != `string`) throw Error(`Ledger OAuth response did not include a Link token`);
        let z = s ? Promise.resolve(!0) : te(t.linkingAttempt.context, e => w(ee, {
            ...e,
            signal: t.signal
        })).then(ge);
        z.catch(he);
        let B = N ? await N.open() : await ce(L(R, z));
        if (B.type === `exited` && t.signal.aborted) {
            P.abort();
            return
        }
        if (le(B)) throw F(t.linkingAttempt.context, `link_failed`), P.abort(), Error(`Plaid Link failed to launch`);
        if (B.type === `exited`) {
            if (F(t.linkingAttempt.context, `plaid_exit`), (B.plaidExitStatus === `failed` || B.plaidErrorCode) && B.plaidErrorCode !== `launch_cancelled` && B.plaidErrorCode !== `presentation_dismissed` ? F(t.linkingAttempt.context, `link_failed`) : B.plaidErrorCode !== `presentation_dismissed` && t.linkingAttempt.recordCancellation(), e?.onExit?.(), n) {
                if (P.abort(), B.plaidErrorCode && B.plaidErrorCode !== `launch_cancelled` && B.plaidErrorCode !== `presentation_dismissed`) throw Error(`Plaid Link exited with an error`);
                return
            }
            if (B.plaidErrorCode === `launch_cancelled`) {
                P.abort();
                return
            }
            return m = A, d ? A() : B.plaidErrorCode === `presentation_dismissed` && (A(), S && (T = window.setTimeout(() => {
                T = void 0, d || O()
            }, xe))), {
                confirmation: _?.then(e => {
                    d && !e && D()
                })
            }
        }
        if (t.didTimeOut || !se(t.linkingAttempt.context)) {
            P.abort();
            return
        }
        return F(t.linkingAttempt.context, `plaid_success`), n && o && u() && (b({
            isFinishing: !0
        }), v(c.formatMessage(ae))), x && !P.signal.aborted && se(t.linkingAttempt.context) && (_ = y?.()), A(), await ne({
            oauthStateId: R.oauth_state_id,
            linkToken: R.token,
            publicToken: B.publicToken,
            trackingContext: t.linkingAttempt.context
        }), o && u() && await Promise.resolve().then(() => o(u, t.signal)).then(e => {
            if (e === !1 && u()) throw Error(`Ledger onboarding handoff did not start`)
        }).catch(async e => {
            throw n && u() && await V(l).catch(me), e
        }), {
            confirmation: _?.then(e => {
                g.current && (e ? i ? k() : f.success(c.formatMessage(X.accountConnectedToast)) : D())
            })
        }
    }, t[10] = r, t[11] = w, t[12] = k, t[13] = c, t[14] = l, t[15] = D, t[16] = j) : j = t[16];
    let N = j,
        P;
    t[17] !== S || t[18] !== _?.isAwaitingConnectorConsent || t[19] !== _?.isFinishing || t[20] !== D ? (P = () => {
        if (!S || _?.isAwaitingConnectorConsent || _?.isFinishing) return;
        let e = p.current;
        if (!e) return;
        let t = window.setTimeout(() => {
            p.current === e && (p.current = null, e.didTimeOut = !0, F(e.linkingAttempt.context, `link_failed`), e.startupTimeoutController.abort(), e.controller.abort(), e.hasOpenedPlaid || e.linkingAttempt.finish(), b(null), D())
        }, Y);
        return () => window.clearTimeout(t)
    }, t[17] = S, t[18] = _?.isAwaitingConnectorConsent, t[19] = _?.isFinishing, t[20] = D, t[21] = P) : P = t[21];
    let L = _?.isAwaitingConnectorConsent,
        z = _?.isFinishing,
        B;
    t[22] !== S || t[23] !== D || t[24] !== z || t[25] !== L ? (B = [S, L, z, D], t[22] = S, t[23] = D, t[24] = z, t[25] = L, t[26] = B) : B = t[26], (0, J.useEffect)(P, B);
    let H, U;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (H = () => (g.current = !0, () => {
        g.current = !1;
        let e = p.current;
        p.current = null, e?.controller.abort(), e && !e.hasOpenedPlaid && (e.linkingAttempt.recordCancellation(), e.linkingAttempt.finish())
    }), U = [], t[27] = H, t[28] = U) : (H = t[27], U = t[28]), d(H, U);
    let G;
    t[29] !== s || t[30] !== l || t[31] !== N || t[32] !== D ? (G = e => {
        if (!g.current || p.current || e?.signal?.aborted) return e?.linkingAttempt?.cancelPending(), !1;
        let t = e?.linkingAttempt ?? I(e?.trackingContext, e?.autoStartOauthLinkId ? `unknown` : `direct_plaid`);
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
                directConnectMetrics: s === M.JIT_PLUGIN ? {
                    recordedStages: new Set,
                    startedAtMs: performance.now()
                } : void 0,
                signal: e?.signal && !e.accountLinkingContext ? A([n.signal, e.signal]) : n.signal
            };
        return p.current = r, W(r, `started`), b({
            oauthLinkId: e?.autoStartOauthLinkId,
            ...e?.prepareConnectorLink ? {
                isAwaitingConnectorConsent: !0
            } : {}
        }), N(e, r).catch(e => {
            r.signal.aborted || (e instanceof o && e.status === 409 && e.code === Se && de(l), p.current === r && D(e))
        }).finally(() => {
            r.signal.aborted && !r.hasOpenedPlaid && !r.didTimeOut && r.linkingAttempt.recordCancellation(), r.controller.abort(), r.linkingAttempt.finish(), p.current === r && (p.current = null, b(null))
        }).then(pe).finally(() => e?.onSettled?.()), !0
    }, t[29] = s, t[30] = l, t[31] = N, t[32] = D, t[33] = G) : G = t[33];
    let K = y(G),
        Z = _?.oauthLinkId,
        $;
    return t[34] !== S || t[35] !== K || t[36] !== Z ? ($ = {
        isInitializing: S,
        loadingOauthLinkId: Z,
        start: K
    }, t[34] = S, t[35] = K, t[36] = Z, t[37] = $) : $ = t[37], $
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
    q = T(), z(), p(), B(), k(), O(), H(), U(), L(), D(), g(), c(), N(), f(), l(), r(), i(), P(), j(), w(), J = t(C()), S(), Y = 3e4, xe = 5e3, Se = `stale_plaid_item`, X = b({
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
    }), Z = X.connectionFailedToast, Q = u(e => s(0))
}));
export {
    K as i, G as n, Z as r, $ as t
};
//# sourceMappingURL=2bed0ed0-b1wxhwrqvwyaetvo.js.map