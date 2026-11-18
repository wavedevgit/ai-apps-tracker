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
        var n = a("lAQI"),
            o = a("KJ1J"),
            l = a("kqQk"),
            i = a("acxW"),
            s = a("xSzB");
        let r = n.F({
            success: n.z(!0),
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
        var n = a("lAQI");
        let o = n.F({
            navigationSource: n.p(["scheduled_page", "notification", "conversation", "conversation_sidebar", "editor", "space_schedules_panel"])
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
            l = a("Q840"),
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
                let t, a, s, d, h, g, v, x = (0, o.c)(22),
                    {
                        automation: f
                    } = e,
                    b = (0, l.y)(p.a),
                    y = (0, i.a)(),
                    j = (0, l.x)(c.g, f.id);
                x[0] !== f || x[1] !== j || x[2] !== y ? (t = (0, m.a)(f, j, y), x[0] = f, x[1] = j, x[2] = y, x[3] = t) : t = x[3];
                let {
                    scheduleLabel: w
                } = t;
                x[4] !== f.title || x[5] !== j?.automation.title || x[6] !== j?.automation.title.trim ? (a = j?.automation.title.trim() || f.title, x[4] = f.title, x[5] = j?.automation.title, x[6] = j?.automation.title.trim, x[7] = a) : a = x[7];
                let k = a;
                return x[8] !== f.id || x[9] !== j || x[10] !== b || x[11] !== k ? (s = () => {
                    null == j && b.queryClient.invalidateQueries({
                        queryKey: ["cloud-automations"]
                    }), (0, u.openAutomationSidePanelTab)({
                        scope: b,
                        automationId: f.id,
                        title: k,
                        toggle: !0,
                        navigationSource: "conversation"
                    })
                }, d = null, x[8] = f.id, x[9] = j, x[10] = b, x[11] = k, x[12] = s, x[13] = d) : (s = x[12], d = x[13]), x[14] !== w || x[15] !== s || x[16] !== d || x[17] !== k ? (h = (0, n.jsx)(r.a, {
                    title: k,
                    subtitle: w,
                    ariaLabel: k,
                    canOpen: !0,
                    onOpen: s,
                    actions: d
                }), x[14] = w, x[15] = s, x[16] = d, x[17] = k, x[18] = h) : h = x[18], x[19] === Symbol.for("react.memo_cache_sentinel") ? (g = null, x[19] = g) : g = x[19], x[20] !== h ? (v = (0, n.jsxs)("div", {
                    className: "flex w-full min-w-0 flex-col gap-2 self-start",
                    children: [h, g]
                }), x[20] = h, x[21] = v) : v = x[21], v
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
            l = a("Q840"),
            i = a("zd8w"),
            s = a("rEML"),
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
                        conversationId: v
                    } = e,
                    x = (0, l.y)(d.a),
                    {
                        key: f,
                        state: b
                    } = (0, s.X)();
                g[0] !== b ? (t = (0, c.a)(b), g[0] = b, g[1] = t) : t = g[1];
                let y = t;
                return g[2] !== v || g[3] !== f || g[4] !== x || g[5] !== y ? (a = () => {
                    if ("chatgpt-thread" !== x.value.routeKind) return;
                    let e = x.value.conversationId;
                    return x.watch(t => {
                        let a = t.get(p.j, v);
                        if (null == a || a !== t.get(p.j, e)) return;
                        let n = {
                            locationKey: f,
                            conversationId: a
                        };
                        x.get(m, n) || (x.set(m, n, !0), (0, u.a)(x, o.c, {
                            type: "CHATGPT_TASKS_EVENT_TYPE_CONVERSATION_WITH_TASK_VIEWED",
                            conversationId: a,
                            openSource: null == y ? void 0 : r.c[y],
                            openDestination: "CHATGPT_TASKS_OPEN_DESTINATION_CONVERSATION"
                        }))
                    })
                }, h = [v, f, x, y], g[2] = v, g[3] = f, g[4] = x, g[5] = y, g[6] = a, g[7] = h) : (a = g[6], h = g[7]), (0, i.useEffect)(a, h), null
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
            l = a("Q840"),
            i = a("zd8w"),
            s = a("oyxz"),
            r = a("Wf1j"),
            c = a("rEML"),
            u = a("Ro2M"),
            d = a("bN4H"),
            p = a("pnPL"),
            m = a("IY6Y"),
            h = a("tSEg"),
            g = a("cWHY"),
            v = a("VRzh"),
            x = a("DuVB");

        function f(e) {
            return (0, n.jsx)(b, {
                automation: e
            }, e.id)
        }
        let b = (0, i.memo)(function(e) {
            let t, a, i, s, c, m, g, v = (0, o.c)(19),
                {
                    automation: f
                } = e,
                b = (0, l.y)(h.a),
                y = (0, r.a)(),
                j = (0, l.x)(u.g, f.id);
            v[0] !== f || v[1] !== j || v[2] !== y ? (t = (0, x.a)(f, j, y), v[0] = f, v[1] = j, v[2] = y, v[3] = t) : t = v[3];
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
            }), v[15] = m) : m = v[15], v[16] !== a || v[17] !== c ? (g = (0, n.jsx)("li", {
                className: "border-b border-subtle",
                "data-automation-card": !0,
                children: (0, n.jsxs)("button", {
                    type: "button",
                    className: "flex w-full min-w-0 cursor-interaction items-center justify-between gap-4 py-3 text-start hover:text-default",
                    onClick: a,
                    children: [c, m]
                })
            }), v[16] = a, v[17] = c, v[18] = g) : g = v[18], g
        });
        a.d(t, {}, {
            a: function(e) {
                let t, a, i, r, d, p, h, x, b, y, j = (0, o.c)(22),
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
                return j[4] !== M.length || j[5] !== k ? (a = null != k && M.length > 0 ? (0, n.jsx)(v.a, {
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
                                defaultMessage: "Scheduled"
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
                    defaultMessage: "See all tasks"
                }), j[13] = h) : h = j[13], j[14] !== p ? (x = (0, n.jsx)("li", {
                    children: (0, n.jsx)("button", {
                        type: "button",
                        className: "w-full cursor-interaction py-3 text-start text-sm text-tertiary select-none hover:text-default",
                        onClick: p,
                        children: h
                    })
                }), j[14] = p, j[15] = x) : x = j[15], j[16] !== d || j[17] !== x ? (b = (0, n.jsxs)("ul", {
                    className: "px-4",
                    children: [d, x]
                }), j[16] = d, j[17] = x, j[18] = b) : b = j[18], j[19] !== a || j[20] !== b ? (y = (0, n.jsxs)("section", {
                    className: "w-full max-w-sm overflow-hidden rounded-2xl border border-default bg-surface",
                    children: [a, r, b]
                }), j[19] = a, j[20] = b, j[21] = y) : y = j[21], y
            }
        })
    }),
    MAIj: (function(e, t, a) {
        var n = a("Q840"),
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
    fXpx: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            l = a("Q840"),
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
                        refetch: g
                    } = (0, l.x)(r.a, a);
                if (null != m) {
                    let e;
                    return d[4] !== t || d[5] !== m ? (e = t?.(m) ?? null, d[4] = t, d[5] = m, d[6] = e) : e = d[6], e
                }
                return p ? null : (d[7] !== g ? (s = () => void g(), d[7] = g, d[8] = s) : s = d[8], d[9] !== h || d[10] !== s ? (u = (0, n.jsx)(c, {
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
            l = a("Q840"),
            i = a("UKCO"),
            s = a("sM3V"),
            r = a("KJ1J"),
            c = a("HUHI"),
            u = a("rO8L"),
            d = a("NJrC"),
            p = a("W10I"),
            m = a("EEop"),
            h = a("cLdu"),
            g = a("ueue"),
            v = a("whdX"),
            x = a("tSEg"),
            f = a("KU8M"),
            b = a("LF5P"),
            y = a("MdwM"),
            j = a("Hkqr"),
            w = a("acxW");
        a.d(t, {}, {
            a: function(e) {
                let t, a, o, c, u, d, m, h, g, v, x = (0, n.c)(50),
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
                x[0] !== b.invocation.server || x[1] !== b.result ? (t = (0, r.f)(b.invocation.server), a = (0, w.a)({
                    isCodexAppsServer: t,
                    result: b.result
                }), x[0] = b.invocation.server, x[1] = b.result, x[2] = t, x[3] = a) : (t = x[2], a = x[3]);
                let I = a,
                    T = b.result?.type !== "success" || I ? null : b.result.raw,
                    R = T ?? k?.toolResult ?? null;
                x[4] !== j || x[5] !== y ? (o = {
                    hostId: y,
                    conversationId: j
                }, x[4] = j, x[5] = y, x[6] = o) : o = x[6];
                let A = (0, l.x)(s.b, o);
                x[7] !== y || x[8] !== b.appContext || x[9] !== b.invocation.server || x[10] !== b.invocation.tool || x[11] !== b.invocationResourceUri || x[12] !== A ? (c = {
                    appContext: b.appContext,
                    hostId: y,
                    invocationResourceUri: b.invocationResourceUri,
                    server: b.invocation.server,
                    threadId: A,
                    tool: b.invocation.tool
                }, x[7] = y, x[8] = b.appContext, x[9] = b.invocation.server, x[10] = b.invocation.tool, x[11] = b.invocationResourceUri, x[12] = A, x[13] = c) : c = x[13];
                let _ = c;
                x[14] !== M ? (u = {
                    enabled: M
                }, x[14] = M, x[15] = u) : u = x[15];
                let U = (0, l.x)(f.a, _, u);
                x[16] !== U.data || x[17] !== b.invocation.server || x[18] !== b.invocation.tool || x[19] !== b.invocationResourceUri ? (d = (0, p.c)({
                    invocationResourceUri: b.invocationResourceUri,
                    mcpServerStatuses: U.data,
                    server: b.invocation.server,
                    tool: b.invocation.tool
                })?.resourceUri, x[16] = U.data, x[17] = b.invocation.server, x[18] = b.invocation.tool, x[19] = b.invocationResourceUri, x[20] = d) : d = x[20];
                let L = d;
                x[21] !== U.isPending || x[22] !== j || x[23] !== L || x[24] !== R?._meta || x[25] !== k?.resourceUri || x[26] !== b.appContext?.resourceUri || x[27] !== b.mcpAppResourceUri ? (m = j.startsWith("chatgpt:") ? L : b.appContext?.resourceUri ?? L ?? (U.isPending ? k?.resourceUri : void 0) ?? (0, i.Jg)(R?._meta) ?? b.mcpAppResourceUri, x[21] = U.isPending, x[22] = j, x[23] = L, x[24] = R?._meta, x[25] = k?.resourceUri, x[26] = b.appContext?.resourceUri, x[27] = b.mcpAppResourceUri, x[28] = m) : m = x[28];
                let E = m,
                    O = null != E && U.isPending && b.appContext?.resourceUri == null && null == L && k?.resourceUri == null,
                    P = (0, l.x)(S && t ? f.b : null, _);
                I ? h = "error" : b.completed && null == b.result && null == R && (h = "cancelled");
                let D = E ?? k?.resourceUri ?? null,
                    H = t && null != b.appContext ? b.callId : null,
                    z = h;
                return x[29] !== U.data || x[30] !== b.appContext || x[31] !== b.invocation.server || x[32] !== b.invocation.tool || x[33] !== b.invocationResourceUri ? (g = (0, p.b)({
                    appContext: b.appContext,
                    invocationResourceUri: b.invocationResourceUri,
                    mcpServerStatuses: U.data,
                    server: b.invocation.server,
                    tool: b.invocation.tool
                }), x[29] = U.data, x[30] = b.appContext, x[31] = b.invocation.server, x[32] = b.invocation.tool, x[33] = b.invocationResourceUri, x[34] = g) : g = x[34], x[35] !== U || x[36] !== j || x[37] !== R || x[38] !== y || x[39] !== t || x[40] !== O || x[41] !== b || x[42] !== T || x[43] !== H || x[44] !== g || x[45] !== D || x[46] !== I || x[47] !== h || x[48] !== P ? (v = {
                    item: b,
                    hostId: y,
                    conversationId: j,
                    catalog: U,
                    resourceUri: D,
                    isResourceUriPending: O,
                    toolScope: P,
                    isCodexAppsToolCall: t,
                    originCallId: H,
                    successfulToolResult: T,
                    displayedSuccessfulToolResult: R,
                    toolCallFailed: I,
                    toolCallStatus: z,
                    toolDefinition: g
                }, x[35] = U, x[36] = j, x[37] = R, x[38] = y, x[39] = t, x[40] = O, x[41] = b, x[42] = T, x[43] = H, x[44] = g, x[45] = D, x[46] = I, x[47] = h, x[48] = P, x[49] = v) : v = x[49], v
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
                        toolScope: g,
                        originCallId: x
                    } = e,
                    f = g?.connectorId ?? null,
                    b = g?.kind === "target" ? g : null,
                    y = m ?? null,
                    j = t && !h;
                s[0] !== u || s[1] !== c || s[2] !== r.appContext || s[3] !== r.completed || s[4] !== r.invocation.server || s[5] !== x || s[6] !== f || s[7] !== b || s[8] !== y || s[9] !== j ? (a = {
                    appContext: r.appContext,
                    connectorId: f,
                    connectorTarget: b,
                    hostId: c,
                    originCallId: x,
                    callCompleted: r.completed,
                    server: r.invocation.server,
                    threadId: u,
                    uri: y,
                    enabled: j
                }, s[0] = u, s[1] = c, s[2] = r.appContext, s[3] = r.completed, s[4] = r.invocation.server, s[5] = x, s[6] = f, s[7] = b, s[8] = y, s[9] = j, s[10] = a) : a = s[10];
                let w = (0, v.f)(a),
                    k = h ? void 0 : w.data;
                s[11] !== k ? (o = (0, d.c)(k), s[11] = k, s[12] = o) : o = s[12];
                let C = o,
                    {
                        error: N,
                        isPending: S,
                        isFetching: M
                    } = h || e.isCodexAppsToolCall && null == g ? p : w;
                return s[13] !== N || s[14] !== M || s[15] !== S || s[16] !== k?.resource ? (l = k?.resource != null ? {
                    error: null,
                    isLoading: !1
                } : {
                    error: M ? null : N,
                    isLoading: M || S && null == N
                }, s[13] = N, s[14] = M, s[15] = S, s[16] = k?.resource, s[17] = l) : l = s[17], s[18] !== w.access || s[19] !== w.refetch || s[20] !== w.refetchResource || s[21] !== C || s[22] !== k || s[23] !== l ? (i = {
                    resource: k,
                    renderData: C,
                    access: w.access,
                    refetch: w.refetch,
                    refetchResource: w.refetchResource,
                    state: l
                }, s[18] = w.access, s[19] = w.refetch, s[20] = w.refetchResource, s[21] = C, s[22] = k, s[23] = l, s[24] = i) : i = s[24], i
            },
            c: function(e) {
                let t, a, i, s, d, p, v, f, w, k, C, N, S, M = (0, n.c)(50),
                    {
                        item: I,
                        hostId: T,
                        appInfoOverride: R,
                        enabled: A,
                        retryOnMount: _
                    } = e,
                    U = void 0 === A || A,
                    L = (0, l.y)(x.a);
                M[0] !== R || M[1] !== U || M[2] !== I ? (t = U && null == R && (0, b.g)(I), M[0] = R, M[1] = U, M[2] = I, M[3] = t) : t = M[3], M[4] !== T || M[5] !== t ? (a = {
                    enabled: t,
                    hostId: T
                }, M[4] = T, M[5] = t, M[6] = a) : a = M[6];
                let {
                    data: E
                } = (0, c.m)(a);
                M[7] !== R || M[8] !== E || M[9] !== I.appContext || M[10] !== I.functionName || M[11] !== I.invocation.server || M[12] !== I.invocation.tool ? (i = R ?? (null == E ? null : (0, j.b)({
                    appContext: I.appContext,
                    apps: E,
                    functionName: I.functionName,
                    serverName: I.invocation.server,
                    toolName: I.invocation.tool
                })), M[7] = R, M[8] = E, M[9] = I.appContext, M[10] = I.functionName, M[11] = I.invocation.server, M[12] = I.invocation.tool, M[13] = i) : i = M[13];
                let O = i;
                M[14] !== U || M[15] !== I.invocation.server || M[16] !== I.pluginId ? (s = U && null != I.pluginId && !(0, r.f)(I.invocation.server), M[14] = U, M[15] = I.invocation.server, M[16] = I.pluginId, M[17] = s) : s = M[17], M[18] !== T || M[19] !== s ? (d = {
                    enabled: s,
                    hostId: T
                }, M[18] = T, M[19] = s, M[20] = d) : d = M[20];
                let P = (0, u.a)(d);
                M[21] !== T || M[22] !== P ? (p = {
                    enabled: P,
                    hostId: T,
                    roots: void 0,
                    resolveActiveRoots: !0
                }, M[21] = T, M[22] = P, M[23] = p) : p = M[23];
                let {
                    data: D
                } = (0, h.l)(p);
                M[24] !== D || M[25] !== I.pluginId ? (v = D?.find(e => {
                    let {
                        plugin: t
                    } = e;
                    return t.id === I.pluginId || null != t.remotePluginId && t.remotePluginId === I.pluginId
                }), M[24] = D, M[25] = I.pluginId, M[26] = v) : v = M[26];
                let H = v,
                    z = P && null != D && null != I.pluginId && null == H;
                M[27] !== T || M[28] !== I.pluginId || M[29] !== L.query || M[30] !== z ? (f = L.query.getOptions(m.l, (0, m.a)({
                    hostId: T,
                    pluginId: z ? I.pluginId ?? null : null
                })), M[27] = T, M[28] = I.pluginId, M[29] = L.query, M[30] = z, M[31] = f) : f = M[31];
                let W = f,
                    Q = z && W.enabled,
                    J = _ ?? W.retryOnMount;
                M[32] !== W || M[33] !== Q || M[34] !== J ? (w = {
                    ...W,
                    enabled: Q,
                    retry: !1,
                    retryOnMount: J
                }, M[32] = W, M[33] = Q, M[34] = J, M[35] = w) : w = M[35];
                let {
                    data: q
                } = (0, o.a)(w);
                M[36] !== q ? (k = null == q ? null : (0, g.c)(q), M[36] = q, M[37] = k) : k = M[37];
                let B = k,
                    F = H ?? B,
                    K = B?.plugin.id ?? H?.plugin.id ?? I.pluginId;
                return M[38] !== D || M[39] !== B || M[40] !== z ? (C = z && null != B ? [B] : D ?? [], M[38] = D, M[39] = B, M[40] = z, M[41] = C) : C = M[41], M[42] !== I.invocation.server || M[43] !== K || M[44] !== C ? (N = (0, y.a)({
                    pluginId: K,
                    plugins: C,
                    serverName: I.invocation.server
                }), M[42] = I.invocation.server, M[43] = K, M[44] = C, M[45] = N) : N = M[45], M[46] !== O || M[47] !== F || M[48] !== N ? (S = {
                    matchingApp: O,
                    plugin: F,
                    pluginIcon: N
                }, M[46] = O, M[47] = F, M[48] = N, M[49] = S) : S = M[49], S
            }
        })
    }),
    o1Ns: (function(e, t, a) {
        var n = a("SZCv"),
            o = a.n(n),
            l = a("Q840"),
            i = a("UKCO"),
            s = a("KJ1J"),
            r = a("Sgjw"),
            c = a("ojna"),
            u = a("qZWE"),
            d = a("tSEg"),
            p = a("acxW");
        let m = (0, l.d)(d.a, (e, t) => {
            let {
                get: a
            } = t;
            return new Map(e.map(e => {
                let t = (0, i.af)(e),
                    n = a(u.h, t);
                return [e, {
                    sourceId: a(u.u, t),
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
                } = e, o = !(0, c.b)(t.invocation) && !(0, r.b)(t.invocation, a) && !0 !== t.isMcpAppWidgetSuperseded && (n?.sourceId == null || n.sourceId === (0, i.af)(t.callId));
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
            u = a("Q840"),
            d = a("UKCO"),
            p = a("OZum"),
            m = a("zd8w"),
            h = a("Wf1j"),
            g = a("oyxz"),
            v = a("mnR8"),
            x = a("Sgjw"),
            f = a("ojna"),
            b = a("USdi"),
            y = a("khkh"),
            j = a("SHXB"),
            w = a("bPZ9"),
            k = a("OOaz"),
            C = a("Zm2g"),
            N = a("FvYa"),
            S = a("A7Ss"),
            M = a("Sm6l"),
            I = a("la9L"),
            T = a("rmk3"),
            R = a("JNtf"),
            A = a("mUDD"),
            _ = a("KxMp"),
            U = a("HOLv"),
            L = a("Wdu7"),
            E = a("wwME"),
            O = a("ZyN8"),
            P = a("YeQK"),
            D = a("qYBv"),
            H = a("oKu4"),
            z = a("FWVQ"),
            W = a("IN8o"),
            Q = a("HwRo"),
            J = a("C3P5"),
            q = a("aENG"),
            B = a("Cv9y"),
            F = a("XxcM"),
            K = a("EAcR"),
            V = a("NJrC"),
            G = a("EDsV"),
            Z = a("geS6"),
            Y = a("qwxA"),
            $ = a("qZWE"),
            X = a("KLqe"),
            ee = a("Sd8U"),
            et = a("tSEg"),
            ea = a("hZax"),
            en = a("WFY2"),
            eo = a("S7UD"),
            el = a("MFk9"),
            ei = a("K5Kt"),
            es = a("HBzQ"),
            er = a("JGoU"),
            ec = a("cKhh"),
            eu = a("kRUe"),
            ed = a("GmdE"),
            ep = a("t7eZ"),
            em = a("LF5P"),
            eh = a("ZiDw"),
            eg = a("ltPT"),
            ev = a("SfaR"),
            ex = a("DYB3"),
            ef = a("MAIj"),
            eb = a("mRLe"),
            ey = a("fXpx"),
            ej = a("LkKu"),
            ew = a("z0Na"),
            ek = a("o62A"),
            eC = a("o1Ns"),
            eN = a("alO6"),
            eS = a("acxW"),
            eM = a("wbOy"),
            eI = a("m0Ld"),
            eT = a("w4SA"),
            eR = a("JQPB"),
            eA = a("jD7W");

        function e_(e) {
            return "text" !== e.type
        }

        function eU(e) {
            let t, a, l, i, s, r, c, u, d, m, h = (0, o.c)(35),
                {
                    call: v,
                    fallbackPageUrl: x,
                    loadRemoteLogos: f
                } = e,
                b = null == v.sourceHostname ? x : `https://${v.sourceHostname}`,
                y = "invokeTool" === v.kind ? v.inputJson : void 0,
                j = "invokeTool" === v.kind && !0 === v.inputTruncated;
            h[0] !== f || h[1] !== b ? (t = null == b ? (0, n.jsx)(U.a, {
                className: "shrink-0 text-text/60",
                asset: eA.a
            }) : (0, n.jsx)(_.a, {
                className: "icon-xs shrink-0 text-text/60",
                href: b,
                loadRemote: f
            }), h[0] = f, h[1] = b, h[2] = t) : t = h[2], h[3] !== v.name || h[4] !== v.title ? (a = v.title ?? (0, p.a)(v.name, {
                style: "sentence"
            }), h[3] = v.name, h[4] = v.title, h[5] = a) : a = h[5], h[6] !== v.kind || h[7] !== a ? (l = (0, n.jsx)(g.a, {
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
            h[12] !== v.description || h[13] !== v.name || h[14] !== v.readOnlyHint || h[15] !== v.sourceHostname || h[16] !== v.title || h[17] !== i || h[18] !== w ? (s = eL({
                name: v.name,
                title: v.title,
                description: v.description,
                website: v.sourceHostname,
                readOnlyHint: v.readOnlyHint,
                input: i,
                inputTruncated: w
            }, 2), h[12] = v.description, h[13] = v.name, h[14] = v.readOnlyHint, h[15] = v.sourceHostname, h[16] = v.title, h[17] = i, h[18] = w, h[19] = s) : s = h[19];
            let k = j ? "true" : "false";
            return h[20] !== k ? (r = (0, n.jsx)(g.a, {
                id: "codex.localConversation.webMcpTools.toolLabel",
                defaultMessage: "{truncated, select, true {Tool (input truncated)} other {Tool}}",
                values: {
                    truncated: k
                }
            }), h[20] = k, h[21] = r) : r = h[21], h[22] !== s || h[23] !== r ? (c = (0, n.jsx)(I.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: s,
                language: "json",
                showStickyRightContent: !1,
                title: r
            }), h[22] = s, h[23] = r, h[24] = c) : c = h[24], h[25] !== v.outputJson || h[26] !== v.outputTruncated ? (u = null == v.outputJson ? null : (0, n.jsx)(I.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: v.outputTruncated ? v.outputJson : function(e) {
                    try {
                        return eL(JSON.parse(e), 2)
                    } catch {
                        return e
                    }
                }(v.outputJson),
                language: "json",
                showStickyRightContent: !1,
                title: (0, n.jsx)(g.a, {
                    id: "codex.localConversation.webMcpTools.resultLabel",
                    defaultMessage: "{truncated, select, true {Result (truncated)} other {Result}}",
                    values: {
                        truncated: v.outputTruncated ? "true" : "false"
                    }
                })
            }), h[25] = v.outputJson, h[26] = v.outputTruncated, h[27] = u) : u = h[27], h[28] !== u || h[29] !== c ? (d = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2",
                children: [c, u]
            }), h[28] = u, h[29] = c, h[30] = d) : d = h[30], h[31] !== t || h[32] !== d || h[33] !== l ? (m = (0, n.jsx)(ec.a, {
                icon: t,
                status: "completed",
                summary: l,
                children: d
            }), h[31] = t, h[32] = d, h[33] = l, h[34] = m) : m = h[34], m
        }

        function eL(e, t) {
            try {
                return JSON.stringify(e, null, t) ?? "null"
            } catch {
                return en.a.debug("Failed to stringify MCP tool call payload", {
                    safe: {
                        value: e
                    },
                    sensitive: {}
                }), ""
            }
        }

        function eE(e) {
            let t = (0, o.c)(73),
                {
                    block: a,
                    conversationId: l,
                    hostId: s
                } = e,
                r = (0, u.y)(ee.a),
                c = (0, h.a)();
            switch (a.type) {
                case "image": {
                    let e, o, i, u, d, p, m;
                    t[0] !== a.annotations || t[1] !== c ? (e = eP(a.annotations, c), t[0] = a.annotations, t[1] = c, t[2] = e) : e = t[2];
                    let h = e,
                        g = `data:${a.mimeType};base64,${a.data}`;
                    t[3] !== c ? (o = c.formatMessage({
                        id: "codex.mcpTool.contentBlock.imageAlt",
                        defaultMessage: "Image returned by tool"
                    }), t[3] = c, t[4] = o) : o = t[4];
                    let v = o;
                    t[5] !== l || t[6] !== s || t[7] !== v || t[8] !== g || t[9] !== c || t[10] !== r ? (i = () => (0, P.getGeneratedImageContextMenuItems)(r, {
                        chatGptConversationId: l.startsWith("chatgpt:") ? (0, k.d)(l.slice(8)) : void 0,
                        displaySrc: g,
                        hostId: s,
                        image: {
                            kind: "generic",
                            src: g,
                            alt: v
                        },
                        intl: c
                    }), t[5] = l, t[6] = s, t[7] = v, t[8] = g, t[9] = c, t[10] = r, t[11] = i) : i = t[11], t[12] !== v || t[13] !== g ? (u = (0, n.jsx)("img", {
                        className: "max-h-48 w-max max-w-full gap-0.5 rounded-md object-contain",
                        alt: v,
                        src: g
                    }), t[12] = v, t[13] = g, t[14] = u) : u = t[14], t[15] !== i || t[16] !== u ? (d = (0, n.jsx)(T.a, {
                        getItems: i,
                        children: u
                    }), t[15] = i, t[16] = u, t[17] = d) : d = t[17];
                    let x = d;
                    if (null == h) return x;
                    return t[18] !== h ? (p = (0, n.jsx)("p", {
                        className: "text-size-chat whitespace-pre-wrap text-codex-description/80",
                        children: h
                    }), t[18] = h, t[19] = p) : p = t[19], t[20] !== x || t[21] !== p ? (m = (0, n.jsxs)("div", {
                        className: "flex flex-col gap-0.5",
                        children: [x, p]
                    }), t[20] = x, t[21] = p, t[22] = m) : m = t[22], m
                }
                case "audio": {
                    let e, o, l, i;
                    t[23] !== a.annotations || t[24] !== c ? (e = eP(a.annotations, c), t[23] = a.annotations, t[24] = c, t[25] = e) : e = t[25];
                    let s = e;
                    return t[26] !== a.data || t[27] !== a.mimeType ? (o = (0, n.jsx)(eO, {
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
                    t[34] !== a.annotations || t[35] !== c ? (e = eP(a.annotations, c), t[34] = a.annotations, t[35] = c, t[36] = e) : e = t[36];
                    let s = e,
                        r = a.title ?? a.name ?? a.uri;
                    return t[37] !== r ? (o = (0, n.jsx)("div", {
                        className: "break-words text-codex-description/80",
                        children: (0, n.jsx)(g.a, {
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
                    t[44] !== a.resource.annotations ? (e = eD(a.resource.annotations), t[44] = a.resource.annotations, t[45] = e) : e = t[45];
                    let p = e;
                    return t[46] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, n.jsx)("span", {
                        className: "font-medium text-default",
                        children: (0, n.jsx)(g.a, {
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
                            children: (0, n.jsx)(g.a, {
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
                            children: (0, n.jsx)(g.a, {
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
                            children: (0, n.jsx)(g.a, {
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
                    return t[61] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.b)("[&_*]:text-text/50", "bg-primary-soft text-codex-description/80 max-h-48 overflow-auto whitespace-pre-wrap rounded-md px-3 py-2 text-size-chat"), t[61] = e) : e = t[61], t[62] !== a.raw ? (o = eL(a.raw, 2), t[62] = a.raw, t[63] = o) : o = t[63], t[64] !== o ? (l = (0, n.jsx)("pre", {
                        className: e,
                        children: o
                    }), t[64] = o, t[65] = l) : l = t[65], l
                }
                case "text": {
                    let e, o, l;
                    t[66] !== a.annotations || t[67] !== a.text || t[68] !== c ? (e = [a.text, eP(a.annotations, c)].filter(e => null != e).join("\n"), t[66] = a.annotations, t[67] = a.text, t[68] = c, t[69] = e) : e = t[69];
                    let i = e;
                    return t[70] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, n.jsx)(g.a, {
                        id: "codex.mcpTool.textBlock.plaintextTitle",
                        defaultMessage: "plaintext"
                    }), t[70] = o) : o = t[70], t[71] !== i ? (l = (0, n.jsx)(I.CodeSnippet, {
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

        function eO(e) {
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
            let x = a;
            if (!d) return null;
            if (h?.data === c && h.mimeType === u) {
                let e;
                return r[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(g.a, {
                    id: "codex.mcpTool.contentBlock.audioUnavailable",
                    defaultMessage: "Audio unavailable"
                }), r[5] = e) : e = r[5], e
            }
            return r[6] !== x || r[7] !== p ? (l = e => {
                if (null != e) return (0, eo.d)(e, p, x)
            }, r[6] = x, r[7] = p, r[8] = l) : l = r[8], r[9] !== x || r[10] !== l ? (i = (0, n.jsx)("audio", {
                ref: l,
                className: "w-full gap-0.5",
                controls: !0,
                onError: x,
                preload: "metadata"
            }), r[9] = x, r[10] = l, r[11] = i) : i = r[11], i
        }

        function eP(e, t) {
            let a = eD(e);
            return null == a ? null : t.formatMessage({
                id: "codex.mcpTool.contentBlock.annotationsLine",
                defaultMessage: "Annotations: {annotations}"
            }, {
                annotations: a
            })
        }

        function eD(e) {
            if (null == e) return null;
            let t = [];
            return (null != e.audience && e.audience.length > 0 && t.push(`audience=${e.audience.join(", ")}`), null != e.priority && t.push(`priority=${String(e.priority)}`), null != e.lastModified && t.push(`lastModified=${e.lastModified}`), 0 === t.length) ? null : t.join("; ")
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, s, r, k, T, P, ee, en, eo, ec, eO, eP, eD, eH, ez, eW, eQ, eJ, eq, eB, eF, eK, eV, eG, eZ, eY, e$, eX, e1, e0, e2, e3, e4, e5, e8, e6, e7, e9, te, tt, ta, tn, to, tl, ti = (0, o.c)(253),
                    {
                        item: ts,
                        conversationId: tr,
                        expandedContentOnly: tc,
                        hideTextBlocksWithStructuredContent: tu,
                        hostId: td,
                        loadRemoteLogos: tp,
                        appInfoOverride: tm,
                        onExpand: th,
                        onOpenPermissions: tg,
                        responseBodyId: tv,
                        renderMcpApps: tx,
                        shouldAutoExpandMcpApp: tf,
                        summary: tb,
                        summaryIcon: ty,
                        toolActivityTurnKey: tj
                    } = e,
                    tw = void 0 !== tc && tc,
                    tk = void 0 !== tu && tu,
                    tC = void 0 === tp || tp,
                    tN = void 0 === tx || tx,
                    tS = void 0 === tb ? null : tb,
                    tM = (0, u.y)(et.a),
                    [tI, tT] = (0, m.useState)(!1);
                ti[0] !== td || ti[1] !== ts ? (t = (0, ej.b)(ts, td), ti[0] = td, ti[1] = ts, ti[2] = t) : t = ti[2], ti[3] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                    enabled: !1
                }, ti[3] = a) : a = ti[3];
                let tR = (0, u.x)(ej.a, t, a);
                ti[4] !== tR || ti[5] !== ts ? (s = null == tR ? ts : {
                    ...ts,
                    result: tR,
                    deferredOutputTurnId: void 0
                }, ti[4] = tR, ti[5] = ts, ti[6] = s) : s = ti[6];
                let tA = s;
                ti[7] !== tm || ti[8] !== td || ti[9] !== tA ? (r = {
                    item: tA,
                    hostId: td,
                    appInfoOverride: tm
                }, ti[7] = tm, ti[8] = td, ti[9] = tA, ti[10] = r) : r = ti[10];
                let {
                    matchingApp: t_,
                    pluginIcon: tU
                } = (0, ew.c)(r), tL = (0, h.a)(), {
                    platform: tE
                } = (0, E.a)();
                ti[11] !== tA.callId ? (k = (0, d.af)(tA.callId), ti[11] = tA.callId, ti[12] = k) : k = ti[12];
                let tO = k,
                    tP = (0, u.x)($.u, tO),
                    tD = (0, u.x)($.h, tO),
                    tH = (0, u.x)($.p, tO),
                    tz = tD?.content.toolCallStatus == null && tD?.content.toolResult != null;
                ti[13] !== td || ti[14] !== tA || ti[15] !== tP || ti[16] !== tz ? (T = (0, eC.a)({
                    item: tA,
                    hostId: td,
                    retainedState: {
                        sourceId: tP,
                        hasSuccessfulToolResult: tz
                    }
                }), ti[13] = td, ti[14] = tA, ti[15] = tP, ti[16] = tz, ti[17] = T) : T = ti[17];
                let tW = T;
                ti[18] !== tW || ti[19] !== tN ? (P = tN && (0, Q.c)() && tW.isEligible, ti[18] = tW, ti[19] = tN, ti[20] = P) : P = ti[20];
                let tQ = P;
                ti[21] !== tr || ti[22] !== tA.callId ? (ee = (0, J.a)({
                    callId: tA.callId,
                    conversationId: tr
                }), ti[21] = tr, ti[22] = tA.callId, ti[23] = ee) : ee = ti[23];
                let tJ = ee,
                    tq = (0, u.x)(J.b, tJ);
                (0, ea.f)("2957382457");
                let tB = (0, u.z)(y.a);
                ti[24] !== tr || ti[25] !== tQ ? (en = tQ || !tr.startsWith("chatgpt:"), ti[24] = tr, ti[25] = tQ, ti[26] = en) : en = ti[26], ti[27] !== tr || ti[28] !== td || ti[29] !== tA || ti[30] !== tH || ti[31] !== tQ || ti[32] !== en ? (eo = {
                    item: tA,
                    hostId: td,
                    conversationId: tr,
                    fallback: tH,
                    enabled: tQ,
                    catalogEnabled: en
                }, ti[27] = tr, ti[28] = td, ti[29] = tA, ti[30] = tH, ti[31] = tQ, ti[32] = en, ti[33] = eo) : eo = ti[33];
                let tF = (0, ew.a)(eo),
                    {
                        isCodexAppsToolCall: tK,
                        successfulToolResult: tV,
                        resourceUri: tG,
                        toolDefinition: tZ
                    } = tF,
                    {
                        elementHeightPx: tY,
                        elementRef: t$
                    } = (0, eg.a)(),
                    tX = tA.result?.type === "success" ? tA.result.content : null,
                    t1 = tA.result?.type === "error" ? tA.result.error : null;
                ti[34] !== tA || ti[35] !== tE ? (ec = (0, em.d)({
                    item: tA,
                    platform: tE
                }), ti[34] = tA, ti[35] = tE, ti[36] = ec) : ec = ti[36];
                let t0 = ec,
                    t2 = t0?.nativeAppReference ?? null,
                    t3 = (0, ef.b)(t2),
                    t4 = t3?.appPath ?? null;
                ti[37] !== t4 ? (eO = {
                    appPath: t4
                }, ti[37] = t4, ti[38] = eO) : eO = ti[38];
                let {
                    iconSmall: t5
                } = (0, C.a)(eO);
                ti[39] !== tA || ti[40] !== t_ || ti[41] !== ty ? (eP = void 0 === ty ? (0, ex.d)(tA, null == t_ ? [] : [t_])?.icon : ty, ti[39] = tA, ti[40] = t_, ti[41] = ty, ti[42] = eP) : eP = ti[42];
                let t8 = eP;
                if (void 0 === ty && null != t8) {
                    let e, t;
                    ti[43] !== t_ ? (e = null == t_ ? [] : [t_], ti[43] = t_, ti[44] = e) : e = ti[44], ti[45] !== t8 || ti[46] !== tA || ti[47] !== tC || ti[48] !== e ? (t = (0, n.jsx)(X.a, {
                        item: tA,
                        apps: e,
                        part: "icon",
                        loadMetadata: tC,
                        children: t8
                    }), ti[45] = t8, ti[46] = tA, ti[47] = tC, ti[48] = e, ti[49] = t) : t = ti[49], t8 = t
                }
                ti[50] !== tA.source?.kind || ti[51] !== tV ? (eD = tA.source?.kind === "browserUse" && null != tV ? (0, b.a)(tV._meta) : null, ti[50] = tA.source?.kind, ti[51] = tV, ti[52] = eD) : eD = ti[52];
                let t6 = eD,
                    t7 = tB && !tw && tA.completed && (0, d.si)(tA.invocation.server) && "js" === tA.invocation.tool && null != tV ? (0, ev.a)(tV._meta) : [],
                    t9 = t_ ?? null;
                ti[53] !== tL || ti[54] !== tA.appContext || ti[55] !== tA.completed || ti[56] !== tA.invocation.arguments || ti[57] !== tA.invocation.server || ti[58] !== tA.invocation.tool || ti[59] !== tA.pluginId || ti[60] !== tA.result || ti[61] !== tA.source || ti[62] !== tA.toolDisplay || ti[63] !== t3 || ti[64] !== tE || ti[65] !== t9 || ti[66] !== tZ ? (eH = (0, eN.b)({
                    pluginId: tA.pluginId,
                    toolDisplay: tA.toolDisplay,
                    toolDefinition: tZ,
                    appContext: tA.appContext,
                    completed: tA.completed,
                    intl: tL,
                    toolName: tA.invocation.tool,
                    serverName: tA.invocation.server,
                    matchingApp: t9,
                    nativeDesktopAppMetadata: t3,
                    platform: tE,
                    source: tA.source,
                    toolArguments: tA.invocation.arguments,
                    toolResult: tA.result
                }), ti[53] = tL, ti[54] = tA.appContext, ti[55] = tA.completed, ti[56] = tA.invocation.arguments, ti[57] = tA.invocation.server, ti[58] = tA.invocation.tool, ti[59] = tA.pluginId, ti[60] = tA.result, ti[61] = tA.source, ti[62] = tA.toolDisplay, ti[63] = t3, ti[64] = tE, ti[65] = t9, ti[66] = tZ, ti[67] = eH) : eH = ti[67];
                let {
                    label: ae,
                    readsPlainText: at
                } = eH, aa = tQ && null != tG && tW.isRenderable, an = (0, u.x)(null != tv && aa ? $.j : null, tO), {
                    access: ao,
                    resource: al,
                    renderData: ai,
                    state: as,
                    refetch: ar
                } = (0, ew.b)(tF, aa), ac = tD?.sessionId == null ? null : tD.content.resource, au = null == ac ? al?.resourceIdentityVerified : tD?.content.mcpAppScope.resourceIdentityVerified, ad = null == ac ? as.error : null, ap = aa && null == ac && as.isLoading, am = (0, u.x)($.r, tO), ah = (0, u.x)($.n, tO), ag = (0, V.a)({
                    hasResourceError: null != ad,
                    isResourceLoading: ap,
                    isDilEnabled: !1,
                    renderData: ac ?? ai,
                    resourceUri: tG ?? null,
                    shouldRenderMcpApp: aa
                }), av = "html" === ag.kind ? ag.renderData : null, ax = (0, G.e)({
                    data: av,
                    error: ad,
                    isLoading: ap
                }, $.H), af = "fallback" !== ag.kind, ab = tQ && null != tG && (!af || null != ad || null != am && !(am instanceof G.b) || "too-large" === ax.kind || "error" === ax.kind), ay = ab || (av?.isCollapsible ?? !0), aj = ah;
                ab ? aj = "fallback" : "html" !== ag.kind && (aj = ag.kind);
                let aw = "pending" === aj,
                    ak = "launcher" === aj,
                    aC = aw || ak;
                ti[68] !== tD ? (ez = null != tD && tD.content.resource?.hideAttribution === !0 && (!0 === tD.content.mcpAppScope.isVerifiedFirstParty || (0, ek.b)(tD.content)), ti[68] = tD, ti[69] = ez) : ez = ti[69];
                let aN = ez,
                    aS = "inline" === aj,
                    aM = void 0 !== tf && tf && aa,
                    aI = !ab && tI || aM,
                    aT = af && !ak && (!ay || (tq ?? aI)),
                    aR = aT && !aw,
                    aA = aS && aR,
                    a_ = tI || (tq ?? aM),
                    [aU, aL] = (0, m.useState)(!1),
                    aE = aA && aU,
                    aO = ap || aw && aT;
                ti[70] !== aT || ti[71] !== aE || ti[72] !== aO ? (eW = {
                    isLoading: aO,
                    isInlineRequested: aT,
                    isInlineOpening: aE
                }, ti[70] = aT, ti[71] = aE, ti[72] = aO, ti[73] = eW) : eW = ti[73];
                let aP = (0, z.d)(tO, eW),
                    aD = !ab && (aw || "html" === ag.kind) ? aP : null;
                ti[74] !== tZ ? (eQ = (0, Z.b)(tZ)?.resourceUri, ti[74] = tZ, ti[75] = eQ) : eQ = ti[75];
                let aH = eQ,
                    az = tV?._meta;
                ti[76] !== az ? (eJ = c()(az, ["_codex_apps", "resource_uri"]), ti[76] = az, ti[77] = eJ) : eJ = ti[77];
                let aW = eJ;
                ti[78] !== aH || ti[79] !== tK || ti[80] !== tG || ti[81] !== aW || ti[82] !== tZ?._meta ? (eq = tK && null != aH && aW === aH && (0, d.Jg)(tZ?._meta) === tG, ti[78] = aH, ti[79] = tK, ti[80] = tG, ti[81] = aW, ti[82] = tZ?._meta, ti[83] = eq) : eq = ti[83];
                let aQ = !(eq && !0 === au && (0, z.b)({
                    isInline: !ay && ("inline" === aj || aw),
                    status: aD,
                    hidesAttributionAndActions: av?.hideAttribution === !0 && !0 === av.hideActions
                })) && (aC || !tw && (ay || "html" === ag.kind && !aN));
                ti[84] !== tK || ti[85] !== tA.appContext?.appName || ti[86] !== tA.invocation.server || ti[87] !== t_?.name || ti[88] !== tU?.alt ? (eB = t_?.name ?? tA.appContext?.appName ?? tU?.alt ?? (tK ? null : (0, p.a)(tA.invocation.server)), ti[84] = tK, ti[85] = tA.appContext?.appName, ti[86] = tA.invocation.server, ti[87] = t_?.name, ti[88] = tU?.alt, ti[89] = eB) : eB = ti[89];
                let aJ = eB;
                ti[90] !== aJ || ti[91] !== tZ ? (eF = (0, z.a)((0, v.a)(tZ), aJ), ti[90] = aJ, ti[91] = tZ, ti[92] = eF) : eF = ti[92];
                let aq = eF,
                    aB = ab ? tw || tI : !aC && (tw || (af ? aR : a_));
                e: {
                    let e, t, a, n;
                    if (!aB) {
                        let e;
                        ti[93] !== tX ? (e = {
                            displayContent: tX,
                            displayStructuredContentJson: null
                        }, ti[93] = tX, ti[94] = e) : e = ti[94], eK = e;
                        break e
                    }
                    ti[95] !== tA.result ? (e = tA.result?.type === "success" && null != tA.result.structuredContent ? eL(tA.result.structuredContent, 2) : null, ti[95] = tA.result, ti[96] = e) : e = ti[96];
                    let o = e;ti[97] !== tX || ti[98] !== tk || ti[99] !== o ? (t = tk && null != o && null != tX ? tX.filter(e_) : tX, ti[97] = tX, ti[98] = tk, ti[99] = o, ti[100] = t) : t = ti[100];
                    let l = t;ti[101] !== l ? (a = function(e) {
                        if (e?.length !== 1) return null;
                        let [t] = e;
                        if ("text" !== t.type || null != t.annotations) return null;
                        let a = t.text.trim();
                        if ("{" !== a[0] && "[" !== a[0]) return null;
                        try {
                            return eL(JSON.parse(a), 2)
                        } catch {
                            return null
                        }
                    }(l), ti[101] = l, ti[102] = a) : a = ti[102];
                    let i = a;
                    if (null == i) {
                        let e;
                        ti[103] !== o || ti[104] !== l ? (e = {
                            displayContent: l,
                            displayStructuredContentJson: o
                        }, ti[103] = o, ti[104] = l, ti[105] = e) : e = ti[105], eK = e;
                        break e
                    }
                    if (null == o || i === o) {
                        let e, t;
                        ti[106] === Symbol.for("react.memo_cache_sentinel") ? (e = [], ti[106] = e) : e = ti[106];
                        let a = o ?? i;
                        ti[107] !== a ? (t = {
                            displayContent: e,
                            displayStructuredContentJson: a
                        }, ti[107] = a, ti[108] = t) : t = ti[108], eK = t;
                        break e
                    }
                    ti[109] !== o || ti[110] !== l ? (n = {
                        displayContent: l,
                        displayStructuredContentJson: o
                    }, ti[109] = o, ti[110] = l, ti[111] = n) : n = ti[111],
                    eK = n
                }
                let {
                    displayContent: aF,
                    displayStructuredContentJson: aK
                } = eK, [aV, aG] = (0, m.useState)(!1);
                t: {
                    let e;
                    if (!aV) {
                        eV = null;
                        break t
                    }
                    ti[112] !== tA.callId || ti[113] !== tA.durationMs || ti[114] !== tA.invocation || ti[115] !== tA.result ? (e = eL({
                        callId: tA.callId,
                        invocation: tA.invocation,
                        durationMs: tA.durationMs,
                        result: tA.result
                    }, 2), ti[112] = tA.callId, ti[113] = tA.durationMs, ti[114] = tA.invocation, ti[115] = tA.result, ti[116] = e) : e = ti[116],
                    eV = e
                }
                let aZ = eV;
                ti[117] !== tL ? (eG = tL.formatMessage({
                    id: "codex.mcpTool.rawOutputTriggerTooltip",
                    defaultMessage: "Show raw tool call output"
                }), ti[117] = tL, ti[118] = eG) : eG = ti[118];
                let aY = eG,
                    a$ = tA.completed || null != tA.result || af;
                ti[119] !== tA ? (eZ = (0, ep.a)(tA), ti[119] = tA, ti[120] = eZ) : eZ = ti[120];
                let aX = eZ,
                    a1 = !tw && !aX && !aa && !ab,
                    a0 = !tA.completed;
                ti[121] !== t_ ? (eY = null == t_ ? [] : [t_], ti[121] = t_, ti[122] = eY) : eY = ti[122], ti[123] !== tA || ti[124] !== tC || ti[125] !== eY || ti[126] !== ae ? (e$ = (0, n.jsx)(X.a, {
                    item: tA,
                    apps: eY,
                    part: "label",
                    loadMetadata: tC,
                    children: ae
                }), ti[123] = tA, ti[124] = tC, ti[125] = eY, ti[126] = ae, ti[127] = e$) : e$ = ti[127], ti[128] !== a0 || ti[129] !== e$ ? (eX = (0, n.jsx)(eM.a, {
                    active: a0,
                    className: "min-w-0 shrink truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                    children: e$
                }), ti[128] = a0, ti[129] = e$, ti[130] = eX) : eX = ti[130];
                let a2 = eX;
                ti[131] !== tr || ti[132] !== tA || ti[133] !== a2 ? (e1 = !tr.startsWith("chatgpt:") && (0, eS.b)(tA) ? (0, n.jsxs)("span", {
                    className: "inline-flex max-w-full min-w-0 items-center gap-1 text-text-tertiary/90 group-hover/activity-header:text-default",
                    children: [a2, (0, n.jsx)("span", {
                        "aria-hidden": "true",
                        className: "before:content-['·']"
                    }), (0, n.jsx)("span", {
                        className: "shrink-0",
                        children: (0, n.jsx)(g.a, {
                            id: "codex.mcpTool.timedOutStatus",
                            defaultMessage: "Timed out"
                        })
                    })]
                }) : a2, ti[131] = tr, ti[132] = tA, ti[133] = a2, ti[134] = e1) : e1 = ti[134];
                let a3 = e1;
                ti[135] !== t8 || ti[136] !== t6 || ti[137] !== td || ti[138] !== tA || ti[139] !== tC || ti[140] !== t_ || ti[141] !== t5 || ti[142] !== t3?.displayName || ti[143] !== t2 || ti[144] !== t0 || ti[145] !== tU ? (e0 = void 0 !== t8 ? t8 : (0, n.jsx)(ed.a, {
                    hostId: td,
                    item: tA,
                    loadRemoteLogos: tC,
                    fallback: null == tU && null != t2 ? (0, n.jsx)(N.a, {
                        alt: t3?.displayName ?? t0?.name ?? tA.invocation.server,
                        className: "icon-xs shrink-0 scale-[1.15] object-contain",
                        loadRemote: tC,
                        logoUrl: t5,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(U.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: eI.a
                        })
                    }) : null == tU && t0?.groupKey === em.b ? (0, n.jsx)(U.a, {
                        className: "shrink-0 text-secondary",
                        asset: eI.a
                    }) : null == tU && t0?.logoUrl != null ? (0, n.jsx)(N.a, {
                        alt: t0.name,
                        className: "icon-xs shrink-0 object-contain",
                        loadRemote: tC,
                        logoUrl: t0.logoUrl,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(U.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: eT.a
                        })
                    }) : null == tU && t0?.usesBrowserIcon === !0 ? null == t6 ? (0, n.jsx)(U.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: eA.a
                    }) : (0, n.jsx)(_.a, {
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        href: t6,
                        loadRemote: tC
                    }) : null == tU && (0, d.si)(tA.invocation.server) ? (0, n.jsx)(U.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: eR.a
                    }) : (0, n.jsx)(N.a, {
                        alt: tU?.alt ?? t_?.name ?? tA.appContext?.appName ?? tA.invocation.server,
                        appInfo: null == tU ? t_ : null,
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        loadRemote: tC,
                        knownAppId: tU?.knownAppId ?? tA.appContext?.appName ?? tA.appContext?.connectorId,
                        logoUrl: tU?.logoUrl,
                        fallback: (0, n.jsx)(U.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: eT.a
                        })
                    })
                }), ti[135] = t8, ti[136] = t6, ti[137] = td, ti[138] = tA, ti[139] = tC, ti[140] = t_, ti[141] = t5, ti[142] = t3?.displayName, ti[143] = t2, ti[144] = t0, ti[145] = tU, ti[146] = e0) : e0 = ti[146];
                let a4 = e0;
                ti[147] !== a3 || ti[148] !== tS || ti[149] !== a4 ? (e2 = tS ?? (0, n.jsxs)(n.Fragment, {
                    children: [a4, a3]
                }), ti[147] = a3, ti[148] = tS, ti[149] = a4, ti[150] = e2) : e2 = ti[150];
                let a5 = e2;
                ti[151] !== a_ || ti[152] !== aT || ti[153] !== tI || ti[154] !== tJ || ti[155] !== th || ti[156] !== tM || ti[157] !== aM || ti[158] !== ab || ti[159] !== af || ti[160] !== aS || ti[161] !== tj || ti[162] !== tq ? (e3 = () => {
                    if (ab) {
                        tI || th?.(), tT(!tI);
                        return
                    }
                    let e = af ? !aT : !a_;
                    if (e && th?.(), af) {
                        aL(e && aS), tM.set(J.b, tJ, e);
                        return
                    }
                    e && null != tj && (0, eh.b)(tM, tj), !e && (!0 === tq || aM) && tM.set(J.b, tJ, !1), tT(e)
                }, ti[151] = a_, ti[152] = aT, ti[153] = tI, ti[154] = tJ, ti[155] = th, ti[156] = tM, ti[157] = aM, ti[158] = ab, ti[159] = af, ti[160] = aS, ti[161] = tj, ti[162] = tq, ti[163] = e3) : e3 = ti[163];
                let a8 = e3;
                ti[164] !== tA.automaticApprovalReviews ? (e4 = null == tA.automaticApprovalReviews ? null : (0, n.jsx)(eu.a, {}), ti[164] = tA.automaticApprovalReviews, ti[165] = e4) : e4 = ti[165];
                let a6 = e4,
                    a7 = aA && (av?.prefersBorder ?? tD?.content.resource?.prefersBorder ?? !0),
                    a9 = a$ && "opening" !== aD && !ak && ay ? {
                        alignEnd: a7,
                        expanded: aB,
                        onToggle: a8
                    } : void 0,
                    ne = (0, i.b)("group", a7 && "overflow-hidden rounded-lg border border-strong bg-surface"),
                    nt = (0, i.b)((ak || aA) && "w-full", a7 && "px-4 py-2.5");
                ti[166] !== ar ? (e5 = () => {
                    ar({
                        cancelRefetch: !1
                    })
                }, ti[166] = ar, ti[167] = e5) : e5 = ti[167];
                let na = (0, n.jsx)(K.a, {
                    hostDisplayModes: $.H,
                    resource: {
                        data: null == tG ? null : av,
                        error: ad,
                        isLoading: ap
                    },
                    inlineSurface: aS ? "card" : "standalone",
                    mcpAppId: tO,
                    appName: aJ ?? void 0,
                    presentation: ab ? "inline" : ah,
                    onRetryResourceRead: e5,
                    showLoadingStatus: !aQ
                });
                ti[168] !== td || ti[169] !== tA ? (e8 = (0, ej.b)(tA, td), ti[168] = td, ti[169] = tA, ti[170] = e8) : e8 = ti[170];
                let nn = e8,
                    no = aC && aT,
                    nl = () => (0, n.jsxs)(ei.a, {
                        ref: a1 || aS ? void 0 : t$,
                        className: (0, i.b)(aa && "relative", !ay && "py-1"),
                        variant: ay && !a7 && (aQ || !aS) ? "default" : "flush",
                        children: [null == tA.automaticApprovalReviews ? null : (0, n.jsx)(eu.d, {
                            className: a7 ? "px-4" : void 0,
                            isExpandable: !aS,
                            reviews: tA.automaticApprovalReviews
                        }), null != nn ? (0, n.jsx)(ey.a, {
                            ...nn
                        }) : (0, n.jsxs)(n.Fragment, {
                            children: [af ? aE ? (0, n.jsx)(B.a, {
                                className: "w-full",
                                height: (0, q.a)(null, av?.heightHint ?? null, av?.minFrameHeight ?? null, "card"),
                                showLoadingStatus: !1
                            }) : na : aF && aF.length > 0 ? (0, n.jsx)("div", {
                                className: (0, i.b)("[&_*]:text-text/50", "flex flex-col gap-0.5"),
                                children: aF.map((e, t) => (0, n.jsx)(eE, {
                                    block: e,
                                    conversationId: tr,
                                    hostId: td
                                }, t))
                            }) : t1 ? (0, n.jsx)(L.a, {
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
                                    defaultMessage: "Tool returned no content"
                                })
                            }), !ap && !aE && !af && aK && (0, n.jsx)(I.CodeSnippet, {
                                codeContainerClassName: "max-h-48 overflow-auto",
                                language: "json",
                                content: aK,
                                showStickyRightContent: !1
                            }), !ap && !aE && (0, n.jsx)(R.a, {
                                open: aV,
                                onOpenChange: aG,
                                triggerContent: (0, n.jsx)("div", {
                                    className: (0, i.b)("inline-flex w-fit", aa && "absolute right-1 bottom-2 z-50"),
                                    children: (0, n.jsx)(l.a, {
                                        side: "top",
                                        align: "center",
                                        content: aY,
                                        children: (0, n.jsx)(M.a, {
                                            className: "cursor-interaction opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 focus-visible:opacity-100",
                                            "aria-label": aY,
                                            color: "ghost",
                                            onClick: () => {
                                                aG(!0)
                                            },
                                            size: "icon",
                                            children: (0, n.jsx)(O.a, {
                                                className: "icon-xxs"
                                            })
                                        })
                                    })
                                }),
                                children: (0, n.jsxs)(A.b, {
                                    children: [(0, n.jsx)(A.e, {
                                        children: (0, n.jsx)(A.d, {
                                            title: (0, n.jsx)(R.e, {
                                                children: (0, n.jsx)(g.a, {
                                                    id: "codex.mcpTool.rawOutputHeading",
                                                    defaultMessage: "Raw {server}.{tool} tool call output",
                                                    values: {
                                                        server: tA.invocation.server,
                                                        tool: tA.invocation.tool
                                                    }
                                                })
                                            })
                                        })
                                    }), (0, n.jsx)(A.e, {
                                        children: null == aZ ? null : (0, n.jsx)(I.CodeSnippet, {
                                            codeContainerClassName: "max-h-128 overflow-auto",
                                            language: "json",
                                            content: aZ,
                                            showStickyRightContent: !0
                                        })
                                    })]
                                })
                            })]
                        })]
                    }),
                    ni = a1 ? null : (0, n.jsxs)(n.Fragment, {
                        children: [aX ? (0, n.jsx)(ei.a, {
                            children: (0, n.jsx)(L.a, {
                                className: "w-full",
                                fullWidth: !0,
                                level: "warning",
                                actions: null == tg ? void 0 : (0, n.jsx)(M.a, {
                                    color: "secondary",
                                    onClick: tg,
                                    children: (0, n.jsx)(g.a, {
                                        id: "codex.mcpTool.reviewPermissions",
                                        defaultMessage: "Review permissions"
                                    })
                                }),
                                children: null == tg ? (0, n.jsx)(g.a, {
                                    id: "codex.mcpTool.approvalRequestsDisabled",
                                    defaultMessage: "Approval requests were disabled for this tool call. If available, review this chat’s permissions before retrying."
                                }) : (0, n.jsx)(g.a, {
                                    id: "codex.mcpTool.approvalRequestsDisabled.recovery",
                                    defaultMessage: "Approval requests were disabled for this tool call. Choose “Ask for approval” in this chat’s permissions if available, then ask to retry."
                                })
                            })
                        }) : null, aC ? na : (0, n.jsx)(S.a, {
                            expanded: aB,
                            height: aS ? "auto" : tY,
                            onExpandComplete: aR ? () => aL(!1) : void 0,
                            children: aB ? nl() : null
                        })]
                    });
                ti[171] !== a9 || ti[172] !== a1 || ti[173] !== ni || ti[174] !== nl ? (e6 = a1 ? {
                    disclosure: a9 && {
                        ...a9,
                        details: nl
                    }
                } : {
                    externalDisclosure: a9,
                    body: ni
                }, ti[171] = a9, ti[172] = a1, ti[173] = ni, ti[174] = nl, ti[175] = e6) : e6 = ti[175];
                let ns = e6;
                ti[176] !== a6 || ti[177] !== a9 || ti[178] !== nt || ti[179] !== ap || ti[180] !== ni || ti[181] !== tO || ti[182] !== ns || ti[183] !== a5 || ti[184] !== a4 || ti[185] !== aq || ti[186] !== aD ? (e7 = null != aD ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(W.a, {
                        accessory: a6,
                        className: nt,
                        disabled: ap,
                        disclosure: a9,
                        icon: a4,
                        mcpAppId: tO,
                        name: aq,
                        status: aD
                    }), ni]
                }) : (0, n.jsx)(es.a, {
                    accessory: a6,
                    className: nt,
                    ...ns,
                    children: a5
                }), ti[176] = a6, ti[177] = a9, ti[178] = nt, ti[179] = ap, ti[180] = ni, ti[181] = tO, ti[182] = ns, ti[183] = a5, ti[184] = a4, ti[185] = aq, ti[186] = aD, ti[187] = e7) : e7 = ti[187];
                let nr = e7;
                ti[188] !== tA ? (e9 = (0, f.a)(tA), ti[188] = tA, ti[189] = e9) : e9 = ti[189];
                let nc = e9;
                if (tQ && null != ao && tF.toolScope?.kind === "target") {
                    let e;
                    ti[190] !== tA ? (e = (0, D.a)(tA), ti[190] = tA, ti[191] = e) : e = ti[191];
                    let t = e;
                    if (null != t) {
                        let e, a, o;
                        return ti[192] !== tF.toolScope || ti[193] !== tA.appContext || ti[194] !== tA.callId || ti[195] !== tA.invocation.tool || ti[196] !== tA.invocationResourceUri ? (e = {
                            appContext: tA.appContext,
                            codexAppsToolScope: tF.toolScope,
                            invocationResourceUri: tA.invocationResourceUri,
                            originCallId: tA.callId,
                            originResourceUri: null,
                            originTool: tA.invocation.tool
                        }, ti[192] = tF.toolScope, ti[193] = tA.appContext, ti[194] = tA.callId, ti[195] = tA.invocation.tool, ti[196] = tA.invocationResourceUri, ti[197] = e) : e = ti[197], ti[198] !== ao || ti[199] !== tr || ti[200] !== td || ti[201] !== e ? (a = {
                            hostId: td,
                            conversationId: tr,
                            access: ao,
                            mcpAppScope: e
                        }, ti[198] = ao, ti[199] = tr, ti[200] = td, ti[201] = e, ti[202] = a) : a = ti[202], ti[203] !== t || ti[204] !== a ? (o = (0, n.jsx)(F.a, {
                            call: t,
                            content: a
                        }), ti[203] = t, ti[204] = a, ti[205] = o) : o = ti[205], o
                    }
                }
                if (null != nc) {
                    let e;
                    return ti[206] !== nc.id || ti[207] !== nc.schedule || ti[208] !== nc.title ? (e = (0, n.jsx)(H.a, {
                        id: nc.id,
                        mode: "view",
                        name: nc.title,
                        rrule: nc.schedule
                    }), ti[206] = nc.id, ti[207] = nc.schedule, ti[208] = nc.title, ti[209] = e) : e = ti[209], e
                }
                ti[210] !== td || ti[211] !== tA ? (te = (0, x.a)(tA, td), ti[210] = td, ti[211] = tA, ti[212] = te) : te = ti[212];
                let nu = te;
                if (nu?.type === "chatgpt-automation") {
                    let e;
                    return ti[213] !== nu ? (e = (0, n.jsx)(j.a, {
                        automation: nu
                    }), ti[213] = nu, ti[214] = e) : e = ti[214], e
                }
                if (nu?.type === "chatgpt-automation-list") {
                    let e;
                    return ti[215] !== nu.automations ? (e = (0, n.jsx)(w.a, {
                        automations: nu.automations
                    }), ti[215] = nu.automations, ti[216] = e) : e = ti[216], e
                }
                let nd = aa && !ab ? tv : void 0;
                ti[217] !== no || ti[218] !== nn || ti[219] !== at || ti[220] !== tS ? (tt = null != nn && (no || null == tS && at) ? (0, n.jsx)(ey.a, {
                    ...nn,
                    quiet: !no
                }) : null, ti[217] = no, ti[218] = nn, ti[219] = at, ti[220] = tS, ti[221] = tt) : tt = ti[221], ti[222] !== aT || ti[223] !== tO || ti[224] !== tN || ti[225] !== tM || ti[226] !== aa ? (ta = tN || "chatgpt-thread" !== tM.value.routeKind ? (0, n.jsx)(Y.b, {
                    mcpAppId: tO,
                    isInlineRequested: aa && aT
                }) : null, ti[222] = aT, ti[223] = tO, ti[224] = tN, ti[225] = tM, ti[226] = aa, ti[227] = ta) : ta = ti[227], ti[228] !== a3 || ti[229] !== a6 || ti[230] !== ne || ti[231] !== aQ || ti[232] !== nt || ti[233] !== aw || ti[234] !== ni || ti[235] !== an || ti[236] !== ns || ti[237] !== aS || ti[238] !== tS || ti[239] !== ty || ti[240] !== nr || ti[241] !== nd || ti[242] !== aD ? (tn = void 0 !== ty && aQ && null == aD ? (0, n.jsx)(el.a, {
                    accessory: a6,
                    ...ns,
                    className: ne,
                    "data-mcp-app-card": !!aS || void 0,
                    headerClassName: nt,
                    icon: ty,
                    summary: tS ?? a3
                }) : (0, n.jsx)(er.a, {
                    className: ne,
                    "data-mcp-app-card": !!aS || void 0,
                    "data-response-body": nd,
                    "data-response-widget-pending": null != nd && (aw || an) ? "" : void 0,
                    children: aQ ? nr : ni
                }), ti[228] = a3, ti[229] = a6, ti[230] = ne, ti[231] = aQ, ti[232] = nt, ti[233] = aw, ti[234] = ni, ti[235] = an, ti[236] = ns, ti[237] = aS, ti[238] = tS, ti[239] = ty, ti[240] = nr, ti[241] = nd, ti[242] = aD, ti[243] = tn) : tn = ti[243], ti[244] !== t6 || ti[245] !== tA.callId || ti[246] !== tC ? (to = (e, t) => (0, n.jsxs)(m.Fragment, {
                    children: [(0, n.jsx)(eb.a, {
                        variant: "activity"
                    }), (0, n.jsx)(eU, {
                        call: e,
                        fallbackPageUrl: t6,
                        loadRemoteLogos: tC
                    })]
                }, `${tA.callId}:webmcp:${t}:${e.name}`), ti[244] = t6, ti[245] = tA.callId, ti[246] = tC, ti[247] = to) : to = ti[247];
                let np = t7.map(to);
                return ti[248] !== tt || ti[249] !== ta || ti[250] !== tn || ti[251] !== np ? (tl = (0, n.jsxs)(n.Fragment, {
                    children: [tt, ta, tn, np]
                }), ti[248] = tt, ti[249] = ta, ti[250] = tn, ti[251] = np, ti[252] = tl) : tl = ti[252], tl
            }
        })
    }),
    KU8M: (function(e, t, a) {
        var n = a("Q840"),
            o = a("UKCO"),
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
            l = a("Q840"),
            i = a("UKCO"),
            s = a("sM3V"),
            r = a("KJ1J"),
            c = a("KaH3"),
            u = a("Nj7b"),
            d = a("FvYa"),
            p = a("HOLv"),
            m = a("zUz7"),
            h = a("LF5P"),
            g = a("Lry3");
        a.d(t, {}, {
            a: function(e) {
                let t, a, v = (0, o.c)(9),
                    {
                        fallback: x,
                        hostId: f,
                        item: b,
                        loadRemoteLogos: y
                    } = e,
                    j = b.appContext?.connectorId === u.b || (0, c.f)(b),
                    w = (0, l.x)(!y || j || null != (0, h.d)({
                        item: b
                    }) || (0, i.si)(b.invocation.server) || (0, r.f)(b.invocation.server) ? null : s.a, {
                        hostId: f,
                        serverName: b.invocation.server,
                        threadId: (0, i.Te)(b.threadId)
                    })?.serverInfo;
                if (j) {
                    let e;
                    return v[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(p.a, {
                        className: "shrink-0 text-tertiary",
                        asset: g.a
                    }), v[0] = e) : e = v[0], e
                }
                v[1] !== w ? (t = (0, m.a)(w), v[1] = w, v[2] = t) : t = v[2];
                let k = t;
                return v[3] !== x || v[4] !== k || v[5] !== b.invocation.server || v[6] !== w?.name || v[7] !== w?.title ? (a = null == k ? x : (0, n.jsx)(d.a, {
                    alt: w?.title ?? w?.name ?? b.invocation.server,
                    className: "icon-xs shrink-0 object-contain",
                    logoUrl: k.logoUrl,
                    logoDarkUrl: k.logoDarkUrl,
                    fallback: x
                }), v[3] = x, v[4] = k, v[5] = b.invocation.server, v[6] = w?.name, v[7] = w?.title, v[8] = a) : a = v[8], a
            }
        })
    }),
    ZiDw: (function(e, t, a) {
        var n = a("Q840"),
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
        var n = a("lAQI");
        let o = n.m("kind", [n.F({
                kind: n.z("listTools"),
                name: n.z("webmcp_list_tools"),
                title: n.L().transform(e => e || void 0).optional(),
                description: n.L().optional(),
                readOnlyHint: n.j().optional(),
                sourceHostname: n.L().min(1).optional(),
                outputJson: n.L().optional(),
                outputTruncated: n.z(!0).optional()
            }), n.F({
                kind: n.z("invokeTool"),
                name: n.L().refine(e => e.trim().length > 0),
                title: n.L().transform(e => e || void 0).optional(),
                description: n.L().optional(),
                readOnlyHint: n.j().optional(),
                sourceHostname: n.L().min(1).optional(),
                inputJson: n.L().optional(),
                inputTruncated: n.z(!0).optional(),
                outputJson: n.L().optional(),
                outputTruncated: n.z(!0).optional()
            })]),
            l = n.F({
                "codex/toolSurface": n.F({
                    kind: n.z("browserUse"),
                    webMcpCalls: n.g(o)
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
            s = a("Q840"),
            r = a("UKCO"),
            c = a("Wf1j"),
            u = a("rEML"),
            d = a("qKlE"),
            p = a("OusJ"),
            m = a("odKs"),
            h = a("GIgU");
        a("bN4H");
        var g = a("TleN"),
            v = a("TL6G"),
            x = a("tSEg");

        function f(e) {
            return "string" == typeof e
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, l, b, y, j, w, k, C, N, S, M, I, T, R, A, _, U, L = (0, o.c)(129),
                    {
                        elicitation: E,
                        result: O,
                        id: P,
                        kind: D,
                        mode: H,
                        name: z,
                        prompt: W,
                        rrule: Q,
                        projectId: J,
                        cwds: q,
                        destination: B,
                        executionEnvironment: F,
                        localEnvironmentConfigPath: K,
                        model: V,
                        reasoningEffort: G,
                        notificationPolicy: Z,
                        targetThreadId: Y,
                        status: $
                    } = e,
                    X = void 0 === O ? null : O,
                    ee = (0, s.y)(x.a),
                    et = (0, c.a)();
                (0, g.a)();
                let ea = (0, u.Y)("/local/:conversationId"),
                    en = (0, s.z)(h.e),
                    eo = Y ?? null;
                L[0] !== q || L[1] !== B || L[2] !== F || L[3] !== P || L[4] !== D || L[5] !== K || L[6] !== H || L[7] !== V || L[8] !== z || L[9] !== Z || L[10] !== J || L[11] !== W || L[12] !== G || L[13] !== eo || L[14] !== Q || L[15] !== $ ? (t = JSON.stringify({
                    id: P,
                    kind: D,
                    mode: H,
                    name: z,
                    prompt: W,
                    rrule: Q,
                    projectId: J,
                    cwds: q,
                    destination: B,
                    executionEnvironment: F,
                    localEnvironmentConfigPath: K,
                    model: V,
                    reasoningEffort: G,
                    notificationPolicy: Z,
                    targetThreadId: eo,
                    status: $
                }), L[0] = q, L[1] = B, L[2] = F, L[3] = P, L[4] = D, L[5] = K, L[6] = H, L[7] = V, L[8] = z, L[9] = Z, L[10] = J, L[11] = W, L[12] = G, L[13] = eo, L[14] = Q, L[15] = $, L[16] = t) : t = L[16];
                let el = t,
                    ei = en?.directiveKey === el ? en.automationId : null,
                    es = ei ?? X?.automationId ?? P,
                    er = X?.snapshot ?? null,
                    ec = "view" === H ? H : null,
                    eu = "view" === H && null != P,
                    ed = null != P && (eu || "suggested-update" === H),
                    ep = (0, s.z)(d.g),
                    em = ep.data,
                    eh = !!ed && ep.isLoading;
                if (L[17] !== em || L[18] !== ei || L[19] !== q || L[20] !== P || L[21] !== et || L[22] !== eh || L[23] !== eu || L[24] !== D || L[25] !== H || L[26] !== z || L[27] !== J || L[28] !== W || L[29] !== es || L[30] !== eo || L[31] !== X?.automationId || L[32] !== X?.mode || L[33] !== er?.name || L[34] !== er?.rrule || L[35] !== Q || L[36] !== $) {
                    var eg;
                    let e, t, n, o, s, c, u, d, p, h, g = null != P ? em?.items.find(e => e.id === P) ?? null : null;
                    L[46] !== em?.items || L[47] !== ei || L[48] !== et || L[49] !== eh || L[50] !== eu || L[51] !== H || L[52] !== z || L[53] !== es || L[54] !== X?.mode || L[55] !== er?.name || L[56] !== er?.rrule || L[57] !== Q ? ({
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
                        mode: X?.mode ?? H,
                        isSuggestionAccepted: null != ei,
                        trimmedId: es ?? null,
                        trimmedName: z ?? er?.name ?? null,
                        trimmedRrule: Q ?? er?.rrule ?? null,
                        automations: em?.items ?? null,
                        isLoading: eh
                    }), o = et.formatMessage({
                        id: "settings.automations.rruleSummaryFallback",
                        defaultMessage: "Custom schedule"
                    }), s = (0, m.f)({
                        rrule: n,
                        intl: et,
                        fallbackMessage: o
                    }), L[46] = em?.items, L[47] = ei, L[48] = et, L[49] = eh, L[50] = eu, L[51] = H, L[52] = z, L[53] = es, L[54] = X?.mode, L[55] = er?.name, L[56] = er?.rrule, L[57] = Q, L[58] = t, L[59] = w, L[60] = n, L[61] = o, L[62] = s) : (t = L[58], w = L[59], n = L[60], o = L[61], s = L[62]);
                    let v = s;
                    L[63] !== et ? (c = et.formatMessage({
                        id: "settings.automations.loading",
                        defaultMessage: "Loading…"
                    }), L[63] = et, L[64] = c) : c = L[64];
                    let x = c;
                    L[65] !== et ? (u = et.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task"
                    }), L[65] = et, L[66] = u) : u = L[66];
                    let f = u;
                    L[67] !== H || L[68] !== X?.mode ? (d = X?.mode ?? H, L[67] = H, L[68] = X?.mode, L[69] = d) : d = L[69], a = (y = "delete" === (b = d)) || X?.automationId != null ? X?.automationId ?? P ?? null : es, L[70] !== a || L[71] !== y ? (p = y ? (eg = a ?? null, 0 === (e = eg?.trim() ?? "").length ? null : /^[0-9a-f]{8}-[0-9a-f-]+$/i.test(e) ? e : i()(e.replace(/[-_]+/g, " "))) : null, L[70] = a, L[71] = y, L[72] = p) : p = L[72];
                    let S = p;
                    N = t ? x : w || S || f, L[73] !== S || L[74] !== et || L[75] !== w ? (h = w ?? S ?? et.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task"
                    }), L[73] = S, L[74] = et, L[75] = w, L[76] = h) : h = L[76], C = h, j = v || (t ? x : null != n ? o : null), l = null != z && null != W && null != Q && ("heartbeat" === D ? null != eo : void 0 !== J || null != q), k = null != P && null != $ && null != z && null != W && null != Q && (null == g ? "heartbeat" === D ? null != eo : void 0 !== J || null != q : !!(0, r.hi)(g) || void 0 !== J || null != q), L[17] = em, L[18] = ei, L[19] = q, L[20] = P, L[21] = et, L[22] = eh, L[23] = eu, L[24] = D, L[25] = H, L[26] = z, L[27] = J, L[28] = W, L[29] = es, L[30] = eo, L[31] = X?.automationId, L[32] = X?.mode, L[33] = er?.name, L[34] = er?.rrule, L[35] = Q, L[36] = $, L[37] = a, L[38] = l, L[39] = b, L[40] = y, L[41] = j, L[42] = w, L[43] = k, L[44] = C, L[45] = N
                } else a = L[37], l = L[38], b = L[39], y = L[40], j = L[41], w = L[42], k = L[43], C = L[44], N = L[45];
                let ev = k,
                    ex = "suggested-update" === H && ed && ep.isLoading,
                    ef = "suggested-create" === H || "suggested-update" === H,
                    eb = ef ? E : void 0,
                    ey = P ?? null,
                    ej = D ?? null,
                    ew = z ?? "",
                    ek = W ?? "",
                    eC = Q ?? "";
                L[77] !== q ? (S = q ?? [], L[77] = q, L[78] = S) : S = L[78];
                let eN = void 0 !== J ? J : q?.[0] === r.hd ? null : q?.[0] ?? null,
                    eS = F ?? null,
                    eM = K ?? null,
                    eI = V ?? null,
                    eT = G ?? null;
                L[79] !== Z ? (M = void 0 !== Z ? {
                    notificationPolicy: Z
                } : {}, L[79] = Z, L[80] = M) : M = L[80];
                let eR = $ ?? null;
                L[81] !== el || L[82] !== ec || L[83] !== eo || L[84] !== S || L[85] !== eN || L[86] !== eS || L[87] !== eM || L[88] !== eI || L[89] !== eT || L[90] !== M || L[91] !== eR || L[92] !== eb || L[93] !== ey || L[94] !== ej || L[95] !== ew || L[96] !== ek || L[97] !== eC ? (I = {
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
                }, L[81] = el, L[82] = ec, L[83] = eo, L[84] = S, L[85] = eN, L[86] = eS, L[87] = eM, L[88] = eI, L[89] = eT, L[90] = M, L[91] = eR, L[92] = eb, L[93] = ey, L[94] = ej, L[95] = ew, L[96] = ek, L[97] = eC, L[98] = I) : I = L[98];
                let eA = I,
                    e_ = null != ei;
                L[99] !== l || L[100] !== ev || L[101] !== ec || L[102] !== eu || L[103] !== e_ ? (T = (0, h.D)({
                    directiveMode: ec,
                    canCreate: l,
                    canUpdate: ev,
                    isViewMode: eu,
                    forceOpen: e_
                }), L[99] = l, L[100] = ev, L[101] = ec, L[102] = eu, L[103] = e_, L[104] = T) : T = L[104];
                let eU = T,
                    eL = y ? null : j;
                L[105] !== eU || L[106] !== a || L[107] !== ei || L[108] !== eA || L[109] !== ex || L[110] !== ef || L[111] !== ea || L[112] !== ee || L[113] !== C ? (R = () => {
                    if (ex) return;
                    let e = a;
                    null != e ? v.c.dispatchHostMessage({
                        type: "navigate-to-route",
                        path: `/automations?automationId=${e}`
                    }) : "create" === eU && (ee.set(h.e, null), ee.set(h.f, eA), v.c.dispatchHostMessage({
                        type: "navigate-to-route",
                        path: "/automations?automationMode=create"
                    }))
                }, L[105] = eU, L[106] = a, L[107] = ei, L[108] = eA, L[109] = ex, L[110] = ef, L[111] = ea, L[112] = ee, L[113] = C, L[114] = R) : R = L[114];
                let eE = R,
                    eO = !y && !ex && (null != a || "create" === eU),
                    eP = X?.deleteStatus;
                L[115] !== b || L[116] !== et || L[117] !== eP ? (A = function(e) {
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
                    deleteStatus: eP,
                    intl: et,
                    mode: b
                }), L[115] = b, L[116] = et, L[117] = eP, L[118] = A) : A = L[118];
                let eD = A;
                L[119] !== eD || L[120] !== w || L[121] !== eL ? (_ = [eD, w, eL].filter(f), L[119] = eD, L[120] = w, L[121] = eL, L[122] = _) : _ = L[122];
                let eH = _.join(" · "),
                    ez = eL ?? eD,
                    eW = eH || void 0;
                return L[123] !== eO || L[124] !== eE || L[125] !== ez || L[126] !== eW || L[127] !== N ? (U = (0, n.jsx)(p.a, {
                    title: N,
                    subtitle: ez,
                    ariaLabel: eW,
                    canOpen: eO,
                    onOpen: eE
                }), L[123] = eO, L[124] = eE, L[125] = ez, L[126] = eW, L[127] = N, L[128] = U) : U = L[128], U
            }
        })
    }),
    IN8o: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            l = a("slpy"),
            i = a("on57"),
            s = a("Q840"),
            r = a("Wf1j"),
            c = a("oyxz"),
            u = a("wD9O"),
            d = a("HBzQ"),
            p = a("Sm6l"),
            m = a("bf6R"),
            h = a("wbOy"),
            g = a("tSEg"),
            v = a("nMdB"),
            x = a("FWVQ"),
            f = a("qZWE"),
            b = a("M0nI");
        a.d(t, {}, {
            a: function(e) {
                let t, a, y, j, w, k, C, N, S, M, I = (0, o.c)(44),
                    {
                        mcpAppId: T,
                        name: R,
                        status: A,
                        disabled: _,
                        icon: U,
                        accessory: L,
                        className: E,
                        disclosure: O
                    } = e,
                    P = (0, s.y)(g.a),
                    D = (0, u.c)(),
                    H = (0, r.a)(),
                    z = (0, s.x)(_ ? null : f.q, T);
                I[0] !== H ? (t = H.formatMessage({
                    id: "codex.mcpTool.openAppInTab",
                    defaultMessage: "Open app in tab"
                }), I[0] = H, I[1] = t) : t = I[1];
                let W = t;
                I[2] !== z?.inline || I[3] !== O || I[4] !== T || I[5] !== P || I[6] !== A ? (a = O ?? ("closed" === A && z?.inline ? {
                    expanded: !1,
                    onToggle: () => (0, f.y)(P, T, "inline")
                } : void 0), I[2] = z?.inline, I[3] = O, I[4] = T, I[5] = P, I[6] = A, I[7] = a) : a = I[7];
                let Q = a;
                if (null != O && ("open" === A || "closed" === A)) {
                    let e, t = null != R,
                        a = R ?? "";
                    if (I[8] !== O.expanded || I[9] !== H || I[10] !== t || I[11] !== a) {
                        let n = {
                            hasName: t,
                            name: a
                        };
                        e = O.expanded ? H.formatMessage({
                            id: "mcpApp.activity.hideInline",
                            defaultMessage: "{hasName, select, true {Hide {name}} other {Hide app}}"
                        }, n) : H.formatMessage({
                            id: "mcpApp.activity.showInline",
                            defaultMessage: "{hasName, select, true {Show {name}} other {Show app}}"
                        }, n), I[8] = O.expanded, I[9] = H, I[10] = t, I[11] = a, I[12] = e
                    } else e = I[12];
                    y = e
                }
                I[13] !== z?.tab || I[14] !== W || I[15] !== T || I[16] !== P ? (j = z?.tab ? (0, n.jsx)(l.a, {
                    content: W,
                    children: (0, n.jsx)(p.a, {
                        className: "relative",
                        "aria-label": W,
                        color: "ghost",
                        size: "icon",
                        onClick: () => (0, f.y)(P, T, "fullscreen"),
                        children: (0, n.jsx)(m.N, {})
                    })
                }) : null, I[13] = z?.tab, I[14] = W, I[15] = T, I[16] = P, I[17] = j) : j = I[17], I[18] !== L || I[19] !== j ? (w = (0, n.jsxs)(n.Fragment, {
                    children: [j, L]
                }), I[18] = L, I[19] = j, I[20] = w) : w = I[20], I[21] !== Q || I[22] !== O?.accessibleLabel || I[23] !== O?.labelledBy || I[24] !== y || I[25] !== D ? (k = null == Q ? void 0 : {
                    ...Q,
                    accessibleLabel: O?.accessibleLabel ?? (O?.labelledBy == null ? y : void 0),
                    onToggle: e => {
                        (0, v.a)(e.currentTarget, D), Q.onToggle(e)
                    }
                }, I[21] = Q, I[22] = O?.accessibleLabel, I[23] = O?.labelledBy, I[24] = y, I[25] = D, I[26] = k) : k = I[26];
                let J = "opening" === A,
                    q = null != Q && "group-hover/activity-header:[--agent-activity-summary-color:var(--color-text)]";
                return I[27] !== q ? (C = (0, i.b)("min-w-0 shrink truncate", b.a.summary, q), I[27] = q, I[28] = C) : C = I[28], I[29] !== y || I[30] !== H || I[31] !== R || I[32] !== A ? (N = y ?? (0, n.jsx)(c.a, {
                    id: "mcpApp.activity.status",
                    defaultMessage: "{status, select, opening {Opening {name}} open {Opened {name}} error {Couldn’t open {name}} other {Open {name}}}",
                    values: {
                        status: A,
                        name: R ?? H.formatMessage(x.c)
                    }
                }), I[29] = y, I[30] = H, I[31] = R, I[32] = A, I[33] = N) : N = I[33], I[34] !== J || I[35] !== C || I[36] !== N ? (S = (0, n.jsx)(h.a, {
                    active: J,
                    role: "status",
                    className: C,
                    children: N
                }), I[34] = J, I[35] = C, I[36] = N, I[37] = S) : S = I[37], I[38] !== E || I[39] !== U || I[40] !== S || I[41] !== w || I[42] !== k ? (M = (0, n.jsxs)(d.b, {
                    className: E,
                    accessory: w,
                    externalDisclosure: k,
                    children: [U, S]
                }), I[38] = E, I[39] = U, I[40] = S, I[41] = w, I[42] = k, I[43] = M) : M = I[43], M
            }
        })
    }),
    FWVQ: (function(e, t, a) {
        var n = a("Q840"),
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
                } = t, r = (0, n.x)(l.l, e), c = (0, n.x)(l.n, e), u = (0, n.x)(l.k, e), d = (0, n.x)(l.w, e), p = (0, n.x)(l.r, e);
                return void 0 !== s && s || null != p ? "error" : "closed" !== r ? r : a ? "opening" : (o ?? u) && "launcher" !== c ? d && !(void 0 !== i && i) ? "open" : "opening" : "closed"
            }
        })
    }),
    XxcM: (function(e, t, a) {
        a.d(t, {
            a: () => d
        });
        var n = a("ABep"),
            o = a("QosV"),
            l = a("Q840"),
            i = a("URlz"),
            s = a("Bbed"),
            r = a("hZax"),
            c = a("HwRo");
        let u = (0, s.a)(async function() {
            return (await a.e(424978).then(a.bind(a, "Ecfk"))).NativePhoneFrame
        });

        function d(e) {
            let t, a, s = (0, o.c)(4),
                {
                    call: d,
                    content: p
                } = e;
            s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, c.b)(), s[0] = t) : t = s[0];
            let m = (0, r.f)(t),
                h = (0, l.x)(i.c, p.access);
            return m && "current" === h ? (s[1] !== d || s[2] !== p ? (a = (0, n.jsx)(u, {
                call: d,
                content: p
            }), s[1] = d, s[2] = p, s[3] = a) : a = s[3], a) : null
        }
    }),
    KLqe: (function(e, t, a) {
        var n = a("ABep"),
            o = a("QosV"),
            l = a("Q840"),
            i = a("oyxz"),
            s = a("lAQI"),
            r = a("Hkqr"),
            c = a("acxW"),
            u = a("vbL5"),
            d = a("tKel"),
            p = a("VUkV");
        let m = s.F({
            page_id: s.L().trim().min(1)
        });
        a.d(t, {}, {
            a: function(e) {
                let t, a, s, h, g, v, x, f, b = (0, o.c)(32),
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
                let R = (0, l.x)(d.d, h, g);
                if (null == R) return C;
                b[17] !== y.completed || b[18] !== y.invocation.server || b[19] !== y.result ? (v = "active", y.completed && (v = (0, c.a)({
                    result: y.result,
                    isCodexAppsServer: "codex_apps" === y.invocation.server
                }) ? "failed" : "completed"), b[17] = y.completed, b[18] = y.invocation.server, b[19] = y.result, b[20] = v) : v = b[20];
                let A = R.title ?? "";
                return b[21] !== C || b[22] !== w || b[23] !== v ? (x = e => {
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
                }, b[21] = C, b[22] = w, b[23] = v, b[24] = x) : x = b[24], b[25] !== R.document_type || b[26] !== R.namespace || b[27] !== R.page_id || b[28] !== R.symbol || b[29] !== A || b[30] !== x ? (f = (0, n.jsx)(p.a, {
                    pageId: R.page_id,
                    documentType: R.document_type,
                    namespace: R.namespace,
                    symbol: R.symbol,
                    title: A,
                    iconClassName: "text-text/60",
                    children: x
                }), b[25] = R.document_type, b[26] = R.namespace, b[27] = R.page_id, b[28] = R.symbol, b[29] = A, b[30] = x, b[31] = f) : f = b[31], f
            }
        })
    })
};