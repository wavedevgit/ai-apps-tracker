import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as n,
    A8 as r,
    Art as i,
    CN as a,
    HN as o,
    IU as s,
    LU as c,
    R8 as l,
    UN as u,
    Yat as d,
    aot as f,
    fW as p,
    jrt as m,
    krt as h,
    tot as g,
    uW as _,
    wN as v,
    z8 as y
} from "./4813494d-r54yv6lv29x4ew99.js";
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
    DW as ee,
    FTn as O,
    Gkt as k,
    Hkt as te,
    NVn as A,
    OW as j,
    PTn as M,
    PVn as N,
    Ykt as ne,
    fAt as P,
    gW as re,
    hW as ie,
    kkt as F,
    lAt as I,
    oAt as L,
    pW as R,
    uAt as z,
    wAt as ae
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    as as B,
    os as V
} from "./8b34dbc2-bgocf3s6t6l67twq.js";
import {
    a as oe,
    i as se,
    r as H,
    s as ce
} from "./6601bf01-f5ybzgu81ekgtxe5.js";
import {
    a as U,
    n as W,
    r as le
} from "./4f866508-huwor60pksifjwy1.js";
import {
    n as ue,
    t as G
} from "./8be37a3d-lblq1xguw6bz0esx.js";

function K(e, t) {
    let n = e.directConnectMetrics;
    if (!n || n.recordedStages.has(t)) return;
    n.recordedStages.add(t);
    let r = {
        stage: t
    };
    try {
        i.count(m.ECOSYSTEM, `ledger.direct_connect.stage`, r), t !== `started` && i.hist(m.ECOSYSTEM, `ledger.direct_connect.stage_latency_ms`, r, Math.max(0, Math.round(performance.now() - n.startedAtMs)))
    } catch {}
}

function q(e) {
    return Q(e) > 0
}

