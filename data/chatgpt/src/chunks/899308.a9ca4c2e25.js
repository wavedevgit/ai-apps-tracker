export const __rspack_esm_ids = [899308];
export const __webpack_modules__ = {
    tmkO: (function(e, t, n) {
        var a = n("lAQI");
        let i = "update_up_next",
            r = a.K({
                status: a.L().trim().min(1).max(200).nullable(),
                history_summary: a.L().trim().min(1).max(300).optional()
            });
        n.d(t, {}, {
            a: i,
            b: function(e) {
                let t = r.safeParse(e);
                return t.success ? t.data.status : void 0
            },
            c: function(e, t) {
                return ("codex_app" === e || null == e) && t === i
            }
        })
    }),
    A7Ss: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            r = n("on57"),
            o = n("IPUh"),
            s = n("T1PX"),
            l = n("V8uZ");
        n.d(t, {}, {
            a: function(e) {
                let t, n, u, c, d = (0, i.c)(15),
                    {
                        expanded: p,
                        height: m,
                        onExpandComplete: f,
                        children: h
                    } = e,
                    g = (0, s.a)(),
                    v = p ? m : 0,
                    y = +!!p;
                d[0] !== v || d[1] !== y ? (t = {
                    height: v,
                    opacity: y
                }, d[0] = v, d[1] = y, d[2] = t) : t = d[2], d[3] !== g ? (n = g ? {
                    duration: 0
                } : l.a, d[3] = g, d[4] = n) : n = d[4];
                let C = !p,
                    x = !p,
                    w = p ? "overflow-visible" : "pointer-events-none overflow-hidden";
                d[5] !== w ? (u = (0, r.b)("motion-reduce:h-auto! motion-reduce:aria-hidden:h-0! motion-reduce:opacity-100! motion-reduce:aria-hidden:opacity-0!", w), d[5] = w, d[6] = u) : u = d[6];
                let b = p ? f : void 0;
                return d[7] !== h || d[8] !== t || d[9] !== n || d[10] !== C || d[11] !== x || d[12] !== u || d[13] !== b ? (c = (0, a.jsx)(o.a.div, {
                    initial: !1,
                    animate: t,
                    transition: n,
                    "aria-hidden": C,
                    inert: x,
                    className: u,
                    onAnimationComplete: b,
                    children: h
                }), d[7] = h, d[8] = t, d[9] = n, d[10] = C, d[11] = x, d[12] = u, d[13] = b, d[14] = c) : c = d[14], c
            }
        })
    }),
    cKhh: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            r = n("zd8w"),
            o = n("A7Ss"),
            s = n("wbOy"),
            l = n("ltPT"),
            u = n("MFk9"),
            c = n("K5Kt");
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, p, m, f, h, g = (0, i.c)(34),
                    {
                        defaultExpanded: v,
                        indentContent: y,
                        icon: C,
                        onExpand: x,
                        summary: w,
                        status: b,
                        children: k,
                        unmountOnCollapse: A
                    } = e,
                    I = void 0 === y || y,
                    S = void 0 !== A && A,
                    [P, z] = (0, r.useState)(!1),
                    [L, T] = (0, r.useState)(void 0 !== v && v),
                    {
                        elementHeightPx: j,
                        elementRef: F
                    } = (0, l.a)(),
                    M = "running" === b,
                    _ = null != k,
                    N = _ && (M ? !P : L);
                g[0] !== P || g[1] !== L || g[2] !== N || g[3] !== M || g[4] !== x ? (t = () => {
                    N || x?.(), M ? z(!P) : T(!L)
                }, g[0] = P, g[1] = L, g[2] = N, g[3] = M, g[4] = x, g[5] = t) : t = g[5];
                let U = t;
                g[6] !== M || g[7] !== w ? (n = (0, a.jsx)(s.a, {
                    active: M,
                    className: "min-w-0 truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                    children: w
                }), g[6] = M, g[7] = w, g[8] = n) : n = g[8];
                let O = n;
                g[9] !== U || g[10] !== _ || g[11] !== N ? (d = _ ? {
                    expanded: N,
                    onToggle: U
                } : void 0, g[9] = U, g[10] = _, g[11] = N, g[12] = d) : d = g[12];
                let W = d,
                    R = S ? void 0 : F;
                g[13] !== k || g[14] !== I || g[15] !== R ? (p = (0, a.jsx)(c.a, {
                    ref: R,
                    indent: I,
                    children: k
                }), g[13] = k, g[14] = I, g[15] = R, g[16] = p) : p = g[16];
                let B = p;
                g[17] !== C || g[18] !== O ? (m = {
                    icon: C,
                    summary: O
                }, g[17] = C, g[18] = O, g[19] = m) : m = g[19];
                let q = m;
                if (S || null == W) {
                    let e, t;
                    return g[20] !== B || g[21] !== W ? (e = W && {
                        ...W,
                        details: B
                    }, g[20] = B, g[21] = W, g[22] = e) : e = g[22], g[23] !== q || g[24] !== e ? (t = (0, a.jsx)(u.a, {
                        ...q,
                        disclosure: e
                    }), g[23] = q, g[24] = e, g[25] = t) : t = g[25], t
                }
                g[26] !== B || g[27] !== j || g[28] !== N ? (f = (0, a.jsx)(o.a, {
                    expanded: N,
                    height: j,
                    children: B
                }), g[26] = B, g[27] = j, g[28] = N, g[29] = f) : f = g[29];
                let E = f;
                return g[30] !== E || g[31] !== W || g[32] !== q ? (h = (0, a.jsx)(u.a, {
                    ...q,
                    body: E,
                    externalDisclosure: W
                }), g[30] = E, g[31] = W, g[32] = q, g[33] = h) : h = g[33], h
            }
        })
    }),
    LdAY: (function(e, t, n) {
        var a = n("Hkqr");
        n.d(t, {}, {
            a: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = (0, a.a)({
                        apps: t,
                        sourceName: e.sourceKey
                    });
                return null != n ? {
                    key: `app:${n.id}`,
                    connectorId: n.id,
                    logoUrl: n.logoUrl ?? null,
                    logoUrlDark: n.logoUrlDark ?? null,
                    name: n.name,
                    nativeAppReference: null
                } : {
                    key: `external-event:${e.sourceKey}`,
                    connectorId: null,
                    logoUrl: null,
                    logoUrlDark: null,
                    name: e.sourceLabel,
                    nativeAppReference: null
                }
            },
            b: function(e) {
                return e.subscriptionEnded ? null : JSON.stringify(["external-event", e.sourceKey, e.sourceLabel])
            }
        })
    }),
    udV3: (function(e, t, n) {
        var a = n("pkoC"),
            i = n.n(a),
            r = n("eCUJ");

        function o(e) {
            let t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                a = [],
                i = [],
                r = 0,
                o = () => {
                    let e = i[0];
                    null != e && (a.push({
                        kind: "group",
                        key: `agent-activity-group:${s(e,r)}`,
                        items: [e, ...i.slice(1)],
                        ...null == t ? {} : {
                            phase: t
                        }
                    }), i = [])
                };
            for (let {
                    activityItem: l,
                    sourceIndex: u,
                    startsGroup: c
                }
                of e) {
                let e = n && "activityPhase" in l.item ? l.item.activityPhase : void 0;
                if ((c || e?.id !== t?.id) && o(), t = e, "groupable" === l.grouping) {
                    0 === i.length && (r = u), i.push(l);
                    continue
                }
                o();
                let d = a.at(-1);
                ("strict-review-notice" !== l.item.type || d?.kind !== "standalone" || "strict-review-notice" !== d.item.item.type) && a.push({
                    kind: "standalone",
                    key: `agent-activity-standalone:${s(l,u)}`,
                    item: l
                })
            }
            return o(), a
        }

        function s(e, t) {
            let n = e.item;
            return "mcp-tool-call" === n.type && null != n.deferredOutputTurnId ? JSON.stringify([n.threadId, n.deferredOutputTurnId, n.callId]) : "assistant-message" === n.type && null != n.searchItemId ? n.searchItemId : "browser-card" === n.type ? `browser-card:${n.id}` : "id" in n && "string" == typeof n.id ? n.id : "callId" in n && "string" == typeof n.callId ? n.callId : "requestId" in n && "string" == typeof n.requestId ? n.requestId : "handoffId" in n && "string" == typeof n.handoffId ? n.handoffId : `${n.type}:${t}`
        }
        n.d(t, {}, {
            a: class {
                key;
                group;
                headerGroup;
                constructor(e) {
                    this.key = e
                }
                continuesInto(e) {
                    let t = "user-message" === e.type ? e.receivedAtMs ?? e.sentAtMs : e.sourceStartedAtMs ?? ("startedAtMs" in e ? e.startedAtMs : void 0);
                    return ("user-message" !== e.type || null != t) && (this.open || null != t && this.lastCompletion > t)
                }
                open = !1;
                lastCompletion = -1 / 0;
                takeCompletedBefore(e, t, n) {
                    if (null == this.group) return;
                    let [
                        [a, ...r],
                        [o, ...s]
                    ] = i()(this.group.items, t => {
                        let {
                            item: n
                        } = t;
                        return "completedAtMs" in n && null != n.completedAtMs && n.completedAtMs <= e
                    });
                    if (null == a || null == o) return;
                    this.group.items = [o, ...s];
                    let {
                        item: l
                    } = r.at(-1) ?? a;
                    return {
                        kind: "group",
                        key: t,
                        phase: n && "activityPhase" in l ? l.activityPhase : void 0,
                        items: [a, ...r]
                    }
                }
                collect(e) {
                    if (!e.items.some(e => {
                            let {
                                item: t
                            } = e;
                            return "exec" === t.type
                        }) && (null == e.phase || e.phase.id !== this.group?.phase?.id)) return e;
                    for (let {
                            item: t
                        }
                        of e.items) "completedAtMs" in t && null != t.completedAtMs ? this.lastCompletion = Math.max(this.lastCompletion, t.completedAtMs) : ((0, r.a)(t) || "exec" === t.type && "interrupted" === t.executionStatus && null === t.completedAtMs) && (this.open = !0);
                    this.headerGroup = e, null == this.group ? this.group = {
                        ...e,
                        key: this.key,
                        items: [...e.items]
                    } : (this.group.items.push(...e.items), this.group.phase = e.phase)
                }
            },
            b: s,
            c: function(e) {
                let t = 1 === e.length ? e[0]?.item : void 0;
                return t?.type === "web-search" ? t.title : void 0
            },
            d: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return o(e.map((e, t) => ({
                    activityItem: e,
                    sourceIndex: t,
                    startsGroup: !1
                })), t)
            },
            e: o
        })
    }),
    zUHW: (function(e, t, n) {
        n.d(t, {
            a: () => P
        });
        var a = n("UKCO"),
            i = n("KJ1J"),
            r = n("USdi"),
            o = n("LdAY"),
            s = n("mJQs"),
            l = n("udV3"),
            u = n("RSI4"),
            c = n("hNWF"),
            d = n("DYB3"),
            p = n("acby"),
            m = n("LF5P"),
            f = n("Z2lA");

        function h(e, t) {
            t.count > 0 && e.push(t)
        }

        function g(e, t) {
            if (null != e.pluginId && !(0, i.f)(e.invocation.server)) return !0;
            let n = y(e, t);
            return null != n && v(n)
        }

        function v(e) {
            return null != e.logoUrl || null != e.logoUrlDark || null != e.nativeAppReference
        }

        function y(e, t) {
            return (0, m.c)({
                appContext: e.appContext,
                functionName: e.functionName,
                invocation: e.invocation,
                resolvedApps: t,
                source: e.source
            })
        }

        function C(e) {
            return "patch" === e.type && null != (0, s.c)(e.visualizationActivities)
        }

        function x(e) {
            return "exec" === e.type && "read" === e.parsedCmd.type && (0, f.b)({
                summary: e.parsedCmd,
                cwd: e.cwd
            })
        }

        function w(e) {
            return "web-search" === e.type || "exec" === e.type && !!(0, u.c)(e.parsedCmd.cmd) && (!e.parsedCmd.isFinished || e.output?.exitCode === 0)
        }
        var b = n("EeZ9"),
            k = n("wS4d");

        function A(e) {
            var t, n;
            let a, i, r = {
                createdPaths: new Set,
                runningCreatedPaths: new Set,
                stoppedCreatedPaths: new Set,
                editedPaths: new Set,
                runningEditedPaths: new Set,
                deletedPaths: new Set,
                runningDeletedPaths: new Set,
                visualizationActivitiesByPath: new Map,
                exploredPaths: new Set,
                runningExploredPaths: new Set,
                loadedToolPaths: new Set,
                runningLoadedToolPaths: new Set,
                searchCount: 0,
                runningSearchCount: 0,
                listCount: 0,
                runningListCount: 0,
                automaticApprovalReviewFailureIds: new Set,
                deniedRequestCount: 0,
                timedOutRequestCount: 0,
                commandCount: 0,
                runningCommandCount: 0,
                completedWebSearchCommandCount: 0,
                runningFolderCreationCommandCount: 0,
                runningWebSearchCommandCount: 0,
                mcpToolCallCount: 0,
                mcpToolCallSources: new Map,
                webSearchCount: 0,
                runningWebSearchCount: 0
            };
            for (let n of e) {
                "other" !== (t = n).type && ("exploration" === t.type || "patch" === t.type || "exec" === t.type || "mcp-tool-call" === t.type || "automatic-approval-review" === t.type || "web-search" === t.type || (0, k.a)(t)) && function(e, t) {
                    if ("exploration" === t.type) {
                        for (let n of (I(e, t.automaticApprovalReviewFailures), t.readPaths)) e.exploredPaths.add(n);
                        for (let n of t.runningReadPaths) e.runningExploredPaths.add(n);
                        for (let n of t.loadedToolPaths) e.loadedToolPaths.add(n);
                        for (let n of t.runningLoadedToolPaths) e.runningLoadedToolPaths.add(n);
                        e.searchCount += t.searchCount, e.runningSearchCount += t.runningSearchCount, e.listCount += t.listCount, e.runningListCount += t.runningListCount;
                        return
                    }
                    if ("patch" === t.type) {
                        for (let n of (I(e, t.automaticApprovalReviewFailures), t.createdPaths)) e.createdPaths.add(n);
                        for (let n of t.runningCreatedPaths) e.runningCreatedPaths.add(n);
                        for (let n of t.stoppedCreatedPaths) e.stoppedCreatedPaths.add(n);
                        for (let n of t.editedPaths) e.editedPaths.add(n);
                        for (let n of t.runningEditedPaths) e.runningEditedPaths.add(n);
                        for (let n of t.deletedPaths) e.deletedPaths.add(n);
                        for (let n of t.runningDeletedPaths) e.runningDeletedPaths.add(n);
                        if (null != t.visualizationActivity)
                            for (let n of t.visualizationActivity.activities) {
                                let a = e.visualizationActivitiesByPath.get(n.path);
                                e.visualizationActivitiesByPath.set(n.path, {
                                    kind: a?.kind === "create" || "create" === n.kind ? "create" : "update",
                                    isInProgress: a?.isInProgress === !0 || t.visualizationActivity.isInProgress
                                })
                            }
                        return
                    }
                    if ("exec" === t.type) {
                        if (I(e, t.automaticApprovalReviewFailures), e.commandCount += 1, t.isInProgress) {
                            e.runningCommandCount += 1, !0 === t.createsFolder && (e.runningFolderCreationCommandCount += 1), !0 === t.searchesWeb && (e.runningWebSearchCommandCount += 1);
                            return
                        }!0 === t.searchesWeb && (e.completedWebSearchCommandCount += 1);
                        return
                    }
                    if ("automatic-approval-review" === t.type) return S(e, t);
                    if ("mcp-tool-call" === t.type) {
                        if (I(e, t.automaticApprovalReviewFailures), e.mcpToolCallCount += 1, null != t.source) {
                            let n = e.mcpToolCallSources.get(t.source.key);
                            e.mcpToolCallSources.set(t.source.key, {
                                ...t.source,
                                count: (n?.count ?? 0) + 1,
                                runningCount: (n?.runningCount ?? 0) + +!!t.isInProgress
                            })
                        }
                        return
                    }
                    if ("web-search" === t.type) {
                        e.webSearchCount += t.count, e.runningWebSearchCount += t.runningCount;
                        return
                    }(0, k.a)(t)
                }(r, n)
            }
            return i = (a = [...(n = r).visualizationActivitiesByPath.values()]).length > 0 ? {
                kind: a.some(e => {
                    let {
                        kind: t
                    } = e;
                    return "create" === t
                }) ? "create" : "update",
                isInProgress: a.some(e => {
                    let {
                        isInProgress: t
                    } = e;
                    return t
                })
            } : void 0, {
                createdFileCount: n.createdPaths.size,
                runningCreatedFileCount: n.runningCreatedPaths.size,
                stoppedCreatedFileCount: n.stoppedCreatedPaths.size,
                editedFileCount: n.editedPaths.size,
                runningEditedFileCount: n.runningEditedPaths.size,
                deletedFileCount: n.deletedPaths.size,
                runningDeletedFileCount: n.runningDeletedPaths.size,
                exploredFileCount: n.exploredPaths.size,
                runningExploredFileCount: n.runningExploredPaths.size,
                loadedToolCount: n.loadedToolPaths.size,
                runningLoadedToolCount: n.runningLoadedToolPaths.size,
                searchCount: n.searchCount,
                runningSearchCount: n.runningSearchCount,
                listCount: n.listCount,
                runningListCount: n.runningListCount,
                deniedRequestCount: n.deniedRequestCount,
                timedOutRequestCount: n.timedOutRequestCount,
                commandCount: n.commandCount,
                runningCommandCount: n.runningCommandCount,
                completedWebSearchCommandCount: n.completedWebSearchCommandCount,
                runningFolderCreationCommandCount: n.runningFolderCreationCommandCount,
                visualizationActivity: i,
                runningWebSearchCommandCount: n.runningWebSearchCommandCount,
                mcpToolCallCount: n.mcpToolCallCount,
                mcpToolCallSources: [...n.mcpToolCallSources.values()],
                webSearchCount: n.webSearchCount,
                runningWebSearchCount: n.runningWebSearchCount
            }
        }

        function I(e, t) {
            for (let n of t ?? []) S(e, n)
        }

        function S(e, t) {
            if (!e.automaticApprovalReviewFailureIds.has(t.id)) switch (e.automaticApprovalReviewFailureIds.add(t.id), t.status) {
                case "denied":
                    e.deniedRequestCount += 1;
                    return;
                case "timedOut":
                    e.timedOutRequestCount += 1;
                    return
            }
        }

        function P(e) {
            let {
                mcpServerStatuses: t,
                resolvedApps: n = [],
                modelProvider: i,
                isTurnCancelled: s = !1
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, f = e.map(e => {
                let {
                    item: t
                } = e;
                return t
            }), {
                renderableAgentItems: k
            } = (0, b.a)({
                agentItems: f,
                isTurnInProgress: !1,
                isAnyNonAgentItemInProgress: !1
            }), I = {
                mcpServerStatuses: t,
                resolvedApps: n,
                modelProvider: i,
                isTurnCancelled: s
            }, S = k.map(e => ({
                unit: "exploration" === e.kind ? (0, u.a)(e) : (0, u.b)(e.item, I),
                hasCodexLabel: "exploration" !== e.kind && "mcp-tool-call" === e.item.type && null != (0, d.d)(e.item, n)
            })), P = A(S.map(e => {
                let {
                    unit: t
                } = e;
                return t
            })), z = S.some(e => {
                let {
                    hasCodexLabel: t
                } = e;
                return t
            }) ? A(S.filter(e => {
                let {
                    hasCodexLabel: t
                } = e;
                return !t
            }).map(e => {
                let {
                    unit: t
                } = e;
                return t
            })) : P;
            return {
                toolActivity: P,
                completedHeader: function(e) {
                    var t, n, i;
                    let s, u, f, b, {
                            items: k,
                            toolActivity: A,
                            resolvedApps: I
                        } = e,
                        S = (0, l.c)(k),
                        P = null != S ? [{
                            kind: "web-search",
                            title: S
                        }] : (t = A, n = function(e) {
                            let {
                                items: t,
                                sources: n,
                                resolvedApps: a
                            } = e, i = new Set;
                            for (let {
                                    item: e
                                }
                                of t) {
                                if ("external-event" === e.type) {
                                    let t = (0, o.a)(e, a);
                                    v(t) && i.add(t.key);
                                    continue
                                }
                                if ("mcp-tool-call" !== e.type) continue;
                                let t = y(e, a);
                                !(null == t || (0, m.f)(t.key)) && g(e, a) && i.add(t.key)
                            }
                            let r = n.filter(e => !(0, m.f)(e.key));
                            return [...r.filter(e => i.has(e.key)), ...r.filter(e => !i.has(e.key))]
                        }({
                            items: k,
                            sources: A.mcpToolCallSources,
                            resolvedApps: I
                        }), i = function(e, t) {
                            let n = [],
                                a = new Set;
                            for (let {
                                    item: i
                                }
                                of e) {
                                if ("mcp-tool-call" === i.type) {
                                    let e = (0, d.d)(i, t);
                                    null == e || a.has(e.key) || (a.add(e.key), n.push({
                                        kind: "codex-tool-call",
                                        item: i,
                                        presentation: e
                                    }));
                                    continue
                                }
                                if ("dynamic-tool-call" !== i.type) continue;
                                let e = (0, p.b)(i);
                                a.has(e) || (a.add(e), n.push({
                                    kind: "dynamic-tool-call",
                                    item: i,
                                    key: e
                                }))
                            }
                            return n
                        }(k, I), s = [], n.length > 0 && s.push({
                            kind: "mcp-sources",
                            sources: n
                        }), h(s, {
                            kind: "loaded-tools",
                            count: t.loadedToolCount
                        }), u = t.mcpToolCallSources.reduce((e, t) => e + t.count, 0), h(s, {
                            kind: "unnamed-mcp-calls",
                            count: t.mcpToolCallCount - u
                        }), h(s, {
                            kind: "file-changes",
                            count: t.createdFileCount + t.editedFileCount + t.deletedFileCount - t.stoppedCreatedFileCount
                        }), h(s, {
                            kind: "stopped-file-creation",
                            count: t.stoppedCreatedFileCount
                        }), (t.exploredFileCount > 0 || t.searchCount > 0 || t.listCount > 0) && s.push({
                            kind: "exploration"
                        }), null != t.visualizationActivity && s.push({
                            kind: "visualization",
                            activity: t.visualizationActivity
                        }), f = t.mcpToolCallSources.reduce((e, t) => e + ((0, m.f)(t.key) ? t.count : 0), 0), b = t.completedWebSearchCommandCount + t.runningWebSearchCommandCount, h(s, {
                            kind: "commands",
                            count: t.commandCount + f - b
                        }), (t.webSearchCount > 0 || b > 0) && s.push({
                            kind: "web-search"
                        }), s.push(...i), s);
                    return {
                        summaryParts: P,
                        iconItem: function(e) {
                            let {
                                firstPart: t,
                                items: n,
                                resolvedApps: i
                            } = e;
                            if (null == t) return null;
                            switch (t.kind) {
                                case "mcp-sources": {
                                    let e = t.sources[0]?.key;
                                    if (null == e) return null;
                                    return n.find(t => {
                                        let {
                                            item: n
                                        } = t;
                                        return "mcp-tool-call" === n.type && y(n, i)?.key === e && g(n, i)
                                    }) ?? n.find(t => {
                                        let {
                                            item: n
                                        } = t;
                                        return "mcp-tool-call" === n.type && y(n, i)?.key === e && n.source?.kind === "browserUse" && n.result?.type === "success" && null != (0, r.a)(n.result.raw._meta)
                                    }) ?? n.find(t => {
                                        let {
                                            item: n
                                        } = t;
                                        return "mcp-tool-call" === n.type && y(n, i)?.key === e
                                    }) ?? n.find(t => {
                                        let {
                                            item: n
                                        } = t;
                                        return "external-event" === n.type && (0, o.a)(n, i).key === e
                                    }) ?? null
                                }
                                case "unnamed-mcp-calls":
                                    return n.find(e => {
                                        let {
                                            item: t
                                        } = e;
                                        return "mcp-tool-call" === t.type && !(0, a.wi)(t.invocation.server) && null == y(t, i)
                                    }) ?? null;
                                case "loaded-tools":
                                    return n.find(e => {
                                        let {
                                            item: t
                                        } = e;
                                        return x(t)
                                    }) ?? null;
                                case "file-changes":
                                case "stopped-file-creation":
                                    return n.find(e => {
                                        let {
                                            item: t
                                        } = e;
                                        return "patch" === t.type
                                    }) ?? null;
                                case "exploration":
                                    return n.find(e => {
                                        let {
                                            item: t
                                        } = e;
                                        return "exec" === t.type && (0, c.a)(t) && !x(t)
                                    }) ?? null;
                                case "visualization":
                                    return n.find(e => {
                                        let {
                                            item: t
                                        } = e;
                                        return C(t)
                                    }) ?? null;
                                case "commands":
                                    return n.find(e => {
                                        var t;
                                        let {
                                            item: n
                                        } = e;
                                        return "mcp-tool-call" === (t = n).type ? (0, a.wi)(t.invocation.server) : "exec" === t.type && !(0, c.a)(t) && !C(t) && !w(t)
                                    }) ?? null;
                                case "web-search":
                                    return n.find(e => {
                                        let {
                                            item: t
                                        } = e;
                                        return w(t)
                                    }) ?? null;
                                case "codex-tool-call":
                                case "dynamic-tool-call":
                                    return n.find(e => {
                                        let {
                                            item: n
                                        } = e;
                                        return n === t.item
                                    }) ?? null
                            }
                        }({
                            firstPart: P[0],
                            items: k,
                            resolvedApps: I
                        })
                    }
                }({
                    items: e,
                    toolActivity: z,
                    resolvedApps: n
                })
            }
        }
    }),
    I3PO: (function(e, t, n) {
        var a = n("KJ1J"),
            i = n("LdAY"),
            r = n("udV3"),
            o = n("hNWF"),
            s = n("MJjm"),
            l = n("NQNw"),
            u = n("eCUJ"),
            c = n("acxW");

        function d(e) {
            let {
                includeGeneratedImages: t = !1,
                mcpServerStatuses: n,
                groupStartItems: a,
                activityPhasesEnabled: i = !1
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = e.flatMap((e, i) => {
                if ((0, l.b)(e)) return [];
                let r = (0, l.a)(e, {
                    includeGeneratedImages: t,
                    mcpServerStatuses: n
                });
                return null == r ? [] : [{
                    activityItem: r,
                    sourceIndex: i,
                    startsGroup: a?.has(e) === !0
                }]
            }), s = 1 === o.length ? o[0].activityItem.item : null;
            return s?.type === "worked-for" && "worked" === s.status ? [] : (0, r.e)(o, i)
        }

        function p(e, t, n) {
            let a = e.items[0];
            return n || null != e.phase || "summary" !== t.kind || 1 !== e.items.length || f(a) || "patch" === a.item.type && (1 !== Object.keys(a.item.changes).length || (a.item.visualizationActivities?.length ?? 0) > 0) ? {
                ...e,
                headerState: t
            } : {
                kind: "standalone",
                key: e.key,
                item: a
            }
        }

        function m(e) {
            let {
                unit: t,
                ownsLiveHeader: n,
                message: a,
                preferMessage: i,
                showThinkingBetweenTools: r = !0,
                isTurnInProgress: s,
                isActivitySliceClosed: l,
                isExploring: u
            } = e;
            if (!(n && s && !l)) return {
                kind: "summary"
            };
            if (i && null != a) return a;
            let c = a ?? {
                    kind: "between-tools"
                },
                d = t.items.findLast(e => g(e));
            if (null != d) {
                let e = d.item.type;
                return "automatic-approval-review" !== e && ("exec" === e || "patch" === e || "mcp-tool-call" === e || "dynamic-tool-call" === e || "web-search" === e) ? {
                    kind: "active",
                    item: d
                } : c
            }
            if (u) {
                let e = t.items.findLast(e => {
                    let {
                        item: t
                    } = e;
                    return "exec" === t.type && (0, o.a)(t)
                });
                if (null != e) return {
                    kind: "active",
                    item: e
                }
            }
            return null != t.phase || r ? c : {
                kind: "summary"
            }
        }

        function f(e) {
            return ("exec" !== e.item.type || "interrupted" !== e.item.executionStatus) && (0, u.a)(e.item)
        }

        function h(e) {
            return e.findLast(e => "group" === e.kind ? e.items.some(e => g(e)) : g(e.item))
        }

        function g(e) {
            return "automatic-approval-review" !== e.item.type && ("assistant-message" !== e.item.type || (0, s.c)(e.item)) && f(e)
        }
        n.d(t, {
            a: () => m,
            b: () => r.b,
            c: () => d,
            d: () => h,
            e: () => p,
            f: () => r.d
        }, {
            g: function(e, t) {
                let n = [],
                    r = null;
                for (let o of e) {
                    let {
                        item: e
                    } = o, s = null;
                    if ("groupable" === o.grouping && "external-event" === e.type) s = (0, i.b)(e);
                    else if ("groupable" === o.grouping && "mcp-tool-call" === e.type && e.completed && null == e.source && "computer-use" !== e.invocation.server && e.result?.type === "success" && !e.automaticApprovalReviews?.length && !(0, c.a)({
                            isCodexAppsServer: (0, a.f)(e.invocation.server),
                            result: e.result
                        })) {
                        let n = t(e);
                        null != n && (s = JSON.stringify([e.invocation.server, e.invocation.tool, e.functionName, e.pluginId, e.appContext?.connectorId, e.appContext?.linkId, e.invocationResourceUri, n]))
                    }
                    let l = n.at(-1);
                    null != s && s === r && null != l ? l.push(o) : n.push([o]), r = s
                }
                return n
            },
            h: function(e) {
                let {
                    item: t
                } = e;
                return "exec" === t.type ? "interrupted" === t.executionStatus || "declined" === t.executionStatus || "failed" === t.executionStatus || t.output?.exitCode != null && 0 !== t.output.exitCode : "patch" === t.type ? !1 === t.success || "declined" === t.status || "failed" === t.status : "mcp-tool-call" === t.type ? (0, c.a)({
                    isCodexAppsServer: (0, a.f)(t.invocation.server),
                    result: t.result
                }) : "dynamic-tool-call" === t.type && !1 === t.success
            },
            i: function(e, t) {
                let n = e.findLastIndex(e => "standalone" !== e.kind || "assistant-message" !== e.item.item.type || (0, s.c)(e.item.item));
                return e.filter((e, a) => "group" !== e.kind || t && a === n || e.items.some(f))
            },
            j: f,
            k: function(e, t) {
                let n = new Set;
                if (null == t || 0 === t.size) return {
                    activityUnits: e,
                    visibleTranscriptItems: n
                };

                function a(e) {
                    let {
                        item: a
                    } = e;
                    return !t?.has(a) || (n.add(a), !1)
                }
                return {
                    activityUnits: e.flatMap(e => {
                        if ("standalone" === e.kind) return a(e.item) ? [e] : [];
                        let t = e.items.filter(a);
                        if (t.length === e.items.length) return [e];
                        let [n, ...i] = t;
                        return null == n ? [] : [{
                            ...e,
                            items: [n, ...i]
                        }]
                    }),
                    visibleTranscriptItems: n
                }
            }
        })
    }),
    RSI4: (function(e, t, n) {
        var a = n("LdAY"),
            i = n("wS4d"),
            r = n("bnxy"),
            o = n("qYBv"),
            s = n("LF5P"),
            l = n("ivPw"),
            u = n("Z2lA");
        let c = /(?:^|\s)(?:-X\s*|--request(?:=|\s+))(?:POST|PUT|PATCH|DELETE)\b/i,
            d = /(?:^|\s)(?:--data(?:-[^\s=]+)?|--json|--form|--upload-file)(?:=|\s|$)/,
            p = /(?:^|\s)-(?:d|F|T)(?:=|\s|$)/;

        function m(e) {
            if (!/^\s*curl(?:\s|$)/.test(e) || c.test(e) || d.test(e) || p.test(e)) return !1;
            let t = e.match(/\bhttps?:\/\/[^\s'"<>]+/gi);
            return null != t && t.some(f)
        }

        function f(e) {
            try {
                let t = new URL(e).hostname.toLowerCase();
                return "localhost" !== t && !t.startsWith("127.")
            } catch {
                return !1
            }
        }

        function h(e) {
            let t = [];
            for (let n of e ?? []) switch (n.status) {
                case "denied":
                case "timedOut":
                    t.push({
                        id: n.id,
                        status: n.status
                    })
            }
            return 0 === t.length ? {} : {
                automaticApprovalReviewFailures: t
            }
        }
        n.d(t, {}, {
            a: function(e) {
                let t = [],
                    n = [],
                    a = [],
                    i = [],
                    o = [],
                    s = 0,
                    c = 0,
                    d = 0,
                    p = 0;
                for (let m of e.items)
                    if ("exec" === m.type) {
                        if (t.push(...m.automaticApprovalReviews ?? []), "search" === m.parsedCmd.type) {
                            s += 1, m.parsedCmd.isFinished || (c += 1);
                            continue
                        }
                        if ("list_files" === m.parsedCmd.type) {
                            d += 1, m.parsedCmd.isFinished || (p += 1);
                            continue
                        }
                        if ("read" === m.parsedCmd.type) {
                            let e = function(e, t) {
                                let n = (0, l.a)(e);
                                return null == t ? n : (0, l.a)((0, r.s)(t, n))
                            }(m.parsedCmd.path ?? m.parsedCmd.name, m.cwd);
                            if ((0, u.b)({
                                    summary: m.parsedCmd,
                                    cwd: m.cwd
                                })) {
                                i.push(e), m.parsedCmd.isFinished || o.push(e);
                                continue
                            }
                            n.push(e), m.parsedCmd.isFinished || a.push(e)
                        }
                    } return {
                    type: "exploration",
                    readPaths: n,
                    runningReadPaths: a,
                    loadedToolPaths: i,
                    runningLoadedToolPaths: o,
                    searchCount: s,
                    runningSearchCount: c,
                    listCount: d,
                    runningListCount: p,
                    ...h(t)
                }
            },
            b: function(e) {
                let {
                    mcpServerStatuses: t,
                    resolvedApps: n = [],
                    shouldKeepMcpAppToolCallsExpandedByDefault: r,
                    isTurnCancelled: c = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ("external-event" === e.type) return {
                    type: "mcp-tool-call",
                    isInProgress: !1,
                    source: (0, a.a)(e, n)
                };
                if ("patch" === e.type) return {
                    ... function(e, t) {
                        if (0 === Object.keys(e.changes).length && null != e.visualizationActivities && (!1 === e.success || null == e.success && t)) return {
                            type: "other"
                        };
                        let n = [],
                            a = [],
                            i = [],
                            r = [],
                            o = [],
                            s = [],
                            u = [];
                        for (let [l, c] of Object.entries(e.changes)) {
                            if ("add" === c.type) {
                                n.push(l), null == e.success && t ? i.push(l) : null == e.success && a.push(l);
                                continue
                            }
                            if ("delete" === c.type) {
                                s.push(l), null == e.success && u.push(l);
                                continue
                            }
                            r.push(l), null == e.success && o.push(l)
                        }
                        return {
                            type: "patch",
                            createdPaths: n,
                            runningCreatedPaths: a,
                            stoppedCreatedPaths: i,
                            editedPaths: r,
                            runningEditedPaths: o,
                            deletedPaths: s,
                            runningDeletedPaths: u,
                            visualizationActivity: null == e.visualizationActivities || !1 === e.success || null == e.success && t ? void 0 : {
                                activities: e.visualizationActivities.map(e => {
                                    let {
                                        path: t,
                                        kind: n
                                    } = e;
                                    return {
                                        path: (0, l.a)(t),
                                        kind: n
                                    }
                                }),
                                isInProgress: null == e.success
                            }
                        }
                    }(e, c),
                    ...h(e.automaticApprovalReviews)
                };
                if ("exec" === e.type) {
                    if ("read" === e.parsedCmd.type && !e.parsedCmd.isFinished && (0, u.b)({
                            summary: e.parsedCmd,
                            cwd: e.cwd
                        })) return {
                        type: "other"
                    };
                    let t = !e.parsedCmd.isFinished,
                        n = "unknown" === e.parsedCmd.type ? e.parsedCmd.cmd : null,
                        a = null != n && /^\s*mkdir(?:\s|$)/.test(n),
                        i = null != n && m(n),
                        r = h(e.automaticApprovalReviews);
                    return a ? {
                        type: "exec",
                        isInProgress: t,
                        createsFolder: !0,
                        ...r
                    } : i && (t || e.output?.exitCode === 0) ? {
                        type: "exec",
                        isInProgress: t,
                        searchesWeb: !0,
                        ...r
                    } : {
                        type: "exec",
                        isInProgress: t,
                        ...r
                    }
                }
                if ("mcp-tool-call" === e.type) return (0, o.b)({
                    item: e,
                    mcpServerStatuses: t
                }) || !0 === r && (0, o.c)({
                    item: e,
                    mcpServerStatuses: t
                }) ? {
                    type: "other"
                } : {
                    type: "mcp-tool-call",
                    isInProgress: !e.completed,
                    source: (0, s.c)({
                        appContext: e.appContext,
                        functionName: e.functionName,
                        invocation: e.invocation,
                        resolvedApps: n,
                        source: e.source
                    }),
                    ...h(e.automaticApprovalReviews)
                };
                if ("automatic-approval-review" === e.type) switch (e.status) {
                    case "denied":
                    case "timedOut":
                        return {
                            type: "automatic-approval-review", id: e.id, status: e.status
                        };
                    case "aborted":
                    case "approved":
                    case "inProgress":
                        return {
                            type: "other"
                        }
                }
                return "web-search" === e.type ? {
                    type: "web-search",
                    count: 1,
                    runningCount: +!e.completed
                } : "reasoning" === e.type || "browser-card" === e.type || "todo-list" === e.type || "worked-for" === e.type || "multi-agent-action" === e.type || "proposed-plan" === e.type || "realtime-transcript" === e.type || "user-message" === e.type || "userInput" === e.type || "user-input-response" === e.type || "mcp-server-elicitation" === e.type || "permission-request" === e.type || "turn-diff" === e.type || "plan-implementation" === e.type || "system-error" === e.type || "steered" === e.type || "stream-error" === e.type || "subagent-activity" === e.type || "remote-task-created" === e.type || "context-compaction" === e.type || "personality-changed" === e.type || "forked-from-conversation" === e.type || "model-changed" === e.type || "model-rerouted" === e.type || "auto-review-interruption-warning" === e.type || "strict-review-notice" === e.type || "assistant-message" === e.type || "dil-reasoning" === e.type || "generated-image" === e.type || "image-view" === e.type || "automation-update" === e.type || "dynamic-tool-call" === e.type || "worktree-init" === e.type ? {
                    type: "other"
                } : (0, i.a)(e)
            },
            c: m
        })
    }),
    hNWF: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e) {
                switch (e.parsedCmd.type) {
                    case "read":
                    case "search":
                    case "list_files":
                        return !0;
                    case "format":
                    case "lint":
                    case "noop":
                    case "test":
                    case "unknown":
                        return !1
                }
            }
        })
    }),
    N3ow: (function(e, t, n) {
        var a = n("lsky"),
            i = n("XpUB");
        let r = "codex-followup";
        n.d(t, {}, {
            a: r,
            b: function(e) {
                if (!e.includes(`:${r}[`)) return e;
                let t = "",
                    n = 0,
                    o = 0,
                    s = new WeakSet;
                return (0, a.h)((0, i.a)(e, void 0), i => {
                    if (s.has(i)) return;
                    if ("code" === i.type || "codespan" === i.type) {
                        let t = e.indexOf(i.raw, o); - 1 !== t && (o = t + i.raw.length);
                        return
                    }
                    if ("codexDirective" !== i.type || !("name" in i) || i.name !== r || !("text" in i) || "string" != typeof i.text) return;
                    let l = e.indexOf(i.raw, o); - 1 !== l && (t += e.slice(n, l) + i.text, o = n = l + i.raw.length, "tokens" in i && Array.isArray(i.tokens) && (0, a.h)(i.tokens, e => {
                        s.add(e)
                    }))
                }), t + e.slice(n)
            }
        })
    }),
    NQNw: (function(e, t, n) {
        var a = n("K0rn"),
            i = n("XSLO"),
            r = n("Sgcz"),
            o = n("qYBv"),
            s = n("t7eZ"),
            l = n("Z2lA"),
            u = n("acby");

        function c(e, t) {
            return {
                item: e,
                grouping: t
            }
        }

        function d(e) {
            let t = e.automaticApprovalReviews;
            if (null == t) return e;
            let n = t.filter(e => "approved" !== e.status);
            if (n.length > 0 && n.length === t.length) return e;
            let {
                automaticApprovalReviews: a,
                ...i
            } = e;
            return 0 === n.length ? i : {
                ...i,
                automaticApprovalReviews: n
            }
        }
        n.d(t, {}, {
            a: function(e) {
                let {
                    dynamicToolCallRenderer: t,
                    includeGeneratedImages: n = !1,
                    mcpServerStatuses: i
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                switch (e.type) {
                    case "external-event":
                        return c(e, "groupable");
                    case "exec":
                    case "patch":
                        return c(d(e), (0, r.d)(e) ? "standalone" : "groupable");
                    case "mcp-tool-call":
                        return c(d(e), (0, s.a)(e) || (0, o.b)({
                            item: e,
                            mcpServerStatuses: i
                        }) ? "standalone" : "groupable");
                    case "web-search":
                        return 0 === e.query.trim().length ? null : c(e, "groupable");
                    case "dynamic-tool-call": {
                        let n = t ?? (0, u.c)(e);
                        if (n?.hiddenInConversation === !0) return null;
                        return c(e, n?.standaloneInConversation === !0 ? "standalone" : "groupable")
                    }
                    case "generated-image":
                        return n ? c(e, "standalone") : null;
                    case "image-view":
                    case "multi-agent-action":
                    case "subagent-activity":
                        return c(e, "standalone");
                    case "mcp-server-elicitation":
                        if (!e.completed || "unsupportedOpenAIForm" === e.elicitation.kind) return null;
                        return c(e, "legacyOpenAIForm" === e.elicitation.kind && Object.values(e.elicitation.schema.properties).some(a.b) ? "groupable" : "standalone");
                    case "automatic-approval-review":
                        switch (e.status) {
                            case "approved":
                                return null;
                            case "inProgress":
                                return c(e, "groupable");
                            case "aborted":
                            case "denied":
                            case "timedOut":
                                return c(e, "standalone")
                        }
                    case "dil-reasoning":
                    case "assistant-message":
                    case "auto-review-interruption-warning":
                    case "context-compaction":
                    case "realtime-transcript":
                    case "stream-error":
                    case "strict-review-notice":
                    case "system-error":
                    case "user-input-response":
                    case "user-message":
                    case "browser-card":
                    case "worked-for":
                    case "worktree-init":
                        return c(e, "standalone");
                    case "reasoning":
                    case "automation-update":
                    case "forked-from-conversation":
                    case "model-changed":
                    case "model-rerouted":
                    case "permission-request":
                    case "personality-changed":
                    case "plan-implementation":
                    case "proposed-plan":
                    case "remote-task-created":
                    case "todo-list":
                    case "turn-diff":
                    case "userInput":
                    case "steered":
                        return null
                }
            },
            b: function(e) {
                return "exec" === e.type && "read" === e.parsedCmd.type && (0, i.c)((0, l.a)({
                    summary: e.parsedCmd,
                    cwd: e.cwd
                }))
            }
        })
    }),
    acby: (function(e, t, n) {
        n.d(t, {
            a: () => es,
            b: () => ec,
            c: () => eo,
            d: () => el,
            e: () => eu
        });
        var a = n("fceG"),
            i = n("ABep"),
            r = n("on57"),
            o = n("JGl5"),
            s = n("PFi3"),
            l = n("oyxz"),
            u = n("dqpP"),
            c = n("HOLv"),
            d = n("Bbed"),
            p = n("wbOy"),
            m = n("qf3G");
        let f = (0, d.a)(() => Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(275420)]).then(n.bind(n, "yCum")).then(e => e.EnvironmentSetupPrototypeResultCard)),
            h = [o.a, null].map(e => ({
                namespace: e,
                render: g,
                renderAgentActivityIcon: () => (0, i.jsx)(c.a, {
                    className: "shrink-0 text-text/60",
                    "aria-hidden": !1,
                    asset: m.a
                }),
                standaloneInConversation: !0,
                tool: s.b
            }));

        function g(e, t, n) {
            let a, o = s.f.safeParse(e.arguments);
            return o.success ? "row" === t && e.completed && !1 !== e.success ? (0, i.jsx)(f, {
                details: o.data
            }) : (a = e.completed ? !1 === e.success ? (0, i.jsx)(l.a, {
                id: "restricted.environmentSetup.result.failed",
                defaultMessage: "Couldn’t prepare environment draft"
            }) : (0, i.jsx)(l.a, {
                id: "restricted.environmentSetup.result.completed",
                defaultMessage: "Prepared environment draft"
            }) : (0, i.jsx)(l.a, {
                id: "restricted.environmentSetup.result.finalizing",
                defaultMessage: "Preparing environment draft"
            }), (0, i.jsxs)(u.a, {
                className: (0, r.b)("text-size-chat text-text/40", "row" === t ? "group-hover:text-default" : "group-hover/activity-header:text-default"),
                children: ["summary-text" !== t ? n ?? (0, i.jsx)(c.a, {
                    className: "shrink-0 text-text/60",
                    "aria-hidden": !1,
                    asset: m.a
                }) : null, (0, i.jsx)(p.a, {
                    active: !e.completed,
                    children: a
                })]
            })) : null
        }
        var v = n("UKCO"),
            y = n("bVzl"),
            C = n("MCYz"),
            x = n("lAQI"),
            w = n("TL6G"),
            b = n("MFk9"),
            k = n("DYB3"),
            A = n("IIsu"),
            I = n("xLft");
        let S = x.F({
                destinationHostId: x.L().min(1).optional(),
                threadId: x.L().min(1)
            }),
            P = x.F({
                operationId: x.L().min(1)
            }),
            z = x.F({
                threadId: x.L().min(1)
            }),
            L = [{
                namespace: o.a,
                render: j,
                renderAgentActivityIcon: T,
                tool: C.h
            }, {
                namespace: o.a,
                render: j,
                renderAgentActivityIcon: T,
                tool: C.d
            }, {
                getCompletedSummaryPartKey: function(e) {
                    let t = S.safeParse(e.arguments);
                    return t.success ? JSON.stringify([t.data.threadId, t.data.destinationHostId ?? null]) : null
                },
                namespace: o.a,
                render: function(e, t, n) {
                    return S.safeParse(e.arguments).success ? (0, i.jsx)(I.a, {
                        agentActivityIcon: n,
                        item: e,
                        variant: t
                    }) : null
                },
                renderAgentActivityIcon: T,
                standaloneInConversation: !0,
                tool: y.c
            }, {
                getCompletedSummaryPartKey: function(e) {
                    let t = P.safeParse(e.arguments);
                    return t.success ? t.data.operationId : null
                },
                namespace: o.a,
                render: j,
                renderAgentActivityIcon: T,
                summaryOnlyInConversationGroup: !0,
                tool: y.b
            }, {
                continuesLiveActivityBetweenCalls: !0,
                namespace: o.a,
                render: j,
                renderAgentActivityIcon: T,
                tool: C.p
            }, {
                continuesLiveActivityBetweenCalls: !0,
                namespace: o.a,
                render: j,
                renderAgentActivityIcon: T,
                tool: C.r
            }, {
                namespace: o.a,
                render: j,
                renderAgentActivityIcon: T,
                tool: C.t
            }, {
                namespace: o.a,
                render: j,
                renderAgentActivityIcon: T,
                tool: C.x
            }, {
                namespace: o.a,
                render: j,
                renderAgentActivityIcon: T,
                tool: C.v
            }, {
                namespace: o.a,
                render: j,
                renderAgentActivityIcon: T,
                tool: C.B
            }];

        function T(e) {
            return (0, k.c)(e)?.icon ?? null
        }

        function j(e, t, n) {
            var a;
            let o, s, c = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                d = (0, k.c)(e, c);
            if (null == d) return null;
            let m = e.tool === C.d && e.completed && !0 === e.success && "row" === t ? (a = e.contentItems ?? null, null == (o = a?.find(e => "inputText" === e.type)?.text) ? null : (0, v.Lj)(o)) : null,
                f = "row" === t && (e.tool === C.r || e.tool === C.t) ? z.safeParse(e.arguments) : null,
                h = f?.success === !0 ? f.data.threadId : null;
            null != m ? s = e => (0, A.a)(e, m) : null != h && (s = () => {
                let e = (0, v.Xe)(h);
                w.c.dispatchHostMessage({
                    type: "navigate-to-route",
                    path: (0, v.he)(e)
                })
            });
            let g = "row" === t && void 0 !== n,
                y = g ? "summary-text" : t,
                x = (0, i.jsxs)(u.a, {
                    className: (0, r.b)("text-size-chat", "row" === y ? "text-text-tertiary/90" : "text-text/40 group-hover/activity-header:text-default"),
                    children: ["summary-text" !== y ? T(e) : null, (0, i.jsx)(p.a, {
                        active: !e.completed,
                        className: (0, r.b)("summary-text" !== y && "min-w-0 truncate", null != s && "group-hover:!text-default"),
                        children: (0, i.jsx)(l.a, {
                            ...d.message,
                            values: d.values
                        })
                    })]
                }),
                I = null == s ? x : (0, i.jsx)("button", {
                    type: "button",
                    className: "group max-w-full cursor-interaction rounded-md text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                    onClick: s,
                    children: x
                });
            return g ? (0, i.jsx)(b.a, {
                icon: n,
                summary: I
            }) : I
        }
        let F = L.filter(e => {
            let {
                tool: t
            } = e;
            return "create_thread" === t
        }).map(e => ({
            ...e,
            namespace: null
        }));
        var M = n("tmkO");
        let _ = [o.a, null].map(e => ({
            namespace: e,
            tool: M.a,
            hiddenInConversation: !0
        }));
        var N = n("ScoF"),
            U = n("Y3sT"),
            O = n("uWou"),
            W = n("JEy9");
        let R = {
                namespace: o.a,
                tool: U.b,
                getActivityMessage: (e, t) => (0, O.a)({
                    tool: e.tool,
                    toolArguments: e.arguments,
                    completed: e.completed,
                    isLeadingSummaryPart: t
                }),
                renderAgentActivityIcon: (e, t) => (0, W.b)(e.tool, e.arguments, t),
                getCompletedSummaryPartKey: e => (0, O.a)({
                    tool: e.tool,
                    toolArguments: e.arguments,
                    completed: !0
                })?.id ?? null
            },
            B = [R, {
                ...R,
                tool: N.b
            }, {
                ...R,
                tool: "read_artifact"
            }];
        var q = n("Tbby"),
            E = n("QosV"),
            H = n("T0Rc"),
            K = n("Qgfj"),
            J = n("C2tN"),
            $ = n("d9Qn");

        function D(e) {
            let t, n, a, o, s, c, d = (0, E.c)(25),
                {
                    item: m,
                    isLeadingSummaryPart: f,
                    tabId: h,
                    variant: g,
                    agentActivityIcon: v
                } = e,
                y = void 0 === f || f,
                {
                    data: C
                } = G(m, h),
                x = C?.faviconUrl ?? null,
                w = C?.title ?? null;
            if (null != w) {
                let e;
                d[0] !== y || d[1] !== m.completed || d[2] !== w ? (e = m.completed ? (0, i.jsx)(l.a, {
                    ...y ? Y.completedWithTitle : Y.completedWithTitleFollowing,
                    values: {
                        title: w
                    }
                }) : (0, i.jsx)(l.a, {
                    ...Y.activeWithTitle,
                    values: {
                        title: w
                    }
                }), d[0] = y, d[1] = m.completed, d[2] = w, d[3] = e) : e = d[3], t = e
            } else {
                let e;
                d[4] !== y || d[5] !== m.completed ? (e = m.completed ? (0, i.jsx)(l.a, {
                    ...y ? Y.completed : Y.completedFollowing
                }) : (0, i.jsx)(l.a, {
                    ...Y.active
                }), d[4] = y, d[5] = m.completed, d[6] = e) : e = d[6], t = e
            }
            let k = !m.completed,
                A = "summary-text" !== g && "min-w-0 truncate";
            d[7] !== A ? (n = (0, r.b)(A), d[7] = A, d[8] = n) : n = d[8], d[9] !== t || d[10] !== k || d[11] !== n ? (a = (0, i.jsx)(p.a, {
                active: k,
                className: n,
                children: t
            }), d[9] = t, d[10] = k, d[11] = n, d[12] = a) : a = d[12];
            let I = a;
            if ("row" === g && void 0 !== v) {
                let e;
                return d[13] !== v || d[14] !== I ? (e = (0, i.jsx)(b.a, {
                    icon: v,
                    summary: I
                }), d[13] = v, d[14] = I, d[15] = e) : e = d[15], e
            }
            let S = "row" === g ? "text-text-tertiary/90" : "text-text/40 group-hover/activity-header:text-default";
            return d[16] !== S ? (o = (0, r.b)("text-size-chat", S), d[16] = S, d[17] = o) : o = d[17], d[18] !== x || d[19] !== g ? (s = "summary-text" !== g && null != x ? (0, i.jsx)($.a, {
                src: x,
                className: "icon-xs text-tertiary",
                showFallbackWhileLoading: !1
            }) : null, d[18] = x, d[19] = g, d[20] = s) : s = d[20], d[21] !== I || d[22] !== o || d[23] !== s ? (c = (0, i.jsxs)(u.a, {
                className: o,
                children: [s, I]
            }), d[21] = I, d[22] = o, d[23] = s, d[24] = c) : c = d[24], c
        }

        function Q(e) {
            let t, n = (0, E.c)(2),
                {
                    item: a,
                    tabId: r
                } = e,
                {
                    data: o
                } = G(a, r);
            return n[0] !== o ? (t = o?.faviconUrl == null ? null : (0, i.jsx)($.a, {
                src: o.faviconUrl,
                className: "icon-xs text-tertiary",
                showFallbackWhileLoading: !1
            }), n[0] = o, n[1] = t) : t = n[1], t
        }

        function G(e, t) {
            let n, a, i, r = (0, E.c)(9),
                o = !e.completed;
            return r[0] !== t ? (n = () => (async function(e) {
                let t = (0, J.a)();
                if (t?.tabs == null) return null;
                try {
                    let n = await t.tabs.get(e);
                    return {
                        faviconUrl: function(e, t) {
                            let n = e.favIconUrl?.trim();
                            if (null == n || 0 === n.length) return null;
                            let a = (e.url ?? e.pendingUrl ?? "").trim();
                            if (0 === a.length || null == t) return n;
                            try {
                                let e = new URL(t.getURL("/_favicon/"));
                                return e.searchParams.set("pageUrl", a), e.searchParams.set("size", "32"), e.toString()
                            } catch {
                                return n
                            }
                        }(n, t.runtime),
                        title: n.title?.trim() || null
                    }
                } catch {
                    return null
                }
            })(t), r[0] = t, r[1] = n) : n = r[1], r[2] !== e.callId || r[3] !== t ? (a = ["chrome-tab-context-tool-call-metadata", e.callId, t], r[2] = e.callId, r[3] = t, r[4] = a) : a = r[4], r[5] !== o || r[6] !== n || r[7] !== a ? (i = {
                enabled: o,
                queryFn: n,
                queryKey: a,
                staleTime: 1 / 0
            }, r[5] = o, r[6] = n, r[7] = a, r[8] = i) : i = r[8], (0, H.a)(i)
        }
        let Y = (0, K.f)({
                completedWithTitle: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.completedWithTitle",
                    defaultMessage: 'Read "{title}"'
                },
                completedWithTitleFollowing: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.completedWithTitle.following",
                    defaultMessage: 'read "{title}"'
                },
                activeWithTitle: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.activeWithTitle",
                    defaultMessage: 'Reading "{title}"'
                },
                completed: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.completed",
                    defaultMessage: "Read tab"
                },
                completedFollowing: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.completed.following",
                    defaultMessage: "read tab"
                },
                active: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.active",
                    defaultMessage: "Reading tab"
                }
            }),
            Z = x.K({
                tabId: x.E().int().nonnegative()
            }),
            V = [{
                getCompletedSummaryPartKey: function(e) {
                    return Z.safeParse(e.arguments).success ? e.callId : null
                },
                namespace: "chrome_extension",
                render: function(e, t, n) {
                    let a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        r = Z.safeParse(e.arguments);
                    return r.success ? (0, i.jsx)(D, {
                        item: e,
                        isLeadingSummaryPart: a,
                        tabId: r.data.tabId,
                        variant: t,
                        agentActivityIcon: n
                    }) : null
                },
                renderAgentActivityIcon: function(e) {
                    let t = Z.safeParse(e.arguments);
                    return t.success ? (0, i.jsx)(Q, {
                        item: e,
                        tabId: t.data.tabId
                    }) : null
                },
                tool: q.b
            }];
        var X = n("YZPM"),
            ee = n("WPMf");
        let et = x.F({
                config: x.F({})
            }),
            en = [{
                namespace: o.a,
                render: ei,
                renderAgentActivityIcon: ea,
                tool: X.b
            }, {
                namespace: o.a,
                render: ei,
                renderAgentActivityIcon: ea,
                tool: X.d
            }];

        function ea() {
            return (0, i.jsx)(c.a, {
                className: "shrink-0 text-text/60",
                "aria-hidden": !1,
                asset: ee.a
            })
        }

        function ei(e, t, n) {
            let a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                o = (0, k.c)(e, a);
            if (null == o) return null;
            let s = !e.completed && e.tool === X.d && et.safeParse(e.arguments).success ? (0, i.jsx)(l.a, {
                id: "localConversation.settingsToolCall.write.waitingForApproval",
                defaultMessage: "Waiting for approval"
            }) : (0, i.jsx)(l.a, {
                ...o.message,
                values: o.values
            });
            return "row" === t && void 0 !== n ? (0, i.jsx)(b.a, {
                icon: n,
                summary: (0, i.jsx)(p.a, {
                    active: !e.completed,
                    className: "min-w-0 truncate",
                    children: s
                })
            }) : (0, i.jsxs)(u.a, {
                className: (0, r.b)("text-size-chat", "row" === t ? "text-text-tertiary/90" : "text-text/40 group-hover/activity-header:text-default"),
                children: ["summary-text" !== t ? ea() : null, (0, i.jsx)(p.a, {
                    active: !e.completed,
                    className: (0, r.b)("summary-text" !== t && "min-w-0 truncate"),
                    children: s
                })]
            })
        }
        let er = [...V, ...L, ...F, ...h, ...en, ..._, ...B];

        function eo(e) {
            return er.find(t => t.namespace === e.namespace && t.tool === e.tool)
        }

        function es(e) {
            return eo(e)?.continuesLiveActivityBetweenCalls === !0
        }

        function el(e) {
            return (0, a.d)(e.namespace, e.tool)
        }

        function eu(e) {
            return eo(e)?.summaryOnlyInConversationGroup === !0
        }

        function ec(e) {
            let t = (0, k.c)(e),
                n = eo(e)?.getCompletedSummaryPartKey?.(e);
            return `${e.namespace}:${e.tool}:${n??""}:${t?.key??""}`
        }
    }),
    IIsu: (function(e, t, n) {
        var a = n("UKCO"),
            i = n("jAnS");
        n("Ot7V");
        var r = n("TL6G");
        n.d(t, {}, {
            a: function(e, t) {
                let n;
                "chatgpt" === t.kind ? n = (0, i.c)("clientThreadId" in t ? t.clientThreadId : t.threadId) : "clientThreadId" in t ? n = (0, a.he)(t.clientThreadId) : n = (0, a.he)((0, a.Xe)(t.threadId)), r.c.dispatchHostMessage({
                    type: "navigate-to-route",
                    path: n
                })
            }
        })
    }),
    xLft: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            r = n("on57"),
            o = n("Q840"),
            s = n("oyxz"),
            l = n("lAQI"),
            u = n("f5n5"),
            c = n("eeyJ"),
            d = n("dqpP"),
            p = n("cKhh"),
            m = n("J0Jr"),
            f = n("DYB3"),
            h = n("wbOy");
        let g = l.F({
            destinationHostDisplayName: l.L().min(1),
            operationId: l.L().min(1),
            status: l.p(["queued", "running", "success", "warning", "error"]),
            threadTitle: l.L().min(1)
        });

        function v(e) {
            let t, n, r = (0, i.c)(10),
                {
                    operation: o
                } = e;
            r[0] !== o ? (t = (0, a.jsx)(y, {
                operation: o
            }), r[0] = o, r[1] = t) : t = r[1];
            let l = t;
            if ("queued" === o.status || "running" === o.status) {
                let e;
                return r[2] !== l ? (e = (0, a.jsx)(s.a, {
                    id: "localConversation.threadHandoff.inline.active",
                    defaultMessage: "Handing off to {destination}",
                    values: {
                        destination: l
                    }
                }), r[2] = l, r[3] = e) : e = r[3], e
            }
            if ("error" === o.status) {
                let e;
                return r[4] !== l ? (e = (0, a.jsx)(s.a, {
                    id: "localConversation.threadHandoff.inline.failed",
                    defaultMessage: "Failed to hand off to {destination}",
                    values: {
                        destination: l
                    }
                }), r[4] = l, r[5] = e) : e = r[5], e
            }
            if ("warning" === o.status) {
                let e;
                return r[6] !== l ? (e = (0, a.jsx)(s.a, {
                    id: "localConversation.threadHandoff.inline.warning",
                    defaultMessage: "Handoff to {destination} needs attention",
                    values: {
                        destination: l
                    }
                }), r[6] = l, r[7] = e) : e = r[7], e
            }
            return r[8] !== l ? (n = (0, a.jsx)(s.a, {
                id: "localConversation.threadHandoff.inline.completed",
                defaultMessage: "Handed off to {destination}",
                values: {
                    destination: l
                }
            }), r[8] = l, r[9] = n) : n = r[9], n
        }

        function y(e) {
            let t, n = (0, i.c)(4),
                {
                    operation: r
                } = e;
            if ("to-local" === r.direction) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                    id: "localConversation.threadHandoff.inline.destination.local",
                    defaultMessage: "local"
                }), n[0] = e) : e = n[0], e
            }
            if ("to-worktree" === r.direction) {
                let e;
                return n[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                    id: "localConversation.threadHandoff.inline.destination.worktree",
                    defaultMessage: "worktree"
                }), n[1] = e) : e = n[1], e
            }
            return n[2] !== r.request.destinationLabel ? (t = (0, a.jsx)(a.Fragment, {
                children: r.request.destinationLabel
            }), n[2] = r.request.destinationLabel, n[3] = t) : t = n[3], t
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, y, C = (0, i.c)(25),
                    {
                        agentActivityIcon: x,
                        item: w,
                        operation: b,
                        variant: k
                    } = e,
                    A = null != w && w.completed && !0 === w.success ? function(e) {
                        let t = e?.find(e => "inputText" === e.type)?.text;
                        if (null == t) return null;
                        try {
                            let e = JSON.parse(t),
                                n = g.safeParse(e);
                            return n.success ? n.data : null
                        } catch {
                            return null
                        }
                    }(w.contentItems ?? null) : null,
                    I = null == b ? A?.operationId ?? w.callId : b.id,
                    S = (0, o.x)(u.a, I),
                    P = b ?? S,
                    z = null == P ? null == A ? w?.completed ?? !1 : (0, u.b)(A.status) : (0, u.b)(P.status),
                    L = null == P ? w?.success : "error" !== P.status && ("success" === P.status || "warning" === P.status),
                    T = "running";
                z && (T = !1 === L ? "failed" : "completed"), C[0] !== w ? (t = null == w ? null : (0, f.c)(w), C[0] = w, C[1] = t) : t = C[1];
                let j = t;
                C[2] !== j?.icon ? (n = j?.icon ?? (0, a.jsx)(m.a, {
                    className: "icon-xs shrink-0 text-text/60"
                }), C[2] = j?.icon, C[3] = n) : n = C[3];
                let F = n,
                    M = null;
                if (null != j) {
                    let e;
                    C[4] !== j.message || C[5] !== j.values ? (e = (0, a.jsx)(s.a, {
                        ...j.message,
                        values: j.values
                    }), C[4] = j.message, C[5] = j.values, C[6] = e) : e = C[6], M = e
                } else if (null != b) {
                    let e;
                    C[7] !== b ? (e = (0, a.jsx)(v, {
                        operation: b
                    }), C[7] = b, C[8] = e) : e = C[8], M = e
                }
                if ("row" !== k) {
                    let e, t, n, i = "summary-text" !== k ? F : null,
                        o = null == w ? !z : !w.completed,
                        s = "summary-text" !== k && "min-w-0 truncate";
                    return C[9] !== s ? (e = (0, r.b)(s), C[9] = s, C[10] = e) : e = C[10], C[11] !== M || C[12] !== o || C[13] !== e ? (t = (0, a.jsx)(h.a, {
                        active: o,
                        className: e,
                        children: M
                    }), C[11] = M, C[12] = o, C[13] = e, C[14] = t) : t = C[14], C[15] !== i || C[16] !== t ? (n = (0, a.jsxs)(d.a, {
                        className: "text-size-chat text-text/40 group-hover/activity-header:text-default",
                        children: [i, t]
                    }), C[15] = i, C[16] = t, C[17] = n) : n = C[17], n
                }
                let _ = x ?? F;
                return C[18] !== P ? (l = P?.steps.map(e => (0, a.jsx)(c.a, {
                    compact: !0,
                    direction: P.direction,
                    localBranch: P.localBranch,
                    sourceBranch: P.sourceBranch,
                    step: e,
                    worktreeBranch: P.worktreeBranch
                }, e.id)), C[18] = P, C[19] = l) : l = C[19], C[20] !== T || C[21] !== M || C[22] !== _ || C[23] !== l ? (y = (0, a.jsx)(p.a, {
                    indentContent: !1,
                    icon: _,
                    status: T,
                    summary: M,
                    children: l
                }), C[20] = T, C[21] = M, C[22] = _, C[23] = l, C[24] = y) : y = C[24], y
            }
        })
    }),
    qYBv: (function(e, t, n) {
        var a = n("nQiX"),
            i = n("KJ1J"),
            r = n("Sgjw"),
            o = n("W10I"),
            s = n("xSzB"),
            l = n("acxW");

        function u(e) {
            let {
                item: t,
                mcpServerStatuses: n
            } = e;
            if (!0 === t.isMcpAppWidgetSuperseded || t.completed && null == t.result) return "not-mcp-app";
            if ((0, r.a)(t)?.type === "chatgpt-automation") return "mcp-app";
            let a = t.result?.type === "success" ? t.result.raw : null;
            return null != t.mcpAppResourceUri || null != (0, o.c)({
                mcpServerStatuses: n,
                server: t.invocation.server,
                tool: t.invocation.tool,
                toolResult: a
            }) ? "mcp-app" : null == a ? "not-mcp-app" : null == n ? "maybe-mcp-app" : "not-mcp-app"
        }

        function c(e) {
            let {
                appContext: t,
                result: n
            } = e;
            return e.completed && t?.linkId != null && n?.type === "success" && !0 !== e.isMcpAppWidgetSuperseded && (0, i.f)(e.invocation.server) ? (0, a.b)(t.connectorId, t.actionName, () => (0, l.a)({
                isCodexAppsServer: !0,
                result: n
            }) ? null : (0, s.i)({
                isCodexAppsServer: !0,
                toolResult: n.raw
            }).structuredContent) : null
        }
        n.d(t, {}, {
            a: c,
            b: function(e) {
                let {
                    item: t,
                    mcpServerStatuses: n
                } = e;
                return null != c(t) || "mcp-app" === u({
                    item: t,
                    mcpServerStatuses: n
                }) && !(0, l.a)({
                    isCodexAppsServer: (0, i.f)(t.invocation.server),
                    result: t.result
                })
            },
            c: function(e) {
                let {
                    item: t,
                    mcpServerStatuses: n
                } = e;
                return "not-mcp-app" !== u({
                    item: t,
                    mcpServerStatuses: n
                }) && !(0, l.a)({
                    isCodexAppsServer: (0, i.f)(t.invocation.server),
                    result: t.result
                })
            },
            d: function(e) {
                return e.some(e => "item" === e.kind && "mcp-tool-call" === e.item.type && (e.item.result?.type === "success" || !e.item.completed && null == e.item.result && null == e.item.mcpAppResourceUri))
            }
        })
    }),
    t7eZ: (function(e, t, n) {
        var a = n("fceG");
        n.d(t, {}, {
            a: function(e) {
                return e.result?.type === "error" && (0, a.c)(e.result.error)
            }
        })
    }),
    EeZ9: (function(e, t, n) {
        var a = n("WZ8M"),
            i = n.n(a),
            r = n("hNWF"),
            o = n("NQNw"),
            s = n("eCUJ"),
            l = n("Z2lA");
        n.d(t, {}, {
            a: function(e) {
                let {
                    agentItems: t,
                    isTurnInProgress: n,
                    isAnyNonAgentItemInProgress: a
                } = e, u = [], c = null, d = !1, p = !1, m = e => {
                    c && c.length > 0 && u.push({
                        kind: "exploration",
                        items: c,
                        status: e
                    }), c = null
                };
                for (let e of t)
                    if (!(0, o.b)(e)) {
                        var f;
                        if (!("exec" !== (f = e).type || !(0, r.a)(f) || "read" === f.parsedCmd.type && !f.parsedCmd.isFinished && (0, l.b)({
                                summary: f.parsedCmd,
                                cwd: f.cwd
                            }))) {
                            if (c) {
                                c.push(e);
                                continue
                            }
                            c = [e];
                            continue
                        }
                        if ("reasoning" === e.type) {
                            c && c.push(e);
                            continue
                        }
                        c && m("explored"), u.push({
                            kind: "item",
                            item: e
                        })
                    } if (c) {
                    let e = c.some(e => (0, s.a)(e));
                    m((d = n && (!a || e)) ? "exploring" : "explored")
                } else {
                    let e = i()(u);
                    e?.kind === "item" && (p = (0, s.a)(e.item), "reasoning" === e.item.type && !1 === e.item.completed && (p = !1))
                }
                return {
                    renderableAgentItems: u,
                    isExploring: d,
                    isAnyNonExploringAgentItemInProgress: p
                }
            }
        })
    }),
    Z2lA: (function(e, t, n) {
        var a = n("bnxy"),
            i = n("ivPw"),
            r = n("pNUK");

        function o(e) {
            let {
                summary: t,
                cwd: n
            } = e, a = function(e) {
                let {
                    summary: t,
                    cwd: n
                } = e;
                switch (t.type) {
                    case "read":
                        return s({
                            path: t.path ?? t.name,
                            cwd: n
                        });
                    case "list_files":
                    case "search":
                        if (!t.path) return null;
                        return s({
                            path: t.path,
                            cwd: n
                        })
                }
            }({
                summary: t,
                cwd: n
            });
            return a ? (0, r.a)(a) : null
        }

        function s(e) {
            let {
                path: t,
                cwd: n
            } = e;
            if (!t) return null;
            let r = (0, i.a)(t);
            return 0 === r.length ? null : null != n ? (0, i.a)((0, a.s)(n, r)) : r
        }
        n.d(t, {}, {
            a: o,
            b: function(e) {
                let {
                    summary: t,
                    cwd: n
                } = e;
                return o({
                    summary: t,
                    cwd: n
                })?.isSkillDefinitionFile === !0
            }
        })
    }),
    ltPT: (function(e, t, n) {
        var a = n("QosV"),
            i = n("zd8w"),
            r = n("nsuH");
        n.d(t, {}, {
            a: function() {
                let e, t, n, o, s = (0, a.c)(7),
                    [l, u] = (0, i.useState)(0);
                s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = e => {
                    u(t => t === e ? t : e)
                }, s[0] = e) : e = s[0];
                let c = e;
                s[1] === Symbol.for("react.memo_cache_sentinel") ? (t = e => {
                    c(function(e) {
                        if (!e.borderBoxSize) return e.contentRect.height;
                        let t = Array.isArray(e.borderBoxSize) ? e.borderBoxSize[0] : e.borderBoxSize;
                        return t?.blockSize ?? e.contentRect.height
                    }(e))
                }, s[1] = t) : t = s[1];
                let d = (0, r.b)(t);
                s[2] !== d ? (n = e => {
                    null != e && c(e.scrollHeight), d(e)
                }, s[2] = d, s[3] = n) : n = s[3];
                let p = n;
                return s[4] !== l || s[5] !== p ? (o = {
                    elementHeightPx: l,
                    elementRef: p
                }, s[4] = l, s[5] = p, s[6] = o) : o = s[6], o
            }
        })
    }),
    GJ52: (function(e, t, n) {
        var a = n("IgxH");
        n.d(t, {
            a: () => a.b
        })
    }),
    JEy9: (function(e, t, n) {
        var a = n("ABep"),
            i = n("AHzi"),
            r = n("mOzQ"),
            o = n("jkCp"),
            s = n("DNNO"),
            l = n("V3KG"),
            u = n("FW3Q"),
            c = n("ZOYk"),
            d = n("lHPH"),
            p = n("uteA"),
            m = n("o1pl"),
            f = n("mN4P"),
            h = n("cfIb"),
            g = n("sQG0"),
            v = n("pOSz"),
            y = n("lAQI"),
            C = n("HOLv"),
            x = n("xmjg"),
            w = n("alO6"),
            b = n("Hkqr"),
            k = n("wE2l");
        let A = new Map([
                ["list_spaces", x.a],
                ["get_space", x.a],
                ["create_space", h.a],
                ["list_pages", g.a],
                ["find_pages", d.a],
                ["create_page", s.a],
                ["read_page", v.a],
                ["read_artifact", l.a],
                ["connect_spaces_artifact", l.a],
                ["read_page_reference", l.a],
                ["read_page_transcript", l.a],
                ["read_page_changes", o.a],
                ["edit_page", p.a],
                ["create_page_visualization", f.a],
                ["list_page_comments", r.a],
                ["manage_page_comment", r.a],
                ["search_sharing_recipients", d.a],
                ["get_page_sharing", m.a],
                ["get_space_sharing", m.a],
                ["update_page_sharing", c.a],
                ["update_space_sharing", c.a]
            ]),
            I = y.F({
                action: y.L()
            });

        function S(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = A.get(e);
            if ("manage_page_comment" === e) {
                let e = I.safeParse(t);
                e.success && "resolve" === e.data.action ? r = i.a : e.success && "react" === e.data.action && (r = u.a)
            }
            return null == r ? null : (0, a.jsx)(C.a, {
                className: "shrink-0 text-text/60",
                asset: n ? x.a : r
            })
        }
        n.d(t, {}, {
            a: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = (0, b.b)({
                        appContext: e.appContext,
                        apps: t,
                        functionName: e.functionName,
                        serverName: e.invocation.server,
                        toolName: e.invocation.tool
                    }),
                    r = (0, k.a)({
                        appContext: e.appContext,
                        matchingApp: i,
                        serverName: e.invocation.server,
                        toolName: e.invocation.tool
                    });
                return null == r ? null : S((0, w.e)({
                    matchingApp: r,
                    toolName: e.appContext?.actionName ?? e.invocation.tool
                }), e.invocation.arguments, n) ?? (0, a.jsx)(C.a, {
                    className: "shrink-0 text-text/60",
                    asset: x.a
                })
            },
            b: S
        })
    }),
    wS4d: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e) {
                throw Error(`Unexpected value: ${String(e)}`)
            }
        })
    }),
    XSLO: (function(e, t, n) {
        var a = n("UKCO"),
            i = n("Qgfj"),
            r = n("rS3J"),
            o = n("EULo");
        let s = `${a.pb}@${a.ad}`,
            l = `${a.pb}@${a.bd}`,
            u = `${a.pb}@${a.cd}`,
            c = /^plugin:\/\/([^?]+)(?:\?|$)/i,
            d = /\b(?:visuals?|visuali[sz](?:e|ed|es|er|ers|ing|ations?)|(?:flow)?charts?|plot(?:s|ted|ting)?|graphs?|diagrams?|maps?|simulat(?:e|ed|es|ing|ions?|ors?)|labs?|compar(?:e|ed|es|ing|isons?)|scenarios?|explor(?:e|ed|es|ing|ations?)|interactive|adjustable[-\s]+inputs?)\b|\bshow\s+(?:(?:me|us)\s+)?how\b/i,
            p = (0, i.f)({
                activeCreating: {
                    id: "codex.visualization.activity.active.creating",
                    defaultMessage: "<action>Creating</action> <detail>visualization</detail>"
                },
                activeUpdating: {
                    id: "codex.visualization.activity.active.updating",
                    defaultMessage: "<action>Updating</action> <detail>visualization</detail>"
                },
                rowCreating: {
                    id: "codex.visualization.activity.row.creating",
                    defaultMessage: "<verb>Creating</verb> visualization"
                },
                rowCreated: {
                    id: "codex.visualization.activity.row.created",
                    defaultMessage: "<verb>Created</verb> visualization"
                },
                rowUpdating: {
                    id: "codex.visualization.activity.row.updating",
                    defaultMessage: "<verb>Updating</verb> visualization"
                },
                rowUpdated: {
                    id: "codex.visualization.activity.row.updated",
                    defaultMessage: "<verb>Updated</verb> visualization"
                },
                summaryCreatingLeading: {
                    id: "codex.visualization.activity.summary.creating.leading",
                    defaultMessage: "Creating visualization"
                },
                summaryCreating: {
                    id: "codex.visualization.activity.summary.creating",
                    defaultMessage: "creating visualization"
                },
                summaryCreatedLeading: {
                    id: "codex.visualization.activity.summary.created.leading",
                    defaultMessage: "Created visualization"
                },
                summaryCreated: {
                    id: "codex.visualization.activity.summary.created",
                    defaultMessage: "created visualization"
                },
                summaryUpdatingLeading: {
                    id: "codex.visualization.activity.summary.updating.leading",
                    defaultMessage: "Updating visualization"
                },
                summaryUpdating: {
                    id: "codex.visualization.activity.summary.updating",
                    defaultMessage: "updating visualization"
                },
                summaryUpdatedLeading: {
                    id: "codex.visualization.activity.summary.updated.leading",
                    defaultMessage: "Updated visualization"
                },
                summaryUpdated: {
                    id: "codex.visualization.activity.summary.updated",
                    defaultMessage: "updated visualization"
                }
            });
        n.d(t, {}, {
            a: function(e) {
                let {
                    intl: t,
                    kind: n,
                    isFinished: a,
                    isLeadingSegment: i
                } = e;
                switch (n) {
                    case "create":
                        if (a) return i ? t.formatMessage(p.summaryCreatedLeading) : t.formatMessage(p.summaryCreated);
                        return i ? t.formatMessage(p.summaryCreatingLeading) : t.formatMessage(p.summaryCreating);
                    case "update":
                        if (a) return i ? t.formatMessage(p.summaryUpdatedLeading) : t.formatMessage(p.summaryUpdated);
                        return i ? t.formatMessage(p.summaryUpdatingLeading) : t.formatMessage(p.summaryUpdating)
                }
            },
            b: function(e, t) {
                let n = [e];
                for (let e of t) "userMessage" === e.type && n.push(e.content), "steeringUserMessage" === e.type && "accepted" === e.status && n.push(e.input);
                let a = !1;
                for (let e of n)
                    for (let t of e) {
                        if ("text" !== t.type) continue;
                        d.test(t.text) && (a = !0);
                        let e = 0;
                        for (; e < t.text.length;) {
                            let n = (0, r.d)(t.text, e);
                            if (null == n) break;
                            let a = c.exec((0, o.d)(n.path))?.[1]?.trim().toLowerCase();
                            if (a === s || a === l || a === u) return "explicit";
                            e = n.end
                        }
                    }
                return a ? "soft" : "none"
            },
            c: function(e) {
                return e?.isSkillDefinitionFile === !0 && ("visualize" === e.skillId.toLowerCase() || e.pluginId?.toLowerCase() === "visualize" && ("live" === e.skillId.toLowerCase() || "persisted" === e.skillId.toLowerCase()))
            },
            d: p
        })
    })
};