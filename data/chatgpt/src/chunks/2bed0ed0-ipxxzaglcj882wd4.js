import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C8 as n,
    Dat as r,
    IN as i,
    LN as a,
    Lat as o,
    Nat as s,
    RU as c,
    S8 as l,
    _N as u,
    crt as d,
    fW as f,
    lrt as p,
    m5 as m,
    m8 as h,
    mW as g,
    srt as _,
    vN as v,
    zU as y
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as b,
    Hn as x,
    N as S,
    Rn as C,
    Tn as w,
    s as T,
    zn as E
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    $Bn as D,
    Akt as O,
    CW as ee,
    Kkt as k,
    TAt as te,
    Ukt as ne,
    Xkt as re,
    aTn as A,
    dAt as j,
    dW as ie,
    eVn as M,
    fW as ae,
    iTn as N,
    jAt as P,
    lW as F,
    pAt as I,
    sAt as L,
    uAt as R,
    wW as z
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    as as B,
    is as V
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
import {
    a as oe,
    i as se,
    r as H,
    s as ce
} from "./6601bf01-iv0x4gtlp6n6914u.js";
import {
    a as U,
    n as W,
    r as le
} from "./4f866508-gm32302vy1rviel5.js";
import {
    n as ue,
    t as G
} from "./8be37a3d-bxl6zadwz56dmgjn.js";

function K(e, t) {
    let n = e.directConnectMetrics;
    if (!n || n.recordedStages.has(t)) return;
    n.recordedStages.add(t);
    let r = {
        stage: t
    };
    try {
        d.count(p.ECOSYSTEM, `ledger.direct_connect.stage`, r), t !== `started` && d.hist(p.ECOSYSTEM, `ledger.direct_connect.stage_latency_ms`, r, Math.max(0, Math.round(performance.now() - n.startedAtMs)))
    } catch {}
}

function q(e) {
    return Q(e) > 0
}