function J(e) {
    "use forget";
    let t = (0, ye.c)(38),
        r;
    t[0] === e ? r = t[1] : (r = e === void 0 ? {} : e, t[0] = e, t[1] = r);
    let {
        conversation: i,
        connectorLinkProductSku: a
    } = r, o = a === void 0 ? M.CONNECTOR_SETTING : a, c = E(), l = x(), p;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (p = s(), t[2] = p) : p = t[2];
    let m = p,
        h = (0, Y.useRef)(null),
        g = (0, Y.useRef)(!1),
        [y, b] = (0, Y.useState)(null),
        S = y != null,
        C;
    t[3] === o ? C = t[4] : (C = {
        productSku: o
    }, t[3] = o, t[4] = C);
    let w = V(C),
        T;
    t[5] === c ? T = t[6] : (T = e => {
        if (g.current) {
            let t = e instanceof d && e.isClientError() ? f(e)?.trim() : void 0;
            m.warning(t || c.formatMessage(X.connectionFailedToast))
        }
    }, t[5] = c, t[6] = T);
    let D = v(T),
        O;
    t[7] !== c || t[8] !== l ? (O = () => {
        m.success(c.formatMessage(X.repairSuccessToast)), l.invalidateQueries({
            queryKey: F,
            refetchType: `all`
        }).catch(ve)
    }, t[7] = c, t[8] = l, t[9] = O) : O = t[9];
    let k = O,
        j;
    t[10] !== i || t[11] !== w || t[12] !== k || t[13] !== c || t[14] !== l || t[15] !== D ? (j = async (e, t) => {
        let {
            accountLinkingContext: r,
            autoStartOauthLinkId: a,
            onConnectionConfirmed: o,
            onSuccess: s,
            prepareConnectorLink: u
        } = e ?? {}, d = () => h.current === t && !t.signal.aborted, f = !1, p, v, y, x = !1, S = !1, C = !1, T, E = () => {
            T != null && (window.clearTimeout(T), T = void 0)
        }, O = () => {
            E(), !(!S || !i) && (S = !1, n(() => Q.set(i, _e)))
        }, A = () => {
            S || !i || !g.current || !v || a || (S = !0, n(() => Q.set(i, ge)), C || (C = !0, v.finally(O)))
        }, j = () => {
            f = !0, K(t, `connection_confirmed`), E(), g.current && o?.(), p?.()
        }, M, N, I = new AbortController, L = async () => {
            _(c.formatMessage(ie));
            let e = t.linkingAttempt.context;
            P(e, `plaid_link_requested`);
            try {
                let n = await ne({
                    ...a ? {
                        link_id: a
                    } : {},
                    flow_id: e.flowId,
                    native_android: !1,
                    native_ios: !1
                }, t.signal);
                return typeof n.token == `string` && P(e, `plaid_token_ready`), n
            } catch (n) {
                let r = n;
                throw t.signal.aborted ? t.didTimeOut || t.linkingAttempt.recordCancellation() : P(e, `plaid_link_request_failed`), r
            }
        }, R = (n, i) => {
            if (typeof n.token != `string`) throw Error(`Ledger OAuth response did not include a Link token`);
            return {
                ...r ? {
                    accountLinkingContext: r
                } : {},
                trackingContext: t.linkingAttempt.context,
                canOpen: async () => await i && d(),
                beforeOpen: async () => {
                    if (r) return e?.beforeOpen && !await e.beforeOpen() ? !1 : (K(t, `link_ready`), !0);
                    let i = a == null && l.getQueryData(F) != null ? await U(l) : void 0;
                    return e?.beforeOpen && !await e.beforeOpen() ? !1 : (K(t, `link_ready`), y = () => ue(n.oauth_state_id, l, {
                        onConnectionConfirmed: () => {
                            f || j()
                        },
                        onTimedOut: () => {
                            x = !0
                        },
                        signal: I.signal,
                        linksBeforeLinking: i
                    }).catch(he), v = y(), !0)
                },
                linkToken: n.token,
                onOpen: () => {
                    t.hasOpenedPlaid = !0, P(t.linkingAttempt.context, `plaid_open`), b(null)
                },
                onReady: () => P(t.linkingAttempt.context, `plaid_sdk_ready`),
                oauthStateId: n.oauth_state_id,
                signal: t.signal,
                startupTimeoutSignal: t.startupTimeoutController.signal
            }
        };
        if (u) {
            let e = await u(d, t.signal, async () => {
                b({
                    oauthLinkId: a
                }), M = await L(), d() && (N = await ce(R(M, Promise.resolve(!0))))
            }, t.linkingAttempt.context);
            if (!d() || !e) return;
            b({
                oauthLinkId: a
            })
        }
        let B = M ?? await L();
        if (!d()) return;
        if (typeof B.token != `string`) throw Error(`Ledger OAuth response did not include a Link token`);
        let V = u ? Promise.resolve(!0) : ee(t.linkingAttempt.context, e => w(ae, {
            ...e,
            signal: t.signal
        })).then(me);
        V.catch(pe);
        let H = N ? await N.open() : await oe(R(B, V));
        if (H.type === `exited` && t.signal.aborted) {
            I.abort();
            return
        }
        if (se(H)) throw P(t.linkingAttempt.context, `link_failed`), I.abort(), Error(`Plaid Link failed to launch`);
        if (H.type === `exited`) {
            if (P(t.linkingAttempt.context, `plaid_exit`), (H.plaidExitStatus === `failed` || H.plaidErrorCode) && H.plaidErrorCode !== `launch_cancelled` && H.plaidErrorCode !== `presentation_dismissed` ? P(t.linkingAttempt.context, `link_failed`) : H.plaidErrorCode !== `presentation_dismissed` && t.linkingAttempt.recordCancellation(), e?.onExit?.(), r) {
                if (I.abort(), H.plaidErrorCode && H.plaidErrorCode !== `launch_cancelled` && H.plaidErrorCode !== `presentation_dismissed`) throw Error(`Plaid Link exited with an error`);
                return
            }
            if (H.plaidErrorCode === `launch_cancelled`) {
                I.abort();
                return
            }
            return p = A, f ? A() : H.plaidErrorCode === `presentation_dismissed` && (A(), S && (T = window.setTimeout(() => {
                T = void 0, f || O()
            }, xe))), {
                confirmation: v?.then(e => {
                    f && !e && D()
                })
            }
        }
        if (t.didTimeOut || !z(t.linkingAttempt.context)) {
            I.abort();
            return
        }
        return P(t.linkingAttempt.context, `plaid_success`), r && s && d() && (b({
            isFinishing: !0
        }), _(c.formatMessage(re))), x && !I.signal.aborted && z(t.linkingAttempt.context) && (v = y?.()), A(), await te({
            oauthStateId: B.oauth_state_id,
            linkToken: B.token,
            publicToken: H.publicToken,
            trackingContext: t.linkingAttempt.context
        }), s && d() && await Promise.resolve().then(() => s(d, t.signal)).then(e => {
            if (e === !1 && d()) throw Error(`Ledger onboarding handoff did not start`)
        }).catch(async e => {
            throw r && d() && await U(l).catch(fe), e
        }), {
            confirmation: v?.then(e => {
                g.current && (e ? a ? k() : m.success(c.formatMessage(X.accountConnectedToast)) : D())
            })
        }
    }, t[10] = i, t[11] = w, t[12] = k, t[13] = c, t[14] = l, t[15] = D, t[16] = j) : j = t[16];
    let N = j,
        I;
    t[17] !== S || t[18] !== y?.isAwaitingConnectorConsent || t[19] !== y?.isFinishing || t[20] !== D ? (I = () => {
        if (!S || y?.isAwaitingConnectorConsent || y?.isFinishing) return;
        let e = h.current;
        if (!e) return;
        let t = window.setTimeout(() => {
            h.current === e && (h.current = null, e.didTimeOut = !0, P(e.linkingAttempt.context, `link_failed`), e.startupTimeoutController.abort(), e.controller.abort(), e.hasOpenedPlaid || e.linkingAttempt.finish(), b(null), D())
        }, be);
        return () => window.clearTimeout(t)
    }, t[17] = S, t[18] = y?.isAwaitingConnectorConsent, t[19] = y?.isFinishing, t[20] = D, t[21] = I) : I = t[21];
    let R = y?.isAwaitingConnectorConsent,
        B = y?.isFinishing,
        H;
    t[22] !== S || t[23] !== D || t[24] !== B || t[25] !== R ? (H = [S, R, B, D], t[22] = S, t[23] = D, t[24] = B, t[25] = R, t[26] = H) : H = t[26], (0, Y.useEffect)(I, H);
    let W, G;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (W = () => (g.current = !0, () => {
        g.current = !1;
        let e = h.current;
        h.current = null, e?.controller.abort(), e && !e.hasOpenedPlaid && (e.linkingAttempt.recordCancellation(), e.linkingAttempt.finish())
    }), G = [], t[27] = W, t[28] = G) : (W = t[27], G = t[28]), u(W, G);
    let q;
    t[29] !== o || t[30] !== l || t[31] !== N || t[32] !== D ? (q = e => {
        if (!g.current || h.current || e?.signal?.aborted) return e?.linkingAttempt?.cancelPending(), !1;
        let t = e?.linkingAttempt ?? L(e?.trackingContext, e?.autoStartOauthLinkId ? `unknown` : `direct_plaid`);
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
                directConnectMetrics: o === M.JIT_PLUGIN ? {
                    recordedStages: new Set,
                    startedAtMs: performance.now()
                } : void 0,
                signal: e?.signal && !e.accountLinkingContext ? A([n.signal, e.signal]) : n.signal
            };
        return h.current = r, K(r, `started`), b({
            oauthLinkId: e?.autoStartOauthLinkId,
            ...e?.prepareConnectorLink ? {
                isAwaitingConnectorConsent: !0
            } : {}
        }), N(e, r).catch(e => {
            r.signal.aborted || (e instanceof d && e.status === 409 && e.code === Se && le(l), h.current === r && D(e))
        }).finally(() => {
            r.signal.aborted && !r.hasOpenedPlaid && !r.didTimeOut && r.linkingAttempt.recordCancellation(), r.controller.abort(), r.linkingAttempt.finish(), h.current === r && (h.current = null, b(null))
        }).then(de).finally(() => e?.onSettled?.()), !0
    }, t[29] = o, t[30] = l, t[31] = N, t[32] = D, t[33] = q) : q = t[33];
    let J = v(q),
        Z = y?.oauthLinkId,
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
    ye = T(), B(), p(), H(), D(), k(), W(), G(), R(), O(), r(), c(), N(), g(), h(), a(), o(), I(), j(), w(), Y = t(C()), S(), be = 3e4, xe = 5e3, Se = `stale_plaid_item`, X = b({
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
    }), Z = X.connectionFailedToast, Q = y(e => l(0))
}));
export {
    J as i, q as n, Z as r, $ as t
};
//# sourceMappingURL=2bed0ed0-of896oodf7uyt6yk.js.map