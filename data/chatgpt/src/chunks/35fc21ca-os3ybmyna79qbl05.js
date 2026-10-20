import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aet as n,
    H4 as r,
    I6 as i,
    Ji as ee,
    Kl as te,
    L1 as a,
    N5 as ne,
    Q0 as o,
    R6 as s,
    Ul as re,
    Wnt as ie,
    X1 as ae,
    Xi as c,
    Xl as oe,
    Xnt as se,
    _R as ce,
    c6 as le,
    d6 as ue,
    f6 as de,
    h8 as fe,
    jet as l,
    l6 as u,
    mst as d,
    n6 as f,
    q3 as p,
    ql as m,
    t2 as h,
    tct as g,
    wet as _,
    xR as v
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    B8t as he,
    Bcn as ge,
    Bln as _e,
    Cdn as T,
    GEn as E,
    Hln as ve,
    I8t as ye,
    Icn as D,
    K$ as be,
    Qun as xe,
    Rcn as Se,
    Sdn as Ce,
    Uln as we,
    Vcn as Te,
    Vln as Ee,
    WEn as De,
    Xun as Oe,
    Zun as ke,
    crn as Ae,
    ern as je,
    q$ as Me,
    rrn as Ne
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Fl as Pe,
    Pl as Fe
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    Cg as Ie,
    Dg as Le,
    Jg as Re,
    Kg as O,
    Og as ze,
    Qg as Be,
    Sg as Ve,
    Tg as He,
    Xg as Ue,
    Yg as We,
    qg as Ge,
    wg as k,
    xg as Ke
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    l as A,
    u as j
} from "./e19f3910-b7spt86odw5z3csr.js";
import {
    n as qe,
    r as M,
    t as Je
} from "./06da37f5-fktkl2injkwukktx.js";
import {
    a as Ye,
    i as Xe,
    n as Ze,
    r as Qe,
    t as N
} from "./7a206bce-6ih9mj2l13a1zalu.js";

function $e(e) {
    "use forget";
    let t = (0, ot.c)(2);
    if (!j()) return null;
    let n;
    return t[0] === e ? n = t[1] : (n = (0, R.jsx)(et, {
        ...e
    }), t[0] = e, t[1] = n), n
}

