import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    AR as r,
    AT as i,
    B6 as a,
    BK as o,
    Btt as s,
    Bz as c,
    C1 as l,
    CR as u,
    Cit as d,
    Dit as f,
    G2 as p,
    Hq as m,
    Htt as h,
    IN as g,
    J$ as _,
    J2 as v,
    J8 as y,
    K2 as b,
    K8 as x,
    KK as S,
    Kq as C,
    LN as w,
    M4 as T,
    MN as E,
    NK as ee,
    NN as D,
    Nrt as O,
    O0 as te,
    PN as k,
    Prt as A,
    QL as j,
    Qit as M,
    RN as ne,
    SR as N,
    Sit as P,
    Srt as F,
    T0 as I,
    TR as L,
    Tit as R,
    Trt as z,
    U1 as B,
    UU as re,
    V6 as V,
    W1 as H,
    WU as ie,
    Y2 as U,
    Y8 as ae,
    a7 as W,
    aN as oe,
    aat as se,
    b5 as ce,
    bU as le,
    dR as ue,
    dl as G,
    eR as de,
    eh as fe,
    f8 as pe,
    fU as me,
    fl as he,
    fz as ge,
    h4 as _e,
    hnt as ve,
    i5 as ye,
    iat as be,
    ih as xe,
    jN as Se,
    k1 as Ce,
    kT as we,
    kit as Te,
    l7 as Ee,
    lh as K,
    mw as De,
    n1 as Oe,
    o1 as ke,
    pR as Ae,
    pU as je,
    pnt as Me,
    pw as q,
    q6 as Ne,
    r5 as J,
    rot as Pe,
    sh as Fe,
    tN as Ie,
    th as Le,
    u1 as Re,
    u8 as ze,
    uz as Be,
    v1 as Ve,
    vN as He,
    vnt as Ue,
    xR as We,
    xU as Ge,
    y5 as Ke,
    yN as qe,
    ynt as Je,
    zz as Ye
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as Xe,
    Bn as Ze,
    Ht as Qe,
    Ln as $e,
    N as et,
    Nn as Y,
    Pt as tt,
    Rn as nt,
    Vn as rt,
    at as it,
    jt as at,
    s as ot,
    wn as st,
    xt as ct,
    zn as lt
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Btt as ut,
    CHn as dt,
    Flt as ft,
    Nlt as pt,
    Rtt as mt,
    THn as ht,
    X4t as gt,
    Z4t as _t,
    b8 as vt,
    dhn as yt,
    fhn as bt,
    rCn as xt,
    sCn as St,
    wHn as Ct,
    x8 as wt
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    CC as Tt,
    Hv as Et,
    SC as Dt,
    Uy as Ot,
    Vv as kt,
    Wy as At
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Aa as jt,
    Fa as Mt,
    Ia as Nt,
    La as Pt,
    Ma as Ft,
    Na as It,
    Oa as Lt,
    Pa as Rt,
    ap as zt,
    ip as Bt,
    ja as Vt,
    ka as Ht
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    Dh as Ut,
    Eh as Wt,
    Oh as Gt,
    f_ as Kt,
    u_ as qt,
    wh as Jt
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as Yt,
    t as Xt
} from "./9894796d-kxff0vp2atcbrbm1.js";
import {
    n as Zt,
    t as Qt
} from "./d925d50a-mvuq5o04vyvc9p6k.js";

function $t(e, t = jt(e)) {
    let n = Vt(e, t).toString();
    return `/redeem${n?`?${n}`:``}`
}
var en = e((() => {
        Mt()
    })),
    tn, nn = e((() => {
        tn = `chatgpt_gift_card_redemption`
    })),
    rn, an, on, sn, cn, ln = e((() => {
        Mt(), ze(), nn(), be(), Ee(), he(), rn = e => pe(e) ? Nt(e.code) && typeof e.message == `string` : !1, an = e => W.safeGet(`/gift-cards/api-organizations`, {
            signal: e
        }), on = async (e, t) => {
            let n = await G(tn);
            return W.safePost(`/gift-cards/api/redeem`, {
                additionalHeaders: n,
                requestBody: e,
                signal: t
            })
        }, sn = e => {
            if (!(e instanceof M)) return;
            let t = e.detail;
            if (rn(t)) return {
                code: t.code,
                message: t.message
            }
        }, cn = async (e, t) => {
            let n = await G(tn);
            return W.safePost(`/gift-cards/redeem`, {
                additionalHeaders: n,
                requestBody: e,
                signal: t
            })
        }
    }));

function un() {
    if (!fn()) return !1;
    let {
        countryRestrictionsEnabled: e,
        isCountryEligible: t
    } = Lt(void 0);
    return !e || t
}
async function dn() {
    x(un) && await Promise.all([pn.prefetch(), y().prefetchQuery({
        ...Oe(),
        staleTime: 0
    })])
}
var fn, pn, mn = e((() => {
        ln(), Ht(), a(), Re(), ae(), Je(), fn = V(() => Me(`1895540620`), e => {
            let t = ve();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }), pn = Ne(() => ({
            queryKey: [`gift-card-api-organizations`],
            queryFn: ({
                signal: e
            }) => an(e),
            retry: !1,
            staleTime: 3e4
        }), {
            enabled$: un
        })
    })),
    hn, gn, _n = e((() => {
        hn = `https://platform.openai.com`, gn = e => `${hn}/settings/organization/billing/overview?with_org=${encodeURIComponent(e)}`
    })),
    X, vn = e((() => {
        nt(), X = $e({
            loginPickerHeading: {
                id: `chatgpt.gifts.cards.redemption.login_picker.heading`,
                defaultMessage: `Choose an account to redeem your gift card`
            },
            loginPickerOr: {
                id: `chatgpt.gifts.cards.redemption.login_picker.separator`,
                defaultMessage: `OR`
            },
            loginAnotherAccount: {
                id: `chatgpt.gifts.cards.redemption.login_picker.login.button`,
                defaultMessage: `Log into another account`
            },
            createAccount: {
                id: `chatgpt.gifts.cards.redemption.login_picker.create.button`,
                defaultMessage: `Create account`
            },
            changeLogin: {
                id: `chatgpt.gifts.cards.redemption.login_picker.change.button`,
                defaultMessage: `Use another account`
            },
            loginSwitchError: {
                id: `chatgpt.gifts.cards.redemption.login_picker.switch.error`,
                defaultMessage: `Couldn’t switch accounts. Try again or log in again.`
            },
            addFundsTo: {
                id: `chatgpt.gifts.cards.redemption.form.destination.add_funds.label`,
                defaultMessage: `Add funds to`
            },
            closeButtonLabel: {
                id: `chatgpt.gifts.cards.redemption.header.close_button.label`,
                defaultMessage: `Close gift card redemption`
            },
            destinationLabel: {
                id: `chatgpt.gifts.cards.redemption.form.destination.label`,
                defaultMessage: `Redeem to`
            },
            destinationPlaceholder: {
                id: `chatgpt.gifts.cards.redemption.form.destination.placeholder`,
                defaultMessage: `Choose an account`
            },
            chatgptDestination: {
                id: `chatgpt.gifts.cards.redemption.form.destination.option.chatgpt_product.label`,
                defaultMessage: `ChatGPT`
            },
            apiDestination: {
                id: `chatgpt.gifts.cards.redemption.form.destination.option.api_product.label`,
                defaultMessage: `API organization`
            },
            apiFundsRestriction: {
                id: `chatgpt.gifts.cards.redemption.form.destination.api_funds_restriction`,
                defaultMessage: `Funds redeemed here can only be used for API purchases in {name}`
            },
            personalDestination: {
                id: `chatgpt.gifts.cards.redemption.form.destination.personal.label`,
                defaultMessage: `Personal`
            },
            destinationUnavailable: {
                id: `chatgpt.gifts.cards.redemption.form.destination.unavailable`,
                defaultMessage: `The selected account is no longer available for redemption.`
            },
            selectAlternativeDestination: {
                id: `chatgpt.gifts.cards.redemption.form.destination.recovery.button`,
                defaultMessage: `Use {name}`
            },
            destinationsUnavailable: {
                id: `chatgpt.gifts.cards.redemption.form.destination.error`,
                defaultMessage: `Some accounts couldn’t be loaded.`
            },
            destinationsRetry: {
                id: `chatgpt.gifts.cards.redemption.form.destination.retry.button`,
                defaultMessage: `Retry`
            },
            apiSuccessHeading: {
                id: `chatgpt.gifts.cards.redemption.success.api_wallet_balance.heading`,
                defaultMessage: `{amount} added to the API Wallet balance for {name}`
            },
            apiAlreadyRedeemedHeading: {
                id: `chatgpt.gifts.cards.redemption.success.api_wallet_already_redeemed.heading`,
                defaultMessage: `This gift card was already redeemed to the API Wallet for {name}`
            },
            continueToApiButton: {
                id: `chatgpt.gifts.cards.redemption.success.continue_to_api.button.label`,
                defaultMessage: `View API billing`
            },
            backButtonLabel: {
                id: `chatgpt.gifts.cards.redemption.header.back_button.label`,
                defaultMessage: `Back`
            },
            flowAccessibleTitle: {
                id: `chatgpt.gifts.cards.redemption.flow.accessible_title`,
                defaultMessage: `Redeem a gift card`
            },
            homeLinkLabel: {
                id: `chatgpt.gifts.cards.redemption.header.home_link.label`,
                defaultMessage: `ChatGPT home`
            },
            heading: {
                id: `chatgpt.gifts.cards.redemption.form.heading`,
                defaultMessage: `Redeem your gift`
            },
            supportingCopy: {
                id: `chatgpt.gifts.cards.redemption.form.supporting_copy`,
                defaultMessage: `Enter the PIN on the gift card to redeem.`
            },
            regionUnavailableHeading: {
                id: `chatgpt.gifts.cards.redemption.unavailable.heading.location_unavailable`,
                defaultMessage: `Gift card redemption isn’t available in your location`
            },
            regionUnavailableBody: {
                id: `chatgpt.gifts.cards.redemption.unavailable.body.us_only`,
                defaultMessage: `Gift cards can currently be redeemed only while you’re in the United States. We’re working to make redemption available in more countries.`
            },
            regionUnavailableRegionalBody: {
                id: `chatgpt.gifts.cards.redemption.unavailable.body.eligible_countries`,
                defaultMessage: `Gift cards can currently be redeemed only while you’re in an eligible country. We’re working to make redemption available in more countries.`
            },
            workspaceOwnerUnavailableHeading: {
                id: `chatgpt.gifts.cards.redemption.unavailable.heading.workspace_owner_only`,
                defaultMessage: `Gift card redemption is only available to workspace owners`
            },
            workspaceOwnerUnavailableBody: {
                id: `chatgpt.gifts.cards.redemption.unavailable.body.workspace_owner_only`,
                defaultMessage: `Choose a different account, or ask an owner to redeem a gift card for this workspace.`
            },
            pinLabel: {
                id: `chatgpt.gifts.cards.redemption.form.pin.label`,
                defaultMessage: `PIN`
            },
            cardNumberLabel: {
                id: `chatgpt.gifts.cards.redemption.form.card_number.label`,
                defaultMessage: `Card number`
            },
            redeemButton: {
                id: `chatgpt.gifts.cards.redemption.form.redeem.button.label`,
                defaultMessage: `Redeem`
            },
            terms: {
                id: `chatgpt.gifts.cards.redemption.form.gift_card_terms`,
                defaultMessage: `By clicking Redeem, you agree to the Gift Card & Promotional Code <terms>Terms and Conditions</terms>, as applicable.`
            },
            successEyebrow: {
                id: `chatgpt.gifts.cards.redemption.success.eyebrow`,
                defaultMessage: `Gift card redeemed`
            },
            successHeading: {
                id: `chatgpt.gifts.cards.redemption.success.wallet_balance.heading`,
                defaultMessage: `{amount} added to your ChatGPT Wallet balance`
            },
            upgradePlanButton: {
                id: `chatgpt.gifts.cards.redemption.success.upgrade_plan.button.label`,
                defaultMessage: `Upgrade your plan`
            },
            accountSwitchError: {
                id: `chatgpt.gifts.cards.redemption.success.account_switch.error`,
                defaultMessage: `Your gift card was redeemed, but we couldn’t open that account. Try again.`
            },
            continueToChatgptButton: {
                id: `chatgpt.gifts.cards.redemption.success.continue_to_chatgpt.button.label`,
                defaultMessage: `Continue to ChatGPT`
            },
            continueToChatgptLink: {
                id: `chatgpt.gifts.cards.redemption.success.continue_to_chatgpt.link.label`,
                defaultMessage: `Continue to ChatGPT →`
            },
            alreadyRedeemedErrorToast: {
                id: `chatgpt.gifts.cards.redemption.error.already_redeemed.toast`,
                defaultMessage: `This gift card was already redeemed`
            },
            currencyIneligibleErrorToast: {
                id: `chatgpt.gifts.cards.redemption.error.currency_ineligible.toast`,
                defaultMessage: `This gift card is not eligible for your account’s currency`
            },
            cardNumberRequiredErrorToast: {
                id: `chatgpt.gifts.cards.redemption.error.card_number_required.toast`,
                defaultMessage: `Enter the 20-digit card number printed on your gift card.`
            },
            apiAccountIneligibleErrorToast: {
                id: `chatgpt.gifts.cards.redemption.error.api_account_ineligible.toast`,
                defaultMessage: `This API organization isn’t eligible to redeem gift cards.`
            },
            dailyLimitErrorToast: {
                id: `chatgpt.gifts.cards.redemption.error.daily_limit_would_exceed.toast`,
                defaultMessage: `This gift card would exceed your daily redemption limit`
            },
            attemptLimitErrorToast: {
                id: `chatgpt.gifts.cards.redemption.error.attempt_limit_exceeded.toast`,
                defaultMessage: `Too many redemption attempts. Try again later.`
            },
            temporarilyUnavailableErrorToast: {
                id: `chatgpt.gifts.cards.redemption.error.temporarily_unavailable.toast`,
                defaultMessage: `Gift card redemption is temporarily unavailable. Try again later.`
            },
            invalidOrUnavailableErrorToast: {
                id: `chatgpt.gifts.cards.redemption.error.invalid_or_unavailable.toast`,
                defaultMessage: `This gift card is invalid or unavailable`
            }
        })
    }));

