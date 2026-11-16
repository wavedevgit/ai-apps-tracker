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
            l = a("KJ1J"),
            o = a("kqQk"),
            i = a("acxW"),
            s = a("xSzB");
        let r = n.object({
            success: n.literal(!0),
            automation: o.a
        });

        function c(e) {
            return (0, l.f)(e.server) && ("automations.create_local" === e.tool || "automations.update_local" === e.tool)
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
        let l = n.object({
            navigationSource: n.enum(["scheduled_page", "notification", "conversation", "conversation_sidebar", "editor"])
        });
        a.d(t, {}, {
            a: function(e) {
                let t = l.safeParse(e);
                return t.success ? t.data.navigationSource : void 0
            }
        })
    }),
    SHXB: (function(e, t, a) {
        var n = a("ABep"),
            l = a("QosV"),
            o = a("BolX"),
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
                let t, a, s, d, h, g, x, v = (0, l.c)(22),
                    {
                        automation: f
                    } = e,
                    b = (0, o.y)(p.a),
                    y = (0, i.a)(),
                    j = (0, o.x)(c.g, f.id);
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
                let t, a, o, i, r, c, u = (0, l.c)(16),
                    {
                        operation: d
                    } = e;
                return u[0] !== d ? (t = "pendingCreate" === d && (0, n.jsx)(s.a, {
                    id: "chatgpt.tpp.cot_v5.active_status.working",
                    defaultMessage: "Working"
                }), u[0] = d, u[1] = t) : t = u[1], u[2] !== d ? (a = "createGoal" === d && (0, n.jsx)(s.a, {
                    id: "chatgpt.tasks.conversation.tool_status.creating.goal",
                    defaultMessage: "Creating goal"
                }), u[2] = d, u[3] = a) : a = u[3], u[4] !== d ? (o = "create" === d && (0, n.jsx)(s.a, {
                    id: "chatgpt.tasks.conversation.tool_status.creating",
                    defaultMessage: "Creating scheduled task"
                }), u[4] = d, u[5] = o) : o = u[5], u[6] !== d ? (i = "update" === d && (0, n.jsx)(s.a, {
                    id: "chatgpt.tasks.conversation.tool_status.updating",
                    defaultMessage: "Updating scheduled task"
                }), u[6] = d, u[7] = i) : i = u[7], u[8] !== d ? (r = "list" === d && (0, n.jsx)(s.a, {
                    id: "chatgpt.tasks.conversation.tool_status.listing",
                    defaultMessage: "Listing scheduled tasks"
                }), u[8] = d, u[9] = r) : r = u[9], u[10] !== t || u[11] !== a || u[12] !== o || u[13] !== i || u[14] !== r ? (c = (0, n.jsxs)("div", {
                    className: "loading-shimmer-pure-text text-size-chat text-secondary select-none",
                    role: "status",
                    children: [t, a, o, i, r]
                }), u[10] = t, u[11] = a, u[12] = o, u[13] = i, u[14] = r, u[15] = c) : c = u[15], c
            }
        })
    }),
    VRzh: (function(e, t, a) {
        var n = a("QosV"),
            l = a("l8z4"),
            o = a("BolX"),
            i = a("zd8w"),
            s = a("rEML"),
            r = a("mgfw"),
            c = a("HzCW"),
            u = a("yGJW"),
            d = a("tSEg"),
            p = a("dQRk");
        let m = (0, o.v)(d.a, e => !1);
        a.d(t, {}, {
            a: function(e) {
                let t, a, h, g = (0, n.c)(8),
                    {
                        conversationId: x
                    } = e,
                    v = (0, o.y)(d.a),
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
                        v.get(m, n) || (v.set(m, n, !0), (0, u.a)(v, l.c, {
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
            l = a("TZBk"),
            o = a("fGpH");
        a.d(t, {}, {
            a: function(e, t, a) {
                let i, s = null != t && "completed" === (0, o.p)(t.automation),
                    r = !s && (t?.automation.is_enabled ?? e.isEnabled),
                    c = null == t ? e.title : (0, o.h)(t);
                if (!r) return {
                    isEnabled: r,
                    nextRunAt: null,
                    scheduleLabel: s ? a.formatMessage(l.a.completed) : a.formatMessage(l.a.paused),
                    title: c
                };
                let u = t?.automation.schedule ?? e.schedule,
                    d = /^DTSTART[;:]/m.test(u) && !/^RRULE:/m.test(u) || /(?:^|[;:])COUNT=1(?:;|$)/m.test(u),
                    p = null == t ? e.nextRunAt ?? null : (0, o.j)(t);
                return i = d && t?.automation.timing_mode !== "flexible_schedule" ? (0, n.f)({
                    rrule: u,
                    nextRunAt: null == p ? null : Date.parse(p),
                    intl: a,
                    fallbackMessage: a.formatMessage({
                        id: "settings.automations.rruleSummaryFallback",
                        defaultMessage: "Custom schedule"
                    })
                }) : null != t ? (0, o.o)(t, a) : e.displaySchedule?.trim() || (0, n.f)({
                    rrule: (0, o.n)(e.schedule),
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
            l = a("QosV"),
            o = a("BolX"),
            i = a("zd8w"),
            s = a("oyxz"),
            r = a("Wf1j"),
            c = a("rEML"),
            u = a("Ro2M"),
            d = a("bN4H"),
            p = a("bX52"),
            m = a("hdjZ"),
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
            let t, a, i, s, c, m, g, x = (0, l.c)(19),
                {
                    automation: f
                } = e,
                b = (0, o.y)(h.a),
                y = (0, r.a)(),
                j = (0, o.x)(u.g, f.id);
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
                let t, a, i, r, d, p, h, v, b, y, j = (0, l.c)(22),
                    {
                        automations: w,
                        conversationId: k
                    } = e,
                    C = (0, c._)(),
                    {
                        data: N,
                        isSuccess: M
                    } = (0, o.z)(u.k);
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
                return j[4] !== S.length || j[5] !== k ? (a = null != k && S.length > 0 ? (0, n.jsx)(x.a, {
                    conversationId: k
                }) : null, j[4] = S.length, j[5] = k, j[6] = a) : a = j[6], j[7] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsx)(m.a, {
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
                }), j[8] = r) : r = j[8], j[9] !== S ? (d = S.slice(0, 5).map(f), j[9] = S, j[10] = d) : d = j[10], j[11] !== C ? (p = () => {
                    C("/automations", {
                        state: {
                            navigationSource: "conversation"
                        }
                    })
                }, j[11] = C, j[12] = p) : p = j[12], j[13] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, n.jsx)(s.a, {
                    id: "automations.list.seeAllTasks",
                    defaultMessage: "See all tasks"
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
    MAIj: (function(e, t, a) {
        var n = a("BolX"),
            l = a("utkD"),
            o = a("OWtl");
        let i = (0, n.q)(o.a, e => (0, l.c)(e)),
            s = (0, n.q)(o.a, e => ({
                ...(0, l.d)({
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
            l = a("QosV"),
            o = a("BolX"),
            i = a("oyxz"),
            s = a("Sm6l"),
            r = a("igP5");

        function c(e) {
            let t, a = (0, l.c)(4),
                {
                    isError: o,
                    onRetry: r
                } = e;
            if (o) {
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
                let t, a, i, s, u, d = (0, l.c)(12);
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
                    } = (0, o.x)(r.a, a);
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
            l = a("T0Rc"),
            o = a("BolX"),
            i = a("Zqzr"),
            s = a("sM3V"),
            r = a("KJ1J"),
            c = a("HUHI"),
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
                let t, a, l, c, u, d, m, h, g, x, v = (0, n.c)(50),
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
                v[0] !== b.invocation.server || v[1] !== b.result ? (t = (0, r.f)(b.invocation.server), a = (0, w.a)({
                    isCodexAppsServer: t,
                    result: b.result
                }), v[0] = b.invocation.server, v[1] = b.result, v[2] = t, v[3] = a) : (t = v[2], a = v[3]);
                let I = a,
                    T = b.result?.type !== "success" || I ? null : b.result.raw,
                    R = T ?? k?.toolResult ?? null;
                v[4] !== j || v[5] !== y ? (l = {
                    hostId: y,
                    conversationId: j
                }, v[4] = j, v[5] = y, v[6] = l) : l = v[6];
                let A = (0, o.x)(s.b, l);
                v[7] !== y || v[8] !== b.appContext || v[9] !== b.invocation.server || v[10] !== b.invocation.tool || v[11] !== b.invocationResourceUri || v[12] !== A ? (c = {
                    appContext: b.appContext,
                    hostId: y,
                    invocationResourceUri: b.invocationResourceUri,
                    server: b.invocation.server,
                    threadId: A,
                    tool: b.invocation.tool
                }, v[7] = y, v[8] = b.appContext, v[9] = b.invocation.server, v[10] = b.invocation.tool, v[11] = b.invocationResourceUri, v[12] = A, v[13] = c) : c = v[13];
                let _ = c;
                v[14] !== S ? (u = {
                    enabled: S
                }, v[14] = S, v[15] = u) : u = v[15];
                let U = (0, o.x)(f.a, _, u);
                v[16] !== U.data || v[17] !== b.invocation.server || v[18] !== b.invocation.tool || v[19] !== b.invocationResourceUri ? (d = (0, p.c)({
                    invocationResourceUri: b.invocationResourceUri,
                    mcpServerStatuses: U.data,
                    server: b.invocation.server,
                    tool: b.invocation.tool
                })?.resourceUri, v[16] = U.data, v[17] = b.invocation.server, v[18] = b.invocation.tool, v[19] = b.invocationResourceUri, v[20] = d) : d = v[20];
                let E = d;
                v[21] !== U.isPending || v[22] !== j || v[23] !== E || v[24] !== R?._meta || v[25] !== k?.resourceUri || v[26] !== b.appContext?.resourceUri || v[27] !== b.mcpAppResourceUri ? (m = j.startsWith("chatgpt:") ? E : b.appContext?.resourceUri ?? E ?? (U.isPending ? k?.resourceUri : void 0) ?? (0, i.Ig)(R?._meta) ?? b.mcpAppResourceUri, v[21] = U.isPending, v[22] = j, v[23] = E, v[24] = R?._meta, v[25] = k?.resourceUri, v[26] = b.appContext?.resourceUri, v[27] = b.mcpAppResourceUri, v[28] = m) : m = v[28];
                let L = m,
                    O = null != L && U.isPending && b.appContext?.resourceUri == null && null == E && k?.resourceUri == null,
                    P = (0, o.x)(M && t ? f.b : null, _);
                I ? h = "error" : b.completed && null == b.result && null == R && (h = "cancelled");
                let D = L ?? k?.resourceUri ?? null,
                    B = t && null != b.appContext ? b.callId : null,
                    H = h;
                return v[29] !== U.data || v[30] !== b.appContext || v[31] !== b.invocation.server || v[32] !== b.invocation.tool || v[33] !== b.invocationResourceUri ? (g = (0, p.b)({
                    appContext: b.appContext,
                    invocationResourceUri: b.invocationResourceUri,
                    mcpServerStatuses: U.data,
                    server: b.invocation.server,
                    tool: b.invocation.tool
                }), v[29] = U.data, v[30] = b.appContext, v[31] = b.invocation.server, v[32] = b.invocation.tool, v[33] = b.invocationResourceUri, v[34] = g) : g = v[34], v[35] !== U || v[36] !== j || v[37] !== R || v[38] !== y || v[39] !== t || v[40] !== O || v[41] !== b || v[42] !== T || v[43] !== B || v[44] !== g || v[45] !== D || v[46] !== I || v[47] !== h || v[48] !== P ? (x = {
                    item: b,
                    hostId: y,
                    conversationId: j,
                    catalog: U,
                    resourceUri: D,
                    isResourceUriPending: O,
                    toolScope: P,
                    isCodexAppsToolCall: t,
                    originCallId: B,
                    successfulToolResult: T,
                    displayedSuccessfulToolResult: R,
                    toolCallFailed: I,
                    toolCallStatus: H,
                    toolDefinition: g
                }, v[35] = U, v[36] = j, v[37] = R, v[38] = y, v[39] = t, v[40] = O, v[41] = b, v[42] = T, v[43] = B, v[44] = g, v[45] = D, v[46] = I, v[47] = h, v[48] = P, v[49] = x) : x = v[49], x
            },
            b: function(e, t) {
                let a, l, o, i, s = (0, n.c)(25),
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
                    j = t && !h;
                s[0] !== u || s[1] !== c || s[2] !== r.appContext || s[3] !== r.completed || s[4] !== r.invocation.server || s[5] !== v || s[6] !== f || s[7] !== b || s[8] !== y || s[9] !== j ? (a = {
                    appContext: r.appContext,
                    connectorId: f,
                    connectorTarget: b,
                    hostId: c,
                    originCallId: v,
                    callCompleted: r.completed,
                    server: r.invocation.server,
                    threadId: u,
                    uri: y,
                    enabled: j
                }, s[0] = u, s[1] = c, s[2] = r.appContext, s[3] = r.completed, s[4] = r.invocation.server, s[5] = v, s[6] = f, s[7] = b, s[8] = y, s[9] = j, s[10] = a) : a = s[10];
                let w = (0, x.f)(a),
                    k = h ? void 0 : w.data;
                s[11] !== k ? (l = (0, d.c)(k), s[11] = k, s[12] = l) : l = s[12];
                let C = l,
                    {
                        error: N,
                        isPending: M,
                        isFetching: S
                    } = h || e.isCodexAppsToolCall && null == g ? p : w;
                return s[13] !== N || s[14] !== S || s[15] !== M || s[16] !== k?.resource ? (o = k?.resource != null ? {
                    error: null,
                    isLoading: !1
                } : {
                    error: S ? null : N,
                    isLoading: S || M && null == N
                }, s[13] = N, s[14] = S, s[15] = M, s[16] = k?.resource, s[17] = o) : o = s[17], s[18] !== w.access || s[19] !== w.refetch || s[20] !== w.refetchResource || s[21] !== C || s[22] !== k || s[23] !== o ? (i = {
                    resource: k,
                    renderData: C,
                    access: w.access,
                    refetch: w.refetch,
                    refetchResource: w.refetchResource,
                    state: o
                }, s[18] = w.access, s[19] = w.refetch, s[20] = w.refetchResource, s[21] = C, s[22] = k, s[23] = o, s[24] = i) : i = s[24], i
            },
            c: function(e) {
                let t, a, i, s, d, p, x, f, w, k, C, N, M, S = (0, n.c)(50),
                    {
                        item: I,
                        hostId: T,
                        appInfoOverride: R,
                        enabled: A,
                        retryOnMount: _
                    } = e,
                    U = void 0 === A || A,
                    E = (0, o.y)(v.a);
                S[0] !== R || S[1] !== U || S[2] !== I ? (t = U && null == R && (0, b.g)(I), S[0] = R, S[1] = U, S[2] = I, S[3] = t) : t = S[3], S[4] !== T || S[5] !== t ? (a = {
                    enabled: t,
                    hostId: T
                }, S[4] = T, S[5] = t, S[6] = a) : a = S[6];
                let {
                    data: L
                } = (0, c.m)(a);
                S[7] !== R || S[8] !== L || S[9] !== I.appContext || S[10] !== I.functionName || S[11] !== I.invocation.server || S[12] !== I.invocation.tool ? (i = R ?? (null == L ? null : (0, j.b)({
                    appContext: I.appContext,
                    apps: L,
                    functionName: I.functionName,
                    serverName: I.invocation.server,
                    toolName: I.invocation.tool
                })), S[7] = R, S[8] = L, S[9] = I.appContext, S[10] = I.functionName, S[11] = I.invocation.server, S[12] = I.invocation.tool, S[13] = i) : i = S[13];
                let O = i;
                S[14] !== U || S[15] !== I.invocation.server || S[16] !== I.pluginId ? (s = U && null != I.pluginId && !(0, r.f)(I.invocation.server), S[14] = U, S[15] = I.invocation.server, S[16] = I.pluginId, S[17] = s) : s = S[17], S[18] !== T || S[19] !== s ? (d = {
                    enabled: s,
                    hostId: T
                }, S[18] = T, S[19] = s, S[20] = d) : d = S[20];
                let P = (0, u.a)(d);
                S[21] !== T || S[22] !== P ? (p = {
                    enabled: P,
                    hostId: T,
                    roots: void 0,
                    resolveActiveRoots: !0
                }, S[21] = T, S[22] = P, S[23] = p) : p = S[23];
                let {
                    data: D
                } = (0, h.l)(p);
                S[24] !== D || S[25] !== I.pluginId ? (x = D?.find(e => {
                    let {
                        plugin: t
                    } = e;
                    return t.id === I.pluginId || null != t.remotePluginId && t.remotePluginId === I.pluginId
                }), S[24] = D, S[25] = I.pluginId, S[26] = x) : x = S[26];
                let B = x,
                    H = P && null != D && null != I.pluginId && null == B;
                S[27] !== T || S[28] !== I.pluginId || S[29] !== E.query || S[30] !== H ? (f = E.query.getOptions(m.l, (0, m.a)({
                    hostId: T,
                    pluginId: H ? I.pluginId ?? null : null
                })), S[27] = T, S[28] = I.pluginId, S[29] = E.query, S[30] = H, S[31] = f) : f = S[31];
                let q = f,
                    z = H && q.enabled,
                    W = _ ?? q.retryOnMount;
                S[32] !== q || S[33] !== z || S[34] !== W ? (w = {
                    ...q,
                    enabled: z,
                    retry: !1,
                    retryOnMount: W
                }, S[32] = q, S[33] = z, S[34] = W, S[35] = w) : w = S[35];
                let {
                    data: J
                } = (0, l.a)(w);
                S[36] !== J ? (k = null == J ? null : (0, g.c)(J), S[36] = J, S[37] = k) : k = S[37];
                let K = k,
                    V = B ?? K,
                    F = K?.plugin.id ?? B?.plugin.id ?? I.pluginId;
                return S[38] !== D || S[39] !== K || S[40] !== H ? (C = H && null != K ? [K] : D ?? [], S[38] = D, S[39] = K, S[40] = H, S[41] = C) : C = S[41], S[42] !== I.invocation.server || S[43] !== F || S[44] !== C ? (N = (0, y.a)({
                    pluginId: F,
                    plugins: C,
                    serverName: I.invocation.server
                }), S[42] = I.invocation.server, S[43] = F, S[44] = C, S[45] = N) : N = S[45], S[46] !== O || S[47] !== V || S[48] !== N ? (M = {
                    matchingApp: O,
                    plugin: V,
                    pluginIcon: N
                }, S[46] = O, S[47] = V, S[48] = N, S[49] = M) : M = S[49], M
            }
        })
    }),
    o1Ns: (function(e, t, a) {
        var n = a("SZCv"),
            l = a.n(n),
            o = a("BolX"),
            i = a("Zqzr"),
            s = a("KJ1J"),
            r = a("ojna"),
            c = a("qZWE"),
            u = a("Qg4G"),
            d = a("tSEg"),
            p = a("acxW");
        let m = (0, o.d)(d.a, (e, t) => {
            let {
                get: a
            } = t;
            return new Map(e.map(e => {
                let t = (0, i.$e)(e),
                    n = a(c.h, t);
                return [e, {
                    sourceId: a(c.u, t),
                    hasSuccessfulToolResult: n?.content.toolCallStatus == null && n?.content.toolResult != null
                }]
            }))
        }, {
            isEqual: l()
        });
        a.d(t, {}, {
            a: function(e) {
                let {
                    item: t,
                    hostId: a,
                    retainedState: n
                } = e, l = !(0, r.b)(t.invocation) && !(0, u.b)(t.invocation, a) && !0 !== t.isMcpAppWidgetSuperseded && (n?.sourceId == null || n.sourceId === (0, i.$e)(t.callId));
                return {
                    isEligible: l,
                    isRenderable: l && !(0, p.a)({
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
            l = a("KJ1J");
        a.d(t, {}, {
            a: function(e) {
                let {
                    pluginId: t,
                    plugins: a,
                    serverName: o
                } = e;
                if (null == t || (0, l.f)(o)) return null;
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
            l = a("QosV"),
            o = a("slpy"),
            i = a("on57"),
            s = a("iodE"),
            r = a("AQaI"),
            c = a.n(r),
            u = a("BolX"),
            d = a("Zqzr"),
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
            M = a("Sm6l"),
            S = a("la9L"),
            I = a("rmk3"),
            T = a("JNtf"),
            R = a("mUDD"),
            A = a("KxMp"),
            _ = a("HOLv"),
            U = a("Wdu7"),
            E = a("wwME"),
            L = a("jByN"),
            O = a("YeQK"),
            P = a("oKu4"),
            D = a("FWVQ"),
            B = a("IN8o"),
            H = a("HwRo"),
            q = a("C3P5"),
            z = a("aENG"),
            W = a("Cv9y"),
            J = a("EAcR"),
            K = a("NJrC"),
            V = a("EDsV"),
            F = a("geS6"),
            G = a("qwxA"),
            Z = a("qZWE"),
            Q = a("E2ja"),
            X = a("KLqe"),
            $ = a("Sd8U"),
            Y = a("tSEg"),
            ee = a("hZax"),
            et = a("WFY2"),
            ea = a("S7UD"),
            en = a("MFk9"),
            el = a("K5Kt"),
            eo = a("HBzQ"),
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
            ef = a("fXpx"),
            eb = a("LkKu"),
            ey = a("z0Na"),
            ej = a("o62A"),
            ew = a("o1Ns"),
            ek = a("alO6"),
            eC = a("acxW"),
            eN = a("wbOy"),
            eM = a("mr0d"),
            eS = a("rzdI"),
            eI = a("bPhe"),
            eT = a("iE5s");

        function eR(e) {
            return "text" !== e.type
        }

        function eA(e) {
            let t, a, o, i, s, r, c, u, d, m, h = (0, l.c)(35),
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
                asset: eT.a
            }) : (0, n.jsx)(A.a, {
                className: "icon-xs shrink-0 text-text/60",
                href: b,
                loadRemote: f
            }), h[0] = f, h[1] = b, h[2] = t) : t = h[2], h[3] !== x.name || h[4] !== x.title ? (a = x.title ?? (0, p.a)(x.name, {
                style: "sentence"
            }), h[3] = x.name, h[4] = x.title, h[5] = a) : a = h[5], h[6] !== x.kind || h[7] !== a ? (o = (0, n.jsx)(g.a, {
                id: "codex.mcpTool.webMcpActivity.completed",
                defaultMessage: "{kind, select, listTools {Listed website tools} other {{toolName}}}",
                values: {
                    kind: x.kind,
                    toolName: a
                }
            }), h[6] = x.kind, h[7] = a, h[8] = o) : o = h[8], h[9] !== y || h[10] !== j ? (i = null == y || j ? y : function(e) {
                try {
                    return JSON.parse(e)
                } catch {
                    return e
                }
            }(y), h[9] = y, h[10] = j, h[11] = i) : i = h[11];
            let w = !!j || void 0;
            h[12] !== x.description || h[13] !== x.name || h[14] !== x.readOnlyHint || h[15] !== x.sourceHostname || h[16] !== x.title || h[17] !== i || h[18] !== w ? (s = e_({
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
                values: {
                    truncated: k
                }
            }), h[20] = k, h[21] = r) : r = h[21], h[22] !== s || h[23] !== r ? (c = (0, n.jsx)(S.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: s,
                language: "json",
                showStickyRightContent: !1,
                title: r
            }), h[22] = s, h[23] = r, h[24] = c) : c = h[24], h[25] !== x.outputJson || h[26] !== x.outputTruncated ? (u = null == x.outputJson ? null : (0, n.jsx)(S.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: x.outputTruncated ? x.outputJson : function(e) {
                    try {
                        return e_(JSON.parse(e), 2)
                    } catch {
                        return e
                    }
                }(x.outputJson),
                language: "json",
                showStickyRightContent: !1,
                title: (0, n.jsx)(g.a, {
                    id: "codex.localConversation.webMcpTools.resultLabel",
                    defaultMessage: "{truncated, select, true {Result (truncated)} other {Result}}",
                    values: {
                        truncated: x.outputTruncated ? "true" : "false"
                    }
                })
            }), h[25] = x.outputJson, h[26] = x.outputTruncated, h[27] = u) : u = h[27], h[28] !== u || h[29] !== c ? (d = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2",
                children: [c, u]
            }), h[28] = u, h[29] = c, h[30] = d) : d = h[30], h[31] !== t || h[32] !== d || h[33] !== o ? (m = (0, n.jsx)(es.a, {
                icon: t,
                status: "completed",
                summary: o,
                children: d
            }), h[31] = t, h[32] = d, h[33] = o, h[34] = m) : m = h[34], m
        }

        function e_(e, t) {
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

        function eU(e) {
            let t = (0, l.c)(73),
                {
                    block: a,
                    conversationId: o,
                    hostId: s
                } = e,
                r = (0, u.y)($.a),
                c = (0, h.a)();
            switch (a.type) {
                case "image": {
                    let e, l, i, u, d, p, m;
                    t[0] !== a.annotations || t[1] !== c ? (e = eL(a.annotations, c), t[0] = a.annotations, t[1] = c, t[2] = e) : e = t[2];
                    let h = e,
                        g = `data:${a.mimeType};base64,${a.data}`;
                    t[3] !== c ? (l = c.formatMessage({
                        id: "codex.mcpTool.contentBlock.imageAlt",
                        defaultMessage: "Image returned by tool"
                    }), t[3] = c, t[4] = l) : l = t[4];
                    let x = l;
                    t[5] !== o || t[6] !== s || t[7] !== x || t[8] !== g || t[9] !== c || t[10] !== r ? (i = () => (0, O.getGeneratedImageContextMenuItems)(r, {
                        chatGptConversationId: o.startsWith("chatgpt:") ? (0, w.d)(o.slice(8)) : void 0,
                        displaySrc: g,
                        hostId: s,
                        image: {
                            kind: "generic",
                            src: g,
                            alt: x
                        },
                        intl: c
                    }), t[5] = o, t[6] = s, t[7] = x, t[8] = g, t[9] = c, t[10] = r, t[11] = i) : i = t[11], t[12] !== x || t[13] !== g ? (u = (0, n.jsx)("img", {
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
                    let e, l, o, i;
                    t[23] !== a.annotations || t[24] !== c ? (e = eL(a.annotations, c), t[23] = a.annotations, t[24] = c, t[25] = e) : e = t[25];
                    let s = e;
                    return t[26] !== a.data || t[27] !== a.mimeType ? (l = (0, n.jsx)(eE, {
                        data: a.data,
                        mimeType: a.mimeType
                    }), t[26] = a.data, t[27] = a.mimeType, t[28] = l) : l = t[28], t[29] !== s ? (o = null != s ? (0, n.jsx)("p", {
                        className: "text-size-chat whitespace-pre-wrap text-codex-description/80",
                        children: s
                    }) : null, t[29] = s, t[30] = o) : o = t[30], t[31] !== l || t[32] !== o ? (i = (0, n.jsxs)("div", {
                        className: "flex flex-col gap-0.5",
                        children: [l, o]
                    }), t[31] = l, t[32] = o, t[33] = i) : i = t[33], i
                }
                case "resource_link": {
                    let e, l, o, i;
                    t[34] !== a.annotations || t[35] !== c ? (e = eL(a.annotations, c), t[34] = a.annotations, t[35] = c, t[36] = e) : e = t[36];
                    let s = e,
                        r = a.title ?? a.name ?? a.uri;
                    return t[37] !== r ? (l = (0, n.jsx)("div", {
                        className: "break-words text-codex-description/80",
                        children: (0, n.jsx)(g.a, {
                            id: "codex.mcpTool.resourceLink.reading",
                            defaultMessage: "Read {resourceLinkName}",
                            values: {
                                resourceLinkName: r
                            }
                        })
                    }), t[37] = r, t[38] = l) : l = t[38], t[39] !== s ? (o = null != s ? (0, n.jsx)("div", {
                        className: "break-words whitespace-pre-wrap text-codex-description/80",
                        children: s
                    }) : null, t[39] = s, t[40] = o) : o = t[40], t[41] !== l || t[42] !== o ? (i = (0, n.jsxs)("div", {
                        className: "flex flex-col gap-0.5 text-size-chat",
                        children: [l, o]
                    }), t[41] = l, t[42] = o, t[43] = i) : i = t[43], i
                }
                case "embedded_resource": {
                    let e, l, o, i, s, r, c, u = a.resource.text ?? a.resource.blob ?? "",
                        d = "" !== u;
                    t[44] !== a.resource.annotations ? (e = eO(a.resource.annotations), t[44] = a.resource.annotations, t[45] = e) : e = t[45];
                    let p = e;
                    return t[46] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsx)("span", {
                        className: "font-medium text-default",
                        children: (0, n.jsx)(g.a, {
                            id: "codex.mcpTool.embeddedResource.uriLabel",
                            defaultMessage: "URI"
                        })
                    }), t[46] = l) : l = t[46], t[47] !== a.resource.uri ? (o = (0, n.jsxs)("div", {
                        className: "flex gap-1",
                        children: [l, (0, n.jsx)("span", {
                            className: "break-all",
                            children: a.resource.uri
                        })]
                    }), t[47] = a.resource.uri, t[48] = o) : o = t[48], t[49] !== a.resource.mimeType ? (i = null != a.resource.mimeType ? (0, n.jsxs)("div", {
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
                    }) : null, t[53] = d, t[54] = u, t[55] = r) : r = t[55], t[56] !== o || t[57] !== i || t[58] !== s || t[59] !== r ? (c = (0, n.jsxs)("div", {
                        className: "flex flex-col gap-0.5 text-size-chat text-codex-description/80",
                        children: [o, i, s, r]
                    }), t[56] = o, t[57] = i, t[58] = s, t[59] = r, t[60] = c) : c = t[60], c
                }
                case "unknown": {
                    let e, l, o;
                    return t[61] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.b)("[&_*]:text-text/50", "bg-primary-soft text-codex-description/80 max-h-48 overflow-auto whitespace-pre-wrap rounded-md px-3 py-2 text-size-chat"), t[61] = e) : e = t[61], t[62] !== a.raw ? (l = e_(a.raw, 2), t[62] = a.raw, t[63] = l) : l = t[63], t[64] !== l ? (o = (0, n.jsx)("pre", {
                        className: e,
                        children: l
                    }), t[64] = l, t[65] = o) : o = t[65], o
                }
                case "text": {
                    let e, l, o;
                    t[66] !== a.annotations || t[67] !== a.text || t[68] !== c ? (e = [a.text, eL(a.annotations, c)].filter(e => null != e).join("\n"), t[66] = a.annotations, t[67] = a.text, t[68] = c, t[69] = e) : e = t[69];
                    let i = e;
                    return t[70] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsx)(g.a, {
                        id: "codex.mcpTool.textBlock.plaintextTitle",
                        defaultMessage: "plaintext"
                    }), t[70] = l) : l = t[70], t[71] !== i ? (o = (0, n.jsx)(S.CodeSnippet, {
                        codeContainerClassName: "max-h-48 overflow-auto",
                        content: i,
                        language: "plaintext",
                        renderSvgAsImage: !1,
                        shouldWrapCode: !0,
                        showStickyRightContent: !1,
                        title: l,
                        variant: "preview"
                    }), t[71] = i, t[72] = o) : o = t[72], o
                }
            }
        }

        function eE(e) {
            let t, a, o, i, r = (0, l.c)(12),
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
                    defaultMessage: "Audio unavailable"
                }), r[5] = e) : e = r[5], e
            }
            return r[6] !== v || r[7] !== p ? (o = e => {
                if (null != e) return (0, ea.d)(e, p, v)
            }, r[6] = v, r[7] = p, r[8] = o) : o = r[8], r[9] !== v || r[10] !== o ? (i = (0, n.jsx)("audio", {
                ref: o,
                className: "w-full gap-0.5",
                controls: !0,
                onError: v,
                preload: "metadata"
            }), r[9] = v, r[10] = o, r[11] = i) : i = r[11], i
        }

        function eL(e, t) {
            let a = eO(e);
            return null == a ? null : t.formatMessage({
                id: "codex.mcpTool.contentBlock.annotationsLine",
                defaultMessage: "Annotations: {annotations}"
            }, {
                annotations: a
            })
        }

        function eO(e) {
            if (null == e) return null;
            let t = [];
            return (null != e.audience && e.audience.length > 0 && t.push(`audience=${e.audience.join(", ")}`), null != e.priority && t.push(`priority=${String(e.priority)}`), null != e.lastModified && t.push(`lastModified=${e.lastModified}`), 0 === t.length) ? null : t.join("; ")
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, s, r, w, I, O, $, et, ea, es, eE, eL, eO, eP, eD, eB, eH, eq, ez, eW, eJ, eK, eV, eF, eG, eZ, eQ, eX, e$, eY, e1, e0, e2, e3, e4, e5, e6, e8, e7, e9, te, tt, ta, tn, tl = (0, l.c)(237),
                    {
                        item: to,
                        conversationId: ti,
                        expandedContentOnly: ts,
                        hideTextBlocksWithStructuredContent: tr,
                        hostId: tc,
                        loadRemoteLogos: tu,
                        appInfoOverride: td,
                        onExpand: tp,
                        onOpenPermissions: tm,
                        responseBodyId: th,
                        renderMcpApps: tg,
                        shouldAutoExpandMcpApp: tx,
                        summary: tv,
                        summaryIcon: tf,
                        toolActivityTurnKey: tb
                    } = e,
                    ty = void 0 !== ts && ts,
                    tj = void 0 !== tr && tr,
                    tw = void 0 === tu || tu,
                    tk = void 0 === tg || tg,
                    tC = void 0 === tv ? null : tv,
                    tN = (0, u.y)(Y.a),
                    [tM, tS] = (0, m.useState)(!1);
                tl[0] !== tc || tl[1] !== to ? (t = (0, eb.b)(to, tc), tl[0] = tc, tl[1] = to, tl[2] = t) : t = tl[2], tl[3] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                    enabled: !1
                }, tl[3] = a) : a = tl[3];
                let tI = (0, u.x)(eb.a, t, a);
                tl[4] !== tI || tl[5] !== to ? (s = null == tI ? to : {
                    ...to,
                    result: tI,
                    deferredOutputTurnId: void 0
                }, tl[4] = tI, tl[5] = to, tl[6] = s) : s = tl[6];
                let tT = s;
                tl[7] !== td || tl[8] !== tc || tl[9] !== tT ? (r = {
                    item: tT,
                    hostId: tc,
                    appInfoOverride: td
                }, tl[7] = td, tl[8] = tc, tl[9] = tT, tl[10] = r) : r = tl[10];
                let {
                    matchingApp: tR,
                    pluginIcon: tA
                } = (0, ey.c)(r), t_ = (0, h.a)(), {
                    platform: tU
                } = (0, E.a)();
                tl[11] !== tT.callId ? (w = (0, d.$e)(tT.callId), tl[11] = tT.callId, tl[12] = w) : w = tl[12];
                let tE = w,
                    tL = (0, u.x)(Z.u, tE),
                    tO = (0, u.x)(Z.h, tE),
                    tP = (0, u.x)(Z.p, tE),
                    tD = tO?.content.toolCallStatus == null && tO?.content.toolResult != null;
                tl[13] !== tc || tl[14] !== tT || tl[15] !== tL || tl[16] !== tD ? (I = (0, ew.a)({
                    item: tT,
                    hostId: tc,
                    retainedState: {
                        sourceId: tL,
                        hasSuccessfulToolResult: tD
                    }
                }), tl[13] = tc, tl[14] = tT, tl[15] = tL, tl[16] = tD, tl[17] = I) : I = tl[17];
                let tB = I;
                tl[18] !== tB || tl[19] !== tk ? (O = tk && (0, H.c)() && tB.isEligible, tl[18] = tB, tl[19] = tk, tl[20] = O) : O = tl[20];
                let tH = O;
                tl[21] !== ti || tl[22] !== tT.callId ? ($ = (0, q.a)({
                    callId: tT.callId,
                    conversationId: ti
                }), tl[21] = ti, tl[22] = tT.callId, tl[23] = $) : $ = tl[23];
                let tq = $,
                    tz = (0, u.x)(q.b, tq);
                (0, ee.f)("2957382457");
                let tW = (0, u.z)(b.a);
                tl[24] !== ti || tl[25] !== tH ? (et = tH || !ti.startsWith("chatgpt:"), tl[24] = ti, tl[25] = tH, tl[26] = et) : et = tl[26], tl[27] !== ti || tl[28] !== tc || tl[29] !== tT || tl[30] !== tP || tl[31] !== tH || tl[32] !== et ? (ea = {
                    item: tT,
                    hostId: tc,
                    conversationId: ti,
                    fallback: tP,
                    enabled: tH,
                    catalogEnabled: et
                }, tl[27] = ti, tl[28] = tc, tl[29] = tT, tl[30] = tP, tl[31] = tH, tl[32] = et, tl[33] = ea) : ea = tl[33];
                let tJ = (0, ey.a)(ea),
                    {
                        isCodexAppsToolCall: tK,
                        successfulToolResult: tV,
                        resourceUri: tF,
                        toolDefinition: tG
                    } = tJ,
                    {
                        elementHeightPx: tZ,
                        elementRef: tQ
                    } = (0, em.a)(),
                    tX = tT.result?.type === "success" ? tT.result.content : null,
                    t$ = tT.result?.type === "error" ? tT.result.error : null;
                tl[34] !== tT || tl[35] !== tU ? (es = (0, ed.d)({
                    item: tT,
                    platform: tU
                }), tl[34] = tT, tl[35] = tU, tl[36] = es) : es = tl[36];
                let tY = es,
                    t1 = tY?.nativeAppReference ?? null,
                    t0 = (0, ex.b)(t1),
                    t2 = t0?.appPath ?? null;
                tl[37] !== t2 ? (eE = {
                    appPath: t2
                }, tl[37] = t2, tl[38] = eE) : eE = tl[38];
                let {
                    iconSmall: t3
                } = (0, k.a)(eE);
                tl[39] !== tT || tl[40] !== tR || tl[41] !== tf ? (eL = void 0 === tf ? (0, eg.d)(tT, null == tR ? [] : [tR])?.icon : tf, tl[39] = tT, tl[40] = tR, tl[41] = tf, tl[42] = eL) : eL = tl[42];
                let t4 = eL;
                if (void 0 === tf && null != t4) {
                    let e, t;
                    tl[43] !== tR ? (e = null == tR ? [] : [tR], tl[43] = tR, tl[44] = e) : e = tl[44], tl[45] !== t4 || tl[46] !== tT || tl[47] !== tw || tl[48] !== e ? (t = (0, n.jsx)(X.a, {
                        item: tT,
                        apps: e,
                        part: "icon",
                        loadMetadata: tw,
                        children: t4
                    }), tl[45] = t4, tl[46] = tT, tl[47] = tw, tl[48] = e, tl[49] = t) : t = tl[49], t4 = t
                }
                tl[50] !== tT.source?.kind || tl[51] !== tV ? (eO = tT.source?.kind === "browserUse" && null != tV ? (0, f.a)(tV._meta) : null, tl[50] = tT.source?.kind, tl[51] = tV, tl[52] = eO) : eO = tl[52];
                let t5 = eO,
                    t6 = tW && !ty && tT.completed && (0, d.qi)(tT.invocation.server) && "js" === tT.invocation.tool && null != tV ? (0, eh.a)(tV._meta) : [],
                    t8 = tR ?? null;
                tl[53] !== t_ || tl[54] !== tT.appContext || tl[55] !== tT.completed || tl[56] !== tT.invocation.arguments || tl[57] !== tT.invocation.server || tl[58] !== tT.invocation.tool || tl[59] !== tT.pluginId || tl[60] !== tT.result || tl[61] !== tT.source || tl[62] !== tT.toolDisplay || tl[63] !== t0 || tl[64] !== tU || tl[65] !== t8 || tl[66] !== tG ? (eP = (0, ek.b)({
                    pluginId: tT.pluginId,
                    toolDisplay: tT.toolDisplay,
                    toolDefinition: tG,
                    appContext: tT.appContext,
                    completed: tT.completed,
                    intl: t_,
                    toolName: tT.invocation.tool,
                    serverName: tT.invocation.server,
                    matchingApp: t8,
                    nativeDesktopAppMetadata: t0,
                    platform: tU,
                    source: tT.source,
                    toolArguments: tT.invocation.arguments,
                    toolResult: tT.result
                }), tl[53] = t_, tl[54] = tT.appContext, tl[55] = tT.completed, tl[56] = tT.invocation.arguments, tl[57] = tT.invocation.server, tl[58] = tT.invocation.tool, tl[59] = tT.pluginId, tl[60] = tT.result, tl[61] = tT.source, tl[62] = tT.toolDisplay, tl[63] = t0, tl[64] = tU, tl[65] = t8, tl[66] = tG, tl[67] = eP) : eP = tl[67];
                let {
                    label: t7,
                    readsPlainText: t9
                } = eP, ae = tH && null != tF && tB.isRenderable, at = (0, u.x)(null != th && ae ? Z.j : null, tE), {
                    resource: aa,
                    renderData: an,
                    state: al,
                    refetch: ao
                } = (0, ey.b)(tJ, ae), ai = tO?.sessionId == null ? null : tO.content.resource, as = null == ai ? aa?.resourceIdentityVerified : tO?.content.mcpAppScope.resourceIdentityVerified, ar = null == ai ? al.error : null, ac = ae && null == ai && al.isLoading, au = (0, u.x)(Z.r, tE), ad = (0, u.x)(Z.n, tE), ap = (0, K.a)({
                    hasResourceError: null != ar,
                    isResourceLoading: ac,
                    isDilEnabled: !1,
                    renderData: ai ?? an,
                    resourceUri: tF ?? null,
                    shouldRenderMcpApp: ae
                }), am = "html" === ap.kind ? ap.renderData : null, ah = (0, V.e)({
                    data: am,
                    error: ar,
                    isLoading: ac
                }, Z.H), ag = "fallback" !== ap.kind, ax = tH && null != tF && (!ag || null != ar || null != au && !(au instanceof V.b) || "too-large" === ah.kind || "error" === ah.kind), av = ax || (am?.isCollapsible ?? !0), af = ad;
                ax ? af = "fallback" : "html" !== ap.kind && (af = ap.kind);
                let ab = "pending" === af,
                    ay = "launcher" === af,
                    aj = ab || ay;
                tl[68] !== tO ? (eD = null != tO && tO.content.resource?.hideAttribution === !0 && (!0 === tO.content.mcpAppScope.isVerifiedFirstParty || (0, ej.b)(tO.content)), tl[68] = tO, tl[69] = eD) : eD = tl[69];
                let aw = eD,
                    ak = "inline" === af,
                    aC = void 0 !== tx && tx && ae,
                    aN = !ax && tM || aC,
                    aM = ag && !ay && (!av || (tz ?? aN)),
                    aS = aM && !ab,
                    aI = ak && aS,
                    aT = tM || (tz ?? aC),
                    [aR, aA] = (0, m.useState)(!1),
                    a_ = aI && aR,
                    aU = ac || ab && aM;
                tl[70] !== aM || tl[71] !== a_ || tl[72] !== aU ? (eB = {
                    isLoading: aU,
                    isInlineRequested: aM,
                    isInlineOpening: a_
                }, tl[70] = aM, tl[71] = a_, tl[72] = aU, tl[73] = eB) : eB = tl[73];
                let aE = (0, D.d)(tE, eB),
                    aL = !ax && (ab || "html" === ap.kind) ? aE : null;
                tl[74] !== tG ? (eH = (0, F.b)(tG)?.resourceUri, tl[74] = tG, tl[75] = eH) : eH = tl[75];
                let aO = eH,
                    aP = tV?._meta;
                tl[76] !== aP ? (eq = c()(aP, ["_codex_apps", "resource_uri"]), tl[76] = aP, tl[77] = eq) : eq = tl[77];
                let aD = eq;
                tl[78] !== aO || tl[79] !== tK || tl[80] !== tF || tl[81] !== aD || tl[82] !== tG?._meta ? (ez = tK && null != aO && aD === aO && (0, d.Ig)(tG?._meta) === tF, tl[78] = aO, tl[79] = tK, tl[80] = tF, tl[81] = aD, tl[82] = tG?._meta, tl[83] = ez) : ez = tl[83];
                let aB = !(ez && !0 === as && (0, D.b)({
                    isInline: !av && ("inline" === af || ab),
                    status: aL,
                    hidesAttributionAndActions: am?.hideAttribution === !0 && !0 === am.hideActions
                })) && (aj || !ty && (av || "html" === ap.kind && !aw));
                tl[84] !== tK || tl[85] !== tT.appContext?.appName || tl[86] !== tT.invocation.server || tl[87] !== tR?.name || tl[88] !== tA?.alt ? (eW = tR?.name ?? tT.appContext?.appName ?? tA?.alt ?? (tK ? null : (0, p.a)(tT.invocation.server)), tl[84] = tK, tl[85] = tT.appContext?.appName, tl[86] = tT.invocation.server, tl[87] = tR?.name, tl[88] = tA?.alt, tl[89] = eW) : eW = tl[89];
                let aH = eW;
                tl[90] !== aH || tl[91] !== tG ? (eJ = (0, D.a)((0, x.a)(tG), aH), tl[90] = aH, tl[91] = tG, tl[92] = eJ) : eJ = tl[92];
                let aq = eJ,
                    az = ax ? ty || tM : !aj && (ty || (ag ? aS : aT));
                e: {
                    let e, t, a, n;
                    if (!az) {
                        let e;
                        tl[93] !== tX ? (e = {
                            displayContent: tX,
                            displayStructuredContentJson: null
                        }, tl[93] = tX, tl[94] = e) : e = tl[94], eK = e;
                        break e
                    }
                    tl[95] !== tT.result ? (e = tT.result?.type === "success" && null != tT.result.structuredContent ? e_(tT.result.structuredContent, 2) : null, tl[95] = tT.result, tl[96] = e) : e = tl[96];
                    let l = e;tl[97] !== tX || tl[98] !== tj || tl[99] !== l ? (t = tj && null != l && null != tX ? tX.filter(eR) : tX, tl[97] = tX, tl[98] = tj, tl[99] = l, tl[100] = t) : t = tl[100];
                    let o = t;tl[101] !== o ? (a = function(e) {
                        if (e?.length !== 1) return null;
                        let [t] = e;
                        if ("text" !== t.type || null != t.annotations) return null;
                        let a = t.text.trim();
                        if ("{" !== a[0] && "[" !== a[0]) return null;
                        try {
                            return e_(JSON.parse(a), 2)
                        } catch {
                            return null
                        }
                    }(o), tl[101] = o, tl[102] = a) : a = tl[102];
                    let i = a;
                    if (null == i) {
                        let e;
                        tl[103] !== l || tl[104] !== o ? (e = {
                            displayContent: o,
                            displayStructuredContentJson: l
                        }, tl[103] = l, tl[104] = o, tl[105] = e) : e = tl[105], eK = e;
                        break e
                    }
                    if (null == l || i === l) {
                        let e, t;
                        tl[106] === Symbol.for("react.memo_cache_sentinel") ? (e = [], tl[106] = e) : e = tl[106];
                        let a = l ?? i;
                        tl[107] !== a ? (t = {
                            displayContent: e,
                            displayStructuredContentJson: a
                        }, tl[107] = a, tl[108] = t) : t = tl[108], eK = t;
                        break e
                    }
                    tl[109] !== l || tl[110] !== o ? (n = {
                        displayContent: o,
                        displayStructuredContentJson: l
                    }, tl[109] = l, tl[110] = o, tl[111] = n) : n = tl[111],
                    eK = n
                }
                let {
                    displayContent: aW,
                    displayStructuredContentJson: aJ
                } = eK, [aK, aV] = (0, m.useState)(!1);
                t: {
                    let e;
                    if (!aK) {
                        eV = null;
                        break t
                    }
                    tl[112] !== tT.callId || tl[113] !== tT.durationMs || tl[114] !== tT.invocation || tl[115] !== tT.result ? (e = e_({
                        callId: tT.callId,
                        invocation: tT.invocation,
                        durationMs: tT.durationMs,
                        result: tT.result
                    }, 2), tl[112] = tT.callId, tl[113] = tT.durationMs, tl[114] = tT.invocation, tl[115] = tT.result, tl[116] = e) : e = tl[116],
                    eV = e
                }
                let aF = eV;
                tl[117] !== t_ ? (eF = t_.formatMessage({
                    id: "codex.mcpTool.rawOutputTriggerTooltip",
                    defaultMessage: "Show raw tool call output"
                }), tl[117] = t_, tl[118] = eF) : eF = tl[118];
                let aG = eF,
                    aZ = tT.completed || null != tT.result || ag;
                tl[119] !== tT ? (eG = (0, eu.a)(tT), tl[119] = tT, tl[120] = eG) : eG = tl[120];
                let aQ = eG,
                    aX = !ty && !aQ && !ae && !ax,
                    a$ = !tT.completed;
                tl[121] !== tR ? (eZ = null == tR ? [] : [tR], tl[121] = tR, tl[122] = eZ) : eZ = tl[122], tl[123] !== tT || tl[124] !== tw || tl[125] !== eZ || tl[126] !== t7 ? (eQ = (0, n.jsx)(X.a, {
                    item: tT,
                    apps: eZ,
                    part: "label",
                    loadMetadata: tw,
                    children: t7
                }), tl[123] = tT, tl[124] = tw, tl[125] = eZ, tl[126] = t7, tl[127] = eQ) : eQ = tl[127], tl[128] !== a$ || tl[129] !== eQ ? (eX = (0, n.jsx)(eN.a, {
                    active: a$,
                    className: "min-w-0 shrink truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                    children: eQ
                }), tl[128] = a$, tl[129] = eQ, tl[130] = eX) : eX = tl[130];
                let aY = eX;
                tl[131] !== ti || tl[132] !== tT || tl[133] !== aY ? (e$ = !ti.startsWith("chatgpt:") && (0, eC.b)(tT) ? (0, n.jsxs)("span", {
                    className: "inline-flex max-w-full min-w-0 items-center gap-1 text-text-tertiary/90 group-hover/activity-header:text-default",
                    children: [aY, (0, n.jsx)("span", {
                        "aria-hidden": "true",
                        className: "before:content-['·']"
                    }), (0, n.jsx)("span", {
                        className: "shrink-0",
                        children: (0, n.jsx)(g.a, {
                            id: "codex.mcpTool.timedOutStatus",
                            defaultMessage: "Timed out"
                        })
                    })]
                }) : aY, tl[131] = ti, tl[132] = tT, tl[133] = aY, tl[134] = e$) : e$ = tl[134];
                let a1 = e$;
                tl[135] !== t4 || tl[136] !== t5 || tl[137] !== tc || tl[138] !== tT || tl[139] !== tw || tl[140] !== tR || tl[141] !== t3 || tl[142] !== t0?.displayName || tl[143] !== t1 || tl[144] !== tY || tl[145] !== tA ? (eY = void 0 !== t4 ? t4 : (0, n.jsx)(ec.a, {
                    hostId: tc,
                    item: tT,
                    loadRemoteLogos: tw,
                    fallback: null == tA && null != t1 ? (0, n.jsx)(C.a, {
                        alt: t0?.displayName ?? tY?.name ?? tT.invocation.server,
                        className: "icon-xs shrink-0 scale-[1.15] object-contain",
                        loadRemote: tw,
                        logoUrl: t3,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(_.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: eM.a
                        })
                    }) : null == tA && tY?.groupKey === ed.b ? (0, n.jsx)(_.a, {
                        className: "shrink-0 text-secondary",
                        asset: eM.a
                    }) : null == tA && tY?.logoUrl != null ? (0, n.jsx)(C.a, {
                        alt: tY.name,
                        className: "icon-xs shrink-0 object-contain",
                        loadRemote: tw,
                        logoUrl: tY.logoUrl,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(_.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: eS.a
                        })
                    }) : null == tA && tY?.usesBrowserIcon === !0 ? null == t5 ? (0, n.jsx)(_.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: eT.a
                    }) : (0, n.jsx)(A.a, {
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        href: t5,
                        loadRemote: tw
                    }) : null == tA && (0, d.qi)(tT.invocation.server) ? (0, n.jsx)(_.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: eI.a
                    }) : (0, n.jsx)(C.a, {
                        alt: tA?.alt ?? tR?.name ?? tT.appContext?.appName ?? tT.invocation.server,
                        appInfo: null == tA ? tR : null,
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        loadRemote: tw,
                        knownAppId: tA?.knownAppId ?? tT.appContext?.appName ?? tT.appContext?.connectorId,
                        logoUrl: tA?.logoUrl,
                        fallback: (0, n.jsx)(_.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: eS.a
                        })
                    })
                }), tl[135] = t4, tl[136] = t5, tl[137] = tc, tl[138] = tT, tl[139] = tw, tl[140] = tR, tl[141] = t3, tl[142] = t0?.displayName, tl[143] = t1, tl[144] = tY, tl[145] = tA, tl[146] = eY) : eY = tl[146];
                let a0 = eY;
                tl[147] !== a1 || tl[148] !== tC || tl[149] !== a0 ? (e1 = tC ?? (0, n.jsxs)(n.Fragment, {
                    children: [a0, a1]
                }), tl[147] = a1, tl[148] = tC, tl[149] = a0, tl[150] = e1) : e1 = tl[150];
                let a2 = e1;
                tl[151] !== aT || tl[152] !== aM || tl[153] !== tM || tl[154] !== tq || tl[155] !== tp || tl[156] !== tN || tl[157] !== aC || tl[158] !== ax || tl[159] !== ag || tl[160] !== ak || tl[161] !== tb || tl[162] !== tz ? (e0 = () => {
                    if (ax) {
                        tM || tp?.(), tS(!tM);
                        return
                    }
                    let e = ag ? !aM : !aT;
                    if (e && tp?.(), ag) {
                        aA(e && ak), tN.set(q.b, tq, e);
                        return
                    }
                    e && null != tb && (0, ep.b)(tN, tb), !e && (!0 === tz || aC) && tN.set(q.b, tq, !1), tS(e)
                }, tl[151] = aT, tl[152] = aM, tl[153] = tM, tl[154] = tq, tl[155] = tp, tl[156] = tN, tl[157] = aC, tl[158] = ax, tl[159] = ag, tl[160] = ak, tl[161] = tb, tl[162] = tz, tl[163] = e0) : e0 = tl[163];
                let a3 = e0;
                tl[164] !== tT.automaticApprovalReviews ? (e2 = null == tT.automaticApprovalReviews ? null : (0, n.jsx)(er.a, {}), tl[164] = tT.automaticApprovalReviews, tl[165] = e2) : e2 = tl[165];
                let a4 = e2,
                    a5 = aI && (am?.prefersBorder ?? tO?.content.resource?.prefersBorder ?? !0),
                    a6 = aZ && "opening" !== aL && !ay && av ? {
                        alignEnd: a5,
                        expanded: az,
                        onToggle: a3
                    } : void 0,
                    a8 = (0, i.b)("group", a5 && "overflow-hidden rounded-lg border border-strong bg-surface"),
                    a7 = (0, i.b)((ay || aI) && "w-full", a5 && "px-4 py-2.5");
                tl[166] !== ao ? (e3 = () => {
                    ao({
                        cancelRefetch: !1
                    })
                }, tl[166] = ao, tl[167] = e3) : e3 = tl[167];
                let a9 = (0, n.jsx)(J.a, {
                    hostDisplayModes: Z.H,
                    resource: {
                        data: null == tF ? null : am,
                        error: ar,
                        isLoading: ac
                    },
                    inlineSurface: ak ? "card" : "standalone",
                    mcpAppId: tE,
                    appName: aH ?? void 0,
                    presentation: ax ? "inline" : ad,
                    onRetryResourceRead: e3,
                    showLoadingStatus: !aB
                });
                tl[168] !== tc || tl[169] !== tT ? (e4 = (0, eb.b)(tT, tc), tl[168] = tc, tl[169] = tT, tl[170] = e4) : e4 = tl[170];
                let ne = e4,
                    nt = aj && aM,
                    na = () => (0, n.jsxs)(el.a, {
                        ref: aX || ak ? void 0 : tQ,
                        className: (0, i.b)(ae && "relative", !av && "py-1"),
                        variant: av && !a5 && (aB || !ak) ? "default" : "flush",
                        children: [null == tT.automaticApprovalReviews ? null : (0, n.jsx)(er.d, {
                            className: a5 ? "px-4" : void 0,
                            isExpandable: !ak,
                            reviews: tT.automaticApprovalReviews
                        }), null != ne ? (0, n.jsx)(ef.a, {
                            ...ne
                        }) : (0, n.jsxs)(n.Fragment, {
                            children: [ag ? a_ ? (0, n.jsx)(W.a, {
                                className: "w-full",
                                height: (0, z.a)(null, am?.heightHint ?? null, am?.minFrameHeight ?? null, "card"),
                                showLoadingStatus: !1
                            }) : a9 : aW && aW.length > 0 ? (0, n.jsx)("div", {
                                className: (0, i.b)("[&_*]:text-text/50", "flex flex-col gap-0.5"),
                                children: aW.map((e, t) => (0, n.jsx)(eU, {
                                    block: e,
                                    conversationId: ti,
                                    hostId: tc
                                }, t))
                            }) : t$ ? (0, n.jsx)(U.a, {
                                className: "w-full",
                                fullWidth: !0,
                                level: "danger",
                                children: (0, n.jsx)("div", {
                                    className: "max-h-48 overflow-auto text-size-chat whitespace-pre-wrap",
                                    children: t$
                                })
                            }) : aJ ? null : (0, n.jsx)("p", {
                                className: "text-codex-description/80",
                                children: (0, n.jsx)(g.a, {
                                    id: "codex.mcpTool.noResult",
                                    defaultMessage: "Tool returned no content"
                                })
                            }), !ac && !a_ && !ag && aJ && (0, n.jsx)(S.CodeSnippet, {
                                codeContainerClassName: "max-h-48 overflow-auto",
                                language: "json",
                                content: aJ,
                                showStickyRightContent: !1
                            }), !ac && !a_ && (0, n.jsx)(T.a, {
                                open: aK,
                                onOpenChange: aV,
                                triggerContent: (0, n.jsx)("div", {
                                    className: (0, i.b)("inline-flex w-fit", ae && "absolute right-1 bottom-2 z-50"),
                                    children: (0, n.jsx)(o.a, {
                                        side: "top",
                                        align: "center",
                                        content: aG,
                                        children: (0, n.jsx)(M.a, {
                                            className: "cursor-interaction opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 focus-visible:opacity-100",
                                            "aria-label": aG,
                                            color: "ghost",
                                            onClick: () => {
                                                aV(!0)
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
                                                    values: {
                                                        server: tT.invocation.server,
                                                        tool: tT.invocation.tool
                                                    }
                                                })
                                            })
                                        })
                                    }), (0, n.jsx)(R.e, {
                                        children: null == aF ? null : (0, n.jsx)(S.CodeSnippet, {
                                            codeContainerClassName: "max-h-128 overflow-auto",
                                            language: "json",
                                            content: aF,
                                            showStickyRightContent: !0
                                        })
                                    })]
                                })
                            })]
                        })]
                    }),
                    nn = aX ? null : (0, n.jsxs)(n.Fragment, {
                        children: [aQ ? (0, n.jsx)(el.a, {
                            children: (0, n.jsx)(U.a, {
                                className: "w-full",
                                fullWidth: !0,
                                level: "warning",
                                actions: null == tm ? void 0 : (0, n.jsx)(M.a, {
                                    color: "secondary",
                                    onClick: tm,
                                    children: (0, n.jsx)(g.a, {
                                        id: "codex.mcpTool.reviewPermissions",
                                        defaultMessage: "Review permissions"
                                    })
                                }),
                                children: null == tm ? (0, n.jsx)(g.a, {
                                    id: "codex.mcpTool.approvalRequestsDisabled",
                                    defaultMessage: "Approval requests were disabled for this tool call. If available, review this chat’s permissions before retrying."
                                }) : (0, n.jsx)(g.a, {
                                    id: "codex.mcpTool.approvalRequestsDisabled.recovery",
                                    defaultMessage: "Approval requests were disabled for this tool call. Choose “Ask for approval” in this chat’s permissions if available, then ask to retry."
                                })
                            })
                        }) : null, aj ? a9 : (0, n.jsx)(N.a, {
                            expanded: az,
                            height: ak ? "auto" : tZ,
                            onExpandComplete: aS ? () => aA(!1) : void 0,
                            children: az ? na() : null
                        })]
                    });
                tl[171] !== a6 || tl[172] !== aX || tl[173] !== nn || tl[174] !== na ? (e5 = aX ? {
                    disclosure: a6 && {
                        ...a6,
                        details: na
                    }
                } : {
                    externalDisclosure: a6,
                    body: nn
                }, tl[171] = a6, tl[172] = aX, tl[173] = nn, tl[174] = na, tl[175] = e5) : e5 = tl[175];
                let nl = e5;
                tl[176] !== a4 || tl[177] !== a6 || tl[178] !== a7 || tl[179] !== ac || tl[180] !== nn || tl[181] !== tE || tl[182] !== nl || tl[183] !== a2 || tl[184] !== a0 || tl[185] !== aq || tl[186] !== aL ? (e6 = null != aL ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(B.a, {
                        accessory: a4,
                        className: a7,
                        disabled: ac,
                        disclosure: a6,
                        icon: a0,
                        mcpAppId: tE,
                        name: aq,
                        status: aL
                    }), nn]
                }) : (0, n.jsx)(eo.a, {
                    accessory: a4,
                    className: a7,
                    ...nl,
                    children: a2
                }), tl[176] = a4, tl[177] = a6, tl[178] = a7, tl[179] = ac, tl[180] = nn, tl[181] = tE, tl[182] = nl, tl[183] = a2, tl[184] = a0, tl[185] = aq, tl[186] = aL, tl[187] = e6) : e6 = tl[187];
                let no = e6;
                tl[188] !== tT ? (e8 = (0, v.a)(tT), tl[188] = tT, tl[189] = e8) : e8 = tl[189];
                let ni = e8;
                if (null != ni) {
                    let e;
                    return tl[190] !== ni.id || tl[191] !== ni.schedule || tl[192] !== ni.title ? (e = (0, n.jsx)(P.a, {
                        id: ni.id,
                        mode: "view",
                        name: ni.title,
                        rrule: ni.schedule
                    }), tl[190] = ni.id, tl[191] = ni.schedule, tl[192] = ni.title, tl[193] = e) : e = tl[193], e
                }
                tl[194] !== tc || tl[195] !== tT ? (e7 = (0, Q.b)(tT, tc), tl[194] = tc, tl[195] = tT, tl[196] = e7) : e7 = tl[196];
                let ns = e7;
                if (ns?.type === "chatgpt-automation") {
                    let e;
                    return tl[197] !== ns ? (e = (0, n.jsx)(y.a, {
                        automation: ns
                    }), tl[197] = ns, tl[198] = e) : e = tl[198], e
                }
                if (ns?.type === "chatgpt-automation-list") {
                    let e;
                    return tl[199] !== ns.automations ? (e = (0, n.jsx)(j.a, {
                        automations: ns.automations
                    }), tl[199] = ns.automations, tl[200] = e) : e = tl[200], e
                }
                let nr = ae && !ax ? th : void 0;
                tl[201] !== nt || tl[202] !== ne || tl[203] !== t9 || tl[204] !== tC ? (e9 = null != ne && (nt || null == tC && t9) ? (0, n.jsx)(ef.a, {
                    ...ne,
                    quiet: !nt
                }) : null, tl[201] = nt, tl[202] = ne, tl[203] = t9, tl[204] = tC, tl[205] = e9) : e9 = tl[205], tl[206] !== aM || tl[207] !== tE || tl[208] !== tk || tl[209] !== tN || tl[210] !== ae ? (te = tk || "chatgpt-thread" !== tN.value.routeKind ? (0, n.jsx)(G.b, {
                    mcpAppId: tE,
                    isInlineRequested: ae && aM
                }) : null, tl[206] = aM, tl[207] = tE, tl[208] = tk, tl[209] = tN, tl[210] = ae, tl[211] = te) : te = tl[211], tl[212] !== a1 || tl[213] !== a4 || tl[214] !== a8 || tl[215] !== aB || tl[216] !== a7 || tl[217] !== ab || tl[218] !== nn || tl[219] !== at || tl[220] !== nl || tl[221] !== ak || tl[222] !== tC || tl[223] !== tf || tl[224] !== no || tl[225] !== nr || tl[226] !== aL ? (tt = void 0 !== tf && aB && null == aL ? (0, n.jsx)(en.a, {
                    accessory: a4,
                    ...nl,
                    className: a8,
                    "data-mcp-app-card": !!ak || void 0,
                    headerClassName: a7,
                    icon: tf,
                    summary: tC ?? a1
                }) : (0, n.jsx)(ei.a, {
                    className: a8,
                    "data-mcp-app-card": !!ak || void 0,
                    "data-response-body": nr,
                    "data-response-widget-pending": null != nr && (ab || at) ? "" : void 0,
                    children: aB ? no : nn
                }), tl[212] = a1, tl[213] = a4, tl[214] = a8, tl[215] = aB, tl[216] = a7, tl[217] = ab, tl[218] = nn, tl[219] = at, tl[220] = nl, tl[221] = ak, tl[222] = tC, tl[223] = tf, tl[224] = no, tl[225] = nr, tl[226] = aL, tl[227] = tt) : tt = tl[227], tl[228] !== t5 || tl[229] !== tT.callId || tl[230] !== tw ? (ta = (e, t) => (0, n.jsxs)(m.Fragment, {
                    children: [(0, n.jsx)(ev.a, {
                        variant: "activity"
                    }), (0, n.jsx)(eA, {
                        call: e,
                        fallbackPageUrl: t5,
                        loadRemoteLogos: tw
                    })]
                }, `${tT.callId}:webmcp:${t}:${e.name}`), tl[228] = t5, tl[229] = tT.callId, tl[230] = tw, tl[231] = ta) : ta = tl[231];
                let nc = t6.map(ta);
                return tl[232] !== e9 || tl[233] !== te || tl[234] !== tt || tl[235] !== nc ? (tn = (0, n.jsxs)(n.Fragment, {
                    children: [e9, te, tt, nc]
                }), tl[232] = e9, tl[233] = te, tl[234] = tt, tl[235] = nc, tl[236] = tn) : tn = tl[236], tn
            }
        })
    }),
    KU8M: (function(e, t, a) {
        var n = a("BolX"),
            l = a("Zqzr"),
            o = a("KJ1J"),
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
                if (!(0, o.f)(c.server) || c.appContext?.linkId == null) return u(r.r, d);
                let p = u(r.q, a);
                if (p.isError) return u(r.r, d);
                let m = (0, s.b)({
                    ...c,
                    mcpServerStatuses: p.data
                });
                return void 0 === m || (0, l.Ig)(m?._meta) === c.appContext.resourceUri && null != (0, i.c)(m, c.appContext) ? p : u(r.r, d)
            }),
            d = (0, n.d)(c.a, (e, t) => {
                let {
                    appContext: a,
                    hostId: n,
                    invocationResourceUri: l,
                    server: s,
                    threadId: r,
                    tool: c
                } = e, {
                    get: d
                } = t;
                if (!(0, o.f)(s)) return null;
                let p = d(u, {
                    appContext: a,
                    hostId: n,
                    invocationResourceUri: l,
                    server: s,
                    threadId: r,
                    tool: c
                }).data?.data.find(e => e.name === s);
                if (null == p && null == l && a?.linkId == null) return;
                let m = Object.values(p?.tools ?? {}).filter(e => null != e);
                return (0, i.d)({
                    appContext: a,
                    invocationResourceUri: l,
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
            l = a("QosV"),
            o = a("BolX"),
            i = a("Zqzr"),
            s = a("sM3V"),
            r = a("KJ1J"),
            c = a("KaH3"),
            u = a("Nj7b"),
            d = a("FvYa"),
            p = a("HOLv"),
            m = a("zUz7"),
            h = a("LF5P"),
            g = a("HfZX");
        a.d(t, {}, {
            a: function(e) {
                let t, a, x = (0, l.c)(9),
                    {
                        fallback: v,
                        hostId: f,
                        item: b,
                        loadRemoteLogos: y
                    } = e,
                    j = b.appContext?.connectorId === u.b || (0, c.f)(b),
                    w = (0, o.x)(!y || j || null != (0, h.d)({
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
            l = a("tSEg");
        let o = (0, n.v)(l.a, e => null),
            i = (0, n.d)(l.a, (e, t) => {
                let {
                    get: a
                } = t;
                return null != e && a(o, s(e)) === e
            });

        function s(e) {
            let t = e.indexOf("\0");
            return -1 === t ? e : e.slice(0, t)
        }
        a.d(t, {}, {
            a: i,
            b: function(e, t) {
                e.set(o, s(t), t)
            }
        })
    }),
    SfaR: (function(e, t, a) {
        var n = a("ASxG");
        let l = n.discriminatedUnion("kind", [n.object({
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
            o = n.object({
                "codex/toolSurface": n.object({
                    kind: n.literal("browserUse"),
                    webMcpCalls: n.array(l)
                })
            });
        a.d(t, {}, {
            a: function(e) {
                let t = o.safeParse(e);
                return t.success ? t.data["codex/toolSurface"].webMcpCalls : []
            }
        })
    }),
    oKu4: (function(e, t, a) {
        var n = a("ABep"),
            l = a("QosV"),
            o = a("Wyro"),
            i = a.n(o),
            s = a("BolX"),
            r = a("Zqzr"),
            c = a("Wf1j"),
            u = a("rEML"),
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
                let t, a, o, b, y, j, w, k, C, N, M, S, I, T, R, A, _, U, E = (0, l.c)(129),
                    {
                        elicitation: L,
                        result: O,
                        id: P,
                        kind: D,
                        mode: B,
                        name: H,
                        prompt: q,
                        rrule: z,
                        projectId: W,
                        cwds: J,
                        destination: K,
                        executionEnvironment: V,
                        localEnvironmentConfigPath: F,
                        model: G,
                        reasoningEffort: Z,
                        notificationPolicy: Q,
                        targetThreadId: X,
                        status: $
                    } = e,
                    Y = void 0 === O ? null : O,
                    ee = (0, s.y)(v.a),
                    et = (0, c.a)();
                (0, g.a)();
                let ea = (0, u.Z)("/local/:conversationId"),
                    en = (0, s.z)(h.e),
                    el = X ?? null;
                E[0] !== J || E[1] !== K || E[2] !== V || E[3] !== P || E[4] !== D || E[5] !== F || E[6] !== B || E[7] !== G || E[8] !== H || E[9] !== Q || E[10] !== W || E[11] !== q || E[12] !== Z || E[13] !== el || E[14] !== z || E[15] !== $ ? (t = JSON.stringify({
                    id: P,
                    kind: D,
                    mode: B,
                    name: H,
                    prompt: q,
                    rrule: z,
                    projectId: W,
                    cwds: J,
                    destination: K,
                    executionEnvironment: V,
                    localEnvironmentConfigPath: F,
                    model: G,
                    reasoningEffort: Z,
                    notificationPolicy: Q,
                    targetThreadId: el,
                    status: $
                }), E[0] = J, E[1] = K, E[2] = V, E[3] = P, E[4] = D, E[5] = F, E[6] = B, E[7] = G, E[8] = H, E[9] = Q, E[10] = W, E[11] = q, E[12] = Z, E[13] = el, E[14] = z, E[15] = $, E[16] = t) : t = E[16];
                let eo = t,
                    ei = en?.directiveKey === eo ? en.automationId : null,
                    es = ei ?? Y?.automationId ?? P,
                    er = Y?.snapshot ?? null,
                    ec = "view" === B ? B : null,
                    eu = "view" === B && null != P,
                    ed = null != P && (eu || "suggested-update" === B),
                    ep = (0, s.z)(d.g),
                    em = ep.data,
                    eh = !!ed && ep.isLoading;
                if (E[17] !== em || E[18] !== ei || E[19] !== J || E[20] !== P || E[21] !== et || E[22] !== eh || E[23] !== eu || E[24] !== D || E[25] !== B || E[26] !== H || E[27] !== W || E[28] !== q || E[29] !== es || E[30] !== el || E[31] !== Y?.automationId || E[32] !== Y?.mode || E[33] !== er?.name || E[34] !== er?.rrule || E[35] !== z || E[36] !== $) {
                    var eg;
                    let e, t, n, l, s, c, u, d, p, h, g = null != P ? em?.items.find(e => e.id === P) ?? null : null;
                    E[46] !== em?.items || E[47] !== ei || E[48] !== et || E[49] !== eh || E[50] !== eu || E[51] !== B || E[52] !== H || E[53] !== es || E[54] !== Y?.mode || E[55] !== er?.name || E[56] !== er?.rrule || E[57] !== z ? ({
                        resolvedName: w,
                        resolvedRrule: n,
                        isLoadingView: t
                    } = function(e) {
                        let {
                            isViewMode: t,
                            mode: a,
                            isSuggestionAccepted: n,
                            trimmedId: l,
                            trimmedName: o,
                            trimmedRrule: i,
                            automations: s,
                            isLoading: r
                        } = e, c = "delete" !== a && (n || "suggested-create" !== a && "suggested-update" !== a) && null != l && s ? s.find(e => e.id === l) ?? null : null, u = c?.name ?? o ?? null;
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
                        trimmedName: H ?? er?.name ?? null,
                        trimmedRrule: z ?? er?.rrule ?? null,
                        automations: em?.items ?? null,
                        isLoading: eh
                    }), l = et.formatMessage({
                        id: "settings.automations.rruleSummaryFallback",
                        defaultMessage: "Custom schedule"
                    }), s = (0, m.f)({
                        rrule: n,
                        intl: et,
                        fallbackMessage: l
                    }), E[46] = em?.items, E[47] = ei, E[48] = et, E[49] = eh, E[50] = eu, E[51] = B, E[52] = H, E[53] = es, E[54] = Y?.mode, E[55] = er?.name, E[56] = er?.rrule, E[57] = z, E[58] = t, E[59] = w, E[60] = n, E[61] = l, E[62] = s) : (t = E[58], w = E[59], n = E[60], l = E[61], s = E[62]);
                    let x = s;
                    E[63] !== et ? (c = et.formatMessage({
                        id: "settings.automations.loading",
                        defaultMessage: "Loading…"
                    }), E[63] = et, E[64] = c) : c = E[64];
                    let v = c;
                    E[65] !== et ? (u = et.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task"
                    }), E[65] = et, E[66] = u) : u = E[66];
                    let f = u;
                    E[67] !== B || E[68] !== Y?.mode ? (d = Y?.mode ?? B, E[67] = B, E[68] = Y?.mode, E[69] = d) : d = E[69], a = (y = "delete" === (b = d)) || Y?.automationId != null ? Y?.automationId ?? P ?? null : es, E[70] !== a || E[71] !== y ? (p = y ? (eg = a ?? null, 0 === (e = eg?.trim() ?? "").length ? null : /^[0-9a-f]{8}-[0-9a-f-]+$/i.test(e) ? e : i()(e.replace(/[-_]+/g, " "))) : null, E[70] = a, E[71] = y, E[72] = p) : p = E[72];
                    let M = p;
                    N = t ? v : w || M || f, E[73] !== M || E[74] !== et || E[75] !== w ? (h = w ?? M ?? et.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task"
                    }), E[73] = M, E[74] = et, E[75] = w, E[76] = h) : h = E[76], C = h, j = x || (t ? v : null != n ? l : null), o = null != H && null != q && null != z && ("heartbeat" === D ? null != el : void 0 !== W || null != J), k = null != P && null != $ && null != H && null != q && null != z && (null == g ? "heartbeat" === D ? null != el : void 0 !== W || null != J : !!(0, r.fi)(g) || void 0 !== W || null != J), E[17] = em, E[18] = ei, E[19] = J, E[20] = P, E[21] = et, E[22] = eh, E[23] = eu, E[24] = D, E[25] = B, E[26] = H, E[27] = W, E[28] = q, E[29] = es, E[30] = el, E[31] = Y?.automationId, E[32] = Y?.mode, E[33] = er?.name, E[34] = er?.rrule, E[35] = z, E[36] = $, E[37] = a, E[38] = o, E[39] = b, E[40] = y, E[41] = j, E[42] = w, E[43] = k, E[44] = C, E[45] = N
                } else a = E[37], o = E[38], b = E[39], y = E[40], j = E[41], w = E[42], k = E[43], C = E[44], N = E[45];
                let ex = k,
                    ev = "suggested-update" === B && ed && ep.isLoading,
                    ef = "suggested-create" === B || "suggested-update" === B,
                    eb = ef ? L : void 0,
                    ey = P ?? null,
                    ej = D ?? null,
                    ew = H ?? "",
                    ek = q ?? "",
                    eC = z ?? "";
                E[77] !== J ? (M = J ?? [], E[77] = J, E[78] = M) : M = E[78];
                let eN = void 0 !== W ? W : J?.[0] === r.gd ? null : J?.[0] ?? null,
                    eM = V ?? null,
                    eS = F ?? null,
                    eI = G ?? null,
                    eT = Z ?? null;
                E[79] !== Q ? (S = void 0 !== Q ? {
                    notificationPolicy: Q
                } : {}, E[79] = Q, E[80] = S) : S = E[80];
                let eR = $ ?? null;
                E[81] !== eo || E[82] !== ec || E[83] !== el || E[84] !== M || E[85] !== eN || E[86] !== eM || E[87] !== eS || E[88] !== eI || E[89] !== eT || E[90] !== S || E[91] !== eR || E[92] !== eb || E[93] !== ey || E[94] !== ej || E[95] !== ew || E[96] !== ek || E[97] !== eC ? (I = {
                    elicitation: eb,
                    directiveKey: eo,
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
                    reasoningEffort: eT,
                    ...S,
                    targetThreadId: el,
                    status: eR
                }, E[81] = eo, E[82] = ec, E[83] = el, E[84] = M, E[85] = eN, E[86] = eM, E[87] = eS, E[88] = eI, E[89] = eT, E[90] = S, E[91] = eR, E[92] = eb, E[93] = ey, E[94] = ej, E[95] = ew, E[96] = ek, E[97] = eC, E[98] = I) : I = E[98];
                let eA = I,
                    e_ = null != ei;
                E[99] !== o || E[100] !== ex || E[101] !== ec || E[102] !== eu || E[103] !== e_ ? (T = (0, h.D)({
                    directiveMode: ec,
                    canCreate: o,
                    canUpdate: ex,
                    isViewMode: eu,
                    forceOpen: e_
                }), E[99] = o, E[100] = ex, E[101] = ec, E[102] = eu, E[103] = e_, E[104] = T) : T = E[104];
                let eU = T,
                    eE = y ? null : j;
                E[105] !== eU || E[106] !== a || E[107] !== ei || E[108] !== eA || E[109] !== ev || E[110] !== ef || E[111] !== ea || E[112] !== ee || E[113] !== C ? (R = () => {
                    if (ev) return;
                    let e = a;
                    null != e ? x.c.dispatchHostMessage({
                        type: "navigate-to-route",
                        path: `/automations?automationId=${e}`
                    }) : "create" === eU && (ee.set(h.e, null), ee.set(h.f, eA), x.c.dispatchHostMessage({
                        type: "navigate-to-route",
                        path: "/automations?automationMode=create"
                    }))
                }, E[105] = eU, E[106] = a, E[107] = ei, E[108] = eA, E[109] = ev, E[110] = ef, E[111] = ea, E[112] = ee, E[113] = C, E[114] = R) : R = E[114];
                let eL = R,
                    eO = !y && !ev && (null != a || "create" === eU),
                    eP = Y?.deleteStatus;
                E[115] !== b || E[116] !== et || E[117] !== eP ? (A = function(e) {
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
                }), E[115] = b, E[116] = et, E[117] = eP, E[118] = A) : A = E[118];
                let eD = A;
                E[119] !== eD || E[120] !== w || E[121] !== eE ? (_ = [eD, w, eE].filter(f), E[119] = eD, E[120] = w, E[121] = eE, E[122] = _) : _ = E[122];
                let eB = _.join(" · "),
                    eH = eE ?? eD,
                    eq = eB || void 0;
                return E[123] !== eO || E[124] !== eL || E[125] !== eH || E[126] !== eq || E[127] !== N ? (U = (0, n.jsx)(p.a, {
                    title: N,
                    subtitle: eH,
                    ariaLabel: eq,
                    canOpen: eO,
                    onOpen: eL
                }), E[123] = eO, E[124] = eL, E[125] = eH, E[126] = eq, E[127] = N, E[128] = U) : U = E[128], U
            }
        })
    }),
    IN8o: (function(e, t, a) {
        var n = a("ABep"),
            l = a("QosV"),
            o = a("slpy"),
            i = a("on57"),
            s = a("BolX"),
            r = a("Wf1j"),
            c = a("oyxz"),
            u = a("wD9O"),
            d = a("HBzQ"),
            p = a("Sm6l"),
            m = a("bf6R"),
            h = a("wbOy"),
            g = a("tSEg"),
            x = a("nMdB"),
            v = a("FWVQ"),
            f = a("qZWE"),
            b = a("D3rZ");
        a.d(t, {}, {
            a: function(e) {
                let t, a, y, j, w, k, C, N, M, S, I = (0, l.c)(44),
                    {
                        mcpAppId: T,
                        name: R,
                        status: A,
                        disabled: _,
                        icon: U,
                        accessory: E,
                        className: L,
                        disclosure: O
                    } = e,
                    P = (0, s.y)(g.a),
                    D = (0, u.c)(),
                    B = (0, r.a)(),
                    H = (0, s.x)(_ ? null : f.q, T);
                I[0] !== B ? (t = B.formatMessage({
                    id: "codex.mcpTool.openAppInTab",
                    defaultMessage: "Open app in tab"
                }), I[0] = B, I[1] = t) : t = I[1];
                let q = t;
                I[2] !== H?.inline || I[3] !== O || I[4] !== T || I[5] !== P || I[6] !== A ? (a = O ?? ("closed" === A && H?.inline ? {
                    expanded: !1,
                    onToggle: () => (0, f.y)(P, T, "inline")
                } : void 0), I[2] = H?.inline, I[3] = O, I[4] = T, I[5] = P, I[6] = A, I[7] = a) : a = I[7];
                let z = a;
                if (null != O && ("open" === A || "closed" === A)) {
                    let e, t = null != R,
                        a = R ?? "";
                    if (I[8] !== O.expanded || I[9] !== B || I[10] !== t || I[11] !== a) {
                        let n = {
                            hasName: t,
                            name: a
                        };
                        e = O.expanded ? B.formatMessage({
                            id: "mcpApp.activity.hideInline",
                            defaultMessage: "{hasName, select, true {Hide {name}} other {Hide app}}"
                        }, n) : B.formatMessage({
                            id: "mcpApp.activity.showInline",
                            defaultMessage: "{hasName, select, true {Show {name}} other {Show app}}"
                        }, n), I[8] = O.expanded, I[9] = B, I[10] = t, I[11] = a, I[12] = e
                    } else e = I[12];
                    y = e
                }
                I[13] !== H?.tab || I[14] !== q || I[15] !== T || I[16] !== P ? (j = H?.tab ? (0, n.jsx)(o.a, {
                    content: q,
                    children: (0, n.jsx)(p.a, {
                        className: "relative",
                        "aria-label": q,
                        color: "ghost",
                        size: "icon",
                        onClick: () => (0, f.y)(P, T, "fullscreen"),
                        children: (0, n.jsx)(m.N, {})
                    })
                }) : null, I[13] = H?.tab, I[14] = q, I[15] = T, I[16] = P, I[17] = j) : j = I[17], I[18] !== E || I[19] !== j ? (w = (0, n.jsxs)(n.Fragment, {
                    children: [j, E]
                }), I[18] = E, I[19] = j, I[20] = w) : w = I[20], I[21] !== z || I[22] !== O?.accessibleLabel || I[23] !== O?.labelledBy || I[24] !== y || I[25] !== D ? (k = null == z ? void 0 : {
                    ...z,
                    accessibleLabel: O?.accessibleLabel ?? (O?.labelledBy == null ? y : void 0),
                    onToggle: e => {
                        (0, x.a)(e.currentTarget, D), z.onToggle(e)
                    }
                }, I[21] = z, I[22] = O?.accessibleLabel, I[23] = O?.labelledBy, I[24] = y, I[25] = D, I[26] = k) : k = I[26];
                let W = "opening" === A,
                    J = null != z && "group-hover/activity-header:[--agent-activity-summary-color:var(--color-text)]";
                return I[27] !== J ? (C = (0, i.b)("min-w-0 shrink truncate", b.a.summary, J), I[27] = J, I[28] = C) : C = I[28], I[29] !== y || I[30] !== B || I[31] !== R || I[32] !== A ? (N = y ?? (0, n.jsx)(c.a, {
                    id: "mcpApp.activity.status",
                    defaultMessage: "{status, select, opening {Opening {name}} open {Opened {name}} error {Couldn’t open {name}} other {Open {name}}}",
                    values: {
                        status: A,
                        name: R ?? B.formatMessage(v.c)
                    }
                }), I[29] = y, I[30] = B, I[31] = R, I[32] = A, I[33] = N) : N = I[33], I[34] !== W || I[35] !== C || I[36] !== N ? (M = (0, n.jsx)(h.a, {
                    active: W,
                    role: "status",
                    className: C,
                    children: N
                }), I[34] = W, I[35] = C, I[36] = N, I[37] = M) : M = I[37], I[38] !== L || I[39] !== U || I[40] !== M || I[41] !== w || I[42] !== k ? (S = (0, n.jsxs)(d.b, {
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
            l = a("Qgfj"),
            o = a("qZWE");
        let i = (0, l.e)({
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
                    isInlineRequested: l,
                    isInlineOpening: i,
                    hasError: s
                } = t, r = (0, n.x)(o.l, e), c = (0, n.x)(o.n, e), u = (0, n.x)(o.k, e), d = (0, n.x)(o.w, e), p = (0, n.x)(o.r, e);
                return void 0 !== s && s || null != p ? "error" : "closed" !== r ? r : a ? "opening" : (l ?? u) && "launcher" !== c ? d && !(void 0 !== i && i) ? "open" : "opening" : "closed"
            }
        })
    }),
    KLqe: (function(e, t, a) {
        var n = a("ABep"),
            l = a("QosV"),
            o = a("BolX"),
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
                let t, a, s, h, g, x, v, f, b = (0, l.c)(32),
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
                let T = s;
                b[13] !== T ? (h = null == T ? null : {
                    kind: "page",
                    id: T.page_id
                }, b[13] = T, b[14] = h) : h = b[14], b[15] !== k ? (g = {
                    enabled: k
                }, b[15] = k, b[16] = g) : g = b[16];
                let R = (0, o.x)(d.c, h, g);
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