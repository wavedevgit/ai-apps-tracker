export const __rspack_esm_ids = [22085];
export const __webpack_modules__ = {
    sM3V: (function(e, t, n) {
        var s = n("BolX"),
            i = n("a4MG"),
            r = n("OWtl"),
            a = n("tl5a");
        let o = (0, s.d)(r.a, (e, t) => {
                let {
                    hostId: n,
                    conversationId: s
                } = e, {
                    get: i
                } = t;
                if (s.startsWith("chatgpt:")) return null;
                let r = i(a.jc, {
                    hostId: n,
                    threadId: s
                });
                return null != r && "notLoaded" !== r.type ? s : null
            }),
            l = (0, s.d)(r.a, (e, t) => {
                let {
                    get: n
                } = t, {
                    data: s
                } = null == n(o, {
                    hostId: e.hostId,
                    conversationId: e.threadId
                }) ? n(i.q, e.hostId) : n(i.r, e);
                return s?.data.find(t => t.name === e.serverName) ?? null
            });
        n.d(t, {}, {
            a: l,
            b: o
        })
    }),
    Ooax: (function(e, t, n) {
        var s = n("ASxG");
        let i = s.string().regex(/^link_[0-9a-f]{32}$/),
            r = s.string().min(1).max(512).regex(/^(?!\.{1,2}$)[a-zA-Z0-9._~!$&'()*+,;=:@-]+$/),
            a = s.object({
                connector_id: r,
                target_link_id: i
            }),
            o = s.object({
                connector_id: r,
                connector_name: s.string().optional(),
                auth_type: s.enum(["OAUTH", "API_KEY", "NONE"]).optional(),
                auth_strategy_id: s.string().nullish(),
                auth_reason: s.enum(["oauth_upgrade_required", "reauthentication_required"])
            }),
            l = s.object({
                isError: s.literal(!1).optional(),
                structuredContent: s.object({
                    kind: s.literal("connector_auth_request"),
                    version: s.literal(3),
                    status: s.literal("requested"),
                    link_id: i
                }),
                _meta: s.object({
                    _codex_apps: s.object({
                        connector_auth_request: o
                    })
                })
            });
        n.d(t, {}, {
            a: "internal://plugin-management-connector-auth",
            b: function(e) {
                return `Authentication for ${e} was requested and accepted. Retry this tool call now.`
            },
            c: function(e, t) {
                let n = a.safeParse(e).data,
                    s = l.safeParse(t).data;
                if (null == n || null == s) return null;
                let i = s._meta._codex_apps.connector_auth_request,
                    {
                        link_id: r
                    } = s.structuredContent;
                return n.target_link_id !== r ? null : {
                    ...i,
                    link_id: r
                }
            }
        })
    }),
    PrVQ: (function(e, t, n) {
        var s = n("kSHG"),
            i = n("BolX"),
            r = n("P61R"),
            a = n("sS8e"),
            o = n("xSzB"),
            l = n("OWtl"),
            c = n("tSEg"),
            d = n("WFY2"),
            u = n("oo2L"),
            m = n("Ooax"),
            h = n("Sbyb");
        let g = (0, i.v)(l.a, e => !1);
        n.d(t, {}, {
            a: function(e) {
                let {
                    scope: t,
                    productSku: n,
                    hostId: s,
                    sourceId: i,
                    resourceUri: a,
                    access: l,
                    toolInput: p,
                    toolResult: f,
                    assertActive: b,
                    onReconnected: x
                } = e;
                if (a !== m.a || null == f || null == l || !("connectorId" in l.serverIdentity) || l.serverIdentity.connectorId !== r.a) return;
                let v = (0, m.c)(p, (0, o.i)({
                    isCodexAppsServer: !0,
                    toolResult: f
                }));
                if (null == v) return;
                let y = null == v.auth_type ? null : (0, u.o)({
                    id: v.link_id,
                    connector_id: v.connector_id,
                    auth_type: v.auth_type,
                    auth_strategy_id: v.auth_strategy_id
                });
                if ("API_KEY" === v.auth_type && null == y) return;
                let _ = e => {
                    if (e.throwIfAborted(), b?.(), t.get(c.j) || "current" !== l.status(t.get)) throw Error("Connector sign-in is unavailable for this widget")
                };
                return async e => {
                    _(e);
                    let r = await (0, h.requestMcpConnectSheet)(t, {
                            connectorId: v.connector_id,
                            hostId: s,
                            oauthPresentation: "popup",
                            productSku: n,
                            startOAuthDirectly: "reauthentication_required" === v.auth_reason && "OAUTH" === y,
                            payload: {
                                requireAuth: !0,
                                reauthLinkId: v.link_id,
                                authReason: v.auth_reason
                            },
                            beforeConnect: async () => (_(e), !0),
                            signal: e
                        }),
                        a = r.didConnect && r.linkId === v.link_id;
                    if (a && null != x) {
                        let n = JSON.stringify([s, l.accountId, l.uiUserId, i, v.link_id]);
                        t.get(g, n) || (_(e), t.set(g, n, !0), x(v.connector_name?.trim() || v.connector_id).catch(e => {
                            d.a.warning("Failed to deliver connector reconnect follow-up", {
                                safe: {},
                                sensitive: {
                                    error: e
                                }
                            })
                        }))
                    }
                    return {
                        didConnect: a
                    }
                }
            },
            b: async function() {
                throw (0, a.c)("This action is unavailable for the sign-in widget", s.r.MethodNotFound)
            }
        })
    }),
    PYah: (function(e, t, n) {
        var s = n("Dgwo");
        n.d(t, {}, {
            a: async function(e, t, n, i) {
                let {
                    apps: r
                } = await (0, s.b)(e, t).sendRequest("app/installed", {
                    forceRefresh: !0,
                    threadId: n
                }, null == i ? void 0 : {
                    threadAccess: i,
                    coalesce: !1
                });
                return new Set(r.filter(e => {
                    let {
                        callable: t,
                        enabled: n
                    } = e;
                    return t && n
                }).map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }))
            }
        })
    }),
    JV0C: (function(e, t, n) {
        n.d(t, {
            a: () => c
        });
        var s, i, r = n("ABep"),
            a = n("on57"),
            o = n("Sm6l"),
            l = n("RNul");
        let c = (s = e => (0, r.jsx)(o.a, {
            ...e
        }), i = (0, r.jsx)(l.a, {
            as: "span",
            className: "icon-sm"
        }), function(e) {
            let {
                children: t,
                className: n,
                disabled: o,
                loading: l = !1
            } = e;
            return s({
                ...e,
                "aria-busy": l || e["aria-busy"],
                className: (0, a.b)(l && "relative", n),
                disabled: o || l,
                loading: !1,
                children: l ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("span", {
                        className: "inline-flex min-w-0 items-center gap-[inherit] opacity-0",
                        children: t
                    }), (0, r.jsx)("span", {
                        "aria-hidden": !0,
                        className: "pointer-events-none absolute inset-0 flex items-center justify-center",
                        children: i
                    })]
                }) : t
            })
        })
    }),
    T2J5: (function(e, t, n) {
        n.d(t, {
            a: () => m
        });
        var s = n("ABep"),
            i = n("QosV"),
            r = n("on57"),
            a = n("oyxz"),
            o = n("HOLv"),
            l = n("CqQF"),
            c = "icon-niuo6X",
            d = n("VQnT"),
            u = n("aImb");

        function m(e) {
            let t, n, m, h, g, p = (0, i.c)(13),
                {
                    className: f,
                    label: b,
                    showTooltip: x,
                    size: v
                } = e,
                y = void 0 === v ? 20 : v,
                _ = x && "shrink-0 rounded-sm select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none";
            p[0] !== f || p[1] !== _ ? (t = (0, r.b)("-mt-0.75 inline-flex align-middle", _, f), p[0] = f, p[1] = _, p[2] = t) : t = p[2];
            let w = x ? 0 : void 0;
            p[3] !== y ? (n = 24 === y ? (0, s.jsx)(o.a, {
                className: c,
                asset: u.a
            }) : (0, s.jsx)(o.a, {
                className: c,
                asset: d.a
            }), p[3] = y, p[4] = n) : n = p[4], p[5] !== b || p[6] !== t || p[7] !== w || p[8] !== n ? (m = (0, s.jsx)("span", {
                className: t,
                "aria-label": b,
                role: "img",
                tabIndex: w,
                children: n
            }), p[5] = b, p[6] = t, p[7] = w, p[8] = n, p[9] = m) : m = p[9];
            let j = m;
            return x ? (p[10] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, s.jsxs)("div", {
                className: "tooltip-BWNZME",
                children: [(0, s.jsx)("div", {
                    className: "body-i5CZgD",
                    children: (0, s.jsx)(a.a, {
                        id: "businessProfiles.claimedBadge.tooltip",
                        defaultMessage: "OpenAI verified that this profile is managed by an owner or authorized representative.",
                        description: "Tooltip on the blue claimed-business badge beside a business name. It explains that OpenAI verified who manages the business profile, not the quality of the business."
                    })
                }), (0, s.jsx)("span", {
                    className: "caret-kAbdty",
                    "aria-hidden": "true"
                })]
            }), p[10] = h) : h = p[10], p[11] !== j ? (g = (0, s.jsx)(l.a, {
                disablePadding: !0,
                side: "top",
                sideOffset: 0,
                tooltipMaxWidth: "min(215px, calc(100vw - 16px))",
                variant: "unstyled",
                tooltipContent: h,
                children: j
            }), p[11] = j, p[12] = g) : g = p[12], g) : j
        }
    }),
    Csob: (function(e, t, n) {
        n.d(t, {
            a: () => et,
            b: () => ea,
            c: () => G,
            ChatGptLocalBusinessMetadata: () => $,
            d: () => Z,
            e: () => en,
            f: () => ed
        });
        var s = n("ABep"),
            i = n("QosV"),
            r = n("WQMB"),
            a = n("EA6X"),
            o = n("on57"),
            l = n("BolX"),
            c = n("fDDa"),
            d = n("zd8w"),
            u = n("Wf1j"),
            m = n("oyxz"),
            h = n("ASxG"),
            g = n("Cslg"),
            p = n("ZtSy"),
            f = n("k9qd"),
            b = n("HOLv"),
            x = n("bf6R"),
            v = n("Bbed"),
            y = n("zSQm"),
            _ = n("WAdu"),
            w = n("HwRo"),
            j = n("hZax"),
            C = n("OMIV"),
            k = n("a6Zv"),
            N = n("KDax"),
            T = n("TUMj"),
            E = n("T2J5"),
            S = n("TJEh"),
            I = n("PUeQ"),
            A = n("EWcN");

        function O(e) {
            let t, n, r, a, l, c = (0, i.c)(19),
                {
                    business: h,
                    claimPreview: g
                } = e,
                p = void 0 !== g && g,
                f = (0, u.a)(),
                v = (0, d.useId)(),
                [y, _] = (0, d.useState)(!1),
                w = !!h.hours?.length,
                j = null != h.is_open || h.is_closed_permanently;
            if (!w && !j) return null;
            c[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, s.jsx)(b.a, {
                asset: A.a,
                className: "shrink-0"
            }), c[0] = t) : t = c[0], c[1] !== h || c[2] !== j ? (n = (0, s.jsxs)(s.Fragment, {
                children: [t, (0, s.jsx)("span", {
                    className: "min-w-0 flex-1 text-base font-medium",
                    children: j ? (0, s.jsx)(I.a, {
                        business: h,
                        showHourDetail: !0
                    }) : (0, s.jsx)(m.a, {
                        id: "chatgpt.localBusiness.hours.label",
                        defaultMessage: "Hours",
                        description: "Short label in a local business profile when its weekly opening schedule is available but its current open or closed status is unknown. Selecting the row shows the schedule."
                    })
                })]
            }), c[1] = h, c[2] = j, c[3] = n) : n = c[3];
            let C = n;
            return c[4] !== p || c[5] !== y || c[6] !== w || c[7] !== v || c[8] !== C ? (r = w ? (0, s.jsxs)("button", {
                type: "button",
                "aria-controls": v,
                "aria-expanded": y,
                className: (0, o.b)("flex min-h-11 w-full cursor-interaction items-center gap-4 text-start select-none hover:bg-secondary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset", p ? "py-2.5" : "py-2"),
                onClick: () => _(!y),
                children: [C, (0, s.jsx)(x.$b, {
                    className: (0, o.b)("text-secondary", y && "rotate-180")
                })]
            }) : (0, s.jsx)("div", {
                className: (0, o.b)("flex min-h-11 items-center gap-4", p ? "py-2.5" : "py-2"),
                children: C
            }), c[4] = p, c[5] = y, c[6] = w, c[7] = v, c[8] = C, c[9] = r) : r = c[9], c[10] !== h.hours || c[11] !== y || c[12] !== w || c[13] !== f || c[14] !== v ? (a = w && (0, s.jsx)("dl", {
                id: v,
                hidden: !y,
                className: "ms-10 pb-2 text-sm select-text",
                children: [1, 2, 3, 4, 5, 6, 0].map(e => {
                    let t = h.hours?.filter(t => t.day === e).sort(P);
                    return (0, s.jsxs)("div", {
                        className: "flex gap-4 py-2",
                        children: [(0, s.jsx)("dt", {
                            className: "w-28 shrink-0",
                            children: f.formatDate(new Date(Date.UTC(2026, 0, 4 + e)), {
                                weekday: "long",
                                timeZone: "UTC"
                            })
                        }), (0, s.jsx)("dd", {
                            children: t?.length ? t.map((e, t) => (0, s.jsx)("div", {
                                children: (0, s.jsx)(m.a, {
                                    id: "chatgpt.localBusiness.hours.interval",
                                    defaultMessage: "{start} – {end}",
                                    description: "One opening interval in a local business profile's weekly schedule. The start and end placeholders are locale-formatted business-local opening and closing times. An end earlier than the start is the following day. Keep this compact; multiple intervals may appear for one day.",
                                    values: {
                                        start: B(f, e.start),
                                        end: B(f, e.end)
                                    }
                                })
                            }, t)) : (0, s.jsx)(m.a, {
                                id: "chatgpt.localBusiness.hours.closed",
                                defaultMessage: "Closed",
                                description: "Status for a weekday with no opening intervals in a known weekly schedule on a local business profile. This is never used when the entire schedule is unknown."
                            })
                        })]
                    }, e)
                })
            }), c[10] = h.hours, c[11] = y, c[12] = w, c[13] = f, c[14] = v, c[15] = a) : a = c[15], c[16] !== r || c[17] !== a ? (l = (0, s.jsxs)("div", {
                children: [r, a]
            }), c[16] = r, c[17] = a, c[18] = l) : l = c[18], l
        }

        function P(e, t) {
            return e.start.localeCompare(t.start)
        }

        function B(e, t) {
            return e.formatTime(new Date(Date.UTC(2026, 0, 4, Number(t.slice(0, 2)), Number(t.slice(2, 4)))), {
                hour: "numeric",
                minute: "2-digit",
                timeZone: "UTC"
            })
        }
        var R = n("FRPb"),
            M = n("ynn3"),
            z = n("ARKs"),
            F = n("wmA0"),
            W = n("PpZH"),
            D = n("eVLy"),
            L = n("XxTS");
        let V = (0, v.a)(r.a),
            U = (0, v.a)(r.b, {
                suspendToParent: !0,
                errorFallback: e => {
                    let {
                        renderMetadata: t
                    } = e;
                    return t(!1, null)
                }
            }),
            q = (0, d.createContext)(null);

        function G(e) {
            let t, n, r, a = (0, i.c)(10),
                {
                    business: o,
                    children: c,
                    conversationId: u,
                    renderSidebar: m,
                    shouldBlockExternalEgress: h
                } = e,
                g = (0, l.x)(R.b, u),
                p = o ?? g?.business,
                f = (0, d.useContext)(_.a),
                b = (0, l.x)(C.d, "2778625748") && null != p;
            a[0] !== p || a[1] !== b || a[2] !== c ? (t = b ? (0, s.jsx)(d.Suspense, {
                fallback: c,
                children: (0, s.jsx)(U, {
                    business: p,
                    renderMetadata: (e, t) => (0, s.jsx)(q, {
                        value: {
                            business: p,
                            verified: e,
                            claimAction: t
                        },
                        children: c
                    }),
                    renderClaimButton: Q,
                    businessPreview: e => (0, s.jsx)(J, {
                        business: p,
                        layout: "claim-preview",
                        verified: e,
                        readOnly: !0
                    })
                })
            }) : c, a[0] = p, a[1] = b, a[2] = c, a[3] = t) : t = a[3];
            let x = t,
                v = b && void 0 !== h && h ? "restricted" : f;
            return a[4] !== x || a[5] !== m ? (n = m(x), a[4] = x, a[5] = m, a[6] = n) : n = a[6], a[7] !== v || a[8] !== n ? (r = (0, s.jsx)(_.a, {
                value: v,
                children: n
            }), a[7] = v, a[8] = n, a[9] = r) : r = a[9], r
        }

        function Q(e, t) {
            return (0, s.jsx)(et, {
                onClick: e,
                request: t
            })
        }
        let H = (0, v.a)(async () => {
                let {
                    parsePhoneNumberFromString: e
                } = await Promise.all([n.e(963703), n.e(87307)]).then(n.bind(n, "cggm"));
                return function(t) {
                    let {
                        phone: n,
                        href: i,
                        readOnly: r,
                        claimPreview: a = !1
                    } = t, o = e(n, "US")?.formatNational();
                    return null == o ? null : (0, s.jsx)(ed, {
                        icon: (0, s.jsx)(b.a, {
                            asset: W.a
                        }),
                        claimPreview: a,
                        children: (0, s.jsx)(N.a, {
                            className: "cursor-interaction hover:underline",
                            href: i,
                            initiator: "markdown_link_click",
                            openTarget: r ? "external-browser" : void 0,
                            children: o
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
            Y = h.object({
                layout: h.enum(["one-line", "two-lines"]).nullable().optional(),
                metadata: h.object({
                    map_url: h.string().nullable().optional()
                }).nullable().optional()
            }).loose();

        function Z(e) {
            let t, n, r, a = (0, i.c)(12),
                {
                    reference: o,
                    actions: l,
                    claimActions: c
                } = e;
            a[0] !== o ? (t = (0, S.c)(o), a[0] = o, a[1] = t) : t = a[1];
            let d = t;
            a[2] !== o ? (n = Y.safeParse(o), a[2] = o, a[3] = n) : n = a[3];
            let u = n;
            if (null == d) {
                let e;
                return a[4] !== l ? (e = null == l ? null : (0, s.jsx)(s.Fragment, {
                    children: l
                }), a[4] = l, a[5] = e) : e = a[5], e
            }
            let m = u.success ? u.data.metadata?.map_url : null,
                h = (u.success ? u.data.layout : null) ?? "sidebar";
            return a[6] !== l || a[7] !== d || a[8] !== c || a[9] !== m || a[10] !== h ? (r = (0, s.jsx)($, {
                actions: l,
                business: d,
                directionsUrl: m,
                layout: h,
                renderActions: !1,
                claimActions: c
            }), a[6] = l, a[7] = d, a[8] = c, a[9] = m, a[10] = h, a[11] = r) : r = a[11], r
        }

        function $(e) {
            let t, n = (0, i.c)(20),
                r = (0, d.useContext)(q);
            if ((0, l.x)(C.d, "2778625748") && !e.readOnly && !e.claimActions && (null == e.layout || "sidebar" === e.layout)) {
                let t, i, a, o, l;
                if (null != r && (null != r.business.entity_lookup_id && null != e.business.entity_lookup_id ? r.business.entity_lookup_id === e.business.entity_lookup_id : "string" == typeof r.business.id && r.business.id === e.business.id || r.business.name.trim().toLowerCase() === e.business.name.trim().toLowerCase())) {
                    let t;
                    return n[0] !== e || n[1] !== r.claimAction || n[2] !== r.verified ? (t = (0, s.jsx)(J, {
                        ...e,
                        verified: r.verified,
                        claimAction: r.claimAction
                    }), n[0] = e, n[1] = r.claimAction, n[2] = r.verified, n[3] = t) : t = n[3], t
                }
                return n[4] !== e ? (t = (0, s.jsx)(J, {
                    ...e
                }), n[4] = e, n[5] = t) : t = n[5], n[6] !== e ? (i = (t, n) => (0, s.jsx)(J, {
                    ...e,
                    verified: t,
                    claimAction: n
                }), n[6] = e, n[7] = i) : i = n[7], n[8] !== e.business || n[9] !== e.onAction ? (a = t => (0, s.jsx)(J, {
                    business: e.business,
                    onAction: e.onAction,
                    layout: "claim-preview",
                    verified: t,
                    readOnly: !0
                }), n[8] = e.business, n[9] = e.onAction, n[10] = a) : a = n[10], n[11] !== e.business || n[12] !== i || n[13] !== a ? (o = (0, s.jsx)(U, {
                    business: e.business,
                    renderMetadata: i,
                    renderClaimButton: X,
                    businessPreview: a
                }), n[11] = e.business, n[12] = i, n[13] = a, n[14] = o) : o = n[14], n[15] !== t || n[16] !== o ? (l = (0, s.jsx)(d.Suspense, {
                    fallback: t,
                    children: o
                }), n[15] = t, n[16] = o, n[17] = l) : l = n[17], l
            }
            return n[18] !== e ? (t = (0, s.jsx)(J, {
                ...e
            }), n[18] = e, n[19] = t) : t = n[19], t
        }

        function X(e, t) {
            return (0, s.jsx)(et, {
                onClick: e,
                request: t
            })
        }

        function J(e) {
            let t, n, r, l, c, m, h, g, p, f, b, x = (0, i.c)(64),
                {
                    actions: v,
                    business: w,
                    directionsUrl: j,
                    isOptimistic: C,
                    layout: k,
                    onAction: N,
                    claimActions: I,
                    renderActions: A,
                    readOnly: P,
                    fullWidth: B,
                    showTitle: R,
                    verified: M,
                    claimAction: z,
                    showClaimedBusinessTooltip: F
                } = e,
                W = void 0 !== C && C,
                D = void 0 === k ? "sidebar" : k,
                L = void 0 === A || A,
                U = void 0 !== P && P,
                q = void 0 === R || R,
                G = void 0 !== M && M,
                Q = void 0 !== F && F,
                [K, Y] = (0, d.useState)(!1),
                [Z, X] = (0, d.useState)(!1),
                J = (0, T.d)(),
                es = (0, d.useContext)(_.a),
                ei = (0, u.a)();
            x[0] !== w.phone ? (t = w.phone?.trim() ? (0, y.a)(`tel:${w.phone.trim()}`) : null, x[0] = w.phone, x[1] = t) : t = x[1];
            let er = t;
            x[2] !== w.address ? (n = w.address?.trim(), x[2] = w.address, x[3] = n) : n = x[3];
            let eo = n,
                el = "claim-preview" === D,
                ec = "sidebar" === D || el;
            x[4] !== eo || x[5] !== w.name ? (r = [w.name, eo].filter(Boolean), x[4] = eo, x[5] = w.name, x[6] = r) : r = x[6];
            let ed = r.join(", "),
                eu = el ? "pt-4" : "mb-4",
                em = !(void 0 !== B && B) && "max-w-md";
            x[7] !== eu || x[8] !== em ? (l = (0, o.b)("not-prose text-base text-default", eu, em), x[7] = eu, x[8] = em, x[9] = l) : l = x[9];
            let eh = W ? "status" : void 0,
                eg = el ? "ps-5 pe-6 pb-4" : void 0;
            x[10] !== w.name || x[11] !== Z || x[12] !== el || x[13] !== ei || x[14] !== ec || x[15] !== U || x[16] !== Q || x[17] !== q || x[18] !== J?.imageEngagementContext?.surfaceLocation || x[19] !== G ? (c = ec && q ? (0, s.jsxs)("h2", {
                className: (0, o.b)("text-card-title leading-7 font-medium break-words", !el && "mb-1"),
                children: [w.name, (G || Z) && (0, s.jsx)(E.a, {
                    className: "ms-2",
                    showTooltip: !U && ec && (Q || J?.imageEngagementContext?.surfaceLocation === a.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR),
                    label: ei.formatMessage({
                        id: "chatgpt.localBusiness.claim.verified.label",
                        defaultMessage: "Verified business",
                        description: "Accessible label for the blue badge beside a business name after ownership approval"
                    })
                })]
            }) : null, x[10] = w.name, x[11] = Z, x[12] = el, x[13] = ei, x[14] = ec, x[15] = U, x[16] = Q, x[17] = q, x[18] = J?.imageEngagementContext?.surfaceLocation, x[19] = G, x[20] = c) : c = x[20];
            let ep = !U;
            return x[21] !== w || x[22] !== ec || x[23] !== ep ? (m = (0, s.jsx)(en, {
                business: w,
                showPrice: ec,
                linkRating: ep,
                wrap: ec
            }), x[21] = w, x[22] = ec, x[23] = ep, x[24] = m) : m = x[24], x[25] !== eg || x[26] !== c || x[27] !== m ? (h = (0, s.jsxs)("div", {
                className: eg,
                children: [c, m]
            }), x[25] = eg, x[26] = c, x[27] = m, x[28] = h) : h = x[28], x[29] !== w || x[30] !== el || x[31] !== j || x[32] !== D || x[33] !== N || x[34] !== U || x[35] !== L ? (g = L && "one-line" !== D ? (0, s.jsx)("div", {
                className: el ? "ps-5 pe-4 pb-5" : "mt-3",
                children: (0, s.jsx)(ea, {
                    allowQuoteAction: !U,
                    business: w,
                    directionsUrl: j,
                    onAction: N,
                    openTarget: U ? "external-browser" : void 0
                })
            }) : null, x[29] = w, x[30] = el, x[31] = j, x[32] = D, x[33] = N, x[34] = U, x[35] = L, x[36] = g) : g = x[36], x[37] !== w || x[38] !== z || x[39] !== I || x[40] !== Z || x[41] !== el || x[42] !== j || x[43] !== W || x[44] !== ec || x[45] !== U || x[46] !== er ? (p = ec ? (0, s.jsxs)("div", {
                className: (0, o.b)("divide-y divide-border", el ? "px-5 pb-5" : "mt-3 border-t border-default"),
                children: [(0, s.jsx)(O, {
                    business: w,
                    claimPreview: el
                }), (0, s.jsx)(ee, {
                    business: w,
                    directionsUrl: j,
                    readOnly: U,
                    claimPreview: el
                }), null != er && null != w.phone ? (0, s.jsx)(H, {
                    phone: w.phone,
                    href: er,
                    readOnly: U,
                    claimPreview: el
                }) : null, z, W || U || Z || null == I ? null : (0, s.jsx)(et, {
                    onClick: () => Y(!0)
                })]
            }) : null, x[37] = w, x[38] = z, x[39] = I, x[40] = Z, x[41] = el, x[42] = j, x[43] = W, x[44] = ec, x[45] = U, x[46] = er, x[47] = p) : p = x[47], x[48] !== w || x[49] !== I || x[50] !== K || x[51] !== es || x[52] !== N || x[53] !== J ? (f = K && null != I && (0, s.jsx)(V, {
                business: {
                    ...w,
                    photoUrl: "restricted" === es || J?.shouldBlockExternalEgress ? void 0 : (0, S.f)(w, J?.conversationType === "sidebar" ? J.contentReferences : void 0) ?? void 0
                },
                businessPreview: e => (0, s.jsx)($, {
                    business: w,
                    onAction: N,
                    layout: "claim-preview",
                    verified: e,
                    readOnly: !0
                }),
                actions: {
                    ...I,
                    onCheckDomain: I.onCheckDomain ? async () => {
                        let e = await I.onCheckDomain?.() ?? {
                            step: "review"
                        };
                        return "success" === e.step && X(!0), e
                    } : void 0,
                    onCheckClaim: I.onCheckClaim ? async () => {
                        let e = await I.onCheckClaim?.() ?? {
                            step: "review"
                        };
                        return "success" === e.step && X(!0), e
                    } : void 0,
                    onManageProfile: I.onManageProfile ? e => {
                        Y(!1), I.onManageProfile?.(e)
                    } : void 0
                },
                onClose: () => Y(!1)
            }), x[48] = w, x[49] = I, x[50] = K, x[51] = es, x[52] = N, x[53] = J, x[54] = f) : f = x[54], x[55] !== v || x[56] !== ed || x[57] !== l || x[58] !== eh || x[59] !== h || x[60] !== g || x[61] !== p || x[62] !== f ? (b = (0, s.jsxs)("section", {
                "aria-label": ed,
                className: l,
                role: eh,
                children: [h, v, g, p, f]
            }), x[55] = v, x[56] = ed, x[57] = l, x[58] = eh, x[59] = h, x[60] = g, x[61] = p, x[62] = f, x[63] = b) : b = x[63], b
        }

        function ee(e) {
            let t, n, r, a, o, l = (0, i.c)(14),
                {
                    business: c,
                    directionsUrl: d,
                    readOnly: u,
                    claimPreview: m
                } = e,
                h = void 0 !== u && u,
                g = void 0 !== m && m;
            l[0] !== c.address ? (t = c.address?.trim(), l[0] = c.address, l[1] = t) : t = l[1];
            let p = t;
            if (!p) return null;
            l[2] !== c || l[3] !== d ? (n = (0, y.a)(d ?? (0, S.e)(c) ?? "") || null, l[2] = c, l[3] = d, l[4] = n) : n = l[4];
            let f = n,
                x = !h || g;
            return l[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, s.jsx)(b.a, {
                asset: F.a
            }), l[5] = r) : r = l[5], l[6] !== p || l[7] !== h || l[8] !== f ? (a = null == f ? p : (0, s.jsx)(N.a, {
                className: "cursor-interaction hover:underline",
                href: f,
                initiator: "markdown_link_click",
                openTarget: h ? "external-browser" : void 0,
                children: p
            }), l[6] = p, l[7] = h, l[8] = f, l[9] = a) : a = l[9], l[10] !== g || l[11] !== x || l[12] !== a ? (o = (0, s.jsx)(ed, {
                truncate: x,
                icon: r,
                claimPreview: g,
                children: a
            }), l[10] = g, l[11] = x, l[12] = a, l[13] = o) : o = l[13], o
        }

        function et(e) {
            let t, n, r, a, l, c = (0, i.c)(19),
                {
                    onClick: d,
                    request: u
                } = e;
            if (u?.status === "under_review") {
                let e, t, n;
                return c[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.jsx)(b.a, {
                    className: "text-tertiary",
                    asset: L.a
                }), c[0] = e) : e = c[0], c[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, s.jsx)(ed, {
                    icon: e,
                    children: (0, s.jsx)("span", {
                        className: "text-secondary",
                        children: (0, s.jsx)(m.a, {
                            id: "chatgpt.localBusiness.claim.status.under_review",
                            defaultMessage: "Your claim is under review",
                            description: "Status action beneath a business's contact details, shown to the person whose ownership claim is awaiting review. Opens the existing claim so they can check its status or withdraw it. Keep this label short; it does not mean ownership is approved."
                        })
                    })
                }), c[1] = t) : t = c[1], c[2] !== d ? (n = (0, s.jsx)("button", {
                    type: "button",
                    onClick: d,
                    className: "w-full cursor-interaction text-start focus-visible:outline-ring",
                    children: t
                }), c[2] = d, c[3] = n) : n = c[3], n
            }
            let h = u && "in_progress" !== u.status ? "text-default" : "text-business-claim";
            c[4] !== h ? (t = (0, o.b)("flex min-h-12 w-full cursor-interaction items-center gap-4 py-3 text-start text-base font-medium select-none hover:underline focus-visible:outline-ring", h), c[4] = h, c[5] = t) : t = c[5];
            let g = u?.status === "needs_information",
                p = null != u && "needs_information" !== u.status;
            c[6] !== g || c[7] !== p ? (n = (0, o.b)({
                "text-warning": g,
                "text-tertiary": p
            }), c[6] = g, c[7] = p, c[8] = n) : n = c[8];
            let f = u?.status === "needs_information" ? z.a : L.a;
            return c[9] !== n || c[10] !== f ? (r = (0, s.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                children: (0, s.jsx)(b.a, {
                    className: n,
                    asset: f
                })
            }), c[9] = n, c[10] = f, c[11] = r) : r = c[11], c[12] !== u ? (a = u ? (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsxs)("span", {
                    className: "min-w-0 flex-1",
                    children: [(0, s.jsx)("span", {
                        className: "block",
                        children: (0, s.jsx)(m.a, {
                            id: "chatgpt.localBusiness.claim.status.title",
                            defaultMessage: "{status, select, in_progress {Finish verifying your business} needs_information {Your claim needs more information} under_review {Claim under review} other {Claim started}}",
                            description: "Claim status row in the business sidebar. Status is pending, in_progress, needs_information or under_review. Opens the existing claim.",
                            values: {
                                status: u.status
                            }
                        })
                    }), (0, s.jsx)("span", {
                        className: "block text-sm font-normal text-secondary",
                        children: (0, s.jsx)(m.a, {
                            id: "chatgpt.localBusiness.claim.status.subtitle",
                            defaultMessage: "{status, select, in_progress {Continue your business verification} needs_information {Review what’s needed to continue} under_review {Your claim is being reviewed} other {View your claim and next steps}}",
                            description: "Supporting text beneath the business sidebar claim status. Status is pending, in_progress, needs_information or under_review.",
                            values: {
                                status: u.status
                            }
                        })
                    })]
                }), (0, s.jsx)(x.fc, {})]
            }) : (0, s.jsx)(m.a, {
                id: "chatgpt.localBusiness.claim.button.label",
                defaultMessage: "Claim this business",
                description: "Action below the phone number in the business sidebar that starts ownership verification"
            }), c[12] = u, c[13] = a) : a = c[13], c[14] !== d || c[15] !== t || c[16] !== r || c[17] !== a ? (l = (0, s.jsxs)("button", {
                className: t,
                type: "button",
                onClick: d,
                children: [r, a]
            }), c[14] = d, c[15] = t, c[16] = r, c[17] = a, c[18] = l) : l = c[18], l
        }

        function en(e) {
            let t, n, r, a, l, c, d, u, m = (0, i.c)(23),
                {
                    business: h,
                    showPrice: g,
                    linkRating: p,
                    shouldBlockExternalEgress: f,
                    wrap: b
                } = e,
                x = void 0 !== g && g,
                v = void 0 === p || p,
                y = void 0 !== f && f,
                _ = void 0 !== b && b;
            m[0] !== h.categories ? (t = h.categories?.find(er), m[0] = h.categories, m[1] = t) : t = m[1];
            let w = t;
            m[2] !== h || m[3] !== v || m[4] !== y ? (n = null == h.rating && null == K[h.provider ?? ""] ? null : (0, s.jsx)(ec, {
                business: h,
                linkRating: v,
                shouldBlockExternalEgress: y
            }, "rating"), m[2] = h, m[3] = v, m[4] = y, m[5] = n) : n = m[5], m[6] !== w ? (r = w ? (0, s.jsx)("span", {
                className: "min-w-0 truncate",
                children: w
            }, "category") : null, m[6] = w, m[7] = r) : r = m[7], m[8] !== h.price_str || m[9] !== x ? (a = x && h.price_str ? (0, s.jsx)("span", {
                children: h.price_str
            }, "price") : null, m[8] = h.price_str, m[9] = x, m[10] = a) : a = m[10], m[11] !== n || m[12] !== r || m[13] !== a ? (l = [n, r, a].filter(ei), m[11] = n, m[12] = r, m[13] = a, m[14] = l) : l = m[14];
            let j = l,
                C = _ ? "text-base" : "text-sm",
                k = _ ? "flex-wrap" : "flex-nowrap";
            return m[15] !== C || m[16] !== k ? (c = (0, o.b)("flex min-w-0 items-center leading-5 font-normal text-default", C, k), m[15] = C, m[16] = k, m[17] = c) : c = m[17], m[18] !== j ? (d = j.map(es), m[18] = j, m[19] = d) : d = m[19], m[20] !== c || m[21] !== d ? (u = (0, s.jsx)("span", {
                className: c,
                children: d
            }), m[20] = c, m[21] = d, m[22] = u) : u = m[22], u
        }

        function es(e, t) {
            return (0, s.jsxs)(d.Fragment, {
                children: [0 === t ? null : (0, s.jsx)("span", {
                    className: "mx-1 shrink-0",
                    "aria-hidden": !0,
                    children: "•"
                }), e]
            }, e.key)
        }

        function ei(e) {
            return null != e
        }

        function er(e) {
            return e.trim().length > 0 && "Point" !== e
        }

        function ea(e) {
            let t, n, r, c, u, h, p, f, b, x, v, k, E, I, A, O, P, B, R, z, F, W = (0, i.c)(68),
                {
                    allowQuoteAction: D,
                    analyticsMessageId: L,
                    business: V,
                    directionsUrl: U,
                    onAction: q,
                    onQuoteInteractionOpenChange: G,
                    openTarget: Q,
                    presentation: H,
                    primaryActionsOnly: K,
                    reservationAction: Y
                } = e,
                Z = void 0 === D || D,
                $ = void 0 === H ? "sidebar" : H,
                X = void 0 !== K && K,
                J = (0, l.z)(g.f),
                ee = (0, T.d)(),
                et = (0, d.useContext)(_.a);
            W[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, w.b)(), W[0] = t) : t = W[0];
            let en = (0, j.f)(t),
                es = (0, l.x)(C.d, "2673474834");
            W[1] !== V || W[2] !== $ || W[3] !== es ? (n = (0, y.a)(es && "sidebar" === $ ? (0, S.g)(V) ?? "" : "") || null, W[1] = V, W[2] = $, W[3] = es, W[4] = n) : n = W[4];
            let ei = n;
            W[5] !== V || W[6] !== U ? (r = (0, y.a)(U ?? (0, S.e)(V) ?? "") || null, W[5] = V, W[6] = U, W[7] = r) : r = W[7];
            let er = r;
            W[8] !== V.website_url ? (c = (0, y.a)(V.website_url?.trim() ?? "") || null, W[8] = V.website_url, W[9] = c) : c = W[9];
            let ea = c;
            W[10] !== V.phone ? (u = V.phone?.trim() ? (0, y.a)(`tel:${V.phone.trim()}`) : null, W[10] = V.phone, W[11] = u) : u = W[11];
            let ec = u;
            W[12] !== V.service_providers ? (h = (0, S.h)(V.service_providers), W[12] = V.service_providers, W[13] = h) : h = W[13];
            let ed = h;
            W[14] !== J || W[15] !== Z || W[16] !== V.reservation_providers || W[17] !== en || W[18] !== et || W[19] !== ed || W[20] !== ei || W[21] !== ee ? (p = Z && null != J && ee?.shouldBlockExternalEgress === !1 && (ee.canRequestQuote ?? !ee.isReadOnly) && "restricted" !== et && en && null == ei && !V.reservation_providers?.some(el) && ed.length > 0, W[14] = J, W[15] = Z, W[16] = V.reservation_providers, W[17] = en, W[18] = et, W[19] = ed, W[20] = ei, W[21] = ee, W[22] = p) : p = W[22];
            let eu = p;
            W[23] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, s.jsx)(m.a, {
                id: "chatgpt.localBusiness.reserve",
                defaultMessage: "Reserve",
                description: "Short button label in a local restaurant sidebar that opens the reservation provider website"
            }), W[23] = f) : f = W[23], W[24] !== ei ? (b = {
                key: a.d.CHATGPT_ENTITY_AFFORDANCE_RESERVE,
                href: ei,
                label: f
            }, W[24] = ei, W[25] = b) : b = W[25], W[26] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, s.jsx)(m.a, {
                id: "chatgpt.localBusiness.directions",
                defaultMessage: "Directions",
                description: "Short button label in a local business sidebar that opens directions to the business"
            }), W[26] = x) : x = W[26], W[27] !== er ? (v = {
                key: a.d.CHATGPT_ENTITY_AFFORDANCE_DIRECTIONS,
                href: er,
                label: x
            }, W[27] = er, W[28] = v) : v = W[28], W[29] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, s.jsx)(m.a, {
                id: "chatgpt.localBusiness.website",
                defaultMessage: "Website",
                description: "Short button label in a local business sidebar that opens the business website"
            }), W[29] = k) : k = W[29], W[30] !== ea ? (E = {
                key: a.d.CHATGPT_ENTITY_AFFORDANCE_WEBSITE,
                href: ea,
                label: k
            }, W[30] = ea, W[31] = E) : E = W[31], W[32] === Symbol.for("react.memo_cache_sentinel") ? (I = (0, s.jsx)(m.a, {
                id: "chatgpt.localBusiness.call",
                defaultMessage: "Call",
                description: "Short button label in a local business sidebar that calls the business phone number"
            }), W[32] = I) : I = W[32], W[33] !== ec ? (A = {
                key: a.d.CHATGPT_ENTITY_AFFORDANCE_CALL,
                href: ec,
                label: I
            }, W[33] = ec, W[34] = A) : A = W[34], W[35] !== b || W[36] !== v || W[37] !== E || W[38] !== A ? (O = [b, v, E, A].filter(eo), W[35] = b, W[36] = v, W[37] = E, W[38] = A, W[39] = O) : O = W[39], W[40] !== eu || W[41] !== X || W[42] !== Y || W[43] !== O ? (P = O.slice(0, X ? 0 : 3 - Number(eu) - Number(null != Y)), W[40] = eu, W[41] = X, W[42] = Y, W[43] = O, W[44] = P) : P = W[44];
            let em = P;
            if (!eu && 0 === em.length && null == Y) return null;
            W[45] !== $ ? (B = e => (0, o.b)("no-drag relative flex cursor-interaction items-center justify-center rounded-full border after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] hover:after:bg-media-background/5 text-sm leading-4 font-medium whitespace-nowrap select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring", "sidebar" === $ ? "h-9 px-5" : "h-7.5 flex-auto px-4", 0 === e ? "border-transparent bg-primary-solid text-primary-solid" : "border-default bg-transparent text-default"), W[45] = $, W[46] = B) : B = W[46];
            let eh = B;
            return W[47] !== eh || W[48] !== L || W[49] !== V.id || W[50] !== eu || W[51] !== q || W[52] !== G || W[53] !== $ || W[54] !== ed || W[55] !== ee ? (R = eu && (0, s.jsx)(M.a, {
                analyticsMessageId: L,
                businessId: "string" == typeof V.id ? V.id : void 0,
                ctaSurface: "hover" === $ ? "map_card" : "business_sidebar",
                onAction: () => q?.(a.d.CHATGPT_ENTITY_AFFORDANCE_REQUEST_QUOTE),
                onInteractionOpenChange: G,
                providers: ed,
                trigger: (0, s.jsx)("button", {
                    className: eh(0),
                    type: "button",
                    children: (0, s.jsx)(M.b, {})
                }),
                turnContext: ee
            }), W[47] = eh, W[48] = L, W[49] = V.id, W[50] = eu, W[51] = q, W[52] = G, W[53] = $, W[54] = ed, W[55] = ee, W[56] = R) : R = W[56], W[57] !== eh || W[58] !== em || W[59] !== eu || W[60] !== q || W[61] !== Q || W[62] !== Y ? (z = em.map((e, t) => (0, s.jsx)(N.a, {
                appearance: "button",
                className: eh(t + Number(eu) + Number(null != Y)),
                href: e.href,
                initiator: "markdown_link_click",
                openTarget: Q,
                onClick: () => q?.(e.key),
                children: e.label
            }, e.key)), W[57] = eh, W[58] = em, W[59] = eu, W[60] = q, W[61] = Q, W[62] = Y, W[63] = z) : z = W[63], W[64] !== Y || W[65] !== R || W[66] !== z ? (F = (0, s.jsxs)("div", {
                className: "flex min-w-0 flex-wrap gap-2",
                children: [R, Y, z]
            }), W[64] = Y, W[65] = R, W[66] = z, W[67] = F) : F = W[67], F
        }

        function eo(e) {
            return null != e.href
        }

        function el(e) {
            return null != e.launcherPayload
        }

        function ec(e) {
            let t, n, r, a, l, m = (0, i.c)(17),
                {
                    business: h,
                    linkRating: g,
                    shouldBlockExternalEgress: x
                } = e,
                v = (0, u.a)(),
                w = (0, k.a)(),
                C = (0, T.d)(),
                E = (0, d.useContext)(_.a),
                S = !x && C?.shouldBlockExternalEgress !== !0 && "restricted" !== E,
                I = h.provider_logo_url_short?.trim() || h.provider_logo_url?.trim(),
                A = w && (h.provider_logo_dark_url_short?.trim() || h.provider_logo_dark_url?.trim()) || I,
                O = S && A ? (0, y.b)(A) : null;
            m[0] !== S || m[1] !== h.provider_url || m[2] !== g ? (t = (0, f.a)(h.provider_url?.trim() ?? ""), n = g && S && (0, c.d)(t), m[0] = S, m[1] = h.provider_url, m[2] = g, m[3] = t, m[4] = n) : (t = m[3], n = m[4]);
            let P = n,
                B = (0, j.f)(P && "1492523517"),
                R = B ? p.a : N.a,
                M = K[h.provider ?? ""] ?? h.provider ?? "";
            m[5] !== h.rating || m[6] !== v ? (r = null != h.rating ? (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(b.a, {
                    asset: D.a,
                    className: "size-3.5 shrink-0"
                }), (0, s.jsx)("span", {
                    children: v.formatNumber(h.rating, {
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 1
                    })
                })]
            }) : null, m[5] = h.rating, m[6] = v, m[7] = r) : r = m[7];
            let z = O ? (0, s.jsx)("img", {
                alt: M,
                className: (0, o.b)("w-auto max-w-18 shrink-0 object-contain", O.toLowerCase().includes("tripadvisor_ollie") ? "h-3" : "h-3.5"),
                src: O
            }) : K[h.provider ?? ""] ?? null;
            m[8] !== r || m[9] !== z ? (a = (0, s.jsxs)(s.Fragment, {
                children: [r, z]
            }), m[8] = r, m[9] = z, m[10] = a) : a = m[10];
            let F = a;
            return m[11] !== R || m[12] !== P || m[13] !== F || m[14] !== B || m[15] !== t ? (l = P ? (0, s.jsx)(R, {
                className: "inline-flex shrink-0 cursor-interaction items-center gap-1 hover:text-secondary",
                href: t,
                initiator: "markdown_link_click",
                openTarget: B ? "in-app-browser" : void 0,
                children: F
            }) : (0, s.jsx)("span", {
                className: "inline-flex shrink-0 items-center gap-1",
                children: F
            }), m[11] = R, m[12] = P, m[13] = F, m[14] = B, m[15] = t, m[16] = l) : l = m[16], l
        }

        function ed(e) {
            let t, n, r, a, l, c = (0, i.c)(13),
                {
                    icon: d,
                    children: u,
                    truncate: m,
                    claimPreview: h
                } = e,
                g = void 0 !== h && h ? "py-2.5" : "py-2";
            c[0] !== g ? (t = (0, o.b)("flex min-h-11 items-center gap-4", g), c[0] = g, c[1] = t) : t = c[1], c[2] !== d ? (n = (0, s.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                children: d
            }), c[2] = d, c[3] = n) : n = c[3];
            let p = void 0 !== m && m && "truncate";
            return c[4] !== p ? (r = (0, o.b)("min-w-0 flex-1 text-base font-medium select-text", p), c[4] = p, c[5] = r) : r = c[5], c[6] !== u || c[7] !== r ? (a = (0, s.jsx)("span", {
                className: r,
                children: u
            }), c[6] = u, c[7] = r, c[8] = a) : a = c[8], c[9] !== t || c[10] !== n || c[11] !== a ? (l = (0, s.jsxs)("div", {
                className: t,
                children: [n, a]
            }), c[9] = t, c[10] = n, c[11] = a, c[12] = l) : l = c[12], l
        }
    }),
    PUeQ: (function(e, t, n) {
        var s = n("ABep"),
            i = n("QosV"),
            r = n("Wf1j"),
            a = n("oyxz");
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, l, c = (0, i.c)(24),
                    {
                        business: d,
                        showHourDetail: u
                    } = e,
                    m = (0, r.a)();
                if (d.is_closed_permanently) {
                    let e;
                    return c[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.jsx)("span", {
                        className: "text-danger",
                        children: (0, s.jsx)(a.a, {
                            id: "chatgpt.localBusiness.closedPermanently",
                            defaultMessage: "Permanently closed",
                            description: "Status in a local business preview or details sidebar indicating the business has permanently closed"
                        })
                    }), c[0] = e) : e = c[0], e
                }
                let h = d.is_open;
                if (null == h) return null;
                let g = d.next_open_hour;
                if (!u || null == g) {
                    let e;
                    return c[1] !== h ? (e = h ? (0, s.jsx)("span", {
                        className: "text-success",
                        children: (0, s.jsx)(a.a, {
                            id: "chatgpt.localBusiness.open",
                            defaultMessage: "Open",
                            description: "Status in a local business preview or details sidebar indicating the business is currently open"
                        })
                    }) : (0, s.jsx)("span", {
                        className: "text-danger",
                        children: (0, s.jsx)(a.a, {
                            id: "chatgpt.localBusiness.closed",
                            defaultMessage: "Closed",
                            description: "Status in a local business preview or details sidebar indicating the business is currently closed"
                        })
                    }), c[1] = h, c[2] = e) : e = c[2], e
                }
                let p = d.local_day ?? new Date().getDay(),
                    f = null != d.local_day && h && g.end <= g.start ? (g.day + 1) % 7 : g.day,
                    b = h ? g.end : g.start;
                if (c[3] !== m || c[4] !== b) {
                    let e, n;
                    c[6] !== b ? (e = Number.parseInt(b.slice(0, 2), 10), c[6] = b, c[7] = e) : e = c[7], c[8] !== b ? (n = Number.parseInt(b.slice(2, 4), 10), c[8] = b, c[9] = n) : n = c[9], t = m.formatTime(new Date(0, 0, 0, e, n), {
                        hour: "numeric",
                        minute: "2-digit"
                    }), c[3] = m, c[4] = b, c[5] = t
                } else t = c[5];
                let x = t;
                c[10] !== h ? (n = e => (0, s.jsx)("span", {
                    className: h ? "text-success" : "text-danger",
                    children: e
                }), c[10] = h, c[11] = n) : n = c[11];
                let v = n;
                if (f === p) {
                    let e;
                    return c[12] !== h || c[13] !== v || c[14] !== x ? (e = h ? (0, s.jsx)("span", {
                        children: (0, s.jsx)(a.a, {
                            id: "chatgpt.localBusiness.openUntilTime",
                            defaultMessage: "<status>Open</status> until {time}",
                            description: "Business status in a details sidebar when the business is currently open and closes today. The time is the locale-formatted closing time. The status tag styles Open as a positive status",
                            values: {
                                status: v,
                                time: x
                            }
                        })
                    }) : (0, s.jsx)("span", {
                        children: (0, s.jsx)(a.a, {
                            id: "chatgpt.localBusiness.closedUntilTime",
                            defaultMessage: "<status>Closed</status> until {time}",
                            description: "Business status in a details sidebar when the business is currently closed and opens today. The time is the locale-formatted opening time. The status tag styles Closed as a negative status",
                            values: {
                                status: v,
                                time: x
                            }
                        })
                    }), c[12] = h, c[13] = v, c[14] = x, c[15] = e) : e = c[15], e
                }
                c[16] !== m || c[17] !== f ? (o = m.formatDate(new Date(0, 0, f), {
                    weekday: "short"
                }), c[16] = m, c[17] = f, c[18] = o) : o = c[18];
                let y = o;
                return c[19] !== y || c[20] !== h || c[21] !== v || c[22] !== x ? (l = h ? (0, s.jsx)("span", {
                    children: (0, s.jsx)(a.a, {
                        id: "chatgpt.localBusiness.openUntilDayTime",
                        defaultMessage: "<status>Open</status> until {day} {time}",
                        description: "Business status in a details sidebar when the business is currently open and closes on a different day. The day is the locale-formatted abbreviated weekday and time is the closing time. The status tag styles Open as a positive status",
                        values: {
                            status: v,
                            day: y,
                            time: x
                        }
                    })
                }) : (0, s.jsx)("span", {
                    children: (0, s.jsx)(a.a, {
                        id: "chatgpt.localBusiness.closedUntilDayTime",
                        defaultMessage: "<status>Closed</status> until {day} {time}",
                        description: "Business status in a details sidebar when the business is currently closed and opens on a different day. The day is the locale-formatted abbreviated weekday and time is the opening time. The status tag styles Closed as a negative status",
                        values: {
                            status: v,
                            day: y,
                            time: x
                        }
                    })
                }), c[19] = y, c[20] = h, c[21] = v, c[22] = x, c[23] = l) : l = c[23], l
            }
        })
    }),
    FRPb: (function(e, t, n) {
        var s = n("alRw"),
            i = n.n(s),
            r = n("BolX"),
            a = n("rKAs"),
            o = n("OWtl"),
            l = n("iGzJ"),
            c = n("tZ3A"),
            d = n("dQRk"),
            u = n("WOVT"),
            m = n("TJEh");
        let h = (0, r.v)(o.a, e => null),
            g = (0, r.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t, s = n(h, e);
                if (null == s) return null;
                let i = n(d.M, e);
                return null != i && Object.values(i).some(e => null != e.message && (0, l.c)(e.message).some(e => {
                    let t = (0, m.c)(e);
                    if (null == t) return !1;
                    let n = ("string" == typeof e.name ? e.name : t.name).trim().toLowerCase();
                    return t.id === s.business.id || "" !== n && n === s.business.name.trim().toLowerCase()
                })) ? null : s.business
            }),
            p = (0, r.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t, s = n(c.e, e);
                if (null == s) return null;
                let i = n(d.M, e);
                return null != i && Object.values(i).some(e => null != e.message && (0, l.c)(e.message).some(e => null == e.layout && (0, u.c)(e)?.canonical_id === s.canonical_id)) ? null : s
            });
        n.d(t, {}, {
            a: function(e) {
                return (t, n) => (0, c.g)(t, n, {
                    onCancel: e => {
                        t.set(h, e, null)
                    },
                    onError: e => {
                        t.set(h, e, null)
                    },
                    onStart: s => {
                        t.set(h, s, {
                            business: e,
                            category: n.category,
                            messageId: n.messageId,
                            sourceConversationId: n.sourceConversationId
                        })
                    }
                })
            },
            b: h,
            c: p,
            d: g,
            e: function(e, t, n, s) {
                let r = e.get(h, t),
                    o = e.get(c.c, t);
                if (null == r && null == o) return;
                let g = e.get(c.c, n);
                if (null != g && g !== s && !i()({
                        ...g,
                        entityKnowledgeId: null,
                        entityKnowledgePending: !1
                    }, {
                        ...s,
                        entityKnowledgeId: null,
                        entityKnowledgePending: !1
                    }, (e, t, n) => void 0 === n ? void 0 : Object.is(e, t))) return;
                let p = Object.values(e.get(d.M, t) ?? {}).flatMap(e => null == e.message ? [] : (0, l.c)(e.message)),
                    f = p.filter(e => "entity_metadata" === e.type && null == e.layout),
                    b = o?.businessPreview ?? r?.business;
                if (null != b) {
                    let t = f.map(m.c).findLast(e => null != e && (e.id === b.id || e.name.trim().toLowerCase() === b.name.trim().toLowerCase())) ?? r?.business;
                    null != t && e.set(h, n, {
                        category: o?.category ?? s.category,
                        messageId: s.messageId,
                        sourceConversationId: s.sourceConversationId,
                        business: t
                    })
                }
                if (null != o) {
                    let t = f.map(u.c).findLast(e => null != e && e.canonical_id === o.businessProfile?.canonical_id) ?? o.businessProfile;
                    e.set(c.c, n, {
                        ...o,
                        entityKnowledgeId: g?.entityKnowledgeId,
                        entityKnowledgePending: g?.entityKnowledgePending,
                        businessProfile: t
                    }), e.set(c.e, n, t ?? null)
                }
                let x = p.find(e => "image_group" === e.type && ("full_width" === e.layout || 0 === e.start_idx));
                e.set(c.b, n, (null == x ? null : (0, a.u)(x, 0)[0]) ?? e.get(c.b, t))
            }
        })
    }),
    ynn3: (function(e, t, n) {
        n.d(t, {
            a: () => T,
            b: () => S
        });
        var s = n("ABep"),
            i = n("QosV"),
            r = n("tBe6"),
            a = n("BolX"),
            o = n("hV9T"),
            l = n("zd8w"),
            c = n("Wf1j"),
            d = n("oyxz"),
            u = n("ASxG"),
            m = n("bqtn"),
            h = n("bf6R"),
            g = n("E6P3"),
            p = n("zSQm"),
            f = n("WAdu"),
            b = n("yGJW"),
            x = n("OWtl"),
            v = n("WFY2"),
            y = n("rcTL"),
            _ = n("f3BX"),
            w = n("OOaz"),
            j = n("rVXE"),
            C = e => (0, s.jsx)("svg", {
                viewBox: "0 0 70 70",
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, s.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0 34.9998C0 54.3297 15.6703 70 34.9998 70C54.3297 70 70 54.3297 70 34.9998C70 15.6699 54.3297 0 34.9998 0C15.6703 0 0 15.6699 0 34.9998ZM52.1011 26.3572H17.8975V18.574H52.1011V26.3572ZM36.7476 56.998C38.3276 54.2569 39.1597 51.1478 39.1597 47.9836V29.6306C35.9878 29.6306 32.9053 30.6476 30.8403 33.5203V47.9836C30.8403 51.1478 31.6724 54.2569 33.2529 56.998L35 60.0286L36.7476 56.998Z"
                })
            });
        let k = {
                thumbtack: "Thumbtack",
                yelp: "Yelp"
            },
            N = u.string().trim().min(1).transform(p.b).catch(void 0);

        function T(e) {
            let t, n, d, u, p, v, T, S, P, B, R, M, z, F, W, D = (0, i.c)(47),
                {
                    analyticsMessageId: L,
                    businessId: V,
                    ctaSurface: U,
                    onAction: q,
                    onInteractionOpenChange: G,
                    providers: Q,
                    trigger: H,
                    turnContext: K
                } = e,
                Y = (0, a.y)(x.a),
                Z = (0, c.a)(),
                $ = (0, l.useContext)(f.a);
            D[0] !== $ || D[1] !== Z || D[2] !== K.shouldBlockExternalEgress ? (t = e => ({
                provider: e,
                logoUrl: !1 === K.shouldBlockExternalEgress && "restricted" !== $ ? N.parse(e.provider_logo) : void 0,
                label: e.provider_name?.trim() || k[e.provider?.trim().toLowerCase() ?? ""] || e.provider?.trim() || Z.formatMessage({
                    id: "chatgpt.localBusiness.quoteProvider",
                    defaultMessage: "Quote provider",
                    description: "Fallback item in the local business Get Quote provider menu when no company name was supplied. Selecting it opens that provider’s quote flow."
                })
            }), D[0] = $, D[1] = Z, D[2] = K.shouldBlockExternalEgress, D[3] = t) : t = D[3], D[4] !== Z ? (n = (e, t) => e.label.localeCompare(t.label, Z.locale, {
                sensitivity: "base"
            }), D[4] = Z, D[5] = n) : n = D[5];
            let X = Q.map(t).sort(n),
                J = (0, l.useRef)(!1),
                ee = (0, l.useRef)(!1);
            D[6] !== G ? (d = () => {
                J.current = !1, ee.current = !1, G?.(!1)
            }, D[6] = G, D[7] = d) : d = D[7];
            let et = (0, l.useEffectEvent)(d);
            D[8] !== et ? (u = () => () => et(), D[8] = et, D[9] = u) : u = D[9], D[10] === Symbol.for("react.memo_cache_sentinel") ? (p = [], D[10] = p) : p = D[10], (0, l.useLayoutEffect)(u, p), D[11] === Symbol.for("react.memo_cache_sentinel") ? (v = new Set, D[11] = v) : v = D[11];
            let en = (0, l.useRef)(v),
                es = !1 !== K.trackShownImpressions,
                ei = K.browserConversationId ?? K.conversationId;
            D[12] !== L || D[13] !== ei || D[14] !== Y || D[15] !== K.hostId || D[16] !== K.messageId ? (T = {
                launch: (e, t, n) => {
                    if ((0, w.e)(ei)) throw Error("Wait for this conversation to finish saving, then try again.");
                    return (0, _.c)({
                        scope: Y,
                        hostId: K.hostId,
                        chatGptConversationId: ei,
                        payload: e,
                        sourceMessageId: L ?? K.messageId,
                        signal: t,
                        onTracking: n
                    })
                },
                onError: E
            }, D[12] = L, D[13] = ei, D[14] = Y, D[15] = K.hostId, D[16] = K.messageId, D[17] = T) : T = D[17];
            let er = (0, j.a)(T);
            D[18] !== L || D[19] !== V || D[20] !== ei || D[21] !== U || D[22] !== Y || D[23] !== es || D[24] !== K.messageId ? (S = (e, t) => {
                let n = e.launcherPayload.appUri,
                    s = I(e);
                if ("show" === t) {
                    if (!es || en.current.has(s)) return;
                    en.current.add(s)
                }
                try {
                    (0, b.a)(Y, r.d, {
                        action: "show" === t ? "CHATGPT_CONTENT_REFERENCE_ACTION_SHOW" : "CHATGPT_CONTENT_REFERENCE_ACTION_CLICK",
                        eventType: "show" === t ? "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_SHOWN" : "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_CLICKED",
                        businessId: V ?? void 0,
                        connectorId: n.startsWith("connectors://") ? n.slice(13) : n,
                        contentReferenceType: "map_card" === U ? "map" : "entity_metadata",
                        conversationId: ei,
                        ctaSurface: U,
                        ctaType: "service",
                        linkType: "local_business_service",
                        messageId: L ?? K.messageId,
                        sectionLocation: "response",
                        serviceProvider: e.provider ?? void 0,
                        serviceActionType: e.action_type ?? void 0
                    })
                } catch {}
            }, D[18] = L, D[19] = V, D[20] = ei, D[21] = U, D[22] = Y, D[23] = es, D[24] = K.messageId, D[25] = S) : S = D[25];
            let ea = S,
                eo = 1 === Q.length ? Q[0] : void 0;
            D[26] !== eo ? (P = null == eo ? null : I(eo), D[26] = eo, D[27] = P) : P = D[27];
            let el = P;
            D[28] !== eo || D[29] !== ea ? (B = () => {
                null != eo && ea(eo, "show")
            }, D[28] = eo, D[29] = ea, D[30] = B) : B = D[30];
            let ec = (0, l.useEffectEvent)(B);
            D[31] !== el || D[32] !== ec ? (R = () => {
                null != el && ec()
            }, D[31] = el, D[32] = ec, D[33] = R) : R = D[33], D[34] !== el || D[35] !== es ? (M = [el, es], D[34] = el, D[35] = es, D[36] = M) : M = D[36], (0, l.useEffect)(R, M);
            let ed = e => {
                ea(e, "click"), q?.(), ee.current = !0, G?.(!0), er.launch(e.launcherPayload)
            };
            if (0 === Q.length) return null;
            let eu = null != eo ? (0, s.jsx)(O, {
                trigger: H,
                onClick: () => ed(eo)
            }) : (0, s.jsx)(A, {
                contentWidth: "menuWide",
                onOpenChange: e => {
                    if (J.current = e, G?.(e || ee.current), e)
                        for (let e of Q) ea(e, "show")
                },
                size: "action",
                triggerButton: H,
                children: X.map(e => {
                    let {
                        provider: t,
                        label: n,
                        logoUrl: i
                    } = e, r = t.provider?.trim().toLowerCase() === "thumbtack" ? (0, s.jsx)(C, {
                        className: "size-5 text-default",
                        "aria-hidden": !0,
                        focusable: "false"
                    }) : (0, s.jsx)(h.Pg, {
                        className: "text-secondary"
                    });
                    return (0, s.jsx)(m.c.Item, {
                        leftIcon: null == i ? r : (0, s.jsx)(g.a, {
                            className: "size-5 rounded-sm",
                            alt: "",
                            fallback: r,
                            src: i
                        }, i),
                        onClick: () => ed(t),
                        children: n
                    }, I(t))
                })
            });
            return D[37] !== ei || D[38] !== er || D[39] !== G || D[40] !== K.hostId ? (z = null == er.dialog ? null : (0, s.jsx)(y.EcosystemWidgetDialog, {
                conversationId: (0, o.Se)(ei),
                hostId: K.hostId,
                onClose: () => {
                    er.close(), ee.current = !1, G?.(J.current)
                },
                state: er.dialog
            }), D[37] = ei, D[38] = er, D[39] = G, D[40] = K.hostId, D[41] = z) : z = D[41], D[42] !== z ? (F = (0, s.jsx)(s.Fragment, {
                children: z
            }), D[42] = z, D[43] = F) : F = D[43], D[44] !== eu || D[45] !== F ? (W = (0, s.jsxs)(s.Fragment, {
                children: [eu, F]
            }), D[44] = eu, D[45] = F, D[46] = W) : W = D[46], W
        }

        function E(e) {
            v.a.error("ChatGPT entity quote launch failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function S() {
            let e, t = (0, i.c)(1);
            return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.jsx)(d.a, {
                id: "chatgpt.localBusiness.getQuote",
                defaultMessage: "Get Quote",
                description: "Short button on a local business result, preview, or sidebar. It opens a price or availability quote request; when several providers are available, the user first chooses a provider."
            }), t[0] = e) : e = t[0], e
        }

        function I(e) {
            return JSON.stringify([e.provider, e.provider_business_id, e.launcherPayload.appUri])
        }

        function A(e) {
            let t, n, r, a, o, c, d = (0, i.c)(11);
            d[0] !== e ? ({
                onOpenChange: t,
                ...n
            } = e, d[0] = e, d[1] = t, d[2] = n) : (t = d[1], n = d[2]), d[3] !== t ? (r = () => t?.(!1), d[3] = t, d[4] = r) : r = d[4];
            let u = (0, l.useEffectEvent)(r);
            return d[5] !== u ? (a = () => () => u(), d[5] = u, d[6] = a) : a = d[6], d[7] === Symbol.for("react.memo_cache_sentinel") ? (o = [], d[7] = o) : o = d[7], (0, l.useLayoutEffect)(a, o), d[8] !== t || d[9] !== n ? (c = (0, s.jsx)(m.a, {
                ...n,
                onOpenChange: t
            }), d[8] = t, d[9] = n, d[10] = c) : c = d[10], c
        }

        function O(e) {
            let {
                trigger: t,
                onClick: n
            } = e;
            return (0, l.cloneElement)(t, {
                onClick: n
            })
        }
    }),
    rVXE: (function(e, t, n) {
        var s = n("QosV"),
            i = n("zd8w"),
            r = n("T8YV");
        n.d(t, {}, {
            a: function(e) {
                let t, n, a, o, l, c = (0, s.c)(9),
                    {
                        launch: d,
                        onError: u
                    } = e,
                    m = (0, i.useRef)(null);
                c[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => {
                    m.current?.controller.abort()
                }, n = [], c[0] = t, c[1] = n) : (t = c[0], n = c[1]), (0, i.useEffect)(t, n);
                let [h, g] = (0, i.useState)(null);
                c[2] !== d || c[3] !== u ? (a = async e => {
                    let t;
                    if (m.current?.pending) return;
                    m.current?.controller.abort();
                    let n = {
                        controller: new AbortController,
                        pending: !0
                    };
                    m.current = n;
                    let {
                        signal: s
                    } = n.controller;
                    g({
                        kind: "loading",
                        nonModal: !0
                    });
                    try {
                        let i = await d(e, s, e => {
                            t = e, s.aborted || g({
                                kind: "loading",
                                nonModal: !0,
                                tracking: t
                            })
                        });
                        n.pending = !1, s.aborted || g({
                            kind: "ready",
                            result: i
                        })
                    } catch (e) {
                        n.pending = !1, !s.aborted && ((0, r.d)(e) || u?.(e), s.aborted || g({
                            kind: "error",
                            error: e,
                            tracking: t
                        }))
                    }
                }, c[2] = d, c[3] = u, c[4] = a) : a = c[4];
                let p = a;
                return c[5] === Symbol.for("react.memo_cache_sentinel") ? (o = () => {
                    m.current?.controller.abort(), m.current = null, g(null)
                }, c[5] = o) : o = c[5], c[6] !== h || c[7] !== p ? (l = {
                    close: o,
                    dialog: h,
                    launch: p
                }, c[6] = h, c[7] = p, c[8] = l) : l = c[8], l
            }
        })
    }),
    QnVT: (function(e, t, n) {
        var s = n("BolX"),
            i = n("i8Zd"),
            r = n("OWtl");
        let a = (0, s.c)(r.a, e => {
                let {
                    get: t
                } = e;
                return {
                    revision: t(i.a),
                    appearance: null
                }
            }, {
                isEqual: (e, t) => e.revision === t.revision
            }),
            o = (0, s.c)(r.a, e => {
                let {
                    get: t
                } = e, {
                    appearance: n,
                    revision: s
                } = t(a), i = n?.fonts;
                return null == i || window.matchMedia?.("(forced-colors: active)").matches !== !1 || [i.code, i.ui].some(e => e?.includes("(")) ? s : n
            }),
            l = (0, s.c)(r.a, e => {
                let {
                    get: t
                } = e;
                return t(o),
                    function() {
                        let e = getComputedStyle(document.documentElement),
                            t = document.createElement("div");
                        t.style.display = "none", t.setAttribute("aria-hidden", "true"), document.body.appendChild(t);
                        let n = t => {
                                let n = e.getPropertyValue(t).trim();
                                return n.length > 0 ? n : void 0
                            },
                            s = n => {
                                let s = c(e, t, n, "color"),
                                    i = c(e, t, "--color-surface-tertiary", "color");
                                if (null != s && null != i) return `color-mix(in srgb, ${s} 12%, ${i})`
                            };
                        try {
                            let i, r, a, o, l, d, u, m, h, g, p, f, b, x, v, y, _, w, j, C, k, N, T, E, S, I, A, O, P, B, R, M, z, F, W, D;
                            return {
                                "--color-background-primary": (i = "--app-color-background-surface", c(e, t, i, "color") ?? (r = "--color-surface-tertiary", c(e, t, r, "color"))),
                                "--color-background-secondary": (a = "--color-surface-elevated", c(e, t, a, "color")),
                                "--color-background-tertiary": (o = "--color-surface-secondary", c(e, t, o, "color")),
                                "--color-background-inverse": (l = "--color-text", c(e, t, l, "color")),
                                "--color-background-ghost": "transparent",
                                "--color-background-info": (d = "--codex-theme-accent-background-subtle", c(e, t, d, "color") ?? (u = "--color-background-info-surface", c(e, t, u, "color"))),
                                "--color-background-danger": (m = "--color-background-danger-surface", c(e, t, m, "color")),
                                "--color-background-success": s("--color-codex-git-added"),
                                "--color-background-warning": s("--color-text-warning"),
                                "--color-background-disabled": (h = "--color-background-primary-soft-active", c(e, t, h, "color")),
                                "--color-text-primary": (g = "--color-text", c(e, t, g, "color")),
                                "--color-text-secondary": (p = "--color-text-secondary", c(e, t, p, "color")),
                                "--color-text-tertiary": (f = "--color-codex-description", c(e, t, f, "color")),
                                "--color-text-inverse": (b = "--color-text-inverse", c(e, t, b, "color") ?? (x = "--color-surface-tertiary", c(e, t, x, "color"))),
                                "--color-text-ghost": (v = "--color-codex-description", c(e, t, v, "color")),
                                "--color-text-info": (y = "--color-text-info", c(e, t, y, "color")),
                                "--color-text-danger": (_ = "--color-text-danger", c(e, t, _, "color")),
                                "--color-text-success": (w = "--color-codex-git-added", c(e, t, w, "color")),
                                "--color-text-warning": (j = "--color-text-warning", c(e, t, j, "color")),
                                "--color-text-disabled": (C = "--color-codex-description", c(e, t, C, "color")),
                                "--color-border-primary": (k = "--color-border-primary-outline", c(e, t, k, "color")),
                                "--color-border-secondary": (N = "--color-border", c(e, t, N, "color")),
                                "--color-border-tertiary": (T = "--color-border", c(e, t, T, "color")),
                                "--color-border-inverse": (E = "--color-text", c(e, t, E, "color")),
                                "--color-border-ghost": "transparent",
                                "--color-border-info": (S = "--color-ring", c(e, t, S, "color")),
                                "--color-border-danger": (I = "--color-text-danger", c(e, t, I, "color")),
                                "--color-border-success": (A = "--color-codex-git-added", c(e, t, A, "color")),
                                "--color-border-warning": (O = "--color-text-warning", c(e, t, O, "color")),
                                "--color-border-disabled": (P = "--color-border-primary-outline", c(e, t, P, "color")),
                                "--color-ring-primary": (B = "--color-ring", c(e, t, B, "color")),
                                "--color-ring-secondary": (R = "--color-ring", c(e, t, R, "color")),
                                "--color-ring-inverse": (M = "--color-ring", c(e, t, M, "color")),
                                "--color-ring-info": (z = "--color-ring", c(e, t, z, "color")),
                                "--color-ring-danger": (F = "--color-text-danger", c(e, t, F, "color")),
                                "--color-ring-success": (W = "--color-codex-git-added", c(e, t, W, "color")),
                                "--color-ring-warning": (D = "--color-text-warning", c(e, t, D, "color")),
                                "--font-sans": c(e, t, "--font-sans", "fontFamily"),
                                "--font-mono": c(e, t, "--font-mono", "fontFamily"),
                                "--font-weight-normal": c(e, t, "--font-ui-weight", "fontWeight"),
                                "--font-weight-medium": c(e, t, "--font-weight-medium", "fontWeight"),
                                "--font-weight-semibold": c(e, t, "--font-weight-semibold", "fontWeight"),
                                "--font-weight-bold": c(e, t, "--font-weight-bold", "fontWeight"),
                                "--font-text-xs-size": c(e, t, "--text-xs", "fontSize"),
                                "--font-text-sm-size": c(e, t, "--text-sm", "fontSize"),
                                "--font-text-md-size": c(e, t, "--text-base", "fontSize"),
                                "--font-text-lg-size": c(e, t, "--text-lg", "fontSize"),
                                "--font-heading-xs-size": c(e, t, "--text-heading-sm", "fontSize"),
                                "--font-heading-sm-size": c(e, t, "--text-heading-md", "fontSize"),
                                "--font-heading-md-size": c(e, t, "--text-heading-lg", "fontSize"),
                                "--font-heading-lg-size": c(e, t, "--text-xl", "fontSize"),
                                "--font-heading-xl-size": c(e, t, "--text-2xl", "fontSize"),
                                "--font-heading-2xl-size": c(e, t, "--text-3xl", "fontSize"),
                                "--font-heading-3xl-size": c(e, t, "--text-4xl", "fontSize"),
                                "--font-text-xs-line-height": n("--text-xs--line-height"),
                                "--font-text-sm-line-height": n("--text-sm--line-height"),
                                "--font-text-md-line-height": n("--text-base--line-height"),
                                "--font-text-lg-line-height": n("--text-lg--line-height"),
                                "--font-heading-xs-line-height": "1.33",
                                "--font-heading-sm-line-height": "1.33",
                                "--font-heading-md-line-height": "1.2",
                                "--font-heading-lg-line-height": "1.2",
                                "--font-heading-xl-line-height": "1",
                                "--font-heading-2xl-line-height": "1",
                                "--font-heading-3xl-line-height": "1",
                                "--border-radius-xs": c(e, t, "--radius-xs", "borderRadius"),
                                "--border-radius-sm": c(e, t, "--radius-sm", "borderRadius"),
                                "--border-radius-md": c(e, t, "--radius-md", "borderRadius"),
                                "--border-radius-lg": c(e, t, "--radius-lg", "borderRadius"),
                                "--border-radius-xl": c(e, t, "--radius-xl", "borderRadius"),
                                "--border-radius-full": c(e, t, "--radius-full", "borderRadius"),
                                "--border-width-regular": "1px",
                                "--shadow-hairline": c(e, t, "--shadow-hairline", "boxShadow"),
                                "--shadow-sm": c(e, t, "--shadow-sm", "boxShadow"),
                                "--shadow-md": c(e, t, "--shadow-md", "boxShadow"),
                                "--shadow-lg": c(e, t, "--shadow-lg", "boxShadow")
                            }
                        } finally {
                            t.remove()
                        }
                    }()
            });

        function c(e, t, n, s) {
            let i = e.getPropertyValue(n).trim();
            if (0 === i.length) return;
            t.style[s] = `var(${n})`;
            let r = getComputedStyle(t)[s].trim();
            return 0 === r.length || r === `var(${n})` ? i : r
        }
        n.d(t, {}, {
            a: l
        })
    }),
    WQMB: (function(e, t, n) {
        n.d(t, {}, {
            a: async function() {
                return (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(877700), n.e(737555), n.e(271798), n.e(769702)]).then(n.bind(n, "UvKE"))).BusinessClaimFlowWithRecovery
            },
            b: async function() {
                return (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(877700), n.e(737555), n.e(271798), n.e(429646), n.e(604589)]).then(n.bind(n, "wVZg"))).BusinessClaimSurfaceWithRecovery
            }
        })
    }),
    v1r0: (function(e, t, n) {
        var s = n("ASxG");
        let i = s.strictObject({
                version: s.literal(1),
                delivery: s.enum(["none", "paid"])
            }),
            r = s.strictObject({
                version: s.literal(1),
                delivery: s.literal("free"),
                scope: s.literal("all_orders")
            }),
            a = s.strictObject({
                version: s.literal(1),
                delivery: s.literal("free"),
                scope: s.literal("minimum_order"),
                minimum_order_amount: s.string(),
                currency: s.string().nullable()
            }),
            o = s.strictObject({
                version: s.literal(1),
                returns: s.literal("none")
            }),
            l = s.strictObject({
                version: s.literal(1),
                returns: s.enum(["fees", "free"]),
                window_days: s.number().nullable()
            }),
            c = s.strictObject({
                version: s.literal(1),
                returns: s.enum(["fees", "free"]),
                window: s.literal("unlimited")
            }),
            d = s.union([i, r, a.extend({
                minimum_order_amount: s.string().regex(/^(?:\d+(?:\.\d*)?|\.\d+)$/).refine(e => Number.isFinite(Number(e)) && Number(e) > 0),
                currency: s.string().regex(/^[A-Z]{3}$/)
            })]),
            u = s.union([o, l.extend({
                window_days: s.number().int().positive()
            }), c]),
            m = s.union([s.strictObject({
                version: s.literal(1),
                delivery: s.null()
            }), i, r, s.strictObject({
                version: s.literal(1),
                delivery: s.literal("free"),
                scope: s.null()
            }), a]),
            h = s.union([s.strictObject({
                version: s.literal(1),
                returns: s.null()
            }), o, l, c]);
        n.d(t, {}, {
            a: m,
            b: d,
            c: [14, 30, 45, 90],
            d: h,
            e: u
        })
    }),
    uzkw: (function(e, t, n) {
        var s = n("Kwur");
        n.d(t, {}, {
            a: function(e) {
                let {
                    connectorId: t,
                    conversationId: n,
                    eventType: i,
                    expectedIdentity: r,
                    messageId: a,
                    pluginId: o,
                    productSurface: l,
                    suggestionMessageId: c
                } = e;
                s.Request.safePost("/unified_user_signals", {
                    expectedIdentity: r,
                    requestBody: {
                        signal_type: "ecosystem_suggestion_interaction",
                        product_surface: l,
                        signal_metadata: {},
                        user_metadata: {},
                        signal_detail: {
                            common_metadata: {
                                conversation_id: n,
                                message_id: a
                            },
                            ecosystem_suggestion_interaction: {
                                connector_id: t ?? "",
                                plugin_id: o,
                                suggestion_message_id: c,
                                event_type: i
                            }
                        }
                    }
                }).catch(() => void 0)
            }
        })
    })
};