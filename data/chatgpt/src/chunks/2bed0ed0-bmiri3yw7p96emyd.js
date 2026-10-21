import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CN as n,
    Drt as r,
    Ert as i,
    HN as a,
    IU as o,
    Kat as s,
    L8 as c,
    LU as l,
    Ort as u,
    Qat as d,
    R8 as f,
    UN as p,
    fW as m,
    k5 as h,
    k8 as g,
    not as _,
    uW as v,
    wN as y
} from "./4813494d-t80q9ew944ej0mgk.js";
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
    AAt as D,
    DW as O,
    EW as ee,
    Gkt as k,
    Hkt as te,
    Ykt as ne,
    fAt as A,
    fW as j,
    gTn as M,
    hTn as N,
    hVn as P,
    hW as re,
    kkt as F,
    lAt as I,
    mVn as L,
    mW as ie,
    oAt as R,
    uAt as z,
    wAt as ae
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    as as B,
    is as V
} from "./8b34dbc2-egl8cz04n8nmlktg.js";
import {
    a as oe,
    i as se,
    r as H,
    s as ce
} from "./6601bf01-ovtszm4jx4jinax0.js";
import {
    a as U,
    n as W,
    r as le
} from "./4f866508-fikfrp15mv2bsf0c.js";
import {
    n as ue,
    t as G
} from "./8be37a3d-n72rb8i43u3ec6z4.js";

