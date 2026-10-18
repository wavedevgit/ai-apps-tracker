import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BA as n,
    C1 as r,
    Dit as i,
    HA as a,
    Lot as o,
    Q4 as s,
    Qit as c,
    Rot as l,
    S1 as u,
    VA as d,
    Y2 as f,
    YF as p,
    e3 as m,
    eI as h,
    fU as g,
    hnt as _,
    i1 as v,
    i3 as y,
    iat as b,
    kit as x,
    n3 as S,
    pU as C,
    q2 as w,
    r3 as T,
    s3 as E,
    t3 as D,
    u1 as O,
    v1 as k,
    vnt as A,
    wst as j,
    y1 as M,
    ynt as N
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as P,
    At as F,
    Bn as I,
    N as L,
    Pt as R,
    Rn as z,
    Ut as B,
    Vn as V,
    jt as H,
    lt as U,
    s as W,
    wn as G,
    zn as K
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Ian as q,
    JAt as ee,
    Lan as te,
    Yrn as ne,
    iin as re,
    ksn as ie,
    qAt as ae,
    tin as oe,
    zsn as se
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $d as ce,
    Dh as le,
    Th as J,
    ef as ue
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    a as de,
    i as fe,
    o as pe,
    t as me
} from "./101e3679-bozhwrevoydh79zk.js";

function he({
    serverLoader: e
}) {
    return e()
}

function ge() {
    "use forget";
    let e = (0, Y.c)(36),
        t = r(),
        {
            data: n,
            isLoading: i,
            isFetching: a,
            isError: o
        } = u(),
        c = K(),
        d = L(),
        f = H(),
        p = R(),
        h = (0, X.useRef)(null),
        [_, v] = (0, X.useState)(!1),
        y = (0, X.useRef)(null),
        b;
    e[0] === n?.accountItems ? b = e[1] : (b = n?.accountItems.find(_e), e[0] = n?.accountItems, e[1] = b);
    let x = b,
        S;
    e[2] === f.search ? S = e[3] : (S = new URLSearchParams(f.search).get(s), e[2] = f.search, e[3] = S);
    let C = S,
        T;
    e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (T = () => {
        let e = new AbortController;
        return y.current = e, () => e.abort()
    }, e[4] = T) : T = e[4];
    let E;
    e[5] === f.key ? E = e[6] : (E = [f.key], e[5] = f.key, e[6] = E), (0, X.useEffect)(T, E);
    let O;
    e[7] !== n || e[8] !== C || e[9] !== t?.structure || e[10] !== c || e[11] !== o || e[12] !== a || e[13] !== i || e[14] !== p || e[15] !== x || e[16] !== d ? (O = () => {
        if (t?.structure !== l.WORKSPACE || i || a || o || n == null || C != null || h.current) return;
        let e = y.current?.signal;
        (async () => {
            if (await Promise.resolve(), e?.aborted || h.current) return;
            h.current = x == null ? `login` : `1`, v(!0);
            let t = m(new URL(window.location.href), h.current);
            if (window.history.replaceState(window.history.state, ``, t.href), x == null) {
                window.location.assign(D(t));
                return
            }
            try {
                let n = x.canAccessWithCurrentSession ? await M(d, x.id) : await k(d, x.id, c, g(), !0, t.href, t.href);
                if (`willRedirect` in n && n.willRedirect) return;
                n.updatedAccount ? (await w(), e?.aborted ? window.location.reload() : window.location.href = t.href) : e?.aborted || p(`/`, {
                    replace: !0
                })
            } catch {
                e?.aborted || p(`/`, {
                    replace: !0
                })
            }
        })()
    }, e[7] = n, e[8] = C, e[9] = t?.structure, e[10] = c, e[11] = o, e[12] = a, e[13] = i, e[14] = p, e[15] = x, e[16] = d, e[17] = O) : O = e[17];
    let A = t?.structure,
        j;
    e[18] !== n || e[19] !== C || e[20] !== c || e[21] !== o || e[22] !== a || e[23] !== i || e[24] !== f.key || e[25] !== p || e[26] !== x || e[27] !== d || e[28] !== A ? (j = [n, C, A, c, o, a, i, f.key, x, d, p], e[18] = n, e[19] = C, e[20] = c, e[21] = o, e[22] = a, e[23] = i, e[24] = f.key, e[25] = p, e[26] = x, e[27] = d, e[28] = A, e[29] = j) : j = e[29], (0, X.useEffect)(O, j);
    let N, P;
    if (e[30] === p ? (N = e[31], P = e[32]) : (N = () => {
            let e = e => {
                !e.persisted || !h.current || (h.current === `login` ? window.location.reload() : p(`/`, {
                    replace: !0
                }))
            };
            return window.addEventListener(`pageshow`, e), () => window.removeEventListener(`pageshow`, e)
        }, P = [p], e[30] = p, e[31] = N, e[32] = P), (0, X.useEffect)(N, P), t?.structure !== l.WORKSPACE && !_ || C === `login`) {
        let t;
        return e[33] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Z.jsx)(ve, {}), e[33] = t) : t = e[33], t
    }
    if (C != null || o) {
        let t;
        return e[34] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Z.jsx)(U, {
            to: `/`,
            replace: !0
        }), e[34] = t) : t = e[34], t
    }
    let F;
    return e[35] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (0, Z.jsx)(J, {}), e[35] = F) : F = e[35], F
}

