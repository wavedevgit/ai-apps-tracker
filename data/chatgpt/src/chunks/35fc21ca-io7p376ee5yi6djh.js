import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $st as n,
    F6 as r,
    Gl as i,
    Hl as ee,
    Hnt as a,
    I1 as te,
    Ji as ne,
    Jnt as o,
    K3 as s,
    Kl as c,
    L6 as re,
    M5 as ie,
    Oet as ae,
    Set as l,
    V4 as oe,
    Xi as se,
    Y1 as ce,
    Yl as le,
    Z0 as ue,
    _R as de,
    c6 as u,
    d6 as d,
    e2 as f,
    fst as p,
    ket as m,
    m8 as h,
    s6 as g,
    t6 as _,
    u6 as v,
    xR as y
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $ as b,
    Bn as fe,
    Hn as x,
    Pn as S,
    Pt as pe,
    Tn as C,
    Vn as w,
    zn as T
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    $nn as me,
    Bcn as he,
    Bln as ge,
    F8t as _e,
    Fcn as E,
    Hln as ve,
    JEn as ye,
    K$ as be,
    Lcn as xe,
    Sdn as D,
    Vln as Se,
    Xun as Ce,
    YEn as we,
    Yun as Te,
    Zun as Ee,
    nrn as De,
    q$ as Oe,
    srn as ke,
    xdn as Ae,
    z8t as je,
    zcn as Me,
    zln as Ne
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Fl as Pe,
    Pl as Fe
} from "./30901919-jory365vq6ym5crx.js";
import {
    C_ as Ie,
    Jg as Le,
    Qg as Re,
    S_ as ze,
    T_ as Be,
    Xg as Ve,
    Yg as He,
    Zg as O,
    b_ as Ue,
    e_ as k,
    t_ as We,
    x_ as Ge,
    y_ as Ke
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    l as A,
    u as j
} from "./e19f3910-gqf6e2pgn5z6k0mv.js";
import {
    n as qe,
    r as M,
    t as Je
} from "./06da37f5-b1x9cfencuafek3u.js";
import {
    a as Ye,
    i as Xe,
    n as Ze,
    r as Qe,
    t as N
} from "./7a206bce-c6i3aerihj4wr1cl.js";

function $e(e) {
    "use forget";
    let t = (0, st.c)(2);
    if (!j()) return null;
    let n;
    return t[0] === e ? n = t[1] : (n = (0, L.jsx)(et, {
        ...e
    }), t[0] = e, t[1] = n), n
}

