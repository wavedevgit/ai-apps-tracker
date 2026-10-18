import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    AT as r,
    Ah as i,
    Ait as ee,
    Btt as a,
    Dh as te,
    Hn as o,
    Htt as s,
    Ji as ne,
    L3 as c,
    O0 as re,
    PR as ie,
    Pit as l,
    T0 as u,
    Un as d,
    Xi as f,
    _w as p,
    a7 as ae,
    aE as m,
    b5 as h,
    fU as oe,
    hw as g,
    iw as _,
    jR as se,
    k1 as v,
    kT as y,
    l7 as b,
    oE as x,
    ow as S,
    pU as C,
    pnt as ce,
    vnt as le,
    y5 as ue,
    ynt as w,
    z3 as de
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as T,
    Bn as E,
    Ht as fe,
    Ln as D,
    Nn as O,
    Pt as pe,
    Rn as k,
    Ut as A,
    Vn as j,
    at as M,
    jt as me,
    wn as N,
    zn as P
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $nn as he,
    Frt as ge,
    Irt as _e,
    UUn as ve,
    WUn as ye,
    Xnn as be,
    Znn as xe,
    nG as Se,
    rG as Ce
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    bf as we,
    yf as Te
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    $d as Ee,
    Hd as De,
    Jd as Oe,
    Qd as ke,
    Vd as Ae,
    Yd as F,
    Zd as je,
    _d as Me,
    ef as Ne,
    hd as Pe,
    np as Fe,
    tp as Ie,
    zd as Le
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    a as I,
    i as Re,
    n as ze,
    o as Be,
    r as Ve,
    s as He
} from "./99d6a32a-16p874b37wvx15br.js";
import {
    r as Ue,
    t as We
} from "./d9c77c9b-en6hbj87exdwqueq.js";
import {
    n as Ge,
    t as L
} from "./c09d86e5-l7zgumyqje9mygnb.js";
var R, z, B, Ke = e((() => {
    p(), S(), k(), R = E(), z = D({
        title: {
            id: `nonWorkEmailModal.title`,
            defaultMessage: `Are you sure this is your work email?`
        },
        body: {
            id: `nonWorkEmailModal.body`,
            defaultMessage: `You need to sign up with a work email to be eligible.`
        },
        primaryCta: {
            id: `nonWorkEmailModal.primaryCta`,
            defaultMessage: `Sign up with your work email`
        },
        secondaryCta: {
            id: `nonWorkEmailModal.secondaryCta`,
            defaultMessage: `{email} is my work email`
        }
    }), B = ({
        email: e,
        onUseWorkEmail: t,
        onContinue: n,
        onClose: r
    }) => {
        let i = P();
        return (0, R.jsx)(_, {
            isOpen: !0,
            onClose: r,
            size: `custom`,
            className: `max-w-sm`,
            contentClassName: `p-0!`,
            testId: `modal-non-work-email`,
            children: (0, R.jsxs)(`div`, {
                className: `flex w-full flex-col gap-4 p-6 text-center`,
                children: [(0, R.jsx)(`div`, {
                    className: `text-token-text-primary text-xl font-semibold`,
                    children: (0, R.jsx)(O, {
                        ...z.title
                    })
                }), (0, R.jsx)(`div`, {
                    className: `text-token-text-secondary text-sm`,
                    children: (0, R.jsx)(O, {
                        ...z.body
                    })
                }), (0, R.jsx)(g.Button, {
                    title: i.formatMessage(z.primaryCta),
                    color: `primary`,
                    className: `w-full`,
                    onClick: () => {
                        t(), r()
                    }
                }), (0, R.jsx)(g.Button, {
                    title: i.formatMessage(z.secondaryCta, {
                        email: e
                    }),
                    color: `ghost`,
                    className: `w-full`,
                    onClick: () => {
                        r(), n()
                    }
                })]
            })
        })
    }
}));

