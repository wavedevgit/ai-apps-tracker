export const __rspack_esm_ids = [502948];
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
            u = t("QJ8c"),
            d = t("mVBh");

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
    Csob: (function(e, s, t) {
        t.d(s, {
            a: () => ei,
            b: () => ec,
            c: () => Z,
            ChatGptLocalBusinessMetadata: () => ee,
            d: () => $,
            e: () => ea,
            f: () => ep
        });
        var n = t("ABep"),
            i = t("QosV"),
            a = t("WQMB"),
            r = t("zGRL"),
            l = t("EA6X"),
            o = t("on57"),
            c = t("BolX"),
            u = t("fDDa"),
            d = t("zd8w"),
            m = t("Wf1j"),
            p = t("oyxz"),
            h = t("jqIZ"),
            b = t("ASxG"),
            f = t("Cslg"),
            g = t("rCC2"),
            v = t("ZtSy"),
            x = t("k9qd"),
            y = t("HOLv"),
            _ = t("bf6R"),
            w = t("Bbed"),
            j = t("zSQm"),
            C = t("WAdu"),
            N = t("HwRo"),
            T = t("OWtl"),
            k = t("hZax"),
            E = t("OMIV"),
            A = t("a6Zv"),
            I = t("KDax"),
            S = t("TUMj"),
            B = t("T2J5"),
            O = t("TJEh"),
            P = t("PUeQ"),
            R = t("A9vz");

        function M(e) {
            let s, t, a, r, l, c = (0, i.c)(19),
                {
                    business: u,
                    claimPreview: h
                } = e,
                b = void 0 !== h && h,
                f = (0, m.a)(),
                g = (0, d.useId)(),
                [v, x] = (0, d.useState)(!1),
                w = !!u.hours?.length,
                j = null != u.is_open || u.is_closed_permanently;
            if (!w && !j) return null;
            c[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, n.jsx)(y.a, {
                asset: R.a,
                className: "shrink-0"
            }), c[0] = s) : s = c[0], c[1] !== u || c[2] !== j ? (t = (0, n.jsxs)(n.Fragment, {
                children: [s, (0, n.jsx)("span", {
                    className: "min-w-0 flex-1 text-base font-medium",
                    children: j ? (0, n.jsx)(P.a, {
                        business: u,
                        showHourDetail: !0
                    }) : (0, n.jsx)(p.a, {
                        id: "chatgpt.localBusiness.hours.label",
                        defaultMessage: "Hours"
                    })
                })]
            }), c[1] = u, c[2] = j, c[3] = t) : t = c[3];
            let C = t;
            return c[4] !== b || c[5] !== v || c[6] !== w || c[7] !== g || c[8] !== C ? (a = w ? (0, n.jsxs)("button", {
                type: "button",
                "aria-controls": g,
                "aria-expanded": v,
                className: (0, o.b)("flex min-h-11 w-full cursor-interaction items-center gap-4 text-start select-none hover:bg-secondary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset", b ? "py-2.5" : "py-2"),
                onClick: () => x(!v),
                children: [C, (0, n.jsx)(_.ac, {
                    className: (0, o.b)("text-secondary", v && "rotate-180")
                })]
            }) : (0, n.jsx)("div", {
                className: (0, o.b)("flex min-h-11 items-center gap-4", b ? "py-2.5" : "py-2"),
                children: C
            }), c[4] = b, c[5] = v, c[6] = w, c[7] = g, c[8] = C, c[9] = a) : a = c[9], c[10] !== u.hours || c[11] !== v || c[12] !== w || c[13] !== f || c[14] !== g ? (r = w && (0, n.jsx)("dl", {
                id: g,
                hidden: !v,
                className: "ms-10 pb-2 text-sm select-text",
                children: [1, 2, 3, 4, 5, 6, 0].map(e => {
                    let s = u.hours?.filter(s => s.day === e).sort(F);
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
                                children: (0, n.jsx)(p.a, {
                                    id: "chatgpt.localBusiness.hours.interval",
                                    defaultMessage: "{start} – {end}",
                                    values: {
                                        start: D(f, e.start),
                                        end: D(f, e.end)
                                    }
                                })
                            }, s)) : (0, n.jsx)(p.a, {
                                id: "chatgpt.localBusiness.hours.closed",
                                defaultMessage: "Closed"
                            })
                        })]
                    }, e)
                })
            }), c[10] = u.hours, c[11] = v, c[12] = w, c[13] = f, c[14] = g, c[15] = r) : r = c[15], c[16] !== a || c[17] !== r ? (l = (0, n.jsxs)("div", {
                children: [a, r]
            }), c[16] = a, c[17] = r, c[18] = l) : l = c[18], l
        }

        function F(e, s) {
            return e.start.localeCompare(s.start)
        }

        function D(e, s) {
            return e.formatTime(new Date(Date.UTC(2026, 0, 4, Number(s.slice(0, 2)), Number(s.slice(2, 4)))), {
                hour: "numeric",
                minute: "2-digit",
                timeZone: "UTC"
            })
        }
        var L = t("FRPb"),
            W = t("ynn3"),
            G = t("n6SQ"),
            U = t("TjE4"),
            Q = t("vEkZ"),
            z = t("kQtR"),
            V = t("RzZV");
        let H = (0, w.a)(a.a),
            K = (0, w.a)(a.b, {
                suspendToParent: !0,
                errorFallback: e => {
                    let {
                        renderMetadata: s
                    } = e;
                    return s(!1, null)
                }
            }),
            Y = (0, d.createContext)(null);

        function Z(e) {
            let s, t, a, r = (0, i.c)(11),
                {
                    business: l,
                    children: o,
                    conversationId: u,
                    renderSidebar: m,
                    shouldBlockExternalEgress: p
                } = e,
                h = (0, c.x)(L.b, u),
                b = l ?? h?.business,
                f = (0, d.useContext)(C.a),
                g = (0, c.x)(E.e, "2778625748") && null != b;
            r[0] !== b || r[1] !== g || r[2] !== o || r[3] !== u ? (s = g ? (0, n.jsx)(d.Suspense, {
                fallback: o,
                children: (0, n.jsx)(K, {
                    business: b,
                    renderMetadata: (e, s) => (0, n.jsx)(Y, {
                        value: {
                            business: b,
                            verified: e,
                            claimAction: s
                        },
                        children: o
                    }),
                    renderClaimButton: (e, s, t) => (0, n.jsx)(ei, {
                        measure: null != t,
                        conversationId: u,
                        onClick: t ?? e,
                        request: s
                    }),
                    businessPreview: e => (0, n.jsx)(et, {
                        business: b,
                        layout: "claim-preview",
                        verified: e,
                        readOnly: !0
                    })
                })
            }) : o, r[0] = b, r[1] = g, r[2] = o, r[3] = u, r[4] = s) : s = r[4];
            let v = s,
                x = g && void 0 !== p && p ? "restricted" : f;
            return r[5] !== v || r[6] !== m ? (t = m(v), r[5] = v, r[6] = m, r[7] = t) : t = r[7], r[8] !== x || r[9] !== t ? (a = (0, n.jsx)(C.a, {
                value: x,
                children: t
            }), r[8] = x, r[9] = t, r[10] = a) : a = r[10], a
        }
        let q = (0, w.a)(async () => {
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
                    return null == l ? null : (0, n.jsx)(ep, {
                        icon: (0, n.jsx)(y.a, {
                            asset: Q.a
                        }),
                        claimPreview: r,
                        children: (0, n.jsx)(I.a, {
                            className: "cursor-interaction hover:underline",
                            href: i,
                            initiator: "markdown_link_click",
                            openTarget: a ? "external-browser" : void 0,
                            children: l
                        })
                    })
                }
            }),
            J = {
                yelp: "Yelp",
                "yelp-feed": "Yelp",
                tripadvisor: "Tripadvisor",
                "tripadvisor-feed": "Tripadvisor",
                "opentable-feed": "OpenTable"
            },
            X = b.object({
                layout: b.enum(["one-line", "two-lines"]).nullable().optional(),
                metadata: b.object({
                    map_url: b.string().nullable().optional()
                }).nullable().optional()
            }).loose();

        function $(e) {
            let s, t, a, r = (0, i.c)(12),
                {
                    reference: l,
                    actions: o,
                    claimActions: c
                } = e;
            r[0] !== l ? (s = (0, O.c)(l), r[0] = l, r[1] = s) : s = r[1];
            let u = s;
            r[2] !== l ? (t = X.safeParse(l), r[2] = l, r[3] = t) : t = r[3];
            let d = t;
            if (null == u) {
                let e;
                return r[4] !== o ? (e = null == o ? null : (0, n.jsx)(n.Fragment, {
                    children: o
                }), r[4] = o, r[5] = e) : e = r[5], e
            }
            let m = d.success ? d.data.metadata?.map_url : null,
                p = (d.success ? d.data.layout : null) ?? "sidebar";
            return r[6] !== o || r[7] !== u || r[8] !== c || r[9] !== m || r[10] !== p ? (a = (0, n.jsx)(ee, {
                actions: o,
                business: u,
                directionsUrl: m,
                layout: p,
                renderActions: !1,
                claimActions: c
            }), r[6] = o, r[7] = u, r[8] = c, r[9] = m, r[10] = p, r[11] = a) : a = r[11], a
        }

        function ee(e) {
            let s, t = (0, i.c)(20),
                a = (0, d.useContext)(Y);
            if ((0, c.x)(E.e, "2778625748") && !e.readOnly && !e.claimActions && (null == e.layout || "sidebar" === e.layout)) {
                let s, i, r, l, o;
                if (null != a && (null != a.business.entity_lookup_id && null != e.business.entity_lookup_id ? a.business.entity_lookup_id === e.business.entity_lookup_id : "string" == typeof a.business.id && a.business.id === e.business.id || a.business.name.trim().toLowerCase() === e.business.name.trim().toLowerCase())) {
                    let s;
                    return t[0] !== e || t[1] !== a.claimAction || t[2] !== a.verified ? (s = (0, n.jsx)(et, {
                        ...e,
                        verified: a.verified,
                        claimAction: a.claimAction
                    }), t[0] = e, t[1] = a.claimAction, t[2] = a.verified, t[3] = s) : s = t[3], s
                }
                return t[4] !== e ? (s = (0, n.jsx)(et, {
                    ...e
                }), t[4] = e, t[5] = s) : s = t[5], t[6] !== e ? (i = (s, t) => (0, n.jsx)(et, {
                    ...e,
                    verified: s,
                    claimAction: t
                }), t[6] = e, t[7] = i) : i = t[7], t[8] !== e.business || t[9] !== e.onAction ? (r = s => (0, n.jsx)(et, {
                    business: e.business,
                    onAction: e.onAction,
                    layout: "claim-preview",
                    verified: s,
                    readOnly: !0
                }), t[8] = e.business, t[9] = e.onAction, t[10] = r) : r = t[10], t[11] !== e.business || t[12] !== i || t[13] !== r ? (l = (0, n.jsx)(K, {
                    business: e.business,
                    renderMetadata: i,
                    renderClaimButton: es,
                    businessPreview: r
                }), t[11] = e.business, t[12] = i, t[13] = r, t[14] = l) : l = t[14], t[15] !== s || t[16] !== l ? (o = (0, n.jsx)(d.Suspense, {
                    fallback: s,
                    children: l
                }), t[15] = s, t[16] = l, t[17] = o) : o = t[17], o
            }
            return t[18] !== e ? (s = (0, n.jsx)(et, {
                ...e
            }), t[18] = e, t[19] = s) : s = t[19], s
        }

        function es(e, s, t) {
            return (0, n.jsx)(ei, {
                measure: null != t,
                onClick: t ?? e,
                request: s
            })
        }

        function et(e) {
            let s, t, a, r, c, u, p, h, b, f, g, v = (0, i.c)(64),
                {
                    actions: x,
                    business: y,
                    directionsUrl: _,
                    isOptimistic: w,
                    layout: N,
                    onAction: T,
                    claimActions: k,
                    renderActions: E,
                    readOnly: A,
                    fullWidth: I,
                    showTitle: P,
                    verified: R,
                    claimAction: F,
                    showClaimedBusinessTooltip: D
                } = e,
                L = void 0 !== w && w,
                W = void 0 === N ? "sidebar" : N,
                G = void 0 === E || E,
                U = void 0 !== A && A,
                Q = void 0 === P || P,
                z = void 0 !== R && R,
                V = void 0 !== D && D,
                [K, Y] = (0, d.useState)(!1),
                [Z, J] = (0, d.useState)(!1),
                X = (0, S.d)(),
                $ = (0, d.useContext)(C.a),
                es = (0, m.a)();
            v[0] !== y.phone ? (s = y.phone?.trim() ? (0, j.a)(`tel:${y.phone.trim()}`) : null, v[0] = y.phone, v[1] = s) : s = v[1];
            let et = s;
            v[2] !== y.address ? (t = y.address?.trim(), v[2] = y.address, v[3] = t) : t = v[3];
            let er = t,
                el = "claim-preview" === W,
                eo = "sidebar" === W || el;
            v[4] !== er || v[5] !== y.name ? (a = [y.name, er].filter(Boolean), v[4] = er, v[5] = y.name, v[6] = a) : a = v[6];
            let eu = a.join(", "),
                ed = el ? "pt-4" : "mb-4",
                em = !(void 0 !== I && I) && "max-w-md";
            v[7] !== ed || v[8] !== em ? (r = (0, o.b)("not-prose text-base text-default", ed, em), v[7] = ed, v[8] = em, v[9] = r) : r = v[9];
            let ep = L ? "status" : void 0,
                eh = el ? "ps-5 pe-6 pb-4" : void 0;
            v[10] !== y.name || v[11] !== Z || v[12] !== el || v[13] !== es || v[14] !== eo || v[15] !== U || v[16] !== V || v[17] !== Q || v[18] !== X?.imageEngagementContext?.surfaceLocation || v[19] !== z ? (c = eo && Q ? (0, n.jsxs)("h2", {
                className: (0, o.b)("text-card-title leading-7 font-medium break-words", !el && "mb-1"),
                children: [y.name, (z || Z) && (0, n.jsx)(B.a, {
                    className: "ms-2",
                    showTooltip: !U && eo && (V || X?.imageEngagementContext?.surfaceLocation === l.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR),
                    label: es.formatMessage({
                        id: "chatgpt.localBusiness.claim.verified.label",
                        defaultMessage: "Verified business"
                    })
                })]
            }) : null, v[10] = y.name, v[11] = Z, v[12] = el, v[13] = es, v[14] = eo, v[15] = U, v[16] = V, v[17] = Q, v[18] = X?.imageEngagementContext?.surfaceLocation, v[19] = z, v[20] = c) : c = v[20];
            let eb = !U;
            return v[21] !== y || v[22] !== eo || v[23] !== eb ? (u = (0, n.jsx)(ea, {
                business: y,
                showPrice: eo,
                linkRating: eb,
                wrap: eo
            }), v[21] = y, v[22] = eo, v[23] = eb, v[24] = u) : u = v[24], v[25] !== eh || v[26] !== c || v[27] !== u ? (p = (0, n.jsxs)("div", {
                className: eh,
                children: [c, u]
            }), v[25] = eh, v[26] = c, v[27] = u, v[28] = p) : p = v[28], v[29] !== y || v[30] !== el || v[31] !== _ || v[32] !== W || v[33] !== T || v[34] !== U || v[35] !== G ? (h = G && "one-line" !== W ? (0, n.jsx)("div", {
                className: el ? "ps-5 pe-4 pb-5" : "mt-3",
                children: (0, n.jsx)(ec, {
                    allowQuoteAction: !U,
                    business: y,
                    directionsUrl: _,
                    onAction: T,
                    openTarget: U ? "external-browser" : void 0
                })
            }) : null, v[29] = y, v[30] = el, v[31] = _, v[32] = W, v[33] = T, v[34] = U, v[35] = G, v[36] = h) : h = v[36], v[37] !== y || v[38] !== F || v[39] !== k || v[40] !== Z || v[41] !== el || v[42] !== _ || v[43] !== L || v[44] !== eo || v[45] !== U || v[46] !== et ? (b = eo ? (0, n.jsxs)("div", {
                className: (0, o.b)("divide-y divide-border", el ? "px-5 pb-5" : "mt-3 border-t border-default"),
                children: [(0, n.jsx)(M, {
                    business: y,
                    claimPreview: el
                }), (0, n.jsx)(en, {
                    business: y,
                    directionsUrl: _,
                    readOnly: U,
                    claimPreview: el
                }), null != et && null != y.phone ? (0, n.jsx)(q, {
                    phone: y.phone,
                    href: et,
                    readOnly: U,
                    claimPreview: el
                }) : null, F, L || U || Z || null == k ? null : (0, n.jsx)(ei, {
                    onClick: () => Y(!0)
                })]
            }) : null, v[37] = y, v[38] = F, v[39] = k, v[40] = Z, v[41] = el, v[42] = _, v[43] = L, v[44] = eo, v[45] = U, v[46] = et, v[47] = b) : b = v[47], v[48] !== y || v[49] !== k || v[50] !== K || v[51] !== $ || v[52] !== T || v[53] !== X ? (f = K && null != k && (0, n.jsx)(H, {
                business: {
                    ...y,
                    photoUrl: "restricted" === $ || X?.shouldBlockExternalEgress ? void 0 : (0, O.f)(y, X?.conversationType === "sidebar" ? X.contentReferences : void 0) ?? void 0
                },
                businessPreview: e => (0, n.jsx)(ee, {
                    business: y,
                    onAction: T,
                    layout: "claim-preview",
                    verified: e,
                    readOnly: !0
                }),
                actions: {
                    ...k,
                    onCheckDomain: k.onCheckDomain ? async () => {
                        let e = await k.onCheckDomain?.() ?? {
                            step: "review"
                        };
                        return "success" === e.step && J(!0), e
                    } : void 0,
                    onCheckClaim: k.onCheckClaim ? async () => {
                        let e = await k.onCheckClaim?.() ?? {
                            step: "review"
                        };
                        return "success" === e.step && J(!0), e
                    } : void 0,
                    onManageProfile: k.onManageProfile ? e => {
                        Y(!1), k.onManageProfile?.(e)
                    } : void 0
                },
                onClose: () => Y(!1)
            }), v[48] = y, v[49] = k, v[50] = K, v[51] = $, v[52] = T, v[53] = X, v[54] = f) : f = v[54], v[55] !== x || v[56] !== eu || v[57] !== r || v[58] !== ep || v[59] !== p || v[60] !== h || v[61] !== b || v[62] !== f ? (g = (0, n.jsxs)("section", {
                "aria-label": eu,
                className: r,
                role: ep,
                children: [p, x, h, b, f]
            }), v[55] = x, v[56] = eu, v[57] = r, v[58] = ep, v[59] = p, v[60] = h, v[61] = b, v[62] = f, v[63] = g) : g = v[63], g
        }

        function en(e) {
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
            let b = s;
            if (!b) return null;
            o[2] !== c || o[3] !== u ? (t = (0, j.a)(u ?? (0, O.e)(c) ?? "") || null, o[2] = c, o[3] = u, o[4] = t) : t = o[4];
            let f = t,
                g = !p || h;
            return o[5] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, n.jsx)(y.a, {
                asset: U.a
            }), o[5] = a) : a = o[5], o[6] !== b || o[7] !== p || o[8] !== f ? (r = null == f ? b : (0, n.jsx)(I.a, {
                className: "cursor-interaction hover:underline",
                href: f,
                initiator: "markdown_link_click",
                openTarget: p ? "external-browser" : void 0,
                children: b
            }), o[6] = b, o[7] = p, o[8] = f, o[9] = r) : r = o[9], o[10] !== h || o[11] !== g || o[12] !== r ? (l = (0, n.jsx)(ep, {
                truncate: g,
                icon: a,
                claimPreview: h,
                children: r
            }), o[10] = h, o[11] = g, o[12] = r, o[13] = l) : l = o[13], l
        }

        function ei(e) {
            let s, t, a, l, u, m, b, f = (0, i.c)(33),
                {
                    measure: v,
                    conversationId: x,
                    onClick: w,
                    request: j
                } = e,
                C = (0, c.y)(T.a),
                N = (0, S.d)(),
                k = (0, d.useContext)(h.i);
            if (j?.status === "under_review") {
                let e, s, t, i;
                return f[0] !== w ? (e = () => w?.(), f[0] = w, f[1] = e) : e = f[1], f[2] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, n.jsx)(y.a, {
                    className: "text-tertiary",
                    asset: V.a
                }), f[2] = s) : s = f[2], f[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(ep, {
                    icon: s,
                    children: (0, n.jsx)("span", {
                        className: "text-secondary",
                        children: (0, n.jsx)(p.a, {
                            id: "chatgpt.localBusiness.claim.status.under_review",
                            defaultMessage: "Your claim is under review"
                        })
                    })
                }), f[3] = t) : t = f[3], f[4] !== e ? (i = (0, n.jsx)("button", {
                    type: "button",
                    onClick: e,
                    className: "w-full cursor-interaction text-start focus-visible:outline-ring",
                    children: t
                }), f[4] = e, f[5] = i) : i = f[5], i
            }
            let E = j && "in_progress" !== j.status ? "text-default" : "text-business-claim";
            f[6] !== E ? (s = (0, o.b)("flex min-h-12 w-full cursor-interaction items-center gap-4 py-3 text-start text-base font-medium select-none hover:underline focus-visible:outline-ring", E), f[6] = E, f[7] = s) : s = f[7], f[8] !== x || f[9] !== v || f[10] !== j || f[11] !== k || f[12] !== C || f[13] !== N?.conversationId ? (t = v && !j ? (0, g.b)(C, (0, r.j)(x ?? N?.conversationId, k?.location.pathname)) : void 0, f[8] = x, f[9] = v, f[10] = j, f[11] = k, f[12] = C, f[13] = N?.conversationId, f[14] = t) : t = f[14], f[15] !== v || f[16] !== w || f[17] !== j ? (a = e => w?.(v && !j ? (0, r.d)(e.currentTarget) : void 0), f[15] = v, f[16] = w, f[17] = j, f[18] = a) : a = f[18];
            let A = j?.status === "needs_information",
                I = null != j && "needs_information" !== j.status;
            f[19] !== A || f[20] !== I ? (l = (0, o.b)({
                "text-warning": A,
                "text-tertiary": I
            }), f[19] = A, f[20] = I, f[21] = l) : l = f[21];
            let B = j?.status === "needs_information" ? G.a : V.a;
            return f[22] !== l || f[23] !== B ? (u = (0, n.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                children: (0, n.jsx)(y.a, {
                    className: l,
                    asset: B
                })
            }), f[22] = l, f[23] = B, f[24] = u) : u = f[24], f[25] !== j ? (m = j ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsxs)("span", {
                    className: "min-w-0 flex-1",
                    children: [(0, n.jsx)("span", {
                        className: "block",
                        children: (0, n.jsx)(p.a, {
                            id: "chatgpt.localBusiness.claim.status.title",
                            defaultMessage: "{status, select, in_progress {Finish verifying your business} needs_information {Your claim needs more information} under_review {Claim under review} other {Claim started}}",
                            values: {
                                status: j.status
                            }
                        })
                    }), (0, n.jsx)("span", {
                        className: "block text-sm font-normal text-secondary",
                        children: (0, n.jsx)(p.a, {
                            id: "chatgpt.localBusiness.claim.status.subtitle",
                            defaultMessage: "{status, select, in_progress {Continue your business verification} needs_information {Review what’s needed to continue} under_review {Your claim is being reviewed} other {View your claim and next steps}}",
                            values: {
                                status: j.status
                            }
                        })
                    })]
                }), (0, n.jsx)(_.gc, {})]
            }) : (0, n.jsx)(p.a, {
                id: "chatgpt.localBusiness.claim.button.label",
                defaultMessage: "Claim this business"
            }), f[25] = j, f[26] = m) : m = f[26], f[27] !== m || f[28] !== s || f[29] !== t || f[30] !== a || f[31] !== u ? (b = (0, n.jsxs)("button", {
                className: s,
                type: "button",
                ref: t,
                onClick: a,
                children: [u, m]
            }), f[27] = m, f[28] = s, f[29] = t, f[30] = a, f[31] = u, f[32] = b) : b = f[32], b
        }

        function ea(e) {
            let s, t, a, r, l, c, u, d, m = (0, i.c)(23),
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
            m[0] !== p.categories ? (s = p.categories?.find(eo), m[0] = p.categories, m[1] = s) : s = m[1];
            let w = s;
            m[2] !== p || m[3] !== x || m[4] !== y ? (t = null == p.rating && null == J[p.provider ?? ""] ? null : (0, n.jsx)(em, {
                business: p,
                linkRating: x,
                shouldBlockExternalEgress: y
            }, "rating"), m[2] = p, m[3] = x, m[4] = y, m[5] = t) : t = m[5], m[6] !== w ? (a = w ? (0, n.jsx)("span", {
                className: "min-w-0 truncate",
                children: w
            }, "category") : null, m[6] = w, m[7] = a) : a = m[7], m[8] !== p.price_str || m[9] !== v ? (r = v && p.price_str ? (0, n.jsx)("span", {
                children: p.price_str
            }, "price") : null, m[8] = p.price_str, m[9] = v, m[10] = r) : r = m[10], m[11] !== t || m[12] !== a || m[13] !== r ? (l = [t, a, r].filter(el), m[11] = t, m[12] = a, m[13] = r, m[14] = l) : l = m[14];
            let j = l,
                C = _ ? "text-base" : "text-sm",
                N = _ ? "flex-wrap" : "flex-nowrap";
            return m[15] !== C || m[16] !== N ? (c = (0, o.b)("flex min-w-0 items-center leading-5 font-normal text-default", C, N), m[15] = C, m[16] = N, m[17] = c) : c = m[17], m[18] !== j ? (u = j.map(er), m[18] = j, m[19] = u) : u = m[19], m[20] !== c || m[21] !== u ? (d = (0, n.jsx)("span", {
                className: c,
                children: u
            }), m[20] = c, m[21] = u, m[22] = d) : d = m[22], d
        }

        function er(e, s) {
            return (0, n.jsxs)(d.Fragment, {
                children: [0 === s ? null : (0, n.jsx)("span", {
                    className: "mx-1 shrink-0",
                    "aria-hidden": !0,
                    children: "•"
                }), e]
            }, e.key)
        }

        function el(e) {
            return null != e
        }

        function eo(e) {
            return e.trim().length > 0 && "Point" !== e
        }

        function ec(e) {
            let s, t, a, r, u, m, h, b, g, v, x, y, _, w, T, A, B, P, R, M, F, D = (0, i.c)(68),
                {
                    allowQuoteAction: L,
                    analyticsMessageId: G,
                    business: U,
                    directionsUrl: Q,
                    onAction: z,
                    onQuoteInteractionOpenChange: V,
                    openTarget: H,
                    presentation: K,
                    primaryActionsOnly: Y,
                    reservationAction: Z
                } = e,
                q = void 0 === L || L,
                J = void 0 === K ? "sidebar" : K,
                X = void 0 !== Y && Y,
                $ = (0, c.z)(f.f),
                ee = (0, S.d)(),
                es = (0, d.useContext)(C.a);
            D[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, N.b)(), D[0] = s) : s = D[0];
            let et = (0, k.f)(s),
                en = (0, c.x)(E.e, "2673474834");
            D[1] !== U || D[2] !== J || D[3] !== en ? (t = (0, j.a)(en && "sidebar" === J ? (0, O.g)(U) ?? "" : "") || null, D[1] = U, D[2] = J, D[3] = en, D[4] = t) : t = D[4];
            let ei = t;
            D[5] !== U || D[6] !== Q ? (a = (0, j.a)(Q ?? (0, O.e)(U) ?? "") || null, D[5] = U, D[6] = Q, D[7] = a) : a = D[7];
            let ea = a;
            D[8] !== U.website_url ? (r = (0, j.a)(U.website_url?.trim() ?? "") || null, D[8] = U.website_url, D[9] = r) : r = D[9];
            let er = r;
            D[10] !== U.phone ? (u = U.phone?.trim() ? (0, j.a)(`tel:${U.phone.trim()}`) : null, D[10] = U.phone, D[11] = u) : u = D[11];
            let el = u;
            D[12] !== U.service_providers ? (m = (0, O.h)(U.service_providers), D[12] = U.service_providers, D[13] = m) : m = D[13];
            let eo = m;
            D[14] !== $ || D[15] !== q || D[16] !== U.reservation_providers || D[17] !== et || D[18] !== es || D[19] !== eo || D[20] !== ei || D[21] !== ee ? (h = q && null != $ && ee?.shouldBlockExternalEgress === !1 && (ee.canRequestQuote ?? !ee.isReadOnly) && "restricted" !== es && et && null == ei && !U.reservation_providers?.some(ed) && eo.length > 0, D[14] = $, D[15] = q, D[16] = U.reservation_providers, D[17] = et, D[18] = es, D[19] = eo, D[20] = ei, D[21] = ee, D[22] = h) : h = D[22];
            let ec = h;
            D[23] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, n.jsx)(p.a, {
                id: "chatgpt.localBusiness.reserve",
                defaultMessage: "Reserve"
            }), D[23] = b) : b = D[23], D[24] !== ei ? (g = {
                key: l.d.CHATGPT_ENTITY_AFFORDANCE_RESERVE,
                href: ei,
                label: b
            }, D[24] = ei, D[25] = g) : g = D[25], D[26] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, n.jsx)(p.a, {
                id: "chatgpt.localBusiness.directions",
                defaultMessage: "Directions"
            }), D[26] = v) : v = D[26], D[27] !== ea ? (x = {
                key: l.d.CHATGPT_ENTITY_AFFORDANCE_DIRECTIONS,
                href: ea,
                label: v
            }, D[27] = ea, D[28] = x) : x = D[28], D[29] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, n.jsx)(p.a, {
                id: "chatgpt.localBusiness.website",
                defaultMessage: "Website"
            }), D[29] = y) : y = D[29], D[30] !== er ? (_ = {
                key: l.d.CHATGPT_ENTITY_AFFORDANCE_WEBSITE,
                href: er,
                label: y
            }, D[30] = er, D[31] = _) : _ = D[31], D[32] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, n.jsx)(p.a, {
                id: "chatgpt.localBusiness.call",
                defaultMessage: "Call"
            }), D[32] = w) : w = D[32], D[33] !== el ? (T = {
                key: l.d.CHATGPT_ENTITY_AFFORDANCE_CALL,
                href: el,
                label: w
            }, D[33] = el, D[34] = T) : T = D[34], D[35] !== g || D[36] !== x || D[37] !== _ || D[38] !== T ? (A = [g, x, _, T].filter(eu), D[35] = g, D[36] = x, D[37] = _, D[38] = T, D[39] = A) : A = D[39], D[40] !== ec || D[41] !== X || D[42] !== Z || D[43] !== A ? (B = A.slice(0, X ? 0 : 3 - Number(ec) - Number(null != Z)), D[40] = ec, D[41] = X, D[42] = Z, D[43] = A, D[44] = B) : B = D[44];
            let em = B;
            if (!ec && 0 === em.length && null == Z) return null;
            D[45] !== J ? (P = e => (0, o.b)("no-drag relative flex cursor-interaction items-center justify-center rounded-full border after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] hover:after:bg-media-background/5 text-sm leading-4 font-medium whitespace-nowrap select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring", "sidebar" === J ? "h-9 px-5" : "h-7.5 flex-auto px-4", 0 === e ? "border-transparent bg-primary-solid text-primary-solid" : "border-default bg-transparent text-default"), D[45] = J, D[46] = P) : P = D[46];
            let ep = P;
            return D[47] !== ep || D[48] !== G || D[49] !== U.id || D[50] !== ec || D[51] !== z || D[52] !== V || D[53] !== J || D[54] !== eo || D[55] !== ee ? (R = ec && (0, n.jsx)(W.a, {
                analyticsMessageId: G,
                businessId: "string" == typeof U.id ? U.id : void 0,
                ctaSurface: "hover" === J ? "map_card" : "business_sidebar",
                onAction: () => z?.(l.d.CHATGPT_ENTITY_AFFORDANCE_REQUEST_QUOTE),
                onInteractionOpenChange: V,
                providers: eo,
                trigger: (0, n.jsx)("button", {
                    className: ep(0),
                    type: "button",
                    children: (0, n.jsx)(W.b, {})
                }),
                turnContext: ee
            }), D[47] = ep, D[48] = G, D[49] = U.id, D[50] = ec, D[51] = z, D[52] = V, D[53] = J, D[54] = eo, D[55] = ee, D[56] = R) : R = D[56], D[57] !== ep || D[58] !== em || D[59] !== ec || D[60] !== z || D[61] !== H || D[62] !== Z ? (M = em.map((e, s) => (0, n.jsx)(I.a, {
                appearance: "button",
                className: ep(s + Number(ec) + Number(null != Z)),
                href: e.href,
                initiator: "markdown_link_click",
                openTarget: H,
                onClick: () => z?.(e.key),
                children: e.label
            }, e.key)), D[57] = ep, D[58] = em, D[59] = ec, D[60] = z, D[61] = H, D[62] = Z, D[63] = M) : M = D[63], D[64] !== Z || D[65] !== R || D[66] !== M ? (F = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-wrap gap-2",
                children: [R, Z, M]
            }), D[64] = Z, D[65] = R, D[66] = M, D[67] = F) : F = D[67], F
        }

        function eu(e) {
            return null != e.href
        }

        function ed(e) {
            return null != e.launcherPayload
        }

        function em(e) {
            let s, t, a, r, l, c = (0, i.c)(17),
                {
                    business: p,
                    linkRating: h,
                    shouldBlockExternalEgress: b
                } = e,
                f = (0, m.a)(),
                g = (0, A.a)(),
                _ = (0, S.d)(),
                w = (0, d.useContext)(C.a),
                N = !b && _?.shouldBlockExternalEgress !== !0 && "restricted" !== w,
                T = p.provider_logo_url_short?.trim() || p.provider_logo_url?.trim(),
                E = g && (p.provider_logo_dark_url_short?.trim() || p.provider_logo_dark_url?.trim()) || T,
                B = N && E ? (0, j.b)(E) : null;
            c[0] !== N || c[1] !== p.provider_url || c[2] !== h ? (s = (0, x.a)(p.provider_url?.trim() ?? ""), t = h && N && (0, u.d)(s), c[0] = N, c[1] = p.provider_url, c[2] = h, c[3] = s, c[4] = t) : (s = c[3], t = c[4]);
            let O = t,
                P = (0, k.f)(O && "1492523517"),
                R = P ? v.a : I.a,
                M = J[p.provider ?? ""] ?? p.provider ?? "";
            c[5] !== p.rating || c[6] !== f ? (a = null != p.rating ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(y.a, {
                    asset: z.a,
                    className: "size-3.5 shrink-0"
                }), (0, n.jsx)("span", {
                    children: f.formatNumber(p.rating, {
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 1
                    })
                })]
            }) : null, c[5] = p.rating, c[6] = f, c[7] = a) : a = c[7];
            let F = B ? (0, n.jsx)("img", {
                alt: M,
                className: (0, o.b)("w-auto max-w-18 shrink-0 object-contain", B.toLowerCase().includes("tripadvisor_ollie") ? "h-3" : "h-3.5"),
                src: B
            }) : J[p.provider ?? ""] ?? null;
            c[8] !== a || c[9] !== F ? (r = (0, n.jsxs)(n.Fragment, {
                children: [a, F]
            }), c[8] = a, c[9] = F, c[10] = r) : r = c[10];
            let D = r;
            return c[11] !== R || c[12] !== O || c[13] !== D || c[14] !== P || c[15] !== s ? (l = O ? (0, n.jsx)(R, {
                className: "inline-flex shrink-0 cursor-interaction items-center gap-1 hover:text-secondary",
                href: s,
                initiator: "markdown_link_click",
                openTarget: P ? "in-app-browser" : void 0,
                children: D
            }) : (0, n.jsx)("span", {
                className: "inline-flex shrink-0 items-center gap-1",
                children: D
            }), c[11] = R, c[12] = O, c[13] = D, c[14] = P, c[15] = s, c[16] = l) : l = c[16], l
        }

        function ep(e) {
            let s, t, a, r, l, c = (0, i.c)(13),
                {
                    icon: u,
                    children: d,
                    truncate: m,
                    claimPreview: p
                } = e,
                h = void 0 !== p && p ? "py-2.5" : "py-2";
            c[0] !== h ? (s = (0, o.b)("flex min-h-11 items-center gap-4", h), c[0] = h, c[1] = s) : s = c[1], c[2] !== u ? (t = (0, n.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                children: u
            }), c[2] = u, c[3] = t) : t = c[3];
            let b = void 0 !== m && m && "truncate";
            return c[4] !== b ? (a = (0, o.b)("min-w-0 flex-1 text-base font-medium select-text", b), c[4] = b, c[5] = a) : a = c[5], c[6] !== d || c[7] !== a ? (r = (0, n.jsx)("span", {
                className: a,
                children: d
            }), c[6] = d, c[7] = a, c[8] = r) : r = c[8], c[9] !== s || c[10] !== t || c[11] !== r ? (l = (0, n.jsxs)("div", {
                className: s,
                children: [t, r]
            }), c[9] = s, c[10] = t, c[11] = r, c[12] = l) : l = c[12], l
        }
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
            a = t("BolX"),
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
            r = t("BolX"),
            l = t("I07G"),
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
            y = t("WZSq"),
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
            let s, t, u, d, b, x, k, A, O, P, R, M, F, D, L, W = (0, i.c)(47),
                {
                    analyticsMessageId: G,
                    businessId: U,
                    ctaSurface: Q,
                    onAction: z,
                    onInteractionOpenChange: V,
                    providers: H,
                    trigger: K,
                    turnContext: Y
                } = e,
                Z = (0, r.y)(v.a),
                q = (0, c.a)(),
                J = (0, o.useContext)(f.a);
            W[0] !== J || W[1] !== q || W[2] !== Y.shouldBlockExternalEgress ? (s = e => ({
                provider: e,
                logoUrl: !1 === Y.shouldBlockExternalEgress && "restricted" !== J ? T.parse(e.provider_logo) : void 0,
                label: e.provider_name?.trim() || N[e.provider?.trim().toLowerCase() ?? ""] || e.provider?.trim() || q.formatMessage({
                    id: "chatgpt.localBusiness.quoteProvider",
                    defaultMessage: "Quote provider"
                })
            }), W[0] = J, W[1] = q, W[2] = Y.shouldBlockExternalEgress, W[3] = s) : s = W[3], W[4] !== q ? (t = (e, s) => e.label.localeCompare(s.label, q.locale, {
                sensitivity: "base"
            }), W[4] = q, W[5] = t) : t = W[5];
            let X = H.map(s).sort(t),
                $ = (0, o.useRef)(!1),
                ee = (0, o.useRef)(!1);
            W[6] !== V ? (u = () => {
                $.current = !1, ee.current = !1, V?.(!1)
            }, W[6] = V, W[7] = u) : u = W[7];
            let es = (0, o.useEffectEvent)(u);
            W[8] !== es ? (d = () => () => es(), W[8] = es, W[9] = d) : d = W[9], W[10] === Symbol.for("react.memo_cache_sentinel") ? (b = [], W[10] = b) : b = W[10], (0, o.useLayoutEffect)(d, b), W[11] === Symbol.for("react.memo_cache_sentinel") ? (x = new Set, W[11] = x) : x = W[11];
            let et = (0, o.useRef)(x),
                en = !1 !== Y.trackShownImpressions,
                ei = Y.browserConversationId ?? Y.conversationId;
            W[12] !== G || W[13] !== ei || W[14] !== Z || W[15] !== Y.hostId || W[16] !== Y.messageId ? (k = {
                launch: (e, s, t) => {
                    if ((0, w.e)(ei)) throw Error("Wait for this conversation to finish saving, then try again.");
                    return (0, _.c)({
                        scope: Z,
                        hostId: Y.hostId,
                        chatGptConversationId: ei,
                        payload: e,
                        sourceMessageId: G ?? Y.messageId,
                        signal: s,
                        onTracking: t
                    })
                },
                onError: E
            }, W[12] = G, W[13] = ei, W[14] = Z, W[15] = Y.hostId, W[16] = Y.messageId, W[17] = k) : k = W[17];
            let ea = (0, j.a)(k);
            W[18] !== G || W[19] !== U || W[20] !== ei || W[21] !== Q || W[22] !== Z || W[23] !== en || W[24] !== Y.messageId ? (A = (e, s) => {
                let t = e.launcherPayload.appUri,
                    n = I(e);
                if ("show" === s) {
                    if (!en || et.current.has(n)) return;
                    et.current.add(n)
                }
                try {
                    (0, g.a)(Z, a.d, {
                        action: "show" === s ? "CHATGPT_CONTENT_REFERENCE_ACTION_SHOW" : "CHATGPT_CONTENT_REFERENCE_ACTION_CLICK",
                        eventType: "show" === s ? "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_SHOWN" : "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_CLICKED",
                        businessId: U ?? void 0,
                        connectorId: t.startsWith("connectors://") ? t.slice(13) : t,
                        contentReferenceType: "map_card" === Q ? "map" : "entity_metadata",
                        conversationId: ei,
                        ctaSurface: Q,
                        ctaType: "service",
                        linkType: "local_business_service",
                        messageId: G ?? Y.messageId,
                        sectionLocation: "response",
                        serviceProvider: e.provider ?? void 0,
                        serviceActionType: e.action_type ?? void 0
                    })
                } catch {}
            }, W[18] = G, W[19] = U, W[20] = ei, W[21] = Q, W[22] = Z, W[23] = en, W[24] = Y.messageId, W[25] = A) : A = W[25];
            let er = A,
                el = 1 === H.length ? H[0] : void 0;
            W[26] !== el ? (O = null == el ? null : I(el), W[26] = el, W[27] = O) : O = W[27];
            let eo = O;
            W[28] !== el || W[29] !== er ? (P = () => {
                null != el && er(el, "show")
            }, W[28] = el, W[29] = er, W[30] = P) : P = W[30];
            let ec = (0, o.useEffectEvent)(P);
            W[31] !== eo || W[32] !== ec ? (R = () => {
                null != eo && ec()
            }, W[31] = eo, W[32] = ec, W[33] = R) : R = W[33], W[34] !== eo || W[35] !== en ? (M = [eo, en], W[34] = eo, W[35] = en, W[36] = M) : M = W[36], (0, o.useEffect)(R, M);
            let eu = e => {
                er(e, "click"), z?.(), ee.current = !0, V?.(!0), ea.launch(e.launcherPayload)
            };
            if (0 === H.length) return null;
            let ed = null != el ? (0, n.jsx)(B, {
                trigger: K,
                onClick: () => eu(el)
            }) : (0, n.jsx)(S, {
                contentWidth: "menuWide",
                onOpenChange: e => {
                    if ($.current = e, V?.(e || ee.current), e)
                        for (let e of H) er(e, "show")
                },
                size: "action",
                triggerButton: K,
                children: X.map(e => {
                    let {
                        provider: s,
                        label: t,
                        logoUrl: i
                    } = e, a = s.provider?.trim().toLowerCase() === "thumbtack" ? (0, n.jsx)(C, {
                        className: "size-5 text-default",
                        "aria-hidden": !0,
                        focusable: "false"
                    }) : (0, n.jsx)(p.Tg, {
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
                    }, I(s))
                })
            });
            return W[37] !== ei || W[38] !== ea || W[39] !== V || W[40] !== Y.hostId ? (F = null == ea.dialog ? null : (0, n.jsx)(y.EcosystemWidgetDialog, {
                conversationId: (0, l.Ue)(ei),
                hostId: Y.hostId,
                onClose: () => {
                    ea.close(), ee.current = !1, V?.($.current)
                },
                state: ea.dialog
            }), W[37] = ei, W[38] = ea, W[39] = V, W[40] = Y.hostId, W[41] = F) : F = W[41], W[42] !== F ? (D = (0, n.jsx)(n.Fragment, {
                children: F
            }), W[42] = F, W[43] = D) : D = W[43], W[44] !== ed || W[45] !== D ? (L = (0, n.jsxs)(n.Fragment, {
                children: [ed, D]
            }), W[44] = ed, W[45] = D, W[46] = L) : L = W[46], L
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

        function I(e) {
            return JSON.stringify([e.provider, e.provider_business_id, e.launcherPayload.appUri])
        }

        function S(e) {
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

        function B(e) {
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
                return (await Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(514085), t.e(877700), t.e(737555), t.e(913190), t.e(511710)]).then(t.bind(t, "UvKE"))).BusinessClaimFlowWithRecovery
            },
            b: async function() {
                return (await Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(514085), t.e(877700), t.e(963703), t.e(564979), t.e(960116), t.e(737555), t.e(913190), t.e(225451), t.e(255966), t.e(493001)]).then(t.bind(t, "wVZg"))).BusinessClaimSurfaceWithRecovery
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