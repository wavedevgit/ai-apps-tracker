import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    CN as r,
    HN as i,
    IU as a,
    Irt as o,
    LU as s,
    Lrt as c,
    R8 as l,
    Rrt as u,
    UN as d,
    cot as f,
    fW as p,
    fot as m,
    not as h,
    p5 as ee,
    uW as g,
    wN as _,
    z8 as v
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Ln as y,
    N as b,
    Rn as x,
    Vn as S,
    s as C,
    wn as w,
    zn as T
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bkt as te,
    DAt as E,
    DW as ne,
    Dkt as re,
    KVn as D,
    OW as O,
    RTn as k,
    Ukt as A,
    gW as ie,
    hW as ae,
    lAt as j,
    oAt as M,
    pW as N,
    qVn as P,
    qkt as oe,
    rAt as F,
    sAt as I,
    xAt as se,
    zTn as L
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    as as R,
    os as z
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    a as ce,
    i as le,
    r as B,
    s as ue
} from "./6601bf01-mgwixdesah84q5n2.js";
import {
    a as V,
    n as H,
    r as de
} from "./4f866508-nx1lmkigi4ro0s38.js";
import {
    n as fe,
    t as U
} from "./8be37a3d-cs8pzotsolhnymr1.js";

function W(e, t) {
    let n = e.directConnectMetrics;
    if (!n || n.recordedStages.has(t)) return;
    n.recordedStages.add(t);
    let r = {
        stage: t
    };
    try {
        c.count(u.ECOSYSTEM, `ledger.direct_connect.stage`, r), t !== `started` && c.hist(u.ECOSYSTEM, `ledger.direct_connect.stage_latency_ms`, r, Math.max(0, Math.round(performance.now() - n.startedAtMs)))
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
    } = n, o = i === void 0 ? k.CONNECTOR_SETTING : i, s = T(), c = b(), l;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (l = a(), t[2] = l) : l = t[2];
    let u = l,
        f = (0, J.useRef)(null),
        p = (0, J.useRef)(!1),
        [v, y] = (0, J.useState)(null),
        x = v != null,
        S;
    t[3] === o ? S = t[4] : (S = {
        productSku: o
    }, t[3] = o, t[4] = S);
    let C = z(S),
        w;
    t[5] === s ? w = t[6] : (w = e => {
        if (p.current) {
            let t = e instanceof h && e.isClientError() ? m(e)?.trim() : void 0;
            u.warning(t || s.formatMessage(X.connectionFailedToast))
        }
    }, t[5] = s, t[6] = w);
    let E = _(w),
        O;
    t[7] !== s || t[8] !== c ? (O = () => {
        u.success(s.formatMessage(X.repairSuccessToast)), c.invalidateQueries({
            queryKey: re,
            refetchType: `all`
        }).catch(be)
    }, t[7] = s, t[8] = c, t[9] = O) : O = t[9];
    let A = O,
        M;
    t[10] !== r || t[11] !== C || t[12] !== A || t[13] !== s || t[14] !== c || t[15] !== E ? (M = async (e, t) => {
        let {
            accountLinkingContext: n,
            autoStartOauthLinkId: i,
            onConnectionConfirmed: a,
            onSuccess: o,
            prepareConnectorLink: l
        } = e ?? {}, d = () => f.current === t && !t.signal.aborted, m = !1, h, _, v, b = !1, x = !1, S = !1, w, T = () => {
            w != null && (window.clearTimeout(w), w = void 0)
        }, D = () => {
            T(), !(!x || !r) && (x = !1, ee(() => Q.set(r, ye)))
        }, O = () => {
            x || !r || !p.current || !_ || i || (x = !0, ee(() => Q.set(r, ve)), S || (S = !0, _.finally(D)))
        }, k = () => {
            m = !0, W(t, `connection_confirmed`), T(), p.current && a?.(), h?.()
        }, M, N, P = new AbortController, F = async () => {
            g(s.formatMessage(ae));
            let e = t.linkingAttempt.context;
            j(e, `plaid_link_requested`);
            try {
                let n = await oe({
                    ...i ? {
                        link_id: i
                    } : {},
                    flow_id: e.flowId,
                    native_android: !1,
                    native_ios: !1
                }, t.signal);
                return typeof n.token == `string` && j(e, `plaid_token_ready`), n
            } catch (n) {
                let r = n;
                throw t.signal.aborted ? t.didTimeOut || t.linkingAttempt.recordCancellation() : j(e, `plaid_link_request_failed`), r
            }
        }, L = (r, a) => {
            if (typeof r.token != `string`) throw Error(`Ledger OAuth response did not include a Link token`);
            return {
                ...n ? {
                    accountLinkingContext: n
                } : {},
                trackingContext: t.linkingAttempt.context,
                canOpen: async () => await a && d(),
                beforeOpen: async () => {
                    if (n) return e?.beforeOpen && !await e.beforeOpen() ? !1 : (W(t, `link_ready`), !0);
                    let a = i == null && c.getQueryData(re) != null ? await V(c) : void 0;
                    return e?.beforeOpen && !await e.beforeOpen() ? !1 : (W(t, `link_ready`), v = () => fe(r.oauth_state_id, c, {
                        onConnectionConfirmed: () => {
                            m || k()
                        },
                        onTimedOut: () => {
                            b = !0
                        },
                        signal: P.signal,
                        linksBeforeLinking: a
                    }).catch(_e), _ = v(), !0)
                },
                linkToken: r.token,
                onOpen: () => {
                    t.hasOpenedPlaid = !0, j(t.linkingAttempt.context, `plaid_open`), y(null)
                },
                onReady: () => j(t.linkingAttempt.context, `plaid_sdk_ready`),
                oauthStateId: r.oauth_state_id,
                signal: t.signal,
                startupTimeoutSignal: t.startupTimeoutController.signal
            }
        };
        if (l) {
            let e = await l(d, t.signal, async () => {
                y({
                    oauthLinkId: i
                }), M = await F(), d() && (N = await ue(L(M, Promise.resolve(!0))))
            }, t.linkingAttempt.context);
            if (!d() || !e) return;
            y({
                oauthLinkId: i
            })
        }
        let R = M ?? await F();
        if (!d()) return;
        if (typeof R.token != `string`) throw Error(`Ledger OAuth response did not include a Link token`);
        let z = l ? Promise.resolve(!0) : ne(t.linkingAttempt.context, e => C(se, {
            ...e,
            signal: t.signal
        })).then(ge);
        z.catch(he);
        let B = N ? await N.open() : await ce(L(R, z));
        if (B.type === `exited` && t.signal.aborted) {
            P.abort();
            return
        }
        if (le(B)) throw j(t.linkingAttempt.context, `link_failed`), P.abort(), Error(`Plaid Link failed to launch`);
        if (B.type === `exited`) {
            if (j(t.linkingAttempt.context, `plaid_exit`), (B.plaidExitStatus === `failed` || B.plaidErrorCode) && B.plaidErrorCode !== `launch_cancelled` && B.plaidErrorCode !== `presentation_dismissed` ? j(t.linkingAttempt.context, `link_failed`) : B.plaidErrorCode !== `presentation_dismissed` && t.linkingAttempt.recordCancellation(), e?.onExit?.(), n) {
                if (P.abort(), B.plaidErrorCode && B.plaidErrorCode !== `launch_cancelled` && B.plaidErrorCode !== `presentation_dismissed`) throw Error(`Plaid Link exited with an error`);
                return
            }
            if (B.plaidErrorCode === `launch_cancelled`) {
                P.abort();
                return
            }
            return h = O, m ? O() : B.plaidErrorCode === `presentation_dismissed` && (O(), x && (w = window.setTimeout(() => {
                w = void 0, m || D()
            }, xe))), {
                confirmation: _?.then(e => {
                    m && !e && E()
                })
            }
        }
        if (t.didTimeOut || !I(t.linkingAttempt.context)) {
            P.abort();
            return
        }
        return j(t.linkingAttempt.context, `plaid_success`), n && o && d() && (y({
            isFinishing: !0
        }), g(s.formatMessage(ie))), b && !P.signal.aborted && I(t.linkingAttempt.context) && (_ = v?.()), O(), await te({
            oauthStateId: R.oauth_state_id,
            linkToken: R.token,
            publicToken: B.publicToken,
            trackingContext: t.linkingAttempt.context
        }), o && d() && await Promise.resolve().then(() => o(d, t.signal)).then(e => {
            if (e === !1 && d()) throw Error(`Ledger onboarding handoff did not start`)
        }).catch(async e => {
            throw n && d() && await V(c).catch(me), e
        }), {
            confirmation: _?.then(e => {
                p.current && (e ? i ? A() : u.success(s.formatMessage(X.accountConnectedToast)) : E())
            })
        }
    }, t[10] = r, t[11] = C, t[12] = A, t[13] = s, t[14] = c, t[15] = E, t[16] = M) : M = t[16];
    let N = M,
        P;
    t[17] !== x || t[18] !== v?.isAwaitingConnectorConsent || t[19] !== v?.isFinishing || t[20] !== E ? (P = () => {
        if (!x || v?.isAwaitingConnectorConsent || v?.isFinishing) return;
        let e = f.current;
        if (!e) return;
        let t = window.setTimeout(() => {
            f.current === e && (f.current = null, e.didTimeOut = !0, j(e.linkingAttempt.context, `link_failed`), e.startupTimeoutController.abort(), e.controller.abort(), e.hasOpenedPlaid || e.linkingAttempt.finish(), y(null), E())
        }, Y);
        return () => window.clearTimeout(t)
    }, t[17] = x, t[18] = v?.isAwaitingConnectorConsent, t[19] = v?.isFinishing, t[20] = E, t[21] = P) : P = t[21];
    let L = v?.isAwaitingConnectorConsent,
        R = v?.isFinishing,
        B;
    t[22] !== x || t[23] !== E || t[24] !== R || t[25] !== L ? (B = [x, L, R, E], t[22] = x, t[23] = E, t[24] = R, t[25] = L, t[26] = B) : B = t[26], (0, J.useEffect)(P, B);
    let H, U;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (H = () => (p.current = !0, () => {
        p.current = !1;
        let e = f.current;
        f.current = null, e?.controller.abort(), e && !e.hasOpenedPlaid && (e.linkingAttempt.recordCancellation(), e.linkingAttempt.finish())
    }), U = [], t[27] = H, t[28] = U) : (H = t[27], U = t[28]), d(H, U);
    let G;
    t[29] !== o || t[30] !== c || t[31] !== N || t[32] !== E ? (G = e => {
        if (!p.current || f.current || e?.signal?.aborted) return e?.linkingAttempt?.cancelPending(), !1;
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
                directConnectMetrics: o === k.JIT_PLUGIN ? {
                    recordedStages: new Set,
                    startedAtMs: performance.now()
                } : void 0,
                signal: e?.signal && !e.accountLinkingContext ? D([n.signal, e.signal]) : n.signal
            };
        return f.current = r, W(r, `started`), y({
            oauthLinkId: e?.autoStartOauthLinkId,
            ...e?.prepareConnectorLink ? {
                isAwaitingConnectorConsent: !0
            } : {}
        }), N(e, r).catch(e => {
            r.signal.aborted || (e instanceof h && e.status === 409 && e.code === Se && de(c), f.current === r && E(e))
        }).finally(() => {
            r.signal.aborted && !r.hasOpenedPlaid && !r.didTimeOut && r.linkingAttempt.recordCancellation(), r.controller.abort(), r.linkingAttempt.finish(), f.current === r && (f.current = null, y(null))
        }).then(pe).finally(() => e?.onSettled?.()), !0
    }, t[29] = o, t[30] = c, t[31] = N, t[32] = E, t[33] = G) : G = t[33];
    let K = _(G),
        Z = v?.oauthLinkId,
        $;
    return t[34] !== x || t[35] !== K || t[36] !== Z ? ($ = {
        isInitializing: x,
        loadingOauthLinkId: Z,
        start: K
    }, t[34] = x, t[35] = K, t[36] = Z, t[37] = $) : $ = t[37], $
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
    q = w(), R(), p(), B(), E(), A(), H(), U(), N(), L(), n(), s(), P(), f(), o(), r(), i(), M(), O(), C(), J = t(S()), x(), Y = 3e4, xe = 5e3, Se = `stale_plaid_item`, X = y({
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
    }), Z = X.connectionFailedToast, Q = v(e => l(0))
}));
export {
    K as i, G as n, Z as r, $ as t
};
//# sourceMappingURL=2bed0ed0-g8fnek6wui513y68.js.map