function yn(e, t) {
    return e + t.charCodeAt(0)
}
var bn, xn, Z, Sn, Cn, wn, Tn = e((() => {
        bn = st(), xe(), i(), ht(), Et(), At(), Tt(), K(), xn = t(rt()), nt(), vn(), Z = Ze(), Sn = e => {
            "use forget";
            let t = (0, bn.c)(23),
                {
                    logins: n,
                    pendingLoginId: r,
                    hasError: i,
                    canAddAccount: a,
                    onSelect: o,
                    onAddAccount: s
                } = e,
                c = (0, xn.useRef)(null),
                l, u;
            t[0] === i ? (l = t[1], u = t[2]) : (l = () => {
                i && c.current?.focus()
            }, u = [i], t[0] = i, t[1] = l, t[2] = u), (0, xn.useEffect)(l, u);
            let d;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Z.jsx)(`h1`, {
                id: `gift-card-login-heading`,
                className: `text-heading-app-emphasized mb-2 text-center tracking-[0.36px]`,
                children: (0, Z.jsx)(Y, {
                    ...X.loginPickerHeading
                })
            }), t[3] = d) : d = t[3];
            let f;
            if (t[4] !== n || t[5] !== o || t[6] !== r) {
                let e;
                t[8] !== o || t[9] !== r ? (e = e => (0, Z.jsxs)(`button`, {
                    type: `button`,
                    className: `interactive-button interactive-button-secondary interactive-outline-secondary flex h-[66px] w-full items-center gap-3 rounded-[20px] border ps-4 pe-2 text-start`,
                    "aria-disabled": r != null,
                    onClick: t => {
                        if (r != null) {
                            t.preventDefault();
                            return
                        }
                        o(e.id)
                    },
                    children: [(0, Z.jsx)(`span`, {
                        "aria-hidden": `true`,
                        children: (0, Z.jsx)(fe, {
                            user: {
                                name: e.name,
                                picture: e.imageUrl ?? void 0
                            },
                            size: `mediumLarge`,
                            className: `size-8!`,
                            imageClassName: `size-8!`
                        })
                    }), (0, Z.jsxs)(`span`, {
                        className: `flex min-w-0 flex-1 flex-col`,
                        children: [(0, Z.jsx)(`span`, {
                            className: `text-body-emphasized truncate tracking-[-0.32px]`,
                            children: e.name
                        }), (0, Z.jsx)(`span`, {
                            className: `text-token-text-secondary text-footnote-regular truncate`,
                            children: e.email
                        })]
                    }), (0, Z.jsx)(`span`, {
                        className: `flex size-10 shrink-0 items-center justify-center`,
                        children: (0, Z.jsx)(Dt, {
                            className: `icon text-token-text-tertiary rtl:rotate-180`
                        })
                    })]
                }, e.id), t[8] = o, t[9] = r, t[10] = e) : e = t[10], f = n.map(e), t[4] = n, t[5] = o, t[6] = r, t[7] = f
            } else f = t[7];
            let p;
            t[11] === i ? p = t[12] : (p = i ? (0, Z.jsx)(`p`, {
                role: `alert`,
                className: `interactive-label-warning-secondary text-sm`,
                children: (0, Z.jsx)(Y, {
                    ...X.loginSwitchError
                })
            }) : null, t[11] = i, t[12] = p);
            let m;
            t[13] !== f || t[14] !== p ? (m = (0, Z.jsxs)(`div`, {
                className: `flex flex-col gap-3`,
                children: [f, p]
            }), t[13] = f, t[14] = p, t[15] = m) : m = t[15];
            let h;
            t[16] !== a || t[17] !== s || t[18] !== r ? (h = a ? (0, Z.jsxs)(Z.Fragment, {
                children: [(0, Z.jsxs)(`div`, {
                    className: `text-token-text-secondary text-caption-regular flex h-3 items-center gap-3`,
                    children: [(0, Z.jsx)(`span`, {
                        className: `border-token-border-light flex-1 border-t`
                    }), (0, Z.jsx)(Y, {
                        ...X.loginPickerOr
                    }), (0, Z.jsx)(`span`, {
                        className: `border-token-border-light flex-1 border-t`
                    })]
                }), (0, Z.jsxs)(`div`, {
                    className: `flex flex-col gap-3`,
                    children: [(0, Z.jsx)(we, {
                        ref: c,
                        type: `button`,
                        color: `secondary`,
                        className: `h-[42px]`,
                        fullWidth: !0,
                        "aria-disabled": r != null,
                        visuallyDisabled: r != null,
                        onClick: e => {
                            if (r != null) {
                                e.preventDefault();
                                return
                            }
                            s(`login`)
                        },
                        children: (0, Z.jsx)(Y, {
                            ...X.loginAnotherAccount
                        })
                    }), (0, Z.jsx)(we, {
                        type: `button`,
                        color: `secondary`,
                        className: `h-[42px]`,
                        fullWidth: !0,
                        "aria-disabled": r != null,
                        visuallyDisabled: r != null,
                        onClick: e => {
                            if (r != null) {
                                e.preventDefault();
                                return
                            }
                            s(`signup`)
                        },
                        children: (0, Z.jsx)(Y, {
                            ...X.createAccount
                        })
                    })]
                })]
            }) : null, t[16] = a, t[17] = s, t[18] = r, t[19] = h) : h = t[19];
            let g;
            return t[20] !== m || t[21] !== h ? (g = (0, Z.jsxs)(`section`, {
                "aria-labelledby": `gift-card-login-heading`,
                className: `bg-token-bg-primary flex w-full flex-col gap-6 rounded-3xl p-6 sm:p-12`,
                children: [d, m, h]
            }), t[20] = m, t[21] = h, t[22] = g) : g = t[22], g
        }, Cn = e => {
            "use forget";
            let t = (0, bn.c)(17),
                {
                    destination: n
                } = e,
                r;
            t[0] === n.id ? r = t[1] : (r = Array.from(n.id).reduce(yn, 0), t[0] = n.id, t[1] = r);
            let i = r,
                a;
            t[2] !== i || t[3] !== n.imageUrl || t[4] !== n.name || t[5] !== n.product ? (a = (0, Z.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `shrink-0`,
                children: n.product === `api` ? (0, Z.jsx)(`span`, {
                    className: `flex size-8 items-center justify-center rounded-full text-gray-950`,
                    style: {
                        backgroundColor: Fe[i % Fe.length]
                    },
                    children: (0, Z.jsx)(kt, {
                        className: `icon`
                    })
                }) : (0, Z.jsx)(fe, {
                    user: {
                        name: n.name,
                        picture: n.imageUrl ?? void 0
                    },
                    size: `mediumLarge`,
                    className: `size-8!`,
                    imageClassName: `size-8!`
                })
            }), t[2] = i, t[3] = n.imageUrl, t[4] = n.name, t[5] = n.product, t[6] = a) : a = t[6];
            let o;
            t[7] === n.name ? o = t[8] : (o = (0, Z.jsx)(`span`, {
                className: `text-body-regular truncate tracking-[-0.32px]`,
                children: n.name
            }), t[7] = n.name, t[8] = o);
            let s = n.product === `api` ? X.apiDestination : X.chatgptDestination,
                c;
            t[9] === s ? c = t[10] : (c = (0, Z.jsx)(`span`, {
                className: `text-token-text-secondary text-body-small-regular tracking-[-0.15px]`,
                children: (0, Z.jsx)(Y, {
                    ...s
                })
            }), t[9] = s, t[10] = c);
            let l;
            t[11] !== o || t[12] !== c ? (l = (0, Z.jsxs)(`span`, {
                className: `flex h-[42px] min-w-0 flex-1 flex-col justify-center`,
                children: [o, c]
            }), t[11] = o, t[12] = c, t[13] = l) : l = t[13];
            let u;
            return t[14] !== a || t[15] !== l ? (u = (0, Z.jsxs)(`span`, {
                className: `flex min-w-0 flex-1 items-center gap-3 text-start`,
                children: [a, l]
            }), t[14] = a, t[15] = l, t[16] = u) : u = t[16], u
        }, wn = e => {
            "use forget";
            let t = (0, bn.c)(11),
                {
                    destinations: n,
                    selected: r,
                    disabled: i,
                    onSelect: a,
                    onChangeLogin: o,
                    open: s
                } = e,
                c = lt();
            if (n.length === 0 && r == null && o == null) return null;
            let l;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, Z.jsx)(`span`, {
                id: `gift-card-funding-destination-label`,
                className: `text-token-text-secondary text-body-small-regular tracking-[-0.15px]`,
                children: (0, Z.jsx)(Y, {
                    ...X.addFundsTo
                })
            }), t[0] = l) : l = t[0];
            let u;
            t[1] !== n || t[2] !== i || t[3] !== c || t[4] !== o || t[5] !== a || t[6] !== s || t[7] !== r ? (u = n.length > 1 || o != null ? (0, Z.jsxs)(dt, {
                contentAlign: `center`,
                contentClassName: `w-[var(--radix-dropdown-menu-trigger-width)] max-h-80 overflow-y-auto`,
                open: s,
                triggerButton: (0, Z.jsxs)(`button`, {
                    type: `button`,
                    disabled: i,
                    "aria-labelledby": `gift-card-funding-destination-label gift-card-funding-destination-value`,
                    className: `interactive-button interactive-button-secondary interactive-outline-secondary flex h-[74px] w-full items-center gap-3 rounded-[20px] border py-4 ps-5 pe-3`,
                    children: [(0, Z.jsx)(`span`, {
                        id: `gift-card-funding-destination-value`,
                        className: `flex min-w-0 flex-1`,
                        children: r == null ? c.formatMessage(X.destinationPlaceholder) : (0, Z.jsx)(Cn, {
                            destination: r
                        })
                    }), (0, Z.jsx)(`span`, {
                        className: `flex size-10 shrink-0 items-center justify-center`,
                        children: (0, Z.jsx)(Ot, {
                            className: `icon text-token-text-tertiary`
                        })
                    })]
                }),
                children: [(0, Z.jsx)(Ct.RadioGroup, {
                    value: r == null ? `` : `${r.product}:${r.id}`,
                    onValueChange: e => {
                        let t = n.find(t => `${t.product}:${t.id}` === e);
                        t != null && a(t)
                    },
                    children: n.map(e => (0, Z.jsx)(Ct.RadioItem, {
                        value: `${e.product}:${e.id}`,
                        disabled: i,
                        children: (0, Z.jsx)(Cn, {
                            destination: e
                        })
                    }, `${e.product}:${e.id}`))
                }), o == null ? null : (0, Z.jsxs)(Z.Fragment, {
                    children: [(0, Z.jsx)(Ct.Separator, {}), (0, Z.jsx)(Ct.Item, {
                        disabled: i,
                        onSelect: o,
                        children: (0, Z.jsx)(Y, {
                            ...X.changeLogin
                        })
                    })]
                })]
            }) : r == null ? null : (0, Z.jsx)(`div`, {
                "aria-labelledby": `gift-card-funding-destination-label`,
                className: `border-token-border-light flex h-[74px] w-full items-center rounded-[20px] border px-5 py-4`,
                children: (0, Z.jsx)(Cn, {
                    destination: r
                })
            }), t[1] = n, t[2] = i, t[3] = c, t[4] = o, t[5] = a, t[6] = s, t[7] = r, t[8] = u) : u = t[8];
            let d;
            return t[9] === u ? d = t[10] : (d = (0, Z.jsxs)(`div`, {
                className: `flex w-full flex-col gap-2`,
                children: [l, u]
            }), t[9] = u, t[10] = d), d
        }
    })),
    En, Dn = e((() => {
        C(), En = m({
            name: `earth`,
            canvas: {
                width: 20,
                height: 20,
                viewBox: `0 0 20 20`,
                frame: {
                    x: 0,
                    y: 0,
                    width: 20,
                    height: 20
                },
                inkBounds: {
                    x: 1.625,
                    y: 1.625,
                    width: 16.75,
                    height: 16.75
                },
                visualBounds: {
                    x: 1.625,
                    y: 1.625,
                    width: 16.75,
                    height: 16.75
                }
            },
            paint: {
                kind: `monochrome`
            },
            optical: {
                shape: `circular`,
                bounds: {
                    x: 1.625,
                    y: 1.625,
                    width: 16.75,
                    height: 16.75
                },
                center: {
                    x: 10,
                    y: 10
                },
                insets: {
                    top: 1.625,
                    right: 1.625,
                    bottom: 1.625,
                    left: 1.625
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10,
                        y: 10
                    },
                    foreground: {
                        x: 10,
                        y: 10
                    }
                }
            },
            capabilities: [`icon`],
            body: `<path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.625C14.6254 1.625 18.375 5.37462 18.375 10C18.375 14.6254 14.6254 18.375 10 18.375C5.37462 18.375 1.625 14.6254 1.625 10C1.625 5.37462 5.37462 1.625 10 1.625ZM10 3.375C8.08112 3.375 6.35344 4.19142 5.14355 5.49512L6.06641 6.2334C6.75651 6.78548 7.11059 7.65724 7.00098 8.53418L6.84668 9.77148C6.80505 10.1045 6.97721 10.428 7.27734 10.5781L7.9375 10.9072C8.71546 11.2963 9.20703 12.0921 9.20703 12.9619C9.20695 13.7537 8.79841 14.4895 8.12695 14.9092L6.74707 15.7705C7.70816 16.3135 8.81742 16.625 10 16.625C12.4408 16.625 14.5713 15.3039 15.7207 13.3389L15.3496 13.0918C15.2198 13.0053 15.0671 12.9591 14.9111 12.959H14.8477C13.831 12.959 12.9123 12.3524 12.5117 11.418L11.9668 10.1465C11.8842 9.95368 11.7279 9.8007 11.5332 9.72266L10.6787 9.38184C10.1008 9.15068 9.62801 8.71486 9.34961 8.1582L9.23242 7.92383C8.82452 7.10803 8.88469 6.13586 9.39062 5.37695L10.6992 3.41113C10.4694 3.38703 10.2362 3.375 10 3.375ZM4.13086 6.92676C3.64883 7.84543 3.375 8.89057 3.375 10C3.375 11.8039 4.09715 13.4381 5.2666 14.6328L7.2002 13.4258C7.35992 13.3259 7.45695 13.1503 7.45703 12.9619C7.45703 12.7548 7.33952 12.5653 7.1543 12.4727L6.49512 12.1426C5.53145 11.6607 4.97588 10.6238 5.10938 9.55469L5.26465 8.31641C5.29867 8.04347 5.18833 7.7725 4.97363 7.60059L4.13086 6.92676ZM10.8467 6.34766C10.6891 6.58396 10.67 6.88657 10.7969 7.14062L10.915 7.37598C11.0018 7.5491 11.1493 7.68491 11.3291 7.75684L12.1826 8.09863C12.8083 8.34903 13.3097 8.83757 13.5752 9.45703L14.1201 10.7285C14.2449 11.0195 14.531 11.209 14.8477 11.209H14.9111C15.4126 11.2091 15.903 11.3576 16.3203 11.6357L16.4053 11.6924C16.5477 11.152 16.625 10.5851 16.625 10C16.625 7.22614 14.9199 4.85125 12.501 3.86426L10.8467 6.34766Z" fill="currentColor"/>`
        })
    })),
    On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un = e((() => {
        On = st(), ce(), He(), kn = t(rt()), nt(), vn(), An = Ze(), jn = 16, Mn = 20, Nn = 2, Pn = 12, Fn = [`#FB6A22`, `#04B84C`, `#CEB0FB`, `#FFD240`, `#FFBADA`, `#0285FF`, `#FFD240`, `#04B84C`, `#FFD240`, `#FB6A22`, `#FFBADA`, `#CEB0FB`, `#04B84C`, `#FB6A22`, `#FFBADA`, `#CEB0FB`, `#FFD240`, `#CEB0FB`, `#FB6A22`, `#04B84C`], In = e => e.match(/.{1,4}/g)?.join(`  `) ?? ``, Ln = (e, t) => t === `cardNumber` ? e.replaceAll(/\D/g, ``).slice(0, Mn) : e.toUpperCase().replaceAll(/[^A-Z0-9]/g, ``).slice(0, jn), Rn = (e, t) => t === `cardNumber` ? e.replaceAll(/\D/g, ``).length : e.replaceAll(/[^A-Z0-9]/gi, ``).length, zn = (e, t) => {
            let n = e.getBoundingClientRect();
            if (t <= n.left) return 0;
            if (t >= n.right) return e.value.length;
            let r = e.ownerDocument,
                i = n.top + n.height / 2,
                a = r.caretPositionFromPoint?.(t, i);
            if (a?.offsetNode === e) return Math.min(Math.max(a.offset, 0), e.value.length);
            let o = r.caretRangeFromPoint?.(t, i);
            return o?.startContainer === e ? Math.min(Math.max(o.startOffset, 0), e.value.length) : t < n.left + n.width / 2 ? 0 : e.value.length
        }, Bn = (e, t) => {
            let n = Math.min(Math.max(e, 0), t),
                r = Math.floor(Math.max(t - 1, 0) / 4);
            return n + Math.min(Math.floor(n / 4), r) * Nn
        }, Vn = e => {
            "use forget";
            let t = (0, On.c)(11),
                {
                    pin: n,
                    length: r,
                    variant: i,
                    scrollLeft: a,
                    isWalletFlow: o
                } = e,
                s = `text-token-text-primary pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ${o?`text-body-emphasized`:`text-lg leading-[26px] font-[590]`} lining-nums tabular-nums ${i===`pin`?`font-mono`:``}`,
                c = `translateX(${-a}px)`,
                l;
            t[0] === c ? l = t[1] : (l = {
                transform: c
            }, t[0] = c, t[1] = l);
            let u;
            if (t[2] !== r || t[3] !== n) {
                let e;
                t[5] === n ? e = t[6] : (e = (e, t) => (0, An.jsx)(`span`, {
                    className: `flex h-[26px] shrink-0 items-center justify-center ${t>0&&t%4==0?`ms-2`:``}`,
                    style: {
                        width: Pn
                    },
                    children: t < n.length ? n[t] : (0, An.jsx)(`span`, {
                        className: `size-2 rounded-full`,
                        style: {
                            backgroundColor: Fn[t % Fn.length]
                        }
                    })
                }, t), t[5] = n, t[6] = e), u = Array.from({
                    length: r
                }, e), t[2] = r, t[3] = n, t[4] = u
            } else u = t[4];
            let d;
            return t[7] !== s || t[8] !== l || t[9] !== u ? (d = (0, An.jsx)(`span`, {
                "aria-hidden": `true`,
                className: s,
                style: l,
                children: u
            }), t[7] = s, t[8] = l, t[9] = u, t[10] = d) : d = t[10], d
        }, Hn = e => {
            "use forget";
            let t = (0, On.c)(55),
                {
                    hasError: n,
                    pin: r,
                    onPinChange: i,
                    variant: a,
                    isWalletFlow: o
                } = e,
                s = a === void 0 ? `pin` : a,
                c = o !== void 0 && o,
                l = (0, kn.useRef)(null),
                [u, d] = (0, kn.useState)(0),
                f = (0, kn.useRef)(null),
                p = (0, kn.useRef)(null),
                m;
            t[0] === r ? m = t[1] : (m = In(r), t[0] = r, t[1] = m);
            let h = m,
                g = s === `cardNumber`,
                _ = g ? `gift-card-redemption-card-number` : `gift-card-redemption-pin`,
                v;
            t[2] !== i || t[3] !== s ? (v = e => {
                let t = Ln(e.target.value, s),
                    n = e.target.selectionStart ?? e.target.value.length,
                    r = e.target.selectionEnd ?? n;
                f.current = {
                    start: Math.min(Rn(e.target.value.slice(0, n), s), t.length),
                    end: Math.min(Rn(e.target.value.slice(0, r), s), t.length)
                }, i(t)
            }, t[2] = i, t[3] = s, t[4] = v) : v = t[4];
            let y = v,
                b;
            t[5] !== h || t[6] !== i || t[7] !== r || t[8] !== s ? (b = e => {
                if (e.key !== `Backspace` && e.key !== `Delete` || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                let t = e.currentTarget.selectionStart,
                    n = e.currentTarget.selectionEnd;
                if (t == null || n == null || t !== n) return;
                let a = Rn(h.slice(0, t), s),
                    o = e.key === `Backspace` ? a - 1 : a;
                o < 0 || o >= r.length || (e.preventDefault(), f.current = {
                    start: o,
                    end: o
                }, i(`${r.slice(0,o)}${r.slice(o+1)}`))
            }, t[5] = h, t[6] = i, t[7] = r, t[8] = s, t[9] = b) : b = t[9];
            let x = b,
                S;
            t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (S = e => {
                let t = l.current,
                    n = p.current;
                if (t == null || n == null) return;
                let r = zn(t, e);
                t.setSelectionRange(Math.min(n.anchor, r), Math.max(n.anchor, r), r < n.anchor ? `backward` : `forward`)
            }, t[10] = S) : S = t[10];
            let C = S,
                w;
            t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (w = e => {
                let t = l.current;
                if (e.pointerType === `mouse` && e.button !== 0 || t == null || e.target === t) return;
                e.preventDefault(), t.focus({
                    preventScroll: !0
                });
                let {
                    left: n,
                    right: r
                } = t.getBoundingClientRect(), i;
                if (e.clientX <= n) i = 0;
                else if (e.clientX >= r) i = t.value.length;
                else return;
                t.setSelectionRange(i, i), p.current = {
                    anchor: i,
                    pointerId: e.pointerId
                };
                try {
                    e.currentTarget.setPointerCapture(e.pointerId)
                } catch {
                    p.current = null
                }
            }, t[11] = w) : w = t[11];
            let T = w,
                E;
            t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (E = e => {
                e.pointerId !== p.current?.pointerId || e.pointerType === `mouse` && !(e.buttons & 1) || C(e.clientX)
            }, t[12] = E) : E = t[12];
            let ee = E,
                D;
            t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (D = e => {
                e.pointerId === p.current?.pointerId && (p.current = null, e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId))
            }, t[13] = D) : D = t[13];
            let O = D,
                te;
            t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (te = e => {
                e.pointerId === p.current?.pointerId && (C(e.clientX), O(e))
            }, t[14] = te) : te = t[14];
            let k = te,
                A;
            t[15] === r.length ? A = t[16] : (A = () => {
                let e = f.current,
                    t = l.current;
                if (e == null || t == null) return;
                let n = Bn(e.end, r.length);
                t.setSelectionRange(Bn(e.start, r.length), n);
                let i = e.end * Pn + (n - e.end) * 4;
                t.scrollLeft = Math.max(0, Math.min(t.scrollLeft, i), i + 1.5 - t.clientWidth), d(t.scrollLeft), f.current = null
            }, t[15] = r.length, t[16] = A);
            let j;
            t[17] !== h || t[18] !== r.length ? (j = [h, r.length], t[17] = h, t[18] = r.length, t[19] = j) : j = t[19], qe(A, j);
            let M = c ? `h-[78px] rounded-[20px] py-4 before:rounded-[20px]` : `h-[76px] rounded-3xl py-3 before:rounded-3xl sm:h-[84px] sm:px-6 sm:py-4`,
                ne;
            t[20] === M ? ne = t[21] : (ne = Ke(`group bg-token-bg-primary before:border-token-border-default focus-within:shadow-elevation-01 relative flex w-full cursor-text flex-col overflow-hidden px-5 before:pointer-events-none before:absolute before:inset-0 before:border focus-within:before:border-[1.5px] focus-within:before:border-[var(--interactive-border-focus)]`, M), t[20] = M, t[21] = ne);
            let N = `${_}-composer`,
                P = c ? `text-body-small-regular tracking-[-0.15px]` : `text-base leading-[26px] tracking-[-0.32px]`,
                F;
            t[22] === P ? F = t[23] : (F = Ke(`text-token-text-secondary`, P), t[22] = P, t[23] = F);
            let I = g ? X.cardNumberLabel : X.pinLabel,
                L;
            t[24] === I ? L = t[25] : (L = (0, An.jsx)(Y, {
                ...I
            }), t[24] = I, t[25] = L);
            let R;
            t[26] !== F || t[27] !== L ? (R = (0, An.jsx)(`span`, {
                className: F,
                children: L
            }), t[26] = F, t[27] = L, t[28] = R) : R = t[28];
            let z = n ? !0 : void 0,
                B = g ? `off` : `characters`,
                re = g ? `numeric` : void 0,
                V = g ? `serial_number` : `pin`,
                H;
            t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (H = e => d(e.currentTarget.scrollLeft), t[29] = H) : H = t[29];
            let ie;
            t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (ie = {
                fontFeatureSettings: `"lnum" 1`,
                letterSpacing: `calc(${Pn}px - 1ch)`,
                wordSpacing: `${4-Pn}px`
            }, t[30] = ie) : ie = t[30];
            let U;
            t[31] !== h || t[32] !== y || t[33] !== x || t[34] !== _ || t[35] !== z || t[36] !== B || t[37] !== re || t[38] !== V ? (U = (0, An.jsx)(`input`, {
                "aria-invalid": z,
                autoCapitalize: B,
                autoComplete: `off`,
                className: `caret-token-text-primary relative z-10 field-sizing-content h-[26px] max-w-full min-w-0 shrink-0 cursor-text appearance-none border-0 bg-transparent p-0 pe-[1.5px] font-mono text-base leading-[26px] font-[590] text-transparent shadow-none ring-0 outline-none focus:border-0 focus:shadow-none focus:ring-0 focus:outline-none focus-visible:border-0 focus-visible:shadow-none focus-visible:ring-0 focus-visible:outline-none [&::selection]:text-transparent`,
                "data-1p-ignore": !0,
                "data-lpignore": `true`,
                enterKeyHint: `done`,
                id: _,
                inputMode: re,
                name: V,
                onChange: y,
                onKeyDown: x,
                onScroll: H,
                ref: l,
                spellCheck: !1,
                style: ie,
                type: `text`,
                value: h
            }), t[31] = h, t[32] = y, t[33] = x, t[34] = _, t[35] = z, t[36] = B, t[37] = re, t[38] = V, t[39] = U) : U = t[39];
            let ae = g ? Mn : jn,
                W;
            t[40] !== c || t[41] !== r || t[42] !== u || t[43] !== ae || t[44] !== s ? (W = (0, An.jsx)(Vn, {
                pin: r,
                length: ae,
                variant: s,
                scrollLeft: u,
                isWalletFlow: c
            }), t[40] = c, t[41] = r, t[42] = u, t[43] = ae, t[44] = s, t[45] = W) : W = t[45];
            let oe;
            t[46] !== U || t[47] !== W ? (oe = (0, An.jsxs)(`span`, {
                className: `relative flex h-[26px] min-w-0 items-center overflow-hidden`,
                dir: `ltr`,
                children: [U, W]
            }), t[46] = U, t[47] = W, t[48] = oe) : oe = t[48];
            let se;
            return t[49] !== _ || t[50] !== ne || t[51] !== N || t[52] !== R || t[53] !== oe ? (se = (0, An.jsxs)(`label`, {
                className: ne,
                "data-testid": N,
                htmlFor: _,
                onLostPointerCapture: O,
                onPointerCancel: O,
                onPointerDown: T,
                onPointerMove: ee,
                onPointerUp: k,
                children: [R, oe]
            }), t[49] = _, t[50] = ne, t[51] = N, t[52] = R, t[53] = oe, t[54] = se) : se = t[54], se
        }
    }));

