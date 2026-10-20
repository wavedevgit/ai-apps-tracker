import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as n,
    Bnt as r,
    Det as i,
    Eet as ee,
    G3 as a,
    Gl as te,
    Hl as ne,
    I1 as o,
    Ji as re,
    Kl as s,
    Knt as c,
    U6 as ie,
    V4 as l,
    V6 as ae,
    Xi as oe,
    Y1 as se,
    Yl as ce,
    Z0 as le,
    Zst as ue,
    _R as de,
    bet as u,
    e2 as d,
    e6 as f,
    f8 as p,
    l6 as m,
    o6 as h,
    s6 as fe,
    u6 as g,
    ust as _,
    xR as v
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as y,
    Bn as b,
    Nn as x,
    Pt as pe,
    Rn as S,
    Vn as C,
    wn as w,
    zn as me
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Bln as T,
    F8t as he,
    Icn as ge,
    JEn as E,
    Jun as _e,
    K$ as ve,
    Pcn as ye,
    Qnn as be,
    R8t as D,
    Rcn as xe,
    Rln as Se,
    Vln as Ce,
    Xun as we,
    Yun as O,
    bdn as k,
    orn as Te,
    q$ as Ee,
    qEn as De,
    trn as A,
    xdn as Oe,
    zcn as ke,
    zln as Ae
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Fl as je,
    Pl as Me
} from "./30901919-om7b3qf5hp4j9x4l.js";
import {
    $g as Ne,
    C_ as Pe,
    Jg as Fe,
    Kg as Ie,
    Qg as Le,
    Xg as Re,
    Yg as j,
    __ as ze,
    b_ as Be,
    qg as Ve,
    v_ as He,
    x_ as Ue,
    y_ as We
} from "./c2675c8c-fpv9s4kvd412dyap.js";
import {
    l as Ge,
    u as M
} from "./e19f3910-e4e73fwjl8xw3qih.js";
import {
    n as Ke,
    r as qe,
    t as Je
} from "./06da37f5-fw5469u81kait3zs.js";
import {
    a as Ye,
    i as Xe,
    n as Ze,
    r as Qe,
    t as N
} from "./7a206bce-eiyrmczaulnkenpj.js";

function $e(e) {
    "use forget";
    let t = (0, ot.c)(2);
    if (!M()) return null;
    let n;
    return t[0] === e ? n = t[1] : (n = (0, R.jsx)(et, {
        ...e
    }), t[0] = e, t[1] = n), n
}

