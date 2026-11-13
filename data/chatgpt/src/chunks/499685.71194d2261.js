export const __rspack_esm_ids = [499685];
export const __webpack_modules__ = {
    tmkO: (function(e, t, n) {
        var a = n("ASxG");
        let i = "update_up_next",
            r = a.strictObject({
                status: a.string().trim().min(1).max(200).nullable(),
                history_summary: a.string().trim().min(1).max(300).optional()
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
                        children: g
                    } = e,
                    v = (0, s.a)(),
                    h = p ? m : 0,
                    y = +!!p;
                d[0] !== h || d[1] !== y ? (t = {
                    height: h,
                    opacity: y
                }, d[0] = h, d[1] = y, d[2] = t) : t = d[2], d[3] !== v ? (n = v ? {
                    duration: 0
                } : l.a, d[3] = v, d[4] = n) : n = d[4];
                let C = !p,
                    x = !p,
                    b = p ? "overflow-visible" : "pointer-events-none overflow-hidden";
                d[5] !== b ? (u = (0, r.b)("motion-reduce:h-auto! motion-reduce:aria-hidden:h-0! motion-reduce:opacity-100! motion-reduce:aria-hidden:opacity-0!", b), d[5] = b, d[6] = u) : u = d[6];
                let w = p ? f : void 0;
                return d[7] !== g || d[8] !== t || d[9] !== n || d[10] !== C || d[11] !== x || d[12] !== u || d[13] !== w ? (c = (0, a.jsx)(o.a.div, {
                    initial: !1,
                    animate: t,
                    transition: n,
                    "aria-hidden": C,
                    inert: x,
                    className: u,
                    onAnimationComplete: w,
                    children: g
                }), d[7] = g, d[8] = t, d[9] = n, d[10] = C, d[11] = x, d[12] = u, d[13] = w, d[14] = c) : c = d[14], c
            }
        })
    }),
    K5Kt: (function(e, t, n) {
        n.d(t, {
            a: () => s
        });
        var a = n("ABep"),
            i = n("QosV"),
            r = n("on57"),
            o = n("GRDa");

        function s(e) {
            let t, n, s, l, u, c, d, p = (0, i.c)(18);
            p[0] !== e ? ({
                ref: s,
                className: t,
                indent: l,
                variant: u,
                ...n
            } = e, p[0] = e, p[1] = t, p[2] = n, p[3] = s, p[4] = l, p[5] = u) : (t = p[1], n = p[2], s = p[3], l = p[4], u = p[5]);
            let m = void 0 === u ? "default" : u,
                f = "conversation" === m ? "item" : "custom",
                g = "flush" !== m && "detail-kV0yGe",
                v = "steps" === m && "steps-SF26rj",
                h = "default" === m && "gap-2 pt-2 pb-1",
                y = "grouped" === m && "gap-[var(--conversation-grouped-item-gap,4px)] pt-1",
                C = void 0 !== l && l && "ps-6";
            return p[6] !== t || p[7] !== g || p[8] !== v || p[9] !== h || p[10] !== y || p[11] !== C ? (c = (0, r.b)(g, v, h, y, C, t), p[6] = t, p[7] = g, p[8] = v, p[9] = h, p[10] = y, p[11] = C, p[12] = c) : c = p[12], p[13] !== n || p[14] !== s || p[15] !== f || p[16] !== c ? (d = (0, a.jsx)(o.a, {
                spacing: f,
                ref: s,
                className: c,
                ...n
            }), p[13] = n, p[14] = s, p[15] = f, p[16] = c, p[17] = d) : d = p[17], d
        }
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
                let t, n, d, p, m, f, g, v = (0, i.c)(34),
                    {
                        defaultExpanded: h,
                        indentContent: y,
                        icon: C,
                        onExpand: x,
                        summary: b,
                        status: w,
                        children: k,
                        unmountOnCollapse: A
                    } = e,
                    z = void 0 === y || y,
                    I = void 0 !== A && A,
                    [S, P] = (0, r.useState)(!1),
                    [j, T] = (0, r.useState)(void 0 !== h && h),
                    {
                        elementHeightPx: L,
                        elementRef: F
                    } = (0, l.a)(),
                    _ = "running" === w,
                    N = null != k,
                    M = N && (_ ? !S : j);
                v[0] !== S || v[1] !== j || v[2] !== M || v[3] !== _ || v[4] !== x ? (t = () => {
                    M || x?.(), _ ? P(!S) : T(!j)
                }, v[0] = S, v[1] = j, v[2] = M, v[3] = _, v[4] = x, v[5] = t) : t = v[5];
                let U = t;
                v[6] !== _ || v[7] !== b ? (n = (0, a.jsx)(s.a, {
                    active: _,
                    className: "min-w-0 truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                    children: b
                }), v[6] = _, v[7] = b, v[8] = n) : n = v[8];
                let R = n;
                v[9] !== U || v[10] !== N || v[11] !== M ? (d = N ? {
                    expanded: M,
                    onToggle: U
                } : void 0, v[9] = U, v[10] = N, v[11] = M, v[12] = d) : d = v[12];
                let O = d,
                    W = I ? void 0 : F;
                v[13] !== k || v[14] !== z || v[15] !== W ? (p = (0, a.jsx)(c.a, {
                    ref: W,
                    indent: z,
                    children: k
                }), v[13] = k, v[14] = z, v[15] = W, v[16] = p) : p = v[16];
                let B = p;
                v[17] !== C || v[18] !== R ? (m = {
                    icon: C,
                    summary: R
                }, v[17] = C, v[18] = R, v[19] = m) : m = v[19];
                let q = m;
                if (I || null == O) {
                    let e, t;
                    return v[20] !== B || v[21] !== O ? (e = O && {
                        ...O,
                        details: B
                    }, v[20] = B, v[21] = O, v[22] = e) : e = v[22], v[23] !== q || v[24] !== e ? (t = (0, a.jsx)(u.a, {
                        ...q,
                        disclosure: e
                    }), v[23] = q, v[24] = e, v[25] = t) : t = v[25], t
                }
                v[26] !== B || v[27] !== L || v[28] !== M ? (f = (0, a.jsx)(o.a, {
                    expanded: M,
                    height: L,
                    children: B
                }), v[26] = B, v[27] = L, v[28] = M, v[29] = f) : f = v[29];
                let E = f;
                return v[30] !== E || v[31] !== O || v[32] !== q ? (g = (0, a.jsx)(u.a, {
                    ...q,
                    body: E,
                    externalDisclosure: O
                }), v[30] = E, v[31] = O, v[32] = q, v[33] = g) : g = v[33], g
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
        function a(e) {
            let t = [],
                n = [],
                a = 0,
                r = () => {
                    let e = n[0];
                    null != e && (t.push({
                        kind: "group",
                        key: `agent-activity-group:${i(e,a)}`,
                        items: [e, ...n.slice(1)]
                    }), n = [])
                };
            for (let {
                    activityItem: o,
                    sourceIndex: s,
                    startsGroup: l
                }
                of e) {
                if (l && r(), "groupable" === o.grouping) {
                    0 === n.length && (a = s), n.push(o);
                    continue
                }
                r();
                let e = t.at(-1);
                ("strict-review-notice" !== o.item.type || e?.kind !== "standalone" || "strict-review-notice" !== e.item.item.type) && t.push({
                    kind: "standalone",
                    key: `agent-activity-standalone:${i(o,s)}`,
                    item: o
                })
            }
            return r(), t
        }

        function i(e, t) {
            let n = e.item;
            return "mcp-tool-call" === n.type && null != n.deferredOutputTurnId ? JSON.stringify([n.threadId, n.deferredOutputTurnId, n.callId]) : "assistant-message" === n.type && null != n.searchItemId ? n.searchItemId : "id" in n && "string" == typeof n.id ? n.id : "callId" in n && "string" == typeof n.callId ? n.callId : "requestId" in n && "string" == typeof n.requestId ? n.requestId : "handoffId" in n && "string" == typeof n.handoffId ? n.handoffId : `${n.type}:${t}`
        }
        n.d(t, {}, {
            a: i,
            b: function(e) {
                let t = 1 === e.length ? e[0]?.item : void 0;
                return t?.type === "web-search" ? t.title : void 0
            },
            c: function(e) {
                return a(e.map((e, t) => ({
                    activityItem: e,
                    sourceIndex: t,
                    startsGroup: !1
                })))
            },
            d: a
        })
    }),
    zUHW: (function(e, t, n) {
        n.d(t, {
            a: () => P
        });
        var a = n("HT1b"),
            i = n("KJ1J"),
            r = n("USdi"),
            o = n("LdAY"),
            s = n("XSLO"),
            l = n("mJQs"),
            u = n("udV3"),
            c = n("RSI4"),
            d = n("hNWF"),
            p = n("DYB3"),
            m = n("acby"),
            f = n("LF5P"),
            g = n("Z2lA");

        function v(e, t) {
            t.count > 0 && e.push(t)
        }

        function h(e, t) {
            if (null != e.pluginId && !(0, i.f)(e.invocation.server)) return !0;
            let n = C(e, t);
            return null != n && y(n)
        }

        function y(e) {
            return null != e.logoUrl || null != e.logoUrlDark || null != e.nativeAppReference
        }

        function C(e, t) {
            return (0, f.c)({
                appContext: e.appContext,
                functionName: e.functionName,
                invocation: e.invocation,
                resolvedApps: t,
                source: e.source
            })
        }

        function x(e) {
            return "patch" === e.type ? null != (0, l.c)(e.visualizationActivities) : "exec" === e.type && (0, s.e)(e.executionStatus) && null != (0, s.b)(e.parsedCmd.cmd)
        }

        function b(e) {
            return "exec" === e.type && "read" === e.parsedCmd.type && (0, g.b)({
                summary: e.parsedCmd,
                cwd: e.cwd
            })
        }

        function w(e) {
            return "web-search" === e.type || "exec" === e.type && !!(0, c.c)(e.parsedCmd.cmd) && (!e.parsedCmd.isFinished || e.output?.exitCode === 0)
        }
        var k = n("EeZ9"),
            A = n("wS4d");

        function z(e) {
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
                visualizationCommandKind: null,
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
                completedVisualizationCommandCount: 0,
                runningVisualizationCommandCount: 0,
                runningWebSearchCommandCount: 0,
                mcpToolCallCount: 0,
                mcpToolCallSources: new Map,
                webSearchCount: 0,
                runningWebSearchCount: 0
            };
            for (let n of e) {
                "other" !== (t = n).type && ("exploration" === t.type || "patch" === t.type || "exec" === t.type || "mcp-tool-call" === t.type || "automatic-approval-review" === t.type || "web-search" === t.type || (0, A.a)(t)) && function(e, t) {
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
                        if (I(e, t.automaticApprovalReviewFailures), e.commandCount += 1, null != t.visualizationActivityKind && (e.visualizationCommandKind = "create" === e.visualizationCommandKind || "create" === t.visualizationActivityKind ? "create" : "update", t.isInProgress ? e.runningVisualizationCommandCount += 1 : e.completedVisualizationCommandCount += 1), t.isInProgress) {
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
                    }(0, A.a)(t)
                }(r, n)
            }
            return a = [...(n = r).visualizationActivitiesByPath.values()], i = null != n.visualizationCommandKind || a.length > 0 ? {
                kind: "create" === n.visualizationCommandKind || a.some(e => {
                    let {
                        kind: t
                    } = e;
                    return "create" === t
                }) ? "create" : "update",
                isInProgress: n.runningVisualizationCommandCount > 0 || a.some(e => {
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
                completedVisualizationCommandCount: n.completedVisualizationCommandCount,
                runningVisualizationCommandCount: n.runningVisualizationCommandCount,
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
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = e.map(e => {
                let {
                    item: t
                } = e;
                return t
            }), {
                renderableAgentItems: g
            } = (0, k.a)({
                agentItems: l,
                isTurnInProgress: !1,
                isAnyNonAgentItemInProgress: !1
            }), A = {
                mcpServerStatuses: t,
                resolvedApps: n,
                modelProvider: i,
                isTurnCancelled: s
            }, I = g.map(e => ({
                unit: "exploration" === e.kind ? (0, c.a)(e) : (0, c.b)(e.item, A),
                hasCodexLabel: "exploration" !== e.kind && "mcp-tool-call" === e.item.type && null != (0, p.d)(e.item, n)
            }));
            return {
                toolActivity: z(I.map(e => {
                    let {
                        unit: t
                    } = e;
                    return t
                })),
                completedHeader: function(e) {
                    var t, n, i;
                    let s, l, c, g, {
                            items: k,
                            toolActivity: A,
                            resolvedApps: z
                        } = e,
                        I = (0, u.b)(k),
                        S = null != I ? [{
                            kind: "web-search",
                            title: I
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
                                    y(t) && i.add(t.key);
                                    continue
                                }
                                if ("mcp-tool-call" !== e.type) continue;
                                let t = C(e, a);
                                !(null == t || (0, f.f)(t.key)) && h(e, a) && i.add(t.key)
                            }
                            let r = n.filter(e => !(0, f.f)(e.key));
                            return [...r.filter(e => i.has(e.key)), ...r.filter(e => !i.has(e.key))]
                        }({
                            items: k,
                            sources: A.mcpToolCallSources,
                            resolvedApps: z
                        }), i = function(e, t) {
                            let n = [],
                                a = new Set;
                            for (let {
                                    item: i
                                }
                                of e) {
                                if ("mcp-tool-call" === i.type) {
                                    let e = (0, p.d)(i, t);
                                    null == e || a.has(e.key) || (a.add(e.key), n.push({
                                        kind: "codex-tool-call",
                                        item: i,
                                        presentation: e
                                    }));
                                    continue
                                }
                                if ("dynamic-tool-call" !== i.type) continue;
                                let e = (0, m.b)(i);
                                a.has(e) || (a.add(e), n.push({
                                    kind: "dynamic-tool-call",
                                    item: i,
                                    key: e
                                }))
                            }
                            return n
                        }(k, z), s = [], n.length > 0 && s.push({
                            kind: "mcp-sources",
                            sources: n
                        }), v(s, {
                            kind: "loaded-tools",
                            count: t.loadedToolCount
                        }), l = t.mcpToolCallSources.reduce((e, t) => e + t.count, 0), v(s, {
                            kind: "unnamed-mcp-calls",
                            count: t.mcpToolCallCount - l
                        }), v(s, {
                            kind: "file-changes",
                            count: t.createdFileCount + t.editedFileCount + t.deletedFileCount - t.stoppedCreatedFileCount
                        }), v(s, {
                            kind: "stopped-file-creation",
                            count: t.stoppedCreatedFileCount
                        }), (t.exploredFileCount > 0 || t.searchCount > 0 || t.listCount > 0) && s.push({
                            kind: "exploration"
                        }), null != t.visualizationActivity && s.push({
                            kind: "visualization",
                            activity: t.visualizationActivity
                        }), c = t.mcpToolCallSources.reduce((e, t) => e + ((0, f.f)(t.key) ? t.count : 0), 0), g = t.completedWebSearchCommandCount + t.runningWebSearchCommandCount, v(s, {
                            kind: "commands",
                            count: t.commandCount - t.completedVisualizationCommandCount - t.runningVisualizationCommandCount + c - g
                        }), (t.webSearchCount > 0 || g > 0) && s.push({
                            kind: "web-search"
                        }), s.push(...i), s);
                    return {
                        summaryParts: S,
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
                                        return "mcp-tool-call" === n.type && C(n, i)?.key === e && h(n, i)
                                    }) ?? n.find(t => {
                                        let {
                                            item: n
                                        } = t;
                                        return "mcp-tool-call" === n.type && C(n, i)?.key === e && n.source?.kind === "browserUse" && n.result?.type === "success" && null != (0, r.a)(n.result.raw._meta)
                                    }) ?? n.find(t => {
                                        let {
                                            item: n
                                        } = t;
                                        return "mcp-tool-call" === n.type && C(n, i)?.key === e
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
                                        return "mcp-tool-call" === t.type && !(0, a.ni)(t.invocation.server) && null == C(t, i)
                                    }) ?? null;
                                case "loaded-tools":
                                    return n.find(e => {
                                        let {
                                            item: t
                                        } = e;
                                        return b(t)
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
                                        return "exec" === t.type && (0, d.a)(t) && !b(t)
                                    }) ?? null;
                                case "visualization":
                                    return n.find(e => {
                                        let {
                                            item: t
                                        } = e;
                                        return x(t)
                                    }) ?? null;
                                case "commands":
                                    return n.find(e => {
                                        var t;
                                        let {
                                            item: n
                                        } = e;
                                        return "mcp-tool-call" === (t = n).type ? (0, a.ni)(t.invocation.server) : "exec" === t.type && !(0, d.a)(t) && !x(t) && !w(t)
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
                            firstPart: S[0],
                            items: k,
                            resolvedApps: z
                        })
                    }
                }({
                    items: e,
                    toolActivity: z(I.filter(e => {
                        let {
                            hasCodexLabel: t
                        } = e;
                        return !t
                    }).map(e => {
                        let {
                            unit: t
                        } = e;
                        return t
                    })),
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
            return ("exec" !== e.item.type || "interrupted" !== e.item.executionStatus) && (0, u.a)(e.item)
        }

        function p(e, t) {
            return (t || "automatic-approval-review" !== e.item.type && ("assistant-message" !== e.item.type || (0, s.c)(e.item))) && d(e)
        }
        n.d(t, {
            b: () => r.a,
            f: () => r.c
        }, {
            a: function(e) {
                let {
                    unit: t,
                    ownsLiveHeader: n,
                    message: a,
                    preferMessage: i,
                    showThinkingBetweenTools: r = !0,
                    isAeonThread: s = !1,
                    isTurnInProgress: l,
                    isActivitySliceClosed: u,
                    isExploring: c
                } = e;
                if (!(n && l && !u)) return {
                    kind: "summary"
                };
                if (i && null != a) return a;
                let d = a ?? {
                        kind: "between-tools"
                    },
                    m = t.items.findLast(e => p(e, s));
                if (null != m) {
                    let e = m.item.type;
                    return "automatic-approval-review" !== e && (s || "exec" === e || "patch" === e || "mcp-tool-call" === e || "dynamic-tool-call" === e || "web-search" === e) ? {
                        kind: "active",
                        item: m
                    } : d
                }
                if (c) {
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
                return r ? d : {
                    kind: "summary"
                }
            },
            c: function(e) {
                let {
                    includeGeneratedImages: t = !1,
                    mcpServerStatuses: n,
                    groupStartItems: a
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = e.flatMap((i, r) => {
                    if ((0, l.b)(i, e[r + 1])) return [];
                    let o = (0, l.a)(i, {
                        includeGeneratedImages: t,
                        mcpServerStatuses: n
                    });
                    return null == o ? [] : [{
                        activityItem: o,
                        sourceIndex: r,
                        startsGroup: a?.has(i) === !0
                    }]
                }), o = 1 === i.length ? i[0].activityItem.item : null;
                return o?.type === "worked-for" && "worked" === o.status ? [] : (0, r.d)(i)
            },
            d: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return e.findLast(e => "group" === e.kind ? e.items.some(e => p(e, t)) : p(e.item, t))
            },
            e: function(e, t, n) {
                let a = e.items[0];
                return n || "summary" !== t.kind || 1 !== e.items.length || d(a) || "patch" === a.item.type && (1 !== Object.keys(a.item.changes).length || (a.item.visualizationActivities?.length ?? 0) > 0) ? {
                    ...e,
                    headerState: t
                } : {
                    kind: "standalone",
                    key: e.key,
                    item: a
                }
            },
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
            h: function(e, t) {
                let n = e.findLastIndex(e => "standalone" !== e.kind || "assistant-message" !== e.item.item.type || (0, s.c)(e.item.item));
                return e.filter((e, a) => "group" !== e.kind || t && a === n || e.items.some(d))
            },
            i: d,
            j: function(e, t) {
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
            o = n("XSLO"),
            s = n("qYBv"),
            l = n("LF5P"),
            u = n("ivPw"),
            c = n("Z2lA");
        let d = /(?:^|\s)(?:-X\s*|--request(?:=|\s+))(?:POST|PUT|PATCH|DELETE)\b/i,
            p = /(?:^|\s)(?:--data(?:-[^\s=]+)?|--json|--form|--upload-file)(?:=|\s|$)/,
            m = /(?:^|\s)-(?:d|F|T)(?:=|\s|$)/;

        function f(e) {
            if (!/^\s*curl(?:\s|$)/.test(e) || d.test(e) || p.test(e) || m.test(e)) return !1;
            let t = e.match(/\bhttps?:\/\/[^\s'"<>]+/gi);
            return null != t && t.some(g)
        }

        function g(e) {
            try {
                let t = new URL(e).hostname.toLowerCase();
                return "localhost" !== t && !t.startsWith("127.")
            } catch {
                return !1
            }
        }

        function v(e) {
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
                    l = 0,
                    d = 0,
                    p = 0;
                for (let m of e.items)
                    if ("exec" === m.type) {
                        if (t.push(...m.automaticApprovalReviews ?? []), "search" === m.parsedCmd.type) {
                            s += 1, m.parsedCmd.isFinished || (l += 1);
                            continue
                        }
                        if ("list_files" === m.parsedCmd.type) {
                            d += 1, m.parsedCmd.isFinished || (p += 1);
                            continue
                        }
                        if ("read" === m.parsedCmd.type) {
                            let e = function(e, t) {
                                let n = (0, u.a)(e);
                                return null == t ? n : (0, u.a)((0, r.s)(t, n))
                            }(m.parsedCmd.path ?? m.parsedCmd.name, m.cwd);
                            if ((0, c.b)({
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
                    runningSearchCount: l,
                    listCount: d,
                    runningListCount: p,
                    ...v(t)
                }
            },
            b: function(e) {
                let {
                    mcpServerStatuses: t,
                    resolvedApps: n = [],
                    shouldKeepMcpAppToolCallsExpandedByDefault: r,
                    isTurnCancelled: d = !1
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
                            l = [];
                        for (let [u, c] of Object.entries(e.changes)) {
                            if ("add" === c.type) {
                                n.push(u), null == e.success && t ? i.push(u) : null == e.success && a.push(u);
                                continue
                            }
                            if ("delete" === c.type) {
                                s.push(u), null == e.success && l.push(u);
                                continue
                            }
                            r.push(u), null == e.success && o.push(u)
                        }
                        return {
                            type: "patch",
                            createdPaths: n,
                            runningCreatedPaths: a,
                            stoppedCreatedPaths: i,
                            editedPaths: r,
                            runningEditedPaths: o,
                            deletedPaths: s,
                            runningDeletedPaths: l,
                            visualizationActivity: null == e.visualizationActivities || !1 === e.success || null == e.success && t ? void 0 : {
                                activities: e.visualizationActivities.map(e => {
                                    let {
                                        path: t,
                                        kind: n
                                    } = e;
                                    return {
                                        path: (0, u.a)(t),
                                        kind: n
                                    }
                                }),
                                isInProgress: null == e.success
                            }
                        }
                    }(e, d),
                    ...v(e.automaticApprovalReviews)
                };
                if ("exec" === e.type) {
                    if ("read" === e.parsedCmd.type && !e.parsedCmd.isFinished && (0, c.b)({
                            summary: e.parsedCmd,
                            cwd: e.cwd
                        })) return {
                        type: "other"
                    };
                    let t = !e.parsedCmd.isFinished,
                        n = "unknown" === e.parsedCmd.type ? e.parsedCmd.cmd : null,
                        a = null != n && /^\s*mkdir(?:\s|$)/.test(n),
                        i = null != n && (0, o.e)(e.executionStatus) && (0, o.b)(n),
                        r = null != n && f(n),
                        s = v(e.automaticApprovalReviews);
                    return i ? {
                        type: "exec",
                        isInProgress: t,
                        visualizationActivityKind: i,
                        ...s
                    } : a ? {
                        type: "exec",
                        isInProgress: t,
                        createsFolder: !0,
                        ...s
                    } : r && (t || e.output?.exitCode === 0) ? {
                        type: "exec",
                        isInProgress: t,
                        searchesWeb: !0,
                        ...s
                    } : {
                        type: "exec",
                        isInProgress: t,
                        ...s
                    }
                }
                if ("mcp-tool-call" === e.type) return (0, s.a)({
                    item: e,
                    mcpServerStatuses: t
                }) || !0 === r && (0, s.b)({
                    item: e,
                    mcpServerStatuses: t
                }) ? {
                    type: "other"
                } : {
                    type: "mcp-tool-call",
                    isInProgress: !e.completed,
                    source: (0, l.c)({
                        appContext: e.appContext,
                        functionName: e.functionName,
                        invocation: e.invocation,
                        resolvedApps: n,
                        source: e.source
                    }),
                    ...v(e.automaticApprovalReviews)
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
                } : "reasoning" === e.type || "todo-list" === e.type || "worked-for" === e.type || "multi-agent-action" === e.type || "proposed-plan" === e.type || "realtime-transcript" === e.type || "user-message" === e.type || "userInput" === e.type || "user-input-response" === e.type || "mcp-server-elicitation" === e.type || "permission-request" === e.type || "turn-diff" === e.type || "plan-implementation" === e.type || "system-error" === e.type || "steered" === e.type || "stream-error" === e.type || "subagent-activity" === e.type || "remote-task-created" === e.type || "context-compaction" === e.type || "personality-changed" === e.type || "forked-from-conversation" === e.type || "model-changed" === e.type || "model-rerouted" === e.type || "auto-review-interruption-warning" === e.type || "strict-review-notice" === e.type || "assistant-message" === e.type || "dil-reasoning" === e.type || "generated-image" === e.type || "image-view" === e.type || "automation-update" === e.type || "dynamic-tool-call" === e.type || "worktree-init" === e.type ? {
                    type: "other"
                } : (0, i.a)(e)
            },
            c: f
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
                        return c(d(e), (0, s.a)(e) || (0, o.a)({
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
            b: function(e, t) {
                return !!("exec" === e.type && (0, i.e)(e.executionStatus)) && null != (0, i.b)(e.parsedCmd.cmd) && t?.type === "patch" && null != t.visualizationActivities && t.visualizationActivities.length > 0 || "exec" === e.type && "read" === e.parsedCmd.type && (0, i.d)((0, l.a)({
                    summary: e.parsedCmd,
                    cwd: e.cwd
                }))
            }
        })
    }),
    GRDa: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            r = n("on57");
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, s, l, u = (0, i.c)(12);
                u[0] !== e ? ({
                    className: t,
                    spacing: o,
                    ...n
                } = e, u[0] = e, u[1] = t, u[2] = n, u[3] = o) : (t = u[1], n = u[2], o = u[3]);
                let c = void 0 === o ? "item" : o,
                    d = "custom" === c ? void 0 : c,
                    p = "item" === c && "gap-[var(--conversation-item-gap,16px)]",
                    m = "grouped" === c && "gap-[var(--conversation-grouped-item-gap,4px)]";
                return u[4] !== t || u[5] !== p || u[6] !== m ? (s = (0, r.b)("flex flex-col", p, m, t), u[4] = t, u[5] = p, u[6] = m, u[7] = s) : s = u[7], u[8] !== n || u[9] !== d || u[10] !== s ? (l = (0, a.jsx)("div", {
                    ...n,
                    "data-spacing": d,
                    className: s
                }), u[8] = n, u[9] = d, u[10] = s, u[11] = l) : l = u[11], l
            }
        })
    }),
    acby: (function(e, t, n) {
        n.d(t, {
            a: () => eo,
            b: () => eu,
            c: () => er,
            d: () => es,
            e: () => el
        });
        var a = n("ABep"),
            i = n("on57"),
            r = n("JGl5"),
            o = n("PFi3"),
            s = n("oyxz"),
            l = n("dqpP"),
            u = n("HOLv"),
            c = n("Bbed"),
            d = n("wbOy"),
            p = n("ou1N");
        let m = (0, c.a)(() => Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(398448)]).then(n.bind(n, "px7w")).then(e => e.EnvironmentSetupPrototypeResultCard)),
            f = [r.a, null].map(e => ({
                namespace: e,
                render: g,
                renderAgentActivityIcon: () => (0, a.jsx)(u.a, {
                    className: "shrink-0 text-text/60",
                    "aria-hidden": !1,
                    asset: p.a
                }),
                persistentInCollapsedConversation: !0,
                standaloneInConversation: !0,
                tool: o.b
            }));

        function g(e, t, n) {
            let r, c = o.f.safeParse(e.arguments);
            return c.success ? "row" === t && e.completed && !1 !== e.success ? (0, a.jsx)(m, {
                details: c.data
            }) : (r = e.completed ? !1 === e.success ? (0, a.jsx)(s.a, {
                id: "restricted.environmentSetup.result.failed",
                defaultMessage: "Couldn’t prepare environment draft"
            }) : (0, a.jsx)(s.a, {
                id: "restricted.environmentSetup.result.completed",
                defaultMessage: "Prepared environment draft"
            }) : (0, a.jsx)(s.a, {
                id: "restricted.environmentSetup.result.finalizing",
                defaultMessage: "Preparing environment draft"
            }), (0, a.jsxs)(l.a, {
                className: (0, i.b)("text-size-chat text-text/40", "row" === t ? "group-hover:text-default" : "group-hover/activity-header:text-default"),
                children: ["summary-text" !== t ? n ?? (0, a.jsx)(u.a, {
                    className: "shrink-0 text-text/60",
                    "aria-hidden": !1,
                    asset: p.a
                }) : null, (0, a.jsx)(d.a, {
                    active: !e.completed,
                    children: r
                })]
            })) : null
        }
        var v = n("HT1b"),
            h = n("bVzl"),
            y = n("MCYz"),
            C = n("ASxG"),
            x = n("TL6G"),
            b = n("MFk9"),
            w = n("DYB3"),
            k = n("IIsu"),
            A = n("xLft");
        let z = C.object({
                destinationHostId: C.string().min(1).optional(),
                threadId: C.string().min(1)
            }),
            I = C.object({
                operationId: C.string().min(1)
            }),
            S = C.object({
                threadId: C.string().min(1)
            }),
            P = [{
                namespace: r.a,
                render: T,
                renderAgentActivityIcon: j,
                tool: y.h
            }, {
                namespace: r.a,
                render: T,
                renderAgentActivityIcon: j,
                tool: y.d
            }, {
                getCompletedSummaryPartKey: function(e) {
                    let t = z.safeParse(e.arguments);
                    return t.success ? JSON.stringify([t.data.threadId, t.data.destinationHostId ?? null]) : null
                },
                namespace: r.a,
                render: function(e, t, n) {
                    return z.safeParse(e.arguments).success ? (0, a.jsx)(A.a, {
                        agentActivityIcon: n,
                        item: e,
                        variant: t
                    }) : null
                },
                renderAgentActivityIcon: j,
                standaloneInConversation: !0,
                tool: h.c
            }, {
                getCompletedSummaryPartKey: function(e) {
                    let t = I.safeParse(e.arguments);
                    return t.success ? t.data.operationId : null
                },
                namespace: r.a,
                render: T,
                renderAgentActivityIcon: j,
                summaryOnlyInConversationGroup: !0,
                tool: h.b
            }, {
                continuesLiveActivityBetweenCalls: !0,
                namespace: r.a,
                render: T,
                renderAgentActivityIcon: j,
                tool: y.p
            }, {
                continuesLiveActivityBetweenCalls: !0,
                namespace: r.a,
                render: T,
                renderAgentActivityIcon: j,
                tool: y.r
            }, {
                namespace: r.a,
                render: T,
                renderAgentActivityIcon: j,
                tool: y.t
            }, {
                namespace: r.a,
                render: T,
                renderAgentActivityIcon: j,
                tool: y.x
            }, {
                namespace: r.a,
                render: T,
                renderAgentActivityIcon: j,
                tool: y.v
            }, {
                namespace: r.a,
                render: T,
                renderAgentActivityIcon: j,
                tool: y.B
            }];

        function j(e) {
            return (0, w.c)(e)?.icon ?? null
        }

        function T(e, t, n) {
            var r;
            let o, u, c = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                p = (0, w.c)(e, c);
            if (null == p) return null;
            let m = e.tool === y.d && e.completed && !0 === e.success && "row" === t ? (r = e.contentItems ?? null, null == (o = r?.find(e => "inputText" === e.type)?.text) ? null : (0, v.Bj)(o)) : null,
                f = "row" === t && (e.tool === y.r || e.tool === y.t) ? S.safeParse(e.arguments) : null,
                g = f?.success === !0 ? f.data.threadId : null;
            null != m ? u = e => (0, k.a)(e, m) : null != g && (u = () => {
                let e = (0, v.Re)(g);
                x.c.dispatchHostMessage({
                    type: "navigate-to-route",
                    path: (0, v.ce)(e)
                })
            });
            let h = "row" === t && void 0 !== n,
                C = h ? "summary-text" : t,
                A = (0, a.jsxs)(l.a, {
                    className: (0, i.b)("text-size-chat", "row" === C ? "text-text-tertiary/90" : "text-text/40 group-hover/activity-header:text-default"),
                    children: ["summary-text" !== C ? j(e) : null, (0, a.jsx)(d.a, {
                        active: !e.completed,
                        className: (0, i.b)("summary-text" !== C && "min-w-0 truncate", null != u && "group-hover:!text-default"),
                        children: (0, a.jsx)(s.a, {
                            ...p.message,
                            values: p.values
                        })
                    })]
                }),
                z = null == u ? A : (0, a.jsx)("button", {
                    type: "button",
                    className: "group max-w-full cursor-interaction rounded-md text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                    onClick: u,
                    children: A
                });
            return h ? (0, a.jsx)(b.a, {
                icon: n,
                summary: z
            }) : z
        }
        let L = P.filter(e => {
            let {
                tool: t
            } = e;
            return "create_thread" === t
        }).map(e => ({
            ...e,
            namespace: null
        }));
        var F = n("tmkO");
        let _ = [r.a, null].map(e => ({
            namespace: e,
            tool: F.a,
            hiddenInConversation: !0
        }));
        var N = n("ScoF"),
            M = n("Y3sT"),
            U = n("uWou"),
            R = n("JEy9");
        let O = {
                namespace: r.a,
                tool: M.b,
                getActivityMessage: (e, t) => (0, U.a)({
                    tool: e.tool,
                    toolArguments: e.arguments,
                    completed: e.completed,
                    isLeadingSummaryPart: t
                }),
                renderAgentActivityIcon: (e, t) => (0, R.b)(e.tool, e.arguments, t),
                getCompletedSummaryPartKey: e => (0, U.a)({
                    tool: e.tool,
                    toolArguments: e.arguments,
                    completed: !0
                })?.id ?? null
            },
            W = [O, {
                ...O,
                tool: N.b
            }, {
                ...O,
                tool: "read_artifact"
            }];
        var B = n("Tbby"),
            q = n("QosV"),
            E = n("T0Rc"),
            H = n("Qgfj"),
            K = n("C2tN"),
            $ = n("d9Qn");

        function V(e) {
            let t, n, r, o, u, c, p = (0, q.c)(25),
                {
                    item: m,
                    isLeadingSummaryPart: f,
                    tabId: g,
                    variant: v,
                    agentActivityIcon: h
                } = e,
                y = void 0 === f || f,
                {
                    data: C
                } = J(m, g),
                x = C?.faviconUrl ?? null,
                w = C?.title ?? null;
            if (null != w) {
                let e;
                p[0] !== y || p[1] !== m.completed || p[2] !== w ? (e = m.completed ? (0, a.jsx)(s.a, {
                    ...y ? Q.completedWithTitle : Q.completedWithTitleFollowing,
                    values: {
                        title: w
                    }
                }) : (0, a.jsx)(s.a, {
                    ...Q.activeWithTitle,
                    values: {
                        title: w
                    }
                }), p[0] = y, p[1] = m.completed, p[2] = w, p[3] = e) : e = p[3], t = e
            } else {
                let e;
                p[4] !== y || p[5] !== m.completed ? (e = m.completed ? (0, a.jsx)(s.a, {
                    ...y ? Q.completed : Q.completedFollowing
                }) : (0, a.jsx)(s.a, {
                    ...Q.active
                }), p[4] = y, p[5] = m.completed, p[6] = e) : e = p[6], t = e
            }
            let k = !m.completed,
                A = "summary-text" !== v && "min-w-0 truncate";
            p[7] !== A ? (n = (0, i.b)(A), p[7] = A, p[8] = n) : n = p[8], p[9] !== t || p[10] !== k || p[11] !== n ? (r = (0, a.jsx)(d.a, {
                active: k,
                className: n,
                children: t
            }), p[9] = t, p[10] = k, p[11] = n, p[12] = r) : r = p[12];
            let z = r;
            if ("row" === v && void 0 !== h) {
                let e;
                return p[13] !== h || p[14] !== z ? (e = (0, a.jsx)(b.a, {
                    icon: h,
                    summary: z
                }), p[13] = h, p[14] = z, p[15] = e) : e = p[15], e
            }
            let I = "row" === v ? "text-text-tertiary/90" : "text-text/40 group-hover/activity-header:text-default";
            return p[16] !== I ? (o = (0, i.b)("text-size-chat", I), p[16] = I, p[17] = o) : o = p[17], p[18] !== x || p[19] !== v ? (u = "summary-text" !== v && null != x ? (0, a.jsx)($.a, {
                src: x,
                className: "icon-xs text-tertiary",
                showFallbackWhileLoading: !1
            }) : null, p[18] = x, p[19] = v, p[20] = u) : u = p[20], p[21] !== z || p[22] !== o || p[23] !== u ? (c = (0, a.jsxs)(l.a, {
                className: o,
                children: [u, z]
            }), p[21] = z, p[22] = o, p[23] = u, p[24] = c) : c = p[24], c
        }

        function D(e) {
            let t, n = (0, q.c)(2),
                {
                    item: i,
                    tabId: r
                } = e,
                {
                    data: o
                } = J(i, r);
            return n[0] !== o ? (t = o?.faviconUrl == null ? null : (0, a.jsx)($.a, {
                src: o.faviconUrl,
                className: "icon-xs text-tertiary",
                showFallbackWhileLoading: !1
            }), n[0] = o, n[1] = t) : t = n[1], t
        }

        function J(e, t) {
            let n, a, i, r = (0, q.c)(9),
                o = !e.completed;
            return r[0] !== t ? (n = () => (async function(e) {
                let t = (0, K.a)();
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
            }, r[5] = o, r[6] = n, r[7] = a, r[8] = i) : i = r[8], (0, E.a)(i)
        }
        let Q = (0, H.f)({
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
            Y = C.strictObject({
                tabId: C.number().int().nonnegative()
            }),
            Z = [{
                getCompletedSummaryPartKey: function(e) {
                    return Y.safeParse(e.arguments).success ? e.callId : null
                },
                namespace: "chrome_extension",
                render: function(e, t, n) {
                    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        r = Y.safeParse(e.arguments);
                    return r.success ? (0, a.jsx)(V, {
                        item: e,
                        isLeadingSummaryPart: i,
                        tabId: r.data.tabId,
                        variant: t,
                        agentActivityIcon: n
                    }) : null
                },
                renderAgentActivityIcon: function(e) {
                    let t = Y.safeParse(e.arguments);
                    return t.success ? (0, a.jsx)(D, {
                        item: e,
                        tabId: t.data.tabId
                    }) : null
                },
                tool: B.b
            }];
        var G = n("YZPM"),
            X = n("vZSl");
        let ee = C.object({
                config: C.object({})
            }),
            et = [{
                namespace: r.a,
                render: ea,
                renderAgentActivityIcon: en,
                tool: G.b
            }, {
                namespace: r.a,
                render: ea,
                renderAgentActivityIcon: en,
                tool: G.d
            }];

        function en() {
            return (0, a.jsx)(u.a, {
                className: "shrink-0 text-text/60",
                "aria-hidden": !1,
                asset: X.a
            })
        }

        function ea(e, t, n) {
            let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                o = (0, w.c)(e, r);
            if (null == o) return null;
            let u = !e.completed && e.tool === G.d && ee.safeParse(e.arguments).success ? (0, a.jsx)(s.a, {
                id: "localConversation.settingsToolCall.write.waitingForApproval",
                defaultMessage: "Waiting for approval"
            }) : (0, a.jsx)(s.a, {
                ...o.message,
                values: o.values
            });
            return "row" === t && void 0 !== n ? (0, a.jsx)(b.a, {
                icon: n,
                summary: (0, a.jsx)(d.a, {
                    active: !e.completed,
                    className: "min-w-0 truncate",
                    children: u
                })
            }) : (0, a.jsxs)(l.a, {
                className: (0, i.b)("text-size-chat", "row" === t ? "text-text-tertiary/90" : "text-text/40 group-hover/activity-header:text-default"),
                children: ["summary-text" !== t ? en() : null, (0, a.jsx)(d.a, {
                    active: !e.completed,
                    className: (0, i.b)("summary-text" !== t && "min-w-0 truncate"),
                    children: u
                })]
            })
        }
        let ei = [...Z, ...P, ...L, ...f, ...et, ..._, ...W];

        function er(e) {
            return ei.find(t => t.namespace === e.namespace && t.tool === e.tool)
        }

        function eo(e) {
            return er(e)?.continuesLiveActivityBetweenCalls === !0
        }

        function es(e) {
            return er(e)?.persistentInCollapsedConversation === !0
        }

        function el(e) {
            return er(e)?.summaryOnlyInConversationGroup === !0
        }

        function eu(e) {
            let t = (0, w.c)(e),
                n = er(e)?.getCompletedSummaryPartKey?.(e);
            return `${e.namespace}:${e.tool}:${n??""}:${t?.key??""}`
        }
    }),
    IIsu: (function(e, t, n) {
        var a = n("HT1b"),
            i = n("jAnS");
        n("Ot7V");
        var r = n("TL6G");
        n.d(t, {}, {
            a: function(e, t) {
                let n;
                "chatgpt" === t.kind ? n = (0, i.c)("clientThreadId" in t ? t.clientThreadId : t.threadId) : "clientThreadId" in t ? n = (0, a.ce)(t.clientThreadId) : n = (0, a.ce)((0, a.Re)(t.threadId)), r.c.dispatchHostMessage({
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
            o = n("BolX"),
            s = n("oyxz"),
            l = n("ASxG"),
            u = n("f5n5"),
            c = n("eeyJ"),
            d = n("dqpP"),
            p = n("cKhh"),
            m = n("J0Jr"),
            f = n("DYB3"),
            g = n("wbOy");
        let v = l.object({
            destinationHostDisplayName: l.string().min(1),
            operationId: l.string().min(1),
            status: l.enum(["queued", "running", "success", "warning", "error"]),
            threadTitle: l.string().min(1)
        });

        function h(e) {
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
                        item: b,
                        operation: w,
                        variant: k
                    } = e,
                    A = null != b && b.completed && !0 === b.success ? function(e) {
                        let t = e?.find(e => "inputText" === e.type)?.text;
                        if (null == t) return null;
                        try {
                            let e = JSON.parse(t),
                                n = v.safeParse(e);
                            return n.success ? n.data : null
                        } catch {
                            return null
                        }
                    }(b.contentItems ?? null) : null,
                    z = null == w ? A?.operationId ?? b.callId : w.id,
                    I = (0, o.x)(u.a, z),
                    S = w ?? I,
                    P = null == S ? null == A ? b?.completed ?? !1 : (0, u.b)(A.status) : (0, u.b)(S.status),
                    j = null == S ? b?.success : "error" !== S.status && ("success" === S.status || "warning" === S.status),
                    T = "running";
                P && (T = !1 === j ? "failed" : "completed"), C[0] !== b ? (t = null == b ? null : (0, f.c)(b), C[0] = b, C[1] = t) : t = C[1];
                let L = t;
                C[2] !== L?.icon ? (n = L?.icon ?? (0, a.jsx)(m.a, {
                    className: "icon-xs shrink-0 text-text/60"
                }), C[2] = L?.icon, C[3] = n) : n = C[3];
                let F = n,
                    _ = null;
                if (null != L) {
                    let e;
                    C[4] !== L.message || C[5] !== L.values ? (e = (0, a.jsx)(s.a, {
                        ...L.message,
                        values: L.values
                    }), C[4] = L.message, C[5] = L.values, C[6] = e) : e = C[6], _ = e
                } else if (null != w) {
                    let e;
                    C[7] !== w ? (e = (0, a.jsx)(h, {
                        operation: w
                    }), C[7] = w, C[8] = e) : e = C[8], _ = e
                }
                if ("row" !== k) {
                    let e, t, n, i = "summary-text" !== k ? F : null,
                        o = null == b ? !P : !b.completed,
                        s = "summary-text" !== k && "min-w-0 truncate";
                    return C[9] !== s ? (e = (0, r.b)(s), C[9] = s, C[10] = e) : e = C[10], C[11] !== _ || C[12] !== o || C[13] !== e ? (t = (0, a.jsx)(g.a, {
                        active: o,
                        className: e,
                        children: _
                    }), C[11] = _, C[12] = o, C[13] = e, C[14] = t) : t = C[14], C[15] !== i || C[16] !== t ? (n = (0, a.jsxs)(d.a, {
                        className: "text-size-chat text-text/40 group-hover/activity-header:text-default",
                        children: [i, t]
                    }), C[15] = i, C[16] = t, C[17] = n) : n = C[17], n
                }
                let N = x ?? F;
                return C[18] !== S ? (l = S?.steps.map(e => (0, a.jsx)(c.a, {
                    compact: !0,
                    direction: S.direction,
                    localBranch: S.localBranch,
                    sourceBranch: S.sourceBranch,
                    step: e,
                    worktreeBranch: S.worktreeBranch
                }, e.id)), C[18] = S, C[19] = l) : l = C[19], C[20] !== T || C[21] !== _ || C[22] !== N || C[23] !== l ? (y = (0, a.jsx)(p.a, {
                    indentContent: !1,
                    icon: N,
                    status: T,
                    summary: _,
                    children: l
                }), C[20] = T, C[21] = _, C[22] = N, C[23] = l, C[24] = y) : y = C[24], y
            }
        })
    }),
    qYBv: (function(e, t, n) {
        var a = n("KJ1J"),
            i = n("W10I"),
            r = n("E2ja"),
            o = n("acxW");

        function s(e) {
            let {
                item: t,
                mcpServerStatuses: n
            } = e;
            if (!0 === t.isMcpAppWidgetSuperseded || t.completed && null == t.result) return "not-mcp-app";
            if ((0, r.b)(t)?.type === "chatgpt-automation") return "mcp-app";
            let a = t.result?.type === "success" ? t.result.raw : null;
            return null != t.mcpAppResourceUri || null != (0, i.c)({
                mcpServerStatuses: n,
                server: t.invocation.server,
                tool: t.invocation.tool,
                toolResult: a
            }) ? "mcp-app" : null == a ? "not-mcp-app" : null == n ? "maybe-mcp-app" : "not-mcp-app"
        }
        n.d(t, {}, {
            a: function(e) {
                let {
                    item: t,
                    mcpServerStatuses: n
                } = e;
                return "mcp-app" === s({
                    item: t,
                    mcpServerStatuses: n
                }) && !(0, o.a)({
                    isCodexAppsServer: (0, a.f)(t.invocation.server),
                    result: t.result
                })
            },
            b: function(e) {
                let {
                    item: t,
                    mcpServerStatuses: n
                } = e;
                return "not-mcp-app" !== s({
                    item: t,
                    mcpServerStatuses: n
                }) && !(0, o.a)({
                    isCodexAppsServer: (0, a.f)(t.invocation.server),
                    result: t.result
                })
            },
            c: function(e) {
                return e.some(e => "item" === e.kind && "mcp-tool-call" === e.item.type && (e.item.result?.type === "success" || !e.item.completed && null == e.item.result && null == e.item.mcpAppResourceUri))
            }
        })
    }),
    t7eZ: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e) {
                return e.result?.type === "error" && "MCP tool call requires approval, but approval policy is never" === e.result.error
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
                for (let [e, n] of t.entries())
                    if (!(0, o.b)(n, t[e + 1])) {
                        var f;
                        if (!("exec" !== (f = n).type || !(0, r.a)(f) || "read" === f.parsedCmd.type && !f.parsedCmd.isFinished && (0, l.b)({
                                summary: f.parsedCmd,
                                cwd: f.cwd
                            }))) {
                            if (c) {
                                c.push(n);
                                continue
                            }
                            c = [n];
                            continue
                        }
                        if ("reasoning" === n.type) {
                            c && c.push(n);
                            continue
                        }
                        c && m("explored"), u.push({
                            kind: "item",
                            item: n
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
    JEy9: (function(e, t, n) {
        var a = n("ABep"),
            i = n("nPAz"),
            r = n("flTg"),
            o = n("tCS5"),
            s = n("Nx7n"),
            l = n("bQu7"),
            u = n("uheM"),
            c = n("LkCK"),
            d = n("uZvu"),
            p = n("QbH9"),
            m = n("QxwI"),
            f = n("gYHX"),
            g = n("lbB4"),
            v = n("u9it"),
            h = n("dECj"),
            y = n("ASxG"),
            C = n("HOLv"),
            x = n("xmjg"),
            b = n("alO6"),
            w = n("Hkqr"),
            k = n("wE2l");
        let A = new Map([
                ["list_spaces", x.a],
                ["get_space", x.a],
                ["create_space", g.a],
                ["list_pages", v.a],
                ["find_pages", p.a],
                ["create_page", l.a],
                ["read_page", h.a],
                ["read_artifact", u.a],
                ["connect_spaces_artifact", u.a],
                ["read_page_reference", u.a],
                ["read_page_transcript", u.a],
                ["read_page_changes", s.a],
                ["edit_page", m.a],
                ["create_page_visualization", i.a],
                ["list_page_comments", o.a],
                ["manage_page_comment", o.a],
                ["search_sharing_recipients", p.a],
                ["get_page_sharing", f.a],
                ["get_space_sharing", f.a],
                ["update_page_sharing", d.a],
                ["update_space_sharing", d.a]
            ]),
            z = y.object({
                action: y.string()
            });

        function I(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = A.get(e);
            if ("manage_page_comment" === e) {
                let e = z.safeParse(t);
                e.success && "resolve" === e.data.action ? i = r.a : e.success && "react" === e.data.action && (i = c.a)
            }
            return null == i ? null : (0, a.jsx)(C.a, {
                className: "shrink-0 text-text/60",
                asset: n ? x.a : i
            })
        }
        n.d(t, {}, {
            a: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = (0, w.b)({
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
                return null == r ? null : I((0, b.e)({
                    matchingApp: r,
                    toolName: e.appContext?.actionName ?? e.invocation.tool
                }), e.invocation.arguments, n) ?? (0, a.jsx)(C.a, {
                    className: "shrink-0 text-text/60",
                    asset: x.a
                })
            },
            b: I
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
        var a = n("HT1b"),
            i = n("Qgfj"),
            r = n("rS3J"),
            o = n("EULo");
        let s = /(?:^|[\\/])visualizations(?:[\\/"'\s;]|$)/i,
            l = /(?:^|\s)(?:apply_patch|mkdir|tee|touch|cp|mv|install)(?:\s|$)|(?:^|[^<])>>?/,
            u = /\*\*\* Add File:[^\r\n]*[\\/]visualizations(?:[\\/"'\s;]|$)/i,
            c = /\*\*\* Update File:[^\r\n]*[\\/]visualizations(?:[\\/"'\s;]|$)/i,
            d = /\*\*\* Delete File:[^\r\n]*[\\/]visualizations(?:[\\/"'\s;]|$)/i,
            p = `${a.nb}@${a.Yc}`,
            m = `${a.nb}@${a.Zc}`,
            f = `${a.nb}@${a._c}`,
            g = /^plugin:\/\/([^?]+)(?:\?|$)/i,
            v = /\b(?:visuals?|visuali[sz](?:e|ed|es|er|ers|ing|ations?)|(?:flow)?charts?|plot(?:s|ted|ting)?|graphs?|diagrams?|maps?|simulat(?:e|ed|es|ing|ions?|ors?)|labs?|compar(?:e|ed|es|ing|isons?)|scenarios?|explor(?:e|ed|es|ing|ations?)|interactive|adjustable[-\s]+inputs?)\b|\bshow\s+(?:(?:me|us)\s+)?how\b/i,
            h = (0, i.f)({
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
                        if (a) return i ? t.formatMessage(h.summaryCreatedLeading) : t.formatMessage(h.summaryCreated);
                        return i ? t.formatMessage(h.summaryCreatingLeading) : t.formatMessage(h.summaryCreating);
                    case "update":
                        if (a) return i ? t.formatMessage(h.summaryUpdatedLeading) : t.formatMessage(h.summaryUpdated);
                        return i ? t.formatMessage(h.summaryUpdatingLeading) : t.formatMessage(h.summaryUpdating)
                }
            },
            b: function(e) {
                return s.test(e) && l.test(e) ? u.test(e) ? "create" : c.test(e) ? "update" : d.test(e) ? null : "create" : null
            },
            c: function(e, t) {
                let n = [e];
                for (let e of t) "userMessage" === e.type && n.push(e.content), "steeringUserMessage" === e.type && "accepted" === e.status && n.push(e.input);
                let a = !1;
                for (let e of n)
                    for (let t of e) {
                        if ("text" !== t.type) continue;
                        v.test(t.text) && (a = !0);
                        let e = 0;
                        for (; e < t.text.length;) {
                            let n = (0, r.d)(t.text, e);
                            if (null == n) break;
                            let a = g.exec((0, o.c)(n.path))?.[1]?.trim().toLowerCase();
                            if (a === p || a === m || a === f) return "explicit";
                            e = n.end
                        }
                    }
                return a ? "soft" : "none"
            },
            d: function(e) {
                return e?.isSkillDefinitionFile === !0 && ("visualize" === e.skillId.toLowerCase() || e.pluginId?.toLowerCase() === "visualize" && ("live" === e.skillId.toLowerCase() || "persisted" === e.skillId.toLowerCase()))
            },
            e: function(e) {
                if (null == e) return !0;
                switch (e) {
                    case "inProgress":
                    case "completed":
                        return !0;
                    case "failed":
                    case "declined":
                    case "interrupted":
                        return !1
                }
            },
            f: h
        })
    })
};