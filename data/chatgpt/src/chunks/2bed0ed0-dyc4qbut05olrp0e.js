import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aat as n,
    BU as r,
    Bat as i,
    Iat as a,
    LN as o,
    RN as s,
    T8 as c,
    drt as l,
    frt as u,
    g5 as ee,
    g8 as d,
    hW as f,
    pW as p,
    urt as m,
    vN as h,
    w8 as g,
    yN as _,
    zU as v
} from "./4813494d-bo7e0c29ngt4zgx0.js";
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
    DW as E,
    EW as te,
    Ikt as D,
    LAt as O,
    QBn as k,
    Qkt as A,
    Ykt as ne,
    ZBn as j,
    _At as M,
    fW as N,
    gAt as P,
    hW as re,
    iTn as F,
    jAt as ie,
    mW as ae,
    nAt as oe,
    pAt as I,
    rTn as L,
    yAt as R
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    as as z,
    is as B
} from "./8b34dbc2-dtawqv9t1aqckqj4.js";
import {
    a as se,
    i as ce,
    r as V,
    s as le
} from "./6601bf01-cb75jozqzlngul1j.js";
import {
    a as H,
    n as U,
    r as ue
} from "./4f866508-m9rpwowfl14x9tlz.js";
import {
    n as de,
    t as W
} from "./8be37a3d-ol19oxrt279ux97i.js";

function G(e, t) {
    let n = e.directConnectMetrics;
    if (!n || n.recordedStages.has(t)) return;
    n.recordedStages.add(t);
    let r = {
        stage: t
    };
    try {
        l.count(u.ECOSYSTEM, `ledger.direct_connect.stage`, r), t !== `started` && l.hist(u.ECOSYSTEM, `ledger.direct_connect.stage_latency_ms`, r, Math.max(0, Math.round(performance.now() - n.startedAtMs)))
    } catch {}
}

function K(e) {
    return Q(e) > 0
}