function et(e) {
    "use forget";
    let t = (0, ot.c)(93),
        {
            rateLimit: i,
            linkToUsageDashboard: a
        } = e,
        o = a !== void 0 && a,
        s = me(),
        c = pe(),
        [ie, l] = (0, L.useState)(!1),
        oe = Be(),
        le = Ue(),
        ue = Pe(),
        de = We(),
        u = He(),
        f = n(it),
        p = i.rate_limit_reached_type?.type,
        m = i.spend_control?.reached === !0 || p === `workspace_member_usage_limit_reached` || p === `workspace_owner_usage_limit_reached`,
        {
            sendRequest: v,
            hasRequested: y,
            requestDisabled: b,
            usesSavedRequests: S
        } = Ce(f),
        C;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (C = ee({
        openModalLocation: z
    }), t[0] = C) : C = t[0];
    let w = C,
        E = Re() === Fe.enabled && !oe && !le,
        ye = Ne(i.plan_type === _.FREE || i.plan_type === _.GO),
        D = ne(s, te(i) ?? 0),
        O = se(),
        Ee = m ? `usage_limit` : `credits`,
        A;
    t[1] !== O || t[2] !== i || t[3] !== Ee ? (A = Se(O, i, Ee), t[1] = O, t[2] = i, t[3] = Ee, t[4] = A) : A = t[4];
    let Oe = A,
        ke = Oe != null,
        Ae;
    t[5] === O ? Ae = t[6] : (Ae = O?.getWorkspaceId(), t[5] = O, t[6] = Ae);
    let je = Ae,
        Ie;
    t[7] !== O || t[8] !== i || t[9] !== je ? (Ie = O?.planType === _.ENT26 && O.id === i.account_id && je != null && ce(i), t[7] = O, t[8] = i, t[9] = je, t[10] = Ie) : Ie = t[10];
    let Le = Ie,
        j = O != null,
        ze = (0, L.useRef)(null),
        Ge;
    t[11] === O ? Ge = t[12] : (Ge = O?.getSubscriptionBillingCurrency() ?? `USD`, t[11] = O, t[12] = Ge);
    let M = Ge,
        [Ke, Qe] = (0, L.useState)(null),
        [$e, et] = (0, L.useState)(!1),
        P, F;
    t[13] === M ? (P = t[14], F = t[15]) : (P = () => {
        (async function() {
            let e = await h(void 0, M);
            Qe(e), et(!0)
        })()
    }, F = [M], t[13] = M, t[14] = P, t[15] = F), (0, L.useEffect)(P, F);
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
        ge(xe, {
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: k.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            onCheckoutPresented: () => l(!1),
            onCustomCheckoutEnd: () => l(!1),
            onCustomCheckoutStart: () => l(!0)
        })
    }, t[23] = ft) : ft = t[23];
    let Y = ft,
        pt;
    t[24] !== u || t[25] !== c ? (pt = () => {
        w && Te({
            navigate: c,
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: k.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            openModalLocation: z,
            pricingTarget: be(u ? `plus` : `pro`)
        })
    }, t[24] = u, t[25] = c, t[26] = pt) : pt = t[26];
    let mt = pt,
        ht = i.promo?.campaign_id,
        X = i.rate_limit_upsell,
        gt, _t;
    t[27] !== O || t[28] !== X?.ctas || t[29] !== X?.request_url ? (gt = O?.isOwnerOfAccount() && X?.request_url === _e(O.id), _t = X?.ctas.find(e => e.action === `request_usage` || gt && e.action === `request_increase`), t[27] = O, t[28] = X?.ctas, t[29] = X?.request_url, t[30] = gt, t[31] = _t) : (gt = t[30], _t = t[31]);
    let Z = _t,
        vt = O != null && O.id === i.account_id && S && Z != null;
    if (vt && X != null) {
        I = Ze(p) ?? at(i), B = X.description, V = Z.label, H = () => {
            gt && Z.action === `request_increase` ? we(O.id) : Z.reason != null && v(`usage_limit`, Z.reason, De.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
        }, U = O.isOwnerOfAccount() ? `view_usage` : `request_increase`, q = !O.isOwnerOfAccount() && (Z.reason == null || b);
        let e;
        t[32] === X.ctas ? e = t[33] : (e = X.ctas.find(tt), t[32] = X.ctas, t[33] = e);
        let n = e;
        if (n != null && X.referral != null) {
            W = n.label, K = `invite`;
            let e = X.referral;
            G = () => d(ve, {
                programId: e.program_id,
                entrypoint: `rate_limit`,
                rateLimitType: X.banner_type
            })
        }
    } else if (Le) {
        I = Ze(p) ?? at(i);
        let e = O.isOwnerOfAccount(),
            n = e ? qe.ownerDescription : qe.memberDescription,
            r;
        if (t[34] === n ? r = t[35] : (r = (0, R.jsx)(x, {
                ...n
            }), t[34] = n, t[35] = r), B = r, W = V, G = H, K = U, e) {
            let e;
            t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, R.jsx)(x, {
                ...qe.editBudget
            }), t[36] = e) : e = t[36], V = e, H = () => {
                window.open(he(`/billing`, je), `_blank`, `noopener,noreferrer`)
            }, U = `add_credits`
        } else {
            let e = y ? T.requested : qe.contactOwner,
                n;
            t[37] === e ? n = t[38] : (n = (0, R.jsx)(x, {
                ...e
            }), t[37] = e, t[38] = n), V = n, H = () => {
                v(`credits`, void 0, De.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
            }, U = `notify_owner`, q = b
        }
    } else if (oe)
        if (I = N({
                bannerType: `plus_rate_limit_reached`,
                limitReason: `usage_limit`
            }), r(`2238071649`)) {
            let e = Ve();
            if (!Ke || !$e || !O) B = e ? (0, R.jsx)(x, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody2.addCredits.higherLimits`,
                defaultMessage: `Add credits to keep going now, or upgrade to Pro for more usage. Your limit will reset after {time}.`,
                values: {
                    time: D
                }
            }) : (0, R.jsx)(x, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody2.higherLimits`,
                defaultMessage: `Upgrade to Pro to get more usage, or wait for your limit to reset after {time}.`,
                values: {
                    time: D
                }
            });
            else {
                let t = fe(Ke, g(_.PROLITE), ae.Month).amount;
                B = e ? (0, R.jsx)(x, {
                    id: `wham.usageDashboard.limitReachedWithCredits.plusBody3.addCredits.higherLimits`,
                    defaultMessage: `Add credits to keep going now, or upgrade to Pro for more usage at {costString}/month. Your limit will reset after {time}.`,
                    values: {
                        time: D,
                        costString: s.formatNumber(t, {
                            style: `currency`,
                            currency: M,
                            trailingZeroDisplay: `stripIfInteger`
                        })
                    }
                }) : (0, R.jsx)(x, {
                    id: `wham.usageDashboard.limitReachedWithCredits.plusBody3.higherLimits`,
                    defaultMessage: `Upgrade to Pro to get more usage for {costString}/month, or wait for your limit to reset after {time}.`,
                    values: {
                        time: D,
                        costString: s.formatNumber(t, {
                            style: `currency`,
                            currency: M,
                            trailingZeroDisplay: `stripIfInteger`
                        })
                    }
                })
            }
            w && (W = V, G = H, K = U, V = dt, H = mt, U = `upgrade`), e && (w ? (W = J, G = Y, K = `add_credits`) : (V = J, H = Y, U = `add_credits`))
        } else {
            let e;
            t[39] === D ? e = t[40] : (e = (0, R.jsx)(x, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody.addCreditsFirst`,
                defaultMessage: `Add credits to keep going now, or upgrade for more usage. Your limit will reset on {time}.`,
                values: {
                    time: D
                }
            }), t[39] = D, t[40] = e), B = e, V = J, H = Y, U = `add_credits`, w && (W = dt, G = mt, K = `upgrade`)
        }
    else if (le) {
        let e = Ve();
        I = N({
            bannerType: `prolite_rate_limit_reached`,
            limitReason: `usage_limit`
        }), B = e ? (0, R.jsx)(x, {
            id: `wham.usageDashboard.limitReachedWithCredits.proLiteBody.addCredits.higherLimits`,
            defaultMessage: `Add credits to keep going now, or upgrade for more usage. Your limit will reset at {time}.`,
            values: {
                time: D
            }
        }) : (0, R.jsx)(x, {
            id: `wham.usageDashboard.limitReachedWithCredits.proLiteBody.higherLimits`,
            defaultMessage: `Upgrade for more usage, or wait for your limit to reset at {time}.`,
            values: {
                time: D
            }
        }), w && (W = V, G = H, K = U, V = dt, H = mt, U = `upgrade`), e && (w ? (W = J, G = Y, K = `add_credits`) : (V = J, H = Y, U = `add_credits`))
    } else if (ye) {
        I = N({
            bannerType: `free_or_go_rate_limit_reached`,
            limitReason: `usage_limit`
        });
        let e;
        t[41] === D ? e = t[42] : (e = (0, R.jsx)(x, {
            id: `wham.usageDashboard.limitReachedWithCredits.freeGoBody.addCredits`,
            defaultMessage: `Add credits to keep going now, or upgrade to Plus. Your limit will reset on {time}.`,
            values: {
                time: D
            }
        }), t[41] = D, t[42] = e), B = e, V = J, H = Y, U = `add_credits`, w && (W = dt, G = mt, K = `upgrade`)
    } else if (E) {
        if (I = N({
                bannerType: `pro_rate_limit_reached`,
                limitReason: `usage_limit`
            }), r(`2238071649`)) {
            let e;
            t[43] === D ? e = t[44] : (e = (0, R.jsx)(x, {
                id: `wham.usageDashboard.limitReachedWithCredits.proBody2.addCreditsKeepGoing`,
                defaultMessage: `Add credits to keep going, or wait until your balance resets at {time}.`,
                values: {
                    time: D
                }
            }), t[43] = D, t[44] = e), B = e
        } else {
            let e;
            t[45] === D ? e = t[46] : (e = (0, R.jsx)(x, {
                id: `wham.usageDashboard.limitReachedWithCredits.proBody`,
                defaultMessage: `Add credits to continue, or wait until {time}.`,
                values: {
                    time: D
                }
            }), t[45] = D, t[46] = e), B = e
        }
        W = V, G = H, K = U, V = J, H = Y, U = `add_credits`
    } else if (!de && (ue || ke)) {
        I = Ze(p) ?? at(i);
        let e;
        if (t[47] === D ? e = t[48] : (e = (0, R.jsx)(x, {
                id: `wham.usageDashboard.limitReachedWithCredits.teamOrEnterpriseBody`,
                defaultMessage: `Try again after {time}, or send a request to your admin.`,
                values: {
                    time: D
                }
            }), t[47] = D, t[48] = e), B = e, ke) {
            W = V, G = H, K = U;
            let e;
            t[49] !== y || t[50] !== s ? (e = s.formatMessage(y ? T.requested : T.sendRequest), t[49] = y, t[50] = s, t[51] = e) : e = t[51], V = e, H = () => {
                v(Oe, void 0, De.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
            }, U = Oe === `usage_limit` ? `increase_spend_cap` : `notify_owner`, q = b
        }
    } else if (u) {
        if (ht === st) {
            I = N({
                bannerType: i.plan_type === _.GO ? `go_trial_rate_limit_reached` : `free_trial_rate_limit_reached`,
                limitReason: `usage_limit`
            });
            let e;
            t[52] === D ? e = t[53] : (e = (0, R.jsx)(x, {
                id: `wham.usageDashboard.limitReachedWithCredits.freeGoBodyWithPromo`,
                defaultMessage: `To continue using Codex, start your free trial of Plus today. Your limit will reset on {time}.`,
                values: {
                    time: D
                }
            }), t[52] = D, t[53] = e), B = e
        } else {
            I = N({
                bannerType: `free_or_go_rate_limit_reached`,
                limitReason: `usage_limit`
            });
            let e;
            t[54] === D ? e = t[55] : (e = (0, R.jsx)(x, {
                id: `wham.usageDashboard.limitReachedWithCredits.freeGoBody`,
                defaultMessage: `Upgrade to Plus to keep going. Your limit will reset on {time}.`,
                values: {
                    time: D
                }
            }), t[54] = D, t[55] = e), B = e
        }
        w && (W = V, G = H, K = U, V = dt, H = mt, U = `upgrade`)
    } else {
        I = N({
            bannerType: `legacy_rate_limit_reached`,
            limitReason: `usage_limit`
        });
        let e;
        t[56] === D ? e = t[57] : (e = (0, R.jsx)(x, {
            id: `wham.usageDashboard.limitReachedWithCredits.legacyEnterpriseBody`,
            defaultMessage: `Try again after {time}, or ask your admin to upgrade to a plan with credits.`,
            values: {
                time: D
            }
        }), t[56] = D, t[57] = e), B = e
    }
    let Q = `${I.platform}:${I.banner_type}:${I.limit_reason}`,
        yt;
    t[58] !== I || t[59] !== j || t[60] !== Q ? (yt = () => {
        j && ze.current !== Q && (ze.current = Q, Ye(I, `usage_dashboard`))
    }, t[58] = I, t[59] = j, t[60] = Q, t[61] = yt) : yt = t[61];
    let bt;
    t[62] !== I || t[63] !== j || t[64] !== Q ? (bt = [I, j, Q], t[62] = I, t[63] = j, t[64] = Q, t[65] = bt) : bt = t[65], (0, L.useEffect)(yt, bt);
    let xt;
    t[66] !== I || t[67] !== j || t[68] !== q || t[69] !== H || t[70] !== U ? (xt = () => {
        j && U != null && !q && Xe({
            context: I,
            ctaAction: U,
            surface: `usage_dashboard`
        }), H()
    }, t[66] = I, t[67] = j, t[68] = q, t[69] = H, t[70] = U, t[71] = xt) : xt = t[71];
    let St = xt,
        Ct;
    t[72] !== I || t[73] !== j || t[74] !== G || t[75] !== K ? (Ct = () => {
        j && K != null && Xe({
            context: I,
            ctaAction: K,
            surface: `usage_dashboard`
        }), G()
    }, t[72] = I, t[73] = j, t[74] = G, t[75] = K, t[76] = Ct) : Ct = t[76];
    let wt = Ct,
        Tt;
    t[77] === Symbol.for(`react.memo_cache_sentinel`) ? (Tt = (0, R.jsx)(`div`, {
        className: `text-token-text-primary flex items-center justify-center`,
        children: (0, R.jsx)(Me, {
            className: `icon`,
            "aria-hidden": !0
        })
    }), t[77] = Tt) : Tt = t[77];
    let $;
    t[78] !== O?.planType || t[79] !== X?.title || t[80] !== Le || t[81] !== vt ? ($ = vt ? X?.title : Le ? (0, R.jsx)(x, {
        ...qe.title
    }) : O?.planType === _.ENT26 ? (0, R.jsx)(x, {
        id: `wham.usageDashboard.ent26.limitReached.title`,
        defaultMessage: `You’re out of usage for now`
    }) : (0, R.jsx)(x, {
        ...Je
    }), t[78] = O?.planType, t[79] = X?.title, t[80] = Le, t[81] = vt, t[82] = $) : $ = t[82];
    let Et = W == null ? void 0 : wt,
        Dt = ie && U === `add_credits`,
        Ot = ie && K === `add_credits`,
        kt;
    return t[83] !== B || t[84] !== q || t[85] !== V || t[86] !== W || t[87] !== $ || t[88] !== Et || t[89] !== Dt || t[90] !== Ot || t[91] !== St ? (kt = (0, R.jsx)(re, {
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
    }) : e.plan_type === _.EDUCATION_CBP || e.plan_type === _.EDU_PLUS || e.plan_type === _.EDU_PRO || e.plan_type === _.ENTERPRISE_CBP || e.plan_type === _.ENTERPRISE_CBP_USAGE_BASED || e.plan_type === _.HC || e.plan_type === _.HC_CONSUMPTION || e.plan_type === _.FINSERV || e.plan_type === _.LAW || e.plan_type === _.QUORUM || e.plan_type === _.K12 ? N({
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
        r = me(),
        i = pe(),
        a = se(),
        o = a?.planType === _.ENT26 && a.id === n.account_id,
        [s, c] = (0, L.useState)(!1),
        ie = M(),
        l = Be(),
        ae = Ue(),
        oe = Pe(),
        ce = We(),
        le = He(),
        ue = ee({
            openModalLocation: z
        }),
        de = Re() === Fe.enabled && !l && !ae,
        u;
    t[0] !== r || t[1] !== n ? (u = ne(r, te(n) ?? 0), t[0] = r, t[1] = n, t[2] = u) : u = t[2];
    let d = u;
    if (!ie) return null;
    let f;
    t[3] === d ? f = t[4] : (f = (0, R.jsx)(x, {
        id: `wham.usageDashboard.nearLimitWithCredits.defaultBody`,
        defaultMessage: `You’re getting close to your limit. It will reset on {time}.`,
        values: {
            time: d
        }
    }), t[3] = d, t[4] = f);
    let p = f,
        m = null,
        h = I,
        fe = null,
        g = F,
        v;
    t[5] === r ? v = t[6] : (v = r.formatMessage({
        id: `wham.usageDashboard.upsellBanner.addCredits`,
        defaultMessage: `Add credits`
    }), t[5] = r, t[6] = v);
    let y = v,
        b;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (b = () => {
        ge(xe, {
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: k.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            onCheckoutPresented: () => c(!1),
            onCustomCheckoutEnd: () => c(!1),
            onCustomCheckoutStart: () => c(!0)
        })
    }, t[7] = b) : b = t[7];
    let S = b,
        C = n.promo?.campaign_id;
    if (l || ae) {
        let e;
        if (t[8] === d ? e = t[9] : (e = (0, R.jsx)(x, {
                id: `wham.usageDashboard.nearLimitWithCredits.plusBody.addCreditsFirst.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Add credits to keep building now, or upgrade for more usage. Your limit resets on {time}.`,
                values: {
                    time: d
                }
            }), t[8] = d, t[9] = e), p = e, m = y, h = S, ue) {
            let e;
            t[10] === r ? e = t[11] : (e = r.formatMessage({
                id: `wham.upsellBanner.upgradeToPro`,
                defaultMessage: `Upgrade`
            }), t[10] = r, t[11] = e), fe = e;
            let n;
            t[12] === i ? n = t[13] : (n = () => {
                Te({
                    navigate: i,
                    checkoutOriginProvenance: {
                        checkoutOriginProductExperience: k.CODEX,
                        checkoutOriginDeliverySurface: `web`
                    },
                    openModalLocation: z,
                    pricingTarget: be(`pro`)
                })
            }, t[12] = i, t[13] = n), g = n
        }
    } else if (de) {
        let e;
        t[14] === d ? e = t[15] : (e = (0, R.jsx)(x, {
            id: `wham.usageDashboard.nearLimitWithCredits.proBody.codexAndWork`,
            defaultMessage: `You're nearing your Codex and Work usage limit. Add credits to stay unblocked, or wait until {time}.`,
            values: {
                time: d
            }
        }), t[14] = d, t[15] = e), p = e, m = y, h = S
    } else if (oe && !ce) {
        let e;
        t[16] !== o || t[17] !== d ? (e = o ? (0, R.jsx)(x, {
            id: `wham.usageDashboard.nearLimit.ent26.body`,
            defaultMessage: `You're nearing your usage limit. Try again after {time}, or contact your admin if you need more capacity.`,
            values: {
                time: d
            }
        }) : (0, R.jsx)(x, {
            id: `wham.usageDashboard.nearLimitWithCredits.teamOrEnterpriseBody.codexAndWork`,
            defaultMessage: `You're nearing your Codex and Work usage limit. Try again after {time}, or contact your admin if you need more capacity.`,
            values: {
                time: d
            }
        }), t[16] = o, t[17] = d, t[18] = e) : e = t[18], p = e
    } else if (le) {
        if (C === st) {
            let e;
            t[19] === d ? e = t[20] : (e = (0, R.jsx)(x, {
                id: `wham.usageDashboard.nearLimitWithCredits.freeGoBodyWithPromo.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Start a free trial of Plus today to keep building. Your limit resets on {time}.`,
                values: {
                    time: d
                }
            }), t[19] = d, t[20] = e), p = e
        } else {
            let e;
            t[21] === d ? e = t[22] : (e = (0, R.jsx)(x, {
                id: `wham.usageDashboard.nearLimitWithCredits.freeGoBody.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Upgrade to Plus to keep going. Your limit resets on {time}.`,
                values: {
                    time: d
                }
            }), t[21] = d, t[22] = e), p = e
        }
        if (ue) {
            let e;
            t[23] === r ? e = t[24] : (e = r.formatMessage({
                id: `wham.upsellBanner.upgradeToPlus`,
                defaultMessage: `Upgrade`
            }), t[23] = r, t[24] = e), m = e;
            let n;
            t[25] === i ? n = t[26] : (n = () => {
                Te({
                    navigate: i,
                    checkoutOriginProvenance: {
                        checkoutOriginProductExperience: k.CODEX,
                        checkoutOriginDeliverySurface: `web`
                    },
                    openModalLocation: z,
                    pricingTarget: be(`plus`)
                })
            }, t[25] = i, t[26] = n), h = n
        }
    }
    let w;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, R.jsx)(`div`, {
        className: `text-token-text-primary flex items-center justify-center`,
        children: (0, R.jsx)(Me, {
            className: `icon`,
            "aria-hidden": !0
        })
    }), t[27] = w) : w = t[27];
    let T = s && h === S,
        he = s && g === S,
        E;
    return t[28] !== p || t[29] !== h || t[30] !== g || t[31] !== m || t[32] !== fe || t[33] !== T || t[34] !== he ? (E = (0, R.jsx)(re, {
        className: `shadow-[0_16px_32px_-24px_rgba(15,23,42,0.25)]`,
        icon: w,
        content: p,
        primaryCtaText: m,
        primaryCtaColor: `primary`,
        onPrimaryCtaClick: h,
        isPrimaryCtaLoading: T,
        secondaryCtaText: fe,
        onSecondaryCtaClick: g,
        isSecondaryCtaLoading: he,
        secondaryCtaColor: `secondary`,
        verticalCta: !1
    }), t[28] = p, t[29] = h, t[30] = g, t[31] = m, t[32] = fe, t[33] = T, t[34] = he, t[35] = E) : E = t[35], E
}

function F() {}

function I() {}
var ot, L, R, st, z, B = e((() => {
    ot = w(), E(), Oe(), ue(), D(), ye(), le(), Ee(), O(), oe(), je(), u(), ie(), A(), p(), o(), de(), m(), l(), a(), c(), Ge(), ze(), j(), ke(), Qe(), Ie(), Ke(), Le(), Ae(), s(), L = t(C()), S(), y(), R = b(), st = `plus-1-month-free`, z = i.WhamUsageDashboardRateLimitUpsell
}));
export {
    $e as n, B as r, P as t
};
//# sourceMappingURL=35fc21ca-bx05iv8rvf27cqrc.js.map