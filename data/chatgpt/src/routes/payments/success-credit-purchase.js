import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $nt as n,
    $tt as r,
    Btt as i,
    Fz as a,
    Gnt as ee,
    Hnt as o,
    Htt as s,
    Hz as te,
    Iz as c,
    Jn as ne,
    Nrt as l,
    Pz as u,
    Qtt as d,
    UL as f,
    Uz as p,
    Vz as m,
    WL as re,
    Wnt as ie,
    Wz as ae,
    Xn as h,
    Xnt as oe,
    ent as g,
    fU as _,
    i1 as v,
    pU as y,
    rot as se,
    u1 as b,
    v4 as x
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as S,
    At as C,
    Bn as w,
    Ln as T,
    Pt as E,
    Rn as D,
    Ut as O,
    Vn as k,
    jt as A,
    wn as j,
    zn as M
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Acn as ce,
    Kcn as N,
    Man as P,
    O1 as le,
    Sin as F,
    Xin as I,
    Yin as ue,
    _ln as de,
    bin as L,
    eGn as R,
    ett as z,
    itt as B,
    jan as fe,
    k1 as pe,
    kcn as me,
    ntt as he,
    ott as ge,
    qcn as _e,
    stt as ve,
    vin as V,
    yln as ye
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Bh as H,
    Fh as be,
    Gh as xe,
    Jh as Se,
    Nh as Ce,
    Ph as we,
    Uh as U,
    Vh as Te,
    Wh as Ee,
    eg as De,
    zh as Oe
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    a as ke,
    r as Ae
} from "./b34a84d1-foowwmd6q7vc368z.js";
import {
    S as je,
    a as Me,
    t as Ne,
    y as Pe
} from "./a4eef3c0-ip3ucad1hu328lch.js";
import {
    a as Fe,
    i as Ie,
    n as Le,
    r as Re
} from "./c7dae6a1-e4remp0wromtluw3.js";
import {
    n as ze,
    t as Be
} from "./f5cccfb7-ck8j8yf0nbpeo5r3.js";

function Ve({
    level: e,
    title: t,
    action: n,
    ...r
}, i, a) {
    i[e](t, {
        ...r,
        ...a == null ? {} : {
            onRemove: a
        },
        action: n == null ? void 0 : (0, W.jsx)(`a`, {
            className: `font-medium underline underline-offset-2`,
            href: n.href,
            children: n.label
        })
    })
}
var W, He = e((() => {
        W = w()
    })),
    G, K, Ue = e((() => {
        y(), G = t(k()), He(), K = (0, G.createContext)(e => {
            Ve(e, _())
        })
    })),
    q, J, We = e((() => {
        q = t(k()), J = (0, q.createContext)(`/admin/billing`)
    }));

function Y(e) {
    return `kind` in e && e.kind === `purchased_gift_credit`
}

function Ge(e) {
    return e.checkout_kind === x.StandaloneCredit && `auto_top_up_enabled_after_checkout` in e && e.auto_top_up_enabled_after_checkout === !1
}

function X(e) {
    if (!e.startsWith(`/gifts/credits?`)) return !1;
    let t = new URLSearchParams(e.slice(be.length + 1)),
        n = t.get(`gift_id`);
    return n != null && n.length > 0 && t.get(`checkout`) === `success`
}

function Ke(e, t) {
    return !e.success && e.outcome === `payment_failed` && X(t)
}

function qe({
    loaderData: e,
    redirectPath: t
}) {
    return e.success ? t === V && Ge(e.completion) ? Q : `kind` in e.completion && e.completion.kind === x.CodexTeam ? (i.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
        checkpoint: `codex_team_payment_confirmed`,
        checkoutSessionId: e.checkout_id,
        targetWorkspaceId: e.completion.workspace_id,
        flow: `codex_team`
    }), `${Se}?account_id=${e.completion.workspace_id}&step=name`) : Y(e.completion) ? Oe({
        checkoutState: `success`,
        credits: Te(t),
        deliveryMethod: H(t),
        entryPoint: U(t),
        giftId: e.completion.gift_id
    }) : t : Ke(e, t) ? Ee(new URL(t, `https://chatgpt.com`).searchParams) ?? t : t === V ? Q : t
}

