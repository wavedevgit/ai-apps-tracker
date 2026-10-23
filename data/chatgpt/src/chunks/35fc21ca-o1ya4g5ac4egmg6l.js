import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $6 as n,
    A8 as r,
    Aet as i,
    C6 as a,
    CR as o,
    Crt as s,
    D6 as ee,
    DR as c,
    E6 as te,
    Jl as l,
    Oct as ne,
    Vst as u,
    Wl as re,
    Yi as ie,
    Z6 as ae,
    Zi as oe,
    Zl as se,
    _6 as ce,
    _rt as le,
    c2 as d,
    c6 as f,
    d2 as p,
    e3 as m,
    j5 as h,
    jet as g,
    o0 as ue,
    q1 as _,
    ql as de,
    w6 as v,
    wet as y
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as b,
    Nn as x,
    Nt as fe,
    Q as S,
    Rn as C,
    Vn as w,
    wn as T,
    zn as pe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    G8t as me,
    Hdn as he,
    NDn as E,
    PDn as D,
    Udn as ge,
    X$ as O,
    Y$ as _e,
    Y8t as k,
    _dn as ve,
    aln as ye,
    aun as be,
    brn as xe,
    cun as Se,
    frn as Ce,
    gdn as we,
    hrn as A,
    oln as Te,
    oun as Ee,
    rln as De,
    sun as Oe,
    tln as j,
    vdn as ke
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Ml as Ae,
    Nl as je
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    Fg as Me,
    Ig as Ne,
    Mg as Pe,
    Ng as Fe,
    Pg as Ie,
    Rg as M,
    a_ as Le,
    i_ as Re,
    l_ as ze,
    o_ as Be,
    r_ as Ve,
    s_ as He,
    zg as Ue
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    l as N,
    u as P
} from "./e19f3910-nqncd9m6rjdlfk2l.js";
import {
    n as We,
    r as Ge,
    t as Ke
} from "./06da37f5-fktkl2injkwukktx.js";
import {
    a as qe,
    i as Je,
    n as Ye,
    r as Xe,
    t as F
} from "./7a206bce-ozjfmrfu7vu2vf8h.js";

function Ze(e) {
    "use forget";
    let t = (0, ot.c)(2);
    if (!P()) return null;
    let n;
    return t[0] === e ? n = t[1] : (n = (0, R.jsx)(Qe, {
        ...e
    }), t[0] = e, t[1] = n), n
}

