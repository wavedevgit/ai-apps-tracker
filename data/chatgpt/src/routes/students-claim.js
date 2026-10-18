import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    AT as r,
    B6 as i,
    BK as a,
    C1 as o,
    Itt as s,
    My as c,
    NK as l,
    Nrt as u,
    Prt as d,
    QL as f,
    _tt as p,
    b5 as m,
    eR as h,
    i5 as ee,
    it as te,
    iw as ne,
    jy as g,
    k1 as _,
    kT as v,
    n_ as re,
    nt as ie,
    ot as ae,
    ow as oe,
    t_ as se,
    tt as ce,
    u1 as y,
    y5 as b
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as x,
    Bn as S,
    Ht as C,
    Nn as w,
    Pt as le,
    Rn as T,
    Ut as ue,
    Vn as E,
    zn as de
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Cn as D,
    Mn as fe,
    Pn as O,
    UUn as k,
    WUn as pe,
    b8 as me,
    jn as A,
    l2t as he,
    u2t as ge,
    x8 as _e
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Uv as ve,
    Wv as ye,
    ap as be,
    op as xe
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Jn as j,
    Yn as Se,
    d_ as Ce,
    g_ as we,
    qn as Te
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    Dh as Ee,
    Th as De
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    a as M,
    c as N,
    d as Oe,
    f as ke,
    i as P,
    o as F,
    r as I,
    s as L,
    t as R
} from "./d4df9516-fw5h3kvf0vj3ebma.js";

function Ae({
    enrollmentState: e,
    routeConfig: t
}) {
    switch (e.name) {
        case `coming-soon`:
        case `logged-out`:
        case `loading`:
        case `enrolled`:
            return null;
        case `needs-verification`:
            return (0, H.jsx)(z, {
                initialVerificationId: e.verificationId,
                initialAccountVerificationId: e.accountVerificationId,
                routeConfig: t
            });
        case `error`:
            return (0, H.jsx)(z, {
                routeConfig: t
            });
        case `verified`:
            return (0, H.jsx)(je, {
                accountVerificationId: e.accountVerificationId,
                routeConfig: t
            })
    }
}

function z({
    initialVerificationId: e = null,
    initialAccountVerificationId: t = null,
    routeConfig: n
}) {
    let {
        isModalOpen: r
    } = M();
    (0, V.useEffect)(() => {
        r && L.logShowNeedsVerificationModal()
    }, [r]);
    let i = F(e, t, n);
    return (0, H.jsx)(B, {
        title: (0, H.jsx)(w, {
            id: `4o9Zqw`,
            defaultMessage: `Verify student status to claim offer`
        }),
        content: (0, H.jsx)(w, {
            id: `Ze2V6I`,
            defaultMessage: `We use SheerID to verify you're a student at a degree-granting institution — it only takes a moment.`
        }),
        ctaText: (0, H.jsx)(w, {
            id: `GpDdaK`,
            defaultMessage: `Verify status`
        }),
        ctaOnClick: () => {
            L.logClickVerifyButton(`modal`), i()
        }
    })
}

function je({
    accountVerificationId: e,
    routeConfig: t
}) {
    let {
        isModalOpen: n
    } = M();
    (0, V.useEffect)(() => {
        n && L.logShowVerifiedModal()
    }, [n]);
    let r = P(e, t),
        i = o(),
        a = h(),
        s = i?.hasPaidSubscription() && i.isPlus(),
        c = A(t.benefitKind, !!s);
    return (0, H.jsx)(B, {
        title: (0, H.jsx)(w, {
            id: `kxcVUq`,
            defaultMessage: `Status verified`
        }),
        content: c === `codex_credits` ? (0, H.jsx)(w, {
            id: `students.actionModal.verified.codexCredits.content`,
            defaultMessage: `You've successfully validated your student status. You can redeem your credits now on your current account.`
        }) : a?.email ? (0, H.jsx)(w, {
            id: `2DtiBI`,
            defaultMessage: `You've successfully validated your student status. You can claim your offer now on <b>{email}</b>.`,
            values: {
                email: a.email,
                b: e => (0, H.jsx)(`strong`, {
                    children: e
                })
            }
        }) : (0, H.jsx)(w, {
            id: `1aYANk`,
            defaultMessage: `You've successfully validated your student status. You can claim your offer now on your current account.`
        }),
        ctaText: c === `codex_credits` ? (0, H.jsx)(w, {
            id: `students.actionModal.verified.codexCredits.cta`,
            defaultMessage: `Redeem credits`
        }) : c === `apply_subscription_discount` ? (0, H.jsx)(w, {
            id: `Ju0RXc`,
            defaultMessage: `Apply to subscription`
        }) : (0, H.jsx)(w, {
            id: `TQxXgr`,
            defaultMessage: `Claim offer`
        }),
        ctaOnClick: () => {
            L.logClickCheckoutButton(`modal`), r()
        }
    })
}

