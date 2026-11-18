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
            l = n("T1PX"),
            s = n("V8uZ");
        n.d(t, {}, {
            a: function(e) {
                let t, n, u, c, d = (0, i.c)(15),
                    {
                        expanded: p,
                        height: m,
                        onExpandComplete: f,
                        children: g
                    } = e,
                    v = (0, l.a)(),
                    h = p ? m : 0,
                    y = +!!p;
                d[0] !== h || d[1] !== y ? (t = {
                    height: h,
                    opacity: y
                }, d[0] = h, d[1] = y, d[2] = t) : t = d[2], d[3] !== v ? (n = v ? {
                    duration: 0
                } : s.a, d[3] = v, d[4] = n) : n = d[4];
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
    cKhh: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            r = n("zd8w"),
            o = n("A7Ss"),
            l = n("wbOy"),
            s = n("ltPT"),
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
                        unmountOnCollapse: I
                    } = e,
                    A = void 0 === y || y,
                    P = void 0 !== I && I,
                    [S, z] = (0, r.useState)(!1),
                    [j, T] = (0, r.useState)(void 0 !== h && h),
                    {
                        elementHeightPx: _,
                        elementRef: L
                    } = (0, s.a)(),
                    F = "running" === w,
                    N = null != k,
                    M = N && (F ? !S : j);
                v[0] !== S || v[1] !== j || v[2] !== M || v[3] !== F || v[4] !== x ? (t = () => {
                    M || x?.(), F ? z(!S) : T(!j)
                }, v[0] = S, v[1] = j, v[2] = M, v[3] = F, v[4] = x, v[5] = t) : t = v[5];
                let U = t;
                v[6] !== F || v[7] !== b ? (n = (0, a.jsx)(l.a, {
                    active: F,
                    className: "min-w-0 truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                    children: b
                }), v[6] = F, v[7] = b, v[8] = n) : n = v[8];
                let O = n;
                v[9] !== U || v[10] !== N || v[11] !== M ? (d = N ? {
                    expanded: M,
                    onToggle: U
                } : void 0, v[9] = U, v[10] = N, v[11] = M, v[12] = d) : d = v[12];
                let W = d,
                    R = P ? void 0 : L;
                v[13] !== k || v[14] !== A || v[15] !== R ? (p = (0, a.jsx)(c.a, {
                    ref: R,
                    indent: A,
                    children: k
                }), v[13] = k, v[14] = A, v[15] = R, v[16] = p) : p = v[16];
                let q = p;
                v[17] !== C || v[18] !== O ? (m = {
                    icon: C,
                    summary: O
                }, v[17] = C, v[18] = O, v[19] = m) : m = v[19];
                let B = m;
                if (P || null == W) {
                    let e, t;
                    return v[20] !== q || v[21] !== W ? (e = W && {
                        ...W,
                        details: q
                    }, v[20] = q, v[21] = W, v[22] = e) : e = v[22], v[23] !== B || v[24] !== e ? (t = (0, a.jsx)(u.a, {
                        ...B,
                        disclosure: e
                    }), v[23] = B, v[24] = e, v[25] = t) : t = v[25], t
                }
                v[26] !== q || v[27] !== _ || v[28] !== M ? (f = (0, a.jsx)(o.a, {
                    expanded: M,
                    height: _,
                    children: q
                }), v[26] = q, v[27] = _, v[28] = M, v[29] = f) : f = v[29];
                let E = f;
                return v[30] !== E || v[31] !== W || v[32] !== B ? (g = (0, a.jsx)(u.a, {
                    ...B,
                    body: E,
                    externalDisclosure: W
                }), v[30] = E, v[31] = W, v[32] = B, v[33] = g) : g = v[33], g
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
            let t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                a = [],
                r = [],
                o = 0,
                l = () => {
                    let e = r[0];
                    null != e && (a.push({
                        kind: "group",
                        key: `agent-activity-group:${i(e,o)}`,
                        items: [e, ...r.slice(1)],
                        ...null == t ? {} : {
                            phase: t
                        }
                    }), r = [])
                };
            for (let {
                    activityItem: s,
                    sourceIndex: u,
                    startsGroup: c
                }
                of e) {
                let e = n && "activityPhase" in s.item ? s.item.activityPhase : void 0;
                if ((c || e?.id !== t?.id) && l(), t = e, "groupable" === s.grouping) {
                    0 === r.length && (o = u), r.push(s);
                    continue
                }
                l();
                let d = a.at(-1);
                ("strict-review-notice" !== s.item.type || d?.kind !== "standalone" || "strict-review-notice" !== d.item.item.type) && a.push({
                    kind: "standalone",
                    key: `agent-activity-standalone:${i(s,u)}`,
                    item: s
                })
            }
            return l(), a
        }

        function i(e, t) {
            let n = e.item;
            return "mcp-tool-call" === n.type && null != n.deferredOutputTurnId ? JSON.stringify([n.threadId, n.deferredOutputTurnId, n.callId]) : "assistant-message" === n.type && null != n.searchItemId ? n.searchItemId : "browser-completion" === n.type ? `browser-completion:${n.id}` : "id" in n && "string" == typeof n.id ? n.id : "callId" in n && "string" == typeof n.callId ? n.callId : "requestId" in n && "string" == typeof n.requestId ? n.requestId : "handoffId" in n && "string" == typeof n.handoffId ? n.handoffId : `${n.type}:${t}`
        }
        n.d(t, {}, {
            a: i,
            b: function(e) {
                let t = 1 === e.length ? e[0]?.item : void 0;
                return t?.type === "web-search" ? t.title : void 0
            },
            c: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return a(e.map((e, t) => ({
                    activityItem: e,
                    sourceIndex: t,
                    startsGroup: !1
                })), t)
            },
            d: a
        })
    }),
    zUHW: (function(e, t, n) {
        n.d(t, {
            a: () => S
        });
        var a = n("Zqzr"),
            i = n("KJ1J"),
            r = n("USdi"),
            o = n("LdAY"),
            l = n("mJQs"),
            s = n("udV3"),
            u = n("RSI4"),
            c = n("hNWF"),
            d = n("DYB3"),
            p = n("acby"),
            m = n("LF5P"),
            f = n("Z2lA");

        function g(e, t) {
            t.count > 0 && e.push(t)
        }

        function v(e, t) {
            if (null != e.pluginId && !(0, i.f)(e.invocation.server)) return !0;
            let n = y(e, t);
            return null != n && h(n)
        }

        function h(e) {
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
            return "patch" === e.type && null != (0, l.c)(e.visualizationActivities)
        }

        function x(e) {
            return "exec" === e.type && "read" === e.parsedCmd.type && (0, f.b)({
                summary: e.parsedCmd,
                cwd: e.cwd
            })
        }

        function b(e) {
            return "web-search" === e.type || "exec" === e.type && !!(0, u.c)(e.parsedCmd.cmd) && (!e.parsedCmd.isFinished || e.output?.exitCode === 0)
        }
        var w = n("EeZ9"),
            k = n("wS4d");

        function I(e) {
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
                        for (let n of (A(e, t.automaticApprovalReviewFailures), t.readPaths)) e.exploredPaths.add(n);
                        for (let n of t.runningReadPaths) e.runningExploredPaths.add(n);
                        for (let n of t.loadedToolPaths) e.loadedToolPaths.add(n);
                        for (let n of t.runningLoadedToolPaths) e.runningLoadedToolPaths.add(n);
                        e.searchCount += t.searchCount, e.runningSearchCount += t.runningSearchCount, e.listCount += t.listCount, e.runningListCount += t.runningListCount;
                        return
                    }
                    if ("patch" === t.type) {
                        for (let n of (A(e, t.automaticApprovalReviewFailures), t.createdPaths)) e.createdPaths.add(n);
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
                        if (A(e, t.automaticApprovalReviewFailures), e.commandCount += 1, t.isInProgress) {
                            e.runningCommandCount += 1, !0 === t.createsFolder && (e.runningFolderCreationCommandCount += 1), !0 === t.searchesWeb && (e.runningWebSearchCommandCount += 1);
                            return
                        }!0 === t.searchesWeb && (e.completedWebSearchCommandCount += 1);
                        return
                    }
                    if ("automatic-approval-review" === t.type) return P(e, t);
                    if ("mcp-tool-call" === t.type) {
                        if (A(e, t.automaticApprovalReviewFailures), e.mcpToolCallCount += 1, null != t.source) {
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

        function A(e, t) {
            for (let n of t ?? []) P(e, n)
        }

        function P(e, t) {
            if (!e.automaticApprovalReviewFailureIds.has(t.id)) switch (e.automaticApprovalReviewFailureIds.add(t.id), t.status) {
                case "denied":
                    e.deniedRequestCount += 1;
                    return;
                case "timedOut":
                    e.timedOutRequestCount += 1;
                    return
            }
        }

        function S(e) {
            let {
                mcpServerStatuses: t,
                resolvedApps: n = [],
                modelProvider: i,
                isTurnCancelled: l = !1
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, f = e.map(e => {
                let {
                    item: t
                } = e;
                return t
            }), {
                renderableAgentItems: k
            } = (0, w.a)({
                agentItems: f,
                isTurnInProgress: !1,
                isAnyNonAgentItemInProgress: !1
            }), A = {
                mcpServerStatuses: t,
                resolvedApps: n,
                modelProvider: i,
                isTurnCancelled: l
            }, P = k.map(e => ({
                unit: "exploration" === e.kind ? (0, u.a)(e) : (0, u.b)(e.item, A),
                hasCodexLabel: "exploration" !== e.kind && "mcp-tool-call" === e.item.type && null != (0, d.d)(e.item, n)
            })), S = I(P.map(e => {
                let {
                    unit: t
                } = e;
                return t
            })), z = P.some(e => {
                let {
                    hasCodexLabel: t
                } = e;
                return t
            }) ? I(P.filter(e => {
                let {
                    hasCodexLabel: t
                } = e;
                return !t
            }).map(e => {
                let {
                    unit: t
                } = e;
                return t
            })) : S;
            return {
                toolActivity: S,
                completedHeader: function(e) {
                    var t, n, i;
                    let l, u, f, w, {
                            items: k,
                            toolActivity: I,
                            resolvedApps: A
                        } = e,
                        P = (0, s.b)(k),
                        S = null != P ? [{
                            kind: "web-search",
                            title: P
                        }] : (t = I, n = function(e) {
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
                                    h(t) && i.add(t.key);
                                    continue
                                }
                                if ("mcp-tool-call" !== e.type) continue;
                                let t = y(e, a);
                                !(null == t || (0, m.f)(t.key)) && v(e, a) && i.add(t.key)
                            }
                            let r = n.filter(e => !(0, m.f)(e.key));
                            return [...r.filter(e => i.has(e.key)), ...r.filter(e => !i.has(e.key))]
                        }({
                            items: k,
                            sources: I.mcpToolCallSources,
                            resolvedApps: A
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
                        }(k, A), l = [], n.length > 0 && l.push({
                            kind: "mcp-sources",
                            sources: n
                        }), g(l, {
                            kind: "loaded-tools",
                            count: t.loadedToolCount
                        }), u = t.mcpToolCallSources.reduce((e, t) => e + t.count, 0), g(l, {
                            kind: "unnamed-mcp-calls",
                            count: t.mcpToolCallCount - u
                        }), g(l, {
                            kind: "file-changes",
                            count: t.createdFileCount + t.editedFileCount + t.deletedFileCount - t.stoppedCreatedFileCount
                        }), g(l, {
                            kind: "stopped-file-creation",
                            count: t.stoppedCreatedFileCount
                        }), (t.exploredFileCount > 0 || t.searchCount > 0 || t.listCount > 0) && l.push({
                            kind: "exploration"
                        }), null != t.visualizationActivity && l.push({
                            kind: "visualization",
                            activity: t.visualizationActivity
                        }), f = t.mcpToolCallSources.reduce((e, t) => e + ((0, m.f)(t.key) ? t.count : 0), 0), w = t.completedWebSearchCommandCount + t.runningWebSearchCommandCount, g(l, {
                            kind: "commands",
                            count: t.commandCount + f - w
                        }), (t.webSearchCount > 0 || w > 0) && l.push({
                            kind: "web-search"
                        }), l.push(...i), l);
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
                                        return "mcp-tool-call" === n.type && y(n, i)?.key === e && v(n, i)
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
                                        return "mcp-tool-call" === t.type && !(0, a.ri)(t.invocation.server) && null == y(t, i)
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
                                        return "mcp-tool-call" === (t = n).type ? (0, a.ri)(t.invocation.server) : "exec" === t.type && !(0, c.a)(t) && !C(t) && !b(t)
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
                            firstPart: S[0],
                            items: k,
                            resolvedApps: A
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
            l = n("MJjm"),
            s = n("NQNw"),
            u = n("eCUJ"),
            c = n("acxW");

        function d(e) {
            let {
                includeGeneratedImages: t = !1,
                mcpServerStatuses: n,
                groupStartItems: a,
                activityPhasesEnabled: i = !1
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = e.flatMap((e, i) => {
                if ((0, s.b)(e)) return [];
                let r = (0, s.a)(e, {
                    includeGeneratedImages: t,
                    mcpServerStatuses: n
                });
                return null == r ? [] : [{
                    activityItem: r,
                    sourceIndex: i,
                    startsGroup: a?.has(e) === !0
                }]
            }), l = 1 === o.length ? o[0].activityItem.item : null;
            return l?.type === "worked-for" && "worked" === l.status ? [] : (0, r.d)(o, i)
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
                isTurnInProgress: l,
                isActivitySliceClosed: s,
                isExploring: u
            } = e;
            if (!(n && l && !s)) return {
                kind: "summary"
            };
            if (i && null != a) return a;
            let c = a ?? {
                    kind: "between-tools"
                },
                d = t.items.findLast(e => v(e));
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

        function g(e) {
            return e.findLast(e => "group" === e.kind ? e.items.some(e => v(e)) : v(e.item))
        }

        function v(e) {
            return "automatic-approval-review" !== e.item.type && ("assistant-message" !== e.item.type || (0, l.c)(e.item)) && f(e)
        }
        n.d(t, {
            a: () => m,
            b: () => r.a,
            c: () => d,
            d: () => g,
            e: () => p,
            f: () => r.c
        }, {
            g: function(e, t) {
                let n = [],
                    r = null;
                for (let o of e) {
                    let {
                        item: e
                    } = o, l = null;
                    if ("groupable" === o.grouping && "external-event" === e.type) l = (0, i.b)(e);
                    else if ("groupable" === o.grouping && "mcp-tool-call" === e.type && e.completed && null == e.source && "computer-use" !== e.invocation.server && e.result?.type === "success" && !e.automaticApprovalReviews?.length && !(0, c.a)({
                            isCodexAppsServer: (0, a.f)(e.invocation.server),
                            result: e.result
                        })) {
                        let n = t(e);
                        null != n && (l = JSON.stringify([e.invocation.server, e.invocation.tool, e.functionName, e.pluginId, e.appContext?.connectorId, e.appContext?.linkId, e.invocationResourceUri, n]))
                    }
                    let s = n.at(-1);
                    null != l && l === r && null != s ? s.push(o) : n.push([o]), r = l
                }
                return n
            },
            h: function(e, t) {
                let n = e.findLastIndex(e => "standalone" !== e.kind || "assistant-message" !== e.item.item.type || (0, l.c)(e.item.item));
                return e.filter((e, a) => "group" !== e.kind || t && a === n || e.items.some(f))
            },
            i: f,
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
            o = n("qYBv"),
            l = n("LF5P"),
            s = n("ivPw"),
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

        function g(e) {
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
                    l = 0,
                    c = 0,
                    d = 0,
                    p = 0;
                for (let m of e.items)
                    if ("exec" === m.type) {
                        if (t.push(...m.automaticApprovalReviews ?? []), "search" === m.parsedCmd.type) {
                            l += 1, m.parsedCmd.isFinished || (c += 1);
                            continue
                        }
                        if ("list_files" === m.parsedCmd.type) {
                            d += 1, m.parsedCmd.isFinished || (p += 1);
                            continue
                        }
                        if ("read" === m.parsedCmd.type) {
                            let e = function(e, t) {
                                let n = (0, s.a)(e);
                                return null == t ? n : (0, s.a)((0, r.s)(t, n))
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
                    searchCount: l,
                    runningSearchCount: c,
                    listCount: d,
                    runningListCount: p,
                    ...g(t)
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
                            l = [],
                            u = [];
                        for (let [s, c] of Object.entries(e.changes)) {
                            if ("add" === c.type) {
                                n.push(s), null == e.success && t ? i.push(s) : null == e.success && a.push(s);
                                continue
                            }
                            if ("delete" === c.type) {
                                l.push(s), null == e.success && u.push(s);
                                continue
                            }
                            r.push(s), null == e.success && o.push(s)
                        }
                        return {
                            type: "patch",
                            createdPaths: n,
                            runningCreatedPaths: a,
                            stoppedCreatedPaths: i,
                            editedPaths: r,
                            runningEditedPaths: o,
                            deletedPaths: l,
                            runningDeletedPaths: u,
                            visualizationActivity: null == e.visualizationActivities || !1 === e.success || null == e.success && t ? void 0 : {
                                activities: e.visualizationActivities.map(e => {
                                    let {
                                        path: t,
                                        kind: n
                                    } = e;
                                    return {
                                        path: (0, s.a)(t),
                                        kind: n
                                    }
                                }),
                                isInProgress: null == e.success
                            }
                        }
                    }(e, c),
                    ...g(e.automaticApprovalReviews)
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
                        r = g(e.automaticApprovalReviews);
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
                if ("mcp-tool-call" === e.type) return (0, o.a)({
                    item: e,
                    mcpServerStatuses: t
                }) || !0 === r && (0, o.b)({
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
                    ...g(e.automaticApprovalReviews)
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
                } : "reasoning" === e.type || "browser-completion" === e.type || "todo-list" === e.type || "worked-for" === e.type || "multi-agent-action" === e.type || "proposed-plan" === e.type || "realtime-transcript" === e.type || "user-message" === e.type || "userInput" === e.type || "user-input-response" === e.type || "mcp-server-elicitation" === e.type || "permission-request" === e.type || "turn-diff" === e.type || "plan-implementation" === e.type || "system-error" === e.type || "steered" === e.type || "stream-error" === e.type || "subagent-activity" === e.type || "remote-task-created" === e.type || "context-compaction" === e.type || "personality-changed" === e.type || "forked-from-conversation" === e.type || "model-changed" === e.type || "model-rerouted" === e.type || "auto-review-interruption-warning" === e.type || "strict-review-notice" === e.type || "assistant-message" === e.type || "dil-reasoning" === e.type || "generated-image" === e.type || "image-view" === e.type || "automation-update" === e.type || "dynamic-tool-call" === e.type || "worktree-init" === e.type ? {
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
                    l = new WeakSet;
                return (0, a.h)((0, i.a)(e, void 0), i => {
                    if (l.has(i)) return;
                    if ("code" === i.type || "codespan" === i.type) {
                        let t = e.indexOf(i.raw, o); - 1 !== t && (o = t + i.raw.length);
                        return
                    }
                    if ("codexDirective" !== i.type || !("name" in i) || i.name !== r || !("text" in i) || "string" != typeof i.text) return;
                    let s = e.indexOf(i.raw, o); - 1 !== s && (t += e.slice(n, s) + i.text, o = n = s + i.raw.length, "tokens" in i && Array.isArray(i.tokens) && (0, a.h)(i.tokens, e => {
                        l.add(e)
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
            l = n("t7eZ"),
            s = n("Z2lA"),
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
                        return c(d(e), (0, l.a)(e) || (0, o.a)({
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
                    case "browser-completion":
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
                return "exec" === e.type && "read" === e.parsedCmd.type && (0, i.c)((0, s.a)({
                    summary: e.parsedCmd,
                    cwd: e.cwd
                }))
            }
        })
    }),
    acby: (function(e, t, n) {
        n.d(t, {
            a: () => eo,
            b: () => eu,
            c: () => er,
            d: () => el,
            e: () => es
        });
        var a = n("ABep"),
            i = n("on57"),
            r = n("JGl5"),
            o = n("PFi3"),
            l = n("oyxz"),
            s = n("dqpP"),
            u = n("HOLv"),
            c = n("Bbed"),
            d = n("wbOy"),
            p = n("qf3G");
        let m = (0, c.a)(() => Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(275420)]).then(n.bind(n, "yCum")).then(e => e.EnvironmentSetupPrototypeResultCard)),
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
            }) : (r = e.completed ? !1 === e.success ? (0, a.jsx)(l.a, {
                id: "restricted.environmentSetup.result.failed",
                defaultMessage: "Couldn’t prepare environment draft"
            }) : (0, a.jsx)(l.a, {
                id: "restricted.environmentSetup.result.completed",
                defaultMessage: "Prepared environment draft"
            }) : (0, a.jsx)(l.a, {
                id: "restricted.environmentSetup.result.finalizing",
                defaultMessage: "Preparing environment draft"
            }), (0, a.jsxs)(s.a, {
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
        var v = n("Zqzr"),
            h = n("bVzl"),
            y = n("MCYz"),
            C = n("ASxG"),
            x = n("TL6G"),
            b = n("MFk9"),
            w = n("DYB3"),
            k = n("IIsu"),
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
            z = [{
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
                renderAgentActivityIcon: j,
                standaloneInConversation: !0,
                tool: h.c
            }, {
                getCompletedSummaryPartKey: function(e) {
                    let t = P.safeParse(e.arguments);
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
            let m = e.tool === y.d && e.completed && !0 === e.success && "row" === t ? (r = e.contentItems ?? null, null == (o = r?.find(e => "inputText" === e.type)?.text) ? null : (0, v.Gj)(o)) : null,
                f = "row" === t && (e.tool === y.r || e.tool === y.t) ? S.safeParse(e.arguments) : null,
                g = f?.success === !0 ? f.data.threadId : null;
            null != m ? u = e => (0, k.a)(e, m) : null != g && (u = () => {
                let e = (0, v.Se)(g);
                x.c.dispatchHostMessage({
                    type: "navigate-to-route",
                    path: (0, v.ce)(e)
                })
            });
            let h = "row" === t && void 0 !== n,
                C = h ? "summary-text" : t,
                I = (0, a.jsxs)(s.a, {
                    className: (0, i.b)("text-size-chat", "row" === C ? "text-text-tertiary/90" : "text-text/40 group-hover/activity-header:text-default"),
                    children: ["summary-text" !== C ? j(e) : null, (0, a.jsx)(d.a, {
                        active: !e.completed,
                        className: (0, i.b)("summary-text" !== C && "min-w-0 truncate", null != u && "group-hover:!text-default"),
                        children: (0, a.jsx)(l.a, {
                            ...p.message,
                            values: p.values
                        })
                    })]
                }),
                A = null == u ? I : (0, a.jsx)("button", {
                    type: "button",
                    className: "group max-w-full cursor-interaction rounded-md text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                    onClick: u,
                    children: I
                });
            return h ? (0, a.jsx)(b.a, {
                icon: n,
                summary: A
            }) : A
        }
        let _ = z.filter(e => {
            let {
                tool: t
            } = e;
            return "create_thread" === t
        }).map(e => ({
            ...e,
            namespace: null
        }));
        var L = n("tmkO");
        let F = [r.a, null].map(e => ({
            namespace: e,
            tool: L.a,
            hiddenInConversation: !0
        }));
        var N = n("ScoF"),
            M = n("Y3sT"),
            U = n("uWou"),
            O = n("JEy9");
        let W = {
                namespace: r.a,
                tool: M.b,
                getActivityMessage: (e, t) => (0, U.a)({
                    tool: e.tool,
                    toolArguments: e.arguments,
                    completed: e.completed,
                    isLeadingSummaryPart: t
                }),
                renderAgentActivityIcon: (e, t) => (0, O.b)(e.tool, e.arguments, t),
                getCompletedSummaryPartKey: e => (0, U.a)({
                    tool: e.tool,
                    toolArguments: e.arguments,
                    completed: !0
                })?.id ?? null
            },
            R = [W, {
                ...W,
                tool: N.b
            }, {
                ...W,
                tool: "read_artifact"
            }];
        var q = n("Tbby"),
            B = n("QosV"),
            E = n("T0Rc"),
            H = n("Qgfj"),
            $ = n("C2tN"),
            J = n("d9Qn");

        function D(e) {
            let t, n, r, o, u, c, p = (0, B.c)(25),
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
                } = Z(m, g),
                x = C?.faviconUrl ?? null,
                w = C?.title ?? null;
            if (null != w) {
                let e;
                p[0] !== y || p[1] !== m.completed || p[2] !== w ? (e = m.completed ? (0, a.jsx)(l.a, {
                    ...y ? Q.completedWithTitle : Q.completedWithTitleFollowing,
                    values: {
                        title: w
                    }
                }) : (0, a.jsx)(l.a, {
                    ...Q.activeWithTitle,
                    values: {
                        title: w
                    }
                }), p[0] = y, p[1] = m.completed, p[2] = w, p[3] = e) : e = p[3], t = e
            } else {
                let e;
                p[4] !== y || p[5] !== m.completed ? (e = m.completed ? (0, a.jsx)(l.a, {
                    ...y ? Q.completed : Q.completedFollowing
                }) : (0, a.jsx)(l.a, {
                    ...Q.active
                }), p[4] = y, p[5] = m.completed, p[6] = e) : e = p[6], t = e
            }
            let k = !m.completed,
                I = "summary-text" !== v && "min-w-0 truncate";
            p[7] !== I ? (n = (0, i.b)(I), p[7] = I, p[8] = n) : n = p[8], p[9] !== t || p[10] !== k || p[11] !== n ? (r = (0, a.jsx)(d.a, {
                active: k,
                className: n,
                children: t
            }), p[9] = t, p[10] = k, p[11] = n, p[12] = r) : r = p[12];
            let A = r;
            if ("row" === v && void 0 !== h) {
                let e;
                return p[13] !== h || p[14] !== A ? (e = (0, a.jsx)(b.a, {
                    icon: h,
                    summary: A
                }), p[13] = h, p[14] = A, p[15] = e) : e = p[15], e
            }
            let P = "row" === v ? "text-text-tertiary/90" : "text-text/40 group-hover/activity-header:text-default";
            return p[16] !== P ? (o = (0, i.b)("text-size-chat", P), p[16] = P, p[17] = o) : o = p[17], p[18] !== x || p[19] !== v ? (u = "summary-text" !== v && null != x ? (0, a.jsx)(J.a, {
                src: x,
                className: "icon-xs text-tertiary",
                showFallbackWhileLoading: !1
            }) : null, p[18] = x, p[19] = v, p[20] = u) : u = p[20], p[21] !== A || p[22] !== o || p[23] !== u ? (c = (0, a.jsxs)(s.a, {
                className: o,
                children: [u, A]
            }), p[21] = A, p[22] = o, p[23] = u, p[24] = c) : c = p[24], c
        }

        function K(e) {
            let t, n = (0, B.c)(2),
                {
                    item: i,
                    tabId: r
                } = e,
                {
                    data: o
                } = Z(i, r);
            return n[0] !== o ? (t = o?.faviconUrl == null ? null : (0, a.jsx)(J.a, {
                src: o.faviconUrl,
                className: "icon-xs text-tertiary",
                showFallbackWhileLoading: !1
            }), n[0] = o, n[1] = t) : t = n[1], t
        }

        function Z(e, t) {
            let n, a, i, r = (0, B.c)(9),
                o = !e.completed;
            return r[0] !== t ? (n = () => (async function(e) {
                let t = (0, $.a)();
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
            G = C.strictObject({
                tabId: C.number().int().nonnegative()
            }),
            Y = [{
                getCompletedSummaryPartKey: function(e) {
                    return G.safeParse(e.arguments).success ? e.callId : null
                },
                namespace: "chrome_extension",
                render: function(e, t, n) {
                    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        r = G.safeParse(e.arguments);
                    return r.success ? (0, a.jsx)(D, {
                        item: e,
                        isLeadingSummaryPart: i,
                        tabId: r.data.tabId,
                        variant: t,
                        agentActivityIcon: n
                    }) : null
                },
                renderAgentActivityIcon: function(e) {
                    let t = G.safeParse(e.arguments);
                    return t.success ? (0, a.jsx)(K, {
                        item: e,
                        tabId: t.data.tabId
                    }) : null
                },
                tool: q.b
            }];
        var V = n("YZPM"),
            X = n("WPMf");
        let ee = C.object({
                config: C.object({})
            }),
            et = [{
                namespace: r.a,
                render: ea,
                renderAgentActivityIcon: en,
                tool: V.b
            }, {
                namespace: r.a,
                render: ea,
                renderAgentActivityIcon: en,
                tool: V.d
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
            let u = !e.completed && e.tool === V.d && ee.safeParse(e.arguments).success ? (0, a.jsx)(l.a, {
                id: "localConversation.settingsToolCall.write.waitingForApproval",
                defaultMessage: "Waiting for approval"
            }) : (0, a.jsx)(l.a, {
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
            }) : (0, a.jsxs)(s.a, {
                className: (0, i.b)("text-size-chat", "row" === t ? "text-text-tertiary/90" : "text-text/40 group-hover/activity-header:text-default"),
                children: ["summary-text" !== t ? en() : null, (0, a.jsx)(d.a, {
                    active: !e.completed,
                    className: (0, i.b)("summary-text" !== t && "min-w-0 truncate"),
                    children: u
                })]
            })
        }
        let ei = [...Y, ...z, ..._, ...f, ...et, ...F, ...R];

        function er(e) {
            return ei.find(t => t.namespace === e.namespace && t.tool === e.tool)
        }

        function eo(e) {
            return er(e)?.continuesLiveActivityBetweenCalls === !0
        }

        function el(e) {
            return er(e)?.persistentInCollapsedConversation === !0
        }

        function es(e) {
            return er(e)?.summaryOnlyInConversationGroup === !0
        }

        function eu(e) {
            let t = (0, w.c)(e),
                n = er(e)?.getCompletedSummaryPartKey?.(e);
            return `${e.namespace}:${e.tool}:${n??""}:${t?.key??""}`
        }
    }),
    IIsu: (function(e, t, n) {
        var a = n("Zqzr"),
            i = n("jAnS");
        n("Ot7V");
        var r = n("TL6G");
        n.d(t, {}, {
            a: function(e, t) {
                let n;
                "chatgpt" === t.kind ? n = (0, i.c)("clientThreadId" in t ? t.clientThreadId : t.threadId) : "clientThreadId" in t ? n = (0, a.ce)(t.clientThreadId) : n = (0, a.ce)((0, a.Se)(t.threadId)), r.c.dispatchHostMessage({
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
            l = n("oyxz"),
            s = n("ASxG"),
            u = n("f5n5"),
            c = n("eeyJ"),
            d = n("dqpP"),
            p = n("cKhh"),
            m = n("J0Jr"),
            f = n("DYB3"),
            g = n("wbOy");
        let v = s.object({
            destinationHostDisplayName: s.string().min(1),
            operationId: s.string().min(1),
            status: s.enum(["queued", "running", "success", "warning", "error"]),
            threadTitle: s.string().min(1)
        });

        function h(e) {
            let t, n, r = (0, i.c)(10),
                {
                    operation: o
                } = e;
            r[0] !== o ? (t = (0, a.jsx)(y, {
                operation: o
            }), r[0] = o, r[1] = t) : t = r[1];
            let s = t;
            if ("queued" === o.status || "running" === o.status) {
                let e;
                return r[2] !== s ? (e = (0, a.jsx)(l.a, {
                    id: "localConversation.threadHandoff.inline.active",
                    defaultMessage: "Handing off to {destination}",
                    values: {
                        destination: s
                    }
                }), r[2] = s, r[3] = e) : e = r[3], e
            }
            if ("error" === o.status) {
                let e;
                return r[4] !== s ? (e = (0, a.jsx)(l.a, {
                    id: "localConversation.threadHandoff.inline.failed",
                    defaultMessage: "Failed to hand off to {destination}",
                    values: {
                        destination: s
                    }
                }), r[4] = s, r[5] = e) : e = r[5], e
            }
            if ("warning" === o.status) {
                let e;
                return r[6] !== s ? (e = (0, a.jsx)(l.a, {
                    id: "localConversation.threadHandoff.inline.warning",
                    defaultMessage: "Handoff to {destination} needs attention",
                    values: {
                        destination: s
                    }
                }), r[6] = s, r[7] = e) : e = r[7], e
            }
            return r[8] !== s ? (n = (0, a.jsx)(l.a, {
                id: "localConversation.threadHandoff.inline.completed",
                defaultMessage: "Handed off to {destination}",
                values: {
                    destination: s
                }
            }), r[8] = s, r[9] = n) : n = r[9], n
        }

        function y(e) {
            let t, n = (0, i.c)(4),
                {
                    operation: r
                } = e;
            if ("to-local" === r.direction) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(l.a, {
                    id: "localConversation.threadHandoff.inline.destination.local",
                    defaultMessage: "local"
                }), n[0] = e) : e = n[0], e
            }
            if ("to-worktree" === r.direction) {
                let e;
                return n[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(l.a, {
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
                let t, n, s, y, C = (0, i.c)(25),
                    {
                        agentActivityIcon: x,
                        item: b,
                        operation: w,
                        variant: k
                    } = e,
                    I = null != b && b.completed && !0 === b.success ? function(e) {
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
                    A = null == w ? I?.operationId ?? b.callId : w.id,
                    P = (0, o.x)(u.a, A),
                    S = w ?? P,
                    z = null == S ? null == I ? b?.completed ?? !1 : (0, u.b)(I.status) : (0, u.b)(S.status),
                    j = null == S ? b?.success : "error" !== S.status && ("success" === S.status || "warning" === S.status),
                    T = "running";
                z && (T = !1 === j ? "failed" : "completed"), C[0] !== b ? (t = null == b ? null : (0, f.c)(b), C[0] = b, C[1] = t) : t = C[1];
                let _ = t;
                C[2] !== _?.icon ? (n = _?.icon ?? (0, a.jsx)(m.a, {
                    className: "icon-xs shrink-0 text-text/60"
                }), C[2] = _?.icon, C[3] = n) : n = C[3];
                let L = n,
                    F = null;
                if (null != _) {
                    let e;
                    C[4] !== _.message || C[5] !== _.values ? (e = (0, a.jsx)(l.a, {
                        ..._.message,
                        values: _.values
                    }), C[4] = _.message, C[5] = _.values, C[6] = e) : e = C[6], F = e
                } else if (null != w) {
                    let e;
                    C[7] !== w ? (e = (0, a.jsx)(h, {
                        operation: w
                    }), C[7] = w, C[8] = e) : e = C[8], F = e
                }
                if ("row" !== k) {
                    let e, t, n, i = "summary-text" !== k ? L : null,
                        o = null == b ? !z : !b.completed,
                        l = "summary-text" !== k && "min-w-0 truncate";
                    return C[9] !== l ? (e = (0, r.b)(l), C[9] = l, C[10] = e) : e = C[10], C[11] !== F || C[12] !== o || C[13] !== e ? (t = (0, a.jsx)(g.a, {
                        active: o,
                        className: e,
                        children: F
                    }), C[11] = F, C[12] = o, C[13] = e, C[14] = t) : t = C[14], C[15] !== i || C[16] !== t ? (n = (0, a.jsxs)(d.a, {
                        className: "text-size-chat text-text/40 group-hover/activity-header:text-default",
                        children: [i, t]
                    }), C[15] = i, C[16] = t, C[17] = n) : n = C[17], n
                }
                let N = x ?? L;
                return C[18] !== S ? (s = S?.steps.map(e => (0, a.jsx)(c.a, {
                    compact: !0,
                    direction: S.direction,
                    localBranch: S.localBranch,
                    sourceBranch: S.sourceBranch,
                    step: e,
                    worktreeBranch: S.worktreeBranch
                }, e.id)), C[18] = S, C[19] = s) : s = C[19], C[20] !== T || C[21] !== F || C[22] !== N || C[23] !== s ? (y = (0, a.jsx)(p.a, {
                    indentContent: !1,
                    icon: N,
                    status: T,
                    summary: F,
                    children: s
                }), C[20] = T, C[21] = F, C[22] = N, C[23] = s, C[24] = y) : y = C[24], y
            }
        })
    }),
    qYBv: (function(e, t, n) {
        var a = n("KJ1J"),
            i = n("Sgjw"),
            r = n("W10I"),
            o = n("acxW");

        function l(e) {
            let {
                item: t,
                mcpServerStatuses: n
            } = e;
            if (!0 === t.isMcpAppWidgetSuperseded || t.completed && null == t.result) return "not-mcp-app";
            if ((0, i.a)(t)?.type === "chatgpt-automation") return "mcp-app";
            let a = t.result?.type === "success" ? t.result.raw : null;
            return null != t.mcpAppResourceUri || null != (0, r.c)({
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
                return "mcp-app" === l({
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
                return "not-mcp-app" !== l({
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
            l = n("eCUJ"),
            s = n("Z2lA");
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
                        if (!("exec" !== (f = e).type || !(0, r.a)(f) || "read" === f.parsedCmd.type && !f.parsedCmd.isFinished && (0, s.b)({
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
                    let e = c.some(e => (0, l.a)(e));
                    m((d = n && (!a || e)) ? "exploring" : "explored")
                } else {
                    let e = i()(u);
                    e?.kind === "item" && (p = (0, l.a)(e.item), "reasoning" === e.item.type && !1 === e.item.completed && (p = !1))
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
                let e, t, n, o, l = (0, a.c)(7),
                    [s, u] = (0, i.useState)(0);
                l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = e => {
                    u(t => t === e ? t : e)
                }, l[0] = e) : e = l[0];
                let c = e;
                l[1] === Symbol.for("react.memo_cache_sentinel") ? (t = e => {
                    c(function(e) {
                        if (!e.borderBoxSize) return e.contentRect.height;
                        let t = Array.isArray(e.borderBoxSize) ? e.borderBoxSize[0] : e.borderBoxSize;
                        return t?.blockSize ?? e.contentRect.height
                    }(e))
                }, l[1] = t) : t = l[1];
                let d = (0, r.b)(t);
                l[2] !== d ? (n = e => {
                    null != e && c(e.scrollHeight), d(e)
                }, l[2] = d, l[3] = n) : n = l[3];
                let p = n;
                return l[4] !== s || l[5] !== p ? (o = {
                    elementHeightPx: s,
                    elementRef: p
                }, l[4] = s, l[5] = p, l[6] = o) : o = l[6], o
            }
        })
    }),
    JEy9: (function(e, t, n) {
        var a = n("ABep"),
            i = n("AHzi"),
            r = n("mOzQ"),
            o = n("jkCp"),
            l = n("DNNO"),
            s = n("V3KG"),
            u = n("FW3Q"),
            c = n("ZOYk"),
            d = n("lHPH"),
            p = n("uteA"),
            m = n("o1pl"),
            f = n("mN4P"),
            g = n("cfIb"),
            v = n("sQG0"),
            h = n("pOSz"),
            y = n("ASxG"),
            C = n("HOLv"),
            x = n("xmjg"),
            b = n("alO6"),
            w = n("Hkqr"),
            k = n("wE2l");
        let I = new Map([
                ["list_spaces", x.a],
                ["get_space", x.a],
                ["create_space", g.a],
                ["list_pages", v.a],
                ["find_pages", d.a],
                ["create_page", l.a],
                ["read_page", h.a],
                ["read_artifact", s.a],
                ["connect_spaces_artifact", s.a],
                ["read_page_reference", s.a],
                ["read_page_transcript", s.a],
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
            A = y.object({
                action: y.string()
            });

        function P(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = I.get(e);
            if ("manage_page_comment" === e) {
                let e = A.safeParse(t);
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
                return null == r ? null : P((0, b.e)({
                    matchingApp: r,
                    toolName: e.appContext?.actionName ?? e.invocation.tool
                }), e.invocation.arguments, n) ?? (0, a.jsx)(C.a, {
                    className: "shrink-0 text-text/60",
                    asset: x.a
                })
            },
            b: P
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
        var a = n("Zqzr"),
            i = n("Qgfj"),
            r = n("rS3J"),
            o = n("EULo");
        let l = `${a.ob}@${a.Yc}`,
            s = `${a.ob}@${a.Zc}`,
            u = `${a.ob}@${a._c}`,
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
                            let a = c.exec((0, o.c)(n.path))?.[1]?.trim().toLowerCase();
                            if (a === l || a === s || a === u) return "explicit";
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