function qe() {
    "use forget";
    let e = (0, V.c)(3),
        [t] = fe(),
        n, r;
    if (e[0] !== t) {
        r = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            let e = t.get(Se);
            if (!e) {
                r = null;
                break bb0
            }
            let i = e.trim();n = d.test(i) ? i : null
        }
        e[0] = t, e[1] = n, e[2] = r
    } else n = e[1], r = e[2];
    return r === Symbol.for(`react.early_return_sentinel`) ? n : r
}
var V, Je = e((() => {
        V = N(), Ce(), o(), T()
    })),
    H, U, W, G, Ye = e((() => {
        H = N(), De(), Ve(), Me(), k(), U = E(), W = ze({
            planType: Pe.Team
        }), G = () => {
            "use forget";
            let e = (0, H.c)(2),
                t;
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, U.jsx)(`div`, {
                className: `mb-10 max-w-[400px] text-start text-3xl font-semibold`,
                children: (0, U.jsx)(O, {
                    ...W.title
                })
            }), e[0] = t) : t = e[0];
            let n;
            return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, U.jsxs)(`div`, {
                className: `relative z-10`,
                children: [t, (0, U.jsx)(`div`, {
                    className: `text-md mb-4 self-start font-medium`,
                    children: (0, U.jsx)(O, {
                        ...W.subtitle
                    })
                }), (0, U.jsx)(Ae, {
                    advertisedFeatures: W.advertisedFeatures,
                    type: Le.TEAM_INTERSTITIAL
                })]
            }), e[1] = n) : n = e[1], n
        }
    })),
    K, q, J, Y, X, Z, Q, Xe, Ze, Qe = e((() => {
        K = N(), Fe(), He(), f(), we(), i(), be(), k(), x(), Re(), Ee(), je(), v(), s(), q = t(j()), T(), ie(), Ge(), Ke(), Je(), r(), u(), _e(), ye(), Oe(), C(), c(), l(), o(), b(), w(), Ue(), h(), Ye(), J = E(), Y = `https://openai.com/policies/terms-of-use`, X = `https://openai.com/policies/privacy-policy`, Z = `require_work_email`, Q = m(y)`w-full p-3`, Xe = m.div`flex h-[1px] w-full border-b border-token-surface-tertiary`, Ze = () => {
            "use no forget";
            let e = P(),
                {
                    country: t
                } = he(),
                r = xe({
                    country: t,
                    currentAccount: null,
                    location: `TeamPurchaseInterstitialPage`,
                    pricingPlanIsTypeBusiness: !0
                }),
                i = pe(),
                o = me(),
                {
                    data: s,
                    isLoading: c,
                    error: ie
                } = de({
                    countryCode: r?.country,
                    currency: r?.currency,
                    enabled: r != null
                }),
                l = ce(`2189411909`),
                u = ke(),
                {
                    data: f
                } = Ne(u ?? ``, !!u),
                p = !1;
            (0, q.useEffect)(() => {
                if (!window || !document) return;
                let e = new URLSearchParams(window.location.search).get(`referrer`) ?? document.referrer,
                    t;
                try {
                    t = a.logStructuredEvent(`ChatgptBusinessPurchaseInterstitialMounted`, {
                        legacyStatsigEventName: `chatgpt_business_interstitial_impression`,
                        ...Ie(e)
                    })
                } catch {}
                a.logValueEventWithStatsig({
                    segmentEventName: `ChatGPT Business: Interstitial Impression`,
                    statsigEventName: `chatgpt_business_interstitial_impression`,
                    data: {
                        referrer: e
                    },
                    eventId: t
                })
            }, []), (0, q.useEffect)(() => {
                l && a.logEventWithStatsig(`ChatGPT Business: Interstitial Show Login Hint`, `chatgpt_business_interstitial_show_login_hint`, {
                    promo_state: f?.state
                }), p && a.logEventWithStatsig(`ChatGPT Business: Interstitial Promo Banner Shown`, `chatgpt_business_interstitial_promo_banner_shown`, {
                    promo_state: f?.state
                })
            }, [l, f?.state, p]);
            let [m, h] = (0, q.useState)(``), [g, _] = (0, q.useState)(void 0), v = new URLSearchParams(o.search).get(Z) === `1`, y = `${We}${o.search}`, b = oe(), x = qe(), S = !!x;
            if ((0, q.useEffect)(() => {
                    if (!v) return;
                    _(e.formatMessage(I.useWorkEmailError));
                    let t = new URLSearchParams(o.search);
                    t.delete(Z), i({
                        pathname: o.pathname,
                        search: t.toString() ? `?${t.toString()}` : ``
                    }, {
                        replace: !0
                    })
                }, [e, o.pathname, o.search, i, v]), (0, q.useEffect)(() => {
                    x && b.info(e.formatMessage(I.loggedOutToast, {
                        email: x
                    }), {
                        id: `businessPurchaseInterstitialPage.logout_email_hint_toast`
                    })
                }, [e, x, b]), !r || c || ie != null || !s) return null;
            let C = !!u && u === `team-1-month-free` && s.currencyConfig.promos.business_free_trial.enabled,
                w = C && f?.state === `not_eligible`,
                T = C && f?.state === `temporary_disabled`,
                E = C && f?.state === `offline`;
            p = C && f?.state === `eligible`;
            let fe = t => {
                    if (!t || t.trim() === ``) return e.formatMessage(I.emailRequiredError);
                    if (!d.test(t)) return e.formatMessage(I.emailInvalidError)
                },
                D = async t => {
                    if (t === `password`) {
                        a.logEventWithStatsig(`ChatGPT Business: Interstitial Continue With Email Click`, `chatgpt_business_interstitial_continue_with_email_click`, {
                            promo_state: f?.state
                        });
                        let t = fe(m);
                        if (_(t), l && t) {
                            a.logEventWithStatsig(`ChatGPT Business: Interstitial Email Validation Error`, `chatgpt_business_interstitial_email_validation_error`);
                            return
                        }
                        let r;
                        if (l && m && (r = {
                                screen_hint: `login_or_signup`,
                                login_hint: m
                            }), S && m) try {
                            let t = (await ae.safePost(`/accounts/domain-type`, {
                                requestBody: {
                                    email: m
                                },
                                authOption: ee.SendIfAvailable
                            }))?.domain_type;
                            if (t && t !== `professional`) {
                                re(B, {
                                    email: m,
                                    onUseWorkEmail: () => _(e.formatMessage(I.useWorkEmailError)),
                                    onContinue: () => {
                                        let e;
                                        l && m && (e = {
                                            screen_hint: `login_or_signup`,
                                            login_hint: m
                                        }), n({
                                            fallbackScreenHint: `login_or_signup`,
                                            useFallbackScreenHint: !0,
                                            ...e ? {
                                                additionalAuthParams: e
                                            } : {},
                                            callbackUrl: y
                                        })
                                    }
                                });
                                return
                            }
                        } catch {}
                        a.logEventWithStatsig(`ChatGPT Business: Interstitial Email Signup Navigated To Auth`, `chatgpt_business_interstitial_email_signup_navigated_to_auth`, {
                            promo_state: f?.state
                        }), n({
                            fallbackScreenHint: `login_or_signup`,
                            useFallbackScreenHint: !0,
                            ...r ? {
                                additionalAuthParams: r
                            } : {},
                            callbackUrl: y
                        });
                        return
                    }
                    a.logEventWithStatsig(`ChatGPT Business: Interstitial Continue With Social Click`, `chatgpt_business_interstitial_continue_with_social_click`, {
                        connection: t
                    }), n({
                        fallbackScreenHint: `login`,
                        useFallbackScreenHint: !0,
                        additionalAuthParams: {
                            connection: se[t]
                        },
                        callbackUrl: y
                    })
                }, k = () => {
                    a.logEventWithStatsig(`ChatGPT Business: Interstitial Already Have Account Click`, `chatgpt_business_interstitial_already_have_account_click`), n({
                        fallbackScreenHint: `login_or_signup`,
                        callbackUrl: y,
                        skipLoginModal: !0
                    })
                }, A = (0, J.jsxs)(J.Fragment, {
                    children: [l ? (0, J.jsxs)(`form`, {
                        onSubmit: e => {
                            e.preventDefault(), D(`password`)
                        },
                        className: `flex w-full flex-col gap-3`,
                        children: [(0, J.jsx)(ge, {
                            name: `email`,
                            value: m,
                            onChange: e => h(e.target.value),
                            inputClassName: `w-full rounded-full dark:bg-transparent! bg-gray-solid-75!  text-base! sm:text-base! py-3! px-5!`,
                            error: g,
                            showErrorIcon: !0,
                            ariaLabel: e.formatMessage(S ? I.emailClaimTrialPlaceholder : I.placeholder),
                            placeholder: e.formatMessage(S ? I.emailClaimTrialPlaceholder : I.placeholder),
                            className: `rounded-full! border-[var(--border-heavy)] p-0! px-0! py-0! focus-within:ring-1`
                        }), (0, J.jsx)(Q, {
                            type: `submit`,
                            children: p ? (0, J.jsx)(J.Fragment, {
                                children: C && (0, J.jsx)(() => {
                                    "use forget";
                                    let e = (0, K.c)(5);
                                    switch (le(`3099523586`).get(`treatment`, `control`)) {
                                        case `redeem_free_offer`: {
                                            let t;
                                            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, J.jsx)(O, {
                                                ...I.redeemFreeOfferButton
                                            }), e[0] = t) : t = e[0], t
                                        }
                                        case `claim_free_offer`: {
                                            let t;
                                            return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, J.jsx)(O, {
                                                ...I.claimFreeOfferButton
                                            }), e[1] = t) : t = e[1], t
                                        }
                                        case `redeem_offer`: {
                                            let t;
                                            return e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, J.jsx)(O, {
                                                ...I.redeemOfferButton
                                            }), e[2] = t) : t = e[2], t
                                        }
                                        case `claim_offer`: {
                                            let t;
                                            return e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, J.jsx)(O, {
                                                ...I.claimOfferButton
                                            }), e[3] = t) : t = e[3], t
                                        }
                                        default: {
                                            let t;
                                            return e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, J.jsx)(O, {
                                                ...I.tryButton
                                            }), e[4] = t) : t = e[4], t
                                        }
                                    }
                                }, {})
                            }) : (0, J.jsx)(O, {
                                ...S ? I.claimFreeTrial : I.getButton
                            })
                        })]
                    }) : (0, J.jsx)(Q, {
                        icon: Te,
                        color: `secondary`,
                        onClick: () => D(`password`),
                        children: e.formatMessage(I.email)
                    }), (0, J.jsx)(`div`, {
                        className: `flex cursor-pointer items-center gap-1 py-1.5`,
                        children: e.formatMessage(I.alreadyHaveAccount, {
                            content: e => (0, J.jsx)(`span`, {
                                className: `text-token-text-secondary`,
                                children: e
                            }),
                            login: e => (0, J.jsx)(ve, {
                                onClick: k,
                                className: `text-token-text-primary font-medium no-underline hover:underline`,
                                children: e
                            })
                        })
                    })]
                }), j = (0, J.jsxs)(J.Fragment, {
                    children: [(0, J.jsx)(L, {
                        provider: `google`,
                        className: `w-full p-3`,
                        onClick: () => D(`google`)
                    }), (0, J.jsx)(L, {
                        provider: `microsoft`,
                        className: `w-full p-3`,
                        onClick: () => D(`microsoft`)
                    }), (0, J.jsx)(L, {
                        provider: `apple`,
                        className: `w-full p-3`,
                        onClick: () => D(`apple`)
                    })]
                }), N = (0, J.jsxs)(`div`, {
                    className: `relative my-6 w-full`,
                    children: [(0, J.jsx)(Xe, {}), (0, J.jsx)(`span`, {
                        className: `bg-token-bg-primary text-token-text-secondary absolute start-1/2 -top-2 -translate-x-1/2 transform px-2 text-xs font-medium`,
                        children: (0, J.jsx)(O, {
                            ...I.or
                        })
                    })]
                });
            return (0, J.jsxs)(`div`, {
                className: `flex h-full w-full gap-8`,
                children: [(0, J.jsxs)(`div`, {
                    className: `flex min-w-[320px] flex-1 flex-col items-center p-9 px-4`,
                    children: [(0, J.jsxs)(`div`, {
                        className: `flex w-full max-w-[360px] grow flex-col items-center justify-center gap-3`,
                        children: [(0, J.jsx)(`button`, {
                            onClick: () => {
                                a.logEventWithStatsig(`ChatGPT Business: Interstitial Logo Click`, `chatgpt_business_interstitial_logo_click`), i(`/`)
                            },
                            className: `mb-6 cursor-pointer p-0 md:fixed md:start-4 md:top-4 md:h-6 md:w-6`,
                            "aria-label": e.formatMessage(I.homeButtonAriaLabel),
                            children: (0, J.jsx)(te, {
                                className: `h-8 w-8`
                            })
                        }), (0, J.jsx)(`div`, {
                            className: `text-token-text-secondary text-center text-lg font-medium`,
                            children: p && C && e.formatMessage(I.altFreeTrialSubtitle)
                        }), (0, J.jsx)(`div`, {
                            className: ue(`text-center text-2xl font-semibold md:text-3xl`, S ? `mb-1` : `mb-5`),
                            children: (0, J.jsx)(O, {
                                ...I.altTitle
                            })
                        }), S && (0, J.jsx)(`div`, {
                            className: `text-token-text-secondary mb-5 text-center font-sans text-base leading-snug font-medium tracking-tight`,
                            children: (0, J.jsx)(O, {
                                ...I.claimSubtitle
                            })
                        }), A, N, j, (w || T || E) && (() => {
                            let t;
                            switch (!0) {
                                case w:
                                    t = F.teamFreeTrialNotEligible;
                                    break;
                                case T:
                                    t = F.teamFreeTrialTemporarilyDisabled;
                                    break;
                                default:
                                    t = F.teamFreeTrialOffline
                            }
                            return (0, J.jsx)(`div`, {
                                className: `mb-4 w-full`,
                                "data-testid": `promo-banner`,
                                children: (0, J.jsx)(ne, {
                                    content: e.formatMessage(t),
                                    type: `normal`
                                })
                            })
                        })()]
                    }), (0, J.jsxs)(`div`, {
                        className: `text-token-text-secondary flex h-8 items-center gap-2 text-sm font-medium`,
                        children: [(0, J.jsx)(M, {
                            target: `_blank`,
                            to: Y,
                            onClick: () => a.logEventWithStatsig(`ChatGPT Business: Interstitial Terms of Use Click`, `chatgpt_business_interstitial_terms_of_use_click`),
                            children: e.formatMessage(I.termsOfUse)
                        }), (0, J.jsx)(`div`, {
                            className: `border-token-text-primary mx-2 h-[18px] border-s`
                        }), (0, J.jsx)(M, {
                            target: `_blank`,
                            to: X,
                            onClick: () => a.logEventWithStatsig(`ChatGPT Business: Interstitial Privacy Policy Click`, `chatgpt_business_interstitial_privacy_policy_click`),
                            children: e.formatMessage(I.privacyPolicy)
                        })]
                    })]
                }), (0, J.jsxs)(`div`, {
                    className: `hidden min-h-[560px] flex-col overflow-y-auto bg-white text-gray-950 md:relative md:flex md:h-full md:flex-1 md:items-center md:justify-between md:p-4 dark:bg-white`,
                    children: [(0, J.jsxs)(`div`, {
                        className: `flex w-full grow flex-col md:mt-16 md:items-center md:justify-center`,
                        children: [(0, J.jsx)(G, {}), (0, J.jsx)(`img`, {
                            alt: ``,
                            src: `https://cdn.openai.com/chatgpt/team-interstitial-background.png`,
                            className: `absolute inset-x-0 -top-[140px] z-0 h-full w-full object-fill object-top`
                        })]
                    }), (0, J.jsxs)(`div`, {
                        className: `relative flex flex-col items-center`,
                        children: [(0, J.jsx)(`div`, {
                            className: `relative top-[10px] text-center text-[12px] font-medium text-gray-600`,
                            children: e.formatMessage(I.logoGardenTitle)
                        }), (0, J.jsx)(`img`, {
                            alt: e.formatMessage(I.logoGardenAlt),
                            src: Be.src,
                            className: `mt-1 h-auto w-7/8 max-w-[1040px] object-contain`
                        })]
                    })]
                })]
            })
        }
    })),
    $e, et, $, tt = e((() => {
        T(), $e = N(), Qe(), et = E(), $ = A(function() {
            "use forget";
            let e = (0, $e.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, et.jsx)(Ze, {}), e[0] = t) : t = e[0], t
        })
    }));
e((() => {
    tt()
}))();
export {
    $ as
    default
};
//# sourceMappingURL=team-sign-up-natdd5nt.js.map