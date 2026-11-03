export const __rspack_esm_ids = [835890];
export const __webpack_modules__ = {
    RZnR: (function(e, t, a) {
        a.d(t, {}, {
            a: function(e) {
                if (null != e && (null != e.appMetadata && "firstPartyType" in e.appMetadata && "string" == typeof e.appMetadata.firstPartyType && "" !== e.appMetadata.firstPartyType.trim() || "DEFAULT_OAI_CATALOG" === e.distributionChannel || "ECOSYSTEM_DIRECTORY" === e.distributionChannel)) return e.name
            }
        })
    }),
    OusJ: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            l = a("zd8w"),
            i = a("oyxz"),
            s = a("HOLv"),
            r = a("VL1D"),
            c = a("DVyM");
        a.d(t, {}, {
            a: function(e) {
                let t, a, d, u, p, m, h, g = (0, o.c)(28),
                    {
                        ref: x,
                        title: v,
                        subtitle: f,
                        ariaLabel: b,
                        canOpen: y,
                        onOpen: j,
                        openLabel: w,
                        actions: k
                    } = e,
                    N = (0, l.useId)(),
                    C = (0, l.useId)(),
                    M = k;
                if (null == k && y) {
                    let e, t;
                    g[0] !== w ? (e = w ?? (0, n.jsx)(i.a, {
                        id: "automation.updateDirective.open",
                        defaultMessage: "Open",
                        description: "Button label for opening an automation from a task message"
                    }), g[0] = w, g[1] = e) : e = g[1], g[2] !== e ? (t = (0, n.jsx)(r.g, {
                        label: e
                    }), g[2] = e, g[3] = t) : t = g[3], M = t
                }
                g[4] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(r.f, {
                    children: (0, n.jsx)(s.a, {
                        asset: c.a,
                        "aria-hidden": !0
                    })
                }), g[4] = t) : t = g[4], g[5] !== v || g[6] !== C ? (a = (0, n.jsx)("span", {
                    id: C,
                    children: v
                }), g[5] = v, g[6] = C, g[7] = a) : a = g[7], g[8] !== N || g[9] !== f ? (d = f ? (0, n.jsx)("span", {
                    id: N,
                    children: f
                }) : null, g[8] = N, g[9] = f, g[10] = d) : d = g[10], g[11] !== M ? (u = null != M ? (0, n.jsx)("span", {
                    className: "pointer-events-auto flex shrink-0 items-center gap-1",
                    children: M
                }) : null, g[11] = M, g[12] = u) : u = g[12], g[13] !== a || g[14] !== d || g[15] !== u ? (p = (0, n.jsx)(r.h, {
                    className: "pointer-events-none relative z-10",
                    icon: t,
                    title: a,
                    subtitle: d,
                    trailing: u
                }), g[13] = a, g[14] = d, g[15] = u, g[16] = p) : p = g[16];
                let S = p,
                    I = null == b ? C : void 0,
                    T = f ? N : void 0,
                    R = !y,
                    A = null == k ? S : null;
                g[17] !== b || g[18] !== j || g[19] !== x || g[20] !== I || g[21] !== T || g[22] !== R || g[23] !== A ? (m = (0, n.jsx)(r.b, {
                    ref: x,
                    "aria-label": b,
                    "aria-labelledby": I,
                    "aria-describedby": T,
                    disabled: R,
                    onClick: j,
                    children: A
                }), g[17] = b, g[18] = j, g[19] = x, g[20] = I, g[21] = T, g[22] = R, g[23] = A, g[24] = m) : m = g[24];
                let _ = null != k ? S : null;
                return g[25] !== m || g[26] !== _ ? (h = (0, n.jsx)(r.a, {
                    as: "span",
                    className: "mt-3 select-none",
                    variant: "attachment",
                    children: (0, n.jsxs)("span", {
                        className: "group/resource-card relative",
                        "data-automation-card": !0,
                        children: [m, _]
                    })
                }), g[25] = m, g[26] = _, g[27] = h) : h = g[27], h
            }
        })
    }),
    ojna: (function(e, t, a) {
        var n = a("ASxG"),
            o = a("KJ1J"),
            l = a("kqQk"),
            i = a("DKJJ");
        let s = n.object({
            success: n.literal(!0),
            automation: l.a
        });

        function r(e) {
            return (0, o.e)(e.server) && ("automations.create_local" === e.tool || "automations.update_local" === e.tool)
        }
        a.d(t, {}, {
            a: function(e) {
                if (!r(e.invocation) || !e.completed || !0 === e.isMcpAppWidgetSuperseded || e.result?.type !== "success" || (0, i.h)({
                        isCodexAppsServer: !0,
                        result: e.result
                    })) return null;
                let {
                    structuredContent: t
                } = (0, i.f)({
                    isCodexAppsServer: !0,
                    toolResult: e.result.raw
                }), a = s.safeParse(t);
                return a.success ? a.data.automation : null
            },
            b: r
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
            l = a("iTtm"),
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
                let t, a, s, m, h, g, x, v = (0, o.c)(21),
                    {
                        automation: f
                    } = e,
                    b = (0, l.y)(u.a),
                    y = (0, i.a)(),
                    j = (0, l.x)(c.g, f.id);
                v[0] !== f || v[1] !== j || v[2] !== y ? (t = (0, p.a)(f, j, y), v[0] = f, v[1] = j, v[2] = y, v[3] = t) : t = v[3];
                let {
                    scheduleLabel: w
                } = t;
                v[4] !== f.title || v[5] !== j?.automation.title ? (a = j?.automation.title.trim() || f.title, v[4] = f.title, v[5] = j?.automation.title, v[6] = a) : a = v[6];
                let k = a;
                return v[7] !== f.id || v[8] !== j || v[9] !== b || v[10] !== k ? (s = () => {
                    null == j && b.queryClient.invalidateQueries({
                        queryKey: ["cloud-automations"]
                    }), (0, d.openAutomationSidePanelTab)({
                        scope: b,
                        automationId: f.id,
                        title: k,
                        toggle: !0,
                        navigationSource: "conversation"
                    })
                }, m = null, v[7] = f.id, v[8] = j, v[9] = b, v[10] = k, v[11] = s, v[12] = m) : (s = v[11], m = v[12]), v[13] !== w || v[14] !== s || v[15] !== m || v[16] !== k ? (h = (0, n.jsx)(r.a, {
                    title: k,
                    subtitle: w,
                    ariaLabel: k,
                    canOpen: !0,
                    onOpen: s,
                    actions: m
                }), v[13] = w, v[14] = s, v[15] = m, v[16] = k, v[17] = h) : h = v[17], v[18] === Symbol.for("react.memo_cache_sentinel") ? (g = null, v[18] = g) : g = v[18], v[19] !== h ? (x = (0, n.jsxs)("div", {
                    className: "flex w-full min-w-0 flex-col gap-2 self-start",
                    children: [h, g]
                }), v[19] = h, v[20] = x) : x = v[20], x
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
            l = a("iTtm"),
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
                let t, a, h, g = (0, n.c)(8),
                    {
                        conversationId: x
                    } = e,
                    v = (0, l.y)(u.a),
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
                        v.get(m, n) || (v.set(m, n, !0), (0, d.a)(v, o.c, {
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
            l = a("iTtm"),
            i = a("zd8w"),
            s = a("oyxz"),
            r = a("Wf1j"),
            c = a("jqIZ"),
            d = a("Ro2M"),
            u = a("bN4H"),
            p = a("N0mh"),
            m = a("wewW"),
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
                j = (0, l.x)(d.g, f.id);
            x[0] !== f || x[1] !== j || x[2] !== y ? (t = (0, v.a)(f, j, y), x[0] = f, x[1] = j, x[2] = y, x[3] = t) : t = x[3];
            let {
                scheduleLabel: w,
                title: k
            } = t;
            return x[4] !== f.id || x[5] !== b || x[6] !== k ? (a = () => {
                (0, u.openAutomationSidePanelTab)({
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
                let t, a, i, r, u, p, h, v, b, y, j = (0, o.c)(25),
                    {
                        automations: w,
                        conversationId: k
                    } = e,
                    N = (0, c._)(),
                    {
                        data: C,
                        isSuccess: M
                    } = (0, l.z)(d.j);
                if (j[0] !== w || j[1] !== C || j[2] !== k || j[3] !== M) {
                    let e, o = M && C.isAvailable ? w.filter(e => {
                        let {
                            id: t
                        } = e;
                        return C.items.some(e => {
                            let {
                                automation: a
                            } = e;
                            return a.id === t
                        })
                    }) : w;
                    i = "w-full max-w-sm overflow-hidden rounded-2xl border border-default bg-surface", r = null != k && o.length > 0 ? (0, n.jsx)(x.a, {
                        conversationId: k
                    }) : null, j[9] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(m.a, {
                        "aria-hidden": "true",
                        className: "icon-sm shrink-0"
                    }), j[9] = e) : e = j[9], j[10] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, n.jsxs)("header", {
                        className: "flex items-center gap-2 border-b border-subtle px-4 py-3 text-sm text-secondary select-none",
                        children: [e, (0, n.jsx)("h2", {
                            className: "text-sm font-medium uppercase",
                            children: (0, n.jsx)(g.a, {
                                children: (0, n.jsx)(s.a, {
                                    id: "automations.scheduled.destination.label",
                                    defaultMessage: "Scheduled",
                                    description: "Title of the Scheduled destination and the compact scheduled-task list in a conversation"
                                })
                            })
                        })]
                    }), j[10] = u) : u = j[10], t = "px-4", a = o.slice(0, 5).map(f), j[0] = w, j[1] = C, j[2] = k, j[3] = M, j[4] = t, j[5] = a, j[6] = i, j[7] = r, j[8] = u
                } else t = j[4], a = j[5], i = j[6], r = j[7], u = j[8];
                return j[11] !== N ? (p = () => {
                    N("/automations", {
                        state: {
                            navigationSource: "conversation"
                        }
                    })
                }, j[11] = N, j[12] = p) : p = j[12], j[13] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, n.jsx)(s.a, {
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
                }), j[14] = p, j[15] = v) : v = j[15], j[16] !== t || j[17] !== a || j[18] !== v ? (b = (0, n.jsxs)("ul", {
                    className: t,
                    children: [a, v]
                }), j[16] = t, j[17] = a, j[18] = v, j[19] = b) : b = j[19], j[20] !== i || j[21] !== r || j[22] !== u || j[23] !== b ? (y = (0, n.jsxs)("section", {
                    className: i,
                    children: [r, u, b]
                }), j[20] = i, j[21] = r, j[22] = u, j[23] = b, j[24] = y) : y = j[24], y
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
            d = a("ygO2"),
            u = a("HOLv"),
            p = a("N0mh"),
            m = a("V8uZ"),
            h = a("Sgcz"),
            g = a("umSm"),
            x = a("W9db");

        function v(e) {
            let t, a, c, u, x, v, b, y, j, w, k, N, C, M, S = (0, o.c)(43),
                {
                    className: I,
                    isExpandable: T,
                    review: R
                } = e,
                A = (0, r.a)(),
                [_, P] = (0, s.useState)(!1);
            S[0] !== A || S[1] !== R ? (t = (0, h.c)(A, R), S[0] = A, S[1] = R, S[2] = t) : t = S[2];
            let E = t;
            if (!(void 0 === T || T)) {
                let e, t;
                return S[3] !== I ? (e = (0, l.b)("min-w-0 truncate pt-1 text-codex-description/80", I), S[3] = I, S[4] = e) : e = S[4], S[5] !== e || S[6] !== E ? (t = (0, n.jsx)("div", {
                    className: e,
                    children: E
                }), S[5] = e, S[6] = E, S[7] = t) : t = S[7], t
            }
            let L = "denied" === R.status && "high" === R.riskLevel;
            S[8] !== A || S[9] !== R ? (a = (0, h.b)(A, R), S[8] = A, S[9] = R, S[10] = a) : a = S[10];
            let U = a;
            S[11] !== I ? (c = (0, l.b)("flex flex-col pt-1", I), S[11] = I, S[12] = c) : c = S[12], S[13] === Symbol.for("react.memo_cache_sentinel") ? (u = () => P(f), S[13] = u) : u = S[13];
            let D = "inProgress" === R.status,
                O = L ? "text-warning" : "text-codex-description/80 group-hover/automatic-approval-review:text-default";
            S[14] !== O ? (x = (0, l.b)("min-w-0 truncate", O), S[14] = O, S[15] = x) : x = S[15], S[16] !== D || S[17] !== x || S[18] !== E ? (v = (0, n.jsx)(g.a, {
                active: D,
                className: x,
                children: E
            }), S[16] = D, S[17] = x, S[18] = E, S[19] = v) : v = S[19];
            let z = _ && "rotate-90 opacity-100";
            S[20] !== z ? (b = (0, l.b)("icon-2xs shrink-0 text-tertiary transition-[opacity,transform] duration-basic opacity-0 group-hover/automatic-approval-review:opacity-100", z), S[20] = z, S[21] = b) : b = S[21], S[22] !== b ? (y = (0, n.jsx)(p.a, {
                className: b
            }), S[22] = b, S[23] = y) : y = S[23], S[24] !== _ || S[25] !== y || S[26] !== v ? (j = (0, n.jsxs)(d.a, {
                className: "group/automatic-approval-review inline-flex w-fit max-w-full gap-1.5 text-start",
                color: "ghostMuted",
                focusRing: "inset",
                size: "inline",
                onClick: u,
                "aria-expanded": _,
                children: [v, y]
            }), S[24] = _, S[25] = y, S[26] = v, S[27] = j) : j = S[27];
            let H = _ ? "auto" : 0,
                J = +!!_;
            S[28] !== H || S[29] !== J ? (w = {
                height: H,
                opacity: J
            }, S[28] = H, S[29] = J, S[30] = w) : w = S[30];
            let W = _ ? "auto" : "none";
            return S[31] !== W ? (k = {
                overflow: "hidden",
                pointerEvents: W
            }, S[31] = W, S[32] = k) : k = S[32], S[33] !== U ? (N = (0, n.jsx)("p", {
                className: "max-w-[80ch] pt-1 text-size-chat leading-relaxed whitespace-pre-wrap text-text/60",
                children: U
            }), S[33] = U, S[34] = N) : N = S[34], S[35] !== w || S[36] !== k || S[37] !== N ? (C = (0, n.jsx)(i.a.div, {
                initial: !1,
                animate: w,
                transition: m.a,
                style: k,
                children: N
            }), S[35] = w, S[36] = k, S[37] = N, S[38] = C) : C = S[38], S[39] !== j || S[40] !== C || S[41] !== c ? (M = (0, n.jsxs)("div", {
                className: c,
                children: [j, C]
            }), S[39] = j, S[40] = C, S[41] = c, S[42] = M) : M = S[42], M
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
                return i[0] !== s || i[1] !== c ? (t = (0, l.b)("shrink-0", c, s), i[0] = s, i[1] = c, i[2] = t) : t = i[2], i[3] !== t ? (a = (0, n.jsx)(u.a, {
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
        var n = a("iTtm"),
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
    PvhQ: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            l = a("iTtm"),
            i = a("Wf1j"),
            s = a("oyxz"),
            r = a("wD9O"),
            c = a("umSm"),
            d = a("jKy0"),
            u = a("tbqK"),
            p = a("ALWK"),
            m = a("tSEg"),
            h = a("nMdB");

        function g(e) {
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
                let t, a, i, s, c, x, v = (0, o.c)(24),
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
                    M = (0, l.y)(m.a),
                    S = (0, r.c)();
                v[0] !== j || v[1] !== C || v[2] !== f || v[3] !== M || v[4] !== y ? (t = C ?? ("closed" !== y || j ? void 0 : {
                    expanded: !1,
                    onToggle: () => (0, p.w)(M, f)
                }), v[0] = j, v[1] = C, v[2] = f, v[3] = M, v[4] = y, v[5] = t) : t = v[5];
                let I = t;
                return v[6] !== j || v[7] !== f ? (a = (0, n.jsx)(u.a, {
                    disabled: j,
                    mcpAppId: f
                }), v[6] = j, v[7] = f, v[8] = a) : a = v[8], v[9] !== k || v[10] !== a ? (i = (0, n.jsxs)(n.Fragment, {
                    children: [a, k]
                }), v[9] = k, v[10] = a, v[11] = i) : i = v[11], v[12] !== I || v[13] !== S ? (s = null == I ? void 0 : {
                    ...I,
                    onToggle: e => {
                        (0, h.a)(e.currentTarget, S), I.onToggle(e)
                    }
                }, v[12] = I, v[13] = S, v[14] = s) : s = v[14], v[15] !== b || v[16] !== y ? (c = (0, n.jsx)(g, {
                    name: b,
                    status: y
                }), v[15] = b, v[16] = y, v[17] = c) : c = v[17], v[18] !== N || v[19] !== w || v[20] !== i || v[21] !== s || v[22] !== c ? (x = (0, n.jsxs)(d.a, {
                    className: N,
                    accessory: i,
                    disclosure: s,
                    children: [w, c]
                }), v[18] = N, v[19] = w, v[20] = i, v[21] = s, v[22] = c, v[23] = x) : x = v[23], x
            }
        })
    }),
    DWcA: (function(e, t, a) {
        var n = a("iTtm"),
            o = a("ALWK");
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
                } = t, r = (0, n.x)(o.l, e), c = (0, n.x)(o.n, e), d = (0, n.x)(o.k, e), u = (0, n.x)(o.u, e), p = (0, n.x)(o.p, e);
                return void 0 !== s && s || null != p ? "error" : "closed" !== r ? r : a ? "opening" : (l ?? d) && "launcher" !== c ? u && !(void 0 !== i && i) ? "open" : "opening" : "closed"
            }
        })
    }),
    z0Na: (function(e, t, a) {
        var n = a("QosV"),
            o = a("T0Rc"),
            l = a("iTtm"),
            i = a("sM3V"),
            s = a("KJ1J"),
            r = a("biqr"),
            c = a("rO8L"),
            d = a("JXtc"),
            u = a("C1SW"),
            p = a("EEop"),
            m = a("cLdu"),
            h = a("ueue"),
            g = a("whdX"),
            x = a("tSEg"),
            v = a("KU8M"),
            f = a("LF5P"),
            b = a("MdwM"),
            y = a("Hkqr"),
            j = a("DKJJ");
        a.d(t, {}, {
            a: function(e) {
                let t, a, o, r, c, d, u, p, m, h = (0, n.c)(44),
                    {
                        item: g,
                        hostId: x,
                        conversationId: f,
                        fallback: b,
                        enabled: y,
                        catalogEnabled: w
                    } = e,
                    k = void 0 === y || y,
                    N = void 0 === w ? k : w;
                h[0] !== g.invocation.server || h[1] !== g.result ? (t = (0, s.e)(g.invocation.server), a = (0, j.h)({
                    isCodexAppsServer: t,
                    result: g.result
                }), h[0] = g.invocation.server, h[1] = g.result, h[2] = t, h[3] = a) : (t = h[2], a = h[3]);
                let C = a,
                    M = g.result?.type !== "success" || C ? null : g.result.raw,
                    S = M ?? b?.toolResult ?? null;
                h[4] !== f || h[5] !== x ? (o = {
                    hostId: x,
                    conversationId: f
                }, h[4] = f, h[5] = x, h[6] = o) : o = h[6];
                let I = (0, l.x)(i.b, o);
                h[7] !== x || h[8] !== g.appContext || h[9] !== g.invocation.server || h[10] !== g.invocation.tool || h[11] !== g.invocationResourceUri || h[12] !== I ? (r = {
                    appContext: g.appContext,
                    hostId: x,
                    invocationResourceUri: g.invocationResourceUri,
                    server: g.invocation.server,
                    threadId: I,
                    tool: g.invocation.tool
                }, h[7] = x, h[8] = g.appContext, h[9] = g.invocation.server, h[10] = g.invocation.tool, h[11] = g.invocationResourceUri, h[12] = I, h[13] = r) : r = h[13];
                let T = r;
                h[14] !== N ? (c = {
                    enabled: N
                }, h[14] = N, h[15] = c) : c = h[15];
                let R = (0, l.x)(v.a, T, c);
                h[16] !== R.data || h[17] !== R.isPending || h[18] !== f || h[19] !== S || h[20] !== b?.resourceUri || h[21] !== g ? (d = (0, j.d)({
                    item: g,
                    mcpServerStatuses: R.data,
                    descriptorOnly: f.startsWith("chatgpt:"),
                    toolResult: S,
                    isCatalogPending: R.isPending,
                    registeredResourceUri: b?.resourceUri
                }), h[16] = R.data, h[17] = R.isPending, h[18] = f, h[19] = S, h[20] = b?.resourceUri, h[21] = g, h[22] = d) : d = h[22];
                let {
                    resourceUri: A,
                    isPending: _
                } = d, P = (0, l.x)(k && t ? v.b : null, T);
                C ? u = "error" : g.completed && null == g.result && null == S && (u = "cancelled");
                let E = t && null != g.appContext ? g.callId : null,
                    L = u;
                return h[23] !== R.data || h[24] !== g.appContext || h[25] !== g.invocation.server || h[26] !== g.invocation.tool || h[27] !== g.invocationResourceUri ? (p = (0, j.c)({
                    appContext: g.appContext,
                    invocationResourceUri: g.invocationResourceUri,
                    mcpServerStatuses: R.data,
                    server: g.invocation.server,
                    tool: g.invocation.tool
                }), h[23] = R.data, h[24] = g.appContext, h[25] = g.invocation.server, h[26] = g.invocation.tool, h[27] = g.invocationResourceUri, h[28] = p) : p = h[28], h[29] !== R || h[30] !== f || h[31] !== S || h[32] !== x || h[33] !== t || h[34] !== _ || h[35] !== g || h[36] !== A || h[37] !== M || h[38] !== p || h[39] !== E || h[40] !== C || h[41] !== u || h[42] !== P ? (m = {
                    item: g,
                    hostId: x,
                    conversationId: f,
                    catalog: R,
                    resourceUri: A,
                    isResourceUriPending: _,
                    toolScope: P,
                    isCodexAppsToolCall: t,
                    originCallId: E,
                    successfulToolResult: M,
                    displayedSuccessfulToolResult: S,
                    toolCallFailed: C,
                    toolCallStatus: L,
                    toolDefinition: p
                }, h[29] = R, h[30] = f, h[31] = S, h[32] = x, h[33] = t, h[34] = _, h[35] = g, h[36] = A, h[37] = M, h[38] = p, h[39] = E, h[40] = C, h[41] = u, h[42] = P, h[43] = m) : m = h[43], m
            },
            b: function(e, t) {
                let a, o, l, i, s = (0, n.c)(28),
                    {
                        item: r,
                        hostId: c,
                        conversationId: p,
                        catalog: m,
                        resourceUri: h,
                        isResourceUriPending: x,
                        toolScope: v,
                        originCallId: f
                    } = e,
                    b = v?.connectorId ?? null,
                    y = v?.kind === "target" ? v : null,
                    j = h ?? null,
                    w = t && !x && (null == f || r.completed);
                s[0] !== p || s[1] !== c || s[2] !== r.appContext || s[3] !== r.invocation.server || s[4] !== f || s[5] !== b || s[6] !== y || s[7] !== j || s[8] !== w ? (a = {
                    appContext: r.appContext,
                    connectorId: b,
                    connectorTarget: y,
                    hostId: c,
                    originCallId: f,
                    server: r.invocation.server,
                    threadId: p,
                    uri: j,
                    enabled: w
                }, s[0] = p, s[1] = c, s[2] = r.appContext, s[3] = r.invocation.server, s[4] = f, s[5] = b, s[6] = y, s[7] = j, s[8] = w, s[9] = a) : a = s[9];
                let k = (0, g.f)(a),
                    N = x ? void 0 : k.data;
                s[10] !== N ? (o = (0, d.c)(N), s[10] = N, s[11] = o) : o = s[11];
                let C = o,
                    M = k.access,
                    S = k.refetch,
                    I = k.refetchResource,
                    T = N?.resource,
                    R = !x && (!e.isCodexAppsToolCall || null != v);
                return s[12] !== m.error || s[13] !== m.isFetching || s[14] !== m.isPending || s[15] !== k.error || s[16] !== k.isFetching || s[17] !== k.isPending || s[18] !== R || s[19] !== T ? (l = (0, u.e)({
                    resource: T,
                    resourceError: k.error,
                    isResourcePending: k.isPending,
                    isResourceFetching: k.isFetching,
                    catalogError: m.error,
                    isCatalogPending: m.isPending,
                    isCatalogFetching: m.isFetching,
                    canReadResource: R
                }), s[12] = m.error, s[13] = m.isFetching, s[14] = m.isPending, s[15] = k.error, s[16] = k.isFetching, s[17] = k.isPending, s[18] = R, s[19] = T, s[20] = l) : l = s[20], s[21] !== k.access || s[22] !== k.refetch || s[23] !== k.refetchResource || s[24] !== C || s[25] !== N || s[26] !== l ? (i = {
                    resource: N,
                    renderData: C,
                    access: M,
                    refetch: S,
                    refetchResource: I,
                    state: l
                }, s[21] = k.access, s[22] = k.refetch, s[23] = k.refetchResource, s[24] = C, s[25] = N, s[26] = l, s[27] = i) : i = s[27], i
            },
            c: function(e) {
                let t, a, i, d, u, g, v, j, w, k, N, C, M, S = (0, n.c)(51),
                    {
                        item: I,
                        hostId: T,
                        appInfoOverride: R,
                        enabled: A,
                        retryOnMount: _,
                        allowCachedPlugin: P
                    } = e,
                    E = void 0 === A || A,
                    L = void 0 === P || P,
                    U = (0, l.y)(x.a);
                S[0] !== R || S[1] !== E || S[2] !== I ? (t = E && null == R && (0, f.h)(I), S[0] = R, S[1] = E, S[2] = I, S[3] = t) : t = S[3], S[4] !== T || S[5] !== t ? (a = {
                    enabled: t,
                    hostId: T
                }, S[4] = T, S[5] = t, S[6] = a) : a = S[6];
                let {
                    data: D
                } = (0, r.m)(a);
                S[7] !== R || S[8] !== D || S[9] !== I.appContext || S[10] !== I.functionName || S[11] !== I.invocation.server || S[12] !== I.invocation.tool ? (i = R ?? (null == D ? null : (0, y.b)({
                    appContext: I.appContext,
                    apps: D,
                    functionName: I.functionName,
                    serverName: I.invocation.server,
                    toolName: I.invocation.tool
                })), S[7] = R, S[8] = D, S[9] = I.appContext, S[10] = I.functionName, S[11] = I.invocation.server, S[12] = I.invocation.tool, S[13] = i) : i = S[13];
                let O = i;
                S[14] !== E || S[15] !== I.invocation.server || S[16] !== I.pluginId ? (d = E && null != I.pluginId && !(0, s.e)(I.invocation.server), S[14] = E, S[15] = I.invocation.server, S[16] = I.pluginId, S[17] = d) : d = S[17], S[18] !== T || S[19] !== d ? (u = {
                    enabled: d,
                    hostId: T
                }, S[18] = T, S[19] = d, S[20] = u) : u = S[20];
                let z = (0, c.a)(u);
                S[21] !== T || S[22] !== z ? (g = {
                    enabled: z,
                    hostId: T,
                    roots: void 0,
                    resolveActiveRoots: !0
                }, S[21] = T, S[22] = z, S[23] = g) : g = S[23];
                let {
                    data: H
                } = (0, m.l)(g);
                S[24] !== H || S[25] !== I.pluginId ? (v = H?.find(e => {
                    let {
                        plugin: t
                    } = e;
                    return t.id === I.pluginId || null != t.remotePluginId && t.remotePluginId === I.pluginId
                }), S[24] = H, S[25] = I.pluginId, S[26] = v) : v = S[26];
                let J = v,
                    W = z && null != H && null != I.pluginId && null == J;
                S[27] !== T || S[28] !== I.pluginId || S[29] !== U.query || S[30] !== W ? (j = U.query.getOptions(p.k, (0, p.a)({
                    hostId: T,
                    pluginId: W ? I.pluginId ?? null : null
                })), S[27] = T, S[28] = I.pluginId, S[29] = U.query, S[30] = W, S[31] = j) : j = S[31];
                let F = j,
                    K = W && F.enabled,
                    q = _ ?? F.retryOnMount;
                S[32] !== F || S[33] !== K || S[34] !== q ? (w = {
                    ...F,
                    enabled: K,
                    retry: !1,
                    retryOnMount: q
                }, S[32] = F, S[33] = K, S[34] = q, S[35] = w) : w = S[35];
                let {
                    data: V
                } = (0, o.a)(w);
                if (S[36] !== L || S[37] !== V || S[38] !== J || S[39] !== H || S[40] !== I.invocation.server || S[41] !== I.pluginId || S[42] !== O || S[43] !== W) {
                    let e = null != V && (L || W) ? (0, h.b)(V) : null;
                    k = O, N = J ?? e, C = (0, b.a)({
                        pluginId: e?.plugin.id ?? J?.plugin.id ?? I.pluginId,
                        plugins: W && null != e ? [e] : H ?? [],
                        serverName: I.invocation.server
                    }), S[36] = L, S[37] = V, S[38] = J, S[39] = H, S[40] = I.invocation.server, S[41] = I.pluginId, S[42] = O, S[43] = W, S[44] = k, S[45] = N, S[46] = C
                } else k = S[44], N = S[45], C = S[46];
                return S[47] !== k || S[48] !== N || S[49] !== C ? (M = {
                    matchingApp: k,
                    plugin: N,
                    pluginIcon: C
                }, S[47] = k, S[48] = N, S[49] = C, S[50] = M) : M = S[50], M
            }
        })
    }),
    o1Ns: (function(e, t, a) {
        var n = a("SZCv"),
            o = a.n(n),
            l = a("iTtm"),
            i = a("bg18"),
            s = a("KJ1J"),
            r = a("ojna"),
            c = a("ALWK"),
            d = a("Qg4G"),
            u = a("tSEg"),
            p = a("DKJJ");
        let m = (0, l.d)(u.a, (e, t) => {
            let {
                get: a
            } = t;
            return new Map(e.map(e => {
                let t = (0, i.Xe)(e),
                    n = a(c.i, t);
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
                } = e, o = !(0, r.b)(t.invocation) && !(0, d.b)(t.invocation, a) && !0 !== t.isMcpAppWidgetSuperseded && (n?.sourceId == null || n.sourceId === (0, i.Xe)(t.callId));
                return {
                    isEligible: o,
                    isRenderable: o && !(0, p.h)({
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
            d = a("iTtm"),
            u = a("bg18"),
            p = a("OZum"),
            m = a("zd8w"),
            h = a("Wf1j"),
            g = a("oyxz"),
            x = a("mnR8"),
            v = a("ojna"),
            f = a("khkh"),
            b = a("SHXB"),
            y = a("bPZ9"),
            j = a("OOaz"),
            w = a("Zm2g"),
            k = a("FvYa"),
            N = a("ygO2"),
            C = a("la9L"),
            M = a("rmk3"),
            S = a("JNtf"),
            I = a("mUDD"),
            T = a("KxMp"),
            R = a("HOLv"),
            A = a("DcH0"),
            _ = a("Wdu7"),
            P = a("wwME"),
            E = a("Awc3"),
            L = a("YeQK"),
            U = a("DWcA"),
            D = a("PvhQ"),
            O = a("oKu4"),
            z = a("Odi7"),
            H = a("JXtc"),
            J = a("AHnN"),
            W = a("C1SW"),
            F = a("ustl"),
            K = a("ALWK"),
            q = a("ze43"),
            V = a("E2ja"),
            B = a("KLqe"),
            G = a("Sd8U"),
            Q = a("tSEg"),
            Z = a("hZax"),
            $ = a("V8uZ"),
            Y = a("WFY2"),
            X = a("S7UD"),
            ee = a("kRUe"),
            et = a("Fm9E"),
            ea = a("GmdE"),
            en = a("t7eZ"),
            eo = a("LF5P"),
            el = a("ZiDw"),
            ei = a("ltPT"),
            es = a("SfaR"),
            er = a("BI7J"),
            ec = a("DYB3"),
            ed = a("MAIj"),
            eu = a("mRLe"),
            ep = a("z0Na"),
            em = a("o62A"),
            eh = a("o1Ns"),
            eg = a("alO6"),
            ex = a("umSm"),
            ev = a("tHoD"),
            ef = a("jKy0"),
            eb = a("RznG"),
            ey = a("r9ev"),
            ej = a("gYZk"),
            ew = a("Q03P"),
            ek = a("GUNr"),
            eN = a("Czwx");

        function eC(e) {
            return "text" !== e.type
        }

        function eM(e) {
            let t, a, l, i, s, r, c, d, u, m = (0, o.c)(32),
                {
                    call: h,
                    fallbackPageUrl: x,
                    loadRemoteLogos: v
                } = e,
                f = null == h.sourceHostname ? x : `https://${h.sourceHostname}`,
                b = "invokeTool" === h.kind ? h.inputJson : void 0,
                y = "invokeTool" === h.kind && !0 === h.inputTruncated;
            m[0] !== v || m[1] !== f ? (t = null == f ? (0, n.jsx)(R.a, {
                className: "shrink-0 text-text/60",
                asset: eN.a
            }) : (0, n.jsx)(T.a, {
                className: "icon-xs shrink-0 text-text/60",
                href: f,
                loadRemote: v
            }), m[0] = v, m[1] = f, m[2] = t) : t = m[2], m[3] !== h.name || m[4] !== h.title ? (a = h.title ?? (0, p.a)(h.name, {
                style: "sentence"
            }), m[3] = h.name, m[4] = h.title, m[5] = a) : a = m[5], m[6] !== h.kind || m[7] !== a ? (l = (0, n.jsx)(g.a, {
                id: "codex.mcpTool.webMcpActivity.completed",
                defaultMessage: "{kind, select, listTools {Listed website tools} other {{toolName}}}",
                description: "Human-readable activity label for a website-provided WebMCP tool invocation",
                values: {
                    kind: h.kind,
                    toolName: a
                }
            }), m[6] = h.kind, m[7] = a, m[8] = l) : l = m[8], m[9] !== h.description || m[10] !== h.name || m[11] !== h.readOnlyHint || m[12] !== h.sourceHostname || m[13] !== h.title || m[14] !== b || m[15] !== y ? (i = eI({
                name: h.name,
                title: h.title,
                description: h.description,
                website: h.sourceHostname,
                readOnlyHint: h.readOnlyHint,
                input: null == b || y ? b : function(e) {
                    try {
                        return JSON.parse(e)
                    } catch {
                        return e
                    }
                }(b),
                inputTruncated: !!y || void 0
            }, 2), m[9] = h.description, m[10] = h.name, m[11] = h.readOnlyHint, m[12] = h.sourceHostname, m[13] = h.title, m[14] = b, m[15] = y, m[16] = i) : i = m[16];
            let j = y ? "true" : "false";
            return m[17] !== j ? (s = (0, n.jsx)(g.a, {
                id: "codex.localConversation.webMcpTools.toolLabel",
                defaultMessage: "{truncated, select, true {Tool (input truncated)} other {Tool}}",
                description: "Title for a website-provided WebMCP tool definition and its input",
                values: {
                    truncated: j
                }
            }), m[17] = j, m[18] = s) : s = m[18], m[19] !== i || m[20] !== s ? (r = (0, n.jsx)(C.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: i,
                language: "json",
                showStickyRightContent: !1,
                title: s
            }), m[19] = i, m[20] = s, m[21] = r) : r = m[21], m[22] !== h.outputJson || m[23] !== h.outputTruncated ? (c = null == h.outputJson ? null : (0, n.jsx)(C.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: h.outputTruncated ? h.outputJson : function(e) {
                    try {
                        return eI(JSON.parse(e), 2)
                    } catch {
                        return e
                    }
                }(h.outputJson),
                language: "json",
                showStickyRightContent: !1,
                title: (0, n.jsx)(g.a, {
                    id: "codex.localConversation.webMcpTools.resultLabel",
                    defaultMessage: "{truncated, select, true {Result (truncated)} other {Result}}",
                    description: "Title for a website-provided WebMCP tool result",
                    values: {
                        truncated: h.outputTruncated ? "true" : "false"
                    }
                })
            }), m[22] = h.outputJson, m[23] = h.outputTruncated, m[24] = c) : c = m[24], m[25] !== r || m[26] !== c ? (d = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2",
                children: [r, c]
            }), m[25] = r, m[26] = c, m[27] = d) : d = m[27], m[28] !== t || m[29] !== l || m[30] !== d ? (u = (0, n.jsx)(ey.a, {
                icon: t,
                status: "completed",
                summary: l,
                children: d
            }), m[28] = t, m[29] = l, m[30] = d, m[31] = u) : u = m[31], u
        }

        function eS(e) {
            let t, a, l = (0, o.c)(5),
                {
                    heightHint: i,
                    minFrameHeight: s
                } = e;
            return l[0] !== i || l[1] !== s ? (t = (0, z.b)(i, s), l[0] = i, l[1] = s, l[2] = t) : t = l[2], l[3] !== t ? (a = (0, n.jsx)(A.a, {
                "aria-hidden": !0,
                "data-mcp-app-expanding-placeholder": "true",
                className: "w-full",
                style: {
                    height: t
                }
            }), l[3] = t, l[4] = a) : a = l[4], a
        }

        function eI(e, t) {
            try {
                return JSON.stringify(e, null, t) ?? "null"
            } catch {
                return Y.a.debug("Failed to stringify MCP tool call payload", {
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
                r = (0, d.y)(G.a),
                c = (0, h.a)();
            switch (a.type) {
                case "image": {
                    let e, o, i, d, u, p, m;
                    t[0] !== a.annotations || t[1] !== c ? (e = eA(a.annotations, c), t[0] = a.annotations, t[1] = c, t[2] = e) : e = t[2];
                    let h = e,
                        g = `data:${a.mimeType};base64,${a.data}`;
                    t[3] !== c ? (o = c.formatMessage({
                        id: "codex.mcpTool.contentBlock.imageAlt",
                        defaultMessage: "Image returned by tool",
                        description: "Accessible description for an image included in an MCP tool result"
                    }), t[3] = c, t[4] = o) : o = t[4];
                    let x = o;
                    t[5] !== l || t[6] !== s || t[7] !== x || t[8] !== g || t[9] !== c || t[10] !== r ? (i = () => (0, L.getGeneratedImageContextMenuItems)(r, {
                        chatGptConversationId: l.startsWith("chatgpt:") ? (0, j.d)(l.slice(8)) : void 0,
                        displaySrc: g,
                        hostId: s,
                        image: {
                            kind: "generic",
                            src: g,
                            alt: x
                        },
                        intl: c
                    }), t[5] = l, t[6] = s, t[7] = x, t[8] = g, t[9] = c, t[10] = r, t[11] = i) : i = t[11], t[12] !== x || t[13] !== g ? (d = (0, n.jsx)("img", {
                        className: "max-h-48 w-max max-w-full gap-0.5 rounded-md object-contain",
                        alt: x,
                        src: g
                    }), t[12] = x, t[13] = g, t[14] = d) : d = t[14], t[15] !== i || t[16] !== d ? (u = (0, n.jsx)(M.a, {
                        getItems: i,
                        children: d
                    }), t[15] = i, t[16] = d, t[17] = u) : u = t[17];
                    let v = u;
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
                    t[23] !== a.annotations || t[24] !== c ? (e = eA(a.annotations, c), t[23] = a.annotations, t[24] = c, t[25] = e) : e = t[25];
                    let s = e;
                    return t[26] !== a.data || t[27] !== a.mimeType ? (o = (0, n.jsx)(eR, {
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
                    let e, o, l, i, s, r, c, d = a.resource.text ?? a.resource.blob ?? "",
                        u = "" !== d;
                    t[44] !== a.resource.annotations ? (e = e_(a.resource.annotations), t[44] = a.resource.annotations, t[45] = e) : e = t[45];
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
                    }) : null, t[51] = p, t[52] = s) : s = t[52], t[53] !== u || t[54] !== d ? (r = u ? (0, n.jsxs)("div", {
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
                            children: (0, n.jsx)(g.a, {
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

        function eR(e) {
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
            let h = a;
            if (u?.data === r && u.mimeType === c) {
                let e;
                return s[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(g.a, {
                    id: "codex.mcpTool.contentBlock.audioUnavailable",
                    defaultMessage: "Audio unavailable",
                    description: "Short fallback shown instead of the audio player when audio returned by an MCP tool cannot be played"
                }), s[5] = e) : e = s[5], e
            }
            return s[6] !== h || s[7] !== d ? (l = e => {
                if (null != e) return (0, X.c)(e, d, h)
            }, s[6] = h, s[7] = d, s[8] = l) : l = s[8], s[9] !== h || s[10] !== l ? (i = (0, n.jsx)("audio", {
                ref: l,
                className: "w-full gap-0.5",
                controls: !0,
                onError: h,
                preload: "metadata"
            }), s[9] = h, s[10] = l, s[11] = i) : i = s[11], i
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
                let t, a, r, j, M, A, L, z, G, Y, X, ey, eR, eA, e_, eP, eE, eL, eU, eD, eO, ez, eH, eJ, eW, eF, eK, eq, eV, eB, eG, eQ, eZ, e$, eY, eX, e1, e0, e2, e3, e4, e5, e8, e6, e7, e9, te, tt, ta, tn, to, tl, ti, ts, tr, tc, td, tu = (0, o.c)(302),
                    {
                        item: tp,
                        conversationId: tm,
                        expandedContentOnly: th,
                        hideTextBlocksWithStructuredContent: tg,
                        hostId: tx,
                        loadRemoteLogos: tv,
                        appInfoOverride: tf,
                        onExpand: tb,
                        onOpenPermissions: ty,
                        renderMcpApps: tj,
                        shouldAutoExpandMcpApp: tw,
                        summary: tk,
                        summaryIcon: tN,
                        toolActivityTurnKey: tC
                    } = e,
                    tM = void 0 !== th && th,
                    tS = void 0 !== tg && tg,
                    tI = void 0 === tv || tv,
                    tT = void 0 === tj || tj,
                    tR = void 0 === tk ? null : tk,
                    tA = (0, d.y)(Q.a);
                tu[0] !== tf || tu[1] !== tx || tu[2] !== tp ? (t = {
                    item: tp,
                    hostId: tx,
                    appInfoOverride: tf
                }, tu[0] = tf, tu[1] = tx, tu[2] = tp, tu[3] = t) : t = tu[3];
                let {
                    matchingApp: t_,
                    pluginIcon: tP
                } = (0, ep.c)(t), tE = (0, h.a)(), {
                    platform: tL
                } = (0, P.a)();
                tu[4] !== tp.callId ? (a = (0, u.Xe)(tp.callId), tu[4] = tp.callId, tu[5] = a) : a = tu[5];
                let tU = a,
                    tD = (0, d.x)(K.s, tU),
                    tO = (0, d.x)(K.i, tU),
                    tz = tO?.content.toolCallStatus == null && tO?.content.toolResult != null;
                tu[6] !== tx || tu[7] !== tp || tu[8] !== tD || tu[9] !== tz ? (r = (0, eh.a)({
                    item: tp,
                    hostId: tx,
                    retainedState: {
                        sourceId: tD,
                        hasSuccessfulToolResult: tz
                    }
                }), tu[6] = tx, tu[7] = tp, tu[8] = tD, tu[9] = tz, tu[10] = r) : r = tu[10];
                let tH = r;
                tu[11] !== tH || tu[12] !== tT ? (j = tT && (0, et.c)() && tH.isEligible, tu[11] = tH, tu[12] = tT, tu[13] = j) : j = tu[13];
                let tJ = j;
                tu[14] !== tm || tu[15] !== tp.callId ? (M = (0, el.a)({
                    callId: tp.callId,
                    conversationId: tm
                }), tu[14] = tm, tu[15] = tp.callId, tu[16] = M) : M = tu[16];
                let tW = M,
                    tF = (0, d.x)(el.c, tW),
                    tK = (0, Z.h)("2957382457"),
                    tq = (0, d.z)(f.a);
                tu[17] !== tO ? (A = null == tO ? null : {
                    resourceUri: tO.content.mcpAppScope.originResourceUri,
                    toolResult: null == tO.content.toolCallStatus ? tO.content.toolResult : null
                }, tu[17] = tO, tu[18] = A) : A = tu[18], tu[19] !== tm || tu[20] !== tJ ? (L = tJ || !tm.startsWith("chatgpt:"), tu[19] = tm, tu[20] = tJ, tu[21] = L) : L = tu[21], tu[22] !== tm || tu[23] !== tx || tu[24] !== tp || tu[25] !== tJ || tu[26] !== A || tu[27] !== L ? (z = {
                    item: tp,
                    hostId: tx,
                    conversationId: tm,
                    fallback: A,
                    enabled: tJ,
                    catalogEnabled: L
                }, tu[22] = tm, tu[23] = tx, tu[24] = tp, tu[25] = tJ, tu[26] = A, tu[27] = L, tu[28] = z) : z = tu[28];
                let tV = (0, ep.a)(z),
                    {
                        isCodexAppsToolCall: tB,
                        successfulToolResult: tG,
                        resourceUri: tQ,
                        toolDefinition: tZ
                    } = tV,
                    {
                        elementHeightPx: t$,
                        elementRef: tY
                    } = (0, ei.a)(),
                    tX = tp.result?.type === "success" ? tp.result.content : null,
                    t1 = tp.result?.type === "error" ? tp.result.error : null;
                tu[29] !== tp || tu[30] !== tL ? (G = (0, eo.e)({
                    item: tp,
                    platform: tL
                }), tu[29] = tp, tu[30] = tL, tu[31] = G) : G = tu[31];
                let t0 = G,
                    t2 = t0?.nativeAppReference ?? null,
                    t3 = (0, ed.b)(t2),
                    t4 = t3?.appPath ?? null;
                tu[32] !== t4 ? (Y = {
                    appPath: t4
                }, tu[32] = t4, tu[33] = Y) : Y = tu[33];
                let {
                    iconSmall: t5
                } = (0, w.a)(Y);
                tu[34] !== tp || tu[35] !== t_ || tu[36] !== tN ? (X = void 0 === tN ? (0, ec.d)(tp, null == t_ ? [] : [t_])?.icon : tN, tu[34] = tp, tu[35] = t_, tu[36] = tN, tu[37] = X) : X = tu[37];
                let t8 = X;
                if (void 0 === tN && null != t8) {
                    let e, t;
                    tu[38] !== t_ ? (e = null == t_ ? [] : [t_], tu[38] = t_, tu[39] = e) : e = tu[39], tu[40] !== t8 || tu[41] !== tp || tu[42] !== tI || tu[43] !== e ? (t = (0, n.jsx)(B.a, {
                        item: tp,
                        apps: e,
                        part: "icon",
                        loadMetadata: tI,
                        children: t8
                    }), tu[40] = t8, tu[41] = tp, tu[42] = tI, tu[43] = e, tu[44] = t) : t = tu[44], t8 = t
                }
                tu[45] !== tp.source?.kind || tu[46] !== tG ? (ey = tp.source?.kind === "browserUse" && null != tG ? (0, eo.c)(tG._meta) : null, tu[45] = tp.source?.kind, tu[46] = tG, tu[47] = ey) : ey = tu[47];
                let t6 = ey,
                    t7 = tq && !tM && tp.completed && (0, u.fi)(tp.invocation.server) && "js" === tp.invocation.tool && null != tG ? (0, es.a)(tG._meta) : [],
                    t9 = t_ ?? null;
                tu[48] !== tE || tu[49] !== tp.appContext || tu[50] !== tp.completed || tu[51] !== tp.invocation.arguments || tu[52] !== tp.invocation.server || tu[53] !== tp.invocation.tool || tu[54] !== tp.pluginId || tu[55] !== tp.result || tu[56] !== tp.source || tu[57] !== tp.toolDisplay || tu[58] !== t3 || tu[59] !== tL || tu[60] !== t9 || tu[61] !== tZ ? (eR = (0, eg.a)({
                    pluginId: tp.pluginId,
                    toolDisplay: tp.toolDisplay,
                    toolDefinition: tZ,
                    appContext: tp.appContext,
                    completed: tp.completed,
                    intl: tE,
                    toolName: tp.invocation.tool,
                    serverName: tp.invocation.server,
                    matchingApp: t9,
                    nativeDesktopAppMetadata: t3,
                    platform: tL,
                    source: tp.source,
                    toolArguments: tp.invocation.arguments,
                    toolResult: tp.result
                }), tu[48] = tE, tu[49] = tp.appContext, tu[50] = tp.completed, tu[51] = tp.invocation.arguments, tu[52] = tp.invocation.server, tu[53] = tp.invocation.tool, tu[54] = tp.pluginId, tu[55] = tp.result, tu[56] = tp.source, tu[57] = tp.toolDisplay, tu[58] = t3, tu[59] = tL, tu[60] = t9, tu[61] = tZ, tu[62] = eR) : eR = tu[62];
                let ae = eR,
                    at = tJ && null != tQ && tH.isRenderable,
                    [aa, an] = (0, m.useState)(!1),
                    {
                        resource: ao,
                        renderData: al,
                        state: ai,
                        refetch: as
                    } = (0, ep.b)(tV, at),
                    ar = tO?.sessionId == null ? null : tO.content.resource,
                    ac = null == ar ? ao?.resourceIdentityVerified : tO?.content.mcpAppScope.resourceIdentityVerified,
                    ad = null == ar ? ai.error : null,
                    au = at && null == ar && ai.isLoading,
                    ap = (0, d.x)(K.p, tU),
                    am = (0, d.x)(K.n, tU);
                tu[63] !== ar || tu[64] !== au || tu[65] !== tK || tu[66] !== ad || tu[67] !== al || tu[68] !== tQ || tu[69] !== at ? (eA = "html" === (e_ = (0, H.a)({
                    hasResourceError: null != ad,
                    isResourceLoading: au,
                    isDilEnabled: !1,
                    renderData: ar ?? al,
                    resourceUri: tQ ?? null,
                    shouldRenderMcpApp: at
                })).kind ? e_.renderData : null, eP = (0, W.d)({
                    data: eA,
                    error: ad,
                    isLoading: au
                }, K.E), tu[63] = ar, tu[64] = au, tu[65] = tK, tu[66] = ad, tu[67] = al, tu[68] = tQ, tu[69] = at, tu[70] = eA, tu[71] = e_, tu[72] = eP) : (eA = tu[70], e_ = tu[71], eP = tu[72]);
                let ah = eP,
                    ag = "fallback" !== e_.kind,
                    ax = tJ && null != tQ && (!ag || null != ad || null != ap && !(ap instanceof W.b) || "too-large" === ah.kind || "error" === ah.kind),
                    av = ax || (eA?.isCollapsible ?? !0),
                    af = am;
                ax ? af = "fallback" : "html" !== e_.kind && (af = e_.kind);
                let ab = "pending" === af,
                    ay = "launcher" === af,
                    aj = ab || ay;
                tu[73] !== tO ? (eE = null != tO && tO.content.resource?.hideAttribution === !0 && (!0 === tO.content.mcpAppScope.isVerifiedFirstParty || (0, em.b)(tO.content)), tu[73] = tO, tu[74] = eE) : eE = tu[74];
                let aw = eE,
                    ak = "inline" === af,
                    aN = void 0 !== tw && tw && at,
                    aC = !ax && aa || aN,
                    aM = ag && !ay && (!av || (tF ?? aC)),
                    aS = aM && !ab,
                    aI = aa || (tF ?? aN),
                    [aT, aR] = (0, m.useState)(!1),
                    aA = ak && aS && aT,
                    a_ = au || ab && aM;
                tu[75] !== aM || tu[76] !== aA || tu[77] !== a_ ? (eL = {
                    isLoading: a_,
                    isInlineRequested: aM,
                    isInlineOpening: aA
                }, tu[75] = aM, tu[76] = aA, tu[77] = a_, tu[78] = eL) : eL = tu[78];
                let aP = (0, U.c)(tU, eL),
                    aE = !ax && (ab || "html" === e_.kind) ? aP : null;
                tu[79] !== tZ ? (eU = (0, F.b)(tZ)?.resourceUri, tu[79] = tZ, tu[80] = eU) : eU = tu[80];
                let aL = eU,
                    aU = tG?._meta;
                tu[81] !== aU ? (eD = c()(aU, ["_codex_apps", "resource_uri"]), tu[81] = aU, tu[82] = eD) : eD = tu[82];
                let aD = eD;
                tu[83] !== aL || tu[84] !== tB || tu[85] !== tQ || tu[86] !== aD || tu[87] !== tZ?._meta ? (eO = tB && null != aL && aD === aL && (0, u.Cg)(tZ?._meta) === tQ, tu[83] = aL, tu[84] = tB, tu[85] = tQ, tu[86] = aD, tu[87] = tZ?._meta, tu[88] = eO) : eO = tu[88];
                let aO = eO;
                tu[89] !== eA || tu[90] !== av || tu[91] !== ab || tu[92] !== af || tu[93] !== ac || tu[94] !== aO || tu[95] !== aE ? (ez = aO && !0 === ac && (0, U.b)({
                    isInline: !av && ("inline" === af || ab),
                    status: aE,
                    hidesAttributionAndActions: eA?.hideAttribution === !0 && !0 === eA.hideActions
                }), tu[89] = eA, tu[90] = av, tu[91] = ab, tu[92] = af, tu[93] = ac, tu[94] = aO, tu[95] = aE, tu[96] = ez) : ez = tu[96];
                let az = !ez && (aj || !tM && (av || "html" === e_.kind && !aw));
                tu[97] !== tB || tu[98] !== tp.appContext?.appName || tu[99] !== tp.invocation.server || tu[100] !== t_?.name || tu[101] !== tP?.alt ? (eH = t_?.name ?? tp.appContext?.appName ?? tP?.alt ?? (tB ? null : (0, p.a)(tp.invocation.server)), tu[97] = tB, tu[98] = tp.appContext?.appName, tu[99] = tp.invocation.server, tu[100] = t_?.name, tu[101] = tP?.alt, tu[102] = eH) : eH = tu[102];
                let aH = eH;
                tu[103] !== aH || tu[104] !== tZ ? (eJ = (0, U.a)((0, x.a)(tZ), aH), tu[103] = aH, tu[104] = tZ, tu[105] = eJ) : eJ = tu[105];
                let aJ = eJ,
                    aW = ax ? tM || aa : !aj && (tM || (ag ? aS : aI));
                e: {
                    let e, t, a, n;
                    if (!aW) {
                        let e;
                        tu[106] !== tX ? (e = {
                            displayContent: tX,
                            displayStructuredContentJson: null
                        }, tu[106] = tX, tu[107] = e) : e = tu[107], eW = e;
                        break e
                    }
                    tu[108] !== tp.result ? (e = tp.result?.type === "success" && null != tp.result.structuredContent ? eI(tp.result.structuredContent, 2) : null, tu[108] = tp.result, tu[109] = e) : e = tu[109];
                    let o = e;tu[110] !== tX || tu[111] !== tS || tu[112] !== o ? (t = tS && null != o && null != tX ? tX.filter(eC) : tX, tu[110] = tX, tu[111] = tS, tu[112] = o, tu[113] = t) : t = tu[113];
                    let l = t;tu[114] !== l ? (a = function(e) {
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
                    }(l), tu[114] = l, tu[115] = a) : a = tu[115];
                    let i = a;
                    if (null == i) {
                        let e;
                        tu[116] !== o || tu[117] !== l ? (e = {
                            displayContent: l,
                            displayStructuredContentJson: o
                        }, tu[116] = o, tu[117] = l, tu[118] = e) : e = tu[118], eW = e;
                        break e
                    }
                    if (null == o || i === o) {
                        let e, t;
                        tu[119] === Symbol.for("react.memo_cache_sentinel") ? (e = [], tu[119] = e) : e = tu[119];
                        let a = o ?? i;
                        tu[120] !== a ? (t = {
                            displayContent: e,
                            displayStructuredContentJson: a
                        }, tu[120] = a, tu[121] = t) : t = tu[121], eW = t;
                        break e
                    }
                    tu[122] !== o || tu[123] !== l ? (n = {
                        displayContent: l,
                        displayStructuredContentJson: o
                    }, tu[122] = o, tu[123] = l, tu[124] = n) : n = tu[124],
                    eW = n
                }
                let {
                    displayContent: aF,
                    displayStructuredContentJson: aK
                } = eW, [aq, aV] = (0, m.useState)(!1);
                t: {
                    let e;
                    if (!aq) {
                        eF = null;
                        break t
                    }
                    tu[125] !== tp.callId || tu[126] !== tp.durationMs || tu[127] !== tp.invocation || tu[128] !== tp.result ? (e = eI({
                        callId: tp.callId,
                        invocation: tp.invocation,
                        durationMs: tp.durationMs,
                        result: tp.result
                    }, 2), tu[125] = tp.callId, tu[126] = tp.durationMs, tu[127] = tp.invocation, tu[128] = tp.result, tu[129] = e) : e = tu[129],
                    eF = e
                }
                let aB = eF;
                tu[130] !== tE ? (eK = tE.formatMessage({
                    id: "codex.mcpTool.rawOutputTriggerTooltip",
                    defaultMessage: "Show raw tool call output",
                    description: "Tooltip for the button that opens the raw MCP tool output dialog"
                }), tu[130] = tE, tu[131] = eK) : eK = tu[131];
                let aG = eK,
                    aQ = tp.completed || null != tp.result || ag,
                    aZ = aW ? t$ : 0,
                    a$ = !tp.completed;
                tu[132] !== t_ ? (eq = null == t_ ? [] : [t_], tu[132] = t_, tu[133] = eq) : eq = tu[133], tu[134] !== tp || tu[135] !== tI || tu[136] !== eq || tu[137] !== ae ? (eV = (0, n.jsx)(B.a, {
                    item: tp,
                    apps: eq,
                    part: "label",
                    loadMetadata: tI,
                    children: ae
                }), tu[134] = tp, tu[135] = tI, tu[136] = eq, tu[137] = ae, tu[138] = eV) : eV = tu[138], tu[139] !== a$ || tu[140] !== eV ? (eB = (0, n.jsx)(ex.a, {
                    active: a$,
                    className: "min-w-0 shrink truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                    children: eV
                }), tu[139] = a$, tu[140] = eV, tu[141] = eB) : eB = tu[141];
                let aY = eB;
                tu[142] !== t8 || tu[143] !== t6 || tu[144] !== tx || tu[145] !== tp || tu[146] !== tI || tu[147] !== t_ || tu[148] !== t5 || tu[149] !== t3?.displayName || tu[150] !== t2 || tu[151] !== t0 || tu[152] !== tP ? (eG = void 0 !== t8 ? t8 : (0, n.jsx)(ea.a, {
                    hostId: tx,
                    item: tp,
                    loadRemoteLogos: tI,
                    fallback: null == tP && null != t2 ? (0, n.jsx)(k.a, {
                        alt: t3?.displayName ?? t0?.name ?? tp.invocation.server,
                        className: "icon-xs shrink-0 scale-[1.15] object-contain",
                        loadRemote: tI,
                        logoUrl: t5,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(R.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: ej.a
                        })
                    }) : null == tP && t0?.groupKey === eo.b ? (0, n.jsx)(R.a, {
                        className: "shrink-0 text-secondary",
                        asset: ej.a
                    }) : null == tP && t0?.logoUrl != null ? (0, n.jsx)(k.a, {
                        alt: t0.name,
                        className: "icon-xs shrink-0 object-contain",
                        loadRemote: tI,
                        logoUrl: t0.logoUrl,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(R.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: ew.a
                        })
                    }) : null == tP && t0?.usesBrowserIcon === !0 ? null == t6 ? (0, n.jsx)(R.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: eN.a
                    }) : (0, n.jsx)(T.a, {
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        href: t6,
                        loadRemote: tI
                    }) : null == tP && (0, u.fi)(tp.invocation.server) ? (0, n.jsx)(R.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: ek.a
                    }) : (0, n.jsx)(k.a, {
                        alt: tP?.alt ?? t_?.name ?? tp.appContext?.appName ?? tp.invocation.server,
                        appInfo: null == tP ? t_ : null,
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        loadRemote: tI,
                        knownAppId: tP?.knownAppId ?? tp.appContext?.appName ?? tp.appContext?.connectorId,
                        logoUrl: tP?.logoUrl,
                        fallback: (0, n.jsx)(R.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: ew.a
                        })
                    })
                }), tu[142] = t8, tu[143] = t6, tu[144] = tx, tu[145] = tp, tu[146] = tI, tu[147] = t_, tu[148] = t5, tu[149] = t3?.displayName, tu[150] = t2, tu[151] = t0, tu[152] = tP, tu[153] = eG) : eG = tu[153];
                let aX = eG;
                tu[154] !== tR || tu[155] !== aX || tu[156] !== aY ? (eQ = tR ?? (0, n.jsxs)(n.Fragment, {
                    children: [aX, aY]
                }), tu[154] = tR, tu[155] = aX, tu[156] = aY, tu[157] = eQ) : eQ = tu[157];
                let a1 = eQ;
                tu[158] !== aI || tu[159] !== aM || tu[160] !== aa || tu[161] !== tW || tu[162] !== tb || tu[163] !== tA || tu[164] !== aN || tu[165] !== ax || tu[166] !== ag || tu[167] !== ak || tu[168] !== tC || tu[169] !== tF ? (eZ = () => {
                    if (ax) {
                        aa || tb?.(), an(!aa);
                        return
                    }
                    let e = ag ? !aM : !aI;
                    if (e && tb?.(), ag) {
                        aR(e && ak), (0, el.e)(tA, tW, e);
                        return
                    }
                    e && null != tC && (0, el.d)(tA, tC), !e && (!0 === tF || aN) && (0, el.e)(tA, tW, !1), an(e)
                }, tu[158] = aI, tu[159] = aM, tu[160] = aa, tu[161] = tW, tu[162] = tb, tu[163] = tA, tu[164] = aN, tu[165] = ax, tu[166] = ag, tu[167] = ak, tu[168] = tC, tu[169] = tF, tu[170] = eZ) : eZ = tu[170];
                let a0 = eZ;
                tu[171] !== tp.automaticApprovalReviews ? (e$ = null == tp.automaticApprovalReviews ? null : (0, n.jsx)(ee.a, {}), tu[171] = tp.automaticApprovalReviews, tu[172] = e$) : e$ = tu[172];
                let a2 = e$;
                tu[173] !== aQ || tu[174] !== a0 || tu[175] !== av || tu[176] !== aW || tu[177] !== aS || tu[178] !== ay || tu[179] !== ak || tu[180] !== aE ? (eY = aQ && "opening" !== aE && !ay && av ? {
                    alignEnd: ak && aS,
                    expanded: aW,
                    onToggle: a0
                } : void 0, tu[173] = aQ, tu[174] = a0, tu[175] = av, tu[176] = aW, tu[177] = aS, tu[178] = ay, tu[179] = ak, tu[180] = aE, tu[181] = eY) : eY = tu[181];
                let a3 = eY,
                    a4 = ak && aS && (eA?.prefersBorder ?? tO?.content.resource?.prefersBorder ?? !0) && "overflow-hidden rounded-lg border border-strong bg-surface";
                tu[182] !== a4 ? (eX = (0, i.b)("group", a4), tu[182] = a4, tu[183] = eX) : eX = tu[183];
                let a5 = eX,
                    a8 = ay && "w-full",
                    a6 = ak && aS && "w-full px-4 pt-3 pb-2";
                tu[184] !== a8 || tu[185] !== a6 ? (e1 = (0, i.b)(a8, a6), tu[184] = a8, tu[185] = a6, tu[186] = e1) : e1 = tu[186];
                let a7 = e1;
                tu[187] !== a2 || tu[188] !== a3 || tu[189] !== a7 || tu[190] !== au || tu[191] !== tU || tu[192] !== a1 || tu[193] !== aX || tu[194] !== aJ || tu[195] !== aE ? (e0 = null != aE ? (0, n.jsx)(D.a, {
                    accessory: a2,
                    className: a7,
                    disabled: au,
                    disclosure: a3,
                    icon: aX,
                    mcpAppId: tU,
                    name: aJ,
                    status: aE
                }) : (0, n.jsx)(ef.a, {
                    accessory: a2,
                    className: a7,
                    disclosure: a3,
                    children: a1
                }), tu[187] = a2, tu[188] = a3, tu[189] = a7, tu[190] = au, tu[191] = tU, tu[192] = a1, tu[193] = aX, tu[194] = aJ, tu[195] = aE, tu[196] = e0) : e0 = tu[196];
                let a9 = e0,
                    ne = null == tQ ? null : eA;
                tu[197] !== au || tu[198] !== ad || tu[199] !== ne ? (e2 = {
                    data: ne,
                    error: ad,
                    isLoading: au
                }, tu[197] = au, tu[198] = ad, tu[199] = ne, tu[200] = e2) : e2 = tu[200];
                let nt = ak ? "card" : "standalone",
                    na = aH ?? void 0,
                    nn = ax ? "inline" : am;
                tu[201] !== as ? (e3 = () => {
                    as({
                        cancelRefetch: !1
                    })
                }, tu[201] = as, tu[202] = e3) : e3 = tu[202];
                let no = !az;
                tu[203] !== tU || tu[204] !== e2 || tu[205] !== nt || tu[206] !== na || tu[207] !== nn || tu[208] !== e3 || tu[209] !== no ? (e4 = (0, n.jsx)(J.b, {
                    hostDisplayModes: K.E,
                    resource: e2,
                    inlineSurface: nt,
                    mcpAppId: tU,
                    pluginName: na,
                    presentation: nn,
                    onRetryResourceRead: e3,
                    showLoadingStatus: no
                }), tu[203] = tU, tu[204] = e2, tu[205] = nt, tu[206] = na, tu[207] = nn, tu[208] = e3, tu[209] = no, tu[210] = e4) : e4 = tu[210];
                let nl = e4,
                    ni = +!!aW;
                tu[211] !== ni || tu[212] !== aZ ? (e5 = {
                    height: aZ,
                    opacity: ni
                }, tu[211] = ni, tu[212] = aZ, tu[213] = e5) : e5 = tu[213];
                let ns = aW ? "overflow-visible" : "overflow-hidden";
                tu[214] !== ns ? (e8 = (0, i.b)(ns), tu[214] = ns, tu[215] = e8) : e8 = tu[215];
                let nr = aW ? "auto" : "none";
                tu[216] !== nr ? (e6 = {
                    pointerEvents: nr
                }, tu[216] = nr, tu[217] = e6) : e6 = tu[217], tu[218] !== aS ? (e7 = () => {
                    aS && aR(!1)
                }, tu[218] = aS, tu[219] = e7) : e7 = tu[219];
                let nc = aW ? tY : null,
                    nd = at && "relative",
                    nu = !av && "py-1";
                tu[220] !== nd || tu[221] !== nu ? (e9 = (0, i.b)(nd, nu), tu[220] = nd, tu[221] = nu, tu[222] = e9) : e9 = tu[222];
                let np = !ak && av ? "grouped" : "flush";
                tu[223] !== tm || tu[224] !== aF || tu[225] !== aK || tu[226] !== eA?.heightHint || tu[227] !== eA?.minFrameHeight || tu[228] !== e_.kind || tu[229] !== t1 || tu[230] !== tx || tu[231] !== aW || tu[232] !== au || tu[233] !== aq || tu[234] !== tp.automaticApprovalReviews || tu[235] !== tp.invocation.server || tu[236] !== tp.invocation.tool || tu[237] !== nl || tu[238] !== aG || tu[239] !== aB || tu[240] !== ag || tu[241] !== at || tu[242] !== aA || tu[243] !== ak ? (te = aW ? (0, n.jsxs)(n.Fragment, {
                    children: [null == tp.automaticApprovalReviews ? null : (0, n.jsx)(ee.d, {
                        className: ak ? "px-4" : void 0,
                        isExpandable: !ak,
                        reviews: tp.automaticApprovalReviews
                    }), ag ? aA ? (0, n.jsx)(eS, {
                        heightHint: eA?.heightHint ?? null,
                        minFrameHeight: eA?.minFrameHeight ?? null
                    }) : nl : aF && aF.length > 0 ? (0, n.jsx)("div", {
                        className: (0, i.b)("[&_*]:text-text/50", "flex flex-col gap-0.5"),
                        children: aF.map((e, t) => (0, n.jsx)(eT, {
                            block: e,
                            conversationId: tm,
                            hostId: tx
                        }, t))
                    }) : t1 ? (0, n.jsx)(_.a, {
                        className: "w-full",
                        fullWidth: !0,
                        level: "danger",
                        children: (0, n.jsx)("div", {
                            className: "max-h-48 overflow-auto text-size-chat whitespace-pre-wrap",
                            children: t1
                        })
                    }) : aK ? null : (0, n.jsx)("p", {
                        className: "text-codex-description/80",
                        children: (0, n.jsx)(g.a, {
                            id: "codex.mcpTool.noResult",
                            defaultMessage: "Tool returned no content",
                            description: "Message shown when an MCP tool call produced no content"
                        })
                    }), !au && aW && !aA && !ag && aK && (0, n.jsx)(C.CodeSnippet, {
                        codeContainerClassName: "max-h-48 overflow-auto",
                        language: "json",
                        content: aK,
                        showStickyRightContent: !1
                    }), !au && aW && !aA && (0, n.jsx)(S.a, {
                        open: aq,
                        onOpenChange: aV,
                        triggerContent: (0, n.jsx)("div", {
                            className: (0, i.b)("inline-flex w-fit", at && "absolute right-1 bottom-2 z-50"),
                            children: (0, n.jsx)(l.a, {
                                side: "top",
                                align: "center",
                                content: aG,
                                children: (0, n.jsx)(N.a, {
                                    className: "cursor-interaction opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 focus-visible:opacity-100",
                                    "aria-label": aG,
                                    color: "ghost",
                                    onClick: () => {
                                        aV(!0)
                                    },
                                    size: "icon",
                                    children: (0, n.jsx)(E.a, {
                                        className: "icon-xxs"
                                    })
                                })
                            })
                        }),
                        children: (0, n.jsxs)(I.b, {
                            children: [(0, n.jsx)(I.e, {
                                children: (0, n.jsx)(I.d, {
                                    title: (0, n.jsx)(S.d, {
                                        children: (0, n.jsx)(g.a, {
                                            id: "codex.mcpTool.rawOutputHeading",
                                            defaultMessage: "Raw {server}.{tool} tool call output",
                                            description: "Heading shown within the raw output dialog",
                                            values: {
                                                server: tp.invocation.server,
                                                tool: tp.invocation.tool
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
                }) : null, tu[223] = tm, tu[224] = aF, tu[225] = aK, tu[226] = eA?.heightHint, tu[227] = eA?.minFrameHeight, tu[228] = e_.kind, tu[229] = t1, tu[230] = tx, tu[231] = aW, tu[232] = au, tu[233] = aq, tu[234] = tp.automaticApprovalReviews, tu[235] = tp.invocation.server, tu[236] = tp.invocation.tool, tu[237] = nl, tu[238] = aG, tu[239] = aB, tu[240] = ag, tu[241] = at, tu[242] = aA, tu[243] = ak, tu[244] = te) : te = tu[244], tu[245] !== nc || tu[246] !== e9 || tu[247] !== np || tu[248] !== te ? (tt = (0, n.jsx)(ev.a, {
                    ref: nc,
                    className: e9,
                    variant: np,
                    children: te
                }), tu[245] = nc, tu[246] = e9, tu[247] = np, tu[248] = te, tu[249] = tt) : tt = tu[249], tu[250] !== e5 || tu[251] !== e8 || tu[252] !== e6 || tu[253] !== e7 || tu[254] !== tt ? (ta = (0, n.jsx)(s.a.div, {
                    initial: !1,
                    animate: e5,
                    transition: $.a,
                    className: e8,
                    style: e6,
                    onAnimationComplete: e7,
                    children: tt
                }), tu[250] = e5, tu[251] = e8, tu[252] = e6, tu[253] = e7, tu[254] = tt, tu[255] = ta) : ta = tu[255];
                let nm = ta;
                tu[256] !== tp || tu[257] !== ty ? (tn = (0, en.a)(tp) ? (0, n.jsx)(ev.a, {
                    variant: "grouped",
                    children: (0, n.jsx)(_.a, {
                        className: "w-full",
                        fullWidth: !0,
                        level: "warning",
                        actions: null == ty ? void 0 : (0, n.jsx)(N.a, {
                            color: "secondary",
                            onClick: ty,
                            children: (0, n.jsx)(g.a, {
                                id: "codex.mcpTool.reviewPermissions",
                                defaultMessage: "Review permissions",
                                description: "Opens the existing permissions menu for the chat whose tool call could not request approval"
                            })
                        }),
                        children: null == ty ? (0, n.jsx)(g.a, {
                            id: "codex.mcpTool.approvalRequestsDisabled",
                            defaultMessage: "Approval requests were disabled for this tool call. If available, review this chat’s permissions before retrying.",
                            description: "Explanation on a failed MCP tool call that needed approval but could not request it. Suggests the existing permissions control for this chat, which may be unavailable in read-only views or restricted by policy. Does not promise that restrictions can be overridden."
                        }) : (0, n.jsx)(g.a, {
                            id: "codex.mcpTool.approvalRequestsDisabled.recovery",
                            defaultMessage: "Approval requests were disabled for this tool call. Choose “Ask for approval” in this chat’s permissions if available, then ask to retry.",
                            description: "Explains that the tool call was blocked before approval could be requested. The adjacent action opens this chat's permissions menu; the user must select an allowed mode and ask to retry. Managed policy may limit the available modes."
                        })
                    })
                }) : null, tu[256] = tp, tu[257] = ty, tu[258] = tn) : tn = tu[258];
                let nh = aj ? nl : nm;
                tu[259] !== tn || tu[260] !== nh ? (to = (0, n.jsxs)(n.Fragment, {
                    children: [tn, nh]
                }), tu[259] = tn, tu[260] = nh, tu[261] = to) : to = tu[261];
                let ng = to;
                tu[262] !== tp ? (tl = (0, v.a)(tp), tu[262] = tp, tu[263] = tl) : tl = tu[263];
                let nx = tl;
                if (null != nx) {
                    let e;
                    return tu[264] !== nx.id || tu[265] !== nx.schedule || tu[266] !== nx.title ? (e = (0, n.jsx)(O.a, {
                        id: nx.id,
                        mode: "view",
                        name: nx.title,
                        rrule: nx.schedule
                    }), tu[264] = nx.id, tu[265] = nx.schedule, tu[266] = nx.title, tu[267] = e) : e = tu[267], e
                }
                tu[268] !== tx || tu[269] !== tp ? (ti = (0, V.b)(tp, tx), tu[268] = tx, tu[269] = tp, tu[270] = ti) : ti = tu[270];
                let nv = ti;
                if (nv?.type === "chatgpt-automation") {
                    let e;
                    return tu[271] !== nv ? (e = (0, n.jsx)(b.a, {
                        automation: nv
                    }), tu[271] = nv, tu[272] = e) : e = tu[272], e
                }
                if (nv?.type === "chatgpt-automation-list") {
                    let e;
                    return tu[273] !== nv.automations ? (e = (0, n.jsx)(y.a, {
                        automations: nv.automations
                    }), tu[273] = nv.automations, tu[274] = e) : e = tu[274], e
                }
                tu[275] !== aM || tu[276] !== tU || tu[277] !== tT || tu[278] !== tA || tu[279] !== at ? (ts = tT || "chatgpt-thread" !== tA.value.routeKind ? (0, n.jsx)(q.a, {
                    mcpAppId: tU,
                    isInlineRequested: at && aM
                }) : null, tu[275] = aM, tu[276] = tU, tu[277] = tT, tu[278] = tA, tu[279] = at, tu[280] = ts) : ts = tu[280], tu[281] !== a2 || tu[282] !== a5 || tu[283] !== a3 || tu[284] !== az || tu[285] !== a7 || tu[286] !== ng || tu[287] !== ak || tu[288] !== tR || tu[289] !== tN || tu[290] !== aY || tu[291] !== a9 || tu[292] !== aE ? (tr = void 0 !== tN && az && null == aE ? (0, n.jsx)(er.a, {
                    accessory: a2,
                    body: ng,
                    className: a5,
                    "data-mcp-app-card": !!ak || void 0,
                    disclosure: a3,
                    headerClassName: a7,
                    icon: tN,
                    summary: tR ?? aY
                }) : (0, n.jsx)(eb.a, {
                    className: a5,
                    "data-mcp-app-card": !!ak || void 0,
                    header: az ? a9 : null,
                    body: ng
                }), tu[281] = a2, tu[282] = a5, tu[283] = a3, tu[284] = az, tu[285] = a7, tu[286] = ng, tu[287] = ak, tu[288] = tR, tu[289] = tN, tu[290] = aY, tu[291] = a9, tu[292] = aE, tu[293] = tr) : tr = tu[293], tu[294] !== t6 || tu[295] !== tp.callId || tu[296] !== tI ? (tc = (e, t) => (0, n.jsxs)(m.Fragment, {
                    children: [(0, n.jsx)(eu.a, {
                        variant: "grouped"
                    }), (0, n.jsx)(eM, {
                        call: e,
                        fallbackPageUrl: t6,
                        loadRemoteLogos: tI
                    })]
                }, `${tp.callId}:webmcp:${t}:${e.name}`), tu[294] = t6, tu[295] = tp.callId, tu[296] = tI, tu[297] = tc) : tc = tu[297];
                let nf = t7.map(tc);
                return tu[298] !== ts || tu[299] !== tr || tu[300] !== nf ? (td = (0, n.jsxs)(n.Fragment, {
                    children: [ts, tr, nf]
                }), tu[298] = ts, tu[299] = tr, tu[300] = nf, tu[301] = td) : td = tu[301], td
            }
        })
    }),
    KU8M: (function(e, t, a) {
        var n = a("iTtm"),
            o = a("bg18"),
            l = a("KJ1J"),
            i = a("ustl"),
            s = a("a4MG"),
            r = a("OWtl"),
            c = a("DKJJ");
        let d = (0, n.d)(r.a, (e, t) => {
                let {
                    hostId: a,
                    threadId: n,
                    ...r
                } = e, {
                    get: d
                } = t;
                if (null == n) return d(s.o, a);
                let u = {
                    hostId: a,
                    threadId: n,
                    serverName: r.server
                };
                if (!(0, l.e)(r.server) || r.appContext?.linkId == null) return d(s.p, u);
                let p = d(s.o, a);
                if (p.isError) return d(s.p, u);
                let m = (0, c.c)({
                    ...r,
                    mcpServerStatuses: p.data
                });
                return void 0 === m || (0, o.Cg)(m?._meta) === r.appContext.resourceUri && null != (0, i.c)(m, r.appContext) ? p : d(s.p, u)
            }),
            u = (0, n.d)(r.a, (e, t) => {
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
            l = a("iTtm"),
            i = a("bg18"),
            s = a("sM3V"),
            r = a("KJ1J"),
            c = a("FvYa"),
            d = a("zUz7"),
            u = a("LF5P");
        a.d(t, {}, {
            a: function(e) {
                let t, a, p, m, h = (0, o.c)(14),
                    {
                        fallback: g,
                        hostId: x,
                        item: v,
                        loadRemoteLogos: f
                    } = e,
                    b = v.invocation.server;
                h[0] !== v.threadId ? (t = (0, i.Oe)(v.threadId), h[0] = v.threadId, h[1] = t) : t = h[1], h[2] !== x || h[3] !== v.invocation.server || h[4] !== t ? (a = {
                    hostId: x,
                    serverName: b,
                    threadId: t
                }, h[2] = x, h[3] = v.invocation.server, h[4] = t, h[5] = a) : a = h[5];
                let y = (0, l.x)(!f || null != (0, u.e)({
                    item: v
                }) || (0, i.fi)(v.invocation.server) || (0, r.e)(v.invocation.server) ? null : s.a, a);
                h[6] !== y ? (p = (0, d.a)(y), h[6] = y, h[7] = p) : p = h[7];
                let j = p;
                return h[8] !== g || h[9] !== j || h[10] !== v.invocation.server || h[11] !== y?.name || h[12] !== y?.title ? (m = null == j ? g : (0, n.jsx)(c.a, {
                    alt: y?.title ?? y?.name ?? v.invocation.server,
                    className: "icon-xs shrink-0 object-contain",
                    logoUrl: j.logoUrl,
                    logoDarkUrl: j.logoDarkUrl,
                    fallback: g
                }), h[8] = g, h[9] = j, h[10] = v.invocation.server, h[11] = y?.name, h[12] = y?.title, h[13] = m) : m = h[13], m
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
            s = a("iTtm"),
            r = a("bg18"),
            c = a("Wf1j"),
            d = a("jqIZ"),
            u = a("qKlE"),
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
                let t, a, l, b, y, j, w, k, N, C = (0, o.c)(134),
                    {
                        elicitation: M,
                        result: S,
                        id: I,
                        kind: T,
                        mode: R,
                        name: A,
                        prompt: _,
                        rrule: P,
                        projectId: E,
                        cwds: L,
                        destination: U,
                        executionEnvironment: D,
                        localEnvironmentConfigPath: O,
                        model: z,
                        reasoningEffort: H,
                        notificationPolicy: J,
                        targetThreadId: W,
                        status: F
                    } = e,
                    K = void 0 === S ? null : S,
                    q = (0, s.y)(v.a),
                    V = (0, c.a)();
                (0, g.a)();
                let B = (0, d.Z)("/remote/:conversationId"),
                    G = (0, d.Z)("/local/:conversationId"),
                    Q = (0, s.z)(h.e),
                    Z = W ?? null;
                C[0] !== L || C[1] !== U || C[2] !== D || C[3] !== I || C[4] !== T || C[5] !== O || C[6] !== R || C[7] !== z || C[8] !== A || C[9] !== J || C[10] !== E || C[11] !== _ || C[12] !== H || C[13] !== Z || C[14] !== P || C[15] !== F ? (t = JSON.stringify({
                    id: I,
                    kind: T,
                    mode: R,
                    name: A,
                    prompt: _,
                    rrule: P,
                    projectId: E,
                    cwds: L,
                    destination: U,
                    executionEnvironment: D,
                    localEnvironmentConfigPath: O,
                    model: z,
                    reasoningEffort: H,
                    notificationPolicy: J,
                    targetThreadId: Z,
                    status: F
                }), C[0] = L, C[1] = U, C[2] = D, C[3] = I, C[4] = T, C[5] = O, C[6] = R, C[7] = z, C[8] = A, C[9] = J, C[10] = E, C[11] = _, C[12] = H, C[13] = Z, C[14] = P, C[15] = F, C[16] = t) : t = C[16];
                let $ = t,
                    Y = Q?.directiveKey === $ ? Q.automationId : null,
                    X = Y ?? K?.automationId ?? I,
                    ee = K?.snapshot ?? null,
                    et = "view" === R ? R : null,
                    ea = "view" === R && null != I,
                    en = null != I && (ea || "suggested-update" === R),
                    eo = (0, s.z)(u.c),
                    el = eo.data,
                    ei = !!en && eo.isLoading;
                if (C[17] !== el?.items || C[18] !== eo.isLoading || C[19] !== Y || C[20] !== L || C[21] !== $ || C[22] !== et || C[23] !== M || C[24] !== D || C[25] !== I || C[26] !== V || C[27] !== ei || C[28] !== ea || C[29] !== T || C[30] !== O || C[31] !== G || C[32] !== R || C[33] !== z || C[34] !== A || C[35] !== J || C[36] !== E || C[37] !== _ || C[38] !== H || C[39] !== B || C[40] !== X || C[41] !== Z || C[42] !== K?.automationId || C[43] !== K?.deleteStatus || C[44] !== K?.mode || C[45] !== ee?.name || C[46] !== ee?.rrule || C[47] !== P || C[48] !== q || C[49] !== en || C[50] !== F) {
                    var es;
                    let e, t, n, o, s, c, d, u, p, g, v, f, k, N, S = null != I ? el?.items.find(e => e.id === I) ?? null : null;
                    C[57] !== el?.items || C[58] !== Y || C[59] !== V || C[60] !== ei || C[61] !== ea || C[62] !== R || C[63] !== A || C[64] !== X || C[65] !== K?.mode || C[66] !== ee?.name || C[67] !== ee?.rrule || C[68] !== P ? ({
                        resolvedName: b,
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
                        isViewMode: ea,
                        mode: K?.mode ?? R,
                        isSuggestionAccepted: null != Y,
                        trimmedId: X ?? null,
                        trimmedName: A ?? ee?.name ?? null,
                        trimmedRrule: P ?? ee?.rrule ?? null,
                        automations: el?.items ?? null,
                        isLoading: ei
                    }), o = V.formatMessage({
                        id: "settings.automations.rruleSummaryFallback",
                        defaultMessage: "Custom schedule",
                        description: "Fallback label when RRULE summary cannot be generated"
                    }), s = (0, m.f)({
                        rrule: n,
                        intl: V,
                        fallbackMessage: o
                    }), C[57] = el?.items, C[58] = Y, C[59] = V, C[60] = ei, C[61] = ea, C[62] = R, C[63] = A, C[64] = X, C[65] = K?.mode, C[66] = ee?.name, C[67] = ee?.rrule, C[68] = P, C[69] = t, C[70] = b, C[71] = n, C[72] = o, C[73] = s) : (t = C[69], b = C[70], n = C[71], o = C[72], s = C[73]);
                    let U = s;
                    C[74] !== V ? (c = V.formatMessage({
                        id: "settings.automations.loading",
                        defaultMessage: "Loading…",
                        description: "Loading state for workflows list"
                    }), C[74] = V, C[75] = c) : c = C[75];
                    let W = c;
                    C[76] !== V ? (d = V.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task",
                        description: "Fallback title when scheduled task name is missing"
                    }), C[76] = V, C[77] = d) : d = C[77];
                    let Q = d,
                        er = K?.mode ?? R,
                        ec = "delete" === er,
                        ed = ec || K?.automationId != null ? K?.automationId ?? I ?? null : X;
                    C[78] !== ed || C[79] !== ec ? (u = ec ? (es = ed ?? null, 0 === (e = es?.trim() ?? "").length ? null : /^[0-9a-f]{8}-[0-9a-f-]+$/i.test(e) ? e : i()(e.replace(/[-_]+/g, " "))) : null, C[78] = ed, C[79] = ec, C[80] = u) : u = C[80];
                    let eu = u;
                    w = t ? W : b || eu || Q, C[81] !== eu || C[82] !== V || C[83] !== b ? (p = b ?? eu ?? V.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task",
                        description: "Fallback title when scheduled task name is missing"
                    }), C[81] = eu, C[82] = V, C[83] = b, C[84] = p) : p = C[84];
                    let ep = p,
                        em = U || (t ? W : null != n ? o : null),
                        eh = null != A && null != _ && null != P && ("heartbeat" === T ? null != Z : void 0 !== E || null != L),
                        eg = null != I && null != F && null != A && null != _ && null != P && (null == S ? "heartbeat" === T ? null != Z : void 0 !== E || null != L : !!(0, r.Wh)(S) || void 0 !== E || null != L),
                        ex = "suggested-update" === R && en && eo.isLoading,
                        ev = "suggested-create" === R || "suggested-update" === R,
                        ef = ev ? M : void 0,
                        eb = I ?? null,
                        ey = T ?? null,
                        ej = A ?? "",
                        ew = _ ?? "",
                        ek = P ?? "";
                    C[85] !== L ? (g = L ?? [], C[85] = L, C[86] = g) : g = C[86];
                    let eN = void 0 !== E ? E : L?.[0] === r.dd ? null : L?.[0] ?? null,
                        eC = D ?? null,
                        eM = O ?? null,
                        eS = z ?? null,
                        eI = H ?? null;
                    C[87] !== J ? (v = void 0 !== J ? {
                        notificationPolicy: J
                    } : {}, C[87] = J, C[88] = v) : v = C[88];
                    let eT = F ?? null;
                    C[89] !== $ || C[90] !== et || C[91] !== Z || C[92] !== eb || C[93] !== ey || C[94] !== ej || C[95] !== ew || C[96] !== ek || C[97] !== g || C[98] !== eN || C[99] !== eC || C[100] !== eM || C[101] !== eS || C[102] !== eI || C[103] !== v || C[104] !== eT || C[105] !== ef ? (f = {
                        elicitation: ef,
                        directiveKey: $,
                        mode: et,
                        id: eb,
                        kind: ey,
                        name: ej,
                        prompt: ew,
                        rrule: ek,
                        cwds: g,
                        projectId: eN,
                        executionEnvironment: eC,
                        localEnvironmentConfigPath: eM,
                        model: eS,
                        reasoningEffort: eI,
                        ...v,
                        targetThreadId: Z,
                        status: eT
                    }, C[89] = $, C[90] = et, C[91] = Z, C[92] = eb, C[93] = ey, C[94] = ej, C[95] = ew, C[96] = ek, C[97] = g, C[98] = eN, C[99] = eC, C[100] = eM, C[101] = eS, C[102] = eI, C[103] = v, C[104] = eT, C[105] = ef, C[106] = f) : f = C[106];
                    let eR = f,
                        eA = null != Y;
                    C[107] !== eh || C[108] !== eg || C[109] !== et || C[110] !== ea || C[111] !== eA ? (k = (0, h.A)({
                        directiveMode: et,
                        canCreate: eh,
                        canUpdate: eg,
                        isViewMode: ea,
                        forceOpen: eA
                    }), C[107] = eh, C[108] = eg, C[109] = et, C[110] = ea, C[111] = eA, C[112] = k) : k = C[112];
                    let e_ = k;
                    y = ec ? null : em, C[113] !== e_ || C[114] !== ed || C[115] !== Y || C[116] !== eR || C[117] !== ex || C[118] !== ev || C[119] !== G || C[120] !== B || C[121] !== q || C[122] !== ep ? (N = () => {
                        if (!ex) {
                            if (null != ed) return void x.c.dispatchHostMessage({
                                type: "navigate-to-route",
                                path: `/automations?automationId=${ed}`
                            });
                            "create" === e_ && (q.set(h.e, null), q.set(h.f, eR), x.c.dispatchHostMessage({
                                type: "navigate-to-route",
                                path: "/automations?automationMode=create"
                            }))
                        }
                    }, C[113] = e_, C[114] = ed, C[115] = Y, C[116] = eR, C[117] = ex, C[118] = ev, C[119] = G, C[120] = B, C[121] = q, C[122] = ep, C[123] = N) : N = C[123], l = N, a = !ec && !ex && (null != ed || "create" === e_), j = function(e) {
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
                        deleteStatus: K?.deleteStatus,
                        intl: V,
                        mode: er
                    }), C[17] = el?.items, C[18] = eo.isLoading, C[19] = Y, C[20] = L, C[21] = $, C[22] = et, C[23] = M, C[24] = D, C[25] = I, C[26] = V, C[27] = ei, C[28] = ea, C[29] = T, C[30] = O, C[31] = G, C[32] = R, C[33] = z, C[34] = A, C[35] = J, C[36] = E, C[37] = _, C[38] = H, C[39] = B, C[40] = X, C[41] = Z, C[42] = K?.automationId, C[43] = K?.deleteStatus, C[44] = K?.mode, C[45] = ee?.name, C[46] = ee?.rrule, C[47] = P, C[48] = q, C[49] = en, C[50] = F, C[51] = a, C[52] = l, C[53] = b, C[54] = y, C[55] = j, C[56] = w
                } else a = C[51], l = C[52], b = C[53], y = C[54], j = C[55], w = C[56];
                let er = j;
                C[124] !== er || C[125] !== b || C[126] !== y ? (k = [er, b, y].filter(f), C[124] = er, C[125] = b, C[126] = y, C[127] = k) : k = C[127];
                let ec = k.join(" · "),
                    ed = y ?? er,
                    eu = ec || void 0;
                return C[128] !== a || C[129] !== l || C[130] !== ed || C[131] !== eu || C[132] !== w ? (N = (0, n.jsx)(p.a, {
                    title: w,
                    subtitle: ed,
                    ariaLabel: eu,
                    canOpen: a,
                    onOpen: l
                }), C[128] = a, C[129] = l, C[130] = ed, C[131] = eu, C[132] = w, C[133] = N) : N = C[133], N
            }
        })
    }),
    KLqe: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            l = a("iTtm"),
            i = a("oyxz"),
            s = a("ASxG"),
            r = a("Hkqr"),
            c = a("DKJJ"),
            d = a("vbL5"),
            u = a("tKel"),
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
                    M = y.appContext?.actionName ?? y.invocation.tool,
                    S = y.appContext?.connectorId ?? C?.id;
                b[6] !== y.invocation.server || b[7] !== M || b[8] !== S ? (a = (0, d.a)(y.invocation.server, M, S), b[6] = y.invocation.server, b[7] = M, b[8] = S, b[9] = a) : a = b[9];
                let I = a;
                b[10] !== y.invocation.arguments || b[11] !== I ? (s = "read_page" === I ? m.safeParse(y.invocation.arguments).data : void 0, b[10] = y.invocation.arguments, b[11] = I, b[12] = s) : s = b[12];
                let T = s;
                b[13] !== T ? (h = null == T ? null : {
                    kind: "page",
                    id: T.page_id
                }, b[13] = T, b[14] = h) : h = b[14], b[15] !== k ? (g = {
                    enabled: k
                }, b[15] = k, b[16] = g) : g = b[16];
                let R = (0, l.x)(u.b, h, g);
                if (null == R) return N;
                b[17] !== y.completed || b[18] !== y.invocation.server || b[19] !== y.result ? (x = "active", y.completed && (x = (0, c.h)({
                    result: y.result,
                    isCodexAppsServer: "codex_apps" === y.invocation.server
                }) ? "failed" : "completed"), b[17] = y.completed, b[18] = y.invocation.server, b[19] = y.result, b[20] = x) : x = b[20];
                let A = R.title ?? "";
                return b[21] !== N || b[22] !== w || b[23] !== x ? (v = e => {
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
                            state: x,
                            title: a
                        }
                    })
                }, b[21] = N, b[22] = w, b[23] = x, b[24] = v) : v = b[24], b[25] !== R.document_type || b[26] !== R.namespace || b[27] !== R.page_id || b[28] !== R.symbol || b[29] !== A || b[30] !== v ? (f = (0, n.jsx)(p.a, {
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