function J(e) {
    "use forget";
    let t = (0, ye.c)(38),
        n;
    t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
    let {
        conversation: i,
        connectorLinkProductSku: s
    } = n, l = s === void 0 ? N.CONNECTOR_SETTING : s, u = b(), d = S(), p;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (p = c(), t[2] = p) : p = t[2];
    let h = p,
        g = (0, Y.useRef)(null),
        _ = (0, Y.useRef)(!1),
        [y, x] = (0, Y.useState)(null),
        C = y != null,
        w;
    t[3] === l ? w = t[4] : (w = {
        productSku: l
    }, t[3] = l, t[4] = w);
    let T = B(w),
        E;
    t[5] === u ? E = t[6] : (E = e => {
        if (_.current) {
            let t = e instanceof r && e.isClientError() ? o(e)?.trim() : void 0;
            h.warning(t || u.formatMessage(X.connectionFailedToast))
        }
    }, t[5] = u, t[6] = E);
    let k = v(E),
        A;
    t[7] !== u || t[8] !== d ? (A = () => {
        h.success(u.formatMessage(X.repairSuccessToast)), d.invalidateQueries({
            queryKey: O,
            refetchType: `all`
        }).catch(ve)
    }, t[7] = u, t[8] = d, t[9] = A) : A = t[9];
    let M = A,
        P;
    t[10] !== i || t[11] !== T || t[12] !== M || t[13] !== u || t[14] !== d || t[15] !== k ? (P = async (e, t) => {
        let {
            accountLinkingContext: n,
            autoStartOauthLinkId: r,
            onConnectionConfirmed: a,
            onSuccess: o,
            prepareConnectorLink: s
        } = e ?? {}, c = () => g.current === t && !t.signal.aborted, l = !1, p, v, y, b = !1, S = !1, C = !1, w, E = () => {
            w != null && (window.clearTimeout(w), w = void 0)
        }, D = () => {
            E(), !(!S || !i) && (S = !1, m(() => Q.set(i, _e)))
        }, A = () => {
            S || !i || !_.current || !v || r || (S = !0, m(() => Q.set(i, ge)), C || (C = !0, v.finally(D)))
        }, N = () => {
            l = !0, K(t, `connection_confirmed`), E(), _.current && a?.(), p?.()
        }, P, F, L = new AbortController, R = async () => {
            f(u.formatMessage(ie));
            let e = t.linkingAttempt.context;
            I(e, `plaid_link_requested`);
            try {
                let n = await re({
                    ...r ? {
                        link_id: r
                    } : {},
                    flow_id: e.flowId,
                    native_android: !1,
                    native_ios: !1
                }, t.signal);
                return typeof n.token == `string` && I(e, `plaid_token_ready`), n
            } catch (n) {
                let r = n;
                throw t.signal.aborted ? t.didTimeOut || t.linkingAttempt.recordCancellation() : I(e, `plaid_link_request_failed`), r
            }
        }, z = (i, a) => {
            if (typeof i.token != `string`) throw Error(`Ledger OAuth response did not include a Link token`);
            return {
                ...n ? {
                    accountLinkingContext: n
                } : {},
                trackingContext: t.linkingAttempt.context,
                canOpen: async () => await a && c(),
                beforeOpen: async () => {
                    if (n) return e?.beforeOpen && !await e.beforeOpen() ? !1 : (K(t, `link_ready`), !0);
                    let a = r == null && d.getQueryData(O) != null ? await U(d) : void 0;
                    return e?.beforeOpen && !await e.beforeOpen() ? !1 : (K(t, `link_ready`), y = () => ue(i.oauth_state_id, d, {
                        onConnectionConfirmed: () => {
                            l || N()
                        },
                        onTimedOut: () => {
                            b = !0
                        },
                        signal: L.signal,
                        linksBeforeLinking: a
                    }).catch(he), v = y(), !0)
                },
                linkToken: i.token,
                onOpen: () => {
                    t.hasOpenedPlaid = !0, I(t.linkingAttempt.context, `plaid_open`), x(null)
                },
                onReady: () => I(t.linkingAttempt.context, `plaid_sdk_ready`),
                oauthStateId: i.oauth_state_id,
                signal: t.signal,
                startupTimeoutSignal: t.startupTimeoutController.signal
            }
        };
        if (s) {
            let e = await s(c, t.signal, async () => {
                x({
                    oauthLinkId: r
                }), P = await R(), c() && (F = await ce(z(P, Promise.resolve(!0))))
            }, t.linkingAttempt.context);
            if (!c() || !e) return;
            x({
                oauthLinkId: r
            })
        }
        let B = P ?? await R();
        if (!c()) return;
        if (typeof B.token != `string`) throw Error(`Ledger OAuth response did not include a Link token`);
        let V = s ? Promise.resolve(!0) : ee(t.linkingAttempt.context, e => T(te, {
            ...e,
            signal: t.signal
        })).then(me);
        V.catch(pe);
        let H = F ? await F.open() : await oe(z(B, V));
        if (H.type === `exited` && t.signal.aborted) {
            L.abort();
            return
        }
        if (se(H)) throw I(t.linkingAttempt.context, `link_failed`), L.abort(), Error(`Plaid Link failed to launch`);
        if (H.type === `exited`) {
            if (I(t.linkingAttempt.context, `plaid_exit`), (H.plaidExitStatus === `failed` || H.plaidErrorCode) && H.plaidErrorCode !== `launch_cancelled` && H.plaidErrorCode !== `presentation_dismissed` ? I(t.linkingAttempt.context, `link_failed`) : H.plaidErrorCode !== `presentation_dismissed` && t.linkingAttempt.recordCancellation(), e?.onExit?.(), n) {
                if (L.abort(), H.plaidErrorCode && H.plaidErrorCode !== `launch_cancelled` && H.plaidErrorCode !== `presentation_dismissed`) throw Error(`Plaid Link exited with an error`);
                return
            }
            if (H.plaidErrorCode === `launch_cancelled`) {
                L.abort();
                return
            }
            return p = A, l ? A() : H.plaidErrorCode === `presentation_dismissed` && (A(), S && (w = window.setTimeout(() => {
                w = void 0, l || D()
            }, xe))), {
                confirmation: v?.then(e => {
                    l && !e && k()
                })
            }
        }
        if (t.didTimeOut || !j(t.linkingAttempt.context)) {
            L.abort();
            return
        }
        return I(t.linkingAttempt.context, `plaid_success`), n && o && c() && (x({
            isFinishing: !0
        }), f(u.formatMessage(ae))), b && !L.signal.aborted && j(t.linkingAttempt.context) && (v = y?.()), A(), await ne({
            oauthStateId: B.oauth_state_id,
            linkToken: B.token,
            publicToken: H.publicToken,
            trackingContext: t.linkingAttempt.context
        }), o && c() && await Promise.resolve().then(() => o(c, t.signal)).then(e => {
            if (e === !1 && c()) throw Error(`Ledger onboarding handoff did not start`)
        }).catch(async e => {
            throw n && c() && await U(d).catch(fe), e
        }), {
            confirmation: v?.then(e => {
                _.current && (e ? r ? M() : h.success(u.formatMessage(X.accountConnectedToast)) : k())
            })
        }
    }, t[10] = i, t[11] = T, t[12] = M, t[13] = u, t[14] = d, t[15] = k, t[16] = P) : P = t[16];
    let F = P,
        R;
    t[17] !== C || t[18] !== y?.isAwaitingConnectorConsent || t[19] !== y?.isFinishing || t[20] !== k ? (R = () => {
        if (!C || y?.isAwaitingConnectorConsent || y?.isFinishing) return;
        let e = g.current;
        if (!e) return;
        let t = window.setTimeout(() => {
            g.current === e && (g.current = null, e.didTimeOut = !0, I(e.linkingAttempt.context, `link_failed`), e.startupTimeoutController.abort(), e.controller.abort(), e.hasOpenedPlaid || e.linkingAttempt.finish(), x(null), k())
        }, be);
        return () => window.clearTimeout(t)
    }, t[17] = C, t[18] = y?.isAwaitingConnectorConsent, t[19] = y?.isFinishing, t[20] = k, t[21] = R) : R = t[21];
    let z = y?.isAwaitingConnectorConsent,
        V = y?.isFinishing,
        H;
    t[22] !== C || t[23] !== k || t[24] !== V || t[25] !== z ? (H = [C, z, V, k], t[22] = C, t[23] = k, t[24] = V, t[25] = z, t[26] = H) : H = t[26], (0, Y.useEffect)(R, H);
    let W, G;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (W = () => (_.current = !0, () => {
        _.current = !1;
        let e = g.current;
        g.current = null, e?.controller.abort(), e && !e.hasOpenedPlaid && (e.linkingAttempt.recordCancellation(), e.linkingAttempt.finish())
    }), G = [], t[27] = W, t[28] = G) : (W = t[27], G = t[28]), a(W, G);
    let q;
    t[29] !== l || t[30] !== d || t[31] !== F || t[32] !== k ? (q = e => {
        if (!_.current || g.current || e?.signal?.aborted) return e?.linkingAttempt?.cancelPending(), !1;
        let t = e?.linkingAttempt ?? L(e?.trackingContext, e?.autoStartOauthLinkId ? `unknown` : `direct_plaid`);
        if (!t?.claim()) return !1;
        e = {
            ...e,
            trackingContext: t.context,
            linkingAttempt: t
        };
        let n = new AbortController,
            i = {
                linkingAttempt: t,
                hasOpenedPlaid: !1,
                didTimeOut: !1,
                controller: n,
                startupTimeoutController: new AbortController,
                directConnectMetrics: l === N.JIT_PLUGIN ? {
                    recordedStages: new Set,
                    startedAtMs: performance.now()
                } : void 0,
                signal: e?.signal && !e.accountLinkingContext ? D([n.signal, e.signal]) : n.signal
            };
        return g.current = i, K(i, `started`), x({
            oauthLinkId: e?.autoStartOauthLinkId,
            ...e?.prepareConnectorLink ? {
                isAwaitingConnectorConsent: !0
            } : {}
        }), F(e, i).catch(e => {
            i.signal.aborted || (e instanceof r && e.status === 409 && e.code === Se && le(d), g.current === i && k(e))
        }).finally(() => {
            i.signal.aborted && !i.hasOpenedPlaid && !i.didTimeOut && i.linkingAttempt.recordCancellation(), i.controller.abort(), i.linkingAttempt.finish(), g.current === i && (g.current = null, x(null))
        }).then(de).finally(() => e?.onSettled?.()), !0
    }, t[29] = l, t[30] = d, t[31] = F, t[32] = k, t[33] = q) : q = t[33];
    let J = v(q),
        Z = y?.oauthLinkId,
        $;
    return t[34] !== C || t[35] !== J || t[36] !== Z ? ($ = {
        isInitializing: C,
        loadingOauthLinkId: Z,
        start: J
    }, t[34] = C, t[35] = J, t[36] = Z, t[37] = $) : $ = t[37], $
}

function de(e) {
    return e?.confirmation
}

function fe() {}

function pe() {}

function me(e) {
    return e?.auth_status === `ACTIVE`
}

function he() {
    return !1
}

function ge(e) {
    return e + 1
}

function _e(e) {
    return e - 1
}

function ve() {}
var ye, Y, be, xe, Se, X, Z, Q, $ = e((() => {
    ye = w(), V(), g(), H(), P(), k(), W(), G(), F(), A(), h(), y(), M(), s(), _(), u(), i(), R(), z(), T(), Y = t(x()), E(), be = 3e4, xe = 5e3, Se = `stale_plaid_item`, X = C({
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
    }), Z = X.connectionFailedToast, Q = n(e => l(0))
}));
export {
    J as i, q as n, Z as r, $ as t
};
//# sourceMappingURL=2bed0ed0-ipxxzaglcj882wd4.js.map