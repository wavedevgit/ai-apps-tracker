import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $9 as n,
    B6 as r,
    C1 as i,
    Dl as ee,
    F3 as a,
    Ji as te,
    L3 as o,
    Lot as s,
    O0 as ne,
    O3 as c,
    Ol as l,
    P3 as re,
    QL as u,
    R3 as ie,
    T0 as ae,
    Xi as d,
    _6 as oe,
    eet as se,
    h4 as ce,
    h6 as le,
    i5 as ue,
    jl as f,
    nR as p,
    pnt as m,
    q9 as h,
    u1 as g,
    wl as de,
    wst as _,
    y3 as v,
    ynt as y
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as b,
    Bn as x,
    Nn as S,
    Pt as fe,
    Rn as C,
    Vn as w,
    wn as T,
    zn as pe
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Bnn as me,
    Ccn as he,
    Dln as E,
    Ecn as ge,
    Eln as D,
    Fun as _e,
    G$ as O,
    Iun as k,
    Jnn as ve,
    Lun as ye,
    NEn as be,
    Oln as xe,
    PEn as Se,
    Tcn as Ce,
    Tln as we,
    Unn as Te,
    W$ as Ee,
    W8t as De,
    cdn as Oe,
    q8t as ke,
    sdn as Ae,
    xcn as je
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Fl as Me,
    Pl as Ne
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    $g as Pe,
    C_ as Fe,
    Jg as Ie,
    Kg as Le,
    Qg as Re,
    Xg as ze,
    Yg as A,
    __ as Be,
    b_ as Ve,
    qg as He,
    v_ as Ue,
    x_ as We,
    y_ as Ge
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    l as Ke,
    u as j
} from "./e19f3910-nriy7br1qc4gkn80.js";
import {
    n as qe,
    r as M,
    t as Je
} from "./06da37f5-fw5469u81kait3zs.js";
import {
    a as Ye,
    i as Xe,
    n as Ze,
    r as Qe,
    t as N
} from "./7a206bce-capwwnva908kf66r.js";

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
            linkToUsageDashboard: o
        } = e,
        c = o !== void 0 && o,
        l = pe(),
        u = fe(),
        [ae, d] = (0, L.useState)(!1),
        oe = Ve(),
        se = We(),
        ce = Fe(),
        p = Ge(),
        h = Ue(),
        g = ue(it),
        _ = r.rate_limit_reached_type?.type,
        v = r.spend_control?.reached === !0 || _ === `workspace_member_usage_limit_reached` || _ === `workspace_owner_usage_limit_reached`,
        {
            sendRequest: y,
            hasRequested: b,
            requestDisabled: x,
            usesSavedRequests: C
        } = xe(g),
        w;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (w = n({
        openModalLocation: z
    }), t[0] = w) : w = t[0];
    let T = w,
        ge = ze() === Ie.enabled && !oe && !se,
        D = Pe(r.plan_type === s.FREE || r.plan_type === s.GO),
        O = de(l, ee(r) ?? 0),
        k = i(),
        Se = v ? `usage_limit` : `credits`,
        Te;
    t[1] !== k || t[2] !== r || t[3] !== Se ? (Te = we(k, r, Se), t[1] = k, t[2] = r, t[3] = Se, t[4] = Te) : Te = t[4];
    let Oe = Te,
        ke = Oe != null,
        je;
    t[5] === k ? je = t[6] : (je = k?.getWorkspaceId(), t[5] = k, t[6] = je);
    let Me = je,
        Le;
    t[7] !== k || t[8] !== r || t[9] !== Me ? (Le = k?.planType === s.ENT26 && k.id === r.account_id && Me != null && f(r), t[7] = k, t[8] = r, t[9] = Me, t[10] = Le) : Le = t[10];
    let Re = Le,
        A = k != null,
        Be = (0, L.useRef)(null),
        Ke;
    t[11] === k ? Ke = t[12] : (Ke = k?.getSubscriptionBillingCurrency() ?? `USD`, t[11] = k, t[12] = Ke);
    let j = Ke,
        [qe, Qe] = (0, L.useState)(null),
        [$e, et] = (0, L.useState)(!1),
        P, F;
    t[13] === j ? (P = t[14], F = t[15]) : (P = () => {
        (async function() {
            let e = await re(void 0, j);
            Qe(e), et(!0)
        })()
    }, F = [j], t[13] = j, t[14] = P, t[15] = F), (0, L.useEffect)(P, F);
    let I, B, ct;
    t[16] !== l || t[17] !== c ? (ct = c ? l.formatMessage({
        id: `wham.usageDashboard.upsellBanner.viewUsage`,
        defaultMessage: `View usage`
    }) : null, t[16] = l, t[17] = c, t[18] = ct) : ct = t[18];
    let V = ct,
        H = c ? () => {
            u(`/codex/cloud/settings/usage`)
        } : rt,
        U = c ? `view_usage` : null,
        W = null,
        G = nt,
        K = null,
        q = !1,
        lt;
    t[19] === l ? lt = t[20] : (lt = l.formatMessage({
        id: `wham.usageDashboard.upsellBanner.addCredits`,
        defaultMessage: `Add credits`
    }), t[19] = l, t[20] = lt);
    let J = lt,
        ut;
    t[21] === l ? ut = t[22] : (ut = l.formatMessage({
        id: `wham.upsellBanner.upgradePlan`,
        defaultMessage: `Upgrade`
    }), t[21] = l, t[22] = ut);
    let dt = ut,
        ft;
    t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (ft = () => {
        he(Ce, {
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: Ae.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            onCheckoutPresented: () => d(!1),
            onCustomCheckoutEnd: () => d(!1),
            onCustomCheckoutStart: () => d(!0)
        })
    }, t[23] = ft) : ft = t[23];
    let Y = ft,
        pt;
    t[24] !== h || t[25] !== u ? (pt = () => {
        T && ve({
            navigate: u,
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: Ae.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            openModalLocation: z,
            pricingTarget: me(h ? `plus` : `pro`)
        })
    }, t[24] = h, t[25] = u, t[26] = pt) : pt = t[26];
    let mt = pt,
        ht = r.promo?.campaign_id,
        X = r.rate_limit_upsell,
        gt, _t;
    t[27] !== k || t[28] !== X?.ctas || t[29] !== X?.request_url ? (gt = k?.isOwnerOfAccount() && X?.request_url === _e(k.id), _t = X?.ctas.find(e => e.action === `request_usage` || gt && e.action === `request_increase`), t[27] = k, t[28] = X?.ctas, t[29] = X?.request_url, t[30] = gt, t[31] = _t) : (gt = t[30], _t = t[31]);
    let Z = _t,
        vt = k != null && k.id === r.account_id && C && Z != null;
    if (vt && X != null) {
        I = Ze(_) ?? at(r), B = X.description, V = Z.label, H = () => {
            gt && Z.action === `request_increase` ? ye(k.id) : Z.reason != null && y(`usage_limit`, Z.reason, be.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
        }, U = k.isOwnerOfAccount() ? `view_usage` : `request_increase`, q = !k.isOwnerOfAccount() && (Z.reason == null || x);
        let e;
        t[32] === X.ctas ? e = t[33] : (e = X.ctas.find(tt), t[32] = X.ctas, t[33] = e);
        let n = e;
        if (n != null && X.referral != null) {
            W = n.label, K = `invite`;
            let e = X.referral;
            G = () => ne(Ee, {
                programId: e.program_id,
                entrypoint: `rate_limit`,
                rateLimitType: X.banner_type
            })
        }
    } else if (Re) {
        I = Ze(_) ?? at(r);
        let e = k.isOwnerOfAccount(),
            n = e ? M.ownerDescription : M.memberDescription,
            i;
        if (t[34] === n ? i = t[35] : (i = (0, R.jsx)(S, {
                ...n
            }), t[34] = n, t[35] = i), B = i, W = V, G = H, K = U, e) {
            let e;
            t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, R.jsx)(S, {
                ...M.editBudget
            }), t[36] = e) : e = t[36], V = e, H = () => {
                window.open(De(`/billing`, Me), `_blank`, `noopener,noreferrer`)
            }, U = `add_credits`
        } else {
            let e = b ? E.requested : M.contactOwner,
                n;
            t[37] === e ? n = t[38] : (n = (0, R.jsx)(S, {
                ...e
            }), t[37] = e, t[38] = n), V = n, H = () => {
                y(`credits`, void 0, be.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
            }, U = `notify_owner`, q = x
        }
    } else if (oe)
        if (I = N({
                bannerType: `plus_rate_limit_reached`,
                limitReason: `usage_limit`
            }), m(`2238071649`)) {
            let e = He();
            if (!qe || !$e || !k) B = e ? (0, R.jsx)(S, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody2.addCredits.higherLimits`,
                defaultMessage: `Add credits to keep going now, or upgrade to Pro for more usage. Your limit will reset after {time}.`,
                values: {
                    time: O
                }
            }) : (0, R.jsx)(S, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody2.higherLimits`,
                defaultMessage: `Upgrade to Pro to get more usage, or wait for your limit to reset after {time}.`,
                values: {
                    time: O
                }
            });
            else {
                let t = a(qe, ie(s.PROLITE), le.Month).amount;
                B = e ? (0, R.jsx)(S, {
                    id: `wham.usageDashboard.limitReachedWithCredits.plusBody3.addCredits.higherLimits`,
                    defaultMessage: `Add credits to keep going now, or upgrade to Pro for more usage at {costString}/month. Your limit will reset after {time}.`,
                    values: {
                        time: O,
                        costString: l.formatNumber(t, {
                            style: `currency`,
                            currency: j,
                            trailingZeroDisplay: `stripIfInteger`
                        })
                    }
                }) : (0, R.jsx)(S, {
                    id: `wham.usageDashboard.limitReachedWithCredits.plusBody3.higherLimits`,
                    defaultMessage: `Upgrade to Pro to get more usage for {costString}/month, or wait for your limit to reset after {time}.`,
                    values: {
                        time: O,
                        costString: l.formatNumber(t, {
                            style: `currency`,
                            currency: j,
                            trailingZeroDisplay: `stripIfInteger`
                        })
                    }
                })
            }
            T && (W = V, G = H, K = U, V = dt, H = mt, U = `upgrade`), e && (T ? (W = J, G = Y, K = `add_credits`) : (V = J, H = Y, U = `add_credits`))
        } else {
            let e;
            t[39] === O ? e = t[40] : (e = (0, R.jsx)(S, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody.addCreditsFirst`,
                defaultMessage: `Add credits to keep going now, or upgrade for more usage. Your limit will reset on {time}.`,
                values: {
                    time: O
                }
            }), t[39] = O, t[40] = e), B = e, V = J, H = Y, U = `add_credits`, T && (W = dt, G = mt, K = `upgrade`)
        }
    else if (se) {
        let e = He();
        I = N({
            bannerType: `prolite_rate_limit_reached`,
            limitReason: `usage_limit`
        }), B = e ? (0, R.jsx)(S, {
            id: `wham.usageDashboard.limitReachedWithCredits.proLiteBody.addCredits.higherLimits`,
            defaultMessage: `Add credits to keep going now, or upgrade for more usage. Your limit will reset at {time}.`,
            values: {
                time: O
            }
        }) : (0, R.jsx)(S, {
            id: `wham.usageDashboard.limitReachedWithCredits.proLiteBody.higherLimits`,
            defaultMessage: `Upgrade for more usage, or wait for your limit to reset at {time}.`,
            values: {
                time: O
            }
        }), T && (W = V, G = H, K = U, V = dt, H = mt, U = `upgrade`), e && (T ? (W = J, G = Y, K = `add_credits`) : (V = J, H = Y, U = `add_credits`))
    } else if (D) {
        I = N({
            bannerType: `free_or_go_rate_limit_reached`,
            limitReason: `usage_limit`
        });
        let e;
        t[41] === O ? e = t[42] : (e = (0, R.jsx)(S, {
            id: `wham.usageDashboard.limitReachedWithCredits.freeGoBody.addCredits`,
            defaultMessage: `Add credits to keep going now, or upgrade to Plus. Your limit will reset on {time}.`,
            values: {
                time: O
            }
        }), t[41] = O, t[42] = e), B = e, V = J, H = Y, U = `add_credits`, T && (W = dt, G = mt, K = `upgrade`)
    } else if (ge) {
        if (I = N({
                bannerType: `pro_rate_limit_reached`,
                limitReason: `usage_limit`
            }), m(`2238071649`)) {
            let e;
            t[43] === O ? e = t[44] : (e = (0, R.jsx)(S, {
                id: `wham.usageDashboard.limitReachedWithCredits.proBody2.addCreditsKeepGoing`,
                defaultMessage: `Add credits to keep going, or wait until your balance resets at {time}.`,
                values: {
                    time: O
                }
            }), t[43] = O, t[44] = e), B = e
        } else {
            let e;
            t[45] === O ? e = t[46] : (e = (0, R.jsx)(S, {
                id: `wham.usageDashboard.limitReachedWithCredits.proBody`,
                defaultMessage: `Add credits to continue, or wait until {time}.`,
                values: {
                    time: O
                }
            }), t[45] = O, t[46] = e), B = e
        }
        W = V, G = H, K = U, V = J, H = Y, U = `add_credits`
    } else if (!p && (ce || ke)) {
        I = Ze(_) ?? at(r);
        let e;
        if (t[47] === O ? e = t[48] : (e = (0, R.jsx)(S, {
                id: `wham.usageDashboard.limitReachedWithCredits.teamOrEnterpriseBody`,
                defaultMessage: `Try again after {time}, or send a request to your admin.`,
                values: {
                    time: O
                }
            }), t[47] = O, t[48] = e), B = e, ke) {
            W = V, G = H, K = U;
            let e;
            t[49] !== b || t[50] !== l ? (e = l.formatMessage(b ? E.requested : E.sendRequest), t[49] = b, t[50] = l, t[51] = e) : e = t[51], V = e, H = () => {
                y(Oe, void 0, be.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
            }, U = Oe === `usage_limit` ? `increase_spend_cap` : `notify_owner`, q = x
        }
    } else if (h) {
        if (ht === st) {
            I = N({
                bannerType: r.plan_type === s.GO ? `go_trial_rate_limit_reached` : `free_trial_rate_limit_reached`,
                limitReason: `usage_limit`
            });
            let e;
            t[52] === O ? e = t[53] : (e = (0, R.jsx)(S, {
                id: `wham.usageDashboard.limitReachedWithCredits.freeGoBodyWithPromo`,
                defaultMessage: `To continue using Codex, start your free trial of Plus today. Your limit will reset on {time}.`,
                values: {
                    time: O
                }
            }), t[52] = O, t[53] = e), B = e
        } else {
            I = N({
                bannerType: `free_or_go_rate_limit_reached`,
                limitReason: `usage_limit`
            });
            let e;
            t[54] === O ? e = t[55] : (e = (0, R.jsx)(S, {
                id: `wham.usageDashboard.limitReachedWithCredits.freeGoBody`,
                defaultMessage: `Upgrade to Plus to keep going. Your limit will reset on {time}.`,
                values: {
                    time: O
                }
            }), t[54] = O, t[55] = e), B = e
        }
        T && (W = V, G = H, K = U, V = dt, H = mt, U = `upgrade`)
    } else {
        I = N({
            bannerType: `legacy_rate_limit_reached`,
            limitReason: `usage_limit`
        });
        let e;
        t[56] === O ? e = t[57] : (e = (0, R.jsx)(S, {
            id: `wham.usageDashboard.limitReachedWithCredits.legacyEnterpriseBody`,
            defaultMessage: `Try again after {time}, or ask your admin to upgrade to a plan with credits.`,
            values: {
                time: O
            }
        }), t[56] = O, t[57] = e), B = e
    }
    let Q = `${I.platform}:${I.banner_type}:${I.limit_reason}`,
        yt;
    t[58] !== I || t[59] !== A || t[60] !== Q ? (yt = () => {
        A && Be.current !== Q && (Be.current = Q, Ye(I, `usage_dashboard`))
    }, t[58] = I, t[59] = A, t[60] = Q, t[61] = yt) : yt = t[61];
    let bt;
    t[62] !== I || t[63] !== A || t[64] !== Q ? (bt = [I, A, Q], t[62] = I, t[63] = A, t[64] = Q, t[65] = bt) : bt = t[65], (0, L.useEffect)(yt, bt);
    let xt;
    t[66] !== I || t[67] !== A || t[68] !== q || t[69] !== H || t[70] !== U ? (xt = () => {
        A && U != null && !q && Xe({
            context: I,
            ctaAction: U,
            surface: `usage_dashboard`
        }), H()
    }, t[66] = I, t[67] = A, t[68] = q, t[69] = H, t[70] = U, t[71] = xt) : xt = t[71];
    let St = xt,
        Ct;
    t[72] !== I || t[73] !== A || t[74] !== G || t[75] !== K ? (Ct = () => {
        A && K != null && Xe({
            context: I,
            ctaAction: K,
            surface: `usage_dashboard`
        }), G()
    }, t[72] = I, t[73] = A, t[74] = G, t[75] = K, t[76] = Ct) : Ct = t[76];
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
    t[78] !== k?.planType || t[79] !== X?.title || t[80] !== Re || t[81] !== vt ? ($ = vt ? X?.title : Re ? (0, R.jsx)(S, {
        ...M.title
    }) : k?.planType === s.ENT26 ? (0, R.jsx)(S, {
        id: `wham.usageDashboard.ent26.limitReached.title`,
        defaultMessage: `You’re out of usage for now`
    }) : (0, R.jsx)(S, {
        ...Je
    }), t[78] = k?.planType, t[79] = X?.title, t[80] = Re, t[81] = vt, t[82] = $) : $ = t[82];
    let Et = W == null ? void 0 : wt,
        Dt = ae && U === `add_credits`,
        Ot = ae && K === `add_credits`,
        kt;
    return t[83] !== B || t[84] !== q || t[85] !== V || t[86] !== W || t[87] !== $ || t[88] !== Et || t[89] !== Dt || t[90] !== Ot || t[91] !== St ? (kt = (0, R.jsx)(te, {
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
    return p()?.id
}

function at(e) {
    return c(e.plan_type) ? N({
        bannerType: `business_rate_limit_reached`,
        limitReason: `usage_limit`
    }) : e.plan_type === s.EDUCATION_CBP || e.plan_type === s.EDU_PLUS || e.plan_type === s.EDU_PRO || e.plan_type === s.ENTERPRISE_CBP || e.plan_type === s.ENTERPRISE_CBP_USAGE_BASED || e.plan_type === s.HC || e.plan_type === s.HC_CONSUMPTION || e.plan_type === s.FINSERV || e.plan_type === s.LAW || e.plan_type === s.QUORUM || e.plan_type === s.K12 ? N({
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
        a = pe(),
        o = fe(),
        ne = i(),
        c = ne?.planType === s.ENT26 && ne.id === r.account_id,
        [l, re] = (0, L.useState)(!1),
        u = j(),
        ie = Ve(),
        ae = We(),
        d = Fe(),
        oe = Ge(),
        se = Ue(),
        ce = n({
            openModalLocation: z
        }),
        le = ze() === Ie.enabled && !ie && !ae,
        ue;
    t[0] !== a || t[1] !== r ? (ue = de(a, ee(r) ?? 0), t[0] = a, t[1] = r, t[2] = ue) : ue = t[2];
    let f = ue;
    if (!u) return null;
    let p;
    t[3] === f ? p = t[4] : (p = (0, R.jsx)(S, {
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
        v = F,
        y;
    t[5] === a ? y = t[6] : (y = a.formatMessage({
        id: `wham.usageDashboard.upsellBanner.addCredits`,
        defaultMessage: `Add credits`
    }), t[5] = a, t[6] = y);
    let b = y,
        x;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (x = () => {
        he(Ce, {
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: Ae.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            onCheckoutPresented: () => re(!1),
            onCustomCheckoutEnd: () => re(!1),
            onCustomCheckoutStart: () => re(!0)
        })
    }, t[7] = x) : x = t[7];
    let C = x,
        w = r.promo?.campaign_id;
    if (ie || ae) {
        let e;
        if (t[8] === f ? e = t[9] : (e = (0, R.jsx)(S, {
                id: `wham.usageDashboard.nearLimitWithCredits.plusBody.addCreditsFirst.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Add credits to keep building now, or upgrade for more usage. Your limit resets on {time}.`,
                values: {
                    time: f
                }
            }), t[8] = f, t[9] = e), m = e, h = b, g = C, ce) {
            let e;
            t[10] === a ? e = t[11] : (e = a.formatMessage({
                id: `wham.upsellBanner.upgradeToPro`,
                defaultMessage: `Upgrade`
            }), t[10] = a, t[11] = e), _ = e;
            let n;
            t[12] === o ? n = t[13] : (n = () => {
                ve({
                    navigate: o,
                    checkoutOriginProvenance: {
                        checkoutOriginProductExperience: Ae.CODEX,
                        checkoutOriginDeliverySurface: `web`
                    },
                    openModalLocation: z,
                    pricingTarget: me(`pro`)
                })
            }, t[12] = o, t[13] = n), v = n
        }
    } else if (le) {
        let e;
        t[14] === f ? e = t[15] : (e = (0, R.jsx)(S, {
            id: `wham.usageDashboard.nearLimitWithCredits.proBody.codexAndWork`,
            defaultMessage: `You're nearing your Codex and Work usage limit. Add credits to stay unblocked, or wait until {time}.`,
            values: {
                time: f
            }
        }), t[14] = f, t[15] = e), m = e, h = b, g = C
    } else if (d && !oe) {
        let e;
        t[16] !== c || t[17] !== f ? (e = c ? (0, R.jsx)(S, {
            id: `wham.usageDashboard.nearLimit.ent26.body`,
            defaultMessage: `You're nearing your usage limit. Try again after {time}, or contact your admin if you need more capacity.`,
            values: {
                time: f
            }
        }) : (0, R.jsx)(S, {
            id: `wham.usageDashboard.nearLimitWithCredits.teamOrEnterpriseBody.codexAndWork`,
            defaultMessage: `You're nearing your Codex and Work usage limit. Try again after {time}, or contact your admin if you need more capacity.`,
            values: {
                time: f
            }
        }), t[16] = c, t[17] = f, t[18] = e) : e = t[18], m = e
    } else if (se) {
        if (w === st) {
            let e;
            t[19] === f ? e = t[20] : (e = (0, R.jsx)(S, {
                id: `wham.usageDashboard.nearLimitWithCredits.freeGoBodyWithPromo.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Start a free trial of Plus today to keep building. Your limit resets on {time}.`,
                values: {
                    time: f
                }
            }), t[19] = f, t[20] = e), m = e
        } else {
            let e;
            t[21] === f ? e = t[22] : (e = (0, R.jsx)(S, {
                id: `wham.usageDashboard.nearLimitWithCredits.freeGoBody.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Upgrade to Plus to keep going. Your limit resets on {time}.`,
                values: {
                    time: f
                }
            }), t[21] = f, t[22] = e), m = e
        }
        if (ce) {
            let e;
            t[23] === a ? e = t[24] : (e = a.formatMessage({
                id: `wham.upsellBanner.upgradeToPlus`,
                defaultMessage: `Upgrade`
            }), t[23] = a, t[24] = e), h = e;
            let n;
            t[25] === o ? n = t[26] : (n = () => {
                ve({
                    navigate: o,
                    checkoutOriginProvenance: {
                        checkoutOriginProductExperience: Ae.CODEX,
                        checkoutOriginDeliverySurface: `web`
                    },
                    openModalLocation: z,
                    pricingTarget: me(`plus`)
                })
            }, t[25] = o, t[26] = n), g = n
        }
    }
    let T;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, R.jsx)(`div`, {
        className: `text-token-text-primary flex items-center justify-center`,
        children: (0, R.jsx)(Ne, {
            className: `icon`,
            "aria-hidden": !0
        })
    }), t[27] = T) : T = t[27];
    let E = l && g === C,
        ge = l && v === C,
        D;
    return t[28] !== m || t[29] !== g || t[30] !== v || t[31] !== h || t[32] !== _ || t[33] !== E || t[34] !== ge ? (D = (0, R.jsx)(te, {
        className: `shadow-[0_16px_32px_-24px_rgba(15,23,42,0.25)]`,
        icon: T,
        content: m,
        primaryCtaText: h,
        primaryCtaColor: `primary`,
        onPrimaryCtaClick: g,
        isPrimaryCtaLoading: E,
        secondaryCtaText: _,
        onSecondaryCtaClick: v,
        isSecondaryCtaLoading: ge,
        secondaryCtaColor: `secondary`,
        verticalCta: !1
    }), t[28] = m, t[29] = g, t[30] = v, t[31] = h, t[32] = _, t[33] = E, t[34] = ge, t[35] = D) : D = t[35], D
}

function F() {}

function I() {}
var ot, L, R, st, z, B = e((() => {
    ot = T(), Se(), Oe(), _(), ke(), je(), ae(), O(), k(), d(), Me(), h(), oe(), Te(), r(), g(), u(), o(), ce(), v(), y(), Ke(), Be(), A(), ge(), Qe(), Le(), qe(), Re(), D(), l(), L = t(w()), C(), b(), R = x(), st = `plus-1-month-free`, z = se.WhamUsageDashboardRateLimitUpsell
}));
export {
    $e as n, B as r, P as t
};
//# sourceMappingURL=35fc21ca-oy5av9t7v6mywfgt.js.map