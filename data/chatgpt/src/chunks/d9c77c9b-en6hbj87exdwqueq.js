import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    Btt as r,
    C1 as i,
    Dit as a,
    Htt as o,
    L3 as s,
    Lot as c,
    S1 as l,
    aI as u,
    dz as d,
    fz as f,
    hU as p,
    kT as m,
    kit as h,
    m8 as g,
    pU as _,
    u1 as v,
    u8 as y,
    wst as b,
    z3 as ee
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as x,
    Bn as S,
    It as C,
    Ln as w,
    Nn as te,
    Pt as T,
    Rn as E,
    Ut as D,
    Vn as O,
    jt as k,
    wn as A,
    zn as j
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $nn as M,
    Bsn as ne,
    Cet as N,
    Drn as re,
    Ern as ie,
    Flt as ae,
    Gcn as oe,
    Kcn as se,
    Kon as ce,
    Nlt as P,
    Set as le,
    Wcn as ue,
    Xnn as de,
    Znn as fe,
    cdn as pe,
    iin as me,
    ksn as he,
    qcn as ge,
    qon as _e,
    sdn as ve,
    tin as ye,
    wet as be,
    yet as xe
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $d as Se,
    Cd as Ce,
    Gd as we,
    Kd as Te,
    Td as Ee,
    Xd as De,
    Yf as Oe,
    Zd as ke,
    Zf as Ae,
    ef as je,
    np as Me,
    tp as Ne,
    wd as Pe
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    a as F,
    c as I,
    n as Fe,
    o as L,
    r as R,
    s as z,
    t as Ie
} from "./b288024a-br804k969embapgc.js";
import {
    a as B,
    i as Le,
    n as V
} from "./8e7d0a25-kcdov95ax8g54lw1.js";
var H, Re, U, ze, Be = e((() => {
        H = t(O()), E(), I(), L(), be(), Re = t(O()), U = S(), ze = ({
            formData: e,
            onNext: t
        }) => {
            let n = j(),
                [r, i] = (0, H.useState)({
                    role: e.role ?? ``,
                    department: e.department ?? ``
                }),
                [a, o] = (0, H.useState)({}),
                s = (e, t) => {
                    i(n => ({
                        ...n,
                        [e]: t
                    })), o(t => ({
                        ...t,
                        [e]: ``
                    }))
                },
                c = (0, H.useMemo)(() => {
                    let e = xe.map(e => ({
                        label: n.formatMessage(e.displayValue),
                        value: e.id
                    }));
                    return e.sort((e, t) => e.label.localeCompare(t.label)), e
                }, [n]),
                l = (0, H.useMemo)(() => {
                    let e = le.map(e => ({
                        label: n.formatMessage(e.displayValue),
                        value: e.id
                    }));
                    return e.sort((e, t) => e.label.localeCompare(t.label)), e
                }, [n]),
                u = (0, H.useMemo)(() => [{
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
            return (0, U.jsx)(F, {
                content: (0, U.jsxs)(R, {
                    title: n.formatMessage(z.tellUsAboutWorkStepTitle),
                    subTitle: n.formatMessage(z.tellUsAboutWorkStepSubtitle),
                    children: [(0, U.jsx)(`div`, {
                        className: `flex flex-col gap-6`,
                        children: u.map(e => (0, Re.createElement)(Fe, {
                            ...e,
                            key: e.name
                        }))
                    }), (0, U.jsx)(Ie, {
                        onClick: async () => {
                            d() && await t(r)
                        }
                    })]
                })
            })
        }
    })),
    W, G, K, Ve, He = e((() => {
        I(), n(), ke(), we(), he(), f(), v(), o(), s(), W = t(O()), E(), L(), G = S(), K = 1e4, Ve = e => {
            let {
                onNext: t,
                pendingWorkspace: n,
                initialBillingDetails: i,
                formData: a
            } = e, [o, s] = (0, W.useState)(0), [c, u] = (0, W.useState)(!1), f = (0, W.useRef)(!1), p = (0, W.useRef)(null), h = (0, W.useRef)(!1), g = (0, W.useRef)(!1), {
                isLoading: _
            } = l(), v = j(), {
                data: y,
                isLoading: b,
                error: x
            } = ee({
                countryCode: i?.country,
                currency: i?.currency,
                enabled: i != null
            }), S = new URLSearchParams(n?.query_params ?? ``).get(`promo_campaign`) ?? void 0, {
                selectedPlan: C,
                numSeats: w,
                promoData: T,
                promoDataIsFromQueryParam: E,
                isPromoDataLoading: D
            } = Te({
                initialSeats: a?.numSeats,
                initialPromoCoupon: S,
                initialPromoCouponFromQueryParam: S != null
            }), {
                eligible: O,
                campaignId: k
            } = ne(), A = !S && O, M = (0, W.useMemo)(() => T ?? (A ? {
                coupon: k,
                state: `eligible`,
                redemption: null
            } : void 0), [T, A, k]), N = T ? E : !A && void 0;
            return (0, W.useEffect)(() => {
                p.current ??= Date.now(), x != null && !h.current && (h.current = !0, r.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                    checkpoint: `checkout_pricing_config_failed`,
                    flow: `standard_business`,
                    severity: `error`,
                    durationMs: Date.now() - p.current,
                    hasBillingDetails: i != null,
                    errorType: x instanceof Error ? x.name : typeof x
                })), !(f.current || !i || _ || D || b || x != null || !y) && (f.current = !0, r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                    checkpoint: `checkout_dependencies_ready`,
                    flow: `standard_business`,
                    durationMs: Date.now() - p.current,
                    seatCount: w,
                    hasPromo: M != null
                }), Promise.resolve(t({
                    priceInterval: C,
                    billingDetails: i,
                    numSeats: w,
                    promoData: M,
                    promoDataIsFromQueryParam: N
                })).catch(e => {
                    r.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                        checkpoint: `checkout_start_failed`,
                        flow: `standard_business`,
                        severity: `error`,
                        durationMs: Date.now() - (p.current ?? Date.now()),
                        errorType: e instanceof Error ? e.name : typeof e
                    }), u(!0)
                }))
            }, [o, y, x, i, _, D, b, w, t, M, N, C]), (0, W.useEffect)(() => {
                if (f.current || c || g.current) return;
                let e = Date.now() - (p.current ?? Date.now()),
                    t = setTimeout(() => {
                        f.current || (g.current = !0, r.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                            checkpoint: `checkout_dependencies_timed_out`,
                            flow: `standard_business`,
                            severity: `warning`,
                            durationMs: Date.now() - (p.current ?? Date.now()),
                            timeoutMs: K,
                            hasBillingDetails: i != null,
                            accountsLoading: _,
                            promoLoading: D,
                            pricingConfigLoading: b,
                            pricingConfigFailed: x != null,
                            pricingConfigAvailable: y != null
                        }))
                    }, Math.max(0, K - e));
                return () => clearTimeout(t)
            }, [c, y, x, i, _, b, D]), c ? (0, G.jsx)(F, {
                content: (0, G.jsx)(R, {
                    title: v.formatMessage(z.autoCheckoutErrorTitle),
                    subTitle: v.formatMessage(z.autoCheckoutErrorSubtitle),
                    children: (0, G.jsx)(m, {
                        size: `large`,
                        onClick: () => {
                            f.current = !1, u(!1), s(e => e + 1)
                        },
                        children: (0, G.jsx)(te, {
                            ...z.autoCheckoutRetryButton
                        })
                    })
                })
            }) : (0, G.jsx)(F, {
                content: (0, G.jsx)(d, {
                    className: `text-token-text-secondary h-8 w-8`
                })
            })
        }
    })),
    q, Ue, J, We, Ge = e((() => {
        q = t(O()), E(), I(), L(), be(), Ue = t(O()), J = S(), We = ({
            formData: e,
            onNext: t,
            onPrevious: n
        }) => {
            let r = j(),
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
                l = N.map(e => ({
                    label: typeof e.displayValue == `string` ? e.displayValue : r.formatMessage(e.displayValue),
                    value: e.id
                })),
                u = (0, q.useMemo)(() => [{
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
            return (0, J.jsx)(F, {
                onPrevious: n ? () => n({
                    ...i
                }) : void 0,
                content: (0, J.jsxs)(R, {
                    title: r.formatMessage(z.workspaceNameStepTitle),
                    subTitle: r.formatMessage(z.workspaceNameStepSubtitle),
                    children: [(0, J.jsx)(`div`, {
                        className: `flex flex-col gap-6`,
                        children: u.map(e => (0, Ue.createElement)(Fe, {
                            ...e,
                            key: e.name
                        }))
                    }), (0, J.jsx)(Ie, {
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
        Me(), pe(), b(), y(), I(), se(), Pe(), _e(), ye(), oe(), ie(), Oe(), Se(), ke(), de(), v(), _(), o(), h(), Y = t(O()), E(), x(), Le(), Be(), He(), Ge(), X = S(), Ke = function(e) {
            return e.AboutWork = `about-work`, e.WorkspaceInfo = `workspace-info`, e.ConfigurePlan = `configure-plan`, e
        }(Ke || {}), qe = g(Object.values(Ke), void 0), Je = ({
            pendingWorkspace: e
        }) => {
            let t = j(),
                [n, a] = (0, Y.useState)({
                    workspaceName: e?.workspace_name ?? void 0,
                    role: e?.role ?? void 0,
                    department: e?.department ?? void 0,
                    companySize: e?.company_size ?? void 0,
                    numSeats: e?.seat_quantity ?? void 0
                }),
                o = new URLSearchParams(e?.query_params ?? ``).get(De);
            je(o ?? ``, !!o);
            let s = Ye({
                    data: n
                }),
                c = i(),
                l = k(),
                u = new URLSearchParams(l.search).get(`country_code`) ?? new URLSearchParams(e?.query_params ?? ``).get(`country_code`) ?? void 0,
                d = C(),
                {
                    country: f,
                    userCountry: p
                } = M({
                    initialCountryCode: u
                }),
                m = fe({
                    country: f,
                    currentAccount: c,
                    location: `TeamDirectSignUpFlow`,
                    pricingPlanIsTypeBusiness: !0,
                    shouldUsePaidSubscriptionBillingCurrency: re(c)
                }),
                h = qe(e?.step_name),
                {
                    step: g,
                    nextStep: _
                } = Ze({
                    initialStep: h && Z.includes(h) ? h : void 0
                });
            return (0, Y.useEffect)(() => {
                e || (() => {
                    let t = Date.now();
                    r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                        checkpoint: `pending_workspace_save_started`,
                        flow: `standard_business`,
                        step: e?.step_name ?? Z[0]
                    }), B({
                        step_name: e?.step_name ?? Z[0],
                        query_params: l.search,
                        user_segment: `v1`
                    }).then(() => {
                        r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                            checkpoint: `pending_workspace_saved`,
                            flow: `standard_business`,
                            durationMs: Date.now() - t
                        })
                    }).catch(e => {
                        throw r.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                            checkpoint: `pending_workspace_save_failed`,
                            flow: `standard_business`,
                            severity: `error`,
                            durationMs: Date.now() - t,
                            errorType: e instanceof Error ? e.name : typeof e
                        }), e
                    })
                })()
            }, []), (0, Y.useEffect)(() => {
                let t = l.key,
                    n = new URLSearchParams(window.location.search).get(`referrer`) || document.referrer,
                    i = r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                        ...Ne(n),
                        checkpoint: `signup_step_viewed`,
                        flow: `standard_business`,
                        entryPoint: ge.TEAM_DIRECT_SIGNUP,
                        step: g,
                        initialStep: e?.step_name === h ? h : void 0
                    });
                r.logValueEventWithStatsig({
                    segmentEventName: `Account Pay: Team Direct Sign Up Flow`,
                    statsigEventName: `chatgpt_account_payment_team_direct_sign_up_flow`,
                    ...i ? {
                        eventId: i
                    } : {},
                    data: {
                        ...c?.subscriptionAnalyticsParams,
                        referrer: n,
                        initialTab: e?.step_name,
                        currentTab: g,
                        locationKey: t,
                        navigationType: d,
                        initialCountrySelectorCountry: u ?? f,
                        selectedCountry: m?.country ?? ``,
                        selectedCurrency: m?.currency ?? ``,
                        userCountry: p ?? ``
                    }
                })
            }, [g]), (0, X.jsxs)(X.Fragment, {
                children: [(0, X.jsx)(`title`, {
                    children: t.formatMessage(z.teamSignUpPageTitle)
                }), (() => {
                    switch (g) {
                        case `about-work`:
                            return (0, X.jsx)(ze, {
                                formData: n,
                                onNext: async e => {
                                    let t = {
                                        ...n,
                                        ...e
                                    };
                                    a(t), await _(t)
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
                                    a(t), await _(t)
                                }
                            });
                        case `configure-plan`:
                            return (0, X.jsx)(Ve, {
                                formData: n,
                                initialBillingDetails: m ?? void 0,
                                onNext: async e => {
                                    await s({
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
            } = me(), o = p(), s = j(), l = i();
            return (0, Y.useCallback)(async ({
                priceInterval: i,
                billingDetails: d,
                numSeats: f,
                promoData: p,
                promoDataIsFromQueryParam: m
            }, h) => {
                let g = Date.now(),
                    _ = !1;
                try {
                    let a = r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                        ...Ne(document.referrer),
                        checkpoint: `checkout_started`,
                        flow: `standard_business`,
                        seatCount: f,
                        billingCountry: d.country,
                        priceInterval: i
                    });
                    r.logEvent(`Account Pay: Payment Checkout Clicked`, {
                        planType: c.SELF_SERVE_BUSINESS,
                        ...l?.subscriptionAnalyticsParams,
                        referrer: document.referrer,
                        ...ue({
                            checkoutOriginProductExperience: ve.WORK,
                            checkoutOriginDeliverySurface: `web`
                        })
                    }, {
                        eventId: a
                    });
                    let o = {
                            entry_point: ge.TEAM_DIRECT_SIGNUP,
                            plan_name: `chatgptteamplan`,
                            team_plan_data: {
                                workspace_name: e.workspaceName ?? ``,
                                price_interval: i,
                                seat_quantity: f
                            },
                            billing_details: d,
                            checkout_ui_mode: `custom`,
                            ...i === u.FLEXIBLE && p?.coupon ? {
                                promo_campaign: {
                                    promo_campaign_id: p?.coupon,
                                    is_coupon_from_query_param: !!m
                                }
                            } : {},
                            cancel_url: window.location.href
                        },
                        s = await t(o, {});
                    _ = !0, r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
                        checkpoint: `checkout_session_created`,
                        flow: `standard_business`,
                        checkoutSessionId: ce(s),
                        durationMs: Date.now() - g,
                        seatCount: f,
                        priceInterval: i
                    }), await n(s, {
                        checkoutPayload: o,
                        checkoutOriginProvenance: {
                            checkoutOriginProductExperience: ve.WORK,
                            checkoutOriginDeliverySurface: `web`
                        }
                    })
                } catch (e) {
                    if (r.logStructuredEvent(`ChatgptWebBusinessOnboardingFailure`, {
                            checkpoint: _ ? `checkout_navigation_failed` : `checkout_creation_failed`,
                            flow: `standard_business`,
                            severity: `error`,
                            durationMs: Date.now() - g,
                            seatCount: f,
                            priceInterval: i,
                            errorType: e instanceof Error ? e.name : typeof e
                        }), a.addError(e), o.warning(s.formatMessage(Ee(e) ? Ce : Ae.paymentErrorWarning), {
                            hasCloseButton: !0
                        }), h?.throwOnError) throw e
                }
            }, [l, e.workspaceName, s, n, t, o])
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
            let t = T(),
                n = k(),
                [r, i] = (0, Y.useState)(() => {
                    let t = e ?? Z[0];
                    return Xe({
                        [V]: t
                    }), t
                }),
                o = (0, Y.useCallback)(e => {
                    i(e), Xe({
                        [V]: e
                    }, t)
                }, [t]),
                s = (0, Y.useRef)(null);
            return (0, Y.useEffect)(() => {
                let e = new URLSearchParams(n.search).get(V);
                e !== s.current && e && Z.includes(e) && e !== r && o(e), s.current = e
            }, [n.search, o, r]), {
                step: r,
                nextStep: async e => {
                    let t = r,
                        i = Z.indexOf(r);
                    i >= 0 && i < Z.length - 1 && (t = Z[i + 1], o(t));
                    try {
                        await B({
                            workspace_name: e.workspaceName,
                            company_size: e.companySize,
                            department: e.department,
                            role: e.role,
                            step_name: t,
                            query_params: n.search,
                            user_segment: `v1`
                        })
                    } catch (e) {
                        a.addError(e)
                    }
                },
                previousStep: (0, Y.useCallback)(async e => {
                    let t = r,
                        i = Z.indexOf(r);
                    i > 0 && (t = Z[i - 1], o(t));
                    try {
                        await B({
                            workspace_name: e.workspaceName,
                            company_size: e.companySize,
                            department: e.department,
                            role: e.role,
                            step_name: t,
                            query_params: n.search,
                            user_segment: `v1`
                        })
                    } catch (e) {
                        a.addError(e)
                    }
                }, [n.search, o, r])
            }
        }
    })),
    $e, Q, et, $, tt = e((() => {
        $e = A(), n(), ae(), E(), Q = S(), et = e => {
            "use forget";
            let t = (0, $e.c)(34),
                {
                    onResume: n,
                    onCreate: r,
                    onClose: i
                } = e,
                a = j(),
                o;
            t[0] === a ? o = t[1] : (o = a.formatMessage($.title), t[0] = a, t[1] = o);
            let s = o,
                c;
            t[2] === i ? c = t[3] : (c = e => {
                e || i()
            }, t[2] = i, t[3] = c);
            let l;
            t[4] === a ? l = t[5] : (l = a.formatMessage($.close), t[4] = a, t[5] = l);
            let u;
            t[6] === l ? u = t[7] : (u = (0, Q.jsx)(P.Header, {
                children: (0, Q.jsx)(P.CloseButton, {
                    "aria-label": l
                })
            }), t[6] = l, t[7] = u);
            let d;
            t[8] === s ? d = t[9] : (d = (0, Q.jsx)(`h1`, {
                className: `text-xl font-semibold`,
                children: s
            }), t[8] = s, t[9] = d);
            let f;
            t[10] === a ? f = t[11] : (f = a.formatMessage($.description), t[10] = a, t[11] = f);
            let p;
            t[12] === f ? p = t[13] : (p = (0, Q.jsx)(`p`, {
                className: `text-token-text-secondary text-sm leading-6`,
                children: f
            }), t[12] = f, t[13] = p);
            let h;
            t[14] === a ? h = t[15] : (h = a.formatMessage($.resume), t[14] = a, t[15] = h);
            let g;
            t[16] !== n || t[17] !== h ? (g = (0, Q.jsx)(m, {
                type: `button`,
                color: `primary`,
                onClick: n,
                children: h
            }), t[16] = n, t[17] = h, t[18] = g) : g = t[18];
            let _;
            t[19] === a ? _ = t[20] : (_ = a.formatMessage($.create), t[19] = a, t[20] = _);
            let v;
            t[21] !== r || t[22] !== _ ? (v = (0, Q.jsx)(m, {
                type: `button`,
                color: `secondary`,
                onClick: r,
                children: _
            }), t[21] = r, t[22] = _, t[23] = v) : v = t[23];
            let y;
            t[24] !== v || t[25] !== d || t[26] !== p || t[27] !== g ? (y = (0, Q.jsx)(P.Contents, {
                className: `flex h-full items-center justify-center px-6`,
                children: (0, Q.jsxs)(`div`, {
                    className: `flex w-full max-w-md flex-col gap-5 text-center`,
                    children: [d, p, g, v]
                })
            }), t[24] = v, t[25] = d, t[26] = p, t[27] = g, t[28] = y) : y = t[28];
            let b;
            return t[29] !== y || t[30] !== c || t[31] !== u || t[32] !== s ? (b = (0, Q.jsxs)(P, {
                open: !0,
                renderInPlace: !0,
                accessibleTitle: s,
                onOpenChange: c,
                children: [u, y]
            }), t[29] = y, t[30] = c, t[31] = u, t[32] = s, t[33] = b) : b = t[33], b
        }, $ = w({
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
        x(), nt = A(), Qe(), tt(), Le(), rt = t(O()), it = S(), at = `/create-workspace`, ot = D(function(e) {
            "use forget";
            let t = (0, nt.c)(25),
                {
                    loaderData: n
                } = e,
                r = k(),
                i = T(),
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
//# sourceMappingURL=d9c77c9b-en6hbj87exdwqueq.js.map