function et(e) {
    "use forget";
    let t = (0, ot.c)(93),
        {
            rateLimit: r,
            linkToUsageDashboard: a
        } = e,
        o = a !== void 0 && a,
        s = me(),
        c = pe(),
        [se, ce] = (0, L.useState)(!1),
        ue = We(),
        fe = Ue(),
        l = Be(),
        f = Re(),
        p = Ge(),
        m = ne(it),
        g = r.rate_limit_reached_type?.type,
        _ = r.spend_control?.reached === !0 || g === `workspace_member_usage_limit_reached` || g === `workspace_owner_usage_limit_reached`,
        {
            sendRequest: v,
            hasRequested: y,
            requestDisabled: x,
            usesSavedRequests: S
        } = we(m),
        C;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (C = n({
        openModalLocation: z
    }), t[0] = C) : C = t[0];
    let w = C,
        he = He() === Ie.enabled && !ue && !fe,
        T = ze(r.plan_type === d.FREE || r.plan_type === d.GO),
        E = re(s, te(r) ?? 0),
        D = ae(),
        Te = _ ? `usage_limit` : `credits`,
        Ee;
    t[1] !== D || t[2] !== r || t[3] !== Te ? (Ee = _e(D, r, Te), t[1] = D, t[2] = r, t[3] = Te, t[4] = Ee) : Ee = t[4];
    let ke = Ee,
        Me = ke != null,
        Ne;
    t[5] === D ? Ne = t[6] : (Ne = D?.getWorkspaceId(), t[5] = D, t[6] = Ne);
    let Pe = Ne,
        Le;
    t[7] !== D || t[8] !== r || t[9] !== Pe ? (Le = D?.planType === d.ENT26 && D.id === r.account_id && Pe != null && oe(r), t[7] = D, t[8] = r, t[9] = Pe, t[10] = Le) : Le = t[10];
    let O = Le,
        k = D != null,
        Ke = (0, L.useRef)(null),
        A;
    t[11] === D ? A = t[12] : (A = D?.getSubscriptionBillingCurrency() ?? `USD`, t[11] = D, t[12] = A);
    let j = A,
        [qe, Qe] = (0, L.useState)(null),
        [$e, et] = (0, L.useState)(!1),
        P, F;
    t[13] === j ? (P = t[14], F = t[15]) : (P = () => {
        (async function() {
            let e = await le(void 0, j);
            Qe(e), et(!0)
        })()
    }, F = [j], t[13] = j, t[14] = P, t[15] = F), (0, L.useEffect)(P, F);
    let I, B, ct;
    t[16] !== s || t[17] !== o ? (ct = o ? s.formatMessage({
        id: `wham.usageDashboard.upsellBanner.viewUsage`,
        defaultMessage: `View usage`
    }) : null, t[16] = s, t[17] = o, t[18] = ct) : ct = t[18];
    let V = ct,
        H = o ? () => {
            c(`/codex/cloud/settings/usage`)
        } : rt,
        U = o ? `view_usage` : null,
        W = null,
        G = nt,
        K = null,
        q = !1,
        lt;
    t[19] === s ? lt = t[20] : (lt = s.formatMessage({
        id: `wham.usageDashboard.upsellBanner.addCredits`,
        defaultMessage: `Add credits`
    }), t[19] = s, t[20] = lt);
    let J = lt,
        ut;
    t[21] === s ? ut = t[22] : (ut = s.formatMessage({
        id: `wham.upsellBanner.upgradePlan`,
        defaultMessage: `Upgrade`
    }), t[21] = s, t[22] = ut);
    let dt = ut,
        ft;
    t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (ft = () => {
        Se(ge, {
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: Ce.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            onCheckoutPresented: () => ce(!1),
            onCustomCheckoutEnd: () => ce(!1),
            onCustomCheckoutStart: () => ce(!0)
        })
    }, t[23] = ft) : ft = t[23];
    let Y = ft,
        pt;
    t[24] !== p || t[25] !== c ? (pt = () => {
        w && Ae({
            navigate: c,
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: Ce.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            openModalLocation: z,
            pricingTarget: je(p ? `plus` : `pro`)
        })
    }, t[24] = p, t[25] = c, t[26] = pt) : pt = t[26];
    let mt = pt,
        ht = r.promo?.campaign_id,
        X = r.rate_limit_upsell,
        gt, _t;
    t[27] !== D || t[28] !== X?.ctas || t[29] !== X?.request_url ? (gt = D?.isOwnerOfAccount() && X?.request_url === Oe(D.id), _t = X?.ctas.find(e => e.action === `request_usage` || gt && e.action === `request_increase`), t[27] = D, t[28] = X?.ctas, t[29] = X?.request_url, t[30] = gt, t[31] = _t) : (gt = t[30], _t = t[31]);
    let Z = _t,
        vt = D != null && D.id === r.account_id && S && Z != null;
    if (vt && X != null) {
        I = Ze(g) ?? at(r), B = X.description, V = Z.label, H = () => {
            gt && Z.action === `request_increase` ? xe(D.id) : Z.reason != null && v(`usage_limit`, Z.reason, De.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
        }, U = D.isOwnerOfAccount() ? `view_usage` : `request_increase`, q = !D.isOwnerOfAccount() && (Z.reason == null || x);
        let e;
        t[32] === X.ctas ? e = t[33] : (e = X.ctas.find(tt), t[32] = X.ctas, t[33] = e);
        let n = e;
        if (n != null && X.referral != null) {
            W = n.label, K = `invite`;
            let e = X.referral;
            G = () => h(be, {
                programId: e.program_id,
                entrypoint: `rate_limit`,
                rateLimitType: X.banner_type
            })
        }
    } else if (O) {
        I = Ze(g) ?? at(r);
        let e = D.isOwnerOfAccount(),
            n = e ? M.ownerDescription : M.memberDescription,
            i;
        if (t[34] === n ? i = t[35] : (i = (0, R.jsx)(b, {
                ...n
            }), t[34] = n, t[35] = i), B = i, W = V, G = H, K = U, e) {
            let e;
            t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, R.jsx)(b, {
                ...M.editBudget
            }), t[36] = e) : e = t[36], V = e, H = () => {
                window.open(ye(`/billing`, Pe), `_blank`, `noopener,noreferrer`)
            }, U = `add_credits`
        } else {
            let e = y ? ve.requested : M.contactOwner,
                n;
            t[37] === e ? n = t[38] : (n = (0, R.jsx)(b, {
                ...e
            }), t[37] = e, t[38] = n), V = n, H = () => {
                v(`credits`, void 0, De.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
            }, U = `notify_owner`, q = x
        }
    } else if (ue)
        if (I = N({
                bannerType: `plus_rate_limit_reached`,
                limitReason: `usage_limit`
            }), ie(`2238071649`)) {
            let e = Ve();
            if (!qe || !$e || !D) B = e ? (0, R.jsx)(b, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody2.addCredits.higherLimits`,
                defaultMessage: `Add credits to keep going now, or upgrade to Pro for more usage. Your limit will reset after {time}.`,
                values: {
                    time: E
                }
            }) : (0, R.jsx)(b, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody2.higherLimits`,
                defaultMessage: `Upgrade to Pro to get more usage, or wait for your limit to reset after {time}.`,
                values: {
                    time: E
                }
            });
            else {
                let t = u(qe, de(d.PROLITE), i.Month).amount;
                B = e ? (0, R.jsx)(b, {
                    id: `wham.usageDashboard.limitReachedWithCredits.plusBody3.addCredits.higherLimits`,
                    defaultMessage: `Add credits to keep going now, or upgrade to Pro for more usage at {costString}/month. Your limit will reset after {time}.`,
                    values: {
                        time: E,
                        costString: s.formatNumber(t, {
                            style: `currency`,
                            currency: j,
                            trailingZeroDisplay: `stripIfInteger`
                        })
                    }
                }) : (0, R.jsx)(b, {
                    id: `wham.usageDashboard.limitReachedWithCredits.plusBody3.higherLimits`,
                    defaultMessage: `Upgrade to Pro to get more usage for {costString}/month, or wait for your limit to reset after {time}.`,
                    values: {
                        time: E,
                        costString: s.formatNumber(t, {
                            style: `currency`,
                            currency: j,
                            trailingZeroDisplay: `stripIfInteger`
                        })
                    }
                })
            }
            w && (W = V, G = H, K = U, V = dt, H = mt, U = `upgrade`), e && (w ? (W = J, G = Y, K = `add_credits`) : (V = J, H = Y, U = `add_credits`))
        } else {
            let e;
            t[39] === E ? e = t[40] : (e = (0, R.jsx)(b, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody.addCreditsFirst`,
                defaultMessage: `Add credits to keep going now, or upgrade for more usage. Your limit will reset on {time}.`,
                values: {
                    time: E
                }
            }), t[39] = E, t[40] = e), B = e, V = J, H = Y, U = `add_credits`, w && (W = dt, G = mt, K = `upgrade`)
        }
    else if (fe) {
        let e = Ve();
        I = N({
            bannerType: `prolite_rate_limit_reached`,
            limitReason: `usage_limit`
        }), B = e ? (0, R.jsx)(b, {
            id: `wham.usageDashboard.limitReachedWithCredits.proLiteBody.addCredits.higherLimits`,
            defaultMessage: `Add credits to keep going now, or upgrade for more usage. Your limit will reset at {time}.`,
            values: {
                time: E
            }
        }) : (0, R.jsx)(b, {
            id: `wham.usageDashboard.limitReachedWithCredits.proLiteBody.higherLimits`,
            defaultMessage: `Upgrade for more usage, or wait for your limit to reset at {time}.`,
            values: {
                time: E
            }
        }), w && (W = V, G = H, K = U, V = dt, H = mt, U = `upgrade`), e && (w ? (W = J, G = Y, K = `add_credits`) : (V = J, H = Y, U = `add_credits`))
    } else if (T) {
        I = N({
            bannerType: `free_or_go_rate_limit_reached`,
            limitReason: `usage_limit`
        });
        let e;
        t[41] === E ? e = t[42] : (e = (0, R.jsx)(b, {
            id: `wham.usageDashboard.limitReachedWithCredits.freeGoBody.addCredits`,
            defaultMessage: `Add credits to keep going now, or upgrade to Plus. Your limit will reset on {time}.`,
            values: {
                time: E
            }
        }), t[41] = E, t[42] = e), B = e, V = J, H = Y, U = `add_credits`, w && (W = dt, G = mt, K = `upgrade`)
    } else if (he) {
        if (I = N({
                bannerType: `pro_rate_limit_reached`,
                limitReason: `usage_limit`
            }), ie(`2238071649`)) {
            let e;
            t[43] === E ? e = t[44] : (e = (0, R.jsx)(b, {
                id: `wham.usageDashboard.limitReachedWithCredits.proBody2.addCreditsKeepGoing`,
                defaultMessage: `Add credits to keep going, or wait until your balance resets at {time}.`,
                values: {
                    time: E
                }
            }), t[43] = E, t[44] = e), B = e
        } else {
            let e;
            t[45] === E ? e = t[46] : (e = (0, R.jsx)(b, {
                id: `wham.usageDashboard.limitReachedWithCredits.proBody`,
                defaultMessage: `Add credits to continue, or wait until {time}.`,
                values: {
                    time: E
                }
            }), t[45] = E, t[46] = e), B = e
        }
        W = V, G = H, K = U, V = J, H = Y, U = `add_credits`
    } else if (!f && (l || Me)) {
        I = Ze(g) ?? at(r);
        let e;
        if (t[47] === E ? e = t[48] : (e = (0, R.jsx)(b, {
                id: `wham.usageDashboard.limitReachedWithCredits.teamOrEnterpriseBody`,
                defaultMessage: `Try again after {time}, or send a request to your admin.`,
                values: {
                    time: E
                }
            }), t[47] = E, t[48] = e), B = e, Me) {
            W = V, G = H, K = U;
            let e;
            t[49] !== y || t[50] !== s ? (e = s.formatMessage(y ? ve.requested : ve.sendRequest), t[49] = y, t[50] = s, t[51] = e) : e = t[51], V = e, H = () => {
                v(ke, void 0, De.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
            }, U = ke === `usage_limit` ? `increase_spend_cap` : `notify_owner`, q = x
        }
    } else if (p) {
        if (ht === st) {
            I = N({
                bannerType: r.plan_type === d.GO ? `go_trial_rate_limit_reached` : `free_trial_rate_limit_reached`,
                limitReason: `usage_limit`
            });
            let e;
            t[52] === E ? e = t[53] : (e = (0, R.jsx)(b, {
                id: `wham.usageDashboard.limitReachedWithCredits.freeGoBodyWithPromo`,
                defaultMessage: `To continue using Codex, start your free trial of Plus today. Your limit will reset on {time}.`,
                values: {
                    time: E
                }
            }), t[52] = E, t[53] = e), B = e
        } else {
            I = N({
                bannerType: `free_or_go_rate_limit_reached`,
                limitReason: `usage_limit`
            });
            let e;
            t[54] === E ? e = t[55] : (e = (0, R.jsx)(b, {
                id: `wham.usageDashboard.limitReachedWithCredits.freeGoBody`,
                defaultMessage: `Upgrade to Plus to keep going. Your limit will reset on {time}.`,
                values: {
                    time: E
                }
            }), t[54] = E, t[55] = e), B = e
        }
        w && (W = V, G = H, K = U, V = dt, H = mt, U = `upgrade`)
    } else {
        I = N({
            bannerType: `legacy_rate_limit_reached`,
            limitReason: `usage_limit`
        });
        let e;
        t[56] === E ? e = t[57] : (e = (0, R.jsx)(b, {
            id: `wham.usageDashboard.limitReachedWithCredits.legacyEnterpriseBody`,
            defaultMessage: `Try again after {time}, or ask your admin to upgrade to a plan with credits.`,
            values: {
                time: E
            }
        }), t[56] = E, t[57] = e), B = e
    }
    let Q = `${I.platform}:${I.banner_type}:${I.limit_reason}`,
        yt;
    t[58] !== I || t[59] !== k || t[60] !== Q ? (yt = () => {
        k && Ke.current !== Q && (Ke.current = Q, Ye(I, `usage_dashboard`))
    }, t[58] = I, t[59] = k, t[60] = Q, t[61] = yt) : yt = t[61];
    let bt;
    t[62] !== I || t[63] !== k || t[64] !== Q ? (bt = [I, k, Q], t[62] = I, t[63] = k, t[64] = Q, t[65] = bt) : bt = t[65], (0, L.useEffect)(yt, bt);
    let xt;
    t[66] !== I || t[67] !== k || t[68] !== q || t[69] !== H || t[70] !== U ? (xt = () => {
        k && U != null && !q && Xe({
            context: I,
            ctaAction: U,
            surface: `usage_dashboard`
        }), H()
    }, t[66] = I, t[67] = k, t[68] = q, t[69] = H, t[70] = U, t[71] = xt) : xt = t[71];
    let St = xt,
        Ct;
    t[72] !== I || t[73] !== k || t[74] !== G || t[75] !== K ? (Ct = () => {
        k && K != null && Xe({
            context: I,
            ctaAction: K,
            surface: `usage_dashboard`
        }), G()
    }, t[72] = I, t[73] = k, t[74] = G, t[75] = K, t[76] = Ct) : Ct = t[76];
    let wt = Ct,
        Tt;
    t[77] === Symbol.for(`react.memo_cache_sentinel`) ? (Tt = (0, R.jsx)(`div`, {
        className: `text-token-text-primary flex items-center justify-center`,
        children: (0, R.jsx)(Fe, {
            className: `icon`,
            "aria-hidden": !0
        })
    }), t[77] = Tt) : Tt = t[77];
    let $;
    t[78] !== D?.planType || t[79] !== X?.title || t[80] !== O || t[81] !== vt ? ($ = vt ? X?.title : O ? (0, R.jsx)(b, {
        ...M.title
    }) : D?.planType === d.ENT26 ? (0, R.jsx)(b, {
        id: `wham.usageDashboard.ent26.limitReached.title`,
        defaultMessage: `You’re out of usage for now`
    }) : (0, R.jsx)(b, {
        ...Je
    }), t[78] = D?.planType, t[79] = X?.title, t[80] = O, t[81] = vt, t[82] = $) : $ = t[82];
    let Et = W == null ? void 0 : wt,
        Dt = se && U === `add_credits`,
        Ot = se && K === `add_credits`,
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

function tt(e) {
    return e.action === `invite` || e.action === `refer`
}

function nt() {}

function rt() {}

function it() {
    return v()?.id
}

function at(e) {
    return f(e.plan_type) ? N({
        bannerType: `business_rate_limit_reached`,
        limitReason: `usage_limit`
    }) : e.plan_type === d.EDUCATION_CBP || e.plan_type === d.EDU_PLUS || e.plan_type === d.EDU_PRO || e.plan_type === d.ENTERPRISE_CBP || e.plan_type === d.ENTERPRISE_CBP_USAGE_BASED || e.plan_type === d.HC || e.plan_type === d.HC_CONSUMPTION || e.plan_type === d.FINSERV || e.plan_type === d.LAW || e.plan_type === d.QUORUM || e.plan_type === d.K12 ? N({
        bannerType: `cbp_rate_limit_reached`,
        limitReason: `usage_limit`
    }) : N({
        bannerType: `legacy_rate_limit_reached`,
        limitReason: `usage_limit`
    })
}

function P(e) {
    "use forget";
    let t = (0, ot.c)(36),
        {
            rateLimit: r
        } = e,
        i = me(),
        a = pe(),
        ne = ae(),
        o = ne?.planType === d.ENT26 && ne.id === r.account_id,
        [s, ie] = (0, L.useState)(!1),
        c = j(),
        oe = We(),
        se = Ue(),
        ce = Be(),
        le = Re(),
        ue = Ge(),
        de = n({
            openModalLocation: z
        }),
        fe = He() === Ie.enabled && !oe && !se,
        l;
    t[0] !== i || t[1] !== r ? (l = re(i, te(r) ?? 0), t[0] = i, t[1] = r, t[2] = l) : l = t[2];
    let u = l;
    if (!c) return null;
    let f;
    t[3] === u ? f = t[4] : (f = (0, R.jsx)(b, {
        id: `wham.usageDashboard.nearLimitWithCredits.defaultBody`,
        defaultMessage: `You’re getting close to your limit. It will reset on {time}.`,
        values: {
            time: u
        }
    }), t[3] = u, t[4] = f);
    let p = f,
        m = null,
        h = I,
        g = null,
        _ = F,
        v;
    t[5] === i ? v = t[6] : (v = i.formatMessage({
        id: `wham.usageDashboard.upsellBanner.addCredits`,
        defaultMessage: `Add credits`
    }), t[5] = i, t[6] = v);
    let y = v,
        x;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (x = () => {
        Se(ge, {
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: Ce.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            onCheckoutPresented: () => ie(!1),
            onCustomCheckoutEnd: () => ie(!1),
            onCustomCheckoutStart: () => ie(!0)
        })
    }, t[7] = x) : x = t[7];
    let S = x,
        C = r.promo?.campaign_id;
    if (oe || se) {
        let e;
        if (t[8] === u ? e = t[9] : (e = (0, R.jsx)(b, {
                id: `wham.usageDashboard.nearLimitWithCredits.plusBody.addCreditsFirst.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Add credits to keep building now, or upgrade for more usage. Your limit resets on {time}.`,
                values: {
                    time: u
                }
            }), t[8] = u, t[9] = e), p = e, m = y, h = S, de) {
            let e;
            t[10] === i ? e = t[11] : (e = i.formatMessage({
                id: `wham.upsellBanner.upgradeToPro`,
                defaultMessage: `Upgrade`
            }), t[10] = i, t[11] = e), g = e;
            let n;
            t[12] === a ? n = t[13] : (n = () => {
                Ae({
                    navigate: a,
                    checkoutOriginProvenance: {
                        checkoutOriginProductExperience: Ce.CODEX,
                        checkoutOriginDeliverySurface: `web`
                    },
                    openModalLocation: z,
                    pricingTarget: je(`pro`)
                })
            }, t[12] = a, t[13] = n), _ = n
        }
    } else if (fe) {
        let e;
        t[14] === u ? e = t[15] : (e = (0, R.jsx)(b, {
            id: `wham.usageDashboard.nearLimitWithCredits.proBody.codexAndWork`,
            defaultMessage: `You're nearing your Codex and Work usage limit. Add credits to stay unblocked, or wait until {time}.`,
            values: {
                time: u
            }
        }), t[14] = u, t[15] = e), p = e, m = y, h = S
    } else if (ce && !le) {
        let e;
        t[16] !== o || t[17] !== u ? (e = o ? (0, R.jsx)(b, {
            id: `wham.usageDashboard.nearLimit.ent26.body`,
            defaultMessage: `You're nearing your usage limit. Try again after {time}, or contact your admin if you need more capacity.`,
            values: {
                time: u
            }
        }) : (0, R.jsx)(b, {
            id: `wham.usageDashboard.nearLimitWithCredits.teamOrEnterpriseBody.codexAndWork`,
            defaultMessage: `You're nearing your Codex and Work usage limit. Try again after {time}, or contact your admin if you need more capacity.`,
            values: {
                time: u
            }
        }), t[16] = o, t[17] = u, t[18] = e) : e = t[18], p = e
    } else if (ue) {
        if (C === st) {
            let e;
            t[19] === u ? e = t[20] : (e = (0, R.jsx)(b, {
                id: `wham.usageDashboard.nearLimitWithCredits.freeGoBodyWithPromo.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Start a free trial of Plus today to keep building. Your limit resets on {time}.`,
                values: {
                    time: u
                }
            }), t[19] = u, t[20] = e), p = e
        } else {
            let e;
            t[21] === u ? e = t[22] : (e = (0, R.jsx)(b, {
                id: `wham.usageDashboard.nearLimitWithCredits.freeGoBody.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Upgrade to Plus to keep going. Your limit resets on {time}.`,
                values: {
                    time: u
                }
            }), t[21] = u, t[22] = e), p = e
        }
        if (de) {
            let e;
            t[23] === i ? e = t[24] : (e = i.formatMessage({
                id: `wham.upsellBanner.upgradeToPlus`,
                defaultMessage: `Upgrade`
            }), t[23] = i, t[24] = e), m = e;
            let n;
            t[25] === a ? n = t[26] : (n = () => {
                Ae({
                    navigate: a,
                    checkoutOriginProvenance: {
                        checkoutOriginProductExperience: Ce.CODEX,
                        checkoutOriginDeliverySurface: `web`
                    },
                    openModalLocation: z,
                    pricingTarget: je(`plus`)
                })
            }, t[25] = a, t[26] = n), h = n
        }
    }
    let w;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, R.jsx)(`div`, {
        className: `text-token-text-primary flex items-center justify-center`,
        children: (0, R.jsx)(Fe, {
            className: `icon`,
            "aria-hidden": !0
        })
    }), t[27] = w) : w = t[27];
    let he = s && h === S,
        _e = s && _ === S,
        T;
    return t[28] !== p || t[29] !== h || t[30] !== _ || t[31] !== m || t[32] !== g || t[33] !== he || t[34] !== _e ? (T = (0, R.jsx)(ee, {
        className: `shadow-[0_16px_32px_-24px_rgba(15,23,42,0.25)]`,
        icon: w,
        content: p,
        primaryCtaText: m,
        primaryCtaColor: `primary`,
        onPrimaryCtaClick: h,
        isPrimaryCtaLoading: he,
        secondaryCtaText: g,
        onSecondaryCtaClick: _,
        isSecondaryCtaLoading: _e,
        secondaryCtaColor: `secondary`,
        verticalCta: !1
    }), t[28] = p, t[29] = h, t[30] = _, t[31] = m, t[32] = g, t[33] = he, t[34] = _e, t[35] = T) : T = t[35], T
}

function F() {}

function I() {}
var ot, L, R, st, z, B = e((() => {
    ot = w(), E(), T(), g(), he(), D(), o(), Me(), ke(), c(), Pe(), _(), s(), Ne(), fe(), a(), ce(), ue(), r(), p(), se(), A(), O(), k(), Te(), Qe(), Ke(), qe(), Le(), Ee(), m(), L = t(C()), S(), x(), R = y(), st = `plus-1-month-free`, z = l.WhamUsageDashboardRateLimitUpsell
}));
export {
    $e as n, B as r, P as t
};
//# sourceMappingURL=35fc21ca-os3ybmyna79qbl05.js.map