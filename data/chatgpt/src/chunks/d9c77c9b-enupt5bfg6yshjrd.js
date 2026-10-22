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
    Nst as c,
    Rnt as l,
    Rz as u,
    T6 as d,
    Tat as f,
    a0 as p,
    bct as m,
    eE as h,
    kI as g,
    o0 as _,
    q1 as v,
    r5 as y,
    zU as b,
    zz as x
} from "./4813494d-nxpmzchfjvwqts17.js";
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
    Cet as N,
    Cln as te,
    Crn as ne,
    Ilt as re,
    Oin as ie,
    Plt as P,
    Rdn as ae,
    Sln as oe,
    Tet as se,
    Tin as ce,
    Xrn as le,
    Zrn as ue,
    _cn as de,
    _sn as fe,
    bet as pe,
    brn as me,
    ocn as he,
    vsn as ge,
    wet as _e,
    wln as ve,
    xln as ye,
    xrn as be,
    zdn as xe
} from "./conversation-small-m08q51xmfe7gjq3d.js";
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
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    a as F,
    c as I,
    n as Fe,
    o as L,
    r as R,
    s as z,
    t as Ie
} from "./b288024a-n6lkzezi84uipokq.js";
import {
    a as Le,
    i as Re,
    n as B
} from "./8e7d0a25-m5ec0ji9rc2khhss.js";
var V, ze, H, Be, Ve = e((() => {
        V = t(A()), k(), I(), L(), se(), ze = t(A()), H = C(), Be = ({
            formData: e,
            onNext: t
        }) => {
            let n = M(),
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
                    let e = pe.map(e => ({
                        label: n.formatMessage(e.displayValue),
                        value: e.id
                    }));
                    return e.sort((e, t) => e.label.localeCompare(t.label)), e
                }, [n]),
                l = (0, V.useMemo)(() => {
                    let e = N.map(e => ({
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
        I(), h(), Ae(), Ne(), he(), x(), v(), l(), d(), U = t(A()), k(), L(), W = C(), He = 1e4, Ue = e => {
            let {
                onNext: t,
                pendingWorkspace: n,
                initialBillingDetails: i,
                formData: s
            } = e, [c, l] = (0, U.useState)(0), [d, f] = (0, U.useState)(!1), m = (0, U.useRef)(!1), h = (0, U.useRef)(null), g = (0, U.useRef)(!1), _ = (0, U.useRef)(!1), {
                isLoading: v
            } = p(), y = M(), {
                data: b,
                isLoading: x,
                error: S
            } = a({
                countryCode: i?.country,
                currency: i?.currency,
                enabled: i != null
            }), C = new URLSearchParams(n?.query_params ?? ``).get(`promo_campaign`) ?? void 0, {
                selectedPlan: w,
                numSeats: T,
                promoData: E,
                promoDataIsFromQueryParam: D,
                isPromoDataLoading: O
            } = Me({
                initialSeats: s?.numSeats,
                initialPromoCoupon: C,
                initialPromoCouponFromQueryParam: C != null
            }), {
                eligible: k,
                campaignId: A
            } = de(), j = !C && k, N = (0, U.useMemo)(() => E ?? (j ? {
                coupon: A,
                state: `eligible`,
                redemption: null
            } : void 0), [E, j, A]), te = E ? D : !j && void 0;
            return (0, U.useEffect)(() => {
                h.current ??= Date.now(), S != null && !g.current && (g.current = !0, o.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                    checkpoint: `checkout_pricing_config_failed`,
                    flow: `standard_business`,
                    severity: `error`,
                    durationMs: Date.now() - h.current,
                    hasBillingDetails: i != null,
                    errorType: S instanceof Error ? S.name : typeof S
                })), !(m.current || !i || v || O || x || S != null || !b) && (m.current = !0, o.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
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
                    promoDataIsFromQueryParam: te
                })).catch(e => {
                    o.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                        checkpoint: `checkout_start_failed`,
                        flow: `standard_business`,
                        severity: `error`,
                        durationMs: Date.now() - (h.current ?? Date.now()),
                        errorType: e instanceof Error ? e.name : typeof e
                    }), f(!0)
                }))
            }, [c, b, S, i, v, O, x, T, t, N, te, w]), (0, U.useEffect)(() => {
                if (m.current || d || _.current) return;
                let e = Date.now() - (h.current ?? Date.now()),
                    t = setTimeout(() => {
                        m.current || (_.current = !0, o.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                            checkpoint: `checkout_dependencies_timed_out`,
                            flow: `standard_business`,
                            severity: `warning`,
                            durationMs: Date.now() - (h.current ?? Date.now()),
                            timeoutMs: He,
                            hasBillingDetails: i != null,
                            accountsLoading: v,
                            promoLoading: O,
                            pricingConfigLoading: x,
                            pricingConfigFailed: S != null,
                            pricingConfigAvailable: b != null
                        }))
                    }, Math.max(0, He - e));
                return () => clearTimeout(t)
            }, [d, b, S, i, v, x, O]), d ? (0, W.jsx)(F, {
                content: (0, W.jsx)(R, {
                    title: y.formatMessage(z.autoCheckoutErrorTitle),
                    subTitle: y.formatMessage(z.autoCheckoutErrorSubtitle),
                    children: (0, W.jsx)(r, {
                        size: `large`,
                        onClick: () => {
                            m.current = !1, f(!1), l(e => e + 1)
                        },
                        children: (0, W.jsx)(ee, {
                            ...z.autoCheckoutRetryButton
                        })
                    })
                })
            }) : (0, W.jsx)(F, {
                content: (0, W.jsx)(u, {
                    className: `text-token-text-secondary h-8 w-8`
                })
            })
        }
    })),
    G, Ge, K, Ke, qe = e((() => {
        G = t(A()), k(), I(), L(), se(), Ge = t(A()), K = C(), Ke = ({
            formData: e,
            onNext: t,
            onPrevious: n
        }) => {
            let r = M(),
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
                l = _e.map(e => ({
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
        we(), xe(), m(), n(), I(), te(), ke(), ge(), ce(), oe(), le(), je(), De(), Ae(), me(), v(), s(), l(), f(), q = t(A()), k(), O(), Re(), Ve(), We(), qe(), J = C(), Y = function(e) {
            return e.AboutWork = `about-work`, e.WorkspaceInfo = `workspace-info`, e.ConfigurePlan = `configure-plan`, e
        }(Y || {}), Je = y(Object.values(Y), void 0), Ye = ({
            pendingWorkspace: e
        }) => {
            let t = M(),
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
                s = _(),
                c = S(),
                l = new URLSearchParams(c.search).get(`country_code`) ?? new URLSearchParams(e?.query_params ?? ``).get(`country_code`) ?? void 0,
                u = w(),
                {
                    country: d,
                    userCountry: f
                } = ne({
                    initialCountryCode: l
                }),
                p = be({
                    country: d,
                    currentAccount: s,
                    location: `TeamDirectSignUpFlow`,
                    pricingPlanIsTypeBusiness: !0,
                    shouldUsePaidSubscriptionBillingCurrency: ue(s)
                }),
                m = Je(e?.step_name),
                {
                    step: h,
                    nextStep: g
                } = Ze({
                    initialStep: m && Z.includes(m) ? m : void 0
                });
            return (0, q.useEffect)(() => {
                e || (() => {
                    let t = Date.now();
                    o.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                        checkpoint: `pending_workspace_save_started`,
                        flow: `standard_business`,
                        step: e?.step_name ?? Z[0]
                    }), Le({
                        step_name: e?.step_name ?? Z[0],
                        query_params: c.search,
                        user_segment: `v1`
                    }).then(() => {
                        o.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                            checkpoint: `pending_workspace_saved`,
                            flow: `standard_business`,
                            durationMs: Date.now() - t
                        })
                    }).catch(e => {
                        throw o.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                            checkpoint: `pending_workspace_save_failed`,
                            flow: `standard_business`,
                            severity: `error`,
                            durationMs: Date.now() - t,
                            errorType: e instanceof Error ? e.name : typeof e
                        }), e
                    })
                })()
            }, []), (0, q.useEffect)(() => {
                let t = c.key,
                    n = new URLSearchParams(window.location.search).get(`referrer`) || document.referrer,
                    r = o.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                        ...Te(n),
                        checkpoint: `signup_step_viewed`,
                        flow: `standard_business`,
                        entryPoint: ve.TEAM_DIRECT_SIGNUP,
                        step: h,
                        initialStep: e?.step_name === m ? m : void 0
                    });
                o.logValueEventWithStatsig({
                    segmentEventName: `Account Pay: Team Direct Sign Up Flow`,
                    statsigEventName: `chatgpt_account_payment_team_direct_sign_up_flow`,
                    ...r ? {
                        eventId: r
                    } : {},
                    data: {
                        ...s?.subscriptionAnalyticsParams,
                        referrer: n,
                        initialTab: e?.step_name,
                        currentTab: h,
                        locationKey: t,
                        navigationType: u,
                        initialCountrySelectorCountry: l ?? d,
                        selectedCountry: p?.country ?? ``,
                        selectedCurrency: p?.currency ?? ``,
                        userCountry: f ?? ``
                    }
                })
            }, [h]), (0, J.jsxs)(J.Fragment, {
                children: [(0, J.jsx)(`title`, {
                    children: t.formatMessage(z.teamSignUpPageTitle)
                }), (() => {
                    switch (h) {
                        case `about-work`:
                            return (0, J.jsx)(Be, {
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
                            return (0, J.jsx)(Ke, {
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
            } = ie(), r = b(), a = M(), s = _();
            return (0, q.useCallback)(async ({
                priceInterval: l,
                billingDetails: u,
                numSeats: d,
                promoData: f,
                promoDataIsFromQueryParam: p
            }, m) => {
                let h = Date.now(),
                    _ = !1;
                try {
                    let r = o.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                        ...Te(document.referrer),
                        checkpoint: `checkout_started`,
                        flow: `standard_business`,
                        seatCount: d,
                        billingCountry: u.country,
                        priceInterval: l
                    });
                    o.logEvent(`Account Pay: Payment Checkout Clicked`, {
                        planType: c.SELF_SERVE_BUSINESS,
                        ...s?.subscriptionAnalyticsParams,
                        referrer: document.referrer,
                        ...ye({
                            checkoutOriginProductExperience: ae.WORK,
                            checkoutOriginDeliverySurface: `web`
                        })
                    }, {
                        eventId: r
                    });
                    let i = {
                            entry_point: ve.TEAM_DIRECT_SIGNUP,
                            plan_name: `chatgptteamplan`,
                            team_plan_data: {
                                workspace_name: e.workspaceName ?? ``,
                                price_interval: l,
                                seat_quantity: d
                            },
                            billing_details: u,
                            checkout_ui_mode: `custom`,
                            ...l === g.FLEXIBLE && f?.coupon ? {
                                promo_campaign: {
                                    promo_campaign_id: f?.coupon,
                                    is_coupon_from_query_param: !!p
                                }
                            } : {},
                            cancel_url: window.location.href
                        },
                        a = await t(i, {});
                    _ = !0, o.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                        checkpoint: `checkout_session_created`,
                        flow: `standard_business`,
                        checkoutSessionId: fe(a),
                        durationMs: Date.now() - h,
                        seatCount: d,
                        priceInterval: l
                    }), await n(a, {
                        checkoutPayload: i,
                        checkoutOriginProvenance: {
                            checkoutOriginProductExperience: ae.WORK,
                            checkoutOriginDeliverySurface: `web`
                        }
                    })
                } catch (e) {
                    if (o.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                            checkpoint: _ ? `checkout_navigation_failed` : `checkout_creation_failed`,
                            flow: `standard_business`,
                            severity: `error`,
                            durationMs: Date.now() - h,
                            seatCount: d,
                            priceInterval: l,
                            errorType: e instanceof Error ? e.name : typeof e
                        }), i.addError(e), r.warning(a.formatMessage(Ee(e) ? Se : Oe.paymentErrorWarning), {
                            hasCloseButton: !0
                        }), m?.throwOnError) throw e
                }
            }, [s, e.workspaceName, a, n, t, r])
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
            let t = D(),
                n = S(),
                [r, a] = (0, q.useState)(() => {
                    let t = e ?? Z[0];
                    return X({
                        [B]: t
                    }), t
                }),
                o = (0, q.useCallback)(e => {
                    a(e), X({
                        [B]: e
                    }, t)
                }, [t]),
                s = (0, q.useRef)(null);
            return (0, q.useEffect)(() => {
                let e = new URLSearchParams(n.search).get(B);
                e !== s.current && e && Z.includes(e) && e !== r && o(e), s.current = e
            }, [n.search, o, r]), {
                step: r,
                nextStep: async e => {
                    let t = r,
                        a = Z.indexOf(r);
                    a >= 0 && a < Z.length - 1 && (t = Z[a + 1], o(t));
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
                        i.addError(e)
                    }
                },
                previousStep: (0, q.useCallback)(async e => {
                    let t = r,
                        a = Z.indexOf(r);
                    a > 0 && (t = Z[a - 1], o(t));
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
                        i.addError(e)
                    }
                }, [n.search, o, r])
            }
        }
    })),
    $e, Q, et, $, tt = e((() => {
        $e = j(), h(), re(), k(), Q = C(), et = e => {
            "use forget";
            let t = (0, $e.c)(34),
                {
                    onResume: n,
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
        O(), nt = j(), Qe(), tt(), Re(), rt = t(A()), it = C(), at = `/create-workspace`, ot = T(function(e) {
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
            return t[23] === n.pendingWorkspace ? f = t[24] : (f = (0, it.jsx)(Ye, {
                pendingWorkspace: n.pendingWorkspace
            }), t[23] = n.pendingWorkspace, t[24] = f), f
        })
    }));
export {
    ot as n, st as r, at as t
};
//# sourceMappingURL=d9c77c9b-enupt5bfg6yshjrd.js.map