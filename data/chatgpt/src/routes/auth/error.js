import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AR as n,
    AT as r,
    Btt as i,
    Cit as a,
    DR as o,
    Ert as s,
    HR as c,
    Htt as l,
    IU as u,
    LU as d,
    Nrt as f,
    RR as ee,
    Sit as te,
    TR as p,
    Tit as ne,
    U1 as m,
    V1 as h,
    bF as g,
    cot as re,
    kT as _,
    lot as v,
    mz as y,
    pz as b
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as x,
    Bn as S,
    Ht as ie,
    Ln as C,
    Nn as w,
    Pt as ae,
    Rn as oe,
    Ut as T,
    Vn as E,
    Zt as se,
    an as D,
    wn as O
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    b8 as k,
    x8 as A
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Gr as j,
    Wr as M
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    a as N,
    n as P,
    r as F,
    t as I
} from "./9bbac052-hmfqc3w40261iizy.js";

function L(e) {
    return e in q ? q[e] : q.default
}

function R(e) {
    return e in J ? J[e] : J.default
}

function z(e) {
    i.logStructuredEvent(`AccessFlowUserAction`, {
        authSessionLoggingId: h(),
        actionType: e,
        page: p.ACCESS_FLOW_PAGE_TYPE_ERROR
    })
}

function B() {
    "use forget";
    let e = (0, H.c)(30),
        t = ae(),
        [n] = ie(),
        r, a, s, c;
    e[0] === n ? (r = e[1], a = e[2], s = e[3], c = e[4]) : (r = n.get(`error`) ?? ``, s = n.get(`providerId`) ?? ``, a = L(r), c = R(r), e[0] = n, e[1] = r, e[2] = a, e[3] = s, e[4] = c);
    let l = c,
        u, d;
    if (e[5] !== r || e[6] !== s ? (u = () => {
            if (r !== void 0) {
                let e = `missing`;
                try {
                    let t = te.getCookie(ne.AuthSessionLoggingId);
                    t && D(t) && (e = t)
                } catch {}
                i.logStructuredEvent(`AccessFlowPageLoad`, {
                    authSessionLoggingId: e,
                    page: p.ACCESS_FLOW_PAGE_TYPE_ERROR
                });
                let t = i.logStructuredEvent(`ChatgptAuthErrorShown`, {
                    legacyStatsigEventName: `chatgpt_auth_error`,
                    errorCode: Object.hasOwn(q, r) || X.has(r) ? r : `unknown`,
                    provider: Y.has(s) ? s : `unknown`
                });
                i.logValueEventWithStatsig({
                    eventId: t,
                    segmentEventName: `Auth: Error`,
                    statsigEventName: `chatgpt_auth_error`,
                    statsigValue: r,
                    data: {
                        error_code: r,
                        providerId: s
                    },
                    statsigMetadata: {
                        providerId: s
                    }
                })
            }
        }, d = [r, s], e[5] = r, e[6] = s, e[7] = u, e[8] = d) : (u = e[7], d = e[8]), (0, U.useEffect)(u, d), r === `violence_auth_freeze`) {
        let t;
        return e[9] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, W.jsx)($, {}), e[9] = t) : t = e[9], t
    }
    let f;
    e[10] === r ? f = e[11] : (f = re().isNoAuthEnabled && X.has(r), e[10] = r, e[11] = f);
    let m = f,
        h;
    e[12] === m ? h = e[13] : (h = m ? ee() : {
        shouldUseContentUpdate: !1,
        shouldShowNoAuthButton: !1
    }, e[12] = m, e[13] = h);
    let {
        shouldUseContentUpdate: g,
        shouldShowNoAuthButton: v
    } = h, y;
    e[14] === g ? y = e[15] : (y = g ? (0, W.jsx)(`div`, {
        className: `mb-5`,
        children: (0, W.jsx)(k, {})
    }) : (0, W.jsx)(F, {}), e[14] = g, e[15] = y);
    let b;
    e[16] === l ? b = e[17] : (b = (0, W.jsx)(`div`, {
        className: `mb-2 text-center text-lg`,
        children: l
    }), e[16] = l, e[17] = b);
    let x;
    e[18] === a ? x = e[19] : (x = (0, W.jsx)(`div`, {
        className: `mb-5 text-center`,
        children: a
    }), e[18] = a, e[19] = x);
    let S;
    e[20] !== m || e[21] !== t || e[22] !== v || e[23] !== g ? (S = g ? (0, W.jsxs)(`div`, {
        className: `flex w-full flex-col gap-3`,
        children: [(0, W.jsx)(_, {
            as: `link`,
            color: `primary`,
            fullWidth: !0,
            to: `/auth/login`,
            replace: !0,
            onClick: ce,
            children: (0, W.jsx)(w, {
                ...G.logInOrSignUp
            })
        }), v ? (0, W.jsx)(_, {
            as: `link`,
            color: `secondary`,
            fullWidth: !0,
            to: `/?slm=1`,
            replace: !0,
            onClick: V,
            children: (0, W.jsx)(w, {
                ...G.continueWithoutAccount
            })
        }) : null]
    }) : (0, W.jsx)(_, {
        as: `button`,
        color: `secondary`,
        onClick: () => {
            m && z(o.ACCESS_FLOW_USER_ACTION_TYPE_BACK_TO_LOGIN), t(`/auth/login`, {
                replace: !0
            })
        },
        children: (0, W.jsx)(w, {
            ...G.goBack
        })
    }), e[20] = m, e[21] = t, e[22] = v, e[23] = g, e[24] = S) : S = e[24];
    let C;
    return e[25] !== y || e[26] !== b || e[27] !== x || e[28] !== S ? (C = (0, W.jsx)(I, {
        isStorageComplianceEnabled: !1,
        children: (0, W.jsxs)(P, {
            children: [y, b, x, S]
        })
    }), e[25] = y, e[26] = b, e[27] = x, e[28] = S, e[29] = C) : C = e[29], C
}