function B({
    title: e,
    content: t,
    ctaText: n,
    ctaOnClick: r
}) {
    let {
        isLoading: i,
        isModalOpen: a,
        modalErrorMessage: o
    } = M();
    return (0, H.jsxs)(ne, {
        testId: `modal-students-action`,
        type: `success`,
        title: e,
        isOpen: a,
        showCloseButton: !0,
        onClose: R.closeModal,
        children: [(0, H.jsx)(`div`, {
            children: t
        }), o ? (0, H.jsx)(`div`, {
            className: `text-token-text-error mt-4`,
            children: o
        }) : null, (0, H.jsx)(`div`, {
            className: `mt-12`,
            children: (0, H.jsx)(v, {
                loading: i,
                onClick: r,
                children: n
            })
        })]
    })
}
var V, H, Me = e((() => {
    r(), oe(), y(), f(), I(), N(), O(), V = t(E()), T(), H = S()
}));

function Ne({
    initialVerificationId: e = null,
    initialAccountVerificationId: t = null,
    routeConfig: n,
    buttonSource: r
}) {
    let [i] = C(), a = i.get(D) === `true`;
    (0, Pe.useEffect)(() => {
        a && R.openModal()
    }, [a]);
    let o = F(e, t, n),
        {
            isLoading: s
        } = M();
    return (0, U.jsx)(`div`, {
        children: (0, U.jsx)(v, {
            loading: s,
            onClick: async () => {
                L.logClickVerifyButton(r), await o()
            },
            children: (0, U.jsx)(w, {
                id: `GpDdaK`,
                defaultMessage: `Verify status`
            })
        })
    })
}
var Pe, U, Fe = e((() => {
    r(), I(), N(), O(), Pe = t(E()), T(), x(), U = S()
}));

function Ie({
    accountVerificationId: e,
    routeConfig: t,
    buttonSource: n
}) {
    let r = o(),
        [i] = C(),
        a = i.get(`redirectedFromSheerId`) === `true`;
    (0, Le.useEffect)(() => {
        a && R.openModal()
    }, [a]);
    let {
        isLoading: s
    } = M(), c = P(e, t), l = r?.hasPaidSubscription() && r.isPlus(), u = A(t.benefitKind, !!l);
    return (0, W.jsx)(`div`, {
        children: (0, W.jsx)(v, {
            loading: s,
            onClick: () => {
                L.logClickCheckoutButton(n), c()
            },
            children: u === `codex_credits` ? (0, W.jsx)(w, {
                id: `students.verifiedButton.codexCredits.cta`,
                defaultMessage: `Redeem credits`
            }) : u === `apply_subscription_discount` ? (0, W.jsx)(w, {
                id: `Ju0RXc`,
                defaultMessage: `Apply to subscription`
            }) : (0, W.jsx)(w, {
                id: `TQxXgr`,
                defaultMessage: `Claim offer`
            })
        })
    })
}
var Le, W, Re = e((() => {
    r(), y(), I(), N(), O(), Le = t(E()), T(), x(), W = S()
}));

