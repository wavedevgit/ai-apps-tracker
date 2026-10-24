export const __rspack_esm_id = 740647;
export const __rspack_esm_ids = [740647];
export const __webpack_modules__ = {
    RZnR: (function(e, t, a) {
        function n(e) {
            if (null != e && (null != e.appMetadata && "firstPartyType" in e.appMetadata && "string" == typeof e.appMetadata.firstPartyType && "" !== e.appMetadata.firstPartyType.trim() || "DEFAULT_OAI_CATALOG" === e.distributionChannel || "ECOSYSTEM_DIRECTORY" === e.distributionChannel)) return e.name
        }
        a.d(t, {
            a: () => n
        })
    }),
    OusJ: (function(e, t, a) {
        var n = a("ABep"),
            l = a("QosV"),
            o = a("zd8w"),
            i = a("oyxz"),
            s = a("HOLv"),
            r = a("VL1D"),
            c = a("Hzz5");

        function d(e) {
            let t, a, d, u, p, m, h, x = (0, l.c)(28),
                {
                    ref: g,
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
                M = k;
            if (null == k && y) {
                let e, t;
                x[0] !== w ? (e = w ?? (0, n.jsx)(i.a, {
                    id: "automation.updateDirective.open",
                    defaultMessage: "Open",
                    description: "Button label for opening an automation from a task message"
                }), x[0] = w, x[1] = e) : e = x[1], x[2] !== e ? (t = (0, n.jsx)(r.g, {
                    label: e
                }), x[2] = e, x[3] = t) : t = x[3], M = t
            }
            x[4] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(r.f, {
                children: (0, n.jsx)(s.a, {
                    asset: c.a,
                    "aria-hidden": !0
                })
            }), x[4] = t) : t = x[4], x[5] !== v || x[6] !== C ? (a = (0, n.jsx)("span", {
                id: C,
                children: v
            }), x[5] = v, x[6] = C, x[7] = a) : a = x[7], x[8] !== N || x[9] !== f ? (d = f ? (0, n.jsx)("span", {
                id: N,
                children: f
            }) : null, x[8] = N, x[9] = f, x[10] = d) : d = x[10], x[11] !== M ? (u = null != M ? (0, n.jsx)("span", {
                className: "pointer-events-auto flex shrink-0 items-center gap-1",
                children: M
            }) : null, x[11] = M, x[12] = u) : u = x[12], x[13] !== a || x[14] !== d || x[15] !== u ? (p = (0, n.jsx)(r.h, {
                className: "pointer-events-none relative z-10",
                icon: t,
                title: a,
                subtitle: d,
                trailing: u
            }), x[13] = a, x[14] = d, x[15] = u, x[16] = p) : p = x[16];
            let S = p,
                T = null == b ? C : void 0,
                I = f ? N : void 0,
                R = !y,
                A = null == k ? S : null;
            x[17] !== b || x[18] !== j || x[19] !== g || x[20] !== T || x[21] !== I || x[22] !== R || x[23] !== A ? (m = (0, n.jsx)(r.b, {
                ref: g,
                "aria-label": b,
                "aria-labelledby": T,
                "aria-describedby": I,
                disabled: R,
                onClick: j,
                children: A
            }), x[17] = b, x[18] = j, x[19] = g, x[20] = T, x[21] = I, x[22] = R, x[23] = A, x[24] = m) : m = x[24];
            let _ = null != k ? S : null;
            return x[25] !== m || x[26] !== _ ? (h = (0, n.jsx)(r.a, {
                as: "span",
                className: "mt-3 select-none",
                variant: "attachment",
                children: (0, n.jsxs)("span", {
                    className: "group/resource-card relative",
                    "data-automation-card": !0,
                    children: [m, _]
                })
            }), x[25] = m, x[26] = _, x[27] = h) : h = x[27], h
        }
        a.d(t, {
            a: () => d
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

        function c(e) {
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
        }
        a.d(t, {
            a: () => c,
            b: () => r
        })
    }),
    HzCW: (function(e, t, a) {
        var n = a("ASxG");
        let l = n.object({
            navigationSource: n.enum(["scheduled_page", "notification", "conversation", "conversation_sidebar", "editor"])
        });

        function o(e) {
            let t = l.safeParse(e);
            return t.success ? t.data.navigationSource : void 0
        }
        a.d(t, {
            a: () => o
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

        function m(e) {
            let t, a, s, m, h, x, g, v = (0, l.c)(21),
                {
                    automation: f
                } = e,
                b = (0, o.y)(u.a),
                y = (0, i.a)(),
                j = (0, o.x)(c.d, f.id);
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
            }), v[13] = w, v[14] = s, v[15] = m, v[16] = k, v[17] = h) : h = v[17], v[18] === Symbol.for("react.memo_cache_sentinel") ? (x = null, v[18] = x) : x = v[18], v[19] !== h ? (g = (0, n.jsxs)("div", {
                className: "flex w-full min-w-0 flex-col gap-2 self-start",
                children: [h, x]
            }), v[19] = h, v[20] = g) : g = v[20], g
        }

        function h(e) {
            let t, a, o, i, r = (0, l.c)(10),
                {
                    operation: c
                } = e;
            return r[0] !== c ? (t = "create" === c && (0, n.jsx)(s.a, {
                id: "chatgpt.tasks.conversation.tool_status.creating",
                defaultMessage: "Creating scheduled task",
                description: "Short status message shown in a ChatGPT conversation while the scheduled-task tool creates a task for the user. This label has no trailing punctuation or ellipsis."
            }), r[0] = c, r[1] = t) : t = r[1], r[2] !== c ? (a = "update" === c && (0, n.jsx)(s.a, {
                id: "chatgpt.tasks.conversation.tool_status.updating",
                defaultMessage: "Updating scheduled task",
                description: "Short status message shown in a ChatGPT conversation while the scheduled-task tool updates an existing task for the user. This label has no trailing punctuation or ellipsis."
            }), r[2] = c, r[3] = a) : a = r[3], r[4] !== c ? (o = "list" === c && (0, n.jsx)(s.a, {
                id: "chatgpt.tasks.conversation.tool_status.listing",
                defaultMessage: "Listing scheduled tasks",
                description: "Short status message shown in a ChatGPT conversation while the scheduled-task tool retrieves the user's tasks. This label has no trailing punctuation or ellipsis."
            }), r[4] = c, r[5] = o) : o = r[5], r[6] !== t || r[7] !== a || r[8] !== o ? (i = (0, n.jsxs)("div", {
                className: "loading-shimmer-pure-text text-size-chat text-secondary select-none",
                role: "status",
                children: [t, a, o]
            }), r[6] = t, r[7] = a, r[8] = o, r[9] = i) : i = r[9], i
        }
        a.d(t, {
            a: () => m,
            b: () => h
        })
    }),
    VRzh: (function(e, t, a) {
        var n = a("QosV"),
            l = a("txhS"),
            o = a("iTtm"),
            i = a("zd8w"),
            s = a("HZfM"),
            r = a("mgfw"),
            c = a("HzCW"),
            d = a("yGJW"),
            u = a("tSEg"),
            p = a("MrGp");
        let m = (0, o.v)(u.a, e => !1);

        function h(e) {
            let t, a, h, x = (0, n.c)(8),
                {
                    conversationId: g
                } = e,
                v = (0, o.y)(u.a),
                {
                    key: f,
                    state: b
                } = (0, s.X)();
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
                    v.get(m, n) || (v.set(m, n, !0), (0, d.a)(v, l.c, {
                        type: "CHATGPT_TASKS_EVENT_TYPE_CONVERSATION_WITH_TASK_VIEWED",
                        conversationId: a,
                        openSource: null == y ? void 0 : r.c[y],
                        openDestination: "CHATGPT_TASKS_OPEN_DESTINATION_CONVERSATION"
                    }))
                })
            }, h = [g, f, v, y], x[2] = g, x[3] = f, x[4] = v, x[5] = y, x[6] = a, x[7] = h) : (a = x[6], h = x[7]), (0, i.useEffect)(a, h), null
        }
        a.d(t, {
            a: () => h
        })
    }),
    DuVB: (function(e, t, a) {
        var n = a("odKs"),
            l = a("TZBk"),
            o = a("fGpH");

        function i(e, t, a) {
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
        a.d(t, {
            a: () => i
        })
    }),
    bPZ9: (function(e, t, a) {
        var n = a("ABep"),
            l = a("QosV"),
            o = a("iTtm"),
            i = a("zd8w"),
            s = a("oyxz"),
            r = a("Wf1j"),
            c = a("HZfM"),
            d = a("Ro2M"),
            u = a("bN4H"),
            p = a("wdI6"),
            m = a("bCFz"),
            h = a("tSEg"),
            x = a("cWHY"),
            g = a("VRzh"),
            v = a("DuVB");

        function f(e) {
            let t, a, i, r, u, p, h, v, f, y, j = (0, l.c)(25),
                {
                    automations: w,
                    conversationId: k
                } = e,
                N = (0, c.Z)(),
                {
                    data: C,
                    isSuccess: M
                } = (0, o.z)(d.h);
            if (j[0] !== w || j[1] !== C || j[2] !== k || j[3] !== M) {
                let e, l = M && C.isAvailable ? w.filter(e => {
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
                i = "w-full max-w-sm overflow-hidden rounded-2xl border border-default bg-surface", r = null != k && l.length > 0 ? (0, n.jsx)(g.a, {
                    conversationId: k
                }) : null, j[9] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(m.a, {
                    "aria-hidden": "true",
                    className: "icon-sm shrink-0"
                }), j[9] = e) : e = j[9], j[10] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, n.jsxs)("header", {
                    className: "flex items-center gap-2 border-b border-subtle px-4 py-3 text-sm text-secondary select-none",
                    children: [e, (0, n.jsx)("h2", {
                        className: "text-sm font-medium uppercase",
                        children: (0, n.jsx)(x.a, {
                            children: (0, n.jsx)(s.a, {
                                id: "automations.scheduled.destination.label",
                                defaultMessage: "Scheduled",
                                description: "Title of the Scheduled destination and the compact scheduled-task list in a conversation"
                            })
                        })
                    })]
                }), j[10] = u) : u = j[10], t = "px-4", a = l.slice(0, 5).map(b), j[0] = w, j[1] = C, j[2] = k, j[3] = M, j[4] = t, j[5] = a, j[6] = i, j[7] = r, j[8] = u
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
            }), j[14] = p, j[15] = v) : v = j[15], j[16] !== t || j[17] !== a || j[18] !== v ? (f = (0, n.jsxs)("ul", {
                className: t,
                children: [a, v]
            }), j[16] = t, j[17] = a, j[18] = v, j[19] = f) : f = j[19], j[20] !== i || j[21] !== r || j[22] !== u || j[23] !== f ? (y = (0, n.jsxs)("section", {
                className: i,
                children: [r, u, f]
            }), j[20] = i, j[21] = r, j[22] = u, j[23] = f, j[24] = y) : y = j[24], y
        }

        function b(e) {
            return (0, n.jsx)(y, {
                automation: e
            }, e.id)
        }
        let y = (0, i.memo)(function(e) {
            let t, a, i, s, c, m, x, g = (0, l.c)(19),
                {
                    automation: f
                } = e,
                b = (0, o.y)(h.a),
                y = (0, r.a)(),
                j = (0, o.x)(d.d, f.id);
            g[0] !== f || g[1] !== j || g[2] !== y ? (t = (0, v.a)(f, j, y), g[0] = f, g[1] = j, g[2] = y, g[3] = t) : t = g[3];
            let {
                scheduleLabel: w,
                title: k
            } = t;
            return g[4] !== f.id || g[5] !== b || g[6] !== k ? (a = () => {
                (0, u.openAutomationSidePanelTab)({
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
        a.d(t, {
            a: () => f
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
            d = a("o0PZ"),
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
                    let a = (0, d.dj)(t._meta);
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
        let x = (0, s.b)("conversation-sources:connector-asset-title-cache", {}),
            g = (0, n.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return null != t(x)
            }),
            v = (0, n.q)(i.a, (e, t) => {
                let {
                    hostId: a,
                    url: n
                } = e, {
                    get: i,
                    scope: s
                } = t, c = h(n), d = null == c ? null : JSON.stringify([a, c.cacheKey]), u = i(g);
                return {
                    enabled: null != c && u,
                    queryFn: async () => {
                        let e = s.get(x);
                        if (null == c || null == d || null == e) return null;
                        let t = e[d];
                        if (null != t && Date.now() - t.resolvedAt < 864e5) return t.title;
                        try {
                            let e = (0, l.f)({
                                    isCodexAppsServer: "codex_apps" === c.server,
                                    toolResult: await (0, o.b)(s, a, c.server, c.tool, c.arguments)
                                }),
                                t = m[c.sourceAppId]?.getTitle(c, e) ?? null;
                            return null != t && s.set(x, {
                                ...s.get(x),
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
            p = a("wdI6"),
            m = a("V8uZ"),
            h = a("Sgcz"),
            x = a("umSm"),
            g = a("Hlwg");

        function v(e) {
            let t, a, i = (0, l.c)(5),
                {
                    className: s,
                    tone: r
                } = e,
                c = "warning" === (void 0 === r ? "default" : r) ? "text-warning" : "text-tertiary";
            return i[0] !== s || i[1] !== c ? (t = (0, o.b)("shrink-0", c, s), i[0] = s, i[1] = c, i[2] = t) : t = i[2], i[3] !== t ? (a = (0, n.jsx)(u.a, {
                className: t,
                asset: g.a,
                "aria-hidden": !0
            }), i[3] = t, i[4] = a) : a = i[4], a
        }

        function f(e) {
            let t, a, c, u, g, v, f, y, j, w, k, N, C, M, S = (0, l.c)(43),
                {
                    className: T,
                    isExpandable: I,
                    review: R
                } = e,
                A = (0, r.a)(),
                [_, L] = (0, s.useState)(!1);
            S[0] !== A || S[1] !== R ? (t = (0, h.c)(A, R), S[0] = A, S[1] = R, S[2] = t) : t = S[2];
            let U = t;
            if (!(void 0 === I || I)) {
                let e, t;
                return S[3] !== T ? (e = (0, o.b)("min-w-0 truncate pt-1 text-codex-description/80", T), S[3] = T, S[4] = e) : e = S[4], S[5] !== e || S[6] !== U ? (t = (0, n.jsx)("div", {
                    className: e,
                    children: U
                }), S[5] = e, S[6] = U, S[7] = t) : t = S[7], t
            }
            let E = "denied" === R.status && "high" === R.riskLevel;
            S[8] !== A || S[9] !== R ? (a = (0, h.b)(A, R), S[8] = A, S[9] = R, S[10] = a) : a = S[10];
            let P = a;
            S[11] !== T ? (c = (0, o.b)("flex flex-col pt-1", T), S[11] = T, S[12] = c) : c = S[12], S[13] === Symbol.for("react.memo_cache_sentinel") ? (u = () => L(b), S[13] = u) : u = S[13];
            let O = "inProgress" === R.status,
                D = E ? "text-warning" : "text-codex-description/80 group-hover/automatic-approval-review:text-default";
            S[14] !== D ? (g = (0, o.b)("min-w-0 truncate", D), S[14] = D, S[15] = g) : g = S[15], S[16] !== O || S[17] !== g || S[18] !== U ? (v = (0, n.jsx)(x.a, {
                active: O,
                className: g,
                children: U
            }), S[16] = O, S[17] = g, S[18] = U, S[19] = v) : v = S[19];
            let H = _ && "rotate-90 opacity-100";
            S[20] !== H ? (f = (0, o.b)("icon-2xs shrink-0 text-tertiary transition-[opacity,transform] duration-basic opacity-0 group-hover/automatic-approval-review:opacity-100", H), S[20] = H, S[21] = f) : f = S[21], S[22] !== f ? (y = (0, n.jsx)(p.a, {
                className: f
            }), S[22] = f, S[23] = y) : y = S[23], S[24] !== _ || S[25] !== y || S[26] !== v ? (j = (0, n.jsxs)(d.a, {
                className: "group/automatic-approval-review inline-flex w-fit max-w-full gap-1.5 text-start",
                color: "ghostMuted",
                focusRing: "inset",
                size: "inline",
                onClick: u,
                "aria-expanded": _,
                children: [v, y]
            }), S[24] = _, S[25] = y, S[26] = v, S[27] = j) : j = S[27];
            let z = _ ? "auto" : 0,
                J = +!!_;
            S[28] !== z || S[29] !== J ? (w = {
                height: z,
                opacity: J
            }, S[28] = z, S[29] = J, S[30] = w) : w = S[30];
            let K = _ ? "auto" : "none";
            return S[31] !== K ? (k = {
                overflow: "hidden",
                pointerEvents: K
            }, S[31] = K, S[32] = k) : k = S[32], S[33] !== P ? (N = (0, n.jsx)("p", {
                className: "max-w-[80ch] pt-1 text-size-chat leading-relaxed whitespace-pre-wrap text-text/60",
                children: P
            }), S[33] = P, S[34] = N) : N = S[34], S[35] !== w || S[36] !== k || S[37] !== N ? (C = (0, n.jsx)(i.a.div, {
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

        function b(e) {
            return !e
        }

        function y(e) {
            let t, a, o = (0, l.c)(9),
                {
                    className: i,
                    isExpandable: s,
                    reviews: r
                } = e;
            if (o[0] !== i || o[1] !== s || o[2] !== r) {
                let e;
                o[4] !== i || o[5] !== s ? (e = e => (0, n.jsx)(f, {
                    className: i,
                    isExpandable: s,
                    review: e
                }, e.id), o[4] = i, o[5] = s, o[6] = e) : e = o[6], t = r.map(e), o[0] = i, o[1] = s, o[2] = r, o[3] = t
            } else t = o[3];
            return o[7] !== t ? (a = (0, n.jsx)(n.Fragment, {
                children: t
            }), o[7] = t, o[8] = a) : a = o[8], a
        }

        function j(e) {
            let t, a = (0, l.c)(4),
                {
                    isDeclined: o,
                    reviews: i
                } = e;
            if (!o) {
                let e;
                return a[0] !== i ? (e = (0, n.jsx)(y, {
                    reviews: i
                }), a[0] = i, a[1] = e) : e = a[1], e
            }
            return a[2] !== i ? (t = (0, n.jsx)(w, {
                reviews: i
            }), a[2] = i, a[3] = t) : t = a[3], t
        }

        function w(e) {
            let t, a, o = (0, l.c)(4),
                {
                    reviews: i
                } = e;
            o[0] !== i ? (t = i.some(k), o[0] = i, o[1] = t) : t = o[1];
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

        function k(e) {
            return "denied" === e.status && "high" === e.riskLevel
        }
        a.d(t, {
            a: () => v,
            b: () => w,
            c: () => f,
            d: () => y,
            e: () => j
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

        function r(e) {
            let {
                data: t
            } = (0, n.x)(i, e?.kind === "appId" ? e.appId : null), {
                data: a
            } = (0, n.x)(s, e?.kind === "displayName" ? e.displayName : null);
            return t ?? a ?? null
        }
        a.d(t, {
            b: () => r
        }, {
            a: i
        })
    }),
    mRLe: (function(e, t, a) {
        var n = a("ABep"),
            l = a("QosV");

        function o(e) {
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
        a.d(t, {
            a: () => o
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

        function x(e) {
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

        function g(e) {
            let t, a, i, s, c, g, v = (0, l.c)(24),
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
                M = (0, o.y)(m.a),
                S = (0, r.c)();
            v[0] !== j || v[1] !== C || v[2] !== f || v[3] !== M || v[4] !== y ? (t = C ?? ("closed" !== y || j ? void 0 : {
                expanded: !1,
                onToggle: () => (0, p.x)(M, f)
            }), v[0] = j, v[1] = C, v[2] = f, v[3] = M, v[4] = y, v[5] = t) : t = v[5];
            let T = t;
            return v[6] !== j || v[7] !== f ? (a = (0, n.jsx)(u.a, {
                disabled: j,
                mcpAppId: f
            }), v[6] = j, v[7] = f, v[8] = a) : a = v[8], v[9] !== k || v[10] !== a ? (i = (0, n.jsxs)(n.Fragment, {
                children: [a, k]
            }), v[9] = k, v[10] = a, v[11] = i) : i = v[11], v[12] !== T || v[13] !== S ? (s = null == T ? void 0 : {
                ...T,
                onToggle: e => {
                    (0, h.a)(e.currentTarget, S), T.onToggle(e)
                }
            }, v[12] = T, v[13] = S, v[14] = s) : s = v[14], v[15] !== b || v[16] !== y ? (c = (0, n.jsx)(x, {
                name: b,
                status: y
            }), v[15] = b, v[16] = y, v[17] = c) : c = v[17], v[18] !== N || v[19] !== w || v[20] !== i || v[21] !== s || v[22] !== c ? (g = (0, n.jsxs)(d.a, {
                className: N,
                accessory: i,
                disclosure: s,
                children: [w, c]
            }), v[18] = N, v[19] = w, v[20] = i, v[21] = s, v[22] = c, v[23] = g) : g = v[23], g
        }
        a.d(t, {
            a: () => g
        })
    }),
    DWcA: (function(e, t, a) {
        var n = a("iTtm"),
            l = a("ALWK");

        function o(e, t) {
            return e?.trim() || t?.trim() || void 0
        }

        function i(e, t) {
            let {
                isLoading: a,
                isInlineRequested: o,
                isInlineOpening: i,
                hasError: s
            } = t, r = (0, n.x)(l.m, e), c = (0, n.x)(l.o, e), d = (0, n.x)(l.l, e), u = (0, n.x)(l.v, e), p = (0, n.x)(l.q, e);
            return void 0 !== s && s || null != p ? "error" : "closed" !== r ? r : a ? "opening" : (o ?? d) && "launcher" !== c ? u && !(void 0 !== i && i) ? "open" : "opening" : "closed"
        }
        a.d(t, {
            a: () => o,
            b: () => i
        })
    }),
    o1Ns: (function(e, t, a) {
        var n = a("SZCv"),
            l = a.n(n),
            o = a("iTtm"),
            i = a("o0PZ"),
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
                let t = (0, i.Ue)(e),
                    n = a(c.j, t);
                return [e, {
                    sourceId: a(c.t, t),
                    hasSuccessfulToolResult: n?.content.toolCallStatus == null && n?.content.toolResult != null
                }]
            }))
        }, {
            isEqual: l()
        });

        function h(e) {
            let {
                item: t,
                hostId: a,
                retainedState: n
            } = e, l = !(0, r.b)(t.invocation) && !(0, d.b)(t.invocation, a) && !0 !== t.isMcpAppWidgetSuperseded && (n?.sourceId == null || n.sourceId === (0, i.Ue)(t.callId));
            return {
                isEligible: l,
                isRenderable: l && !(0, p.h)({
                    isCodexAppsServer: (0, s.e)(t.invocation.server),
                    result: t.result
                }) && (!t.completed || null != t.result || n?.hasSuccessfulToolResult === !0)
            }
        }
        a.d(t, {
            a: () => h
        }, {
            b: m
        })
    }),
    MdwM: (function(e, t, a) {
        var n = a("Haiv"),
            l = a("KJ1J");

        function o(e) {
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
        a.d(t, {
            a: () => o
        })
    }),
    BGqp: (function(e, t, a) {
        var n = a("ABep"),
            l = a("QosV"),
            o = a("T0Rc"),
            i = a("on57"),
            s = a("IPUh"),
            r = a("iTtm"),
            c = a("o0PZ"),
            d = a("OZum"),
            u = a("zd8w"),
            p = a("Wf1j"),
            m = a("oyxz"),
            h = a("mnR8"),
            x = a("sM3V"),
            g = a("KJ1J"),
            v = a("biqr"),
            f = a("ojna"),
            b = a("khkh"),
            y = a("SHXB"),
            j = a("bPZ9"),
            w = a("OOaz"),
            k = a("Zm2g"),
            N = a("FvYa"),
            C = a("ygO2"),
            M = a("la9L"),
            S = a("rmk3"),
            T = a("JNtf"),
            I = a("mUDD"),
            R = a("KxMp"),
            A = a("HOLv"),
            _ = a("DcH0"),
            L = a("Wdu7"),
            U = a("CqQF"),
            E = a("rO8L"),
            P = a("wwME"),
            O = a("de6u"),
            D = a("YeQK"),
            H = a("DWcA"),
            z = a("PvhQ"),
            J = a("oKu4"),
            K = a("Odi7"),
            F = a("JXtc"),
            q = a("AHnN"),
            W = a("C1SW"),
            B = a("ALWK"),
            V = a("ze43"),
            G = a("E2ja"),
            Z = a("KLqe"),
            Q = a("EEop"),
            $ = a("cLdu"),
            Y = a("ueue"),
            X = a("whdX"),
            ee = a("Sd8U"),
            et = a("tSEg"),
            ea = a("hZax"),
            en = a("V8uZ"),
            el = a("WFY2"),
            eo = a("S7UD"),
            ei = a("kRUe"),
            es = a("KU8M"),
            er = a("Fm9E"),
            ec = a("GmdE"),
            ed = a("t7eZ"),
            eu = a("LF5P"),
            ep = a("ZiDw"),
            em = a("ltPT"),
            eh = a("SfaR"),
            ex = a("BI7J"),
            eg = a("DYB3"),
            ev = a("MAIj"),
            ef = a("mRLe"),
            eb = a("o62A"),
            ey = a("o1Ns"),
            ej = a("MdwM"),
            ew = a("alO6"),
            ek = a("Hkqr"),
            eN = a("DKJJ"),
            eC = a("umSm"),
            eM = a("tHoD"),
            eS = a("hCjf"),
            eT = a("RznG"),
            eI = a("r9ev"),
            eR = a("F9kB"),
            eA = a("u0wS"),
            e_ = a("jW24"),
            eL = a("GE0r");

        function eU(e) {
            let t, a, w, S, _, D, K, ee, el, eo, eI, eU, ez, eJ, eK, eF, eq, eW, eB, eV, eG, eZ, eQ, e$, eY, eX, e1, e0, e2, e3, e4, e5, e6, e7, e8, e9, te, tt, ta, tn, tl, to, ti, ts, tr, tc, td, tu, tp, tm, th, tx, tg, tv, tf, tb, ty, tj = (0, l.c)(284),
                {
                    item: tw,
                    conversationId: tk,
                    expandedContentOnly: tN,
                    hideTextBlocksWithStructuredContent: tC,
                    hostId: tM,
                    loadRemoteLogos: tS,
                    appInfoOverride: tT,
                    onExpand: tI,
                    onOpenPermissions: tR,
                    renderMcpApps: tA,
                    shouldAutoExpandMcpApp: t_,
                    summary: tL,
                    summaryIcon: tU,
                    toolActivityTurnKey: tE
                } = e,
                tP = void 0 !== tN && tN,
                tO = void 0 !== tC && tC,
                tD = void 0 === tS || tS,
                tH = void 0 === tA || tA,
                tz = void 0 === tL ? null : tL,
                tJ = (0, r.y)(et.a);
            tj[0] !== tT || tj[1] !== tw ? (t = null == tT && (0, eu.h)(tw), tj[0] = tT, tj[1] = tw, tj[2] = t) : t = tj[2], tj[3] !== tM || tj[4] !== t ? (a = {
                enabled: t,
                hostId: tM
            }, tj[3] = tM, tj[4] = t, tj[5] = a) : a = tj[5];
            let {
                data: tK
            } = (0, v.m)(a), tF = tT ?? (null != tK ? (0, ek.b)({
                appContext: tw.appContext,
                apps: tK,
                functionName: tw.functionName,
                serverName: tw.invocation.server,
                toolName: tw.invocation.tool
            }) : null), tq = (0, p.a)(), {
                platform: tW
            } = (0, P.a)();
            tj[6] !== tw.callId ? (w = (0, c.Ue)(tw.callId), tj[6] = tw.callId, tj[7] = w) : w = tj[7];
            let tB = w,
                tV = (0, r.x)(B.t, tB),
                tG = (0, r.x)(B.j, tB),
                tZ = (0, ey.a)({
                    item: tw,
                    hostId: tM,
                    retainedState: {
                        sourceId: tV,
                        hasSuccessfulToolResult: tG?.content.toolCallStatus == null && tG?.content.toolResult != null
                    }
                }),
                tQ = tH && (0, er.c)() && tZ.isEligible;
            tj[8] !== tk || tj[9] !== tw.callId ? (S = (0, ep.a)({
                callId: tw.callId,
                conversationId: tk
            }), tj[8] = tk, tj[9] = tw.callId, tj[10] = S) : S = tj[10];
            let t$ = S,
                tY = (0, r.x)(ep.c, t$);
            (0, ea.h)("2957382457");
            let tX = (0, r.z)(b.a);
            tj[11] !== tw.appContext || tj[12] !== tw.callId || tj[13] !== tw.invocation.server || tj[14] !== tw.result ? (D = (_ = (0, g.e)(tw.invocation.server)) && null != tw.appContext ? tw.callId : null, K = (0, eN.h)({
                isCodexAppsServer: _,
                result: tw.result
            }), tj[11] = tw.appContext, tj[12] = tw.callId, tj[13] = tw.invocation.server, tj[14] = tw.result, tj[15] = _, tj[16] = D, tj[17] = K) : (_ = tj[15], D = tj[16], K = tj[17]);
            let t1 = K,
                t0 = tw.result?.type !== "success" || t1 ? null : tw.result.raw,
                t2 = t0 ?? (tG?.content.toolCallStatus == null ? tG?.content.toolResult : null) ?? null,
                {
                    elementHeightPx: t3,
                    elementRef: t4
                } = (0, em.a)(),
                t5 = tw.result?.type === "success" ? tw.result.content : null,
                t6 = tw.result?.type === "error" ? tw.result.error : null;
            tj[18] !== tw || tj[19] !== tW ? (ee = (0, eu.e)({
                item: tw,
                platform: tW
            }), tj[18] = tw, tj[19] = tW, tj[20] = ee) : ee = tj[20];
            let t7 = ee,
                t8 = t7?.nativeAppReference ?? null,
                t9 = (0, ev.b)(t8),
                ae = t9?.appPath ?? null;
            tj[21] !== ae ? (el = {
                appPath: ae
            }, tj[21] = ae, tj[22] = el) : el = tj[22];
            let {
                iconSmall: at
            } = (0, k.a)(el), aa = void 0 === tU ? (0, eg.d)(tw, null == tF ? [] : [tF])?.icon : tU;
            void 0 === tU && null != aa && (aa = (0, n.jsx)(Z.a, {
                item: tw,
                apps: null == tF ? [] : [tF],
                part: "icon",
                loadMetadata: tD,
                children: aa
            })), tj[23] !== tw.source?.kind || tj[24] !== t0 ? (eo = tw.source?.kind === "browserUse" && null != t0 ? (0, eu.c)(t0._meta) : null, tj[23] = tw.source?.kind, tj[24] = t0, tj[25] = eo) : eo = tj[25];
            let an = eo,
                al = tX && !tP && tw.completed && (0, c.bi)(tw.invocation.server) && "js" === tw.invocation.tool && null != t0 ? (0, eh.a)(t0._meta) : [];
            tj[26] !== tk || tj[27] !== tM ? (eI = {
                hostId: tM,
                conversationId: tk
            }, tj[26] = tk, tj[27] = tM, tj[28] = eI) : eI = tj[28];
            let ao = (0, r.x)(x.b, eI);
            tj[29] !== tM || tj[30] !== tw.appContext || tj[31] !== tw.invocation.server || tj[32] !== tw.invocation.tool || tj[33] !== tw.invocationResourceUri || tj[34] !== ao ? (eU = {
                appContext: tw.appContext,
                hostId: tM,
                invocationResourceUri: tw.invocationResourceUri,
                server: tw.invocation.server,
                threadId: ao,
                tool: tw.invocation.tool
            }, tj[29] = tM, tj[30] = tw.appContext, tj[31] = tw.invocation.server, tj[32] = tw.invocation.tool, tj[33] = tw.invocationResourceUri, tj[34] = ao, tj[35] = eU) : eU = tj[35];
            let {
                data: ai,
                isPending: as,
                isFetching: ar,
                error: ac
            } = (0, r.x)(es.a, eU, {
                enabled: tQ || !tk.startsWith("chatgpt:")
            }), ad = (0, ew.a)({
                toolDisplay: tw.toolDisplay,
                toolDefinition: (0, eN.c)({
                    appContext: tw.appContext,
                    invocationResourceUri: tw.invocationResourceUri,
                    mcpServerStatuses: ai,
                    server: tw.invocation.server,
                    tool: tw.invocation.tool
                }),
                appContext: tw.appContext,
                completed: tw.completed,
                intl: tq,
                toolName: tw.invocation.tool,
                serverName: tw.invocation.server,
                matchingApp: tF ?? null,
                nativeDesktopAppMetadata: t9,
                platform: tW,
                source: tw.source,
                toolArguments: tw.invocation.arguments,
                toolResult: tw.result
            });
            tj[36] !== tM || tj[37] !== tw.appContext || tj[38] !== tw.invocation.server || tj[39] !== tw.invocation.tool || tj[40] !== tw.invocationResourceUri || tj[41] !== ao ? (ez = {
                appContext: tw.appContext,
                hostId: tM,
                invocationResourceUri: tw.invocationResourceUri,
                server: tw.invocation.server,
                threadId: ao,
                tool: tw.invocation.tool
            }, tj[36] = tM, tj[37] = tw.appContext, tj[38] = tw.invocation.server, tj[39] = tw.invocation.tool, tj[40] = tw.invocationResourceUri, tj[41] = ao, tj[42] = ez) : ez = tj[42];
            let au = (0, r.x)(es.b, ez, {
                    enabled: tQ
                }),
                {
                    resourceUri: ap,
                    isPending: am
                } = (0, eN.d)({
                    item: tw,
                    mcpServerStatuses: ai,
                    descriptorOnly: tk.startsWith("chatgpt:"),
                    toolResult: t2,
                    isCatalogPending: as,
                    registeredResourceUri: tG?.content.mcpAppScope.originResourceUri
                }),
                ah = null != tw.pluginId && !_;
            tj[43] !== tM || tj[44] !== ah ? (eJ = {
                enabled: ah,
                hostId: tM
            }, tj[43] = tM, tj[44] = ah, tj[45] = eJ) : eJ = tj[45];
            let ax = (0, E.a)(eJ);
            tj[46] !== tM || tj[47] !== ax ? (eK = {
                enabled: ax,
                hostId: tM,
                roots: void 0,
                resolveActiveRoots: !0
            }, tj[46] = tM, tj[47] = ax, tj[48] = eK) : eK = tj[48];
            let {
                data: ag
            } = (0, $.l)(eK);
            tj[49] !== ag || tj[50] !== tw.pluginId ? (eF = ag?.find(e => {
                let {
                    plugin: t
                } = e;
                return t.id === tw.pluginId || null != t.remotePluginId && t.remotePluginId === tw.pluginId
            }), tj[49] = ag, tj[50] = tw.pluginId, tj[51] = eF) : eF = tj[51];
            let av = eF,
                af = ax && null != ag && null != tw.pluginId && null == av;
            tj[52] !== tM || tj[53] !== tw.pluginId || tj[54] !== tJ.query || tj[55] !== af ? (eq = tJ.query.getOptions(Q.k, (0, Q.a)({
                hostId: tM,
                pluginId: af ? tw.pluginId ?? null : null
            })), tj[52] = tM, tj[53] = tw.pluginId, tj[54] = tJ.query, tj[55] = af, tj[56] = eq) : eq = tj[56];
            let ab = eq,
                ay = af && ab.enabled;
            tj[57] !== ab || tj[58] !== ay ? (eW = {
                ...ab,
                enabled: ay,
                retry: !1
            }, tj[57] = ab, tj[58] = ay, tj[59] = eW) : eW = tj[59];
            let {
                data: aj
            } = (0, o.a)(eW);
            if (tj[60] !== av?.plugin || tj[61] !== ag || tj[62] !== tw.invocation.server || tj[63] !== tw.pluginId || tj[64] !== aj || tj[65] !== af) {
                let e = null == aj ? null : (0, Y.b)(aj);
                eB = (0, ej.a)({
                    pluginId: e?.plugin.id ?? av?.plugin.id ?? tw.pluginId,
                    plugins: af && null != e ? [e] : ag ?? [],
                    serverName: tw.invocation.server
                }), tj[60] = av?.plugin, tj[61] = ag, tj[62] = tw.invocation.server, tj[63] = tw.pluginId, tj[64] = aj, tj[65] = af, tj[66] = eB
            } else eB = tj[66];
            let aw = eB,
                ak = tQ && null != ap && tZ.isRenderable,
                [aN, aC] = (0, u.useState)(!1),
                {
                    data: aM,
                    error: aS,
                    isPending: aT,
                    isFetching: aI,
                    refetch: aR
                } = (0, X.f)({
                    appContext: tw.appContext,
                    connectorId: au?.connectorId ?? null,
                    connectorTarget: au?.kind === "target" ? au : null,
                    hostId: tM,
                    originCallId: D,
                    server: tw.invocation.server,
                    threadId: tk,
                    uri: ap ?? null,
                    enabled: ak && !am && (null == D || tw.completed)
                }),
                aA = am ? void 0 : aM,
                a_ = tG?.sessionId == null ? null : tG.content.resource,
                aL = aA?.resource;
            tj[67] !== aL ? (eV = (0, F.b)(aL), tj[67] = aL, tj[68] = eV) : eV = tj[68];
            let aU = eV,
                aE = (0, W.d)({
                    resource: aA?.resource,
                    resourceError: aS,
                    isResourcePending: aT,
                    isResourceFetching: aI,
                    catalogError: ac,
                    isCatalogPending: as,
                    isCatalogFetching: ar,
                    canReadResource: !am && (!_ || null != au)
                }),
                aP = null == a_ ? aE.error : null,
                aO = ak && null == a_ && aE.isLoading,
                aD = (0, r.x)(B.q, tB),
                aH = (0, r.x)(B.o, tB),
                az = (0, F.a)({
                    hasResourceError: null != aP,
                    isResourceLoading: aO,
                    isDilEnabled: !1,
                    renderData: a_ ?? aU,
                    resourceUri: ap ?? null,
                    shouldRenderMcpApp: ak
                }),
                aJ = "html" === az.kind ? az.renderData : null,
                aK = (0, W.c)({
                    data: aJ,
                    error: aP,
                    isLoading: aO
                }, B.G),
                aF = "fallback" !== az.kind,
                aq = tQ && null != ap && (!aF || null != aP || null != aD || "too-large" === aK.kind || "error" === aK.kind),
                aW = aq || (aJ?.isCollapsible ?? !0),
                aB = aH;
            aq ? aB = "fallback" : "html" !== az.kind && (aB = az.kind);
            let aV = "pending" === aB,
                aG = "launcher" === aB,
                aZ = aV || aG;
            tj[69] !== tG ? (eG = null != tG && tG.content.resource?.hideAttribution === !0 && (!0 === tG.content.mcpAppScope.isVerifiedFirstParty || (0, eb.b)(tG.content)), tj[69] = tG, tj[70] = eG) : eG = tj[70];
            let aQ = eG,
                a$ = aZ || !tP && (aW || "html" === az.kind && !aQ),
                aY = "inline" === aB,
                aX = void 0 !== t_ && t_ && ak,
                a1 = !aq && aN || aX,
                a0 = aF && !aG && (!aW || (tY ?? a1)),
                a2 = a0 && !aV,
                a3 = aN || (tY ?? aX),
                [a4, a5] = (0, u.useState)(!1),
                a6 = aY && a2 && a4,
                a7 = aO || aV && a0;
            tj[71] !== a0 || tj[72] !== a6 || tj[73] !== a7 ? (eZ = {
                isLoading: a7,
                isInlineRequested: a0,
                isInlineOpening: a6
            }, tj[71] = a0, tj[72] = a6, tj[73] = a7, tj[74] = eZ) : eZ = tj[74];
            let a8 = (0, H.b)(tB, eZ),
                a9 = !aq && (aV || "html" === az.kind) ? a8 : null;
            tj[75] !== _ || tj[76] !== tw.appContext?.appName || tj[77] !== tw.invocation.server || tj[78] !== tF?.name || tj[79] !== aw?.alt ? (eQ = tF?.name ?? tw.appContext?.appName ?? aw?.alt ?? (_ ? null : (0, d.a)(tw.invocation.server)), tj[75] = _, tj[76] = tw.appContext?.appName, tj[77] = tw.invocation.server, tj[78] = tF?.name, tj[79] = aw?.alt, tj[80] = eQ) : eQ = tj[80];
            let ne = eQ;
            tj[81] !== ne || tj[82] !== tw.appContext || tj[83] !== tw.invocation.server || tj[84] !== tw.invocation.tool || tj[85] !== tw.invocationResourceUri || tj[86] !== ai ? (e$ = (0, H.a)((0, h.a)((0, eN.c)({
                appContext: tw.appContext,
                invocationResourceUri: tw.invocationResourceUri,
                mcpServerStatuses: ai,
                server: tw.invocation.server,
                tool: tw.invocation.tool
            })), ne), tj[81] = ne, tj[82] = tw.appContext, tj[83] = tw.invocation.server, tj[84] = tw.invocation.tool, tj[85] = tw.invocationResourceUri, tj[86] = ai, tj[87] = e$) : e$ = tj[87];
            let nt = e$,
                na = aq ? tP || aN : !aZ && (tP || (aF ? a2 : a3));
            e: {
                let e, t, a, n;
                if (!na) {
                    let e;
                    tj[88] !== t5 ? (e = {
                        displayContent: t5,
                        displayStructuredContentJson: null
                    }, tj[88] = t5, tj[89] = e) : e = tj[89], eY = e;
                    break e
                }
                tj[90] !== tw.result ? (e = tw.result?.type === "success" && null != tw.result.structuredContent ? eD(tw.result.structuredContent, 2) : null, tj[90] = tw.result, tj[91] = e) : e = tj[91];
                let l = e;tj[92] !== t5 || tj[93] !== tO || tj[94] !== l ? (t = tO && null != l && null != t5 ? t5.filter(eE) : t5, tj[92] = t5, tj[93] = tO, tj[94] = l, tj[95] = t) : t = tj[95];
                let o = t;tj[96] !== o ? (a = function(e) {
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
                }(o), tj[96] = o, tj[97] = a) : a = tj[97];
                let i = a;
                if (null == i) {
                    let e;
                    tj[98] !== l || tj[99] !== o ? (e = {
                        displayContent: o,
                        displayStructuredContentJson: l
                    }, tj[98] = l, tj[99] = o, tj[100] = e) : e = tj[100], eY = e;
                    break e
                }
                if (null == l || i === l) {
                    let e, t;
                    tj[101] === Symbol.for("react.memo_cache_sentinel") ? (e = [], tj[101] = e) : e = tj[101];
                    let a = l ?? i;
                    tj[102] !== a ? (t = {
                        displayContent: e,
                        displayStructuredContentJson: a
                    }, tj[102] = a, tj[103] = t) : t = tj[103], eY = t;
                    break e
                }
                tj[104] !== l || tj[105] !== o ? (n = {
                    displayContent: o,
                    displayStructuredContentJson: l
                }, tj[104] = l, tj[105] = o, tj[106] = n) : n = tj[106],
                eY = n
            }
            let {
                displayContent: nn,
                displayStructuredContentJson: nl
            } = eY, [no, ni] = (0, u.useState)(!1);
            t: {
                let e;
                if (!no) {
                    eX = null;
                    break t
                }
                tj[107] !== tw.callId || tj[108] !== tw.durationMs || tj[109] !== tw.invocation || tj[110] !== tw.result ? (e = eD({
                    callId: tw.callId,
                    invocation: tw.invocation,
                    durationMs: tw.durationMs,
                    result: tw.result
                }, 2), tj[107] = tw.callId, tj[108] = tw.durationMs, tj[109] = tw.invocation, tj[110] = tw.result, tj[111] = e) : e = tj[111],
                eX = e
            }
            let ns = eX;
            tj[112] !== tq ? (e1 = tq.formatMessage({
                id: "codex.mcpTool.rawOutputTriggerTooltip",
                defaultMessage: "Show raw tool call output",
                description: "Tooltip for the button that opens the raw MCP tool output dialog"
            }), tj[112] = tq, tj[113] = e1) : e1 = tj[113];
            let nr = e1,
                nc = tw.completed || null != tw.result || aF,
                nd = na ? t3 : 0,
                nu = !tw.completed;
            tj[114] !== tF ? (e0 = null == tF ? [] : [tF], tj[114] = tF, tj[115] = e0) : e0 = tj[115], tj[116] !== tw || tj[117] !== tD || tj[118] !== e0 || tj[119] !== ad ? (e2 = (0, n.jsx)(Z.a, {
                item: tw,
                apps: e0,
                part: "label",
                loadMetadata: tD,
                children: ad
            }), tj[116] = tw, tj[117] = tD, tj[118] = e0, tj[119] = ad, tj[120] = e2) : e2 = tj[120], tj[121] !== nu || tj[122] !== e2 ? (e3 = (0, n.jsx)(eC.a, {
                active: nu,
                className: "min-w-0 shrink truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                children: e2
            }), tj[121] = nu, tj[122] = e2, tj[123] = e3) : e3 = tj[123];
            let np = e3;
            tj[124] !== aa || tj[125] !== an || tj[126] !== tM || tj[127] !== tw || tj[128] !== tD || tj[129] !== tF || tj[130] !== at || tj[131] !== t9?.displayName || tj[132] !== t8 || tj[133] !== t7 || tj[134] !== aw ? (e4 = void 0 !== aa ? aa : (0, n.jsx)(ec.a, {
                hostId: tM,
                item: tw,
                loadRemoteLogos: tD,
                fallback: null == aw && null != t8 ? (0, n.jsx)(N.a, {
                    alt: t9?.displayName ?? t7?.name ?? tw.invocation.server,
                    className: "icon-xs shrink-0 scale-[1.15] object-contain",
                    loadRemote: tD,
                    logoUrl: at,
                    logoDarkUrl: null,
                    fallback: (0, n.jsx)(A.a, {
                        className: "shrink-0 text-secondary",
                        "aria-hidden": !1,
                        asset: eR.a
                    })
                }) : null == aw && t7?.groupKey === eu.b ? (0, n.jsx)(A.a, {
                    className: "shrink-0 text-secondary",
                    asset: eR.a
                }) : null == aw && t7?.logoUrl != null ? (0, n.jsx)(N.a, {
                    alt: t7.name,
                    className: "icon-xs shrink-0 object-contain",
                    loadRemote: tD,
                    logoUrl: t7.logoUrl,
                    logoDarkUrl: null,
                    fallback: (0, n.jsx)(A.a, {
                        className: "shrink-0 text-secondary",
                        "aria-hidden": !1,
                        asset: eA.a
                    })
                }) : null == aw && t7?.usesBrowserIcon === !0 ? null == an ? (0, n.jsx)(A.a, {
                    className: "shrink-0 object-contain text-secondary",
                    asset: eL.a
                }) : (0, n.jsx)(R.a, {
                    className: "icon-xs shrink-0 object-contain text-secondary",
                    href: an,
                    loadRemote: tD
                }) : null == aw && (0, c.bi)(tw.invocation.server) ? (0, n.jsx)(A.a, {
                    className: "shrink-0 object-contain text-secondary",
                    asset: e_.a
                }) : (0, n.jsx)(N.a, {
                    alt: aw?.alt ?? tF?.name ?? tw.appContext?.appName ?? tw.invocation.server,
                    appInfo: null == aw ? tF : null,
                    className: "icon-xs shrink-0 object-contain text-secondary",
                    loadRemote: tD,
                    knownAppId: aw?.knownAppId ?? tw.appContext?.appName ?? tw.appContext?.connectorId,
                    logoUrl: aw?.logoUrl,
                    fallback: (0, n.jsx)(A.a, {
                        className: "shrink-0 text-secondary",
                        "aria-hidden": !1,
                        asset: eA.a
                    })
                })
            }), tj[124] = aa, tj[125] = an, tj[126] = tM, tj[127] = tw, tj[128] = tD, tj[129] = tF, tj[130] = at, tj[131] = t9?.displayName, tj[132] = t8, tj[133] = t7, tj[134] = aw, tj[135] = e4) : e4 = tj[135];
            let nm = e4;
            tj[136] !== tz || tj[137] !== nm || tj[138] !== np ? (e5 = tz ?? (0, n.jsxs)(n.Fragment, {
                children: [nm, np]
            }), tj[136] = tz, tj[137] = nm, tj[138] = np, tj[139] = e5) : e5 = tj[139];
            let nh = e5;
            tj[140] !== a3 || tj[141] !== a0 || tj[142] !== aq || tj[143] !== aN || tj[144] !== t$ || tj[145] !== tI || tj[146] !== tJ || tj[147] !== aX || tj[148] !== aF || tj[149] !== aY || tj[150] !== tE || tj[151] !== tY ? (e6 = () => {
                if (aq) {
                    aN || tI?.(), aC(!aN);
                    return
                }
                let e = aF ? !a0 : !a3;
                if (e && tI?.(), aF) {
                    a5(e && aY), (0, ep.e)(tJ, t$, e);
                    return
                }
                e && null != tE && (0, ep.d)(tJ, tE), !e && (!0 === tY || aX) && (0, ep.e)(tJ, t$, !1), aC(e)
            }, tj[140] = a3, tj[141] = a0, tj[142] = aq, tj[143] = aN, tj[144] = t$, tj[145] = tI, tj[146] = tJ, tj[147] = aX, tj[148] = aF, tj[149] = aY, tj[150] = tE, tj[151] = tY, tj[152] = e6) : e6 = tj[152];
            let nx = e6;
            tj[153] !== tw.automaticApprovalReviews ? (e7 = null == tw.automaticApprovalReviews ? null : (0, n.jsx)(ei.a, {}), tj[153] = tw.automaticApprovalReviews, tj[154] = e7) : e7 = tj[154];
            let ng = e7;
            tj[155] !== nc || tj[156] !== nx || tj[157] !== aW || tj[158] !== na || tj[159] !== a2 || tj[160] !== aG || tj[161] !== aY || tj[162] !== a9 ? (e8 = nc && "opening" !== a9 && !aG && aW ? {
                alignEnd: aY && a2,
                expanded: na,
                onToggle: nx
            } : void 0, tj[155] = nc, tj[156] = nx, tj[157] = aW, tj[158] = na, tj[159] = a2, tj[160] = aG, tj[161] = aY, tj[162] = a9, tj[163] = e8) : e8 = tj[163];
            let nv = e8,
                nf = aY && a2 && (aJ?.prefersBorder ?? tG?.content.resource?.prefersBorder ?? !0) && "overflow-hidden rounded-lg border border-strong bg-surface";
            tj[164] !== nf ? (e9 = (0, i.b)("group", nf), tj[164] = nf, tj[165] = e9) : e9 = tj[165];
            let nb = e9,
                ny = aG && "w-full",
                nj = aY && a2 && "w-full px-4 pt-3 pb-2";
            tj[166] !== ny || tj[167] !== nj ? (te = (0, i.b)(ny, nj), tj[166] = ny, tj[167] = nj, tj[168] = te) : te = tj[168];
            let nw = te;
            tj[169] !== ng || tj[170] !== nv || tj[171] !== nw || tj[172] !== aO || tj[173] !== tB || tj[174] !== nh || tj[175] !== nm || tj[176] !== nt || tj[177] !== a9 ? (tt = null != a9 ? (0, n.jsx)(z.a, {
                accessory: ng,
                className: nw,
                disabled: aO,
                disclosure: nv,
                icon: nm,
                mcpAppId: tB,
                name: nt,
                status: a9
            }) : (0, n.jsx)(eS.a, {
                accessory: ng,
                className: nw,
                disclosure: nv,
                children: nh
            }), tj[169] = ng, tj[170] = nv, tj[171] = nw, tj[172] = aO, tj[173] = tB, tj[174] = nh, tj[175] = nm, tj[176] = nt, tj[177] = a9, tj[178] = tt) : tt = tj[178];
            let nk = tt,
                nN = null == ap ? null : aJ;
            tj[179] !== aO || tj[180] !== aP || tj[181] !== nN ? (ta = {
                data: nN,
                error: aP,
                isLoading: aO
            }, tj[179] = aO, tj[180] = aP, tj[181] = nN, tj[182] = ta) : ta = tj[182];
            let nC = aY ? "card" : "standalone",
                nM = ne ?? void 0,
                nS = aY ? "inline" : aH;
            tj[183] !== aR ? (tn = () => {
                aR({
                    cancelRefetch: !1
                })
            }, tj[183] = aR, tj[184] = tn) : tn = tj[184];
            let nT = !a$;
            tj[185] !== tB || tj[186] !== ta || tj[187] !== nC || tj[188] !== nM || tj[189] !== nS || tj[190] !== tn || tj[191] !== nT ? (tl = (0, n.jsx)(q.a, {
                hostDisplayModes: B.G,
                resource: ta,
                inlineSurface: nC,
                mcpAppId: tB,
                pluginName: nM,
                presentation: nS,
                onRetryResourceRead: tn,
                showLoadingStatus: nT
            }), tj[185] = tB, tj[186] = ta, tj[187] = nC, tj[188] = nM, tj[189] = nS, tj[190] = tn, tj[191] = nT, tj[192] = tl) : tl = tj[192];
            let nI = tl,
                nR = +!!na;
            tj[193] !== nR || tj[194] !== nd ? (to = {
                height: nd,
                opacity: nR
            }, tj[193] = nR, tj[194] = nd, tj[195] = to) : to = tj[195];
            let nA = na ? "overflow-visible" : "overflow-hidden";
            tj[196] !== nA ? (ti = (0, i.b)(nA), tj[196] = nA, tj[197] = ti) : ti = tj[197];
            let n_ = na ? "auto" : "none";
            tj[198] !== n_ ? (ts = {
                pointerEvents: n_
            }, tj[198] = n_, tj[199] = ts) : ts = tj[199], tj[200] !== a2 ? (tr = () => {
                a2 && a5(!1)
            }, tj[200] = a2, tj[201] = tr) : tr = tj[201];
            let nL = na ? t4 : null,
                nU = ak && "relative",
                nE = !aW && "py-1";
            tj[202] !== nU || tj[203] !== nE ? (tc = (0, i.b)(nU, nE), tj[202] = nU, tj[203] = nE, tj[204] = tc) : tc = tj[204];
            let nP = !aY && aW ? "grouped" : "flush";
            tj[205] !== tk || tj[206] !== nn || tj[207] !== nl || tj[208] !== aJ?.heightHint || tj[209] !== aJ?.minFrameHeight || tj[210] !== az || tj[211] !== t6 || tj[212] !== tM || tj[213] !== na || tj[214] !== aO || tj[215] !== no || tj[216] !== tw.automaticApprovalReviews || tj[217] !== tw.invocation.server || tj[218] !== tw.invocation.tool || tj[219] !== nI || tj[220] !== nr || tj[221] !== ns || tj[222] !== aF || tj[223] !== ak || tj[224] !== a6 || tj[225] !== aY ? (td = na ? (0, n.jsxs)(n.Fragment, {
                children: [null == tw.automaticApprovalReviews ? null : (0, n.jsx)(ei.d, {
                    className: aY ? "px-4" : void 0,
                    isExpandable: !aY,
                    reviews: tw.automaticApprovalReviews
                }), aF ? a6 ? (0, n.jsx)(eO, {
                    heightHint: aJ?.heightHint ?? null,
                    minFrameHeight: aJ?.minFrameHeight ?? null
                }) : nI : nn && nn.length > 0 ? (0, n.jsx)("div", {
                    className: (0, i.b)("[&_*]:text-text/50", "flex flex-col gap-0.5"),
                    children: nn.map((e, t) => (0, n.jsx)(eH, {
                        block: e,
                        conversationId: tk,
                        hostId: tM
                    }, t))
                }) : t6 ? (0, n.jsx)(L.a, {
                    className: "w-full",
                    fullWidth: !0,
                    level: "danger",
                    children: (0, n.jsx)("div", {
                        className: "max-h-48 overflow-auto text-size-chat whitespace-pre-wrap",
                        children: t6
                    })
                }) : nl ? null : (0, n.jsx)("p", {
                    className: "text-codex-description/80",
                    children: (0, n.jsx)(m.a, {
                        id: "codex.mcpTool.noResult",
                        defaultMessage: "Tool returned no content",
                        description: "Message shown when an MCP tool call produced no content"
                    })
                }), !aO && na && !a6 && !aF && nl && (0, n.jsx)(M.CodeSnippet, {
                    codeContainerClassName: "max-h-48 overflow-auto",
                    language: "json",
                    content: nl,
                    showStickyRightContent: !1
                }), !aO && na && !a6 && (0, n.jsx)(T.b, {
                    open: no,
                    onOpenChange: ni,
                    triggerContent: (0, n.jsx)("div", {
                        className: (0, i.b)("inline-flex w-fit", ak && "absolute right-1 bottom-2 z-50"),
                        children: (0, n.jsx)(U.a, {
                            side: "top",
                            align: "center",
                            cloneCustomTrigger: !0,
                            tooltipContent: nr,
                            children: (0, n.jsx)(C.a, {
                                className: "cursor-interaction opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 focus-visible:opacity-100",
                                "aria-label": nr,
                                color: "ghost",
                                onClick: () => {
                                    ni(!0)
                                },
                                size: "icon",
                                children: (0, n.jsx)(O.a, {
                                    className: "icon-xxs"
                                })
                            })
                        })
                    }),
                    children: (0, n.jsxs)(I.b, {
                        children: [(0, n.jsx)(I.e, {
                            children: (0, n.jsx)(I.d, {
                                title: (0, n.jsx)(T.e, {
                                    children: (0, n.jsx)(m.a, {
                                        id: "codex.mcpTool.rawOutputHeading",
                                        defaultMessage: "Raw {server}.{tool} tool call output",
                                        description: "Heading shown within the raw output dialog",
                                        values: {
                                            server: tw.invocation.server,
                                            tool: tw.invocation.tool
                                        }
                                    })
                                })
                            })
                        }), (0, n.jsx)(I.e, {
                            children: null == ns ? null : (0, n.jsx)(M.CodeSnippet, {
                                codeContainerClassName: "max-h-128 overflow-auto",
                                language: "json",
                                content: ns,
                                showStickyRightContent: !0
                            })
                        })]
                    })
                })]
            }) : null, tj[205] = tk, tj[206] = nn, tj[207] = nl, tj[208] = aJ?.heightHint, tj[209] = aJ?.minFrameHeight, tj[210] = az, tj[211] = t6, tj[212] = tM, tj[213] = na, tj[214] = aO, tj[215] = no, tj[216] = tw.automaticApprovalReviews, tj[217] = tw.invocation.server, tj[218] = tw.invocation.tool, tj[219] = nI, tj[220] = nr, tj[221] = ns, tj[222] = aF, tj[223] = ak, tj[224] = a6, tj[225] = aY, tj[226] = td) : td = tj[226], tj[227] !== nL || tj[228] !== tc || tj[229] !== nP || tj[230] !== td ? (tu = (0, n.jsx)(eM.a, {
                ref: nL,
                className: tc,
                variant: nP,
                children: td
            }), tj[227] = nL, tj[228] = tc, tj[229] = nP, tj[230] = td, tj[231] = tu) : tu = tj[231], tj[232] !== to || tj[233] !== ti || tj[234] !== ts || tj[235] !== tr || tj[236] !== tu ? (tp = (0, n.jsx)(s.a.div, {
                initial: !1,
                animate: to,
                transition: en.a,
                className: ti,
                style: ts,
                onAnimationComplete: tr,
                children: tu
            }), tj[232] = to, tj[233] = ti, tj[234] = ts, tj[235] = tr, tj[236] = tu, tj[237] = tp) : tp = tj[237];
            let nO = tp;
            tj[238] !== tw || tj[239] !== tR ? (tm = (0, ed.a)(tw) ? (0, n.jsx)(eM.a, {
                variant: "grouped",
                children: (0, n.jsx)(L.a, {
                    className: "w-full",
                    fullWidth: !0,
                    level: "warning",
                    actions: null == tR ? void 0 : (0, n.jsx)(C.a, {
                        color: "secondary",
                        onClick: tR,
                        children: (0, n.jsx)(m.a, {
                            id: "codex.mcpTool.reviewPermissions",
                            defaultMessage: "Review permissions",
                            description: "Opens the existing permissions menu for the chat whose tool call could not request approval"
                        })
                    }),
                    children: null == tR ? (0, n.jsx)(m.a, {
                        id: "codex.mcpTool.approvalRequestsDisabled",
                        defaultMessage: "Approval requests were disabled for this tool call. If available, review this chat’s permissions before retrying.",
                        description: "Explanation on a failed MCP tool call that needed approval but could not request it. Suggests the existing permissions control for this chat, which may be unavailable in read-only views or restricted by policy. Does not promise that restrictions can be overridden."
                    }) : (0, n.jsx)(m.a, {
                        id: "codex.mcpTool.approvalRequestsDisabled.recovery",
                        defaultMessage: "Approval requests were disabled for this tool call. Choose “Ask for approval” in this chat’s permissions if available, then ask to retry.",
                        description: "Explains that the tool call was blocked before approval could be requested. The adjacent action opens this chat's permissions menu; the user must select an allowed mode and ask to retry. Managed policy may limit the available modes."
                    })
                })
            }) : null, tj[238] = tw, tj[239] = tR, tj[240] = tm) : tm = tj[240];
            let nD = aZ ? nI : nO;
            tj[241] !== tm || tj[242] !== nD ? (th = (0, n.jsxs)(n.Fragment, {
                children: [tm, nD]
            }), tj[241] = tm, tj[242] = nD, tj[243] = th) : th = tj[243];
            let nH = th;
            tj[244] !== tw ? (tx = (0, f.a)(tw), tj[244] = tw, tj[245] = tx) : tx = tj[245];
            let nz = tx;
            if (null != nz) {
                let e;
                return tj[246] !== nz.id || tj[247] !== nz.schedule || tj[248] !== nz.title ? (e = (0, n.jsx)(J.a, {
                    id: nz.id,
                    mode: "view",
                    name: nz.title,
                    rrule: nz.schedule
                }), tj[246] = nz.id, tj[247] = nz.schedule, tj[248] = nz.title, tj[249] = e) : e = tj[249], e
            }
            tj[250] !== tM || tj[251] !== tw ? (tg = (0, G.b)(tw, tM), tj[250] = tM, tj[251] = tw, tj[252] = tg) : tg = tj[252];
            let nJ = tg;
            if (nJ?.type === "chatgpt-automation") {
                let e;
                return tj[253] !== nJ ? (e = (0, n.jsx)(y.a, {
                    automation: nJ
                }), tj[253] = nJ, tj[254] = e) : e = tj[254], e
            }
            if (nJ?.type === "chatgpt-automation-list") {
                let e;
                return tj[255] !== nJ.automations ? (e = (0, n.jsx)(j.a, {
                    automations: nJ.automations
                }), tj[255] = nJ.automations, tj[256] = e) : e = tj[256], e
            }
            tj[257] !== a0 || tj[258] !== tB || tj[259] !== tH || tj[260] !== tJ.value || tj[261] !== ak ? (tv = tH || "chatgpt-thread" !== tJ.value.routeKind ? (0, n.jsx)(V.a, {
                mcpAppId: tB,
                isInlineRequested: ak && a0
            }) : null, tj[257] = a0, tj[258] = tB, tj[259] = tH, tj[260] = tJ.value, tj[261] = ak, tj[262] = tv) : tv = tj[262], tj[263] !== ng || tj[264] !== nb || tj[265] !== nv || tj[266] !== a$ || tj[267] !== nw || tj[268] !== nH || tj[269] !== aY || tj[270] !== tz || tj[271] !== tU || tj[272] !== np || tj[273] !== nk || tj[274] !== a9 ? (tf = void 0 !== tU && a$ && null == a9 ? (0, n.jsx)(ex.a, {
                accessory: ng,
                body: nH,
                className: nb,
                "data-mcp-app-card": !!aY || void 0,
                disclosure: nv,
                headerClassName: nw,
                icon: tU,
                summary: tz ?? np
            }) : (0, n.jsx)(eT.a, {
                className: nb,
                "data-mcp-app-card": !!aY || void 0,
                header: a$ ? nk : null,
                body: nH
            }), tj[263] = ng, tj[264] = nb, tj[265] = nv, tj[266] = a$, tj[267] = nw, tj[268] = nH, tj[269] = aY, tj[270] = tz, tj[271] = tU, tj[272] = np, tj[273] = nk, tj[274] = a9, tj[275] = tf) : tf = tj[275], tj[276] !== an || tj[277] !== tw.callId || tj[278] !== tD ? (tb = (e, t) => (0, n.jsxs)(u.Fragment, {
                children: [(0, n.jsx)(ef.a, {
                    variant: "grouped"
                }), (0, n.jsx)(eP, {
                    call: e,
                    fallbackPageUrl: an,
                    loadRemoteLogos: tD
                })]
            }, `${tw.callId}:webmcp:${t}:${e.name}`), tj[276] = an, tj[277] = tw.callId, tj[278] = tD, tj[279] = tb) : tb = tj[279];
            let nK = al.map(tb);
            return tj[280] !== tv || tj[281] !== tf || tj[282] !== nK ? (ty = (0, n.jsxs)(n.Fragment, {
                children: [tv, tf, nK]
            }), tj[280] = tv, tj[281] = tf, tj[282] = nK, tj[283] = ty) : ty = tj[283], ty
        }

        function eE(e) {
            return "text" !== e.type
        }

        function eP(e) {
            let t, a, o, i, s, r, c, u, p, h = (0, l.c)(32),
                {
                    call: x,
                    fallbackPageUrl: g,
                    loadRemoteLogos: v
                } = e,
                f = null == x.sourceHostname ? g : `https://${x.sourceHostname}`,
                b = "invokeTool" === x.kind ? x.inputJson : void 0,
                y = "invokeTool" === x.kind && !0 === x.inputTruncated;
            h[0] !== v || h[1] !== f ? (t = null == f ? (0, n.jsx)(A.a, {
                className: "shrink-0 text-text/60",
                asset: eL.a
            }) : (0, n.jsx)(R.a, {
                className: "icon-xs shrink-0 text-text/60",
                href: f,
                loadRemote: v
            }), h[0] = v, h[1] = f, h[2] = t) : t = h[2], h[3] !== x.name || h[4] !== x.title ? (a = x.title ?? (0, d.a)(x.name, {
                style: "sentence"
            }), h[3] = x.name, h[4] = x.title, h[5] = a) : a = h[5], h[6] !== x.kind || h[7] !== a ? (o = (0, n.jsx)(m.a, {
                id: "codex.mcpTool.webMcpActivity.completed",
                defaultMessage: "{kind, select, listTools {Listed website tools} other {{toolName}}}",
                description: "Human-readable activity label for a website-provided WebMCP tool invocation",
                values: {
                    kind: x.kind,
                    toolName: a
                }
            }), h[6] = x.kind, h[7] = a, h[8] = o) : o = h[8], h[9] !== x.description || h[10] !== x.name || h[11] !== x.readOnlyHint || h[12] !== x.sourceHostname || h[13] !== x.title || h[14] !== b || h[15] !== y ? (i = eD({
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
            }, 2), h[9] = x.description, h[10] = x.name, h[11] = x.readOnlyHint, h[12] = x.sourceHostname, h[13] = x.title, h[14] = b, h[15] = y, h[16] = i) : i = h[16];
            let j = y ? "true" : "false";
            return h[17] !== j ? (s = (0, n.jsx)(m.a, {
                id: "codex.localConversation.webMcpTools.toolLabel",
                defaultMessage: "{truncated, select, true {Tool (input truncated)} other {Tool}}",
                description: "Title for a website-provided WebMCP tool definition and its input",
                values: {
                    truncated: j
                }
            }), h[17] = j, h[18] = s) : s = h[18], h[19] !== i || h[20] !== s ? (r = (0, n.jsx)(M.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: i,
                language: "json",
                showStickyRightContent: !1,
                title: s
            }), h[19] = i, h[20] = s, h[21] = r) : r = h[21], h[22] !== x.outputJson || h[23] !== x.outputTruncated ? (c = null == x.outputJson ? null : (0, n.jsx)(M.CodeSnippet, {
                codeContainerClassName: "max-h-48 overflow-auto",
                content: x.outputTruncated ? x.outputJson : function(e) {
                    try {
                        return eD(JSON.parse(e), 2)
                    } catch {
                        return e
                    }
                }(x.outputJson),
                language: "json",
                showStickyRightContent: !1,
                title: (0, n.jsx)(m.a, {
                    id: "codex.localConversation.webMcpTools.resultLabel",
                    defaultMessage: "{truncated, select, true {Result (truncated)} other {Result}}",
                    description: "Title for a website-provided WebMCP tool result",
                    values: {
                        truncated: x.outputTruncated ? "true" : "false"
                    }
                })
            }), h[22] = x.outputJson, h[23] = x.outputTruncated, h[24] = c) : c = h[24], h[25] !== r || h[26] !== c ? (u = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2",
                children: [r, c]
            }), h[25] = r, h[26] = c, h[27] = u) : u = h[27], h[28] !== t || h[29] !== o || h[30] !== u ? (p = (0, n.jsx)(eI.a, {
                icon: t,
                status: "completed",
                summary: o,
                children: u
            }), h[28] = t, h[29] = o, h[30] = u, h[31] = p) : p = h[31], p
        }

        function eO(e) {
            let t, a, o = (0, l.c)(5),
                {
                    heightHint: i,
                    minFrameHeight: s
                } = e;
            return o[0] !== i || o[1] !== s ? (t = (0, K.b)(i, s), o[0] = i, o[1] = s, o[2] = t) : t = o[2], o[3] !== t ? (a = (0, n.jsx)(_.a, {
                "aria-hidden": !0,
                "data-mcp-app-expanding-placeholder": "true",
                className: "w-full",
                style: {
                    height: t
                }
            }), o[3] = t, o[4] = a) : a = o[4], a
        }

        function eD(e, t) {
            try {
                return JSON.stringify(e, null, t) ?? "null"
            } catch {
                return el.a.debug("Failed to stringify MCP tool call payload", {
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
                    hostId: s
                } = e,
                c = (0, r.y)(ee.a),
                d = (0, p.a)();
            switch (a.type) {
                case "image": {
                    let e, l, i, r, u, p, m;
                    t[0] !== a.annotations || t[1] !== d ? (e = eJ(a.annotations, d), t[0] = a.annotations, t[1] = d, t[2] = e) : e = t[2];
                    let h = e,
                        x = `data:${a.mimeType};base64,${a.data}`;
                    t[3] !== d ? (l = d.formatMessage({
                        id: "codex.mcpTool.contentBlock.imageAlt",
                        defaultMessage: "Image returned by tool",
                        description: "Accessible description for an image included in an MCP tool result"
                    }), t[3] = d, t[4] = l) : l = t[4];
                    let g = l;
                    t[5] !== o || t[6] !== s || t[7] !== g || t[8] !== x || t[9] !== d || t[10] !== c ? (i = () => (0, D.getGeneratedImageContextMenuItems)(c, {
                        chatGptConversationId: o.startsWith("chatgpt:") ? (0, w.d)(o.slice(8)) : void 0,
                        displaySrc: x,
                        hostId: s,
                        image: {
                            kind: "generic",
                            src: x,
                            alt: g
                        },
                        intl: d
                    }), t[5] = o, t[6] = s, t[7] = g, t[8] = x, t[9] = d, t[10] = c, t[11] = i) : i = t[11], t[12] !== g || t[13] !== x ? (r = (0, n.jsx)("img", {
                        className: "max-h-48 w-max max-w-full gap-0.5 rounded-md object-contain",
                        alt: g,
                        src: x
                    }), t[12] = g, t[13] = x, t[14] = r) : r = t[14], t[15] !== i || t[16] !== r ? (u = (0, n.jsx)(S.a, {
                        getItems: i,
                        children: r
                    }), t[15] = i, t[16] = r, t[17] = u) : u = t[17];
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
                    t[23] !== a.annotations || t[24] !== d ? (e = eJ(a.annotations, d), t[23] = a.annotations, t[24] = d, t[25] = e) : e = t[25];
                    let s = e;
                    return t[26] !== a.data || t[27] !== a.mimeType ? (l = (0, n.jsx)(ez, {
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
                    t[34] !== a.annotations || t[35] !== d ? (e = eJ(a.annotations, d), t[34] = a.annotations, t[35] = d, t[36] = e) : e = t[36];
                    let s = e,
                        r = a.title ?? a.name ?? a.uri;
                    return t[37] !== r ? (l = (0, n.jsx)("div", {
                        className: "break-words text-codex-description/80",
                        children: (0, n.jsx)(m.a, {
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
                        children: (0, n.jsx)(m.a, {
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
                            children: (0, n.jsx)(m.a, {
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
                            children: (0, n.jsx)(m.a, {
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
                            children: (0, n.jsx)(m.a, {
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
                    return t[61] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.b)("[&_*]:text-text/50", "bg-primary-soft text-codex-description/80 max-h-48 overflow-auto whitespace-pre-wrap rounded-md px-3 py-2 text-size-chat"), t[61] = e) : e = t[61], t[62] !== a.raw ? (l = eD(a.raw, 2), t[62] = a.raw, t[63] = l) : l = t[63], t[64] !== l ? (o = (0, n.jsx)("pre", {
                        className: e,
                        children: l
                    }), t[64] = l, t[65] = o) : o = t[65], o
                }
                case "text": {
                    let e, l, o, s;
                    t[66] !== a.annotations || t[67] !== a.text || t[68] !== d ? (e = [a.text, eJ(a.annotations, d)].filter(e => null != e).join("\n"), t[66] = a.annotations, t[67] = a.text, t[68] = d, t[69] = e) : e = t[69];
                    let r = e;
                    return t[70] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsxs)("div", {
                        className: "sticky top-0 z-10 flex items-center justify-between py-1 ps-2 pe-2 font-sans text-sm text-codex-description select-none",
                        children: [(0, n.jsx)("div", {
                            className: "min-w-0 truncate",
                            children: (0, n.jsx)(m.a, {
                                id: "codex.mcpTool.textBlock.plaintextTitle",
                                defaultMessage: "plaintext",
                                description: "Title shown for MCP text content blocks rendered in a code-style container"
                            })
                        }), (0, n.jsx)("div", {
                            className: "flex items-center"
                        })]
                    }), t[70] = l) : l = t[70], t[71] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, i.b)("[&_*]:text-text/50", "text-codex-description/80 m-0 whitespace-pre-wrap break-words font-sans text-size-chat leading-relaxed extension:leading-normal"), t[71] = o) : o = t[71], t[72] !== r ? (s = (0, n.jsxs)("div", {
                        className: "relative overflow-clip rounded-lg border border-strong bg-secondary-soft-alpha contain-inline-size",
                        children: [l, (0, n.jsx)("div", {
                            className: "max-h-48 overflow-y-auto p-2",
                            children: (0, n.jsx)("pre", {
                                className: o,
                                children: r
                            })
                        })]
                    }), t[72] = r, t[73] = s) : s = t[73], s
                }
            }
        }

        function ez(e) {
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
                [p, h] = (0, u.useState)(null);
            s[3] !== d ? (a = () => h(d), s[3] = d, s[4] = a) : a = s[4];
            let x = a;
            if (p?.data === r && p.mimeType === c) {
                let e;
                return s[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(m.a, {
                    id: "codex.mcpTool.contentBlock.audioUnavailable",
                    defaultMessage: "Audio unavailable",
                    description: "Short fallback shown instead of the audio player when audio returned by an MCP tool cannot be played"
                }), s[5] = e) : e = s[5], e
            }
            return s[6] !== x || s[7] !== d ? (o = e => {
                if (null != e) return (0, eo.c)(e, d, x)
            }, s[6] = x, s[7] = d, s[8] = o) : o = s[8], s[9] !== x || s[10] !== o ? (i = (0, n.jsx)("audio", {
                ref: o,
                className: "w-full gap-0.5",
                controls: !0,
                onError: x,
                preload: "metadata"
            }), s[9] = x, s[10] = o, s[11] = i) : i = s[11], i
        }

        function eJ(e, t) {
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
        a.d(t, {
            a: () => eU
        })
    }),
    KU8M: (function(e, t, a) {
        var n = a("iTtm"),
            l = a("o0PZ"),
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
                return void 0 === m || (0, l.Ag)(m?._meta) === r.appContext.resourceUri && null != (0, i.c)(m, r.appContext) ? p : d(s.o, u)
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
            i = a("o0PZ"),
            s = a("sM3V"),
            r = a("KJ1J"),
            c = a("FvYa"),
            d = a("zUz7"),
            u = a("LF5P");

        function p(e) {
            let t, a, p, m, h = (0, l.c)(14),
                {
                    fallback: x,
                    hostId: g,
                    item: v,
                    loadRemoteLogos: f
                } = e,
                b = v.invocation.server;
            h[0] !== v.threadId ? (t = (0, i.Le)(v.threadId), h[0] = v.threadId, h[1] = t) : t = h[1], h[2] !== g || h[3] !== v.invocation.server || h[4] !== t ? (a = {
                hostId: g,
                serverName: b,
                threadId: t
            }, h[2] = g, h[3] = v.invocation.server, h[4] = t, h[5] = a) : a = h[5];
            let y = (0, o.x)(!f || null != (0, u.e)({
                item: v
            }) || (0, i.bi)(v.invocation.server) || (0, r.e)(v.invocation.server) ? null : s.a, a);
            h[6] !== y ? (p = (0, d.a)(y), h[6] = y, h[7] = p) : p = h[7];
            let j = p;
            return h[8] !== x || h[9] !== j || h[10] !== v.invocation.server || h[11] !== y?.name || h[12] !== y?.title ? (m = null == j ? x : (0, n.jsx)(c.a, {
                alt: y?.title ?? y?.name ?? v.invocation.server,
                className: "icon-xs shrink-0 object-contain",
                logoUrl: j.logoUrl,
                logoDarkUrl: j.logoDarkUrl,
                fallback: x
            }), h[8] = x, h[9] = j, h[10] = v.invocation.server, h[11] = y?.name, h[12] = y?.title, h[13] = m) : m = h[13], m
        }
        a.d(t, {
            a: () => p
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

        function i(e) {
            let t = o.safeParse(e);
            return t.success ? t.data["codex/toolSurface"].webMcpCalls : []
        }
        a.d(t, {
            a: () => i
        })
    }),
    oKu4: (function(e, t, a) {
        var n = a("ABep"),
            l = a("QosV"),
            o = a("Wyro"),
            i = a.n(o),
            s = a("iTtm"),
            r = a("o0PZ"),
            c = a("Wf1j"),
            d = a("HZfM"),
            u = a("qKlE"),
            p = a("OusJ"),
            m = a("odKs"),
            h = a("GIgU");
        a("bN4H");
        var x = a("TleN"),
            g = a("TL6G"),
            v = a("tSEg");

        function f(e) {
            let t, a, o, f, y, j, w, k, N, C = (0, l.c)(134),
                {
                    elicitation: M,
                    result: S,
                    id: T,
                    kind: I,
                    mode: R,
                    name: A,
                    prompt: _,
                    rrule: L,
                    projectId: U,
                    cwds: E,
                    destination: P,
                    executionEnvironment: O,
                    localEnvironmentConfigPath: D,
                    model: H,
                    reasoningEffort: z,
                    notificationPolicy: J,
                    targetThreadId: K,
                    status: F
                } = e,
                q = void 0 === S ? null : S,
                W = (0, s.y)(v.a),
                B = (0, c.a)();
            (0, x.a)();
            let V = (0, d.Y)("/remote/:conversationId"),
                G = (0, d.Y)("/local/:conversationId"),
                Z = (0, s.z)(h.e),
                Q = K ?? null;
            C[0] !== E || C[1] !== P || C[2] !== O || C[3] !== T || C[4] !== I || C[5] !== D || C[6] !== R || C[7] !== H || C[8] !== A || C[9] !== J || C[10] !== U || C[11] !== _ || C[12] !== z || C[13] !== Q || C[14] !== L || C[15] !== F ? (t = JSON.stringify({
                id: T,
                kind: I,
                mode: R,
                name: A,
                prompt: _,
                rrule: L,
                projectId: U,
                cwds: E,
                destination: P,
                executionEnvironment: O,
                localEnvironmentConfigPath: D,
                model: H,
                reasoningEffort: z,
                notificationPolicy: J,
                targetThreadId: Q,
                status: F
            }), C[0] = E, C[1] = P, C[2] = O, C[3] = T, C[4] = I, C[5] = D, C[6] = R, C[7] = H, C[8] = A, C[9] = J, C[10] = U, C[11] = _, C[12] = z, C[13] = Q, C[14] = L, C[15] = F, C[16] = t) : t = C[16];
            let $ = t,
                Y = Z?.directiveKey === $ ? Z.automationId : null,
                X = Y ?? q?.automationId ?? T,
                ee = q?.snapshot ?? null,
                et = "view" === R ? R : null,
                ea = "view" === R && null != T,
                en = null != T && (ea || "suggested-update" === R),
                el = (0, s.z)(u.c),
                eo = el.data,
                ei = !!en && el.isLoading;
            if (C[17] !== eo?.items || C[18] !== el.isLoading || C[19] !== Y || C[20] !== E || C[21] !== $ || C[22] !== et || C[23] !== M || C[24] !== O || C[25] !== T || C[26] !== B || C[27] !== ei || C[28] !== ea || C[29] !== I || C[30] !== D || C[31] !== G || C[32] !== R || C[33] !== H || C[34] !== A || C[35] !== J || C[36] !== U || C[37] !== _ || C[38] !== z || C[39] !== V || C[40] !== X || C[41] !== Q || C[42] !== q?.automationId || C[43] !== q?.deleteStatus || C[44] !== q?.mode || C[45] !== ee?.name || C[46] !== ee?.rrule || C[47] !== L || C[48] !== W || C[49] !== en || C[50] !== F) {
                var es;
                let e, t, n, l, s, c, d, u, p, x, v, b, k, N, S = null != T ? eo?.items.find(e => e.id === T) ?? null : null;
                C[57] !== eo?.items || C[58] !== Y || C[59] !== B || C[60] !== ei || C[61] !== ea || C[62] !== R || C[63] !== A || C[64] !== X || C[65] !== q?.mode || C[66] !== ee?.name || C[67] !== ee?.rrule || C[68] !== L ? ({
                    resolvedName: f,
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
                    mode: q?.mode ?? R,
                    isSuggestionAccepted: null != Y,
                    trimmedId: X ?? null,
                    trimmedName: A ?? ee?.name ?? null,
                    trimmedRrule: L ?? ee?.rrule ?? null,
                    automations: eo?.items ?? null,
                    isLoading: ei
                }), l = B.formatMessage({
                    id: "settings.automations.rruleSummaryFallback",
                    defaultMessage: "Custom schedule",
                    description: "Fallback label when RRULE summary cannot be generated"
                }), s = (0, m.f)({
                    rrule: n,
                    intl: B,
                    fallbackMessage: l
                }), C[57] = eo?.items, C[58] = Y, C[59] = B, C[60] = ei, C[61] = ea, C[62] = R, C[63] = A, C[64] = X, C[65] = q?.mode, C[66] = ee?.name, C[67] = ee?.rrule, C[68] = L, C[69] = t, C[70] = f, C[71] = n, C[72] = l, C[73] = s) : (t = C[69], f = C[70], n = C[71], l = C[72], s = C[73]);
                let P = s;
                C[74] !== B ? (c = B.formatMessage({
                    id: "settings.automations.loading",
                    defaultMessage: "Loading…",
                    description: "Loading state for workflows list"
                }), C[74] = B, C[75] = c) : c = C[75];
                let K = c;
                C[76] !== B ? (d = B.formatMessage({
                    id: "automation.updateDirective.untitled",
                    defaultMessage: "Untitled scheduled task",
                    description: "Fallback title when scheduled task name is missing"
                }), C[76] = B, C[77] = d) : d = C[77];
                let Z = d,
                    er = q?.mode ?? R,
                    ec = "delete" === er,
                    ed = ec || q?.automationId != null ? q?.automationId ?? T ?? null : X;
                C[78] !== ed || C[79] !== ec ? (u = ec ? (es = ed ?? null, 0 === (e = es?.trim() ?? "").length ? null : /^[0-9a-f]{8}-[0-9a-f-]+$/i.test(e) ? e : i()(e.replace(/[-_]+/g, " "))) : null, C[78] = ed, C[79] = ec, C[80] = u) : u = C[80];
                let eu = u;
                w = t ? K : f || eu || Z, C[81] !== eu || C[82] !== B || C[83] !== f ? (p = f ?? eu ?? B.formatMessage({
                    id: "automation.updateDirective.untitled",
                    defaultMessage: "Untitled scheduled task",
                    description: "Fallback title when scheduled task name is missing"
                }), C[81] = eu, C[82] = B, C[83] = f, C[84] = p) : p = C[84];
                let ep = p,
                    em = P || (t ? K : null != n ? l : null),
                    eh = null != A && null != _ && null != L && ("heartbeat" === I ? null != Q : void 0 !== U || null != E),
                    ex = null != T && null != F && null != A && null != _ && null != L && (null == S ? "heartbeat" === I ? null != Q : void 0 !== U || null != E : !!(0, r.Uh)(S) || void 0 !== U || null != E),
                    eg = "suggested-update" === R && en && el.isLoading,
                    ev = "suggested-create" === R || "suggested-update" === R,
                    ef = ev ? M : void 0,
                    eb = T ?? null,
                    ey = I ?? null,
                    ej = A ?? "",
                    ew = _ ?? "",
                    ek = L ?? "";
                C[85] !== E ? (x = E ?? [], C[85] = E, C[86] = x) : x = C[86];
                let eN = void 0 !== U ? U : E?.[0] === r.bd ? null : E?.[0] ?? null,
                    eC = O ?? null,
                    eM = D ?? null,
                    eS = H ?? null,
                    eT = z ?? null;
                C[87] !== J ? (v = void 0 !== J ? {
                    notificationPolicy: J
                } : {}, C[87] = J, C[88] = v) : v = C[88];
                let eI = F ?? null;
                C[89] !== $ || C[90] !== et || C[91] !== Q || C[92] !== eb || C[93] !== ey || C[94] !== ej || C[95] !== ew || C[96] !== ek || C[97] !== x || C[98] !== eN || C[99] !== eC || C[100] !== eM || C[101] !== eS || C[102] !== eT || C[103] !== v || C[104] !== eI || C[105] !== ef ? (b = {
                    elicitation: ef,
                    directiveKey: $,
                    mode: et,
                    id: eb,
                    kind: ey,
                    name: ej,
                    prompt: ew,
                    rrule: ek,
                    cwds: x,
                    projectId: eN,
                    executionEnvironment: eC,
                    localEnvironmentConfigPath: eM,
                    model: eS,
                    reasoningEffort: eT,
                    ...v,
                    targetThreadId: Q,
                    status: eI
                }, C[89] = $, C[90] = et, C[91] = Q, C[92] = eb, C[93] = ey, C[94] = ej, C[95] = ew, C[96] = ek, C[97] = x, C[98] = eN, C[99] = eC, C[100] = eM, C[101] = eS, C[102] = eT, C[103] = v, C[104] = eI, C[105] = ef, C[106] = b) : b = C[106];
                let eR = b,
                    eA = null != Y;
                C[107] !== eh || C[108] !== ex || C[109] !== et || C[110] !== ea || C[111] !== eA ? (k = (0, h.y)({
                    directiveMode: et,
                    canCreate: eh,
                    canUpdate: ex,
                    isViewMode: ea,
                    forceOpen: eA
                }), C[107] = eh, C[108] = ex, C[109] = et, C[110] = ea, C[111] = eA, C[112] = k) : k = C[112];
                let e_ = k;
                y = ec ? null : em, C[113] !== e_ || C[114] !== ed || C[115] !== Y || C[116] !== eR || C[117] !== eg || C[118] !== ev || C[119] !== G || C[120] !== V || C[121] !== W || C[122] !== ep ? (N = () => {
                    if (!eg) {
                        if (null != ed) return void g.c.dispatchHostMessage({
                            type: "navigate-to-route",
                            path: `/automations?automationId=${ed}`
                        });
                        "create" === e_ && (W.set(h.e, null), W.set(h.f, eR), g.c.dispatchHostMessage({
                            type: "navigate-to-route",
                            path: "/automations?automationMode=create"
                        }))
                    }
                }, C[113] = e_, C[114] = ed, C[115] = Y, C[116] = eR, C[117] = eg, C[118] = ev, C[119] = G, C[120] = V, C[121] = W, C[122] = ep, C[123] = N) : N = C[123], o = N, a = !ec && !eg && (null != ed || "create" === e_), j = function(e) {
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
                    deleteStatus: q?.deleteStatus,
                    intl: B,
                    mode: er
                }), C[17] = eo?.items, C[18] = el.isLoading, C[19] = Y, C[20] = E, C[21] = $, C[22] = et, C[23] = M, C[24] = O, C[25] = T, C[26] = B, C[27] = ei, C[28] = ea, C[29] = I, C[30] = D, C[31] = G, C[32] = R, C[33] = H, C[34] = A, C[35] = J, C[36] = U, C[37] = _, C[38] = z, C[39] = V, C[40] = X, C[41] = Q, C[42] = q?.automationId, C[43] = q?.deleteStatus, C[44] = q?.mode, C[45] = ee?.name, C[46] = ee?.rrule, C[47] = L, C[48] = W, C[49] = en, C[50] = F, C[51] = a, C[52] = o, C[53] = f, C[54] = y, C[55] = j, C[56] = w
            } else a = C[51], o = C[52], f = C[53], y = C[54], j = C[55], w = C[56];
            let er = j;
            C[124] !== er || C[125] !== f || C[126] !== y ? (k = [er, f, y].filter(b), C[124] = er, C[125] = f, C[126] = y, C[127] = k) : k = C[127];
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

        function b(e) {
            return "string" == typeof e
        }
        a.d(t, {
            a: () => f
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

        function h(e) {
            let t, a, s, h, x, g, v, f, b = (0, l.c)(32),
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
            let T = a;
            b[10] !== y.invocation.arguments || b[11] !== T ? (s = "read_page" === T ? m.safeParse(y.invocation.arguments).data : void 0, b[10] = y.invocation.arguments, b[11] = T, b[12] = s) : s = b[12];
            let I = s;
            b[13] !== I ? (h = null == I ? null : {
                kind: "page",
                id: I.page_id
            }, b[13] = I, b[14] = h) : h = b[14], b[15] !== k ? (x = {
                enabled: k
            }, b[15] = k, b[16] = x) : x = b[16];
            let R = (0, o.x)(u.a, h, x);
            if (null == R) return N;
            b[17] !== y.completed || b[18] !== y.invocation.server || b[19] !== y.result ? (g = "active", y.completed && (g = (0, c.h)({
                result: y.result,
                isCodexAppsServer: "codex_apps" === y.invocation.server
            }) ? "failed" : "completed"), b[17] = y.completed, b[18] = y.invocation.server, b[19] = y.result, b[20] = g) : g = b[20];
            let A = R.title ?? "";
            return b[21] !== N || b[22] !== w || b[23] !== g ? (v = e => {
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
                        state: g,
                        title: a
                    }
                })
            }, b[21] = N, b[22] = w, b[23] = g, b[24] = v) : v = b[24], b[25] !== R.document_type || b[26] !== R.namespace || b[27] !== R.page_id || b[28] !== R.symbol || b[29] !== A || b[30] !== v ? (f = (0, n.jsx)(p.a, {
                pageId: R.page_id,
                documentType: R.document_type,
                namespace: R.namespace,
                symbol: R.symbol,
                title: A,
                iconClassName: "text-text/60",
                children: v
            }), b[25] = R.document_type, b[26] = R.namespace, b[27] = R.page_id, b[28] = R.symbol, b[29] = A, b[30] = v, b[31] = f) : f = b[31], f
        }
        a.d(t, {
            a: () => h
        })
    }),
    n7q6: (function(e, t, a) {
        var n = a("ABep"),
            l = a("QosV"),
            o = a("oyxz"),
            i = a("ED7I"),
            s = a("VL1D");

        function r(e) {
            let t, a = (0, l.c)(3),
                {
                    item: o,
                    onEdit: s
                } = e;
            return a[0] !== o || a[1] !== s ? (t = (0, n.jsx)(i.a, {
                item: o,
                onEdit: s,
                renderActions: c
            }), a[0] = o, a[1] = s, a[2] = t) : t = a[2], t
        }

        function c(e) {
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
        a.d(t, {
            a: () => r
        })
    })
};