function Wn(e) {
    e.play()?.catch(() => void 0)
}

function Gn() {
    return !0
}

function Kn() {
    return !1
}
var qn, Jn, Yn, Xn, Zn, Qn, $n, er = e((() => {
    qn = st(), J(), ee(), p(), Ie(), ce(), Jn = t(rt()), Yn = Ze(), Xn = `https://persistent.oaistatic.com/gift-cards/redemption/v4`, Zn = [`idle`, `entering`, `editing`, `success`], Qn = () => {
        "use forget";
        let e = (0, qn.c)(2),
            t = ye(o),
            n = oe();
        if (n == null) return null;
        let r = t ? `desktop` : `mobile`,
            i = n === `dark` ? `dark/${r}` : r,
            a = `${Xn}/${i}/lab-idle-poster.webp`,
            s;
        return e[0] === a ? s = e[1] : (s = (0, Yn.jsx)(`div`, {
            "aria-hidden": `true`,
            className: `pointer-events-none fixed inset-0 z-0 overflow-hidden`,
            children: (0, Yn.jsx)(`img`, {
                alt: ``,
                className: `h-full w-full object-cover`,
                decoding: `async`,
                src: a
            })
        }), e[0] = a, e[1] = s), s
    }, $n = e => {
        "use forget";
        let t = (0, qn.c)(21),
            {
                state: n
            } = e,
            r = ye(o),
            i = ye(S),
            a = oe(),
            s = b(Gn, Kn) && a != null && !i,
            c = r ? `desktop` : `mobile`,
            l = a === `dark` ? `dark/${c}` : c,
            [u, d] = (0, Jn.useState)(!1),
            [f, p] = (0, Jn.useState)(!1),
            [m, h] = (0, Jn.useState)(null),
            [g, _] = (0, Jn.useState)(n),
            v;
        t[0] === n ? v = t[1] : (v = () => n === `editing` ? `entering` : n, t[0] = n, t[1] = v);
        let [y, x] = (0, Jn.useState)(v), C;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (C = {}, t[2] = C) : C = t[2];
        let w = (0, Jn.useRef)(C);
        n !== g && (_(n), n === `idle` && p(!1));
        let T = n === `editing` ? f ? `editing` : `entering` : n,
            E = T === `entering` ? m ?? l : l,
            ee;
        t[3] !== s || t[4] !== T ? (ee = () => {
            if (!s) return;
            let e = w.current[T];
            if (e?.error != null) {
                d(!0);
                return
            }
            e != null && e.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && (T === `entering` && (e.currentTime = 0), Wn(e))
        }, t[3] = s, t[4] = T, t[5] = ee) : ee = t[5];
        let D;
        if (t[6] !== s || t[7] !== T || t[8] !== E ? (D = [s, T, E], t[6] = s, t[7] = T, t[8] = E, t[9] = D) : D = t[9], (0, Jn.useEffect)(ee, D), u || a == null) return null;
        let O = `${Xn}/${E}`,
            te;
        t[10] !== m || t[11] !== E ? (te = e => `${Xn}/${e===`entering`?m??E:E}`, t[10] = m, t[11] = E, t[12] = te) : te = t[12];
        let k = te,
            A;
        return t[13] !== O || t[14] !== s || t[15] !== T || t[16] !== k || t[17] !== l || t[18] !== n || t[19] !== y ? (A = (0, Yn.jsx)(`div`, {
            "aria-hidden": `true`,
            className: `pointer-events-none fixed inset-0 z-0 overflow-hidden`,
            "data-testid": `gift-card-redemption-background`,
            children: s ? (0, Yn.jsxs)(Yn.Fragment, {
                children: [(0, Yn.jsx)(`img`, {
                    alt: ``,
                    className: `absolute inset-0 h-full w-full object-cover`,
                    "data-testid": `gift-card-redemption-background-backdrop`,
                    decoding: `async`,
                    src: `${O}/lab-idle-poster.webp`
                }), Zn.map(e => (0, Yn.jsx)(`video`, {
                    autoPlay: e === T,
                    className: Ke(`absolute inset-0 h-full w-full object-cover`, e === y ? `opacity-100` : `opacity-0`),
                    "data-background-clip": e,
                    "data-testid": e === y ? `gift-card-redemption-background-video` : `gift-card-redemption-background-video-${e}`,
                    loop: e !== `entering`,
                    muted: !0,
                    playsInline: !0,
                    poster: `${k(e)}/lab-${e}-poster.webp`,
                    preload: `auto`,
                    ref: t => {
                        t == null ? delete w.current[e] : w.current[e] = t
                    },
                    src: `${k(e)}/lab-${e}.mp4`,
                    onEnded: () => {
                        e === `entering` && n === `editing` && p(!0)
                    },
                    onError: () => {
                        (e === T || e === y) && d(!0)
                    },
                    onLoadedData: t => {
                        e === T && Wn(t.currentTarget)
                    },
                    onPlaying: t => {
                        if (e !== T) {
                            t.currentTarget.pause();
                            return
                        }
                        for (let t of Zn) t !== e && w.current[t]?.pause();
                        h(e === `entering` ? e => e ?? l : null), x(e)
                    }
                }, e))]
            }) : (0, Yn.jsx)(`img`, {
                alt: ``,
                className: `h-full w-full object-cover`,
                "data-testid": `gift-card-redemption-background-poster`,
                decoding: `async`,
                src: `${O}/lab-${n}-poster.webp`,
                onError: () => d(!0)
            })
        }), t[13] = O, t[14] = s, t[15] = T, t[16] = k, t[17] = l, t[18] = n, t[19] = y, t[20] = A) : A = t[20], A
    }
}));

