export const __rspack_esm_id = 899308;
export const __rspack_esm_ids = [899308];
export const __webpack_modules__ = {
    tmkO: (function(e, t, n) {
        var a = n("ASxG");
        let i = "update_up_next",
            r = a.strictObject({
                status: a.string().trim().min(1).max(200).nullable(),
                history_summary: a.string().trim().min(1).max(300).optional()
            });

        function o(e, t) {
            return ("codex_app" === e || null == e) && t === i
        }

        function s(e) {
            let t = r.safeParse(e);
            return t.success ? t.data.status : void 0
        }
        n.d(t, {
            b: () => s,
            c: () => o
        }, {
            a: i
        })
    }),
    LdAY: (function(e, t, n) {
        var a = n("Hkqr");

        function i(e) {
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
        }

        function r(e) {
            return e.subscriptionEnded ? null : JSON.stringify(["external-event", e.sourceKey, e.sourceLabel])
        }
        n.d(t, {
            a: () => i,
            b: () => r
        })
    }),
    udV3: (function(e, t, n) {
        function a(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return r(e.map((e, t) => ({
                activityItem: e,
                sourceIndex: t,
                startsGroup: !1
            })), t)
        }

        function i(e) {
            let t = 1 === e.length ? e[0]?.item : void 0;
            return t?.type === "web-search" ? t.title : void 0
        }

        function r(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = [],
                a = [],
                i = 0,
                r = null,
                s = () => {
                    let e = a[0];
                    null != e && (null != r ? r.items.push(...a) : (r = {
                        kind: "group",
                        key: `agent-activity-group:${o(e,i)}`,
                        items: [e, ...a.slice(1)]
                    }, n.push(r)), a = [])
                };
            for (let {
                    activityItem: l,
                    sourceIndex: u,
                    startsGroup: c
                }
                of e) {
                if (c && (s(), r = null), "groupable" === l.grouping) {
                    0 === a.length && (i = u), a.push(l);
                    continue
                }
                s(), t && "subagent-activity" === l.item.type || (r = null);
                let e = n.at(-1);
                ("strict-review-notice" !== l.item.type || e?.kind !== "standalone" || "strict-review-notice" !== e.item.item.type) && n.push({
                    kind: "standalone",
                    key: `agent-activity-standalone:${o(l,u)}`,
                    item: l
                })
            }
            return s(), n
        }

        function o(e, t) {
            let n = e.item;
            return "assistant-message" === n.type && null != n.searchItemId ? n.searchItemId : "id" in n && "string" == typeof n.id ? n.id : "callId" in n && "string" == typeof n.callId ? n.callId : "requestId" in n && "string" == typeof n.requestId ? n.requestId : "handoffId" in n && "string" == typeof n.handoffId ? n.handoffId : `${n.type}:${t}`
        }
        n.d(t, {
            a: () => o,
            b: () => i,
            c: () => a,
            d: () => r
        })
    }),
    zUHW: (function(e, t, n) {
        n.d(t, {
            a: () => P
        });
        var a = n("o0PZ"),
            i = n("KJ1J"),
            r = n("LdAY"),
            o = n("XSLO"),
            s = n("mJQs"),
            l = n("udV3"),
            u = n("RSI4"),
            c = n("hNWF"),
            d = n("DYB3"),
            p = n("acby"),
            m = n("LF5P"),
            g = n("Z2lA");

        function f(e, t) {
            t.count > 0 && e.push(t)
        }

        function v(e, t) {
            if (null != e.pluginId && !(0, i.e)(e.invocation.server)) return !0;
            let n = y(e, t);
            return null != n && h(n)
        }

        function h(e) {
            return null != e.logoUrl || null != e.logoUrlDark || null != e.nativeAppReference
        }

        function y(e, t) {
            return (0, m.d)({
                appContext: e.appContext,
                functionName: e.functionName,
                invocation: e.invocation,
                resolvedApps: t,
                source: e.source
            })
        }

        function C(e) {
            return "patch" === e.type ? null != (0, s.c)(e.visualizationActivities) : "exec" === e.type && (0, o.e)(e.executionStatus) && null != (0, o.b)(e.parsedCmd.cmd)
        }

        function x(e) {
            return "exec" === e.type && "read" === e.parsedCmd.type && (0, g.b)({
                summary: e.parsedCmd,
                cwd: e.cwd
            })
        }

        function b(e) {
            return "web-search" === e.type || "exec" === e.type && !!(0, u.c)(e.parsedCmd.cmd) && (!e.parsedCmd.isFinished || e.output?.exitCode === 0)
        }
        var w = n("EeZ9"),
            k = n("wS4d");

        function z(e) {
            var t, n;
            let a, i, r = {
                createdPaths: new Set,
                runningCreatedPaths: new Set,
                stoppedCreatedPaths: new Set,
                runningCreatedLineCount: 0,
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
                        for (let n of (e.runningCreatedLineCount += t.runningCreatedLineCount, t.editedPaths)) e.editedPaths.add(n);
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
                    if ("automatic-approval-review" === t.type) return A(e, t);
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
                runningCreatedLineCount: n.runningCreatedLineCount,
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
            for (let n of t ?? []) A(e, n)
        }

        function A(e, t) {
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
                isTurnCancelled: o = !1
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = e.map(e => {
                let {
                    item: t
                } = e;
                return t
            }), {
                renderableAgentItems: g
            } = (0, w.a)({
                agentItems: s,
                isTurnInProgress: !1,
                isAnyNonAgentItemInProgress: !1
            }), k = {
                mcpServerStatuses: t,
                resolvedApps: n,
                modelProvider: i,
                isTurnCancelled: o
            }, I = g.map(e => ({
                unit: "exploration" === e.kind ? (0, u.a)(e) : (0, u.b)(e.item, k),
                hasCodexLabel: "exploration" !== e.kind && "mcp-tool-call" === e.item.type && null != (0, d.d)(e.item, n)
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
                    let o, s, u, g, {
                            items: w,
                            toolActivity: k,
                            resolvedApps: z
                        } = e,
                        I = (0, l.b)(w),
                        A = null != I ? [{
                            kind: "web-search",
                            title: I
                        }] : (t = k, n = function(e) {
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
                                    let t = (0, r.a)(e, a);
                                    h(t) && i.add(t.key);
                                    continue
                                }
                                if ("mcp-tool-call" !== e.type) continue;
                                let t = y(e, a);
                                !(null == t || (0, m.g)(t.key)) && v(e, a) && i.add(t.key)
                            }
                            let o = n.filter(e => !(0, m.g)(e.key));
                            return [...o.filter(e => i.has(e.key)), ...o.filter(e => !i.has(e.key))]
                        }({
                            items: w,
                            sources: k.mcpToolCallSources,
                            resolvedApps: z
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
                        }(w, z), o = [], n.length > 0 && o.push({
                            kind: "mcp-sources",
                            sources: n
                        }), f(o, {
                            kind: "loaded-tools",
                            count: t.loadedToolCount
                        }), s = t.mcpToolCallSources.reduce((e, t) => e + t.count, 0), f(o, {
                            kind: "unnamed-mcp-calls",
                            count: t.mcpToolCallCount - s
                        }), f(o, {
                            kind: "file-changes",
                            count: t.createdFileCount + t.editedFileCount + t.deletedFileCount - t.stoppedCreatedFileCount
                        }), f(o, {
                            kind: "stopped-file-creation",
                            count: t.stoppedCreatedFileCount
                        }), (t.exploredFileCount > 0 || t.searchCount > 0 || t.listCount > 0) && o.push({
                            kind: "exploration"
                        }), null != t.visualizationActivity && o.push({
                            kind: "visualization",
                            activity: t.visualizationActivity
                        }), u = t.mcpToolCallSources.reduce((e, t) => e + ((0, m.g)(t.key) ? t.count : 0), 0), g = t.completedWebSearchCommandCount + t.runningWebSearchCommandCount, f(o, {
                            kind: "commands",
                            count: t.commandCount - t.completedVisualizationCommandCount - t.runningVisualizationCommandCount + u - g
                        }), (t.webSearchCount > 0 || g > 0) && o.push({
                            kind: "web-search"
                        }), o.push(...i), o);
                    return {
                        summaryParts: A,
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
                                        return "mcp-tool-call" === n.type && y(n, i)?.key === e && v(n, i)
                                    }) ?? n.find(t => {
                                        let {
                                            item: n
                                        } = t;
                                        return "mcp-tool-call" === n.type && y(n, i)?.key === e && n.source?.kind === "browserUse" && n.result?.type === "success" && null != (0, m.c)(n.result.raw._meta)
                                    }) ?? n.find(t => {
                                        let {
                                            item: n
                                        } = t;
                                        return "mcp-tool-call" === n.type && y(n, i)?.key === e
                                    }) ?? n.find(t => {
                                        let {
                                            item: n
                                        } = t;
                                        return "external-event" === n.type && (0, r.a)(n, i).key === e
                                    }) ?? null
                                }
                                case "unnamed-mcp-calls":
                                    return n.find(e => {
                                        let {
                                            item: t
                                        } = e;
                                        return "mcp-tool-call" === t.type && !(0, a.bi)(t.invocation.server) && null == y(t, i)
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
                                        return "mcp-tool-call" === (t = n).type ? (0, a.bi)(t.invocation.server) : "exec" === t.type && !(0, c.a)(t) && !C(t) && !b(t)
                                    }) ?? null;
                                case "web-search":
                                    return n.find(e => {
                                        let {
                                            item: t
                                        } = e;
                                        return b(t)
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
                            firstPart: A[0],
                            items: w,
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
            c = n("DKJJ");

        function d(e) {
            let {
                includeGeneratedImages: t = !1,
                mcpServerStatuses: n,
                groupStartItems: a,
                groupAcrossSubagentActivity: i = !1
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = e.flatMap((i, r) => {
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
            });
            return (0, r.d)(o, i)
        }

        function p(e, t) {
            let n = e.findLastIndex(e => "standalone" !== e.kind || "assistant-message" !== e.item.item.type || (0, s.c)(e.item.item));
            return e.filter((e, a) => "group" !== e.kind || t && a === n || e.items.some(v))
        }

        function m(e, t) {
            let n = [],
                r = null;
            for (let o of e) {
                let {
                    item: e
                } = o, s = null;
                "groupable" === o.grouping && "external-event" === e.type ? s = (0, i.b)(e) : "groupable" !== o.grouping || "mcp-tool-call" !== e.type || !e.completed || null != e.source || "computer-use" === e.invocation.server || e.result?.type !== "success" || e.automaticApprovalReviews?.length || (0, c.h)({
                    isCodexAppsServer: (0, a.e)(e.invocation.server),
                    result: e.result
                }) || (s = JSON.stringify([e.invocation.server, e.invocation.tool, e.functionName, e.pluginId, e.appContext?.connectorId, e.appContext?.linkId, e.invocationResourceUri, t(e)]));
                let l = n.at(-1);
                null != s && s === r && null != l ? l.push(o) : n.push([o]), r = s
            }
            return n
        }

        function g(e, t) {
            let n = e.items[0];
            return "summary" !== t.kind || 1 !== e.items.length || v(n) || "patch" === n.item.type && (1 !== Object.keys(n.item.changes).length || (n.item.visualizationActivities?.length ?? 0) > 0) ? e : {
                kind: "standalone",
                key: e.key,
                item: n
            }
        }

        function f(e) {
            let {
                unit: t,
                isLatestVisibleUnit: n,
                isTurnInProgress: a,
                isActivitySliceClosed: i,
                isExploring: r
            } = e;
            if (!(n && a && !i)) return {
                kind: "summary"
            };
            if (r) {
                let e = function(e) {
                    let t = null;
                    for (let n = e.items.length - 1; n >= 0; n -= 1) {
                        let a = e.items[n];
                        if (a?.item.type !== "exec" || !(0, o.a)(a.item)) {
                            if (null != t) break;
                            continue
                        }
                        if (null == t && (t = a), v(a)) return a
                    }
                    return t
                }(t);
                if (null != e) return {
                    kind: "active",
                    item: e
                }
            }
            for (let e = t.items.length - 1; e >= 0; e -= 1) {
                let n = t.items[e];
                if (null != n && v(n)) {
                    if ("automatic-approval-review" === n.item.type) return {
                        kind: "thinking"
                    };
                    return {
                        kind: "active",
                        item: n
                    }
                }
            }
            return {
                kind: "thinking"
            }
        }

        function v(e) {
            switch (e.item.type) {
                case "exec":
                    return "interrupted" !== e.item.executionStatus && !e.item.parsedCmd.isFinished;
                case "automatic-approval-review":
                    return "inProgress" === e.item.status;
                case "dynamic-tool-call":
                case "mcp-tool-call":
                case "web-search":
                    return !e.item.completed;
                case "patch":
                    return null == e.item.success;
                case "dil-reasoning":
                case "assistant-message":
                case "auto-review-interruption-warning":
                case "context-compaction":
                case "external-event":
                case "generated-image":
                case "image-view":
                case "mcp-server-elicitation":
                case "multi-agent-action":
                case "realtime-transcript":
                case "stream-error":
                case "strict-review-notice":
                case "subagent-activity":
                case "system-error":
                case "user-input-response":
                case "user-message":
                case "worked-for":
                case "worktree-init":
                    return (0, u.a)(e.item)
            }
        }
        n.d(t, {
            a: () => f,
            b: () => r.a,
            c: () => d,
            d: () => g,
            e: () => r.c,
            f: () => m,
            g: () => p
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

        function g(e) {
            let {
                mcpServerStatuses: t,
                resolvedApps: n = [],
                shouldKeepMcpAppToolCallsExpandedByDefault: r,
                modelProvider: d = null,
                isTurnCancelled: p = !1
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
                        r = 0,
                        o = [],
                        s = [],
                        l = [],
                        c = [];
                    for (let [u, d] of Object.entries(e.changes)) {
                        if ("add" === d.type) {
                            n.push(u), null == e.success && t ? i.push(u) : null == e.success && (a.push(u), r += function(e) {
                                let t = 0 === e.length || e.endsWith("\n") ? 0 : 1;
                                for (let n = e.indexOf("\n"); - 1 !== n; n = e.indexOf("\n", n + 1)) t += 1;
                                return t
                            }(d.content));
                            continue
                        }
                        if ("delete" === d.type) {
                            l.push(u), null == e.success && c.push(u);
                            continue
                        }
                        o.push(u), null == e.success && s.push(u)
                    }
                    return {
                        type: "patch",
                        createdPaths: n,
                        runningCreatedPaths: a,
                        stoppedCreatedPaths: i,
                        runningCreatedLineCount: r,
                        editedPaths: o,
                        runningEditedPaths: s,
                        deletedPaths: l,
                        runningDeletedPaths: c,
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
                }(e, p),
                ...h(e.automaticApprovalReviews)
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
                    s = h(e.automaticApprovalReviews);
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
                source: (0, l.d)({
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
            } : "reasoning" === e.type || "todo-list" === e.type || "worked-for" === e.type || "multi-agent-action" === e.type || "proposed-plan" === e.type || "realtime-transcript" === e.type || "user-message" === e.type || "userInput" === e.type || "user-input-response" === e.type || "mcp-server-elicitation" === e.type || "permission-request" === e.type || "turn-diff" === e.type || "plan-implementation" === e.type || "system-error" === e.type || "steered" === e.type || "stream-error" === e.type || "subagent-activity" === e.type || "remote-task-created" === e.type || "context-compaction" === e.type || "personality-changed" === e.type || "forked-from-conversation" === e.type || "model-changed" === e.type || "model-rerouted" === e.type || "auto-review-interruption-warning" === e.type || "strict-review-notice" === e.type || "assistant-message" === e.type || "dil-reasoning" === e.type || "generated-image" === e.type || "image-view" === e.type || "automation-update" === e.type || "dynamic-tool-call" === e.type || "worktree-init" === e.type ? {
                type: "other"
            } : (0, i.a)(e)
        }

        function f(e) {
            if (!/^\s*curl(?:\s|$)/.test(e) || d.test(e) || p.test(e) || m.test(e)) return !1;
            let t = e.match(/\bhttps?:\/\/[^\s'"<>]+/gi);
            return null != t && t.some(v)
        }

        function v(e) {
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

        function y(e) {
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
                ...h(t)
            }
        }
        n.d(t, {
            a: () => y,
            b: () => g,
            c: () => f
        })
    }),
    hNWF: (function(e, t, n) {
        function a(e) {
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
        n.d(t, {
            a: () => a
        })
    }),
    N3ow: (function(e, t, n) {
        var a = n("i6Xw"),
            i = n("iXTs");
        let r = "codex-followup";

        function o(e) {
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
        n.d(t, {
            b: () => o
        }, {
            a: r
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

        function c(e) {
            let {
                dynamicToolCallRenderer: t,
                includeGeneratedImages: n = !1,
                mcpServerStatuses: i
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            switch (e.type) {
                case "external-event":
                    return p(e, "groupable");
                case "exec":
                case "patch":
                    return p(m(e), (0, r.d)(e) ? "standalone" : "groupable");
                case "mcp-tool-call":
                    return p(m(e), (0, s.a)(e) || (0, o.a)({
                        item: e,
                        mcpServerStatuses: i
                    }) ? "standalone" : "groupable");
                case "web-search":
                    return 0 === e.query.trim().length ? null : p(e, "groupable");
                case "dynamic-tool-call": {
                    let n = t ?? (0, u.c)(e);
                    if (n?.hiddenInConversation === !0) return null;
                    return p(e, n?.standaloneInConversation === !0 ? "standalone" : "groupable")
                }
                case "generated-image":
                    return n ? p(e, "standalone") : null;
                case "image-view":
                    return p(e, "standalone");
                case "mcp-server-elicitation":
                    if (!e.completed || "unsupportedOpenAIForm" === e.elicitation.kind) return null;
                    return p(e, "legacyOpenAIForm" === e.elicitation.kind && Object.values(e.elicitation.schema.properties).some(a.b) ? "groupable" : "standalone");
                case "automatic-approval-review":
                    switch (e.status) {
                        case "approved":
                            return null;
                        case "inProgress":
                            return p(e, "groupable");
                        case "aborted":
                        case "denied":
                        case "timedOut":
                            return p(e, "standalone")
                    }
                case "dil-reasoning":
                case "assistant-message":
                case "auto-review-interruption-warning":
                case "context-compaction":
                case "multi-agent-action":
                case "realtime-transcript":
                case "stream-error":
                case "strict-review-notice":
                case "subagent-activity":
                case "system-error":
                case "user-input-response":
                case "user-message":
                case "worked-for":
                case "worktree-init":
                    return p(e, "standalone");
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
        }

        function d(e, t) {
            return !!("exec" === e.type && (0, i.e)(e.executionStatus)) && null != (0, i.b)(e.parsedCmd.cmd) && t?.type === "patch" && null != t.visualizationActivities && t.visualizationActivities.length > 0 || "exec" === e.type && "read" === e.parsedCmd.type && (0, i.d)((0, l.a)({
                summary: e.parsedCmd,
                cwd: e.cwd
            }))
        }

        function p(e, t) {
            return {
                item: e,
                grouping: t
            }
        }

        function m(e) {
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
        n.d(t, {
            a: () => c,
            b: () => d
        })
    }),
    acby: (function(e, t, n) {
        n.d(t, {
            a: () => el,
            b: () => ed,
            c: () => es,
            d: () => eu,
            e: () => ec
        });
        var a = n("ABep"),
            i = n("on57"),
            r = n("JGl5"),
            o = n("PFi3"),
            s = n("oyxz"),
            l = n("HOLv"),
            u = n("Bbed"),
            c = n("umSm"),
            d = n("o6bI"),
            p = n("xK3D");
        let m = (0, u.a)(() => Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(985769)]).then(n.bind(n, "h4yf")).then(e => e.EnvironmentSetupPrototypeResultCard)),
            g = [r.a, null].map(e => ({
                namespace: e,
                render: f,
                renderAgentActivityIcon: () => (0, a.jsx)(l.a, {
                    className: "shrink-0 text-text/60",
                    "aria-hidden": !1,
                    asset: p.a
                }),
                persistentInCollapsedConversation: !0,
                standaloneInConversation: !0,
                tool: o.b
            }));

        function f(e, t, n) {
            let r, u = o.f.safeParse(e.arguments);
            return u.success ? "row" === t && e.completed && !1 !== e.success ? (0, a.jsx)(m, {
                details: u.data
            }) : (r = e.completed ? !1 === e.success ? (0, a.jsx)(s.a, {
                id: "restricted.environmentSetup.result.failed",
                defaultMessage: "Couldn’t prepare environment draft",
                description: "Activity shown when an environment draft could not be finalized"
            }) : (0, a.jsx)(s.a, {
                id: "restricted.environmentSetup.result.completed",
                defaultMessage: "Prepared environment draft",
                description: "Activity shown when an environment draft has been finalized"
            }) : (0, a.jsx)(s.a, {
                id: "restricted.environmentSetup.result.finalizing",
                defaultMessage: "Preparing environment draft",
                description: "Activity shown while an environment draft is being finalized"
            }), (0, a.jsxs)(d.a, {
                className: (0, i.b)("text-size-chat text-text/40", "row" === t ? "group-hover:text-default" : "group-hover/activity-header:text-default"),
                children: ["summary-text" !== t ? n ?? (0, a.jsx)(l.a, {
                    className: "shrink-0 text-text/60",
                    "aria-hidden": !1,
                    asset: p.a
                }) : null, (0, a.jsx)(c.a, {
                    active: !e.completed,
                    children: r
                })]
            })) : null
        }
        var v = n("o0PZ"),
            h = n("bVzl"),
            y = n("MCYz"),
            C = n("ASxG"),
            x = n("wls5"),
            b = n("TL6G"),
            w = n("BI7J"),
            k = n("DYB3"),
            z = n("IIsu"),
            I = n("xLft");
        let A = C.object({
                destinationHostId: C.string().min(1).optional(),
                threadId: C.string().min(1)
            }),
            P = C.object({
                operationId: C.string().min(1)
            }),
            S = C.object({
                threadId: C.string().min(1)
            }),
            j = [{
                namespace: r.a,
                render: _,
                renderAgentActivityIcon: T,
                tool: y.f
            }, {
                namespace: r.a,
                render: _,
                renderAgentActivityIcon: T,
                tool: y.d
            }, {
                getCompletedSummaryPartKey: function(e) {
                    let t = A.safeParse(e.arguments);
                    return t.success ? JSON.stringify([t.data.threadId, t.data.destinationHostId ?? null]) : null
                },
                namespace: r.a,
                render: function(e, t, n) {
                    return A.safeParse(e.arguments).success ? (0, a.jsx)(I.a, {
                        agentActivityIcon: n,
                        item: e,
                        variant: t
                    }) : null
                },
                renderAgentActivityIcon: T,
                standaloneInConversation: !0,
                tool: h.c
            }, {
                getCompletedSummaryPartKey: function(e) {
                    let t = P.safeParse(e.arguments);
                    return t.success ? t.data.operationId : null
                },
                namespace: r.a,
                render: _,
                renderAgentActivityIcon: T,
                summaryOnlyInConversationGroup: !0,
                tool: h.b
            }, {
                continuesLiveActivityBetweenCalls: !0,
                namespace: r.a,
                render: _,
                renderAgentActivityIcon: T,
                tool: y.l
            }, {
                continuesLiveActivityBetweenCalls: !0,
                namespace: r.a,
                render: _,
                renderAgentActivityIcon: T,
                tool: y.n
            }, {
                namespace: r.a,
                render: _,
                renderAgentActivityIcon: T,
                tool: y.p
            }, {
                namespace: r.a,
                render: _,
                renderAgentActivityIcon: T,
                tool: y.t
            }, {
                namespace: r.a,
                render: _,
                renderAgentActivityIcon: T,
                tool: y.r
            }, {
                namespace: r.a,
                render: _,
                renderAgentActivityIcon: T,
                tool: y.x
            }];

        function T(e) {
            return (0, k.c)(e)?.icon ?? null
        }

        function _(e, t, n) {
            var r;
            let o, l, u = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                p = (0, k.c)(e, u);
            if (null == p) return null;
            let m = e.tool === y.d && e.completed && !0 === e.success && "row" === t ? (r = e.contentItems ?? null, null == (o = r?.find(e => "inputText" === e.type)?.text) ? null : (0, v.lj)(o)) : null,
                g = "row" === t && (e.tool === y.n || e.tool === y.p) ? S.safeParse(e.arguments) : null,
                f = g?.success === !0 ? g.data.threadId : null;
            null != m ? l = e => (0, z.a)(e, m) : null != f && (l = () => {
                let e = (0, v.Le)(f);
                b.c.dispatchHostMessage({
                    type: "navigate-to-route",
                    path: (0, x.c)() ? (0, v.Zd)(e) : (0, v._d)(e)
                })
            });
            let h = "row" === t && void 0 !== n,
                C = h ? "summary-text" : t,
                I = (0, a.jsxs)(d.a, {
                    className: (0, i.b)("text-size-chat", "row" === C ? "text-text-tertiary/90" : "text-text/40 group-hover/activity-header:text-default"),
                    children: ["summary-text" !== C ? T(e) : null, (0, a.jsx)(c.a, {
                        active: !e.completed,
                        className: (0, i.b)("summary-text" !== C && "min-w-0 truncate", null != l && "group-hover:!text-default"),
                        children: (0, a.jsx)(s.a, {
                            ...p.message,
                            values: p.values
                        })
                    })]
                }),
                A = null == l ? I : (0, a.jsx)("button", {
                    type: "button",
                    className: "group max-w-full cursor-interaction rounded-md text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                    onClick: l,
                    children: I
                });
            return h ? (0, a.jsx)(w.a, {
                icon: n,
                summary: A
            }) : A
        }
        let L = j.filter(e => {
            let {
                tool: t
            } = e;
            return "create_thread" === t
        }).map(e => ({
            ...e,
            namespace: null
        }));
        var F = n("tmkO");
        let N = [r.a, null].map(e => ({
            namespace: e,
            tool: F.a,
            hiddenInConversation: !0
        }));
        var M = n("ScoF"),
            U = n("Y3sT"),
            W = n("uWou"),
            R = n("JEy9");
        let O = {
                namespace: r.a,
                tool: U.b,
                getActivityMessage: (e, t) => (0, W.a)({
                    tool: e.tool,
                    toolArguments: e.arguments,
                    completed: e.completed,
                    isLeadingSummaryPart: t
                }),
                renderAgentActivityIcon: (e, t) => (0, R.b)(e.tool, e.arguments, t),
                getCompletedSummaryPartKey: e => (0, W.a)({
                    tool: e.tool,
                    toolArguments: e.arguments,
                    completed: !0
                })?.id ?? null
            },
            B = [O, {
                ...O,
                tool: M.b
            }, {
                ...O,
                tool: "read_artifact"
            }];
        var E = n("Tbby"),
            J = n("QosV"),
            q = n("T0Rc"),
            $ = n("Qgfj"),
            H = n("C2tN"),
            D = n("d9Qn");

        function K(e) {
            let t, n, r, o, l, u, p = (0, J.c)(25),
                {
                    item: m,
                    isLeadingSummaryPart: g,
                    tabId: f,
                    variant: v,
                    agentActivityIcon: h
                } = e,
                y = void 0 === g || g,
                {
                    data: C
                } = Z(m, f),
                x = C?.faviconUrl ?? null,
                b = C?.title ?? null;
            if (null != b) {
                let e;
                p[0] !== y || p[1] !== m.completed || p[2] !== b ? (e = m.completed ? (0, a.jsx)(s.a, {
                    ...y ? Q.completedWithTitle : Q.completedWithTitleFollowing,
                    values: {
                        title: b
                    }
                }) : (0, a.jsx)(s.a, {
                    ...Q.activeWithTitle,
                    values: {
                        title: b
                    }
                }), p[0] = y, p[1] = m.completed, p[2] = b, p[3] = e) : e = p[3], t = e
            } else {
                let e;
                p[4] !== y || p[5] !== m.completed ? (e = m.completed ? (0, a.jsx)(s.a, {
                    ...y ? Q.completed : Q.completedFollowing
                }) : (0, a.jsx)(s.a, {
                    ...Q.active
                }), p[4] = y, p[5] = m.completed, p[6] = e) : e = p[6], t = e
            }
            let k = !m.completed,
                z = "summary-text" !== v && "min-w-0 truncate";
            p[7] !== z ? (n = (0, i.b)(z), p[7] = z, p[8] = n) : n = p[8], p[9] !== t || p[10] !== k || p[11] !== n ? (r = (0, a.jsx)(c.a, {
                active: k,
                className: n,
                children: t
            }), p[9] = t, p[10] = k, p[11] = n, p[12] = r) : r = p[12];
            let I = r;
            if ("row" === v && void 0 !== h) {
                let e;
                return p[13] !== h || p[14] !== I ? (e = (0, a.jsx)(w.a, {
                    icon: h,
                    summary: I
                }), p[13] = h, p[14] = I, p[15] = e) : e = p[15], e
            }
            let A = "row" === v ? "text-text-tertiary/90" : "text-text/40 group-hover/activity-header:text-default";
            return p[16] !== A ? (o = (0, i.b)("text-size-chat", A), p[16] = A, p[17] = o) : o = p[17], p[18] !== x || p[19] !== v ? (l = "summary-text" !== v && null != x ? (0, a.jsx)(D.a, {
                src: x,
                className: "icon-xs text-tertiary",
                showFallbackWhileLoading: !1
            }) : null, p[18] = x, p[19] = v, p[20] = l) : l = p[20], p[21] !== I || p[22] !== o || p[23] !== l ? (u = (0, a.jsxs)(d.a, {
                className: o,
                children: [l, I]
            }), p[21] = I, p[22] = o, p[23] = l, p[24] = u) : u = p[24], u
        }

        function V(e) {
            let t, n = (0, J.c)(2),
                {
                    item: i,
                    tabId: r
                } = e,
                {
                    data: o
                } = Z(i, r);
            return n[0] !== o ? (t = o?.faviconUrl == null ? null : (0, a.jsx)(D.a, {
                src: o.faviconUrl,
                className: "icon-xs text-tertiary",
                showFallbackWhileLoading: !1
            }), n[0] = o, n[1] = t) : t = n[1], t
        }

        function Z(e, t) {
            let n, a, i, r = (0, J.c)(9),
                o = !e.completed;
            return r[0] !== t ? (n = () => G(t), r[0] = t, r[1] = n) : n = r[1], r[2] !== e.callId || r[3] !== t ? (a = ["chrome-tab-context-tool-call-metadata", e.callId, t], r[2] = e.callId, r[3] = t, r[4] = a) : a = r[4], r[5] !== o || r[6] !== n || r[7] !== a ? (i = {
                enabled: o,
                queryFn: n,
                queryKey: a,
                staleTime: 1 / 0
            }, r[5] = o, r[6] = n, r[7] = a, r[8] = i) : i = r[8], (0, q.a)(i)
        }
        async function G(e) {
            let t = (0, H.a)();
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
        }
        let Q = (0, $.f)({
                completedWithTitle: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.completedWithTitle",
                    defaultMessage: 'Read "{title}"',
                    description: "Completed label for reading the contents of a Chrome tab with a known page title."
                },
                completedWithTitleFollowing: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.completedWithTitle.following",
                    defaultMessage: 'read "{title}"',
                    description: "Non-leading completed label for reading the contents of a Chrome tab with a known page title in an agent activity summary"
                },
                activeWithTitle: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.activeWithTitle",
                    defaultMessage: 'Reading "{title}"',
                    description: "In-progress label for reading the contents of a Chrome tab with a known page title."
                },
                completed: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.completed",
                    defaultMessage: "Read tab",
                    description: "Completed label for reading the contents of a Chrome tab."
                },
                completedFollowing: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.completed.following",
                    defaultMessage: "read tab",
                    description: "Non-leading completed label for reading the contents of a Chrome tab in an agent activity summary"
                },
                active: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.active",
                    defaultMessage: "Reading tab",
                    description: "In-progress label for reading the contents of a Chrome tab."
                }
            }),
            Y = C.strictObject({
                tabId: C.number().int().nonnegative()
            }),
            X = [{
                getCompletedSummaryPartKey: function(e) {
                    return Y.safeParse(e.arguments).success ? e.callId : null
                },
                namespace: "chrome_extension",
                render: function(e, t, n) {
                    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        r = Y.safeParse(e.arguments);
                    return r.success ? (0, a.jsx)(K, {
                        item: e,
                        isLeadingSummaryPart: i,
                        tabId: r.data.tabId,
                        variant: t,
                        agentActivityIcon: n
                    }) : null
                },
                renderAgentActivityIcon: function(e) {
                    let t = Y.safeParse(e.arguments);
                    return t.success ? (0, a.jsx)(V, {
                        item: e,
                        tabId: t.data.tabId
                    }) : null
                },
                tool: E.b
            }];
        var ee = n("YZPM"),
            et = n("IK0f");
        let en = C.object({
                config: C.object({})
            }),
            ea = [{
                namespace: r.a,
                render: er,
                renderAgentActivityIcon: ei,
                tool: ee.b
            }, {
                namespace: r.a,
                render: er,
                renderAgentActivityIcon: ei,
                tool: ee.d
            }];

        function ei() {
            return (0, a.jsx)(l.a, {
                className: "shrink-0 text-text/60",
                "aria-hidden": !1,
                asset: et.a
            })
        }

        function er(e, t, n) {
            let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                o = (0, k.c)(e, r);
            if (null == o) return null;
            let l = !e.completed && e.tool === ee.d && en.safeParse(e.arguments).success ? (0, a.jsx)(s.a, {
                id: "localConversation.settingsToolCall.write.waitingForApproval",
                defaultMessage: "Waiting for approval",
                description: "In-progress label while a Codex configuration change is waiting for user approval."
            }) : (0, a.jsx)(s.a, {
                ...o.message,
                values: o.values
            });
            return "row" === t && void 0 !== n ? (0, a.jsx)(w.a, {
                icon: n,
                summary: (0, a.jsx)(c.a, {
                    active: !e.completed,
                    className: "min-w-0 truncate",
                    children: l
                })
            }) : (0, a.jsxs)(d.a, {
                className: (0, i.b)("text-size-chat", "row" === t ? "text-text-tertiary/90" : "text-text/40 group-hover/activity-header:text-default"),
                children: ["summary-text" !== t ? ei() : null, (0, a.jsx)(c.a, {
                    active: !e.completed,
                    className: (0, i.b)("summary-text" !== t && "min-w-0 truncate"),
                    children: l
                })]
            })
        }
        let eo = [...X, ...j, ...L, ...g, ...ea, ...N, ...B];

        function es(e) {
            return eo.find(t => t.namespace === e.namespace && t.tool === e.tool)
        }

        function el(e) {
            return es(e)?.continuesLiveActivityBetweenCalls === !0
        }

        function eu(e) {
            return es(e)?.persistentInCollapsedConversation === !0
        }

        function ec(e) {
            return es(e)?.summaryOnlyInConversationGroup === !0
        }

        function ed(e) {
            let t = (0, k.c)(e),
                n = es(e)?.getCompletedSummaryPartKey?.(e);
            return `${e.namespace}:${e.tool}:${n??""}:${t?.key??""}`
        }
    }),
    eCUJ: (function(e, t, n) {
        function a(e) {
            if (!e) return !1;
            switch (e.type) {
                case "user-message":
                case "external-event":
                case "realtime-transcript":
                case "turn-diff":
                case "system-error":
                case "stream-error":
                case "steered":
                case "remote-task-created":
                case "personality-changed":
                case "forked-from-conversation":
                case "model-changed":
                case "model-rerouted":
                case "auto-review-interruption-warning":
                case "strict-review-notice":
                case "automation-update":
                case "plan-implementation":
                case "worked-for":
                case "generated-image":
                case "worktree-init":
                case "subagent-activity":
                case "image-view":
                    return !1;
                case "context-compaction":
                case "automatic-approval-review":
                case "multi-agent-action":
                    return "inProgress" === e.status;
                case "dil-reasoning":
                case "assistant-message":
                case "proposed-plan":
                case "reasoning":
                case "mcp-tool-call":
                case "dynamic-tool-call":
                case "web-search":
                case "userInput":
                case "user-input-response":
                case "mcp-server-elicitation":
                case "permission-request":
                    return !e.completed;
                case "exec":
                    return !e.parsedCmd.isFinished;
                case "patch":
                    return null == e.success;
                case "todo-list":
                    return e.plan.some(e => "completed" !== e.status)
            }
        }
        n.d(t, {
            a: () => a
        })
    }),
    IIsu: (function(e, t, n) {
        var a = n("o0PZ"),
            i = n("jAnS");
        n("Ot7V");
        var r = n("TL6G");

        function o(e, t) {
            let n;
            "chatgpt" === t.kind ? n = (0, i.c)("clientThreadId" in t ? t.clientThreadId : t.threadId) : "clientThreadId" in t ? n = (0, a._d)(t.clientThreadId) : n = (0, a._d)((0, a.Le)(t.threadId)), r.c.dispatchHostMessage({
                type: "navigate-to-route",
                path: n
            })
        }
        n.d(t, {
            a: () => o
        })
    }),
    xLft: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            r = n("on57"),
            o = n("iTtm"),
            s = n("oyxz"),
            l = n("ASxG"),
            u = n("f5n5"),
            c = n("eeyJ"),
            d = n("J0Jr"),
            p = n("DYB3"),
            m = n("umSm"),
            g = n("o6bI"),
            f = n("r9ev");
        let v = l.object({
            destinationHostDisplayName: l.string().min(1),
            operationId: l.string().min(1),
            status: l.enum(["queued", "running", "success", "warning", "error"]),
            threadTitle: l.string().min(1)
        });

        function h(e) {
            let t, n, l, h, C = (0, i.c)(25),
                {
                    agentActivityIcon: x,
                    item: b,
                    operation: w,
                    variant: k
                } = e,
                z = null != b && b.completed && !0 === b.success ? function(e) {
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
                I = null == w ? z?.operationId ?? b.callId : w.id,
                A = (0, o.x)(u.a, I),
                P = w ?? A,
                S = null == P ? null == z ? b?.completed ?? !1 : (0, u.b)(z.status) : (0, u.b)(P.status),
                j = null == P ? b?.success : "error" !== P.status && ("success" === P.status || "warning" === P.status),
                T = "running";
            S && (T = !1 === j ? "failed" : "completed"), C[0] !== b ? (t = null == b ? null : (0, p.c)(b), C[0] = b, C[1] = t) : t = C[1];
            let _ = t;
            C[2] !== _?.icon ? (n = _?.icon ?? (0, a.jsx)(d.a, {
                className: "icon-xs shrink-0 text-text/60"
            }), C[2] = _?.icon, C[3] = n) : n = C[3];
            let L = n,
                F = null;
            if (null != _) {
                let e;
                C[4] !== _.message || C[5] !== _.values ? (e = (0, a.jsx)(s.a, {
                    ..._.message,
                    values: _.values
                }), C[4] = _.message, C[5] = _.values, C[6] = e) : e = C[6], F = e
            } else if (null != w) {
                let e;
                C[7] !== w ? (e = (0, a.jsx)(y, {
                    operation: w
                }), C[7] = w, C[8] = e) : e = C[8], F = e
            }
            if ("row" !== k) {
                let e, t, n, i = "summary-text" !== k ? L : null,
                    o = null == b ? !S : !b.completed,
                    s = "summary-text" !== k && "min-w-0 truncate";
                return C[9] !== s ? (e = (0, r.b)(s), C[9] = s, C[10] = e) : e = C[10], C[11] !== F || C[12] !== o || C[13] !== e ? (t = (0, a.jsx)(m.a, {
                    active: o,
                    className: e,
                    children: F
                }), C[11] = F, C[12] = o, C[13] = e, C[14] = t) : t = C[14], C[15] !== i || C[16] !== t ? (n = (0, a.jsxs)(g.a, {
                    className: "text-size-chat text-text/40 group-hover/activity-header:text-default",
                    children: [i, t]
                }), C[15] = i, C[16] = t, C[17] = n) : n = C[17], n
            }
            let N = x ?? L;
            return C[18] !== P ? (l = P?.steps.map(e => (0, a.jsx)(c.a, {
                compact: !0,
                direction: P.direction,
                localBranch: P.localBranch,
                sourceBranch: P.sourceBranch,
                step: e,
                worktreeBranch: P.worktreeBranch
            }, e.id)), C[18] = P, C[19] = l) : l = C[19], C[20] !== T || C[21] !== F || C[22] !== N || C[23] !== l ? (h = (0, a.jsx)(f.a, {
                indentContent: !1,
                icon: N,
                status: T,
                summary: F,
                children: l
            }), C[20] = T, C[21] = F, C[22] = N, C[23] = l, C[24] = h) : h = C[24], h
        }

        function y(e) {
            let t, n, r = (0, i.c)(10),
                {
                    operation: o
                } = e;
            r[0] !== o ? (t = (0, a.jsx)(C, {
                operation: o
            }), r[0] = o, r[1] = t) : t = r[1];
            let l = t;
            if ("queued" === o.status || "running" === o.status) {
                let e;
                return r[2] !== l ? (e = (0, a.jsx)(s.a, {
                    id: "localConversation.threadHandoff.inline.active",
                    defaultMessage: "Handing off to {destination}",
                    description: "In-progress label for handing the current task to another run location",
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
                    description: "Failed label for handing the current task to another run location",
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
                    description: "Warning label for handing the current task to another run location",
                    values: {
                        destination: l
                    }
                }), r[6] = l, r[7] = e) : e = r[7], e
            }
            return r[8] !== l ? (n = (0, a.jsx)(s.a, {
                id: "localConversation.threadHandoff.inline.completed",
                defaultMessage: "Handed off to {destination}",
                description: "Completed label for handing the current task to another run location",
                values: {
                    destination: l
                }
            }), r[8] = l, r[9] = n) : n = r[9], n
        }

        function C(e) {
            let t, n = (0, i.c)(4),
                {
                    operation: r
                } = e;
            if ("to-local" === r.direction) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                    id: "localConversation.threadHandoff.inline.destination.local",
                    defaultMessage: "local",
                    description: "Destination noun used in an inline task handoff status"
                }), n[0] = e) : e = n[0], e
            }
            if ("to-worktree" === r.direction) {
                let e;
                return n[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                    id: "localConversation.threadHandoff.inline.destination.worktree",
                    defaultMessage: "worktree",
                    description: "Destination noun used in an inline task handoff status"
                }), n[1] = e) : e = n[1], e
            }
            return n[2] !== r.request.destinationLabel ? (t = (0, a.jsx)(a.Fragment, {
                children: r.request.destinationLabel
            }), n[2] = r.request.destinationLabel, n[3] = t) : t = n[3], t
        }
        n.d(t, {
            a: () => h
        })
    }),
    tHoD: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            r = n("on57");

        function o(e) {
            let t, n, o, s, l, u, c, d = (0, i.c)(15);
            d[0] !== e ? ({
                ref: o,
                className: t,
                indent: s,
                variant: l,
                ...n
            } = e, d[0] = e, d[1] = t, d[2] = n, d[3] = o, d[4] = s, d[5] = l) : (t = d[1], n = d[2], o = d[3], s = d[4], l = d[5]);
            let p = void 0 === l ? "default" : l,
                m = "default" === p && "gap-2 pt-2 pb-1",
                g = "grouped" === p && "gap-[var(--conversation-grouped-item-gap,4px)] pt-1",
                f = void 0 !== s && s && "ps-6";
            return d[6] !== t || d[7] !== m || d[8] !== g || d[9] !== f ? (u = (0, r.b)("flex flex-col", m, g, f, t), d[6] = t, d[7] = m, d[8] = g, d[9] = f, d[10] = u) : u = d[10], d[11] !== n || d[12] !== o || d[13] !== u ? (c = (0, a.jsx)("div", {
                ref: o,
                className: u,
                ...n
            }), d[11] = n, d[12] = o, d[13] = u, d[14] = c) : c = d[14], c
        }
        n.d(t, {
            a: () => o
        })
    }),
    r9ev: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            r = n("IPUh"),
            o = n("zd8w"),
            s = n("V8uZ"),
            l = n("ltPT"),
            u = n("BI7J"),
            c = n("umSm"),
            d = n("tHoD");

        function p(e) {
            let t, n, p, m, g, f = (0, i.c)(25),
                {
                    defaultExpanded: v,
                    indentContent: h,
                    icon: y,
                    onExpand: C,
                    summary: x,
                    status: b,
                    children: w
                } = e,
                k = void 0 === h || h,
                [z, I] = (0, o.useState)(!1),
                [A, P] = (0, o.useState)(void 0 !== v && v),
                {
                    elementHeightPx: S,
                    elementRef: j
                } = (0, l.a)(),
                T = "running" === b,
                _ = null != w,
                L = _ && (T ? !z : A);
            f[0] !== z || f[1] !== A || f[2] !== L || f[3] !== T || f[4] !== C ? (t = () => {
                L || C?.(), T ? I(!z) : P(!A)
            }, f[0] = z, f[1] = A, f[2] = L, f[3] = T, f[4] = C, f[5] = t) : t = f[5];
            let F = t;
            f[6] !== T || f[7] !== x ? (n = (0, a.jsx)(c.a, {
                active: T,
                className: "min-w-0 truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                children: x
            }), f[6] = T, f[7] = x, f[8] = n) : n = f[8];
            let N = n;
            f[9] !== F || f[10] !== _ || f[11] !== L ? (p = _ ? {
                expanded: L,
                onToggle: F
            } : void 0, f[9] = F, f[10] = _, f[11] = L, f[12] = p) : p = f[12];
            let M = p;
            f[13] !== w || f[14] !== S || f[15] !== j || f[16] !== k || f[17] !== _ || f[18] !== L ? (m = _ ? (0, a.jsx)(r.a.div, {
                initial: !1,
                animate: {
                    height: L ? S : 0,
                    opacity: +!!L
                },
                "aria-hidden": !L,
                inert: !L,
                className: L ? "overflow-visible" : "overflow-hidden",
                style: {
                    pointerEvents: L ? "auto" : "none"
                },
                transition: s.a,
                children: (0, a.jsx)(d.a, {
                    ref: j,
                    indent: k,
                    children: w
                })
            }) : null, f[13] = w, f[14] = S, f[15] = j, f[16] = k, f[17] = _, f[18] = L, f[19] = m) : m = f[19];
            let U = m;
            return f[20] !== U || f[21] !== M || f[22] !== y || f[23] !== N ? (g = (0, a.jsx)(u.a, {
                body: U,
                disclosure: M,
                icon: y,
                summary: N
            }), f[20] = U, f[21] = M, f[22] = y, f[23] = N, f[24] = g) : g = f[24], g
        }
        n.d(t, {
            a: () => p
        })
    }),
    qYBv: (function(e, t, n) {
        var a = n("KJ1J"),
            i = n("E2ja"),
            r = n("DKJJ");

        function o(e) {
            let {
                item: t,
                mcpServerStatuses: n
            } = e;
            if (!0 === t.isMcpAppWidgetSuperseded || t.completed && null == t.result) return "not-mcp-app";
            if ((0, i.b)(t)?.type === "chatgpt-automation") return "mcp-app";
            let a = t.result?.type === "success" ? t.result.raw : null;
            return null != t.mcpAppResourceUri || null != (0, r.b)({
                mcpServerStatuses: n,
                server: t.invocation.server,
                tool: t.invocation.tool,
                toolResult: a
            }) ? "mcp-app" : null == a ? "not-mcp-app" : null == n ? "maybe-mcp-app" : "not-mcp-app"
        }

        function s(e) {
            let {
                item: t,
                mcpServerStatuses: n
            } = e;
            return "mcp-app" === o({
                item: t,
                mcpServerStatuses: n
            }) && !(0, r.h)({
                isCodexAppsServer: (0, a.e)(t.invocation.server),
                result: t.result
            })
        }

        function l(e) {
            let {
                item: t,
                mcpServerStatuses: n
            } = e;
            return "not-mcp-app" !== o({
                item: t,
                mcpServerStatuses: n
            }) && !(0, r.h)({
                isCodexAppsServer: (0, a.e)(t.invocation.server),
                result: t.result
            })
        }

        function u(e) {
            return e.some(e => "item" === e.kind && "mcp-tool-call" === e.item.type && (e.item.result?.type === "success" || !e.item.completed && null == e.item.result && null == e.item.mcpAppResourceUri))
        }
        n.d(t, {
            a: () => s,
            b: () => l,
            c: () => u
        })
    }),
    t7eZ: (function(e, t, n) {
        function a(e) {
            return e.result?.type === "error" && "MCP tool call requires approval, but approval policy is never" === e.result.error
        }
        n.d(t, {
            a: () => a
        })
    }),
    EeZ9: (function(e, t, n) {
        var a = n("WZ8M"),
            i = n.n(a),
            r = n("hNWF"),
            o = n("NQNw"),
            s = n("eCUJ"),
            l = n("Z2lA");

        function u(e) {
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
                    var g;
                    if (!("exec" !== (g = n).type || !(0, r.a)(g) || "read" === g.parsedCmd.type && !g.parsedCmd.isFinished && (0, l.b)({
                            summary: g.parsedCmd,
                            cwd: g.cwd
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
        n.d(t, {
            a: () => u
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
            } = e;
            return s({
                summary: t,
                cwd: n
            })?.isSkillDefinitionFile === !0
        }

        function s(e) {
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
                        return l({
                            path: t.path ?? t.name,
                            cwd: n
                        });
                    case "list_files":
                    case "search":
                        if (!t.path) return null;
                        return l({
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

        function l(e) {
            let {
                path: t,
                cwd: n
            } = e;
            if (!t) return null;
            let r = (0, i.a)(t);
            return 0 === r.length ? null : null != n ? (0, i.a)((0, a.s)(n, r)) : r
        }
        n.d(t, {
            a: () => s,
            b: () => o
        })
    }),
    ltPT: (function(e, t, n) {
        var a = n("QosV"),
            i = n("zd8w"),
            r = n("nsuH");

        function o() {
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
        n.d(t, {
            a: () => o
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
            i = n("nkvA"),
            r = n("FY2Y"),
            o = n("GzMg"),
            s = n("QyWZ"),
            l = n("f9PI"),
            u = n("IMdp"),
            c = n("CQ7N"),
            d = n("GxtJ"),
            p = n("qWeG"),
            m = n("GUV3"),
            g = n("WCQc"),
            f = n("JtCa"),
            v = n("cuJP"),
            h = n("TfEe"),
            y = n("ASxG"),
            C = n("HOLv"),
            x = n("xmjg"),
            b = n("alO6"),
            w = n("Hkqr"),
            k = n("wE2l");
        let z = new Map([
                ["list_spaces", x.a],
                ["get_space", x.a],
                ["create_space", f.a],
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
                ["get_page_sharing", g.a],
                ["get_space_sharing", g.a],
                ["update_page_sharing", d.a],
                ["update_space_sharing", d.a]
            ]),
            I = y.object({
                action: y.string()
            });

        function A(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = z.get(e);
            if ("manage_page_comment" === e) {
                let e = I.safeParse(t);
                e.success && "resolve" === e.data.action ? i = r.a : e.success && "react" === e.data.action && (i = c.a)
            }
            return null == i ? null : (0, a.jsx)(C.a, {
                className: "shrink-0 text-text/60",
                asset: n ? x.a : i
            })
        }

        function P(e, t) {
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
            return null == r ? null : A((0, b.d)({
                matchingApp: r,
                toolName: e.appContext?.actionName ?? e.invocation.tool
            }), e.invocation.arguments, n) ?? (0, a.jsx)(C.a, {
                className: "shrink-0 text-text/60",
                asset: x.a
            })
        }
        n.d(t, {
            a: () => P,
            b: () => A
        })
    }),
    wS4d: (function(e, t, n) {
        function a(e) {
            throw Error(`Unexpected value: ${String(e)}`)
        }
        n.d(t, {
            a: () => a
        })
    }),
    XSLO: (function(e, t, n) {
        var a = n("o0PZ"),
            i = n("Qgfj"),
            r = n("EULo");
        let o = /(?:^|[\\/])visualizations(?:[\\/"'\s;]|$)/i,
            s = /(?:^|\s)(?:apply_patch|mkdir|tee|touch|cp|mv|install)(?:\s|$)|(?:^|[^<])>>?/,
            l = /\*\*\* Add File:[^\r\n]*[\\/]visualizations(?:[\\/"'\s;]|$)/i,
            u = /\*\*\* Update File:[^\r\n]*[\\/]visualizations(?:[\\/"'\s;]|$)/i,
            c = /\*\*\* Delete File:[^\r\n]*[\\/]visualizations(?:[\\/"'\s;]|$)/i,
            d = `${a.kb}@${a.Tc}`,
            p = `${a.kb}@${a.Uc}`,
            m = `${a.kb}@${a.Vc}`,
            g = /^plugin:\/\/([^?]+)(?:\?|$)/i,
            f = /\b(?:visuals?|visuali[sz](?:e|ed|es|er|ers|ing|ations?)|(?:flow)?charts?|plot(?:s|ted|ting)?|graphs?|diagrams?|maps?|simulat(?:e|ed|es|ing|ions?|ors?)|labs?|compar(?:e|ed|es|ing|isons?)|scenarios?|explor(?:e|ed|es|ing|ations?)|interactive|adjustable[-\s]+inputs?)\b|\bshow\s+(?:(?:me|us)\s+)?how\b/i,
            v = (0, i.f)({
                activeCreating: {
                    id: "codex.visualization.activity.active.creating",
                    defaultMessage: "<action>Creating</action> <detail>visualization</detail>",
                    description: "Active tool activity summary while Codex creates an inline visualization"
                },
                activeUpdating: {
                    id: "codex.visualization.activity.active.updating",
                    defaultMessage: "<action>Updating</action> <detail>visualization</detail>",
                    description: "Active tool activity summary while Codex updates an inline visualization"
                },
                rowCreating: {
                    id: "codex.visualization.activity.row.creating",
                    defaultMessage: "<verb>Creating</verb> visualization",
                    description: "Tool activity row while Codex creates an inline visualization"
                },
                rowCreated: {
                    id: "codex.visualization.activity.row.created",
                    defaultMessage: "<verb>Created</verb> visualization",
                    description: "Tool activity row after Codex creates an inline visualization"
                },
                rowUpdating: {
                    id: "codex.visualization.activity.row.updating",
                    defaultMessage: "<verb>Updating</verb> visualization",
                    description: "Tool activity row while Codex updates an inline visualization"
                },
                rowUpdated: {
                    id: "codex.visualization.activity.row.updated",
                    defaultMessage: "<verb>Updated</verb> visualization",
                    description: "Tool activity row after Codex updates an inline visualization"
                },
                summaryCreatingLeading: {
                    id: "codex.visualization.activity.summary.creating.leading",
                    defaultMessage: "Creating visualization",
                    description: "Leading collapsed tool activity summary while Codex creates an inline visualization"
                },
                summaryCreating: {
                    id: "codex.visualization.activity.summary.creating",
                    defaultMessage: "creating visualization",
                    description: "Collapsed tool activity summary while Codex creates an inline visualization"
                },
                summaryCreatedLeading: {
                    id: "codex.visualization.activity.summary.created.leading",
                    defaultMessage: "Created visualization",
                    description: "Leading collapsed tool activity summary after Codex creates an inline visualization"
                },
                summaryCreated: {
                    id: "codex.visualization.activity.summary.created",
                    defaultMessage: "created visualization",
                    description: "Collapsed tool activity summary after Codex creates an inline visualization"
                },
                summaryUpdatingLeading: {
                    id: "codex.visualization.activity.summary.updating.leading",
                    defaultMessage: "Updating visualization",
                    description: "Leading collapsed tool activity summary while Codex updates an inline visualization"
                },
                summaryUpdating: {
                    id: "codex.visualization.activity.summary.updating",
                    defaultMessage: "updating visualization",
                    description: "Collapsed tool activity summary while Codex updates an inline visualization"
                },
                summaryUpdatedLeading: {
                    id: "codex.visualization.activity.summary.updated.leading",
                    defaultMessage: "Updated visualization",
                    description: "Leading collapsed tool activity summary after Codex updates an inline visualization"
                },
                summaryUpdated: {
                    id: "codex.visualization.activity.summary.updated",
                    defaultMessage: "updated visualization",
                    description: "Collapsed tool activity summary after Codex updates an inline visualization"
                }
            });

        function h(e) {
            return o.test(e) && s.test(e) ? l.test(e) ? "create" : u.test(e) ? "update" : c.test(e) ? null : "create" : null
        }

        function y(e) {
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
        }

        function C(e) {
            return e?.isSkillDefinitionFile === !0 && ("visualize" === e.skillId.toLowerCase() || e.pluginId?.toLowerCase() === "visualize" && ("live" === e.skillId.toLowerCase() || "persisted" === e.skillId.toLowerCase()))
        }

        function x(e, t) {
            let n = [e];
            for (let e of t) "userMessage" === e.type && n.push(e.content), "steeringUserMessage" === e.type && "accepted" === e.status && n.push(e.input);
            let a = !1;
            for (let e of n)
                for (let t of e) {
                    if ("text" !== t.type) continue;
                    f.test(t.text) && (a = !0);
                    let e = 0;
                    for (; e < t.text.length;) {
                        let n = (0, r.a)(t.text, e);
                        if (null == n) break;
                        let a = g.exec((0, r.c)(n.path))?.[1]?.trim().toLowerCase();
                        if (a === d || a === p || a === m) return "explicit";
                        e = n.end
                    }
                }
            return a ? "soft" : "none"
        }

        function b(e) {
            let {
                intl: t,
                kind: n,
                isFinished: a,
                isLeadingSegment: i
            } = e;
            switch (n) {
                case "create":
                    if (a) return i ? t.formatMessage(v.summaryCreatedLeading) : t.formatMessage(v.summaryCreated);
                    return i ? t.formatMessage(v.summaryCreatingLeading) : t.formatMessage(v.summaryCreating);
                case "update":
                    if (a) return i ? t.formatMessage(v.summaryUpdatedLeading) : t.formatMessage(v.summaryUpdated);
                    return i ? t.formatMessage(v.summaryUpdatingLeading) : t.formatMessage(v.summaryUpdating)
            }
        }
        n.d(t, {
            a: () => b,
            b: () => h,
            c: () => x,
            d: () => C,
            e: () => y
        }, {
            f: v
        })
    })
};