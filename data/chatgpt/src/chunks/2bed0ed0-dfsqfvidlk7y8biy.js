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
} from "./4813494d-itnrgnth03y1sm9d.js";
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
    _Tn as A,
    _Vn as j,
    fAt as M,
    fW as N,
    gVn as P,
    hW as re,
    kkt as F,
    lAt as I,
    mW as ie,
    oAt as L,
    uAt as ae,
    vTn as R,
    wAt as oe
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    as as z,
    is as B
} from "./8b34dbc2-m4883pai3e8fx8q6.js";
import {
    a as se,
    i as ce,
    r as V,
    s as le
} from "./6601bf01-pebta4n56bbdhhr3.js";
import {
    a as H,
    n as U,
    r as ue
} from "./4f866508-y8f5czon24a6giq7.js";
import {
    n as de,
    t as W
} from "./8be37a3d-cwij0j2151bcd497.js";

function G(e, t) {
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

function K(e) {
    return Q(e) > 0
}

function q(e) {
    "use forget";
    let t = (0, J.c)(38),
        n;
    t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
    let {
        conversation: r,
        connectorLinkProductSku: i
    } = n, a = i === void 0 ? A.CONNECTOR_SETTING : i, c = E(), l = x(), u;
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
    let w = z(C),
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
        }).catch(ye)
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
            E(), !(!S || !r) && (S = !1, h(() => Q.set(r, ve)))
        }, A = () => {
            S || !r || !m.current || !_ || i || (S = !0, h(() => Q.set(r, _e)), C || (C = !0, _.finally(O)))
        }, j = () => {
            p = !0, G(t, `connection_confirmed`), E(), m.current && a?.(), g?.()
        }, N, P, I = new AbortController, L = async () => {
            v(c.formatMessage(ie));
            let e = t.linkingAttempt.context;
            M(e, `plaid_link_requested`);
            try {
                let n = await ne({
                    ...i ? {
                        link_id: i
                    } : {},
                    flow_id: e.flowId,
                    native_android: !1,
                    native_ios: !1
                }, t.signal);
                return typeof n.token == `string` && M(e, `plaid_token_ready`), n
            } catch (n) {
                let r = n;
                throw t.signal.aborted ? t.didTimeOut || t.linkingAttempt.recordCancellation() : M(e, `plaid_link_request_failed`), r
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
                    if (n) return e?.beforeOpen && !await e.beforeOpen() ? !1 : (G(t, `link_ready`), !0);
                    let a = i == null && l.getQueryData(F) != null ? await H(l) : void 0;
                    return e?.beforeOpen && !await e.beforeOpen() ? !1 : (G(t, `link_ready`), y = () => de(r.oauth_state_id, l, {
                        onConnectionConfirmed: () => {
                            p || j()
                        },
                        onTimedOut: () => {
                            x = !0
                        },
                        signal: I.signal,
                        linksBeforeLinking: a
                    }).catch(ge), _ = y(), !0)
                },
                linkToken: r.token,
                onOpen: () => {
                    t.hasOpenedPlaid = !0, M(t.linkingAttempt.context, `plaid_open`), b(null)
                },
                onReady: () => M(t.linkingAttempt.context, `plaid_sdk_ready`),
                oauthStateId: r.oauth_state_id,
                signal: t.signal,
                startupTimeoutSignal: t.startupTimeoutController.signal
            }
        };
        if (s) {
            let e = await s(u, t.signal, async () => {
                b({
                    oauthLinkId: i
                }), N = await L(), u() && (P = await le(R(N, Promise.resolve(!0))))
            }, t.linkingAttempt.context);
            if (!u() || !e) return;
            b({
                oauthLinkId: i
            })
        }
        let z = N ?? await L();
        if (!u()) return;
        if (typeof z.token != `string`) throw Error(`Ledger OAuth response did not include a Link token`);
        let B = s ? Promise.resolve(!0) : ee(t.linkingAttempt.context, e => w(oe, {
            ...e,
            signal: t.signal
        })).then(he);
        B.catch(me);
        let V = P ? await P.open() : await se(R(z, B));
        if (V.type === `exited` && t.signal.aborted) {
            I.abort();
            return
        }
        if (ce(V)) throw M(t.linkingAttempt.context, `link_failed`), I.abort(), Error(`Plaid Link failed to launch`);
        if (V.type === `exited`) {
            if (M(t.linkingAttempt.context, `plaid_exit`), (V.plaidExitStatus === `failed` || V.plaidErrorCode) && V.plaidErrorCode !== `launch_cancelled` && V.plaidErrorCode !== `presentation_dismissed` ? M(t.linkingAttempt.context, `link_failed`) : V.plaidErrorCode !== `presentation_dismissed` && t.linkingAttempt.recordCancellation(), e?.onExit?.(), n) {
                if (I.abort(), V.plaidErrorCode && V.plaidErrorCode !== `launch_cancelled` && V.plaidErrorCode !== `presentation_dismissed`) throw Error(`Plaid Link exited with an error`);
                return
            }
            if (V.plaidErrorCode === `launch_cancelled`) {
                I.abort();
                return
            }
            return g = A, p ? A() : V.plaidErrorCode === `presentation_dismissed` && (A(), S && (T = window.setTimeout(() => {
                T = void 0, p || O()
            }, xe))), {
                confirmation: _?.then(e => {
                    p && !e && D()
                })
            }
        }
        if (t.didTimeOut || !ae(t.linkingAttempt.context)) {
            I.abort();
            return
        }
        return M(t.linkingAttempt.context, `plaid_success`), n && o && u() && (b({
            isFinishing: !0
        }), v(c.formatMessage(re))), x && !I.signal.aborted && ae(t.linkingAttempt.context) && (_ = y?.()), A(), await te({
            oauthStateId: z.oauth_state_id,
            linkToken: z.token,
            publicToken: V.publicToken,
            trackingContext: t.linkingAttempt.context
        }), o && u() && await Promise.resolve().then(() => o(u, t.signal)).then(e => {
            if (e === !1 && u()) throw Error(`Ledger onboarding handoff did not start`)
        }).catch(async e => {
            throw n && u() && await H(l).catch(pe), e
        }), {
            confirmation: _?.then(e => {
                m.current && (e ? i ? k() : d.success(c.formatMessage(X.accountConnectedToast)) : D())
            })
        }
    }, t[10] = r, t[11] = w, t[12] = k, t[13] = c, t[14] = l, t[15] = D, t[16] = j) : j = t[16];
    let N = j,
        I;
    t[17] !== S || t[18] !== g?.isAwaitingConnectorConsent || t[19] !== g?.isFinishing || t[20] !== D ? (I = () => {
        if (!S || g?.isAwaitingConnectorConsent || g?.isFinishing) return;
        let e = f.current;
        if (!e) return;
        let t = window.setTimeout(() => {
            f.current === e && (f.current = null, e.didTimeOut = !0, M(e.linkingAttempt.context, `link_failed`), e.startupTimeoutController.abort(), e.controller.abort(), e.hasOpenedPlaid || e.linkingAttempt.finish(), b(null), D())
        }, be);
        return () => window.clearTimeout(t)
    }, t[17] = S, t[18] = g?.isAwaitingConnectorConsent, t[19] = g?.isFinishing, t[20] = D, t[21] = I) : I = t[21];
    let R = g?.isAwaitingConnectorConsent,
        B = g?.isFinishing,
        V;
    t[22] !== S || t[23] !== D || t[24] !== B || t[25] !== R ? (V = [S, R, B, D], t[22] = S, t[23] = D, t[24] = B, t[25] = R, t[26] = V) : V = t[26], (0, Y.useEffect)(I, V);
    let U, W;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (U = () => (m.current = !0, () => {
        m.current = !1;
        let e = f.current;
        f.current = null, e?.controller.abort(), e && !e.hasOpenedPlaid && (e.linkingAttempt.recordCancellation(), e.linkingAttempt.finish())
    }), W = [], t[27] = U, t[28] = W) : (U = t[27], W = t[28]), p(U, W);
    let K;
    t[29] !== a || t[30] !== l || t[31] !== N || t[32] !== D ? (K = e => {
        if (!m.current || f.current || e?.signal?.aborted) return e?.linkingAttempt?.cancelPending(), !1;
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
                directConnectMetrics: a === A.JIT_PLUGIN ? {
                    recordedStages: new Set,
                    startedAtMs: performance.now()
                } : void 0,
                signal: e?.signal && !e.accountLinkingContext ? P([n.signal, e.signal]) : n.signal
            };
        return f.current = r, G(r, `started`), b({
            oauthLinkId: e?.autoStartOauthLinkId,
            ...e?.prepareConnectorLink ? {
                isAwaitingConnectorConsent: !0
            } : {}
        }), N(e, r).catch(e => {
            r.signal.aborted || (e instanceof s && e.status === 409 && e.code === Se && ue(l), f.current === r && D(e))
        }).finally(() => {
            r.signal.aborted && !r.hasOpenedPlaid && !r.didTimeOut && r.linkingAttempt.recordCancellation(), r.controller.abort(), r.linkingAttempt.finish(), f.current === r && (f.current = null, b(null))
        }).then(fe).finally(() => e?.onSettled?.()), !0
    }, t[29] = a, t[30] = l, t[31] = N, t[32] = D, t[33] = K) : K = t[33];
    let q = y(K),
        Z = g?.oauthLinkId,
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
    J = T(), B(), m(), V(), D(), k(), U(), W(), N(), R(), g(), l(), j(), d(), i(), n(), a(), I(), O(), w(), Y = t(C()), S(), be = 3e4, xe = 5e3, Se = `stale_plaid_item`, X = b({
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
    q as i, K as n, Z as r, $ as t
};
//# sourceMappingURL=2bed0ed0-dfsqfvidlk7y8biy.js.map