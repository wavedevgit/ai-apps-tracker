export const __rspack_esm_ids = [762074];
export const __webpack_modules__ = {
    xof2: (function(e, t, s) {
        var n = s("EA6X"),
            i = s("D015"),
            a = s("yGJW"),
            r = s("OMIV"),
            l = s("CTBG"),
            o = s("Kwur"),
            c = s("dQRk"),
            d = s("hx97");

        function u(e, t, s) {
            if (null == t || null == s) return;
            let n = 0,
                a = !1;
            for (let r of e.get(l.a, t) ?? [])
                if ((0, d.k)(r) && (a = !1), "assistant" !== r.author.role || a || (n += 1, a = !0), r.id === s) return n > 0 ? (0, i.a)(n) : void 0
        }

        function m(e, t) {
            let s = e.parentContext;
            return {
                action_type: t,
                surface_location: e.surfaceLocation,
                assistant_message_id: e.assistantMessageId,
                turn_ordinal: e.turnOrdinal,
                content_reference_type: e.contentReferenceType,
                content_reference_start_index: e.contentReferenceStartIndex,
                parent_context: null == s ? void 0 : {
                    entity_id: s.entityId,
                    entity_category: s.entityCategory,
                    widget_type: s.widgetType,
                    widget_name: s.widgetName,
                    content_reference_start_index: s.contentReferenceStartIndex,
                    message_id: s.messageId
                }
            }
        }

        function p(e, t) {
            return Math.random() < (e.get(r.f)?.getDynamicConfig("3538562248", {
                disableExposureLog: !0
            }).get(t, 1) ?? 1)
        }

        function h(e, t, s) {
            null != t.actionType && p(e, "widget_action") && o.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: "widget_action",
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: t.conversationId,
                            message_id: t.messageId
                        },
                        widget_action: {
                            ...m(t, t.actionType),
                            widget_type: t.widgetType,
                            widget_name: t.widgetName,
                            widget_affordance: t.widgetAffordance,
                            widget_action_target: t.widgetActionTarget,
                            widget_action_value: t.widgetActionValue,
                            feedback_reasons: t.feedbackReasons,
                            effect: s
                        }
                    }
                }
            }).catch(() => void 0)
        }

        function f(e, t) {
            null != t.actionType && "CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN" !== t.actionType && p(e, "entity_action") && o.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: "entity_action",
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: t.conversationId,
                            message_id: t.messageId
                        },
                        entity_action: {
                            ...m(t, t.actionType),
                            entity_id: t.entityId,
                            entity_category: t.entityCategory,
                            entity_affordance: t.entityAffordance
                        }
                    }
                }
            }).catch(() => void 0)
        }

        function g(e, t) {
            null != t.actionType && p(e, "link_action") && o.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: "link_action",
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: t.conversationId,
                            message_id: t.messageId
                        },
                        link_action: {
                            ...m(t, t.actionType),
                            link_type: t.linkType,
                            link_affordance: t.linkAffordance,
                            url: t.url,
                            link_index: t.linkIndex,
                            citation_numbers: t.citationNumbers
                        }
                    }
                }
            }).catch(() => void 0)
        }
        s.d(t, {}, {
            a: u,
            b: function(e, t) {
                try {
                    let s = {
                        ...t,
                        conversationId: null == t.conversationId ? void 0 : e.get(c.j, t.conversationId) ?? void 0,
                        turnOrdinal: u(e, t.conversationId, t.assistantMessageId ?? t.messageId)
                    };
                    f(e, s), (0, a.a)(e, n.c, s)
                } catch {}
            },
            c: function(e, t) {
                null != t.actionType && p(e, "image_action") && o.Request.safePost("/unified_user_signals", {
                    requestBody: {
                        signal_type: "image_action",
                        product_surface: "CHAT",
                        signal_metadata: {},
                        user_metadata: {},
                        signal_detail: {
                            common_metadata: {
                                conversation_id: t.conversationId,
                                message_id: t.messageId
                            },
                            image_action: {
                                ...m(t, t.actionType),
                                image_affordance: t.imageAffordance,
                                image_index: t.imageIndex,
                                url: t.url,
                                content_url: t.contentUrl,
                                original_content_url: t.originalContentUrl,
                                tags: t.tags
                            }
                        }
                    }
                }).catch(() => void 0), (0, a.a)(e, n.e, t)
            },
            d: function(e, t) {
                g(e, t), (0, a.a)(e, n.g, t)
            },
            e: function(e, t) {
                f(e, t), (0, a.a)(e, n.c, t)
            },
            f: function(e, t) {
                h(e, t), (0, a.a)(e, n.j, t)
            },
            g: g,
            h: h
        })
    }),
    T2J5: (function(e, t, s) {
        s.d(t, {
            a: () => m
        });
        var n = s("ABep"),
            i = s("QosV"),
            a = s("on57"),
            r = s("oyxz"),
            l = s("HOLv"),
            o = s("CqQF"),
            c = "icon-niuo6X",
            d = s("ShnZ"),
            u = s("GU6m");

        function m(e) {
            let t, s, m, p, h, f = (0, i.c)(13),
                {
                    className: g,
                    label: b,
                    showTooltip: _,
                    size: v
                } = e,
                x = void 0 === v ? 20 : v,
                y = _ && "shrink-0 rounded-sm select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none";
            f[0] !== g || f[1] !== y ? (t = (0, a.b)("-mt-0.75 inline-flex align-middle", y, g), f[0] = g, f[1] = y, f[2] = t) : t = f[2];
            let w = _ ? 0 : void 0;
            f[3] !== x ? (s = 24 === x ? (0, n.jsx)(l.a, {
                className: c,
                asset: u.a
            }) : (0, n.jsx)(l.a, {
                className: c,
                asset: d.a
            }), f[3] = x, f[4] = s) : s = f[4], f[5] !== b || f[6] !== t || f[7] !== w || f[8] !== s ? (m = (0, n.jsx)("span", {
                className: t,
                "aria-label": b,
                role: "img",
                tabIndex: w,
                children: s
            }), f[5] = b, f[6] = t, f[7] = w, f[8] = s, f[9] = m) : m = f[9];
            let j = m;
            return _ ? (f[10] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, n.jsxs)("div", {
                className: "tooltip-BWNZME",
                children: [(0, n.jsx)("div", {
                    className: "body-i5CZgD",
                    children: (0, n.jsx)(r.a, {
                        id: "businessProfiles.claimedBadge.tooltip",
                        defaultMessage: "OpenAI verified that this profile is managed by an owner or authorized representative.",
                        description: "Tooltip on the blue claimed-business badge beside a business name. It explains that OpenAI verified who manages the business profile, not the quality of the business."
                    })
                }), (0, n.jsx)("span", {
                    className: "caret-kAbdty",
                    "aria-hidden": "true"
                })]
            }), f[10] = p) : p = f[10], f[11] !== j ? (h = (0, n.jsx)(o.a, {
                disablePadding: !0,
                side: "top",
                sideOffset: 0,
                tooltipMaxWidth: "min(215px, calc(100vw - 16px))",
                variant: "unstyled",
                tooltipContent: p,
                children: j
            }), f[11] = j, f[12] = h) : h = f[12], h) : j
        }
    }),
    Csob: (function(e, t, s) {
        s.d(t, {
            a: () => X,
            b: () => en,
            c: () => W,
            ChatGptLocalBusinessMetadata: () => Y,
            d: () => q,
            e: () => $,
            f: () => el
        });
        var n = s("ABep"),
            i = s("QosV"),
            a = s("WQMB"),
            r = s("EA6X"),
            l = s("on57"),
            o = s("iTtm"),
            c = s("zd8w"),
            d = s("Wf1j"),
            u = s("oyxz"),
            m = s("ASxG"),
            p = s("Cslg"),
            h = s("HOLv"),
            f = s("bf6R"),
            g = s("Bbed"),
            b = s("Fm9E"),
            _ = s("zSQm"),
            v = s("WAdu"),
            x = s("hZax"),
            y = s("OMIV"),
            w = s("a6Zv"),
            j = s("KDax"),
            C = s("TUMj"),
            T = s("T2J5"),
            k = s("TJEh"),
            N = s("PUeQ"),
            E = s("uQ18");

        function I(e) {
            let t, s, a, r, o, m = (0, i.c)(19),
                {
                    business: p,
                    claimPreview: g
                } = e,
                b = void 0 !== g && g,
                _ = (0, d.a)(),
                v = (0, c.useId)(),
                [x, y] = (0, c.useState)(!1),
                w = !!p.hours?.length,
                j = null != p.is_open || p.is_closed_permanently;
            if (!w && !j) return null;
            m[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(h.a, {
                asset: E.a,
                className: "shrink-0"
            }), m[0] = t) : t = m[0], m[1] !== p || m[2] !== j ? (s = (0, n.jsxs)(n.Fragment, {
                children: [t, (0, n.jsx)("span", {
                    className: "min-w-0 flex-1 text-base font-medium",
                    children: j ? (0, n.jsx)(N.a, {
                        business: p,
                        showHourDetail: !0
                    }) : (0, n.jsx)(u.a, {
                        id: "chatgpt.localBusiness.hours.label",
                        defaultMessage: "Hours",
                        description: "Short label in a local business profile when its weekly opening schedule is available but its current open or closed status is unknown. Selecting the row shows the schedule."
                    })
                })]
            }), m[1] = p, m[2] = j, m[3] = s) : s = m[3];
            let C = s;
            return m[4] !== b || m[5] !== x || m[6] !== w || m[7] !== v || m[8] !== C ? (a = w ? (0, n.jsxs)("button", {
                type: "button",
                "aria-controls": v,
                "aria-expanded": x,
                className: (0, l.b)("flex min-h-11 w-full cursor-interaction items-center gap-4 text-start select-none hover:bg-primary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset", b ? "py-2.5" : "py-2"),
                onClick: () => y(!x),
                children: [C, (0, n.jsx)(f._b, {
                    className: (0, l.b)("text-secondary", x && "rotate-180")
                })]
            }) : (0, n.jsx)("div", {
                className: (0, l.b)("flex min-h-11 items-center gap-4", b ? "py-2.5" : "py-2"),
                children: C
            }), m[4] = b, m[5] = x, m[6] = w, m[7] = v, m[8] = C, m[9] = a) : a = m[9], m[10] !== p.hours || m[11] !== x || m[12] !== w || m[13] !== _ || m[14] !== v ? (r = w && (0, n.jsx)("dl", {
                id: v,
                hidden: !x,
                className: "ms-10 pb-2 text-sm select-text",
                children: [1, 2, 3, 4, 5, 6, 0].map(e => {
                    let t = p.hours?.filter(t => t.day === e).sort(A);
                    return (0, n.jsxs)("div", {
                        className: "flex gap-4 py-2",
                        children: [(0, n.jsx)("dt", {
                            className: "w-28 shrink-0",
                            children: _.formatDate(new Date(Date.UTC(2026, 0, 4 + e)), {
                                weekday: "long",
                                timeZone: "UTC"
                            })
                        }), (0, n.jsx)("dd", {
                            children: t?.length ? t.map((e, t) => (0, n.jsx)("div", {
                                children: (0, n.jsx)(u.a, {
                                    id: "chatgpt.localBusiness.hours.interval",
                                    defaultMessage: "{start} – {end}",
                                    description: "One opening interval in a local business profile's weekly schedule. The start and end placeholders are locale-formatted business-local opening and closing times. An end earlier than the start is the following day. Keep this compact; multiple intervals may appear for one day.",
                                    values: {
                                        start: O(_, e.start),
                                        end: O(_, e.end)
                                    }
                                })
                            }, t)) : (0, n.jsx)(u.a, {
                                id: "chatgpt.localBusiness.hours.closed",
                                defaultMessage: "Closed",
                                description: "Status for a weekday with no opening intervals in a known weekly schedule on a local business profile. This is never used when the entire schedule is unknown."
                            })
                        })]
                    }, e)
                })
            }), m[10] = p.hours, m[11] = x, m[12] = w, m[13] = _, m[14] = v, m[15] = r) : r = m[15], m[16] !== a || m[17] !== r ? (o = (0, n.jsxs)("div", {
                children: [a, r]
            }), m[16] = a, m[17] = r, m[18] = o) : o = m[18], o
        }

        function A(e, t) {
            return e.start.localeCompare(t.start)
        }

        function O(e, t) {
            return e.formatTime(new Date(Date.UTC(2026, 0, 4, Number(t.slice(0, 2)), Number(t.slice(2, 4)))), {
                hour: "numeric",
                minute: "2-digit",
                timeZone: "UTC"
            })
        }
        var S = s("FRPb"),
            P = s("ynn3"),
            B = s("ZBaM"),
            M = s("p39r"),
            R = s("SAs7"),
            F = s("CxoR"),
            D = s("V23S");
        let L = (0, g.a)(a.a),
            G = (0, g.a)(a.b, {
                suspendToParent: !0,
                errorFallback: e => {
                    let {
                        renderMetadata: t
                    } = e;
                    return t(!1, null)
                }
            }),
            U = (0, c.createContext)(null);

        function W(e) {
            let t, s, a, r, l, d = (0, i.c)(17),
                {
                    business: u,
                    children: m,
                    conversationId: p,
                    shouldBlockExternalEgress: h
                } = e,
                f = (0, o.x)(S.b, p),
                g = u ?? f?.business,
                b = (0, c.useContext)(v.a);
            if (!(0, o.x)(y.d, "2789236610") || null == g) {
                let e;
                return d[0] !== m ? (e = (0, n.jsx)(n.Fragment, {
                    children: m
                }), d[0] = m, d[1] = e) : e = d[1], e
            }
            let _ = void 0 !== h && h ? "restricted" : b;
            return d[2] !== g || d[3] !== m ? (t = (e, t) => (0, n.jsx)(U, {
                value: {
                    business: g,
                    verified: e,
                    claimAction: t
                },
                children: m
            }), d[2] = g, d[3] = m, d[4] = t) : t = d[4], d[5] !== g ? (s = e => (0, n.jsx)(Z, {
                business: g,
                layout: "claim-preview",
                verified: e,
                readOnly: !0
            }), d[5] = g, d[6] = s) : s = d[6], d[7] !== g || d[8] !== t || d[9] !== s ? (a = (0, n.jsx)(G, {
                business: g,
                renderMetadata: t,
                renderClaimButton: Q,
                businessPreview: s
            }), d[7] = g, d[8] = t, d[9] = s, d[10] = a) : a = d[10], d[11] !== m || d[12] !== a ? (r = (0, n.jsx)(c.Suspense, {
                fallback: m,
                children: a
            }), d[11] = m, d[12] = a, d[13] = r) : r = d[13], d[14] !== _ || d[15] !== r ? (l = (0, n.jsx)(v.a, {
                value: _,
                children: r
            }), d[14] = _, d[15] = r, d[16] = l) : l = d[16], l
        }

        function Q(e, t) {
            return (0, n.jsx)(X, {
                onClick: e,
                request: t
            })
        }
        let H = (0, g.a)(async () => {
                let {
                    parsePhoneNumberFromString: e
                } = await Promise.all([s.e(963703), s.e(87307)]).then(s.bind(s, "cggm"));
                return function(t) {
                    let {
                        phone: s,
                        href: i,
                        readOnly: a,
                        claimPreview: r = !1
                    } = t, l = e(s, "US")?.formatNational();
                    return null == l ? null : (0, n.jsx)(el, {
                        icon: (0, n.jsx)(h.a, {
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
            V = {
                yelp: "Yelp",
                "yelp-feed": "Yelp",
                tripadvisor: "Tripadvisor",
                "tripadvisor-feed": "Tripadvisor",
                "opentable-feed": "OpenTable"
            },
            z = m.object({
                layout: m.enum(["one-line", "two-lines"]).nullable().optional(),
                metadata: m.object({
                    map_url: m.string().nullable().optional()
                }).nullable().optional()
            }).loose();

        function q(e) {
            let t, s, a, r = (0, i.c)(12),
                {
                    reference: l,
                    actions: o,
                    claimActions: c
                } = e;
            r[0] !== l ? (t = (0, k.c)(l), r[0] = l, r[1] = t) : t = r[1];
            let d = t;
            r[2] !== l ? (s = z.safeParse(l), r[2] = l, r[3] = s) : s = r[3];
            let u = s;
            if (null == d) {
                let e;
                return r[4] !== o ? (e = null == o ? null : (0, n.jsx)(n.Fragment, {
                    children: o
                }), r[4] = o, r[5] = e) : e = r[5], e
            }
            let m = u.success ? u.data.metadata?.map_url : null,
                p = (u.success ? u.data.layout : null) ?? "sidebar";
            return r[6] !== o || r[7] !== d || r[8] !== c || r[9] !== m || r[10] !== p ? (a = (0, n.jsx)(Y, {
                actions: o,
                business: d,
                directionsUrl: m,
                layout: p,
                renderActions: !1,
                claimActions: c
            }), r[6] = o, r[7] = d, r[8] = c, r[9] = m, r[10] = p, r[11] = a) : a = r[11], a
        }

        function Y(e) {
            let t, s = (0, i.c)(20),
                a = (0, c.useContext)(U);
            if ((0, o.x)(y.d, "2789236610") && !e.readOnly && !e.claimActions && (null == e.layout || "sidebar" === e.layout)) {
                let t, i, r, l, o;
                if (null != a && (null != a.business.entity_lookup_id && null != e.business.entity_lookup_id ? a.business.entity_lookup_id === e.business.entity_lookup_id : "string" == typeof a.business.id && a.business.id === e.business.id || a.business.name.trim().toLowerCase() === e.business.name.trim().toLowerCase())) {
                    let t;
                    return s[0] !== e || s[1] !== a.claimAction || s[2] !== a.verified ? (t = (0, n.jsx)(Z, {
                        ...e,
                        verified: a.verified,
                        claimAction: a.claimAction
                    }), s[0] = e, s[1] = a.claimAction, s[2] = a.verified, s[3] = t) : t = s[3], t
                }
                return s[4] !== e ? (t = (0, n.jsx)(Z, {
                    ...e
                }), s[4] = e, s[5] = t) : t = s[5], s[6] !== e ? (i = (t, s) => (0, n.jsx)(Z, {
                    ...e,
                    verified: t,
                    claimAction: s
                }), s[6] = e, s[7] = i) : i = s[7], s[8] !== e.business || s[9] !== e.onAction ? (r = t => (0, n.jsx)(Z, {
                    business: e.business,
                    onAction: e.onAction,
                    layout: "claim-preview",
                    verified: t,
                    readOnly: !0
                }), s[8] = e.business, s[9] = e.onAction, s[10] = r) : r = s[10], s[11] !== e.business || s[12] !== i || s[13] !== r ? (l = (0, n.jsx)(G, {
                    business: e.business,
                    renderMetadata: i,
                    renderClaimButton: K,
                    businessPreview: r
                }), s[11] = e.business, s[12] = i, s[13] = r, s[14] = l) : l = s[14], s[15] !== t || s[16] !== l ? (o = (0, n.jsx)(c.Suspense, {
                    fallback: t,
                    children: l
                }), s[15] = t, s[16] = l, s[17] = o) : o = s[17], o
            }
            return s[18] !== e ? (t = (0, n.jsx)(Z, {
                ...e
            }), s[18] = e, s[19] = t) : t = s[19], t
        }

        function K(e, t) {
            return (0, n.jsx)(X, {
                onClick: e,
                request: t
            })
        }

        function Z(e) {
            let t, s, a, o, u, m, p, h, f, g, b, x = (0, i.c)(64),
                {
                    actions: y,
                    business: w,
                    directionsUrl: j,
                    isOptimistic: N,
                    layout: E,
                    onAction: A,
                    claimActions: O,
                    renderActions: S,
                    readOnly: P,
                    fullWidth: B,
                    showTitle: M,
                    verified: R,
                    claimAction: F,
                    showClaimedBusinessTooltip: D
                } = e,
                G = void 0 !== N && N,
                U = void 0 === E ? "sidebar" : E,
                W = void 0 === S || S,
                Q = void 0 !== P && P,
                V = void 0 === M || M,
                z = void 0 !== R && R,
                q = void 0 !== D && D,
                [K, Z] = (0, c.useState)(!1),
                [ee, et] = (0, c.useState)(!1),
                es = (0, C.d)(),
                ei = (0, c.useContext)(v.a),
                ea = (0, d.a)();
            x[0] !== w.phone ? (t = w.phone?.trim() ? (0, _.a)(`tel:${w.phone.trim()}`) : null, x[0] = w.phone, x[1] = t) : t = x[1];
            let er = t;
            x[2] !== w.address ? (s = w.address?.trim(), x[2] = w.address, x[3] = s) : s = x[3];
            let el = s,
                eo = "claim-preview" === U,
                ec = "sidebar" === U || eo;
            x[4] !== el || x[5] !== w.name ? (a = [w.name, el].filter(Boolean), x[4] = el, x[5] = w.name, x[6] = a) : a = x[6];
            let ed = a.join(", "),
                eu = eo ? "pt-4" : "mb-4",
                em = !(void 0 !== B && B) && "max-w-md";
            x[7] !== eu || x[8] !== em ? (o = (0, l.b)("not-prose text-base text-default", eu, em), x[7] = eu, x[8] = em, x[9] = o) : o = x[9];
            let ep = G ? "status" : void 0,
                eh = eo ? "ps-5 pe-6 pb-4" : void 0;
            x[10] !== w.name || x[11] !== ee || x[12] !== eo || x[13] !== ea || x[14] !== ec || x[15] !== Q || x[16] !== q || x[17] !== V || x[18] !== es?.imageEngagementContext?.surfaceLocation || x[19] !== z ? (u = ec && V ? (0, n.jsxs)("h2", {
                className: (0, l.b)("text-card-title leading-7 font-medium break-words", !eo && "mb-1"),
                children: [w.name, (z || ee) && (0, n.jsx)(T.a, {
                    className: "ms-2",
                    showTooltip: !Q && ec && (q || es?.imageEngagementContext?.surfaceLocation === r.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR),
                    label: ea.formatMessage({
                        id: "chatgpt.localBusiness.claim.verified.label",
                        defaultMessage: "Verified business",
                        description: "Accessible label for the blue badge beside a business name after ownership approval"
                    })
                })]
            }) : null, x[10] = w.name, x[11] = ee, x[12] = eo, x[13] = ea, x[14] = ec, x[15] = Q, x[16] = q, x[17] = V, x[18] = es?.imageEngagementContext?.surfaceLocation, x[19] = z, x[20] = u) : u = x[20];
            let ef = !Q;
            return x[21] !== w || x[22] !== ec || x[23] !== ef ? (m = (0, n.jsx)($, {
                business: w,
                showPrice: ec,
                linkRating: ef,
                wrap: ec
            }), x[21] = w, x[22] = ec, x[23] = ef, x[24] = m) : m = x[24], x[25] !== eh || x[26] !== u || x[27] !== m ? (p = (0, n.jsxs)("div", {
                className: eh,
                children: [u, m]
            }), x[25] = eh, x[26] = u, x[27] = m, x[28] = p) : p = x[28], x[29] !== w || x[30] !== eo || x[31] !== j || x[32] !== U || x[33] !== A || x[34] !== Q || x[35] !== W ? (h = W && "one-line" !== U ? (0, n.jsx)("div", {
                className: eo ? "ps-5 pe-4 pb-5" : "mt-3",
                children: (0, n.jsx)(en, {
                    allowQuoteAction: !Q,
                    business: w,
                    directionsUrl: j,
                    onAction: A,
                    openTarget: Q ? "external-browser" : void 0
                })
            }) : null, x[29] = w, x[30] = eo, x[31] = j, x[32] = U, x[33] = A, x[34] = Q, x[35] = W, x[36] = h) : h = x[36], x[37] !== w || x[38] !== F || x[39] !== O || x[40] !== ee || x[41] !== eo || x[42] !== j || x[43] !== G || x[44] !== ec || x[45] !== Q || x[46] !== er ? (f = ec ? (0, n.jsxs)("div", {
                className: (0, l.b)("divide-y divide-border", eo ? "px-5 pb-5" : "mt-3 border-t border-default"),
                children: [(0, n.jsx)(I, {
                    business: w,
                    claimPreview: eo
                }), (0, n.jsx)(J, {
                    business: w,
                    directionsUrl: j,
                    readOnly: Q,
                    claimPreview: eo
                }), null != er && null != w.phone ? (0, n.jsx)(H, {
                    phone: w.phone,
                    href: er,
                    readOnly: Q,
                    claimPreview: eo
                }) : null, F, G || Q || ee || null == O ? null : (0, n.jsx)(X, {
                    onClick: () => Z(!0)
                })]
            }) : null, x[37] = w, x[38] = F, x[39] = O, x[40] = ee, x[41] = eo, x[42] = j, x[43] = G, x[44] = ec, x[45] = Q, x[46] = er, x[47] = f) : f = x[47], x[48] !== w || x[49] !== O || x[50] !== K || x[51] !== ei || x[52] !== A || x[53] !== es ? (g = K && null != O && (0, n.jsx)(L, {
                business: {
                    ...w,
                    photoUrl: "restricted" === ei || es?.shouldBlockExternalEgress ? void 0 : (0, k.f)(w, es?.conversationType === "sidebar" ? es.contentReferences : void 0) ?? void 0
                },
                businessPreview: e => (0, n.jsx)(Y, {
                    business: w,
                    onAction: A,
                    layout: "claim-preview",
                    verified: e,
                    readOnly: !0
                }),
                actions: {
                    ...O,
                    onCheckDomain: O.onCheckDomain ? async () => {
                        let e = await O.onCheckDomain?.() ?? {
                            step: "review"
                        };
                        return "success" === e.step && et(!0), e
                    } : void 0,
                    onCheckClaim: O.onCheckClaim ? async () => {
                        let e = await O.onCheckClaim?.() ?? {
                            step: "review"
                        };
                        return "success" === e.step && et(!0), e
                    } : void 0,
                    onManageProfile: O.onManageProfile ? e => {
                        Z(!1), O.onManageProfile?.(e)
                    } : void 0
                },
                onClose: () => Z(!1)
            }), x[48] = w, x[49] = O, x[50] = K, x[51] = ei, x[52] = A, x[53] = es, x[54] = g) : g = x[54], x[55] !== y || x[56] !== ed || x[57] !== o || x[58] !== ep || x[59] !== p || x[60] !== h || x[61] !== f || x[62] !== g ? (b = (0, n.jsxs)("section", {
                "aria-label": ed,
                className: o,
                role: ep,
                children: [p, y, h, f, g]
            }), x[55] = y, x[56] = ed, x[57] = o, x[58] = ep, x[59] = p, x[60] = h, x[61] = f, x[62] = g, x[63] = b) : b = x[63], b
        }

        function J(e) {
            let t, s, a, r, l, o = (0, i.c)(14),
                {
                    business: c,
                    directionsUrl: d,
                    readOnly: u,
                    claimPreview: m
                } = e,
                p = void 0 !== u && u,
                f = void 0 !== m && m;
            o[0] !== c.address ? (t = c.address?.trim(), o[0] = c.address, o[1] = t) : t = o[1];
            let g = t;
            if (!g) return null;
            o[2] !== c || o[3] !== d ? (s = (0, _.a)(d ?? (0, k.e)(c) ?? "") || null, o[2] = c, o[3] = d, o[4] = s) : s = o[4];
            let b = s,
                v = !p || f;
            return o[5] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, n.jsx)(h.a, {
                asset: M.a
            }), o[5] = a) : a = o[5], o[6] !== g || o[7] !== p || o[8] !== b ? (r = null == b ? g : (0, n.jsx)(j.a, {
                className: "cursor-interaction hover:underline",
                href: b,
                initiator: "markdown_link_click",
                openTarget: p ? "external-browser" : void 0,
                children: g
            }), o[6] = g, o[7] = p, o[8] = b, o[9] = r) : r = o[9], o[10] !== f || o[11] !== v || o[12] !== r ? (l = (0, n.jsx)(el, {
                truncate: v,
                icon: a,
                claimPreview: f,
                children: r
            }), o[10] = f, o[11] = v, o[12] = r, o[13] = l) : l = o[13], l
        }

        function X(e) {
            let t, s, a, r, o, c = (0, i.c)(19),
                {
                    onClick: d,
                    request: m
                } = e;
            if (m?.status === "under_review") {
                let e, t, s;
                return c[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(h.a, {
                    className: "text-tertiary",
                    asset: D.a
                }), c[0] = e) : e = c[0], c[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(el, {
                    icon: e,
                    children: (0, n.jsx)("span", {
                        className: "text-secondary",
                        children: (0, n.jsx)(u.a, {
                            id: "chatgpt.localBusiness.claim.status.under_review",
                            defaultMessage: "Your claim is under review",
                            description: "Status action beneath a business's contact details, shown to the person whose ownership claim is awaiting review. Opens the existing claim so they can check its status or withdraw it. Keep this label short; it does not mean ownership is approved."
                        })
                    })
                }), c[1] = t) : t = c[1], c[2] !== d ? (s = (0, n.jsx)("button", {
                    type: "button",
                    onClick: d,
                    className: "w-full cursor-interaction text-start focus-visible:outline-ring",
                    children: t
                }), c[2] = d, c[3] = s) : s = c[3], s
            }
            let p = m && "in_progress" !== m.status ? "text-default" : "text-business-claim";
            c[4] !== p ? (t = (0, l.b)("flex min-h-12 w-full cursor-interaction items-center gap-4 py-3 text-start text-base font-medium select-none hover:underline focus-visible:outline-ring", p), c[4] = p, c[5] = t) : t = c[5];
            let g = m?.status === "needs_information",
                b = null != m && "needs_information" !== m.status;
            c[6] !== g || c[7] !== b ? (s = (0, l.b)({
                "text-warning": g,
                "text-tertiary": b
            }), c[6] = g, c[7] = b, c[8] = s) : s = c[8];
            let _ = m?.status === "needs_information" ? B.a : D.a;
            return c[9] !== s || c[10] !== _ ? (a = (0, n.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                children: (0, n.jsx)(h.a, {
                    className: s,
                    asset: _
                })
            }), c[9] = s, c[10] = _, c[11] = a) : a = c[11], c[12] !== m ? (r = m ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsxs)("span", {
                    className: "min-w-0 flex-1",
                    children: [(0, n.jsx)("span", {
                        className: "block",
                        children: (0, n.jsx)(u.a, {
                            id: "chatgpt.localBusiness.claim.status.title",
                            defaultMessage: "{status, select, in_progress {Finish verifying your business} needs_information {Your claim needs more information} under_review {Claim under review} other {Claim started}}",
                            description: "Claim status row in the business sidebar. Status is pending, in_progress, needs_information or under_review. Opens the existing claim.",
                            values: {
                                status: m.status
                            }
                        })
                    }), (0, n.jsx)("span", {
                        className: "block text-sm font-normal text-secondary",
                        children: (0, n.jsx)(u.a, {
                            id: "chatgpt.localBusiness.claim.status.subtitle",
                            defaultMessage: "{status, select, in_progress {Continue your business verification} needs_information {Review what’s needed to continue} under_review {Your claim is being reviewed} other {View your claim and next steps}}",
                            description: "Supporting text beneath the business sidebar claim status. Status is pending, in_progress, needs_information or under_review.",
                            values: {
                                status: m.status
                            }
                        })
                    })]
                }), (0, n.jsx)(f.ec, {})]
            }) : (0, n.jsx)(u.a, {
                id: "chatgpt.localBusiness.claim.button.label",
                defaultMessage: "Claim this profile",
                description: "Action below the phone number in the business sidebar that starts ownership verification"
            }), c[12] = m, c[13] = r) : r = c[13], c[14] !== d || c[15] !== t || c[16] !== a || c[17] !== r ? (o = (0, n.jsxs)("button", {
                className: t,
                type: "button",
                onClick: d,
                children: [a, r]
            }), c[14] = d, c[15] = t, c[16] = a, c[17] = r, c[18] = o) : o = c[18], o
        }

        function $(e) {
            let t, s, a, r, o, c, d, u, m = (0, i.c)(23),
                {
                    business: p,
                    showPrice: h,
                    linkRating: f,
                    shouldBlockExternalEgress: g,
                    wrap: b
                } = e,
                _ = void 0 !== h && h,
                v = void 0 === f || f,
                x = void 0 !== g && g,
                y = void 0 !== b && b;
            m[0] !== p.categories ? (t = p.categories?.find(es), m[0] = p.categories, m[1] = t) : t = m[1];
            let w = t;
            m[2] !== p || m[3] !== v || m[4] !== x ? (s = null == p.rating && null == V[p.provider ?? ""] ? null : (0, n.jsx)(er, {
                business: p,
                linkRating: v,
                shouldBlockExternalEgress: x
            }, "rating"), m[2] = p, m[3] = v, m[4] = x, m[5] = s) : s = m[5], m[6] !== w ? (a = w ? (0, n.jsx)("span", {
                className: "min-w-0 truncate",
                children: w
            }, "category") : null, m[6] = w, m[7] = a) : a = m[7], m[8] !== p.price_str || m[9] !== _ ? (r = _ && p.price_str ? (0, n.jsx)("span", {
                children: p.price_str
            }, "price") : null, m[8] = p.price_str, m[9] = _, m[10] = r) : r = m[10], m[11] !== s || m[12] !== a || m[13] !== r ? (o = [s, a, r].filter(et), m[11] = s, m[12] = a, m[13] = r, m[14] = o) : o = m[14];
            let j = o,
                C = y ? "text-base" : "text-sm",
                T = y ? "flex-wrap" : "flex-nowrap";
            return m[15] !== C || m[16] !== T ? (c = (0, l.b)("flex min-w-0 items-center leading-5 font-normal text-default", C, T), m[15] = C, m[16] = T, m[17] = c) : c = m[17], m[18] !== j ? (d = j.map(ee), m[18] = j, m[19] = d) : d = m[19], m[20] !== c || m[21] !== d ? (u = (0, n.jsx)("span", {
                className: c,
                children: d
            }), m[20] = c, m[21] = d, m[22] = u) : u = m[22], u
        }

        function ee(e, t) {
            return (0, n.jsxs)(c.Fragment, {
                children: [0 === t ? null : (0, n.jsx)("span", {
                    className: "mx-1 shrink-0",
                    "aria-hidden": !0,
                    children: "•"
                }), e]
            }, e.key)
        }

        function et(e) {
            return null != e
        }

        function es(e) {
            return e.trim().length > 0 && "Point" !== e
        }

        function en(e) {
            let t, s, a, d, m, h, f, g, w, T, N, E, I, A, O, S, B, M, R, F, D, L = (0, i.c)(68),
                {
                    allowQuoteAction: G,
                    analyticsMessageId: U,
                    business: W,
                    directionsUrl: Q,
                    onAction: H,
                    onQuoteInteractionOpenChange: V,
                    openTarget: z,
                    presentation: q,
                    primaryActionsOnly: Y,
                    reservationAction: K
                } = e,
                Z = void 0 === G || G,
                J = void 0 === q ? "sidebar" : q,
                X = void 0 !== Y && Y,
                $ = (0, o.z)(p.f),
                ee = (0, C.d)(),
                et = (0, c.useContext)(v.a);
            L[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, b.b)(), L[0] = t) : t = L[0];
            let es = (0, x.h)(t),
                en = (0, o.x)(y.d, "2673474834");
            L[1] !== W || L[2] !== J || L[3] !== en ? (s = (0, _.a)(en && "sidebar" === J ? (0, k.g)(W) ?? "" : "") || null, L[1] = W, L[2] = J, L[3] = en, L[4] = s) : s = L[4];
            let er = s;
            L[5] !== W || L[6] !== Q ? (a = (0, _.a)(Q ?? (0, k.e)(W) ?? "") || null, L[5] = W, L[6] = Q, L[7] = a) : a = L[7];
            let el = a;
            L[8] !== W.website_url ? (d = (0, _.a)(W.website_url?.trim() ?? "") || null, L[8] = W.website_url, L[9] = d) : d = L[9];
            let eo = d;
            L[10] !== W.phone ? (m = W.phone?.trim() ? (0, _.a)(`tel:${W.phone.trim()}`) : null, L[10] = W.phone, L[11] = m) : m = L[11];
            let ec = m;
            L[12] !== W.service_providers ? (h = (0, k.h)(W.service_providers), L[12] = W.service_providers, L[13] = h) : h = L[13];
            let ed = h;
            L[14] !== $ || L[15] !== Z || L[16] !== W.reservation_providers || L[17] !== es || L[18] !== et || L[19] !== ed || L[20] !== er || L[21] !== ee ? (f = Z && null != $ && ee?.shouldBlockExternalEgress === !1 && (ee.canRequestQuote ?? !ee.isReadOnly) && "restricted" !== et && es && null == er && !W.reservation_providers?.some(ea) && ed.length > 0, L[14] = $, L[15] = Z, L[16] = W.reservation_providers, L[17] = es, L[18] = et, L[19] = ed, L[20] = er, L[21] = ee, L[22] = f) : f = L[22];
            let eu = f;
            L[23] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, n.jsx)(u.a, {
                id: "chatgpt.localBusiness.reserve",
                defaultMessage: "Reserve",
                description: "Short button label in a local restaurant sidebar that opens the reservation provider website"
            }), L[23] = g) : g = L[23], L[24] !== er ? (w = {
                key: r.d.CHATGPT_ENTITY_AFFORDANCE_RESERVE,
                href: er,
                label: g
            }, L[24] = er, L[25] = w) : w = L[25], L[26] === Symbol.for("react.memo_cache_sentinel") ? (T = (0, n.jsx)(u.a, {
                id: "chatgpt.localBusiness.directions",
                defaultMessage: "Directions",
                description: "Short button label in a local business sidebar that opens directions to the business"
            }), L[26] = T) : T = L[26], L[27] !== el ? (N = {
                key: r.d.CHATGPT_ENTITY_AFFORDANCE_DIRECTIONS,
                href: el,
                label: T
            }, L[27] = el, L[28] = N) : N = L[28], L[29] === Symbol.for("react.memo_cache_sentinel") ? (E = (0, n.jsx)(u.a, {
                id: "chatgpt.localBusiness.website",
                defaultMessage: "Website",
                description: "Short button label in a local business sidebar that opens the business website"
            }), L[29] = E) : E = L[29], L[30] !== eo ? (I = {
                key: r.d.CHATGPT_ENTITY_AFFORDANCE_WEBSITE,
                href: eo,
                label: E
            }, L[30] = eo, L[31] = I) : I = L[31], L[32] === Symbol.for("react.memo_cache_sentinel") ? (A = (0, n.jsx)(u.a, {
                id: "chatgpt.localBusiness.call",
                defaultMessage: "Call",
                description: "Short button label in a local business sidebar that calls the business phone number"
            }), L[32] = A) : A = L[32], L[33] !== ec ? (O = {
                key: r.d.CHATGPT_ENTITY_AFFORDANCE_CALL,
                href: ec,
                label: A
            }, L[33] = ec, L[34] = O) : O = L[34], L[35] !== w || L[36] !== N || L[37] !== I || L[38] !== O ? (S = [w, N, I, O].filter(ei), L[35] = w, L[36] = N, L[37] = I, L[38] = O, L[39] = S) : S = L[39], L[40] !== eu || L[41] !== X || L[42] !== K || L[43] !== S ? (B = S.slice(0, X ? 0 : 3 - Number(eu) - Number(null != K)), L[40] = eu, L[41] = X, L[42] = K, L[43] = S, L[44] = B) : B = L[44];
            let em = B;
            if (!eu && 0 === em.length && null == K) return null;
            L[45] !== J ? (M = e => (0, l.b)("no-drag relative flex cursor-interaction items-center justify-center rounded-full border after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] hover:after:bg-media-background/5 text-sm leading-4 font-medium whitespace-nowrap select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring", "sidebar" === J ? "h-9 px-5" : "h-7.5 flex-auto px-4", 0 === e ? "border-transparent bg-primary-solid text-primary-solid" : "border-default bg-transparent text-default"), L[45] = J, L[46] = M) : M = L[46];
            let ep = M;
            return L[47] !== ep || L[48] !== U || L[49] !== W.id || L[50] !== eu || L[51] !== H || L[52] !== V || L[53] !== J || L[54] !== ed || L[55] !== ee ? (R = eu && (0, n.jsx)(P.a, {
                analyticsMessageId: U,
                businessId: "string" == typeof W.id ? W.id : void 0,
                ctaSurface: "hover" === J ? "map_card" : "business_sidebar",
                onAction: () => H?.(r.d.CHATGPT_ENTITY_AFFORDANCE_REQUEST_QUOTE),
                onInteractionOpenChange: V,
                providers: ed,
                trigger: (0, n.jsx)("button", {
                    className: ep(0),
                    type: "button",
                    children: (0, n.jsx)(P.b, {})
                }),
                turnContext: ee
            }), L[47] = ep, L[48] = U, L[49] = W.id, L[50] = eu, L[51] = H, L[52] = V, L[53] = J, L[54] = ed, L[55] = ee, L[56] = R) : R = L[56], L[57] !== ep || L[58] !== em || L[59] !== eu || L[60] !== H || L[61] !== z || L[62] !== K ? (F = em.map((e, t) => (0, n.jsx)(j.a, {
                className: ep(t + Number(eu) + Number(null != K)),
                href: e.href,
                initiator: "markdown_link_click",
                openTarget: z,
                onClick: () => H?.(e.key),
                children: e.label
            }, e.key)), L[57] = ep, L[58] = em, L[59] = eu, L[60] = H, L[61] = z, L[62] = K, L[63] = F) : F = L[63], L[64] !== K || L[65] !== R || L[66] !== F ? (D = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-wrap gap-2",
                children: [R, K, F]
            }), L[64] = K, L[65] = R, L[66] = F, L[67] = D) : D = L[67], D
        }

        function ei(e) {
            return null != e.href
        }

        function ea(e) {
            return null != e.launcherPayload
        }

        function er(e) {
            let t, s, a, r, o, u = (0, i.c)(27),
                {
                    business: m,
                    linkRating: p,
                    shouldBlockExternalEgress: f
                } = e,
                g = (0, d.a)(),
                b = (0, w.a)(),
                x = (0, C.d)(),
                y = (0, c.useContext)(v.a),
                T = !f && x?.shouldBlockExternalEgress !== !0 && "restricted" !== y;
            if (u[0] !== T || u[1] !== m.provider || u[2] !== m.provider_logo_dark_url || u[3] !== m.provider_logo_dark_url_short || u[4] !== m.provider_logo_url || u[5] !== m.provider_logo_url_short || u[6] !== m.provider_url || u[7] !== m.rating || u[8] !== g || u[9] !== b || u[10] !== p) {
                let e, i = m.provider_logo_url_short?.trim() || m.provider_logo_url?.trim(),
                    r = b && (m.provider_logo_dark_url_short?.trim() || m.provider_logo_dark_url?.trim()) || i,
                    o = T && r ? (0, _.b)(r) : null;
                u[14] !== T || u[15] !== m.provider_url || u[16] !== p ? (e = p && T && (0, _.a)(m.provider_url?.trim() ?? "") || null, u[14] = T, u[15] = m.provider_url, u[16] = p, u[17] = e) : e = u[17], t = e;
                let c = V[m.provider ?? ""] ?? m.provider ?? "";
                u[18] !== m.rating || u[19] !== g ? (s = null != m.rating ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(h.a, {
                        asset: F.a,
                        className: "size-3.5 shrink-0"
                    }), (0, n.jsx)("span", {
                        children: g.formatNumber(m.rating, {
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1
                        })
                    })]
                }) : null, u[18] = m.rating, u[19] = g, u[20] = s) : s = u[20], a = o ? (0, n.jsx)("img", {
                    alt: c,
                    className: (0, l.b)("w-auto max-w-18 shrink-0 object-contain", o.toLowerCase().includes("tripadvisor_ollie") ? "h-3" : "h-3.5"),
                    src: o
                }) : V[m.provider ?? ""] ?? null, u[0] = T, u[1] = m.provider, u[2] = m.provider_logo_dark_url, u[3] = m.provider_logo_dark_url_short, u[4] = m.provider_logo_url, u[5] = m.provider_logo_url_short, u[6] = m.provider_url, u[7] = m.rating, u[8] = g, u[9] = b, u[10] = p, u[11] = t, u[12] = s, u[13] = a
            } else t = u[11], s = u[12], a = u[13];
            u[21] !== s || u[22] !== a ? (r = (0, n.jsxs)(n.Fragment, {
                children: [s, a]
            }), u[21] = s, u[22] = a, u[23] = r) : r = u[23];
            let k = r;
            return u[24] !== k || u[25] !== t ? (o = null == t ? (0, n.jsx)("span", {
                className: "inline-flex shrink-0 items-center gap-1",
                children: k
            }) : (0, n.jsx)(j.a, {
                className: "inline-flex shrink-0 cursor-interaction items-center gap-1 hover:text-secondary",
                href: t,
                initiator: "markdown_link_click",
                children: k
            }), u[24] = k, u[25] = t, u[26] = o) : o = u[26], o
        }

        function el(e) {
            let t, s, a, r, o, c = (0, i.c)(13),
                {
                    icon: d,
                    children: u,
                    truncate: m,
                    claimPreview: p
                } = e,
                h = void 0 !== p && p ? "py-2.5" : "py-2";
            c[0] !== h ? (t = (0, l.b)("flex min-h-11 items-center gap-4", h), c[0] = h, c[1] = t) : t = c[1], c[2] !== d ? (s = (0, n.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                children: d
            }), c[2] = d, c[3] = s) : s = c[3];
            let f = void 0 !== m && m && "truncate";
            return c[4] !== f ? (a = (0, l.b)("min-w-0 flex-1 text-base font-medium select-text", f), c[4] = f, c[5] = a) : a = c[5], c[6] !== u || c[7] !== a ? (r = (0, n.jsx)("span", {
                className: a,
                children: u
            }), c[6] = u, c[7] = a, c[8] = r) : r = c[8], c[9] !== t || c[10] !== s || c[11] !== r ? (o = (0, n.jsxs)("div", {
                className: t,
                children: [s, r]
            }), c[9] = t, c[10] = s, c[11] = r, c[12] = o) : o = c[12], o
        }
    }),
    PUeQ: (function(e, t, s) {
        var n = s("ABep"),
            i = s("QosV"),
            a = s("Wf1j"),
            r = s("oyxz");
        s.d(t, {}, {
            a: function(e) {
                let t, s, l, o, c = (0, i.c)(20),
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
                            defaultMessage: "Permanently closed",
                            description: "Status in a local business preview or details sidebar indicating the business has permanently closed"
                        })
                    }), c[0] = e) : e = c[0], e
                }
                let p = d.is_open;
                if (null == p) return null;
                let h = d.next_open_hour;
                if (!u || null == h) {
                    let e;
                    return c[1] !== p ? (e = p ? (0, n.jsx)("span", {
                        className: "text-success",
                        children: (0, n.jsx)(r.a, {
                            id: "chatgpt.localBusiness.open",
                            defaultMessage: "Open",
                            description: "Status in a local business preview or details sidebar indicating the business is currently open"
                        })
                    }) : (0, n.jsx)("span", {
                        className: "text-danger",
                        children: (0, n.jsx)(r.a, {
                            id: "chatgpt.localBusiness.closed",
                            defaultMessage: "Closed",
                            description: "Status in a local business preview or details sidebar indicating the business is currently closed"
                        })
                    }), c[1] = p, c[2] = e) : e = c[2], e
                }
                let f = d.local_day ?? new Date().getDay(),
                    g = null != d.local_day && p && h.end <= h.start ? (h.day + 1) % 7 : h.day,
                    b = p ? h.end : h.start;
                c[3] !== m || c[4] !== b ? (t = m.formatTime(new Date(0, 0, 0, Number.parseInt(b.slice(0, 2), 10), Number.parseInt(b.slice(2, 4), 10)), {
                    hour: "numeric",
                    minute: "2-digit"
                }), c[3] = m, c[4] = b, c[5] = t) : t = c[5];
                let _ = t;
                c[6] !== p ? (s = e => (0, n.jsx)("span", {
                    className: p ? "text-success" : "text-danger",
                    children: e
                }), c[6] = p, c[7] = s) : s = c[7];
                let v = s;
                if (g === f) {
                    let e;
                    return c[8] !== p || c[9] !== v || c[10] !== _ ? (e = p ? (0, n.jsx)("span", {
                        children: (0, n.jsx)(r.a, {
                            id: "chatgpt.localBusiness.openUntilTime",
                            defaultMessage: "<status>Open</status> until {time}",
                            description: "Business status in a details sidebar when the business is currently open and closes today. The time is the locale-formatted closing time. The status tag styles Open as a positive status",
                            values: {
                                status: v,
                                time: _
                            }
                        })
                    }) : (0, n.jsx)("span", {
                        children: (0, n.jsx)(r.a, {
                            id: "chatgpt.localBusiness.closedUntilTime",
                            defaultMessage: "<status>Closed</status> until {time}",
                            description: "Business status in a details sidebar when the business is currently closed and opens today. The time is the locale-formatted opening time. The status tag styles Closed as a negative status",
                            values: {
                                status: v,
                                time: _
                            }
                        })
                    }), c[8] = p, c[9] = v, c[10] = _, c[11] = e) : e = c[11], e
                }
                c[12] !== m || c[13] !== g ? (l = m.formatDate(new Date(0, 0, g), {
                    weekday: "short"
                }), c[12] = m, c[13] = g, c[14] = l) : l = c[14];
                let x = l;
                return c[15] !== x || c[16] !== p || c[17] !== v || c[18] !== _ ? (o = p ? (0, n.jsx)("span", {
                    children: (0, n.jsx)(r.a, {
                        id: "chatgpt.localBusiness.openUntilDayTime",
                        defaultMessage: "<status>Open</status> until {day} {time}",
                        description: "Business status in a details sidebar when the business is currently open and closes on a different day. The day is the locale-formatted abbreviated weekday and time is the closing time. The status tag styles Open as a positive status",
                        values: {
                            status: v,
                            day: x,
                            time: _
                        }
                    })
                }) : (0, n.jsx)("span", {
                    children: (0, n.jsx)(r.a, {
                        id: "chatgpt.localBusiness.closedUntilDayTime",
                        defaultMessage: "<status>Closed</status> until {day} {time}",
                        description: "Business status in a details sidebar when the business is currently closed and opens on a different day. The day is the locale-formatted abbreviated weekday and time is the opening time. The status tag styles Closed as a negative status",
                        values: {
                            status: v,
                            day: x,
                            time: _
                        }
                    })
                }), c[15] = x, c[16] = p, c[17] = v, c[18] = _, c[19] = o) : o = c[19], o
            }
        })
    }),
    FRPb: (function(e, t, s) {
        var n = s("alRw"),
            i = s.n(n),
            a = s("iTtm"),
            r = s("rKAs"),
            l = s("OWtl"),
            o = s("zvAa"),
            c = s("tZ3A"),
            d = s("dQRk"),
            u = s("WOVT"),
            m = s("TJEh");
        let p = (0, a.v)(l.a, e => null),
            h = (0, a.d)(l.a, (e, t) => {
                let {
                    get: s
                } = t, n = s(p, e);
                if (null == n) return null;
                let i = s(d.L, e);
                return null != i && Object.values(i).some(e => null != e.message && (0, o.c)(e.message).some(e => {
                    let t = (0, m.c)(e);
                    if (null == t) return !1;
                    let s = ("string" == typeof e.name ? e.name : t.name).trim().toLowerCase();
                    return t.id === n.business.id || "" !== s && s === n.business.name.trim().toLowerCase()
                })) ? null : n.business
            }),
            f = (0, a.d)(l.a, (e, t) => {
                let {
                    get: s
                } = t, n = s(c.e, e);
                if (null == n) return null;
                let i = s(d.L, e);
                return null != i && Object.values(i).some(e => null != e.message && (0, o.c)(e.message).some(e => null == e.layout && (0, u.c)(e)?.canonical_id === n.canonical_id)) ? null : n
            });
        s.d(t, {}, {
            a: function(e) {
                return (t, s) => (0, c.g)(t, s, {
                    onCancel: e => {
                        t.set(p, e, null)
                    },
                    onError: e => {
                        t.set(p, e, null)
                    },
                    onStart: n => {
                        t.set(p, n, {
                            business: e,
                            category: s.category,
                            messageId: s.messageId,
                            sourceConversationId: s.sourceConversationId
                        })
                    }
                })
            },
            b: p,
            c: f,
            d: h,
            e: function(e, t, s, n) {
                let a = e.get(p, t),
                    l = e.get(c.c, t);
                if (null == a && null == l) return;
                let h = e.get(c.c, s);
                if (null != h && h !== n && !i()({
                        ...h,
                        entityKnowledgeId: null,
                        entityKnowledgePending: !1
                    }, {
                        ...n,
                        entityKnowledgeId: null,
                        entityKnowledgePending: !1
                    }, (e, t, s) => void 0 === s ? void 0 : Object.is(e, t))) return;
                let f = Object.values(e.get(d.L, t) ?? {}).flatMap(e => null == e.message ? [] : (0, o.c)(e.message)),
                    g = f.filter(e => "entity_metadata" === e.type && null == e.layout),
                    b = l?.businessPreview ?? a?.business;
                if (null != b) {
                    let t = g.map(m.c).findLast(e => null != e && (e.id === b.id || e.name.trim().toLowerCase() === b.name.trim().toLowerCase())) ?? a?.business;
                    null != t && e.set(p, s, {
                        category: l?.category ?? n.category,
                        messageId: n.messageId,
                        sourceConversationId: n.sourceConversationId,
                        business: t
                    })
                }
                if (null != l) {
                    let t = g.map(u.c).findLast(e => null != e && e.canonical_id === l.businessProfile?.canonical_id) ?? l.businessProfile;
                    e.set(c.c, s, {
                        ...l,
                        entityKnowledgeId: h?.entityKnowledgeId,
                        entityKnowledgePending: h?.entityKnowledgePending,
                        businessProfile: t
                    }), e.set(c.e, s, t ?? null)
                }
                let _ = f.find(e => "image_group" === e.type && ("full_width" === e.layout || 0 === e.start_idx));
                e.set(c.b, s, (null == _ ? null : (0, r.u)(_, 0)[0]) ?? e.get(c.b, t))
            }
        })
    }),
    ynn3: (function(e, t, s) {
        s.d(t, {
            a: () => N,
            b: () => I
        });
        var n = s("ABep"),
            i = s("QosV"),
            a = s("tBe6"),
            r = s("iTtm"),
            l = s("xnQm"),
            o = s("zd8w"),
            c = s("Wf1j"),
            d = s("oyxz"),
            u = s("ASxG"),
            m = s("bqtn"),
            p = s("bf6R"),
            h = s("E6P3"),
            f = s("zSQm"),
            g = s("WAdu"),
            b = s("yGJW"),
            _ = s("OWtl"),
            v = s("WFY2"),
            x = s("OMcg"),
            y = s("pI8I"),
            w = s("OOaz"),
            j = s("rVXE"),
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
        let T = {
                thumbtack: "Thumbtack",
                yelp: "Yelp"
            },
            k = u.string().trim().min(1).transform(f.b).catch(void 0);

        function N(e) {
            let t, s, d, u, f, v, N, I, P, B, M, R, F, D, L, G = (0, i.c)(47),
                {
                    analyticsMessageId: U,
                    businessId: W,
                    ctaSurface: Q,
                    onAction: H,
                    onInteractionOpenChange: V,
                    providers: z,
                    trigger: q,
                    turnContext: Y
                } = e,
                K = (0, r.y)(_.a),
                Z = (0, c.a)(),
                J = (0, o.useContext)(g.a);
            G[0] !== J || G[1] !== Z || G[2] !== Y.shouldBlockExternalEgress ? (t = e => ({
                provider: e,
                logoUrl: !1 === Y.shouldBlockExternalEgress && "restricted" !== J ? k.parse(e.provider_logo) : void 0,
                label: e.provider_name?.trim() || T[e.provider?.trim().toLowerCase() ?? ""] || e.provider?.trim() || Z.formatMessage({
                    id: "chatgpt.localBusiness.quoteProvider",
                    defaultMessage: "Quote provider",
                    description: "Fallback item in the local business Get Quote provider menu when no company name was supplied. Selecting it opens that provider’s quote flow."
                })
            }), G[0] = J, G[1] = Z, G[2] = Y.shouldBlockExternalEgress, G[3] = t) : t = G[3], G[4] !== Z ? (s = (e, t) => e.label.localeCompare(t.label, Z.locale, {
                sensitivity: "base"
            }), G[4] = Z, G[5] = s) : s = G[5];
            let X = z.map(t).sort(s),
                $ = (0, o.useRef)(!1),
                ee = (0, o.useRef)(!1);
            G[6] !== V ? (d = () => {
                $.current = !1, ee.current = !1, V?.(!1)
            }, G[6] = V, G[7] = d) : d = G[7];
            let et = (0, o.useEffectEvent)(d);
            G[8] !== et ? (u = () => () => et(), G[8] = et, G[9] = u) : u = G[9], G[10] === Symbol.for("react.memo_cache_sentinel") ? (f = [], G[10] = f) : f = G[10], (0, o.useLayoutEffect)(u, f), G[11] === Symbol.for("react.memo_cache_sentinel") ? (v = new Set, G[11] = v) : v = G[11];
            let es = (0, o.useRef)(v),
                en = !1 !== Y.trackShownImpressions,
                ei = Y.browserConversationId ?? Y.conversationId;
            G[12] !== U || G[13] !== ei || G[14] !== K || G[15] !== Y.hostId || G[16] !== Y.messageId ? (N = {
                launch: (e, t, s) => {
                    if ((0, w.e)(ei)) throw Error("Wait for this conversation to finish saving, then try again.");
                    return (0, y.c)({
                        scope: K,
                        hostId: Y.hostId,
                        chatGptConversationId: ei,
                        payload: e,
                        sourceMessageId: U ?? Y.messageId,
                        signal: t,
                        onTracking: s
                    })
                },
                onError: E
            }, G[12] = U, G[13] = ei, G[14] = K, G[15] = Y.hostId, G[16] = Y.messageId, G[17] = N) : N = G[17];
            let ea = (0, j.a)(N);
            G[18] !== U || G[19] !== W || G[20] !== ei || G[21] !== Q || G[22] !== K || G[23] !== en || G[24] !== Y.messageId ? (I = (e, t) => {
                let s = e.launcherPayload.appUri,
                    n = A(e);
                if ("show" === t) {
                    if (!en || es.current.has(n)) return;
                    es.current.add(n)
                }
                try {
                    (0, b.a)(K, a.d, {
                        action: "show" === t ? "CHATGPT_CONTENT_REFERENCE_ACTION_SHOW" : "CHATGPT_CONTENT_REFERENCE_ACTION_CLICK",
                        eventType: "show" === t ? "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_SHOWN" : "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_CLICKED",
                        businessId: W ?? void 0,
                        connectorId: s.startsWith("connectors://") ? s.slice(13) : s,
                        contentReferenceType: "map_card" === Q ? "map" : "entity_metadata",
                        conversationId: ei,
                        ctaSurface: Q,
                        ctaType: "service",
                        linkType: "local_business_service",
                        messageId: U ?? Y.messageId,
                        sectionLocation: "response",
                        serviceProvider: e.provider ?? void 0,
                        serviceActionType: e.action_type ?? void 0
                    })
                } catch {}
            }, G[18] = U, G[19] = W, G[20] = ei, G[21] = Q, G[22] = K, G[23] = en, G[24] = Y.messageId, G[25] = I) : I = G[25];
            let er = I,
                el = 1 === z.length ? z[0] : void 0;
            G[26] !== el ? (P = null == el ? null : A(el), G[26] = el, G[27] = P) : P = G[27];
            let eo = P;
            G[28] !== el || G[29] !== er ? (B = () => {
                null != el && er(el, "show")
            }, G[28] = el, G[29] = er, G[30] = B) : B = G[30];
            let ec = (0, o.useEffectEvent)(B);
            G[31] !== eo || G[32] !== ec ? (M = () => {
                null != eo && ec()
            }, G[31] = eo, G[32] = ec, G[33] = M) : M = G[33], G[34] !== eo || G[35] !== en ? (R = [eo, en], G[34] = eo, G[35] = en, G[36] = R) : R = G[36], (0, o.useEffect)(M, R);
            let ed = e => {
                er(e, "click"), H?.(), ee.current = !0, V?.(!0), ea.launch(e.launcherPayload)
            };
            if (0 === z.length) return null;
            let eu = null != el ? (0, n.jsx)(S, {
                trigger: q,
                onClick: () => ed(el)
            }) : (0, n.jsx)(O, {
                contentWidth: "menuWide",
                onOpenChange: e => {
                    if ($.current = e, V?.(e || ee.current), e)
                        for (let e of z) er(e, "show")
                },
                size: "action",
                triggerButton: q,
                children: X.map(e => {
                    let {
                        provider: t,
                        label: s,
                        logoUrl: i
                    } = e, a = t.provider?.trim().toLowerCase() === "thumbtack" ? (0, n.jsx)(C, {
                        className: "size-5 text-default",
                        "aria-hidden": !0,
                        focusable: "false"
                    }) : (0, n.jsx)(p.Jg, {
                        className: "text-secondary"
                    });
                    return (0, n.jsx)(m.c.Item, {
                        leftIcon: null == i ? a : (0, n.jsx)(h.a, {
                            className: "size-5 rounded-sm",
                            alt: "",
                            fallback: a,
                            src: i
                        }, i),
                        onClick: () => ed(t),
                        children: s
                    }, A(t))
                })
            });
            return G[37] !== ei || G[38] !== ea || G[39] !== V || G[40] !== Y.hostId ? (F = null == ea.dialog ? null : (0, n.jsx)(x.EcosystemWidgetDialog, {
                conversationId: (0, l.Oe)(ei),
                hostId: Y.hostId,
                onClose: () => {
                    ea.close(), ee.current = !1, V?.($.current)
                },
                state: ea.dialog
            }), G[37] = ei, G[38] = ea, G[39] = V, G[40] = Y.hostId, G[41] = F) : F = G[41], G[42] !== F ? (D = (0, n.jsx)(n.Fragment, {
                children: F
            }), G[42] = F, G[43] = D) : D = G[43], G[44] !== eu || G[45] !== D ? (L = (0, n.jsxs)(n.Fragment, {
                children: [eu, D]
            }), G[44] = eu, G[45] = D, G[46] = L) : L = G[46], L
        }

        function E(e) {
            v.a.error("ChatGPT entity quote launch failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function I() {
            let e, t = (0, i.c)(1);
            return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(d.a, {
                id: "chatgpt.localBusiness.getQuote",
                defaultMessage: "Get Quote",
                description: "Short button on a local business result, preview, or sidebar. It opens a price or availability quote request; when several providers are available, the user first chooses a provider."
            }), t[0] = e) : e = t[0], e
        }

        function A(e) {
            return JSON.stringify([e.provider, e.provider_business_id, e.launcherPayload.appUri])
        }

        function O(e) {
            let t, s, a, r, l, c, d = (0, i.c)(11);
            d[0] !== e ? ({
                onOpenChange: t,
                ...s
            } = e, d[0] = e, d[1] = t, d[2] = s) : (t = d[1], s = d[2]), d[3] !== t ? (a = () => t?.(!1), d[3] = t, d[4] = a) : a = d[4];
            let u = (0, o.useEffectEvent)(a);
            return d[5] !== u ? (r = () => () => u(), d[5] = u, d[6] = r) : r = d[6], d[7] === Symbol.for("react.memo_cache_sentinel") ? (l = [], d[7] = l) : l = d[7], (0, o.useLayoutEffect)(r, l), d[8] !== t || d[9] !== s ? (c = (0, n.jsx)(m.a, {
                ...s,
                onOpenChange: t
            }), d[8] = t, d[9] = s, d[10] = c) : c = d[10], c
        }

        function S(e) {
            let {
                trigger: t,
                onClick: s
            } = e;
            return (0, o.cloneElement)(t, {
                onClick: s
            })
        }
    }),
    rVXE: (function(e, t, s) {
        var n = s("QosV"),
            i = s("zd8w"),
            a = s("T8YV");
        s.d(t, {}, {
            a: function(e) {
                let t, s, r, l, o, c = (0, n.c)(9),
                    {
                        launch: d,
                        onError: u
                    } = e,
                    m = (0, i.useRef)(null);
                c[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => {
                    m.current?.controller.abort()
                }, s = [], c[0] = t, c[1] = s) : (t = c[0], s = c[1]), (0, i.useEffect)(t, s);
                let [p, h] = (0, i.useState)(null);
                c[2] !== d || c[3] !== u ? (r = async e => {
                    let t;
                    if (m.current?.pending) return;
                    m.current?.controller.abort();
                    let s = {
                        controller: new AbortController,
                        pending: !0
                    };
                    m.current = s;
                    let {
                        signal: n
                    } = s.controller;
                    h({
                        kind: "loading",
                        nonModal: !0
                    });
                    try {
                        let i = await d(e, n, e => {
                            t = e, n.aborted || h({
                                kind: "loading",
                                nonModal: !0,
                                tracking: t
                            })
                        });
                        s.pending = !1, n.aborted || h({
                            kind: "ready",
                            result: i
                        })
                    } catch (e) {
                        s.pending = !1, !n.aborted && ((0, a.d)(e) || u?.(e), n.aborted || h({
                            kind: "error",
                            error: e,
                            tracking: t
                        }))
                    }
                }, c[2] = d, c[3] = u, c[4] = r) : r = c[4];
                let f = r;
                return c[5] === Symbol.for("react.memo_cache_sentinel") ? (l = () => {
                    m.current?.controller.abort(), m.current = null, h(null)
                }, c[5] = l) : l = c[5], c[6] !== p || c[7] !== f ? (o = {
                    close: l,
                    dialog: p,
                    launch: f
                }, c[6] = p, c[7] = f, c[8] = o) : o = c[8], o
            }
        })
    }),
    WQMB: (function(e, t, s) {
        s.d(t, {}, {
            a: async function() {
                return (await Promise.all([s.e(418851), s.e(109308), s.e(399565), s.e(257798), s.e(153380), s.e(617936), s.e(807489), s.e(337882), s.e(955979), s.e(646436), s.e(7078), s.e(200429), s.e(698524), s.e(956483), s.e(87162), s.e(396705), s.e(155568), s.e(731863), s.e(767086), s.e(76629), s.e(514085), s.e(204542), s.e(982651), s.e(673108), s.e(487481), s.e(877700), s.e(987784), s.e(664815)]).then(s.bind(s, "riR8"))).BusinessClaimFlow
            },
            b: async function() {
                return (await Promise.all([s.e(418851), s.e(109308), s.e(399565), s.e(257798), s.e(153380), s.e(617936), s.e(807489), s.e(337882), s.e(955979), s.e(646436), s.e(7078), s.e(200429), s.e(698524), s.e(956483), s.e(87162), s.e(396705), s.e(155568), s.e(731863), s.e(767086), s.e(76629), s.e(514085), s.e(204542), s.e(982651), s.e(673108), s.e(487481), s.e(877700), s.e(987784), s.e(140534)]).then(s.bind(s, "wVZg"))).BusinessClaimSurface
            }
        })
    }),
    v1r0: (function(e, t, s) {
        var n = s("ASxG");
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
            d = n.union([i, a, r.extend({
                minimum_order_amount: n.string().regex(/^(?:\d+(?:\.\d*)?|\.\d+)$/).refine(e => Number.isFinite(Number(e)) && Number(e) > 0),
                currency: n.string().regex(/^[A-Z]{3}$/)
            })]),
            u = n.union([l, o.extend({
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
        s.d(t, {}, {
            a: m,
            b: d,
            c: p,
            d: u
        })
    })
};