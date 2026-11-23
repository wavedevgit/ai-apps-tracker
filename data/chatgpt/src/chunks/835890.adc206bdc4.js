export const __rspack_esm_ids = [835890];
export const __webpack_modules__ = {
    RZnR: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a) {
                if (null != a && (null != a.appMetadata && "firstPartyType" in a.appMetadata && "string" == typeof a.appMetadata.firstPartyType && "" !== a.appMetadata.firstPartyType.trim() || "DEFAULT_OAI_CATALOG" === a.distributionChannel || "ECOSYSTEM_DIRECTORY" === a.distributionChannel)) return a.name
            }
        })
    }),
    OusJ: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zd8w"),
            g = c("oyxz"),
            h = c("HOLv"),
            i = c("MyoZ"),
            j = c("AtXz");
        c.d(b, {}, {
            a: function(a) {
                let b, c, k, l, m, n, o, p, q = (0, e.c)(32),
                    {
                        ref: r,
                        title: s,
                        subtitle: t,
                        icon: u,
                        ariaLabel: v,
                        canOpen: w,
                        onOpen: x,
                        openLabel: y,
                        actions: z
                    } = a,
                    A = (0, f.useId)(),
                    B = (0, f.useId)(),
                    C = z;
                if (null == z && w) {
                    let a, b;
                    q[0] !== y ? (a = y ?? (0, d.jsx)(g.a, {
                        id: "automation.updateDirective.open",
                        defaultMessage: "Open"
                    }), q[0] = y, q[1] = a) : a = q[1], q[2] !== a ? (b = (0, d.jsx)(i.g, {
                        label: a
                    }), q[2] = a, q[3] = b) : b = q[3], C = b
                }
                q[4] !== u ? (b = void 0 === u ? (0, d.jsx)(h.a, {
                    asset: j.a,
                    "aria-hidden": !0
                }) : u, q[4] = u, q[5] = b) : b = q[5], q[6] !== b ? (c = (0, d.jsx)(i.f, {
                    children: b
                }), q[6] = b, q[7] = c) : c = q[7], q[8] !== s || q[9] !== B ? (k = (0, d.jsx)("span", {
                    id: B,
                    children: s
                }), q[8] = s, q[9] = B, q[10] = k) : k = q[10], q[11] !== A || q[12] !== t ? (l = t ? (0, d.jsx)("span", {
                    id: A,
                    children: t
                }) : null, q[11] = A, q[12] = t, q[13] = l) : l = q[13], q[14] !== C ? (m = null != C ? (0, d.jsx)("span", {
                    className: "pointer-events-auto flex shrink-0 items-center gap-1",
                    children: C
                }) : null, q[14] = C, q[15] = m) : m = q[15], q[16] !== c || q[17] !== k || q[18] !== l || q[19] !== m ? (n = (0, d.jsx)(i.h, {
                    className: "pointer-events-none relative z-10",
                    icon: c,
                    title: k,
                    subtitle: l,
                    trailing: m
                }), q[16] = c, q[17] = k, q[18] = l, q[19] = m, q[20] = n) : n = q[20];
                let D = n,
                    E = null == v ? B : void 0,
                    F = t ? A : void 0,
                    G = !w,
                    H = null == z ? D : null;
                q[21] !== v || q[22] !== x || q[23] !== r || q[24] !== H || q[25] !== E || q[26] !== F || q[27] !== G ? (o = (0, d.jsx)(i.b, {
                    ref: r,
                    "aria-label": v,
                    "aria-labelledby": E,
                    "aria-describedby": F,
                    disabled: G,
                    onClick: x,
                    children: H
                }), q[21] = v, q[22] = x, q[23] = r, q[24] = H, q[25] = E, q[26] = F, q[27] = G, q[28] = o) : o = q[28];
                let I = null != z ? D : null;
                return q[29] !== o || q[30] !== I ? (p = (0, d.jsx)(i.a, {
                    as: "span",
                    className: "mt-3 select-none",
                    variant: "attachment",
                    children: (0, d.jsxs)("span", {
                        className: "group/resource-card relative",
                        "data-automation-card": !0,
                        children: [o, I]
                    })
                }), q[29] = o, q[30] = I, q[31] = p) : p = q[31], p
            }
        })
    }),
    ojna: (function(a, b, c) {
        var d = c("lAQI"),
            e = c("KJ1J"),
            f = c("kqQk"),
            g = c("acxW"),
            h = c("xSzB");
        let i = d.F({
            success: d.z(!0),
            automation: f.a
        });

        function j(a) {
            return (0, e.f)(a.server) && ("automations.create_local" === a.tool || "automations.update_local" === a.tool)
        }
        c.d(b, {}, {
            a: function(a) {
                if (!j(a.invocation) || !a.completed || !0 === a.isMcpAppWidgetSuperseded || a.result?.type !== "success" || (0, g.a)({
                        isCodexAppsServer: !0,
                        result: a.result
                    })) return null;
                let {
                    structuredContent: b
                } = (0, h.i)({
                    isCodexAppsServer: !0,
                    toolResult: a.result.raw
                }), c = i.safeParse(b);
                return c.success ? c.data.automation : null
            },
            b: j
        })
    }),
    HzCW: (function(a, b, c) {
        var d = c("lAQI");
        let e = d.F({
            navigationSource: d.p(["scheduled_page", "notification", "conversation", "conversation_sidebar", "editor", "space_schedules_panel"])
        });
        c.d(b, {}, {
            a: function(a) {
                let b = e.safeParse(a);
                return b.success ? b.data.navigationSource : void 0
            }
        })
    }),
    SHXB: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("Wf1j"),
            h = c("oyxz"),
            i = c("OusJ");
        c("fGpH");
        var j = c("Ro2M"),
            k = c("bN4H"),
            l = c("Bbed"),
            m = c("tSEg"),
            n = c("DuVB");
        (0, l.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(865959)]).then(c.bind(c, "n7q6"))).TeamAutomationCardActions), c.d(b, {}, {
            a: function(a) {
                let b, c, h, l, o, p, q, r = (0, e.c)(22),
                    {
                        automation: s
                    } = a,
                    t = (0, f.y)(m.a),
                    u = (0, g.a)(),
                    v = (0, f.x)(j.g, s.id);
                r[0] !== s || r[1] !== v || r[2] !== u ? (b = (0, n.a)(s, v, u), r[0] = s, r[1] = v, r[2] = u, r[3] = b) : b = r[3];
                let {
                    scheduleLabel: w
                } = b;
                r[4] !== s.title || r[5] !== v?.automation.title || r[6] !== v?.automation.title.trim ? (c = v?.automation.title.trim() || s.title, r[4] = s.title, r[5] = v?.automation.title, r[6] = v?.automation.title.trim, r[7] = c) : c = r[7];
                let x = c;
                return r[8] !== s.id || r[9] !== v || r[10] !== t || r[11] !== x ? (h = () => {
                    null == v && t.queryClient.invalidateQueries({
                        queryKey: ["cloud-automations"]
                    }), (0, k.openAutomationSidePanelTab)({
                        scope: t,
                        automationId: s.id,
                        title: x,
                        toggle: !0,
                        navigationSource: "conversation"
                    })
                }, l = null, r[8] = s.id, r[9] = v, r[10] = t, r[11] = x, r[12] = h, r[13] = l) : (h = r[12], l = r[13]), r[14] !== w || r[15] !== h || r[16] !== l || r[17] !== x ? (o = (0, d.jsx)(i.a, {
                    title: x,
                    subtitle: w,
                    ariaLabel: x,
                    canOpen: !0,
                    onOpen: h,
                    actions: l
                }), r[14] = w, r[15] = h, r[16] = l, r[17] = x, r[18] = o) : o = r[18], r[19] === Symbol.for("react.memo_cache_sentinel") ? (p = null, r[19] = p) : p = r[19], r[20] !== o ? (q = (0, d.jsxs)("div", {
                    className: "flex w-full min-w-0 flex-col gap-2 self-start",
                    children: [o, p]
                }), r[20] = o, r[21] = q) : q = r[21], q
            },
            b: function(a) {
                let b, c, f, g, i, j, k = (0, e.c)(16),
                    {
                        operation: l
                    } = a;
                return k[0] !== l ? (b = "pendingCreate" === l && (0, d.jsx)(h.a, {
                    id: "chatgpt.tpp.cot_v5.active_status.working",
                    defaultMessage: "Working"
                }), k[0] = l, k[1] = b) : b = k[1], k[2] !== l ? (c = "createGoal" === l && (0, d.jsx)(h.a, {
                    id: "chatgpt.tasks.conversation.tool_status.creating.goal",
                    defaultMessage: "Creating goal"
                }), k[2] = l, k[3] = c) : c = k[3], k[4] !== l ? (f = "create" === l && (0, d.jsx)(h.a, {
                    id: "chatgpt.tasks.conversation.tool_status.creating",
                    defaultMessage: "Creating scheduled task"
                }), k[4] = l, k[5] = f) : f = k[5], k[6] !== l ? (g = "update" === l && (0, d.jsx)(h.a, {
                    id: "chatgpt.tasks.conversation.tool_status.updating",
                    defaultMessage: "Updating scheduled task"
                }), k[6] = l, k[7] = g) : g = k[7], k[8] !== l ? (i = "list" === l && (0, d.jsx)(h.a, {
                    id: "chatgpt.tasks.conversation.tool_status.listing",
                    defaultMessage: "Listing scheduled tasks"
                }), k[8] = l, k[9] = i) : i = k[9], k[10] !== b || k[11] !== c || k[12] !== f || k[13] !== g || k[14] !== i ? (j = (0, d.jsxs)("div", {
                    className: "loading-shimmer-pure-text text-size-chat text-secondary select-none",
                    role: "status",
                    children: [b, c, f, g, i]
                }), k[10] = b, k[11] = c, k[12] = f, k[13] = g, k[14] = i, k[15] = j) : j = k[15], j
            }
        })
    }),
    VRzh: (function(a, b, c) {
        var d = c("QosV"),
            e = c("l8z4"),
            f = c("Q840"),
            g = c("zd8w"),
            h = c("rEML"),
            i = c("mgfw"),
            j = c("HzCW"),
            k = c("yGJW"),
            l = c("tSEg"),
            m = c("dQRk");
        let n = (0, f.v)(l.a, a => !1);
        c.d(b, {}, {
            a: function(a) {
                let b, c, o, p = (0, d.c)(8),
                    {
                        conversationId: q
                    } = a,
                    r = (0, f.y)(l.a),
                    {
                        key: s,
                        state: t
                    } = (0, h.Z)();
                p[0] !== t ? (b = (0, j.a)(t), p[0] = t, p[1] = b) : b = p[1];
                let u = b;
                return p[2] !== q || p[3] !== s || p[4] !== r || p[5] !== u ? (c = () => {
                    if ("chatgpt-thread" !== r.value.routeKind) return;
                    let a = r.value.conversationId;
                    return r.watch(b => {
                        let c = b.get(m.j, q);
                        if (null == c || c !== b.get(m.j, a)) return;
                        let d = {
                            locationKey: s,
                            conversationId: c
                        };
                        r.get(n, d) || (r.set(n, d, !0), (0, k.a)(r, e.c, {
                            type: "CHATGPT_TASKS_EVENT_TYPE_CONVERSATION_WITH_TASK_VIEWED",
                            conversationId: c,
                            openSource: null == u ? void 0 : i.c[u],
                            openDestination: "CHATGPT_TASKS_OPEN_DESTINATION_CONVERSATION"
                        }))
                    })
                }, o = [q, s, r, u], p[2] = q, p[3] = s, p[4] = r, p[5] = u, p[6] = c, p[7] = o) : (c = p[6], o = p[7]), (0, g.useEffect)(c, o), null
            }
        })
    }),
    DuVB: (function(a, b, c) {
        var d = c("odKs"),
            e = c("TZBk"),
            f = c("fGpH");
        c.d(b, {}, {
            a: function(a, b, c) {
                let g, h = null != b && "completed" === (0, f.p)(b.automation),
                    i = !h && (b?.automation.is_enabled ?? a.isEnabled),
                    j = null == b ? a.title : (0, f.h)(b);
                if (!i) return {
                    isEnabled: i,
                    nextRunAt: null,
                    scheduleLabel: h ? c.formatMessage(e.a.completed) : c.formatMessage(e.a.paused),
                    title: j
                };
                let k = b?.automation.schedule ?? a.schedule,
                    l = /^DTSTART[;:]/m.test(k) && !/^RRULE:/m.test(k) || /(?:^|[;:])COUNT=1(?:;|$)/m.test(k),
                    m = null == b ? a.nextRunAt ?? null : (0, f.j)(b);
                return g = l && b?.automation.timing_mode !== "flexible_schedule" ? (0, d.f)({
                    rrule: k,
                    nextRunAt: null == m ? null : Date.parse(m),
                    intl: c,
                    fallbackMessage: c.formatMessage({
                        id: "settings.automations.rruleSummaryFallback",
                        defaultMessage: "Custom schedule"
                    })
                }) : null != b ? (0, f.o)(b, c) : a.displaySchedule?.trim() || (0, d.f)({
                    rrule: (0, f.n)(a.schedule),
                    intl: c,
                    fallbackMessage: c.formatMessage({
                        id: "settings.automations.rruleSummaryFallback",
                        defaultMessage: "Custom schedule"
                    })
                }), {
                    isEnabled: i,
                    nextRunAt: m,
                    scheduleLabel: g,
                    title: j
                }
            }
        })
    }),
    bPZ9: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("zd8w"),
            h = c("oyxz"),
            i = c("Wf1j"),
            j = c("rEML"),
            k = c("Ro2M"),
            l = c("bN4H"),
            m = c("pnPL"),
            n = c("IY6Y"),
            o = c("tSEg"),
            p = c("cWHY"),
            q = c("VRzh"),
            r = c("DuVB");

        function s(a) {
            return (0, d.jsx)(t, {
                automation: a
            }, a.id)
        }
        let t = (0, g.memo)(function(a) {
            let b, c, g, h, j, n, p, q = (0, e.c)(19),
                {
                    automation: s
                } = a,
                t = (0, f.y)(o.a),
                u = (0, i.a)(),
                v = (0, f.x)(k.g, s.id);
            q[0] !== s || q[1] !== v || q[2] !== u ? (b = (0, r.a)(s, v, u), q[0] = s, q[1] = v, q[2] = u, q[3] = b) : b = q[3];
            let {
                scheduleLabel: w,
                title: x
            } = b;
            return q[4] !== s.id || q[5] !== t || q[6] !== x ? (c = () => {
                (0, l.openAutomationSidePanelTab)({
                    scope: t,
                    automationId: s.id,
                    title: x,
                    toggle: !0,
                    navigationSource: "conversation"
                })
            }, q[4] = s.id, q[5] = t, q[6] = x, q[7] = c) : c = q[7], q[8] !== x ? (g = (0, d.jsx)("span", {
                className: "truncate text-sm text-default",
                children: x
            }), q[8] = x, q[9] = g) : g = q[9], q[10] !== w ? (h = null == w || 0 === w.length ? null : (0, d.jsx)("span", {
                className: "truncate text-sm text-tertiary",
                children: w
            }), q[10] = w, q[11] = h) : h = q[11], q[12] !== g || q[13] !== h ? (j = (0, d.jsxs)("span", {
                className: "flex min-w-0 flex-col gap-0.5",
                children: [g, h]
            }), q[12] = g, q[13] = h, q[14] = j) : j = q[14], q[15] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, d.jsx)(m.a, {
                "aria-hidden": "true",
                className: "icon-sm shrink-0 text-tertiary"
            }), q[15] = n) : n = q[15], q[16] !== c || q[17] !== j ? (p = (0, d.jsx)("li", {
                className: "border-b border-subtle",
                "data-automation-card": !0,
                children: (0, d.jsxs)("button", {
                    type: "button",
                    className: "flex w-full min-w-0 cursor-interaction items-center justify-between gap-4 py-3 text-start hover:text-default",
                    onClick: c,
                    children: [j, n]
                })
            }), q[16] = c, q[17] = j, q[18] = p) : p = q[18], p
        });
        c.d(b, {}, {
            a: function(a) {
                let b, c, g, i, l, m, o, r, t, u, v = (0, e.c)(22),
                    {
                        automations: w,
                        conversationId: x
                    } = a,
                    y = (0, j.ab)(),
                    {
                        data: z,
                        isSuccess: A
                    } = (0, f.z)(k.k);
                v[0] !== w || v[1] !== z || v[2] !== A ? (b = A && z.isAvailable ? w.filter(a => {
                    let {
                        id: b
                    } = a;
                    return z.items.some(a => {
                        let {
                            automation: c
                        } = a;
                        return c.id === b
                    })
                }) : w, v[0] = w, v[1] = z, v[2] = A, v[3] = b) : b = v[3];
                let B = b;
                return v[4] !== B.length || v[5] !== x ? (c = null != x && B.length > 0 ? (0, d.jsx)(q.a, {
                    conversationId: x
                }) : null, v[4] = B.length, v[5] = x, v[6] = c) : c = v[6], v[7] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, d.jsx)(n.a, {
                    "aria-hidden": "true",
                    className: "icon-sm shrink-0"
                }), v[7] = g) : g = v[7], v[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, d.jsxs)("header", {
                    className: "flex items-center gap-2 border-b border-subtle px-4 py-3 text-sm text-secondary select-none",
                    children: [g, (0, d.jsx)("h2", {
                        className: "text-sm font-medium uppercase",
                        children: (0, d.jsx)(p.a, {
                            children: (0, d.jsx)(h.a, {
                                id: "automations.scheduled.destination.label",
                                defaultMessage: "Scheduled"
                            })
                        })
                    })]
                }), v[8] = i) : i = v[8], v[9] !== B ? (l = B.slice(0, 5).map(s), v[9] = B, v[10] = l) : l = v[10], v[11] !== y ? (m = () => {
                    y("/automations", {
                        state: {
                            navigationSource: "conversation"
                        }
                    })
                }, v[11] = y, v[12] = m) : m = v[12], v[13] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, d.jsx)(h.a, {
                    id: "automations.list.seeAllTasks",
                    defaultMessage: "See all tasks"
                }), v[13] = o) : o = v[13], v[14] !== m ? (r = (0, d.jsx)("li", {
                    children: (0, d.jsx)("button", {
                        type: "button",
                        className: "w-full cursor-interaction py-3 text-start text-sm text-tertiary select-none hover:text-default",
                        onClick: m,
                        children: o
                    })
                }), v[14] = m, v[15] = r) : r = v[15], v[16] !== l || v[17] !== r ? (t = (0, d.jsxs)("ul", {
                    className: "px-4",
                    children: [l, r]
                }), v[16] = l, v[17] = r, v[18] = t) : t = v[18], v[19] !== c || v[20] !== t ? (u = (0, d.jsxs)("section", {
                    className: "w-full max-w-sm overflow-hidden rounded-2xl border border-default bg-surface",
                    children: [c, i, t]
                }), v[19] = c, v[20] = t, v[21] = u) : u = v[21], u
            }
        })
    }),
    y0FK: (function(a, b, c) {
        var d = c("Q840"),
            e = c("FOks");
        let f = new Set,
            g = (0, d.u)(e.a, f),
            h = (0, d.d)(e.a, (a, b) => {
                let {
                    get: c
                } = b;
                return c(g).has(a)
            }, {
                autoDispose: !0
            });
        c.d(b, {}, {
            a: h,
            b: function(a, b, c) {
                a.set(g, a => {
                    if (a.has(b) === c) return a;
                    let d = new Set(a);
                    return c ? d.add(b) : d.delete(b), d
                })
            }
        })
    }),
    FOks: (function(a, b, c) {
        var d = c("Q840"),
            e = c("Sd8U");
        let f = (0, d.t)("ConversationTurnPresentationScope", {
            key: a => {
                let {
                    turnKey: b
                } = a;
                return b
            },
            parent: e.a
        });
        c.d(b, {}, {
            a: f
        })
    }),
    MAIj: (function(a, b, c) {
        var d = c("Q840"),
            e = c("utkD"),
            f = c("OWtl");
        let g = (0, d.q)(f.a, a => (0, e.c)(a)),
            h = (0, d.q)(f.a, a => ({
                ...(0, e.d)({
                    order: "usage"
                }),
                enabled: null != a,
                select: b => b.find(b => b.displayName.toLowerCase() === a?.toLowerCase()) ?? null
            }));
        c.d(b, {}, {
            a: g,
            b: function(a) {
                let {
                    data: b
                } = (0, d.x)(g, a?.kind === "appId" ? a.appId : null), {
                    data: c
                } = (0, d.x)(h, a?.kind === "displayName" ? a.displayName : null);
                return b ?? c ?? null
            }
        })
    }),
    fXpx: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("oyxz"),
            h = c("Sm6l"),
            i = c("igP5");

        function j(a) {
            let b, c = (0, e.c)(4),
                {
                    isError: f,
                    onRetry: i
                } = a;
            if (f) {
                let a, b;
                return c[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(g.a, {
                    id: "localConversation.commandOutput.retry",
                    defaultMessage: "Retry loading output"
                }), c[0] = a) : a = c[0], c[1] !== i ? (b = (0, d.jsx)(h.a, {
                    color: "ghost",
                    size: "compact",
                    onClick: i,
                    children: a
                }), c[1] = i, c[2] = b) : b = c[2], b
            }
            return c[3] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)("span", {
                role: "status",
                className: "text-size-chat text-tertiary",
                children: (0, d.jsx)(g.a, {
                    id: "localConversation.commandOutput.loading",
                    defaultMessage: "Loading output\u2026"
                })
            }), c[3] = b) : b = c[3], b
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, g, h, k, l = (0, e.c)(12);
                l[0] !== a ? ({
                    children: b,
                    quiet: g,
                    ...c
                } = a, l[0] = a, l[1] = b, l[2] = c, l[3] = g) : (b = l[1], c = l[2], g = l[3]);
                let m = void 0 !== g && g,
                    {
                        data: n,
                        isError: o,
                        refetch: p
                    } = (0, f.x)(i.a, c);
                if (null != n) {
                    let a;
                    return l[4] !== b || l[5] !== n ? (a = b?.(n) ?? null, l[4] = b, l[5] = n, l[6] = a) : a = l[6], a
                }
                return m ? null : (l[7] !== p ? (h = () => void p(), l[7] = p, l[8] = h) : h = l[8], l[9] !== o || l[10] !== h ? (k = (0, d.jsx)(j, {
                    isError: o,
                    onRetry: h
                }), l[9] = o, l[10] = h, l[11] = k) : k = l[11], k)
            },
            b: j
        })
    }),
    z0Na: (function(a, b, c) {
        var d = c("QosV"),
            e = c("T0Rc"),
            f = c("Q840"),
            g = c("KvQL"),
            h = c("sM3V"),
            i = c("KJ1J"),
            j = c("HUHI"),
            k = c("rO8L"),
            l = c("NJrC"),
            m = c("W10I"),
            n = c("EEop"),
            o = c("cLdu"),
            p = c("ueue"),
            q = c("whdX"),
            r = c("tSEg"),
            s = c("KU8M"),
            t = c("LF5P"),
            u = c("MdwM"),
            v = c("Hkqr"),
            w = c("acxW");
        c.d(b, {}, {
            a: function(a) {
                let b, c, e, j, k, l, n, o, p, q, r = (0, d.c)(50),
                    {
                        item: t,
                        hostId: u,
                        conversationId: v,
                        fallback: x,
                        enabled: y,
                        catalogEnabled: z
                    } = a,
                    A = void 0 === y || y,
                    B = void 0 === z ? A : z;
                r[0] !== t.invocation.server || r[1] !== t.result ? (b = (0, i.f)(t.invocation.server), c = (0, w.a)({
                    isCodexAppsServer: b,
                    result: t.result
                }), r[0] = t.invocation.server, r[1] = t.result, r[2] = b, r[3] = c) : (b = r[2], c = r[3]);
                let C = c,
                    D = t.result?.type !== "success" || C ? null : t.result.raw,
                    E = D ?? x?.toolResult ?? null;
                r[4] !== v || r[5] !== u ? (e = {
                    hostId: u,
                    conversationId: v
                }, r[4] = v, r[5] = u, r[6] = e) : e = r[6];
                let F = (0, f.x)(h.b, e);
                r[7] !== u || r[8] !== t.appContext || r[9] !== t.invocation.server || r[10] !== t.invocation.tool || r[11] !== t.invocationResourceUri || r[12] !== F ? (j = {
                    appContext: t.appContext,
                    hostId: u,
                    invocationResourceUri: t.invocationResourceUri,
                    server: t.invocation.server,
                    threadId: F,
                    tool: t.invocation.tool
                }, r[7] = u, r[8] = t.appContext, r[9] = t.invocation.server, r[10] = t.invocation.tool, r[11] = t.invocationResourceUri, r[12] = F, r[13] = j) : j = r[13];
                let G = j;
                r[14] !== B ? (k = {
                    enabled: B
                }, r[14] = B, r[15] = k) : k = r[15];
                let H = (0, f.x)(s.a, G, k);
                r[16] !== H.data || r[17] !== t.invocation.server || r[18] !== t.invocation.tool || r[19] !== t.invocationResourceUri ? (l = (0, m.c)({
                    invocationResourceUri: t.invocationResourceUri,
                    mcpServerStatuses: H.data,
                    server: t.invocation.server,
                    tool: t.invocation.tool
                })?.resourceUri, r[16] = H.data, r[17] = t.invocation.server, r[18] = t.invocation.tool, r[19] = t.invocationResourceUri, r[20] = l) : l = r[20];
                let I = l;
                r[21] !== H.isPending || r[22] !== v || r[23] !== I || r[24] !== E?._meta || r[25] !== x?.resourceUri || r[26] !== t.appContext?.resourceUri || r[27] !== t.mcpAppResourceUri ? (n = v.startsWith("chatgpt:") ? I : t.appContext?.resourceUri ?? I ?? (H.isPending ? x?.resourceUri : void 0) ?? (0, g.Mg)(E?._meta) ?? t.mcpAppResourceUri, r[21] = H.isPending, r[22] = v, r[23] = I, r[24] = E?._meta, r[25] = x?.resourceUri, r[26] = t.appContext?.resourceUri, r[27] = t.mcpAppResourceUri, r[28] = n) : n = r[28];
                let J = n,
                    K = null != J && H.isPending && t.appContext?.resourceUri == null && null == I && x?.resourceUri == null,
                    L = (0, f.x)(A && b ? s.b : null, G);
                C ? o = "error" : t.completed && null == t.result && null == E && (o = "cancelled");
                let M = J ?? x?.resourceUri ?? null,
                    N = b && null != t.appContext ? t.callId : null,
                    O = o;
                return r[29] !== H.data || r[30] !== t.appContext || r[31] !== t.invocation.server || r[32] !== t.invocation.tool || r[33] !== t.invocationResourceUri ? (p = (0, m.b)({
                    appContext: t.appContext,
                    invocationResourceUri: t.invocationResourceUri,
                    mcpServerStatuses: H.data,
                    server: t.invocation.server,
                    tool: t.invocation.tool
                }), r[29] = H.data, r[30] = t.appContext, r[31] = t.invocation.server, r[32] = t.invocation.tool, r[33] = t.invocationResourceUri, r[34] = p) : p = r[34], r[35] !== H || r[36] !== v || r[37] !== E || r[38] !== u || r[39] !== b || r[40] !== K || r[41] !== t || r[42] !== D || r[43] !== N || r[44] !== p || r[45] !== M || r[46] !== C || r[47] !== o || r[48] !== L ? (q = {
                    item: t,
                    hostId: u,
                    conversationId: v,
                    catalog: H,
                    resourceUri: M,
                    isResourceUriPending: K,
                    toolScope: L,
                    isCodexAppsToolCall: b,
                    originCallId: N,
                    successfulToolResult: D,
                    displayedSuccessfulToolResult: E,
                    toolCallFailed: C,
                    toolCallStatus: O,
                    toolDefinition: p
                }, r[35] = H, r[36] = v, r[37] = E, r[38] = u, r[39] = b, r[40] = K, r[41] = t, r[42] = D, r[43] = N, r[44] = p, r[45] = M, r[46] = C, r[47] = o, r[48] = L, r[49] = q) : q = r[49], q
            },
            b: function(a, b) {
                let c, e, f, g, h = (0, d.c)(25),
                    {
                        item: i,
                        hostId: j,
                        conversationId: k,
                        catalog: m,
                        resourceUri: n,
                        isResourceUriPending: o,
                        toolScope: p,
                        originCallId: r
                    } = a,
                    s = p?.connectorId ?? null,
                    t = p?.kind === "target" ? p : null,
                    u = n ?? null,
                    v = b && !o;
                h[0] !== k || h[1] !== j || h[2] !== i.appContext || h[3] !== i.completed || h[4] !== i.invocation.server || h[5] !== r || h[6] !== s || h[7] !== t || h[8] !== u || h[9] !== v ? (c = {
                    appContext: i.appContext,
                    connectorId: s,
                    connectorTarget: t,
                    hostId: j,
                    originCallId: r,
                    callCompleted: i.completed,
                    server: i.invocation.server,
                    threadId: k,
                    uri: u,
                    enabled: v
                }, h[0] = k, h[1] = j, h[2] = i.appContext, h[3] = i.completed, h[4] = i.invocation.server, h[5] = r, h[6] = s, h[7] = t, h[8] = u, h[9] = v, h[10] = c) : c = h[10];
                let w = (0, q.f)(c),
                    x = o ? void 0 : w.data;
                h[11] !== x ? (e = (0, l.c)(x), h[11] = x, h[12] = e) : e = h[12];
                let y = e,
                    {
                        error: z,
                        isPending: A,
                        isFetching: B
                    } = o || a.isCodexAppsToolCall && null == p ? m : w;
                return h[13] !== z || h[14] !== B || h[15] !== A || h[16] !== x?.resource ? (f = x?.resource != null ? {
                    error: null,
                    isLoading: !1
                } : {
                    error: B ? null : z,
                    isLoading: B || A && null == z
                }, h[13] = z, h[14] = B, h[15] = A, h[16] = x?.resource, h[17] = f) : f = h[17], h[18] !== w.access || h[19] !== w.refetch || h[20] !== w.refetchResource || h[21] !== y || h[22] !== x || h[23] !== f ? (g = {
                    resource: x,
                    renderData: y,
                    access: w.access,
                    refetch: w.refetch,
                    refetchResource: w.refetchResource,
                    state: f
                }, h[18] = w.access, h[19] = w.refetch, h[20] = w.refetchResource, h[21] = y, h[22] = x, h[23] = f, h[24] = g) : g = h[24], g
            },
            c: function(a) {
                let b, c, g, h, l, m, q, s, w, x, y, z, A, B = (0, d.c)(50),
                    {
                        item: C,
                        hostId: D,
                        appInfoOverride: E,
                        enabled: F,
                        retryOnMount: G
                    } = a,
                    H = void 0 === F || F,
                    I = (0, f.y)(r.a);
                B[0] !== E || B[1] !== H || B[2] !== C ? (b = H && null == E && (0, t.g)(C), B[0] = E, B[1] = H, B[2] = C, B[3] = b) : b = B[3], B[4] !== D || B[5] !== b ? (c = {
                    enabled: b,
                    hostId: D
                }, B[4] = D, B[5] = b, B[6] = c) : c = B[6];
                let {
                    data: J
                } = (0, j.m)(c);
                B[7] !== E || B[8] !== J || B[9] !== C.appContext || B[10] !== C.functionName || B[11] !== C.invocation.server || B[12] !== C.invocation.tool ? (g = E ?? (null == J ? null : (0, v.b)({
                    appContext: C.appContext,
                    apps: J,
                    functionName: C.functionName,
                    serverName: C.invocation.server,
                    toolName: C.invocation.tool
                })), B[7] = E, B[8] = J, B[9] = C.appContext, B[10] = C.functionName, B[11] = C.invocation.server, B[12] = C.invocation.tool, B[13] = g) : g = B[13];
                let K = g;
                B[14] !== H || B[15] !== C.invocation.server || B[16] !== C.pluginId ? (h = H && null != C.pluginId && !(0, i.f)(C.invocation.server), B[14] = H, B[15] = C.invocation.server, B[16] = C.pluginId, B[17] = h) : h = B[17], B[18] !== D || B[19] !== h ? (l = {
                    enabled: h,
                    hostId: D
                }, B[18] = D, B[19] = h, B[20] = l) : l = B[20];
                let L = (0, k.a)(l);
                B[21] !== D || B[22] !== L ? (m = {
                    enabled: L,
                    hostId: D,
                    roots: void 0,
                    resolveActiveRoots: !0
                }, B[21] = D, B[22] = L, B[23] = m) : m = B[23];
                let {
                    data: M
                } = (0, o.l)(m);
                B[24] !== M || B[25] !== C.pluginId ? (q = M?.find(a => {
                    let {
                        plugin: b
                    } = a;
                    return b.id === C.pluginId || null != b.remotePluginId && b.remotePluginId === C.pluginId
                }), B[24] = M, B[25] = C.pluginId, B[26] = q) : q = B[26];
                let N = q,
                    O = L && null != M && null != C.pluginId && null == N;
                B[27] !== D || B[28] !== C.pluginId || B[29] !== I.query || B[30] !== O ? (s = I.query.getOptions(n.l, (0, n.a)({
                    hostId: D,
                    pluginId: O ? C.pluginId ?? null : null
                })), B[27] = D, B[28] = C.pluginId, B[29] = I.query, B[30] = O, B[31] = s) : s = B[31];
                let P = s,
                    Q = O && P.enabled,
                    R = G ?? P.retryOnMount;
                B[32] !== P || B[33] !== Q || B[34] !== R ? (w = {
                    ...P,
                    enabled: Q,
                    retry: !1,
                    retryOnMount: R
                }, B[32] = P, B[33] = Q, B[34] = R, B[35] = w) : w = B[35];
                let {
                    data: S
                } = (0, e.a)(w);
                B[36] !== S ? (x = null == S ? null : (0, p.c)(S), B[36] = S, B[37] = x) : x = B[37];
                let T = x,
                    U = N ?? T,
                    V = T?.plugin.id ?? N?.plugin.id ?? C.pluginId;
                return B[38] !== M || B[39] !== T || B[40] !== O ? (y = O && null != T ? [T] : M ?? [], B[38] = M, B[39] = T, B[40] = O, B[41] = y) : y = B[41], B[42] !== C.invocation.server || B[43] !== V || B[44] !== y ? (z = (0, u.a)({
                    pluginId: V,
                    plugins: y,
                    serverName: C.invocation.server
                }), B[42] = C.invocation.server, B[43] = V, B[44] = y, B[45] = z) : z = B[45], B[46] !== K || B[47] !== U || B[48] !== z ? (A = {
                    matchingApp: K,
                    plugin: U,
                    pluginIcon: z
                }, B[46] = K, B[47] = U, B[48] = z, B[49] = A) : A = B[49], A
            }
        })
    }),
    o1Ns: (function(a, b, c) {
        var d = c("SZCv"),
            e = c.n(d),
            f = c("Q840"),
            g = c("KvQL"),
            h = c("KJ1J"),
            i = c("Sgjw"),
            j = c("ojna"),
            k = c("qZWE"),
            l = c("tSEg"),
            m = c("acxW");
        let n = (0, f.d)(l.a, (a, b) => {
            let {
                get: c
            } = b;
            return new Map(a.map(a => {
                let b = (0, g.ef)(a),
                    d = c(k.h, b);
                return [a, {
                    sourceId: c(k.u, b),
                    hasSuccessfulToolResult: d?.content.toolCallStatus == null && d?.content.toolResult != null
                }]
            }))
        }, {
            isEqual: e()
        });
        c.d(b, {}, {
            a: function(a) {
                let {
                    item: b,
                    hostId: c,
                    retainedState: d
                } = a, e = !(0, j.b)(b.invocation) && !(0, i.b)(b.invocation, c) && !0 !== b.isMcpAppWidgetSuperseded && (d?.sourceId == null || d.sourceId === (0, g.ef)(b.callId));
                return {
                    isEligible: e,
                    isRenderable: e && !(0, m.a)({
                        isCodexAppsServer: (0, h.f)(b.invocation.server),
                        result: b.result
                    }) && (!b.completed || null != b.result || d?.hasSuccessfulToolResult === !0)
                }
            },
            b: n
        })
    }),
    MdwM: (function(a, b, c) {
        var d = c("Haiv"),
            e = c("KJ1J");
        c.d(b, {}, {
            a: function(a) {
                let {
                    pluginId: b,
                    plugins: c,
                    serverName: f
                } = a;
                if (null == b || (0, e.f)(f)) return null;
                let g = c.find(a => a.plugin.id === b) ?? null;
                return null == g ? null : {
                    alt: (0, d.a)(g),
                    knownAppId: g.plugin.name,
                    logoUrl: g.composerIconPath ?? g.logoPath,
                    logoDarkUrl: g.logoDarkPath
                }
            }
        })
    }),
    BGqp: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("ZDhX"),
            g = c("q0oE"),
            h = c("on57"),
            i = c("iodE"),
            j = c("AQaI"),
            k = c.n(j),
            l = c("Q840"),
            m = c("KvQL"),
            n = c("OZum"),
            o = c("zd8w"),
            p = c("Wf1j"),
            q = c("oyxz"),
            r = c("vdpW"),
            s = c("mnR8"),
            t = c("Sgjw"),
            u = c("ojna"),
            v = c("USdi"),
            w = c("khkh"),
            x = c("SHXB"),
            y = c("bPZ9"),
            z = c("OOaz"),
            A = c("Zm2g"),
            B = c("FvYa"),
            C = c("A7Ss"),
            D = c("y0FK"),
            E = c("Sm6l"),
            F = c("la9L"),
            G = c("rmk3"),
            H = c("JNtf"),
            I = c("mUDD"),
            J = c("KxMp"),
            K = c("HOLv"),
            L = c("pDbL"),
            M = c("RNul"),
            N = c("Wdu7"),
            O = c("wwME"),
            P = c("ZyN8"),
            Q = c("YeQK"),
            R = c("qYBv"),
            S = c("oKu4"),
            T = c("FWVQ"),
            U = c("IN8o"),
            V = c("HwRo"),
            W = c("C3P5"),
            X = c("aENG"),
            Y = c("Cv9y"),
            Z = c("XxcM"),
            $ = c("EAcR"),
            _ = c("NJrC"),
            aa = c("EDsV"),
            ab = c("YqAS"),
            ac = c("qwxA"),
            ad = c("qZWE"),
            ae = c("KLqe"),
            af = c("Sd8U"),
            ag = c("tSEg"),
            ah = c("hZax"),
            ai = c("WFY2"),
            aj = c("S7UD"),
            ak = c("MFk9"),
            al = c("K5Kt"),
            am = c("HBzQ"),
            an = c("JGoU"),
            ao = c("cKhh"),
            ap = c("kRUe"),
            aq = c("GmdE"),
            ar = c("t7eZ"),
            as = c("LF5P"),
            at = c("ZiDw"),
            au = c("ltPT"),
            av = c("SfaR"),
            aw = c("DYB3"),
            ax = c("MAIj"),
            ay = c("mRLe"),
            az = c("fXpx"),
            aA = c("LkKu"),
            aB = c("z0Na"),
            aC = c("o62A"),
            aD = c("o1Ns"),
            aE = c("alO6"),
            aF = c("acxW"),
            aG = c("wbOy"),
            aH = c("Cxoh"),
            aI = c("zX7p"),
            aJ = c("u8id"),
            aK = c("NMoQ");

        function aL(a) {
            return "text" !== a.type
        }

        function aM(a) {
            let b, c, f, g, h, i, j, k, l, m, o = (0, e.c)(35),
                {
                    call: p,
                    fallbackPageUrl: r,
                    loadRemoteLogos: s
                } = a,
                t = null == p.sourceHostname ? r : `https://${p.sourceHostname}`,
                u = "invokeTool" === p.kind ? p.inputJson : void 0,
                v = "invokeTool" === p.kind && !0 === p.inputTruncated;
            o[0] !== s || o[1] !== t ? (b = null == t ? (0, d.jsx)(K.a, {
                className: "shrink-0 text-text/60",
                asset: aK.a
            }) : (0, d.jsx)(J.a, {
                className: "icon-xs shrink-0 text-text/60",
                href: t,
                loadRemote: s
            }), o[0] = s, o[1] = t, o[2] = b) : b = o[2], o[3] !== p.name || o[4] !== p.title ? (c = p.title ?? (0, n.a)(p.name, {
                style: "sentence"
            }), o[3] = p.name, o[4] = p.title, o[5] = c) : c = o[5], o[6] !== p.kind || o[7] !== c ? (f = (0, d.jsx)(q.a, {
                id: "codex.mcpTool.webMcpActivity.completed",
                defaultMessage: "{kind, select, listTools {Listed website tools} other {{toolName}}}",
                values: {
                    kind: p.kind,
                    toolName: c
                }
            }), o[6] = p.kind, o[7] = c, o[8] = f) : f = o[8], o[9] !== u || o[10] !== v ? (g = null == u || v ? u : function(a) {
                try {
                    return JSON.parse(a)
                } catch {
                    return a
                }
            }(u), o[9] = u, o[10] = v, o[11] = g) : g = o[11];
            let w = !!v || void 0;
            o[12] !== p.description || o[13] !== p.name || o[14] !== p.readOnlyHint || o[15] !== p.sourceHostname || o[16] !== p.title || o[17] !== g || o[18] !== w ? (h = aN({
                name: p.name,
                title: p.title,
                description: p.description,
                website: p.sourceHostname,
                readOnlyHint: p.readOnlyHint,
                input: g,
                inputTruncated: w
            }, 2), o[12] = p.description, o[13] = p.name, o[14] = p.readOnlyHint, o[15] = p.sourceHostname, o[16] = p.title, o[17] = g, o[18] = w, o[19] = h) : h = o[19];
            let x = v ? "true" : "false";
            return o[20] !== x ? (i = (0, d.jsx)(q.a, {
                id: "codex.localConversation.webMcpTools.toolLabel",
                defaultMessage: "{truncated, select, true {Tool (input truncated)} other {Tool}}",
                values: {
                    truncated: x
                }
            }), o[20] = x, o[21] = i) : i = o[21], o[22] !== h || o[23] !== i ? (j = (0, d.jsx)(F.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: h,
                language: "json",
                showStickyRightContent: !1,
                title: i
            }), o[22] = h, o[23] = i, o[24] = j) : j = o[24], o[25] !== p.outputJson || o[26] !== p.outputTruncated ? (k = null == p.outputJson ? null : (0, d.jsx)(F.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: p.outputTruncated ? p.outputJson : function(a) {
                    try {
                        return aN(JSON.parse(a), 2)
                    } catch {
                        return a
                    }
                }(p.outputJson),
                language: "json",
                showStickyRightContent: !1,
                title: (0, d.jsx)(q.a, {
                    id: "codex.localConversation.webMcpTools.resultLabel",
                    defaultMessage: "{truncated, select, true {Result (truncated)} other {Result}}",
                    values: {
                        truncated: p.outputTruncated ? "true" : "false"
                    }
                })
            }), o[25] = p.outputJson, o[26] = p.outputTruncated, o[27] = k) : k = o[27], o[28] !== k || o[29] !== j ? (l = (0, d.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2",
                children: [j, k]
            }), o[28] = k, o[29] = j, o[30] = l) : l = o[30], o[31] !== b || o[32] !== l || o[33] !== f ? (m = (0, d.jsx)(ao.a, {
                icon: b,
                status: "completed",
                summary: f,
                children: l
            }), o[31] = b, o[32] = l, o[33] = f, o[34] = m) : m = o[34], m
        }

        function aN(a, b) {
            try {
                return JSON.stringify(a, null, b) ?? "null"
            } catch {
                return ai.a.debug("Failed to stringify MCP tool call payload", {
                    safe: {
                        value: a
                    },
                    sensitive: {}
                }), ""
            }
        }

        function aO(a) {
            let b = (0, e.c)(73),
                {
                    block: c,
                    conversationId: f,
                    hostId: g
                } = a,
                i = (0, l.y)(af.a),
                j = (0, p.a)();
            switch (c.type) {
                case "image": {
                    let a, e, h, k, l, m, n;
                    b[0] !== c.annotations || b[1] !== j ? (a = aQ(c.annotations, j), b[0] = c.annotations, b[1] = j, b[2] = a) : a = b[2];
                    let o = a,
                        p = `data:${c.mimeType};base64,${c.data}`;
                    b[3] !== j ? (e = j.formatMessage({
                        id: "codex.mcpTool.contentBlock.imageAlt",
                        defaultMessage: "Image returned by tool"
                    }), b[3] = j, b[4] = e) : e = b[4];
                    let q = e;
                    b[5] !== f || b[6] !== g || b[7] !== q || b[8] !== p || b[9] !== j || b[10] !== i ? (h = () => (0, Q.getGeneratedImageContextMenuItems)(i, {
                        chatGptConversationId: f.startsWith("chatgpt:") ? (0, z.d)(f.slice(8)) : void 0,
                        displaySrc: p,
                        hostId: g,
                        image: {
                            kind: "generic",
                            src: p,
                            alt: q
                        },
                        intl: j
                    }), b[5] = f, b[6] = g, b[7] = q, b[8] = p, b[9] = j, b[10] = i, b[11] = h) : h = b[11], b[12] !== q || b[13] !== p ? (k = (0, d.jsx)("img", {
                        className: "max-h-48 w-max max-w-full gap-0.5 rounded-md object-contain",
                        alt: q,
                        src: p
                    }), b[12] = q, b[13] = p, b[14] = k) : k = b[14], b[15] !== h || b[16] !== k ? (l = (0, d.jsx)(G.a, {
                        getItems: h,
                        children: k
                    }), b[15] = h, b[16] = k, b[17] = l) : l = b[17];
                    let r = l;
                    if (null == o) return r;
                    return b[18] !== o ? (m = (0, d.jsx)("p", {
                        className: "text-size-chat whitespace-pre-wrap text-codex-description/80",
                        children: o
                    }), b[18] = o, b[19] = m) : m = b[19], b[20] !== r || b[21] !== m ? (n = (0, d.jsxs)("div", {
                        className: "flex flex-col gap-0.5",
                        children: [r, m]
                    }), b[20] = r, b[21] = m, b[22] = n) : n = b[22], n
                }
                case "audio": {
                    let a, e, f, g;
                    b[23] !== c.annotations || b[24] !== j ? (a = aQ(c.annotations, j), b[23] = c.annotations, b[24] = j, b[25] = a) : a = b[25];
                    let h = a;
                    return b[26] !== c.data || b[27] !== c.mimeType ? (e = (0, d.jsx)(aP, {
                        data: c.data,
                        mimeType: c.mimeType
                    }), b[26] = c.data, b[27] = c.mimeType, b[28] = e) : e = b[28], b[29] !== h ? (f = null != h ? (0, d.jsx)("p", {
                        className: "text-size-chat whitespace-pre-wrap text-codex-description/80",
                        children: h
                    }) : null, b[29] = h, b[30] = f) : f = b[30], b[31] !== e || b[32] !== f ? (g = (0, d.jsxs)("div", {
                        className: "flex flex-col gap-0.5",
                        children: [e, f]
                    }), b[31] = e, b[32] = f, b[33] = g) : g = b[33], g
                }
                case "resource_link": {
                    let a, e, f, g;
                    b[34] !== c.annotations || b[35] !== j ? (a = aQ(c.annotations, j), b[34] = c.annotations, b[35] = j, b[36] = a) : a = b[36];
                    let h = a,
                        i = c.title ?? c.name ?? c.uri;
                    return b[37] !== i ? (e = (0, d.jsx)("div", {
                        className: "break-words text-codex-description/80",
                        children: (0, d.jsx)(q.a, {
                            id: "codex.mcpTool.resourceLink.reading",
                            defaultMessage: "Read {resourceLinkName}",
                            values: {
                                resourceLinkName: i
                            }
                        })
                    }), b[37] = i, b[38] = e) : e = b[38], b[39] !== h ? (f = null != h ? (0, d.jsx)("div", {
                        className: "break-words whitespace-pre-wrap text-codex-description/80",
                        children: h
                    }) : null, b[39] = h, b[40] = f) : f = b[40], b[41] !== e || b[42] !== f ? (g = (0, d.jsxs)("div", {
                        className: "flex flex-col gap-0.5 text-size-chat",
                        children: [e, f]
                    }), b[41] = e, b[42] = f, b[43] = g) : g = b[43], g
                }
                case "embedded_resource": {
                    let a, e, f, g, h, i, j, k = c.resource.text ?? c.resource.blob ?? "",
                        l = "" !== k;
                    b[44] !== c.resource.annotations ? (a = aR(c.resource.annotations), b[44] = c.resource.annotations, b[45] = a) : a = b[45];
                    let m = a;
                    return b[46] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, d.jsx)("span", {
                        className: "font-medium text-default",
                        children: (0, d.jsx)(q.a, {
                            id: "codex.mcpTool.embeddedResource.uriLabel",
                            defaultMessage: "URI"
                        })
                    }), b[46] = e) : e = b[46], b[47] !== c.resource.uri ? (f = (0, d.jsxs)("div", {
                        className: "flex gap-1",
                        children: [e, (0, d.jsx)("span", {
                            className: "break-all",
                            children: c.resource.uri
                        })]
                    }), b[47] = c.resource.uri, b[48] = f) : f = b[48], b[49] !== c.resource.mimeType ? (g = null != c.resource.mimeType ? (0, d.jsxs)("div", {
                        className: "flex gap-1",
                        children: [(0, d.jsx)("span", {
                            className: "font-medium text-default",
                            children: (0, d.jsx)(q.a, {
                                id: "codex.mcpTool.embeddedResource.mimeTypeLabel",
                                defaultMessage: "MIME type"
                            })
                        }), (0, d.jsx)("span", {
                            className: "break-all",
                            children: c.resource.mimeType
                        })]
                    }) : null, b[49] = c.resource.mimeType, b[50] = g) : g = b[50], b[51] !== m ? (h = null != m ? (0, d.jsxs)("div", {
                        className: "flex gap-1",
                        children: [(0, d.jsx)("span", {
                            className: "font-medium text-default",
                            children: (0, d.jsx)(q.a, {
                                id: "codex.mcpTool.embeddedResource.annotationsLabel",
                                defaultMessage: "Annotations"
                            })
                        }), (0, d.jsx)("span", {
                            className: "break-all",
                            children: m
                        })]
                    }) : null, b[51] = m, b[52] = h) : h = b[52], b[53] !== l || b[54] !== k ? (i = l ? (0, d.jsxs)("div", {
                        className: "flex flex-col gap-0.5",
                        children: [(0, d.jsx)("span", {
                            className: "font-medium text-default",
                            children: (0, d.jsx)(q.a, {
                                id: "codex.mcpTool.embeddedResource.contentLabel",
                                defaultMessage: "Content"
                            })
                        }), (0, d.jsx)("pre", {
                            className: "max-h-48 overflow-auto rounded-md bg-primary-soft px-3 py-2 whitespace-pre-wrap text-codex-description/80",
                            children: k
                        })]
                    }) : null, b[53] = l, b[54] = k, b[55] = i) : i = b[55], b[56] !== f || b[57] !== g || b[58] !== h || b[59] !== i ? (j = (0, d.jsxs)("div", {
                        className: "flex flex-col gap-0.5 text-size-chat text-codex-description/80",
                        children: [f, g, h, i]
                    }), b[56] = f, b[57] = g, b[58] = h, b[59] = i, b[60] = j) : j = b[60], j
                }
                case "unknown": {
                    let a, e, f;
                    return b[61] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, h.b)("[&_*]:text-text/50", "bg-primary-soft text-codex-description/80 max-h-48 overflow-auto whitespace-pre-wrap rounded-md px-3 py-2 text-size-chat"), b[61] = a) : a = b[61], b[62] !== c.raw ? (e = aN(c.raw, 2), b[62] = c.raw, b[63] = e) : e = b[63], b[64] !== e ? (f = (0, d.jsx)("pre", {
                        className: a,
                        children: e
                    }), b[64] = e, b[65] = f) : f = b[65], f
                }
                case "text": {
                    let a, e, f;
                    b[66] !== c.annotations || b[67] !== c.text || b[68] !== j ? (a = [c.text, aQ(c.annotations, j)].filter(a => null != a).join("\n"), b[66] = c.annotations, b[67] = c.text, b[68] = j, b[69] = a) : a = b[69];
                    let g = a;
                    return b[70] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, d.jsx)(q.a, {
                        id: "codex.mcpTool.textBlock.plaintextTitle",
                        defaultMessage: "plaintext"
                    }), b[70] = e) : e = b[70], b[71] !== g ? (f = (0, d.jsx)(F.CodeSnippet, {
                        codeContainerClassName: "max-h-48 overflow-auto",
                        content: g,
                        language: "plaintext",
                        renderSvgAsImage: !1,
                        shouldWrapCode: !0,
                        showStickyRightContent: !1,
                        title: e,
                        variant: "preview"
                    }), b[71] = g, b[72] = f) : f = b[72], f
                }
            }
        }

        function aP(a) {
            let b, c, f, g, h = (0, e.c)(12),
                {
                    data: j,
                    mimeType: k
                } = a,
                l = (0, i.a)();
            h[0] !== j || h[1] !== k ? (b = {
                data: j,
                mimeType: k
            }, h[0] = j, h[1] = k, h[2] = b) : b = h[2];
            let m = b,
                [n, p] = (0, o.useState)(null);
            h[3] !== m ? (c = () => p(m), h[3] = m, h[4] = c) : c = h[4];
            let r = c;
            if (!l) return null;
            if (n?.data === j && n.mimeType === k) {
                let a;
                return h[5] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(q.a, {
                    id: "codex.mcpTool.contentBlock.audioUnavailable",
                    defaultMessage: "Audio unavailable"
                }), h[5] = a) : a = h[5], a
            }
            return h[6] !== r || h[7] !== m ? (f = a => {
                if (null != a) return (0, aj.d)(a, m, r)
            }, h[6] = r, h[7] = m, h[8] = f) : f = h[8], h[9] !== r || h[10] !== f ? (g = (0, d.jsx)("audio", {
                ref: f,
                className: "w-full gap-0.5",
                controls: !0,
                onError: r,
                preload: "metadata"
            }), h[9] = r, h[10] = f, h[11] = g) : g = h[11], g
        }

        function aQ(a, b) {
            let c = aR(a);
            return null == c ? null : b.formatMessage({
                id: "codex.mcpTool.contentBlock.annotationsLine",
                defaultMessage: "Annotations: {annotations}"
            }, {
                annotations: c
            })
        }

        function aR(a) {
            if (null == a) return null;
            let b = [];
            return (null != a.audience && a.audience.length > 0 && b.push(`audience=${a.audience.join(", ")}`), null != a.priority && b.push(`priority=${String(a.priority)}`), null != a.lastModified && b.push(`lastModified=${a.lastModified}`), 0 === b.length) ? null : b.join("; ")
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, i, j, z, G, Q, af, ai, aj, ao, aK, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, a$, a_, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, bl, bm, bn = (0, e.c)(267),
                    {
                        activityDisclosureScope: bo,
                        item: bp,
                        conversationId: bq,
                        expandedContentOnly: br,
                        hideTextBlocksWithStructuredContent: bs,
                        hostId: bt,
                        loadRemoteLogos: bu,
                        appInfoOverride: bv,
                        onExpand: bw,
                        onOpenPermissions: bx,
                        responseBodyId: by,
                        renderMcpApps: bz,
                        shouldAutoExpandMcpApp: bA,
                        summary: bB,
                        summaryIcon: bC,
                        toolActivityTurnKey: bD
                    } = a,
                    bE = void 0 !== br && br,
                    bF = void 0 !== bs && bs,
                    bG = void 0 === bu || bu,
                    bH = void 0 === bz || bz,
                    bI = void 0 === bB ? null : bB,
                    bJ = (0, l.y)(ag.a),
                    [bK, bL] = (0, o.useState)(!1),
                    bM = `mcp-output:${bp.callId}`,
                    bN = (0, l.x)(null == bo ? null : D.a, bM) ?? bK;
                bn[0] !== bo || bn[1] !== bM ? (b = function(a) {
                    null == bo ? bL(a) : (0, D.b)(bo, bM, a)
                }, bn[0] = bo, bn[1] = bM, bn[2] = b) : b = bn[2];
                let bO = b;
                bn[3] !== bt || bn[4] !== bp ? (c = (0, aA.b)(bp, bt), bn[3] = bt, bn[4] = bp, bn[5] = c) : c = bn[5], bn[6] === Symbol.for("react.memo_cache_sentinel") ? (i = {
                    enabled: !1
                }, bn[6] = i) : i = bn[6];
                let bP = (0, l.x)(aA.a, c, i);
                bn[7] !== bP || bn[8] !== bp ? (j = null == bP ? bp : {
                    ...bp,
                    result: bP,
                    deferredOutputTurnId: void 0
                }, bn[7] = bP, bn[8] = bp, bn[9] = j) : j = bn[9];
                let bQ = j;
                bn[10] !== bv || bn[11] !== bt || bn[12] !== bQ ? (z = {
                    item: bQ,
                    hostId: bt,
                    appInfoOverride: bv
                }, bn[10] = bv, bn[11] = bt, bn[12] = bQ, bn[13] = z) : z = bn[13];
                let {
                    matchingApp: bR,
                    pluginIcon: bS
                } = (0, aB.c)(z), bT = (0, p.a)(), {
                    platform: bU
                } = (0, O.a)();
                bn[14] !== bQ.callId ? (G = (0, m.ef)(bQ.callId), bn[14] = bQ.callId, bn[15] = G) : G = bn[15];
                let bV = G,
                    bW = (0, l.x)(ad.u, bV),
                    bX = (0, l.x)(ad.h, bV),
                    bY = (0, l.x)(ad.p, bV),
                    bZ = bX?.content.toolCallStatus == null && bX?.content.toolResult != null;
                bn[16] !== bt || bn[17] !== bQ || bn[18] !== bW || bn[19] !== bZ ? (Q = (0, aD.a)({
                    item: bQ,
                    hostId: bt,
                    retainedState: {
                        sourceId: bW,
                        hasSuccessfulToolResult: bZ
                    }
                }), bn[16] = bt, bn[17] = bQ, bn[18] = bW, bn[19] = bZ, bn[20] = Q) : Q = bn[20];
                let b$ = Q;
                bn[21] !== b$ || bn[22] !== bH ? (af = bH && (0, V.c)() && b$.isEligible, bn[21] = b$, bn[22] = bH, bn[23] = af) : af = bn[23];
                let b_ = af;
                bn[24] !== bq || bn[25] !== bQ.callId ? (ai = (0, W.a)({
                    callId: bQ.callId,
                    conversationId: bq
                }), bn[24] = bq, bn[25] = bQ.callId, bn[26] = ai) : ai = bn[26];
                let b0 = ai,
                    b1 = (0, l.x)(W.b, b0);
                (0, ah.f)("2957382457");
                let b2 = (0, l.z)(w.a);
                bn[27] !== bq || bn[28] !== b_ ? (aj = b_ || !bq.startsWith("chatgpt:"), bn[27] = bq, bn[28] = b_, bn[29] = aj) : aj = bn[29], bn[30] !== bq || bn[31] !== bt || bn[32] !== bQ || bn[33] !== bY || bn[34] !== b_ || bn[35] !== aj ? (ao = {
                    item: bQ,
                    hostId: bt,
                    conversationId: bq,
                    fallback: bY,
                    enabled: b_,
                    catalogEnabled: aj
                }, bn[30] = bq, bn[31] = bt, bn[32] = bQ, bn[33] = bY, bn[34] = b_, bn[35] = aj, bn[36] = ao) : ao = bn[36];
                let b3 = (0, aB.a)(ao),
                    {
                        isCodexAppsToolCall: b4,
                        successfulToolResult: b5,
                        resourceUri: b6,
                        toolDefinition: b7
                    } = b3,
                    {
                        elementHeightPx: b8,
                        elementRef: b9
                    } = (0, au.a)(),
                    ca = bQ.result?.type === "success" ? bQ.result.content : null,
                    cb = bQ.result?.type === "error" ? bQ.result.error : null;
                bn[37] !== bQ || bn[38] !== bU ? (aK = (0, as.d)({
                    item: bQ,
                    platform: bU
                }), bn[37] = bQ, bn[38] = bU, bn[39] = aK) : aK = bn[39];
                let cc = aK,
                    cd = cc?.nativeAppReference ?? null,
                    ce = (0, ax.b)(cd),
                    cf = ce?.appPath ?? null;
                bn[40] !== cf ? (aP = {
                    appPath: cf
                }, bn[40] = cf, bn[41] = aP) : aP = bn[41];
                let {
                    iconSmall: cg
                } = (0, A.a)(aP);
                bn[42] !== bQ || bn[43] !== bR || bn[44] !== bC ? (aQ = void 0 === bC ? (0, aw.d)(bQ, null == bR ? [] : [bR])?.icon : bC, bn[42] = bQ, bn[43] = bR, bn[44] = bC, bn[45] = aQ) : aQ = bn[45];
                let ch = aQ;
                if (void 0 === bC && null != ch) {
                    let a, b;
                    bn[46] !== bR ? (a = null == bR ? [] : [bR], bn[46] = bR, bn[47] = a) : a = bn[47], bn[48] !== ch || bn[49] !== bQ || bn[50] !== bG || bn[51] !== a ? (b = (0, d.jsx)(ae.a, {
                        item: bQ,
                        apps: a,
                        part: "icon",
                        loadMetadata: bG,
                        children: ch
                    }), bn[48] = ch, bn[49] = bQ, bn[50] = bG, bn[51] = a, bn[52] = b) : b = bn[52], ch = b
                }
                let ci = bQ.source?.kind === "browserUse" && "cdp" === bQ.source.backend ? L.b : g.a;
                bn[53] !== bQ.source?.kind || bn[54] !== b5 ? (aR = bQ.source?.kind === "browserUse" && null != b5 ? (0, v.a)(b5._meta) : null, bn[53] = bQ.source?.kind, bn[54] = b5, bn[55] = aR) : aR = bn[55];
                let cj = aR,
                    ck = b2 && !bE && bQ.completed && (0, m.wi)(bQ.invocation.server) && "js" === bQ.invocation.tool && null != b5 ? (0, av.a)(b5._meta) : [],
                    cl = bR ?? null;
                bn[56] !== bT || bn[57] !== bQ.appContext || bn[58] !== bQ.completed || bn[59] !== bQ.invocation.arguments || bn[60] !== bQ.invocation.server || bn[61] !== bQ.invocation.tool || bn[62] !== bQ.nodeReplActivityTitle || bn[63] !== bQ.pluginId || bn[64] !== bQ.result || bn[65] !== bQ.source || bn[66] !== bQ.toolDisplay || bn[67] !== ce || bn[68] !== bU || bn[69] !== cl || bn[70] !== b7 ? (aS = (0, aE.b)({
                    pluginId: bQ.pluginId,
                    toolDisplay: bQ.toolDisplay,
                    toolDefinition: b7,
                    appContext: bQ.appContext,
                    completed: bQ.completed,
                    intl: bT,
                    toolName: bQ.invocation.tool,
                    serverName: bQ.invocation.server,
                    matchingApp: cl,
                    nativeDesktopAppMetadata: ce,
                    platform: bU,
                    source: bQ.source,
                    nodeReplActivityTitle: bQ.nodeReplActivityTitle,
                    toolArguments: bQ.invocation.arguments,
                    toolResult: bQ.result
                }), bn[56] = bT, bn[57] = bQ.appContext, bn[58] = bQ.completed, bn[59] = bQ.invocation.arguments, bn[60] = bQ.invocation.server, bn[61] = bQ.invocation.tool, bn[62] = bQ.nodeReplActivityTitle, bn[63] = bQ.pluginId, bn[64] = bQ.result, bn[65] = bQ.source, bn[66] = bQ.toolDisplay, bn[67] = ce, bn[68] = bU, bn[69] = cl, bn[70] = b7, bn[71] = aS) : aS = bn[71];
                let {
                    label: cm,
                    readsPlainText: cn
                } = aS, co = b_ && null != b6 && b$.isRenderable, cp = (0, l.x)(null != by && co ? ad.j : null, bV), {
                    access: cq,
                    resource: cr,
                    renderData: cs,
                    state: ct,
                    refetch: cu
                } = (0, aB.b)(b3, co), cv = bX?.sessionId == null ? null : bX.content.resource, cw = null == cv ? cr?.resourceIdentityVerified : bX?.content.mcpAppScope.resourceIdentityVerified, cx = null == cv ? ct.error : null, cy = co && null == cv && ct.isLoading, cz = (0, l.x)(ad.r, bV), cA = (0, l.x)(ad.n, bV), cB = (0, _.a)({
                    hasResourceError: null != cx,
                    isResourceLoading: cy,
                    isDilEnabled: !1,
                    renderData: cv ?? cs,
                    resourceUri: b6 ?? null,
                    shouldRenderMcpApp: co
                }), cC = "html" === cB.kind ? cB.renderData : null, cD = (0, aa.e)({
                    data: cC,
                    error: cx,
                    isLoading: cy
                }, ad.H), cE = "fallback" !== cB.kind, cF = b_ && null != b6 && (!cE || null != cx || null != cz && !(cz instanceof aa.b) || "too-large" === cD.kind || "error" === cD.kind), cG = cF || (cC?.isCollapsible ?? !0), cH = cA;
                cF ? cH = "fallback" : "html" !== cB.kind && (cH = cB.kind);
                let cI = "pending" === cH,
                    cJ = "launcher" === cH,
                    cK = cI || cJ;
                bn[72] !== bX ? (aT = null != bX && bX.content.resource?.hideAttribution === !0 && (!0 === bX.content.mcpAppScope.isVerifiedFirstParty || (0, aC.b)(bX.content)), bn[72] = bX, bn[73] = aT) : aT = bn[73];
                let cL = aT,
                    cM = "inline" === cH,
                    cN = void 0 !== bA && bA && co,
                    cO = !cF && bN || cN,
                    cP = cE && !cJ && (!cG || (b1 ?? cO)),
                    cQ = cP && !cI,
                    cR = cM && cQ,
                    cS = bN || (b1 ?? cN),
                    [cT, cU] = (0, o.useState)(!1),
                    cV = cR && cT,
                    cW = cy || cI && cP;
                bn[74] !== cP || bn[75] !== cV || bn[76] !== cW ? (aU = {
                    isLoading: cW,
                    isInlineRequested: cP,
                    isInlineOpening: cV
                }, bn[74] = cP, bn[75] = cV, bn[76] = cW, bn[77] = aU) : aU = bn[77];
                let cX = (0, T.d)(bV, aU),
                    cY = !cF && (cI || "html" === cB.kind) ? cX : null;
                bn[78] !== b7 ? (aV = (0, ab.b)(b7)?.resourceUri, bn[78] = b7, bn[79] = aV) : aV = bn[79];
                let cZ = aV,
                    c$ = b5?._meta;
                bn[80] !== c$ ? (aW = k()(c$, ["_codex_apps", "resource_uri"]), bn[80] = c$, bn[81] = aW) : aW = bn[81];
                let c_ = aW;
                bn[82] !== cZ || bn[83] !== b4 || bn[84] !== b6 || bn[85] !== c_ || bn[86] !== b7?._meta ? (aX = b4 && null != cZ && c_ === cZ && (0, m.Mg)(b7?._meta) === b6, bn[82] = cZ, bn[83] = b4, bn[84] = b6, bn[85] = c_, bn[86] = b7?._meta, bn[87] = aX) : aX = bn[87];
                let c0 = !(aX && !0 === cw && (0, T.b)({
                    isInline: !cG && ("inline" === cH || cI),
                    status: cY,
                    hidesAttributionAndActions: cC?.hideAttribution === !0 && !0 === cC.hideActions
                })) && (cK || !bE && (cG || "html" === cB.kind && !cL));
                bn[88] !== b4 || bn[89] !== bQ.appContext?.appName || bn[90] !== bQ.invocation.server || bn[91] !== bR?.name || bn[92] !== bS?.alt ? (aY = bR?.name ?? bQ.appContext?.appName ?? bS?.alt ?? (b4 ? null : (0, n.a)(bQ.invocation.server)), bn[88] = b4, bn[89] = bQ.appContext?.appName, bn[90] = bQ.invocation.server, bn[91] = bR?.name, bn[92] = bS?.alt, bn[93] = aY) : aY = bn[93];
                let c1 = aY;
                bn[94] !== c1 || bn[95] !== b7 ? (aZ = (0, T.a)((0, s.a)(b7), c1), bn[94] = c1, bn[95] = b7, bn[96] = aZ) : aZ = bn[96];
                let c2 = aZ,
                    c3 = cF ? bE || bN : !cK && (bE || (cE ? cQ : cS)),
                    {
                        detailsEntityKey: c4,
                        callId: c5
                    } = bQ;
                bn[97] !== c5 || bn[98] !== bq || bn[99] !== c4 || bn[100] !== bt || bn[101] !== c3 || bn[102] !== bJ ? (a$ = () => {
                    if (c3 && null != c4) return (0, r.j)(bJ, {
                        hostId: bt,
                        threadId: bq,
                        entityKey: c4,
                        itemId: c5
                    })
                }, a_ = [c3, c4, c5, bt, bq, bJ], bn[97] = c5, bn[98] = bq, bn[99] = c4, bn[100] = bt, bn[101] = c3, bn[102] = bJ, bn[103] = a$, bn[104] = a_) : (a$ = bn[103], a_ = bn[104]), (0, o.useEffect)(a$, a_);
                a: {
                    let a, b, c, d;
                    if (!c3) {
                        let a;
                        bn[105] !== ca ? (a = {
                            displayContent: ca,
                            displayStructuredContentJson: null
                        }, bn[105] = ca, bn[106] = a) : a = bn[106], a0 = a;
                        break a
                    }
                    bn[107] !== bQ.result ? (a = bQ.result?.type === "success" && null != bQ.result.structuredContent ? aN(bQ.result.structuredContent, 2) : null, bn[107] = bQ.result, bn[108] = a) : a = bn[108];
                    let e = a;bn[109] !== ca || bn[110] !== bF || bn[111] !== e ? (b = bF && null != e && null != ca ? ca.filter(aL) : ca, bn[109] = ca, bn[110] = bF, bn[111] = e, bn[112] = b) : b = bn[112];
                    let f = b;bn[113] !== f ? (c = function(a) {
                        if (a?.length !== 1) return null;
                        let [b] = a;
                        if ("text" !== b.type || null != b.annotations) return null;
                        let c = b.text.trim();
                        if ("{" !== c[0] && "[" !== c[0]) return null;
                        try {
                            return aN(JSON.parse(c), 2)
                        } catch {
                            return null
                        }
                    }(f), bn[113] = f, bn[114] = c) : c = bn[114];
                    let g = c;
                    if (null == g) {
                        let a;
                        bn[115] !== e || bn[116] !== f ? (a = {
                            displayContent: f,
                            displayStructuredContentJson: e
                        }, bn[115] = e, bn[116] = f, bn[117] = a) : a = bn[117], a0 = a;
                        break a
                    }
                    if (null == e || g === e) {
                        let a, b;
                        bn[118] === Symbol.for("react.memo_cache_sentinel") ? (a = [], bn[118] = a) : a = bn[118];
                        let c = e ?? g;
                        bn[119] !== c ? (b = {
                            displayContent: a,
                            displayStructuredContentJson: c
                        }, bn[119] = c, bn[120] = b) : b = bn[120], a0 = b;
                        break a
                    }
                    bn[121] !== e || bn[122] !== f ? (d = {
                        displayContent: f,
                        displayStructuredContentJson: e
                    }, bn[121] = e, bn[122] = f, bn[123] = d) : d = bn[123],
                    a0 = d
                }
                let {
                    displayContent: c6,
                    displayStructuredContentJson: c7
                } = a0, [c8, c9] = (0, o.useState)(!1);
                b: {
                    let a;
                    if (!c8) {
                        a1 = null;
                        break b
                    }
                    bn[124] !== bQ.callId || bn[125] !== bQ.durationMs || bn[126] !== bQ.invocation || bn[127] !== bQ.result ? (a = aN({
                        callId: bQ.callId,
                        invocation: bQ.invocation,
                        durationMs: bQ.durationMs,
                        result: bQ.result
                    }, 2), bn[124] = bQ.callId, bn[125] = bQ.durationMs, bn[126] = bQ.invocation, bn[127] = bQ.result, bn[128] = a) : a = bn[128],
                    a1 = a
                }
                let da = a1;
                bn[129] !== bT ? (a2 = bT.formatMessage({
                    id: "codex.mcpTool.rawOutputTriggerTooltip",
                    defaultMessage: "Show raw tool call output"
                }), bn[129] = bT, bn[130] = a2) : a2 = bn[130];
                let db = a2,
                    dc = bQ.completed || null != bQ.result || !0 === bQ.liveDetailsDeferred || bN || cE;
                bn[131] !== bQ ? (a3 = (0, ar.a)(bQ), bn[131] = bQ, bn[132] = a3) : a3 = bn[132];
                let dd = a3,
                    de = !bE && !dd && !co && !cF,
                    df = !bQ.completed;
                bn[133] !== bR ? (a4 = null == bR ? [] : [bR], bn[133] = bR, bn[134] = a4) : a4 = bn[134], bn[135] !== bQ || bn[136] !== bG || bn[137] !== a4 || bn[138] !== cm ? (a5 = (0, d.jsx)(ae.a, {
                    item: bQ,
                    apps: a4,
                    part: "label",
                    loadMetadata: bG,
                    children: cm
                }), bn[135] = bQ, bn[136] = bG, bn[137] = a4, bn[138] = cm, bn[139] = a5) : a5 = bn[139], bn[140] !== df || bn[141] !== a5 ? (a6 = (0, d.jsx)(aG.a, {
                    active: df,
                    className: "min-w-0 shrink truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                    children: a5
                }), bn[140] = df, bn[141] = a5, bn[142] = a6) : a6 = bn[142];
                let dg = a6;
                bn[143] !== bq || bn[144] !== bQ || bn[145] !== dg ? (a7 = !bq.startsWith("chatgpt:") && (0, aF.b)(bQ) ? (0, d.jsxs)("span", {
                    className: "inline-flex max-w-full min-w-0 items-center gap-1 text-text-tertiary/90 group-hover/activity-header:text-default",
                    children: [dg, (0, d.jsx)("span", {
                        "aria-hidden": "true",
                        className: "before:content-['\xb7']"
                    }), (0, d.jsx)("span", {
                        className: "shrink-0",
                        children: (0, d.jsx)(q.a, {
                            id: "codex.mcpTool.timedOutStatus",
                            defaultMessage: "Timed out"
                        })
                    })]
                }) : dg, bn[143] = bq, bn[144] = bQ, bn[145] = dg, bn[146] = a7) : a7 = bn[146];
                let dh = a7;
                bn[147] !== ch || bn[148] !== ci || bn[149] !== cj || bn[150] !== bt || bn[151] !== bQ || bn[152] !== bG || bn[153] !== bR || bn[154] !== cg || bn[155] !== ce?.displayName || bn[156] !== cd || bn[157] !== cc || bn[158] !== bS ? (a8 = void 0 !== ch ? ch : (0, d.jsx)(aq.a, {
                    hostId: bt,
                    item: bQ,
                    loadRemoteLogos: bG,
                    fallback: null == bS && null != cd ? (0, d.jsx)(B.a, {
                        alt: ce?.displayName ?? cc?.name ?? bQ.invocation.server,
                        className: "icon-xs shrink-0 scale-[1.15] object-contain",
                        loadRemote: bG,
                        logoUrl: cg,
                        logoDarkUrl: null,
                        fallback: (0, d.jsx)(K.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: aH.a
                        })
                    }) : null == bS && cc?.groupKey === as.b ? (0, d.jsx)(K.a, {
                        className: "shrink-0 text-secondary",
                        asset: aH.a
                    }) : null == bS && cc?.logoUrl != null ? (0, d.jsx)(B.a, {
                        alt: cc.name,
                        className: "icon-xs shrink-0 object-contain",
                        loadRemote: bG,
                        logoUrl: cc.logoUrl,
                        logoDarkUrl: null,
                        fallback: (0, d.jsx)(K.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: aI.a
                        })
                    }) : null == bS && cc?.usesBrowserIcon === !0 ? null == cj ? (0, d.jsx)(K.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: ci
                    }) : (0, d.jsx)(J.a, {
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        href: cj,
                        loadRemote: bG
                    }) : null == bS && (0, m.wi)(bQ.invocation.server) ? (0, d.jsx)(K.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: aJ.a
                    }) : (0, d.jsx)(B.a, {
                        alt: bS?.alt ?? bR?.name ?? bQ.appContext?.appName ?? bQ.invocation.server,
                        appInfo: null == bS ? bR : null,
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        loadRemote: bG,
                        knownAppId: bS?.knownAppId ?? bQ.appContext?.appName ?? bQ.appContext?.connectorId,
                        logoUrl: bS?.logoUrl,
                        fallback: (0, d.jsx)(K.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: aI.a
                        })
                    })
                }), bn[147] = ch, bn[148] = ci, bn[149] = cj, bn[150] = bt, bn[151] = bQ, bn[152] = bG, bn[153] = bR, bn[154] = cg, bn[155] = ce?.displayName, bn[156] = cd, bn[157] = cc, bn[158] = bS, bn[159] = a8) : a8 = bn[159];
                let di = a8;
                bn[160] !== dh || bn[161] !== bI || bn[162] !== di ? (a9 = bI ?? (0, d.jsxs)(d.Fragment, {
                    children: [di, dh]
                }), bn[160] = dh, bn[161] = bI, bn[162] = di, bn[163] = a9) : a9 = bn[163];
                let dj = a9;
                bn[164] !== cS || bn[165] !== cP || bn[166] !== bN || bn[167] !== b0 || bn[168] !== bw || bn[169] !== bJ || bn[170] !== bO || bn[171] !== cN || bn[172] !== cF || bn[173] !== cE || bn[174] !== cM || bn[175] !== bD || bn[176] !== b1 ? (ba = () => {
                    if (cF) {
                        bN || bw?.(), bO(!bN);
                        return
                    }
                    let a = cE ? !cP : !cS;
                    if (a && bw?.(), cE) {
                        cU(a && cM), bJ.set(W.b, b0, a);
                        return
                    }
                    a && null != bD && (0, at.b)(bJ, bD), !a && (!0 === b1 || cN) && bJ.set(W.b, b0, !1), bO(a)
                }, bn[164] = cS, bn[165] = cP, bn[166] = bN, bn[167] = b0, bn[168] = bw, bn[169] = bJ, bn[170] = bO, bn[171] = cN, bn[172] = cF, bn[173] = cE, bn[174] = cM, bn[175] = bD, bn[176] = b1, bn[177] = ba) : ba = bn[177];
                let dk = ba;
                bn[178] !== bQ.automaticApprovalReviews ? (bb = null == bQ.automaticApprovalReviews ? null : (0, d.jsx)(ap.a, {}), bn[178] = bQ.automaticApprovalReviews, bn[179] = bb) : bb = bn[179];
                let dl = bb,
                    dm = cR && (cC?.prefersBorder ?? bX?.content.resource?.prefersBorder ?? !0),
                    dn = dc && "opening" !== cY && !cJ && cG ? {
                        alignEnd: dm,
                        expanded: c3,
                        onToggle: dk
                    } : void 0,
                    dp = (0, h.b)("group", dm && "overflow-hidden rounded-lg border border-strong bg-surface"),
                    dq = (0, h.b)((cJ || cR) && "w-full", dm && "px-4 py-2.5");
                bn[180] !== cu ? (bc = () => {
                    cu({
                        cancelRefetch: !1
                    })
                }, bn[180] = cu, bn[181] = bc) : bc = bn[181];
                let dr = (0, d.jsx)($.a, {
                    hostDisplayModes: ad.H,
                    resource: {
                        data: null == b6 ? null : cC,
                        error: cx,
                        isLoading: cy
                    },
                    inlineSurface: cM ? "card" : "standalone",
                    mcpAppId: bV,
                    appName: c1 ?? void 0,
                    presentation: cF ? "inline" : cA,
                    onRetryResourceRead: bc,
                    showLoadingStatus: !c0
                });
                bn[182] !== bt || bn[183] !== bQ ? (bd = (0, aA.b)(bQ, bt), bn[182] = bt, bn[183] = bQ, bn[184] = bd) : bd = bn[184];
                let ds = bd,
                    dt = cK && cP,
                    du = () => {
                        let a;
                        return a = null != ds ? (0, d.jsx)(az.a, {
                            ...ds
                        }) : !0 === bQ.liveDetailsDeferred ? c3 ? (0, d.jsx)(M.a, {
                            className: "icon-sm"
                        }) : null : (0, d.jsxs)(d.Fragment, {
                            children: [cE ? cV ? (0, d.jsx)(Y.a, {
                                className: "w-full",
                                height: (0, X.a)(null, cC?.heightHint ?? null, cC?.minFrameHeight ?? null, "card"),
                                showLoadingStatus: !1
                            }) : dr : c6 && c6.length > 0 ? (0, d.jsx)("div", {
                                className: (0, h.b)("[&_*]:text-text/50", "flex flex-col gap-0.5"),
                                children: c6.map((a, b) => (0, d.jsx)(aO, {
                                    block: a,
                                    conversationId: bq,
                                    hostId: bt
                                }, b))
                            }) : cb ? (0, d.jsx)(N.a, {
                                className: "w-full",
                                fullWidth: !0,
                                level: "danger",
                                children: (0, d.jsx)("div", {
                                    className: "max-h-48 overflow-auto text-size-chat whitespace-pre-wrap",
                                    children: cb
                                })
                            }) : c7 ? null : (0, d.jsx)("p", {
                                className: "text-codex-description/80",
                                children: (0, d.jsx)(q.a, {
                                    id: "codex.mcpTool.noResult",
                                    defaultMessage: "Tool returned no content"
                                })
                            }), !cy && !cV && !cE && c7 && (0, d.jsx)(F.CodeSnippet, {
                                codeContainerClassName: "max-h-48 overflow-auto",
                                language: "json",
                                content: c7,
                                showStickyRightContent: !1
                            }), !cy && !cV && (0, d.jsx)(H.a, {
                                open: c8,
                                onOpenChange: c9,
                                triggerContent: (0, d.jsx)("div", {
                                    className: (0, h.b)("inline-flex w-fit", co && "absolute right-1 bottom-2 z-50"),
                                    children: (0, d.jsx)(f.a, {
                                        side: "top",
                                        align: "center",
                                        content: db,
                                        children: (0, d.jsx)(E.a, {
                                            className: "cursor-interaction opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 focus-visible:opacity-100",
                                            "aria-label": db,
                                            color: "ghost",
                                            onClick: () => {
                                                c9(!0)
                                            },
                                            size: "icon",
                                            children: (0, d.jsx)(P.a, {
                                                className: "icon-xxs"
                                            })
                                        })
                                    })
                                }),
                                children: (0, d.jsxs)(I.b, {
                                    children: [(0, d.jsx)(I.e, {
                                        children: (0, d.jsx)(I.d, {
                                            title: (0, d.jsx)(H.f, {
                                                children: (0, d.jsx)(q.a, {
                                                    id: "codex.mcpTool.rawOutputHeading",
                                                    defaultMessage: "Raw {server}.{tool} tool call output",
                                                    values: {
                                                        server: bQ.invocation.server,
                                                        tool: bQ.invocation.tool
                                                    }
                                                })
                                            })
                                        })
                                    }), (0, d.jsx)(I.e, {
                                        children: null == da ? null : (0, d.jsx)(F.CodeSnippet, {
                                            codeContainerClassName: "max-h-128 overflow-auto",
                                            language: "json",
                                            content: da,
                                            showStickyRightContent: !0
                                        })
                                    })]
                                })
                            })]
                        }), (0, d.jsxs)(al.a, {
                            ref: de || cM ? void 0 : b9,
                            className: (0, h.b)(co && "relative", !cG && "py-1"),
                            variant: cG && !dm && (c0 || !cM) ? "default" : "flush",
                            children: [null == bQ.automaticApprovalReviews ? null : (0, d.jsx)(ap.d, {
                                className: dm ? "px-4" : void 0,
                                isExpandable: !cM,
                                reviews: bQ.automaticApprovalReviews
                            }), a]
                        })
                    },
                    dv = de ? null : (0, d.jsxs)(d.Fragment, {
                        children: [dd ? (0, d.jsx)(al.a, {
                            children: (0, d.jsx)(N.a, {
                                className: "w-full",
                                fullWidth: !0,
                                level: "warning",
                                actions: null == bx ? void 0 : (0, d.jsx)(E.a, {
                                    color: "secondary",
                                    onClick: bx,
                                    children: (0, d.jsx)(q.a, {
                                        id: "codex.mcpTool.reviewPermissions",
                                        defaultMessage: "Review permissions"
                                    })
                                }),
                                children: null == bx ? (0, d.jsx)(q.a, {
                                    id: "codex.mcpTool.approvalRequestsDisabled",
                                    defaultMessage: "Approval requests were disabled for this tool call. If available, review this chat\u2019s permissions before retrying."
                                }) : (0, d.jsx)(q.a, {
                                    id: "codex.mcpTool.approvalRequestsDisabled.recovery",
                                    defaultMessage: "Approval requests were disabled for this tool call. Choose \u201CAsk for approval\u201D in this chat\u2019s permissions if available, then ask to retry."
                                })
                            })
                        }) : null, cK ? dr : (0, d.jsx)(C.a, {
                            expanded: c3,
                            height: cM ? "auto" : b8,
                            onExpandComplete: cQ ? () => cU(!1) : void 0,
                            children: c3 ? du() : null
                        })]
                    });
                bn[185] !== dn || bn[186] !== de || bn[187] !== dv || bn[188] !== du ? (be = de ? {
                    disclosure: dn && {
                        ...dn,
                        details: du
                    }
                } : {
                    externalDisclosure: dn,
                    body: dv
                }, bn[185] = dn, bn[186] = de, bn[187] = dv, bn[188] = du, bn[189] = be) : be = bn[189];
                let dw = be;
                bn[190] !== dl || bn[191] !== dn || bn[192] !== dq || bn[193] !== cy || bn[194] !== dv || bn[195] !== bV || bn[196] !== dw || bn[197] !== dj || bn[198] !== di || bn[199] !== c2 || bn[200] !== cY ? (bf = null != cY ? (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(U.a, {
                        accessory: dl,
                        className: dq,
                        disabled: cy,
                        disclosure: dn,
                        icon: di,
                        mcpAppId: bV,
                        name: c2,
                        status: cY
                    }), dv]
                }) : (0, d.jsx)(am.a, {
                    accessory: dl,
                    className: dq,
                    ...dw,
                    children: dj
                }), bn[190] = dl, bn[191] = dn, bn[192] = dq, bn[193] = cy, bn[194] = dv, bn[195] = bV, bn[196] = dw, bn[197] = dj, bn[198] = di, bn[199] = c2, bn[200] = cY, bn[201] = bf) : bf = bn[201];
                let dx = bf;
                bn[202] !== bQ ? (bg = (0, u.a)(bQ), bn[202] = bQ, bn[203] = bg) : bg = bn[203];
                let dy = bg;
                if (b_ && null != cq && b3.toolScope?.kind === "target") {
                    let a;
                    bn[204] !== bQ ? (a = (0, R.a)(bQ), bn[204] = bQ, bn[205] = a) : a = bn[205];
                    let b = a;
                    if (null != b) {
                        let a, c, e;
                        return bn[206] !== b3.toolScope || bn[207] !== bQ.appContext || bn[208] !== bQ.callId || bn[209] !== bQ.invocation.tool || bn[210] !== bQ.invocationResourceUri ? (a = {
                            appContext: bQ.appContext,
                            codexAppsToolScope: b3.toolScope,
                            invocationResourceUri: bQ.invocationResourceUri,
                            originCallId: bQ.callId,
                            originResourceUri: null,
                            originTool: bQ.invocation.tool
                        }, bn[206] = b3.toolScope, bn[207] = bQ.appContext, bn[208] = bQ.callId, bn[209] = bQ.invocation.tool, bn[210] = bQ.invocationResourceUri, bn[211] = a) : a = bn[211], bn[212] !== cq || bn[213] !== bq || bn[214] !== bt || bn[215] !== a ? (c = {
                            hostId: bt,
                            conversationId: bq,
                            access: cq,
                            mcpAppScope: a
                        }, bn[212] = cq, bn[213] = bq, bn[214] = bt, bn[215] = a, bn[216] = c) : c = bn[216], bn[217] !== b || bn[218] !== c ? (e = (0, d.jsx)(Z.a, {
                            call: b,
                            content: c
                        }), bn[217] = b, bn[218] = c, bn[219] = e) : e = bn[219], e
                    }
                }
                if (null != dy) {
                    let a;
                    return bn[220] !== dy.id || bn[221] !== dy.schedule || bn[222] !== dy.title ? (a = (0, d.jsx)(S.a, {
                        id: dy.id,
                        mode: "view",
                        name: dy.title,
                        rrule: dy.schedule
                    }), bn[220] = dy.id, bn[221] = dy.schedule, bn[222] = dy.title, bn[223] = a) : a = bn[223], a
                }
                bn[224] !== bt || bn[225] !== bQ ? (bh = (0, t.a)(bQ, bt), bn[224] = bt, bn[225] = bQ, bn[226] = bh) : bh = bn[226];
                let dz = bh;
                if (dz?.type === "chatgpt-automation") {
                    let a;
                    return bn[227] !== dz ? (a = (0, d.jsx)(x.a, {
                        automation: dz
                    }), bn[227] = dz, bn[228] = a) : a = bn[228], a
                }
                if (dz?.type === "chatgpt-automation-list") {
                    let a;
                    return bn[229] !== dz.automations ? (a = (0, d.jsx)(y.a, {
                        automations: dz.automations
                    }), bn[229] = dz.automations, bn[230] = a) : a = bn[230], a
                }
                let dA = co && !cF ? by : void 0;
                bn[231] !== dt || bn[232] !== ds || bn[233] !== cn || bn[234] !== bI ? (bi = null != ds && (dt || null == bI && cn) ? (0, d.jsx)(az.a, {
                    ...ds,
                    quiet: !dt
                }) : null, bn[231] = dt, bn[232] = ds, bn[233] = cn, bn[234] = bI, bn[235] = bi) : bi = bn[235], bn[236] !== cP || bn[237] !== bV || bn[238] !== bH || bn[239] !== bJ || bn[240] !== co ? (bj = bH || "chatgpt-thread" !== bJ.value.routeKind ? (0, d.jsx)(ac.b, {
                    mcpAppId: bV,
                    isInlineRequested: co && cP
                }) : null, bn[236] = cP, bn[237] = bV, bn[238] = bH, bn[239] = bJ, bn[240] = co, bn[241] = bj) : bj = bn[241], bn[242] !== dh || bn[243] !== dl || bn[244] !== dp || bn[245] !== c0 || bn[246] !== dq || bn[247] !== cI || bn[248] !== dv || bn[249] !== cp || bn[250] !== dw || bn[251] !== cM || bn[252] !== bI || bn[253] !== bC || bn[254] !== dx || bn[255] !== dA || bn[256] !== cY ? (bk = void 0 !== bC && c0 && null == cY ? (0, d.jsx)(ak.a, {
                    accessory: dl,
                    ...dw,
                    className: dp,
                    "data-mcp-app-card": !!cM || void 0,
                    headerClassName: dq,
                    icon: bC,
                    summary: bI ?? dh
                }) : (0, d.jsx)(an.a, {
                    className: dp,
                    "data-mcp-app-card": !!cM || void 0,
                    "data-response-body": dA,
                    "data-response-widget-pending": null != dA && (cI || cp) ? "" : void 0,
                    children: c0 ? dx : dv
                }), bn[242] = dh, bn[243] = dl, bn[244] = dp, bn[245] = c0, bn[246] = dq, bn[247] = cI, bn[248] = dv, bn[249] = cp, bn[250] = dw, bn[251] = cM, bn[252] = bI, bn[253] = bC, bn[254] = dx, bn[255] = dA, bn[256] = cY, bn[257] = bk) : bk = bn[257], bn[258] !== cj || bn[259] !== bQ.callId || bn[260] !== bG ? (bl = (a, b) => (0, d.jsxs)(o.Fragment, {
                    children: [(0, d.jsx)(ay.a, {
                        variant: "activity"
                    }), (0, d.jsx)(aM, {
                        call: a,
                        fallbackPageUrl: cj,
                        loadRemoteLogos: bG
                    })]
                }, `${bQ.callId}:webmcp:${b}:${a.name}`), bn[258] = cj, bn[259] = bQ.callId, bn[260] = bG, bn[261] = bl) : bl = bn[261];
                let dB = ck.map(bl);
                return bn[262] !== bi || bn[263] !== bj || bn[264] !== bk || bn[265] !== dB ? (bm = (0, d.jsxs)(d.Fragment, {
                    children: [bi, bj, bk, dB]
                }), bn[262] = bi, bn[263] = bj, bn[264] = bk, bn[265] = dB, bn[266] = bm) : bm = bn[266], bm
            }
        })
    }),
    KU8M: (function(a, b, c) {
        var d = c("Q840"),
            e = c("KvQL"),
            f = c("KJ1J"),
            g = c("YqAS"),
            h = c("W10I"),
            i = c("a4MG"),
            j = c("OWtl");
        let k = (0, d.d)(j.a, (a, b) => {
                let {
                    hostId: c,
                    threadId: d,
                    ...j
                } = a, {
                    get: k
                } = b;
                if (null == d) return k(i.r, c);
                let l = {
                    hostId: c,
                    threadId: d,
                    serverName: j.server
                };
                if (!(0, f.f)(j.server) || j.appContext?.linkId == null) return k(i.s, l);
                let m = k(i.r, c);
                if (m.isError) return k(i.s, l);
                let n = (0, h.b)({
                    ...j,
                    mcpServerStatuses: m.data
                });
                return void 0 === n || (0, e.Mg)(n?._meta) === j.appContext.resourceUri && null != (0, g.c)(n, j.appContext) ? m : k(i.s, l)
            }),
            l = (0, d.d)(j.a, (a, b) => {
                let {
                    appContext: c,
                    hostId: d,
                    invocationResourceUri: e,
                    server: h,
                    threadId: i,
                    tool: j
                } = a, {
                    get: l
                } = b;
                if (!(0, f.f)(h)) return null;
                let m = l(k, {
                    appContext: c,
                    hostId: d,
                    invocationResourceUri: e,
                    server: h,
                    threadId: i,
                    tool: j
                }).data?.data.find(a => a.name === h);
                if (null == m && null == e && c?.linkId == null) return;
                let n = Object.values(m?.tools ?? {}).filter(a => null != a);
                return (0, g.d)({
                    appContext: c,
                    invocationResourceUri: e,
                    originTool: j,
                    originToolDefinition: m?.tools[j],
                    server: h,
                    tools: n
                })
            }, {
                isEqual: g.f
            });
        c.d(b, {}, {
            a: k,
            b: l
        })
    }),
    GmdE: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("KvQL"),
            h = c("sM3V"),
            i = c("KJ1J"),
            j = c("KaH3"),
            k = c("Nj7b"),
            l = c("FvYa"),
            m = c("HOLv"),
            n = c("zUz7"),
            o = c("LF5P"),
            p = c("TDH1");
        c.d(b, {}, {
            a: function(a) {
                let b, c, q = (0, e.c)(9),
                    {
                        fallback: r,
                        hostId: s,
                        item: t,
                        loadRemoteLogos: u
                    } = a,
                    v = t.appContext?.connectorId === k.b || (0, j.g)(t),
                    w = (0, f.x)(!u || v || null != (0, o.d)({
                        item: t
                    }) || (0, g.wi)(t.invocation.server) || (0, i.f)(t.invocation.server) ? null : h.a, {
                        hostId: s,
                        serverName: t.invocation.server,
                        threadId: (0, g.Xe)(t.threadId)
                    })?.serverInfo;
                if (v) {
                    let a;
                    return q[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(m.a, {
                        className: "shrink-0 text-tertiary",
                        asset: p.a
                    }), q[0] = a) : a = q[0], a
                }
                q[1] !== w ? (b = (0, n.a)(w), q[1] = w, q[2] = b) : b = q[2];
                let x = b;
                return q[3] !== r || q[4] !== x || q[5] !== t.invocation.server || q[6] !== w?.name || q[7] !== w?.title ? (c = null == x ? r : (0, d.jsx)(l.a, {
                    alt: w?.title ?? w?.name ?? t.invocation.server,
                    className: "icon-xs shrink-0 object-contain",
                    logoUrl: x.logoUrl,
                    logoDarkUrl: x.logoDarkUrl,
                    fallback: r
                }), q[3] = r, q[4] = x, q[5] = t.invocation.server, q[6] = w?.name, q[7] = w?.title, q[8] = c) : c = q[8], c
            }
        })
    }),
    ZiDw: (function(a, b, c) {
        var d = c("Q840"),
            e = c("tSEg");
        let f = (0, d.v)(e.a, a => null),
            g = (0, d.d)(e.a, (a, b) => {
                let {
                    get: c
                } = b;
                return null != a && c(f, h(a)) === a
            });

        function h(a) {
            let b = a.indexOf("\0");
            return -1 === b ? a : a.slice(0, b)
        }
        c.d(b, {}, {
            a: g,
            b: function(a, b) {
                a.set(f, h(b), b)
            }
        })
    }),
    SfaR: (function(a, b, c) {
        var d = c("lAQI");
        let e = d.m("kind", [d.F({
                kind: d.z("listTools"),
                name: d.z("webmcp_list_tools"),
                title: d.L().transform(a => a || void 0).optional(),
                description: d.L().optional(),
                readOnlyHint: d.j().optional(),
                sourceHostname: d.L().min(1).optional(),
                outputJson: d.L().optional(),
                outputTruncated: d.z(!0).optional()
            }), d.F({
                kind: d.z("invokeTool"),
                name: d.L().refine(a => a.trim().length > 0),
                title: d.L().transform(a => a || void 0).optional(),
                description: d.L().optional(),
                readOnlyHint: d.j().optional(),
                sourceHostname: d.L().min(1).optional(),
                inputJson: d.L().optional(),
                inputTruncated: d.z(!0).optional(),
                outputJson: d.L().optional(),
                outputTruncated: d.z(!0).optional()
            })]),
            f = d.F({
                "codex/toolSurface": d.F({
                    kind: d.z("browserUse"),
                    webMcpCalls: d.g(e)
                })
            });
        c.d(b, {}, {
            a: function(a) {
                let b = f.safeParse(a);
                return b.success ? b.data["codex/toolSurface"].webMcpCalls : []
            }
        })
    }),
    oKu4: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Wyro"),
            g = c.n(f),
            h = c("Q840"),
            i = c("KvQL"),
            j = c("Wf1j"),
            k = c("rEML"),
            l = c("qKlE"),
            m = c("OusJ"),
            n = c("odKs"),
            o = c("GIgU");
        c("bN4H");
        var p = c("TleN"),
            q = c("TL6G"),
            r = c("tSEg");

        function s(a) {
            return "string" == typeof a
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, f, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I = (0, e.c)(129),
                    {
                        elicitation: J,
                        result: K,
                        id: L,
                        kind: M,
                        mode: N,
                        name: O,
                        prompt: P,
                        rrule: Q,
                        projectId: R,
                        cwds: S,
                        destination: T,
                        executionEnvironment: U,
                        localEnvironmentConfigPath: V,
                        model: W,
                        reasoningEffort: X,
                        notificationPolicy: Y,
                        targetThreadId: Z,
                        status: $
                    } = a,
                    _ = void 0 === K ? null : K,
                    aa = (0, h.y)(r.a),
                    ab = (0, j.a)();
                (0, p.a)();
                let ac = (0, k._)("/local/:conversationId"),
                    ad = (0, h.z)(o.e),
                    ae = Z ?? null;
                I[0] !== S || I[1] !== T || I[2] !== U || I[3] !== L || I[4] !== M || I[5] !== V || I[6] !== N || I[7] !== W || I[8] !== O || I[9] !== Y || I[10] !== R || I[11] !== P || I[12] !== X || I[13] !== ae || I[14] !== Q || I[15] !== $ ? (b = JSON.stringify({
                    id: L,
                    kind: M,
                    mode: N,
                    name: O,
                    prompt: P,
                    rrule: Q,
                    projectId: R,
                    cwds: S,
                    destination: T,
                    executionEnvironment: U,
                    localEnvironmentConfigPath: V,
                    model: W,
                    reasoningEffort: X,
                    notificationPolicy: Y,
                    targetThreadId: ae,
                    status: $
                }), I[0] = S, I[1] = T, I[2] = U, I[3] = L, I[4] = M, I[5] = V, I[6] = N, I[7] = W, I[8] = O, I[9] = Y, I[10] = R, I[11] = P, I[12] = X, I[13] = ae, I[14] = Q, I[15] = $, I[16] = b) : b = I[16];
                let af = b,
                    ag = ad?.directiveKey === af ? ad.automationId : null,
                    ah = ag ?? _?.automationId ?? L,
                    ai = _?.snapshot ?? null,
                    aj = "view" === N ? N : null,
                    ak = "view" === N && null != L,
                    al = null != L && (ak || "suggested-update" === N),
                    am = (0, h.z)(l.h),
                    an = am.data,
                    ao = !!al && am.isLoading;
                if (I[17] !== an || I[18] !== ag || I[19] !== S || I[20] !== L || I[21] !== ab || I[22] !== ao || I[23] !== ak || I[24] !== M || I[25] !== N || I[26] !== O || I[27] !== R || I[28] !== P || I[29] !== ah || I[30] !== ae || I[31] !== _?.automationId || I[32] !== _?.mode || I[33] !== ai?.name || I[34] !== ai?.rrule || I[35] !== Q || I[36] !== $) {
                    var ap;
                    let a, b, d, e, h, j, k, l, m, o, p = null != L ? an?.items.find(a => a.id === L) ?? null : null;
                    I[46] !== an?.items || I[47] !== ag || I[48] !== ab || I[49] !== ao || I[50] !== ak || I[51] !== N || I[52] !== O || I[53] !== ah || I[54] !== _?.mode || I[55] !== ai?.name || I[56] !== ai?.rrule || I[57] !== Q ? ({
                        resolvedName: w,
                        resolvedRrule: d,
                        isLoadingView: b
                    } = function(a) {
                        let {
                            isViewMode: b,
                            mode: c,
                            isSuggestionAccepted: d,
                            trimmedId: e,
                            trimmedName: f,
                            trimmedRrule: g,
                            automations: h,
                            isLoading: i
                        } = a, j = "delete" !== c && (d || "suggested-create" !== c && "suggested-update" !== c) && null != e && h ? h.find(a => a.id === e) ?? null : null, k = j?.name ?? f ?? null;
                        return {
                            resolvedName: k,
                            resolvedRrule: j?.rrule ?? g ?? null,
                            isLoadingView: b && i && null == k
                        }
                    }({
                        isViewMode: ak,
                        mode: _?.mode ?? N,
                        isSuggestionAccepted: null != ag,
                        trimmedId: ah ?? null,
                        trimmedName: O ?? ai?.name ?? null,
                        trimmedRrule: Q ?? ai?.rrule ?? null,
                        automations: an?.items ?? null,
                        isLoading: ao
                    }), e = ab.formatMessage({
                        id: "settings.automations.rruleSummaryFallback",
                        defaultMessage: "Custom schedule"
                    }), h = (0, n.f)({
                        rrule: d,
                        intl: ab,
                        fallbackMessage: e
                    }), I[46] = an?.items, I[47] = ag, I[48] = ab, I[49] = ao, I[50] = ak, I[51] = N, I[52] = O, I[53] = ah, I[54] = _?.mode, I[55] = ai?.name, I[56] = ai?.rrule, I[57] = Q, I[58] = b, I[59] = w, I[60] = d, I[61] = e, I[62] = h) : (b = I[58], w = I[59], d = I[60], e = I[61], h = I[62]);
                    let q = h;
                    I[63] !== ab ? (j = ab.formatMessage({
                        id: "settings.automations.loading",
                        defaultMessage: "Loading\u2026"
                    }), I[63] = ab, I[64] = j) : j = I[64];
                    let r = j;
                    I[65] !== ab ? (k = ab.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task"
                    }), I[65] = ab, I[66] = k) : k = I[66];
                    let s = k;
                    I[67] !== N || I[68] !== _?.mode ? (l = _?.mode ?? N, I[67] = N, I[68] = _?.mode, I[69] = l) : l = I[69], c = (u = "delete" === (t = l)) || _?.automationId != null ? _?.automationId ?? L ?? null : ah, I[70] !== c || I[71] !== u ? (m = u ? (ap = c ?? null, 0 === (a = ap?.trim() ?? "").length ? null : /^[0-9a-f]{8}-[0-9a-f-]+$/i.test(a) ? a : g()(a.replace(/[-_]+/g, " "))) : null, I[70] = c, I[71] = u, I[72] = m) : m = I[72];
                    let A = m;
                    z = b ? r : w || A || s, I[73] !== A || I[74] !== ab || I[75] !== w ? (o = w ?? A ?? ab.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task"
                    }), I[73] = A, I[74] = ab, I[75] = w, I[76] = o) : o = I[76], y = o, v = q || (b ? r : null != d ? e : null), f = null != O && null != P && null != Q && ("heartbeat" === M ? null != ae : void 0 !== R || null != S), x = null != L && null != $ && null != O && null != P && null != Q && (null == p ? "heartbeat" === M ? null != ae : void 0 !== R || null != S : !!(0, i.li)(p) || void 0 !== R || null != S), I[17] = an, I[18] = ag, I[19] = S, I[20] = L, I[21] = ab, I[22] = ao, I[23] = ak, I[24] = M, I[25] = N, I[26] = O, I[27] = R, I[28] = P, I[29] = ah, I[30] = ae, I[31] = _?.automationId, I[32] = _?.mode, I[33] = ai?.name, I[34] = ai?.rrule, I[35] = Q, I[36] = $, I[37] = c, I[38] = f, I[39] = t, I[40] = u, I[41] = v, I[42] = w, I[43] = x, I[44] = y, I[45] = z
                } else c = I[37], f = I[38], t = I[39], u = I[40], v = I[41], w = I[42], x = I[43], y = I[44], z = I[45];
                let aq = x,
                    ar = "suggested-update" === N && al && am.isLoading,
                    as = "suggested-create" === N || "suggested-update" === N,
                    at = as ? J : void 0,
                    au = L ?? null,
                    av = M ?? null,
                    aw = O ?? "",
                    ax = P ?? "",
                    ay = Q ?? "";
                I[77] !== S ? (A = S ?? [], I[77] = S, I[78] = A) : A = I[78];
                let az = void 0 !== R ? R : S?.[0] === i.kd ? null : S?.[0] ?? null,
                    aA = U ?? null,
                    aB = V ?? null,
                    aC = W ?? null,
                    aD = X ?? null;
                I[79] !== Y ? (B = void 0 !== Y ? {
                    notificationPolicy: Y
                } : {}, I[79] = Y, I[80] = B) : B = I[80];
                let aE = $ ?? null;
                I[81] !== af || I[82] !== aj || I[83] !== ae || I[84] !== A || I[85] !== az || I[86] !== aA || I[87] !== aB || I[88] !== aC || I[89] !== aD || I[90] !== B || I[91] !== aE || I[92] !== at || I[93] !== au || I[94] !== av || I[95] !== aw || I[96] !== ax || I[97] !== ay ? (C = {
                    elicitation: at,
                    directiveKey: af,
                    mode: aj,
                    id: au,
                    kind: av,
                    name: aw,
                    prompt: ax,
                    rrule: ay,
                    cwds: A,
                    projectId: az,
                    executionEnvironment: aA,
                    localEnvironmentConfigPath: aB,
                    model: aC,
                    reasoningEffort: aD,
                    ...B,
                    targetThreadId: ae,
                    status: aE
                }, I[81] = af, I[82] = aj, I[83] = ae, I[84] = A, I[85] = az, I[86] = aA, I[87] = aB, I[88] = aC, I[89] = aD, I[90] = B, I[91] = aE, I[92] = at, I[93] = au, I[94] = av, I[95] = aw, I[96] = ax, I[97] = ay, I[98] = C) : C = I[98];
                let aF = C,
                    aG = null != ag;
                I[99] !== f || I[100] !== aq || I[101] !== aj || I[102] !== ak || I[103] !== aG ? (D = (0, o.D)({
                    directiveMode: aj,
                    canCreate: f,
                    canUpdate: aq,
                    isViewMode: ak,
                    forceOpen: aG
                }), I[99] = f, I[100] = aq, I[101] = aj, I[102] = ak, I[103] = aG, I[104] = D) : D = I[104];
                let aH = D,
                    aI = u ? null : v;
                I[105] !== aH || I[106] !== c || I[107] !== ag || I[108] !== aF || I[109] !== ar || I[110] !== as || I[111] !== ac || I[112] !== aa || I[113] !== y ? (E = () => {
                    if (ar) return;
                    let a = c;
                    null != a ? q.c.dispatchHostMessage({
                        type: "navigate-to-route",
                        path: `/automations?automationId=${a}`
                    }) : "create" === aH && (aa.set(o.e, null), aa.set(o.f, aF), q.c.dispatchHostMessage({
                        type: "navigate-to-route",
                        path: "/automations?automationMode=create"
                    }))
                }, I[105] = aH, I[106] = c, I[107] = ag, I[108] = aF, I[109] = ar, I[110] = as, I[111] = ac, I[112] = aa, I[113] = y, I[114] = E) : E = I[114];
                let aJ = E,
                    aK = !u && !ar && (null != c || "create" === aH),
                    aL = _?.deleteStatus;
                I[115] !== t || I[116] !== ab || I[117] !== aL ? (F = function(a) {
                    let {
                        deleteStatus: b,
                        intl: c,
                        mode: d
                    } = a;
                    return "create" === d ? c.formatMessage({
                        id: "automation.updateDirective.created",
                        defaultMessage: "Created"
                    }) : "update" === d ? c.formatMessage({
                        id: "automation.updateDirective.updated",
                        defaultMessage: "Updated"
                    }) : "delete" === d ? "not_found" === b ? c.formatMessage({
                        id: "automation.updateDirective.missing",
                        defaultMessage: "Missing"
                    }) : c.formatMessage({
                        id: "automation.updateDirective.deleted",
                        defaultMessage: "Deleted"
                    }) : "suggested-create" === d ? c.formatMessage({
                        id: "automation.updateDirective.proposed",
                        defaultMessage: "Proposed"
                    }) : "suggested-update" === d ? c.formatMessage({
                        id: "automation.updateDirective.proposedUpdate",
                        defaultMessage: "Proposed update"
                    }) : c.formatMessage({
                        id: "automation.updateDirective.automation",
                        defaultMessage: "Scheduled task"
                    })
                }({
                    deleteStatus: aL,
                    intl: ab,
                    mode: t
                }), I[115] = t, I[116] = ab, I[117] = aL, I[118] = F) : F = I[118];
                let aM = F;
                I[119] !== aM || I[120] !== w || I[121] !== aI ? (G = [aM, w, aI].filter(s), I[119] = aM, I[120] = w, I[121] = aI, I[122] = G) : G = I[122];
                let aN = G.join(" \xb7 "),
                    aO = aI ?? aM,
                    aP = aN || void 0;
                return I[123] !== aK || I[124] !== aJ || I[125] !== aO || I[126] !== aP || I[127] !== z ? (H = (0, d.jsx)(m.a, {
                    title: z,
                    subtitle: aO,
                    ariaLabel: aP,
                    canOpen: aK,
                    onOpen: aJ
                }), I[123] = aK, I[124] = aJ, I[125] = aO, I[126] = aP, I[127] = z, I[128] = H) : H = I[128], H
            }
        })
    }),
    IN8o: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("ZDhX"),
            g = c("on57"),
            h = c("Q840"),
            i = c("Wf1j"),
            j = c("oyxz"),
            k = c("wD9O"),
            l = c("HBzQ"),
            m = c("Sm6l"),
            n = c("bf6R"),
            o = c("wbOy"),
            p = c("tSEg"),
            q = c("nMdB"),
            r = c("FWVQ"),
            s = c("qZWE"),
            t = c("M0nI");
        c.d(b, {}, {
            a: function(a) {
                let b, c, u, v, w, x, y, z, A, B, C = (0, e.c)(44),
                    {
                        mcpAppId: D,
                        name: E,
                        status: F,
                        disabled: G,
                        icon: H,
                        accessory: I,
                        className: J,
                        disclosure: K
                    } = a,
                    L = (0, h.y)(p.a),
                    M = (0, k.c)(),
                    N = (0, i.a)(),
                    O = (0, h.x)(G ? null : s.q, D);
                C[0] !== N ? (b = N.formatMessage({
                    id: "codex.mcpTool.openAppInTab",
                    defaultMessage: "Open app in tab"
                }), C[0] = N, C[1] = b) : b = C[1];
                let P = b;
                C[2] !== O?.inline || C[3] !== K || C[4] !== D || C[5] !== L || C[6] !== F ? (c = K ?? ("closed" === F && O?.inline ? {
                    expanded: !1,
                    onToggle: () => (0, s.y)(L, D, "inline")
                } : void 0), C[2] = O?.inline, C[3] = K, C[4] = D, C[5] = L, C[6] = F, C[7] = c) : c = C[7];
                let Q = c;
                if (null != K && ("open" === F || "closed" === F)) {
                    let a, b = null != E,
                        c = E ?? "";
                    if (C[8] !== K.expanded || C[9] !== N || C[10] !== b || C[11] !== c) {
                        let d = {
                            hasName: b,
                            name: c
                        };
                        a = K.expanded ? N.formatMessage({
                            id: "mcpApp.activity.hideInline",
                            defaultMessage: "{hasName, select, true {Hide {name}} other {Hide app}}"
                        }, d) : N.formatMessage({
                            id: "mcpApp.activity.showInline",
                            defaultMessage: "{hasName, select, true {Show {name}} other {Show app}}"
                        }, d), C[8] = K.expanded, C[9] = N, C[10] = b, C[11] = c, C[12] = a
                    } else a = C[12];
                    u = a
                }
                C[13] !== O?.tab || C[14] !== P || C[15] !== D || C[16] !== L ? (v = O?.tab ? (0, d.jsx)(f.a, {
                    content: P,
                    children: (0, d.jsx)(m.a, {
                        className: "relative",
                        "aria-label": P,
                        color: "ghost",
                        size: "icon",
                        onClick: () => (0, s.y)(L, D, "fullscreen"),
                        children: (0, d.jsx)(n.P, {})
                    })
                }) : null, C[13] = O?.tab, C[14] = P, C[15] = D, C[16] = L, C[17] = v) : v = C[17], C[18] !== I || C[19] !== v ? (w = (0, d.jsxs)(d.Fragment, {
                    children: [v, I]
                }), C[18] = I, C[19] = v, C[20] = w) : w = C[20], C[21] !== Q || C[22] !== K?.accessibleLabel || C[23] !== K?.labelledBy || C[24] !== u || C[25] !== M ? (x = null == Q ? void 0 : {
                    ...Q,
                    accessibleLabel: K?.accessibleLabel ?? (K?.labelledBy == null ? u : void 0),
                    onToggle: a => {
                        (0, q.a)(a.currentTarget, M), Q.onToggle(a)
                    }
                }, C[21] = Q, C[22] = K?.accessibleLabel, C[23] = K?.labelledBy, C[24] = u, C[25] = M, C[26] = x) : x = C[26];
                let R = "opening" === F,
                    S = null != Q && "group-hover/activity-header:[--agent-activity-summary-color:var(--color-text)]";
                return C[27] !== S ? (y = (0, g.b)("min-w-0 shrink truncate", t.a.summary, S), C[27] = S, C[28] = y) : y = C[28], C[29] !== u || C[30] !== N || C[31] !== E || C[32] !== F ? (z = u ?? (0, d.jsx)(j.a, {
                    id: "mcpApp.activity.status",
                    defaultMessage: "{status, select, opening {Opening {name}} open {Opened {name}} error {Couldn\u2019t open {name}} other {Open {name}}}",
                    values: {
                        status: F,
                        name: E ?? N.formatMessage(r.c)
                    }
                }), C[29] = u, C[30] = N, C[31] = E, C[32] = F, C[33] = z) : z = C[33], C[34] !== R || C[35] !== y || C[36] !== z ? (A = (0, d.jsx)(o.a, {
                    active: R,
                    role: "status",
                    className: y,
                    children: z
                }), C[34] = R, C[35] = y, C[36] = z, C[37] = A) : A = C[37], C[38] !== J || C[39] !== H || C[40] !== A || C[41] !== w || C[42] !== x ? (B = (0, d.jsxs)(l.b, {
                    className: J,
                    accessory: w,
                    externalDisclosure: x,
                    children: [H, A]
                }), C[38] = J, C[39] = H, C[40] = A, C[41] = w, C[42] = x, C[43] = B) : B = C[43], B
            }
        })
    }),
    FWVQ: (function(a, b, c) {
        var d = c("Q840"),
            e = c("Qgfj"),
            f = c("qZWE");
        let g = (0, e.e)({
            id: "mcpApp.activity.unnamed",
            defaultMessage: "app"
        });
        c.d(b, {}, {
            a: function(a, b) {
                return a?.trim() || b?.trim() || void 0
            },
            b: function(a) {
                let {
                    isInline: b,
                    status: c,
                    hidesAttributionAndActions: d
                } = a;
                return b && d && ("opening" === c || "open" === c)
            },
            c: g,
            d: function(a, b) {
                let {
                    isLoading: c,
                    isInlineRequested: e,
                    isInlineOpening: g,
                    hasError: h
                } = b, i = (0, d.x)(f.l, a), j = (0, d.x)(f.n, a), k = (0, d.x)(f.k, a), l = (0, d.x)(f.w, a), m = (0, d.x)(f.r, a);
                return void 0 !== h && h || null != m ? "error" : "closed" !== i ? i : c ? "opening" : (e ?? k) && "launcher" !== j ? l && !(void 0 !== g && g) ? "open" : "opening" : "closed"
            }
        })
    }),
    XxcM: (function(a, b, c) {
        c.d(b, {
            a: () => l
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("URlz"),
            h = c("Bbed"),
            i = c("hZax"),
            j = c("HwRo");
        let k = (0, h.a)(async function() {
            return (await Promise.all([c.e(963703), c.e(83745)]).then(c.bind(c, "AH58"))).NativePhoneFrame
        });

        function l(a) {
            let b, c, h = (0, e.c)(3);
            h[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, j.b)(), h[0] = b) : b = h[0];
            let l = (0, i.f)(b),
                m = (0, f.x)(g.c, a.content.access);
            return l && "current" === m ? (h[1] !== a ? (c = (0, d.jsx)(k, {
                ...a
            }), h[1] = a, h[2] = c) : c = h[2], c) : null
        }
    }),
    KLqe: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("oyxz"),
            h = c("lAQI"),
            i = c("Hkqr"),
            j = c("acxW"),
            k = c("vbL5"),
            l = c("tKel"),
            m = c("VUkV");
        let n = h.F({
            page_id: h.L().trim().min(1)
        });
        c.d(b, {}, {
            a: function(a) {
                let b, c, h, o, p, q, r, s, t = (0, e.c)(32),
                    {
                        item: u,
                        apps: v,
                        part: w,
                        loadMetadata: x,
                        children: y
                    } = a;
                t[0] !== v || t[1] !== u.appContext || t[2] !== u.functionName || t[3] !== u.invocation.server || t[4] !== u.invocation.tool ? (b = (0, i.b)({
                    appContext: u.appContext,
                    apps: v,
                    functionName: u.functionName,
                    serverName: u.invocation.server,
                    toolName: u.invocation.tool
                }), t[0] = v, t[1] = u.appContext, t[2] = u.functionName, t[3] = u.invocation.server, t[4] = u.invocation.tool, t[5] = b) : b = t[5];
                let z = b,
                    A = u.appContext?.actionName ?? u.invocation.tool,
                    B = u.appContext?.connectorId ?? z?.id;
                t[6] !== u.invocation.server || t[7] !== A || t[8] !== B ? (c = (0, k.a)(u.invocation.server, A, B), t[6] = u.invocation.server, t[7] = A, t[8] = B, t[9] = c) : c = t[9];
                let C = c;
                t[10] !== u.invocation.arguments || t[11] !== C ? (h = "read_page" === C ? n.safeParse(u.invocation.arguments).data : void 0, t[10] = u.invocation.arguments, t[11] = C, t[12] = h) : h = t[12];
                let D = h;
                t[13] !== D ? (o = null == D ? null : {
                    kind: "page",
                    id: D.page_id
                }, t[13] = D, t[14] = o) : o = t[14], t[15] !== x ? (p = {
                    enabled: x
                }, t[15] = x, t[16] = p) : p = t[16];
                let E = (0, f.x)(l.d, o, p);
                if (null == E) return y;
                t[17] !== u.completed || t[18] !== u.invocation.server || t[19] !== u.result ? (q = "active", u.completed && (q = (0, j.a)({
                    result: u.result,
                    isCodexAppsServer: "codex_apps" === u.invocation.server
                }) ? "failed" : "completed"), t[17] = u.completed, t[18] = u.invocation.server, t[19] = u.result, t[20] = q) : q = t[20];
                let F = E.title ?? "";
                return t[21] !== y || t[22] !== w || t[23] !== q ? (r = a => {
                    let {
                        icon: b,
                        title: c
                    } = a;
                    return "icon" === w ? (0, d.jsx)("span", {
                        className: "icon-xs inline-flex shrink-0 items-center justify-center text-xs leading-none",
                        children: b
                    }) : 0 === c.trim().length ? y : (0, d.jsx)(g.a, {
                        id: "localConversation.pageReadActivity.title.state",
                        defaultMessage: "{state, select, active {Reading {title}} failed {Couldn\u2019t read {title}} other {Read {title}}}",
                        values: {
                            state: q,
                            title: c
                        }
                    })
                }, t[21] = y, t[22] = w, t[23] = q, t[24] = r) : r = t[24], t[25] !== E.document_type || t[26] !== E.namespace || t[27] !== E.page_id || t[28] !== E.symbol || t[29] !== F || t[30] !== r ? (s = (0, d.jsx)(m.a, {
                    pageId: E.page_id,
                    documentType: E.document_type,
                    namespace: E.namespace,
                    symbol: E.symbol,
                    title: F,
                    iconClassName: "text-text/60",
                    children: r
                }), t[25] = E.document_type, t[26] = E.namespace, t[27] = E.page_id, t[28] = E.symbol, t[29] = F, t[30] = r, t[31] = s) : s = t[31], s
            }
        })
    })
};