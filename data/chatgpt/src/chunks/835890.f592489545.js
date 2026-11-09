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
        (0, d.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(865959)]).then(a.bind(a, "n7q6"))).TeamAutomationCardActions), a.d(t, {}, {
            a: function(e) {
                let t, a, s, d, v, x, h, g = (0, o.c)(22),
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
                }, d = null, g[8] = f.id, g[9] = j, g[10] = b, g[11] = k, g[12] = s, g[13] = d) : (s = g[12], d = g[13]), g[14] !== w || g[15] !== s || g[16] !== d || g[17] !== k ? (v = (0, n.jsx)(r.a, {
                    title: k,
                    subtitle: w,
                    ariaLabel: k,
                    canOpen: !0,
                    onOpen: s,
                    actions: d
                }), g[14] = w, g[15] = s, g[16] = d, g[17] = k, g[18] = v) : v = g[18], g[19] === Symbol.for("react.memo_cache_sentinel") ? (x = null, g[19] = x) : x = g[19], g[20] !== v ? (h = (0, n.jsxs)("div", {
                    className: "flex w-full min-w-0 flex-col gap-2 self-start",
                    children: [v, x]
                }), g[20] = v, g[21] = h) : h = g[21], h
            },
            b: function(e) {
                let t, a, l, i, r, c, u = (0, o.c)(16),
                    {
                        operation: d
                    } = e;
                return u[0] !== d ? (t = "pendingCreate" === d && (0, n.jsx)(s.a, {
                    id: "chatgpt.tpp.cot_v5.active_status.working",
                    defaultMessage: "Working",
                    description: "Short in-progress status label in a ChatGPT Work conversation shown while the model is processing the user's request. Indicates that work is underway, not that a product is operational or functional."
                }), u[0] = d, u[1] = t) : t = u[1], u[2] !== d ? (a = "createGoal" === d && (0, n.jsx)(s.a, {
                    id: "chatgpt.tasks.conversation.tool_status.creating.goal",
                    defaultMessage: "Creating goal",
                    description: "Short, neutral progress label in a ChatGPT conversation on web or desktop, shown to the end user while their requested goal and its saved plan are being created and the response is still streaming. A goal is an ongoing objective, not a scheduled reminder. Use a concise status phrase with no final punctuation."
                }), u[2] = d, u[3] = a) : a = u[3], u[4] !== d ? (l = "create" === d && (0, n.jsx)(s.a, {
                    id: "chatgpt.tasks.conversation.tool_status.creating",
                    defaultMessage: "Creating scheduled task",
                    description: "Short status message shown in a ChatGPT conversation while the scheduled-task tool creates a task for the user. This label has no trailing punctuation or ellipsis."
                }), u[4] = d, u[5] = l) : l = u[5], u[6] !== d ? (i = "update" === d && (0, n.jsx)(s.a, {
                    id: "chatgpt.tasks.conversation.tool_status.updating",
                    defaultMessage: "Updating scheduled task",
                    description: "Short status message shown in a ChatGPT conversation while the scheduled-task tool updates an existing task for the user. This label has no trailing punctuation or ellipsis."
                }), u[6] = d, u[7] = i) : i = u[7], u[8] !== d ? (r = "list" === d && (0, n.jsx)(s.a, {
                    id: "chatgpt.tasks.conversation.tool_status.listing",
                    defaultMessage: "Listing scheduled tasks",
                    description: "Short status message shown in a ChatGPT conversation while the scheduled-task tool retrieves the user's tasks. This label has no trailing punctuation or ellipsis."
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
                let t, a, v, x = (0, n.c)(8),
                    {
                        conversationId: h
                    } = e,
                    g = (0, l.y)(d.a),
                    {
                        key: f,
                        state: b
                    } = (0, s.Y)();
                x[0] !== b ? (t = (0, c.a)(b), x[0] = b, x[1] = t) : t = x[1];
                let y = t;
                return x[2] !== h || x[3] !== f || x[4] !== g || x[5] !== y ? (a = () => {
                    if ("chatgpt-thread" !== g.value.routeKind) return;
                    let e = g.value.conversationId;
                    return g.watch(t => {
                        let a = t.get(p.j, h);
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
                }, v = [h, f, g, y], x[2] = h, x[3] = f, x[4] = g, x[5] = y, x[6] = a, x[7] = v) : (a = x[6], v = x[7]), (0, i.useEffect)(a, v), null
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
                        defaultMessage: "Custom schedule",
                        description: "Fallback label when RRULE summary cannot be generated"
                    })
                }) : null != t ? (0, l.o)(t, a) : e.displaySchedule?.trim() || (0, n.f)({
                    rrule: (0, l.n)(e.schedule),
                    intl: a,
                    fallbackMessage: a.formatMessage({
                        id: "settings.automations.rruleSummaryFallback",
                        defaultMessage: "Custom schedule",
                        description: "Fallback label when RRULE summary cannot be generated"
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
            p = a("V64I"),
            m = a("WrBH"),
            v = a("tSEg"),
            x = a("cWHY"),
            h = a("VRzh"),
            g = a("DuVB");

        function f(e) {
            return (0, n.jsx)(b, {
                automation: e
            }, e.id)
        }
        let b = (0, i.memo)(function(e) {
            let t, a, i, s, c, m, x, h = (0, o.c)(19),
                {
                    automation: f
                } = e,
                b = (0, l.y)(v.a),
                y = (0, r.a)(),
                j = (0, l.x)(u.g, f.id);
            h[0] !== f || h[1] !== j || h[2] !== y ? (t = (0, g.a)(f, j, y), h[0] = f, h[1] = j, h[2] = y, h[3] = t) : t = h[3];
            let {
                scheduleLabel: w,
                title: k
            } = t;
            return h[4] !== f.id || h[5] !== b || h[6] !== k ? (a = () => {
                (0, d.openAutomationSidePanelTab)({
                    scope: b,
                    automationId: f.id,
                    title: k,
                    toggle: !0,
                    navigationSource: "conversation"
                })
            }, h[4] = f.id, h[5] = b, h[6] = k, h[7] = a) : a = h[7], h[8] !== k ? (i = (0, n.jsx)("span", {
                className: "truncate text-sm text-default",
                children: k
            }), h[8] = k, h[9] = i) : i = h[9], h[10] !== w ? (s = null == w || 0 === w.length ? null : (0, n.jsx)("span", {
                className: "truncate text-sm text-tertiary",
                children: w
            }), h[10] = w, h[11] = s) : s = h[11], h[12] !== i || h[13] !== s ? (c = (0, n.jsxs)("span", {
                className: "flex min-w-0 flex-col gap-0.5",
                children: [i, s]
            }), h[12] = i, h[13] = s, h[14] = c) : c = h[14], h[15] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, n.jsx)(p.a, {
                "aria-hidden": "true",
                className: "icon-sm shrink-0 text-tertiary"
            }), h[15] = m) : m = h[15], h[16] !== a || h[17] !== c ? (x = (0, n.jsx)("li", {
                className: "border-b border-subtle",
                "data-automation-card": !0,
                children: (0, n.jsxs)("button", {
                    type: "button",
                    className: "flex w-full min-w-0 cursor-interaction items-center justify-between gap-4 py-3 text-start hover:text-default",
                    onClick: a,
                    children: [c, m]
                })
            }), h[16] = a, h[17] = c, h[18] = x) : x = h[18], x
        });
        a.d(t, {}, {
            a: function(e) {
                let t, a, i, r, d, p, v, g, b, y, j = (0, o.c)(22),
                    {
                        automations: w,
                        conversationId: k
                    } = e,
                    N = (0, c._)(),
                    {
                        data: C,
                        isSuccess: S
                    } = (0, l.z)(u.k);
                j[0] !== w || j[1] !== C || j[2] !== S ? (t = S && C.isAvailable ? w.filter(e => {
                    let {
                        id: t
                    } = e;
                    return C.items.some(e => {
                        let {
                            automation: a
                        } = e;
                        return a.id === t
                    })
                }) : w, j[0] = w, j[1] = C, j[2] = S, j[3] = t) : t = j[3];
                let M = t;
                return j[4] !== M.length || j[5] !== k ? (a = null != k && M.length > 0 ? (0, n.jsx)(h.a, {
                    conversationId: k
                }) : null, j[4] = M.length, j[5] = k, j[6] = a) : a = j[6], j[7] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsx)(m.a, {
                    "aria-hidden": "true",
                    className: "icon-sm shrink-0"
                }), j[7] = i) : i = j[7], j[8] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsxs)("header", {
                    className: "flex items-center gap-2 border-b border-subtle px-4 py-3 text-sm text-secondary select-none",
                    children: [i, (0, n.jsx)("h2", {
                        className: "text-sm font-medium uppercase",
                        children: (0, n.jsx)(x.a, {
                            children: (0, n.jsx)(s.a, {
                                id: "automations.scheduled.destination.label",
                                defaultMessage: "Scheduled",
                                description: "Title of the Scheduled destination and the compact scheduled-task list in a conversation"
                            })
                        })
                    })]
                }), j[8] = r) : r = j[8], j[9] !== M ? (d = M.slice(0, 5).map(f), j[9] = M, j[10] = d) : d = j[10], j[11] !== N ? (p = () => {
                    N("/automations", {
                        state: {
                            navigationSource: "conversation"
                        }
                    })
                }, j[11] = N, j[12] = p) : p = j[12], j[13] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, n.jsx)(s.a, {
                    id: "automations.list.seeAllTasks",
                    defaultMessage: "See all tasks",
                    description: "Button in a compact scheduled-task conversation list that opens the Scheduled destination"
                }), j[13] = v) : v = j[13], j[14] !== p ? (g = (0, n.jsx)("li", {
                    children: (0, n.jsx)("button", {
                        type: "button",
                        className: "w-full cursor-interaction py-3 text-start text-sm text-tertiary select-none hover:text-default",
                        onClick: p,
                        children: v
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
            p = a("V64I"),
            m = a("V8uZ"),
            v = a("Sgcz"),
            x = a("umSm"),
            h = a("FgmP");

        function g(e) {
            let t, a, c, d, h, g, b, y, j, w, k, N, C, S, M = (0, o.c)(43),
                {
                    className: I,
                    isExpandable: R,
                    review: T
                } = e,
                A = (0, r.a)(),
                [_, U] = (0, s.useState)(!1);
            M[0] !== A || M[1] !== T ? (t = (0, v.c)(A, T), M[0] = A, M[1] = T, M[2] = t) : t = M[2];
            let E = t;
            if (!(void 0 === R || R)) {
                let e, t;
                return M[3] !== I ? (e = (0, l.b)("min-w-0 truncate pt-1 text-codex-description/80", I), M[3] = I, M[4] = e) : e = M[4], M[5] !== e || M[6] !== E ? (t = (0, n.jsx)("div", {
                    className: e,
                    children: E
                }), M[5] = e, M[6] = E, M[7] = t) : t = M[7], t
            }
            let P = "denied" === T.status && "high" === T.riskLevel;
            M[8] !== A || M[9] !== T ? (a = (0, v.b)(A, T), M[8] = A, M[9] = T, M[10] = a) : a = M[10];
            let L = a;
            M[11] !== I ? (c = (0, l.b)("flex flex-col pt-1", I), M[11] = I, M[12] = c) : c = M[12], M[13] === Symbol.for("react.memo_cache_sentinel") ? (d = () => U(f), M[13] = d) : d = M[13];
            let O = "inProgress" === T.status,
                W = P ? "text-warning" : "text-codex-description/80 group-hover/automatic-approval-review:text-default";
            M[14] !== W ? (h = (0, l.b)("min-w-0 truncate", W), M[14] = W, M[15] = h) : h = M[15], M[16] !== O || M[17] !== h || M[18] !== E ? (g = (0, n.jsx)(x.a, {
                active: O,
                className: h,
                children: E
            }), M[16] = O, M[17] = h, M[18] = E, M[19] = g) : g = M[19];
            let D = _ && "rotate-90 opacity-100";
            M[20] !== D ? (b = (0, l.b)("icon-2xs shrink-0 text-tertiary transition-[opacity,transform] duration-basic opacity-0 group-hover/automatic-approval-review:opacity-100", D), M[20] = D, M[21] = b) : b = M[21], M[22] !== b ? (y = (0, n.jsx)(p.a, {
                className: b
            }), M[22] = b, M[23] = y) : y = M[23], M[24] !== _ || M[25] !== y || M[26] !== g ? (j = (0, n.jsxs)(u.a, {
                className: "group/automatic-approval-review inline-flex w-fit max-w-full gap-1.5 text-start",
                color: "ghostMuted",
                focusRing: "inset",
                size: "inline",
                onClick: d,
                "aria-expanded": _,
                children: [g, y]
            }), M[24] = _, M[25] = y, M[26] = g, M[27] = j) : j = M[27];
            let z = _ ? "auto" : 0,
                H = +!!_;
            M[28] !== z || M[29] !== H ? (w = {
                height: z,
                opacity: H
            }, M[28] = z, M[29] = H, M[30] = w) : w = M[30];
            let B = _ ? "auto" : "none";
            return M[31] !== B ? (k = {
                overflow: "hidden",
                pointerEvents: B
            }, M[31] = B, M[32] = k) : k = M[32], M[33] !== L ? (N = (0, n.jsx)("p", {
                className: "max-w-[80ch] pt-1 text-size-chat leading-relaxed whitespace-pre-wrap text-text/60",
                children: L
            }), M[33] = L, M[34] = N) : N = M[34], M[35] !== w || M[36] !== k || M[37] !== N ? (C = (0, n.jsx)(i.a.div, {
                initial: !1,
                animate: w,
                transition: m.a,
                style: k,
                children: N
            }), M[35] = w, M[36] = k, M[37] = N, M[38] = C) : C = M[38], M[39] !== j || M[40] !== C || M[41] !== c ? (S = (0, n.jsxs)("div", {
                className: c,
                children: [j, C]
            }), M[39] = j, M[40] = C, M[41] = c, M[42] = S) : S = M[42], S
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
                    defaultMessage: "Requires explicit authorization because this action is considered high risk",
                    description: "Explanation shown for a tool call that automatic review declined because the action was considered high risk"
                }) : (0, n.jsx)(c.a, {
                    id: "localConversation.automaticApprovalReview.explicitAuthorization",
                    defaultMessage: "Requires explicit authorization",
                    description: "Explanation shown for a tool call that automatic review declined"
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
                    asset: h.a,
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
                    i = "grouped" === (void 0 === l ? "item" : l) ? "var(--conversation-grouped-item-gap, 4px)" : "var(--conversation-item-gap, 16px)";
                return a[0] !== i ? (t = (0, n.jsx)("div", {
                    "aria-hidden": !0,
                    className: "w-full group-data-[spacing=grouped]/agent-activity:shrink-0",
                    style: {
                        height: i
                    }
                }), a[0] = i, a[1] = t) : t = a[1], t
            }
        })
    }),
    z0Na: (function(e, t, a) {
        var n = a("QosV"),
            o = a("T0Rc"),
            l = a("BolX"),
            i = a("wWGv"),
            s = a("sM3V"),
            r = a("KJ1J"),
            c = a("biqr"),
            u = a("rO8L"),
            d = a("NJrC"),
            p = a("W10I"),
            m = a("EEop"),
            v = a("cLdu"),
            x = a("ueue"),
            h = a("whdX"),
            g = a("tSEg"),
            f = a("KU8M"),
            b = a("LF5P"),
            y = a("MdwM"),
            j = a("Hkqr"),
            w = a("acxW");
        a.d(t, {}, {
            a: function(e) {
                let t, a, o, c, u, d, m, v, x, h, g = (0, n.c)(50),
                    {
                        item: b,
                        hostId: y,
                        conversationId: j,
                        fallback: k,
                        enabled: N,
                        catalogEnabled: C
                    } = e,
                    S = void 0 === N || N,
                    M = void 0 === C ? S : C;
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
                g[14] !== M ? (u = {
                    enabled: M
                }, g[14] = M, g[15] = u) : u = g[15];
                let U = (0, l.x)(f.a, _, u);
                g[16] !== U.data || g[17] !== b.invocation.server || g[18] !== b.invocation.tool || g[19] !== b.invocationResourceUri ? (d = (0, p.c)({
                    invocationResourceUri: b.invocationResourceUri,
                    mcpServerStatuses: U.data,
                    server: b.invocation.server,
                    tool: b.invocation.tool
                })?.resourceUri, g[16] = U.data, g[17] = b.invocation.server, g[18] = b.invocation.tool, g[19] = b.invocationResourceUri, g[20] = d) : d = g[20];
                let E = d;
                g[21] !== U.isPending || g[22] !== j || g[23] !== E || g[24] !== T?._meta || g[25] !== k?.resourceUri || g[26] !== b.appContext?.resourceUri || g[27] !== b.mcpAppResourceUri ? (m = j.startsWith("chatgpt:") ? E : b.appContext?.resourceUri ?? E ?? (U.isPending ? k?.resourceUri : void 0) ?? (0, i.Hg)(T?._meta) ?? b.mcpAppResourceUri, g[21] = U.isPending, g[22] = j, g[23] = E, g[24] = T?._meta, g[25] = k?.resourceUri, g[26] = b.appContext?.resourceUri, g[27] = b.mcpAppResourceUri, g[28] = m) : m = g[28];
                let P = m,
                    L = null != P && U.isPending && b.appContext?.resourceUri == null && null == E && k?.resourceUri == null,
                    O = (0, l.x)(S && t ? f.b : null, _);
                I ? v = "error" : b.completed && null == b.result && null == T && (v = "cancelled");
                let W = P ?? k?.resourceUri ?? null,
                    D = t && null != b.appContext ? b.callId : null,
                    z = v;
                return g[29] !== U.data || g[30] !== b.appContext || g[31] !== b.invocation.server || g[32] !== b.invocation.tool || g[33] !== b.invocationResourceUri ? (x = (0, p.b)({
                    appContext: b.appContext,
                    invocationResourceUri: b.invocationResourceUri,
                    mcpServerStatuses: U.data,
                    server: b.invocation.server,
                    tool: b.invocation.tool
                }), g[29] = U.data, g[30] = b.appContext, g[31] = b.invocation.server, g[32] = b.invocation.tool, g[33] = b.invocationResourceUri, g[34] = x) : x = g[34], g[35] !== U || g[36] !== j || g[37] !== T || g[38] !== y || g[39] !== t || g[40] !== L || g[41] !== b || g[42] !== R || g[43] !== D || g[44] !== x || g[45] !== W || g[46] !== I || g[47] !== v || g[48] !== O ? (h = {
                    item: b,
                    hostId: y,
                    conversationId: j,
                    catalog: U,
                    resourceUri: W,
                    isResourceUriPending: L,
                    toolScope: O,
                    isCodexAppsToolCall: t,
                    originCallId: D,
                    successfulToolResult: R,
                    displayedSuccessfulToolResult: T,
                    toolCallFailed: I,
                    toolCallStatus: z,
                    toolDefinition: x
                }, g[35] = U, g[36] = j, g[37] = T, g[38] = y, g[39] = t, g[40] = L, g[41] = b, g[42] = R, g[43] = D, g[44] = x, g[45] = W, g[46] = I, g[47] = v, g[48] = O, g[49] = h) : h = g[49], h
            },
            b: function(e, t) {
                let a, o, l, i, s = (0, n.c)(24),
                    {
                        item: r,
                        hostId: c,
                        conversationId: u,
                        catalog: p,
                        resourceUri: m,
                        isResourceUriPending: v,
                        toolScope: x,
                        originCallId: g
                    } = e,
                    f = x?.connectorId ?? null,
                    b = x?.kind === "target" ? x : null,
                    y = m ?? null,
                    j = t && !v && (null == g || r.completed);
                s[0] !== u || s[1] !== c || s[2] !== r.appContext || s[3] !== r.invocation.server || s[4] !== g || s[5] !== f || s[6] !== b || s[7] !== y || s[8] !== j ? (a = {
                    appContext: r.appContext,
                    connectorId: f,
                    connectorTarget: b,
                    hostId: c,
                    originCallId: g,
                    server: r.invocation.server,
                    threadId: u,
                    uri: y,
                    enabled: j
                }, s[0] = u, s[1] = c, s[2] = r.appContext, s[3] = r.invocation.server, s[4] = g, s[5] = f, s[6] = b, s[7] = y, s[8] = j, s[9] = a) : a = s[9];
                let w = (0, h.f)(a),
                    k = v ? void 0 : w.data;
                s[10] !== k ? (o = (0, d.c)(k), s[10] = k, s[11] = o) : o = s[11];
                let N = o,
                    {
                        error: C,
                        isPending: S,
                        isFetching: M
                    } = v || e.isCodexAppsToolCall && null == x ? p : w;
                return s[12] !== C || s[13] !== M || s[14] !== S || s[15] !== k?.resource ? (l = k?.resource != null ? {
                    error: null,
                    isLoading: !1
                } : {
                    error: M ? null : C,
                    isLoading: M || S && null == C
                }, s[12] = C, s[13] = M, s[14] = S, s[15] = k?.resource, s[16] = l) : l = s[16], s[17] !== w.access || s[18] !== w.refetch || s[19] !== w.refetchResource || s[20] !== N || s[21] !== k || s[22] !== l ? (i = {
                    resource: k,
                    renderData: N,
                    access: w.access,
                    refetch: w.refetch,
                    refetchResource: w.refetchResource,
                    state: l
                }, s[17] = w.access, s[18] = w.refetch, s[19] = w.refetchResource, s[20] = N, s[21] = k, s[22] = l, s[23] = i) : i = s[23], i
            },
            c: function(e) {
                let t, a, i, s, d, p, h, f, w, k, N, C, S, M = (0, n.c)(50),
                    {
                        item: I,
                        hostId: R,
                        appInfoOverride: T,
                        enabled: A,
                        retryOnMount: _
                    } = e,
                    U = void 0 === A || A,
                    E = (0, l.y)(g.a);
                M[0] !== T || M[1] !== U || M[2] !== I ? (t = U && null == T && (0, b.g)(I), M[0] = T, M[1] = U, M[2] = I, M[3] = t) : t = M[3], M[4] !== R || M[5] !== t ? (a = {
                    enabled: t,
                    hostId: R
                }, M[4] = R, M[5] = t, M[6] = a) : a = M[6];
                let {
                    data: P
                } = (0, c.m)(a);
                M[7] !== T || M[8] !== P || M[9] !== I.appContext || M[10] !== I.functionName || M[11] !== I.invocation.server || M[12] !== I.invocation.tool ? (i = T ?? (null == P ? null : (0, j.b)({
                    appContext: I.appContext,
                    apps: P,
                    functionName: I.functionName,
                    serverName: I.invocation.server,
                    toolName: I.invocation.tool
                })), M[7] = T, M[8] = P, M[9] = I.appContext, M[10] = I.functionName, M[11] = I.invocation.server, M[12] = I.invocation.tool, M[13] = i) : i = M[13];
                let L = i;
                M[14] !== U || M[15] !== I.invocation.server || M[16] !== I.pluginId ? (s = U && null != I.pluginId && !(0, r.f)(I.invocation.server), M[14] = U, M[15] = I.invocation.server, M[16] = I.pluginId, M[17] = s) : s = M[17], M[18] !== R || M[19] !== s ? (d = {
                    enabled: s,
                    hostId: R
                }, M[18] = R, M[19] = s, M[20] = d) : d = M[20];
                let O = (0, u.a)(d);
                M[21] !== R || M[22] !== O ? (p = {
                    enabled: O,
                    hostId: R,
                    roots: void 0,
                    resolveActiveRoots: !0
                }, M[21] = R, M[22] = O, M[23] = p) : p = M[23];
                let {
                    data: W
                } = (0, v.l)(p);
                M[24] !== W || M[25] !== I.pluginId ? (h = W?.find(e => {
                    let {
                        plugin: t
                    } = e;
                    return t.id === I.pluginId || null != t.remotePluginId && t.remotePluginId === I.pluginId
                }), M[24] = W, M[25] = I.pluginId, M[26] = h) : h = M[26];
                let D = h,
                    z = O && null != W && null != I.pluginId && null == D;
                M[27] !== R || M[28] !== I.pluginId || M[29] !== E.query || M[30] !== z ? (f = E.query.getOptions(m.l, (0, m.a)({
                    hostId: R,
                    pluginId: z ? I.pluginId ?? null : null
                })), M[27] = R, M[28] = I.pluginId, M[29] = E.query, M[30] = z, M[31] = f) : f = M[31];
                let H = f,
                    B = z && H.enabled,
                    q = _ ?? H.retryOnMount;
                M[32] !== H || M[33] !== B || M[34] !== q ? (w = {
                    ...H,
                    enabled: B,
                    retry: !1,
                    retryOnMount: q
                }, M[32] = H, M[33] = B, M[34] = q, M[35] = w) : w = M[35];
                let {
                    data: V
                } = (0, o.a)(w);
                M[36] !== V ? (k = null == V ? null : (0, x.b)(V), M[36] = V, M[37] = k) : k = M[37];
                let J = k,
                    G = D ?? J,
                    F = J?.plugin.id ?? D?.plugin.id ?? I.pluginId;
                return M[38] !== W || M[39] !== J || M[40] !== z ? (N = z && null != J ? [J] : W ?? [], M[38] = W, M[39] = J, M[40] = z, M[41] = N) : N = M[41], M[42] !== I.invocation.server || M[43] !== F || M[44] !== N ? (C = (0, y.a)({
                    pluginId: F,
                    plugins: N,
                    serverName: I.invocation.server
                }), M[42] = I.invocation.server, M[43] = F, M[44] = N, M[45] = C) : C = M[45], M[46] !== L || M[47] !== G || M[48] !== C ? (S = {
                    matchingApp: L,
                    plugin: G,
                    pluginIcon: C
                }, M[46] = L, M[47] = G, M[48] = C, M[49] = S) : S = M[49], S
            }
        })
    }),
    o1Ns: (function(e, t, a) {
        var n = a("SZCv"),
            o = a.n(n),
            l = a("BolX"),
            i = a("wWGv"),
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
                let t = (0, i._e)(e),
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
                } = e, o = !(0, r.b)(t.invocation) && !(0, u.b)(t.invocation, a) && !0 !== t.isMcpAppWidgetSuperseded && (n?.sourceId == null || n.sourceId === (0, i._e)(t.callId));
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
            s = a("IPUh"),
            r = a("AQaI"),
            c = a.n(r),
            u = a("BolX"),
            d = a("wWGv"),
            p = a("OZum"),
            m = a("zd8w"),
            v = a("Wf1j"),
            x = a("oyxz"),
            h = a("mnR8"),
            g = a("ojna"),
            f = a("USdi"),
            b = a("khkh"),
            y = a("SHXB"),
            j = a("bPZ9"),
            w = a("OOaz"),
            k = a("Zm2g"),
            N = a("FvYa"),
            C = a("Sm6l"),
            S = a("la9L"),
            M = a("rmk3"),
            I = a("JNtf"),
            R = a("mUDD"),
            T = a("KxMp"),
            A = a("HOLv"),
            _ = a("Wdu7"),
            U = a("wwME"),
            E = a("nXaV"),
            P = a("YeQK"),
            L = a("oKu4"),
            O = a("FWVQ"),
            W = a("IN8o"),
            D = a("HwRo"),
            z = a("C3P5"),
            H = a("aENG"),
            B = a("Cv9y"),
            q = a("EAcR"),
            V = a("NJrC"),
            J = a("EDsV"),
            G = a("geS6"),
            F = a("qwxA"),
            K = a("qZWE"),
            Z = a("E2ja"),
            Q = a("KLqe"),
            X = a("Sd8U"),
            $ = a("tSEg"),
            Y = a("hZax"),
            ee = a("V8uZ"),
            et = a("WFY2"),
            ea = a("S7UD"),
            en = a("kRUe"),
            eo = a("GmdE"),
            el = a("t7eZ"),
            ei = a("LF5P"),
            es = a("ZiDw"),
            er = a("ltPT"),
            ec = a("SfaR"),
            eu = a("BI7J"),
            ed = a("DYB3"),
            ep = a("MAIj"),
            em = a("mRLe"),
            ev = a("z0Na"),
            ex = a("o62A"),
            eh = a("o1Ns"),
            eg = a("alO6"),
            ef = a("umSm"),
            eb = a("tHoD"),
            ey = a("jKy0"),
            ej = a("RznG"),
            ew = a("r9ev"),
            ek = a("gFsV"),
            eN = a("SCbd"),
            eC = a("vWxq"),
            eS = a("LhYn");

        function eM(e) {
            return "text" !== e.type
        }

        function eI(e) {
            let t, a, l, i, s, r, c, u, d, m, v = (0, o.c)(35),
                {
                    call: h,
                    fallbackPageUrl: g,
                    loadRemoteLogos: f
                } = e,
                b = null == h.sourceHostname ? g : `https://${h.sourceHostname}`,
                y = "invokeTool" === h.kind ? h.inputJson : void 0,
                j = "invokeTool" === h.kind && !0 === h.inputTruncated;
            v[0] !== f || v[1] !== b ? (t = null == b ? (0, n.jsx)(A.a, {
                className: "shrink-0 text-text/60",
                asset: eS.a
            }) : (0, n.jsx)(T.a, {
                className: "icon-xs shrink-0 text-text/60",
                href: b,
                loadRemote: f
            }), v[0] = f, v[1] = b, v[2] = t) : t = v[2], v[3] !== h.name || v[4] !== h.title ? (a = h.title ?? (0, p.a)(h.name, {
                style: "sentence"
            }), v[3] = h.name, v[4] = h.title, v[5] = a) : a = v[5], v[6] !== h.kind || v[7] !== a ? (l = (0, n.jsx)(x.a, {
                id: "codex.mcpTool.webMcpActivity.completed",
                defaultMessage: "{kind, select, listTools {Listed website tools} other {{toolName}}}",
                description: "Human-readable activity label for a website-provided WebMCP tool invocation",
                values: {
                    kind: h.kind,
                    toolName: a
                }
            }), v[6] = h.kind, v[7] = a, v[8] = l) : l = v[8], v[9] !== y || v[10] !== j ? (i = null == y || j ? y : function(e) {
                try {
                    return JSON.parse(e)
                } catch {
                    return e
                }
            }(y), v[9] = y, v[10] = j, v[11] = i) : i = v[11];
            let w = !!j || void 0;
            v[12] !== h.description || v[13] !== h.name || v[14] !== h.readOnlyHint || v[15] !== h.sourceHostname || v[16] !== h.title || v[17] !== i || v[18] !== w ? (s = eR({
                name: h.name,
                title: h.title,
                description: h.description,
                website: h.sourceHostname,
                readOnlyHint: h.readOnlyHint,
                input: i,
                inputTruncated: w
            }, 2), v[12] = h.description, v[13] = h.name, v[14] = h.readOnlyHint, v[15] = h.sourceHostname, v[16] = h.title, v[17] = i, v[18] = w, v[19] = s) : s = v[19];
            let k = j ? "true" : "false";
            return v[20] !== k ? (r = (0, n.jsx)(x.a, {
                id: "codex.localConversation.webMcpTools.toolLabel",
                defaultMessage: "{truncated, select, true {Tool (input truncated)} other {Tool}}",
                description: "Title for a website-provided WebMCP tool definition and its input",
                values: {
                    truncated: k
                }
            }), v[20] = k, v[21] = r) : r = v[21], v[22] !== s || v[23] !== r ? (c = (0, n.jsx)(S.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: s,
                language: "json",
                showStickyRightContent: !1,
                title: r
            }), v[22] = s, v[23] = r, v[24] = c) : c = v[24], v[25] !== h.outputJson || v[26] !== h.outputTruncated ? (u = null == h.outputJson ? null : (0, n.jsx)(S.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: h.outputTruncated ? h.outputJson : function(e) {
                    try {
                        return eR(JSON.parse(e), 2)
                    } catch {
                        return e
                    }
                }(h.outputJson),
                language: "json",
                showStickyRightContent: !1,
                title: (0, n.jsx)(x.a, {
                    id: "codex.localConversation.webMcpTools.resultLabel",
                    defaultMessage: "{truncated, select, true {Result (truncated)} other {Result}}",
                    description: "Title for a website-provided WebMCP tool result",
                    values: {
                        truncated: h.outputTruncated ? "true" : "false"
                    }
                })
            }), v[25] = h.outputJson, v[26] = h.outputTruncated, v[27] = u) : u = v[27], v[28] !== u || v[29] !== c ? (d = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2",
                children: [c, u]
            }), v[28] = u, v[29] = c, v[30] = d) : d = v[30], v[31] !== t || v[32] !== d || v[33] !== l ? (m = (0, n.jsx)(ew.a, {
                icon: t,
                status: "completed",
                summary: l,
                children: d
            }), v[31] = t, v[32] = d, v[33] = l, v[34] = m) : m = v[34], m
        }

        function eR(e, t) {
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

        function eT(e) {
            let t = (0, o.c)(74),
                {
                    block: a,
                    conversationId: l,
                    hostId: s
                } = e,
                r = (0, u.y)(X.a),
                c = (0, v.a)();
            switch (a.type) {
                case "image": {
                    let e, o, i, u, d, p, m;
                    t[0] !== a.annotations || t[1] !== c ? (e = e_(a.annotations, c), t[0] = a.annotations, t[1] = c, t[2] = e) : e = t[2];
                    let v = e,
                        x = `data:${a.mimeType};base64,${a.data}`;
                    t[3] !== c ? (o = c.formatMessage({
                        id: "codex.mcpTool.contentBlock.imageAlt",
                        defaultMessage: "Image returned by tool",
                        description: "Accessible description for an image included in an MCP tool result"
                    }), t[3] = c, t[4] = o) : o = t[4];
                    let h = o;
                    t[5] !== l || t[6] !== s || t[7] !== h || t[8] !== x || t[9] !== c || t[10] !== r ? (i = () => (0, P.getGeneratedImageContextMenuItems)(r, {
                        chatGptConversationId: l.startsWith("chatgpt:") ? (0, w.d)(l.slice(8)) : void 0,
                        displaySrc: x,
                        hostId: s,
                        image: {
                            kind: "generic",
                            src: x,
                            alt: h
                        },
                        intl: c
                    }), t[5] = l, t[6] = s, t[7] = h, t[8] = x, t[9] = c, t[10] = r, t[11] = i) : i = t[11], t[12] !== h || t[13] !== x ? (u = (0, n.jsx)("img", {
                        className: "max-h-48 w-max max-w-full gap-0.5 rounded-md object-contain",
                        alt: h,
                        src: x
                    }), t[12] = h, t[13] = x, t[14] = u) : u = t[14], t[15] !== i || t[16] !== u ? (d = (0, n.jsx)(M.a, {
                        getItems: i,
                        children: u
                    }), t[15] = i, t[16] = u, t[17] = d) : d = t[17];
                    let g = d;
                    if (null == v) return g;
                    return t[18] !== v ? (p = (0, n.jsx)("p", {
                        className: "text-size-chat whitespace-pre-wrap text-codex-description/80",
                        children: v
                    }), t[18] = v, t[19] = p) : p = t[19], t[20] !== g || t[21] !== p ? (m = (0, n.jsxs)("div", {
                        className: "flex flex-col gap-0.5",
                        children: [g, p]
                    }), t[20] = g, t[21] = p, t[22] = m) : m = t[22], m
                }
                case "audio": {
                    let e, o, l, i;
                    t[23] !== a.annotations || t[24] !== c ? (e = e_(a.annotations, c), t[23] = a.annotations, t[24] = c, t[25] = e) : e = t[25];
                    let s = e;
                    return t[26] !== a.data || t[27] !== a.mimeType ? (o = (0, n.jsx)(eA, {
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
                    t[34] !== a.annotations || t[35] !== c ? (e = e_(a.annotations, c), t[34] = a.annotations, t[35] = c, t[36] = e) : e = t[36];
                    let s = e,
                        r = a.title ?? a.name ?? a.uri;
                    return t[37] !== r ? (o = (0, n.jsx)("div", {
                        className: "break-words text-codex-description/80",
                        children: (0, n.jsx)(x.a, {
                            id: "codex.mcpTool.resourceLink.reading",
                            defaultMessage: "Read {resourceLinkName}",
                            description: "Summary shown for MCP resource link content blocks",
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
                    t[44] !== a.resource.annotations ? (e = eU(a.resource.annotations), t[44] = a.resource.annotations, t[45] = e) : e = t[45];
                    let p = e;
                    return t[46] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, n.jsx)("span", {
                        className: "font-medium text-default",
                        children: (0, n.jsx)(x.a, {
                            id: "codex.mcpTool.embeddedResource.uriLabel",
                            defaultMessage: "URI",
                            description: "Label for the URI of an embedded resource"
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
                                defaultMessage: "MIME type",
                                description: "Label for the MIME type of an embedded resource"
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
                                defaultMessage: "Annotations",
                                description: "Label for annotations shown with an embedded resource"
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
                                defaultMessage: "Content",
                                description: "Label for the content of an embedded resource"
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
                    return t[61] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.b)("[&_*]:text-text/50", "bg-primary-soft text-codex-description/80 max-h-48 overflow-auto whitespace-pre-wrap rounded-md px-3 py-2 text-size-chat"), t[61] = e) : e = t[61], t[62] !== a.raw ? (o = eR(a.raw, 2), t[62] = a.raw, t[63] = o) : o = t[63], t[64] !== o ? (l = (0, n.jsx)("pre", {
                        className: e,
                        children: o
                    }), t[64] = o, t[65] = l) : l = t[65], l
                }
                case "text": {
                    let e, o, l, s;
                    t[66] !== a.annotations || t[67] !== a.text || t[68] !== c ? (e = [a.text, e_(a.annotations, c)].filter(e => null != e).join("\n"), t[66] = a.annotations, t[67] = a.text, t[68] = c, t[69] = e) : e = t[69];
                    let r = e;
                    return t[70] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, n.jsxs)("div", {
                        className: "sticky top-0 z-10 flex items-center justify-between py-1 ps-2 pe-2 font-sans text-sm text-codex-description select-none",
                        children: [(0, n.jsx)("div", {
                            className: "min-w-0 truncate",
                            children: (0, n.jsx)(x.a, {
                                id: "codex.mcpTool.textBlock.plaintextTitle",
                                defaultMessage: "plaintext",
                                description: "Title shown for MCP text content blocks rendered in a code-style container"
                            })
                        }), (0, n.jsx)("div", {
                            className: "flex items-center"
                        })]
                    }), t[70] = o) : o = t[70], t[71] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, i.b)("[&_*]:text-text/50", "text-codex-description/80 m-0 whitespace-pre-wrap break-words font-sans text-size-chat leading-relaxed extension:leading-normal"), t[71] = l) : l = t[71], t[72] !== r ? (s = (0, n.jsxs)("div", {
                        className: "relative overflow-clip rounded-lg border border-strong bg-secondary-soft-alpha contain-inline-size",
                        children: [o, (0, n.jsx)("div", {
                            className: "max-h-48 overflow-y-auto p-2",
                            children: (0, n.jsx)("pre", {
                                className: l,
                                children: r
                            })
                        })]
                    }), t[72] = r, t[73] = s) : s = t[73], s
                }
            }
        }

        function eA(e) {
            let t, a, l, i, s = (0, o.c)(12),
                {
                    data: r,
                    mimeType: c
                } = e;
            s[0] !== r || s[1] !== c ? (t = {
                data: r,
                mimeType: c
            }, s[0] = r, s[1] = c, s[2] = t) : t = s[2];
            let u = t,
                [d, p] = (0, m.useState)(null);
            s[3] !== u ? (a = () => p(u), s[3] = u, s[4] = a) : a = s[4];
            let v = a;
            if (d?.data === r && d.mimeType === c) {
                let e;
                return s[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(x.a, {
                    id: "codex.mcpTool.contentBlock.audioUnavailable",
                    defaultMessage: "Audio unavailable",
                    description: "Short fallback shown instead of the audio player when audio returned by an MCP tool cannot be played"
                }), s[5] = e) : e = s[5], e
            }
            return s[6] !== v || s[7] !== u ? (l = e => {
                if (null != e) return (0, ea.d)(e, u, v)
            }, s[6] = v, s[7] = u, s[8] = l) : l = s[8], s[9] !== v || s[10] !== l ? (i = (0, n.jsx)("audio", {
                ref: l,
                className: "w-full gap-0.5",
                controls: !0,
                onError: v,
                preload: "metadata"
            }), s[9] = v, s[10] = l, s[11] = i) : i = s[11], i
        }

        function e_(e, t) {
            let a = eU(e);
            return null == a ? null : t.formatMessage({
                id: "codex.mcpTool.contentBlock.annotationsLine",
                defaultMessage: "Annotations: {annotations}",
                description: "Line showing MCP content block annotations in text output"
            }, {
                annotations: a
            })
        }

        function eU(e) {
            if (null == e) return null;
            let t = [];
            return (null != e.audience && e.audience.length > 0 && t.push(`audience=${e.audience.join(", ")}`), null != e.priority && t.push(`priority=${String(e.priority)}`), null != e.lastModified && t.push(`lastModified=${e.lastModified}`), 0 === t.length) ? null : t.join("; ")
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, r, w, M, P, X, et, ea, ew, eA, e_, eU, eE, eP, eL, eO, eW, eD, ez, eH, eB, eq, eV, eJ, eG, eF, eK, eZ, eQ, eX, e$, eY, e1, e0, e2, e3, e4, e5, e8, e6, e7, e9, te, tt, ta, tn, to = (0, o.c)(240),
                    {
                        item: tl,
                        conversationId: ti,
                        expandedContentOnly: ts,
                        hideTextBlocksWithStructuredContent: tr,
                        hostId: tc,
                        loadRemoteLogos: tu,
                        appInfoOverride: td,
                        onExpand: tp,
                        onOpenPermissions: tm,
                        renderMcpApps: tv,
                        shouldAutoExpandMcpApp: tx,
                        summary: th,
                        summaryIcon: tg,
                        toolActivityTurnKey: tf
                    } = e,
                    tb = void 0 !== ts && ts,
                    ty = void 0 !== tr && tr,
                    tj = void 0 === tu || tu,
                    tw = void 0 === tv || tv,
                    tk = void 0 === th ? null : th,
                    tN = (0, u.y)($.a);
                to[0] !== td || to[1] !== tc || to[2] !== tl ? (t = {
                    item: tl,
                    hostId: tc,
                    appInfoOverride: td
                }, to[0] = td, to[1] = tc, to[2] = tl, to[3] = t) : t = to[3];
                let {
                    matchingApp: tC,
                    pluginIcon: tS
                } = (0, ev.c)(t), tM = (0, v.a)(), {
                    platform: tI
                } = (0, U.a)();
                to[4] !== tl.callId ? (a = (0, d._e)(tl.callId), to[4] = tl.callId, to[5] = a) : a = to[5];
                let tR = a,
                    tT = (0, u.x)(K.t, tR),
                    tA = (0, u.x)(K.h, tR),
                    t_ = (0, u.x)(K.o, tR),
                    tU = tA?.content.toolCallStatus == null && tA?.content.toolResult != null;
                to[6] !== tc || to[7] !== tl || to[8] !== tT || to[9] !== tU ? (r = (0, eh.a)({
                    item: tl,
                    hostId: tc,
                    retainedState: {
                        sourceId: tT,
                        hasSuccessfulToolResult: tU
                    }
                }), to[6] = tc, to[7] = tl, to[8] = tT, to[9] = tU, to[10] = r) : r = to[10];
                let tE = r;
                to[11] !== tE || to[12] !== tw ? (w = tw && (0, D.c)() && tE.isEligible, to[11] = tE, to[12] = tw, to[13] = w) : w = to[13];
                let tP = w;
                to[14] !== ti || to[15] !== tl.callId ? (M = (0, z.a)({
                    callId: tl.callId,
                    conversationId: ti
                }), to[14] = ti, to[15] = tl.callId, to[16] = M) : M = to[16];
                let tL = M,
                    tO = (0, u.x)(z.b, tL);
                (0, Y.h)("2957382457");
                let tW = (0, u.z)(b.a);
                to[17] !== ti || to[18] !== tP ? (P = tP || !ti.startsWith("chatgpt:"), to[17] = ti, to[18] = tP, to[19] = P) : P = to[19], to[20] !== ti || to[21] !== tc || to[22] !== tl || to[23] !== t_ || to[24] !== tP || to[25] !== P ? (X = {
                    item: tl,
                    hostId: tc,
                    conversationId: ti,
                    fallback: t_,
                    enabled: tP,
                    catalogEnabled: P
                }, to[20] = ti, to[21] = tc, to[22] = tl, to[23] = t_, to[24] = tP, to[25] = P, to[26] = X) : X = to[26];
                let tD = (0, ev.a)(X),
                    {
                        isCodexAppsToolCall: tz,
                        successfulToolResult: tH,
                        resourceUri: tB,
                        toolDefinition: tq
                    } = tD,
                    {
                        elementHeightPx: tV,
                        elementRef: tJ
                    } = (0, er.a)(),
                    tG = tl.result?.type === "success" ? tl.result.content : null,
                    tF = tl.result?.type === "error" ? tl.result.error : null;
                to[27] !== tl || to[28] !== tI ? (et = (0, ei.d)({
                    item: tl,
                    platform: tI
                }), to[27] = tl, to[28] = tI, to[29] = et) : et = to[29];
                let tK = et,
                    tZ = tK?.nativeAppReference ?? null,
                    tQ = (0, ep.b)(tZ),
                    tX = tQ?.appPath ?? null;
                to[30] !== tX ? (ea = {
                    appPath: tX
                }, to[30] = tX, to[31] = ea) : ea = to[31];
                let {
                    iconSmall: t$
                } = (0, k.a)(ea);
                to[32] !== tl || to[33] !== tC || to[34] !== tg ? (ew = void 0 === tg ? (0, ed.d)(tl, null == tC ? [] : [tC])?.icon : tg, to[32] = tl, to[33] = tC, to[34] = tg, to[35] = ew) : ew = to[35];
                let tY = ew;
                if (void 0 === tg && null != tY) {
                    let e, t;
                    to[36] !== tC ? (e = null == tC ? [] : [tC], to[36] = tC, to[37] = e) : e = to[37], to[38] !== tY || to[39] !== tl || to[40] !== tj || to[41] !== e ? (t = (0, n.jsx)(Q.a, {
                        item: tl,
                        apps: e,
                        part: "icon",
                        loadMetadata: tj,
                        children: tY
                    }), to[38] = tY, to[39] = tl, to[40] = tj, to[41] = e, to[42] = t) : t = to[42], tY = t
                }
                to[43] !== tl.source?.kind || to[44] !== tH ? (eA = tl.source?.kind === "browserUse" && null != tH ? (0, f.a)(tH._meta) : null, to[43] = tl.source?.kind, to[44] = tH, to[45] = eA) : eA = to[45];
                let t1 = eA,
                    t0 = tW && !tb && tl.completed && (0, d.oi)(tl.invocation.server) && "js" === tl.invocation.tool && null != tH ? (0, ec.a)(tH._meta) : [],
                    t2 = tC ?? null;
                to[46] !== tM || to[47] !== tl.appContext || to[48] !== tl.completed || to[49] !== tl.invocation.arguments || to[50] !== tl.invocation.server || to[51] !== tl.invocation.tool || to[52] !== tl.pluginId || to[53] !== tl.result || to[54] !== tl.source || to[55] !== tl.toolDisplay || to[56] !== tQ || to[57] !== tI || to[58] !== t2 || to[59] !== tq ? (e_ = (0, eg.a)({
                    pluginId: tl.pluginId,
                    toolDisplay: tl.toolDisplay,
                    toolDefinition: tq,
                    appContext: tl.appContext,
                    completed: tl.completed,
                    intl: tM,
                    toolName: tl.invocation.tool,
                    serverName: tl.invocation.server,
                    matchingApp: t2,
                    nativeDesktopAppMetadata: tQ,
                    platform: tI,
                    source: tl.source,
                    toolArguments: tl.invocation.arguments,
                    toolResult: tl.result
                }), to[46] = tM, to[47] = tl.appContext, to[48] = tl.completed, to[49] = tl.invocation.arguments, to[50] = tl.invocation.server, to[51] = tl.invocation.tool, to[52] = tl.pluginId, to[53] = tl.result, to[54] = tl.source, to[55] = tl.toolDisplay, to[56] = tQ, to[57] = tI, to[58] = t2, to[59] = tq, to[60] = e_) : e_ = to[60];
                let t3 = e_,
                    t4 = tP && null != tB && tE.isRenderable,
                    [t5, t8] = (0, m.useState)(!1),
                    {
                        resource: t6,
                        renderData: t7,
                        state: t9,
                        refetch: ae
                    } = (0, ev.b)(tD, t4),
                    at = tA?.sessionId == null ? null : tA.content.resource,
                    aa = null == at ? t6?.resourceIdentityVerified : tA?.content.mcpAppScope.resourceIdentityVerified,
                    an = null == at ? t9.error : null,
                    ao = t4 && null == at && t9.isLoading,
                    al = (0, u.x)(K.q, tR),
                    ai = (0, u.x)(K.m, tR),
                    as = (0, V.a)({
                        hasResourceError: null != an,
                        isResourceLoading: ao,
                        isDilEnabled: !1,
                        renderData: at ?? t7,
                        resourceUri: tB ?? null,
                        shouldRenderMcpApp: t4
                    }),
                    ar = "html" === as.kind ? as.renderData : null,
                    ac = (0, J.e)({
                        data: ar,
                        error: an,
                        isLoading: ao
                    }, K.F),
                    au = "fallback" !== as.kind,
                    ad = tP && null != tB && (!au || null != an || null != al && !(al instanceof J.b) || "too-large" === ac.kind || "error" === ac.kind),
                    ap = ad || (ar?.isCollapsible ?? !0),
                    am = ai;
                ad ? am = "fallback" : "html" !== as.kind && (am = as.kind);
                let av = "pending" === am,
                    ax = "launcher" === am,
                    ah = av || ax;
                to[61] !== tA ? (eU = null != tA && tA.content.resource?.hideAttribution === !0 && (!0 === tA.content.mcpAppScope.isVerifiedFirstParty || (0, ex.b)(tA.content)), to[61] = tA, to[62] = eU) : eU = to[62];
                let ag = eU,
                    af = "inline" === am,
                    ab = void 0 !== tx && tx && t4,
                    ay = !ad && t5 || ab,
                    aj = au && !ax && (!ap || (tO ?? ay)),
                    aw = aj && !av,
                    ak = t5 || (tO ?? ab),
                    [aN, aC] = (0, m.useState)(!1),
                    aS = af && aw && aN,
                    aM = ao || av && aj;
                to[63] !== aj || to[64] !== aS || to[65] !== aM ? (eE = {
                    isLoading: aM,
                    isInlineRequested: aj,
                    isInlineOpening: aS
                }, to[63] = aj, to[64] = aS, to[65] = aM, to[66] = eE) : eE = to[66];
                let aI = (0, O.d)(tR, eE),
                    aR = !ad && (av || "html" === as.kind) ? aI : null;
                to[67] !== tq ? (eP = (0, G.b)(tq)?.resourceUri, to[67] = tq, to[68] = eP) : eP = to[68];
                let aT = eP,
                    aA = tH?._meta;
                to[69] !== aA ? (eL = c()(aA, ["_codex_apps", "resource_uri"]), to[69] = aA, to[70] = eL) : eL = to[70];
                let a_ = eL;
                to[71] !== aT || to[72] !== tz || to[73] !== tB || to[74] !== a_ || to[75] !== tq?._meta ? (eO = tz && null != aT && a_ === aT && (0, d.Hg)(tq?._meta) === tB, to[71] = aT, to[72] = tz, to[73] = tB, to[74] = a_, to[75] = tq?._meta, to[76] = eO) : eO = to[76];
                let aU = !(eO && !0 === aa && (0, O.b)({
                    isInline: !ap && ("inline" === am || av),
                    status: aR,
                    hidesAttributionAndActions: ar?.hideAttribution === !0 && !0 === ar.hideActions
                })) && (ah || !tb && (ap || "html" === as.kind && !ag));
                to[77] !== tz || to[78] !== tl.appContext?.appName || to[79] !== tl.invocation.server || to[80] !== tC?.name || to[81] !== tS?.alt ? (eW = tC?.name ?? tl.appContext?.appName ?? tS?.alt ?? (tz ? null : (0, p.a)(tl.invocation.server)), to[77] = tz, to[78] = tl.appContext?.appName, to[79] = tl.invocation.server, to[80] = tC?.name, to[81] = tS?.alt, to[82] = eW) : eW = to[82];
                let aE = eW;
                to[83] !== aE || to[84] !== tq ? (eD = (0, O.a)((0, h.a)(tq), aE), to[83] = aE, to[84] = tq, to[85] = eD) : eD = to[85];
                let aP = eD,
                    aL = ad ? tb || t5 : !ah && (tb || (au ? aw : ak));
                e: {
                    let e, t, a, n;
                    if (!aL) {
                        let e;
                        to[86] !== tG ? (e = {
                            displayContent: tG,
                            displayStructuredContentJson: null
                        }, to[86] = tG, to[87] = e) : e = to[87], ez = e;
                        break e
                    }
                    to[88] !== tl.result ? (e = tl.result?.type === "success" && null != tl.result.structuredContent ? eR(tl.result.structuredContent, 2) : null, to[88] = tl.result, to[89] = e) : e = to[89];
                    let o = e;to[90] !== tG || to[91] !== ty || to[92] !== o ? (t = ty && null != o && null != tG ? tG.filter(eM) : tG, to[90] = tG, to[91] = ty, to[92] = o, to[93] = t) : t = to[93];
                    let l = t;to[94] !== l ? (a = function(e) {
                        if (e?.length !== 1) return null;
                        let [t] = e;
                        if ("text" !== t.type || null != t.annotations) return null;
                        let a = t.text.trim();
                        if ("{" !== a[0] && "[" !== a[0]) return null;
                        try {
                            return eR(JSON.parse(a), 2)
                        } catch {
                            return null
                        }
                    }(l), to[94] = l, to[95] = a) : a = to[95];
                    let i = a;
                    if (null == i) {
                        let e;
                        to[96] !== o || to[97] !== l ? (e = {
                            displayContent: l,
                            displayStructuredContentJson: o
                        }, to[96] = o, to[97] = l, to[98] = e) : e = to[98], ez = e;
                        break e
                    }
                    if (null == o || i === o) {
                        let e, t;
                        to[99] === Symbol.for("react.memo_cache_sentinel") ? (e = [], to[99] = e) : e = to[99];
                        let a = o ?? i;
                        to[100] !== a ? (t = {
                            displayContent: e,
                            displayStructuredContentJson: a
                        }, to[100] = a, to[101] = t) : t = to[101], ez = t;
                        break e
                    }
                    to[102] !== o || to[103] !== l ? (n = {
                        displayContent: l,
                        displayStructuredContentJson: o
                    }, to[102] = o, to[103] = l, to[104] = n) : n = to[104],
                    ez = n
                }
                let {
                    displayContent: aO,
                    displayStructuredContentJson: aW
                } = ez, [aD, az] = (0, m.useState)(!1);
                t: {
                    let e;
                    if (!aD) {
                        eH = null;
                        break t
                    }
                    to[105] !== tl.callId || to[106] !== tl.durationMs || to[107] !== tl.invocation || to[108] !== tl.result ? (e = eR({
                        callId: tl.callId,
                        invocation: tl.invocation,
                        durationMs: tl.durationMs,
                        result: tl.result
                    }, 2), to[105] = tl.callId, to[106] = tl.durationMs, to[107] = tl.invocation, to[108] = tl.result, to[109] = e) : e = to[109],
                    eH = e
                }
                let aH = eH;
                to[110] !== tM ? (eB = tM.formatMessage({
                    id: "codex.mcpTool.rawOutputTriggerTooltip",
                    defaultMessage: "Show raw tool call output",
                    description: "Tooltip for the button that opens the raw MCP tool output dialog"
                }), to[110] = tM, to[111] = eB) : eB = to[111];
                let aB = eB,
                    aq = tl.completed || null != tl.result || au,
                    aV = aL ? tV : 0,
                    aJ = !tl.completed;
                to[112] !== tC ? (eq = null == tC ? [] : [tC], to[112] = tC, to[113] = eq) : eq = to[113], to[114] !== tl || to[115] !== tj || to[116] !== eq || to[117] !== t3 ? (eV = (0, n.jsx)(Q.a, {
                    item: tl,
                    apps: eq,
                    part: "label",
                    loadMetadata: tj,
                    children: t3
                }), to[114] = tl, to[115] = tj, to[116] = eq, to[117] = t3, to[118] = eV) : eV = to[118], to[119] !== aJ || to[120] !== eV ? (eJ = (0, n.jsx)(ef.a, {
                    active: aJ,
                    className: "min-w-0 shrink truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                    children: eV
                }), to[119] = aJ, to[120] = eV, to[121] = eJ) : eJ = to[121];
                let aG = eJ;
                to[122] !== tY || to[123] !== t1 || to[124] !== tc || to[125] !== tl || to[126] !== tj || to[127] !== tC || to[128] !== t$ || to[129] !== tQ?.displayName || to[130] !== tZ || to[131] !== tK || to[132] !== tS ? (eG = void 0 !== tY ? tY : (0, n.jsx)(eo.a, {
                    hostId: tc,
                    item: tl,
                    loadRemoteLogos: tj,
                    fallback: null == tS && null != tZ ? (0, n.jsx)(N.a, {
                        alt: tQ?.displayName ?? tK?.name ?? tl.invocation.server,
                        className: "icon-xs shrink-0 scale-[1.15] object-contain",
                        loadRemote: tj,
                        logoUrl: t$,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(A.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: ek.a
                        })
                    }) : null == tS && tK?.groupKey === ei.b ? (0, n.jsx)(A.a, {
                        className: "shrink-0 text-secondary",
                        asset: ek.a
                    }) : null == tS && tK?.logoUrl != null ? (0, n.jsx)(N.a, {
                        alt: tK.name,
                        className: "icon-xs shrink-0 object-contain",
                        loadRemote: tj,
                        logoUrl: tK.logoUrl,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(A.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: eN.a
                        })
                    }) : null == tS && tK?.usesBrowserIcon === !0 ? null == t1 ? (0, n.jsx)(A.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: eS.a
                    }) : (0, n.jsx)(T.a, {
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        href: t1,
                        loadRemote: tj
                    }) : null == tS && (0, d.oi)(tl.invocation.server) ? (0, n.jsx)(A.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: eC.a
                    }) : (0, n.jsx)(N.a, {
                        alt: tS?.alt ?? tC?.name ?? tl.appContext?.appName ?? tl.invocation.server,
                        appInfo: null == tS ? tC : null,
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        loadRemote: tj,
                        knownAppId: tS?.knownAppId ?? tl.appContext?.appName ?? tl.appContext?.connectorId,
                        logoUrl: tS?.logoUrl,
                        fallback: (0, n.jsx)(A.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: eN.a
                        })
                    })
                }), to[122] = tY, to[123] = t1, to[124] = tc, to[125] = tl, to[126] = tj, to[127] = tC, to[128] = t$, to[129] = tQ?.displayName, to[130] = tZ, to[131] = tK, to[132] = tS, to[133] = eG) : eG = to[133];
                let aF = eG;
                to[134] !== tk || to[135] !== aF || to[136] !== aG ? (eF = tk ?? (0, n.jsxs)(n.Fragment, {
                    children: [aF, aG]
                }), to[134] = tk, to[135] = aF, to[136] = aG, to[137] = eF) : eF = to[137];
                let aK = eF;
                to[138] !== ak || to[139] !== aj || to[140] !== t5 || to[141] !== tL || to[142] !== tp || to[143] !== tN || to[144] !== ab || to[145] !== ad || to[146] !== au || to[147] !== af || to[148] !== tf || to[149] !== tO ? (eK = () => {
                    if (ad) {
                        t5 || tp?.(), t8(!t5);
                        return
                    }
                    let e = au ? !aj : !ak;
                    if (e && tp?.(), au) {
                        aC(e && af), tN.set(z.b, tL, e);
                        return
                    }
                    e && null != tf && (0, es.b)(tN, tf), !e && (!0 === tO || ab) && tN.set(z.b, tL, !1), t8(e)
                }, to[138] = ak, to[139] = aj, to[140] = t5, to[141] = tL, to[142] = tp, to[143] = tN, to[144] = ab, to[145] = ad, to[146] = au, to[147] = af, to[148] = tf, to[149] = tO, to[150] = eK) : eK = to[150];
                let aZ = eK;
                to[151] !== tl.automaticApprovalReviews ? (eZ = null == tl.automaticApprovalReviews ? null : (0, n.jsx)(en.a, {}), to[151] = tl.automaticApprovalReviews, to[152] = eZ) : eZ = to[152];
                let aQ = eZ,
                    aX = aq && "opening" !== aR && !ax && ap ? {
                        alignEnd: af && aw,
                        expanded: aL,
                        onToggle: aZ
                    } : void 0,
                    a$ = (0, i.b)("group", af && aw && (ar?.prefersBorder ?? tA?.content.resource?.prefersBorder ?? !0) && "overflow-hidden rounded-lg border border-strong bg-surface"),
                    aY = ax && "w-full",
                    a1 = af && aw && "w-full px-4 pt-3 pb-2";
                to[153] !== aY || to[154] !== a1 ? (eQ = (0, i.b)(aY, a1), to[153] = aY, to[154] = a1, to[155] = eQ) : eQ = to[155];
                let a0 = eQ;
                to[156] !== aQ || to[157] !== aX || to[158] !== a0 || to[159] !== ao || to[160] !== tR || to[161] !== aK || to[162] !== aF || to[163] !== aP || to[164] !== aR ? (eX = null != aR ? (0, n.jsx)(W.a, {
                    accessory: aQ,
                    className: a0,
                    disabled: ao,
                    disclosure: aX,
                    icon: aF,
                    mcpAppId: tR,
                    name: aP,
                    status: aR
                }) : (0, n.jsx)(ey.a, {
                    accessory: aQ,
                    className: a0,
                    disclosure: aX,
                    children: aK
                }), to[156] = aQ, to[157] = aX, to[158] = a0, to[159] = ao, to[160] = tR, to[161] = aK, to[162] = aF, to[163] = aP, to[164] = aR, to[165] = eX) : eX = to[165];
                let a2 = eX;
                to[166] !== ae ? (e$ = () => {
                    ae({
                        cancelRefetch: !1
                    })
                }, to[166] = ae, to[167] = e$) : e$ = to[167];
                let a3 = (0, n.jsx)(q.a, {
                        hostDisplayModes: K.F,
                        resource: {
                            data: null == tB ? null : ar,
                            error: an,
                            isLoading: ao
                        },
                        inlineSurface: af ? "card" : "standalone",
                        mcpAppId: tR,
                        appName: aE ?? void 0,
                        presentation: ad ? "inline" : ai,
                        onRetryResourceRead: e$,
                        showLoadingStatus: !aU
                    }),
                    a4 = s.a,
                    a5 = +!!aL;
                to[168] !== a5 || to[169] !== aV ? (eY = {
                    height: aV,
                    opacity: a5
                }, to[168] = a5, to[169] = aV, to[170] = eY) : eY = to[170];
                let a8 = ee.a,
                    a6 = aL ? "overflow-visible" : "overflow-hidden";
                to[171] !== a6 ? (e1 = (0, i.b)(a6), to[171] = a6, to[172] = e1) : e1 = to[172];
                let a7 = aL ? "auto" : "none";
                to[173] !== a7 ? (e0 = {
                    pointerEvents: a7
                }, to[173] = a7, to[174] = e0) : e0 = to[174], to[175] !== aw ? (e2 = () => {
                    aw && aC(!1)
                }, to[175] = aw, to[176] = e2) : e2 = to[176];
                let a9 = eb.a,
                    ne = aL ? tJ : null,
                    nt = t4 && "relative",
                    na = !ap && "py-1";
                to[177] !== nt || to[178] !== na ? (e3 = (0, i.b)(nt, na), to[177] = nt, to[178] = na, to[179] = e3) : e3 = to[179];
                let nn = !af && ap ? "grouped" : "flush",
                    no = aL ? (0, n.jsxs)(n.Fragment, {
                        children: [null == tl.automaticApprovalReviews ? null : (0, n.jsx)(en.d, {
                            className: af ? "px-4" : void 0,
                            isExpandable: !af,
                            reviews: tl.automaticApprovalReviews
                        }), au ? aS ? (0, n.jsx)(B.a, {
                            className: "w-full",
                            height: (0, H.a)(null, ar?.heightHint ?? null, ar?.minFrameHeight ?? null),
                            showLoadingStatus: !1
                        }) : a3 : aO && aO.length > 0 ? (0, n.jsx)("div", {
                            className: (0, i.b)("[&_*]:text-text/50", "flex flex-col gap-0.5"),
                            children: aO.map((e, t) => (0, n.jsx)(eT, {
                                block: e,
                                conversationId: ti,
                                hostId: tc
                            }, t))
                        }) : tF ? (0, n.jsx)(_.a, {
                            className: "w-full",
                            fullWidth: !0,
                            level: "danger",
                            children: (0, n.jsx)("div", {
                                className: "max-h-48 overflow-auto text-size-chat whitespace-pre-wrap",
                                children: tF
                            })
                        }) : aW ? null : (0, n.jsx)("p", {
                            className: "text-codex-description/80",
                            children: (0, n.jsx)(x.a, {
                                id: "codex.mcpTool.noResult",
                                defaultMessage: "Tool returned no content",
                                description: "Message shown when an MCP tool call produced no content"
                            })
                        }), !ao && aL && !aS && !au && aW && (0, n.jsx)(S.CodeSnippet, {
                            codeContainerClassName: "max-h-48 overflow-auto",
                            language: "json",
                            content: aW,
                            showStickyRightContent: !1
                        }), !ao && aL && !aS && (0, n.jsx)(I.a, {
                            open: aD,
                            onOpenChange: az,
                            triggerContent: (0, n.jsx)("div", {
                                className: (0, i.b)("inline-flex w-fit", t4 && "absolute right-1 bottom-2 z-50"),
                                children: (0, n.jsx)(l.a, {
                                    side: "top",
                                    align: "center",
                                    content: aB,
                                    children: (0, n.jsx)(C.a, {
                                        className: "cursor-interaction opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 focus-visible:opacity-100",
                                        "aria-label": aB,
                                        color: "ghost",
                                        onClick: () => {
                                            az(!0)
                                        },
                                        size: "icon",
                                        children: (0, n.jsx)(E.a, {
                                            className: "icon-xxs"
                                        })
                                    })
                                })
                            }),
                            children: (0, n.jsxs)(R.b, {
                                children: [(0, n.jsx)(R.e, {
                                    children: (0, n.jsx)(R.d, {
                                        title: (0, n.jsx)(I.d, {
                                            children: (0, n.jsx)(x.a, {
                                                id: "codex.mcpTool.rawOutputHeading",
                                                defaultMessage: "Raw {server}.{tool} tool call output",
                                                description: "Heading shown within the raw output dialog",
                                                values: {
                                                    server: tl.invocation.server,
                                                    tool: tl.invocation.tool
                                                }
                                            })
                                        })
                                    })
                                }), (0, n.jsx)(R.e, {
                                    children: null == aH ? null : (0, n.jsx)(S.CodeSnippet, {
                                        codeContainerClassName: "max-h-128 overflow-auto",
                                        language: "json",
                                        content: aH,
                                        showStickyRightContent: !0
                                    })
                                })]
                            })
                        })]
                    }) : null;
                to[180] !== a9 || to[181] !== ne || to[182] !== e3 || to[183] !== nn || to[184] !== no ? (e4 = (0, n.jsx)(a9, {
                    ref: ne,
                    className: e3,
                    variant: nn,
                    children: no
                }), to[180] = a9, to[181] = ne, to[182] = e3, to[183] = nn, to[184] = no, to[185] = e4) : e4 = to[185], to[186] !== a4.div || to[187] !== eY || to[188] !== a8 || to[189] !== e1 || to[190] !== e0 || to[191] !== e2 || to[192] !== e4 ? (e5 = (0, n.jsx)(a4.div, {
                    initial: !1,
                    animate: eY,
                    transition: a8,
                    className: e1,
                    style: e0,
                    onAnimationComplete: e2,
                    children: e4
                }), to[186] = a4.div, to[187] = eY, to[188] = a8, to[189] = e1, to[190] = e0, to[191] = e2, to[192] = e4, to[193] = e5) : e5 = to[193];
                let nl = e5;
                to[194] !== tl || to[195] !== tm ? (e8 = (0, el.a)(tl) ? (0, n.jsx)(eb.a, {
                    variant: "grouped",
                    children: (0, n.jsx)(_.a, {
                        className: "w-full",
                        fullWidth: !0,
                        level: "warning",
                        actions: null == tm ? void 0 : (0, n.jsx)(C.a, {
                            color: "secondary",
                            onClick: tm,
                            children: (0, n.jsx)(x.a, {
                                id: "codex.mcpTool.reviewPermissions",
                                defaultMessage: "Review permissions",
                                description: "Opens the existing permissions menu for the chat whose tool call could not request approval"
                            })
                        }),
                        children: null == tm ? (0, n.jsx)(x.a, {
                            id: "codex.mcpTool.approvalRequestsDisabled",
                            defaultMessage: "Approval requests were disabled for this tool call. If available, review this chat’s permissions before retrying.",
                            description: "Explanation on a failed MCP tool call that needed approval but could not request it. Suggests the existing permissions control for this chat, which may be unavailable in read-only views or restricted by policy. Does not promise that restrictions can be overridden."
                        }) : (0, n.jsx)(x.a, {
                            id: "codex.mcpTool.approvalRequestsDisabled.recovery",
                            defaultMessage: "Approval requests were disabled for this tool call. Choose “Ask for approval” in this chat’s permissions if available, then ask to retry.",
                            description: "Explains that the tool call was blocked before approval could be requested. The adjacent action opens this chat's permissions menu; the user must select an allowed mode and ask to retry. Managed policy may limit the available modes."
                        })
                    })
                }) : null, to[194] = tl, to[195] = tm, to[196] = e8) : e8 = to[196];
                let ni = ah ? a3 : nl;
                to[197] !== e8 || to[198] !== ni ? (e6 = (0, n.jsxs)(n.Fragment, {
                    children: [e8, ni]
                }), to[197] = e8, to[198] = ni, to[199] = e6) : e6 = to[199];
                let ns = e6;
                to[200] !== tl ? (e7 = (0, g.a)(tl), to[200] = tl, to[201] = e7) : e7 = to[201];
                let nr = e7;
                if (null != nr) {
                    let e;
                    return to[202] !== nr.id || to[203] !== nr.schedule || to[204] !== nr.title ? (e = (0, n.jsx)(L.a, {
                        id: nr.id,
                        mode: "view",
                        name: nr.title,
                        rrule: nr.schedule
                    }), to[202] = nr.id, to[203] = nr.schedule, to[204] = nr.title, to[205] = e) : e = to[205], e
                }
                to[206] !== tc || to[207] !== tl ? (e9 = (0, Z.b)(tl, tc), to[206] = tc, to[207] = tl, to[208] = e9) : e9 = to[208];
                let nc = e9;
                if (nc?.type === "chatgpt-automation") {
                    let e;
                    return to[209] !== nc ? (e = (0, n.jsx)(y.a, {
                        automation: nc
                    }), to[209] = nc, to[210] = e) : e = to[210], e
                }
                if (nc?.type === "chatgpt-automation-list") {
                    let e;
                    return to[211] !== nc.automations ? (e = (0, n.jsx)(j.a, {
                        automations: nc.automations
                    }), to[211] = nc.automations, to[212] = e) : e = to[212], e
                }
                to[213] !== aj || to[214] !== tR || to[215] !== tw || to[216] !== tN || to[217] !== t4 ? (te = tw || "chatgpt-thread" !== tN.value.routeKind ? (0, n.jsx)(F.b, {
                    mcpAppId: tR,
                    isInlineRequested: t4 && aj
                }) : null, to[213] = aj, to[214] = tR, to[215] = tw, to[216] = tN, to[217] = t4, to[218] = te) : te = to[218], to[219] !== aQ || to[220] !== a$ || to[221] !== aX || to[222] !== aU || to[223] !== a0 || to[224] !== ns || to[225] !== af || to[226] !== tk || to[227] !== tg || to[228] !== aG || to[229] !== a2 || to[230] !== aR ? (tt = void 0 !== tg && aU && null == aR ? (0, n.jsx)(eu.a, {
                    accessory: aQ,
                    body: ns,
                    className: a$,
                    "data-mcp-app-card": !!af || void 0,
                    disclosure: aX,
                    headerClassName: a0,
                    icon: tg,
                    summary: tk ?? aG
                }) : (0, n.jsx)(ej.a, {
                    className: a$,
                    "data-mcp-app-card": !!af || void 0,
                    header: aU ? a2 : null,
                    body: ns
                }), to[219] = aQ, to[220] = a$, to[221] = aX, to[222] = aU, to[223] = a0, to[224] = ns, to[225] = af, to[226] = tk, to[227] = tg, to[228] = aG, to[229] = a2, to[230] = aR, to[231] = tt) : tt = to[231], to[232] !== t1 || to[233] !== tl.callId || to[234] !== tj ? (ta = (e, t) => (0, n.jsxs)(m.Fragment, {
                    children: [(0, n.jsx)(em.a, {
                        variant: "grouped"
                    }), (0, n.jsx)(eI, {
                        call: e,
                        fallbackPageUrl: t1,
                        loadRemoteLogos: tj
                    })]
                }, `${tl.callId}:webmcp:${t}:${e.name}`), to[232] = t1, to[233] = tl.callId, to[234] = tj, to[235] = ta) : ta = to[235];
                let nu = t0.map(ta);
                return to[236] !== te || to[237] !== tt || to[238] !== nu ? (tn = (0, n.jsxs)(n.Fragment, {
                    children: [te, tt, nu]
                }), to[236] = te, to[237] = tt, to[238] = nu, to[239] = tn) : tn = to[239], tn
            }
        })
    }),
    KU8M: (function(e, t, a) {
        var n = a("BolX"),
            o = a("wWGv"),
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
                return void 0 === m || (0, o.Hg)(m?._meta) === c.appContext.resourceUri && null != (0, i.c)(m, c.appContext) ? p : u(r.r, d)
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
            i = a("wWGv"),
            s = a("sM3V"),
            r = a("KJ1J"),
            c = a("FvYa"),
            u = a("zUz7"),
            d = a("LF5P");
        a.d(t, {}, {
            a: function(e) {
                let t, a, p, m, v = (0, o.c)(14),
                    {
                        fallback: x,
                        hostId: h,
                        item: g,
                        loadRemoteLogos: f
                    } = e,
                    b = g.invocation.server;
                v[0] !== g.threadId ? (t = (0, i.Re)(g.threadId), v[0] = g.threadId, v[1] = t) : t = v[1], v[2] !== h || v[3] !== g.invocation.server || v[4] !== t ? (a = {
                    hostId: h,
                    serverName: b,
                    threadId: t
                }, v[2] = h, v[3] = g.invocation.server, v[4] = t, v[5] = a) : a = v[5];
                let y = (0, l.x)(!f || null != (0, d.d)({
                    item: g
                }) || (0, i.oi)(g.invocation.server) || (0, r.f)(g.invocation.server) ? null : s.a, a);
                v[6] !== y ? (p = (0, u.a)(y), v[6] = y, v[7] = p) : p = v[7];
                let j = p;
                return v[8] !== x || v[9] !== j || v[10] !== g.invocation.server || v[11] !== y?.name || v[12] !== y?.title ? (m = null == j ? x : (0, n.jsx)(c.a, {
                    alt: y?.title ?? y?.name ?? g.invocation.server,
                    className: "icon-xs shrink-0 object-contain",
                    logoUrl: j.logoUrl,
                    logoDarkUrl: j.logoDarkUrl,
                    fallback: x
                }), v[8] = x, v[9] = j, v[10] = g.invocation.server, v[11] = y?.name, v[12] = y?.title, v[13] = m) : m = v[13], m
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
            r = a("wWGv"),
            c = a("Wf1j"),
            u = a("jqIZ"),
            d = a("qKlE"),
            p = a("OusJ"),
            m = a("odKs"),
            v = a("GIgU");
        a("bN4H");
        var x = a("TleN"),
            h = a("TL6G"),
            g = a("tSEg");

        function f(e) {
            return "string" == typeof e
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, l, b, y, j, w, k, N, C, S, M, I, R, T, A, _, U, E = (0, o.c)(130),
                    {
                        elicitation: P,
                        result: L,
                        id: O,
                        kind: W,
                        mode: D,
                        name: z,
                        prompt: H,
                        rrule: B,
                        projectId: q,
                        cwds: V,
                        destination: J,
                        executionEnvironment: G,
                        localEnvironmentConfigPath: F,
                        model: K,
                        reasoningEffort: Z,
                        notificationPolicy: Q,
                        targetThreadId: X,
                        status: $
                    } = e,
                    Y = void 0 === L ? null : L,
                    ee = (0, s.y)(g.a),
                    et = (0, c.a)();
                (0, x.a)();
                let ea = (0, u.Z)("/remote/:conversationId"),
                    en = (0, u.Z)("/local/:conversationId"),
                    eo = (0, s.z)(v.e),
                    el = X ?? null;
                E[0] !== V || E[1] !== J || E[2] !== G || E[3] !== O || E[4] !== W || E[5] !== F || E[6] !== D || E[7] !== K || E[8] !== z || E[9] !== Q || E[10] !== q || E[11] !== H || E[12] !== Z || E[13] !== el || E[14] !== B || E[15] !== $ ? (t = JSON.stringify({
                    id: O,
                    kind: W,
                    mode: D,
                    name: z,
                    prompt: H,
                    rrule: B,
                    projectId: q,
                    cwds: V,
                    destination: J,
                    executionEnvironment: G,
                    localEnvironmentConfigPath: F,
                    model: K,
                    reasoningEffort: Z,
                    notificationPolicy: Q,
                    targetThreadId: el,
                    status: $
                }), E[0] = V, E[1] = J, E[2] = G, E[3] = O, E[4] = W, E[5] = F, E[6] = D, E[7] = K, E[8] = z, E[9] = Q, E[10] = q, E[11] = H, E[12] = Z, E[13] = el, E[14] = B, E[15] = $, E[16] = t) : t = E[16];
                let ei = t,
                    es = eo?.directiveKey === ei ? eo.automationId : null,
                    er = es ?? Y?.automationId ?? O,
                    ec = Y?.snapshot ?? null,
                    eu = "view" === D ? D : null,
                    ed = "view" === D && null != O,
                    ep = null != O && (ed || "suggested-update" === D),
                    em = (0, s.z)(d.c),
                    ev = em.data,
                    ex = !!ep && em.isLoading;
                if (E[17] !== ev || E[18] !== es || E[19] !== V || E[20] !== O || E[21] !== et || E[22] !== ex || E[23] !== ed || E[24] !== W || E[25] !== D || E[26] !== z || E[27] !== q || E[28] !== H || E[29] !== er || E[30] !== el || E[31] !== Y?.automationId || E[32] !== Y?.mode || E[33] !== ec?.name || E[34] !== ec?.rrule || E[35] !== B || E[36] !== $) {
                    var eh;
                    let e, t, n, o, s, c, u, d, p, v, x = null != O ? ev?.items.find(e => e.id === O) ?? null : null;
                    E[46] !== ev?.items || E[47] !== es || E[48] !== et || E[49] !== ex || E[50] !== ed || E[51] !== D || E[52] !== z || E[53] !== er || E[54] !== Y?.mode || E[55] !== ec?.name || E[56] !== ec?.rrule || E[57] !== B ? ({
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
                        isViewMode: ed,
                        mode: Y?.mode ?? D,
                        isSuggestionAccepted: null != es,
                        trimmedId: er ?? null,
                        trimmedName: z ?? ec?.name ?? null,
                        trimmedRrule: B ?? ec?.rrule ?? null,
                        automations: ev?.items ?? null,
                        isLoading: ex
                    }), o = et.formatMessage({
                        id: "settings.automations.rruleSummaryFallback",
                        defaultMessage: "Custom schedule",
                        description: "Fallback label when RRULE summary cannot be generated"
                    }), s = (0, m.f)({
                        rrule: n,
                        intl: et,
                        fallbackMessage: o
                    }), E[46] = ev?.items, E[47] = es, E[48] = et, E[49] = ex, E[50] = ed, E[51] = D, E[52] = z, E[53] = er, E[54] = Y?.mode, E[55] = ec?.name, E[56] = ec?.rrule, E[57] = B, E[58] = t, E[59] = w, E[60] = n, E[61] = o, E[62] = s) : (t = E[58], w = E[59], n = E[60], o = E[61], s = E[62]);
                    let h = s;
                    E[63] !== et ? (c = et.formatMessage({
                        id: "settings.automations.loading",
                        defaultMessage: "Loading…",
                        description: "Loading state for workflows list"
                    }), E[63] = et, E[64] = c) : c = E[64];
                    let g = c;
                    E[65] !== et ? (u = et.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task",
                        description: "Fallback title when scheduled task name is missing"
                    }), E[65] = et, E[66] = u) : u = E[66];
                    let f = u;
                    E[67] !== D || E[68] !== Y?.mode ? (d = Y?.mode ?? D, E[67] = D, E[68] = Y?.mode, E[69] = d) : d = E[69], a = (y = "delete" === (b = d)) || Y?.automationId != null ? Y?.automationId ?? O ?? null : er, E[70] !== a || E[71] !== y ? (p = y ? (eh = a ?? null, 0 === (e = eh?.trim() ?? "").length ? null : /^[0-9a-f]{8}-[0-9a-f-]+$/i.test(e) ? e : i()(e.replace(/[-_]+/g, " "))) : null, E[70] = a, E[71] = y, E[72] = p) : p = E[72];
                    let S = p;
                    C = t ? g : w || S || f, E[73] !== S || E[74] !== et || E[75] !== w ? (v = w ?? S ?? et.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task",
                        description: "Fallback title when scheduled task name is missing"
                    }), E[73] = S, E[74] = et, E[75] = w, E[76] = v) : v = E[76], N = v, j = h || (t ? g : null != n ? o : null), l = null != z && null != H && null != B && ("heartbeat" === W ? null != el : void 0 !== q || null != V), k = null != O && null != $ && null != z && null != H && null != B && (null == x ? "heartbeat" === W ? null != el : void 0 !== q || null != V : !!(0, r.di)(x) || void 0 !== q || null != V), E[17] = ev, E[18] = es, E[19] = V, E[20] = O, E[21] = et, E[22] = ex, E[23] = ed, E[24] = W, E[25] = D, E[26] = z, E[27] = q, E[28] = H, E[29] = er, E[30] = el, E[31] = Y?.automationId, E[32] = Y?.mode, E[33] = ec?.name, E[34] = ec?.rrule, E[35] = B, E[36] = $, E[37] = a, E[38] = l, E[39] = b, E[40] = y, E[41] = j, E[42] = w, E[43] = k, E[44] = N, E[45] = C
                } else a = E[37], l = E[38], b = E[39], y = E[40], j = E[41], w = E[42], k = E[43], N = E[44], C = E[45];
                let eg = k,
                    ef = "suggested-update" === D && ep && em.isLoading,
                    eb = "suggested-create" === D || "suggested-update" === D,
                    ey = eb ? P : void 0,
                    ej = O ?? null,
                    ew = W ?? null,
                    ek = z ?? "",
                    eN = H ?? "",
                    eC = B ?? "";
                E[77] !== V ? (S = V ?? [], E[77] = V, E[78] = S) : S = E[78];
                let eS = void 0 !== q ? q : V?.[0] === r.fd ? null : V?.[0] ?? null,
                    eM = G ?? null,
                    eI = F ?? null,
                    eR = K ?? null,
                    eT = Z ?? null;
                E[79] !== Q ? (M = void 0 !== Q ? {
                    notificationPolicy: Q
                } : {}, E[79] = Q, E[80] = M) : M = E[80];
                let eA = $ ?? null;
                E[81] !== ei || E[82] !== eu || E[83] !== el || E[84] !== S || E[85] !== eS || E[86] !== eM || E[87] !== eI || E[88] !== eR || E[89] !== eT || E[90] !== M || E[91] !== eA || E[92] !== ey || E[93] !== ej || E[94] !== ew || E[95] !== ek || E[96] !== eN || E[97] !== eC ? (I = {
                    elicitation: ey,
                    directiveKey: ei,
                    mode: eu,
                    id: ej,
                    kind: ew,
                    name: ek,
                    prompt: eN,
                    rrule: eC,
                    cwds: S,
                    projectId: eS,
                    executionEnvironment: eM,
                    localEnvironmentConfigPath: eI,
                    model: eR,
                    reasoningEffort: eT,
                    ...M,
                    targetThreadId: el,
                    status: eA
                }, E[81] = ei, E[82] = eu, E[83] = el, E[84] = S, E[85] = eS, E[86] = eM, E[87] = eI, E[88] = eR, E[89] = eT, E[90] = M, E[91] = eA, E[92] = ey, E[93] = ej, E[94] = ew, E[95] = ek, E[96] = eN, E[97] = eC, E[98] = I) : I = E[98];
                let e_ = I,
                    eU = null != es;
                E[99] !== l || E[100] !== eg || E[101] !== eu || E[102] !== ed || E[103] !== eU ? (R = (0, v.A)({
                    directiveMode: eu,
                    canCreate: l,
                    canUpdate: eg,
                    isViewMode: ed,
                    forceOpen: eU
                }), E[99] = l, E[100] = eg, E[101] = eu, E[102] = ed, E[103] = eU, E[104] = R) : R = E[104];
                let eE = R,
                    eP = y ? null : j;
                E[105] !== eE || E[106] !== a || E[107] !== es || E[108] !== e_ || E[109] !== ef || E[110] !== eb || E[111] !== en || E[112] !== ea || E[113] !== ee || E[114] !== N ? (T = () => {
                    if (ef) return;
                    let e = a;
                    null != e ? h.c.dispatchHostMessage({
                        type: "navigate-to-route",
                        path: `/automations?automationId=${e}`
                    }) : "create" === eE && (ee.set(v.e, null), ee.set(v.f, e_), h.c.dispatchHostMessage({
                        type: "navigate-to-route",
                        path: "/automations?automationMode=create"
                    }))
                }, E[105] = eE, E[106] = a, E[107] = es, E[108] = e_, E[109] = ef, E[110] = eb, E[111] = en, E[112] = ea, E[113] = ee, E[114] = N, E[115] = T) : T = E[115];
                let eL = T,
                    eO = !y && !ef && (null != a || "create" === eE),
                    eW = Y?.deleteStatus;
                E[116] !== b || E[117] !== et || E[118] !== eW ? (A = function(e) {
                    let {
                        deleteStatus: t,
                        intl: a,
                        mode: n
                    } = e;
                    return "create" === n ? a.formatMessage({
                        id: "automation.updateDirective.created",
                        defaultMessage: "Created",
                        description: "Action label for an automation citation after creating an automation"
                    }) : "update" === n ? a.formatMessage({
                        id: "automation.updateDirective.updated",
                        defaultMessage: "Updated",
                        description: "Action label for an automation citation after updating an automation"
                    }) : "delete" === n ? "not_found" === t ? a.formatMessage({
                        id: "automation.updateDirective.missing",
                        defaultMessage: "Missing",
                        description: "Action label for an automation citation when the automation was already missing"
                    }) : a.formatMessage({
                        id: "automation.updateDirective.deleted",
                        defaultMessage: "Deleted",
                        description: "Action label for an automation citation after deleting an automation"
                    }) : "suggested-create" === n ? a.formatMessage({
                        id: "automation.updateDirective.proposed",
                        defaultMessage: "Proposed",
                        description: "Action label for an automation citation that proposes creating an automation"
                    }) : "suggested-update" === n ? a.formatMessage({
                        id: "automation.updateDirective.proposedUpdate",
                        defaultMessage: "Proposed update",
                        description: "Action label for an automation citation that proposes updating an automation"
                    }) : a.formatMessage({
                        id: "automation.updateDirective.automation",
                        defaultMessage: "Scheduled task",
                        description: "Generic action label for a scheduled task citation"
                    })
                }({
                    deleteStatus: eW,
                    intl: et,
                    mode: b
                }), E[116] = b, E[117] = et, E[118] = eW, E[119] = A) : A = E[119];
                let eD = A;
                E[120] !== eD || E[121] !== w || E[122] !== eP ? (_ = [eD, w, eP].filter(f), E[120] = eD, E[121] = w, E[122] = eP, E[123] = _) : _ = E[123];
                let ez = _.join(" · "),
                    eH = eP ?? eD,
                    eB = ez || void 0;
                return E[124] !== eO || E[125] !== eL || E[126] !== eH || E[127] !== eB || E[128] !== C ? (U = (0, n.jsx)(p.a, {
                    title: C,
                    subtitle: eH,
                    ariaLabel: eB,
                    canOpen: eO,
                    onOpen: eL
                }), E[124] = eO, E[125] = eL, E[126] = eH, E[127] = eB, E[128] = C, E[129] = U) : U = E[129], U
            }
        })
    }),
    IN8o: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            l = a("slpy"),
            i = a("BolX"),
            s = a("Wf1j"),
            r = a("oyxz"),
            c = a("wD9O"),
            u = a("Sm6l"),
            d = a("bf6R"),
            p = a("umSm"),
            m = a("jKy0"),
            v = a("tSEg"),
            x = a("nMdB"),
            h = a("FWVQ"),
            g = a("qZWE");

        function f(e) {
            let t, a, l, i = (0, o.c)(9),
                {
                    name: c,
                    status: u
                } = e,
                d = (0, s.a)(),
                m = "opening" === u;
            return i[0] !== d || i[1] !== c ? (t = c ?? d.formatMessage(h.c), i[0] = d, i[1] = c, i[2] = t) : t = i[2], i[3] !== u || i[4] !== t ? (a = (0, n.jsx)(r.a, {
                id: "mcpApp.activity.status",
                defaultMessage: "{status, select, opening {Opening {name}} open {Opened {name}} error {Couldn’t open {name}} other {Open {name}}}",
                description: "Widget activity row: loading, successfully opened, or an action to reopen. The same human-facing tool or view name is used in every state.",
                values: {
                    status: u,
                    name: t
                }
            }), i[3] = u, i[4] = t, i[5] = a) : a = i[5], i[6] !== m || i[7] !== a ? (l = (0, n.jsx)(p.a, {
                active: m,
                role: "status",
                className: "min-w-0 shrink truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                children: a
            }), i[6] = m, i[7] = a, i[8] = l) : l = i[8], l
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, r, p, h, b, y, j = (0, o.c)(28),
                    {
                        mcpAppId: w,
                        name: k,
                        status: N,
                        disabled: C,
                        icon: S,
                        accessory: M,
                        className: I,
                        disclosure: R
                    } = e,
                    T = (0, i.y)(v.a),
                    A = (0, c.c)(),
                    _ = (0, s.a)(),
                    U = (0, i.x)(C ? null : g.p, w);
                j[0] !== _ ? (t = _.formatMessage({
                    id: "codex.mcpTool.openAppInTab",
                    defaultMessage: "Open app in tab",
                    description: "Opens an MCP app in a tab from its tool call row"
                }), j[0] = _, j[1] = t) : t = j[1];
                let E = t;
                j[2] !== U?.inline || j[3] !== R || j[4] !== w || j[5] !== T || j[6] !== N ? (a = R ?? ("closed" === N && U?.inline ? {
                    expanded: !1,
                    onToggle: () => (0, g.x)(T, w, "inline")
                } : void 0), j[2] = U?.inline, j[3] = R, j[4] = w, j[5] = T, j[6] = N, j[7] = a) : a = j[7];
                let P = a;
                return j[8] !== U?.tab || j[9] !== E || j[10] !== w || j[11] !== T ? (r = U?.tab ? (0, n.jsx)(l.a, {
                    content: E,
                    children: (0, n.jsx)(u.a, {
                        className: "relative",
                        "aria-label": E,
                        color: "ghost",
                        size: "icon",
                        onClick: () => (0, g.x)(T, w, "fullscreen"),
                        children: (0, n.jsx)(d.N, {})
                    })
                }) : null, j[8] = U?.tab, j[9] = E, j[10] = w, j[11] = T, j[12] = r) : r = j[12], j[13] !== M || j[14] !== r ? (p = (0, n.jsxs)(n.Fragment, {
                    children: [r, M]
                }), j[13] = M, j[14] = r, j[15] = p) : p = j[15], j[16] !== P || j[17] !== A ? (h = null == P ? void 0 : {
                    ...P,
                    onToggle: e => {
                        (0, x.a)(e.currentTarget, A), P.onToggle(e)
                    }
                }, j[16] = P, j[17] = A, j[18] = h) : h = j[18], j[19] !== k || j[20] !== N ? (b = (0, n.jsx)(f, {
                    name: k,
                    status: N
                }), j[19] = k, j[20] = N, j[21] = b) : b = j[21], j[22] !== I || j[23] !== S || j[24] !== p || j[25] !== h || j[26] !== b ? (y = (0, n.jsxs)(m.a, {
                    className: I,
                    accessory: p,
                    disclosure: h,
                    children: [S, b]
                }), j[22] = I, j[23] = S, j[24] = p, j[25] = h, j[26] = b, j[27] = y) : y = j[27], y
            }
        })
    }),
    FWVQ: (function(e, t, a) {
        var n = a("BolX"),
            o = a("Qgfj"),
            l = a("qZWE");
        let i = (0, o.e)({
            id: "mcpApp.activity.unnamed",
            defaultMessage: "app",
            description: "Fallback name for a widget with no tool or app title"
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
                let t, a, s, v, x, h, g, f, b = (0, o.c)(32),
                    {
                        item: y,
                        apps: j,
                        part: w,
                        loadMetadata: k,
                        children: N
                    } = e;
                b[0] !== j || b[1] !== y.appContext || b[2] !== y.functionName || b[3] !== y.invocation.server || b[4] !== y.invocation.tool ? (t = (0, r.b)({
                    appContext: y.appContext,
                    apps: j,
                    functionName: y.functionName,
                    serverName: y.invocation.server,
                    toolName: y.invocation.tool
                }), b[0] = j, b[1] = y.appContext, b[2] = y.functionName, b[3] = y.invocation.server, b[4] = y.invocation.tool, b[5] = t) : t = b[5];
                let C = t,
                    S = y.appContext?.actionName ?? y.invocation.tool,
                    M = y.appContext?.connectorId ?? C?.id;
                b[6] !== y.invocation.server || b[7] !== S || b[8] !== M ? (a = (0, u.a)(y.invocation.server, S, M), b[6] = y.invocation.server, b[7] = S, b[8] = M, b[9] = a) : a = b[9];
                let I = a;
                b[10] !== y.invocation.arguments || b[11] !== I ? (s = "read_page" === I ? m.safeParse(y.invocation.arguments).data : void 0, b[10] = y.invocation.arguments, b[11] = I, b[12] = s) : s = b[12];
                let R = s;
                b[13] !== R ? (v = null == R ? null : {
                    kind: "page",
                    id: R.page_id
                }, b[13] = R, b[14] = v) : v = b[14], b[15] !== k ? (x = {
                    enabled: k
                }, b[15] = k, b[16] = x) : x = b[16];
                let T = (0, l.x)(d.b, v, x);
                if (null == T) return N;
                b[17] !== y.completed || b[18] !== y.invocation.server || b[19] !== y.result ? (h = "active", y.completed && (h = (0, c.a)({
                    result: y.result,
                    isCodexAppsServer: "codex_apps" === y.invocation.server
                }) ? "failed" : "completed"), b[17] = y.completed, b[18] = y.invocation.server, b[19] = y.result, b[20] = h) : h = b[20];
                let A = T.title ?? "";
                return b[21] !== N || b[22] !== w || b[23] !== h ? (g = e => {
                    let {
                        icon: t,
                        title: a
                    } = e;
                    return "icon" === w ? (0, n.jsx)("span", {
                        className: "icon-xs inline-flex shrink-0 items-center justify-center text-xs leading-none",
                        children: t
                    }) : 0 === a.trim().length ? N : (0, n.jsx)(i.a, {
                        id: "localConversation.pageReadActivity.title.state",
                        defaultMessage: "{state, select, active {Reading {title}} failed {Couldn’t read {title}} other {Read {title}}}",
                        description: "Activity for a named Page: active means a read in progress, failed means an unsuccessful read, and other means a completed read. title is the Page's display title.",
                        values: {
                            state: h,
                            title: a
                        }
                    })
                }, b[21] = N, b[22] = w, b[23] = h, b[24] = g) : g = b[24], b[25] !== T.document_type || b[26] !== T.namespace || b[27] !== T.page_id || b[28] !== T.symbol || b[29] !== A || b[30] !== g ? (f = (0, n.jsx)(p.a, {
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