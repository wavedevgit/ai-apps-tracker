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
                return j[4] !== M.length || j[5] !== k ? (a = null != k && M.length > 0 ? (0, n.jsx)(v.a, {
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
                }, j[11] = N, j[12] = p) : p = j[12], j[13] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, n.jsx)(s.a, {
                    id: "automations.list.seeAllTasks",
                    defaultMessage: "See all tasks",
                    description: "Button in a compact scheduled-task conversation list that opens the Scheduled destination"
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
            p = a("V64I"),
            m = a("V8uZ"),
            h = a("Sgcz"),
            x = a("umSm"),
            v = a("FgmP");

        function g(e) {
            let t, a, c, d, v, g, b, y, j, w, k, N, C, S, M = (0, o.c)(43),
                {
                    className: I,
                    isExpandable: T,
                    review: R
                } = e,
                A = (0, r.a)(),
                [_, U] = (0, s.useState)(!1);
            M[0] !== A || M[1] !== R ? (t = (0, h.c)(A, R), M[0] = A, M[1] = R, M[2] = t) : t = M[2];
            let E = t;
            if (!(void 0 === T || T)) {
                let e, t;
                return M[3] !== I ? (e = (0, l.b)("min-w-0 truncate pt-1 text-codex-description/80", I), M[3] = I, M[4] = e) : e = M[4], M[5] !== e || M[6] !== E ? (t = (0, n.jsx)("div", {
                    className: e,
                    children: E
                }), M[5] = e, M[6] = E, M[7] = t) : t = M[7], t
            }
            let L = "denied" === R.status && "high" === R.riskLevel;
            M[8] !== A || M[9] !== R ? (a = (0, h.b)(A, R), M[8] = A, M[9] = R, M[10] = a) : a = M[10];
            let P = a;
            M[11] !== I ? (c = (0, l.b)("flex flex-col pt-1", I), M[11] = I, M[12] = c) : c = M[12], M[13] === Symbol.for("react.memo_cache_sentinel") ? (d = () => U(f), M[13] = d) : d = M[13];
            let O = "inProgress" === R.status,
                D = L ? "text-warning" : "text-codex-description/80 group-hover/automatic-approval-review:text-default";
            M[14] !== D ? (v = (0, l.b)("min-w-0 truncate", D), M[14] = D, M[15] = v) : v = M[15], M[16] !== O || M[17] !== v || M[18] !== E ? (g = (0, n.jsx)(x.a, {
                active: O,
                className: v,
                children: E
            }), M[16] = O, M[17] = v, M[18] = E, M[19] = g) : g = M[19];
            let z = _ && "rotate-90 opacity-100";
            M[20] !== z ? (b = (0, l.b)("icon-2xs shrink-0 text-tertiary transition-[opacity,transform] duration-basic opacity-0 group-hover/automatic-approval-review:opacity-100", z), M[20] = z, M[21] = b) : b = M[21], M[22] !== b ? (y = (0, n.jsx)(p.a, {
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
            let q = _ ? "auto" : 0,
                B = +!!_;
            M[28] !== q || M[29] !== B ? (w = {
                height: q,
                opacity: B
            }, M[28] = q, M[29] = B, M[30] = w) : w = M[30];
            let W = _ ? "auto" : "none";
            return M[31] !== W ? (k = {
                overflow: "hidden",
                pointerEvents: W
            }, M[31] = W, M[32] = k) : k = M[32], M[33] !== P ? (N = (0, n.jsx)("p", {
                className: "max-w-[80ch] pt-1 text-size-chat leading-relaxed whitespace-pre-wrap text-text/60",
                children: P
            }), M[33] = P, M[34] = N) : N = M[34], M[35] !== w || M[36] !== k || M[37] !== N ? (C = (0, n.jsx)(i.a.div, {
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
            i = a("hV9T"),
            s = a("sM3V"),
            r = a("KJ1J"),
            c = a("biqr"),
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
                    T = b.result?.type !== "success" || I ? null : b.result.raw,
                    R = T ?? k?.toolResult ?? null;
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
                g[21] !== U.isPending || g[22] !== j || g[23] !== E || g[24] !== R?._meta || g[25] !== k?.resourceUri || g[26] !== b.appContext?.resourceUri || g[27] !== b.mcpAppResourceUri ? (m = j.startsWith("chatgpt:") ? E : b.appContext?.resourceUri ?? E ?? (U.isPending ? k?.resourceUri : void 0) ?? (0, i.Ig)(R?._meta) ?? b.mcpAppResourceUri, g[21] = U.isPending, g[22] = j, g[23] = E, g[24] = R?._meta, g[25] = k?.resourceUri, g[26] = b.appContext?.resourceUri, g[27] = b.mcpAppResourceUri, g[28] = m) : m = g[28];
                let L = m,
                    P = null != L && U.isPending && b.appContext?.resourceUri == null && null == E && k?.resourceUri == null,
                    O = (0, l.x)(S && t ? f.b : null, _);
                I ? h = "error" : b.completed && null == b.result && null == R && (h = "cancelled");
                let D = L ?? k?.resourceUri ?? null,
                    z = t && null != b.appContext ? b.callId : null,
                    q = h;
                return g[29] !== U.data || g[30] !== b.appContext || g[31] !== b.invocation.server || g[32] !== b.invocation.tool || g[33] !== b.invocationResourceUri ? (x = (0, p.b)({
                    appContext: b.appContext,
                    invocationResourceUri: b.invocationResourceUri,
                    mcpServerStatuses: U.data,
                    server: b.invocation.server,
                    tool: b.invocation.tool
                }), g[29] = U.data, g[30] = b.appContext, g[31] = b.invocation.server, g[32] = b.invocation.tool, g[33] = b.invocationResourceUri, g[34] = x) : x = g[34], g[35] !== U || g[36] !== j || g[37] !== R || g[38] !== y || g[39] !== t || g[40] !== P || g[41] !== b || g[42] !== T || g[43] !== z || g[44] !== x || g[45] !== D || g[46] !== I || g[47] !== h || g[48] !== O ? (v = {
                    item: b,
                    hostId: y,
                    conversationId: j,
                    catalog: U,
                    resourceUri: D,
                    isResourceUriPending: P,
                    toolScope: O,
                    isCodexAppsToolCall: t,
                    originCallId: z,
                    successfulToolResult: T,
                    displayedSuccessfulToolResult: R,
                    toolCallFailed: I,
                    toolCallStatus: q,
                    toolDefinition: x
                }, g[35] = U, g[36] = j, g[37] = R, g[38] = y, g[39] = t, g[40] = P, g[41] = b, g[42] = T, g[43] = z, g[44] = x, g[45] = D, g[46] = I, g[47] = h, g[48] = O, g[49] = v) : v = g[49], v
            },
            b: function(e, t) {
                let a, o, l, i, s = (0, n.c)(24),
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
                    j = t && !h && (null == g || r.completed);
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
                let w = (0, v.f)(a),
                    k = h ? void 0 : w.data;
                s[10] !== k ? (o = (0, d.c)(k), s[10] = k, s[11] = o) : o = s[11];
                let N = o,
                    {
                        error: C,
                        isPending: S,
                        isFetching: M
                    } = h || e.isCodexAppsToolCall && null == x ? p : w;
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
                let t, a, i, s, d, p, v, f, w, k, N, C, S, M = (0, n.c)(50),
                    {
                        item: I,
                        hostId: T,
                        appInfoOverride: R,
                        enabled: A,
                        retryOnMount: _
                    } = e,
                    U = void 0 === A || A,
                    E = (0, l.y)(g.a);
                M[0] !== R || M[1] !== U || M[2] !== I ? (t = U && null == R && (0, b.g)(I), M[0] = R, M[1] = U, M[2] = I, M[3] = t) : t = M[3], M[4] !== T || M[5] !== t ? (a = {
                    enabled: t,
                    hostId: T
                }, M[4] = T, M[5] = t, M[6] = a) : a = M[6];
                let {
                    data: L
                } = (0, c.m)(a);
                M[7] !== R || M[8] !== L || M[9] !== I.appContext || M[10] !== I.functionName || M[11] !== I.invocation.server || M[12] !== I.invocation.tool ? (i = R ?? (null == L ? null : (0, j.b)({
                    appContext: I.appContext,
                    apps: L,
                    functionName: I.functionName,
                    serverName: I.invocation.server,
                    toolName: I.invocation.tool
                })), M[7] = R, M[8] = L, M[9] = I.appContext, M[10] = I.functionName, M[11] = I.invocation.server, M[12] = I.invocation.tool, M[13] = i) : i = M[13];
                let P = i;
                M[14] !== U || M[15] !== I.invocation.server || M[16] !== I.pluginId ? (s = U && null != I.pluginId && !(0, r.f)(I.invocation.server), M[14] = U, M[15] = I.invocation.server, M[16] = I.pluginId, M[17] = s) : s = M[17], M[18] !== T || M[19] !== s ? (d = {
                    enabled: s,
                    hostId: T
                }, M[18] = T, M[19] = s, M[20] = d) : d = M[20];
                let O = (0, u.a)(d);
                M[21] !== T || M[22] !== O ? (p = {
                    enabled: O,
                    hostId: T,
                    roots: void 0,
                    resolveActiveRoots: !0
                }, M[21] = T, M[22] = O, M[23] = p) : p = M[23];
                let {
                    data: D
                } = (0, h.l)(p);
                M[24] !== D || M[25] !== I.pluginId ? (v = D?.find(e => {
                    let {
                        plugin: t
                    } = e;
                    return t.id === I.pluginId || null != t.remotePluginId && t.remotePluginId === I.pluginId
                }), M[24] = D, M[25] = I.pluginId, M[26] = v) : v = M[26];
                let z = v,
                    q = O && null != D && null != I.pluginId && null == z;
                M[27] !== T || M[28] !== I.pluginId || M[29] !== E.query || M[30] !== q ? (f = E.query.getOptions(m.l, (0, m.a)({
                    hostId: T,
                    pluginId: q ? I.pluginId ?? null : null
                })), M[27] = T, M[28] = I.pluginId, M[29] = E.query, M[30] = q, M[31] = f) : f = M[31];
                let B = f,
                    W = q && B.enabled,
                    H = _ ?? B.retryOnMount;
                M[32] !== B || M[33] !== W || M[34] !== H ? (w = {
                    ...B,
                    enabled: W,
                    retry: !1,
                    retryOnMount: H
                }, M[32] = B, M[33] = W, M[34] = H, M[35] = w) : w = M[35];
                let {
                    data: V
                } = (0, o.a)(w);
                M[36] !== V ? (k = null == V ? null : (0, x.b)(V), M[36] = V, M[37] = k) : k = M[37];
                let J = k,
                    F = z ?? J,
                    G = J?.plugin.id ?? z?.plugin.id ?? I.pluginId;
                return M[38] !== D || M[39] !== J || M[40] !== q ? (N = q && null != J ? [J] : D ?? [], M[38] = D, M[39] = J, M[40] = q, M[41] = N) : N = M[41], M[42] !== I.invocation.server || M[43] !== G || M[44] !== N ? (C = (0, y.a)({
                    pluginId: G,
                    plugins: N,
                    serverName: I.invocation.server
                }), M[42] = I.invocation.server, M[43] = G, M[44] = N, M[45] = C) : C = M[45], M[46] !== P || M[47] !== F || M[48] !== C ? (S = {
                    matchingApp: P,
                    plugin: F,
                    pluginIcon: C
                }, M[46] = P, M[47] = F, M[48] = C, M[49] = S) : S = M[49], S
            }
        })
    }),
    o1Ns: (function(e, t, a) {
        var n = a("SZCv"),
            o = a.n(n),
            l = a("BolX"),
            i = a("hV9T"),
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
                let t = (0, i.$e)(e),
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
                } = e, o = !(0, r.b)(t.invocation) && !(0, u.b)(t.invocation, a) && !0 !== t.isMcpAppWidgetSuperseded && (n?.sourceId == null || n.sourceId === (0, i.$e)(t.callId));
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
            d = a("hV9T"),
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
            N = a("FvYa"),
            C = a("Sm6l"),
            S = a("la9L"),
            M = a("rmk3"),
            I = a("JNtf"),
            T = a("mUDD"),
            R = a("KxMp"),
            A = a("HOLv"),
            _ = a("Wdu7"),
            U = a("wwME"),
            E = a("nXaV"),
            L = a("YeQK"),
            P = a("oKu4"),
            O = a("FWVQ"),
            D = a("IN8o"),
            z = a("HwRo"),
            q = a("C3P5"),
            B = a("aENG"),
            W = a("Cv9y"),
            H = a("EAcR"),
            V = a("NJrC"),
            J = a("EDsV"),
            F = a("geS6"),
            G = a("qwxA"),
            K = a("qZWE"),
            Q = a("E2ja"),
            Z = a("KLqe"),
            X = a("Sd8U"),
            $ = a("tSEg"),
            Y = a("hZax"),
            ee = a("V8uZ"),
            et = a("WFY2"),
            ea = a("S7UD"),
            en = a("MFk9"),
            eo = a("HUAY"),
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
            ef = a("z0Na"),
            eb = a("o62A"),
            ey = a("o1Ns"),
            ej = a("alO6"),
            ew = a("umSm"),
            ek = a("gFsV"),
            eN = a("SCbd"),
            eC = a("vWxq"),
            eS = a("LhYn");

        function eM(e) {
            return "text" !== e.type
        }

        function eI(e) {
            let t, a, l, i, s, r, c, u, d, m, h = (0, o.c)(35),
                {
                    call: v,
                    fallbackPageUrl: g,
                    loadRemoteLogos: f
                } = e,
                b = null == v.sourceHostname ? g : `https://${v.sourceHostname}`,
                y = "invokeTool" === v.kind ? v.inputJson : void 0,
                j = "invokeTool" === v.kind && !0 === v.inputTruncated;
            h[0] !== f || h[1] !== b ? (t = null == b ? (0, n.jsx)(A.a, {
                className: "shrink-0 text-text/60",
                asset: eS.a
            }) : (0, n.jsx)(R.a, {
                className: "icon-xs shrink-0 text-text/60",
                href: b,
                loadRemote: f
            }), h[0] = f, h[1] = b, h[2] = t) : t = h[2], h[3] !== v.name || h[4] !== v.title ? (a = v.title ?? (0, p.a)(v.name, {
                style: "sentence"
            }), h[3] = v.name, h[4] = v.title, h[5] = a) : a = h[5], h[6] !== v.kind || h[7] !== a ? (l = (0, n.jsx)(x.a, {
                id: "codex.mcpTool.webMcpActivity.completed",
                defaultMessage: "{kind, select, listTools {Listed website tools} other {{toolName}}}",
                description: "Human-readable activity label for a website-provided WebMCP tool invocation",
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
            h[12] !== v.description || h[13] !== v.name || h[14] !== v.readOnlyHint || h[15] !== v.sourceHostname || h[16] !== v.title || h[17] !== i || h[18] !== w ? (s = eT({
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
                description: "Title for a website-provided WebMCP tool definition and its input",
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
                        return eT(JSON.parse(e), 2)
                    } catch {
                        return e
                    }
                }(v.outputJson),
                language: "json",
                showStickyRightContent: !1,
                title: (0, n.jsx)(x.a, {
                    id: "codex.localConversation.webMcpTools.resultLabel",
                    defaultMessage: "{truncated, select, true {Result (truncated)} other {Result}}",
                    description: "Title for a website-provided WebMCP tool result",
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

        function eT(e, t) {
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

        function eR(e) {
            let t = (0, o.c)(74),
                {
                    block: a,
                    conversationId: l,
                    hostId: s
                } = e,
                r = (0, u.y)(X.a),
                c = (0, h.a)();
            switch (a.type) {
                case "image": {
                    let e, o, i, u, d, p, m;
                    t[0] !== a.annotations || t[1] !== c ? (e = e_(a.annotations, c), t[0] = a.annotations, t[1] = c, t[2] = e) : e = t[2];
                    let h = e,
                        x = `data:${a.mimeType};base64,${a.data}`;
                    t[3] !== c ? (o = c.formatMessage({
                        id: "codex.mcpTool.contentBlock.imageAlt",
                        defaultMessage: "Image returned by tool",
                        description: "Accessible description for an image included in an MCP tool result"
                    }), t[3] = c, t[4] = o) : o = t[4];
                    let v = o;
                    t[5] !== l || t[6] !== s || t[7] !== v || t[8] !== x || t[9] !== c || t[10] !== r ? (i = () => (0, L.getGeneratedImageContextMenuItems)(r, {
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
                    }), t[12] = v, t[13] = x, t[14] = u) : u = t[14], t[15] !== i || t[16] !== u ? (d = (0, n.jsx)(M.a, {
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
                    return t[61] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.b)("[&_*]:text-text/50", "bg-primary-soft text-codex-description/80 max-h-48 overflow-auto whitespace-pre-wrap rounded-md px-3 py-2 text-size-chat"), t[61] = e) : e = t[61], t[62] !== a.raw ? (o = eT(a.raw, 2), t[62] = a.raw, t[63] = o) : o = t[63], t[64] !== o ? (l = (0, n.jsx)("pre", {
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
            let h = a;
            if (d?.data === r && d.mimeType === c) {
                let e;
                return s[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(x.a, {
                    id: "codex.mcpTool.contentBlock.audioUnavailable",
                    defaultMessage: "Audio unavailable",
                    description: "Short fallback shown instead of the audio player when audio returned by an MCP tool cannot be played"
                }), s[5] = e) : e = s[5], e
            }
            return s[6] !== h || s[7] !== u ? (l = e => {
                if (null != e) return (0, ea.d)(e, u, h)
            }, s[6] = h, s[7] = u, s[8] = l) : l = s[8], s[9] !== h || s[10] !== l ? (i = (0, n.jsx)("audio", {
                ref: l,
                className: "w-full gap-0.5",
                controls: !0,
                onError: h,
                preload: "metadata"
            }), s[9] = h, s[10] = l, s[11] = i) : i = s[11], i
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
                let t, a, r, w, M, L, X, et, ea, es, eA, e_, eU, eE, eL, eP, eO, eD, ez, eq, eB, eW, eH, eV, eJ, eF, eG, eK, eQ, eZ, eX, e$, eY, e1, e0, e2, e3, e4, e5, e6, e8, e7, e9, te, tt, ta, tn = (0, o.c)(237),
                    {
                        item: to,
                        conversationId: tl,
                        expandedContentOnly: ti,
                        hideTextBlocksWithStructuredContent: ts,
                        hostId: tr,
                        loadRemoteLogos: tc,
                        appInfoOverride: tu,
                        onExpand: td,
                        onOpenPermissions: tp,
                        renderMcpApps: tm,
                        shouldAutoExpandMcpApp: th,
                        summary: tx,
                        summaryIcon: tv,
                        toolActivityTurnKey: tg
                    } = e,
                    tf = void 0 !== ti && ti,
                    tb = void 0 !== ts && ts,
                    ty = void 0 === tc || tc,
                    tj = void 0 === tm || tm,
                    tw = void 0 === tx ? null : tx,
                    tk = (0, u.y)($.a);
                tn[0] !== tu || tn[1] !== tr || tn[2] !== to ? (t = {
                    item: to,
                    hostId: tr,
                    appInfoOverride: tu
                }, tn[0] = tu, tn[1] = tr, tn[2] = to, tn[3] = t) : t = tn[3];
                let {
                    matchingApp: tN,
                    pluginIcon: tC
                } = (0, ef.c)(t), tS = (0, h.a)(), {
                    platform: tM
                } = (0, U.a)();
                tn[4] !== to.callId ? (a = (0, d.$e)(to.callId), tn[4] = to.callId, tn[5] = a) : a = tn[5];
                let tI = a,
                    tT = (0, u.x)(K.t, tI),
                    tR = (0, u.x)(K.h, tI),
                    tA = (0, u.x)(K.o, tI),
                    t_ = tR?.content.toolCallStatus == null && tR?.content.toolResult != null;
                tn[6] !== tr || tn[7] !== to || tn[8] !== tT || tn[9] !== t_ ? (r = (0, ey.a)({
                    item: to,
                    hostId: tr,
                    retainedState: {
                        sourceId: tT,
                        hasSuccessfulToolResult: t_
                    }
                }), tn[6] = tr, tn[7] = to, tn[8] = tT, tn[9] = t_, tn[10] = r) : r = tn[10];
                let tU = r;
                tn[11] !== tU || tn[12] !== tj ? (w = tj && (0, z.c)() && tU.isEligible, tn[11] = tU, tn[12] = tj, tn[13] = w) : w = tn[13];
                let tE = w;
                tn[14] !== tl || tn[15] !== to.callId ? (M = (0, q.a)({
                    callId: to.callId,
                    conversationId: tl
                }), tn[14] = tl, tn[15] = to.callId, tn[16] = M) : M = tn[16];
                let tL = M,
                    tP = (0, u.x)(q.b, tL);
                (0, Y.f)("2957382457");
                let tO = (0, u.z)(b.a);
                tn[17] !== tl || tn[18] !== tE ? (L = tE || !tl.startsWith("chatgpt:"), tn[17] = tl, tn[18] = tE, tn[19] = L) : L = tn[19], tn[20] !== tl || tn[21] !== tr || tn[22] !== to || tn[23] !== tA || tn[24] !== tE || tn[25] !== L ? (X = {
                    item: to,
                    hostId: tr,
                    conversationId: tl,
                    fallback: tA,
                    enabled: tE,
                    catalogEnabled: L
                }, tn[20] = tl, tn[21] = tr, tn[22] = to, tn[23] = tA, tn[24] = tE, tn[25] = L, tn[26] = X) : X = tn[26];
                let tD = (0, ef.a)(X),
                    {
                        isCodexAppsToolCall: tz,
                        successfulToolResult: tq,
                        resourceUri: tB,
                        toolDefinition: tW
                    } = tD,
                    {
                        elementHeightPx: tH,
                        elementRef: tV
                    } = (0, em.a)(),
                    tJ = to.result?.type === "success" ? to.result.content : null,
                    tF = to.result?.type === "error" ? to.result.error : null;
                tn[27] !== to || tn[28] !== tM ? (et = (0, ed.d)({
                    item: to,
                    platform: tM
                }), tn[27] = to, tn[28] = tM, tn[29] = et) : et = tn[29];
                let tG = et,
                    tK = tG?.nativeAppReference ?? null,
                    tQ = (0, ev.b)(tK),
                    tZ = tQ?.appPath ?? null;
                tn[30] !== tZ ? (ea = {
                    appPath: tZ
                }, tn[30] = tZ, tn[31] = ea) : ea = tn[31];
                let {
                    iconSmall: tX
                } = (0, k.a)(ea);
                tn[32] !== to || tn[33] !== tN || tn[34] !== tv ? (es = void 0 === tv ? (0, ex.d)(to, null == tN ? [] : [tN])?.icon : tv, tn[32] = to, tn[33] = tN, tn[34] = tv, tn[35] = es) : es = tn[35];
                let t$ = es;
                if (void 0 === tv && null != t$) {
                    let e, t;
                    tn[36] !== tN ? (e = null == tN ? [] : [tN], tn[36] = tN, tn[37] = e) : e = tn[37], tn[38] !== t$ || tn[39] !== to || tn[40] !== ty || tn[41] !== e ? (t = (0, n.jsx)(Z.a, {
                        item: to,
                        apps: e,
                        part: "icon",
                        loadMetadata: ty,
                        children: t$
                    }), tn[38] = t$, tn[39] = to, tn[40] = ty, tn[41] = e, tn[42] = t) : t = tn[42], t$ = t
                }
                tn[43] !== to.source?.kind || tn[44] !== tq ? (eA = to.source?.kind === "browserUse" && null != tq ? (0, f.a)(tq._meta) : null, tn[43] = to.source?.kind, tn[44] = tq, tn[45] = eA) : eA = tn[45];
                let tY = eA,
                    t1 = tO && !tf && to.completed && (0, d.qi)(to.invocation.server) && "js" === to.invocation.tool && null != tq ? (0, eh.a)(tq._meta) : [],
                    t0 = tN ?? null;
                tn[46] !== tS || tn[47] !== to.appContext || tn[48] !== to.completed || tn[49] !== to.invocation.arguments || tn[50] !== to.invocation.server || tn[51] !== to.invocation.tool || tn[52] !== to.pluginId || tn[53] !== to.result || tn[54] !== to.source || tn[55] !== to.toolDisplay || tn[56] !== tQ || tn[57] !== tM || tn[58] !== t0 || tn[59] !== tW ? (e_ = (0, ej.a)({
                    pluginId: to.pluginId,
                    toolDisplay: to.toolDisplay,
                    toolDefinition: tW,
                    appContext: to.appContext,
                    completed: to.completed,
                    intl: tS,
                    toolName: to.invocation.tool,
                    serverName: to.invocation.server,
                    matchingApp: t0,
                    nativeDesktopAppMetadata: tQ,
                    platform: tM,
                    source: to.source,
                    toolArguments: to.invocation.arguments,
                    toolResult: to.result
                }), tn[46] = tS, tn[47] = to.appContext, tn[48] = to.completed, tn[49] = to.invocation.arguments, tn[50] = to.invocation.server, tn[51] = to.invocation.tool, tn[52] = to.pluginId, tn[53] = to.result, tn[54] = to.source, tn[55] = to.toolDisplay, tn[56] = tQ, tn[57] = tM, tn[58] = t0, tn[59] = tW, tn[60] = e_) : e_ = tn[60];
                let t2 = e_,
                    t3 = tE && null != tB && tU.isRenderable,
                    [t4, t5] = (0, m.useState)(!1),
                    {
                        resource: t6,
                        renderData: t8,
                        state: t7,
                        refetch: t9
                    } = (0, ef.b)(tD, t3),
                    ae = tR?.sessionId == null ? null : tR.content.resource,
                    at = null == ae ? t6?.resourceIdentityVerified : tR?.content.mcpAppScope.resourceIdentityVerified,
                    aa = null == ae ? t7.error : null,
                    an = t3 && null == ae && t7.isLoading,
                    ao = (0, u.x)(K.q, tI),
                    al = (0, u.x)(K.m, tI),
                    ai = (0, V.a)({
                        hasResourceError: null != aa,
                        isResourceLoading: an,
                        isDilEnabled: !1,
                        renderData: ae ?? t8,
                        resourceUri: tB ?? null,
                        shouldRenderMcpApp: t3
                    }),
                    as = "html" === ai.kind ? ai.renderData : null,
                    ar = (0, J.e)({
                        data: as,
                        error: aa,
                        isLoading: an
                    }, K.F),
                    ac = "fallback" !== ai.kind,
                    au = tE && null != tB && (!ac || null != aa || null != ao && !(ao instanceof J.b) || "too-large" === ar.kind || "error" === ar.kind),
                    ad = au || (as?.isCollapsible ?? !0),
                    ap = al;
                au ? ap = "fallback" : "html" !== ai.kind && (ap = ai.kind);
                let am = "pending" === ap,
                    ah = "launcher" === ap,
                    ax = am || ah;
                tn[61] !== tR ? (eU = null != tR && tR.content.resource?.hideAttribution === !0 && (!0 === tR.content.mcpAppScope.isVerifiedFirstParty || (0, eb.b)(tR.content)), tn[61] = tR, tn[62] = eU) : eU = tn[62];
                let av = eU,
                    ag = "inline" === ap,
                    af = void 0 !== th && th && t3,
                    ab = !au && t4 || af,
                    ay = ac && !ah && (!ad || (tP ?? ab)),
                    aj = ay && !am,
                    aw = ag && aj,
                    ak = t4 || (tP ?? af),
                    [aN, aC] = (0, m.useState)(!1),
                    aS = aw && aN,
                    aM = an || am && ay;
                tn[63] !== ay || tn[64] !== aS || tn[65] !== aM ? (eE = {
                    isLoading: aM,
                    isInlineRequested: ay,
                    isInlineOpening: aS
                }, tn[63] = ay, tn[64] = aS, tn[65] = aM, tn[66] = eE) : eE = tn[66];
                let aI = (0, O.d)(tI, eE),
                    aT = !au && (am || "html" === ai.kind) ? aI : null;
                tn[67] !== tW ? (eL = (0, F.b)(tW)?.resourceUri, tn[67] = tW, tn[68] = eL) : eL = tn[68];
                let aR = eL,
                    aA = tq?._meta;
                tn[69] !== aA ? (eP = c()(aA, ["_codex_apps", "resource_uri"]), tn[69] = aA, tn[70] = eP) : eP = tn[70];
                let a_ = eP;
                tn[71] !== aR || tn[72] !== tz || tn[73] !== tB || tn[74] !== a_ || tn[75] !== tW?._meta ? (eO = tz && null != aR && a_ === aR && (0, d.Ig)(tW?._meta) === tB, tn[71] = aR, tn[72] = tz, tn[73] = tB, tn[74] = a_, tn[75] = tW?._meta, tn[76] = eO) : eO = tn[76];
                let aU = !(eO && !0 === at && (0, O.b)({
                    isInline: !ad && ("inline" === ap || am),
                    status: aT,
                    hidesAttributionAndActions: as?.hideAttribution === !0 && !0 === as.hideActions
                })) && (ax || !tf && (ad || "html" === ai.kind && !av));
                tn[77] !== tz || tn[78] !== to.appContext?.appName || tn[79] !== to.invocation.server || tn[80] !== tN?.name || tn[81] !== tC?.alt ? (eD = tN?.name ?? to.appContext?.appName ?? tC?.alt ?? (tz ? null : (0, p.a)(to.invocation.server)), tn[77] = tz, tn[78] = to.appContext?.appName, tn[79] = to.invocation.server, tn[80] = tN?.name, tn[81] = tC?.alt, tn[82] = eD) : eD = tn[82];
                let aE = eD;
                tn[83] !== aE || tn[84] !== tW ? (ez = (0, O.a)((0, v.a)(tW), aE), tn[83] = aE, tn[84] = tW, tn[85] = ez) : ez = tn[85];
                let aL = ez,
                    aP = au ? tf || t4 : !ax && (tf || (ac ? aj : ak));
                e: {
                    let e, t, a, n;
                    if (!aP) {
                        let e;
                        tn[86] !== tJ ? (e = {
                            displayContent: tJ,
                            displayStructuredContentJson: null
                        }, tn[86] = tJ, tn[87] = e) : e = tn[87], eq = e;
                        break e
                    }
                    tn[88] !== to.result ? (e = to.result?.type === "success" && null != to.result.structuredContent ? eT(to.result.structuredContent, 2) : null, tn[88] = to.result, tn[89] = e) : e = tn[89];
                    let o = e;tn[90] !== tJ || tn[91] !== tb || tn[92] !== o ? (t = tb && null != o && null != tJ ? tJ.filter(eM) : tJ, tn[90] = tJ, tn[91] = tb, tn[92] = o, tn[93] = t) : t = tn[93];
                    let l = t;tn[94] !== l ? (a = function(e) {
                        if (e?.length !== 1) return null;
                        let [t] = e;
                        if ("text" !== t.type || null != t.annotations) return null;
                        let a = t.text.trim();
                        if ("{" !== a[0] && "[" !== a[0]) return null;
                        try {
                            return eT(JSON.parse(a), 2)
                        } catch {
                            return null
                        }
                    }(l), tn[94] = l, tn[95] = a) : a = tn[95];
                    let i = a;
                    if (null == i) {
                        let e;
                        tn[96] !== o || tn[97] !== l ? (e = {
                            displayContent: l,
                            displayStructuredContentJson: o
                        }, tn[96] = o, tn[97] = l, tn[98] = e) : e = tn[98], eq = e;
                        break e
                    }
                    if (null == o || i === o) {
                        let e, t;
                        tn[99] === Symbol.for("react.memo_cache_sentinel") ? (e = [], tn[99] = e) : e = tn[99];
                        let a = o ?? i;
                        tn[100] !== a ? (t = {
                            displayContent: e,
                            displayStructuredContentJson: a
                        }, tn[100] = a, tn[101] = t) : t = tn[101], eq = t;
                        break e
                    }
                    tn[102] !== o || tn[103] !== l ? (n = {
                        displayContent: l,
                        displayStructuredContentJson: o
                    }, tn[102] = o, tn[103] = l, tn[104] = n) : n = tn[104],
                    eq = n
                }
                let {
                    displayContent: aO,
                    displayStructuredContentJson: aD
                } = eq, [az, aq] = (0, m.useState)(!1);
                t: {
                    let e;
                    if (!az) {
                        eB = null;
                        break t
                    }
                    tn[105] !== to.callId || tn[106] !== to.durationMs || tn[107] !== to.invocation || tn[108] !== to.result ? (e = eT({
                        callId: to.callId,
                        invocation: to.invocation,
                        durationMs: to.durationMs,
                        result: to.result
                    }, 2), tn[105] = to.callId, tn[106] = to.durationMs, tn[107] = to.invocation, tn[108] = to.result, tn[109] = e) : e = tn[109],
                    eB = e
                }
                let aB = eB;
                tn[110] !== tS ? (eW = tS.formatMessage({
                    id: "codex.mcpTool.rawOutputTriggerTooltip",
                    defaultMessage: "Show raw tool call output",
                    description: "Tooltip for the button that opens the raw MCP tool output dialog"
                }), tn[110] = tS, tn[111] = eW) : eW = tn[111];
                let aW = eW,
                    aH = to.completed || null != to.result || ac,
                    aV = aP ? tH : 0,
                    aJ = !to.completed;
                tn[112] !== tN ? (eH = null == tN ? [] : [tN], tn[112] = tN, tn[113] = eH) : eH = tn[113], tn[114] !== to || tn[115] !== ty || tn[116] !== eH || tn[117] !== t2 ? (eV = (0, n.jsx)(Z.a, {
                    item: to,
                    apps: eH,
                    part: "label",
                    loadMetadata: ty,
                    children: t2
                }), tn[114] = to, tn[115] = ty, tn[116] = eH, tn[117] = t2, tn[118] = eV) : eV = tn[118], tn[119] !== aJ || tn[120] !== eV ? (eJ = (0, n.jsx)(ew.a, {
                    active: aJ,
                    className: "min-w-0 shrink truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                    children: eV
                }), tn[119] = aJ, tn[120] = eV, tn[121] = eJ) : eJ = tn[121];
                let aF = eJ;
                tn[122] !== t$ || tn[123] !== tY || tn[124] !== tr || tn[125] !== to || tn[126] !== ty || tn[127] !== tN || tn[128] !== tX || tn[129] !== tQ?.displayName || tn[130] !== tK || tn[131] !== tG || tn[132] !== tC ? (eF = void 0 !== t$ ? t$ : (0, n.jsx)(ec.a, {
                    hostId: tr,
                    item: to,
                    loadRemoteLogos: ty,
                    fallback: null == tC && null != tK ? (0, n.jsx)(N.a, {
                        alt: tQ?.displayName ?? tG?.name ?? to.invocation.server,
                        className: "icon-xs shrink-0 scale-[1.15] object-contain",
                        loadRemote: ty,
                        logoUrl: tX,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(A.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: ek.a
                        })
                    }) : null == tC && tG?.groupKey === ed.b ? (0, n.jsx)(A.a, {
                        className: "shrink-0 text-secondary",
                        asset: ek.a
                    }) : null == tC && tG?.logoUrl != null ? (0, n.jsx)(N.a, {
                        alt: tG.name,
                        className: "icon-xs shrink-0 object-contain",
                        loadRemote: ty,
                        logoUrl: tG.logoUrl,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(A.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: eN.a
                        })
                    }) : null == tC && tG?.usesBrowserIcon === !0 ? null == tY ? (0, n.jsx)(A.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: eS.a
                    }) : (0, n.jsx)(R.a, {
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        href: tY,
                        loadRemote: ty
                    }) : null == tC && (0, d.qi)(to.invocation.server) ? (0, n.jsx)(A.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: eC.a
                    }) : (0, n.jsx)(N.a, {
                        alt: tC?.alt ?? tN?.name ?? to.appContext?.appName ?? to.invocation.server,
                        appInfo: null == tC ? tN : null,
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        loadRemote: ty,
                        knownAppId: tC?.knownAppId ?? to.appContext?.appName ?? to.appContext?.connectorId,
                        logoUrl: tC?.logoUrl,
                        fallback: (0, n.jsx)(A.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: eN.a
                        })
                    })
                }), tn[122] = t$, tn[123] = tY, tn[124] = tr, tn[125] = to, tn[126] = ty, tn[127] = tN, tn[128] = tX, tn[129] = tQ?.displayName, tn[130] = tK, tn[131] = tG, tn[132] = tC, tn[133] = eF) : eF = tn[133];
                let aG = eF;
                tn[134] !== tw || tn[135] !== aG || tn[136] !== aF ? (eG = tw ?? (0, n.jsxs)(n.Fragment, {
                    children: [aG, aF]
                }), tn[134] = tw, tn[135] = aG, tn[136] = aF, tn[137] = eG) : eG = tn[137];
                let aK = eG;
                tn[138] !== ak || tn[139] !== ay || tn[140] !== t4 || tn[141] !== tL || tn[142] !== td || tn[143] !== tk || tn[144] !== af || tn[145] !== au || tn[146] !== ac || tn[147] !== ag || tn[148] !== tg || tn[149] !== tP ? (eK = () => {
                    if (au) {
                        t4 || td?.(), t5(!t4);
                        return
                    }
                    let e = ac ? !ay : !ak;
                    if (e && td?.(), ac) {
                        aC(e && ag), tk.set(q.b, tL, e);
                        return
                    }
                    e && null != tg && (0, ep.b)(tk, tg), !e && (!0 === tP || af) && tk.set(q.b, tL, !1), t5(e)
                }, tn[138] = ak, tn[139] = ay, tn[140] = t4, tn[141] = tL, tn[142] = td, tn[143] = tk, tn[144] = af, tn[145] = au, tn[146] = ac, tn[147] = ag, tn[148] = tg, tn[149] = tP, tn[150] = eK) : eK = tn[150];
                let aQ = eK;
                tn[151] !== to.automaticApprovalReviews ? (eQ = null == to.automaticApprovalReviews ? null : (0, n.jsx)(er.a, {}), tn[151] = to.automaticApprovalReviews, tn[152] = eQ) : eQ = tn[152];
                let aZ = eQ,
                    aX = aw && (as?.prefersBorder ?? tR?.content.resource?.prefersBorder ?? !0),
                    a$ = aH && "opening" !== aT && !ah && ad ? {
                        alignEnd: aX,
                        expanded: aP,
                        onToggle: aQ
                    } : void 0,
                    aY = (0, i.b)("group", aX && "overflow-hidden rounded-lg border border-strong bg-surface"),
                    a1 = (0, i.b)((ah || aw) && "w-full", aX && "px-4 py-2.5");
                tn[153] !== aZ || tn[154] !== a$ || tn[155] !== a1 || tn[156] !== an || tn[157] !== tI || tn[158] !== aK || tn[159] !== aG || tn[160] !== aL || tn[161] !== aT ? (eZ = null != aT ? (0, n.jsx)(D.a, {
                    accessory: aZ,
                    className: a1,
                    disabled: an,
                    disclosure: a$,
                    icon: aG,
                    mcpAppId: tI,
                    name: aL,
                    status: aT
                }) : (0, n.jsx)(el.a, {
                    accessory: aZ,
                    className: a1,
                    disclosure: a$,
                    children: aK
                }), tn[153] = aZ, tn[154] = a$, tn[155] = a1, tn[156] = an, tn[157] = tI, tn[158] = aK, tn[159] = aG, tn[160] = aL, tn[161] = aT, tn[162] = eZ) : eZ = tn[162];
                let a0 = eZ;
                tn[163] !== t9 ? (eX = () => {
                    t9({
                        cancelRefetch: !1
                    })
                }, tn[163] = t9, tn[164] = eX) : eX = tn[164];
                let a2 = (0, n.jsx)(H.a, {
                        hostDisplayModes: K.F,
                        resource: {
                            data: null == tB ? null : as,
                            error: aa,
                            isLoading: an
                        },
                        inlineSurface: ag ? "card" : "standalone",
                        mcpAppId: tI,
                        appName: aE ?? void 0,
                        presentation: au ? "inline" : al,
                        onRetryResourceRead: eX,
                        showLoadingStatus: !aU
                    }),
                    a3 = s.a,
                    a4 = +!!aP;
                tn[165] !== a4 || tn[166] !== aV ? (e$ = {
                    height: aV,
                    opacity: a4
                }, tn[165] = a4, tn[166] = aV, tn[167] = e$) : e$ = tn[167];
                let a5 = ee.a,
                    a6 = aP ? "overflow-visible" : "overflow-hidden";
                tn[168] !== a6 ? (eY = (0, i.b)(a6), tn[168] = a6, tn[169] = eY) : eY = tn[169];
                let a8 = aP ? "auto" : "none";
                tn[170] !== a8 ? (e1 = {
                    pointerEvents: a8
                }, tn[170] = a8, tn[171] = e1) : e1 = tn[171], tn[172] !== aj ? (e0 = () => {
                    aj && aC(!1)
                }, tn[172] = aj, tn[173] = e0) : e0 = tn[173];
                let a7 = eo.a,
                    a9 = aP ? tV : null,
                    ne = t3 && "relative",
                    nt = !ad && "py-1";
                tn[174] !== ne || tn[175] !== nt ? (e2 = (0, i.b)(ne, nt), tn[174] = ne, tn[175] = nt, tn[176] = e2) : e2 = tn[176];
                let na = ad && !aX && (aU || !ag) ? "grouped" : "flush",
                    nn = aP ? (0, n.jsxs)(n.Fragment, {
                        children: [null == to.automaticApprovalReviews ? null : (0, n.jsx)(er.d, {
                            className: aX ? "px-4" : void 0,
                            isExpandable: !ag,
                            reviews: to.automaticApprovalReviews
                        }), ac ? aS ? (0, n.jsx)(W.a, {
                            className: "w-full",
                            height: (0, B.a)(null, as?.heightHint ?? null, as?.minFrameHeight ?? null),
                            showLoadingStatus: !1
                        }) : a2 : aO && aO.length > 0 ? (0, n.jsx)("div", {
                            className: (0, i.b)("[&_*]:text-text/50", "flex flex-col gap-0.5"),
                            children: aO.map((e, t) => (0, n.jsx)(eR, {
                                block: e,
                                conversationId: tl,
                                hostId: tr
                            }, t))
                        }) : tF ? (0, n.jsx)(_.a, {
                            className: "w-full",
                            fullWidth: !0,
                            level: "danger",
                            children: (0, n.jsx)("div", {
                                className: "max-h-48 overflow-auto text-size-chat whitespace-pre-wrap",
                                children: tF
                            })
                        }) : aD ? null : (0, n.jsx)("p", {
                            className: "text-codex-description/80",
                            children: (0, n.jsx)(x.a, {
                                id: "codex.mcpTool.noResult",
                                defaultMessage: "Tool returned no content",
                                description: "Message shown when an MCP tool call produced no content"
                            })
                        }), !an && aP && !aS && !ac && aD && (0, n.jsx)(S.CodeSnippet, {
                            codeContainerClassName: "max-h-48 overflow-auto",
                            language: "json",
                            content: aD,
                            showStickyRightContent: !1
                        }), !an && aP && !aS && (0, n.jsx)(I.a, {
                            open: az,
                            onOpenChange: aq,
                            triggerContent: (0, n.jsx)("div", {
                                className: (0, i.b)("inline-flex w-fit", t3 && "absolute right-1 bottom-2 z-50"),
                                children: (0, n.jsx)(l.a, {
                                    side: "top",
                                    align: "center",
                                    content: aW,
                                    children: (0, n.jsx)(C.a, {
                                        className: "cursor-interaction opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 focus-visible:opacity-100",
                                        "aria-label": aW,
                                        color: "ghost",
                                        onClick: () => {
                                            aq(!0)
                                        },
                                        size: "icon",
                                        children: (0, n.jsx)(E.a, {
                                            className: "icon-xxs"
                                        })
                                    })
                                })
                            }),
                            children: (0, n.jsxs)(T.b, {
                                children: [(0, n.jsx)(T.e, {
                                    children: (0, n.jsx)(T.d, {
                                        title: (0, n.jsx)(I.e, {
                                            children: (0, n.jsx)(x.a, {
                                                id: "codex.mcpTool.rawOutputHeading",
                                                defaultMessage: "Raw {server}.{tool} tool call output",
                                                description: "Heading shown within the raw output dialog",
                                                values: {
                                                    server: to.invocation.server,
                                                    tool: to.invocation.tool
                                                }
                                            })
                                        })
                                    })
                                }), (0, n.jsx)(T.e, {
                                    children: null == aB ? null : (0, n.jsx)(S.CodeSnippet, {
                                        codeContainerClassName: "max-h-128 overflow-auto",
                                        language: "json",
                                        content: aB,
                                        showStickyRightContent: !0
                                    })
                                })]
                            })
                        })]
                    }) : null;
                tn[177] !== a7 || tn[178] !== a9 || tn[179] !== e2 || tn[180] !== na || tn[181] !== nn ? (e3 = (0, n.jsx)(a7, {
                    ref: a9,
                    className: e2,
                    variant: na,
                    children: nn
                }), tn[177] = a7, tn[178] = a9, tn[179] = e2, tn[180] = na, tn[181] = nn, tn[182] = e3) : e3 = tn[182], tn[183] !== a3.div || tn[184] !== e$ || tn[185] !== a5 || tn[186] !== eY || tn[187] !== e1 || tn[188] !== e0 || tn[189] !== e3 ? (e4 = (0, n.jsx)(a3.div, {
                    initial: !1,
                    animate: e$,
                    transition: a5,
                    className: eY,
                    style: e1,
                    onAnimationComplete: e0,
                    children: e3
                }), tn[183] = a3.div, tn[184] = e$, tn[185] = a5, tn[186] = eY, tn[187] = e1, tn[188] = e0, tn[189] = e3, tn[190] = e4) : e4 = tn[190];
                let no = e4;
                tn[191] !== to || tn[192] !== tp ? (e5 = (0, eu.a)(to) ? (0, n.jsx)(eo.a, {
                    variant: "grouped",
                    children: (0, n.jsx)(_.a, {
                        className: "w-full",
                        fullWidth: !0,
                        level: "warning",
                        actions: null == tp ? void 0 : (0, n.jsx)(C.a, {
                            color: "secondary",
                            onClick: tp,
                            children: (0, n.jsx)(x.a, {
                                id: "codex.mcpTool.reviewPermissions",
                                defaultMessage: "Review permissions",
                                description: "Opens the existing permissions menu for the chat whose tool call could not request approval"
                            })
                        }),
                        children: null == tp ? (0, n.jsx)(x.a, {
                            id: "codex.mcpTool.approvalRequestsDisabled",
                            defaultMessage: "Approval requests were disabled for this tool call. If available, review this chat’s permissions before retrying.",
                            description: "Explanation on a failed MCP tool call that needed approval but could not request it. Suggests the existing permissions control for this chat, which may be unavailable in read-only views or restricted by policy. Does not promise that restrictions can be overridden."
                        }) : (0, n.jsx)(x.a, {
                            id: "codex.mcpTool.approvalRequestsDisabled.recovery",
                            defaultMessage: "Approval requests were disabled for this tool call. Choose “Ask for approval” in this chat’s permissions if available, then ask to retry.",
                            description: "Explains that the tool call was blocked before approval could be requested. The adjacent action opens this chat's permissions menu; the user must select an allowed mode and ask to retry. Managed policy may limit the available modes."
                        })
                    })
                }) : null, tn[191] = to, tn[192] = tp, tn[193] = e5) : e5 = tn[193];
                let nl = ax ? a2 : no;
                tn[194] !== e5 || tn[195] !== nl ? (e6 = (0, n.jsxs)(n.Fragment, {
                    children: [e5, nl]
                }), tn[194] = e5, tn[195] = nl, tn[196] = e6) : e6 = tn[196];
                let ni = e6;
                tn[197] !== to ? (e8 = (0, g.a)(to), tn[197] = to, tn[198] = e8) : e8 = tn[198];
                let ns = e8;
                if (null != ns) {
                    let e;
                    return tn[199] !== ns.id || tn[200] !== ns.schedule || tn[201] !== ns.title ? (e = (0, n.jsx)(P.a, {
                        id: ns.id,
                        mode: "view",
                        name: ns.title,
                        rrule: ns.schedule
                    }), tn[199] = ns.id, tn[200] = ns.schedule, tn[201] = ns.title, tn[202] = e) : e = tn[202], e
                }
                tn[203] !== tr || tn[204] !== to ? (e7 = (0, Q.b)(to, tr), tn[203] = tr, tn[204] = to, tn[205] = e7) : e7 = tn[205];
                let nr = e7;
                if (nr?.type === "chatgpt-automation") {
                    let e;
                    return tn[206] !== nr ? (e = (0, n.jsx)(y.a, {
                        automation: nr
                    }), tn[206] = nr, tn[207] = e) : e = tn[207], e
                }
                if (nr?.type === "chatgpt-automation-list") {
                    let e;
                    return tn[208] !== nr.automations ? (e = (0, n.jsx)(j.a, {
                        automations: nr.automations
                    }), tn[208] = nr.automations, tn[209] = e) : e = tn[209], e
                }
                tn[210] !== ay || tn[211] !== tI || tn[212] !== tj || tn[213] !== tk || tn[214] !== t3 ? (e9 = tj || "chatgpt-thread" !== tk.value.routeKind ? (0, n.jsx)(G.b, {
                    mcpAppId: tI,
                    isInlineRequested: t3 && ay
                }) : null, tn[210] = ay, tn[211] = tI, tn[212] = tj, tn[213] = tk, tn[214] = t3, tn[215] = e9) : e9 = tn[215], tn[216] !== aZ || tn[217] !== aY || tn[218] !== a$ || tn[219] !== aU || tn[220] !== a1 || tn[221] !== ni || tn[222] !== ag || tn[223] !== tw || tn[224] !== tv || tn[225] !== aF || tn[226] !== a0 || tn[227] !== aT ? (te = void 0 !== tv && aU && null == aT ? (0, n.jsx)(en.a, {
                    accessory: aZ,
                    body: ni,
                    className: aY,
                    "data-mcp-app-card": !!ag || void 0,
                    disclosure: a$,
                    headerClassName: a1,
                    icon: tv,
                    summary: tw ?? aF
                }) : (0, n.jsx)(ei.a, {
                    className: aY,
                    "data-mcp-app-card": !!ag || void 0,
                    header: aU ? a0 : null,
                    body: ni
                }), tn[216] = aZ, tn[217] = aY, tn[218] = a$, tn[219] = aU, tn[220] = a1, tn[221] = ni, tn[222] = ag, tn[223] = tw, tn[224] = tv, tn[225] = aF, tn[226] = a0, tn[227] = aT, tn[228] = te) : te = tn[228], tn[229] !== tY || tn[230] !== to.callId || tn[231] !== ty ? (tt = (e, t) => (0, n.jsxs)(m.Fragment, {
                    children: [(0, n.jsx)(eg.a, {
                        variant: "grouped"
                    }), (0, n.jsx)(eI, {
                        call: e,
                        fallbackPageUrl: tY,
                        loadRemoteLogos: ty
                    })]
                }, `${to.callId}:webmcp:${t}:${e.name}`), tn[229] = tY, tn[230] = to.callId, tn[231] = ty, tn[232] = tt) : tt = tn[232];
                let nc = t1.map(tt);
                return tn[233] !== e9 || tn[234] !== te || tn[235] !== nc ? (ta = (0, n.jsxs)(n.Fragment, {
                    children: [e9, te, nc]
                }), tn[233] = e9, tn[234] = te, tn[235] = nc, tn[236] = ta) : ta = tn[236], ta
            }
        })
    }),
    KU8M: (function(e, t, a) {
        var n = a("BolX"),
            o = a("hV9T"),
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
                return void 0 === m || (0, o.Ig)(m?._meta) === c.appContext.resourceUri && null != (0, i.c)(m, c.appContext) ? p : u(r.r, d)
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
            i = a("hV9T"),
            s = a("sM3V"),
            r = a("KJ1J"),
            c = a("FvYa"),
            u = a("zUz7"),
            d = a("LF5P");
        a.d(t, {}, {
            a: function(e) {
                let t, a, p = (0, o.c)(8),
                    {
                        fallback: m,
                        hostId: h,
                        item: x,
                        loadRemoteLogos: v
                    } = e,
                    g = (0, l.x)(!v || null != (0, d.d)({
                        item: x
                    }) || (0, i.qi)(x.invocation.server) || (0, r.f)(x.invocation.server) ? null : s.a, {
                        hostId: h,
                        serverName: x.invocation.server,
                        threadId: (0, i.Se)(x.threadId)
                    })?.serverInfo;
                p[0] !== g ? (t = (0, u.a)(g), p[0] = g, p[1] = t) : t = p[1];
                let f = t;
                return p[2] !== m || p[3] !== f || p[4] !== x.invocation.server || p[5] !== g?.name || p[6] !== g?.title ? (a = null == f ? m : (0, n.jsx)(c.a, {
                    alt: g?.title ?? g?.name ?? x.invocation.server,
                    className: "icon-xs shrink-0 object-contain",
                    logoUrl: f.logoUrl,
                    logoDarkUrl: f.logoDarkUrl,
                    fallback: m
                }), p[2] = m, p[3] = f, p[4] = x.invocation.server, p[5] = g?.name, p[6] = g?.title, p[7] = a) : a = p[7], a
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
            r = a("hV9T"),
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
                let t, a, l, b, y, j, w, k, N, C, S, M, I, T, R, A, _, U, E = (0, o.c)(130),
                    {
                        elicitation: L,
                        result: P,
                        id: O,
                        kind: D,
                        mode: z,
                        name: q,
                        prompt: B,
                        rrule: W,
                        projectId: H,
                        cwds: V,
                        destination: J,
                        executionEnvironment: F,
                        localEnvironmentConfigPath: G,
                        model: K,
                        reasoningEffort: Q,
                        notificationPolicy: Z,
                        targetThreadId: X,
                        status: $
                    } = e,
                    Y = void 0 === P ? null : P,
                    ee = (0, s.y)(g.a),
                    et = (0, c.a)();
                (0, x.a)();
                let ea = (0, u.Z)("/remote/:conversationId"),
                    en = (0, u.Z)("/local/:conversationId"),
                    eo = (0, s.z)(h.e),
                    el = X ?? null;
                E[0] !== V || E[1] !== J || E[2] !== F || E[3] !== O || E[4] !== D || E[5] !== G || E[6] !== z || E[7] !== K || E[8] !== q || E[9] !== Z || E[10] !== H || E[11] !== B || E[12] !== Q || E[13] !== el || E[14] !== W || E[15] !== $ ? (t = JSON.stringify({
                    id: O,
                    kind: D,
                    mode: z,
                    name: q,
                    prompt: B,
                    rrule: W,
                    projectId: H,
                    cwds: V,
                    destination: J,
                    executionEnvironment: F,
                    localEnvironmentConfigPath: G,
                    model: K,
                    reasoningEffort: Q,
                    notificationPolicy: Z,
                    targetThreadId: el,
                    status: $
                }), E[0] = V, E[1] = J, E[2] = F, E[3] = O, E[4] = D, E[5] = G, E[6] = z, E[7] = K, E[8] = q, E[9] = Z, E[10] = H, E[11] = B, E[12] = Q, E[13] = el, E[14] = W, E[15] = $, E[16] = t) : t = E[16];
                let ei = t,
                    es = eo?.directiveKey === ei ? eo.automationId : null,
                    er = es ?? Y?.automationId ?? O,
                    ec = Y?.snapshot ?? null,
                    eu = "view" === z ? z : null,
                    ed = "view" === z && null != O,
                    ep = null != O && (ed || "suggested-update" === z),
                    em = (0, s.z)(d.c),
                    eh = em.data,
                    ex = !!ep && em.isLoading;
                if (E[17] !== eh || E[18] !== es || E[19] !== V || E[20] !== O || E[21] !== et || E[22] !== ex || E[23] !== ed || E[24] !== D || E[25] !== z || E[26] !== q || E[27] !== H || E[28] !== B || E[29] !== er || E[30] !== el || E[31] !== Y?.automationId || E[32] !== Y?.mode || E[33] !== ec?.name || E[34] !== ec?.rrule || E[35] !== W || E[36] !== $) {
                    var ev;
                    let e, t, n, o, s, c, u, d, p, h, x = null != O ? eh?.items.find(e => e.id === O) ?? null : null;
                    E[46] !== eh?.items || E[47] !== es || E[48] !== et || E[49] !== ex || E[50] !== ed || E[51] !== z || E[52] !== q || E[53] !== er || E[54] !== Y?.mode || E[55] !== ec?.name || E[56] !== ec?.rrule || E[57] !== W ? ({
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
                        mode: Y?.mode ?? z,
                        isSuggestionAccepted: null != es,
                        trimmedId: er ?? null,
                        trimmedName: q ?? ec?.name ?? null,
                        trimmedRrule: W ?? ec?.rrule ?? null,
                        automations: eh?.items ?? null,
                        isLoading: ex
                    }), o = et.formatMessage({
                        id: "settings.automations.rruleSummaryFallback",
                        defaultMessage: "Custom schedule",
                        description: "Fallback label when RRULE summary cannot be generated"
                    }), s = (0, m.f)({
                        rrule: n,
                        intl: et,
                        fallbackMessage: o
                    }), E[46] = eh?.items, E[47] = es, E[48] = et, E[49] = ex, E[50] = ed, E[51] = z, E[52] = q, E[53] = er, E[54] = Y?.mode, E[55] = ec?.name, E[56] = ec?.rrule, E[57] = W, E[58] = t, E[59] = w, E[60] = n, E[61] = o, E[62] = s) : (t = E[58], w = E[59], n = E[60], o = E[61], s = E[62]);
                    let v = s;
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
                    E[67] !== z || E[68] !== Y?.mode ? (d = Y?.mode ?? z, E[67] = z, E[68] = Y?.mode, E[69] = d) : d = E[69], a = (y = "delete" === (b = d)) || Y?.automationId != null ? Y?.automationId ?? O ?? null : er, E[70] !== a || E[71] !== y ? (p = y ? (ev = a ?? null, 0 === (e = ev?.trim() ?? "").length ? null : /^[0-9a-f]{8}-[0-9a-f-]+$/i.test(e) ? e : i()(e.replace(/[-_]+/g, " "))) : null, E[70] = a, E[71] = y, E[72] = p) : p = E[72];
                    let S = p;
                    C = t ? g : w || S || f, E[73] !== S || E[74] !== et || E[75] !== w ? (h = w ?? S ?? et.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task",
                        description: "Fallback title when scheduled task name is missing"
                    }), E[73] = S, E[74] = et, E[75] = w, E[76] = h) : h = E[76], N = h, j = v || (t ? g : null != n ? o : null), l = null != q && null != B && null != W && ("heartbeat" === D ? null != el : void 0 !== H || null != V), k = null != O && null != $ && null != q && null != B && null != W && (null == x ? "heartbeat" === D ? null != el : void 0 !== H || null != V : !!(0, r.ei)(x) || void 0 !== H || null != V), E[17] = eh, E[18] = es, E[19] = V, E[20] = O, E[21] = et, E[22] = ex, E[23] = ed, E[24] = D, E[25] = z, E[26] = q, E[27] = H, E[28] = B, E[29] = er, E[30] = el, E[31] = Y?.automationId, E[32] = Y?.mode, E[33] = ec?.name, E[34] = ec?.rrule, E[35] = W, E[36] = $, E[37] = a, E[38] = l, E[39] = b, E[40] = y, E[41] = j, E[42] = w, E[43] = k, E[44] = N, E[45] = C
                } else a = E[37], l = E[38], b = E[39], y = E[40], j = E[41], w = E[42], k = E[43], N = E[44], C = E[45];
                let eg = k,
                    ef = "suggested-update" === z && ep && em.isLoading,
                    eb = "suggested-create" === z || "suggested-update" === z,
                    ey = eb ? L : void 0,
                    ej = O ?? null,
                    ew = D ?? null,
                    ek = q ?? "",
                    eN = B ?? "",
                    eC = W ?? "";
                E[77] !== V ? (S = V ?? [], E[77] = V, E[78] = S) : S = E[78];
                let eS = void 0 !== H ? H : V?.[0] === r.gd ? null : V?.[0] ?? null,
                    eM = F ?? null,
                    eI = G ?? null,
                    eT = K ?? null,
                    eR = Q ?? null;
                E[79] !== Z ? (M = void 0 !== Z ? {
                    notificationPolicy: Z
                } : {}, E[79] = Z, E[80] = M) : M = E[80];
                let eA = $ ?? null;
                E[81] !== ei || E[82] !== eu || E[83] !== el || E[84] !== S || E[85] !== eS || E[86] !== eM || E[87] !== eI || E[88] !== eT || E[89] !== eR || E[90] !== M || E[91] !== eA || E[92] !== ey || E[93] !== ej || E[94] !== ew || E[95] !== ek || E[96] !== eN || E[97] !== eC ? (I = {
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
                    model: eT,
                    reasoningEffort: eR,
                    ...M,
                    targetThreadId: el,
                    status: eA
                }, E[81] = ei, E[82] = eu, E[83] = el, E[84] = S, E[85] = eS, E[86] = eM, E[87] = eI, E[88] = eT, E[89] = eR, E[90] = M, E[91] = eA, E[92] = ey, E[93] = ej, E[94] = ew, E[95] = ek, E[96] = eN, E[97] = eC, E[98] = I) : I = E[98];
                let e_ = I,
                    eU = null != es;
                E[99] !== l || E[100] !== eg || E[101] !== eu || E[102] !== ed || E[103] !== eU ? (T = (0, h.A)({
                    directiveMode: eu,
                    canCreate: l,
                    canUpdate: eg,
                    isViewMode: ed,
                    forceOpen: eU
                }), E[99] = l, E[100] = eg, E[101] = eu, E[102] = ed, E[103] = eU, E[104] = T) : T = E[104];
                let eE = T,
                    eL = y ? null : j;
                E[105] !== eE || E[106] !== a || E[107] !== es || E[108] !== e_ || E[109] !== ef || E[110] !== eb || E[111] !== en || E[112] !== ea || E[113] !== ee || E[114] !== N ? (R = () => {
                    if (ef) return;
                    let e = a;
                    null != e ? v.c.dispatchHostMessage({
                        type: "navigate-to-route",
                        path: `/automations?automationId=${e}`
                    }) : "create" === eE && (ee.set(h.e, null), ee.set(h.f, e_), v.c.dispatchHostMessage({
                        type: "navigate-to-route",
                        path: "/automations?automationMode=create"
                    }))
                }, E[105] = eE, E[106] = a, E[107] = es, E[108] = e_, E[109] = ef, E[110] = eb, E[111] = en, E[112] = ea, E[113] = ee, E[114] = N, E[115] = R) : R = E[115];
                let eP = R,
                    eO = !y && !ef && (null != a || "create" === eE),
                    eD = Y?.deleteStatus;
                E[116] !== b || E[117] !== et || E[118] !== eD ? (A = function(e) {
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
                    deleteStatus: eD,
                    intl: et,
                    mode: b
                }), E[116] = b, E[117] = et, E[118] = eD, E[119] = A) : A = E[119];
                let ez = A;
                E[120] !== ez || E[121] !== w || E[122] !== eL ? (_ = [ez, w, eL].filter(f), E[120] = ez, E[121] = w, E[122] = eL, E[123] = _) : _ = E[123];
                let eq = _.join(" · "),
                    eB = eL ?? ez,
                    eW = eq || void 0;
                return E[124] !== eO || E[125] !== eP || E[126] !== eB || E[127] !== eW || E[128] !== C ? (U = (0, n.jsx)(p.a, {
                    title: C,
                    subtitle: eB,
                    ariaLabel: eW,
                    canOpen: eO,
                    onOpen: eP
                }), E[124] = eO, E[125] = eP, E[126] = eB, E[127] = eW, E[128] = C, E[129] = U) : U = E[129], U
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
            h = a("umSm"),
            x = a("tSEg"),
            v = a("nMdB"),
            g = a("FWVQ"),
            f = a("qZWE"),
            b = a("pGLn");
        a.d(t, {}, {
            a: function(e) {
                let t, a, y, j, w, k, N, C, S, M, I = (0, o.c)(37),
                    {
                        mcpAppId: T,
                        name: R,
                        status: A,
                        disabled: _,
                        icon: U,
                        accessory: E,
                        className: L,
                        disclosure: P
                    } = e,
                    O = (0, s.y)(x.a),
                    D = (0, u.c)(),
                    z = (0, r.a)(),
                    q = (0, s.x)(_ ? null : f.p, T);
                I[0] !== z ? (t = z.formatMessage({
                    id: "codex.mcpTool.openAppInTab",
                    defaultMessage: "Open app in tab",
                    description: "Opens an MCP app in a tab from its tool call row"
                }), I[0] = z, I[1] = t) : t = I[1];
                let B = t;
                I[2] !== q?.inline || I[3] !== P || I[4] !== T || I[5] !== O || I[6] !== A ? (a = P ?? ("closed" === A && q?.inline ? {
                    expanded: !1,
                    onToggle: () => (0, f.x)(O, T, "inline")
                } : void 0), I[2] = q?.inline, I[3] = P, I[4] = T, I[5] = O, I[6] = A, I[7] = a) : a = I[7];
                let W = a;
                I[8] !== q?.tab || I[9] !== B || I[10] !== T || I[11] !== O ? (y = q?.tab ? (0, n.jsx)(l.a, {
                    content: B,
                    children: (0, n.jsx)(p.a, {
                        className: "relative",
                        "aria-label": B,
                        color: "ghost",
                        size: "icon",
                        onClick: () => (0, f.x)(O, T, "fullscreen"),
                        children: (0, n.jsx)(m.N, {})
                    })
                }) : null, I[8] = q?.tab, I[9] = B, I[10] = T, I[11] = O, I[12] = y) : y = I[12], I[13] !== E || I[14] !== y ? (j = (0, n.jsxs)(n.Fragment, {
                    children: [y, E]
                }), I[13] = E, I[14] = y, I[15] = j) : j = I[15], I[16] !== W || I[17] !== D ? (w = null == W ? void 0 : {
                    ...W,
                    onToggle: e => {
                        (0, v.a)(e.currentTarget, D), W.onToggle(e)
                    }
                }, I[16] = W, I[17] = D, I[18] = w) : w = I[18];
                let H = "opening" === A,
                    V = null != W && "group-hover/activity-header:[--agent-activity-summary-color:var(--color-text)]";
                return I[19] !== V ? (k = (0, i.b)("min-w-0 shrink truncate", b.a.summary, V), I[19] = V, I[20] = k) : k = I[20], I[21] !== z || I[22] !== R ? (N = R ?? z.formatMessage(g.c), I[21] = z, I[22] = R, I[23] = N) : N = I[23], I[24] !== A || I[25] !== N ? (C = (0, n.jsx)(c.a, {
                    id: "mcpApp.activity.status",
                    defaultMessage: "{status, select, opening {Opening {name}} open {Opened {name}} error {Couldn’t open {name}} other {Open {name}}}",
                    description: "Widget activity row: loading, successfully opened, or an action to reopen. The same human-facing tool or view name is used in every state.",
                    values: {
                        status: A,
                        name: N
                    }
                }), I[24] = A, I[25] = N, I[26] = C) : C = I[26], I[27] !== C || I[28] !== H || I[29] !== k ? (S = (0, n.jsx)(h.a, {
                    active: H,
                    role: "status",
                    className: k,
                    children: C
                }), I[27] = C, I[28] = H, I[29] = k, I[30] = S) : S = I[30], I[31] !== L || I[32] !== U || I[33] !== S || I[34] !== j || I[35] !== w ? (M = (0, n.jsxs)(d.a, {
                    className: L,
                    accessory: j,
                    disclosure: w,
                    children: [U, S]
                }), I[31] = L, I[32] = U, I[33] = S, I[34] = j, I[35] = w, I[36] = M) : M = I[36], M
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
                let t, a, s, h, x, v, g, f, b = (0, o.c)(32),
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
                let T = s;
                b[13] !== T ? (h = null == T ? null : {
                    kind: "page",
                    id: T.page_id
                }, b[13] = T, b[14] = h) : h = b[14], b[15] !== k ? (x = {
                    enabled: k
                }, b[15] = k, b[16] = x) : x = b[16];
                let R = (0, l.x)(d.c, h, x);
                if (null == R) return N;
                b[17] !== y.completed || b[18] !== y.invocation.server || b[19] !== y.result ? (v = "active", y.completed && (v = (0, c.a)({
                    result: y.result,
                    isCodexAppsServer: "codex_apps" === y.invocation.server
                }) ? "failed" : "completed"), b[17] = y.completed, b[18] = y.invocation.server, b[19] = y.result, b[20] = v) : v = b[20];
                let A = R.title ?? "";
                return b[21] !== N || b[22] !== w || b[23] !== v ? (g = e => {
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
                            state: v,
                            title: a
                        }
                    })
                }, b[21] = N, b[22] = w, b[23] = v, b[24] = g) : g = b[24], b[25] !== R.document_type || b[26] !== R.namespace || b[27] !== R.page_id || b[28] !== R.symbol || b[29] !== A || b[30] !== g ? (f = (0, n.jsx)(p.a, {
                    pageId: R.page_id,
                    documentType: R.document_type,
                    namespace: R.namespace,
                    symbol: R.symbol,
                    title: A,
                    iconClassName: "text-text/60",
                    children: g
                }), b[25] = R.document_type, b[26] = R.namespace, b[27] = R.page_id, b[28] = R.symbol, b[29] = A, b[30] = g, b[31] = f) : f = b[31], f
            }
        })
    })
};