export const __rspack_esm_ids = [740647];
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
            r = a("qRWe"),
            c = a("uQ18");
        a.d(t, {}, {
            a: function(e) {
                let t, a, d, u, p, m, h, g = (0, l.c)(28),
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
                    N = (0, o.useId)(),
                    C = (0, o.useId)(),
                    S = k;
                if (null == k && y) {
                    let e, t;
                    g[0] !== w ? (e = w ?? (0, n.jsx)(i.a, {
                        id: "automation.updateDirective.open",
                        defaultMessage: "Open",
                        description: "Button label for opening an automation from a task message"
                    }), g[0] = w, g[1] = e) : e = g[1], g[2] !== e ? (t = (0, n.jsx)(r.g, {
                        label: e
                    }), g[2] = e, g[3] = t) : t = g[3], S = t
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
                }) : null, g[8] = N, g[9] = f, g[10] = d) : d = g[10], g[11] !== S ? (u = null != S ? (0, n.jsx)("span", {
                    className: "pointer-events-auto flex shrink-0 items-center gap-1",
                    children: S
                }) : null, g[11] = S, g[12] = u) : u = g[12], g[13] !== a || g[14] !== d || g[15] !== u ? (p = (0, n.jsx)(r.h, {
                    className: "pointer-events-none relative z-10",
                    icon: t,
                    title: a,
                    subtitle: d,
                    trailing: u
                }), g[13] = a, g[14] = d, g[15] = u, g[16] = p) : p = g[16];
                let M = p,
                    I = null == b ? C : void 0,
                    T = f ? N : void 0,
                    R = !y,
                    A = null == k ? M : null;
                g[17] !== b || g[18] !== j || g[19] !== x || g[20] !== I || g[21] !== T || g[22] !== R || g[23] !== A ? (m = (0, n.jsx)(r.b, {
                    ref: x,
                    "aria-label": b,
                    "aria-labelledby": I,
                    "aria-describedby": T,
                    disabled: R,
                    onClick: j,
                    children: A
                }), g[17] = b, g[18] = j, g[19] = x, g[20] = I, g[21] = T, g[22] = R, g[23] = A, g[24] = m) : m = g[24];
                let _ = null != k ? M : null;
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
            l = a("KJ1J"),
            o = a("kqQk"),
            i = a("DKJJ");
        let s = n.object({
            success: n.literal(!0),
            automation: o.a
        });

        function r(e) {
            return (0, l.e)(e.server) && ("automations.create_local" === e.tool || "automations.update_local" === e.tool)
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
            o = a("iTtm"),
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
                let t, a, s, m, h, g, x, v = (0, l.c)(21),
                    {
                        automation: f
                    } = e,
                    b = (0, o.y)(u.a),
                    y = (0, i.a)(),
                    j = (0, o.x)(c.g, f.id);
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
                let t, a, o, i, r, c, d = (0, l.c)(16),
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
                }), d[2] = u, d[3] = a) : a = d[3], d[4] !== u ? (o = "create" === u && (0, n.jsx)(s.a, {
                    id: "chatgpt.tasks.conversation.tool_status.creating",
                    defaultMessage: "Creating scheduled task",
                    description: "Short status message shown in a ChatGPT conversation while the scheduled-task tool creates a task for the user. This label has no trailing punctuation or ellipsis."
                }), d[4] = u, d[5] = o) : o = d[5], d[6] !== u ? (i = "update" === u && (0, n.jsx)(s.a, {
                    id: "chatgpt.tasks.conversation.tool_status.updating",
                    defaultMessage: "Updating scheduled task",
                    description: "Short status message shown in a ChatGPT conversation while the scheduled-task tool updates an existing task for the user. This label has no trailing punctuation or ellipsis."
                }), d[6] = u, d[7] = i) : i = d[7], d[8] !== u ? (r = "list" === u && (0, n.jsx)(s.a, {
                    id: "chatgpt.tasks.conversation.tool_status.listing",
                    defaultMessage: "Listing scheduled tasks",
                    description: "Short status message shown in a ChatGPT conversation while the scheduled-task tool retrieves the user's tasks. This label has no trailing punctuation or ellipsis."
                }), d[8] = u, d[9] = r) : r = d[9], d[10] !== t || d[11] !== a || d[12] !== o || d[13] !== i || d[14] !== r ? (c = (0, n.jsxs)("div", {
                    className: "loading-shimmer-pure-text text-size-chat text-secondary select-none",
                    role: "status",
                    children: [t, a, o, i, r]
                }), d[10] = t, d[11] = a, d[12] = o, d[13] = i, d[14] = r, d[15] = c) : c = d[15], c
            }
        })
    }),
    VRzh: (function(e, t, a) {
        var n = a("QosV"),
            l = a("l8z4"),
            o = a("iTtm"),
            i = a("zd8w"),
            s = a("jqIZ"),
            r = a("mgfw"),
            c = a("HzCW"),
            d = a("yGJW"),
            u = a("tSEg"),
            p = a("dQRk");
        let m = (0, o.v)(u.a, e => !1);
        a.d(t, {}, {
            a: function(e) {
                let t, a, h, g = (0, n.c)(8),
                    {
                        conversationId: x
                    } = e,
                    v = (0, o.y)(u.a),
                    {
                        key: f,
                        state: b
                    } = (0, s.W)();
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
                        v.get(m, n) || (v.set(m, n, !0), (0, d.a)(v, l.c, {
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
                let d = t?.automation.schedule ?? e.schedule,
                    u = /^DTSTART[;:]/m.test(d) && !/^RRULE:/m.test(d) || /(?:^|[;:])COUNT=1(?:;|$)/m.test(d),
                    p = null == t ? e.nextRunAt ?? null : (0, o.j)(t);
                return i = u && t?.automation.timing_mode !== "flexible_schedule" ? (0, n.f)({
                    rrule: d,
                    nextRunAt: null == p ? null : Date.parse(p),
                    intl: a,
                    fallbackMessage: a.formatMessage({
                        id: "settings.automations.rruleSummaryFallback",
                        defaultMessage: "Custom schedule",
                        description: "Fallback label when RRULE summary cannot be generated"
                    })
                }) : null != t ? (0, o.o)(t, a) : e.displaySchedule?.trim() || (0, n.f)({
                    rrule: (0, o.n)(e.schedule),
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
            l = a("QosV"),
            o = a("iTtm"),
            i = a("zd8w"),
            s = a("oyxz"),
            r = a("Wf1j"),
            c = a("jqIZ"),
            d = a("Ro2M"),
            u = a("bN4H"),
            p = a("ETtL"),
            m = a("h6RQ"),
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
                j = (0, o.x)(d.g, f.id);
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
                let t, a, i, r, u, p, h, v, b, y, j = (0, l.c)(25),
                    {
                        automations: w,
                        conversationId: k
                    } = e,
                    N = (0, c.Y)(),
                    {
                        data: C,
                        isSuccess: S
                    } = (0, o.z)(d.j);
                if (j[0] !== w || j[1] !== C || j[2] !== k || j[3] !== S) {
                    let e, l = S && C.isAvailable ? w.filter(e => {
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
                    i = "w-full max-w-sm overflow-hidden rounded-2xl border border-default bg-surface", r = null != k && l.length > 0 ? (0, n.jsx)(x.a, {
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
                    }), j[10] = u) : u = j[10], t = "px-4", a = l.slice(0, 5).map(f), j[0] = w, j[1] = C, j[2] = k, j[3] = S, j[4] = t, j[5] = a, j[6] = i, j[7] = r, j[8] = u
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
    ESK5: (function(e, t, a) {
        a.d(t, {
            a: () => v
        });
        var n = a("iTtm"),
            l = a("DKJJ"),
            o = a("ILnd"),
            i = a("OWtl"),
            s = a("Nwp9"),
            r = a("rvFo"),
            c = a("nB3p"),
            d = a("xnQm"),
            u = a("lnSV"),
            p = a("WaUs");
        let m = {
            "google-drive": {
                getRequest(e) {
                    let t = (0, u.b)(e),
                        a = e.pathname.match(/\/(?:d|folders)\/(?:e\/)?([^/]+)/u)?.[1] ?? e.searchParams.get("id");
                    return null == t || null == a ? null : {
                        arguments: {
                            fields: "id,name,mimeType,webViewLink",
                            fileId: a
                        },
                        cacheKey: `google-drive:${t}:${a}`,
                        server: "codex_apps",
                        sourceAppId: "google-drive",
                        tool: "google_drive.get_file_metadata"
                    }
                },
                getTitle: (e, t) => (function(e, t) {
                    let a = (0, d.gj)(t._meta);
                    if ("valid" !== a.status) return null;
                    for (let t of a.resources)
                        if (h(t.url)?.cacheKey === e.cacheKey) return t.title?.trim() || null;
                    return null
                })(e, t) ?? (0, p.a)(t.structuredContent)?.title ?? null
            }
        };

        function h(e) {
            let t, a = (0, c.g)(e);
            if (null == a) return null;
            try {
                t = new URL(e)
            } catch {
                return null
            }
            return m[a.appId]?.getRequest(t) ?? null
        }
        let g = (0, s.b)("conversation-sources:connector-asset-title-cache", {}),
            x = (0, n.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return null != t(g)
            }),
            v = (0, n.q)(i.a, (e, t) => {
                let {
                    hostId: a,
                    url: n
                } = e, {
                    get: i,
                    scope: s
                } = t, c = h(n), d = null == c ? null : JSON.stringify([a, c.cacheKey]), u = i(x);
                return {
                    enabled: null != c && u,
                    queryFn: async () => {
                        let e = s.get(g);
                        if (null == c || null == d || null == e) return null;
                        let t = e[d];
                        if (null != t && Date.now() - t.resolvedAt < 864e5) return t.title;
                        try {
                            let e = (0, l.f)({
                                    isCodexAppsServer: "codex_apps" === c.server,
                                    toolResult: await (0, o.b)(s, a, c.server, c.tool, c.arguments)
                                }),
                                t = m[c.sourceAppId]?.getTitle(c, e) ?? null;
                            return null != t && s.set(g, {
                                ...s.get(g),
                                [d]: {
                                    resolvedAt: Date.now(),
                                    title: t
                                }
                            }), t
                        } catch {
                            return null
                        }
                    },
                    queryKey: ["connector-asset-title", d ?? JSON.stringify([a, n])],
                    retry: !1,
                    staleTime: r.b.FIVE_MINUTES
                }
            }, {
                key: e => {
                    let {
                        hostId: t,
                        url: a
                    } = e;
                    return JSON.stringify([t, h(a)?.cacheKey ?? a])
                }
            })
    }),
    kRUe: (function(e, t, a) {
        var n = a("ABep"),
            l = a("QosV"),
            o = a("on57"),
            i = a("IPUh"),
            s = a("zd8w"),
            r = a("Wf1j"),
            c = a("oyxz"),
            d = a("ygO2"),
            u = a("HOLv"),
            p = a("ETtL"),
            m = a("V8uZ"),
            h = a("Sgcz"),
            g = a("umSm"),
            x = a("s15x");

        function v(e) {
            let t, a, c, u, x, v, b, y, j, w, k, N, C, S, M = (0, l.c)(43),
                {
                    className: I,
                    isExpandable: T,
                    review: R
                } = e,
                A = (0, r.a)(),
                [_, L] = (0, s.useState)(!1);
            M[0] !== A || M[1] !== R ? (t = (0, h.c)(A, R), M[0] = A, M[1] = R, M[2] = t) : t = M[2];
            let E = t;
            if (!(void 0 === T || T)) {
                let e, t;
                return M[3] !== I ? (e = (0, o.b)("min-w-0 truncate pt-1 text-codex-description/80", I), M[3] = I, M[4] = e) : e = M[4], M[5] !== e || M[6] !== E ? (t = (0, n.jsx)("div", {
                    className: e,
                    children: E
                }), M[5] = e, M[6] = E, M[7] = t) : t = M[7], t
            }
            let P = "denied" === R.status && "high" === R.riskLevel;
            M[8] !== A || M[9] !== R ? (a = (0, h.b)(A, R), M[8] = A, M[9] = R, M[10] = a) : a = M[10];
            let U = a;
            M[11] !== I ? (c = (0, o.b)("flex flex-col pt-1", I), M[11] = I, M[12] = c) : c = M[12], M[13] === Symbol.for("react.memo_cache_sentinel") ? (u = () => L(f), M[13] = u) : u = M[13];
            let O = "inProgress" === R.status,
                D = P ? "text-warning" : "text-codex-description/80 group-hover/automatic-approval-review:text-default";
            M[14] !== D ? (x = (0, o.b)("min-w-0 truncate", D), M[14] = D, M[15] = x) : x = M[15], M[16] !== O || M[17] !== x || M[18] !== E ? (v = (0, n.jsx)(g.a, {
                active: O,
                className: x,
                children: E
            }), M[16] = O, M[17] = x, M[18] = E, M[19] = v) : v = M[19];
            let J = _ && "rotate-90 opacity-100";
            M[20] !== J ? (b = (0, o.b)("icon-2xs shrink-0 text-tertiary transition-[opacity,transform] duration-basic opacity-0 group-hover/automatic-approval-review:opacity-100", J), M[20] = J, M[21] = b) : b = M[21], M[22] !== b ? (y = (0, n.jsx)(p.a, {
                className: b
            }), M[22] = b, M[23] = y) : y = M[23], M[24] !== _ || M[25] !== y || M[26] !== v ? (j = (0, n.jsxs)(d.a, {
                className: "group/automatic-approval-review inline-flex w-fit max-w-full gap-1.5 text-start",
                color: "ghostMuted",
                focusRing: "inset",
                size: "inline",
                onClick: u,
                "aria-expanded": _,
                children: [v, y]
            }), M[24] = _, M[25] = y, M[26] = v, M[27] = j) : j = M[27];
            let z = _ ? "auto" : 0,
                H = +!!_;
            M[28] !== z || M[29] !== H ? (w = {
                height: z,
                opacity: H
            }, M[28] = z, M[29] = H, M[30] = w) : w = M[30];
            let q = _ ? "auto" : "none";
            return M[31] !== q ? (k = {
                overflow: "hidden",
                pointerEvents: q
            }, M[31] = q, M[32] = k) : k = M[32], M[33] !== U ? (N = (0, n.jsx)("p", {
                className: "max-w-[80ch] pt-1 text-size-chat leading-relaxed whitespace-pre-wrap text-text/60",
                children: U
            }), M[33] = U, M[34] = N) : N = M[34], M[35] !== w || M[36] !== k || M[37] !== N ? (C = (0, n.jsx)(i.a.div, {
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
            let t, a, o = (0, l.c)(9),
                {
                    className: i,
                    isExpandable: s,
                    reviews: r
                } = e;
            if (o[0] !== i || o[1] !== s || o[2] !== r) {
                let e;
                o[4] !== i || o[5] !== s ? (e = e => (0, n.jsx)(v, {
                    className: i,
                    isExpandable: s,
                    review: e
                }, e.id), o[4] = i, o[5] = s, o[6] = e) : e = o[6], t = r.map(e), o[0] = i, o[1] = s, o[2] = r, o[3] = t
            } else t = o[3];
            return o[7] !== t ? (a = (0, n.jsx)(n.Fragment, {
                children: t
            }), o[7] = t, o[8] = a) : a = o[8], a
        }

        function y(e) {
            let t, a, o = (0, l.c)(4),
                {
                    reviews: i
                } = e;
            o[0] !== i ? (t = i.some(j), o[0] = i, o[1] = t) : t = o[1];
            let s = t;
            return o[2] !== s ? (a = (0, n.jsx)("p", {
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
            }), o[2] = s, o[3] = a) : a = o[3], a
        }

        function j(e) {
            return "denied" === e.status && "high" === e.riskLevel
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, i = (0, l.c)(5),
                    {
                        className: s,
                        tone: r
                    } = e,
                    c = "warning" === (void 0 === r ? "default" : r) ? "text-warning" : "text-tertiary";
                return i[0] !== s || i[1] !== c ? (t = (0, o.b)("shrink-0", c, s), i[0] = s, i[1] = c, i[2] = t) : t = i[2], i[3] !== t ? (a = (0, n.jsx)(u.a, {
                    className: t,
                    asset: x.a,
                    "aria-hidden": !0
                }), i[3] = t, i[4] = a) : a = i[4], a
            },
            b: y,
            c: v,
            d: b,
            e: function(e) {
                let t, a = (0, l.c)(4),
                    {
                        isDeclined: o,
                        reviews: i
                    } = e;
                if (!o) {
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
    mRLe: (function(e, t, a) {
        var n = a("ABep"),
            l = a("QosV");
        a.d(t, {}, {
            a: function(e) {
                let t, a = (0, l.c)(2),
                    {
                        variant: o
                    } = e,
                    i = "grouped" === (void 0 === o ? "item" : o) ? "var(--conversation-grouped-item-gap, 4px)" : "var(--conversation-item-gap, 16px)";
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
            l = a("QosV"),
            o = a("iTtm"),
            i = a("Wf1j"),
            s = a("oyxz"),
            r = a("wD9O"),
            c = a("umSm"),
            d = a("hCjf"),
            u = a("tbqK"),
            p = a("ALWK"),
            m = a("tSEg"),
            h = a("nMdB");

        function g(e) {
            let t, a, o, r = (0, l.c)(9),
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
            }), r[3] = u, r[4] = t, r[5] = a) : a = r[5], r[6] !== m || r[7] !== a ? (o = (0, n.jsx)(c.a, {
                active: m,
                role: "status",
                className: "min-w-0 shrink truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                children: a
            }), r[6] = m, r[7] = a, r[8] = o) : o = r[8], o
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, i, s, c, x, v = (0, l.c)(24),
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
                    S = (0, o.y)(m.a),
                    M = (0, r.c)();
                v[0] !== j || v[1] !== C || v[2] !== f || v[3] !== S || v[4] !== y ? (t = C ?? ("closed" !== y || j ? void 0 : {
                    expanded: !1,
                    onToggle: () => (0, p.x)(S, f)
                }), v[0] = j, v[1] = C, v[2] = f, v[3] = S, v[4] = y, v[5] = t) : t = v[5];
                let I = t;
                return v[6] !== j || v[7] !== f ? (a = (0, n.jsx)(u.a, {
                    disabled: j,
                    mcpAppId: f
                }), v[6] = j, v[7] = f, v[8] = a) : a = v[8], v[9] !== k || v[10] !== a ? (i = (0, n.jsxs)(n.Fragment, {
                    children: [a, k]
                }), v[9] = k, v[10] = a, v[11] = i) : i = v[11], v[12] !== I || v[13] !== M ? (s = null == I ? void 0 : {
                    ...I,
                    onToggle: e => {
                        (0, h.a)(e.currentTarget, M), I.onToggle(e)
                    }
                }, v[12] = I, v[13] = M, v[14] = s) : s = v[14], v[15] !== b || v[16] !== y ? (c = (0, n.jsx)(g, {
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
            l = a("ALWK");
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
                    isInlineRequested: o,
                    isInlineOpening: i,
                    hasError: s
                } = t, r = (0, n.x)(l.m, e), c = (0, n.x)(l.o, e), d = (0, n.x)(l.l, e), u = (0, n.x)(l.v, e), p = (0, n.x)(l.q, e);
                return void 0 !== s && s || null != p ? "error" : "closed" !== r ? r : a ? "opening" : (o ?? d) && "launcher" !== c ? u && !(void 0 !== i && i) ? "open" : "opening" : "closed"
            }
        })
    }),
    o1Ns: (function(e, t, a) {
        var n = a("SZCv"),
            l = a.n(n),
            o = a("iTtm"),
            i = a("xnQm"),
            s = a("KJ1J"),
            r = a("ojna"),
            c = a("ALWK"),
            d = a("Qg4G"),
            u = a("tSEg"),
            p = a("DKJJ");
        let m = (0, o.d)(u.a, (e, t) => {
            let {
                get: a
            } = t;
            return new Map(e.map(e => {
                let t = (0, i.Xe)(e),
                    n = a(c.j, t);
                return [e, {
                    sourceId: a(c.t, t),
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
                } = e, l = !(0, r.b)(t.invocation) && !(0, d.b)(t.invocation, a) && !0 !== t.isMcpAppWidgetSuperseded && (n?.sourceId == null || n.sourceId === (0, i.Xe)(t.callId));
                return {
                    isEligible: l,
                    isRenderable: l && !(0, p.h)({
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
            l = a("KJ1J");
        a.d(t, {}, {
            a: function(e) {
                let {
                    pluginId: t,
                    plugins: a,
                    serverName: o
                } = e;
                if (null == t || (0, l.e)(o)) return null;
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
            o = a("DNYL"),
            i = a("T0Rc"),
            s = a("on57"),
            r = a("IPUh"),
            c = a("AQaI"),
            d = a.n(c),
            u = a("iTtm"),
            p = a("xnQm"),
            m = a("OZum"),
            h = a("zd8w"),
            g = a("Wf1j"),
            x = a("oyxz"),
            v = a("mnR8"),
            f = a("sM3V"),
            b = a("KJ1J"),
            y = a("biqr"),
            j = a("ojna"),
            w = a("khkh"),
            k = a("SHXB"),
            N = a("bPZ9"),
            C = a("OOaz"),
            S = a("Zm2g"),
            M = a("FvYa"),
            I = a("ygO2"),
            T = a("la9L"),
            R = a("rmk3"),
            A = a("JNtf"),
            _ = a("mUDD"),
            L = a("KxMp"),
            E = a("HOLv"),
            P = a("DcH0"),
            U = a("Wdu7"),
            O = a("rO8L"),
            D = a("wwME"),
            J = a("gtAj"),
            z = a("YeQK"),
            H = a("DWcA"),
            q = a("PvhQ"),
            W = a("oKu4"),
            K = a("Odi7"),
            F = a("JXtc"),
            V = a("AHnN"),
            B = a("C1SW"),
            G = a("ustl"),
            Q = a("ALWK"),
            Z = a("ze43"),
            $ = a("E2ja"),
            Y = a("KLqe"),
            X = a("EEop"),
            ee = a("cLdu"),
            et = a("ueue"),
            ea = a("whdX"),
            en = a("Sd8U"),
            el = a("tSEg"),
            eo = a("hZax"),
            ei = a("V8uZ"),
            es = a("WFY2"),
            er = a("S7UD"),
            ec = a("kRUe"),
            ed = a("KU8M"),
            eu = a("Fm9E"),
            ep = a("GmdE"),
            em = a("t7eZ"),
            eh = a("LF5P"),
            eg = a("ZiDw"),
            ex = a("ltPT"),
            ev = a("SfaR"),
            ef = a("BI7J"),
            eb = a("DYB3"),
            ey = a("MAIj"),
            ej = a("mRLe"),
            ew = a("o62A"),
            ek = a("o1Ns"),
            eN = a("MdwM"),
            eC = a("alO6"),
            eS = a("Hkqr"),
            eM = a("DKJJ"),
            eI = a("umSm"),
            eT = a("tHoD"),
            eR = a("hCjf"),
            eA = a("RznG"),
            e_ = a("r9ev"),
            eL = a("XPF6"),
            eE = a("yF0p"),
            eP = a("gEyd"),
            eU = a("ldrW");

        function eO(e) {
            return "text" !== e.type
        }

        function eD(e) {
            let t, a, o, i, s, r, c, d, u, p = (0, l.c)(32),
                {
                    call: h,
                    fallbackPageUrl: g,
                    loadRemoteLogos: v
                } = e,
                f = null == h.sourceHostname ? g : `https://${h.sourceHostname}`,
                b = "invokeTool" === h.kind ? h.inputJson : void 0,
                y = "invokeTool" === h.kind && !0 === h.inputTruncated;
            p[0] !== v || p[1] !== f ? (t = null == f ? (0, n.jsx)(E.a, {
                className: "shrink-0 text-text/60",
                asset: eU.a
            }) : (0, n.jsx)(L.a, {
                className: "icon-xs shrink-0 text-text/60",
                href: f,
                loadRemote: v
            }), p[0] = v, p[1] = f, p[2] = t) : t = p[2], p[3] !== h.name || p[4] !== h.title ? (a = h.title ?? (0, m.a)(h.name, {
                style: "sentence"
            }), p[3] = h.name, p[4] = h.title, p[5] = a) : a = p[5], p[6] !== h.kind || p[7] !== a ? (o = (0, n.jsx)(x.a, {
                id: "codex.mcpTool.webMcpActivity.completed",
                defaultMessage: "{kind, select, listTools {Listed website tools} other {{toolName}}}",
                description: "Human-readable activity label for a website-provided WebMCP tool invocation",
                values: {
                    kind: h.kind,
                    toolName: a
                }
            }), p[6] = h.kind, p[7] = a, p[8] = o) : o = p[8], p[9] !== h.description || p[10] !== h.name || p[11] !== h.readOnlyHint || p[12] !== h.sourceHostname || p[13] !== h.title || p[14] !== b || p[15] !== y ? (i = ez({
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
            }, 2), p[9] = h.description, p[10] = h.name, p[11] = h.readOnlyHint, p[12] = h.sourceHostname, p[13] = h.title, p[14] = b, p[15] = y, p[16] = i) : i = p[16];
            let j = y ? "true" : "false";
            return p[17] !== j ? (s = (0, n.jsx)(x.a, {
                id: "codex.localConversation.webMcpTools.toolLabel",
                defaultMessage: "{truncated, select, true {Tool (input truncated)} other {Tool}}",
                description: "Title for a website-provided WebMCP tool definition and its input",
                values: {
                    truncated: j
                }
            }), p[17] = j, p[18] = s) : s = p[18], p[19] !== i || p[20] !== s ? (r = (0, n.jsx)(T.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: i,
                language: "json",
                showStickyRightContent: !1,
                title: s
            }), p[19] = i, p[20] = s, p[21] = r) : r = p[21], p[22] !== h.outputJson || p[23] !== h.outputTruncated ? (c = null == h.outputJson ? null : (0, n.jsx)(T.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: h.outputTruncated ? h.outputJson : function(e) {
                    try {
                        return ez(JSON.parse(e), 2)
                    } catch {
                        return e
                    }
                }(h.outputJson),
                language: "json",
                showStickyRightContent: !1,
                title: (0, n.jsx)(x.a, {
                    id: "codex.localConversation.webMcpTools.resultLabel",
                    defaultMessage: "{truncated, select, true {Result (truncated)} other {Result}}",
                    description: "Title for a website-provided WebMCP tool result",
                    values: {
                        truncated: h.outputTruncated ? "true" : "false"
                    }
                })
            }), p[22] = h.outputJson, p[23] = h.outputTruncated, p[24] = c) : c = p[24], p[25] !== r || p[26] !== c ? (d = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2",
                children: [r, c]
            }), p[25] = r, p[26] = c, p[27] = d) : d = p[27], p[28] !== t || p[29] !== o || p[30] !== d ? (u = (0, n.jsx)(e_.a, {
                icon: t,
                status: "completed",
                summary: o,
                children: d
            }), p[28] = t, p[29] = o, p[30] = d, p[31] = u) : u = p[31], u
        }

        function eJ(e) {
            let t, a, o = (0, l.c)(5),
                {
                    heightHint: i,
                    minFrameHeight: s
                } = e;
            return o[0] !== i || o[1] !== s ? (t = (0, K.b)(i, s), o[0] = i, o[1] = s, o[2] = t) : t = o[2], o[3] !== t ? (a = (0, n.jsx)(P.a, {
                "aria-hidden": !0,
                "data-mcp-app-expanding-placeholder": "true",
                className: "w-full",
                style: {
                    height: t
                }
            }), o[3] = t, o[4] = a) : a = o[4], a
        }

        function ez(e, t) {
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

        function eH(e) {
            let t = (0, l.c)(74),
                {
                    block: a,
                    conversationId: o,
                    hostId: i
                } = e,
                r = (0, u.y)(en.a),
                c = (0, g.a)();
            switch (a.type) {
                case "image": {
                    let e, l, s, d, u, p, m;
                    t[0] !== a.annotations || t[1] !== c ? (e = eW(a.annotations, c), t[0] = a.annotations, t[1] = c, t[2] = e) : e = t[2];
                    let h = e,
                        g = `data:${a.mimeType};base64,${a.data}`;
                    t[3] !== c ? (l = c.formatMessage({
                        id: "codex.mcpTool.contentBlock.imageAlt",
                        defaultMessage: "Image returned by tool",
                        description: "Accessible description for an image included in an MCP tool result"
                    }), t[3] = c, t[4] = l) : l = t[4];
                    let x = l;
                    t[5] !== o || t[6] !== i || t[7] !== x || t[8] !== g || t[9] !== c || t[10] !== r ? (s = () => (0, z.getGeneratedImageContextMenuItems)(r, {
                        chatGptConversationId: o.startsWith("chatgpt:") ? (0, C.d)(o.slice(8)) : void 0,
                        displaySrc: g,
                        hostId: i,
                        image: {
                            kind: "generic",
                            src: g,
                            alt: x
                        },
                        intl: c
                    }), t[5] = o, t[6] = i, t[7] = x, t[8] = g, t[9] = c, t[10] = r, t[11] = s) : s = t[11], t[12] !== x || t[13] !== g ? (d = (0, n.jsx)("img", {
                        className: "max-h-48 w-max max-w-full gap-0.5 rounded-md object-contain",
                        alt: x,
                        src: g
                    }), t[12] = x, t[13] = g, t[14] = d) : d = t[14], t[15] !== s || t[16] !== d ? (u = (0, n.jsx)(R.a, {
                        getItems: s,
                        children: d
                    }), t[15] = s, t[16] = d, t[17] = u) : u = t[17];
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
                    let e, l, o, i;
                    t[23] !== a.annotations || t[24] !== c ? (e = eW(a.annotations, c), t[23] = a.annotations, t[24] = c, t[25] = e) : e = t[25];
                    let s = e;
                    return t[26] !== a.data || t[27] !== a.mimeType ? (l = (0, n.jsx)(eq, {
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
                            description: "Summary shown for MCP resource link content blocks",
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
                    let e, l, o, i, s, r, c, d = a.resource.text ?? a.resource.blob ?? "",
                        u = "" !== d;
                    t[44] !== a.resource.annotations ? (e = eK(a.resource.annotations), t[44] = a.resource.annotations, t[45] = e) : e = t[45];
                    let p = e;
                    return t[46] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsx)("span", {
                        className: "font-medium text-default",
                        children: (0, n.jsx)(x.a, {
                            id: "codex.mcpTool.embeddedResource.uriLabel",
                            defaultMessage: "URI",
                            description: "Label for the URI of an embedded resource"
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
                    }) : null, t[51] = p, t[52] = s) : s = t[52], t[53] !== u || t[54] !== d ? (r = u ? (0, n.jsxs)("div", {
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
                            children: d
                        })]
                    }) : null, t[53] = u, t[54] = d, t[55] = r) : r = t[55], t[56] !== o || t[57] !== i || t[58] !== s || t[59] !== r ? (c = (0, n.jsxs)("div", {
                        className: "flex flex-col gap-0.5 text-size-chat text-codex-description/80",
                        children: [o, i, s, r]
                    }), t[56] = o, t[57] = i, t[58] = s, t[59] = r, t[60] = c) : c = t[60], c
                }
                case "unknown": {
                    let e, l, o;
                    return t[61] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.b)("[&_*]:text-text/50", "bg-primary-soft text-codex-description/80 max-h-48 overflow-auto whitespace-pre-wrap rounded-md px-3 py-2 text-size-chat"), t[61] = e) : e = t[61], t[62] !== a.raw ? (l = ez(a.raw, 2), t[62] = a.raw, t[63] = l) : l = t[63], t[64] !== l ? (o = (0, n.jsx)("pre", {
                        className: e,
                        children: l
                    }), t[64] = l, t[65] = o) : o = t[65], o
                }
                case "text": {
                    let e, l, o, i;
                    t[66] !== a.annotations || t[67] !== a.text || t[68] !== c ? (e = [a.text, eW(a.annotations, c)].filter(e => null != e).join("\n"), t[66] = a.annotations, t[67] = a.text, t[68] = c, t[69] = e) : e = t[69];
                    let r = e;
                    return t[70] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsxs)("div", {
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
                    }), t[70] = l) : l = t[70], t[71] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, s.b)("[&_*]:text-text/50", "text-codex-description/80 m-0 whitespace-pre-wrap break-words font-sans text-size-chat leading-relaxed extension:leading-normal"), t[71] = o) : o = t[71], t[72] !== r ? (i = (0, n.jsxs)("div", {
                        className: "relative overflow-clip rounded-lg border border-strong bg-secondary-soft-alpha contain-inline-size",
                        children: [l, (0, n.jsx)("div", {
                            className: "max-h-48 overflow-y-auto p-2",
                            children: (0, n.jsx)("pre", {
                                className: o,
                                children: r
                            })
                        })]
                    }), t[72] = r, t[73] = i) : i = t[73], i
                }
            }
        }

        function eq(e) {
            let t, a, o, i, s = (0, l.c)(12),
                {
                    data: r,
                    mimeType: c
                } = e;
            s[0] !== r || s[1] !== c ? (t = {
                data: r,
                mimeType: c
            }, s[0] = r, s[1] = c, s[2] = t) : t = s[2];
            let d = t,
                [u, p] = (0, h.useState)(null);
            s[3] !== d ? (a = () => p(d), s[3] = d, s[4] = a) : a = s[4];
            let m = a;
            if (u?.data === r && u.mimeType === c) {
                let e;
                return s[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(x.a, {
                    id: "codex.mcpTool.contentBlock.audioUnavailable",
                    defaultMessage: "Audio unavailable",
                    description: "Short fallback shown instead of the audio player when audio returned by an MCP tool cannot be played"
                }), s[5] = e) : e = s[5], e
            }
            return s[6] !== m || s[7] !== d ? (o = e => {
                if (null != e) return (0, er.c)(e, d, m)
            }, s[6] = m, s[7] = d, s[8] = o) : o = s[8], s[9] !== m || s[10] !== o ? (i = (0, n.jsx)("audio", {
                ref: o,
                className: "w-full gap-0.5",
                controls: !0,
                onError: m,
                preload: "metadata"
            }), s[9] = m, s[10] = o, s[11] = i) : i = s[11], i
        }

        function eW(e, t) {
            let a = eK(e);
            return null == a ? null : t.formatMessage({
                id: "codex.mcpTool.contentBlock.annotationsLine",
                defaultMessage: "Annotations: {annotations}",
                description: "Line showing MCP content block annotations in text output"
            }, {
                annotations: a
            })
        }

        function eK(e) {
            if (null == e) return null;
            let t = [];
            return (null != e.audience && e.audience.length > 0 && t.push(`audience=${e.audience.join(", ")}`), null != e.priority && t.push(`priority=${String(e.priority)}`), null != e.lastModified && t.push(`lastModified=${e.lastModified}`), 0 === t.length) ? null : t.join("; ")
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, c, C, R, P, z, K, en, es, er, e_, eq, eW, eK, eF, eV, eB, eG, eQ, eZ, e$, eY, eX, e1, e0, e2, e3, e4, e5, e6, e7, e8, e9, te, tt, ta, tn, tl, to, ti, ts, tr, tc, td, tu, tp, tm, th, tg, tx, tv, tf, tb, ty, tj, tw, tk = (0, l.c)(281),
                    {
                        item: tN,
                        conversationId: tC,
                        expandedContentOnly: tS,
                        hideTextBlocksWithStructuredContent: tM,
                        hostId: tI,
                        loadRemoteLogos: tT,
                        appInfoOverride: tR,
                        onExpand: tA,
                        onOpenPermissions: t_,
                        renderMcpApps: tL,
                        shouldAutoExpandMcpApp: tE,
                        summary: tP,
                        summaryIcon: tU,
                        toolActivityTurnKey: tO
                    } = e,
                    tD = void 0 !== tS && tS,
                    tJ = void 0 !== tM && tM,
                    tz = void 0 === tT || tT,
                    tH = void 0 === tL || tL,
                    tq = void 0 === tP ? null : tP,
                    tW = (0, u.y)(el.a);
                tk[0] !== tR || tk[1] !== tN ? (t = null == tR && (0, eh.h)(tN), tk[0] = tR, tk[1] = tN, tk[2] = t) : t = tk[2], tk[3] !== tI || tk[4] !== t ? (a = {
                    enabled: t,
                    hostId: tI
                }, tk[3] = tI, tk[4] = t, tk[5] = a) : a = tk[5];
                let {
                    data: tK
                } = (0, y.m)(a), tF = tR ?? (null != tK ? (0, eS.b)({
                    appContext: tN.appContext,
                    apps: tK,
                    functionName: tN.functionName,
                    serverName: tN.invocation.server,
                    toolName: tN.invocation.tool
                }) : null), tV = (0, g.a)(), {
                    platform: tB
                } = (0, D.a)();
                tk[6] !== tN.callId ? (c = (0, p.Xe)(tN.callId), tk[6] = tN.callId, tk[7] = c) : c = tk[7];
                let tG = c,
                    tQ = (0, u.x)(Q.t, tG),
                    tZ = (0, u.x)(Q.j, tG),
                    t$ = (0, ek.a)({
                        item: tN,
                        hostId: tI,
                        retainedState: {
                            sourceId: tQ,
                            hasSuccessfulToolResult: tZ?.content.toolCallStatus == null && tZ?.content.toolResult != null
                        }
                    }),
                    tY = tH && (0, eu.c)() && t$.isEligible;
                tk[8] !== tC || tk[9] !== tN.callId ? (C = (0, eg.a)({
                    callId: tN.callId,
                    conversationId: tC
                }), tk[8] = tC, tk[9] = tN.callId, tk[10] = C) : C = tk[10];
                let tX = C,
                    t1 = (0, u.x)(eg.c, tX);
                (0, eo.h)("2957382457");
                let t0 = (0, u.z)(w.a);
                tk[11] !== tN.appContext || tk[12] !== tN.callId || tk[13] !== tN.invocation.server || tk[14] !== tN.result ? (P = (R = (0, b.e)(tN.invocation.server)) && null != tN.appContext ? tN.callId : null, z = (0, eM.h)({
                    isCodexAppsServer: R,
                    result: tN.result
                }), tk[11] = tN.appContext, tk[12] = tN.callId, tk[13] = tN.invocation.server, tk[14] = tN.result, tk[15] = R, tk[16] = P, tk[17] = z) : (R = tk[15], P = tk[16], z = tk[17]);
                let t2 = z,
                    t3 = tN.result?.type !== "success" || t2 ? null : tN.result.raw,
                    t4 = t3 ?? (tZ?.content.toolCallStatus == null ? tZ?.content.toolResult : null) ?? null,
                    {
                        elementHeightPx: t5,
                        elementRef: t6
                    } = (0, ex.a)(),
                    t7 = tN.result?.type === "success" ? tN.result.content : null,
                    t8 = tN.result?.type === "error" ? tN.result.error : null;
                tk[18] !== tN || tk[19] !== tB ? (K = (0, eh.e)({
                    item: tN,
                    platform: tB
                }), tk[18] = tN, tk[19] = tB, tk[20] = K) : K = tk[20];
                let t9 = K,
                    ae = t9?.nativeAppReference ?? null,
                    at = (0, ey.b)(ae),
                    aa = at?.appPath ?? null;
                tk[21] !== aa ? (en = {
                    appPath: aa
                }, tk[21] = aa, tk[22] = en) : en = tk[22];
                let {
                    iconSmall: an
                } = (0, S.a)(en), al = void 0 === tU ? (0, eb.d)(tN, null == tF ? [] : [tF])?.icon : tU;
                void 0 === tU && null != al && (al = (0, n.jsx)(Y.a, {
                    item: tN,
                    apps: null == tF ? [] : [tF],
                    part: "icon",
                    loadMetadata: tz,
                    children: al
                })), tk[23] !== tN.source?.kind || tk[24] !== t3 ? (es = tN.source?.kind === "browserUse" && null != t3 ? (0, eh.c)(t3._meta) : null, tk[23] = tN.source?.kind, tk[24] = t3, tk[25] = es) : es = tk[25];
                let ao = es,
                    ai = t0 && !tD && tN.completed && (0, p.ei)(tN.invocation.server) && "js" === tN.invocation.tool && null != t3 ? (0, ev.a)(t3._meta) : [];
                tk[26] !== tC || tk[27] !== tI ? (er = {
                    hostId: tI,
                    conversationId: tC
                }, tk[26] = tC, tk[27] = tI, tk[28] = er) : er = tk[28];
                let as = (0, u.x)(f.b, er);
                tk[29] !== tI || tk[30] !== tN.appContext || tk[31] !== tN.invocation.server || tk[32] !== tN.invocation.tool || tk[33] !== tN.invocationResourceUri || tk[34] !== as ? (e_ = {
                    appContext: tN.appContext,
                    hostId: tI,
                    invocationResourceUri: tN.invocationResourceUri,
                    server: tN.invocation.server,
                    threadId: as,
                    tool: tN.invocation.tool
                }, tk[29] = tI, tk[30] = tN.appContext, tk[31] = tN.invocation.server, tk[32] = tN.invocation.tool, tk[33] = tN.invocationResourceUri, tk[34] = as, tk[35] = e_) : e_ = tk[35];
                let {
                    data: ar,
                    isPending: ac,
                    isFetching: ad,
                    error: au
                } = (0, u.x)(ed.a, e_, {
                    enabled: tY || !tC.startsWith("chatgpt:")
                }), ap = (0, eM.c)({
                    appContext: tN.appContext,
                    invocationResourceUri: tN.invocationResourceUri,
                    mcpServerStatuses: ar,
                    server: tN.invocation.server,
                    tool: tN.invocation.tool
                }), am = (0, eC.a)({
                    pluginId: tN.pluginId,
                    toolDisplay: tN.toolDisplay,
                    toolDefinition: ap,
                    appContext: tN.appContext,
                    completed: tN.completed,
                    intl: tV,
                    toolName: tN.invocation.tool,
                    serverName: tN.invocation.server,
                    matchingApp: tF ?? null,
                    nativeDesktopAppMetadata: at,
                    platform: tB,
                    source: tN.source,
                    toolArguments: tN.invocation.arguments,
                    toolResult: tN.result
                });
                tk[36] !== tI || tk[37] !== tN.appContext || tk[38] !== tN.invocation.server || tk[39] !== tN.invocation.tool || tk[40] !== tN.invocationResourceUri || tk[41] !== as ? (eq = {
                    appContext: tN.appContext,
                    hostId: tI,
                    invocationResourceUri: tN.invocationResourceUri,
                    server: tN.invocation.server,
                    threadId: as,
                    tool: tN.invocation.tool
                }, tk[36] = tI, tk[37] = tN.appContext, tk[38] = tN.invocation.server, tk[39] = tN.invocation.tool, tk[40] = tN.invocationResourceUri, tk[41] = as, tk[42] = eq) : eq = tk[42];
                let ah = (0, u.x)(ed.b, eq, {
                        enabled: tY
                    }),
                    {
                        resourceUri: ag,
                        isPending: ax
                    } = (0, eM.d)({
                        item: tN,
                        mcpServerStatuses: ar,
                        descriptorOnly: tC.startsWith("chatgpt:"),
                        toolResult: t4,
                        isCatalogPending: ac,
                        registeredResourceUri: tZ?.content.mcpAppScope.originResourceUri
                    }),
                    av = null != tN.pluginId && !R;
                tk[43] !== tI || tk[44] !== av ? (eW = {
                    enabled: av,
                    hostId: tI
                }, tk[43] = tI, tk[44] = av, tk[45] = eW) : eW = tk[45];
                let af = (0, O.a)(eW);
                tk[46] !== tI || tk[47] !== af ? (eK = {
                    enabled: af,
                    hostId: tI,
                    roots: void 0,
                    resolveActiveRoots: !0
                }, tk[46] = tI, tk[47] = af, tk[48] = eK) : eK = tk[48];
                let {
                    data: ab
                } = (0, ee.l)(eK);
                tk[49] !== ab || tk[50] !== tN.pluginId ? (eF = ab?.find(e => {
                    let {
                        plugin: t
                    } = e;
                    return t.id === tN.pluginId || null != t.remotePluginId && t.remotePluginId === tN.pluginId
                }), tk[49] = ab, tk[50] = tN.pluginId, tk[51] = eF) : eF = tk[51];
                let ay = eF,
                    aj = af && null != ab && null != tN.pluginId && null == ay;
                tk[52] !== tI || tk[53] !== tN.pluginId || tk[54] !== tW.query || tk[55] !== aj ? (eV = tW.query.getOptions(X.k, (0, X.a)({
                    hostId: tI,
                    pluginId: aj ? tN.pluginId ?? null : null
                })), tk[52] = tI, tk[53] = tN.pluginId, tk[54] = tW.query, tk[55] = aj, tk[56] = eV) : eV = tk[56];
                let aw = eV,
                    ak = aj && aw.enabled;
                tk[57] !== aw || tk[58] !== ak ? (eB = {
                    ...aw,
                    enabled: ak,
                    retry: !1
                }, tk[57] = aw, tk[58] = ak, tk[59] = eB) : eB = tk[59];
                let {
                    data: aN
                } = (0, i.a)(eB);
                if (tk[60] !== ay?.plugin || tk[61] !== ab || tk[62] !== tN.invocation.server || tk[63] !== tN.pluginId || tk[64] !== aN || tk[65] !== aj) {
                    let e = null == aN ? null : (0, et.b)(aN);
                    eG = (0, eN.a)({
                        pluginId: e?.plugin.id ?? ay?.plugin.id ?? tN.pluginId,
                        plugins: aj && null != e ? [e] : ab ?? [],
                        serverName: tN.invocation.server
                    }), tk[60] = ay?.plugin, tk[61] = ab, tk[62] = tN.invocation.server, tk[63] = tN.pluginId, tk[64] = aN, tk[65] = aj, tk[66] = eG
                } else eG = tk[66];
                let aC = eG,
                    aS = tY && null != ag && t$.isRenderable,
                    [aM, aI] = (0, h.useState)(!1),
                    {
                        data: aT,
                        error: aR,
                        isPending: aA,
                        isFetching: a_,
                        refetch: aL
                    } = (0, ea.f)({
                        appContext: tN.appContext,
                        connectorId: ah?.connectorId ?? null,
                        connectorTarget: ah?.kind === "target" ? ah : null,
                        hostId: tI,
                        originCallId: P,
                        server: tN.invocation.server,
                        threadId: tC,
                        uri: ag ?? null,
                        enabled: aS && !ax && (null == P || tN.completed)
                    }),
                    aE = ax ? void 0 : aT,
                    aP = tZ?.sessionId == null ? null : tZ.content.resource,
                    aU = null == aP ? aE?.resourceIdentityVerified : tZ?.content.mcpAppScope.resourceIdentityVerified,
                    aO = aE?.resource;
                tk[67] !== aO ? (eQ = (0, F.b)(aO), tk[67] = aO, tk[68] = eQ) : eQ = tk[68];
                let aD = eQ,
                    aJ = (0, B.d)({
                        resource: aE?.resource,
                        resourceError: aR,
                        isResourcePending: aA,
                        isResourceFetching: a_,
                        catalogError: au,
                        isCatalogPending: ac,
                        isCatalogFetching: ad,
                        canReadResource: !ax && (!R || null != ah)
                    }),
                    az = null == aP ? aJ.error : null,
                    aH = aS && null == aP && aJ.isLoading,
                    aq = (0, u.x)(Q.q, tG),
                    aW = (0, u.x)(Q.o, tG),
                    aK = (0, F.a)({
                        hasResourceError: null != az,
                        isResourceLoading: aH,
                        isDilEnabled: !1,
                        renderData: aP ?? aD,
                        resourceUri: ag ?? null,
                        shouldRenderMcpApp: aS
                    }),
                    aF = "html" === aK.kind ? aK.renderData : null,
                    aV = (0, B.c)({
                        data: aF,
                        error: az,
                        isLoading: aH
                    }, Q.G),
                    aB = "fallback" !== aK.kind,
                    aG = tY && null != ag && (!aB || null != az || null != aq || "too-large" === aV.kind || "error" === aV.kind),
                    aQ = aG || (aF?.isCollapsible ?? !0),
                    aZ = aW;
                aG ? aZ = "fallback" : "html" !== aK.kind && (aZ = aK.kind);
                let a$ = "pending" === aZ,
                    aY = "launcher" === aZ,
                    aX = a$ || aY;
                tk[69] !== tZ ? (eZ = null != tZ && tZ.content.resource?.hideAttribution === !0 && (!0 === tZ.content.mcpAppScope.isVerifiedFirstParty || (0, ew.b)(tZ.content)), tk[69] = tZ, tk[70] = eZ) : eZ = tk[70];
                let a1 = eZ,
                    a0 = "inline" === aZ,
                    a2 = void 0 !== tE && tE && aS,
                    a3 = !aG && aM || a2,
                    a4 = aB && !aY && (!aQ || (t1 ?? a3)),
                    a5 = a4 && !a$,
                    a6 = aM || (t1 ?? a2),
                    [a7, a8] = (0, h.useState)(!1),
                    a9 = a0 && a5 && a7,
                    ne = aH || a$ && a4;
                tk[71] !== a4 || tk[72] !== a9 || tk[73] !== ne ? (e$ = {
                    isLoading: ne,
                    isInlineRequested: a4,
                    isInlineOpening: a9
                }, tk[71] = a4, tk[72] = a9, tk[73] = ne, tk[74] = e$) : e$ = tk[74];
                let nt = (0, H.c)(tG, e$),
                    na = !aG && (a$ || "html" === aK.kind) ? nt : null,
                    nn = (0, G.b)(ap)?.resourceUri,
                    nl = t3?._meta;
                tk[75] !== nl ? (eY = d()(nl, ["_codex_apps", "resource_uri"]), tk[75] = nl, tk[76] = eY) : eY = tk[76];
                let no = eY,
                    ni = R && null != nn && no === nn && (0, p.Cg)(ap?._meta) === ag;
                tk[77] !== aF || tk[78] !== aQ || tk[79] !== a$ || tk[80] !== aZ || tk[81] !== aU || tk[82] !== ni || tk[83] !== na ? (eX = ni && !0 === aU && (0, H.b)({
                    isInline: !aQ && ("inline" === aZ || a$),
                    status: na,
                    hidesAttributionAndActions: aF?.hideAttribution === !0 && !0 === aF.hideActions
                }), tk[77] = aF, tk[78] = aQ, tk[79] = a$, tk[80] = aZ, tk[81] = aU, tk[82] = ni, tk[83] = na, tk[84] = eX) : eX = tk[84];
                let ns = !eX && (aX || !tD && (aQ || "html" === aK.kind && !a1)),
                    nr = tF?.name ?? tN.appContext?.appName ?? aC?.alt ?? (R ? null : (0, m.a)(tN.invocation.server)),
                    nc = (0, H.a)((0, v.a)(ap), nr),
                    nd = aG ? tD || aM : !aX && (tD || (aB ? a5 : a6));
                e: {
                    let e, t, a, n;
                    if (!nd) {
                        let e;
                        tk[85] !== t7 ? (e = {
                            displayContent: t7,
                            displayStructuredContentJson: null
                        }, tk[85] = t7, tk[86] = e) : e = tk[86], e1 = e;
                        break e
                    }
                    tk[87] !== tN.result ? (e = tN.result?.type === "success" && null != tN.result.structuredContent ? ez(tN.result.structuredContent, 2) : null, tk[87] = tN.result, tk[88] = e) : e = tk[88];
                    let l = e;tk[89] !== t7 || tk[90] !== tJ || tk[91] !== l ? (t = tJ && null != l && null != t7 ? t7.filter(eO) : t7, tk[89] = t7, tk[90] = tJ, tk[91] = l, tk[92] = t) : t = tk[92];
                    let o = t;tk[93] !== o ? (a = function(e) {
                        if (e?.length !== 1) return null;
                        let [t] = e;
                        if ("text" !== t.type || null != t.annotations) return null;
                        let a = t.text.trim();
                        if ("{" !== a[0] && "[" !== a[0]) return null;
                        try {
                            return ez(JSON.parse(a), 2)
                        } catch {
                            return null
                        }
                    }(o), tk[93] = o, tk[94] = a) : a = tk[94];
                    let i = a;
                    if (null == i) {
                        let e;
                        tk[95] !== l || tk[96] !== o ? (e = {
                            displayContent: o,
                            displayStructuredContentJson: l
                        }, tk[95] = l, tk[96] = o, tk[97] = e) : e = tk[97], e1 = e;
                        break e
                    }
                    if (null == l || i === l) {
                        let e, t;
                        tk[98] === Symbol.for("react.memo_cache_sentinel") ? (e = [], tk[98] = e) : e = tk[98];
                        let a = l ?? i;
                        tk[99] !== a ? (t = {
                            displayContent: e,
                            displayStructuredContentJson: a
                        }, tk[99] = a, tk[100] = t) : t = tk[100], e1 = t;
                        break e
                    }
                    tk[101] !== l || tk[102] !== o ? (n = {
                        displayContent: o,
                        displayStructuredContentJson: l
                    }, tk[101] = l, tk[102] = o, tk[103] = n) : n = tk[103],
                    e1 = n
                }
                let {
                    displayContent: nu,
                    displayStructuredContentJson: np
                } = e1, [nm, nh] = (0, h.useState)(!1);
                t: {
                    let e;
                    if (!nm) {
                        e0 = null;
                        break t
                    }
                    tk[104] !== tN.callId || tk[105] !== tN.durationMs || tk[106] !== tN.invocation || tk[107] !== tN.result ? (e = ez({
                        callId: tN.callId,
                        invocation: tN.invocation,
                        durationMs: tN.durationMs,
                        result: tN.result
                    }, 2), tk[104] = tN.callId, tk[105] = tN.durationMs, tk[106] = tN.invocation, tk[107] = tN.result, tk[108] = e) : e = tk[108],
                    e0 = e
                }
                let ng = e0;
                tk[109] !== tV ? (e2 = tV.formatMessage({
                    id: "codex.mcpTool.rawOutputTriggerTooltip",
                    defaultMessage: "Show raw tool call output",
                    description: "Tooltip for the button that opens the raw MCP tool output dialog"
                }), tk[109] = tV, tk[110] = e2) : e2 = tk[110];
                let nx = e2,
                    nv = tN.completed || null != tN.result || aB,
                    nf = nd ? t5 : 0,
                    nb = !tN.completed;
                tk[111] !== tF ? (e3 = null == tF ? [] : [tF], tk[111] = tF, tk[112] = e3) : e3 = tk[112], tk[113] !== tN || tk[114] !== tz || tk[115] !== e3 || tk[116] !== am ? (e4 = (0, n.jsx)(Y.a, {
                    item: tN,
                    apps: e3,
                    part: "label",
                    loadMetadata: tz,
                    children: am
                }), tk[113] = tN, tk[114] = tz, tk[115] = e3, tk[116] = am, tk[117] = e4) : e4 = tk[117], tk[118] !== nb || tk[119] !== e4 ? (e5 = (0, n.jsx)(eI.a, {
                    active: nb,
                    className: "min-w-0 shrink truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                    children: e4
                }), tk[118] = nb, tk[119] = e4, tk[120] = e5) : e5 = tk[120];
                let ny = e5;
                tk[121] !== al || tk[122] !== ao || tk[123] !== tI || tk[124] !== tN || tk[125] !== tz || tk[126] !== tF || tk[127] !== an || tk[128] !== at?.displayName || tk[129] !== ae || tk[130] !== t9 || tk[131] !== aC ? (e6 = void 0 !== al ? al : (0, n.jsx)(ep.a, {
                    hostId: tI,
                    item: tN,
                    loadRemoteLogos: tz,
                    fallback: null == aC && null != ae ? (0, n.jsx)(M.a, {
                        alt: at?.displayName ?? t9?.name ?? tN.invocation.server,
                        className: "icon-xs shrink-0 scale-[1.15] object-contain",
                        loadRemote: tz,
                        logoUrl: an,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(E.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: eL.a
                        })
                    }) : null == aC && t9?.groupKey === eh.b ? (0, n.jsx)(E.a, {
                        className: "shrink-0 text-secondary",
                        asset: eL.a
                    }) : null == aC && t9?.logoUrl != null ? (0, n.jsx)(M.a, {
                        alt: t9.name,
                        className: "icon-xs shrink-0 object-contain",
                        loadRemote: tz,
                        logoUrl: t9.logoUrl,
                        logoDarkUrl: null,
                        fallback: (0, n.jsx)(E.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: eE.a
                        })
                    }) : null == aC && t9?.usesBrowserIcon === !0 ? null == ao ? (0, n.jsx)(E.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: eU.a
                    }) : (0, n.jsx)(L.a, {
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        href: ao,
                        loadRemote: tz
                    }) : null == aC && (0, p.ei)(tN.invocation.server) ? (0, n.jsx)(E.a, {
                        className: "shrink-0 object-contain text-secondary",
                        asset: eP.a
                    }) : (0, n.jsx)(M.a, {
                        alt: aC?.alt ?? tF?.name ?? tN.appContext?.appName ?? tN.invocation.server,
                        appInfo: null == aC ? tF : null,
                        className: "icon-xs shrink-0 object-contain text-secondary",
                        loadRemote: tz,
                        knownAppId: aC?.knownAppId ?? tN.appContext?.appName ?? tN.appContext?.connectorId,
                        logoUrl: aC?.logoUrl,
                        fallback: (0, n.jsx)(E.a, {
                            className: "shrink-0 text-secondary",
                            "aria-hidden": !1,
                            asset: eE.a
                        })
                    })
                }), tk[121] = al, tk[122] = ao, tk[123] = tI, tk[124] = tN, tk[125] = tz, tk[126] = tF, tk[127] = an, tk[128] = at?.displayName, tk[129] = ae, tk[130] = t9, tk[131] = aC, tk[132] = e6) : e6 = tk[132];
                let nj = e6;
                tk[133] !== tq || tk[134] !== nj || tk[135] !== ny ? (e7 = tq ?? (0, n.jsxs)(n.Fragment, {
                    children: [nj, ny]
                }), tk[133] = tq, tk[134] = nj, tk[135] = ny, tk[136] = e7) : e7 = tk[136];
                let nw = e7;
                tk[137] !== a6 || tk[138] !== a4 || tk[139] !== aG || tk[140] !== aM || tk[141] !== tX || tk[142] !== tA || tk[143] !== tW || tk[144] !== a2 || tk[145] !== aB || tk[146] !== a0 || tk[147] !== tO || tk[148] !== t1 ? (e8 = () => {
                    if (aG) {
                        aM || tA?.(), aI(!aM);
                        return
                    }
                    let e = aB ? !a4 : !a6;
                    if (e && tA?.(), aB) {
                        a8(e && a0), (0, eg.e)(tW, tX, e);
                        return
                    }
                    e && null != tO && (0, eg.d)(tW, tO), !e && (!0 === t1 || a2) && (0, eg.e)(tW, tX, !1), aI(e)
                }, tk[137] = a6, tk[138] = a4, tk[139] = aG, tk[140] = aM, tk[141] = tX, tk[142] = tA, tk[143] = tW, tk[144] = a2, tk[145] = aB, tk[146] = a0, tk[147] = tO, tk[148] = t1, tk[149] = e8) : e8 = tk[149];
                let nk = e8;
                tk[150] !== tN.automaticApprovalReviews ? (e9 = null == tN.automaticApprovalReviews ? null : (0, n.jsx)(ec.a, {}), tk[150] = tN.automaticApprovalReviews, tk[151] = e9) : e9 = tk[151];
                let nN = e9;
                tk[152] !== nv || tk[153] !== nk || tk[154] !== aQ || tk[155] !== nd || tk[156] !== a5 || tk[157] !== aY || tk[158] !== a0 || tk[159] !== na ? (te = nv && "opening" !== na && !aY && aQ ? {
                    alignEnd: a0 && a5,
                    expanded: nd,
                    onToggle: nk
                } : void 0, tk[152] = nv, tk[153] = nk, tk[154] = aQ, tk[155] = nd, tk[156] = a5, tk[157] = aY, tk[158] = a0, tk[159] = na, tk[160] = te) : te = tk[160];
                let nC = te,
                    nS = a0 && a5 && (aF?.prefersBorder ?? tZ?.content.resource?.prefersBorder ?? !0) && "overflow-hidden rounded-lg border border-strong bg-surface";
                tk[161] !== nS ? (tt = (0, s.b)("group", nS), tk[161] = nS, tk[162] = tt) : tt = tk[162];
                let nM = tt,
                    nI = aY && "w-full",
                    nT = a0 && a5 && "w-full px-4 pt-3 pb-2";
                tk[163] !== nI || tk[164] !== nT ? (ta = (0, s.b)(nI, nT), tk[163] = nI, tk[164] = nT, tk[165] = ta) : ta = tk[165];
                let nR = ta;
                tk[166] !== nN || tk[167] !== nC || tk[168] !== nR || tk[169] !== aH || tk[170] !== tG || tk[171] !== nw || tk[172] !== nj || tk[173] !== nc || tk[174] !== na ? (tn = null != na ? (0, n.jsx)(q.a, {
                    accessory: nN,
                    className: nR,
                    disabled: aH,
                    disclosure: nC,
                    icon: nj,
                    mcpAppId: tG,
                    name: nc,
                    status: na
                }) : (0, n.jsx)(eR.a, {
                    accessory: nN,
                    className: nR,
                    disclosure: nC,
                    children: nw
                }), tk[166] = nN, tk[167] = nC, tk[168] = nR, tk[169] = aH, tk[170] = tG, tk[171] = nw, tk[172] = nj, tk[173] = nc, tk[174] = na, tk[175] = tn) : tn = tk[175];
                let nA = tn,
                    n_ = null == ag ? null : aF;
                tk[176] !== aH || tk[177] !== az || tk[178] !== n_ ? (tl = {
                    data: n_,
                    error: az,
                    isLoading: aH
                }, tk[176] = aH, tk[177] = az, tk[178] = n_, tk[179] = tl) : tl = tk[179];
                let nL = a0 ? "card" : "standalone",
                    nE = nr ?? void 0,
                    nP = a0 ? "inline" : aW;
                tk[180] !== aL ? (to = () => {
                    aL({
                        cancelRefetch: !1
                    })
                }, tk[180] = aL, tk[181] = to) : to = tk[181];
                let nU = !ns;
                tk[182] !== tG || tk[183] !== tl || tk[184] !== nL || tk[185] !== nE || tk[186] !== nP || tk[187] !== to || tk[188] !== nU ? (ti = (0, n.jsx)(V.a, {
                    hostDisplayModes: Q.G,
                    resource: tl,
                    inlineSurface: nL,
                    mcpAppId: tG,
                    pluginName: nE,
                    presentation: nP,
                    onRetryResourceRead: to,
                    showLoadingStatus: nU
                }), tk[182] = tG, tk[183] = tl, tk[184] = nL, tk[185] = nE, tk[186] = nP, tk[187] = to, tk[188] = nU, tk[189] = ti) : ti = tk[189];
                let nO = ti,
                    nD = +!!nd;
                tk[190] !== nD || tk[191] !== nf ? (ts = {
                    height: nf,
                    opacity: nD
                }, tk[190] = nD, tk[191] = nf, tk[192] = ts) : ts = tk[192];
                let nJ = nd ? "overflow-visible" : "overflow-hidden";
                tk[193] !== nJ ? (tr = (0, s.b)(nJ), tk[193] = nJ, tk[194] = tr) : tr = tk[194];
                let nz = nd ? "auto" : "none";
                tk[195] !== nz ? (tc = {
                    pointerEvents: nz
                }, tk[195] = nz, tk[196] = tc) : tc = tk[196], tk[197] !== a5 ? (td = () => {
                    a5 && a8(!1)
                }, tk[197] = a5, tk[198] = td) : td = tk[198];
                let nH = nd ? t6 : null,
                    nq = aS && "relative",
                    nW = !aQ && "py-1";
                tk[199] !== nq || tk[200] !== nW ? (tu = (0, s.b)(nq, nW), tk[199] = nq, tk[200] = nW, tk[201] = tu) : tu = tk[201];
                let nK = !a0 && aQ ? "grouped" : "flush";
                tk[202] !== tC || tk[203] !== nu || tk[204] !== np || tk[205] !== aF?.heightHint || tk[206] !== aF?.minFrameHeight || tk[207] !== aK || tk[208] !== t8 || tk[209] !== tI || tk[210] !== nd || tk[211] !== aH || tk[212] !== nm || tk[213] !== tN.automaticApprovalReviews || tk[214] !== tN.invocation.server || tk[215] !== tN.invocation.tool || tk[216] !== nO || tk[217] !== nx || tk[218] !== ng || tk[219] !== aB || tk[220] !== aS || tk[221] !== a9 || tk[222] !== a0 ? (tp = nd ? (0, n.jsxs)(n.Fragment, {
                    children: [null == tN.automaticApprovalReviews ? null : (0, n.jsx)(ec.d, {
                        className: a0 ? "px-4" : void 0,
                        isExpandable: !a0,
                        reviews: tN.automaticApprovalReviews
                    }), aB ? a9 ? (0, n.jsx)(eJ, {
                        heightHint: aF?.heightHint ?? null,
                        minFrameHeight: aF?.minFrameHeight ?? null
                    }) : nO : nu && nu.length > 0 ? (0, n.jsx)("div", {
                        className: (0, s.b)("[&_*]:text-text/50", "flex flex-col gap-0.5"),
                        children: nu.map((e, t) => (0, n.jsx)(eH, {
                            block: e,
                            conversationId: tC,
                            hostId: tI
                        }, t))
                    }) : t8 ? (0, n.jsx)(U.a, {
                        className: "w-full",
                        fullWidth: !0,
                        level: "danger",
                        children: (0, n.jsx)("div", {
                            className: "max-h-48 overflow-auto text-size-chat whitespace-pre-wrap",
                            children: t8
                        })
                    }) : np ? null : (0, n.jsx)("p", {
                        className: "text-codex-description/80",
                        children: (0, n.jsx)(x.a, {
                            id: "codex.mcpTool.noResult",
                            defaultMessage: "Tool returned no content",
                            description: "Message shown when an MCP tool call produced no content"
                        })
                    }), !aH && nd && !a9 && !aB && np && (0, n.jsx)(T.CodeSnippet, {
                        codeContainerClassName: "max-h-48 overflow-auto",
                        language: "json",
                        content: np,
                        showStickyRightContent: !1
                    }), !aH && nd && !a9 && (0, n.jsx)(A.b, {
                        open: nm,
                        onOpenChange: nh,
                        triggerContent: (0, n.jsx)("div", {
                            className: (0, s.b)("inline-flex w-fit", aS && "absolute right-1 bottom-2 z-50"),
                            children: (0, n.jsx)(o.a, {
                                side: "top",
                                align: "center",
                                content: nx,
                                children: (0, n.jsx)(I.a, {
                                    className: "cursor-interaction opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 focus-visible:opacity-100",
                                    "aria-label": nx,
                                    color: "ghost",
                                    onClick: () => {
                                        nh(!0)
                                    },
                                    size: "icon",
                                    children: (0, n.jsx)(J.a, {
                                        className: "icon-xxs"
                                    })
                                })
                            })
                        }),
                        children: (0, n.jsxs)(_.b, {
                            children: [(0, n.jsx)(_.e, {
                                children: (0, n.jsx)(_.d, {
                                    title: (0, n.jsx)(A.e, {
                                        children: (0, n.jsx)(x.a, {
                                            id: "codex.mcpTool.rawOutputHeading",
                                            defaultMessage: "Raw {server}.{tool} tool call output",
                                            description: "Heading shown within the raw output dialog",
                                            values: {
                                                server: tN.invocation.server,
                                                tool: tN.invocation.tool
                                            }
                                        })
                                    })
                                })
                            }), (0, n.jsx)(_.e, {
                                children: null == ng ? null : (0, n.jsx)(T.CodeSnippet, {
                                    codeContainerClassName: "max-h-128 overflow-auto",
                                    language: "json",
                                    content: ng,
                                    showStickyRightContent: !0
                                })
                            })]
                        })
                    })]
                }) : null, tk[202] = tC, tk[203] = nu, tk[204] = np, tk[205] = aF?.heightHint, tk[206] = aF?.minFrameHeight, tk[207] = aK, tk[208] = t8, tk[209] = tI, tk[210] = nd, tk[211] = aH, tk[212] = nm, tk[213] = tN.automaticApprovalReviews, tk[214] = tN.invocation.server, tk[215] = tN.invocation.tool, tk[216] = nO, tk[217] = nx, tk[218] = ng, tk[219] = aB, tk[220] = aS, tk[221] = a9, tk[222] = a0, tk[223] = tp) : tp = tk[223], tk[224] !== nH || tk[225] !== tu || tk[226] !== nK || tk[227] !== tp ? (tm = (0, n.jsx)(eT.a, {
                    ref: nH,
                    className: tu,
                    variant: nK,
                    children: tp
                }), tk[224] = nH, tk[225] = tu, tk[226] = nK, tk[227] = tp, tk[228] = tm) : tm = tk[228], tk[229] !== ts || tk[230] !== tr || tk[231] !== tc || tk[232] !== td || tk[233] !== tm ? (th = (0, n.jsx)(r.a.div, {
                    initial: !1,
                    animate: ts,
                    transition: ei.a,
                    className: tr,
                    style: tc,
                    onAnimationComplete: td,
                    children: tm
                }), tk[229] = ts, tk[230] = tr, tk[231] = tc, tk[232] = td, tk[233] = tm, tk[234] = th) : th = tk[234];
                let nF = th;
                tk[235] !== tN || tk[236] !== t_ ? (tg = (0, em.a)(tN) ? (0, n.jsx)(eT.a, {
                    variant: "grouped",
                    children: (0, n.jsx)(U.a, {
                        className: "w-full",
                        fullWidth: !0,
                        level: "warning",
                        actions: null == t_ ? void 0 : (0, n.jsx)(I.a, {
                            color: "secondary",
                            onClick: t_,
                            children: (0, n.jsx)(x.a, {
                                id: "codex.mcpTool.reviewPermissions",
                                defaultMessage: "Review permissions",
                                description: "Opens the existing permissions menu for the chat whose tool call could not request approval"
                            })
                        }),
                        children: null == t_ ? (0, n.jsx)(x.a, {
                            id: "codex.mcpTool.approvalRequestsDisabled",
                            defaultMessage: "Approval requests were disabled for this tool call. If available, review this chat’s permissions before retrying.",
                            description: "Explanation on a failed MCP tool call that needed approval but could not request it. Suggests the existing permissions control for this chat, which may be unavailable in read-only views or restricted by policy. Does not promise that restrictions can be overridden."
                        }) : (0, n.jsx)(x.a, {
                            id: "codex.mcpTool.approvalRequestsDisabled.recovery",
                            defaultMessage: "Approval requests were disabled for this tool call. Choose “Ask for approval” in this chat’s permissions if available, then ask to retry.",
                            description: "Explains that the tool call was blocked before approval could be requested. The adjacent action opens this chat's permissions menu; the user must select an allowed mode and ask to retry. Managed policy may limit the available modes."
                        })
                    })
                }) : null, tk[235] = tN, tk[236] = t_, tk[237] = tg) : tg = tk[237];
                let nV = aX ? nO : nF;
                tk[238] !== tg || tk[239] !== nV ? (tx = (0, n.jsxs)(n.Fragment, {
                    children: [tg, nV]
                }), tk[238] = tg, tk[239] = nV, tk[240] = tx) : tx = tk[240];
                let nB = tx;
                tk[241] !== tN ? (tv = (0, j.a)(tN), tk[241] = tN, tk[242] = tv) : tv = tk[242];
                let nG = tv;
                if (null != nG) {
                    let e;
                    return tk[243] !== nG.id || tk[244] !== nG.schedule || tk[245] !== nG.title ? (e = (0, n.jsx)(W.a, {
                        id: nG.id,
                        mode: "view",
                        name: nG.title,
                        rrule: nG.schedule
                    }), tk[243] = nG.id, tk[244] = nG.schedule, tk[245] = nG.title, tk[246] = e) : e = tk[246], e
                }
                tk[247] !== tI || tk[248] !== tN ? (tf = (0, $.b)(tN, tI), tk[247] = tI, tk[248] = tN, tk[249] = tf) : tf = tk[249];
                let nQ = tf;
                if (nQ?.type === "chatgpt-automation") {
                    let e;
                    return tk[250] !== nQ ? (e = (0, n.jsx)(k.a, {
                        automation: nQ
                    }), tk[250] = nQ, tk[251] = e) : e = tk[251], e
                }
                if (nQ?.type === "chatgpt-automation-list") {
                    let e;
                    return tk[252] !== nQ.automations ? (e = (0, n.jsx)(N.a, {
                        automations: nQ.automations
                    }), tk[252] = nQ.automations, tk[253] = e) : e = tk[253], e
                }
                tk[254] !== a4 || tk[255] !== tG || tk[256] !== tH || tk[257] !== tW.value || tk[258] !== aS ? (tb = tH || "chatgpt-thread" !== tW.value.routeKind ? (0, n.jsx)(Z.a, {
                    mcpAppId: tG,
                    isInlineRequested: aS && a4
                }) : null, tk[254] = a4, tk[255] = tG, tk[256] = tH, tk[257] = tW.value, tk[258] = aS, tk[259] = tb) : tb = tk[259], tk[260] !== nN || tk[261] !== nM || tk[262] !== nC || tk[263] !== ns || tk[264] !== nR || tk[265] !== nB || tk[266] !== a0 || tk[267] !== tq || tk[268] !== tU || tk[269] !== ny || tk[270] !== nA || tk[271] !== na ? (ty = void 0 !== tU && ns && null == na ? (0, n.jsx)(ef.a, {
                    accessory: nN,
                    body: nB,
                    className: nM,
                    "data-mcp-app-card": !!a0 || void 0,
                    disclosure: nC,
                    headerClassName: nR,
                    icon: tU,
                    summary: tq ?? ny
                }) : (0, n.jsx)(eA.a, {
                    className: nM,
                    "data-mcp-app-card": !!a0 || void 0,
                    header: ns ? nA : null,
                    body: nB
                }), tk[260] = nN, tk[261] = nM, tk[262] = nC, tk[263] = ns, tk[264] = nR, tk[265] = nB, tk[266] = a0, tk[267] = tq, tk[268] = tU, tk[269] = ny, tk[270] = nA, tk[271] = na, tk[272] = ty) : ty = tk[272], tk[273] !== ao || tk[274] !== tN.callId || tk[275] !== tz ? (tj = (e, t) => (0, n.jsxs)(h.Fragment, {
                    children: [(0, n.jsx)(ej.a, {
                        variant: "grouped"
                    }), (0, n.jsx)(eD, {
                        call: e,
                        fallbackPageUrl: ao,
                        loadRemoteLogos: tz
                    })]
                }, `${tN.callId}:webmcp:${t}:${e.name}`), tk[273] = ao, tk[274] = tN.callId, tk[275] = tz, tk[276] = tj) : tj = tk[276];
                let nZ = ai.map(tj);
                return tk[277] !== tb || tk[278] !== ty || tk[279] !== nZ ? (tw = (0, n.jsxs)(n.Fragment, {
                    children: [tb, ty, nZ]
                }), tk[277] = tb, tk[278] = ty, tk[279] = nZ, tk[280] = tw) : tw = tk[280], tw
            }
        })
    }),
    KU8M: (function(e, t, a) {
        var n = a("iTtm"),
            l = a("xnQm"),
            o = a("KJ1J"),
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
                if (null == n) return d(s.n, a);
                let u = {
                    hostId: a,
                    threadId: n,
                    serverName: r.server
                };
                if (!(0, o.e)(r.server) || r.appContext?.linkId == null) return d(s.o, u);
                let p = d(s.n, a);
                if (p.isError) return d(s.o, u);
                let m = (0, c.c)({
                    ...r,
                    mcpServerStatuses: p.data
                });
                return void 0 === m || (0, l.Cg)(m?._meta) === r.appContext.resourceUri && null != (0, i.c)(m, r.appContext) ? p : d(s.o, u)
            }),
            u = (0, n.d)(r.a, (e, t) => {
                let {
                    appContext: a,
                    hostId: n,
                    invocationResourceUri: l,
                    server: s,
                    threadId: r,
                    tool: c
                } = e, {
                    get: u
                } = t;
                if (!(0, o.e)(s)) return null;
                let p = u(d, {
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
            a: d,
            b: u
        })
    }),
    GmdE: (function(e, t, a) {
        var n = a("ABep"),
            l = a("QosV"),
            o = a("iTtm"),
            i = a("xnQm"),
            s = a("sM3V"),
            r = a("KJ1J"),
            c = a("FvYa"),
            d = a("zUz7"),
            u = a("LF5P");
        a.d(t, {}, {
            a: function(e) {
                let t, a, p, m, h = (0, l.c)(14),
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
                let y = (0, o.x)(!f || null != (0, u.e)({
                    item: v
                }) || (0, i.ei)(v.invocation.server) || (0, r.e)(v.invocation.server) ? null : s.a, a);
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
            s = a("iTtm"),
            r = a("xnQm"),
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
                let t, a, o, b, y, j, w, k, N, C = (0, l.c)(134),
                    {
                        elicitation: S,
                        result: M,
                        id: I,
                        kind: T,
                        mode: R,
                        name: A,
                        prompt: _,
                        rrule: L,
                        projectId: E,
                        cwds: P,
                        destination: U,
                        executionEnvironment: O,
                        localEnvironmentConfigPath: D,
                        model: J,
                        reasoningEffort: z,
                        notificationPolicy: H,
                        targetThreadId: q,
                        status: W
                    } = e,
                    K = void 0 === M ? null : M,
                    F = (0, s.y)(v.a),
                    V = (0, c.a)();
                (0, g.a)();
                let B = (0, d.X)("/remote/:conversationId"),
                    G = (0, d.X)("/local/:conversationId"),
                    Q = (0, s.z)(h.e),
                    Z = q ?? null;
                C[0] !== P || C[1] !== U || C[2] !== O || C[3] !== I || C[4] !== T || C[5] !== D || C[6] !== R || C[7] !== J || C[8] !== A || C[9] !== H || C[10] !== E || C[11] !== _ || C[12] !== z || C[13] !== Z || C[14] !== L || C[15] !== W ? (t = JSON.stringify({
                    id: I,
                    kind: T,
                    mode: R,
                    name: A,
                    prompt: _,
                    rrule: L,
                    projectId: E,
                    cwds: P,
                    destination: U,
                    executionEnvironment: O,
                    localEnvironmentConfigPath: D,
                    model: J,
                    reasoningEffort: z,
                    notificationPolicy: H,
                    targetThreadId: Z,
                    status: W
                }), C[0] = P, C[1] = U, C[2] = O, C[3] = I, C[4] = T, C[5] = D, C[6] = R, C[7] = J, C[8] = A, C[9] = H, C[10] = E, C[11] = _, C[12] = z, C[13] = Z, C[14] = L, C[15] = W, C[16] = t) : t = C[16];
                let $ = t,
                    Y = Q?.directiveKey === $ ? Q.automationId : null,
                    X = Y ?? K?.automationId ?? I,
                    ee = K?.snapshot ?? null,
                    et = "view" === R ? R : null,
                    ea = "view" === R && null != I,
                    en = null != I && (ea || "suggested-update" === R),
                    el = (0, s.z)(u.c),
                    eo = el.data,
                    ei = !!en && el.isLoading;
                if (C[17] !== eo?.items || C[18] !== el.isLoading || C[19] !== Y || C[20] !== P || C[21] !== $ || C[22] !== et || C[23] !== S || C[24] !== O || C[25] !== I || C[26] !== V || C[27] !== ei || C[28] !== ea || C[29] !== T || C[30] !== D || C[31] !== G || C[32] !== R || C[33] !== J || C[34] !== A || C[35] !== H || C[36] !== E || C[37] !== _ || C[38] !== z || C[39] !== B || C[40] !== X || C[41] !== Z || C[42] !== K?.automationId || C[43] !== K?.deleteStatus || C[44] !== K?.mode || C[45] !== ee?.name || C[46] !== ee?.rrule || C[47] !== L || C[48] !== F || C[49] !== en || C[50] !== W) {
                    var es;
                    let e, t, n, l, s, c, d, u, p, g, v, f, k, N, M = null != I ? eo?.items.find(e => e.id === I) ?? null : null;
                    C[57] !== eo?.items || C[58] !== Y || C[59] !== V || C[60] !== ei || C[61] !== ea || C[62] !== R || C[63] !== A || C[64] !== X || C[65] !== K?.mode || C[66] !== ee?.name || C[67] !== ee?.rrule || C[68] !== L ? ({
                        resolvedName: b,
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
                        } = e, c = "delete" !== a && (n || "suggested-create" !== a && "suggested-update" !== a) && null != l && s ? s.find(e => e.id === l) ?? null : null, d = c?.name ?? o ?? null;
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
                        trimmedRrule: L ?? ee?.rrule ?? null,
                        automations: eo?.items ?? null,
                        isLoading: ei
                    }), l = V.formatMessage({
                        id: "settings.automations.rruleSummaryFallback",
                        defaultMessage: "Custom schedule",
                        description: "Fallback label when RRULE summary cannot be generated"
                    }), s = (0, m.f)({
                        rrule: n,
                        intl: V,
                        fallbackMessage: l
                    }), C[57] = eo?.items, C[58] = Y, C[59] = V, C[60] = ei, C[61] = ea, C[62] = R, C[63] = A, C[64] = X, C[65] = K?.mode, C[66] = ee?.name, C[67] = ee?.rrule, C[68] = L, C[69] = t, C[70] = b, C[71] = n, C[72] = l, C[73] = s) : (t = C[69], b = C[70], n = C[71], l = C[72], s = C[73]);
                    let U = s;
                    C[74] !== V ? (c = V.formatMessage({
                        id: "settings.automations.loading",
                        defaultMessage: "Loading…",
                        description: "Loading state for workflows list"
                    }), C[74] = V, C[75] = c) : c = C[75];
                    let q = c;
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
                    w = t ? q : b || eu || Q, C[81] !== eu || C[82] !== V || C[83] !== b ? (p = b ?? eu ?? V.formatMessage({
                        id: "automation.updateDirective.untitled",
                        defaultMessage: "Untitled scheduled task",
                        description: "Fallback title when scheduled task name is missing"
                    }), C[81] = eu, C[82] = V, C[83] = b, C[84] = p) : p = C[84];
                    let ep = p,
                        em = U || (t ? q : null != n ? l : null),
                        eh = null != A && null != _ && null != L && ("heartbeat" === T ? null != Z : void 0 !== E || null != P),
                        eg = null != I && null != W && null != A && null != _ && null != L && (null == M ? "heartbeat" === T ? null != Z : void 0 !== E || null != P : !!(0, r.Wh)(M) || void 0 !== E || null != P),
                        ex = "suggested-update" === R && en && el.isLoading,
                        ev = "suggested-create" === R || "suggested-update" === R,
                        ef = ev ? S : void 0,
                        eb = I ?? null,
                        ey = T ?? null,
                        ej = A ?? "",
                        ew = _ ?? "",
                        ek = L ?? "";
                    C[85] !== P ? (g = P ?? [], C[85] = P, C[86] = g) : g = C[86];
                    let eN = void 0 !== E ? E : P?.[0] === r.dd ? null : P?.[0] ?? null,
                        eC = O ?? null,
                        eS = D ?? null,
                        eM = J ?? null,
                        eI = z ?? null;
                    C[87] !== H ? (v = void 0 !== H ? {
                        notificationPolicy: H
                    } : {}, C[87] = H, C[88] = v) : v = C[88];
                    let eT = W ?? null;
                    C[89] !== $ || C[90] !== et || C[91] !== Z || C[92] !== eb || C[93] !== ey || C[94] !== ej || C[95] !== ew || C[96] !== ek || C[97] !== g || C[98] !== eN || C[99] !== eC || C[100] !== eS || C[101] !== eM || C[102] !== eI || C[103] !== v || C[104] !== eT || C[105] !== ef ? (f = {
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
                        localEnvironmentConfigPath: eS,
                        model: eM,
                        reasoningEffort: eI,
                        ...v,
                        targetThreadId: Z,
                        status: eT
                    }, C[89] = $, C[90] = et, C[91] = Z, C[92] = eb, C[93] = ey, C[94] = ej, C[95] = ew, C[96] = ek, C[97] = g, C[98] = eN, C[99] = eC, C[100] = eS, C[101] = eM, C[102] = eI, C[103] = v, C[104] = eT, C[105] = ef, C[106] = f) : f = C[106];
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
                    y = ec ? null : em, C[113] !== e_ || C[114] !== ed || C[115] !== Y || C[116] !== eR || C[117] !== ex || C[118] !== ev || C[119] !== G || C[120] !== B || C[121] !== F || C[122] !== ep ? (N = () => {
                        if (!ex) {
                            if (null != ed) return void x.c.dispatchHostMessage({
                                type: "navigate-to-route",
                                path: `/automations?automationId=${ed}`
                            });
                            "create" === e_ && (F.set(h.e, null), F.set(h.f, eR), x.c.dispatchHostMessage({
                                type: "navigate-to-route",
                                path: "/automations?automationMode=create"
                            }))
                        }
                    }, C[113] = e_, C[114] = ed, C[115] = Y, C[116] = eR, C[117] = ex, C[118] = ev, C[119] = G, C[120] = B, C[121] = F, C[122] = ep, C[123] = N) : N = C[123], o = N, a = !ec && !ex && (null != ed || "create" === e_), j = function(e) {
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
                    }), C[17] = eo?.items, C[18] = el.isLoading, C[19] = Y, C[20] = P, C[21] = $, C[22] = et, C[23] = S, C[24] = O, C[25] = I, C[26] = V, C[27] = ei, C[28] = ea, C[29] = T, C[30] = D, C[31] = G, C[32] = R, C[33] = J, C[34] = A, C[35] = H, C[36] = E, C[37] = _, C[38] = z, C[39] = B, C[40] = X, C[41] = Z, C[42] = K?.automationId, C[43] = K?.deleteStatus, C[44] = K?.mode, C[45] = ee?.name, C[46] = ee?.rrule, C[47] = L, C[48] = F, C[49] = en, C[50] = W, C[51] = a, C[52] = o, C[53] = b, C[54] = y, C[55] = j, C[56] = w
                } else a = C[51], o = C[52], b = C[53], y = C[54], j = C[55], w = C[56];
                let er = j;
                C[124] !== er || C[125] !== b || C[126] !== y ? (k = [er, b, y].filter(f), C[124] = er, C[125] = b, C[126] = y, C[127] = k) : k = C[127];
                let ec = k.join(" · "),
                    ed = y ?? er,
                    eu = ec || void 0;
                return C[128] !== a || C[129] !== o || C[130] !== ed || C[131] !== eu || C[132] !== w ? (N = (0, n.jsx)(p.a, {
                    title: w,
                    subtitle: ed,
                    ariaLabel: eu,
                    canOpen: a,
                    onOpen: o
                }), C[128] = a, C[129] = o, C[130] = ed, C[131] = eu, C[132] = w, C[133] = N) : N = C[133], N
            }
        })
    }),
    KLqe: (function(e, t, a) {
        var n = a("ABep"),
            l = a("QosV"),
            o = a("iTtm"),
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
                let t, a, s, h, g, x, v, f, b = (0, l.c)(32),
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
                let T = s;
                b[13] !== T ? (h = null == T ? null : {
                    kind: "page",
                    id: T.page_id
                }, b[13] = T, b[14] = h) : h = b[14], b[15] !== k ? (g = {
                    enabled: k
                }, b[15] = k, b[16] = g) : g = b[16];
                let R = (0, o.x)(u.b, h, g);
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
            l = a("QosV"),
            o = a("oyxz"),
            i = a("ED7I"),
            s = a("qRWe");

        function r(e) {
            let {
                runNowAction: t,
                editAction: a
            } = e;
            return (0, n.jsxs)(n.Fragment, {
                children: [null != a ? (0, n.jsx)(s.c, {
                    disabled: a.disabled,
                    onClick: a.onSelect,
                    children: (0, n.jsx)(o.a, {
                        id: "settings.automations.edit",
                        defaultMessage: "Edit",
                        description: "Menu item for editing a scheduled task"
                    })
                }) : null, null != t ? (0, n.jsx)(s.c, {
                    disabled: t.disabled,
                    onClick: t.onSelectAsync ?? t.onSelect,
                    children: (0, n.jsx)(o.a, {
                        id: "settings.automations.runNow",
                        defaultMessage: "Run now",
                        description: "Button label for running an automation immediately"
                    })
                }) : null]
            })
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a = (0, l.c)(3),
                    {
                        item: o,
                        onEdit: s
                    } = e;
                return a[0] !== o || a[1] !== s ? (t = (0, n.jsx)(i.a, {
                    item: o,
                    onEdit: s,
                    renderActions: r
                }), a[0] = o, a[1] = s, a[2] = t) : t = a[2], t
            }
        })
    })
};