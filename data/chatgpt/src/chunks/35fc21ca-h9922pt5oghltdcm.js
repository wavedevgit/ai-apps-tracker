import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as n,
    Gnt as r,
    J3 as i,
    Ji as ee,
    Kl as te,
    L6 as ne,
    Met as a,
    P5 as re,
    R1 as o,
    SR as s,
    Tet as c,
    U4 as l,
    Ul as ie,
    Xi as ae,
    Xl as oe,
    Z1 as se,
    Znt as ce,
    f6 as le,
    g8 as ue,
    hst as u,
    jet as de,
    l6 as d,
    n2 as f,
    nct as p,
    p6 as m,
    ql as h,
    r6 as g,
    u6 as fe,
    vR as _,
    z6 as v
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as y,
    Nn as b,
    Nt as pe,
    Q as x,
    Rn as S,
    Vn as C,
    wn as w,
    zn as me
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $un as he,
    Edn as T,
    Gln as E,
    JEn as ge,
    Kln as _e,
    Tdn as D,
    U8t as O,
    Ucn as ve,
    Uln as ye,
    Vcn as be,
    Wcn as k,
    Wln as xe,
    X$ as A,
    Y$ as Se,
    drn as Ce,
    edn as we,
    orn as Te,
    qEn as Ee,
    rrn as De,
    tdn as Oe,
    z8t as ke,
    zcn as j
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Fl as Ae,
    Pl as je
} from "./30901919-e8h11sw136qen6v0.js";
import {
    Cg as Me,
    Dg as Ne,
    Jg as Pe,
    Kg as Fe,
    Og as Ie,
    Qg as Le,
    Sg as Re,
    Tg as ze,
    Xg as Be,
    Yg as Ve,
    qg as He,
    wg as M,
    xg as Ue
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    l as We,
    u as N
} from "./e19f3910-loev8shk5up3qwjb.js";
import {
    n as Ge,
    r as Ke,
    t as qe
} from "./06da37f5-fktkl2injkwukktx.js";
import {
    a as Je,
    i as Ye,
    n as Xe,
    r as Ze,
    t as P
} from "./7a206bce-l5s0pa1n2rxelhcp.js";

function Qe(e) {
    "use forget";
    let t = (0, ot.c)(2);
    if (!N()) return null;
    let n;
    return t[0] === e ? n = t[1] : (n = (0, R.jsx)($e, {
        ...e
    }), t[0] = e, t[1] = n), n
}

