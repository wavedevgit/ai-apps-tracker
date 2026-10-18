import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $M as n,
    B6 as r,
    B8 as i,
    BU as a,
    HU as o,
    J6 as s,
    Mnt as c,
    Nnt as l,
    Pnt as u,
    Qit as d,
    Y6 as f,
    cat as p,
    eN as m,
    fU as h,
    iat as g,
    pU as _,
    vN as v,
    yN as y
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Ln as b,
    N as x,
    Rn as S,
    Vn as C,
    s as w,
    wn as T,
    zn as E
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    CAt as ee,
    Gwn as D,
    IBn as O,
    Jkt as te,
    LBn as k,
    Okt as ne,
    SW as A,
    Vkt as re,
    Wkt as j,
    Wwn as M,
    aAt as N,
    cAt as P,
    dAt as F,
    kAt as I,
    lAt as L,
    lW as ie,
    sW as R,
    uW as ae,
    xW as oe
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    as as z,
    is as B
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    a as se,
    i as ce,
    r as V,
    s as le
} from "./6601bf01-l2hvb3ulv1nxkphc.js";
import {
    a as H,
    n as U,
    r as ue
} from "./4f866508-khnwgwvmnmyh78fa.js";
import {
    n as de,
    t as W
} from "./8be37a3d-cubkwtzsgxhz2xbl.js";

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
        n;
    t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
    let {
        conversation: r,
        connectorLinkProductSku: o
    } = n, s = o === void 0 ? M.CONNECTOR_SETTING : o, c = E(), l = x(), u;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (u = h(), t[2] = u) : u = t[2];
    let f = u,
        g = (0, Y.useRef)(null),
        _ = (0, Y.useRef)(!1),
        [v, b] = (0, Y.useState)(null),
        S = v != null,
        C;
    t[3] === s ? C = t[4] : (C = {
        productSku: s
    }, t[3] = s, t[4] = C);
    let w = z(C),
        T;
    t[5] === c ? T = t[6] : (T = e => {
        if (_.current) {
            let t = e instanceof d && e.isClientError() ? p(e)?.trim() : void 0;
            f.warning(t || c.formatMessage(X.connectionFailedToast))
        }
    }, t[5] = c, t[6] = T);
    let D = m(T),
        k;
    t[7] !== c || t[8] !== l ? (k = () => {
        f.success(c.formatMessage(X.repairSuccessToast)), l.invalidateQueries({
            queryKey: ne,
            refetchType: `all`
        }).catch(ye)
    }, t[7] = c, t[8] = l, t[9] = k) : k = t[9];
    let A = k,
        j;
    t[10] !== r || t[11] !== w || t[12] !== A || t[13] !== c || t[14] !== l || t[15] !== D ? (j = async (e, t) => {
        let {
            accountLinkingContext: n,
            autoStartOauthLinkId: o,
            onConnectionConfirmed: s,
            onSuccess: u,
            prepareConnectorLink: d
        } = e ?? {}, p = () => g.current === t && !t.signal.aborted, m = !1, h, v, y, x = !1, S = !1, C = !1, T, E = () => {
            T != null && (window.clearTimeout(T), T = void 0)
        }, O = () => {
            E(), !(!S || !r) && (S = !1, i(() => Q.set(r, ve)))
        }, k = () => {
            S || !r || !_.current || !v || o || (S = !0, i(() => Q.set(r, _e)), C || (C = !0, v.finally(O)))
        }, j = () => {
            m = !0, G(t, `connection_confirmed`), E(), _.current && s?.(), h?.()
        }, M, N, P = new AbortController, I = async () => {
            a(c.formatMessage(ie));
            let e = t.linkingAttempt.context;
            F(e, `plaid_link_requested`);
            try {
                let n = await te({
                    ...o ? {
                        link_id: o
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
        }, R = (r, i) => {
            if (typeof r.token != `string`) throw Error(`Ledger OAuth response did not include a Link token`);
            return {
                ...n ? {
                    accountLinkingContext: n
                } : {},
                trackingContext: t.linkingAttempt.context,
                canOpen: async () => await i && p(),
                beforeOpen: async () => {
                    if (n) return e?.beforeOpen && !await e.beforeOpen() ? !1 : (G(t, `link_ready`), !0);
                    let i = o == null && l.getQueryData(ne) != null ? await H(l) : void 0;
                    return e?.beforeOpen && !await e.beforeOpen() ? !1 : (G(t, `link_ready`), y = () => de(r.oauth_state_id, l, {
                        onConnectionConfirmed: () => {
                            m || j()
                        },
                        onTimedOut: () => {
                            x = !0
                        },
                        signal: P.signal,
                        linksBeforeLinking: i
                    }).catch(ge), v = y(), !0)
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
        if (d) {
            let e = await d(p, t.signal, async () => {
                b({
                    oauthLinkId: o
                }), M = await I(), p() && (N = await le(R(M, Promise.resolve(!0))))
            }, t.linkingAttempt.context);
            if (!p() || !e) return;
            b({
                oauthLinkId: o
            })
        }
        let z = M ?? await I();
        if (!p()) return;
        if (typeof z.token != `string`) throw Error(`Ledger OAuth response did not include a Link token`);
        let B = d ? Promise.resolve(!0) : oe(t.linkingAttempt.context, e => w(ee, {
            ...e,
            signal: t.signal
        })).then(he);
        B.catch(me);
        let V = N ? await N.open() : await se(R(z, B));
        if (V.type === `exited` && t.signal.aborted) {
            P.abort();
            return
        }
        if (ce(V)) throw F(t.linkingAttempt.context, `link_failed`), P.abort(), Error(`Plaid Link failed to launch`);
        if (V.type === `exited`) {
            if (F(t.linkingAttempt.context, `plaid_exit`), (V.plaidExitStatus === `failed` || V.plaidErrorCode) && V.plaidErrorCode !== `launch_cancelled` && V.plaidErrorCode !== `presentation_dismissed` ? F(t.linkingAttempt.context, `link_failed`) : V.plaidErrorCode !== `presentation_dismissed` && t.linkingAttempt.recordCancellation(), e?.onExit?.(), n) {
                if (P.abort(), V.plaidErrorCode && V.plaidErrorCode !== `launch_cancelled` && V.plaidErrorCode !== `presentation_dismissed`) throw Error(`Plaid Link exited with an error`);
                return
            }
            if (V.plaidErrorCode === `launch_cancelled`) {
                P.abort();
                return
            }
            return h = k, m ? k() : V.plaidErrorCode === `presentation_dismissed` && (k(), S && (T = window.setTimeout(() => {
                T = void 0, m || O()
            }, xe))), {
                confirmation: v?.then(e => {
                    m && !e && D()
                })
            }
        }
        if (t.didTimeOut || !L(t.linkingAttempt.context)) {
            P.abort();
            return
        }
        return F(t.linkingAttempt.context, `plaid_success`), n && u && p() && (b({
            isFinishing: !0
        }), a(c.formatMessage(ae))), x && !P.signal.aborted && L(t.linkingAttempt.context) && (v = y?.()), k(), await re({
            oauthStateId: z.oauth_state_id,
            linkToken: z.token,
            publicToken: V.publicToken,
            trackingContext: t.linkingAttempt.context
        }), u && p() && await Promise.resolve().then(() => u(p, t.signal)).then(e => {
            if (e === !1 && p()) throw Error(`Ledger onboarding handoff did not start`)
        }).catch(async e => {
            throw n && p() && await H(l).catch(pe), e
        }), {
            confirmation: v?.then(e => {
                _.current && (e ? o ? A() : f.success(c.formatMessage(X.accountConnectedToast)) : D())
            })
        }
    }, t[10] = r, t[11] = w, t[12] = A, t[13] = c, t[14] = l, t[15] = D, t[16] = j) : j = t[16];
    let P = j,
        I;
    t[17] !== S || t[18] !== v?.isAwaitingConnectorConsent || t[19] !== v?.isFinishing || t[20] !== D ? (I = () => {
        if (!S || v?.isAwaitingConnectorConsent || v?.isFinishing) return;
        let e = g.current;
        if (!e) return;
        let t = window.setTimeout(() => {
            g.current === e && (g.current = null, e.didTimeOut = !0, F(e.linkingAttempt.context, `link_failed`), e.startupTimeoutController.abort(), e.controller.abort(), e.hasOpenedPlaid || e.linkingAttempt.finish(), b(null), D())
        }, be);
        return () => window.clearTimeout(t)
    }, t[17] = S, t[18] = v?.isAwaitingConnectorConsent, t[19] = v?.isFinishing, t[20] = D, t[21] = I) : I = t[21];
    let R = v?.isAwaitingConnectorConsent,
        B = v?.isFinishing,
        V;
    t[22] !== S || t[23] !== D || t[24] !== B || t[25] !== R ? (V = [S, R, B, D], t[22] = S, t[23] = D, t[24] = B, t[25] = R, t[26] = V) : V = t[26], (0, Y.useEffect)(I, V);
    let U, W;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (U = () => (_.current = !0, () => {
        _.current = !1;
        let e = g.current;
        g.current = null, e?.controller.abort(), e && !e.hasOpenedPlaid && (e.linkingAttempt.recordCancellation(), e.linkingAttempt.finish())
    }), W = [], t[27] = U, t[28] = W) : (U = t[27], W = t[28]), y(U, W);
    let K;
    t[29] !== s || t[30] !== l || t[31] !== P || t[32] !== D ? (K = e => {
        if (!_.current || g.current || e?.signal?.aborted) return e?.linkingAttempt?.cancelPending(), !1;
        let t = e?.linkingAttempt ?? N(e?.trackingContext, e?.autoStartOauthLinkId ? `unknown` : `direct_plaid`);
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
                signal: e?.signal && !e.accountLinkingContext ? O([n.signal, e.signal]) : n.signal
            };
        return g.current = r, G(r, `started`), b({
            oauthLinkId: e?.autoStartOauthLinkId,
            ...e?.prepareConnectorLink ? {
                isAwaitingConnectorConsent: !0
            } : {}
        }), P(e, r).catch(e => {
            r.signal.aborted || (e instanceof d && e.status === 409 && e.code === Se && ue(l), g.current === r && D(e))
        }).finally(() => {
            r.signal.aborted && !r.hasOpenedPlaid && !r.didTimeOut && r.linkingAttempt.recordCancellation(), r.controller.abort(), r.linkingAttempt.finish(), g.current === r && (g.current = null, b(null))
        }).then(fe).finally(() => e?.onSettled?.()), !0
    }, t[29] = s, t[30] = l, t[31] = P, t[32] = D, t[33] = K) : K = t[33];
    let q = m(K),
        Z = v?.oauthLinkId,
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
    J = T(), B(), o(), V(), I(), j(), U(), W(), R(), D(), r(), _(), k(), g(), c(), n(), v(), P(), A(), w(), Y = t(C()), S(), be = 3e4, xe = 5e3, Se = `stale_plaid_item`, X = b({
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
    }), Z = X.connectionFailedToast, Q = f(e => s(0))
}));
export {
    q as i, K as n, Z as r, $ as t
};
//# sourceMappingURL=2bed0ed0-ocb44pb29ql57kkx.js.map