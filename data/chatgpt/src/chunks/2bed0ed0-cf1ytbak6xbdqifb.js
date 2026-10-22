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
} from "./4813494d-d7xm9wsvhdfbag9a.js";
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
    Gkt as ne,
    IVn as D,
    Jkt as O,
    LTn as k,
    LVn as A,
    Mkt as j,
    NAt as M,
    OW as N,
    Qkt as re,
    RTn as P,
    fAt as F,
    gW as ie,
    hAt as I,
    hW as ae,
    lAt as L,
    pAt as oe,
    pW as R
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    as as z,
    os as B
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
import {
    a as se,
    i as ce,
    r as V,
    s as le
} from "./6601bf01-cv017wvicdz2f7ow.js";
import {
    a as H,
    n as U,
    r as ue
} from "./4f866508-6ga8e9nxmlp2qc0c.js";
import {
    n as de,
    t as W
} from "./8be37a3d-q7feo4k26f3z36kv.js";

function G(e, t) {
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

function K(e) {
    return Q(e) > 0
}

function q(e) {
    "use forget";
    let t = (0, J.c)(38),
        r;
    t[0] === e ? r = t[1] : (r = e === void 0 ? {} : e, t[0] = e, t[1] = r);
    let {
        conversation: i,
        connectorLinkProductSku: a
    } = r, o = a === void 0 ? k.CONNECTOR_SETTING : a, c = E(), l = x(), p;
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
    let w = B(C),
        T;
    t[5] === c ? T = t[6] : (T = e => {
        if (g.current) {
            let t = e instanceof d && e.isClientError() ? f(e)?.trim() : void 0;
            m.warning(t || c.formatMessage(X.connectionFailedToast))
        }
    }, t[5] = c, t[6] = T);
    let O = v(T),
        A;
    t[7] !== c || t[8] !== l ? (A = () => {
        m.success(c.formatMessage(X.repairSuccessToast)), l.invalidateQueries({
            queryKey: j,
            refetchType: `all`
        }).catch(ye)
    }, t[7] = c, t[8] = l, t[9] = A) : A = t[9];
    let M = A,
        N;
    t[10] !== i || t[11] !== w || t[12] !== M || t[13] !== c || t[14] !== l || t[15] !== O ? (N = async (e, t) => {
        let {
            accountLinkingContext: r,
            autoStartOauthLinkId: a,
            onConnectionConfirmed: o,
            onSuccess: s,
            prepareConnectorLink: u
        } = e ?? {}, d = () => h.current === t && !t.signal.aborted, f = !1, p, v, y, x = !1, S = !1, C = !1, T, E = () => {
            T != null && (window.clearTimeout(T), T = void 0)
        }, D = () => {
            E(), !(!S || !i) && (S = !1, n(() => Q.set(i, ve)))
        }, k = () => {
            S || !i || !g.current || !v || a || (S = !0, n(() => Q.set(i, _e)), C || (C = !0, v.finally(D)))
        }, A = () => {
            f = !0, G(t, `connection_confirmed`), E(), g.current && o?.(), p?.()
        }, N, P, F = new AbortController, L = async () => {
            _(c.formatMessage(ae));
            let e = t.linkingAttempt.context;
            I(e, `plaid_link_requested`);
            try {
                let n = await re({
                    ...a ? {
                        link_id: a
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
        }, R = (n, i) => {
            if (typeof n.token != `string`) throw Error(`Ledger OAuth response did not include a Link token`);
            return {
                ...r ? {
                    accountLinkingContext: r
                } : {},
                trackingContext: t.linkingAttempt.context,
                canOpen: async () => await i && d(),
                beforeOpen: async () => {
                    if (r) return e?.beforeOpen && !await e.beforeOpen() ? !1 : (G(t, `link_ready`), !0);
                    let i = a == null && l.getQueryData(j) != null ? await H(l) : void 0;
                    return e?.beforeOpen && !await e.beforeOpen() ? !1 : (G(t, `link_ready`), y = () => de(n.oauth_state_id, l, {
                        onConnectionConfirmed: () => {
                            f || A()
                        },
                        onTimedOut: () => {
                            x = !0
                        },
                        signal: F.signal,
                        linksBeforeLinking: i
                    }).catch(ge), v = y(), !0)
                },
                linkToken: n.token,
                onOpen: () => {
                    t.hasOpenedPlaid = !0, I(t.linkingAttempt.context, `plaid_open`), b(null)
                },
                onReady: () => I(t.linkingAttempt.context, `plaid_sdk_ready`),
                oauthStateId: n.oauth_state_id,
                signal: t.signal,
                startupTimeoutSignal: t.startupTimeoutController.signal
            }
        };
        if (u) {
            let e = await u(d, t.signal, async () => {
                b({
                    oauthLinkId: a
                }), N = await L(), d() && (P = await le(R(N, Promise.resolve(!0))))
            }, t.linkingAttempt.context);
            if (!d() || !e) return;
            b({
                oauthLinkId: a
            })
        }
        let z = N ?? await L();
        if (!d()) return;
        if (typeof z.token != `string`) throw Error(`Ledger OAuth response did not include a Link token`);
        let B = u ? Promise.resolve(!0) : te(t.linkingAttempt.context, e => w(ee, {
            ...e,
            signal: t.signal
        })).then(he);
        B.catch(me);
        let V = P ? await P.open() : await se(R(z, B));
        if (V.type === `exited` && t.signal.aborted) {
            F.abort();
            return
        }
        if (ce(V)) throw I(t.linkingAttempt.context, `link_failed`), F.abort(), Error(`Plaid Link failed to launch`);
        if (V.type === `exited`) {
            if (I(t.linkingAttempt.context, `plaid_exit`), (V.plaidExitStatus === `failed` || V.plaidErrorCode) && V.plaidErrorCode !== `launch_cancelled` && V.plaidErrorCode !== `presentation_dismissed` ? I(t.linkingAttempt.context, `link_failed`) : V.plaidErrorCode !== `presentation_dismissed` && t.linkingAttempt.recordCancellation(), e?.onExit?.(), r) {
                if (F.abort(), V.plaidErrorCode && V.plaidErrorCode !== `launch_cancelled` && V.plaidErrorCode !== `presentation_dismissed`) throw Error(`Plaid Link exited with an error`);
                return
            }
            if (V.plaidErrorCode === `launch_cancelled`) {
                F.abort();
                return
            }
            return p = k, f ? k() : V.plaidErrorCode === `presentation_dismissed` && (k(), S && (T = window.setTimeout(() => {
                T = void 0, f || D()
            }, xe))), {
                confirmation: v?.then(e => {
                    f && !e && O()
                })
            }
        }
        if (t.didTimeOut || !oe(t.linkingAttempt.context)) {
            F.abort();
            return
        }
        return I(t.linkingAttempt.context, `plaid_success`), r && s && d() && (b({
            isFinishing: !0
        }), _(c.formatMessage(ie))), x && !F.signal.aborted && oe(t.linkingAttempt.context) && (v = y?.()), k(), await ne({
            oauthStateId: z.oauth_state_id,
            linkToken: z.token,
            publicToken: V.publicToken,
            trackingContext: t.linkingAttempt.context
        }), s && d() && await Promise.resolve().then(() => s(d, t.signal)).then(e => {
            if (e === !1 && d()) throw Error(`Ledger onboarding handoff did not start`)
        }).catch(async e => {
            throw r && d() && await H(l).catch(pe), e
        }), {
            confirmation: v?.then(e => {
                g.current && (e ? a ? M() : m.success(c.formatMessage(X.accountConnectedToast)) : O())
            })
        }
    }, t[10] = i, t[11] = w, t[12] = M, t[13] = c, t[14] = l, t[15] = O, t[16] = N) : N = t[16];
    let P = N,
        F;
    t[17] !== S || t[18] !== y?.isAwaitingConnectorConsent || t[19] !== y?.isFinishing || t[20] !== O ? (F = () => {
        if (!S || y?.isAwaitingConnectorConsent || y?.isFinishing) return;
        let e = h.current;
        if (!e) return;
        let t = window.setTimeout(() => {
            h.current === e && (h.current = null, e.didTimeOut = !0, I(e.linkingAttempt.context, `link_failed`), e.startupTimeoutController.abort(), e.controller.abort(), e.hasOpenedPlaid || e.linkingAttempt.finish(), b(null), O())
        }, be);
        return () => window.clearTimeout(t)
    }, t[17] = S, t[18] = y?.isAwaitingConnectorConsent, t[19] = y?.isFinishing, t[20] = O, t[21] = F) : F = t[21];
    let R = y?.isAwaitingConnectorConsent,
        z = y?.isFinishing,
        V;
    t[22] !== S || t[23] !== O || t[24] !== z || t[25] !== R ? (V = [S, R, z, O], t[22] = S, t[23] = O, t[24] = z, t[25] = R, t[26] = V) : V = t[26], (0, Y.useEffect)(F, V);
    let U, W;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (U = () => (g.current = !0, () => {
        g.current = !1;
        let e = h.current;
        h.current = null, e?.controller.abort(), e && !e.hasOpenedPlaid && (e.linkingAttempt.recordCancellation(), e.linkingAttempt.finish())
    }), W = [], t[27] = U, t[28] = W) : (U = t[27], W = t[28]), u(U, W);
    let K;
    t[29] !== o || t[30] !== l || t[31] !== P || t[32] !== O ? (K = e => {
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
                directConnectMetrics: o === k.JIT_PLUGIN ? {
                    recordedStages: new Set,
                    startedAtMs: performance.now()
                } : void 0,
                signal: e?.signal && !e.accountLinkingContext ? D([n.signal, e.signal]) : n.signal
            };
        return h.current = r, G(r, `started`), b({
            oauthLinkId: e?.autoStartOauthLinkId,
            ...e?.prepareConnectorLink ? {
                isAwaitingConnectorConsent: !0
            } : {}
        }), P(e, r).catch(e => {
            r.signal.aborted || (e instanceof d && e.status === 409 && e.code === Se && ue(l), h.current === r && O(e))
        }).finally(() => {
            r.signal.aborted && !r.hasOpenedPlaid && !r.didTimeOut && r.linkingAttempt.recordCancellation(), r.controller.abort(), r.linkingAttempt.finish(), h.current === r && (h.current = null, b(null))
        }).then(fe).finally(() => e?.onSettled?.()), !0
    }, t[29] = o, t[30] = l, t[31] = P, t[32] = O, t[33] = K) : K = t[33];
    let q = v(K),
        Z = y?.oauthLinkId,
        $;
    return t[34] !== S || t[35] !== q || t[36] !== Z ? ($ = {
        isInitializing: S,
        loadingOauthLinkId: Z,
        start: q
    }, t[34] = S, t[35] = q, t[36] = Z, t[37] = $) : $ = t[37], $
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
    J = T(), z(), p(), V(), M(), O(), U(), W(), R(), P(), r(), c(), A(), g(), h(), a(), o(), F(), N(), w(), Y = t(C()), S(), be = 3e4, xe = 5e3, Se = `stale_plaid_item`, X = b({
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
    q as i, K as n, Z as r, $ as t
};
//# sourceMappingURL=2bed0ed0-cf1ytbak6xbdqifb.js.map