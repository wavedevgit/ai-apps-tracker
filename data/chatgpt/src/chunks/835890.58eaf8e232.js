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
            l = a("QosV"),
            o = a("zd8w"),
            i = a("oyxz"),
            s = a("HOLv"),
            r = a("MyoZ"),
            c = a("Bw5z");
        a.d(t, {}, {
            a: function(e) {
                let t, a, u, d, p, m, h, v, x = (0, l.c)(32),
                    {
                        ref: g,
                        title: f,
                        subtitle: b,
                        icon: y,
                        ariaLabel: j,
                        canOpen: w,
                        onOpen: k,
                        openLabel: C,
                        actions: N
                    } = e,
                    M = (0, o.useId)(),
                    S = (0, o.useId)(),
                    I = N;
                if (null == N && w) {
                    let e, t;
                    x[0] !== C ? (e = C ?? (0, n.jsx)(i.a, {
                        id: "automation.updateDirective.open",
                        defaultMessage: "Open"
                    }), x[0] = C, x[1] = e) : e = x[1], x[2] !== e ? (t = (0, n.jsx)(r.g, {
                        label: e
                    }), x[2] = e, x[3] = t) : t = x[3], I = t
                }
                x[4] !== y ? (t = void 0 === y ? (0, n.jsx)(s.a, {
                    asset: c.a,
                    "aria-hidden": !0
                }) : y, x[4] = y, x[5] = t) : t = x[5], x[6] !== t ? (a = (0, n.jsx)(r.f, {
                    children: t
                }), x[6] = t, x[7] = a) : a = x[7], x[8] !== f || x[9] !== S ? (u = (0, n.jsx)("span", {
                    id: S,
                    children: f
                }), x[8] = f, x[9] = S, x[10] = u) : u = x[10], x[11] !== M || x[12] !== b ? (d = b ? (0, n.jsx)("span", {
                    id: M,
                    children: b
                }) : null, x[11] = M, x[12] = b, x[13] = d) : d = x[13], x[14] !== I ? (p = null != I ? (0, n.jsx)("span", {
                    className: "pointer-events-auto flex shrink-0 items-center gap-1",
                    children: I
                }) : null, x[14] = I, x[15] = p) : p = x[15], x[16] !== a || x[17] !== u || x[18] !== d || x[19] !== p ? (m = (0, n.jsx)(r.h, {
                    className: "pointer-events-none relative z-10",
                    icon: a,
                    title: u,
                    subtitle: d,
                    trailing: p
                }), x[16] = a, x[17] = u, x[18] = d, x[19] = p, x[20] = m) : m = x[20];
                let T = m,
                    R = null == j ? S : void 0,
                    A = b ? M : void 0,
                    _ = !w,
                    U = null == N ? T : null;
                x[21] !== j || x[22] !== k || x[23] !== g || x[24] !== U || x[25] !== R || x[26] !== A || x[27] !== _ ? (h = (0, n.jsx)(r.b, {
                    ref: g,
                    "aria-label": j,
                    "aria-labelledby": R,
                    "aria-describedby": A,
                    disabled: _,
                    onClick: k,
                    children: U
                }), x[21] = j, x[22] = k, x[23] = g, x[24] = U, x[25] = R, x[26] = A, x[27] = _, x[28] = h) : h = x[28];
                let L = null != N ? T : null;
                return x[29] !== h || x[30] !== L ? (v = (0, n.jsx)(r.a, {
                    as: "span",
                    className: "mt-3 select-none",
                    variant: "attachment",
                    children: (0, n.jsxs)("span", {
                        className: "group/resource-card relative",
                        "data-automation-card": !0,
                        children: [h, L]
                    })
                }), x[29] = h, x[30] = L, x[31] = v) : v = x[31], v
            }
        })
    }),
    ojna: (function(e, t, a) {
        var n = a("lAQI"),
            l = a("KJ1J"),
            o = a("kqQk"),
            i = a("acxW"),
            s = a("xSzB");
        let r = n.F({
            success: n.z(!0),
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
        var n = a("lAQI");
        let l = n.F({
            navigationSource: n.p(["scheduled_page", "notification", "conversation", "conversation_sidebar", "editor", "space_schedules_panel"])
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
            o = a("Q840"),
            i = a("Wf1j"),
            s = a("oyxz"),
            r = a("OusJ");
        a("fGpH");
        var c = a("Ro2M"),
            u = a("bN4H"),
            d = a("Bbed"),
            p = a("tSEg"),
            m = a("DuVB");
        (0, d.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(865959)]).then(a.bind(a, "n7q6"))).TeamAutomationCardActions), a.d(t, {}, {
            a: function(e) {
                let t, a, s, d, h, v, x, g = (0, l.c)(22),
                    {
                        automation: f
                    } = e,
                    b = (0, o.y)(p.a),
                    y = (0, i.a)(),
                    j = (0, o.x)(c.g, f.id);
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
                }), g[14] = w, g[15] = s, g[16] = d, g[17] = k, g[18] = h) : h = g[18], g[19] === Symbol.for("react.memo_cache_sentinel") ? (v = null, g[19] = v) : v = g[19], g[20] !== h ? (x = (0, n.jsxs)("div", {
                    className: "flex w-full min-w-0 flex-col gap-2 self-start",
                    children: [h, v]
                }), g[20] = h, g[21] = x) : x = g[21], x
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
            o = a("Q840"),
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
                let t, a, h, v = (0, n.c)(8),
                    {
                        conversationId: x
                    } = e,
                    g = (0, o.y)(d.a),
                    {
                        key: f,
                        state: b
                    } = (0, s.Z)();
                v[0] !== b ? (t = (0, c.a)(b), v[0] = b, v[1] = t) : t = v[1];
                let y = t;
                return v[2] !== x || v[3] !== f || v[4] !== g || v[5] !== y ? (a = () => {
                    if ("chatgpt-thread" !== g.value.routeKind) return;
                    let e = g.value.conversationId;
                    return g.watch(t => {
                        let a = t.get(p.j, x);
                        if (null == a || a !== t.get(p.j, e)) return;
                        let n = {
                            locationKey: f,
                            conversationId: a
                        };
                        g.get(m, n) || (g.set(m, n, !0), (0, u.a)(g, l.c, {
                            type: "CHATGPT_TASKS_EVENT_TYPE_CONVERSATION_WITH_TASK_VIEWED",
                            conversationId: a,
                            openSource: null == y ? void 0 : r.c[y],
                            openDestination: "CHATGPT_TASKS_OPEN_DESTINATION_CONVERSATION"
                        }))
                    })
                }, h = [x, f, g, y], v[2] = x, v[3] = f, v[4] = g, v[5] = y, v[6] = a, v[7] = h) : (a = v[6], h = v[7]), (0, i.useEffect)(a, h), null
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
            o = a("Q840"),
            i = a("zd8w"),
            s = a("oyxz"),
            r = a("Wf1j"),
            c = a("rEML"),
            u = a("Ro2M"),
            d = a("bN4H"),
            p = a("pnPL"),
            m = a("IY6Y"),
            h = a("tSEg"),
            v = a("cWHY"),
            x = a("VRzh"),
            g = a("DuVB");

        function f(e) {
            return (0, n.jsx)(b, {
                automation: e
            }, e.id)
        }
        let b = (0, i.memo)(function(e) {
            let t, a, i, s, c, m, v, x = (0, l.c)(19),
                {
                    automation: f
                } = e,
                b = (0, o.y)(h.a),
                y = (0, r.a)(),
                j = (0, o.x)(u.g, f.id);
            x[0] !== f || x[1] !== j || x[2] !== y ? (t = (0, g.a)(f, j, y), x[0] = f, x[1] = j, x[2] = y, x[3] = t) : t = x[3];
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
            }), x[15] = m) : m = x[15], x[16] !== a || x[17] !== c ? (v = (0, n.jsx)("li", {
                className: "border-b border-subtle",
                "data-automation-card": !0,
                children: (0, n.jsxs)("button", {
                    type: "button",
                    className: "flex w-full min-w-0 cursor-interaction items-center justify-between gap-4 py-3 text-start hover:text-default",
                    onClick: a,
                    children: [c, m]
                })
            }), x[16] = a, x[17] = c, x[18] = v) : v = x[18], v
        });
        a.d(t, {}, {
            a: function(e) {
                let t, a, i, r, d, p, h, g, b, y, j = (0, l.c)(22),
                    {
                        automations: w,
                        conversationId: k
                    } = e,
                    C = (0, c.ab)(),
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
                        children: (0, n.jsx)(v.a, {
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
    MAIj: (function(e, t, a) {
        var n = a("Q840"),
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
            o = a("Q840"),
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
                        refetch: v
                    } = (0, o.x)(r.a, a);
                if (null != m) {
                    let e;
                    return d[4] !== t || d[5] !== m ? (e = t?.(m) ?? null, d[4] = t, d[5] = m, d[6] = e) : e = d[6], e
                }
                return p ? null : (d[7] !== v ? (s = () => void v(), d[7] = v, d[8] = s) : s = d[8], d[9] !== h || d[10] !== s ? (u = (0, n.jsx)(c, {
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
            o = a("Q840"),
            i = a("UKCO"),
            s = a("sM3V"),
            r = a("KJ1J"),
            c = a("HUHI"),
            u = a("rO8L"),
            d = a("NJrC"),
            p = a("W10I"),
            m = a("EEop"),
            h = a("cLdu"),
            v = a("ueue"),
            x = a("whdX"),
            g = a("tSEg"),
            f = a("KU8M"),
            b = a("LF5P"),
            y = a("MdwM"),
            j = a("Hkqr"),
            w = a("acxW");
        a.d(t, {}, {
            a: function(e) {
                let t, a, l, c, u, d, m, h, v, x, g = (0, n.c)(50),
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
                    T = b.result?.type !== "success" || I ? null : b.result.raw,
                    R = T ?? k?.toolResult ?? null;
                g[4] !== j || g[5] !== y ? (l = {
                    hostId: y,
                    conversationId: j
                }, g[4] = j, g[5] = y, g[6] = l) : l = g[6];
                let A = (0, o.x)(s.b, l);
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
                let U = (0, o.x)(f.a, _, u);
                g[16] !== U.data || g[17] !== b.invocation.server || g[18] !== b.invocation.tool || g[19] !== b.invocationResourceUri ? (d = (0, p.c)({
                    invocationResourceUri: b.invocationResourceUri,
                    mcpServerStatuses: U.data,
                    server: b.invocation.server,
                    tool: b.invocation.tool
                })?.resourceUri, g[16] = U.data, g[17] = b.invocation.server, g[18] = b.invocation.tool, g[19] = b.invocationResourceUri, g[20] = d) : d = g[20];
                let L = d;
                g[21] !== U.isPending || g[22] !== j || g[23] !== L || g[24] !== R?._meta || g[25] !== k?.resourceUri || g[26] !== b.appContext?.resourceUri || g[27] !== b.mcpAppResourceUri ? (m = j.startsWith("chatgpt:") ? L : b.appContext?.resourceUri ?? L ?? (U.isPending ? k?.resourceUri : void 0) ?? (0, i.Ng)(R?._meta) ?? b.mcpAppResourceUri, g[21] = U.isPending, g[22] = j, g[23] = L, g[24] = R?._meta, g[25] = k?.resourceUri, g[26] = b.appContext?.resourceUri, g[27] = b.mcpAppResourceUri, g[28] = m) : m = g[28];
                let O = m,
                    E = null != O && U.isPending && b.appContext?.resourceUri == null && null == L && k?.resourceUri == null,
                    P = (0, o.x)(M && t ? f.b : null, _);
                I ? h = "error" : b.completed && null == b.result && null == R && (h = "cancelled");
                let D = O ?? k?.resourceUri ?? null,
                    z = t && null != b.appContext ? b.callId : null,
                    H = h;
                return g[29] !== U.data || g[30] !== b.appContext || g[31] !== b.invocation.server || g[32] !== b.invocation.tool || g[33] !== b.invocationResourceUri ? (v = (0, p.b)({
                    appContext: b.appContext,
                    invocationResourceUri: b.invocationResourceUri,
                    mcpServerStatuses: U.data,
                    server: b.invocation.server,
                    tool: b.invocation.tool
                }), g[29] = U.data, g[30] = b.appContext, g[31] = b.invocation.server, g[32] = b.invocation.tool, g[33] = b.invocationResourceUri, g[34] = v) : v = g[34], g[35] !== U || g[36] !== j || g[37] !== R || g[38] !== y || g[39] !== t || g[40] !== E || g[41] !== b || g[42] !== T || g[43] !== z || g[44] !== v || g[45] !== D || g[46] !== I || g[47] !== h || g[48] !== P ? (x = {
                    item: b,
                    hostId: y,
                    conversationId: j,
                    catalog: U,
                    resourceUri: D,
                    isResourceUriPending: E,
                    toolScope: P,
                    isCodexAppsToolCall: t,
                    originCallId: z,
                    successfulToolResult: T,
                    displayedSuccessfulToolResult: R,
                    toolCallFailed: I,
                    toolCallStatus: H,
                    toolDefinition: v
                }, g[35] = U, g[36] = j, g[37] = R, g[38] = y, g[39] = t, g[40] = E, g[41] = b, g[42] = T, g[43] = z, g[44] = v, g[45] = D, g[46] = I, g[47] = h, g[48] = P, g[49] = x) : x = g[49], x
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
                        toolScope: v,
                        originCallId: g
                    } = e,
                    f = v?.connectorId ?? null,
                    b = v?.kind === "target" ? v : null,
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
                let w = (0, x.f)(a),
                    k = h ? void 0 : w.data;
                s[11] !== k ? (l = (0, d.c)(k), s[11] = k, s[12] = l) : l = s[12];
                let C = l,
                    {
                        error: N,
                        isPending: M,
                        isFetching: S
                    } = h || e.isCodexAppsToolCall && null == v ? p : w;
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
                    L = (0, o.y)(g.a);
                S[0] !== R || S[1] !== U || S[2] !== I ? (t = U && null == R && (0, b.g)(I), S[0] = R, S[1] = U, S[2] = I, S[3] = t) : t = S[3], S[4] !== T || S[5] !== t ? (a = {
                    enabled: t,
                    hostId: T
                }, S[4] = T, S[5] = t, S[6] = a) : a = S[6];
                let {
                    data: O
                } = (0, c.m)(a);
                S[7] !== R || S[8] !== O || S[9] !== I.appContext || S[10] !== I.functionName || S[11] !== I.invocation.server || S[12] !== I.invocation.tool ? (i = R ?? (null == O ? null : (0, j.b)({
                    appContext: I.appContext,
                    apps: O,
                    functionName: I.functionName,
                    serverName: I.invocation.server,
                    toolName: I.invocation.tool
                })), S[7] = R, S[8] = O, S[9] = I.appContext, S[10] = I.functionName, S[11] = I.invocation.server, S[12] = I.invocation.tool, S[13] = i) : i = S[13];
                let E = i;
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
                let z = x,
                    H = P && null != D && null != I.pluginId && null == z;
                S[27] !== T || S[28] !== I.pluginId || S[29] !== L.query || S[30] !== H ? (f = L.query.getOptions(m.l, (0, m.a)({
                    hostId: T,
                    pluginId: H ? I.pluginId ?? null : null
                })), S[27] = T, S[28] = I.pluginId, S[29] = L.query, S[30] = H, S[31] = f) : f = S[31];
                let W = f,
                    Q = H && W.enabled,
                    B = _ ?? W.retryOnMount;
                S[32] !== W || S[33] !== Q || S[34] !== B ? (w = {
                    ...W,
                    enabled: Q,
                    retry: !1,
                    retryOnMount: B
                }, S[32] = W, S[33] = Q, S[34] = B, S[35] = w) : w = S[35];
                let {
                    data: q
                } = (0, l.a)(w);
                S[36] !== q ? (k = null == q ? null : (0, v.c)(q), S[36] = q, S[37] = k) : k = S[37];
                let J = k,
                    F = z ?? J,
                    K = J?.plugin.id ?? z?.plugin.id ?? I.pluginId;
                return S[38] !== D || S[39] !== J || S[40] !== H ? (C = H && null != J ? [J] : D ?? [], S[38] = D, S[39] = J, S[40] = H, S[41] = C) : C = S[41], S[42] !== I.invocation.server || S[43] !== K || S[44] !== C ? (N = (0, y.a)({
                    pluginId: K,
                    plugins: C,
                    serverName: I.invocation.server
                }), S[42] = I.invocation.server, S[43] = K, S[44] = C, S[45] = N) : N = S[45], S[46] !== E || S[47] !== F || S[48] !== N ? (M = {
                    matchingApp: E,
                    plugin: F,
                    pluginIcon: N
                }, S[46] = E, S[47] = F, S[48] = N, S[49] = M) : M = S[49], M
            }
        })
    }),
    o1Ns: (function(e, t, a) {
        var n = a("SZCv"),
            l = a.n(n),
            o = a("Q840"),
            i = a("UKCO"),
            s = a("KJ1J"),
            r = a("Sgjw"),
            c = a("ojna"),
            u = a("qZWE"),
            d = a("tSEg"),
            p = a("acxW");
        let m = (0, o.d)(d.a, (e, t) => {
            let {
                get: a
            } = t;
            return new Map(e.map(e => {
                let t = (0, i.ef)(e),
                    n = a(u.h, t);
                return [e, {
                    sourceId: a(u.u, t),
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
                } = e, l = !(0, c.b)(t.invocation) && !(0, r.b)(t.invocation, a) && !0 !== t.isMcpAppWidgetSuperseded && (n?.sourceId == null || n.sourceId === (0, i.ef)(t.callId));
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
            i = a("m4xB"),
            s = a("on57"),
            r = a("iodE"),
            c = a("AQaI"),
            u = a.n(c),
            d = a("Q840"),
            p = a("UKCO"),
            m = a("OZum"),
            h = a("zd8w"),
            v = a("Wf1j"),
            x = a("oyxz"),
            g = a("vdpW"),
            f = a("mnR8"),
            b = a("Sgjw"),
            y = a("ojna"),
            j = a("USdi"),
            w = a("khkh"),
            k = a("SHXB"),
            C = a("bPZ9"),
            N = a("OOaz"),
            M = a("Zm2g"),
            S = a("FvYa"),
            I = a("A7Ss"),
            T = a("Sm6l"),
            R = a("la9L"),
            A = a("rmk3"),
            _ = a("JNtf"),
            U = a("mUDD"),
            L = a("KxMp"),
            O = a("HOLv"),
            E = a("pDbL"),
            P = a("RNul"),
            D = a("Wdu7"),
            z = a("wwME"),
            H = a("ZyN8"),
            W = a("YeQK"),
            Q = a("qYBv"),
            B = a("oKu4"),
            q = a("FWVQ"),
            J = a("IN8o"),
            F = a("HwRo"),
            K = a("C3P5"),
            V = a("aENG"),
            G = a("Cv9y"),
            Z = a("XxcM"),
            Y = a("EAcR"),
            $ = a("NJrC"),
            X = a("EDsV"),
            ee = a("geS6"),
            et = a("qwxA"),
            ea = a("qZWE"),
            en = a("KLqe"),
            el = a("Sd8U"),
            eo = a("tSEg"),
            ei = a("hZax"),
            es = a("WFY2"),
            er = a("S7UD"),
            ec = a("MFk9"),
            eu = a("K5Kt"),
            ed = a("HBzQ"),
            ep = a("JGoU"),
            em = a("cKhh"),
            eh = a("kRUe"),
            ev = a("GmdE"),
            ex = a("t7eZ"),
            eg = a("LF5P"),
            ef = a("ZiDw"),
            eb = a("ltPT"),
            ey = a("SfaR"),
            ej = a("DYB3"),
            ew = a("MAIj"),
            ek = a("mRLe"),
            eC = a("fXpx"),
            eN = a("LkKu"),
            eM = a("z0Na"),
            eS = a("o62A"),
            eI = a("o1Ns"),
            eT = a("alO6"),
            eR = a("acxW"),
            eA = a("wbOy"),
            e_ = a("m0Ld"),
            eU = a("w4SA"),
            eL = a("JQPB"),
            eO = a("jD7W");

        function eE(e) {
            return "text" !== e.type
        }

        function eP(e) {
            let t, a, o, i, s, r, c, u, d, p, h = (0, l.c)(35),
                {
                    call: v,
                    fallbackPageUrl: g,
                    loadRemoteLogos: f
                } = e,
                b = null == v.sourceHostname ? g : `https://${v.sourceHostname}`,
                y = "invokeTool" === v.kind ? v.inputJson : void 0,
                j = "invokeTool" === v.kind && !0 === v.inputTruncated;
            h[0] !== f || h[1] !== b ? (t = null == b ? (0, n.jsx)(O.a, {
                className: "shrink-0 text-text/60",
                asset: eO.a
            }) : (0, n.jsx)(L.a, {
                className: "icon-xs shrink-0 text-text/60",
                href: b,
                loadRemote: f
            }), h[0] = f, h[1] = b, h[2] = t) : t = h[2], h[3] !== v.name || h[4] !== v.title ? (a = v.title ?? (0, m.a)(v.name, {
                style: "sentence"
            }), h[3] = v.name, h[4] = v.title, h[5] = a) : a = h[5], h[6] !== v.kind || h[7] !== a ? (o = (0, n.jsx)(x.a, {
                id: "codex.mcpTool.webMcpActivity.completed",
                defaultMessage: "{kind, select, listTools {Listed website tools} other {{toolName}}}",
                values: {
                    kind: v.kind,
                    toolName: a
                }
            }), h[6] = v.kind, h[7] = a, h[8] = o) : o = h[8], h[9] !== y || h[10] !== j ? (i = null == y || j ? y : function(e) {
                try {
                    return JSON.parse(e)
                } catch {
                    return e
                }
            }(y), h[9] = y, h[10] = j, h[11] = i) : i = h[11];
            let w = !!j || void 0;
            h[12] !== v.description || h[13] !== v.name || h[14] !== v.readOnlyHint || h[15] !== v.sourceHostname || h[16] !== v.title || h[17] !== i || h[18] !== w ? (s = eD({
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
            }), h[20] = k, h[21] = r) : r = h[21], h[22] !== s || h[23] !== r ? (c = (0, n.jsx)(R.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: s,
                language: "json",
                showStickyRightContent: !1,
                title: r
            }), h[22] = s, h[23] = r, h[24] = c) : c = h[24], h[25] !== v.outputJson || h[26] !== v.outputTruncated ? (u = null == v.outputJson ? null : (0, n.jsx)(R.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: v.outputTruncated ? v.outputJson : function(e) {
                    try {
                        return eD(JSON.parse(e), 2)
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
            }), h[28] = u, h[29] = c, h[30] = d) : d = h[30], h[31] !== t || h[32] !== d || h[33] !== o ? (p = (0, n.jsx)(em.a, {
                icon: t,
                status: "completed",
                summary: o,
                children: d
            }), h[31] = t, h[32] = d, h[33] = o, h[34] = p) : p = h[34], p
        }

        function eD(e, t) {
            try {
                return JSON.stringify(e, null, t) ?? "null"
            } catch {
                return es.a.debug("Failed to stringify MCP tool call payload", {
                    safe: {
                        value: e
                    },
                    sensitive: {}
                }), ""
            }
        }

        function ez(e) {
            let t = (0, l.c)(73),
                {
                    block: a,
                    conversationId: o,
                    hostId: i
                } = e,
                r = (0, d.y)(el.a),
                c = (0, v.a)();
            switch (a.type) {
                case "image": {
                    let e, l, s, u, d, p, m;
                    t[0] !== a.annotations || t[1] !== c ? (e = eW(a.annotations, c), t[0] = a.annotations, t[1] = c, t[2] = e) : e = t[2];
                    let h = e,
                        v = `data:${a.mimeType};base64,${a.data}`;
                    t[3] !== c ? (l = c.formatMessage({
                        id: "codex.mcpTool.contentBlock.imageAlt",
                        defaultMessage: "Image returned by tool"
                    }), t[3] = c, t[4] = l) : l = t[4];
                    let x = l;
                    t[5] !== o || t[6] !== i || t[7] !== x || t[8] !== v || t[9] !== c || t[10] !== r ? (s = () => (0, W.getGeneratedImageContextMenuItems)(r, {
                        chatGptConversationId: o.startsWith("chatgpt:") ? (0, N.d)(o.slice(8)) : void 0,
                        displaySrc: v,
                        hostId: i,
                        image: {
                            kind: "generic",
                            src: v,
                            alt: x
                        },
                        intl: c
                    }), t[5] = o, t[6] = i, t[7] = x, t[8] = v, t[9] = c, t[10] = r, t[11] = s) : s = t[11], t[12] !== x || t[13] !== v ? (u = (0, n.jsx)("img", {
                        className: "max-h-48 w-max max-w-full gap-0.5 rounded-md object-contain",
                        alt: x,
                        src: v
                    }), t[12] = x, t[13] = v, t[14] = u) : u = t[14], t[15] !== s || t[16] !== u ? (d = (0, n.jsx)(A.a, {
                        getItems: s,
                        children: u
                    }), t[15] = s, t[16] = u, t[17] = d) : d = t[17];
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
                    let e, l, o, i;
                    t[23] !== a.annotations || t[24] !== c ? (e = eW(a.annotations, c), t[23] = a.annotations, t[24] = c, t[25] = e) : e = t[25];
                    let s = e;
                    return t[26] !== a.data || t[27] !== a.mimeType ? (l = (0, n.jsx)(eH, {
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
                    t[34] !== a.annotations || t[35] !== c ? (e = eW(a.annotations, c), t[34] = a.annotations, t[35] = c, t[36] = e) : e = t[36];
                    let s = e,
                        r = a.title ?? a.name ?? a.uri;
                    return t[37] !== r ? (l = (0, n.jsx)("div", {
                        className: "break-words text-codex-description/80",
                        children: (0, n.jsx)(x.a, {
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
                    t[44] !== a.resource.annotations ? (e = eQ(a.resource.annotations), t[44] = a.resource.annotations, t[45] = e) : e = t[45];
                    let p = e;
                    return t[46] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsx)("span", {
                        className: "font-medium text-default",
                        children: (0, n.jsx)(x.a, {
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
                    }) : null, t[53] = d, t[54] = u, t[55] = r) : r = t[55], t[56] !== o || t[57] !== i || t[58] !== s || t[59] !== r ? (c = (0, n.jsxs)("div", {
                        className: "flex flex-col gap-0.5 text-size-chat text-codex-description/80",
                        children: [o, i, s, r]
                    }), t[56] = o, t[57] = i, t[58] = s, t[59] = r, t[60] = c) : c = t[60], c
                }
                case "unknown": {
                    let e, l, o;
                    return t[61] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.b)("[&_*]:text-text/50", "bg-primary-soft text-codex-description/80 max-h-48 overflow-auto whitespace-pre-wrap rounded-md px-3 py-2 text-size-chat"), t[61] = e) : e = t[61], t[62] !== a.raw ? (l = eD(a.raw, 2), t[62] = a.raw, t[63] = l) : l = t[63], t[64] !== l ? (o = (0, n.jsx)("pre", {
                        className: e,
                        children: l
                    }), t[64] = l, t[65] = o) : o = t[65], o
                }
                case "text": {
                    let e, l, o;
                    t[66] !== a.annotations || t[67] !== a.text || t[68] !== c ? (e = [a.text, eW(a.annotations, c)].filter(e => null != e).join("\n"), t[66] = a.annotations, t[67] = a.text, t[68] = c, t[69] = e) : e = t[69];
                    let i = e;
                    return t[70] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsx)(x.a, {
                        id: "codex.mcpTool.textBlock.plaintextTitle",
                        defaultMessage: "plaintext"
                    }), t[70] = l) : l = t[70], t[71] !== i ? (o = (0, n.jsx)(R.CodeSnippet, {
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

        function eH(e) {
            let t, a, o, i, s = (0, l.c)(12),
                {
                    data: c,
                    mimeType: u
                } = e,
                d = (0, r.a)();
            s[0] !== c || s[1] !== u ? (t = {
                data: c,
                mimeType: u
            }, s[0] = c, s[1] = u, s[2] = t) : t = s[2];
            let p = t,
                [m, v] = (0, h.useState)(null);
            s[3] !== p ? (a = () => v(p), s[3] = p, s[4] = a) : a = s[4];
            let g = a;
            if (!d) return null;
            if (m?.data === c && m.mimeType === u) {
                let e;
                return s[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(x.a, {
                    id: "codex.mcpTool.contentBlock.audioUnavailable",
                    defaultMessage: "Audio unavailable"
                }), s[5] = e) : e = s[5], e
            }
            return s[6] !== g || s[7] !== p ? (o = e => {
                if (null != e) return (0, er.d)(e, p, g)
            }, s[6] = g, s[7] = p, s[8] = o) : o = s[8], s[9] !== g || s[10] !== o ? (i = (0, n.jsx)("audio", {
                ref: o,
                className: "w-full gap-0.5",
                controls: !0,
                onError: g,
                preload: "metadata"
            }), s[9] = g, s[10] = o, s[11] = i) : i = s[11], i
        }

        function eW(e, t) {
            let a = eQ(e);
            return null == a ? null : t.formatMessage({
                id: "codex.mcpTool.contentBlock.annotationsLine",
                defaultMessage: "Annotations: {annotations}"
            }, {
                annotations: a
            })
        }

        function eQ(e) {
            if (null == e) return null;
            let t = [];
            return (null != e.audience && e.audience.length > 0 && t.push(`audience=${e.audience.join(", ")}`), null != e.priority && t.push(`priority=${String(e.priority)}`), null != e.lastModified && t.push(`lastModified=${e.lastModified}`), 0 === t.length) ? null : t.join("; ")
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, r, c, N, A, W, el, es, er, em, eO, eH, eW, eQ, eB, eq, eJ, eF, eK, eV, eG, eZ, eY, e$, eX, e1, e0, e2, e3, e4, e5, e8, e6, e7, e9, te, tt, ta, tn, tl, to, ti, ts, tr, tc, tu, td = (0, l.c)(263),
                    {
                        item: tp,
                        conversationId: tm,
                        expandedContentOnly: th,
                        hideTextBlocksWithStructuredContent: tv,
                        hostId: tx,
                        loadRemoteLogos: tg,
                        appInfoOverride: tf,
                        onExpand: tb,
                        onOpenPermissions: ty,
                        responseBodyId: tj,
                        renderMcpApps: tw,
                        shouldAutoExpandMcpApp: tk,
                        summary: tC,
                        summaryIcon: tN,
                        toolActivityTurnKey: tM
                    } = e,
                    tS = void 0 !== th && th,
                    tI = void 0 !== tv && tv,
                    tT = void 0 === tg || tg,
                    tR = void 0 === tw || tw,
                    tA = void 0 === tC ? null : tC,
                    t_ = (0, d.y)(eo.a),
                    [tU, tL] = (0, h.useState)(!1);
                td[0] !== tx || td[1] !== tp ? (t = (0, eN.b)(tp, tx), td[0] = tx, td[1] = tp, td[2] = t) : t = td[2], td[3] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                    enabled: !1
                }, td[3] = a) : a = td[3];
                let tO = (0, d.x)(eN.a, t, a);
                td[4] !== tO || td[5] !== tp ? (r = null == tO ? tp : {
                    ...tp,
                    result: tO,
                    deferredOutputTurnId: void 0
                }, td[4] = tO, td[5] = tp, td[6] = r) : r = td[6];
                let tE = r;
                td[7] !== tf || td[8] !== tx || td[9] !== tE ? (c = {
                    item: tE,
                    hostId: tx,
                    appInfoOverride: tf
                }, td[7] = tf, td[8] = tx, td[9] = tE, td[10] = c) : c = td[10];
                let {
                    matchingApp: tP,
                    pluginIcon: tD
                } = (0, eM.c)(c), tz = (0, v.a)(), {
                    platform: tH
                } = (0, z.a)();
                td[11] !== tE.callId ? (N = (0, p.ef)(tE.callId), td[11] = tE.callId, td[12] = N) : N = td[12];
                let tW = N,
                    tQ = (0, d.x)(ea.u, tW),
                    tB = (0, d.x)(ea.h, tW),
                    tq = (0, d.x)(ea.p, tW),
                    tJ = tB?.content.toolCallStatus == null && tB?.content.toolResult != null;
                td[13] !== tx || td[14] !== tE || td[15] !== tQ || td[16] !== tJ ? (A = (0, eI.a)({
                    item: tE,
                    hostId: tx,
                    retainedState: {
                        sourceId: tQ,
                        hasSuccessfulToolResult: tJ
                    }
                }), td[13] = tx, td[14] = tE, td[15] = tQ, td[16] = tJ, td[17] = A) : A = td[17];
                let tF = A;
                td[18] !== tF || td[19] !== tR ? (W = tR && (0, F.c)() && tF.isEligible, td[18] = tF, td[19] = tR, td[20] = W) : W = td[20];
                let tK = W;
                td[21] !== tm || td[22] !== tE.callId ? (el = (0, K.a)({
                    callId: tE.callId,
                    conversationId: tm
                }), td[21] = tm, td[22] = tE.callId, td[23] = el) : el = td[23];
                let tV = el,
                    tG = (0, d.x)(K.b, tV);
                (0, ei.f)("2957382457");
                let tZ = (0, d.z)(w.a);
                td[24] !== tm || td[25] !== tK ? (es = tK || !tm.startsWith("chatgpt:"), td[24] = tm, td[25] = tK, td[26] = es) : es = td[26], td[27] !== tm || td[28] !== tx || td[29] !== tE || td[30] !== tq || td[31] !== tK || td[32] !== es ? (er = {
                    item: tE,
                    hostId: tx,
                    conversationId: tm,
                    fallback: tq,
                    enabled: tK,
                    catalogEnabled: es
                }, td[27] = tm, td[28] = tx, td[29] = tE, td[30] = tq, td[31] = tK, td[32] = es, td[33] = er) : er = td[33];
                let tY = (0, eM.a)(er),
                    {
                        isCodexAppsToolCall: t$,
                        successfulToolResult: tX,
                        resourceUri: t1,
                        toolDefinition: t0
                    } = tY,
                    {
                        elementHeightPx: t2,
                        elementRef: t3
                    } = (0, eb.a)(),
                    t4 = tE.result?.type === "success" ? tE.result.content : null,
                    t5 = tE.result?.type === "error" ? tE.result.error : null;
                td[34] !== tE || td[35] !== tH ? (em = (0, eg.d)({
                    item: tE,
                    platform: tH
                }), td[34] = tE, td[35] = tH, td[36] = em) : em = td[36];
                let t8 = em,
                    t6 = t8?.nativeAppReference ?? null,
                    t7 = (0, ew.b)(t6),
                    t9 = t7?.appPath ?? null;
                td[37] !== t9 ? (eO = {
                    appPath: t9
                }, td[37] = t9, td[38] = eO) : eO = td[38];
                let {
                    iconSmall: ae
                } = (0, M.a)(eO);
                td[39] !== tE || td[40] !== tP || td[41] !== tN ? (eH = void 0 === tN ? (0, ej.d)(tE, null == tP ? [] : [tP])?.icon : tN, td[39] = tE, td[40] = tP, td[41] = tN, td[42] = eH) : eH = td[42];
                let at = eH;
                if (void 0 === tN && null != at) {
                    let e, t;
                    td[43] !== tP ? (e = null == tP ? [] : [tP], td[43] = tP, td[44] = e) : e = td[44], td[45] !== at || td[46] !== tE || td[47] !== tT || td[48] !== e ? (t = (0, n.jsx)(en.a, {
                        item: tE,
                        apps: e,
                        part: "icon",
                        loadMetadata: tT,
                        children: at
                    }), td[45] = at, td[46] = tE, td[47] = tT, td[48] = e, td[49] = t) : t = td[49], at = t
                }
                let aa = tE.source?.kind === "browserUse" && "cdp" === tE.source.backend ? E.b : i.a;
                td[50] !== tE.source?.kind || td[51] !== tX ? (eW = tE.source?.kind === "browserUse" && null != tX ? (0, j.a)(tX._meta) : null, td[50] = tE.source?.kind, td[51] = tX, td[52] = eW) : eW = td[52];
                let an = eW,
                    al = tZ && !tS && tE.completed && (0, p.wi)(tE.invocation.server) && "js" === tE.invocation.tool && null != tX ? (0, ey.a)(tX._meta) : [],
                    ao = tP ?? null;
                td[53] !== tz || td[54] !== tE.appContext || td[55] !== tE.completed || td[56] !== tE.invocation.arguments || td[57] !== tE.invocation.server || td[58] !== tE.invocation.tool || td[59] !== tE.nodeReplActivityTitle || td[60] !== tE.pluginId || td[61] !== tE.result || td[62] !== tE.source || td[63] !== tE.toolDisplay || td[64] !== t7 || td[65] !== tH || td[66] !== ao || td[67] !== t0 ? (eQ = (0, eT.b)({
                    pluginId: tE.pluginId,
                    toolDisplay: tE.toolDisplay,
                    toolDefinition: t0,
                    appContext: tE.appContext,
                    completed: tE.completed,
                    intl: tz,
                    toolName: tE.invocation.tool,
                    serverName: tE.invocation.server,
                    matchingApp: ao,
                    nativeDesktopAppMetadata: t7,
                    platform: tH,
                    source: tE.source,
                    nodeReplActivityTitle: tE.nodeReplActivityTitle,
                    toolArguments: tE.invocation.arguments,
                    toolResult: tE.result
                }), td[53] = tz, td[54] = tE.appContext, td[55] = tE.completed, td[56] = tE.invocation.arguments, td[57] = tE.invocation.server, td[58] = tE.invocation.tool, td[59] = tE.nodeReplActivityTitle, td[60] = tE.pluginId, td[61] = tE.result, td[62] = tE.source, td[63] = tE.toolDisplay, td[64] = t7, td[65] = tH, td[66] = ao, td[67] = t0, td[68] = eQ) : eQ = td[68];
                let {
                    label: ai,
                    readsPlainText: as
                } = eQ, ar = tK && null != t1 && tF.isRenderable, ac = (0, d.x)(null != tj && ar ? ea.j : null, tW), {
                    access: au,
                    resource: ad,
                    renderData: ap,
                    state: am,
                    refetch: ah
                } = (0, eM.b)(tY, ar), av = tB?.sessionId == null ? null : tB.content.resource, ax = null == av ? ad?.resourceIdentityVerified : tB?.content.mcpAppScope.resourceIdentityVerified, ag = null == av ? am.error : null, af = ar && null == av && am.isLoading, ab = (0, d.x)(ea.r, tW), ay = (0, d.x)(ea.n, tW), aj = (0, $.a)({
                    hasResourceError: null != ag,
                    isResourceLoading: af,
                    isDilEnabled: !1,
                    renderData: av ?? ap,
                    resourceUri: t1 ?? null,
                    shouldRenderMcpApp: ar
                }), aw = "html" === aj.kind ? aj.renderData : null, ak = (0, X.e)({
                    data: aw,
                    error: ag,
                    isLoading: af
                }, ea.H), aC = "fallback" !== aj.kind, aN = tK && null != t1 && (!aC || null != ag || null != ab && !(ab instanceof X.b) || "too-large" === ak.kind || "error" === ak.kind), aM = aN || (aw?.isCollapsible ?? !0), aS = ay;
                aN ? aS = "fallback" : "html" !== aj.kind && (aS = aj.kind);
                let aI = "pending" === aS,
                    aT = "launcher" === aS,
                    aR = aI || aT;
                td[69] !== tB ? (eB = null != tB && tB.content.resource?.hideAttribution === !0 && (!0 === tB.content.mcpAppScope.isVerifiedFirstParty || (0, eS.b)(tB.content)), td[69] = tB, td[70] = eB) : eB = td[70];
                let aA = eB,
                    a_ = "inline" === aS,
                    aU = void 0 !== tk && tk && ar,
                    aL = !aN && tU || aU,
                    aO = aC && !aT && (!aM || (tG ?? aL)),
                    aE = aO && !aI,
                    aP = a_ && aE,
                    aD = tU || (tG ?? aU),
                    [az, aH] = (0, h.useState)(!1),
                    aW = aP && az,
                    aQ = af || aI && aO;
                td[71] !== aO || td[72] !== aW || td[73] !== aQ ? (eq = {
                    isLoading: aQ,
                    isInlineRequested: aO,
                    isInlineOpening: aW
                }, td[71] = aO, td[72] = aW, td[73] = aQ, td[74] = eq) : eq = td[74];
                let aB = (0, q.d)(tW, eq),
                    aq = !aN && (aI || "html" === aj.kind) ? aB : null;
                td[75] !== t0 ? (eJ = (0, ee.b)(t0)?.resourceUri, td[75] = t0, td[76] = eJ) : eJ = td[76];
                let aJ = eJ,
                    aF = tX?._meta;
                td[77] !== aF ? (eF = u()(aF, ["_codex_apps", "resource_uri"]), td[77] = aF, td[78] = eF) : eF = td[78];
                let aK = eF;
                td[79] !== aJ || td[80] !== t$ || td[81] !== t1 || td[82] !== aK || td[83] !== t0?._meta ? (eK = t$ && null != aJ && aK === aJ && (0, p.Ng)(t0?._meta) === t1, td[79] = aJ, td[80] = t$, td[81] = t1, td[82] = aK, td[83] = t0?._meta, td[84] = eK) : eK = td[84];
                let aV = !(eK && !0 === ax && (0, q.b)({
                    isInline: !aM && ("inline" === aS || aI),
                    status: aq,
                    hidesAttributionAndActions: aw?.hideAttribution === !0 && !0 === aw.hideActions
                })) && (aR || !tS && (aM || "html" === aj.kind && !aA));
                td[85] !== t$ || td[86] !== tE.appContext?.appName || td[87] !== tE.invocation.server || td[88] !== tP?.name || td[89] !== tD?.alt ? (eV = tP?.name ?? tE.appContext?.appName ?? tD?.alt ?? (t$ ? null : (0, m.a)(tE.invocation.server)), td[85] = t$, td[86] = tE.appContext?.appName, td[87] = tE.invocation.server, td[88] = tP?.name, td[89] = tD?.alt, td[90] = eV) : eV = td[90];
                let aG = eV;
                td[91] !== aG || td[92] !== t0 ? (eG = (0, q.a)((0, f.a)(t0), aG), td[91] = aG, td[92] = t0, td[93] = eG) : eG = td[93];
                let aZ = eG,
                    aY = aN ? tS || tU : !aR && (tS || (aC ? aE : aD)),
                    {
                        detailsEntityKey: a$,
                        callId: aX
                    } = tE;
                td[94] !== aX || td[95] !== tm || td[96] !== a$ || td[97] !== tx || td[98] !== aY || td[99] !== t_ ? (eZ = () => {
                    if (aY && null != a$) return (0, g.j)(t_, {
                        hostId: tx,
                        threadId: tm,
                        entityKey: a$,
                        itemId: aX
                    })
                }, eY = [aY, a$, aX, tx, tm, t_], td[94] = aX, td[95] = tm, td[96] = a$, td[97] = tx, td[98] = aY, td[99] = t_, td[100] = eZ, td[101] = eY) : (eZ = td[100], eY = td[101]), (0, h.useEffect)(eZ, eY);
                e: {
                    let e, t, a, n;
                    if (!aY) {
                        let e;
                        td[102] !== t4 ? (e = {
                            displayContent: t4,
                            displayStructuredContentJson: null
                        }, td[102] = t4, td[103] = e) : e = td[103], e$ = e;
                        break e
                    }
                    td[104] !== tE.result ? (e = tE.result?.type === "success" && null != tE.result.structuredContent ? eD(tE.result.structuredContent, 2) : null, td[104] = tE.result, td[105] = e) : e = td[105];
                    let l = e;td[106] !== t4 || td[107] !== tI || td[108] !== l ? (t = tI && null != l && null != t4 ? t4.filter(eE) : t4, td[106] = t4, td[107] = tI, td[108] = l, td[109] = t) : t = td[109];
                    let o = t;td[110] !== o ? (a = function(e) {
                        if (e?.length !== 1) return null;
                        let [t] = e;
                        if ("text" !== t.type || null != t.annotations) return null;
                        let a = t.text.trim();
                        if ("{" !== a[0] && "[" !== a[0]) return null;
                        try {
                            return eD(JSON.parse(a), 2)
                        } catch {
                            return null
                        }
                    }(o), td[110] = o, td[111] = a) : a = td[111];
                    let i = a;
                    if (null == i) {
                        let e;
                        td[112] !== l || td[113] !== o ? (e = {
                            displayContent: o,
                            displayStructuredContentJson: l
                        }, td[112] = l, td[113] = o, td[114] = e) : e = td[114], e$ = e;
                        break e
                    }
                    if (null == l || i === l) {
                        let e, t;
                        td[115] === Symbol.for("react.memo_cache_sentinel") ? (e = [], td[115] = e) : e = td[115];
                        let a = l ?? i;
                        td[116] !== a ? (t = {
                            displayContent: e,
                            displayStructuredContentJson: a
                        }, td[116] = a, td[117] = t) : t = td[117], e$ = t;
                        break e
                    }
                    td[118] !== l || td[119] !== o ? (n = {
                        displayContent: o,
                        displayStructuredContentJson: l
                    }, td[118] = l, td[119] = o, td[120] = n) : n = td[120],
                    e$ = n
                }
                let {
                    displayContent: a1,
                    displayStructuredContentJson: a0
                } = e$, [a2, a3] = (0, h.useState)(!1);
                t: {
                    let e;
                    if (!a2) {
                        eX = null;
                        break t
                    }
                    td[121] !== tE.callId || td[122] !== tE.durationMs || td[123] !== tE.invocation || td[124] !== tE.result ? (e = eD({
                        callId: tE.callId,
                        invocation: tE.invocation,
                        durationMs: tE.durationMs,
                        result: tE.result
                    }, 2), td[121] = tE.callId, td[122] = tE.durationMs, td[123] = tE.invocation, td[124] = tE.result, td[125] = e) : e = td[125],
                    eX = e
                }
                let a4 = eX;
                td[126] !== tz ? (e1 = tz.formatMessage({
                    id: "codex.mcpTool.rawOutputTriggerTooltip",
                    defaultMessage: "Show raw tool call output"
                }), td[126] = tz, td[127] = e1) : e1 = td[127];
                let a5 = e1,
                    a8 = tE.completed || null != tE.result || !0 === tE.liveDetailsDeferred || tU || aC;
                td[128] !== tE ? (e0 = (0, ex.a)(tE), td[128] = tE, td[129] = e0) : e0 = td[129];
                let a6 = e0,
                    a7 = !tS && !a6 && !ar && !aN,
                    a9 = !tE.completed;
                td[130] !== tP ? (e2 = null == tP ? [] : [tP], td[130] = tP, td[131] = e2) : e2 = td[131], td[132] !== tE || td[133] !== tT || td[134] !== e2 || td[135] !== ai ? (e3 = (0, n.jsx)(en.a, {
                    item: tE,
                    apps: e2,
                    part: "label",
                    loadMetadata: tT,
                    children: ai
                }), td[132] = tE, td[133] = tT, td[134] = e2, td[135] = ai, td[136] = e3) : e3 = td[136], td[137] !== a9 || td[138] !== e3 ? (e4 = (0, n.jsx)(eA.a, {
                    active: a9,
                    className: "min-w-0 shrink truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                    children: e3
                }), td[137] = a9, td[138] = e3, td[139] = e4) : e4 = td[139];
                let ne = e4;
                td[140] !== tm || td[141] !== tE || td[142] !== ne ? (e5 = !tm.startsWith("chatgpt:") && (0, eR.b)(tE) ? (0, n.jsxs)("span", {
                    className: "inline-flex max-w-full min-w-0 items-center gap-1 text-text-tertiary/90 group-hover/activity-header:text-default",
                    children: [ne, (0, n.jsx)("span", {
                        "aria-hidden": "true",
                        className: "before:content-['·']"
                    }), (0, n.jsx)("span", {
                        className: "shrink-0",
                        children: (0, n.jsx)(x.a, {
                            id: "codex.mcpTool.timedOutStatus",
                            defaultMessage: "Timed out"
                        })
                    })]
                }) : ne, td[140] = tm, td[141] = tE, td[142] = ne, td[143] = e5) : e5 = td[143];
                let nt = e5;
                td[144] !== at || td[145] !== aa || td[146] !== an || td[147] !== tx || td[148] !== tE || td[149] !== tT || td[150] !== tP || td[151] !== ae || td[152] !== t7?.displayName || td[153] !== t6 || td[154] !== t8 || td[155] !== tD ? (e8 = void 0 !== at ? at : (0, n.jsx)(ev.a, {
                    hostId: tx,
                    item: tE,
                    loadRemoteLogos: tT,
                    fallback: null == tD && null != t6 ? (0, n.jsx)(S.a, {
                        alt: t7?.displayName ?? t8?.name ?? tE.invocation.server,
                        className: "icon-xs shrink-0 scale-[1.15] object-contain",
                        loadRemote: tT,
                        logoUrl: ae,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(O.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: e_.a
                        })
                    }) : null == tD && t8?.groupKey === eg.b ? (0, n.jsx)(O.a, {
                        className: "shrink-0 text-secondary",
                        asset: e_.a
                    }) : null == tD && t8?.logoUrl != null ? (0, n.jsx)(S.a, {
                        alt: t8.name,
                        className: "icon-xs shrink-0 object-contain",
                        loadRemote: tT,
                        logoUrl: t8.logoUrl,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(O.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: eU.a
                        })
                    }) : null == tD && t8?.usesBrowserIcon === !0 ? null == an ? (0, n.jsx)(O.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: aa
                    }) : (0, n.jsx)(L.a, {
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        href: an,
                        loadRemote: tT
                    }) : null == tD && (0, p.wi)(tE.invocation.server) ? (0, n.jsx)(O.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: eL.a
                    }) : (0, n.jsx)(S.a, {
                        alt: tD?.alt ?? tP?.name ?? tE.appContext?.appName ?? tE.invocation.server,
                        appInfo: null == tD ? tP : null,
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        loadRemote: tT,
                        knownAppId: tD?.knownAppId ?? tE.appContext?.appName ?? tE.appContext?.connectorId,
                        logoUrl: tD?.logoUrl,
                        fallback: (0, n.jsx)(O.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: eU.a
                        })
                    })
                }), td[144] = at, td[145] = aa, td[146] = an, td[147] = tx, td[148] = tE, td[149] = tT, td[150] = tP, td[151] = ae, td[152] = t7?.displayName, td[153] = t6, td[154] = t8, td[155] = tD, td[156] = e8) : e8 = td[156];
                let na = e8;
                td[157] !== nt || td[158] !== tA || td[159] !== na ? (e6 = tA ?? (0, n.jsxs)(n.Fragment, {
                    children: [na, nt]
                }), td[157] = nt, td[158] = tA, td[159] = na, td[160] = e6) : e6 = td[160];
                let nn = e6;
                td[161] !== aD || td[162] !== aO || td[163] !== tU || td[164] !== tV || td[165] !== tb || td[166] !== t_ || td[167] !== aU || td[168] !== aN || td[169] !== aC || td[170] !== a_ || td[171] !== tM || td[172] !== tG ? (e7 = () => {
                    if (aN) {
                        tU || tb?.(), tL(!tU);
                        return
                    }
                    let e = aC ? !aO : !aD;
                    if (e && tb?.(), aC) {
                        aH(e && a_), t_.set(K.b, tV, e);
                        return
                    }
                    e && null != tM && (0, ef.b)(t_, tM), !e && (!0 === tG || aU) && t_.set(K.b, tV, !1), tL(e)
                }, td[161] = aD, td[162] = aO, td[163] = tU, td[164] = tV, td[165] = tb, td[166] = t_, td[167] = aU, td[168] = aN, td[169] = aC, td[170] = a_, td[171] = tM, td[172] = tG, td[173] = e7) : e7 = td[173];
                let nl = e7;
                td[174] !== tE.automaticApprovalReviews ? (e9 = null == tE.automaticApprovalReviews ? null : (0, n.jsx)(eh.a, {}), td[174] = tE.automaticApprovalReviews, td[175] = e9) : e9 = td[175];
                let no = e9,
                    ni = aP && (aw?.prefersBorder ?? tB?.content.resource?.prefersBorder ?? !0),
                    ns = a8 && "opening" !== aq && !aT && aM ? {
                        alignEnd: ni,
                        expanded: aY,
                        onToggle: nl
                    } : void 0,
                    nr = (0, s.b)("group", ni && "overflow-hidden rounded-lg border border-strong bg-surface"),
                    nc = (0, s.b)((aT || aP) && "w-full", ni && "px-4 py-2.5");
                td[176] !== ah ? (te = () => {
                    ah({
                        cancelRefetch: !1
                    })
                }, td[176] = ah, td[177] = te) : te = td[177];
                let nu = (0, n.jsx)(Y.a, {
                    hostDisplayModes: ea.H,
                    resource: {
                        data: null == t1 ? null : aw,
                        error: ag,
                        isLoading: af
                    },
                    inlineSurface: a_ ? "card" : "standalone",
                    mcpAppId: tW,
                    appName: aG ?? void 0,
                    presentation: aN ? "inline" : ay,
                    onRetryResourceRead: te,
                    showLoadingStatus: !aV
                });
                td[178] !== tx || td[179] !== tE ? (tt = (0, eN.b)(tE, tx), td[178] = tx, td[179] = tE, td[180] = tt) : tt = td[180];
                let nd = tt,
                    np = aR && aO,
                    nm = () => {
                        let e;
                        return e = null != nd ? (0, n.jsx)(eC.a, {
                            ...nd
                        }) : !0 === tE.liveDetailsDeferred ? aY ? (0, n.jsx)(P.a, {
                            className: "icon-sm"
                        }) : null : (0, n.jsxs)(n.Fragment, {
                            children: [aC ? aW ? (0, n.jsx)(G.a, {
                                className: "w-full",
                                height: (0, V.a)(null, aw?.heightHint ?? null, aw?.minFrameHeight ?? null, "card"),
                                showLoadingStatus: !1
                            }) : nu : a1 && a1.length > 0 ? (0, n.jsx)("div", {
                                className: (0, s.b)("[&_*]:text-text/50", "flex flex-col gap-0.5"),
                                children: a1.map((e, t) => (0, n.jsx)(ez, {
                                    block: e,
                                    conversationId: tm,
                                    hostId: tx
                                }, t))
                            }) : t5 ? (0, n.jsx)(D.a, {
                                className: "w-full",
                                fullWidth: !0,
                                level: "danger",
                                children: (0, n.jsx)("div", {
                                    className: "max-h-48 overflow-auto text-size-chat whitespace-pre-wrap",
                                    children: t5
                                })
                            }) : a0 ? null : (0, n.jsx)("p", {
                                className: "text-codex-description/80",
                                children: (0, n.jsx)(x.a, {
                                    id: "codex.mcpTool.noResult",
                                    defaultMessage: "Tool returned no content"
                                })
                            }), !af && !aW && !aC && a0 && (0, n.jsx)(R.CodeSnippet, {
                                codeContainerClassName: "max-h-48 overflow-auto",
                                language: "json",
                                content: a0,
                                showStickyRightContent: !1
                            }), !af && !aW && (0, n.jsx)(_.a, {
                                open: a2,
                                onOpenChange: a3,
                                triggerContent: (0, n.jsx)("div", {
                                    className: (0, s.b)("inline-flex w-fit", ar && "absolute right-1 bottom-2 z-50"),
                                    children: (0, n.jsx)(o.a, {
                                        side: "top",
                                        align: "center",
                                        content: a5,
                                        children: (0, n.jsx)(T.a, {
                                            className: "cursor-interaction opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 focus-visible:opacity-100",
                                            "aria-label": a5,
                                            color: "ghost",
                                            onClick: () => {
                                                a3(!0)
                                            },
                                            size: "icon",
                                            children: (0, n.jsx)(H.a, {
                                                className: "icon-xxs"
                                            })
                                        })
                                    })
                                }),
                                children: (0, n.jsxs)(U.b, {
                                    children: [(0, n.jsx)(U.e, {
                                        children: (0, n.jsx)(U.d, {
                                            title: (0, n.jsx)(_.f, {
                                                children: (0, n.jsx)(x.a, {
                                                    id: "codex.mcpTool.rawOutputHeading",
                                                    defaultMessage: "Raw {server}.{tool} tool call output",
                                                    values: {
                                                        server: tE.invocation.server,
                                                        tool: tE.invocation.tool
                                                    }
                                                })
                                            })
                                        })
                                    }), (0, n.jsx)(U.e, {
                                        children: null == a4 ? null : (0, n.jsx)(R.CodeSnippet, {
                                            codeContainerClassName: "max-h-128 overflow-auto",
                                            language: "json",
                                            content: a4,
                                            showStickyRightContent: !0
                                        })
                                    })]
                                })
                            })]
                        }), (0, n.jsxs)(eu.a, {
                            ref: a7 || a_ ? void 0 : t3,
                            className: (0, s.b)(ar && "relative", !aM && "py-1"),
                            variant: aM && !ni && (aV || !a_) ? "default" : "flush",
                            children: [null == tE.automaticApprovalReviews ? null : (0, n.jsx)(eh.d, {
                                className: ni ? "px-4" : void 0,
                                isExpandable: !a_,
                                reviews: tE.automaticApprovalReviews
                            }), e]
                        })
                    },
                    nh = a7 ? null : (0, n.jsxs)(n.Fragment, {
                        children: [a6 ? (0, n.jsx)(eu.a, {
                            children: (0, n.jsx)(D.a, {
                                className: "w-full",
                                fullWidth: !0,
                                level: "warning",
                                actions: null == ty ? void 0 : (0, n.jsx)(T.a, {
                                    color: "secondary",
                                    onClick: ty,
                                    children: (0, n.jsx)(x.a, {
                                        id: "codex.mcpTool.reviewPermissions",
                                        defaultMessage: "Review permissions"
                                    })
                                }),
                                children: null == ty ? (0, n.jsx)(x.a, {
                                    id: "codex.mcpTool.approvalRequestsDisabled",
                                    defaultMessage: "Approval requests were disabled for this tool call. If available, review this chat’s permissions before retrying."
                                }) : (0, n.jsx)(x.a, {
                                    id: "codex.mcpTool.approvalRequestsDisabled.recovery",
                                    defaultMessage: "Approval requests were disabled for this tool call. Choose “Ask for approval” in this chat’s permissions if available, then ask to retry."
                                })
                            })
                        }) : null, aR ? nu : (0, n.jsx)(I.a, {
                            expanded: aY,
                            height: a_ ? "auto" : t2,
                            onExpandComplete: aE ? () => aH(!1) : void 0,
                            children: aY ? nm() : null
                        })]
                    });
                td[181] !== ns || td[182] !== a7 || td[183] !== nh || td[184] !== nm ? (ta = a7 ? {
                    disclosure: ns && {
                        ...ns,
                        details: nm
                    }
                } : {
                    externalDisclosure: ns,
                    body: nh
                }, td[181] = ns, td[182] = a7, td[183] = nh, td[184] = nm, td[185] = ta) : ta = td[185];
                let nv = ta;
                td[186] !== no || td[187] !== ns || td[188] !== nc || td[189] !== af || td[190] !== nh || td[191] !== tW || td[192] !== nv || td[193] !== nn || td[194] !== na || td[195] !== aZ || td[196] !== aq ? (tn = null != aq ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(J.a, {
                        accessory: no,
                        className: nc,
                        disabled: af,
                        disclosure: ns,
                        icon: na,
                        mcpAppId: tW,
                        name: aZ,
                        status: aq
                    }), nh]
                }) : (0, n.jsx)(ed.a, {
                    accessory: no,
                    className: nc,
                    ...nv,
                    children: nn
                }), td[186] = no, td[187] = ns, td[188] = nc, td[189] = af, td[190] = nh, td[191] = tW, td[192] = nv, td[193] = nn, td[194] = na, td[195] = aZ, td[196] = aq, td[197] = tn) : tn = td[197];
                let nx = tn;
                td[198] !== tE ? (tl = (0, y.a)(tE), td[198] = tE, td[199] = tl) : tl = td[199];
                let ng = tl;
                if (tK && null != au && tY.toolScope?.kind === "target") {
                    let e;
                    td[200] !== tE ? (e = (0, Q.a)(tE), td[200] = tE, td[201] = e) : e = td[201];
                    let t = e;
                    if (null != t) {
                        let e, a, l;
                        return td[202] !== tY.toolScope || td[203] !== tE.appContext || td[204] !== tE.callId || td[205] !== tE.invocation.tool || td[206] !== tE.invocationResourceUri ? (e = {
                            appContext: tE.appContext,
                            codexAppsToolScope: tY.toolScope,
                            invocationResourceUri: tE.invocationResourceUri,
                            originCallId: tE.callId,
                            originResourceUri: null,
                            originTool: tE.invocation.tool
                        }, td[202] = tY.toolScope, td[203] = tE.appContext, td[204] = tE.callId, td[205] = tE.invocation.tool, td[206] = tE.invocationResourceUri, td[207] = e) : e = td[207], td[208] !== au || td[209] !== tm || td[210] !== tx || td[211] !== e ? (a = {
                            hostId: tx,
                            conversationId: tm,
                            access: au,
                            mcpAppScope: e
                        }, td[208] = au, td[209] = tm, td[210] = tx, td[211] = e, td[212] = a) : a = td[212], td[213] !== t || td[214] !== a ? (l = (0, n.jsx)(Z.a, {
                            call: t,
                            content: a
                        }), td[213] = t, td[214] = a, td[215] = l) : l = td[215], l
                    }
                }
                if (null != ng) {
                    let e;
                    return td[216] !== ng.id || td[217] !== ng.schedule || td[218] !== ng.title ? (e = (0, n.jsx)(B.a, {
                        id: ng.id,
                        mode: "view",
                        name: ng.title,
                        rrule: ng.schedule
                    }), td[216] = ng.id, td[217] = ng.schedule, td[218] = ng.title, td[219] = e) : e = td[219], e
                }
                td[220] !== tx || td[221] !== tE ? (to = (0, b.a)(tE, tx), td[220] = tx, td[221] = tE, td[222] = to) : to = td[222];
                let nf = to;
                if (nf?.type === "chatgpt-automation") {
                    let e;
                    return td[223] !== nf ? (e = (0, n.jsx)(k.a, {
                        automation: nf
                    }), td[223] = nf, td[224] = e) : e = td[224], e
                }
                if (nf?.type === "chatgpt-automation-list") {
                    let e;
                    return td[225] !== nf.automations ? (e = (0, n.jsx)(C.a, {
                        automations: nf.automations
                    }), td[225] = nf.automations, td[226] = e) : e = td[226], e
                }
                let nb = ar && !aN ? tj : void 0;
                td[227] !== np || td[228] !== nd || td[229] !== as || td[230] !== tA ? (ti = null != nd && (np || null == tA && as) ? (0, n.jsx)(eC.a, {
                    ...nd,
                    quiet: !np
                }) : null, td[227] = np, td[228] = nd, td[229] = as, td[230] = tA, td[231] = ti) : ti = td[231], td[232] !== aO || td[233] !== tW || td[234] !== tR || td[235] !== t_ || td[236] !== ar ? (ts = tR || "chatgpt-thread" !== t_.value.routeKind ? (0, n.jsx)(et.b, {
                    mcpAppId: tW,
                    isInlineRequested: ar && aO
                }) : null, td[232] = aO, td[233] = tW, td[234] = tR, td[235] = t_, td[236] = ar, td[237] = ts) : ts = td[237], td[238] !== nt || td[239] !== no || td[240] !== nr || td[241] !== aV || td[242] !== nc || td[243] !== aI || td[244] !== nh || td[245] !== ac || td[246] !== nv || td[247] !== a_ || td[248] !== tA || td[249] !== tN || td[250] !== nx || td[251] !== nb || td[252] !== aq ? (tr = void 0 !== tN && aV && null == aq ? (0, n.jsx)(ec.a, {
                    accessory: no,
                    ...nv,
                    className: nr,
                    "data-mcp-app-card": !!a_ || void 0,
                    headerClassName: nc,
                    icon: tN,
                    summary: tA ?? nt
                }) : (0, n.jsx)(ep.a, {
                    className: nr,
                    "data-mcp-app-card": !!a_ || void 0,
                    "data-response-body": nb,
                    "data-response-widget-pending": null != nb && (aI || ac) ? "" : void 0,
                    children: aV ? nx : nh
                }), td[238] = nt, td[239] = no, td[240] = nr, td[241] = aV, td[242] = nc, td[243] = aI, td[244] = nh, td[245] = ac, td[246] = nv, td[247] = a_, td[248] = tA, td[249] = tN, td[250] = nx, td[251] = nb, td[252] = aq, td[253] = tr) : tr = td[253], td[254] !== an || td[255] !== tE.callId || td[256] !== tT ? (tc = (e, t) => (0, n.jsxs)(h.Fragment, {
                    children: [(0, n.jsx)(ek.a, {
                        variant: "activity"
                    }), (0, n.jsx)(eP, {
                        call: e,
                        fallbackPageUrl: an,
                        loadRemoteLogos: tT
                    })]
                }, `${tE.callId}:webmcp:${t}:${e.name}`), td[254] = an, td[255] = tE.callId, td[256] = tT, td[257] = tc) : tc = td[257];
                let ny = al.map(tc);
                return td[258] !== ti || td[259] !== ts || td[260] !== tr || td[261] !== ny ? (tu = (0, n.jsxs)(n.Fragment, {
                    children: [ti, ts, tr, ny]
                }), td[258] = ti, td[259] = ts, td[260] = tr, td[261] = ny, td[262] = tu) : tu = td[262], tu
            }
        })
    }),
    KU8M: (function(e, t, a) {
        var n = a("Q840"),
            l = a("UKCO"),
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
                return void 0 === m || (0, l.Ng)(m?._meta) === c.appContext.resourceUri && null != (0, i.c)(m, c.appContext) ? p : u(r.r, d)
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
            o = a("Q840"),
            i = a("UKCO"),
            s = a("sM3V"),
            r = a("KJ1J"),
            c = a("KaH3"),
            u = a("Nj7b"),
            d = a("FvYa"),
            p = a("HOLv"),
            m = a("zUz7"),
            h = a("LF5P"),
            v = a("Lry3");
        a.d(t, {}, {
            a: function(e) {
                let t, a, x = (0, l.c)(9),
                    {
                        fallback: g,
                        hostId: f,
                        item: b,
                        loadRemoteLogos: y
                    } = e,
                    j = b.appContext?.connectorId === u.b || (0, c.f)(b),
                    w = (0, o.x)(!y || j || null != (0, h.d)({
                        item: b
                    }) || (0, i.wi)(b.invocation.server) || (0, r.f)(b.invocation.server) ? null : s.a, {
                        hostId: f,
                        serverName: b.invocation.server,
                        threadId: (0, i.Xe)(b.threadId)
                    })?.serverInfo;
                if (j) {
                    let e;
                    return x[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(p.a, {
                        className: "shrink-0 text-tertiary",
                        asset: v.a
                    }), x[0] = e) : e = x[0], e
                }
                x[1] !== w ? (t = (0, m.a)(w), x[1] = w, x[2] = t) : t = x[2];
                let k = t;
                return x[3] !== g || x[4] !== k || x[5] !== b.invocation.server || x[6] !== w?.name || x[7] !== w?.title ? (a = null == k ? g : (0, n.jsx)(d.a, {
                    alt: w?.title ?? w?.name ?? b.invocation.server,
                    className: "icon-xs shrink-0 object-contain",
                    logoUrl: k.logoUrl,
                    logoDarkUrl: k.logoDarkUrl,
                    fallback: g
                }), x[3] = g, x[4] = k, x[5] = b.invocation.server, x[6] = w?.name, x[7] = w?.title, x[8] = a) : a = x[8], a
            }
        })
    }),
    ZiDw: (function(e, t, a) {
        var n = a("Q840"),
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
        var n = a("lAQI");
        let l = n.m("kind", [n.F({
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
            o = n.F({
                "codex/toolSurface": n.F({
                    kind: n.z("browserUse"),
                    webMcpCalls: n.g(l)
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
            s = a("Q840"),
            r = a("UKCO"),
            c = a("Wf1j"),
            u = a("rEML"),
            d = a("qKlE"),
            p = a("OusJ"),
            m = a("odKs"),
            h = a("GIgU");
        a("bN4H");
        var v = a("TleN"),
            x = a("TL6G"),
            g = a("tSEg");

        function f(e) {
            return "string" == typeof e
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, o, b, y, j, w, k, C, N, M, S, I, T, R, A, _, U, L = (0, l.c)(129),
                    {
                        elicitation: O,
                        result: E,
                        id: P,
                        kind: D,
                        mode: z,
                        name: H,
                        prompt: W,
                        rrule: Q,
                        projectId: B,
                        cwds: q,
                        destination: J,
                        executionEnvironment: F,
                        localEnvironmentConfigPath: K,
                        model: V,
                        reasoningEffort: G,
                        notificationPolicy: Z,
                        targetThreadId: Y,
                        status: $
                    } = e,
                    X = void 0 === E ? null : E,
                    ee = (0, s.y)(g.a),
                    et = (0, c.a)();
                (0, v.a)();
                let ea = (0, u._)("/local/:conversationId"),
                    en = (0, s.z)(h.e),
                    el = Y ?? null;
                L[0] !== q || L[1] !== J || L[2] !== F || L[3] !== P || L[4] !== D || L[5] !== K || L[6] !== z || L[7] !== V || L[8] !== H || L[9] !== Z || L[10] !== B || L[11] !== W || L[12] !== G || L[13] !== el || L[14] !== Q || L[15] !== $ ? (t = JSON.stringify({
                    id: P,
                    kind: D,
                    mode: z,
                    name: H,
                    prompt: W,
                    rrule: Q,
                    projectId: B,
                    cwds: q,
                    destination: J,
                    executionEnvironment: F,
                    localEnvironmentConfigPath: K,
                    model: V,
                    reasoningEffort: G,
                    notificationPolicy: Z,
                    targetThreadId: el,
                    status: $
                }), L[0] = q, L[1] = J, L[2] = F, L[3] = P, L[4] = D, L[5] = K, L[6] = z, L[7] = V, L[8] = H, L[9] = Z, L[10] = B, L[11] = W, L[12] = G, L[13] = el, L[14] = Q, L[15] = $, L[16] = t) : t = L[16];
                let eo = t,
                    ei = en?.directiveKey === eo ? en.automationId : null,
                    es = ei ?? X?.automationId ?? P,
                    er = X?.snapshot ?? null,
                    ec = "view" === z ? z : null,
                    eu = "view" === z && null != P,
                    ed = null != P && (eu || "suggested-update" === z),
                    ep = (0, s.z)(d.h),
                    em = ep.data,
                    eh = !!ed && ep.isLoading;
                if (L[17] !== em || L[18] !== ei || L[19] !== q || L[20] !== P || L[21] !== et || L[22] !== eh || L[23] !== eu || L[24] !== D || L[25] !== z || L[26] !== H || L[27] !== B || L[28] !== W || L[29] !== es || L[30] !== el || L[31] !== X?.automationId || L[32] !== X?.mode || L[33] !== er?.name || L[34] !== er?.rrule || L[35] !== Q || L[36] !== $) {
                    var ev;
                    let e, t, n, l, s, c, u, d, p, h, v = null != P ? em?.items.find(e => e.id === P) ?? null : null;
                    L[46] !== em?.items || L[47] !== ei || L[48] !== et || L[49] !== eh || L[50] !== eu || L[51] !== z || L[52] !== H || L[53] !== es || L[54] !== X?.mode || L[55] !== er?.name || L[56] !== er?.rrule || L[57] !== Q ? ({
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
                        mode: X?.mode ?? z,
                        isSuggestionAccepted: null != ei,
                        trimmedId: es ?? null,
                        trimmedName: H ?? er?.name ?? null,
                        trimmedRrule: Q ?? er?.rrule ?? null,
                        automations: em?.items ?? null,
                        isLoading: eh
                    }), l = et.formatMessage({
                        id: "settings.automations.rruleSummaryFallback",
                        defaultMessage: "Custom schedule"
                    }), s = (0, m.f)({
                        rrule: n,
                        intl: et,
                        fallbackMessage: l
                    }), L[46] = em?.items, L[47] = ei, L[48] = et, L[49] = eh, L[50] = eu, L[51] = z, L[52] = H, L[53] = es, L[54] = X?.mode, L[55] = er?.name, L[56] = er?.rrule, L[57] = Q, L[58] = t, L[59] = w, L[60] = n, L[61] = l, L[62] = s) : (t = L[58], w = L[59], n = L[60], l = L[61], s = L[62]);
                    let x = s;
                    L[63] !== et ? (c = et.formatMessage({
                        id: "settings.automations.loading",
                        defaultMessage: "Loading…"
                    }), L[63] = et, L[64] = c) : c = L[64];
                    let g = c;
                    L[65] !== et ? (u = et.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task"
                    }), L[65] = et, L[66] = u) : u = L[66];
                    let f = u;
                    L[67] !== z || L[68] !== X?.mode ? (d = X?.mode ?? z, L[67] = z, L[68] = X?.mode, L[69] = d) : d = L[69], a = (y = "delete" === (b = d)) || X?.automationId != null ? X?.automationId ?? P ?? null : es, L[70] !== a || L[71] !== y ? (p = y ? (ev = a ?? null, 0 === (e = ev?.trim() ?? "").length ? null : /^[0-9a-f]{8}-[0-9a-f-]+$/i.test(e) ? e : i()(e.replace(/[-_]+/g, " "))) : null, L[70] = a, L[71] = y, L[72] = p) : p = L[72];
                    let M = p;
                    N = t ? g : w || M || f, L[73] !== M || L[74] !== et || L[75] !== w ? (h = w ?? M ?? et.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task"
                    }), L[73] = M, L[74] = et, L[75] = w, L[76] = h) : h = L[76], C = h, j = x || (t ? g : null != n ? l : null), o = null != H && null != W && null != Q && ("heartbeat" === D ? null != el : void 0 !== B || null != q), k = null != P && null != $ && null != H && null != W && null != Q && (null == v ? "heartbeat" === D ? null != el : void 0 !== B || null != q : !!(0, r.li)(v) || void 0 !== B || null != q), L[17] = em, L[18] = ei, L[19] = q, L[20] = P, L[21] = et, L[22] = eh, L[23] = eu, L[24] = D, L[25] = z, L[26] = H, L[27] = B, L[28] = W, L[29] = es, L[30] = el, L[31] = X?.automationId, L[32] = X?.mode, L[33] = er?.name, L[34] = er?.rrule, L[35] = Q, L[36] = $, L[37] = a, L[38] = o, L[39] = b, L[40] = y, L[41] = j, L[42] = w, L[43] = k, L[44] = C, L[45] = N
                } else a = L[37], o = L[38], b = L[39], y = L[40], j = L[41], w = L[42], k = L[43], C = L[44], N = L[45];
                let ex = k,
                    eg = "suggested-update" === z && ed && ep.isLoading,
                    ef = "suggested-create" === z || "suggested-update" === z,
                    eb = ef ? O : void 0,
                    ey = P ?? null,
                    ej = D ?? null,
                    ew = H ?? "",
                    ek = W ?? "",
                    eC = Q ?? "";
                L[77] !== q ? (M = q ?? [], L[77] = q, L[78] = M) : M = L[78];
                let eN = void 0 !== B ? B : q?.[0] === r.kd ? null : q?.[0] ?? null,
                    eM = F ?? null,
                    eS = K ?? null,
                    eI = V ?? null,
                    eT = G ?? null;
                L[79] !== Z ? (S = void 0 !== Z ? {
                    notificationPolicy: Z
                } : {}, L[79] = Z, L[80] = S) : S = L[80];
                let eR = $ ?? null;
                L[81] !== eo || L[82] !== ec || L[83] !== el || L[84] !== M || L[85] !== eN || L[86] !== eM || L[87] !== eS || L[88] !== eI || L[89] !== eT || L[90] !== S || L[91] !== eR || L[92] !== eb || L[93] !== ey || L[94] !== ej || L[95] !== ew || L[96] !== ek || L[97] !== eC ? (I = {
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
                }, L[81] = eo, L[82] = ec, L[83] = el, L[84] = M, L[85] = eN, L[86] = eM, L[87] = eS, L[88] = eI, L[89] = eT, L[90] = S, L[91] = eR, L[92] = eb, L[93] = ey, L[94] = ej, L[95] = ew, L[96] = ek, L[97] = eC, L[98] = I) : I = L[98];
                let eA = I,
                    e_ = null != ei;
                L[99] !== o || L[100] !== ex || L[101] !== ec || L[102] !== eu || L[103] !== e_ ? (T = (0, h.D)({
                    directiveMode: ec,
                    canCreate: o,
                    canUpdate: ex,
                    isViewMode: eu,
                    forceOpen: e_
                }), L[99] = o, L[100] = ex, L[101] = ec, L[102] = eu, L[103] = e_, L[104] = T) : T = L[104];
                let eU = T,
                    eL = y ? null : j;
                L[105] !== eU || L[106] !== a || L[107] !== ei || L[108] !== eA || L[109] !== eg || L[110] !== ef || L[111] !== ea || L[112] !== ee || L[113] !== C ? (R = () => {
                    if (eg) return;
                    let e = a;
                    null != e ? x.c.dispatchHostMessage({
                        type: "navigate-to-route",
                        path: `/automations?automationId=${e}`
                    }) : "create" === eU && (ee.set(h.e, null), ee.set(h.f, eA), x.c.dispatchHostMessage({
                        type: "navigate-to-route",
                        path: "/automations?automationMode=create"
                    }))
                }, L[105] = eU, L[106] = a, L[107] = ei, L[108] = eA, L[109] = eg, L[110] = ef, L[111] = ea, L[112] = ee, L[113] = C, L[114] = R) : R = L[114];
                let eO = R,
                    eE = !y && !eg && (null != a || "create" === eU),
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
                let ez = _.join(" · "),
                    eH = eL ?? eD,
                    eW = ez || void 0;
                return L[123] !== eE || L[124] !== eO || L[125] !== eH || L[126] !== eW || L[127] !== N ? (U = (0, n.jsx)(p.a, {
                    title: N,
                    subtitle: eH,
                    ariaLabel: eW,
                    canOpen: eE,
                    onOpen: eO
                }), L[123] = eE, L[124] = eO, L[125] = eH, L[126] = eW, L[127] = N, L[128] = U) : U = L[128], U
            }
        })
    }),
    IN8o: (function(e, t, a) {
        var n = a("ABep"),
            l = a("QosV"),
            o = a("slpy"),
            i = a("on57"),
            s = a("Q840"),
            r = a("Wf1j"),
            c = a("oyxz"),
            u = a("wD9O"),
            d = a("HBzQ"),
            p = a("Sm6l"),
            m = a("bf6R"),
            h = a("wbOy"),
            v = a("tSEg"),
            x = a("nMdB"),
            g = a("FWVQ"),
            f = a("qZWE"),
            b = a("M0nI");
        a.d(t, {}, {
            a: function(e) {
                let t, a, y, j, w, k, C, N, M, S, I = (0, l.c)(44),
                    {
                        mcpAppId: T,
                        name: R,
                        status: A,
                        disabled: _,
                        icon: U,
                        accessory: L,
                        className: O,
                        disclosure: E
                    } = e,
                    P = (0, s.y)(v.a),
                    D = (0, u.c)(),
                    z = (0, r.a)(),
                    H = (0, s.x)(_ ? null : f.q, T);
                I[0] !== z ? (t = z.formatMessage({
                    id: "codex.mcpTool.openAppInTab",
                    defaultMessage: "Open app in tab"
                }), I[0] = z, I[1] = t) : t = I[1];
                let W = t;
                I[2] !== H?.inline || I[3] !== E || I[4] !== T || I[5] !== P || I[6] !== A ? (a = E ?? ("closed" === A && H?.inline ? {
                    expanded: !1,
                    onToggle: () => (0, f.y)(P, T, "inline")
                } : void 0), I[2] = H?.inline, I[3] = E, I[4] = T, I[5] = P, I[6] = A, I[7] = a) : a = I[7];
                let Q = a;
                if (null != E && ("open" === A || "closed" === A)) {
                    let e, t = null != R,
                        a = R ?? "";
                    if (I[8] !== E.expanded || I[9] !== z || I[10] !== t || I[11] !== a) {
                        let n = {
                            hasName: t,
                            name: a
                        };
                        e = E.expanded ? z.formatMessage({
                            id: "mcpApp.activity.hideInline",
                            defaultMessage: "{hasName, select, true {Hide {name}} other {Hide app}}"
                        }, n) : z.formatMessage({
                            id: "mcpApp.activity.showInline",
                            defaultMessage: "{hasName, select, true {Show {name}} other {Show app}}"
                        }, n), I[8] = E.expanded, I[9] = z, I[10] = t, I[11] = a, I[12] = e
                    } else e = I[12];
                    y = e
                }
                I[13] !== H?.tab || I[14] !== W || I[15] !== T || I[16] !== P ? (j = H?.tab ? (0, n.jsx)(o.a, {
                    content: W,
                    children: (0, n.jsx)(p.a, {
                        className: "relative",
                        "aria-label": W,
                        color: "ghost",
                        size: "icon",
                        onClick: () => (0, f.y)(P, T, "fullscreen"),
                        children: (0, n.jsx)(m.P, {})
                    })
                }) : null, I[13] = H?.tab, I[14] = W, I[15] = T, I[16] = P, I[17] = j) : j = I[17], I[18] !== L || I[19] !== j ? (w = (0, n.jsxs)(n.Fragment, {
                    children: [j, L]
                }), I[18] = L, I[19] = j, I[20] = w) : w = I[20], I[21] !== Q || I[22] !== E?.accessibleLabel || I[23] !== E?.labelledBy || I[24] !== y || I[25] !== D ? (k = null == Q ? void 0 : {
                    ...Q,
                    accessibleLabel: E?.accessibleLabel ?? (E?.labelledBy == null ? y : void 0),
                    onToggle: e => {
                        (0, x.a)(e.currentTarget, D), Q.onToggle(e)
                    }
                }, I[21] = Q, I[22] = E?.accessibleLabel, I[23] = E?.labelledBy, I[24] = y, I[25] = D, I[26] = k) : k = I[26];
                let B = "opening" === A,
                    q = null != Q && "group-hover/activity-header:[--agent-activity-summary-color:var(--color-text)]";
                return I[27] !== q ? (C = (0, i.b)("min-w-0 shrink truncate", b.a.summary, q), I[27] = q, I[28] = C) : C = I[28], I[29] !== y || I[30] !== z || I[31] !== R || I[32] !== A ? (N = y ?? (0, n.jsx)(c.a, {
                    id: "mcpApp.activity.status",
                    defaultMessage: "{status, select, opening {Opening {name}} open {Opened {name}} error {Couldn’t open {name}} other {Open {name}}}",
                    values: {
                        status: A,
                        name: R ?? z.formatMessage(g.c)
                    }
                }), I[29] = y, I[30] = z, I[31] = R, I[32] = A, I[33] = N) : N = I[33], I[34] !== B || I[35] !== C || I[36] !== N ? (M = (0, n.jsx)(h.a, {
                    active: B,
                    role: "status",
                    className: C,
                    children: N
                }), I[34] = B, I[35] = C, I[36] = N, I[37] = M) : M = I[37], I[38] !== O || I[39] !== U || I[40] !== M || I[41] !== w || I[42] !== k ? (S = (0, n.jsxs)(d.b, {
                    className: O,
                    accessory: w,
                    externalDisclosure: k,
                    children: [U, M]
                }), I[38] = O, I[39] = U, I[40] = M, I[41] = w, I[42] = k, I[43] = S) : S = I[43], S
            }
        })
    }),
    FWVQ: (function(e, t, a) {
        var n = a("Q840"),
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
    XxcM: (function(e, t, a) {
        a.d(t, {
            a: () => d
        });
        var n = a("ABep"),
            l = a("QosV"),
            o = a("Q840"),
            i = a("URlz"),
            s = a("Bbed"),
            r = a("hZax"),
            c = a("HwRo");
        let u = (0, s.a)(async function() {
            return (await Promise.all([a.e(963703), a.e(78822)]).then(a.bind(a, "pXhU"))).NativePhoneFrame
        });

        function d(e) {
            let t, a, s = (0, l.c)(3);
            s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, c.b)(), s[0] = t) : t = s[0];
            let d = (0, r.f)(t),
                p = (0, o.x)(i.c, e.content.access);
            return d && "current" === p ? (s[1] !== e ? (a = (0, n.jsx)(u, {
                ...e
            }), s[1] = e, s[2] = a) : a = s[2], a) : null
        }
    }),
    KLqe: (function(e, t, a) {
        var n = a("ABep"),
            l = a("QosV"),
            o = a("Q840"),
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
                let t, a, s, h, v, x, g, f, b = (0, l.c)(32),
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
                }, b[13] = T, b[14] = h) : h = b[14], b[15] !== k ? (v = {
                    enabled: k
                }, b[15] = k, b[16] = v) : v = b[16];
                let R = (0, o.x)(d.d, h, v);
                if (null == R) return C;
                b[17] !== y.completed || b[18] !== y.invocation.server || b[19] !== y.result ? (x = "active", y.completed && (x = (0, c.a)({
                    result: y.result,
                    isCodexAppsServer: "codex_apps" === y.invocation.server
                }) ? "failed" : "completed"), b[17] = y.completed, b[18] = y.invocation.server, b[19] = y.result, b[20] = x) : x = b[20];
                let A = R.title ?? "";
                return b[21] !== C || b[22] !== w || b[23] !== x ? (g = e => {
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
                }, b[21] = C, b[22] = w, b[23] = x, b[24] = g) : g = b[24], b[25] !== R.document_type || b[26] !== R.namespace || b[27] !== R.page_id || b[28] !== R.symbol || b[29] !== A || b[30] !== g ? (f = (0, n.jsx)(p.a, {
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