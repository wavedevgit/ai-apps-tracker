const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/4813494d-cb22y2w19zwyshmt.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as n,
    BU as ee,
    Fz as r,
    HU as i,
    Iz as a,
    Pz as o,
    X$ as s,
    j8 as c,
    n1 as l,
    nF as u,
    q8 as d,
    tF as f,
    u1 as p
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as m,
    Bn as h,
    E as g,
    Ht as _,
    N as v,
    Pt as y,
    Rn as b,
    Ut as x,
    Vn as S,
    cn as C,
    ln as w,
    s as T,
    wn as te,
    zn as ne
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Ckt as re,
    JAt as E,
    Vkt as D,
    Wkt as O,
    cAt as k,
    dAt as A,
    dW as j,
    fAt as M,
    kAt as N,
    lW as P,
    oAt as F,
    pAt as I,
    qAt as L,
    sW as R,
    uW as z
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    es as B,
    ns as ie
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as V,
    t as H
} from "./af004db9-6w68dbz1fjui3k0e.js";
import {
    a as U,
    i as W,
    n as G,
    r as K,
    t as q
} from "./6601bf01-l2hvb3ulv1nxkphc.js";
import {
    n as J,
    t as Y
} from "./8be37a3d-cubkwtzsgxhz2xbl.js";
async function ae(e) {
    let {
        ProductEventLogger: t
    } = await C(async () => {
        let {
            ProductEventLogger: e
        } = await import(`./4813494d-cb22y2w19zwyshmt.js`).then(e => (e.Htt(), e.Vtt));
        return {
            ProductEventLogger: e
        }
    }, __vite__mapDeps([0, 1, 2, 3]));
    t.logStructuredEvent(`ChatgptFinanceConnectFlowStep`, {
        surfaceName: `home`,
        entrypoint: e.beacon_type === `banner` ? `homepage_banner` : `homepage_modal`,
        step: `account_linking`,
        provider: `plaid`,
        result: `success`
    }), t.logEventWithStatsig(`Ledger Homepage Modal Connect Succeeded`, `chatgpt_web_ledger_homepage_modal_connect_succeeded`, e)
}

function oe() {
    return !f()
}

function se() {}

function ce() {}