function G({
    enrollmentState: e,
    routeConfig: t,
    buttonSource: r
}) {
    let i = o(),
        s = de(),
        {
            isLoading: c
        } = M(),
        l = !ee(a),
        [u, d] = (0, ze.useState)(!1),
        f = i != null && he(i);
    if (t.blocksMobileStoreSubscribers && f) return l ? (0, K.jsx)(g, {
        open: u,
        side: `top`,
        label: s.formatMessage({
            id: `I2JCGZ`,
            defaultMessage: `Mobile subscriptions are currently not eligible for this promotion.`
        }),
        onDismissClick: () => {
            d(!1)
        },
        children: (0, K.jsx)(v, {
            visuallyDisabled: !0,
            onClick: () => {
                d(!0)
            },
            children: (0, K.jsx)(w, {
                id: `TQxXgr`,
                defaultMessage: `Claim offer`
            })
        })
    }) : (0, K.jsx)(g, {
        side: `top`,
        label: s.formatMessage({
            id: `I2JCGZ`,
            defaultMessage: `Mobile subscriptions are currently not eligible for this promotion.`
        }),
        children: (0, K.jsx)(v, {
            disabled: !0,
            children: (0, K.jsx)(w, {
                id: `2yIN3s`,
                defaultMessage: `Offer unavailable`
            })
        })
    });
    switch (e.name) {
        case `coming-soon`:
            return (0, K.jsx)(v, {
                disabled: !0,
                children: (0, K.jsx)(w, {
                    id: `2yIN3s`,
                    defaultMessage: `Offer unavailable`
                })
            });
        case `logged-out`:
            return (0, K.jsx)(v, {
                loading: c,
                onClick: () => {
                    R.setIsLoading(!0), L.logClickLoginButton(r), n({
                        fallbackScreenHint: `login`,
                        callbackUrl: fe(t.landingPath, D),
                        callback: () => {
                            R.setIsLoading(!1)
                        }
                    })
                },
                children: (0, K.jsx)(w, {
                    id: `RUBDTm`,
                    defaultMessage: `Log in`
                })
            });
        case `loading`:
            return (0, K.jsx)(v, {
                loading: !0,
                disabled: !0,
                children: (0, K.jsx)(w, {
                    id: `TQxXgr`,
                    defaultMessage: `Claim offer`
                })
            });
        case `error`:
            return (0, K.jsx)(Ne, {
                routeConfig: t,
                buttonSource: r
            });
        case `needs-verification`:
            return (0, K.jsx)(Ne, {
                initialVerificationId: e.verificationId,
                initialAccountVerificationId: e.accountVerificationId,
                routeConfig: t,
                buttonSource: r
            });
        case `verified`:
            return (0, K.jsx)(Ie, {
                accountVerificationId: e.accountVerificationId,
                routeConfig: t,
                buttonSource: r
            });
        case `enrolled`:
            return (0, K.jsx)(v, {
                disabled: !0,
                children: (0, K.jsx)(w, {
                    id: `PHQSdT`,
                    defaultMessage: `Claimed`
                })
            })
    }
}
var ze, K, Be = e((() => {
    r(), c(), i(), y(), _(), Fe(), Re(), I(), N(), O(), ge(), l(), ze = t(E()), T(), K = S()
}));

function Ve({
    title: e,
    promo: t,
    description: n,
    enrollmentState: r,
    routeConfig: i,
    ref: a,
    onSecondaryAction: o
}) {
    return (0, q.jsxs)(`section`, {
        ref: a,
        className: `mx-auto flex h-[calc(100vh-325px)] max-h-[600px] min-h-fit max-w-(--breakpoint-2xl) flex-col justify-center gap-4 px-4 pt-16 pb-32 md:px-8 md:py-20`,
        children: [(0, q.jsxs)(`div`, {
            className: `flex items-center gap-4 text-sm`,
            children: [(0, q.jsx)(`span`, {
                className: `user-select-none rounded-full bg-[#CEDFFE] px-2 py-0.5 text-black`,
                children: (0, q.jsx)(w, {
                    id: `DzsyI+`,
                    defaultMessage: `Promo`
                })
            }), t]
        }), (0, q.jsx)(`h1`, {
            className: `relative max-w-[900px] text-4xl text-balance after:pointer-events-none after:absolute after:end-0 after:top-[-95px] after:h-[144px] after:w-[113px] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/splash-stars-v2.png)] after:bg-contain after:bg-center after:bg-no-repeat after:opacity-100 after:content-[''] md:text-5xl md:text-pretty md:after:opacity-0 dark:after:invert`,
            children: (0, q.jsx)(`span`, {
                className: `relative after:pointer-events-none after:absolute after:start-[calc(100%_+_280px)] after:top-[-95px] after:h-[144px] after:w-[113px] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/splash-stars-v2.png)] after:bg-contain after:bg-center after:bg-no-repeat after:opacity-0 after:content-[''] md:after:opacity-100 dark:after:invert`,
                children: e
            })
        }), n && (0, q.jsx)(`p`, {
            className: `max-w-[800px]`,
            children: n
        }), (0, q.jsxs)(`div`, {
            className: `relative mt-2 flex w-[fit-content] items-center gap-2 after:pointer-events-none after:absolute after:start-[-15px] after:top-[-30px] after:h-[200px] after:w-[255px] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/splash-scribble-v2.png)] after:bg-contain after:bg-center after:bg-no-repeat after:content-[''] dark:after:invert`,
            children: [(0, q.jsx)(G, {
                enrollmentState: r,
                routeConfig: i,
                buttonSource: `splash`
            }), (0, q.jsx)(v, {
                color: `ghost`,
                onClick: o,
                children: (0, q.jsx)(w, {
                    id: `ng/0pH`,
                    defaultMessage: `Learn more`
                })
            })]
        })]
    })
}
var q, He = e((() => {
    r(), T(), Be(), q = S()
}));

