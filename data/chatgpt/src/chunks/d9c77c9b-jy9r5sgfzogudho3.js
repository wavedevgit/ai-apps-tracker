import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B8 as n,
    BU as r,
    HU as i,
    JT as a,
    Mz as o,
    R1 as s,
    W8 as c,
    X1 as l,
    YT as u,
    Z1 as d,
    aat as f,
    bnt as p,
    f6 as m,
    hst as h,
    jz as g,
    m6 as _,
    nct as v,
    sat as y,
    vnt as b,
    wI as x
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    At as S,
    Bn as C,
    Ft as w,
    Ht as T,
    Ln as E,
    Nn as ee,
    Nt as te,
    Q as D,
    Rn as O,
    Vn as k,
    wn as A,
    zn as j
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Aet as M,
    Blt as N,
    Edn as ne,
    Eet as re,
    Hlt as ie,
    Tdn as ae,
    Urn as oe,
    Wrn as se,
    cln as ce,
    dln as le,
    dsn as ue,
    grn as de,
    icn as fe,
    jet as pe,
    ket as me,
    lln as he,
    mrn as ge,
    prn as _e,
    qsn as ve,
    uln as ye,
    usn as be,
    vin as xe,
    xin as Se
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Bu as Ce,
    Cd as we,
    Df as Te,
    Ef as Ee,
    Hu as De,
    Sd as Oe,
    Sf as ke,
    Vu as Ae,
    bd as je,
    bf as Me,
    hd as Ne,
    md as Pe,
    yd as Fe
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    a as P,
    c as F,
    n as Ie,
    o as I,
    r as L,
    s as R,
    t as Le
} from "./b288024a-f5kborvv34ynaker.js";
import {
    a as z,
    i as Re,
    n as B
} from "./8e7d0a25-fpfv6h0g57re9cnq.js";
var V, ze, H, Be, Ve = e((() => {
        V = t(k()), O(), F(), I(), pe(), ze = t(k()), H = C(), Be = ({
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
                    let e = re.map(e => ({
                        label: n.formatMessage(e.displayValue),
                        value: e.id
                    }));
                    return e.sort((e, t) => e.label.localeCompare(t.label)), e
                }, [n]),
                l = (0, V.useMemo)(() => {
                    let e = me.map(e => ({
                        label: n.formatMessage(e.displayValue),
                        value: e.id
                    }));
                    return e.sort((e, t) => e.label.localeCompare(t.label)), e
                }, [n]),
                u = (0, V.useMemo)(() => [{
                    formType: `select`,
                    label: n.formatMessage(R.roleLabel),
                    name: `role`,
                    placeholder: n.formatMessage(R.rolePlaceholder),
                    value: r.role,
                    onChange: e => s(`role`, e),
                    error: a.role,
                    required: !0,
                    options: l
                }, {
                    formType: `select`,
                    label: n.formatMessage(R.workspaceDepartmentLabel),
                    name: `department`,
                    placeholder: n.formatMessage(R.workspaceDepartmentPlaceholder),
                    value: r.department,
                    onChange: e => s(`department`, e),
                    error: a.department,
                    required: !0,
                    options: c
                }], [c, a.department, a.role, r.department, r.role, n, l]),
                d = () => {
                    let e = {};
                    return u.forEach(t => {
                        t.required && !r[t.name] && (e[t.name] = n.formatMessage(R.fieldRequired, {
                            fieldName: t.label
                        }))
                    }), o(e), Object.values(e).every(e => !e)
                };
            return (0, H.jsx)(P, {
                content: (0, H.jsxs)(L, {
                    title: n.formatMessage(R.tellUsAboutWorkStepTitle),
                    subTitle: n.formatMessage(R.tellUsAboutWorkStepSubtitle),
                    children: [(0, H.jsx)(`div`, {
                        className: `flex flex-col gap-6`,
                        children: u.map(e => (0, ze.createElement)(Ie, {
                            ...e,
                            key: e.name
                        }))
                    }), (0, H.jsx)(Le, {
                        onClick: async () => {
                            d() && await t(r)
                        }
                    })]
                })
            })
        }
    })),
    U, W, G, He, Ue = e((() => {
        F(), u(), je(), Pe(), ve(), o(), s(), p(), m(), U = t(k()), O(), I(), W = C(), G = 1e4, He = e => {
            let {
                onNext: t,
                pendingWorkspace: n,
                initialBillingDetails: r,
                formData: i
            } = e, [o, s] = (0, U.useState)(0), [c, u] = (0, U.useState)(!1), d = (0, U.useRef)(!1), f = (0, U.useRef)(null), p = (0, U.useRef)(!1), m = (0, U.useRef)(!1), {
                isLoading: h
            } = l(), v = j(), {
                data: y,
                isLoading: x,
                error: S
            } = _({
                countryCode: r?.country,
                currency: r?.currency,
                enabled: r != null
            }), C = new URLSearchParams(n?.query_params ?? ``).get(`promo_campaign`) ?? void 0, {
                selectedPlan: w,
                numSeats: T,
                promoData: E,
                promoDataIsFromQueryParam: te,
                isPromoDataLoading: D
            } = Ne({
                initialSeats: i?.numSeats,
                initialPromoCoupon: C,
                initialPromoCouponFromQueryParam: C != null
            }), {
                eligible: O,
                campaignId: k
            } = fe(), A = !C && O, M = (0, U.useMemo)(() => E ?? (A ? {
                coupon: k,
                state: `eligible`,
                redemption: null
            } : void 0), [E, A, k]), N = E ? te : !A && void 0;
            return (0, U.useEffect)(() => {
                f.current ??= Date.now(), S != null && !p.current && (p.current = !0, b.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                    checkpoint: `checkout_pricing_config_failed`,
                    flow: `standard_business`,
                    severity: `error`,
                    durationMs: Date.now() - f.current,
                    hasBillingDetails: r != null,
                    errorType: S instanceof Error ? S.name : typeof S
                })), !(d.current || !r || h || D || x || S != null || !y) && (d.current = !0, b.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                    checkpoint: `checkout_dependencies_ready`,
                    flow: `standard_business`,
                    durationMs: Date.now() - f.current,
                    seatCount: T,
                    hasPromo: M != null
                }), Promise.resolve(t({
                    priceInterval: w,
                    billingDetails: r,
                    numSeats: T,
                    promoData: M,
                    promoDataIsFromQueryParam: N
                })).catch(e => {
                    b.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                        checkpoint: `checkout_start_failed`,
                        flow: `standard_business`,
                        severity: `error`,
                        durationMs: Date.now() - (f.current ?? Date.now()),
                        errorType: e instanceof Error ? e.name : typeof e
                    }), u(!0)
                }))
            }, [o, y, S, r, h, D, x, T, t, M, N, w]), (0, U.useEffect)(() => {
                if (d.current || c || m.current) return;
                let e = Date.now() - (f.current ?? Date.now()),
                    t = setTimeout(() => {
                        d.current || (m.current = !0, b.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                            checkpoint: `checkout_dependencies_timed_out`,
                            flow: `standard_business`,
                            severity: `warning`,
                            durationMs: Date.now() - (f.current ?? Date.now()),
                            timeoutMs: G,
                            hasBillingDetails: r != null,
                            accountsLoading: h,
                            promoLoading: D,
                            pricingConfigLoading: x,
                            pricingConfigFailed: S != null,
                            pricingConfigAvailable: y != null
                        }))
                    }, Math.max(0, G - e));
                return () => clearTimeout(t)
            }, [c, y, S, r, h, x, D]), c ? (0, W.jsx)(P, {
                content: (0, W.jsx)(L, {
                    title: v.formatMessage(R.autoCheckoutErrorTitle),
                    subTitle: v.formatMessage(R.autoCheckoutErrorSubtitle),
                    children: (0, W.jsx)(a, {
                        size: `large`,
                        onClick: () => {
                            d.current = !1, u(!1), s(e => e + 1)
                        },
                        children: (0, W.jsx)(ee, {
                            ...R.autoCheckoutRetryButton
                        })
                    })
                })
            }) : (0, W.jsx)(P, {
                content: (0, W.jsx)(g, {
                    className: `text-token-text-secondary h-8 w-8`
                })
            })
        }
    })),
    K, We, q, Ge, Ke = e((() => {
        K = t(k()), O(), F(), I(), pe(), We = t(k()), q = C(), Ge = ({
            formData: e,
            onNext: t,
            onPrevious: n
        }) => {
            let r = j(),
                [i, a] = (0, K.useState)({
                    workspaceName: e.workspaceName ?? ``,
                    companySize: e.companySize ?? ``
                }),
                [o, s] = (0, K.useState)({}),
                c = (e, t) => {
                    a(n => ({
                        ...n,
                        [e]: t
                    })), s(t => ({
                        ...t,
                        [e]: ``
                    }))
                },
                l = M.map(e => ({
                    label: typeof e.displayValue == `string` ? e.displayValue : r.formatMessage(e.displayValue),
                    value: e.id
                })),
                u = (0, K.useMemo)(() => [{
                    formType: `input`,
                    label: r.formatMessage(R.workspaceNameLabel),
                    name: `workspaceName`,
                    placeholder: r.formatMessage(R.workspaceNamePlaceholder),
                    value: i.workspaceName,
                    onChange: e => c(`workspaceName`, e),
                    error: o.workspaceName,
                    required: !0,
                    autoFocus: !0
                }, {
                    formType: `select`,
                    label: r.formatMessage(R.workspaceCompanySizeLabel),
                    name: `companySize`,
                    placeholder: r.formatMessage(R.workspaceCompanySizePlaceholder),
                    value: i.companySize,
                    onChange: e => c(`companySize`, e),
                    error: o.companySize,
                    required: !1,
                    options: l
                }], [o.companySize, o.workspaceName, i.companySize, i.workspaceName, r, l]),
                d = () => {
                    let e = {};
                    return u.forEach(t => {
                        t.required && !i[t.name] && (e[t.name] = r.formatMessage(R.fieldRequired, {
                            fieldName: t.label
                        }))
                    }), s(e), Object.values(e).every(e => !e)
                };
            return (0, q.jsx)(P, {
                onPrevious: n ? () => n({
                    ...i
                }) : void 0,
                content: (0, q.jsxs)(L, {
                    title: r.formatMessage(R.workspaceNameStepTitle),
                    subTitle: r.formatMessage(R.workspaceNameStepSubtitle),
                    children: [(0, q.jsx)(`div`, {
                        className: `flex flex-col gap-6`,
                        children: u.map(e => (0, We.createElement)(Ie, {
                            ...e,
                            key: e.name
                        }))
                    }), (0, q.jsx)(Le, {
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
    J, Y, X, qe, Je, Ye, Xe, Z, Ze, Qe = e((() => {
        Te(), ne(), v(), n(), F(), ye(), Ae(), ue(), xe(), he(), oe(), Me(), Oe(), je(), _e(), s(), r(), p(), y(), J = t(k()), O(), D(), Re(), Ve(), Ue(), Ke(), Y = C(), X = function(e) {
            return e.AboutWork = `about-work`, e.WorkspaceInfo = `workspace-info`, e.ConfigurePlan = `configure-plan`, e
        }(X || {}), qe = c(Object.values(X), void 0), Je = ({
            pendingWorkspace: e
        }) => {
            let t = j(),
                [n, r] = (0, J.useState)({
                    workspaceName: e?.workspace_name ?? void 0,
                    role: e?.role ?? void 0,
                    department: e?.department ?? void 0,
                    companySize: e?.company_size ?? void 0,
                    numSeats: e?.seat_quantity ?? void 0
                }),
                i = new URLSearchParams(e?.query_params ?? ``).get(Fe);
            we(i ?? ``, !!i);
            let a = Ye({
                    data: n
                }),
                o = d(),
                s = S(),
                c = new URLSearchParams(s.search).get(`country_code`) ?? new URLSearchParams(e?.query_params ?? ``).get(`country_code`) ?? void 0,
                l = w(),
                {
                    country: u,
                    userCountry: f
                } = de({
                    initialCountryCode: c
                }),
                p = ge({
                    country: u,
                    currentAccount: o,
                    location: `TeamDirectSignUpFlow`,
                    pricingPlanIsTypeBusiness: !0,
                    shouldUsePaidSubscriptionBillingCurrency: se(o)
                }),
                m = qe(e?.step_name),
                {
                    step: h,
                    nextStep: g
                } = Ze({
                    initialStep: m && Z.includes(m) ? m : void 0
                });
            return (0, J.useEffect)(() => {
                e || (() => {
                    let t = Date.now();
                    b.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                        checkpoint: `pending_workspace_save_started`,
                        flow: `standard_business`,
                        step: e?.step_name ?? Z[0]
                    }), z({
                        step_name: e?.step_name ?? Z[0],
                        query_params: s.search,
                        user_segment: `v1`
                    }).then(() => {
                        b.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                            checkpoint: `pending_workspace_saved`,
                            flow: `standard_business`,
                            durationMs: Date.now() - t
                        })
                    }).catch(e => {
                        throw b.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                            checkpoint: `pending_workspace_save_failed`,
                            flow: `standard_business`,
                            severity: `error`,
                            durationMs: Date.now() - t,
                            errorType: e instanceof Error ? e.name : typeof e
                        }), e
                    })
                })()
            }, []), (0, J.useEffect)(() => {
                let t = s.key,
                    n = new URLSearchParams(window.location.search).get(`referrer`) || document.referrer,
                    r = b.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                        ...Ee(n),
                        checkpoint: `signup_step_viewed`,
                        flow: `standard_business`,
                        entryPoint: le.TEAM_DIRECT_SIGNUP,
                        step: h,
                        initialStep: e?.step_name === m ? m : void 0
                    });
                b.logValueEventWithStatsig({
                    segmentEventName: `Account Pay: Team Direct Sign Up Flow`,
                    statsigEventName: `chatgpt_account_payment_team_direct_sign_up_flow`,
                    ...r ? {
                        eventId: r
                    } : {},
                    data: {
                        ...o?.subscriptionAnalyticsParams,
                        referrer: n,
                        initialTab: e?.step_name,
                        currentTab: h,
                        locationKey: t,
                        navigationType: l,
                        initialCountrySelectorCountry: c ?? u,
                        selectedCountry: p?.country ?? ``,
                        selectedCurrency: p?.currency ?? ``,
                        userCountry: f ?? ``
                    }
                })
            }, [h]), (0, Y.jsxs)(Y.Fragment, {
                children: [(0, Y.jsx)(`title`, {
                    children: t.formatMessage(R.teamSignUpPageTitle)
                }), (() => {
                    switch (h) {
                        case `about-work`:
                            return (0, Y.jsx)(Be, {
                                formData: n,
                                onNext: async e => {
                                    let t = {
                                        ...n,
                                        ...e
                                    };
                                    r(t), await g(t)
                                }
                            });
                        case `workspace-info`:
                            return (0, Y.jsx)(Ge, {
                                formData: n,
                                onNext: async e => {
                                    let t = {
                                        ...n,
                                        ...e
                                    };
                                    r(t), await g(t)
                                }
                            });
                        case `configure-plan`:
                            return (0, Y.jsx)(He, {
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
        }, Ye = ({
            data: e
        }) => {
            let {
                prepareCheckoutSession: t,
                navigateToCheckout: n
            } = Se(), r = i(), a = j(), o = d();
            return (0, J.useCallback)(async ({
                priceInterval: i,
                billingDetails: s,
                numSeats: c,
                promoData: l,
                promoDataIsFromQueryParam: u
            }, d) => {
                let p = Date.now(),
                    m = !1;
                try {
                    let r = b.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                        ...Ee(document.referrer),
                        checkpoint: `checkout_started`,
                        flow: `standard_business`,
                        seatCount: c,
                        billingCountry: s.country,
                        priceInterval: i
                    });
                    b.logEvent(`Account Pay: Payment Checkout Clicked`, {
                        planType: h.SELF_SERVE_BUSINESS,
                        ...o?.subscriptionAnalyticsParams,
                        referrer: document.referrer,
                        ...ce({
                            checkoutOriginProductExperience: ae.WORK,
                            checkoutOriginDeliverySurface: `web`
                        })
                    }, {
                        eventId: r
                    });
                    let a = {
                            entry_point: le.TEAM_DIRECT_SIGNUP,
                            plan_name: `chatgptteamplan`,
                            team_plan_data: {
                                workspace_name: e.workspaceName ?? ``,
                                price_interval: i,
                                seat_quantity: c
                            },
                            billing_details: s,
                            checkout_ui_mode: `custom`,
                            ...i === x.FLEXIBLE && l?.coupon ? {
                                promo_campaign: {
                                    promo_campaign_id: l?.coupon,
                                    is_coupon_from_query_param: !!u
                                }
                            } : {},
                            cancel_url: window.location.href
                        },
                        d = await t(a, {});
                    m = !0, b.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                        checkpoint: `checkout_session_created`,
                        flow: `standard_business`,
                        checkoutSessionId: be(d),
                        durationMs: Date.now() - p,
                        seatCount: c,
                        priceInterval: i
                    }), await n(d, {
                        checkoutPayload: a,
                        checkoutOriginProvenance: {
                            checkoutOriginProductExperience: ae.WORK,
                            checkoutOriginDeliverySurface: `web`
                        }
                    })
                } catch (e) {
                    if (b.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                            checkpoint: m ? `checkout_navigation_failed` : `checkout_creation_failed`,
                            flow: `standard_business`,
                            severity: `error`,
                            durationMs: Date.now() - p,
                            seatCount: c,
                            priceInterval: i,
                            errorType: e instanceof Error ? e.name : typeof e
                        }), f.addError(e), r.warning(a.formatMessage(De(e) ? Ce : ke.paymentErrorWarning), {
                            hasCloseButton: !0
                        }), d?.throwOnError) throw e
                }
            }, [o, e.workspaceName, a, n, t, r])
        }, Xe = (e, t) => {
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
            let t = te(),
                n = S(),
                [r, i] = (0, J.useState)(() => {
                    let t = e ?? Z[0];
                    return Xe({
                        [B]: t
                    }), t
                }),
                a = (0, J.useCallback)(e => {
                    i(e), Xe({
                        [B]: e
                    }, t)
                }, [t]),
                o = (0, J.useRef)(null);
            return (0, J.useEffect)(() => {
                let e = new URLSearchParams(n.search).get(B);
                e !== o.current && e && Z.includes(e) && e !== r && a(e), o.current = e
            }, [n.search, a, r]), {
                step: r,
                nextStep: async e => {
                    let t = r,
                        i = Z.indexOf(r);
                    i >= 0 && i < Z.length - 1 && (t = Z[i + 1], a(t));
                    try {
                        await z({
                            workspace_name: e.workspaceName,
                            company_size: e.companySize,
                            department: e.department,
                            role: e.role,
                            step_name: t,
                            query_params: n.search,
                            user_segment: `v1`
                        })
                    } catch (e) {
                        f.addError(e)
                    }
                },
                previousStep: (0, J.useCallback)(async e => {
                    let t = r,
                        i = Z.indexOf(r);
                    i > 0 && (t = Z[i - 1], a(t));
                    try {
                        await z({
                            workspace_name: e.workspaceName,
                            company_size: e.companySize,
                            department: e.department,
                            role: e.role,
                            step_name: t,
                            query_params: n.search,
                            user_segment: `v1`
                        })
                    } catch (e) {
                        f.addError(e)
                    }
                }, [n.search, a, r])
            }
        }
    })),
    $e, Q, et, $, tt = e((() => {
        $e = A(), u(), ie(), O(), Q = C(), et = e => {
            "use forget";
            let t = (0, $e.c)(34),
                {
                    onResume: n,
                    onCreate: r,
                    onClose: i
                } = e,
                o = j(),
                s;
            t[0] === o ? s = t[1] : (s = o.formatMessage($.title), t[0] = o, t[1] = s);
            let c = s,
                l;
            t[2] === i ? l = t[3] : (l = e => {
                e || i()
            }, t[2] = i, t[3] = l);
            let u;
            t[4] === o ? u = t[5] : (u = o.formatMessage($.close), t[4] = o, t[5] = u);
            let d;
            t[6] === u ? d = t[7] : (d = (0, Q.jsx)(N.Header, {
                children: (0, Q.jsx)(N.CloseButton, {
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
            t[16] !== n || t[17] !== h ? (g = (0, Q.jsx)(a, {
                type: `button`,
                color: `primary`,
                onClick: n,
                children: h
            }), t[16] = n, t[17] = h, t[18] = g) : g = t[18];
            let _;
            t[19] === o ? _ = t[20] : (_ = o.formatMessage($.create), t[19] = o, t[20] = _);
            let v;
            t[21] !== r || t[22] !== _ ? (v = (0, Q.jsx)(a, {
                type: `button`,
                color: `secondary`,
                onClick: r,
                children: _
            }), t[21] = r, t[22] = _, t[23] = v) : v = t[23];
            let y;
            t[24] !== v || t[25] !== f || t[26] !== m || t[27] !== g ? (y = (0, Q.jsx)(N.Contents, {
                className: `flex h-full items-center justify-center px-6`,
                children: (0, Q.jsxs)(`div`, {
                    className: `flex w-full max-w-md flex-col gap-5 text-center`,
                    children: [f, m, g, v]
                })
            }), t[24] = v, t[25] = f, t[26] = m, t[27] = g, t[28] = y) : y = t[28];
            let b;
            return t[29] !== y || t[30] !== l || t[31] !== d || t[32] !== c ? (b = (0, Q.jsxs)(N, {
                open: !0,
                renderInPlace: !0,
                accessibleTitle: c,
                onOpenChange: l,
                children: [d, y]
            }), t[29] = y, t[30] = l, t[31] = d, t[32] = c, t[33] = b) : b = t[33], b
        }, $ = E({
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
        D(), nt = A(), Qe(), tt(), Re(), rt = t(k()), it = C(), at = `/create-workspace`, ot = T(function(e) {
            "use forget";
            let t = (0, nt.c)(25),
                {
                    loaderData: n
                } = e,
                r = S(),
                i = te(),
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
            return t[23] === n.pendingWorkspace ? f = t[24] : (f = (0, it.jsx)(Je, {
                pendingWorkspace: n.pendingWorkspace
            }), t[23] = n.pendingWorkspace, t[24] = f), f
        })
    }));
export {
    ot as n, st as r, at as t
};
//# sourceMappingURL=d9c77c9b-jy9r5sgfzogudho3.js.map