function tr(e) {
    e && Gt()
}

function nr(e) {
    return {
        value: `${e.product}:${e.id}`,
        label: (0, Q.jsxs)(`span`, {
            className: `flex min-w-0 flex-col gap-1 text-start`,
            children: [(0, Q.jsx)(`span`, {
                className: `truncate`,
                children: e.name
            }), (0, Q.jsx)(`span`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, Q.jsx)(Y, {
                    ...e.product === `api` ? X.apiDestination : X.chatgptDestination
                })
            })]
        })
    }
}

function rr(e) {
    return (0, Q.jsx)(`a`, {
        className: dr,
        href: lr,
        rel: `noopener noreferrer`,
        target: `_blank`,
        children: e
    })
}

function ir(e) {
    return e.preventDefault()
}

function ar(e) {
    return e.preventDefault()
}

function or() {}
var sr, cr, Q, lr, ur, dr, fr, pr, mr, hr, gr, _r, vr = e((() => {
    sr = st(), Tn(), xe(), i(), ie(), zt(), wt(), ht(), Kt(), De(), c(), ft(), yt(), Ut(), Ge(), Dn(), ce(), cr = t(rt()), nt(), Xe(), Un(), er(), vn(), _n(), Q = Ze(), lr = `https://mycardterms.com/openai`, ur = `/#pricing`, dr = `cursor-pointer rounded-[2px] underline decoration-dotted underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2`, fr = bt({
        id: `gift-card-redemption`,
        icons: {
            earth: {
                normal: En,
                small: En
            }
        }
    }), pr = e => {
        "use forget";
        let t = (0, sr.c)(13),
            {
                isUsOnlyCountryRestriction: n,
                isWorkspaceOwnerUnavailable: r
            } = e,
            i = r ? `max-w-[447px]` : `max-w-[409px]`,
            a;
        t[0] === i ? a = t[1] : (a = Ke(`flex w-full -translate-y-[26px] flex-col items-center gap-4 text-center`, i), t[0] = i, t[1] = a);
        let o;
        t[2] === r ? o = t[3] : (o = (0, Q.jsx)(`div`, {
            "aria-hidden": `true`,
            className: `bg-token-bg-tertiary text-token-icon-primary flex size-16 shrink-0 items-center justify-center rounded-full`,
            children: r ? (0, Q.jsx)(Ye, {
                className: `icon size-8!`
            }) : (0, Q.jsx)(fr.Earth, {
                className: `size-8!`
            })
        }), t[2] = r, t[3] = o);
        let s = r ? X.workspaceOwnerUnavailableHeading : X.regionUnavailableHeading,
            c;
        t[4] === s ? c = t[5] : (c = (0, Q.jsx)(`h1`, {
            className: `w-full [font-feature-settings:'liga'_off,'clig'_off] text-[36px] leading-10 font-[510] tracking-[0.36px] text-black dark:text-white`,
            id: `gift-card-redemption-unavailable-heading`,
            children: (0, Q.jsx)(Y, {
                ...s
            })
        }), t[4] = s, t[5] = c);
        let l = r ? X.workspaceOwnerUnavailableBody : n ? X.regionUnavailableBody : X.regionUnavailableRegionalBody,
            u;
        t[6] === l ? u = t[7] : (u = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary w-full [font-feature-settings:'liga'_off,'clig'_off] text-base leading-[26px] font-normal tracking-[-0.32px]`,
            children: (0, Q.jsx)(Y, {
                ...l
            })
        }), t[6] = l, t[7] = u);
        let d;
        return t[8] !== a || t[9] !== o || t[10] !== c || t[11] !== u ? (d = (0, Q.jsxs)(`section`, {
            "aria-labelledby": `gift-card-redemption-unavailable-heading`,
            className: a,
            children: [o, c, u]
        }), t[8] = a, t[9] = o, t[10] = c, t[11] = u, t[12] = d) : d = t[12], d
    }, mr = e => {
        "use forget";
        let t = (0, sr.c)(29),
            {
                accountSwitcherRedirectUrl: n,
                isRegionUnavailable: r,
                isSubmitting: i,
                onBack: a,
                profileMenuOpen: o,
                isWalletFlow: s
            } = e,
            c = r !== void 0 && r,
            l = lt(),
            u;
        t[0] === l ? u = t[1] : (u = l.formatMessage(X.homeLinkLabel), t[0] = l, t[1] = u);
        let d = u,
            f;
        t[2] === l ? f = t[3] : (f = Wt({
            intl: l
        }), t[2] = l, t[3] = f);
        let p = f,
            m;
        t[4] !== l || t[5] !== i || t[6] !== a ? (m = a == null ? null : (0, Q.jsx)(we, {
            "aria-disabled": i,
            label: l.formatMessage(X.backButtonLabel),
            className: `size-9 p-0`,
            color: `ghost`,
            onClick: () => {
                i || a()
            },
            type: `button`,
            visuallyDisabled: i,
            children: (0, Q.jsx)(q, {
                className: `icon rtl:rotate-180`
            })
        }), t[4] = l, t[5] = i, t[6] = a, t[7] = m) : m = t[7];
        let h = i ? void 0 : `/`,
            g = i ? -1 : void 0,
            _;
        t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, Q.jsx)(vt, {
            className: `h-auto w-[81px]`
        }), t[8] = _) : _ = t[8];
        let v;
        t[9] !== d || t[10] !== i || t[11] !== h || t[12] !== g ? (v = (0, Q.jsx)(`a`, {
            "aria-disabled": i,
            "aria-label": d,
            className: `mt-[13px] cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-[7px]`,
            href: h,
            tabIndex: g,
            children: _
        }), t[9] = d, t[10] = i, t[11] = h, t[12] = g, t[13] = v) : v = t[13];
        let y;
        t[14] !== m || t[15] !== v ? (y = (0, Q.jsxs)(`div`, {
            className: `flex items-start gap-2`,
            children: [m, v]
        }), t[14] = m, t[15] = v, t[16] = y) : y = t[16];
        let b;
        t[17] !== n || t[18] !== l || t[19] !== c || t[20] !== i || t[21] !== s || t[22] !== a || t[23] !== p || t[24] !== o ? (b = s ? (0, Q.jsx)(pt.CloseButton, {
            "aria-label": l.formatMessage(X.closeButtonLabel),
            disabled: i,
            onClick: () => {
                i || (a == null ? window.location.assign(`/`) : a())
            }
        }) : (0, Q.jsx)(dt, {
            contentAlign: `end`,
            contentClassName: `z-[130] w-[225px] max-w-[calc(100vw-24px)] bg-token-bg-primary! font-['SF_Pro','SF_Pro_Display','SF_Pro_Text',var(--font-sans)] text-black dark:text-white`,
            onOpenChange: tr,
            open: !i && o,
            sideOffset: 8,
            size: `auto`,
            triggerButton: (0, Q.jsx)(`button`, {
                "aria-label": p,
                className: Ke(`flex cursor-pointer items-center justify-center rounded-[28px] border-[0.903px] border-solid border-[rgba(255,255,255,0.1)] bg-white drop-shadow-[0px_8px_8px_rgba(0,0,0,0.1)] focus-visible:outline-2 focus-visible:outline-offset-2`, c ? `size-9` : `size-10`),
                onFocus: Gt,
                onPointerEnter: Gt,
                disabled: i,
                type: `button`,
                children: (0, Q.jsx)(Le, {
                    className: c ? `size-8!` : void 0,
                    iconSize: `mediumLarge`
                })
            }),
            children: (0, Q.jsx)(Jt, {
                accountSwitcherRedirectUrl: n,
                variant: `account_and_logout`
            })
        }), t[17] = n, t[18] = l, t[19] = c, t[20] = i, t[21] = s, t[22] = a, t[23] = p, t[24] = o, t[25] = b) : b = t[25];
        let x;
        return t[26] !== b || t[27] !== y ? (x = (0, Q.jsxs)(pt.Header, {
            className: `absolute! inset-x-0 top-0 z-20! h-auto! items-start! justify-between border-0! bg-transparent! px-6! pt-2 sm:px-8! sm:pt-6`,
            children: [y, b]
        }), t[26] = b, t[27] = y, t[28] = x) : x = t[28], x
    }, hr = e => {
        "use forget";
        let t = (0, sr.c)(68),
            {
                canRedeem: n,
                cardNumber: r,
                destinationPicker: i,
                signedInIdentity: a,
                destinationMenuOpen: o,
                error: s,
                isCardNumberRequired: c,
                isSubmitting: l,
                pin: u,
                onCardNumberChange: d,
                onPinChange: f,
                onRedeem: p
            } = e,
            m = lt(),
            h = i?.selected,
            g;
        t[0] !== i || t[1] !== h ? (g = i != null && h != null && !i.isLoading && !i.isError && !i.destinations.some(e => e.product === h.product && e.id === h.id), t[0] = i, t[1] = h, t[2] = g) : g = t[2];
        let _ = g,
            v = _ && i?.destinations.length === 1 ? i.destinations[0] : void 0,
            y = a == null ? `gap-5 sm:gap-6 sm:p-16` : `gap-6 sm:p-12`,
            b;
        t[3] === y ? b = t[4] : (b = Ke(`bg-token-bg-primary flex w-full flex-col items-center rounded-3xl p-6 shadow-[0_20px_25px_-5px_#0000001a] dark:shadow-none`, y), t[3] = y, t[4] = b);
        let x = a == null && `sm:gap-3`,
            S;
        t[5] === x ? S = t[6] : (S = Ke(`flex flex-col items-center gap-2 text-center`, x), t[5] = x, t[6] = S);
        let C = a == null ? `text-2xl leading-7 font-[590] tracking-[0.07px] text-black sm:text-[36px] sm:leading-10 sm:tracking-[0.36px] dark:text-white` : `text-heading-app-emphasized tracking-[0.36px]`,
            w;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, Q.jsx)(Y, {
            ...X.heading
        }), t[7] = w) : w = t[7];
        let T;
        t[8] === C ? T = t[9] : (T = (0, Q.jsx)(`h1`, {
            id: `gift-card-redemption-heading`,
            className: C,
            children: w
        }), t[8] = C, t[9] = T);
        let E = a == null ? `text-token-text-secondary text-sm leading-5 font-normal tracking-[-0.15px] sm:text-lg sm:leading-[26px] sm:font-[590] sm:tracking-[-0.45px]` : `text-token-text-secondary text-body-regular tracking-[-0.32px]`,
            ee;
        t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (ee = (0, Q.jsx)(Y, {
            ...X.supportingCopy
        }), t[10] = ee) : ee = t[10];
        let D;
        t[11] === E ? D = t[12] : (D = (0, Q.jsx)(`p`, {
            className: E,
            children: ee
        }), t[11] = E, t[12] = D);
        let O;
        t[13] !== D || t[14] !== S || t[15] !== T ? (O = (0, Q.jsxs)(`div`, {
            className: S,
            children: [T, D]
        }), t[13] = D, t[14] = S, t[15] = T, t[16] = O) : O = t[16];
        let te = a == null ? `gap-5 sm:gap-6` : `gap-6`,
            k;
        t[17] === te ? k = t[18] : (k = Ke(`flex w-full max-w-[340px] flex-col`, te), t[17] = te, t[18] = k);
        let A;
        t[19] === p ? A = t[20] : (A = e => {
            e.preventDefault(), p()
        }, t[19] = p, t[20] = A);
        let j;
        t[21] !== i || t[22] !== m || t[23] !== l || t[24] !== _ || t[25] !== a || t[26] !== v ? (j = i != null && (a == null && i.destinations.length > 1 || i.isError || _) ? (0, Q.jsxs)(`div`, {
            className: `mx-auto flex w-full max-w-64 flex-col items-center gap-2 text-center`,
            children: [a == null && i.destinations.length > 1 ? (0, Q.jsxs)(Q.Fragment, {
                children: [(0, Q.jsx)(`label`, {
                    id: `gift-card-destination-label`,
                    htmlFor: `gift-card-destination`,
                    className: `text-sm font-medium`,
                    children: (0, Q.jsx)(Y, {
                        ...X.destinationLabel
                    })
                }), (0, Q.jsx)(qt, {
                    triggerId: `gift-card-destination`,
                    triggerClassName: `h-auto w-full justify-between gap-3 py-2`,
                    contentClassName: `w-64`,
                    ariaLabelledBy: `gift-card-destination-label`,
                    disabled: l,
                    value: i.selected == null ? `` : `${i.selected.product}:${i.selected.id}`,
                    placeholder: m.formatMessage(X.destinationPlaceholder),
                    options: i.destinations.map(nr),
                    onValueChange: e => {
                        let t = i.destinations.find(t => `${t.product}:${t.id}` === e);
                        t != null && i.onSelect(t)
                    }
                })]
            }) : null, _ ? (0, Q.jsxs)(`div`, {
                role: `status`,
                className: `text-token-text-secondary text-sm`,
                children: [(0, Q.jsx)(Y, {
                    ...X.destinationUnavailable
                }), v == null ? null : (0, Q.jsx)(we, {
                    type: `button`,
                    color: `ghost`,
                    disabled: l,
                    onClick: () => i.onSelect(v),
                    children: (0, Q.jsx)(Y, {
                        ...X.selectAlternativeDestination,
                        values: {
                            name: v.name
                        }
                    })
                })]
            }) : null, i.isError ? (0, Q.jsxs)(`div`, {
                role: `status`,
                className: `text-token-text-secondary text-sm`,
                children: [(0, Q.jsx)(Y, {
                    ...X.destinationsUnavailable
                }), (0, Q.jsx)(we, {
                    type: `button`,
                    color: `ghost`,
                    disabled: l,
                    onClick: i.onRetry,
                    children: (0, Q.jsx)(Y, {
                        ...X.destinationsRetry
                    })
                })]
            }) : null]
        }) : null, t[21] = i, t[22] = m, t[23] = l, t[24] = _, t[25] = a, t[26] = v, t[27] = j) : j = t[27];
        let M = s != null && s !== `temporarily_unavailable` && s !== `serial_number_required` && s !== `api_account_ineligible`,
            ne = a != null,
            N;
        t[28] !== f || t[29] !== u || t[30] !== M || t[31] !== ne ? (N = (0, Q.jsx)(Hn, {
            hasError: M,
            pin: u,
            onPinChange: f,
            isWalletFlow: ne
        }), t[28] = f, t[29] = u, t[30] = M, t[31] = ne, t[32] = N) : N = t[32];
        let P;
        t[33] !== r || t[34] !== s || t[35] !== c || t[36] !== d || t[37] !== a ? (P = c ? (0, Q.jsx)(Hn, {
            hasError: s != null && s !== `temporarily_unavailable` && s !== `api_account_ineligible`,
            pin: r,
            variant: `cardNumber`,
            onPinChange: d,
            isWalletFlow: a != null
        }) : null, t[33] = r, t[34] = s, t[35] = c, t[36] = d, t[37] = a, t[38] = P) : P = t[38];
        let F;
        t[39] !== o || t[40] !== i || t[41] !== l || t[42] !== h || t[43] !== a ? (F = i != null && (a != null || i.destinations.length === 1 && h?.product === `api`) ? (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-2`,
            children: [(0, Q.jsx)(wn, {
                destinations: i.destinations,
                selected: i.selected,
                disabled: l,
                onSelect: i.onSelect,
                onChangeLogin: a?.onChange,
                open: o
            }), a != null && h?.product === `api` ? (0, Q.jsx)(`p`, {
                className: `text-token-text-secondary text-caption-regular`,
                children: (0, Q.jsx)(Y, {
                    ...X.apiFundsRestriction,
                    values: {
                        name: h.name
                    }
                })
            }) : null]
        }) : null, t[39] = o, t[40] = i, t[41] = l, t[42] = h, t[43] = a, t[44] = F) : F = t[44];
        let I;
        t[45] !== h || t[46] !== a ? (I = a == null && h?.product === `api` ? (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary text-xs`,
            children: (0, Q.jsx)(Y, {
                ...X.apiFundsRestriction,
                values: {
                    name: h.name
                }
            })
        }) : null, t[45] = h, t[46] = a, t[47] = I) : I = t[47];
        let L = !n,
            R;
        t[48] === Symbol.for(`react.memo_cache_sentinel`) ? (R = (0, Q.jsx)(Y, {
            ...X.redeemButton
        }), t[48] = R) : R = t[48];
        let z;
        t[49] !== l || t[50] !== L ? (z = (0, Q.jsx)(we, {
            className: `dark:hover:bg-token-interactive-bg-primary-hover! dark:active:bg-token-interactive-bg-primary-press! h-12 text-base! leading-[26px]! dark:bg-white! dark:active:opacity-100! dark:disabled:bg-white/40! dark:disabled:opacity-100! dark:disabled:hover:bg-white/40! dark:disabled:active:bg-white/40!`,
            color: `primary`,
            disabled: L,
            fullWidth: !0,
            loading: l,
            size: `large`,
            type: `submit`,
            children: R
        }), t[49] = l, t[50] = L, t[51] = z) : z = t[51];
        let B;
        t[52] === Symbol.for(`react.memo_cache_sentinel`) ? (B = (0, Q.jsx)(`p`, {
            className: `text-token-text-tertiary w-full text-center text-xs leading-4`,
            children: (0, Q.jsx)(Y, {
                ...X.terms,
                values: {
                    terms: rr
                }
            })
        }), t[52] = B) : B = t[52];
        let re;
        t[53] === z ? re = t[54] : (re = (0, Q.jsxs)(`div`, {
            className: `flex w-full flex-col gap-4`,
            children: [z, B]
        }), t[53] = z, t[54] = re);
        let V;
        t[55] !== k || t[56] !== A || t[57] !== j || t[58] !== N || t[59] !== P || t[60] !== F || t[61] !== I || t[62] !== re ? (V = (0, Q.jsxs)(`form`, {
            "aria-labelledby": `gift-card-redemption-heading`,
            className: k,
            onSubmit: A,
            children: [j, N, P, F, I, re]
        }), t[55] = k, t[56] = A, t[57] = j, t[58] = N, t[59] = P, t[60] = F, t[61] = I, t[62] = re, t[63] = V) : V = t[63];
        let H;
        return t[64] !== O || t[65] !== V || t[66] !== b ? (H = (0, Q.jsxs)(`section`, {
            "aria-labelledby": `gift-card-redemption-heading`,
            className: b,
            children: [O, V]
        }), t[64] = O, t[65] = V, t[66] = b, t[67] = H) : H = t[67], H
    }, gr = e => {
        "use forget";
        let t = (0, sr.c)(38),
            {
                canUpgrade: n,
                isSwitchingAccount: r,
                redeemedGiftCard: i,
                onContinueInChatgpt: a
            } = e,
            o = lt(),
            s = (0, cr.useRef)(null),
            c;
        t[0] !== o || t[1] !== i ? (c = Bt({
            intl: o,
            ...i
        }), t[0] = o, t[1] = i, t[2] = c) : c = t[2];
        let l = c,
            u, d;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (u = () => {
            s.current?.focus()
        }, d = [], t[3] = u, t[4] = d) : (u = t[3], d = t[4]), (0, cr.useEffect)(u, d);
        let f;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary text-sm leading-5 font-normal tracking-[-0.15px] lining-nums proportional-nums sm:text-lg sm:leading-[26px] sm:font-[590] sm:tracking-[-0.45px]`,
            children: (0, Q.jsx)(Y, {
                ...X.successEyebrow
            })
        }), t[5] = f) : f = t[5];
        let p;
        t[6] !== l || t[7] !== i.destination.name || t[8] !== i.destination.product || t[9] !== i.status ? (p = (0, Q.jsxs)(`div`, {
            className: `flex w-full flex-col items-center gap-2`,
            children: [f, (0, Q.jsx)(`h1`, {
                ref: s,
                className: `max-w-full text-2xl leading-7 font-[590] tracking-[0.07px] text-black outline-none sm:text-[36px] sm:leading-10 sm:tracking-[0.36px] dark:text-white`,
                id: `gift-card-redemption-success-heading`,
                tabIndex: -1,
                children: i.destination.product === `api` ? (0, Q.jsx)(Y, {
                    ...i.status === `already_redeemed` ? X.apiAlreadyRedeemedHeading : X.apiSuccessHeading,
                    values: {
                        amount: l,
                        name: i.destination.name
                    }
                }) : (0, Q.jsx)(Y, {
                    ...X.successHeading,
                    values: {
                        amount: l
                    }
                })
            })]
        }), t[6] = l, t[7] = i.destination.name, t[8] = i.destination.product, t[9] = i.status, t[10] = p) : p = t[10];
        let m = i.destination.product === `api` ? `a` : `link`,
            h;
        t[11] !== n || t[12] !== a || t[13] !== i.destination.product ? (h = e => {
            i.destination.product === `chatgpt` && (e.preventDefault(), a(n ? ur : `/`))
        }, t[11] = n, t[12] = a, t[13] = i.destination.product, t[14] = h) : h = t[14];
        let g;
        t[15] !== n || t[16] !== i.destination.id || t[17] !== i.destination.product ? (g = i.destination.product === `api` ? gn(i.destination.id) : n ? ur : `/`, t[15] = n, t[16] = i.destination.id, t[17] = i.destination.product, t[18] = g) : g = t[18];
        let _ = i.destination.product === `api` ? X.continueToApiButton : n ? X.upgradePlanButton : X.continueToChatgptButton,
            v;
        t[19] === _ ? v = t[20] : (v = (0, Q.jsx)(Y, {
            ..._
        }), t[19] = _, t[20] = v);
        let y;
        t[21] !== r || t[22] !== v || t[23] !== m || t[24] !== h || t[25] !== g ? (y = (0, Q.jsx)(we, {
            as: m,
            className: `dark:hover:bg-token-interactive-bg-primary-hover! dark:active:bg-token-interactive-bg-primary-press! h-12 min-w-[155px] px-6 text-base! dark:bg-white! dark:active:opacity-100!`,
            color: `primary`,
            disabled: r,
            onClick: h,
            size: `large`,
            to: g,
            children: v
        }), t[21] = r, t[22] = v, t[23] = m, t[24] = h, t[25] = g, t[26] = y) : y = t[26];
        let b;
        t[27] !== n || t[28] !== r || t[29] !== a || t[30] !== i.destination.product ? (b = n && i.destination.product === `chatgpt` ? (0, Q.jsx)(it, {
            "aria-disabled": r,
            className: `text-token-text-secondary rounded-sm [font-feature-settings:'liga'_off,'clig'_off] text-sm leading-5 font-[590] tracking-[-0.15px] underline decoration-dotted [text-underline-position:from-font] focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-base sm:leading-[26px] sm:tracking-[-0.32px]`,
            to: `/`,
            onClick: e => {
                e.preventDefault(), r || a(`/`)
            },
            children: (0, Q.jsx)(Y, {
                ...X.continueToChatgptLink
            })
        }) : null, t[27] = n, t[28] = r, t[29] = a, t[30] = i.destination.product, t[31] = b) : b = t[31];
        let x;
        t[32] !== y || t[33] !== b ? (x = (0, Q.jsxs)(`div`, {
            className: `flex flex-col items-center gap-4`,
            children: [y, b]
        }), t[32] = y, t[33] = b, t[34] = x) : x = t[34];
        let S;
        return t[35] !== x || t[36] !== p ? (S = (0, Q.jsxs)(`section`, {
            "aria-labelledby": `gift-card-redemption-success-heading`,
            className: `bg-token-bg-primary flex w-full flex-col items-center gap-6 rounded-3xl p-6 text-center shadow-[0_20px_25px_-5px_#0000001a] sm:p-16 dark:shadow-none`,
            children: [p, x]
        }), t[35] = x, t[36] = p, t[37] = S) : S = t[37], S
    }, _r = e => {
        "use forget";
        let t = (0, sr.c)(75),
            {
                accountSwitcherRedirectUrl: n,
                loginPicker: r,
                signedInIdentity: i,
                destinationMenuOpen: a,
                canRedeem: o,
                canUpgrade: s,
                cardNumber: c,
                destinationPicker: l,
                error: u,
                isCardNumberRequired: d,
                isRegionUnavailable: f,
                isSubmitting: p,
                isSwitchingAccount: m,
                isUsOnlyCountryRestriction: h,
                isWorkspaceOwnerUnavailable: g,
                pin: _,
                profileMenuOpen: v,
                redeemedGiftCard: y,
                onBack: b,
                onCardNumberChange: x,
                onContinueInChatgpt: S,
                onDismissError: C,
                onPinChange: w,
                onRedeem: T
            } = e,
            E = n === void 0 ? `/redeem` : n,
            ee = s === void 0 || s,
            D = f !== void 0 && f,
            O = m !== void 0 && m,
            te = h === void 0 || h,
            k = g !== void 0 && g,
            A = lt(),
            j;
        t[0] === A ? j = t[1] : (j = A.formatMessage(X.flowAccessibleTitle), t[0] = A, t[1] = j);
        let M = j,
            ne = y == null ? _.length > 0 || c.length > 0 ? `editing` : `idle` : `success`,
            N;
        t[2] === A ? N = t[3] : (N = A.formatMessage(X.alreadyRedeemedErrorToast), t[2] = A, t[3] = N);
        let P;
        t[4] === A ? P = t[5] : (P = A.formatMessage(X.currencyIneligibleErrorToast), t[4] = A, t[5] = P);
        let F;
        t[6] === A ? F = t[7] : (F = A.formatMessage(X.cardNumberRequiredErrorToast), t[6] = A, t[7] = F);
        let I;
        t[8] === A ? I = t[9] : (I = A.formatMessage(X.apiAccountIneligibleErrorToast), t[8] = A, t[9] = I);
        let L;
        t[10] === A ? L = t[11] : (L = A.formatMessage(X.dailyLimitErrorToast), t[10] = A, t[11] = L);
        let R;
        t[12] === A ? R = t[13] : (R = A.formatMessage(X.attemptLimitErrorToast), t[12] = A, t[13] = R);
        let z;
        t[14] === A ? z = t[15] : (z = A.formatMessage(X.invalidOrUnavailableErrorToast), t[14] = A, t[15] = z);
        let B;
        t[16] === A ? B = t[17] : (B = A.formatMessage(X.temporarilyUnavailableErrorToast), t[16] = A, t[17] = B);
        let V;
        t[18] !== F || t[19] !== I || t[20] !== L || t[21] !== R || t[22] !== z || t[23] !== B || t[24] !== N || t[25] !== P ? (V = {
            already_redeemed: N,
            currency_ineligible: P,
            serial_number_required: F,
            api_account_ineligible: I,
            daily_limit: L,
            attempt_limit: R,
            generic: z,
            temporarily_unavailable: B
        }, t[18] = F, t[19] = I, t[20] = L, t[21] = R, t[22] = z, t[23] = B, t[24] = N, t[25] = P, t[26] = V) : V = t[26];
        let H = u == null ? null : V[u],
            ie;
        t[27] !== H || t[28] !== C ? (ie = H == null ? null : (0, Q.jsx)(`div`, {
            className: `pointer-events-none fixed inset-0 z-[130] mx-auto my-3 flex max-w-[728px] flex-col items-stretch justify-start md:pb-5`,
            children: (0, Q.jsx)(le, {
                alertClassName: `!border-[var(--red-600)] !bg-[var(--red-600)]`,
                duration: 5,
                hasCloseButton: !1,
                intent: re.danger,
                onRemove: C,
                title: H
            })
        }), t[27] = H, t[28] = C, t[29] = ie) : ie = t[29];
        let U;
        t[30] !== ne || t[31] !== D || t[32] !== k ? (U = !D && !k ? (0, Q.jsx)($n, {
            state: ne
        }) : null, t[30] = ne, t[31] = D, t[32] = k, t[33] = U) : U = t[33];
        let ae = D || k,
            W = i != null,
            oe = p || O || r?.pendingLoginId != null,
            se;
        t[34] !== E || t[35] !== b || t[36] !== v || t[37] !== ae || t[38] !== W || t[39] !== oe ? (se = (0, Q.jsx)(mr, {
            accountSwitcherRedirectUrl: E,
            isRegionUnavailable: ae,
            profileMenuOpen: v,
            isWalletFlow: W,
            isSubmitting: oe,
            onBack: b
        }), t[34] = E, t[35] = b, t[36] = v, t[37] = ae, t[38] = W, t[39] = oe, t[40] = se) : se = t[40];
        let ce = D || k ? `items-center py-28` : `items-start pt-20 pb-6 sm:items-center sm:py-28`,
            ue;
        t[41] === ce ? ue = t[42] : (ue = Ke(`relative z-10 flex min-h-full justify-center px-6`, ce), t[41] = ce, t[42] = ue);
        let G;
        t[43] !== o || t[44] !== ee || t[45] !== c || t[46] !== a || t[47] !== l || t[48] !== u || t[49] !== d || t[50] !== D || t[51] !== p || t[52] !== O || t[53] !== te || t[54] !== k || t[55] !== r || t[56] !== x || t[57] !== S || t[58] !== w || t[59] !== T || t[60] !== _ || t[61] !== y || t[62] !== i ? (G = r == null ? D || k ? (0, Q.jsx)(pr, {
            isUsOnlyCountryRestriction: te,
            isWorkspaceOwnerUnavailable: k && !D
        }) : y == null ? (0, Q.jsx)(`div`, {
            className: Ke(`w-full`, i == null ? `max-w-[468px]` : `max-w-[436px]`),
            children: (0, Q.jsx)(hr, {
                canRedeem: o,
                cardNumber: c,
                destinationPicker: l,
                signedInIdentity: i,
                destinationMenuOpen: a,
                error: u,
                isCardNumberRequired: d,
                isSubmitting: p,
                pin: _,
                onCardNumberChange: x,
                onPinChange: w,
                onRedeem: T
            })
        }) : (0, Q.jsx)(`div`, {
            className: `w-full max-w-[523px]`,
            children: (0, Q.jsx)(gr, {
                canUpgrade: ee,
                isSwitchingAccount: O,
                redeemedGiftCard: y,
                onContinueInChatgpt: S
            })
        }) : (0, Q.jsx)(`div`, {
            className: `w-full max-w-[436px]`,
            children: (0, Q.jsx)(Sn, {
                ...r
            })
        }), t[43] = o, t[44] = ee, t[45] = c, t[46] = a, t[47] = l, t[48] = u, t[49] = d, t[50] = D, t[51] = p, t[52] = O, t[53] = te, t[54] = k, t[55] = r, t[56] = x, t[57] = S, t[58] = w, t[59] = T, t[60] = _, t[61] = y, t[62] = i, t[63] = G) : G = t[63];
        let de;
        t[64] !== ue || t[65] !== G ? (de = (0, Q.jsx)(`main`, {
            className: ue,
            children: G
        }), t[64] = ue, t[65] = G, t[66] = de) : de = t[66];
        let fe;
        t[67] !== U || t[68] !== se || t[69] !== de ? (fe = (0, Q.jsxs)(pt.Contents, {
            className: `bg-token-bg-primary text-token-text-primary relative isolate overflow-x-hidden overflow-y-auto dark:bg-black`,
            children: [U, se, de]
        }), t[67] = U, t[68] = se, t[69] = de, t[70] = fe) : fe = t[70];
        let pe;
        return t[71] !== M || t[72] !== ie || t[73] !== fe ? (pe = (0, Q.jsxs)(pt, {
            accessibleTitle: M,
            className: `bg-token-bg-primary! text-token-text-primary z-40! font-['SF_Pro','SF_Pro_Display','SF_Pro_Text',var(--font-sans)] dark:bg-black!`,
            onEscapeKeyDown: ir,
            onOpenAutoFocus: ar,
            open: !0,
            onOpenChange: or,
            children: [ie, fe]
        }), t[71] = M, t[72] = ie, t[73] = fe, t[74] = pe) : pe = t[74], pe
    }
}));