function Ue({
    question: e,
    answer: t,
    isOpen: n,
    onToggle: r
}) {
    return (0, J.jsxs)(`div`, {
        className: `border-token-border-default hover:border-token-border-heavy border-b`,
        children: [(0, J.jsxs)(`button`, {
            onClick: r,
            className: `text-md flex w-full justify-between py-5 text-start text-[17px]`,
            "aria-expanded": n,
            "aria-controls": `${e}-answer`,
            id: `${e}-question`,
            "aria-label": `${e} ${n?`close`:`open`}`,
            children: [e, (0, J.jsx)(`span`, {
                className: `ps-4`,
                children: n ? `−` : `+`
            })]
        }), (0, J.jsx)(`div`, {
            className: b(`grid transition-all duration-200`, {
                "grid-rows-[1fr]": n,
                "grid-rows-[0fr]": !n
            }),
            "aria-hidden": !n,
            id: `${e}-answer`,
            children: (0, J.jsx)(`div`, {
                className: `overflow-hidden`,
                children: (0, J.jsx)(`div`, {
                    className: `mb-5 text-[14px] opacity-70`,
                    children: t
                })
            })
        })]
    })
}
var J, We = e((() => {
    m(), J = S()
}));

function Ge({
    routeConfig: e
}) {
    let t = !d(),
        {
            eligible: n
        } = ae(ce.hasSeenStudentsUpsellAnnouncement),
        {
            isEnabled: r,
            reason: i
        } = Se(e),
        a = ke(e),
        o = (0, Y.useRef)(!1);
    (0, Y.useEffect)(() => {
        !o.current && !r && (o.current = !0, L.logDisabledAccess(i))
    }, [r, i]);
    let c = (0, Y.useRef)(!1);
    (0, Y.useEffect)(() => {
        c.current || (c.current = !0, !t && r && n && te(ce.hasSeenStudentsUpsellAnnouncement))
    }, [t, r, n]), (0, Y.useEffect)(() => {
        L.logLandingPageImpression()
    }, []);
    let l = s(),
        u = (0, Y.useRef)(null),
        f = (0, Y.useRef)(null),
        p = (0, Y.useRef)(null),
        [m, h] = Qe([u, f], {
            threshold: .1
        }),
        ee = !m && !h || !1;
    return (0, X.jsxs)(`div`, {
        className: `font-oai overflow-hidden pt-[71px] pb-8`,
        children: [(0, X.jsx)(Ke, {
            enrollmentState: a,
            routeConfig: e
        }), (0, X.jsx)(Ve, {
            ref: u,
            description: `Offer valid for students in the US and Canada`,
            title: `ChatGPT Plus is now free for college students through May`,
            promo: `2 months free for students`,
            enrollmentState: a,
            routeConfig: e,
            onSecondaryAction: () => {
                window.scrollTo({
                    top: (p.current?.offsetTop ?? 0) - (l ? 20 : 100),
                    behavior: `smooth`
                })
            }
        }), (0, X.jsx)(Je, {
            title: (0, X.jsxs)(X.Fragment, {
                children: [`ChatGPT Plus is here to help you through`, ` `, (0, X.jsx)(`span`, {
                    className: `relative`,
                    children: `finals`
                })]
            }),
            description: `Get increased file uploads, expanded messaging limits, advanced voice mode, deep research, and more with Plus.`,
            cardItems: [{
                subtitle: `Summarize docs`,
                title: (0, X.jsxs)(`span`, {
                    children: [`Upload, `, (0, X.jsx)(`br`, {}), ` summarize, go`]
                }),
                description: `Upload dozens of docs, PDFs, and images and ask ChatGPT for a content summary or a quiz.`,
                imageUrl: `https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/card-upload.png`
            }, {
                subtitle: `Research assistance`,
                title: (0, X.jsxs)(`span`, {
                    children: [`Research `, (0, X.jsx)(`br`, {}), ` faster`]
                }),
                description: `Save hours of time by asking ChatGPT to do detailed online research that helps you deliver a well-cited report.`,
                imageUrl: `https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/card-research.png`
            }, {
                subtitle: `Writing help`,
                title: (0, X.jsxs)(`span`, {
                    children: [`Brainstorm `, (0, X.jsx)(`br`, {}), ` ideas`]
                }),
                description: `Get unstuck from writer’s block and brainstorm ideas with ChatGPT – and get edits and writing tips, too.`,
                imageUrl: `https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/card-brainstorm.png`
            }, {
                subtitle: `Image creation`,
                title: (0, X.jsxs)(`span`, {
                    children: [`Spark `, (0, X.jsx)(`br`, {}), ` creativity`]
                }),
                description: `Create images and videos for your presentations and reports, or for your own creative projects.`,
                imageUrl: `https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/card-spark.png`
            }, {
                subtitle: `Real time conversations`,
                title: (0, X.jsx)(`span`, {
                    children: `Have a real-time conversation`
                }),
                description: `Practice speaking foreign languages – or prep for interviews – with longer real-time conversations in ChatGPT.`,
                imageUrl: `https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/card-conversation.png`
            }]
        }), (0, X.jsx)(Ye, {
            ref: p,
            title: `FAQs`,
            faqs: [{
                question: `Am I eligible for the student offer?`,
                answer: (0, X.jsxs)(`p`, {
                    children: [`Full and part-time students at degree-granting schools in the United States and Canada are eligible for this offer. If you don’t see your school on the student verification list, please click this`, ` `, (0, X.jsx)(k, {
                        href: `https://support.sheerid.com/en-US/${e.sheerIdProgramId}/asr`,
                        openNewTab: !0,
                        className: `text-token-text-primary`,
                        children: `link`
                    }), ` `, `to receive further assistance from our partner. This will let you submit a request to add your school, find it by another name, or see if your school is not eligible for this offer.`]
                })
            }, {
                question: `How do you know I’m a student?`,
                answer: (0, X.jsxs)(X.Fragment, {
                    children: [(0, X.jsx)(`p`, {
                        children: `We verify student status using SheerID’s secure verification system, which confirms your eligibility through multiple methods:`
                    }), (0, X.jsx)(`br`, {}), (0, X.jsxs)(`ul`, {
                        className: `list-disc ps-4`,
                        children: [(0, X.jsxs)(`li`, {
                            children: [(0, X.jsx)(`strong`, {
                                children: `Authoritative Sources:`
                            }), ` SheerID first checks trusted databases, such as your university’s Office of the Registrar, to instantly verify your student status.`]
                        }), (0, X.jsxs)(`li`, {
                            children: [(0, X.jsx)(`strong`, {
                                children: `Single Sign-On (SSO):`
                            }), ` If necessary, you’ll be prompted to log in securely with your school’s SSO credentials, confirming your affiliation directly through your institution.`]
                        })]
                    }), (0, X.jsx)(`br`, {}), (0, X.jsx)(`p`, {
                        children: `If instant verification isn’t possible through these methods, you may be asked to upload additional documentation for manual review.`
                    })]
                })
            }, {
                question: `What’s included in the offer?`,
                answer: (0, X.jsx)(`p`, {
                    children: `Students can claim access to ChatGPT Plus for free from March 31, 2025 – May 31, 2025. The offer is valid for two months once you claim it.`
                })
            }, {
                question: `I already have a ChatGPT Plus subscription, how do I get this offer?`,
                answer: (0, X.jsx)(`p`, {
                    children: `Existing ChatGPT Plus users can access this offer by verifying your student status through SheerID. Once verified, you will be redirected to ChatGPT and your account will automatically be credited for the two free months.`
                })
            }]
        }), (0, X.jsx)(Ze, {
            ref: f,
            title: `Offer details`,
            description: (0, X.jsxs)(X.Fragment, {
                children: [`Get access to ChatGPT Plus for free from March 31, 2025 - May 31, 2025. Offer valid for two months once you claim it. See`, ` `, (0, X.jsx)(k, {
                    href: `https://help.openai.com/en/articles/10986084-student-discounts-for-chatgpt-terms-of-service`,
                    openNewTab: !0,
                    className: `text-token-text-primary`,
                    children: `terms`
                }), ` `, `for more details.`]
            }),
            enrollmentState: a,
            routeConfig: e
        }), (0, X.jsx)(Ae, {
            enrollmentState: a,
            routeConfig: e
        }), (0, X.jsx)(qe, {
            enrollmentState: a,
            showBottomNav: ee,
            routeConfig: e
        })]
    })
}

