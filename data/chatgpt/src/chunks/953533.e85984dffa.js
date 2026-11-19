export const __rspack_esm_ids = [953533];
export const __webpack_modules__ = {
    LrxN: (function(e, s, t) {
        var n, i, a = ((n = {}).CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_UNSPECIFIED = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_UNSPECIFIED", n.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_HANDOFF_SHOWN = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_HANDOFF_SHOWN", n.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_HANDOFF_CLICKED = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_HANDOFF_CLICKED", n.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_HUB_ARRIVED = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_HUB_ARRIVED", n.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_CONNECT_SHOWN = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_CONNECT_SHOWN", n.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_CONNECT_SUBMITTED = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_CONNECT_SUBMITTED", n.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_CONNECT_RESULT = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_CONNECT_RESULT", n.UNRECOGNIZED = "UNRECOGNIZED", n),
            r = ((i = {}).CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_UNSPECIFIED = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_UNSPECIFIED", i.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_SUCCEEDED = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_SUCCEEDED", i.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_FAILED = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_FAILED", i.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_ALREADY_CONNECTED = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_ALREADY_CONNECTED", i.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_DIFFERENT_ACCOUNT = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_DIFFERENT_ACCOUNT", i.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_DISMISSED = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_DISMISSED", i.UNRECOGNIZED = "UNRECOGNIZED", i);
        t.d(s, {}, {
            a: {
                $type: "protobuf_analytics_events.v1.ChatgptBusinessProfileAdsManagerHandoff"
            },
            b: r,
            c: a,
            d: {
                $type: "protobuf_analytics_events.v1.ChatgptBusinessProfileAgentBuilder"
            },
            e: {
                $type: "protobuf_analytics_events.v1.ChatgptBusinessProfileClaimAcquisition"
            },
            f: {
                $type: "protobuf_analytics_events.v1.ChatgptProductCardBusinessAgentInteraction"
            }
        })
    }),
    rCC2: (function(e, s, t) {
        var n = t("zGRL"),
            i = t("LrxN"),
            a = t("yGJW");

        function r(e, s) {
            (0, a.a)(e, i.e, s)
        }
        t.d(s, {}, {
            a: r,
            b: function(e, s) {
                return (0, n.c)(s, s => r(e, s))
            }
        })
    }),
    JV0C: (function(e, s, t) {
        t.d(s, {
            a: () => c
        });
        var n, i, a = t("ABep"),
            r = t("on57"),
            l = t("Sm6l"),
            o = t("RNul");
        let c = (n = e => (0, a.jsx)(l.a, {
            ...e
        }), i = (0, a.jsx)(o.a, {
            as: "span",
            className: "icon-sm"
        }), function(e) {
            let {
                children: s,
                className: t,
                disabled: l,
                loading: o = !1
            } = e;
            return n({
                ...e,
                "aria-busy": o || e["aria-busy"],
                className: (0, r.b)(o && "relative", t),
                disabled: l || o,
                loading: !1,
                children: o ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("span", {
                        className: "inline-flex min-w-0 items-center gap-[inherit] opacity-0",
                        children: s
                    }), (0, a.jsx)("span", {
                        "aria-hidden": !0,
                        className: "pointer-events-none absolute inset-0 flex items-center justify-center",
                        children: i
                    })]
                }) : s
            })
        })
    }),
    T2J5: (function(e, s, t) {
        t.d(s, {
            a: () => m
        });
        var n = t("ABep"),
            i = t("QosV"),
            a = t("slpy"),
            r = t("on57"),
            l = t("oyxz"),
            o = t("HOLv"),
            c = "icon-niuo6X",
            d = t("Q5xB"),
            u = t("EqAp");

        function m(e) {
            let s, t, m, _, p, h = (0, i.c)(13),
                {
                    className: b,
                    label: f,
                    showTooltip: g,
                    size: v
                } = e,
                E = void 0 === v ? 20 : v,
                x = g && "shrink-0 rounded-sm select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none";
            h[0] !== b || h[1] !== x ? (s = (0, r.b)("-mt-0.75 inline-flex align-middle", x, b), h[0] = b, h[1] = x, h[2] = s) : s = h[2];
            let A = g ? 0 : void 0;
            h[3] !== E ? (t = 24 === E ? (0, n.jsx)(o.a, {
                className: c,
                asset: u.a
            }) : (0, n.jsx)(o.a, {
                className: c,
                asset: d.a
            }), h[3] = E, h[4] = t) : t = h[4], h[5] !== f || h[6] !== s || h[7] !== A || h[8] !== t ? (m = (0, n.jsx)("span", {
                className: s,
                "aria-label": f,
                role: "img",
                tabIndex: A,
                children: t
            }), h[5] = f, h[6] = s, h[7] = A, h[8] = t, h[9] = m) : m = h[9];
            let N = m;
            return g ? (h[10] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, n.jsx)(l.a, {
                id: "businessProfiles.claimedBadge.tooltip",
                defaultMessage: "OpenAI verified that this profile is managed by an owner or authorized representative."
            }), h[10] = _) : _ = h[10], h[11] !== N ? (p = (0, n.jsx)(a.a, {
                maxWidth: 215,
                content: _,
                children: N
            }), h[11] = N, h[12] = p) : p = h[12], p) : N
        }
    }),
    WFCQ: (function(e, s, t) {
        t.d(s, {
            a: () => W,
            b: () => G,
            c: () => Z,
            d: () => H
        });
        var n = t("ABep"),
            i = t("QosV"),
            a = t("EA6X"),
            r = t("on57"),
            l = t("Q840"),
            o = t("fDDa"),
            c = t("zd8w"),
            d = t("Wf1j"),
            u = t("oyxz"),
            m = t("Cslg"),
            _ = t("ZtSy"),
            p = t("k9qd"),
            h = t("HOLv"),
            b = t("Bbed"),
            f = t("zSQm"),
            g = t("WAdu"),
            v = t("HwRo"),
            E = t("hZax"),
            x = t("OMIV"),
            A = t("a6Zv"),
            N = t("KDax"),
            y = t("TUMj"),
            C = t("T2J5"),
            S = t("TJEh"),
            T = t("bf6R"),
            w = t("PUeQ"),
            O = t("Bw5z");

        function I(e) {
            let s, t, a, l, o, m = (0, i.c)(19),
                {
                    business: _,
                    claimPreview: p
                } = e,
                b = void 0 !== p && p,
                f = (0, d.a)(),
                g = (0, c.useId)(),
                [v, E] = (0, c.useState)(!1),
                x = !!_.hours?.length,
                A = null != _.is_open || _.is_closed_permanently;
            if (!x && !A) return null;
            m[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, n.jsx)(h.a, {
                asset: O.a,
                className: "shrink-0"
            }), m[0] = s) : s = m[0], m[1] !== _ || m[2] !== A ? (t = (0, n.jsxs)(n.Fragment, {
                children: [s, (0, n.jsx)("span", {
                    className: "min-w-0 flex-1 text-base font-medium",
                    children: A ? (0, n.jsx)(w.a, {
                        business: _,
                        showHourDetail: !0
                    }) : (0, n.jsx)(u.a, {
                        id: "chatgpt.localBusiness.hours.label",
                        defaultMessage: "Hours"
                    })
                })]
            }), m[1] = _, m[2] = A, m[3] = t) : t = m[3];
            let N = t;
            return m[4] !== b || m[5] !== v || m[6] !== x || m[7] !== g || m[8] !== N ? (a = x ? (0, n.jsxs)("button", {
                type: "button",
                "aria-controls": g,
                "aria-expanded": v,
                className: (0, r.b)("flex min-h-11 w-full cursor-interaction items-center gap-4 text-start select-none hover:bg-secondary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset", b ? "py-2.5" : "py-2"),
                onClick: () => E(!v),
                children: [N, (0, n.jsx)(T.bc, {
                    className: (0, r.b)("text-secondary", v && "rotate-180")
                })]
            }) : (0, n.jsx)("div", {
                className: (0, r.b)("flex min-h-11 items-center gap-4", b ? "py-2.5" : "py-2"),
                children: N
            }), m[4] = b, m[5] = v, m[6] = x, m[7] = g, m[8] = N, m[9] = a) : a = m[9], m[10] !== _.hours || m[11] !== v || m[12] !== x || m[13] !== f || m[14] !== g ? (l = x && (0, n.jsx)("dl", {
                id: g,
                hidden: !v,
                className: "ms-10 pb-2 text-sm select-text",
                children: [1, 2, 3, 4, 5, 6, 0].map(e => {
                    let s = _.hours?.filter(s => s.day === e).sort(j);
                    return (0, n.jsxs)("div", {
                        className: "flex gap-4 py-2",
                        children: [(0, n.jsx)("dt", {
                            className: "w-28 shrink-0",
                            children: f.formatDate(new Date(Date.UTC(2026, 0, 4 + e)), {
                                weekday: "long",
                                timeZone: "UTC"
                            })
                        }), (0, n.jsx)("dd", {
                            children: s?.length ? s.map((e, s) => (0, n.jsx)("div", {
                                children: (0, n.jsx)(u.a, {
                                    id: "chatgpt.localBusiness.hours.interval",
                                    defaultMessage: "{start} – {end}",
                                    values: {
                                        start: F(f, e.start),
                                        end: F(f, e.end)
                                    }
                                })
                            }, s)) : (0, n.jsx)(u.a, {
                                id: "chatgpt.localBusiness.hours.closed",
                                defaultMessage: "Closed"
                            })
                        })]
                    }, e)
                })
            }), m[10] = _.hours, m[11] = v, m[12] = x, m[13] = f, m[14] = g, m[15] = l) : l = m[15], m[16] !== a || m[17] !== l ? (o = (0, n.jsxs)("div", {
                children: [a, l]
            }), m[16] = a, m[17] = l, m[18] = o) : o = m[18], o
        }

        function j(e, s) {
            return e.start.localeCompare(s.start)
        }

        function F(e, s) {
            return e.formatTime(new Date(Date.UTC(2026, 0, 4, Number(s.slice(0, 2)), Number(s.slice(2, 4)))), {
                hour: "numeric",
                minute: "2-digit",
                timeZone: "UTC"
            })
        }
        var P = t("ynn3"),
            D = t("B8ZN"),
            R = t("jWVT"),
            B = t("wkA1");
        let k = (0, b.a)(async () => {
                let {
                    parsePhoneNumberFromString: e
                } = await Promise.all([t.e(963703), t.e(87307)]).then(t.bind(t, "cggm"));
                return function(s) {
                    let {
                        phone: t,
                        href: i,
                        readOnly: a,
                        claimPreview: r = !1
                    } = s, l = e(t, "US")?.formatNational();
                    return null == l ? null : (0, n.jsx)(Z, {
                        icon: (0, n.jsx)(h.a, {
                            asset: R.a
                        }),
                        claimPreview: r,
                        children: (0, n.jsx)(N.a, {
                            className: "cursor-interaction hover:underline",
                            href: i,
                            initiator: "markdown_link_click",
                            openTarget: a ? "external-browser" : void 0,
                            children: l
                        })
                    })
                }
            }),
            M = {
                yelp: "Yelp",
                "yelp-feed": "Yelp",
                tripadvisor: "Tripadvisor",
                "tripadvisor-feed": "Tripadvisor",
                "opentable-feed": "OpenTable"
            };

        function H(e) {
            let s, t, l, o, c, u, m, _, p, h, b = (0, i.c)(53),
                {
                    actions: g,
                    business: v,
                    directionsUrl: E,
                    isOptimistic: x,
                    layout: A,
                    onAction: N,
                    renderActions: S,
                    readOnly: T,
                    fullWidth: w,
                    showTitle: O,
                    verified: j,
                    claimAction: F,
                    showClaimedBusinessTooltip: P,
                    dialog: D
                } = e,
                R = void 0 === A ? "sidebar" : A,
                B = void 0 === S || S,
                M = void 0 !== T && T,
                H = void 0 === O || O,
                L = void 0 !== j && j,
                z = void 0 !== P && P,
                Q = (0, y.d)(),
                K = (0, d.a)();
            b[0] !== v.phone ? (s = v.phone?.trim() ? (0, f.a)(`tel:${v.phone.trim()}`) : null, b[0] = v.phone, b[1] = s) : s = b[1];
            let V = s;
            b[2] !== v.address ? (t = v.address?.trim(), b[2] = v.address, b[3] = t) : t = b[3];
            let Y = t,
                Z = "claim-preview" === R,
                q = "sidebar" === R || Z;
            b[4] !== Y || b[5] !== v.name ? (l = [v.name, Y].filter(Boolean), b[4] = Y, b[5] = v.name, b[6] = l) : l = b[6];
            let J = l.join(", "),
                $ = Z ? "pt-4" : "mb-4",
                X = !(void 0 !== w && w) && "max-w-md";
            b[7] !== $ || b[8] !== X ? (o = (0, r.b)("not-prose text-base text-default", $, X), b[7] = $, b[8] = X, b[9] = o) : o = b[9];
            let ee = void 0 !== x && x ? "status" : void 0,
                es = Z ? "ps-5 pe-6 pb-4" : void 0;
            b[10] !== v.name || b[11] !== Z || b[12] !== K || b[13] !== q || b[14] !== M || b[15] !== z || b[16] !== H || b[17] !== Q?.imageEngagementContext?.surfaceLocation || b[18] !== L ? (c = q && H ? (0, n.jsxs)("h2", {
                className: (0, r.b)("text-card-title leading-7 font-medium break-words", !Z && "mb-1"),
                children: [v.name, L && (0, n.jsx)(C.a, {
                    className: "ms-2",
                    showTooltip: !M && q && (z || Q?.imageEngagementContext?.surfaceLocation === a.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR),
                    label: K.formatMessage({
                        id: "chatgpt.localBusiness.claim.verified.label",
                        defaultMessage: "Verified business"
                    })
                })]
            }) : null, b[10] = v.name, b[11] = Z, b[12] = K, b[13] = q, b[14] = M, b[15] = z, b[16] = H, b[17] = Q?.imageEngagementContext?.surfaceLocation, b[18] = L, b[19] = c) : c = b[19];
            let et = !M;
            return b[20] !== v || b[21] !== q || b[22] !== et ? (u = (0, n.jsx)(G, {
                business: v,
                showPrice: q,
                linkRating: et,
                wrap: q
            }), b[20] = v, b[21] = q, b[22] = et, b[23] = u) : u = b[23], b[24] !== es || b[25] !== c || b[26] !== u ? (m = (0, n.jsxs)("div", {
                className: es,
                children: [c, u]
            }), b[24] = es, b[25] = c, b[26] = u, b[27] = m) : m = b[27], b[28] !== v || b[29] !== Z || b[30] !== E || b[31] !== R || b[32] !== N || b[33] !== M || b[34] !== B ? (_ = B && "one-line" !== R ? (0, n.jsx)("div", {
                className: Z ? "ps-5 pe-4 pb-5" : "mt-3",
                children: (0, n.jsx)(W, {
                    allowQuoteAction: !M,
                    business: v,
                    directionsUrl: E,
                    onAction: N,
                    openTarget: M ? "external-browser" : void 0
                })
            }) : null, b[28] = v, b[29] = Z, b[30] = E, b[31] = R, b[32] = N, b[33] = M, b[34] = B, b[35] = _) : _ = b[35], b[36] !== v || b[37] !== F || b[38] !== Z || b[39] !== E || b[40] !== q || b[41] !== M || b[42] !== V ? (p = q ? (0, n.jsxs)("div", {
                className: (0, r.b)("divide-y divide-border", Z ? "px-5 pb-5" : "mt-3 border-t border-default"),
                children: [(0, n.jsx)(I, {
                    business: v,
                    claimPreview: Z
                }), (0, n.jsx)(U, {
                    business: v,
                    directionsUrl: E,
                    readOnly: M,
                    claimPreview: Z
                }), null != V && null != v.phone ? (0, n.jsx)(k, {
                    phone: v.phone,
                    href: V,
                    readOnly: M,
                    claimPreview: Z
                }) : null, F]
            }) : null, b[36] = v, b[37] = F, b[38] = Z, b[39] = E, b[40] = q, b[41] = M, b[42] = V, b[43] = p) : p = b[43], b[44] !== g || b[45] !== D || b[46] !== J || b[47] !== o || b[48] !== ee || b[49] !== m || b[50] !== _ || b[51] !== p ? (h = (0, n.jsxs)("section", {
                "aria-label": J,
                className: o,
                role: ee,
                children: [m, g, _, p, D]
            }), b[44] = g, b[45] = D, b[46] = J, b[47] = o, b[48] = ee, b[49] = m, b[50] = _, b[51] = p, b[52] = h) : h = b[52], h
        }

        function U(e) {
            let s, t, a, r, l, o = (0, i.c)(14),
                {
                    business: c,
                    directionsUrl: d,
                    readOnly: u,
                    claimPreview: m
                } = e,
                _ = void 0 !== u && u,
                p = void 0 !== m && m;
            o[0] !== c.address ? (s = c.address?.trim(), o[0] = c.address, o[1] = s) : s = o[1];
            let b = s;
            if (!b) return null;
            o[2] !== c || o[3] !== d ? (t = (0, f.a)(d ?? (0, S.e)(c) ?? "") || null, o[2] = c, o[3] = d, o[4] = t) : t = o[4];
            let g = t,
                v = !_ || p;
            return o[5] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, n.jsx)(h.a, {
                asset: D.a
            }), o[5] = a) : a = o[5], o[6] !== b || o[7] !== _ || o[8] !== g ? (r = null == g ? b : (0, n.jsx)(N.a, {
                className: "cursor-interaction hover:underline",
                href: g,
                initiator: "markdown_link_click",
                openTarget: _ ? "external-browser" : void 0,
                children: b
            }), o[6] = b, o[7] = _, o[8] = g, o[9] = r) : r = o[9], o[10] !== p || o[11] !== v || o[12] !== r ? (l = (0, n.jsx)(Z, {
                truncate: v,
                icon: a,
                claimPreview: p,
                children: r
            }), o[10] = p, o[11] = v, o[12] = r, o[13] = l) : l = o[13], l
        }

        function G(e) {
            let s, t, a, l, o, c, d, u, m = (0, i.c)(23),
                {
                    business: _,
                    showPrice: p,
                    linkRating: h,
                    shouldBlockExternalEgress: b,
                    wrap: f
                } = e,
                g = void 0 !== p && p,
                v = void 0 === h || h,
                E = void 0 !== b && b,
                x = void 0 !== f && f;
            m[0] !== _.categories ? (s = _.categories?.find(Q), m[0] = _.categories, m[1] = s) : s = m[1];
            let A = s;
            m[2] !== _ || m[3] !== v || m[4] !== E ? (t = null == _.rating && null == M[_.provider ?? ""] ? null : (0, n.jsx)(Y, {
                business: _,
                linkRating: v,
                shouldBlockExternalEgress: E
            }, "rating"), m[2] = _, m[3] = v, m[4] = E, m[5] = t) : t = m[5], m[6] !== A ? (a = A ? (0, n.jsx)("span", {
                className: "min-w-0 truncate",
                children: A
            }, "category") : null, m[6] = A, m[7] = a) : a = m[7], m[8] !== _.price_str || m[9] !== g ? (l = g && _.price_str ? (0, n.jsx)("span", {
                children: _.price_str
            }, "price") : null, m[8] = _.price_str, m[9] = g, m[10] = l) : l = m[10], m[11] !== t || m[12] !== a || m[13] !== l ? (o = [t, a, l].filter(z), m[11] = t, m[12] = a, m[13] = l, m[14] = o) : o = m[14];
            let N = o,
                y = x ? "text-base" : "text-sm",
                C = x ? "flex-wrap" : "flex-nowrap";
            return m[15] !== y || m[16] !== C ? (c = (0, r.b)("flex min-w-0 items-center leading-5 font-normal text-default", y, C), m[15] = y, m[16] = C, m[17] = c) : c = m[17], m[18] !== N ? (d = N.map(L), m[18] = N, m[19] = d) : d = m[19], m[20] !== c || m[21] !== d ? (u = (0, n.jsx)("span", {
                className: c,
                children: d
            }), m[20] = c, m[21] = d, m[22] = u) : u = m[22], u
        }

        function L(e, s) {
            return (0, n.jsxs)(c.Fragment, {
                children: [0 === s ? null : (0, n.jsx)("span", {
                    className: "mx-1 shrink-0",
                    "aria-hidden": !0,
                    children: "•"
                }), e]
            }, e.key)
        }

        function z(e) {
            return null != e
        }

        function Q(e) {
            return e.trim().length > 0 && "Point" !== e
        }

        function W(e) {
            let s, t, o, d, _, p, h, b, A, C, T, w, O, I, j, F, D, R, B, k, M, H = (0, i.c)(68),
                {
                    allowQuoteAction: U,
                    analyticsMessageId: G,
                    business: L,
                    directionsUrl: z,
                    onAction: Q,
                    onQuoteInteractionOpenChange: W,
                    openTarget: Y,
                    presentation: Z,
                    primaryActionsOnly: q,
                    reservationAction: J
                } = e,
                $ = void 0 === U || U,
                X = void 0 === Z ? "sidebar" : Z,
                ee = void 0 !== q && q,
                es = (0, l.z)(m.f),
                et = (0, y.d)(),
                en = (0, c.useContext)(g.a);
            H[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, v.b)(), H[0] = s) : s = H[0];
            let ei = (0, E.f)(s),
                ea = (0, l.x)(x.e, "2673474834");
            H[1] !== L || H[2] !== X || H[3] !== ea ? (t = (0, f.a)(ea && "sidebar" === X ? (0, S.g)(L) ?? "" : "") || null, H[1] = L, H[2] = X, H[3] = ea, H[4] = t) : t = H[4];
            let er = t;
            H[5] !== L || H[6] !== z ? (o = (0, f.a)(z ?? (0, S.e)(L) ?? "") || null, H[5] = L, H[6] = z, H[7] = o) : o = H[7];
            let el = o;
            H[8] !== L.website_url ? (d = (0, f.a)(L.website_url?.trim() ?? "") || null, H[8] = L.website_url, H[9] = d) : d = H[9];
            let eo = d;
            H[10] !== L.phone ? (_ = L.phone?.trim() ? (0, f.a)(`tel:${L.phone.trim()}`) : null, H[10] = L.phone, H[11] = _) : _ = H[11];
            let ec = _;
            H[12] !== L.service_providers ? (p = (0, S.h)(L.service_providers), H[12] = L.service_providers, H[13] = p) : p = H[13];
            let ed = p;
            H[14] !== es || H[15] !== $ || H[16] !== L.reservation_providers || H[17] !== ei || H[18] !== en || H[19] !== ed || H[20] !== er || H[21] !== et ? (h = $ && null != es && et?.shouldBlockExternalEgress === !1 && (et.canRequestQuote ?? !et.isReadOnly) && "restricted" !== en && ei && null == er && !L.reservation_providers?.some(V) && ed.length > 0, H[14] = es, H[15] = $, H[16] = L.reservation_providers, H[17] = ei, H[18] = en, H[19] = ed, H[20] = er, H[21] = et, H[22] = h) : h = H[22];
            let eu = h;
            H[23] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, n.jsx)(u.a, {
                id: "chatgpt.localBusiness.reserve",
                defaultMessage: "Reserve"
            }), H[23] = b) : b = H[23], H[24] !== er ? (A = {
                key: a.d.CHATGPT_ENTITY_AFFORDANCE_RESERVE,
                href: er,
                label: b
            }, H[24] = er, H[25] = A) : A = H[25], H[26] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, n.jsx)(u.a, {
                id: "chatgpt.localBusiness.directions",
                defaultMessage: "Directions"
            }), H[26] = C) : C = H[26], H[27] !== el ? (T = {
                key: a.d.CHATGPT_ENTITY_AFFORDANCE_DIRECTIONS,
                href: el,
                label: C
            }, H[27] = el, H[28] = T) : T = H[28], H[29] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, n.jsx)(u.a, {
                id: "chatgpt.localBusiness.website",
                defaultMessage: "Website"
            }), H[29] = w) : w = H[29], H[30] !== eo ? (O = {
                key: a.d.CHATGPT_ENTITY_AFFORDANCE_WEBSITE,
                href: eo,
                label: w
            }, H[30] = eo, H[31] = O) : O = H[31], H[32] === Symbol.for("react.memo_cache_sentinel") ? (I = (0, n.jsx)(u.a, {
                id: "chatgpt.localBusiness.call",
                defaultMessage: "Call"
            }), H[32] = I) : I = H[32], H[33] !== ec ? (j = {
                key: a.d.CHATGPT_ENTITY_AFFORDANCE_CALL,
                href: ec,
                label: I
            }, H[33] = ec, H[34] = j) : j = H[34], H[35] !== A || H[36] !== T || H[37] !== O || H[38] !== j ? (F = [A, T, O, j].filter(K), H[35] = A, H[36] = T, H[37] = O, H[38] = j, H[39] = F) : F = H[39], H[40] !== eu || H[41] !== ee || H[42] !== J || H[43] !== F ? (D = F.slice(0, ee ? 0 : 3 - Number(eu) - Number(null != J)), H[40] = eu, H[41] = ee, H[42] = J, H[43] = F, H[44] = D) : D = H[44];
            let em = D;
            if (!eu && 0 === em.length && null == J) return null;
            H[45] !== X ? (R = e => (0, r.b)("no-drag relative flex cursor-interaction items-center justify-center rounded-full border after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] hover:after:bg-media-background/5 text-sm leading-4 font-medium whitespace-nowrap select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring", "sidebar" === X ? "h-9 px-5" : "h-7.5 flex-auto px-4", 0 === e ? "border-transparent bg-primary-solid text-primary-solid" : "border-default bg-transparent text-default"), H[45] = X, H[46] = R) : R = H[46];
            let e_ = R;
            return H[47] !== e_ || H[48] !== G || H[49] !== L.id || H[50] !== eu || H[51] !== Q || H[52] !== W || H[53] !== X || H[54] !== ed || H[55] !== et ? (B = eu && (0, n.jsx)(P.a, {
                analyticsMessageId: G,
                businessId: "string" == typeof L.id ? L.id : void 0,
                ctaSurface: "hover" === X ? "map_card" : "business_sidebar",
                onAction: () => Q?.(a.d.CHATGPT_ENTITY_AFFORDANCE_REQUEST_QUOTE),
                onInteractionOpenChange: W,
                providers: ed,
                trigger: (0, n.jsx)("button", {
                    className: e_(0),
                    type: "button",
                    children: (0, n.jsx)(P.b, {})
                }),
                turnContext: et
            }), H[47] = e_, H[48] = G, H[49] = L.id, H[50] = eu, H[51] = Q, H[52] = W, H[53] = X, H[54] = ed, H[55] = et, H[56] = B) : B = H[56], H[57] !== e_ || H[58] !== em || H[59] !== eu || H[60] !== Q || H[61] !== Y || H[62] !== J ? (k = em.map((e, s) => (0, n.jsx)(N.a, {
                appearance: "button",
                className: e_(s + Number(eu) + Number(null != J)),
                href: e.href,
                initiator: "markdown_link_click",
                openTarget: Y,
                onClick: () => Q?.(e.key),
                children: e.label
            }, e.key)), H[57] = e_, H[58] = em, H[59] = eu, H[60] = Q, H[61] = Y, H[62] = J, H[63] = k) : k = H[63], H[64] !== J || H[65] !== B || H[66] !== k ? (M = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-wrap gap-2",
                children: [B, J, k]
            }), H[64] = J, H[65] = B, H[66] = k, H[67] = M) : M = H[67], M
        }

        function K(e) {
            return null != e.href
        }

        function V(e) {
            return null != e.launcherPayload
        }

        function Y(e) {
            let s, t, a, l, u, m = (0, i.c)(17),
                {
                    business: b,
                    linkRating: v,
                    shouldBlockExternalEgress: x
                } = e,
                C = (0, d.a)(),
                S = (0, A.a)(),
                T = (0, y.d)(),
                w = (0, c.useContext)(g.a),
                O = !x && T?.shouldBlockExternalEgress !== !0 && "restricted" !== w,
                I = b.provider_logo_url_short?.trim() || b.provider_logo_url?.trim(),
                j = S && (b.provider_logo_dark_url_short?.trim() || b.provider_logo_dark_url?.trim()) || I,
                F = O && j ? (0, f.b)(j) : null;
            m[0] !== O || m[1] !== b.provider_url || m[2] !== v ? (s = (0, p.a)(b.provider_url?.trim() ?? ""), t = v && O && (0, o.d)(s), m[0] = O, m[1] = b.provider_url, m[2] = v, m[3] = s, m[4] = t) : (s = m[3], t = m[4]);
            let P = t,
                D = (0, E.f)(P && "1492523517"),
                R = D ? _.a : N.a,
                k = M[b.provider ?? ""] ?? b.provider ?? "";
            m[5] !== b.rating || m[6] !== C ? (a = null != b.rating ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(h.a, {
                    asset: B.a,
                    className: "size-3.5 shrink-0"
                }), (0, n.jsx)("span", {
                    children: C.formatNumber(b.rating, {
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 1
                    })
                })]
            }) : null, m[5] = b.rating, m[6] = C, m[7] = a) : a = m[7];
            let H = F ? (0, n.jsx)("img", {
                alt: k,
                className: (0, r.b)("w-auto max-w-18 shrink-0 object-contain", F.toLowerCase().includes("tripadvisor_ollie") ? "h-3" : "h-3.5"),
                src: F
            }) : M[b.provider ?? ""] ?? null;
            m[8] !== a || m[9] !== H ? (l = (0, n.jsxs)(n.Fragment, {
                children: [a, H]
            }), m[8] = a, m[9] = H, m[10] = l) : l = m[10];
            let U = l;
            return m[11] !== R || m[12] !== P || m[13] !== U || m[14] !== D || m[15] !== s ? (u = P ? (0, n.jsx)(R, {
                className: "inline-flex shrink-0 cursor-interaction items-center gap-1 hover:text-secondary",
                href: s,
                initiator: "markdown_link_click",
                openTarget: D ? "in-app-browser" : void 0,
                children: U
            }) : (0, n.jsx)("span", {
                className: "inline-flex shrink-0 items-center gap-1",
                children: U
            }), m[11] = R, m[12] = P, m[13] = U, m[14] = D, m[15] = s, m[16] = u) : u = m[16], u
        }

        function Z(e) {
            let s, t, a, l, o, c = (0, i.c)(13),
                {
                    icon: d,
                    children: u,
                    truncate: m,
                    claimPreview: _
                } = e,
                p = void 0 !== _ && _ ? "py-2.5" : "py-2";
            c[0] !== p ? (s = (0, r.b)("flex min-h-11 items-center gap-4", p), c[0] = p, c[1] = s) : s = c[1], c[2] !== d ? (t = (0, n.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                children: d
            }), c[2] = d, c[3] = t) : t = c[3];
            let h = void 0 !== m && m && "truncate";
            return c[4] !== h ? (a = (0, r.b)("min-w-0 flex-1 text-base font-medium select-text", h), c[4] = h, c[5] = a) : a = c[5], c[6] !== u || c[7] !== a ? (l = (0, n.jsx)("span", {
                className: a,
                children: u
            }), c[6] = u, c[7] = a, c[8] = l) : l = c[8], c[9] !== s || c[10] !== t || c[11] !== l ? (o = (0, n.jsxs)("div", {
                className: s,
                children: [t, l]
            }), c[9] = s, c[10] = t, c[11] = l, c[12] = o) : o = c[12], o
        }
    }),
    Iqbg: (function(e, s, t) {
        var n = t("ABep"),
            i = t("QosV"),
            a = t("WQMB"),
            r = t("zGRL"),
            l = t("on57"),
            o = t("Q840"),
            c = t("zd8w"),
            d = t("Wf1j"),
            u = t("oyxz"),
            m = t("rEML"),
            _ = t("lAQI"),
            p = t("rCC2"),
            h = t("HOLv"),
            b = t("bf6R"),
            f = t("Bbed"),
            g = t("yC2B"),
            v = t("WAdu"),
            E = t("OWtl"),
            x = t("OMIV"),
            A = t("TUMj"),
            N = t("TJEh"),
            y = t("WFCQ"),
            C = t("FRPb"),
            S = t("Dh6n"),
            T = t("pJY9");
        let w = (0, f.a)(a.a),
            O = (0, f.a)(a.b, {
                suspendToParent: !0,
                errorFallback: e => {
                    let {
                        renderMetadata: s
                    } = e;
                    return s(!1, null)
                }
            }),
            I = (0, c.createContext)(null);

        function j(e) {
            let s, t, a, r = (0, i.c)(11),
                {
                    business: l,
                    children: d,
                    conversationId: u,
                    renderSidebar: m,
                    shouldBlockExternalEgress: _
                } = e,
                p = (0, o.x)(C.b, u),
                h = l ?? p?.business,
                b = (0, c.useContext)(v.a),
                f = (0, o.x)(x.e, "2778625748") && null != h;
            r[0] !== h || r[1] !== f || r[2] !== d || r[3] !== u ? (s = f ? (0, n.jsx)(c.Suspense, {
                fallback: d,
                children: (0, n.jsx)(O, {
                    business: h,
                    renderMetadata: (e, s) => (0, n.jsx)(I, {
                        value: {
                            business: h,
                            verified: e,
                            claimAction: s
                        },
                        children: d
                    }),
                    renderClaimButton: (e, s, t) => (0, n.jsx)(k, {
                        measure: null != t,
                        conversationId: u,
                        onClick: t ?? e,
                        request: s
                    }),
                    businessPreview: e => (0, n.jsx)(B, {
                        business: h,
                        layout: "claim-preview",
                        verified: e,
                        readOnly: !0
                    })
                })
            }) : d, r[0] = h, r[1] = f, r[2] = d, r[3] = u, r[4] = s) : s = r[4];
            let g = s,
                E = f && void 0 !== _ && _ ? "restricted" : b;
            return r[5] !== g || r[6] !== m ? (t = m(g), r[5] = g, r[6] = m, r[7] = t) : t = r[7], r[8] !== E || r[9] !== t ? (a = (0, n.jsx)(v.a, {
                value: E,
                children: t
            }), r[8] = E, r[9] = t, r[10] = a) : a = r[10], a
        }
        let F = _.F({
            layout: _.p(["one-line", "two-lines"]).nullable().optional(),
            metadata: _.F({
                map_url: _.L().nullable().optional()
            }).nullable().optional()
        }).loose();

        function P(e) {
            let s, t, a, r = (0, i.c)(12),
                {
                    reference: l,
                    actions: o,
                    claimActions: c
                } = e;
            r[0] !== l ? (s = (0, N.c)(l), r[0] = l, r[1] = s) : s = r[1];
            let d = s;
            r[2] !== l ? (t = F.safeParse(l), r[2] = l, r[3] = t) : t = r[3];
            let u = t;
            if (null == d) {
                let e;
                return r[4] !== o ? (e = null == o ? null : (0, n.jsx)(n.Fragment, {
                    children: o
                }), r[4] = o, r[5] = e) : e = r[5], e
            }
            let m = u.success ? u.data.metadata?.map_url : null,
                _ = (u.success ? u.data.layout : null) ?? "sidebar";
            return r[6] !== o || r[7] !== d || r[8] !== c || r[9] !== m || r[10] !== _ ? (a = (0, n.jsx)(D, {
                actions: o,
                business: d,
                directionsUrl: m,
                layout: _,
                renderActions: !1,
                claimActions: c
            }), r[6] = o, r[7] = d, r[8] = c, r[9] = m, r[10] = _, r[11] = a) : a = r[11], a
        }

        function D(e) {
            let s, t = (0, i.c)(20),
                a = (0, c.useContext)(I);
            if ((0, o.x)(x.e, "2778625748") && !e.readOnly && !e.claimActions && (null == e.layout || "sidebar" === e.layout)) {
                let s, i, r, l, o;
                if (null != a && (null != a.business.entity_lookup_id && null != e.business.entity_lookup_id ? a.business.entity_lookup_id === e.business.entity_lookup_id : "string" == typeof a.business.id && a.business.id === e.business.id || a.business.name.trim().toLowerCase() === e.business.name.trim().toLowerCase())) {
                    let s;
                    return t[0] !== e || t[1] !== a.claimAction || t[2] !== a.verified ? (s = (0, n.jsx)(B, {
                        ...e,
                        verified: a.verified,
                        claimAction: a.claimAction
                    }), t[0] = e, t[1] = a.claimAction, t[2] = a.verified, t[3] = s) : s = t[3], s
                }
                return t[4] !== e ? (s = (0, n.jsx)(B, {
                    ...e
                }), t[4] = e, t[5] = s) : s = t[5], t[6] !== e ? (i = (s, t) => (0, n.jsx)(B, {
                    ...e,
                    verified: s,
                    claimAction: t
                }), t[6] = e, t[7] = i) : i = t[7], t[8] !== e.business || t[9] !== e.onAction ? (r = s => (0, n.jsx)(B, {
                    business: e.business,
                    onAction: e.onAction,
                    layout: "claim-preview",
                    verified: s,
                    readOnly: !0
                }), t[8] = e.business, t[9] = e.onAction, t[10] = r) : r = t[10], t[11] !== e.business || t[12] !== i || t[13] !== r ? (l = (0, n.jsx)(O, {
                    business: e.business,
                    renderMetadata: i,
                    renderClaimButton: R,
                    businessPreview: r
                }), t[11] = e.business, t[12] = i, t[13] = r, t[14] = l) : l = t[14], t[15] !== s || t[16] !== l ? (o = (0, n.jsx)(c.Suspense, {
                    fallback: s,
                    children: l
                }), t[15] = s, t[16] = l, t[17] = o) : o = t[17], o
            }
            return t[18] !== e ? (s = (0, n.jsx)(B, {
                ...e
            }), t[18] = e, t[19] = s) : s = t[19], s
        }

        function R(e, s, t) {
            return (0, n.jsx)(k, {
                measure: null != t,
                onClick: t ?? e,
                request: s
            })
        }

        function B(e) {
            let s, t, a, r, l, o, d = (0, i.c)(23);
            d[0] !== e ? ({
                claimActions: s,
                ...t
            } = e, d[0] = e, d[1] = s, d[2] = t) : (s = d[1], t = d[2]);
            let [u, m] = (0, c.useState)(!1), [_, p] = (0, c.useState)(!1), h = (0, A.d)(), b = (0, c.useContext)(v.a), {
                business: f,
                onAction: g
            } = t, E = t.verified || _;
            return d[3] !== s || d[4] !== _ || d[5] !== t.isOptimistic || d[6] !== t.readOnly ? (a = t.isOptimistic || t.readOnly || _ || null == s ? null : (0, n.jsx)(k, {
                onClick: () => m(!0)
            }), d[3] = s, d[4] = _, d[5] = t.isOptimistic, d[6] = t.readOnly, d[7] = a) : a = d[7], d[8] !== t.claimAction || d[9] !== a ? (r = (0, n.jsxs)(n.Fragment, {
                children: [t.claimAction, a]
            }), d[8] = t.claimAction, d[9] = a, d[10] = r) : r = d[10], d[11] !== f || d[12] !== s || d[13] !== u || d[14] !== b || d[15] !== g || d[16] !== h ? (l = u && null != s && (0, n.jsx)(w, {
                business: {
                    ...f,
                    photoUrl: "restricted" === b || h?.shouldBlockExternalEgress ? void 0 : (0, N.f)(f, h?.conversationType === "sidebar" ? h.contentReferences : void 0) ?? void 0
                },
                businessPreview: e => (0, n.jsx)(D, {
                    business: f,
                    onAction: g,
                    layout: "claim-preview",
                    verified: e,
                    readOnly: !0
                }),
                actions: {
                    ...s,
                    onCheckDomain: s.onCheckDomain ? async () => {
                        let e = await s.onCheckDomain?.() ?? {
                            step: "review"
                        };
                        return "success" === e.step && p(!0), e
                    } : void 0,
                    onCheckClaim: s.onCheckClaim ? async () => {
                        let e = await s.onCheckClaim?.() ?? {
                            step: "review"
                        };
                        return "success" === e.step && p(!0), e
                    } : void 0,
                    onManageProfile: s.onManageProfile ? e => {
                        m(!1), s.onManageProfile?.(e)
                    } : void 0
                },
                onClose: () => m(!1)
            }), d[11] = f, d[12] = s, d[13] = u, d[14] = b, d[15] = g, d[16] = h, d[17] = l) : l = d[17], d[18] !== t || d[19] !== E || d[20] !== r || d[21] !== l ? (o = (0, n.jsx)(y.d, {
                ...t,
                verified: E,
                claimAction: r,
                dialog: l
            }), d[18] = t, d[19] = E, d[20] = r, d[21] = l, d[22] = o) : o = d[22], o
        }

        function k(e) {
            let s, t, a, _, f, v, x, N, C = (0, i.c)(37),
                {
                    measure: w,
                    conversationId: O,
                    onClick: I,
                    request: j
                } = e,
                F = (0, o.y)(E.a),
                P = (0, A.d)(),
                D = (0, c.useContext)(m.i),
                R = (0, d.a)();
            C[0] !== R.locale ? (s = (0, g.a)(R.locale), C[0] = R.locale, C[1] = s) : s = C[1];
            let B = s;
            if (j?.status === "under_review") {
                let e, s, t, i;
                return C[2] !== I ? (e = () => I?.(), C[2] = I, C[3] = e) : e = C[3], C[4] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, n.jsx)(h.a, {
                    className: "text-tertiary",
                    asset: T.a
                }), C[4] = s) : s = C[4], C[5] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(y.c, {
                    icon: s,
                    children: (0, n.jsx)("span", {
                        className: "text-secondary",
                        children: (0, n.jsx)(u.a, {
                            id: "chatgpt.localBusiness.claim.status.under_review",
                            defaultMessage: "Your claim is under review"
                        })
                    })
                }), C[5] = t) : t = C[5], C[6] !== B || C[7] !== e ? (i = (0, n.jsx)("button", {
                    dir: B,
                    type: "button",
                    onClick: e,
                    className: "w-full cursor-interaction text-start focus-visible:outline-ring",
                    children: t
                }), C[6] = B, C[7] = e, C[8] = i) : i = C[8], i
            }
            let k = j && "in_progress" !== j.status ? "text-default" : "text-business-claim";
            C[9] !== k ? (t = (0, l.b)("flex min-h-12 w-full cursor-interaction items-center gap-4 py-3 text-start text-base font-medium select-none hover:underline focus-visible:outline-ring", k), C[9] = k, C[10] = t) : t = C[10], C[11] !== O || C[12] !== w || C[13] !== j || C[14] !== D || C[15] !== F || C[16] !== P?.conversationId ? (a = w && !j ? (0, p.b)(F, (0, r.j)(O ?? P?.conversationId, D?.location.pathname)) : void 0, C[11] = O, C[12] = w, C[13] = j, C[14] = D, C[15] = F, C[16] = P?.conversationId, C[17] = a) : a = C[17], C[18] !== w || C[19] !== I || C[20] !== j ? (_ = e => I?.(w && !j ? (0, r.d)(e.currentTarget) : void 0), C[18] = w, C[19] = I, C[20] = j, C[21] = _) : _ = C[21];
            let M = j?.status === "needs_information",
                H = null != j && "needs_information" !== j.status;
            C[22] !== M || C[23] !== H ? (f = (0, l.b)({
                "text-warning": M,
                "text-tertiary": H
            }), C[22] = M, C[23] = H, C[24] = f) : f = C[24];
            let U = j?.status === "needs_information" ? S.a : T.a;
            return C[25] !== U || C[26] !== f ? (v = (0, n.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                children: (0, n.jsx)(h.a, {
                    className: f,
                    asset: U
                })
            }), C[25] = U, C[26] = f, C[27] = v) : v = C[27], C[28] !== j ? (x = j ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsxs)("span", {
                    className: "min-w-0 flex-1",
                    children: [(0, n.jsx)("span", {
                        className: "block",
                        children: (0, n.jsx)(u.a, {
                            id: "chatgpt.localBusiness.claim.status.title",
                            defaultMessage: "{status, select, in_progress {Finish verifying your business} needs_information {Your claim needs more information} under_review {Claim under review} other {Claim started}}",
                            values: {
                                status: j.status
                            }
                        })
                    }), (0, n.jsx)("span", {
                        className: "block text-sm font-normal text-secondary",
                        children: (0, n.jsx)(u.a, {
                            id: "chatgpt.localBusiness.claim.status.subtitle",
                            defaultMessage: "{status, select, in_progress {Continue your business verification} needs_information {Review what’s needed to continue} under_review {Your claim is being reviewed} other {View your claim and next steps}}",
                            values: {
                                status: j.status
                            }
                        })
                    })]
                }), (0, n.jsx)(b.hc, {
                    className: "rtl:rotate-180"
                })]
            }) : (0, n.jsx)(u.a, {
                id: "chatgpt.localBusiness.claim.button.label",
                defaultMessage: "Claim this business"
            }), C[28] = j, C[29] = x) : x = C[29], C[30] !== B || C[31] !== v || C[32] !== x || C[33] !== t || C[34] !== a || C[35] !== _ ? (N = (0, n.jsxs)("button", {
                className: t,
                dir: B,
                type: "button",
                ref: a,
                onClick: _,
                children: [v, x]
            }), C[30] = B, C[31] = v, C[32] = x, C[33] = t, C[34] = a, C[35] = _, C[36] = N) : N = C[36], N
        }
        t.d(s, {
            ChatGptLocalBusinessMetadata: () => D,
            a: () => k,
            b: () => y.a,
            c: () => j,
            d: () => P,
            e: () => y.b,
            f: () => y.c
        })
    }),
    PUeQ: (function(e, s, t) {
        var n = t("ABep"),
            i = t("QosV"),
            a = t("Wf1j"),
            r = t("oyxz");
        t.d(s, {}, {
            a: function(e) {
                let s, t, l, o, c = (0, i.c)(24),
                    {
                        business: d,
                        showHourDetail: u
                    } = e,
                    m = (0, a.a)();
                if (d.is_closed_permanently) {
                    let e;
                    return c[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("span", {
                        className: "text-danger",
                        children: (0, n.jsx)(r.a, {
                            id: "chatgpt.localBusiness.closedPermanently",
                            defaultMessage: "Permanently closed"
                        })
                    }), c[0] = e) : e = c[0], e
                }
                let _ = d.is_open;
                if (null == _) return null;
                let p = d.next_open_hour;
                if (!u || null == p) {
                    let e;
                    return c[1] !== _ ? (e = _ ? (0, n.jsx)("span", {
                        className: "text-success",
                        children: (0, n.jsx)(r.a, {
                            id: "chatgpt.localBusiness.open",
                            defaultMessage: "Open"
                        })
                    }) : (0, n.jsx)("span", {
                        className: "text-danger",
                        children: (0, n.jsx)(r.a, {
                            id: "chatgpt.localBusiness.closed",
                            defaultMessage: "Closed"
                        })
                    }), c[1] = _, c[2] = e) : e = c[2], e
                }
                let h = d.local_day ?? new Date().getDay(),
                    b = null != d.local_day && _ && p.end <= p.start ? (p.day + 1) % 7 : p.day,
                    f = _ ? p.end : p.start;
                if (c[3] !== m || c[4] !== f) {
                    let e, t;
                    c[6] !== f ? (e = Number.parseInt(f.slice(0, 2), 10), c[6] = f, c[7] = e) : e = c[7], c[8] !== f ? (t = Number.parseInt(f.slice(2, 4), 10), c[8] = f, c[9] = t) : t = c[9], s = m.formatTime(new Date(0, 0, 0, e, t), {
                        hour: "numeric",
                        minute: "2-digit"
                    }), c[3] = m, c[4] = f, c[5] = s
                } else s = c[5];
                let g = s;
                c[10] !== _ ? (t = e => (0, n.jsx)("span", {
                    className: _ ? "text-success" : "text-danger",
                    children: e
                }), c[10] = _, c[11] = t) : t = c[11];
                let v = t;
                if (b === h) {
                    let e;
                    return c[12] !== _ || c[13] !== v || c[14] !== g ? (e = _ ? (0, n.jsx)("span", {
                        children: (0, n.jsx)(r.a, {
                            id: "chatgpt.localBusiness.openUntilTime",
                            defaultMessage: "<status>Open</status> until {time}",
                            values: {
                                status: v,
                                time: g
                            }
                        })
                    }) : (0, n.jsx)("span", {
                        children: (0, n.jsx)(r.a, {
                            id: "chatgpt.localBusiness.closedUntilTime",
                            defaultMessage: "<status>Closed</status> until {time}",
                            values: {
                                status: v,
                                time: g
                            }
                        })
                    }), c[12] = _, c[13] = v, c[14] = g, c[15] = e) : e = c[15], e
                }
                c[16] !== m || c[17] !== b ? (l = m.formatDate(new Date(0, 0, b), {
                    weekday: "short"
                }), c[16] = m, c[17] = b, c[18] = l) : l = c[18];
                let E = l;
                return c[19] !== E || c[20] !== _ || c[21] !== v || c[22] !== g ? (o = _ ? (0, n.jsx)("span", {
                    children: (0, n.jsx)(r.a, {
                        id: "chatgpt.localBusiness.openUntilDayTime",
                        defaultMessage: "<status>Open</status> until {day} {time}",
                        values: {
                            status: v,
                            day: E,
                            time: g
                        }
                    })
                }) : (0, n.jsx)("span", {
                    children: (0, n.jsx)(r.a, {
                        id: "chatgpt.localBusiness.closedUntilDayTime",
                        defaultMessage: "<status>Closed</status> until {day} {time}",
                        values: {
                            status: v,
                            day: E,
                            time: g
                        }
                    })
                }), c[19] = E, c[20] = _, c[21] = v, c[22] = g, c[23] = o) : o = c[23], o
            }
        })
    }),
    FRPb: (function(e, s, t) {
        var n = t("alRw"),
            i = t.n(n),
            a = t("Q840"),
            r = t("rKAs"),
            l = t("OWtl"),
            o = t("G6Ip"),
            c = t("tZ3A"),
            d = t("dQRk"),
            u = t("WOVT"),
            m = t("TJEh");
        let _ = (0, a.v)(l.a, e => null),
            p = (0, a.d)(l.a, (e, s) => {
                let {
                    get: t
                } = s, n = t(_, e);
                if (null == n) return null;
                let i = t(d.N, e);
                return null != i && Object.values(i).some(e => null != e.message && (0, o.c)(e.message).some(e => {
                    let s = (0, m.c)(e);
                    if (null == s) return !1;
                    let t = ("string" == typeof e.name ? e.name : s.name).trim().toLowerCase();
                    return s.id === n.business.id || "" !== t && t === n.business.name.trim().toLowerCase()
                })) ? null : n.business
            }),
            h = (0, a.d)(l.a, (e, s) => {
                let {
                    get: t
                } = s, n = t(c.e, e);
                if (null == n) return null;
                let i = t(d.N, e);
                return null != i && Object.values(i).some(e => null != e.message && (0, o.c)(e.message).some(e => null == e.layout && (0, u.c)(e)?.canonical_id === n.canonical_id)) ? null : n
            });
        t.d(s, {}, {
            a: function(e) {
                return (s, t) => (0, c.g)(s, t, {
                    onCancel: e => {
                        s.set(_, e, null)
                    },
                    onError: e => {
                        s.set(_, e, null)
                    },
                    onStart: n => {
                        s.set(_, n, {
                            business: e,
                            category: t.category,
                            messageId: t.messageId,
                            sourceConversationId: t.sourceConversationId
                        })
                    }
                })
            },
            b: _,
            c: h,
            d: p,
            e: function(e, s, t, n) {
                let a = e.get(_, s),
                    l = e.get(c.c, s);
                if (null == a && null == l) return;
                let p = e.get(c.c, t);
                if (null != p && p !== n && !i()({
                        ...p,
                        entityKnowledgeId: null,
                        entityKnowledgePending: !1
                    }, {
                        ...n,
                        entityKnowledgeId: null,
                        entityKnowledgePending: !1
                    }, (e, s, t) => void 0 === t ? void 0 : Object.is(e, s))) return;
                let h = Object.values(e.get(d.N, s) ?? {}).flatMap(e => null == e.message ? [] : (0, o.c)(e.message)),
                    b = h.filter(e => "entity_metadata" === e.type && null == e.layout),
                    f = l?.businessPreview ?? a?.business;
                if (null != f) {
                    let s = b.map(m.c).findLast(e => null != e && (e.id === f.id || e.name.trim().toLowerCase() === f.name.trim().toLowerCase())) ?? a?.business;
                    null != s && e.set(_, t, {
                        category: l?.category ?? n.category,
                        messageId: n.messageId,
                        sourceConversationId: n.sourceConversationId,
                        business: s
                    })
                }
                if (null != l) {
                    let s = b.map(u.c).findLast(e => null != e && e.canonical_id === l.businessProfile?.canonical_id) ?? l.businessProfile;
                    e.set(c.c, t, {
                        ...l,
                        entityKnowledgeId: p?.entityKnowledgeId,
                        entityKnowledgePending: p?.entityKnowledgePending,
                        businessProfile: s
                    }), e.set(c.e, t, s ?? null)
                }
                let g = h.find(e => "image_group" === e.type && ("full_width" === e.layout || 0 === e.start_idx));
                e.set(c.b, t, (null == g ? null : (0, r.u)(g, 0)[0]) ?? e.get(c.b, s))
            }
        })
    }),
    ynn3: (function(e, s, t) {
        t.d(s, {
            a: () => T,
            b: () => O
        });
        var n = t("ABep"),
            i = t("QosV"),
            a = t("tBe6"),
            r = t("Q840"),
            l = t("UKCO"),
            o = t("zd8w"),
            c = t("Wf1j"),
            d = t("oyxz"),
            u = t("lAQI"),
            m = t("bqtn"),
            _ = t("bf6R"),
            p = t("E6P3"),
            h = t("zSQm"),
            b = t("WAdu"),
            f = t("yGJW"),
            g = t("OWtl"),
            v = t("WFY2"),
            E = t("a2hX"),
            x = t("f3BX"),
            A = t("OOaz"),
            N = t("rVXE"),
            y = e => (0, n.jsx)("svg", {
                viewBox: "0 0 70 70",
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, n.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0 34.9998C0 54.3297 15.6703 70 34.9998 70C54.3297 70 70 54.3297 70 34.9998C70 15.6699 54.3297 0 34.9998 0C15.6703 0 0 15.6699 0 34.9998ZM52.1011 26.3572H17.8975V18.574H52.1011V26.3572ZM36.7476 56.998C38.3276 54.2569 39.1597 51.1478 39.1597 47.9836V29.6306C35.9878 29.6306 32.9053 30.6476 30.8403 33.5203V47.9836C30.8403 51.1478 31.6724 54.2569 33.2529 56.998L35 60.0286L36.7476 56.998Z"
                })
            });
        let C = {
                thumbtack: "Thumbtack",
                yelp: "Yelp"
            },
            S = u.L().trim().min(1).transform(h.b).catch(void 0);

        function T(e) {
            let s, t, d, u, h, v, T, O, P, D, R, B, k, M, H, U = (0, i.c)(47),
                {
                    analyticsMessageId: G,
                    businessId: L,
                    ctaSurface: z,
                    onAction: Q,
                    onInteractionOpenChange: W,
                    providers: K,
                    trigger: V,
                    turnContext: Y
                } = e,
                Z = (0, r.y)(g.a),
                q = (0, c.a)(),
                J = (0, o.useContext)(b.a);
            U[0] !== J || U[1] !== q || U[2] !== Y.shouldBlockExternalEgress ? (s = e => ({
                provider: e,
                logoUrl: !1 === Y.shouldBlockExternalEgress && "restricted" !== J ? S.parse(e.provider_logo) : void 0,
                label: e.provider_name?.trim() || C[e.provider?.trim().toLowerCase() ?? ""] || e.provider?.trim() || q.formatMessage({
                    id: "chatgpt.localBusiness.quoteProvider",
                    defaultMessage: "Quote provider"
                })
            }), U[0] = J, U[1] = q, U[2] = Y.shouldBlockExternalEgress, U[3] = s) : s = U[3], U[4] !== q ? (t = (e, s) => e.label.localeCompare(s.label, q.locale, {
                sensitivity: "base"
            }), U[4] = q, U[5] = t) : t = U[5];
            let $ = K.map(s).sort(t),
                X = (0, o.useRef)(!1),
                ee = (0, o.useRef)(!1);
            U[6] !== W ? (d = () => {
                X.current = !1, ee.current = !1, W?.(!1)
            }, U[6] = W, U[7] = d) : d = U[7];
            let es = (0, o.useEffectEvent)(d);
            U[8] !== es ? (u = () => () => es(), U[8] = es, U[9] = u) : u = U[9], U[10] === Symbol.for("react.memo_cache_sentinel") ? (h = [], U[10] = h) : h = U[10], (0, o.useLayoutEffect)(u, h), U[11] === Symbol.for("react.memo_cache_sentinel") ? (v = new Set, U[11] = v) : v = U[11];
            let et = (0, o.useRef)(v),
                en = !1 !== Y.trackShownImpressions,
                ei = Y.browserConversationId ?? Y.conversationId;
            U[12] !== G || U[13] !== ei || U[14] !== Z || U[15] !== Y.hostId || U[16] !== Y.messageId ? (T = {
                launch: (e, s, t) => {
                    if ((0, A.e)(ei)) throw Error("Wait for this conversation to finish saving, then try again.");
                    return (0, x.c)({
                        scope: Z,
                        hostId: Y.hostId,
                        chatGptConversationId: ei,
                        payload: e,
                        sourceMessageId: G ?? Y.messageId,
                        signal: s,
                        onTracking: t
                    })
                },
                onError: w
            }, U[12] = G, U[13] = ei, U[14] = Z, U[15] = Y.hostId, U[16] = Y.messageId, U[17] = T) : T = U[17];
            let ea = (0, N.a)(T);
            U[18] !== G || U[19] !== L || U[20] !== ei || U[21] !== z || U[22] !== Z || U[23] !== en || U[24] !== Y.messageId ? (O = (e, s) => {
                let t = e.launcherPayload.appUri,
                    n = I(e);
                if ("show" === s) {
                    if (!en || et.current.has(n)) return;
                    et.current.add(n)
                }
                try {
                    (0, f.a)(Z, a.d, {
                        action: "show" === s ? "CHATGPT_CONTENT_REFERENCE_ACTION_SHOW" : "CHATGPT_CONTENT_REFERENCE_ACTION_CLICK",
                        eventType: "show" === s ? "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_SHOWN" : "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_CLICKED",
                        businessId: L ?? void 0,
                        connectorId: t.startsWith("connectors://") ? t.slice(13) : t,
                        contentReferenceType: "map_card" === z ? "map" : "entity_metadata",
                        conversationId: ei,
                        ctaSurface: z,
                        ctaType: "service",
                        linkType: "local_business_service",
                        messageId: G ?? Y.messageId,
                        sectionLocation: "response",
                        serviceProvider: e.provider ?? void 0,
                        serviceActionType: e.action_type ?? void 0
                    })
                } catch {}
            }, U[18] = G, U[19] = L, U[20] = ei, U[21] = z, U[22] = Z, U[23] = en, U[24] = Y.messageId, U[25] = O) : O = U[25];
            let er = O,
                el = 1 === K.length ? K[0] : void 0;
            U[26] !== el ? (P = null == el ? null : I(el), U[26] = el, U[27] = P) : P = U[27];
            let eo = P;
            U[28] !== el || U[29] !== er ? (D = () => {
                null != el && er(el, "show")
            }, U[28] = el, U[29] = er, U[30] = D) : D = U[30];
            let ec = (0, o.useEffectEvent)(D);
            U[31] !== eo || U[32] !== ec ? (R = () => {
                null != eo && ec()
            }, U[31] = eo, U[32] = ec, U[33] = R) : R = U[33], U[34] !== eo || U[35] !== en ? (B = [eo, en], U[34] = eo, U[35] = en, U[36] = B) : B = U[36], (0, o.useEffect)(R, B);
            let ed = e => {
                er(e, "click"), Q?.(), ee.current = !0, W?.(!0), ea.launch(e.launcherPayload)
            };
            if (0 === K.length) return null;
            let eu = null != el ? (0, n.jsx)(F, {
                trigger: V,
                onClick: () => ed(el)
            }) : (0, n.jsx)(j, {
                contentWidth: "menuWide",
                onOpenChange: e => {
                    if (X.current = e, W?.(e || ee.current), e)
                        for (let e of K) er(e, "show")
                },
                size: "action",
                triggerButton: V,
                children: $.map(e => {
                    let {
                        provider: s,
                        label: t,
                        logoUrl: i
                    } = e, a = s.provider?.trim().toLowerCase() === "thumbtack" ? (0, n.jsx)(y, {
                        className: "size-5 text-default",
                        "aria-hidden": !0,
                        focusable: "false"
                    }) : (0, n.jsx)(_.$g, {
                        className: "text-secondary"
                    });
                    return (0, n.jsx)(m.c.Item, {
                        leftIcon: null == i ? a : (0, n.jsx)(p.a, {
                            className: "size-5 rounded-sm",
                            alt: "",
                            fallback: a,
                            src: i
                        }, i),
                        onClick: () => ed(s),
                        children: t
                    }, I(s))
                })
            });
            return U[37] !== ei || U[38] !== ea || U[39] !== W || U[40] !== Y.hostId ? (k = null == ea.dialog ? null : (0, n.jsx)(E.EcosystemWidgetDialog, {
                conversationId: (0, l.Xe)(ei),
                hostId: Y.hostId,
                onClose: () => {
                    ea.close(), ee.current = !1, W?.(X.current)
                },
                state: ea.dialog
            }), U[37] = ei, U[38] = ea, U[39] = W, U[40] = Y.hostId, U[41] = k) : k = U[41], U[42] !== k ? (M = (0, n.jsx)(n.Fragment, {
                children: k
            }), U[42] = k, U[43] = M) : M = U[43], U[44] !== eu || U[45] !== M ? (H = (0, n.jsxs)(n.Fragment, {
                children: [eu, M]
            }), U[44] = eu, U[45] = M, U[46] = H) : H = U[46], H
        }

        function w(e) {
            v.a.error("ChatGPT entity quote launch failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function O() {
            let e, s = (0, i.c)(1);
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(d.a, {
                id: "chatgpt.localBusiness.getQuote",
                defaultMessage: "Get Quote"
            }), s[0] = e) : e = s[0], e
        }

        function I(e) {
            return JSON.stringify([e.provider, e.provider_business_id, e.launcherPayload.appUri])
        }

        function j(e) {
            let s, t, a, r, l, c, d = (0, i.c)(11);
            d[0] !== e ? ({
                onOpenChange: s,
                ...t
            } = e, d[0] = e, d[1] = s, d[2] = t) : (s = d[1], t = d[2]), d[3] !== s ? (a = () => s?.(!1), d[3] = s, d[4] = a) : a = d[4];
            let u = (0, o.useEffectEvent)(a);
            return d[5] !== u ? (r = () => () => u(), d[5] = u, d[6] = r) : r = d[6], d[7] === Symbol.for("react.memo_cache_sentinel") ? (l = [], d[7] = l) : l = d[7], (0, o.useLayoutEffect)(r, l), d[8] !== s || d[9] !== t ? (c = (0, n.jsx)(m.a, {
                ...t,
                onOpenChange: s
            }), d[8] = s, d[9] = t, d[10] = c) : c = d[10], c
        }

        function F(e) {
            let {
                trigger: s,
                onClick: t
            } = e;
            return (0, o.cloneElement)(s, {
                onClick: t
            })
        }
    }),
    rVXE: (function(e, s, t) {
        var n = t("QosV"),
            i = t("zd8w"),
            a = t("T8YV");
        t.d(s, {}, {
            a: function(e) {
                let s, t, r, l, o, c = (0, n.c)(9),
                    {
                        launch: d,
                        onError: u
                    } = e,
                    m = (0, i.useRef)(null);
                c[0] === Symbol.for("react.memo_cache_sentinel") ? (s = () => () => {
                    m.current?.controller.abort()
                }, t = [], c[0] = s, c[1] = t) : (s = c[0], t = c[1]), (0, i.useEffect)(s, t);
                let [_, p] = (0, i.useState)(null);
                c[2] !== d || c[3] !== u ? (r = async e => {
                    let s;
                    if (m.current?.pending) return;
                    m.current?.controller.abort();
                    let t = {
                        controller: new AbortController,
                        pending: !0
                    };
                    m.current = t;
                    let {
                        signal: n
                    } = t.controller;
                    p({
                        kind: "loading",
                        nonModal: !0
                    });
                    try {
                        let i = await d(e, n, e => {
                            s = e, n.aborted || p({
                                kind: "loading",
                                nonModal: !0,
                                tracking: s
                            })
                        });
                        t.pending = !1, n.aborted || p({
                            kind: "ready",
                            result: i
                        })
                    } catch (e) {
                        t.pending = !1, !n.aborted && ((0, a.d)(e) || u?.(e), n.aborted || p({
                            kind: "error",
                            error: e,
                            tracking: s
                        }))
                    }
                }, c[2] = d, c[3] = u, c[4] = r) : r = c[4];
                let h = r;
                return c[5] === Symbol.for("react.memo_cache_sentinel") ? (l = () => {
                    m.current?.controller.abort(), m.current = null, p(null)
                }, c[5] = l) : l = c[5], c[6] !== _ || c[7] !== h ? (o = {
                    close: l,
                    dialog: _,
                    launch: h
                }, c[6] = _, c[7] = h, c[8] = o) : o = c[8], o
            }
        })
    }),
    WQMB: (function(e, s, t) {
        t.d(s, {}, {
            a: async function() {
                return (await Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(877700), t.e(893175), t.e(758787), t.e(4021), t.e(398131)]).then(t.bind(t, "Ctl0"))).BusinessClaimFlowWithRecovery
            },
            b: async function() {
                return (await Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(877700), t.e(963703), t.e(564979), t.e(518621), t.e(893175), t.e(758787), t.e(4021), t.e(411347), t.e(727546)]).then(t.bind(t, "wVZg"))).BusinessClaimSurfaceWithRecovery
            }
        })
    }),
    v1r0: (function(e, s, t) {
        var n = t("lAQI");
        let i = n.K({
                version: n.z(1),
                delivery: n.p(["none", "paid"])
            }),
            a = n.K({
                version: n.z(1),
                delivery: n.z("free"),
                scope: n.z("all_orders")
            }),
            r = n.K({
                version: n.z(1),
                delivery: n.z("free"),
                scope: n.z("minimum_order"),
                minimum_order_amount: n.L(),
                currency: n.L().nullable()
            }),
            l = n.K({
                version: n.z(1),
                returns: n.z("none")
            }),
            o = n.K({
                version: n.z(1),
                returns: n.p(["fees", "free"]),
                window_days: n.E().nullable()
            }),
            c = n.K({
                version: n.z(1),
                returns: n.p(["fees", "free"]),
                window: n.z("unlimited")
            }),
            d = n.Q([i, a, r.extend({
                minimum_order_amount: n.L().regex(/^(?:\d+(?:\.\d*)?|\.\d+)$/).refine(e => Number.isFinite(Number(e)) && Number(e) > 0),
                currency: n.L().regex(/^[A-Z]{3}$/)
            })]),
            u = n.Q([l, o.extend({
                window_days: n.E().int().positive()
            }), c]),
            m = n.Q([n.K({
                version: n.z(1),
                delivery: n.D()
            }), i, a, n.K({
                version: n.z(1),
                delivery: n.z("free"),
                scope: n.D()
            }), r]),
            _ = n.Q([n.K({
                version: n.z(1),
                returns: n.D()
            }), l, o, c]);
        t.d(s, {}, {
            a: m,
            b: d,
            c: [14, 30, 45, 90],
            d: _,
            e: u
        })
    })
};