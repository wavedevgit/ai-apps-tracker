import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Att as r,
    E6 as i,
    Knt as a,
    LU as o,
    Nat as s,
    O6 as c,
    Oct as l,
    Ptt as u,
    Rz as d,
    Vst as f,
    Wnt as p,
    a0 as m,
    eE as h,
    jat as g,
    kI as _,
    o0 as v,
    q1 as y,
    zU as b,
    zz as x
} from "./4813494d-mdvd4786a87166cc.js";
import {
    At as S,
    Bn as C,
    Ft as w,
    Ht as T,
    Ln as E,
    Nn as ee,
    Nt as D,
    Q as O,
    Rn as k,
    Vn as A,
    wn as j,
    zn as M
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $rn as N,
    Ain as P,
    Cet as te,
    Crn as ne,
    Din as re,
    Dln as ie,
    Eln as ae,
    Hdn as oe,
    Nlt as se,
    Qrn as ce,
    Srn as le,
    Tet as ue,
    Tln as de,
    Trn as fe,
    Udn as pe,
    bcn as me,
    bet as he,
    bsn as ge,
    jlt as F,
    lcn as _e,
    wet as ve,
    wln as ye,
    xsn as be
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Cd as xe,
    Cf as Se,
    Df as Ce,
    Hu as we,
    Of as Te,
    Uu as Ee,
    Vu as De,
    bd as Oe,
    gd as ke,
    hd as Ae,
    wd as je,
    xd as Me,
    xf as Ne
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    a as I,
    c as L,
    n as Pe,
    o as R,
    r as z,
    s as B,
    t as Fe
} from "./b288024a-feaefcovx6dj8f3k.js";
import {
    a as V,
    i as Ie,
    n as H
} from "./8e7d0a25-bjdktlrw5o94z8cp.js";
var U, Le, W, Re, ze = e((() => {
        U = t(A()), k(), L(), R(), ue(), Le = t(A()), W = C(), Re = ({
            formData: e,
            onNext: t
        }) => {
            let n = M(),
                [r, i] = (0, U.useState)({
                    role: e.role ?? ``,
                    department: e.department ?? ``
                }),
                [a, o] = (0, U.useState)({}),
                s = (e, t) => {
                    i(n => ({
                        ...n,
                        [e]: t
                    })), o(t => ({
                        ...t,
                        [e]: ``
                    }))
                },
                c = (0, U.useMemo)(() => {
                    let e = he.map(e => ({
                        label: n.formatMessage(e.displayValue),
                        value: e.id
                    }));
                    return e.sort((e, t) => e.label.localeCompare(t.label)), e
                }, [n]),
                l = (0, U.useMemo)(() => {
                    let e = te.map(e => ({
                        label: n.formatMessage(e.displayValue),
                        value: e.id
                    }));
                    return e.sort((e, t) => e.label.localeCompare(t.label)), e
                }, [n]),
                u = (0, U.useMemo)(() => [{
                    formType: `select`,
                    label: n.formatMessage(B.roleLabel),
                    name: `role`,
                    placeholder: n.formatMessage(B.rolePlaceholder),
                    value: r.role,
                    onChange: e => s(`role`, e),
                    error: a.role,
                    required: !0,
                    options: l
                }, {
                    formType: `select`,
                    label: n.formatMessage(B.workspaceDepartmentLabel),
                    name: `department`,
                    placeholder: n.formatMessage(B.workspaceDepartmentPlaceholder),
                    value: r.department,
                    onChange: e => s(`department`, e),
                    error: a.department,
                    required: !0,
                    options: c
                }], [c, a.department, a.role, r.department, r.role, n, l]),
                d = () => {
                    let e = {};
                    return u.forEach(t => {
                        t.required && !r[t.name] && (e[t.name] = n.formatMessage(B.fieldRequired, {
                            fieldName: t.label
                        }))
                    }), o(e), Object.values(e).every(e => !e)
                };
            return (0, W.jsx)(I, {
                content: (0, W.jsxs)(z, {
                    title: n.formatMessage(B.tellUsAboutWorkStepTitle),
                    subTitle: n.formatMessage(B.tellUsAboutWorkStepSubtitle),
                    children: [(0, W.jsx)(`div`, {
                        className: `flex flex-col gap-6`,
                        children: u.map(e => (0, Le.createElement)(Pe, {
                            ...e,
                            key: e.name
                        }))
                    }), (0, W.jsx)(Fe, {
                        onClick: async () => {
                            d() && await t(r)
                        }
                    })]
                })
            })
        }
    })),
    G, K, Be, Ve, He = e((() => {
        L(), h(), Me(), Ae(), _e(), x(), y(), a(), i(), G = t(A()), k(), R(), K = C(), Be = 1e4, Ve = e => {
            let {
                onNext: t,
                pendingWorkspace: r,
                initialBillingDetails: i,
                formData: a
            } = e, [o, s] = (0, G.useState)(0), [l, u] = (0, G.useState)(!1), f = (0, G.useRef)(!1), h = (0, G.useRef)(null), g = (0, G.useRef)(!1), _ = (0, G.useRef)(!1), {
                isLoading: v
            } = m(), y = M(), {
                data: b,
                isLoading: x,
                error: S
            } = c({
                countryCode: i?.country,
                currency: i?.currency,
                enabled: i != null
            }), C = new URLSearchParams(r?.query_params ?? ``).get(`promo_campaign`) ?? void 0, {
                selectedPlan: w,
                numSeats: T,
                promoData: E,
                promoDataIsFromQueryParam: D,
                isPromoDataLoading: O
            } = ke({
                initialSeats: a?.numSeats,
                initialPromoCoupon: C,
                initialPromoCouponFromQueryParam: C != null
            }), {
                eligible: k,
                campaignId: A
            } = me(), j = !C && k, N = (0, G.useMemo)(() => E ?? (j ? {
                coupon: A,
                state: `eligible`,
                redemption: null
            } : void 0), [E, j, A]), P = E ? D : !j && void 0;
            return (0, G.useEffect)(() => {
                h.current ??= Date.now(), S != null && !g.current && (g.current = !0, p.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                    checkpoint: `checkout_pricing_config_failed`,
                    flow: `standard_business`,
                    severity: `error`,
                    durationMs: Date.now() - h.current,
                    hasBillingDetails: i != null,
                    errorType: S instanceof Error ? S.name : typeof S
                })), !(f.current || !i || v || O || x || S != null || !b) && (f.current = !0, p.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                    checkpoint: `checkout_dependencies_ready`,
                    flow: `standard_business`,
                    durationMs: Date.now() - h.current,
                    seatCount: T,
                    hasPromo: N != null
                }), Promise.resolve(t({
                    priceInterval: w,
                    billingDetails: i,
                    numSeats: T,
                    promoData: N,
                    promoDataIsFromQueryParam: P
                })).catch(e => {
                    p.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                        checkpoint: `checkout_start_failed`,
                        flow: `standard_business`,
                        severity: `error`,
                        durationMs: Date.now() - (h.current ?? Date.now()),
                        errorType: e instanceof Error ? e.name : typeof e
                    }), u(!0)
                }))
            }, [o, b, S, i, v, O, x, T, t, N, P, w]), (0, G.useEffect)(() => {
                if (f.current || l || _.current) return;
                let e = Date.now() - (h.current ?? Date.now()),
                    t = setTimeout(() => {
                        f.current || (_.current = !0, p.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                            checkpoint: `checkout_dependencies_timed_out`,
                            flow: `standard_business`,
                            severity: `warning`,
                            durationMs: Date.now() - (h.current ?? Date.now()),
                            timeoutMs: Be,
                            hasBillingDetails: i != null,
                            accountsLoading: v,
                            promoLoading: O,
                            pricingConfigLoading: x,
                            pricingConfigFailed: S != null,
                            pricingConfigAvailable: b != null
                        }))
                    }, Math.max(0, Be - e));
                return () => clearTimeout(t)
            }, [l, b, S, i, v, x, O]), l ? (0, K.jsx)(I, {
                content: (0, K.jsx)(z, {
                    title: y.formatMessage(B.autoCheckoutErrorTitle),
                    subTitle: y.formatMessage(B.autoCheckoutErrorSubtitle),
                    children: (0, K.jsx)(n, {
                        size: `large`,
                        onClick: () => {
                            f.current = !1, u(!1), s(e => e + 1)
                        },
                        children: (0, K.jsx)(ee, {
                            ...B.autoCheckoutRetryButton
                        })
                    })
                })
            }) : (0, K.jsx)(I, {
                content: (0, K.jsx)(d, {
                    className: `text-token-text-secondary h-8 w-8`
                })
            })
        }
    })),
    q, Ue, J, We, Ge = e((() => {
        q = t(A()), k(), L(), R(), ue(), Ue = t(A()), J = C(), We = ({
            formData: e,
            onNext: t,
            onPrevious: n
        }) => {
            let r = M(),
                [i, a] = (0, q.useState)({
                    workspaceName: e.workspaceName ?? ``,
                    companySize: e.companySize ?? ``
                }),
                [o, s] = (0, q.useState)({}),
                c = (e, t) => {
                    a(n => ({
                        ...n,
                        [e]: t
                    })), s(t => ({
                        ...t,
                        [e]: ``
                    }))
                },
                l = ve.map(e => ({
                    label: typeof e.displayValue == `string` ? e.displayValue : r.formatMessage(e.displayValue),
                    value: e.id
                })),
                u = (0, q.useMemo)(() => [{
                    formType: `input`,
                    label: r.formatMessage(B.workspaceNameLabel),
                    name: `workspaceName`,
                    placeholder: r.formatMessage(B.workspaceNamePlaceholder),
                    value: i.workspaceName,
                    onChange: e => c(`workspaceName`, e),
                    error: o.workspaceName,
                    required: !0,
                    autoFocus: !0
                }, {
                    formType: `select`,
                    label: r.formatMessage(B.workspaceCompanySizeLabel),
                    name: `companySize`,
                    placeholder: r.formatMessage(B.workspaceCompanySizePlaceholder),
                    value: i.companySize,
                    onChange: e => c(`companySize`, e),
                    error: o.companySize,
                    required: !1,
                    options: l
                }], [o.companySize, o.workspaceName, i.companySize, i.workspaceName, r, l]),
                d = () => {
                    let e = {};
                    return u.forEach(t => {
                        t.required && !i[t.name] && (e[t.name] = r.formatMessage(B.fieldRequired, {
                            fieldName: t.label
                        }))
                    }), s(e), Object.values(e).every(e => !e)
                };
            return (0, J.jsx)(I, {
                onPrevious: n ? () => n({
                    ...i
                }) : void 0,
                content: (0, J.jsxs)(z, {
                    title: r.formatMessage(B.workspaceNameStepTitle),
                    subTitle: r.formatMessage(B.workspaceNameStepSubtitle),
                    children: [(0, J.jsx)(`div`, {
                        className: `flex flex-col gap-6`,
                        children: u.map(e => (0, Ue.createElement)(Pe, {
                            ...e,
                            key: e.name
                        }))
                    }), (0, J.jsx)(Fe, {
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
    Y, X, Ke, qe, Je, Ye, Xe, Z, Ze, Qe = e((() => {
        Te(), pe(), l(), r(), L(), ae(), we(), be(), re(), de(), ce(), Ne(), xe(), Me(), le(), y(), o(), a(), s(), Y = t(A()), k(), O(), Ie(), ze(), He(), Ge(), X = C(), Ke = function(e) {
            return e.AboutWork = `about-work`, e.WorkspaceInfo = `workspace-info`, e.ConfigurePlan = `configure-plan`, e
        }(Ke || {}), qe = u(Object.values(Ke), void 0), Je = ({
            pendingWorkspace: e
        }) => {
            let t = M(),
                [n, r] = (0, Y.useState)({
                    workspaceName: e?.workspace_name ?? void 0,
                    role: e?.role ?? void 0,
                    department: e?.department ?? void 0,
                    companySize: e?.company_size ?? void 0,
                    numSeats: e?.seat_quantity ?? void 0
                }),
                i = new URLSearchParams(e?.query_params ?? ``).get(Oe);
            je(i ?? ``, !!i);
            let a = Ye({
                    data: n
                }),
                o = v(),
                s = S(),
                c = new URLSearchParams(s.search).get(`country_code`) ?? new URLSearchParams(e?.query_params ?? ``).get(`country_code`) ?? void 0,
                l = w(),
                {
                    country: u,
                    userCountry: d
                } = fe({
                    initialCountryCode: c
                }),
                f = ne({
                    country: u,
                    currentAccount: o,
                    location: `TeamDirectSignUpFlow`,
                    pricingPlanIsTypeBusiness: !0,
                    shouldUsePaidSubscriptionBillingCurrency: N(o)
                }),
                m = qe(e?.step_name),
                {
                    step: h,
                    nextStep: g
                } = Ze({
                    initialStep: m && Z.includes(m) ? m : void 0
                });
            return (0, Y.useEffect)(() => {
                e || (() => {
                    let t = Date.now();
                    p.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                        checkpoint: `pending_workspace_save_started`,
                        flow: `standard_business`,
                        step: e?.step_name ?? Z[0]
                    }), V({
                        step_name: e?.step_name ?? Z[0],
                        query_params: s.search,
                        user_segment: `v1`
                    }).then(() => {
                        p.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                            checkpoint: `pending_workspace_saved`,
                            flow: `standard_business`,
                            durationMs: Date.now() - t
                        })
                    }).catch(e => {
                        throw p.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                            checkpoint: `pending_workspace_save_failed`,
                            flow: `standard_business`,
                            severity: `error`,
                            durationMs: Date.now() - t,
                            errorType: e instanceof Error ? e.name : typeof e
                        }), e
                    })
                })()
            }, []), (0, Y.useEffect)(() => {
                let t = s.key,
                    n = new URLSearchParams(window.location.search).get(`referrer`) || document.referrer,
                    r = p.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                        ...Ce(n),
                        checkpoint: `signup_step_viewed`,
                        flow: `standard_business`,
                        entryPoint: ie.TEAM_DIRECT_SIGNUP,
                        step: h,
                        initialStep: e?.step_name === m ? m : void 0
                    });
                p.logValueEventWithStatsig({
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
                        selectedCountry: f?.country ?? ``,
                        selectedCurrency: f?.currency ?? ``,
                        userCountry: d ?? ``
                    }
                })
            }, [h]), (0, X.jsxs)(X.Fragment, {
                children: [(0, X.jsx)(`title`, {
                    children: t.formatMessage(B.teamSignUpPageTitle)
                }), (() => {
                    switch (h) {
                        case `about-work`:
                            return (0, X.jsx)(Re, {
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
                            return (0, X.jsx)(We, {
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
                            return (0, X.jsx)(Ve, {
                                formData: n,
                                initialBillingDetails: f ?? void 0,
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
            } = P(), r = b(), i = M(), a = v();
            return (0, Y.useCallback)(async ({
                priceInterval: o,
                billingDetails: s,
                numSeats: c,
                promoData: l,
                promoDataIsFromQueryParam: u
            }, d) => {
                let m = Date.now(),
                    h = !1;
                try {
                    let r = p.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                        ...Ce(document.referrer),
                        checkpoint: `checkout_started`,
                        flow: `standard_business`,
                        seatCount: c,
                        billingCountry: s.country,
                        priceInterval: o
                    });
                    p.logEvent(`Account Pay: Payment Checkout Clicked`, {
                        planType: f.SELF_SERVE_BUSINESS,
                        ...a?.subscriptionAnalyticsParams,
                        referrer: document.referrer,
                        ...ye({
                            checkoutOriginProductExperience: oe.WORK,
                            checkoutOriginDeliverySurface: `web`
                        })
                    }, {
                        eventId: r
                    });
                    let i = {
                            entry_point: ie.TEAM_DIRECT_SIGNUP,
                            plan_name: `chatgptteamplan`,
                            team_plan_data: {
                                workspace_name: e.workspaceName ?? ``,
                                price_interval: o,
                                seat_quantity: c
                            },
                            billing_details: s,
                            checkout_ui_mode: `custom`,
                            ...o === _.FLEXIBLE && l?.coupon ? {
                                promo_campaign: {
                                    promo_campaign_id: l?.coupon,
                                    is_coupon_from_query_param: !!u
                                }
                            } : {},
                            cancel_url: window.location.href
                        },
                        d = await t(i, {});
                    h = !0, p.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                        checkpoint: `checkout_session_created`,
                        flow: `standard_business`,
                        checkoutSessionId: ge(d),
                        durationMs: Date.now() - m,
                        seatCount: c,
                        priceInterval: o
                    }), await n(d, {
                        checkoutPayload: i,
                        checkoutOriginProvenance: {
                            checkoutOriginProductExperience: oe.WORK,
                            checkoutOriginDeliverySurface: `web`
                        }
                    })
                } catch (e) {
                    if (p.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                            checkpoint: h ? `checkout_navigation_failed` : `checkout_creation_failed`,
                            flow: `standard_business`,
                            severity: `error`,
                            durationMs: Date.now() - m,
                            seatCount: c,
                            priceInterval: o,
                            errorType: e instanceof Error ? e.name : typeof e
                        }), g.addError(e), r.warning(i.formatMessage(Ee(e) ? De : Se.paymentErrorWarning), {
                            hasCloseButton: !0
                        }), d?.throwOnError) throw e
                }
            }, [a, e.workspaceName, i, n, t, r])
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
            let t = D(),
                n = S(),
                [r, i] = (0, Y.useState)(() => {
                    let t = e ?? Z[0];
                    return Xe({
                        [H]: t
                    }), t
                }),
                a = (0, Y.useCallback)(e => {
                    i(e), Xe({
                        [H]: e
                    }, t)
                }, [t]),
                o = (0, Y.useRef)(null);
            return (0, Y.useEffect)(() => {
                let e = new URLSearchParams(n.search).get(H);
                e !== o.current && e && Z.includes(e) && e !== r && a(e), o.current = e
            }, [n.search, a, r]), {
                step: r,
                nextStep: async e => {
                    let t = r,
                        i = Z.indexOf(r);
                    i >= 0 && i < Z.length - 1 && (t = Z[i + 1], a(t));
                    try {
                        await V({
                            workspace_name: e.workspaceName,
                            company_size: e.companySize,
                            department: e.department,
                            role: e.role,
                            step_name: t,
                            query_params: n.search,
                            user_segment: `v1`
                        })
                    } catch (e) {
                        g.addError(e)
                    }
                },
                previousStep: (0, Y.useCallback)(async e => {
                    let t = r,
                        i = Z.indexOf(r);
                    i > 0 && (t = Z[i - 1], a(t));
                    try {
                        await V({
                            workspace_name: e.workspaceName,
                            company_size: e.companySize,
                            department: e.department,
                            role: e.role,
                            step_name: t,
                            query_params: n.search,
                            user_segment: `v1`
                        })
                    } catch (e) {
                        g.addError(e)
                    }
                }, [n.search, a, r])
            }
        }
    })),
    $e, Q, et, $, tt = e((() => {
        $e = j(), h(), se(), k(), Q = C(), et = e => {
            "use forget";
            let t = (0, $e.c)(34),
                {
                    onResume: r,
                    onCreate: i,
                    onClose: a
                } = e,
                o = M(),
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
            t[6] === u ? d = t[7] : (d = (0, Q.jsx)(F.Header, {
                children: (0, Q.jsx)(F.CloseButton, {
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
            t[16] !== r || t[17] !== h ? (g = (0, Q.jsx)(n, {
                type: `button`,
                color: `primary`,
                onClick: r,
                children: h
            }), t[16] = r, t[17] = h, t[18] = g) : g = t[18];
            let _;
            t[19] === o ? _ = t[20] : (_ = o.formatMessage($.create), t[19] = o, t[20] = _);
            let v;
            t[21] !== i || t[22] !== _ ? (v = (0, Q.jsx)(n, {
                type: `button`,
                color: `secondary`,
                onClick: i,
                children: _
            }), t[21] = i, t[22] = _, t[23] = v) : v = t[23];
            let y;
            t[24] !== v || t[25] !== f || t[26] !== m || t[27] !== g ? (y = (0, Q.jsx)(F.Contents, {
                className: `flex h-full items-center justify-center px-6`,
                children: (0, Q.jsxs)(`div`, {
                    className: `flex w-full max-w-md flex-col gap-5 text-center`,
                    children: [f, m, g, v]
                })
            }), t[24] = v, t[25] = f, t[26] = m, t[27] = g, t[28] = y) : y = t[28];
            let b;
            return t[29] !== y || t[30] !== l || t[31] !== d || t[32] !== c ? (b = (0, Q.jsxs)(F, {
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
        O(), nt = j(), Qe(), tt(), Ie(), rt = t(A()), it = C(), at = `/create-workspace`, ot = T(function(e) {
            "use forget";
            let t = (0, nt.c)(25),
                {
                    loaderData: n
                } = e,
                r = S(),
                i = D(),
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
//# sourceMappingURL=d9c77c9b-d1im5mninp0amoz0.js.map