function Ke({
    enrollmentState: e,
    routeConfig: t
}) {
    let n = !d(),
        [r, i] = (0, Y.useState)(!1),
        [a, o] = (0, Y.useState)(!1);
    return (0, Y.useEffect)(() => {
        let e = re(() => {
            i(window.scrollY > 0), o(window.scrollY > 300)
        }, 200);
        return window.addEventListener(`scroll`, e), () => window.removeEventListener(`scroll`, e)
    }, []), (0, X.jsx)(`nav`, {
        className: b(`bg-token-main-surface-primary absolute start-0 end-0 top-0 z-10 py-4 transition-all duration-300 md:fixed md:border-b`, {
            "border-token-border-default": r,
            "border-transparent": !r
        }),
        children: (0, X.jsxs)(`div`, {
            className: b(`mx-auto flex items-center justify-between`, Z),
            children: [(0, X.jsx)(`a`, {
                href: `/`,
                "aria-label": `ChatGPT Home`,
                children: (0, X.jsx)(me, {})
            }), n ? (0, X.jsx)(Xe, {
                routeConfig: t
            }) : (0, X.jsxs)(`div`, {
                className: `flex gap-2`,
                children: [(0, X.jsx)(`div`, {
                    className: b(`opacity-0 transition-opacity`, {
                        "md:opacity-100": a
                    }),
                    inert: !a,
                    children: (0, X.jsx)(G, {
                        enrollmentState: e,
                        routeConfig: t,
                        buttonSource: `header`
                    })
                }), (0, X.jsx)(De, {})]
            })]
        })
    })
}

