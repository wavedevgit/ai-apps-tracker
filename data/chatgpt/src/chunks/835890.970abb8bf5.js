export const __rspack_esm_ids = [835890];
export const __webpack_modules__ = {
    RZnR: (function(e, t, a) {
        a.d(t, {}, {
            a: function(e) {
                if (null != e && (null != e.appMetadata && "firstPartyType" in e.appMetadata && "string" == typeof e.appMetadata.firstPartyType && "" !== e.appMetadata.firstPartyType.trim() || "DEFAULT_OAI_CATALOG" === e.distributionChannel || "ECOSYSTEM_DIRECTORY" === e.distributionChannel)) return e.name
            }
        })
    }),
    ojna: (function(e, t, a) {
        var n = a("ASxG"),
            o = a("KJ1J"),
            l = a("kqQk"),
            i = a("acxW"),
            s = a("xSzB");
        let r = n.object({
            success: n.literal(!0),
            automation: l.a
        });

        function c(e) {
            return (0, o.f)(e.server) && ("automations.create_local" === e.tool || "automations.update_local" === e.tool)
        }
        a.d(t, {}, {
            a: function(e) {
                if (!c(e.invocation) || !e.completed || !0 === e.isMcpAppWidgetSuperseded || e.result?.type !== "success" || (0, i.a)({
                        isCodexAppsServer: !0,
                        result: e.result
                    })) return null;
                let {
                    structuredContent: t
                } = (0, s.i)({
                    isCodexAppsServer: !0,
                    toolResult: e.result.raw
                }), a = r.safeParse(t);
                return a.success ? a.data.automation : null
            },
            b: c
        })
    }),
    HzCW: (function(e, t, a) {
        var n = a("ASxG");
        let o = n.object({
            navigationSource: n.enum(["scheduled_page", "notification", "conversation", "conversation_sidebar", "editor"])
        });
        a.d(t, {}, {
            a: function(e) {
                let t = o.safeParse(e);
                return t.success ? t.data.navigationSource : void 0
            }
        })
    }),
    SHXB: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            l = a("BolX"),
            i = a("Wf1j"),
            s = a("oyxz"),
            r = a("OusJ");
        a("fGpH");
        var c = a("Ro2M"),
            u = a("bN4H"),
            d = a("Bbed"),
            p = a("tSEg"),
            m = a("DuVB");
        (0, d.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(865959)]).then(a.bind(a, "n7q6"))).TeamAutomationCardActions), a.d(t, {}, {
            a: function(e) {
                let t, a, s, d, h, x, v, g = (0, o.c)(22),
                    {
                        automation: f
                    } = e,
                    b = (0, l.y)(p.a),
                    y = (0, i.a)(),
                    j = (0, l.x)(c.g, f.id);
                g[0] !== f || g[1] !== j || g[2] !== y ? (t = (0, m.a)(f, j, y), g[0] = f, g[1] = j, g[2] = y, g[3] = t) : t = g[3];
                let {
                    scheduleLabel: w
                } = t;
                g[4] !== f.title || g[5] !== j?.automation.title || g[6] !== j?.automation.title.trim ? (a = j?.automation.title.trim() || f.title, g[4] = f.title, g[5] = j?.automation.title, g[6] = j?.automation.title.trim, g[7] = a) : a = g[7];
                let k = a;
                return g[8] !== f.id || g[9] !== j || g[10] !== b || g[11] !== k ? (s = () => {
                    null == j && b.queryClient.invalidateQueries({
                        queryKey: ["cloud-automations"]
                    }), (0, u.openAutomationSidePanelTab)({
                        scope: b,
                        automationId: f.id,
                        title: k,
                        toggle: !0,
                        navigationSource: "conversation"
                    })
                }, d = null, g[8] = f.id, g[9] = j, g[10] = b, g[11] = k, g[12] = s, g[13] = d) : (s = g[12], d = g[13]), g[14] !== w || g[15] !== s || g[16] !== d || g[17] !== k ? (h = (0, n.jsx)(r.a, {
                    title: k,
                    subtitle: w,
                    ariaLabel: k,
                    canOpen: !0,
                    onOpen: s,
                    actions: d
                }), g[14] = w, g[15] = s, g[16] = d, g[17] = k, g[18] = h) : h = g[18], g[19] === Symbol.for("react.memo_cache_sentinel") ? (x = null, g[19] = x) : x = g[19], g[20] !== h ? (v = (0, n.jsxs)("div", {
                    className: "flex w-full min-w-0 flex-col gap-2 self-start",
                    children: [h, x]
                }), g[20] = h, g[21] = v) : v = g[21], v
            },
            b: function(e) {
                let t, a, l, i, r, c, u = (0, o.c)(16),
                    {
                        operation: d
                    } = e;
                return u[0] !== d ? (t = "pendingCreate" === d && (0, n.jsx)(s.a, {
                    id: "chatgpt.tpp.cot_v5.active_status.working",
                    defaultMessage: "Working"
                }), u[0] = d, u[1] = t) : t = u[1], u[2] !== d ? (a = "createGoal" === d && (0, n.jsx)(s.a, {
                    id: "chatgpt.tasks.conversation.tool_status.creating.goal",
                    defaultMessage: "Creating goal"
                }), u[2] = d, u[3] = a) : a = u[3], u[4] !== d ? (l = "create" === d && (0, n.jsx)(s.a, {
                    id: "chatgpt.tasks.conversation.tool_status.creating",
                    defaultMessage: "Creating scheduled task"
                }), u[4] = d, u[5] = l) : l = u[5], u[6] !== d ? (i = "update" === d && (0, n.jsx)(s.a, {
                    id: "chatgpt.tasks.conversation.tool_status.updating",
                    defaultMessage: "Updating scheduled task"
                }), u[6] = d, u[7] = i) : i = u[7], u[8] !== d ? (r = "list" === d && (0, n.jsx)(s.a, {
                    id: "chatgpt.tasks.conversation.tool_status.listing",
                    defaultMessage: "Listing scheduled tasks"
                }), u[8] = d, u[9] = r) : r = u[9], u[10] !== t || u[11] !== a || u[12] !== l || u[13] !== i || u[14] !== r ? (c = (0, n.jsxs)("div", {
                    className: "loading-shimmer-pure-text text-size-chat text-secondary select-none",
                    role: "status",
                    children: [t, a, l, i, r]
                }), u[10] = t, u[11] = a, u[12] = l, u[13] = i, u[14] = r, u[15] = c) : c = u[15], c
            }
        })
    }),
    VRzh: (function(e, t, a) {
        var n = a("QosV"),
            o = a("l8z4"),
            l = a("BolX"),
            i = a("zd8w"),
            s = a("jqIZ"),
            r = a("mgfw"),
            c = a("HzCW"),
            u = a("yGJW"),
            d = a("tSEg"),
            p = a("dQRk");
        let m = (0, l.v)(d.a, e => !1);
        a.d(t, {}, {
            a: function(e) {
                let t, a, h, x = (0, n.c)(8),
                    {
                        conversationId: v
                    } = e,
                    g = (0, l.y)(d.a),
                    {
                        key: f,
                        state: b
                    } = (0, s.Y)();
                x[0] !== b ? (t = (0, c.a)(b), x[0] = b, x[1] = t) : t = x[1];
                let y = t;
                return x[2] !== v || x[3] !== f || x[4] !== g || x[5] !== y ? (a = () => {
                    if ("chatgpt-thread" !== g.value.routeKind) return;
                    let e = g.value.conversationId;
                    return g.watch(t => {
                        let a = t.get(p.j, v);
                        if (null == a || a !== t.get(p.j, e)) return;
                        let n = {
                            locationKey: f,
                            conversationId: a
                        };
                        g.get(m, n) || (g.set(m, n, !0), (0, u.a)(g, o.c, {
                            type: "CHATGPT_TASKS_EVENT_TYPE_CONVERSATION_WITH_TASK_VIEWED",
                            conversationId: a,
                            openSource: null == y ? void 0 : r.c[y],
                            openDestination: "CHATGPT_TASKS_OPEN_DESTINATION_CONVERSATION"
                        }))
                    })
                }, h = [v, f, g, y], x[2] = v, x[3] = f, x[4] = g, x[5] = y, x[6] = a, x[7] = h) : (a = x[6], h = x[7]), (0, i.useEffect)(a, h), null
            }
        })
    }),
    DuVB: (function(e, t, a) {
        var n = a("odKs"),
            o = a("TZBk"),
            l = a("fGpH");
        a.d(t, {}, {
            a: function(e, t, a) {
                let i, s = null != t && "completed" === (0, l.p)(t.automation),
                    r = !s && (t?.automation.is_enabled ?? e.isEnabled),
                    c = null == t ? e.title : (0, l.h)(t);
                if (!r) return {
                    isEnabled: r,
                    nextRunAt: null,
                    scheduleLabel: s ? a.formatMessage(o.a.completed) : a.formatMessage(o.a.paused),
                    title: c
                };
                let u = t?.automation.schedule ?? e.schedule,
                    d = /^DTSTART[;:]/m.test(u) && !/^RRULE:/m.test(u) || /(?:^|[;:])COUNT=1(?:;|$)/m.test(u),
                    p = null == t ? e.nextRunAt ?? null : (0, l.j)(t);
                return i = d && t?.automation.timing_mode !== "flexible_schedule" ? (0, n.f)({
                    rrule: u,
                    nextRunAt: null == p ? null : Date.parse(p),
                    intl: a,
                    fallbackMessage: a.formatMessage({
                        id: "settings.automations.rruleSummaryFallback",
                        defaultMessage: "Custom schedule"
                    })
                }) : null != t ? (0, l.o)(t, a) : e.displaySchedule?.trim() || (0, n.f)({
                    rrule: (0, l.n)(e.schedule),
                    intl: a,
                    fallbackMessage: a.formatMessage({
                        id: "settings.automations.rruleSummaryFallback",
                        defaultMessage: "Custom schedule"
                    })
                }), {
                    isEnabled: r,
                    nextRunAt: p,
                    scheduleLabel: i,
                    title: c
                }
            }
        })
    }),
    bPZ9: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            l = a("BolX"),
            i = a("zd8w"),
            s = a("oyxz"),
            r = a("Wf1j"),
            c = a("jqIZ"),
            u = a("Ro2M"),
            d = a("bN4H"),
            p = a("bX52"),
            m = a("hdjZ"),
            h = a("tSEg"),
            x = a("cWHY"),
            v = a("VRzh"),
            g = a("DuVB");

        function f(e) {
            return (0, n.jsx)(b, {
                automation: e
            }, e.id)
        }
        let b = (0, i.memo)(function(e) {
            let t, a, i, s, c, m, x, v = (0, o.c)(19),
                {
                    automation: f
                } = e,
                b = (0, l.y)(h.a),
                y = (0, r.a)(),
                j = (0, l.x)(u.g, f.id);
            v[0] !== f || v[1] !== j || v[2] !== y ? (t = (0, g.a)(f, j, y), v[0] = f, v[1] = j, v[2] = y, v[3] = t) : t = v[3];
            let {
                scheduleLabel: w,
                title: k
            } = t;
            return v[4] !== f.id || v[5] !== b || v[6] !== k ? (a = () => {
                (0, d.openAutomationSidePanelTab)({
                    scope: b,
                    automationId: f.id,
                    title: k,
                    toggle: !0,
                    navigationSource: "conversation"
                })
            }, v[4] = f.id, v[5] = b, v[6] = k, v[7] = a) : a = v[7], v[8] !== k ? (i = (0, n.jsx)("span", {
                className: "truncate text-sm text-default",
                children: k
            }), v[8] = k, v[9] = i) : i = v[9], v[10] !== w ? (s = null == w || 0 === w.length ? null : (0, n.jsx)("span", {
                className: "truncate text-sm text-tertiary",
                children: w
            }), v[10] = w, v[11] = s) : s = v[11], v[12] !== i || v[13] !== s ? (c = (0, n.jsxs)("span", {
                className: "flex min-w-0 flex-col gap-0.5",
                children: [i, s]
            }), v[12] = i, v[13] = s, v[14] = c) : c = v[14], v[15] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, n.jsx)(p.a, {
                "aria-hidden": "true",
                className: "icon-sm shrink-0 text-tertiary"
            }), v[15] = m) : m = v[15], v[16] !== a || v[17] !== c ? (x = (0, n.jsx)("li", {
                className: "border-b border-subtle",
                "data-automation-card": !0,
                children: (0, n.jsxs)("button", {
                    type: "button",
                    className: "flex w-full min-w-0 cursor-interaction items-center justify-between gap-4 py-3 text-start hover:text-default",
                    onClick: a,
                    children: [c, m]
                })
            }), v[16] = a, v[17] = c, v[18] = x) : x = v[18], x
        });
        a.d(t, {}, {
            a: function(e) {
                let t, a, i, r, d, p, h, g, b, y, j = (0, o.c)(22),
                    {
                        automations: w,
                        conversationId: k
                    } = e,
                    C = (0, c._)(),
                    {
                        data: N,
                        isSuccess: M
                    } = (0, l.z)(u.k);
                j[0] !== w || j[1] !== N || j[2] !== M ? (t = M && N.isAvailable ? w.filter(e => {
                    let {
                        id: t
                    } = e;
                    return N.items.some(e => {
                        let {
                            automation: a
                        } = e;
                        return a.id === t
                    })
                }) : w, j[0] = w, j[1] = N, j[2] = M, j[3] = t) : t = j[3];
                let S = t;
                return j[4] !== S.length || j[5] !== k ? (a = null != k && S.length > 0 ? (0, n.jsx)(v.a, {
                    conversationId: k
                }) : null, j[4] = S.length, j[5] = k, j[6] = a) : a = j[6], j[7] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsx)(m.a, {
                    "aria-hidden": "true",
                    className: "icon-sm shrink-0"
                }), j[7] = i) : i = j[7], j[8] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsxs)("header", {
                    className: "flex items-center gap-2 border-b border-subtle px-4 py-3 text-sm text-secondary select-none",
                    children: [i, (0, n.jsx)("h2", {
                        className: "text-sm font-medium uppercase",
                        children: (0, n.jsx)(x.a, {
                            children: (0, n.jsx)(s.a, {
                                id: "automations.scheduled.destination.label",
                                defaultMessage: "Scheduled"
                            })
                        })
                    })]
                }), j[8] = r) : r = j[8], j[9] !== S ? (d = S.slice(0, 5).map(f), j[9] = S, j[10] = d) : d = j[10], j[11] !== C ? (p = () => {
                    C("/automations", {
                        state: {
                            navigationSource: "conversation"
                        }
                    })
                }, j[11] = C, j[12] = p) : p = j[12], j[13] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, n.jsx)(s.a, {
                    id: "automations.list.seeAllTasks",
                    defaultMessage: "See all tasks"
                }), j[13] = h) : h = j[13], j[14] !== p ? (g = (0, n.jsx)("li", {
                    children: (0, n.jsx)("button", {
                        type: "button",
                        className: "w-full cursor-interaction py-3 text-start text-sm text-tertiary select-none hover:text-default",
                        onClick: p,
                        children: h
                    })
                }), j[14] = p, j[15] = g) : g = j[15], j[16] !== d || j[17] !== g ? (b = (0, n.jsxs)("ul", {
                    className: "px-4",
                    children: [d, g]
                }), j[16] = d, j[17] = g, j[18] = b) : b = j[18], j[19] !== a || j[20] !== b ? (y = (0, n.jsxs)("section", {
                    className: "w-full max-w-sm overflow-hidden rounded-2xl border border-default bg-surface",
                    children: [a, r, b]
                }), j[19] = a, j[20] = b, j[21] = y) : y = j[21], y
            }
        })
    }),
    kRUe: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            l = a("on57"),
            i = a("IPUh"),
            s = a("zd8w"),
            r = a("Wf1j"),
            c = a("oyxz"),
            u = a("Sm6l"),
            d = a("HOLv"),
            p = a("bX52"),
            m = a("V8uZ"),
            h = a("Sgcz"),
            x = a("laNt"),
            v = a("RwYA");

        function g(e) {
            let t, a, c, d, v, g, b, y, j, w, k, C, N, M, S = (0, o.c)(43),
                {
                    className: I,
                    isExpandable: R,
                    review: T
                } = e,
                A = (0, r.a)(),
                [_, U] = (0, s.useState)(!1);
            S[0] !== A || S[1] !== T ? (t = (0, h.c)(A, T), S[0] = A, S[1] = T, S[2] = t) : t = S[2];
            let E = t;
            if (!(void 0 === R || R)) {
                let e, t;
                return S[3] !== I ? (e = (0, l.b)("min-w-0 truncate pt-1 text-codex-description/80", I), S[3] = I, S[4] = e) : e = S[4], S[5] !== e || S[6] !== E ? (t = (0, n.jsx)("div", {
                    className: e,
                    children: E
                }), S[5] = e, S[6] = E, S[7] = t) : t = S[7], t
            }
            let L = "denied" === T.status && "high" === T.riskLevel;
            S[8] !== A || S[9] !== T ? (a = (0, h.b)(A, T), S[8] = A, S[9] = T, S[10] = a) : a = S[10];
            let P = a;
            S[11] !== I ? (c = (0, l.b)("flex flex-col pt-1", I), S[11] = I, S[12] = c) : c = S[12], S[13] === Symbol.for("react.memo_cache_sentinel") ? (d = () => U(f), S[13] = d) : d = S[13];
            let O = "inProgress" === T.status,
                D = L ? "text-warning" : "text-codex-description/80 group-hover/automatic-approval-review:text-default";
            S[14] !== D ? (v = (0, l.b)("min-w-0 truncate", D), S[14] = D, S[15] = v) : v = S[15], S[16] !== O || S[17] !== v || S[18] !== E ? (g = (0, n.jsx)(x.a, {
                active: O,
                className: v,
                children: E
            }), S[16] = O, S[17] = v, S[18] = E, S[19] = g) : g = S[19];
            let B = _ && "rotate-90 opacity-100";
            S[20] !== B ? (b = (0, l.b)("icon-2xs shrink-0 text-tertiary transition-[opacity,transform] duration-basic opacity-0 group-hover/automatic-approval-review:opacity-100", B), S[20] = B, S[21] = b) : b = S[21], S[22] !== b ? (y = (0, n.jsx)(p.a, {
                className: b
            }), S[22] = b, S[23] = y) : y = S[23], S[24] !== _ || S[25] !== y || S[26] !== g ? (j = (0, n.jsxs)(u.a, {
                className: "group/automatic-approval-review inline-flex w-fit max-w-full gap-1.5 text-start",
                color: "ghostMuted",
                focusRing: "inset",
                size: "inline",
                onClick: d,
                "aria-expanded": _,
                children: [g, y]
            }), S[24] = _, S[25] = y, S[26] = g, S[27] = j) : j = S[27];
            let z = _ ? "auto" : 0,
                H = +!!_;
            S[28] !== z || S[29] !== H ? (w = {
                height: z,
                opacity: H
            }, S[28] = z, S[29] = H, S[30] = w) : w = S[30];
            let W = _ ? "auto" : "none";
            return S[31] !== W ? (k = {
                overflow: "hidden",
                pointerEvents: W
            }, S[31] = W, S[32] = k) : k = S[32], S[33] !== P ? (C = (0, n.jsx)("p", {
                className: "max-w-[80ch] pt-1 text-size-chat leading-relaxed whitespace-pre-wrap text-text/60",
                children: P
            }), S[33] = P, S[34] = C) : C = S[34], S[35] !== w || S[36] !== k || S[37] !== C ? (N = (0, n.jsx)(i.a.div, {
                initial: !1,
                animate: w,
                transition: m.a,
                style: k,
                children: C
            }), S[35] = w, S[36] = k, S[37] = C, S[38] = N) : N = S[38], S[39] !== j || S[40] !== N || S[41] !== c ? (M = (0, n.jsxs)("div", {
                className: c,
                children: [j, N]
            }), S[39] = j, S[40] = N, S[41] = c, S[42] = M) : M = S[42], M
        }

        function f(e) {
            return !e
        }

        function b(e) {
            let t, a, l = (0, o.c)(9),
                {
                    className: i,
                    isExpandable: s,
                    reviews: r
                } = e;
            if (l[0] !== i || l[1] !== s || l[2] !== r) {
                let e;
                l[4] !== i || l[5] !== s ? (e = e => (0, n.jsx)(g, {
                    className: i,
                    isExpandable: s,
                    review: e
                }, e.id), l[4] = i, l[5] = s, l[6] = e) : e = l[6], t = r.map(e), l[0] = i, l[1] = s, l[2] = r, l[3] = t
            } else t = l[3];
            return l[7] !== t ? (a = (0, n.jsx)(n.Fragment, {
                children: t
            }), l[7] = t, l[8] = a) : a = l[8], a
        }

        function y(e) {
            let t, a, l = (0, o.c)(4),
                {
                    reviews: i
                } = e;
            l[0] !== i ? (t = i.some(j), l[0] = i, l[1] = t) : t = l[1];
            let s = t;
            return l[2] !== s ? (a = (0, n.jsx)("p", {
                className: "max-w-[80ch] pt-1 text-size-chat leading-relaxed text-text/60",
                children: s ? (0, n.jsx)(c.a, {
                    id: "localConversation.automaticApprovalReview.explicitAuthorizationHighRisk",
                    defaultMessage: "Requires explicit authorization because this action is considered high risk"
                }) : (0, n.jsx)(c.a, {
                    id: "localConversation.automaticApprovalReview.explicitAuthorization",
                    defaultMessage: "Requires explicit authorization"
                })
            }), l[2] = s, l[3] = a) : a = l[3], a
        }

        function j(e) {
            return "denied" === e.status && "high" === e.riskLevel
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, i = (0, o.c)(5),
                    {
                        className: s,
                        tone: r
                    } = e,
                    c = "warning" === (void 0 === r ? "default" : r) ? "text-warning" : "text-tertiary";
                return i[0] !== s || i[1] !== c ? (t = (0, l.b)("shrink-0", c, s), i[0] = s, i[1] = c, i[2] = t) : t = i[2], i[3] !== t ? (a = (0, n.jsx)(d.a, {
                    className: t,
                    asset: v.a,
                    "aria-hidden": !0
                }), i[3] = t, i[4] = a) : a = i[4], a
            },
            b: y,
            c: g,
            d: b,
            e: function(e) {
                let t, a = (0, o.c)(4),
                    {
                        isDeclined: l,
                        reviews: i
                    } = e;
                if (!l) {
                    let e;
                    return a[0] !== i ? (e = (0, n.jsx)(b, {
                        reviews: i
                    }), a[0] = i, a[1] = e) : e = a[1], e
                }
                return a[2] !== i ? (t = (0, n.jsx)(y, {
                    reviews: i
                }), a[2] = i, a[3] = t) : t = a[3], t
            }
        })
    }),
    MAIj: (function(e, t, a) {
        var n = a("BolX"),
            o = a("utkD"),
            l = a("OWtl");
        let i = (0, n.q)(l.a, e => (0, o.c)(e)),
            s = (0, n.q)(l.a, e => ({
                ...(0, o.d)({
                    order: "usage"
                }),
                enabled: null != e,
                select: t => t.find(t => t.displayName.toLowerCase() === e?.toLowerCase()) ?? null
            }));
        a.d(t, {}, {
            a: i,
            b: function(e) {
                let {
                    data: t
                } = (0, n.x)(i, e?.kind === "appId" ? e.appId : null), {
                    data: a
                } = (0, n.x)(s, e?.kind === "displayName" ? e.displayName : null);
                return t ?? a ?? null
            }
        })
    }),
    mRLe: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV");
        a.d(t, {}, {
            a: function(e) {
                let t, a = (0, o.c)(2),
                    {
                        variant: l
                    } = e,
                    i = "activity" === (void 0 === l ? "item" : l) ? "var(--conversation-activity-gap)" : "var(--conversation-item-gap, 16px)";
                return a[0] !== i ? (t = (0, n.jsx)("div", {
                    "aria-hidden": !0,
                    className: "w-full shrink-0",
                    style: {
                        height: i
                    }
                }), a[0] = i, a[1] = t) : t = a[1], t
            }
        })
    }),
    fXpx: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            l = a("BolX"),
            i = a("oyxz"),
            s = a("Sm6l"),
            r = a("igP5");

        function c(e) {
            let t, a = (0, o.c)(4),
                {
                    isError: l,
                    onRetry: r
                } = e;
            if (l) {
                let e, t;
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(i.a, {
                    id: "localConversation.commandOutput.retry",
                    defaultMessage: "Retry loading output"
                }), a[0] = e) : e = a[0], a[1] !== r ? (t = (0, n.jsx)(s.a, {
                    color: "ghost",
                    size: "compact",
                    onClick: r,
                    children: e
                }), a[1] = r, a[2] = t) : t = a[2], t
            }
            return a[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)("span", {
                role: "status",
                className: "text-size-chat text-tertiary",
                children: (0, n.jsx)(i.a, {
                    id: "localConversation.commandOutput.loading",
                    defaultMessage: "Loading output…"
                })
            }), a[3] = t) : t = a[3], t
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, i, s, u, d = (0, o.c)(12);
                d[0] !== e ? ({
                    children: t,
                    quiet: i,
                    ...a
                } = e, d[0] = e, d[1] = t, d[2] = a, d[3] = i) : (t = d[1], a = d[2], i = d[3]);
                let p = void 0 !== i && i,
                    {
                        data: m,
                        isError: h,
                        refetch: x
                    } = (0, l.x)(r.a, a);
                if (null != m) {
                    let e;
                    return d[4] !== t || d[5] !== m ? (e = t?.(m) ?? null, d[4] = t, d[5] = m, d[6] = e) : e = d[6], e
                }
                return p ? null : (d[7] !== x ? (s = () => void x(), d[7] = x, d[8] = s) : s = d[8], d[9] !== h || d[10] !== s ? (u = (0, n.jsx)(c, {
                    isError: h,
                    onRetry: s
                }), d[9] = h, d[10] = s, d[11] = u) : u = d[11], u)
            },
            b: c
        })
    }),
    z0Na: (function(e, t, a) {
        var n = a("QosV"),
            o = a("T0Rc"),
            l = a("BolX"),
            i = a("I07G"),
            s = a("sM3V"),
            r = a("KJ1J"),
            c = a("HUHI"),
            u = a("rO8L"),
            d = a("NJrC"),
            p = a("W10I"),
            m = a("EEop"),
            h = a("cLdu"),
            x = a("ueue"),
            v = a("whdX"),
            g = a("tSEg"),
            f = a("KU8M"),
            b = a("LF5P"),
            y = a("MdwM"),
            j = a("Hkqr"),
            w = a("acxW");
        a.d(t, {}, {
            a: function(e) {
                let t, a, o, c, u, d, m, h, x, v, g = (0, n.c)(50),
                    {
                        item: b,
                        hostId: y,
                        conversationId: j,
                        fallback: k,
                        enabled: C,
                        catalogEnabled: N
                    } = e,
                    M = void 0 === C || C,
                    S = void 0 === N ? M : N;
                g[0] !== b.invocation.server || g[1] !== b.result ? (t = (0, r.f)(b.invocation.server), a = (0, w.a)({
                    isCodexAppsServer: t,
                    result: b.result
                }), g[0] = b.invocation.server, g[1] = b.result, g[2] = t, g[3] = a) : (t = g[2], a = g[3]);
                let I = a,
                    R = b.result?.type !== "success" || I ? null : b.result.raw,
                    T = R ?? k?.toolResult ?? null;
                g[4] !== j || g[5] !== y ? (o = {
                    hostId: y,
                    conversationId: j
                }, g[4] = j, g[5] = y, g[6] = o) : o = g[6];
                let A = (0, l.x)(s.b, o);
                g[7] !== y || g[8] !== b.appContext || g[9] !== b.invocation.server || g[10] !== b.invocation.tool || g[11] !== b.invocationResourceUri || g[12] !== A ? (c = {
                    appContext: b.appContext,
                    hostId: y,
                    invocationResourceUri: b.invocationResourceUri,
                    server: b.invocation.server,
                    threadId: A,
                    tool: b.invocation.tool
                }, g[7] = y, g[8] = b.appContext, g[9] = b.invocation.server, g[10] = b.invocation.tool, g[11] = b.invocationResourceUri, g[12] = A, g[13] = c) : c = g[13];
                let _ = c;
                g[14] !== S ? (u = {
                    enabled: S
                }, g[14] = S, g[15] = u) : u = g[15];
                let U = (0, l.x)(f.a, _, u);
                g[16] !== U.data || g[17] !== b.invocation.server || g[18] !== b.invocation.tool || g[19] !== b.invocationResourceUri ? (d = (0, p.c)({
                    invocationResourceUri: b.invocationResourceUri,
                    mcpServerStatuses: U.data,
                    server: b.invocation.server,
                    tool: b.invocation.tool
                })?.resourceUri, g[16] = U.data, g[17] = b.invocation.server, g[18] = b.invocation.tool, g[19] = b.invocationResourceUri, g[20] = d) : d = g[20];
                let E = d;
                g[21] !== U.isPending || g[22] !== j || g[23] !== E || g[24] !== T?._meta || g[25] !== k?.resourceUri || g[26] !== b.appContext?.resourceUri || g[27] !== b.mcpAppResourceUri ? (m = j.startsWith("chatgpt:") ? E : b.appContext?.resourceUri ?? E ?? (U.isPending ? k?.resourceUri : void 0) ?? (0, i.Jg)(T?._meta) ?? b.mcpAppResourceUri, g[21] = U.isPending, g[22] = j, g[23] = E, g[24] = T?._meta, g[25] = k?.resourceUri, g[26] = b.appContext?.resourceUri, g[27] = b.mcpAppResourceUri, g[28] = m) : m = g[28];
                let L = m,
                    P = null != L && U.isPending && b.appContext?.resourceUri == null && null == E && k?.resourceUri == null,
                    O = (0, l.x)(M && t ? f.b : null, _);
                I ? h = "error" : b.completed && null == b.result && null == T && (h = "cancelled");
                let D = L ?? k?.resourceUri ?? null,
                    B = t && null != b.appContext ? b.callId : null,
                    z = h;
                return g[29] !== U.data || g[30] !== b.appContext || g[31] !== b.invocation.server || g[32] !== b.invocation.tool || g[33] !== b.invocationResourceUri ? (x = (0, p.b)({
                    appContext: b.appContext,
                    invocationResourceUri: b.invocationResourceUri,
                    mcpServerStatuses: U.data,
                    server: b.invocation.server,
                    tool: b.invocation.tool
                }), g[29] = U.data, g[30] = b.appContext, g[31] = b.invocation.server, g[32] = b.invocation.tool, g[33] = b.invocationResourceUri, g[34] = x) : x = g[34], g[35] !== U || g[36] !== j || g[37] !== T || g[38] !== y || g[39] !== t || g[40] !== P || g[41] !== b || g[42] !== R || g[43] !== B || g[44] !== x || g[45] !== D || g[46] !== I || g[47] !== h || g[48] !== O ? (v = {
                    item: b,
                    hostId: y,
                    conversationId: j,
                    catalog: U,
                    resourceUri: D,
                    isResourceUriPending: P,
                    toolScope: O,
                    isCodexAppsToolCall: t,
                    originCallId: B,
                    successfulToolResult: R,
                    displayedSuccessfulToolResult: T,
                    toolCallFailed: I,
                    toolCallStatus: z,
                    toolDefinition: x
                }, g[35] = U, g[36] = j, g[37] = T, g[38] = y, g[39] = t, g[40] = P, g[41] = b, g[42] = R, g[43] = B, g[44] = x, g[45] = D, g[46] = I, g[47] = h, g[48] = O, g[49] = v) : v = g[49], v
            },
            b: function(e, t) {
                let a, o, l, i, s = (0, n.c)(25),
                    {
                        item: r,
                        hostId: c,
                        conversationId: u,
                        catalog: p,
                        resourceUri: m,
                        isResourceUriPending: h,
                        toolScope: x,
                        originCallId: g
                    } = e,
                    f = x?.connectorId ?? null,
                    b = x?.kind === "target" ? x : null,
                    y = m ?? null,
                    j = t && !h;
                s[0] !== u || s[1] !== c || s[2] !== r.appContext || s[3] !== r.completed || s[4] !== r.invocation.server || s[5] !== g || s[6] !== f || s[7] !== b || s[8] !== y || s[9] !== j ? (a = {
                    appContext: r.appContext,
                    connectorId: f,
                    connectorTarget: b,
                    hostId: c,
                    originCallId: g,
                    callCompleted: r.completed,
                    server: r.invocation.server,
                    threadId: u,
                    uri: y,
                    enabled: j
                }, s[0] = u, s[1] = c, s[2] = r.appContext, s[3] = r.completed, s[4] = r.invocation.server, s[5] = g, s[6] = f, s[7] = b, s[8] = y, s[9] = j, s[10] = a) : a = s[10];
                let w = (0, v.f)(a),
                    k = h ? void 0 : w.data;
                s[11] !== k ? (o = (0, d.c)(k), s[11] = k, s[12] = o) : o = s[12];
                let C = o,
                    {
                        error: N,
                        isPending: M,
                        isFetching: S
                    } = h || e.isCodexAppsToolCall && null == x ? p : w;
                return s[13] !== N || s[14] !== S || s[15] !== M || s[16] !== k?.resource ? (l = k?.resource != null ? {
                    error: null,
                    isLoading: !1
                } : {
                    error: S ? null : N,
                    isLoading: S || M && null == N
                }, s[13] = N, s[14] = S, s[15] = M, s[16] = k?.resource, s[17] = l) : l = s[17], s[18] !== w.access || s[19] !== w.refetch || s[20] !== w.refetchResource || s[21] !== C || s[22] !== k || s[23] !== l ? (i = {
                    resource: k,
                    renderData: C,
                    access: w.access,
                    refetch: w.refetch,
                    refetchResource: w.refetchResource,
                    state: l
                }, s[18] = w.access, s[19] = w.refetch, s[20] = w.refetchResource, s[21] = C, s[22] = k, s[23] = l, s[24] = i) : i = s[24], i
            },
            c: function(e) {
                let t, a, i, s, d, p, v, f, w, k, C, N, M, S = (0, n.c)(50),
                    {
                        item: I,
                        hostId: R,
                        appInfoOverride: T,
                        enabled: A,
                        retryOnMount: _
                    } = e,
                    U = void 0 === A || A,
                    E = (0, l.y)(g.a);
                S[0] !== T || S[1] !== U || S[2] !== I ? (t = U && null == T && (0, b.g)(I), S[0] = T, S[1] = U, S[2] = I, S[3] = t) : t = S[3], S[4] !== R || S[5] !== t ? (a = {
                    enabled: t,
                    hostId: R
                }, S[4] = R, S[5] = t, S[6] = a) : a = S[6];
                let {
                    data: L
                } = (0, c.m)(a);
                S[7] !== T || S[8] !== L || S[9] !== I.appContext || S[10] !== I.functionName || S[11] !== I.invocation.server || S[12] !== I.invocation.tool ? (i = T ?? (null == L ? null : (0, j.b)({
                    appContext: I.appContext,
                    apps: L,
                    functionName: I.functionName,
                    serverName: I.invocation.server,
                    toolName: I.invocation.tool
                })), S[7] = T, S[8] = L, S[9] = I.appContext, S[10] = I.functionName, S[11] = I.invocation.server, S[12] = I.invocation.tool, S[13] = i) : i = S[13];
                let P = i;
                S[14] !== U || S[15] !== I.invocation.server || S[16] !== I.pluginId ? (s = U && null != I.pluginId && !(0, r.f)(I.invocation.server), S[14] = U, S[15] = I.invocation.server, S[16] = I.pluginId, S[17] = s) : s = S[17], S[18] !== R || S[19] !== s ? (d = {
                    enabled: s,
                    hostId: R
                }, S[18] = R, S[19] = s, S[20] = d) : d = S[20];
                let O = (0, u.a)(d);
                S[21] !== R || S[22] !== O ? (p = {
                    enabled: O,
                    hostId: R,
                    roots: void 0,
                    resolveActiveRoots: !0
                }, S[21] = R, S[22] = O, S[23] = p) : p = S[23];
                let {
                    data: D
                } = (0, h.l)(p);
                S[24] !== D || S[25] !== I.pluginId ? (v = D?.find(e => {
                    let {
                        plugin: t
                    } = e;
                    return t.id === I.pluginId || null != t.remotePluginId && t.remotePluginId === I.pluginId
                }), S[24] = D, S[25] = I.pluginId, S[26] = v) : v = S[26];
                let B = v,
                    z = O && null != D && null != I.pluginId && null == B;
                S[27] !== R || S[28] !== I.pluginId || S[29] !== E.query || S[30] !== z ? (f = E.query.getOptions(m.l, (0, m.a)({
                    hostId: R,
                    pluginId: z ? I.pluginId ?? null : null
                })), S[27] = R, S[28] = I.pluginId, S[29] = E.query, S[30] = z, S[31] = f) : f = S[31];
                let H = f,
                    W = z && H.enabled,
                    q = _ ?? H.retryOnMount;
                S[32] !== H || S[33] !== W || S[34] !== q ? (w = {
                    ...H,
                    enabled: W,
                    retry: !1,
                    retryOnMount: q
                }, S[32] = H, S[33] = W, S[34] = q, S[35] = w) : w = S[35];
                let {
                    data: J
                } = (0, o.a)(w);
                S[36] !== J ? (k = null == J ? null : (0, x.c)(J), S[36] = J, S[37] = k) : k = S[37];
                let G = k,
                    V = B ?? G,
                    F = G?.plugin.id ?? B?.plugin.id ?? I.pluginId;
                return S[38] !== D || S[39] !== G || S[40] !== z ? (C = z && null != G ? [G] : D ?? [], S[38] = D, S[39] = G, S[40] = z, S[41] = C) : C = S[41], S[42] !== I.invocation.server || S[43] !== F || S[44] !== C ? (N = (0, y.a)({
                    pluginId: F,
                    plugins: C,
                    serverName: I.invocation.server
                }), S[42] = I.invocation.server, S[43] = F, S[44] = C, S[45] = N) : N = S[45], S[46] !== P || S[47] !== V || S[48] !== N ? (M = {
                    matchingApp: P,
                    plugin: V,
                    pluginIcon: N
                }, S[46] = P, S[47] = V, S[48] = N, S[49] = M) : M = S[49], M
            }
        })
    }),
    o1Ns: (function(e, t, a) {
        var n = a("SZCv"),
            o = a.n(n),
            l = a("BolX"),
            i = a("I07G"),
            s = a("KJ1J"),
            r = a("ojna"),
            c = a("qZWE"),
            u = a("Qg4G"),
            d = a("tSEg"),
            p = a("acxW");
        let m = (0, l.d)(d.a, (e, t) => {
            let {
                get: a
            } = t;
            return new Map(e.map(e => {
                let t = (0, i.bf)(e),
                    n = a(c.h, t);
                return [e, {
                    sourceId: a(c.t, t),
                    hasSuccessfulToolResult: n?.content.toolCallStatus == null && n?.content.toolResult != null
                }]
            }))
        }, {
            isEqual: o()
        });
        a.d(t, {}, {
            a: function(e) {
                let {
                    item: t,
                    hostId: a,
                    retainedState: n
                } = e, o = !(0, r.b)(t.invocation) && !(0, u.b)(t.invocation, a) && !0 !== t.isMcpAppWidgetSuperseded && (n?.sourceId == null || n.sourceId === (0, i.bf)(t.callId));
                return {
                    isEligible: o,
                    isRenderable: o && !(0, p.a)({
                        isCodexAppsServer: (0, s.f)(t.invocation.server),
                        result: t.result
                    }) && (!t.completed || null != t.result || n?.hasSuccessfulToolResult === !0)
                }
            },
            b: m
        })
    }),
    MdwM: (function(e, t, a) {
        var n = a("Haiv"),
            o = a("KJ1J");
        a.d(t, {}, {
            a: function(e) {
                let {
                    pluginId: t,
                    plugins: a,
                    serverName: l
                } = e;
                if (null == t || (0, o.f)(l)) return null;
                let i = a.find(e => e.plugin.id === t) ?? null;
                return null == i ? null : {
                    alt: (0, n.a)(i),
                    knownAppId: i.plugin.name,
                    logoUrl: i.composerIconPath ?? i.logoPath,
                    logoDarkUrl: i.logoDarkPath
                }
            }
        })
    }),
    BGqp: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            l = a("slpy"),
            i = a("on57"),
            s = a("iodE"),
            r = a("AQaI"),
            c = a.n(r),
            u = a("BolX"),
            d = a("I07G"),
            p = a("OZum"),
            m = a("zd8w"),
            h = a("Wf1j"),
            x = a("oyxz"),
            v = a("mnR8"),
            g = a("ojna"),
            f = a("USdi"),
            b = a("khkh"),
            y = a("SHXB"),
            j = a("bPZ9"),
            w = a("OOaz"),
            k = a("Zm2g"),
            C = a("FvYa"),
            N = a("A7Ss"),
            M = a("Sm6l"),
            S = a("la9L"),
            I = a("rmk3"),
            R = a("JNtf"),
            T = a("mUDD"),
            A = a("KxMp"),
            _ = a("HOLv"),
            U = a("Wdu7"),
            E = a("wwME"),
            L = a("jByN"),
            P = a("YeQK"),
            O = a("oKu4"),
            D = a("FWVQ"),
            B = a("IN8o"),
            z = a("HwRo"),
            H = a("C3P5"),
            W = a("aENG"),
            q = a("Cv9y"),
            J = a("EAcR"),
            G = a("NJrC"),
            V = a("EDsV"),
            F = a("geS6"),
            K = a("qwxA"),
            Q = a("qZWE"),
            X = a("E2ja"),
            Z = a("KLqe"),
            $ = a("Sd8U"),
            Y = a("tSEg"),
            ee = a("hZax"),
            et = a("WFY2"),
            ea = a("S7UD"),
            en = a("MFk9"),
            eo = a("K5Kt"),
            el = a("HBzQ"),
            ei = a("JGoU"),
            es = a("cKhh"),
            er = a("kRUe"),
            ec = a("GmdE"),
            eu = a("t7eZ"),
            ed = a("LF5P"),
            ep = a("ZiDw"),
            em = a("ltPT"),
            eh = a("SfaR"),
            ex = a("DYB3"),
            ev = a("MAIj"),
            eg = a("mRLe"),
            ef = a("fXpx"),
            eb = a("LkKu"),
            ey = a("z0Na"),
            ej = a("o62A"),
            ew = a("o1Ns"),
            ek = a("alO6"),
            eC = a("laNt"),
            eN = a("vPpU"),
            eM = a("PoML"),
            eS = a("sm3O"),
            eI = a("jzlz");

        function eR(e) {
            return "text" !== e.type
        }

        function eT(e) {
            let t, a, l, i, s, r, c, u, d, m, h = (0, o.c)(35),
                {
                    call: v,
                    fallbackPageUrl: g,
                    loadRemoteLogos: f
                } = e,
                b = null == v.sourceHostname ? g : `https://${v.sourceHostname}`,
                y = "invokeTool" === v.kind ? v.inputJson : void 0,
                j = "invokeTool" === v.kind && !0 === v.inputTruncated;
            h[0] !== f || h[1] !== b ? (t = null == b ? (0, n.jsx)(_.a, {
                className: "shrink-0 text-text/60",
                asset: eI.a
            }) : (0, n.jsx)(A.a, {
                className: "icon-xs shrink-0 text-text/60",
                href: b,
                loadRemote: f
            }), h[0] = f, h[1] = b, h[2] = t) : t = h[2], h[3] !== v.name || h[4] !== v.title ? (a = v.title ?? (0, p.a)(v.name, {
                style: "sentence"
            }), h[3] = v.name, h[4] = v.title, h[5] = a) : a = h[5], h[6] !== v.kind || h[7] !== a ? (l = (0, n.jsx)(x.a, {
                id: "codex.mcpTool.webMcpActivity.completed",
                defaultMessage: "{kind, select, listTools {Listed website tools} other {{toolName}}}",
                values: {
                    kind: v.kind,
                    toolName: a
                }
            }), h[6] = v.kind, h[7] = a, h[8] = l) : l = h[8], h[9] !== y || h[10] !== j ? (i = null == y || j ? y : function(e) {
                try {
                    return JSON.parse(e)
                } catch {
                    return e
                }
            }(y), h[9] = y, h[10] = j, h[11] = i) : i = h[11];
            let w = !!j || void 0;
            h[12] !== v.description || h[13] !== v.name || h[14] !== v.readOnlyHint || h[15] !== v.sourceHostname || h[16] !== v.title || h[17] !== i || h[18] !== w ? (s = eA({
                name: v.name,
                title: v.title,
                description: v.description,
                website: v.sourceHostname,
                readOnlyHint: v.readOnlyHint,
                input: i,
                inputTruncated: w
            }, 2), h[12] = v.description, h[13] = v.name, h[14] = v.readOnlyHint, h[15] = v.sourceHostname, h[16] = v.title, h[17] = i, h[18] = w, h[19] = s) : s = h[19];
            let k = j ? "true" : "false";
            return h[20] !== k ? (r = (0, n.jsx)(x.a, {
                id: "codex.localConversation.webMcpTools.toolLabel",
                defaultMessage: "{truncated, select, true {Tool (input truncated)} other {Tool}}",
                values: {
                    truncated: k
                }
            }), h[20] = k, h[21] = r) : r = h[21], h[22] !== s || h[23] !== r ? (c = (0, n.jsx)(S.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: s,
                language: "json",
                showStickyRightContent: !1,
                title: r
            }), h[22] = s, h[23] = r, h[24] = c) : c = h[24], h[25] !== v.outputJson || h[26] !== v.outputTruncated ? (u = null == v.outputJson ? null : (0, n.jsx)(S.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: v.outputTruncated ? v.outputJson : function(e) {
                    try {
                        return eA(JSON.parse(e), 2)
                    } catch {
                        return e
                    }
                }(v.outputJson),
                language: "json",
                showStickyRightContent: !1,
                title: (0, n.jsx)(x.a, {
                    id: "codex.localConversation.webMcpTools.resultLabel",
                    defaultMessage: "{truncated, select, true {Result (truncated)} other {Result}}",
                    values: {
                        truncated: v.outputTruncated ? "true" : "false"
                    }
                })
            }), h[25] = v.outputJson, h[26] = v.outputTruncated, h[27] = u) : u = h[27], h[28] !== u || h[29] !== c ? (d = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2",
                children: [c, u]
            }), h[28] = u, h[29] = c, h[30] = d) : d = h[30], h[31] !== t || h[32] !== d || h[33] !== l ? (m = (0, n.jsx)(es.a, {
                icon: t,
                status: "completed",
                summary: l,
                children: d
            }), h[31] = t, h[32] = d, h[33] = l, h[34] = m) : m = h[34], m
        }

        function eA(e, t) {
            try {
                return JSON.stringify(e, null, t) ?? "null"
            } catch {
                return et.a.debug("Failed to stringify MCP tool call payload", {
                    safe: {
                        value: e
                    },
                    sensitive: {}
                }), ""
            }
        }

        function e_(e) {
            let t = (0, o.c)(73),
                {
                    block: a,
                    conversationId: l,
                    hostId: s
                } = e,
                r = (0, u.y)($.a),
                c = (0, h.a)();
            switch (a.type) {
                case "image": {
                    let e, o, i, u, d, p, m;
                    t[0] !== a.annotations || t[1] !== c ? (e = eE(a.annotations, c), t[0] = a.annotations, t[1] = c, t[2] = e) : e = t[2];
                    let h = e,
                        x = `data:${a.mimeType};base64,${a.data}`;
                    t[3] !== c ? (o = c.formatMessage({
                        id: "codex.mcpTool.contentBlock.imageAlt",
                        defaultMessage: "Image returned by tool"
                    }), t[3] = c, t[4] = o) : o = t[4];
                    let v = o;
                    t[5] !== l || t[6] !== s || t[7] !== v || t[8] !== x || t[9] !== c || t[10] !== r ? (i = () => (0, P.getGeneratedImageContextMenuItems)(r, {
                        chatGptConversationId: l.startsWith("chatgpt:") ? (0, w.d)(l.slice(8)) : void 0,
                        displaySrc: x,
                        hostId: s,
                        image: {
                            kind: "generic",
                            src: x,
                            alt: v
                        },
                        intl: c
                    }), t[5] = l, t[6] = s, t[7] = v, t[8] = x, t[9] = c, t[10] = r, t[11] = i) : i = t[11], t[12] !== v || t[13] !== x ? (u = (0, n.jsx)("img", {
                        className: "max-h-48 w-max max-w-full gap-0.5 rounded-md object-contain",
                        alt: v,
                        src: x
                    }), t[12] = v, t[13] = x, t[14] = u) : u = t[14], t[15] !== i || t[16] !== u ? (d = (0, n.jsx)(I.a, {
                        getItems: i,
                        children: u
                    }), t[15] = i, t[16] = u, t[17] = d) : d = t[17];
                    let g = d;
                    if (null == h) return g;
                    return t[18] !== h ? (p = (0, n.jsx)("p", {
                        className: "text-size-chat whitespace-pre-wrap text-codex-description/80",
                        children: h
                    }), t[18] = h, t[19] = p) : p = t[19], t[20] !== g || t[21] !== p ? (m = (0, n.jsxs)("div", {
                        className: "flex flex-col gap-0.5",
                        children: [g, p]
                    }), t[20] = g, t[21] = p, t[22] = m) : m = t[22], m
                }
                case "audio": {
                    let e, o, l, i;
                    t[23] !== a.annotations || t[24] !== c ? (e = eE(a.annotations, c), t[23] = a.annotations, t[24] = c, t[25] = e) : e = t[25];
                    let s = e;
                    return t[26] !== a.data || t[27] !== a.mimeType ? (o = (0, n.jsx)(eU, {
                        data: a.data,
                        mimeType: a.mimeType
                    }), t[26] = a.data, t[27] = a.mimeType, t[28] = o) : o = t[28], t[29] !== s ? (l = null != s ? (0, n.jsx)("p", {
                        className: "text-size-chat whitespace-pre-wrap text-codex-description/80",
                        children: s
                    }) : null, t[29] = s, t[30] = l) : l = t[30], t[31] !== o || t[32] !== l ? (i = (0, n.jsxs)("div", {
                        className: "flex flex-col gap-0.5",
                        children: [o, l]
                    }), t[31] = o, t[32] = l, t[33] = i) : i = t[33], i
                }
                case "resource_link": {
                    let e, o, l, i;
                    t[34] !== a.annotations || t[35] !== c ? (e = eE(a.annotations, c), t[34] = a.annotations, t[35] = c, t[36] = e) : e = t[36];
                    let s = e,
                        r = a.title ?? a.name ?? a.uri;
                    return t[37] !== r ? (o = (0, n.jsx)("div", {
                        className: "break-words text-codex-description/80",
                        children: (0, n.jsx)(x.a, {
                            id: "codex.mcpTool.resourceLink.reading",
                            defaultMessage: "Read {resourceLinkName}",
                            values: {
                                resourceLinkName: r
                            }
                        })
                    }), t[37] = r, t[38] = o) : o = t[38], t[39] !== s ? (l = null != s ? (0, n.jsx)("div", {
                        className: "break-words whitespace-pre-wrap text-codex-description/80",
                        children: s
                    }) : null, t[39] = s, t[40] = l) : l = t[40], t[41] !== o || t[42] !== l ? (i = (0, n.jsxs)("div", {
                        className: "flex flex-col gap-0.5 text-size-chat",
                        children: [o, l]
                    }), t[41] = o, t[42] = l, t[43] = i) : i = t[43], i
                }
                case "embedded_resource": {
                    let e, o, l, i, s, r, c, u = a.resource.text ?? a.resource.blob ?? "",
                        d = "" !== u;
                    t[44] !== a.resource.annotations ? (e = eL(a.resource.annotations), t[44] = a.resource.annotations, t[45] = e) : e = t[45];
                    let p = e;
                    return t[46] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, n.jsx)("span", {
                        className: "font-medium text-default",
                        children: (0, n.jsx)(x.a, {
                            id: "codex.mcpTool.embeddedResource.uriLabel",
                            defaultMessage: "URI"
                        })
                    }), t[46] = o) : o = t[46], t[47] !== a.resource.uri ? (l = (0, n.jsxs)("div", {
                        className: "flex gap-1",
                        children: [o, (0, n.jsx)("span", {
                            className: "break-all",
                            children: a.resource.uri
                        })]
                    }), t[47] = a.resource.uri, t[48] = l) : l = t[48], t[49] !== a.resource.mimeType ? (i = null != a.resource.mimeType ? (0, n.jsxs)("div", {
                        className: "flex gap-1",
                        children: [(0, n.jsx)("span", {
                            className: "font-medium text-default",
                            children: (0, n.jsx)(x.a, {
                                id: "codex.mcpTool.embeddedResource.mimeTypeLabel",
                                defaultMessage: "MIME type"
                            })
                        }), (0, n.jsx)("span", {
                            className: "break-all",
                            children: a.resource.mimeType
                        })]
                    }) : null, t[49] = a.resource.mimeType, t[50] = i) : i = t[50], t[51] !== p ? (s = null != p ? (0, n.jsxs)("div", {
                        className: "flex gap-1",
                        children: [(0, n.jsx)("span", {
                            className: "font-medium text-default",
                            children: (0, n.jsx)(x.a, {
                                id: "codex.mcpTool.embeddedResource.annotationsLabel",
                                defaultMessage: "Annotations"
                            })
                        }), (0, n.jsx)("span", {
                            className: "break-all",
                            children: p
                        })]
                    }) : null, t[51] = p, t[52] = s) : s = t[52], t[53] !== d || t[54] !== u ? (r = d ? (0, n.jsxs)("div", {
                        className: "flex flex-col gap-0.5",
                        children: [(0, n.jsx)("span", {
                            className: "font-medium text-default",
                            children: (0, n.jsx)(x.a, {
                                id: "codex.mcpTool.embeddedResource.contentLabel",
                                defaultMessage: "Content"
                            })
                        }), (0, n.jsx)("pre", {
                            className: "max-h-48 overflow-auto rounded-md bg-primary-soft px-3 py-2 whitespace-pre-wrap text-codex-description/80",
                            children: u
                        })]
                    }) : null, t[53] = d, t[54] = u, t[55] = r) : r = t[55], t[56] !== l || t[57] !== i || t[58] !== s || t[59] !== r ? (c = (0, n.jsxs)("div", {
                        className: "flex flex-col gap-0.5 text-size-chat text-codex-description/80",
                        children: [l, i, s, r]
                    }), t[56] = l, t[57] = i, t[58] = s, t[59] = r, t[60] = c) : c = t[60], c
                }
                case "unknown": {
                    let e, o, l;
                    return t[61] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.b)("[&_*]:text-text/50", "bg-primary-soft text-codex-description/80 max-h-48 overflow-auto whitespace-pre-wrap rounded-md px-3 py-2 text-size-chat"), t[61] = e) : e = t[61], t[62] !== a.raw ? (o = eA(a.raw, 2), t[62] = a.raw, t[63] = o) : o = t[63], t[64] !== o ? (l = (0, n.jsx)("pre", {
                        className: e,
                        children: o
                    }), t[64] = o, t[65] = l) : l = t[65], l
                }
                case "text": {
                    let e, o, l;
                    t[66] !== a.annotations || t[67] !== a.text || t[68] !== c ? (e = [a.text, eE(a.annotations, c)].filter(e => null != e).join("\n"), t[66] = a.annotations, t[67] = a.text, t[68] = c, t[69] = e) : e = t[69];
                    let i = e;
                    return t[70] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, n.jsx)(x.a, {
                        id: "codex.mcpTool.textBlock.plaintextTitle",
                        defaultMessage: "plaintext"
                    }), t[70] = o) : o = t[70], t[71] !== i ? (l = (0, n.jsx)(S.CodeSnippet, {
                        codeContainerClassName: "max-h-48 overflow-auto",
                        content: i,
                        language: "plaintext",
                        renderSvgAsImage: !1,
                        shouldWrapCode: !0,
                        showStickyRightContent: !1,
                        title: o,
                        variant: "preview"
                    }), t[71] = i, t[72] = l) : l = t[72], l
                }
            }
        }

        function eU(e) {
            let t, a, l, i, r = (0, o.c)(12),
                {
                    data: c,
                    mimeType: u
                } = e,
                d = (0, s.a)();
            r[0] !== c || r[1] !== u ? (t = {
                data: c,
                mimeType: u
            }, r[0] = c, r[1] = u, r[2] = t) : t = r[2];
            let p = t,
                [h, v] = (0, m.useState)(null);
            r[3] !== p ? (a = () => v(p), r[3] = p, r[4] = a) : a = r[4];
            let g = a;
            if (!d) return null;
            if (h?.data === c && h.mimeType === u) {
                let e;
                return r[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(x.a, {
                    id: "codex.mcpTool.contentBlock.audioUnavailable",
                    defaultMessage: "Audio unavailable"
                }), r[5] = e) : e = r[5], e
            }
            return r[6] !== g || r[7] !== p ? (l = e => {
                if (null != e) return (0, ea.d)(e, p, g)
            }, r[6] = g, r[7] = p, r[8] = l) : l = r[8], r[9] !== g || r[10] !== l ? (i = (0, n.jsx)("audio", {
                ref: l,
                className: "w-full gap-0.5",
                controls: !0,
                onError: g,
                preload: "metadata"
            }), r[9] = g, r[10] = l, r[11] = i) : i = r[11], i
        }

        function eE(e, t) {
            let a = eL(e);
            return null == a ? null : t.formatMessage({
                id: "codex.mcpTool.contentBlock.annotationsLine",
                defaultMessage: "Annotations: {annotations}"
            }, {
                annotations: a
            })
        }

        function eL(e) {
            if (null == e) return null;
            let t = [];
            return (null != e.audience && e.audience.length > 0 && t.push(`audience=${e.audience.join(", ")}`), null != e.priority && t.push(`priority=${String(e.priority)}`), null != e.lastModified && t.push(`lastModified=${e.lastModified}`), 0 === t.length) ? null : t.join("; ")
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, s, r, w, I, P, $, et, ea, es, eU, eE, eL, eP, eO, eD, eB, ez, eH, eW, eq, eJ, eG, eV, eF, eK, eQ, eX, eZ, e$, eY, e1, e0, e2, e3, e4, e5, e6, e8, e7, e9, te, tt, ta = (0, o.c)(230),
                    {
                        item: tn,
                        conversationId: to,
                        expandedContentOnly: tl,
                        hideTextBlocksWithStructuredContent: ti,
                        hostId: ts,
                        loadRemoteLogos: tr,
                        appInfoOverride: tc,
                        onExpand: tu,
                        onOpenPermissions: td,
                        renderMcpApps: tp,
                        shouldAutoExpandMcpApp: tm,
                        summary: th,
                        summaryIcon: tx,
                        toolActivityTurnKey: tv
                    } = e,
                    tg = void 0 !== tl && tl,
                    tf = void 0 !== ti && ti,
                    tb = void 0 === tr || tr,
                    ty = void 0 === tp || tp,
                    tj = void 0 === th ? null : th,
                    tw = (0, u.y)(Y.a),
                    [tk, tC] = (0, m.useState)(!1);
                ta[0] !== ts || ta[1] !== tn ? (t = (0, eb.b)(tn, ts), ta[0] = ts, ta[1] = tn, ta[2] = t) : t = ta[2], ta[3] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                    enabled: !1
                }, ta[3] = a) : a = ta[3];
                let tN = (0, u.x)(eb.a, t, a);
                ta[4] !== tN || ta[5] !== tn ? (s = null == tN ? tn : {
                    ...tn,
                    result: tN,
                    deferredOutputTurnId: void 0
                }, ta[4] = tN, ta[5] = tn, ta[6] = s) : s = ta[6];
                let tM = s;
                ta[7] !== tc || ta[8] !== ts || ta[9] !== tM ? (r = {
                    item: tM,
                    hostId: ts,
                    appInfoOverride: tc
                }, ta[7] = tc, ta[8] = ts, ta[9] = tM, ta[10] = r) : r = ta[10];
                let {
                    matchingApp: tS,
                    pluginIcon: tI
                } = (0, ey.c)(r), tR = (0, h.a)(), {
                    platform: tT
                } = (0, E.a)();
                ta[11] !== tM.callId ? (w = (0, d.bf)(tM.callId), ta[11] = tM.callId, ta[12] = w) : w = ta[12];
                let tA = w,
                    t_ = (0, u.x)(Q.t, tA),
                    tU = (0, u.x)(Q.h, tA),
                    tE = (0, u.x)(Q.o, tA),
                    tL = tU?.content.toolCallStatus == null && tU?.content.toolResult != null;
                ta[13] !== ts || ta[14] !== tM || ta[15] !== t_ || ta[16] !== tL ? (I = (0, ew.a)({
                    item: tM,
                    hostId: ts,
                    retainedState: {
                        sourceId: t_,
                        hasSuccessfulToolResult: tL
                    }
                }), ta[13] = ts, ta[14] = tM, ta[15] = t_, ta[16] = tL, ta[17] = I) : I = ta[17];
                let tP = I;
                ta[18] !== tP || ta[19] !== ty ? (P = ty && (0, z.c)() && tP.isEligible, ta[18] = tP, ta[19] = ty, ta[20] = P) : P = ta[20];
                let tO = P;
                ta[21] !== to || ta[22] !== tM.callId ? ($ = (0, H.a)({
                    callId: tM.callId,
                    conversationId: to
                }), ta[21] = to, ta[22] = tM.callId, ta[23] = $) : $ = ta[23];
                let tD = $,
                    tB = (0, u.x)(H.b, tD);
                (0, ee.f)("2957382457");
                let tz = (0, u.z)(b.a);
                ta[24] !== to || ta[25] !== tO ? (et = tO || !to.startsWith("chatgpt:"), ta[24] = to, ta[25] = tO, ta[26] = et) : et = ta[26], ta[27] !== to || ta[28] !== ts || ta[29] !== tM || ta[30] !== tE || ta[31] !== tO || ta[32] !== et ? (ea = {
                    item: tM,
                    hostId: ts,
                    conversationId: to,
                    fallback: tE,
                    enabled: tO,
                    catalogEnabled: et
                }, ta[27] = to, ta[28] = ts, ta[29] = tM, ta[30] = tE, ta[31] = tO, ta[32] = et, ta[33] = ea) : ea = ta[33];
                let tH = (0, ey.a)(ea),
                    {
                        isCodexAppsToolCall: tW,
                        successfulToolResult: tq,
                        resourceUri: tJ,
                        toolDefinition: tG
                    } = tH,
                    {
                        elementHeightPx: tV,
                        elementRef: tF
                    } = (0, em.a)(),
                    tK = tM.result?.type === "success" ? tM.result.content : null,
                    tQ = tM.result?.type === "error" ? tM.result.error : null;
                ta[34] !== tM || ta[35] !== tT ? (es = (0, ed.d)({
                    item: tM,
                    platform: tT
                }), ta[34] = tM, ta[35] = tT, ta[36] = es) : es = ta[36];
                let tX = es,
                    tZ = tX?.nativeAppReference ?? null,
                    t$ = (0, ev.b)(tZ),
                    tY = t$?.appPath ?? null;
                ta[37] !== tY ? (eU = {
                    appPath: tY
                }, ta[37] = tY, ta[38] = eU) : eU = ta[38];
                let {
                    iconSmall: t1
                } = (0, k.a)(eU);
                ta[39] !== tM || ta[40] !== tS || ta[41] !== tx ? (eE = void 0 === tx ? (0, ex.d)(tM, null == tS ? [] : [tS])?.icon : tx, ta[39] = tM, ta[40] = tS, ta[41] = tx, ta[42] = eE) : eE = ta[42];
                let t0 = eE;
                if (void 0 === tx && null != t0) {
                    let e, t;
                    ta[43] !== tS ? (e = null == tS ? [] : [tS], ta[43] = tS, ta[44] = e) : e = ta[44], ta[45] !== t0 || ta[46] !== tM || ta[47] !== tb || ta[48] !== e ? (t = (0, n.jsx)(Z.a, {
                        item: tM,
                        apps: e,
                        part: "icon",
                        loadMetadata: tb,
                        children: t0
                    }), ta[45] = t0, ta[46] = tM, ta[47] = tb, ta[48] = e, ta[49] = t) : t = ta[49], t0 = t
                }
                ta[50] !== tM.source?.kind || ta[51] !== tq ? (eL = tM.source?.kind === "browserUse" && null != tq ? (0, f.a)(tq._meta) : null, ta[50] = tM.source?.kind, ta[51] = tq, ta[52] = eL) : eL = ta[52];
                let t2 = eL,
                    t3 = tz && !tg && tM.completed && (0, d.ri)(tM.invocation.server) && "js" === tM.invocation.tool && null != tq ? (0, eh.a)(tq._meta) : [],
                    t4 = tS ?? null;
                ta[53] !== tR || ta[54] !== tM.appContext || ta[55] !== tM.completed || ta[56] !== tM.invocation.arguments || ta[57] !== tM.invocation.server || ta[58] !== tM.invocation.tool || ta[59] !== tM.pluginId || ta[60] !== tM.result || ta[61] !== tM.source || ta[62] !== tM.toolDisplay || ta[63] !== t$ || ta[64] !== tT || ta[65] !== t4 || ta[66] !== tG ? (eP = (0, ek.b)({
                    pluginId: tM.pluginId,
                    toolDisplay: tM.toolDisplay,
                    toolDefinition: tG,
                    appContext: tM.appContext,
                    completed: tM.completed,
                    intl: tR,
                    toolName: tM.invocation.tool,
                    serverName: tM.invocation.server,
                    matchingApp: t4,
                    nativeDesktopAppMetadata: t$,
                    platform: tT,
                    source: tM.source,
                    toolArguments: tM.invocation.arguments,
                    toolResult: tM.result
                }), ta[53] = tR, ta[54] = tM.appContext, ta[55] = tM.completed, ta[56] = tM.invocation.arguments, ta[57] = tM.invocation.server, ta[58] = tM.invocation.tool, ta[59] = tM.pluginId, ta[60] = tM.result, ta[61] = tM.source, ta[62] = tM.toolDisplay, ta[63] = t$, ta[64] = tT, ta[65] = t4, ta[66] = tG, ta[67] = eP) : eP = ta[67];
                let {
                    label: t5,
                    readsPlainText: t6
                } = eP, t8 = tO && null != tJ && tP.isRenderable, {
                    resource: t7,
                    renderData: t9,
                    state: ae,
                    refetch: at
                } = (0, ey.b)(tH, t8), aa = tU?.sessionId == null ? null : tU.content.resource, an = null == aa ? t7?.resourceIdentityVerified : tU?.content.mcpAppScope.resourceIdentityVerified, ao = null == aa ? ae.error : null, al = t8 && null == aa && ae.isLoading, ai = (0, u.x)(Q.q, tA), as = (0, u.x)(Q.m, tA), ar = (0, G.a)({
                    hasResourceError: null != ao,
                    isResourceLoading: al,
                    isDilEnabled: !1,
                    renderData: aa ?? t9,
                    resourceUri: tJ ?? null,
                    shouldRenderMcpApp: t8
                }), ac = "html" === ar.kind ? ar.renderData : null, au = (0, V.e)({
                    data: ac,
                    error: ao,
                    isLoading: al
                }, Q.G), ad = "fallback" !== ar.kind, ap = tO && null != tJ && (!ad || null != ao || null != ai && !(ai instanceof V.b) || "too-large" === au.kind || "error" === au.kind), am = ap || (ac?.isCollapsible ?? !0), ah = as;
                ap ? ah = "fallback" : "html" !== ar.kind && (ah = ar.kind);
                let ax = "pending" === ah,
                    av = "launcher" === ah,
                    ag = ax || av;
                ta[68] !== tU ? (eO = null != tU && tU.content.resource?.hideAttribution === !0 && (!0 === tU.content.mcpAppScope.isVerifiedFirstParty || (0, ej.b)(tU.content)), ta[68] = tU, ta[69] = eO) : eO = ta[69];
                let af = eO,
                    ab = "inline" === ah,
                    ay = void 0 !== tm && tm && t8,
                    aj = !ap && tk || ay,
                    aw = ad && !av && (!am || (tB ?? aj)),
                    ak = aw && !ax,
                    aC = ab && ak,
                    aN = tk || (tB ?? ay),
                    [aM, aS] = (0, m.useState)(!1),
                    aI = aC && aM,
                    aR = al || ax && aw;
                ta[70] !== aw || ta[71] !== aI || ta[72] !== aR ? (eD = {
                    isLoading: aR,
                    isInlineRequested: aw,
                    isInlineOpening: aI
                }, ta[70] = aw, ta[71] = aI, ta[72] = aR, ta[73] = eD) : eD = ta[73];
                let aT = (0, D.d)(tA, eD),
                    aA = !ap && (ax || "html" === ar.kind) ? aT : null;
                ta[74] !== tG ? (eB = (0, F.b)(tG)?.resourceUri, ta[74] = tG, ta[75] = eB) : eB = ta[75];
                let a_ = eB,
                    aU = tq?._meta;
                ta[76] !== aU ? (ez = c()(aU, ["_codex_apps", "resource_uri"]), ta[76] = aU, ta[77] = ez) : ez = ta[77];
                let aE = ez;
                ta[78] !== a_ || ta[79] !== tW || ta[80] !== tJ || ta[81] !== aE || ta[82] !== tG?._meta ? (eH = tW && null != a_ && aE === a_ && (0, d.Jg)(tG?._meta) === tJ, ta[78] = a_, ta[79] = tW, ta[80] = tJ, ta[81] = aE, ta[82] = tG?._meta, ta[83] = eH) : eH = ta[83];
                let aL = !(eH && !0 === an && (0, D.b)({
                    isInline: !am && ("inline" === ah || ax),
                    status: aA,
                    hidesAttributionAndActions: ac?.hideAttribution === !0 && !0 === ac.hideActions
                })) && (ag || !tg && (am || "html" === ar.kind && !af));
                ta[84] !== tW || ta[85] !== tM.appContext?.appName || ta[86] !== tM.invocation.server || ta[87] !== tS?.name || ta[88] !== tI?.alt ? (eW = tS?.name ?? tM.appContext?.appName ?? tI?.alt ?? (tW ? null : (0, p.a)(tM.invocation.server)), ta[84] = tW, ta[85] = tM.appContext?.appName, ta[86] = tM.invocation.server, ta[87] = tS?.name, ta[88] = tI?.alt, ta[89] = eW) : eW = ta[89];
                let aP = eW;
                ta[90] !== aP || ta[91] !== tG ? (eq = (0, D.a)((0, v.a)(tG), aP), ta[90] = aP, ta[91] = tG, ta[92] = eq) : eq = ta[92];
                let aO = eq,
                    aD = ap ? tg || tk : !ag && (tg || (ad ? ak : aN));
                e: {
                    let e, t, a, n;
                    if (!aD) {
                        let e;
                        ta[93] !== tK ? (e = {
                            displayContent: tK,
                            displayStructuredContentJson: null
                        }, ta[93] = tK, ta[94] = e) : e = ta[94], eJ = e;
                        break e
                    }
                    ta[95] !== tM.result ? (e = tM.result?.type === "success" && null != tM.result.structuredContent ? eA(tM.result.structuredContent, 2) : null, ta[95] = tM.result, ta[96] = e) : e = ta[96];
                    let o = e;ta[97] !== tK || ta[98] !== tf || ta[99] !== o ? (t = tf && null != o && null != tK ? tK.filter(eR) : tK, ta[97] = tK, ta[98] = tf, ta[99] = o, ta[100] = t) : t = ta[100];
                    let l = t;ta[101] !== l ? (a = function(e) {
                        if (e?.length !== 1) return null;
                        let [t] = e;
                        if ("text" !== t.type || null != t.annotations) return null;
                        let a = t.text.trim();
                        if ("{" !== a[0] && "[" !== a[0]) return null;
                        try {
                            return eA(JSON.parse(a), 2)
                        } catch {
                            return null
                        }
                    }(l), ta[101] = l, ta[102] = a) : a = ta[102];
                    let i = a;
                    if (null == i) {
                        let e;
                        ta[103] !== o || ta[104] !== l ? (e = {
                            displayContent: l,
                            displayStructuredContentJson: o
                        }, ta[103] = o, ta[104] = l, ta[105] = e) : e = ta[105], eJ = e;
                        break e
                    }
                    if (null == o || i === o) {
                        let e, t;
                        ta[106] === Symbol.for("react.memo_cache_sentinel") ? (e = [], ta[106] = e) : e = ta[106];
                        let a = o ?? i;
                        ta[107] !== a ? (t = {
                            displayContent: e,
                            displayStructuredContentJson: a
                        }, ta[107] = a, ta[108] = t) : t = ta[108], eJ = t;
                        break e
                    }
                    ta[109] !== o || ta[110] !== l ? (n = {
                        displayContent: l,
                        displayStructuredContentJson: o
                    }, ta[109] = o, ta[110] = l, ta[111] = n) : n = ta[111],
                    eJ = n
                }
                let {
                    displayContent: aB,
                    displayStructuredContentJson: az
                } = eJ, [aH, aW] = (0, m.useState)(!1);
                t: {
                    let e;
                    if (!aH) {
                        eG = null;
                        break t
                    }
                    ta[112] !== tM.callId || ta[113] !== tM.durationMs || ta[114] !== tM.invocation || ta[115] !== tM.result ? (e = eA({
                        callId: tM.callId,
                        invocation: tM.invocation,
                        durationMs: tM.durationMs,
                        result: tM.result
                    }, 2), ta[112] = tM.callId, ta[113] = tM.durationMs, ta[114] = tM.invocation, ta[115] = tM.result, ta[116] = e) : e = ta[116],
                    eG = e
                }
                let aq = eG;
                ta[117] !== tR ? (eV = tR.formatMessage({
                    id: "codex.mcpTool.rawOutputTriggerTooltip",
                    defaultMessage: "Show raw tool call output"
                }), ta[117] = tR, ta[118] = eV) : eV = ta[118];
                let aJ = eV,
                    aG = tM.completed || null != tM.result || ad;
                ta[119] !== tM ? (eF = (0, eu.a)(tM), ta[119] = tM, ta[120] = eF) : eF = ta[120];
                let aV = eF,
                    aF = !tg && !aV && !t8 && !ap,
                    aK = !tM.completed;
                ta[121] !== tS ? (eK = null == tS ? [] : [tS], ta[121] = tS, ta[122] = eK) : eK = ta[122], ta[123] !== tM || ta[124] !== tb || ta[125] !== eK || ta[126] !== t5 ? (eQ = (0, n.jsx)(Z.a, {
                    item: tM,
                    apps: eK,
                    part: "label",
                    loadMetadata: tb,
                    children: t5
                }), ta[123] = tM, ta[124] = tb, ta[125] = eK, ta[126] = t5, ta[127] = eQ) : eQ = ta[127], ta[128] !== aK || ta[129] !== eQ ? (eX = (0, n.jsx)(eC.a, {
                    active: aK,
                    className: "min-w-0 shrink truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                    children: eQ
                }), ta[128] = aK, ta[129] = eQ, ta[130] = eX) : eX = ta[130];
                let aQ = eX;
                ta[131] !== t0 || ta[132] !== t2 || ta[133] !== ts || ta[134] !== tM || ta[135] !== tb || ta[136] !== tS || ta[137] !== t1 || ta[138] !== t$?.displayName || ta[139] !== tZ || ta[140] !== tX || ta[141] !== tI ? (eZ = void 0 !== t0 ? t0 : (0, n.jsx)(ec.a, {
                    hostId: ts,
                    item: tM,
                    loadRemoteLogos: tb,
                    fallback: null == tI && null != tZ ? (0, n.jsx)(C.a, {
                        alt: t$?.displayName ?? tX?.name ?? tM.invocation.server,
                        className: "icon-xs shrink-0 scale-[1.15] object-contain",
                        loadRemote: tb,
                        logoUrl: t1,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(_.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: eN.a
                        })
                    }) : null == tI && tX?.groupKey === ed.b ? (0, n.jsx)(_.a, {
                        className: "shrink-0 text-secondary",
                        asset: eN.a
                    }) : null == tI && tX?.logoUrl != null ? (0, n.jsx)(C.a, {
                        alt: tX.name,
                        className: "icon-xs shrink-0 object-contain",
                        loadRemote: tb,
                        logoUrl: tX.logoUrl,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(_.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: eM.a
                        })
                    }) : null == tI && tX?.usesBrowserIcon === !0 ? null == t2 ? (0, n.jsx)(_.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: eI.a
                    }) : (0, n.jsx)(A.a, {
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        href: t2,
                        loadRemote: tb
                    }) : null == tI && (0, d.ri)(tM.invocation.server) ? (0, n.jsx)(_.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: eS.a
                    }) : (0, n.jsx)(C.a, {
                        alt: tI?.alt ?? tS?.name ?? tM.appContext?.appName ?? tM.invocation.server,
                        appInfo: null == tI ? tS : null,
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        loadRemote: tb,
                        knownAppId: tI?.knownAppId ?? tM.appContext?.appName ?? tM.appContext?.connectorId,
                        logoUrl: tI?.logoUrl,
                        fallback: (0, n.jsx)(_.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: eM.a
                        })
                    })
                }), ta[131] = t0, ta[132] = t2, ta[133] = ts, ta[134] = tM, ta[135] = tb, ta[136] = tS, ta[137] = t1, ta[138] = t$?.displayName, ta[139] = tZ, ta[140] = tX, ta[141] = tI, ta[142] = eZ) : eZ = ta[142];
                let aX = eZ;
                ta[143] !== tj || ta[144] !== aX || ta[145] !== aQ ? (e$ = tj ?? (0, n.jsxs)(n.Fragment, {
                    children: [aX, aQ]
                }), ta[143] = tj, ta[144] = aX, ta[145] = aQ, ta[146] = e$) : e$ = ta[146];
                let aZ = e$;
                ta[147] !== aN || ta[148] !== aw || ta[149] !== tk || ta[150] !== tD || ta[151] !== tu || ta[152] !== tw || ta[153] !== ay || ta[154] !== ap || ta[155] !== ad || ta[156] !== ab || ta[157] !== tv || ta[158] !== tB ? (eY = () => {
                    if (ap) {
                        tk || tu?.(), tC(!tk);
                        return
                    }
                    let e = ad ? !aw : !aN;
                    if (e && tu?.(), ad) {
                        aS(e && ab), tw.set(H.b, tD, e);
                        return
                    }
                    e && null != tv && (0, ep.b)(tw, tv), !e && (!0 === tB || ay) && tw.set(H.b, tD, !1), tC(e)
                }, ta[147] = aN, ta[148] = aw, ta[149] = tk, ta[150] = tD, ta[151] = tu, ta[152] = tw, ta[153] = ay, ta[154] = ap, ta[155] = ad, ta[156] = ab, ta[157] = tv, ta[158] = tB, ta[159] = eY) : eY = ta[159];
                let a$ = eY;
                ta[160] !== tM.automaticApprovalReviews ? (e1 = null == tM.automaticApprovalReviews ? null : (0, n.jsx)(er.a, {}), ta[160] = tM.automaticApprovalReviews, ta[161] = e1) : e1 = ta[161];
                let aY = e1,
                    a1 = aC && (ac?.prefersBorder ?? tU?.content.resource?.prefersBorder ?? !0),
                    a0 = aG && "opening" !== aA && !av && am ? {
                        alignEnd: a1,
                        expanded: aD,
                        onToggle: a$
                    } : void 0,
                    a2 = (0, i.b)("group", a1 && "overflow-hidden rounded-lg border border-strong bg-surface"),
                    a3 = (0, i.b)((av || aC) && "w-full", a1 && "px-4 py-2.5");
                ta[162] !== at ? (e0 = () => {
                    at({
                        cancelRefetch: !1
                    })
                }, ta[162] = at, ta[163] = e0) : e0 = ta[163];
                let a4 = (0, n.jsx)(J.a, {
                    hostDisplayModes: Q.G,
                    resource: {
                        data: null == tJ ? null : ac,
                        error: ao,
                        isLoading: al
                    },
                    inlineSurface: ab ? "card" : "standalone",
                    mcpAppId: tA,
                    appName: aP ?? void 0,
                    presentation: ap ? "inline" : as,
                    onRetryResourceRead: e0,
                    showLoadingStatus: !aL
                });
                ta[164] !== ts || ta[165] !== tM ? (e2 = (0, eb.b)(tM, ts), ta[164] = ts, ta[165] = tM, ta[166] = e2) : e2 = ta[166];
                let a5 = e2,
                    a6 = ag && aw,
                    a8 = () => (0, n.jsxs)(eo.a, {
                        ref: aF || ab ? void 0 : tF,
                        className: (0, i.b)(t8 && "relative", !am && "py-1"),
                        variant: am && !a1 && (aL || !ab) ? "default" : "flush",
                        children: [null == tM.automaticApprovalReviews ? null : (0, n.jsx)(er.d, {
                            className: a1 ? "px-4" : void 0,
                            isExpandable: !ab,
                            reviews: tM.automaticApprovalReviews
                        }), null != a5 ? (0, n.jsx)(ef.a, {
                            ...a5
                        }) : (0, n.jsxs)(n.Fragment, {
                            children: [ad ? aI ? (0, n.jsx)(q.a, {
                                className: "w-full",
                                height: (0, W.a)(null, ac?.heightHint ?? null, ac?.minFrameHeight ?? null, "card"),
                                showLoadingStatus: !1
                            }) : a4 : aB && aB.length > 0 ? (0, n.jsx)("div", {
                                className: (0, i.b)("[&_*]:text-text/50", "flex flex-col gap-0.5"),
                                children: aB.map((e, t) => (0, n.jsx)(e_, {
                                    block: e,
                                    conversationId: to,
                                    hostId: ts
                                }, t))
                            }) : tQ ? (0, n.jsx)(U.a, {
                                className: "w-full",
                                fullWidth: !0,
                                level: "danger",
                                children: (0, n.jsx)("div", {
                                    className: "max-h-48 overflow-auto text-size-chat whitespace-pre-wrap",
                                    children: tQ
                                })
                            }) : az ? null : (0, n.jsx)("p", {
                                className: "text-codex-description/80",
                                children: (0, n.jsx)(x.a, {
                                    id: "codex.mcpTool.noResult",
                                    defaultMessage: "Tool returned no content"
                                })
                            }), !al && !aI && !ad && az && (0, n.jsx)(S.CodeSnippet, {
                                codeContainerClassName: "max-h-48 overflow-auto",
                                language: "json",
                                content: az,
                                showStickyRightContent: !1
                            }), !al && !aI && (0, n.jsx)(R.a, {
                                open: aH,
                                onOpenChange: aW,
                                triggerContent: (0, n.jsx)("div", {
                                    className: (0, i.b)("inline-flex w-fit", t8 && "absolute right-1 bottom-2 z-50"),
                                    children: (0, n.jsx)(l.a, {
                                        side: "top",
                                        align: "center",
                                        content: aJ,
                                        children: (0, n.jsx)(M.a, {
                                            className: "cursor-interaction opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 focus-visible:opacity-100",
                                            "aria-label": aJ,
                                            color: "ghost",
                                            onClick: () => {
                                                aW(!0)
                                            },
                                            size: "icon",
                                            children: (0, n.jsx)(L.a, {
                                                className: "icon-xxs"
                                            })
                                        })
                                    })
                                }),
                                children: (0, n.jsxs)(T.b, {
                                    children: [(0, n.jsx)(T.e, {
                                        children: (0, n.jsx)(T.d, {
                                            title: (0, n.jsx)(R.e, {
                                                children: (0, n.jsx)(x.a, {
                                                    id: "codex.mcpTool.rawOutputHeading",
                                                    defaultMessage: "Raw {server}.{tool} tool call output",
                                                    values: {
                                                        server: tM.invocation.server,
                                                        tool: tM.invocation.tool
                                                    }
                                                })
                                            })
                                        })
                                    }), (0, n.jsx)(T.e, {
                                        children: null == aq ? null : (0, n.jsx)(S.CodeSnippet, {
                                            codeContainerClassName: "max-h-128 overflow-auto",
                                            language: "json",
                                            content: aq,
                                            showStickyRightContent: !0
                                        })
                                    })]
                                })
                            })]
                        })]
                    }),
                    a7 = aF ? null : (0, n.jsxs)(n.Fragment, {
                        children: [aV ? (0, n.jsx)(eo.a, {
                            children: (0, n.jsx)(U.a, {
                                className: "w-full",
                                fullWidth: !0,
                                level: "warning",
                                actions: null == td ? void 0 : (0, n.jsx)(M.a, {
                                    color: "secondary",
                                    onClick: td,
                                    children: (0, n.jsx)(x.a, {
                                        id: "codex.mcpTool.reviewPermissions",
                                        defaultMessage: "Review permissions"
                                    })
                                }),
                                children: null == td ? (0, n.jsx)(x.a, {
                                    id: "codex.mcpTool.approvalRequestsDisabled",
                                    defaultMessage: "Approval requests were disabled for this tool call. If available, review this chat’s permissions before retrying."
                                }) : (0, n.jsx)(x.a, {
                                    id: "codex.mcpTool.approvalRequestsDisabled.recovery",
                                    defaultMessage: "Approval requests were disabled for this tool call. Choose “Ask for approval” in this chat’s permissions if available, then ask to retry."
                                })
                            })
                        }) : null, ag ? a4 : (0, n.jsx)(N.a, {
                            expanded: aD,
                            height: ab ? "auto" : tV,
                            onExpandComplete: ak ? () => aS(!1) : void 0,
                            children: aD ? a8() : null
                        })]
                    });
                ta[167] !== a0 || ta[168] !== aF || ta[169] !== a7 || ta[170] !== a8 ? (e3 = aF ? {
                    disclosure: a0 && {
                        ...a0,
                        details: a8
                    }
                } : {
                    externalDisclosure: a0,
                    body: a7
                }, ta[167] = a0, ta[168] = aF, ta[169] = a7, ta[170] = a8, ta[171] = e3) : e3 = ta[171];
                let a9 = e3;
                ta[172] !== aY || ta[173] !== a0 || ta[174] !== a3 || ta[175] !== al || ta[176] !== a7 || ta[177] !== tA || ta[178] !== a9 || ta[179] !== aZ || ta[180] !== aX || ta[181] !== aO || ta[182] !== aA ? (e4 = null != aA ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(B.a, {
                        accessory: aY,
                        className: a3,
                        disabled: al,
                        disclosure: a0,
                        icon: aX,
                        mcpAppId: tA,
                        name: aO,
                        status: aA
                    }), a7]
                }) : (0, n.jsx)(el.a, {
                    accessory: aY,
                    className: a3,
                    ...a9,
                    children: aZ
                }), ta[172] = aY, ta[173] = a0, ta[174] = a3, ta[175] = al, ta[176] = a7, ta[177] = tA, ta[178] = a9, ta[179] = aZ, ta[180] = aX, ta[181] = aO, ta[182] = aA, ta[183] = e4) : e4 = ta[183];
                let ne = e4;
                ta[184] !== tM ? (e5 = (0, g.a)(tM), ta[184] = tM, ta[185] = e5) : e5 = ta[185];
                let nt = e5;
                if (null != nt) {
                    let e;
                    return ta[186] !== nt.id || ta[187] !== nt.schedule || ta[188] !== nt.title ? (e = (0, n.jsx)(O.a, {
                        id: nt.id,
                        mode: "view",
                        name: nt.title,
                        rrule: nt.schedule
                    }), ta[186] = nt.id, ta[187] = nt.schedule, ta[188] = nt.title, ta[189] = e) : e = ta[189], e
                }
                ta[190] !== ts || ta[191] !== tM ? (e6 = (0, X.b)(tM, ts), ta[190] = ts, ta[191] = tM, ta[192] = e6) : e6 = ta[192];
                let na = e6;
                if (na?.type === "chatgpt-automation") {
                    let e;
                    return ta[193] !== na ? (e = (0, n.jsx)(y.a, {
                        automation: na
                    }), ta[193] = na, ta[194] = e) : e = ta[194], e
                }
                if (na?.type === "chatgpt-automation-list") {
                    let e;
                    return ta[195] !== na.automations ? (e = (0, n.jsx)(j.a, {
                        automations: na.automations
                    }), ta[195] = na.automations, ta[196] = e) : e = ta[196], e
                }
                ta[197] !== a6 || ta[198] !== a5 || ta[199] !== t6 || ta[200] !== tj ? (e8 = null != a5 && (a6 || null == tj && t6) ? (0, n.jsx)(ef.a, {
                    ...a5,
                    quiet: !a6
                }) : null, ta[197] = a6, ta[198] = a5, ta[199] = t6, ta[200] = tj, ta[201] = e8) : e8 = ta[201], ta[202] !== aw || ta[203] !== tA || ta[204] !== ty || ta[205] !== tw || ta[206] !== t8 ? (e7 = ty || "chatgpt-thread" !== tw.value.routeKind ? (0, n.jsx)(K.b, {
                    mcpAppId: tA,
                    isInlineRequested: t8 && aw
                }) : null, ta[202] = aw, ta[203] = tA, ta[204] = ty, ta[205] = tw, ta[206] = t8, ta[207] = e7) : e7 = ta[207], ta[208] !== aY || ta[209] !== a2 || ta[210] !== aL || ta[211] !== a3 || ta[212] !== a7 || ta[213] !== a9 || ta[214] !== ab || ta[215] !== tj || ta[216] !== tx || ta[217] !== aQ || ta[218] !== ne || ta[219] !== aA ? (e9 = void 0 !== tx && aL && null == aA ? (0, n.jsx)(en.a, {
                    accessory: aY,
                    ...a9,
                    className: a2,
                    "data-mcp-app-card": !!ab || void 0,
                    headerClassName: a3,
                    icon: tx,
                    summary: tj ?? aQ
                }) : (0, n.jsx)(ei.a, {
                    className: a2,
                    "data-mcp-app-card": !!ab || void 0,
                    children: aL ? ne : a7
                }), ta[208] = aY, ta[209] = a2, ta[210] = aL, ta[211] = a3, ta[212] = a7, ta[213] = a9, ta[214] = ab, ta[215] = tj, ta[216] = tx, ta[217] = aQ, ta[218] = ne, ta[219] = aA, ta[220] = e9) : e9 = ta[220], ta[221] !== t2 || ta[222] !== tM.callId || ta[223] !== tb ? (te = (e, t) => (0, n.jsxs)(m.Fragment, {
                    children: [(0, n.jsx)(eg.a, {
                        variant: "activity"
                    }), (0, n.jsx)(eT, {
                        call: e,
                        fallbackPageUrl: t2,
                        loadRemoteLogos: tb
                    })]
                }, `${tM.callId}:webmcp:${t}:${e.name}`), ta[221] = t2, ta[222] = tM.callId, ta[223] = tb, ta[224] = te) : te = ta[224];
                let nn = t3.map(te);
                return ta[225] !== e8 || ta[226] !== e7 || ta[227] !== e9 || ta[228] !== nn ? (tt = (0, n.jsxs)(n.Fragment, {
                    children: [e8, e7, e9, nn]
                }), ta[225] = e8, ta[226] = e7, ta[227] = e9, ta[228] = nn, ta[229] = tt) : tt = ta[229], tt
            }
        })
    }),
    KU8M: (function(e, t, a) {
        var n = a("BolX"),
            o = a("I07G"),
            l = a("KJ1J"),
            i = a("geS6"),
            s = a("W10I"),
            r = a("a4MG"),
            c = a("OWtl");
        let u = (0, n.d)(c.a, (e, t) => {
                let {
                    hostId: a,
                    threadId: n,
                    ...c
                } = e, {
                    get: u
                } = t;
                if (null == n) return u(r.q, a);
                let d = {
                    hostId: a,
                    threadId: n,
                    serverName: c.server
                };
                if (!(0, l.f)(c.server) || c.appContext?.linkId == null) return u(r.r, d);
                let p = u(r.q, a);
                if (p.isError) return u(r.r, d);
                let m = (0, s.b)({
                    ...c,
                    mcpServerStatuses: p.data
                });
                return void 0 === m || (0, o.Jg)(m?._meta) === c.appContext.resourceUri && null != (0, i.c)(m, c.appContext) ? p : u(r.r, d)
            }),
            d = (0, n.d)(c.a, (e, t) => {
                let {
                    appContext: a,
                    hostId: n,
                    invocationResourceUri: o,
                    server: s,
                    threadId: r,
                    tool: c
                } = e, {
                    get: d
                } = t;
                if (!(0, l.f)(s)) return null;
                let p = d(u, {
                    appContext: a,
                    hostId: n,
                    invocationResourceUri: o,
                    server: s,
                    threadId: r,
                    tool: c
                }).data?.data.find(e => e.name === s);
                if (null == p && null == o && a?.linkId == null) return;
                let m = Object.values(p?.tools ?? {}).filter(e => null != e);
                return (0, i.d)({
                    appContext: a,
                    invocationResourceUri: o,
                    originTool: c,
                    originToolDefinition: p?.tools[c],
                    server: s,
                    tools: m
                })
            }, {
                isEqual: i.f
            });
        a.d(t, {}, {
            a: u,
            b: d
        })
    }),
    GmdE: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            l = a("BolX"),
            i = a("I07G"),
            s = a("sM3V"),
            r = a("KJ1J"),
            c = a("KaH3"),
            u = a("Nj7b"),
            d = a("FvYa"),
            p = a("HOLv"),
            m = a("zUz7"),
            h = a("LF5P"),
            x = a("lhsI");
        a.d(t, {}, {
            a: function(e) {
                let t, a, v = (0, o.c)(9),
                    {
                        fallback: g,
                        hostId: f,
                        item: b,
                        loadRemoteLogos: y
                    } = e,
                    j = b.appContext?.connectorId === u.b || (0, c.f)(b),
                    w = (0, l.x)(!y || j || null != (0, h.d)({
                        item: b
                    }) || (0, i.ri)(b.invocation.server) || (0, r.f)(b.invocation.server) ? null : s.a, {
                        hostId: f,
                        serverName: b.invocation.server,
                        threadId: (0, i.Ue)(b.threadId)
                    })?.serverInfo;
                if (j) {
                    let e;
                    return v[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(p.a, {
                        className: "shrink-0 text-tertiary",
                        asset: x.a
                    }), v[0] = e) : e = v[0], e
                }
                v[1] !== w ? (t = (0, m.a)(w), v[1] = w, v[2] = t) : t = v[2];
                let k = t;
                return v[3] !== g || v[4] !== k || v[5] !== b.invocation.server || v[6] !== w?.name || v[7] !== w?.title ? (a = null == k ? g : (0, n.jsx)(d.a, {
                    alt: w?.title ?? w?.name ?? b.invocation.server,
                    className: "icon-xs shrink-0 object-contain",
                    logoUrl: k.logoUrl,
                    logoDarkUrl: k.logoDarkUrl,
                    fallback: g
                }), v[3] = g, v[4] = k, v[5] = b.invocation.server, v[6] = w?.name, v[7] = w?.title, v[8] = a) : a = v[8], a
            }
        })
    }),
    ZiDw: (function(e, t, a) {
        var n = a("BolX"),
            o = a("tSEg");
        let l = (0, n.v)(o.a, e => null),
            i = (0, n.d)(o.a, (e, t) => {
                let {
                    get: a
                } = t;
                return null != e && a(l, s(e)) === e
            });

        function s(e) {
            let t = e.indexOf("\0");
            return -1 === t ? e : e.slice(0, t)
        }
        a.d(t, {}, {
            a: i,
            b: function(e, t) {
                e.set(l, s(t), t)
            }
        })
    }),
    SfaR: (function(e, t, a) {
        var n = a("ASxG");
        let o = n.discriminatedUnion("kind", [n.object({
                kind: n.literal("listTools"),
                name: n.literal("webmcp_list_tools"),
                title: n.string().transform(e => e || void 0).optional(),
                description: n.string().optional(),
                readOnlyHint: n.boolean().optional(),
                sourceHostname: n.string().min(1).optional(),
                outputJson: n.string().optional(),
                outputTruncated: n.literal(!0).optional()
            }), n.object({
                kind: n.literal("invokeTool"),
                name: n.string().refine(e => e.trim().length > 0),
                title: n.string().transform(e => e || void 0).optional(),
                description: n.string().optional(),
                readOnlyHint: n.boolean().optional(),
                sourceHostname: n.string().min(1).optional(),
                inputJson: n.string().optional(),
                inputTruncated: n.literal(!0).optional(),
                outputJson: n.string().optional(),
                outputTruncated: n.literal(!0).optional()
            })]),
            l = n.object({
                "codex/toolSurface": n.object({
                    kind: n.literal("browserUse"),
                    webMcpCalls: n.array(o)
                })
            });
        a.d(t, {}, {
            a: function(e) {
                let t = l.safeParse(e);
                return t.success ? t.data["codex/toolSurface"].webMcpCalls : []
            }
        })
    }),
    oKu4: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            l = a("Wyro"),
            i = a.n(l),
            s = a("BolX"),
            r = a("I07G"),
            c = a("Wf1j"),
            u = a("jqIZ"),
            d = a("qKlE"),
            p = a("OusJ"),
            m = a("odKs"),
            h = a("GIgU");
        a("bN4H");
        var x = a("TleN"),
            v = a("TL6G"),
            g = a("tSEg");

        function f(e) {
            return "string" == typeof e
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, l, b, y, j, w, k, C, N, M, S, I, R, T, A, _, U, E = (0, o.c)(129),
                    {
                        elicitation: L,
                        result: P,
                        id: O,
                        kind: D,
                        mode: B,
                        name: z,
                        prompt: H,
                        rrule: W,
                        projectId: q,
                        cwds: J,
                        destination: G,
                        executionEnvironment: V,
                        localEnvironmentConfigPath: F,
                        model: K,
                        reasoningEffort: Q,
                        notificationPolicy: X,
                        targetThreadId: Z,
                        status: $
                    } = e,
                    Y = void 0 === P ? null : P,
                    ee = (0, s.y)(g.a),
                    et = (0, c.a)();
                (0, x.a)();
                let ea = (0, u.Z)("/local/:conversationId"),
                    en = (0, s.z)(h.e),
                    eo = Z ?? null;
                E[0] !== J || E[1] !== G || E[2] !== V || E[3] !== O || E[4] !== D || E[5] !== F || E[6] !== B || E[7] !== K || E[8] !== z || E[9] !== X || E[10] !== q || E[11] !== H || E[12] !== Q || E[13] !== eo || E[14] !== W || E[15] !== $ ? (t = JSON.stringify({
                    id: O,
                    kind: D,
                    mode: B,
                    name: z,
                    prompt: H,
                    rrule: W,
                    projectId: q,
                    cwds: J,
                    destination: G,
                    executionEnvironment: V,
                    localEnvironmentConfigPath: F,
                    model: K,
                    reasoningEffort: Q,
                    notificationPolicy: X,
                    targetThreadId: eo,
                    status: $
                }), E[0] = J, E[1] = G, E[2] = V, E[3] = O, E[4] = D, E[5] = F, E[6] = B, E[7] = K, E[8] = z, E[9] = X, E[10] = q, E[11] = H, E[12] = Q, E[13] = eo, E[14] = W, E[15] = $, E[16] = t) : t = E[16];
                let el = t,
                    ei = en?.directiveKey === el ? en.automationId : null,
                    es = ei ?? Y?.automationId ?? O,
                    er = Y?.snapshot ?? null,
                    ec = "view" === B ? B : null,
                    eu = "view" === B && null != O,
                    ed = null != O && (eu || "suggested-update" === B),
                    ep = (0, s.z)(d.g),
                    em = ep.data,
                    eh = !!ed && ep.isLoading;
                if (E[17] !== em || E[18] !== ei || E[19] !== J || E[20] !== O || E[21] !== et || E[22] !== eh || E[23] !== eu || E[24] !== D || E[25] !== B || E[26] !== z || E[27] !== q || E[28] !== H || E[29] !== es || E[30] !== eo || E[31] !== Y?.automationId || E[32] !== Y?.mode || E[33] !== er?.name || E[34] !== er?.rrule || E[35] !== W || E[36] !== $) {
                    var ex;
                    let e, t, n, o, s, c, u, d, p, h, x = null != O ? em?.items.find(e => e.id === O) ?? null : null;
                    E[46] !== em?.items || E[47] !== ei || E[48] !== et || E[49] !== eh || E[50] !== eu || E[51] !== B || E[52] !== z || E[53] !== es || E[54] !== Y?.mode || E[55] !== er?.name || E[56] !== er?.rrule || E[57] !== W ? ({
                        resolvedName: w,
                        resolvedRrule: n,
                        isLoadingView: t
                    } = function(e) {
                        let {
                            isViewMode: t,
                            mode: a,
                            isSuggestionAccepted: n,
                            trimmedId: o,
                            trimmedName: l,
                            trimmedRrule: i,
                            automations: s,
                            isLoading: r
                        } = e, c = "delete" !== a && (n || "suggested-create" !== a && "suggested-update" !== a) && null != o && s ? s.find(e => e.id === o) ?? null : null, u = c?.name ?? l ?? null;
                        return {
                            resolvedName: u,
                            resolvedRrule: c?.rrule ?? i ?? null,
                            isLoadingView: t && r && null == u
                        }
                    }({
                        isViewMode: eu,
                        mode: Y?.mode ?? B,
                        isSuggestionAccepted: null != ei,
                        trimmedId: es ?? null,
                        trimmedName: z ?? er?.name ?? null,
                        trimmedRrule: W ?? er?.rrule ?? null,
                        automations: em?.items ?? null,
                        isLoading: eh
                    }), o = et.formatMessage({
                        id: "settings.automations.rruleSummaryFallback",
                        defaultMessage: "Custom schedule"
                    }), s = (0, m.f)({
                        rrule: n,
                        intl: et,
                        fallbackMessage: o
                    }), E[46] = em?.items, E[47] = ei, E[48] = et, E[49] = eh, E[50] = eu, E[51] = B, E[52] = z, E[53] = es, E[54] = Y?.mode, E[55] = er?.name, E[56] = er?.rrule, E[57] = W, E[58] = t, E[59] = w, E[60] = n, E[61] = o, E[62] = s) : (t = E[58], w = E[59], n = E[60], o = E[61], s = E[62]);
                    let v = s;
                    E[63] !== et ? (c = et.formatMessage({
                        id: "settings.automations.loading",
                        defaultMessage: "Loading…"
                    }), E[63] = et, E[64] = c) : c = E[64];
                    let g = c;
                    E[65] !== et ? (u = et.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task"
                    }), E[65] = et, E[66] = u) : u = E[66];
                    let f = u;
                    E[67] !== B || E[68] !== Y?.mode ? (d = Y?.mode ?? B, E[67] = B, E[68] = Y?.mode, E[69] = d) : d = E[69], a = (y = "delete" === (b = d)) || Y?.automationId != null ? Y?.automationId ?? O ?? null : es, E[70] !== a || E[71] !== y ? (p = y ? (ex = a ?? null, 0 === (e = ex?.trim() ?? "").length ? null : /^[0-9a-f]{8}-[0-9a-f-]+$/i.test(e) ? e : i()(e.replace(/[-_]+/g, " "))) : null, E[70] = a, E[71] = y, E[72] = p) : p = E[72];
                    let M = p;
                    N = t ? g : w || M || f, E[73] !== M || E[74] !== et || E[75] !== w ? (h = w ?? M ?? et.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task"
                    }), E[73] = M, E[74] = et, E[75] = w, E[76] = h) : h = E[76], C = h, j = v || (t ? g : null != n ? o : null), l = null != z && null != H && null != W && ("heartbeat" === D ? null != eo : void 0 !== q || null != J), k = null != O && null != $ && null != z && null != H && null != W && (null == x ? "heartbeat" === D ? null != eo : void 0 !== q || null != J : !!(0, r.gi)(x) || void 0 !== q || null != J), E[17] = em, E[18] = ei, E[19] = J, E[20] = O, E[21] = et, E[22] = eh, E[23] = eu, E[24] = D, E[25] = B, E[26] = z, E[27] = q, E[28] = H, E[29] = es, E[30] = eo, E[31] = Y?.automationId, E[32] = Y?.mode, E[33] = er?.name, E[34] = er?.rrule, E[35] = W, E[36] = $, E[37] = a, E[38] = l, E[39] = b, E[40] = y, E[41] = j, E[42] = w, E[43] = k, E[44] = C, E[45] = N
                } else a = E[37], l = E[38], b = E[39], y = E[40], j = E[41], w = E[42], k = E[43], C = E[44], N = E[45];
                let ev = k,
                    eg = "suggested-update" === B && ed && ep.isLoading,
                    ef = "suggested-create" === B || "suggested-update" === B,
                    eb = ef ? L : void 0,
                    ey = O ?? null,
                    ej = D ?? null,
                    ew = z ?? "",
                    ek = H ?? "",
                    eC = W ?? "";
                E[77] !== J ? (M = J ?? [], E[77] = J, E[78] = M) : M = E[78];
                let eN = void 0 !== q ? q : J?.[0] === r.id ? null : J?.[0] ?? null,
                    eM = V ?? null,
                    eS = F ?? null,
                    eI = K ?? null,
                    eR = Q ?? null;
                E[79] !== X ? (S = void 0 !== X ? {
                    notificationPolicy: X
                } : {}, E[79] = X, E[80] = S) : S = E[80];
                let eT = $ ?? null;
                E[81] !== el || E[82] !== ec || E[83] !== eo || E[84] !== M || E[85] !== eN || E[86] !== eM || E[87] !== eS || E[88] !== eI || E[89] !== eR || E[90] !== S || E[91] !== eT || E[92] !== eb || E[93] !== ey || E[94] !== ej || E[95] !== ew || E[96] !== ek || E[97] !== eC ? (I = {
                    elicitation: eb,
                    directiveKey: el,
                    mode: ec,
                    id: ey,
                    kind: ej,
                    name: ew,
                    prompt: ek,
                    rrule: eC,
                    cwds: M,
                    projectId: eN,
                    executionEnvironment: eM,
                    localEnvironmentConfigPath: eS,
                    model: eI,
                    reasoningEffort: eR,
                    ...S,
                    targetThreadId: eo,
                    status: eT
                }, E[81] = el, E[82] = ec, E[83] = eo, E[84] = M, E[85] = eN, E[86] = eM, E[87] = eS, E[88] = eI, E[89] = eR, E[90] = S, E[91] = eT, E[92] = eb, E[93] = ey, E[94] = ej, E[95] = ew, E[96] = ek, E[97] = eC, E[98] = I) : I = E[98];
                let eA = I,
                    e_ = null != ei;
                E[99] !== l || E[100] !== ev || E[101] !== ec || E[102] !== eu || E[103] !== e_ ? (R = (0, h.D)({
                    directiveMode: ec,
                    canCreate: l,
                    canUpdate: ev,
                    isViewMode: eu,
                    forceOpen: e_
                }), E[99] = l, E[100] = ev, E[101] = ec, E[102] = eu, E[103] = e_, E[104] = R) : R = E[104];
                let eU = R,
                    eE = y ? null : j;
                E[105] !== eU || E[106] !== a || E[107] !== ei || E[108] !== eA || E[109] !== eg || E[110] !== ef || E[111] !== ea || E[112] !== ee || E[113] !== C ? (T = () => {
                    if (eg) return;
                    let e = a;
                    null != e ? v.c.dispatchHostMessage({
                        type: "navigate-to-route",
                        path: `/automations?automationId=${e}`
                    }) : "create" === eU && (ee.set(h.e, null), ee.set(h.f, eA), v.c.dispatchHostMessage({
                        type: "navigate-to-route",
                        path: "/automations?automationMode=create"
                    }))
                }, E[105] = eU, E[106] = a, E[107] = ei, E[108] = eA, E[109] = eg, E[110] = ef, E[111] = ea, E[112] = ee, E[113] = C, E[114] = T) : T = E[114];
                let eL = T,
                    eP = !y && !eg && (null != a || "create" === eU),
                    eO = Y?.deleteStatus;
                E[115] !== b || E[116] !== et || E[117] !== eO ? (A = function(e) {
                    let {
                        deleteStatus: t,
                        intl: a,
                        mode: n
                    } = e;
                    return "create" === n ? a.formatMessage({
                        id: "automation.updateDirective.created",
                        defaultMessage: "Created"
                    }) : "update" === n ? a.formatMessage({
                        id: "automation.updateDirective.updated",
                        defaultMessage: "Updated"
                    }) : "delete" === n ? "not_found" === t ? a.formatMessage({
                        id: "automation.updateDirective.missing",
                        defaultMessage: "Missing"
                    }) : a.formatMessage({
                        id: "automation.updateDirective.deleted",
                        defaultMessage: "Deleted"
                    }) : "suggested-create" === n ? a.formatMessage({
                        id: "automation.updateDirective.proposed",
                        defaultMessage: "Proposed"
                    }) : "suggested-update" === n ? a.formatMessage({
                        id: "automation.updateDirective.proposedUpdate",
                        defaultMessage: "Proposed update"
                    }) : a.formatMessage({
                        id: "automation.updateDirective.automation",
                        defaultMessage: "Scheduled task"
                    })
                }({
                    deleteStatus: eO,
                    intl: et,
                    mode: b
                }), E[115] = b, E[116] = et, E[117] = eO, E[118] = A) : A = E[118];
                let eD = A;
                E[119] !== eD || E[120] !== w || E[121] !== eE ? (_ = [eD, w, eE].filter(f), E[119] = eD, E[120] = w, E[121] = eE, E[122] = _) : _ = E[122];
                let eB = _.join(" · "),
                    ez = eE ?? eD,
                    eH = eB || void 0;
                return E[123] !== eP || E[124] !== eL || E[125] !== ez || E[126] !== eH || E[127] !== N ? (U = (0, n.jsx)(p.a, {
                    title: N,
                    subtitle: ez,
                    ariaLabel: eH,
                    canOpen: eP,
                    onOpen: eL
                }), E[123] = eP, E[124] = eL, E[125] = ez, E[126] = eH, E[127] = N, E[128] = U) : U = E[128], U
            }
        })
    }),
    IN8o: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            l = a("slpy"),
            i = a("on57"),
            s = a("BolX"),
            r = a("Wf1j"),
            c = a("oyxz"),
            u = a("wD9O"),
            d = a("HBzQ"),
            p = a("Sm6l"),
            m = a("bf6R"),
            h = a("laNt"),
            x = a("tSEg"),
            v = a("nMdB"),
            g = a("FWVQ"),
            f = a("qZWE"),
            b = a("D3rZ");
        a.d(t, {}, {
            a: function(e) {
                let t, a, y, j, w, k, C, N, M, S, I = (0, o.c)(44),
                    {
                        mcpAppId: R,
                        name: T,
                        status: A,
                        disabled: _,
                        icon: U,
                        accessory: E,
                        className: L,
                        disclosure: P
                    } = e,
                    O = (0, s.y)(x.a),
                    D = (0, u.c)(),
                    B = (0, r.a)(),
                    z = (0, s.x)(_ ? null : f.p, R);
                I[0] !== B ? (t = B.formatMessage({
                    id: "codex.mcpTool.openAppInTab",
                    defaultMessage: "Open app in tab"
                }), I[0] = B, I[1] = t) : t = I[1];
                let H = t;
                I[2] !== z?.inline || I[3] !== P || I[4] !== R || I[5] !== O || I[6] !== A ? (a = P ?? ("closed" === A && z?.inline ? {
                    expanded: !1,
                    onToggle: () => (0, f.x)(O, R, "inline")
                } : void 0), I[2] = z?.inline, I[3] = P, I[4] = R, I[5] = O, I[6] = A, I[7] = a) : a = I[7];
                let W = a;
                if (null != P && ("open" === A || "closed" === A)) {
                    let e, t = null != T,
                        a = T ?? "";
                    if (I[8] !== P.expanded || I[9] !== B || I[10] !== t || I[11] !== a) {
                        let n = {
                            hasName: t,
                            name: a
                        };
                        e = P.expanded ? B.formatMessage({
                            id: "mcpApp.activity.hideInline",
                            defaultMessage: "{hasName, select, true {Hide {name}} other {Hide app}}"
                        }, n) : B.formatMessage({
                            id: "mcpApp.activity.showInline",
                            defaultMessage: "{hasName, select, true {Show {name}} other {Show app}}"
                        }, n), I[8] = P.expanded, I[9] = B, I[10] = t, I[11] = a, I[12] = e
                    } else e = I[12];
                    y = e
                }
                I[13] !== z?.tab || I[14] !== H || I[15] !== R || I[16] !== O ? (j = z?.tab ? (0, n.jsx)(l.a, {
                    content: H,
                    children: (0, n.jsx)(p.a, {
                        className: "relative",
                        "aria-label": H,
                        color: "ghost",
                        size: "icon",
                        onClick: () => (0, f.x)(O, R, "fullscreen"),
                        children: (0, n.jsx)(m.N, {})
                    })
                }) : null, I[13] = z?.tab, I[14] = H, I[15] = R, I[16] = O, I[17] = j) : j = I[17], I[18] !== E || I[19] !== j ? (w = (0, n.jsxs)(n.Fragment, {
                    children: [j, E]
                }), I[18] = E, I[19] = j, I[20] = w) : w = I[20], I[21] !== W || I[22] !== P?.accessibleLabel || I[23] !== P?.labelledBy || I[24] !== y || I[25] !== D ? (k = null == W ? void 0 : {
                    ...W,
                    accessibleLabel: P?.accessibleLabel ?? (P?.labelledBy == null ? y : void 0),
                    onToggle: e => {
                        (0, v.a)(e.currentTarget, D), W.onToggle(e)
                    }
                }, I[21] = W, I[22] = P?.accessibleLabel, I[23] = P?.labelledBy, I[24] = y, I[25] = D, I[26] = k) : k = I[26];
                let q = "opening" === A,
                    J = null != W && "group-hover/activity-header:[--agent-activity-summary-color:var(--color-text)]";
                return I[27] !== J ? (C = (0, i.b)("min-w-0 shrink truncate", b.a.summary, J), I[27] = J, I[28] = C) : C = I[28], I[29] !== y || I[30] !== B || I[31] !== T || I[32] !== A ? (N = y ?? (0, n.jsx)(c.a, {
                    id: "mcpApp.activity.status",
                    defaultMessage: "{status, select, opening {Opening {name}} open {Opened {name}} error {Couldn’t open {name}} other {Open {name}}}",
                    values: {
                        status: A,
                        name: T ?? B.formatMessage(g.c)
                    }
                }), I[29] = y, I[30] = B, I[31] = T, I[32] = A, I[33] = N) : N = I[33], I[34] !== q || I[35] !== C || I[36] !== N ? (M = (0, n.jsx)(h.a, {
                    active: q,
                    role: "status",
                    className: C,
                    children: N
                }), I[34] = q, I[35] = C, I[36] = N, I[37] = M) : M = I[37], I[38] !== L || I[39] !== U || I[40] !== M || I[41] !== w || I[42] !== k ? (S = (0, n.jsxs)(d.b, {
                    className: L,
                    accessory: w,
                    externalDisclosure: k,
                    children: [U, M]
                }), I[38] = L, I[39] = U, I[40] = M, I[41] = w, I[42] = k, I[43] = S) : S = I[43], S
            }
        })
    }),
    FWVQ: (function(e, t, a) {
        var n = a("BolX"),
            o = a("Qgfj"),
            l = a("qZWE");
        let i = (0, o.e)({
            id: "mcpApp.activity.unnamed",
            defaultMessage: "app"
        });
        a.d(t, {}, {
            a: function(e, t) {
                return e?.trim() || t?.trim() || void 0
            },
            b: function(e) {
                let {
                    isInline: t,
                    status: a,
                    hidesAttributionAndActions: n
                } = e;
                return t && n && ("opening" === a || "open" === a)
            },
            c: i,
            d: function(e, t) {
                let {
                    isLoading: a,
                    isInlineRequested: o,
                    isInlineOpening: i,
                    hasError: s
                } = t, r = (0, n.x)(l.k, e), c = (0, n.x)(l.m, e), u = (0, n.x)(l.j, e), d = (0, n.x)(l.v, e), p = (0, n.x)(l.q, e);
                return void 0 !== s && s || null != p ? "error" : "closed" !== r ? r : a ? "opening" : (o ?? u) && "launcher" !== c ? d && !(void 0 !== i && i) ? "open" : "opening" : "closed"
            }
        })
    }),
    KLqe: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            l = a("BolX"),
            i = a("oyxz"),
            s = a("ASxG"),
            r = a("Hkqr"),
            c = a("acxW"),
            u = a("vbL5"),
            d = a("tKel"),
            p = a("VUkV");
        let m = s.object({
            page_id: s.string().trim().min(1)
        });
        a.d(t, {}, {
            a: function(e) {
                let t, a, s, h, x, v, g, f, b = (0, o.c)(32),
                    {
                        item: y,
                        apps: j,
                        part: w,
                        loadMetadata: k,
                        children: C
                    } = e;
                b[0] !== j || b[1] !== y.appContext || b[2] !== y.functionName || b[3] !== y.invocation.server || b[4] !== y.invocation.tool ? (t = (0, r.b)({
                    appContext: y.appContext,
                    apps: j,
                    functionName: y.functionName,
                    serverName: y.invocation.server,
                    toolName: y.invocation.tool
                }), b[0] = j, b[1] = y.appContext, b[2] = y.functionName, b[3] = y.invocation.server, b[4] = y.invocation.tool, b[5] = t) : t = b[5];
                let N = t,
                    M = y.appContext?.actionName ?? y.invocation.tool,
                    S = y.appContext?.connectorId ?? N?.id;
                b[6] !== y.invocation.server || b[7] !== M || b[8] !== S ? (a = (0, u.a)(y.invocation.server, M, S), b[6] = y.invocation.server, b[7] = M, b[8] = S, b[9] = a) : a = b[9];
                let I = a;
                b[10] !== y.invocation.arguments || b[11] !== I ? (s = "read_page" === I ? m.safeParse(y.invocation.arguments).data : void 0, b[10] = y.invocation.arguments, b[11] = I, b[12] = s) : s = b[12];
                let R = s;
                b[13] !== R ? (h = null == R ? null : {
                    kind: "page",
                    id: R.page_id
                }, b[13] = R, b[14] = h) : h = b[14], b[15] !== k ? (x = {
                    enabled: k
                }, b[15] = k, b[16] = x) : x = b[16];
                let T = (0, l.x)(d.c, h, x);
                if (null == T) return C;
                b[17] !== y.completed || b[18] !== y.invocation.server || b[19] !== y.result ? (v = "active", y.completed && (v = (0, c.a)({
                    result: y.result,
                    isCodexAppsServer: "codex_apps" === y.invocation.server
                }) ? "failed" : "completed"), b[17] = y.completed, b[18] = y.invocation.server, b[19] = y.result, b[20] = v) : v = b[20];
                let A = T.title ?? "";
                return b[21] !== C || b[22] !== w || b[23] !== v ? (g = e => {
                    let {
                        icon: t,
                        title: a
                    } = e;
                    return "icon" === w ? (0, n.jsx)("span", {
                        className: "icon-xs inline-flex shrink-0 items-center justify-center text-xs leading-none",
                        children: t
                    }) : 0 === a.trim().length ? C : (0, n.jsx)(i.a, {
                        id: "localConversation.pageReadActivity.title.state",
                        defaultMessage: "{state, select, active {Reading {title}} failed {Couldn’t read {title}} other {Read {title}}}",
                        values: {
                            state: v,
                            title: a
                        }
                    })
                }, b[21] = C, b[22] = w, b[23] = v, b[24] = g) : g = b[24], b[25] !== T.document_type || b[26] !== T.namespace || b[27] !== T.page_id || b[28] !== T.symbol || b[29] !== A || b[30] !== g ? (f = (0, n.jsx)(p.a, {
                    pageId: T.page_id,
                    documentType: T.document_type,
                    namespace: T.namespace,
                    symbol: T.symbol,
                    title: A,
                    iconClassName: "text-text/60",
                    children: g
                }), b[25] = T.document_type, b[26] = T.namespace, b[27] = T.page_id, b[28] = T.symbol, b[29] = A, b[30] = g, b[31] = f) : f = b[31], f
            }
        })
    })
};