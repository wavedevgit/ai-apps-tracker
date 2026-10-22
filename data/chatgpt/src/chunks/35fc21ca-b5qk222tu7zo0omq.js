import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $6 as n,
    A8 as r,
    Bet as i,
    C6 as ee,
    CR as a,
    D6 as te,
    DR as o,
    E6 as ne,
    J5 as re,
    Jl as s,
    Ket as ie,
    Pst as c,
    Wl as ae,
    Yi as oe,
    Z6 as se,
    Zi as ce,
    Zl as le,
    _6 as ue,
    c2 as de,
    c6 as l,
    d2 as u,
    e3 as d,
    grt as f,
    o0 as fe,
    q1 as p,
    qet as m,
    ql as pe,
    urt as h,
    w6 as g,
    xct as _
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as v,
    Nn as y,
    Nt as me,
    Q as b,
    Rn as x,
    Vn as S,
    wn as C,
    zn as he
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    DDn as w,
    H8t as ge,
    K8t as T,
    ODn as _e,
    Qcn as E,
    Rdn as D,
    X$ as O,
    Y$ as ve,
    _rn as ye,
    aun as be,
    eln as xe,
    fdn as Se,
    frn as Ce,
    iun as we,
    lrn as Te,
    mdn as Ee,
    nln as De,
    nun as Oe,
    pdn as ke,
    rln as Ae,
    run as je,
    zdn as Me
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Ml as Ne,
    Nl as Pe
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    Fg as Fe,
    Lg as Ie,
    Mg as Le,
    Ng as Re,
    Pg as ze,
    Rg as Be,
    a_ as Ve,
    c_ as He,
    i_ as Ue,
    jg as k,
    n_ as We,
    o_ as Ge,
    r_ as Ke
} from "./c2675c8c-jg3tpj8mw86wdc0g.js";
import {
    l as A,
    u as j
} from "./e19f3910-om5goj2s40m5bbt4.js";
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
} from "./7a206bce-fc3ng0rz5bkinyat.js";

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
            rateLimit: n,
            linkToUsageDashboard: r
        } = e,
        i = r !== void 0 && r,
        a = he(),
        o = me(),
        [ne, s] = (0, L.useState)(!1),
        ce = Ve(),
        ue = Ge(),
        de = He(),
        l = Ue(),
        d = Ke(),
        f = re(it),
        p = n.rate_limit_reached_type?.type,
        m = n.spend_control?.reached === !0 || p === `workspace_member_usage_limit_reached` || p === `workspace_owner_usage_limit_reached`,
        {
            sendRequest: _,
            hasRequested: v,
            requestDisabled: b,
            usesSavedRequests: x
        } = be(f),
        S;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (S = ie({
        openModalLocation: z
    }), t[0] = S) : S = t[0];
    let C = S,
        T = Fe() === Re.enabled && !ce && !ue,
        _e = Be(n.plan_type === c.FREE || n.plan_type === c.GO),
        E = ae(a, pe(n) ?? 0),
        O = fe(),
        Ce = m ? `usage_limit` : `credits`,
        ke;
    t[1] !== O || t[2] !== n || t[3] !== Ce ? (ke = Oe(O, n, Ce), t[1] = O, t[2] = n, t[3] = Ce, t[4] = ke) : ke = t[4];
    let Ae = ke,
        je = Ae != null,
        Me;
    t[5] === O ? Me = t[6] : (Me = O?.getWorkspaceId(), t[5] = O, t[6] = Me);
    let Pe = Me,
        Ie;
    t[7] !== O || t[8] !== n || t[9] !== Pe ? (Ie = O?.planType === c.ENT26 && O.id === n.account_id && Pe != null && le(n), t[7] = O, t[8] = n, t[9] = Pe, t[10] = Ie) : Ie = t[10];
    let ze = Ie,
        k = O != null,
        We = (0, L.useRef)(null),
        A;
    t[11] === O ? A = t[12] : (A = O?.getSubscriptionBillingCurrency() ?? `USD`, t[11] = O, t[12] = A);
    let j = A,
        [qe, Qe] = (0, L.useState)(null),
        [$e, et] = (0, L.useState)(!1),
        P, F;
    t[13] === j ? (P = t[14], F = t[15]) : (P = () => {
        (async function() {
            let e = await ee(void 0, j);
            Qe(e), et(!0)
        })()
    }, F = [j], t[13] = j, t[14] = P, t[15] = F), (0, L.useEffect)(P, F);
    let I, B, ct;
    t[16] !== a || t[17] !== i ? (ct = i ? a.formatMessage({
        id: `wham.usageDashboard.upsellBanner.viewUsage`,
        defaultMessage: `View usage`
    }) : null, t[16] = a, t[17] = i, t[18] = ct) : ct = t[18];
    let V = ct,
        H = i ? () => {
            o(`/codex/cloud/settings/usage`)
        } : rt,
        U = i ? `view_usage` : null,
        W = null,
        G = nt,
        K = null,
        q = !1,
        lt;
    t[19] === a ? lt = t[20] : (lt = a.formatMessage({
        id: `wham.usageDashboard.upsellBanner.addCredits`,
        defaultMessage: `Add credits`
    }), t[19] = a, t[20] = lt);
    let J = lt,
        ut;
    t[21] === a ? ut = t[22] : (ut = a.formatMessage({
        id: `wham.upsellBanner.upgradePlan`,
        defaultMessage: `Upgrade`
    }), t[21] = a, t[22] = ut);
    let dt = ut,
        ft;
    t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (ft = () => {
        xe(De, {
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: D.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            onCheckoutPresented: () => s(!1),
            onCustomCheckoutEnd: () => s(!1),
            onCustomCheckoutStart: () => s(!0)
        })
    }, t[23] = ft) : ft = t[23];
    let Y = ft,
        pt;
    t[24] !== d || t[25] !== o ? (pt = () => {
        C && ye({
            navigate: o,
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: D.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            openModalLocation: z,
            pricingTarget: Te(d ? `plus` : `pro`)
        })
    }, t[24] = d, t[25] = o, t[26] = pt) : pt = t[26];
    let mt = pt,
        ht = n.promo?.campaign_id,
        X = n.rate_limit_upsell,
        gt, _t;
    t[27] !== O || t[28] !== X?.ctas || t[29] !== X?.request_url ? (gt = O?.isOwnerOfAccount() && X?.request_url === Se(O.id), _t = X?.ctas.find(e => e.action === `request_usage` || gt && e.action === `request_increase`), t[27] = O, t[28] = X?.ctas, t[29] = X?.request_url, t[30] = gt, t[31] = _t) : (gt = t[30], _t = t[31]);
    let Z = _t,
        vt = O != null && O.id === n.account_id && x && Z != null;
    if (vt && X != null) {
        I = Ze(p) ?? at(n), B = X.description, V = Z.label, H = () => {
            gt && Z.action === `request_increase` ? Ee(O.id) : Z.reason != null && _(`usage_limit`, Z.reason, w.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
        }, U = O.isOwnerOfAccount() ? `view_usage` : `request_increase`, q = !O.isOwnerOfAccount() && (Z.reason == null || b);
        let e;
        t[32] === X.ctas ? e = t[33] : (e = X.ctas.find(tt), t[32] = X.ctas, t[33] = e);
        let r = e;
        if (r != null && X.referral != null) {
            W = r.label, K = `invite`;
            let e = X.referral;
            G = () => u(ve, {
                programId: e.program_id,
                entrypoint: `rate_limit`,
                rateLimitType: X.banner_type
            })
        }
    } else if (ze) {
        I = Ze(p) ?? at(n);
        let e = O.isOwnerOfAccount(),
            r = e ? M.ownerDescription : M.memberDescription,
            i;
        if (t[34] === r ? i = t[35] : (i = (0, R.jsx)(y, {
                ...r
            }), t[34] = r, t[35] = i), B = i, W = V, G = H, K = U, e) {
            let e;
            t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, R.jsx)(y, {
                ...M.editBudget
            }), t[36] = e) : e = t[36], V = e, H = () => {
                window.open(ge(`/billing`, Pe), `_blank`, `noopener,noreferrer`)
            }, U = `add_credits`
        } else {
            let e = v ? we.requested : M.contactOwner,
                n;
            t[37] === e ? n = t[38] : (n = (0, R.jsx)(y, {
                ...e
            }), t[37] = e, t[38] = n), V = n, H = () => {
                _(`credits`, void 0, w.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
            }, U = `notify_owner`, q = b
        }
    } else if (ce)
        if (I = N({
                bannerType: `plus_rate_limit_reached`,
                limitReason: `usage_limit`
            }), h(`2238071649`)) {
            let e = Le();
            if (!qe || !$e || !O) B = e ? (0, R.jsx)(y, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody2.addCredits.higherLimits`,
                defaultMessage: `Add credits to keep going now, or upgrade to Pro for more usage. Your limit will reset after {time}.`,
                values: {
                    time: E
                }
            }) : (0, R.jsx)(y, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody2.higherLimits`,
                defaultMessage: `Upgrade to Pro to get more usage, or wait for your limit to reset after {time}.`,
                values: {
                    time: E
                }
            });
            else {
                let t = g(qe, te(c.PROLITE), se.Month).amount;
                B = e ? (0, R.jsx)(y, {
                    id: `wham.usageDashboard.limitReachedWithCredits.plusBody3.addCredits.higherLimits`,
                    defaultMessage: `Add credits to keep going now, or upgrade to Pro for more usage at {costString}/month. Your limit will reset after {time}.`,
                    values: {
                        time: E,
                        costString: a.formatNumber(t, {
                            style: `currency`,
                            currency: j,
                            trailingZeroDisplay: `stripIfInteger`
                        })
                    }
                }) : (0, R.jsx)(y, {
                    id: `wham.usageDashboard.limitReachedWithCredits.plusBody3.higherLimits`,
                    defaultMessage: `Upgrade to Pro to get more usage for {costString}/month, or wait for your limit to reset after {time}.`,
                    values: {
                        time: E,
                        costString: a.formatNumber(t, {
                            style: `currency`,
                            currency: j,
                            trailingZeroDisplay: `stripIfInteger`
                        })
                    }
                })
            }
            C && (W = V, G = H, K = U, V = dt, H = mt, U = `upgrade`), e && (C ? (W = J, G = Y, K = `add_credits`) : (V = J, H = Y, U = `add_credits`))
        } else {
            let e;
            t[39] === E ? e = t[40] : (e = (0, R.jsx)(y, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody.addCreditsFirst`,
                defaultMessage: `Add credits to keep going now, or upgrade for more usage. Your limit will reset on {time}.`,
                values: {
                    time: E
                }
            }), t[39] = E, t[40] = e), B = e, V = J, H = Y, U = `add_credits`, C && (W = dt, G = mt, K = `upgrade`)
        }
    else if (ue) {
        let e = Le();
        I = N({
            bannerType: `prolite_rate_limit_reached`,
            limitReason: `usage_limit`
        }), B = e ? (0, R.jsx)(y, {
            id: `wham.usageDashboard.limitReachedWithCredits.proLiteBody.addCredits.higherLimits`,
            defaultMessage: `Add credits to keep going now, or upgrade for more usage. Your limit will reset at {time}.`,
            values: {
                time: E
            }
        }) : (0, R.jsx)(y, {
            id: `wham.usageDashboard.limitReachedWithCredits.proLiteBody.higherLimits`,
            defaultMessage: `Upgrade for more usage, or wait for your limit to reset at {time}.`,
            values: {
                time: E
            }
        }), C && (W = V, G = H, K = U, V = dt, H = mt, U = `upgrade`), e && (C ? (W = J, G = Y, K = `add_credits`) : (V = J, H = Y, U = `add_credits`))
    } else if (_e) {
        I = N({
            bannerType: `free_or_go_rate_limit_reached`,
            limitReason: `usage_limit`
        });
        let e;
        t[41] === E ? e = t[42] : (e = (0, R.jsx)(y, {
            id: `wham.usageDashboard.limitReachedWithCredits.freeGoBody.addCredits`,
            defaultMessage: `Add credits to keep going now, or upgrade to Plus. Your limit will reset on {time}.`,
            values: {
                time: E
            }
        }), t[41] = E, t[42] = e), B = e, V = J, H = Y, U = `add_credits`, C && (W = dt, G = mt, K = `upgrade`)
    } else if (T) {
        if (I = N({
                bannerType: `pro_rate_limit_reached`,
                limitReason: `usage_limit`
            }), h(`2238071649`)) {
            let e;
            t[43] === E ? e = t[44] : (e = (0, R.jsx)(y, {
                id: `wham.usageDashboard.limitReachedWithCredits.proBody2.addCreditsKeepGoing`,
                defaultMessage: `Add credits to keep going, or wait until your balance resets at {time}.`,
                values: {
                    time: E
                }
            }), t[43] = E, t[44] = e), B = e
        } else {
            let e;
            t[45] === E ? e = t[46] : (e = (0, R.jsx)(y, {
                id: `wham.usageDashboard.limitReachedWithCredits.proBody`,
                defaultMessage: `Add credits to continue, or wait until {time}.`,
                values: {
                    time: E
                }
            }), t[45] = E, t[46] = e), B = e
        }
        W = V, G = H, K = U, V = J, H = Y, U = `add_credits`
    } else if (!l && (de || je)) {
        I = Ze(p) ?? at(n);
        let e;
        if (t[47] === E ? e = t[48] : (e = (0, R.jsx)(y, {
                id: `wham.usageDashboard.limitReachedWithCredits.teamOrEnterpriseBody`,
                defaultMessage: `Try again after {time}, or send a request to your admin.`,
                values: {
                    time: E
                }
            }), t[47] = E, t[48] = e), B = e, je) {
            W = V, G = H, K = U;
            let e;
            t[49] !== v || t[50] !== a ? (e = a.formatMessage(v ? we.requested : we.sendRequest), t[49] = v, t[50] = a, t[51] = e) : e = t[51], V = e, H = () => {
                _(Ae, void 0, w.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
            }, U = Ae === `usage_limit` ? `increase_spend_cap` : `notify_owner`, q = b
        }
    } else if (d) {
        if (ht === st) {
            I = N({
                bannerType: n.plan_type === c.GO ? `go_trial_rate_limit_reached` : `free_trial_rate_limit_reached`,
                limitReason: `usage_limit`
            });
            let e;
            t[52] === E ? e = t[53] : (e = (0, R.jsx)(y, {
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
            t[54] === E ? e = t[55] : (e = (0, R.jsx)(y, {
                id: `wham.usageDashboard.limitReachedWithCredits.freeGoBody`,
                defaultMessage: `Upgrade to Plus to keep going. Your limit will reset on {time}.`,
                values: {
                    time: E
                }
            }), t[54] = E, t[55] = e), B = e
        }
        C && (W = V, G = H, K = U, V = dt, H = mt, U = `upgrade`)
    } else {
        I = N({
            bannerType: `legacy_rate_limit_reached`,
            limitReason: `usage_limit`
        });
        let e;
        t[56] === E ? e = t[57] : (e = (0, R.jsx)(y, {
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
        k && We.current !== Q && (We.current = Q, Ye(I, `usage_dashboard`))
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
        children: (0, R.jsx)(Ne, {
            className: `icon`,
            "aria-hidden": !0
        })
    }), t[77] = Tt) : Tt = t[77];
    let $;
    t[78] !== O?.planType || t[79] !== X?.title || t[80] !== ze || t[81] !== vt ? ($ = vt ? X?.title : ze ? (0, R.jsx)(y, {
        ...M.title
    }) : O?.planType === c.ENT26 ? (0, R.jsx)(y, {
        id: `wham.usageDashboard.ent26.limitReached.title`,
        defaultMessage: `You’re out of usage for now`
    }) : (0, R.jsx)(y, {
        ...Je
    }), t[78] = O?.planType, t[79] = X?.title, t[80] = ze, t[81] = vt, t[82] = $) : $ = t[82];
    let Et = W == null ? void 0 : wt,
        Dt = ne && U === `add_credits`,
        Ot = ne && K === `add_credits`,
        kt;
    return t[83] !== B || t[84] !== q || t[85] !== V || t[86] !== W || t[87] !== $ || t[88] !== Et || t[89] !== Dt || t[90] !== Ot || t[91] !== St ? (kt = (0, R.jsx)(oe, {
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
    return o()?.id
}

function at(e) {
    return ue(e.plan_type) ? N({
        bannerType: `business_rate_limit_reached`,
        limitReason: `usage_limit`
    }) : e.plan_type === c.EDUCATION_CBP || e.plan_type === c.EDU_PLUS || e.plan_type === c.EDU_PRO || e.plan_type === c.ENTERPRISE_CBP || e.plan_type === c.ENTERPRISE_CBP_USAGE_BASED || e.plan_type === c.HC || e.plan_type === c.HC_CONSUMPTION || e.plan_type === c.FINSERV || e.plan_type === c.LAW || e.plan_type === c.QUORUM || e.plan_type === c.K12 ? N({
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
            rateLimit: n
        } = e,
        r = he(),
        i = me(),
        ee = fe(),
        a = ee?.planType === c.ENT26 && ee.id === n.account_id,
        [te, o] = (0, L.useState)(!1),
        ne = j(),
        re = Ve(),
        s = Ge(),
        se = He(),
        ce = Ue(),
        le = Ke(),
        ue = ie({
            openModalLocation: z
        }),
        de = Fe() === Re.enabled && !re && !s,
        l;
    t[0] !== r || t[1] !== n ? (l = ae(r, pe(n) ?? 0), t[0] = r, t[1] = n, t[2] = l) : l = t[2];
    let u = l;
    if (!ne) return null;
    let d;
    t[3] === u ? d = t[4] : (d = (0, R.jsx)(y, {
        id: `wham.usageDashboard.nearLimitWithCredits.defaultBody`,
        defaultMessage: `You’re getting close to your limit. It will reset on {time}.`,
        values: {
            time: u
        }
    }), t[3] = u, t[4] = d);
    let f = d,
        p = null,
        m = I,
        h = null,
        g = F,
        _;
    t[5] === r ? _ = t[6] : (_ = r.formatMessage({
        id: `wham.usageDashboard.upsellBanner.addCredits`,
        defaultMessage: `Add credits`
    }), t[5] = r, t[6] = _);
    let v = _,
        b;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (b = () => {
        xe(De, {
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: D.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            onCheckoutPresented: () => o(!1),
            onCustomCheckoutEnd: () => o(!1),
            onCustomCheckoutStart: () => o(!0)
        })
    }, t[7] = b) : b = t[7];
    let x = b,
        S = n.promo?.campaign_id;
    if (re || s) {
        let e;
        if (t[8] === u ? e = t[9] : (e = (0, R.jsx)(y, {
                id: `wham.usageDashboard.nearLimitWithCredits.plusBody.addCreditsFirst.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Add credits to keep building now, or upgrade for more usage. Your limit resets on {time}.`,
                values: {
                    time: u
                }
            }), t[8] = u, t[9] = e), f = e, p = v, m = x, ue) {
            let e;
            t[10] === r ? e = t[11] : (e = r.formatMessage({
                id: `wham.upsellBanner.upgradeToPro`,
                defaultMessage: `Upgrade`
            }), t[10] = r, t[11] = e), h = e;
            let n;
            t[12] === i ? n = t[13] : (n = () => {
                ye({
                    navigate: i,
                    checkoutOriginProvenance: {
                        checkoutOriginProductExperience: D.CODEX,
                        checkoutOriginDeliverySurface: `web`
                    },
                    openModalLocation: z,
                    pricingTarget: Te(`pro`)
                })
            }, t[12] = i, t[13] = n), g = n
        }
    } else if (de) {
        let e;
        t[14] === u ? e = t[15] : (e = (0, R.jsx)(y, {
            id: `wham.usageDashboard.nearLimitWithCredits.proBody.codexAndWork`,
            defaultMessage: `You're nearing your Codex and Work usage limit. Add credits to stay unblocked, or wait until {time}.`,
            values: {
                time: u
            }
        }), t[14] = u, t[15] = e), f = e, p = v, m = x
    } else if (se && !ce) {
        let e;
        t[16] !== a || t[17] !== u ? (e = a ? (0, R.jsx)(y, {
            id: `wham.usageDashboard.nearLimit.ent26.body`,
            defaultMessage: `You're nearing your usage limit. Try again after {time}, or contact your admin if you need more capacity.`,
            values: {
                time: u
            }
        }) : (0, R.jsx)(y, {
            id: `wham.usageDashboard.nearLimitWithCredits.teamOrEnterpriseBody.codexAndWork`,
            defaultMessage: `You're nearing your Codex and Work usage limit. Try again after {time}, or contact your admin if you need more capacity.`,
            values: {
                time: u
            }
        }), t[16] = a, t[17] = u, t[18] = e) : e = t[18], f = e
    } else if (le) {
        if (S === st) {
            let e;
            t[19] === u ? e = t[20] : (e = (0, R.jsx)(y, {
                id: `wham.usageDashboard.nearLimitWithCredits.freeGoBodyWithPromo.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Start a free trial of Plus today to keep building. Your limit resets on {time}.`,
                values: {
                    time: u
                }
            }), t[19] = u, t[20] = e), f = e
        } else {
            let e;
            t[21] === u ? e = t[22] : (e = (0, R.jsx)(y, {
                id: `wham.usageDashboard.nearLimitWithCredits.freeGoBody.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Upgrade to Plus to keep going. Your limit resets on {time}.`,
                values: {
                    time: u
                }
            }), t[21] = u, t[22] = e), f = e
        }
        if (ue) {
            let e;
            t[23] === r ? e = t[24] : (e = r.formatMessage({
                id: `wham.upsellBanner.upgradeToPlus`,
                defaultMessage: `Upgrade`
            }), t[23] = r, t[24] = e), p = e;
            let n;
            t[25] === i ? n = t[26] : (n = () => {
                ye({
                    navigate: i,
                    checkoutOriginProvenance: {
                        checkoutOriginProductExperience: D.CODEX,
                        checkoutOriginDeliverySurface: `web`
                    },
                    openModalLocation: z,
                    pricingTarget: Te(`plus`)
                })
            }, t[25] = i, t[26] = n), m = n
        }
    }
    let C;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, R.jsx)(`div`, {
        className: `text-token-text-primary flex items-center justify-center`,
        children: (0, R.jsx)(Ne, {
            className: `icon`,
            "aria-hidden": !0
        })
    }), t[27] = C) : C = t[27];
    let w = te && m === x,
        ge = te && g === x,
        T;
    return t[28] !== f || t[29] !== m || t[30] !== g || t[31] !== p || t[32] !== h || t[33] !== w || t[34] !== ge ? (T = (0, R.jsx)(oe, {
        className: `shadow-[0_16px_32px_-24px_rgba(15,23,42,0.25)]`,
        icon: C,
        content: f,
        primaryCtaText: p,
        primaryCtaColor: `primary`,
        onPrimaryCtaClick: m,
        isPrimaryCtaLoading: w,
        secondaryCtaText: h,
        onSecondaryCtaClick: g,
        isSecondaryCtaLoading: ge,
        secondaryCtaColor: `secondary`,
        verticalCta: !1
    }), t[28] = f, t[29] = m, t[30] = g, t[31] = p, t[32] = h, t[33] = w, t[34] = ge, t[35] = T) : T = t[35], T
}

function F() {}

function I() {}
var ot, L, R, st, z, B = e((() => {
    ot = C(), _e(), Me(), _(), T(), E(), de(), O(), ke(), ce(), Pe(), i(), n(), Ce(), r(), p(), a(), ne(), d(), l(), f(), A(), We(), ze(), Ae(), Qe(), k(), qe(), Ie(), je(), s(), L = t(S()), x(), b(), R = v(), st = `plus-1-month-free`, z = m.WhamUsageDashboardRateLimitUpsell
}));
export {
    $e as n, B as r, P as t
};
//# sourceMappingURL=35fc21ca-b5qk222tu7zo0omq.js.map