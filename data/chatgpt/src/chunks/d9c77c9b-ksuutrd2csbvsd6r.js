import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $8 as n,
    $T as r,
    Cat as i,
    D6 as a,
    Int as o,
    LU as s,
    Pnt as c,
    Rz as l,
    T6 as u,
    a0 as d,
    eE as f,
    jst as p,
    kI as m,
    o0 as h,
    q1 as g,
    r5 as _,
    vct as v,
    xat as y,
    zU as b,
    zz as x
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    At as S,
    Bn as C,
    Ft as ee,
    Ht as w,
    Ln as T,
    Nn as te,
    Nt as E,
    Q as D,
    Rn as O,
    Vn as k,
    wn as A,
    zn as j
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Brn as M,
    Cet as N,
    Flt as ne,
    Nlt as P,
    Sdn as re,
    Set as ie,
    Usn as ae,
    _in as oe,
    aln as se,
    ecn as ce,
    frn as le,
    iln as ue,
    lrn as de,
    min as fe,
    oln as pe,
    osn as me,
    sln as he,
    ssn as ge,
    urn as _e,
    wet as ve,
    xdn as ye,
    yet as be,
    zrn as xe
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Bu as Se,
    Cd as Ce,
    Df as we,
    Ef as Te,
    Hu as Ee,
    Sd as De,
    Sf as Oe,
    Vu as ke,
    bd as Ae,
    bf as je,
    hd as Me,
    md as Ne,
    yd as Pe
} from "./c2675c8c-p3x4d0bnf7e77o1n.js";
import {
    a as F,
    c as I,
    n as Fe,
    o as L,
    r as R,
    s as z,
    t as Ie
} from "./b288024a-gphs82u1xb95igxr.js";
import {
    a as Le,
    i as Re,
    n as B
} from "./8e7d0a25-h7ovgcu111o5x6he.js";
var V, ze, H, Be, Ve = e((() => {
        V = t(k()), O(), I(), L(), ve(), ze = t(k()), H = C(), Be = ({
            formData: e,
            onNext: t
        }) => {
            let n = j(),
                [r, i] = (0, V.useState)({
                    role: e.role ?? ``,
                    department: e.department ?? ``
                }),
                [a, o] = (0, V.useState)({}),
                s = (e, t) => {
                    i(n => ({
                        ...n,
                        [e]: t
                    })), o(t => ({
                        ...t,
                        [e]: ``
                    }))
                },
                c = (0, V.useMemo)(() => {
                    let e = be.map(e => ({
                        label: n.formatMessage(e.displayValue),
                        value: e.id
                    }));
                    return e.sort((e, t) => e.label.localeCompare(t.label)), e
                }, [n]),
                l = (0, V.useMemo)(() => {
                    let e = ie.map(e => ({
                        label: n.formatMessage(e.displayValue),
                        value: e.id
                    }));
                    return e.sort((e, t) => e.label.localeCompare(t.label)), e
                }, [n]),
                u = (0, V.useMemo)(() => [{
                    formType: `select`,
                    label: n.formatMessage(z.roleLabel),
                    name: `role`,
                    placeholder: n.formatMessage(z.rolePlaceholder),
                    value: r.role,
                    onChange: e => s(`role`, e),
                    error: a.role,
                    required: !0,
                    options: l
                }, {
                    formType: `select`,
                    label: n.formatMessage(z.workspaceDepartmentLabel),
                    name: `department`,
                    placeholder: n.formatMessage(z.workspaceDepartmentPlaceholder),
                    value: r.department,
                    onChange: e => s(`department`, e),
                    error: a.department,
                    required: !0,
                    options: c
                }], [c, a.department, a.role, r.department, r.role, n, l]),
                d = () => {
                    let e = {};
                    return u.forEach(t => {
                        t.required && !r[t.name] && (e[t.name] = n.formatMessage(z.fieldRequired, {
                            fieldName: t.label
                        }))
                    }), o(e), Object.values(e).every(e => !e)
                };
            return (0, H.jsx)(F, {
                content: (0, H.jsxs)(R, {
                    title: n.formatMessage(z.tellUsAboutWorkStepTitle),
                    subTitle: n.formatMessage(z.tellUsAboutWorkStepSubtitle),
                    children: [(0, H.jsx)(`div`, {
                        className: `flex flex-col gap-6`,
                        children: u.map(e => (0, ze.createElement)(Fe, {
                            ...e,
                            key: e.name
                        }))
                    }), (0, H.jsx)(Ie, {
                        onClick: async () => {
                            d() && await t(r)
                        }
                    })]
                })
            })
        }
    })),
    U, W, He, Ue, We = e((() => {
        I(), f(), Ae(), Ne(), ae(), x(), g(), o(), u(), U = t(k()), O(), L(), W = C(), He = 1e4, Ue = e => {
            let {
                onNext: t,
                pendingWorkspace: n,
                initialBillingDetails: i,
                formData: o
            } = e, [s, u] = (0, U.useState)(0), [f, p] = (0, U.useState)(!1), m = (0, U.useRef)(!1), h = (0, U.useRef)(null), g = (0, U.useRef)(!1), _ = (0, U.useRef)(!1), {
                isLoading: v
            } = d(), y = j(), {
                data: b,
                isLoading: x,
                error: S
            } = a({
                countryCode: i?.country,
                currency: i?.currency,
                enabled: i != null
            }), C = new URLSearchParams(n?.query_params ?? ``).get(`promo_campaign`) ?? void 0, {
                selectedPlan: ee,
                numSeats: w,
                promoData: T,
                promoDataIsFromQueryParam: E,
                isPromoDataLoading: D
            } = Me({
                initialSeats: o?.numSeats,
                initialPromoCoupon: C,
                initialPromoCouponFromQueryParam: C != null
            }), {
                eligible: O,
                campaignId: k
            } = ce(), A = !C && O, M = (0, U.useMemo)(() => T ?? (A ? {
                coupon: k,
                state: `eligible`,
                redemption: null
            } : void 0), [T, A, k]), N = T ? E : !A && void 0;
            return (0, U.useEffect)(() => {
                h.current ??= Date.now(), S != null && !g.current && (g.current = !0, c.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                    checkpoint: `checkout_pricing_config_failed`,
                    flow: `standard_business`,
                    severity: `error`,
                    durationMs: Date.now() - h.current,
                    hasBillingDetails: i != null,
                    errorType: S instanceof Error ? S.name : typeof S
                })), !(m.current || !i || v || D || x || S != null || !b) && (m.current = !0, c.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                    checkpoint: `checkout_dependencies_ready`,
                    flow: `standard_business`,
                    durationMs: Date.now() - h.current,
                    seatCount: w,
                    hasPromo: M != null
                }), Promise.resolve(t({
                    priceInterval: ee,
                    billingDetails: i,
                    numSeats: w,
                    promoData: M,
                    promoDataIsFromQueryParam: N
                })).catch(e => {
                    c.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                        checkpoint: `checkout_start_failed`,
                        flow: `standard_business`,
                        severity: `error`,
                        durationMs: Date.now() - (h.current ?? Date.now()),
                        errorType: e instanceof Error ? e.name : typeof e
                    }), p(!0)
                }))
            }, [s, b, S, i, v, D, x, w, t, M, N, ee]), (0, U.useEffect)(() => {
                if (m.current || f || _.current) return;
                let e = Date.now() - (h.current ?? Date.now()),
                    t = setTimeout(() => {
                        m.current || (_.current = !0, c.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                            checkpoint: `checkout_dependencies_timed_out`,
                            flow: `standard_business`,
                            severity: `warning`,
                            durationMs: Date.now() - (h.current ?? Date.now()),
                            timeoutMs: He,
                            hasBillingDetails: i != null,
                            accountsLoading: v,
                            promoLoading: D,
                            pricingConfigLoading: x,
                            pricingConfigFailed: S != null,
                            pricingConfigAvailable: b != null
                        }))
                    }, Math.max(0, He - e));
                return () => clearTimeout(t)
            }, [f, b, S, i, v, x, D]), f ? (0, W.jsx)(F, {
                content: (0, W.jsx)(R, {
                    title: y.formatMessage(z.autoCheckoutErrorTitle),
                    subTitle: y.formatMessage(z.autoCheckoutErrorSubtitle),
                    children: (0, W.jsx)(r, {
                        size: `large`,
                        onClick: () => {
                            m.current = !1, p(!1), u(e => e + 1)
                        },
                        children: (0, W.jsx)(te, {
                            ...z.autoCheckoutRetryButton
                        })
                    })
                })
            }) : (0, W.jsx)(F, {
                content: (0, W.jsx)(l, {
                    className: `text-token-text-secondary h-8 w-8`
                })
            })
        }
    })),
    G, Ge, K, Ke, qe = e((() => {
        G = t(k()), O(), I(), L(), ve(), Ge = t(k()), K = C(), Ke = ({
            formData: e,
            onNext: t,
            onPrevious: n
        }) => {
            let r = j(),
                [i, a] = (0, G.useState)({
                    workspaceName: e.workspaceName ?? ``,
                    companySize: e.companySize ?? ``
                }),
                [o, s] = (0, G.useState)({}),
                c = (e, t) => {
                    a(n => ({
                        ...n,
                        [e]: t
                    })), s(t => ({
                        ...t,
                        [e]: ``
                    }))
                },
                l = N.map(e => ({
                    label: typeof e.displayValue == `string` ? e.displayValue : r.formatMessage(e.displayValue),
                    value: e.id
                })),
                u = (0, G.useMemo)(() => [{
                    formType: `input`,
                    label: r.formatMessage(z.workspaceNameLabel),
                    name: `workspaceName`,
                    placeholder: r.formatMessage(z.workspaceNamePlaceholder),
                    value: i.workspaceName,
                    onChange: e => c(`workspaceName`, e),
                    error: o.workspaceName,
                    required: !0,
                    autoFocus: !0
                }, {
                    formType: `select`,
                    label: r.formatMessage(z.workspaceCompanySizeLabel),
                    name: `companySize`,
                    placeholder: r.formatMessage(z.workspaceCompanySizePlaceholder),
                    value: i.companySize,
                    onChange: e => c(`companySize`, e),
                    error: o.companySize,
                    required: !1,
                    options: l
                }], [o.companySize, o.workspaceName, i.companySize, i.workspaceName, r, l]),
                d = () => {
                    let e = {};
                    return u.forEach(t => {
                        t.required && !i[t.name] && (e[t.name] = r.formatMessage(z.fieldRequired, {
                            fieldName: t.label
                        }))
                    }), s(e), Object.values(e).every(e => !e)
                };
            return (0, K.jsx)(F, {
                onPrevious: n ? () => n({
                    ...i
                }) : void 0,
                content: (0, K.jsxs)(R, {
                    title: r.formatMessage(z.workspaceNameStepTitle),
                    subTitle: r.formatMessage(z.workspaceNameStepSubtitle),
                    children: [(0, K.jsx)(`div`, {
                        className: `flex flex-col gap-6`,
                        children: u.map(e => (0, Ge.createElement)(Fe, {
                            ...e,
                            key: e.name
                        }))
                    }), (0, K.jsx)(Ie, {
                        disabled: !i.workspaceName,
                        onClick: async () => {
                            d() && await t({
                                ...i
                            })
                        }
                    })]
                })
            })
        }
    })),
    q, J, Y, Je, Ye, Xe, X, Z, Ze, Qe = e((() => {
        we(), re(), v(), n(), I(), pe(), ke(), ge(), fe(), se(), xe(), je(), De(), Ae(), de(), g(), s(), o(), i(), q = t(k()), O(), D(), Re(), Ve(), We(), qe(), J = C(), Y = function(e) {
            return e.AboutWork = `about-work`, e.WorkspaceInfo = `workspace-info`, e.ConfigurePlan = `configure-plan`, e
        }(Y || {}), Je = _(Object.values(Y), void 0), Ye = ({
            pendingWorkspace: e
        }) => {
            let t = j(),
                [n, r] = (0, q.useState)({
                    workspaceName: e?.workspace_name ?? void 0,
                    role: e?.role ?? void 0,
                    department: e?.department ?? void 0,
                    companySize: e?.company_size ?? void 0,
                    numSeats: e?.seat_quantity ?? void 0
                }),
                i = new URLSearchParams(e?.query_params ?? ``).get(Pe);
            Ce(i ?? ``, !!i);
            let a = Xe({
                    data: n
                }),
                o = h(),
                s = S(),
                l = new URLSearchParams(s.search).get(`country_code`) ?? new URLSearchParams(e?.query_params ?? ``).get(`country_code`) ?? void 0,
                u = ee(),
                {
                    country: d,
                    userCountry: f
                } = le({
                    initialCountryCode: l
                }),
                p = _e({
                    country: d,
                    currentAccount: o,
                    location: `TeamDirectSignUpFlow`,
                    pricingPlanIsTypeBusiness: !0,
                    shouldUsePaidSubscriptionBillingCurrency: M(o)
                }),
                m = Je(e?.step_name),
                {
                    step: g,
                    nextStep: _
                } = Ze({
                    initialStep: m && Z.includes(m) ? m : void 0
                });
            return (0, q.useEffect)(() => {
                e || (() => {
                    let t = Date.now();
                    c.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                        checkpoint: `pending_workspace_save_started`,
                        flow: `standard_business`,
                        step: e?.step_name ?? Z[0]
                    }), Le({
                        step_name: e?.step_name ?? Z[0],
                        query_params: s.search,
                        user_segment: `v1`
                    }).then(() => {
                        c.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                            checkpoint: `pending_workspace_saved`,
                            flow: `standard_business`,
                            durationMs: Date.now() - t
                        })
                    }).catch(e => {
                        throw c.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                            checkpoint: `pending_workspace_save_failed`,
                            flow: `standard_business`,
                            severity: `error`,
                            durationMs: Date.now() - t,
                            errorType: e instanceof Error ? e.name : typeof e
                        }), e
                    })
                })()
            }, []), (0, q.useEffect)(() => {
                let t = s.key,
                    n = new URLSearchParams(window.location.search).get(`referrer`) || document.referrer,
                    r = c.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                        ...Te(n),
                        checkpoint: `signup_step_viewed`,
                        flow: `standard_business`,
                        entryPoint: he.TEAM_DIRECT_SIGNUP,
                        step: g,
                        initialStep: e?.step_name === m ? m : void 0
                    });
                c.logValueEventWithStatsig({
                    segmentEventName: `Account Pay: Team Direct Sign Up Flow`,
                    statsigEventName: `chatgpt_account_payment_team_direct_sign_up_flow`,
                    ...r ? {
                        eventId: r
                    } : {},
                    data: {
                        ...o?.subscriptionAnalyticsParams,
                        referrer: n,
                        initialTab: e?.step_name,
                        currentTab: g,
                        locationKey: t,
                        navigationType: u,
                        initialCountrySelectorCountry: l ?? d,
                        selectedCountry: p?.country ?? ``,
                        selectedCurrency: p?.currency ?? ``,
                        userCountry: f ?? ``
                    }
                })
            }, [g]), (0, J.jsxs)(J.Fragment, {
                children: [(0, J.jsx)(`title`, {
                    children: t.formatMessage(z.teamSignUpPageTitle)
                }), (() => {
                    switch (g) {
                        case `about-work`:
                            return (0, J.jsx)(Be, {
                                formData: n,
                                onNext: async e => {
                                    let t = {
                                        ...n,
                                        ...e
                                    };
                                    r(t), await _(t)
                                }
                            });
                        case `workspace-info`:
                            return (0, J.jsx)(Ke, {
                                formData: n,
                                onNext: async e => {
                                    let t = {
                                        ...n,
                                        ...e
                                    };
                                    r(t), await _(t)
                                }
                            });
                        case `configure-plan`:
                            return (0, J.jsx)(Ue, {
                                formData: n,
                                initialBillingDetails: p ?? void 0,
                                onNext: async e => {
                                    await a({
                                        ...n,
                                        ...e
                                    }, {
                                        throwOnError: !0
                                    })
                                },
                                pendingWorkspace: e
                            });
                        default:
                            return null
                    }
                })()]
            })
        }, Xe = ({
            data: e
        }) => {
            let {
                prepareCheckoutSession: t,
                navigateToCheckout: n
            } = oe(), r = b(), i = j(), a = h();
            return (0, q.useCallback)(async ({
                priceInterval: o,
                billingDetails: s,
                numSeats: l,
                promoData: u,
                promoDataIsFromQueryParam: d
            }, f) => {
                let h = Date.now(),
                    g = !1;
                try {
                    let r = c.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                        ...Te(document.referrer),
                        checkpoint: `checkout_started`,
                        flow: `standard_business`,
                        seatCount: l,
                        billingCountry: s.country,
                        priceInterval: o
                    });
                    c.logEvent(`Account Pay: Payment Checkout Clicked`, {
                        planType: p.SELF_SERVE_BUSINESS,
                        ...a?.subscriptionAnalyticsParams,
                        referrer: document.referrer,
                        ...ue({
                            checkoutOriginProductExperience: ye.WORK,
                            checkoutOriginDeliverySurface: `web`
                        })
                    }, {
                        eventId: r
                    });
                    let i = {
                            entry_point: he.TEAM_DIRECT_SIGNUP,
                            plan_name: `chatgptteamplan`,
                            team_plan_data: {
                                workspace_name: e.workspaceName ?? ``,
                                price_interval: o,
                                seat_quantity: l
                            },
                            billing_details: s,
                            checkout_ui_mode: `custom`,
                            ...o === m.FLEXIBLE && u?.coupon ? {
                                promo_campaign: {
                                    promo_campaign_id: u?.coupon,
                                    is_coupon_from_query_param: !!d
                                }
                            } : {},
                            cancel_url: window.location.href
                        },
                        f = await t(i, {});
                    g = !0, c.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                        checkpoint: `checkout_session_created`,
                        flow: `standard_business`,
                        checkoutSessionId: me(f),
                        durationMs: Date.now() - h,
                        seatCount: l,
                        priceInterval: o
                    }), await n(f, {
                        checkoutPayload: i,
                        checkoutOriginProvenance: {
                            checkoutOriginProductExperience: ye.WORK,
                            checkoutOriginDeliverySurface: `web`
                        }
                    })
                } catch (e) {
                    if (c.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                            checkpoint: g ? `checkout_navigation_failed` : `checkout_creation_failed`,
                            flow: `standard_business`,
                            severity: `error`,
                            durationMs: Date.now() - h,
                            seatCount: l,
                            priceInterval: o,
                            errorType: e instanceof Error ? e.name : typeof e
                        }), y.addError(e), r.warning(i.formatMessage(Ee(e) ? Se : Oe.paymentErrorWarning), {
                            hasCloseButton: !0
                        }), f?.throwOnError) throw e
                }
            }, [a, e.workspaceName, i, n, t, r])
        }, X = (e, t) => {
            let n = new URLSearchParams(window.location.search);
            Object.entries(e).forEach(([e, t]) => {
                n.set(e, t)
            });
            let r = `${window.location.pathname}?${n.toString()}`;
            t ? t(r, {
                replace: !1
            }) : window.history.replaceState(null, ``, r)
        }, Z = [`configure-plan`], Ze = ({
            initialStep: e
        }) => {
            let t = E(),
                n = S(),
                [r, i] = (0, q.useState)(() => {
                    let t = e ?? Z[0];
                    return X({
                        [B]: t
                    }), t
                }),
                a = (0, q.useCallback)(e => {
                    i(e), X({
                        [B]: e
                    }, t)
                }, [t]),
                o = (0, q.useRef)(null);
            return (0, q.useEffect)(() => {
                let e = new URLSearchParams(n.search).get(B);
                e !== o.current && e && Z.includes(e) && e !== r && a(e), o.current = e
            }, [n.search, a, r]), {
                step: r,
                nextStep: async e => {
                    let t = r,
                        i = Z.indexOf(r);
                    i >= 0 && i < Z.length - 1 && (t = Z[i + 1], a(t));
                    try {
                        await Le({
                            workspace_name: e.workspaceName,
                            company_size: e.companySize,
                            department: e.department,
                            role: e.role,
                            step_name: t,
                            query_params: n.search,
                            user_segment: `v1`
                        })
                    } catch (e) {
                        y.addError(e)
                    }
                },
                previousStep: (0, q.useCallback)(async e => {
                    let t = r,
                        i = Z.indexOf(r);
                    i > 0 && (t = Z[i - 1], a(t));
                    try {
                        await Le({
                            workspace_name: e.workspaceName,
                            company_size: e.companySize,
                            department: e.department,
                            role: e.role,
                            step_name: t,
                            query_params: n.search,
                            user_segment: `v1`
                        })
                    } catch (e) {
                        y.addError(e)
                    }
                }, [n.search, a, r])
            }
        }
    })),
    $e, Q, et, $, tt = e((() => {
        $e = A(), f(), ne(), O(), Q = C(), et = e => {
            "use forget";
            let t = (0, $e.c)(34),
                {
                    onResume: n,
                    onCreate: i,
                    onClose: a
                } = e,
                o = j(),
                s;
            t[0] === o ? s = t[1] : (s = o.formatMessage($.title), t[0] = o, t[1] = s);
            let c = s,
                l;
            t[2] === a ? l = t[3] : (l = e => {
                e || a()
            }, t[2] = a, t[3] = l);
            let u;
            t[4] === o ? u = t[5] : (u = o.formatMessage($.close), t[4] = o, t[5] = u);
            let d;
            t[6] === u ? d = t[7] : (d = (0, Q.jsx)(P.Header, {
                children: (0, Q.jsx)(P.CloseButton, {
                    "aria-label": u
                })
            }), t[6] = u, t[7] = d);
            let f;
            t[8] === c ? f = t[9] : (f = (0, Q.jsx)(`h1`, {
                className: `text-xl font-semibold`,
                children: c
            }), t[8] = c, t[9] = f);
            let p;
            t[10] === o ? p = t[11] : (p = o.formatMessage($.description), t[10] = o, t[11] = p);
            let m;
            t[12] === p ? m = t[13] : (m = (0, Q.jsx)(`p`, {
                className: `text-token-text-secondary text-sm leading-6`,
                children: p
            }), t[12] = p, t[13] = m);
            let h;
            t[14] === o ? h = t[15] : (h = o.formatMessage($.resume), t[14] = o, t[15] = h);
            let g;
            t[16] !== n || t[17] !== h ? (g = (0, Q.jsx)(r, {
                type: `button`,
                color: `primary`,
                onClick: n,
                children: h
            }), t[16] = n, t[17] = h, t[18] = g) : g = t[18];
            let _;
            t[19] === o ? _ = t[20] : (_ = o.formatMessage($.create), t[19] = o, t[20] = _);
            let v;
            t[21] !== i || t[22] !== _ ? (v = (0, Q.jsx)(r, {
                type: `button`,
                color: `secondary`,
                onClick: i,
                children: _
            }), t[21] = i, t[22] = _, t[23] = v) : v = t[23];
            let y;
            t[24] !== v || t[25] !== f || t[26] !== m || t[27] !== g ? (y = (0, Q.jsx)(P.Contents, {
                className: `flex h-full items-center justify-center px-6`,
                children: (0, Q.jsxs)(`div`, {
                    className: `flex w-full max-w-md flex-col gap-5 text-center`,
                    children: [f, m, g, v]
                })
            }), t[24] = v, t[25] = f, t[26] = m, t[27] = g, t[28] = y) : y = t[28];
            let b;
            return t[29] !== y || t[30] !== l || t[31] !== d || t[32] !== c ? (b = (0, Q.jsxs)(P, {
                open: !0,
                renderInPlace: !0,
                accessibleTitle: c,
                onOpenChange: l,
                children: [d, y]
            }), t[29] = y, t[30] = l, t[31] = d, t[32] = c, t[33] = b) : b = t[33], b
        }, $ = T({
            title: {
                id: `businessWorkspaceResumeChoice.title`,
                defaultMessage: `Your workspace is ready`
            },
            description: {
                id: `businessWorkspaceResumeChoice.description`,
                defaultMessage: `Your previous checkout already created a workspace. You can continue its setup or create another workspace.`
            },
            resume: {
                id: `businessWorkspaceResumeChoice.resume`,
                defaultMessage: `Continue previous setup`
            },
            create: {
                id: `businessWorkspaceResumeChoice.create`,
                defaultMessage: `Create another workspace`
            },
            close: {
                id: `businessWorkspaceResumeChoice.close`,
                defaultMessage: `Back to ChatGPT`
            }
        })
    })),
    nt, rt, it, at, ot, st = e((() => {
        D(), nt = A(), Qe(), tt(), Re(), rt = t(k()), it = C(), at = `/create-workspace`, ot = w(function(e) {
            "use forget";
            let t = (0, nt.c)(25),
                {
                    loaderData: n
                } = e,
                r = S(),
                i = E(),
                [a, o] = (0, rt.useState)(null),
                s = n.completedWorkspaceResumeUrl,
                c = s != null && a !== s,
                l;
            t[0] !== n.pendingWorkspace?.query_params || t[1] !== r.pathname || t[2] !== r.search || t[3] !== i || t[4] !== c ? (l = () => {
                if (c) return;
                let e = n.pendingWorkspace?.query_params;
                if (!e) return;
                let t = new URLSearchParams(r.search),
                    a = new URLSearchParams(e),
                    o = !1;
                for (let [e, n] of a) !t.get(e) && e !== `step` && (t.set(e, n), o = !0);
                o && i(`${r.pathname}?${t.toString()}`, {
                    replace: !0
                })
            }, t[0] = n.pendingWorkspace?.query_params, t[1] = r.pathname, t[2] = r.search, t[3] = i, t[4] = c, t[5] = l) : l = t[5];
            let u = n.pendingWorkspace?.query_params,
                d;
            if (t[6] !== r.pathname || t[7] !== r.search || t[8] !== i || t[9] !== c || t[10] !== u ? (d = [u, r.pathname, r.search, i, c], t[6] = r.pathname, t[7] = r.search, t[8] = i, t[9] = c, t[10] = u, t[11] = d) : d = t[11], (0, rt.useEffect)(l, d), c) {
                let e;
                t[12] !== i || t[13] !== s ? (e = () => i(s), t[12] = i, t[13] = s, t[14] = e) : e = t[14];
                let n;
                t[15] === s ? n = t[16] : (n = () => o(s), t[15] = s, t[16] = n);
                let r;
                t[17] === i ? r = t[18] : (r = () => i(`/`), t[17] = i, t[18] = r);
                let a;
                return t[19] !== e || t[20] !== n || t[21] !== r ? (a = (0, it.jsx)(et, {
                    onResume: e,
                    onCreate: n,
                    onClose: r
                }), t[19] = e, t[20] = n, t[21] = r, t[22] = a) : a = t[22], a
            }
            let f;
            return t[23] === n.pendingWorkspace ? f = t[24] : (f = (0, it.jsx)(Ye, {
                pendingWorkspace: n.pendingWorkspace
            }), t[23] = n.pendingWorkspace, t[24] = f), f
        })
    }));
export {
    ot as n, st as r, at as t
};
//# sourceMappingURL=d9c77c9b-ksuutrd2csbvsd6r.js.map