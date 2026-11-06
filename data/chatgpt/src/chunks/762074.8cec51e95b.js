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
            for (let r of e.get(l.c, t) ?? [])
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
            d = s("VQnT"),
            u = s("aImb");

        function m(e) {
            let t, s, m, p, h, f = (0, i.c)(13),
                {
                    className: g,
                    label: b,
                    showTooltip: v,
                    size: _
                } = e,
                x = void 0 === _ ? 20 : _,
                y = v && "shrink-0 rounded-sm select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none";
            f[0] !== g || f[1] !== y ? (t = (0, a.b)("-mt-0.75 inline-flex align-middle", y, g), f[0] = g, f[1] = y, f[2] = t) : t = f[2];
            let w = v ? 0 : void 0;
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
            return v ? (f[10] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, n.jsxs)("div", {
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
            a: () => et,
            b: () => er,
            c: () => V,
            ChatGptLocalBusinessMetadata: () => X,
            d: () => Z,
            e: () => es,
            f: () => ed
        });
        var n = s("ABep"),
            i = s("QosV"),
            a = s("WQMB"),
            r = s("EA6X"),
            l = s("on57"),
            o = s("BolX"),
            c = s("fDDa"),
            d = s("zd8w"),
            u = s("Wf1j"),
            m = s("oyxz"),
            p = s("ASxG"),
            h = s("Cslg"),
            f = s("ZtSy"),
            g = s("k9qd"),
            b = s("HOLv"),
            v = s("bf6R"),
            _ = s("Bbed"),
            x = s("zSQm"),
            y = s("WAdu"),
            w = s("HwRo"),
            j = s("hZax"),
            C = s("OMIV"),
            T = s("a6Zv"),
            k = s("KDax"),
            N = s("TUMj"),
            E = s("T2J5"),
            I = s("TJEh"),
            A = s("PUeQ"),
            O = s("EWcN");

        function S(e) {
            let t, s, a, r, o, c = (0, i.c)(19),
                {
                    business: p,
                    claimPreview: h
                } = e,
                f = void 0 !== h && h,
                g = (0, u.a)(),
                _ = (0, d.useId)(),
                [x, y] = (0, d.useState)(!1),
                w = !!p.hours?.length,
                j = null != p.is_open || p.is_closed_permanently;
            if (!w && !j) return null;
            c[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(b.a, {
                asset: O.a,
                className: "shrink-0"
            }), c[0] = t) : t = c[0], c[1] !== p || c[2] !== j ? (s = (0, n.jsxs)(n.Fragment, {
                children: [t, (0, n.jsx)("span", {
                    className: "min-w-0 flex-1 text-base font-medium",
                    children: j ? (0, n.jsx)(A.a, {
                        business: p,
                        showHourDetail: !0
                    }) : (0, n.jsx)(m.a, {
                        id: "chatgpt.localBusiness.hours.label",
                        defaultMessage: "Hours",
                        description: "Short label in a local business profile when its weekly opening schedule is available but its current open or closed status is unknown. Selecting the row shows the schedule."
                    })
                })]
            }), c[1] = p, c[2] = j, c[3] = s) : s = c[3];
            let C = s;
            return c[4] !== f || c[5] !== x || c[6] !== w || c[7] !== _ || c[8] !== C ? (a = w ? (0, n.jsxs)("button", {
                type: "button",
                "aria-controls": _,
                "aria-expanded": x,
                className: (0, l.b)("flex min-h-11 w-full cursor-interaction items-center gap-4 text-start select-none hover:bg-secondary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset", f ? "py-2.5" : "py-2"),
                onClick: () => y(!x),
                children: [C, (0, n.jsx)(v.$b, {
                    className: (0, l.b)("text-secondary", x && "rotate-180")
                })]
            }) : (0, n.jsx)("div", {
                className: (0, l.b)("flex min-h-11 items-center gap-4", f ? "py-2.5" : "py-2"),
                children: C
            }), c[4] = f, c[5] = x, c[6] = w, c[7] = _, c[8] = C, c[9] = a) : a = c[9], c[10] !== p.hours || c[11] !== x || c[12] !== w || c[13] !== g || c[14] !== _ ? (r = w && (0, n.jsx)("dl", {
                id: _,
                hidden: !x,
                className: "ms-10 pb-2 text-sm select-text",
                children: [1, 2, 3, 4, 5, 6, 0].map(e => {
                    let t = p.hours?.filter(t => t.day === e).sort(B);
                    return (0, n.jsxs)("div", {
                        className: "flex gap-4 py-2",
                        children: [(0, n.jsx)("dt", {
                            className: "w-28 shrink-0",
                            children: g.formatDate(new Date(Date.UTC(2026, 0, 4 + e)), {
                                weekday: "long",
                                timeZone: "UTC"
                            })
                        }), (0, n.jsx)("dd", {
                            children: t?.length ? t.map((e, t) => (0, n.jsx)("div", {
                                children: (0, n.jsx)(m.a, {
                                    id: "chatgpt.localBusiness.hours.interval",
                                    defaultMessage: "{start} – {end}",
                                    description: "One opening interval in a local business profile's weekly schedule. The start and end placeholders are locale-formatted business-local opening and closing times. An end earlier than the start is the following day. Keep this compact; multiple intervals may appear for one day.",
                                    values: {
                                        start: P(g, e.start),
                                        end: P(g, e.end)
                                    }
                                })
                            }, t)) : (0, n.jsx)(m.a, {
                                id: "chatgpt.localBusiness.hours.closed",
                                defaultMessage: "Closed",
                                description: "Status for a weekday with no opening intervals in a known weekly schedule on a local business profile. This is never used when the entire schedule is unknown."
                            })
                        })]
                    }, e)
                })
            }), c[10] = p.hours, c[11] = x, c[12] = w, c[13] = g, c[14] = _, c[15] = r) : r = c[15], c[16] !== a || c[17] !== r ? (o = (0, n.jsxs)("div", {
                children: [a, r]
            }), c[16] = a, c[17] = r, c[18] = o) : o = c[18], o
        }

        function B(e, t) {
            return e.start.localeCompare(t.start)
        }

        function P(e, t) {
            return e.formatTime(new Date(Date.UTC(2026, 0, 4, Number(t.slice(0, 2)), Number(t.slice(2, 4)))), {
                hour: "numeric",
                minute: "2-digit",
                timeZone: "UTC"
            })
        }
        var R = s("FRPb"),
            M = s("ynn3"),
            F = s("ARKs"),
            D = s("wmA0"),
            L = s("PpZH"),
            U = s("eVLy"),
            W = s("XxTS");
        let G = (0, _.a)(a.a),
            H = (0, _.a)(a.b, {
                suspendToParent: !0,
                errorFallback: e => {
                    let {
                        renderMetadata: t
                    } = e;
                    return t(!1, null)
                }
            }),
            Q = (0, d.createContext)(null);

        function V(e) {
            let t, s, a, r, l, c = (0, i.c)(17),
                {
                    business: u,
                    children: m,
                    conversationId: p,
                    shouldBlockExternalEgress: h
                } = e,
                f = (0, o.x)(R.b, p),
                g = u ?? f?.business,
                b = (0, d.useContext)(y.a);
            if (!(0, o.x)(C.d, "2778625748") || null == g) {
                let e;
                return c[0] !== m ? (e = (0, n.jsx)(n.Fragment, {
                    children: m
                }), c[0] = m, c[1] = e) : e = c[1], e
            }
            let v = void 0 !== h && h ? "restricted" : b;
            return c[2] !== g || c[3] !== m ? (t = (e, t) => (0, n.jsx)(Q, {
                value: {
                    business: g,
                    verified: e,
                    claimAction: t
                },
                children: m
            }), c[2] = g, c[3] = m, c[4] = t) : t = c[4], c[5] !== g ? (s = e => (0, n.jsx)($, {
                business: g,
                layout: "claim-preview",
                verified: e,
                readOnly: !0
            }), c[5] = g, c[6] = s) : s = c[6], c[7] !== g || c[8] !== t || c[9] !== s ? (a = (0, n.jsx)(H, {
                business: g,
                renderMetadata: t,
                renderClaimButton: q,
                businessPreview: s
            }), c[7] = g, c[8] = t, c[9] = s, c[10] = a) : a = c[10], c[11] !== m || c[12] !== a ? (r = (0, n.jsx)(d.Suspense, {
                fallback: m,
                children: a
            }), c[11] = m, c[12] = a, c[13] = r) : r = c[13], c[14] !== v || c[15] !== r ? (l = (0, n.jsx)(y.a, {
                value: v,
                children: r
            }), c[14] = v, c[15] = r, c[16] = l) : l = c[16], l
        }

        function q(e, t) {
            return (0, n.jsx)(et, {
                onClick: e,
                request: t
            })
        }
        let z = (0, _.a)(async () => {
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
                    return null == l ? null : (0, n.jsx)(ed, {
                        icon: (0, n.jsx)(b.a, {
                            asset: L.a
                        }),
                        claimPreview: r,
                        children: (0, n.jsx)(k.a, {
                            className: "cursor-interaction hover:underline",
                            href: i,
                            initiator: "markdown_link_click",
                            openTarget: a ? "external-browser" : void 0,
                            children: l
                        })
                    })
                }
            }),
            K = {
                yelp: "Yelp",
                "yelp-feed": "Yelp",
                tripadvisor: "Tripadvisor",
                "tripadvisor-feed": "Tripadvisor",
                "opentable-feed": "OpenTable"
            },
            Y = p.object({
                layout: p.enum(["one-line", "two-lines"]).nullable().optional(),
                metadata: p.object({
                    map_url: p.string().nullable().optional()
                }).nullable().optional()
            }).loose();

        function Z(e) {
            let t, s, a, r = (0, i.c)(12),
                {
                    reference: l,
                    actions: o,
                    claimActions: c
                } = e;
            r[0] !== l ? (t = (0, I.c)(l), r[0] = l, r[1] = t) : t = r[1];
            let d = t;
            r[2] !== l ? (s = Y.safeParse(l), r[2] = l, r[3] = s) : s = r[3];
            let u = s;
            if (null == d) {
                let e;
                return r[4] !== o ? (e = null == o ? null : (0, n.jsx)(n.Fragment, {
                    children: o
                }), r[4] = o, r[5] = e) : e = r[5], e
            }
            let m = u.success ? u.data.metadata?.map_url : null,
                p = (u.success ? u.data.layout : null) ?? "sidebar";
            return r[6] !== o || r[7] !== d || r[8] !== c || r[9] !== m || r[10] !== p ? (a = (0, n.jsx)(X, {
                actions: o,
                business: d,
                directionsUrl: m,
                layout: p,
                renderActions: !1,
                claimActions: c
            }), r[6] = o, r[7] = d, r[8] = c, r[9] = m, r[10] = p, r[11] = a) : a = r[11], a
        }

        function X(e) {
            let t, s = (0, i.c)(20),
                a = (0, d.useContext)(Q);
            if ((0, o.x)(C.d, "2778625748") && !e.readOnly && !e.claimActions && (null == e.layout || "sidebar" === e.layout)) {
                let t, i, r, l, o;
                if (null != a && (null != a.business.entity_lookup_id && null != e.business.entity_lookup_id ? a.business.entity_lookup_id === e.business.entity_lookup_id : "string" == typeof a.business.id && a.business.id === e.business.id || a.business.name.trim().toLowerCase() === e.business.name.trim().toLowerCase())) {
                    let t;
                    return s[0] !== e || s[1] !== a.claimAction || s[2] !== a.verified ? (t = (0, n.jsx)($, {
                        ...e,
                        verified: a.verified,
                        claimAction: a.claimAction
                    }), s[0] = e, s[1] = a.claimAction, s[2] = a.verified, s[3] = t) : t = s[3], t
                }
                return s[4] !== e ? (t = (0, n.jsx)($, {
                    ...e
                }), s[4] = e, s[5] = t) : t = s[5], s[6] !== e ? (i = (t, s) => (0, n.jsx)($, {
                    ...e,
                    verified: t,
                    claimAction: s
                }), s[6] = e, s[7] = i) : i = s[7], s[8] !== e.business || s[9] !== e.onAction ? (r = t => (0, n.jsx)($, {
                    business: e.business,
                    onAction: e.onAction,
                    layout: "claim-preview",
                    verified: t,
                    readOnly: !0
                }), s[8] = e.business, s[9] = e.onAction, s[10] = r) : r = s[10], s[11] !== e.business || s[12] !== i || s[13] !== r ? (l = (0, n.jsx)(H, {
                    business: e.business,
                    renderMetadata: i,
                    renderClaimButton: J,
                    businessPreview: r
                }), s[11] = e.business, s[12] = i, s[13] = r, s[14] = l) : l = s[14], s[15] !== t || s[16] !== l ? (o = (0, n.jsx)(d.Suspense, {
                    fallback: t,
                    children: l
                }), s[15] = t, s[16] = l, s[17] = o) : o = s[17], o
            }
            return s[18] !== e ? (t = (0, n.jsx)($, {
                ...e
            }), s[18] = e, s[19] = t) : t = s[19], t
        }

        function J(e, t) {
            return (0, n.jsx)(et, {
                onClick: e,
                request: t
            })
        }

        function $(e) {
            let t, s, a, o, c, m, p, h, f, g, b, v = (0, i.c)(64),
                {
                    actions: _,
                    business: w,
                    directionsUrl: j,
                    isOptimistic: C,
                    layout: T,
                    onAction: k,
                    claimActions: A,
                    renderActions: O,
                    readOnly: B,
                    fullWidth: P,
                    showTitle: R,
                    verified: M,
                    claimAction: F,
                    showClaimedBusinessTooltip: D
                } = e,
                L = void 0 !== C && C,
                U = void 0 === T ? "sidebar" : T,
                W = void 0 === O || O,
                H = void 0 !== B && B,
                Q = void 0 === R || R,
                V = void 0 !== M && M,
                q = void 0 !== D && D,
                [K, Y] = (0, d.useState)(!1),
                [Z, J] = (0, d.useState)(!1),
                $ = (0, N.d)(),
                en = (0, d.useContext)(y.a),
                ei = (0, u.a)();
            v[0] !== w.phone ? (t = w.phone?.trim() ? (0, x.a)(`tel:${w.phone.trim()}`) : null, v[0] = w.phone, v[1] = t) : t = v[1];
            let ea = t;
            v[2] !== w.address ? (s = w.address?.trim(), v[2] = w.address, v[3] = s) : s = v[3];
            let el = s,
                eo = "claim-preview" === U,
                ec = "sidebar" === U || eo;
            v[4] !== el || v[5] !== w.name ? (a = [w.name, el].filter(Boolean), v[4] = el, v[5] = w.name, v[6] = a) : a = v[6];
            let ed = a.join(", "),
                eu = eo ? "pt-4" : "mb-4",
                em = !(void 0 !== P && P) && "max-w-md";
            v[7] !== eu || v[8] !== em ? (o = (0, l.b)("not-prose text-base text-default", eu, em), v[7] = eu, v[8] = em, v[9] = o) : o = v[9];
            let ep = L ? "status" : void 0,
                eh = eo ? "ps-5 pe-6 pb-4" : void 0;
            v[10] !== w.name || v[11] !== Z || v[12] !== eo || v[13] !== ei || v[14] !== ec || v[15] !== H || v[16] !== q || v[17] !== Q || v[18] !== $?.imageEngagementContext?.surfaceLocation || v[19] !== V ? (c = ec && Q ? (0, n.jsxs)("h2", {
                className: (0, l.b)("text-card-title leading-7 font-medium break-words", !eo && "mb-1"),
                children: [w.name, (V || Z) && (0, n.jsx)(E.a, {
                    className: "ms-2",
                    showTooltip: !H && ec && (q || $?.imageEngagementContext?.surfaceLocation === r.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR),
                    label: ei.formatMessage({
                        id: "chatgpt.localBusiness.claim.verified.label",
                        defaultMessage: "Verified business",
                        description: "Accessible label for the blue badge beside a business name after ownership approval"
                    })
                })]
            }) : null, v[10] = w.name, v[11] = Z, v[12] = eo, v[13] = ei, v[14] = ec, v[15] = H, v[16] = q, v[17] = Q, v[18] = $?.imageEngagementContext?.surfaceLocation, v[19] = V, v[20] = c) : c = v[20];
            let ef = !H;
            return v[21] !== w || v[22] !== ec || v[23] !== ef ? (m = (0, n.jsx)(es, {
                business: w,
                showPrice: ec,
                linkRating: ef,
                wrap: ec
            }), v[21] = w, v[22] = ec, v[23] = ef, v[24] = m) : m = v[24], v[25] !== eh || v[26] !== c || v[27] !== m ? (p = (0, n.jsxs)("div", {
                className: eh,
                children: [c, m]
            }), v[25] = eh, v[26] = c, v[27] = m, v[28] = p) : p = v[28], v[29] !== w || v[30] !== eo || v[31] !== j || v[32] !== U || v[33] !== k || v[34] !== H || v[35] !== W ? (h = W && "one-line" !== U ? (0, n.jsx)("div", {
                className: eo ? "ps-5 pe-4 pb-5" : "mt-3",
                children: (0, n.jsx)(er, {
                    allowQuoteAction: !H,
                    business: w,
                    directionsUrl: j,
                    onAction: k,
                    openTarget: H ? "external-browser" : void 0
                })
            }) : null, v[29] = w, v[30] = eo, v[31] = j, v[32] = U, v[33] = k, v[34] = H, v[35] = W, v[36] = h) : h = v[36], v[37] !== w || v[38] !== F || v[39] !== A || v[40] !== Z || v[41] !== eo || v[42] !== j || v[43] !== L || v[44] !== ec || v[45] !== H || v[46] !== ea ? (f = ec ? (0, n.jsxs)("div", {
                className: (0, l.b)("divide-y divide-border", eo ? "px-5 pb-5" : "mt-3 border-t border-default"),
                children: [(0, n.jsx)(S, {
                    business: w,
                    claimPreview: eo
                }), (0, n.jsx)(ee, {
                    business: w,
                    directionsUrl: j,
                    readOnly: H,
                    claimPreview: eo
                }), null != ea && null != w.phone ? (0, n.jsx)(z, {
                    phone: w.phone,
                    href: ea,
                    readOnly: H,
                    claimPreview: eo
                }) : null, F, L || H || Z || null == A ? null : (0, n.jsx)(et, {
                    onClick: () => Y(!0)
                })]
            }) : null, v[37] = w, v[38] = F, v[39] = A, v[40] = Z, v[41] = eo, v[42] = j, v[43] = L, v[44] = ec, v[45] = H, v[46] = ea, v[47] = f) : f = v[47], v[48] !== w || v[49] !== A || v[50] !== K || v[51] !== en || v[52] !== k || v[53] !== $ ? (g = K && null != A && (0, n.jsx)(G, {
                business: {
                    ...w,
                    photoUrl: "restricted" === en || $?.shouldBlockExternalEgress ? void 0 : (0, I.f)(w, $?.conversationType === "sidebar" ? $.contentReferences : void 0) ?? void 0
                },
                businessPreview: e => (0, n.jsx)(X, {
                    business: w,
                    onAction: k,
                    layout: "claim-preview",
                    verified: e,
                    readOnly: !0
                }),
                actions: {
                    ...A,
                    onCheckDomain: A.onCheckDomain ? async () => {
                        let e = await A.onCheckDomain?.() ?? {
                            step: "review"
                        };
                        return "success" === e.step && J(!0), e
                    } : void 0,
                    onCheckClaim: A.onCheckClaim ? async () => {
                        let e = await A.onCheckClaim?.() ?? {
                            step: "review"
                        };
                        return "success" === e.step && J(!0), e
                    } : void 0,
                    onManageProfile: A.onManageProfile ? e => {
                        Y(!1), A.onManageProfile?.(e)
                    } : void 0
                },
                onClose: () => Y(!1)
            }), v[48] = w, v[49] = A, v[50] = K, v[51] = en, v[52] = k, v[53] = $, v[54] = g) : g = v[54], v[55] !== _ || v[56] !== ed || v[57] !== o || v[58] !== ep || v[59] !== p || v[60] !== h || v[61] !== f || v[62] !== g ? (b = (0, n.jsxs)("section", {
                "aria-label": ed,
                className: o,
                role: ep,
                children: [p, _, h, f, g]
            }), v[55] = _, v[56] = ed, v[57] = o, v[58] = ep, v[59] = p, v[60] = h, v[61] = f, v[62] = g, v[63] = b) : b = v[63], b
        }

        function ee(e) {
            let t, s, a, r, l, o = (0, i.c)(14),
                {
                    business: c,
                    directionsUrl: d,
                    readOnly: u,
                    claimPreview: m
                } = e,
                p = void 0 !== u && u,
                h = void 0 !== m && m;
            o[0] !== c.address ? (t = c.address?.trim(), o[0] = c.address, o[1] = t) : t = o[1];
            let f = t;
            if (!f) return null;
            o[2] !== c || o[3] !== d ? (s = (0, x.a)(d ?? (0, I.e)(c) ?? "") || null, o[2] = c, o[3] = d, o[4] = s) : s = o[4];
            let g = s,
                v = !p || h;
            return o[5] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, n.jsx)(b.a, {
                asset: D.a
            }), o[5] = a) : a = o[5], o[6] !== f || o[7] !== p || o[8] !== g ? (r = null == g ? f : (0, n.jsx)(k.a, {
                className: "cursor-interaction hover:underline",
                href: g,
                initiator: "markdown_link_click",
                openTarget: p ? "external-browser" : void 0,
                children: f
            }), o[6] = f, o[7] = p, o[8] = g, o[9] = r) : r = o[9], o[10] !== h || o[11] !== v || o[12] !== r ? (l = (0, n.jsx)(ed, {
                truncate: v,
                icon: a,
                claimPreview: h,
                children: r
            }), o[10] = h, o[11] = v, o[12] = r, o[13] = l) : l = o[13], l
        }

        function et(e) {
            let t, s, a, r, o, c = (0, i.c)(19),
                {
                    onClick: d,
                    request: u
                } = e;
            if (u?.status === "under_review") {
                let e, t, s;
                return c[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(b.a, {
                    className: "text-tertiary",
                    asset: W.a
                }), c[0] = e) : e = c[0], c[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(ed, {
                    icon: e,
                    children: (0, n.jsx)("span", {
                        className: "text-secondary",
                        children: (0, n.jsx)(m.a, {
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
            let p = u && "in_progress" !== u.status ? "text-default" : "text-business-claim";
            c[4] !== p ? (t = (0, l.b)("flex min-h-12 w-full cursor-interaction items-center gap-4 py-3 text-start text-base font-medium select-none hover:underline focus-visible:outline-ring", p), c[4] = p, c[5] = t) : t = c[5];
            let h = u?.status === "needs_information",
                f = null != u && "needs_information" !== u.status;
            c[6] !== h || c[7] !== f ? (s = (0, l.b)({
                "text-warning": h,
                "text-tertiary": f
            }), c[6] = h, c[7] = f, c[8] = s) : s = c[8];
            let g = u?.status === "needs_information" ? F.a : W.a;
            return c[9] !== s || c[10] !== g ? (a = (0, n.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                children: (0, n.jsx)(b.a, {
                    className: s,
                    asset: g
                })
            }), c[9] = s, c[10] = g, c[11] = a) : a = c[11], c[12] !== u ? (r = u ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsxs)("span", {
                    className: "min-w-0 flex-1",
                    children: [(0, n.jsx)("span", {
                        className: "block",
                        children: (0, n.jsx)(m.a, {
                            id: "chatgpt.localBusiness.claim.status.title",
                            defaultMessage: "{status, select, in_progress {Finish verifying your business} needs_information {Your claim needs more information} under_review {Claim under review} other {Claim started}}",
                            description: "Claim status row in the business sidebar. Status is pending, in_progress, needs_information or under_review. Opens the existing claim.",
                            values: {
                                status: u.status
                            }
                        })
                    }), (0, n.jsx)("span", {
                        className: "block text-sm font-normal text-secondary",
                        children: (0, n.jsx)(m.a, {
                            id: "chatgpt.localBusiness.claim.status.subtitle",
                            defaultMessage: "{status, select, in_progress {Continue your business verification} needs_information {Review what’s needed to continue} under_review {Your claim is being reviewed} other {View your claim and next steps}}",
                            description: "Supporting text beneath the business sidebar claim status. Status is pending, in_progress, needs_information or under_review.",
                            values: {
                                status: u.status
                            }
                        })
                    })]
                }), (0, n.jsx)(v.fc, {})]
            }) : (0, n.jsx)(m.a, {
                id: "chatgpt.localBusiness.claim.button.label",
                defaultMessage: "Claim this business",
                description: "Action below the phone number in the business sidebar that starts ownership verification"
            }), c[12] = u, c[13] = r) : r = c[13], c[14] !== d || c[15] !== t || c[16] !== a || c[17] !== r ? (o = (0, n.jsxs)("button", {
                className: t,
                type: "button",
                onClick: d,
                children: [a, r]
            }), c[14] = d, c[15] = t, c[16] = a, c[17] = r, c[18] = o) : o = c[18], o
        }

        function es(e) {
            let t, s, a, r, o, c, d, u, m = (0, i.c)(23),
                {
                    business: p,
                    showPrice: h,
                    linkRating: f,
                    shouldBlockExternalEgress: g,
                    wrap: b
                } = e,
                v = void 0 !== h && h,
                _ = void 0 === f || f,
                x = void 0 !== g && g,
                y = void 0 !== b && b;
            m[0] !== p.categories ? (t = p.categories?.find(ea), m[0] = p.categories, m[1] = t) : t = m[1];
            let w = t;
            m[2] !== p || m[3] !== _ || m[4] !== x ? (s = null == p.rating && null == K[p.provider ?? ""] ? null : (0, n.jsx)(ec, {
                business: p,
                linkRating: _,
                shouldBlockExternalEgress: x
            }, "rating"), m[2] = p, m[3] = _, m[4] = x, m[5] = s) : s = m[5], m[6] !== w ? (a = w ? (0, n.jsx)("span", {
                className: "min-w-0 truncate",
                children: w
            }, "category") : null, m[6] = w, m[7] = a) : a = m[7], m[8] !== p.price_str || m[9] !== v ? (r = v && p.price_str ? (0, n.jsx)("span", {
                children: p.price_str
            }, "price") : null, m[8] = p.price_str, m[9] = v, m[10] = r) : r = m[10], m[11] !== s || m[12] !== a || m[13] !== r ? (o = [s, a, r].filter(ei), m[11] = s, m[12] = a, m[13] = r, m[14] = o) : o = m[14];
            let j = o,
                C = y ? "text-base" : "text-sm",
                T = y ? "flex-wrap" : "flex-nowrap";
            return m[15] !== C || m[16] !== T ? (c = (0, l.b)("flex min-w-0 items-center leading-5 font-normal text-default", C, T), m[15] = C, m[16] = T, m[17] = c) : c = m[17], m[18] !== j ? (d = j.map(en), m[18] = j, m[19] = d) : d = m[19], m[20] !== c || m[21] !== d ? (u = (0, n.jsx)("span", {
                className: c,
                children: d
            }), m[20] = c, m[21] = d, m[22] = u) : u = m[22], u
        }

        function en(e, t) {
            return (0, n.jsxs)(d.Fragment, {
                children: [0 === t ? null : (0, n.jsx)("span", {
                    className: "mx-1 shrink-0",
                    "aria-hidden": !0,
                    children: "•"
                }), e]
            }, e.key)
        }

        function ei(e) {
            return null != e
        }

        function ea(e) {
            return e.trim().length > 0 && "Point" !== e
        }

        function er(e) {
            let t, s, a, c, u, p, f, g, b, v, _, T, E, A, O, S, B, P, R, F, D, L = (0, i.c)(68),
                {
                    allowQuoteAction: U,
                    analyticsMessageId: W,
                    business: G,
                    directionsUrl: H,
                    onAction: Q,
                    onQuoteInteractionOpenChange: V,
                    openTarget: q,
                    presentation: z,
                    primaryActionsOnly: K,
                    reservationAction: Y
                } = e,
                Z = void 0 === U || U,
                X = void 0 === z ? "sidebar" : z,
                J = void 0 !== K && K,
                $ = (0, o.z)(h.f),
                ee = (0, N.d)(),
                et = (0, d.useContext)(y.a);
            L[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, w.b)(), L[0] = t) : t = L[0];
            let es = (0, j.h)(t),
                en = (0, o.x)(C.d, "2673474834");
            L[1] !== G || L[2] !== X || L[3] !== en ? (s = (0, x.a)(en && "sidebar" === X ? (0, I.g)(G) ?? "" : "") || null, L[1] = G, L[2] = X, L[3] = en, L[4] = s) : s = L[4];
            let ei = s;
            L[5] !== G || L[6] !== H ? (a = (0, x.a)(H ?? (0, I.e)(G) ?? "") || null, L[5] = G, L[6] = H, L[7] = a) : a = L[7];
            let ea = a;
            L[8] !== G.website_url ? (c = (0, x.a)(G.website_url?.trim() ?? "") || null, L[8] = G.website_url, L[9] = c) : c = L[9];
            let er = c;
            L[10] !== G.phone ? (u = G.phone?.trim() ? (0, x.a)(`tel:${G.phone.trim()}`) : null, L[10] = G.phone, L[11] = u) : u = L[11];
            let ec = u;
            L[12] !== G.service_providers ? (p = (0, I.h)(G.service_providers), L[12] = G.service_providers, L[13] = p) : p = L[13];
            let ed = p;
            L[14] !== $ || L[15] !== Z || L[16] !== G.reservation_providers || L[17] !== es || L[18] !== et || L[19] !== ed || L[20] !== ei || L[21] !== ee ? (f = Z && null != $ && ee?.shouldBlockExternalEgress === !1 && (ee.canRequestQuote ?? !ee.isReadOnly) && "restricted" !== et && es && null == ei && !G.reservation_providers?.some(eo) && ed.length > 0, L[14] = $, L[15] = Z, L[16] = G.reservation_providers, L[17] = es, L[18] = et, L[19] = ed, L[20] = ei, L[21] = ee, L[22] = f) : f = L[22];
            let eu = f;
            L[23] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, n.jsx)(m.a, {
                id: "chatgpt.localBusiness.reserve",
                defaultMessage: "Reserve",
                description: "Short button label in a local restaurant sidebar that opens the reservation provider website"
            }), L[23] = g) : g = L[23], L[24] !== ei ? (b = {
                key: r.d.CHATGPT_ENTITY_AFFORDANCE_RESERVE,
                href: ei,
                label: g
            }, L[24] = ei, L[25] = b) : b = L[25], L[26] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, n.jsx)(m.a, {
                id: "chatgpt.localBusiness.directions",
                defaultMessage: "Directions",
                description: "Short button label in a local business sidebar that opens directions to the business"
            }), L[26] = v) : v = L[26], L[27] !== ea ? (_ = {
                key: r.d.CHATGPT_ENTITY_AFFORDANCE_DIRECTIONS,
                href: ea,
                label: v
            }, L[27] = ea, L[28] = _) : _ = L[28], L[29] === Symbol.for("react.memo_cache_sentinel") ? (T = (0, n.jsx)(m.a, {
                id: "chatgpt.localBusiness.website",
                defaultMessage: "Website",
                description: "Short button label in a local business sidebar that opens the business website"
            }), L[29] = T) : T = L[29], L[30] !== er ? (E = {
                key: r.d.CHATGPT_ENTITY_AFFORDANCE_WEBSITE,
                href: er,
                label: T
            }, L[30] = er, L[31] = E) : E = L[31], L[32] === Symbol.for("react.memo_cache_sentinel") ? (A = (0, n.jsx)(m.a, {
                id: "chatgpt.localBusiness.call",
                defaultMessage: "Call",
                description: "Short button label in a local business sidebar that calls the business phone number"
            }), L[32] = A) : A = L[32], L[33] !== ec ? (O = {
                key: r.d.CHATGPT_ENTITY_AFFORDANCE_CALL,
                href: ec,
                label: A
            }, L[33] = ec, L[34] = O) : O = L[34], L[35] !== b || L[36] !== _ || L[37] !== E || L[38] !== O ? (S = [b, _, E, O].filter(el), L[35] = b, L[36] = _, L[37] = E, L[38] = O, L[39] = S) : S = L[39], L[40] !== eu || L[41] !== J || L[42] !== Y || L[43] !== S ? (B = S.slice(0, J ? 0 : 3 - Number(eu) - Number(null != Y)), L[40] = eu, L[41] = J, L[42] = Y, L[43] = S, L[44] = B) : B = L[44];
            let em = B;
            if (!eu && 0 === em.length && null == Y) return null;
            L[45] !== X ? (P = e => (0, l.b)("no-drag relative flex cursor-interaction items-center justify-center rounded-full border after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] hover:after:bg-media-background/5 text-sm leading-4 font-medium whitespace-nowrap select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring", "sidebar" === X ? "h-9 px-5" : "h-7.5 flex-auto px-4", 0 === e ? "border-transparent bg-primary-solid text-primary-solid" : "border-default bg-transparent text-default"), L[45] = X, L[46] = P) : P = L[46];
            let ep = P;
            return L[47] !== ep || L[48] !== W || L[49] !== G.id || L[50] !== eu || L[51] !== Q || L[52] !== V || L[53] !== X || L[54] !== ed || L[55] !== ee ? (R = eu && (0, n.jsx)(M.a, {
                analyticsMessageId: W,
                businessId: "string" == typeof G.id ? G.id : void 0,
                ctaSurface: "hover" === X ? "map_card" : "business_sidebar",
                onAction: () => Q?.(r.d.CHATGPT_ENTITY_AFFORDANCE_REQUEST_QUOTE),
                onInteractionOpenChange: V,
                providers: ed,
                trigger: (0, n.jsx)("button", {
                    className: ep(0),
                    type: "button",
                    children: (0, n.jsx)(M.b, {})
                }),
                turnContext: ee
            }), L[47] = ep, L[48] = W, L[49] = G.id, L[50] = eu, L[51] = Q, L[52] = V, L[53] = X, L[54] = ed, L[55] = ee, L[56] = R) : R = L[56], L[57] !== ep || L[58] !== em || L[59] !== eu || L[60] !== Q || L[61] !== q || L[62] !== Y ? (F = em.map((e, t) => (0, n.jsx)(k.a, {
                appearance: "button",
                className: ep(t + Number(eu) + Number(null != Y)),
                href: e.href,
                initiator: "markdown_link_click",
                openTarget: q,
                onClick: () => Q?.(e.key),
                children: e.label
            }, e.key)), L[57] = ep, L[58] = em, L[59] = eu, L[60] = Q, L[61] = q, L[62] = Y, L[63] = F) : F = L[63], L[64] !== Y || L[65] !== R || L[66] !== F ? (D = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-wrap gap-2",
                children: [R, Y, F]
            }), L[64] = Y, L[65] = R, L[66] = F, L[67] = D) : D = L[67], D
        }

        function el(e) {
            return null != e.href
        }

        function eo(e) {
            return null != e.launcherPayload
        }

        function ec(e) {
            let t, s, a, r, o, m = (0, i.c)(17),
                {
                    business: p,
                    linkRating: h,
                    shouldBlockExternalEgress: v
                } = e,
                _ = (0, u.a)(),
                w = (0, T.a)(),
                C = (0, N.d)(),
                E = (0, d.useContext)(y.a),
                I = !v && C?.shouldBlockExternalEgress !== !0 && "restricted" !== E,
                A = p.provider_logo_url_short?.trim() || p.provider_logo_url?.trim(),
                O = w && (p.provider_logo_dark_url_short?.trim() || p.provider_logo_dark_url?.trim()) || A,
                S = I && O ? (0, x.b)(O) : null;
            m[0] !== I || m[1] !== p.provider_url || m[2] !== h ? (t = (0, g.a)(p.provider_url?.trim() ?? ""), s = h && I && (0, c.d)(t), m[0] = I, m[1] = p.provider_url, m[2] = h, m[3] = t, m[4] = s) : (t = m[3], s = m[4]);
            let B = s,
                P = (0, j.h)(B && "1492523517"),
                R = P ? f.a : k.a,
                M = K[p.provider ?? ""] ?? p.provider ?? "";
            m[5] !== p.rating || m[6] !== _ ? (a = null != p.rating ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(b.a, {
                    asset: U.a,
                    className: "size-3.5 shrink-0"
                }), (0, n.jsx)("span", {
                    children: _.formatNumber(p.rating, {
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 1
                    })
                })]
            }) : null, m[5] = p.rating, m[6] = _, m[7] = a) : a = m[7];
            let F = S ? (0, n.jsx)("img", {
                alt: M,
                className: (0, l.b)("w-auto max-w-18 shrink-0 object-contain", S.toLowerCase().includes("tripadvisor_ollie") ? "h-3" : "h-3.5"),
                src: S
            }) : K[p.provider ?? ""] ?? null;
            m[8] !== a || m[9] !== F ? (r = (0, n.jsxs)(n.Fragment, {
                children: [a, F]
            }), m[8] = a, m[9] = F, m[10] = r) : r = m[10];
            let D = r;
            return m[11] !== R || m[12] !== B || m[13] !== D || m[14] !== P || m[15] !== t ? (o = B ? (0, n.jsx)(R, {
                className: "inline-flex shrink-0 cursor-interaction items-center gap-1 hover:text-secondary",
                href: t,
                initiator: "markdown_link_click",
                openTarget: P ? "in-app-browser" : void 0,
                children: D
            }) : (0, n.jsx)("span", {
                className: "inline-flex shrink-0 items-center gap-1",
                children: D
            }), m[11] = R, m[12] = B, m[13] = D, m[14] = P, m[15] = t, m[16] = o) : o = m[16], o
        }

        function ed(e) {
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
                let t, s, l, o, c = (0, i.c)(24),
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
                if (c[3] !== m || c[4] !== b) {
                    let e, s;
                    c[6] !== b ? (e = Number.parseInt(b.slice(0, 2), 10), c[6] = b, c[7] = e) : e = c[7], c[8] !== b ? (s = Number.parseInt(b.slice(2, 4), 10), c[8] = b, c[9] = s) : s = c[9], t = m.formatTime(new Date(0, 0, 0, e, s), {
                        hour: "numeric",
                        minute: "2-digit"
                    }), c[3] = m, c[4] = b, c[5] = t
                } else t = c[5];
                let v = t;
                c[10] !== p ? (s = e => (0, n.jsx)("span", {
                    className: p ? "text-success" : "text-danger",
                    children: e
                }), c[10] = p, c[11] = s) : s = c[11];
                let _ = s;
                if (g === f) {
                    let e;
                    return c[12] !== p || c[13] !== _ || c[14] !== v ? (e = p ? (0, n.jsx)("span", {
                        children: (0, n.jsx)(r.a, {
                            id: "chatgpt.localBusiness.openUntilTime",
                            defaultMessage: "<status>Open</status> until {time}",
                            description: "Business status in a details sidebar when the business is currently open and closes today. The time is the locale-formatted closing time. The status tag styles Open as a positive status",
                            values: {
                                status: _,
                                time: v
                            }
                        })
                    }) : (0, n.jsx)("span", {
                        children: (0, n.jsx)(r.a, {
                            id: "chatgpt.localBusiness.closedUntilTime",
                            defaultMessage: "<status>Closed</status> until {time}",
                            description: "Business status in a details sidebar when the business is currently closed and opens today. The time is the locale-formatted opening time. The status tag styles Closed as a negative status",
                            values: {
                                status: _,
                                time: v
                            }
                        })
                    }), c[12] = p, c[13] = _, c[14] = v, c[15] = e) : e = c[15], e
                }
                c[16] !== m || c[17] !== g ? (l = m.formatDate(new Date(0, 0, g), {
                    weekday: "short"
                }), c[16] = m, c[17] = g, c[18] = l) : l = c[18];
                let x = l;
                return c[19] !== x || c[20] !== p || c[21] !== _ || c[22] !== v ? (o = p ? (0, n.jsx)("span", {
                    children: (0, n.jsx)(r.a, {
                        id: "chatgpt.localBusiness.openUntilDayTime",
                        defaultMessage: "<status>Open</status> until {day} {time}",
                        description: "Business status in a details sidebar when the business is currently open and closes on a different day. The day is the locale-formatted abbreviated weekday and time is the closing time. The status tag styles Open as a positive status",
                        values: {
                            status: _,
                            day: x,
                            time: v
                        }
                    })
                }) : (0, n.jsx)("span", {
                    children: (0, n.jsx)(r.a, {
                        id: "chatgpt.localBusiness.closedUntilDayTime",
                        defaultMessage: "<status>Closed</status> until {day} {time}",
                        description: "Business status in a details sidebar when the business is currently closed and opens on a different day. The day is the locale-formatted abbreviated weekday and time is the opening time. The status tag styles Closed as a negative status",
                        values: {
                            status: _,
                            day: x,
                            time: v
                        }
                    })
                }), c[19] = x, c[20] = p, c[21] = _, c[22] = v, c[23] = o) : o = c[23], o
            }
        })
    }),
    FRPb: (function(e, t, s) {
        var n = s("alRw"),
            i = s.n(n),
            a = s("BolX"),
            r = s("rKAs"),
            l = s("OWtl"),
            o = s("wXxE"),
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
                let v = f.find(e => "image_group" === e.type && ("full_width" === e.layout || 0 === e.start_idx));
                e.set(c.b, s, (null == v ? null : (0, r.u)(v, 0)[0]) ?? e.get(c.b, t))
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
            r = s("BolX"),
            l = s("d0tz"),
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
            v = s("OWtl"),
            _ = s("WFY2"),
            x = s("rcTL"),
            y = s("f3BX"),
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
            let t, s, d, u, f, _, N, I, B, P, R, M, F, D, L, U = (0, i.c)(47),
                {
                    analyticsMessageId: W,
                    businessId: G,
                    ctaSurface: H,
                    onAction: Q,
                    onInteractionOpenChange: V,
                    providers: q,
                    trigger: z,
                    turnContext: K
                } = e,
                Y = (0, r.y)(v.a),
                Z = (0, c.a)(),
                X = (0, o.useContext)(g.a);
            U[0] !== X || U[1] !== Z || U[2] !== K.shouldBlockExternalEgress ? (t = e => ({
                provider: e,
                logoUrl: !1 === K.shouldBlockExternalEgress && "restricted" !== X ? k.parse(e.provider_logo) : void 0,
                label: e.provider_name?.trim() || T[e.provider?.trim().toLowerCase() ?? ""] || e.provider?.trim() || Z.formatMessage({
                    id: "chatgpt.localBusiness.quoteProvider",
                    defaultMessage: "Quote provider",
                    description: "Fallback item in the local business Get Quote provider menu when no company name was supplied. Selecting it opens that provider’s quote flow."
                })
            }), U[0] = X, U[1] = Z, U[2] = K.shouldBlockExternalEgress, U[3] = t) : t = U[3], U[4] !== Z ? (s = (e, t) => e.label.localeCompare(t.label, Z.locale, {
                sensitivity: "base"
            }), U[4] = Z, U[5] = s) : s = U[5];
            let J = q.map(t).sort(s),
                $ = (0, o.useRef)(!1),
                ee = (0, o.useRef)(!1);
            U[6] !== V ? (d = () => {
                $.current = !1, ee.current = !1, V?.(!1)
            }, U[6] = V, U[7] = d) : d = U[7];
            let et = (0, o.useEffectEvent)(d);
            U[8] !== et ? (u = () => () => et(), U[8] = et, U[9] = u) : u = U[9], U[10] === Symbol.for("react.memo_cache_sentinel") ? (f = [], U[10] = f) : f = U[10], (0, o.useLayoutEffect)(u, f), U[11] === Symbol.for("react.memo_cache_sentinel") ? (_ = new Set, U[11] = _) : _ = U[11];
            let es = (0, o.useRef)(_),
                en = !1 !== K.trackShownImpressions,
                ei = K.browserConversationId ?? K.conversationId;
            U[12] !== W || U[13] !== ei || U[14] !== Y || U[15] !== K.hostId || U[16] !== K.messageId ? (N = {
                launch: (e, t, s) => {
                    if ((0, w.e)(ei)) throw Error("Wait for this conversation to finish saving, then try again.");
                    return (0, y.c)({
                        scope: Y,
                        hostId: K.hostId,
                        chatGptConversationId: ei,
                        payload: e,
                        sourceMessageId: W ?? K.messageId,
                        signal: t,
                        onTracking: s
                    })
                },
                onError: E
            }, U[12] = W, U[13] = ei, U[14] = Y, U[15] = K.hostId, U[16] = K.messageId, U[17] = N) : N = U[17];
            let ea = (0, j.a)(N);
            U[18] !== W || U[19] !== G || U[20] !== ei || U[21] !== H || U[22] !== Y || U[23] !== en || U[24] !== K.messageId ? (I = (e, t) => {
                let s = e.launcherPayload.appUri,
                    n = A(e);
                if ("show" === t) {
                    if (!en || es.current.has(n)) return;
                    es.current.add(n)
                }
                try {
                    (0, b.a)(Y, a.d, {
                        action: "show" === t ? "CHATGPT_CONTENT_REFERENCE_ACTION_SHOW" : "CHATGPT_CONTENT_REFERENCE_ACTION_CLICK",
                        eventType: "show" === t ? "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_SHOWN" : "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_CLICKED",
                        businessId: G ?? void 0,
                        connectorId: s.startsWith("connectors://") ? s.slice(13) : s,
                        contentReferenceType: "map_card" === H ? "map" : "entity_metadata",
                        conversationId: ei,
                        ctaSurface: H,
                        ctaType: "service",
                        linkType: "local_business_service",
                        messageId: W ?? K.messageId,
                        sectionLocation: "response",
                        serviceProvider: e.provider ?? void 0,
                        serviceActionType: e.action_type ?? void 0
                    })
                } catch {}
            }, U[18] = W, U[19] = G, U[20] = ei, U[21] = H, U[22] = Y, U[23] = en, U[24] = K.messageId, U[25] = I) : I = U[25];
            let er = I,
                el = 1 === q.length ? q[0] : void 0;
            U[26] !== el ? (B = null == el ? null : A(el), U[26] = el, U[27] = B) : B = U[27];
            let eo = B;
            U[28] !== el || U[29] !== er ? (P = () => {
                null != el && er(el, "show")
            }, U[28] = el, U[29] = er, U[30] = P) : P = U[30];
            let ec = (0, o.useEffectEvent)(P);
            U[31] !== eo || U[32] !== ec ? (R = () => {
                null != eo && ec()
            }, U[31] = eo, U[32] = ec, U[33] = R) : R = U[33], U[34] !== eo || U[35] !== en ? (M = [eo, en], U[34] = eo, U[35] = en, U[36] = M) : M = U[36], (0, o.useEffect)(R, M);
            let ed = e => {
                er(e, "click"), Q?.(), ee.current = !0, V?.(!0), ea.launch(e.launcherPayload)
            };
            if (0 === q.length) return null;
            let eu = null != el ? (0, n.jsx)(S, {
                trigger: z,
                onClick: () => ed(el)
            }) : (0, n.jsx)(O, {
                contentWidth: "menuWide",
                onOpenChange: e => {
                    if ($.current = e, V?.(e || ee.current), e)
                        for (let e of q) er(e, "show")
                },
                size: "action",
                triggerButton: z,
                children: J.map(e => {
                    let {
                        provider: t,
                        label: s,
                        logoUrl: i
                    } = e, a = t.provider?.trim().toLowerCase() === "thumbtack" ? (0, n.jsx)(C, {
                        className: "size-5 text-default",
                        "aria-hidden": !0,
                        focusable: "false"
                    }) : (0, n.jsx)(p.Pg, {
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
            return U[37] !== ei || U[38] !== ea || U[39] !== V || U[40] !== K.hostId ? (F = null == ea.dialog ? null : (0, n.jsx)(x.EcosystemWidgetDialog, {
                conversationId: (0, l.Qe)(ei),
                hostId: K.hostId,
                onClose: () => {
                    ea.close(), ee.current = !1, V?.($.current)
                },
                state: ea.dialog
            }), U[37] = ei, U[38] = ea, U[39] = V, U[40] = K.hostId, U[41] = F) : F = U[41], U[42] !== F ? (D = (0, n.jsx)(n.Fragment, {
                children: F
            }), U[42] = F, U[43] = D) : D = U[43], U[44] !== eu || U[45] !== D ? (L = (0, n.jsxs)(n.Fragment, {
                children: [eu, D]
            }), U[44] = eu, U[45] = D, U[46] = L) : L = U[46], L
        }

        function E(e) {
            _.a.error("ChatGPT entity quote launch failed", {
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
                return (await Promise.all([s.e(418851), s.e(109308), s.e(399565), s.e(257798), s.e(153380), s.e(617936), s.e(807489), s.e(337882), s.e(955979), s.e(646436), s.e(7078), s.e(200429), s.e(698524), s.e(956483), s.e(87162), s.e(396705), s.e(155568), s.e(731863), s.e(767086), s.e(76629), s.e(514085), s.e(204542), s.e(982651), s.e(673108), s.e(487481), s.e(229522), s.e(390575), s.e(353032), s.e(637885), s.e(284470), s.e(877700), s.e(737555), s.e(589733), s.e(234740)]).then(s.bind(s, "UvKE"))).BusinessClaimFlow
            },
            b: async function() {
                return (await Promise.all([s.e(418851), s.e(109308), s.e(399565), s.e(257798), s.e(153380), s.e(617936), s.e(807489), s.e(337882), s.e(955979), s.e(646436), s.e(7078), s.e(200429), s.e(698524), s.e(956483), s.e(87162), s.e(396705), s.e(155568), s.e(731863), s.e(767086), s.e(76629), s.e(514085), s.e(204542), s.e(982651), s.e(673108), s.e(487481), s.e(229522), s.e(390575), s.e(353032), s.e(637885), s.e(284470), s.e(877700), s.e(737555), s.e(589733), s.e(900381)]).then(s.bind(s, "wVZg"))).BusinessClaimSurface
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