function yr(e, t, n) {
    switch (e) {
        case `billing`:
        case `business_billing`:
            return t == null ? void 0 : t ? n ? `/admin/billing` : `/` : `/#settings/Billing`;
        case `profile_menu`:
            return `/`;
        default:
            return
    }
}

function br(e, t) {
    return {
        id: `saved-${t}`,
        name: e.name ?? e.email ?? E(e.phoneNumber) ?? ``,
        email: e.email ?? E(e.phoneNumber) ?? ``,
        imageUrl: e.userImageUrl
    }
}

function xr(e) {
    return {
        workspaceAccountId: e.id,
        workspaceName: e.name ?? null,
        workspaceImageUrl: e.data.profilePictureUrl ?? null,
        isPersonalWorkspace: e.isPersonalAccount(),
        isDeactivated: e.isDeactivated()
    }
}

function Sr(e) {
    return {
        product: `api`,
        id: e.id,
        name: e.name
    }
}

function Cr(e) {
    return e.canAccessWithCurrentSession && !e.isDeactivated() && (e.isPersonalAccount() || e.isOwnerOfAccount())
}
var wr, $, Tr, Er, Dr, Or, kr, Ar, jr = e((() => {
    wr = st(), en(), Mt(), I(), Zt(), _t(), Ce(), j(), D(), O(), St(), F(), Xt(), ln(), mn(), _n(), vn(), Ht(), Re(), a(), je(), d(), _e(), Te(), be(), U(), Je(), ot(), $ = t(rt()), nt(), Xe(), vr(), Tr = Ze(), Er = 16, Dr = 20, Or = e => `${e.product}:${e.id}`, kr = e => Number.isSafeInteger(e.amount) && typeof e.currency == `string` && Number.isInteger(T(e.currency)), Ar = () => {
        "use forget";
        let e = (0, wr.c)(119),
            t = tt(),
            r = lt(),
            i = et(),
            [a] = Qe(),
            o;
        e[0] === a ? o = e[1] : (o = a.get(`api_organization_id`), e[0] = a, e[1] = o);
        let s = o,
            c = Ft(a),
            [u, d] = (0, $.useState)(null),
            [p, m] = (0, $.useState)(!1),
            h;
        e[2] === p ? h = e[3] : (h = Ue(`225453312`).get(`serial_number_required`, !1) || p, e[2] = p, e[3] = h);
        let y = h,
            b = l(),
            x = de(),
            S = Pe(),
            C = ye(fn),
            T;
        e[4] === b ? T = e[5] : (T = Lt(b), e[4] = b, e[5] = T);
        let {
            countryRestrictionsEnabled: ee,
            isCountryEligible: D,
            isUsOnlyCountryRestriction: O
        } = T, A = ee && !D, j = ye(_), M = ye(pn), N = C && !A, F = (0, $.useRef)(N), I, L;
        e[6] === N ? (I = e[7], L = e[8]) : (I = () => {
            let e = N && !F.current;
            F.current = N, e && dn()
        }, L = [N], e[6] = N, e[7] = I, e[8] = L), (0, $.useEffect)(I, L);
        let [z, B] = (0, $.useState)(Se), re;
        e[9] === a ? re = e[10] : (re = a.get(`account_selected`), e[9] = a, e[10] = re);
        let [V, H] = (0, $.useState)(re === `1`), [ie, U] = (0, $.useState)(!1), [ae, W] = (0, $.useState)(null), [oe, ce] = (0, $.useState)(!1), le = (0, $.useRef)(!1), ue;
        e[11] !== j.data || e[12] !== j.isSuccess || e[13] !== C ? (ue = C && j.isSuccess && gt(j.data), e[11] = j.data, e[12] = j.isSuccess, e[13] = C, e[14] = ue) : ue = e[14];
        let G = ue,
            fe = S?.user?.email ?? x?.email ?? ``,
            pe = S?.user?.id ?? x?.id,
            he = {
                id: `current`,
                name: S?.user?.name ?? x?.name ?? fe,
                email: fe || E(x?.phone_number) || ``,
                imageUrl: S?.user?.image ?? S?.user?.picture ?? x?.picture
            },
            ge = G ? z.filter(e => e.sessionToken !== S?.sessionToken && (pe == null || e.userId !== pe) && (k(fe) == null || k(e.email) !== k(fe))) : [],
            _e = [he, ...ge.map(br)],
            ve = C && !V && (_e.length > 1 || ie),
            be;
        e[15] !== j.data || e[16] !== C || e[17] !== B ? (be = () => {
            if (!C || j.data == null) return;
            let e = j.data;
            queueMicrotask(() => {
                B(g(Pe(), e.accountItems.map(xr)))
            })
        }, e[15] = j.data, e[16] = C, e[17] = B, e[18] = be) : be = e[18];
        let xe;
        e[19] !== j.data || e[20] !== C ? (xe = [j.data, C], e[19] = j.data, e[20] = C, e[21] = xe) : xe = e[21], (0, $.useEffect)(be, xe);
        let [Ce, we] = (0, $.useState)(null), Te = ke(), Ee = P.getCookie(R.Workspace), K = b?.id ?? (Te?.isPersonalAccount() === !0 && (Ee == null || Ee === `personal` || Ee === Te.id) ? Te.id : void 0), De = b ?? Te, Oe = j.data?.accountItems ?? (b == null ? [] : [b]), Ae = (N ? M.data?.organizations ?? [] : []).map(Sr), je = [...Oe.filter(Cr).map(e => ({
            product: `chatgpt`,
            id: e.id,
            name: e.isPersonalAccount() ? (C ? he.name : ``) || r.formatMessage(X.personalDestination) : e.name ?? e.id,
            imageUrl: e.isPersonalAccount() ? he.imageUrl : e.data.profilePictureUrl
        })), ...!A && Oe.length === 0 && K != null ? [{
            product: `chatgpt`,
            id: K,
            name: r.formatMessage(X.personalDestination)
        }] : [], ...Ae], Me = c == null ? void 0 : c.product === `api` ? Ae.find(e => e.id === c.id) ?? {
            ...c,
            name: r.formatMessage(X.apiDestination)
        } : je.find(e => e.product === `chatgpt` && e.id === c.id) ?? {
            ...c,
            name: r.formatMessage(X.chatgptDestination)
        }, q = Ce ?? Me, {
            options: Ne,
            destination: J
        } = Rt({
            destinations: je,
            selection: q == null ? void 0 : {
                target: q,
                destination: q
            },
            activeAccountId: K,
            policy: {
                apiEnabled: N,
                countryEligible: !A
            },
            apiAccountIneligible: u === `api_account_ineligible`,
            defaultChatgptDestination: K == null ? void 0 : {
                product: `chatgpt`,
                id: K,
                name: b?.name ?? r.formatMessage(X.personalDestination)
            }
        }), Fe = N || c != null || Ce != null, Ie = Pt(J, q != null, {
            enabled: N,
            accounts: j,
            apiOrganizations: M
        }) && (!N || M.isSuccess || M.isError) && (!Fe || J != null && Ne.some(e => Or(e) === Or(J))), Le = b ?? (K == null ? null : Te), Re = yr(a.get(`entry_point`), Le?.isWorkspaceAccount(), b != null && xt(b.data.role)), ze;
        e[22] !== j.isSuccess || e[23] !== M || e[24] !== N || e[25] !== b || e[26] !== J?.product || e[27] !== Ne || e[28] !== q ? (ze = q == null && J?.product !== `api` && b?.isWorkspaceAccount() === !0 && !b.isOwnerOfAccount() && (!N || j.isSuccess && M.isSuccess && Ne.length === 0), e[22] = j.isSuccess, e[23] = M, e[24] = N, e[25] = b, e[26] = J?.product, e[27] = Ne, e[28] = q, e[29] = ze) : ze = e[29];
        let Be = ze,
            [He, We] = (0, $.useState)(``),
            [Ge, Ke] = (0, $.useState)(``),
            [qe, Je] = (0, $.useState)(!1),
            [Ye, Xe] = (0, $.useState)(null),
            [Ze, $e] = (0, $.useState)(!1),
            Y = (0, $.useRef)(!1),
            nt = Ye?.destination ?? J,
            rt;
        e[30] !== De || e[31] !== Oe || e[32] !== nt ? (rt = nt?.product === `chatgpt` ? Oe.find(e => e.id === nt.id) ?? (De?.id === nt.id ? De : void 0) : void 0, e[30] = De, e[31] = Oe, e[32] = nt, e[33] = rt) : rt = e[33];
        let it = rt,
            at = (0, $.useRef)(null),
            ot = (0, $.useRef)(!1),
            st = (0, $.useRef)(void 0),
            ct, ut;
        e[34] === K ? (ct = e[35], ut = e[36]) : (ct = () => {
            K == null || st.current === K || (st.current = K, Yt({
                step: `redemption_page`,
                outcome: `shown`,
                accountId: K
            }))
        }, ut = [K], e[34] = K, e[35] = ct, e[36] = ut), (0, $.useEffect)(ct, ut);
        let dt = Ge.length === Er && (!y || He.length === Dr) && Ie && !Be && !qe,
            ft, pt;
        e[37] === Symbol.for(`react.memo_cache_sentinel`) ? (ft = () => () => {
            at.current?.abort()
        }, pt = [], e[37] = ft, e[38] = pt) : (ft = e[37], pt = e[38]), (0, $.useEffect)(ft, pt);
        let mt;
        e[39] === d ? mt = e[40] : (mt = e => {
            Ke(e), d(null)
        }, e[39] = d, e[40] = mt);
        let ht = mt,
            _t;
        e[41] === d ? _t = e[42] : (_t = e => {
            We(e), d(null)
        }, e[41] = d, e[42] = _t);
        let vt = _t,
            yt;
        e[43] !== M || e[44] !== He || e[45] !== J || e[46] !== Ie || e[47] !== y || e[48] !== Be || e[49] !== Ge || e[50] !== d || e[51] !== we || e[52] !== m ? (yt = async () => {
            let e = J?.product === `chatgpt` ? J.id : void 0;
            if (Ge.length !== Er || y && He.length !== Dr || J == null || !Ie || Be || ot.current) return;
            ot.current = !0, at.current?.abort();
            let t = new AbortController;
            at.current = t, we(J), Je(!0), d(null), Yt({
                step: `redemption_submit`,
                outcome: `submitted`,
                accountId: e
            });
            try {
                let n = y ? {
                        pin: Ge,
                        serial_number: He
                    } : {
                        pin: Ge
                    },
                    r = J.product === `api` ? await on({
                        organization_id: J.id,
                        ...n
                    }, t.signal) : await cn({
                        account_id: J.id,
                        ...n
                    }, t.signal);
                !t.signal.aborted && kr(r) ? r.status === `redeemed` || r.status === `already_redeemed` && J.product === `api` ? (Yt({
                    step: `redemption_result`,
                    outcome: r.status === `redeemed` ? `succeeded` : `already_redeemed`,
                    accountId: e,
                    walletAmountMinor: r.status === `redeemed` ? r.amount : void 0,
                    currency: r.status === `redeemed` ? r.currency : void 0
                }), Xe({
                    status: r.status,
                    amount: r.amount,
                    currency: r.currency,
                    destination: J
                })) : r.status === `already_redeemed` ? (Yt({
                    step: `redemption_result`,
                    outcome: `already_redeemed`,
                    accountId: e
                }), d(`already_redeemed`)) : (Yt({
                    step: `redemption_result`,
                    outcome: `failed`,
                    accountId: e
                }), d(`generic`)) : t.signal.aborted || (Yt({
                    step: `redemption_result`,
                    outcome: `failed`,
                    accountId: e
                }), d(`generic`))
            } catch (n) {
                let r = n;
                if (!t.signal.aborted && !se(r)) {
                    Yt({
                        step: `redemption_result`,
                        outcome: `failed`,
                        accountId: e
                    });
                    let t = sn(r)?.code,
                        n = It(t, J.product);
                    d(n), n === `api_account_ineligible` ? M.refetch() : n === `serial_number_required` && m(!0)
                }
            }
            at.current === t && (ot.current = !1, Je(!1))
        }, e[43] = M, e[44] = He, e[45] = J, e[46] = Ie, e[47] = y, e[48] = Be, e[49] = Ge, e[50] = d, e[51] = we, e[52] = m, e[53] = yt) : yt = e[53];
        let bt = yt,
            St;
        e[54] !== r || e[55] !== i || e[56] !== Ye || e[57] !== K ? (St = async e => {
            if (!(Ye?.destination.product !== `chatgpt` || Y.current)) {
                if (Ye.destination.id === K) {
                    v(e);
                    return
                }
                Y.current = !0, $e(!0);
                try {
                    let {
                        updatedAccount: t,
                        willRedirect: n
                    } = await Ve(i, Ye.destination.id, r, me(), !0, e);
                    !t && !n ? me().danger(r.formatMessage(X.accountSwitchError)) : n || v(e)
                } catch (e) {
                    let t = e;
                    f.addError(t, {
                        callLocation: `gift_card_redemption_success_account_switch`,
                        accountId: Ye.destination.id
                    }), me().danger(r.formatMessage(X.accountSwitchError))
                }
                Y.current = !1, $e(!1)
            }
        }, e[54] = r, e[55] = i, e[56] = Ye, e[57] = K, e[58] = St) : St = e[58];
        let Ct = St,
            wt;
        e[59] !== q || e[60] !== a ? (wt = () => {
            let e = new URL($t(a, q), window.location.origin);
            return e.searchParams.set(`account_selected`, `1`), e
        }, e[59] = q, e[60] = a, e[61] = wt) : wt = e[61];
        let Tt = wt,
            Et;
        e[62] !== G || e[63] !== ge || e[64] !== Tt || e[65] !== U || e[66] !== H || e[67] !== ce || e[68] !== W || e[69] !== B ? (Et = async e => {
            if (le.current || ot.current) return;
            if (ce(!1), e === `current`) {
                H(!0);
                return
            }
            let t = ge.find((t, n) => `saved-${n}` === e);
            if (!(t == null || !G)) {
                U(!0), le.current = !0, W(e);
                try {
                    f.addAction(`gift_card_redemption.login_switch_started`), await ne(t.sessionToken), f.addAction(`gift_card_redemption.login_switch_succeeded`);
                    let e = Tt();
                    v(`${e.pathname}${e.search}`)
                } catch (e) {
                    let n = e;
                    f.addError(n, {
                        callLocation: `gift_card_redemption_login_switch`
                    }), w(t.sessionToken), B(Se()), ce(!0), W(null), le.current = !1
                }
            }
        }, e[62] = G, e[63] = ge, e[64] = Tt, e[65] = U, e[66] = H, e[67] = ce, e[68] = W, e[69] = B, e[70] = Et) : Et = e[70];
        let Dt = Et,
            Ot;
        e[71] !== G || e[72] !== Tt || e[73] !== z ? (Ot = e => {
            if (!G || le.current) return;
            let t = () => {
                let t = Tt();
                t.searchParams.set(`account_switch`, `true`), t.searchParams.set(`account_switch_login`, `add_account`), P.setCookie(R.SignupRedirectUrl, `${t.pathname}${t.search}`, {
                    maxAge: 10800
                }), n({
                    fallbackScreenHint: e,
                    useFallbackScreenHint: !0,
                    callbackUrl: t.toString(),
                    skipLoginModal: !0
                })
            };
            z.length >= 2 ? te(Qt, {
                accounts: z,
                onLoggedOutNonActive: t,
                postLogoutCallbackUrl: Tt().toString(),
                postLogoutAction: e === `signup` ? `open_add_account_signup` : `open_add_account_login`
            }) : t()
        }, e[71] = G, e[72] = Tt, e[73] = z, e[74] = Ot) : Ot = e[74];
        let kt = ve ? {
                logins: _e,
                pendingLoginId: ae,
                hasError: oe,
                canAddAccount: G,
                onSelect: e => {
                    Dt(e)
                },
                onAddAccount: Ot
            } : void 0,
            At = C ? {
                email: he.email,
                onChange: G ? () => {
                    ot.current || (Ke(``), We(``), d(null), B(Se()), H(!1), U(!0))
                } : void 0
            } : void 0,
            jt;
        e[75] !== q || e[76] !== a ? (jt = $t(a, q), e[75] = q, e[76] = a, e[77] = jt) : jt = e[77];
        let Mt;
        e[78] === it ? Mt = e[79] : (Mt = it?.isProOrPromax() !== !0 && it?.isWorkspaceAccount() !== !0, e[78] = it, e[79] = Mt);
        let Nt;
        e[80] !== j || e[81] !== M || e[82] !== N || e[83] !== J || e[84] !== Ne || e[85] !== Fe || e[86] !== d || e[87] !== we ? (Nt = Fe ? {
            destinations: Ne,
            selected: J,
            isLoading: N && (j.isFetching || M.isFetching),
            isError: N && (j.isError || M.isError),
            onRetry: () => {
                j.refetch(), M.refetch()
            },
            onSelect: e => {
                ot.current || (we(e), d(null))
            }
        } : void 0, e[80] = j, e[81] = M, e[82] = N, e[83] = J, e[84] = Ne, e[85] = Fe, e[86] = d, e[87] = we, e[88] = Nt) : Nt = e[88];
        let zt = A && q == null,
            Bt;
        e[89] !== Re || e[90] !== t || e[91] !== s || e[92] !== a ? (Bt = a.get(`entry_point`) === `api_billing` && s != null ? () => {
            window.location.assign(gn(s))
        } : Re == null ? void 0 : () => {
            t(Re, {
                replace: !0
            })
        }, e[89] = Re, e[90] = t, e[91] = s, e[92] = a, e[93] = Bt) : Bt = e[93];
        let Vt;
        e[94] === d ? Vt = e[95] : (Vt = () => d(null), e[94] = d, e[95] = Vt);
        let Ht;
        return e[96] !== dt || e[97] !== He || e[98] !== u || e[99] !== vt || e[100] !== Ct || e[101] !== ht || e[102] !== bt || e[103] !== y || e[104] !== qe || e[105] !== Ze || e[106] !== O || e[107] !== Be || e[108] !== Ge || e[109] !== Ye || e[110] !== kt || e[111] !== At || e[112] !== jt || e[113] !== Mt || e[114] !== Nt || e[115] !== zt || e[116] !== Bt || e[117] !== Vt ? (Ht = (0, Tr.jsx)(_r, {
            loginPicker: kt,
            signedInIdentity: At,
            accountSwitcherRedirectUrl: jt,
            canRedeem: dt,
            canUpgrade: Mt,
            cardNumber: He,
            destinationPicker: Nt,
            error: u,
            isCardNumberRequired: y,
            isRegionUnavailable: zt,
            isSubmitting: qe,
            isSwitchingAccount: Ze,
            isUsOnlyCountryRestriction: O,
            isWorkspaceOwnerUnavailable: Be,
            pin: Ge,
            redeemedGiftCard: Ye,
            onBack: Bt,
            onCardNumberChange: vt,
            onContinueInChatgpt: Ct,
            onDismissError: Vt,
            onPinChange: ht,
            onRedeem: bt
        }), e[96] = dt, e[97] = He, e[98] = u, e[99] = vt, e[100] = Ct, e[101] = ht, e[102] = bt, e[103] = y, e[104] = qe, e[105] = Ze, e[106] = O, e[107] = Be, e[108] = Ge, e[109] = Ye, e[110] = kt, e[111] = At, e[112] = jt, e[113] = Mt, e[114] = Nt, e[115] = zt, e[116] = Bt, e[117] = Vt, e[118] = Ht) : Ht = e[118], Ht
    }
}));

