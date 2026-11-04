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
            c = a("EWcN");
        a.d(t, {}, {
            a: function(e) {
                let t, a, d, u, p, m, x, h = (0, o.c)(28),
                    {
                        ref: v,
                        title: g,
                        subtitle: f,
                        ariaLabel: b,
                        canOpen: y,
                        onOpen: j,
                        openLabel: w,
                        actions: k
                    } = e,
                    N = (0, l.useId)(),
                    C = (0, l.useId)(),
                    S = k;
                if (null == k && y) {
                    let e, t;
                    h[0] !== w ? (e = w ?? (0, n.jsx)(i.a, {
                        id: "automation.updateDirective.open",
                        defaultMessage: "Open",
                        description: "Button label for opening an automation from a task message"
                    }), h[0] = w, h[1] = e) : e = h[1], h[2] !== e ? (t = (0, n.jsx)(r.g, {
                        label: e
                    }), h[2] = e, h[3] = t) : t = h[3], S = t
                }
                h[4] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(r.f, {
                    children: (0, n.jsx)(s.a, {
                        asset: c.a,
                        "aria-hidden": !0
                    })
                }), h[4] = t) : t = h[4], h[5] !== g || h[6] !== C ? (a = (0, n.jsx)("span", {
                    id: C,
                    children: g
                }), h[5] = g, h[6] = C, h[7] = a) : a = h[7], h[8] !== N || h[9] !== f ? (d = f ? (0, n.jsx)("span", {
                    id: N,
                    children: f
                }) : null, h[8] = N, h[9] = f, h[10] = d) : d = h[10], h[11] !== S ? (u = null != S ? (0, n.jsx)("span", {
                    className: "pointer-events-auto flex shrink-0 items-center gap-1",
                    children: S
                }) : null, h[11] = S, h[12] = u) : u = h[12], h[13] !== a || h[14] !== d || h[15] !== u ? (p = (0, n.jsx)(r.h, {
                    className: "pointer-events-none relative z-10",
                    icon: t,
                    title: a,
                    subtitle: d,
                    trailing: u
                }), h[13] = a, h[14] = d, h[15] = u, h[16] = p) : p = h[16];
                let M = p,
                    I = null == b ? C : void 0,
                    R = f ? N : void 0,
                    T = !y,
                    A = null == k ? M : null;
                h[17] !== b || h[18] !== j || h[19] !== v || h[20] !== I || h[21] !== R || h[22] !== T || h[23] !== A ? (m = (0, n.jsx)(r.b, {
                    ref: v,
                    "aria-label": b,
                    "aria-labelledby": I,
                    "aria-describedby": R,
                    disabled: T,
                    onClick: j,
                    children: A
                }), h[17] = b, h[18] = j, h[19] = v, h[20] = I, h[21] = R, h[22] = T, h[23] = A, h[24] = m) : m = h[24];
                let _ = null != k ? M : null;
                return h[25] !== m || h[26] !== _ ? (x = (0, n.jsx)(r.a, {
                    as: "span",
                    className: "mt-3 select-none",
                    variant: "attachment",
                    children: (0, n.jsxs)("span", {
                        className: "group/resource-card relative",
                        "data-automation-card": !0,
                        children: [m, _]
                    })
                }), h[25] = m, h[26] = _, h[27] = x) : x = h[27], x
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
                let t, a, s, m, x, h, v, g = (0, o.c)(21),
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
                g[4] !== f.title || g[5] !== j?.automation.title ? (a = j?.automation.title.trim() || f.title, g[4] = f.title, g[5] = j?.automation.title, g[6] = a) : a = g[6];
                let k = a;
                return g[7] !== f.id || g[8] !== j || g[9] !== b || g[10] !== k ? (s = () => {
                    null == j && b.queryClient.invalidateQueries({
                        queryKey: ["cloud-automations"]
                    }), (0, d.openAutomationSidePanelTab)({
                        scope: b,
                        automationId: f.id,
                        title: k,
                        toggle: !0,
                        navigationSource: "conversation"
                    })
                }, m = null, g[7] = f.id, g[8] = j, g[9] = b, g[10] = k, g[11] = s, g[12] = m) : (s = g[11], m = g[12]), g[13] !== w || g[14] !== s || g[15] !== m || g[16] !== k ? (x = (0, n.jsx)(r.a, {
                    title: k,
                    subtitle: w,
                    ariaLabel: k,
                    canOpen: !0,
                    onOpen: s,
                    actions: m
                }), g[13] = w, g[14] = s, g[15] = m, g[16] = k, g[17] = x) : x = g[17], g[18] === Symbol.for("react.memo_cache_sentinel") ? (h = null, g[18] = h) : h = g[18], g[19] !== x ? (v = (0, n.jsxs)("div", {
                    className: "flex w-full min-w-0 flex-col gap-2 self-start",
                    children: [x, h]
                }), g[19] = x, g[20] = v) : v = g[20], v
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
                    } = (0, s.X)();
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
                let t, a, i, r, u, p, x, g, b, y, j = (0, o.c)(25),
                    {
                        automations: w,
                        conversationId: k
                    } = e,
                    N = (0, c.Z)(),
                    {
                        data: C,
                        isSuccess: S
                    } = (0, l.z)(d.j);
                if (j[0] !== w || j[1] !== C || j[2] !== k || j[3] !== S) {
                    let e, o = S && C.isAvailable ? w.filter(e => {
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
                    i = "w-full max-w-sm overflow-hidden rounded-2xl border border-default bg-surface", r = null != k && o.length > 0 ? (0, n.jsx)(v.a, {
                        conversationId: k
                    }) : null, j[9] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(m.a, {
                        "aria-hidden": "true",
                        className: "icon-sm shrink-0"
                    }), j[9] = e) : e = j[9], j[10] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, n.jsxs)("header", {
                        className: "flex items-center gap-2 border-b border-subtle px-4 py-3 text-sm text-secondary select-none",
                        children: [e, (0, n.jsx)("h2", {
                            className: "text-sm font-medium uppercase",
                            children: (0, n.jsx)(h.a, {
                                children: (0, n.jsx)(s.a, {
                                    id: "automations.scheduled.destination.label",
                                    defaultMessage: "Scheduled",
                                    description: "Title of the Scheduled destination and the compact scheduled-task list in a conversation"
                                })
                            })
                        })]
                    }), j[10] = u) : u = j[10], t = "px-4", a = o.slice(0, 5).map(f), j[0] = w, j[1] = C, j[2] = k, j[3] = S, j[4] = t, j[5] = a, j[6] = i, j[7] = r, j[8] = u
                } else t = j[4], a = j[5], i = j[6], r = j[7], u = j[8];
                return j[11] !== N ? (p = () => {
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
                }), j[14] = p, j[15] = g) : g = j[15], j[16] !== t || j[17] !== a || j[18] !== g ? (b = (0, n.jsxs)("ul", {
                    className: t,
                    children: [a, g]
                }), j[16] = t, j[17] = a, j[18] = g, j[19] = b) : b = j[19], j[20] !== i || j[21] !== r || j[22] !== u || j[23] !== b ? (y = (0, n.jsxs)("section", {
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
                [_, E] = (0, s.useState)(!1);
            M[0] !== A || M[1] !== T ? (t = (0, x.c)(A, T), M[0] = A, M[1] = T, M[2] = t) : t = M[2];
            let U = t;
            if (!(void 0 === R || R)) {
                let e, t;
                return M[3] !== I ? (e = (0, l.b)("min-w-0 truncate pt-1 text-codex-description/80", I), M[3] = I, M[4] = e) : e = M[4], M[5] !== e || M[6] !== U ? (t = (0, n.jsx)("div", {
                    className: e,
                    children: U
                }), M[5] = e, M[6] = U, M[7] = t) : t = M[7], t
            }
            let L = "denied" === T.status && "high" === T.riskLevel;
            M[8] !== A || M[9] !== T ? (a = (0, x.b)(A, T), M[8] = A, M[9] = T, M[10] = a) : a = M[10];
            let P = a;
            M[11] !== I ? (c = (0, l.b)("flex flex-col pt-1", I), M[11] = I, M[12] = c) : c = M[12], M[13] === Symbol.for("react.memo_cache_sentinel") ? (u = () => E(f), M[13] = u) : u = M[13];
            let O = "inProgress" === T.status,
                z = L ? "text-warning" : "text-codex-description/80 group-hover/automatic-approval-review:text-default";
            M[14] !== z ? (v = (0, l.b)("min-w-0 truncate", z), M[14] = z, M[15] = v) : v = M[15], M[16] !== O || M[17] !== v || M[18] !== U ? (g = (0, n.jsx)(h.a, {
                active: O,
                className: v,
                children: U
            }), M[16] = O, M[17] = v, M[18] = U, M[19] = g) : g = M[19];
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
                let E = (0, l.x)(f.a, _, d);
                g[16] !== E.data || g[17] !== b.invocation.server || g[18] !== b.invocation.tool || g[19] !== b.invocationResourceUri ? (u = (0, p.c)({
                    invocationResourceUri: b.invocationResourceUri,
                    mcpServerStatuses: E.data,
                    server: b.invocation.server,
                    tool: b.invocation.tool
                })?.resourceUri, g[16] = E.data, g[17] = b.invocation.server, g[18] = b.invocation.tool, g[19] = b.invocationResourceUri, g[20] = u) : u = g[20];
                let U = u;
                g[21] !== E.isPending || g[22] !== j || g[23] !== U || g[24] !== T?._meta || g[25] !== k?.resourceUri || g[26] !== b.appContext?.resourceUri || g[27] !== b.mcpAppResourceUri ? (m = j.startsWith("chatgpt:") ? U : b.appContext?.resourceUri ?? U ?? (E.isPending ? k?.resourceUri : void 0) ?? (0, i.Eg)(T?._meta) ?? b.mcpAppResourceUri, g[21] = E.isPending, g[22] = j, g[23] = U, g[24] = T?._meta, g[25] = k?.resourceUri, g[26] = b.appContext?.resourceUri, g[27] = b.mcpAppResourceUri, g[28] = m) : m = g[28];
                let L = m,
                    P = null != L && E.isPending && b.appContext?.resourceUri == null && null == U && k?.resourceUri == null,
                    O = (0, l.x)(S && t ? f.b : null, _);
                I ? x = "error" : b.completed && null == b.result && null == T && (x = "cancelled");
                let z = L ?? k?.resourceUri ?? null,
                    D = t && null != b.appContext ? b.callId : null,
                    B = x;
                return g[29] !== E.data || g[30] !== b.appContext || g[31] !== b.invocation.server || g[32] !== b.invocation.tool || g[33] !== b.invocationResourceUri ? (h = (0, p.b)({
                    appContext: b.appContext,
                    invocationResourceUri: b.invocationResourceUri,
                    mcpServerStatuses: E.data,
                    server: b.invocation.server,
                    tool: b.invocation.tool
                }), g[29] = E.data, g[30] = b.appContext, g[31] = b.invocation.server, g[32] = b.invocation.tool, g[33] = b.invocationResourceUri, g[34] = h) : h = g[34], g[35] !== E || g[36] !== j || g[37] !== T || g[38] !== y || g[39] !== t || g[40] !== P || g[41] !== b || g[42] !== R || g[43] !== D || g[44] !== h || g[45] !== z || g[46] !== I || g[47] !== x || g[48] !== O ? (v = {
                    item: b,
                    hostId: y,
                    conversationId: j,
                    catalog: E,
                    resourceUri: z,
                    isResourceUriPending: P,
                    toolScope: O,
                    isCodexAppsToolCall: t,
                    originCallId: D,
                    successfulToolResult: R,
                    displayedSuccessfulToolResult: T,
                    toolCallFailed: I,
                    toolCallStatus: B,
                    toolDefinition: h
                }, g[35] = E, g[36] = j, g[37] = T, g[38] = y, g[39] = t, g[40] = P, g[41] = b, g[42] = R, g[43] = D, g[44] = h, g[45] = z, g[46] = I, g[47] = x, g[48] = O, g[49] = v) : v = g[49], v
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
                    E = void 0 === A || A,
                    U = (0, l.y)(g.a);
                M[0] !== T || M[1] !== E || M[2] !== I ? (t = E && null == T && (0, b.h)(I), M[0] = T, M[1] = E, M[2] = I, M[3] = t) : t = M[3], M[4] !== R || M[5] !== t ? (a = {
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
                M[14] !== E || M[15] !== I.invocation.server || M[16] !== I.pluginId ? (s = E && null != I.pluginId && !(0, r.e)(I.invocation.server), M[14] = E, M[15] = I.invocation.server, M[16] = I.pluginId, M[17] = s) : s = M[17], M[18] !== R || M[19] !== s ? (u = {
                    enabled: s,
                    hostId: R
                }, M[18] = R, M[19] = s, M[20] = u) : u = M[20];
                let O = (0, d.a)(u);
                M[21] !== R || M[22] !== O ? (p = {
                    enabled: O,
                    hostId: R,
                    roots: void 0,
                    resolveActiveRoots: !0
                }, M[21] = R, M[22] = O, M[23] = p) : p = M[23];
                let {
                    data: z
                } = (0, x.l)(p);
                M[24] !== z || M[25] !== I.pluginId ? (v = z?.find(e => {
                    let {
                        plugin: t
                    } = e;
                    return t.id === I.pluginId || null != t.remotePluginId && t.remotePluginId === I.pluginId
                }), M[24] = z, M[25] = I.pluginId, M[26] = v) : v = M[26];
                let D = v,
                    B = O && null != z && null != I.pluginId && null == D;
                M[27] !== R || M[28] !== I.pluginId || M[29] !== U.query || M[30] !== B ? (f = U.query.getOptions(m.k, (0, m.a)({
                    hostId: R,
                    pluginId: B ? I.pluginId ?? null : null
                })), M[27] = R, M[28] = I.pluginId, M[29] = U.query, M[30] = B, M[31] = f) : f = M[31];
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
                if (M[36] !== V || M[37] !== D || M[38] !== z || M[39] !== I.invocation.server || M[40] !== I.pluginId || M[41] !== P || M[42] !== B) {
                    let e = null == V ? null : (0, h.b)(V);
                    k = P, N = D ?? e, C = (0, y.a)({
                        pluginId: e?.plugin.id ?? D?.plugin.id ?? I.pluginId,
                        plugins: B && null != e ? [e] : z ?? [],
                        serverName: I.invocation.server
                    }), M[36] = V, M[37] = D, M[38] = z, M[39] = I.invocation.server, M[40] = I.pluginId, M[41] = P, M[42] = B, M[43] = k, M[44] = N, M[45] = C
                } else k = M[43], N = M[44], C = M[45];
                return M[46] !== k || M[47] !== N || M[48] !== C ? (S = {
                    matchingApp: k,
                    plugin: N,
                    pluginIcon: C
                }, M[46] = k, M[47] = N, M[48] = C, M[49] = S) : S = M[49], S
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
            N = a("ygO2"),
            C = a("la9L"),
            S = a("rmk3"),
            M = a("JNtf"),
            I = a("mUDD"),
            R = a("KxMp"),
            T = a("HOLv"),
            A = a("Wdu7"),
            _ = a("wwME"),
            E = a("nXaV"),
            U = a("YeQK"),
            L = a("oKu4"),
            P = a("FWVQ"),
            O = a("IN8o"),
            z = a("HwRo"),
            D = a("C3P5"),
            B = a("aENG"),
            W = a("Cv9y"),
            q = a("EAcR"),
            H = a("NJrC"),
            V = a("EDsV"),
            J = a("geS6"),
            F = a("qwxA"),
            G = a("qZWE"),
            K = a("E2ja"),
            Z = a("KLqe"),
            Q = a("Sd8U"),
            X = a("tSEg"),
            Y = a("hZax"),
            $ = a("V8uZ"),
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
            let t, a, l, i, s, r, c, d, u, m = (0, o.c)(32),
                {
                    call: x,
                    fallbackPageUrl: v,
                    loadRemoteLogos: g
                } = e,
                f = null == x.sourceHostname ? v : `https://${x.sourceHostname}`,
                b = "invokeTool" === x.kind ? x.inputJson : void 0,
                y = "invokeTool" === x.kind && !0 === x.inputTruncated;
            m[0] !== g || m[1] !== f ? (t = null == f ? (0, n.jsx)(T.a, {
                className: "shrink-0 text-text/60",
                asset: eC.a
            }) : (0, n.jsx)(R.a, {
                className: "icon-xs shrink-0 text-text/60",
                href: f,
                loadRemote: g
            }), m[0] = g, m[1] = f, m[2] = t) : t = m[2], m[3] !== x.name || m[4] !== x.title ? (a = x.title ?? (0, p.a)(x.name, {
                style: "sentence"
            }), m[3] = x.name, m[4] = x.title, m[5] = a) : a = m[5], m[6] !== x.kind || m[7] !== a ? (l = (0, n.jsx)(h.a, {
                id: "codex.mcpTool.webMcpActivity.completed",
                defaultMessage: "{kind, select, listTools {Listed website tools} other {{toolName}}}",
                description: "Human-readable activity label for a website-provided WebMCP tool invocation",
                values: {
                    kind: x.kind,
                    toolName: a
                }
            }), m[6] = x.kind, m[7] = a, m[8] = l) : l = m[8], m[9] !== x.description || m[10] !== x.name || m[11] !== x.readOnlyHint || m[12] !== x.sourceHostname || m[13] !== x.title || m[14] !== b || m[15] !== y ? (i = eI({
                name: x.name,
                title: x.title,
                description: x.description,
                website: x.sourceHostname,
                readOnlyHint: x.readOnlyHint,
                input: null == b || y ? b : function(e) {
                    try {
                        return JSON.parse(e)
                    } catch {
                        return e
                    }
                }(b),
                inputTruncated: !!y || void 0
            }, 2), m[9] = x.description, m[10] = x.name, m[11] = x.readOnlyHint, m[12] = x.sourceHostname, m[13] = x.title, m[14] = b, m[15] = y, m[16] = i) : i = m[16];
            let j = y ? "true" : "false";
            return m[17] !== j ? (s = (0, n.jsx)(h.a, {
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
            }), m[19] = i, m[20] = s, m[21] = r) : r = m[21], m[22] !== x.outputJson || m[23] !== x.outputTruncated ? (c = null == x.outputJson ? null : (0, n.jsx)(C.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: x.outputTruncated ? x.outputJson : function(e) {
                    try {
                        return eI(JSON.parse(e), 2)
                    } catch {
                        return e
                    }
                }(x.outputJson),
                language: "json",
                showStickyRightContent: !1,
                title: (0, n.jsx)(h.a, {
                    id: "codex.localConversation.webMcpTools.resultLabel",
                    defaultMessage: "{truncated, select, true {Result (truncated)} other {Result}}",
                    description: "Title for a website-provided WebMCP tool result",
                    values: {
                        truncated: x.outputTruncated ? "true" : "false"
                    }
                })
            }), m[22] = x.outputJson, m[23] = x.outputTruncated, m[24] = c) : c = m[24], m[25] !== r || m[26] !== c ? (d = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2",
                children: [r, c]
            }), m[25] = r, m[26] = c, m[27] = d) : d = m[27], m[28] !== t || m[29] !== l || m[30] !== d ? (u = (0, n.jsx)(ej.a, {
                icon: t,
                status: "completed",
                summary: l,
                children: d
            }), m[28] = t, m[29] = l, m[30] = d, m[31] = u) : u = m[31], u
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
                    t[5] !== l || t[6] !== s || t[7] !== v || t[8] !== h || t[9] !== c || t[10] !== r ? (i = () => (0, U.getGeneratedImageContextMenuItems)(r, {
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
                if (null != e) return (0, et.c)(e, d, x)
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
                let t, a, r, j, S, U, Q, ee, et, ej, eT, eA, e_, eE, eU, eL, eP, eO, ez, eD, eB, eW, eq, eH, eV, eJ, eF, eG, eK, eZ, eQ, eX, eY, e$, e1, e0, e2, e3, e4, e5, e8, e6, e7, e9, te, tt, ta, tn = (0, o.c)(240),
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
                    tR = (0, d.x)(G.s, tI),
                    tT = (0, d.x)(G.h, tI),
                    tA = (0, d.x)(G.o, tI),
                    t_ = tT?.content.toolCallStatus == null && tT?.content.toolResult != null;
                tn[6] !== tr || tn[7] !== to || tn[8] !== tR || tn[9] !== t_ ? (r = (0, eh.a)({
                    item: to,
                    hostId: tr,
                    retainedState: {
                        sourceId: tR,
                        hasSuccessfulToolResult: t_
                    }
                }), tn[6] = tr, tn[7] = to, tn[8] = tR, tn[9] = t_, tn[10] = r) : r = tn[10];
                let tE = r;
                tn[11] !== tE || tn[12] !== tj ? (j = tj && (0, z.c)() && tE.isEligible, tn[11] = tE, tn[12] = tj, tn[13] = j) : j = tn[13];
                let tU = j;
                tn[14] !== tl || tn[15] !== to.callId ? (S = (0, D.a)({
                    callId: to.callId,
                    conversationId: tl
                }), tn[14] = tl, tn[15] = to.callId, tn[16] = S) : S = tn[16];
                let tL = S,
                    tP = (0, d.x)(D.b, tL);
                (0, Y.h)("2957382457");
                let tO = (0, d.z)(f.a);
                tn[17] !== tl || tn[18] !== tU ? (U = tU || !tl.startsWith("chatgpt:"), tn[17] = tl, tn[18] = tU, tn[19] = U) : U = tn[19], tn[20] !== tl || tn[21] !== tr || tn[22] !== to || tn[23] !== tA || tn[24] !== tU || tn[25] !== U ? (Q = {
                    item: to,
                    hostId: tr,
                    conversationId: tl,
                    fallback: tA,
                    enabled: tU,
                    catalogEnabled: U
                }, tn[20] = tl, tn[21] = tr, tn[22] = to, tn[23] = tA, tn[24] = tU, tn[25] = U, tn[26] = Q) : Q = tn[26];
                let tz = (0, em.a)(Q),
                    {
                        isCodexAppsToolCall: tD,
                        successfulToolResult: tB,
                        resourceUri: tW,
                        toolDefinition: tq
                    } = tz,
                    {
                        elementHeightPx: tH,
                        elementRef: tV
                    } = (0, es.a)(),
                    tJ = to.result?.type === "success" ? to.result.content : null,
                    tF = to.result?.type === "error" ? to.result.error : null;
                tn[27] !== to || tn[28] !== tM ? (ee = (0, el.e)({
                    item: to,
                    platform: tM
                }), tn[27] = to, tn[28] = tM, tn[29] = ee) : ee = tn[29];
                let tG = ee,
                    tK = tG?.nativeAppReference ?? null,
                    tZ = (0, eu.b)(tK),
                    tQ = tZ?.appPath ?? null;
                tn[30] !== tQ ? (et = {
                    appPath: tQ
                }, tn[30] = tQ, tn[31] = et) : et = tn[31];
                let {
                    iconSmall: tX
                } = (0, w.a)(et);
                tn[32] !== to || tn[33] !== tN || tn[34] !== tv ? (ej = void 0 === tv ? (0, ed.d)(to, null == tN ? [] : [tN])?.icon : tv, tn[32] = to, tn[33] = tN, tn[34] = tv, tn[35] = ej) : ej = tn[35];
                let tY = ej;
                if (void 0 === tv && null != tY) {
                    let e, t;
                    tn[36] !== tN ? (e = null == tN ? [] : [tN], tn[36] = tN, tn[37] = e) : e = tn[37], tn[38] !== tY || tn[39] !== to || tn[40] !== ty || tn[41] !== e ? (t = (0, n.jsx)(Z.a, {
                        item: to,
                        apps: e,
                        part: "icon",
                        loadMetadata: ty,
                        children: tY
                    }), tn[38] = tY, tn[39] = to, tn[40] = ty, tn[41] = e, tn[42] = t) : t = tn[42], tY = t
                }
                tn[43] !== to.source?.kind || tn[44] !== tB ? (eT = to.source?.kind === "browserUse" && null != tB ? (0, el.c)(tB._meta) : null, tn[43] = to.source?.kind, tn[44] = tB, tn[45] = eT) : eT = tn[45];
                let t$ = eT,
                    t1 = tO && !tf && to.completed && (0, u.ii)(to.invocation.server) && "js" === to.invocation.tool && null != tB ? (0, er.a)(tB._meta) : [],
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
                    t3 = tU && null != tW && tE.isRenderable,
                    [t4, t5] = (0, m.useState)(!1),
                    {
                        resource: t8,
                        renderData: t6,
                        state: t7,
                        refetch: t9
                    } = (0, em.b)(tz, t3),
                    ae = tT?.sessionId == null ? null : tT.content.resource,
                    at = null == ae ? t8?.resourceIdentityVerified : tT?.content.mcpAppScope.resourceIdentityVerified,
                    aa = null == ae ? t7.error : null,
                    an = t3 && null == ae && t7.isLoading,
                    ao = (0, d.x)(G.p, tI),
                    al = (0, d.x)(G.m, tI),
                    ai = (0, H.a)({
                        hasResourceError: null != aa,
                        isResourceLoading: an,
                        isDilEnabled: !1,
                        renderData: ae ?? t6,
                        resourceUri: tW ?? null,
                        shouldRenderMcpApp: t3
                    }),
                    as = "html" === ai.kind ? ai.renderData : null,
                    ar = (0, V.d)({
                        data: as,
                        error: aa,
                        isLoading: an
                    }, G.E),
                    ac = "fallback" !== ai.kind,
                    ad = tU && null != tW && (!ac || null != aa || null != ao && !(ao instanceof V.b) || "too-large" === ar.kind || "error" === ar.kind),
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
                tn[63] !== ay || tn[64] !== aC || tn[65] !== aS ? (eE = {
                    isLoading: aS,
                    isInlineRequested: ay,
                    isInlineOpening: aC
                }, tn[63] = ay, tn[64] = aC, tn[65] = aS, tn[66] = eE) : eE = tn[66];
                let aM = (0, P.c)(tI, eE),
                    aI = !ad && (am || "html" === ai.kind) ? aM : null;
                tn[67] !== tq ? (eU = (0, J.b)(tq)?.resourceUri, tn[67] = tq, tn[68] = eU) : eU = tn[68];
                let aR = eU,
                    aT = tB?._meta;
                tn[69] !== aT ? (eL = c()(aT, ["_codex_apps", "resource_uri"]), tn[69] = aT, tn[70] = eL) : eL = tn[70];
                let aA = eL;
                tn[71] !== aR || tn[72] !== tD || tn[73] !== tW || tn[74] !== aA || tn[75] !== tq?._meta ? (eP = tD && null != aR && aA === aR && (0, u.Eg)(tq?._meta) === tW, tn[71] = aR, tn[72] = tD, tn[73] = tW, tn[74] = aA, tn[75] = tq?._meta, tn[76] = eP) : eP = tn[76];
                let a_ = !(eP && !0 === at && (0, P.b)({
                    isInline: !au && ("inline" === ap || am),
                    status: aI,
                    hidesAttributionAndActions: as?.hideAttribution === !0 && !0 === as.hideActions
                })) && (ah || !tf && (au || "html" === ai.kind && !av));
                tn[77] !== tD || tn[78] !== to.appContext?.appName || tn[79] !== to.invocation.server || tn[80] !== tN?.name || tn[81] !== tC?.alt ? (eO = tN?.name ?? to.appContext?.appName ?? tC?.alt ?? (tD ? null : (0, p.a)(to.invocation.server)), tn[77] = tD, tn[78] = to.appContext?.appName, tn[79] = to.invocation.server, tn[80] = tN?.name, tn[81] = tC?.alt, tn[82] = eO) : eO = tn[82];
                let aE = eO;
                tn[83] !== aE || tn[84] !== tq ? (ez = (0, P.a)((0, v.a)(tq), aE), tn[83] = aE, tn[84] = tq, tn[85] = ez) : ez = tn[85];
                let aU = ez,
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
                    displayStructuredContentJson: aO
                } = eD, [az, aD] = (0, m.useState)(!1);
                t: {
                    let e;
                    if (!az) {
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
                tn[122] !== tY || tn[123] !== t$ || tn[124] !== tr || tn[125] !== to || tn[126] !== ty || tn[127] !== tN || tn[128] !== tX || tn[129] !== tZ?.displayName || tn[130] !== tK || tn[131] !== tG || tn[132] !== tC ? (eJ = void 0 !== tY ? tY : (0, n.jsx)(en.a, {
                    hostId: tr,
                    item: to,
                    loadRemoteLogos: ty,
                    fallback: null == tC && null != tK ? (0, n.jsx)(k.a, {
                        alt: tZ?.displayName ?? tG?.name ?? to.invocation.server,
                        className: "icon-xs shrink-0 scale-[1.15] object-contain",
                        loadRemote: ty,
                        logoUrl: tX,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(T.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: ew.a
                        })
                    }) : null == tC && tG?.groupKey === el.b ? (0, n.jsx)(T.a, {
                        className: "shrink-0 text-secondary",
                        asset: ew.a
                    }) : null == tC && tG?.logoUrl != null ? (0, n.jsx)(k.a, {
                        alt: tG.name,
                        className: "icon-xs shrink-0 object-contain",
                        loadRemote: ty,
                        logoUrl: tG.logoUrl,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(T.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: ek.a
                        })
                    }) : null == tC && tG?.usesBrowserIcon === !0 ? null == t$ ? (0, n.jsx)(T.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: eC.a
                    }) : (0, n.jsx)(R.a, {
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        href: t$,
                        loadRemote: ty
                    }) : null == tC && (0, u.ii)(to.invocation.server) ? (0, n.jsx)(T.a, {
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
                }), tn[122] = tY, tn[123] = t$, tn[124] = tr, tn[125] = to, tn[126] = ty, tn[127] = tN, tn[128] = tX, tn[129] = tZ?.displayName, tn[130] = tK, tn[131] = tG, tn[132] = tC, tn[133] = eJ) : eJ = tn[133];
                let aF = eJ;
                tn[134] !== tw || tn[135] !== aF || tn[136] !== aJ ? (eF = tw ?? (0, n.jsxs)(n.Fragment, {
                    children: [aF, aJ]
                }), tn[134] = tw, tn[135] = aF, tn[136] = aJ, tn[137] = eF) : eF = tn[137];
                let aG = eF;
                tn[138] !== aw || tn[139] !== ay || tn[140] !== t4 || tn[141] !== tL || tn[142] !== tu || tn[143] !== tk || tn[144] !== af || tn[145] !== ad || tn[146] !== ac || tn[147] !== ag || tn[148] !== tg || tn[149] !== tP ? (eG = () => {
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
                }, tn[138] = aw, tn[139] = ay, tn[140] = t4, tn[141] = tL, tn[142] = tu, tn[143] = tk, tn[144] = af, tn[145] = ad, tn[146] = ac, tn[147] = ag, tn[148] = tg, tn[149] = tP, tn[150] = eG) : eG = tn[150];
                let aK = eG;
                tn[151] !== to.automaticApprovalReviews ? (eK = null == to.automaticApprovalReviews ? null : (0, n.jsx)(ea.a, {}), tn[151] = to.automaticApprovalReviews, tn[152] = eK) : eK = tn[152];
                let aZ = eK,
                    aQ = aq && "opening" !== aI && !ax && au ? {
                        alignEnd: ag && aj,
                        expanded: aL,
                        onToggle: aK
                    } : void 0,
                    aX = (0, i.b)("group", ag && aj && (as?.prefersBorder ?? tT?.content.resource?.prefersBorder ?? !0) && "overflow-hidden rounded-lg border border-strong bg-surface"),
                    aY = ax && "w-full",
                    a$ = ag && aj && "w-full px-4 pt-3 pb-2";
                tn[153] !== aY || tn[154] !== a$ ? (eZ = (0, i.b)(aY, a$), tn[153] = aY, tn[154] = a$, tn[155] = eZ) : eZ = tn[155];
                let a1 = eZ;
                tn[156] !== aZ || tn[157] !== aQ || tn[158] !== a1 || tn[159] !== an || tn[160] !== tI || tn[161] !== aG || tn[162] !== aF || tn[163] !== aU || tn[164] !== aI ? (eQ = null != aI ? (0, n.jsx)(O.a, {
                    accessory: aZ,
                    className: a1,
                    disabled: an,
                    disclosure: aQ,
                    icon: aF,
                    mcpAppId: tI,
                    name: aU,
                    status: aI
                }) : (0, n.jsx)(eb.a, {
                    accessory: aZ,
                    className: a1,
                    disclosure: aQ,
                    children: aG
                }), tn[156] = aZ, tn[157] = aQ, tn[158] = a1, tn[159] = an, tn[160] = tI, tn[161] = aG, tn[162] = aF, tn[163] = aU, tn[164] = aI, tn[165] = eQ) : eQ = tn[165];
                let a0 = eQ;
                tn[166] !== t9 ? (eX = () => {
                    t9({
                        cancelRefetch: !1
                    })
                }, tn[166] = t9, tn[167] = eX) : eX = tn[167];
                let a2 = (0, n.jsx)(q.a, {
                        hostDisplayModes: G.E,
                        resource: {
                            data: null == tW ? null : as,
                            error: aa,
                            isLoading: an
                        },
                        inlineSurface: ag ? "card" : "standalone",
                        mcpAppId: tI,
                        appName: aE ?? void 0,
                        presentation: ad ? "inline" : al,
                        onRetryResourceRead: eX,
                        showLoadingStatus: !a_
                    }),
                    a3 = s.a,
                    a4 = +!!aL;
                tn[168] !== a4 || tn[169] !== aH ? (eY = {
                    height: aH,
                    opacity: a4
                }, tn[168] = a4, tn[169] = aH, tn[170] = eY) : eY = tn[170];
                let a5 = $.a,
                    a8 = aL ? "overflow-visible" : "overflow-hidden";
                tn[171] !== a8 ? (e$ = (0, i.b)(a8), tn[171] = a8, tn[172] = e$) : e$ = tn[172];
                let a6 = aL ? "auto" : "none";
                tn[173] !== a6 ? (e1 = {
                    pointerEvents: a6
                }, tn[173] = a6, tn[174] = e1) : e1 = tn[174], tn[175] !== aj ? (e0 = () => {
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
                        }) : tF ? (0, n.jsx)(A.a, {
                            className: "w-full",
                            fullWidth: !0,
                            level: "danger",
                            children: (0, n.jsx)("div", {
                                className: "max-h-48 overflow-auto text-size-chat whitespace-pre-wrap",
                                children: tF
                            })
                        }) : aO ? null : (0, n.jsx)("p", {
                            className: "text-codex-description/80",
                            children: (0, n.jsx)(h.a, {
                                id: "codex.mcpTool.noResult",
                                defaultMessage: "Tool returned no content",
                                description: "Message shown when an MCP tool call produced no content"
                            })
                        }), !an && aL && !aC && !ac && aO && (0, n.jsx)(C.CodeSnippet, {
                            codeContainerClassName: "max-h-48 overflow-auto",
                            language: "json",
                            content: aO,
                            showStickyRightContent: !1
                        }), !an && aL && !aC && (0, n.jsx)(M.a, {
                            open: az,
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
                                        children: (0, n.jsx)(E.a, {
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
                }), tn[180] = a7, tn[181] = a9, tn[182] = e2, tn[183] = na, tn[184] = nn, tn[185] = e3) : e3 = tn[185], tn[186] !== a3.div || tn[187] !== eY || tn[188] !== a5 || tn[189] !== e$ || tn[190] !== e1 || tn[191] !== e0 || tn[192] !== e3 ? (e4 = (0, n.jsx)(a3.div, {
                    initial: !1,
                    animate: eY,
                    transition: a5,
                    className: e$,
                    style: e1,
                    onAnimationComplete: e0,
                    children: e3
                }), tn[186] = a3.div, tn[187] = eY, tn[188] = a5, tn[189] = e$, tn[190] = e1, tn[191] = e0, tn[192] = e3, tn[193] = e4) : e4 = tn[193];
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
                tn[197] !== e5 || tn[198] !== nl ? (e8 = (0, n.jsxs)(n.Fragment, {
                    children: [e5, nl]
                }), tn[197] = e5, tn[198] = nl, tn[199] = e8) : e8 = tn[199];
                let ni = e8;
                tn[200] !== to ? (e6 = (0, g.a)(to), tn[200] = to, tn[201] = e6) : e6 = tn[201];
                let ns = e6;
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
                tn[213] !== ay || tn[214] !== tI || tn[215] !== tj || tn[216] !== tk || tn[217] !== t3 ? (e9 = tj || "chatgpt-thread" !== tk.value.routeKind ? (0, n.jsx)(F.b, {
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
                }), tn[219] = aZ, tn[220] = aX, tn[221] = aQ, tn[222] = a_, tn[223] = a1, tn[224] = ni, tn[225] = ag, tn[226] = tw, tn[227] = tv, tn[228] = aJ, tn[229] = a0, tn[230] = aI, tn[231] = te) : te = tn[231], tn[232] !== t$ || tn[233] !== to.callId || tn[234] !== ty ? (tt = (e, t) => (0, n.jsxs)(m.Fragment, {
                    children: [(0, n.jsx)(ep.a, {
                        variant: "grouped"
                    }), (0, n.jsx)(eM, {
                        call: e,
                        fallbackPageUrl: t$,
                        loadRemoteLogos: ty
                    })]
                }, `${to.callId}:webmcp:${t}:${e.name}`), tn[232] = t$, tn[233] = to.callId, tn[234] = ty, tn[235] = tt) : tt = tn[235];
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
                return void 0 === m || (0, o.Eg)(m?._meta) === c.appContext.resourceUri && null != (0, i.c)(m, c.appContext) ? p : d(r.q, u)
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
                }) || (0, i.ii)(g.invocation.server) || (0, r.e)(g.invocation.server) ? null : s.a, a);
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
                let t, a, l, b, y, j, w, k, N, C = (0, o.c)(134),
                    {
                        elicitation: S,
                        result: M,
                        id: I,
                        kind: R,
                        mode: T,
                        name: A,
                        prompt: _,
                        rrule: E,
                        projectId: U,
                        cwds: L,
                        destination: P,
                        executionEnvironment: O,
                        localEnvironmentConfigPath: z,
                        model: D,
                        reasoningEffort: B,
                        notificationPolicy: W,
                        targetThreadId: q,
                        status: H
                    } = e,
                    V = void 0 === M ? null : M,
                    J = (0, s.y)(g.a),
                    F = (0, c.a)();
                (0, h.a)();
                let G = (0, d.Y)("/remote/:conversationId"),
                    K = (0, d.Y)("/local/:conversationId"),
                    Z = (0, s.z)(x.e),
                    Q = q ?? null;
                C[0] !== L || C[1] !== P || C[2] !== O || C[3] !== I || C[4] !== R || C[5] !== z || C[6] !== T || C[7] !== D || C[8] !== A || C[9] !== W || C[10] !== U || C[11] !== _ || C[12] !== B || C[13] !== Q || C[14] !== E || C[15] !== H ? (t = JSON.stringify({
                    id: I,
                    kind: R,
                    mode: T,
                    name: A,
                    prompt: _,
                    rrule: E,
                    projectId: U,
                    cwds: L,
                    destination: P,
                    executionEnvironment: O,
                    localEnvironmentConfigPath: z,
                    model: D,
                    reasoningEffort: B,
                    notificationPolicy: W,
                    targetThreadId: Q,
                    status: H
                }), C[0] = L, C[1] = P, C[2] = O, C[3] = I, C[4] = R, C[5] = z, C[6] = T, C[7] = D, C[8] = A, C[9] = W, C[10] = U, C[11] = _, C[12] = B, C[13] = Q, C[14] = E, C[15] = H, C[16] = t) : t = C[16];
                let X = t,
                    Y = Z?.directiveKey === X ? Z.automationId : null,
                    $ = Y ?? V?.automationId ?? I,
                    ee = V?.snapshot ?? null,
                    et = "view" === T ? T : null,
                    ea = "view" === T && null != I,
                    en = null != I && (ea || "suggested-update" === T),
                    eo = (0, s.z)(u.c),
                    el = eo.data,
                    ei = !!en && eo.isLoading;
                if (C[17] !== el?.items || C[18] !== eo.isLoading || C[19] !== Y || C[20] !== L || C[21] !== X || C[22] !== et || C[23] !== S || C[24] !== O || C[25] !== I || C[26] !== F || C[27] !== ei || C[28] !== ea || C[29] !== R || C[30] !== z || C[31] !== K || C[32] !== T || C[33] !== D || C[34] !== A || C[35] !== W || C[36] !== U || C[37] !== _ || C[38] !== B || C[39] !== G || C[40] !== $ || C[41] !== Q || C[42] !== V?.automationId || C[43] !== V?.deleteStatus || C[44] !== V?.mode || C[45] !== ee?.name || C[46] !== ee?.rrule || C[47] !== E || C[48] !== J || C[49] !== en || C[50] !== H) {
                    var es;
                    let e, t, n, o, s, c, d, u, p, h, g, f, k, N, M = null != I ? el?.items.find(e => e.id === I) ?? null : null;
                    C[57] !== el?.items || C[58] !== Y || C[59] !== F || C[60] !== ei || C[61] !== ea || C[62] !== T || C[63] !== A || C[64] !== $ || C[65] !== V?.mode || C[66] !== ee?.name || C[67] !== ee?.rrule || C[68] !== E ? ({
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
                        mode: V?.mode ?? T,
                        isSuggestionAccepted: null != Y,
                        trimmedId: $ ?? null,
                        trimmedName: A ?? ee?.name ?? null,
                        trimmedRrule: E ?? ee?.rrule ?? null,
                        automations: el?.items ?? null,
                        isLoading: ei
                    }), o = F.formatMessage({
                        id: "settings.automations.rruleSummaryFallback",
                        defaultMessage: "Custom schedule",
                        description: "Fallback label when RRULE summary cannot be generated"
                    }), s = (0, m.f)({
                        rrule: n,
                        intl: F,
                        fallbackMessage: o
                    }), C[57] = el?.items, C[58] = Y, C[59] = F, C[60] = ei, C[61] = ea, C[62] = T, C[63] = A, C[64] = $, C[65] = V?.mode, C[66] = ee?.name, C[67] = ee?.rrule, C[68] = E, C[69] = t, C[70] = b, C[71] = n, C[72] = o, C[73] = s) : (t = C[69], b = C[70], n = C[71], o = C[72], s = C[73]);
                    let P = s;
                    C[74] !== F ? (c = F.formatMessage({
                        id: "settings.automations.loading",
                        defaultMessage: "Loading…",
                        description: "Loading state for workflows list"
                    }), C[74] = F, C[75] = c) : c = C[75];
                    let q = c;
                    C[76] !== F ? (d = F.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task",
                        description: "Fallback title when scheduled task name is missing"
                    }), C[76] = F, C[77] = d) : d = C[77];
                    let Z = d,
                        er = V?.mode ?? T,
                        ec = "delete" === er,
                        ed = ec || V?.automationId != null ? V?.automationId ?? I ?? null : $;
                    C[78] !== ed || C[79] !== ec ? (u = ec ? (es = ed ?? null, 0 === (e = es?.trim() ?? "").length ? null : /^[0-9a-f]{8}-[0-9a-f-]+$/i.test(e) ? e : i()(e.replace(/[-_]+/g, " "))) : null, C[78] = ed, C[79] = ec, C[80] = u) : u = C[80];
                    let eu = u;
                    w = t ? q : b || eu || Z, C[81] !== eu || C[82] !== F || C[83] !== b ? (p = b ?? eu ?? F.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task",
                        description: "Fallback title when scheduled task name is missing"
                    }), C[81] = eu, C[82] = F, C[83] = b, C[84] = p) : p = C[84];
                    let ep = p,
                        em = P || (t ? q : null != n ? o : null),
                        ex = null != A && null != _ && null != E && ("heartbeat" === R ? null != Q : void 0 !== U || null != L),
                        eh = null != I && null != H && null != A && null != _ && null != E && (null == M ? "heartbeat" === R ? null != Q : void 0 !== U || null != L : !!(0, r.Zh)(M) || void 0 !== U || null != L),
                        ev = "suggested-update" === T && en && eo.isLoading,
                        eg = "suggested-create" === T || "suggested-update" === T,
                        ef = eg ? S : void 0,
                        eb = I ?? null,
                        ey = R ?? null,
                        ej = A ?? "",
                        ew = _ ?? "",
                        ek = E ?? "";
                    C[85] !== L ? (h = L ?? [], C[85] = L, C[86] = h) : h = C[86];
                    let eN = void 0 !== U ? U : L?.[0] === r.fd ? null : L?.[0] ?? null,
                        eC = O ?? null,
                        eS = z ?? null,
                        eM = D ?? null,
                        eI = B ?? null;
                    C[87] !== W ? (g = void 0 !== W ? {
                        notificationPolicy: W
                    } : {}, C[87] = W, C[88] = g) : g = C[88];
                    let eR = H ?? null;
                    C[89] !== X || C[90] !== et || C[91] !== Q || C[92] !== eb || C[93] !== ey || C[94] !== ej || C[95] !== ew || C[96] !== ek || C[97] !== h || C[98] !== eN || C[99] !== eC || C[100] !== eS || C[101] !== eM || C[102] !== eI || C[103] !== g || C[104] !== eR || C[105] !== ef ? (f = {
                        elicitation: ef,
                        directiveKey: X,
                        mode: et,
                        id: eb,
                        kind: ey,
                        name: ej,
                        prompt: ew,
                        rrule: ek,
                        cwds: h,
                        projectId: eN,
                        executionEnvironment: eC,
                        localEnvironmentConfigPath: eS,
                        model: eM,
                        reasoningEffort: eI,
                        ...g,
                        targetThreadId: Q,
                        status: eR
                    }, C[89] = X, C[90] = et, C[91] = Q, C[92] = eb, C[93] = ey, C[94] = ej, C[95] = ew, C[96] = ek, C[97] = h, C[98] = eN, C[99] = eC, C[100] = eS, C[101] = eM, C[102] = eI, C[103] = g, C[104] = eR, C[105] = ef, C[106] = f) : f = C[106];
                    let eT = f,
                        eA = null != Y;
                    C[107] !== ex || C[108] !== eh || C[109] !== et || C[110] !== ea || C[111] !== eA ? (k = (0, x.A)({
                        directiveMode: et,
                        canCreate: ex,
                        canUpdate: eh,
                        isViewMode: ea,
                        forceOpen: eA
                    }), C[107] = ex, C[108] = eh, C[109] = et, C[110] = ea, C[111] = eA, C[112] = k) : k = C[112];
                    let e_ = k;
                    y = ec ? null : em, C[113] !== e_ || C[114] !== ed || C[115] !== Y || C[116] !== eT || C[117] !== ev || C[118] !== eg || C[119] !== K || C[120] !== G || C[121] !== J || C[122] !== ep ? (N = () => {
                        if (!ev) {
                            if (null != ed) return void v.c.dispatchHostMessage({
                                type: "navigate-to-route",
                                path: `/automations?automationId=${ed}`
                            });
                            "create" === e_ && (J.set(x.e, null), J.set(x.f, eT), v.c.dispatchHostMessage({
                                type: "navigate-to-route",
                                path: "/automations?automationMode=create"
                            }))
                        }
                    }, C[113] = e_, C[114] = ed, C[115] = Y, C[116] = eT, C[117] = ev, C[118] = eg, C[119] = K, C[120] = G, C[121] = J, C[122] = ep, C[123] = N) : N = C[123], l = N, a = !ec && !ev && (null != ed || "create" === e_), j = function(e) {
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
                        deleteStatus: V?.deleteStatus,
                        intl: F,
                        mode: er
                    }), C[17] = el?.items, C[18] = eo.isLoading, C[19] = Y, C[20] = L, C[21] = X, C[22] = et, C[23] = S, C[24] = O, C[25] = I, C[26] = F, C[27] = ei, C[28] = ea, C[29] = R, C[30] = z, C[31] = K, C[32] = T, C[33] = D, C[34] = A, C[35] = W, C[36] = U, C[37] = _, C[38] = B, C[39] = G, C[40] = $, C[41] = Q, C[42] = V?.automationId, C[43] = V?.deleteStatus, C[44] = V?.mode, C[45] = ee?.name, C[46] = ee?.rrule, C[47] = E, C[48] = J, C[49] = en, C[50] = H, C[51] = a, C[52] = l, C[53] = b, C[54] = y, C[55] = j, C[56] = w
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