import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ln as t,
    Rn as n
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bu as r,
    Jd as i,
    Qh as a,
    Sf as o,
    Tv as s,
    Vu as c,
    Zh as l,
    _m as u,
    _p as d,
    cp as f,
    fb as p,
    gm as ee,
    pb as m,
    qd as h,
    sp as g,
    wv as _,
    xf as v,
    yp as y
} from "./30901919-e8h11sw136qen6v0.js";
import {
    Mu as b,
    Pu as x,
    _p as S,
    fp as C,
    hp as w,
    ju as T,
    mp as E,
    pp as D,
    up as O,
    vp as k
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
var A, j, M, N, P, F, I, L, R = e((() => {
        A = `webp`, j = 1626, M = `srgb`, N = `uchar`, P = {
            width: 1626,
            height: 180
        }, F = [{
            keyword: `Software`,
            text: `Figma`
        }], I = `/cdn/assets/direct-purchase-logo-garden-egaw3iyh.webp`, L = {
            format: A,
            width: j,
            height: 180,
            space: M,
            channels: 4,
            depth: N,
            density: 216,
            isProgressive: !1,
            isPalette: !1,
            bitsPerSample: 8,
            hasProfile: !1,
            hasAlpha: !0,
            autoOrient: P,
            comments: F,
            src: I
        }
    })),
    z, B = e((() => {
        n(), z = t({
            altTitle: {
                id: `businessPurchaseInterstitialPage.altTitle`,
                defaultMessage: `ChatGPT Business`
            },
            altFreeTrialSubtitle: {
                id: `businessPurchaseInterstitialPage.altFreeTrialSubtitle`,
                defaultMessage: `Free 30-day trial`
            },
            email: {
                id: `businessPurchaseInterstitialPage.email`,
                defaultMessage: `Continue with Email`
            },
            alreadyHaveAccount: {
                id: `businessPurchaseInterstitialPage.alreadyHaveAccount`,
                defaultMessage: `<content>Already have an account?</content> <login>Log in</login>`
            },
            termsOfUse: {
                id: `businessPurchaseInterstitialPage.termsOfUse`,
                defaultMessage: `Terms of Use`
            },
            privacyPolicy: {
                id: `businessPurchaseInterstitialPage.privacyPolicy`,
                defaultMessage: `Privacy Policy`
            },
            placeholder: {
                id: `businessPurchaseInterstitialPage.emailInputPlaceholder`,
                defaultMessage: `Email address`
            },
            logoGardenTitle: {
                id: `businessPurchaseInterstitialPage.logoGardenTitle`,
                defaultMessage: `Trusted by thousands of teams like`
            },
            emailRequiredError: {
                id: `businessPurchaseInterstitialPage.errors.emailRequired`,
                defaultMessage: `Email is required`
            },
            emailInvalidError: {
                id: `businessPurchaseInterstitialPage.errors.emailInvalid`,
                defaultMessage: `Email is invalid.`
            },
            getButton: {
                id: `businessPurchaseInterstitialPage.getButton`,
                defaultMessage: `Get Business`
            },
            tryButton: {
                id: `businessPurchaseInterstitialPage.tryButton`,
                defaultMessage: `Try it for free`
            },
            redeemOneDollarOfferButton: {
                id: `businessPurchaseInterstitialPage.redeemOneDollarOfferButton`,
                defaultMessage: `Redeem {amount} offer`
            },
            claimOneDollarOfferButton: {
                id: `businessPurchaseInterstitialPage.claimOneDollarOfferButton`,
                defaultMessage: `Claim {amount} offer`
            },
            redeemFreeOfferButton: {
                id: `businessPurchaseInterstitialPage.redeemFreeOfferButton`,
                defaultMessage: `Redeem free offer`
            },
            claimFreeOfferButton: {
                id: `businessPurchaseInterstitialPage.claimFreeOfferButton`,
                defaultMessage: `Claim free offer`
            },
            redeemOfferButton: {
                id: `businessPurchaseInterstitialPage.redeemOfferButton`,
                defaultMessage: `Redeem offer`
            },
            claimOfferButton: {
                id: `businessPurchaseInterstitialPage.claimOfferButton`,
                defaultMessage: `Claim offer`
            },
            tryOneDollarButton1: {
                id: `businessPurchaseInterstitialPage.tryOneDollarButton1`,
                defaultMessage: `Try it for {amount}`
            },
            or: {
                id: `businessPurchaseInterstitialPage.or`,
                defaultMessage: `OR`
            },
            altFreeTrialSubtitleOneDollar1: {
                id: `businessPurchaseInterstitialPage.altFreeTrialSubtitleOneDollar1`,
                defaultMessage: `Get started for {amount}`
            },
            homeButtonAriaLabel: {
                id: `createAccount.businessHomeButtonAriaLabel`,
                defaultMessage: `Click here to go to the home page`
            },
            logoGardenAlt: {
                id: `businessPurchaseInterstitialPage.logoGardenAlt`,
                defaultMessage: `Logos of companies using ChatGPT Business`
            },
            claimSubtitle: {
                id: `businessPurchaseInterstitialPage.claimSubtitle`,
                defaultMessage: `Enter your work email to claim your offer`
            },
            loggedOutToast: {
                id: `businessPurchaseInterstitialPage.logout_email_hint_toast`,
                defaultMessage: `Logged out of {email}`
            },
            claimFreeTrial: {
                id: `businessPurchaseInterstitialPage.claimFreeTrial`,
                defaultMessage: `Claim free trial`
            },
            emailClaimTrialPlaceholder: {
                id: `businessPurchaseInterstitialPage.emailClaimTrialPlaceholder`,
                defaultMessage: `Work email`
            },
            useWorkEmailError: {
                id: `businessPurchaseInterstitialPage.useWorkEmailError`,
                defaultMessage: `Use your work email`
            }
        })
    }));

function V({
    planType: e,
    overrideType: t,
    showBusinessPremiumCopy: n = !1
}) {
    let r = $[e];
    if (!r) throw Error(`Unknown direct purchase plan type: ${e}`);
    return e === b.Team && n ? {
        ...r.default,
        title: W.businessPremiumTitle,
        advertisedFeatures: Y
    } : (t && r.overrides ? r.overrides[t] : void 0) ?? r.default
}

function H({
    planType: e,
    overrideType: t,
    showBusinessPremiumCopy: n
}) {
    return V({
        planType: e,
        overrideType: t,
        showBusinessPremiumCopy: n
    })
}

function U({
    planType: e,
    overrideType: t
}) {
    return H({
        planType: e,
        overrideType: t,
        showBusinessPremiumCopy: e === b.Team
    })
}
var W, G, K, q, J, Y, X, Z, Q, $, te = e((() => {
    i(), u(), s(), y(), o(), m(), a(), r(), g(), n(), w(), x(), W = t({
        goGenericTitle: {
            id: `directPurchaseAdvertisedFeatures.goGeneric.title`,
            defaultMessage: `Get help writing, learning, and finding answers fast`
        },
        goGenericAltTitle: {
            id: `directPurchaseAdvertisedFeatures.goGeneric.altTitle`,
            defaultMessage: `More access to popular features`
        },
        goGenericSubtitle: {
            id: `directPurchaseAdvertisedFeatures.goGeneric.subtitle`,
            defaultMessage: `ChatGPT Go gives you smarter, faster responses and the tools to get more done.`
        },
        plusGenericSubtitle: {
            id: `directPurchaseAdvertisedFeatures.plusGeneric.subtitle`,
            defaultMessage: `Faster performance, higher limits, and smarter tools for everyday work and creativity.`
        },
        plusCodexTitle: {
            id: `directPurchaseAdvertisedFeatures.plusCodex.title`,
            defaultMessage: `Do more with Codex in ChatGPT Plus`
        },
        plusCodexSubtitle: {
            id: `directPurchaseAdvertisedFeatures.plusCodex.subtitle`,
            defaultMessage: `Code faster and more confidently with Codex built into ChatGPT Plus.`
        },
        plusCodexFeatureSmarterResponses: {
            id: `directPurchaseAdvertisedFeatures.plusCodex.featureSmarterResponses`,
            defaultMessage: `Smarter, faster responses with GPT-5`
        },
        plusCodexFeatureFocusedCodingSessions: {
            id: `directPurchaseAdvertisedFeatures.plusCodex.featureFocusedCodingSessions`,
            defaultMessage: `Use Codex for focused coding sessions`
        },
        plusCodexFeatureDebugRefactor: {
            id: `directPurchaseAdvertisedFeatures.plusCodex.featureDebugRefactor`,
            defaultMessage: `Debug, refactor, and ship with confidence`
        },
        plusCodexFeatureExtraMemory: {
            id: `directPurchaseAdvertisedFeatures.plusCodex.featureExtraMemory`,
            defaultMessage: `Extra memory and context for your work`
        },
        proGenericSubtitle: {
            id: `directPurchaseAdvertisedFeatures.proGeneric.subtitle`,
            defaultMessage: `Unlock unlimited use of our most capable models, voice features, and tools for power users.`
        },
        proCodexTitle: {
            id: `directPurchaseAdvertisedFeatures.proCodex.title`,
            defaultMessage: `Professional-grade coding intelligence from Codex`
        },
        proCodexAltTitle: {
            id: `directPurchaseAdvertisedFeatures.proCodex.altTitle`,
            defaultMessage: `Tackle complex projects faster with Codex`
        },
        proCodexSubtitle: {
            id: `directPurchaseAdvertisedFeatures.proCodex.subtitle`,
            defaultMessage: `Work faster across multiple projects with unlimited Codex in ChatGPT Pro.`
        },
        proCodexFeatureUnlimitedModels: {
            id: `directPurchaseAdvertisedFeatures.proCodex.featureUnlimitedModels`,
            defaultMessage: `Unlimited access to our best models`
        },
        proCodexFeatureHigherUsage: {
            id: `directPurchaseAdvertisedFeatures.proCodex.featureHigherUsage`,
            defaultMessage: `Higher usage limits for full workdays`
        },
        proCodexFeatureGenerateDebugRefactor: {
            id: `directPurchaseAdvertisedFeatures.proCodex.featureGenerateDebugRefactor`,
            defaultMessage: `Generate, debug, and refactor code`
        },
        proCodexFeatureMostGeneration: {
            id: `directPurchaseAdvertisedFeatures.proCodex.featureMostGeneration`,
            defaultMessage: `The most image, video, and code generation`
        },
        businessTitle: {
            id: `directPurchaseAdvertisedFeatures.businessTitle`,
            defaultMessage: `Advanced AI, backed by enterprise-grade security`
        },
        businessPremiumTitle: {
            id: `directPurchaseAdvertisedFeatures.businessPremium.title`,
            defaultMessage: `Advanced AI for every team and project`
        },
        businessPremiumFeatureProducts: {
            id: `directPurchaseAdvertisedFeatures.businessPremium.feature.products`,
            defaultMessage: `ChatGPT, ChatGPT Work, and Codex`
        },
        businessPremiumFeaturePlugins: {
            id: `directPurchaseAdvertisedFeatures.businessPremium.feature.plugins`,
            defaultMessage: `Plugins for Microsoft 365, Google Workspace, Slack, GitHub, and more`
        },
        businessPremiumFeatureWorkspaceAgents: {
            id: `directPurchaseAdvertisedFeatures.businessPremium.feature.workspaceAgents`,
            defaultMessage: `Workspace agents for customized workflows`
        },
        businessPremiumFeatureSeatBillingManagement: {
            id: `directPurchaseAdvertisedFeatures.businessPremium.feature.seatBillingManagement`,
            defaultMessage: `Easy seat and billing management`
        },
        businessCodexTitle: {
            id: `directPurchaseAdvertisedFeatures.businessCodexTitle`,
            defaultMessage: `Empower your team to build faster with Codex`
        },
        businessSubtitle: {
            id: `directPurchaseAdvertisedFeatures.businessSubtitle`,
            defaultMessage: `Top features`
        },
        businessCodexFeatureEngineering: {
            id: `directPurchaseAdvertisedFeatures.businessCodex.featureEngineering`,
            defaultMessage: `AI-powered software engineering`
        },
        businessCodexFeatureSecurity: {
            id: `directPurchaseAdvertisedFeatures.businessCodex.featureSecurity`,
            defaultMessage: `No training on your data; SAML security`
        },
        businessCodexFeatureReviews: {
            id: `directPurchaseAdvertisedFeatures.businessCodex.featureReviews`,
            defaultMessage: `Automate code and security reviews`
        },
        businessCodexFeatureActions: {
            id: `directPurchaseAdvertisedFeatures.businessCodex.featureActions`,
            defaultMessage: `Take action across files and tools`
        }
    }), G = C(), K = D(), q = E(), J = O(), Y = [{
        label: W.businessPremiumFeatureProducts,
        icon: _
    }, {
        label: W.businessPremiumFeaturePlugins,
        icon: h
    }, {
        label: W.businessPremiumFeatureWorkspaceAgents,
        icon: ee
    }, {
        label: W.businessPremiumFeatureSeatBillingManagement,
        icon: c
    }], X = [{
        label: W.plusCodexFeatureSmarterResponses,
        icon: f
    }, {
        label: W.plusCodexFeatureFocusedCodingSessions,
        icon: d
    }, {
        label: W.plusCodexFeatureDebugRefactor,
        icon: p
    }, {
        label: W.plusCodexFeatureExtraMemory,
        icon: l
    }], Z = [{
        label: W.proCodexFeatureUnlimitedModels,
        icon: f
    }, {
        label: W.proCodexFeatureHigherUsage,
        icon: d
    }, {
        label: W.proCodexFeatureGenerateDebugRefactor,
        icon: p
    }, {
        label: W.proCodexFeatureMostGeneration,
        icon: l
    }], Q = [{
        label: W.businessCodexFeatureSecurity,
        icon: l
    }, {
        label: W.businessCodexFeatureEngineering,
        icon: f
    }, {
        label: W.businessCodexFeatureReviews,
        icon: h
    }, {
        label: W.businessCodexFeatureActions,
        icon: v
    }], $ = {
        [b.Go]: {
            default: {
                title: W.goGenericTitle,
                altTitle: W.goGenericAltTitle,
                subtitle: W.goGenericSubtitle,
                advertisedFeatures: G
            }
        },
        [b.Plus]: {
            default: {
                title: S.headline,
                subtitle: W.plusGenericSubtitle,
                advertisedFeatures: K
            },
            overrides: {
                [T.Codex]: {
                    title: W.plusCodexTitle,
                    subtitle: W.plusCodexSubtitle,
                    advertisedFeatures: X
                }
            }
        },
        [b.Pro]: {
            default: {
                title: k.headline,
                subtitle: W.proGenericSubtitle,
                advertisedFeatures: q
            },
            overrides: {
                [T.Codex]: {
                    title: W.proCodexTitle,
                    altTitle: W.proCodexAltTitle,
                    subtitle: W.proCodexSubtitle,
                    advertisedFeatures: Z
                }
            }
        },
        [b.ProLite]: {
            default: {
                title: k.headline,
                subtitle: W.proGenericSubtitle,
                advertisedFeatures: q
            },
            overrides: {
                [T.Codex]: {
                    title: W.proCodexTitle,
                    altTitle: W.proCodexAltTitle,
                    subtitle: W.proCodexSubtitle,
                    advertisedFeatures: Z
                }
            }
        },
        [b.Team]: {
            default: {
                title: W.businessTitle,
                subtitle: W.businessSubtitle,
                advertisedFeatures: J
            }
        },
        [b.CodexTeam]: {
            default: {
                title: W.businessCodexTitle,
                subtitle: W.businessSubtitle,
                advertisedFeatures: Q
            }
        }
    }
}));
export {
    z as a, B as i, H as n, L as o, te as r, R as s, U as t
};
//# sourceMappingURL=99d6a32a-iisl0dpm8emprq90.js.map