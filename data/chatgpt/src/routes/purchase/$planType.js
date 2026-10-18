import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $1 as n,
    A1 as r,
    AT as i,
    Btt as a,
    C1 as o,
    Dit as s,
    Htt as c,
    Lot as l,
    Nrt as u,
    Prt as ee,
    QL as d,
    WF as f,
    XF as p,
    YF as m,
    aI as h,
    d3 as g,
    dz as _,
    e0 as v,
    eI as y,
    eR as b,
    f3 as te,
    fz as x,
    iI as S,
    k1 as C,
    kT as w,
    kit as T,
    mI as E,
    o as D,
    s as O,
    u1 as k,
    vnt as A,
    wst as j,
    ynt as M,
    zot as N
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as P,
    At as F,
    Bn as I,
    Nn as L,
    Pt as ne,
    Rn as R,
    Rt as re,
    Ut as ie,
    Vn as z,
    Wt as B,
    jt as ae,
    lt as V,
    wn as H,
    zn as oe
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $nn as se,
    Drn as ce,
    Ern as U,
    Kcn as W,
    Kon as le,
    Ssn as ue,
    Xnn as G,
    Znn as de,
    b6t as K,
    fsn as fe,
    iin as pe,
    mrn as q,
    msn as J,
    psn as me,
    qcn as he,
    qon as Y,
    tin as X,
    wsn as ge,
    x6t as _e
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $d as ve,
    Fn as ye,
    Gf as be,
    Jd as xe,
    Nn as Se,
    Pn as Ce,
    Xf as we,
    Yf as Te,
    _d as Ee,
    ad as De,
    ef as Oe,
    hd as Z,
    id as ke,
    vd as Ae,
    yd as je
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    n as Me,
    t as Ne
} from "./e18c46cf-fjyf5ehpuodlki4v.js";