function q(e) {
    "use forget";
    let t = (0, J.c)(38),
        r;
    t[0] === e ? r = t[1] : (r = e === void 0 ? {} : e, t[0] = e, t[1] = r);
    let {
        conversation: a,
        connectorLinkProductSku: o
    } = r, c = o === void 0 ? L.CONNECTOR_SETTING : o, l = T(), u = b(), d;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (d = v(), t[2] = d) : d = t[2];
    let f = d,
        m = (0, Y.useRef)(null),
        h = (0, Y.useRef)(!1),
        [g, y] = (0, Y.useState)(null),
        x = g != null,
        S;
    t[3] === c ? S = t[4] : (S = {
        productSku: c
    }, t[3] = c, t[4] = S);
    let C = z(S),
        w;
    t[5] === l ? w = t[6] : (w = e => {
        if (h.current) {
            let t = e instanceof n && e.isClientError() ? i(e)?.trim() : void 0;
            f.warning(t || l.formatMessage(X.connectionFailedToast))
        }
    }, t[5] = l, t[6] = w);
    let E = _(w),
        O;
    t[7] !== l || t[8] !== u ? (O = () => {
        f.success(l.formatMessage(X.repairSuccessToast)), u.invalidateQueries({
            queryKey: D,
            refetchType: `all`
        }).catch(ye)
    }, t[7] = l, t[8] = u, t[9] = O) : O = t[9];
    let k = O,
        A;
    t[10] !== a || t[11] !== C || t[12] !== k || t[13] !== l || t[14] !== u || t[15] !== E ? (A = async (e, t) => {
        let {
            accountLinkingContext: n,
            autoStartOauthLinkId: r,
            onConnectionConfirmed: i,
            onSuccess: o,
            prepareConnectorLink: s
        } = e ?? {}, c = () => m.current === t && !t.signal.aborted, d = !1, g, _, v, b = !1, x = !1, S = !1, w, T = () => {
            w != null && (window.clearTimeout(w), w = void 0)
        }, O = () => {
            T(), !(!x || !a) && (x = !1, ee(() => Q.set(a, ve)))
        }, A = () => {
            x || !a || !h.current || !_ || r || (x = !0, ee(() => Q.set(a, _e)), S || (S = !0, _.finally(O)))
        }, j = () => {
            d = !0, G(t, `connection_confirmed`), T(), h.current && i?.(), g?.()
        }, N, P, F = new AbortController, I = async () => {
            p(l.formatMessage(ae));
            let e = t.linkingAttempt.context;
            R(e, `plaid_link_requested`);
            try {
                let n = await oe({
                    ...r ? {
                        link_id: r
                    } : {},
                    flow_id: e.flowId,
                    native_android: !1,
                    native_ios: !1
                }, t.signal);
                return typeof n.token == `string` && R(e, `plaid_token_ready`), n
            } catch (n) {
                let r = n;
                throw t.signal.aborted ? t.didTimeOut || t.linkingAttempt.recordCancellation() : R(e, `plaid_link_request_failed`), r
            }
        }, L = (i, a) => {
            if (typeof i.token != `string`) throw Error(`Ledger OAuth response did not include a Link token`);
            return {
                ...n ? {
                    accountLinkingContext: n
                } : {},
                trackingContext: t.linkingAttempt.context,
                canOpen: async () => await a && c(),
                beforeOpen: async () => {
                    if (n) return e?.beforeOpen && !await e.beforeOpen() ? !1 : (G(t, `link_ready`), !0);
                    let a = r == null && u.getQueryData(D) != null ? await H(u) : void 0;
                    return e?.beforeOpen && !await e.beforeOpen() ? !1 : (G(t, `link_ready`), v = () => de(i.oauth_state_id, u, {
                        onConnectionConfirmed: () => {
                            d || j()
                        },
                        onTimedOut: () => {
                            b = !0
                        },
                        signal: F.signal,
                        linksBeforeLinking: a
                    }).catch(ge), _ = v(), !0)
                },
                linkToken: i.token,
                onOpen: () => {
                    t.hasOpenedPlaid = !0, R(t.linkingAttempt.context, `plaid_open`), y(null)
                },
                onReady: () => R(t.linkingAttempt.context, `plaid_sdk_ready`),
                oauthStateId: i.oauth_state_id,
                signal: t.signal,
                startupTimeoutSignal: t.startupTimeoutController.signal
            }
        };
        if (s) {
            let e = await s(c, t.signal, async () => {
                y({
                    oauthLinkId: r
                }), N = await I(), c() && (P = await le(L(N, Promise.resolve(!0))))
            }, t.linkingAttempt.context);
            if (!c() || !e) return;
            y({
                oauthLinkId: r
            })
        }
        let z = N ?? await I();
        if (!c()) return;
        if (typeof z.token != `string`) throw Error(`Ledger OAuth response did not include a Link token`);
        let B = s ? Promise.resolve(!0) : te(t.linkingAttempt.context, e => C(ie, {
            ...e,
            signal: t.signal
        })).then(he);
        B.catch(me);
        let V = P ? await P.open() : await se(L(z, B));
        if (V.type === `exited` && t.signal.aborted) {
            F.abort();
            return
        }
        if (ce(V)) throw R(t.linkingAttempt.context, `link_failed`), F.abort(), Error(`Plaid Link failed to launch`);
        if (V.type === `exited`) {
            if (R(t.linkingAttempt.context, `plaid_exit`), (V.plaidExitStatus === `failed` || V.plaidErrorCode) && V.plaidErrorCode !== `launch_cancelled` && V.plaidErrorCode !== `presentation_dismissed` ? R(t.linkingAttempt.context, `link_failed`) : V.plaidErrorCode !== `presentation_dismissed` && t.linkingAttempt.recordCancellation(), e?.onExit?.(), n) {
                if (F.abort(), V.plaidErrorCode && V.plaidErrorCode !== `launch_cancelled` && V.plaidErrorCode !== `presentation_dismissed`) throw Error(`Plaid Link exited with an error`);
                return
            }
            if (V.plaidErrorCode === `launch_cancelled`) {
                F.abort();
                return
            }
            return g = A, d ? A() : V.plaidErrorCode === `presentation_dismissed` && (A(), x && (w = window.setTimeout(() => {
                w = void 0, d || O()
            }, xe))), {
                confirmation: _?.then(e => {
                    d && !e && E()
                })
            }
        }
        if (t.didTimeOut || !M(t.linkingAttempt.context)) {
            F.abort();
            return
        }
        return R(t.linkingAttempt.context, `plaid_success`), n && o && c() && (y({
            isFinishing: !0
        }), p(l.formatMessage(re))), b && !F.signal.aborted && M(t.linkingAttempt.context) && (_ = v?.()), A(), await ne({
            oauthStateId: z.oauth_state_id,
            linkToken: z.token,
            publicToken: V.publicToken,
            trackingContext: t.linkingAttempt.context
        }), o && c() && await Promise.resolve().then(() => o(c, t.signal)).then(e => {
            if (e === !1 && c()) throw Error(`Ledger onboarding handoff did not start`)
        }).catch(async e => {
            throw n && c() && await H(u).catch(pe), e
        }), {
            confirmation: _?.then(e => {
                h.current && (e ? r ? k() : f.success(l.formatMessage(X.accountConnectedToast)) : E())
            })
        }
    }, t[10] = a, t[11] = C, t[12] = k, t[13] = l, t[14] = u, t[15] = E, t[16] = A) : A = t[16];
    let N = A,
        P;
    t[17] !== x || t[18] !== g?.isAwaitingConnectorConsent || t[19] !== g?.isFinishing || t[20] !== E ? (P = () => {
        if (!x || g?.isAwaitingConnectorConsent || g?.isFinishing) return;
        let e = m.current;
        if (!e) return;
        let t = window.setTimeout(() => {
            m.current === e && (m.current = null, e.didTimeOut = !0, R(e.linkingAttempt.context, `link_failed`), e.startupTimeoutController.abort(), e.controller.abort(), e.hasOpenedPlaid || e.linkingAttempt.finish(), y(null), E())
        }, be);
        return () => window.clearTimeout(t)
    }, t[17] = x, t[18] = g?.isAwaitingConnectorConsent, t[19] = g?.isFinishing, t[20] = E, t[21] = P) : P = t[21];
    let F = g?.isAwaitingConnectorConsent,
        B = g?.isFinishing,
        V;
    t[22] !== x || t[23] !== E || t[24] !== B || t[25] !== F ? (V = [x, F, B, E], t[22] = x, t[23] = E, t[24] = B, t[25] = F, t[26] = V) : V = t[26], (0, Y.useEffect)(P, V);
    let U, W;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (U = () => (h.current = !0, () => {
        h.current = !1;
        let e = m.current;
        m.current = null, e?.controller.abort(), e && !e.hasOpenedPlaid && (e.linkingAttempt.recordCancellation(), e.linkingAttempt.finish())
    }), W = [], t[27] = U, t[28] = W) : (U = t[27], W = t[28]), s(U, W);
    let K;
    t[29] !== c || t[30] !== u || t[31] !== N || t[32] !== E ? (K = e => {
        if (!h.current || m.current || e?.signal?.aborted) return e?.linkingAttempt?.cancelPending(), !1;
        let t = e?.linkingAttempt ?? I(e?.trackingContext, e?.autoStartOauthLinkId ? `unknown` : `direct_plaid`);
        if (!t?.claim()) return !1;
        e = {
            ...e,
            trackingContext: t.context,
            linkingAttempt: t
        };
        let r = new AbortController,
            i = {
                linkingAttempt: t,
                hasOpenedPlaid: !1,
                didTimeOut: !1,
                controller: r,
                startupTimeoutController: new AbortController,
                directConnectMetrics: c === L.JIT_PLUGIN ? {
                    recordedStages: new Set,
                    startedAtMs: performance.now()
                } : void 0,
                signal: e?.signal && !e.accountLinkingContext ? j([r.signal, e.signal]) : r.signal
            };
        return m.current = i, G(i, `started`), y({
            oauthLinkId: e?.autoStartOauthLinkId,
            ...e?.prepareConnectorLink ? {
                isAwaitingConnectorConsent: !0
            } : {}
        }), N(e, i).catch(e => {
            i.signal.aborted || (e instanceof n && e.status === 409 && e.code === Se && ue(u), m.current === i && E(e))
        }).finally(() => {
            i.signal.aborted && !i.hasOpenedPlaid && !i.didTimeOut && i.linkingAttempt.recordCancellation(), i.controller.abort(), i.linkingAttempt.finish(), m.current === i && (m.current = null, y(null))
        }).then(fe).finally(() => e?.onSettled?.()), !0
    }, t[29] = c, t[30] = u, t[31] = N, t[32] = E, t[33] = K) : K = t[33];
    let q = _(K),
        Z = g?.oauthLinkId,
        $;
    return t[34] !== x || t[35] !== q || t[36] !== Z ? ($ = {
        isInitializing: x,
        loadingOauthLinkId: Z,
        start: q
    }, t[34] = x, t[35] = q, t[36] = Z, t[37] = $) : $ = t[37], $
}

function fe(e) {
    return e?.confirmation
}

function pe() {}

function me() {}

function he(e) {
    return e?.auth_status === `ACTIVE`
}

function ge() {
    return !1
}

function _e(e) {
    return e + 1
}

function ve(e) {
    return e - 1
}

function ye() {}
var J, Y, be, xe, Se, X, Z, Q, $ = e((() => {
    J = w(), B(), f(), V(), O(), A(), U(), W(), N(), F(), d(), r(), k(), a(), m(), h(), o(), P(), E(), C(), Y = t(S()), x(), be = 3e4, xe = 5e3, Se = `stale_plaid_item`, X = y({
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
    }), Z = X.connectionFailedToast, Q = c(e => g(0))
}));
export {
    q as i, K as n, Z as r, $ as t
};
//# sourceMappingURL=2bed0ed0-dyc4qbut05olrp0e.js.map