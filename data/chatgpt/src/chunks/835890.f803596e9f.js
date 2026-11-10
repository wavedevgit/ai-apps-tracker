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
                let t, a, s, d, h, x, g, v = (0, o.c)(22),
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
                }), v[14] = w, v[15] = s, v[16] = d, v[17] = k, v[18] = h) : h = v[18], v[19] === Symbol.for("react.memo_cache_sentinel") ? (x = null, v[19] = x) : x = v[19], v[20] !== h ? (g = (0, n.jsxs)("div", {
                    className: "flex w-full min-w-0 flex-col gap-2 self-start",
                    children: [h, x]
                }), v[20] = h, v[21] = g) : g = v[21], g
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
                        conversationId: g
                    } = e,
                    v = (0, l.y)(d.a),
                    {
                        key: f,
                        state: b
                    } = (0, s.Y)();
                x[0] !== b ? (t = (0, c.a)(b), x[0] = b, x[1] = t) : t = x[1];
                let y = t;
                return x[2] !== g || x[3] !== f || x[4] !== v || x[5] !== y ? (a = () => {
                    if ("chatgpt-thread" !== v.value.routeKind) return;
                    let e = v.value.conversationId;
                    return v.watch(t => {
                        let a = t.get(p.j, g);
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
                }, h = [g, f, v, y], x[2] = g, x[3] = f, x[4] = v, x[5] = y, x[6] = a, x[7] = h) : (a = x[6], h = x[7]), (0, i.useEffect)(a, h), null
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
            g = a("VRzh"),
            v = a("DuVB");

        function f(e) {
            return (0, n.jsx)(b, {
                automation: e
            }, e.id)
        }
        let b = (0, i.memo)(function(e) {
            let t, a, i, s, c, m, x, g = (0, o.c)(19),
                {
                    automation: f
                } = e,
                b = (0, l.y)(h.a),
                y = (0, r.a)(),
                j = (0, l.x)(u.g, f.id);
            g[0] !== f || g[1] !== j || g[2] !== y ? (t = (0, v.a)(f, j, y), g[0] = f, g[1] = j, g[2] = y, g[3] = t) : t = g[3];
            let {
                scheduleLabel: w,
                title: k
            } = t;
            return g[4] !== f.id || g[5] !== b || g[6] !== k ? (a = () => {
                (0, d.openAutomationSidePanelTab)({
                    scope: b,
                    automationId: f.id,
                    title: k,
                    toggle: !0,
                    navigationSource: "conversation"
                })
            }, g[4] = f.id, g[5] = b, g[6] = k, g[7] = a) : a = g[7], g[8] !== k ? (i = (0, n.jsx)("span", {
                className: "truncate text-sm text-default",
                children: k
            }), g[8] = k, g[9] = i) : i = g[9], g[10] !== w ? (s = null == w || 0 === w.length ? null : (0, n.jsx)("span", {
                className: "truncate text-sm text-tertiary",
                children: w
            }), g[10] = w, g[11] = s) : s = g[11], g[12] !== i || g[13] !== s ? (c = (0, n.jsxs)("span", {
                className: "flex min-w-0 flex-col gap-0.5",
                children: [i, s]
            }), g[12] = i, g[13] = s, g[14] = c) : c = g[14], g[15] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, n.jsx)(p.a, {
                "aria-hidden": "true",
                className: "icon-sm shrink-0 text-tertiary"
            }), g[15] = m) : m = g[15], g[16] !== a || g[17] !== c ? (x = (0, n.jsx)("li", {
                className: "border-b border-subtle",
                "data-automation-card": !0,
                children: (0, n.jsxs)("button", {
                    type: "button",
                    className: "flex w-full min-w-0 cursor-interaction items-center justify-between gap-4 py-3 text-start hover:text-default",
                    onClick: a,
                    children: [c, m]
                })
            }), g[16] = a, g[17] = c, g[18] = x) : x = g[18], x
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
                return j[4] !== M.length || j[5] !== k ? (a = null != k && M.length > 0 ? (0, n.jsx)(g.a, {
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
            x = a("umSm"),
            g = a("FgmP");

        function v(e) {
            let t, a, c, d, g, v, b, y, j, w, k, C, N, S, M = (0, o.c)(43),
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
            M[14] !== D ? (g = (0, l.b)("min-w-0 truncate", D), M[14] = D, M[15] = g) : g = M[15], M[16] !== O || M[17] !== g || M[18] !== E ? (v = (0, n.jsx)(x.a, {
                active: O,
                className: g,
                children: E
            }), M[16] = O, M[17] = g, M[18] = E, M[19] = v) : v = M[19];
            let z = _ && "rotate-90 opacity-100";
            M[20] !== z ? (b = (0, l.b)("icon-2xs shrink-0 text-tertiary transition-[opacity,transform] duration-basic opacity-0 group-hover/automatic-approval-review:opacity-100", z), M[20] = z, M[21] = b) : b = M[21], M[22] !== b ? (y = (0, n.jsx)(p.a, {
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
            }, M[31] = q, M[32] = k) : k = M[32], M[33] !== P ? (C = (0, n.jsx)("p", {
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
                    asset: g.a,
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
                    defaultMessage: "Retry loading output",
                    description: "Action to retry fetching saved tool output"
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
                    defaultMessage: "Loading output…",
                    description: "Status while fetching saved tool output"
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
            g = a("whdX"),
            v = a("tSEg"),
            f = a("KU8M"),
            b = a("LF5P"),
            y = a("MdwM"),
            j = a("Hkqr"),
            w = a("acxW");
        a.d(t, {}, {
            a: function(e) {
                let t, a, o, c, u, d, m, h, x, g, v = (0, n.c)(50),
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
                v[21] !== U.isPending || v[22] !== j || v[23] !== E || v[24] !== R?._meta || v[25] !== k?.resourceUri || v[26] !== b.appContext?.resourceUri || v[27] !== b.mcpAppResourceUri ? (m = j.startsWith("chatgpt:") ? E : b.appContext?.resourceUri ?? E ?? (U.isPending ? k?.resourceUri : void 0) ?? (0, i.Lg)(R?._meta) ?? b.mcpAppResourceUri, v[21] = U.isPending, v[22] = j, v[23] = E, v[24] = R?._meta, v[25] = k?.resourceUri, v[26] = b.appContext?.resourceUri, v[27] = b.mcpAppResourceUri, v[28] = m) : m = v[28];
                let L = m,
                    P = null != L && U.isPending && b.appContext?.resourceUri == null && null == E && k?.resourceUri == null,
                    O = (0, l.x)(S && t ? f.b : null, _);
                I ? h = "error" : b.completed && null == b.result && null == R && (h = "cancelled");
                let D = L ?? k?.resourceUri ?? null,
                    z = t && null != b.appContext ? b.callId : null,
                    B = h;
                return v[29] !== U.data || v[30] !== b.appContext || v[31] !== b.invocation.server || v[32] !== b.invocation.tool || v[33] !== b.invocationResourceUri ? (x = (0, p.b)({
                    appContext: b.appContext,
                    invocationResourceUri: b.invocationResourceUri,
                    mcpServerStatuses: U.data,
                    server: b.invocation.server,
                    tool: b.invocation.tool
                }), v[29] = U.data, v[30] = b.appContext, v[31] = b.invocation.server, v[32] = b.invocation.tool, v[33] = b.invocationResourceUri, v[34] = x) : x = v[34], v[35] !== U || v[36] !== j || v[37] !== R || v[38] !== y || v[39] !== t || v[40] !== P || v[41] !== b || v[42] !== T || v[43] !== z || v[44] !== x || v[45] !== D || v[46] !== I || v[47] !== h || v[48] !== O ? (g = {
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
                    toolCallStatus: B,
                    toolDefinition: x
                }, v[35] = U, v[36] = j, v[37] = R, v[38] = y, v[39] = t, v[40] = P, v[41] = b, v[42] = T, v[43] = z, v[44] = x, v[45] = D, v[46] = I, v[47] = h, v[48] = O, v[49] = g) : g = v[49], g
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
                        originCallId: v
                    } = e,
                    f = x?.connectorId ?? null,
                    b = x?.kind === "target" ? x : null,
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
                let w = (0, g.f)(a),
                    k = h ? void 0 : w.data;
                s[10] !== k ? (o = (0, d.c)(k), s[10] = k, s[11] = o) : o = s[11];
                let C = o,
                    {
                        error: N,
                        isPending: S,
                        isFetching: M
                    } = h || e.isCodexAppsToolCall && null == x ? p : w;
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
                let t, a, i, s, d, p, g, f, w, k, C, N, S, M = (0, n.c)(50),
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
                M[24] !== D || M[25] !== I.pluginId ? (g = D?.find(e => {
                    let {
                        plugin: t
                    } = e;
                    return t.id === I.pluginId || null != t.remotePluginId && t.remotePluginId === I.pluginId
                }), M[24] = D, M[25] = I.pluginId, M[26] = g) : g = M[26];
                let z = g,
                    B = O && null != D && null != I.pluginId && null == z;
                M[27] !== T || M[28] !== I.pluginId || M[29] !== E.query || M[30] !== B ? (f = E.query.getOptions(m.l, (0, m.a)({
                    hostId: T,
                    pluginId: B ? I.pluginId ?? null : null
                })), M[27] = T, M[28] = I.pluginId, M[29] = E.query, M[30] = B, M[31] = f) : f = M[31];
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
                M[36] !== V ? (k = null == V ? null : (0, x.b)(V), M[36] = V, M[37] = k) : k = M[37];
                let J = k,
                    F = z ?? J,
                    K = J?.plugin.id ?? z?.plugin.id ?? I.pluginId;
                return M[38] !== D || M[39] !== J || M[40] !== B ? (C = B && null != J ? [J] : D ?? [], M[38] = D, M[39] = J, M[40] = B, M[41] = C) : C = M[41], M[42] !== I.invocation.server || M[43] !== K || M[44] !== C ? (N = (0, y.a)({
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
                let t = (0, i.cf)(e),
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
                } = e, o = !(0, r.b)(t.invocation) && !(0, u.b)(t.invocation, a) && !0 !== t.isMcpAppWidgetSuperseded && (n?.sourceId == null || n.sourceId === (0, i.cf)(t.callId));
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
            x = a("oyxz"),
            g = a("mnR8"),
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
            z = a("IN8o"),
            B = a("HwRo"),
            W = a("C3P5"),
            q = a("aENG"),
            H = a("Cv9y"),
            V = a("EAcR"),
            J = a("NJrC"),
            F = a("EDsV"),
            K = a("geS6"),
            G = a("qwxA"),
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
            eg = a("MAIj"),
            ev = a("mRLe"),
            ef = a("fXpx"),
            eb = a("LkKu"),
            ey = a("z0Na"),
            ej = a("o62A"),
            ew = a("o1Ns"),
            ek = a("alO6"),
            eC = a("umSm"),
            eN = a("gFsV"),
            eS = a("SCbd"),
            eM = a("vWxq"),
            eI = a("LhYn");

        function eT(e) {
            return "text" !== e.type
        }

        function eR(e) {
            let t, a, l, i, s, r, c, u, d, m, h = (0, o.c)(35),
                {
                    call: g,
                    fallbackPageUrl: v,
                    loadRemoteLogos: f
                } = e,
                b = null == g.sourceHostname ? v : `https://${g.sourceHostname}`,
                y = "invokeTool" === g.kind ? g.inputJson : void 0,
                j = "invokeTool" === g.kind && !0 === g.inputTruncated;
            h[0] !== f || h[1] !== b ? (t = null == b ? (0, n.jsx)(_.a, {
                className: "shrink-0 text-text/60",
                asset: eI.a
            }) : (0, n.jsx)(A.a, {
                className: "icon-xs shrink-0 text-text/60",
                href: b,
                loadRemote: f
            }), h[0] = f, h[1] = b, h[2] = t) : t = h[2], h[3] !== g.name || h[4] !== g.title ? (a = g.title ?? (0, p.a)(g.name, {
                style: "sentence"
            }), h[3] = g.name, h[4] = g.title, h[5] = a) : a = h[5], h[6] !== g.kind || h[7] !== a ? (l = (0, n.jsx)(x.a, {
                id: "codex.mcpTool.webMcpActivity.completed",
                defaultMessage: "{kind, select, listTools {Listed website tools} other {{toolName}}}",
                description: "Human-readable activity label for a website-provided WebMCP tool invocation",
                values: {
                    kind: g.kind,
                    toolName: a
                }
            }), h[6] = g.kind, h[7] = a, h[8] = l) : l = h[8], h[9] !== y || h[10] !== j ? (i = null == y || j ? y : function(e) {
                try {
                    return JSON.parse(e)
                } catch {
                    return e
                }
            }(y), h[9] = y, h[10] = j, h[11] = i) : i = h[11];
            let w = !!j || void 0;
            h[12] !== g.description || h[13] !== g.name || h[14] !== g.readOnlyHint || h[15] !== g.sourceHostname || h[16] !== g.title || h[17] !== i || h[18] !== w ? (s = eA({
                name: g.name,
                title: g.title,
                description: g.description,
                website: g.sourceHostname,
                readOnlyHint: g.readOnlyHint,
                input: i,
                inputTruncated: w
            }, 2), h[12] = g.description, h[13] = g.name, h[14] = g.readOnlyHint, h[15] = g.sourceHostname, h[16] = g.title, h[17] = i, h[18] = w, h[19] = s) : s = h[19];
            let k = j ? "true" : "false";
            return h[20] !== k ? (r = (0, n.jsx)(x.a, {
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
            }), h[22] = s, h[23] = r, h[24] = c) : c = h[24], h[25] !== g.outputJson || h[26] !== g.outputTruncated ? (u = null == g.outputJson ? null : (0, n.jsx)(M.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: g.outputTruncated ? g.outputJson : function(e) {
                    try {
                        return eA(JSON.parse(e), 2)
                    } catch {
                        return e
                    }
                }(g.outputJson),
                language: "json",
                showStickyRightContent: !1,
                title: (0, n.jsx)(x.a, {
                    id: "codex.localConversation.webMcpTools.resultLabel",
                    defaultMessage: "{truncated, select, true {Result (truncated)} other {Result}}",
                    description: "Title for a website-provided WebMCP tool result",
                    values: {
                        truncated: g.outputTruncated ? "true" : "false"
                    }
                })
            }), h[25] = g.outputJson, h[26] = g.outputTruncated, h[27] = u) : u = h[27], h[28] !== u || h[29] !== c ? (d = (0, n.jsxs)("div", {
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
                        defaultMessage: "Image returned by tool",
                        description: "Accessible description for an image included in an MCP tool result"
                    }), t[3] = c, t[4] = o) : o = t[4];
                    let g = o;
                    t[5] !== l || t[6] !== s || t[7] !== g || t[8] !== x || t[9] !== c || t[10] !== r ? (i = () => (0, P.getGeneratedImageContextMenuItems)(r, {
                        chatGptConversationId: l.startsWith("chatgpt:") ? (0, w.d)(l.slice(8)) : void 0,
                        displaySrc: x,
                        hostId: s,
                        image: {
                            kind: "generic",
                            src: x,
                            alt: g
                        },
                        intl: c
                    }), t[5] = l, t[6] = s, t[7] = g, t[8] = x, t[9] = c, t[10] = r, t[11] = i) : i = t[11], t[12] !== g || t[13] !== x ? (u = (0, n.jsx)("img", {
                        className: "max-h-48 w-max max-w-full gap-0.5 rounded-md object-contain",
                        alt: g,
                        src: x
                    }), t[12] = g, t[13] = x, t[14] = u) : u = t[14], t[15] !== i || t[16] !== u ? (d = (0, n.jsx)(I.a, {
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
                    t[44] !== a.resource.annotations ? (e = eL(a.resource.annotations), t[44] = a.resource.annotations, t[45] = e) : e = t[45];
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
                [h, g] = (0, m.useState)(null);
            r[3] !== p ? (a = () => g(p), r[3] = p, r[4] = a) : a = r[4];
            let v = a;
            if (!d) return null;
            if (h?.data === c && h.mimeType === u) {
                let e;
                return r[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(x.a, {
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

        function eE(e, t) {
            let a = eL(e);
            return null == a ? null : t.formatMessage({
                id: "codex.mcpTool.contentBlock.annotationsLine",
                defaultMessage: "Annotations: {annotations}",
                description: "Line showing MCP content block annotations in text output"
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
                let t, a, s, r, w, I, P, $, et, ea, es, eU, eE, eL, eP, eO, eD, ez, eB, eW, eq, eH, eV, eJ, eF, eK, eG, eQ, eX, eZ, e$, eY, e1, e0, e2, e3, e4, e5, e6, e8, e7, e9, te, tt, ta = (0, o.c)(230),
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
                        toolActivityTurnKey: tg
                    } = e,
                    tv = void 0 !== tl && tl,
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
                let tS = s;
                ta[7] !== tc || ta[8] !== ts || ta[9] !== tS ? (r = {
                    item: tS,
                    hostId: ts,
                    appInfoOverride: tc
                }, ta[7] = tc, ta[8] = ts, ta[9] = tS, ta[10] = r) : r = ta[10];
                let {
                    matchingApp: tM,
                    pluginIcon: tI
                } = (0, ey.c)(r), tT = (0, h.a)(), {
                    platform: tR
                } = (0, E.a)();
                ta[11] !== tS.callId ? (w = (0, d.cf)(tS.callId), ta[11] = tS.callId, ta[12] = w) : w = ta[12];
                let tA = w,
                    t_ = (0, u.x)(Q.t, tA),
                    tU = (0, u.x)(Q.h, tA),
                    tE = (0, u.x)(Q.o, tA),
                    tL = tU?.content.toolCallStatus == null && tU?.content.toolResult != null;
                ta[13] !== ts || ta[14] !== tS || ta[15] !== t_ || ta[16] !== tL ? (I = (0, ew.a)({
                    item: tS,
                    hostId: ts,
                    retainedState: {
                        sourceId: t_,
                        hasSuccessfulToolResult: tL
                    }
                }), ta[13] = ts, ta[14] = tS, ta[15] = t_, ta[16] = tL, ta[17] = I) : I = ta[17];
                let tP = I;
                ta[18] !== tP || ta[19] !== ty ? (P = ty && (0, B.c)() && tP.isEligible, ta[18] = tP, ta[19] = ty, ta[20] = P) : P = ta[20];
                let tO = P;
                ta[21] !== to || ta[22] !== tS.callId ? ($ = (0, W.a)({
                    callId: tS.callId,
                    conversationId: to
                }), ta[21] = to, ta[22] = tS.callId, ta[23] = $) : $ = ta[23];
                let tD = $,
                    tz = (0, u.x)(W.b, tD);
                (0, ee.f)("2957382457");
                let tB = (0, u.z)(b.a);
                ta[24] !== to || ta[25] !== tO ? (et = tO || !to.startsWith("chatgpt:"), ta[24] = to, ta[25] = tO, ta[26] = et) : et = ta[26], ta[27] !== to || ta[28] !== ts || ta[29] !== tS || ta[30] !== tE || ta[31] !== tO || ta[32] !== et ? (ea = {
                    item: tS,
                    hostId: ts,
                    conversationId: to,
                    fallback: tE,
                    enabled: tO,
                    catalogEnabled: et
                }, ta[27] = to, ta[28] = ts, ta[29] = tS, ta[30] = tE, ta[31] = tO, ta[32] = et, ta[33] = ea) : ea = ta[33];
                let tW = (0, ey.a)(ea),
                    {
                        isCodexAppsToolCall: tq,
                        successfulToolResult: tH,
                        resourceUri: tV,
                        toolDefinition: tJ
                    } = tW,
                    {
                        elementHeightPx: tF,
                        elementRef: tK
                    } = (0, em.a)(),
                    tG = tS.result?.type === "success" ? tS.result.content : null,
                    tQ = tS.result?.type === "error" ? tS.result.error : null;
                ta[34] !== tS || ta[35] !== tR ? (es = (0, ed.d)({
                    item: tS,
                    platform: tR
                }), ta[34] = tS, ta[35] = tR, ta[36] = es) : es = ta[36];
                let tX = es,
                    tZ = tX?.nativeAppReference ?? null,
                    t$ = (0, eg.b)(tZ),
                    tY = t$?.appPath ?? null;
                ta[37] !== tY ? (eU = {
                    appPath: tY
                }, ta[37] = tY, ta[38] = eU) : eU = ta[38];
                let {
                    iconSmall: t1
                } = (0, k.a)(eU);
                ta[39] !== tS || ta[40] !== tM || ta[41] !== tx ? (eE = void 0 === tx ? (0, ex.d)(tS, null == tM ? [] : [tM])?.icon : tx, ta[39] = tS, ta[40] = tM, ta[41] = tx, ta[42] = eE) : eE = ta[42];
                let t0 = eE;
                if (void 0 === tx && null != t0) {
                    let e, t;
                    ta[43] !== tM ? (e = null == tM ? [] : [tM], ta[43] = tM, ta[44] = e) : e = ta[44], ta[45] !== t0 || ta[46] !== tS || ta[47] !== tb || ta[48] !== e ? (t = (0, n.jsx)(Z.a, {
                        item: tS,
                        apps: e,
                        part: "icon",
                        loadMetadata: tb,
                        children: t0
                    }), ta[45] = t0, ta[46] = tS, ta[47] = tb, ta[48] = e, ta[49] = t) : t = ta[49], t0 = t
                }
                ta[50] !== tS.source?.kind || ta[51] !== tH ? (eL = tS.source?.kind === "browserUse" && null != tH ? (0, f.a)(tH._meta) : null, ta[50] = tS.source?.kind, ta[51] = tH, ta[52] = eL) : eL = ta[52];
                let t2 = eL,
                    t3 = tB && !tv && tS.completed && (0, d.ti)(tS.invocation.server) && "js" === tS.invocation.tool && null != tH ? (0, eh.a)(tH._meta) : [],
                    t4 = tM ?? null;
                ta[53] !== tT || ta[54] !== tS.appContext || ta[55] !== tS.completed || ta[56] !== tS.invocation.arguments || ta[57] !== tS.invocation.server || ta[58] !== tS.invocation.tool || ta[59] !== tS.pluginId || ta[60] !== tS.result || ta[61] !== tS.source || ta[62] !== tS.toolDisplay || ta[63] !== t$ || ta[64] !== tR || ta[65] !== t4 || ta[66] !== tJ ? (eP = (0, ek.b)({
                    pluginId: tS.pluginId,
                    toolDisplay: tS.toolDisplay,
                    toolDefinition: tJ,
                    appContext: tS.appContext,
                    completed: tS.completed,
                    intl: tT,
                    toolName: tS.invocation.tool,
                    serverName: tS.invocation.server,
                    matchingApp: t4,
                    nativeDesktopAppMetadata: t$,
                    platform: tR,
                    source: tS.source,
                    toolArguments: tS.invocation.arguments,
                    toolResult: tS.result
                }), ta[53] = tT, ta[54] = tS.appContext, ta[55] = tS.completed, ta[56] = tS.invocation.arguments, ta[57] = tS.invocation.server, ta[58] = tS.invocation.tool, ta[59] = tS.pluginId, ta[60] = tS.result, ta[61] = tS.source, ta[62] = tS.toolDisplay, ta[63] = t$, ta[64] = tR, ta[65] = t4, ta[66] = tJ, ta[67] = eP) : eP = ta[67];
                let {
                    label: t5,
                    readsPlainText: t6
                } = eP, t8 = tO && null != tV && tP.isRenderable, {
                    resource: t7,
                    renderData: t9,
                    state: ae,
                    refetch: at
                } = (0, ey.b)(tW, t8), aa = tU?.sessionId == null ? null : tU.content.resource, an = null == aa ? t7?.resourceIdentityVerified : tU?.content.mcpAppScope.resourceIdentityVerified, ao = null == aa ? ae.error : null, al = t8 && null == aa && ae.isLoading, ai = (0, u.x)(Q.q, tA), as = (0, u.x)(Q.m, tA), ar = (0, J.a)({
                    hasResourceError: null != ao,
                    isResourceLoading: al,
                    isDilEnabled: !1,
                    renderData: aa ?? t9,
                    resourceUri: tV ?? null,
                    shouldRenderMcpApp: t8
                }), ac = "html" === ar.kind ? ar.renderData : null, au = (0, F.e)({
                    data: ac,
                    error: ao,
                    isLoading: al
                }, Q.F), ad = "fallback" !== ar.kind, ap = tO && null != tV && (!ad || null != ao || null != ai && !(ai instanceof F.b) || "too-large" === au.kind || "error" === au.kind), am = ap || (ac?.isCollapsible ?? !0), ah = as;
                ap ? ah = "fallback" : "html" !== ar.kind && (ah = ar.kind);
                let ax = "pending" === ah,
                    ag = "launcher" === ah,
                    av = ax || ag;
                ta[68] !== tU ? (eO = null != tU && tU.content.resource?.hideAttribution === !0 && (!0 === tU.content.mcpAppScope.isVerifiedFirstParty || (0, ej.b)(tU.content)), ta[68] = tU, ta[69] = eO) : eO = ta[69];
                let af = eO,
                    ab = "inline" === ah,
                    ay = void 0 !== tm && tm && t8,
                    aj = !ap && tk || ay,
                    aw = ad && !ag && (!am || (tz ?? aj)),
                    ak = aw && !ax,
                    aC = ab && ak,
                    aN = tk || (tz ?? ay),
                    [aS, aM] = (0, m.useState)(!1),
                    aI = aC && aS,
                    aT = al || ax && aw;
                ta[70] !== aw || ta[71] !== aI || ta[72] !== aT ? (eD = {
                    isLoading: aT,
                    isInlineRequested: aw,
                    isInlineOpening: aI
                }, ta[70] = aw, ta[71] = aI, ta[72] = aT, ta[73] = eD) : eD = ta[73];
                let aR = (0, D.d)(tA, eD),
                    aA = !ap && (ax || "html" === ar.kind) ? aR : null;
                ta[74] !== tJ ? (ez = (0, K.b)(tJ)?.resourceUri, ta[74] = tJ, ta[75] = ez) : ez = ta[75];
                let a_ = ez,
                    aU = tH?._meta;
                ta[76] !== aU ? (eB = c()(aU, ["_codex_apps", "resource_uri"]), ta[76] = aU, ta[77] = eB) : eB = ta[77];
                let aE = eB;
                ta[78] !== a_ || ta[79] !== tq || ta[80] !== tV || ta[81] !== aE || ta[82] !== tJ?._meta ? (eW = tq && null != a_ && aE === a_ && (0, d.Lg)(tJ?._meta) === tV, ta[78] = a_, ta[79] = tq, ta[80] = tV, ta[81] = aE, ta[82] = tJ?._meta, ta[83] = eW) : eW = ta[83];
                let aL = !(eW && !0 === an && (0, D.b)({
                    isInline: !am && ("inline" === ah || ax),
                    status: aA,
                    hidesAttributionAndActions: ac?.hideAttribution === !0 && !0 === ac.hideActions
                })) && (av || !tv && (am || "html" === ar.kind && !af));
                ta[84] !== tq || ta[85] !== tS.appContext?.appName || ta[86] !== tS.invocation.server || ta[87] !== tM?.name || ta[88] !== tI?.alt ? (eq = tM?.name ?? tS.appContext?.appName ?? tI?.alt ?? (tq ? null : (0, p.a)(tS.invocation.server)), ta[84] = tq, ta[85] = tS.appContext?.appName, ta[86] = tS.invocation.server, ta[87] = tM?.name, ta[88] = tI?.alt, ta[89] = eq) : eq = ta[89];
                let aP = eq;
                ta[90] !== aP || ta[91] !== tJ ? (eH = (0, D.a)((0, g.a)(tJ), aP), ta[90] = aP, ta[91] = tJ, ta[92] = eH) : eH = ta[92];
                let aO = eH,
                    aD = ap ? tv || tk : !av && (tv || (ad ? ak : aN));
                e: {
                    let e, t, a, n;
                    if (!aD) {
                        let e;
                        ta[93] !== tG ? (e = {
                            displayContent: tG,
                            displayStructuredContentJson: null
                        }, ta[93] = tG, ta[94] = e) : e = ta[94], eV = e;
                        break e
                    }
                    ta[95] !== tS.result ? (e = tS.result?.type === "success" && null != tS.result.structuredContent ? eA(tS.result.structuredContent, 2) : null, ta[95] = tS.result, ta[96] = e) : e = ta[96];
                    let o = e;ta[97] !== tG || ta[98] !== tf || ta[99] !== o ? (t = tf && null != o && null != tG ? tG.filter(eT) : tG, ta[97] = tG, ta[98] = tf, ta[99] = o, ta[100] = t) : t = ta[100];
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
                        }, ta[103] = o, ta[104] = l, ta[105] = e) : e = ta[105], eV = e;
                        break e
                    }
                    if (null == o || i === o) {
                        let e, t;
                        ta[106] === Symbol.for("react.memo_cache_sentinel") ? (e = [], ta[106] = e) : e = ta[106];
                        let a = o ?? i;
                        ta[107] !== a ? (t = {
                            displayContent: e,
                            displayStructuredContentJson: a
                        }, ta[107] = a, ta[108] = t) : t = ta[108], eV = t;
                        break e
                    }
                    ta[109] !== o || ta[110] !== l ? (n = {
                        displayContent: l,
                        displayStructuredContentJson: o
                    }, ta[109] = o, ta[110] = l, ta[111] = n) : n = ta[111],
                    eV = n
                }
                let {
                    displayContent: az,
                    displayStructuredContentJson: aB
                } = eV, [aW, aq] = (0, m.useState)(!1);
                t: {
                    let e;
                    if (!aW) {
                        eJ = null;
                        break t
                    }
                    ta[112] !== tS.callId || ta[113] !== tS.durationMs || ta[114] !== tS.invocation || ta[115] !== tS.result ? (e = eA({
                        callId: tS.callId,
                        invocation: tS.invocation,
                        durationMs: tS.durationMs,
                        result: tS.result
                    }, 2), ta[112] = tS.callId, ta[113] = tS.durationMs, ta[114] = tS.invocation, ta[115] = tS.result, ta[116] = e) : e = ta[116],
                    eJ = e
                }
                let aH = eJ;
                ta[117] !== tT ? (eF = tT.formatMessage({
                    id: "codex.mcpTool.rawOutputTriggerTooltip",
                    defaultMessage: "Show raw tool call output",
                    description: "Tooltip for the button that opens the raw MCP tool output dialog"
                }), ta[117] = tT, ta[118] = eF) : eF = ta[118];
                let aV = eF,
                    aJ = tS.completed || null != tS.result || ad;
                ta[119] !== tS ? (eK = (0, eu.a)(tS), ta[119] = tS, ta[120] = eK) : eK = ta[120];
                let aF = eK,
                    aK = !tv && !aF && !t8 && !ap,
                    aG = !tS.completed;
                ta[121] !== tM ? (eG = null == tM ? [] : [tM], ta[121] = tM, ta[122] = eG) : eG = ta[122], ta[123] !== tS || ta[124] !== tb || ta[125] !== eG || ta[126] !== t5 ? (eQ = (0, n.jsx)(Z.a, {
                    item: tS,
                    apps: eG,
                    part: "label",
                    loadMetadata: tb,
                    children: t5
                }), ta[123] = tS, ta[124] = tb, ta[125] = eG, ta[126] = t5, ta[127] = eQ) : eQ = ta[127], ta[128] !== aG || ta[129] !== eQ ? (eX = (0, n.jsx)(eC.a, {
                    active: aG,
                    className: "min-w-0 shrink truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                    children: eQ
                }), ta[128] = aG, ta[129] = eQ, ta[130] = eX) : eX = ta[130];
                let aQ = eX;
                ta[131] !== t0 || ta[132] !== t2 || ta[133] !== ts || ta[134] !== tS || ta[135] !== tb || ta[136] !== tM || ta[137] !== t1 || ta[138] !== t$?.displayName || ta[139] !== tZ || ta[140] !== tX || ta[141] !== tI ? (eZ = void 0 !== t0 ? t0 : (0, n.jsx)(ec.a, {
                    hostId: ts,
                    item: tS,
                    loadRemoteLogos: tb,
                    fallback: null == tI && null != tZ ? (0, n.jsx)(C.a, {
                        alt: t$?.displayName ?? tX?.name ?? tS.invocation.server,
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
                            asset: eS.a
                        })
                    }) : null == tI && tX?.usesBrowserIcon === !0 ? null == t2 ? (0, n.jsx)(_.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: eI.a
                    }) : (0, n.jsx)(A.a, {
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        href: t2,
                        loadRemote: tb
                    }) : null == tI && (0, d.ti)(tS.invocation.server) ? (0, n.jsx)(_.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: eM.a
                    }) : (0, n.jsx)(C.a, {
                        alt: tI?.alt ?? tM?.name ?? tS.appContext?.appName ?? tS.invocation.server,
                        appInfo: null == tI ? tM : null,
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        loadRemote: tb,
                        knownAppId: tI?.knownAppId ?? tS.appContext?.appName ?? tS.appContext?.connectorId,
                        logoUrl: tI?.logoUrl,
                        fallback: (0, n.jsx)(_.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: eS.a
                        })
                    })
                }), ta[131] = t0, ta[132] = t2, ta[133] = ts, ta[134] = tS, ta[135] = tb, ta[136] = tM, ta[137] = t1, ta[138] = t$?.displayName, ta[139] = tZ, ta[140] = tX, ta[141] = tI, ta[142] = eZ) : eZ = ta[142];
                let aX = eZ;
                ta[143] !== tj || ta[144] !== aX || ta[145] !== aQ ? (e$ = tj ?? (0, n.jsxs)(n.Fragment, {
                    children: [aX, aQ]
                }), ta[143] = tj, ta[144] = aX, ta[145] = aQ, ta[146] = e$) : e$ = ta[146];
                let aZ = e$;
                ta[147] !== aN || ta[148] !== aw || ta[149] !== tk || ta[150] !== tD || ta[151] !== tu || ta[152] !== tw || ta[153] !== ay || ta[154] !== ap || ta[155] !== ad || ta[156] !== ab || ta[157] !== tg || ta[158] !== tz ? (eY = () => {
                    if (ap) {
                        tk || tu?.(), tC(!tk);
                        return
                    }
                    let e = ad ? !aw : !aN;
                    if (e && tu?.(), ad) {
                        aM(e && ab), tw.set(W.b, tD, e);
                        return
                    }
                    e && null != tg && (0, ep.b)(tw, tg), !e && (!0 === tz || ay) && tw.set(W.b, tD, !1), tC(e)
                }, ta[147] = aN, ta[148] = aw, ta[149] = tk, ta[150] = tD, ta[151] = tu, ta[152] = tw, ta[153] = ay, ta[154] = ap, ta[155] = ad, ta[156] = ab, ta[157] = tg, ta[158] = tz, ta[159] = eY) : eY = ta[159];
                let a$ = eY;
                ta[160] !== tS.automaticApprovalReviews ? (e1 = null == tS.automaticApprovalReviews ? null : (0, n.jsx)(er.a, {}), ta[160] = tS.automaticApprovalReviews, ta[161] = e1) : e1 = ta[161];
                let aY = e1,
                    a1 = aC && (ac?.prefersBorder ?? tU?.content.resource?.prefersBorder ?? !0),
                    a0 = aJ && "opening" !== aA && !ag && am ? {
                        alignEnd: a1,
                        expanded: aD,
                        onToggle: a$
                    } : void 0,
                    a2 = (0, i.b)("group", a1 && "overflow-hidden rounded-lg border border-strong bg-surface"),
                    a3 = (0, i.b)((ag || aC) && "w-full", a1 && "px-4 py-2.5");
                ta[162] !== at ? (e0 = () => {
                    at({
                        cancelRefetch: !1
                    })
                }, ta[162] = at, ta[163] = e0) : e0 = ta[163];
                let a4 = (0, n.jsx)(V.a, {
                    hostDisplayModes: Q.F,
                    resource: {
                        data: null == tV ? null : ac,
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
                ta[164] !== ts || ta[165] !== tS ? (e2 = (0, eb.b)(tS, ts), ta[164] = ts, ta[165] = tS, ta[166] = e2) : e2 = ta[166];
                let a5 = e2,
                    a6 = av && aw,
                    a8 = () => (0, n.jsxs)(eo.a, {
                        ref: aK ? void 0 : tK,
                        className: (0, i.b)(t8 && "relative", !am && "py-1"),
                        variant: am && !a1 && (aL || !ab) ? "grouped" : "flush",
                        children: [null == tS.automaticApprovalReviews ? null : (0, n.jsx)(er.d, {
                            className: a1 ? "px-4" : void 0,
                            isExpandable: !ab,
                            reviews: tS.automaticApprovalReviews
                        }), null != a5 ? (0, n.jsx)(ef.a, {
                            ...a5
                        }) : (0, n.jsxs)(n.Fragment, {
                            children: [ad ? aI ? (0, n.jsx)(H.a, {
                                className: "w-full",
                                height: (0, q.a)(null, ac?.heightHint ?? null, ac?.minFrameHeight ?? null),
                                showLoadingStatus: !1
                            }) : a4 : az && az.length > 0 ? (0, n.jsx)("div", {
                                className: (0, i.b)("[&_*]:text-text/50", "flex flex-col gap-0.5"),
                                children: az.map((e, t) => (0, n.jsx)(e_, {
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
                            }) : aB ? null : (0, n.jsx)("p", {
                                className: "text-codex-description/80",
                                children: (0, n.jsx)(x.a, {
                                    id: "codex.mcpTool.noResult",
                                    defaultMessage: "Tool returned no content",
                                    description: "Message shown when an MCP tool call produced no content"
                                })
                            }), !al && !aI && !ad && aB && (0, n.jsx)(M.CodeSnippet, {
                                codeContainerClassName: "max-h-48 overflow-auto",
                                language: "json",
                                content: aB,
                                showStickyRightContent: !1
                            }), !al && !aI && (0, n.jsx)(T.a, {
                                open: aW,
                                onOpenChange: aq,
                                triggerContent: (0, n.jsx)("div", {
                                    className: (0, i.b)("inline-flex w-fit", t8 && "absolute right-1 bottom-2 z-50"),
                                    children: (0, n.jsx)(l.a, {
                                        side: "top",
                                        align: "center",
                                        content: aV,
                                        children: (0, n.jsx)(S.a, {
                                            className: "cursor-interaction opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 focus-visible:opacity-100",
                                            "aria-label": aV,
                                            color: "ghost",
                                            onClick: () => {
                                                aq(!0)
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
                                                children: (0, n.jsx)(x.a, {
                                                    id: "codex.mcpTool.rawOutputHeading",
                                                    defaultMessage: "Raw {server}.{tool} tool call output",
                                                    description: "Heading shown within the raw output dialog",
                                                    values: {
                                                        server: tS.invocation.server,
                                                        tool: tS.invocation.tool
                                                    }
                                                })
                                            })
                                        })
                                    }), (0, n.jsx)(R.e, {
                                        children: null == aH ? null : (0, n.jsx)(M.CodeSnippet, {
                                            codeContainerClassName: "max-h-128 overflow-auto",
                                            language: "json",
                                            content: aH,
                                            showStickyRightContent: !0
                                        })
                                    })]
                                })
                            })]
                        })]
                    }),
                    a7 = aK ? null : (0, n.jsxs)(n.Fragment, {
                        children: [aF ? (0, n.jsx)(eo.a, {
                            variant: "grouped",
                            children: (0, n.jsx)(U.a, {
                                className: "w-full",
                                fullWidth: !0,
                                level: "warning",
                                actions: null == td ? void 0 : (0, n.jsx)(S.a, {
                                    color: "secondary",
                                    onClick: td,
                                    children: (0, n.jsx)(x.a, {
                                        id: "codex.mcpTool.reviewPermissions",
                                        defaultMessage: "Review permissions",
                                        description: "Opens the existing permissions menu for the chat whose tool call could not request approval"
                                    })
                                }),
                                children: null == td ? (0, n.jsx)(x.a, {
                                    id: "codex.mcpTool.approvalRequestsDisabled",
                                    defaultMessage: "Approval requests were disabled for this tool call. If available, review this chat’s permissions before retrying.",
                                    description: "Explanation on a failed MCP tool call that needed approval but could not request it. Suggests the existing permissions control for this chat, which may be unavailable in read-only views or restricted by policy. Does not promise that restrictions can be overridden."
                                }) : (0, n.jsx)(x.a, {
                                    id: "codex.mcpTool.approvalRequestsDisabled.recovery",
                                    defaultMessage: "Approval requests were disabled for this tool call. Choose “Ask for approval” in this chat’s permissions if available, then ask to retry.",
                                    description: "Explains that the tool call was blocked before approval could be requested. The adjacent action opens this chat's permissions menu; the user must select an allowed mode and ask to retry. Managed policy may limit the available modes."
                                })
                            })
                        }) : null, av ? a4 : (0, n.jsx)(N.a, {
                            expanded: aD,
                            height: tF,
                            onExpandComplete: ak ? () => aM(!1) : void 0,
                            children: aD ? a8() : null
                        })]
                    });
                ta[167] !== a0 || ta[168] !== aK || ta[169] !== a7 || ta[170] !== a8 ? (e3 = aK ? {
                    disclosure: a0 && {
                        ...a0,
                        details: a8
                    }
                } : {
                    externalDisclosure: a0,
                    body: a7
                }, ta[167] = a0, ta[168] = aK, ta[169] = a7, ta[170] = a8, ta[171] = e3) : e3 = ta[171];
                let a9 = e3;
                ta[172] !== aY || ta[173] !== a0 || ta[174] !== a3 || ta[175] !== al || ta[176] !== a7 || ta[177] !== tA || ta[178] !== a9 || ta[179] !== aZ || ta[180] !== aX || ta[181] !== aO || ta[182] !== aA ? (e4 = null != aA ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(z.a, {
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
                ta[184] !== tS ? (e5 = (0, v.a)(tS), ta[184] = tS, ta[185] = e5) : e5 = ta[185];
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
                ta[190] !== ts || ta[191] !== tS ? (e6 = (0, X.b)(tS, ts), ta[190] = ts, ta[191] = tS, ta[192] = e6) : e6 = ta[192];
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
                }) : null, ta[197] = a6, ta[198] = a5, ta[199] = t6, ta[200] = tj, ta[201] = e8) : e8 = ta[201], ta[202] !== aw || ta[203] !== tA || ta[204] !== ty || ta[205] !== tw || ta[206] !== t8 ? (e7 = ty || "chatgpt-thread" !== tw.value.routeKind ? (0, n.jsx)(G.b, {
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
                }), ta[208] = aY, ta[209] = a2, ta[210] = aL, ta[211] = a3, ta[212] = a7, ta[213] = a9, ta[214] = ab, ta[215] = tj, ta[216] = tx, ta[217] = aQ, ta[218] = ne, ta[219] = aA, ta[220] = e9) : e9 = ta[220], ta[221] !== t2 || ta[222] !== tS.callId || ta[223] !== tb ? (te = (e, t) => (0, n.jsxs)(m.Fragment, {
                    children: [(0, n.jsx)(ev.a, {
                        variant: "grouped"
                    }), (0, n.jsx)(eR, {
                        call: e,
                        fallbackPageUrl: t2,
                        loadRemoteLogos: tb
                    })]
                }, `${tS.callId}:webmcp:${t}:${e.name}`), ta[221] = t2, ta[222] = tS.callId, ta[223] = tb, ta[224] = te) : te = ta[224];
                let nn = t3.map(te);
                return ta[225] !== e8 || ta[226] !== e7 || ta[227] !== e9 || ta[228] !== nn ? (tt = (0, n.jsxs)(n.Fragment, {
                    children: [e8, e7, e9, nn]
                }), ta[225] = e8, ta[226] = e7, ta[227] = e9, ta[228] = nn, ta[229] = tt) : tt = ta[229], tt
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
                return void 0 === m || (0, o.Lg)(m?._meta) === c.appContext.resourceUri && null != (0, i.c)(m, c.appContext) ? p : u(r.r, d)
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
            x = a("zIrx");
        a.d(t, {}, {
            a: function(e) {
                let t, a, g = (0, o.c)(9),
                    {
                        fallback: v,
                        hostId: f,
                        item: b,
                        loadRemoteLogos: y
                    } = e,
                    j = b.appContext?.connectorId === u.b || (0, c.f)(b),
                    w = (0, l.x)(!y || j || null != (0, h.d)({
                        item: b
                    }) || (0, i.ti)(b.invocation.server) || (0, r.f)(b.invocation.server) ? null : s.a, {
                        hostId: f,
                        serverName: b.invocation.server,
                        threadId: (0, i.Ve)(b.threadId)
                    })?.serverInfo;
                if (j) {
                    let e;
                    return g[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(p.a, {
                        className: "shrink-0 text-tertiary",
                        asset: x.a
                    }), g[0] = e) : e = g[0], e
                }
                g[1] !== w ? (t = (0, m.a)(w), g[1] = w, g[2] = t) : t = g[2];
                let k = t;
                return g[3] !== v || g[4] !== k || g[5] !== b.invocation.server || g[6] !== w?.name || g[7] !== w?.title ? (a = null == k ? v : (0, n.jsx)(d.a, {
                    alt: w?.title ?? w?.name ?? b.invocation.server,
                    className: "icon-xs shrink-0 object-contain",
                    logoUrl: k.logoUrl,
                    logoDarkUrl: k.logoDarkUrl,
                    fallback: v
                }), g[3] = v, g[4] = k, g[5] = b.invocation.server, g[6] = w?.name, g[7] = w?.title, g[8] = a) : a = g[8], a
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
            g = a("TL6G"),
            v = a("tSEg");

        function f(e) {
            return "string" == typeof e
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, l, b, y, j, w, k, C, N, S, M, I, T, R, A, _, U, E = (0, o.c)(129),
                    {
                        elicitation: L,
                        result: P,
                        id: O,
                        kind: D,
                        mode: z,
                        name: B,
                        prompt: W,
                        rrule: q,
                        projectId: H,
                        cwds: V,
                        destination: J,
                        executionEnvironment: F,
                        localEnvironmentConfigPath: K,
                        model: G,
                        reasoningEffort: Q,
                        notificationPolicy: X,
                        targetThreadId: Z,
                        status: $
                    } = e,
                    Y = void 0 === P ? null : P,
                    ee = (0, s.y)(v.a),
                    et = (0, c.a)();
                (0, x.a)();
                let ea = (0, u.Z)("/local/:conversationId"),
                    en = (0, s.z)(h.e),
                    eo = Z ?? null;
                E[0] !== V || E[1] !== J || E[2] !== F || E[3] !== O || E[4] !== D || E[5] !== K || E[6] !== z || E[7] !== G || E[8] !== B || E[9] !== X || E[10] !== H || E[11] !== W || E[12] !== Q || E[13] !== eo || E[14] !== q || E[15] !== $ ? (t = JSON.stringify({
                    id: O,
                    kind: D,
                    mode: z,
                    name: B,
                    prompt: W,
                    rrule: q,
                    projectId: H,
                    cwds: V,
                    destination: J,
                    executionEnvironment: F,
                    localEnvironmentConfigPath: K,
                    model: G,
                    reasoningEffort: Q,
                    notificationPolicy: X,
                    targetThreadId: eo,
                    status: $
                }), E[0] = V, E[1] = J, E[2] = F, E[3] = O, E[4] = D, E[5] = K, E[6] = z, E[7] = G, E[8] = B, E[9] = X, E[10] = H, E[11] = W, E[12] = Q, E[13] = eo, E[14] = q, E[15] = $, E[16] = t) : t = E[16];
                let el = t,
                    ei = en?.directiveKey === el ? en.automationId : null,
                    es = ei ?? Y?.automationId ?? O,
                    er = Y?.snapshot ?? null,
                    ec = "view" === z ? z : null,
                    eu = "view" === z && null != O,
                    ed = null != O && (eu || "suggested-update" === z),
                    ep = (0, s.z)(d.c),
                    em = ep.data,
                    eh = !!ed && ep.isLoading;
                if (E[17] !== em || E[18] !== ei || E[19] !== V || E[20] !== O || E[21] !== et || E[22] !== eh || E[23] !== eu || E[24] !== D || E[25] !== z || E[26] !== B || E[27] !== H || E[28] !== W || E[29] !== es || E[30] !== eo || E[31] !== Y?.automationId || E[32] !== Y?.mode || E[33] !== er?.name || E[34] !== er?.rrule || E[35] !== q || E[36] !== $) {
                    var ex;
                    let e, t, n, o, s, c, u, d, p, h, x = null != O ? em?.items.find(e => e.id === O) ?? null : null;
                    E[46] !== em?.items || E[47] !== ei || E[48] !== et || E[49] !== eh || E[50] !== eu || E[51] !== z || E[52] !== B || E[53] !== es || E[54] !== Y?.mode || E[55] !== er?.name || E[56] !== er?.rrule || E[57] !== q ? ({
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
                        mode: Y?.mode ?? z,
                        isSuggestionAccepted: null != ei,
                        trimmedId: es ?? null,
                        trimmedName: B ?? er?.name ?? null,
                        trimmedRrule: q ?? er?.rrule ?? null,
                        automations: em?.items ?? null,
                        isLoading: eh
                    }), o = et.formatMessage({
                        id: "settings.automations.rruleSummaryFallback",
                        defaultMessage: "Custom schedule",
                        description: "Fallback label when RRULE summary cannot be generated"
                    }), s = (0, m.f)({
                        rrule: n,
                        intl: et,
                        fallbackMessage: o
                    }), E[46] = em?.items, E[47] = ei, E[48] = et, E[49] = eh, E[50] = eu, E[51] = z, E[52] = B, E[53] = es, E[54] = Y?.mode, E[55] = er?.name, E[56] = er?.rrule, E[57] = q, E[58] = t, E[59] = w, E[60] = n, E[61] = o, E[62] = s) : (t = E[58], w = E[59], n = E[60], o = E[61], s = E[62]);
                    let g = s;
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
                    E[67] !== z || E[68] !== Y?.mode ? (d = Y?.mode ?? z, E[67] = z, E[68] = Y?.mode, E[69] = d) : d = E[69], a = (y = "delete" === (b = d)) || Y?.automationId != null ? Y?.automationId ?? O ?? null : es, E[70] !== a || E[71] !== y ? (p = y ? (ex = a ?? null, 0 === (e = ex?.trim() ?? "").length ? null : /^[0-9a-f]{8}-[0-9a-f-]+$/i.test(e) ? e : i()(e.replace(/[-_]+/g, " "))) : null, E[70] = a, E[71] = y, E[72] = p) : p = E[72];
                    let S = p;
                    N = t ? v : w || S || f, E[73] !== S || E[74] !== et || E[75] !== w ? (h = w ?? S ?? et.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task",
                        description: "Fallback title when scheduled task name is missing"
                    }), E[73] = S, E[74] = et, E[75] = w, E[76] = h) : h = E[76], C = h, j = g || (t ? v : null != n ? o : null), l = null != B && null != W && null != q && ("heartbeat" === D ? null != eo : void 0 !== H || null != V), k = null != O && null != $ && null != B && null != W && null != q && (null == x ? "heartbeat" === D ? null != eo : void 0 !== H || null != V : !!(0, r.hi)(x) || void 0 !== H || null != V), E[17] = em, E[18] = ei, E[19] = V, E[20] = O, E[21] = et, E[22] = eh, E[23] = eu, E[24] = D, E[25] = z, E[26] = B, E[27] = H, E[28] = W, E[29] = es, E[30] = eo, E[31] = Y?.automationId, E[32] = Y?.mode, E[33] = er?.name, E[34] = er?.rrule, E[35] = q, E[36] = $, E[37] = a, E[38] = l, E[39] = b, E[40] = y, E[41] = j, E[42] = w, E[43] = k, E[44] = C, E[45] = N
                } else a = E[37], l = E[38], b = E[39], y = E[40], j = E[41], w = E[42], k = E[43], C = E[44], N = E[45];
                let eg = k,
                    ev = "suggested-update" === z && ed && ep.isLoading,
                    ef = "suggested-create" === z || "suggested-update" === z,
                    eb = ef ? L : void 0,
                    ey = O ?? null,
                    ej = D ?? null,
                    ew = B ?? "",
                    ek = W ?? "",
                    eC = q ?? "";
                E[77] !== V ? (S = V ?? [], E[77] = V, E[78] = S) : S = E[78];
                let eN = void 0 !== H ? H : V?.[0] === r.kd ? null : V?.[0] ?? null,
                    eS = F ?? null,
                    eM = K ?? null,
                    eI = G ?? null,
                    eT = Q ?? null;
                E[79] !== X ? (M = void 0 !== X ? {
                    notificationPolicy: X
                } : {}, E[79] = X, E[80] = M) : M = E[80];
                let eR = $ ?? null;
                E[81] !== el || E[82] !== ec || E[83] !== eo || E[84] !== S || E[85] !== eN || E[86] !== eS || E[87] !== eM || E[88] !== eI || E[89] !== eT || E[90] !== M || E[91] !== eR || E[92] !== eb || E[93] !== ey || E[94] !== ej || E[95] !== ew || E[96] !== ek || E[97] !== eC ? (I = {
                    elicitation: eb,
                    directiveKey: el,
                    mode: ec,
                    id: ey,
                    kind: ej,
                    name: ew,
                    prompt: ek,
                    rrule: eC,
                    cwds: S,
                    projectId: eN,
                    executionEnvironment: eS,
                    localEnvironmentConfigPath: eM,
                    model: eI,
                    reasoningEffort: eT,
                    ...M,
                    targetThreadId: eo,
                    status: eR
                }, E[81] = el, E[82] = ec, E[83] = eo, E[84] = S, E[85] = eN, E[86] = eS, E[87] = eM, E[88] = eI, E[89] = eT, E[90] = M, E[91] = eR, E[92] = eb, E[93] = ey, E[94] = ej, E[95] = ew, E[96] = ek, E[97] = eC, E[98] = I) : I = E[98];
                let eA = I,
                    e_ = null != ei;
                E[99] !== l || E[100] !== eg || E[101] !== ec || E[102] !== eu || E[103] !== e_ ? (T = (0, h.A)({
                    directiveMode: ec,
                    canCreate: l,
                    canUpdate: eg,
                    isViewMode: eu,
                    forceOpen: e_
                }), E[99] = l, E[100] = eg, E[101] = ec, E[102] = eu, E[103] = e_, E[104] = T) : T = E[104];
                let eU = T,
                    eE = y ? null : j;
                E[105] !== eU || E[106] !== a || E[107] !== ei || E[108] !== eA || E[109] !== ev || E[110] !== ef || E[111] !== ea || E[112] !== ee || E[113] !== C ? (R = () => {
                    if (ev) return;
                    let e = a;
                    null != e ? g.c.dispatchHostMessage({
                        type: "navigate-to-route",
                        path: `/automations?automationId=${e}`
                    }) : "create" === eU && (ee.set(h.e, null), ee.set(h.f, eA), g.c.dispatchHostMessage({
                        type: "navigate-to-route",
                        path: "/automations?automationMode=create"
                    }))
                }, E[105] = eU, E[106] = a, E[107] = ei, E[108] = eA, E[109] = ev, E[110] = ef, E[111] = ea, E[112] = ee, E[113] = C, E[114] = R) : R = E[114];
                let eL = R,
                    eP = !y && !ev && (null != a || "create" === eU),
                    eO = Y?.deleteStatus;
                E[115] !== b || E[116] !== et || E[117] !== eO ? (A = function(e) {
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
                }), E[115] = b, E[116] = et, E[117] = eO, E[118] = A) : A = E[118];
                let eD = A;
                E[119] !== eD || E[120] !== w || E[121] !== eE ? (_ = [eD, w, eE].filter(f), E[119] = eD, E[120] = w, E[121] = eE, E[122] = _) : _ = E[122];
                let ez = _.join(" · "),
                    eB = eE ?? eD,
                    eW = ez || void 0;
                return E[123] !== eP || E[124] !== eL || E[125] !== eB || E[126] !== eW || E[127] !== N ? (U = (0, n.jsx)(p.a, {
                    title: N,
                    subtitle: eB,
                    ariaLabel: eW,
                    canOpen: eP,
                    onOpen: eL
                }), E[123] = eP, E[124] = eL, E[125] = eB, E[126] = eW, E[127] = N, E[128] = U) : U = E[128], U
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
            g = a("nMdB"),
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
                    O = (0, s.y)(x.a),
                    D = (0, u.c)(),
                    z = (0, r.a)(),
                    B = (0, s.x)(_ ? null : f.p, T);
                I[0] !== z ? (t = z.formatMessage({
                    id: "codex.mcpTool.openAppInTab",
                    defaultMessage: "Open app in tab",
                    description: "Opens an MCP app in a tab from its tool call row"
                }), I[0] = z, I[1] = t) : t = I[1];
                let W = t;
                I[2] !== B?.inline || I[3] !== P || I[4] !== T || I[5] !== O || I[6] !== A ? (a = P ?? ("closed" === A && B?.inline ? {
                    expanded: !1,
                    onToggle: () => (0, f.x)(O, T, "inline")
                } : void 0), I[2] = B?.inline, I[3] = P, I[4] = T, I[5] = O, I[6] = A, I[7] = a) : a = I[7];
                let q = a;
                I[8] !== B?.tab || I[9] !== W || I[10] !== T || I[11] !== O ? (y = B?.tab ? (0, n.jsx)(l.a, {
                    content: W,
                    children: (0, n.jsx)(p.a, {
                        className: "relative",
                        "aria-label": W,
                        color: "ghost",
                        size: "icon",
                        onClick: () => (0, f.x)(O, T, "fullscreen"),
                        children: (0, n.jsx)(m.N, {})
                    })
                }) : null, I[8] = B?.tab, I[9] = W, I[10] = T, I[11] = O, I[12] = y) : y = I[12], I[13] !== E || I[14] !== y ? (j = (0, n.jsxs)(n.Fragment, {
                    children: [y, E]
                }), I[13] = E, I[14] = y, I[15] = j) : j = I[15], I[16] !== q || I[17] !== D ? (w = null == q ? void 0 : {
                    ...q,
                    onToggle: e => {
                        (0, g.a)(e.currentTarget, D), q.onToggle(e)
                    }
                }, I[16] = q, I[17] = D, I[18] = w) : w = I[18];
                let H = "opening" === A,
                    V = null != q && "group-hover/activity-header:[--agent-activity-summary-color:var(--color-text)]";
                return I[19] !== V ? (k = (0, i.b)("min-w-0 shrink truncate", b.a.summary, V), I[19] = V, I[20] = k) : k = I[20], I[21] !== z || I[22] !== R ? (C = R ?? z.formatMessage(v.c), I[21] = z, I[22] = R, I[23] = C) : C = I[23], I[24] !== A || I[25] !== C ? (N = (0, n.jsx)(c.a, {
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
                let t, a, s, h, x, g, v, f, b = (0, o.c)(32),
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
                }, b[13] = T, b[14] = h) : h = b[14], b[15] !== k ? (x = {
                    enabled: k
                }, b[15] = k, b[16] = x) : x = b[16];
                let R = (0, l.x)(d.c, h, x);
                if (null == R) return C;
                b[17] !== y.completed || b[18] !== y.invocation.server || b[19] !== y.result ? (g = "active", y.completed && (g = (0, c.a)({
                    result: y.result,
                    isCodexAppsServer: "codex_apps" === y.invocation.server
                }) ? "failed" : "completed"), b[17] = y.completed, b[18] = y.invocation.server, b[19] = y.result, b[20] = g) : g = b[20];
                let A = R.title ?? "";
                return b[21] !== C || b[22] !== w || b[23] !== g ? (v = e => {
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
                            state: g,
                            title: a
                        }
                    })
                }, b[21] = C, b[22] = w, b[23] = g, b[24] = v) : v = b[24], b[25] !== R.document_type || b[26] !== R.namespace || b[27] !== R.page_id || b[28] !== R.symbol || b[29] !== A || b[30] !== v ? (f = (0, n.jsx)(p.a, {
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