function Pe(e) {
    "use forget";
    let t = (0, Ie.c)(79),
        {
            planType: n,
            promoCode: r,
            promoCampaign: i,
            businessSeatSelection: c,
            isPromoCampaignFromQueryParam: l
        } = e,
        {
            prepareCheckoutSession: u,
            navigateToCheckout: ee
        } = pe(),
        d = oe(),
        m = ae(),
        g = ne(),
        _ = o(),
        [v, y] = (0, Le.useState)(!1),
        te = b(),
        x = (0, Le.useRef)(!1),
        C = n === Z.Team,
        T = C && c != null,
        E = c?.standardSeats,
        D = c?.premiumSeats,
        O = c?.priceInterval,
        k;
    if (t[0] !== c?.referrer || t[1] !== m.search) {
        let e = new URLSearchParams(m.search).get(`referrer`);
        k = c?.referrer ?? (e != null && ze.has(e) ? e : void 0), t[0] = c?.referrer, t[1] = m.search, t[2] = k
    } else k = t[2];
    let A = k,
        j;
    t[3] !== _ || t[4] !== T ? (j = T && _?.isFreeWorkspace() && _.isOwnerOfAccount() ? _.id : void 0, t[3] = _, t[4] = T, t[5] = j) : j = t[5];
    let M = j,
        {
            count: N,
            isLoading: P
        } = _e(M),
        F;
    t[6] === m.search ? F = t[7] : (F = new URLSearchParams(m.search).get(`country_code`), t[6] = m.search, t[7] = F);
    let I = F ?? void 0,
        R;
    t[8] === I ? R = t[9] : (R = {
        initialCountryCode: I
    }, t[8] = I, t[9] = R);
    let {
        country: re
    } = se(R), ie = _ ?? null, z;
    t[10] !== _ || t[11] !== C ? (z = !C && ce(_ ?? null), t[10] = _, t[11] = C, t[12] = z) : z = t[12];
    let B;
    t[13] !== re || t[14] !== C || t[15] !== ie || t[16] !== z ? (B = {
        country: re,
        currentAccount: ie,
        location: `DirectPurchaseCheckoutRedirect`,
        shouldUsePaidSubscriptionBillingCurrency: z,
        pricingPlanIsTypeBusiness: C
    }, t[13] = re, t[14] = C, t[15] = ie, t[16] = z, t[17] = B) : B = t[17];
    let V = de(B),
        H = l ?? !!i,
        {
            data: U,
            isLoading: W
        } = Oe(i ?? ``, H),
        G;
    t[18] !== W || t[19] !== m.search || t[20] !== U ? (G = new URLSearchParams(m.search).get(`require_promo`) === `1` && !W && (U?.state !== `eligible` || !U.coupon), t[18] = W, t[19] = m.search, t[20] = U, t[21] = G) : G = t[21];
    let K = G,
        q;
    t[22] !== _ || t[23] !== M || t[24] !== d || t[25] !== H || t[26] !== C || t[27] !== n || t[28] !== D || t[29] !== u || t[30] !== O || t[31] !== E || t[32] !== te || t[33] !== N ? (q = async e => {
        let {
            billingDetails: t,
            promoCode: r,
            promoCampaignId: i
        } = e, a = M == null ? void 0 : _, o = E == null || D == null ? void 0 : Math.max(E, N - D), s = D != null && (D > 0 || a == null && O === h.FLEXIBLE && i !== `team-1-month-free`), c = {
            entry_point: he.DIRECT_PURCHASE_REDIRECT,
            plan_name: Re[n],
            ...C && o != null && D != null && O != null ? {
                team_plan_data: {
                    workspace_name: await ue(d, a, te),
                    price_interval: O,
                    seat_quantity: o + D,
                    ...s ? {
                        seat_quantities: [{
                            seat_type: S.STANDARD,
                            quantity: o
                        }, {
                            seat_type: S.PREMIUM,
                            quantity: D
                        }]
                    } : {},
                    ...a ? {
                        existing_workspace_id: a.id
                    } : {}
                }
            } : {},
            billing_details: t,
            promo_code: r ?? void 0,
            promo_campaign: i && (!C || O == null || O === h.FLEXIBLE) ? {
                promo_campaign_id: i,
                is_coupon_from_query_param: H
            } : void 0
        };
        return {
            checkoutPayload: c,
            response: await u(c, {})
        }
    }, t[22] = _, t[23] = M, t[24] = d, t[25] = H, t[26] = C, t[27] = n, t[28] = D, t[29] = u, t[30] = O, t[31] = E, t[32] = te, t[33] = N, t[34] = q) : q = t[34];
    let J = q,
        Y;
    t[35] !== V || t[36] !== A || t[37] !== v || t[38] !== C || t[39] !== m.search || t[40] !== g || t[41] !== ee || t[42] !== n || t[43] !== J || t[44] !== O ? (Y = async e => {
        let {
            promoCode: t,
            promoCampaignId: r
        } = e;
        if (!(V == null || v)) try {
            a.logEventWithStatsig(`Direct Purchase Social Sku: Checkout Session Create Start`, `direct_purchase_social_sku_checkout_session_create_start`, {
                plan_type: n
            });
            let {
                checkoutPayload: e,
                response: i
            } = await J({
                billingDetails: V,
                promoCode: t,
                promoCampaignId: r
            });
            a.logEventWithStatsig(`Direct Purchase Social Sku: Checkout Session Create Success`, `direct_purchase_social_sku_checkout_session_create_success`, {
                plan_type: n
            });
            let o = m.search;
            if (C && O === h.ANNUAL) {
                let e = new URLSearchParams(o);
                e.delete(p);
                let t = e.toString();
                o = t ? `?${t}` : ``
            }
            let s = le(i),
                c = s == null ? `tag` in i && i.tag === `redirect_to_portal` ? fe(m.search) : null : me(s, m.search);
            await ee(i, {
                ...c == null ? {} : {
                    replace: !0
                },
                searchParams: o,
                state: {
                    directPurchasePlanType: n
                },
                checkoutPayload: e,
                ...A ? {
                    checkoutOriginProvenance: {
                        checkoutOriginOriginator: A,
                        checkoutOriginDeliverySurface: `web`
                    }
                } : {}
            })
        } catch (e) {
            let t = e;
            if (Ce(t)) {
                y(!0);
                return
            }
            let r = t instanceof Error ? t : Error(`Failed to start checkout`);
            a.logEventWithStatsig(`Direct Purchase Social Sku: Checkout Session Create Failure`, `direct_purchase_social_sku_checkout_session_create_failure`, {
                plan_type: n
            }), s.addError(r, {
                feature: `direct_purchase_checkout_redirect`,
                plan_type: n
            });
            let i = n === Z.ProLite ? Z.Pro : n,
                o = new URLSearchParams(m.search);
            o.delete(`cta_tab`), o.set(`default_tab`, C ? `business` : `personal`), o.set(`highlight_plan`, i), g({
                pathname: `/`,
                search: `?${o}`,
                hash: f
            }, {
                replace: !0
            })
        }
    }, t[35] = V, t[36] = A, t[37] = v, t[38] = C, t[39] = m.search, t[40] = g, t[41] = ee, t[42] = n, t[43] = J, t[44] = O, t[45] = Y) : Y = t[45];
    let X = Y,
        ge;
    t[46] !== V || t[47] !== X || t[48] !== M || t[49] !== W || t[50] !== v || t[51] !== K || t[52] !== P || t[53] !== r || t[54] !== U?.coupon || t[55] !== U?.state ? (ge = () => {
        if (v || K || W || V == null || M != null && P) return;
        let e = !1;
        return Promise.resolve().then(() => {
            !e && !x.current && (x.current = !0, X({
                promoCode: r,
                promoCampaignId: U?.state === `eligible` ? U?.coupon : void 0
            }))
        }), () => {
            e = !0
        }
    }, t[46] = V, t[47] = X, t[48] = M, t[49] = W, t[50] = v, t[51] = K, t[52] = P, t[53] = r, t[54] = U?.coupon, t[55] = U?.state, t[56] = ge) : ge = t[56];
    let ve;
    if (t[57] !== V || t[58] !== X || t[59] !== M || t[60] !== W || t[61] !== v || t[62] !== H || t[63] !== K || t[64] !== P || t[65] !== r || t[66] !== U ? (ve = [V, X, M, W, v, K, P, U, r, H], t[57] = V, t[58] = X, t[59] = M, t[60] = W, t[61] = v, t[62] = H, t[63] = K, t[64] = P, t[65] = r, t[66] = U, t[67] = ve) : ve = t[67], (0, Le.useEffect)(ge, ve), K) {
        let e;
        t[68] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(`h1`, {
            className: `text-xl font-semibold`,
            children: (0, Q.jsx)(L, {
                id: `pricing.directPurchase.requiredPromoUnavailable`,
                defaultMessage: `This offer is no longer available.`
            })
        }), t[68] = e) : e = t[68];
        let n;
        return t[69] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Q.jsxs)(`div`, {
            className: `mx-auto flex max-w-md flex-col gap-4 p-6 text-center`,
            children: [e, (0, Q.jsx)(w, {
                color: `primary`,
                onClick: Fe,
                children: (0, Q.jsx)(L, {
                    id: `pricing.directPurchase.requiredPromoRetry`,
                    defaultMessage: `Try again`
                })
            })]
        }), t[69] = n) : n = t[69], n
    }
    if (v) {
        let e;
        t[70] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(`h1`, {
            className: `text-xl font-semibold`,
            children: (0, Q.jsx)(L, {
                ...ye
            })
        }), t[70] = e) : e = t[70];
        let n;
        t[71] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary`,
            children: (0, Q.jsx)(L, {
                id: `pricing.directPurchase.planUnavailable.description`,
                defaultMessage: `Choose another available plan to continue.`
            })
        }), t[71] = n) : n = t[71];
        let r;
        t[72] !== m.search || t[73] !== g ? (r = () => g({
            pathname: `/`,
            ...fe(m.search) == null ? {} : {
                search: m.search
            },
            hash: f
        }, {
            replace: !0
        }), t[72] = m.search, t[73] = g, t[74] = r) : r = t[74];
        let i;
        t[75] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Q.jsx)(L, {
            id: `pricing.directPurchase.planUnavailable.seePlans`,
            defaultMessage: `See available plans`
        }), t[75] = i) : i = t[75];
        let a;
        return t[76] === r ? a = t[77] : (a = (0, Q.jsxs)(`div`, {
            className: `mx-auto flex max-w-md flex-col gap-4 p-6 text-center`,
            children: [e, n, (0, Q.jsx)(w, {
                color: `primary`,
                onClick: r,
                children: i
            })]
        }), t[76] = r, t[77] = a), a
    }
    let be;
    return t[78] === Symbol.for(`react.memo_cache_sentinel`) ? (be = (0, Q.jsx)(ke, {}), t[78] = be) : be = t[78], be
}

function Fe() {
    return window.location.reload()
}
var Ie, Le, Q, Re, ze, Be = e((() => {
    Ie = H(), Se(), i(), j(), K(), ge(), W(), J(), Y(), X(), xe(), U(), Te(), G(), k(), d(), c(), T(), Le = t(z()), R(), P(), y(), ve(), Ee(), De(), Q = I(), Re = {
        [Z.Go]: N.GO,
        [Z.Plus]: N.PLUS,
        [Z.Pro]: N.PRO,
        [Z.ProLite]: N.PROLITE,
        [Z.Team]: N.SELF_SERVE_BUSINESS
    }, ze = new Set([`buying_agent`])
}));

function Ve(e) {
    let t = new URLSearchParams(e),
        n = t.get(Ze),
        r = t.get(Qe);
    if (n == null && r == null) return null;
    let i = e => {
            if (e == null) return 0;
            if (!/^\d+$/.test(e)) return null;
            let t = Number(e);
            return Number.isSafeInteger(t) ? t : null
        },
        a = i(n),
        o = i(r);
    if (a == null || o == null) return null;
    let s = a + o;
    if (s < E() || s > 200 || o > 0 && t.get(`promo_campaign`)?.trim().toLowerCase() === `team-1-month-free`) return null;
    let c = t.get(be),
        l = t.get(`referrer`);
    return {
        standardSeats: a,
        premiumSeats: o,
        priceInterval: c != null && we(c) ? c : h.FLEXIBLE,
        ...l ? {
            referrer: l
        } : {}
    }
}

function He() {
    "use forget";
    let e = (0, We.c)(55),
        {
            referrer: t
        } = F(),
        i = re(),
        a = ae(),
        s = i.planType,
        c;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = ee(), e[0] = c) : c = e[0];
    let u = c,
        d = o(),
        f, p, h;
    if (e[1] !== a.search) {
        let t = new URLSearchParams(a.search);
        f = t.has(`login_hint`), p = t.get(`login_hint`), t.delete(`login_hint`), h = t.toString(), e[1] = a.search, e[2] = f, e[3] = p, e[4] = h
    } else f = e[2], p = e[3], h = e[4];
    let g = h,
        v = g ? `?${g}` : ``,
        y, b;
    if (e[5] !== p || e[6] !== s || e[7] !== t ? (y = () => {
            if (!u) {
                let e = new URL(window.location.href);
                if (e.searchParams.delete(`login_hint`), t && !e.searchParams.has(`referrer`) && e.searchParams.append(`referrer`, t), je(s)) {
                    let t = fe(e.search),
                        r = t == null ? void 0 : /^\/uc\/([^/]+)$/.exec(new URL(t).pathname)?.[1];
                    r != null && n({
                        anonymousConversationId: r
                    })
                }
                r({
                    callbackUrl: e.href,
                    ...p ? {
                        additionalAuthParams: {
                            login_hint: p
                        }
                    } : {}
                })
            }
        }, b = [u, p, s, t], e[5] = p, e[6] = s, e[7] = t, e[8] = y, e[9] = b) : (y = e[8], b = e[9]), (0, Ge.useEffect)(y, b), !u || !d) {
        let t;
        return e[10] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(`div`, {
            className: `flex h-full w-full items-center justify-center`,
            children: (0, $.jsx)(_, {})
        }), e[10] = t) : t = e[10], t
    }
    if (f) {
        let t = `${a.pathname}${v}${a.hash}`,
            n;
        return e[11] === t ? n = e[12] : (n = (0, $.jsx)(V, {
            replace: !0,
            to: t
        }), e[11] = t, e[12] = n), n
    }
    if (s === l.PROMAX) {
        let n, r, i;
        if (e[13] !== a.search || e[14] !== s || e[15] !== t) {
            let o = new URLSearchParams(a.search);
            t && !o.has(`referrer`) && o.append(`referrer`, t), o.set(`plan`, s), n = V, i = !0, r = o.toString(), e[13] = a.search, e[14] = s, e[15] = t, e[16] = n, e[17] = r, e[18] = i
        } else n = e[16], r = e[17], i = e[18];
        let o = `/?${r}${Ke}`,
            c;
        return e[19] !== n || e[20] !== i || e[21] !== o ? (c = (0, $.jsx)(n, {
            replace: i,
            to: o
        }), e[19] = n, e[20] = i, e[21] = o, e[22] = c) : c = e[22], c
    }
    if (!Ae(s)) {
        let t;
        return e[23] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(Ne, {}), e[23] = t) : t = e[23], t
    }
    if (s === Z.CodexTeam) {
        let t = `${qe}${a.search}`,
            n;
        return e[24] === t ? n = e[25] : (n = (0, $.jsx)(V, {
            replace: !0,
            to: t
        }), e[24] = t, e[25] = n), n
    }
    let x;
    e[26] !== a.search || e[27] !== s ? (x = s === Z.Team ? Ve(a.search) : null, e[26] = a.search, e[27] = s, e[28] = x) : x = e[28];
    let S = x;
    if (s === Z.Team && S == null && Ue()) {
        let t = `${Je}${a.search}`,
            n;
        return e[29] === t ? n = e[30] : (n = (0, $.jsx)(V, {
            replace: !0,
            to: t
        }), e[29] = t, e[30] = n), n
    }
    if (d.hasPaidSubscription() && S == null && !(d.isNoPaymentTrial() && te(d, $e[s]))) {
        let n, r, i;
        if (e[31] !== a.search || e[32] !== s || e[33] !== t) {
            let o = new URLSearchParams(a.search);
            t && !o.has(`referrer`) && o.append(`referrer`, t), o.append(`plan`, s), n = V, i = !0, r = o.toString(), e[31] = a.search, e[32] = s, e[33] = t, e[34] = n, e[35] = r, e[36] = i
        } else n = e[34], r = e[35], i = e[36];
        let o = `/?${r}${Ke}`,
            c;
        return e[37] !== n || e[38] !== i || e[39] !== o ? (c = (0, $.jsx)(n, {
            replace: i,
            to: o
        }), e[37] = n, e[38] = i, e[39] = o, e[40] = c) : c = e[40], c
    }
    let C, w;
    if (e[41] !== a.search) {
        let t = new URLSearchParams(a.search);
        C = t.get(`promoCode`) ?? void 0, w = t.get(`promo_campaign`)?.trim() || void 0, e[41] = a.search, e[42] = C, e[43] = w
    } else C = e[42], w = e[43];
    let T = w,
        E = a.state != null && typeof a.state == `object` && `account-payment-modal-promo-campaign-handoff` in a.state && typeof a.state[`account-payment-modal-promo-campaign-handoff`] == `string` ? a.state[m] : void 0,
        D = T ?? E,
        O;
    e[44] === S ? O = e[45] : (O = S == null ? {} : {
        businessSeatSelection: S
    }, e[44] = S, e[45] = O);
    let k;
    e[46] !== T || e[47] !== E ? (k = T == null && E ? {
        isPromoCampaignFromQueryParam: !1
    } : {}, e[46] = T, e[47] = E, e[48] = k) : k = e[48];
    let A;
    return e[49] !== s || e[50] !== D || e[51] !== C || e[52] !== O || e[53] !== k ? (A = (0, $.jsx)(Pe, {
        planType: s,
        promoCode: C,
        promoCampaign: D,
        ...O,
        ...k
    }), e[49] = s, e[50] = D, e[51] = C, e[52] = O, e[53] = k, e[54] = A) : A = e[54], A
}

function Ue() {
    return A(Ye).get(Xe, !1)
}
var We, Ge, $, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt = e((() => {
    P(), We = H(), j(), y(), Be(), Ee(), xe(), Te(), g(), q(), u(), M(), Me(), C(), v(), J(), Ge = t(z()), k(), x(), O(), $ = I(), Ke = `#pricing`, qe = `/codex/team/checkout`, Je = `/create-workspace`, Ye = `1069053961`, Xe = `redirect_team_purchase_to_create_workspace`, Ze = `standardSeats`, Qe = `premiumSeats`, $e = {
        [Z.Go]: l.GO,
        [Z.Plus]: l.PLUS,
        [Z.Pro]: l.PRO,
        [Z.ProLite]: l.PROLITE,
        [Z.Team]: l.SELF_SERVE_BUSINESS
    }, et = ie(He), tt = B(D)
}));
e((() => {
    nt()
}))();
export {
    tt as ErrorBoundary, et as
    default
};
//# sourceMappingURL=purchase._planType-aed59ean.js.map