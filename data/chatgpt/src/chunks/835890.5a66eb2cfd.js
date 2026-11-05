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
            return (0, o.e)(e.server) && ("automations.create_local" === e.tool || "automations.update_local" === e.tool)
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
            d = a("bN4H"),
            u = a("tSEg");
        a("n7q6");
        var p = a("DuVB");
        a.d(t, {}, {
            a: function(e) {
                let t, a, s, m, x, h, v, g = (0, o.c)(22),
                    {
                        automation: f
                    } = e,
                    b = (0, l.y)(u.a),
                    y = (0, i.a)(),
                    j = (0, l.x)(c.g, f.id);
                g[0] !== f || g[1] !== j || g[2] !== y ? (t = (0, p.a)(f, j, y), g[0] = f, g[1] = j, g[2] = y, g[3] = t) : t = g[3];
                let {
                    scheduleLabel: w
                } = t;
                g[4] !== f.title || g[5] !== j?.automation.title || g[6] !== j?.automation.title.trim ? (a = j?.automation.title.trim() || f.title, g[4] = f.title, g[5] = j?.automation.title, g[6] = j?.automation.title.trim, g[7] = a) : a = g[7];
                let k = a;
                return g[8] !== f.id || g[9] !== j || g[10] !== b || g[11] !== k ? (s = () => {
                    null == j && b.queryClient.invalidateQueries({
                        queryKey: ["cloud-automations"]
                    }), (0, d.openAutomationSidePanelTab)({
                        scope: b,
                        automationId: f.id,
                        title: k,
                        toggle: !0,
                        navigationSource: "conversation"
                    })
                }, m = null, g[8] = f.id, g[9] = j, g[10] = b, g[11] = k, g[12] = s, g[13] = m) : (s = g[12], m = g[13]), g[14] !== w || g[15] !== s || g[16] !== m || g[17] !== k ? (x = (0, n.jsx)(r.a, {
                    title: k,
                    subtitle: w,
                    ariaLabel: k,
                    canOpen: !0,
                    onOpen: s,
                    actions: m
                }), g[14] = w, g[15] = s, g[16] = m, g[17] = k, g[18] = x) : x = g[18], g[19] === Symbol.for("react.memo_cache_sentinel") ? (h = null, g[19] = h) : h = g[19], g[20] !== x ? (v = (0, n.jsxs)("div", {
                    className: "flex w-full min-w-0 flex-col gap-2 self-start",
                    children: [x, h]
                }), g[20] = x, g[21] = v) : v = g[21], v
            },
            b: function(e) {
                let t, a, l, i, r, c, d = (0, o.c)(16),
                    {
                        operation: u
                    } = e;
                return d[0] !== u ? (t = "pendingCreate" === u && (0, n.jsx)(s.a, {
                    id: "chatgpt.tpp.cot_v5.active_status.working",
                    defaultMessage: "Working",
                    description: "Short in-progress status label in a ChatGPT Work conversation shown while the model is processing the user's request. Indicates that work is underway, not that a product is operational or functional."
                }), d[0] = u, d[1] = t) : t = d[1], d[2] !== u ? (a = "createGoal" === u && (0, n.jsx)(s.a, {
                    id: "chatgpt.tasks.conversation.tool_status.creating.goal",
                    defaultMessage: "Creating goal",
                    description: "Short, neutral progress label in a ChatGPT conversation on web or desktop, shown to the end user while their requested goal and its saved plan are being created and the response is still streaming. A goal is an ongoing objective, not a scheduled reminder. Use a concise status phrase with no final punctuation."
                }), d[2] = u, d[3] = a) : a = d[3], d[4] !== u ? (l = "create" === u && (0, n.jsx)(s.a, {
                    id: "chatgpt.tasks.conversation.tool_status.creating",
                    defaultMessage: "Creating scheduled task",
                    description: "Short status message shown in a ChatGPT conversation while the scheduled-task tool creates a task for the user. This label has no trailing punctuation or ellipsis."
                }), d[4] = u, d[5] = l) : l = d[5], d[6] !== u ? (i = "update" === u && (0, n.jsx)(s.a, {
                    id: "chatgpt.tasks.conversation.tool_status.updating",
                    defaultMessage: "Updating scheduled task",
                    description: "Short status message shown in a ChatGPT conversation while the scheduled-task tool updates an existing task for the user. This label has no trailing punctuation or ellipsis."
                }), d[6] = u, d[7] = i) : i = d[7], d[8] !== u ? (r = "list" === u && (0, n.jsx)(s.a, {
                    id: "chatgpt.tasks.conversation.tool_status.listing",
                    defaultMessage: "Listing scheduled tasks",
                    description: "Short status message shown in a ChatGPT conversation while the scheduled-task tool retrieves the user's tasks. This label has no trailing punctuation or ellipsis."
                }), d[8] = u, d[9] = r) : r = d[9], d[10] !== t || d[11] !== a || d[12] !== l || d[13] !== i || d[14] !== r ? (c = (0, n.jsxs)("div", {
                    className: "loading-shimmer-pure-text text-size-chat text-secondary select-none",
                    role: "status",
                    children: [t, a, l, i, r]
                }), d[10] = t, d[11] = a, d[12] = l, d[13] = i, d[14] = r, d[15] = c) : c = d[15], c
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
            d = a("yGJW"),
            u = a("tSEg"),
            p = a("dQRk");
        let m = (0, l.v)(u.a, e => !1);
        a.d(t, {}, {
            a: function(e) {
                let t, a, x, h = (0, n.c)(8),
                    {
                        conversationId: v
                    } = e,
                    g = (0, l.y)(u.a),
                    {
                        key: f,
                        state: b
                    } = (0, s.Y)();
                h[0] !== b ? (t = (0, c.a)(b), h[0] = b, h[1] = t) : t = h[1];
                let y = t;
                return h[2] !== v || h[3] !== f || h[4] !== g || h[5] !== y ? (a = () => {
                    if ("chatgpt-thread" !== g.value.routeKind) return;
                    let e = g.value.conversationId;
                    return g.watch(t => {
                        let a = t.get(p.j, v);
                        if (null == a || a !== t.get(p.j, e)) return;
                        let n = {
                            locationKey: f,
                            conversationId: a
                        };
                        g.get(m, n) || (g.set(m, n, !0), (0, d.a)(g, o.c, {
                            type: "CHATGPT_TASKS_EVENT_TYPE_CONVERSATION_WITH_TASK_VIEWED",
                            conversationId: a,
                            openSource: null == y ? void 0 : r.c[y],
                            openDestination: "CHATGPT_TASKS_OPEN_DESTINATION_CONVERSATION"
                        }))
                    })
                }, x = [v, f, g, y], h[2] = v, h[3] = f, h[4] = g, h[5] = y, h[6] = a, h[7] = x) : (a = h[6], x = h[7]), (0, i.useEffect)(a, x), null
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
                let d = t?.automation.schedule ?? e.schedule,
                    u = /^DTSTART[;:]/m.test(d) && !/^RRULE:/m.test(d) || /(?:^|[;:])COUNT=1(?:;|$)/m.test(d),
                    p = null == t ? e.nextRunAt ?? null : (0, l.j)(t);
                return i = u && t?.automation.timing_mode !== "flexible_schedule" ? (0, n.f)({
                    rrule: d,
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
            d = a("Ro2M"),
            u = a("bN4H"),
            p = a("V64I"),
            m = a("WrBH"),
            x = a("tSEg"),
            h = a("cWHY"),
            v = a("VRzh"),
            g = a("DuVB");

        function f(e) {
            return (0, n.jsx)(b, {
                automation: e
            }, e.id)
        }
        let b = (0, i.memo)(function(e) {
            let t, a, i, s, c, m, h, v = (0, o.c)(19),
                {
                    automation: f
                } = e,
                b = (0, l.y)(x.a),
                y = (0, r.a)(),
                j = (0, l.x)(d.g, f.id);
            v[0] !== f || v[1] !== j || v[2] !== y ? (t = (0, g.a)(f, j, y), v[0] = f, v[1] = j, v[2] = y, v[3] = t) : t = v[3];
            let {
                scheduleLabel: w,
                title: k
            } = t;
            return v[4] !== f.id || v[5] !== b || v[6] !== k ? (a = () => {
                (0, u.openAutomationSidePanelTab)({
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
            }), v[15] = m) : m = v[15], v[16] !== a || v[17] !== c ? (h = (0, n.jsx)("li", {
                className: "border-b border-subtle",
                "data-automation-card": !0,
                children: (0, n.jsxs)("button", {
                    type: "button",
                    className: "flex w-full min-w-0 cursor-interaction items-center justify-between gap-4 py-3 text-start hover:text-default",
                    onClick: a,
                    children: [c, m]
                })
            }), v[16] = a, v[17] = c, v[18] = h) : h = v[18], h
        });
        a.d(t, {}, {
            a: function(e) {
                let t, a, i, r, u, p, x, g, b, y, j = (0, o.c)(22),
                    {
                        automations: w,
                        conversationId: k
                    } = e,
                    N = (0, c._)(),
                    {
                        data: C,
                        isSuccess: S
                    } = (0, l.z)(d.k);
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
                        children: (0, n.jsx)(h.a, {
                            children: (0, n.jsx)(s.a, {
                                id: "automations.scheduled.destination.label",
                                defaultMessage: "Scheduled",
                                description: "Title of the Scheduled destination and the compact scheduled-task list in a conversation"
                            })
                        })
                    })]
                }), j[8] = r) : r = j[8], j[9] !== M ? (u = M.slice(0, 5).map(f), j[9] = M, j[10] = u) : u = j[10], j[11] !== N ? (p = () => {
                    N("/automations", {
                        state: {
                            navigationSource: "conversation"
                        }
                    })
                }, j[11] = N, j[12] = p) : p = j[12], j[13] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, n.jsx)(s.a, {
                    id: "automations.list.seeAllTasks",
                    defaultMessage: "See all tasks",
                    description: "Button in a compact scheduled-task conversation list that opens the Scheduled destination"
                }), j[13] = x) : x = j[13], j[14] !== p ? (g = (0, n.jsx)("li", {
                    children: (0, n.jsx)("button", {
                        type: "button",
                        className: "w-full cursor-interaction py-3 text-start text-sm text-tertiary select-none hover:text-default",
                        onClick: p,
                        children: x
                    })
                }), j[14] = p, j[15] = g) : g = j[15], j[16] !== u || j[17] !== g ? (b = (0, n.jsxs)("ul", {
                    className: "px-4",
                    children: [u, g]
                }), j[16] = u, j[17] = g, j[18] = b) : b = j[18], j[19] !== a || j[20] !== b ? (y = (0, n.jsxs)("section", {
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
            d = a("Sm6l"),
            u = a("HOLv"),
            p = a("V64I"),
            m = a("V8uZ"),
            x = a("Sgcz"),
            h = a("umSm"),
            v = a("FgmP");

        function g(e) {
            let t, a, c, u, v, g, b, y, j, w, k, N, C, S, M = (0, o.c)(43),
                {
                    className: I,
                    isExpandable: R,
                    review: T
                } = e,
                A = (0, r.a)(),
                [_, U] = (0, s.useState)(!1);
            M[0] !== A || M[1] !== T ? (t = (0, x.c)(A, T), M[0] = A, M[1] = T, M[2] = t) : t = M[2];
            let E = t;
            if (!(void 0 === R || R)) {
                let e, t;
                return M[3] !== I ? (e = (0, l.b)("min-w-0 truncate pt-1 text-codex-description/80", I), M[3] = I, M[4] = e) : e = M[4], M[5] !== e || M[6] !== E ? (t = (0, n.jsx)("div", {
                    className: e,
                    children: E
                }), M[5] = e, M[6] = E, M[7] = t) : t = M[7], t
            }
            let L = "denied" === T.status && "high" === T.riskLevel;
            M[8] !== A || M[9] !== T ? (a = (0, x.b)(A, T), M[8] = A, M[9] = T, M[10] = a) : a = M[10];
            let P = a;
            M[11] !== I ? (c = (0, l.b)("flex flex-col pt-1", I), M[11] = I, M[12] = c) : c = M[12], M[13] === Symbol.for("react.memo_cache_sentinel") ? (u = () => U(f), M[13] = u) : u = M[13];
            let z = "inProgress" === T.status,
                O = L ? "text-warning" : "text-codex-description/80 group-hover/automatic-approval-review:text-default";
            M[14] !== O ? (v = (0, l.b)("min-w-0 truncate", O), M[14] = O, M[15] = v) : v = M[15], M[16] !== z || M[17] !== v || M[18] !== E ? (g = (0, n.jsx)(h.a, {
                active: z,
                className: v,
                children: E
            }), M[16] = z, M[17] = v, M[18] = E, M[19] = g) : g = M[19];
            let D = _ && "rotate-90 opacity-100";
            M[20] !== D ? (b = (0, l.b)("icon-2xs shrink-0 text-tertiary transition-[opacity,transform] duration-basic opacity-0 group-hover/automatic-approval-review:opacity-100", D), M[20] = D, M[21] = b) : b = M[21], M[22] !== b ? (y = (0, n.jsx)(p.a, {
                className: b
            }), M[22] = b, M[23] = y) : y = M[23], M[24] !== _ || M[25] !== y || M[26] !== g ? (j = (0, n.jsxs)(d.a, {
                className: "group/automatic-approval-review inline-flex w-fit max-w-full gap-1.5 text-start",
                color: "ghostMuted",
                focusRing: "inset",
                size: "inline",
                onClick: u,
                "aria-expanded": _,
                children: [g, y]
            }), M[24] = _, M[25] = y, M[26] = g, M[27] = j) : j = M[27];
            let B = _ ? "auto" : 0,
                W = +!!_;
            M[28] !== B || M[29] !== W ? (w = {
                height: B,
                opacity: W
            }, M[28] = B, M[29] = W, M[30] = w) : w = M[30];
            let q = _ ? "auto" : "none";
            return M[31] !== q ? (k = {
                overflow: "hidden",
                pointerEvents: q
            }, M[31] = q, M[32] = k) : k = M[32], M[33] !== P ? (N = (0, n.jsx)("p", {
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
                return i[0] !== s || i[1] !== c ? (t = (0, l.b)("shrink-0", c, s), i[0] = s, i[1] = c, i[2] = t) : t = i[2], i[3] !== t ? (a = (0, n.jsx)(u.a, {
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
            i = a("d0tz"),
            s = a("sM3V"),
            r = a("KJ1J"),
            c = a("biqr"),
            d = a("rO8L"),
            u = a("NJrC"),
            p = a("W10I"),
            m = a("EEop"),
            x = a("cLdu"),
            h = a("ueue"),
            v = a("whdX"),
            g = a("tSEg"),
            f = a("KU8M"),
            b = a("LF5P"),
            y = a("MdwM"),
            j = a("Hkqr"),
            w = a("acxW");
        a.d(t, {}, {
            a: function(e) {
                let t, a, o, c, d, u, m, x, h, v, g = (0, n.c)(50),
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
                g[0] !== b.invocation.server || g[1] !== b.result ? (t = (0, r.e)(b.invocation.server), a = (0, w.a)({
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
                g[14] !== M ? (d = {
                    enabled: M
                }, g[14] = M, g[15] = d) : d = g[15];
                let U = (0, l.x)(f.a, _, d);
                g[16] !== U.data || g[17] !== b.invocation.server || g[18] !== b.invocation.tool || g[19] !== b.invocationResourceUri ? (u = (0, p.c)({
                    invocationResourceUri: b.invocationResourceUri,
                    mcpServerStatuses: U.data,
                    server: b.invocation.server,
                    tool: b.invocation.tool
                })?.resourceUri, g[16] = U.data, g[17] = b.invocation.server, g[18] = b.invocation.tool, g[19] = b.invocationResourceUri, g[20] = u) : u = g[20];
                let E = u;
                g[21] !== U.isPending || g[22] !== j || g[23] !== E || g[24] !== T?._meta || g[25] !== k?.resourceUri || g[26] !== b.appContext?.resourceUri || g[27] !== b.mcpAppResourceUri ? (m = j.startsWith("chatgpt:") ? E : b.appContext?.resourceUri ?? E ?? (U.isPending ? k?.resourceUri : void 0) ?? (0, i.Gg)(T?._meta) ?? b.mcpAppResourceUri, g[21] = U.isPending, g[22] = j, g[23] = E, g[24] = T?._meta, g[25] = k?.resourceUri, g[26] = b.appContext?.resourceUri, g[27] = b.mcpAppResourceUri, g[28] = m) : m = g[28];
                let L = m,
                    P = null != L && U.isPending && b.appContext?.resourceUri == null && null == E && k?.resourceUri == null,
                    z = (0, l.x)(S && t ? f.b : null, _);
                I ? x = "error" : b.completed && null == b.result && null == T && (x = "cancelled");
                let O = L ?? k?.resourceUri ?? null,
                    D = t && null != b.appContext ? b.callId : null,
                    B = x;
                return g[29] !== U.data || g[30] !== b.appContext || g[31] !== b.invocation.server || g[32] !== b.invocation.tool || g[33] !== b.invocationResourceUri ? (h = (0, p.b)({
                    appContext: b.appContext,
                    invocationResourceUri: b.invocationResourceUri,
                    mcpServerStatuses: U.data,
                    server: b.invocation.server,
                    tool: b.invocation.tool
                }), g[29] = U.data, g[30] = b.appContext, g[31] = b.invocation.server, g[32] = b.invocation.tool, g[33] = b.invocationResourceUri, g[34] = h) : h = g[34], g[35] !== U || g[36] !== j || g[37] !== T || g[38] !== y || g[39] !== t || g[40] !== P || g[41] !== b || g[42] !== R || g[43] !== D || g[44] !== h || g[45] !== O || g[46] !== I || g[47] !== x || g[48] !== z ? (v = {
                    item: b,
                    hostId: y,
                    conversationId: j,
                    catalog: U,
                    resourceUri: O,
                    isResourceUriPending: P,
                    toolScope: z,
                    isCodexAppsToolCall: t,
                    originCallId: D,
                    successfulToolResult: R,
                    displayedSuccessfulToolResult: T,
                    toolCallFailed: I,
                    toolCallStatus: B,
                    toolDefinition: h
                }, g[35] = U, g[36] = j, g[37] = T, g[38] = y, g[39] = t, g[40] = P, g[41] = b, g[42] = R, g[43] = D, g[44] = h, g[45] = O, g[46] = I, g[47] = x, g[48] = z, g[49] = v) : v = g[49], v
            },
            b: function(e, t) {
                let a, o, l, i, s = (0, n.c)(24),
                    {
                        item: r,
                        hostId: c,
                        conversationId: d,
                        catalog: p,
                        resourceUri: m,
                        isResourceUriPending: x,
                        toolScope: h,
                        originCallId: g
                    } = e,
                    f = h?.connectorId ?? null,
                    b = h?.kind === "target" ? h : null,
                    y = m ?? null,
                    j = t && !x && (null == g || r.completed);
                s[0] !== d || s[1] !== c || s[2] !== r.appContext || s[3] !== r.invocation.server || s[4] !== g || s[5] !== f || s[6] !== b || s[7] !== y || s[8] !== j ? (a = {
                    appContext: r.appContext,
                    connectorId: f,
                    connectorTarget: b,
                    hostId: c,
                    originCallId: g,
                    server: r.invocation.server,
                    threadId: d,
                    uri: y,
                    enabled: j
                }, s[0] = d, s[1] = c, s[2] = r.appContext, s[3] = r.invocation.server, s[4] = g, s[5] = f, s[6] = b, s[7] = y, s[8] = j, s[9] = a) : a = s[9];
                let w = (0, v.f)(a),
                    k = x ? void 0 : w.data;
                s[10] !== k ? (o = (0, u.c)(k), s[10] = k, s[11] = o) : o = s[11];
                let N = o,
                    {
                        error: C,
                        isPending: S,
                        isFetching: M
                    } = x || e.isCodexAppsToolCall && null == h ? p : w;
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
                let t, a, i, s, u, p, v, f, w, k, N, C, S, M = (0, n.c)(50),
                    {
                        item: I,
                        hostId: R,
                        appInfoOverride: T,
                        enabled: A,
                        retryOnMount: _
                    } = e,
                    U = void 0 === A || A,
                    E = (0, l.y)(g.a);
                M[0] !== T || M[1] !== U || M[2] !== I ? (t = U && null == T && (0, b.h)(I), M[0] = T, M[1] = U, M[2] = I, M[3] = t) : t = M[3], M[4] !== R || M[5] !== t ? (a = {
                    enabled: t,
                    hostId: R
                }, M[4] = R, M[5] = t, M[6] = a) : a = M[6];
                let {
                    data: L
                } = (0, c.m)(a);
                M[7] !== T || M[8] !== L || M[9] !== I.appContext || M[10] !== I.functionName || M[11] !== I.invocation.server || M[12] !== I.invocation.tool ? (i = T ?? (null == L ? null : (0, j.b)({
                    appContext: I.appContext,
                    apps: L,
                    functionName: I.functionName,
                    serverName: I.invocation.server,
                    toolName: I.invocation.tool
                })), M[7] = T, M[8] = L, M[9] = I.appContext, M[10] = I.functionName, M[11] = I.invocation.server, M[12] = I.invocation.tool, M[13] = i) : i = M[13];
                let P = i;
                M[14] !== U || M[15] !== I.invocation.server || M[16] !== I.pluginId ? (s = U && null != I.pluginId && !(0, r.e)(I.invocation.server), M[14] = U, M[15] = I.invocation.server, M[16] = I.pluginId, M[17] = s) : s = M[17], M[18] !== R || M[19] !== s ? (u = {
                    enabled: s,
                    hostId: R
                }, M[18] = R, M[19] = s, M[20] = u) : u = M[20];
                let z = (0, d.a)(u);
                M[21] !== R || M[22] !== z ? (p = {
                    enabled: z,
                    hostId: R,
                    roots: void 0,
                    resolveActiveRoots: !0
                }, M[21] = R, M[22] = z, M[23] = p) : p = M[23];
                let {
                    data: O
                } = (0, x.l)(p);
                M[24] !== O || M[25] !== I.pluginId ? (v = O?.find(e => {
                    let {
                        plugin: t
                    } = e;
                    return t.id === I.pluginId || null != t.remotePluginId && t.remotePluginId === I.pluginId
                }), M[24] = O, M[25] = I.pluginId, M[26] = v) : v = M[26];
                let D = v,
                    B = z && null != O && null != I.pluginId && null == D;
                M[27] !== R || M[28] !== I.pluginId || M[29] !== E.query || M[30] !== B ? (f = E.query.getOptions(m.l, (0, m.a)({
                    hostId: R,
                    pluginId: B ? I.pluginId ?? null : null
                })), M[27] = R, M[28] = I.pluginId, M[29] = E.query, M[30] = B, M[31] = f) : f = M[31];
                let W = f,
                    q = B && W.enabled,
                    H = _ ?? W.retryOnMount;
                M[32] !== W || M[33] !== q || M[34] !== H ? (w = {
                    ...W,
                    enabled: q,
                    retry: !1,
                    retryOnMount: H
                }, M[32] = W, M[33] = q, M[34] = H, M[35] = w) : w = M[35];
                let {
                    data: V
                } = (0, o.a)(w);
                M[36] !== V ? (k = null == V ? null : (0, h.b)(V), M[36] = V, M[37] = k) : k = M[37];
                let J = k,
                    G = D ?? J,
                    F = J?.plugin.id ?? D?.plugin.id ?? I.pluginId;
                return M[38] !== O || M[39] !== J || M[40] !== B ? (N = B && null != J ? [J] : O ?? [], M[38] = O, M[39] = J, M[40] = B, M[41] = N) : N = M[41], M[42] !== I.invocation.server || M[43] !== F || M[44] !== N ? (C = (0, y.a)({
                    pluginId: F,
                    plugins: N,
                    serverName: I.invocation.server
                }), M[42] = I.invocation.server, M[43] = F, M[44] = N, M[45] = C) : C = M[45], M[46] !== P || M[47] !== G || M[48] !== C ? (S = {
                    matchingApp: P,
                    plugin: G,
                    pluginIcon: C
                }, M[46] = P, M[47] = G, M[48] = C, M[49] = S) : S = M[49], S
            }
        })
    }),
    o1Ns: (function(e, t, a) {
        var n = a("SZCv"),
            o = a.n(n),
            l = a("BolX"),
            i = a("d0tz"),
            s = a("KJ1J"),
            r = a("ojna"),
            c = a("qZWE"),
            d = a("Qg4G"),
            u = a("tSEg"),
            p = a("acxW");
        let m = (0, l.d)(u.a, (e, t) => {
            let {
                get: a
            } = t;
            return new Map(e.map(e => {
                let t = (0, i.Ze)(e),
                    n = a(c.h, t);
                return [e, {
                    sourceId: a(c.s, t),
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
                } = e, o = !(0, r.b)(t.invocation) && !(0, d.b)(t.invocation, a) && !0 !== t.isMcpAppWidgetSuperseded && (n?.sourceId == null || n.sourceId === (0, i.Ze)(t.callId));
                return {
                    isEligible: o,
                    isRenderable: o && !(0, p.a)({
                        isCodexAppsServer: (0, s.e)(t.invocation.server),
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
                if (null == t || (0, o.e)(l)) return null;
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
            d = a("BolX"),
            u = a("d0tz"),
            p = a("OZum"),
            m = a("zd8w"),
            x = a("Wf1j"),
            h = a("oyxz"),
            v = a("mnR8"),
            g = a("ojna"),
            f = a("khkh"),
            b = a("SHXB"),
            y = a("bPZ9"),
            j = a("OOaz"),
            w = a("Zm2g"),
            k = a("FvYa"),
            N = a("Sm6l"),
            C = a("la9L"),
            S = a("rmk3"),
            M = a("JNtf"),
            I = a("mUDD"),
            R = a("KxMp"),
            T = a("HOLv"),
            A = a("Wdu7"),
            _ = a("wwME"),
            U = a("nXaV"),
            E = a("YeQK"),
            L = a("oKu4"),
            P = a("FWVQ"),
            z = a("IN8o"),
            O = a("HwRo"),
            D = a("C3P5"),
            B = a("aENG"),
            W = a("Cv9y"),
            q = a("EAcR"),
            H = a("NJrC"),
            V = a("EDsV"),
            J = a("geS6"),
            G = a("qwxA"),
            F = a("qZWE"),
            K = a("E2ja"),
            Z = a("KLqe"),
            Q = a("Sd8U"),
            X = a("tSEg"),
            $ = a("hZax"),
            Y = a("V8uZ"),
            ee = a("WFY2"),
            et = a("S7UD"),
            ea = a("kRUe"),
            en = a("GmdE"),
            eo = a("t7eZ"),
            el = a("LF5P"),
            ei = a("ZiDw"),
            es = a("ltPT"),
            er = a("SfaR"),
            ec = a("BI7J"),
            ed = a("DYB3"),
            eu = a("MAIj"),
            ep = a("mRLe"),
            em = a("z0Na"),
            ex = a("o62A"),
            eh = a("o1Ns"),
            ev = a("alO6"),
            eg = a("umSm"),
            ef = a("tHoD"),
            eb = a("jKy0"),
            ey = a("RznG"),
            ej = a("r9ev"),
            ew = a("gFsV"),
            ek = a("SCbd"),
            eN = a("vWxq"),
            eC = a("LhYn");

        function eS(e) {
            return "text" !== e.type
        }

        function eM(e) {
            let t, a, l, i, s, r, c, d, u, m, x = (0, o.c)(35),
                {
                    call: v,
                    fallbackPageUrl: g,
                    loadRemoteLogos: f
                } = e,
                b = null == v.sourceHostname ? g : `https://${v.sourceHostname}`,
                y = "invokeTool" === v.kind ? v.inputJson : void 0,
                j = "invokeTool" === v.kind && !0 === v.inputTruncated;
            x[0] !== f || x[1] !== b ? (t = null == b ? (0, n.jsx)(T.a, {
                className: "shrink-0 text-text/60",
                asset: eC.a
            }) : (0, n.jsx)(R.a, {
                className: "icon-xs shrink-0 text-text/60",
                href: b,
                loadRemote: f
            }), x[0] = f, x[1] = b, x[2] = t) : t = x[2], x[3] !== v.name || x[4] !== v.title ? (a = v.title ?? (0, p.a)(v.name, {
                style: "sentence"
            }), x[3] = v.name, x[4] = v.title, x[5] = a) : a = x[5], x[6] !== v.kind || x[7] !== a ? (l = (0, n.jsx)(h.a, {
                id: "codex.mcpTool.webMcpActivity.completed",
                defaultMessage: "{kind, select, listTools {Listed website tools} other {{toolName}}}",
                description: "Human-readable activity label for a website-provided WebMCP tool invocation",
                values: {
                    kind: v.kind,
                    toolName: a
                }
            }), x[6] = v.kind, x[7] = a, x[8] = l) : l = x[8], x[9] !== y || x[10] !== j ? (i = null == y || j ? y : function(e) {
                try {
                    return JSON.parse(e)
                } catch {
                    return e
                }
            }(y), x[9] = y, x[10] = j, x[11] = i) : i = x[11];
            let w = !!j || void 0;
            x[12] !== v.description || x[13] !== v.name || x[14] !== v.readOnlyHint || x[15] !== v.sourceHostname || x[16] !== v.title || x[17] !== i || x[18] !== w ? (s = eI({
                name: v.name,
                title: v.title,
                description: v.description,
                website: v.sourceHostname,
                readOnlyHint: v.readOnlyHint,
                input: i,
                inputTruncated: w
            }, 2), x[12] = v.description, x[13] = v.name, x[14] = v.readOnlyHint, x[15] = v.sourceHostname, x[16] = v.title, x[17] = i, x[18] = w, x[19] = s) : s = x[19];
            let k = j ? "true" : "false";
            return x[20] !== k ? (r = (0, n.jsx)(h.a, {
                id: "codex.localConversation.webMcpTools.toolLabel",
                defaultMessage: "{truncated, select, true {Tool (input truncated)} other {Tool}}",
                description: "Title for a website-provided WebMCP tool definition and its input",
                values: {
                    truncated: k
                }
            }), x[20] = k, x[21] = r) : r = x[21], x[22] !== s || x[23] !== r ? (c = (0, n.jsx)(C.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: s,
                language: "json",
                showStickyRightContent: !1,
                title: r
            }), x[22] = s, x[23] = r, x[24] = c) : c = x[24], x[25] !== v.outputJson || x[26] !== v.outputTruncated ? (d = null == v.outputJson ? null : (0, n.jsx)(C.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: v.outputTruncated ? v.outputJson : function(e) {
                    try {
                        return eI(JSON.parse(e), 2)
                    } catch {
                        return e
                    }
                }(v.outputJson),
                language: "json",
                showStickyRightContent: !1,
                title: (0, n.jsx)(h.a, {
                    id: "codex.localConversation.webMcpTools.resultLabel",
                    defaultMessage: "{truncated, select, true {Result (truncated)} other {Result}}",
                    description: "Title for a website-provided WebMCP tool result",
                    values: {
                        truncated: v.outputTruncated ? "true" : "false"
                    }
                })
            }), x[25] = v.outputJson, x[26] = v.outputTruncated, x[27] = d) : d = x[27], x[28] !== d || x[29] !== c ? (u = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2",
                children: [c, d]
            }), x[28] = d, x[29] = c, x[30] = u) : u = x[30], x[31] !== t || x[32] !== u || x[33] !== l ? (m = (0, n.jsx)(ej.a, {
                icon: t,
                status: "completed",
                summary: l,
                children: u
            }), x[31] = t, x[32] = u, x[33] = l, x[34] = m) : m = x[34], m
        }

        function eI(e, t) {
            try {
                return JSON.stringify(e, null, t) ?? "null"
            } catch {
                return ee.a.debug("Failed to stringify MCP tool call payload", {
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
                r = (0, d.y)(Q.a),
                c = (0, x.a)();
            switch (a.type) {
                case "image": {
                    let e, o, i, d, u, p, m;
                    t[0] !== a.annotations || t[1] !== c ? (e = eA(a.annotations, c), t[0] = a.annotations, t[1] = c, t[2] = e) : e = t[2];
                    let x = e,
                        h = `data:${a.mimeType};base64,${a.data}`;
                    t[3] !== c ? (o = c.formatMessage({
                        id: "codex.mcpTool.contentBlock.imageAlt",
                        defaultMessage: "Image returned by tool",
                        description: "Accessible description for an image included in an MCP tool result"
                    }), t[3] = c, t[4] = o) : o = t[4];
                    let v = o;
                    t[5] !== l || t[6] !== s || t[7] !== v || t[8] !== h || t[9] !== c || t[10] !== r ? (i = () => (0, E.getGeneratedImageContextMenuItems)(r, {
                        chatGptConversationId: l.startsWith("chatgpt:") ? (0, j.d)(l.slice(8)) : void 0,
                        displaySrc: h,
                        hostId: s,
                        image: {
                            kind: "generic",
                            src: h,
                            alt: v
                        },
                        intl: c
                    }), t[5] = l, t[6] = s, t[7] = v, t[8] = h, t[9] = c, t[10] = r, t[11] = i) : i = t[11], t[12] !== v || t[13] !== h ? (d = (0, n.jsx)("img", {
                        className: "max-h-48 w-max max-w-full gap-0.5 rounded-md object-contain",
                        alt: v,
                        src: h
                    }), t[12] = v, t[13] = h, t[14] = d) : d = t[14], t[15] !== i || t[16] !== d ? (u = (0, n.jsx)(S.a, {
                        getItems: i,
                        children: d
                    }), t[15] = i, t[16] = d, t[17] = u) : u = t[17];
                    let g = u;
                    if (null == x) return g;
                    return t[18] !== x ? (p = (0, n.jsx)("p", {
                        className: "text-size-chat whitespace-pre-wrap text-codex-description/80",
                        children: x
                    }), t[18] = x, t[19] = p) : p = t[19], t[20] !== g || t[21] !== p ? (m = (0, n.jsxs)("div", {
                        className: "flex flex-col gap-0.5",
                        children: [g, p]
                    }), t[20] = g, t[21] = p, t[22] = m) : m = t[22], m
                }
                case "audio": {
                    let e, o, l, i;
                    t[23] !== a.annotations || t[24] !== c ? (e = eA(a.annotations, c), t[23] = a.annotations, t[24] = c, t[25] = e) : e = t[25];
                    let s = e;
                    return t[26] !== a.data || t[27] !== a.mimeType ? (o = (0, n.jsx)(eT, {
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
                    t[34] !== a.annotations || t[35] !== c ? (e = eA(a.annotations, c), t[34] = a.annotations, t[35] = c, t[36] = e) : e = t[36];
                    let s = e,
                        r = a.title ?? a.name ?? a.uri;
                    return t[37] !== r ? (o = (0, n.jsx)("div", {
                        className: "break-words text-codex-description/80",
                        children: (0, n.jsx)(h.a, {
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
                    let e, o, l, i, s, r, c, d = a.resource.text ?? a.resource.blob ?? "",
                        u = "" !== d;
                    t[44] !== a.resource.annotations ? (e = e_(a.resource.annotations), t[44] = a.resource.annotations, t[45] = e) : e = t[45];
                    let p = e;
                    return t[46] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, n.jsx)("span", {
                        className: "font-medium text-default",
                        children: (0, n.jsx)(h.a, {
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
                            children: (0, n.jsx)(h.a, {
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
                            children: (0, n.jsx)(h.a, {
                                id: "codex.mcpTool.embeddedResource.annotationsLabel",
                                defaultMessage: "Annotations",
                                description: "Label for annotations shown with an embedded resource"
                            })
                        }), (0, n.jsx)("span", {
                            className: "break-all",
                            children: p
                        })]
                    }) : null, t[51] = p, t[52] = s) : s = t[52], t[53] !== u || t[54] !== d ? (r = u ? (0, n.jsxs)("div", {
                        className: "flex flex-col gap-0.5",
                        children: [(0, n.jsx)("span", {
                            className: "font-medium text-default",
                            children: (0, n.jsx)(h.a, {
                                id: "codex.mcpTool.embeddedResource.contentLabel",
                                defaultMessage: "Content",
                                description: "Label for the content of an embedded resource"
                            })
                        }), (0, n.jsx)("pre", {
                            className: "max-h-48 overflow-auto rounded-md bg-primary-soft px-3 py-2 whitespace-pre-wrap text-codex-description/80",
                            children: d
                        })]
                    }) : null, t[53] = u, t[54] = d, t[55] = r) : r = t[55], t[56] !== l || t[57] !== i || t[58] !== s || t[59] !== r ? (c = (0, n.jsxs)("div", {
                        className: "flex flex-col gap-0.5 text-size-chat text-codex-description/80",
                        children: [l, i, s, r]
                    }), t[56] = l, t[57] = i, t[58] = s, t[59] = r, t[60] = c) : c = t[60], c
                }
                case "unknown": {
                    let e, o, l;
                    return t[61] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.b)("[&_*]:text-text/50", "bg-primary-soft text-codex-description/80 max-h-48 overflow-auto whitespace-pre-wrap rounded-md px-3 py-2 text-size-chat"), t[61] = e) : e = t[61], t[62] !== a.raw ? (o = eI(a.raw, 2), t[62] = a.raw, t[63] = o) : o = t[63], t[64] !== o ? (l = (0, n.jsx)("pre", {
                        className: e,
                        children: o
                    }), t[64] = o, t[65] = l) : l = t[65], l
                }
                case "text": {
                    let e, o, l, s;
                    t[66] !== a.annotations || t[67] !== a.text || t[68] !== c ? (e = [a.text, eA(a.annotations, c)].filter(e => null != e).join("\n"), t[66] = a.annotations, t[67] = a.text, t[68] = c, t[69] = e) : e = t[69];
                    let r = e;
                    return t[70] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, n.jsxs)("div", {
                        className: "sticky top-0 z-10 flex items-center justify-between py-1 ps-2 pe-2 font-sans text-sm text-codex-description select-none",
                        children: [(0, n.jsx)("div", {
                            className: "min-w-0 truncate",
                            children: (0, n.jsx)(h.a, {
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

        function eT(e) {
            let t, a, l, i, s = (0, o.c)(12),
                {
                    data: r,
                    mimeType: c
                } = e;
            s[0] !== r || s[1] !== c ? (t = {
                data: r,
                mimeType: c
            }, s[0] = r, s[1] = c, s[2] = t) : t = s[2];
            let d = t,
                [u, p] = (0, m.useState)(null);
            s[3] !== d ? (a = () => p(d), s[3] = d, s[4] = a) : a = s[4];
            let x = a;
            if (u?.data === r && u.mimeType === c) {
                let e;
                return s[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(h.a, {
                    id: "codex.mcpTool.contentBlock.audioUnavailable",
                    defaultMessage: "Audio unavailable",
                    description: "Short fallback shown instead of the audio player when audio returned by an MCP tool cannot be played"
                }), s[5] = e) : e = s[5], e
            }
            return s[6] !== x || s[7] !== d ? (l = e => {
                if (null != e) return (0, et.d)(e, d, x)
            }, s[6] = x, s[7] = d, s[8] = l) : l = s[8], s[9] !== x || s[10] !== l ? (i = (0, n.jsx)("audio", {
                ref: l,
                className: "w-full gap-0.5",
                controls: !0,
                onError: x,
                preload: "metadata"
            }), s[9] = x, s[10] = l, s[11] = i) : i = s[11], i
        }

        function eA(e, t) {
            let a = e_(e);
            return null == a ? null : t.formatMessage({
                id: "codex.mcpTool.contentBlock.annotationsLine",
                defaultMessage: "Annotations: {annotations}",
                description: "Line showing MCP content block annotations in text output"
            }, {
                annotations: a
            })
        }

        function e_(e) {
            if (null == e) return null;
            let t = [];
            return (null != e.audience && e.audience.length > 0 && t.push(`audience=${e.audience.join(", ")}`), null != e.priority && t.push(`priority=${String(e.priority)}`), null != e.lastModified && t.push(`lastModified=${e.lastModified}`), 0 === t.length) ? null : t.join("; ")
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, r, j, S, E, Q, ee, et, ej, eT, eA, e_, eU, eE, eL, eP, ez, eO, eD, eB, eW, eq, eH, eV, eJ, eG, eF, eK, eZ, eQ, eX, e$, eY, e1, e0, e2, e3, e4, e5, e6, e8, e7, e9, te, tt, ta, tn = (0, o.c)(240),
                    {
                        item: to,
                        conversationId: tl,
                        expandedContentOnly: ti,
                        hideTextBlocksWithStructuredContent: ts,
                        hostId: tr,
                        loadRemoteLogos: tc,
                        appInfoOverride: td,
                        onExpand: tu,
                        onOpenPermissions: tp,
                        renderMcpApps: tm,
                        shouldAutoExpandMcpApp: tx,
                        summary: th,
                        summaryIcon: tv,
                        toolActivityTurnKey: tg
                    } = e,
                    tf = void 0 !== ti && ti,
                    tb = void 0 !== ts && ts,
                    ty = void 0 === tc || tc,
                    tj = void 0 === tm || tm,
                    tw = void 0 === th ? null : th,
                    tk = (0, d.y)(X.a);
                tn[0] !== td || tn[1] !== tr || tn[2] !== to ? (t = {
                    item: to,
                    hostId: tr,
                    appInfoOverride: td
                }, tn[0] = td, tn[1] = tr, tn[2] = to, tn[3] = t) : t = tn[3];
                let {
                    matchingApp: tN,
                    pluginIcon: tC
                } = (0, em.c)(t), tS = (0, x.a)(), {
                    platform: tM
                } = (0, _.a)();
                tn[4] !== to.callId ? (a = (0, u.Ze)(to.callId), tn[4] = to.callId, tn[5] = a) : a = tn[5];
                let tI = a,
                    tR = (0, d.x)(F.s, tI),
                    tT = (0, d.x)(F.h, tI),
                    tA = (0, d.x)(F.o, tI),
                    t_ = tT?.content.toolCallStatus == null && tT?.content.toolResult != null;
                tn[6] !== tr || tn[7] !== to || tn[8] !== tR || tn[9] !== t_ ? (r = (0, eh.a)({
                    item: to,
                    hostId: tr,
                    retainedState: {
                        sourceId: tR,
                        hasSuccessfulToolResult: t_
                    }
                }), tn[6] = tr, tn[7] = to, tn[8] = tR, tn[9] = t_, tn[10] = r) : r = tn[10];
                let tU = r;
                tn[11] !== tU || tn[12] !== tj ? (j = tj && (0, O.c)() && tU.isEligible, tn[11] = tU, tn[12] = tj, tn[13] = j) : j = tn[13];
                let tE = j;
                tn[14] !== tl || tn[15] !== to.callId ? (S = (0, D.a)({
                    callId: to.callId,
                    conversationId: tl
                }), tn[14] = tl, tn[15] = to.callId, tn[16] = S) : S = tn[16];
                let tL = S,
                    tP = (0, d.x)(D.b, tL);
                (0, $.h)("2957382457");
                let tz = (0, d.z)(f.a);
                tn[17] !== tl || tn[18] !== tE ? (E = tE || !tl.startsWith("chatgpt:"), tn[17] = tl, tn[18] = tE, tn[19] = E) : E = tn[19], tn[20] !== tl || tn[21] !== tr || tn[22] !== to || tn[23] !== tA || tn[24] !== tE || tn[25] !== E ? (Q = {
                    item: to,
                    hostId: tr,
                    conversationId: tl,
                    fallback: tA,
                    enabled: tE,
                    catalogEnabled: E
                }, tn[20] = tl, tn[21] = tr, tn[22] = to, tn[23] = tA, tn[24] = tE, tn[25] = E, tn[26] = Q) : Q = tn[26];
                let tO = (0, em.a)(Q),
                    {
                        isCodexAppsToolCall: tD,
                        successfulToolResult: tB,
                        resourceUri: tW,
                        toolDefinition: tq
                    } = tO,
                    {
                        elementHeightPx: tH,
                        elementRef: tV
                    } = (0, es.a)(),
                    tJ = to.result?.type === "success" ? to.result.content : null,
                    tG = to.result?.type === "error" ? to.result.error : null;
                tn[27] !== to || tn[28] !== tM ? (ee = (0, el.e)({
                    item: to,
                    platform: tM
                }), tn[27] = to, tn[28] = tM, tn[29] = ee) : ee = tn[29];
                let tF = ee,
                    tK = tF?.nativeAppReference ?? null,
                    tZ = (0, eu.b)(tK),
                    tQ = tZ?.appPath ?? null;
                tn[30] !== tQ ? (et = {
                    appPath: tQ
                }, tn[30] = tQ, tn[31] = et) : et = tn[31];
                let {
                    iconSmall: tX
                } = (0, w.a)(et);
                tn[32] !== to || tn[33] !== tN || tn[34] !== tv ? (ej = void 0 === tv ? (0, ed.d)(to, null == tN ? [] : [tN])?.icon : tv, tn[32] = to, tn[33] = tN, tn[34] = tv, tn[35] = ej) : ej = tn[35];
                let t$ = ej;
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
                tn[43] !== to.source?.kind || tn[44] !== tB ? (eT = to.source?.kind === "browserUse" && null != tB ? (0, el.c)(tB._meta) : null, tn[43] = to.source?.kind, tn[44] = tB, tn[45] = eT) : eT = tn[45];
                let tY = eT,
                    t1 = tz && !tf && to.completed && (0, u.li)(to.invocation.server) && "js" === to.invocation.tool && null != tB ? (0, er.a)(tB._meta) : [],
                    t0 = tN ?? null;
                tn[46] !== tS || tn[47] !== to.appContext || tn[48] !== to.completed || tn[49] !== to.invocation.arguments || tn[50] !== to.invocation.server || tn[51] !== to.invocation.tool || tn[52] !== to.pluginId || tn[53] !== to.result || tn[54] !== to.source || tn[55] !== to.toolDisplay || tn[56] !== tZ || tn[57] !== tM || tn[58] !== t0 || tn[59] !== tq ? (eA = (0, ev.a)({
                    pluginId: to.pluginId,
                    toolDisplay: to.toolDisplay,
                    toolDefinition: tq,
                    appContext: to.appContext,
                    completed: to.completed,
                    intl: tS,
                    toolName: to.invocation.tool,
                    serverName: to.invocation.server,
                    matchingApp: t0,
                    nativeDesktopAppMetadata: tZ,
                    platform: tM,
                    source: to.source,
                    toolArguments: to.invocation.arguments,
                    toolResult: to.result
                }), tn[46] = tS, tn[47] = to.appContext, tn[48] = to.completed, tn[49] = to.invocation.arguments, tn[50] = to.invocation.server, tn[51] = to.invocation.tool, tn[52] = to.pluginId, tn[53] = to.result, tn[54] = to.source, tn[55] = to.toolDisplay, tn[56] = tZ, tn[57] = tM, tn[58] = t0, tn[59] = tq, tn[60] = eA) : eA = tn[60];
                let t2 = eA,
                    t3 = tE && null != tW && tU.isRenderable,
                    [t4, t5] = (0, m.useState)(!1),
                    {
                        resource: t6,
                        renderData: t8,
                        state: t7,
                        refetch: t9
                    } = (0, em.b)(tO, t3),
                    ae = tT?.sessionId == null ? null : tT.content.resource,
                    at = null == ae ? t6?.resourceIdentityVerified : tT?.content.mcpAppScope.resourceIdentityVerified,
                    aa = null == ae ? t7.error : null,
                    an = t3 && null == ae && t7.isLoading,
                    ao = (0, d.x)(F.p, tI),
                    al = (0, d.x)(F.m, tI),
                    ai = (0, H.a)({
                        hasResourceError: null != aa,
                        isResourceLoading: an,
                        isDilEnabled: !1,
                        renderData: ae ?? t8,
                        resourceUri: tW ?? null,
                        shouldRenderMcpApp: t3
                    }),
                    as = "html" === ai.kind ? ai.renderData : null,
                    ar = (0, V.e)({
                        data: as,
                        error: aa,
                        isLoading: an
                    }, F.E),
                    ac = "fallback" !== ai.kind,
                    ad = tE && null != tW && (!ac || null != aa || null != ao && !(ao instanceof V.b) || "too-large" === ar.kind || "error" === ar.kind),
                    au = ad || (as?.isCollapsible ?? !0),
                    ap = al;
                ad ? ap = "fallback" : "html" !== ai.kind && (ap = ai.kind);
                let am = "pending" === ap,
                    ax = "launcher" === ap,
                    ah = am || ax;
                tn[61] !== tT ? (e_ = null != tT && tT.content.resource?.hideAttribution === !0 && (!0 === tT.content.mcpAppScope.isVerifiedFirstParty || (0, ex.b)(tT.content)), tn[61] = tT, tn[62] = e_) : e_ = tn[62];
                let av = e_,
                    ag = "inline" === ap,
                    af = void 0 !== tx && tx && t3,
                    ab = !ad && t4 || af,
                    ay = ac && !ax && (!au || (tP ?? ab)),
                    aj = ay && !am,
                    aw = t4 || (tP ?? af),
                    [ak, aN] = (0, m.useState)(!1),
                    aC = ag && aj && ak,
                    aS = an || am && ay;
                tn[63] !== ay || tn[64] !== aC || tn[65] !== aS ? (eU = {
                    isLoading: aS,
                    isInlineRequested: ay,
                    isInlineOpening: aC
                }, tn[63] = ay, tn[64] = aC, tn[65] = aS, tn[66] = eU) : eU = tn[66];
                let aM = (0, P.c)(tI, eU),
                    aI = !ad && (am || "html" === ai.kind) ? aM : null;
                tn[67] !== tq ? (eE = (0, J.b)(tq)?.resourceUri, tn[67] = tq, tn[68] = eE) : eE = tn[68];
                let aR = eE,
                    aT = tB?._meta;
                tn[69] !== aT ? (eL = c()(aT, ["_codex_apps", "resource_uri"]), tn[69] = aT, tn[70] = eL) : eL = tn[70];
                let aA = eL;
                tn[71] !== aR || tn[72] !== tD || tn[73] !== tW || tn[74] !== aA || tn[75] !== tq?._meta ? (eP = tD && null != aR && aA === aR && (0, u.Gg)(tq?._meta) === tW, tn[71] = aR, tn[72] = tD, tn[73] = tW, tn[74] = aA, tn[75] = tq?._meta, tn[76] = eP) : eP = tn[76];
                let a_ = !(eP && !0 === at && (0, P.b)({
                    isInline: !au && ("inline" === ap || am),
                    status: aI,
                    hidesAttributionAndActions: as?.hideAttribution === !0 && !0 === as.hideActions
                })) && (ah || !tf && (au || "html" === ai.kind && !av));
                tn[77] !== tD || tn[78] !== to.appContext?.appName || tn[79] !== to.invocation.server || tn[80] !== tN?.name || tn[81] !== tC?.alt ? (ez = tN?.name ?? to.appContext?.appName ?? tC?.alt ?? (tD ? null : (0, p.a)(to.invocation.server)), tn[77] = tD, tn[78] = to.appContext?.appName, tn[79] = to.invocation.server, tn[80] = tN?.name, tn[81] = tC?.alt, tn[82] = ez) : ez = tn[82];
                let aU = ez;
                tn[83] !== aU || tn[84] !== tq ? (eO = (0, P.a)((0, v.a)(tq), aU), tn[83] = aU, tn[84] = tq, tn[85] = eO) : eO = tn[85];
                let aE = eO,
                    aL = ad ? tf || t4 : !ah && (tf || (ac ? aj : aw));
                e: {
                    let e, t, a, n;
                    if (!aL) {
                        let e;
                        tn[86] !== tJ ? (e = {
                            displayContent: tJ,
                            displayStructuredContentJson: null
                        }, tn[86] = tJ, tn[87] = e) : e = tn[87], eD = e;
                        break e
                    }
                    tn[88] !== to.result ? (e = to.result?.type === "success" && null != to.result.structuredContent ? eI(to.result.structuredContent, 2) : null, tn[88] = to.result, tn[89] = e) : e = tn[89];
                    let o = e;tn[90] !== tJ || tn[91] !== tb || tn[92] !== o ? (t = tb && null != o && null != tJ ? tJ.filter(eS) : tJ, tn[90] = tJ, tn[91] = tb, tn[92] = o, tn[93] = t) : t = tn[93];
                    let l = t;tn[94] !== l ? (a = function(e) {
                        if (e?.length !== 1) return null;
                        let [t] = e;
                        if ("text" !== t.type || null != t.annotations) return null;
                        let a = t.text.trim();
                        if ("{" !== a[0] && "[" !== a[0]) return null;
                        try {
                            return eI(JSON.parse(a), 2)
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
                        }, tn[96] = o, tn[97] = l, tn[98] = e) : e = tn[98], eD = e;
                        break e
                    }
                    if (null == o || i === o) {
                        let e, t;
                        tn[99] === Symbol.for("react.memo_cache_sentinel") ? (e = [], tn[99] = e) : e = tn[99];
                        let a = o ?? i;
                        tn[100] !== a ? (t = {
                            displayContent: e,
                            displayStructuredContentJson: a
                        }, tn[100] = a, tn[101] = t) : t = tn[101], eD = t;
                        break e
                    }
                    tn[102] !== o || tn[103] !== l ? (n = {
                        displayContent: l,
                        displayStructuredContentJson: o
                    }, tn[102] = o, tn[103] = l, tn[104] = n) : n = tn[104],
                    eD = n
                }
                let {
                    displayContent: aP,
                    displayStructuredContentJson: az
                } = eD, [aO, aD] = (0, m.useState)(!1);
                t: {
                    let e;
                    if (!aO) {
                        eB = null;
                        break t
                    }
                    tn[105] !== to.callId || tn[106] !== to.durationMs || tn[107] !== to.invocation || tn[108] !== to.result ? (e = eI({
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
                    aq = to.completed || null != to.result || ac,
                    aH = aL ? tH : 0,
                    aV = !to.completed;
                tn[112] !== tN ? (eq = null == tN ? [] : [tN], tn[112] = tN, tn[113] = eq) : eq = tn[113], tn[114] !== to || tn[115] !== ty || tn[116] !== eq || tn[117] !== t2 ? (eH = (0, n.jsx)(Z.a, {
                    item: to,
                    apps: eq,
                    part: "label",
                    loadMetadata: ty,
                    children: t2
                }), tn[114] = to, tn[115] = ty, tn[116] = eq, tn[117] = t2, tn[118] = eH) : eH = tn[118], tn[119] !== aV || tn[120] !== eH ? (eV = (0, n.jsx)(eg.a, {
                    active: aV,
                    className: "min-w-0 shrink truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                    children: eH
                }), tn[119] = aV, tn[120] = eH, tn[121] = eV) : eV = tn[121];
                let aJ = eV;
                tn[122] !== t$ || tn[123] !== tY || tn[124] !== tr || tn[125] !== to || tn[126] !== ty || tn[127] !== tN || tn[128] !== tX || tn[129] !== tZ?.displayName || tn[130] !== tK || tn[131] !== tF || tn[132] !== tC ? (eJ = void 0 !== t$ ? t$ : (0, n.jsx)(en.a, {
                    hostId: tr,
                    item: to,
                    loadRemoteLogos: ty,
                    fallback: null == tC && null != tK ? (0, n.jsx)(k.a, {
                        alt: tZ?.displayName ?? tF?.name ?? to.invocation.server,
                        className: "icon-xs shrink-0 scale-[1.15] object-contain",
                        loadRemote: ty,
                        logoUrl: tX,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(T.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: ew.a
                        })
                    }) : null == tC && tF?.groupKey === el.b ? (0, n.jsx)(T.a, {
                        className: "shrink-0 text-secondary",
                        asset: ew.a
                    }) : null == tC && tF?.logoUrl != null ? (0, n.jsx)(k.a, {
                        alt: tF.name,
                        className: "icon-xs shrink-0 object-contain",
                        loadRemote: ty,
                        logoUrl: tF.logoUrl,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(T.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: ek.a
                        })
                    }) : null == tC && tF?.usesBrowserIcon === !0 ? null == tY ? (0, n.jsx)(T.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: eC.a
                    }) : (0, n.jsx)(R.a, {
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        href: tY,
                        loadRemote: ty
                    }) : null == tC && (0, u.li)(to.invocation.server) ? (0, n.jsx)(T.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: eN.a
                    }) : (0, n.jsx)(k.a, {
                        alt: tC?.alt ?? tN?.name ?? to.appContext?.appName ?? to.invocation.server,
                        appInfo: null == tC ? tN : null,
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        loadRemote: ty,
                        knownAppId: tC?.knownAppId ?? to.appContext?.appName ?? to.appContext?.connectorId,
                        logoUrl: tC?.logoUrl,
                        fallback: (0, n.jsx)(T.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: ek.a
                        })
                    })
                }), tn[122] = t$, tn[123] = tY, tn[124] = tr, tn[125] = to, tn[126] = ty, tn[127] = tN, tn[128] = tX, tn[129] = tZ?.displayName, tn[130] = tK, tn[131] = tF, tn[132] = tC, tn[133] = eJ) : eJ = tn[133];
                let aG = eJ;
                tn[134] !== tw || tn[135] !== aG || tn[136] !== aJ ? (eG = tw ?? (0, n.jsxs)(n.Fragment, {
                    children: [aG, aJ]
                }), tn[134] = tw, tn[135] = aG, tn[136] = aJ, tn[137] = eG) : eG = tn[137];
                let aF = eG;
                tn[138] !== aw || tn[139] !== ay || tn[140] !== t4 || tn[141] !== tL || tn[142] !== tu || tn[143] !== tk || tn[144] !== af || tn[145] !== ad || tn[146] !== ac || tn[147] !== ag || tn[148] !== tg || tn[149] !== tP ? (eF = () => {
                    if (ad) {
                        t4 || tu?.(), t5(!t4);
                        return
                    }
                    let e = ac ? !ay : !aw;
                    if (e && tu?.(), ac) {
                        aN(e && ag), tk.set(D.b, tL, e);
                        return
                    }
                    e && null != tg && (0, ei.b)(tk, tg), !e && (!0 === tP || af) && tk.set(D.b, tL, !1), t5(e)
                }, tn[138] = aw, tn[139] = ay, tn[140] = t4, tn[141] = tL, tn[142] = tu, tn[143] = tk, tn[144] = af, tn[145] = ad, tn[146] = ac, tn[147] = ag, tn[148] = tg, tn[149] = tP, tn[150] = eF) : eF = tn[150];
                let aK = eF;
                tn[151] !== to.automaticApprovalReviews ? (eK = null == to.automaticApprovalReviews ? null : (0, n.jsx)(ea.a, {}), tn[151] = to.automaticApprovalReviews, tn[152] = eK) : eK = tn[152];
                let aZ = eK,
                    aQ = aq && "opening" !== aI && !ax && au ? {
                        alignEnd: ag && aj,
                        expanded: aL,
                        onToggle: aK
                    } : void 0,
                    aX = (0, i.b)("group", ag && aj && (as?.prefersBorder ?? tT?.content.resource?.prefersBorder ?? !0) && "overflow-hidden rounded-lg border border-strong bg-surface"),
                    a$ = ax && "w-full",
                    aY = ag && aj && "w-full px-4 pt-3 pb-2";
                tn[153] !== a$ || tn[154] !== aY ? (eZ = (0, i.b)(a$, aY), tn[153] = a$, tn[154] = aY, tn[155] = eZ) : eZ = tn[155];
                let a1 = eZ;
                tn[156] !== aZ || tn[157] !== aQ || tn[158] !== a1 || tn[159] !== an || tn[160] !== tI || tn[161] !== aF || tn[162] !== aG || tn[163] !== aE || tn[164] !== aI ? (eQ = null != aI ? (0, n.jsx)(z.a, {
                    accessory: aZ,
                    className: a1,
                    disabled: an,
                    disclosure: aQ,
                    icon: aG,
                    mcpAppId: tI,
                    name: aE,
                    status: aI
                }) : (0, n.jsx)(eb.a, {
                    accessory: aZ,
                    className: a1,
                    disclosure: aQ,
                    children: aF
                }), tn[156] = aZ, tn[157] = aQ, tn[158] = a1, tn[159] = an, tn[160] = tI, tn[161] = aF, tn[162] = aG, tn[163] = aE, tn[164] = aI, tn[165] = eQ) : eQ = tn[165];
                let a0 = eQ;
                tn[166] !== t9 ? (eX = () => {
                    t9({
                        cancelRefetch: !1
                    })
                }, tn[166] = t9, tn[167] = eX) : eX = tn[167];
                let a2 = (0, n.jsx)(q.a, {
                        hostDisplayModes: F.E,
                        resource: {
                            data: null == tW ? null : as,
                            error: aa,
                            isLoading: an
                        },
                        inlineSurface: ag ? "card" : "standalone",
                        mcpAppId: tI,
                        appName: aU ?? void 0,
                        presentation: ad ? "inline" : al,
                        onRetryResourceRead: eX,
                        showLoadingStatus: !a_
                    }),
                    a3 = s.a,
                    a4 = +!!aL;
                tn[168] !== a4 || tn[169] !== aH ? (e$ = {
                    height: aH,
                    opacity: a4
                }, tn[168] = a4, tn[169] = aH, tn[170] = e$) : e$ = tn[170];
                let a5 = Y.a,
                    a6 = aL ? "overflow-visible" : "overflow-hidden";
                tn[171] !== a6 ? (eY = (0, i.b)(a6), tn[171] = a6, tn[172] = eY) : eY = tn[172];
                let a8 = aL ? "auto" : "none";
                tn[173] !== a8 ? (e1 = {
                    pointerEvents: a8
                }, tn[173] = a8, tn[174] = e1) : e1 = tn[174], tn[175] !== aj ? (e0 = () => {
                    aj && aN(!1)
                }, tn[175] = aj, tn[176] = e0) : e0 = tn[176];
                let a7 = ef.a,
                    a9 = aL ? tV : null,
                    ne = t3 && "relative",
                    nt = !au && "py-1";
                tn[177] !== ne || tn[178] !== nt ? (e2 = (0, i.b)(ne, nt), tn[177] = ne, tn[178] = nt, tn[179] = e2) : e2 = tn[179];
                let na = !ag && au ? "grouped" : "flush",
                    nn = aL ? (0, n.jsxs)(n.Fragment, {
                        children: [null == to.automaticApprovalReviews ? null : (0, n.jsx)(ea.d, {
                            className: ag ? "px-4" : void 0,
                            isExpandable: !ag,
                            reviews: to.automaticApprovalReviews
                        }), ac ? aC ? (0, n.jsx)(W.a, {
                            className: "w-full",
                            height: (0, B.a)(null, as?.heightHint ?? null, as?.minFrameHeight ?? null),
                            showLoadingStatus: !1
                        }) : a2 : aP && aP.length > 0 ? (0, n.jsx)("div", {
                            className: (0, i.b)("[&_*]:text-text/50", "flex flex-col gap-0.5"),
                            children: aP.map((e, t) => (0, n.jsx)(eR, {
                                block: e,
                                conversationId: tl,
                                hostId: tr
                            }, t))
                        }) : tG ? (0, n.jsx)(A.a, {
                            className: "w-full",
                            fullWidth: !0,
                            level: "danger",
                            children: (0, n.jsx)("div", {
                                className: "max-h-48 overflow-auto text-size-chat whitespace-pre-wrap",
                                children: tG
                            })
                        }) : az ? null : (0, n.jsx)("p", {
                            className: "text-codex-description/80",
                            children: (0, n.jsx)(h.a, {
                                id: "codex.mcpTool.noResult",
                                defaultMessage: "Tool returned no content",
                                description: "Message shown when an MCP tool call produced no content"
                            })
                        }), !an && aL && !aC && !ac && az && (0, n.jsx)(C.CodeSnippet, {
                            codeContainerClassName: "max-h-48 overflow-auto",
                            language: "json",
                            content: az,
                            showStickyRightContent: !1
                        }), !an && aL && !aC && (0, n.jsx)(M.a, {
                            open: aO,
                            onOpenChange: aD,
                            triggerContent: (0, n.jsx)("div", {
                                className: (0, i.b)("inline-flex w-fit", t3 && "absolute right-1 bottom-2 z-50"),
                                children: (0, n.jsx)(l.a, {
                                    side: "top",
                                    align: "center",
                                    content: aW,
                                    children: (0, n.jsx)(N.a, {
                                        className: "cursor-interaction opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 focus-visible:opacity-100",
                                        "aria-label": aW,
                                        color: "ghost",
                                        onClick: () => {
                                            aD(!0)
                                        },
                                        size: "icon",
                                        children: (0, n.jsx)(U.a, {
                                            className: "icon-xxs"
                                        })
                                    })
                                })
                            }),
                            children: (0, n.jsxs)(I.b, {
                                children: [(0, n.jsx)(I.e, {
                                    children: (0, n.jsx)(I.d, {
                                        title: (0, n.jsx)(M.d, {
                                            children: (0, n.jsx)(h.a, {
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
                                }), (0, n.jsx)(I.e, {
                                    children: null == aB ? null : (0, n.jsx)(C.CodeSnippet, {
                                        codeContainerClassName: "max-h-128 overflow-auto",
                                        language: "json",
                                        content: aB,
                                        showStickyRightContent: !0
                                    })
                                })]
                            })
                        })]
                    }) : null;
                tn[180] !== a7 || tn[181] !== a9 || tn[182] !== e2 || tn[183] !== na || tn[184] !== nn ? (e3 = (0, n.jsx)(a7, {
                    ref: a9,
                    className: e2,
                    variant: na,
                    children: nn
                }), tn[180] = a7, tn[181] = a9, tn[182] = e2, tn[183] = na, tn[184] = nn, tn[185] = e3) : e3 = tn[185], tn[186] !== a3.div || tn[187] !== e$ || tn[188] !== a5 || tn[189] !== eY || tn[190] !== e1 || tn[191] !== e0 || tn[192] !== e3 ? (e4 = (0, n.jsx)(a3.div, {
                    initial: !1,
                    animate: e$,
                    transition: a5,
                    className: eY,
                    style: e1,
                    onAnimationComplete: e0,
                    children: e3
                }), tn[186] = a3.div, tn[187] = e$, tn[188] = a5, tn[189] = eY, tn[190] = e1, tn[191] = e0, tn[192] = e3, tn[193] = e4) : e4 = tn[193];
                let no = e4;
                tn[194] !== to || tn[195] !== tp ? (e5 = (0, eo.a)(to) ? (0, n.jsx)(ef.a, {
                    variant: "grouped",
                    children: (0, n.jsx)(A.a, {
                        className: "w-full",
                        fullWidth: !0,
                        level: "warning",
                        actions: null == tp ? void 0 : (0, n.jsx)(N.a, {
                            color: "secondary",
                            onClick: tp,
                            children: (0, n.jsx)(h.a, {
                                id: "codex.mcpTool.reviewPermissions",
                                defaultMessage: "Review permissions",
                                description: "Opens the existing permissions menu for the chat whose tool call could not request approval"
                            })
                        }),
                        children: null == tp ? (0, n.jsx)(h.a, {
                            id: "codex.mcpTool.approvalRequestsDisabled",
                            defaultMessage: "Approval requests were disabled for this tool call. If available, review this chat’s permissions before retrying.",
                            description: "Explanation on a failed MCP tool call that needed approval but could not request it. Suggests the existing permissions control for this chat, which may be unavailable in read-only views or restricted by policy. Does not promise that restrictions can be overridden."
                        }) : (0, n.jsx)(h.a, {
                            id: "codex.mcpTool.approvalRequestsDisabled.recovery",
                            defaultMessage: "Approval requests were disabled for this tool call. Choose “Ask for approval” in this chat’s permissions if available, then ask to retry.",
                            description: "Explains that the tool call was blocked before approval could be requested. The adjacent action opens this chat's permissions menu; the user must select an allowed mode and ask to retry. Managed policy may limit the available modes."
                        })
                    })
                }) : null, tn[194] = to, tn[195] = tp, tn[196] = e5) : e5 = tn[196];
                let nl = ah ? a2 : no;
                tn[197] !== e5 || tn[198] !== nl ? (e6 = (0, n.jsxs)(n.Fragment, {
                    children: [e5, nl]
                }), tn[197] = e5, tn[198] = nl, tn[199] = e6) : e6 = tn[199];
                let ni = e6;
                tn[200] !== to ? (e8 = (0, g.a)(to), tn[200] = to, tn[201] = e8) : e8 = tn[201];
                let ns = e8;
                if (null != ns) {
                    let e;
                    return tn[202] !== ns.id || tn[203] !== ns.schedule || tn[204] !== ns.title ? (e = (0, n.jsx)(L.a, {
                        id: ns.id,
                        mode: "view",
                        name: ns.title,
                        rrule: ns.schedule
                    }), tn[202] = ns.id, tn[203] = ns.schedule, tn[204] = ns.title, tn[205] = e) : e = tn[205], e
                }
                tn[206] !== tr || tn[207] !== to ? (e7 = (0, K.b)(to, tr), tn[206] = tr, tn[207] = to, tn[208] = e7) : e7 = tn[208];
                let nr = e7;
                if (nr?.type === "chatgpt-automation") {
                    let e;
                    return tn[209] !== nr ? (e = (0, n.jsx)(b.a, {
                        automation: nr
                    }), tn[209] = nr, tn[210] = e) : e = tn[210], e
                }
                if (nr?.type === "chatgpt-automation-list") {
                    let e;
                    return tn[211] !== nr.automations ? (e = (0, n.jsx)(y.a, {
                        automations: nr.automations
                    }), tn[211] = nr.automations, tn[212] = e) : e = tn[212], e
                }
                tn[213] !== ay || tn[214] !== tI || tn[215] !== tj || tn[216] !== tk || tn[217] !== t3 ? (e9 = tj || "chatgpt-thread" !== tk.value.routeKind ? (0, n.jsx)(G.b, {
                    mcpAppId: tI,
                    isInlineRequested: t3 && ay
                }) : null, tn[213] = ay, tn[214] = tI, tn[215] = tj, tn[216] = tk, tn[217] = t3, tn[218] = e9) : e9 = tn[218], tn[219] !== aZ || tn[220] !== aX || tn[221] !== aQ || tn[222] !== a_ || tn[223] !== a1 || tn[224] !== ni || tn[225] !== ag || tn[226] !== tw || tn[227] !== tv || tn[228] !== aJ || tn[229] !== a0 || tn[230] !== aI ? (te = void 0 !== tv && a_ && null == aI ? (0, n.jsx)(ec.a, {
                    accessory: aZ,
                    body: ni,
                    className: aX,
                    "data-mcp-app-card": !!ag || void 0,
                    disclosure: aQ,
                    headerClassName: a1,
                    icon: tv,
                    summary: tw ?? aJ
                }) : (0, n.jsx)(ey.a, {
                    className: aX,
                    "data-mcp-app-card": !!ag || void 0,
                    header: a_ ? a0 : null,
                    body: ni
                }), tn[219] = aZ, tn[220] = aX, tn[221] = aQ, tn[222] = a_, tn[223] = a1, tn[224] = ni, tn[225] = ag, tn[226] = tw, tn[227] = tv, tn[228] = aJ, tn[229] = a0, tn[230] = aI, tn[231] = te) : te = tn[231], tn[232] !== tY || tn[233] !== to.callId || tn[234] !== ty ? (tt = (e, t) => (0, n.jsxs)(m.Fragment, {
                    children: [(0, n.jsx)(ep.a, {
                        variant: "grouped"
                    }), (0, n.jsx)(eM, {
                        call: e,
                        fallbackPageUrl: tY,
                        loadRemoteLogos: ty
                    })]
                }, `${to.callId}:webmcp:${t}:${e.name}`), tn[232] = tY, tn[233] = to.callId, tn[234] = ty, tn[235] = tt) : tt = tn[235];
                let nc = t1.map(tt);
                return tn[236] !== e9 || tn[237] !== te || tn[238] !== nc ? (ta = (0, n.jsxs)(n.Fragment, {
                    children: [e9, te, nc]
                }), tn[236] = e9, tn[237] = te, tn[238] = nc, tn[239] = ta) : ta = tn[239], ta
            }
        })
    }),
    KU8M: (function(e, t, a) {
        var n = a("BolX"),
            o = a("d0tz"),
            l = a("KJ1J"),
            i = a("geS6"),
            s = a("W10I"),
            r = a("a4MG"),
            c = a("OWtl");
        let d = (0, n.d)(c.a, (e, t) => {
                let {
                    hostId: a,
                    threadId: n,
                    ...c
                } = e, {
                    get: d
                } = t;
                if (null == n) return d(r.p, a);
                let u = {
                    hostId: a,
                    threadId: n,
                    serverName: c.server
                };
                if (!(0, l.e)(c.server) || c.appContext?.linkId == null) return d(r.q, u);
                let p = d(r.p, a);
                if (p.isError) return d(r.q, u);
                let m = (0, s.b)({
                    ...c,
                    mcpServerStatuses: p.data
                });
                return void 0 === m || (0, o.Gg)(m?._meta) === c.appContext.resourceUri && null != (0, i.c)(m, c.appContext) ? p : d(r.q, u)
            }),
            u = (0, n.d)(c.a, (e, t) => {
                let {
                    appContext: a,
                    hostId: n,
                    invocationResourceUri: o,
                    server: s,
                    threadId: r,
                    tool: c
                } = e, {
                    get: u
                } = t;
                if (!(0, l.e)(s)) return null;
                let p = u(d, {
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
            a: d,
            b: u
        })
    }),
    GmdE: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            l = a("BolX"),
            i = a("d0tz"),
            s = a("sM3V"),
            r = a("KJ1J"),
            c = a("FvYa"),
            d = a("zUz7"),
            u = a("LF5P");
        a.d(t, {}, {
            a: function(e) {
                let t, a, p, m, x = (0, o.c)(14),
                    {
                        fallback: h,
                        hostId: v,
                        item: g,
                        loadRemoteLogos: f
                    } = e,
                    b = g.invocation.server;
                x[0] !== g.threadId ? (t = (0, i.Qe)(g.threadId), x[0] = g.threadId, x[1] = t) : t = x[1], x[2] !== v || x[3] !== g.invocation.server || x[4] !== t ? (a = {
                    hostId: v,
                    serverName: b,
                    threadId: t
                }, x[2] = v, x[3] = g.invocation.server, x[4] = t, x[5] = a) : a = x[5];
                let y = (0, l.x)(!f || null != (0, u.e)({
                    item: g
                }) || (0, i.li)(g.invocation.server) || (0, r.e)(g.invocation.server) ? null : s.a, a);
                x[6] !== y ? (p = (0, d.a)(y), x[6] = y, x[7] = p) : p = x[7];
                let j = p;
                return x[8] !== h || x[9] !== j || x[10] !== g.invocation.server || x[11] !== y?.name || x[12] !== y?.title ? (m = null == j ? h : (0, n.jsx)(c.a, {
                    alt: y?.title ?? y?.name ?? g.invocation.server,
                    className: "icon-xs shrink-0 object-contain",
                    logoUrl: j.logoUrl,
                    logoDarkUrl: j.logoDarkUrl,
                    fallback: h
                }), x[8] = h, x[9] = j, x[10] = g.invocation.server, x[11] = y?.name, x[12] = y?.title, x[13] = m) : m = x[13], m
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
            r = a("d0tz"),
            c = a("Wf1j"),
            d = a("jqIZ"),
            u = a("qKlE"),
            p = a("OusJ"),
            m = a("odKs"),
            x = a("GIgU");
        a("bN4H");
        var h = a("TleN"),
            v = a("TL6G"),
            g = a("tSEg");

        function f(e) {
            return "string" == typeof e
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, l, b, y, j, w, k, N, C, S, M, I, R, T, A, _, U, E = (0, o.c)(130),
                    {
                        elicitation: L,
                        result: P,
                        id: z,
                        kind: O,
                        mode: D,
                        name: B,
                        prompt: W,
                        rrule: q,
                        projectId: H,
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
                    Y = void 0 === P ? null : P,
                    ee = (0, s.y)(g.a),
                    et = (0, c.a)();
                (0, h.a)();
                let ea = (0, d.Z)("/remote/:conversationId"),
                    en = (0, d.Z)("/local/:conversationId"),
                    eo = (0, s.z)(x.e),
                    el = X ?? null;
                E[0] !== V || E[1] !== J || E[2] !== G || E[3] !== z || E[4] !== O || E[5] !== F || E[6] !== D || E[7] !== K || E[8] !== B || E[9] !== Q || E[10] !== H || E[11] !== W || E[12] !== Z || E[13] !== el || E[14] !== q || E[15] !== $ ? (t = JSON.stringify({
                    id: z,
                    kind: O,
                    mode: D,
                    name: B,
                    prompt: W,
                    rrule: q,
                    projectId: H,
                    cwds: V,
                    destination: J,
                    executionEnvironment: G,
                    localEnvironmentConfigPath: F,
                    model: K,
                    reasoningEffort: Z,
                    notificationPolicy: Q,
                    targetThreadId: el,
                    status: $
                }), E[0] = V, E[1] = J, E[2] = G, E[3] = z, E[4] = O, E[5] = F, E[6] = D, E[7] = K, E[8] = B, E[9] = Q, E[10] = H, E[11] = W, E[12] = Z, E[13] = el, E[14] = q, E[15] = $, E[16] = t) : t = E[16];
                let ei = t,
                    es = eo?.directiveKey === ei ? eo.automationId : null,
                    er = es ?? Y?.automationId ?? z,
                    ec = Y?.snapshot ?? null,
                    ed = "view" === D ? D : null,
                    eu = "view" === D && null != z,
                    ep = null != z && (eu || "suggested-update" === D),
                    em = (0, s.z)(u.c),
                    ex = em.data,
                    eh = !!ep && em.isLoading;
                if (E[17] !== ex || E[18] !== es || E[19] !== V || E[20] !== z || E[21] !== et || E[22] !== eh || E[23] !== eu || E[24] !== O || E[25] !== D || E[26] !== B || E[27] !== H || E[28] !== W || E[29] !== er || E[30] !== el || E[31] !== Y?.automationId || E[32] !== Y?.mode || E[33] !== ec?.name || E[34] !== ec?.rrule || E[35] !== q || E[36] !== $) {
                    var ev;
                    let e, t, n, o, s, c, d, u, p, x, h = null != z ? ex?.items.find(e => e.id === z) ?? null : null;
                    E[46] !== ex?.items || E[47] !== es || E[48] !== et || E[49] !== eh || E[50] !== eu || E[51] !== D || E[52] !== B || E[53] !== er || E[54] !== Y?.mode || E[55] !== ec?.name || E[56] !== ec?.rrule || E[57] !== q ? ({
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
                        } = e, c = "delete" !== a && (n || "suggested-create" !== a && "suggested-update" !== a) && null != o && s ? s.find(e => e.id === o) ?? null : null, d = c?.name ?? l ?? null;
                        return {
                            resolvedName: d,
                            resolvedRrule: c?.rrule ?? i ?? null,
                            isLoadingView: t && r && null == d
                        }
                    }({
                        isViewMode: eu,
                        mode: Y?.mode ?? D,
                        isSuggestionAccepted: null != es,
                        trimmedId: er ?? null,
                        trimmedName: B ?? ec?.name ?? null,
                        trimmedRrule: q ?? ec?.rrule ?? null,
                        automations: ex?.items ?? null,
                        isLoading: eh
                    }), o = et.formatMessage({
                        id: "settings.automations.rruleSummaryFallback",
                        defaultMessage: "Custom schedule",
                        description: "Fallback label when RRULE summary cannot be generated"
                    }), s = (0, m.f)({
                        rrule: n,
                        intl: et,
                        fallbackMessage: o
                    }), E[46] = ex?.items, E[47] = es, E[48] = et, E[49] = eh, E[50] = eu, E[51] = D, E[52] = B, E[53] = er, E[54] = Y?.mode, E[55] = ec?.name, E[56] = ec?.rrule, E[57] = q, E[58] = t, E[59] = w, E[60] = n, E[61] = o, E[62] = s) : (t = E[58], w = E[59], n = E[60], o = E[61], s = E[62]);
                    let v = s;
                    E[63] !== et ? (c = et.formatMessage({
                        id: "settings.automations.loading",
                        defaultMessage: "Loading…",
                        description: "Loading state for workflows list"
                    }), E[63] = et, E[64] = c) : c = E[64];
                    let g = c;
                    E[65] !== et ? (d = et.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task",
                        description: "Fallback title when scheduled task name is missing"
                    }), E[65] = et, E[66] = d) : d = E[66];
                    let f = d;
                    E[67] !== D || E[68] !== Y?.mode ? (u = Y?.mode ?? D, E[67] = D, E[68] = Y?.mode, E[69] = u) : u = E[69], a = (y = "delete" === (b = u)) || Y?.automationId != null ? Y?.automationId ?? z ?? null : er, E[70] !== a || E[71] !== y ? (p = y ? (ev = a ?? null, 0 === (e = ev?.trim() ?? "").length ? null : /^[0-9a-f]{8}-[0-9a-f-]+$/i.test(e) ? e : i()(e.replace(/[-_]+/g, " "))) : null, E[70] = a, E[71] = y, E[72] = p) : p = E[72];
                    let S = p;
                    C = t ? g : w || S || f, E[73] !== S || E[74] !== et || E[75] !== w ? (x = w ?? S ?? et.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task",
                        description: "Fallback title when scheduled task name is missing"
                    }), E[73] = S, E[74] = et, E[75] = w, E[76] = x) : x = E[76], N = x, j = v || (t ? g : null != n ? o : null), l = null != B && null != W && null != q && ("heartbeat" === O ? null != el : void 0 !== H || null != V), k = null != z && null != $ && null != B && null != W && null != q && (null == h ? "heartbeat" === O ? null != el : void 0 !== H || null != V : !!(0, r.ai)(h) || void 0 !== H || null != V), E[17] = ex, E[18] = es, E[19] = V, E[20] = z, E[21] = et, E[22] = eh, E[23] = eu, E[24] = O, E[25] = D, E[26] = B, E[27] = H, E[28] = W, E[29] = er, E[30] = el, E[31] = Y?.automationId, E[32] = Y?.mode, E[33] = ec?.name, E[34] = ec?.rrule, E[35] = q, E[36] = $, E[37] = a, E[38] = l, E[39] = b, E[40] = y, E[41] = j, E[42] = w, E[43] = k, E[44] = N, E[45] = C
                } else a = E[37], l = E[38], b = E[39], y = E[40], j = E[41], w = E[42], k = E[43], N = E[44], C = E[45];
                let eg = k,
                    ef = "suggested-update" === D && ep && em.isLoading,
                    eb = "suggested-create" === D || "suggested-update" === D,
                    ey = eb ? L : void 0,
                    ej = z ?? null,
                    ew = O ?? null,
                    ek = B ?? "",
                    eN = W ?? "",
                    eC = q ?? "";
                E[77] !== V ? (S = V ?? [], E[77] = V, E[78] = S) : S = E[78];
                let eS = void 0 !== H ? H : V?.[0] === r.ed ? null : V?.[0] ?? null,
                    eM = G ?? null,
                    eI = F ?? null,
                    eR = K ?? null,
                    eT = Z ?? null;
                E[79] !== Q ? (M = void 0 !== Q ? {
                    notificationPolicy: Q
                } : {}, E[79] = Q, E[80] = M) : M = E[80];
                let eA = $ ?? null;
                E[81] !== ei || E[82] !== ed || E[83] !== el || E[84] !== S || E[85] !== eS || E[86] !== eM || E[87] !== eI || E[88] !== eR || E[89] !== eT || E[90] !== M || E[91] !== eA || E[92] !== ey || E[93] !== ej || E[94] !== ew || E[95] !== ek || E[96] !== eN || E[97] !== eC ? (I = {
                    elicitation: ey,
                    directiveKey: ei,
                    mode: ed,
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
                }, E[81] = ei, E[82] = ed, E[83] = el, E[84] = S, E[85] = eS, E[86] = eM, E[87] = eI, E[88] = eR, E[89] = eT, E[90] = M, E[91] = eA, E[92] = ey, E[93] = ej, E[94] = ew, E[95] = ek, E[96] = eN, E[97] = eC, E[98] = I) : I = E[98];
                let e_ = I,
                    eU = null != es;
                E[99] !== l || E[100] !== eg || E[101] !== ed || E[102] !== eu || E[103] !== eU ? (R = (0, x.A)({
                    directiveMode: ed,
                    canCreate: l,
                    canUpdate: eg,
                    isViewMode: eu,
                    forceOpen: eU
                }), E[99] = l, E[100] = eg, E[101] = ed, E[102] = eu, E[103] = eU, E[104] = R) : R = E[104];
                let eE = R,
                    eL = y ? null : j;
                E[105] !== eE || E[106] !== a || E[107] !== es || E[108] !== e_ || E[109] !== ef || E[110] !== eb || E[111] !== en || E[112] !== ea || E[113] !== ee || E[114] !== N ? (T = () => {
                    if (ef) return;
                    let e = a;
                    null != e ? v.c.dispatchHostMessage({
                        type: "navigate-to-route",
                        path: `/automations?automationId=${e}`
                    }) : "create" === eE && (ee.set(x.e, null), ee.set(x.f, e_), v.c.dispatchHostMessage({
                        type: "navigate-to-route",
                        path: "/automations?automationMode=create"
                    }))
                }, E[105] = eE, E[106] = a, E[107] = es, E[108] = e_, E[109] = ef, E[110] = eb, E[111] = en, E[112] = ea, E[113] = ee, E[114] = N, E[115] = T) : T = E[115];
                let eP = T,
                    ez = !y && !ef && (null != a || "create" === eE),
                    eO = Y?.deleteStatus;
                E[116] !== b || E[117] !== et || E[118] !== eO ? (A = function(e) {
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
                    deleteStatus: eO,
                    intl: et,
                    mode: b
                }), E[116] = b, E[117] = et, E[118] = eO, E[119] = A) : A = E[119];
                let eD = A;
                E[120] !== eD || E[121] !== w || E[122] !== eL ? (_ = [eD, w, eL].filter(f), E[120] = eD, E[121] = w, E[122] = eL, E[123] = _) : _ = E[123];
                let eB = _.join(" · "),
                    eW = eL ?? eD,
                    eq = eB || void 0;
                return E[124] !== ez || E[125] !== eP || E[126] !== eW || E[127] !== eq || E[128] !== C ? (U = (0, n.jsx)(p.a, {
                    title: C,
                    subtitle: eW,
                    ariaLabel: eq,
                    canOpen: ez,
                    onOpen: eP
                }), E[124] = ez, E[125] = eP, E[126] = eW, E[127] = eq, E[128] = C, E[129] = U) : U = E[129], U
            }
        })
    }),
    IN8o: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            l = a("BolX"),
            i = a("Wf1j"),
            s = a("oyxz"),
            r = a("wD9O"),
            c = a("umSm"),
            d = a("jKy0"),
            u = a("tSEg"),
            p = a("nMdB"),
            m = a("WRGu"),
            x = a("qZWE");

        function h(e) {
            let t, a, l, r = (0, o.c)(9),
                {
                    name: d,
                    status: u
                } = e,
                p = (0, i.a)(),
                m = "opening" === u;
            return r[0] !== p || r[1] !== d ? (t = d ?? p.formatMessage({
                id: "mcpApp.activity.unnamed",
                defaultMessage: "app",
                description: "Fallback name for a widget with no tool or app title"
            }), r[0] = p, r[1] = d, r[2] = t) : t = r[2], r[3] !== u || r[4] !== t ? (a = (0, n.jsx)(s.a, {
                id: "mcpApp.activity.status",
                defaultMessage: "{status, select, opening {Opening {name}} open {Opened {name}} error {Couldn’t open {name}} other {Open {name}}}",
                description: "Widget activity row: loading, successfully opened, or an action to reopen. The same human-facing tool or view name is used in every state.",
                values: {
                    status: u,
                    name: t
                }
            }), r[3] = u, r[4] = t, r[5] = a) : a = r[5], r[6] !== m || r[7] !== a ? (l = (0, n.jsx)(c.a, {
                active: m,
                role: "status",
                className: "min-w-0 shrink truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                children: a
            }), r[6] = m, r[7] = a, r[8] = l) : l = r[8], l
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, i, s, c, v, g = (0, o.c)(24),
                    {
                        mcpAppId: f,
                        name: b,
                        status: y,
                        disabled: j,
                        icon: w,
                        accessory: k,
                        className: N,
                        disclosure: C
                    } = e,
                    S = (0, l.y)(u.a),
                    M = (0, r.c)();
                g[0] !== j || g[1] !== C || g[2] !== f || g[3] !== S || g[4] !== y ? (t = C ?? ("closed" !== y || j ? void 0 : {
                    expanded: !1,
                    onToggle: () => (0, x.w)(S, f)
                }), g[0] = j, g[1] = C, g[2] = f, g[3] = S, g[4] = y, g[5] = t) : t = g[5];
                let I = t;
                return g[6] !== j || g[7] !== f ? (a = (0, n.jsx)(m.a, {
                    disabled: j,
                    mcpAppId: f
                }), g[6] = j, g[7] = f, g[8] = a) : a = g[8], g[9] !== k || g[10] !== a ? (i = (0, n.jsxs)(n.Fragment, {
                    children: [a, k]
                }), g[9] = k, g[10] = a, g[11] = i) : i = g[11], g[12] !== I || g[13] !== M ? (s = null == I ? void 0 : {
                    ...I,
                    onToggle: e => {
                        (0, p.a)(e.currentTarget, M), I.onToggle(e)
                    }
                }, g[12] = I, g[13] = M, g[14] = s) : s = g[14], g[15] !== b || g[16] !== y ? (c = (0, n.jsx)(h, {
                    name: b,
                    status: y
                }), g[15] = b, g[16] = y, g[17] = c) : c = g[17], g[18] !== N || g[19] !== w || g[20] !== i || g[21] !== s || g[22] !== c ? (v = (0, n.jsxs)(d.a, {
                    className: N,
                    accessory: i,
                    disclosure: s,
                    children: [w, c]
                }), g[18] = N, g[19] = w, g[20] = i, g[21] = s, g[22] = c, g[23] = v) : v = g[23], v
            }
        })
    }),
    FWVQ: (function(e, t, a) {
        var n = a("BolX"),
            o = a("qZWE");
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
            c: function(e, t) {
                let {
                    isLoading: a,
                    isInlineRequested: l,
                    isInlineOpening: i,
                    hasError: s
                } = t, r = (0, n.x)(o.k, e), c = (0, n.x)(o.m, e), d = (0, n.x)(o.j, e), u = (0, n.x)(o.u, e), p = (0, n.x)(o.p, e);
                return void 0 !== s && s || null != p ? "error" : "closed" !== r ? r : a ? "opening" : (l ?? d) && "launcher" !== c ? u && !(void 0 !== i && i) ? "open" : "opening" : "closed"
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
            d = a("vbL5"),
            u = a("tKel"),
            p = a("VUkV");
        let m = s.object({
            page_id: s.string().trim().min(1)
        });
        a.d(t, {}, {
            a: function(e) {
                let t, a, s, x, h, v, g, f, b = (0, o.c)(32),
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
                b[6] !== y.invocation.server || b[7] !== S || b[8] !== M ? (a = (0, d.a)(y.invocation.server, S, M), b[6] = y.invocation.server, b[7] = S, b[8] = M, b[9] = a) : a = b[9];
                let I = a;
                b[10] !== y.invocation.arguments || b[11] !== I ? (s = "read_page" === I ? m.safeParse(y.invocation.arguments).data : void 0, b[10] = y.invocation.arguments, b[11] = I, b[12] = s) : s = b[12];
                let R = s;
                b[13] !== R ? (x = null == R ? null : {
                    kind: "page",
                    id: R.page_id
                }, b[13] = R, b[14] = x) : x = b[14], b[15] !== k ? (h = {
                    enabled: k
                }, b[15] = k, b[16] = h) : h = b[16];
                let T = (0, l.x)(u.b, x, h);
                if (null == T) return N;
                b[17] !== y.completed || b[18] !== y.invocation.server || b[19] !== y.result ? (v = "active", y.completed && (v = (0, c.a)({
                    result: y.result,
                    isCodexAppsServer: "codex_apps" === y.invocation.server
                }) ? "failed" : "completed"), b[17] = y.completed, b[18] = y.invocation.server, b[19] = y.result, b[20] = v) : v = b[20];
                let A = T.title ?? "";
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
                }, b[21] = N, b[22] = w, b[23] = v, b[24] = g) : g = b[24], b[25] !== T.document_type || b[26] !== T.namespace || b[27] !== T.page_id || b[28] !== T.symbol || b[29] !== A || b[30] !== g ? (f = (0, n.jsx)(p.a, {
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
    }),
    n7q6: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            l = a("oyxz"),
            i = a("ED7I"),
            s = a("VL1D");

        function r(e) {
            let {
                runNowAction: t,
                editAction: a
            } = e;
            return (0, n.jsxs)(n.Fragment, {
                children: [null != a ? (0, n.jsx)(s.c, {
                    disabled: a.disabled,
                    onClick: a.onSelect,
                    children: (0, n.jsx)(l.a, {
                        id: "settings.automations.edit",
                        defaultMessage: "Edit",
                        description: "Menu item for editing a scheduled task"
                    })
                }) : null, null != t ? (0, n.jsx)(s.c, {
                    disabled: t.disabled,
                    onClick: t.onSelectAsync ?? t.onSelect,
                    children: (0, n.jsx)(l.a, {
                        id: "settings.automations.runNow",
                        defaultMessage: "Run now",
                        description: "Button label for running an automation immediately"
                    })
                }) : null]
            })
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a = (0, o.c)(3),
                    {
                        item: l,
                        onEdit: s
                    } = e;
                return a[0] !== l || a[1] !== s ? (t = (0, n.jsx)(i.a, {
                    item: l,
                    onEdit: s,
                    renderActions: r
                }), a[0] = l, a[1] = s, a[2] = t) : t = a[2], t
            }
        })
    })
};