function et(e) {
    "use forget";
    let t = (0, st.c)(93),
        {
            rateLimit: n,
            linkToUsageDashboard: te
        } = e,
        o = te !== void 0 && te,
        s = fe(),
        c = pe(),
        [re, l] = (0, I.useState)(!1),
        oe = ze(),
        se = Ie(),
        ue = Be(),
        de = Ge(),
        m = Ue(),
        h = ie(it),
        _ = n.rate_limit_reached_type?.type,
        v = n.spend_control?.reached === !0 || _ === `workspace_member_usage_limit_reached` || _ === `workspace_owner_usage_limit_reached`,
        {
            sendRequest: y,
            hasRequested: b,
            requestDisabled: x,
            usesSavedRequests: C
        } = ve(h),
        w;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (w = ae({
        openModalLocation: R
    }), t[0] = w) : w = t[0];
    let T = w,
        he = Re() === Ve.enabled && !oe && !se,
        ge = We(n.plan_type === p.FREE || n.plan_type === p.GO),
        E = ee(s, i(n) ?? 0),
        D = ce(),
        Ce = v ? `usage_limit` : `credits`,
        we;
    t[1] !== D || t[2] !== n || t[3] !== Ce ? (we = Ne(D, n, Ce), t[1] = D, t[2] = n, t[3] = Ce, t[4] = we) : we = t[4];
    let De = we,
        Oe = De != null,
        je;
    t[5] === D ? je = t[6] : (je = D?.getWorkspaceId(), t[5] = D, t[6] = je);
    let Pe = je,
        Le;
    t[7] !== D || t[8] !== n || t[9] !== Pe ? (Le = D?.planType === p.ENT26 && D.id === n.account_id && Pe != null && le(n), t[7] = D, t[8] = n, t[9] = Pe, t[10] = Le) : Le = t[10];
    let O = Le,
        k = D != null,
        Ke = (0, I.useRef)(null),
        A;
    t[11] === D ? A = t[12] : (A = D?.getSubscriptionBillingCurrency() ?? `USD`, t[11] = D, t[12] = A);
    let j = A,
        [qe, Qe] = (0, I.useState)(null),
        [$e, et] = (0, I.useState)(!1),
        P, ot;
    t[13] === j ? (P = t[14], ot = t[15]) : (P = () => {
        (async function() {
            let e = await g(void 0, j);
            Qe(e), et(!0)
        })()
    }, ot = [j], t[13] = j, t[14] = P, t[15] = ot), (0, I.useEffect)(P, ot);
    let F, z, lt;
    t[16] !== s || t[17] !== o ? (lt = o ? s.formatMessage({
        id: `wham.usageDashboard.upsellBanner.viewUsage`,
        defaultMessage: `View usage`
    }) : null, t[16] = s, t[17] = o, t[18] = lt) : lt = t[18];
    let B = lt,
        V = o ? () => {
            c(`/codex/cloud/settings/usage`)
        } : rt,
        H = o ? `view_usage` : null,
        U = null,
        W = nt,
        G = null,
        K = !1,
        ut;
    t[19] === s ? ut = t[20] : (ut = s.formatMessage({
        id: `wham.usageDashboard.upsellBanner.addCredits`,
        defaultMessage: `Add credits`
    }), t[19] = s, t[20] = ut);
    let q = ut,
        dt;
    t[21] === s ? dt = t[22] : (dt = s.formatMessage({
        id: `wham.upsellBanner.upgradePlan`,
        defaultMessage: `Upgrade`
    }), t[21] = s, t[22] = dt);
    let ft = dt,
        pt;
    t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (pt = () => {
        xe(Me, {
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: Ae.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            onCheckoutPresented: () => l(!1),
            onCustomCheckoutEnd: () => l(!1),
            onCustomCheckoutStart: () => l(!0)
        })
    }, t[23] = pt) : pt = t[23];
    let J = pt,
        mt;
    t[24] !== m || t[25] !== c ? (mt = () => {
        T && ke({
            navigate: c,
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: Ae.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            openModalLocation: R,
            pricingTarget: me(m ? `plus` : `pro`)
        })
    }, t[24] = m, t[25] = c, t[26] = mt) : mt = t[26];
    let Y = mt,
        ht = n.promo?.campaign_id,
        X = n.rate_limit_upsell,
        gt, _t;
    t[27] !== D || t[28] !== X?.ctas || t[29] !== X?.request_url ? (gt = D?.isOwnerOfAccount() && X?.request_url === Te(D.id), _t = X?.ctas.find(e => e.action === `request_usage` || gt && e.action === `request_increase`), t[27] = D, t[28] = X?.ctas, t[29] = X?.request_url, t[30] = gt, t[31] = _t) : (gt = t[30], _t = t[31]);
    let Z = _t,
        vt = D != null && D.id === n.account_id && C && Z != null;
    if (vt && X != null) {
        F = Ze(_) ?? at(n), z = X.description, B = Z.label, V = () => {
            gt && Z.action === `request_increase` ? Ee(D.id) : Z.reason != null && y(`usage_limit`, Z.reason, ye.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
        }, H = D.isOwnerOfAccount() ? `view_usage` : `request_increase`, K = !D.isOwnerOfAccount() && (Z.reason == null || x);
        let e;
        t[32] === X.ctas ? e = t[33] : (e = X.ctas.find(tt), t[32] = X.ctas, t[33] = e);
        let r = e;
        if (r != null && X.referral != null) {
            U = r.label, G = `invite`;
            let e = X.referral;
            W = () => f(be, {
                programId: e.program_id,
                entrypoint: `rate_limit`,
                rateLimitType: X.banner_type
            })
        }
    } else if (O) {
        F = Ze(_) ?? at(n);
        let e = D.isOwnerOfAccount(),
            r = e ? M.ownerDescription : M.memberDescription,
            i;
        if (t[34] === r ? i = t[35] : (i = (0, L.jsx)(S, {
                ...r
            }), t[34] = r, t[35] = i), z = i, U = B, W = V, G = H, e) {
            let e;
            t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, L.jsx)(S, {
                ...M.editBudget
            }), t[36] = e) : e = t[36], B = e, V = () => {
                window.open(_e(`/billing`, Pe), `_blank`, `noopener,noreferrer`)
            }, H = `add_credits`
        } else {
            let e = b ? Se.requested : M.contactOwner,
                n;
            t[37] === e ? n = t[38] : (n = (0, L.jsx)(S, {
                ...e
            }), t[37] = e, t[38] = n), B = n, V = () => {
                y(`credits`, void 0, ye.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
            }, H = `notify_owner`, K = x
        }
    } else if (oe)
        if (F = N({
                bannerType: `plus_rate_limit_reached`,
                limitReason: `usage_limit`
            }), a(`2238071649`)) {
            let e = He();
            if (!qe || !$e || !D) z = e ? (0, L.jsx)(S, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody2.addCredits.higherLimits`,
                defaultMessage: `Add credits to keep going now, or upgrade to Pro for more usage. Your limit will reset after {time}.`,
                values: {
                    time: E
                }
            }) : (0, L.jsx)(S, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody2.higherLimits`,
                defaultMessage: `Upgrade to Pro to get more usage, or wait for your limit to reset after {time}.`,
                values: {
                    time: E
                }
            });
            else {
                let t = u(qe, d(p.PROLITE), r.Month).amount;
                z = e ? (0, L.jsx)(S, {
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
                }) : (0, L.jsx)(S, {
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
            T && (U = B, W = V, G = H, B = ft, V = Y, H = `upgrade`), e && (T ? (U = q, W = J, G = `add_credits`) : (B = q, V = J, H = `add_credits`))
        } else {
            let e;
            t[39] === E ? e = t[40] : (e = (0, L.jsx)(S, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody.addCreditsFirst`,
                defaultMessage: `Add credits to keep going now, or upgrade for more usage. Your limit will reset on {time}.`,
                values: {
                    time: E
                }
            }), t[39] = E, t[40] = e), z = e, B = q, V = J, H = `add_credits`, T && (U = ft, W = Y, G = `upgrade`)
        }
    else if (se) {
        let e = He();
        F = N({
            bannerType: `prolite_rate_limit_reached`,
            limitReason: `usage_limit`
        }), z = e ? (0, L.jsx)(S, {
            id: `wham.usageDashboard.limitReachedWithCredits.proLiteBody.addCredits.higherLimits`,
            defaultMessage: `Add credits to keep going now, or upgrade for more usage. Your limit will reset at {time}.`,
            values: {
                time: E
            }
        }) : (0, L.jsx)(S, {
            id: `wham.usageDashboard.limitReachedWithCredits.proLiteBody.higherLimits`,
            defaultMessage: `Upgrade for more usage, or wait for your limit to reset at {time}.`,
            values: {
                time: E
            }
        }), T && (U = B, W = V, G = H, B = ft, V = Y, H = `upgrade`), e && (T ? (U = q, W = J, G = `add_credits`) : (B = q, V = J, H = `add_credits`))
    } else if (ge) {
        F = N({
            bannerType: `free_or_go_rate_limit_reached`,
            limitReason: `usage_limit`
        });
        let e;
        t[41] === E ? e = t[42] : (e = (0, L.jsx)(S, {
            id: `wham.usageDashboard.limitReachedWithCredits.freeGoBody.addCredits`,
            defaultMessage: `Add credits to keep going now, or upgrade to Plus. Your limit will reset on {time}.`,
            values: {
                time: E
            }
        }), t[41] = E, t[42] = e), z = e, B = q, V = J, H = `add_credits`, T && (U = ft, W = Y, G = `upgrade`)
    } else if (he) {
        if (F = N({
                bannerType: `pro_rate_limit_reached`,
                limitReason: `usage_limit`
            }), a(`2238071649`)) {
            let e;
            t[43] === E ? e = t[44] : (e = (0, L.jsx)(S, {
                id: `wham.usageDashboard.limitReachedWithCredits.proBody2.addCreditsKeepGoing`,
                defaultMessage: `Add credits to keep going, or wait until your balance resets at {time}.`,
                values: {
                    time: E
                }
            }), t[43] = E, t[44] = e), z = e
        } else {
            let e;
            t[45] === E ? e = t[46] : (e = (0, L.jsx)(S, {
                id: `wham.usageDashboard.limitReachedWithCredits.proBody`,
                defaultMessage: `Add credits to continue, or wait until {time}.`,
                values: {
                    time: E
                }
            }), t[45] = E, t[46] = e), z = e
        }
        U = B, W = V, G = H, B = q, V = J, H = `add_credits`
    } else if (!de && (ue || Oe)) {
        F = Ze(_) ?? at(n);
        let e;
        if (t[47] === E ? e = t[48] : (e = (0, L.jsx)(S, {
                id: `wham.usageDashboard.limitReachedWithCredits.teamOrEnterpriseBody`,
                defaultMessage: `Try again after {time}, or send a request to your admin.`,
                values: {
                    time: E
                }
            }), t[47] = E, t[48] = e), z = e, Oe) {
            U = B, W = V, G = H;
            let e;
            t[49] !== b || t[50] !== s ? (e = s.formatMessage(b ? Se.requested : Se.sendRequest), t[49] = b, t[50] = s, t[51] = e) : e = t[51], B = e, V = () => {
                y(De, void 0, ye.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
            }, H = De === `usage_limit` ? `increase_spend_cap` : `notify_owner`, K = x
        }
    } else if (m) {
        if (ht === ct) {
            F = N({
                bannerType: n.plan_type === p.GO ? `go_trial_rate_limit_reached` : `free_trial_rate_limit_reached`,
                limitReason: `usage_limit`
            });
            let e;
            t[52] === E ? e = t[53] : (e = (0, L.jsx)(S, {
                id: `wham.usageDashboard.limitReachedWithCredits.freeGoBodyWithPromo`,
                defaultMessage: `To continue using Codex, start your free trial of Plus today. Your limit will reset on {time}.`,
                values: {
                    time: E
                }
            }), t[52] = E, t[53] = e), z = e
        } else {
            F = N({
                bannerType: `free_or_go_rate_limit_reached`,
                limitReason: `usage_limit`
            });
            let e;
            t[54] === E ? e = t[55] : (e = (0, L.jsx)(S, {
                id: `wham.usageDashboard.limitReachedWithCredits.freeGoBody`,
                defaultMessage: `Upgrade to Plus to keep going. Your limit will reset on {time}.`,
                values: {
                    time: E
                }
            }), t[54] = E, t[55] = e), z = e
        }
        T && (U = B, W = V, G = H, B = ft, V = Y, H = `upgrade`)
    } else {
        F = N({
            bannerType: `legacy_rate_limit_reached`,
            limitReason: `usage_limit`
        });
        let e;
        t[56] === E ? e = t[57] : (e = (0, L.jsx)(S, {
            id: `wham.usageDashboard.limitReachedWithCredits.legacyEnterpriseBody`,
            defaultMessage: `Try again after {time}, or ask your admin to upgrade to a plan with credits.`,
            values: {
                time: E
            }
        }), t[56] = E, t[57] = e), z = e
    }
    let Q = `${F.platform}:${F.banner_type}:${F.limit_reason}`,
        yt;
    t[58] !== F || t[59] !== k || t[60] !== Q ? (yt = () => {
        k && Ke.current !== Q && (Ke.current = Q, Ye(F, `usage_dashboard`))
    }, t[58] = F, t[59] = k, t[60] = Q, t[61] = yt) : yt = t[61];
    let bt;
    t[62] !== F || t[63] !== k || t[64] !== Q ? (bt = [F, k, Q], t[62] = F, t[63] = k, t[64] = Q, t[65] = bt) : bt = t[65], (0, I.useEffect)(yt, bt);
    let xt;
    t[66] !== F || t[67] !== k || t[68] !== K || t[69] !== V || t[70] !== H ? (xt = () => {
        k && H != null && !K && Xe({
            context: F,
            ctaAction: H,
            surface: `usage_dashboard`
        }), V()
    }, t[66] = F, t[67] = k, t[68] = K, t[69] = V, t[70] = H, t[71] = xt) : xt = t[71];
    let St = xt,
        Ct;
    t[72] !== F || t[73] !== k || t[74] !== W || t[75] !== G ? (Ct = () => {
        k && G != null && Xe({
            context: F,
            ctaAction: G,
            surface: `usage_dashboard`
        }), W()
    }, t[72] = F, t[73] = k, t[74] = W, t[75] = G, t[76] = Ct) : Ct = t[76];
    let wt = Ct,
        Tt;
    t[77] === Symbol.for(`react.memo_cache_sentinel`) ? (Tt = (0, L.jsx)(`div`, {
        className: `text-token-text-primary flex items-center justify-center`,
        children: (0, L.jsx)(Fe, {
            className: `icon`,
            "aria-hidden": !0
        })
    }), t[77] = Tt) : Tt = t[77];
    let $;
    t[78] !== D?.planType || t[79] !== X?.title || t[80] !== O || t[81] !== vt ? ($ = vt ? X?.title : O ? (0, L.jsx)(S, {
        ...M.title
    }) : D?.planType === p.ENT26 ? (0, L.jsx)(S, {
        id: `wham.usageDashboard.ent26.limitReached.title`,
        defaultMessage: `You’re out of usage for now`
    }) : (0, L.jsx)(S, {
        ...Je
    }), t[78] = D?.planType, t[79] = X?.title, t[80] = O, t[81] = vt, t[82] = $) : $ = t[82];
    let Et = U == null ? void 0 : wt,
        Dt = re && H === `add_credits`,
        Ot = re && G === `add_credits`,
        kt;
    return t[83] !== z || t[84] !== K || t[85] !== B || t[86] !== U || t[87] !== $ || t[88] !== Et || t[89] !== Dt || t[90] !== Ot || t[91] !== St ? (kt = (0, L.jsx)(ne, {
        className: `shadow-[0_16px_32px_-24px_rgba(15,23,42,0.25)]`,
        icon: Tt,
        title: $,
        content: z,
        primaryCtaText: B,
        primaryCtaColor: `primary`,
        onPrimaryCtaClick: St,
        secondaryCtaText: U,
        onSecondaryCtaClick: Et,
        isPrimaryCtaDisabled: K,
        isPrimaryCtaLoading: Dt,
        isSecondaryCtaLoading: Ot,
        secondaryCtaColor: `secondary`,
        verticalCta: !1
    }), t[83] = z, t[84] = K, t[85] = B, t[86] = U, t[87] = $, t[88] = Et, t[89] = Dt, t[90] = Ot, t[91] = St, t[92] = kt) : kt = t[92], kt
}

function tt(e) {
    return e.action === `invite` || e.action === `refer`
}

function nt() {}

function rt() {}

function it() {
    return y()?.id
}

function at(e) {
    return _(e.plan_type) ? N({
        bannerType: `business_rate_limit_reached`,
        limitReason: `usage_limit`
    }) : e.plan_type === p.EDUCATION_CBP || e.plan_type === p.EDU_PLUS || e.plan_type === p.EDU_PRO || e.plan_type === p.ENTERPRISE_CBP || e.plan_type === p.ENTERPRISE_CBP_USAGE_BASED || e.plan_type === p.HC || e.plan_type === p.HC_CONSUMPTION || e.plan_type === p.FINSERV || e.plan_type === p.LAW || e.plan_type === p.QUORUM || e.plan_type === p.K12 ? N({
        bannerType: `cbp_rate_limit_reached`,
        limitReason: `usage_limit`
    }) : N({
        bannerType: `legacy_rate_limit_reached`,
        limitReason: `usage_limit`
    })
}

function P(e) {
    "use forget";
    let t = (0, st.c)(36),
        {
            rateLimit: n
        } = e,
        r = fe(),
        a = pe(),
        te = ce(),
        o = te?.planType === p.ENT26 && te.id === n.account_id,
        [s, c] = (0, I.useState)(!1),
        re = j(),
        ie = ze(),
        l = Ie(),
        oe = Be(),
        se = Ge(),
        le = Ue(),
        ue = ae({
            openModalLocation: R
        }),
        de = Re() === Ve.enabled && !ie && !l,
        u;
    t[0] !== r || t[1] !== n ? (u = ee(r, i(n) ?? 0), t[0] = r, t[1] = n, t[2] = u) : u = t[2];
    let d = u;
    if (!re) return null;
    let f;
    t[3] === d ? f = t[4] : (f = (0, L.jsx)(S, {
        id: `wham.usageDashboard.nearLimitWithCredits.defaultBody`,
        defaultMessage: `You’re getting close to your limit. It will reset on {time}.`,
        values: {
            time: d
        }
    }), t[3] = d, t[4] = f);
    let m = f,
        h = null,
        g = F,
        _ = null,
        v = ot,
        y;
    t[5] === r ? y = t[6] : (y = r.formatMessage({
        id: `wham.usageDashboard.upsellBanner.addCredits`,
        defaultMessage: `Add credits`
    }), t[5] = r, t[6] = y);
    let b = y,
        x;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (x = () => {
        xe(Me, {
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: Ae.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            onCheckoutPresented: () => c(!1),
            onCustomCheckoutEnd: () => c(!1),
            onCustomCheckoutStart: () => c(!0)
        })
    }, t[7] = x) : x = t[7];
    let C = x,
        w = n.promo?.campaign_id;
    if (ie || l) {
        let e;
        if (t[8] === d ? e = t[9] : (e = (0, L.jsx)(S, {
                id: `wham.usageDashboard.nearLimitWithCredits.plusBody.addCreditsFirst.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Add credits to keep building now, or upgrade for more usage. Your limit resets on {time}.`,
                values: {
                    time: d
                }
            }), t[8] = d, t[9] = e), m = e, h = b, g = C, ue) {
            let e;
            t[10] === r ? e = t[11] : (e = r.formatMessage({
                id: `wham.upsellBanner.upgradeToPro`,
                defaultMessage: `Upgrade`
            }), t[10] = r, t[11] = e), _ = e;
            let n;
            t[12] === a ? n = t[13] : (n = () => {
                ke({
                    navigate: a,
                    checkoutOriginProvenance: {
                        checkoutOriginProductExperience: Ae.CODEX,
                        checkoutOriginDeliverySurface: `web`
                    },
                    openModalLocation: R,
                    pricingTarget: me(`pro`)
                })
            }, t[12] = a, t[13] = n), v = n
        }
    } else if (de) {
        let e;
        t[14] === d ? e = t[15] : (e = (0, L.jsx)(S, {
            id: `wham.usageDashboard.nearLimitWithCredits.proBody.codexAndWork`,
            defaultMessage: `You're nearing your Codex and Work usage limit. Add credits to stay unblocked, or wait until {time}.`,
            values: {
                time: d
            }
        }), t[14] = d, t[15] = e), m = e, h = b, g = C
    } else if (oe && !se) {
        let e;
        t[16] !== o || t[17] !== d ? (e = o ? (0, L.jsx)(S, {
            id: `wham.usageDashboard.nearLimit.ent26.body`,
            defaultMessage: `You're nearing your usage limit. Try again after {time}, or contact your admin if you need more capacity.`,
            values: {
                time: d
            }
        }) : (0, L.jsx)(S, {
            id: `wham.usageDashboard.nearLimitWithCredits.teamOrEnterpriseBody.codexAndWork`,
            defaultMessage: `You're nearing your Codex and Work usage limit. Try again after {time}, or contact your admin if you need more capacity.`,
            values: {
                time: d
            }
        }), t[16] = o, t[17] = d, t[18] = e) : e = t[18], m = e
    } else if (le) {
        if (w === ct) {
            let e;
            t[19] === d ? e = t[20] : (e = (0, L.jsx)(S, {
                id: `wham.usageDashboard.nearLimitWithCredits.freeGoBodyWithPromo.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Start a free trial of Plus today to keep building. Your limit resets on {time}.`,
                values: {
                    time: d
                }
            }), t[19] = d, t[20] = e), m = e
        } else {
            let e;
            t[21] === d ? e = t[22] : (e = (0, L.jsx)(S, {
                id: `wham.usageDashboard.nearLimitWithCredits.freeGoBody.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Upgrade to Plus to keep going. Your limit resets on {time}.`,
                values: {
                    time: d
                }
            }), t[21] = d, t[22] = e), m = e
        }
        if (ue) {
            let e;
            t[23] === r ? e = t[24] : (e = r.formatMessage({
                id: `wham.upsellBanner.upgradeToPlus`,
                defaultMessage: `Upgrade`
            }), t[23] = r, t[24] = e), h = e;
            let n;
            t[25] === a ? n = t[26] : (n = () => {
                ke({
                    navigate: a,
                    checkoutOriginProvenance: {
                        checkoutOriginProductExperience: Ae.CODEX,
                        checkoutOriginDeliverySurface: `web`
                    },
                    openModalLocation: R,
                    pricingTarget: me(`plus`)
                })
            }, t[25] = a, t[26] = n), g = n
        }
    }
    let T;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, L.jsx)(`div`, {
        className: `text-token-text-primary flex items-center justify-center`,
        children: (0, L.jsx)(Fe, {
            className: `icon`,
            "aria-hidden": !0
        })
    }), t[27] = T) : T = t[27];
    let he = s && g === C,
        ge = s && v === C,
        _e;
    return t[28] !== m || t[29] !== g || t[30] !== v || t[31] !== h || t[32] !== _ || t[33] !== he || t[34] !== ge ? (_e = (0, L.jsx)(ne, {
        className: `shadow-[0_16px_32px_-24px_rgba(15,23,42,0.25)]`,
        icon: T,
        content: m,
        primaryCtaText: h,
        primaryCtaColor: `primary`,
        onPrimaryCtaClick: g,
        isPrimaryCtaLoading: he,
        secondaryCtaText: _,
        onSecondaryCtaClick: v,
        isSecondaryCtaLoading: ge,
        secondaryCtaColor: `secondary`,
        verticalCta: !1
    }), t[28] = m, t[29] = g, t[30] = v, t[31] = h, t[32] = _, t[33] = he, t[34] = ge, t[35] = _e) : _e = t[35], _e
}

function ot() {}

function F() {}
var st, I, L, ct, R, z = e((() => {
    st = C(), we(), D(), n(), je(), E(), ue(), Oe(), Ce(), se(), Pe(), l(), re(), De(), h(), te(), de(), v(), oe(), s(), o(), A(), Ke(), O(), he(), Qe(), Le(), qe(), k(), ge(), c(), I = t(x()), T(), b(), L = w(), ct = `plus-1-month-free`, R = m.WhamUsageDashboardRateLimitUpsell
}));
export {
    $e as n, z as r, P as t
};
//# sourceMappingURL=35fc21ca-io7p376ee5yi6djh.js.map