function Je() {}
var Ye, Z, Q, Xe, $, Ze = e((() => {
    S(), Ye = j(), p(), ke(), l(), o(), pe(), h(), me(), N(), Ue(), We(), ye(), P(), m(), I(), Me(), R(), Ie(), De(), F(), xe(), Ce(), ze(), ve(), he(), y(), b(), a(), s(), f(), g(), Z = t(k()), D(), Q = `/codex/cloud/settings/usage`, Xe = O(function() {
        "use forget";
        let e = (0, Ye.c)(9),
            t = (0, Z.useContext)(J),
            a = (0, Z.useContext)(K),
            o = A(),
            s = E(),
            l = M(),
            f = C(),
            p = (0, Z.useRef)(null),
            m, h;
        return e[0] !== t || e[1] !== l || e[2] !== f || e[3] !== o.key || e[4] !== o.search || e[5] !== s || e[6] !== a ? (m = () => {
            if (!f.success && f.outcome === `credit_payment_incomplete`) {
                f.checkout_id != null && s(fe(f.processor_entity ?? `openai_llc`, f.checkout_id), {
                    replace: !0
                });
                return
            }
            let e = `${f.checkout_id??o.key}:${f.success?`success`:f.outcome??`other_error`}`;
            if (p.current === e) return;
            if (p.current = e, new URLSearchParams(o.search).get(`checkout_kind`) === x.RateLimitReset) {
                let e = d.getItem(r.CodexRateLimitResetCheckoutRedirectPath);
                d.removeItem(r.CodexRateLimitResetCheckoutRedirectPath);
                let t = typeof e == `string` && re(e) ? e : `/`,
                    n = f.success && f.completion.success === !0 && f.completion.checkout_kind === x.RateLimitReset,
                    i = n && `reset_purchase_status` in f.completion ? f.completion.reset_purchase_status : null,
                    a = !f.success && f.outcome === `pending`;
                n && i === `reset_redeemed` ? _().success(l.formatMessage($.resetSucceeded)) : n || a ? _().success(l.formatMessage($.resetPending)) : _().warning(l.formatMessage(!f.success && f.outcome === `payment_failed` ? $.resetPaymentFailed : $.resetPurchaseFailed)), s(!n && !a && t === V ? `/` : t, {
                    replace: !0
                });
                return
            }
            let m = f.success && f.checkout_id != null && f.completion.checkout_kind === x.StandaloneCredit ? Le(f.checkout_id) : null,
                h = Fe(),
                g = f.success && f.checkout_id != null && f.completion.checkout_kind === x.StandaloneCredit && h?.checkoutSessionId === f.checkout_id && typeof h.returnPath == `string` && re(h.returnPath) ? h.returnPath : null,
                y = f.checkout_id == null ? null : de(f.checkout_id),
                b = m?.returnPath ?? g ?? y ?? d.getItem(r.CreditCheckoutRedirectPath),
                S = typeof b == `string` && b.length > 0 ? b : t,
                C = U(S),
                w = f.success && Y(f.completion) && H(S) === `email` && new URL(S, `https://chatgpt.com`).searchParams.get(`gift_id`) === f.completion.gift_id,
                T = new URLSearchParams(o.search);
            f.checkout_id != null && n(f.checkout_id, T), d.removeItem(r.CreditCheckoutRedirectPath);
            let E = f.checkout_id == null ? null : Re(f.checkout_id),
                D = f.processor_entity ?? void 0,
                O = Ae({
                    checkoutId: f.checkout_id,
                    processorEntity: D,
                    userId: se()?.user?.id,
                    accountId: v()?.id
                }),
                k = ge(),
                A = f.success && Ge(f.completion),
                j = f.success && `mandate_requirement_unmet` in f.completion && f.completion.mandate_requirement_unmet === !0,
                M = A && `auto_top_up_failure_reason` in f.completion ? f.completion.auto_top_up_failure_reason ?? null : null;
            if (f.success) {
                let e = v();
                f.completion.checkout_kind === x.StandaloneCredit && L(f.completion.entry_point) === `personal_codex` && e?.isPersonalAccount() && ce(e.id, ne()).catch(Je);
                let t = S === Q || f.completion.checkout_kind === x.StandaloneCredit && L(f.completion.entry_point) === `personal_codex`;
                if (je({
                        ...O,
                        checkoutId: f.checkout_id,
                        processorEntity: D,
                        ...f.completion.checkout_kind == null ? {} : {
                            checkoutKind: f.completion.checkout_kind,
                            entryPoint: f.completion.entry_point ?? void 0
                        }
                    }), Y(f.completion) && w) try {
                    we({
                        step: `gift_activation`,
                        outcome: `succeeded`,
                        deliveryMode: `email`,
                        ...C == null ? {} : {
                            entryPoint: C
                        },
                        giftId: f.completion.gift_id
                    })
                } catch {}
                if (f.completion.checkout_kind === x.StandaloneCredit && `auto_top_up_enabled_after_checkout` in f.completion && f.completion.auto_top_up_enabled_after_checkout === !0 && i.logStructuredEvent(`CodexCreditReloadAutoReloadSettingsChanged`, {
                        action: `enable`,
                        entryPoint: f.completion.entry_point ?? void 0,
                        source: `standalone_credit_checkout`
                    }), k && B({
                        accountId: k.accountId,
                        eventType: z.CHECKOUT_COMPLETED,
                        location: k.location,
                        organizationId: k.organizationId,
                        promoCampaignId: k.promoCampaignId,
                        promoCode: k.promoCode,
                        referralCode: k.referralCode
                    }), !j && A) {
                    let e = t ? Q : le(`auto_recharge`);
                    te({
                        failureReason: M,
                        intl: l,
                        settingsPath: e,
                        toaster: _()
                    })
                } else if (!j && !Y(f.completion)) {
                    let e = t && E != null ? l.formatMessage($.modalCreditsAdded, {
                        credits: l.formatNumber(E)
                    }) : l.formatMessage(t ? $.personalPaymentConfirmationToastMessage : $.paymentConfirmationToastMessage);
                    a({
                        level: `success`,
                        title: e,
                        duration: 5
                    })
                }
            } else {
                let e = f.outcome === `payment_failed` ? `payment_failed` : `other_error`;
                if (Pe(`payments_success_credit_purchase`, {
                        ...O,
                        checkoutId: f.checkout_id,
                        processorEntity: D,
                        outcome: e,
                        ...X(S) ? {
                            checkoutKind: ue,
                            entryPoint: C ?? _e.GIFT_CREDITS_PURCHASE
                        } : {}
                    }, T), k && B({
                        accountId: k.accountId,
                        eventType: z.CHECKOUT_FAILED,
                        location: k.location,
                        organizationId: k.organizationId,
                        promoCampaignId: k.promoCampaignId,
                        promoCode: k.promoCode,
                        referralCode: k.referralCode
                    }), !Ke(f, S)) {
                    let e = l.formatMessage($.paymentErrorToastMessage);
                    a({
                        level: `warning`,
                        title: e,
                        duration: 5
                    })
                }
            }
            let N = f.success && !A && f.completion.checkout_kind === x.StandaloneCredit && L(f.completion.entry_point) === `workspace` && ie(T) ? V : qe({
                    loaderData: f,
                    redirectPath: S
                }),
                P = f.success && N === Q && ee(T),
                F = w ? c(u.CUSTOM_MSG, `/`, l.formatMessage(Be.emailSentTitle)) : P ? oe(N, T) : N,
                I = P || /^\/codex\/app(?:[/?#]|$)/u.test(F) || m == null && g == null && y != null || f.success && Y(f.completion) || !f.success && X(S);
            j && !I && ae({
                checkout: !0
            });
            let R = I && (A || j) ? c(j ? u.CREDIT_AUTO_RELOAD_MANDATE_UNAVAILABLE : M === `settings_conflict` ? u.CREDIT_AUTO_RELOAD_SETTINGS_CONFLICT : u.CREDIT_AUTO_RELOAD_CONFIGURATION_FAILED, F) : F;
            Ne().finally(() => {
                if (I) {
                    window.location.replace(R);
                    return
                }
                s(f.success && F === Q ? `/#settings/Usage` : F)
            })
        }, h = [t, l, f, o.key, o.search, s, a], e[0] = t, e[1] = l, e[2] = f, e[3] = o.key, e[4] = o.search, e[5] = s, e[6] = a, e[7] = m, e[8] = h) : (m = e[7], h = e[8]), (0, Z.useEffect)(m, h), null
    }), $ = T({
        resetSucceeded: {
            id: `chatgpt.codex.rate_limit_reset.checkout.completion.success.toast`,
            defaultMessage: `Usage limits reset`
        },
        resetPending: {
            id: `chatgpt.codex.rate_limit_reset.checkout.completion.pending.toast`,
            defaultMessage: `Purchase successful`
        },
        resetPaymentFailed: {
            id: `chatgpt.codex.rate_limit_reset.checkout.completion.payment_failed.toast`,
            defaultMessage: `Payment failed. Please try again.`
        },
        resetPurchaseFailed: {
            id: `chatgpt.codex.rate_limit_reset.checkout.completion.failure.toast`,
            defaultMessage: `We couldn’t complete your purchase. Please try again.`
        },
        paymentConfirmationToastMessage: {
            id: `PaymentsSuccessCreditsPurchasePage.paymentConfirmationToastMessage`,
            defaultMessage: `You've successfully purchased credits for your team.`
        },
        personalPaymentConfirmationToastMessage: {
            id: `PaymentsSuccessCreditsPurchasePage.personalPaymentConfirmationToastMessage`,
            defaultMessage: `You've successfully purchased credits for your account.`
        },
        modalCreditsAdded: {
            id: `PaymentsSuccessCreditsPurchasePage.modalCreditsAdded`,
            defaultMessage: `{credits} credits have been added to your account.`
        },
        paymentErrorToastMessage: {
            id: `PaymentsSuccessCreditsPurchasePage.purchaseConfirmationErrorToastMessage`,
            defaultMessage: `We couldn't confirm your purchase. Please check your credits before trying again.`
        }
    })
}));
e((() => {
    Ze()
}))();
export {
    Xe as
    default
};
//# sourceMappingURL=payments.success-credit-purchase-jdy96ysu.js.map