function Mr() {}
var Nr, Pr, Fr, Ir, Lr, Rr, zr = e((() => {
    Nr = st(), ue(), ut(), wt(), B(), O(), h(), r(), Pr = t(rt()), nt(), er(), vn(), Fr = Ze(), Ir = N.ACCESS_FLOW_ENTRY_POINT_LOGIN_OR_SIGNUP_PAGE, Lr = L.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_PAGE, Rr = e => {
        "use forget";
        let t = (0, Nr.c)(22),
            {
                callbackUrl: n,
                onHomeClick: r
            } = e,
            i = lt(),
            a;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = {
            resetAuthSessionLoggingId: !0
        }, t[0] = a) : a = t[0];
        let o = H(a),
            c = o?.[z],
            l, d;
        t[1] === c ? (l = t[2], d = t[3]) : (l = () => {
            c != null && (Ae({
                authSessionLoggingId: c,
                actionType: We.ACCESS_FLOW_ENTRY_ACTION_TYPE_PAGE_LOADED,
                entryPoint: Ir,
                entryTrigger: u.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC
            }), s.logStructuredEvent(`AccessFlowPageLoad`, {
                authSessionLoggingId: c,
                page: Lr
            }))
        }, d = [c], t[1] = c, t[2] = l, t[3] = d), (0, Pr.useEffect)(l, d);
        let f;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, Fr.jsx)(Qn, {}), t[4] = f) : f = t[4];
        let p;
        t[5] === i ? p = t[6] : (p = i.formatMessage(X.homeLinkLabel), t[5] = i, t[6] = p);
        let m;
        t[7] === r ? m = t[8] : (m = e => {
            e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && r()
        }, t[7] = r, t[8] = m);
        let h;
        t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, Fr.jsx)(vt, {
            className: `h-auto w-[81px]`
        }), t[9] = h) : h = t[9];
        let g;
        t[10] !== p || t[11] !== m ? (g = (0, Fr.jsx)(`header`, {
            className: `absolute inset-x-0 top-0 z-20 flex items-start px-6 pt-5 sm:px-8 sm:pt-6`,
            children: (0, Fr.jsx)(`a`, {
                "aria-label": p,
                className: `mt-px cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-[7px]`,
                href: `/`,
                onClick: m,
                children: h
            })
        }), t[10] = p, t[11] = m, t[12] = g) : g = t[12];
        let _;
        t[13] !== o || t[14] !== n || t[15] !== i ? (_ = o != null && (0, Fr.jsx)(mt, {
            authorizationParams: o,
            callbackUrl: n,
            title: i.formatMessage({
                id: `chatgpt.gifts.cards.redemption.sign_in.title`,
                defaultMessage: `Log in or sign up to redeem your gift card`
            }),
            titleClassName: `mx-auto max-w-[269px] text-2xl leading-7 font-[590] tracking-[0.07px] sm:max-w-[297px] sm:text-[28px] sm:leading-[34px] sm:tracking-[0.36px]`,
            isInModal: !1,
            isStayLoggedOutVisible: !1,
            onClose: Mr,
            disableAutofocus: !0,
            accessFlowEntryPoint: Ir,
            accessFlowPage: Lr,
            layoutVariant: `gift-card`
        }), t[13] = o, t[14] = n, t[15] = i, t[16] = _) : _ = t[16];
        let v;
        t[17] === _ ? v = t[18] : (v = (0, Fr.jsx)(`main`, {
            className: `relative z-10 flex min-h-dvh items-start justify-center px-6 pt-20 pb-6 sm:items-center sm:py-24`,
            children: (0, Fr.jsx)(`div`, {
                className: `bg-token-bg-primary w-full max-w-[468px] rounded-3xl p-6 shadow-[0_20px_25px_-5px_#0000001a] sm:p-16 dark:shadow-none`,
                children: _
            })
        }), t[17] = _, t[18] = v);
        let y;
        return t[19] !== v || t[20] !== g ? (y = (0, Fr.jsxs)(`div`, {
            className: `bg-token-bg-primary text-token-text-primary relative isolate min-h-dvh font-['SF_Pro','SF_Pro_Display','SF_Pro_Text',var(--font-sans)] dark:bg-black`,
            children: [f, g, v]
        }), t[19] = v, t[20] = g, t[21] = y) : y = t[21], y
    }
}));