function V() {
    return z(o.ACCESS_FLOW_USER_ACTION_TYPE_EXIT_STAY_LOGGED_OUT_LINK_CLICKED)
}

function ce() {
    return z(o.ACCESS_FLOW_USER_ACTION_TYPE_BACK_TO_LOGIN)
}

function le(e) {
    return (0, W.jsx)(`a`, {
        className: `text-token-link hover:text-token-link-hover`,
        href: `https://findahelpline.com/?utm_source=openai&utm_placement=helpcenter`,
        rel: `noreferrer`,
        target: `_blank`,
        children: e
    })
}
var H, U, W, G, K, q, J, Y, X, Z, Q, $, ue = e((() => {
    x(), H = O(), f(), r(), N(), c(), A(), j(), y(), u(), m(), g(), l(), a(), n(), v(), U = t(E()), oe(), se(), W = S(), G = C({
        oops: {
            id: `AuthError.oops`,
            defaultMessage: `Oops!`
        },
        goBack: {
            id: `AuthError.goBack`,
            defaultMessage: `Go back`
        },
        logInOrSignUp: {
            id: `AuthError.recovery.logInOrSignUp.button.label`,
            defaultMessage: `Log in or sign up`
        },
        continueWithoutAccount: {
            id: `AuthError.recovery.useChatGPTWithoutAccount.button.label`,
            defaultMessage: `Use ChatGPT without an account`
        },
        systemBusyError: {
            id: `AuthError.systemBusyError`,
            defaultMessage: `Our systems are a bit busy at the moment, please take a break and try again soon.`
        },
        identityProviderMismatch: {
            id: `AuthError.identityProviderMismatch`,
            defaultMessage: `You tried signing in with a different authentication method than the one you used during signup. Please try again using your original authentication method.`
        },
        accountDeactivated: {
            id: `AuthError.accountDeactivated`,
            defaultMessage: `You do not have an account because it has been deleted or deactivated. If you believe this was an error, please contact us through our help center at help.openai.com.`
        },
        unsupportedCountry: {
            id: `AuthError.unsupportedCountry`,
            defaultMessage: `OpenAI's services are not available in your country.`
        },
        unsupportedRegion: {
            id: `AuthError.unsupportedRegion`,
            defaultMessage: `OpenAI's services are not available in your region.`
        },
        unknownCountry: {
            id: `AuthError.unknownCountry`,
            defaultMessage: `We were unable to determine your country of origin to enforce geographical restrictions. Please use a different network, or contact us at help.openai.com if the issue persists.`
        },
        ssoRequired: {
            id: `AuthError.ssoRequired`,
            defaultMessage: `Please use your organization's SSO to access your account.`
        },
        ssoConnectionUnidentified: {
            id: `AuthError.ssoConnectionUnidentified`,
            defaultMessage: `We couldn't identify the SSO connection used for this sign-in. Please sign in again with the SSO connection for the organization you want to access.`
        },
        ssoConnectionNotAuthorized: {
            id: `AuthError.ssoConnectionNotAuthorized`,
            defaultMessage: `The SSO connection used for this sign-in isn't authorized for the organization you want to access. Please sign in again with that organization's SSO connection.`
        },
        crossTenantSsoConnectionNotTrusted: {
            id: `AuthError.crossTenantSsoConnectionNotTrusted`,
            defaultMessage: `The SSO connection used for this sign-in belongs to a different organization. Please sign in again with the SSO connection for the organization you want to access.`
        },
        defaultError: {
            id: `AuthError.defaultError`,
            defaultMessage: `We ran into an issue while signing you in, please take a break and try again soon.`
        },
        logoutFailed: {
            id: `AuthError.logoutFailed`,
            defaultMessage: `We couldn't log you out. Please go back and try again.`
        },
        violenceAuthFreeze: {
            id: `AuthError.violenceAuthFreeze`,
            defaultMessage: `You were logged out for violence`
        },
        violenceAuthFreezeTitle: {
            id: `AuthError.violenceAuthFreeze.title`,
            defaultMessage: `For safety reasons, we’ve paused your account.`
        },
        violenceAuthFreezeExplanation: {
            id: `AuthError.violenceAuthFreeze.explanation`,
            defaultMessage: `ChatGPT can’t continue conversations that involve risk of violence or harm to others.`
        },
        violenceAuthFreezeConversationRemoved: {
            id: `AuthError.violenceAuthFreeze.guidance.conversationRemoved`,
            defaultMessage: `We removed the conversation that was flagged by our systems and paused your account for 24 hours.`
        },
        violenceAuthFreezeSupport: {
            id: `AuthError.violenceAuthFreeze.guidance.support`,
            defaultMessage: `For additional support, reach out to someone you trust or a trained professional.`
        },
        violenceAuthFreezeEmergency: {
            id: `AuthError.violenceAuthFreeze.guidance.emergency`,
            defaultMessage: `If anyone’s safety is at risk, contact local emergency services or a <helplineLink>crisis helpline</helplineLink>.`
        },
        violenceAuthFreezeLearnMore: {
            id: `AuthError.violenceAuthFreeze.button.learnMore`,
            defaultMessage: `Learn more`
        }
    }), K = (0, W.jsx)(w, {
        ...G.systemBusyError
    }), q = {
        RequestTimeout: K,
        AuthRateLimit: K,
        LogoutFailed: (0, W.jsx)(w, {
            ...G.logoutFailed
        }),
        violence_auth_freeze: (0, W.jsx)(w, {
            ...G.violenceAuthFreeze
        }),
        identity_provider_mismatch: (0, W.jsx)(w, {
            ...G.identityProviderMismatch
        }),
        account_deactivated: (0, W.jsx)(w, {
            ...G.accountDeactivated
        }),
        unsupported_country: (0, W.jsx)(w, {
            ...G.unsupportedCountry
        }),
        unsupported_region: (0, W.jsx)(w, {
            ...G.unsupportedRegion
        }),
        unknown_country: (0, W.jsx)(w, {
            ...G.unknownCountry
        }),
        sso_required: (0, W.jsx)(w, {
            ...G.ssoRequired
        }),
        sso_connection_unidentified: (0, W.jsx)(w, {
            ...G.ssoConnectionUnidentified
        }),
        sso_connection_not_authorized: (0, W.jsx)(w, {
            ...G.ssoConnectionNotAuthorized
        }),
        cross_tenant_sso_connection_not_trusted: (0, W.jsx)(w, {
            ...G.crossTenantSsoConnectionNotTrusted
        }),
        default: (0, W.jsx)(w, {
            ...G.defaultError
        })
    }, J = {
        default: (0, W.jsx)(w, {
            ...G.oops
        })
    }, Y = new Set(Object.values(s)), X = new Set([``, `AuthRateLimit`, `OAuthCallback`, `RequestTimeout`, `identity_provider_mismatch`, `session_expired`]), Z = T(function() {
        "use forget";
        let e = (0, H.c)(1),
            t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, W.jsx)(B, {}), e[0] = t) : t = e[0], t
    }), Q = e => {
        "use forget";
        let t = (0, H.c)(7),
            {
                icon: n,
                children: r
            } = e,
            i;
        t[0] === n ? i = t[1] : (i = (0, W.jsx)(`div`, {
            className: `bg-token-bg-tertiary text-token-text-primary flex size-12 shrink-0 items-center justify-center rounded-xl`,
            children: (0, W.jsx)(n, {
                className: `icon`,
                "aria-hidden": `true`
            })
        }), t[0] = n, t[1] = i);
        let a;
        t[2] === r ? a = t[3] : (a = (0, W.jsx)(`p`, {
            className: `text-token-text-secondary text-[15px] leading-5`,
            children: r
        }), t[2] = r, t[3] = a);
        let o;
        return t[4] !== i || t[5] !== a ? (o = (0, W.jsxs)(`div`, {
            className: `flex w-full items-center gap-4`,
            children: [i, a]
        }), t[4] = i, t[5] = a, t[6] = o) : o = t[6], o
    }, $ = () => {
        "use forget";
        let e = (0, H.c)(6),
            t;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, W.jsx)(`h1`, {
            className: `text-title-2-emphasized text-token-text-primary sm:text-title-1-emphasized font-semibold text-balance`,
            children: (0, W.jsx)(w, {
                ...G.violenceAuthFreezeTitle
            })
        }), e[0] = t) : t = e[0];
        let n;
        e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, W.jsxs)(`div`, {
            className: `flex w-full flex-col items-center gap-3 text-center`,
            children: [t, (0, W.jsx)(`p`, {
                className: `text-token-text-secondary text-[15px] leading-5`,
                children: (0, W.jsx)(w, {
                    ...G.violenceAuthFreezeExplanation
                })
            })]
        }), e[1] = n) : n = e[1];
        let r;
        e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, W.jsx)(Q, {
            icon: d,
            children: (0, W.jsx)(w, {
                ...G.violenceAuthFreezeConversationRemoved
            })
        }), e[2] = r) : r = e[2];
        let i;
        e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, W.jsx)(Q, {
            icon: b.Help,
            children: (0, W.jsx)(w, {
                ...G.violenceAuthFreezeEmergency,
                values: {
                    helplineLink: le
                }
            })
        }), e[3] = i) : i = e[3];
        let a;
        e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, W.jsxs)(`div`, {
            className: `flex w-full flex-col gap-3`,
            children: [r, i, (0, W.jsx)(Q, {
                icon: M,
                children: (0, W.jsx)(w, {
                    ...G.violenceAuthFreezeSupport
                })
            })]
        }), e[4] = a) : a = e[4];
        let o;
        return e[5] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, W.jsx)(I, {
            showTerms: !1,
            isStorageComplianceEnabled: !1,
            children: (0, W.jsx)(`main`, {
                className: `flex w-[calc(100%-2rem)] max-w-2xl flex-auto flex-col items-center justify-center`,
                children: (0, W.jsxs)(`div`, {
                    className: `flex w-full flex-col items-center gap-6 px-3 sm:gap-8 sm:px-8`,
                    children: [n, a, (0, W.jsx)(_, {
                        as: `a`,
                        color: `secondary`,
                        openNewTab: !0,
                        to: `https://help.openai.com/articles/20001424`,
                        children: (0, W.jsx)(w, {
                            ...G.violenceAuthFreezeLearnMore
                        })
                    })]
                })
            })
        }), e[5] = o) : o = e[5], o
    }
}));
e((() => {
    ue()
}))();
export {
    Z as
    default
};
//# sourceMappingURL=auth.error-b4irs2c1.js.map