function qe({
    enrollmentState: e,
    showBottomNav: t = !1,
    routeConfig: n
}) {
    return (0, X.jsx)(`nav`, {
        className: b(`border-token-border-default bg-token-main-surface-primary fixed start-0 end-0 bottom-0 z-10 border-t py-4 text-center transition-[opacity_transform] duration-200 ease-in-out md:hidden`, {
            "translate-y-0 opacity-100": t,
            "translate-y-[100%] opacity-0": !t
        }),
        children: (0, X.jsx)(G, {
            enrollmentState: e,
            routeConfig: n,
            buttonSource: `header`
        })
    })
}

function Je({
    title: e,
    description: t,
    cardItems: n
}) {
    let [r, i] = (0, Y.useState)(!0), [a, o] = (0, Y.useState)(!1), s = (0, Y.useRef)(null), c = (0, Y.useRef)(null), l = (0, Y.useRef)(null), u = e => {
        if (s.current) {
            let t = e === `left` ? s.current.scrollLeft - 300 : s.current.scrollLeft + 300;
            s.current.scrollTo({
                left: t,
                behavior: `smooth`
            })
        }
    };
    return (0, Y.useEffect)(() => {
        let e = c.current,
            t = l.current,
            n = {
                root: s.current,
                threshold: 1
            },
            r = new IntersectionObserver(n => {
                n.forEach(n => {
                    n.target === e && i(n.isIntersecting), n.target === t && o(n.isIntersecting)
                })
            }, n);
        return e && r.observe(e), t && r.observe(t), () => {
            e && r.unobserve(e), t && r.unobserve(t)
        }
    }, []), (0, X.jsxs)(`section`, {
        className: `pt-20`,
        children: [(0, X.jsxs)(`div`, {
            className: b(`mx-auto flex flex-col gap-8`, Z),
            children: [(0, X.jsx)(`h2`, {
                className: b(Q, $, `font-medium`),
                children: e
            }), (0, X.jsxs)(`div`, {
                className: `flex flex-col gap-2 md:flex-row md:items-end md:justify-between`,
                children: [(0, X.jsx)(`p`, {
                    className: `max-w-[600px] text-[17px]`,
                    children: t
                }), (0, X.jsxs)(`div`, {
                    children: [(0, X.jsx)(v, {
                        color: `ghost`,
                        icon: be,
                        onClick: () => u(`left`),
                        disabled: r
                    }), (0, X.jsx)(v, {
                        color: `ghost`,
                        icon: ve,
                        onClick: () => u(`right`),
                        disabled: a,
                        className: `relative after:pointer-events-none after:absolute after:end-[-15%] after:top-[-100%] after:h-[120%] after:w-[120%] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/cards-more-v2.png)] after:bg-contain after:bg-center after:bg-no-repeat after:opacity-0 after:content-[''] md:after:opacity-100 dark:after:invert`
                    })]
                })]
            })]
        }), (0, X.jsx)(`div`, {
            ref: s,
            className: `no-scrollbar mx-auto mt-8 flex snap-x snap-mandatory scroll-ps-4 gap-6 overflow-x-auto ps-4 pe-6 md:scroll-ps-8 md:ps-8 md:pe-8 2xl:scroll-ps-[calc((100%_-_96rem)_/_2_+_32px)] 2xl:ps-[calc((100%_-_96rem)_/_2_+_32px)]`,
            children: n.map((e, t) => (0, X.jsxs)(`div`, {
                ref: t === 0 ? c : t === n.length - 1 ? l : null,
                className: `flex w-[290px] shrink-0 snap-start flex-col overflow-hidden rounded-md text-black nth-1:bg-[#FFF493] nth-2:bg-[#EBEBEB] nth-3:bg-[#94E6FF] nth-4:bg-[#C8F7AB] nth-5:bg-[#B4A6FE] md:w-[370px]`,
                children: [(0, X.jsxs)(`div`, {
                    className: `px-8 pt-8`,
                    children: [(0, X.jsx)(`p`, {
                        className: `text-3xl leading-none font-medium text-balance md:text-[44px]`,
                        children: e.title
                    }), (0, X.jsx)(`p`, {
                        className: `mt-3 text-[17px]`,
                        children: e.description
                    })]
                }), (0, X.jsx)(`div`, {
                    className: `mt-auto`,
                    children: (0, X.jsx)(`img`, {
                        src: e.imageUrl,
                        alt: e.description,
                        className: `mt-[-32px] h-auto w-full md:mt-[-48px]`
                    })
                })]
            }, t))
        })]
    })
}

