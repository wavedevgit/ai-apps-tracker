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
                let t, a, s, d, h, g, x, v = (0, o.c)(22),
                    {
                        automation: f
                    } = e,
                    b = (0, l.y)(p.a),
                    y = (0, i.a)(),
                    j = (0, l.x)(c.g, f.id);
                v[0] !== f || v[1] !== j || v[2] !== y ? (t = (0, m.a)(f, j, y), v[0] = f, v[1] = j, v[2] = y, v[3] = t) : t = v[3];
                let {
                    scheduleLabel: w
                } = t;
                v[4] !== f.title || v[5] !== j?.automation.title || v[6] !== j?.automation.title.trim ? (a = j?.automation.title.trim() || f.title, v[4] = f.title, v[5] = j?.automation.title, v[6] = j?.automation.title.trim, v[7] = a) : a = v[7];
                let k = a;
                return v[8] !== f.id || v[9] !== j || v[10] !== b || v[11] !== k ? (s = () => {
                    null == j && b.queryClient.invalidateQueries({
                        queryKey: ["cloud-automations"]
                    }), (0, u.openAutomationSidePanelTab)({
                        scope: b,
                        automationId: f.id,
                        title: k,
                        toggle: !0,
                        navigationSource: "conversation"
                    })
                }, d = null, v[8] = f.id, v[9] = j, v[10] = b, v[11] = k, v[12] = s, v[13] = d) : (s = v[12], d = v[13]), v[14] !== w || v[15] !== s || v[16] !== d || v[17] !== k ? (h = (0, n.jsx)(r.a, {
                    title: k,
                    subtitle: w,
                    ariaLabel: k,
                    canOpen: !0,
                    onOpen: s,
                    actions: d
                }), v[14] = w, v[15] = s, v[16] = d, v[17] = k, v[18] = h) : h = v[18], v[19] === Symbol.for("react.memo_cache_sentinel") ? (g = null, v[19] = g) : g = v[19], v[20] !== h ? (x = (0, n.jsxs)("div", {
                    className: "flex w-full min-w-0 flex-col gap-2 self-start",
                    children: [h, g]
                }), v[20] = h, v[21] = x) : x = v[21], x
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
                let t, a, h, g = (0, n.c)(8),
                    {
                        conversationId: x
                    } = e,
                    v = (0, l.y)(d.a),
                    {
                        key: f,
                        state: b
                    } = (0, s.Y)();
                g[0] !== b ? (t = (0, c.a)(b), g[0] = b, g[1] = t) : t = g[1];
                let y = t;
                return g[2] !== x || g[3] !== f || g[4] !== v || g[5] !== y ? (a = () => {
                    if ("chatgpt-thread" !== v.value.routeKind) return;
                    let e = v.value.conversationId;
                    return v.watch(t => {
                        let a = t.get(p.j, x);
                        if (null == a || a !== t.get(p.j, e)) return;
                        let n = {
                            locationKey: f,
                            conversationId: a
                        };
                        v.get(m, n) || (v.set(m, n, !0), (0, u.a)(v, o.c, {
                            type: "CHATGPT_TASKS_EVENT_TYPE_CONVERSATION_WITH_TASK_VIEWED",
                            conversationId: a,
                            openSource: null == y ? void 0 : r.c[y],
                            openDestination: "CHATGPT_TASKS_OPEN_DESTINATION_CONVERSATION"
                        }))
                    })
                }, h = [x, f, v, y], g[2] = x, g[3] = f, g[4] = v, g[5] = y, g[6] = a, g[7] = h) : (a = g[6], h = g[7]), (0, i.useEffect)(a, h), null
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
            g = a("cWHY"),
            x = a("VRzh"),
            v = a("DuVB");

        function f(e) {
            return (0, n.jsx)(b, {
                automation: e
            }, e.id)
        }
        let b = (0, i.memo)(function(e) {
            let t, a, i, s, c, m, g, x = (0, o.c)(19),
                {
                    automation: f
                } = e,
                b = (0, l.y)(h.a),
                y = (0, r.a)(),
                j = (0, l.x)(u.g, f.id);
            x[0] !== f || x[1] !== j || x[2] !== y ? (t = (0, v.a)(f, j, y), x[0] = f, x[1] = j, x[2] = y, x[3] = t) : t = x[3];
            let {
                scheduleLabel: w,
                title: k
            } = t;
            return x[4] !== f.id || x[5] !== b || x[6] !== k ? (a = () => {
                (0, d.openAutomationSidePanelTab)({
                    scope: b,
                    automationId: f.id,
                    title: k,
                    toggle: !0,
                    navigationSource: "conversation"
                })
            }, x[4] = f.id, x[5] = b, x[6] = k, x[7] = a) : a = x[7], x[8] !== k ? (i = (0, n.jsx)("span", {
                className: "truncate text-sm text-default",
                children: k
            }), x[8] = k, x[9] = i) : i = x[9], x[10] !== w ? (s = null == w || 0 === w.length ? null : (0, n.jsx)("span", {
                className: "truncate text-sm text-tertiary",
                children: w
            }), x[10] = w, x[11] = s) : s = x[11], x[12] !== i || x[13] !== s ? (c = (0, n.jsxs)("span", {
                className: "flex min-w-0 flex-col gap-0.5",
                children: [i, s]
            }), x[12] = i, x[13] = s, x[14] = c) : c = x[14], x[15] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, n.jsx)(p.a, {
                "aria-hidden": "true",
                className: "icon-sm shrink-0 text-tertiary"
            }), x[15] = m) : m = x[15], x[16] !== a || x[17] !== c ? (g = (0, n.jsx)("li", {
                className: "border-b border-subtle",
                "data-automation-card": !0,
                children: (0, n.jsxs)("button", {
                    type: "button",
                    className: "flex w-full min-w-0 cursor-interaction items-center justify-between gap-4 py-3 text-start hover:text-default",
                    onClick: a,
                    children: [c, m]
                })
            }), x[16] = a, x[17] = c, x[18] = g) : g = x[18], g
        });
        a.d(t, {}, {
            a: function(e) {
                let t, a, i, r, d, p, h, v, b, y, j = (0, o.c)(22),
                    {
                        automations: w,
                        conversationId: k
                    } = e,
                    C = (0, c._)(),
                    {
                        data: N,
                        isSuccess: S
                    } = (0, l.z)(u.k);
                j[0] !== w || j[1] !== N || j[2] !== S ? (t = S && N.isAvailable ? w.filter(e => {
                    let {
                        id: t
                    } = e;
                    return N.items.some(e => {
                        let {
                            automation: a
                        } = e;
                        return a.id === t
                    })
                }) : w, j[0] = w, j[1] = N, j[2] = S, j[3] = t) : t = j[3];
                let M = t;
                return j[4] !== M.length || j[5] !== k ? (a = null != k && M.length > 0 ? (0, n.jsx)(x.a, {
                    conversationId: k
                }) : null, j[4] = M.length, j[5] = k, j[6] = a) : a = j[6], j[7] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsx)(m.a, {
                    "aria-hidden": "true",
                    className: "icon-sm shrink-0"
                }), j[7] = i) : i = j[7], j[8] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsxs)("header", {
                    className: "flex items-center gap-2 border-b border-subtle px-4 py-3 text-sm text-secondary select-none",
                    children: [i, (0, n.jsx)("h2", {
                        className: "text-sm font-medium uppercase",
                        children: (0, n.jsx)(g.a, {
                            children: (0, n.jsx)(s.a, {
                                id: "automations.scheduled.destination.label",
                                defaultMessage: "Scheduled",
                                description: "Title of the Scheduled destination and the compact scheduled-task list in a conversation"
                            })
                        })
                    })]
                }), j[8] = r) : r = j[8], j[9] !== M ? (d = M.slice(0, 5).map(f), j[9] = M, j[10] = d) : d = j[10], j[11] !== C ? (p = () => {
                    C("/automations", {
                        state: {
                            navigationSource: "conversation"
                        }
                    })
                }, j[11] = C, j[12] = p) : p = j[12], j[13] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, n.jsx)(s.a, {
                    id: "automations.list.seeAllTasks",
                    defaultMessage: "See all tasks",
                    description: "Button in a compact scheduled-task conversation list that opens the Scheduled destination"
                }), j[13] = h) : h = j[13], j[14] !== p ? (v = (0, n.jsx)("li", {
                    children: (0, n.jsx)("button", {
                        type: "button",
                        className: "w-full cursor-interaction py-3 text-start text-sm text-tertiary select-none hover:text-default",
                        onClick: p,
                        children: h
                    })
                }), j[14] = p, j[15] = v) : v = j[15], j[16] !== d || j[17] !== v ? (b = (0, n.jsxs)("ul", {
                    className: "px-4",
                    children: [d, v]
                }), j[16] = d, j[17] = v, j[18] = b) : b = j[18], j[19] !== a || j[20] !== b ? (y = (0, n.jsxs)("section", {
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
            g = a("umSm"),
            x = a("FgmP");

        function v(e) {
            let t, a, c, d, x, v, b, y, j, w, k, C, N, S, M = (0, o.c)(43),
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
            M[14] !== D ? (x = (0, l.b)("min-w-0 truncate", D), M[14] = D, M[15] = x) : x = M[15], M[16] !== O || M[17] !== x || M[18] !== E ? (v = (0, n.jsx)(g.a, {
                active: O,
                className: x,
                children: E
            }), M[16] = O, M[17] = x, M[18] = E, M[19] = v) : v = M[19];
            let q = _ && "rotate-90 opacity-100";
            M[20] !== q ? (b = (0, l.b)("icon-2xs shrink-0 text-tertiary transition-[opacity,transform] duration-basic opacity-0 group-hover/automatic-approval-review:opacity-100", q), M[20] = q, M[21] = b) : b = M[21], M[22] !== b ? (y = (0, n.jsx)(p.a, {
                className: b
            }), M[22] = b, M[23] = y) : y = M[23], M[24] !== _ || M[25] !== y || M[26] !== v ? (j = (0, n.jsxs)(u.a, {
                className: "group/automatic-approval-review inline-flex w-fit max-w-full gap-1.5 text-start",
                color: "ghostMuted",
                focusRing: "inset",
                size: "inline",
                onClick: d,
                "aria-expanded": _,
                children: [v, y]
            }), M[24] = _, M[25] = y, M[26] = v, M[27] = j) : j = M[27];
            let z = _ ? "auto" : 0,
                W = +!!_;
            M[28] !== z || M[29] !== W ? (w = {
                height: z,
                opacity: W
            }, M[28] = z, M[29] = W, M[30] = w) : w = M[30];
            let B = _ ? "auto" : "none";
            return M[31] !== B ? (k = {
                overflow: "hidden",
                pointerEvents: B
            }, M[31] = B, M[32] = k) : k = M[32], M[33] !== P ? (C = (0, n.jsx)("p", {
                className: "max-w-[80ch] pt-1 text-size-chat leading-relaxed whitespace-pre-wrap text-text/60",
                children: P
            }), M[33] = P, M[34] = C) : C = M[34], M[35] !== w || M[36] !== k || M[37] !== C ? (N = (0, n.jsx)(i.a.div, {
                initial: !1,
                animate: w,
                transition: m.a,
                style: k,
                children: C
            }), M[35] = w, M[36] = k, M[37] = C, M[38] = N) : N = M[38], M[39] !== j || M[40] !== N || M[41] !== c ? (S = (0, n.jsxs)("div", {
                className: c,
                children: [j, N]
            }), M[39] = j, M[40] = N, M[41] = c, M[42] = S) : S = M[42], S
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
                l[4] !== i || l[5] !== s ? (e = e => (0, n.jsx)(v, {
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
                    asset: x.a,
                    "aria-hidden": !0
                }), i[3] = t, i[4] = a) : a = i[4], a
            },
            b: y,
            c: v,
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
            g = a("ueue"),
            x = a("whdX"),
            v = a("tSEg"),
            f = a("KU8M"),
            b = a("LF5P"),
            y = a("MdwM"),
            j = a("Hkqr"),
            w = a("acxW");
        a.d(t, {}, {
            a: function(e) {
                let t, a, o, c, u, d, m, h, g, x, v = (0, n.c)(50),
                    {
                        item: b,
                        hostId: y,
                        conversationId: j,
                        fallback: k,
                        enabled: C,
                        catalogEnabled: N
                    } = e,
                    S = void 0 === C || C,
                    M = void 0 === N ? S : N;
                v[0] !== b.invocation.server || v[1] !== b.result ? (t = (0, r.f)(b.invocation.server), a = (0, w.a)({
                    isCodexAppsServer: t,
                    result: b.result
                }), v[0] = b.invocation.server, v[1] = b.result, v[2] = t, v[3] = a) : (t = v[2], a = v[3]);
                let I = a,
                    T = b.result?.type !== "success" || I ? null : b.result.raw,
                    R = T ?? k?.toolResult ?? null;
                v[4] !== j || v[5] !== y ? (o = {
                    hostId: y,
                    conversationId: j
                }, v[4] = j, v[5] = y, v[6] = o) : o = v[6];
                let A = (0, l.x)(s.b, o);
                v[7] !== y || v[8] !== b.appContext || v[9] !== b.invocation.server || v[10] !== b.invocation.tool || v[11] !== b.invocationResourceUri || v[12] !== A ? (c = {
                    appContext: b.appContext,
                    hostId: y,
                    invocationResourceUri: b.invocationResourceUri,
                    server: b.invocation.server,
                    threadId: A,
                    tool: b.invocation.tool
                }, v[7] = y, v[8] = b.appContext, v[9] = b.invocation.server, v[10] = b.invocation.tool, v[11] = b.invocationResourceUri, v[12] = A, v[13] = c) : c = v[13];
                let _ = c;
                v[14] !== M ? (u = {
                    enabled: M
                }, v[14] = M, v[15] = u) : u = v[15];
                let U = (0, l.x)(f.a, _, u);
                v[16] !== U.data || v[17] !== b.invocation.server || v[18] !== b.invocation.tool || v[19] !== b.invocationResourceUri ? (d = (0, p.c)({
                    invocationResourceUri: b.invocationResourceUri,
                    mcpServerStatuses: U.data,
                    server: b.invocation.server,
                    tool: b.invocation.tool
                })?.resourceUri, v[16] = U.data, v[17] = b.invocation.server, v[18] = b.invocation.tool, v[19] = b.invocationResourceUri, v[20] = d) : d = v[20];
                let E = d;
                v[21] !== U.isPending || v[22] !== j || v[23] !== E || v[24] !== R?._meta || v[25] !== k?.resourceUri || v[26] !== b.appContext?.resourceUri || v[27] !== b.mcpAppResourceUri ? (m = j.startsWith("chatgpt:") ? E : b.appContext?.resourceUri ?? E ?? (U.isPending ? k?.resourceUri : void 0) ?? (0, i.Ig)(R?._meta) ?? b.mcpAppResourceUri, v[21] = U.isPending, v[22] = j, v[23] = E, v[24] = R?._meta, v[25] = k?.resourceUri, v[26] = b.appContext?.resourceUri, v[27] = b.mcpAppResourceUri, v[28] = m) : m = v[28];
                let L = m,
                    P = null != L && U.isPending && b.appContext?.resourceUri == null && null == E && k?.resourceUri == null,
                    O = (0, l.x)(S && t ? f.b : null, _);
                I ? h = "error" : b.completed && null == b.result && null == R && (h = "cancelled");
                let D = L ?? k?.resourceUri ?? null,
                    q = t && null != b.appContext ? b.callId : null,
                    z = h;
                return v[29] !== U.data || v[30] !== b.appContext || v[31] !== b.invocation.server || v[32] !== b.invocation.tool || v[33] !== b.invocationResourceUri ? (g = (0, p.b)({
                    appContext: b.appContext,
                    invocationResourceUri: b.invocationResourceUri,
                    mcpServerStatuses: U.data,
                    server: b.invocation.server,
                    tool: b.invocation.tool
                }), v[29] = U.data, v[30] = b.appContext, v[31] = b.invocation.server, v[32] = b.invocation.tool, v[33] = b.invocationResourceUri, v[34] = g) : g = v[34], v[35] !== U || v[36] !== j || v[37] !== R || v[38] !== y || v[39] !== t || v[40] !== P || v[41] !== b || v[42] !== T || v[43] !== q || v[44] !== g || v[45] !== D || v[46] !== I || v[47] !== h || v[48] !== O ? (x = {
                    item: b,
                    hostId: y,
                    conversationId: j,
                    catalog: U,
                    resourceUri: D,
                    isResourceUriPending: P,
                    toolScope: O,
                    isCodexAppsToolCall: t,
                    originCallId: q,
                    successfulToolResult: T,
                    displayedSuccessfulToolResult: R,
                    toolCallFailed: I,
                    toolCallStatus: z,
                    toolDefinition: g
                }, v[35] = U, v[36] = j, v[37] = R, v[38] = y, v[39] = t, v[40] = P, v[41] = b, v[42] = T, v[43] = q, v[44] = g, v[45] = D, v[46] = I, v[47] = h, v[48] = O, v[49] = x) : x = v[49], x
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
                        toolScope: g,
                        originCallId: v
                    } = e,
                    f = g?.connectorId ?? null,
                    b = g?.kind === "target" ? g : null,
                    y = m ?? null,
                    j = t && !h && (null == v || r.completed);
                s[0] !== u || s[1] !== c || s[2] !== r.appContext || s[3] !== r.invocation.server || s[4] !== v || s[5] !== f || s[6] !== b || s[7] !== y || s[8] !== j ? (a = {
                    appContext: r.appContext,
                    connectorId: f,
                    connectorTarget: b,
                    hostId: c,
                    originCallId: v,
                    server: r.invocation.server,
                    threadId: u,
                    uri: y,
                    enabled: j
                }, s[0] = u, s[1] = c, s[2] = r.appContext, s[3] = r.invocation.server, s[4] = v, s[5] = f, s[6] = b, s[7] = y, s[8] = j, s[9] = a) : a = s[9];
                let w = (0, x.f)(a),
                    k = h ? void 0 : w.data;
                s[10] !== k ? (o = (0, d.c)(k), s[10] = k, s[11] = o) : o = s[11];
                let C = o,
                    {
                        error: N,
                        isPending: S,
                        isFetching: M
                    } = h || e.isCodexAppsToolCall && null == g ? p : w;
                return s[12] !== N || s[13] !== M || s[14] !== S || s[15] !== k?.resource ? (l = k?.resource != null ? {
                    error: null,
                    isLoading: !1
                } : {
                    error: M ? null : N,
                    isLoading: M || S && null == N
                }, s[12] = N, s[13] = M, s[14] = S, s[15] = k?.resource, s[16] = l) : l = s[16], s[17] !== w.access || s[18] !== w.refetch || s[19] !== w.refetchResource || s[20] !== C || s[21] !== k || s[22] !== l ? (i = {
                    resource: k,
                    renderData: C,
                    access: w.access,
                    refetch: w.refetch,
                    refetchResource: w.refetchResource,
                    state: l
                }, s[17] = w.access, s[18] = w.refetch, s[19] = w.refetchResource, s[20] = C, s[21] = k, s[22] = l, s[23] = i) : i = s[23], i
            },
            c: function(e) {
                let t, a, i, s, d, p, x, f, w, k, C, N, S, M = (0, n.c)(50),
                    {
                        item: I,
                        hostId: T,
                        appInfoOverride: R,
                        enabled: A,
                        retryOnMount: _
                    } = e,
                    U = void 0 === A || A,
                    E = (0, l.y)(v.a);
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
                M[24] !== D || M[25] !== I.pluginId ? (x = D?.find(e => {
                    let {
                        plugin: t
                    } = e;
                    return t.id === I.pluginId || null != t.remotePluginId && t.remotePluginId === I.pluginId
                }), M[24] = D, M[25] = I.pluginId, M[26] = x) : x = M[26];
                let q = x,
                    z = O && null != D && null != I.pluginId && null == q;
                M[27] !== T || M[28] !== I.pluginId || M[29] !== E.query || M[30] !== z ? (f = E.query.getOptions(m.l, (0, m.a)({
                    hostId: T,
                    pluginId: z ? I.pluginId ?? null : null
                })), M[27] = T, M[28] = I.pluginId, M[29] = E.query, M[30] = z, M[31] = f) : f = M[31];
                let W = f,
                    B = z && W.enabled,
                    H = _ ?? W.retryOnMount;
                M[32] !== W || M[33] !== B || M[34] !== H ? (w = {
                    ...W,
                    enabled: B,
                    retry: !1,
                    retryOnMount: H
                }, M[32] = W, M[33] = B, M[34] = H, M[35] = w) : w = M[35];
                let {
                    data: V
                } = (0, o.a)(w);
                M[36] !== V ? (k = null == V ? null : (0, g.b)(V), M[36] = V, M[37] = k) : k = M[37];
                let J = k,
                    F = q ?? J,
                    K = J?.plugin.id ?? q?.plugin.id ?? I.pluginId;
                return M[38] !== D || M[39] !== J || M[40] !== z ? (C = z && null != J ? [J] : D ?? [], M[38] = D, M[39] = J, M[40] = z, M[41] = C) : C = M[41], M[42] !== I.invocation.server || M[43] !== K || M[44] !== C ? (N = (0, y.a)({
                    pluginId: K,
                    plugins: C,
                    serverName: I.invocation.server
                }), M[42] = I.invocation.server, M[43] = K, M[44] = C, M[45] = N) : N = M[45], M[46] !== P || M[47] !== F || M[48] !== N ? (S = {
                    matchingApp: P,
                    plugin: F,
                    pluginIcon: N
                }, M[46] = P, M[47] = F, M[48] = N, M[49] = S) : S = M[49], S
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
            s = a("iodE"),
            r = a("AQaI"),
            c = a.n(r),
            u = a("BolX"),
            d = a("hV9T"),
            p = a("OZum"),
            m = a("zd8w"),
            h = a("Wf1j"),
            g = a("oyxz"),
            x = a("mnR8"),
            v = a("ojna"),
            f = a("USdi"),
            b = a("khkh"),
            y = a("SHXB"),
            j = a("bPZ9"),
            w = a("OOaz"),
            k = a("Zm2g"),
            C = a("FvYa"),
            N = a("A7Ss"),
            S = a("Sm6l"),
            M = a("la9L"),
            I = a("rmk3"),
            T = a("JNtf"),
            R = a("mUDD"),
            A = a("KxMp"),
            _ = a("HOLv"),
            U = a("Wdu7"),
            E = a("wwME"),
            L = a("nXaV"),
            P = a("YeQK"),
            O = a("oKu4"),
            D = a("FWVQ"),
            q = a("IN8o"),
            z = a("HwRo"),
            W = a("C3P5"),
            B = a("aENG"),
            H = a("Cv9y"),
            V = a("EAcR"),
            J = a("NJrC"),
            F = a("EDsV"),
            K = a("geS6"),
            G = a("qwxA"),
            Q = a("qZWE"),
            Z = a("E2ja"),
            X = a("KLqe"),
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
            eg = a("DYB3"),
            ex = a("MAIj"),
            ev = a("mRLe"),
            ef = a("z0Na"),
            eb = a("o62A"),
            ey = a("o1Ns"),
            ej = a("alO6"),
            ew = a("umSm"),
            ek = a("gFsV"),
            eC = a("SCbd"),
            eN = a("vWxq"),
            eS = a("LhYn");

        function eM(e) {
            return "text" !== e.type
        }

        function eI(e) {
            let t, a, l, i, s, r, c, u, d, m, h = (0, o.c)(35),
                {
                    call: x,
                    fallbackPageUrl: v,
                    loadRemoteLogos: f
                } = e,
                b = null == x.sourceHostname ? v : `https://${x.sourceHostname}`,
                y = "invokeTool" === x.kind ? x.inputJson : void 0,
                j = "invokeTool" === x.kind && !0 === x.inputTruncated;
            h[0] !== f || h[1] !== b ? (t = null == b ? (0, n.jsx)(_.a, {
                className: "shrink-0 text-text/60",
                asset: eS.a
            }) : (0, n.jsx)(A.a, {
                className: "icon-xs shrink-0 text-text/60",
                href: b,
                loadRemote: f
            }), h[0] = f, h[1] = b, h[2] = t) : t = h[2], h[3] !== x.name || h[4] !== x.title ? (a = x.title ?? (0, p.a)(x.name, {
                style: "sentence"
            }), h[3] = x.name, h[4] = x.title, h[5] = a) : a = h[5], h[6] !== x.kind || h[7] !== a ? (l = (0, n.jsx)(g.a, {
                id: "codex.mcpTool.webMcpActivity.completed",
                defaultMessage: "{kind, select, listTools {Listed website tools} other {{toolName}}}",
                description: "Human-readable activity label for a website-provided WebMCP tool invocation",
                values: {
                    kind: x.kind,
                    toolName: a
                }
            }), h[6] = x.kind, h[7] = a, h[8] = l) : l = h[8], h[9] !== y || h[10] !== j ? (i = null == y || j ? y : function(e) {
                try {
                    return JSON.parse(e)
                } catch {
                    return e
                }
            }(y), h[9] = y, h[10] = j, h[11] = i) : i = h[11];
            let w = !!j || void 0;
            h[12] !== x.description || h[13] !== x.name || h[14] !== x.readOnlyHint || h[15] !== x.sourceHostname || h[16] !== x.title || h[17] !== i || h[18] !== w ? (s = eT({
                name: x.name,
                title: x.title,
                description: x.description,
                website: x.sourceHostname,
                readOnlyHint: x.readOnlyHint,
                input: i,
                inputTruncated: w
            }, 2), h[12] = x.description, h[13] = x.name, h[14] = x.readOnlyHint, h[15] = x.sourceHostname, h[16] = x.title, h[17] = i, h[18] = w, h[19] = s) : s = h[19];
            let k = j ? "true" : "false";
            return h[20] !== k ? (r = (0, n.jsx)(g.a, {
                id: "codex.localConversation.webMcpTools.toolLabel",
                defaultMessage: "{truncated, select, true {Tool (input truncated)} other {Tool}}",
                description: "Title for a website-provided WebMCP tool definition and its input",
                values: {
                    truncated: k
                }
            }), h[20] = k, h[21] = r) : r = h[21], h[22] !== s || h[23] !== r ? (c = (0, n.jsx)(M.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: s,
                language: "json",
                showStickyRightContent: !1,
                title: r
            }), h[22] = s, h[23] = r, h[24] = c) : c = h[24], h[25] !== x.outputJson || h[26] !== x.outputTruncated ? (u = null == x.outputJson ? null : (0, n.jsx)(M.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: x.outputTruncated ? x.outputJson : function(e) {
                    try {
                        return eT(JSON.parse(e), 2)
                    } catch {
                        return e
                    }
                }(x.outputJson),
                language: "json",
                showStickyRightContent: !1,
                title: (0, n.jsx)(g.a, {
                    id: "codex.localConversation.webMcpTools.resultLabel",
                    defaultMessage: "{truncated, select, true {Result (truncated)} other {Result}}",
                    description: "Title for a website-provided WebMCP tool result",
                    values: {
                        truncated: x.outputTruncated ? "true" : "false"
                    }
                })
            }), h[25] = x.outputJson, h[26] = x.outputTruncated, h[27] = u) : u = h[27], h[28] !== u || h[29] !== c ? (d = (0, n.jsxs)("div", {
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
                    t[0] !== a.annotations || t[1] !== c ? (e = e_(a.annotations, c), t[0] = a.annotations, t[1] = c, t[2] = e) : e = t[2];
                    let h = e,
                        g = `data:${a.mimeType};base64,${a.data}`;
                    t[3] !== c ? (o = c.formatMessage({
                        id: "codex.mcpTool.contentBlock.imageAlt",
                        defaultMessage: "Image returned by tool",
                        description: "Accessible description for an image included in an MCP tool result"
                    }), t[3] = c, t[4] = o) : o = t[4];
                    let x = o;
                    t[5] !== l || t[6] !== s || t[7] !== x || t[8] !== g || t[9] !== c || t[10] !== r ? (i = () => (0, P.getGeneratedImageContextMenuItems)(r, {
                        chatGptConversationId: l.startsWith("chatgpt:") ? (0, w.d)(l.slice(8)) : void 0,
                        displaySrc: g,
                        hostId: s,
                        image: {
                            kind: "generic",
                            src: g,
                            alt: x
                        },
                        intl: c
                    }), t[5] = l, t[6] = s, t[7] = x, t[8] = g, t[9] = c, t[10] = r, t[11] = i) : i = t[11], t[12] !== x || t[13] !== g ? (u = (0, n.jsx)("img", {
                        className: "max-h-48 w-max max-w-full gap-0.5 rounded-md object-contain",
                        alt: x,
                        src: g
                    }), t[12] = x, t[13] = g, t[14] = u) : u = t[14], t[15] !== i || t[16] !== u ? (d = (0, n.jsx)(I.a, {
                        getItems: i,
                        children: u
                    }), t[15] = i, t[16] = u, t[17] = d) : d = t[17];
                    let v = d;
                    if (null == h) return v;
                    return t[18] !== h ? (p = (0, n.jsx)("p", {
                        className: "text-size-chat whitespace-pre-wrap text-codex-description/80",
                        children: h
                    }), t[18] = h, t[19] = p) : p = t[19], t[20] !== v || t[21] !== p ? (m = (0, n.jsxs)("div", {
                        className: "flex flex-col gap-0.5",
                        children: [v, p]
                    }), t[20] = v, t[21] = p, t[22] = m) : m = t[22], m
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
                        children: (0, n.jsx)(g.a, {
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
                        children: (0, n.jsx)(g.a, {
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
                            children: (0, n.jsx)(g.a, {
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
                            children: (0, n.jsx)(g.a, {
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
                            children: (0, n.jsx)(g.a, {
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
                    let e, o, l;
                    t[66] !== a.annotations || t[67] !== a.text || t[68] !== c ? (e = [a.text, e_(a.annotations, c)].filter(e => null != e).join("\n"), t[66] = a.annotations, t[67] = a.text, t[68] = c, t[69] = e) : e = t[69];
                    let i = e;
                    return t[70] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, n.jsx)(g.a, {
                        id: "codex.mcpTool.textBlock.plaintextTitle",
                        defaultMessage: "plaintext",
                        description: "Title shown for MCP text content blocks rendered in a code-style container"
                    }), t[70] = o) : o = t[70], t[71] !== i ? (l = (0, n.jsx)(M.CodeSnippet, {
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

        function eA(e) {
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
                [h, x] = (0, m.useState)(null);
            r[3] !== p ? (a = () => x(p), r[3] = p, r[4] = a) : a = r[4];
            let v = a;
            if (!d) return null;
            if (h?.data === c && h.mimeType === u) {
                let e;
                return r[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(g.a, {
                    id: "codex.mcpTool.contentBlock.audioUnavailable",
                    defaultMessage: "Audio unavailable",
                    description: "Short fallback shown instead of the audio player when audio returned by an MCP tool cannot be played"
                }), r[5] = e) : e = r[5], e
            }
            return r[6] !== v || r[7] !== p ? (l = e => {
                if (null != e) return (0, ea.d)(e, p, v)
            }, r[6] = v, r[7] = p, r[8] = l) : l = r[8], r[9] !== v || r[10] !== l ? (i = (0, n.jsx)("audio", {
                ref: l,
                className: "w-full gap-0.5",
                controls: !0,
                onError: v,
                preload: "metadata"
            }), r[9] = v, r[10] = l, r[11] = i) : i = r[11], i
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
                let t, a, s, r, w, I, P, $, et, ea, es, eA, e_, eU, eE, eL, eP, eO, eD, eq, ez, eW, eB, eH, eV, eJ, eF, eK, eG, eQ, eZ, eX, e$, eY, e1, e0, e2, e3, e4, e5 = (0, o.c)(214),
                    {
                        item: e6,
                        conversationId: e8,
                        expandedContentOnly: e7,
                        hideTextBlocksWithStructuredContent: e9,
                        hostId: te,
                        loadRemoteLogos: tt,
                        appInfoOverride: ta,
                        onExpand: tn,
                        onOpenPermissions: to,
                        renderMcpApps: tl,
                        shouldAutoExpandMcpApp: ti,
                        summary: ts,
                        summaryIcon: tr,
                        toolActivityTurnKey: tc
                    } = e,
                    tu = void 0 !== e7 && e7,
                    td = void 0 !== e9 && e9,
                    tp = void 0 === tt || tt,
                    tm = void 0 === tl || tl,
                    th = void 0 === ts ? null : ts,
                    tg = (0, u.y)(Y.a);
                e5[0] !== ta || e5[1] !== te || e5[2] !== e6 ? (t = {
                    item: e6,
                    hostId: te,
                    appInfoOverride: ta
                }, e5[0] = ta, e5[1] = te, e5[2] = e6, e5[3] = t) : t = e5[3];
                let {
                    matchingApp: tx,
                    pluginIcon: tv
                } = (0, ef.c)(t), tf = (0, h.a)(), {
                    platform: tb
                } = (0, E.a)();
                e5[4] !== e6.callId ? (a = (0, d.$e)(e6.callId), e5[4] = e6.callId, e5[5] = a) : a = e5[5];
                let ty = a,
                    tj = (0, u.x)(Q.t, ty),
                    tw = (0, u.x)(Q.h, ty),
                    tk = (0, u.x)(Q.o, ty),
                    tC = tw?.content.toolCallStatus == null && tw?.content.toolResult != null;
                e5[6] !== te || e5[7] !== e6 || e5[8] !== tj || e5[9] !== tC ? (s = (0, ey.a)({
                    item: e6,
                    hostId: te,
                    retainedState: {
                        sourceId: tj,
                        hasSuccessfulToolResult: tC
                    }
                }), e5[6] = te, e5[7] = e6, e5[8] = tj, e5[9] = tC, e5[10] = s) : s = e5[10];
                let tN = s;
                e5[11] !== tN || e5[12] !== tm ? (r = tm && (0, z.c)() && tN.isEligible, e5[11] = tN, e5[12] = tm, e5[13] = r) : r = e5[13];
                let tS = r;
                e5[14] !== e8 || e5[15] !== e6.callId ? (w = (0, W.a)({
                    callId: e6.callId,
                    conversationId: e8
                }), e5[14] = e8, e5[15] = e6.callId, e5[16] = w) : w = e5[16];
                let tM = w,
                    tI = (0, u.x)(W.b, tM);
                (0, ee.f)("2957382457");
                let tT = (0, u.z)(b.a);
                e5[17] !== e8 || e5[18] !== tS ? (I = tS || !e8.startsWith("chatgpt:"), e5[17] = e8, e5[18] = tS, e5[19] = I) : I = e5[19], e5[20] !== e8 || e5[21] !== te || e5[22] !== e6 || e5[23] !== tk || e5[24] !== tS || e5[25] !== I ? (P = {
                    item: e6,
                    hostId: te,
                    conversationId: e8,
                    fallback: tk,
                    enabled: tS,
                    catalogEnabled: I
                }, e5[20] = e8, e5[21] = te, e5[22] = e6, e5[23] = tk, e5[24] = tS, e5[25] = I, e5[26] = P) : P = e5[26];
                let tR = (0, ef.a)(P),
                    {
                        isCodexAppsToolCall: tA,
                        successfulToolResult: t_,
                        resourceUri: tU,
                        toolDefinition: tE
                    } = tR,
                    {
                        elementHeightPx: tL,
                        elementRef: tP
                    } = (0, em.a)(),
                    tO = e6.result?.type === "success" ? e6.result.content : null,
                    tD = e6.result?.type === "error" ? e6.result.error : null;
                e5[27] !== e6 || e5[28] !== tb ? ($ = (0, ed.d)({
                    item: e6,
                    platform: tb
                }), e5[27] = e6, e5[28] = tb, e5[29] = $) : $ = e5[29];
                let tq = $,
                    tz = tq?.nativeAppReference ?? null,
                    tW = (0, ex.b)(tz),
                    tB = tW?.appPath ?? null;
                e5[30] !== tB ? (et = {
                    appPath: tB
                }, e5[30] = tB, e5[31] = et) : et = e5[31];
                let {
                    iconSmall: tH
                } = (0, k.a)(et);
                e5[32] !== e6 || e5[33] !== tx || e5[34] !== tr ? (ea = void 0 === tr ? (0, eg.d)(e6, null == tx ? [] : [tx])?.icon : tr, e5[32] = e6, e5[33] = tx, e5[34] = tr, e5[35] = ea) : ea = e5[35];
                let tV = ea;
                if (void 0 === tr && null != tV) {
                    let e, t;
                    e5[36] !== tx ? (e = null == tx ? [] : [tx], e5[36] = tx, e5[37] = e) : e = e5[37], e5[38] !== tV || e5[39] !== e6 || e5[40] !== tp || e5[41] !== e ? (t = (0, n.jsx)(X.a, {
                        item: e6,
                        apps: e,
                        part: "icon",
                        loadMetadata: tp,
                        children: tV
                    }), e5[38] = tV, e5[39] = e6, e5[40] = tp, e5[41] = e, e5[42] = t) : t = e5[42], tV = t
                }
                e5[43] !== e6.source?.kind || e5[44] !== t_ ? (es = e6.source?.kind === "browserUse" && null != t_ ? (0, f.a)(t_._meta) : null, e5[43] = e6.source?.kind, e5[44] = t_, e5[45] = es) : es = e5[45];
                let tJ = es,
                    tF = tT && !tu && e6.completed && (0, d.qi)(e6.invocation.server) && "js" === e6.invocation.tool && null != t_ ? (0, eh.a)(t_._meta) : [],
                    tK = tx ?? null;
                e5[46] !== tf || e5[47] !== e6.appContext || e5[48] !== e6.completed || e5[49] !== e6.invocation.arguments || e5[50] !== e6.invocation.server || e5[51] !== e6.invocation.tool || e5[52] !== e6.pluginId || e5[53] !== e6.result || e5[54] !== e6.source || e5[55] !== e6.toolDisplay || e5[56] !== tW || e5[57] !== tb || e5[58] !== tK || e5[59] !== tE ? (eA = (0, ej.a)({
                    pluginId: e6.pluginId,
                    toolDisplay: e6.toolDisplay,
                    toolDefinition: tE,
                    appContext: e6.appContext,
                    completed: e6.completed,
                    intl: tf,
                    toolName: e6.invocation.tool,
                    serverName: e6.invocation.server,
                    matchingApp: tK,
                    nativeDesktopAppMetadata: tW,
                    platform: tb,
                    source: e6.source,
                    toolArguments: e6.invocation.arguments,
                    toolResult: e6.result
                }), e5[46] = tf, e5[47] = e6.appContext, e5[48] = e6.completed, e5[49] = e6.invocation.arguments, e5[50] = e6.invocation.server, e5[51] = e6.invocation.tool, e5[52] = e6.pluginId, e5[53] = e6.result, e5[54] = e6.source, e5[55] = e6.toolDisplay, e5[56] = tW, e5[57] = tb, e5[58] = tK, e5[59] = tE, e5[60] = eA) : eA = e5[60];
                let tG = eA,
                    tQ = tS && null != tU && tN.isRenderable,
                    [tZ, tX] = (0, m.useState)(!1),
                    {
                        resource: t$,
                        renderData: tY,
                        state: t1,
                        refetch: t0
                    } = (0, ef.b)(tR, tQ),
                    t2 = tw?.sessionId == null ? null : tw.content.resource,
                    t3 = null == t2 ? t$?.resourceIdentityVerified : tw?.content.mcpAppScope.resourceIdentityVerified,
                    t4 = null == t2 ? t1.error : null,
                    t5 = tQ && null == t2 && t1.isLoading,
                    t6 = (0, u.x)(Q.q, ty),
                    t8 = (0, u.x)(Q.m, ty),
                    t7 = (0, J.a)({
                        hasResourceError: null != t4,
                        isResourceLoading: t5,
                        isDilEnabled: !1,
                        renderData: t2 ?? tY,
                        resourceUri: tU ?? null,
                        shouldRenderMcpApp: tQ
                    }),
                    t9 = "html" === t7.kind ? t7.renderData : null,
                    ae = (0, F.e)({
                        data: t9,
                        error: t4,
                        isLoading: t5
                    }, Q.F),
                    at = "fallback" !== t7.kind,
                    aa = tS && null != tU && (!at || null != t4 || null != t6 && !(t6 instanceof F.b) || "too-large" === ae.kind || "error" === ae.kind),
                    an = aa || (t9?.isCollapsible ?? !0),
                    ao = t8;
                aa ? ao = "fallback" : "html" !== t7.kind && (ao = t7.kind);
                let al = "pending" === ao,
                    ai = "launcher" === ao,
                    as = al || ai;
                e5[61] !== tw ? (e_ = null != tw && tw.content.resource?.hideAttribution === !0 && (!0 === tw.content.mcpAppScope.isVerifiedFirstParty || (0, eb.b)(tw.content)), e5[61] = tw, e5[62] = e_) : e_ = e5[62];
                let ar = e_,
                    ac = "inline" === ao,
                    au = void 0 !== ti && ti && tQ,
                    ad = !aa && tZ || au,
                    ap = at && !ai && (!an || (tI ?? ad)),
                    am = ap && !al,
                    ah = ac && am,
                    ag = tZ || (tI ?? au),
                    [ax, av] = (0, m.useState)(!1),
                    af = ah && ax,
                    ab = t5 || al && ap;
                e5[63] !== ap || e5[64] !== af || e5[65] !== ab ? (eU = {
                    isLoading: ab,
                    isInlineRequested: ap,
                    isInlineOpening: af
                }, e5[63] = ap, e5[64] = af, e5[65] = ab, e5[66] = eU) : eU = e5[66];
                let ay = (0, D.d)(ty, eU),
                    aj = !aa && (al || "html" === t7.kind) ? ay : null;
                e5[67] !== tE ? (eE = (0, K.b)(tE)?.resourceUri, e5[67] = tE, e5[68] = eE) : eE = e5[68];
                let aw = eE,
                    ak = t_?._meta;
                e5[69] !== ak ? (eL = c()(ak, ["_codex_apps", "resource_uri"]), e5[69] = ak, e5[70] = eL) : eL = e5[70];
                let aC = eL;
                e5[71] !== aw || e5[72] !== tA || e5[73] !== tU || e5[74] !== aC || e5[75] !== tE?._meta ? (eP = tA && null != aw && aC === aw && (0, d.Ig)(tE?._meta) === tU, e5[71] = aw, e5[72] = tA, e5[73] = tU, e5[74] = aC, e5[75] = tE?._meta, e5[76] = eP) : eP = e5[76];
                let aN = !(eP && !0 === t3 && (0, D.b)({
                    isInline: !an && ("inline" === ao || al),
                    status: aj,
                    hidesAttributionAndActions: t9?.hideAttribution === !0 && !0 === t9.hideActions
                })) && (as || !tu && (an || "html" === t7.kind && !ar));
                e5[77] !== tA || e5[78] !== e6.appContext?.appName || e5[79] !== e6.invocation.server || e5[80] !== tx?.name || e5[81] !== tv?.alt ? (eO = tx?.name ?? e6.appContext?.appName ?? tv?.alt ?? (tA ? null : (0, p.a)(e6.invocation.server)), e5[77] = tA, e5[78] = e6.appContext?.appName, e5[79] = e6.invocation.server, e5[80] = tx?.name, e5[81] = tv?.alt, e5[82] = eO) : eO = e5[82];
                let aS = eO;
                e5[83] !== aS || e5[84] !== tE ? (eD = (0, D.a)((0, x.a)(tE), aS), e5[83] = aS, e5[84] = tE, e5[85] = eD) : eD = e5[85];
                let aM = eD,
                    aI = aa ? tu || tZ : !as && (tu || (at ? am : ag));
                e: {
                    let e, t, a, n;
                    if (!aI) {
                        let e;
                        e5[86] !== tO ? (e = {
                            displayContent: tO,
                            displayStructuredContentJson: null
                        }, e5[86] = tO, e5[87] = e) : e = e5[87], eq = e;
                        break e
                    }
                    e5[88] !== e6.result ? (e = e6.result?.type === "success" && null != e6.result.structuredContent ? eT(e6.result.structuredContent, 2) : null, e5[88] = e6.result, e5[89] = e) : e = e5[89];
                    let o = e;e5[90] !== tO || e5[91] !== td || e5[92] !== o ? (t = td && null != o && null != tO ? tO.filter(eM) : tO, e5[90] = tO, e5[91] = td, e5[92] = o, e5[93] = t) : t = e5[93];
                    let l = t;e5[94] !== l ? (a = function(e) {
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
                    }(l), e5[94] = l, e5[95] = a) : a = e5[95];
                    let i = a;
                    if (null == i) {
                        let e;
                        e5[96] !== o || e5[97] !== l ? (e = {
                            displayContent: l,
                            displayStructuredContentJson: o
                        }, e5[96] = o, e5[97] = l, e5[98] = e) : e = e5[98], eq = e;
                        break e
                    }
                    if (null == o || i === o) {
                        let e, t;
                        e5[99] === Symbol.for("react.memo_cache_sentinel") ? (e = [], e5[99] = e) : e = e5[99];
                        let a = o ?? i;
                        e5[100] !== a ? (t = {
                            displayContent: e,
                            displayStructuredContentJson: a
                        }, e5[100] = a, e5[101] = t) : t = e5[101], eq = t;
                        break e
                    }
                    e5[102] !== o || e5[103] !== l ? (n = {
                        displayContent: l,
                        displayStructuredContentJson: o
                    }, e5[102] = o, e5[103] = l, e5[104] = n) : n = e5[104],
                    eq = n
                }
                let {
                    displayContent: aT,
                    displayStructuredContentJson: aR
                } = eq, [aA, a_] = (0, m.useState)(!1);
                t: {
                    let e;
                    if (!aA) {
                        ez = null;
                        break t
                    }
                    e5[105] !== e6.callId || e5[106] !== e6.durationMs || e5[107] !== e6.invocation || e5[108] !== e6.result ? (e = eT({
                        callId: e6.callId,
                        invocation: e6.invocation,
                        durationMs: e6.durationMs,
                        result: e6.result
                    }, 2), e5[105] = e6.callId, e5[106] = e6.durationMs, e5[107] = e6.invocation, e5[108] = e6.result, e5[109] = e) : e = e5[109],
                    ez = e
                }
                let aU = ez;
                e5[110] !== tf ? (eW = tf.formatMessage({
                    id: "codex.mcpTool.rawOutputTriggerTooltip",
                    defaultMessage: "Show raw tool call output",
                    description: "Tooltip for the button that opens the raw MCP tool output dialog"
                }), e5[110] = tf, e5[111] = eW) : eW = e5[111];
                let aE = eW,
                    aL = e6.completed || null != e6.result || at;
                e5[112] !== e6 ? (eB = (0, eu.a)(e6), e5[112] = e6, e5[113] = eB) : eB = e5[113];
                let aP = eB,
                    aO = !tu && !aP && !tQ && !aa,
                    aD = !e6.completed;
                e5[114] !== tx ? (eH = null == tx ? [] : [tx], e5[114] = tx, e5[115] = eH) : eH = e5[115], e5[116] !== e6 || e5[117] !== tp || e5[118] !== eH || e5[119] !== tG ? (eV = (0, n.jsx)(X.a, {
                    item: e6,
                    apps: eH,
                    part: "label",
                    loadMetadata: tp,
                    children: tG
                }), e5[116] = e6, e5[117] = tp, e5[118] = eH, e5[119] = tG, e5[120] = eV) : eV = e5[120], e5[121] !== aD || e5[122] !== eV ? (eJ = (0, n.jsx)(ew.a, {
                    active: aD,
                    className: "min-w-0 shrink truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                    children: eV
                }), e5[121] = aD, e5[122] = eV, e5[123] = eJ) : eJ = e5[123];
                let aq = eJ;
                e5[124] !== tV || e5[125] !== tJ || e5[126] !== te || e5[127] !== e6 || e5[128] !== tp || e5[129] !== tx || e5[130] !== tH || e5[131] !== tW?.displayName || e5[132] !== tz || e5[133] !== tq || e5[134] !== tv ? (eF = void 0 !== tV ? tV : (0, n.jsx)(ec.a, {
                    hostId: te,
                    item: e6,
                    loadRemoteLogos: tp,
                    fallback: null == tv && null != tz ? (0, n.jsx)(C.a, {
                        alt: tW?.displayName ?? tq?.name ?? e6.invocation.server,
                        className: "icon-xs shrink-0 scale-[1.15] object-contain",
                        loadRemote: tp,
                        logoUrl: tH,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(_.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: ek.a
                        })
                    }) : null == tv && tq?.groupKey === ed.b ? (0, n.jsx)(_.a, {
                        className: "shrink-0 text-secondary",
                        asset: ek.a
                    }) : null == tv && tq?.logoUrl != null ? (0, n.jsx)(C.a, {
                        alt: tq.name,
                        className: "icon-xs shrink-0 object-contain",
                        loadRemote: tp,
                        logoUrl: tq.logoUrl,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(_.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: eC.a
                        })
                    }) : null == tv && tq?.usesBrowserIcon === !0 ? null == tJ ? (0, n.jsx)(_.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: eS.a
                    }) : (0, n.jsx)(A.a, {
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        href: tJ,
                        loadRemote: tp
                    }) : null == tv && (0, d.qi)(e6.invocation.server) ? (0, n.jsx)(_.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: eN.a
                    }) : (0, n.jsx)(C.a, {
                        alt: tv?.alt ?? tx?.name ?? e6.appContext?.appName ?? e6.invocation.server,
                        appInfo: null == tv ? tx : null,
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        loadRemote: tp,
                        knownAppId: tv?.knownAppId ?? e6.appContext?.appName ?? e6.appContext?.connectorId,
                        logoUrl: tv?.logoUrl,
                        fallback: (0, n.jsx)(_.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: eC.a
                        })
                    })
                }), e5[124] = tV, e5[125] = tJ, e5[126] = te, e5[127] = e6, e5[128] = tp, e5[129] = tx, e5[130] = tH, e5[131] = tW?.displayName, e5[132] = tz, e5[133] = tq, e5[134] = tv, e5[135] = eF) : eF = e5[135];
                let az = eF;
                e5[136] !== th || e5[137] !== az || e5[138] !== aq ? (eK = th ?? (0, n.jsxs)(n.Fragment, {
                    children: [az, aq]
                }), e5[136] = th, e5[137] = az, e5[138] = aq, e5[139] = eK) : eK = e5[139];
                let aW = eK;
                e5[140] !== ag || e5[141] !== ap || e5[142] !== tZ || e5[143] !== tM || e5[144] !== tn || e5[145] !== tg || e5[146] !== au || e5[147] !== aa || e5[148] !== at || e5[149] !== ac || e5[150] !== tc || e5[151] !== tI ? (eG = () => {
                    if (aa) {
                        tZ || tn?.(), tX(!tZ);
                        return
                    }
                    let e = at ? !ap : !ag;
                    if (e && tn?.(), at) {
                        av(e && ac), tg.set(W.b, tM, e);
                        return
                    }
                    e && null != tc && (0, ep.b)(tg, tc), !e && (!0 === tI || au) && tg.set(W.b, tM, !1), tX(e)
                }, e5[140] = ag, e5[141] = ap, e5[142] = tZ, e5[143] = tM, e5[144] = tn, e5[145] = tg, e5[146] = au, e5[147] = aa, e5[148] = at, e5[149] = ac, e5[150] = tc, e5[151] = tI, e5[152] = eG) : eG = e5[152];
                let aB = eG;
                e5[153] !== e6.automaticApprovalReviews ? (eQ = null == e6.automaticApprovalReviews ? null : (0, n.jsx)(er.a, {}), e5[153] = e6.automaticApprovalReviews, e5[154] = eQ) : eQ = e5[154];
                let aH = eQ,
                    aV = ah && (t9?.prefersBorder ?? tw?.content.resource?.prefersBorder ?? !0),
                    aJ = aL && "opening" !== aj && !ai && an ? {
                        alignEnd: aV,
                        expanded: aI,
                        onToggle: aB
                    } : void 0,
                    aF = (0, i.b)("group", aV && "overflow-hidden rounded-lg border border-strong bg-surface"),
                    aK = (0, i.b)((ai || ah) && "w-full", aV && "px-4 py-2.5");
                e5[155] !== t0 ? (eZ = () => {
                    t0({
                        cancelRefetch: !1
                    })
                }, e5[155] = t0, e5[156] = eZ) : eZ = e5[156];
                let aG = (0, n.jsx)(V.a, {
                        hostDisplayModes: Q.F,
                        resource: {
                            data: null == tU ? null : t9,
                            error: t4,
                            isLoading: t5
                        },
                        inlineSurface: ac ? "card" : "standalone",
                        mcpAppId: ty,
                        appName: aS ?? void 0,
                        presentation: aa ? "inline" : t8,
                        onRetryResourceRead: eZ,
                        showLoadingStatus: !aN
                    }),
                    aQ = () => (0, n.jsxs)(eo.a, {
                        ref: aO ? void 0 : tP,
                        className: (0, i.b)(tQ && "relative", !an && "py-1"),
                        variant: an && !aV && (aN || !ac) ? "grouped" : "flush",
                        children: [null == e6.automaticApprovalReviews ? null : (0, n.jsx)(er.d, {
                            className: aV ? "px-4" : void 0,
                            isExpandable: !ac,
                            reviews: e6.automaticApprovalReviews
                        }), at ? af ? (0, n.jsx)(H.a, {
                            className: "w-full",
                            height: (0, B.a)(null, t9?.heightHint ?? null, t9?.minFrameHeight ?? null),
                            showLoadingStatus: !1
                        }) : aG : aT && aT.length > 0 ? (0, n.jsx)("div", {
                            className: (0, i.b)("[&_*]:text-text/50", "flex flex-col gap-0.5"),
                            children: aT.map((e, t) => (0, n.jsx)(eR, {
                                block: e,
                                conversationId: e8,
                                hostId: te
                            }, t))
                        }) : tD ? (0, n.jsx)(U.a, {
                            className: "w-full",
                            fullWidth: !0,
                            level: "danger",
                            children: (0, n.jsx)("div", {
                                className: "max-h-48 overflow-auto text-size-chat whitespace-pre-wrap",
                                children: tD
                            })
                        }) : aR ? null : (0, n.jsx)("p", {
                            className: "text-codex-description/80",
                            children: (0, n.jsx)(g.a, {
                                id: "codex.mcpTool.noResult",
                                defaultMessage: "Tool returned no content",
                                description: "Message shown when an MCP tool call produced no content"
                            })
                        }), !t5 && !af && !at && aR && (0, n.jsx)(M.CodeSnippet, {
                            codeContainerClassName: "max-h-48 overflow-auto",
                            language: "json",
                            content: aR,
                            showStickyRightContent: !1
                        }), !t5 && !af && (0, n.jsx)(T.a, {
                            open: aA,
                            onOpenChange: a_,
                            triggerContent: (0, n.jsx)("div", {
                                className: (0, i.b)("inline-flex w-fit", tQ && "absolute right-1 bottom-2 z-50"),
                                children: (0, n.jsx)(l.a, {
                                    side: "top",
                                    align: "center",
                                    content: aE,
                                    children: (0, n.jsx)(S.a, {
                                        className: "cursor-interaction opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 focus-visible:opacity-100",
                                        "aria-label": aE,
                                        color: "ghost",
                                        onClick: () => {
                                            a_(!0)
                                        },
                                        size: "icon",
                                        children: (0, n.jsx)(L.a, {
                                            className: "icon-xxs"
                                        })
                                    })
                                })
                            }),
                            children: (0, n.jsxs)(R.b, {
                                children: [(0, n.jsx)(R.e, {
                                    children: (0, n.jsx)(R.d, {
                                        title: (0, n.jsx)(T.e, {
                                            children: (0, n.jsx)(g.a, {
                                                id: "codex.mcpTool.rawOutputHeading",
                                                defaultMessage: "Raw {server}.{tool} tool call output",
                                                description: "Heading shown within the raw output dialog",
                                                values: {
                                                    server: e6.invocation.server,
                                                    tool: e6.invocation.tool
                                                }
                                            })
                                        })
                                    })
                                }), (0, n.jsx)(R.e, {
                                    children: null == aU ? null : (0, n.jsx)(M.CodeSnippet, {
                                        codeContainerClassName: "max-h-128 overflow-auto",
                                        language: "json",
                                        content: aU,
                                        showStickyRightContent: !0
                                    })
                                })]
                            })
                        })]
                    }),
                    aZ = aO ? null : (0, n.jsxs)(n.Fragment, {
                        children: [aP ? (0, n.jsx)(eo.a, {
                            variant: "grouped",
                            children: (0, n.jsx)(U.a, {
                                className: "w-full",
                                fullWidth: !0,
                                level: "warning",
                                actions: null == to ? void 0 : (0, n.jsx)(S.a, {
                                    color: "secondary",
                                    onClick: to,
                                    children: (0, n.jsx)(g.a, {
                                        id: "codex.mcpTool.reviewPermissions",
                                        defaultMessage: "Review permissions",
                                        description: "Opens the existing permissions menu for the chat whose tool call could not request approval"
                                    })
                                }),
                                children: null == to ? (0, n.jsx)(g.a, {
                                    id: "codex.mcpTool.approvalRequestsDisabled",
                                    defaultMessage: "Approval requests were disabled for this tool call. If available, review this chat’s permissions before retrying.",
                                    description: "Explanation on a failed MCP tool call that needed approval but could not request it. Suggests the existing permissions control for this chat, which may be unavailable in read-only views or restricted by policy. Does not promise that restrictions can be overridden."
                                }) : (0, n.jsx)(g.a, {
                                    id: "codex.mcpTool.approvalRequestsDisabled.recovery",
                                    defaultMessage: "Approval requests were disabled for this tool call. Choose “Ask for approval” in this chat’s permissions if available, then ask to retry.",
                                    description: "Explains that the tool call was blocked before approval could be requested. The adjacent action opens this chat's permissions menu; the user must select an allowed mode and ask to retry. Managed policy may limit the available modes."
                                })
                            })
                        }) : null, as ? aG : (0, n.jsx)(N.a, {
                            expanded: aI,
                            height: tL,
                            onExpandComplete: am ? () => av(!1) : void 0,
                            children: aI ? aQ() : null
                        })]
                    });
                e5[157] !== aJ || e5[158] !== aO || e5[159] !== aZ || e5[160] !== aQ ? (eX = aO ? {
                    disclosure: aJ && {
                        ...aJ,
                        details: aQ
                    }
                } : {
                    externalDisclosure: aJ,
                    body: aZ
                }, e5[157] = aJ, e5[158] = aO, e5[159] = aZ, e5[160] = aQ, e5[161] = eX) : eX = e5[161];
                let aX = eX;
                e5[162] !== aH || e5[163] !== aJ || e5[164] !== aK || e5[165] !== t5 || e5[166] !== aZ || e5[167] !== ty || e5[168] !== aX || e5[169] !== aW || e5[170] !== az || e5[171] !== aM || e5[172] !== aj ? (e$ = null != aj ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(q.a, {
                        accessory: aH,
                        className: aK,
                        disabled: t5,
                        disclosure: aJ,
                        icon: az,
                        mcpAppId: ty,
                        name: aM,
                        status: aj
                    }), aZ]
                }) : (0, n.jsx)(el.a, {
                    accessory: aH,
                    className: aK,
                    ...aX,
                    children: aW
                }), e5[162] = aH, e5[163] = aJ, e5[164] = aK, e5[165] = t5, e5[166] = aZ, e5[167] = ty, e5[168] = aX, e5[169] = aW, e5[170] = az, e5[171] = aM, e5[172] = aj, e5[173] = e$) : e$ = e5[173];
                let a$ = e$;
                e5[174] !== e6 ? (eY = (0, v.a)(e6), e5[174] = e6, e5[175] = eY) : eY = e5[175];
                let aY = eY;
                if (null != aY) {
                    let e;
                    return e5[176] !== aY.id || e5[177] !== aY.schedule || e5[178] !== aY.title ? (e = (0, n.jsx)(O.a, {
                        id: aY.id,
                        mode: "view",
                        name: aY.title,
                        rrule: aY.schedule
                    }), e5[176] = aY.id, e5[177] = aY.schedule, e5[178] = aY.title, e5[179] = e) : e = e5[179], e
                }
                e5[180] !== te || e5[181] !== e6 ? (e1 = (0, Z.b)(e6, te), e5[180] = te, e5[181] = e6, e5[182] = e1) : e1 = e5[182];
                let a1 = e1;
                if (a1?.type === "chatgpt-automation") {
                    let e;
                    return e5[183] !== a1 ? (e = (0, n.jsx)(y.a, {
                        automation: a1
                    }), e5[183] = a1, e5[184] = e) : e = e5[184], e
                }
                if (a1?.type === "chatgpt-automation-list") {
                    let e;
                    return e5[185] !== a1.automations ? (e = (0, n.jsx)(j.a, {
                        automations: a1.automations
                    }), e5[185] = a1.automations, e5[186] = e) : e = e5[186], e
                }
                e5[187] !== ap || e5[188] !== ty || e5[189] !== tm || e5[190] !== tg || e5[191] !== tQ ? (e0 = tm || "chatgpt-thread" !== tg.value.routeKind ? (0, n.jsx)(G.b, {
                    mcpAppId: ty,
                    isInlineRequested: tQ && ap
                }) : null, e5[187] = ap, e5[188] = ty, e5[189] = tm, e5[190] = tg, e5[191] = tQ, e5[192] = e0) : e0 = e5[192], e5[193] !== aH || e5[194] !== aF || e5[195] !== aN || e5[196] !== aK || e5[197] !== aZ || e5[198] !== aX || e5[199] !== ac || e5[200] !== th || e5[201] !== tr || e5[202] !== aq || e5[203] !== a$ || e5[204] !== aj ? (e2 = void 0 !== tr && aN && null == aj ? (0, n.jsx)(en.a, {
                    accessory: aH,
                    ...aX,
                    className: aF,
                    "data-mcp-app-card": !!ac || void 0,
                    headerClassName: aK,
                    icon: tr,
                    summary: th ?? aq
                }) : (0, n.jsx)(ei.a, {
                    className: aF,
                    "data-mcp-app-card": !!ac || void 0,
                    children: aN ? a$ : aZ
                }), e5[193] = aH, e5[194] = aF, e5[195] = aN, e5[196] = aK, e5[197] = aZ, e5[198] = aX, e5[199] = ac, e5[200] = th, e5[201] = tr, e5[202] = aq, e5[203] = a$, e5[204] = aj, e5[205] = e2) : e2 = e5[205], e5[206] !== tJ || e5[207] !== e6.callId || e5[208] !== tp ? (e3 = (e, t) => (0, n.jsxs)(m.Fragment, {
                    children: [(0, n.jsx)(ev.a, {
                        variant: "grouped"
                    }), (0, n.jsx)(eI, {
                        call: e,
                        fallbackPageUrl: tJ,
                        loadRemoteLogos: tp
                    })]
                }, `${e6.callId}:webmcp:${t}:${e.name}`), e5[206] = tJ, e5[207] = e6.callId, e5[208] = tp, e5[209] = e3) : e3 = e5[209];
                let a0 = tF.map(e3);
                return e5[210] !== e0 || e5[211] !== e2 || e5[212] !== a0 ? (e4 = (0, n.jsxs)(n.Fragment, {
                    children: [e0, e2, a0]
                }), e5[210] = e0, e5[211] = e2, e5[212] = a0, e5[213] = e4) : e4 = e5[213], e4
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
            c = a("KaH3"),
            u = a("Nj7b"),
            d = a("FvYa"),
            p = a("HOLv"),
            m = a("zUz7"),
            h = a("LF5P"),
            g = a("zIrx");
        a.d(t, {}, {
            a: function(e) {
                let t, a, x = (0, o.c)(9),
                    {
                        fallback: v,
                        hostId: f,
                        item: b,
                        loadRemoteLogos: y
                    } = e,
                    j = b.appContext?.connectorId === u.b || (0, c.f)(b),
                    w = (0, l.x)(!y || j || null != (0, h.d)({
                        item: b
                    }) || (0, i.qi)(b.invocation.server) || (0, r.f)(b.invocation.server) ? null : s.a, {
                        hostId: f,
                        serverName: b.invocation.server,
                        threadId: (0, i.Se)(b.threadId)
                    })?.serverInfo;
                if (j) {
                    let e;
                    return x[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(p.a, {
                        className: "shrink-0 text-tertiary",
                        asset: g.a
                    }), x[0] = e) : e = x[0], e
                }
                x[1] !== w ? (t = (0, m.a)(w), x[1] = w, x[2] = t) : t = x[2];
                let k = t;
                return x[3] !== v || x[4] !== k || x[5] !== b.invocation.server || x[6] !== w?.name || x[7] !== w?.title ? (a = null == k ? v : (0, n.jsx)(d.a, {
                    alt: w?.title ?? w?.name ?? b.invocation.server,
                    className: "icon-xs shrink-0 object-contain",
                    logoUrl: k.logoUrl,
                    logoDarkUrl: k.logoDarkUrl,
                    fallback: v
                }), x[3] = v, x[4] = k, x[5] = b.invocation.server, x[6] = w?.name, x[7] = w?.title, x[8] = a) : a = x[8], a
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
        var g = a("TleN"),
            x = a("TL6G"),
            v = a("tSEg");

        function f(e) {
            return "string" == typeof e
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, l, b, y, j, w, k, C, N, S, M, I, T, R, A, _, U, E = (0, o.c)(130),
                    {
                        elicitation: L,
                        result: P,
                        id: O,
                        kind: D,
                        mode: q,
                        name: z,
                        prompt: W,
                        rrule: B,
                        projectId: H,
                        cwds: V,
                        destination: J,
                        executionEnvironment: F,
                        localEnvironmentConfigPath: K,
                        model: G,
                        reasoningEffort: Q,
                        notificationPolicy: Z,
                        targetThreadId: X,
                        status: $
                    } = e,
                    Y = void 0 === P ? null : P,
                    ee = (0, s.y)(v.a),
                    et = (0, c.a)();
                (0, g.a)();
                let ea = (0, u.Z)("/remote/:conversationId"),
                    en = (0, u.Z)("/local/:conversationId"),
                    eo = (0, s.z)(h.e),
                    el = X ?? null;
                E[0] !== V || E[1] !== J || E[2] !== F || E[3] !== O || E[4] !== D || E[5] !== K || E[6] !== q || E[7] !== G || E[8] !== z || E[9] !== Z || E[10] !== H || E[11] !== W || E[12] !== Q || E[13] !== el || E[14] !== B || E[15] !== $ ? (t = JSON.stringify({
                    id: O,
                    kind: D,
                    mode: q,
                    name: z,
                    prompt: W,
                    rrule: B,
                    projectId: H,
                    cwds: V,
                    destination: J,
                    executionEnvironment: F,
                    localEnvironmentConfigPath: K,
                    model: G,
                    reasoningEffort: Q,
                    notificationPolicy: Z,
                    targetThreadId: el,
                    status: $
                }), E[0] = V, E[1] = J, E[2] = F, E[3] = O, E[4] = D, E[5] = K, E[6] = q, E[7] = G, E[8] = z, E[9] = Z, E[10] = H, E[11] = W, E[12] = Q, E[13] = el, E[14] = B, E[15] = $, E[16] = t) : t = E[16];
                let ei = t,
                    es = eo?.directiveKey === ei ? eo.automationId : null,
                    er = es ?? Y?.automationId ?? O,
                    ec = Y?.snapshot ?? null,
                    eu = "view" === q ? q : null,
                    ed = "view" === q && null != O,
                    ep = null != O && (ed || "suggested-update" === q),
                    em = (0, s.z)(d.c),
                    eh = em.data,
                    eg = !!ep && em.isLoading;
                if (E[17] !== eh || E[18] !== es || E[19] !== V || E[20] !== O || E[21] !== et || E[22] !== eg || E[23] !== ed || E[24] !== D || E[25] !== q || E[26] !== z || E[27] !== H || E[28] !== W || E[29] !== er || E[30] !== el || E[31] !== Y?.automationId || E[32] !== Y?.mode || E[33] !== ec?.name || E[34] !== ec?.rrule || E[35] !== B || E[36] !== $) {
                    var ex;
                    let e, t, n, o, s, c, u, d, p, h, g = null != O ? eh?.items.find(e => e.id === O) ?? null : null;
                    E[46] !== eh?.items || E[47] !== es || E[48] !== et || E[49] !== eg || E[50] !== ed || E[51] !== q || E[52] !== z || E[53] !== er || E[54] !== Y?.mode || E[55] !== ec?.name || E[56] !== ec?.rrule || E[57] !== B ? ({
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
                        mode: Y?.mode ?? q,
                        isSuggestionAccepted: null != es,
                        trimmedId: er ?? null,
                        trimmedName: z ?? ec?.name ?? null,
                        trimmedRrule: B ?? ec?.rrule ?? null,
                        automations: eh?.items ?? null,
                        isLoading: eg
                    }), o = et.formatMessage({
                        id: "settings.automations.rruleSummaryFallback",
                        defaultMessage: "Custom schedule",
                        description: "Fallback label when RRULE summary cannot be generated"
                    }), s = (0, m.f)({
                        rrule: n,
                        intl: et,
                        fallbackMessage: o
                    }), E[46] = eh?.items, E[47] = es, E[48] = et, E[49] = eg, E[50] = ed, E[51] = q, E[52] = z, E[53] = er, E[54] = Y?.mode, E[55] = ec?.name, E[56] = ec?.rrule, E[57] = B, E[58] = t, E[59] = w, E[60] = n, E[61] = o, E[62] = s) : (t = E[58], w = E[59], n = E[60], o = E[61], s = E[62]);
                    let x = s;
                    E[63] !== et ? (c = et.formatMessage({
                        id: "settings.automations.loading",
                        defaultMessage: "Loading…",
                        description: "Loading state for workflows list"
                    }), E[63] = et, E[64] = c) : c = E[64];
                    let v = c;
                    E[65] !== et ? (u = et.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task",
                        description: "Fallback title when scheduled task name is missing"
                    }), E[65] = et, E[66] = u) : u = E[66];
                    let f = u;
                    E[67] !== q || E[68] !== Y?.mode ? (d = Y?.mode ?? q, E[67] = q, E[68] = Y?.mode, E[69] = d) : d = E[69], a = (y = "delete" === (b = d)) || Y?.automationId != null ? Y?.automationId ?? O ?? null : er, E[70] !== a || E[71] !== y ? (p = y ? (ex = a ?? null, 0 === (e = ex?.trim() ?? "").length ? null : /^[0-9a-f]{8}-[0-9a-f-]+$/i.test(e) ? e : i()(e.replace(/[-_]+/g, " "))) : null, E[70] = a, E[71] = y, E[72] = p) : p = E[72];
                    let S = p;
                    N = t ? v : w || S || f, E[73] !== S || E[74] !== et || E[75] !== w ? (h = w ?? S ?? et.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task",
                        description: "Fallback title when scheduled task name is missing"
                    }), E[73] = S, E[74] = et, E[75] = w, E[76] = h) : h = E[76], C = h, j = x || (t ? v : null != n ? o : null), l = null != z && null != W && null != B && ("heartbeat" === D ? null != el : void 0 !== H || null != V), k = null != O && null != $ && null != z && null != W && null != B && (null == g ? "heartbeat" === D ? null != el : void 0 !== H || null != V : !!(0, r.ei)(g) || void 0 !== H || null != V), E[17] = eh, E[18] = es, E[19] = V, E[20] = O, E[21] = et, E[22] = eg, E[23] = ed, E[24] = D, E[25] = q, E[26] = z, E[27] = H, E[28] = W, E[29] = er, E[30] = el, E[31] = Y?.automationId, E[32] = Y?.mode, E[33] = ec?.name, E[34] = ec?.rrule, E[35] = B, E[36] = $, E[37] = a, E[38] = l, E[39] = b, E[40] = y, E[41] = j, E[42] = w, E[43] = k, E[44] = C, E[45] = N
                } else a = E[37], l = E[38], b = E[39], y = E[40], j = E[41], w = E[42], k = E[43], C = E[44], N = E[45];
                let ev = k,
                    ef = "suggested-update" === q && ep && em.isLoading,
                    eb = "suggested-create" === q || "suggested-update" === q,
                    ey = eb ? L : void 0,
                    ej = O ?? null,
                    ew = D ?? null,
                    ek = z ?? "",
                    eC = W ?? "",
                    eN = B ?? "";
                E[77] !== V ? (S = V ?? [], E[77] = V, E[78] = S) : S = E[78];
                let eS = void 0 !== H ? H : V?.[0] === r.gd ? null : V?.[0] ?? null,
                    eM = F ?? null,
                    eI = K ?? null,
                    eT = G ?? null,
                    eR = Q ?? null;
                E[79] !== Z ? (M = void 0 !== Z ? {
                    notificationPolicy: Z
                } : {}, E[79] = Z, E[80] = M) : M = E[80];
                let eA = $ ?? null;
                E[81] !== ei || E[82] !== eu || E[83] !== el || E[84] !== S || E[85] !== eS || E[86] !== eM || E[87] !== eI || E[88] !== eT || E[89] !== eR || E[90] !== M || E[91] !== eA || E[92] !== ey || E[93] !== ej || E[94] !== ew || E[95] !== ek || E[96] !== eC || E[97] !== eN ? (I = {
                    elicitation: ey,
                    directiveKey: ei,
                    mode: eu,
                    id: ej,
                    kind: ew,
                    name: ek,
                    prompt: eC,
                    rrule: eN,
                    cwds: S,
                    projectId: eS,
                    executionEnvironment: eM,
                    localEnvironmentConfigPath: eI,
                    model: eT,
                    reasoningEffort: eR,
                    ...M,
                    targetThreadId: el,
                    status: eA
                }, E[81] = ei, E[82] = eu, E[83] = el, E[84] = S, E[85] = eS, E[86] = eM, E[87] = eI, E[88] = eT, E[89] = eR, E[90] = M, E[91] = eA, E[92] = ey, E[93] = ej, E[94] = ew, E[95] = ek, E[96] = eC, E[97] = eN, E[98] = I) : I = E[98];
                let e_ = I,
                    eU = null != es;
                E[99] !== l || E[100] !== ev || E[101] !== eu || E[102] !== ed || E[103] !== eU ? (T = (0, h.A)({
                    directiveMode: eu,
                    canCreate: l,
                    canUpdate: ev,
                    isViewMode: ed,
                    forceOpen: eU
                }), E[99] = l, E[100] = ev, E[101] = eu, E[102] = ed, E[103] = eU, E[104] = T) : T = E[104];
                let eE = T,
                    eL = y ? null : j;
                E[105] !== eE || E[106] !== a || E[107] !== es || E[108] !== e_ || E[109] !== ef || E[110] !== eb || E[111] !== en || E[112] !== ea || E[113] !== ee || E[114] !== C ? (R = () => {
                    if (ef) return;
                    let e = a;
                    null != e ? x.c.dispatchHostMessage({
                        type: "navigate-to-route",
                        path: `/automations?automationId=${e}`
                    }) : "create" === eE && (ee.set(h.e, null), ee.set(h.f, e_), x.c.dispatchHostMessage({
                        type: "navigate-to-route",
                        path: "/automations?automationMode=create"
                    }))
                }, E[105] = eE, E[106] = a, E[107] = es, E[108] = e_, E[109] = ef, E[110] = eb, E[111] = en, E[112] = ea, E[113] = ee, E[114] = C, E[115] = R) : R = E[115];
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
                let eq = A;
                E[120] !== eq || E[121] !== w || E[122] !== eL ? (_ = [eq, w, eL].filter(f), E[120] = eq, E[121] = w, E[122] = eL, E[123] = _) : _ = E[123];
                let ez = _.join(" · "),
                    eW = eL ?? eq,
                    eB = ez || void 0;
                return E[124] !== eO || E[125] !== eP || E[126] !== eW || E[127] !== eB || E[128] !== N ? (U = (0, n.jsx)(p.a, {
                    title: N,
                    subtitle: eW,
                    ariaLabel: eB,
                    canOpen: eO,
                    onOpen: eP
                }), E[124] = eO, E[125] = eP, E[126] = eW, E[127] = eB, E[128] = N, E[129] = U) : U = E[129], U
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
            g = a("tSEg"),
            x = a("nMdB"),
            v = a("FWVQ"),
            f = a("qZWE"),
            b = a("pGLn");
        a.d(t, {}, {
            a: function(e) {
                let t, a, y, j, w, k, C, N, S, M, I = (0, o.c)(37),
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
                    O = (0, s.y)(g.a),
                    D = (0, u.c)(),
                    q = (0, r.a)(),
                    z = (0, s.x)(_ ? null : f.p, T);
                I[0] !== q ? (t = q.formatMessage({
                    id: "codex.mcpTool.openAppInTab",
                    defaultMessage: "Open app in tab",
                    description: "Opens an MCP app in a tab from its tool call row"
                }), I[0] = q, I[1] = t) : t = I[1];
                let W = t;
                I[2] !== z?.inline || I[3] !== P || I[4] !== T || I[5] !== O || I[6] !== A ? (a = P ?? ("closed" === A && z?.inline ? {
                    expanded: !1,
                    onToggle: () => (0, f.x)(O, T, "inline")
                } : void 0), I[2] = z?.inline, I[3] = P, I[4] = T, I[5] = O, I[6] = A, I[7] = a) : a = I[7];
                let B = a;
                I[8] !== z?.tab || I[9] !== W || I[10] !== T || I[11] !== O ? (y = z?.tab ? (0, n.jsx)(l.a, {
                    content: W,
                    children: (0, n.jsx)(p.a, {
                        className: "relative",
                        "aria-label": W,
                        color: "ghost",
                        size: "icon",
                        onClick: () => (0, f.x)(O, T, "fullscreen"),
                        children: (0, n.jsx)(m.N, {})
                    })
                }) : null, I[8] = z?.tab, I[9] = W, I[10] = T, I[11] = O, I[12] = y) : y = I[12], I[13] !== E || I[14] !== y ? (j = (0, n.jsxs)(n.Fragment, {
                    children: [y, E]
                }), I[13] = E, I[14] = y, I[15] = j) : j = I[15], I[16] !== B || I[17] !== D ? (w = null == B ? void 0 : {
                    ...B,
                    onToggle: e => {
                        (0, x.a)(e.currentTarget, D), B.onToggle(e)
                    }
                }, I[16] = B, I[17] = D, I[18] = w) : w = I[18];
                let H = "opening" === A,
                    V = null != B && "group-hover/activity-header:[--agent-activity-summary-color:var(--color-text)]";
                return I[19] !== V ? (k = (0, i.b)("min-w-0 shrink truncate", b.a.summary, V), I[19] = V, I[20] = k) : k = I[20], I[21] !== q || I[22] !== R ? (C = R ?? q.formatMessage(v.c), I[21] = q, I[22] = R, I[23] = C) : C = I[23], I[24] !== A || I[25] !== C ? (N = (0, n.jsx)(c.a, {
                    id: "mcpApp.activity.status",
                    defaultMessage: "{status, select, opening {Opening {name}} open {Opened {name}} error {Couldn’t open {name}} other {Open {name}}}",
                    description: "Widget activity row: loading, successfully opened, or an action to reopen. The same human-facing tool or view name is used in every state.",
                    values: {
                        status: A,
                        name: C
                    }
                }), I[24] = A, I[25] = C, I[26] = N) : N = I[26], I[27] !== N || I[28] !== H || I[29] !== k ? (S = (0, n.jsx)(h.a, {
                    active: H,
                    role: "status",
                    className: k,
                    children: N
                }), I[27] = N, I[28] = H, I[29] = k, I[30] = S) : S = I[30], I[31] !== L || I[32] !== U || I[33] !== S || I[34] !== j || I[35] !== w ? (M = (0, n.jsxs)(d.b, {
                    className: L,
                    accessory: j,
                    externalDisclosure: w,
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
                let t, a, s, h, g, x, v, f, b = (0, o.c)(32),
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
                    S = y.appContext?.actionName ?? y.invocation.tool,
                    M = y.appContext?.connectorId ?? N?.id;
                b[6] !== y.invocation.server || b[7] !== S || b[8] !== M ? (a = (0, u.a)(y.invocation.server, S, M), b[6] = y.invocation.server, b[7] = S, b[8] = M, b[9] = a) : a = b[9];
                let I = a;
                b[10] !== y.invocation.arguments || b[11] !== I ? (s = "read_page" === I ? m.safeParse(y.invocation.arguments).data : void 0, b[10] = y.invocation.arguments, b[11] = I, b[12] = s) : s = b[12];
                let T = s;
                b[13] !== T ? (h = null == T ? null : {
                    kind: "page",
                    id: T.page_id
                }, b[13] = T, b[14] = h) : h = b[14], b[15] !== k ? (g = {
                    enabled: k
                }, b[15] = k, b[16] = g) : g = b[16];
                let R = (0, l.x)(d.c, h, g);
                if (null == R) return C;
                b[17] !== y.completed || b[18] !== y.invocation.server || b[19] !== y.result ? (x = "active", y.completed && (x = (0, c.a)({
                    result: y.result,
                    isCodexAppsServer: "codex_apps" === y.invocation.server
                }) ? "failed" : "completed"), b[17] = y.completed, b[18] = y.invocation.server, b[19] = y.result, b[20] = x) : x = b[20];
                let A = R.title ?? "";
                return b[21] !== C || b[22] !== w || b[23] !== x ? (v = e => {
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
                        description: "Activity for a named Page: active means a read in progress, failed means an unsuccessful read, and other means a completed read. title is the Page's display title.",
                        values: {
                            state: x,
                            title: a
                        }
                    })
                }, b[21] = C, b[22] = w, b[23] = x, b[24] = v) : v = b[24], b[25] !== R.document_type || b[26] !== R.namespace || b[27] !== R.page_id || b[28] !== R.symbol || b[29] !== A || b[30] !== v ? (f = (0, n.jsx)(p.a, {
                    pageId: R.page_id,
                    documentType: R.document_type,
                    namespace: R.namespace,
                    symbol: R.symbol,
                    title: A,
                    iconClassName: "text-text/60",
                    children: v
                }), b[25] = R.document_type, b[26] = R.namespace, b[27] = R.page_id, b[28] = R.symbol, b[29] = A, b[30] = v, b[31] = f) : f = b[31], f
            }
        })
    })
};