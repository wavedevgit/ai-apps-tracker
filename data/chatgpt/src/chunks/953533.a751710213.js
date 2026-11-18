export const __rspack_esm_ids = [953533];
export const __webpack_modules__ = {
    LrxN: (function(e, s, t) {
        t.d(s, {}, {
            a: {
                $type: "protobuf_analytics_events.v1.ChatgptBusinessProfileAgentBuilder"
            },
            b: {
                $type: "protobuf_analytics_events.v1.ChatgptBusinessProfileClaimAcquisition"
            }
        })
    }),
    rCC2: (function(e, s, t) {
        var n = t("zGRL"),
            i = t("LrxN"),
            a = t("yGJW");

        function r(e, s) {
            (0, a.a)(e, i.b, s)
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
            u = t("Q5xB"),
            d = t("EqAp");

        function m(e) {
            let s, t, m, p, h, b = (0, i.c)(13),
                {
                    className: f,
                    label: g,
                    showTooltip: v,
                    size: x
                } = e,
                y = void 0 === x ? 20 : x,
                _ = v && "shrink-0 rounded-sm select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none";
            b[0] !== f || b[1] !== _ ? (s = (0, r.b)("-mt-0.75 inline-flex align-middle", _, f), b[0] = f, b[1] = _, b[2] = s) : s = b[2];
            let w = v ? 0 : void 0;
            b[3] !== y ? (t = 24 === y ? (0, n.jsx)(o.a, {
                className: c,
                asset: d.a
            }) : (0, n.jsx)(o.a, {
                className: c,
                asset: u.a
            }), b[3] = y, b[4] = t) : t = b[4], b[5] !== g || b[6] !== s || b[7] !== w || b[8] !== t ? (m = (0, n.jsx)("span", {
                className: s,
                "aria-label": g,
                role: "img",
                tabIndex: w,
                children: t
            }), b[5] = g, b[6] = s, b[7] = w, b[8] = t, b[9] = m) : m = b[9];
            let j = m;
            return v ? (b[10] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, n.jsx)(l.a, {
                id: "businessProfiles.claimedBadge.tooltip",
                defaultMessage: "OpenAI verified that this profile is managed by an owner or authorized representative."
            }), b[10] = p) : p = b[10], b[11] !== j ? (h = (0, n.jsx)(a.a, {
                maxWidth: 215,
                content: p,
                children: j
            }), b[11] = j, b[12] = h) : h = b[12], h) : j
        }
    }),
    WFCQ: (function(e, s, t) {
        t.d(s, {
            a: () => V,
            b: () => Q,
            c: () => K,
            d: () => W
        });
        var n = t("ABep"),
            i = t("QosV"),
            a = t("EA6X"),
            r = t("on57"),
            l = t("Q840"),
            o = t("fDDa"),
            c = t("zd8w"),
            u = t("Wf1j"),
            d = t("oyxz"),
            m = t("Cslg"),
            p = t("ZtSy"),
            h = t("k9qd"),
            b = t("HOLv"),
            f = t("Bbed"),
            g = t("zSQm"),
            v = t("WAdu"),
            x = t("HwRo"),
            y = t("hZax"),
            _ = t("OMIV"),
            w = t("a6Zv"),
            j = t("KDax"),
            C = t("TUMj"),
            N = t("T2J5"),
            T = t("TJEh"),
            k = t("bf6R"),
            E = t("PUeQ"),
            A = t("Bw5z");

        function O(e) {
            let s, t, a, l, o, m = (0, i.c)(19),
                {
                    business: p,
                    claimPreview: h
                } = e,
                f = void 0 !== h && h,
                g = (0, u.a)(),
                v = (0, c.useId)(),
                [x, y] = (0, c.useState)(!1),
                _ = !!p.hours?.length,
                w = null != p.is_open || p.is_closed_permanently;
            if (!_ && !w) return null;
            m[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, n.jsx)(b.a, {
                asset: A.a,
                className: "shrink-0"
            }), m[0] = s) : s = m[0], m[1] !== p || m[2] !== w ? (t = (0, n.jsxs)(n.Fragment, {
                children: [s, (0, n.jsx)("span", {
                    className: "min-w-0 flex-1 text-base font-medium",
                    children: w ? (0, n.jsx)(E.a, {
                        business: p,
                        showHourDetail: !0
                    }) : (0, n.jsx)(d.a, {
                        id: "chatgpt.localBusiness.hours.label",
                        defaultMessage: "Hours"
                    })
                })]
            }), m[1] = p, m[2] = w, m[3] = t) : t = m[3];
            let j = t;
            return m[4] !== f || m[5] !== x || m[6] !== _ || m[7] !== v || m[8] !== j ? (a = _ ? (0, n.jsxs)("button", {
                type: "button",
                "aria-controls": v,
                "aria-expanded": x,
                className: (0, r.b)("flex min-h-11 w-full cursor-interaction items-center gap-4 text-start select-none hover:bg-secondary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset", f ? "py-2.5" : "py-2"),
                onClick: () => y(!x),
                children: [j, (0, n.jsx)(k.$b, {
                    className: (0, r.b)("text-secondary", x && "rotate-180")
                })]
            }) : (0, n.jsx)("div", {
                className: (0, r.b)("flex min-h-11 items-center gap-4", f ? "py-2.5" : "py-2"),
                children: j
            }), m[4] = f, m[5] = x, m[6] = _, m[7] = v, m[8] = j, m[9] = a) : a = m[9], m[10] !== p.hours || m[11] !== x || m[12] !== _ || m[13] !== g || m[14] !== v ? (l = _ && (0, n.jsx)("dl", {
                id: v,
                hidden: !x,
                className: "ms-10 pb-2 text-sm select-text",
                children: [1, 2, 3, 4, 5, 6, 0].map(e => {
                    let s = p.hours?.filter(s => s.day === e).sort(I);
                    return (0, n.jsxs)("div", {
                        className: "flex gap-4 py-2",
                        children: [(0, n.jsx)("dt", {
                            className: "w-28 shrink-0",
                            children: g.formatDate(new Date(Date.UTC(2026, 0, 4 + e)), {
                                weekday: "long",
                                timeZone: "UTC"
                            })
                        }), (0, n.jsx)("dd", {
                            children: s?.length ? s.map((e, s) => (0, n.jsx)("div", {
                                children: (0, n.jsx)(d.a, {
                                    id: "chatgpt.localBusiness.hours.interval",
                                    defaultMessage: "{start} – {end}",
                                    values: {
                                        start: S(g, e.start),
                                        end: S(g, e.end)
                                    }
                                })
                            }, s)) : (0, n.jsx)(d.a, {
                                id: "chatgpt.localBusiness.hours.closed",
                                defaultMessage: "Closed"
                            })
                        })]
                    }, e)
                })
            }), m[10] = p.hours, m[11] = x, m[12] = _, m[13] = g, m[14] = v, m[15] = l) : l = m[15], m[16] !== a || m[17] !== l ? (o = (0, n.jsxs)("div", {
                children: [a, l]
            }), m[16] = a, m[17] = l, m[18] = o) : o = m[18], o
        }

        function I(e, s) {
            return e.start.localeCompare(s.start)
        }

        function S(e, s) {
            return e.formatTime(new Date(Date.UTC(2026, 0, 4, Number(s.slice(0, 2)), Number(s.slice(2, 4)))), {
                hour: "numeric",
                minute: "2-digit",
                timeZone: "UTC"
            })
        }
        var B = t("ynn3"),
            P = t("B8ZN"),
            R = t("jWVT"),
            M = t("wkA1");
        let F = (0, f.a)(async () => {
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
                    return null == l ? null : (0, n.jsx)(K, {
                        icon: (0, n.jsx)(b.a, {
                            asset: R.a
                        }),
                        claimPreview: r,
                        children: (0, n.jsx)(j.a, {
                            className: "cursor-interaction hover:underline",
                            href: i,
                            initiator: "markdown_link_click",
                            openTarget: a ? "external-browser" : void 0,
                            children: l
                        })
                    })
                }
            }),
            L = {
                yelp: "Yelp",
                "yelp-feed": "Yelp",
                tripadvisor: "Tripadvisor",
                "tripadvisor-feed": "Tripadvisor",
                "opentable-feed": "OpenTable"
            };

        function W(e) {
            let s, t, l, o, c, d, m, p, h, b, f = (0, i.c)(53),
                {
                    actions: v,
                    business: x,
                    directionsUrl: y,
                    isOptimistic: _,
                    layout: w,
                    onAction: j,
                    renderActions: T,
                    readOnly: k,
                    fullWidth: E,
                    showTitle: A,
                    verified: I,
                    claimAction: S,
                    showClaimedBusinessTooltip: B,
                    dialog: P
                } = e,
                R = void 0 === w ? "sidebar" : w,
                M = void 0 === T || T,
                L = void 0 !== k && k,
                W = void 0 === A || A,
                z = void 0 !== I && I,
                G = void 0 !== B && B,
                U = (0, C.d)(),
                H = (0, u.a)();
            f[0] !== x.phone ? (s = x.phone?.trim() ? (0, g.a)(`tel:${x.phone.trim()}`) : null, f[0] = x.phone, f[1] = s) : s = f[1];
            let Y = s;
            f[2] !== x.address ? (t = x.address?.trim(), f[2] = x.address, f[3] = t) : t = f[3];
            let q = t,
                K = "claim-preview" === R,
                Z = "sidebar" === R || K;
            f[4] !== q || f[5] !== x.name ? (l = [x.name, q].filter(Boolean), f[4] = q, f[5] = x.name, f[6] = l) : l = f[6];
            let J = l.join(", "),
                $ = K ? "pt-4" : "mb-4",
                X = !(void 0 !== E && E) && "max-w-md";
            f[7] !== $ || f[8] !== X ? (o = (0, r.b)("not-prose text-base text-default", $, X), f[7] = $, f[8] = X, f[9] = o) : o = f[9];
            let ee = void 0 !== _ && _ ? "status" : void 0,
                es = K ? "ps-5 pe-6 pb-4" : void 0;
            f[10] !== x.name || f[11] !== K || f[12] !== H || f[13] !== Z || f[14] !== L || f[15] !== G || f[16] !== W || f[17] !== U?.imageEngagementContext?.surfaceLocation || f[18] !== z ? (c = Z && W ? (0, n.jsxs)("h2", {
                className: (0, r.b)("text-card-title leading-7 font-medium break-words", !K && "mb-1"),
                children: [x.name, z && (0, n.jsx)(N.a, {
                    className: "ms-2",
                    showTooltip: !L && Z && (G || U?.imageEngagementContext?.surfaceLocation === a.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR),
                    label: H.formatMessage({
                        id: "chatgpt.localBusiness.claim.verified.label",
                        defaultMessage: "Verified business"
                    })
                })]
            }) : null, f[10] = x.name, f[11] = K, f[12] = H, f[13] = Z, f[14] = L, f[15] = G, f[16] = W, f[17] = U?.imageEngagementContext?.surfaceLocation, f[18] = z, f[19] = c) : c = f[19];
            let et = !L;
            return f[20] !== x || f[21] !== Z || f[22] !== et ? (d = (0, n.jsx)(Q, {
                business: x,
                showPrice: Z,
                linkRating: et,
                wrap: Z
            }), f[20] = x, f[21] = Z, f[22] = et, f[23] = d) : d = f[23], f[24] !== es || f[25] !== c || f[26] !== d ? (m = (0, n.jsxs)("div", {
                className: es,
                children: [c, d]
            }), f[24] = es, f[25] = c, f[26] = d, f[27] = m) : m = f[27], f[28] !== x || f[29] !== K || f[30] !== y || f[31] !== R || f[32] !== j || f[33] !== L || f[34] !== M ? (p = M && "one-line" !== R ? (0, n.jsx)("div", {
                className: K ? "ps-5 pe-4 pb-5" : "mt-3",
                children: (0, n.jsx)(V, {
                    allowQuoteAction: !L,
                    business: x,
                    directionsUrl: y,
                    onAction: j,
                    openTarget: L ? "external-browser" : void 0
                })
            }) : null, f[28] = x, f[29] = K, f[30] = y, f[31] = R, f[32] = j, f[33] = L, f[34] = M, f[35] = p) : p = f[35], f[36] !== x || f[37] !== S || f[38] !== K || f[39] !== y || f[40] !== Z || f[41] !== L || f[42] !== Y ? (h = Z ? (0, n.jsxs)("div", {
                className: (0, r.b)("divide-y divide-border", K ? "px-5 pb-5" : "mt-3 border-t border-default"),
                children: [(0, n.jsx)(O, {
                    business: x,
                    claimPreview: K
                }), (0, n.jsx)(D, {
                    business: x,
                    directionsUrl: y,
                    readOnly: L,
                    claimPreview: K
                }), null != Y && null != x.phone ? (0, n.jsx)(F, {
                    phone: x.phone,
                    href: Y,
                    readOnly: L,
                    claimPreview: K
                }) : null, S]
            }) : null, f[36] = x, f[37] = S, f[38] = K, f[39] = y, f[40] = Z, f[41] = L, f[42] = Y, f[43] = h) : h = f[43], f[44] !== v || f[45] !== P || f[46] !== J || f[47] !== o || f[48] !== ee || f[49] !== m || f[50] !== p || f[51] !== h ? (b = (0, n.jsxs)("section", {
                "aria-label": J,
                className: o,
                role: ee,
                children: [m, v, p, h, P]
            }), f[44] = v, f[45] = P, f[46] = J, f[47] = o, f[48] = ee, f[49] = m, f[50] = p, f[51] = h, f[52] = b) : b = f[52], b
        }

        function D(e) {
            let s, t, a, r, l, o = (0, i.c)(14),
                {
                    business: c,
                    directionsUrl: u,
                    readOnly: d,
                    claimPreview: m
                } = e,
                p = void 0 !== d && d,
                h = void 0 !== m && m;
            o[0] !== c.address ? (s = c.address?.trim(), o[0] = c.address, o[1] = s) : s = o[1];
            let f = s;
            if (!f) return null;
            o[2] !== c || o[3] !== u ? (t = (0, g.a)(u ?? (0, T.e)(c) ?? "") || null, o[2] = c, o[3] = u, o[4] = t) : t = o[4];
            let v = t,
                x = !p || h;
            return o[5] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, n.jsx)(b.a, {
                asset: P.a
            }), o[5] = a) : a = o[5], o[6] !== f || o[7] !== p || o[8] !== v ? (r = null == v ? f : (0, n.jsx)(j.a, {
                className: "cursor-interaction hover:underline",
                href: v,
                initiator: "markdown_link_click",
                openTarget: p ? "external-browser" : void 0,
                children: f
            }), o[6] = f, o[7] = p, o[8] = v, o[9] = r) : r = o[9], o[10] !== h || o[11] !== x || o[12] !== r ? (l = (0, n.jsx)(K, {
                truncate: x,
                icon: a,
                claimPreview: h,
                children: r
            }), o[10] = h, o[11] = x, o[12] = r, o[13] = l) : l = o[13], l
        }

        function Q(e) {
            let s, t, a, l, o, c, u, d, m = (0, i.c)(23),
                {
                    business: p,
                    showPrice: h,
                    linkRating: b,
                    shouldBlockExternalEgress: f,
                    wrap: g
                } = e,
                v = void 0 !== h && h,
                x = void 0 === b || b,
                y = void 0 !== f && f,
                _ = void 0 !== g && g;
            m[0] !== p.categories ? (s = p.categories?.find(U), m[0] = p.categories, m[1] = s) : s = m[1];
            let w = s;
            m[2] !== p || m[3] !== x || m[4] !== y ? (t = null == p.rating && null == L[p.provider ?? ""] ? null : (0, n.jsx)(q, {
                business: p,
                linkRating: x,
                shouldBlockExternalEgress: y
            }, "rating"), m[2] = p, m[3] = x, m[4] = y, m[5] = t) : t = m[5], m[6] !== w ? (a = w ? (0, n.jsx)("span", {
                className: "min-w-0 truncate",
                children: w
            }, "category") : null, m[6] = w, m[7] = a) : a = m[7], m[8] !== p.price_str || m[9] !== v ? (l = v && p.price_str ? (0, n.jsx)("span", {
                children: p.price_str
            }, "price") : null, m[8] = p.price_str, m[9] = v, m[10] = l) : l = m[10], m[11] !== t || m[12] !== a || m[13] !== l ? (o = [t, a, l].filter(G), m[11] = t, m[12] = a, m[13] = l, m[14] = o) : o = m[14];
            let j = o,
                C = _ ? "text-base" : "text-sm",
                N = _ ? "flex-wrap" : "flex-nowrap";
            return m[15] !== C || m[16] !== N ? (c = (0, r.b)("flex min-w-0 items-center leading-5 font-normal text-default", C, N), m[15] = C, m[16] = N, m[17] = c) : c = m[17], m[18] !== j ? (u = j.map(z), m[18] = j, m[19] = u) : u = m[19], m[20] !== c || m[21] !== u ? (d = (0, n.jsx)("span", {
                className: c,
                children: u
            }), m[20] = c, m[21] = u, m[22] = d) : d = m[22], d
        }

        function z(e, s) {
            return (0, n.jsxs)(c.Fragment, {
                children: [0 === s ? null : (0, n.jsx)("span", {
                    className: "mx-1 shrink-0",
                    "aria-hidden": !0,
                    children: "•"
                }), e]
            }, e.key)
        }

        function G(e) {
            return null != e
        }

        function U(e) {
            return e.trim().length > 0 && "Point" !== e
        }

        function V(e) {
            let s, t, o, u, p, h, b, f, w, N, k, E, A, O, I, S, P, R, M, F, L, W = (0, i.c)(68),
                {
                    allowQuoteAction: D,
                    analyticsMessageId: Q,
                    business: z,
                    directionsUrl: G,
                    onAction: U,
                    onQuoteInteractionOpenChange: V,
                    openTarget: q,
                    presentation: K,
                    primaryActionsOnly: Z,
                    reservationAction: J
                } = e,
                $ = void 0 === D || D,
                X = void 0 === K ? "sidebar" : K,
                ee = void 0 !== Z && Z,
                es = (0, l.z)(m.f),
                et = (0, C.d)(),
                en = (0, c.useContext)(v.a);
            W[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, x.b)(), W[0] = s) : s = W[0];
            let ei = (0, y.f)(s),
                ea = (0, l.x)(_.e, "2673474834");
            W[1] !== z || W[2] !== X || W[3] !== ea ? (t = (0, g.a)(ea && "sidebar" === X ? (0, T.g)(z) ?? "" : "") || null, W[1] = z, W[2] = X, W[3] = ea, W[4] = t) : t = W[4];
            let er = t;
            W[5] !== z || W[6] !== G ? (o = (0, g.a)(G ?? (0, T.e)(z) ?? "") || null, W[5] = z, W[6] = G, W[7] = o) : o = W[7];
            let el = o;
            W[8] !== z.website_url ? (u = (0, g.a)(z.website_url?.trim() ?? "") || null, W[8] = z.website_url, W[9] = u) : u = W[9];
            let eo = u;
            W[10] !== z.phone ? (p = z.phone?.trim() ? (0, g.a)(`tel:${z.phone.trim()}`) : null, W[10] = z.phone, W[11] = p) : p = W[11];
            let ec = p;
            W[12] !== z.service_providers ? (h = (0, T.h)(z.service_providers), W[12] = z.service_providers, W[13] = h) : h = W[13];
            let eu = h;
            W[14] !== es || W[15] !== $ || W[16] !== z.reservation_providers || W[17] !== ei || W[18] !== en || W[19] !== eu || W[20] !== er || W[21] !== et ? (b = $ && null != es && et?.shouldBlockExternalEgress === !1 && (et.canRequestQuote ?? !et.isReadOnly) && "restricted" !== en && ei && null == er && !z.reservation_providers?.some(Y) && eu.length > 0, W[14] = es, W[15] = $, W[16] = z.reservation_providers, W[17] = ei, W[18] = en, W[19] = eu, W[20] = er, W[21] = et, W[22] = b) : b = W[22];
            let ed = b;
            W[23] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, n.jsx)(d.a, {
                id: "chatgpt.localBusiness.reserve",
                defaultMessage: "Reserve"
            }), W[23] = f) : f = W[23], W[24] !== er ? (w = {
                key: a.d.CHATGPT_ENTITY_AFFORDANCE_RESERVE,
                href: er,
                label: f
            }, W[24] = er, W[25] = w) : w = W[25], W[26] === Symbol.for("react.memo_cache_sentinel") ? (N = (0, n.jsx)(d.a, {
                id: "chatgpt.localBusiness.directions",
                defaultMessage: "Directions"
            }), W[26] = N) : N = W[26], W[27] !== el ? (k = {
                key: a.d.CHATGPT_ENTITY_AFFORDANCE_DIRECTIONS,
                href: el,
                label: N
            }, W[27] = el, W[28] = k) : k = W[28], W[29] === Symbol.for("react.memo_cache_sentinel") ? (E = (0, n.jsx)(d.a, {
                id: "chatgpt.localBusiness.website",
                defaultMessage: "Website"
            }), W[29] = E) : E = W[29], W[30] !== eo ? (A = {
                key: a.d.CHATGPT_ENTITY_AFFORDANCE_WEBSITE,
                href: eo,
                label: E
            }, W[30] = eo, W[31] = A) : A = W[31], W[32] === Symbol.for("react.memo_cache_sentinel") ? (O = (0, n.jsx)(d.a, {
                id: "chatgpt.localBusiness.call",
                defaultMessage: "Call"
            }), W[32] = O) : O = W[32], W[33] !== ec ? (I = {
                key: a.d.CHATGPT_ENTITY_AFFORDANCE_CALL,
                href: ec,
                label: O
            }, W[33] = ec, W[34] = I) : I = W[34], W[35] !== w || W[36] !== k || W[37] !== A || W[38] !== I ? (S = [w, k, A, I].filter(H), W[35] = w, W[36] = k, W[37] = A, W[38] = I, W[39] = S) : S = W[39], W[40] !== ed || W[41] !== ee || W[42] !== J || W[43] !== S ? (P = S.slice(0, ee ? 0 : 3 - Number(ed) - Number(null != J)), W[40] = ed, W[41] = ee, W[42] = J, W[43] = S, W[44] = P) : P = W[44];
            let em = P;
            if (!ed && 0 === em.length && null == J) return null;
            W[45] !== X ? (R = e => (0, r.b)("no-drag relative flex cursor-interaction items-center justify-center rounded-full border after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] hover:after:bg-media-background/5 text-sm leading-4 font-medium whitespace-nowrap select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring", "sidebar" === X ? "h-9 px-5" : "h-7.5 flex-auto px-4", 0 === e ? "border-transparent bg-primary-solid text-primary-solid" : "border-default bg-transparent text-default"), W[45] = X, W[46] = R) : R = W[46];
            let ep = R;
            return W[47] !== ep || W[48] !== Q || W[49] !== z.id || W[50] !== ed || W[51] !== U || W[52] !== V || W[53] !== X || W[54] !== eu || W[55] !== et ? (M = ed && (0, n.jsx)(B.a, {
                analyticsMessageId: Q,
                businessId: "string" == typeof z.id ? z.id : void 0,
                ctaSurface: "hover" === X ? "map_card" : "business_sidebar",
                onAction: () => U?.(a.d.CHATGPT_ENTITY_AFFORDANCE_REQUEST_QUOTE),
                onInteractionOpenChange: V,
                providers: eu,
                trigger: (0, n.jsx)("button", {
                    className: ep(0),
                    type: "button",
                    children: (0, n.jsx)(B.b, {})
                }),
                turnContext: et
            }), W[47] = ep, W[48] = Q, W[49] = z.id, W[50] = ed, W[51] = U, W[52] = V, W[53] = X, W[54] = eu, W[55] = et, W[56] = M) : M = W[56], W[57] !== ep || W[58] !== em || W[59] !== ed || W[60] !== U || W[61] !== q || W[62] !== J ? (F = em.map((e, s) => (0, n.jsx)(j.a, {
                appearance: "button",
                className: ep(s + Number(ed) + Number(null != J)),
                href: e.href,
                initiator: "markdown_link_click",
                openTarget: q,
                onClick: () => U?.(e.key),
                children: e.label
            }, e.key)), W[57] = ep, W[58] = em, W[59] = ed, W[60] = U, W[61] = q, W[62] = J, W[63] = F) : F = W[63], W[64] !== J || W[65] !== M || W[66] !== F ? (L = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-wrap gap-2",
                children: [M, J, F]
            }), W[64] = J, W[65] = M, W[66] = F, W[67] = L) : L = W[67], L
        }

        function H(e) {
            return null != e.href
        }

        function Y(e) {
            return null != e.launcherPayload
        }

        function q(e) {
            let s, t, a, l, d, m = (0, i.c)(17),
                {
                    business: f,
                    linkRating: x,
                    shouldBlockExternalEgress: _
                } = e,
                N = (0, u.a)(),
                T = (0, w.a)(),
                k = (0, C.d)(),
                E = (0, c.useContext)(v.a),
                A = !_ && k?.shouldBlockExternalEgress !== !0 && "restricted" !== E,
                O = f.provider_logo_url_short?.trim() || f.provider_logo_url?.trim(),
                I = T && (f.provider_logo_dark_url_short?.trim() || f.provider_logo_dark_url?.trim()) || O,
                S = A && I ? (0, g.b)(I) : null;
            m[0] !== A || m[1] !== f.provider_url || m[2] !== x ? (s = (0, h.a)(f.provider_url?.trim() ?? ""), t = x && A && (0, o.d)(s), m[0] = A, m[1] = f.provider_url, m[2] = x, m[3] = s, m[4] = t) : (s = m[3], t = m[4]);
            let B = t,
                P = (0, y.f)(B && "1492523517"),
                R = P ? p.a : j.a,
                F = L[f.provider ?? ""] ?? f.provider ?? "";
            m[5] !== f.rating || m[6] !== N ? (a = null != f.rating ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(b.a, {
                    asset: M.a,
                    className: "size-3.5 shrink-0"
                }), (0, n.jsx)("span", {
                    children: N.formatNumber(f.rating, {
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 1
                    })
                })]
            }) : null, m[5] = f.rating, m[6] = N, m[7] = a) : a = m[7];
            let W = S ? (0, n.jsx)("img", {
                alt: F,
                className: (0, r.b)("w-auto max-w-18 shrink-0 object-contain", S.toLowerCase().includes("tripadvisor_ollie") ? "h-3" : "h-3.5"),
                src: S
            }) : L[f.provider ?? ""] ?? null;
            m[8] !== a || m[9] !== W ? (l = (0, n.jsxs)(n.Fragment, {
                children: [a, W]
            }), m[8] = a, m[9] = W, m[10] = l) : l = m[10];
            let D = l;
            return m[11] !== R || m[12] !== B || m[13] !== D || m[14] !== P || m[15] !== s ? (d = B ? (0, n.jsx)(R, {
                className: "inline-flex shrink-0 cursor-interaction items-center gap-1 hover:text-secondary",
                href: s,
                initiator: "markdown_link_click",
                openTarget: P ? "in-app-browser" : void 0,
                children: D
            }) : (0, n.jsx)("span", {
                className: "inline-flex shrink-0 items-center gap-1",
                children: D
            }), m[11] = R, m[12] = B, m[13] = D, m[14] = P, m[15] = s, m[16] = d) : d = m[16], d
        }

        function K(e) {
            let s, t, a, l, o, c = (0, i.c)(13),
                {
                    icon: u,
                    children: d,
                    truncate: m,
                    claimPreview: p
                } = e,
                h = void 0 !== p && p ? "py-2.5" : "py-2";
            c[0] !== h ? (s = (0, r.b)("flex min-h-11 items-center gap-4", h), c[0] = h, c[1] = s) : s = c[1], c[2] !== u ? (t = (0, n.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                children: u
            }), c[2] = u, c[3] = t) : t = c[3];
            let b = void 0 !== m && m && "truncate";
            return c[4] !== b ? (a = (0, r.b)("min-w-0 flex-1 text-base font-medium select-text", b), c[4] = b, c[5] = a) : a = c[5], c[6] !== d || c[7] !== a ? (l = (0, n.jsx)("span", {
                className: a,
                children: d
            }), c[6] = d, c[7] = a, c[8] = l) : l = c[8], c[9] !== s || c[10] !== t || c[11] !== l ? (o = (0, n.jsxs)("div", {
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
            u = t("Wf1j"),
            d = t("oyxz"),
            m = t("rEML"),
            p = t("ASxG"),
            h = t("rCC2"),
            b = t("HOLv"),
            f = t("bf6R"),
            g = t("Bbed"),
            v = t("yC2B"),
            x = t("WAdu"),
            y = t("OWtl"),
            _ = t("OMIV"),
            w = t("TUMj"),
            j = t("TJEh"),
            C = t("WFCQ"),
            N = t("FRPb"),
            T = t("Dh6n"),
            k = t("pJY9");
        let E = (0, g.a)(a.a),
            A = (0, g.a)(a.b, {
                suspendToParent: !0,
                errorFallback: e => {
                    let {
                        renderMetadata: s
                    } = e;
                    return s(!1, null)
                }
            }),
            O = (0, c.createContext)(null);

        function I(e) {
            let s, t, a, r = (0, i.c)(11),
                {
                    business: l,
                    children: u,
                    conversationId: d,
                    renderSidebar: m,
                    shouldBlockExternalEgress: p
                } = e,
                h = (0, o.x)(N.b, d),
                b = l ?? h?.business,
                f = (0, c.useContext)(x.a),
                g = (0, o.x)(_.e, "2778625748") && null != b;
            r[0] !== b || r[1] !== g || r[2] !== u || r[3] !== d ? (s = g ? (0, n.jsx)(c.Suspense, {
                fallback: u,
                children: (0, n.jsx)(A, {
                    business: b,
                    renderMetadata: (e, s) => (0, n.jsx)(O, {
                        value: {
                            business: b,
                            verified: e,
                            claimAction: s
                        },
                        children: u
                    }),
                    renderClaimButton: (e, s, t) => (0, n.jsx)(F, {
                        measure: null != t,
                        conversationId: d,
                        onClick: t ?? e,
                        request: s
                    }),
                    businessPreview: e => (0, n.jsx)(M, {
                        business: b,
                        layout: "claim-preview",
                        verified: e,
                        readOnly: !0
                    })
                })
            }) : u, r[0] = b, r[1] = g, r[2] = u, r[3] = d, r[4] = s) : s = r[4];
            let v = s,
                y = g && void 0 !== p && p ? "restricted" : f;
            return r[5] !== v || r[6] !== m ? (t = m(v), r[5] = v, r[6] = m, r[7] = t) : t = r[7], r[8] !== y || r[9] !== t ? (a = (0, n.jsx)(x.a, {
                value: y,
                children: t
            }), r[8] = y, r[9] = t, r[10] = a) : a = r[10], a
        }
        let S = p.object({
            layout: p.enum(["one-line", "two-lines"]).nullable().optional(),
            metadata: p.object({
                map_url: p.string().nullable().optional()
            }).nullable().optional()
        }).loose();

        function B(e) {
            let s, t, a, r = (0, i.c)(12),
                {
                    reference: l,
                    actions: o,
                    claimActions: c
                } = e;
            r[0] !== l ? (s = (0, j.c)(l), r[0] = l, r[1] = s) : s = r[1];
            let u = s;
            r[2] !== l ? (t = S.safeParse(l), r[2] = l, r[3] = t) : t = r[3];
            let d = t;
            if (null == u) {
                let e;
                return r[4] !== o ? (e = null == o ? null : (0, n.jsx)(n.Fragment, {
                    children: o
                }), r[4] = o, r[5] = e) : e = r[5], e
            }
            let m = d.success ? d.data.metadata?.map_url : null,
                p = (d.success ? d.data.layout : null) ?? "sidebar";
            return r[6] !== o || r[7] !== u || r[8] !== c || r[9] !== m || r[10] !== p ? (a = (0, n.jsx)(P, {
                actions: o,
                business: u,
                directionsUrl: m,
                layout: p,
                renderActions: !1,
                claimActions: c
            }), r[6] = o, r[7] = u, r[8] = c, r[9] = m, r[10] = p, r[11] = a) : a = r[11], a
        }

        function P(e) {
            let s, t = (0, i.c)(20),
                a = (0, c.useContext)(O);
            if ((0, o.x)(_.e, "2778625748") && !e.readOnly && !e.claimActions && (null == e.layout || "sidebar" === e.layout)) {
                let s, i, r, l, o;
                if (null != a && (null != a.business.entity_lookup_id && null != e.business.entity_lookup_id ? a.business.entity_lookup_id === e.business.entity_lookup_id : "string" == typeof a.business.id && a.business.id === e.business.id || a.business.name.trim().toLowerCase() === e.business.name.trim().toLowerCase())) {
                    let s;
                    return t[0] !== e || t[1] !== a.claimAction || t[2] !== a.verified ? (s = (0, n.jsx)(M, {
                        ...e,
                        verified: a.verified,
                        claimAction: a.claimAction
                    }), t[0] = e, t[1] = a.claimAction, t[2] = a.verified, t[3] = s) : s = t[3], s
                }
                return t[4] !== e ? (s = (0, n.jsx)(M, {
                    ...e
                }), t[4] = e, t[5] = s) : s = t[5], t[6] !== e ? (i = (s, t) => (0, n.jsx)(M, {
                    ...e,
                    verified: s,
                    claimAction: t
                }), t[6] = e, t[7] = i) : i = t[7], t[8] !== e.business || t[9] !== e.onAction ? (r = s => (0, n.jsx)(M, {
                    business: e.business,
                    onAction: e.onAction,
                    layout: "claim-preview",
                    verified: s,
                    readOnly: !0
                }), t[8] = e.business, t[9] = e.onAction, t[10] = r) : r = t[10], t[11] !== e.business || t[12] !== i || t[13] !== r ? (l = (0, n.jsx)(A, {
                    business: e.business,
                    renderMetadata: i,
                    renderClaimButton: R,
                    businessPreview: r
                }), t[11] = e.business, t[12] = i, t[13] = r, t[14] = l) : l = t[14], t[15] !== s || t[16] !== l ? (o = (0, n.jsx)(c.Suspense, {
                    fallback: s,
                    children: l
                }), t[15] = s, t[16] = l, t[17] = o) : o = t[17], o
            }
            return t[18] !== e ? (s = (0, n.jsx)(M, {
                ...e
            }), t[18] = e, t[19] = s) : s = t[19], s
        }

        function R(e, s, t) {
            return (0, n.jsx)(F, {
                measure: null != t,
                onClick: t ?? e,
                request: s
            })
        }

        function M(e) {
            let s, t, a, r, l, o, u = (0, i.c)(23);
            u[0] !== e ? ({
                claimActions: s,
                ...t
            } = e, u[0] = e, u[1] = s, u[2] = t) : (s = u[1], t = u[2]);
            let [d, m] = (0, c.useState)(!1), [p, h] = (0, c.useState)(!1), b = (0, w.d)(), f = (0, c.useContext)(x.a), {
                business: g,
                onAction: v
            } = t, y = t.verified || p;
            return u[3] !== s || u[4] !== p || u[5] !== t.isOptimistic || u[6] !== t.readOnly ? (a = t.isOptimistic || t.readOnly || p || null == s ? null : (0, n.jsx)(F, {
                onClick: () => m(!0)
            }), u[3] = s, u[4] = p, u[5] = t.isOptimistic, u[6] = t.readOnly, u[7] = a) : a = u[7], u[8] !== t.claimAction || u[9] !== a ? (r = (0, n.jsxs)(n.Fragment, {
                children: [t.claimAction, a]
            }), u[8] = t.claimAction, u[9] = a, u[10] = r) : r = u[10], u[11] !== g || u[12] !== s || u[13] !== d || u[14] !== f || u[15] !== v || u[16] !== b ? (l = d && null != s && (0, n.jsx)(E, {
                business: {
                    ...g,
                    photoUrl: "restricted" === f || b?.shouldBlockExternalEgress ? void 0 : (0, j.f)(g, b?.conversationType === "sidebar" ? b.contentReferences : void 0) ?? void 0
                },
                businessPreview: e => (0, n.jsx)(P, {
                    business: g,
                    onAction: v,
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
                        return "success" === e.step && h(!0), e
                    } : void 0,
                    onCheckClaim: s.onCheckClaim ? async () => {
                        let e = await s.onCheckClaim?.() ?? {
                            step: "review"
                        };
                        return "success" === e.step && h(!0), e
                    } : void 0,
                    onManageProfile: s.onManageProfile ? e => {
                        m(!1), s.onManageProfile?.(e)
                    } : void 0
                },
                onClose: () => m(!1)
            }), u[11] = g, u[12] = s, u[13] = d, u[14] = f, u[15] = v, u[16] = b, u[17] = l) : l = u[17], u[18] !== t || u[19] !== y || u[20] !== r || u[21] !== l ? (o = (0, n.jsx)(C.d, {
                ...t,
                verified: y,
                claimAction: r,
                dialog: l
            }), u[18] = t, u[19] = y, u[20] = r, u[21] = l, u[22] = o) : o = u[22], o
        }

        function F(e) {
            let s, t, a, p, g, x, _, j, N = (0, i.c)(37),
                {
                    measure: E,
                    conversationId: A,
                    onClick: O,
                    request: I
                } = e,
                S = (0, o.y)(y.a),
                B = (0, w.d)(),
                P = (0, c.useContext)(m.i),
                R = (0, u.a)();
            N[0] !== R.locale ? (s = (0, v.a)(R.locale), N[0] = R.locale, N[1] = s) : s = N[1];
            let M = s;
            if (I?.status === "under_review") {
                let e, s, t, i;
                return N[2] !== O ? (e = () => O?.(), N[2] = O, N[3] = e) : e = N[3], N[4] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, n.jsx)(b.a, {
                    className: "text-tertiary",
                    asset: k.a
                }), N[4] = s) : s = N[4], N[5] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(C.c, {
                    icon: s,
                    children: (0, n.jsx)("span", {
                        className: "text-secondary",
                        children: (0, n.jsx)(d.a, {
                            id: "chatgpt.localBusiness.claim.status.under_review",
                            defaultMessage: "Your claim is under review"
                        })
                    })
                }), N[5] = t) : t = N[5], N[6] !== M || N[7] !== e ? (i = (0, n.jsx)("button", {
                    dir: M,
                    type: "button",
                    onClick: e,
                    className: "w-full cursor-interaction text-start focus-visible:outline-ring",
                    children: t
                }), N[6] = M, N[7] = e, N[8] = i) : i = N[8], i
            }
            let F = I && "in_progress" !== I.status ? "text-default" : "text-business-claim";
            N[9] !== F ? (t = (0, l.b)("flex min-h-12 w-full cursor-interaction items-center gap-4 py-3 text-start text-base font-medium select-none hover:underline focus-visible:outline-ring", F), N[9] = F, N[10] = t) : t = N[10], N[11] !== A || N[12] !== E || N[13] !== I || N[14] !== P || N[15] !== S || N[16] !== B?.conversationId ? (a = E && !I ? (0, h.b)(S, (0, r.j)(A ?? B?.conversationId, P?.location.pathname)) : void 0, N[11] = A, N[12] = E, N[13] = I, N[14] = P, N[15] = S, N[16] = B?.conversationId, N[17] = a) : a = N[17], N[18] !== E || N[19] !== O || N[20] !== I ? (p = e => O?.(E && !I ? (0, r.d)(e.currentTarget) : void 0), N[18] = E, N[19] = O, N[20] = I, N[21] = p) : p = N[21];
            let L = I?.status === "needs_information",
                W = null != I && "needs_information" !== I.status;
            N[22] !== L || N[23] !== W ? (g = (0, l.b)({
                "text-warning": L,
                "text-tertiary": W
            }), N[22] = L, N[23] = W, N[24] = g) : g = N[24];
            let D = I?.status === "needs_information" ? T.a : k.a;
            return N[25] !== D || N[26] !== g ? (x = (0, n.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                children: (0, n.jsx)(b.a, {
                    className: g,
                    asset: D
                })
            }), N[25] = D, N[26] = g, N[27] = x) : x = N[27], N[28] !== I ? (_ = I ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsxs)("span", {
                    className: "min-w-0 flex-1",
                    children: [(0, n.jsx)("span", {
                        className: "block",
                        children: (0, n.jsx)(d.a, {
                            id: "chatgpt.localBusiness.claim.status.title",
                            defaultMessage: "{status, select, in_progress {Finish verifying your business} needs_information {Your claim needs more information} under_review {Claim under review} other {Claim started}}",
                            values: {
                                status: I.status
                            }
                        })
                    }), (0, n.jsx)("span", {
                        className: "block text-sm font-normal text-secondary",
                        children: (0, n.jsx)(d.a, {
                            id: "chatgpt.localBusiness.claim.status.subtitle",
                            defaultMessage: "{status, select, in_progress {Continue your business verification} needs_information {Review what’s needed to continue} under_review {Your claim is being reviewed} other {View your claim and next steps}}",
                            values: {
                                status: I.status
                            }
                        })
                    })]
                }), (0, n.jsx)(f.fc, {
                    className: "rtl:rotate-180"
                })]
            }) : (0, n.jsx)(d.a, {
                id: "chatgpt.localBusiness.claim.button.label",
                defaultMessage: "Claim this business"
            }), N[28] = I, N[29] = _) : _ = N[29], N[30] !== M || N[31] !== x || N[32] !== _ || N[33] !== t || N[34] !== a || N[35] !== p ? (j = (0, n.jsxs)("button", {
                className: t,
                dir: M,
                type: "button",
                ref: a,
                onClick: p,
                children: [x, _]
            }), N[30] = M, N[31] = x, N[32] = _, N[33] = t, N[34] = a, N[35] = p, N[36] = j) : j = N[36], j
        }
        t.d(s, {
            ChatGptLocalBusinessMetadata: () => P,
            a: () => F,
            b: () => C.a,
            c: () => I,
            d: () => B,
            e: () => C.b,
            f: () => C.c
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
                        business: u,
                        showHourDetail: d
                    } = e,
                    m = (0, a.a)();
                if (u.is_closed_permanently) {
                    let e;
                    return c[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("span", {
                        className: "text-danger",
                        children: (0, n.jsx)(r.a, {
                            id: "chatgpt.localBusiness.closedPermanently",
                            defaultMessage: "Permanently closed"
                        })
                    }), c[0] = e) : e = c[0], e
                }
                let p = u.is_open;
                if (null == p) return null;
                let h = u.next_open_hour;
                if (!d || null == h) {
                    let e;
                    return c[1] !== p ? (e = p ? (0, n.jsx)("span", {
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
                    }), c[1] = p, c[2] = e) : e = c[2], e
                }
                let b = u.local_day ?? new Date().getDay(),
                    f = null != u.local_day && p && h.end <= h.start ? (h.day + 1) % 7 : h.day,
                    g = p ? h.end : h.start;
                if (c[3] !== m || c[4] !== g) {
                    let e, t;
                    c[6] !== g ? (e = Number.parseInt(g.slice(0, 2), 10), c[6] = g, c[7] = e) : e = c[7], c[8] !== g ? (t = Number.parseInt(g.slice(2, 4), 10), c[8] = g, c[9] = t) : t = c[9], s = m.formatTime(new Date(0, 0, 0, e, t), {
                        hour: "numeric",
                        minute: "2-digit"
                    }), c[3] = m, c[4] = g, c[5] = s
                } else s = c[5];
                let v = s;
                c[10] !== p ? (t = e => (0, n.jsx)("span", {
                    className: p ? "text-success" : "text-danger",
                    children: e
                }), c[10] = p, c[11] = t) : t = c[11];
                let x = t;
                if (f === b) {
                    let e;
                    return c[12] !== p || c[13] !== x || c[14] !== v ? (e = p ? (0, n.jsx)("span", {
                        children: (0, n.jsx)(r.a, {
                            id: "chatgpt.localBusiness.openUntilTime",
                            defaultMessage: "<status>Open</status> until {time}",
                            values: {
                                status: x,
                                time: v
                            }
                        })
                    }) : (0, n.jsx)("span", {
                        children: (0, n.jsx)(r.a, {
                            id: "chatgpt.localBusiness.closedUntilTime",
                            defaultMessage: "<status>Closed</status> until {time}",
                            values: {
                                status: x,
                                time: v
                            }
                        })
                    }), c[12] = p, c[13] = x, c[14] = v, c[15] = e) : e = c[15], e
                }
                c[16] !== m || c[17] !== f ? (l = m.formatDate(new Date(0, 0, f), {
                    weekday: "short"
                }), c[16] = m, c[17] = f, c[18] = l) : l = c[18];
                let y = l;
                return c[19] !== y || c[20] !== p || c[21] !== x || c[22] !== v ? (o = p ? (0, n.jsx)("span", {
                    children: (0, n.jsx)(r.a, {
                        id: "chatgpt.localBusiness.openUntilDayTime",
                        defaultMessage: "<status>Open</status> until {day} {time}",
                        values: {
                            status: x,
                            day: y,
                            time: v
                        }
                    })
                }) : (0, n.jsx)("span", {
                    children: (0, n.jsx)(r.a, {
                        id: "chatgpt.localBusiness.closedUntilDayTime",
                        defaultMessage: "<status>Closed</status> until {day} {time}",
                        values: {
                            status: x,
                            day: y,
                            time: v
                        }
                    })
                }), c[19] = y, c[20] = p, c[21] = x, c[22] = v, c[23] = o) : o = c[23], o
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
            u = t("dQRk"),
            d = t("WOVT"),
            m = t("TJEh");
        let p = (0, a.v)(l.a, e => null),
            h = (0, a.d)(l.a, (e, s) => {
                let {
                    get: t
                } = s, n = t(p, e);
                if (null == n) return null;
                let i = t(u.N, e);
                return null != i && Object.values(i).some(e => null != e.message && (0, o.c)(e.message).some(e => {
                    let s = (0, m.c)(e);
                    if (null == s) return !1;
                    let t = ("string" == typeof e.name ? e.name : s.name).trim().toLowerCase();
                    return s.id === n.business.id || "" !== t && t === n.business.name.trim().toLowerCase()
                })) ? null : n.business
            }),
            b = (0, a.d)(l.a, (e, s) => {
                let {
                    get: t
                } = s, n = t(c.e, e);
                if (null == n) return null;
                let i = t(u.N, e);
                return null != i && Object.values(i).some(e => null != e.message && (0, o.c)(e.message).some(e => null == e.layout && (0, d.c)(e)?.canonical_id === n.canonical_id)) ? null : n
            });
        t.d(s, {}, {
            a: function(e) {
                return (s, t) => (0, c.g)(s, t, {
                    onCancel: e => {
                        s.set(p, e, null)
                    },
                    onError: e => {
                        s.set(p, e, null)
                    },
                    onStart: n => {
                        s.set(p, n, {
                            business: e,
                            category: t.category,
                            messageId: t.messageId,
                            sourceConversationId: t.sourceConversationId
                        })
                    }
                })
            },
            b: p,
            c: b,
            d: h,
            e: function(e, s, t, n) {
                let a = e.get(p, s),
                    l = e.get(c.c, s);
                if (null == a && null == l) return;
                let h = e.get(c.c, t);
                if (null != h && h !== n && !i()({
                        ...h,
                        entityKnowledgeId: null,
                        entityKnowledgePending: !1
                    }, {
                        ...n,
                        entityKnowledgeId: null,
                        entityKnowledgePending: !1
                    }, (e, s, t) => void 0 === t ? void 0 : Object.is(e, s))) return;
                let b = Object.values(e.get(u.N, s) ?? {}).flatMap(e => null == e.message ? [] : (0, o.c)(e.message)),
                    f = b.filter(e => "entity_metadata" === e.type && null == e.layout),
                    g = l?.businessPreview ?? a?.business;
                if (null != g) {
                    let s = f.map(m.c).findLast(e => null != e && (e.id === g.id || e.name.trim().toLowerCase() === g.name.trim().toLowerCase())) ?? a?.business;
                    null != s && e.set(p, t, {
                        category: l?.category ?? n.category,
                        messageId: n.messageId,
                        sourceConversationId: n.sourceConversationId,
                        business: s
                    })
                }
                if (null != l) {
                    let s = f.map(d.c).findLast(e => null != e && e.canonical_id === l.businessProfile?.canonical_id) ?? l.businessProfile;
                    e.set(c.c, t, {
                        ...l,
                        entityKnowledgeId: h?.entityKnowledgeId,
                        entityKnowledgePending: h?.entityKnowledgePending,
                        businessProfile: s
                    }), e.set(c.e, t, s ?? null)
                }
                let v = b.find(e => "image_group" === e.type && ("full_width" === e.layout || 0 === e.start_idx));
                e.set(c.b, t, (null == v ? null : (0, r.u)(v, 0)[0]) ?? e.get(c.b, s))
            }
        })
    }),
    ynn3: (function(e, s, t) {
        t.d(s, {
            a: () => k,
            b: () => A
        });
        var n = t("ABep"),
            i = t("QosV"),
            a = t("tBe6"),
            r = t("Q840"),
            l = t("Zqzr"),
            o = t("zd8w"),
            c = t("Wf1j"),
            u = t("oyxz"),
            d = t("ASxG"),
            m = t("bqtn"),
            p = t("bf6R"),
            h = t("E6P3"),
            b = t("zSQm"),
            f = t("WAdu"),
            g = t("yGJW"),
            v = t("OWtl"),
            x = t("WFY2"),
            y = t("a2hX"),
            _ = t("f3BX"),
            w = t("OOaz"),
            j = t("rVXE"),
            C = e => (0, n.jsx)("svg", {
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
        let N = {
                thumbtack: "Thumbtack",
                yelp: "Yelp"
            },
            T = d.string().trim().min(1).transform(b.b).catch(void 0);

        function k(e) {
            let s, t, u, d, b, x, k, A, B, P, R, M, F, L, W, D = (0, i.c)(47),
                {
                    analyticsMessageId: Q,
                    businessId: z,
                    ctaSurface: G,
                    onAction: U,
                    onInteractionOpenChange: V,
                    providers: H,
                    trigger: Y,
                    turnContext: q
                } = e,
                K = (0, r.y)(v.a),
                Z = (0, c.a)(),
                J = (0, o.useContext)(f.a);
            D[0] !== J || D[1] !== Z || D[2] !== q.shouldBlockExternalEgress ? (s = e => ({
                provider: e,
                logoUrl: !1 === q.shouldBlockExternalEgress && "restricted" !== J ? T.parse(e.provider_logo) : void 0,
                label: e.provider_name?.trim() || N[e.provider?.trim().toLowerCase() ?? ""] || e.provider?.trim() || Z.formatMessage({
                    id: "chatgpt.localBusiness.quoteProvider",
                    defaultMessage: "Quote provider"
                })
            }), D[0] = J, D[1] = Z, D[2] = q.shouldBlockExternalEgress, D[3] = s) : s = D[3], D[4] !== Z ? (t = (e, s) => e.label.localeCompare(s.label, Z.locale, {
                sensitivity: "base"
            }), D[4] = Z, D[5] = t) : t = D[5];
            let $ = H.map(s).sort(t),
                X = (0, o.useRef)(!1),
                ee = (0, o.useRef)(!1);
            D[6] !== V ? (u = () => {
                X.current = !1, ee.current = !1, V?.(!1)
            }, D[6] = V, D[7] = u) : u = D[7];
            let es = (0, o.useEffectEvent)(u);
            D[8] !== es ? (d = () => () => es(), D[8] = es, D[9] = d) : d = D[9], D[10] === Symbol.for("react.memo_cache_sentinel") ? (b = [], D[10] = b) : b = D[10], (0, o.useLayoutEffect)(d, b), D[11] === Symbol.for("react.memo_cache_sentinel") ? (x = new Set, D[11] = x) : x = D[11];
            let et = (0, o.useRef)(x),
                en = !1 !== q.trackShownImpressions,
                ei = q.browserConversationId ?? q.conversationId;
            D[12] !== Q || D[13] !== ei || D[14] !== K || D[15] !== q.hostId || D[16] !== q.messageId ? (k = {
                launch: (e, s, t) => {
                    if ((0, w.e)(ei)) throw Error("Wait for this conversation to finish saving, then try again.");
                    return (0, _.c)({
                        scope: K,
                        hostId: q.hostId,
                        chatGptConversationId: ei,
                        payload: e,
                        sourceMessageId: Q ?? q.messageId,
                        signal: s,
                        onTracking: t
                    })
                },
                onError: E
            }, D[12] = Q, D[13] = ei, D[14] = K, D[15] = q.hostId, D[16] = q.messageId, D[17] = k) : k = D[17];
            let ea = (0, j.a)(k);
            D[18] !== Q || D[19] !== z || D[20] !== ei || D[21] !== G || D[22] !== K || D[23] !== en || D[24] !== q.messageId ? (A = (e, s) => {
                let t = e.launcherPayload.appUri,
                    n = O(e);
                if ("show" === s) {
                    if (!en || et.current.has(n)) return;
                    et.current.add(n)
                }
                try {
                    (0, g.a)(K, a.d, {
                        action: "show" === s ? "CHATGPT_CONTENT_REFERENCE_ACTION_SHOW" : "CHATGPT_CONTENT_REFERENCE_ACTION_CLICK",
                        eventType: "show" === s ? "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_SHOWN" : "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_CLICKED",
                        businessId: z ?? void 0,
                        connectorId: t.startsWith("connectors://") ? t.slice(13) : t,
                        contentReferenceType: "map_card" === G ? "map" : "entity_metadata",
                        conversationId: ei,
                        ctaSurface: G,
                        ctaType: "service",
                        linkType: "local_business_service",
                        messageId: Q ?? q.messageId,
                        sectionLocation: "response",
                        serviceProvider: e.provider ?? void 0,
                        serviceActionType: e.action_type ?? void 0
                    })
                } catch {}
            }, D[18] = Q, D[19] = z, D[20] = ei, D[21] = G, D[22] = K, D[23] = en, D[24] = q.messageId, D[25] = A) : A = D[25];
            let er = A,
                el = 1 === H.length ? H[0] : void 0;
            D[26] !== el ? (B = null == el ? null : O(el), D[26] = el, D[27] = B) : B = D[27];
            let eo = B;
            D[28] !== el || D[29] !== er ? (P = () => {
                null != el && er(el, "show")
            }, D[28] = el, D[29] = er, D[30] = P) : P = D[30];
            let ec = (0, o.useEffectEvent)(P);
            D[31] !== eo || D[32] !== ec ? (R = () => {
                null != eo && ec()
            }, D[31] = eo, D[32] = ec, D[33] = R) : R = D[33], D[34] !== eo || D[35] !== en ? (M = [eo, en], D[34] = eo, D[35] = en, D[36] = M) : M = D[36], (0, o.useEffect)(R, M);
            let eu = e => {
                er(e, "click"), U?.(), ee.current = !0, V?.(!0), ea.launch(e.launcherPayload)
            };
            if (0 === H.length) return null;
            let ed = null != el ? (0, n.jsx)(S, {
                trigger: Y,
                onClick: () => eu(el)
            }) : (0, n.jsx)(I, {
                contentWidth: "menuWide",
                onOpenChange: e => {
                    if (X.current = e, V?.(e || ee.current), e)
                        for (let e of H) er(e, "show")
                },
                size: "action",
                triggerButton: Y,
                children: $.map(e => {
                    let {
                        provider: s,
                        label: t,
                        logoUrl: i
                    } = e, a = s.provider?.trim().toLowerCase() === "thumbtack" ? (0, n.jsx)(C, {
                        className: "size-5 text-default",
                        "aria-hidden": !0,
                        focusable: "false"
                    }) : (0, n.jsx)(p.Wg, {
                        className: "text-secondary"
                    });
                    return (0, n.jsx)(m.c.Item, {
                        leftIcon: null == i ? a : (0, n.jsx)(h.a, {
                            className: "size-5 rounded-sm",
                            alt: "",
                            fallback: a,
                            src: i
                        }, i),
                        onClick: () => eu(s),
                        children: t
                    }, O(s))
                })
            });
            return D[37] !== ei || D[38] !== ea || D[39] !== V || D[40] !== q.hostId ? (F = null == ea.dialog ? null : (0, n.jsx)(y.EcosystemWidgetDialog, {
                conversationId: (0, l.Se)(ei),
                hostId: q.hostId,
                onClose: () => {
                    ea.close(), ee.current = !1, V?.(X.current)
                },
                state: ea.dialog
            }), D[37] = ei, D[38] = ea, D[39] = V, D[40] = q.hostId, D[41] = F) : F = D[41], D[42] !== F ? (L = (0, n.jsx)(n.Fragment, {
                children: F
            }), D[42] = F, D[43] = L) : L = D[43], D[44] !== ed || D[45] !== L ? (W = (0, n.jsxs)(n.Fragment, {
                children: [ed, L]
            }), D[44] = ed, D[45] = L, D[46] = W) : W = D[46], W
        }

        function E(e) {
            x.a.error("ChatGPT entity quote launch failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function A() {
            let e, s = (0, i.c)(1);
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(u.a, {
                id: "chatgpt.localBusiness.getQuote",
                defaultMessage: "Get Quote"
            }), s[0] = e) : e = s[0], e
        }

        function O(e) {
            return JSON.stringify([e.provider, e.provider_business_id, e.launcherPayload.appUri])
        }

        function I(e) {
            let s, t, a, r, l, c, u = (0, i.c)(11);
            u[0] !== e ? ({
                onOpenChange: s,
                ...t
            } = e, u[0] = e, u[1] = s, u[2] = t) : (s = u[1], t = u[2]), u[3] !== s ? (a = () => s?.(!1), u[3] = s, u[4] = a) : a = u[4];
            let d = (0, o.useEffectEvent)(a);
            return u[5] !== d ? (r = () => () => d(), u[5] = d, u[6] = r) : r = u[6], u[7] === Symbol.for("react.memo_cache_sentinel") ? (l = [], u[7] = l) : l = u[7], (0, o.useLayoutEffect)(r, l), u[8] !== s || u[9] !== t ? (c = (0, n.jsx)(m.a, {
                ...t,
                onOpenChange: s
            }), u[8] = s, u[9] = t, u[10] = c) : c = u[10], c
        }

        function S(e) {
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
                        launch: u,
                        onError: d
                    } = e,
                    m = (0, i.useRef)(null);
                c[0] === Symbol.for("react.memo_cache_sentinel") ? (s = () => () => {
                    m.current?.controller.abort()
                }, t = [], c[0] = s, c[1] = t) : (s = c[0], t = c[1]), (0, i.useEffect)(s, t);
                let [p, h] = (0, i.useState)(null);
                c[2] !== u || c[3] !== d ? (r = async e => {
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
                    h({
                        kind: "loading",
                        nonModal: !0
                    });
                    try {
                        let i = await u(e, n, e => {
                            s = e, n.aborted || h({
                                kind: "loading",
                                nonModal: !0,
                                tracking: s
                            })
                        });
                        t.pending = !1, n.aborted || h({
                            kind: "ready",
                            result: i
                        })
                    } catch (e) {
                        t.pending = !1, !n.aborted && ((0, a.d)(e) || d?.(e), n.aborted || h({
                            kind: "error",
                            error: e,
                            tracking: s
                        }))
                    }
                }, c[2] = u, c[3] = d, c[4] = r) : r = c[4];
                let b = r;
                return c[5] === Symbol.for("react.memo_cache_sentinel") ? (l = () => {
                    m.current?.controller.abort(), m.current = null, h(null)
                }, c[5] = l) : l = c[5], c[6] !== p || c[7] !== b ? (o = {
                    close: l,
                    dialog: p,
                    launch: b
                }, c[6] = p, c[7] = b, c[8] = o) : o = c[8], o
            }
        })
    }),
    WQMB: (function(e, s, t) {
        t.d(s, {}, {
            a: async function() {
                return (await Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(877700), t.e(893175), t.e(758787), t.e(4021), t.e(136891)]).then(t.bind(t, "Ctl0"))).BusinessClaimFlowWithRecovery
            },
            b: async function() {
                return (await Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(877700), t.e(963703), t.e(564979), t.e(518621), t.e(893175), t.e(758787), t.e(4021), t.e(411347), t.e(437135)]).then(t.bind(t, "wVZg"))).BusinessClaimSurfaceWithRecovery
            }
        })
    }),
    v1r0: (function(e, s, t) {
        var n = t("ASxG");
        let i = n.strictObject({
                version: n.literal(1),
                delivery: n.enum(["none", "paid"])
            }),
            a = n.strictObject({
                version: n.literal(1),
                delivery: n.literal("free"),
                scope: n.literal("all_orders")
            }),
            r = n.strictObject({
                version: n.literal(1),
                delivery: n.literal("free"),
                scope: n.literal("minimum_order"),
                minimum_order_amount: n.string(),
                currency: n.string().nullable()
            }),
            l = n.strictObject({
                version: n.literal(1),
                returns: n.literal("none")
            }),
            o = n.strictObject({
                version: n.literal(1),
                returns: n.enum(["fees", "free"]),
                window_days: n.number().nullable()
            }),
            c = n.strictObject({
                version: n.literal(1),
                returns: n.enum(["fees", "free"]),
                window: n.literal("unlimited")
            }),
            u = n.union([i, a, r.extend({
                minimum_order_amount: n.string().regex(/^(?:\d+(?:\.\d*)?|\.\d+)$/).refine(e => Number.isFinite(Number(e)) && Number(e) > 0),
                currency: n.string().regex(/^[A-Z]{3}$/)
            })]),
            d = n.union([l, o.extend({
                window_days: n.number().int().positive()
            }), c]),
            m = n.union([n.strictObject({
                version: n.literal(1),
                delivery: n.null()
            }), i, a, n.strictObject({
                version: n.literal(1),
                delivery: n.literal("free"),
                scope: n.null()
            }), r]),
            p = n.union([n.strictObject({
                version: n.literal(1),
                returns: n.null()
            }), l, o, c]);
        t.d(s, {}, {
            a: m,
            b: u,
            c: [14, 30, 45, 90],
            d: p,
            e: d
        })
    })
};