function Ye({
    title: e,
    faqs: t,
    ref: n
}) {
    let [r, i] = (0, Y.useState)(0), a = e => {
        i(r === e ? -1 : e)
    };
    return (0, X.jsxs)(`section`, {
        ref: n,
        className: b(`mx-auto flex max-w-[596px] flex-col gap-8 px-4 py-20 md:gap-16 md:py-32`),
        children: [(0, X.jsx)(`h2`, {
            className: b(Q, `sm:text-center`),
            children: (0, X.jsx)(`span`, {
                className: `relative after:pointer-events-none after:absolute after:start-[calc(100%_-_25px)] after:bottom-[75%] after:h-[64px] after:w-[75px] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/faq-bubble-small-v2.png)] after:bg-contain after:bg-center after:bg-no-repeat after:content-[''] dark:after:invert`,
                children: e
            })
        }), (0, X.jsx)(`div`, {
            className: ``,
            children: t.map((e, t) => (0, X.jsx)(Ue, {
                question: e.question,
                answer: e.answer,
                isOpen: r === t,
                onToggle: () => a(t)
            }, t))
        })]
    })
}

function Xe({
    routeConfig: e
}) {
    let {
        isLoading: t
    } = M(), r = t => {
        R.setIsLoading(!0), n({
            fallbackScreenHint: t,
            callbackUrl: fe(e.landingPath, D),
            callback: () => {
                R.setIsLoading(!1)
            }
        })
    };
    return (0, X.jsxs)(`div`, {
        className: `flex gap-2`,
        children: [(0, X.jsx)(v, {
            loading: t,
            color: `primary`,
            onClick: () => r(`login`),
            children: (0, X.jsx)(w, {
                id: `brvGyv`,
                defaultMessage: `Login`
            })
        }), (0, X.jsx)(v, {
            loading: t,
            color: `secondary`,
            onClick: () => r(`signup`),
            children: (0, X.jsx)(w, {
                id: `Q/RwJ7`,
                defaultMessage: `Sign up`
            })
        })]
    })
}

