import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    AT as r,
    Ah as i,
    Btt as ee,
    C1 as te,
    Dh as ne,
    Hn as a,
    Htt as o,
    Nrt as s,
    PR as c,
    Prt as re,
    QL as l,
    Un as ie,
    aE as u,
    eR as ae,
    jR as oe,
    k1 as d,
    kT as f,
    oE as p,
    pnt as se,
    rot as ce,
    u1 as m,
    ynt as h
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as g,
    Bn as _,
    Ln as v,
    Nn as y,
    Pt as b,
    Rn as x,
    Ut as S,
    Vn as C,
    at as w,
    jt as le,
    wn as T,
    zn as ue
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Frt as de,
    Irt as E,
    UUn as D,
    WUn as O
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Gx as k,
    Hy as A,
    Jc as j,
    Nx as M,
    Px as N,
    Vr as fe,
    Vy as pe,
    Wx as me,
    Yc as he,
    cC as ge,
    lC as _e,
    zr as P
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    R as F,
    z as ve
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    n as ye,
    t as I
} from "./c09d86e5-l7zgumyqje9mygnb.js";
import {
    n as be,
    r as L,
    t as xe
} from "./bcd16462-g7fcj74bvxu3maim.js";
import {
    r as Se,
    t as Ce
} from "./c38c3e3a-bphkgnmlkino2i4b.js";
var R, z, B, V, H, U, W, G, K, q, J, Y, X, we = e((() => {
        F(), A(), _e(), fe(), M(), j(), me(), i(), x(), p(), d(), R = t(C(), 1), g(), c(), ye(), r(), E(), xe(), O(), m(), l(), s(), o(), a(), h(), Se(), z = _(), B = v({
            title: {
                id: `k12PurchaseInterstitialPage.title`,
                defaultMessage: `Sign in to get verified for a free and secure ChatGPT workspace`
            },
            titleLoggedOut: {
                id: `k12PurchaseInterstitialPage.titleLoggedOut`,
                defaultMessage: `Sign up to get verified for a free and secure ChatGPT workspace`
            },
            alreadyHaveAccount: {
                id: `k12PurchaseInterstitialPage.alreadyHaveAccount`,
                defaultMessage: `<content>Already have an account?</content> <login>Log in</login>`
            },
            loggedInAs: {
                id: `k12PurchaseInterstitialPage.loggedInAs`,
                defaultMessage: `You are currently logged in as {email}`
            },
            loggedInFallback: {
                id: `k12PurchaseInterstitialPage.loggedInFallback`,
                defaultMessage: `your current account`
            },
            loginAsDifferentAccount: {
                id: `k12PurchaseInterstitialPage.loginAsDifferentAccount`,
                defaultMessage: `Log in as a different account`
            },
            termsOfUse: {
                id: `k12PurchaseInterstitialPage.termsOfUse`,
                defaultMessage: `Terms of Use`
            },
            privacyPolicy: {
                id: `k12PurchaseInterstitialPage.privacyPolicy`,
                defaultMessage: `Privacy Policy`
            },
            valueTitle: {
                id: `k12PurchaseInterstitialPage.valueTitle`,
                defaultMessage: `ChatGPT for Teachers`
            },
            valueTitle2: {
                id: `k12PurchaseInterstitialPage.valueTitle2`,
                defaultMessage: `Free*`
            },
            value1: {
                id: `k12PurchaseInterstitialPage.value1`,
                defaultMessage: `Education-grade security: Your content is not used to train our models by default, and the workspace is built to protect student data.`
            },
            value2: {
                id: `k12PurchaseInterstitialPage.value2`,
                defaultMessage: `Personalized to how you teach: ChatGPT for Teachers can adapt its responses to your grade level, curriculum, and preferred formats.`
            },
            value3: {
                id: `k12PurchaseInterstitialPage.value3`,
                defaultMessage: `Learn from other educators: Access ready-to-use lesson ideas, classroom workflows, and real prompts from teachers.`
            },
            value4: {
                id: `k12PurchaseInterstitialPage.value4`,
                defaultMessage: `Work with your teaching team: Share custom GPTs and co-create lessons and projects in a secure workspace.`
            },
            value5: {
                id: `k12PurchaseInterstitialPage.value5`,
                defaultMessage: `Connected to your classroom tools: Bring in files from Google Drive or Microsoft 365 and build presentations with Canva.`
            },
            value6: {
                id: `k12PurchaseInterstitialPage.value6`,
                defaultMessage: `Admin controls: Leaders can claim their domain to bring all educators into one workspace with role-based controls and SSO.`
            },
            disclaimer: {
                id: `k12PurchaseInterstitialPage.priceNote`,
                defaultMessage: `*Free through June 2027 for verified U.S. K-12 educators.`
            },
            placeholder: {
                id: `k12PurchaseInterstitialPage.emailInputPlaceholder`,
                defaultMessage: `Email address`
            }
        }), V = `https://openai.com/policies/terms-of-use`, H = `https://openai.com/policies/privacy-policy`, U = [{
            icon: k,
            message: B.value1
        }, {
            icon: P,
            message: B.value2
        }, {
            icon: pe,
            message: B.value3
        }, {
            icon: N,
            message: B.value4
        }, {
            icon: ge,
            message: B.value5
        }, {
            icon: he,
            message: B.value6
        }], W = u(f)`w-full p-3`, G = u.div`flex h-[1px] w-full border-b border-token-surface-tertiary`, K = u.div`shadow-xl relative z-10 max-w-[468px] w-full flex flex-col items-start px-10 py-8 border-box bg-token-bg-primary text-token-text-primary border border-token-surface-tertiary shadow-elevation-01 rounded-[40px]`, q = u.div`text-base text-sm tracking-[-0.18px]`, J = u.div`flex items-start gap-3 py-2`, Y = {
            impression: {
                segment: `K12 Plan: Shown`,
                statsig: `chatgpt_k12_plan_shown`
            },
            continueWithEmail: {
                segment: `K12 Plan: Continue With Email Clicked`,
                statsig: `chatgpt_k12_plan_continue_with_email_clicked`
            },
            socialLogin: {
                segment: `K12 Plan: Social Login Clicked`,
                statsig: `chatgpt_k12_plan_social_login_clicked`
            },
            loginLink: {
                segment: `K12 Plan: Login Link Clicked`,
                statsig: `chatgpt_k12_plan_login_link_clicked`
            },
            continueCurrentAccount: {
                segment: `K12 Plan: Continue With Current Account Clicked`,
                statsig: `chatgpt_k12_plan_continue_with_current_account_clicked`
            },
            switchAccount: {
                segment: `K12 Plan: Switch Account Clicked`,
                statsig: `chatgpt_k12_plan_switch_account_clicked`
            }
        }, X = () => {
            let e = ue(),
                t = re(),
                r = ce(),
                i = te(),
                a = ae(),
                o = r?.user?.email,
                s = i?.planType ?? r?.account?.planType ?? null,
                c = le(),
                l = a?.email_domain_type ?? null,
                u = (0, R.useMemo)(() => new URLSearchParams(c.search).get(`referer`), [c.search]),
                d = (0, R.useMemo)(() => ({
                    isLoggedIn: t,
                    loggedInStatus: t ? `logged_in` : `logged_out`,
                    accountPlanType: t ? s ?? `unknown` : null,
                    emailDomainType: l
                }), [t, s, l]),
                f = (0, R.useMemo)(() => ({
                    loggedInStatus: t ? `logged_in` : `logged_out`,
                    accountPlanType: s,
                    emailDomainType: l,
                    referer: u ?? null
                }), [l, t, s, u]),
                p = (0, R.useCallback)((e, t, n) => {
                    ee.logEventWithStatsig(e, t, {
                        ...d,
                        referer: u ?? null,
                        ...n
                    })
                }, [d, u]),
                m = b(),
                h = se(`2189411909`),
                [g, _] = (0, R.useState)(``),
                [v, x] = (0, R.useState)(void 0),
                [S, C] = (0, R.useState)(!t),
                T = (0, R.useRef)(!1),
                E = `${Ce}${c.search}`,
                O = !t || l != null;
            (0, R.useEffect)(() => {
                !O || T.current || (p(Y.impression.segment, Y.impression.statsig), L(`plan`, `page_view`, f), T.current = !0)
            }, [f, O, p]);
            let k = t => {
                    if (!t || t.trim() === ``) return e.formatMessage({
                        id: `k12PurchaseInterstitialPage.errors.emailRequired`,
                        defaultMessage: `Email is required`
                    });
                    if (!ie.test(t)) return e.formatMessage({
                        id: `k12PurchaseInterstitialPage.errors.emailInvalid`,
                        defaultMessage: `Email is invalid.`
                    })
                },
                A = e => {
                    if (e === `password`) {
                        let e = k(g);
                        if (x(e), p(Y.continueWithEmail.segment, Y.continueWithEmail.statsig, {
                                auth_method: `email`,
                                hasValidationError: !!e
                            }), L(`plan`, `continue_with_email_click`, {
                                auth_method: `email`,
                                hasValidationError: !!e
                            }), e && be(`plan`, `email_validation_error`, Error(e), {
                                auth_method: `email`
                            }), h && e) return;
                        let t;
                        h && g && (t = {
                            screen_hint: `login_or_signup`,
                            login_hint: g
                        }), n({
                            fallbackScreenHint: `login_or_signup`,
                            useFallbackScreenHint: !0,
                            ...t ? {
                                additionalAuthParams: t
                            } : {},
                            callbackUrl: E
                        });
                        return
                    }
                    p(Y.socialLogin.segment, Y.socialLogin.statsig, {
                        auth_method: e
                    }), L(`plan`, `social_login_click`, {
                        auth_method: e
                    }), n({
                        fallbackScreenHint: `login`,
                        useFallbackScreenHint: !0,
                        additionalAuthParams: {
                            connection: oe[e]
                        },
                        callbackUrl: E
                    })
                },
                j = () => {
                    p(Y.loginLink.segment, Y.loginLink.statsig, {
                        cta: `login_link`
                    }), L(`plan`, `login_link_click`, {
                        cta: `login_link`
                    }), n({
                        fallbackScreenHint: `login_or_signup`,
                        callbackUrl: E,
                        skipLoginModal: !0
                    })
                },
                M = () => {
                    p(Y.continueCurrentAccount.segment, Y.continueCurrentAccount.statsig, {
                        cta: `continue_with_current_account`
                    }), L(`plan`, `continue_with_current_account`, {
                        cta: `continue_with_current_account`
                    }), m(E)
                },
                N = () => {
                    p(Y.switchAccount.segment, Y.switchAccount.statsig, {
                        cta: `switch_account`
                    }), L(`plan`, `switch_account_click`, {
                        cta: `switch_account`
                    }), C(!0)
                };
            return (0, z.jsxs)(`div`, {
                className: `flex h-full w-full gap-8`,
                children: [(0, z.jsxs)(`div`, {
                    className: `flex min-w-[320px] flex-1 flex-col items-center p-9 px-4`,
                    children: [(0, z.jsxs)(`div`, {
                        className: `flex w-full max-w-[360px] grow flex-col items-center justify-center gap-3`,
                        children: [(0, z.jsx)(`button`, {
                            onClick: () => {
                                m(`/`)
                            },
                            className: `mb-6 cursor-pointer p-0 md:fixed md:start-4 md:top-4 md:h-6 md:w-6`,
                            "aria-label": e.formatMessage({
                                id: `createAccount.businessHomeButtonAriaLabel`,
                                defaultMessage: `Click here to go to the home page`
                            }),
                            children: (0, z.jsx)(ne, {
                                className: `h-8 w-8`
                            })
                        }), t ? (0, z.jsx)(`div`, {
                            className: `mb-5 text-center text-2xl md:text-3xl`,
                            children: e.formatMessage(B.title, {
                                br: (0, z.jsx)(`br`, {})
                            })
                        }) : (0, z.jsx)(`div`, {
                            className: `mb-5 text-center text-2xl md:text-3xl`,
                            children: e.formatMessage(B.titleLoggedOut)
                        }), t && !S ? (0, z.jsxs)(`div`, {
                            className: `flex w-full flex-col items-center gap-3 text-center`,
                            children: [(0, z.jsx)(`div`, {
                                className: `text-token-text-secondary text-base`,
                                children: (0, z.jsx)(y, {
                                    ...B.loggedInAs,
                                    values: {
                                        email: o ?? e.formatMessage(B.loggedInFallback)
                                    }
                                })
                            }), (0, z.jsx)(W, {
                                onClick: M,
                                children: (0, z.jsx)(y, {
                                    id: `k12PurchaseInterstitialPage.getVerifiedButton`,
                                    defaultMessage: `Get verified`
                                })
                            }), (0, z.jsx)(D, {
                                onClick: N,
                                className: `text-token-text-secondary font-medium no-underline hover:underline`,
                                children: e.formatMessage(B.loginAsDifferentAccount)
                            })]
                        }) : (0, z.jsxs)(z.Fragment, {
                            children: [(0, z.jsxs)(`form`, {
                                onSubmit: e => {
                                    e.preventDefault(), A(`password`)
                                },
                                className: `flex w-full flex-col gap-3`,
                                children: [(0, z.jsx)(de, {
                                    name: `email`,
                                    value: g,
                                    onChange: e => _(e.target.value),
                                    inputClassName: `w-full rounded-full dark:bg-transparent! bg-gray-solid-75!  text-base! sm:text-base! py-3! px-5!`,
                                    error: v,
                                    showErrorIcon: !0,
                                    ariaLabel: e.formatMessage(B.placeholder),
                                    placeholder: e.formatMessage(B.placeholder),
                                    className: `rounded-full! border-[var(--border-heavy)] p-0! px-0! py-0! focus-within:ring-1`
                                }), (0, z.jsx)(W, {
                                    type: `submit`,
                                    children: (0, z.jsx)(y, {
                                        id: `k12PurchaseInterstitialPage.continueButton`,
                                        defaultMessage: `Continue`
                                    })
                                })]
                            }), (0, z.jsx)(`div`, {
                                className: `flex cursor-pointer items-center gap-1 py-1.5`,
                                children: e.formatMessage(B.alreadyHaveAccount, {
                                    content: e => (0, z.jsx)(`span`, {
                                        className: `text-token-text-secondary`,
                                        children: e
                                    }),
                                    login: e => (0, z.jsx)(D, {
                                        onClick: j,
                                        className: `text-token-text-primary font-medium no-underline hover:underline`,
                                        children: e
                                    })
                                })
                            }), (0, z.jsxs)(`div`, {
                                className: `relative my-6 w-full`,
                                children: [(0, z.jsx)(G, {}), (0, z.jsx)(`span`, {
                                    className: `bg-token-bg-primary text-token-text-secondary absolute start-1/2 -top-2 -translate-x-1/2 transform px-2 text-xs font-medium`,
                                    children: e.formatMessage({
                                        id: `k12PurchaseInterstitialPage.or`,
                                        defaultMessage: `OR`
                                    })
                                })]
                            }), (0, z.jsx)(I, {
                                provider: `google`,
                                className: `w-full p-3`,
                                onClick: () => A(`google`)
                            }), (0, z.jsx)(I, {
                                provider: `microsoft`,
                                className: `w-full p-3`,
                                onClick: () => A(`microsoft`)
                            }), (0, z.jsx)(I, {
                                provider: `apple`,
                                className: `w-full p-3`,
                                onClick: () => A(`apple`)
                            })]
                        })]
                    }), (0, z.jsxs)(`div`, {
                        className: `text-token-text-secondary flex h-8 items-center gap-2 text-sm font-medium`,
                        children: [(0, z.jsx)(w, {
                            target: `_blank`,
                            to: V,
                            children: e.formatMessage(B.termsOfUse)
                        }), (0, z.jsx)(`div`, {
                            className: `border-token-text-primary mx-2 h-[18px] border-s`
                        }), (0, z.jsx)(w, {
                            target: `_blank`,
                            to: H,
                            children: e.formatMessage(B.privacyPolicy)
                        })]
                    })]
                }), (0, z.jsx)(`div`, {
                    className: `hidden min-h-[560px] flex-col overflow-y-auto text-gray-950 md:relative md:flex md:h-full md:flex-1 md:items-center md:justify-between md:p-4`,
                    children: (0, z.jsxs)(`div`, {
                        className: `flex w-full grow flex-col md:mt-16 md:items-center md:justify-center`,
                        children: [(0, z.jsxs)(K, {
                            children: [(0, z.jsxs)(`div`, {
                                className: `mb-2 flex flex-col`,
                                children: [(0, z.jsx)(`div`, {
                                    className: `mb-2 flex items-center gap-2 text-3xl font-medium`,
                                    children: e.formatMessage(B.valueTitle)
                                }), (0, z.jsx)(`div`, {
                                    className: `mb-2 flex items-center gap-2 text-xl font-medium`,
                                    children: e.formatMessage(B.valueTitle2)
                                })]
                            }), U.map(({
                                icon: t,
                                message: n,
                                link: r
                            }) => (0, z.jsxs)(J, {
                                children: [(0, z.jsx)(t, {
                                    className: `mt-1 h-5 w-5 shrink-0`
                                }), (0, z.jsx)(q, {
                                    children: e.formatMessage(n, {
                                        link: r ?? void 0
                                    })
                                })]
                            }, n.id)), (0, z.jsx)(`div`, {
                                className: `text-token-text-secondary mt-2 self-start text-xs`,
                                "data-testid": `disclaimer`,
                                children: (0, z.jsx)(y, {
                                    ...B.disclaimer
                                })
                            })]
                        }), (0, z.jsx)(`img`, {
                            alt: ``,
                            src: ve.src,
                            className: `absolute inset-0 z-0 h-full w-full object-cover`
                        })]
                    })
                })]
            })
        }
    })),
    Z, Q, $, Te = e((() => {
        g(), Z = T(), we(), Q = _(), $ = S(function() {
            "use forget";
            let e = (0, Z.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(X, {}), e[0] = t) : t = e[0], t
        })
    }));
e((() => {
    Te()
}))();
export {
    $ as
    default
};
//# sourceMappingURL=k12-plan-b0xpxqv7.js.map