function K(e, t) {
    let n = e.directConnectMetrics;
    if (!n || n.recordedStages.has(t)) return;
    n.recordedStages.add(t);
    let i = {
        stage: t
    };
    try {
        r.count(u.ECOSYSTEM, `ledger.direct_connect.stage`, i), t !== `started` && r.hist(u.ECOSYSTEM, `ledger.direct_connect.stage_latency_ms`, i, Math.max(0, Math.round(performance.now() - n.startedAtMs)))
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
        conversation: r,
        connectorLinkProductSku: i
    } = n, a = i === void 0 ? N.CONNECTOR_SETTING : i, c = E(), l = x(), u;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (u = o(), t[2] = u) : u = t[2];
    let d = u,
        f = (0, Y.useRef)(null),
        m = (0, Y.useRef)(!1),
        [g, b] = (0, Y.useState)(null),
        S = g != null,
        C;
    t[3] === a ? C = t[4] : (C = {
        productSku: a
    }, t[3] = a, t[4] = C);
    let w = B(C),
        T;
    t[5] === c ? T = t[6] : (T = e => {
        if (m.current) {
            let t = e instanceof s && e.isClientError() ? _(e)?.trim() : void 0;
            d.warning(t || c.formatMessage(X.connectionFailedToast))
        }
    }, t[5] = c, t[6] = T);
    let D = y(T),
        O;
    t[7] !== c || t[8] !== l ? (O = () => {
        d.success(c.formatMessage(X.repairSuccessToast)), l.invalidateQueries({
            queryKey: F,
            refetchType: `all`
        }).catch(ve)
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
        } = e ?? {}, u = () => f.current === t && !t.signal.aborted, p = !1, g, _, y, x = !1, S = !1, C = !1, T, E = () => {
            T != null && (window.clearTimeout(T), T = void 0)
        }, O = () => {
            E(), !(!S || !r) && (S = !1, h(() => Q.set(r, _e)))
        }, j = () => {
            S || !r || !m.current || !_ || i || (S = !0, h(() => Q.set(r, ge)), C || (C = !0, _.finally(O)))
        }, M = () => {
            p = !0, K(t, `connection_confirmed`), E(), m.current && a?.(), g?.()
        }, N, P, I = new AbortController, L = async () => {
            v(c.formatMessage(ie));
            let e = t.linkingAttempt.context;
            A(e, `plaid_link_requested`);
            try {
                let n = await ne({
                    ...i ? {
                        link_id: i
                    } : {},
                    flow_id: e.flowId,
                    native_android: !1,
                    native_ios: !1
                }, t.signal);
                return typeof n.token == `string` && A(e, `plaid_token_ready`), n
            } catch (n) {
                let r = n;
                throw t.signal.aborted ? t.didTimeOut || t.linkingAttempt.recordCancellation() : A(e, `plaid_link_request_failed`), r
            }
        }, R = (r, a) => {
            if (typeof r.token != `string`) throw Error(`Ledger OAuth response did not include a Link token`);
            return {
                ...n ? {
                    accountLinkingContext: n
                } : {},
                trackingContext: t.linkingAttempt.context,
                canOpen: async () => await a && u(),
                beforeOpen: async () => {
                    if (n) return e?.beforeOpen && !await e.beforeOpen() ? !1 : (K(t, `link_ready`), !0);
                    let a = i == null && l.getQueryData(F) != null ? await U(l) : void 0;
                    return e?.beforeOpen && !await e.beforeOpen() ? !1 : (K(t, `link_ready`), y = () => ue(r.oauth_state_id, l, {
                        onConnectionConfirmed: () => {
                            p || M()
                        },
                        onTimedOut: () => {
                            x = !0
                        },
                        signal: I.signal,
                        linksBeforeLinking: a
                    }).catch(he), _ = y(), !0)
                },
                linkToken: r.token,
                onOpen: () => {
                    t.hasOpenedPlaid = !0, A(t.linkingAttempt.context, `plaid_open`), b(null)
                },
                onReady: () => A(t.linkingAttempt.context, `plaid_sdk_ready`),
                oauthStateId: r.oauth_state_id,
                signal: t.signal,
                startupTimeoutSignal: t.startupTimeoutController.signal
            }
        };
        if (s) {
            let e = await s(u, t.signal, async () => {
                b({
                    oauthLinkId: i
                }), N = await L(), u() && (P = await ce(R(N, Promise.resolve(!0))))
            }, t.linkingAttempt.context);
            if (!u() || !e) return;
            b({
                oauthLinkId: i
            })
        }
        let B = N ?? await L();
        if (!u()) return;
        if (typeof B.token != `string`) throw Error(`Ledger OAuth response did not include a Link token`);
        let V = s ? Promise.resolve(!0) : ee(t.linkingAttempt.context, e => w(ae, {
            ...e,
            signal: t.signal
        })).then(me);
        V.catch(pe);
        let H = P ? await P.open() : await oe(R(B, V));
        if (H.type === `exited` && t.signal.aborted) {
            I.abort();
            return
        }
        if (se(H)) throw A(t.linkingAttempt.context, `link_failed`), I.abort(), Error(`Plaid Link failed to launch`);
        if (H.type === `exited`) {
            if (A(t.linkingAttempt.context, `plaid_exit`), (H.plaidExitStatus === `failed` || H.plaidErrorCode) && H.plaidErrorCode !== `launch_cancelled` && H.plaidErrorCode !== `presentation_dismissed` ? A(t.linkingAttempt.context, `link_failed`) : H.plaidErrorCode !== `presentation_dismissed` && t.linkingAttempt.recordCancellation(), e?.onExit?.(), n) {
                if (I.abort(), H.plaidErrorCode && H.plaidErrorCode !== `launch_cancelled` && H.plaidErrorCode !== `presentation_dismissed`) throw Error(`Plaid Link exited with an error`);
                return
            }
            if (H.plaidErrorCode === `launch_cancelled`) {
                I.abort();
                return
            }
            return g = j, p ? j() : H.plaidErrorCode === `presentation_dismissed` && (j(), S && (T = window.setTimeout(() => {
                T = void 0, p || O()
            }, xe))), {
                confirmation: _?.then(e => {
                    p && !e && D()
                })
            }
        }
        if (t.didTimeOut || !z(t.linkingAttempt.context)) {
            I.abort();
            return
        }
        return A(t.linkingAttempt.context, `plaid_success`), n && o && u() && (b({
            isFinishing: !0
        }), v(c.formatMessage(re))), x && !I.signal.aborted && z(t.linkingAttempt.context) && (_ = y?.()), j(), await te({
            oauthStateId: B.oauth_state_id,
            linkToken: B.token,
            publicToken: H.publicToken,
            trackingContext: t.linkingAttempt.context
        }), o && u() && await Promise.resolve().then(() => o(u, t.signal)).then(e => {
            if (e === !1 && u()) throw Error(`Ledger onboarding handoff did not start`)
        }).catch(async e => {
            throw n && u() && await U(l).catch(fe), e
        }), {
            confirmation: _?.then(e => {
                m.current && (e ? i ? k() : d.success(c.formatMessage(X.accountConnectedToast)) : D())
            })
        }
    }, t[10] = r, t[11] = w, t[12] = k, t[13] = c, t[14] = l, t[15] = D, t[16] = j) : j = t[16];
    let M = j,
        P;
    t[17] !== S || t[18] !== g?.isAwaitingConnectorConsent || t[19] !== g?.isFinishing || t[20] !== D ? (P = () => {
        if (!S || g?.isAwaitingConnectorConsent || g?.isFinishing) return;
        let e = f.current;
        if (!e) return;
        let t = window.setTimeout(() => {
            f.current === e && (f.current = null, e.didTimeOut = !0, A(e.linkingAttempt.context, `link_failed`), e.startupTimeoutController.abort(), e.controller.abort(), e.hasOpenedPlaid || e.linkingAttempt.finish(), b(null), D())
        }, be);
        return () => window.clearTimeout(t)
    }, t[17] = S, t[18] = g?.isAwaitingConnectorConsent, t[19] = g?.isFinishing, t[20] = D, t[21] = P) : P = t[21];
    let I = g?.isAwaitingConnectorConsent,
        V = g?.isFinishing,
        H;
    t[22] !== S || t[23] !== D || t[24] !== V || t[25] !== I ? (H = [S, I, V, D], t[22] = S, t[23] = D, t[24] = V, t[25] = I, t[26] = H) : H = t[26], (0, Y.useEffect)(P, H);
    let W, G;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (W = () => (m.current = !0, () => {
        m.current = !1;
        let e = f.current;
        f.current = null, e?.controller.abort(), e && !e.hasOpenedPlaid && (e.linkingAttempt.recordCancellation(), e.linkingAttempt.finish())
    }), G = [], t[27] = W, t[28] = G) : (W = t[27], G = t[28]), p(W, G);
    let q;
    t[29] !== a || t[30] !== l || t[31] !== M || t[32] !== D ? (q = e => {
        if (!m.current || f.current || e?.signal?.aborted) return e?.linkingAttempt?.cancelPending(), !1;
        let t = e?.linkingAttempt ?? R(e?.trackingContext, e?.autoStartOauthLinkId ? `unknown` : `direct_plaid`);
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
                directConnectMetrics: a === N.JIT_PLUGIN ? {
                    recordedStages: new Set,
                    startedAtMs: performance.now()
                } : void 0,
                signal: e?.signal && !e.accountLinkingContext ? L([n.signal, e.signal]) : n.signal
            };
        return f.current = r, K(r, `started`), b({
            oauthLinkId: e?.autoStartOauthLinkId,
            ...e?.prepareConnectorLink ? {
                isAwaitingConnectorConsent: !0
            } : {}
        }), M(e, r).catch(e => {
            r.signal.aborted || (e instanceof s && e.status === 409 && e.code === Se && le(l), f.current === r && D(e))
        }).finally(() => {
            r.signal.aborted && !r.hasOpenedPlaid && !r.didTimeOut && r.linkingAttempt.recordCancellation(), r.controller.abort(), r.linkingAttempt.finish(), f.current === r && (f.current = null, b(null))
        }).then(de).finally(() => e?.onSettled?.()), !0
    }, t[29] = a, t[30] = l, t[31] = M, t[32] = D, t[33] = q) : q = t[33];
    let J = y(q),
        Z = g?.oauthLinkId,
        $;
    return t[34] !== S || t[35] !== J || t[36] !== Z ? ($ = {
        isInitializing: S,
        loadingOauthLinkId: Z,
        start: J
    }, t[34] = S, t[35] = J, t[36] = Z, t[37] = $) : $ = t[37], $
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
    ye = T(), V(), m(), H(), D(), k(), W(), G(), j(), M(), g(), l(), P(), d(), i(), n(), a(), I(), O(), w(), Y = t(C()), S(), be = 3e4, xe = 5e3, Se = `stale_plaid_item`, X = b({
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
    }), Z = X.connectionFailedToast, Q = f(e => c(0))
}));
export {
    J as i, q as n, Z as r, $ as t
};
//# sourceMappingURL=2bed0ed0-bmiri3yw7p96emyd.js.map