function le() {}
var X, Z, Q, $, ue = e((() => {
    m(), X = te(), V(), i(), K(), O(), k(), I(), p(), u(), n(), N(), B(), Y(), R(), r(), L(), T(), Z = t(S()), b(), Q = h(), w(), $ = x(function() {
        "use forget";
        let e = (0, X.c)(12),
            t = ne(),
            n = y(),
            r = v(),
            i = E(),
            u;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = l(), e[0] = u) : u = e[0], g(u);
        let [p] = _(), m = (0, Z.useRef)(!1), h, b;
        e[1] !== t || e[2] !== i || e[3] !== n || e[4] !== r || e[5] !== p ? (h = () => {
            let e = () => {
                    if (m.current) return;
                    let e = G(),
                        l = e?.accountLinkingContext;
                    if (!p.has(`oauth_state_id`) || !e) {
                        n(a(o.OAUTH_FAILED_GENERIC, e?.returnTo ?? `/finances`), {
                            replace: !0
                        });
                        return
                    }
                    let u = M(),
                        d = e.owner;
                    if (!u || d && (d.userId !== u.userId || d.accountId !== u.accountId || d.normalizedAccountUserId !== u.normalizedAccountUserId)) {
                        q(e.linkToken), n(a(o.OAUTH_FAILED_GENERIC, e.returnTo), {
                            replace: !0
                        });
                        return
                    }
                    let h = d ? e.trackingContext : void 0,
                        g = new AbortController,
                        _ = !1,
                        v = () => !_ && u.isCurrent(),
                        y = () => !g.signal.aborted && i() && v();
                    F(h, {
                        ...u,
                        isCurrent: v
                    });
                    let b = l ? void 0 : new AbortController,
                        x = c(() => (s(), f(), u.isCurrent()), t => {
                            t || (_ = !0, g.abort(), b?.abort(), q(e.linkToken))
                        }, {
                            fireImmediately: !0
                        }),
                        S = async () => {
                            let i;
                            try {
                                let a = await U({
                                    linkToken: e.linkToken,
                                    oauthStateId: e.oauthStateId,
                                    receivedRedirectUri: window.location.href,
                                    trackingContext: h,
                                    canOpen: y,
                                    signal: g.signal,
                                    startupTimeoutSignal: g.signal,
                                    onOpen: () => A(h, `plaid_open`),
                                    onReady: () => A(h, `plaid_sdk_ready`)
                                });
                                if (!v()) return;
                                if (a.type === `completed`)
                                    if (A(h, `plaid_success`), l && y() && ee(t.formatMessage(z)), await D({
                                            oauthStateId: e.oauthStateId,
                                            linkToken: e.linkToken,
                                            publicToken: a.publicToken,
                                            trackingContext: h,
                                            isStillActive: v
                                        }), l) {
                                        if (!y() || await ie({
                                                ...l.source === `homepage` ? {
                                                    callsiteId: `request_completion.ledger_homepage_modal_beacon.get_started.1`
                                                } : {},
                                                isStillActive: y,
                                                signal: g.signal,
                                                navigate: n,
                                                onConversationReady: () => {
                                                    l.source === `homepage` && l.isDebugForced !== !0 ? ae(l.analytics ?? {}).catch(le) : l.source === `widget` && r.invalidateQueries({
                                                        queryKey: re
                                                    }).catch(ce)
                                                },
                                                prompt: t.formatMessage(j),
                                                replace: !0
                                            })) return;
                                        i = o.OAUTH_FAILED_GENERIC
                                    } else i = o.OAUTH_SUCCESS;
                                else if (y()) W(a) ? (A(h, `link_failed`), b?.abort(), i = o.OAUTH_FAILED_GENERIC) : (A(h, `plaid_exit`), (a.plaidExitStatus === `failed` || a.plaidErrorCode) && a.plaidErrorCode !== `launch_cancelled` && a.plaidErrorCode !== `presentation_dismissed` ? A(h, `link_failed`) : a.plaidErrorCode !== `presentation_dismissed` && A(h, `flow_cancelled`), l && a.plaidErrorCode && a.plaidErrorCode !== `launch_cancelled` && a.plaidErrorCode !== `presentation_dismissed` && (i = o.OAUTH_FAILED_GENERIC));
                                else return
                            } catch {
                                y() && A(h, `link_failed`), b?.abort(), i = o.OAUTH_FAILED_GENERIC
                            }
                            if (!y()) return;
                            let s = i ? a(i, e.returnTo) : e.returnTo;
                            n(s, {
                                replace: !0
                            })
                        };
                    return Promise.resolve().then(async () => {
                        if (!y()) return;
                        m.current = !0;
                        let t = b ? J(e.oauthStateId, r, {
                            signal: b.signal
                        }).catch(se) : void 0;
                        await S().finally(() => {
                            t ? t.finally(x) : x()
                        })
                    }), () => {
                        g.abort(), m.current || (b?.abort(), x())
                    }
                },
                l, u = d(oe, () => {
                    l = e()
                });
            return () => {
                u(), l?.()
            }
        }, b = [t, i, n, r, p], e[1] = t, e[2] = i, e[3] = n, e[4] = r, e[5] = p, e[6] = h, e[7] = b) : (h = e[6], b = e[7]), (0, Z.useEffect)(h, b);
        let x;
        e[8] === t ? x = e[9] : (x = t.formatMessage(P), e[8] = t, e[9] = x);
        let S;
        return e[10] === x ? S = e[11] : (S = (0, Q.jsx)(`main`, {
            "aria-busy": !0,
            className: `flex min-h-[40vh] items-center justify-center`,
            children: (0, Q.jsx)(H, {
                ariaMessage: x
            })
        }), e[10] = x, e[11] = S), S
    })
}));
e((() => {
    ue()
}))();
export {
    $ as
    default
};
//# sourceMappingURL=ledger.plaid.web.oauth_redirect-jqrgs92t.js.map