import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as n,
    J3 as r,
    Ji as i,
    Kl as ee,
    L6 as a,
    Met as o,
    P5 as te,
    R1 as s,
    SR as c,
    Tet as ne,
    U4 as l,
    Ul as re,
    Xi as ie,
    Xl as ae,
    Ynt as oe,
    Z1 as se,
    f6 as ce,
    g8 as le,
    jet as ue,
    l6 as de,
    n2 as u,
    oct as d,
    p6 as fe,
    ql as f,
    r6 as p,
    trt as m,
    u6 as pe,
    vR as h,
    yst as g,
    z6 as _
} from "./4813494d-tap9fxyhk4ehe0bs.js";
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
    $un as ge,
    Edn as w,
    Gln as T,
    JEn as _e,
    Kln as ve,
    Tdn as ye,
    U8t as be,
    Ucn as xe,
    Uln as Se,
    Vcn as Ce,
    Wcn as E,
    Wln as D,
    X$ as we,
    Y$ as Te,
    YEn as Ee,
    drn as De,
    edn as Oe,
    orn as ke,
    rrn as Ae,
    tdn as je,
    z8t as Me,
    zcn as Ne
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    Fl as O,
    Pl as Pe
} from "./30901919-niqyapppecmq5jkn.js";
import {
    Cg as Fe,
    Dg as k,
    Jg as Ie,
    Kg as A,
    Og as Le,
    Qg as Re,
    Sg as ze,
    Tg as Be,
    Xg as Ve,
    Yg as He,
    qg as Ue,
    wg as j,
    xg as We
} from "./c2675c8c-h5ybkhdzcoblzzdu.js";
import {
    l as M,
    u as N
} from "./e19f3910-gr25pet5p06ryur7.js";
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
} from "./7a206bce-lo22fg5lp81qp7kf.js";

function Qe(e) {
    "use forget";
    let t = (0, st.c)(2);
    if (!N()) return null;
    let n;
    return t[0] === e ? n = t[1] : (n = (0, L.jsx)($e, {
        ...e
    }), t[0] = e, t[1] = n), n
}

