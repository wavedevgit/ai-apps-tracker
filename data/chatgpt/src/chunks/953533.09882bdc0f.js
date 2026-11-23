export const __rspack_esm_ids = [953533];
export const __webpack_modules__ = {
    LrxN: (function(a, b, c) {
        var d, e, f = ((d = {}).CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_UNSPECIFIED = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_UNSPECIFIED", d.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_HANDOFF_SHOWN = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_HANDOFF_SHOWN", d.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_HANDOFF_CLICKED = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_HANDOFF_CLICKED", d.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_HUB_ARRIVED = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_HUB_ARRIVED", d.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_CONNECT_SHOWN = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_CONNECT_SHOWN", d.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_CONNECT_SUBMITTED = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_CONNECT_SUBMITTED", d.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_CONNECT_RESULT = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_STEP_CONNECT_RESULT", d.UNRECOGNIZED = "UNRECOGNIZED", d),
            g = ((e = {}).CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_UNSPECIFIED = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_UNSPECIFIED", e.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_SUCCEEDED = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_SUCCEEDED", e.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_FAILED = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_FAILED", e.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_ALREADY_CONNECTED = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_ALREADY_CONNECTED", e.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_DIFFERENT_ACCOUNT = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_DIFFERENT_ACCOUNT", e.CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_DISMISSED = "CHATGPT_BUSINESS_PROFILE_ADS_MANAGER_HANDOFF_OUTCOME_DISMISSED", e.UNRECOGNIZED = "UNRECOGNIZED", e);
        c.d(b, {}, {
            a: {
                $type: "protobuf_analytics_events.v1.ChatgptBusinessProfileAdsManagerHandoff"
            },
            b: g,
            c: f,
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
    rCC2: (function(a, b, c) {
        var d = c("zGRL"),
            e = c("LrxN"),
            f = c("yGJW");

        function g(a, b) {
            (0, f.a)(a, e.e, b)
        }
        c.d(b, {}, {
            a: g,
            b: function(a, b) {
                return (0, d.c)(b, b => g(a, b))
            }
        })
    }),
    JV0C: (function(a, b, c) {
        c.d(b, {
            a: () => j
        });
        var d, e, f = c("ABep"),
            g = c("on57"),
            h = c("Sm6l"),
            i = c("RNul");
        let j = (d = a => (0, f.jsx)(h.a, {
            ...a
        }), e = (0, f.jsx)(i.a, {
            as: "span",
            className: "icon-sm"
        }), function(a) {
            let {
                children: b,
                className: c,
                disabled: h,
                loading: i = !1
            } = a;
            return d({
                ...a,
                "aria-busy": i || a["aria-busy"],
                className: (0, g.b)(i && "relative", c),
                disabled: h || i,
                loading: !1,
                children: i ? (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)("span", {
                        className: "inline-flex min-w-0 items-center gap-[inherit] opacity-0",
                        children: b
                    }), (0, f.jsx)("span", {
                        "aria-hidden": !0,
                        className: "pointer-events-none absolute inset-0 flex items-center justify-center",
                        children: e
                    })]
                }) : b
            })
        })
    }),
    T2J5: (function(a, b, c) {
        c.d(b, {
            a: () => m
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("ZDhX"),
            g = c("on57"),
            h = c("oyxz"),
            i = c("HOLv"),
            j = "icon-niuo6X",
            k = c("mS2x"),
            l = c("xxxZ");

        function m(a) {
            let b, c, m, n, o, p = (0, e.c)(13),
                {
                    className: q,
                    label: r,
                    showTooltip: s,
                    size: t
                } = a,
                u = void 0 === t ? 20 : t,
                v = s && "shrink-0 rounded-sm select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none";
            p[0] !== q || p[1] !== v ? (b = (0, g.b)("-mt-0.75 inline-flex align-middle", v, q), p[0] = q, p[1] = v, p[2] = b) : b = p[2];
            let w = s ? 0 : void 0;
            p[3] !== u ? (c = 24 === u ? (0, d.jsx)(i.a, {
                className: j,
                asset: l.a
            }) : (0, d.jsx)(i.a, {
                className: j,
                asset: k.a
            }), p[3] = u, p[4] = c) : c = p[4], p[5] !== r || p[6] !== b || p[7] !== w || p[8] !== c ? (m = (0, d.jsx)("span", {
                className: b,
                "aria-label": r,
                role: "img",
                tabIndex: w,
                children: c
            }), p[5] = r, p[6] = b, p[7] = w, p[8] = c, p[9] = m) : m = p[9];
            let x = m;
            return s ? (p[10] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, d.jsx)(h.a, {
                id: "businessProfiles.claimedBadge.tooltip",
                defaultMessage: "OpenAI verified that this profile is managed by an owner or authorized representative."
            }), p[10] = n) : n = p[10], p[11] !== x ? (o = (0, d.jsx)(f.a, {
                maxWidth: 215,
                content: n,
                children: x
            }), p[11] = x, p[12] = o) : o = p[12], o) : x
        }
    }),
    WFCQ: (function(a, b, c) {
        c.d(b, {
            a: () => T,
            b: () => P,
            c: () => X,
            d: () => N
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("EA6X"),
            g = c("on57"),
            h = c("Q840"),
            i = c("fDDa"),
            j = c("zd8w"),
            k = c("Wf1j"),
            l = c("oyxz"),
            m = c("Cslg"),
            n = c("ZtSy"),
            o = c("k9qd"),
            p = c("HOLv"),
            q = c("Bbed"),
            r = c("zSQm"),
            s = c("WAdu"),
            t = c("HwRo"),
            u = c("hZax"),
            v = c("OMIV"),
            w = c("a6Zv"),
            x = c("KDax"),
            y = c("TUMj"),
            z = c("T2J5"),
            A = c("TJEh"),
            B = c("bf6R"),
            C = c("PUeQ"),
            D = c("AtXz");

        function E(a) {
            let b, c, f, h, i, m = (0, e.c)(19),
                {
                    business: n,
                    claimPreview: o
                } = a,
                q = void 0 !== o && o,
                r = (0, k.a)(),
                s = (0, j.useId)(),
                [t, u] = (0, j.useState)(!1),
                v = !!n.hours?.length,
                w = null != n.is_open || n.is_closed_permanently;
            if (!v && !w) return null;
            m[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(p.a, {
                asset: D.a,
                className: "shrink-0"
            }), m[0] = b) : b = m[0], m[1] !== n || m[2] !== w ? (c = (0, d.jsxs)(d.Fragment, {
                children: [b, (0, d.jsx)("span", {
                    className: "min-w-0 flex-1 text-base font-medium",
                    children: w ? (0, d.jsx)(C.a, {
                        business: n,
                        showHourDetail: !0
                    }) : (0, d.jsx)(l.a, {
                        id: "chatgpt.localBusiness.hours.label",
                        defaultMessage: "Hours"
                    })
                })]
            }), m[1] = n, m[2] = w, m[3] = c) : c = m[3];
            let x = c;
            return m[4] !== q || m[5] !== t || m[6] !== v || m[7] !== s || m[8] !== x ? (f = v ? (0, d.jsxs)("button", {
                type: "button",
                "aria-controls": s,
                "aria-expanded": t,
                className: (0, g.b)("flex min-h-11 w-full cursor-interaction items-center gap-4 text-start select-none hover:bg-secondary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset", q ? "py-2.5" : "py-2"),
                onClick: () => u(!t),
                children: [x, (0, d.jsx)(B.gc, {
                    className: (0, g.b)("text-secondary", t && "rotate-180")
                })]
            }) : (0, d.jsx)("div", {
                className: (0, g.b)("flex min-h-11 items-center gap-4", q ? "py-2.5" : "py-2"),
                children: x
            }), m[4] = q, m[5] = t, m[6] = v, m[7] = s, m[8] = x, m[9] = f) : f = m[9], m[10] !== n.hours || m[11] !== t || m[12] !== v || m[13] !== r || m[14] !== s ? (h = v && (0, d.jsx)("dl", {
                id: s,
                hidden: !t,
                className: "ms-10 pb-2 text-sm select-text",
                children: [1, 2, 3, 4, 5, 6, 0].map(a => {
                    let b = n.hours?.filter(b => b.day === a).sort(F);
                    return (0, d.jsxs)("div", {
                        className: "flex gap-4 py-2",
                        children: [(0, d.jsx)("dt", {
                            className: "w-28 shrink-0",
                            children: r.formatDate(new Date(Date.UTC(2026, 0, 4 + a)), {
                                weekday: "long",
                                timeZone: "UTC"
                            })
                        }), (0, d.jsx)("dd", {
                            children: b?.length ? b.map((a, b) => (0, d.jsx)("div", {
                                children: (0, d.jsx)(l.a, {
                                    id: "chatgpt.localBusiness.hours.interval",
                                    defaultMessage: "{start} \u2013 {end}",
                                    values: {
                                        start: G(r, a.start),
                                        end: G(r, a.end)
                                    }
                                })
                            }, b)) : (0, d.jsx)(l.a, {
                                id: "chatgpt.localBusiness.hours.closed",
                                defaultMessage: "Closed"
                            })
                        })]
                    }, a)
                })
            }), m[10] = n.hours, m[11] = t, m[12] = v, m[13] = r, m[14] = s, m[15] = h) : h = m[15], m[16] !== f || m[17] !== h ? (i = (0, d.jsxs)("div", {
                children: [f, h]
            }), m[16] = f, m[17] = h, m[18] = i) : i = m[18], i
        }

        function F(a, b) {
            return a.start.localeCompare(b.start)
        }

        function G(a, b) {
            return a.formatTime(new Date(Date.UTC(2026, 0, 4, Number(b.slice(0, 2)), Number(b.slice(2, 4)))), {
                hour: "numeric",
                minute: "2-digit",
                timeZone: "UTC"
            })
        }
        var H = c("ynn3"),
            I = c("u1WX"),
            J = c("qvYg"),
            K = c("bSfN");
        let L = (0, q.a)(async () => {
                let {
                    parsePhoneNumberFromString: a
                } = await Promise.all([c.e(963703), c.e(87307)]).then(c.bind(c, "cggm"));
                return function(b) {
                    let {
                        phone: c,
                        href: e,
                        readOnly: f,
                        claimPreview: g = !1
                    } = b, h = a(c, "US")?.formatNational();
                    return null == h ? null : (0, d.jsx)(X, {
                        icon: (0, d.jsx)(p.a, {
                            asset: J.a
                        }),
                        claimPreview: g,
                        children: (0, d.jsx)(x.a, {
                            className: "cursor-interaction hover:underline",
                            href: e,
                            initiator: "markdown_link_click",
                            openTarget: f ? "external-browser" : void 0,
                            children: h
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

        function N(a) {
            let b, c, h, i, j, l, m, n, o, p, q = (0, e.c)(53),
                {
                    actions: s,
                    business: t,
                    directionsUrl: u,
                    isOptimistic: v,
                    layout: w,
                    onAction: x,
                    renderActions: A,
                    readOnly: B,
                    fullWidth: C,
                    showTitle: D,
                    verified: F,
                    claimAction: G,
                    showClaimedBusinessTooltip: H,
                    dialog: I
                } = a,
                J = void 0 === w ? "sidebar" : w,
                K = void 0 === A || A,
                M = void 0 !== B && B,
                N = void 0 === D || D,
                Q = void 0 !== F && F,
                R = void 0 !== H && H,
                S = (0, y.e)(),
                U = (0, k.a)();
            q[0] !== t.phone ? (b = t.phone?.trim() ? (0, r.a)(`tel:${t.phone.trim()}`) : null, q[0] = t.phone, q[1] = b) : b = q[1];
            let V = b;
            q[2] !== t.address ? (c = t.address?.trim(), q[2] = t.address, q[3] = c) : c = q[3];
            let W = c,
                X = "claim-preview" === J,
                Y = "sidebar" === J || X;
            q[4] !== W || q[5] !== t.name ? (h = [t.name, W].filter(Boolean), q[4] = W, q[5] = t.name, q[6] = h) : h = q[6];
            let Z = h.join(", "),
                $ = X ? "pt-4" : "mb-4",
                _ = !(void 0 !== C && C) && "max-w-md";
            q[7] !== $ || q[8] !== _ ? (i = (0, g.b)("not-prose text-base text-default", $, _), q[7] = $, q[8] = _, q[9] = i) : i = q[9];
            let aa = void 0 !== v && v ? "status" : void 0,
                ab = X ? "ps-5 pe-6 pb-4" : void 0;
            q[10] !== t.name || q[11] !== X || q[12] !== U || q[13] !== Y || q[14] !== M || q[15] !== R || q[16] !== N || q[17] !== S?.imageEngagementContext?.surfaceLocation || q[18] !== Q ? (j = Y && N ? (0, d.jsxs)("h2", {
                className: (0, g.b)("text-card-title leading-7 font-medium break-words", !X && "mb-1"),
                children: [t.name, Q && (0, d.jsx)(z.a, {
                    className: "ms-2",
                    showTooltip: !M && Y && (R || S?.imageEngagementContext?.surfaceLocation === f.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR),
                    label: U.formatMessage({
                        id: "chatgpt.localBusiness.claim.verified.label",
                        defaultMessage: "Verified business"
                    })
                })]
            }) : null, q[10] = t.name, q[11] = X, q[12] = U, q[13] = Y, q[14] = M, q[15] = R, q[16] = N, q[17] = S?.imageEngagementContext?.surfaceLocation, q[18] = Q, q[19] = j) : j = q[19];
            let ac = !M;
            return q[20] !== t || q[21] !== Y || q[22] !== ac ? (l = (0, d.jsx)(P, {
                business: t,
                showPrice: Y,
                linkRating: ac,
                wrap: Y
            }), q[20] = t, q[21] = Y, q[22] = ac, q[23] = l) : l = q[23], q[24] !== ab || q[25] !== j || q[26] !== l ? (m = (0, d.jsxs)("div", {
                className: ab,
                children: [j, l]
            }), q[24] = ab, q[25] = j, q[26] = l, q[27] = m) : m = q[27], q[28] !== t || q[29] !== X || q[30] !== u || q[31] !== J || q[32] !== x || q[33] !== M || q[34] !== K ? (n = K && "one-line" !== J ? (0, d.jsx)("div", {
                className: X ? "ps-5 pe-4 pb-5" : "mt-3",
                children: (0, d.jsx)(T, {
                    allowQuoteAction: !M,
                    business: t,
                    directionsUrl: u,
                    onAction: x,
                    openTarget: M ? "external-browser" : void 0
                })
            }) : null, q[28] = t, q[29] = X, q[30] = u, q[31] = J, q[32] = x, q[33] = M, q[34] = K, q[35] = n) : n = q[35], q[36] !== t || q[37] !== G || q[38] !== X || q[39] !== u || q[40] !== Y || q[41] !== M || q[42] !== V ? (o = Y ? (0, d.jsxs)("div", {
                className: (0, g.b)("divide-y divide-border", X ? "px-5 pb-5" : "mt-3 border-t border-default"),
                children: [(0, d.jsx)(E, {
                    business: t,
                    claimPreview: X
                }), (0, d.jsx)(O, {
                    business: t,
                    directionsUrl: u,
                    readOnly: M,
                    claimPreview: X
                }), null != V && null != t.phone ? (0, d.jsx)(L, {
                    phone: t.phone,
                    href: V,
                    readOnly: M,
                    claimPreview: X
                }) : null, G]
            }) : null, q[36] = t, q[37] = G, q[38] = X, q[39] = u, q[40] = Y, q[41] = M, q[42] = V, q[43] = o) : o = q[43], q[44] !== s || q[45] !== I || q[46] !== Z || q[47] !== i || q[48] !== aa || q[49] !== m || q[50] !== n || q[51] !== o ? (p = (0, d.jsxs)("section", {
                "aria-label": Z,
                className: i,
                role: aa,
                children: [m, s, n, o, I]
            }), q[44] = s, q[45] = I, q[46] = Z, q[47] = i, q[48] = aa, q[49] = m, q[50] = n, q[51] = o, q[52] = p) : p = q[52], p
        }

        function O(a) {
            let b, c, f, g, h, i = (0, e.c)(14),
                {
                    business: j,
                    directionsUrl: k,
                    readOnly: l,
                    claimPreview: m
                } = a,
                n = void 0 !== l && l,
                o = void 0 !== m && m;
            i[0] !== j.address ? (b = j.address?.trim(), i[0] = j.address, i[1] = b) : b = i[1];
            let q = b;
            if (!q) return null;
            i[2] !== j || i[3] !== k ? (c = (0, r.a)(k ?? (0, A.e)(j) ?? "") || null, i[2] = j, i[3] = k, i[4] = c) : c = i[4];
            let s = c,
                t = !n || o;
            return i[5] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, d.jsx)(p.a, {
                asset: I.a
            }), i[5] = f) : f = i[5], i[6] !== q || i[7] !== n || i[8] !== s ? (g = null == s ? q : (0, d.jsx)(x.a, {
                className: "cursor-interaction hover:underline",
                href: s,
                initiator: "markdown_link_click",
                openTarget: n ? "external-browser" : void 0,
                children: q
            }), i[6] = q, i[7] = n, i[8] = s, i[9] = g) : g = i[9], i[10] !== o || i[11] !== t || i[12] !== g ? (h = (0, d.jsx)(X, {
                truncate: t,
                icon: f,
                claimPreview: o,
                children: g
            }), i[10] = o, i[11] = t, i[12] = g, i[13] = h) : h = i[13], h
        }

        function P(a) {
            let b, c, f, h, i, j, k, l, m = (0, e.c)(23),
                {
                    business: n,
                    showPrice: o,
                    linkRating: p,
                    shouldBlockExternalEgress: q,
                    wrap: r
                } = a,
                s = void 0 !== o && o,
                t = void 0 === p || p,
                u = void 0 !== q && q,
                v = void 0 !== r && r;
            m[0] !== n.categories ? (b = n.categories?.find(S), m[0] = n.categories, m[1] = b) : b = m[1];
            let w = b;
            m[2] !== n || m[3] !== t || m[4] !== u ? (c = null == n.rating && null == M[n.provider ?? ""] ? null : (0, d.jsx)(W, {
                business: n,
                linkRating: t,
                shouldBlockExternalEgress: u
            }, "rating"), m[2] = n, m[3] = t, m[4] = u, m[5] = c) : c = m[5], m[6] !== w ? (f = w ? (0, d.jsx)("span", {
                className: "min-w-0 truncate",
                children: w
            }, "category") : null, m[6] = w, m[7] = f) : f = m[7], m[8] !== n.price_str || m[9] !== s ? (h = s && n.price_str ? (0, d.jsx)("span", {
                children: n.price_str
            }, "price") : null, m[8] = n.price_str, m[9] = s, m[10] = h) : h = m[10], m[11] !== c || m[12] !== f || m[13] !== h ? (i = [c, f, h].filter(R), m[11] = c, m[12] = f, m[13] = h, m[14] = i) : i = m[14];
            let x = i,
                y = v ? "text-base" : "text-sm",
                z = v ? "flex-wrap" : "flex-nowrap";
            return m[15] !== y || m[16] !== z ? (j = (0, g.b)("flex min-w-0 items-center leading-5 font-normal text-default", y, z), m[15] = y, m[16] = z, m[17] = j) : j = m[17], m[18] !== x ? (k = x.map(Q), m[18] = x, m[19] = k) : k = m[19], m[20] !== j || m[21] !== k ? (l = (0, d.jsx)("span", {
                className: j,
                children: k
            }), m[20] = j, m[21] = k, m[22] = l) : l = m[22], l
        }

        function Q(a, b) {
            return (0, d.jsxs)(j.Fragment, {
                children: [0 === b ? null : (0, d.jsx)("span", {
                    className: "mx-1 shrink-0",
                    "aria-hidden": !0,
                    children: "\u2022"
                }), a]
            }, a.key)
        }

        function R(a) {
            return null != a
        }

        function S(a) {
            return a.trim().length > 0 && "Point" !== a
        }

        function T(a) {
            let b, c, i, k, n, o, p, q, w, z, B, C, D, E, F, G, I, J, K, L, M, N = (0, e.c)(68),
                {
                    allowQuoteAction: O,
                    analyticsMessageId: P,
                    business: Q,
                    directionsUrl: R,
                    onAction: S,
                    onQuoteInteractionOpenChange: T,
                    openTarget: W,
                    presentation: X,
                    primaryActionsOnly: Y,
                    reservationAction: Z
                } = a,
                $ = void 0 === O || O,
                _ = void 0 === X ? "sidebar" : X,
                aa = void 0 !== Y && Y,
                ab = (0, h.z)(m.f),
                ac = (0, y.e)(),
                ad = (0, j.useContext)(s.a);
            N[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, t.b)(), N[0] = b) : b = N[0];
            let ae = (0, u.f)(b),
                af = (0, h.x)(v.e, "2673474834");
            N[1] !== Q || N[2] !== _ || N[3] !== af ? (c = (0, r.a)(af && "sidebar" === _ ? (0, A.g)(Q) ?? "" : "") || null, N[1] = Q, N[2] = _, N[3] = af, N[4] = c) : c = N[4];
            let ag = c;
            N[5] !== Q || N[6] !== R ? (i = (0, r.a)(R ?? (0, A.e)(Q) ?? "") || null, N[5] = Q, N[6] = R, N[7] = i) : i = N[7];
            let ah = i;
            N[8] !== Q.website_url ? (k = (0, r.a)(Q.website_url?.trim() ?? "") || null, N[8] = Q.website_url, N[9] = k) : k = N[9];
            let ai = k;
            N[10] !== Q.phone ? (n = Q.phone?.trim() ? (0, r.a)(`tel:${Q.phone.trim()}`) : null, N[10] = Q.phone, N[11] = n) : n = N[11];
            let aj = n;
            N[12] !== Q.service_providers ? (o = (0, A.h)(Q.service_providers), N[12] = Q.service_providers, N[13] = o) : o = N[13];
            let ak = o;
            N[14] !== ab || N[15] !== $ || N[16] !== Q.reservation_providers || N[17] !== ae || N[18] !== ad || N[19] !== ak || N[20] !== ag || N[21] !== ac ? (p = $ && null != ab && ac?.shouldBlockExternalEgress === !1 && (ac.canRequestQuote ?? !ac.isReadOnly) && "restricted" !== ad && ae && null == ag && !Q.reservation_providers?.some(V) && ak.length > 0, N[14] = ab, N[15] = $, N[16] = Q.reservation_providers, N[17] = ae, N[18] = ad, N[19] = ak, N[20] = ag, N[21] = ac, N[22] = p) : p = N[22];
            let al = p;
            N[23] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, d.jsx)(l.a, {
                id: "chatgpt.localBusiness.reserve",
                defaultMessage: "Reserve"
            }), N[23] = q) : q = N[23], N[24] !== ag ? (w = {
                key: f.d.CHATGPT_ENTITY_AFFORDANCE_RESERVE,
                href: ag,
                label: q
            }, N[24] = ag, N[25] = w) : w = N[25], N[26] === Symbol.for("react.memo_cache_sentinel") ? (z = (0, d.jsx)(l.a, {
                id: "chatgpt.localBusiness.directions",
                defaultMessage: "Directions"
            }), N[26] = z) : z = N[26], N[27] !== ah ? (B = {
                key: f.d.CHATGPT_ENTITY_AFFORDANCE_DIRECTIONS,
                href: ah,
                label: z
            }, N[27] = ah, N[28] = B) : B = N[28], N[29] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, d.jsx)(l.a, {
                id: "chatgpt.localBusiness.website",
                defaultMessage: "Website"
            }), N[29] = C) : C = N[29], N[30] !== ai ? (D = {
                key: f.d.CHATGPT_ENTITY_AFFORDANCE_WEBSITE,
                href: ai,
                label: C
            }, N[30] = ai, N[31] = D) : D = N[31], N[32] === Symbol.for("react.memo_cache_sentinel") ? (E = (0, d.jsx)(l.a, {
                id: "chatgpt.localBusiness.call",
                defaultMessage: "Call"
            }), N[32] = E) : E = N[32], N[33] !== aj ? (F = {
                key: f.d.CHATGPT_ENTITY_AFFORDANCE_CALL,
                href: aj,
                label: E
            }, N[33] = aj, N[34] = F) : F = N[34], N[35] !== w || N[36] !== B || N[37] !== D || N[38] !== F ? (G = [w, B, D, F].filter(U), N[35] = w, N[36] = B, N[37] = D, N[38] = F, N[39] = G) : G = N[39], N[40] !== al || N[41] !== aa || N[42] !== Z || N[43] !== G ? (I = G.slice(0, aa ? 0 : 3 - Number(al) - Number(null != Z)), N[40] = al, N[41] = aa, N[42] = Z, N[43] = G, N[44] = I) : I = N[44];
            let am = I;
            if (!al && 0 === am.length && null == Z) return null;
            N[45] !== _ ? (J = a => (0, g.b)("no-drag relative flex cursor-interaction items-center justify-center rounded-full border after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] hover:after:bg-media-background/5 text-sm leading-4 font-medium whitespace-nowrap select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring", "sidebar" === _ ? "h-9 px-5" : "h-7.5 flex-auto px-4", 0 === a ? "border-transparent bg-primary-solid text-primary-solid" : "border-default bg-transparent text-default"), N[45] = _, N[46] = J) : J = N[46];
            let an = J;
            return N[47] !== an || N[48] !== P || N[49] !== Q.id || N[50] !== al || N[51] !== S || N[52] !== T || N[53] !== _ || N[54] !== ak || N[55] !== ac ? (K = al && (0, d.jsx)(H.a, {
                analyticsMessageId: P,
                businessId: "string" == typeof Q.id ? Q.id : void 0,
                ctaSurface: "hover" === _ ? "map_card" : "business_sidebar",
                onAction: () => S?.(f.d.CHATGPT_ENTITY_AFFORDANCE_REQUEST_QUOTE),
                onInteractionOpenChange: T,
                providers: ak,
                trigger: (0, d.jsx)("button", {
                    className: an(0),
                    type: "button",
                    children: (0, d.jsx)(H.b, {})
                }),
                turnContext: ac
            }), N[47] = an, N[48] = P, N[49] = Q.id, N[50] = al, N[51] = S, N[52] = T, N[53] = _, N[54] = ak, N[55] = ac, N[56] = K) : K = N[56], N[57] !== an || N[58] !== am || N[59] !== al || N[60] !== S || N[61] !== W || N[62] !== Z ? (L = am.map((a, b) => (0, d.jsx)(x.a, {
                appearance: "button",
                className: an(b + Number(al) + Number(null != Z)),
                href: a.href,
                initiator: "markdown_link_click",
                openTarget: W,
                onClick: () => S?.(a.key),
                children: a.label
            }, a.key)), N[57] = an, N[58] = am, N[59] = al, N[60] = S, N[61] = W, N[62] = Z, N[63] = L) : L = N[63], N[64] !== Z || N[65] !== K || N[66] !== L ? (M = (0, d.jsxs)("div", {
                className: "flex min-w-0 flex-wrap gap-2",
                children: [K, Z, L]
            }), N[64] = Z, N[65] = K, N[66] = L, N[67] = M) : M = N[67], M
        }

        function U(a) {
            return null != a.href
        }

        function V(a) {
            return null != a.launcherPayload
        }

        function W(a) {
            let b, c, f, h, l, m = (0, e.c)(17),
                {
                    business: q,
                    linkRating: t,
                    shouldBlockExternalEgress: v
                } = a,
                z = (0, k.a)(),
                A = (0, w.a)(),
                B = (0, y.e)(),
                C = (0, j.useContext)(s.a),
                D = !v && B?.shouldBlockExternalEgress !== !0 && "restricted" !== C,
                E = q.provider_logo_url_short?.trim() || q.provider_logo_url?.trim(),
                F = A && (q.provider_logo_dark_url_short?.trim() || q.provider_logo_dark_url?.trim()) || E,
                G = D && F ? (0, r.b)(F) : null;
            m[0] !== D || m[1] !== q.provider_url || m[2] !== t ? (b = (0, o.a)(q.provider_url?.trim() ?? ""), c = t && D && (0, i.d)(b), m[0] = D, m[1] = q.provider_url, m[2] = t, m[3] = b, m[4] = c) : (b = m[3], c = m[4]);
            let H = c,
                I = (0, u.f)(H && "1492523517"),
                J = I ? n.a : x.a,
                L = M[q.provider ?? ""] ?? q.provider ?? "";
            m[5] !== q.rating || m[6] !== z ? (f = null != q.rating ? (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsx)(p.a, {
                    asset: K.a,
                    className: "size-3.5 shrink-0"
                }), (0, d.jsx)("span", {
                    children: z.formatNumber(q.rating, {
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 1
                    })
                })]
            }) : null, m[5] = q.rating, m[6] = z, m[7] = f) : f = m[7];
            let N = G ? (0, d.jsx)("img", {
                alt: L,
                className: (0, g.b)("w-auto max-w-18 shrink-0 object-contain", G.toLowerCase().includes("tripadvisor_ollie") ? "h-3" : "h-3.5"),
                src: G
            }) : M[q.provider ?? ""] ?? null;
            m[8] !== f || m[9] !== N ? (h = (0, d.jsxs)(d.Fragment, {
                children: [f, N]
            }), m[8] = f, m[9] = N, m[10] = h) : h = m[10];
            let O = h;
            return m[11] !== J || m[12] !== H || m[13] !== O || m[14] !== I || m[15] !== b ? (l = H ? (0, d.jsx)(J, {
                className: "inline-flex shrink-0 cursor-interaction items-center gap-1 hover:text-secondary",
                href: b,
                initiator: "markdown_link_click",
                openTarget: I ? "in-app-browser" : void 0,
                children: O
            }) : (0, d.jsx)("span", {
                className: "inline-flex shrink-0 items-center gap-1",
                children: O
            }), m[11] = J, m[12] = H, m[13] = O, m[14] = I, m[15] = b, m[16] = l) : l = m[16], l
        }

        function X(a) {
            let b, c, f, h, i, j = (0, e.c)(13),
                {
                    icon: k,
                    children: l,
                    truncate: m,
                    claimPreview: n
                } = a,
                o = void 0 !== n && n ? "py-2.5" : "py-2";
            j[0] !== o ? (b = (0, g.b)("flex min-h-11 items-center gap-4", o), j[0] = o, j[1] = b) : b = j[1], j[2] !== k ? (c = (0, d.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                children: k
            }), j[2] = k, j[3] = c) : c = j[3];
            let p = void 0 !== m && m && "truncate";
            return j[4] !== p ? (f = (0, g.b)("min-w-0 flex-1 text-base font-medium select-text", p), j[4] = p, j[5] = f) : f = j[5], j[6] !== l || j[7] !== f ? (h = (0, d.jsx)("span", {
                className: f,
                children: l
            }), j[6] = l, j[7] = f, j[8] = h) : h = j[8], j[9] !== b || j[10] !== c || j[11] !== h ? (i = (0, d.jsxs)("div", {
                className: b,
                children: [c, h]
            }), j[9] = b, j[10] = c, j[11] = h, j[12] = i) : i = j[12], i
        }
    }),
    Iqbg: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("WQMB"),
            g = c("zGRL"),
            h = c("on57"),
            i = c("Q840"),
            j = c("zd8w"),
            k = c("Wf1j"),
            l = c("oyxz"),
            m = c("rEML"),
            n = c("lAQI"),
            o = c("rCC2"),
            p = c("HOLv"),
            q = c("bf6R"),
            r = c("Bbed"),
            s = c("yC2B"),
            t = c("WAdu"),
            u = c("OWtl"),
            v = c("OMIV"),
            w = c("TUMj"),
            x = c("TJEh"),
            y = c("WFCQ"),
            z = c("FRPb"),
            A = c("vrCg"),
            B = c("rQsV");
        let C = (0, r.a)(f.a),
            D = (0, r.a)(f.b, {
                suspendToParent: !0,
                errorFallback: a => {
                    let {
                        renderMetadata: b
                    } = a;
                    return b(!1, null)
                }
            }),
            E = (0, j.createContext)(null);

        function F(a) {
            let b, c, f, g = (0, e.c)(11),
                {
                    business: h,
                    children: k,
                    conversationId: l,
                    renderSidebar: m,
                    shouldBlockExternalEgress: n
                } = a,
                o = (0, i.x)(z.b, l),
                p = h ?? o?.business,
                q = (0, j.useContext)(t.a),
                r = (0, i.x)(v.e, "2778625748") && null != p;
            g[0] !== p || g[1] !== r || g[2] !== k || g[3] !== l ? (b = r ? (0, d.jsx)(j.Suspense, {
                fallback: k,
                children: (0, d.jsx)(D, {
                    business: p,
                    renderMetadata: (a, b) => (0, d.jsx)(E, {
                        value: {
                            business: p,
                            verified: a,
                            claimAction: b
                        },
                        children: k
                    }),
                    renderClaimButton: (a, b, c) => (0, d.jsx)(L, {
                        measure: null != c,
                        conversationId: l,
                        onClick: c ?? a,
                        request: b
                    }),
                    businessPreview: a => (0, d.jsx)(K, {
                        business: p,
                        layout: "claim-preview",
                        verified: a,
                        readOnly: !0
                    })
                })
            }) : k, g[0] = p, g[1] = r, g[2] = k, g[3] = l, g[4] = b) : b = g[4];
            let s = b,
                u = r && void 0 !== n && n ? "restricted" : q;
            return g[5] !== s || g[6] !== m ? (c = m(s), g[5] = s, g[6] = m, g[7] = c) : c = g[7], g[8] !== u || g[9] !== c ? (f = (0, d.jsx)(t.a, {
                value: u,
                children: c
            }), g[8] = u, g[9] = c, g[10] = f) : f = g[10], f
        }
        let G = n.F({
            layout: n.p(["one-line", "two-lines"]).nullable().optional(),
            metadata: n.F({
                map_url: n.L().nullable().optional()
            }).nullable().optional()
        }).loose();

        function H(a) {
            let b, c, f, g = (0, e.c)(12),
                {
                    reference: h,
                    actions: i,
                    claimActions: j
                } = a;
            g[0] !== h ? (b = (0, x.c)(h), g[0] = h, g[1] = b) : b = g[1];
            let k = b;
            g[2] !== h ? (c = G.safeParse(h), g[2] = h, g[3] = c) : c = g[3];
            let l = c;
            if (null == k) {
                let a;
                return g[4] !== i ? (a = null == i ? null : (0, d.jsx)(d.Fragment, {
                    children: i
                }), g[4] = i, g[5] = a) : a = g[5], a
            }
            let m = l.success ? l.data.metadata?.map_url : null,
                n = (l.success ? l.data.layout : null) ?? "sidebar";
            return g[6] !== i || g[7] !== k || g[8] !== j || g[9] !== m || g[10] !== n ? (f = (0, d.jsx)(I, {
                actions: i,
                business: k,
                directionsUrl: m,
                layout: n,
                renderActions: !1,
                claimActions: j
            }), g[6] = i, g[7] = k, g[8] = j, g[9] = m, g[10] = n, g[11] = f) : f = g[11], f
        }

        function I(a) {
            let b, c = (0, e.c)(20),
                f = (0, j.useContext)(E);
            if ((0, i.x)(v.e, "2778625748") && !a.readOnly && !a.claimActions && (null == a.layout || "sidebar" === a.layout)) {
                let b, e, g, h, i;
                if (null != f && (null != f.business.entity_lookup_id && null != a.business.entity_lookup_id ? f.business.entity_lookup_id === a.business.entity_lookup_id : "string" == typeof f.business.id && f.business.id === a.business.id || f.business.name.trim().toLowerCase() === a.business.name.trim().toLowerCase())) {
                    let b;
                    return c[0] !== a || c[1] !== f.claimAction || c[2] !== f.verified ? (b = (0, d.jsx)(K, {
                        ...a,
                        verified: f.verified,
                        claimAction: f.claimAction
                    }), c[0] = a, c[1] = f.claimAction, c[2] = f.verified, c[3] = b) : b = c[3], b
                }
                return c[4] !== a ? (b = (0, d.jsx)(K, {
                    ...a
                }), c[4] = a, c[5] = b) : b = c[5], c[6] !== a ? (e = (b, c) => (0, d.jsx)(K, {
                    ...a,
                    verified: b,
                    claimAction: c
                }), c[6] = a, c[7] = e) : e = c[7], c[8] !== a.business || c[9] !== a.onAction ? (g = b => (0, d.jsx)(K, {
                    business: a.business,
                    onAction: a.onAction,
                    layout: "claim-preview",
                    verified: b,
                    readOnly: !0
                }), c[8] = a.business, c[9] = a.onAction, c[10] = g) : g = c[10], c[11] !== a.business || c[12] !== e || c[13] !== g ? (h = (0, d.jsx)(D, {
                    business: a.business,
                    renderMetadata: e,
                    renderClaimButton: J,
                    businessPreview: g
                }), c[11] = a.business, c[12] = e, c[13] = g, c[14] = h) : h = c[14], c[15] !== b || c[16] !== h ? (i = (0, d.jsx)(j.Suspense, {
                    fallback: b,
                    children: h
                }), c[15] = b, c[16] = h, c[17] = i) : i = c[17], i
            }
            return c[18] !== a ? (b = (0, d.jsx)(K, {
                ...a
            }), c[18] = a, c[19] = b) : b = c[19], b
        }

        function J(a, b, c) {
            return (0, d.jsx)(L, {
                measure: null != c,
                onClick: c ?? a,
                request: b
            })
        }

        function K(a) {
            let b, c, f, g, h, i, k = (0, e.c)(23);
            k[0] !== a ? ({
                claimActions: b,
                ...c
            } = a, k[0] = a, k[1] = b, k[2] = c) : (b = k[1], c = k[2]);
            let [l, m] = (0, j.useState)(!1), [n, o] = (0, j.useState)(!1), p = (0, w.e)(), q = (0, j.useContext)(t.a), {
                business: r,
                onAction: s
            } = c, u = c.verified || n;
            return k[3] !== b || k[4] !== n || k[5] !== c.isOptimistic || k[6] !== c.readOnly ? (f = c.isOptimistic || c.readOnly || n || null == b ? null : (0, d.jsx)(L, {
                onClick: () => m(!0)
            }), k[3] = b, k[4] = n, k[5] = c.isOptimistic, k[6] = c.readOnly, k[7] = f) : f = k[7], k[8] !== c.claimAction || k[9] !== f ? (g = (0, d.jsxs)(d.Fragment, {
                children: [c.claimAction, f]
            }), k[8] = c.claimAction, k[9] = f, k[10] = g) : g = k[10], k[11] !== r || k[12] !== b || k[13] !== l || k[14] !== q || k[15] !== s || k[16] !== p ? (h = l && null != b && (0, d.jsx)(C, {
                business: {
                    ...r,
                    photoUrl: "restricted" === q || p?.shouldBlockExternalEgress ? void 0 : (0, x.f)(r, p?.conversationType === "sidebar" ? p.contentReferences : void 0) ?? void 0
                },
                businessPreview: a => (0, d.jsx)(I, {
                    business: r,
                    onAction: s,
                    layout: "claim-preview",
                    verified: a,
                    readOnly: !0
                }),
                actions: {
                    ...b,
                    onCheckDomain: b.onCheckDomain ? async () => {
                        let a = await b.onCheckDomain?.() ?? {
                            step: "review"
                        };
                        return "success" === a.step && o(!0), a
                    } : void 0,
                    onCheckClaim: b.onCheckClaim ? async () => {
                        let a = await b.onCheckClaim?.() ?? {
                            step: "review"
                        };
                        return "success" === a.step && o(!0), a
                    } : void 0,
                    onManageProfile: b.onManageProfile ? a => {
                        m(!1), b.onManageProfile?.(a)
                    } : void 0
                },
                onClose: () => m(!1)
            }), k[11] = r, k[12] = b, k[13] = l, k[14] = q, k[15] = s, k[16] = p, k[17] = h) : h = k[17], k[18] !== c || k[19] !== u || k[20] !== g || k[21] !== h ? (i = (0, d.jsx)(y.d, {
                ...c,
                verified: u,
                claimAction: g,
                dialog: h
            }), k[18] = c, k[19] = u, k[20] = g, k[21] = h, k[22] = i) : i = k[22], i
        }

        function L(a) {
            let b, c, f, n, r, t, v, x, z = (0, e.c)(37),
                {
                    measure: C,
                    conversationId: D,
                    onClick: E,
                    request: F
                } = a,
                G = (0, i.y)(u.a),
                H = (0, w.e)(),
                I = (0, j.useContext)(m.i),
                J = (0, k.a)();
            z[0] !== J.locale ? (b = (0, s.a)(J.locale), z[0] = J.locale, z[1] = b) : b = z[1];
            let K = b;
            if (F?.status === "under_review") {
                let a, b, c, e;
                return z[2] !== E ? (a = () => E?.(), z[2] = E, z[3] = a) : a = z[3], z[4] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(p.a, {
                    className: "text-tertiary",
                    asset: B.a
                }), z[4] = b) : b = z[4], z[5] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(y.c, {
                    icon: b,
                    children: (0, d.jsx)("span", {
                        className: "text-secondary",
                        children: (0, d.jsx)(l.a, {
                            id: "chatgpt.localBusiness.claim.status.under_review",
                            defaultMessage: "Your claim is under review"
                        })
                    })
                }), z[5] = c) : c = z[5], z[6] !== K || z[7] !== a ? (e = (0, d.jsx)("button", {
                    dir: K,
                    type: "button",
                    onClick: a,
                    className: "w-full cursor-interaction text-start focus-visible:outline-ring",
                    children: c
                }), z[6] = K, z[7] = a, z[8] = e) : e = z[8], e
            }
            let L = F && "in_progress" !== F.status ? "text-default" : "text-business-claim";
            z[9] !== L ? (c = (0, h.b)("flex min-h-12 w-full cursor-interaction items-center gap-4 py-3 text-start text-base font-medium select-none hover:underline focus-visible:outline-ring", L), z[9] = L, z[10] = c) : c = z[10], z[11] !== D || z[12] !== C || z[13] !== F || z[14] !== I || z[15] !== G || z[16] !== H?.conversationId ? (f = C && !F ? (0, o.b)(G, (0, g.j)(D ?? H?.conversationId, I?.location.pathname)) : void 0, z[11] = D, z[12] = C, z[13] = F, z[14] = I, z[15] = G, z[16] = H?.conversationId, z[17] = f) : f = z[17], z[18] !== C || z[19] !== E || z[20] !== F ? (n = a => E?.(C && !F ? (0, g.d)(a.currentTarget) : void 0), z[18] = C, z[19] = E, z[20] = F, z[21] = n) : n = z[21];
            let M = F?.status === "needs_information",
                N = null != F && "needs_information" !== F.status;
            z[22] !== M || z[23] !== N ? (r = (0, h.b)({
                "text-warning": M,
                "text-tertiary": N
            }), z[22] = M, z[23] = N, z[24] = r) : r = z[24];
            let O = F?.status === "needs_information" ? A.a : B.a;
            return z[25] !== O || z[26] !== r ? (t = (0, d.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                children: (0, d.jsx)(p.a, {
                    className: r,
                    asset: O
                })
            }), z[25] = O, z[26] = r, z[27] = t) : t = z[27], z[28] !== F ? (v = F ? (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsxs)("span", {
                    className: "min-w-0 flex-1",
                    children: [(0, d.jsx)("span", {
                        className: "block",
                        children: (0, d.jsx)(l.a, {
                            id: "chatgpt.localBusiness.claim.status.title",
                            defaultMessage: "{status, select, in_progress {Finish verifying your business} needs_information {Your claim needs more information} under_review {Claim under review} other {Claim started}}",
                            values: {
                                status: F.status
                            }
                        })
                    }), (0, d.jsx)("span", {
                        className: "block text-sm font-normal text-secondary",
                        children: (0, d.jsx)(l.a, {
                            id: "chatgpt.localBusiness.claim.status.subtitle",
                            defaultMessage: "{status, select, in_progress {Continue your business verification} needs_information {Review what\u2019s needed to continue} under_review {Your claim is being reviewed} other {View your claim and next steps}}",
                            values: {
                                status: F.status
                            }
                        })
                    })]
                }), (0, d.jsx)(q.mc, {
                    className: "rtl:rotate-180"
                })]
            }) : (0, d.jsx)(l.a, {
                id: "chatgpt.localBusiness.claim.button.label",
                defaultMessage: "Claim this business"
            }), z[28] = F, z[29] = v) : v = z[29], z[30] !== K || z[31] !== t || z[32] !== v || z[33] !== c || z[34] !== f || z[35] !== n ? (x = (0, d.jsxs)("button", {
                className: c,
                dir: K,
                type: "button",
                ref: f,
                onClick: n,
                children: [t, v]
            }), z[30] = K, z[31] = t, z[32] = v, z[33] = c, z[34] = f, z[35] = n, z[36] = x) : x = z[36], x
        }
        c.d(b, {
            ChatGptLocalBusinessMetadata: () => I,
            a: () => L,
            b: () => y.a,
            c: () => F,
            d: () => H,
            e: () => y.b,
            f: () => y.c
        })
    }),
    PUeQ: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Wf1j"),
            g = c("oyxz");
        c.d(b, {}, {
            a: function(a) {
                let b, c, h, i, j = (0, e.c)(24),
                    {
                        business: k,
                        showHourDetail: l
                    } = a,
                    m = (0, f.a)();
                if (k.is_closed_permanently) {
                    let a;
                    return j[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)("span", {
                        className: "text-danger",
                        children: (0, d.jsx)(g.a, {
                            id: "chatgpt.localBusiness.closedPermanently",
                            defaultMessage: "Permanently closed"
                        })
                    }), j[0] = a) : a = j[0], a
                }
                let n = k.is_open;
                if (null == n) return null;
                let o = k.next_open_hour;
                if (!l || null == o) {
                    let a;
                    return j[1] !== n ? (a = n ? (0, d.jsx)("span", {
                        className: "text-success",
                        children: (0, d.jsx)(g.a, {
                            id: "chatgpt.localBusiness.open",
                            defaultMessage: "Open"
                        })
                    }) : (0, d.jsx)("span", {
                        className: "text-danger",
                        children: (0, d.jsx)(g.a, {
                            id: "chatgpt.localBusiness.closed",
                            defaultMessage: "Closed"
                        })
                    }), j[1] = n, j[2] = a) : a = j[2], a
                }
                let p = k.local_day ?? new Date().getDay(),
                    q = null != k.local_day && n && o.end <= o.start ? (o.day + 1) % 7 : o.day,
                    r = n ? o.end : o.start;
                if (j[3] !== m || j[4] !== r) {
                    let a, c;
                    j[6] !== r ? (a = Number.parseInt(r.slice(0, 2), 10), j[6] = r, j[7] = a) : a = j[7], j[8] !== r ? (c = Number.parseInt(r.slice(2, 4), 10), j[8] = r, j[9] = c) : c = j[9], b = m.formatTime(new Date(0, 0, 0, a, c), {
                        hour: "numeric",
                        minute: "2-digit"
                    }), j[3] = m, j[4] = r, j[5] = b
                } else b = j[5];
                let s = b;
                j[10] !== n ? (c = a => (0, d.jsx)("span", {
                    className: n ? "text-success" : "text-danger",
                    children: a
                }), j[10] = n, j[11] = c) : c = j[11];
                let t = c;
                if (q === p) {
                    let a;
                    return j[12] !== n || j[13] !== t || j[14] !== s ? (a = n ? (0, d.jsx)("span", {
                        children: (0, d.jsx)(g.a, {
                            id: "chatgpt.localBusiness.openUntilTime",
                            defaultMessage: "<status>Open</status> until {time}",
                            values: {
                                status: t,
                                time: s
                            }
                        })
                    }) : (0, d.jsx)("span", {
                        children: (0, d.jsx)(g.a, {
                            id: "chatgpt.localBusiness.closedUntilTime",
                            defaultMessage: "<status>Closed</status> until {time}",
                            values: {
                                status: t,
                                time: s
                            }
                        })
                    }), j[12] = n, j[13] = t, j[14] = s, j[15] = a) : a = j[15], a
                }
                j[16] !== m || j[17] !== q ? (h = m.formatDate(new Date(0, 0, q), {
                    weekday: "short"
                }), j[16] = m, j[17] = q, j[18] = h) : h = j[18];
                let u = h;
                return j[19] !== u || j[20] !== n || j[21] !== t || j[22] !== s ? (i = n ? (0, d.jsx)("span", {
                    children: (0, d.jsx)(g.a, {
                        id: "chatgpt.localBusiness.openUntilDayTime",
                        defaultMessage: "<status>Open</status> until {day} {time}",
                        values: {
                            status: t,
                            day: u,
                            time: s
                        }
                    })
                }) : (0, d.jsx)("span", {
                    children: (0, d.jsx)(g.a, {
                        id: "chatgpt.localBusiness.closedUntilDayTime",
                        defaultMessage: "<status>Closed</status> until {day} {time}",
                        values: {
                            status: t,
                            day: u,
                            time: s
                        }
                    })
                }), j[19] = u, j[20] = n, j[21] = t, j[22] = s, j[23] = i) : i = j[23], i
            }
        })
    }),
    FRPb: (function(a, b, c) {
        var d = c("alRw"),
            e = c.n(d),
            f = c("Q840"),
            g = c("rKAs"),
            h = c("OWtl"),
            i = c("G6Ip"),
            j = c("tZ3A"),
            k = c("dQRk"),
            l = c("WOVT"),
            m = c("TJEh");
        let n = (0, f.v)(h.a, a => null),
            o = (0, f.d)(h.a, (a, b) => {
                let {
                    get: c
                } = b, d = c(n, a);
                if (null == d) return null;
                let e = c(k.N, a);
                return null != e && Object.values(e).some(a => null != a.message && (0, i.c)(a.message).some(a => {
                    let b = (0, m.c)(a);
                    if (null == b) return !1;
                    let c = ("string" == typeof a.name ? a.name : b.name).trim().toLowerCase();
                    return b.id === d.business.id || "" !== c && c === d.business.name.trim().toLowerCase()
                })) ? null : d.business
            }),
            p = (0, f.d)(h.a, (a, b) => {
                let {
                    get: c
                } = b, d = c(j.e, a);
                if (null == d) return null;
                let e = c(k.N, a);
                return null != e && Object.values(e).some(a => null != a.message && (0, i.c)(a.message).some(a => null == a.layout && (0, l.c)(a)?.canonical_id === d.canonical_id)) ? null : d
            });
        c.d(b, {}, {
            a: function(a) {
                return (b, c) => (0, j.g)(b, c, {
                    onCancel: a => {
                        b.set(n, a, null)
                    },
                    onError: a => {
                        b.set(n, a, null)
                    },
                    onStart: d => {
                        b.set(n, d, {
                            business: a,
                            category: c.category,
                            messageId: c.messageId,
                            sourceConversationId: c.sourceConversationId
                        })
                    }
                })
            },
            b: n,
            c: p,
            d: o,
            e: function(a, b, c, d) {
                let f = a.get(n, b),
                    h = a.get(j.c, b);
                if (null == f && null == h) return;
                let o = a.get(j.c, c);
                if (null != o && o !== d && !e()({
                        ...o,
                        entityKnowledgeId: null,
                        entityKnowledgePending: !1
                    }, {
                        ...d,
                        entityKnowledgeId: null,
                        entityKnowledgePending: !1
                    }, (a, b, c) => void 0 === c ? void 0 : Object.is(a, b))) return;
                let p = Object.values(a.get(k.N, b) ?? {}).flatMap(a => null == a.message ? [] : (0, i.c)(a.message)),
                    q = p.filter(a => "entity_metadata" === a.type && null == a.layout),
                    r = h?.businessPreview ?? f?.business;
                if (null != r) {
                    let b = q.map(m.c).findLast(a => null != a && (a.id === r.id || a.name.trim().toLowerCase() === r.name.trim().toLowerCase())) ?? f?.business;
                    null != b && a.set(n, c, {
                        category: h?.category ?? d.category,
                        messageId: d.messageId,
                        sourceConversationId: d.sourceConversationId,
                        business: b
                    })
                }
                if (null != h) {
                    let b = q.map(l.c).findLast(a => null != a && a.canonical_id === h.businessProfile?.canonical_id) ?? h.businessProfile;
                    a.set(j.c, c, {
                        ...h,
                        entityKnowledgeId: o?.entityKnowledgeId,
                        entityKnowledgePending: o?.entityKnowledgePending,
                        businessProfile: b
                    }), a.set(j.e, c, b ?? null)
                }
                let s = p.find(a => "image_group" === a.type && ("full_width" === a.layout || 0 === a.start_idx));
                a.set(j.b, c, (null == s ? null : (0, g.u)(s, 0)[0]) ?? a.get(j.b, b))
            }
        })
    }),
    ynn3: (function(a, b, c) {
        c.d(b, {
            a: () => B,
            b: () => D
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("tBe6"),
            g = c("Q840"),
            h = c("yZpl"),
            i = c("zd8w"),
            j = c("Wf1j"),
            k = c("oyxz"),
            l = c("lAQI"),
            m = c("bqtn"),
            n = c("bf6R"),
            o = c("E6P3"),
            p = c("zSQm"),
            q = c("WAdu"),
            r = c("yGJW"),
            s = c("OWtl"),
            t = c("WFY2"),
            u = c("a2hX"),
            v = c("f3BX"),
            w = c("OOaz"),
            x = c("rVXE"),
            y = a => (0, d.jsx)("svg", {
                viewBox: "0 0 70 70",
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                ...a,
                children: (0, d.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0 34.9998C0 54.3297 15.6703 70 34.9998 70C54.3297 70 70 54.3297 70 34.9998C70 15.6699 54.3297 0 34.9998 0C15.6703 0 0 15.6699 0 34.9998ZM52.1011 26.3572H17.8975V18.574H52.1011V26.3572ZM36.7476 56.998C38.3276 54.2569 39.1597 51.1478 39.1597 47.9836V29.6306C35.9878 29.6306 32.9053 30.6476 30.8403 33.5203V47.9836C30.8403 51.1478 31.6724 54.2569 33.2529 56.998L35 60.0286L36.7476 56.998Z"
                })
            });
        let z = {
                thumbtack: "Thumbtack",
                yelp: "Yelp"
            },
            A = l.L().trim().min(1).transform(p.b).catch(void 0);

        function B(a) {
            let b, c, k, l, p, t, B, D, H, I, J, K, L, M, N, O = (0, e.c)(47),
                {
                    analyticsMessageId: P,
                    businessId: Q,
                    ctaSurface: R,
                    onAction: S,
                    onInteractionOpenChange: T,
                    providers: U,
                    trigger: V,
                    turnContext: W
                } = a,
                X = (0, g.y)(s.a),
                Y = (0, j.a)(),
                Z = (0, i.useContext)(q.a);
            O[0] !== Z || O[1] !== Y || O[2] !== W.shouldBlockExternalEgress ? (b = a => ({
                provider: a,
                logoUrl: !1 === W.shouldBlockExternalEgress && "restricted" !== Z ? A.parse(a.provider_logo) : void 0,
                label: a.provider_name?.trim() || z[a.provider?.trim().toLowerCase() ?? ""] || a.provider?.trim() || Y.formatMessage({
                    id: "chatgpt.localBusiness.quoteProvider",
                    defaultMessage: "Quote provider"
                })
            }), O[0] = Z, O[1] = Y, O[2] = W.shouldBlockExternalEgress, O[3] = b) : b = O[3], O[4] !== Y ? (c = (a, b) => a.label.localeCompare(b.label, Y.locale, {
                sensitivity: "base"
            }), O[4] = Y, O[5] = c) : c = O[5];
            let $ = U.map(b).sort(c),
                _ = (0, i.useRef)(!1),
                aa = (0, i.useRef)(!1);
            O[6] !== T ? (k = () => {
                _.current = !1, aa.current = !1, T?.(!1)
            }, O[6] = T, O[7] = k) : k = O[7];
            let ab = (0, i.useEffectEvent)(k);
            O[8] !== ab ? (l = () => () => ab(), O[8] = ab, O[9] = l) : l = O[9], O[10] === Symbol.for("react.memo_cache_sentinel") ? (p = [], O[10] = p) : p = O[10], (0, i.useLayoutEffect)(l, p), O[11] === Symbol.for("react.memo_cache_sentinel") ? (t = new Set, O[11] = t) : t = O[11];
            let ac = (0, i.useRef)(t),
                ad = !1 !== W.trackShownImpressions,
                ae = W.browserConversationId ?? W.conversationId;
            O[12] !== P || O[13] !== ae || O[14] !== X || O[15] !== W.hostId || O[16] !== W.messageId ? (B = {
                launch: (a, b, c) => {
                    if ((0, w.e)(ae)) throw Error("Wait for this conversation to finish saving, then try again.");
                    return (0, v.c)({
                        scope: X,
                        hostId: W.hostId,
                        chatGptConversationId: ae,
                        payload: a,
                        sourceMessageId: P ?? W.messageId,
                        signal: b,
                        onTracking: c
                    })
                },
                onError: C
            }, O[12] = P, O[13] = ae, O[14] = X, O[15] = W.hostId, O[16] = W.messageId, O[17] = B) : B = O[17];
            let af = (0, x.a)(B);
            O[18] !== P || O[19] !== Q || O[20] !== ae || O[21] !== R || O[22] !== X || O[23] !== ad || O[24] !== W.messageId ? (D = (a, b) => {
                let c = a.launcherPayload.appUri,
                    d = E(a);
                if ("show" === b) {
                    if (!ad || ac.current.has(d)) return;
                    ac.current.add(d)
                }
                try {
                    (0, r.a)(X, f.d, {
                        action: "show" === b ? "CHATGPT_CONTENT_REFERENCE_ACTION_SHOW" : "CHATGPT_CONTENT_REFERENCE_ACTION_CLICK",
                        eventType: "show" === b ? "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_SHOWN" : "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_CLICKED",
                        businessId: Q ?? void 0,
                        connectorId: c.startsWith("connectors://") ? c.slice(13) : c,
                        contentReferenceType: "map_card" === R ? "map" : "entity_metadata",
                        conversationId: ae,
                        ctaSurface: R,
                        ctaType: "service",
                        linkType: "local_business_service",
                        messageId: P ?? W.messageId,
                        sectionLocation: "response",
                        serviceProvider: a.provider ?? void 0,
                        serviceActionType: a.action_type ?? void 0
                    })
                } catch {}
            }, O[18] = P, O[19] = Q, O[20] = ae, O[21] = R, O[22] = X, O[23] = ad, O[24] = W.messageId, O[25] = D) : D = O[25];
            let ag = D,
                ah = 1 === U.length ? U[0] : void 0;
            O[26] !== ah ? (H = null == ah ? null : E(ah), O[26] = ah, O[27] = H) : H = O[27];
            let ai = H;
            O[28] !== ah || O[29] !== ag ? (I = () => {
                null != ah && ag(ah, "show")
            }, O[28] = ah, O[29] = ag, O[30] = I) : I = O[30];
            let aj = (0, i.useEffectEvent)(I);
            O[31] !== ai || O[32] !== aj ? (J = () => {
                null != ai && aj()
            }, O[31] = ai, O[32] = aj, O[33] = J) : J = O[33], O[34] !== ai || O[35] !== ad ? (K = [ai, ad], O[34] = ai, O[35] = ad, O[36] = K) : K = O[36], (0, i.useEffect)(J, K);
            let ak = a => {
                ag(a, "click"), S?.(), aa.current = !0, T?.(!0), af.launch(a.launcherPayload)
            };
            if (0 === U.length) return null;
            let al = null != ah ? (0, d.jsx)(G, {
                trigger: V,
                onClick: () => ak(ah)
            }) : (0, d.jsx)(F, {
                contentWidth: "menuWide",
                onOpenChange: a => {
                    if (_.current = a, T?.(a || aa.current), a)
                        for (let a of U) ag(a, "show")
                },
                size: "action",
                triggerButton: V,
                children: $.map(a => {
                    let {
                        provider: b,
                        label: c,
                        logoUrl: e
                    } = a, f = b.provider?.trim().toLowerCase() === "thumbtack" ? (0, d.jsx)(y, {
                        className: "size-5 text-default",
                        "aria-hidden": !0,
                        focusable: "false"
                    }) : (0, d.jsx)(n.jh, {
                        className: "text-secondary"
                    });
                    return (0, d.jsx)(m.c.Item, {
                        leftIcon: null == e ? f : (0, d.jsx)(o.a, {
                            className: "size-5 rounded-sm",
                            alt: "",
                            fallback: f,
                            src: e
                        }, e),
                        onClick: () => ak(b),
                        children: c
                    }, E(b))
                })
            });
            return O[37] !== ae || O[38] !== af || O[39] !== T || O[40] !== W.hostId ? (L = null == af.dialog ? null : (0, d.jsx)(u.EcosystemWidgetDialog, {
                conversationId: (0, h.We)(ae),
                hostId: W.hostId,
                onClose: () => {
                    af.close(), aa.current = !1, T?.(_.current)
                },
                state: af.dialog
            }), O[37] = ae, O[38] = af, O[39] = T, O[40] = W.hostId, O[41] = L) : L = O[41], O[42] !== L ? (M = (0, d.jsx)(d.Fragment, {
                children: L
            }), O[42] = L, O[43] = M) : M = O[43], O[44] !== al || O[45] !== M ? (N = (0, d.jsxs)(d.Fragment, {
                children: [al, M]
            }), O[44] = al, O[45] = M, O[46] = N) : N = O[46], N
        }

        function C(a) {
            t.a.error("ChatGPT entity quote launch failed", {
                safe: {},
                sensitive: {
                    error: a
                }
            })
        }

        function D() {
            let a, b = (0, e.c)(1);
            return b[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(k.a, {
                id: "chatgpt.localBusiness.getQuote",
                defaultMessage: "Get Quote"
            }), b[0] = a) : a = b[0], a
        }

        function E(a) {
            return JSON.stringify([a.provider, a.provider_business_id, a.launcherPayload.appUri])
        }

        function F(a) {
            let b, c, f, g, h, j, k = (0, e.c)(11);
            k[0] !== a ? ({
                onOpenChange: b,
                ...c
            } = a, k[0] = a, k[1] = b, k[2] = c) : (b = k[1], c = k[2]), k[3] !== b ? (f = () => b?.(!1), k[3] = b, k[4] = f) : f = k[4];
            let l = (0, i.useEffectEvent)(f);
            return k[5] !== l ? (g = () => () => l(), k[5] = l, k[6] = g) : g = k[6], k[7] === Symbol.for("react.memo_cache_sentinel") ? (h = [], k[7] = h) : h = k[7], (0, i.useLayoutEffect)(g, h), k[8] !== b || k[9] !== c ? (j = (0, d.jsx)(m.a, {
                ...c,
                onOpenChange: b
            }), k[8] = b, k[9] = c, k[10] = j) : j = k[10], j
        }

        function G(a) {
            let {
                trigger: b,
                onClick: c
            } = a;
            return (0, i.cloneElement)(b, {
                onClick: c
            })
        }
    }),
    rVXE: (function(a, b, c) {
        var d = c("QosV"),
            e = c("zd8w"),
            f = c("T8YV");
        c.d(b, {}, {
            a: function(a) {
                let b, c, g, h, i, j = (0, d.c)(9),
                    {
                        launch: k,
                        onError: l
                    } = a,
                    m = (0, e.useRef)(null);
                j[0] === Symbol.for("react.memo_cache_sentinel") ? (b = () => () => {
                    m.current?.controller.abort()
                }, c = [], j[0] = b, j[1] = c) : (b = j[0], c = j[1]), (0, e.useEffect)(b, c);
                let [n, o] = (0, e.useState)(null);
                j[2] !== k || j[3] !== l ? (g = async a => {
                    let b;
                    if (m.current?.pending) return;
                    m.current?.controller.abort();
                    let c = {
                        controller: new AbortController,
                        pending: !0
                    };
                    m.current = c;
                    let {
                        signal: d
                    } = c.controller;
                    o({
                        kind: "loading",
                        nonModal: !0
                    });
                    try {
                        let e = await k(a, d, a => {
                            b = a, d.aborted || o({
                                kind: "loading",
                                nonModal: !0,
                                tracking: b
                            })
                        });
                        c.pending = !1, d.aborted || o({
                            kind: "ready",
                            result: e
                        })
                    } catch (a) {
                        c.pending = !1, !d.aborted && ((0, f.d)(a) || l?.(a), d.aborted || o({
                            kind: "error",
                            error: a,
                            tracking: b
                        }))
                    }
                }, j[2] = k, j[3] = l, j[4] = g) : g = j[4];
                let p = g;
                return j[5] === Symbol.for("react.memo_cache_sentinel") ? (h = () => {
                    m.current?.controller.abort(), m.current = null, o(null)
                }, j[5] = h) : h = j[5], j[6] !== n || j[7] !== p ? (i = {
                    close: h,
                    dialog: n,
                    launch: p
                }, j[6] = n, j[7] = p, j[8] = i) : i = j[8], i
            }
        })
    }),
    WQMB: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(877700), c.e(224690), c.e(893175), c.e(758787), c.e(4021), c.e(593849)]).then(c.bind(c, "Ctl0"))).BusinessClaimFlowWithRecovery
            },
            b: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(877700), c.e(963703), c.e(564979), c.e(971159), c.e(224690), c.e(893175), c.e(758787), c.e(4021), c.e(411347), c.e(791098)]).then(c.bind(c, "wVZg"))).BusinessClaimSurfaceWithRecovery
            }
        })
    }),
    v1r0: (function(a, b, c) {
        var d = c("lAQI");
        let e = d.K({
                version: d.z(1),
                delivery: d.p(["none", "paid"])
            }),
            f = d.K({
                version: d.z(1),
                delivery: d.z("free"),
                scope: d.z("all_orders")
            }),
            g = d.K({
                version: d.z(1),
                delivery: d.z("free"),
                scope: d.z("minimum_order"),
                minimum_order_amount: d.L(),
                currency: d.L().nullable()
            }),
            h = d.K({
                version: d.z(1),
                returns: d.z("none")
            }),
            i = d.K({
                version: d.z(1),
                returns: d.p(["fees", "free"]),
                window_days: d.E().nullable()
            }),
            j = d.K({
                version: d.z(1),
                returns: d.p(["fees", "free"]),
                window: d.z("unlimited")
            }),
            k = d.Q([e, f, g.extend({
                minimum_order_amount: d.L().regex(/^(?:\d+(?:\.\d*)?|\.\d+)$/).refine(a => Number.isFinite(Number(a)) && Number(a) > 0),
                currency: d.L().regex(/^[A-Z]{3}$/)
            })]),
            l = d.Q([h, i.extend({
                window_days: d.E().int().positive()
            }), j]),
            m = d.Q([d.K({
                version: d.z(1),
                delivery: d.D()
            }), e, f, d.K({
                version: d.z(1),
                delivery: d.z("free"),
                scope: d.D()
            }), g]),
            n = d.Q([d.K({
                version: d.z(1),
                returns: d.D()
            }), h, i, j]);
        c.d(b, {}, {
            a: m,
            b: k,
            c: [14, 30, 45, 90],
            d: n,
            e: l
        })
    })
};