function Ze({
    title: e,
    description: t,
    enrollmentState: n,
    routeConfig: r,
    ref: i
}) {
    return (0, X.jsxs)(`section`, {
        ref: i,
        className: b(`bg-token-composer-surface mx-auto flex w-[calc(100%_-_32px)] max-w-(--breakpoint-2xl) flex-col items-center rounded-md px-4 py-32 text-center md:w-[calc(100%_-_64px)] md:px-0`, `relative after:pointer-events-none after:absolute after:bottom-0 after:h-[140px] after:w-[80%] after:max-w-[340px] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/offer-flowers-v2.png)] after:bg-contain after:bg-bottom after:bg-no-repeat after:content-[''] dark:after:invert`),
        children: [(0, X.jsx)(`h2`, {
            className: b(Q, $),
            children: e
        }), (0, X.jsx)(`p`, {
            className: b(`mt-3 mb-8 max-w-[600px] text-[17px] text-pretty`),
            children: t
        }), (0, X.jsx)(G, {
            enrollmentState: n,
            routeConfig: r,
            buttonSource: `footer`
        })]
    })
}

function Qe(e, t = {}) {
    let n = (0, Y.useMemo)(() => e.map(e => e.current), [e]),
        [r, i] = (0, Y.useState)(() => n.map(() => !1));
    return (0, Y.useEffect)(() => {
        let e = new IntersectionObserver(e => {
            e.forEach(e => {
                let t = n.findIndex(t => t === e.target);
                t !== -1 && i(n => {
                    if (n[t] === e.isIntersecting) return n;
                    let r = [...n];
                    return r[t] = e.isIntersecting, r
                })
            })
        }, t);
        return n.forEach(t => {
            t && e.observe(t)
        }), () => {
            n.forEach(t => {
                t && e.unobserve(t)
            })
        }
    }, [n, t]), r
}
var Y, X, Z, Q, $, $e = e((() => {
    r(), _e(), xe(), ye(), pe(), Ee(), _(), Me(), He(), Oe(), j(), I(), N(), O(), ie(), u(), p(), m(), se(), Y = t(E()), T(), Be(), We(), X = S(), Z = `max-w-(--breakpoint-2xl) px-4 md:px-8`, Q = `text-2xl md:text-3xl`, $ = `max-w-[800px]`
}));

function et({
    routeConfig: e = Ce
}) {
    return (0, tt.jsx)(Ge, {
        routeConfig: e
    })
}
var tt, nt = e((() => {
        we(), $e(), tt = S()
    })),
    rt, it, at, ot, st, ct = e((() => {
        x(), j(), nt(), rt = t(E()), it = S(), at = ue(function() {
            let e = Te(),
                t = le();
            return (0, rt.useEffect)(() => {
                e || t(`/`, {
                    replace: !0
                })
            }, [e, t]), e ? (0, it.jsx)(et, {}) : null
        }), ot = {
            hasRouteMeta: !0
        }, st = () => {
            let e = `ChatGPT for students | ChatGPT`,
                t = `Discover ways to use ChatGPT to help you study, write, and stay organized.`;
            return [{
                title: e
            }, {
                property: `og:site_name`,
                content: `ChatGPT`
            }, {
                property: `og:type`,
                content: `website`
            }, {
                property: `og:title`,
                content: e
            }, {
                property: `og:url`,
                content: `https://chatgpt.com/students`
            }, {
                name: `description`,
                content: t
            }, {
                property: `og:description`,
                content: t
            }, {
                property: `og:image`,
                content: `https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/seo-image.png`
            }, {
                property: `og:image:width`,
                content: `1200`
            }, {
                property: `og:image:height`,
                content: `630`
            }, {
                property: `twitter:card`,
                content: `summary_large_image`
            }]
        }
    }));
e((() => {
    ct()
}))();
export {
    at as
    default, ot as handle, st as meta
};
//# sourceMappingURL=students-claim-kx51aqnk.js.map