function Qe(e) {
    "use forget";
    let t = (0, ot.c)(93),
        {
            rateLimit: n,
            linkToUsageDashboard: r
        } = e,
        o = r !== void 0 && r,
        s = pe(),
        c = fe(),
        [te, l] = (0, L.useState)(!1),
        ne = Be(),
        oe = He(),
        ce = ze(),
        d = Le(),
        f = Re(),
        m = h(nt),
        g = n.rate_limit_reached_type?.type,
        _ = n.spend_control?.reached === !0 || g === `workspace_member_usage_limit_reached` || g === `workspace_owner_usage_limit_reached`,
        {
            sendRequest: y,
            hasRequested: b,
            requestDisabled: S,
            usesSavedRequests: C
        } = Se(m),
        w;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (w = i({
        openModalLocation: z
    }), t[0] = w) : w = t[0];
    let T = w,
        D = Ne() === Ie.enabled && !ne && !oe,
        ge = Ue(n.plan_type === u.FREE || n.plan_type === u.GO),
        O = re(s, de(n) ?? 0),
        k = ue(),
        ve = _ ? `usage_limit` : `credits`,
        A;
    t[1] !== k || t[2] !== n || t[3] !== ve ? (A = be(k, n, ve), t[1] = k, t[2] = n, t[3] = ve, t[4] = A) : A = t[4];
    let Te = A,
        Ee = Te != null,
        j;
    t[5] === k ? j = t[6] : (j = k?.getWorkspaceId(), t[5] = k, t[6] = j);
    let je = j,
        Me;
    t[7] !== k || t[8] !== n || t[9] !== je ? (Me = k?.planType === u.ENT26 && k.id === n.account_id && je != null && se(n), t[7] = k, t[8] = n, t[9] = je, t[10] = Me) : Me = t[10];
    let Pe = Me,
        M = k != null,
        Ve = (0, L.useRef)(null),
        N;
    t[11] === k ? N = t[12] : (N = k?.getSubscriptionBillingCurrency() ?? `USD`, t[11] = k, t[12] = N);
    let P = N,
        [We, Xe] = (0, L.useState)(null),
        [Ze, Qe] = (0, L.useState)(!1),
        it, at;
    t[13] === P ? (it = t[14], at = t[15]) : (it = () => {
        (async function() {
            let e = await a(void 0, P);
            Xe(e), Qe(!0)
        })()
    }, at = [P], t[13] = P, t[14] = it, t[15] = at), (0, L.useEffect)(it, at);
    let I, B, ct;
    t[16] !== s || t[17] !== o ? (ct = o ? s.formatMessage({
        id: `wham.usageDashboard.upsellBanner.viewUsage`,
        defaultMessage: `View usage`
    }) : null, t[16] = s, t[17] = o, t[18] = ct) : ct = t[18];
    let V = ct,
        H = o ? () => {
            c(`/codex/cloud/settings/usage`)
        } : tt,
        U = o ? `view_usage` : null,
        W = null,
        G = et,
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
        De(ye, {
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: he.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            onCheckoutPresented: () => l(!1),
            onCustomCheckoutEnd: () => l(!1),
            onCustomCheckoutStart: () => l(!0)
        })
    }, t[23] = ft) : ft = t[23];
    let Y = ft,
        pt;
    t[24] !== f || t[25] !== c ? (pt = () => {
        T && xe({
            navigate: c,
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: he.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            openModalLocation: z,
            pricingTarget: Ce(f ? `plus` : `pro`)
        })
    }, t[24] = f, t[25] = c, t[26] = pt) : pt = t[26];
    let mt = pt,
        ht = n.promo?.campaign_id,
        X = n.rate_limit_upsell,
        gt, _t;
    t[27] !== k || t[28] !== X?.ctas || t[29] !== X?.request_url ? (gt = k?.isOwnerOfAccount() && X?.request_url === we(k.id), _t = X?.ctas.find(e => e.action === `request_usage` || gt && e.action === `request_increase`), t[27] = k, t[28] = X?.ctas, t[29] = X?.request_url, t[30] = gt, t[31] = _t) : (gt = t[30], _t = t[31]);
    let Z = _t,
        vt = k != null && k.id === n.account_id && C && Z != null;
    if (vt && X != null) {
        I = Ye(g) ?? rt(n), B = X.description, V = Z.label, H = () => {
            gt && Z.action === `request_increase` ? ke(k.id) : Z.reason != null && y(`usage_limit`, Z.reason, E.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
        }, U = k.isOwnerOfAccount() ? `view_usage` : `request_increase`, q = !k.isOwnerOfAccount() && (Z.reason == null || S);
        let e;
        t[32] === X.ctas ? e = t[33] : (e = X.ctas.find($e), t[32] = X.ctas, t[33] = e);
        let r = e;
        if (r != null && X.referral != null) {
            W = r.label, K = `invite`;
            let e = X.referral;
            G = () => p(_e, {
                programId: e.program_id,
                entrypoint: `rate_limit`,
                rateLimitType: X.banner_type
            })
        }
    } else if (Pe) {
        I = Ye(g) ?? rt(n);
        let e = k.isOwnerOfAccount(),
            r = e ? Ge.ownerDescription : Ge.memberDescription,
            i;
        if (t[34] === r ? i = t[35] : (i = (0, R.jsx)(x, {
                ...r
            }), t[34] = r, t[35] = i), B = i, W = V, G = H, K = U, e) {
            let e;
            t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, R.jsx)(x, {
                ...Ge.editBudget
            }), t[36] = e) : e = t[36], V = e, H = () => {
                window.open(me(`/billing`, je), `_blank`, `noopener,noreferrer`)
            }, U = `add_credits`
        } else {
            let e = b ? Oe.requested : Ge.contactOwner,
                n;
            t[37] === e ? n = t[38] : (n = (0, R.jsx)(x, {
                ...e
            }), t[37] = e, t[38] = n), V = n, H = () => {
                y(`credits`, void 0, E.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
            }, U = `notify_owner`, q = S
        }
    } else if (ne)
        if (I = F({
                bannerType: `plus_rate_limit_reached`,
                limitReason: `usage_limit`
            }), le(`2238071649`)) {
            let e = Fe();
            if (!We || !Ze || !k) B = e ? (0, R.jsx)(x, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody2.addCredits.higherLimits`,
                defaultMessage: `Add credits to keep going now, or upgrade to Pro for more usage. Your limit will reset after {time}.`,
                values: {
                    time: O
                }
            }) : (0, R.jsx)(x, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody2.higherLimits`,
                defaultMessage: `Upgrade to Pro to get more usage, or wait for your limit to reset after {time}.`,
                values: {
                    time: O
                }
            });
            else {
                let t = v(We, ee(u.PROLITE), ae.Month).amount;
                B = e ? (0, R.jsx)(x, {
                    id: `wham.usageDashboard.limitReachedWithCredits.plusBody3.addCredits.higherLimits`,
                    defaultMessage: `Add credits to keep going now, or upgrade to Pro for more usage at {costString}/month. Your limit will reset after {time}.`,
                    values: {
                        time: O,
                        costString: s.formatNumber(t, {
                            style: `currency`,
                            currency: P,
                            trailingZeroDisplay: `stripIfInteger`
                        })
                    }
                }) : (0, R.jsx)(x, {
                    id: `wham.usageDashboard.limitReachedWithCredits.plusBody3.higherLimits`,
                    defaultMessage: `Upgrade to Pro to get more usage for {costString}/month, or wait for your limit to reset after {time}.`,
                    values: {
                        time: O,
                        costString: s.formatNumber(t, {
                            style: `currency`,
                            currency: P,
                            trailingZeroDisplay: `stripIfInteger`
                        })
                    }
                })
            }
            T && (W = V, G = H, K = U, V = dt, H = mt, U = `upgrade`), e && (T ? (W = J, G = Y, K = `add_credits`) : (V = J, H = Y, U = `add_credits`))
        } else {
            let e;
            t[39] === O ? e = t[40] : (e = (0, R.jsx)(x, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody.addCreditsFirst`,
                defaultMessage: `Add credits to keep going now, or upgrade for more usage. Your limit will reset on {time}.`,
                values: {
                    time: O
                }
            }), t[39] = O, t[40] = e), B = e, V = J, H = Y, U = `add_credits`, T && (W = dt, G = mt, K = `upgrade`)
        }
    else if (oe) {
        let e = Fe();
        I = F({
            bannerType: `prolite_rate_limit_reached`,
            limitReason: `usage_limit`
        }), B = e ? (0, R.jsx)(x, {
            id: `wham.usageDashboard.limitReachedWithCredits.proLiteBody.addCredits.higherLimits`,
            defaultMessage: `Add credits to keep going now, or upgrade for more usage. Your limit will reset at {time}.`,
            values: {
                time: O
            }
        }) : (0, R.jsx)(x, {
            id: `wham.usageDashboard.limitReachedWithCredits.proLiteBody.higherLimits`,
            defaultMessage: `Upgrade for more usage, or wait for your limit to reset at {time}.`,
            values: {
                time: O
            }
        }), T && (W = V, G = H, K = U, V = dt, H = mt, U = `upgrade`), e && (T ? (W = J, G = Y, K = `add_credits`) : (V = J, H = Y, U = `add_credits`))
    } else if (ge) {
        I = F({
            bannerType: `free_or_go_rate_limit_reached`,
            limitReason: `usage_limit`
        });
        let e;
        t[41] === O ? e = t[42] : (e = (0, R.jsx)(x, {
            id: `wham.usageDashboard.limitReachedWithCredits.freeGoBody.addCredits`,
            defaultMessage: `Add credits to keep going now, or upgrade to Plus. Your limit will reset on {time}.`,
            values: {
                time: O
            }
        }), t[41] = O, t[42] = e), B = e, V = J, H = Y, U = `add_credits`, T && (W = dt, G = mt, K = `upgrade`)
    } else if (D) {
        if (I = F({
                bannerType: `pro_rate_limit_reached`,
                limitReason: `usage_limit`
            }), le(`2238071649`)) {
            let e;
            t[43] === O ? e = t[44] : (e = (0, R.jsx)(x, {
                id: `wham.usageDashboard.limitReachedWithCredits.proBody2.addCreditsKeepGoing`,
                defaultMessage: `Add credits to keep going, or wait until your balance resets at {time}.`,
                values: {
                    time: O
                }
            }), t[43] = O, t[44] = e), B = e
        } else {
            let e;
            t[45] === O ? e = t[46] : (e = (0, R.jsx)(x, {
                id: `wham.usageDashboard.limitReachedWithCredits.proBody`,
                defaultMessage: `Add credits to continue, or wait until {time}.`,
                values: {
                    time: O
                }
            }), t[45] = O, t[46] = e), B = e
        }
        W = V, G = H, K = U, V = J, H = Y, U = `add_credits`
    } else if (!d && (ce || Ee)) {
        I = Ye(g) ?? rt(n);
        let e;
        if (t[47] === O ? e = t[48] : (e = (0, R.jsx)(x, {
                id: `wham.usageDashboard.limitReachedWithCredits.teamOrEnterpriseBody`,
                defaultMessage: `Try again after {time}, or send a request to your admin.`,
                values: {
                    time: O
                }
            }), t[47] = O, t[48] = e), B = e, Ee) {
            W = V, G = H, K = U;
            let e;
            t[49] !== b || t[50] !== s ? (e = s.formatMessage(b ? Oe.requested : Oe.sendRequest), t[49] = b, t[50] = s, t[51] = e) : e = t[51], V = e, H = () => {
                y(Te, void 0, E.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
            }, U = Te === `usage_limit` ? `increase_spend_cap` : `notify_owner`, q = S
        }
    } else if (f) {
        if (ht === st) {
            I = F({
                bannerType: n.plan_type === u.GO ? `go_trial_rate_limit_reached` : `free_trial_rate_limit_reached`,
                limitReason: `usage_limit`
            });
            let e;
            t[52] === O ? e = t[53] : (e = (0, R.jsx)(x, {
                id: `wham.usageDashboard.limitReachedWithCredits.freeGoBodyWithPromo`,
                defaultMessage: `To continue using Codex, start your free trial of Plus today. Your limit will reset on {time}.`,
                values: {
                    time: O
                }
            }), t[52] = O, t[53] = e), B = e
        } else {
            I = F({
                bannerType: `free_or_go_rate_limit_reached`,
                limitReason: `usage_limit`
            });
            let e;
            t[54] === O ? e = t[55] : (e = (0, R.jsx)(x, {
                id: `wham.usageDashboard.limitReachedWithCredits.freeGoBody`,
                defaultMessage: `Upgrade to Plus to keep going. Your limit will reset on {time}.`,
                values: {
                    time: O
                }
            }), t[54] = O, t[55] = e), B = e
        }
        T && (W = V, G = H, K = U, V = dt, H = mt, U = `upgrade`)
    } else {
        I = F({
            bannerType: `legacy_rate_limit_reached`,
            limitReason: `usage_limit`
        });
        let e;
        t[56] === O ? e = t[57] : (e = (0, R.jsx)(x, {
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
        M && Ve.current !== Q && (Ve.current = Q, qe(I, `usage_dashboard`))
    }, t[58] = I, t[59] = M, t[60] = Q, t[61] = yt) : yt = t[61];
    let bt;
    t[62] !== I || t[63] !== M || t[64] !== Q ? (bt = [I, M, Q], t[62] = I, t[63] = M, t[64] = Q, t[65] = bt) : bt = t[65], (0, L.useEffect)(yt, bt);
    let xt;
    t[66] !== I || t[67] !== M || t[68] !== q || t[69] !== H || t[70] !== U ? (xt = () => {
        M && U != null && !q && Je({
            context: I,
            ctaAction: U,
            surface: `usage_dashboard`
        }), H()
    }, t[66] = I, t[67] = M, t[68] = q, t[69] = H, t[70] = U, t[71] = xt) : xt = t[71];
    let St = xt,
        Ct;
    t[72] !== I || t[73] !== M || t[74] !== G || t[75] !== K ? (Ct = () => {
        M && K != null && Je({
            context: I,
            ctaAction: K,
            surface: `usage_dashboard`
        }), G()
    }, t[72] = I, t[73] = M, t[74] = G, t[75] = K, t[76] = Ct) : Ct = t[76];
    let wt = Ct,
        Tt;
    t[77] === Symbol.for(`react.memo_cache_sentinel`) ? (Tt = (0, R.jsx)(`div`, {
        className: `text-token-text-primary flex items-center justify-center`,
        children: (0, R.jsx)(Ae, {
            className: `icon`,
            "aria-hidden": !0
        })
    }), t[77] = Tt) : Tt = t[77];
    let $;
    t[78] !== k?.planType || t[79] !== X?.title || t[80] !== Pe || t[81] !== vt ? ($ = vt ? X?.title : Pe ? (0, R.jsx)(x, {
        ...Ge.title
    }) : k?.planType === u.ENT26 ? (0, R.jsx)(x, {
        id: `wham.usageDashboard.ent26.limitReached.title`,
        defaultMessage: `You’re out of usage for now`
    }) : (0, R.jsx)(x, {
        ...Ke
    }), t[78] = k?.planType, t[79] = X?.title, t[80] = Pe, t[81] = vt, t[82] = $) : $ = t[82];
    let Et = W == null ? void 0 : wt,
        Dt = te && U === `add_credits`,
        Ot = te && K === `add_credits`,
        kt;
    return t[83] !== B || t[84] !== q || t[85] !== V || t[86] !== W || t[87] !== $ || t[88] !== Et || t[89] !== Dt || t[90] !== Ot || t[91] !== St ? (kt = (0, R.jsx)(ie, {
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

function $e(e) {
    return e.action === `invite` || e.action === `refer`
}

function et() {}

function tt() {}

function nt() {
    return c()?.id
}

function rt(e) {
    return ce(e.plan_type) ? F({
        bannerType: `business_rate_limit_reached`,
        limitReason: `usage_limit`
    }) : e.plan_type === u.EDUCATION_CBP || e.plan_type === u.EDU_PLUS || e.plan_type === u.EDU_PRO || e.plan_type === u.ENTERPRISE_CBP || e.plan_type === u.ENTERPRISE_CBP_USAGE_BASED || e.plan_type === u.HC || e.plan_type === u.HC_CONSUMPTION || e.plan_type === u.FINSERV || e.plan_type === u.LAW || e.plan_type === u.QUORUM || e.plan_type === u.K12 ? F({
        bannerType: `cbp_rate_limit_reached`,
        limitReason: `usage_limit`
    }) : F({
        bannerType: `legacy_rate_limit_reached`,
        limitReason: `usage_limit`
    })
}

function it(e) {
    "use forget";
    let t = (0, ot.c)(36),
        {
            rateLimit: n
        } = e,
        r = pe(),
        a = fe(),
        o = ue(),
        s = o?.planType === u.ENT26 && o.id === n.account_id,
        [ee, c] = (0, L.useState)(!1),
        te = P(),
        l = Be(),
        ne = He(),
        ae = ze(),
        oe = Le(),
        se = Re(),
        ce = i({
            openModalLocation: z
        }),
        le = Ne() === Ie.enabled && !l && !ne,
        d;
    t[0] !== r || t[1] !== n ? (d = re(r, de(n) ?? 0), t[0] = r, t[1] = n, t[2] = d) : d = t[2];
    let f = d;
    if (!te) return null;
    let p;
    t[3] === f ? p = t[4] : (p = (0, R.jsx)(x, {
        id: `wham.usageDashboard.nearLimitWithCredits.defaultBody`,
        defaultMessage: `You’re getting close to your limit. It will reset on {time}.`,
        values: {
            time: f
        }
    }), t[3] = f, t[4] = p);
    let m = p,
        h = null,
        g = I,
        _ = null,
        v = at,
        y;
    t[5] === r ? y = t[6] : (y = r.formatMessage({
        id: `wham.usageDashboard.upsellBanner.addCredits`,
        defaultMessage: `Add credits`
    }), t[5] = r, t[6] = y);
    let b = y,
        S;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (S = () => {
        De(ye, {
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: he.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            onCheckoutPresented: () => c(!1),
            onCustomCheckoutEnd: () => c(!1),
            onCustomCheckoutStart: () => c(!0)
        })
    }, t[7] = S) : S = t[7];
    let C = S,
        w = n.promo?.campaign_id;
    if (l || ne) {
        let e;
        if (t[8] === f ? e = t[9] : (e = (0, R.jsx)(x, {
                id: `wham.usageDashboard.nearLimitWithCredits.plusBody.addCreditsFirst.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Add credits to keep building now, or upgrade for more usage. Your limit resets on {time}.`,
                values: {
                    time: f
                }
            }), t[8] = f, t[9] = e), m = e, h = b, g = C, ce) {
            let e;
            t[10] === r ? e = t[11] : (e = r.formatMessage({
                id: `wham.upsellBanner.upgradeToPro`,
                defaultMessage: `Upgrade`
            }), t[10] = r, t[11] = e), _ = e;
            let n;
            t[12] === a ? n = t[13] : (n = () => {
                xe({
                    navigate: a,
                    checkoutOriginProvenance: {
                        checkoutOriginProductExperience: he.CODEX,
                        checkoutOriginDeliverySurface: `web`
                    },
                    openModalLocation: z,
                    pricingTarget: Ce(`pro`)
                })
            }, t[12] = a, t[13] = n), v = n
        }
    } else if (le) {
        let e;
        t[14] === f ? e = t[15] : (e = (0, R.jsx)(x, {
            id: `wham.usageDashboard.nearLimitWithCredits.proBody.codexAndWork`,
            defaultMessage: `You're nearing your Codex and Work usage limit. Add credits to stay unblocked, or wait until {time}.`,
            values: {
                time: f
            }
        }), t[14] = f, t[15] = e), m = e, h = b, g = C
    } else if (ae && !oe) {
        let e;
        t[16] !== s || t[17] !== f ? (e = s ? (0, R.jsx)(x, {
            id: `wham.usageDashboard.nearLimit.ent26.body`,
            defaultMessage: `You're nearing your usage limit. Try again after {time}, or contact your admin if you need more capacity.`,
            values: {
                time: f
            }
        }) : (0, R.jsx)(x, {
            id: `wham.usageDashboard.nearLimitWithCredits.teamOrEnterpriseBody.codexAndWork`,
            defaultMessage: `You're nearing your Codex and Work usage limit. Try again after {time}, or contact your admin if you need more capacity.`,
            values: {
                time: f
            }
        }), t[16] = s, t[17] = f, t[18] = e) : e = t[18], m = e
    } else if (se) {
        if (w === st) {
            let e;
            t[19] === f ? e = t[20] : (e = (0, R.jsx)(x, {
                id: `wham.usageDashboard.nearLimitWithCredits.freeGoBodyWithPromo.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Start a free trial of Plus today to keep building. Your limit resets on {time}.`,
                values: {
                    time: f
                }
            }), t[19] = f, t[20] = e), m = e
        } else {
            let e;
            t[21] === f ? e = t[22] : (e = (0, R.jsx)(x, {
                id: `wham.usageDashboard.nearLimitWithCredits.freeGoBody.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Upgrade to Plus to keep going. Your limit resets on {time}.`,
                values: {
                    time: f
                }
            }), t[21] = f, t[22] = e), m = e
        }
        if (ce) {
            let e;
            t[23] === r ? e = t[24] : (e = r.formatMessage({
                id: `wham.upsellBanner.upgradeToPlus`,
                defaultMessage: `Upgrade`
            }), t[23] = r, t[24] = e), h = e;
            let n;
            t[25] === a ? n = t[26] : (n = () => {
                xe({
                    navigate: a,
                    checkoutOriginProvenance: {
                        checkoutOriginProductExperience: he.CODEX,
                        checkoutOriginDeliverySurface: `web`
                    },
                    openModalLocation: z,
                    pricingTarget: Ce(`plus`)
                })
            }, t[25] = a, t[26] = n), g = n
        }
    }
    let T;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, R.jsx)(`div`, {
        className: `text-token-text-primary flex items-center justify-center`,
        children: (0, R.jsx)(Ae, {
            className: `icon`,
            "aria-hidden": !0
        })
    }), t[27] = T) : T = t[27];
    let me = ee && g === C,
        E = ee && v === C,
        D;
    return t[28] !== m || t[29] !== g || t[30] !== v || t[31] !== h || t[32] !== _ || t[33] !== me || t[34] !== E ? (D = (0, R.jsx)(ie, {
        className: `shadow-[0_16px_32px_-24px_rgba(15,23,42,0.25)]`,
        icon: T,
        content: m,
        primaryCtaText: h,
        primaryCtaColor: `primary`,
        onPrimaryCtaClick: g,
        isPrimaryCtaLoading: me,
        secondaryCtaText: _,
        onSecondaryCtaClick: v,
        isSecondaryCtaLoading: E,
        secondaryCtaColor: `secondary`,
        verticalCta: !1
    }), t[28] = m, t[29] = g, t[30] = v, t[31] = h, t[32] = _, t[33] = me, t[34] = E, t[35] = D) : D = t[35], D
}

function at() {}

function I() {}
var ot, L, R, st, z, B = e((() => {
    ot = T(), D(), ge(), ne(), k(), j(), d(), O(), ve(), oe(), je(), y(), n(), A(), r(), _(), o(), te(), m(), f(), s(), N(), Ve(), Me(), Te(), Xe(), Pe(), We(), M(), Ee(), l(), L = t(w()), C(), S(), R = b(), st = `plus-1-month-free`, z = g.WhamUsageDashboardRateLimitUpsell
}));
export {
    Ze as n, B as r, it as t
};
//# sourceMappingURL=35fc21ca-o1ya4g5ac4egmg6l.js.map