function $e(e) {
    "use forget";
    let t = (0, st.c)(93),
        {
            rateLimit: n,
            linkToUsageDashboard: r
        } = e,
        o = r !== void 0 && r,
        s = he(),
        c = me(),
        [ne, l] = (0, I.useState)(!1),
        ie = He(),
        ce = Ve(),
        le = Re(),
        d = Ie(),
        f = Ue(),
        p = te(rt),
        m = n.rate_limit_reached_type?.type,
        h = n.spend_control?.reached === !0 || m === `workspace_member_usage_limit_reached` || m === `workspace_owner_usage_limit_reached`,
        {
            sendRequest: _,
            hasRequested: v,
            requestDisabled: b,
            usesSavedRequests: x
        } = ve(p),
        S;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (S = ue({
        openModalLocation: R
    }), t[0] = S) : S = t[0];
    let C = S,
        w = Be() === Fe.enabled && !ie && !ce,
        be = Le(n.plan_type === g.FREE || n.plan_type === g.GO),
        E = re(s, ee(n) ?? 0),
        D = se(),
        we = h ? `usage_limit` : `credits`,
        Ee;
    t[1] !== D || t[2] !== n || t[3] !== we ? (Ee = Se(D, n, we), t[1] = D, t[2] = n, t[3] = we, t[4] = Ee) : Ee = t[4];
    let Oe = Ee,
        ke = Oe != null,
        Ne;
    t[5] === D ? Ne = t[6] : (Ne = D?.getWorkspaceId(), t[5] = D, t[6] = Ne);
    let O = Ne,
        k;
    t[7] !== D || t[8] !== n || t[9] !== O ? (k = D?.planType === g.ENT26 && D.id === n.account_id && O != null && ae(n), t[7] = D, t[8] = n, t[9] = O, t[10] = k) : k = t[10];
    let A = k,
        j = D != null,
        We = (0, I.useRef)(null),
        M;
    t[11] === D ? M = t[12] : (M = D?.getSubscriptionBillingCurrency() ?? `USD`, t[11] = D, t[12] = M);
    let N = M,
        [Ge, Ze] = (0, I.useState)(null),
        [Qe, $e] = (0, I.useState)(!1),
        at, ot;
    t[13] === N ? (at = t[14], ot = t[15]) : (at = () => {
        (async function() {
            let e = await de(void 0, N);
            Ze(e), $e(!0)
        })()
    }, ot = [N], t[13] = N, t[14] = at, t[15] = ot), (0, I.useEffect)(at, ot);
    let F, z, lt;
    t[16] !== s || t[17] !== o ? (lt = o ? s.formatMessage({
        id: `wham.usageDashboard.upsellBanner.viewUsage`,
        defaultMessage: `View usage`
    }) : null, t[16] = s, t[17] = o, t[18] = lt) : lt = t[18];
    let B = lt,
        V = o ? () => {
            c(`/codex/cloud/settings/usage`)
        } : nt,
        H = o ? `view_usage` : null,
        U = null,
        W = tt,
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
        Ce(xe, {
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: ye.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            onCheckoutPresented: () => l(!1),
            onCustomCheckoutEnd: () => l(!1),
            onCustomCheckoutStart: () => l(!0)
        })
    }, t[23] = pt) : pt = t[23];
    let J = pt,
        mt;
    t[24] !== f || t[25] !== c ? (mt = () => {
        C && De({
            navigate: c,
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: ye.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            openModalLocation: R,
            pricingTarget: Ae(f ? `plus` : `pro`)
        })
    }, t[24] = f, t[25] = c, t[26] = mt) : mt = t[26];
    let ht = mt,
        gt = n.promo?.campaign_id,
        Y = n.rate_limit_upsell,
        X, _t;
    t[27] !== D || t[28] !== Y?.ctas || t[29] !== Y?.request_url ? (X = D?.isOwnerOfAccount() && Y?.request_url === ge(D.id), _t = Y?.ctas.find(e => e.action === `request_usage` || X && e.action === `request_increase`), t[27] = D, t[28] = Y?.ctas, t[29] = Y?.request_url, t[30] = X, t[31] = _t) : (X = t[30], _t = t[31]);
    let Z = _t,
        vt = D != null && D.id === n.account_id && x && Z != null;
    if (vt && Y != null) {
        F = Xe(m) ?? it(n), z = Y.description, B = Z.label, V = () => {
            X && Z.action === `request_increase` ? je(D.id) : Z.reason != null && _(`usage_limit`, Z.reason, _e.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
        }, H = D.isOwnerOfAccount() ? `view_usage` : `request_increase`, K = !D.isOwnerOfAccount() && (Z.reason == null || b);
        let e;
        t[32] === Y.ctas ? e = t[33] : (e = Y.ctas.find(et), t[32] = Y.ctas, t[33] = e);
        let r = e;
        if (r != null && Y.referral != null) {
            U = r.label, G = `invite`;
            let e = Y.referral;
            W = () => u(Te, {
                programId: e.program_id,
                entrypoint: `rate_limit`,
                rateLimitType: Y.banner_type
            })
        }
    } else if (A) {
        F = Xe(m) ?? it(n);
        let e = D.isOwnerOfAccount(),
            r = e ? Ke.ownerDescription : Ke.memberDescription,
            i;
        if (t[34] === r ? i = t[35] : (i = (0, L.jsx)(y, {
                ...r
            }), t[34] = r, t[35] = i), z = i, U = B, W = V, G = H, e) {
            let e;
            t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, L.jsx)(y, {
                ...Ke.editBudget
            }), t[36] = e) : e = t[36], B = e, V = () => {
                window.open(Me(`/billing`, O), `_blank`, `noopener,noreferrer`)
            }, H = `add_credits`
        } else {
            let e = v ? T.requested : Ke.contactOwner,
                n;
            t[37] === e ? n = t[38] : (n = (0, L.jsx)(y, {
                ...e
            }), t[37] = e, t[38] = n), B = n, V = () => {
                _(`credits`, void 0, _e.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
            }, H = `notify_owner`, K = b
        }
    } else if (ie)
        if (F = P({
                bannerType: `plus_rate_limit_reached`,
                limitReason: `usage_limit`
            }), oe(`2238071649`)) {
            let e = ze();
            if (!Ge || !Qe || !D) z = e ? (0, L.jsx)(y, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody2.addCredits.higherLimits`,
                defaultMessage: `Add credits to keep going now, or upgrade to Pro for more usage. Your limit will reset after {time}.`,
                values: {
                    time: E
                }
            }) : (0, L.jsx)(y, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody2.higherLimits`,
                defaultMessage: `Upgrade to Pro to get more usage, or wait for your limit to reset after {time}.`,
                values: {
                    time: E
                }
            });
            else {
                let t = pe(Ge, fe(g.PROLITE), a.Month).amount;
                z = e ? (0, L.jsx)(y, {
                    id: `wham.usageDashboard.limitReachedWithCredits.plusBody3.addCredits.higherLimits`,
                    defaultMessage: `Add credits to keep going now, or upgrade to Pro for more usage at {costString}/month. Your limit will reset after {time}.`,
                    values: {
                        time: E,
                        costString: s.formatNumber(t, {
                            style: `currency`,
                            currency: N,
                            trailingZeroDisplay: `stripIfInteger`
                        })
                    }
                }) : (0, L.jsx)(y, {
                    id: `wham.usageDashboard.limitReachedWithCredits.plusBody3.higherLimits`,
                    defaultMessage: `Upgrade to Pro to get more usage for {costString}/month, or wait for your limit to reset after {time}.`,
                    values: {
                        time: E,
                        costString: s.formatNumber(t, {
                            style: `currency`,
                            currency: N,
                            trailingZeroDisplay: `stripIfInteger`
                        })
                    }
                })
            }
            C && (U = B, W = V, G = H, B = ft, V = ht, H = `upgrade`), e && (C ? (U = q, W = J, G = `add_credits`) : (B = q, V = J, H = `add_credits`))
        } else {
            let e;
            t[39] === E ? e = t[40] : (e = (0, L.jsx)(y, {
                id: `wham.usageDashboard.limitReachedWithCredits.plusBody.addCreditsFirst`,
                defaultMessage: `Add credits to keep going now, or upgrade for more usage. Your limit will reset on {time}.`,
                values: {
                    time: E
                }
            }), t[39] = E, t[40] = e), z = e, B = q, V = J, H = `add_credits`, C && (U = ft, W = ht, G = `upgrade`)
        }
    else if (ce) {
        let e = ze();
        F = P({
            bannerType: `prolite_rate_limit_reached`,
            limitReason: `usage_limit`
        }), z = e ? (0, L.jsx)(y, {
            id: `wham.usageDashboard.limitReachedWithCredits.proLiteBody.addCredits.higherLimits`,
            defaultMessage: `Add credits to keep going now, or upgrade for more usage. Your limit will reset at {time}.`,
            values: {
                time: E
            }
        }) : (0, L.jsx)(y, {
            id: `wham.usageDashboard.limitReachedWithCredits.proLiteBody.higherLimits`,
            defaultMessage: `Upgrade for more usage, or wait for your limit to reset at {time}.`,
            values: {
                time: E
            }
        }), C && (U = B, W = V, G = H, B = ft, V = ht, H = `upgrade`), e && (C ? (U = q, W = J, G = `add_credits`) : (B = q, V = J, H = `add_credits`))
    } else if (be) {
        F = P({
            bannerType: `free_or_go_rate_limit_reached`,
            limitReason: `usage_limit`
        });
        let e;
        t[41] === E ? e = t[42] : (e = (0, L.jsx)(y, {
            id: `wham.usageDashboard.limitReachedWithCredits.freeGoBody.addCredits`,
            defaultMessage: `Add credits to keep going now, or upgrade to Plus. Your limit will reset on {time}.`,
            values: {
                time: E
            }
        }), t[41] = E, t[42] = e), z = e, B = q, V = J, H = `add_credits`, C && (U = ft, W = ht, G = `upgrade`)
    } else if (w) {
        if (F = P({
                bannerType: `pro_rate_limit_reached`,
                limitReason: `usage_limit`
            }), oe(`2238071649`)) {
            let e;
            t[43] === E ? e = t[44] : (e = (0, L.jsx)(y, {
                id: `wham.usageDashboard.limitReachedWithCredits.proBody2.addCreditsKeepGoing`,
                defaultMessage: `Add credits to keep going, or wait until your balance resets at {time}.`,
                values: {
                    time: E
                }
            }), t[43] = E, t[44] = e), z = e
        } else {
            let e;
            t[45] === E ? e = t[46] : (e = (0, L.jsx)(y, {
                id: `wham.usageDashboard.limitReachedWithCredits.proBody`,
                defaultMessage: `Add credits to continue, or wait until {time}.`,
                values: {
                    time: E
                }
            }), t[45] = E, t[46] = e), z = e
        }
        U = B, W = V, G = H, B = q, V = J, H = `add_credits`
    } else if (!d && (le || ke)) {
        F = Xe(m) ?? it(n);
        let e;
        if (t[47] === E ? e = t[48] : (e = (0, L.jsx)(y, {
                id: `wham.usageDashboard.limitReachedWithCredits.teamOrEnterpriseBody`,
                defaultMessage: `Try again after {time}, or send a request to your admin.`,
                values: {
                    time: E
                }
            }), t[47] = E, t[48] = e), z = e, ke) {
            U = B, W = V, G = H;
            let e;
            t[49] !== v || t[50] !== s ? (e = s.formatMessage(v ? T.requested : T.sendRequest), t[49] = v, t[50] = s, t[51] = e) : e = t[51], B = e, V = () => {
                _(Oe, void 0, _e.CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS)
            }, H = Oe === `usage_limit` ? `increase_spend_cap` : `notify_owner`, K = b
        }
    } else if (f) {
        if (gt === ct) {
            F = P({
                bannerType: n.plan_type === g.GO ? `go_trial_rate_limit_reached` : `free_trial_rate_limit_reached`,
                limitReason: `usage_limit`
            });
            let e;
            t[52] === E ? e = t[53] : (e = (0, L.jsx)(y, {
                id: `wham.usageDashboard.limitReachedWithCredits.freeGoBodyWithPromo`,
                defaultMessage: `To continue using Codex, start your free trial of Plus today. Your limit will reset on {time}.`,
                values: {
                    time: E
                }
            }), t[52] = E, t[53] = e), z = e
        } else {
            F = P({
                bannerType: `free_or_go_rate_limit_reached`,
                limitReason: `usage_limit`
            });
            let e;
            t[54] === E ? e = t[55] : (e = (0, L.jsx)(y, {
                id: `wham.usageDashboard.limitReachedWithCredits.freeGoBody`,
                defaultMessage: `Upgrade to Plus to keep going. Your limit will reset on {time}.`,
                values: {
                    time: E
                }
            }), t[54] = E, t[55] = e), z = e
        }
        C && (U = B, W = V, G = H, B = ft, V = ht, H = `upgrade`)
    } else {
        F = P({
            bannerType: `legacy_rate_limit_reached`,
            limitReason: `usage_limit`
        });
        let e;
        t[56] === E ? e = t[57] : (e = (0, L.jsx)(y, {
            id: `wham.usageDashboard.limitReachedWithCredits.legacyEnterpriseBody`,
            defaultMessage: `Try again after {time}, or ask your admin to upgrade to a plan with credits.`,
            values: {
                time: E
            }
        }), t[56] = E, t[57] = e), z = e
    }
    let Q = `${F.platform}:${F.banner_type}:${F.limit_reason}`,
        yt;
    t[58] !== F || t[59] !== j || t[60] !== Q ? (yt = () => {
        j && We.current !== Q && (We.current = Q, Je(F, `usage_dashboard`))
    }, t[58] = F, t[59] = j, t[60] = Q, t[61] = yt) : yt = t[61];
    let bt;
    t[62] !== F || t[63] !== j || t[64] !== Q ? (bt = [F, j, Q], t[62] = F, t[63] = j, t[64] = Q, t[65] = bt) : bt = t[65], (0, I.useEffect)(yt, bt);
    let xt;
    t[66] !== F || t[67] !== j || t[68] !== K || t[69] !== V || t[70] !== H ? (xt = () => {
        j && H != null && !K && Ye({
            context: F,
            ctaAction: H,
            surface: `usage_dashboard`
        }), V()
    }, t[66] = F, t[67] = j, t[68] = K, t[69] = V, t[70] = H, t[71] = xt) : xt = t[71];
    let St = xt,
        Ct;
    t[72] !== F || t[73] !== j || t[74] !== W || t[75] !== G ? (Ct = () => {
        j && G != null && Ye({
            context: F,
            ctaAction: G,
            surface: `usage_dashboard`
        }), W()
    }, t[72] = F, t[73] = j, t[74] = W, t[75] = G, t[76] = Ct) : Ct = t[76];
    let wt = Ct,
        Tt;
    t[77] === Symbol.for(`react.memo_cache_sentinel`) ? (Tt = (0, L.jsx)(`div`, {
        className: `text-token-text-primary flex items-center justify-center`,
        children: (0, L.jsx)(Pe, {
            className: `icon`,
            "aria-hidden": !0
        })
    }), t[77] = Tt) : Tt = t[77];
    let $;
    t[78] !== D?.planType || t[79] !== Y?.title || t[80] !== A || t[81] !== vt ? ($ = vt ? Y?.title : A ? (0, L.jsx)(y, {
        ...Ke.title
    }) : D?.planType === g.ENT26 ? (0, L.jsx)(y, {
        id: `wham.usageDashboard.ent26.limitReached.title`,
        defaultMessage: `You’re out of usage for now`
    }) : (0, L.jsx)(y, {
        ...qe
    }), t[78] = D?.planType, t[79] = Y?.title, t[80] = A, t[81] = vt, t[82] = $) : $ = t[82];
    let Et = U == null ? void 0 : wt,
        Dt = ne && H === `add_credits`,
        Ot = ne && G === `add_credits`,
        kt;
    return t[83] !== z || t[84] !== K || t[85] !== B || t[86] !== U || t[87] !== $ || t[88] !== Et || t[89] !== Dt || t[90] !== Ot || t[91] !== St ? (kt = (0, L.jsx)(i, {
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

function et(e) {
    return e.action === `invite` || e.action === `refer`
}

function tt() {}

function nt() {}

function rt() {
    return c()?.id
}

function it(e) {
    return p(e.plan_type) ? P({
        bannerType: `business_rate_limit_reached`,
        limitReason: `usage_limit`
    }) : e.plan_type === g.EDUCATION_CBP || e.plan_type === g.EDU_PLUS || e.plan_type === g.EDU_PRO || e.plan_type === g.ENTERPRISE_CBP || e.plan_type === g.ENTERPRISE_CBP_USAGE_BASED || e.plan_type === g.HC || e.plan_type === g.HC_CONSUMPTION || e.plan_type === g.FINSERV || e.plan_type === g.LAW || e.plan_type === g.QUORUM || e.plan_type === g.K12 ? P({
        bannerType: `cbp_rate_limit_reached`,
        limitReason: `usage_limit`
    }) : P({
        bannerType: `legacy_rate_limit_reached`,
        limitReason: `usage_limit`
    })
}

function at(e) {
    "use forget";
    let t = (0, st.c)(36),
        {
            rateLimit: n
        } = e,
        r = he(),
        a = me(),
        o = se(),
        te = o?.planType === g.ENT26 && o.id === n.account_id,
        [s, c] = (0, I.useState)(!1),
        ne = N(),
        l = He(),
        ie = Ve(),
        ae = Re(),
        oe = Ie(),
        ce = Ue(),
        le = ue({
            openModalLocation: R
        }),
        de = Be() === Fe.enabled && !l && !ie,
        u;
    t[0] !== r || t[1] !== n ? (u = re(r, ee(n) ?? 0), t[0] = r, t[1] = n, t[2] = u) : u = t[2];
    let d = u;
    if (!ne) return null;
    let fe;
    t[3] === d ? fe = t[4] : (fe = (0, L.jsx)(y, {
        id: `wham.usageDashboard.nearLimitWithCredits.defaultBody`,
        defaultMessage: `You’re getting close to your limit. It will reset on {time}.`,
        values: {
            time: d
        }
    }), t[3] = d, t[4] = fe);
    let f = fe,
        p = null,
        m = F,
        pe = null,
        h = ot,
        _;
    t[5] === r ? _ = t[6] : (_ = r.formatMessage({
        id: `wham.usageDashboard.upsellBanner.addCredits`,
        defaultMessage: `Add credits`
    }), t[5] = r, t[6] = _);
    let v = _,
        b;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (b = () => {
        Ce(xe, {
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: ye.CODEX,
                checkoutOriginDeliverySurface: `web`
            },
            onCheckoutPresented: () => c(!1),
            onCustomCheckoutEnd: () => c(!1),
            onCustomCheckoutStart: () => c(!0)
        })
    }, t[7] = b) : b = t[7];
    let x = b,
        S = n.promo?.campaign_id;
    if (l || ie) {
        let e;
        if (t[8] === d ? e = t[9] : (e = (0, L.jsx)(y, {
                id: `wham.usageDashboard.nearLimitWithCredits.plusBody.addCreditsFirst.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Add credits to keep building now, or upgrade for more usage. Your limit resets on {time}.`,
                values: {
                    time: d
                }
            }), t[8] = d, t[9] = e), f = e, p = v, m = x, le) {
            let e;
            t[10] === r ? e = t[11] : (e = r.formatMessage({
                id: `wham.upsellBanner.upgradeToPro`,
                defaultMessage: `Upgrade`
            }), t[10] = r, t[11] = e), pe = e;
            let n;
            t[12] === a ? n = t[13] : (n = () => {
                De({
                    navigate: a,
                    checkoutOriginProvenance: {
                        checkoutOriginProductExperience: ye.CODEX,
                        checkoutOriginDeliverySurface: `web`
                    },
                    openModalLocation: R,
                    pricingTarget: Ae(`pro`)
                })
            }, t[12] = a, t[13] = n), h = n
        }
    } else if (de) {
        let e;
        t[14] === d ? e = t[15] : (e = (0, L.jsx)(y, {
            id: `wham.usageDashboard.nearLimitWithCredits.proBody.codexAndWork`,
            defaultMessage: `You're nearing your Codex and Work usage limit. Add credits to stay unblocked, or wait until {time}.`,
            values: {
                time: d
            }
        }), t[14] = d, t[15] = e), f = e, p = v, m = x
    } else if (ae && !oe) {
        let e;
        t[16] !== te || t[17] !== d ? (e = te ? (0, L.jsx)(y, {
            id: `wham.usageDashboard.nearLimit.ent26.body`,
            defaultMessage: `You're nearing your usage limit. Try again after {time}, or contact your admin if you need more capacity.`,
            values: {
                time: d
            }
        }) : (0, L.jsx)(y, {
            id: `wham.usageDashboard.nearLimitWithCredits.teamOrEnterpriseBody.codexAndWork`,
            defaultMessage: `You're nearing your Codex and Work usage limit. Try again after {time}, or contact your admin if you need more capacity.`,
            values: {
                time: d
            }
        }), t[16] = te, t[17] = d, t[18] = e) : e = t[18], f = e
    } else if (ce) {
        if (S === ct) {
            let e;
            t[19] === d ? e = t[20] : (e = (0, L.jsx)(y, {
                id: `wham.usageDashboard.nearLimitWithCredits.freeGoBodyWithPromo.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Start a free trial of Plus today to keep building. Your limit resets on {time}.`,
                values: {
                    time: d
                }
            }), t[19] = d, t[20] = e), f = e
        } else {
            let e;
            t[21] === d ? e = t[22] : (e = (0, L.jsx)(y, {
                id: `wham.usageDashboard.nearLimitWithCredits.freeGoBody.codexAndWork`,
                defaultMessage: `You're nearing your Codex and Work usage limit. Upgrade to Plus to keep going. Your limit resets on {time}.`,
                values: {
                    time: d
                }
            }), t[21] = d, t[22] = e), f = e
        }
        if (le) {
            let e;
            t[23] === r ? e = t[24] : (e = r.formatMessage({
                id: `wham.upsellBanner.upgradeToPlus`,
                defaultMessage: `Upgrade`
            }), t[23] = r, t[24] = e), p = e;
            let n;
            t[25] === a ? n = t[26] : (n = () => {
                De({
                    navigate: a,
                    checkoutOriginProvenance: {
                        checkoutOriginProductExperience: ye.CODEX,
                        checkoutOriginDeliverySurface: `web`
                    },
                    openModalLocation: R,
                    pricingTarget: Ae(`plus`)
                })
            }, t[25] = a, t[26] = n), m = n
        }
    }
    let C;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, L.jsx)(`div`, {
        className: `text-token-text-primary flex items-center justify-center`,
        children: (0, L.jsx)(Pe, {
            className: `icon`,
            "aria-hidden": !0
        })
    }), t[27] = C) : C = t[27];
    let ge = s && m === x,
        w = s && h === x,
        T;
    return t[28] !== f || t[29] !== m || t[30] !== h || t[31] !== p || t[32] !== pe || t[33] !== ge || t[34] !== w ? (T = (0, L.jsx)(i, {
        className: `shadow-[0_16px_32px_-24px_rgba(15,23,42,0.25)]`,
        icon: C,
        content: f,
        primaryCtaText: p,
        primaryCtaColor: `primary`,
        onPrimaryCtaClick: m,
        isPrimaryCtaLoading: ge,
        secondaryCtaText: pe,
        onSecondaryCtaClick: h,
        isSecondaryCtaLoading: w,
        secondaryCtaColor: `secondary`,
        verticalCta: !1
    }), t[28] = f, t[29] = m, t[30] = h, t[31] = p, t[32] = pe, t[33] = ge, t[34] = w, t[35] = T) : T = t[35], T
}

function ot() {}

function F() {}
var st, I, L, ct, R, z = e((() => {
    st = C(), Ee(), w(), d(), be(), Ne(), n(), we(), Oe(), ie(), O(), ne(), _(), ke(), le(), s(), h(), ce(), l(), r(), m(), M(), A(), j(), E(), Ze(), We(), Ge(), k(), D(), f(), I = t(S()), x(), b(), L = v(), ct = `plus-1-month-free`, R = o.WhamUsageDashboardRateLimitUpsell
}));
export {
    Qe as n, z as r, at as t
};
//# sourceMappingURL=35fc21ca-m71qybtcl0mk9sa5.js.map