function $e(e) {
    "use forget";
    let t = (0, ot.c)(93),
        {
            rateLimit: n,
            linkToUsageDashboard: i
        } = e,
        a = i !== void 0 && i,
        o = me(),
        s = pe(),
        [c, l] = (0, L.useState)(!1),
        ae = Ve(),
        ce = Be(),
        le = Le(),
        ue = Pe(),
        p = He(),
        h = re(rt),
        g = n.rate_limit_reached_type?.type,
        _ = n.spend_control?.reached === !0 || g === `workspace_member_usage_limit_reached` || g === `workspace_owner_usage_limit_reached`,
        {
            sendRequest: v,
            hasRequested: y,
            requestDisabled: x,
            usesSavedRequests: S
        } = _e(h),
        C;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (C = de({
        openModalLocation: z
    }), t[0] = C) : C = t[0];
    let w = C,
        T = ze() === Me.enabled && !ae && !ce,
        ge = Ie(n.plan_type === u.FREE || n.plan_type === u.GO),
        O = ie(o, te(n) ?? 0),
        k = se(),
        xe = _ ? `usage_limit` : `credits`,
        A;
    t[1] !== k || t[2] !== n || t[3] !== xe ? (A = ye(k, n, xe), t[1] = k, t[2] = n, t[3] = xe, t[4] = A) : A = t[4];
    let we = A,
        Te = we != null,
        j;
    t[5] === k ? j = t[6] : (j = k?.getWorkspaceId(), t[5] = k, t[6] = j);
    let Ae = j,
        Ne;
    t[7] !== k || t[8] !== n || t[9] !== Ae ? (Ne = k?.planType === u.ENT26 && k.id === n.account_id && Ae != null && oe(n), t[7] = k, t[8] = n, t[9] = Ae, t[10] = Ne) : Ne = t[10];
    let Fe = Ne,
        M = k != null,
        Ue = (0, L.useRef)(null),
        We;
    t[11] === k ? We = t[12] : (We = k?.getSubscriptionBillingCurrency() ?? `USD`, t[11] = k, t[12] = We);
    let N = We,
        [Ge, Ze] = (0, L.useState)(null),
        [Qe, $e] = (0, L.useState)(!1),
        at, F;
    t[13] === N ? (at = t[14], F = t[15]) : (at = () => {
        (async function() {
            let e = await d(void 0, N);
            Ze(e), $e(!0)
        })()
    }, F = [N], t[13] = N, t[14] = at, t[15] = F), (0, L.useEffect)(at, F);
    let I, B, ct;
    t[16] !== o || t[17] !== a ? (ct = a ? o.formatMessage({
        id: `wham.usageDashboard.upsellBanner.viewUsage`,
        defaultMessage: `View usage`
    }) : null, t[16] = o, t[17] = a, t[18] = ct) : ct = t[18];
    let V = ct,
        H = a ? () => {
            s(`/codex/cloud/settings/usage`)
        } : nt,
        U = a ? `view_usage` : null,
        W = null,
        G = tt,
        K = null,
        q = !1,
        lt;
    t[19] === o ? lt = t[20] : (lt = o.formatMessage({
        id: `wham.usageDashboard.upsellBanner.addCredits`,
        defaultMessage: `Add credits`
    }), t[19] = o, t[20] = lt);
    let J = lt,
        ut;
    t[21] === o ? ut = t[22] : (ut = o.formatMessage({
        id: `wham.upsellBanner.upgradePlan`,
        defaultMessage: `Upgrade`
    }), t[21] = o, t[22] = ut);
    let dt = ut,
        ft;
    t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (ft = () => {
        be(ve, {
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: D.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            onCheckoutPresented: () => l(!1),
            onCustomCheckoutEnd: () => l(!1),
            onCustomCheckoutStart: () => l(!0)
        })
    }, t[23] = ft) : ft = t[23];
    let Y = ft,
        pt;
    t[24] !== p || t[25] !== s ? (pt = () => {
        w && Ce({
            navigate: s,
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: D.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            openModalLocation: z,
            pricingTarget: De(p ? `plus` : `pro`)
        })
    }, t[24] = p, t[25] = s, t[26] = pt) : pt = t[26];
    let mt = pt,
        ht = n.promo?.campaign_id,
        X = n.rate_limit_upsell,
        gt, _t;
    t[27] !== k || t[28] !== X?.ctas || t[29] !== X?.request_url ? (gt = k?.isOwnerOfAccount() && X?.request_url === he(k.id), _t = X?.ctas.find(e => e.action === `request_usage` || gt && e.action === `request_increase`), t[27] = k, t[28] = X?.ctas, t[29] = X?.request_url, t[30] = gt, t[31] = _t) : (gt = t[30], _t = t[31]);
    let Z = _t,
        vt = k != null && k.id === n.account_id && S && Z != null;
    if (vt && X != null) {
        I = Xe(g) ?? it(n), B = X.description, V = Z.label, H = () => {
            gt && Z.action === `request_increase` ? Oe(k.id) : Z.reason != null && v(`usage_limit`, Z.reason, Ee.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
        }, U = k.isOwnerOfAccount() ? `view_usage` : `request_increase`, q = !k.isOwnerOfAccount() && (Z.reason == null || x);
        let e;
        t[32] === X.ctas ? e = t[33] : (e = X.ctas.find(et), t[32] = X.ctas, t[33] = e);
        let r = e;
        if (r != null && X.referral != null) {
            W = r.label, K = `invite`;
            let e = X.referral;
            G = () => f(Se, {
                programId: e.program_id,
                entrypoint: `rate_limit`,
                rateLimitType: X.banner_type
            })
        }
    } else if (Fe) {
        I = Xe(g) ?? it(n);
        let e = k.isOwnerOfAccount(),
            r = e ? Ke.ownerDescription : Ke.memberDescription,
            i;
        if (t[34] === r ? i = t[35] : (i = (0, R.jsx)(b, {
                ...r
            }), t[34] = r, t[35] = i), B = i, W = V, G = H, K = U, e) {
            let e;
            t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, R.jsx)(b, {
                ...Ke.editBudget
            }), t[36] = e) : e = t[36], V = e, H = () => {
                window.open(ke(`/billing`, Ae), `_blank`, `noopener,noreferrer`)
            }, U = `add_credits`
        } else {
            let e = y ? E.requested : Ke.contactOwner,
                n;
            t[37] === e ? n = t[38] : (n = (0, R.jsx)(b, {
                ...e
            }), t[37] = e, t[38] = n), V = n, H = () => {
                v(`credits`, void 0, Ee.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
            }, U = `notify_owner`, q = x
        }
    } else if (ae)
        if (I = P({
                bannerType: `plus_rate_limit_reached`,
                limitReason: `usage_limit`
            }), r(`2238071649`)) {
            let e = Re();
            if (!Ge || !Qe || !k) B = e ? (0, R.jsx)(b, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody2.addCredits.higherLimits`,
                defaultMessage: `Add credits to keep going now, or upgrade to Pro for more usage. Your limit will reset after {time}.`,
                values: {
                    time: O
                }
            }) : (0, R.jsx)(b, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody2.higherLimits`,
                defaultMessage: `Upgrade to Pro to get more usage, or wait for your limit to reset after {time}.`,
                values: {
                    time: O
                }
            });
            else {
                let t = fe(Ge, m(u.PROLITE), ne.Month).amount;
                B = e ? (0, R.jsx)(b, {
                    id: `wham.usageDashboard.limitReachedWithCredits.plusBody3.addCredits.higherLimits`,
                    defaultMessage: `Add credits to keep going now, or upgrade to Pro for more usage at {costString}/month. Your limit will reset after {time}.`,
                    values: {
                        time: O,
                        costString: o.formatNumber(t, {
                            style: `currency`,
                            currency: N,
                            trailingZeroDisplay: `stripIfInteger`
                        })
                    }
                }) : (0, R.jsx)(b, {
                    id: `wham.usageDashboard.limitReachedWithCredits.plusBody3.higherLimits`,
                    defaultMessage: `Upgrade to Pro to get more usage for {costString}/month, or wait for your limit to reset after {time}.`,
                    values: {
                        time: O,
                        costString: o.formatNumber(t, {
                            style: `currency`,
                            currency: N,
                            trailingZeroDisplay: `stripIfInteger`
                        })
                    }
                })
            }
            w && (W = V, G = H, K = U, V = dt, H = mt, U = `upgrade`), e && (w ? (W = J, G = Y, K = `add_credits`) : (V = J, H = Y, U = `add_credits`))
        } else {
            let e;
            t[39] === O ? e = t[40] : (e = (0, R.jsx)(b, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody.addCreditsFirst`,
                defaultMessage: `Add credits to keep going now, or upgrade for more usage. Your limit will reset on {time}.`,
                values: {
                    time: O
                }
            }), t[39] = O, t[40] = e), B = e, V = J, H = Y, U = `add_credits`, w && (W = dt, G = mt, K = `upgrade`)
        }
    else if (ce) {
        let e = Re();
        I = P({
            bannerType: `prolite_rate_limit_reached`,
            limitReason: `usage_limit`
        }), B = e ? (0, R.jsx)(b, {
            id: `wham.usageDashboard.limitReachedWithCredits.proLiteBody.addCredits.higherLimits`,
            defaultMessage: `Add credits to keep going now, or upgrade for more usage. Your limit will reset at {time}.`,
            values: {
                time: O
            }
        }) : (0, R.jsx)(b, {
            id: `wham.usageDashboard.limitReachedWithCredits.proLiteBody.higherLimits`,
            defaultMessage: `Upgrade for more usage, or wait for your limit to reset at {time}.`,
            values: {
                time: O
            }
        }), w && (W = V, G = H, K = U, V = dt, H = mt, U = `upgrade`), e && (w ? (W = J, G = Y, K = `add_credits`) : (V = J, H = Y, U = `add_credits`))
    } else if (ge) {
        I = P({
            bannerType: `free_or_go_rate_limit_reached`,
            limitReason: `usage_limit`
        });
        let e;
        t[41] === O ? e = t[42] : (e = (0, R.jsx)(b, {
            id: `wham.usageDashboard.limitReachedWithCredits.freeGoBody.addCredits`,
            defaultMessage: `Add credits to keep going now, or upgrade to Plus. Your limit will reset on {time}.`,
            values: {
                time: O
            }
        }), t[41] = O, t[42] = e), B = e, V = J, H = Y, U = `add_credits`, w && (W = dt, G = mt, K = `upgrade`)
    } else if (T) {
        if (I = P({
                bannerType: `pro_rate_limit_reached`,
                limitReason: `usage_limit`
            }), r(`2238071649`)) {
            let e;
            t[43] === O ? e = t[44] : (e = (0, R.jsx)(b, {
                id: `wham.usageDashboard.limitReachedWithCredits.proBody2.addCreditsKeepGoing`,
                defaultMessage: `Add credits to keep going, or wait until your balance resets at {time}.`,
                values: {
                    time: O
                }
            }), t[43] = O, t[44] = e), B = e
        } else {
            let e;
            t[45] === O ? e = t[46] : (e = (0, R.jsx)(b, {
                id: `wham.usageDashboard.limitReachedWithCredits.proBody`,
                defaultMessage: `Add credits to continue, or wait until {time}.`,
                values: {
                    time: O
                }
            }), t[45] = O, t[46] = e), B = e
        }
        W = V, G = H, K = U, V = J, H = Y, U = `add_credits`
    } else if (!ue && (le || Te)) {
        I = Xe(g) ?? it(n);
        let e;
        if (t[47] === O ? e = t[48] : (e = (0, R.jsx)(b, {
                id: `wham.usageDashboard.limitReachedWithCredits.teamOrEnterpriseBody`,
                defaultMessage: `Try again after {time}, or send a request to your admin.`,
                values: {
                    time: O
                }
            }), t[47] = O, t[48] = e), B = e, Te) {
            W = V, G = H, K = U;
            let e;
            t[49] !== y || t[50] !== o ? (e = o.formatMessage(y ? E.requested : E.sendRequest), t[49] = y, t[50] = o, t[51] = e) : e = t[51], V = e, H = () => {
                v(we, void 0, Ee.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
            }, U = we === `usage_limit` ? `increase_spend_cap` : `notify_owner`, q = x
        }
    } else if (p) {
        if (ht === st) {
            I = P({
                bannerType: n.plan_type === u.GO ? `go_trial_rate_limit_reached` : `free_trial_rate_limit_reached`,
                limitReason: `usage_limit`
            });
            let e;
            t[52] === O ? e = t[53] : (e = (0, R.jsx)(b, {
                id: `wham.usageDashboard.limitReachedWithCredits.freeGoBodyWithPromo`,
                defaultMessage: `To continue using Codex, start your free trial of Plus today. Your limit will reset on {time}.`,
                values: {
                    time: O
                }
            }), t[52] = O, t[53] = e), B = e
        } else {
            I = P({
                bannerType: `free_or_go_rate_limit_reached`,
                limitReason: `usage_limit`
            });
            let e;
            t[54] === O ? e = t[55] : (e = (0, R.jsx)(b, {
                id: `wham.usageDashboard.limitReachedWithCredits.freeGoBody`,
                defaultMessage: `Upgrade to Plus to keep going. Your limit will reset on {time}.`,
                values: {
                    time: O
                }
            }), t[54] = O, t[55] = e), B = e
        }
        w && (W = V, G = H, K = U, V = dt, H = mt, U = `upgrade`)
    } else {
        I = P({
            bannerType: `legacy_rate_limit_reached`,
            limitReason: `usage_limit`
        });
        let e;
        t[56] === O ? e = t[57] : (e = (0, R.jsx)(b, {
            id: `wham.usageDashboard.limitReachedWithCredits.legacyEnterpriseBody`,
            defaultMessage: `Try again after {time}, or ask your admin to upgrade to a plan with credits.`,
            values: {
                time: O
            }
        }), t[56] = O, t[57] = e), B = e
    }
    let Q = `${I.platform}:${I.banner_type}:${I.limit_reason}`,
        yt;
    t[58] !== I || t[59] !== M || t[60] !== Q ? (yt = () => {
        M && Ue.current !== Q && (Ue.current = Q, Je(I, `usage_dashboard`))
    }, t[58] = I, t[59] = M, t[60] = Q, t[61] = yt) : yt = t[61];
    let bt;
    t[62] !== I || t[63] !== M || t[64] !== Q ? (bt = [I, M, Q], t[62] = I, t[63] = M, t[64] = Q, t[65] = bt) : bt = t[65], (0, L.useEffect)(yt, bt);
    let xt;
    t[66] !== I || t[67] !== M || t[68] !== q || t[69] !== H || t[70] !== U ? (xt = () => {
        M && U != null && !q && Ye({
            context: I,
            ctaAction: U,
            surface: `usage_dashboard`
        }), H()
    }, t[66] = I, t[67] = M, t[68] = q, t[69] = H, t[70] = U, t[71] = xt) : xt = t[71];
    let St = xt,
        Ct;
    t[72] !== I || t[73] !== M || t[74] !== G || t[75] !== K ? (Ct = () => {
        M && K != null && Ye({
            context: I,
            ctaAction: K,
            surface: `usage_dashboard`
        }), G()
    }, t[72] = I, t[73] = M, t[74] = G, t[75] = K, t[76] = Ct) : Ct = t[76];
    let wt = Ct,
        Tt;
    t[77] === Symbol.for(`react.memo_cache_sentinel`) ? (Tt = (0, R.jsx)(`div`, {
        className: `text-token-text-primary flex items-center justify-center`,
        children: (0, R.jsx)(je, {
            className: `icon`,
            "aria-hidden": !0
        })
    }), t[77] = Tt) : Tt = t[77];
    let $;
    t[78] !== k?.planType || t[79] !== X?.title || t[80] !== Fe || t[81] !== vt ? ($ = vt ? X?.title : Fe ? (0, R.jsx)(b, {
        ...Ke.title
    }) : k?.planType === u.ENT26 ? (0, R.jsx)(b, {
        id: `wham.usageDashboard.ent26.limitReached.title`,
        defaultMessage: `You’re out of usage for now`
    }) : (0, R.jsx)(b, {
        ...qe
    }), t[78] = k?.planType, t[79] = X?.title, t[80] = Fe, t[81] = vt, t[82] = $) : $ = t[82];
    let Et = W == null ? void 0 : wt,
        Dt = c && U === `add_credits`,
        Ot = c && K === `add_credits`,
        kt;
    return t[83] !== B || t[84] !== q || t[85] !== V || t[86] !== W || t[87] !== $ || t[88] !== Et || t[89] !== Dt || t[90] !== Ot || t[91] !== St ? (kt = (0, R.jsx)(ee, {
        className: `shadow-[0_16px_32px_-24px_rgba(15,23,42,0.25)]`,
        icon: Tt,
        title: $,
        content: B,
        primaryCtaText: V,
        primaryCtaColor: `primary`,
        onPrimaryCtaClick: St,
        secondaryCtaText: W,
        onSecondaryCtaClick: Et,
        isPrimaryCtaDisabled: q,
        isPrimaryCtaLoading: Dt,
        isSecondaryCtaLoading: Ot,
        secondaryCtaColor: `secondary`,
        verticalCta: !1
    }), t[83] = B, t[84] = q, t[85] = V, t[86] = W, t[87] = $, t[88] = Et, t[89] = Dt, t[90] = Ot, t[91] = St, t[92] = kt) : kt = t[92], kt
}

function et(e) {
    return e.action === `invite` || e.action === `refer`
}

function tt() {}

function nt() {}

function rt() {
    return s()?.id
}

function it(e) {
    return g(e.plan_type) ? P({
        bannerType: `business_rate_limit_reached`,
        limitReason: `usage_limit`
    }) : e.plan_type === u.EDUCATION_CBP || e.plan_type === u.EDU_PLUS || e.plan_type === u.EDU_PRO || e.plan_type === u.ENTERPRISE_CBP || e.plan_type === u.ENTERPRISE_CBP_USAGE_BASED || e.plan_type === u.HC || e.plan_type === u.HC_CONSUMPTION || e.plan_type === u.FINSERV || e.plan_type === u.LAW || e.plan_type === u.QUORUM || e.plan_type === u.K12 ? P({
        bannerType: `cbp_rate_limit_reached`,
        limitReason: `usage_limit`
    }) : P({
        bannerType: `legacy_rate_limit_reached`,
        limitReason: `usage_limit`
    })
}

function at(e) {
    "use forget";
    let t = (0, ot.c)(36),
        {
            rateLimit: n
        } = e,
        r = me(),
        i = pe(),
        ne = se(),
        a = ne?.planType === u.ENT26 && ne.id === n.account_id,
        [re, o] = (0, L.useState)(!1),
        s = N(),
        c = Ve(),
        l = Be(),
        ae = Le(),
        oe = Pe(),
        ce = He(),
        le = de({
            openModalLocation: z
        }),
        ue = ze() === Me.enabled && !c && !l,
        d;
    t[0] !== r || t[1] !== n ? (d = ie(r, te(n) ?? 0), t[0] = r, t[1] = n, t[2] = d) : d = t[2];
    let f = d;
    if (!s) return null;
    let p;
    t[3] === f ? p = t[4] : (p = (0, R.jsx)(b, {
        id: `wham.usageDashboard.nearLimitWithCredits.defaultBody`,
        defaultMessage: `You’re getting close to your limit. It will reset on {time}.`,
        values: {
            time: f
        }
    }), t[3] = f, t[4] = p);
    let m = p,
        h = null,
        g = I,
        fe = null,
        _ = F,
        v;
    t[5] === r ? v = t[6] : (v = r.formatMessage({
        id: `wham.usageDashboard.upsellBanner.addCredits`,
        defaultMessage: `Add credits`
    }), t[5] = r, t[6] = v);
    let y = v,
        x;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (x = () => {
        be(ve, {
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: D.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            onCheckoutPresented: () => o(!1),
            onCustomCheckoutEnd: () => o(!1),
            onCustomCheckoutStart: () => o(!0)
        })
    }, t[7] = x) : x = t[7];
    let S = x,
        C = n.promo?.campaign_id;
    if (c || l) {
        let e;
        if (t[8] === f ? e = t[9] : (e = (0, R.jsx)(b, {
                id: `wham.usageDashboard.nearLimitWithCredits.plusBody.addCreditsFirst.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Add credits to keep building now, or upgrade for more usage. Your limit resets on {time}.`,
                values: {
                    time: f
                }
            }), t[8] = f, t[9] = e), m = e, h = y, g = S, le) {
            let e;
            t[10] === r ? e = t[11] : (e = r.formatMessage({
                id: `wham.upsellBanner.upgradeToPro`,
                defaultMessage: `Upgrade`
            }), t[10] = r, t[11] = e), fe = e;
            let n;
            t[12] === i ? n = t[13] : (n = () => {
                Ce({
                    navigate: i,
                    checkoutOriginProvenance: {
                        checkoutOriginProductExperience: D.CODEX,
                        checkoutOriginDeliverySurface: `web`
                    },
                    openModalLocation: z,
                    pricingTarget: De(`pro`)
                })
            }, t[12] = i, t[13] = n), _ = n
        }
    } else if (ue) {
        let e;
        t[14] === f ? e = t[15] : (e = (0, R.jsx)(b, {
            id: `wham.usageDashboard.nearLimitWithCredits.proBody.codexAndWork`,
            defaultMessage: `You're nearing your Codex and Work usage limit. Add credits to stay unblocked, or wait until {time}.`,
            values: {
                time: f
            }
        }), t[14] = f, t[15] = e), m = e, h = y, g = S
    } else if (ae && !oe) {
        let e;
        t[16] !== a || t[17] !== f ? (e = a ? (0, R.jsx)(b, {
            id: `wham.usageDashboard.nearLimit.ent26.body`,
            defaultMessage: `You're nearing your usage limit. Try again after {time}, or contact your admin if you need more capacity.`,
            values: {
                time: f
            }
        }) : (0, R.jsx)(b, {
            id: `wham.usageDashboard.nearLimitWithCredits.teamOrEnterpriseBody.codexAndWork`,
            defaultMessage: `You're nearing your Codex and Work usage limit. Try again after {time}, or contact your admin if you need more capacity.`,
            values: {
                time: f
            }
        }), t[16] = a, t[17] = f, t[18] = e) : e = t[18], m = e
    } else if (ce) {
        if (C === st) {
            let e;
            t[19] === f ? e = t[20] : (e = (0, R.jsx)(b, {
                id: `wham.usageDashboard.nearLimitWithCredits.freeGoBodyWithPromo.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Start a free trial of Plus today to keep building. Your limit resets on {time}.`,
                values: {
                    time: f
                }
            }), t[19] = f, t[20] = e), m = e
        } else {
            let e;
            t[21] === f ? e = t[22] : (e = (0, R.jsx)(b, {
                id: `wham.usageDashboard.nearLimitWithCredits.freeGoBody.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Upgrade to Plus to keep going. Your limit resets on {time}.`,
                values: {
                    time: f
                }
            }), t[21] = f, t[22] = e), m = e
        }
        if (le) {
            let e;
            t[23] === r ? e = t[24] : (e = r.formatMessage({
                id: `wham.upsellBanner.upgradeToPlus`,
                defaultMessage: `Upgrade`
            }), t[23] = r, t[24] = e), h = e;
            let n;
            t[25] === i ? n = t[26] : (n = () => {
                Ce({
                    navigate: i,
                    checkoutOriginProvenance: {
                        checkoutOriginProductExperience: D.CODEX,
                        checkoutOriginDeliverySurface: `web`
                    },
                    openModalLocation: z,
                    pricingTarget: De(`plus`)
                })
            }, t[25] = i, t[26] = n), g = n
        }
    }
    let w;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, R.jsx)(`div`, {
        className: `text-token-text-primary flex items-center justify-center`,
        children: (0, R.jsx)(je, {
            className: `icon`,
            "aria-hidden": !0
        })
    }), t[27] = w) : w = t[27];
    let he = re && g === S,
        T = re && _ === S,
        E;
    return t[28] !== m || t[29] !== g || t[30] !== _ || t[31] !== h || t[32] !== fe || t[33] !== he || t[34] !== T ? (E = (0, R.jsx)(ee, {
        className: `shadow-[0_16px_32px_-24px_rgba(15,23,42,0.25)]`,
        icon: w,
        content: m,
        primaryCtaText: h,
        primaryCtaColor: `primary`,
        onPrimaryCtaClick: g,
        isPrimaryCtaLoading: he,
        secondaryCtaText: fe,
        onSecondaryCtaClick: _,
        isSecondaryCtaLoading: T,
        secondaryCtaColor: `secondary`,
        verticalCta: !1
    }), t[28] = m, t[29] = g, t[30] = _, t[31] = h, t[32] = fe, t[33] = he, t[34] = T, t[35] = E) : E = t[35], E
}

function F() {}

function I() {}
var ot, L, R, st, z, B = e((() => {
    ot = w(), ge(), T(), p(), O(), j(), n(), A(), we(), ae(), Ae(), c(), v(), Te(), ue(), o(), _(), le(), l(), i(), ce(), We(), Fe(), M(), k(), Ze(), Ue(), Ge(), Ne(), xe(), h(), L = t(C()), S(), x(), R = y(), st = `plus-1-month-free`, z = a.WhamUsageDashboardRateLimitUpsell
}));
export {
    Qe as n, B as r, at as t
};
//# sourceMappingURL=35fc21ca-h9922pt5oghltdcm.js.map