function Br(e) {
    e.persisted && qr()
}

function Vr() {
    qr();
    let e = Br;
    return window.addEventListener(`pageshow`, e), () => window.removeEventListener(`pageshow`, e)
}
var Hr, Ur, Wr, Gr, Kr, qr, Jr, Yr, Xr = e((() => {
        Hr = st(), en(), O(), d(), Ur = t(rt()), Xe(), jr(), zr(), Wr = Ze(), Gr = `/redeem`, Kr = 10800, qr = () => {
            let e = P.getCookie(R.SignupRedirectUrl);
            (e === Gr || e?.startsWith(`${Gr}?`)) && P.deleteCookie(R.SignupRedirectUrl)
        }, Jr = () => {
            "use forget";
            let e = (0, Hr.c)(2),
                {
                    search: t
                } = at(),
                n;
            return e[0] === t ? n = e[1] : (n = (0, Wr.jsx)(Rr, {
                callbackUrl: () => {
                    let e = $t(new URLSearchParams(t));
                    return P.setCookie(R.SignupRedirectUrl, e, {
                        maxAge: Kr
                    }), new URL(e, window.location.origin).href
                },
                onHomeClick: qr
            }), e[0] = t, e[1] = n), n
        }, Yr = () => {
            "use forget";
            let e = (0, Hr.c)(3),
                t;
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = A(), e[0] = t) : t = e[0];
            let n = t,
                r;
            e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (r = [n], e[1] = r) : r = e[1], (0, Ur.useEffect)(Vr, r);
            let i;
            return e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (i = n ? (0, Wr.jsx)(Ar, {}) : (0, Wr.jsx)(Jr, {}), e[2] = i) : i = e[2], i
        }
    })),
    Zr, Qr = e((() => {
        mn(), O(), Je(), Xe(), Zr = async () => A() ? Me(`200883286`) ? (await dn(), null) : ct(`/`) : null, Zr.hydrate = !0
    })),
    $r = e((() => {
        Xr(), Qr(), ge()
    }));
e((() => {
    $r()
}))();
export {
    Be as HydrateFallback, Zr as clientLoader, Yr as
    default
};
//# sourceMappingURL=redeem._index-l099fyho.js.map