function _e(e) {
    return e.isPersonalAccount() && !e.isDeactivated()
}

function ve() {
    "use forget";
    let e = (0, Y.c)(45),
        t = r(),
        {
            prepareCheckoutSession: s,
            navigateToCheckout: u
        } = re(),
        d = H(),
        f = R(),
        m = ee(),
        h = (0, X.useRef)(null),
        [g, b] = (0, X.useState)(null),
        x;
    e[0] === t ? x = e[1] : (x = t?.structure === l.WORKSPACE || (t?.hasPaidSubscription() ?? !1), e[0] = t, e[1] = x);
    let C = x,
        w;
    e[2] === d.search ? w = e[3] : (w = T(d.search), e[2] = d.search, e[3] = w);
    let {
        loginHint: E,
        searchWithoutLoginHint: D,
        promoCampaign: O
    } = w, k = E != null, j = se(), M = O ?? j.campaignId, N = !!O, P = t != null && !C && !k && te() && A(`662604060`).get(`paypal_promo_checkout_enabled`, !1), F = t != null && !C && !P, {
        data: I
    } = ue(F ? M ?? `` : ``, F && N), {
        kind: L,
        campaign: z
    } = S({
        enabled: P,
        campaign: M,
        isCampaignFromQueryParam: N,
        promotion: I
    }), B;
    e[4] !== g?.accountId || e[5] !== t || e[6] !== z || e[7] !== L || e[8] !== k || e[9] !== m || e[10] !== d.hash || e[11] !== f || e[12] !== u || e[13] !== s || e[14] !== D || e[15] !== C ? (B = () => {
        if (t == null || C || k || g?.accountId === t.id || h.current === t.id) return;
        let e = t.id;
        h.current = e;
        let r = L === `standard` ? null : y({
            country: _().getContext().user.country,
            multicurrencyEnabled: A(`662604060`).get(`paypal_promo_multicurrency_enabled`, !1)
        });
        if (r == null) {
            f({
                pathname: `/purchase/plus`,
                search: D,
                hash: d.hash
            }, {
                replace: !0,
                ...z ? {
                    state: {
                        [p]: z
                    }
                } : {}
            });
            return
        }
        a(n(D, d.hash)), s(r, {}).then(t => {
            if (!(!m() || v()?.id !== e)) {
                if (!(`tag` in t) || t.tag !== `custom_checkout_session` && t.tag !== `redirect_to_portal`) throw Error(`Expected a custom PayPal checkout session`);
                return u(t, {
                    replace: !0,
                    searchParams: D,
                    checkoutPayload: r,
                    state: {
                        [ne]: {
                            pathname: `/`,
                            search: D,
                            hash: `#pricing`
                        }
                    }
                })
            }
        }).catch(t => {
            !m() || v()?.id !== e || (i.addError(t instanceof Error ? t : Error(`Failed to start PayPal promo checkout`), {
                feature: `paypal_promo_checkout`
            }), b({
                accountId: e,
                error: t instanceof Error ? t : Error(),
                country: r.billing_details?.country ?? void 0
            }))
        })
    }, e[4] = g?.accountId, e[5] = t, e[6] = z, e[7] = L, e[8] = k, e[9] = m, e[10] = d.hash, e[11] = f, e[12] = u, e[13] = s, e[14] = D, e[15] = C, e[16] = B) : B = e[16];
    let V;
    if (e[17] !== g || e[18] !== t || e[19] !== z || e[20] !== L || e[21] !== k || e[22] !== m || e[23] !== d.hash || e[24] !== f || e[25] !== u || e[26] !== s || e[27] !== D || e[28] !== C ? (V = [t, g, C, k, m, d.hash, f, u, s, L, z, D], e[17] = g, e[18] = t, e[19] = z, e[20] = L, e[21] = k, e[22] = m, e[23] = d.hash, e[24] = f, e[25] = u, e[26] = s, e[27] = D, e[28] = C, e[29] = V) : V = e[29], (0, X.useEffect)(B, V), k && t != null) {
        let t = `${d.pathname}${D}${d.hash}`,
            n;
        return e[30] === t ? n = e[31] : (n = (0, Z.jsx)(U, {
            replace: !0,
            to: t
        }), e[30] = t, e[31] = n), n
    }
    if (C) {
        let n, r, i;
        if (e[32] !== t?.planType || e[33] !== D) {
            let a = new URLSearchParams(D);
            t?.planType === o.GO ? a.set(`plan`, `plus`) : a.delete(`plan`), n = U, i = !0, r = a.toString(), e[32] = t?.planType, e[33] = D, e[34] = n, e[35] = r, e[36] = i
        } else n = e[34], r = e[35], i = e[36];
        let a = `/?${r}#pricing`,
            s;
        return e[37] !== n || e[38] !== i || e[39] !== a ? (s = (0, Z.jsx)(n, {
            replace: i,
            to: a
        }), e[37] = n, e[38] = i, e[39] = a, e[40] = s) : s = e[40], s
    }
    let W;
    return e[41] !== g || e[42] !== t?.id || e[43] !== f ? (W = (0, Z.jsx)(`div`, {
        className: `bg-token-bg-primary flex h-full w-full items-center justify-center`,
        children: g != null && g.accountId === t?.id ? (0, Z.jsx)(de, {
            errorCode: g.error instanceof c ? g.error.code : void 0,
            errorMessage: g.error.message,
            sessionCountry: g.country,
            onContinue: () => void f(`/purchase/plus`),
            onRetry: () => {
                h.current = null, b(null)
            }
        }) : (0, Z.jsx)(J, {})
    }), e[41] = g, e[42] = t?.id, e[43] = f, e[44] = W) : W = e[44], W
}
var Y, X, Z, Q, $, ye = e((() => {
    P(), Y = G(), pe(), E(), j(), d(), le(), q(), oe(), h(), ce(), ie(), O(), C(), f(), W(), z(), x(), b(), N(), ae(), X = t(V()), fe(), Z = I(), Q = {
        hasRouteMeta: !0,
        useScrollRestoration: !0
    }, $ = B(function() {
        "use forget";
        let e = (0, Y.c)(3),
            t = F(),
            n = r(),
            i;
        return e[0] !== n?.id || e[1] !== t ? (i = t == null ? (0, Z.jsx)(ge, {}) : (0, Z.jsx)(me, {
            ...t
        }, `${n?.id}:${t.checkoutSession.checkout_session_id}`), e[0] = n?.id, e[1] = t, e[2] = i) : i = e[2], i
    })
}));
e((() => {
    ye()
}))();
export {
    he as clientLoader, $ as
    default, Q as handle
};
//# sourceMappingURL=paypal.checkout-maat4p7f.js.map