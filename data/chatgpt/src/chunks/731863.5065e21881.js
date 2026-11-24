export const __rspack_esm_ids = [731863];
export const __webpack_modules__ = {
    bAhY: (function(a, b, c) {
        function d(a, b) {
            let c = a.requestAnimationFrame(() => {
                c = a.requestAnimationFrame(b)
            });
            return () => a.cancelAnimationFrame(c)
        }
        c.d(b, {}, {
            a: d,
            b: function(a, b) {
                if ("visible" !== a.document.visibilityState) return b(), () => {};
                let c = new AbortController,
                    e = d(a, h),
                    f = a.setTimeout(h, 100);

                function g() {
                    c.abort(), e(), a.clearTimeout(f)
                }

                function h() {
                    g(), b()
                }
                return a.document.addEventListener("visibilitychange", h, {
                    signal: c.signal
                }), a.addEventListener("pagehide", h, {
                    signal: c.signal
                }), g
            }
        })
    }),
    BFFf: (function(a, b, c) {
        var d = c("Q840"),
            e = c("OWtl");
        let f = (0, d.j)(e.a, a => {
            let b, c = (a, c, d) => {
                if (b !== a) return;
                let e = Math.floor(d.finishedAt / 1e3),
                    f = a.windows.at(-1);
                if (f?.completedSecond !== e) {
                    for (; null != a.windows[0] && a.windows[0].completedSecond < e - 45;) a.windows.shift();
                    f = {
                        completedSecond: e,
                        operations: {}
                    }, a.windows.push(f)
                }
                let g = d.finishedAt - d.startedAt,
                    h = f.operations[c];
                null == h ? (h = {
                    count: 1,
                    totalDuration: g,
                    longest: d
                }, f.operations[c] = h) : (h.count++, h.totalDuration += g, g > h.longest.finishedAt - h.longest.startedAt && (h.longest = d)), d.appHostFrame?.shape === "bytes" && null != d.payloadLength && (h.binaryBytes = (h.binaryBytes ?? 0) + d.payloadLength)
            };
            return {
                recordInteraction(a) {
                    null == b || a.startedAt <= b.startedAt || a.finishedAt < (b.lastObservedInteraction?.finishedAt ?? 0) || (b.lastObservedInteraction = a)
                },
                setEnabled(a) {
                    let c = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    b = a ? b ?? {
                        startedAt: performance.now(),
                        childIdsOnly: c,
                        windows: []
                    } : void 0
                },
                recordCompletedInterval(a, d) {
                    null != b && !b.childIdsOnly && d.startedAt > b.startedAt && c(b, a, d)
                },
                measure(a, d, e, f, g) {
                    let h = b;
                    if (null == h || h.childIdsOnly && "thread.childThreadIds.first" !== a && "thread.childThreadIds.subsequent" !== a) return e(d);
                    let i = f ?? (Array.isArray(d) || "string" == typeof d ? d.length : void 0),
                        j = {
                            startedAt: performance.now(),
                            finishedAt: 0,
                            payloadLength: i
                        },
                        k = a;
                    try {
                        let b = "thread.subagentActivity" === a ? e(d, j) : e(d);
                        return k = g?.(b) ?? a, b
                    } finally {
                        j.finishedAt = performance.now(), ("thread.childThreadIds.first" === k || "thread.childThreadIds.subsequent" === k) && c(h, "thread.childThreadIds", j), c(h, k, j)
                    }
                },
                getSnapshot() {
                    if (null == b) return;
                    let a = performance.now(),
                        c = (Math.floor(a / 1e3) - 45) * 1e3,
                        d = b.lastObservedInteraction;
                    return structuredClone({
                        timeOrigin: Date.now() - a,
                        collectionStartedAt: b.startedAt,
                        collectedAt: a,
                        retentionCutoff: c,
                        ...null != d && d.finishedAt >= c ? {
                            lastObservedInteraction: d
                        } : {},
                        windows: b.windows.filter(a => 1e3 * a.completedSecond >= c)
                    })
                }
            }
        });
        c.d(b, {}, {
            a: f
        })
    }),
    xvJK: (function(a, b, c) {
        var d = c("KvQL"),
            e = c("NNQk"),
            f = c("pwwq"),
            g = c("iv8n"),
            h = c("kjQz"),
            i = c("S8dY");

        function j(a, b) {
            return c => {
                let e, {
                        conversationId: j,
                        durable: k,
                        parentTrace: l,
                        startupResume: m,
                        tailHydration: n,
                        threadIsAeon: o
                    } = c,
                    p = i.a.isPending(j),
                    q = p ? i.a.getTrace(j) : l,
                    r = !p && !0 === m;
                i.a.hydrationStarted(j, o), r && g.a.resumeStarted(j), null != o && (e = o ? "aeon" : "regular");
                let s = h.a.start("thread_hydration", {
                        threadKind: e,
                        startupResume: r
                    }, {
                        key: `${a}:${j}`,
                        trace: q ?? void 0,
                        traceAttributes: {
                            "thread.durable": k,
                            ...null == b ? {} : {
                                "thread.hydration_request": b
                            },
                            "thread.tail_hydration": n,
                            ...null != o ? {
                                "thread.is_aeon": o
                            } : {},
                            "thread.startup_resume": r
                        }
                    }),
                    t = !1;
                return {
                    trace: s.trace,
                    markPreparation: null != s.trace && (p || r) ? function(a) {
                        let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                        if (t || !s.isRecording() || null == s.trace) return;
                        let c = `thread.prepare.${a}`,
                            d = Math.max(0, Date.now() - b);
                        performance.mark(c, {
                            startTime: Math.max(0, performance.now() - d)
                        }), performance.clearMarks(c), (0, f.c)({
                            attributes: {},
                            endTimeMs: b,
                            name: c,
                            startTimeMs: b,
                            trace: s.trace
                        })
                    } : void 0,
                    mark: a => {
                        t || (s.mark(a), "history_ready" === a && i.a.historyReady(j))
                    },
                    recordWritableRoots(a, b) {
                        s.mark("writable_roots_ready"), null != s.trace && (0, f.c)({
                            attributes: {
                                "thread.durable": k
                            },
                            endTimeMs: b,
                            name: "thread.writable_roots",
                            startTimeMs: a,
                            trace: s.trace
                        })
                    },
                    finish() {
                        !t && (t = !0, s.end(), i.a.hydrationFinished(j), r && g.a.resumeFinished(j))
                    },
                    fail(a) {
                        t || (t = !0, "canceled" === (0, d.zh)(a)["codex.outcome"] ? s.abort("hydration_canceled") : s.fail("hydration_failed"), i.a.hydrationFailed(j, a))
                    },
                    cancel() {
                        if (t) return;
                        t = !0;
                        let a = new DOMException("Conversation resume canceled", "AbortError");
                        s.abort("hydration_canceled"), i.a.getTrace(j) === q && i.a.hydrationFailed(j, a)
                    }
                }
            }
        }
        c.d(b, {}, {
            a: function(a, b) {
                let c;
                return d => {
                    switch (d.type) {
                        case "started":
                            c = j(a, b)(d.params);
                            break;
                        case "preparation":
                            c?.markPreparation?.(d.mark, d.atMs);
                            break;
                        case "writable-roots":
                            c?.recordWritableRoots(d.startedAtMs, d.endedAtMs);
                            break;
                        case "history-page":
                            (0, e.a)(d.timing);
                            break;
                        case "phase":
                            c?.mark(d.phase);
                            break;
                        case "finished":
                            c?.finish();
                            break;
                        case "failed":
                            c?.fail(d.error);
                            break;
                        case "canceled":
                            c?.cancel()
                    }
                }
            },
            b: j
        })
    }),
    WGUd: (function(a, b, c) {
        var d = c("zPtR"),
            e = c("OSkm"),
            f = c("KvQL"),
            g = c("gbzJ"),
            h = c("ReGc"),
            i = c("bNMl");

        function j(a, b) {
            let c, j;
            if (!a.get(i.c)) return;
            let l = "failed" === b.type && b.error instanceof Error && "AbortError" === b.error.name;
            "completed" === b.type ? c = "success" : l ? (c = "aborted", j = "canceled") : (c = "failure", j = "timed-out" === b.type ? "timeout" : "failed" === b.type ? (0, f.If)(b.error) ?? "failed" : b.type);
            let {
                hostMetrics: m
            } = b;
            (0, i.a)(a, e.CodexPerformanceSpanCompleted, {
                spanName: "app_server_request",
                durationMs: b.durationMs,
                completedTs: (0, d.c)(b.endedAtMs),
                outcome: c,
                reason: j,
                clientPlatform: (0, g.a)(),
                appShell: void 0,
                buildNumber: a.get(h.a).data?.buildNumber ?? void 0,
                spanId: b.trace?.traceparent.slice(36, 52),
                traceId: b.trace?.traceparent.slice(3, 35),
                appServerRequestAttributes: {
                    method: b.method,
                    source: b.source,
                    hostKind: m?.hostKind ?? k(b.hostId),
                    transportKind: m?.transportKind,
                    priority: b.priority,
                    queueDurationMs: b.queueWaitMs,
                    hostReadyWaitDurationMs: m?.hostReadyWaitDurationMs,
                    hostRoundTripDurationMs: m?.hostRoundTripDurationMs,
                    requestBytes: m?.requestBytes == null ? void 0 : (0, d.c)(m.requestBytes),
                    responseBytes: m?.responseBytes == null ? void 0 : (0, d.c)(m.responseBytes),
                    timeoutMs: b.timeoutMs,
                    queuedRequestCountAtEnqueue: b.queuedRequestCountAtEnqueue,
                    peakInFlightRequestCount: b.peakInFlightRequestCount,
                    peakBackgroundInFlightRequestCount: b.peakBackgroundInFlightRequestCount,
                    clientBusyPeriodPeakHostPendingRequestCount: m?.clientBusyPeriodPeakHostPendingRequestCount,
                    incomingQueueDepth: m?.incomingQueueDepth,
                    coalescedRequestCount: b.coalescedRequestCount,
                    reconnectAttemptAtEnqueue: m?.reconnectAttemptAtEnqueue,
                    errorCode: "failed" === b.type ? function(a) {
                        if ("object" == typeof a && null != a && !(a instanceof Error) && "code" in a && "number" == typeof a.code && Number.isInteger(a.code) && !(a.code < -0x80000000) && !(a.code > 0x7fffffff)) return a.code
                    }(b.error) : void 0,
                    requestDurationMs: b.requestDurationMs,
                    responseReceiveDurationMs: m?.responseReceiveDurationMs,
                    largeInboundMessageOverlapMs: m?.largeInboundMessageOverlapMs,
                    largeInboundBytesReceivedWhilePending: (0, d.c)(m?.largeInboundBytesReceivedWhilePending),
                    largeInboundCompletedMessageBytesWhilePending: (0, d.c)(m?.largeInboundCompletedMessageBytesWhilePending),
                    largeInboundMessageThresholdBytesWhilePending: (0, d.c)(m?.largeInboundMessageThresholdBytesWhilePending),
                    serverNotificationDeliveryLagMs: m?.serverNotificationDeliveryLagMs,
                    serverNotificationClockSkewBaselineMs: m?.serverNotificationClockSkewBaselineMs
                }
            })
        }

        function k(a) {
            return "local" === a ? "local" : "durable" === a ? "durable" : a.startsWith("remote-control:") ? "remote-control" : a.startsWith("remote-wsl:") ? "wsl" : a.startsWith("remote-ssh") ? "ssh" : "remote"
        }
        c.d(b, {}, {
            a: function(a) {
                let b = new Map;
                return c => {
                    if ("started" === c.type) {
                        a.get(i.c) && (0, i.a)(a, e.CodexAppServerRequestStarted, {
                            method: c.method,
                            source: c.source,
                            priority: c.priority,
                            hostKind: k(c.hostId),
                            appShell: "owl"
                        });
                        return
                    }
                    if ("late-response" === c.type) {
                        let d = b.get(c.id);
                        if (null == d) return;
                        window.clearTimeout(d.timeoutId), b.delete(c.id), j(a, {
                            ...d.event,
                            hostMetrics: c.hostMetrics
                        });
                        return
                    }
                    if (!("durationMs" in c)) return;
                    if ("timed-out" !== c.type) return void j(a, c);
                    if (!a.get(i.c)) return;
                    if (b.size >= 100) {
                        let c = b.entries().next().value;
                        if (null != c) {
                            let [d, {
                                event: e,
                                timeoutId: f
                            }] = c;
                            window.clearTimeout(f), b.delete(d), j(a, e)
                        }
                    }
                    let d = window.setTimeout(() => {
                        b.delete(c.id), j(a, c)
                    }, 3e4);
                    b.set(c.id, {
                        event: c,
                        timeoutId: d
                    })
                }
            }
        })
    }),
    iv8n: (function(a, b, c) {
        var d = c("rEML"),
            e = c("c9lJ"),
            f = c("jAnS"),
            g = c("ad0f"),
            h = c("zt8h"),
            i = c("kjQz"),
            j = c("L6b2");
        let k = new class {
            startSpan;
            span = null;
            surface = null;
            shellVisible = !1;
            sidebarReady = !1;
            contentVisible = !1;
            requiresSidebar = !0;
            initialPathname = null;
            attributes = null;
            constructor(a) {
                this.startSpan = a
            }
            start(a, b) {
                let c = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                if (null != this.span) return;
                let e = {
                        initialSurface: a
                    },
                    f = this.startSpan("app_start", e, {
                        key: "initial-load",
                        startLocalTrace: null != d && "home" !== a ? a => (0, j.f)("app_start", d, a) : void 0,
                        startedAtMs: b
                    });
                f.isRecording() && (this.surface = a, this.span = f, this.requiresSidebar = c, this.initialPathname = d, this.attributes = e)
            }
            setHostStartupTiming(a, b) {
                if (null == this.attributes || !this.isRecording()) return;
                this.attributes.updateAttemptId = a.updateAttemptId;
                let c = b - a.processStartedAtMs;
                Number.isFinite(c) && c >= 0 && (this.attributes.processToPreloadDurationMs = c), this.attributes.hostStartupPhaseDurationsMs = a.phaseDurationsMs, this.attributes.nativeStartupProgress = a.nativeStartupProgress
            }
            getTrace(a) {
                return this.isInitialThread(a) ? this.span?.trace ?? null : null
            }
            resumeStarted(a) {
                this.isInitialThread(a) && this.span?.mark("resume_started")
            }
            resumeFinished(a) {
                this.isInitialThread(a) && this.span?.mark("resume_finished")
            }
            isInitialThread(a) {
                return this.isRecording() && !this.contentVisible && this.initialPathname === `/local/${a}`
            }
            markInitializationPhase(a) {
                let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l();
                null != this.span && this.span.isRecording() && this.span.mark(a, b)
            }
            markShellVisible() {
                let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l();
                !this.shellVisible && null != this.span && this.span.isRecording() && (this.shellVisible = !0, this.span.mark("shell_visible", a), this.maybeEnd())
            }
            isRecording() {
                return this.span?.isRecording() === !0
            }
            markSidebarReady() {
                let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l();
                !this.sidebarReady && null != this.span && this.span.isRecording() && (this.sidebarReady = !0, this.span.mark("sidebar_ready", a), this.maybeEnd())
            }
            markHomeVisible() {
                let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l();
                this.markContentVisible("home_visible", "home", a)
            }
            markSignInVisible() {
                "home" === this.surface && this.span?.abort("sign_in_visible")
            }
            markThreadVisible() {
                let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l();
                this.markContentVisible("thread_visible", "thread", a)
            }
            markRemoteThreadVisible() {
                let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l();
                this.markContentVisible("remote_thread_visible", "remote_thread", a)
            }
            failConversationLoad() {
                "thread" === this.surface && this.span?.isRecording() && this.span.fail("conversation_load_failed")
            }
            leaveRestoredThread(a) {
                "home" !== this.surface && this.initialPathname !== a && this.isRecording() && this.span?.abort("superseded")
            }
            dispose() {
                null != this.span && this.span.isRecording() && this.span.abort("app_disposed")
            }
            markContentVisible(a, b, c) {
                !this.contentVisible && null != this.span && this.span.isRecording() && this.surface === b && (this.contentVisible = !0, this.span.mark(a, c), this.maybeEnd())
            }
            maybeEnd() {
                this.shellVisible && (!this.requiresSidebar || this.sidebarReady) && this.contentVisible && null != this.span && this.span.isRecording() && this.span.end()
            }
        }((a, b, c) => i.a.start(a, b, {
            ...c,
            traceAttributes: {
                "app_start.initial_surface": b.initialSurface
            }
        }));

        function l() {
            return performance.timeOrigin + performance.now()
        }
        c.d(b, {}, {
            a: k,
            b: function(a) {
                return null != a ? (0, d.N)(a).pathname ?? null : (0, h.a)(window.location.pathname, document.documentElement.dataset.routerBasename ?? "/")
            },
            c: function(a) {
                return null == a ? null : (0, g.b)(a) || "/index.html" === a || "/extension/panel/new" === a ? "home" : a.startsWith("/local/") ? "thread" : a.startsWith("/remote/") ? "remote_thread" : null != (0, f.j)(a) || null != (0, e.a)(a) ? "thread" : null
            }
        })
    }),
    drri: (function(a, b, c) {
        var d = c("ox67"),
            e = c.n(d),
            f = c("c94E"),
            g = c("cOHk"),
            h = c("fsCW"),
            i = c("XvMu"),
            j = c("kjQz");

        function k(a) {
            return "number" == typeof a && Number.isFinite(a) ? a : null
        }

        function l(a) {
            return "number" == typeof a && Number.isFinite(a) && a >= 0 ? a : null
        }
        new class {
            startSpan;
            completedTurnKeys = new Set;
            constructor(a) {
                this.startSpan = a
            }
            record(a) {
                let {
                    completedAtMs: b,
                    conversationId: c,
                    lastAgentMessage: d,
                    turn: j,
                    turnId: m
                } = a;
                if ("inProgress" === j.status) return;
                let n = (0, g.e)(j, [], {
                        includeTurnDiff: !1
                    }),
                    o = (0, h.b)({
                        assistantContent: d,
                        turn: n
                    }),
                    p = (0, f.b)(j),
                    q = e()(o, "fileCount"),
                    r = e()(p, "fileCount");
                if (0 === q && 0 === r) return;
                let s = `${c}:${m}`;
                if (this.completedTurnKeys.has(s)) return;
                if (this.completedTurnKeys.add(s), this.completedTurnKeys.size > 1e3) {
                    let a = this.completedTurnKeys.values().next().value;
                    null != a && this.completedTurnKeys.delete(a)
                }
                let t = l(j.durationMs),
                    u = k(j.turnStartedAtMs),
                    v = this.startSpan("artifact_generation", {
                        telemetryOwner: "desktop_client",
                        definitionVersion: 1,
                        lifecycleKind: q > 0 && r > 0 ? "produced_and_edited" : q > 0 ? "produced" : "edited",
                        producedFileCount: q,
                        editedFileCount: r,
                        uploadedFileCount: e()((0, f.d)(j), "fileCount"),
                        producedExtensionGroupCount: o.length,
                        editedExtensionGroupCount: p.length,
                        ... function(a) {
                            let b = new Map;
                            for (let d of a.items) {
                                var c;
                                ("collabAgentToolCall" === (c = d).type || "commandExecution" === c.type || "dynamicToolCall" === c.type || "fileChange" === c.type || "imageGeneration" === c.type || "imageView" === c.type || "mcpToolCall" === c.type || "sleep" === c.type || "webSearch" === c.type) && b.set(d.id, d)
                            }
                            let d = {
                                collabAgentToolCallCount: 0,
                                commandExecutionCount: 0,
                                dynamicToolCallCount: 0,
                                failedToolCount: 0,
                                fileChangeCount: 0,
                                imageGenerationCount: 0,
                                imageViewCount: 0,
                                knownToolDurationCount: 0,
                                knownToolDurationMsMax: 0,
                                knownToolDurationMsSum: 0,
                                mcpToolCallCount: 0,
                                operationalToolCount: b.size,
                                sleepCount: 0,
                                webSearchCount: 0
                            };
                            for (let a of b.values()) {
                                switch (a.type) {
                                    case "collabAgentToolCall":
                                        d.collabAgentToolCallCount += 1;
                                        break;
                                    case "commandExecution":
                                        d.commandExecutionCount += 1;
                                        break;
                                    case "dynamicToolCall":
                                        d.dynamicToolCallCount += 1;
                                        break;
                                    case "fileChange":
                                        d.fileChangeCount += 1;
                                        break;
                                    case "imageGeneration":
                                        d.imageGenerationCount += 1;
                                        break;
                                    case "imageView":
                                        d.imageViewCount += 1;
                                        break;
                                    case "mcpToolCall":
                                        d.mcpToolCallCount += 1;
                                        break;
                                    case "sleep":
                                        d.sleepCount += 1;
                                        break;
                                    case "webSearch":
                                        d.webSearchCount += 1
                                }(function(a) {
                                    switch (a.type) {
                                        case "collabAgentToolCall":
                                        case "dynamicToolCall":
                                        case "imageGeneration":
                                        case "mcpToolCall":
                                            return "failed" === a.status;
                                        case "commandExecution":
                                        case "fileChange":
                                            return "failed" === a.status || "declined" === a.status;
                                        case "imageView":
                                        case "sleep":
                                        case "webSearch":
                                            return !1
                                    }
                                })(a) && (d.failedToolCount += 1);
                                let b = function(a) {
                                    switch (a.type) {
                                        case "commandExecution":
                                        case "dynamicToolCall":
                                        case "mcpToolCall":
                                        case "sleep":
                                            return l(a.durationMs);
                                        case "collabAgentToolCall":
                                        case "fileChange":
                                        case "imageGeneration":
                                        case "imageView":
                                        case "webSearch":
                                            return null
                                    }
                                }(a);
                                null != b && (d.knownToolDurationCount += 1, d.knownToolDurationMsSum += b, d.knownToolDurationMsMax = Math.max(d.knownToolDurationMsMax, b))
                            }
                            return d
                        }(j),
                        appServerTurnDurationMs: t ?? void 0,
                        usedSkills: (0, i.a)(j).length > 0,
                        timingSource: null != u ? "client_turn_started" : null != t ? "app_server_duration_fallback" : "completion_only"
                    }, {
                        backfilled: !0,
                        key: s,
                        startedAtMs: u ?? (null == t ? b : b - t)
                    }),
                    w = k(j.firstTurnWorkItemStartedAtMs);
                switch (null != w && v.mark("first_work_item_started", w), j.status) {
                    case "completed":
                        v.end();
                        return;
                    case "failed":
                        v.fail("turn_failed");
                        return;
                    case "interrupted":
                        v.abort("turn_interrupted");
                        return
                }
            }
        }((a, b, c) => j.a.start(a, b, {
            ...c,
            traceAttributes: {
                "artifact.lifecycle_kind": b.lifecycleKind,
                "artifact.produced_file_count": b.producedFileCount,
                "artifact.edited_file_count": b.editedFileCount,
                "artifact.timing_source": b.timingSource
            }
        })), c.d(b, {}, {
            a: function(a) {}
        })
    }),
    N24b: (function(a, b, c) {
        var d = c("kjQz");
        let e = new class {
            startSpan;
            active = new Map;
            constructor(a) {
                this.startSpan = a
            }
            start(a) {
                let b, {
                        artifactType: c,
                        importKind: d,
                        openSource: e,
                        requestKey: f
                    } = a,
                    g = this.active.get(f)?.mountCount ?? 0,
                    h = "pdf" === c ? "renderer_ready" : "data_ready",
                    i = this.startSpan("artifact_preview", {
                        telemetryOwner: "desktop_client",
                        definitionVersion: 1,
                        artifactKind: "slides" === c ? "presentation" : c,
                        importKind: d,
                        openSource: e,
                        readyBoundary: h
                    }, {
                        key: f,
                        onTerminal: () => {
                            this.active.get(f) === b && this.active.delete(f)
                        }
                    });
                i.isRecording() && (b = {
                    mountCount: g,
                    readyBoundary: h,
                    span: i
                }, this.active.set(f, b))
            }
            mount(a) {
                let b = this.active.get(a);
                return null == b ? () => {} : (b.mountCount += 1, () => {
                    let b = this.active.get(a);
                    null != b && (b.mountCount = Math.max(0, b.mountCount - 1), queueMicrotask(() => {
                        this.active.get(a) === b && 0 === b.mountCount && b.span.abort("navigation_away")
                    }))
                })
            }
            markMetadataLoaded(a) {
                this.active.get(a)?.span.mark("metadata_loaded")
            }
            markBinaryLoaded(a) {
                this.active.get(a)?.span.mark("binary_loaded")
            }
            markArtifactParsed(a) {
                this.active.get(a)?.span.mark("artifact_parsed")
            }
            completeDataReady(a) {
                let b = this.active.get(a);
                b?.readyBoundary === "data_ready" && b.span.end()
            }
            completeRendererReady(a, b) {
                let c = this.active.get(a);
                c?.readyBoundary === "renderer_ready" && Number.isSafeInteger(b) && !(b <= 0) && (c.span.mark("renderer_ready"), c.span.end())
            }
            fail(a, b) {
                this.active.get(a)?.span.fail(b)
            }
            abort(a, b) {
                this.active.get(a)?.span.abort(b)
            }
            dispose() {
                for (let a of this.active.values()) a.span.abort("app_disposed")
            }
        }((a, b, c) => d.a.start(a, b, {
            ...c,
            traceAttributes: {
                "artifact.kind": b.artifactKind,
                "artifact.import_kind": b.importKind,
                "artifact.open_source": b.openSource,
                "artifact.ready_boundary": b.readyBoundary
            }
        }));
        c.d(b, {}, {
            a: function(a, b) {
                e.abort(a, b)
            },
            b: function() {
                e.dispose()
            }
        })
    }),
    Ggpj: (function(a, b, c) {
        var d = c("pR9v"),
            e = c("ySmL"),
            f = c("nZhi");
        let g = new d.a(() => performance.now(), () => "visible" === document.visibilityState, a => {
            (0, f.d)({
                name: "conversation_load",
                source: "RUM",
                startedAtMs: a.startTime,
                durationMs: a.duration,
                metadata: a.context
            }), e.b.addDurationVital("conversation_load", a)
        });
        c.d(b, {}, {
            a: g
        })
    }),
    p713: (function(a, b, c) {
        var d = c("pR9v"),
            e = c("KUIh"),
            f = c("Y94G");
        let g = new d.b(f.c, e.a);
        c.d(b, {}, {
            a: g
        })
    }),
    yKyW: (function(a, b, c) {
        let d;
        c.d(b, {}, {
            a: function() {
                return d
            },
            b: function() {
                if ("u" < typeof PerformanceObserver || !PerformanceObserver.supportedEntryTypes.includes("resource")) return;
                let a = new URL("assets/", new URL("/cdn/", window.location.origin)),
                    b = {
                        transfer_size_bytes: 0,
                        encoded_body_size_bytes: 0,
                        decoded_body_size_bytes: 0,
                        resource_count: 0,
                        zero_body_size_resource_count: 0,
                        resource_timing_dropped_entries_count: void 0
                    },
                    c = new PerformanceObserver((a, c, d) => {
                        e(a.getEntries(), performance.now()), d?.droppedEntriesCount != null && (b.resource_timing_dropped_entries_count = d.droppedEntriesCount)
                    });
                return c.observe({
                    type: "resource",
                    buffered: !0
                }), {
                    finish(a) {
                        e(c.takeRecords(), a), c.disconnect(), d = {
                            ...b
                        }
                    },
                    disconnect: () => c.disconnect()
                };

                function e(c, d) {
                    for (let e of c) e instanceof PerformanceResourceTiming && !(e.responseEnd <= 0) && !(e.responseEnd > d) && /^https?:\/\//.test(e.name) && function(a, b) {
                        let c = new URL(a.name);
                        return c.origin === b.origin && !!c.pathname.startsWith(b.pathname) && ("script" === a.initiatorType || /\.m?js$/i.test(c.pathname) || "contentType" in a && "string" == typeof a.contentType && /^(text|application)\/(x-)?(javascript|ecmascript)(;|$)/i.test(a.contentType) || "link" === a.initiatorType && Array.from(document.querySelectorAll('link[rel="modulepreload"], link[rel="preload"][as="script"]')).some(b => b.href === a.name))
                    }(e, a) && (b.transfer_size_bytes += e.transferSize, b.encoded_body_size_bytes += e.encodedBodySize, b.decoded_body_size_bytes += e.decodedBodySize, b.resource_count++, 0 === e.encodedBodySize && 0 === e.decodedBodySize && b.zero_body_size_resource_count++)
                }
            }
        })
    }),
    yaHE: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a, b) {
                let c, d = Date.now(),
                    e = d + 18e5,
                    f = d,
                    g = "startup",
                    h = !1,
                    i = !1,
                    j = setTimeout(k, 18e5);

                function k() {
                    i = !0, clearTimeout(c), clearTimeout(j), document.removeEventListener("visibilitychange", m)
                }

                function l() {
                    return Date.now() >= e && k(), !i && "visible" === document.visibilityState
                }

                function m() {
                    if (clearTimeout(c), c = void 0, !l()) return;
                    let d = Date.now(),
                        e = d >= f;
                    e && (f = d + 18e4), c = setTimeout(m, f - d), e && (async function(c) {
                        if (!h && l() && b()) {
                            h = !0;
                            try {
                                let d = performance,
                                    e = navigator,
                                    f = d.memory,
                                    g = {
                                        sampleKind: c,
                                        documentAgeMs: performance.now(),
                                        visibilityState: document.visibilityState,
                                        deviceMemoryGiB: e.deviceMemory,
                                        hardwareConcurrency: navigator.hardwareConcurrency,
                                        jsHeapSizeLimitBytes: f?.jsHeapSizeLimit,
                                        totalJSHeapSizeBytes: f?.totalJSHeapSize,
                                        usedJSHeapSizeBytes: f?.usedJSHeapSize
                                    };
                                if (null != d.measureUserAgentSpecificMemory) try {
                                    let a = await d.measureUserAgentSpecificMemory();
                                    g.uaSpecificMemoryBytes = a.bytes, g.uaSpecificMemoryBreakdownCount = a.breakdown?.length
                                } catch {}
                                l() && b() && a(g)
                            } finally {
                                h = !1
                            }
                        }
                    }(g), g = "periodic")
                }
                document.addEventListener("visibilitychange", m), m()
            }
        })
    }),
    Y94G: (function(a, b, c) {
        var d = c("nZhi");
        let e = new Map,
            f = new Set(["hydrate.start", "hydrate.commit", "app.initialize.end", "persistence.end", "statsig.ready", "composer.rendered", "navigation.handlers_attached", "composer.editable", "composer.native_input_ready"]),
            g = null;
        c.d(b, {}, {
            a: f,
            b: function() {
                return Object.fromEntries(Array.from(e, a => {
                    let [b, c] = a;
                    return [b, c - performance.timeOrigin]
                }))
            },
            c: function(a, b) {
                if ("u" < typeof window || e.has(a)) return;
                let c = b ?? performance.mark(`page_load.${a}`),
                    h = performance.timeOrigin + c.startTime;
                if (e.set(a, h), f.has(a) && (0, d.d)({
                        name: `page_load.${a}`,
                        source: "RUM",
                        startedAtMs: performance.timeOrigin,
                        durationMs: c.startTime
                    }), "hydrate.commit" === a) {
                    let a = e.get("hydrate.start");
                    null != a && (0, d.d)({
                        name: "hydrate_to_outer_commit_ms",
                        source: "RUM",
                        startedAtMs: a,
                        durationMs: h - a
                    })
                }
                g?.(a, h)
            },
            d: function(a) {
                g = a, e.forEach((b, c) => a(c, b))
            }
        })
    }),
    B0Wj: (function(a, b, c) {
        let d;
        var e = c("zPtR"),
            f = c("KUIh"),
            g = c("unIO"),
            h = c("mFDr"),
            i = c("WFY2"),
            j = c("p713"),
            k = c("yKyW"),
            l = c("Y94G");
        let m = null,
            n = null;

        function o() {
            j.a.checkRoute(), null != m && ((0, f.c)() || (m.composerMetricsStopped = !0, m.javascriptResources?.disconnect(), m.nativeComposerObserver?.disconnect()))
        }

        function p(a, b) {
            if (null == m || (o(), m.composerMetricsStopped || m.composerMetrics.has(a))) return;
            m.composerMetrics.add(a), (0, l.c)(a, b);
            let c = b?.startTime ?? performance.now();
            if ("composer.ttfi" === a) {
                q(m.nativeComposerObserver?.takeRecords() ?? []), m.nativeComposerObserver?.disconnect();
                let b = Date.now();
                m.javascriptResources?.finish(c), h.a?.then(c => {
                    let {
                        addBrowserDatadogRumTiming: d
                    } = c;
                    d(a, b)
                })
            }
            r(a, c, `${m.id}:${a}`)
        }

        function q(a) {
            let b = a.find(a => "page_load.composer.native_input_ready" === a.name);
            null != b && (m?.nativeComposerObserver?.disconnect(), p("composer.native_input_ready", b))
        }

        function r(a, b, c, f) {
            let h;
            if (null != m && !1 !== d) {
                if ("composer.ttfi" === a) {
                    let a = Math.max(0, Math.round(b)),
                        c = (0, k.a)();
                    h = {
                        kind: "time-to-fully-interactive",
                        payload: {
                            durationMs: (0, e.b)(a),
                            durationTrimmedMs: (0, e.b)(Math.min(a, 3e5)),
                            pageLoadId: m.id,
                            navigationType: function() {
                                if ("function" != typeof performance.getEntriesByType) return;
                                let a = performance.getEntriesByType("navigation")[0];
                                return null != a && "type" in a && "string" == typeof a.type ? a.type : void 0
                            }(),
                            surface: "codex_browser",
                            routeId: m.initialRouteTemplate,
                            webDeployment: document.documentElement.dataset.deployment,
                            clientVersion: (0, g.a)(),
                            entryClientDurationMs: u(performance.getEntriesByName("entry.client", "mark")[0]?.startTime),
                            composerMountedDurationMs: u(performance.getEntriesByName("page_load.composer.rendered", "mark")[0]?.startTime),
                            timeToFirstByteDurationMs: u(m.initialVitals.get("TTFB")),
                            firstContentfulPaintDurationMs: u(m.initialVitals.get("FCP")),
                            largestContentfulPaintDurationMs: u(m.initialVitals.get("LCP")),
                            javascriptTransferSizeBytes: (0, e.c)(c?.transfer_size_bytes),
                            javascriptEncodedBodySizeBytes: (0, e.c)(c?.encoded_body_size_bytes),
                            javascriptDecodedBodySizeBytes: (0, e.c)(c?.decoded_body_size_bytes),
                            javascriptResourceCount: (0, e.b)(c?.resource_count),
                            javascriptZeroBodySizeResourceCount: (0, e.b)(c?.zero_body_size_resource_count),
                            resourceTimingDroppedEntriesCount: (0, e.b)(c?.resource_timing_dropped_entries_count)
                        }
                    }
                } else h = {
                    kind: "metric",
                    payload: {
                        metricName: a,
                        metricValue: b,
                        metricId: c,
                        pageLoadId: m.id,
                        initialPath: m.initialRouteTemplate,
                        navigationType: f,
                        clientVersion: (0, g.a)()
                    }
                };
                s(a, h)
            }
        }

        function s(a, b) {
            null != m && !1 !== d && (null != n ? t(n, b) : m.pending.set(a, b))
        }

        function t(a, b) {
            "metric" === b.kind ? a.logMetric(b.payload) : "first-contentful-paint" === b.kind ? a.logFirstContentfulPaint(b.value) : "long-interaction-to-next-paint" === b.kind ? a.logLongInteractionToNextPaint(b.value) : a.logTimeToFullyInteractive(b.payload)
        }

        function u(a) {
            return null != a && Number.isFinite(a) && a >= 0 ? (0, e.b)(Math.round(a)) : void 0
        }
        c.d(b, {}, {
            a: o,
            b: function(a, b) {
                d = a, n = b, a && null != b && m?.pending.forEach(a => t(b, a)), m?.pending.clear()
            },
            c: async function() {
                if (null == m) {
                    (0, f.a)(), m = {
                        id: document.documentElement.dataset.pageLoadId ?? crypto.randomUUID(),
                        initialPathname: window.location.pathname,
                        initialRouteTemplate: "/unknown",
                        composerMetricsStopped: !1,
                        composerMetrics: new Set,
                        initialVitals: new Map,
                        pending: new Map,
                        javascriptResources: (0, k.b)()
                    }, "u" > typeof PerformanceObserver && PerformanceObserver.supportedEntryTypes.includes("mark") && (m.nativeComposerObserver = new PerformanceObserver(a => {
                        q(a.getEntries())
                    }), m.nativeComposerObserver.observe({
                        type: "mark",
                        buffered: !0
                    })), window.addEventListener("pagehide", () => {
                        null != m && (m.composerMetricsStopped = !0, m.javascriptResources?.disconnect(), m.nativeComposerObserver?.disconnect())
                    }, {
                        once: !0
                    });
                    try {
                        let {
                            onCLS: a,
                            onFCP: b,
                            onINP: d,
                            onLCP: e,
                            onTTFB: f
                        } = await c.e(672620).then(c.bind(c, "VbkW")), g = a => {
                            "back-forward-cache" !== a.navigationType && ("FCP" !== a.name || m?.initialVitals.has("FCP") || s("first-contentful-paint", {
                                kind: "first-contentful-paint",
                                value: a.value
                            }), m?.initialVitals.set(a.name, a.value)), r(a.name, a.value, a.id, a.navigationType)
                        };
                        f(g), b(g), e(g), a(g), d(g), d(a => {
                            a.value < 500 || s("long-interaction-to-next-paint", {
                                kind: "long-interaction-to-next-paint",
                                value: a.value
                            })
                        }, {
                            durationThreshold: 500
                        })
                    } catch (a) {
                        i.a.warning("Failed to initialize browser Web Vitals", {
                            safe: {},
                            sensitive: {
                                error: a
                            }
                        })
                    }
                }
            },
            d: p,
            e: function(a) {
                if (null == m) return;
                let b = a(m.initialPathname);
                m.initialRouteTemplate = b, h.a?.then(a => {
                    let {
                        setBrowserDatadogRumView: c
                    } = a;
                    null != m && (0, f.c)() && c(b)
                }), m.pending.forEach(a => {
                    "metric" === a.kind ? a.payload.initialPath = b : "time-to-fully-interactive" === a.kind && (a.payload.routeId = b)
                })
            }
        })
    }),
    DZXF: (function(a, b, c) {
        var d = c("p713"),
            e = c("yKyW"),
            f = c("Y94G");

        function g(a, b) {
            return null != a && null != b && Number.isFinite(a) && Number.isFinite(b) && a >= 0 && b >= a ? (b - a) / 1e6 : void 0
        }
        c.d(b, {}, {
            a: function(a) {
                if ("initial_load" !== a.view.loading_type) return;
                let b = a.view.custom_timings;
                a.context = {
                    ...a.context,
                    page_load_milestones_ms: (0, f.b)(),
                    composer_ttfi_javascript: (0, e.a)(),
                    hydration: d.a.snapshot(),
                    page_load_durations: {
                        hydrate_to_outer_commit_ms: g(b?.["page_load.hydrate.start"], b?.["page_load.hydrate.commit"]),
                        entry_client_to_composer_ttfi_ms: g(b?.["entry.client"], b?.["composer.ttfi"]),
                        fcp_to_lcp_ms: g(a.view.performance?.fcp?.timestamp, a.view.performance?.lcp?.timestamp)
                    }
                }
            }
        })
    }),
    uZn3: (function(a, b, c) {
        var d = c("ekLq"),
            e = c("J9rA"),
            f = c("d6Ff"),
            g = c("bAhY"),
            h = c("mz2o"),
            i = c("BJjx");
        let j = "[data-sidebar-navigation-root]",
            k = `[role="list"], ${d.c.sidebarSection}, ${d.c.sidebarProjectListContainer}`,
            l = new WeakSet,
            m = () => void 0;

        function n(a) {
            let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
            try {
                let c = (0, h.b)(a, "chat_archive_to_visible_list_change");
                if (c && "visible" === document.visibilityState) return h => (function(a, b, c, h) {
                    try {
                        let m;
                        if ("visible" !== document.visibilityState || void 0 !== b.row && !b.row?.isConnected) return;
                        if ("native" === b.kind) {
                            let c = b.rowKey ?? (0, f.a)((0, e.a)(a.get, b.conversationId));
                            m = `[${d.b.sidebarThreadId}="${CSS.escape(c)}"][${d.b.sidebarThreadHostId}="${CSS.escape(b.hostId)}"]`
                        } else m = `[data-sidebar-archive-chatgpt-id="${CSS.escape(b.conversationId)}"]`;
                        let n = void 0 === b.row ? document.querySelectorAll(`${j} ${m}`) : [b.row],
                            o = Array.from(n).flatMap(a => {
                                let b = a.matches(m) && null != a.closest(j) ? (0, i.c)(a) : void 0;
                                return null == b ? [] : [{
                                    row: a,
                                    rect: b
                                }]
                            });
                        if (1 !== o.length) return;
                        let [p] = o, {
                            row: q
                        } = p, r = q.closest(k), s = q.closest(j);
                        if (null == r || null == s || !s.contains(r) || l.has(q)) return;
                        let t = "native" === b.kind ? q.closest("[data-sidebar-archive-motion]") : null;
                        if (t?.dataset.sidebarArchiveMotion === "exiting") return;
                        return function(a, b, c, e, f, h, j, k) {
                            var m;
                            let n, {
                                    row: o,
                                    rect: p
                                } = a,
                                q = e?.getBoundingClientRect().height ?? 0,
                                r = o.closest(d.c.sidebarScroll) ?? c,
                                s = new Set(c.querySelectorAll(f));
                            s.delete(o);
                            let t = null == e ? 1 : Number(getComputedStyle(e).opacity),
                                u = new AbortController,
                                v = {},
                                w = () => {
                                    u.abort(), z.disconnect(), A?.disconnect(), n?.(), window.clearTimeout(B), l.delete(o), delete v.stop
                                },
                                x = () => {
                                    if (n = void 0, !c.contains(b) || !c.isConnected || "visible" !== document.visibilityState || b.closest(i.a) || !b.checkVisibility?.({
                                            visibilityProperty: !0,
                                            opacityProperty: !0
                                        })) return void w();
                                    if (o.isConnected) {
                                        if (!b.contains(o) || e?.dataset.sidebarArchiveMotion !== "exiting") return void w();
                                        let a = o.getBoundingClientRect(),
                                            c = new DOMRect(a.x, a.y, a.width || p.width, a.height || p.height);
                                        if (!(0, i.b)(o, c)) return void w();
                                        let d = e.getBoundingClientRect().height < q,
                                            f = Number(getComputedStyle(e).opacity) < t;
                                        if (!d && !f) return
                                    } else if (Array.from(c.querySelectorAll(f)).some(a => !s.has(a)) || !(0, i.b)(b, p) || k?.() === !1) return void w();
                                    w(), j(performance.now() - h)
                                },
                                y = () => {
                                    u.signal.aborted || null != n || o.isConnected && e?.dataset.sidebarArchiveMotion !== "exiting" || (n = (0, g.a)(window, x))
                                },
                                z = new MutationObserver(a => {
                                    o.isConnected && (!b.contains(o) || a.some(a => Array.from(a.removedNodes).some(a => a.contains(o)))) ? w() : y()
                                }),
                                A = null != e && "u" > typeof ResizeObserver ? new ResizeObserver(y) : void 0,
                                B = window.setTimeout(w, 1e4);
                            v.stop = w, l.add(o);
                            try {
                                z.observe(b, {
                                    childList: !0,
                                    subtree: !0
                                }), null != e && (z.observe(e, {
                                    childList: !0,
                                    subtree: !0,
                                    attributes: !0,
                                    attributeFilter: ["data-sidebar-archive-motion", "style"]
                                }), A?.observe(e));
                                let a = {
                                    capture: !0,
                                    passive: !0,
                                    signal: u.signal
                                };
                                for (let b of (r.addEventListener("scroll", () => {
                                        o.isConnected && e?.dataset.sidebarArchiveMotion !== "exiting" && w()
                                    }, {
                                        signal: u.signal
                                    }), ["wheel", "touchmove"])) r.addEventListener(b, w, a);
                                for (let b of ["keydown", "pointerdown", "input"]) document.addEventListener(b, w, a);
                                for (let a of ["pagehide", "popstate", "hashchange", "resize"]) window.addEventListener(a, w, {
                                    signal: u.signal
                                });
                                document.addEventListener("visibilitychange", w, {
                                    signal: u.signal
                                })
                            } catch {
                                w()
                            }
                            return m = v, () => m.stop?.()
                        }(p, r, s, t, m, c, h, "native" === b.kind ? b.confirmsRemoval : void 0)
                    } catch {
                        return
                    }
                })(a, h, b, c)
            } catch {}
            return m
        }
        c.d(b, {}, {
            a: function(a, b) {
                let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
                return n(a, c)(b)
            },
            b: n
        })
    }),
    pxay: (function(a, b, c) {
        c.d(b, {
            a: () => o,
            b: () => p
        });
        var d = c("ekLq"),
            e = c("TNWb"),
            f = c("bAhY"),
            g = c("mz2o");

        function h(a) {
            let b = (0, g.c)(a, .1);
            return b && {
                duration: a => {
                    b({
                        spanName: "chat_move_to_visible_list_change",
                        durationMs: a,
                        outcome: "success"
                    })
                },
                visibilityUnknown: () => {
                    b({
                        spanName: "chat_move_visibility_at_accept_unknown",
                        outcome: "success"
                    })
                }
            }
        }
        var i = c("BJjx");
        let j = "[data-sidebar-navigation-root]",
            k = "data-sidebar-project-container-id",
            l = `[${k}], ${d.c.sidebarProjectListContainer}`,
            m = {
                threshold: 0,
                trackVisibility: !0,
                delay: 100
            },
            n = new Map;

        function o(a, b) {
            let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
            return q(b, c, () => h(a))
        }

        function p(a, b, c) {
            let e, f, {
                threadKey: g,
                source: k
            } = b;
            try {
                if (e = h(a), null != e && "visible" === document.visibilityState) {
                    let a = c instanceof Element ? c.closest(`[${d.b.sidebarThreadId}="${CSS.escape(g)}"]`) : null,
                        b = a?.closest(j),
                        e = null != b && null != (0, i.c)(b) ? b : r(),
                        h = null == e ? void 0 : t(e, null != a && e.contains(a) ? [a] : s(e, g), k);
                    null != h && u(h) && (f = {
                        id: h.id,
                        rect: h.rect,
                        scroller: h.scroller,
                        scrollLeft: h.scroller.scrollLeft,
                        scrollTop: h.scroller.scrollTop
                    })
                }
            } catch {}
            return {
                start: function(a) {
                    let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
                    return q(a, b, () => e, a.threadKey === g ? f : void 0)
                }
            }
        }

        function q(a, b, c, e) {
            if (n.get(a.threadKey)?.abort(), a.source !== a.destination && "visible" === document.visibilityState) try {
                let g = c();
                if (null == g) return;
                let h = r();
                if (null == h) return;
                let j = new AbortController;
                n.set(a.threadKey, j);
                try {
                    return function(a, b, c, e, g, h) {
                        var j, l, o;
                        let p, q, r, A, B, C, D, {
                            threadKey: E,
                            source: F,
                            destination: G
                        } = b;
                        c.signal.addEventListener("abort", () => n.delete(E), {
                            once: !0
                        });
                        let H = s(a, E),
                            I = t(a, H, F, G),
                            J = null != G && !y(a, G) && !H.some(a => x(a) === G);
                        if (!I && !J) return void c.abort();
                        let K = new AbortController,
                            L = e,
                            M = "released",
                            N = !1,
                            O = !0,
                            P = null != I && (u(I) || (j = a, l = I, o = h, null != o && l.id === o.id && l.scroller === o.scroller && l.scroller.scrollTop === o.scrollTop && l.scroller.scrollLeft === o.scrollLeft && l.rect.left === o.rect.left && l.rect.top === o.rect.top && l.rect.width === o.rect.width && l.rect.height === o.rect.height && v(l, (a, b) => w(j, a, b)))),
                            Q = !1,
                            R = () => c.abort(),
                            S = () => {
                                C = window.setTimeout(R, 1e4), D = window.setTimeout(R, 6e4)
                            },
                            T = () => {
                                K.abort(), _.disconnect(), r?.disconnect(), B?.disconnect(), q?.(), window.clearTimeout(C)
                            },
                            U = () => {
                                N && null != p && !c.signal.aborted && (R(), "unknown-at-accept" === p ? g.visibilityUnknown() : g.duration(p.durationMs))
                            },
                            V = a => {
                                K.signal.aborted || "prompt" === M || (p = a, T(), U())
                            },
                            W = () => {
                                if (q = void 0, "visible" !== document.visibilityState || !(0, i.c)(a)) return void c.abort();
                                let b = s(a, E);
                                O && null != I && P && !b.some(a => x(a) === I.id) && !y(a, I.id) && I.scroller.isConnected && (0, i.c)(I.scroller) && v(I, (a, b) => w(I.scroller, a, b), I.scroller.getBoundingClientRect()) && (null != B && Y(B.takeRecords()), V({
                                    durationMs: performance.now() - L
                                }))
                            },
                            X = b => null != G && a.contains(b) && x(b) === G && "visible" === document.visibilityState && !y(a, G) && null != (0, i.c)(b),
                            Y = a => {
                                let b = A;
                                if (!K.signal.aborted && b)
                                    for (let c of a) c.target === b && "prompt" !== M && ("confirmed" !== M || !(c.time <= L)) && (z(c) ? X(b) && V(Q ? "unknown-at-accept" : {
                                        durationMs: c.time - L
                                    }) : Q = !1)
                            },
                            Z = a => {
                                let b = new IntersectionObserver(a => {
                                    B === b && Y(a)
                                }, m);
                                B = b, b.observe(a)
                            },
                            $ = () => {
                                if (!J || null == G) return;
                                let b = s(a, E).find(a => x(a) === G);
                                b !== A && (B?.disconnect(), Q = !1, A = b, null != b && Z(b))
                            },
                            _ = new MutationObserver(() => {
                                $(), "prompt" !== M && !K.signal.aborted && O && null != I && null == q && (q = (0, f.a)(window, W))
                            });
                        S(), c.signal.addEventListener("abort", () => {
                            T(), window.clearTimeout(D)
                        }, {
                            once: !0
                        }), null != I && (r = new IntersectionObserver(a => {
                            for (let b of a) "prompt" !== M && ("confirmed" !== M || b.time > L) && I.row.isConnected && x(I.row) === I.id && (P = z(b))
                        }, m)).observe(I.row), _.observe(a, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0,
                            attributeFilter: [d.b.sidebarThreadId, k, "hidden", d.b.sidebarSectionCollapsed, d.b.sidebarProjectCollapsed]
                        });
                        let aa = {
                                capture: !0,
                                passive: !0,
                                signal: K.signal
                            },
                            ab = a => {
                                "prompt" === M && a.target instanceof Element && a.target.closest('[role="dialog"]') || R()
                            };
                        for (let a of ["wheel", "touchmove", "pointerdown", "keydown", "visibilitychange"]) document.addEventListener(a, ab, aa);
                        for (let a of ["pagehide", "popstate", "hashchange", "resize"]) window.addEventListener(a, ab, aa);
                        return {
                            waitForConfirmation() {
                                M = "prompt", window.clearTimeout(C), window.clearTimeout(D)
                            },
                            acceptConfirmation(b) {
                                if ("prompt" === M && !c.signal.aborted) try {
                                    if (L = b, !(0, i.c)(a) || "visible" !== document.visibilityState) return void R();
                                    $();
                                    let c = null != I && a.contains(I.row) && x(I.row) === I.id;
                                    O = c, P = c && u(I, I.scroller.getBoundingClientRect()), M = "confirmed", S(), A && (Q = !0, B?.disconnect(), Z(A))
                                } catch {
                                    R()
                                }
                            },
                            finish(a) {
                                a ? "prompt" !== M && (N = !0, U()) : R()
                            }
                        }
                    }(h, a, j, b, g, e)
                } catch {
                    j.abort();
                    return
                }
            } catch {
                return
            }
        }

        function r() {
            let a = Array.from(document.querySelectorAll(j)).filter(a => null != (0, i.c)(a));
            return 1 === a.length ? a[0] : void 0
        }

        function s(a, b) {
            let c = `[${d.b.sidebarThreadId}="${CSS.escape(b)}"]`;
            return Array.from(a.querySelectorAll(c))
        }

        function t(a, b, c, e) {
            let f = b.flatMap(b => {
                let f = x(b);
                if (null == f || f === e || null != c && c !== f) return [];
                let g = b.closest(d.c.sidebarScroll) ?? a,
                    h = g.getBoundingClientRect(),
                    j = (0, i.c)(b, h);
                return null == j ? [] : [{
                    id: f,
                    row: b,
                    rect: j,
                    clip: h,
                    scroller: g
                }]
            });
            return 1 === f.length ? f[0] : void 0
        }

        function u(a) {
            let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.clip;
            return v(a, (b, c) => a.row.contains(document.elementFromPoint(b, c)), b)
        }

        function v(a, b) {
            let {
                rect: c,
                clip: d
            } = a, f = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d;
            if ((0, e.b)()) return !1;
            let g = Math.max(0, c.left, f.left),
                h = Math.min(window.innerWidth, c.right, f.right),
                j = Math.max(0, c.top, f.top),
                k = Math.min(window.innerHeight, c.bottom, f.bottom);
            if (h <= g || k <= j) return !1;
            let l = Array.from(document.querySelectorAll('[role="tooltip"], [data-sidebar-thread-drag-overlay], [data-sidebar-sticky-heading]')).map(a => (0, i.c)(a)).filter(a => null != a),
                m = (j + k) / 2;
            return [.25, .5, .75].some(a => {
                let c = g + (h - g) * a;
                return !l.some(a => c >= a.left && c < a.right && m >= a.top && m < a.bottom) && b(c, m)
            })
        }

        function w(a, b, c) {
            let d = document.elementFromPoint(b, c);
            return null != d && a.contains(d)
        }

        function x(a) {
            let b = a.closest(l),
                c = b?.getAttribute(d.b.sidebarProjectListId);
            return null == c ? b?.getAttribute(k) ?? null : `project:${c}`
        }

        function y(a, b) {
            let c = a.querySelector(`[${k}="${CSS.escape(b)}"]`);
            if (null == c) return !1;
            let e = b.startsWith("project:") ? d.b.sidebarProjectCollapsed : d.b.sidebarSectionCollapsed;
            return !!c.closest(i.a) || (c.hasAttribute(e) ? c : c.querySelector(`[${e}]`))?.getAttribute(e) === "true"
        }

        function z(a) {
            return a.isIntersecting && a.intersectionRect.width > 0 && a.intersectionRect.height > 0 && "isVisible" in a && !0 === a.isVisible
        }
    }),
    uNh5: (function(a, b, c) {
        var d = c("SRbQ"),
            e = c("ZG9f"),
            f = c("KvQL"),
            g = c("CSxw"),
            h = c("GaA7"),
            i = c("e6DU");
        let j = new Set(Object.values(f.rc).flat());
        c.d(b, {}, {
            a: function() {
                let a = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let c = h.a?.lsp;
                    if (null == c || (0, g.b)()) return;
                    let f = new Map,
                        k = !1,
                        l = (0, d.a)(a, new e.b(async a => {
                            if (k) return;
                            let b = f.get(a.id);
                            if (f.has(a.id) || (b = i.a.start("languageServerStartup", {
                                    server: a.server,
                                    language: j.has(a.language) ? a.language : void 0,
                                    remote: a.remote
                                }, {
                                    atMs: a.startedAtMs
                                }), f.set(a.id, b)), "start" === a.phase) return;
                            let c = {
                                atMs: a.atMs,
                                attributes: {
                                    runtime: a.runtime,
                                    runtimeVersion: a.runtimeVersion,
                                    optionSource: a.optionSource,
                                    configuredServer: a.configuredServer
                                }
                            };
                            "option-chosen" === a.phase ? i.a.event(b, "lspOptionChosen", c) : "download-completed" === a.phase || "option-failed" === a.phase ? i.a.event(b, "download-completed" === a.phase ? "runtimeDownloadCompleted" : "runtimeOptionFailed", c) : ("ready" === a.phase ? i.a.successIfActive(b, c) : "failure" === a.phase ? i.a.failureIfActive(b, c) : i.a.cancelIfActive(b, c), f.delete(a.id))
                        }), !1),
                        m = c.subscribeStartup(l);
                    return m.onRpcBroken(b), b;

                    function b() {
                        if (!k) {
                            for (let a of (k = !0, m[Symbol.dispose](), f.values())) i.a.cancelIfActive(a);
                            f.clear()
                        }
                    }
                } catch (b) {
                    a.error = b, a.hasError = !0
                } finally {
                    (0, d.e)(a)
                }
            }
        })
    }),
    e6DU: (function(a, b, c) {
        c.d(b, {
            a: () => z
        });
        var d = c("zPtR"),
            e = c("xWvF"),
            f = c("nZhi");
        class g {
            options;
            intervalId = crypto.randomUUID();
            active = !0;
            startedAtMs;
            lastAtMs;
            order = 0;
            attributes;
            markers = new Set;
            pendingEvents = [];
            isEmitting = !1;
            now;
            constructor(a) {
                this.options = a, this.now = a.now ?? h, this.startedAtMs = this.lastAtMs = a.atMs ?? this.now(), this.attributes = {
                    ...a.attributes
                }, this.record("start", {
                    atMs: this.startedAtMs
                })
            }
            get isActive() {
                return this.active
            }
            static event = (a, b, c) => {
                a?.record(b, c)
            };
            static eventOnceIfActive = (a, b, c) => {
                a?.active && !a.markers.has(b) && a.record(b, c)
            };
            static successIfActive = (a, b) => {
                a?.record("success", b)
            };
            static failureIfActive = (a, b) => {
                a?.record("failure", b)
            };
            static cancelIfActive = (a, b) => {
                a?.record("cancel", b)
            };
            record(a, b) {
                if (!this.active) return;
                let c = b?.atMs ?? this.now();
                if (!Number.isFinite(c)) return;
                let d = Math.max(c, this.lastAtMs),
                    e = "success" === a || "failure" === a || "cancel" === a ? a : void 0;
                if (b?.attributes != null && (this.attributes = {
                        ...this.attributes,
                        ...b.attributes
                    }), this.lastAtMs = d, null != e ? this.active = !1 : "start" !== a && this.markers.add(a), this.pendingEvents.push({
                        intervalId: this.intervalId,
                        intervalType: this.options.intervalType,
                        order: this.order++,
                        marker: a,
                        startedAtMs: this.startedAtMs,
                        atMs: d,
                        durationMs: d - this.startedAtMs,
                        attributes: this.attributes,
                        outcome: e
                    }), !this.isEmitting) {
                    for (let a of (this.isEmitting = !0, this.pendingEvents)) try {
                        this.options.emit(a)?.catch(() => {})
                    } catch {}
                    this.pendingEvents.length = 0, this.isEmitting = !1
                }
            }
        }

        function h() {
            return performance.timeOrigin + performance.now()
        }
        var i = c("lAQI");
        let j = i.E().min(0).max(1).catch(0),
            k = i.Q([i.F({
                device: j.optional(),
                interval: j.optional()
            }), i.N([j, i.R()]).transform(a => {
                let [b] = a;
                return {
                    device: 1,
                    interval: b
                }
            })]).catch({
                device: 0,
                interval: 0
            }),
            l = i.J(i.L(), k).catch({});

        function m(a) {
            return 1 === a || a > 0 && Math.random() < a
        }
        let n = {
                languageServerStartup: "CHATGPT_CLIENT_INTERVAL_TYPE_LANGUAGE_SERVER_STARTUP",
                codeNavigation: "CHATGPT_CLIENT_INTERVAL_TYPE_CODE_NAVIGATION",
                unifiedSearch: "CHATGPT_CLIENT_INTERVAL_TYPE_UNIFIED_SEARCH",
                applicationStartup: "CHATGPT_CLIENT_INTERVAL_TYPE_APPLICATION_STARTUP",
                screenLoad: "CHATGPT_CLIENT_INTERVAL_TYPE_SCREEN_LOAD",
                conversationTurn: "CHATGPT_CLIENT_INTERVAL_TYPE_CONVERSATION_TURN"
            },
            o = {
                languageServerComplete: "CHATGPT_CLIENT_MARKER_TYPE_LANGUAGE_SERVER_COMPLETE",
                runtimeDownloadCompleted: "CHATGPT_CLIENT_MARKER_TYPE_RUNTIME_DOWNLOAD_COMPLETED",
                lspOptionChosen: "CHATGPT_CLIENT_MARKER_TYPE_LANGUAGE_SERVER_OPTION_CHOSEN",
                runtimeOptionFailed: "CHATGPT_CLIENT_MARKER_TYPE_RUNTIME_OPTION_FAILED",
                firstResultShown: "CHATGPT_CLIENT_MARKER_TYPE_FIRST_RESULT_SHOWN",
                resultChosen: "CHATGPT_CLIENT_MARKER_TYPE_RESULT_CHOSEN",
                searchModeChanged: "CHATGPT_CLIENT_MARKER_TYPE_SEARCH_MODE_CHANGED",
                start: "CHATGPT_CLIENT_MARKER_TYPE_START",
                success: "CHATGPT_CLIENT_MARKER_TYPE_SUCCESS",
                failure: "CHATGPT_CLIENT_MARKER_TYPE_FAILURE",
                cancel: "CHATGPT_CLIENT_MARKER_TYPE_CANCEL",
                firstFrame: "CHATGPT_CLIENT_MARKER_TYPE_FIRST_FRAME",
                contentRendered: "CHATGPT_CLIENT_MARKER_TYPE_CONTENT_RENDERED",
                loadedFinally: "CHATGPT_CLIENT_MARKER_TYPE_LOADED_FINALLY",
                loadedFromCache: "CHATGPT_CLIENT_MARKER_TYPE_LOADED_FROM_CACHE",
                loadingShimmerRendered: "CHATGPT_CLIENT_MARKER_TYPE_LOADING_SHIMMER_RENDERED",
                firstVisibleToken: "CHATGPT_CLIENT_MARKER_TYPE_FIRST_VISIBLE_TOKEN",
                submit: "CHATGPT_CLIENT_MARKER_TYPE_SUBMIT",
                statsigReady: "CHATGPT_CLIENT_MARKER_TYPE_STATSIG_READY"
            },
            p = new class {
                production;
                configuration = {};
                cachedRates = new Map;
                devices = new Map;
                constructor(a) {
                    this.production = a
                }
                updateSamplingConfiguration(a) {
                    for (let [b, c] of(this.configuration = l.parse(a), this.cachedRates.clear(), this.devices)) this.rates(b).device !== c.rate && this.devices.delete(b);
                    return this.configuration
                }
                sample(a) {
                    let b = this.rates(a),
                        c = b.device * b.interval;
                    if (c <= 0 || !Number.isFinite(1 / c)) return null;
                    let d = this.devices.get(a);
                    return (null == d && (d = {
                        rate: b.device,
                        sampled: m(b.device)
                    }, this.devices.set(a, d)), d.sampled && m(b.interval)) ? 1 / c : null
                }
                rates(a) {
                    let b = this.cachedRates.get(a);
                    if (null != b) return b;
                    let c = {
                        ...{
                            device: this.production ? .01 : 1,
                            interval: 1
                        },
                        ...this.configuration.__base
                    };
                    "CHATGPT_CLIENT_INTERVAL_TYPE_CONVERSATION_TURN" === a && (c.device = 1, c.interval = 1);
                    let d = {
                        ...c,
                        ...this.configuration[a]
                    };
                    return this.cachedRates.set(a, d), d
                }
            }(!0),
            q = "codex.3895505958",
            r = !1,
            s = new Map,
            t = null,
            u = null,
            v = "pending",
            w = [],
            x = performance.timeOrigin + performance.now(),
            y = !1,
            z = {
                setApplicationStartInstant: a => !y && !!Number.isFinite(a) && (x = a, !0),
                start(a, b, c) {
                    if (y = !0, !r) {
                        r = !0;
                        try {
                            p.updateSamplingConfiguration(JSON.parse(localStorage.getItem(q) ?? "{}"))
                        } catch {}
                    }
                    let e = "disabled" === v ? null : p.sample(n[a]);
                    return null != e || (0, f.e)() ? new g({
                        intervalType: a,
                        attributes: b,
                        atMs: c?.atMs,
                        emit: a => D(() => (function(a, b) {
                            if ((0, f.e)()) {
                                let b = Math.max(performance.timeOrigin, a.startedAtMs);
                                (0, f.d)({
                                    name: `interval.${a.intervalType}.${a.marker}`,
                                    source: "Client spans",
                                    startedAtMs: b,
                                    durationMs: Math.max(0, a.atMs - b),
                                    metadata: {
                                        intervalId: a.intervalId,
                                        intervalDurationMs: a.durationMs,
                                        order: a.order,
                                        outcome: a.outcome
                                    }
                                })
                            }
                            if ("start" === a.marker) {
                                if (null == b) return;
                                let c = B(u);
                                if ("disabled" === c || s.size >= 32) return;
                                let d = {
                                    sampleWeight: b,
                                    decision: c,
                                    events: [],
                                    ended: !1,
                                    timeout: "pending" === c ? setTimeout(() => {
                                        "enabled" !== d.decision && A(a.intervalId)
                                    }, 18e5) : void 0
                                };
                                s.set(a.intervalId, d)
                            }
                            let c = s.get(a.intervalId);
                            if (null == c) return;
                            c.ended = null != a.outcome, "submit" === a.marker && "startSource" in a.attributes && "CHATGPT_CLIENT_MARKER_CONVERSATION_TURN_START_SOURCE_CLICK" === a.attributes.startSource && null == c.clickToSubmitMs && (c.clickToSubmitMs = a.durationMs);
                            let e = Object.hasOwn(o, a.marker) ? o[a.marker] : void 0;
                            if (null != e) {
                                let b = {
                                    intervalType: n[a.intervalType],
                                    markerType: e,
                                    intervalId: a.intervalId,
                                    intervalOrder: (0, d.c)(a.order),
                                    intervalDurationMs: a.durationMs,
                                    applicationDurationMs: Math.max(0, a.atMs - x),
                                    hits: c.sampleWeight,
                                    sampleWeight: c.sampleWeight,
                                    ... function(a, b) {
                                        let c = a.attributes;
                                        switch (a.intervalType) {
                                            case "codeNavigation":
                                                return {
                                                    codeNavigationAttributes: {
                                                        source: c.source,
                                                        language: c.language,
                                                        kind: c.kind
                                                    }
                                                };
                                            case "languageServerStartup":
                                                return {
                                                    languageServerStartupAttributes: {
                                                        server: c.server,
                                                        language: c.language,
                                                        remote: c.remote,
                                                        runtime: c.runtime,
                                                        runtimeVersion: c.runtimeVersion,
                                                        optionSource: c.optionSource,
                                                        configuredServer: c.configuredServer
                                                    }
                                                };
                                            case "unifiedSearch":
                                                return {
                                                    unifiedSearchAttributes: {
                                                        searchMode: c.searchMode,
                                                        openSource: c.openSource,
                                                        selectedEntityType: c.selectedEntityType,
                                                        selectedResultIndex: c.selectedResultIndex,
                                                        typedCharacterCount: c.typedCharacterCount
                                                    }
                                                };
                                            case "applicationStartup":
                                                return {
                                                    applicationStartupAttributes: {
                                                        settledRootStateKind: c.settledRootStateKind
                                                    }
                                                };
                                            case "screenLoad":
                                                return {
                                                    screenLoadAttributes: {
                                                        screen: c.screen,
                                                        fromScreen: c.fromScreen,
                                                        cause: c.cause,
                                                        readinessSource: c.readinessSource
                                                    }
                                                };
                                            case "conversationTurn":
                                                return {
                                                    conversationTurnAttributes: {
                                                        model: c.model,
                                                        productExperience: c.productExperience,
                                                        startSource: c.startSource,
                                                        clickToSubmitMs: c.clickToSubmitMs ?? (0, d.c)(b)
                                                    }
                                                }
                                        }
                                    }(a, c.clickToSubmitMs)
                                };
                                if ("enabled" === c.decision && u?.enabled && u.isAllowed()) C(u, b);
                                else if ("pending" === c.decision) {
                                    if (c.events.length >= 64) return void A(a.intervalId);
                                    c.events.push(b)
                                }
                            }
                            c.ended && "pending" !== c.decision && A(a.intervalId)
                        })(a, e))
                    }) : null
                },
                event: g.event,
                eventOnceIfActive: g.eventOnceIfActive,
                successIfActive: g.successIfActive,
                failureIfActive: g.failureIfActive,
                cancelIfActive: g.cancelIfActive,
                setUpAnalyticsSink: function(a) {
                    y = !0, t = a;
                    let b = B(a);
                    v = b, D(() => (function(a, b) {
                        if (u = a, null == a) {
                            if (null == t)
                                for (let a of s.keys()) A(a);
                            return
                        }
                        for (let [c, d] of s) {
                            if (("pending" === d.decision || "disabled" === b) && (d.decision = b), "enabled" === d.decision && a.enabled && a.isAllowed()) {
                                for (let b of (clearTimeout(d.timeout), d.timeout = void 0, d.events)) C(a, b);
                                d.events.length = 0
                            } else if ("pending" !== d.decision) {
                                A(c);
                                continue
                            }
                            d.ended && "pending" !== d.decision && A(c)
                        }
                    })(a, b))
                },
                updateSamplingConfiguration: function(a) {
                    y = !0, r = !0;
                    let b = p.updateSamplingConfiguration(a);
                    try {
                        localStorage.setItem(q, JSON.stringify(b))
                    } catch {}
                }
            };

        function A(a) {
            let b = s.get(a);
            null != b && clearTimeout(b.timeout), s.delete(a)
        }

        function B(a) {
            return null == a || "pending" === a.analyticsState ? "pending" : a.enabled && a.isAllowed() ? "enabled" : "disabled"
        }

        function C(a, b) {
            try {
                t?.enabled && t.isAllowed() && a.logProductEvent(e.b, b)
            } catch {}
        }

        function D(a) {
            w.push(a), 1 === w.length && queueMicrotask(() => {
                for (let a of w) try {
                    a()
                } catch {}
                w.length = 0
            })
        }
    }),
    kjQz: (function(a, b, c) {
        c.d(b, {
            a: () => q,
            b: () => r
        });
        var d = c("gbzJ"),
            e = c("pwwq"),
            f = c("GaA7"),
            g = c("pR9v"),
            h = c("jgoj");
        class i extends g.f {
            windows = new Map;
            start(a) {
                var b;
                let c, d, e, f = super.start(a);
                return "u" < typeof document || this.windows.set(f, (b = f.startedAtPerformanceMs, c = {}, d = 1 / 0, (e = (0, h.a)({
                    frame(a, e) {
                        if (a < b || e > d) return;
                        let f = e - a;
                        c.frameGapCount = (c.frameGapCount ?? 0) + 1, c.frameGapOver50MsCount = (c.frameGapOver50MsCount ?? 0) + Number(f > 50), c.frameGapMsSum = (c.frameGapMsSum ?? 0) + f, c.frameGapMsMax = Math.max(c.frameGapMsMax ?? 0, f)
                    },
                    event(a) {
                        if (a.processingEnd < b || a.processingStart > d) return;
                        c.interactionEventCount = (c.interactionEventCount ?? 0) + 1;
                        let e = a.processingEnd - a.processingStart;
                        null != c.worstEventDurationMs && (a.duration < c.worstEventDurationMs || a.duration === c.worstEventDurationMs && e <= (c.worstEventProcessingMs ?? 0)) || (c.worstEventDurationMs = a.duration, c.worstEventInputDelayMs = a.processingStart - a.startTime, c.worstEventProcessingMs = e, c.worstEventPresentationDelayMs = Math.max(0, a.startTime + a.duration - a.processingEnd))
                    }
                })).eventsSupported && (c.interactionEventCount = 0), {
                    metrics: c,
                    end: () => {
                        d = performance.now()
                    },
                    stop: e.stop
                })), f
            }
            finish(a, b, c) {
                let d = this.windows.get(a);
                d?.end(), super.finish(a, (c, e) => {
                    this.stopWindow(a), b({
                        ...c,
                        ...d?.metrics
                    }, e)
                }, c)
            }
            discard(a) {
                this.stopWindow(a), super.discard(a)
            }
            stopWindow(a) {
                this.windows.get(a)?.stop(), this.windows.delete(a)
            }
        }
        let j = {
            app_start: 12e4,
            artifact_generation: 12e4,
            artifact_preview: 12e4,
            artifact_thumbnail: 12e4,
            dictation: 66e4,
            pages_realtime_scroll: 12e4,
            pages_realtime_drag: 12e4,
            pages_realtime_zoom_pan: 12e4,
            page_navigation: 6e4,
            page_document_bootstrap: 6e4,
            plugins_page_load: 3e4,
            review_open: 6e4,
            side_chat_open: 12e4,
            spaces_ephemeral_text_draft: 36e5,
            spaces_ephemeral_image_candidate: 36e5,
            spaces_ephemeral_visualization_draft_create: 36e5,
            spaces_ephemeral_visualization_draft_revise: 36e5,
            spaces_ephemeral_visualization_update: 36e5,
            spaces_ephemeral_visualization_create: 36e5,
            spaces_ephemeral_artifact_create: 36e5,
            spaces_ephemeral_canvas_command: 36e5,
            thread_history_page: 12e4,
            thread_hydration: 12e4,
            home_navigation: 3e4,
            thread_navigation: 3e4,
            turn_first_response_visible: 12e4,
            webview_load: 12e4
        };
        class k {
            performance;
            span;
            constructor(a, b) {
                this.performance = a, this.span = b
            }
            mark(a, b) {
                this.performance.mark(this.span, a, b)
            }
            measure(a, b) {
                return this.performance.measure(this.span, a, b)
            }
            end(a) {
                this.performance.end(this.span, a)
            }
            fail(a) {
                this.performance.fail(this.span, a)
            }
            isRecording() {
                return null != this.span && !this.span.terminal
            }
            recordAnalyticsSuccess() {
                return this.performance.recordAnalyticsSuccess(this.span)
            }
            abort(a) {
                this.performance.abort(this.span, a)
            }
            get trace() {
                return this.span?.trace ?? null
            }
        }

        function l(a) {
            try {
                a?.()
            } catch {}
        }

        function m() {
            return performance.timeOrigin + performance.now()
        }

        function n(a, b) {
            return Math.round(10 * Math.max(0, b - a)) / 10
        }
        let o = new Set,
            p = {
                app_start: "desktop.app_start",
                home_navigation: "desktop.home_navigation",
                artifact_generation: "desktop.artifact_generation",
                artifact_preview: "desktop.artifact_preview",
                artifact_thumbnail: "desktop.artifact_thumbnail",
                dictation: "desktop.dictation",
                pages_realtime_scroll: "desktop.pages_realtime_scroll",
                pages_realtime_drag: "desktop.pages_realtime_drag",
                pages_realtime_zoom_pan: "desktop.pages_realtime_zoom_pan",
                page_navigation: "desktop.page_navigation",
                page_document_bootstrap: "desktop.page_document_bootstrap",
                plugins_page_load: "desktop.plugins_page_load",
                review_open: "desktop.review_open",
                side_chat_open: "desktop.side_chat_open",
                spaces_ephemeral_text_draft: "desktop.spaces_ephemeral_text_draft",
                spaces_ephemeral_image_candidate: "desktop.spaces_ephemeral_image_candidate",
                spaces_ephemeral_visualization_draft_create: "desktop.spaces_ephemeral_visualization_draft_create",
                spaces_ephemeral_visualization_draft_revise: "desktop.spaces_ephemeral_visualization_draft_revise",
                spaces_ephemeral_visualization_update: "desktop.spaces_ephemeral_visualization_update",
                spaces_ephemeral_visualization_create: "desktop.spaces_ephemeral_visualization_create",
                spaces_ephemeral_artifact_create: "desktop.spaces_ephemeral_artifact_create",
                spaces_ephemeral_canvas_command: "desktop.spaces_ephemeral_canvas_command",
                thread_history_page: "desktop.thread_history_page",
                thread_hydration: "thread.hydration",
                thread_navigation: "desktop.thread_navigation",
                turn_first_response_visible: "desktop.turn_submit",
                webview_load: "desktop.webview_load"
            },
            q = new class {
                activeInteractions = new Map;
                beginCpuSampling;
                clientPlatform;
                captureAppState;
                hostType;
                now;
                isDocumentHidden;
                responsivenessTracker;
                startTrace;
                wallNow;
                heartbeatTimer = null;
                pendingEvents = [];
                terminalInteractions = new Set;
                analytics;
                analyticsEmitters;
                loggingConfigured = !1;
                samplingEnabled = null;
                constructor({
                    beginCpuSampling: a = () => null,
                    captureAppState: b = async () => null,
                    clientPlatform: c,
                    hostType: d,
                    now: e = m,
                    isDocumentHidden: f = () => "u" > typeof document && "visible" !== document.visibilityState,
                    responsivenessTracker: g = new i,
                    startTrace: h = () => null,
                    subscribeToDocumentVisibility: j = a => {
                        "u" > typeof document && document.addEventListener("visibilitychange", a)
                    },
                    wallNow: k = e
                }) {
                    this.beginCpuSampling = a, this.clientPlatform = c, this.captureAppState = b, this.hostType = d, this.now = e, this.isDocumentHidden = f, this.responsivenessTracker = g, this.startTrace = h, this.wallNow = k, j(() => {
                        this.handleDocumentVisibilityChange()
                    })
                }
                setAppStateCapture(a) {
                    this.captureAppState = a ?? (async () => null)
                }
                configurePerformanceLogging(a, b) {
                    for (let c of (this.analytics = b, this.analyticsEmitters = null == b ? void 0 : {
                            app_start: b.emit,
                            artifact_generation: b.emit,
                            artifact_preview: b.emit,
                            artifact_thumbnail: b.emit,
                            dictation: b.emit,
                            pages_realtime_scroll: b.emit,
                            pages_realtime_drag: b.emit,
                            pages_realtime_zoom_pan: b.emit,
                            page_navigation: b.emit,
                            page_document_bootstrap: b.emit,
                            plugins_page_load: b.emit,
                            review_open: b.emit,
                            side_chat_open: b.emit,
                            spaces_ephemeral_text_draft: b.emit,
                            spaces_ephemeral_image_candidate: b.emit,
                            spaces_ephemeral_visualization_draft_create: b.emit,
                            spaces_ephemeral_visualization_draft_revise: b.emit,
                            spaces_ephemeral_visualization_update: b.emit,
                            spaces_ephemeral_visualization_create: b.emit,
                            spaces_ephemeral_artifact_create: b.emit,
                            spaces_ephemeral_canvas_command: b.emit,
                            ...{},
                            thread_history_page: b.emit,
                            thread_hydration: b.emit,
                            home_navigation: b.emit,
                            thread_navigation: b.emit,
                            turn_first_response_visible: b.emit,
                            webview_load: b.emit
                        }, this.loggingConfigured = !0, this.samplingEnabled = a, this.activeInteractions.values())) "pending" === c.decision && (a ? (c.decision = "sampled", c.sampling = b?.sampling) : this.drop(c));
                    for (let c of this.terminalInteractions.values()) "pending" === c.decision && (c.decision = a ? "sampled" : "dropped", c.sampling = a ? b?.sampling : void 0, a || this.settleAnalytics(c));
                    for (let {
                            emit: c,
                            span: d
                        }
                        of this.pendingEvents.splice(0)) "pending" === d.decision && (d.decision = a ? "sampled" : "dropped", d.sampling = a ? b?.sampling : void 0), "sampled" === d.decision ? c() : this.settleAnalytics(d)
                }
                resetPerformanceLoggingConfiguration() {
                    this.analytics = void 0, this.analyticsEmitters = void 0, this.loggingConfigured = !1, this.samplingEnabled = null
                }
                start(a, b) {
                    let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        d = j[a];
                    if (null == d) return l(c.onAnalyticsSettled), new k(this, null);
                    let e = `${a}:${c.key??""}`,
                        f = this.activeInteractions.get(e);
                    null != f && this.finish(f, {
                        outcome: "aborted",
                        reason: "superseded"
                    });
                    let g = this.startTrace({
                        attributes: c.traceAttributes ?? {},
                        name: a,
                        startedAtMs: c.startedAtMs,
                        trace: c.trace
                    });
                    if (!1 === this.samplingEnabled && !c.recordUnsampled && null == g) return l(c.onAnalyticsSettled), new k(this, null);
                    let h = this.now(),
                        i = this.wallNow(),
                        m = c.startedAtMs ?? h,
                        n = c.wallStartedAtMs ?? i,
                        o = !1 === this.samplingEnabled ? "dropped" : !0 === this.samplingEnabled ? "sampled" : "pending",
                        p = {
                            activeKey: e,
                            observedPhase: null,
                            analyticsRecorded: !1,
                            analyticsAttributesReady: "dropped" === o && null == g ? void 0 : c.captureAttributes?.(g).catch(() => {}),
                            attributes: b,
                            backgroundDurationMs: 0,
                            backgroundStartedAtMs: this.isDocumentHidden() ? i : null,
                            cpuSampling: "dropped" === o || !0 === c.backfilled ? null : this.beginCpuSampling(),
                            decision: o,
                            heartbeatGapDurationMsSum: 0,
                            lastHeartbeatAtMs: h,
                            lastHeartbeatWallAtMs: i,
                            responsivenessToken: "dropped" === o ? null : this.responsivenessTracker.start(m),
                            marks: {},
                            name: a,
                            observationTimeout: null != c.observationTimeoutMs,
                            onAnalyticsSettled: c.onAnalyticsSettled,
                            onTerminal: c.onTerminal,
                            sampling: !0 === this.samplingEnabled ? this.analytics?.sampling : void 0,
                            shouldEmitAnalytics: c.shouldEmitAnalytics,
                            startedAtMs: m,
                            terminal: !1,
                            timeout: null,
                            timeoutRemainingMs: c.observationTimeoutMs ?? c.timeoutMs ?? d,
                            timeoutStartedAtMs: null,
                            trace: g?.trace ?? c.trace,
                            keepLocalTraceWhenUnsampled: !0 === c.recordUnsampled,
                            localTrace: c.startLocalTrace?.(m, this.now),
                            traceHandle: g,
                            wallStartedAtMs: n
                        };
                    return "dropped" === o && this.settleAnalytics(p), this.activeInteractions.set(e, p), this.ensureHeartbeat(), (p.observationTimeout || null == p.backgroundStartedAtMs) && this.scheduleTimeout(p, i), new k(this, p)
                }
                mark(a, b, c) {
                    if (null == a || a.terminal || null != a.marks[b]) return;
                    let d = "number" == typeof c ? c : c?.atMs;
                    a.marks[b] = n(a.startedAtMs, d ?? this.now()), a.traceHandle?.mark(b, {
                        atMs: d,
                        attributes: "number" == typeof c ? {} : c?.traceAttributes ?? {}
                    })
                }
                measure(a, b, c) {
                    return a?.traceHandle?.measure(b, {
                        attributes: c?.attributes ?? {},
                        startedAtMs: c?.startedAtMs
                    }) ?? {
                        end: () => {}
                    }
                }
                end(a, b) {
                    null != a && this.finish(a, {
                        outcome: "success",
                        reason: null
                    }, b)
                }
                recordAnalyticsSuccess(a) {
                    if (null == a || a.terminal) return !1;
                    if (!a.analyticsRecorded) {
                        let b = this.now(),
                            c = this.wallNow();
                        this.recordHeartbeat(a, b, c), a.analyticsRecorded = !0, this.recordAnalytics(a, {
                            outcome: "success",
                            reason: null
                        }, b, c)
                    }
                    return null != a.traceHandle || null != a.localTrace || (a.terminal = !0, this.clear(a), a.onTerminal?.(), !1)
                }
                fail(a, b) {
                    null != a && this.finish(a, {
                        outcome: "failure",
                        reason: b
                    })
                }
                abort(a, b) {
                    null != a && this.finish(a, {
                        outcome: "aborted",
                        reason: b
                    })
                }
                finish(a, b) {
                    let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.now();
                    if (a.terminal) return;
                    a.terminal = !0;
                    let d = this.wallNow();
                    this.recordHeartbeat(a, c, d), this.clear(a), a.localTrace?.(b), a.traceHandle?.finish(b), a.analyticsRecorded || (a.analyticsRecorded = !0, this.recordAnalytics(a, b, c, d)), a.onTerminal?.()
                }
                recordAnalytics(a, b, c, d) {
                    if ("dropped" === a.decision) return void this.settleAnalytics(a);
                    let e = n(a.startedAtMs, c),
                        f = n(a.wallStartedAtMs, d),
                        g = n(0, a.backgroundDurationMs + (null == a.backgroundStartedAtMs ? 0 : Math.max(0, d - a.backgroundStartedAtMs))),
                        h = a.heartbeatGapDurationMsSum,
                        i = "foreground";
                    g > 0 ? i = "backgrounded" : h > 0 && (i = "heartbeat_gap");
                    let j = a.cpuSampling?.finish();
                    a.cpuSampling = null;
                    let k = {
                            ...a.marks
                        },
                        l = this.captureAppState(),
                        m = null == a.analyticsAttributesReady ? l : Promise.all([l.catch(() => null), a.analyticsAttributesReady]).then(a => {
                            let [b] = a;
                            return b
                        });
                    this.terminalInteractions.add(a);
                    let o = (d, j, l) => {
                            if (this.terminalInteractions.delete(a), "dropped" === a.decision) return void this.settleAnalytics(a);
                            let m = {
                                    attributes: a.attributes,
                                    clientPlatform: this.clientPlatform,
                                    durationMs: e,
                                    endedAtMs: c,
                                    hostType: this.hostType,
                                    marks: k,
                                    name: a.name,
                                    rendererResponsiveness: l,
                                    spanId: a.trace?.traceparent.slice(36, 52),
                                    timing: {
                                        backgroundDurationMs: g,
                                        heartbeatGapDurationMsSum: h,
                                        quality: i,
                                        wallDurationMs: f
                                    },
                                    traceId: a.trace?.traceparent.slice(3, 35),
                                    ...b
                                },
                                n = () => {
                                    try {
                                        if (null == this.analytics || null == this.analyticsEmitters || a.shouldEmitAnalytics?.() === !1) return;
                                        this.analyticsEmitters[a.name]?.(null == j ? m : {
                                            ...m,
                                            electronCpu: j
                                        }, d, a.sampling ?? this.analytics.sampling)
                                    } finally {
                                        this.settleAnalytics(a)
                                    }
                                };
                            if ("sampled" === a.decision && this.loggingConfigured) n();
                            else {
                                if (this.pendingEvents.length >= 20) {
                                    let b = this.pendingEvents.findIndex(a => {
                                        let {
                                            span: b
                                        } = a;
                                        return "pending" === b.decision
                                    });
                                    if (b >= 0) {
                                        let [a] = this.pendingEvents.splice(b, 1);
                                        null != a && (a.span.decision = "dropped", this.settleAnalytics(a.span))
                                    } else if ("pending" === a.decision) {
                                        a.decision = "dropped", this.settleAnalytics(a);
                                        return
                                    }
                                }
                                this.pendingEvents.push({
                                    emit: n,
                                    span: a
                                })
                            }
                        },
                        p = a.responsivenessToken;
                    (a.responsivenessToken = null, null == p) ? this.settleAnalytics(a): this.responsivenessTracker.finish(p, (a, b) => {
                        null == j ? m.then(b => o(b, null, a), () => o(null, null, a)) : Promise.all([m.catch(() => null), j.catch(() => null)]).then(b => {
                            let [c, d] = b;
                            o(c, d, a)
                        })
                    }, {
                        immediate: "aborted" === b.outcome && "app_disposed" === b.reason
                    })
                }
                settleAnalytics(a) {
                    this.terminalInteractions.delete(a);
                    let b = a.onAnalyticsSettled;
                    a.onAnalyticsSettled = void 0, l(b)
                }
                drop(a) {
                    a.decision = "dropped", null != a.responsivenessToken && (this.responsivenessTracker.discard(a.responsivenessToken), a.responsivenessToken = null), a.cpuSampling?.cancel(), a.cpuSampling = null, this.settleAnalytics(a), null != a.traceHandle || null != a.localTrace && (a.keepLocalTraceWhenUnsampled || a.localTrace.keepWhenUnsampled?.()) || (a.terminal = !0, this.clear(a), a.localTrace?.({
                        outcome: "aborted",
                        reason: "not_sampled"
                    }), a.onTerminal?.())
                }
                clear(a) {
                    null != a.timeout && (clearTimeout(a.timeout), a.timeout = null), a.timeoutStartedAtMs = null, this.activeInteractions.get(a.activeKey) === a && this.activeInteractions.delete(a.activeKey), 0 === this.activeInteractions.size && null != this.heartbeatTimer && (clearInterval(this.heartbeatTimer), this.heartbeatTimer = null)
                }
                ensureHeartbeat() {
                    null == this.heartbeatTimer && (this.heartbeatTimer = setInterval(() => {
                        let a = this.now(),
                            b = this.wallNow();
                        for (let c of this.activeInteractions.values()) this.recordHeartbeat(c, a, b)
                    }, 1e3))
                }
                recordHeartbeat(a, b, c) {
                    let d = Math.max(n(a.lastHeartbeatAtMs, b), n(a.lastHeartbeatWallAtMs, c));
                    d >= 6e3 && (a.heartbeatGapDurationMsSum += d - 1e3), a.lastHeartbeatAtMs = b, a.lastHeartbeatWallAtMs = c
                }
                scheduleTimeout(a, b) {
                    a.timeoutStartedAtMs = b;
                    let c = setTimeout(() => {
                        if (!a.terminal && a.timeout === c) {
                            if (!a.observationTimeout && this.isDocumentHidden()) return void this.handleDocumentVisibilityChange();
                            this.finish(a, a.observationTimeout ? {
                                outcome: "aborted",
                                reason: "observation_expired"
                            } : {
                                outcome: "failure",
                                reason: "timeout"
                            })
                        }
                    }, a.timeoutRemainingMs);
                    a.timeout = c
                }
                handleDocumentVisibilityChange() {
                    let a = this.wallNow(),
                        b = this.isDocumentHidden();
                    for (let c of this.activeInteractions.values()) b ? (null == c.backgroundStartedAtMs && (c.backgroundStartedAtMs = a), c.observationTimeout || null == c.timeout || (clearTimeout(c.timeout), c.timeout = null, null != c.timeoutStartedAtMs && (c.timeoutRemainingMs = Math.max(0, c.timeoutRemainingMs - (a - c.timeoutStartedAtMs)), c.timeoutStartedAtMs = null))) : null != c.backgroundStartedAtMs && (c.backgroundDurationMs += Math.max(0, a - c.backgroundStartedAtMs), c.backgroundStartedAtMs = null, c.observationTimeout || this.scheduleTimeout(c, a))
                }
            }({
                beginCpuSampling: void 0,
                clientPlatform: (0, d.a)(),
                hostType: "browser",
                isDocumentHidden: void 0,
                startTrace: function(a) {
                    let {
                        attributes: b,
                        name: c,
                        startedAtMs: d,
                        trace: f
                    } = a, g = p[c];
                    if (null == g) return null;
                    let h = "thread_hydration" === c && null == f ? (0, e.e)({
                        attributes: b,
                        rootName: "desktop.thread_open",
                        childName: "thread.hydration"
                    }) : (0, e.f)({
                        attributes: b,
                        name: g,
                        startTimeMs: d,
                        trace: f
                    });
                    if (null == h) return null;
                    let i = new Set;
                    return {
                        finish: a => {
                            for (let b of i) b.finish(void 0, a);
                            i.clear(), h.finish(void 0, a)
                        },
                        mark: (a, b) => {
                            "turn_started" === a && null != b.attributes["turn.id"] && h.setAttributes?.(b.attributes), (0, e.c)({
                                attributes: b.attributes,
                                endTimeMs: b.atMs,
                                name: a,
                                startTimeMs: b.atMs,
                                trace: h.trace
                            })
                        },
                        measure: (a, b) => {
                            let c = (0, e.f)({
                                attributes: b.attributes,
                                name: a,
                                startTimeMs: b.startedAtMs,
                                trace: h.trace
                            });
                            return null == c ? {
                                end: () => {}
                            } : (i.add(c), {
                                end: () => {
                                    i.delete(c) && c.finish()
                                }
                            })
                        },
                        setAttributes: h.setAttributes,
                        trace: h.trace
                    }
                },
                subscribeToDocumentVisibility: void 0,
                wallNow: Date.now
            });

        function r() {
            for (let a of o) ! function(a) {
                let b = f.a?.performanceTelemetry;
                null == b ? o.add(a) : (o.delete(a), function(a) {
                    try {
                        Promise.resolve(a()).catch(() => {})
                    } catch {}
                }(() => b.startSpanCpuSampling(a)))
            }(a)
        }
    }),
    JyvC: (function(a, b, c) {
        var d = c("Dgwo"),
            e = c("l00C"),
            f = c("CfsC");
        let g = null;

        function h(a) {
            let b = a[0];
            if (null == b) return null;
            let c = {
                ...b
            };
            for (let b of a.slice(1))
                for (let [a, d] of Object.entries(b)) {
                    if ("schema_version" === a || "number" != typeof d) continue;
                    let b = Reflect.get(c, a);
                    "number" == typeof b && Reflect.set(c, a, "session_age_ms" === a || a.startsWith("max_") ? Math.max(b, d) : b + d)
                }
            return c
        }
        c.d(b, {}, {
            a: function(a) {
                if (null != g) return g;
                let b = Promise.all(a.get(f.b).filter(b => null != a.get(e.b, b)).map(b => Promise.resolve().then(() => {
                    let c = a.get(d.a);
                    if (null == c) throw Error("AppServerManager RPC is not connected");
                    return c.collectAppStateSnapshot(b, "performance_span_completed")
                }))).then(h).catch(() => null).finally(() => {
                    g === b && (g = null)
                });
                return g = b, b
            }
        })
    }),
    Dl20: (function(a, b, c) {
        var d = c("KvQL"),
            e = c("rEML"),
            f = c("Bl6U"),
            g = c("dQRk"),
            h = c("c9lJ"),
            i = c("jAnS"),
            j = c("tSEg"),
            k = c("kl6F"),
            l = c("iv8n"),
            m = c("Ggpj"),
            n = c("L6b2"),
            o = c("DipL"),
            p = c("S8dY"),
            q = c("xHBh");
        let r = new class {
            pathname = null;
            start(a, b, c) {
                let d = u(a, b, null);
                d.isHistoryNavigation && null != (0, e.L)(i.a, (0, e.N)(c).pathname ?? "") && m.a.start(d.key, null != a.get(g.N, d.conversationId), !1, !0)
            }
            routerDispatched(a, b, c, d, e) {
                if (b.pathname === c.pathname && b.search === c.search) return void(0, n.d)(b.pathname, c.pathname, c.key);
                l.a.leaveRestoredThread(c.pathname);
                let g = {
                        reason: e,
                        startedAtMs: d,
                        pathname: c.pathname,
                        locationKey: c.key
                    },
                    h = v(a, c.pathname);
                if (null != h) return (q.a.dispatch(null), h.key === v(a, b.pathname)?.key) ? ((0, n.d)(b.pathname, c.pathname, c.key), "same_screen") : void s(a, h, "navigation_dispatched", g);
                let i = (0, j.b)({
                        ...c,
                        routeTemplate: c.pathname
                    }),
                    m = (0, j.b)({
                        ...b,
                        routeTemplate: b.pathname
                    });
                if (q.a.dispatch("local-thread" === i.routeKind ? {
                        threadId: i.conversationId,
                        hostId: i.hostId ?? a.get(f.c, i.conversationId)
                    } : null), "local-thread" === i.routeKind) {
                    let {
                        conversationId: d,
                        hostId: e
                    } = i, h = "local-thread" === m.routeKind && m.conversationId === d, j = "client-local-thread" === m.routeKind && a.get(k.C, m.clientThreadId) === d;
                    if ((h || j) && (m.hostId ?? a.get(f.c, d)) === (e ?? a.get(f.c, d))) return j && p.a.promoteRoute(m.clientThreadId, d), (0, n.d)(b.pathname, c.pathname, c.key, j ? d : void 0), "same_screen";
                    (0, o.b)(a, d, e ?? void 0, g)
                } else if ("client-local-thread" === i.routeKind) {
                    if ("client-local-thread" === m.routeKind && m.clientThreadId === i.clientThreadId && m.hostId === i.hostId) return void(0, n.d)(b.pathname, c.pathname, c.key);
                    let d = a.get(k.C, i.clientThreadId);
                    d ? (0, o.b)(a, d, i.hostId, {
                        ...g,
                        routeThreadId: i.clientThreadId
                    }) : p.a.start(i.clientThreadId, "cold", "local", "navigation_dispatched", g)
                } else "remote-thread" === i.routeKind && ("remote-thread" !== m.routeKind || m.taskId !== i.taskId) ? p.a.start(i.taskId, "cold", "remote", "navigation_dispatched", g) : "remote-thread" !== i.routeKind && p.a.routeChanged(null)
            }
            routeChanged(a, b, c) {
                let d = this.pathname,
                    f = v(a, b);
                this.pathname = b, l.a.leaveRestoredThread(b), p.a.routeChanged(f?.key ?? c);
                let h = v(a, d),
                    j = null == d,
                    k = null != d && null != (0, e.L)(i.a, d);
                f?.isHistoryNavigation && null != (0, e.L)(i.a, b) ? k && f.key === h?.key || m.a.start(f.key, !j && null != a.get(g.N, f.conversationId), j, !1) : m.a.leave(), j || null != f && f.key !== h?.key && s(a, f, "route_entered")
            }
            contentCommitted(a, b, c, d) {
                this.pathname !== d && this.routeChanged(a, d, null);
                let e = this.getCurrentTarget(a, b, c);
                if (null != e) {
                    let b = a.get(g.N, e.conversationId);
                    m.a.visible(e.key, "visible" === document.visibilityState, null == b ? void 0 : Object.keys(b).length)
                }
            }
            pagePainted(a, b, c) {
                null != this.getCurrentTarget(a, b, c) && l.a.markThreadVisible()
            }
            loadFailed(a, b, c, e) {
                let f = this.getCurrentTarget(a, b, c);
                null != f && (p.a.hydrationFailed(f.key, e, "conversation_load_failed"), m.a.failed(f.key, "canceled" === (0, d.zh)(e)["codex.outcome"]), "canceled" !== (0, d.zh)(e)["codex.outcome"] && l.a.failConversationLoad())
            }
            getCurrentTarget(a, b, c) {
                let d = u(a, b, c);
                return v(a, this.pathname)?.key === d.key ? d : null
            }
        };

        function s(a, b, c, d) {
            b.isHistoryNavigation && p.a.start(b.key, null == a.get(g.N, b.conversationId) ? "cold" : "hot", "chatgpt", c, d)
        }

        function t(a, b) {
            return null == b ? `chatgpt:${a}` : `chatgpt-share:${b}`
        }

        function u(a, b, c) {
            if (null != c) return {
                conversationId: c,
                isHistoryNavigation: !0,
                key: t(b, c)
            };
            let d = a.get(g.j, b);
            return {
                conversationId: d ?? b,
                isHistoryNavigation: null != d,
                key: t(d ?? b, null)
            }
        }

        function v(a, b) {
            if (null == b) return null;
            let c = (0, i.j)(b)?.params.conversationId;
            if (null != c) {
                let b = w(c);
                return null == b ? null : u(a, b, null)
            }
            let d = (0, h.a)(b)?.params.sharedConversationId,
                e = null == d ? null : w(d);
            return null == e ? null : u(a, e, e)
        }

        function w(a) {
            try {
                return decodeURIComponent(a)
            } catch {
                return null
            }
        }
        c.d(b, {}, {
            a: t,
            b: r
        })
    }),
    nZhi: (function(a, b, c) {
        var d = c("N7M1");
        let e = [],
            f = null,
            g = !1;

        function h(a) {
            if ("u" < typeof window || !1 === f) return;
            if (null == f) {
                32 === e.length && (e.shift(), g = !0), e.push(a);
                return
            }
            let b = a.startedAtMs - performance.timeOrigin;
            if (!Number.isFinite(b) || b < 0 || !Number.isFinite(a.durationMs) || a.durationMs < 0) return;
            let c = `codex.debug.${a.source}.${a.name}`,
                h = "Interaction tracing" === a.source ? (0, d.a)(a.track) : void 0;
            try {
                performance.measure(c, {
                    start: b,
                    duration: a.durationMs,
                    detail: {
                        metric: a.metadata,
                        devtools: {
                            dataType: "track-entry",
                            track: a.track ?? a.source,
                            trackGroup: "Interaction tracing" === a.source ? "Interaction tracing" : "Codex performance",
                            properties: a.properties,
                            color: a.failed ? "error" : h,
                            tooltipText: a.name
                        }
                    }
                }), performance.clearMeasures(c)
            } catch {}
        }
        c.d(b, {}, {
            a: "debug-performance-user-timings",
            b: function() {
                return !0 === f
            },
            c: function(a) {
                for (let b of (f = a, a && g && e.length > 0 && h({
                        name: "startup_buffer_truncated",
                        source: "Debug",
                        startedAtMs: performance.timeOrigin,
                        durationMs: Math.min(...e.map(a => a.startedAtMs)) - performance.timeOrigin
                    }), g = !1, e)) h(b);
                e.length = 0
            },
            d: h,
            e: function() {
                return !1 !== f
            }
        })
    }),
    mz2o: (function(a, b, c) {
        var d = c("zPtR"),
            e = c("OSkm"),
            f = c("CWeU"),
            g = c("unIO"),
            h = c("gbzJ"),
            i = c("ReGc"),
            j = c("bNMl"),
            k = c("RHhA");
        let l = {
                under_30s: "streaming_reply_typing_to_edit_paint_opportunity_under_30s",
                at_least_30s: "streaming_reply_typing_to_edit_paint_opportunity_30s_plus"
            },
            m = {
                chat_archive_to_visible_list_change: .1,
                space_panel_resize_to_first_layout_change: .1,
                model_picker_open_to_first_selectable_model: .1,
                model_selection_to_visible_label: .1,
                search_keypress_to_character_visible: .01,
                search_query_to_first_local_chat_visible: .01,
                home_activity_bell_click_to_selected: .1,
                space_to_home_click_to_selected: .1
            };

        function n(a) {
            return a.get(j.c) && "allowed" === a.get(j.d).getAnalyticsAdmission()
        }

        function o(a, b) {
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
        }
        c.d(b, {}, {
            a: function(a) {
                return !1
            },
            b: function(a, b) {
                let c = function(a, b) {
                    let c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        d = o(a, b, c);
                    return d && ((a, b, c) => d({
                        ...c,
                        spanName: a,
                        ...null == b ? {} : {
                            durationMs: b
                        },
                        outcome: "success",
                        ...c
                    }))
                }(a, m[b], "search_query_to_first_local_chat_visible" === b);
                return c && (a => c(b, a))
            },
            c: o,
            d: function(a, b) {
                if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !n(a) || Math.random() >= b) return;
                let c = a.get(f.d),
                    g = a.get(f.a),
                    k = a.get(f.b),
                    l = () => n(a) && a.get(f.d) === c && a.get(f.a) === g && a.get(f.b) === k,
                    m = new Set;
                return c => {
                    let {
                        spanName: f,
                        durationMs: n
                    } = c;
                    return !m.has(f) && (m.add(f), (null == n || !!Number.isFinite(n) && !(n < 0)) && !!l() && ((0, j.a)(a, e.CodexPerformanceSpanCompleted, {
                        ...c,
                        completedTs: c.completedTs ?? (0, d.c)(Date.now()),
                        appShell: void 0,
                        clientPlatform: (0, h.a)(),
                        buildNumber: a.get(i.a).data?.buildNumber ?? void 0,
                        samplingRatio: b,
                        samplingReason: "random"
                    }, void 0, void 0, {
                        expectedAccountId: g ?? void 0,
                        expectedUserId: k ?? void 0,
                        shouldSend: l
                    }), !0))
                }
            },
            e: function(a, b) {
                if ("nightly" !== (0, k.a)()) return;
                let c = o(a, .01);
                return c && (a => {
                    let {
                        outcome: d,
                        durationMs: e
                    } = a;
                    c({
                        spanName: l[b],
                        ...null == e ? {} : {
                            durationMs: e
                        },
                        outcome: d,
                        buildCommitSha: (0, g.a)()
                    })
                })
            }
        })
    }),
    HpDZ: (function(a, b, c) {
        var d = c("zPtR"),
            e = c("tvQN");
        c.d(b, {}, {
            a: function(a, b) {
                let c = (0, d.b)(b, "round"),
                    f = (0, d.b)(Math.min(Math.max(b, 0), 3e5), "round");
                null != c && null != f && a.logProductEvent(e.b, {
                    eventName: "CHATGPT_PERFORMANCE_EVENT_NAME_FIRST_CONTENTFUL_PAINT",
                    durationMs: c,
                    durationTrimmedMs: f
                }, () => {
                    "hidden" === document.visibilityState && a.flush()
                })
            }
        })
    }),
    bg0G: (function(a, b, c) {
        var d = c("zPtR"),
            e = c("OSkm"),
            f = c("gbzJ"),
            g = c("ReGc"),
            h = c("bNMl");
        c.d(b, {}, {
            a: function(a, b) {
                (0, h.a)(a, e.CodexPerformanceSpanCompleted, {
                    spanName: "git_operation",
                    durationMs: b.durationMs,
                    completedTs: (0, d.c)(Date.now()),
                    outcome: "canceled" === b.outcome || "stale" === b.outcome ? "aborted" : b.outcome,
                    reason: b.reason ?? void 0,
                    clientPlatform: (0, f.a)(),
                    appShell: void 0,
                    buildNumber: a.get(g.a).data?.buildNumber ?? void 0,
                    samplingRatio: b.samplingRatio,
                    samplingReason: b.samplingReason,
                    spanId: b.spanId,
                    traceId: b.traceId,
                    gitOperationAttributes: {
                        operation: b.operation,
                        source: b.source,
                        trigger: b.trigger,
                        hostKind: b.hostKind,
                        cacheStatus: b.cacheStatus,
                        reviewSource: b.reviewSource ?? void 0,
                        queueDurationMs: b.queueDurationMs ?? void 0,
                        firstResultMs: b.firstResultMs ?? void 0,
                        concurrentOperationCount: b.concurrentOperationCount,
                        peakCommandConcurrency: b.peakCommandConcurrency,
                        commandCount: b.commandCount,
                        statusCommandCount: b.statusCommandCount,
                        untrackedStatusCommandCount: b.untrackedStatusCommandCount,
                        untrackedListCommandCount: b.untrackedListCommandCount,
                        diffCommandCount: b.diffCommandCount,
                        failedCommandCount: b.failedCommandCount,
                        failedCommandSubcommand: b.failedCommandSubcommand ?? void 0,
                        failedCommandFailureKind: b.failedCommandFailureKind ?? void 0,
                        failedCommandExitCodeBucket: b.failedCommandExitCodeBucket ?? void 0,
                        failedCommandDurationMs: b.failedCommandDurationMs ?? void 0,
                        failedCommandErrorKind: b.failedCommandErrorKind ?? void 0,
                        canceledCommandCount: b.canceledCommandCount,
                        timedOutCommandCount: b.timedOutCommandCount,
                        outputLimitExceededCount: b.outputLimitExceededCount,
                        commandDurationMsSum: b.commandDurationMsSum,
                        commandDurationMsMax: b.commandDurationMsMax,
                        stdoutBytes: (0, d.c)(b.stdoutBytes),
                        stderrBytes: (0, d.c)(b.stderrBytes),
                        untrackedCacheHitCount: b.untrackedCacheHitCount,
                        untrackedCacheMissCount: b.untrackedCacheMissCount,
                        untrackedCacheCoalescedCount: b.untrackedCacheCoalescedCount,
                        fileCount: b.fileCount ?? void 0,
                        untrackedFileCount: b.untrackedFileCount ?? void 0,
                        additionsCount: b.additions ?? void 0,
                        deletionsCount: b.deletions ?? void 0,
                        diffBytes: null == b.diffBytes ? void 0 : (0, d.c)(b.diffBytes),
                        matchCount: b.matchCount ?? void 0,
                        truncated: b.truncated,
                        repoIndexSizeBucket: b.repoIndexSizeBucket,
                        retryAttempt: b.retryAttempt ?? void 0,
                        resultDisposition: b.resultDisposition ?? void 0,
                        resultFailureReason: b.resultFailureReason ?? void 0
                    }
                })
            },
            b: function(a, b) {
                (0, h.a)(a, e.CodexPerformanceSpanCompleted, {
                    spanName: "git_watcher_snapshot",
                    durationMs: b.snapshotDurationMs,
                    completedTs: (0, d.c)(Date.now()),
                    outcome: "success",
                    clientPlatform: (0, f.a)(),
                    appShell: void 0,
                    buildNumber: a.get(g.a).data?.buildNumber ?? void 0,
                    samplingRatio: 1,
                    samplingReason: "watcher_snapshot",
                    gitWatcherAttributes: {
                        hostKind: b.hostKind,
                        changeType: b.changeType,
                        coalescedBatchCount: b.coalescedBatchCount,
                        rawEventCount: b.rawEventCount,
                        changedPathCount: b.changedPathCount,
                        filteredPathCount: b.filteredPathCount,
                        invalidationCount: b.invalidationCount,
                        fullInvalidationCount: b.fullInvalidationCount,
                        refreshFanoutCount: b.refreshFanoutCount,
                        requiresRecoveryCount: b.requiresRecoveryCount,
                        repoIndexSizeBucket: b.repoIndexSizeBucket
                    }
                })
            }
        })
    }),
    kErH: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("v8gE"),
            g = c("zd8w"),
            h = c("rEML"),
            i = c("H4jP"),
            j = (c("uRcn"), c("YUHX")),
            k = c("L6b2");
        let l = () => null,
            m = (0, g.createContext)(null),
            n = g.Suspense,
            o = f.c;
        c.d(b, {}, {
            a: function(a) {
                let b, c, h, j = (0, e.c)(9),
                    {
                        children: k,
                        primary: l
                    } = a,
                    n = (0, g.useContext)(m),
                    o = l ? n?.composerId : null,
                    p = o ? i.a?.tracer : void 0,
                    q = l ? n : null;
                return j[0] !== k ? (b = (0, d.jsx)(f.a, {
                    name: "composer",
                    children: k
                }), j[0] = k, j[1] = b) : b = j[1], j[2] !== q || j[3] !== b ? (c = (0, d.jsx)(m.Provider, {
                    value: q,
                    children: b
                }), j[2] = q, j[3] = b, j[4] = c) : c = j[4], j[5] !== o || j[6] !== p || j[7] !== c ? (h = (0, d.jsx)(f.d, {
                    tracer: p,
                    interactionId: o,
                    children: c
                }), j[5] = o, j[6] = p, j[7] = c, j[8] = h) : h = j[8], h
            },
            b: function(a) {
                let b, c, d = (0, e.c)(8),
                    {
                        element: h,
                        editable: j
                    } = a,
                    k = (0, f.f)();
                return d[0] !== j || d[1] !== h || d[2] !== k?.interactionId ? (b = () => {
                    let a = k?.interactionId;
                    if (!a || !j || !i.a?.tracer.isActive(a)) return;
                    let b = !0,
                        c = null,
                        d = i.a.tracer.subscribe(b => {
                            let {
                                kind: d,
                                interaction: e
                            } = b;
                            "interaction-ended" === d && e.id === a && c?.disconnect()
                        }),
                        e = () => !!b && !!i.a?.tracer.isActive(a) && !!h.isConnected && "true" === h.getAttribute("contenteditable") && null == h.closest("[inert], [hidden]") && (c?.disconnect(), i.a.composerReady(a), !0);
                    return queueMicrotask(() => {
                        if (!(!b || !i.a?.tracer.isActive(a) || e())) {
                            c = new MutationObserver(e);
                            for (let a = h; null != a; a = a.parentElement) c.observe(a, {
                                attributes: !0,
                                attributeFilter: ["inert", "hidden", "contenteditable"]
                            })
                        }
                    }), () => {
                        b = !1, c?.disconnect(), d()
                    }
                }, d[0] = j, d[1] = h, d[2] = k?.interactionId, d[3] = b) : b = d[3], d[4] !== j || d[5] !== h || d[6] !== k ? (c = [k, h, j], d[4] = j, d[5] = h, d[6] = k, d[7] = c) : c = d[7], (0, g.useLayoutEffect)(b, c), null
            },
            c: function(a) {
                let b, c, d = (0, e.c)(5),
                    {
                        ready: f,
                        failed: h
                    } = a,
                    j = (0, g.useContext)(m)?.id;
                return d[0] !== h || d[1] !== j || d[2] !== f ? (b = () => {
                    j && (h ? i.a?.end(j, "failed", "route_error") : f && i.a?.contentReady(j))
                }, c = [j, f, h], d[0] = h, d[1] = j, d[2] = f, d[3] = b, d[4] = c) : (b = d[3], c = d[4]), (0, g.useLayoutEffect)(b, c), null
            },
            d: o,
            e: function(a) {
                let b, c, d = (0, e.c)(6),
                    {
                        region: f,
                        ready: h,
                        failed: j
                    } = a,
                    k = void 0 !== j && j,
                    l = (0, g.useContext)(m)?.id;
                return d[0] !== k || d[1] !== l || d[2] !== h || d[3] !== f ? (b = () => {
                    l && h && i.a?.regionReady(l, f, k)
                }, c = [l, f, h, k], d[0] = k, d[1] = l, d[2] = h, d[3] = f, d[4] = b, d[5] = c) : (b = d[4], c = d[5]), (0, g.useLayoutEffect)(b, c), null
            },
            f: n,
            g: function(a) {
                let b, c, g = (0, e.c)(3);
                return g[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(f.b, {
                    name: "route redirect"
                }), g[0] = b) : b = g[0], g[1] !== a ? (c = (0, d.jsxs)(d.Fragment, {
                    children: [b, (0, d.jsx)(h.l, {
                        ...a
                    })]
                }), g[1] = a, g[2] = c) : c = g[2], c
            },
            h: function(a) {
                let b, c, h, i, m = (0, e.c)(9),
                    {
                        destinationKey: n,
                        children: o
                    } = a;
                m[0] !== n ? (b = () => (0, k.b)(n), m[0] = n, m[1] = b) : b = m[1];
                let p = b,
                    q = (0, g.useContext)(j.a),
                    r = (0, g.useSyncExternalStore)(k.g, p, l),
                    s = r?.locationKey == null || q?.id === r.id ? r : null;
                m[2] !== s ? (c = () => s?.commit(), h = [s], m[2] = s, m[3] = c, m[4] = h) : (c = m[3], h = m[4]), (0, g.useLayoutEffect)(c, h);
                let t = s?.tracer,
                    u = null == n ? null : s?.id;
                return m[5] !== o || m[6] !== t || m[7] !== u ? (i = (0, d.jsx)(f.d, {
                    tracer: t,
                    interactionId: u,
                    children: o
                }), m[5] = o, m[6] = t, m[7] = u, m[8] = i) : i = m[8], i
            },
            i: function(a) {
                let b, c, i, m, n, o = (0, e.c)(12),
                    {
                        children: p
                    } = a,
                    {
                        pathname: q,
                        key: r
                    } = (0, h.Z)();
                o[0] !== q ? (b = () => (0, k.c)(q), o[0] = q, o[1] = b) : b = o[1];
                let s = (0, g.useSyncExternalStore)(k.g, b, l),
                    t = s?.locationKey == null || s.locationKey === r ? s : null,
                    u = (0, g.useContext)(j.a)?.id,
                    v = t?.commitAtRoute && t.id !== u ? t : null;
                o[2] !== v ? (c = () => v?.commit(), i = [v], o[2] = v, o[3] = c, o[4] = i) : (c = o[3], i = o[4]), (0, g.useLayoutEffect)(c, i);
                let w = v?.tracer,
                    x = v?.id;
                return o[5] !== p || o[6] !== w || o[7] !== x ? (m = (0, d.jsx)(f.d, {
                    tracer: w,
                    interactionId: x,
                    children: p
                }), o[5] = p, o[6] = w, o[7] = x, o[8] = m) : m = o[8], o[9] !== t || o[10] !== m ? (n = (0, d.jsx)(j.a.Provider, {
                    value: t,
                    children: m
                }), o[9] = t, o[10] = m, o[11] = n) : n = o[11], n
            }
        })
    }),
    kTw8: (function(a, b, c) {
        var d = c("kpIY"),
            e = c("nZhi");
        c("uRcn"), c("xjTy"), c.d(b, {}, {
            a: function(a) {
                let b = a => {
                        (0, e.c)(a)
                    },
                    c = (0, d.y)(e.a, !1, b);
                return b((0, d.k)(e.a, !1)), () => {
                    c(), a?.setEnabled(!1)
                }
            }
        })
    }),
    H4jP: (function(a, b, c) {
        c("L6b2");
        c.d(b, {}, {
            a: null
        })
    }),
    esXD: (function(a, b, c) {
        let d, e, f;
        var g, h = c("HnGz"),
            i = c("kjQz"),
            j = c("zt8h"),
            k = c("e6DU"),
            l = c("nZhi"),
            m = c("H4jP"),
            n = c("uRcn"),
            o = c("L6b2");

        function p(a, b) {
            let c = (0, o.c)(a);
            c?.locationKey === b && c.failRoute()
        }
        let q = new WeakMap,
            r = new WeakMap;

        function s(a, b) {
            let c = e;
            e = a;
            try {
                return b()
            } finally {
                e = c
            }
        }
        let t = [(g = () => d, {
            router(a) {
                a.instrument({
                    async navigate(a) {
                        let b = g();
                        if (!b) return void await a();
                        let c = {
                            startedAt: performance.timeOrigin + performance.now(),
                            reason: e
                        };
                        q.set(b, c);
                        try {
                            await a()
                        } finally {
                            q.get(b) !== c || [...b.state.blockers.values()].some(a => "blocked" === a.state) || q.delete(b)
                        }
                    }
                })
            }
        })];
        c.d(b, {}, {
            a: function(a, b, c) {
                let d = {
                    listener: b,
                    onBlocked: c
                };
                return r.set(a, d), () => {
                    r.get(a) === d && r.delete(a)
                }
            },
            b: p,
            c: t,
            d: function(a, b) {
                let c, e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    g = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : b => (0, h.e)(a.routes, b),
                    s = arguments.length > 4 ? arguments[4] : void 0;
                e && (d = a);
                let t = a => {
                        let b = g(a);
                        return e && "/unknown" === b ? f?.(a) ?? b : b
                    },
                    u = b => ({
                        ...b,
                        pathname: (0, j.a)(b.pathname, a.basename ?? "/")
                    }),
                    v = u(a.state.location),
                    w = v.pathname,
                    x = null,
                    y = a.subscribe(d => {
                        let {
                            location: f,
                            navigation: g,
                            blockers: h,
                            errors: j
                        } = d, y = q.get(a);
                        [...h.values()].some(a => "blocked" === a.state) && ((s ?? r.get(a)?.onBlocked)?.(), y && (y.startedAt = void 0));
                        let z = u(g.location ?? f);
                        if (z.key !== v.key) {
                            let d = v;
                            v = z;
                            let f = y?.startedAt ?? performance.timeOrigin + performance.now();
                            q.delete(a), c?.abort("navigation_away");
                            let g = (b ?? r.get(a)?.listener)?.(d, z, f, y?.reason === "sidebar_restore" ? y.reason : void 0);
                            if (y?.reason === "conversation_unavailable" && "home" === (0, n.a)(z.pathname)) {
                                let a = i.a.start("home_navigation", {
                                    navigationReason: y.reason
                                }, {
                                    startedAtMs: f,
                                    startLocalTrace: (b, c) => (0, o.e)({
                                        name: "home_navigation",
                                        destinationKey: "home",
                                        pathname: z.pathname,
                                        locationKey: z.key,
                                        startedAtMs: b,
                                        now: c,
                                        debug: !1,
                                        onRouteError: () => a.fail("route_error"),
                                        onReady: b => {
                                            a.mark("react_ready", b), a.end(b)
                                        }
                                    }),
                                    onTerminal: () => {
                                        c = void 0
                                    }
                                });
                                a.mark("navigation_dispatched", f), c = a.isRecording() ? a : void 0
                            }
                            let h = (0, o.c)(z.pathname),
                                j = x?.id,
                                p = d.pathname !== z.pathname;
                            x?.id !== h?.id && (x?.end({
                                outcome: "aborted",
                                reason: "navigation_away"
                            }), x = null);
                            let s = h?.locationKey === z.key ? h : null,
                                u = "same_screen" !== g && (s ? s.id !== j : p),
                                A = u && 1 ? k.a.start("screenLoad", {
                                    screen: t(z.pathname),
                                    fromScreen: t(w),
                                    cause: "CHATGPT_PERFORMANCE_SCREEN_LOAD_CAUSE_NAVIGATION"
                                }, {
                                    atMs: f
                                }) : null,
                                B = (0, l.b)();
                            if (s) x = s;
                            else if (x && !p)(0, o.d)(d.pathname, z.pathname, z.key), x = (0, o.c)(z.pathname);
                            else if (u && (A || B)) {
                                let a = (0, o.e)({
                                    name: "router_navigation",
                                    pathname: z.pathname,
                                    locationKey: z.key,
                                    startedAtMs: f,
                                    now: () => performance.timeOrigin + performance.now(),
                                    commitAtRoute: !0,
                                    debug: B,
                                    onReady: () => a({
                                        outcome: "success",
                                        reason: null
                                    })
                                });
                                x = (0, o.c)(z.pathname);
                                let b = setTimeout(() => a({
                                    outcome: "failure",
                                    reason: "timeout"
                                }), 3e4);
                                x?.onEnd(() => clearTimeout(b))
                            }
                            if (A && x && x.onEnd((a, b) => {
                                    "completed" === a ? k.a.successIfActive(A, {
                                        atMs: b,
                                        attributes: {
                                            readinessSource: "CHATGPT_PERFORMANCE_SCREEN_LOAD_READINESS_SOURCE_EXPLICIT_READY"
                                        }
                                    }) : "failed" === a ? k.a.failureIfActive(A, {
                                        atMs: b
                                    }) : k.a.cancelIfActive(A, {
                                        atMs: b
                                    })
                                }), e && m.a?.enabled) {
                                let a = (0, n.a)(z.pathname);
                                a ? m.a.begin(z.pathname, a, f - performance.timeOrigin) : m.a.leave("route_left")
                            }
                        }
                        "idle" === g.state && (w = u(f).pathname, null != j && p(w, f.key)), y && null == y.startedAt && "idle" === g.state && ![...h.values()].some(a => "unblocked" !== a.state) && q.delete(a)
                    });
                return () => {
                    y(), c?.abort("app_disposed"), x?.end({
                        outcome: "aborted",
                        reason: "app_disposed"
                    }), q.delete(a), d === a && (d = void 0)
                }
            },
            e: function(a) {
                let b = (0, j.a)(a.pathname, d?.basename ?? document.documentElement.dataset.routerBasename ?? "/");
                p(b, a.key);
                let c = m.a;
                if (!c?.enabled) return;
                let e = c.getSnapshot();
                if (null != e && null == e.locationKey && c.committedRoute?.locationKey === a.key) return;
                c.commit(b, a.key, (0, n.a)(b));
                let f = c.interactionFor(b, a.key);
                f && c.end(f, "failed", "route_error")
            },
            f: function(a) {
                f = a
            },
            g: s,
            h: function(a) {
                return s("sidebar_restore", a)
            }
        })
    }),
    uRcn: (function(a, b, c) {
        var d = c("jAnS"),
            e = c("ad0f"),
            f = c("U1w0");
        c.d(b, {}, {
            a: function(a) {
                return (0, f.a)(a) ? null : (0, e.b)(a) ? "home" : (0, d.j)(a) ? "conversation" : null
            }
        })
    }),
    YUHX: (function(a, b, c) {
        c("v8gE");
        var d = c("zd8w");
        let e = (0, d.createContext)(null),
            f = (0, d.createContext)(!1);
        c.d(b, {}, {
            a: e,
            b: f,
            c: () => null
        })
    }),
    L6b2: (function(a, b, c) {
        var d = c("UDVZ"),
            e = c("N7M1"),
            f = c("nZhi"),
            g = c("xjTy");
        let h = null,
            i = new Set;

        function j(a) {
            for (let b of (h = a, i)) b()
        }

        function k(a) {
            let b, {
                    name: c,
                    destinationKey: i,
                    pathname: k,
                    locationKey: l,
                    startedAtMs: m,
                    now: n,
                    onReady: o,
                    onRouteError: p,
                    commitAtRoute: q = !1,
                    debug: r,
                    reason: s
                } = a,
                t = Math.min(performance.timeOrigin, m),
                u = (0, d.a)({
                    clock: () => n() - t,
                    paint: o && !q ? "none" : void 0
                });
            r && (0, e.b)(u, {
                ...g.a,
                recordTiming(a) {
                    s && a.properties.push(["Navigation reason", s]), (0, f.d)(a)
                }
            });
            let v = u.startInteraction({
                name: c,
                startTime: m - t
            });
            u.subscribe(a => {
                let {
                    kind: b,
                    interaction: c
                } = a;
                "interaction-ended" === b && "completed" === c.status && null != c.endTime && o?.(t + c.endTime)
            });
            let w = !1,
                x = a => {
                    h?.tracer === u && j(null), u.isActive(v) && (a.reason && u.addMetadata({
                        interactionId: v
                    }, {
                        end_reason: a.reason
                    }), "success" === a.outcome ? u.requestCompletion(v) : u.cancel(v, "failure" === a.outcome ? "failed" : "cancelled"))
                };
            return j({
                destinationKey: i,
                pathname: k,
                locationKey: l,
                tracer: u,
                id: v,
                commitAtRoute: q,
                end: x,
                failRoute: p ?? (() => x({
                    outcome: "failure",
                    reason: "route_error"
                })),
                onEnd(a) {
                    w = !0, u.subscribe(b => {
                        let {
                            kind: c,
                            interaction: d
                        } = b;
                        if ("interaction-ended" !== c || d.id !== v || null == d.endTime) return;
                        let {
                            status: e
                        } = d;
                        "running" !== e && "completing" !== e && a(e, t + d.endTime)
                    })
                },
                commit() {
                    if (u.isActive(v)) return b && (u.releaseHold(v, b), b = void 0), u.requestCompletion(v), () => {
                        u.isActive(v) && !b && (b = u.addHold(v, {
                            name: "destination commit"
                        }))
                    }
                }
            }), Object.assign(x, {
                keepWhenUnsampled: () => w
            })
        }
        c.d(b, {}, {
            a: class {
                tracer;
                completed = [];
                visualCompletions = [];
                visit = null;
                navigationAttached = !1;
                listeners = new Set;
                unsubscribe;
                enabled;
                committedRoute = null;
                constructor(a = (0, d.a)(), b = !0) {
                    this.tracer = a, this.enabled = b, this.unsubscribe = a.subscribe(a => {
                        let {
                            kind: b,
                            interaction: c
                        } = a;
                        "interaction-ended" === b && (this.completed.push(c), this.completed.length > 20 && this.completed.shift(), this.visit?.id === c.id && clearTimeout(this.visit.deadline))
                    })
                }
                setEnabled(a) {
                    a || this.leave("debug_disabled"), this.enabled = a
                }
                begin(a, b) {
                    let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.tracer.now(),
                        d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "navigation_dispatched";
                    if (!this.enabled) return null;
                    this.leave("superseded");
                    let e = this.tracer.startInteraction({
                            name: "document" === d ? "startup" : "navigation",
                            startTime: c,
                            metadata: {
                                route: b,
                                start_boundary: d
                            }
                        }),
                        f = this.tracer.startInteraction({
                            name: "composer readiness",
                            parentInteractionId: e,
                            startTime: c,
                            sectionPath: ["composer"]
                        }),
                        h = this.tracer.addHold(f, {
                            name: "editable input and committed handlers",
                            sectionPath: ["composer"]
                        });
                    return this.visit = {
                        id: e,
                        pathname: a,
                        locationKey: null,
                        composerId: f,
                        composerHold: h,
                        regionHolds: {
                            "model controls": this.tracer.addHold(f, {
                                name: "model controls",
                                sectionPath: ["composer"]
                            }),
                            "account footer": this.tracer.addHold(e, {
                                name: "account footer",
                                sectionPath: ["navigation"]
                            }),
                            "sidebar content": this.tracer.addHold(e, {
                                name: "sidebar content",
                                sectionPath: ["navigation"]
                            })
                        },
                        contentHold: "conversation" === b ? this.tracer.addHold(e, {
                            name: "conversation content",
                            sectionPath: ["transcript"]
                        }) : null,
                        commitHold: this.tracer.addHold(e, {
                            name: "route commit"
                        }),
                        navigationHold: this.navigationAttached ? null : this.tracer.addHold(e, {
                            name: g.b,
                            sectionPath: ["navigation"]
                        }),
                        deadline: setTimeout(() => this.end(e, "cancelled", "deadline"), 3e4)
                    }, this.tracer.requestCompletion(f), this.tracer.requestCompletion(e), this.notify(), e
                }
                commit(a, b, c) {
                    if (this.committedRoute = {
                            pathname: a,
                            locationKey: b
                        }, !this.enabled) return;
                    if (null == c) return void this.leave("route_left");
                    (this.visit?.pathname !== a || null != this.visit.locationKey && this.visit.locationKey !== b) && this.begin(a, c, this.tracer.now(), "route_committed");
                    let d = this.visit;
                    d && d.locationKey !== b && (this.visit = {
                        ...d,
                        locationKey: b
                    }, this.tracer.releaseHold(d.id, d.commitHold), this.notify())
                }
                interactionFor(a, b) {
                    return this.visit?.pathname === a && this.visit.locationKey === b ? this.visit.id : null
                }
                getSnapshot = () => this.visit;
                contentReady(a) {
                    let b = this.visit;
                    b?.id === a && this.tracer.isActive(a) && b.contentHold && this.tracer.releaseHold(a, b.contentHold)
                }
                composerReady(a) {
                    let b = this.visit;
                    b?.composerId === a && this.tracer.isActive(a) && this.tracer.releaseHold(a, b.composerHold)
                }
                regionReady(a, b) {
                    let c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        d = this.visit;
                    if (!d || a !== d.id && ("model controls" !== b || a !== d.composerId)) return;
                    let e = "model controls" === b ? d.composerId : d.id;
                    if (!this.tracer.isActive(e)) return;
                    let f = d.regionHolds[b];
                    c && this.tracer.getInteraction(e)?.holds.find(a => a.id === f)?.endTime == null && this.tracer.addMetadata({
                        interactionId: e,
                        holdId: f
                    }, {
                        readiness: "error"
                    }), this.tracer.releaseHold(e, f)
                }
                navigationReady() {
                    this.navigationAttached = !0, this.visit?.navigationHold && this.tracer.releaseHold(this.visit.id, this.visit.navigationHold)
                }
                end(a, b, c) {
                    this.visit?.id === a && this.tracer.isActive(a) && (this.tracer.addMetadata({
                        interactionId: a
                    }, {
                        end_reason: c
                    }), this.tracer.cancel(a, b))
                }
                leave(a) {
                    let b = this.visit;
                    b && (clearTimeout(b.deadline), this.tracer.isActive(b.id) && (this.tracer.addMetadata({
                        interactionId: b.id
                    }, {
                        end_reason: a
                    }), this.tracer.cancel(b.id)), this.visit = null, this.notify())
                }
                subscribe = a => (this.listeners.add(a), () => this.listeners.delete(a));
                dispose() {
                    this.leave("page_hidden"), this.unsubscribe(), this.listeners.clear(), this.tracer.dispose()
                }
                notify() {
                    for (let a of this.listeners) a()
                }
            },
            b: function(a) {
                return h?.destinationKey === a ? h : null
            },
            c: function(a) {
                return h?.pathname === a ? h : null
            },
            d: function(a, b, c, d) {
                h?.pathname === a && null != h.locationKey && j({
                    ...h,
                    pathname: b,
                    locationKey: c,
                    destinationKey: d ?? h.destinationKey
                })
            },
            e: k,
            f: function(a, b, c, d) {
                return k({
                    name: a,
                    pathname: b,
                    locationKey: d,
                    startedAtMs: c,
                    now: () => performance.timeOrigin + performance.now(),
                    debug: !1
                })
            },
            g: function(a) {
                return i.add(a), () => {
                    i.delete(a)
                }
            }
        })
    }),
    xjTy: (function(a, b, c) {
        var d = c("nZhi");
        let e = "Wait for sidebar navigation",
            f = new Set(["router_navigation", "thread_navigation", "conversation data", "conversation rows", "destination commit", "route redirect", "route content", "home composer", "conversation hidden", "startup", "navigation", "composer readiness", "editable input and committed handlers", "conversation content", "route commit", e, "model controls", "account footer", "account payment recovery code", "account payment recovery", "sidebar content", "application", "React scope cleanup"]),
            g = {
                labels: f,
                sections: new Set(["page", "composer", "transcript", "navigation"]),
                reasons: new Set(["timeout", "app_disposed", "navigation_away", "conversation_load_failed", "hydration_failed", "hydration_canceled", "deadline", "route_error", "navigation_error", "superseded", "route_left", "page_hidden", "debug_disabled"]),
                recordTiming: d.d
            };
        c.d(b, {}, {
            a: g,
            b: e
        })
    }),
    bx9M: (function(a, b, c) {
        var d = c("zPtR"),
            e = c("tvQN");
        c.d(b, {}, {
            a: function(a, b) {
                a.logProductEvent(e.b, {
                    eventName: "CHATGPT_PERFORMANCE_EVENT_NAME_LONG_INTERACTION_TO_NEXT_PAINT",
                    durationMs: (0, d.b)(b, "round"),
                    durationTrimmedMs: (0, d.b)(Math.min(Math.max(b, 0), 3e5), "round")
                }, () => {
                    "hidden" === document.visibilityState && a.flush()
                })
            }
        })
    }),
    zm5q: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a, b, c) {
                return b()
            }
        })
    }),
    S1FS: (function(a, b, c) {
        var d = c("Q840"),
            e = c("OWtl"),
            f = c("bAhY"),
            g = c("mz2o");
        let h = "[data-model-selection-label]",
            i = '[data-reasoning-slider], [role="slider"]',
            j = '[aria-hidden="true"], [hidden], [inert], .sr-only';

        function k(a, b) {
            let c = a.ownerDocument.createTreeWalker(a, NodeFilter.SHOW_TEXT),
                d = "";
            for (let e = c.nextNode(); null != e; e = c.nextNode()) {
                let c = e.parentElement;
                if (null == c) continue;
                let f = c.closest(j);
                !(null != f && a.contains(f)) && (!b || c.checkVisibility?.({
                    opacityProperty: !0,
                    visibilityProperty: !0
                })) && (d += e.textContent ?? "")
            }
            return d.trim()
        }(0, d.j)(e.a, (a, b) => {
            let {
                scope: c,
                externalSignal: d
            } = b, e = {
                current: null
            }, l = {
                current: null
            }, m = {
                capture: a => (function(a, b, c) {
                    try {
                        if (!(0, g.a)(a)) return
                    } catch {
                        return
                    }
                    if (!(c.target instanceof Element)) return;
                    let d = c.target.closest(`[role="menuitemradio"], ${i}`);
                    if (null == d || "pointerup" === c.type && !d.matches(i) || c instanceof KeyboardEvent && !["Enter", " ", "ArrowLeft", "ArrowRight", "Home", "End"].includes(c.key) || "click" === c.type && 0 === c.detail && b.current?.element === d) return;
                    b.current?.clear();
                    let e = window.setTimeout(h, 0),
                        f = {
                            element: d,
                            startedAt: c.timeStamp,
                            clear: h
                        };

                    function h() {
                        window.clearTimeout(e), b.current === f && (b.current = null)
                    }
                    b.current = f
                })(c, e, a),
                prepare: (a, b, d, m) => {
                    let n = e.current;
                    return (n?.clear(), null == n || null == d) ? void l.current?.() : function(a, b, c, d, e, l, m) {
                        if (m.current?.(), null == b || null == d || ("slider" === c ? !b.element.matches(i) : b.element !== c)) return;
                        let n = d.ownerDocument,
                            o = n.defaultView;
                        if (null == o || "visible" !== n.visibilityState) return;
                        let p = (0, g.b)(a, "model_selection_to_visible_label");
                        if (null == p) return;
                        let q = null == e ? [d] : [d, e],
                            r = () => q.flatMap(a => Array.from(a.querySelectorAll(h))),
                            s = new Set(r().filter(a => a.dataset.modelSelectionLabel === l || "" === a.dataset.modelSelectionLabel).map(a => k(a, !1)).filter(Boolean));
                        return a => {
                            let c;
                            if (a === l) return;
                            let e = !1,
                                g = new AbortController,
                                i = () => {
                                    g.abort(), u.disconnect(), c?.(), o.clearTimeout(v), m.current === i && (m.current = null)
                                },
                                t = () => {
                                    g.signal.aborted || null != c || (c = (0, f.a)(o, () => {
                                        c = void 0;
                                        let f = d.isConnected && null == d.closest('[role="menu"][data-state="closed"]');
                                        if (e && !f || "visible" !== n.visibilityState || !q.some(a => a.isConnected)) return void i();
                                        for (let c of (e = f, r())) {
                                            if (c.dataset.modelSelectionLabel !== a || !c.isConnected || null != c.closest(j)) continue;
                                            let d = k(c, !0);
                                            if (d && !s.has(d)) {
                                                p(o.performance.now() - b.startedAt), i();
                                                return
                                            }
                                        }
                                    }))
                                },
                                u = new o.MutationObserver(a => {
                                    null == c && a.some(a => {
                                        let {
                                            attributeName: b,
                                            target: c
                                        } = a;
                                        return "style" !== b || c instanceof o.Element && (null != c.closest(h) || null != c.querySelector(h))
                                    }) && t()
                                }),
                                v = o.setTimeout(i, 1e4);
                            for (let a of (m.current = i, n.addEventListener("visibilitychange", () => {
                                    "visible" !== n.visibilityState && i()
                                }, {
                                    signal: g.signal
                                }), o.addEventListener("pagehide", i, {
                                    signal: g.signal
                                }), q)) a.addEventListener("transitionstart", t, {
                                signal: g.signal
                            }), a.addEventListener("transitionend", t, {
                                signal: g.signal
                            }), a.addEventListener("animationend", t, {
                                signal: g.signal
                            }), u.observe(a, {
                                subtree: !0,
                                childList: !0,
                                characterData: !0,
                                attributes: !0,
                                attributeFilter: ["data-model-selection-label", "aria-hidden", "inert", "data-state", "style"]
                            });
                            t()
                        }
                    }(c, n, b, d.closest("[data-model-picker-view]"), m, a, l)
                }
            };
            return d(m, a => {
                let {
                    set: b
                } = a;
                return b(m), () => {
                    e.current?.clear(), l.current?.()
                }
            })
        }, {
            autoDispose: !0
        })
    }),
    oVAx: (function(a, b, c) {
        var d = c("FVr2"),
            e = c("kcZo");
        let f = new class {
            submissions = new Map;
            turns = new Map;
            start(a, b, c, d, f) {
                this.finishSubmission(a, "superseded"), this.remove(a);
                let g = {
                    startedAtMs: b - performance.timeOrigin,
                    routeThreadId: c,
                    conversationId: null,
                    finished: !1,
                    metrics: new e.a(d, b => {
                        f?.({
                            message: "Turn latency observation",
                            status: "info",
                            context: {
                                ...b,
                                client_submission_id: a,
                                thread_id: g.conversationId,
                                turn_id: g.turnId
                            }
                        })
                    }),
                    paintSkipped: !1,
                    paintObserved: !1,
                    listeners: new Set
                };
                this.submissions.set(a, g)
            }
            bind(a, b, c, d) {
                let e = this.submissions.get(a);
                null == e || e.finished || (e.conversationId = c, e.hostId = b, e.turnId = d, e.turnKey = JSON.stringify([b, d]), this.turns.set(e.turnKey, a))
            }
            activity(a, b) {
                let c = this.turns.get(JSON.stringify([a, b])),
                    d = null == c ? void 0 : this.submissions.get(c);
                null == d || d.finished || d.metrics.activity(performance.now() - d.startedAtMs)
            }
            answer(a, b, c) {
                let d = this.turns.get(JSON.stringify([a, b])),
                    e = null == d ? void 0 : this.submissions.get(d);
                if (null != e && !e.finished && null == e.answerItemId)
                    for (let a of (e.answerItemId = c, e.metrics.answer(performance.now() - e.startedAtMs), e.listeners)) a()
            }
            paint(a, b) {
                let c = this.submissions.get(a);
                c?.answerItemId === b && !c.paintSkipped && (c.paintObserved = !0, c.metrics.paint(performance.now() - c.startedAtMs), c.finished && this.remove(a))
            }
            observePaint(a, b, c, e) {
                let f = Array.from(this.submissions).find(a => {
                    let [, d] = a;
                    return !d.paintObserved && !d.paintSkipped && d.hostId === b && d.conversationId === c && (d.answerItemId === e || !d.finished && null == d.answerItemId)
                });
                if (null == f) return;
                let [g, h] = f;
                return (0, d.a)(a, {
                    paintReadiness: () => h.paintSkipped || this.submissions.get(g) !== h || null != h.answerItemId && h.answerItemId !== e ? "closed" : h.answerItemId === e ? "ready" : h.finished ? "closed" : "waiting",
                    recordFirstPaint: () => this.paint(g, e),
                    skipFirstPaint: () => {
                        h.paintSkipped = !0
                    },
                    observePaintReadiness: a => (h.listeners.add(a), () => {
                        h.listeners.delete(a)
                    })
                })
            }
            finish(a, b, c) {
                let d = this.turns.get(JSON.stringify([a, b]));
                null != d && this.finishSubmission(d, c)
            }
            finishSubmission(a, b) {
                let c = this.submissions.get(a);
                if (null != c && !c.finished) {
                    if (c.finished = !0, c.metrics.finish({
                            product_experience: "codex",
                            runtime_source: "unknown",
                            client_surface: "codex_apps_native",
                            status: b,
                            is_resume: "false"
                        }), c.paintObserved || c.paintSkipped || null == c.answerItemId) return void this.remove(a);
                    for (let b of (c.cleanup = setTimeout(() => this.remove(a), 5e3), c.listeners)) b()
                }
            }
            routeChanged(a) {
                for (let [b, c] of this.submissions)(null == a || c.routeThreadId !== a && c.conversationId !== a) && (this.finishSubmission(b, "navigation_away"), this.remove(b))
            }
            abortConversation(a) {
                for (let [b, c] of this.submissions) c.conversationId === a && (this.finishSubmission(b, "navigation_away"), this.remove(b))
            }
            dispose() {
                for (let a of this.submissions.keys()) this.finishSubmission(a, "app_disposed"), this.remove(a)
            }
            remove(a) {
                let b = this.submissions.get(a);
                if (clearTimeout(b?.cleanup), b?.turnKey != null && this.turns.delete(b.turnKey), this.submissions.delete(a), null != b) {
                    for (let a of b.listeners) a();
                    b.listeners.clear()
                }
            }
        };
        c.d(b, {}, {
            a: f
        })
    }),
    ithN: (function(a, b, c) {
        var d = c("NnGo");
        let e = new WeakMap;
        c.d(b, {}, {
            a: function(a, b) {},
            b: function(a, b, c, f) {
                let g = e.get(a.node)?.get(b)?.get(c)?.firstAnswerAt;
                if (null != g && !(f < g) && (0, d.b)()) return f - g >= 3e4 ? "at_least_30s" : "under_30s"
            }
        })
    }),
    Lfan: (function(a, b, c) {
        var d = c("tl5a"),
            e = c("dbK8");
        c("aFoA"), c("nlNF"), c("tSEg");
        var f = c("kl6F");
        c("mz2o");
        let g = new Map;
        c.d(b, {}, {
            a: function(a, b) {
                let c = g.get(a);
                null != c && "cloud_tpp" !== c.threadKind && ((0, e.b)(b) ? c.threadKind = "cloud_asb" : c.threadKind = "local" === b ? "local" : "remote")
            },
            b: function(a, b) {
                let c = g.get(a);
                null != c && null == c.threadId && (c.threadId = b)
            },
            c: function(a) {
                let b = !1;
                return {
                    retain() {
                        b = !0
                    },
                    [Symbol.dispose]() {
                        b || a.cancel()
                    }
                }
            },
            d: function(a, b, c) {
                let d = null == b ? void 0 : g.get(b);
                if (d?.threadId != null && "cloud_tpp" !== d.threadKind && (c === d.threadId || a.get(f.g, c) === d.threadId)) return d.observe
            },
            e: function(a, b, c) {}
        })
    }),
    H7qy: (function(a, b, c) {
        var d = c("zPtR"),
            e = c("OSkm"),
            f = c("Cslg"),
            g = c("unIO"),
            h = c("ReGc"),
            i = c("bNMl"),
            j = c("WFY2"),
            k = c("nZhi");
        c.d(b, {}, {
            a: function(a, b, c, l) {
                let m = {
                    rendererFrameGapMsSum: b.rendererResponsiveness.frameGapMsSum,
                    rendererFrameGapCount: b.rendererResponsiveness.frameGapCount,
                    rendererFrameGapMsMax: b.rendererResponsiveness.frameGapMsMax,
                    rendererFrameGapOver50MsCount: b.rendererResponsiveness.frameGapOver50MsCount,
                    rendererForcedStyleAndLayoutMsSum: b.rendererResponsiveness.forcedStyleAndLayoutMsSum,
                    rendererInteractionEventCount: b.rendererResponsiveness.interactionEventCount,
                    rendererWorstEventDurationMs: b.rendererResponsiveness.worstEventDurationMs,
                    rendererWorstEventInputDelayMs: b.rendererResponsiveness.worstEventInputDelayMs,
                    rendererWorstEventProcessingMs: b.rendererResponsiveness.worstEventProcessingMs,
                    rendererWorstEventPresentationDelayMs: b.rendererResponsiveness.worstEventPresentationDelayMs
                };
                ("app_start" === b.name || "thread_navigation" === b.name) && (0, k.d)({
                    name: b.name,
                    source: "Client spans",
                    startedAtMs: b.endedAtMs - b.durationMs,
                    durationMs: b.durationMs,
                    metadata: {
                        ...m,
                        outcome: b.outcome,
                        reason: b.reason,
                        attributes: b.attributes,
                        marksMs: b.marks,
                        timingQuality: b.timing.quality
                    }
                });
                let n = a.get(h.a).data?.buildNumber ?? void 0,
                    o = "pages_realtime_scroll" === b.name || "pages_realtime_drag" === b.name || "pages_realtime_zoom_pan" === b.name ? b.attributes : void 0,
                    p = null != o ? {
                        expectedUserId: a.get(f.k) ?? void 0,
                        expectedAccountId: a.get(f.f) ?? void 0
                    } : void 0,
                    q = {
                        spanName: b.name,
                        durationMs: b.durationMs,
                        completedTs: (0, d.c)(b.endedAtMs),
                        outcome: b.outcome,
                        reason: b.reason ?? void 0,
                        marksMs: b.marks,
                        backgroundDurationMs: b.timing.backgroundDurationMs,
                        heartbeatGapDurationMsSum: b.timing.heartbeatGapDurationMsSum,
                        timingQuality: b.timing.quality,
                        wallDurationMs: b.timing.wallDurationMs,
                        appServerCpuPercentAvg: b.electronCpu?.appServer?.cpuPercentAvg,
                        appServerCpuSamplingWindowDurationMs: b.electronCpu?.appServer?.cpuSamplingWindowDurationMs,
                        appServerRssBytes: (0, d.c)(b.electronCpu?.appServer?.rssBytes),
                        appServerTreeRssBytes: (0, d.c)(b.electronCpu?.appServer?.treeRssBytes),
                        cpuSamplingWindowDurationMs: b.electronCpu?.samplingWindowDurationMs,
                        electronProcessWorkingSetKbTotal: (0, d.c)(b.electronCpu?.electronProcessWorkingSetKbTotal),
                        mainProcessCpuPercentAvg: b.electronCpu?.mainProcessCpuPercentAvg,
                        mainProcessHandleCount: (0, d.c)(b.electronCpu?.mainProcessHandleCount),
                        mainProcessRssBytes: (0, d.c)(b.electronCpu?.mainProcessRssBytes),
                        rendererProcessCount: b.electronCpu?.rendererProcessCount,
                        rendererProcessCpuPercentAvg: b.electronCpu?.rendererProcessCpuPercentAvg,
                        rendererProcessWorkingSetKb: (0, d.c)(b.electronCpu?.rendererProcessWorkingSetKb),
                        rendererProcessWorkingSetKbTotal: (0, d.c)(b.electronCpu?.rendererProcessWorkingSetKbTotal),
                        systemTotalMemoryBytes: (0, d.c)(b.electronCpu?.systemTotalMemoryBytes),
                        systemFreeMemoryBytes: (0, d.c)(b.electronCpu?.systemFreeMemoryBytes),
                        systemCommitTotalBytes: (0, d.c)(b.electronCpu?.systemCommitTotalBytes),
                        systemCommitLimitBytes: (0, d.c)(b.electronCpu?.systemCommitLimitBytes),
                        systemKernelPagedPoolBytes: (0, d.c)(b.electronCpu?.systemKernelPagedPoolBytes),
                        systemKernelNonpagedPoolBytes: (0, d.c)(b.electronCpu?.systemKernelNonpagedPoolBytes),
                        systemHandleCount: (0, d.c)(b.electronCpu?.systemHandleCount),
                        systemProcessCount: b.electronCpu?.systemProcessCount,
                        systemThreadCount: b.electronCpu?.systemThreadCount,
                        systemUptimeMs: (0, d.c)(b.electronCpu?.systemUptimeMs),
                        ...m,
                        rendererLongTaskCount: b.rendererResponsiveness.longTaskObserverSupported ? b.rendererResponsiveness.longTaskCount : void 0,
                        rendererLongTaskDurationMsMax: b.rendererResponsiveness.longTaskObserverSupported ? b.rendererResponsiveness.longTaskDurationMsMax : void 0,
                        rendererLongTaskDurationMsSum: b.rendererResponsiveness.longTaskObserverSupported ? b.rendererResponsiveness.longTaskDurationMsSum : void 0,
                        rendererLongTaskObserverSupported: b.rendererResponsiveness.longTaskObserverSupported,
                        rendererLongAnimationFrameCount: b.rendererResponsiveness.longAnimationFrameObserverSupported ? b.rendererResponsiveness.longAnimationFrameCount : void 0,
                        rendererLongAnimationFrameDurationMsMax: b.rendererResponsiveness.longAnimationFrameObserverSupported ? b.rendererResponsiveness.longAnimationFrameDurationMsMax : void 0,
                        rendererLongAnimationFrameDurationMsSum: b.rendererResponsiveness.longAnimationFrameObserverSupported ? b.rendererResponsiveness.longAnimationFrameDurationMsSum : void 0,
                        rendererLongAnimationFrameBlockingDurationEstimateMsMax: b.rendererResponsiveness.longAnimationFrameObserverSupported ? b.rendererResponsiveness.longAnimationFrameBlockingDurationEstimateMsMax : void 0,
                        rendererLongAnimationFrameBlockingDurationEstimateMsSum: b.rendererResponsiveness.longAnimationFrameObserverSupported ? b.rendererResponsiveness.longAnimationFrameBlockingDurationEstimateMsSum : void 0,
                        rendererLongAnimationFrameObserverSupported: b.rendererResponsiveness.longAnimationFrameObserverSupported,
                        pagesRealtimeAttributes: o,
                        initialSurface: "app_start" === b.name ? b.attributes.initialSurface : void 0,
                        updateAttemptId: "app_start" === b.name ? b.attributes.updateAttemptId : void 0,
                        processToPreloadDurationMs: "app_start" === b.name ? b.attributes.processToPreloadDurationMs : void 0,
                        nativeStartupProgress: "app_start" === b.name ? b.attributes.nativeStartupProgress : void 0,
                        threadKind: "side_chat_open" === b.name || "thread_navigation" === b.name || "thread_hydration" === b.name || "turn_first_response_visible" === b.name ? b.attributes.threadKind : void 0,
                        navigationType: "thread_navigation" === b.name || "home_navigation" === b.name ? b.attributes.navigationReason : void 0,
                        threadState: "side_chat_open" === b.name || "thread_navigation" === b.name ? b.attributes.threadState : void 0,
                        threadViewAttributes: "thread_navigation" === b.name && null != b.attributes.view ? {
                            ...b.attributes.view,
                            maxPages: (0, d.c)(b.attributes.view.maxPages),
                            cachedPageCount: (0, d.c)(b.attributes.view.cachedPageCount),
                            capacityEvictionCount: (0, d.c)(b.attributes.view.capacityEvictionCount)
                        } : void 0,
                        submissionKind: "side_chat_open" === b.name || "turn_first_response_visible" === b.name ? b.attributes.submissionKind : void 0,
                        responseRuntime: "turn_first_response_visible" === b.name ? b.attributes.responseRuntime : void 0,
                        pluginPageEntrypoint: "plugins_page_load" === b.name ? b.attributes.entrypoint : void 0,
                        pluginPageKind: "plugins_page_load" === b.name ? b.attributes.pageKind : void 0,
                        artifactGenerationAttributes: "artifact_generation" === b.name ? b.attributes : void 0,
                        artifactPreviewAttributes: "artifact_preview" === b.name || "artifact_thumbnail" === b.name ? b.attributes : void 0,
                        reviewRenderAttributes: "review_open" === b.name ? b.attributes : void 0,
                        pageNavigationAttributes: "page_navigation" === b.name || "page_document_bootstrap" === b.name ? b.attributes : void 0,
                        clientPlatform: b.clientPlatform,
                        appShell: "electron" === b.hostType ? "owl" : void 0,
                        buildNumber: n,
                        buildCommitSha: (0, g.a)(),
                        spanId: b.spanId,
                        traceId: b.traceId,
                        samplingRuleId: l.ruleId,
                        samplingReason: l.reason,
                        appStateSnapshot: null == c ? void 0 : {
                            schemaVersion: c.schema_version,
                            snapshotReason: c.snapshot_reason,
                            sessionAgeMs: c.session_age_ms,
                            threadCountTotal: c.thread_count_total,
                            threadCountLoadedRecent: c.thread_count_loaded_recent,
                            threadCountActive: c.thread_count_active,
                            threadCountStreamingOwner: c.thread_count_streaming,
                            threadCountStreamingWithActiveRuntime: c.thread_count_streaming_with_active_runtime,
                            threadCountStreamingWithoutActiveRuntime: c.thread_count_streaming_without_active_runtime,
                            threadCountWithInflightTurn: c.thread_count_with_inflight_turn,
                            turnCountTotalLoaded: c.turn_count_total_loaded,
                            itemCountTotalLoaded: c.item_count_total_loaded,
                            maxTurnsInSingleThread: c.max_turns_in_single_thread,
                            maxItemsInSingleTurn: c.max_items_in_single_turn,
                            pendingRequestCount: c.pending_request_count,
                            inflightTurnCount: c.inflight_turn_count,
                            deltaEventsTotal: c.delta_events_total,
                            deltaBytesTotalEstimate: c.delta_bytes_total_estimate,
                            deltaEventsLast30s: c.delta_events_last_30s,
                            deltaBytesLast30sEstimate: c.delta_bytes_last_30s_estimate,
                            reviewDiffFilesTotal: c.review_diff_files_total,
                            reviewDiffLinesTotal: c.review_diff_lines_total,
                            reviewDiffBytesEstimate: c.review_diff_bytes_estimate
                        }
                    };
                (0, i.a)(a, e.CodexPerformanceSpanCompleted, q, void 0, void 0, p), ("app_start" === b.name || "side_chat_open" === b.name || "thread_navigation" === b.name || "thread_hydration" === b.name || "thread_history_page" === b.name || "turn_first_response_visible" === b.name && "new_thread" === b.attributes.submissionKind) && j.a.info("client.performance.span", {
                    safe: {
                        ...m,
                        name: b.name,
                        durationMs: b.durationMs,
                        wallDurationMs: b.timing.wallDurationMs,
                        backgroundDurationMs: b.timing.backgroundDurationMs,
                        timingQuality: b.timing.quality,
                        marksMs: b.marks,
                        outcome: b.outcome,
                        reason: b.reason,
                        traceId: b.traceId,
                        spanId: b.spanId,
                        buildNumber: n,
                        buildCommitSha: (0, g.a)(),
                        clientPlatform: b.clientPlatform,
                        hostType: b.hostType,
                        samplingRuleId: l.ruleId,
                        samplingReason: l.reason,
                        ...b.attributes
                    }
                })
            }
        })
    }),
    w5pR: (function(a, b, c) {
        var d = c("Nwp9"),
            e = c("nZhi");
        let f = (0, d.b)(e.a, !1);
        c.d(b, {}, {
            a: f
        })
    }),
    dJBt: (function(a, b, c) {
        var d = c("QosV"),
            e = c("zd8w"),
            f = c("bAhY");

        function g() {}
        c.d(b, {}, {
            a: function(a) {
                let b, c, h = (0, d.c)(7),
                    {
                        onPaint: i,
                        onCommit: j,
                        requireVisibleAtPaint: k,
                        paintIdentity: l
                    } = a,
                    m = void 0 !== k && k,
                    n = (0, e.useEffectEvent)(j ?? g),
                    o = (0, e.useEffectEvent)(i);
                return h[0] !== n || h[1] !== o || h[2] !== m ? (b = () => {
                    let a;
                    n();
                    let b = () => {
                        "visible" === document.visibilityState && null == a && (a = (0, f.a)(window, () => {
                            if (m && "visible" !== document.visibilityState) {
                                a = void 0;
                                return
                            }
                            document.removeEventListener("visibilitychange", b), o()
                        }))
                    };
                    return document.addEventListener("visibilitychange", b), b(), () => {
                        document.removeEventListener("visibilitychange", b), a?.()
                    }
                }, h[0] = n, h[1] = o, h[2] = m, h[3] = b) : b = h[3], h[4] !== l || h[5] !== m ? (c = [m, l], h[4] = l, h[5] = m, h[6] = c) : c = h[6], (0, e.useLayoutEffect)(b, c), null
            }
        })
    }),
    S5c9: (function(a, b, c) {
        var d = c("mz2o");
        c.d(b, {}, {
            a: function(a, b) {
                let c = (0, d.c)(a, .1);
                return c && {
                    selected: a => c({
                        spanName: `${b}_to_selected`,
                        durationMs: a,
                        outcome: "success"
                    }),
                    ready: a => c({
                        spanName: `${b}_to_ready`,
                        durationMs: a,
                        outcome: "success"
                    })
                }
            }
        })
    }),
    N7wd: (function(a, b, c) {
        var d = c("RU3e");
        let e = '[data-user-message-bubble], [data-markdown-text-style="assistant-message"], [data-chatgpt-conversation-turn="true"]',
            f = "[data-rail-chat-transcript]",
            g = `${f} :is(${e}), ${f} [data-turn-key]:has([data-content-search-turn-key]), ${f} [data-rail-chat-empty]`,
            h = '[data-app-shell-focus-area="right-panel"]',
            i = {
                opacityProperty: !0,
                visibilityProperty: !0
            },
            j = ["aria-disabled", "aria-hidden", "class", "contenteditable", "disabled", "hidden", "inert", "readonly", "style", "data-app-shell-active-page", "data-rail-activity-ready", "data-rail-chat-empty", "data-rail-chat-transcript", "data-rail-activity-visit", "data-rail-home-visit", "data-rail-home-surface"];

        function k(a, b) {
            if ("activity" === a) return "[data-rail-activity-ready]";
            let c = b.getAttribute("data-rail-home-surface");
            if ("home" === c) return 'textarea#pending-home-input:not(:disabled):not([readonly]), [data-composer-placement="home"] .ProseMirror[contenteditable="true"]';
            if ("remote-thread" === c) return e;
            if (!c?.endsWith("-thread")) return null;
            let d = b.querySelector(`${f}[data-rail-chat-empty]`);
            return d && !d.closest(h) ? `${g}, [data-composer-placement="thread"] .ProseMirror[contenteditable="true"]` : g
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, {
                        document: d,
                        lifetime: e,
                        surface: f,
                        key: g,
                        startedAt: l,
                        isCurrent: m,
                        report: n
                    } = a,
                    {
                        signal: o
                    } = e,
                    p = () => e.abort(),
                    q = () => !o.aborted && !d.hidden && d.hasFocus() && m(),
                    r = d.defaultView;
                if (null == r || !q()) return p(), p;
                let s = `[data-rail-${f}-visit="${CSS.escape(g)}"]`,
                    t = new MutationObserver(y),
                    u = new IntersectionObserver(function(a) {
                        if (!q()) return void p();
                        if (!v) return void y();
                        v = !1;
                        let b = d.querySelector(s),
                            e = b && k(f, b),
                            g = a.find(a => {
                                var c, g, j;
                                let {
                                    target: k,
                                    intersectionRect: l
                                } = a;
                                return b?.contains(k) && e && k.matches(e) && ("home" !== f || !k.closest(h)) && (c = k, g = l, j = d, !(g.width <= 0 || g.height <= 0 || c.closest('[inert], [aria-disabled="true"], [aria-hidden="true"], [data-app-shell-active-page="false"]')) && !!c.checkVisibility(i) && c.contains(j.elementFromPoint(g.left + g.width / 2, g.top + g.height / 2)))
                            })?.target;
                        if (g && g === c) {
                            p(), n(performance.now() - l);
                            return
                        }
                        c = g, g ? y() : a.some(a => a.isIntersecting) && x(d.body)
                    }, {
                        threshold: Number.EPSILON
                    }),
                    v = !1,
                    w = 0;

                function x(a) {
                    if (b !== a) {
                        b = a, t.disconnect(), t.observe(a, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0,
                            attributeFilter: j
                        });
                        for (let b = a.parentElement; b; b = b.parentElement) t.observe(b, {
                            childList: !0,
                            attributes: !0,
                            attributeFilter: ["class", "hidden", "style", "inert", "aria-hidden"]
                        })
                    }
                }

                function y() {
                    w || o.aborted || (w = requestAnimationFrame(z))
                }

                function z() {
                    if (w = 0, u.disconnect(), u.takeRecords(), !q()) return void p();
                    let a = d.querySelector(s);
                    if (null == a) {
                        c = void 0, x(d.body);
                        return
                    }
                    let b = k(f, a);
                    if (null == b) return void p();
                    let e = a.querySelectorAll(b);
                    for (let b of (x(a), v = !0, e)) "home" === f && b.closest(h) || u.observe(b);
                    !c || a.contains(c) && c.matches(b) || (c = void 0)
                }
                let A = a.watchNavigation?.(() => {
                    m() || p()
                });
                return o.addEventListener("abort", () => {
                    t.disconnect(), cancelAnimationFrame(w), u.disconnect(), A?.()
                }, {
                    once: !0
                }), r.addEventListener("resize", y, {
                    signal: o
                }), d.addEventListener("scroll", y, {
                    capture: !0,
                    signal: o
                }), d.addEventListener("transitionend", y, {
                    signal: o
                }), d.addEventListener("animationend", y, {
                    signal: o
                }), y(), p
            },
            b: function(a, b) {
                let c = new AbortController,
                    {
                        signal: e
                    } = c,
                    f = b.defaultView,
                    g = () => c.abort();
                if (null == f || b.hidden || !b.hasFocus() || !1 === a.get(d.b)) return g(), c;
                f.addEventListener("blur", () => {
                    b.hasFocus() || g()
                }, {
                    signal: e
                }), f.addEventListener("pagehide", g, {
                    signal: e
                }), b.addEventListener("visibilitychange", g, {
                    signal: e
                });
                let h = a.watch(a => {
                        let {
                            get: b
                        } = a;
                        !1 === b(d.b) && g()
                    }),
                    i = f.setTimeout(g, 6e4);
                return e.addEventListener("abort", () => {
                    h(), f.clearTimeout(i)
                }, {
                    once: !0
                }), c
            }
        })
    }),
    jgoj: (function(a, b, c) {
        let d, e, f, g = new Set;

        function h(a) {
            for (let b of a)
                if ("u" > typeof PerformanceEventTiming && b instanceof PerformanceEventTiming && b.interactionId > 0)
                    for (let a of g) a.event(b)
        }

        function i() {
            null != e && cancelAnimationFrame(e), e = void 0, f = void 0
        }

        function j() {
            i(), document.hidden || "function" != typeof requestAnimationFrame || (e = requestAnimationFrame(k))
        }

        function k(a) {
            if (document.hidden) return void i();
            if (null != f && a > f)
                for (let b of g) b.frame(f, a);
            g.size > 0 && (f = a, e = requestAnimationFrame(k))
        }
        c.d(b, {}, {
            a: function(a) {
                return 0 === g.size && (d = function(a, b) {
                    if ("u" < typeof PerformanceObserver || !PerformanceObserver.supportedEntryTypes?.includes(a)) return;
                    let c = new PerformanceObserver(a => b(a.getEntries()));
                    try {
                        return c.observe("event" === a ? {
                            type: a,
                            durationThreshold: 16
                        } : {
                            type: a
                        }), c
                    } catch {
                        c.disconnect();
                        return
                    }
                }("event", h), document.addEventListener("visibilitychange", j), j()), g.add(a), {
                    eventsSupported: null != d,
                    stop: () => {
                        g.has(a) && (null != d && h(d.takeRecords()), g.delete(a), 0 === g.size && (d?.disconnect(), d = void 0, document.removeEventListener("visibilitychange", j), i()))
                    }
                }
            }
        })
    }),
    iD17: (function(a, b, c) {
        var d = c("KvQL"),
            e = c("kjQz"),
            f = c("hs0N");
        let g = new Map;
        c.d(b, {}, {
            a: function() {
                for (let a of g.values()) a.abort("app_disposed")
            },
            b: function(a, b) {
                let c = g.get(a);
                null != c && (c.mark("panel_visible"), c.mark("composer_editable"), b && (c.mark("send_ready"), c.end()))
            },
            c: function(a) {
                var b, c;
                let h, {
                        hostId: i,
                        reopen: j,
                        messageId: k,
                        hasPrompt: l,
                        parentTurns: m,
                        onTerminal: n
                    } = a,
                    o = {
                        threadKind: j ? (b = i) === d.$b ? "cloud_reopen" : "local" === b ? "local_reopen" : "remote_reopen" : "unknown",
                        submissionKind: "empty",
                        threadState: null == (c = m) ? "unknown" : c < 10 ? "small" : c < 50 ? "medium" : "large"
                    };
                null != k && (o.submissionKind = l ? "prompt" : "queued");
                let p = crypto.randomUUID(),
                    q = e.a.start("side_chat_open", o, {
                        key: p,
                        onTerminal: () => {
                            g.delete(p), h?.(), n()
                        }
                    });
                if (!q.isRecording()) return;
                g.set(p, q);
                let r = {
                    span: q,
                    mark: a => q.mark(a),
                    setPath: a => {
                        o.threadKind = a
                    }
                };
                return null != k ? h = f.a.registerSideChatTurn(k, q) : r.composerKey = p, r
            }
        })
    }),
    BJjx: (function(a, b, c) {
        var d = c("ekLq");
        let e = '[hidden], [data-sidebar-collapsed], [data-app-action-sidebar-section-collapsed="true"]';

        function f(a, b, c) {
            let e = c ?? a.closest(d.c.sidebarScroll)?.getBoundingClientRect();
            return Math.min(b.right, window.innerWidth, e?.right ?? 1 / 0) > Math.max(b.left, 0, e?.left ?? 0) && Math.min(b.bottom, window.innerHeight, e?.bottom ?? 1 / 0) > Math.max(b.top, 0, e?.top ?? 0)
        }
        c.d(b, {}, {
            a: e,
            b: f,
            c: function(a, b) {
                if (!a.isConnected || a.closest(e) || !a.checkVisibility?.({
                        visibilityProperty: !0,
                        opacityProperty: !0
                    })) return;
                let c = a.getBoundingClientRect();
                return f(a, c, b) ? c : void 0
            }
        })
    }),
    mkvQ: (function(a, b, c) {
        var d = c("mz2o");

        function e() {}
        c.d(b, {}, {
            a: function(a, b, c) {
                let f, g, h = b.ownerDocument,
                    i = h.defaultView;
                if (null == i || "visible" !== h.visibilityState || "function" != typeof i.ResizeObserver) return;
                let j = (0, d.b)(a, "space_panel_resize_to_first_layout_change");
                if (null == j) return;
                let k = b.closest("aside");
                if (null == k || !k.style.width.endsWith("px")) return;
                let l = k.style.width,
                    m = Number.parseFloat(l),
                    n = () => k.isConnected && "visible" === h.visibilityState && null == k.closest("[inert], [hidden], [aria-hidden=true]") && c?.() !== !1;
                if (!(m > 0) || !n()) return;
                let o = !1,
                    p = () => {
                        o || (o = !0, f?.disconnect(), null != g && i.cancelAnimationFrame(g), i.clearTimeout(r), h.removeEventListener("visibilitychange", q), i.removeEventListener("pagehide", p), s.cancel = e, s.firstMove = e, s.end = e)
                    };

                function q() {
                    "visible" !== h.visibilityState && p()
                }
                let r = i.setTimeout(p, 6e4);
                h.addEventListener("visibilitychange", q), i.addEventListener("pagehide", p);
                let s = {
                    firstMove(a) {
                        if (!o && null == f) try {
                            (f = new i.ResizeObserver(b => {
                                let [c] = b, d = i.performance.now();
                                if (o) return;
                                if (!n()) return void p();
                                let e = c?.borderBoxSize?.[0]?.inlineSize;
                                !(k.style.width === l || null == e || e <= 0 || Math.abs(e - m) <= 1 / 64) && (p(), k.checkVisibility?.({
                                    visibilityProperty: !0
                                }) && j(d - a))
                            })).observe(k, {
                                box: "border-box"
                            })
                        } catch {
                            p()
                        }
                    },
                    end() {
                        g = i.requestAnimationFrame(() => {
                            g = i.requestAnimationFrame(p)
                        })
                    },
                    cancel: p
                };
                return s
            }
        })
    }),
    DipL: (function(a, b, c) {
        var d = c("SRbQ"),
            e = c("l00C"),
            f = c("tl5a"),
            g = c("Bl6U"),
            h = c("dbK8"),
            i = c("JQtI"),
            j = c("S8dY");
        async function k(a, b, c) {
            let f = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                let h, i = c ?? a.get(g.c, b),
                    j = a.get(e.b, i);
                if (null == j) return "unknown";
                let k = (0, d.a)(f, j.rpc.getNavigationRuntimeState(b), !1);
                try {
                    let b = new Promise(a => {
                            h = setTimeout(() => a("unknown"), 1e3)
                        }),
                        c = await Promise.race([k, b]);
                    return a.get(e.b, i) === j ? c : "unknown"
                } finally {
                    clearTimeout(h)
                }
            } catch (a) {
                f.error = a, f.hasError = !0
            } finally {
                (0, d.e)(f)
            }
        }
        c.d(b, {}, {
            a: k,
            b: function(a, b, c, d) {
                let e = a.get(f.pc, b),
                    l = a.get(f.oc, b);
                j.a.start(b, "unknown", "local", "navigation_dispatched", {
                    ...d,
                    threadIsAeon: (0, h.b)(c ?? a.get(g.c, b)) && (null == e && null == l ? void 0 : (0, i.a)(e, l)),
                    hostId: c,
                    readRuntimeState: () => k(a, b, c)
                })
            }
        })
    }),
    S8dY: (function(a, b, c) {
        var d = c("KvQL"),
            e = c("kjQz"),
            f = c("L6b2");

        function g() {
            return !0
        }
        let h = new class {
            visibleView = null;
            pending = null;
            start(a, b) {
                let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "local",
                    d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "navigation_dispatched",
                    {
                        threadIsAeon: h,
                        routeThreadId: i = a,
                        hostId: j,
                        readRuntimeState: k,
                        startedAtMs: l,
                        pathname: m,
                        locationKey: n,
                        reason: o
                    } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                if (this.pending?.threadId === a && this.pending.hostId === j && (null == n || this.pending.locationKey === n)) return;
                if (null != this.pending) {
                    let {
                        span: a
                    } = this.pending;
                    this.pending = null, a.abort("superseded")
                }
                let p = {
                        threadKind: c,
                        threadState: b,
                        ...o && {
                            navigationReason: o
                        },
                        view: "route_entered" === d && this.visibleView?.threadId === a ? this.visibleView.attributes : void 0,
                        threadIsAeon: h
                    },
                    q = g(),
                    r = e.a.start("thread_navigation", p, {
                        startedAtMs: l,
                        recordUnsampled: !1,
                        startLocalTrace: q || null != m ? (b, c) => (0, f.e)({
                            name: "thread_navigation",
                            destinationKey: q ? i : void 0,
                            pathname: m,
                            locationKey: n,
                            startedAtMs: b,
                            now: c,
                            onRouteError: () => r.fail("route_error"),
                            onReady: q ? b => this.complete(a, b, "react_ready") : void 0,
                            debug: !1,
                            reason: o
                        }) : void 0,
                        captureAttributes: null == k ? void 0 : async a => {
                            p.threadState = await k(), r.isRecording() && a?.setAttributes?.({
                                "thread.state": p.threadState
                            })
                        },
                        onTerminal: () => {
                            this.pending?.span === r && (this.pending = null)
                        },
                        traceAttributes: {
                            "thread.kind": c,
                            ...o && {
                                "navigation.reason": o
                            },
                            "thread.state": b,
                            ...null != h ? {
                                "thread.is_aeon": h
                            } : {}
                        }
                    });
                r.isRecording() && (r.mark(d, l), this.pending = {
                    navigationWait: r.measure("thread.navigation_wait"),
                    renderWait: null,
                    locationKey: n,
                    span: r,
                    threadId: a,
                    routeThreadId: i,
                    hostId: j,
                    attributes: p
                })
            }
            complete(a, b) {
                let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "content_visible";
                if (null == this.pending || this.pending.threadId !== a && this.pending.routeThreadId !== a) return;
                let {
                    navigationWait: d,
                    renderWait: e,
                    span: f
                } = this.pending;
                this.pending = null, f.mark(c, b), d?.end(), e?.end(), f.end(b)
            }
            viewEntered(a, b) {
                let c = {
                    threadId: a,
                    attributes: b
                };
                return this.visibleView = c, this.pending?.threadId === a && (this.pending.attributes.view = b, this.pending.span.mark("destination_view_entered")), () => {
                    this.visibleView === c && (this.visibleView = null)
                }
            }
            hydrationStarted(a, b) {
                this.pending?.threadId === a && (this.pending.navigationWait?.end(), this.pending.navigationWait = null, null != b && (this.pending.attributes.threadIsAeon = b), this.pending.span.mark("hydration_started"))
            }
            hydrationFinished(a) {
                this.pending?.threadId === a && (this.pending.renderWait = this.pending.span.measure("thread.render_wait"), this.pending.span.mark("hydration_finished"))
            }
            historyReady(a) {
                this.pending?.threadId === a && this.pending.span.mark("history_ready")
            }
            hydrationFailed(a, b) {
                let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "hydration_failed";
                if (this.pending?.threadId !== a) return;
                let {
                    span: e
                } = this.pending;
                (this.pending = null, "canceled" === (0, d.zh)(b)["codex.outcome"]) ? e.abort("hydration_canceled"): e.fail(c)
            }
            isPending(a) {
                return this.pending?.threadId === a
            }
            getTrace(a) {
                return this.pending?.threadId === a ? this.pending.span.trace : null
            }
            abort(a) {
                if (this.pending?.threadId !== a) return;
                let {
                    span: b
                } = this.pending;
                this.pending = null, b.abort("navigation_away")
            }
            promoteRoute(a, b) {
                this.pending?.routeThreadId === a && (this.pending.routeThreadId = b)
            }
            routeChanged(a) {
                null != this.pending && this.pending.threadId !== a && this.pending.routeThreadId !== a && this.abort(this.pending.threadId)
            }
            dispose() {
                if (this.visibleView = null, null == this.pending) return;
                let {
                    span: a
                } = this.pending;
                this.pending = null, a.abort("app_disposed")
            }
        };
        c.d(b, {}, {
            a: h,
            b: g
        })
    }),
    ZxJC: (function(a, b, c) {
        var d = c("QosV"),
            e = c("zd8w"),
            f = c("c9lJ"),
            g = c("S8dY");
        c.d(b, {}, {
            a: function(a) {
                let b, c, h, i = (0, d.c)(23),
                    {
                        route: j,
                        state: k,
                        retentionEnabled: l,
                        maxPages: m,
                        cachedPageCount: n,
                        capacityEvictionCount: o,
                        ttlSeconds: p,
                        contentReused: q
                    } = a;
                if (i[0] !== j.conversationId || i[1] !== j.pathname || i[2] !== j.routeKind || i[3] !== j.taskId) {
                    switch (b = null, j.routeKind) {
                        case "local-thread":
                            b = j.conversationId;
                            break;
                        case "remote-thread":
                            b = j.taskId;
                            break;
                        case "chatgpt-thread":
                            b = `chatgpt:${j.conversationId}`;
                            break;
                        case "other": {
                            let a = (0, f.a)(j.pathname)?.params.sharedConversationId;
                            if (null != a) try {
                                b = `chatgpt-share:${decodeURIComponent(a)}`
                            } catch {}
                        }
                    }
                    i[0] = j.conversationId, i[1] = j.pathname, i[2] = j.routeKind, i[3] = j.taskId, i[4] = b
                } else b = i[4];
                return i[5] !== n || i[6] !== o || i[7] !== q || i[8] !== m || i[9] !== l || i[10] !== k || i[11] !== b || i[12] !== p ? (c = () => {
                    if (null != b) return g.a.viewEntered(b, {
                        state: k,
                        retentionEnabled: l,
                        maxPages: m,
                        cachedPageCount: n,
                        capacityEvictionCount: o,
                        ttlSeconds: p,
                        contentReused: q
                    })
                }, i[5] = n, i[6] = o, i[7] = q, i[8] = m, i[9] = l, i[10] = k, i[11] = b, i[12] = p, i[13] = c) : c = i[13], i[14] !== n || i[15] !== o || i[16] !== q || i[17] !== m || i[18] !== l || i[19] !== k || i[20] !== b || i[21] !== p ? (h = [b, k, l, m, n, o, p, q], i[14] = n, i[15] = o, i[16] = q, i[17] = m, i[18] = l, i[19] = k, i[20] = b, i[21] = p, i[22] = h) : h = i[22], (0, e.useLayoutEffect)(c, h), null
            }
        })
    }),
    xHBh: (function(a, b, c) {
        var d = c("zPtR"),
            e = c("KvQL"),
            f = c("Bl6U"),
            g = c("unIO"),
            h = c("nlNF"),
            i = c("tSEg"),
            j = c("mz2o"),
            k = c("DipL");
        let l = new class {
            pending;
            start(a, b) {
                if (null != this.getVisit(b) && m(a, b) || (this.cancel("superseded"), "visible" !== document.visibilityState || !Number.isFinite(b.startedAt) || b.startedAt < 0 || b.startedAt > performance.now())) return;
                let c = (0, j.c)(a, .01);
                if (null == c || m(a, b)) return;
                let d = new AbortController;
                return this.pending = {
                    target: b,
                    startedAt: b.startedAt,
                    report: c,
                    state: (0, k.a)(a, b.threadId, b.hostId).catch(() => "unknown"),
                    timeout: window.setTimeout(() => this.finish("timeout", "timeout"), 3e4),
                    lifetime: d
                }, document.addEventListener("visibilitychange", () => {
                    "visible" !== document.visibilityState && this.cancel("backgrounded")
                }, {
                    signal: d.signal
                }), window.addEventListener("pagehide", () => this.cancel("page_hidden"), {
                    signal: d.signal
                }), d.signal
            }
            dispatch(a) {
                let b = this.pending;
                null != b && (null != a && n(b.target, a) ? null == b.dispatchedAt && (b.dispatchedAt = performance.now()) : this.cancel("route_changed"))
            }
            getVisit(a) {
                let b = this.pending;
                return b?.dispatchedAt != null && n(b.target, a) ? b.lifetime.signal : void 0
            }
            contentVisible(a) {
                let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now(),
                    c = this.pending;
                c?.dispatchedAt != null && this.getVisit(a) === a.signal && ("visible" !== document.visibilityState ? this.cancel("backgrounded") : Number.isFinite(b) && b >= c.dispatchedAt && b <= performance.now() && this.finish("success", void 0, b))
            }
            finishTarget(a) {
                this.getVisit(a) === a.signal && this.finish(a.outcome, a.reason)
            }
            cancel(a) {
                this.finish("cancelled", a)
            }
            finish(a, b) {
                let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now(),
                    f = this.pending;
                if (null == f) return;
                let h = Math.max(0, c - f.startedAt),
                    i = (0, d.c)(Math.round(Date.now() - (performance.now() - c)));
                this.pending = void 0, window.clearTimeout(f.timeout), f.lifetime.abort(), f.state.then(c => {
                    var d;
                    return f.report({
                        spanName: null == (d = f.target.hostId) || "local" === d ? "desktop_chat_navigation_visible_v1" : (0, e.hi)(d) ? "desktop_chat_navigation_visible_cloud_v1" : "desktop_chat_navigation_visible_remote_v1",
                        navigationType: "sidebar_click",
                        threadState: c,
                        outcome: a,
                        ..."success" === a ? {
                            durationMs: h
                        } : {
                            reason: b
                        },
                        wallDurationMs: h,
                        completedTs: i,
                        timingQuality: "backgrounded" === b || "page_hidden" === b ? "backgrounded" : "foreground",
                        marksMs: null == f.dispatchedAt ? {} : {
                            navigation_dispatched: Math.max(0, f.dispatchedAt - f.startedAt)
                        },
                        buildCommitSha: (0, g.a)()
                    })
                })
            }
        };

        function m(a, b) {
            let c = a.get(h.c);
            if (null == c) return !1;
            if (null == b.routeHostId && c.pathname === (0, e.ie)(b.threadId) && "" === c.search && "" === c.hash) return !0;
            let d = (0, i.b)({
                ...c,
                routeTemplate: c.pathname
            });
            return "local-thread" === d.routeKind && d.conversationId === b.threadId && (d.hostId ?? a.get(f.c, d.conversationId)) === b.hostId
        }

        function n(a, b) {
            return a.threadId === b.threadId && a.hostId === b.hostId
        }
        c.d(b, {}, {
            a: l
        })
    }),
    hs0N: (function(a, b, c) {
        var d = c("MTwj"),
            e = c("pwwq"),
            f = c("kjQz"),
            g = c("oVAx");
        let h = new class {
            startSpan;
            scheduleAfterPaint;
            pendingByClientUserMessageId = new Map;
            sideChats = new Map;
            pendingByTurnId = new Map;
            constructor(a, b = i) {
                this.startSpan = a, this.scheduleAfterPaint = b
            }
            start(a, b, c, d, e) {
                let f = this.pendingByClientUserMessageId.get(a);
                null != f && (this.clear(f), f.span.abort("superseded"));
                let g = {
                        submissionKind: b,
                        responseRuntime: "unknown"
                    },
                    h = this.startSpan("turn_first_response_visible", g, {
                        key: a,
                        onTerminal: () => {
                            let b = this.pendingByClientUserMessageId.get(a);
                            b?.span === h && this.clear(b)
                        },
                        ...e,
                        traceAttributes: {
                            "turn.submission_kind": b,
                            ...null == e ? {} : {
                                "turn.submit_wall_time_ms": e.wallStartedAtMs
                            }
                        }
                    });
                if (!h.isRecording()) return;
                let i = {
                    kind: "composer",
                    attributes: g,
                    clientUserMessageId: a,
                    conversationId: c,
                    firstDataReceived: !1,
                    firstResponseVisible: !1,
                    newThreadNavigationDispatched: !1,
                    routeThreadId: d,
                    span: h,
                    tracedRequestStarts: null == h.trace ? null : new Map,
                    submitPreparation: h.measure("turn.submit_preparation", {
                        startedAtMs: e?.startedAtMs
                    }),
                    threadStartPreparation: null,
                    turnCompleted: !1,
                    turnId: null
                };
                this.pendingByClientUserMessageId.set(a, i)
            }
            registerSideChatTurn(a, b) {
                let c = {
                    kind: "side_chat",
                    clientUserMessageId: a,
                    firstDataReceived: !1,
                    span: b,
                    turnId: null
                };
                return this.sideChats.set(a, c), () => this.clear(c)
            }
            isPendingSideChat(a) {
                return this.sideChats.has(a)
            }
            markRequestDispatched(a, b) {
                ("turn/start" === b || "turn/addUserMessage" === b) && this.sideChats.get(a)?.span.mark("request_dispatched");
                let c = this.pendingByClientUserMessageId.get(a);
                if (null == c) return;
                c.submitPreparation?.end(), c.submitPreparation = null, "thread/start" === b && (c.threadStartPreparation?.end(), c.threadStartPreparation = null);
                let d = {};
                null != b && (d["app_server.method"] = b), c.span.mark("request_dispatched", {
                    traceAttributes: d
                })
            }
            handleRequestLifecycleEvent(a) {
                if ("started" !== a.type && "completed" !== a.type || null == a.clientUserMessageId || "thread/start" !== a.method && "thread/startAeon" !== a.method && "turn/start" !== a.method && "turn/addUserMessage" !== a.method) return;
                let b = this.pendingByClientUserMessageId.get(a.clientUserMessageId);
                if (null == b) return;
                let c = "started" === a.type ? a.startedAtMs : a.endedAtMs,
                    f = performance.timeOrigin + performance.now() + (c - Date.now()),
                    g = "turn/start" === a.method || "turn/addUserMessage" === a.method;
                if ("started" === a.type) {
                    b.tracedRequestStarts?.set(a.id, f), b.span.mark(g ? "turn_request_dispatched" : "thread_request_dispatched", {
                        atMs: f,
                        traceAttributes: {
                            "app_server.method": a.method
                        }
                    });
                    return
                }
                if (g) b.span.mark("turn_response_received", {
                    atMs: f
                });
                else {
                    let c = (0, d.a)(a.result) ? "cloud_agent" : "unknown";
                    b.attributes.responseRuntime = c, b.span.mark("thread_response_received", {
                        atMs: f,
                        traceAttributes: {
                            "codex.response_runtime": c
                        }
                    })
                }
                let h = b.tracedRequestStarts?.get(a.id);
                b.tracedRequestStarts?.delete(a.id), null != h && "requestDurationMs" in a && null != b.span.trace && (0, e.c)({
                    attributes: {
                        "app_server.method": a.method
                    },
                    endTimeMs: f,
                    name: g ? "turn.start_request_round_trip" : "thread.start_request_round_trip",
                    startTimeMs: h,
                    trace: b.span.trace
                })
            }
            getTrace(a) {
                let b = this.sideChats.get(a) ?? this.pendingByClientUserMessageId.get(a);
                return null == b ? void 0 : b.span.trace
            }
            measurePreparation(a, b) {
                return this.pendingByClientUserMessageId.get(a)?.span.measure(b) ?? {
                    end: () => {}
                }
            }
            recordEarlyPreparation(a, b, c, d) {
                let f = this.pendingByClientUserMessageId.get(a)?.span.trace;
                null == f || d < c || (0, e.c)({
                    attributes: {},
                    endTimeMs: d,
                    name: b,
                    startTimeMs: c,
                    trace: f
                })
            }
            markThreadCreationStarted(a, b) {
                let c = this.pendingByClientUserMessageId.get(a);
                null != c && (c.attributes.threadKind = b, c.span.mark("thread_creation_started", {
                    traceAttributes: {
                        "codex.thread_kind": b
                    }
                }))
            }
            markThreadCreated(a) {
                this.pendingByClientUserMessageId.get(a)?.span.mark("thread_created")
            }
            markThreadInputsReady(a) {
                let b = this.pendingByClientUserMessageId.get(a);
                b?.span.mark("thread_inputs_ready"), null != b && null == b.threadStartPreparation && (b.threadStartPreparation = b.span.measure("turn.submit.thread_start_preparation"))
            }
            bindConversation(a, b) {
                let c = this.pendingByClientUserMessageId.get(a);
                null != c && (c.conversationId = b)
            }
            markNewThreadNavigationDispatched(a) {
                let b = this.pendingByClientUserMessageId.get(a);
                null != b && (b.newThreadNavigationDispatched = !0, b.span.mark("new_thread_navigation_dispatched"))
            }
            markNewThreadPageVisible(a) {
                for (let b of this.pendingByClientUserMessageId.values()) b.newThreadNavigationDispatched && b.routeThreadId === a && b.span.mark("new_thread_page_visible")
            }
            markTurnStarted(a, b, c) {
                let d = this.sideChats.get(a) ?? this.pendingByClientUserMessageId.get(a);
                null == d || (d.turnId = c, this.pendingByTurnId.set(c, d), "side_chat" !== d.kind && (d.conversationId = b, d.span.mark("turn_started", void 0)))
            }
            markFirstDataReceived(a) {
                let b = this.pendingByTurnId.get(a);
                null == b || b.firstDataReceived || (b.firstDataReceived = !0, "side_chat" !== b.kind && (b.span.mark("first_data_received"), b.firstResponseVisible && (this.clear(b), b.span.end())))
            }
            markFirstResponseVisible(a) {
                let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "response",
                    c = this.sideChats.get(a);
                if (null != c) {
                    "response" === b && (c.span.mark("first_response_visible"), c.span.end());
                    return
                }
                let d = this.pendingByClientUserMessageId.get(a);
                if (null != d) {
                    if (!d.firstResponseVisible) {
                        if (d.turnCompleted && !d.firstDataReceived) return;
                        if (d.firstResponseVisible = !0, d.span.mark("first_response_visible"), d.submitPreparation?.end(), d.submitPreparation = null, d.threadStartPreparation?.end(), d.threadStartPreparation = null, !d.span.recordAnalyticsSuccess()) return void this.clear(d)
                    }
                    d.firstDataReceived && (this.clear(d), d.span.end())
                }
            }
            fail(a, b) {
                let c = this.sideChats.get(a);
                if (null != c) return void("render_failed" === b ? c.span.fail("no_visible_response") : c.span.fail("submit_preparation_failed" === b ? "submit_failed" : b));
                g.a.finishSubmission(a, "error");
                let d = this.pendingByClientUserMessageId.get(a);
                null != d && (this.clear(d), d.span.fail(b))
            }
            abort(a, b) {
                let c = this.sideChats.get(a);
                if (null != c) return void c.span.abort("active_turn_steer" === b || "follower_window_forwarded" === b ? "superseded" : b);
                g.a.finishSubmission(a, "canceled");
                let d = this.pendingByClientUserMessageId.get(a);
                null != d && (this.clear(d), d.span.abort(b))
            }
            finishTurn(a, b) {
                let c = this.pendingByTurnId.get(a);
                if (null != c) switch (b) {
                    case "failed":
                        this.fail(c.clientUserMessageId, "turn_failed");
                        return;
                    case "interrupted":
                        this.abort(c.clientUserMessageId, "user_interrupted");
                        return;
                    case "completed":
                        if ("composer" === c.kind && (c.turnCompleted = !0), c.firstDataReceived) return;
                        this.scheduleAfterPaint(() => {
                            let b = this.pendingByTurnId.get(a);
                            null != b && this.fail(b.clientUserMessageId, "no_visible_response")
                        });
                        return
                }
            }
            abortConversation(a) {
                for (let b of (g.a.abortConversation(a), this.pendingByClientUserMessageId.values())) b.conversationId === a && this.abort(b.clientUserMessageId, "navigation_away")
            }
            routeChanged(a) {
                for (let b of (g.a.routeChanged(a), this.pendingByClientUserMessageId.values()))(null == a || b.routeThreadId !== a && b.conversationId !== a) && this.abort(b.clientUserMessageId, "navigation_away")
            }
            dispose() {
                for (let a of (g.a.dispose(), this.pendingByClientUserMessageId.values())) this.abort(a.clientUserMessageId, "app_disposed")
            }
            clear(a) {
                let b = "side_chat" === a.kind ? this.sideChats : this.pendingByClientUserMessageId;
                b.get(a.clientUserMessageId) === a && b.delete(a.clientUserMessageId), null != a.turnId && this.pendingByTurnId.get(a.turnId) === a && this.pendingByTurnId.delete(a.turnId)
            }
        }((a, b, c) => f.a.start(a, b, c));

        function i(a) {
            let b = 4,
                c = () => {
                    window.requestAnimationFrame(() => {
                        0 == (b -= 1) ? a() : c()
                    })
                };
            c()
        }
        c.d(b, {}, {
            a: h
        })
    }),
    kcZo: (function(a, b, c) {
        function d(a) {
            return null != a && Number.isFinite(a) && a >= 0 ? a : void 0
        }
        c.d(b, {}, {
            a: class {
                metrics;
                recordObservation;
                activityMs;
                answerMs;
                paintMs;
                tags;
                paintEmitted = !1;
                constructor(a, b) {
                    this.metrics = a, this.recordObservation = b
                }
                activity(a) {
                    null == this.tags && (this.activityMs = this.activityMs ?? d(a))
                }
                answer(a) {
                    null == this.tags && (this.answerMs = this.answerMs ?? d(a))
                }
                paint(a) {
                    let b = this.paintEmitted;
                    this.paintMs = this.paintMs ?? d(a), this.emitPaint(), !b && this.paintEmitted && this.observe()
                }
                finish(a) {
                    null == this.tags && (this.tags = a, this.metrics.count("default", "conversation.milestone.finished", a), this.emit("first_activity", this.activityMs), this.emit("first_answer", this.answerMs), this.emitPaint(), this.observe())
                }
                observe() {
                    try {
                        this.recordObservation?.({
                            ...this.tags,
                            turn_status: this.tags?.status,
                            first_activity_ms: this.activityMs,
                            first_answer_ms: this.answerMs,
                            first_paint_ms: this.paintMs
                        })
                    } catch {}
                }
                emit(a, b) {
                    null != this.tags && null != b && this.metrics.hist("default", "conversation.milestone.duration_ms", {
                        ...this.tags,
                        phase: a
                    }, b)
                }
                emitPaint() {
                    if (null != this.tags && null != this.paintMs && !this.paintEmitted && (this.paintEmitted = !0, this.emit("first_paint", this.paintMs), null != this.answerMs && this.answerMs <= this.paintMs) && (this.emit("client_render", this.paintMs - this.answerMs), null != this.activityMs && this.activityMs <= this.answerMs))
                        for (let [a, b] of Object.entries({
                                request_to_activity: this.activityMs,
                                activity_to_answer: this.answerMs - this.activityMs,
                                answer_to_paint: this.paintMs - this.answerMs,
                                total: this.paintMs
                            })) this.metrics.hist("default", "conversation.milestone.complete_ms", {
                            ...this.tags,
                            phase: a
                        }, b)
                }
            },
            b: function(a, b, c, d) {
                let e = a?.product_experience ?? b,
                    f = a?.runtime_source;
                return {
                    product_experience: "chat" === e || "work" === e ? e : "unknown",
                    runtime_source: "cca" === f || "flora" === f ? f : "unknown",
                    client_surface: "codex_apps_chatgpt",
                    status: c,
                    is_resume: String(d)
                }
            }
        })
    }),
    GMpf: (function(a, b, c) {
        var d = c("zPtR"),
            e = c("unIO"),
            f = c("gbzJ");
        let g = new Set(["CLS", "FCP", "INP", "LCP", "TTFB"]);
        c.d(b, {}, {
            a: function(a, b) {
                let {
                    metricName: c,
                    metricValue: h
                } = a;
                return null != c && g.has(c) && null != h && Number.isFinite(h) && ("INP" !== c || !(h < 500)) ? {
                    spanName: `web_vital_${c.toLowerCase()}`,
                    durationMs: "CLS" === c ? void 0 : Math.min(Math.max(h, 0), 3e5),
                    cumulativeLayoutShiftScore: "CLS" === c ? h : void 0,
                    metricId: a.metricId,
                    pageLoadId: a.pageLoadId,
                    initialPath: a.initialPath,
                    navigationType: a.navigationType,
                    buildCommitSha: (0, e.a)(),
                    completedTs: (0, d.c)(Date.now()),
                    outcome: "success",
                    clientPlatform: (0, f.a)(),
                    samplingRuleId: b.ruleId,
                    samplingReason: b.reason
                } : null
            }
        })
    }),
    zEV5: (function(a, b, c) {
        var d = c("Q840"),
            e = c("lAQI");
        c("rP0s");
        var f = c("OWtl"),
            g = c("qixt");
        c("jBHQ");
        var h = c("kpIY"),
            i = c("pyOZ"),
            j = c("xzPv");
        let k = e.p(["hidden", "visible", "visible-with-saved-custom"]),
            l = (0, d.d)(f.a, (a, b) => {
                let {
                    get: c
                } = b;
                return !1
            }),
            m = (0, d.i)(f.a, a => null, (a, b) => {
                let {
                    get: c,
                    set: d
                } = b;
                if (!c(l, a)) return void d(null);
                let e = c(i.c);
                if ("host" !== e) return void d("timeout" === e ? "hidden" : null);
                let f = o(a),
                    g = (0, h.k)(f);
                return void 0 === g && (g = c(j.b, a)?.kind === "custom" ? "visible-with-saved-custom" : "hidden", (0, h.u)(f, g)), d(p(g)), (0, h.y)(f, "hidden", a => {
                    d(p(a))
                })
            }),
            n = (0, d.d)(f.a, (a, b) => {
                let {
                    get: c
                } = b;
                return c(l, a) && !c(g.d) ? c(m, a) : "not-applicable"
            });

        function o(a) {
            return `codex-custom-permissions-preference:${a}`
        }

        function p(a) {
            return k.safeParse(a).data ?? "hidden"
        }
        c.d(b, {}, {
            a: m,
            b: n,
            c: l,
            d: function(a, b) {
                (0, h.u)(o(a), b)
            }
        })
    }),
    oV9s: (function(a, b, c) {
        c.d(b, {
            a: () => v,
            b: () => t
        });
        var d = c("SZCv"),
            e = c.n(d),
            f = c("Q840"),
            g = c("KvQL"),
            h = c("tl5a"),
            i = c("QJVP"),
            j = c("NvK2"),
            k = c("p4am"),
            l = c("a4MG"),
            m = c("Hhl4"),
            n = c("OWtl"),
            o = c("zEV5");

        function p(a, b) {
            return a === b || (0, g.Xh)(a) && (0, g.Xh)(b)
        }

        function q(a, b) {
            return "workspaceWrite" !== a.type ? a : {
                ...a,
                writableRoots: [...new Set(a.writableRoots.filter(a => a !== b))].sort()
            }
        }

        function r(a, b) {
            return a.some(a => e()(a, b))
        }
        var s = c("xzPv");
        let t = (0, f.d)(n.a, (a, b) => {
                let c, {
                        get: d
                    } = b,
                    f = {
                        cwd: a.cwd,
                        hostId: a.hostId
                    },
                    h = d(l.i, f),
                    i = d(l.h, {
                        hostId: a.requirementsHostId ?? a.hostId
                    }),
                    n = d(m.d, f),
                    p = d(k.a, a.hostId),
                    q = [h, i, n],
                    r = d(o.b, a.hostId);
                if (p.hasError || h.isError || n.isError || i.isError && null == i.data) return {
                    availablePermissionSelections: null,
                    permissionSelection: null,
                    requiredPermissionSelection: null,
                    isError: !0,
                    isLoading: !1
                };
                if (p.isPending || q.some(a => a.isPending) || null == n.data || null == r) return {
                    availablePermissionSelections: null,
                    permissionSelection: null,
                    requiredPermissionSelection: null,
                    isError: !1,
                    isLoading: !0
                };
                let t = h.data?.config ?? null,
                    u = i.data?.requirements ?? null,
                    v = (0, g.Yh)(u, a.model) ? {
                        kind: "agent-mode",
                        agentMode: "guardian-approvals"
                    } : null,
                    y = "string" == typeof t?.default_permissions ? t.default_permissions : null,
                    {
                        defaultProfileId: z
                    } = (0, m.c)(n.data, u, y),
                    A = (0, g.Qf)({
                        config: t,
                        permissionProfiles: n.data,
                        requiredPermissionSelection: v,
                        requirements: u,
                        workspaceKind: a.workspaceKind
                    }),
                    B = null == v ? null : (0, g.te)({
                        availablePermissionSelections: A,
                        permissionSelection: v,
                        workspaceKind: a.workspaceKind
                    }),
                    C = x(A, "read-only"),
                    D = w(A);
                c = p.isRequired ? null == C || null == B || e()(B, C) ? null != C ? [C] : null != B ? [B] : [{
                    kind: "server-default"
                }] : [C, B] : null != D ? [D, ...A.filter(a => "agent-mode" !== a.kind || "read-only" !== a.agentMode && a.agentMode !== D.agentMode)] : A;
                let E = d(s.b, a.hostId);
                if (null == E && (null == z || z.startsWith(":"))) {
                    let b = d(j.d)?.[a.hostId];
                    null != b && b !== d(j.e)?.[a.hostId] && (E = "custom" === b ? {
                        kind: "custom"
                    } : {
                        kind: "agent-mode",
                        agentMode: b
                    })
                }
                let F = (0, g.te)({
                        availablePermissionSelections: c,
                        permissionSelection: E?.kind === "custom" && ("hidden" === r || "visible" === r) ? null : E,
                        workspaceKind: a.workspaceKind
                    }),
                    G = (0, g.te)({
                        availablePermissionSelections: c,
                        permissionSelection: function(a) {
                            switch (a) {
                                case ":read-only":
                                    return {
                                        kind: "agent-mode", agentMode: "read-only"
                                    };
                                case ":workspace":
                                    return {
                                        kind: "agent-mode", agentMode: "auto"
                                    };
                                case ":danger-full-access":
                                    return {
                                        kind: "agent-mode", agentMode: "full-access"
                                    };
                                case null:
                                    return null;
                                default:
                                    return {
                                        kind: "profile", profileId: a
                                    }
                            }
                        }(z),
                        workspaceKind: a.workspaceKind
                    }),
                    H = B ?? F ?? G ?? x(c, "guardian-approvals") ?? w(c) ?? c.find(a => "profile" === a.kind) ?? x(c, "read-only") ?? x(c, "full-access") ?? {
                        kind: "server-default"
                    };
                return {
                    availablePermissionSelections: c,
                    permissionSelection: H,
                    requiredPermissionSelection: B,
                    isError: !1,
                    isLoading: !1
                }
            }, {
                isEqual: e()
            }),
            u = (0, f.d)(n.a, (a, b) => {
                let {
                    get: c
                } = b, {
                    conversationId: d
                } = a, f = c(h.H, d), j = c(h.zc, d);
                if (null == f || null == j) return {
                    availablePermissionSelections: null,
                    permissionSelection: null,
                    requiredPermissionSelection: null,
                    isError: !1,
                    isLoading: !0
                };
                let k = (0, i.a)(c(h.p, d), c(h.$, d));
                if (null == k) return {
                    availablePermissionSelections: null,
                    permissionSelection: null,
                    requiredPermissionSelection: null,
                    isError: !1,
                    isLoading: !0
                };
                let m = c(h.q, d),
                    n = c(t, {
                        cwd: m,
                        hostId: f,
                        model: a.model,
                        workspaceKind: j
                    });
                if (n.isLoading || n.isError) return n;
                let o = function(a) {
                    var b, c, d;
                    let {
                        availablePermissionSelections: f,
                        configuredCustomPermissions: h,
                        cwd: i,
                        permissions: j
                    } = a, k = j.activePermissionProfile?.id ?? null;
                    if (null != k && !k.startsWith(":")) {
                        let a = {
                            kind: "profile",
                            profileId: k
                        };
                        return {
                            isAvailable: r(f, a),
                            isLegacy: !1,
                            permissionSelection: a
                        }
                    }
                    let l = null == k ? (0, g.Ef)(j)?.agentMode : g.b.find(a => a.permissionProfileId === k && e()(a.approvalPolicy, j.approvalPolicy) && p(a.approvalsReviewer, j.approvalsReviewer))?.agentMode;
                    if (null != l) {
                        let a = {
                            kind: "agent-mode",
                            agentMode: l
                        };
                        return {
                            isAvailable: r(f, a),
                            isLegacy: null == k,
                            permissionSelection: a
                        }
                    }
                    if (b = j, c = h, d = i, null == b.activePermissionProfile && null == c.activePermissionProfile && e()(b.approvalPolicy, c.approvalPolicy) && p(b.approvalsReviewer, c.approvalsReviewer) && e()(q(b.sandboxPolicy, d), q(c.sandboxPolicy, d))) {
                        let a = {
                            kind: "custom"
                        };
                        return {
                            isAvailable: r(f, a),
                            isLegacy: !1,
                            permissionSelection: a
                        }
                    }
                    if (null == k) return {
                        isAvailable: !1,
                        isLegacy: !0,
                        permissionSelection: {
                            kind: "custom"
                        }
                    };
                    let m = {
                        kind: "server-default"
                    };
                    return {
                        isAvailable: r(f, m),
                        isLegacy: !1,
                        permissionSelection: m
                    }
                }({
                    availablePermissionSelections: n.availablePermissionSelections,
                    configuredCustomPermissions: (0, g.me)("custom", k.runtimeWorkspaceRoots ?? [], c(l.i, {
                        cwd: m,
                        hostId: f
                    }).data?.config),
                    cwd: m,
                    permissions: k
                });
                return {
                    availablePermissionSelections: n.availablePermissionSelections,
                    ...o,
                    requiredPermissionSelection: n.requiredPermissionSelection,
                    isError: !1,
                    isLoading: !1
                }
            }, {
                isEqual: e()
            }),
            v = (0, f.d)(n.a, (a, b) => {
                let {
                    get: c
                } = b;
                return !1 === a.enabled ? {
                    availablePermissionSelections: null,
                    permissionSelection: null,
                    requiredPermissionSelection: null,
                    isError: !1,
                    isLoading: !0
                } : null != a.conversationId ? c(u, {
                    conversationId: a.conversationId,
                    model: a.model
                }) : c(t, {
                    cwd: a.cwd,
                    hostId: a.hostId,
                    requirementsHostId: a.requirementsHostId,
                    model: a.model,
                    workspaceKind: a.workspaceKind
                })
            }, {
                isEqual: e()
            });

        function w(a) {
            return a.find(a => "agent-mode" === a.kind && ("auto" === a.agentMode || "granular" === a.agentMode)) ?? null
        }

        function x(a, b) {
            return a.find(a => "agent-mode" === a.kind && a.agentMode === b) ?? null
        }
    }),
    z2Go: (function(a, b, c) {
        var d = c("YULJ"),
            e = c("oV9s");
        c.d(b, {}, {
            a: async function(a) {
                let {
                    scope: b,
                    config: c,
                    cwd: f,
                    hostId: g,
                    isDelegated: h,
                    model: i,
                    workspaceKind: j
                } = a;
                if (!b.get(d.a, g)) return null;
                let k = {
                    cwd: f,
                    hostId: g,
                    model: i ?? c.model ?? null,
                    workspaceKind: j
                };
                await b.when(a => !a.get(e.b, k).isLoading);
                let l = b.get(e.b, k);
                if (l.isLoading || l.isError) throw Error("Could not load permissions for the destination project");
                let {
                    permissionSelection: m
                } = l;
                return h && ("agent-mode" === m.kind && "full-access" === m.agentMode || "custom" === m.kind && "danger-full-access" === c.sandbox_mode) ? null : m
            }
        })
    }),
    xzPv: (function(a, b, c) {
        var d = c("kpIY");
        let e = (0, c("Nwp9").c)(f, null);

        function f(a) {
            return `permission-selection-by-host-id:${a}`
        }
        c.d(b, {}, {
            a: function(a, b) {
                (0, d.u)(f(a), b)
            },
            b: e
        })
    }),
    szIs: (function(a, b, c) {
        c.d(b, {}, {
            a: ["vscode", "list-pinned-threads"]
        })
    }),
    ay73: (function(a, b, c) {
        var d = c("Q840"),
            e = c("KvQL"),
            f = c("GaA7"),
            g = c("q77y"),
            h = c("OWtl"),
            i = c("rhZq"),
            j = c("Nwp9"),
            k = c("rvFo"),
            l = c("szIs");
        let m = (0, j.b)("app-server-pinned-thread-order-v1", []),
            n = (0, d.c)(h.a, () => !0),
            o = (0, d.r)(h.a, a => {
                let {
                    get: b
                } = a, c = b(n), d = b(i.c), e = d.length ? b(m) : void 0, h = c ? {
                    useAppServerPins: !0
                } : void 0;
                return {
                    queryFn: async a => {
                        let {
                            signal: b
                        } = a, c = f.a?.pinnedThreads;
                        return null != c ? (0, g.a)(c.list(h), b) : {
                            threadIds: []
                        }
                    },
                    select: a => r(a, d, e),
                    queryKey: l.a,
                    refetchOnWindowFocus: !0,
                    staleTime: k.b.FIVE_SECONDS
                }
            }),
            p = (0, d.j)(h.a, a => ({
                pending: 0,
                interruptedRead: !1
            }));

        function q(a, b) {
            let {
                threadId: c,
                pinned: d,
                beforeThreadId: f,
                hostId: g,
                useAppServerPins: h
            } = b, i = a => d ? (0, e.Vg)({
                threadIds: a,
                threadId: c,
                beforeThreadId: f ?? null
            }) : a.filter(a => a !== c), j = {
                ...a
            };
            return null != g && h && (j.threadIdsByHostId = {
                ...a.threadIdsByHostId,
                [g]: i(a.threadIdsByHostId?.[g] ?? [])
            }, !d && Object.values(j.threadIdsByHostId).some(a => a.includes(c))) ? j : (j.threadIds = i(a.threadIds), a.serverOrderedThreadIds && (h || !d) && (j.serverOrderedThreadIds = i(a.serverOrderedThreadIds)), j)
        }

        function r(a, b, c) {
            if (!b.length) return a;
            let d = {
                serverOrderedThreadIds: [],
                ...a
            };
            for (let [a, {
                    change: f,
                    hostId: g,
                    threadId: h
                }] of b.entries()) d = q(d, {
                hostId: g,
                threadId: h,
                pinned: f.sectionId === e.g,
                beforeThreadId: function(a, b, c, d) {
                    let {
                        hostId: e,
                        threadId: f,
                        change: g
                    } = a[b], h = c?.indexOf(f) ?? -1;
                    if (-1 === h || !c) return g.beforeThreadId ?? null;
                    let j = (0, i.e)(e, d, a.slice(b + 1));
                    return c.slice(h + 1).find(a => j.has(a)) ?? null
                }(b, a, c, d.threadIdsByHostId?.[g] ?? d.threadIds),
                useAppServerPins: !0
            });
            return d
        }
        c.d(b, {}, {
            a: m,
            b: n,
            c: q,
            d: function(a) {
                let b = a.get(p, void 0),
                    c = a.queryClient.getQueryState(l.a);
                return b.pending++, c?.data != null && "idle" !== c.fetchStatus && (b.interruptedRead = !0, a.query.cancel(o)), () => {
                    b.pending--, 0 === b.pending && b.interruptedRead && (b.interruptedRead = !1, a.query.invalidate(o, {
                        refetchType: "all"
                    }))
                }
            },
            e: o,
            f: r,
            g: function(a) {
                let b = a.query.snapshot(o).getData();
                return b && r(b, a.get(i.c), a.get(m))
            }
        })
    }),
    cae3: (function(a, b, c) {
        let d = !1;
        c.d(b, {
            a: () => d
        }, {
            b: function(a) {
                d = a
            }
        })
    }),
    hczB: (function(a, b, c) {
        c("Ot7V");
        var d = c("CV1W"),
            e = c("k7G6");

        function f(a) {
            return "plugin" === a.type ? (0, e.b)(a.pluginId) : (0, d.e)("apps", a.appId)
        }
        c.d(b, {}, {
            a: f,
            b: function(a, b) {
                return null == b ? {
                    type: "app",
                    appId: a
                } : {
                    type: "plugin",
                    pluginId: b
                }
            },
            c: function(a, b) {
                "plugin" === a.type ? (0, e.c)(a.pluginId, b) : b(f(a))
            }
        })
    }),
    WXrt: (function(a, b, c) {
        var d = c("QosV"),
            e = c("S2r0"),
            f = c("T0Rc"),
            g = c("fxCc"),
            h = c("dSKa"),
            i = c("Q840"),
            j = c("KvQL"),
            k = c("GaA7"),
            l = c("OWtl"),
            m = c("ADAj"),
            n = c("rvFo");
        let o = (0, i.c)(l.a, a => {
            let {
                get: b
            } = a;
            return new Map(Object.keys(h.e).filter(h.D).map(a => [a, (0, m.b)(b, j.Oe[a])]))
        });

        function p(a) {
            let {
                browserFamily: b,
                enabled: c,
                refetchOnWindowFocus: d
            } = a, f = k.a?.chromiumBrowser;
            return (0, e.a)({
                enabled: !1 !== c && !1,
                queryKey: ["chromium-browser-extension-status", b],
                queryFn: async () => null == f ? {
                    installUrl: null,
                    installedExtensionId: null
                } : f.getExtensionStatus({
                    browserFamily: b
                }),
                refetchOnWindowFocus: d,
                staleTime: n.b.FIVE_SECONDS
            })
        }
        c.d(b, {}, {
            a: o,
            b: p,
            c: function(a) {
                let b, c, e, g = (0, d.c)(11),
                    {
                        browserFamily: h
                    } = a;
                g[0] !== h ? (b = p({
                    browserFamily: h,
                    refetchOnWindowFocus: !0
                }), g[0] = h, g[1] = b) : b = g[1];
                let {
                    data: i,
                    isLoading: j,
                    isError: k,
                    refetch: l
                } = (0, f.a)(b), m = i?.installedExtensionId ?? null, n = i?.installUrl ?? null, o = null != m, q = i?.detectionError ?? (k ? "unknown" : void 0);
                return g[2] !== l ? (c = () => {
                    l()
                }, g[2] = l, g[3] = c) : c = g[3], g[4] !== m || g[5] !== j || g[6] !== n || g[7] !== o || g[8] !== q || g[9] !== c ? (e = {
                    installUrl: n,
                    installedExtensionId: m,
                    isInstalled: o,
                    isLoading: j,
                    detectionError: q,
                    retry: c
                }, g[4] = m, g[5] = j, g[6] = n, g[7] = o, g[8] = q, g[9] = c, g[10] = e) : e = g[10], e
            },
            d: function(a, b) {
                let c, e, f, h, i = (0, d.c)(14);
                i[0] !== b ? (c = void 0 === b ? {} : b, i[0] = b, i[1] = c) : c = i[1];
                let {
                    refetchOnWindowFocus: j
                } = c, k = void 0 === j || j;
                if (i[2] !== a || i[3] !== k) {
                    let b;
                    i[5] !== k ? (b = a => {
                        let {
                            browserFamily: b
                        } = a;
                        return p({
                            browserFamily: b,
                            refetchOnWindowFocus: k
                        })
                    }, i[5] = k, i[6] = b) : b = i[6], e = a.map(b), i[2] = a, i[3] = k, i[4] = e
                } else e = i[4];
                i[7] !== e ? (f = {
                    queries: e
                }, i[7] = e, i[8] = f) : f = i[8];
                let l = (0, g.a)(f);
                if (i[9] !== a || i[10] !== l) {
                    let b;
                    i[12] !== l ? (b = (a, b) => {
                        let {
                            browserFamily: c
                        } = a, d = l[b], e = d?.data?.installedExtensionId ?? null;
                        return [c, {
                            installUrl: d?.data?.installUrl ?? null,
                            installedExtensionId: e,
                            isInstalled: null != e,
                            isLoading: d?.isLoading === !0,
                            detectionError: d?.data?.detectionError ?? (d?.isError ? "unknown" : void 0)
                        }]
                    }, i[12] = l, i[13] = b) : b = i[13], h = new Map(a.map(b)), i[9] = a, i[10] = l, i[11] = h
                } else h = i[11];
                return h
            }
        })
    }),
    joT6: (function(a, b, c) {
        var d = c("QosV"),
            e = c("T0Rc"),
            f = c("dSKa"),
            g = c("Vw6J"),
            h = c("KvQL"),
            i = c("lAQI"),
            j = c("EJTT"),
            k = c("MI1z"),
            l = c("ywWc"),
            m = c("uNQ5"),
            n = c("C0re"),
            o = c("EEop"),
            p = c("YeiR"),
            q = c("RHhA"),
            r = c("WFY2"),
            s = c("bnxy"),
            t = c("rvFo"),
            u = c("WXrt"),
            v = c("ueue");
        let w = i.p([h.eb, "chrome", "chrome-dev", "chrome-internal"]),
            x = i.F({
                browserFamily: i.k(a => "string" == typeof a && (0, f.D)(a)),
                extensionIds: i.g(i.L().trim().min(1)).min(1),
                browserIconAssetPath: i.L().trim().min(1),
                storeExtensionId: i.L().trim().min(1).nullable().optional(),
                storeUrl: i.S().nullable()
            }),
            y = i.F({
                browserExtensions: i.g(x)
            });
        async function z(a) {
            let {
                codexHome: b,
                params: c,
                plugin: d
            } = a, e = await (0, m.a)(c);
            return function(a) {
                let {
                    config: b,
                    codexHome: c,
                    plugin: d
                } = a, e = (0, q.a)(), i = "prod";
                e === h.qb.Dev ? i = "dev" : (h.qb.isInternal(e) || e === h.qb.Agent) && (i = "internal");
                let k = B(d) === h.eb,
                    l = null == c || "local" !== d.plugin.source.type ? null : (0, h.Hg)({
                        codexHome: c,
                        localVersion: d.plugin.localVersion,
                        marketplaceName: d.marketplaceName,
                        pluginName: d.plugin.name
                    });
                return b.browserExtensions.filter(a => {
                    let {
                        browserFamily: b
                    } = a;
                    return k || "chrome" === b
                }).map(a => {
                    let b = k && "dev" !== i ? (0, g.d)(a.browserFamily, i) : null,
                        c = k ? (0, j.b)(a.browserFamily) : C(null == l ? null : (0, s.p)(l, a.browserIconAssetPath)) ?? C(d.logoPath),
                        e = b?.storeUrl ?? a.storeUrl;
                    if ("dev" === i) {
                        let b = a.extensionIds[0];
                        e = null == b ? null : (0, f.z)(b)
                    }
                    return {
                        browserFamily: a.browserFamily,
                        extensionIds: null == b ? a.extensionIds : [...new Set([...b.extensionIds, ...a.extensionIds])],
                        iconUrl: c,
                        storeExtensionId: "dev" === i ? null : b?.extensionIds[0] ?? a.storeExtensionId ?? null,
                        storeUrl: e
                    }
                })
            }({
                config: y.parse(JSON.parse(e.contents)),
                codexHome: b,
                plugin: d
            })
        }

        function A(a, b) {
            return null == a || b?.plugin.source.type !== "local" || null == B(b) ? null : (0, s.p)((0, h.Hg)({
                codexHome: a,
                localVersion: b.plugin.localVersion,
                marketplaceName: b.marketplaceName,
                pluginName: b.plugin.name
            }), "scripts/extension-ids.json")
        }

        function B(a) {
            let b = w.safeParse(a.plugin.name);
            return b.success && a.plugin.id.startsWith(`${b.data}@`) ? b.data : null
        }

        function C(a) {
            let b = a?.trim();
            if (null == b || 0 === b.length) return null;
            let c = b.toLowerCase();
            return c.startsWith("app:") || c.startsWith("data:") || c.startsWith("http:") || c.startsWith("https:") || c.startsWith("/@fs") ? b : (0, h.Mh)(b) ? "http:" === window.location.protocol || "https:" === window.location.protocol ? (0, p.b)(b) : (0, p.a)(b) : null
        }

        function D(a) {
            let {
                hostId: b,
                path: c
            } = a;
            return [...(0, n.b)(b, "browser-extension-setup"), c]
        }
        c.d(b, {}, {
            a: async function(a) {
                let {
                    scope: b,
                    authPolicy: c,
                    browserFamily: d,
                    codexHome: e,
                    hostId: f,
                    plugin: g,
                    queryClient: h,
                    windowType: i
                } = a;
                if ("ON_INSTALL" !== c || "electron" !== i || null == B(g)) return [];
                let j = e ?? (await (0, l.d)(f)).codexHome,
                    k = await async function(a) {
                        let {
                            scope: b,
                            hostId: c,
                            plugin: d
                        } = a;
                        try {
                            let a = await b.query.getOrFetch(o.l, {
                                hostId: c,
                                marketplacePath: d.marketplacePath,
                                pluginName: (0, v.l)(d).pluginName,
                                remoteMarketplaceName: d.remoteMarketplaceName ?? null
                            });
                            return (0, v.c)(a)
                        } catch (a) {
                            return r.a.warning("Failed to read installed plugin browser extension setup", {
                                safe: {},
                                sensitive: {
                                    error: a,
                                    pluginId: d.plugin.id
                                }
                            }), d
                        }
                    }({
                        scope: b,
                        hostId: f,
                        plugin: g
                    }), m = (await async function(a) {
                        let {
                            codexHome: b,
                            hostId: c,
                            plugin: d,
                            queryClient: e
                        } = a;
                        try {
                            let a = A(b, d);
                            if (null == a) return [];
                            let f = {
                                hostId: c,
                                path: a
                            };
                            return await e.fetchQuery({
                                queryFn: () => z({
                                    codexHome: b,
                                    params: f,
                                    plugin: d
                                }),
                                queryKey: D(f),
                                retry: !1,
                                staleTime: t.b.INFINITE
                            })
                        } catch (a) {
                            return r.a.warning("Failed to read plugin browser extension setup", {
                                safe: {},
                                sensitive: {
                                    error: a,
                                    pluginId: d.plugin.id
                                }
                            }), []
                        }
                    }({
                        codexHome: j,
                        hostId: f,
                        plugin: k,
                        queryClient: h
                    })).filter(a => {
                        let {
                            browserFamily: b
                        } = a;
                        return null == d || b === d
                    }), n = await Promise.all(m.map(async a => h.fetchQuery({
                        ...(0, u.b)({
                            browserFamily: a.browserFamily
                        }),
                        staleTime: 0
                    })));
                return n.some(a => {
                    let {
                        installedExtensionId: b,
                        detectionError: c
                    } = a;
                    return null != b || "permission-denied" === c
                }) ? [] : m.map((a, b) => ({
                    ...a,
                    storeUrl: n[b]?.installUrl ?? a.storeUrl
                })).filter(a => {
                    let {
                        storeUrl: b
                    } = a;
                    return null != b
                }).slice(0, 1)
            },
            b: function(a) {
                let b, c, f, g, h, i, j = (0, d.c)(19),
                    {
                        enabled: l,
                        hostId: m,
                        plugin: n
                    } = a,
                    {
                        data: o,
                        isError: p,
                        isPending: q
                    } = (0, k.b)(m),
                    r = o?.codexHome;
                j[0] !== r || j[1] !== l || j[2] !== m || j[3] !== n ? (b = A(r, n), g = e.a, c = l && null != b, f = null == b ? ["plugins", "browser-extension-setup", "missing"] : D({
                    hostId: m,
                    path: b
                }), j[0] = r, j[1] = l, j[2] = m, j[3] = n, j[4] = b, j[5] = c, j[6] = f, j[7] = g) : (b = j[4], c = j[5], f = j[6], g = j[7]), j[8] !== r || j[9] !== b || j[10] !== m || j[11] !== n ? (h = async () => null == b || null == n ? [] : z({
                    codexHome: r,
                    params: {
                        hostId: m,
                        path: b
                    },
                    plugin: n
                }), j[8] = r, j[9] = b, j[10] = m, j[11] = n, j[12] = h) : h = j[12], j[13] !== c || j[14] !== f || j[15] !== h ? (i = {
                    enabled: c,
                    queryKey: f,
                    queryFn: h,
                    retry: !1,
                    staleTime: t.b.INFINITE
                }, j[13] = c, j[14] = f, j[15] = h, j[16] = i) : i = j[16];
                let {
                    data: s,
                    isError: u
                } = g(i);
                if (!l || null == n) {
                    let a;
                    return j[17] === Symbol.for("react.memo_cache_sentinel") ? (a = [], j[17] = a) : a = j[17], a
                }
                if ("local" !== n.plugin.source.type || null == B(n) || !q) {
                    if (null == b || p || u) {
                        let a;
                        return j[18] === Symbol.for("react.memo_cache_sentinel") ? (a = [], j[18] = a) : a = j[18], a
                    }
                    return s
                }
            }
        })
    }),
    NFKX: (function(a, b, c) {
        let d = (0, (c("Qgfj")).f)({
            label: {
                id: "composer.pluginMention.browserUse.label",
                defaultMessage: "Browser"
            },
            restrictedAvailabilityDescription: {
                id: "settings.browserPlugin.restrictedAvailabilityDescription",
                defaultMessage: "Disabled by your organization or unavailable in your region"
            }
        });
        c.d(b, {}, {
            a: d
        })
    }),
    OF5O: (function(a, b, c) {
        var d = c("Q840"),
            e = c("GaA7"),
            f = c("OWtl");
        let g = (0, d.q)(f.a, a => ({
            queryKey: ["bundled-plugin-auto-install", a],
            staleTime: 5e3,
            enabled: null != e.a.bundledPluginPreferences,
            queryFn: async () => {
                let b = e.a.bundledPluginPreferences;
                if (null == b) throw Error("Bundled plugin preferences are unavailable");
                return b.readAutoInstallDisabled(a)
            }
        }));
        c.d(b, {}, {
            a: async function(a, b, c) {
                let d = e.a.bundledPluginPreferences;
                null != d && (await d.setAutoInstallDisabled(b, c), await a.query.invalidate(g, b))
            }
        })
    }),
    xWQV: (function(a, b, c) {
        var d = c("bTvG"),
            e = c("lSdY"),
            f = c("mfKi"),
            g = c("lAQI"),
            h = c("yGJW");
        let i = g.F({
                conversationId: g.L().optional(),
                installAction: g.p(d.x).optional(),
                productExperience: g.p(e.a),
                surface: g.p(d.z)
            }),
            j = {
                [f.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_INSTALL_CONSENT]: "CHATGPT_PLUGIN_ACTION_TYPE_INSTALL_CONSENT",
                [f.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_INSTALL]: "CHATGPT_PLUGIN_ACTION_TYPE_INSTALL",
                [f.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_ENABLE]: "CHATGPT_PLUGIN_ACTION_TYPE_ENABLE",
                [f.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_REMOVE]: "CHATGPT_PLUGIN_ACTION_TYPE_REMOVE",
                [f.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_OPEN_CONNECTOR_SETUP]: "CHATGPT_PLUGIN_ACTION_TYPE_OPEN_CONNECTOR_SETUP",
                [f.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR]: "CHATGPT_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR"
            },
            k = {
                [f.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_CANCELLED]: "CHATGPT_PLUGIN_ACTION_RESULT_CANCELLED",
                [f.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_UNSPECIFIED]: "CHATGPT_PLUGIN_ACTION_RESULT_UNSPECIFIED",
                [f.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_INITIATED]: "CHATGPT_PLUGIN_ACTION_RESULT_INITIATED",
                [f.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS]: "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS",
                [f.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_FAILURE]: "CHATGPT_PLUGIN_ACTION_RESULT_FAILURE",
                [f.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_BLOCKED]: "CHATGPT_PLUGIN_ACTION_RESULT_BLOCKED",
                [f.CodexPluginActionResult.UNRECOGNIZED]: "UNRECOGNIZED"
            };

        function l(a, b, c) {
            let e, {
                    action: f,
                    connectorId: g,
                    errorType: i,
                    installAttemptId: j,
                    pluginId: k,
                    pluginIds: l,
                    referrerInstallAttemptId: m,
                    referrerPluginId: n,
                    result: o,
                    sourceAttributionId: p,
                    suggestionId: q,
                    voiceSessionId: r
                } = c,
                s = "CHATGPT_PLUGIN_ACTION_TYPE_INSTALL" === f && "CHATGPT_PLUGIN_ACTION_RESULT_INITIATED" === o;
            "CHATGPT_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR" === f ? e = d.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_CONNECT_SINGLE : "CHATGPT_PLUGIN_ACTION_TYPE_INSTALL" === f && (e = b.installAction), (0, h.a)(a, d.q, {
                action: f,
                result: o,
                pluginId: k,
                pluginIds: l,
                connectorId: g,
                errorType: i,
                installAttemptId: j,
                installAction: e,
                conversationId: s ? b.conversationId : void 0,
                voiceSessionId: s ? r : void 0,
                sourceAttributionId: s ? p : void 0,
                referrerInstallAttemptId: s ? m : void 0,
                referrerPluginId: s ? n : void 0,
                suggestionId: q,
                productExperience: b.productExperience,
                surface: b.surface
            })
        }
        c.d(b, {}, {
            a: i,
            b: function(a) {
                let b = g.F({
                    status: g.E()
                }).safeParse(a);
                return b.success ? `http_${b.data.status}` : a instanceof Error ? "error" : "unknown"
            },
            c: l,
            d: function(a, b, c) {
                let {
                    action: d,
                    connectorId: e,
                    errorType: f,
                    installAttemptId: g,
                    pluginId: h,
                    result: i,
                    sourceAttributionId: m,
                    suggestionId: n,
                    voiceSessionId: o
                } = c, p = j[d];
                return null != b && null != p && (l(a, b, {
                    action: p,
                    result: k[i],
                    pluginId: h,
                    connectorId: e,
                    errorType: f,
                    installAttemptId: g,
                    sourceAttributionId: m,
                    suggestionId: n,
                    voiceSessionId: o
                }), !0)
            },
            e: function(a, b, c) {
                let {
                    connectorId: e,
                    installAttemptId: f,
                    pluginId: g,
                    interstitialAction: i,
                    suggestionId: j
                } = c, k = "CHATGPT_PLUGIN_ACTION_RESULT_INITIATED";
                null == i ? k = "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS" : "dismissed" === i && (k = "CHATGPT_PLUGIN_ACTION_RESULT_CANCELLED"), (0, h.a)(a, d.q, {
                    action: null == i ? "CHATGPT_PLUGIN_ACTION_TYPE_AUTH_INTERSTITIAL_SHOWN" : "CHATGPT_PLUGIN_ACTION_TYPE_AUTH_INTERSTITIAL_ACTION",
                    result: k,
                    pluginId: g,
                    connectorId: e,
                    installAttemptId: f,
                    interstitialAction: i,
                    suggestionId: j,
                    productExperience: b.productExperience,
                    surface: b.surface
                })
            }
        })
    }),
    SaEY: (function(a, b, c) {
        var d = c("QosV"),
            e = c("T0Rc"),
            f = c("fxCc"),
            g = c("Q840"),
            h = c("oo2L"),
            i = c("S7fj"),
            j = c("hOO0"),
            k = c("BQbE"),
            l = c("pDRe"),
            m = c("OiCI"),
            n = c("Cslg"),
            o = c("EEop"),
            p = c("sFqu");
        let q = "DISABLED_BY_ADMIN";

        function r(a) {
            return a?.availability === "DISABLED_BY_ADMIN"
        }

        function s(a) {
            return r(a) ? "disabled-by-admin" : a?.installPolicy !== "NOT_AVAILABLE" || a.installed ? null : "installation-unavailable"
        }

        function t(a) {
            return null != a.error
        }

        function u(a) {
            return a.isPending
        }

        function v(a) {
            return a.length > 0
        }

        function w(a) {
            return a.id
        }
        c.d(b, {}, {
            a: s,
            b: r,
            c: function(a) {
                var b, c, r, x;
                let y, z, A, B, C, D = (0, d.c)(17),
                    {
                        enabled: E,
                        hostId: F,
                        pluginApps: G,
                        pluginSummary: H,
                        marketplacePath: I,
                        pluginName: J,
                        remoteMarketplaceName: K,
                        productContext: L,
                        appConnectOptions: M
                    } = a,
                    N = void 0 === E || E;
                D[0] !== F ? (y = (0, i.b)(F), D[0] = F, D[1] = y) : y = D[1];
                let O = y,
                    P = (0, g.z)(m.a),
                    Q = (0, g.z)(n.k),
                    R = N && null == G && (null != I || null != K) && null != J,
                    S = I ?? null,
                    T = J ?? null,
                    U = K ?? null;
                D[2] !== F || D[3] !== L || D[4] !== R || D[5] !== S || D[6] !== T || D[7] !== U ? (z = {
                    hostId: F,
                    productContext: L,
                    marketplacePath: S,
                    pluginName: T,
                    remoteMarketplaceName: U,
                    enabled: R
                }, D[2] = F, D[3] = L, D[4] = R, D[5] = S, D[6] = T, D[7] = U, D[8] = z) : z = D[8];
                let {
                    isLoading: V,
                    plugin: W
                } = (0, o.m)(z);
                D[9] !== N || D[10] !== W?.apps || D[11] !== G ? (A = N ? G ?? W?.apps ?? [] : [], D[9] = N, D[10] = W?.apps, D[11] = G, D[12] = A) : A = D[12];
                let X = A,
                    Y = H ?? W?.summary,
                    Z = Y?.source.type === "remote",
                    $ = Array.from(new Set(X.map(w).filter(v))),
                    {
                        data: _,
                        isLoading: aa,
                        error: ab
                    } = (0, k.c)({
                        appIds: $,
                        enabled: !O && null == L && $.length > 0,
                        hostId: F
                    });
                null != L && (B = "chatgpt" === L ? "PROMPT_TEXT_AREA" : "CODEX");
                let {
                    data: ac,
                    isPending: ad,
                    error: ae
                } = (0, e.a)((0, l.b)({
                    userId: Q,
                    accountId: P,
                    appIds: $,
                    productSku: B,
                    enabled: O && N
                })), af = (0, f.a)({
                    queries: (O ? [] : $).map(a => (0, h.f)(a, {
                        productSku: (0, p.a)(a, {
                            productContext: L,
                            appConnectOptions: M
                        })?.productSku
                    }))
                }), ag = R && V || (O ? $.length > 0 && ad : null == L && aa) || af.some(u), ah = {}, ai = [];
                for (let [a, d] of $.entries()) {
                    let e;
                    if (O) e = function(a, b) {
                        if (null == b) return null;
                        let c = b.find(b => (0, j.a)(b.id) === (0, j.a)(a));
                        return c?.status === q || c?.disabled_reason === "disabled_by_admin" ? "disabled-by-admin" : null != c && c.available && (c.installed || c.can_install) ? null : "connector-unavailable"
                    }(d, ac);
                    else {
                        let f = null == L && !aa && null == ab && !_?.some(a => a.id === d);
                        b = af[a], c = f, e = b?.data?.status === q ? "disabled-by-admin" : c || null != b && !b.isPending && null == b.error && null == b.data ? "connector-unavailable" : null
                    }
                    ah[d] = e, ai.push(e)
                }
                return D[13] !== ab || D[14] !== af || D[15] !== ae ? (C = null != ab || null != ae || af.some(t), D[13] = ab, D[14] = af, D[15] = ae, D[16] = C) : C = D[16], {
                    blockedReasonsByConnectorId: ah,
                    hasConnectorAvailabilityError: C,
                    isConnectorAvailabilityLoading: ag,
                    isLoading: !Z && ag,
                    blockedReason: (r = Y, x = ai, r?.source.type === "remote" ? s(r) : 0 === x.length || x.includes(null) ? null : x.every(a => "disabled-by-admin" === a) ? "disabled-by-admin" : "connector-unavailable")
                }
            }
        })
    }),
    p84t: (function(a, b, c) {
        c("GaA7"), c.d(b, {}, {
            a: async function(a) {
                let {
                    hostId: b,
                    marketplacePath: c,
                    pluginName: d
                } = a
            },
            b: async function(a) {
                let {
                    hostId: b,
                    marketplaceName: c,
                    pluginName: d
                } = a
            }
        })
    }),
    uUv4: (function(a, b, c) {
        c.d(b, {}, {
            a: {
                box: "plugin_asdk_app_695bfc98071c8191bac7bc479aa27de7",
                gmail: "plugin_connector_1p_95d39881713c8191931482a62d6edff9",
                "google-calendar": "plugin_connector_1p_f8509de903288191b14a160c6c5d20b0",
                "google-drive": "plugin_connector_1p_ab21a553bfbc81919ea8fd1858e3ffa7",
                notion: "plugin_asdk_app_69c18c28f1188191bf5b8445c4ab0a2e",
                "outlook-calendar": "plugin_connector_1p_fd0f4f41caa88191a9456514bbffa06d",
                "outlook-email": "plugin_connector_1p_6bcb5879c73c819196abc70016166099",
                salesforce: "plugin_asdk_app_697d413990c88191a2bf4799604f8f6c",
                sharepoint: "plugin_connector_1p_dca009ae2c848191ae14df3a47c5e7fd",
                slack: "plugin_asdk_app_69a1d78e929881919bba0dbda1f6436d",
                teams: "plugin_connector_1p_eba8b52fe53881918408d4b46b957644"
            }
        })
    }),
    IwvW: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("v4LA"),
            g = c("hZax"),
            h = c("ZqLP");
        let i = (0, f.a)(async () => (await Promise.all([c.e(893387), c.e(884101), c.e(703253), c.e(774100), c.e(584510), c.e(980048)]).then(c.bind(c, "zLjj"))).PluginEditorPage),
            j = (0, f.a)(async () => (await c.e(239046).then(c.bind(c, "oVqR"))).PluginDetailEmptyState);
        c.d(b, {}, {
            a: function() {
                let a, b = (0, e.c)(2),
                    c = (0, g.f)(h.c);
                return (0, g.g)(h.c) ? null : (b[0] !== c ? (a = c ? (0, d.jsx)(i, {}) : (0, d.jsx)("div", {
                    className: "flex h-full flex-col px-toolbar",
                    children: (0, d.jsx)(j, {
                        state: "missing"
                    })
                }), b[0] = c, b[1] = a) : a = b[1], a)
            }
        })
    }),
    Brn9: (function(a, b, c) {
        var d = c("dSKa"),
            e = c("lAQI"),
            f = c("EZRW");
        let g = "plugin_connector_1p_51c1ba70f47481919149861084681943",
            h = e.F({
                type: e.z("mcpToolCall"),
                result: e.F({
                    _meta: e.F({
                        "codex/toolSurface": e.F({
                            kind: e.z("browserUse"),
                            backend: e.z("chrome"),
                            browserFamily: e.k(a => "string" == typeof a && (0, d.D)(a))
                        })
                    })
                })
            });

        function i(a) {
            return a === g
        }
        c.d(b, {}, {
            a: g,
            b: function(a) {
                return i(a) ? (0, f.a)() : null
            },
            c: function(a) {
                let b = h.safeParse(a);
                return b.success ? b.data.result._meta["codex/toolSurface"].browserFamily : null
            },
            d: i
        })
    }),
    e2wX: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("rEML"),
            h = c("hczB"),
            i = c("tlx5"),
            j = c("ygu7");
        c.d(b, {}, {
            a: function(a) {
                let b, c, k, l, m, n, o, p, q = (0, e.c)(19),
                    {
                        appId: r,
                        pluginId: s,
                        children: t
                    } = a,
                    u = (0, g.ab)();
                q[0] !== r ? (b = {
                    appId: r
                }, q[0] = r, q[1] = b) : b = q[1];
                let v = null == s;
                q[2] !== v ? (c = {
                    enabled: v
                }, q[2] = v, q[3] = c) : c = q[3];
                let {
                    data: w,
                    isError: x
                } = (0, f.x)(j.a, b, c), y = s ?? w;
                return void 0 === y || null == s && x ? t : (q[4] !== r || q[5] !== y ? (l = (0, h.b)(r, y), k = g.g, m = "inline cursor-interaction bg-transparent p-0 text-start align-baseline", n = (0, h.a)(l), q[4] = r, q[5] = y, q[6] = k, q[7] = l, q[8] = m, q[9] = n) : (k = q[6], l = q[7], m = q[8], n = q[9]), q[10] !== l || q[11] !== u ? (o = a => (0, i.a)(a, () => (0, h.c)(l, u)), q[10] = l, q[11] = u, q[12] = o) : o = q[12], q[13] !== k || q[14] !== t || q[15] !== m || q[16] !== n || q[17] !== o ? (p = (0, d.jsx)(k, {
                    className: m,
                    to: n,
                    onClick: o,
                    children: t
                }), q[13] = k, q[14] = t, q[15] = m, q[16] = n, q[17] = o, q[18] = p) : p = q[18], p)
            }
        })
    }),
    Y2Gi: (function(a, b, c) {
        var d = c("EAlS");
        let e = [{
                campaign_id: "hubspot-2026-11",
                plugin_id: "plugin_asdk_app_697acb8e53d88191bf7a79e62012ae14"
            }, {
                campaign_id: "docusign-2026-11",
                plugin_id: "plugin_asdk_app_69fcc3b7582c81918df4ffae40cb7204"
            }, {
                campaign_id: "klaviyo-2026-11",
                plugin_id: "plugin_asdk_app_694421e60cc88191a1e5bb4aa79950e4"
            }],
            f = [...d.d, ...d.f, ...e];
        c.d(b, {}, {
            a: f,
            b: {
                campaign_id: "capcut-2026-12",
                plugin_id: "plugin_asdk_app_6aec387659ec8191ac71a0b22848f2a0"
            },
            c: function(a) {
                return f.find(b => b.campaign_id === a)
            },
            d: function(a) {
                return e.some(b => b.campaign_id === a)
            },
            e: e
        })
    }),
    q9zg: (function(a, b, c) {
        var d = c("zPtR"),
            e = c("mfKi"),
            f = c("Q840"),
            g = c("EAlS"),
            h = c("lAQI"),
            i = c("OiCI"),
            j = c("Cslg"),
            k = c("OFP1"),
            l = c("laUo"),
            m = c("yGJW"),
            n = c("GaA7"),
            o = c("OWtl"),
            p = c("kfGJ"),
            q = c("OMIV"),
            r = c("Nwp9"),
            s = c("UR81"),
            t = c("Y2Gi");
        let u = "hubspot-2026-09",
            v = [...g.f, {
                campaign_id: "codex-stripe",
                plugin_id: "plugin_connector_690ab09fa43c8191bca40280e4563238"
            }, {
                campaign_id: "codex-quickbooks",
                plugin_id: "plugin_asdk_app_697aea3231288191b28a0061066e51bd"
            }, {
                campaign_id: u,
                plugin_id: "plugin_asdk_app_697acb8e53d88191bf7a79e62012ae14"
            }, {
                campaign_id: "codex-hubspot",
                plugin_id: "plugin_asdk_app_697acb8e53d88191bf7a79e62012ae14"
            }, {
                campaign_id: "codex-gusto",
                plugin_id: "plugin_asdk_app_69375d9f172c8191b23d73be4107128a"
            }, ...g.d, {
                campaign_id: "codex-dropbox",
                plugin_id: "plugin_asdk_app_69b31dc2110c8191b8b47dc98fe5a052"
            }, {
                campaign_id: "codex-canva",
                plugin_id: "plugin_connector_68df33b1a2d081918778431a9cfca8ba"
            }],
            w = h.J(h.L(), h.E()).catch({}),
            x = (0, r.b)("capcut-incentive-receipt-interests", {}, {
                coerceStoredValue: a => w.parse(a)
            }),
            y = {
                impression: e.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_IMPRESSION,
                cancelled: e.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_CANCELLED,
                declined: e.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_DECLINED,
                accept_clicked: e.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_ACCEPT_CLICKED,
                accept_failed: e.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_ACCEPT_FAILED,
                accepted: e.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_ACCEPTED,
                install_started: e.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_INSTALL_STARTED,
                install_failed: e.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_INSTALL_FAILED,
                installed: e.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_INSTALLED,
                receipt_shown: e.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_RECEIPT_SHOWN
            },
            z = {
                "identity-changed": e.CodexPluginsIncentiveFailureReason.CODEX_PLUGINS_INCENTIVE_FAILURE_REASON_IDENTITY_CHANGED,
                unavailable: e.CodexPluginsIncentiveFailureReason.CODEX_PLUGINS_INCENTIVE_FAILURE_REASON_UNAVAILABLE,
                "capacity-exhausted": e.CodexPluginsIncentiveFailureReason.CODEX_PLUGINS_INCENTIVE_FAILURE_REASON_CAPACITY_EXHAUSTED,
                retryable: e.CodexPluginsIncentiveFailureReason.CODEX_PLUGINS_INCENTIVE_FAILURE_REASON_OUTCOME_UNKNOWN,
                "invalid-offer": e.CodexPluginsIncentiveFailureReason.CODEX_PLUGINS_INCENTIVE_FAILURE_REASON_INVALID_OFFER,
                "install-failed": e.CodexPluginsIncentiveFailureReason.CODEX_PLUGINS_INCENTIVE_FAILURE_REASON_INSTALL_FAILED
            },
            A = (0, f.h)(o.a, () => Date.now(), a => {
                let {
                    set: b
                } = a, c = setInterval(() => b(Date.now()), 3e4);
                return () => clearInterval(c)
            }),
            B = (0, f.c)(o.a, a => {
                let {
                    get: b
                } = a, {
                    accountStructure: c,
                    plan: d
                } = b(j.n);
                return "personal" === c && (0, l.g)(d)
            }),
            C = (0, f.c)(o.a, a => {
                let {
                    get: b
                } = a, c = b(j.f), d = b(j.k), e = b(j.n);
                if (n.a?.pluginIncentives == null || null == c || null == d || e.accountLoading || e.accountId !== c || b(i.d) !== c) return null;
                if (b(B)) return {
                    accountId: c,
                    userId: d
                };
                if (!(0, s.g)(e.plan)) return null;
                let {
                    data: f,
                    isLoading: g,
                    isError: h
                } = b(k.n, c);
                return g || h || f?.plugin_incentives_ui_enabled !== !0 ? null : {
                    accountId: c,
                    userId: d
                }
            }),
            D = (0, f.c)(o.a, a => {
                let {
                    get: b
                } = a;
                return n.a?.pluginIncentives == null || null == b(C) ? [] : b(B) ? [t.b] : [...t.e, ...v]
            }),
            E = (0, f.c)(o.a, a => {
                let {
                    get: b
                } = a;
                return !b(q.i) && !0 === b(q.e, "1129613321")
            }),
            F = (0, f.c)(o.a, a => {
                let {
                    get: b
                } = a, c = b(D);
                return b(B) && !b(E) ? [] : c
            });

        function G(a, b) {
            return a.get(F).find(a => b.includes(a.plugin_id))
        }
        let H = (0, f.r)(o.a, a => {
                let {
                    get: b,
                    scope: c
                } = a, d = b(C), e = n.a?.pluginIncentives, f = null != d && null != e && !b(B);
                return {
                    queryKey: ["plugin-incentive-claims", d?.userId, d?.accountId],
                    enabled: f,
                    staleTime: 3e5,
                    retry: !1,
                    refetchOnWindowFocus: !0,
                    refetchOnReconnect: !0,
                    queryFn: async a => {
                        let {
                            signal: b
                        } = a;
                        if (!f) return {
                            kind: "identity-changed"
                        };
                        let g = await e.listClaims({
                            identity: d,
                            hostId: p.a
                        });
                        if (b.throwIfAborted(), !R(c, d)) return {
                            kind: "identity-changed"
                        };
                        if ("retryable" === g.kind) throw Error("Plugin credit claims temporarily unavailable");
                        return g
                    }
                }
            }),
            I = (0, f.c)(o.a, a => {
                let {
                    get: b
                } = a, c = b(C);
                if (null == c) return null;
                if (b(B)) {
                    let a = b(x)[Q(c)];
                    return null != a && Date.now() - a < 2592e6 ? [t.b.campaign_id] : null
                }
                let {
                    data: d
                } = b(H);
                return d?.kind === "claims" ? d.campaignIds : null
            }),
            J = (0, f.q)(o.a, (a, b) => {
                let c, {
                        campaignId: d,
                        hostId: e
                    } = a,
                    {
                        get: f,
                        scope: g
                    } = b,
                    h = f(C),
                    i = f(D).find(a => a.campaign_id === d);
                return {
                    queryKey: ["plugin-incentive", h?.userId, h?.accountId, e, d, i?.plugin_id],
                    enabled: null != h && null != i && n.a?.pluginIncentives != null,
                    staleTime: 3e4,
                    retry: !1,
                    refetchOnMount: a => a.state.isInvalidated,
                    refetchOnWindowFocus: !0,
                    refetchOnReconnect: !0,
                    refetchIntervalInBackground: !1,
                    refetchInterval: a => {
                        let b = a.state.data;
                        if (b?.kind !== "offer") return !1;
                        let d = T(b.offer);
                        return "pending" !== d && "processing" !== d ? (c = void 0, !1) : (null == c && (c = Date.now() + 18e5), !(Date.now() >= c || null != a.state.error && Date.now() - a.state.dataUpdatedAt > 3e5 || null != b.offer.reward_expires_at && Date.parse(b.offer.reward_expires_at) <= Date.now()) && 3e4)
                    },
                    queryFn: async a => {
                        let {
                            signal: b
                        } = a;
                        if (null == h || n.a?.pluginIncentives == null) return {
                            kind: "identity-changed"
                        };
                        if (null == i) return {
                            kind: "unavailable"
                        };
                        let c = await n.a.pluginIncentives.read({
                            campaignId: d,
                            hostId: e,
                            identity: h
                        });
                        if (b.throwIfAborted(), !R(g, h)) return {
                            kind: "identity-changed"
                        };
                        if ("retryable" === c.kind) throw Error("Plugin credit status temporarily unavailable");
                        if ("offer" === c.kind && c.offer.plugin_id !== i.plugin_id) throw Error("Plugin credit offer configuration mismatch");
                        if (d === t.b.campaign_id && "offer" === c.kind && O(g, c.offer), null != (0, t.c)(d) && "offer" === c.kind && null != c.offer.claim_status && null == c.offer.reward_granted_at) {
                            let a = g.get(H).data;
                            a?.kind === "claims" && a.campaignIds.includes(d) || O(g, c.offer)
                        }
                        return c
                    }
                }
            }),
            K = (0, f.d)(o.a, (a, b) => {
                let {
                    get: c
                } = b, d = c(J, a);
                return a.campaignId !== u ? d : M(d, c(J, {
                    ...a,
                    campaignId: "codex-hubspot"
                }), c(A)).query
            });
        async function L(a, b) {
            let c = a.get(J, b).refetch({
                cancelRefetch: !1
            });
            if (b.campaignId !== u) return {
                campaignId: b.campaignId,
                query: await c
            };
            let d = a.get(J, {
                    ...b,
                    campaignId: "codex-hubspot"
                }).refetch({
                    cancelRefetch: !1,
                    throwOnError: !1
                }),
                e = await c;
            return N(e, Date.now()) ? {
                campaignId: b.campaignId,
                query: e
            } : M(e, await d, Date.now())
        }

        function M(a, b, c) {
            if (N(a, c)) return {
                campaignId: u,
                query: a
            };
            let d = b.data?.kind === "offer" ? b.data.offer : null,
                e = null == d ? null : T(d, c);
            return "pending" === e || "processing" === e || "capacity-exhausted" === e ? {
                campaignId: "codex-hubspot",
                query: b
            } : a.isError || a.data?.kind !== "unavailable" && a.data?.kind !== "capacity-exhausted" ? {
                campaignId: u,
                query: a
            } : {
                campaignId: "codex-hubspot",
                query: b
            }
        }

        function N(a, b) {
            return !a.isError && a.data?.kind === "offer" && "expired" !== T(a.data.offer, b)
        }

        function O(a, b) {
            let c = b.campaign_id;
            if (c === t.b.campaign_id) {
                let c = a.get(C),
                    d = T(b);
                null != c && ("pending" === d || "processing" === d) && P(a, c);
                return
            }
            a.query.setData(H, a => ({
                kind: "claims",
                campaignIds: [...new Set([...a?.kind === "claims" ? a.campaignIds : [], c])]
            })), a.query.invalidate(H)
        }

        function P(a, b) {
            let c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                d = Q(b),
                e = Date.now(),
                f = a.get(x),
                g = f[d],
                h = null != g && e - g < 2592e6;
            if (!h || c) {
                let b = Math.max(e, (g ?? 0) + 1);
                return a.set(x, {
                    ...Object.fromEntries(Object.entries(f).filter(a => {
                        let [, b] = a;
                        return e - b < 2592e6
                    }).slice(-99)),
                    [d]: b
                }), h ? void 0 : b
            }
        }

        function Q(a) {
            return JSON.stringify([a.userId, a.accountId])
        }

        function R(a, b) {
            let c = a.get(C);
            return c?.accountId === b.accountId && c?.userId === b.userId
        }

        function S(a) {
            return a === t.b.campaign_id || null != (0, g.b)(a) || null != (0, g.a)(a) || (0, t.d)(a)
        }

        function T(a) {
            let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            return null != a.reward_granted_at ? "paid" : "success_verified" === a.claim_status ? "processing" : "pending" !== a.claim_status ? "available" : null != a.claim_expires_at && Date.parse(a.claim_expires_at) <= b ? "expired" : 0 === a.remaining_redemptions ? "capacity-exhausted" : "pending"
        }
        c.d(b, {}, {
            a: u,
            b: O,
            c: S,
            d: E,
            e: function(a, b, c) {
                let d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                a.set(x, a => {
                    let {
                        [Q(b)]: e, ...f
                    } = a;
                    return null == e || (d ? e !== c : e > c) ? a : f
                })
            },
            f: T,
            g: G,
            h: D,
            i: H,
            j: C,
            k: J,
            l: F,
            m: I,
            n: A,
            o: R,
            p: function(a, b, c, f, g) {
                let h = a.get(D).find(a => a.campaign_id === b);
                null != h && R(a, c) && (0, m.a)(a, e.CodexPluginsIncentiveEvent, {
                    legacyStatsigEventName: "codex_plugin_incentive_action",
                    action: y[f],
                    campaignId: b,
                    remotePluginId: h.plugin_id,
                    surface: g?.surface,
                    remainingEffectiveRedemptions: g?.remainingEffectiveRedemptions == null ? void 0 : (0, d.b)(g.remainingEffectiveRedemptions),
                    failureReason: g?.reason == null ? void 0 : z[g.reason]
                })
            },
            q: L,
            r: P,
            s: K,
            t: async function(a, b, c) {
                let d = G(a, c),
                    e = a.get(C);
                if (null == d || null == e) return !1;
                let {
                    query: {
                        data: f,
                        isError: g
                    }
                } = await L(a, {
                    campaignId: d.campaign_id,
                    hostId: b
                });
                if (!R(a, e)) return !0;
                if (g) return !S(d.campaign_id);
                if (f?.kind === "unavailable" || f?.kind === "capacity-exhausted") return !1;
                if (f?.kind !== "offer") return !0;
                let h = T(f.offer);
                return "available" === h || "pending" === h
            }
        })
    }),
    K4kL: (function(a, b, c) {
        var d = c("qKkM"),
            e = c("Q840"),
            f = c("CWeU"),
            g = c("HwRo"),
            h = c("OWtl"),
            i = c("OMIV"),
            j = c("Nwp9"),
            k = c("K0RC");
        let l = (0, j.b)("pending-plugin-installations-v1", {}),
            m = (0, e.d)(h.a, (a, b) => {
                let {
                    accountId: c,
                    hostId: d
                } = a, {
                    get: e
                } = b;
                return new Set(e(l)[(0, k.b)(c, d)] ?? [])
            });
        c.d(b, {}, {
            a: function(a, b, c) {
                a.set(l, (0, d.i)(a => {
                    delete a[(0, k.b)(b, c)]
                }))
            },
            b: m,
            c: function(a, b, c, e) {
                let h = (0, k.b)(a.get(f.a), b);
                (0, k.d)(a, h, c, e);
                let j = (0, g.b)();
                ("boolean" == typeof j ? j : a.get(i.e, j)) && a.set(l, (0, d.i)(a => {
                    let b = a[h] ?? [];
                    for (let d of (a[h] = b, [c, e])) null == d || b.includes(d) || b.push(d)
                }))
            }
        })
    }),
    a0aG: (function(a, b, c) {
        var d = c("bTvG"),
            e = c("lSdY"),
            f = c("iRMi");
        let g = {
            pluginRedirect: {
                source: f.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: f.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_PLUGIN_REDIRECT,
                chatgpt: {
                    productExperience: e.a.CHATGPT_PRODUCT_EXPERIENCE_WORK,
                    surface: d.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_PLUGIN_REDIRECT
                }
            },
            ambientSuggestion: {
                source: f.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: f.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_AMBIENT_SUGGESTION
            },
            composer: {
                source: f.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: f.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_COMPOSER
            },
            workComposer: {
                source: f.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: f.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_COMPOSER,
                chatgpt: {
                    productExperience: e.a.CHATGPT_PRODUCT_EXPERIENCE_WORK,
                    surface: d.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_COMPOSER_FOOTER
                }
            },
            globalAnnouncement: {
                source: f.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: f.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_GLOBAL_ANNOUNCEMENT
            },
            onboarding: {
                source: f.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: f.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_ONBOARDING
            },
            onboardingRolePreinstall: {
                source: f.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: f.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_ONBOARDING_ROLE_PREINSTALL
            },
            settings: {
                source: f.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: f.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_SETTINGS
            }
        };
        c.d(b, {}, {
            a: function(a) {
                let {
                    apps: b,
                    pluginInstalled: c
                } = a;
                return 0 === b.length ? d.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_INSTALL : 1 === b.length ? b[0].isAccessible ? d.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_INSTALL : d.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_CONNECT_SINGLE : c && b.every(a => a.isAccessible) ? d.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_INSTALL : d.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_OPEN_SETUP
            },
            b: g
        })
    }),
    sFqu: (function(a, b, c) {
        var d = c("bTvG"),
            e = c("iRMi"),
            f = c("o6hs");
        c.d(b, {}, {
            a: function(a, b) {
                let c = (0, f.e)(a, b?.appConnectOptions),
                    g = "plugin_install",
                    h = b?.marketplaceAnalytics?.chatgpt?.surface,
                    i = b?.marketplaceAnalytics?.surface;
                return (b?.origin === "in_conversation_elicitation" || h === d.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_IN_CHAT_SUGGESTIONS || i === e.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_IN_CHAT_SUGGESTIONS ? g = "plugin_suggestion" : h === d.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_PLUGIN_REDIRECT || i === e.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_PLUGIN_REDIRECT ? g = "plugin_redirect" : h === d.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_COMPOSER_FOOTER || h === d.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_COMPOSER_HINTS || i === e.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_COMPOSER ? g = "composer" : h === d.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_DETAILS || i === e.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_DETAILS ? g = "plugin_details" : h === d.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_AMBIENT_SUGGESTION || i === e.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_AMBIENT_SUGGESTION ? g = "home_suggestion" : h === d.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_LIBRARY && (g = "library"), c = {
                    ...c = {
                        connectorId: a,
                        ...c,
                        oauthReferrer: c?.oauthReferrer ?? g
                    },
                    oauthPresentation: "popup"
                }, c?.productSku != null || b?.productContext == null) ? c : {
                    ...c,
                    productSku: "chatgpt" === b.productContext ? "PROMPT_TEXT_AREA" : "CODEX"
                }
            }
        })
    }),
    aVTW: (function(a, b, c) {
        var d = c("S2r0"),
            e = c("oo2L"),
            f = c("o6hs"),
            g = c("hOO0"),
            h = c("OiCI"),
            i = c("rvFo"),
            j = c("HFSu");
        c("OHD8");
        var k = c("sFqu"),
            l = c("loz7");

        function m(a) {
            return "ON_INSTALL" === a.authPolicy && ["plugin_connector_1p_1a69035c238881919c4190932b2df699", "plugin_connector_1p_5925693c1aa88191a4959257e60d0734"].includes(a.remotePluginId ?? a.id)
        }
        c.d(b, {}, {
            a: function(a, b, c) {
                return null != b ? a.apps.find(a => (0, g.a)(a.id) === (0, g.a)(b)) ?? null : m(a.summary) && 2 === a.apps.length && null != c && a.apps.some(a => "disabled-by-admin" === c[a.id]) ? a.apps.find(a => null === c[a.id]) ?? null : 1 === a.apps.length ? a.apps[0] : null
            },
            b: function(a, b, c) {
                let g = c.hostedAccountId ?? a.get(h.d) ?? null,
                    m = (0, k.a)(b, c)?.productSku ?? (0, e.j)();
                return (0, d.a)({
                    queryKey: ["plugin-install-app-link", g, c.installAttemptId, b, m],
                    queryFn: async d => {
                        let {
                            signal: e
                        } = d, i = new AbortController, k = a.watch(a => {
                            let b = a.get(l.o);
                            ((a.get(h.d) ?? null) !== g || "closed" === b.kind || b.installAttemptId !== c.installAttemptId) && i.abort()
                        });
                        try {
                            let a = AbortSignal.any([e, i.signal]);
                            a.throwIfAborted();
                            let c = await j.CodexRequest.safeGet("/aip/connectors/{connector_id}/link", {
                                surface: "connector_setup",
                                parameters: {
                                    path: {
                                        connector_id: b
                                    }
                                },
                                additionalHeaders: {
                                    [f.a]: m
                                },
                                signal: a
                            });
                            return a.throwIfAborted(), c.link
                        } finally {
                            k()
                        }
                    },
                    retry: (a, b) => !1,
                    retryDelay: a => 250 * 2 ** a,
                    staleTime: null == c.installAttemptId ? 0 : i.b.ONE_MINUTE,
                    gcTime: i.b.ONE_MINUTE
                })
            },
            c: m
        })
    }),
    WUyT: (function(a, b, c) {
        var d = c("iRMi"),
            e = c("dSKa"),
            f = c("KvQL"),
            g = c("lAQI"),
            h = c("o6hs"),
            i = c("JngQ"),
            j = c("xWQV");
        let k = g.F({
                conversationId: g.L().transform(f.Ye),
                requestId: g.Q([g.L(), g.E()]).transform(f.gf),
                response: g.F({
                    action: g.p(["accept", "decline", "cancel"]),
                    content: g.x().nullable(),
                    _meta: g.x().nullable()
                })
            }),
            l = g.g(g.F({
                category: g.L().nullable(),
                description: g.L().nullable(),
                id: g.L().min(1),
                installUrl: g.L().nullable(),
                name: g.L()
            })),
            m = g.m("projectKind", [g.F({
                projectId: g.L(),
                projectKind: g.z("local"),
                rootPaths: g.g(g.L()).optional()
            }), g.F({
                projectId: g.L(),
                projectKind: g.z("remote")
            })]).nullable(),
            n = g.F({
                kind: g.z("chatgpt").optional()
            }),
            o = g.F({
                installAttemptId: g.L().optional(),
                pluginId: g.L().optional(),
                childInstall: g.j(),
                terminalResult: g.p(["success", "failure", "cancelled"]).optional()
            }),
            p = g.F({
                requiredAppAnalytics: g.J(g.L(), o),
                suppressSuccessToast: g.j(),
                successToast: g.z("connected"),
                appConnectOptions: h.d,
                skipGoogleOAuthBundle: g.j(),
                activeProject: m,
                conversation: g.m("type", [g.F({
                    type: g.z("app-server"),
                    conversationId: g.L().transform(f.Ye)
                }), g.F({
                    type: g.z("chatgpt"),
                    conversationId: g.L().min(1)
                })]),
                browserFamily: g.k(a => "string" == typeof a && (0, e.D)(a)),
                elicitationOwnsConnectorRefresh: g.j(),
                hostedAccountId: g.L().min(1),
                pluginRedirect: g.F({
                    search: g.L(),
                    consentAfterOAuth: g.j().optional(),
                    hasAcceptedInstallConsent: g.j().optional()
                }),
                productContext: g.p(["chatgpt", "codex"]),
                onboardingMode: g.p(["work", "codex"]),
                installAttemptId: g.L(),
                requestedCompanionConnectorIds: g.g(g.L()),
                marketplaceAnalytics: g.F({
                    chatgpt: j.a.optional(),
                    source: g.p(d.CodexPluginSource),
                    suggestionId: g.L().optional(),
                    surface: g.p(d.CodexPluginMarketplaceSurface),
                    voiceSessionId: g.L().optional()
                }),
                origin: g.p(["in_conversation_elicitation", "setup_codex", "plugin_creator"]),
                pendingElicitationReply: k,
                postInstallComposerPrefill: g.L(),
                postInstallPluginSuggestion: g.F({
                    accountId: g.L().min(1),
                    userId: g.L().min(1),
                    conversationId: g.L().min(1),
                    messageId: g.L().min(1),
                    pluginId: g.L().min(1)
                }).and(g.m("kind", [n, i.a])),
                postInstallConnectorSetup: g.F({
                    accountId: g.L().min(1),
                    userId: g.L().min(1),
                    connectorId: g.L().min(1),
                    installationKey: g.L().min(1),
                    options: h.d.optional()
                }),
                postInstallNewConversation: g.F({
                    activeProject: m,
                    codexAppMode: f.Ge,
                    replace: g.j(),
                    startInSidebar: g.j()
                }).partial(),
                requestId: g.E(),
                requiresAppSetup: g.j(),
                postConnectSource: g.p(["plugin_install", "elicitation", "zero_state"]),
                requestedConnectorId: g.L().min(1),
                source: g.p(d.CodexPluginSource),
                sourceAttributionId: g.L(),
                sourceSectionId: g.L(),
                telemetry: g.F({
                    categoryId: g.L(),
                    source: g.z("new_chat_page_suggestions"),
                    suggestionId: g.L(),
                    suggestionLevel: g.p(d.CodexNewChatSuggestionLevel),
                    surface: g.p(d.CodexAmbientSuggestionSurface)
                })
            }).partial();
        c.d(b, {}, {
            a: p,
            b: k,
            c: l,
            d: o
        })
    }),
    loz7: (function(a, b, c) {
        var d = c("QosV"),
            e = c("nuXe"),
            f = c.n(e),
            g = c("Q840"),
            h = c("OiCI"),
            i = c("GaA7"),
            j = c("OWtl"),
            k = c("SaEY"),
            l = c("Y2Gi"),
            m = c("q9zg"),
            n = c("cLdu");
        let o = (0, g.v)(j.a, a => !1),
            p = (0, g.u)(j.a, {
                kind: "closed"
            }, {
                onMount: (a, b) => b.watch(b => {
                    let c = b.get(h.d) ?? void 0;
                    a(a => "closed" !== a.kind && null != a.hostedAccountId && a.hostedAccountId !== c ? G(a) : a)
                })
            }),
            q = (0, g.c)(j.a, a => {
                let {
                    get: b
                } = a;
                return F(b(p))
            }),
            r = 0,
            s = new Map;

        function t(a, b, c) {
            if (!(0, n.i)(b)) return c;
            let d = a.get(h.d) ?? void 0;
            return {
                ...c,
                hostedAccountId: c.hostedAccountId ?? d
            }
        }

        function u(a, b) {
            a.set(p, D(b, "ON_INSTALL" === b.plugin.plugin.authPolicy || "plugin_creator" === b.origin)), v(a)
        }

        function v(a) {
            let b = a.get(p);
            if ("details" !== b.kind && "installing" !== b.kind || null != b.incentiveDecision && (0, m.o)(a, b.incentiveDecision.identity)) return !1;
            let c = (0, m.g)(a, [b.plugin.plugin.id, b.plugin.plugin.remotePluginId, b.plugin.plugin.shareContext?.remotePluginId]),
                d = a.get(m.j);
            if (null == c || null == d) return !1;
            let e = {
                ...b,
                kind: "reviewIncentive",
                pluginRedirect: "details" === b.kind && null != b.pluginRedirect ? {
                    ...b.pluginRedirect,
                    hasAcceptedInstallConsent: !0
                } : b.pluginRedirect,
                incentiveCampaignId: c.campaign_id,
                incentiveChecking: !0,
                incentiveIdentity: d
            };
            return a.set(p, e), w(a, e), !0
        }
        async function w(a, b) {
            if (a.get(p) !== b) return;
            if (b.incentiveCampaignId === l.b.campaign_id && !a.get(m.d) && (b.incentiveChecking || !(0, m.o)(a, b.incentiveIdentity) || !b.incentiveDecision?.accepted && !a.get(m.m)?.includes(b.incentiveCampaignId))) return void x(a, b, !1);
            let {
                campaignId: c,
                query: {
                    data: d,
                    isError: e
                }
            } = await (0, m.q)(a, {
                campaignId: b.incentiveCampaignId,
                hostId: b.hostId
            });
            if (a.get(p) !== b) return;
            let f = c === b.incentiveCampaignId ? b : {
                ...b,
                incentiveCampaignId: c
            };
            if (f !== b && a.set(p, f), e && b.incentiveChecking && (0, m.c)(c) && (0, m.o)(a, b.incentiveIdentity)) return void x(a, f, !1);
            if (!e && (0, m.o)(a, b.incentiveIdentity)) {
                if (d?.kind === "unavailable" || d?.kind === "capacity-exhausted") return void x(a, f, !1);
                if (d?.kind === "offer" && (null != d.offer.claim_status || null != d.offer.reward_granted_at)) {
                    if (await a.query.cancel(m.i), a.get(p) !== f || !(0, m.o)(a, b.incentiveIdentity)) return;
                    (0, m.b)(a, d.offer);
                    let c = (0, m.f)(d.offer);
                    x(a, f, "expired" !== c && "capacity-exhausted" !== c);
                    return
                }
            }
            a.set(p, {
                ...f,
                incentiveChecking: !1
            })
        }

        function x(a, b, c) {
            a.get(p) !== b || (0, m.o)(a, b.incentiveIdentity) && a.set(p, D({
                ...b,
                incentiveDecision: {
                    campaignId: b.incentiveCampaignId,
                    identity: b.incentiveIdentity,
                    accepted: c
                }
            }, "ON_INSTALL" === b.plugin.plugin.authPolicy || "plugin_creator" === b.origin))
        }

        function y(a, b) {
            return "closed" !== a.kind && null != b && a.requestId === b
        }

        function z(a, b) {
            let {
                apps: c,
                browserExtensions: d,
                connectingAppId: e,
                hostId: f,
                options: g,
                plugin: h,
                installedInThisFlow: i
            } = b, j = !1;
            return a.set(p, a => {
                if ("closed" === a.kind || "loadingPlugin" === a.kind || a.hostId !== f || a.plugin.plugin.id !== h.plugin.id || !y(a, g?.requestId ?? a.requestId)) return a;
                let b = c.map(b => {
                        let c = "pending";
                        return "connectAppBeforeInstall" === a.kind && a.app.id === b.id ? c = a.status : "installing" === a.kind && a.connectedAppId === b.id && (c = "connected"), {
                            app: b,
                            status: c
                        }
                    }),
                    k = b.find(a => a.app.id === e),
                    l = g?.pendingElicitationReply != null && a.pendingElicitationReply === g.pendingElicitationReply ? a.pendingElicitationReplyFailureCount : void 0;
                return j = !0, null == k ? {
                    ...a,
                    ...g,
                    kind: "needsApps",
                    installedInThisFlow: i,
                    hostId: f,
                    pendingElicitationReplyFailureCount: l,
                    plugin: h,
                    requiredApps: b,
                    requiredBrowserExtensions: d
                } : {
                    ...a,
                    ...g,
                    kind: "connectApp",
                    installedInThisFlow: i,
                    hostId: f,
                    pendingElicitationReplyFailureCount: l,
                    plugin: h,
                    app: k.app,
                    requiredApps: b,
                    requiredBrowserExtensions: d
                }
            }), j
        }

        function A(a) {
            return "connectAppBeforeInstall" === a.kind ? G(a) : a
        }

        function B(a) {
            return "connectApp" !== a.kind ? a : 1 === a.requiredApps.length && 0 === a.requiredBrowserExtensions.length && a.requiredApps[0]?.status !== "connected" && a.requiredApps[0]?.status !== "waitingForCallback" ? G(a) : {
                ...a,
                kind: "needsApps"
            }
        }

        function C(a, b) {
            let {
                appId: c,
                requestedCompanionConnectorIds: d,
                status: e
            } = b;
            a.set(p, a => {
                if ("closed" === a.kind) return a;
                let b = "waitingForCallback" === e && null != d ? f()([...a.requestedCompanionConnectorIds ?? [], ...d]) : void 0;
                return "connectAppBeforeInstall" === a.kind ? a.app.id !== c ? a : {
                    ...a,
                    ...null == b ? {} : {
                        requestedCompanionConnectorIds: b
                    },
                    status: e
                } : "needsApps" !== a.kind && "connectApp" !== a.kind ? a : {
                    ...a,
                    ...null == b ? {} : {
                        requestedCompanionConnectorIds: b
                    },
                    requiredApps: a.requiredApps.map(a => a.app.id === c ? {
                        ...a,
                        status: e
                    } : a)
                }
            })
        }

        function D(a, b) {
            return {
                ...a,
                kind: "installing",
                installStarted: !1,
                phase: b ? "loading" : "installing",
                progressPercent: 0,
                requiresAppPreparation: b
            }
        }

        function E(a) {
            return ("needsApps" === a.kind || "connectApp" === a.kind) && a.requiredApps.length > 0 && a.requiredApps.every(a => "connected" === a.status) && 0 === a.requiredBrowserExtensions.length
        }

        function F(a) {
            return !(E(a) || "closed" !== a.kind && null != a.pendingElicitationReply || "loadingPlugin" === a.kind || "confirmConnect" === a.kind || "reviewIncentive" === a.kind || "installing" === a.kind || "preparingApp" === a.kind || "connectAppBeforeInstall" === a.kind && ("automatic" !== a.connectMode || "waitingForCallback" !== a.status))
        }

        function G(a) {
            let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "cancelled";
            if ("closed" !== a.kind && null != a.requestId) {
                let c = s.get(a.requestId);
                s.delete(a.requestId), "failed" === b ? c?.onError?.() : c?.onCancel?.()
            }
            return {
                kind: "closed"
            }
        }

        function H(a) {
            "closed" !== a.kind && null != a.requestId && s.delete(a.requestId)
        }
        c.d(b, {}, {
            a: q,
            b: async function(a, b, c) {
                let d, e = c.incentiveDecision;
                if (null == e) return !0;
                if ((0, m.o)(a, e.identity)) {
                    if (e.accepted) {
                        let a = await i.a.pluginIncentives?.checkIdentity({
                            campaignId: e.campaignId,
                            hostId: b,
                            identity: e.identity
                        }).catch(() => "retryable");
                        "matched" !== a && (d = a ?? "retryable")
                    }
                } else d = "identity-changed";
                if ((0, m.o)(a, e.identity) || (d = "identity-changed"), null == d) return !0;
                let f = a.get(p);
                return "closed" !== f.kind && "loadingPlugin" !== f.kind && f.incentiveDecision === e && f.requestId === c.requestId && f.hostId === b && (a.set(p, {
                    ...f,
                    kind: "reviewIncentive",
                    incentiveCampaignId: e.campaignId,
                    incentiveChecking: !1,
                    incentiveIdentity: e.identity,
                    incentiveFailure: d
                }), !1)
            },
            c: function(a, b) {
                if (null == b) throw Error("Cannot complete an unregistered plugin installation");
                return !a.get(o, b) && (a.set(o, b, !0), !0)
            },
            d: function(a, b) {
                let {
                    hostId: c,
                    requestId: d
                } = b, e = !1;
                return a.set(p, a => "loadingPlugin" !== a.kind || a.hostId !== c || a.requestId !== d ? a : (e = !0, G(a, "failed"))), e
            },
            e: G,
            f: function(a, b) {
                let c = a.get(p);
                if ("confirmConnect" === c.kind && c.requestId === b) {
                    if ((0, n.i)(c.hostId) && a.get(h.d) !== c.hostedAccountId) return void a.set(p, G(c));
                    u(a, c)
                }
            },
            g: x,
            h: function(a) {
                return "loadingPlugin" === a.kind ? a : "installing" === a.kind ? {
                    hostId: a.hostId,
                    installAttemptId: a.installAttemptId,
                    kind: "installing",
                    phase: a.phase,
                    plugin: a.plugin,
                    progressPercent: a.progressPercent,
                    sourceSectionId: a.sourceSectionId
                } : ("needsApps" === a.kind || "connectApp" === a.kind) && (E(a) || !0 === a.pendingElicitationReplyClaimed) ? {
                    hostId: a.hostId,
                    installAttemptId: a.installAttemptId,
                    kind: "installing",
                    phase: "loading",
                    plugin: a.plugin,
                    progressPercent: 100,
                    sourceSectionId: a.sourceSectionId
                } : "reviewIncentive" === a.kind && a.incentiveChecking || "preparingApp" === a.kind || "connectAppBeforeInstall" === a.kind && "automatic" === a.connectMode && "waitingForCallback" !== a.status ? {
                    hostId: a.hostId,
                    installAttemptId: a.installAttemptId,
                    kind: "installing",
                    phase: "loading",
                    plugin: a.plugin,
                    progressPercent: 0,
                    sourceSectionId: a.sourceSectionId
                } : null
            },
            i: function(a) {
                return "closed" === a.kind ? null : a.hostId
            },
            j: C,
            k: y,
            l: function(a, b) {
                let c = null == a ? void 0 : s.get(a);
                c?.onAppConnected == null || c.connectedAppIds?.has(b) || (c.connectedAppIds = c.connectedAppIds ?? new Set, c.connectedAppIds.add(b), c.onAppConnected(b))
            },
            m: function(a, b) {
                let {
                    hostId: c,
                    onAppConnected: d,
                    onCancel: e,
                    onError: f,
                    onSuccess: g,
                    options: h = {},
                    plugin: i
                } = b, j = a.get(p);
                if (!F(j)) return null;
                H(j);
                let k = t(a, c, h),
                    l = r += 1;
                return (null != d || null != e || null != f || null != g) && s.set(l, {
                    onAppConnected: d,
                    onCancel: e,
                    onError: f,
                    onSuccess: g
                }), a.set(p, {
                    ...k,
                    hostId: c,
                    kind: "loadingPlugin",
                    phase: "loading",
                    plugin: {
                        displayName: i.displayName,
                        plugin: {
                            id: i.remotePluginId,
                            remotePluginId: i.remotePluginId
                        }
                    },
                    progressPercent: 0,
                    requestId: l,
                    source: k.source ?? k.marketplaceAnalytics?.source
                }), l
            },
            n: function(a, b) {
                let {
                    hostId: c,
                    loadingRequestId: d,
                    mode: e,
                    onAppConnected: f,
                    onCancel: g,
                    onError: h,
                    onSuccess: i,
                    options: j = {},
                    plugin: l
                } = b, m = a.get(p);
                if ("loadingPlugin" === m.kind) {
                    if ("install" !== e || m.hostId !== c || m.requestId !== d) return !1
                } else if (!F(m)) return !1;
                H(m);
                let n = t(a, c, j);
                r += 1, (null != f || null != g || null != h || null != i) && s.set(r, {
                    onAppConnected: f,
                    onCancel: g,
                    onError: h,
                    onSuccess: i
                });
                let o = {
                    ...n,
                    hostId: c,
                    installAttemptId: "install" === e ? n.installAttemptId ?? n.appConnectOptions?.installAttemptId ?? crypto.randomUUID() : n.installAttemptId,
                    plugin: l,
                    requestId: r,
                    source: n.source ?? n.marketplaceAnalytics?.source
                };
                return "details" === e ? a.set(p, {
                    ...o,
                    kind: "details"
                }) : j.offersPluginDetailsBeforeConnect && !1 === l.plugin.mustShowInstallationInterstitial && null == (0, k.a)(l.plugin) ? a.set(p, {
                    ...o,
                    kind: "confirmConnect"
                }) : u(a, o), !0
            },
            o: p,
            p: w,
            q: v,
            r: async function(a) {
                let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null == a) return;
                let c = s.get(a)?.onSuccess;
                s.delete(a), await c?.(b)
            },
            s: z,
            t: function() {
                let a, b, c, e, f, h, i, k, l, m, n, o, q, r, s, t, u, v, w, x = (0, d.c)(59),
                    E = (0, g.y)(j.a),
                    F = (0, g.z)(p);
                x[0] !== E ? (a = a => {
                    E.set(p, a)
                }, x[0] = E, x[1] = a) : a = x[1];
                let H = a;
                x[2] !== E ? (b = a => (function(a, b) {
                    let {
                        hostId: c,
                        pluginId: d
                    } = b, e = a.get(p);
                    return ("installing" === e.kind || "connectAppBeforeInstall" === e.kind) && e.hostId === c && e.plugin.plugin.id === d && !e.installStarted && (a.set(p, {
                        ...e,
                        installStarted: !0
                    }), !0)
                })(E, a), x[2] = E, x[3] = b) : b = x[3];
                let I = b;
                x[4] !== E || x[5] !== F ? (c = () => "closed" !== F.kind && y(E.get(p), F.requestId), x[4] = E, x[5] = F, x[6] = c) : c = x[6];
                let J = c;
                x[7] !== J || x[8] !== E ? (e = a => {
                    let {
                        hostId: b,
                        pluginId: c
                    } = a, d = E.get(p);
                    return J() && "closed" !== d.kind && "loadingPlugin" !== d.kind && d.hostId === b && d.plugin.plugin.id === c && null != d.pendingElicitationReply ? !0 === d.pendingElicitationReplyClaimed || (d.pendingElicitationReplyFailureCount ?? 0) >= 2 ? {
                        kind: "already-claimed"
                    } : (E.set(p, {
                        ...d,
                        pendingElicitationReplyClaimed: !0
                    }), {
                        kind: "claimed",
                        reply: d.pendingElicitationReply
                    }) : {
                        kind: "not-pending"
                    }
                }, x[7] = J, x[8] = E, x[9] = e) : e = x[9];
                let K = e;
                x[10] !== E ? (f = a => {
                    let {
                        completed: b,
                        hostId: c,
                        pluginId: d,
                        reply: e
                    } = a, f = E.get(p);
                    return "closed" !== f.kind && "loadingPlugin" !== f.kind && f.hostId === c && f.plugin.plugin.id === d && f.pendingElicitationReply === e && !0 === f.pendingElicitationReplyClaimed && (E.set(p, {
                        ...f,
                        pendingElicitationReply: b ? void 0 : f.pendingElicitationReply,
                        pendingElicitationReplyClaimed: !!b && void 0,
                        pendingElicitationReplyFailureCount: b ? void 0 : (f.pendingElicitationReplyFailureCount ?? 0) + 1
                    }), !0)
                }, x[10] = E, x[11] = f) : f = x[11];
                let L = f;
                x[12] !== H ? (h = (a, b, c) => {
                    let d = void 0 === c ? {} : c,
                        e = !1;
                    return H(c => "installing" !== c.kind && ("details" !== c.kind || null == c.pluginRedirect) || "installing" === c.kind && c.installStarted || c.hostId !== a || c.plugin.plugin.id !== b.plugin.id ? c : (e = !0, {
                        ...c,
                        ...d,
                        kind: "preparingApp",
                        hostId: a,
                        plugin: b
                    })), e
                }, x[12] = H, x[13] = h) : h = x[13];
                let M = h;
                x[14] !== H ? (i = a => {
                    let {
                        app: b,
                        authTypeOverride: c,
                        connectMode: d,
                        hostId: e,
                        options: f,
                        plugin: g,
                        status: h
                    } = a, i = void 0 === d ? "interactive" : d, j = void 0 === h ? "pending" : h;
                    H(a => "preparingApp" !== a.kind && "connectAppBeforeInstall" !== a.kind || a.hostId !== e || a.plugin.plugin.id !== g.plugin.id || "connectAppBeforeInstall" === a.kind && a.app.id !== b.id ? a : {
                        ...a,
                        ...f,
                        authTypeOverride: c,
                        kind: "connectAppBeforeInstall",
                        app: b,
                        connectMode: i,
                        hostId: e,
                        installStarted: "connectAppBeforeInstall" === a.kind && a.installStarted,
                        plugin: g,
                        status: j
                    })
                }, x[14] = H, x[15] = i) : i = x[15];
                let N = i;
                x[16] !== H ? (k = a => {
                    let {
                        hostId: b,
                        pluginId: c
                    } = a;
                    H(a => "preparingApp" === a.kind && a.hostId === b && a.plugin.plugin.id === c ? G(a, "failed") : a)
                }, x[16] = H, x[17] = k) : k = x[17];
                let O = k;
                x[18] !== H ? (l = a => {
                    let {
                        hostId: b,
                        pluginId: c
                    } = a;
                    H(a => "preparingApp" === a.kind && a.hostId === b && a.plugin.plugin.id === c ? D(a, !1) : a)
                }, x[18] = H, x[19] = l) : l = x[19];
                let P = l;
                x[20] !== E ? (m = a => {
                    let {
                        appId: b,
                        hostId: c,
                        pluginId: d
                    } = a, e = E.get(p);
                    return "connectAppBeforeInstall" === e.kind && e.app.id === b && e.hostId === c && e.plugin.plugin.id === d && (E.set(p, {
                        ...D(e, !1),
                        connectedAppId: b,
                        installStarted: e.installStarted
                    }), !0)
                }, x[20] = E, x[21] = m) : m = x[21];
                let Q = m;
                x[22] !== H ? (n = (a, b, c) => {
                    H({
                        ...void 0 === c ? {} : c,
                        kind: "details",
                        hostId: a,
                        plugin: b
                    })
                }, x[22] = H, x[23] = n) : n = x[23];
                let R = n;
                x[24] !== J || x[25] !== H ? (o = a => {
                    let b = void 0 === a ? "cancelled" : a;
                    return !!J() && (H(a => G(a, b)), !0)
                }, x[24] = J, x[25] = H, x[26] = o) : o = x[26];
                let S = o;
                x[27] !== J || x[28] !== H ? (q = a => {
                    J() && H(b => "installing" === b.kind ? {
                        ...b,
                        progressPercent: a
                    } : b)
                }, x[27] = J, x[28] = H, x[29] = q) : q = x[29];
                let T = q;
                x[30] !== H ? (r = a => {
                    H(b => {
                        if ("needsApps" !== b.kind) return b;
                        let c = b.requiredApps.find(b => b.app.id === a);
                        return null == c ? b : {
                            ...b,
                            kind: "connectApp",
                            app: c.app
                        }
                    })
                }, x[30] = H, x[31] = r) : r = x[31];
                let U = r;
                x[32] !== H ? (s = () => {
                    H(B)
                }, x[32] = H, x[33] = s) : s = x[33];
                let V = s;
                x[34] !== H ? (t = () => {
                    H(A)
                }, x[34] = H, x[35] = t) : t = x[35];
                let W = t;
                return x[36] !== E ? (u = a => C(E, a), x[36] = E, x[37] = u) : u = x[37], x[38] !== J || x[39] !== E ? (v = a => !!J() && z(E, a), x[38] = J, x[39] = E, x[40] = v) : v = x[40], x[41] !== O || x[42] !== K || x[43] !== I || x[44] !== S || x[45] !== V || x[46] !== W || x[47] !== N || x[48] !== R || x[49] !== U || x[50] !== M || x[51] !== Q || x[52] !== F || x[53] !== T || x[54] !== L || x[55] !== P || x[56] !== u || x[57] !== v ? (w = {
                    cancelPluginInstallAppPreparation: O,
                    claimPluginInstall: I,
                    claimPendingElicitationReply: K,
                    closePluginInstallAppConnectBeforeInstall: W,
                    closePluginInstallAppConnect: V,
                    closePluginInstall: S,
                    markRequiredAppStatus: u,
                    openPluginInstallDetails: R,
                    openPluginInstallAppConnectBeforeInstall: N,
                    openRequiredAppConnect: U,
                    preparePluginInstallAppConnect: M,
                    session: F,
                    setPluginInstallProgress: T,
                    setPluginInstallNeedsApps: v,
                    settlePendingElicitationReply: L,
                    startPluginInstallAfterAppPreparation: P,
                    resumePluginInstallAfterAppConnect: Q
                }, x[41] = O, x[42] = K, x[43] = I, x[44] = S, x[45] = V, x[46] = W, x[47] = N, x[48] = R, x[49] = U, x[50] = M, x[51] = Q, x[52] = F, x[53] = T, x[54] = L, x[55] = P, x[56] = u, x[57] = v, x[58] = w) : w = x[58], w
            }
        })
    }),
    TupU: (function(a, b, c) {
        c.d(b, {
            a: () => E,
            b: () => D
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("irkb"),
            g = c("Q840"),
            h = c("zd8w"),
            i = c("yGJ5"),
            j = c("r4w4"),
            k = c("Bbed"),
            l = c("OWtl"),
            m = c("SGsN"),
            n = c("gPv1"),
            o = c("svjy"),
            p = c("vLsY"),
            q = c("GaA7"),
            r = c("kfGJ"),
            s = c("soaw"),
            t = c("Y2Gi"),
            u = c("q9zg");
        let v = (0, g.u)(l.a, () => new Set),
            w = (0, g.u)(l.a, () => new Set);

        function x() {
            let a, b, c = (0, e.c)(9),
                f = (0, g.z)(u.j),
                h = (0, g.z)(u.h),
                i = (0, g.z)(u.m);
            if (null == f) return null;
            if (c[0] !== i || c[1] !== h || c[2] !== f) {
                let b;
                c[4] !== i || c[5] !== f ? (b = a => {
                    let {
                        campaign_id: b
                    } = a, c = i?.includes(b) ?? !1;
                    return c || b === t.b.campaign_id ? (0, d.jsx)(y, {
                        campaignId: b,
                        identity: f,
                        enabled: c
                    }, JSON.stringify([f.userId, f.accountId, b])) : null
                }, c[4] = i, c[5] = f, c[6] = b) : b = c[6], a = h.map(b), c[0] = i, c[1] = h, c[2] = f, c[3] = a
            } else a = c[3];
            return c[7] !== a ? (b = (0, d.jsx)(d.Fragment, {
                children: a
            }), c[7] = a, c[8] = b) : b = c[8], b
        }

        function y(a) {
            let b, c, d, f, i, j = (0, e.c)(20),
                {
                    campaignId: k,
                    identity: x,
                    enabled: y
                } = a,
                A = (0, g.y)(l.a),
                B = (0, s.a)(),
                [C, D] = (0, h.useState)(!1),
                {
                    data: E,
                    dataUpdatedAt: F,
                    isError: G,
                    isFetching: H,
                    isStale: I
                } = (0, g.x)(y || C ? u.k : null, {
                    campaignId: k,
                    hostId: r.a
                }) ?? {},
                J = (0, h.useRef)(null),
                K = (0, h.useRef)(void 0);
            j[0] !== k || j[1] !== E || j[2] !== F || j[3] !== x || j[4] !== G || j[5] !== H || j[6] !== B || j[7] !== I || j[8] !== A ? (b = async () => {
                if (E?.kind !== "offer" || null == F || G || H || I || !(0, u.o)(A, x)) return;
                let a = E.offer,
                    b = J.current,
                    c = (0, u.f)(a);
                if (J.current = c, k === t.b.campaign_id && ("paid" === c || "expired" === c ? (D(!1), (0, u.e)(A, x, F)) : ("pending" === c || "processing" === c) && D(!0)), "success_verified" === a.claim_status || null != a.reward_granted_at) {
                    let b = JSON.stringify([x.userId, x.accountId, k, a.claim_expires_at]),
                        c = A.get(w);
                    c.has(b) || (A.set(w, new Set(c).add(b)), A.queryClient.invalidateQueries({
                        queryKey: ["plugin-incentive", x.userId],
                        predicate: a => {
                            let {
                                queryKey: b
                            } = a;
                            return b[2] !== x.accountId || b[3] !== r.a || b[4] !== k
                        }
                    }), (0, p.a)(["plugin-incentive", x.userId]))
                }
                if (null == a.reward_granted_at) return;
                let d = JSON.stringify([x.userId, x.accountId, k, a.reward_granted_at]),
                    e = A.get(v);
                if (e.has(d) || (A.set(v, new Set(e).add(d)), "pending" !== b && "processing" !== b || null != a.reward_expires_at && Date.parse(a.reward_expires_at) <= Date.now()) || (A.query.invalidate(n.c), !await Promise.resolve(q.a?.pluginIncentives?.acknowledgeReceipt(d)).catch(z) || !B() || !(0, u.o)(A, x))) return;
                (0, u.p)(A, k, x, "receipt_shown");
                let f = A.get(o.a);
                K.current = A.get(m.f).success(k === t.b.campaign_id ? f.formatMessage({
                    id: "plugins.incentive.capcut.personalCreditsAdded",
                    defaultMessage: "{credits, plural, one {# credit} other {# credits}} added to your personal account"
                }, {
                    credits: a.reward_credits
                }) : f.formatMessage({
                    id: "plugins.incentive.workspaceCreditsAdded",
                    defaultMessage: "{credits, plural, one {# credit} other {# credits}} added to your workspace"
                }, {
                    credits: a.reward_credits
                }), {
                    id: d,
                    position: "top-center"
                })
            }, j[0] = k, j[1] = E, j[2] = F, j[3] = x, j[4] = G, j[5] = H, j[6] = B, j[7] = I, j[8] = A, j[9] = b) : b = j[9];
            let L = (0, h.useEffectEvent)(b);
            return j[10] !== L ? (c = () => {
                let a = !0;
                return queueMicrotask(() => {
                    a && L()
                }), () => {
                    a = !1
                }
            }, j[10] = L, j[11] = c) : c = j[11], j[12] !== E || j[13] !== F || j[14] !== G || j[15] !== H || j[16] !== I ? (d = [E, F, G, H, I], j[12] = E, j[13] = F, j[14] = G, j[15] = H, j[16] = I, j[17] = d) : d = j[17], (0, h.useEffect)(c, d), j[18] === Symbol.for("react.memo_cache_sentinel") ? (f = () => () => K.current?.close(), i = [], j[18] = f, j[19] = i) : (f = j[18], i = j[19]), (0, h.useEffect)(f, i), null
        }

        function z() {
            return !1
        }
        var A = c("loz7"),
            B = c("Rbbe");
        let C = (0, k.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(766017), c.e(743619)]).then(c.bind(c, "Op6v"))).PluginInstallationContent);

        function D() {
            return C.prefetch()
        }

        function E() {
            let a, b, c, k, m, n, o, p = (0, e.c)(15),
                q = (0, g.y)(l.a),
                r = (0, f.c)(),
                {
                    clearPendingAppConnect: s
                } = (0, i.g)(),
                t = (0, h.useEffectEvent)(s),
                u = (0, g.z)(A.o),
                [v, w] = (0, h.useState)(!1);
            return v || "closed" === u.kind || w(!0), p[0] !== t || p[1] !== r || p[2] !== q ? (a = () => (0, B.f)(q, r, t), p[0] = t, p[1] = r, p[2] = q, p[3] = a) : a = p[3], p[4] !== r || p[5] !== q ? (b = [r, q], p[4] = r, p[5] = q, p[6] = b) : b = p[6], (0, h.useEffect)(a, b), p[7] !== q ? (c = () => (0, j.a)(q), k = [q], p[7] = q, p[8] = c, p[9] = k) : (c = p[8], k = p[9]), (0, h.useEffect)(c, k), p[10] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, d.jsx)(x, {}), p[10] = m) : m = p[10], p[11] !== v ? (n = v ? (0, d.jsx)(C, {}) : null, p[11] = v, p[12] = n) : n = p[12], p[13] !== n ? (o = (0, d.jsxs)(d.Fragment, {
                children: [m, n]
            }), p[13] = n, p[14] = o) : o = p[14], o
        }
    }),
    Rbbe: (function(a, b, c) {
        var d = c("HJEB"),
            e = c("I3F6"),
            f = c("Haiv"),
            g = c("SqAt"),
            h = c("Dgwo"),
            i = c("HUHI"),
            j = c("OiCI"),
            k = c("SGsN"),
            l = c("svjy"),
            m = c("WFY2"),
            n = c("kpIY"),
            o = c("Nwp9"),
            p = c("ugfi"),
            q = c("cLdu"),
            r = c("ueue"),
            s = c("loz7"),
            t = c("TZ9K");
        let u = "plugin-oauth-install-reconciliation-by-state-v1",
            v = {},
            w = (0, o.b)(u, v),
            x = new Map,
            y = new Set;
        async function z(a, b, c) {
            let d = a.get(w)[b];
            if (null == d || d.rolledBack) return;
            if (!E(a, d)) return void A(a, b);
            C(b);
            let e = {
                ...d,
                oauthFailed: !0
            };
            a.set(w, a => ({
                ...a,
                [b]: e
            })), e.installed && await D(a, e, c)
        }

        function A(a, b) {
            C(b), a.set(w, a => {
                if (!(b in a)) return a;
                let {
                    [b]: c, ...d
                } = a;
                return d
            })
        }

        function B(a, b, c) {
            C(b.oauthState), x.set(b.oauthState, setTimeout(() => {
                x.delete(b.oauthState), (async function(a, b, c) {
                    let f = a.get(w)[b];
                    if (null == f || f.oauthFailed || f.rolledBack) return;
                    if (!E(a, f)) return void A(a, b);
                    let g = !1;
                    try {
                        if (null != f.productSku) {
                            let a = await (0, t.a)({
                                requiresAppSetup: !0,
                                requestedConnectorId: f.appId,
                                appConnectOptions: {
                                    connectorId: f.appId,
                                    productSku: f.productSku
                                }
                            });
                            g = "ready" === a.kind
                        } else {
                            let {
                                apps: b
                            } = await (0, h.b)(a, (0, i.h)(f.hostId)).sendRequest("app/installed", {
                                forceRefresh: !0
                            });
                            g = b.some(a => a.id === f.appId && a.callable)
                        }
                    } catch (a) {
                        m.a.error("Failed to verify an expired plugin OAuth installation", {
                            safe: {
                                pluginId: f.pluginId
                            },
                            sensitive: {
                                error: a
                            }
                        })
                    }
                    if (!E(a, f) || g) return void A(a, b);
                    let j = a.get(w)[b];
                    if (null == j || j.oauthFailed || j.rolledBack) return;
                    let n = a.get(s.o);
                    "closed" !== n.kind && "loadingPlugin" !== n.kind && n.hostId === j.hostId && n.plugin.plugin.id === j.pluginId && n.requestId === j.requestId && a.set(s.o, (0, s.e)(n, "failed")), a.get(k.f).danger(a.get(l.a).formatMessage({
                        id: "plugins.install.oauthTimedOutWithPluginName",
                        defaultMessage: "Installation of {pluginName} timed out. Please try again"
                    }, {
                        pluginName: j.pluginDisplayName ?? (0, d.a)(j.pluginName)
                    }), {
                        errorAnalytics: {
                            toastId: "plugins.install.oauthTimedOut"
                        }
                    });
                    try {
                        await z(a, b, c)
                    } finally {
                        if (null != j.pendingElicitationReply && E(a, j)) try {
                            await (0, h.b)(a, j.hostId).replyWithMcpServerElicitationResponse(j.pendingElicitationReply.conversationId, j.pendingElicitationReply.requestId, (0, e.b)("decline"))
                        } catch (a) {
                            m.a.error("Failed to decline an expired plugin install elicitation", {
                                safe: {
                                    pluginId: j.pluginId
                                },
                                sensitive: {
                                    error: a
                                }
                            })
                        }
                    }
                })(a, b.oauthState, c).catch(a => {
                    m.a.error("Failed to reconcile an expired plugin OAuth install", {
                        safe: {
                            pluginId: b.pluginId
                        },
                        sensitive: {
                            error: a
                        }
                    })
                })
            }, Math.max(0, b.expiresAtMs - Date.now())))
        }

        function C(a) {
            let b = x.get(a);
            null != b && (clearTimeout(b), x.delete(a))
        }
        async function D(a, b, c) {
            if (y.has(b.oauthState)) return;
            let d = a.get(w)[b.oauthState];
            if (null == d || d.requestId !== b.requestId) return;
            if (!E(a, b)) return void A(a, b.oauthState);
            let e = a.get(s.o);
            if ("closed" !== e.kind && "loadingPlugin" !== e.kind && e.hostId === b.hostId && e.plugin.plugin.id === b.pluginId && e.requestId !== b.requestId) return void A(a, b.oauthState);
            y.add(b.oauthState);
            try {
                if (await (0, p.b)({
                        scope: a,
                        disableBundledAutoInstall: !1,
                        hostId: b.hostId,
                        marketplaceName: b.marketplaceName,
                        pluginId: b.pluginId,
                        pluginName: b.pluginName,
                        queryClient: c,
                        requestPluginId: b.requestPluginId
                    }), !E(a, b)) return void A(a, b.oauthState);
                (0, q.i)(b.hostId) || (0, r.u)({
                    enabled: !1,
                    hostId: b.hostId,
                    installed: !1,
                    pluginId: b.pluginId,
                    queryClient: c
                }), a.set(w, a => ({
                    ...a,
                    [b.oauthState]: {
                        ...b,
                        oauthFailed: !0,
                        rolledBack: !0
                    }
                }))
            } finally {
                y.delete(b.oauthState);
                let c = a.get(s.o);
                "closed" !== c.kind && "loadingPlugin" !== c.kind && c.hostId === b.hostId && c.plugin.plugin.id === b.pluginId && c.requestId === b.requestId && a.set(s.o, (0, s.e)(c, "failed"))
            }
        }

        function E(a, b) {
            let c = a.get(j.d) ?? void 0;
            return !(0, q.i)(b.hostId) || null != b.accountId && b.accountId === c
        }
        c.d(b, {}, {
            a: function(a, b) {
                let {
                    appId: c,
                    hostId: d,
                    hostedAccountId: e,
                    installAttemptId: h,
                    oauthState: i,
                    pendingElicitationReply: j,
                    plugin: k,
                    productSku: l,
                    queryClient: m,
                    requestId: n
                } = b;
                if (null == n || "ON_INSTALL" !== k.plugin.authPolicy || k.plugin.installed) return;
                let o = {
                    accountId: (0, q.i)(d) ? e : void 0,
                    appId: c,
                    expiresAtMs: Date.now() + 6e5,
                    hostId: d,
                    installAttemptId: h,
                    installed: !1,
                    marketplaceName: k.marketplaceName,
                    oauthFailed: !1,
                    oauthState: i,
                    pendingElicitationReply: j,
                    pluginDisplayName: (0, f.a)(k),
                    pluginId: k.plugin.id,
                    pluginName: k.plugin.name,
                    productSku: l,
                    requestId: n,
                    requestPluginId: (0, g.b)(k),
                    rolledBack: !1
                };
                a.set(w, a => ({
                    ...Object.fromEntries(Object.entries(a).filter(a => {
                        let [b, c] = a;
                        return c.hostId !== d || c.pluginId !== k.plugin.id || (C(b), !1)
                    })),
                    [i]: o
                })), B(a, o, m)
            },
            b: z,
            c: A,
            d: function(a, b) {
                let c = a.get(w)[b];
                return c?.oauthFailed === !0 || c?.rolledBack === !0
            },
            e: async function(a, b, c) {
                let d = a.get(w)[b];
                if (null == d) return !0;
                if (!E(a, d)) return A(a, b), !1;
                if (d.rolledBack) return !1;
                let e = {
                    ...d,
                    installed: !0
                };
                return a.set(w, a => ({
                    ...a,
                    [b]: e
                })), !e.oauthFailed || (await D(a, e, c), !1)
            },
            f: function(a, b, c) {
                let d = () => {
                    let d = Date.now(),
                        e = (0, n.k)(u, v),
                        f = {};
                    for (let [b, g] of Object.entries({
                            ...e,
                            ...a.get(w)
                        })) g.rolledBack && g.expiresAtMs + 864e5 <= d ? c({
                        appId: g.appId,
                        hostId: g.hostId,
                        pluginInstallOAuthState: b
                    }) : f[b] = g;
                    for (let c of (a.set(w, f), Object.values(a.get(w)))) c.oauthFailed || c.rolledBack || B(a, c, b)
                };
                return d(), window.addEventListener("focus", d), document.addEventListener("visibilitychange", d), () => {
                    for (let a of (window.removeEventListener("focus", d), document.removeEventListener("visibilitychange", d), x.keys())) C(a)
                }
            }
        })
    }),
    JfPH: (function(a, b, c) {
        var d = c("KvQL"),
            e = c("hOO0"),
            f = c("ygu7"),
            g = c("EEop"),
            h = c("cLdu"),
            i = c("kfGJ");
        c.d(b, {}, {
            getPluginTargetForReference: async function(a, b) {
                let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.a,
                    j = await (0, h.d)(a, {
                        productContext: "chatgpt",
                        surface: "plugin_reference"
                    }).catch(() => []),
                    k = (0, e.a)(b),
                    l = j.find(a => (0, e.a)(a.plugin.remotePluginId ?? a.plugin.id) === k || null != a.canonicalAppId && (0, e.a)(a.canonicalAppId) === k);
                if (null != l) return {
                    displayName: l.displayName ?? l.plugin.name,
                    pluginId: l.plugin.remotePluginId ?? l.plugin.id
                };
                let m = b;
                if (!(0, d.gi)(b)) {
                    let c = await (0, f.b)(a, b).catch(() => null);
                    if (null == c) return null;
                    m = c
                }
                let n = await a.query.getOrFetch(g.l, {
                    hostId: c,
                    marketplacePath: null,
                    pluginName: m,
                    remoteMarketplaceName: d.Zb
                }).catch(() => null);
                return null == n ? null : {
                    displayName: n.summary.interface?.displayName ?? n.summary.name,
                    pluginId: n.summary.remotePluginId ?? m
                }
            }
        })
    }),
    H0Gm: (function(a, b, c) {
        var d = c("Q840"),
            e = c("OWtl");
        let f = (0, d.u)(e.a, []),
            g = (0, d.c)(e.a, a => {
                let {
                    get: b
                } = a, c = [];
                for (let {
                        hostId: a,
                        pluginId: d
                    }
                    of b(f)) c.some(b => b.hostId === a && b.pluginId === d) || c.push({
                    hostId: a,
                    pluginId: d
                });
                return c
            }, {
                isEqual: (a, b) => a.length === b.length && a.every((a, c) => a.hostId === b[c]?.hostId && a.pluginId === b[c]?.pluginId)
            }),
            h = 0;
        c.d(b, {}, {
            a: function(a, b) {
                a.set(f, a => a.filter(a => a.operationId !== b))
            },
            b: g,
            c: function(a, b) {
                let c = h += 1;
                return a.set(f, a => [...a, {
                    ...b,
                    operationId: c
                }]), c
            }
        })
    }),
    K0RC: (function(a, b, c) {
        var d = c("pBUY"),
            e = c.n(d),
            f = c("N2rm");
        let g = (0, c("Nwp9").b)("recent-plugin-install-times", {});
        c.d(b, {}, {
            a: 12096e5,
            b: function(a, b) {
                return JSON.stringify([a, b === f.a ? "local" : b])
            },
            c: g,
            d: function(a, b, c, d) {
                let f = Date.now();
                a.set(g, a => ({
                    ...a,
                    [b]: {
                        ...e()(a[b], a => a + 12096e5 > f),
                        [c]: f,
                        ...null != d ? {
                            [d]: f
                        } : {}
                    }
                }))
            }
        })
    }),
    TZ9K: (function(a, b, c) {
        var d = c("oo2L"),
            e = c("o6hs"),
            f = c("Rvvc"),
            g = c("LH8k"),
            h = c("WFY2"),
            i = c("HFSu"),
            j = c("OHD8"),
            k = c("eShZ"),
            l = c("sFqu");
        c.d(b, {}, {
            a: async function(a, b) {
                let c = a.requestedConnectorId;
                if (!a.requiresAppSetup || null == c) return {
                    kind: "ready"
                };
                let m = (0, l.a)(c, a)?.productSku ?? (0, d.j)(),
                    n = {
                        [e.a]: m
                    };
                try {
                    let [a, d] = await Promise.all([i.CodexRequest.safeGet("/aip/connectors/{connector_id}", {
                        surface: "connector_setup",
                        parameters: {
                            path: {
                                connector_id: c
                            }
                        },
                        additionalHeaders: n
                    }), async function(a, b, c) {
                        let d = async () => {
                            let {
                                link: d
                            } = await i.CodexRequest.safeGet("/aip/connectors/{connector_id}/link", {
                                surface: "connector_setup",
                                parameters: {
                                    path: {
                                        connector_id: a
                                    }
                                },
                                additionalHeaders: b,
                                ...null == c ? {} : {
                                    expectedIdentity: c.expectedIdentity
                                }
                            });
                            return d
                        };
                        try {
                            return await d()
                        } catch (a) {
                            if (null == c || !c.isCurrent() || !(a instanceof k.FetchError) || !(0, j.a)(a) || (await new Promise(a => setTimeout(a, 250)), !c.isCurrent())) throw a;
                            return d()
                        }
                    }(c, n, b)]);
                    if ("DISABLED_BY_ADMIN" === a.status) return {
                        kind: "unavailable"
                    };
                    let e = {
                        category: null,
                        description: a.description ?? null,
                        id: c,
                        installUrl: null,
                        name: a.name
                    };
                    if (null == d || null != d.auth_status && "ACTIVE" !== d.auth_status) return {
                        kind: "needsAuth",
                        app: e
                    };
                    if ("CODEX" === m && (c === f.c || a.template_id === f.a || "github" === a.service)) try {
                        await i.CodexRequest.safeGet("/wham/github/list-repositories", {
                            parameters: {
                                query: {
                                    connector_id: c,
                                    page: 1,
                                    per_page: 1
                                }
                            }
                        })
                    } catch (a) {
                        if (a instanceof Error && (0, g.a)(a)?.type === "missing_github_connector_link") return {
                            kind: "needsAuth",
                            app: e
                        };
                        throw a
                    }
                    return {
                        kind: "ready"
                    }
                } catch (a) {
                    return h.a.info("Requested plugin connection could not be verified", {
                        safe: {},
                        sensitive: {
                            error: a
                        }
                    }), {
                        kind: "unavailable"
                    }
                }
            }
        })
    }),
    ndO4: (function(a, b, c) {
        var d = c("bTvG"),
            e = c("hOO0"),
            f = c("pDRe"),
            g = c("OiCI"),
            h = c("Cslg"),
            i = c("xWQV"),
            j = c("v70x"),
            k = c("ygu7"),
            l = c("loz7");

        function m(a) {
            let b = a.marketplaceAnalytics?.chatgpt;
            return null == b ? void 0 : {
                ...b,
                installAction: d.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_CONNECT_SINGLE,
                surface: null != a.installAttemptId ? b.surface : d.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_CONNECTOR_SETUP
            }
        }

        function n(a, b, c) {
            let {
                appId: j,
                appIds: l,
                apps: m,
                parentPluginId: n,
                parentCanonicalAppId: o,
                parentInstallAttemptId: p,
                sourceAttributionId: q,
                allowChildInstall: r,
                blocked: s,
                previous: t
            } = c;
            if (null != t && "failure" !== t.terminalResult) return t;
            let u = a.queryClient.getQueryData((0, f.b)({
                    accountId: a.get(g.a),
                    userId: a.get(h.k),
                    appIds: l,
                    enabled: !1
                }).queryKey)?.find(a => (0, e.a)(a.id) === (0, e.a)(j)),
                v = a.queryClient.getQueryData((0, k.d)(j, a.get(g.d)).queryKey),
                w = t?.childInstall ?? (r && v?.plugin_id !== n && (0, e.a)(o ?? "") !== (0, e.a)(j) && !m.some(a => a.id === j && a.isAccessible) && !u?.installed && u?.can_install !== !1 && !s),
                x = null != t ? t.pluginId : v?.plugin_id ?? void 0,
                y = {
                    childInstall: w,
                    installAttemptId: w ? crypto.randomUUID() : t?.installAttemptId ?? p,
                    pluginId: w ? x : n
                };
            return w && (0, i.c)(a, {
                ...b,
                installAction: d.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_CONNECT_SINGLE
            }, {
                action: "CHATGPT_PLUGIN_ACTION_TYPE_INSTALL",
                connectorId: j,
                installAttemptId: y.installAttemptId,
                pluginId: y.pluginId,
                referrerInstallAttemptId: p,
                referrerPluginId: n,
                result: "CHATGPT_PLUGIN_ACTION_RESULT_INITIATED",
                sourceAttributionId: q
            }), y
        }
        c.d(b, {}, {
            a: function(a, b, c, d) {
                let e = a.get(l.o);
                if ("needsApps" !== e.kind && "connectApp" !== e.kind && "connectAppBeforeInstall" !== e.kind || e.marketplaceAnalytics?.chatgpt == null) return;
                let f = m(e);
                if (null == f) return;
                let g = "connectAppBeforeInstall" === e.kind ? [e.app.id] : e.requiredApps.map(a => {
                        let {
                            app: b
                        } = a;
                        return b.id
                    }),
                    h = e.requiredAppAnalytics?.[b],
                    i = n(a, f, {
                        appId: b,
                        appIds: g,
                        apps: c,
                        parentPluginId: (0, j.c)(e.plugin.plugin) ?? e.plugin.plugin.id,
                        parentCanonicalAppId: e.plugin.canonicalAppId,
                        parentInstallAttemptId: e.installAttemptId,
                        sourceAttributionId: e.sourceAttributionId,
                        allowChildInstall: "connectAppBeforeInstall" !== e.kind,
                        blocked: d,
                        previous: h?.terminalResult === "failure" ? h : void 0
                    });
                a.set(l.o, {
                    ...e,
                    requiredAppAnalytics: {
                        ...e.requiredAppAnalytics,
                        [b]: i
                    }
                })
            },
            b: m,
            c: function(a, b, c, e) {
                let {
                    appId: f,
                    result: g,
                    errorType: h,
                    linkId: j,
                    suggestionId: k
                } = e, m = a.get(l.o), n = "closed" === m.kind ? void 0 : m.requiredAppAnalytics?.[f], o = null != n && n.pluginId === c.pluginId && n.installAttemptId === c.installAttemptId;
                if (null == c.terminalResult && (!o || null == n.terminalResult)) {
                    if ("CHATGPT_PLUGIN_ACTION_RESULT_INITIATED" !== g && (!c.childInstall || "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS" !== g || j)) {
                        let b = "failure";
                        "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS" === g ? b = "success" : "CHATGPT_PLUGIN_ACTION_RESULT_CANCELLED" === g && (b = "cancelled"), "closed" !== m.kind && (o || null == n && null != c.installAttemptId && m.installAttemptId === c.installAttemptId) && a.set(l.o, {
                            ...m,
                            requiredAppAnalytics: {
                                ...m.requiredAppAnalytics,
                                [f]: {
                                    ...c,
                                    terminalResult: b
                                }
                            }
                        })
                    }(0, i.c)(a, b, {
                        action: "CHATGPT_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR",
                        connectorId: f,
                        installAttemptId: c.installAttemptId,
                        pluginId: c.pluginId,
                        result: g,
                        errorType: h,
                        suggestionId: k
                    }), c.childInstall && ("CHATGPT_PLUGIN_ACTION_RESULT_FAILURE" === g || "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS" === g && j) && (0, i.c)(a, {
                        ...b,
                        installAction: d.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_CONNECT_SINGLE
                    }, {
                        action: "CHATGPT_PLUGIN_ACTION_TYPE_INSTALL",
                        connectorId: f,
                        installAttemptId: c.installAttemptId,
                        pluginId: c.pluginId,
                        result: g,
                        errorType: h
                    })
                }
            },
            d: n
        })
    }),
    ntKy: (function(a, b, c) {
        c.d(b, {
            installPlugin: () => C,
            a: () => G,
            b: () => F,
            c: () => E,
            d: () => D,
            e: () => A
        });
        var d = c("QosV"),
            e = c("D7Ms"),
            f = c("Q840"),
            g = c("KvQL"),
            h = c("Haiv"),
            i = c("SqAt"),
            j = c("oo2L"),
            k = c("OiCI"),
            l = c("Cslg"),
            m = c("SGsN"),
            n = c("svjy"),
            o = c("EEop"),
            p = c("OWtl"),
            q = c("WFY2"),
            r = c("cLdu"),
            s = c("ueue"),
            t = c("sFqu"),
            u = c("aVTW"),
            v = c("loz7"),
            w = c("Elta"),
            x = c("hOYb"),
            y = c("H0Gm");
        let z = (0, f.c)(p.a, a => {
            let {
                get: b
            } = a, c = (0, v.h)(b(v.o));
            return null == c ? null : {
                hostId: c.hostId,
                phase: c.phase,
                pluginDisplayName: (0, h.a)(c.plugin),
                pluginId: c.plugin.plugin.id,
                progress: c.progressPercent,
                sourceSectionId: c.sourceSectionId
            }
        }, {
            isEqual: (a, b) => a === b || null != a && null != b && a.hostId === b.hostId && a.phase === b.phase && a.pluginDisplayName === b.pluginDisplayName && a.pluginId === b.pluginId && a.progress === b.progress && a.sourceSectionId === b.sourceSectionId
        });

        function A() {
            let a, b, c, e = (0, d.c)(9),
                g = (0, f.y)(p.a),
                h = (0, f.z)(z),
                i = (0, f.z)(y.b);
            return e[0] !== g ? (a = (a, b) => C(g, a, b), e[0] = g, e[1] = a) : a = e[1], e[2] !== g ? (b = (a, b) => {
                let {
                    hostId: c,
                    onAppConnected: d,
                    onCancel: e,
                    onError: f,
                    onSuccess: h,
                    ...i
                } = b;
                return (0, v.n)(g, {
                    hostId: c,
                    mode: "details",
                    onAppConnected: d,
                    onCancel: e,
                    onError: f,
                    onSuccess: h,
                    options: B(g, i),
                    plugin: a
                })
            }, e[2] = g, e[3] = b) : b = e[3], e[4] !== h || e[5] !== a || e[6] !== b || e[7] !== i ? (c = {
                installPlugin: a,
                status: h,
                uninstalling: i,
                showPluginInstallDetails: b
            }, e[4] = h, e[5] = a, e[6] = b, e[7] = i, e[8] = c) : c = e[8], c
        }

        function B(a, b) {
            var c;
            let d = b.marketplaceAnalytics;
            if (null == d || null != d.voiceSessionId) return b;
            let e = d.chatgpt?.conversationId ?? b.conversation?.conversationId ?? b.postInstallPluginSuggestion?.conversationId;
            return {
                ...b,
                marketplaceAnalytics: {
                    ...d,
                    voiceSessionId: (c = e ?? null, a.get(w.a, c) && a.get(x.h) || void 0)
                }
            }
        }

        function C(a, b, c) {
            let {
                hostId: d,
                onAppConnected: f,
                onCancel: g,
                onError: h,
                onSuccess: j,
                ...l
            } = c, p = B(a, l);
            if ("plugin" in b) return (0, v.n)(a, {
                hostId: d,
                mode: "install",
                onAppConnected: f,
                onCancel: g,
                onError: h,
                onSuccess: j,
                options: p,
                plugin: b
            });
            let t = {
                    ...p,
                    installAttemptId: p.installAttemptId ?? p.appConnectOptions?.installAttemptId ?? crypto.randomUUID()
                },
                w = (0, v.m)(a, {
                    hostId: d,
                    onAppConnected: f,
                    onCancel: g,
                    onError: h,
                    onSuccess: j,
                    options: t,
                    plugin: b
                });
            if (null == w) return !1;
            I(a, b.connectionAppId, t);
            let x = a.get(v.o),
                y = null != b.connectionAppId && "loadingPlugin" === x.kind ? (0, u.b)(a, b.connectionAppId, x) : null;
            return null != y && a.queryClient.prefetchQuery(y), H(a, b, d, p.productContext).then(b => {
                let c = a.get(v.o);
                if ("loadingPlugin" !== c.kind || c.hostId !== d || c.requestId !== w) return;
                let l = c.hostedAccountId,
                    m = a.get(k.d) ?? void 0;
                if ((0, r.i)(d) && (null == l || m !== l)) return void(0, v.d)(a, {
                    hostId: d,
                    requestId: w
                });
                let n = "ON_INSTALL" === b.summary.authPolicy ? (0, u.a)(b, c.requestedConnectorId, null) : null;
                null != y && (null == n || (0, e.f)(y.queryKey) !== (0, e.f)((0, u.b)(a, n.id, c).queryKey)) && a.queryClient.removeQueries({
                    queryKey: y.queryKey,
                    exact: !0
                });
                let q = (0, s.c)(b);
                a.queryClient.setQueryData((0, o.h)({
                    productContext: p.productContext,
                    accountId: l ?? null,
                    hostId: d,
                    marketplacePath: q.marketplacePath,
                    pluginName: (0, i.a)(q),
                    remoteMarketplaceName: q.remoteMarketplaceName ?? null
                }), b), (0, v.n)(a, {
                    hostId: d,
                    loadingRequestId: w,
                    mode: "install",
                    onAppConnected: f,
                    onCancel: g,
                    onError: h,
                    onSuccess: j,
                    options: {
                        ...t,
                        hostedAccountId: l
                    },
                    plugin: q
                })
            }).catch(b => {
                (0, v.d)(a, {
                    hostId: d,
                    requestId: w
                }) && (q.a.error("Failed to load plugin for installation", {
                    safe: {},
                    sensitive: {
                        error: b
                    }
                }), a.get(m.f).danger(a.get(n.a).formatMessage({
                    id: "plugins.install.error",
                    defaultMessage: "Failed to install plugin"
                }), {
                    errorAnalytics: {
                        toastId: "plugins.install.error"
                    }
                }))
            }), !0
        }
        async function D(a, b) {
            let {
                accountId: d,
                hostId: e,
                target: f,
                onSuccess: h,
                onCancel: i,
                onError: j
            } = b;
            if (null == d || null == f.pluginId) return void i?.();
            let p = (0, g.Yg)(f.pluginId),
                r = f.remotePluginId ?? (null == p ? f.pluginId : f.pluginId.slice(0, -p.length - 1)),
                t = f.installOptions?.postInstallPluginSuggestion;
            if (null != t && (t.accountId !== d || t.pluginId !== r)) return void i?.();
            let u = () => a.get(k.a) === d && (f.installOptions?.hostedAccountId == null || f.installOptions.hostedAccountId === d && a.get(k.d) === d) && (null == t || t.userId === a.get(l.k));
            if (!u()) return void i?.();
            try {
                let b = await a.queryClient.fetchQuery({
                    ...a.query.getOptions(o.l, {
                        hostId: e,
                        marketplacePath: null,
                        pluginName: r,
                        remoteMarketplaceName: null,
                        productContext: f.installOptions?.productContext
                    }),
                    retry: !1
                });
                if (!u()) return void i?.();
                let g = (0, s.c)(b),
                    {
                        requestId: k,
                        ...l
                    } = f.installOptions ?? {},
                    m = {
                        ...l,
                        hostedAccountId: d,
                        origin: f.origin ?? l.origin,
                        pendingElicitationReply: f.pendingElicitationReply
                    };
                if (!C(a, g, {
                        ...m,
                        hostId: e,
                        onCancel: i,
                        onError: j,
                        onSuccess: async () => {
                            if (t?.kind === "orbit") {
                                let {
                                    completeOrbitPluginInstallation: b
                                } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(313404)]).then(c.bind(c, "r2fg"));
                                await b(a, t)
                            }
                            await h?.(r, g)
                        }
                    })) return void j?.();
                null != f.postInstallRequiredApps && (0, v.s)(a, {
                    apps: f.postInstallRequiredApps,
                    installedInThisFlow: f.installedInThisFlow,
                    browserExtensions: [],
                    hostId: e,
                    options: m,
                    plugin: g
                })
            } catch (b) {
                if (!u()) return void i?.();
                q.a.error("Failed to resume plugin installation after OAuth", {
                    safe: {},
                    sensitive: {
                        error: b
                    }
                }), a.get(m.f).danger(a.get(n.a).formatMessage({
                    id: "plugins.install.error",
                    defaultMessage: "Failed to install plugin"
                }), {
                    errorAnalytics: {
                        toastId: "plugins.install.error"
                    }
                }), j?.()
            }
        }
        async function E(a, b, c) {
            "plugin" in b || (I(a, b.connectionAppId), await H(a, b, c))
        }

        function F(a, b) {
            return a.some(a => {
                let {
                    hostId: c,
                    pluginId: d
                } = a;
                return c === b.hostId && d === b.pluginId
            })
        }

        function G(a) {
            let {
                hostId: b,
                pluginId: c
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return null != a && (null == b || a.hostId === b) && (null == c || a.pluginId === c)
        }

        function H(a, b, c, d) {
            return a.queryClient.fetchQuery({
                ...a.query.getOptions(o.l, {
                    hostId: c,
                    marketplacePath: null,
                    pluginName: b.remotePluginId,
                    productContext: d,
                    remoteMarketplaceName: b.remoteMarketplaceName ?? null
                }),
                retry: !1
            })
        }

        function I(a, b, c) {
            null != b && a.queryClient.prefetchQuery((0, j.f)(b, {
                productSku: (0, t.a)(b, c)?.productSku
            }))
        }
    }),
    JRAe: (function(a, b, c) {
        var d = c("ZOvk"),
            e = c("fOcH"),
            f = c("i0mf"),
            g = c("IFeg"),
            h = c("jLtZ"),
            i = c("fD0V");
        let j = {
            gmail: k(g),
            "google-calendar": k(h),
            "google-docs": k(d),
            "google-drive": k(i),
            "google-sheets": k(e),
            "google-slides": k(f)
        };

        function k(a) {
            let b = a.trim().replace(/^<svg\b[^>]*>/u, '<svg x="24" y="24" width="144" height="144" viewBox="0 0 192 192">');
            return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192"><rect width="192" height="192" rx="40" fill="#fff"/>${b}</svg>`)}`
        }

        function l(a) {
            return (a.split("@")[0] ?? "").trim().toLowerCase().split(/[^a-z0-9]+/g).filter(a => a.length > 0).join("-")
        }
        c.d(b, {}, {
            a: function(a) {
                for (let b of [a.name, a.id, a.interface?.displayName ?? ""].map(l)) {
                    let a = function(a) {
                        let b = a.replace(/^connector-/u, "");
                        return j[a] ?? j[b] ?? j[b.replace(/-mcp-server$/u, "")] ?? null
                    }(b);
                    if (null != a) return a
                }
                return null
            }
        })
    }),
    ZqLP: (function(a, b, c) {
        function d(a, b, c) {
            let d = a.creator_account_user_id,
                e = "personal" === b.structure ? c : b.account_user_id;
            return null != d && d === e
        }
        c.d(b, {}, {
            a: function(a) {
                let {
                    plugin: b,
                    account: c,
                    userId: e,
                    hasWritePermission: f = !1,
                    isSourceManaged: g = !1
                } = a, h = d(b, c, e), i = "workspace" === c.structure && "WORKSPACE" === b.scope && b.workspace_id === c.id && ("account-admin" === c.account_user_role || "account-owner" === c.account_user_role);
                return !g && (h || i || f)
            },
            b: function(a) {
                let {
                    plugin: b,
                    account: c,
                    userId: e,
                    rbacEnabled: f,
                    canEditWithShares: g,
                    isSourceManaged: h = !1
                } = a, i = "workspace" === c.structure, j = i && b.workspace_id === c.id && "WORKSPACE" === b.scope, k = "USER" === b.scope && null == b.workspace_id, l = i && "USER" === b.scope && "PRIVATE" === b.discoverability && b.workspace_id === c.id, m = d(b, c, e), n = i && ("account-admin" === c.account_user_role || "account-owner" === c.account_user_role), o = b.share_principals?.some(a => {
                    let {
                        principal_type: b,
                        principal_id: d,
                        role: f
                    } = a;
                    return ("editor" === f || "owner" === f) && ("user" === b && d === e || "workspace" === b && d === c.id)
                });
                return {
                    canOpenVisualEditor: !h && ("USER" === b.scope || "WORKSPACE" === b.scope) && (m && (!i || c.account_user_id === `${e}__${c.id}`) && (null == b.workspace_id || i && b.workspace_id === c.id) || n && (j || function(a, b) {
                        if ("USER" !== a.scope || null != a.source_gizmo_id) return !1;
                        if (null != a.workspace_id) return a.workspace_id === b;
                        let [c, d, e] = a.creator_account_user_id?.split("__") ?? [];
                        return !!c && d === b && null == e
                    }(b, c.id)) || j && (g ?? !0 === o)),
                    canManageForWorkspace: n && ("USER" !== b.scope || m) && ("WORKSPACE" !== b.scope || j),
                    canDownload: "ENABLED" === b.status && null == b.template_plugin_id && ("USER" === b.scope || "WORKSPACE" === b.scope),
                    canUploadPersonal: m && k && !i,
                    canUploadWorkspaceWithShares: j && f && !h && !0 === g,
                    shouldCheckWorkspaceUpload: m && j,
                    canDelete: m && (null != b.canonical_app_id ? j || k || l : j || k && "PRIVATE" === b.discoverability)
                }
            },
            c: "3091128584"
        })
    }),
    w8IV: (function(a, b, c) {
        var d = c("KvQL");
        let e = `${d.mb}@${d.bd}`;
        c.d(b, {}, {
            a: e,
            b: "com.apple.MobileSMS"
        })
    }),
    BA9i: (function(a, b, c) {
        let d = "spreadsheets",
            e = "presentations",
            f = "documents",
            g = "openai-primary-runtime";

        function h(a, b) {
            return a.plugin.name === b && a.marketplaceName === g && a.plugin.id === `${b}@${g}`
        }
        c.d(b, {}, {
            a: d,
            b: "1288674243",
            c: "1623794951",
            d: e,
            e: f,
            f: function(a) {
                return h(a, d)
            },
            g: function(a) {
                return h(a, e)
            },
            h: function(a) {
                return h(a, f)
            }
        })
    }),
    yK38: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a, b, c, d) {
                let e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : b,
                    f = arguments.length > 5 ? arguments[5] : void 0,
                    g = [...new Set(b)],
                    h = new Set(e),
                    i = new Set,
                    j = !1,
                    k = new IntersectionObserver(a => {
                        if (j) return;
                        for (let b of a) {
                            let a = b.target instanceof HTMLElement ? b.target.dataset.pluginImpressionId : void 0;
                            null != a && (b.isIntersecting && b.intersectionRatio >= .5 ? i.add(a) : i.delete(a))
                        }
                        let b = g.filter(a => i.has(a));
                        f?.(b);
                        let e = b.filter(a => h.has(a) && !c.has(a));
                        if (e.length > 0) {
                            for (let a of e) c.add(a);
                            d(b, e)
                        }
                    }, {
                        threshold: .5
                    });
                for (let b of a.querySelectorAll("[data-plugin-impression-id]")) k.observe(b);
                return () => {
                    j = !0, k.disconnect()
                }
            }
        })
    }),
    Zpwo: (function(a, b, c) {
        function d(a, b, c) {
            let d = a.name.trim();
            if (!d || "connected" === d.toLocaleLowerCase()) return;
            let f = e(a),
                g = c ?? a.connector_name ?? b;
            return d.toLocaleLowerCase() === g.trim().toLocaleLowerCase() || d.toLocaleLowerCase() === f?.toLocaleLowerCase() ? void 0 : d
        }

        function e(a) {
            return a.owner_profile?.email?.trim() || a.owner_profile?.name?.trim() || a.owner_profile?.nickname?.trim() || void 0
        }
        c.d(b, {}, {
            a: d,
            b: function(a, b, c) {
                return a.owners.some(a => "USER" === a.type && a.id === c) ? b : void 0
            },
            c: function(a, b, c, f) {
                let g = e(a);
                return g || ("NONE" === a.auth_type && b.trim() ? b.trim() : d(a, b, f) ?? c)
            },
            d: e
        })
    }),
    C3Kr: (function(a, b, c) {
        let d = new WeakMap,
            e = new WeakMap,
            f = new WeakMap;

        function g(a) {
            let b = f.get(a);
            if (null != b) return b;
            let c = new Set([a.name, a.interface?.displayName ?? ""].map(j));
            return f.set(a, c), c
        }

        function h(a, b, c) {
            let d = a.get(b);
            null == d ? a.set(b, [c]) : d.push(c)
        }

        function i(a, b) {
            let c = new Set;
            for (let d of b)
                for (let b of a.get(d) ?? []) c.add(b);
            return Array.from(c)
        }

        function j(a) {
            return a.trim().toLowerCase().replaceAll(/[^a-z0-9]+/g, "")
        }
        c.d(b, {}, {
            a: function(a, b) {
                let c = g(b),
                    {
                        aliasAppsByKey: e,
                        exactAppsByKey: f
                    } = function(a) {
                        let b = d.get(a);
                        if (null != b) return b;
                        let c = new Map,
                            e = new Map;
                        for (let b of a)
                            for (let a of (h(c, j(b.name), b), new Set(b.pluginDisplayNames.map(j)))) h(e, a, b);
                        let f = {
                            aliasAppsByKey: e,
                            exactAppsByKey: c
                        };
                        return d.set(a, f), f
                    }(a),
                    k = i(f, c);
                if (k.length > 0) return 1 === k.length ? k[0] ?? null : null;
                let l = i(e, c);
                return 1 === l.length ? l[0] ?? null : null
            },
            b: function(a, b) {
                let c = g(b);
                for (let b of function(a) {
                        let b = e.get(a);
                        if (null != b) return b;
                        let c = new Set([a.name, ...a.pluginDisplayNames].map(j));
                        return e.set(a, c), c
                    }(a))
                    if (c.has(b)) return !0;
                return !1
            }
        })
    }),
    AjOy: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a) {
                return "chatgpt" === a
            }
        })
    }),
    md5w: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a) {
                let {
                    pluginId: b,
                    enabled: c
                } = a;
                return [{
                    keyPath: `plugins.${b}.enabled`,
                    value: c,
                    mergeStrategy: "upsert"
                }]
            }
        })
    }),
    MX3C: (function(a, b, c) {
        var d = c("Q840"),
            e = c("lAQI"),
            f = c("hOO0"),
            g = c("OWtl"),
            h = c("kpIY"),
            i = c("Nwp9");
        let j = "selected-plugin-links-v1",
            k = e.J(e.L(), e.L().nullable().catch(null)).catch({}),
            l = (0, i.b)(j, {}, {
                coerceStoredValue: a => k.parse(a)
            }),
            m = (0, d.d)(g.a, (a, b) => {
                let {
                    get: c
                } = b;
                return c(l)[n(a)] ?? null
            });

        function n(a) {
            let {
                accountId: b,
                userId: c,
                appId: d
            } = a;
            return JSON.stringify([b, c, d])
        }
        c.d(b, {}, {
            a: function(a, b) {
                let c = (0, f.a)(b);
                return a.filter(a => (0, f.a)(a.connector_id) === c && "HIDDEN" !== a.visibility && !a.id.startsWith("implicit_link::"))
            },
            b: function(a, b, c) {
                return a.some(a => (0, f.c)(a, b) && "OAUTH" === a.auth_type && "DISABLED_BY_ADMIN" !== a.connector_status && null == a.unavailable_reason && a.owners.some(a => "USER" === a.type && a.id === c))
            },
            c: m,
            d: function(a, b, c) {
                (0, h.t)(j, {
                    entries: {
                        [n(b)]: null == c ? null : {
                            value: c
                        }
                    },
                    maxEntries: 100
                }), a.set(l, (0, h.k)(j, {}))
            }
        })
    }),
    oszP: (function(a, b, c) {
        var d = c("oo2L"),
            e = c("hOO0"),
            f = c("bnxy");

        function g(a) {
            return (a ?? "").trim().toLowerCase().replace(/^connector[_-]/, "").replace(/^mcp[_-]/, "").replace(/[\s_-]+/g, "")
        }

        function h(a) {
            return a.branding?.category?.trim() || a.appMetadata?.categories?.find(a => a.trim())?.trim() || null
        }

        function i(a, b) {
            return null != a && null != b && (0, f.q)(b) === (0, f.q)((0, f.p)((0, f.r)(a), ".agents/plugins/marketplace.json"))
        }

        function j(a) {
            return (a ?? "").trim().toLowerCase().split(":").map(a => a.replace(/[\s_-]+/g, "")).join(":")
        }
        c.d(b, {}, {
            a: function(a) {
                let {
                    appsContent: b,
                    connections: c,
                    directoryApps: d,
                    includeUnavailableApps: f = !1,
                    pluginApps: g
                } = a, h = new Map(b.map(a => [(0, e.a)(a.id), a])), i = new Map(d.map(a => [(0, e.a)(a.id), a]));
                return g.flatMap(a => {
                    let b = (0, e.a)(a.id),
                        d = h.get(b);
                    if (null == d) {
                        let d = c?.get(b);
                        return f && (d?.isUnavailable || d?.isDisabledByAdmin) ? [{
                            appMetadata: null,
                            branding: null == a.category ? null : {
                                category: a.category,
                                developer: null,
                                isDiscoverableApp: !1,
                                privacyPolicy: null,
                                termsOfService: null,
                                website: null
                            },
                            description: a.description,
                            distributionChannel: null,
                            iconAssets: null,
                            iconDarkAssets: null,
                            id: a.id,
                            installUrl: null,
                            isAccessible: !1,
                            isEnabled: !1,
                            labels: null,
                            logoUrl: null,
                            logoUrlDark: null,
                            name: a.name,
                            pluginDisplayNames: []
                        }] : []
                    }
                    let g = i.get(b);
                    return [{
                        appMetadata: g?.appMetadata ?? null,
                        branding: {
                            category: g?.branding?.category ?? null,
                            developer: d.developer ?? g?.branding?.developer ?? null,
                            isDiscoverableApp: g?.branding?.isDiscoverableApp ?? !1,
                            privacyPolicy: g?.branding?.privacyPolicy ?? null,
                            termsOfService: g?.branding?.termsOfService ?? null,
                            website: g?.branding?.website ?? null
                        },
                        description: d.description || null,
                        distributionChannel: d.distribution_channel ?? g?.distributionChannel ?? null,
                        iconAssets: g?.iconAssets ?? null,
                        iconDarkAssets: g?.iconDarkAssets ?? null,
                        id: a.id,
                        installUrl: g?.installUrl ?? a.installUrl,
                        isAccessible: c?.get(b)?.isConnected ?? g?.isAccessible ?? !1,
                        isEnabled: g?.isEnabled ?? !0,
                        labels: g?.labels ?? null,
                        logoUrl: d.icon_url ?? g?.logoUrl ?? null,
                        logoUrlDark: d.icon_dark_url ?? g?.logoUrlDark ?? null,
                        name: d.name,
                        pluginDisplayNames: g?.pluginDisplayNames ?? []
                    }]
                })
            },
            b: function(a) {
                let {
                    connectorMetadata: b,
                    directoryApps: c,
                    appTemplates: d
                } = a;
                if (!Array.isArray(d)) return [];
                let e = new Map(c.map(a => [a.id, a])),
                    f = new Map(b.map(a => [a.id, a]));
                return d.map(a => {
                    let b = (null == a.canonicalConnectorId ? void 0 : e.get(a.canonicalConnectorId)) ?? e.get(a.templateId),
                        c = (null == a.canonicalConnectorId ? void 0 : f.get(a.canonicalConnectorId)) ?? f.get(a.templateId);
                    return {
                        ...a,
                        category: a.category?.trim() || (null == b ? null : h(b)),
                        description: a.description || c?.description || null,
                        logoUrl: a.logoUrl || c?.iconUrl || c?.iconUrlDark || null,
                        logoUrlDark: a.logoUrlDark || c?.iconUrlDark || c?.iconUrl || null
                    }
                })
            },
            c: function(a) {
                let {
                    connectorMetadata: b,
                    directoryApps: c,
                    pluginApps: d,
                    appTemplates: f
                } = a, g = new Map(b.map(a => [a.id, a])), i = new Map(c.map(a => [a.id, a]));
                return d.map(a => {
                    let b = g.get(a.id),
                        c = i.get(a.id),
                        d = f.find(b => b.materializedAppIds.some(b => (0, e.a)(b) === (0, e.a)(a.id))),
                        j = null != b && b.name !== b.id;
                    if (!j && null == d) return null;
                    let k = a.category?.trim() || (null == c ? null : h(c));
                    return {
                        appMetadata: c?.appMetadata ?? null,
                        description: b?.description ?? (null == d ? null : a.description),
                        distributionChannel: b?.distributionChannel ?? null,
                        iconAssets: c?.iconAssets ?? null,
                        iconDarkAssets: c?.iconDarkAssets ?? null,
                        id: a.id,
                        installUrl: b?.installUrl ?? c?.installUrl ?? a.installUrl,
                        isAccessible: c?.isAccessible ?? !1,
                        isEnabled: c?.isEnabled ?? !0,
                        labels: c?.labels ?? null,
                        logoUrl: b?.iconUrl ?? b?.iconUrlDark ?? d?.logoUrl ?? null,
                        logoUrlDark: b?.iconUrlDark ?? b?.iconUrl ?? d?.logoUrlDark ?? null,
                        name: j ? b.name : a.name,
                        pluginDisplayNames: b?.pluginDisplayNames ?? [],
                        branding: k ? {
                            ...c?.branding ?? {
                                category: null,
                                developer: null,
                                website: null,
                                privacyPolicy: null,
                                termsOfService: null,
                                isDiscoverableApp: !1
                            },
                            category: k
                        } : c?.branding ?? null
                    }
                }).filter(a => null != a)
            },
            d: function(a) {
                let {
                    apps: b,
                    configuredServers: c,
                    pluginServerNames: d,
                    mcpAppIdsByServerKey: f
                } = a;
                return d.map(a => {
                    var d, h;
                    let i, j, k = f?.get(a),
                        l = null == f ? (d = b, i = g(a), d.find(a => [a.id, a.name, ...a.pluginDisplayNames, ...Object.keys(a.labels ?? {}), ...Object.values(a.labels ?? {})].some(a => g(a) === i)) ?? null) : b.find(a => null != k && (0, e.a)(a.id) === (0, e.a)(k));
                    if (null != l) return {
                        kind: "app",
                        app: l,
                        manifestAppId: k
                    };
                    let m = (h = c, j = g(a), Object.entries(h).find(a => {
                            let [b, c] = a;
                            return [b, c.name].some(a => g(a) === j)
                        })?.[0] ?? null),
                        n = null == m ? null : c[m];
                    return {
                        configKey: m,
                        kind: "config",
                        enabled: n?.enabled !== !1,
                        installed: null != n,
                        name: a,
                        manifestAppId: k
                    }
                })
            },
            e: function(a) {
                let {
                    installedSkills: b,
                    pluginName: c,
                    pluginSkills: d
                } = a, e = function(a) {
                    let b = new Map,
                        c = new Map,
                        d = new Map;
                    for (let {
                            skill: e
                        }
                        of a) {
                        d.set(e.path, e), c.set(e.name, e);
                        let a = j(e.name),
                            f = b.get(a);
                        if (null == f) {
                            b.set(a, [e]);
                            continue
                        }
                        f.push(e)
                    }
                    return {
                        byComparableKey: b,
                        byName: c,
                        byPath: d
                    }
                }(b), f = [], g = [];
                for (let a of d) {
                    let b = function(a, b, c) {
                        let d = b.path ? c.byPath.get(b.path) : void 0;
                        if (null != d) return d;
                        let e = a.trim(),
                            f = b.name;
                        if (!b.path && !f.includes(":")) {
                            if (!e) return null;
                            f = `${e}:${f}`
                        }
                        let g = c.byName.get(f);
                        if (null != g) return g;
                        let h = c.byComparableKey.get(j(f));
                        return h?.length === 1 ? h[0] : null
                    }(c, a, e);
                    if (null != b) {
                        f.push({
                            installedSkill: b,
                            pluginSkill: a
                        });
                        continue
                    }
                    g.push(a)
                }
                return {
                    installedSkills: f,
                    unavailableSkills: g
                }
            },
            f: g,
            g: function(a) {
                let {
                    appIds: b,
                    noAuthCanonicalAppId: c,
                    appsContent: f,
                    availabilities: g,
                    links: h
                } = a, i = new Map(f?.map(a => [(0, e.a)(a.id), a]) ?? []), j = new Map(g.map(a => [(0, e.a)(a.id), a])), k = null == c ? null : (0, e.a)(c);
                return new Map(b.map(a => {
                    let b = (0, e.a)(a),
                        c = i.get(b)?.supported_auth_types,
                        f = j.get(b),
                        g = h.filter(a => (0, e.a)(a.connector_id) === b && "HIDDEN" !== a.visibility),
                        l = g.some(a => a.id.startsWith("implicit_link::")),
                        m = g.find(a => "REAUTH_REQUIRED" !== a.auth_status) ?? g[0],
                        n = null != m || f?.installed === !0,
                        o = null == f || !f.available || !f.installed && !f.can_install,
                        p = c?.length === 1 && "NONE" === c[0],
                        q = b === k && !n && !o && p && f?.isOpenAICatalogApp === !0;
                    return [b, {
                        canConnect: !q && !l && (null == c || c.length > 0),
                        canReconnect: null != m && null != (0, d.p)(m),
                        isConnected: n,
                        requiresReauth: m?.auth_status === "REAUTH_REQUIRED",
                        linkId: m?.id.startsWith("implicit_link::") ? void 0 : m?.id,
                        isUnavailable: o,
                        isDisabledByAdmin: f?.status === "DISABLED_BY_ADMIN" || f?.disabled_reason === "disabled_by_admin"
                    }]
                }))
            },
            h: function(a) {
                let {
                    hasLoadedSharePrincipals: b,
                    canSharePlugin: c,
                    isInstalled: d,
                    isShareDisabled: e,
                    pluginShareUrl: f
                } = a;
                return d && c || (c || e) && (null == f || b) ? "share" : null == f ? null : "copy-link"
            },
            i: function(a, b, c) {
                return i(a, b) && "local" === c.type ? c.path : null
            },
            j: i,
            k: function(a) {
                let {
                    connectorMetadata: b,
                    plugin: c
                } = a;
                return "IMPLICIT_CANONICAL_APP" !== c.summary.installPolicySource || 1 !== c.apps.length || b?.find(a => a.id === c.apps[0]?.id)?.toolSummaries?.length !== 0
            }
        })
    }),
    jEyg: (function(a, b, c) {
        var d = c("iRMi"),
            e = c("KvQL"),
            f = c("lAQI"),
            g = c("hOO0"),
            h = c("YWcr"),
            i = c("xWQV"),
            j = c("k7G6"),
            k = c("CV1W"),
            l = c("ueue");
        let m = f.F({
                navigationStartedAtMs: f.E().nonnegative().optional(),
                referrer: f.Q([f.z(d.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_UNSPECIFIED), f.z(d.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_DIRECTORY), f.z(d.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_CATEGORY), f.z(d.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_WORKSPACE), f.z(d.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_PERSONAL), f.z(d.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_SEARCH), f.z(d.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_DEEP_LINK)]),
                source: f.Q([f.z(d.CodexPluginSource.CODEX_PLUGIN_SOURCE_CURATED), f.z(d.CodexPluginSource.CODEX_PLUGIN_SOURCE_WORKSPACE), f.z(d.CodexPluginSource.CODEX_PLUGIN_SOURCE_PERSONAL), f.z(d.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER)])
            }),
            n = f.F({
                openInstallModal: f.z(!0).optional(),
                pluginDisplayName: f.L().trim().min(1).optional(),
                pluginProductEventContext: m.optional(),
                suggestedPluginConnect: f.F({
                    accountId: f.L().min(1),
                    userId: f.L().min(1),
                    chatgpt: i.a.optional()
                }).optional()
            }).loose();

        function o(a, b) {
            return (0, j.a)({
                breadcrumb: b?.breadcrumb,
                browseSearch: b?.browseSearch,
                hostId: b?.hostId,
                pluginId: a.plugin.id,
                ...(0, l.l)(a)
            })
        }

        function p(a, b) {
            return "remote" === a.source.type && ("local" === b || b === e.$b) ? a.remotePluginId : null
        }

        function q(a) {
            if (null == a || "object" != typeof a) return null;
            let b = Reflect.get(a, "pluginDetailDeepLinkMode");
            return "share" === b || "view" === b ? b : null
        }
        c.d(b, {}, {
            a: function(a, b) {
                let c = {
                    pluginProductEventContext: a
                };
                return null != b && (c.pluginDisplayName = b), c
            },
            b: function(a) {
                let {
                    hostId: b,
                    requestedPluginId: c,
                    explicitMarketplacePath: d,
                    explicitPluginName: f,
                    explicitRemoteMarketplaceName: g,
                    routeParams: h
                } = a;
                if ("local" === b) return {
                    directMarketplacePath: null,
                    directPluginName: f ?? c,
                    directRemoteMarketplaceName: e.Zb
                };
                let i = null != d || null != g;
                return {
                    directMarketplacePath: i ? d ?? null : h?.marketplacePath ?? null,
                    directPluginName: f ?? h?.pluginName ?? null,
                    directRemoteMarketplaceName: i ? g ?? null : h?.remoteMarketplaceName ?? null
                }
            },
            c: p,
            d: function(a) {
                return `/codex/open-app?target=plugin&plugin_id=${encodeURIComponent(a)}`
            },
            e: q,
            f: function(a) {
                let b = new URLSearchParams(a);
                return b.has("install") ? {
                    prompt: b.get("prompt")?.replace(/\r\n/g, "\n").trim() || null
                } : null
            },
            g: o,
            h: function(a, b) {
                let c = (0, h.s)(a);
                if (null == c) return null;
                let d = b?.remotePluginId != null && (0, e.gi)(b.remotePluginId) ? b.remotePluginId : null;
                return (null == d && (0, e.gi)(c) && (d = c), b?.requireRemotePluginId && null == d) ? null : (0, j.a)({
                    hostId: b?.hostId,
                    pluginId: d ?? c
                })
            },
            i: function a(b) {
                let {
                    allowUniqueNameFallback: c = !1,
                    fallbackRequestedPluginId: d,
                    plugins: f,
                    requestedPluginId: g
                } = b;
                if ((0, e.gi)(g)) {
                    let a = f.find(a => {
                        var b, c;
                        return b = a, c = g, "local" === b.plugin.source.type && b.plugin.shareContext?.remotePluginId != null && (0, e.Pi)(b.plugin.shareContext.remotePluginId, c)
                    });
                    if (null != a) return a
                }
                let h = f.find(a => {
                    var b, c;
                    return b = a, c = g, (0, e.gi)(c) ? "remote" === b.plugin.source.type && null != b.plugin.remotePluginId && (0, e.Pi)(b.plugin.remotePluginId, c) : b.plugin.id === c
                }) ?? null;
                if (null != h) return h;
                if (null != d && d !== g) {
                    let b = a({
                        allowUniqueNameFallback: c,
                        plugins: f,
                        requestedPluginId: d
                    });
                    if (null != b) return b
                }
                if (!c || (0, e.gi)(g)) return null;
                let i = g.lastIndexOf("@"),
                    j = i > 0 ? g.slice(0, i) : g,
                    k = f.filter(a => a.plugin.name === j);
                return 1 === k.length ? k[0] : null
            },
            j: function(a) {
                let b = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    c = n.safeParse(a);
                return (c.success ? c.data.pluginProductEventContext : void 0) ?? {
                    referrer: null != q(a) || b ? d.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_DEEP_LINK : d.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_UNSPECIFIED,
                    source: d.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER
                }
            },
            k: function(a) {
                let b = n.safeParse(a);
                return b.success ? b.data.pluginDisplayName ?? null : null
            },
            l: function(a) {
                let b = new URLSearchParams(a),
                    c = b.get("marketplacePath")?.trim(),
                    d = b.get("remoteMarketplaceName")?.trim(),
                    e = b.get("pluginName")?.trim(),
                    f = b.get("hostId")?.trim() || null,
                    g = !!c || !!d;
                return c && d || g && !e || !g && e ? null : {
                    marketplacePath: c || null,
                    pluginName: e || null,
                    remoteMarketplaceName: d || null,
                    hostId: f
                }
            },
            m: function(a, b) {
                let c = p(a.plugin, b);
                if (null != c) return (0, k.e)(c);
                let d = o(a, {
                    hostId: b
                });
                return (0, k.e)("hosts", b, "plugins", a.plugin.id) + new URL(d, "https://chatgpt.com").search
            },
            n: function(a) {
                let b = n.safeParse(a);
                return b.success && !0 === b.data.openInstallModal
            },
            o: function(a) {
                let b = n.safeParse(a);
                return b.success ? b.data.suggestedPluginConnect ?? null : null
            },
            p: function(a) {
                let {
                    appIds: b,
                    canonicalAppId: c
                } = a;
                return (null == c ? null : b.find(a => (0, g.a)(a) === (0, g.a)(c))) ?? (1 === b.length ? b[0] ?? null : null)
            },
            q: function(a) {
                let {
                    hasHandledNavigation: b,
                    isInstallBlocked: c,
                    isPluginInstalled: d,
                    shouldOpenInstall: e
                } = a;
                return e && !b && (d || !c)
            }
        })
    }),
    k7G6: (function(a, b, c) {
        var d = c("KvQL");

        function e(a) {
            return f({
                pluginId: a,
                pluginName: a,
                remoteMarketplaceName: d.Zb,
                hostId: "local"
            })
        }

        function f(a) {
            return (a.hostId ?? "local") === "local" && null == a.marketplacePath ? (0, d.oe)({
                pluginId: a.pluginName ?? a.pluginId,
                deepLinkMode: a.deepLinkMode,
                breadcrumb: a.breadcrumb,
                browseSearch: a.browseSearch
            }) : (0, d.oe)(a)
        }
        c("Ot7V"), c.d(b, {}, {
            a: f,
            b: e,
            c: function(a, b, c) {
                b(e(a), c)
            }
        })
    }),
    R4kT: (function(a, b, c) {
        var d = c("kfGJ");
        c.d(b, {}, {
            a: function(a, b) {
                return a === d.a && !0 === b
            }
        })
    }),
    lhA2: (function(a, b, c) {
        var d = c("KvQL"),
            e = c("oliF"),
            f = c("kCRh"),
            g = c("sFpz"),
            h = c("hsuC"),
            i = c("MM6n"),
            j = c("MWSW"),
            k = c("UuTC"),
            l = c("aV4z"),
            m = c("sL0h"),
            n = c("cAdi"),
            o = c("u6oA"),
            p = c("VK1X"),
            q = c("ZdDq");
        let r = [e, f, g, h, i, j, k, l, m, n, o, p, c("mOOp"), q, c("Wmm1"), c("iXo5"), c("clRy"), c("C1cw"), c("dRs8"), c("orzE"), c("vTvp"), c("nu7J"), c("TF6s"), c("YezP"), c("jGMn")].map(a => `data:image/svg+xml,${encodeURIComponent(a)}`);
        c.d(b, {}, {
            a: function(a) {
                let b = (0, d.Ki)(a) ? a.replace(/^plugins~/, "") : a,
                    c = 0;
                for (let a = 0; a < b.length; a += 1) c = (31 * c + b.charCodeAt(a)) % r.length;
                return r[c] ?? ""
            }
        })
    }),
    nMfq: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a) {
                return "remote" === a.source.type && a.installed && "INSTALLED_BY_DEFAULT" === a.installPolicy
            }
        })
    }),
    tlx5: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a, b) {
                null == b || null != a && (a.defaultPrevented || 0 !== a.button || a.metaKey || a.ctrlKey || a.shiftKey || a.altKey) || (a?.preventDefault(), b())
            }
        })
    }),
    v70x: (function(a, b, c) {
        var d = c("QosV"),
            e = c("zPtR"),
            f = c("bTvG"),
            g = c("iRMi"),
            h = c("mfKi"),
            i = c("CjTC"),
            j = c("zd8w"),
            k = c("rEML"),
            l = c("lAQI"),
            m = c("yGJW"),
            n = c("oom3"),
            o = c("OMIV"),
            p = c("WFY2"),
            q = c("xWQV");
        let r = new WeakSet,
            s = new WeakMap,
            t = ["account_selector", "callback_path", "prompt", "q", "query", "search", "snapshot"];

        function u(a) {
            switch (a) {
                case g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_WORKSPACE:
                    return "CHATGPT_APP_PAGE_NAME_APP_WORKSPACE";
                case g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_DIRECTORY:
                case g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_CATEGORY:
                case g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_PERSONAL:
                case g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_SEARCH:
                    return "CHATGPT_APP_PAGE_NAME_APP_DIRECTORY";
                case g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_UNSPECIFIED:
                case g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_DEEP_LINK:
                case g.CodexPluginPageReferrer.UNRECOGNIZED:
                    return "CHATGPT_APP_PAGE_NAME_UNSPECIFIED"
            }
        }

        function v(a) {
            let b = window.location.hash.indexOf("?"),
                c = b < 0 ? "" : window.location.hash.slice(b + 1),
                d = [new URLSearchParams(window.location.search).get("referrer"), new URLSearchParams(c).get("referrer"), s.get(a), document.referrer].map(w).find(a => null != a),
                e = w(window.location.href);
            return null != e && s.set(a, e), d
        }

        function w(a) {
            if (!a) return;
            if (/^[a-zA-Z0-9_-]{1,128}$/.test(a)) return a;
            let b = (0, e.f)(a, t);
            if (null != b) try {
                let a = new URL(b);
                return "https:" === a.protocol || "http:" === a.protocol || "app:" === a.protocol && "-" === a.hostname ? b : void 0
            } catch {
                return
            }
        }
        let x = l.F({
            pluginDirectoryEntrypoint: l.Q([l.z(g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_DIRECT), l.z(g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SETTINGS), l.z(g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SIDEBAR), l.z(g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER)]).optional()
        }).loose();

        function y(a) {
            let {
                categoryKey: b,
                directoryTab: c,
                isGlobalSearch: d,
                searchQuery: e
            } = a;
            if ("" !== e) return {
                pageName: g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_SEARCH,
                source: d ? g.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER : A(c)
            };
            if (null != b) return {
                pageName: g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_CATEGORY,
                source: A(c)
            };
            switch (c) {
                case "openai":
                    return {
                        pageName: g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DIRECTORY, source: g.CodexPluginSource.CODEX_PLUGIN_SOURCE_CURATED
                    };
                case "workspace":
                    return {
                        pageName: g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_WORKSPACE, source: g.CodexPluginSource.CODEX_PLUGIN_SOURCE_WORKSPACE
                    };
                case "personal":
                    return {
                        pageName: g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_PERSONAL, source: g.CodexPluginSource.CODEX_PLUGIN_SOURCE_PERSONAL
                    }
            }
        }

        function z(a) {
            let {
                canonicalCategoryIds: b,
                directoryTab: c,
                selectedCategoryTitle: d
            } = a;
            if ("openai" !== c || null == d) return;
            let e = d.trim().toLowerCase().replaceAll("-", " ");
            if ("" !== e) return b.find(a => a.trim().toLowerCase().replaceAll("-", " ") === e)
        }

        function A(a) {
            switch (a) {
                case "openai":
                    return g.CodexPluginSource.CODEX_PLUGIN_SOURCE_CURATED;
                case "workspace":
                    return g.CodexPluginSource.CODEX_PLUGIN_SOURCE_WORKSPACE;
                case "personal":
                    return g.CodexPluginSource.CODEX_PLUGIN_SOURCE_PERSONAL
            }
        }

        function B(a) {
            switch (a) {
                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DIRECTORY:
                    return g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_DIRECTORY;
                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_CATEGORY:
                    return g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_CATEGORY;
                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_WORKSPACE:
                    return g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_WORKSPACE;
                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_PERSONAL:
                    return g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_PERSONAL;
                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_SEARCH:
                    return g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_SEARCH;
                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_UNSPECIFIED:
                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DETAILS:
                case g.CodexPluginPageName.UNRECOGNIZED:
                    return g.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_UNSPECIFIED
            }
        }
        c.d(b, {
            a: () => z,
            b: () => y,
            c: () => i.a
        }, {
            d: function(a, b) {
                let {
                    action: c,
                    chatgpt: d,
                    connectorId: e,
                    errorType: f,
                    installAttemptId: g,
                    plugin: j,
                    result: k,
                    source: l,
                    sourceAttributionId: n,
                    suggestionId: o,
                    surface: p,
                    voiceSessionId: r
                } = b;
                if ((0, q.d)(a, d, {
                        action: c,
                        connectorId: e,
                        errorType: f,
                        installAttemptId: g,
                        pluginId: (0, i.a)(j) ?? j.id,
                        result: k,
                        sourceAttributionId: n,
                        suggestionId: o,
                        voiceSessionId: r
                    })) return;
                let s = c === h.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_INSTALL && k === h.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_INITIATED;
                (0, m.a)(a, h.CodexPluginAction, {
                    action: c,
                    connectorId: e,
                    errorType: f,
                    installAttemptId: g,
                    pluginId: j.id,
                    voiceSessionId: s ? r : void 0,
                    remotePluginId: (0, i.a)(j),
                    result: k,
                    source: l,
                    ...s && void 0 !== n ? {
                        sourceAttributionId: n
                    } : {},
                    suggestionId: o,
                    surface: p
                })
            },
            e: function(a, b) {
                let {
                    categoryId: c,
                    plugin: d,
                    position: e,
                    sectionId: f,
                    source: h,
                    surface: j,
                    target: k
                } = b;
                (0, m.a)(a, g.CodexPluginClick, {
                    categoryId: c,
                    pluginId: d.id,
                    position: e,
                    remotePluginId: (0, i.a)(d),
                    sectionId: f,
                    source: h,
                    surface: j,
                    target: k
                })
            },
            f: function(a, b) {
                let {
                    placement: c,
                    pluginId: d,
                    remotePluginId: e,
                    source: f
                } = b;
                (0, m.a)(a, g.CodexPluginClick, {
                    categoryId: c?.kind === "category" ? c.categoryId : void 0,
                    pluginId: d,
                    position: c?.position,
                    remotePluginId: e,
                    sectionId: c?.kind === "home" ? c.sectionId : void 0,
                    source: f,
                    surface: g.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_DIRECTORY,
                    target: g.CodexPluginClickTarget.CODEX_PLUGIN_CLICK_TARGET_PLUGIN_ROW
                })
            },
            g: function(a) {
                let b, c, e, h, k = (0, d.c)(26),
                    {
                        scope: l,
                        enabled: n,
                        navigationKey: p,
                        navigationStartedAtMs: q,
                        plugin: s,
                        referrer: t,
                        source: w
                    } = a,
                    x = void 0 === n || n,
                    y = (0, j.useRef)(null),
                    z = (0, j.useRef)(null),
                    A = s?.summary.id,
                    B = s?.summary ?? null;
                k[0] !== B ? (b = (0, i.a)(B), k[0] = B, k[1] = b) : b = k[1];
                let C = b;
                k[2] !== s || k[3] !== A || k[4] !== t || k[5] !== C || k[6] !== l || k[7] !== w ? (c = (a, b, c) => {
                    (0, m.a)(l, g.CodexPluginPageView, {
                        enabled: s?.summary.enabled,
                        installed: s?.summary.installed,
                        marketplaceName: s?.marketplaceName,
                        pageName: g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DETAILS,
                        pluginId: A,
                        pluginSourceType: s?.summary.source.type,
                        referrer: t,
                        remotePluginId: C,
                        source: w
                    });
                    let d = v(l);
                    C && (0, m.a)(l, f.i, {
                        connectorId: C,
                        name: "CHATGPT_APP_PAGE_NAME_APP_DETAILS",
                        referrer: u(t),
                        referrerUrl: d
                    }), (0, m.a)(l, g.CodexPluginDetailPageLoaded, {
                        isFirstVisit: b,
                        newAppLifecycleEnabled: c,
                        loadDurationMs: Math.max(0, Math.round(performance.now() - a))
                    })
                }, k[2] = s, k[3] = A, k[4] = t, k[5] = C, k[6] = l, k[7] = w, k[8] = c) : c = k[8];
                let D = (0, j.useEffectEvent)(c);
                k[9] !== x || k[10] !== D || k[11] !== p || k[12] !== q || k[13] !== A || k[14] !== C || k[15] !== l ? (e = () => {
                    if (!x) return;
                    if (z.current?.navigationKey !== p) {
                        let a = !r.has(l);
                        r.add(l), z.current = {
                            isFirstVisit: a,
                            navigationKey: p,
                            newAppLifecycleEnabled: (0, o.b)(l, "403472035"),
                            startedAtMs: q ?? performance.now()
                        }
                    }
                    if (null == A) return;
                    let a = `${p}\0${A}\0${C??""}`;
                    if (y.current === a) return;
                    let {
                        isFirstVisit: b,
                        startedAtMs: c
                    } = z.current;
                    y.current = a, D(c, b, z.current.newAppLifecycleEnabled)
                }, k[9] = x, k[10] = D, k[11] = p, k[12] = q, k[13] = A, k[14] = C, k[15] = l, k[16] = e) : e = k[16], k[17] !== x || k[18] !== p || k[19] !== q || k[20] !== A || k[21] !== t || k[22] !== C || k[23] !== l || k[24] !== w ? (h = [x, p, q, A, t, C, l, w], k[17] = x, k[18] = p, k[19] = q, k[20] = A, k[21] = t, k[22] = C, k[23] = l, k[24] = w, k[25] = h) : h = k[25], (0, j.useEffect)(e, h)
            },
            h: function(a) {
                let b, c, e, h, i, k, l, n = (0, d.c)(33),
                    {
                        scope: o,
                        categoryId: p,
                        enabled: q,
                        entrypoint: r,
                        pageName: t,
                        searchQuery: w,
                        source: x
                    } = a,
                    y = (0, j.useRef)(!1),
                    z = (0, j.useRef)(null),
                    A = (0, j.useRef)(g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_UNSPECIFIED),
                    C = (0, j.useRef)("CHATGPT_APP_PAGE_NAME_UNSPECIFIED"),
                    D = (0, j.useRef)("");
                n[0] !== r || n[1] !== o ? (b = () => {
                    (0, m.a)(o, g.CodexPluginDirectoryImpression, {
                        entrypoint: r
                    }), (0, m.a)(o, f.g, {
                        entrypoint: function(a) {
                            switch (a) {
                                case g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SETTINGS:
                                    return "CHATGPT_APP_DIRECTORY_ENTRYPOINT_SETTINGS";
                                case g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SIDEBAR:
                                    return "CHATGPT_APP_DIRECTORY_ENTRYPOINT_SIDEBAR";
                                case g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_UNSPECIFIED:
                                case g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_DIRECT:
                                case g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER:
                                case g.CodexPluginDirectoryEntrypoint.UNRECOGNIZED:
                                    return "CHATGPT_APP_DIRECTORY_ENTRYPOINT_UNSPECIFIED"
                            }
                        }(r)
                    })
                }, n[0] = r, n[1] = o, n[2] = b) : b = n[2];
                let E = (0, j.useEffectEvent)(b);
                n[3] !== p || n[4] !== t || n[5] !== o || n[6] !== x ? (c = a => {
                    (0, m.a)(o, g.CodexPluginPageView, {
                        ...t === g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_CATEGORY && null != p ? {
                            categoryId: p
                        } : {},
                        pageName: t,
                        referrer: a,
                        source: x
                    });
                    let b = v(o),
                        c = function(a) {
                            switch (a) {
                                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_WORKSPACE:
                                    return "CHATGPT_APP_PAGE_NAME_APP_WORKSPACE";
                                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DETAILS:
                                    return "CHATGPT_APP_PAGE_NAME_APP_DETAILS";
                                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DIRECTORY:
                                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_CATEGORY:
                                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_PERSONAL:
                                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_SEARCH:
                                    return "CHATGPT_APP_PAGE_NAME_APP_DIRECTORY";
                                case g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_UNSPECIFIED:
                                case g.CodexPluginPageName.UNRECOGNIZED:
                                    return "CHATGPT_APP_PAGE_NAME_UNSPECIFIED"
                            }
                        }(t);
                    C.current !== c && ((0, m.a)(o, f.i, {
                        name: c,
                        referrer: u(a),
                        referrerUrl: b
                    }), C.current = c)
                }, n[3] = p, n[4] = t, n[5] = o, n[6] = x, n[7] = c) : c = n[7];
                let F = (0, j.useEffectEvent)(c);
                n[8] !== o || n[9] !== x ? (e = () => {
                    (0, m.a)(o, g.CodexPluginClick, {
                        source: x,
                        target: g.CodexPluginClickTarget.CODEX_PLUGIN_CLICK_TARGET_SUBMIT_SEARCH
                    })
                }, n[8] = o, n[9] = x, n[10] = e) : e = n[10];
                let G = (0, j.useEffectEvent)(e);
                n[11] !== p || n[12] !== q || n[13] !== E || n[14] !== F || n[15] !== t || n[16] !== o || n[17] !== x ? (h = () => {
                    if (!q) {
                        y.current = !1, z.current = null, A.current = g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_UNSPECIFIED, C.current = "CHATGPT_APP_PAGE_NAME_UNSPECIFIED", s.delete(o);
                        return
                    }
                    y.current || (y.current = !0, E());
                    let a = t === g.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_CATEGORY ? p ?? "" : "",
                        b = `${t}\0${x}\0${a}`;
                    z.current !== b && (F(B(A.current)), z.current = b, A.current = t)
                }, n[11] = p, n[12] = q, n[13] = E, n[14] = F, n[15] = t, n[16] = o, n[17] = x, n[18] = h) : h = n[18], n[19] !== p || n[20] !== q || n[21] !== r || n[22] !== t || n[23] !== o || n[24] !== x ? (i = [p, q, r, t, o, x], n[19] = p, n[20] = q, n[21] = r, n[22] = t, n[23] = o, n[24] = x, n[25] = i) : i = n[25], (0, j.useEffect)(h, i), n[26] !== q || n[27] !== G || n[28] !== w ? (k = () => {
                    if (!q || "" === w) {
                        D.current = "";
                        return
                    }
                    let a = setTimeout(() => {
                        D.current !== w && (G(), D.current = w)
                    }, 1500);
                    return () => {
                        clearTimeout(a)
                    }
                }, n[26] = q, n[27] = G, n[28] = w, n[29] = k) : k = n[29], n[30] !== q || n[31] !== w ? (l = [q, w], n[30] = q, n[31] = w, n[32] = l) : l = n[32], (0, j.useEffect)(k, l)
            },
            i: function(a) {
                let b, c, e, f, h, i, j, l, m, o, p = (0, d.c)(27);
                p[0] !== a ? (b = void 0 === a ? {} : a, p[0] = a, p[1] = b) : b = p[1];
                let {
                    directoryTab: q
                } = b, r = (0, k.Z)();
                if (p[2] !== q || p[3] !== r.key || p[4] !== r.search || p[5] !== r.state) {
                    let a = new URLSearchParams(r.search),
                        b = a.get(n.a),
                        d = q ?? "openai";
                    null == q && ("workspace" === b || "teams" === b ? d = "workspace" : "personal" === b && (d = "personal"));
                    let k = a.get("category"),
                        {
                            pageName: o,
                            source: s
                        } = y({
                            categoryKey: k,
                            directoryTab: d,
                            isGlobalSearch: !0,
                            searchQuery: e = (c = a.get("search") ?? "").trim().toLowerCase()
                        });
                    f = s, h = k, i = d, p[14] !== r.key || p[15] !== r.state ? (j = function(a) {
                        let {
                            explicitEntrypoint: b,
                            locationKey: c,
                            locationState: d
                        } = a;
                        if (null != b) return b;
                        let e = x.safeParse(d);
                        return e.success && null != e.data.pluginDirectoryEntrypoint ? e.data.pluginDirectoryEntrypoint : "default" === c ? g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_DIRECT : g.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER
                    }({
                        locationKey: r.key,
                        locationState: r.state
                    }), p[14] = r.key, p[15] = r.state, p[16] = j) : j = p[16], l = o, m = B(o), p[2] = q, p[3] = r.key, p[4] = r.search, p[5] = r.state, p[6] = c, p[7] = e, p[8] = f, p[9] = h, p[10] = i, p[11] = j, p[12] = l, p[13] = m
                } else c = p[6], e = p[7], f = p[8], h = p[9], i = p[10], j = p[11], l = p[12], m = p[13];
                return p[17] !== r.key || p[18] !== c || p[19] !== e || p[20] !== f || p[21] !== h || p[22] !== i || p[23] !== j || p[24] !== l || p[25] !== m ? (o = {
                    categoryKey: h,
                    directoryTab: i,
                    entrypoint: j,
                    pageName: l,
                    referrer: m,
                    routeKey: r.key,
                    searchQuery: c,
                    searchQueryNormalized: e,
                    source: f
                }, p[17] = r.key, p[18] = c, p[19] = e, p[20] = f, p[21] = h, p[22] = i, p[23] = j, p[24] = l, p[25] = m, p[26] = o) : o = p[26], o
            },
            j: function(a) {
                let b, c, e, f = (0, d.c)(13),
                    {
                        scope: h,
                        hasResults: i,
                        isReady: k,
                        searchQuery: l,
                        startedAtMs: n
                    } = a,
                    o = (0, j.useRef)(""),
                    q = (0, j.useRef)(null);
                f[0] !== h ? (b = (a, b) => {
                    try {
                        (0, m.a)(h, g.CodexPluginSearchResultsLoaded, {
                            hasResults: a,
                            searchDurationMs: b
                        })
                    } catch (a) {
                        p.a.error("Failed to log plugin search latency analytics", {
                            safe: {},
                            sensitive: {
                                error: a
                            }
                        })
                    }
                }, f[0] = h, f[1] = b) : b = f[1];
                let r = (0, j.useEffectEvent)(b);
                f[2] !== i || f[3] !== k || f[4] !== r || f[5] !== l || f[6] !== n ? (c = () => {
                    if ("" === l) {
                        o.current = "", q.current = null;
                        return
                    }
                    if (o.current === l) return;
                    q.current?.query !== l && (q.current = {
                        hasResults: null,
                        query: l,
                        readyAtMs: null,
                        startedAtMs: n ?? performance.now()
                    });
                    let a = q.current;
                    k && null == a.readyAtMs && (a.hasResults = i, a.readyAtMs = performance.now());
                    let {
                        hasResults: b,
                        readyAtMs: c
                    } = a;
                    if (null == b || null == c) return;
                    let d = setTimeout(() => {
                        q.current === a && (q.current = null, o.current = l, r(b, Math.max(0, Math.round(c - a.startedAtMs))))
                    }, Math.max(0, 1500 - (performance.now() - a.startedAtMs)));
                    return () => {
                        clearTimeout(d)
                    }
                }, f[2] = i, f[3] = k, f[4] = r, f[5] = l, f[6] = n, f[7] = c) : c = f[7], f[8] !== i || f[9] !== k || f[10] !== l || f[11] !== n ? (e = [i, k, l, n], f[8] = i, f[9] = k, f[10] = l, f[11] = n, f[12] = e) : e = f[12], (0, j.useEffect)(c, e)
            }
        })
    }),
    IVVU: (function(a, b, c) {
        var d = c("Q840"),
            e = c("KvQL"),
            f = c("CjTC"),
            g = c("lAQI"),
            h = c("OWtl"),
            i = c("GkpV"),
            j = c("JYRT"),
            k = c("jBHQ");
        let l = "1349514884",
            m = g.F({
                mention_surfaces_by_plugin_id: g.J(g.L(), g.g(g.L().min(1)).nullable().catch(null))
            }),
            n = g.F({
                hidden_plugin_ids: g.g(g.L()).default([])
            }).catch({
                hidden_plugin_ids: []
            });

        function o(a) {
            return {
                hiddenPluginIds: n.parse(a).hidden_plugin_ids
            }
        }
        let p = (0, d.c)(h.a, a => {
                let {
                    get: b
                } = a;
                return b(i.b) ? [] : [e.nb]
            }),
            q = (0, d.c)(h.a, a => {
                let {
                    get: b
                } = a;
                return b(k.a, i.a) ? [] : [e.nb]
            }),
            r = (0, d.c)(h.a, a => {
                let {
                    get: b
                } = a, {
                    hiddenPluginIds: c
                } = o(b(j.a, l)?.value);
                return {
                    hiddenPluginIds: [...c, ...b(p)]
                }
            }),
            s = (0, d.c)(h.a, a => {
                let {
                    get: b
                } = a, c = b(j.a, l)?.value, d = m.safeParse(c), e = new Map;
                for (let [a, b] of Object.entries(d.data?.mention_surfaces_by_plugin_id ?? {})) null != b && e.set(a, b);
                return e
            });
        c.d(b, {}, {
            a: p,
            b: q,
            c: function(a, b) {
                return b.has(a.id) || null != a.requestedId && b.has(a.requestedId) || "GLOBAL" === a.scope && "LISTED" === a.discoverability && null != a.name && b.has(`${a.name}@${e.dd}`)
            },
            d: function(a, b, c) {
                let {
                    plugin: d
                } = a, e = (0, f.a)(d) ?? d.id;
                return c.get(e)?.includes(b) ?? !0
            },
            e: o,
            f: s,
            g: r
        })
    }),
    H7Ld: (function(a, b, c) {
        var d = c("YWcr"),
            e = c("MX6A");
        c.d(b, {}, {
            a: "deep-research-workflow@openai-curated-remote",
            b: function(a) {
                let {
                    defaultPrompt: b,
                    pluginDisplayName: c,
                    pluginId: f
                } = a, g = `[@${c}](${(0,e.a)((0,d.w)(f))})`;
                return `${g} ${b?.trim()??""}`
            },
            c: function(a) {
                return a?.map(a => a.trim()).find(a => a.length > 0) ?? null
            }
        })
    }),
    C0re: (function(a, b, c) {
        var d = c("KvQL");
        let e = ["plugins"];

        function f(a) {
            for (var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            return [...e, "host", a, ...c]
        }

        function g(a) {
            return "local" === a || a === d.$b
        }
        async function h(a, b) {
            let c = {
                queryKey: b
            };
            await a.cancelQueries(c), await a.invalidateQueries(c, {
                cancelRefetch: !1
            })
        }
        c.d(b, {}, {
            a: e,
            b: f,
            c: function(a) {
                for (var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                return [...e, "directory", a, ...c]
            },
            d: function(a, b) {
                return g(a) ? [...e, b, a] : f(a, b)
            },
            e: function(a, b) {
                return h(a, f(b))
            },
            f: g,
            g: h
        })
    }),
    M3gf: (function(a, b, c) {
        var d = c("KvQL"),
            e = c("Dgwo"),
            f = c("WFY2");
        c.d(b, {}, {
            a: async function(a, b, c) {
                try {
                    let g = await (0, e.b)(a, b).sendRequest("marketplace/add", c);
                    return f.a.info("plugin_marketplace_add_succeeded", {
                        safe: {
                            ...(0, d.Kg)(c),
                            alreadyAdded: g.alreadyAdded,
                            marketplaceName: g.marketplaceName
                        },
                        sensitive: (0, d.Lg)(c)
                    }), g
                } catch (a) {
                    throw f.a.warning("plugin_marketplace_add_failed", {
                        safe: (0, d.Kg)(c),
                        sensitive: {
                            ...(0, d.Lg)(c),
                            error: a
                        }
                    }), a
                }
            },
            b: async function(a, b, c) {
                f.a.info("plugin_install_started", {
                    safe: (0, d._g)(c),
                    sensitive: {
                        hostId: b,
                        ...(0, d.$g)(c)
                    }
                });
                try {
                    let g = await (0, e.b)(a, b).sendRequest("plugin/install", c);
                    return f.a.info("plugin_install_succeeded", {
                        safe: (0, d._g)(c),
                        sensitive: {
                            hostId: b,
                            ...(0, d.$g)(c)
                        }
                    }), g
                } catch (a) {
                    throw f.a.warning("plugin_install_failed", {
                        safe: {
                            ...(0, d._g)(c),
                            errorCategory: (0, d.Zg)(a)
                        },
                        sensitive: {
                            ...(0, d.$g)(c),
                            hostId: b,
                            error: a
                        }
                    }), a
                }
            },
            c: async function(a, b, c) {
                try {
                    let d = await (0, e.b)(a, b).sendRequest("plugin/uninstall", c);
                    return f.a.info("plugin_uninstall_succeeded", {
                        safe: {
                            pluginId: c.pluginId
                        },
                        sensitive: {}
                    }), d
                } catch (a) {
                    throw f.a.warning("plugin_uninstall_failed", {
                        safe: {
                            pluginId: c.pluginId
                        },
                        sensitive: {
                            error: a
                        }
                    }), a
                }
            }
        })
    }),
    WzdM: (function(a, b, c) {
        var d = c("oo2L");
        c.d(b, {}, {
            a: function(a) {
                return a.release.display_name.trim() || a.name
            },
            b: function(a) {
                return {
                    [d.b]: ({
                        catalog: "CONNECTOR_SETTING",
                        chatgpt: "PROMPT_TEXT_AREA",
                        codex: "CODEX",
                        tpp: "TPP"
                    })[a ?? "catalog"]
                }
            }
        })
    }),
    ugfi: (function(a, b, c) {
        var d = c("QosV"),
            e = c("mfKi"),
            f = c("irkb"),
            g = c("xSOA"),
            h = c("Q840"),
            i = c("ZGX8"),
            j = c("Qgfj"),
            k = c("Wf1j"),
            l = c("Dgwo"),
            m = c("HUHI"),
            n = c("uc7r"),
            o = c("OiCI"),
            p = c("THSC"),
            q = c("SGsN"),
            r = c("C0re"),
            s = c("EEop"),
            t = c("vLsY"),
            u = c("a4MG"),
            v = c("sLlu"),
            w = c("OWtl"),
            x = c("oiUH"),
            y = c("kfGJ"),
            z = c("bPa2"),
            A = c("WFY2"),
            B = c("HFSu"),
            C = c("OF5O"),
            D = c("p84t"),
            E = c("H0Gm"),
            F = c("md5w"),
            G = c("v70x"),
            H = c("M3gf"),
            I = c("WzdM"),
            J = c("PmQd"),
            K = c("jShI"),
            L = c("cLdu"),
            M = c("ueue");
        let N = ["user-saved-config"],
            O = (0, j.f)({
                enabledSuccess: {
                    id: "plugins.card.enableSuccess",
                    defaultMessage: "{pluginName} plugin enabled"
                },
                disabledSuccess: {
                    id: "plugins.card.disableSuccess",
                    defaultMessage: "{pluginName} plugin disabled"
                },
                toggleError: {
                    id: "plugins.card.toggleError",
                    defaultMessage: "Failed to update plugin"
                },
                uninstallSuccess: {
                    id: "plugins.card.uninstallSuccess",
                    defaultMessage: "{pluginName} plugin uninstalled"
                },
                uninstallError: {
                    id: "plugins.card.uninstallError",
                    defaultMessage: "Failed to uninstall plugin"
                },
                marketplacesUpgradeSuccess: {
                    id: "plugins.marketplace.upgradeAllSuccess",
                    defaultMessage: "Marketplaces upgraded"
                },
                marketplaceUpgradeSuccess: {
                    id: "plugins.marketplace.upgradeSuccess",
                    defaultMessage: "{marketplaceName} marketplace upgraded"
                },
                marketplacesUpgradeError: {
                    id: "plugins.marketplace.upgradeAllError",
                    defaultMessage: "Some marketplaces failed to upgrade"
                },
                marketplaceUpgradeError: {
                    id: "plugins.marketplace.upgradeError",
                    defaultMessage: "Failed to upgrade marketplace"
                },
                marketplacesUpgradeRequestError: {
                    id: "plugins.marketplace.upgradeAllRequestError",
                    defaultMessage: "Failed to upgrade marketplaces"
                },
                skillCatalogReloadError: {
                    id: "plugins.skillCatalog.reloadError",
                    defaultMessage: "Plugin changed, but skills couldn't refresh. Reload skills before starting a new chat"
                }
            });

        function P(a) {
            A.a.error("Failed to refresh plugins after updating enabled state", {
                safe: {},
                sensitive: {
                    error: a
                }
            })
        }

        function Q(a) {
            var b;
            let [c, d] = a;
            return null != (b = d) && "object" == typeof b && "plugins" in b && Array.isArray(b.plugins) ? [
                [c, d]
            ] : []
        }

        function R(a) {
            A.a.error("Failed to refresh plugins after plugin uninstall", {
                safe: {},
                sensitive: {
                    error: a
                }
            })
        }

        function S(a, b, c, d) {
            let e = (0, L.i)(b);
            e && null == d || (a.setQueriesData({
                queryKey: [...(0, r.d)(b, "installed"), ...e ? ["hosted", d] : []]
            }, a => a?.some(a => a.plugin.id === c) ? a.filter(a => a.plugin.id !== c) : a), e || (a.setQueriesData({
                queryKey: (0, r.b)(b, "marketplace-kind")
            }, a => null == a ? a : T(a, c)), a.setQueriesData({
                queryKey: (0, r.b)(b, "list")
            }, a => {
                if (null == a) return a;
                let b = T(a.plugins, c);
                return b === a.plugins ? a : {
                    ...a,
                    plugins: b
                }
            })), a.setQueriesData({
                queryKey: (0, s.i)(b, d)
            }, a => null != a && a.summary.id === c && (a.summary.installed || a.summary.enabled) ? {
                ...a,
                summary: {
                    ...a.summary,
                    enabled: !1,
                    installed: !1
                }
            } : a))
        }

        function T(a, b) {
            return a.some(a => a.plugin.id === b && (a.plugin.installed || a.plugin.enabled)) ? a.map(a => a.plugin.id === b ? {
                ...a,
                plugin: {
                    ...a.plugin,
                    enabled: !1,
                    installed: !1
                }
            } : a) : a
        }
        async function U(a) {
            let {
                scope: b,
                hostId: c,
                intl: d,
                queryClient: e
            } = a;
            try {
                await (0, K.b)({
                    scope: b,
                    hostId: c,
                    queryClient: e
                })
            } catch (f) {
                A.a.error("plugin_skill_catalog_reload_failed_after_mutation", {
                    safe: {
                        hostId: c
                    },
                    sensitive: {
                        error: f
                    }
                });
                let a = b.get(q.f).warning(d.formatMessage(O.skillCatalogReloadError), {
                    duration: 0,
                    primaryAction: {
                        label: d.formatMessage({
                            id: "skills.page.refreshSkills",
                            defaultMessage: "Refresh"
                        }),
                        onClick: async () => {
                            a.close(), await Promise.all([U({
                                scope: b,
                                hostId: c,
                                intl: d,
                                queryClient: e
                            }), W(e, c), (0, v.a)(e, m.a)])
                        }
                    }
                })
            }
        }
        async function V(a, b, c, d) {
            await Promise.all([(0, v.a)(a, n.a), W(a, b, null != d && d !== c)])
        }
        async function W(a, b) {
            let c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                d = (0, L.i)(b);
            await Promise.all([(0, J.b)(a, d || c ? "account" : {
                hostId: b
            }), ...X(d).map(b => (0, v.a)(a, b))])
        }

        function X(a) {
            return [m.b, ["chatgpt-system-hints", "plugins"], ...a ? [] : [u.e, z.a, x.a, p.a, u.f, N]]
        }
        c.d(b, {}, {
            a: async function(a) {
                let b = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                await Promise.all([M.a, ...X(b)].map(a))
            },
            b: async function(a) {
                let {
                    scope: b,
                    disableBundledAutoInstall: c = !0,
                    hostId: d,
                    marketplaceName: e,
                    pluginId: f,
                    pluginName: g,
                    queryClient: h,
                    requestPluginId: j,
                    signal: k
                } = a;
                k?.throwIfAborted();
                let l = (0, E.c)(b, {
                        hostId: d,
                        pluginId: f
                    }),
                    n = (0, L.i)(d),
                    p = b.get(o.d) ?? void 0,
                    q = n ? p : void 0;
                try {
                    let a = (0, i.a)(f);
                    if (!n && c && null != a && await (0, C.a)(b, a, !0), k?.throwIfAborted(), n) {
                        if (null == q) throw Error("Plugin account changed before uninstalling plugin");
                        await B.CodexRequest.safePost("/ps/plugins/{plugin_id}/uninstall", {
                            surface: "other",
                            parameters: {
                                path: {
                                    plugin_id: j ?? f
                                }
                            },
                            additionalHeaders: (0, I.b)()
                        }), S(h, d, f, q);
                        return
                    }
                    await (0, H.c)(b, d, {
                        pluginId: j ?? f
                    }), S(h, d, f);
                    let l = (0, m.g)(d, (0, o.c)(b));
                    h.cancelQueries({
                        queryKey: l
                    }).then(() => (0, m.k)({
                        scope: b,
                        accountId: (0, o.c)(b),
                        hostId: d,
                        queryClient: h
                    })).finally(() => (0, t.a)(l)).catch(a => {
                        h.invalidateQueries({
                            queryKey: l,
                            refetchType: "none"
                        }), A.a.error("Failed to refresh apps after plugin uninstall", {
                            safe: {},
                            sensitive: {
                                error: a
                            }
                        })
                    }), await Promise.all([(0, K.b)({
                        scope: b,
                        hostId: d,
                        queryClient: h
                    }).catch(a => {
                        A.a.error("plugin_skill_catalog_reload_failed_after_mutation", {
                            safe: {
                                hostId: d
                            },
                            sensitive: {
                                error: a
                            }
                        })
                    }), (0, D.b)({
                        hostId: d,
                        marketplaceName: e,
                        pluginName: g
                    })])
                } finally {
                    (0, E.a)(b, l), V(h, d, f, j)
                }
            },
            c: function(a) {
                let b, c, j, l, n, p, r, s, u, v, x = (0, d.c)(36),
                    z = a?.hostId ?? y.a;
                x[0] !== z ? (b = (0, L.i)(z), x[0] = z, x[1] = b) : b = x[1];
                let F = b,
                    J = (0, h.y)(w.a),
                    K = (0, h.z)(o.a),
                    M = (0, f.c)(),
                    N = (0, k.a)(),
                    P = K ?? void 0;
                x[2] !== z || x[3] !== P ? (c = (0, m.g)(z, P), x[2] = z, x[3] = P, x[4] = c) : c = x[4];
                let Q = c;
                x[5] !== Q || x[6] !== z || x[7] !== F || x[8] !== N || x[9] !== M || x[10] !== J ? (j = async a => {
                    let {
                        marketplaceName: b,
                        pluginId: c,
                        pluginName: d,
                        requestPluginId: e,
                        accountId: f
                    } = a, g = J.get(o.d) ?? void 0, h = (0, i.a)(c);
                    if (F || null == h || await (0, C.a)(J, h, !0), F) {
                        if (null == f || g !== f) throw Error("Plugin account changed before uninstalling plugin");
                        await B.CodexRequest.safePost("/ps/plugins/{plugin_id}/uninstall", {
                            surface: "other",
                            parameters: {
                                path: {
                                    plugin_id: e ?? c
                                }
                            },
                            additionalHeaders: (0, I.b)()
                        }), S(M, z, c, f);
                        return
                    }
                    await (0, H.c)(J, z, {
                        pluginId: e ?? c
                    }), S(M, z, c);
                    let j = U({
                        scope: J,
                        hostId: z,
                        intl: N,
                        queryClient: M
                    });
                    M.cancelQueries({
                        queryKey: Q
                    }).then(() => (0, m.k)({
                        scope: J,
                        accountId: (0, o.c)(J),
                        hostId: z,
                        queryClient: M
                    })).finally(() => (0, t.a)(Q)).catch(a => {
                        M.invalidateQueries({
                            queryKey: Q,
                            refetchType: "none"
                        }), A.a.error("Failed to refresh apps after plugin uninstall", {
                            safe: {},
                            sensitive: {
                                error: a
                            }
                        })
                    }), await Promise.all([j, (0, D.b)({
                        hostId: z,
                        marketplaceName: b,
                        pluginName: d
                    })])
                }, x[5] = Q, x[6] = z, x[7] = F, x[8] = N, x[9] = M, x[10] = J, x[11] = j) : j = x[11], x[12] !== z || x[13] !== J ? (l = a => {
                    let {
                        marketplaceAnalytics: b,
                        pluginId: c
                    } = a;
                    return null != b && (0, G.d)(J, {
                        action: e.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_REMOVE,
                        result: e.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_INITIATED,
                        ...b
                    }), {
                        operationId: (0, E.c)(J, {
                            hostId: z,
                            pluginId: c
                        })
                    }
                }, x[12] = z, x[13] = J, x[14] = l) : l = x[14], x[15] !== N || x[16] !== J ? (n = (a, b) => {
                    let {
                        marketplaceAnalytics: c,
                        pluginDisplayName: d
                    } = b;
                    null != c && (0, G.d)(J, {
                        action: e.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_REMOVE,
                        result: e.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
                        ...c
                    }), J.get(q.f).success(N.formatMessage(O.uninstallSuccess, {
                        pluginName: d
                    }))
                }, p = (a, b) => {
                    let {
                        marketplaceAnalytics: c,
                        marketplaceName: d,
                        pluginId: f,
                        pluginName: g,
                        requestPluginId: h
                    } = b;
                    null != c && (0, G.d)(J, {
                        action: e.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_REMOVE,
                        errorType: "request_failed",
                        result: e.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_FAILURE,
                        ...c
                    }), A.a.error("manual_plugin_uninstall_failed", {
                        safe: {
                            marketplaceName: d,
                            pluginId: h ?? f,
                            pluginName: g
                        },
                        sensitive: {
                            error: a
                        }
                    }), J.get(q.f).danger(N.formatMessage(O.uninstallError), {
                        errorAnalytics: {
                            toastId: "pluginsAvailability.onError.uninstallError"
                        }
                    })
                }, x[15] = N, x[16] = J, x[17] = n, x[18] = p) : (n = x[17], p = x[18]), x[19] !== z || x[20] !== M || x[21] !== J ? (r = (a, b, c, d) => {
                    let {
                        pluginId: e,
                        requestPluginId: f,
                        accountId: g
                    } = c;
                    null != d && (0, E.a)(J, d.operationId), V(M, z, e, f).then(() => {
                        null == b && S(M, z, e, g)
                    }).catch(R)
                }, x[19] = z, x[20] = M, x[21] = J, x[22] = r) : r = x[22], x[23] !== j || x[24] !== l || x[25] !== n || x[26] !== p || x[27] !== r ? (s = {
                    mutationFn: j,
                    onMutate: l,
                    onSuccess: n,
                    onError: p,
                    onSettled: r
                }, x[23] = j, x[24] = l, x[25] = n, x[26] = p, x[27] = r, x[28] = s) : s = x[28];
                let T = (0, g.a)(s),
                    W = T.isPending ? T.variables?.pluginId ?? null : null;
                return x[29] !== F || x[30] !== T || x[31] !== J ? (u = a => {
                    let b = J.get(o.d) ?? void 0;
                    return T.mutateAsync({
                        ...a,
                        accountId: F ? b : void 0
                    })
                }, x[29] = F, x[30] = T, x[31] = J, x[32] = u) : u = x[32], x[33] !== u || x[34] !== W ? (v = {
                    pendingUninstallPluginId: W,
                    uninstallPlugin: u
                }, x[33] = u, x[34] = W, x[35] = v) : v = x[35], v
            },
            d: function(a) {
                let b, c, i, j, m, n, p, s, t, v = (0, d.c)(36),
                    x = a?.hostId ?? y.a;
                v[0] !== x ? (b = (0, L.i)(x), v[0] = x, v[1] = b) : b = v[1];
                let z = b,
                    C = (0, h.y)(w.a),
                    D = (0, f.c)(),
                    E = (0, k.a)();
                v[2] !== x || v[3] !== z || v[4] !== E || v[5] !== D || v[6] !== C ? (c = async a => {
                    let {
                        pluginId: b,
                        enabled: c,
                        plugin: d,
                        accountId: e,
                        changesPluginService: f
                    } = a, g = C.get(o.d) ?? void 0;
                    if (z && (null == e || g !== e)) throw Error("Plugin account changed before updating plugin");
                    if (f) {
                        if (await B.CodexRequest.safePost(c ? "/ps/plugins/{plugin_id}/enable" : "/ps/plugins/{plugin_id}/disable", {
                                surface: "other",
                                parameters: {
                                    path: {
                                        plugin_id: d?.remotePluginId ?? b
                                    }
                                },
                                additionalHeaders: (0, I.b)()
                            }), z) return
                    } else {
                        let a = await (0, u.m)(C, D, x);
                        await (0, l.b)(C, x).sendRequest("config/batchWrite", {
                            edits: (0, F.a)({
                                pluginId: b,
                                enabled: c
                            }),
                            filePath: a?.filePath ?? null,
                            expectedVersion: a?.expectedVersion ?? null,
                            reloadUserConfig: !0
                        })
                    }
                    await U({
                        scope: C,
                        hostId: x,
                        intl: E,
                        queryClient: D
                    })
                }, v[2] = x, v[3] = z, v[4] = E, v[5] = D, v[6] = C, v[7] = c) : c = v[7], v[8] !== x || v[9] !== z || v[10] !== D || v[11] !== C ? (i = async a => {
                    let {
                        pluginId: b,
                        enabled: c,
                        marketplaceAnalytics: d
                    } = a;
                    if (null != d && (0, G.d)(C, {
                            action: c ? e.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_ENABLE : e.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_DISABLE,
                            result: e.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_INITIATED,
                            ...d
                        }), z) return;
                    await Promise.all([D.cancelQueries({
                        queryKey: (0, r.b)(x, "list")
                    }), D.cancelQueries({
                        queryKey: u.f
                    })]);
                    let f = D.getQueryData(u.f),
                        g = D.getQueriesData({
                            queryKey: (0, r.b)(x, "list")
                        }).flatMap(Q);
                    for (let [a, d] of g) D.setQueryData(a, function(a, b, c) {
                        return {
                            ...a,
                            plugins: a.plugins.map(a => a.plugin.id !== b || a.plugin.enabled === c ? a : {
                                ...a,
                                plugin: {
                                    ...a.plugin,
                                    enabled: c
                                }
                            })
                        }
                    }(d, b, c));
                    if (f) {
                        var h, i, j;
                        let a, d, e = {
                            ...f.config
                        };
                        h = f.config.plugins, i = b, j = c, d = (a = null == h || "object" != typeof h || Array.isArray(h) ? {} : h)[i], e.plugins = {
                            ...a,
                            [i]: null == d || "object" != typeof d || Array.isArray(d) ? {
                                enabled: j
                            } : {
                                ...d,
                                enabled: j
                            }
                        }, D.setQueryData(u.f, {
                            ...f,
                            config: e
                        })
                    }
                    return {
                        previousPluginLists: g,
                        previousUserConfig: f
                    }
                }, v[8] = x, v[9] = z, v[10] = D, v[11] = C, v[12] = i) : i = v[12], v[13] !== E || v[14] !== C ? (j = (a, b) => {
                    let {
                        enabled: c,
                        marketplaceAnalytics: d,
                        pluginDisplayName: f
                    } = b;
                    null != d && (0, G.d)(C, {
                        action: c ? e.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_ENABLE : e.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_DISABLE,
                        result: e.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
                        ...d
                    }), C.get(q.f).success(E.formatMessage(c ? O.enabledSuccess : O.disabledSuccess, {
                        pluginName: f
                    }))
                }, v[13] = E, v[14] = C, v[15] = j) : j = v[15], v[16] !== E || v[17] !== D || v[18] !== C ? (m = (a, b, c) => {
                    let {
                        enabled: d,
                        marketplaceAnalytics: f
                    } = b;
                    for (let [b, g] of(null != f && (0, G.d)(C, {
                            action: d ? e.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_ENABLE : e.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_DISABLE,
                            errorType: "request_failed",
                            result: e.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_FAILURE,
                            ...f
                        }), A.a.error("Failed to update plugin enabled state", {
                            safe: {},
                            sensitive: {
                                error: a
                            }
                        }), c?.previousUserConfig && D.setQueryData(u.f, c.previousUserConfig), c?.previousPluginLists ?? [])) D.setQueryData(b, g);
                    C.get(q.f).danger(E.formatMessage(O.toggleError), {
                        errorAnalytics: {
                            toastId: "pluginsAvailability.onError.toggleError"
                        }
                    })
                }, v[16] = E, v[17] = D, v[18] = C, v[19] = m) : m = v[19], v[20] !== x || v[21] !== D ? (n = (a, b, c) => {
                    let {
                        changesPluginService: d
                    } = c;
                    W(D, x, d).catch(P)
                }, v[20] = x, v[21] = D, v[22] = n) : n = v[22], v[23] !== c || v[24] !== i || v[25] !== j || v[26] !== m || v[27] !== n ? (p = {
                    mutationFn: c,
                    onMutate: i,
                    onSuccess: j,
                    onError: m,
                    onSettled: n
                }, v[23] = c, v[24] = i, v[25] = j, v[26] = m, v[27] = n, v[28] = p) : p = v[28];
                let H = (0, g.a)(p),
                    J = H.isPending ? H.variables?.pluginId : null;
                return v[29] !== z || v[30] !== H || v[31] !== C ? (s = a => {
                    let b = C.get(o.d) ?? void 0,
                        c = a.plugin ?? a.marketplaceAnalytics?.plugin;
                    return H.mutateAsync({
                        ...a,
                        plugin: c,
                        changesPluginService: z || c?.source.type === "remote",
                        accountId: z ? b : void 0
                    })
                }, v[29] = z, v[30] = H, v[31] = C, v[32] = s) : s = v[32], v[33] !== J || v[34] !== s ? (t = {
                    pendingPluginId: J,
                    setPluginEnabled: s
                }, v[33] = J, v[34] = s, v[35] = t) : t = v[35], t
            }
        })
    }),
    SlNh: (function(a, b, c) {
        var d = c("nuXe"),
            e = c.n(d),
            f = c("KvQL"),
            g = c("Haiv"),
            h = c("oszP"),
            i = c("ueue"),
            j = c("bnxy"),
            k = c("SaEY");
        let l = "/.agents/plugins/marketplace.json",
            m = "/marketplace.json",
            n = [`computer-use@${f.bd}`, `${f.qc}@${f.bd}`, `chrome@${f.bd}`, `chrome-internal@${f.bd}`, "spreadsheets@openai-primary-runtime", "presentations@openai-primary-runtime"];

        function o(a) {
            return a.trim().toLowerCase()
        }

        function p(a) {
            return a.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()
        }

        function q(a) {
            switch (o(a).replace(/[_-]+/g, " ")) {
                case "built by openai":
                    return 0;
                case "chatgpt official":
                    return 1;
                default:
                    return 2
            }
        }

        function r(a, b) {
            return a.sort((a, c) => {
                let d = s(a, b);
                if (d !== s(c, b)) return d ? -1 : 1;
                let e = (0, k.b)(a.plugin);
                return e !== (0, k.b)(c.plugin) ? e ? 1 : -1 : 0
            })
        }

        function s(a, b) {
            return b?.has(a.plugin.id) === !0 || null != a.plugin.remotePluginId && b?.has(a.plugin.remotePluginId) === !0
        }
        c.d(b, {}, {
            a: function(a) {
                return (0, i.o)(a.marketplaceName) || null != a.marketplaceDisplayName && (0, i.o)(a.marketplaceDisplayName)
            },
            b: function(a) {
                return a.find(a => a.plugin.name === f.ob && (0, f.Ai)(a.marketplaceName)) ?? null
            },
            c: function(a) {
                let {
                    availablePlugins: b,
                    createdByMeRemotePlugins: c,
                    homeDirectory: d,
                    pluginShares: e,
                    storefrontPlugins: g
                } = a, j = b.find(a => (0, h.j)(d, a.marketplacePath)), k = null == j ? null : (0, i.i)(j), l = g.filter(a => null != k && (0, i.i)(a) === k), m = function(a, b, c) {
                    let d = new Set([...c.flatMap(a => {
                            let b = a.plugin.shareContext?.remotePluginId;
                            return null == b ? [] : [b]
                        }), ...b?.flatMap(a => {
                            let {
                                localPluginPath: b,
                                plugin: c
                            } = a;
                            if (null == b) return [];
                            if (null == c.remotePluginId) throw Error(`remote plugin share ${c.id} is missing remotePluginId`);
                            return [c.remotePluginId]
                        }) ?? []]),
                        e = [];
                    for (let b of a ?? []) {
                        let a = b.plugin.remotePluginId;
                        if (null == a) throw Error(`created by me remote plugin ${b.plugin.id} is missing remotePluginId`);
                        d.has(a) || (d.add(a), e.push(b))
                    }
                    if (null == b) return e;
                    for (let {
                            plugin: a
                        }
                        of b) {
                        let b = a.remotePluginId;
                        if (null == b) throw Error(`remote plugin share ${a.id} is missing remotePluginId`);
                        if (d.has(b)) continue;
                        let c = (0, f.Yg)(a.id);
                        if (null == c) throw Error(`remote plugin share ${a.id} is missing marketplace name`);
                        d.add(b), e.push({
                            ...(0, i.h)(a),
                            description: a.interface?.shortDescription ?? null,
                            displayName: a.interface?.displayName ?? null,
                            marketplaceDisplayName: null,
                            marketplaceName: c,
                            marketplacePath: null,
                            plugin: a,
                            keywords: a.keywords,
                            remoteMarketplaceName: c
                        })
                    }
                    return e
                }(c, e, l);
                return {
                    marketplaceFilterValue: k,
                    plugins: [...l, ...m]
                }
            },
            d: function(a) {
                return a.filter(a => a.plugin.installed && a.plugin.enabled && !(0, k.b)(a.plugin))
            },
            e: function(a) {
                let {
                    additionalSearchValues: b,
                    dedupeSearchResults: c = !1,
                    locale: d,
                    plugins: e,
                    marketplaceFilterValue: f = null,
                    query: h
                } = a, j = p(h), k = e.filter(a => (!(h.length > 0) || !!p([a.displayName ?? a.plugin.name, ...a.keywords ?? [], ...b?.(a) ?? []].join(" ")).includes(j)) && (null == f || (0, i.i)(a) === f && (a.marketplaceDisplayName?.trim() || a.marketplaceName).trim().length > 0)), l = c ? function(a) {
                    let b = new Map;
                    for (let c of a) {
                        let a = function(a) {
                                let b = a.plugin.remotePluginId ?? a.plugin.shareContext?.remotePluginId;
                                return null == b ? `plugin:${(0,i.i)(a)}:${a.plugin.id}` : `remote:${b}`
                            }(c),
                            d = b.get(a);
                        (null == d || !d.plugin.installed && c.plugin.installed) && b.set(a, c)
                    }
                    return Array.from(b.values())
                }(k) : k;
                if (null == d) return r(l);
                let m = new Intl.Collator(d, {
                    sensitivity: "base"
                });
                return l.sort((a, b) => m.compare((0, g.a)(a), (0, g.a)(b)))
            },
            f: function(a) {
                let b = new Set,
                    c = [];
                for (let d of a) {
                    let a = (0, i.i)(d),
                        e = d.marketplaceDisplayName?.trim() || d.marketplaceName;
                    0 !== e.trim().length && !b.has(a) && (b.add(a), c.push({
                        label: (0, i.o)(e) ? "Built by OpenAI" : e,
                        subLabelSource: null == d.marketplacePath ? d.remoteMarketplaceName : function(a) {
                            let b = (0, j.r)(a).replace(/\/+$/, "");
                            return b.endsWith(l) ? b.slice(0, -l.length) : b.endsWith(m) ? b.slice(0, -m.length) : b
                        }(d.marketplacePath),
                        value: a
                    }))
                }
                let d = new Map,
                    e = new Map;
                for (let a of c) {
                    let b = e.get(a.label);
                    if (null == b) {
                        e.set(a.label, [a]);
                        continue
                    }
                    b.push(a)
                }
                for (let a of e.values()) {
                    if (a.length <= 1) continue;
                    let b = function(a) {
                        let b = a.map(a => (0, j.r)(a).replace(/\/+$/, "").split("/").filter(Boolean)),
                            c = Math.max(1, ...b.map(a => a.length));
                        for (let a = 1; a <= c; a++) {
                            let c = b.map(b => (function(a, b) {
                                let c = a.slice(-b).join("/");
                                return 0 === c.length ? "" : 1 === b ? c : a.length > b ? `.../${c}` : c
                            })(b, a));
                            if (new Set(c).size === c.length) return c
                        }
                        return a.map(a => (0, j.r)(a))
                    }(a.map(a => a.subLabelSource));
                    for (let [c, e] of a.entries()) d.set(e.value, b[c])
                }
                return c.sort((a, b) => {
                    let c = q(a.label) - q(b.label);
                    return 0 !== c ? c : a.label.localeCompare(b.label) || (d.get(a.value) ?? "").localeCompare(d.get(b.value) ?? "")
                }).map(a => ({
                    label: a.label,
                    subLabel: d.get(a.value) ?? null,
                    value: a.value
                }))
            },
            g: function(a) {
                let {
                    categoryOrder: b = [],
                    categorySections: c = [],
                    collapsedCategoryIds: d = [],
                    plugins: g,
                    connectedPlugins: h = g,
                    featuredPluginIds: i
                } = a, j = h.filter(a => a.plugin.installed).sort((a, b) => {
                    let c = (0, k.b)(a.plugin);
                    if (c !== (0, k.b)(b.plugin)) return c ? 1 : -1;
                    if (c) return 0;
                    let d = (0, f.Ai)(a.marketplaceName) || a.marketplaceName === f.ed;
                    return d !== ((0, f.Ai)(b.marketplaceName) || b.marketplaceName === f.ed) ? d ? 1 : -1 : a.plugin.installed !== b.plugin.installed ? a.plugin.installed ? 1 : -1 : 0
                }), l = null == i ? [] : function(a, b) {
                    let c = new Map(a.map(a => [a.plugin.id, a])),
                        d = [];
                    for (let a of b) {
                        let b = c.get(a);
                        null != b && d.push(b)
                    }
                    return d
                }(g, e()([...n, ...i])), m = new Set(d.map(o)), p = new Map;
                for (let a of c) {
                    let b = o(a.id);
                    if ("featured" === b) continue;
                    let c = p.get(b) ?? new Set;
                    for (let b of a.pluginIds) c.add(b);
                    p.set(b, c)
                }
                let q = new Map;
                for (let a of g) {
                    let b = a.plugin.interface?.category ?? "Other",
                        c = m.has(o(b)) ? "Other" : b,
                        d = q.get(c);
                    if (null == d) {
                        q.set(c, [a]);
                        continue
                    }
                    d.push(a)
                }
                let t = new Map(b.map((a, b) => [o(a), b])),
                    u = Array.from(q.entries()).sort((a, c) => {
                        let [d] = a, [e] = c, f = t.get(o(d)) ?? b.length, g = t.get(o(e)) ?? b.length;
                        return f === g ? d.localeCompare(e) : f - g
                    }).map(a => {
                        let [b, c] = a, d = p.get(o(b));
                        return {
                            section: {
                                id: `plugins-${o(b).replaceAll(" ","-")}`,
                                title: b
                            },
                            plugins: r(c, d),
                            visibleItemLimit: null == d ? void 0 : c.filter(a => s(a, d)).length || void 0
                        }
                    });
                return [...j.length > 0 ? [{
                    section: {
                        id: "plugins-connected",
                        title: null
                    },
                    plugins: j
                }] : [], ...l.length > 0 ? [{
                    section: {
                        id: "plugins-featured",
                        title: "Featured"
                    },
                    plugins: l
                }] : [], ...u]
            },
            h: function(a) {
                return a.filter(a => {
                    let b = (0, f.Yg)(a.plugin.id);
                    return a.plugin.name !== f.qc || null == b || !(0, f.Ai)(b)
                })
            },
            i: function(a, b, c) {
                if (0 === b.length && !c) return a;
                let d = new Set(b);
                return a.filter(a => (!c || !(0, i.q)(a.plugin.id)) && !d.has(a.plugin.id))
            }
        })
    }),
    CBsD: (function(a, b, c) {
        var d = c("NFGs"),
            e = c.n(d),
            f = c("zKw6"),
            g = c.n(f);
        c("KvQL");
        var h = c("ZIaK"),
            i = c("fGzQ"),
            j = c("WFY2"),
            k = c("rvFo");
        let l = {
            ".svg": "image/svg+xml",
            ".png": "image/png",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".webp": "image/webp",
            ".gif": "image/gif",
            ".avif": "image/avif"
        };
        async function m(a, b, c, d, e, f) {
            let g = (0, h.c)(a);
            if (null == g) return null;
            try {
                let a = {
                        path: g,
                        hostId: b,
                        conversationId: e,
                        environmentId: f
                    },
                    h = await c.fetchQuery({
                        queryFn: b => {
                            let {
                                signal: c
                            } = b;
                            return (0, i.d)(a, null == d ? c : AbortSignal.any([c, d]))
                        },
                        queryKey: (0, i.f)(a),
                        retry: !1,
                        gcTime: k.b.FIVE_MINUTES,
                        staleTime: null != e && null == f ? 0 : k.b.INFINITE
                    });
                if (!h.contentsBase64) return null;
                return {
                    base64: h.contentsBase64,
                    mimeType: o(g)
                }
            } catch (a) {
                return j.a.warning("Failed to inline local image", {
                    safe: {},
                    sensitive: {
                        error: a,
                        resolvedImagePath: g
                    }
                }), null
            }
        }

        function n(a, b) {
            return `data:${o(a)};base64,${b}`
        }

        function o(a) {
            return l[g().extname(a).toLowerCase()] ?? "application/octet-stream"
        }
        c.d(b, {
            a: () => n,
            b: () => h.c
        }, {
            c: function(a, b, c, d, f) {
                if (null != d && null == f) return null;
                let g = (0, h.c)(a);
                for (let h of [a, g]) {
                    if (null == h) continue;
                    let a = {
                            path: h,
                            hostId: b,
                            conversationId: d,
                            environmentId: f
                        },
                        g = [(0, i.b)(a), (0, i.f)(a)].map(a => c.getQueryState(a)),
                        j = e()(g.filter(a => !a?.isInvalidated && a?.data?.contentsBase64), a => a?.dataUpdatedAt)?.data;
                    if (j?.contentsBase64) return `data:${j.mimeType??o(h)};base64,${j.contentsBase64}`
                }
                return null
            },
            d: m,
            e: async function(a, b, c, d, e, f) {
                let g = await m(a, b, c, d, e, f);
                return null == g ? null : `data:${g.mimeType};base64,${g.base64}`
            },
            f: async function(a) {
                let {
                    contentsBase64: b
                } = await (0, i.d)(a);
                return b ? n(a.path, b) : null
            }
        })
    }),
    tQpF: (function(a, b, c) {
        var d = c("KvQL"),
            e = c("XNvh"),
            f = c("D4ZO"),
            g = c("CjTC"),
            h = c("uUv4"),
            i = c("ABl9");

        function j(a) {
            return "workspace-directory" === a || "workspace-shared-with-me" === a
        }

        function k(a) {
            return null != a.ownership ? "WORKSPACE" === a.ownership.scope : j((0, d.Yg)(a.plugin.id))
        }

        function l(a, b) {
            let {
                id: c,
                name: e
            } = a;
            if (null != c && !c.includes("@")) return c;
            let f = null == c ? null : (0, d.Yg)(c);
            if (f === d.dd || b && (null == f || f === d.cd)) return h.a[null == c ? (e ?? "").trim().toLowerCase() : c.slice(0, -(f?.length ?? 0) - 1)]
        }
        c.d(b, {}, {
            a: function(a) {
                return null != a && (j((0, d.Yg)(a)) || (0, d.gi)(a))
            },
            b: function(a, b, c) {
                let e = (0, d.Yg)(b),
                    h = a.filter(a => (null == c || (0, g.a)(a.plugin) === c) && ((0, f.f)(a.plugin) === b || a.plugin.id === b || a.referenceIds?.includes(b) || null != c && (e === d.dd || j(e) && k(a)) && b === `${a.plugin.name}@${e}`));
                return 1 === h.length ? h[0] : void 0
            },
            c: function(a) {
                return null != a && (0, d.Yg)(a) === d.dd ? a : l({
                    id: a
                }, !0)
            },
            d: function(a) {
                let b = (0, e.c)(a.plugin.id);
                if (a.plugin.id === i.a && a.ownership?.scope === "GLOBAL") return b;
                let c = (0, g.a)(a.plugin);
                return null != c && (0, d.gi)(c) && (null != a.ownership || k(a)) ? `${b}?${new URLSearchParams({remotePluginId:c})}` : b
            },
            e: function(a) {
                let b = a.indexOf("?");
                if (-1 === b) return null;
                let c = new URLSearchParams(a.slice(b + 1)).get("remotePluginId");
                return null != c && (0, d.gi)(c) ? c : null
            },
            f: l
        })
    }),
    vj6P: (function(a, b, c) {
        var d = c("pkoC"),
            e = c.n(d),
            f = c("i5ac"),
            g = c.n(f),
            h = c("Q840"),
            i = c("KvQL"),
            j = c("D4ZO"),
            k = c("OiCI"),
            l = c("C0re"),
            m = c("EEop"),
            n = c("cLdu"),
            o = c("mq2k"),
            p = c("ueue"),
            q = c("OWtl"),
            r = c("ndjw"),
            s = c("rvFo"),
            t = c("fEwQ"),
            u = c("tQpF");
        let v = (0, h.j)(q.a, a => (0, t.a)(4)),
            w = (0, h.q)(q.a, (a, b) => {
                let {
                    hostId: c,
                    references: d,
                    roots: f
                } = a, {
                    get: h,
                    scope: j
                } = b, q = (0, n.i)(c), t = q ? h(k.a) : null, A = q || h(o.b, c);
                return {
                    enabled: d.length > 0 && null != A && (!q || null != t),
                    queryKey: [...(0, l.d)(c, "references"), t, f, d, A],
                    queryFn: async a => {
                        let {
                            signal: b
                        } = a, h = q ? void 0 : f ?? (await j.query.getOrFetch(r.j, {
                            hostId: c
                        })).roots, l = await (0, n.g)(j, {
                            accountId: q ? t : null,
                            hostId: c,
                            roots: h
                        }, "plugin_reference"), o = g()(d.filter(a => {
                            let {
                                id: b,
                                name: c
                            } = a;
                            return null != b || !!c?.trim()
                        }), a => {
                            let {
                                id: b,
                                name: c
                            } = a;
                            return JSON.stringify([b, c])
                        }), s = [], B = o.filter(a => {
                            let b = z(l, a, !0 === A);
                            return null == b || (s.push(y(b, a.id)), !1)
                        }), C = !q && B.some(a => null == (0, u.f)(a, !0 === A) && (null == a.id || a.id.includes("@"))) ? (await j.query.getOrFetch(p.s, {
                            hostId: c,
                            roots: h ?? [],
                            marketplaceKinds: ["local"],
                            isOpenAICuratedRemoteMarketplaceEnabled: !1
                        }).catch(() => void 0))?.plugins : void 0, D = B.filter(a => {
                            let b = z(C ?? [], a, !0 === A);
                            return null == b || (s.push(y(b, a.id)), !1)
                        });
                        if (q) {
                            let a = D.flatMap(a => {
                                    let b = (0, u.f)(a, !0) ?? (0, u.c)(a.id);
                                    return null == b ? [] : [{
                                        id: b,
                                        referenceId: a.id
                                    }]
                                }),
                                c = 0 === a.length ? void 0 : await j.query.getOrFetch(m.k, a.map(a => {
                                    let {
                                        id: b
                                    } = a;
                                    return b
                                })).catch(() => void 0);
                            for (let {
                                    id: b,
                                    referenceId: d
                                }
                                of a) {
                                let a = c?.get(b);
                                null != a && s.push(y(a, d))
                            }
                            return b.throwIfAborted(), x(void 0, s)
                        }
                        let [E, F] = e()(D, a => {
                            let {
                                id: b
                            } = a;
                            return null != t && (0, u.a)(b)
                        });
                        if (null != t && E.length > 0) {
                            if (b.throwIfAborted(), j.get(k.d) !== t) throw Error("Plugin account changed while loading references");
                            let a = await j.query.getOrFetch(w, {
                                hostId: i.$b,
                                references: E,
                                roots: void 0
                            }).catch(() => []);
                            s.push(...a)
                        }
                        let G = j.get(v, c),
                            H = await Promise.all(F.map(async a => {
                                let d = (0, u.f)(a, !0 === A),
                                    e = d ?? a.id;
                                if (null == e || null == d && e.includes("@")) return null;
                                let f = await G(() => j.queryClient.fetchQuery({
                                    ...j.query.getOptions(m.l, (0, m.g)({
                                        hostId: c,
                                        pluginId: e,
                                        remotePluginId: d,
                                        roots: h
                                    })),
                                    retry: !1
                                }), b).catch(() => null);
                                return null == f ? null : y((0, p.c)(f), a.id)
                            }));
                        return s.push(...H.filter(a => null != a)), b.throwIfAborted(), x(void 0, s)
                    },
                    retry: !1,
                    staleTime: s.b.ONE_MINUTE
                }
            });

        function x(a, b) {
            let c = new Map((a ?? []).map(a => [(0, j.f)(a.plugin), a]));
            for (let d of b ?? []) {
                let b = (0, j.f)(d.plugin),
                    e = c.get(b);
                c.set(b, {
                    ...e ?? d,
                    plugin: e?.plugin ?? (null != a ? {
                        ...d.plugin,
                        installed: !1,
                        enabled: !1
                    } : d.plugin),
                    referenceIds: Array.from(new Set([...e?.referenceIds ?? [], ...d.referenceIds ?? []]))
                })
            }
            return Array.from(c.values())
        }

        function y(a, b) {
            return null == b || a.referenceIds?.includes(b) ? a : {
                ...a,
                referenceIds: [...a.referenceIds ?? [], b]
            }
        }

        function z(a, b, c) {
            if (null != b.id) {
                let d = (0, u.f)(b, c),
                    e = b.id.replace(/@dev-mode$/, "@created-by-me-remote");
                return (0, u.b)(a, e) ?? (null == d || d === e ? void 0 : (0, u.b)(a, d))
            }
            let d = b.name?.trim().toLowerCase(),
                e = a.filter(a => a.plugin.name.toLowerCase() === d || a.displayName?.toLowerCase() === d);
            return 1 === e.length ? e[0] : void 0
        }
        c.d(b, {}, {
            a: x,
            b: w
        })
    }),
    PmQd: (function(a, b, c) {
        var d = c("vLsY");
        c("sLlu");
        var e = c("C0re");
        c.d(b, {}, {
            a: async function(a, b, c) {
                let d = (0, e.e)(a.queryClient, b);
                if ("reconnect" !== c) return d;
                await Promise.all([d, (0, e.g)(a.queryClient, (0, e.c)(b))])
            },
            b: async function(a, b) {
                let c = "account" === b ? e.a : (0, e.b)(b.hostId);
                (0, d.a)(c), await Promise.all([(0, e.g)(a, c), void 0])
            }
        })
    }),
    jShI: (function(a, b, c) {
        var d = c("GaA7"),
            e = c("kfGJ"),
            f = c("c1Td"),
            g = c("bPa2");
        class h extends Error {
            constructor(a) {
                super("Plugin skill catalog reload failed", {
                    cause: a
                }), this.name = "PluginSkillCatalogReloadError"
            }
        }
        c.d(b, {}, {
            a: h,
            b: async function(a) {
                let {
                    scope: b,
                    hostId: c,
                    queryClient: i
                } = a, j = new Map(i.getQueriesData({
                    queryKey: [...g.a, c]
                }).flatMap(a => {
                    let [b] = a, c = b[2];
                    return Array.isArray(c) && c.every(a => "string" == typeof a) ? [c] : []
                }).map(a => [a.join("\0"), a])), k = j.size > 0 ? Array.from(j.values()) : [
                    []
                ];
                try {
                    for (let {
                            cwds: a,
                            response: h
                        }
                        of(c === e.a && await d.a.browserPluginConfig?.syncAfterPluginChange(), await Promise.all(k.map(async a => ({
                            cwds: a,
                            response: await (0, f.a)(b, c, a, {
                                forceReload: !0
                            })
                        }))))) i.setQueryData([...g.a, c, a], h)
                } catch (a) {
                    throw new h(a)
                }
            }
        })
    }),
    cjoy: (function(a, b, c) {
        var d = c("WzdM"),
            e = c("HFSu");
        c.d(b, {}, {
            a: function(a) {
                let {
                    pluginId: b,
                    skillName: c,
                    enabled: f
                } = a;
                return e.CodexRequest.safePost(f ? "/ps/plugins/{plugin_id}/skills/{skill_name}/enable" : "/ps/plugins/{plugin_id}/skills/{skill_name}/disable", {
                    surface: "other",
                    parameters: {
                        path: {
                            plugin_id: b,
                            skill_name: c
                        }
                    },
                    additionalHeaders: (0, d.b)()
                })
            }
        })
    }),
    ABl9: (function(a, b, c) {
        var d = c("tRL3");
        let e = `sites@${d.n}`,
            f = `plugin://${e}`,
            g = /(^|[^\p{L}\p{N}_$\\])\$sites(?![\p{L}\p{N}_$-])/gu;
        c.d(b, {}, {
            a: e,
            b: f,
            c: g,
            d: function(a) {
                return a.replace(g, "$1@Sites")
            }
        })
    }),
    ygu7: (function(a, b, c) {
        var d = c("Q840"),
            e = c("hOO0"),
            f = c("OiCI"),
            g = c("WzdM"),
            h = c("OWtl"),
            i = c("rvFo"),
            j = c("HFSu"),
            k = c("bJEQ");
        let l = (0, d.q)(h.a, (a, b) => {
            let {
                appId: c,
                productContext: d
            } = a, {
                get: e
            } = b;
            return {
                ...m(c, e(f.d), d),
                select: a => a.plugin_id
            }
        });

        function m(a, b, c, d) {
            return {
                queryKey: ["plugins", "canonical-app", b, d?.exactAppId ? a : (0, e.a)(a), ...null == c ? [] : [c], ...d?.expectedIdentity == null ? [] : [d.expectedIdentity.userId]],
                enabled: null != b,
                queryFn: b => {
                    let {
                        signal: e
                    } = b;
                    return j.CodexRequest.safeGet("/ps/plugins/canonical-app/{app_id}", {
                        surface: d?.surface ?? "other",
                        expectedIdentity: d?.expectedIdentity,
                        parameters: {
                            path: {
                                app_id: encodeURIComponent(a)
                            }
                        },
                        additionalHeaders: {
                            ...(0, g.b)(c),
                            ...d?.expectedIdentity == null ? {} : {
                                "ChatGPT-Account-ID": d.expectedIdentity.accountId
                            }
                        },
                        signal: null == d ? e : (0, k.a)(e)
                    })
                },
                retry: !1,
                staleTime: i.b.FIVE_MINUTES
            }
        }
        c.d(b, {}, {
            a: l,
            b: async function(a, b) {
                return (await a.query.fetch(l, {
                    appId: b
                })).plugin_id
            },
            c: async function(a, b, c) {
                return (await a.fetchQuery(m(b, c))).plugin_id ?? null
            },
            d: m
        })
    }),
    Y6Vd: (function(a, b, c) {
        c.d(b, {
            a: () => n,
            b: () => l,
            c: () => m,
            d: () => p,
            e: () => o
        });
        var d = c("Q840");
        c("KvQL");
        var e = c("WzdM"),
            f = c("OWtl"),
            g = c("rvFo"),
            h = c("HFSu"),
            i = c("ygu7"),
            j = c("bJEQ"),
            k = c("hOO0");
        let l = (0, d.q)(f.a, a => {
            let {
                identity: b,
                appId: c,
                surface: d
            } = a;
            return (0, i.d)(c, b.accountId, "codex", {
                expectedIdentity: b,
                surface: d
            })
        });

        function m(a, b, c) {
            return h.CodexRequest.safePost("/ps/plugins/batch", {
                ...c,
                requestBody: {
                    plugin_ids: a
                },
                additionalHeaders: {
                    ...(0, e.b)(b),
                    ...null == c.expectedIdentity ? {} : {
                        "ChatGPT-Account-ID": c.expectedIdentity.accountId
                    }
                }
            })
        }
        let n = (0, d.q)(f.a, a => {
                let {
                    identity: b,
                    ids: c,
                    productContext: d = "codex",
                    surface: e = "workspace_agents"
                } = a, f = [...new Set(c)].sort();
                return {
                    queryKey: ["plugins", "connection-metadata", b.accountId, b.userId, d, f],
                    staleTime: g.b.ONE_MINUTE,
                    retry: !1,
                    queryFn: async a => {
                        let {
                            signal: c
                        } = a, {
                            results: g
                        } = await m(f, d, {
                            surface: e,
                            expectedIdentity: b,
                            signal: (0, j.a)(c)
                        });
                        return new Map(g.map(a => {
                            let {
                                requested_plugin_id: b,
                                plugin: c
                            } = a;
                            return [b, c]
                        }))
                    }
                }
            }),
            o = (0, d.q)(f.a, a => ({
                queryKey: ["workspace_connector_stats", a],
                queryFn: b => {
                    let {
                        signal: c
                    } = b;
                    return h.CodexRequest.safeGet("/aip/workspace/connector-stats", {
                        additionalHeaders: {
                            "ChatGPT-Account-Id": a.accountId
                        },
                        expectedIdentity: a,
                        signal: c
                    })
                },
                retry: !1,
                staleTime: g.b.FIVE_MINUTES,
                retryOnMount: !0,
                refetchOnMount: !0
            }));
        async function p(a, b) {
            let {
                identity: c,
                pluginIds: d,
                metadata: e
            } = b, f = new Set(e.plugin.dependencies?.filter(a => {
                let {
                    is_enabled: b,
                    availability_status: c
                } = a;
                return !1 !== b && null == c
            }).map(a => {
                let {
                    plugin_id: b
                } = a;
                return b
            })), g = [...new Set(d)].filter(a => f.has(a)).sort();
            if (0 === g.length) return {};
            let h = e.usedCodexFallback ? "codex" : "chatgpt",
                [i, j] = await Promise.all([a.query.fetch(o, c), Promise.allSettled(Array.from({
                    length: Math.ceil(g.length / 50)
                }, (b, d) => a.query.fetch(n, {
                    identity: c,
                    ids: g.slice(50 * d, (d + 1) * 50),
                    productContext: h,
                    surface: "connector_setup"
                })))]),
                l = new Map(j.flatMap(a => "fulfilled" === a.status ? [...a.value].map(a => {
                    let [b, c] = a;
                    return [b, [...new Set([c.connector_id, c.canonical_app_id, ...c.release.app_ids ?? [], ...(c.release.app_templates ?? []).flatMap(a => [a.canonical_connector_id, ...a.materialized_app_ids ?? [], ...(a.instances ?? []).map(a => a.id)])].flatMap(a => null == a || a.startsWith("templated_apps_") ? [] : [(0, k.a)(a)]))]]
                }) : []));
            return function(a, b, c) {
                if (a?.workspace_id !== b) return {};
                let d = new Map;
                for (let {
                        connector_id: b,
                        unique_user_cnt: c
                    }
                    of a.connector_stats ?? []) {
                    if ("number" != typeof c || !Number.isSafeInteger(c) || c < 0) continue;
                    let a = (0, k.a)(b);
                    d.set(a, Math.max(d.get(a) ?? 0, c))
                }
                let e = [];
                for (let [a, b] of c) {
                    let c;
                    for (let a of b) {
                        let b = d.get(a);
                        void 0 !== b && (void 0 === c || b > c) && (c = b)
                    }
                    void 0 !== c && e.push([a, c])
                }
                return Object.fromEntries(e)
            }(i, c.accountId, l)
        }
    }),
    NnK8: (function(a, b, c) {
        var d = c("Q840"),
            e = c("hOO0"),
            f = c("IVVU"),
            g = c("OWtl");
        let h = (0, d.c)(g.a, a => {
                let {
                    get: b
                } = a;
                return new Set(b(f.g).hiddenPluginIds)
            }),
            i = (0, d.c)(g.a, a => {
                let {
                    get: b
                } = a;
                return new Set(Array.from(b(h), e.a))
            });
        c.d(b, {}, {
            a: i,
            b: h
        })
    }),
    zDEm: (function(a, b, c) {
        var d = c("Q840"),
            e = c("OiCI"),
            f = c("CWeU"),
            g = c("K0RC"),
            h = c("tSEg"),
            i = c("ndjw"),
            j = c("cLdu");
        let k = (0, d.d)(h.a, (a, b) => {
            let {
                get: c,
                scope: d
            } = b, h = (0, j.i)(a), k = c(j.h, {
                hostId: a,
                accountId: h ? c(e.b) : null,
                productContext: "chatgpt-thread" === d.value.routeKind ? "chatgpt" : "codex",
                roots: h ? void 0 : c(i.j, {
                    hostId: a
                }).data?.roots
            }).data, l = c(g.c)[(0, g.b)(c(f.a), a)] ?? {}, m = new Map;
            for (let {
                    plugin: a
                }
                of k ?? []) {
                if (!a.installed || !a.enabled || "INSTALLED_BY_DEFAULT" === a.installPolicy) continue;
                let b = Math.max((a.installedAt ?? 0) * 1e3, l[a.id] ?? 0, null == a.remotePluginId ? 0 : l[a.remotePluginId] ?? 0);
                0 !== b && (m.set(a.id, b), null != a.remotePluginId && m.set(a.remotePluginId, b))
            }
            return m
        });
        c.d(b, {}, {
            a: k
        })
    }),
    EEop: (function(a, b, c) {
        var d = c("QosV"),
            e = c("T0Rc"),
            f = c("S2r0"),
            g = c("NxBK"),
            h = c("i5ac"),
            i = c.n(h),
            j = c("Q840"),
            k = c("KvQL"),
            l = c("Dgwo"),
            m = c("hOO0"),
            n = c("FpcZ"),
            o = c("pDRe"),
            p = c("OiCI"),
            q = c("Cslg"),
            r = c("IIEq"),
            s = c("rO8L"),
            t = c("IVVU"),
            u = c("C0re"),
            v = c("WzdM"),
            w = c("CBsD"),
            x = c("tQpF"),
            y = c("cLdu"),
            z = c("ueue"),
            A = c("OWtl"),
            B = c("kfGJ"),
            C = c("caug"),
            D = c("bnxy"),
            E = c("rvFo"),
            F = c("HFSu"),
            G = c("eShZ"),
            H = c("Y6Vd");
        let I = (0, j.q)(A.a, (a, b) => {
            let {
                get: c,
                queryClient: d,
                scope: e
            } = b, g = (0, y.i)(a.hostId), h = g ? c(p.b) : null;
            return {
                ... function(a) {
                    let {
                        scope: b,
                        accountId: c,
                        hostId: d,
                        marketplacePath: e,
                        pluginName: g,
                        queryClient: h,
                        remoteMarketplaceName: i,
                        requestOptions: j,
                        productContext: k,
                        prefetchAppsForUserId: m,
                        localMarketplaceName: r,
                        roots: s
                    } = a, t = (0, y.i)(d), u = b.get(p.d) ?? void 0, v = t && void 0 === c ? u : c;
                    return (0, f.a)({
                        queryKey: N({
                            accountId: v,
                            hostId: d,
                            marketplacePath: e,
                            pluginName: g,
                            remoteMarketplaceName: i,
                            localMarketplaceName: r,
                            roots: s,
                            productContext: k
                        }),
                        queryFn: async a => {
                            let {
                                signal: c
                            } = a;
                            if (null == g) throw Error("plugin detail query requires pluginName");
                            let f = b.get(p.d) ?? void 0;
                            if (t && (null == v || f !== v)) throw Error("Plugin account changed before loading plugin details");
                            let u = e;
                            if (!t && null == e && null == i && null != r) {
                                let {
                                    marketplaces: a
                                } = await b.query.getOrFetch(z.s, {
                                    hostId: d,
                                    isOpenAICuratedRemoteMarketplaceEnabled: !1,
                                    marketplaceKinds: ["local"],
                                    roots: s ?? []
                                });
                                if (null == (u = a.find(a => a.name === r)?.path ?? null)) throw Error("Local plugin marketplace is unavailable");
                                c.throwIfAborted()
                            }
                            let A = t ? await async function(a, b, c, d, e, f) {
                                if (null == (0, x.c)(b)) throw new G.FetchError("Plugin not found", 404, void 0, null);
                                let [{
                                    plugin: g,
                                    usedCodexFallback: h
                                }, i] = await Promise.all([a.queryClient.fetchQuery(R(d, b, void 0, e)).then(b => {
                                    let e = a.get(q.n);
                                    if (null != f && !c.aborted && !e.accountLoading && e.userId === f && null != d && a.get(p.a) === d && a.get(p.d) === d) {
                                        let c = W(b.plugin).map(a => {
                                            let {
                                                id: b
                                            } = a;
                                            return b
                                        });
                                        for (let b of (0, n.getHostedAppsContentQueriesOptions)({
                                                accountId: d,
                                                appIds: c,
                                                enabled: !0
                                            }).queries) a.queryClient.prefetchQuery(b);
                                        c.length > 0 && a.queryClient.prefetchQuery((0, o.b)({
                                            accountId: d,
                                            userId: f,
                                            appIds: c,
                                            enabled: !0
                                        }))
                                    }
                                    return b
                                }), (0, y.d)(a, {
                                    productContext: ("catalog" === e ? void 0 : e) ?? "chatgpt",
                                    signal: c,
                                    surface: "other"
                                })]);
                                c.throwIfAborted();
                                let j = (h ? await (0, y.d)(a, {
                                    productContext: "codex",
                                    signal: c,
                                    surface: "other"
                                }) : i).find(a => a.plugin.remotePluginId === g.id);
                                return T(g, j)
                            }(b, g, c, v, k, (0, o.c)(d) ? m : null): (await (0, l.b)(b, d).sendRequest("plugin/read", {
                                ...(0, z.j)({
                                    marketplacePath: u,
                                    remoteMarketplaceName: i
                                }),
                                pluginName: g
                            }, j)).plugin, B = b.get(p.d) ?? void 0;
                            if (t && B !== v) throw Error("Plugin account changed while loading plugin details");
                            let C = A.summary.interface,
                                D = (0, w.e)(C?.logo, d, h),
                                E = (0, w.e)(C?.logoDark, d, h),
                                F = (0, w.e)(C?.composerIcon, d, h),
                                H = Promise.all(A.skills.map(async a => {
                                    if (null == a.interface) return null;
                                    let [b, c] = await Promise.all([(0, w.e)(a.interface.iconSmall, d, h), (0, w.e)(a.interface.iconLarge, d, h)]);
                                    return {
                                        iconSmallDataUrl: b,
                                        iconLargeDataUrl: c
                                    }
                                })),
                                [I, J, K, L] = await Promise.all([F, D, E, H]);
                            return function(a, b) {
                                let {
                                    logoDataUrl: c,
                                    logoDarkDataUrl: d,
                                    composerIconDataUrl: e,
                                    skillImageDataUrls: f
                                } = b, g = a.summary.interface, h = a.skills.map((a, b) => {
                                    let c = f[b] ?? null;
                                    return null == a.interface || null == c ? a : {
                                        ...a,
                                        interface: {
                                            ...a.interface, ...null != c.iconSmallDataUrl ? {
                                                iconSmall: c.iconSmallDataUrl
                                            } : {}, ...null != c.iconLargeDataUrl ? {
                                                iconLarge: c.iconLargeDataUrl
                                            } : {}
                                        }
                                    }
                                });
                                return {
                                    ...a,
                                    summary: null != g && (null != e || null != c || null != d) ? {
                                        ...a.summary,
                                        interface: {
                                            ...g, ...null != e ? {
                                                composerIcon: e
                                            } : {}, ...null != c ? {
                                                logo: c
                                            } : {}, ...null != d ? {
                                                logoDark: d
                                            } : {}
                                        }
                                    } : a.summary,
                                    skills: h
                                }
                            }(A, {
                                composerIconDataUrl: I,
                                logoDataUrl: J,
                                logoDarkDataUrl: K,
                                skillImageDataUrls: L
                            })
                        },
                        retryOnMount: !t,
                        staleTime: E.b.FIVE_MINUTES
                    })
                }({
                    ...a,
                    accountId: h,
                    queryClient: d,
                    scope: e
                }),
                enabled: null != a.pluginName && (g || null != a.localMarketplaceName || null != a.marketplacePath || null != a.remoteMarketplaceName) && (!g || null != h),
                refetchOnMount: !0
            }
        });

        function J(a) {
            return a.template_id
        }

        function K(a) {
            return !0 === a.can_setup
        }

        function L(a) {
            let [b, c] = a;
            return [b, c.id]
        }
        async function M() {}

        function N(a) {
            let {
                accountId: b,
                hostId: c,
                marketplacePath: d,
                pluginName: e,
                remoteMarketplaceName: f,
                localMarketplaceName: g,
                roots: h,
                productContext: i
            } = a, j = (0, y.i)(c);
            return [...O(c, b), d ?? "", f ?? "", e ?? "", ...null == i ? [] : [i], ...j || null != d || null != f || null == g ? [] : ["local-marketplace", g, h ?? []]]
        }

        function O(a, b) {
            let c = (0, u.d)(a, "detail");
            return (0, y.i)(a) ? [...c, "hosted", b ?? null] : c
        }
        let P = (0, j.j)(A.a, (a, b) => {
                let {
                    scope: c
                } = b;
                return (0, C.a)({
                    key: a => a,
                    watchIdentity: () => {
                        let b = new AbortController,
                            d = c.watch(c => {
                                let {
                                    get: d
                                } = c;
                                (null == a || d(p.d) !== a) && b.abort(Error("Plugin account changed while loading metadata"))
                            });
                        return {
                            signal: b.signal,
                            stop: d
                        }
                    },
                    fetcher: async (a, b) => {
                        let {
                            results: c
                        } = await (0, H.c)(a, "chatgpt", {
                            signal: b
                        });
                        return new Map(c.map(a => {
                            let {
                                requested_plugin_id: b,
                                plugin: c
                            } = a;
                            return [b, c]
                        }))
                    }
                })
            }),
            Q = (0, j.q)(A.a, (a, b) => {
                let {
                    get: c,
                    queryClient: d,
                    scope: e
                } = b, f = c(p.d), h = [...new Set(a)].sort();
                return {
                    queryKey: ["plugins", "hosted-metadata-batch", f, h],
                    enabled: null != f && h.length > 0,
                    staleTime: E.b.FIVE_MINUTES,
                    retry: !1,
                    queryFn: async a => {
                        let {
                            signal: b
                        } = a, c = new Map, i = [];
                        await Promise.all(h.map(async a => {
                            let h = R(f, a),
                                j = d.getQueryState(h.queryKey),
                                k = j?.data;
                            if (null == k && j?.fetchStatus === "fetching") try {
                                k = await d.fetchQuery(h)
                            } catch (a) {
                                if (b.throwIfAborted(), a instanceof g.a || e.get(p.d) !== f) throw a;
                                if (a instanceof G.FetchError && 404 === a.status) return
                            }
                            null == k ? i.push(a) : c.set(a, (0, y.f)(k.plugin))
                        }));
                        let j = e.get(P, f);
                        if (await Promise.all(i.map(async a => {
                                let g = await j.fetch({
                                    target: a,
                                    signal: b
                                });
                                if (b.throwIfAborted(), e.get(p.d) !== f) throw Error("Plugin account changed while loading metadata");
                                if (null == g) return;
                                let h = {
                                    plugin: {
                                        ...g,
                                        workspace_id: g.workspace_id ?? null,
                                        release: {
                                            ...g.release,
                                            interface: {
                                                ...g.release.interface, short_description: g.release.interface.short_description ?? null, category: g.release.interface.category ?? null, capabilities: g.release.interface.capabilities ?? [], logo_url: g.release.interface.logo_url ?? null
                                            },
                                            skills: g.release.skills?.map(a => ({
                                                ...a,
                                                interface: null == a.interface ? null : {
                                                    ...a.interface,
                                                    display_name: a.interface.display_name ?? null,
                                                    short_description: a.interface.short_description ?? null,
                                                    icon_small_url: a.interface.icon_small_url ?? null,
                                                    icon_large_url: a.interface.icon_large_url ?? null
                                                }
                                            }))
                                        },
                                        dependencies: g.dependencies?.map(a => ({
                                            ...a,
                                            navigation: null == a.navigation ? null : {
                                                kind: "plugin_detail",
                                                plugin_id: a.navigation.plugin_id
                                            }
                                        }))
                                    },
                                    usedCodexFallback: !1
                                };
                                c.set(a, (0, y.f)(h.plugin));
                                let {
                                    queryKey: i
                                } = R(f, a);
                                null == d.getQueryData(i) && d.setQueryData(i, h, {
                                    updatedAt: 0
                                })
                            })), b.throwIfAborted(), e.get(p.d) !== f) throw Error("Plugin account changed while loading metadata");
                        return c
                    }
                }
            });

        function R(a, b, c, d) {
            return (0, f.a)({
                queryKey: ["plugins", "hosted-metadata", a, b, ...null == d ? [] : [d]],
                queryFn: async e => {
                    let {
                        signal: f
                    } = e;
                    if (null == a || null == b) throw Error("Hosted plugin metadata requires an account and plugin");
                    return async function(a, b, c) {
                        let d = (0, x.c)(a);
                        if (null == d) throw new G.FetchError("Plugin not found", 404, void 0, null);
                        let e = !1;
                        return {
                            plugin: await F.CodexRequest.safeGet("/ps/plugins/{plugin_id}", {
                                surface: "other",
                                parameters: {
                                    path: {
                                        plugin_id: d
                                    },
                                    ...S(c) ? {
                                        query: {
                                            useTemplatePresentation: !0
                                        }
                                    } : {}
                                },
                                additionalHeaders: (0, v.b)(c ?? "chatgpt"),
                                expectedErrorStatuses: null == c ? [404] : void 0,
                                signal: b
                            }).catch(a => {
                                if (null != c || !(a instanceof G.FetchError && 404 === a.status)) throw a;
                                return b.throwIfAborted(), e = !0, F.CodexRequest.safeGet("/ps/plugins/{plugin_id}", {
                                    surface: "other",
                                    parameters: {
                                        path: {
                                            plugin_id: d
                                        }
                                    },
                                    additionalHeaders: (0, v.b)("codex"),
                                    signal: b
                                })
                            }),
                            usedCodexFallback: e
                        }
                    }(b, null == c ? f : AbortSignal.any([f, c]), d)
                },
                retry: !1,
                staleTime: 0
            })
        }

        function S(a) {
            return "catalog" === a
        }

        function T(a, b) {
            let c = b ?? (0, y.f)(a);
            return {
                ...V(a, c.plugin.enabled, U(b) ?? []),
                hooks: [],
                marketplaceName: c.marketplaceName,
                marketplacePath: null,
                scheduledTasks: null,
                shareUrl: a.share_url ?? null,
                summary: c.plugin
            }
        }

        function U(a) {
            let b = a?.servicePlugin;
            return null != b && "disabled_skill_names" in b ? b.disabled_skill_names : void 0
        }

        function V(a, b, c) {
            var d;
            let e = (a.release.skills ?? []).map(a => ({
                description: a.description,
                enabled: !c.includes(a.name),
                interface: null == a.interface ? null : {
                    displayName: a.interface.display_name ?? void 0,
                    shortDescription: a.interface.short_description ?? void 0,
                    brandColor: a.interface.brand_color ?? void 0,
                    defaultPrompt: a.interface.default_prompt ?? void 0,
                    iconLargeUrl: a.interface.icon_large_url,
                    iconSmallUrl: a.interface.icon_small_url
                },
                name: a.name,
                path: null,
                shortDescription: a.interface?.short_description ?? null
            }));
            return {
                ...{
                    apps: W(d = a),
                    appTemplates: (d.release.app_templates ?? []).map(a => ({
                        canonicalConnectorId: a.canonical_connector_id ?? null,
                        category: null,
                        description: a.description ?? null,
                        logoUrl: a.logo_url ?? null,
                        logoUrlDark: a.logo_url_dark ?? null,
                        materializedAppIds: i()([...a.materialized_app_ids ?? [], ...(a.instances ?? []).filter(a => "USER" === a.scope).map(a => a.id)], m.a),
                        name: a.name,
                        reason: a.reason ?? null,
                        templateId: a.template_id
                    }))
                },
                description: a.release.interface.long_description ?? a.release.description,
                mcpServers: (a.release.mcp_servers ?? []).map(a => a.key),
                onboardingSkill: b ? e.find(b => b.enabled && b.name === a.release.onboarding_skill_name) ?? null : null,
                skills: e
            }
        }

        function W(a) {
            let b = (a.release.app_templates ?? []).flatMap(a => (a.instances ?? []).filter(a => "USER" === a.scope));
            return i()([...a.release.app_ids ?? [], ...b.map(a => a.id)], m.a).map(c => {
                let d = (0, m.a)(c),
                    e = a.release.app_templates?.find(a => null != a.canonical_connector_id && (0, m.a)(a.canonical_connector_id) === d || a.materialized_app_ids?.some(a => (0, m.a)(a) === d) === !0 || a.instances?.some(a => (0, m.a)(a.id) === d) === !0);
                return {
                    category: null,
                    description: e?.description ?? null,
                    id: c,
                    installUrl: null,
                    name: b.find(a => (0, m.a)(a.id) === d)?.name ?? e?.name ?? c
                }
            })
        }
        c.d(b, {}, {
            a: function(a) {
                let {
                    hostId: b,
                    pluginId: c
                } = a;
                return {
                    hostId: b,
                    marketplacePath: null,
                    pluginName: (0, y.i)(b) ? (0, x.c)(c) ?? null : c,
                    remoteMarketplaceName: k.Zb
                }
            },
            b: function(a) {
                return (0, D.p)(a, `.tmp/bundled-marketplaces/${k.bd}/.agents/plugins/marketplace.json`)
            },
            c: function(a, b) {
                let {
                    accountId: c,
                    hostId: d
                } = b;
                return (0, y.i)(d) && null == c ? [] : a.getQueriesData({
                    queryKey: O(d, c)
                }).flatMap(a => {
                    let [, b] = a;
                    return null == b ? [] : [b]
                })
            },
            d: async function(a, b, c, d, e) {
                let f = R(b, c, void 0, d),
                    g = a.getQueryData(f.queryKey);
                return null != g ? g.plugin.canonical_app_id ?? null : void 0 !== e ? e : (await a.fetchQuery(f)).plugin.canonical_app_id ?? null
            },
            e: R,
            f: T,
            g: function(a) {
                let {
                    hostId: b,
                    pluginId: c,
                    remotePluginId: d,
                    roots: e
                } = a, f = (0, y.i)(b), g = f || null != d || null == c ? null : (0, k.Yg)(c), h = f ? c : d ?? c;
                return null != g && null != c && (h = c.slice(0, -g.length - 1)), {
                    hostId: b,
                    marketplacePath: null,
                    pluginName: h,
                    localMarketplaceName: g,
                    remoteMarketplaceName: f || null != g ? null : k.Zb,
                    roots: e
                }
            },
            h: N,
            i: O,
            j: function(a, b, c) {
                return (0, f.a)({
                    queryKey: ["plugins", "workspace-template-instance", b, c],
                    queryFn: async d => {
                        let e, {
                            signal: f
                        } = d;
                        if (null == b || null == c) throw Error("Workspace template instance requires an account and template");
                        let g = new Set((await (0, y.d)(a, {
                                productContext: "chatgpt",
                                signal: f,
                                surface: "plugin_details"
                            })).map(a => a.plugin.remotePluginId)),
                            h = null;
                        for (let a = 0; a < 20; a++) {
                            let a = await F.CodexRequest.safeGet("/ps/plugins/workspace/template-instances", {
                                surface: "plugin_details",
                                parameters: {
                                    query: {
                                        template_plugin_id: c,
                                        limit: 30,
                                        ...null == e ? {} : {
                                            page_token: e
                                        }
                                    }
                                },
                                additionalHeaders: (0, v.b)("chatgpt"),
                                signal: f
                            });
                            for (let b of a.instances)
                                if (null != b.plugin_id && (null == h && (h = b), g.has(b.plugin_id))) return b;
                            if (0 === g.size && null != h || null == (e = a.pagination.next_page_token ?? void 0)) break
                        }
                        return h
                    },
                    staleTime: E.b.FIVE_MINUTES
                })
            },
            k: Q,
            l: I,
            m: function(a) {
                let b, c, f, g, h, i, k, l, m, n, o, q, u, v, w, x = (0, d.c)(76),
                    {
                        hostId: C,
                        marketplacePath: D,
                        pluginName: F,
                        remoteMarketplaceName: G,
                        localMarketplaceName: H,
                        roots: N,
                        enabled: O,
                        productContext: P,
                        prefetchAppsForUserId: Q
                    } = a,
                    T = void 0 === O || O,
                    W = (0, j.y)(A.a),
                    X = C ?? B.a,
                    Y = (0, j.z)(t.a);
                x[0] !== X ? (b = (0, y.i)(X), x[0] = X, x[1] = b) : b = x[1];
                let Z = b,
                    $ = (0, j.z)(p.b),
                    _ = !Z;
                x[2] !== X || x[3] !== _ ? (c = {
                    enabled: _,
                    hostId: X
                }, x[2] = X, x[3] = _, x[4] = c) : c = x[4];
                let aa = (0, s.a)(c);
                x[5] !== F ? (f = null != F && (0, z.p)(F), x[5] = F, x[6] = f) : f = x[6];
                let ab = f,
                    ac = Z ? B.a : X;
                x[7] !== ab || x[8] !== ac ? (g = {
                    enabled: ab,
                    hostId: ac
                }, x[7] = ab, x[8] = ac, x[9] = g) : g = x[9];
                let ad = (0, r.a)(g),
                    ae = (Z || null != H || null != D || null != G) && null != F,
                    af = (Z ? null != $ : aa) && T && ae && ab && ad.isLoading,
                    ag = (Z ? null != $ : aa) && T && ae && (!ab || ad.available),
                    ah = G ?? null;
                x[10] !== X || x[11] !== H || x[12] !== D || x[13] !== F || x[14] !== Q || x[15] !== P || x[16] !== N || x[17] !== ah ? (h = {
                    hostId: X,
                    marketplacePath: D,
                    pluginName: F,
                    remoteMarketplaceName: ah,
                    localMarketplaceName: H,
                    roots: N,
                    productContext: P,
                    prefetchAppsForUserId: Q
                }, x[10] = X, x[11] = H, x[12] = D, x[13] = F, x[14] = Q, x[15] = P, x[16] = N, x[17] = ah, x[18] = h) : h = x[18], x[19] !== ag ? (i = {
                    enabled: ag
                }, x[19] = ag, x[20] = i) : i = x[20];
                let {
                    data: ai,
                    error: aj,
                    isLoading: ak,
                    refetch: al
                } = (0, j.x)(I, h, i), am = !!ai?.appTemplates.length, an = Z ? F : null;
                !Z && null != ai && (X === B.a || am || ai.apps.length > 0 && ai.mcpServers.length > 0) && (an = ai.summary.remotePluginId ?? ai.summary.shareContext?.remotePluginId ?? null);
                let ao = ag && null != $ && null != an && (Z && null != ai || !1);
                x[21] !== $ || x[22] !== an || x[23] !== P ? (k = R($, an, void 0, P), x[21] = $, x[22] = an, x[23] = P, x[24] = k) : k = x[24];
                let ap = !Z || null != ai,
                    aq = Z ? E.b.FIVE_MINUTES : 0;
                x[25] !== ao || x[26] !== k || x[27] !== ap || x[28] !== aq ? (l = {
                    ...k,
                    subscribed: ap,
                    enabled: ao,
                    staleTime: aq
                }, x[25] = ao, x[26] = k, x[27] = ap, x[28] = aq, x[29] = l) : l = x[29];
                let {
                    data: ar,
                    error: as,
                    isLoading: at,
                    refetch: au
                } = (0, e.a)(l);
                if (!ag || null != ai && Y.includes(ai.summary.id)) {
                    let a;
                    return x[30] !== af ? (a = {
                        loadsCatalogMetadata: !1,
                        errorMessage: null,
                        hostedPlugin: null,
                        localPluginEditMetadata: null,
                        ownership: null,
                        isLoading: af,
                        isTemplate: !1,
                        isV2Template: !1,
                        isTemplateInstance: !1,
                        plugin: null,
                        requiresLocalExecutor: !1,
                        refetch: M
                    }, x[30] = af, x[31] = a) : a = x[31], a
                }
                let av = Z || am ? ar?.plugin.release.app_templates : void 0,
                    aw = Z || am ? ar?.plugin.canonical_app_id : void 0,
                    ax = ao && "catalog" === P,
                    ay = aj?.message ?? (ao ? as?.message ?? null : null),
                    az = Z ? ar?.plugin ?? null : null,
                    aA = !Z && X === B.a && ao && null == as && ar?.plugin.id === an && ar.plugin.workspace_id === $ && !0 !== ar.plugin.is_template && null == ar.plugin.template_plugin_id ? ar.plugin : null,
                    aB = ar?.plugin.scope;
                x[32] !== ar?.plugin || x[33] !== Z ? (m = Z ? (0, y.e)(ar?.plugin) : null, x[32] = ar?.plugin, x[33] = Z, x[34] = m) : m = x[34];
                let aC = Z ? ar?.plugin.source_gizmo_id ?? null : null,
                    aD = ak || ao && at,
                    aE = ar?.plugin.is_template === !0,
                    aF = ar?.plugin.is_v2_template === !0,
                    aG = ar?.plugin.template_plugin_id != null,
                    aH = ar?.plugin;
                x[35] !== aH ? (n = function(a) {
                    let b = a?.personal_mcp_template_setup,
                        c = a?.release.id;
                    if (a?.scope !== "GLOBAL" || !0 !== a.is_v2_template || null == b || 0 === b.url_templates.length || null == c) return;
                    let d = b.auth;
                    return null != d && "oauth" !== d.type ? null : {
                        pluginId: a.id,
                        releaseId: c,
                        mcpKey: b.mcp_key,
                        urlTemplates: b.url_templates,
                        allowsCustomUrl: !0 === b.allows_custom_url,
                        oauth: null == d ? void 0 : {
                            supports_dcr: d.supports_dcr ?? !1,
                            client_credentials_required: d.client_credentials_required ?? !0,
                            declared: d.declared
                        },
                        isOpenaiVerified: b.is_openai_verified
                    }
                }(aH), x[35] = aH, x[36] = n) : n = x[36], x[37] !== $ || x[38] !== ai || x[39] !== ar || x[40] !== Z || x[41] !== P || x[42] !== W ? (o = null != ai && Z && S(P) && ar?.plugin.is_template === !0 ? function(a, b, c, d) {
                    let {
                        interface: e,
                        keywords: f,
                        version: g
                    } = (0, y.f)(d).plugin, h = U(a.query.getData(y.h, {
                        accountId: b,
                        cacheOnly: !0,
                        hostId: B.a,
                        roots: void 0
                    })?.find(a => {
                        let {
                            plugin: b
                        } = a;
                        return b.remotePluginId === d.id
                    })) ?? c.skills.filter(a => !a.enabled).map(a => a.name);
                    return {
                        ...c,
                        ...V(d, c.summary.enabled, h),
                        summary: {
                            ...c.summary,
                            interface: e,
                            keywords: f,
                            version: g
                        }
                    }
                }(W, $, ai, ar.plugin) : ai ?? null, x[37] = $, x[38] = ai, x[39] = ar, x[40] = Z, x[41] = P, x[42] = W, x[43] = o) : o = x[43], x[44] !== ai || x[45] !== ar || x[46] !== Z ? (q = ar?.plugin.release.app_manifest?.apps != null && (Z || ai?.summary.version != null && ai.summary.version === ar.plugin.release.version) ? new Map(Object.entries(ar.plugin.release.app_manifest.apps).map(L)) : void 0, x[44] = ai, x[45] = ar, x[46] = Z, x[47] = q) : q = x[47], x[48] !== av ? (u = null == av ? void 0 : new Set(av.filter(K).map(J)), x[48] = av, x[49] = u) : u = x[49];
                let aI = Z && !ar?.usedCodexFallback ? ar?.plugin : void 0,
                    aJ = Z && ar?.plugin.release.requires_local_executor === !0;
                return x[50] !== Z || x[51] !== ao || x[52] !== al || x[53] !== au ? (v = async () => {
                    await Promise.all([al(), ...!Z && ao ? [au()] : []])
                }, x[50] = Z, x[51] = ao, x[52] = al, x[53] = au, x[54] = v) : v = x[54], x[55] !== av || x[56] !== aw || x[57] !== ax || x[58] !== ay || x[59] !== az || x[60] !== aA || x[61] !== aB || x[62] !== m || x[63] !== aC || x[64] !== aD || x[65] !== aE || x[66] !== aF || x[67] !== aG || x[68] !== n || x[69] !== o || x[70] !== q || x[71] !== u || x[72] !== aI || x[73] !== aJ || x[74] !== v ? (w = {
                    canonicalAppId: aw,
                    loadsCatalogMetadata: ax,
                    errorMessage: ay,
                    hostedPlugin: az,
                    localPluginEditMetadata: aA,
                    pluginScope: aB,
                    ownership: m,
                    sourceGizmoId: aC,
                    isLoading: aD,
                    isTemplate: aE,
                    isV2Template: aF,
                    isTemplateInstance: aG,
                    personalMcpTemplateSetup: n,
                    plugin: o,
                    mcpAppIdsByServerKey: q,
                    setupEligibleAppTemplateIds: u,
                    serviceAppTemplates: av,
                    servicePlugin: aI,
                    requiresLocalExecutor: aJ,
                    refetch: v
                }, x[55] = av, x[56] = aw, x[57] = ax, x[58] = ay, x[59] = az, x[60] = aA, x[61] = aB, x[62] = m, x[63] = aC, x[64] = aD, x[65] = aE, x[66] = aF, x[67] = aG, x[68] = n, x[69] = o, x[70] = q, x[71] = u, x[72] = aI, x[73] = aJ, x[74] = v, x[75] = w) : w = x[75], w
            }
        })
    }),
    aFrt: (function(a, b, c) {
        var d = c("KvQL"),
            e = c("D4ZO"),
            f = c("SaEY"),
            g = c("k7G6"),
            h = c("SlNh"),
            i = c("ueue");

        function j(a) {
            return {
                requiresLocalExecutor: a.requiresLocalExecutor,
                category: a.plugin.interface?.category ?? null,
                creatorName: a.plugin.shareContext?.creatorName?.trim() || null,
                developerName: a.plugin.interface?.developerName,
                description: a.description,
                disabledReason: a.plugin.disabledReason ?? null,
                displayName: a.displayName ?? a.plugin.name,
                enabled: a.plugin.enabled,
                id: (0, e.f)(a.plugin),
                installed: a.plugin.installed,
                isTemplate: !0 === a.isTemplate,
                installationPolicy: a.plugin.installPolicy,
                installedPlugin: a,
                keywords: a.keywords ?? [],
                logoDarkPath: a.logoDarkPath,
                logoPath: a.logoPath,
                marketplaceDisplayName: a.marketplaceDisplayName,
                marketplaceName: a.marketplaceName,
                marketplacePath: a.marketplacePath,
                name: a.plugin.name,
                origin: l(a.marketplaceName),
                pluginId: a.plugin.id,
                pluginSourceType: a.plugin.source.type,
                remoteMarketplaceName: a.remoteMarketplaceName ?? null,
                remotePluginId: a.plugin.remotePluginId ?? a.plugin.shareContext?.remotePluginId ?? null,
                source: "app-server",
                status: (0, f.b)(a.plugin) ? "DISABLED_BY_ADMIN" : "ENABLED"
            }
        }

        function k(a, b) {
            let c, d = a.release.interface;
            return "WORKSPACE" === a.scope ? c = "workspace" : "USER" === a.scope && (c = "user-cloud"), {
                requiresLocalExecutor: !0 === a.release.requires_local_executor,
                category: d.category ?? b?.plugin.interface?.category ?? null,
                connectionAppId: a.canonical_app_id ?? void 0,
                connectorId: a.connector_id ?? void 0,
                creatorName: (("creator_name" in a ? a.creator_name : null) ?? b?.plugin.shareContext?.creatorName)?.trim() || null,
                description: d.short_description ?? a.release.description,
                developerName: d.developer_name,
                disabledReason: a.disabled_reason ?? b?.plugin.disabledReason ?? null,
                displayName: a.release.display_name,
                enabled: b?.plugin.enabled ?? !1,
                id: a.id,
                isTemplate: !0 === a.is_template,
                installed: b?.plugin.installed ?? !1,
                installationPolicy: a.installation_policy,
                installedPlugin: b,
                keywords: d.capabilities,
                logoDarkPath: d.logo_url_dark ?? b?.logoDarkPath ?? null,
                logoPath: d.logo_url ?? b?.logoPath ?? null,
                marketplaceDisplayName: b?.marketplaceDisplayName ?? null,
                marketplaceName: b?.marketplaceName ?? null,
                marketplacePath: b?.marketplacePath ?? null,
                name: b?.plugin.name ?? a.name,
                origin: c,
                pluginId: b?.plugin.id ?? null,
                pluginSourceType: b?.plugin.source.type ?? null,
                remoteMarketplaceName: b?.remoteMarketplaceName ?? null,
                remotePluginId: a.id,
                scope: a.scope,
                source: "plugin-service",
                status: a.status
            }
        }

        function l(a) {
            return "created-by-me-remote" === a ? "user-cloud" : a?.startsWith("workspace-") ? "workspace" : void 0
        }
        c.d(b, {}, {
            a: j,
            b: function(a) {
                let {
                    homeDirectory: b,
                    plugins: c,
                    visibility: d
                } = a, e = (0, h.i)((0, i.e)({
                    plugins: c,
                    isComputerUseAvailable: d.isComputerUseAvailable,
                    isExternalBrowserUseAvailable: d.isExternalBrowserUseAvailable,
                    isInAppBrowserUseAvailable: d.isInAppBrowserUseAvailable,
                    isMessagesAvailable: d.isMessagesAvailable
                }), d.hiddenPluginIds, d.browserExtensionUnificationEnabled), f = (0, h.h)(e), {
                    marketplaceFilterValue: g,
                    plugins: j
                } = (0, h.c)({
                    availablePlugins: e,
                    createdByMeRemotePlugins: null,
                    homeDirectory: b,
                    pluginShares: null,
                    storefrontPlugins: f
                });
                return {
                    createdPlugins: j,
                    marketplacePlugins: f.filter(a => !(0, h.a)(a) && (null == g || (0, i.i)(a) !== g))
                }
            },
            c: function(a) {
                let {
                    createdByCurrentUser: b = !1,
                    hiddenPluginIds: c,
                    installedPlugins: d,
                    localPlugins: e,
                    remotePlugins: f
                } = a, g = new Map;
                for (let a of d)
                    for (let b of [a.plugin.id, a.plugin.remotePluginId, a.plugin.shareContext?.remotePluginId]) null != b && g.set(b, a);
                let i = new Set(c),
                    l = new Set(e.flatMap(a => {
                        let {
                            plugin: b
                        } = a, c = b.remotePluginId ?? b.shareContext?.remotePluginId;
                        return null == c ? [] : [c]
                    }));
                return [...(0, h.e)({
                    plugins: e,
                    query: ""
                }).map(a => ({
                    ...j(a),
                    origin: "local"
                })), ...f.flatMap(a => {
                    let c = g.get(a.id) ?? null;
                    return l.has(a.id) || i.has(a.id) || null != c && i.has(c.plugin.id) ? [] : (l.add(a.id), [{
                        ...k(a, c),
                        origin: b ? "user-cloud" : "workspace"
                    }])
                })]
            },
            d: function(a, b) {
                return (0, g.a)({
                    browseSearch: b?.browseSearch,
                    hostId: b?.hostId,
                    marketplacePath: a.marketplacePath,
                    pluginId: a.pluginId ?? a.id,
                    pluginName: null == a.marketplacePath ? a.remotePluginId ?? a.id : a.name,
                    remoteMarketplaceName: null == a.marketplacePath ? a.remoteMarketplaceName ?? d.Zb : null
                })
            },
            e: function(a, b) {
                return {
                    requiresLocalExecutor: a.requires_local_executor ?? b?.requiresLocalExecutor,
                    category: b?.plugin.interface?.category ?? null,
                    description: a.short_description ?? null,
                    disabledReason: a.disabled_reason ?? b?.plugin.disabledReason ?? null,
                    displayName: a.display_name,
                    enabled: b?.plugin.enabled ?? !1,
                    id: a.id,
                    isTemplate: !0 === a.is_template,
                    installed: void 0 === b ? void 0 : b?.plugin.installed ?? !1,
                    installationPolicy: a.installation_policy ?? void 0,
                    installedPlugin: b,
                    keywords: a.keywords ?? b?.keywords ?? [],
                    logoDarkPath: a.icon_url_dark ?? b?.logoDarkPath ?? null,
                    logoPath: a.icon_url ?? b?.logoPath ?? null,
                    marketplaceDisplayName: b?.marketplaceDisplayName ?? null,
                    marketplaceName: b?.marketplaceName ?? null,
                    marketplacePath: b?.marketplacePath ?? null,
                    name: b?.plugin.name ?? null,
                    origin: l(b?.marketplaceName),
                    pluginId: b?.plugin.id ?? null,
                    pluginSourceType: b?.plugin.source.type ?? null,
                    remoteMarketplaceName: b?.remoteMarketplaceName ?? null,
                    remotePluginId: a.id,
                    source: "plugin-service",
                    status: a.status
                }
            },
            f: k,
            g: function(a, b) {
                let {
                    browserExtensionUnificationEnabled: c,
                    hiddenPluginIds: e,
                    isComputerUseAvailable: f,
                    isExternalBrowserUseAvailable: g,
                    isInAppBrowserUseAvailable: j,
                    isMessagesAvailable: k
                } = b;
                return (0, h.h)((0, h.i)((0, i.e)({
                    isComputerUseAvailable: f,
                    isExternalBrowserUseAvailable: g,
                    isInAppBrowserUseAvailable: j,
                    isMessagesAvailable: k,
                    plugins: a
                }), e, c)).filter(a => {
                    if (!(0, h.a)(a)) return !1;
                    if (!(0, d.Ai)(a.marketplaceName)) return !0;
                    let b = (0, d.kg)(a.plugin.name);
                    return b?.installWhenMissing !== !0 || !0 === b.installWhenMissingRequiresOptIn
                })
            }
        })
    }),
    aaXU: (function(a, b, c) {
        let d = new WeakMap;

        function e(a, b) {
            return null == a ? b : d.get(a) ?? b
        }

        function f(a, b, c) {
            let e = d.get(a);
            d.set(a, b);
            try {
                return c()
            } finally {
                null == e ? d.delete(a) : d.set(a, e)
            }
        }
        c.d(b, {}, {
            a: e,
            b: function(a) {
                return {
                    onFetch(b, c) {
                        let d = e(c, a),
                            g = b.fetchFn;
                        b.fetchFn = () => f(c, d, g)
                    }
                }
            },
            c: f
        })
    }),
    bJEQ: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a) {
                return AbortSignal.any([a, AbortSignal.timeout(3e4)])
            }
        })
    }),
    d4xq: (function(a, b, c) {
        var d = c("Q840");
        c("w0gB");
        var e = c("mGK9"),
            f = c("OWtl");
        c("kfGJ");
        let g = (0, d.d)(f.a, (a, b) => {
            let {
                get: c
            } = b;
            return null
        });
        c.d(b, {}, {
            a: async function(a, b, c) {
                return "chatgpt" === c || "unavailable" === c ? "chatgpt" === c : await (0, e.a)(a, b) === "chatgpt"
            },
            b: function(a) {
                return null == a ? [] : [a]
            },
            c: g
        })
    }),
    G5ZH: (function(a, b, c) {
        var d = c("i5ac"),
            e = c.n(d),
            f = c("Q840"),
            g = c("KvQL"),
            h = c("OiCI"),
            i = c("jEyg"),
            j = c("C0re"),
            k = c("tQpF"),
            l = c("EEop"),
            m = c("ueue"),
            n = c("Gg2s"),
            o = c("OWtl"),
            p = c("ndjw"),
            q = c("eShZ"),
            r = c("cLdu"),
            s = c("mq2k");
        let t = (0, f.q)(o.a, (a, b) => {
            let {
                hostId: c,
                pluginId: d,
                allowUniqueNameFallback: f = !1,
                productContext: o,
                requestOptions: q
            } = a, {
                get: t,
                scope: v
            } = b, w = !(0, r.i)(c);
            return {
                queryKey: [...(0, j.d)(c, "requested"), t(h.a), d, f, o, w ? t(p.j, {
                    hostId: c
                }).data?.roots : void 0, w ? t(s.b, c) : void 0, w ? t(p.d, {
                    hostId: c
                }).data?.codexHome : void 0],
                enabled: null != d,
                queryFn: async a => {
                    let {
                        signal: b
                    } = a;
                    if (null == d) return null;
                    if ((0, r.i)(c)) {
                        let a = (0, l.a)({
                            hostId: c,
                            pluginId: (0, k.f)({
                                id: d
                            }, !0) ?? d
                        });
                        if (null == a.pluginName) return null;
                        let b = await v.query.getOrFetch(l.l, {
                            ...a,
                            productContext: o
                        }).catch(u);
                        return null == b ? null : (0, m.c)(b)
                    }
                    let h = d;
                    (0, g.Yg)(d) === g.cd && (null == v.get(s.b, c) && (await v.query.getOrFetch(n.b, c), await v.when(a => {
                        let {
                            get: b
                        } = a;
                        return null != b(s.b, c)
                    }), b.throwIfAborted()), v.get(s.b, c) && (h = `${d.slice(0,-g.cd.length)}${g.dd}`));
                    let [{
                        roots: j
                    }, {
                        codexHome: t
                    }] = await Promise.all([v.query.getOrFetch(p.j, {
                        hostId: c
                    }), v.query.getOrFetch(p.d, {
                        hostId: c
                    })]), [w, x] = await Promise.all([v.query.getOrFetch(r.b, {
                        hostId: c,
                        roots: j,
                        requestOptions: q
                    }), v.query.getOrFetch(m.s, {
                        hostId: c,
                        roots: (0, m.m)({
                            hostId: c,
                            codexHome: t,
                            workspaceRoots: j
                        }),
                        marketplaceKinds: ["local"],
                        isOpenAICuratedRemoteMarketplaceEnabled: !1
                    })]), y = e()([...(0, m.g)(w.marketplaces), ...x.plugins], a => {
                        let {
                            plugin: b,
                            marketplacePath: c
                        } = a;
                        return JSON.stringify([b.id, c])
                    }), z = (0, i.i)({
                        requestedPluginId: h,
                        plugins: y
                    });
                    if (null != z) return z;
                    b.throwIfAborted();
                    let A = (0, g.Yg)(h),
                        B = null == A ? h : h.slice(0, -A.length - 1),
                        C = (0, k.f)({
                            id: h
                        }, !0 === v.get(s.b, c)),
                        D = null == C ? x.marketplaces.find(a => {
                            let {
                                name: b
                            } = a;
                            return b === A
                        })?.path ?? null : null,
                        E = null != C || null == A ? g.Zb : A,
                        F = await v.queryClient.fetchQuery({
                            ...v.query.getOptions(l.l, {
                                hostId: c,
                                productContext: o,
                                marketplacePath: D,
                                pluginName: C ?? B,
                                remoteMarketplaceName: null == D ? E : null,
                                requestOptions: q
                            }),
                            retry: !1,
                            staleTime: 0
                        }).catch(u);
                    if (null == F) return (0, i.i)({
                        requestedPluginId: h,
                        plugins: y,
                        allowUniqueNameFallback: f
                    });
                    let G = F.summary;
                    return G.id === h || null != G.remotePluginId && (0, g.Pi)(G.remotePluginId, h) || G.shareContext?.remotePluginId === h || null != C && G.remotePluginId === C ? (0, m.c)(F) : null
                },
                retry: !1,
                staleTime: 0
            }
        });

        function u(a) {
            if (a instanceof q.FetchError && 404 === a.status || /plugin.*not found|not found.*plugin/i.test(a.message)) return null;
            throw a
        }
        c.d(b, {}, {
            a: t
        })
    }),
    cLdu: (function(a, b, c) {
        c.d(b, {
            a: () => J,
            b: () => K,
            c: () => L,
            d: () => Q,
            e: () => S,
            f: () => T,
            g: () => R,
            h: () => M,
            i: () => r.f,
            j: () => P,
            k: () => O,
            l: () => N
        });
        var d = c("QosV"),
            e = c("KUdL"),
            f = c.n(e),
            g = c("Q840"),
            h = c("KvQL"),
            i = c("D4ZO"),
            j = c("CjTC"),
            k = c("Dgwo"),
            l = c("rljs"),
            m = c("D5PZ"),
            n = c("OiCI"),
            o = c("OFP1"),
            p = c("h6fL"),
            q = c("IVVU"),
            r = c("C0re"),
            s = c("WzdM"),
            t = c("ueue"),
            u = c("OWtl"),
            v = c("ndjw"),
            w = c("kfGJ"),
            x = c("WFY2"),
            y = c("zUz7"),
            z = c("rvFo"),
            A = c("HFSu"),
            B = c("lAQI"),
            C = c("CsuQ");
        let D = B.F({
                app_id: B.L(),
                tool_name: B.L(),
                type: B.p(["global", "settings", "thread", "file"]),
                title: B.L(),
                icons: B.g(B.F({
                    src: B.L(),
                    mimeType: B.L().nullish(),
                    sizes: B.g(B.L()).nullish(),
                    theme: B.L().nullish()
                }))
            }).transform(a => {
                let {
                    app_id: b,
                    tool_name: c,
                    ...d
                } = a;
                return {
                    ...d,
                    appId: b,
                    toolName: c
                }
            }),
            E = B.F({
                app_id: B.L(),
                link_id: B.L(),
                tool_name: B.L(),
                title: B.L(),
                search_hint: B.L().trim().min(1).optional().catch(void 0),
                call: B.F({
                    name: B.L().min(1),
                    arguments: B.J(B.L(), B.x()),
                    _meta: B.F({
                        _codex_apps: B.F({
                            resource_uri: B.L().min(1)
                        }).catchall(B.x())
                    }).catchall(B.x())
                })
            }).transform(a => {
                let {
                    app_id: b,
                    link_id: c,
                    tool_name: d,
                    search_hint: e,
                    ...f
                } = a;
                return {
                    ...f,
                    appId: b,
                    linkId: c,
                    toolName: d,
                    searchHint: e
                }
            }),
            F = B.F({
                entrypoints: B.g(D).nullish(),
                search_mention_providers: B.g(E.nullable().catch(null)).catch([]).transform(a => a.filter(a => null != a)),
                settings_entrypoints: B.g(D).nullish(),
                thread_entrypoints: B.g(D).nullish(),
                file_handlers: B.g(D).nullish(),
                settings: B.g(B.F({
                    app_id: B.L(),
                    read_tool_name: B.L(),
                    update_tool_name: B.L()
                })).nullish()
            }).transform(a => ({
                searchMentionProviders: a.search_mention_providers,
                entrypoints: [...a.entrypoints ?? [], ...a.settings_entrypoints ?? [], ...a.thread_entrypoints ?? [], ...a.file_handlers ?? []],
                settings: (a.settings ?? []).map(a => ({
                    appId: a.app_id,
                    readToolName: a.read_tool_name,
                    updateToolName: a.update_tool_name
                }))
            }));
        var G = c("aaXU"),
            H = c("bJEQ"),
            I = c("mq2k");
        let J = w.a,
            K = (0, g.q)(u.a, (a, b) => {
                let {
                    hostId: c,
                    roots: d,
                    requestOptions: e
                } = a, {
                    scope: f
                } = b;
                return {
                    queryKey: [...(0, r.b)(c, "installed-inventory"), d, e?.priority ?? "background"],
                    queryFn: async () => {
                        x.a.info("Loading local plugin inventory", {
                            safe: {},
                            sensitive: {
                                hostId: c
                            }
                        });
                        try {
                            let a = await (0, k.b)(f, c).sendRequest("plugin/installed", null != d && d.length > 0 ? {
                                cwds: d
                            } : {}, {
                                priority: "background",
                                timeoutMs: 3e4,
                                ...e
                            });
                            return x.a.info("Loaded local plugin inventory", {
                                safe: {},
                                sensitive: {
                                    hostId: c
                                }
                            }), a
                        } catch (a) {
                            throw x.a.warning("Failed to load local plugin inventory", {
                                safe: {},
                                sensitive: {
                                    hostId: c,
                                    error: a
                                }
                            }), a
                        }
                    },
                    retry: !1,
                    staleTime: 0
                }
            });

        function L(a, b, c) {
            let d = a.queryClient.getQueriesData({
                    queryKey: (0, r.b)(b, "installed-inventory")
                }).flatMap(a => {
                    let [, b] = a;
                    return (b?.marketplaces ?? []).flatMap(a => {
                        let {
                            plugins: b
                        } = a;
                        return b.filter(a => a.installed && (a.id === c || (0, j.a)(a) === c))
                    })
                }),
                e = a.queryClient.getQueriesData({
                    queryKey: (0, r.d)(b, "installed")
                }).flatMap(a => {
                    let [, b] = a;
                    return (b ?? []).filter(a => {
                        let {
                            plugin: b
                        } = a;
                        return b.installed && (b.id === c || (0, j.a)(b) === c)
                    })
                }),
                f = new Set([...d.map(j.a), ...e.map(a => {
                    let {
                        plugin: b
                    } = a;
                    return (0, j.a)(b)
                })]);
            return 1 === f.size ? [...f][0] ?? void 0 : void 0
        }
        let M = (0, g.q)(u.a, (a, b) => {
            let {
                accountId: c,
                cacheOnly: d = !1,
                hostId: e,
                consumer: g = "ui",
                roots: i,
                productContext: j,
                includeExtensions: k = !0
            } = a, {
                get: m,
                queryClient: o,
                scope: p
            } = b, u = (0, r.f)(e), v = "chatgpt", y = !!u || m(d ? I.a : I.b, e), B = "executor" === g ? [] : m(d ? q.b : q.a);
            return {
                enabled: !d && (u ? null != c : null != i && (e === w.a || "connected" === m(l.b, e))),
                queryKey: u ? [...t.a, "installed", e, "hosted", c, ...null == j || j === v ? [] : [j], ...k ? [] : ["without-extensions"]] : [...(0, r.b)(e, "installed"), i, ..."executor" === g ? [g] : []],
                behavior: (0, G.b)("other"),
                queryFn: async a => {
                    let {
                        signal: b,
                        queryKey: d
                    } = a;
                    if (u) {
                        let a = o.getQueryCache().find({
                                queryKey: d,
                                exact: !0
                            }),
                            e = await async function(a) {
                                let b, {
                                        accountId: c,
                                        includeExtensions: d,
                                        productContext: e,
                                        signal: f,
                                        surface: g
                                    } = a,
                                    i = [];
                                x.a.info("Loading hosted plugin inventory", {
                                    safe: {
                                        productContext: e,
                                        surface: g,
                                        includeExtensions: d ?? ("chatgpt" === e || void 0)
                                    }
                                });
                                do {
                                    let a = await A.CodexRequest.safeGet("/ps/plugins/installed", {
                                        parameters: {
                                            query: {
                                                limit: 1e3,
                                                pageToken: b,
                                                includeExtensions: d ?? ("chatgpt" === e || void 0)
                                            }
                                        },
                                        additionalHeaders: {
                                            ...null == c ? {} : {
                                                "ChatGPT-Account-ID": c
                                            },
                                            ...(0, s.b)(e),
                                            [h.Db]: g
                                        },
                                        signal: null == f ? void 0 : (0, H.a)(f)
                                    }).catch(a => {
                                        throw x.a[f?.aborted ? "info" : "warning"](f?.aborted ? "Cancelled hosted plugin inventory read" : "Failed to read hosted plugin inventory", {
                                            safe: {
                                                productContext: e,
                                                surface: g
                                            },
                                            sensitive: {
                                                error: a
                                            }
                                        }), a
                                    });
                                    i.push(...a.plugins), b = a.pagination.next_page_token ?? void 0
                                } while (null != b) return x.a.info("Loaded hosted plugin inventory", {
                                    safe: {
                                        productContext: e,
                                        surface: g,
                                        pluginCount: i.length
                                    }
                                }), i
                            }({
                                accountId: c ?? void 0,
                                includeExtensions: k,
                                surface: (0, G.a)(a, "other"),
                                productContext: j ?? v,
                                signal: b
                            });
                        if (p.get(n.a) !== c) throw Error("Plugin account changed while loading installed plugins");
                        return e.map(T)
                    }
                    let {
                        marketplaces: f
                    } = await p.query.fetch(K, {
                        hostId: e,
                        roots: i
                    });
                    return (0, t.n)({
                        hostId: e,
                        plugins: (0, t.g)(f, void 0, g),
                        queryClient: o,
                        signal: (0, H.a)(b)
                    })
                },
                select: a => f()(a.filter(a => {
                    let {
                        marketplaceName: b,
                        plugin: c
                    } = a;
                    return (!y || b !== h.cd) && !B.includes(c.id)
                }), a => {
                    let {
                        plugin: b
                    } = a;
                    return -(b.installedAt ?? 0)
                }),
                retry: !1,
                staleTime: u ? z.b.FIVE_MINUTES : z.b.ONE_MINUTE
            }
        });

        function N(a) {
            let b, c, e, f, h, i, j, k, l = (0, d.c)(21),
                {
                    enabled: m,
                    hostId: o,
                    consumer: q,
                    roots: s,
                    resolveActiveRoots: t,
                    productContext: u,
                    includeExtensions: x
                } = a,
                y = void 0 === m || m,
                z = void 0 === q ? "ui" : q,
                A = void 0 !== t && t;
            l[0] !== o ? (b = (0, r.f)(o), l[0] = o, l[1] = b) : b = l[1];
            let B = b,
                C = (0, p.b)(B ? w.a : o),
                D = (0, g.z)(n.a);
            (0, g.z)(n.d), l[2] !== o ? (c = {
                hostId: o
            }, l[2] = o, l[3] = c) : c = l[3];
            let E = y && !B && A && null == s;
            l[4] !== E ? (e = {
                enabled: E
            }, l[4] = E, l[5] = e) : e = l[5];
            let {
                data: F,
                isError: G
            } = (0, g.x)(v.j, c, e), H = A ? s ?? F?.roots : s, I = B ? D : null;
            l[6] !== z || l[7] !== o || l[8] !== x || l[9] !== H || l[10] !== u || l[11] !== I ? (f = {
                accountId: I,
                hostId: o,
                consumer: z,
                roots: H,
                productContext: u,
                includeExtensions: x
            }, l[6] = z, l[7] = o, l[8] = x, l[9] = H, l[10] = u, l[11] = I, l[12] = f) : f = l[12];
            let J = y && (B || C?.isLoading !== !0);
            l[13] !== J ? (h = {
                enabled: J
            }, l[13] = J, l[14] = h) : h = l[14];
            let K = (0, g.x)(M, f, h);
            l[15] !== K ? ({
                isLoading: j,
                ...i
            } = K, l[15] = K, l[16] = i, l[17] = j) : (i = l[16], j = l[17]);
            let L = y && (j || !B && (C?.isLoading === !0 || null == H && !(A && G)));
            return l[18] !== i || l[19] !== L ? (k = {
                ...i,
                isLoading: L
            }, l[18] = i, l[19] = L, l[20] = k) : k = l[20], k
        }

        function O(a, b, c) {
            let d = (0, r.f)(b),
                e = d ? (0, n.c)(a) ?? null : null,
                f = d ? void 0 : a.query.getData(v.j, {
                    hostId: b
                })?.roots;
            if ((d ? null != e : null != f) && (c.marketplaceName !== h.cd || !0 !== a.get(I.b, b)))
                for (let g of d ? [void 0, "catalog"] : [void 0]) a.query.setData(M, {
                    accountId: e,
                    hostId: b,
                    roots: f,
                    productContext: g
                }, a => {
                    if (null == a) return;
                    let b = (0, i.f)(c.plugin),
                        d = a.find(a => {
                            let {
                                plugin: c
                            } = a;
                            return (0, i.f)(c) === b
                        }),
                        e = {
                            ...c,
                            plugin: {
                                ...c.plugin,
                                enabled: !0,
                                installed: !0,
                                installedAt: c.plugin.installedAt ?? d?.plugin.installedAt ?? null
                            }
                        };
                    return null != d ? a.map(a => (0, i.f)(a.plugin) === b ? e : a) : [...a, e]
                })
        }
        async function P(a, b, c) {
            if ((0, r.f)(b)) {
                let d = {
                    accountId: (0, n.c)(a) ?? null,
                    hostId: b,
                    roots: void 0,
                    productContext: c
                };
                if (!1 === a.query.getOptions(M, d).enabled) return;
                await R(a, d, "sidebar");
                return
            }
            let {
                roots: d
            } = await a.query.getOrFetch(v.j, {
                hostId: b
            }), {
                authLoading: e
            } = a.get(o.g);
            if (e) return;
            let f = {
                accountId: null,
                hostId: b,
                roots: d
            };
            !1 !== a.query.getOptions(M, f).enabled && await a.query.getOrFetch(M, f)
        }
        async function Q(a, b) {
            let {
                productContext: c,
                signal: d,
                surface: e
            } = b;
            d?.throwIfAborted();
            let f = a.get(n.a);
            if (null == f) throw Error("Installed plugins require an authenticated account");
            let g = await R(a, {
                accountId: f,
                hostId: w.a,
                roots: void 0,
                productContext: "chatgpt" === c ? void 0 : c
            }, e);
            if (d?.throwIfAborted(), a.get(n.a) !== f) throw Error("Plugin account changed while loading installed plugins");
            return g
        }

        function R(a, b, c) {
            let d = a.query.snapshot(M, b),
                e = a.queryClient.getQueryCache().build(a.queryClient, a.queryClient.defaultQueryOptions(d.getOptions()));
            return (0, G.c)(e, c, () => d.getOrFetch())
        }

        function S(a) {
            return null == a ? null : {
                creatorAccountUserId: a.creator_account_user_id ?? null,
                scope: a.scope,
                workspaceId: a.workspace_id
            }
        }

        function T(a) {
            var b, c;
            let d, e = a.release.interface,
                f = "enabled" in a,
                g = a.release.keywords ?? e.capabilities,
                i = f && a.enabled && "ENABLED" === a.status ? a.release.skills?.find(b => b.name === a.release.onboarding_skill_name && !a.disabled_skill_names.includes(b.name)) : null,
                j = (b = "extensions" in a ? a.extensions : void 0, c = a.id, d = F.safeParse(b), null == b || d.success || x.a.warning("Ignored invalid hosted plugin extension declarations", {
                    safe: {
                        pluginId: c
                    },
                    sensitive: {
                        validationErrors: C.e(d.error)
                    }
                }), d.success ? d.data : null);
            return {
                referenceIds: "WORKSPACE" === a.scope && null != a.discoverability ? [`${a.name}@${"LISTED"===a.discoverability?"workspace-directory":"workspace-shared-with-me"}`] : void 0,
                defaultPinned: "extensions" in a && a.extensions?.default_pinned === !0,
                canonicalAppId: a.canonical_app_id ?? null,
                discoverability: a.discoverability,
                hostedThreadEntrypoints: "extensions" in a ? a.extensions?.thread_entrypoints?.flatMap(a => {
                    let b = (0, m.a)({
                        appId: a.app_id,
                        toolName: a.tool_name,
                        title: a.title,
                        resourceUri: a.resource_uri,
                        icon: (0, y.a)(a),
                        linkId: a.link_id ?? void 0
                    });
                    return null == b ? [] : [b]
                }) : void 0,
                appIds: [a.canonical_app_id, a.connector_id, ...a.release.app_ids ?? []].filter(a => null != a),
                onboardingSkill: null == i ? null : {
                    name: i.name,
                    id: i.plugin_release_skill_id
                },
                isTemplate: a.is_template ?? !1,
                templatePluginId: a.template_plugin_id ?? null,
                ownership: S(a),
                extensions: j,
                servicePlugin: a,
                description: e.short_description ?? a.release.description,
                displayName: a.release.display_name,
                composerIconPath: e.composer_icon_url ?? null,
                logoDarkPath: e.logo_url_dark ?? null,
                logoPath: e.logo_url,
                marketplaceDisplayName: null,
                marketplaceName: h.dd,
                marketplacePath: null,
                remoteMarketplaceName: h.dd,
                keywords: g,
                requiresLocalExecutor: !0 === a.release.requires_local_executor,
                plugin: {
                    authPolicy: a.authentication_policy ?? "ON_USE",
                    installedAt: f && null != a.installed_at ? Date.parse(a.installed_at) / 1e3 : null,
                    disabledReason: a.disabled_reason ?? ("DISABLED_BY_ADMIN" === a.status ? "disabled_by_admin" : null),
                    eligiblePlanTypes: a.eligible_plan_types ?? null,
                    availability: "DISABLED_BY_ADMIN" === a.status ? "DISABLED_BY_ADMIN" : "AVAILABLE",
                    enabled: f && a.enabled,
                    id: `${a.name}@${h.dd}`,
                    installed: f,
                    installPolicy: a.installation_policy ?? "AVAILABLE",
                    installPolicySource: a.installation_policy_source ?? null,
                    interface: {
                        brandColor: e.brand_color ?? null,
                        capabilities: e.capabilities,
                        category: e.category,
                        composerIcon: null,
                        composerIconUrl: e.composer_icon_url ?? null,
                        defaultPrompt: e.default_prompts ?? (null == e.default_prompt ? null : [e.default_prompt]),
                        developerName: e.developer_name ?? null,
                        displayName: a.release.display_name,
                        logo: null,
                        logoDark: null,
                        logoUrl: e.logo_url,
                        logoUrlDark: e.logo_url_dark ?? null,
                        longDescription: e.long_description ?? null,
                        privacyPolicyUrl: e.privacy_policy_url ?? null,
                        screenshots: [],
                        screenshotUrls: e.screenshot_urls ?? [],
                        shortDescription: e.short_description,
                        termsOfServiceUrl: e.terms_of_service_url ?? null,
                        websiteUrl: e.website_url ?? null
                    },
                    keywords: g,
                    localVersion: null,
                    mustShowInstallationInterstitial: a.must_show_installation_interstitial ?? null,
                    name: a.name,
                    remotePluginId: a.id,
                    shareContext: null,
                    source: {
                        type: "remote"
                    },
                    version: a.release.version ?? null
                }
            }
        }
    }),
    Buqh: (function(a, b, c) {
        var d = c("Q840"),
            e = c("KvQL"),
            f = c("Dgwo"),
            g = c("tl5a"),
            h = c("IVVU"),
            i = c("C0re"),
            j = c("ueue"),
            k = c("OWtl"),
            l = c("ndjw"),
            m = c("kfGJ"),
            n = c("rvFo"),
            o = c("bJEQ"),
            p = c("mq2k");
        let q = (0, d.q)(k.a, (a, b) => {
            let {
                get: c,
                queryClient: d,
                scope: k
            } = b, q = c(p.b, a), r = c(h.a), {
                data: s,
                isFetched: t
            } = c(l.j, {
                hostId: a
            }), {
                data: u,
                isFetched: v
            } = c(l.d, {
                hostId: a
            }), w = (0, j.m)({
                codexHome: u?.codexHome,
                hostId: a,
                workspaceRoots: s?.roots
            });
            return {
                enabled: t && v && (a === m.a || "connected" === c(g.b, a)),
                queryKey: [...(0, i.b)(a, "local"), w],
                queryFn: async b => {
                    let {
                        signal: c
                    } = b, {
                        featuredPluginIds: e,
                        marketplaceLoadErrors: g,
                        marketplaces: h
                    } = await (0, f.b)(k, a).sendRequest("plugin/list", {
                        ...w.length > 0 ? {
                            cwds: w
                        } : {},
                        marketplaceKinds: ["local"]
                    });
                    return {
                        featuredPluginIds: e,
                        marketplaceLoadErrors: g,
                        marketplaces: (0, j.t)(h),
                        plugins: await (0, j.n)({
                            hostId: a,
                            plugins: (0, j.g)(h),
                            queryClient: d,
                            signal: (0, o.a)(c)
                        })
                    }
                },
                retry: !1,
                select: a => ({
                    ...a,
                    plugins: a.plugins.filter(a => {
                        let {
                            marketplaceName: b,
                            plugin: c
                        } = a;
                        return (!q || b !== e.cd) && !r.includes(c.id)
                    })
                }),
                staleTime: n.b.ONE_MINUTE
            }
        });
        c.d(b, {}, {
            a: q,
            b: async function(a, b) {
                await Promise.all([a.query.getOrFetch(l.j, {
                    hostId: b
                }), a.query.getOrFetch(l.d, {
                    hostId: b
                })]), !1 !== a.query.getOptions(q, b).enabled && await a.query.getOrFetch(q, b)
            }
        })
    }),
    PwKw: (function(a, b, c) {
        var d = c("QosV"),
            e = c("Q840"),
            f = c("OiCI"),
            g = c("usf5"),
            h = c("IIEq"),
            i = c("jWaO"),
            j = c("yrds"),
            k = c("Vyeu"),
            l = c("IVVU"),
            m = c("C0re"),
            n = c("WzdM"),
            o = c("SlNh"),
            p = c("ueue"),
            q = c("Gg2s"),
            r = c("OWtl"),
            s = c("ndjw"),
            t = c("kfGJ"),
            u = c("rvFo"),
            v = c("HFSu"),
            w = c("aFrt"),
            x = c("aaXU"),
            y = c("bJEQ"),
            z = c("d4xq"),
            A = c("cLdu"),
            B = c("Buqh"),
            C = c("mq2k");
        let D = (0, e.q)(r.a, (a, b) => {
            let {
                get: c,
                queryClient: d,
                scope: e
            } = b, g = c(z.c, a), h = c(f.a);
            return {
                enabled: null != h,
                queryKey: (0, m.c)(a, "home", ...null == h ? [] : [h], ...(0, z.b)(g)),
                behavior: (0, x.b)("plugin_directory"),
                queryFn: async b => {
                    let {
                        signal: c,
                        queryKey: f
                    } = b, h = (0, x.a)(d.getQueryCache().find({
                        queryKey: f,
                        exact: !0
                    }), "plugin_directory");
                    return a === t.a || await (0, z.a)(e, a, g) ? v.CodexRequest.safeGet("/ps/plugins/home", {
                        additionalHeaders: (0, n.b)(),
                        surface: h,
                        signal: (0, y.a)(c)
                    }) : null
                },
                retry: !1,
                staleTime: u.b.ONE_HOUR,
                gcTime: u.b.ONE_HOUR
            }
        });
        c.d(b, {}, {
            a: async function(a, b, c) {
                if (null == (0, f.c)(a)) return;
                let d = async () => {
                    let d = a.query.snapshot(D, b);
                    if (void 0 !== d.getData()) return;
                    let e = a.queryClient.getQueryCache().build(a.queryClient, a.queryClient.defaultQueryOptions(d.getOptions()));
                    await (0, x.c)(e, c, () => d.getOrFetch())
                };
                b === t.a ? await d() : await (0, z.a)(a, b, a.get(z.c, b)) ? (await a.query.getOrFetch(q.b, b), await Promise.all([...a.get(C.b, b) ? [d()] : [], (0, B.b)(a, b)])) : await (0, B.b)(a, b)
            },
            b: D,
            c: function(a) {
                let b, c, f, m, n, r, u, v, x, y, z, E, F, G, H = (0, d.c)(50),
                    {
                        hostId: I
                    } = a,
                    J = void 0 === I ? t.a : I,
                    K = J === t.a,
                    L = !K;
                H[0] !== L ? (b = {
                    enabled: L
                }, H[0] = L, H[1] = b) : b = H[1];
                let {
                    isLoading: M
                } = (0, e.x)(q.b, J, b), N = (0, e.x)(C.b, J);
                H[2] !== J ? (c = {
                    hostId: J
                }, H[2] = J, H[3] = c) : c = H[3];
                let O = !K;
                H[4] !== O ? (f = {
                    enabled: O
                }, H[4] = O, H[5] = f) : f = H[5];
                let {
                    data: P,
                    isLoading: Q
                } = (0, e.x)(s.j, c, f);
                H[6] !== J ? (m = {
                    hostId: J
                }, H[6] = J, H[7] = m) : m = H[7];
                let R = !K;
                H[8] !== R ? (n = {
                    enabled: R
                }, H[8] = R, H[9] = n) : n = H[9];
                let {
                    isLoading: S
                } = (0, e.x)(s.d, m, n), T = !K;
                H[10] !== T ? (r = {
                    enabled: T
                }, H[10] = T, H[11] = r) : r = H[11];
                let {
                    data: U,
                    error: V,
                    isLoading: W
                } = (0, e.x)(B.a, J, r), X = !0 === N;
                H[12] !== X ? (u = {
                    enabled: X
                }, H[12] = X, H[13] = u) : u = H[13];
                let {
                    data: Y,
                    error: Z,
                    isLoading: $
                } = (0, e.x)(D, J, u), _ = P?.roots;
                H[14] !== J || H[15] !== _ ? (v = {
                    hostId: J,
                    roots: _,
                    productContext: "catalog"
                }, H[14] = J, H[15] = _, H[16] = v) : v = H[16];
                let {
                    data: aa,
                    error: ab
                } = (0, A.l)(v), ac = (0, g.b)(), ad = !K;
                H[17] !== J || H[18] !== ad ? (x = {
                    enabled: ad,
                    hostId: J
                }, H[17] = J, H[18] = ad, H[19] = x) : x = H[19];
                let ae = (0, h.a)(x);
                H[20] !== ae || H[21] !== J ? (y = {
                    computerUseAvailability: ae,
                    hostId: J
                }, H[20] = ae, H[21] = J, H[22] = y) : y = H[22];
                let af = (0, k.a)(y),
                    ag = !K;
                H[23] !== J || H[24] !== ag ? (z = {
                    enabled: ag,
                    hostId: J
                }, H[23] = J, H[24] = ag, H[25] = z) : z = H[25];
                let ah = (0, i.a)(z),
                    ai = !K;
                H[26] !== J || H[27] !== ai ? (E = {
                    enabled: ai,
                    hostId: J
                }, H[26] = J, H[27] = ai, H[28] = E) : E = H[28];
                let aj = (0, j.a)(E),
                    {
                        hiddenPluginIds: ak
                    } = (0, e.z)(l.g),
                    al = (N ? Z : null) ?? (K ? null : V) ?? ab ?? null,
                    am = null == N || N && $ || !K && (M || Q || S || W || ae.isLoading || ah.isLoading || aj.isLoading || af.isLoading);
                if (null != al || am || !K && null == U || N && void 0 === Y) {
                    let a;
                    return H[29] !== al || H[30] !== am ? (a = {
                        categories: void 0,
                        error: al,
                        isLoading: am
                    }, H[29] = al, H[30] = am, H[31] = a) : a = H[31], a
                }
                if (H[32] !== ac || H[33] !== ae.available || H[34] !== ah.available || H[35] !== ak || H[36] !== aj.available || H[37] !== aa || H[38] !== K || H[39] !== N || H[40] !== U?.featuredPluginIds || H[41] !== U?.plugins || H[42] !== af.available || H[43] !== Y) {
                    let a, b = {
                        isComputerUseAvailable: ae.available,
                        isExternalBrowserUseAvailable: ah.available,
                        isInAppBrowserUseAvailable: aj.available,
                        isMessagesAvailable: af.available
                    };
                    H[45] !== K || H[46] !== U?.featuredPluginIds ? (a = K ? [] : U?.featuredPluginIds ?? [], H[45] = K, H[46] = U?.featuredPluginIds, H[47] = a) : a = H[47], F = function(a) {
                        let {
                            featuredPluginIds: b,
                            hiddenPluginIds: c,
                            installedPlugins: d,
                            localPlugins: e,
                            remoteHome: f
                        } = a, g = new Map;
                        for (let a of [...d ?? [], ...e])
                            for (let b of [a.plugin.id, a.plugin.remotePluginId, a.plugin.shareContext?.remotePluginId]) null != b && g.set(b, a);
                        let h = new Set(c),
                            i = new Map;
                        for (let a of f?.sections ?? []) {
                            let b = a.id,
                                c = a.plugins.flatMap(a => {
                                    let b = g.get(a.id) ?? (null == d ? void 0 : null);
                                    return h.has(a.id) || null != b && h.has(b.plugin.id) ? [] : [(0, w.e)(a, b)]
                                }),
                                e = a.id.trim() || a.url_slug?.trim();
                            e && c.forEach((a, b) => {
                                a.homeImpressionPlacement = {
                                    sectionId: e,
                                    position: b
                                }
                            });
                            let f = i.get(b);
                            null == f ? i.set(b, {
                                id: b,
                                title: a.title,
                                urlSlug: a.url_slug,
                                plugins: c
                            }) : (f.plugins.push(...c), null != a.url_slug && (f.urlSlug = a.url_slug))
                        }
                        if (null == f) {
                            let a = new Set;
                            for (let {
                                    plugins: c,
                                    section: d
                                }
                                of(0, o.g)({
                                    connectedPlugins: [],
                                    featuredPluginIds: b,
                                    plugins: e
                                })) {
                                let b = c.flatMap(b => a.has(b.plugin.id) ? [] : (a.add(b.plugin.id), [(0, w.a)(b)])),
                                    e = i.get(d.id);
                                null != e ? e.plugins.unshift(...b) : i.set(d.id, {
                                    id: d.id,
                                    title: d.title,
                                    urlSlug: null,
                                    plugins: b
                                })
                            }
                        }
                        return Array.from(i.values()).filter(a => {
                            let {
                                plugins: b
                            } = a;
                            return b.length > 0
                        }).map(a => ({
                            ...a,
                            plugins: a.plugins.slice(0, 9)
                        }))
                    }({
                        featuredPluginIds: (0, p.d)({
                            featuredPluginIds: a,
                            ...b
                        }),
                        hiddenPluginIds: ak,
                        installedPlugins: aa,
                        localPlugins: (0, w.g)(K ? [] : U?.plugins ?? [], {
                            browserExtensionUnificationEnabled: ac,
                            hiddenPluginIds: ak,
                            ...b
                        }),
                        remoteHome: N ? Y ?? void 0 : void 0
                    }), H[32] = ac, H[33] = ae.available, H[34] = ah.available, H[35] = ak, H[36] = aj.available, H[37] = aa, H[38] = K, H[39] = N, H[40] = U?.featuredPluginIds, H[41] = U?.plugins, H[42] = af.available, H[43] = Y, H[44] = F
                } else F = H[44];
                return H[48] !== F ? (G = {
                    categories: F,
                    error: null,
                    isLoading: !1
                }, H[48] = F, H[49] = G) : G = H[49], G
            }
        })
    }),
    mq2k: (function(a, b, c) {
        var d = c("Q840"),
            e = c("Gg2s"),
            f = c("OWtl"),
            g = c("kfGJ"),
            h = c("OMIV"),
            i = c("jBHQ");
        let j = "4218407052",
            k = (0, d.d)(f.a, (a, b) => {
                let {
                    get: c
                } = b;
                return m(a, c, !1)
            }),
            l = (0, d.d)(f.a, (a, b) => {
                let {
                    get: c
                } = b;
                return m(a, c, !0)
            });

        function m(a, b, c) {
            if (a === g.a) return !0;
            let {
                data: d
            } = c ? b(e.b, a, {
                enabled: !1
            }) : b(e.b, a);
            if (null == d) return;
            let f = d.find(a => "remote_plugin" === a.name);
            return null != f ? f.enabled : b(h.h, j) ? void 0 : b(c ? i.a : h.e, j)
        }
        c.d(b, {}, {
            a: l,
            b: k
        })
    }),
    ueue: (function(a, b, c) {
        var d = c("QosV"),
            e = c("Q840"),
            f = c("KvQL"),
            g = c("D4ZO"),
            h = c("SqAt"),
            i = c("Dgwo"),
            j = c("CfsC"),
            k = c("wHrF"),
            l = c("h6fL"),
            m = c("MI1z"),
            n = c("IIEq"),
            o = c("jWaO"),
            p = c("yrds"),
            q = c("rO8L"),
            r = c("Vyeu"),
            s = c("w8IV"),
            t = c("sLlu"),
            u = c("OWtl"),
            v = c("ndjw"),
            w = c("kfGJ"),
            x = c("hZax"),
            y = c("bnxy"),
            z = c("rvFo"),
            A = c("JRAe"),
            B = c("AjOy"),
            C = c("lhA2"),
            D = c("IVVU"),
            E = c("C0re"),
            F = c("CBsD");
        let G = new Set,
            H = [],
            I = [],
            J = [],
            K = [],
            L = [],
            M = [],
            N = [f.cd],
            O = ["datadog", "statsig"],
            P = new Set(["codex-official", f.bd, f.cd, f.dd, "openai-primary-runtime"].map(af)),
            Q = (0, e.q)(u.a, (a, b) => {
                var c, d, e;
                let g, {
                        hostId: h,
                        isOpenAICuratedRemoteMarketplaceEnabled: j,
                        marketplaceKinds: k,
                        roots: l
                    } = a,
                    {
                        get: m,
                        queryClient: n,
                        scope: o
                    } = b,
                    p = m(D.a),
                    q = function(a) {
                        let {
                            isOpenAICuratedRemoteMarketplaceEnabled: b
                        } = a;
                        return b ? N : K
                    }({
                        isOpenAICuratedRemoteMarketplaceEnabled: j
                    }),
                    r = (c = h, d = l, e = k, g = j ? f.dd : f.cd, null == e ? [...(0, E.b)(c, "list"), d, "curated-marketplace", g] : [...(0, E.b)(c, "list"), d, "marketplace-kinds", e, "curated-marketplace", g]);
                return {
                    queryKey: r,
                    queryFn: async () => {
                        var a, b;
                        let c = await (0, i.b)(o, h).sendRequest("plugin/list", null == k ? {
                                ...l.length > 0 ? {
                                    cwds: l
                                } : {},
                                forceRefetch: G.has(h) || void 0
                            } : {
                                ...l.length > 0 ? {
                                    cwds: l
                                } : {},
                                marketplaceKinds: k,
                                forceRefetch: G.has(h) || void 0
                            }),
                            d = (a = c.marketplaces, 0 === (b = q).length ? a : a.filter(a => !b.includes(a.name))),
                            e = al(d, n.getQueryData(r)?.plugins),
                            g = c.featuredPluginIds.filter(a => {
                                let b = ae(a).toLowerCase();
                                return !O.some(a => b === a || b.startsWith(`${a}-`))
                            }).filter(a => !q.some(b => a.endsWith(`@${b}`)));
                        return {
                            bundledCodexAppToolsPlugin: d.find(a => {
                                let {
                                    name: b
                                } = a;
                                return (0, f.Ai)(b)
                            })?.plugins.find(a => {
                                let {
                                    name: b
                                } = a;
                                return b === f.hb
                            }),
                            featuredPluginIds: g,
                            marketplaceLoadErrors: c.marketplaceLoadErrors,
                            marketplaces: ah(d),
                            plugins: await ai({
                                hostId: h,
                                plugins: e,
                                queryClient: n
                            })
                        }
                    },
                    select: a => ({
                        ...a,
                        plugins: a.plugins.filter(a => {
                            let {
                                plugin: b
                            } = a;
                            return !p.includes(b.id)
                        })
                    }),
                    staleTime: z.b.SIX_HOURS,
                    gcTime: z.b.FIVE_MINUTES
                }
            }),
            R = (0, e.q)(u.a, (a, b) => {
                let {
                    cacheOnly: c = !1,
                    hostId: d,
                    marketplaceKind: e
                } = a, {
                    get: f,
                    queryClient: g,
                    scope: h
                } = b, j = f(c ? D.b : D.a), k = [...(0, E.b)(d, "marketplace-kind"), e];
                return {
                    ...c ? {
                        enabled: !1
                    } : {},
                    queryKey: k,
                    queryFn: async () => {
                        let a = await (0, i.b)(h, d).sendRequest("plugin/list", {
                            marketplaceKinds: [e],
                            forceRefetch: G.has(d) || void 0
                        });
                        return ai({
                            hostId: d,
                            plugins: al(a.marketplaces, g.getQueryData(k)),
                            queryClient: g
                        })
                    },
                    select: a => a.filter(a => {
                        let {
                            plugin: b
                        } = a;
                        return !j.includes(b.id)
                    }),
                    staleTime: z.b.SIX_HOURS
                }
            }),
            S = (0, e.d)(u.a, (a, b) => {
                let {
                    get: c
                } = b;
                return c(R, {
                    cacheOnly: !0,
                    hostId: a,
                    marketplaceKind: "local"
                })
            });

        function T(a) {
            let {
                marketplacePath: b,
                remoteMarketplaceName: c
            } = a;
            if (null != b && null != c) throw Error("plugin marketplace request requires one marketplace source");
            if (null != b) return {
                marketplacePath: b
            };
            if (null != c) return {
                remoteMarketplaceName: c
            };
            throw Error("plugin marketplace request requires a marketplace source")
        }

        function U(a) {
            return a.marketplacePath ?? `remote:${a.remoteMarketplaceName}`
        }
        async function V() {}
        async function W() {}
        async function X() {
            return {
                availablePlugins: M,
                installedPlugins: M
            }
        }

        function Y(a) {
            let {
                featuredPluginIds: b,
                ...c
            } = a;
            return b.filter(a => aa(a, c))
        }

        function Z(a) {
            let {
                plugins: b,
                ...c
            } = a;
            return b.filter(a => aa(a.plugin.id, c))
        }

        function $(a) {
            return a.filter(a => a.plugin.installed)
        }

        function _(a) {
            let {
                enabled: b,
                installed: c,
                pluginId: d,
                plugins: e
            } = a;
            return e.some(a => a.plugin.id === d && (a.plugin.installed !== c || a.plugin.enabled !== b)) ? e.map(a => a.plugin.id === d ? {
                ...a,
                plugin: {
                    ...a.plugin,
                    enabled: b,
                    installed: c
                }
            } : a) : e
        }

        function aa(a, b) {
            let {
                isComputerUseAvailable: c,
                isExternalBrowserUseAvailable: d,
                isInAppBrowserUseAvailable: e,
                isMessagesAvailable: g
            } = b;
            return ae(a) === f.qc ? e || d : !(!e && ab(a) || !d && ac(a) || !c && ad(a)) && (!!g || a !== s.a)
        }

        function ab(a) {
            let b = ae(a);
            return b === f.qc || b === f.vc
        }

        function ac(a) {
            let b = ae(a);
            return "chrome" === b || "chrome-dev" === b || "chrome-internal" === b
        }

        function ad(a) {
            return "computer-use" === ae(a)
        }

        function ae(a) {
            let b = a.indexOf("@");
            return -1 === b ? a : a.slice(0, b)
        }

        function af(a) {
            return a.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function ag(a) {
            return P.has(af(a))
        }

        function ah(a) {
            let b = new Map;
            for (let c of a) {
                let a = `${c.name}\0${c.path??""}`;
                if (b.has(a)) continue;
                let d = ag(c.name);
                b.set(a, {
                    displayName: c.interface?.displayName ?? null,
                    isBuiltIn: d,
                    name: c.name,
                    path: c.path,
                    pluginCount: c.plugins.length
                })
            }
            return Array.from(b.values()).sort((a, b) => {
                let c = a.displayName?.trim() || a.name,
                    d = b.displayName?.trim() || b.name;
                return c.localeCompare(d)
            })
        }
        async function ai(a) {
            let {
                hostId: b,
                plugins: c,
                queryClient: d,
                signal: e
            } = a, f = [...c];
            return await Promise.all(Array.from({
                length: Math.min(4, c.length)
            }, (a, g) => (async function a(g) {
                let h = c[g];
                if (null == h) return;
                let [i, j, k] = await Promise.all([aj(h.composerIconPath, b, d, e), aj(h.logoPath, b, d, e), aj(h.logoDarkPath, b, d, e)]);
                (null != i || null != j || null != k) && (f[g] = {
                    ...h,
                    composerIconPath: i ?? h.composerIconPath,
                    logoDarkPath: k ?? h.logoDarkPath,
                    logoPath: j ?? h.logoPath,
                    plugin: h.plugin.interface ? {
                        ...h.plugin, interface: {
                            ...h.plugin.interface, composerIcon: i ?? h.plugin.interface.composerIcon, logo: j ?? h.plugin.interface.logo, ...null == k ? {} : {
                                logoDark: k
                            }
                        }
                    } : h.plugin
                }), await a(g + 4)
            })(g))), f
        }
        async function aj(a, b, c, d) {
            return (0, F.e)(a, b, c, d)
        }

        function ak(a) {
            var b, c;
            let {
                codexHome: d,
                hostId: e,
                rootsOverrideCwd: g,
                workspaceRoots: h
            } = a, i = e === w.a && null != d ? (0, y.p)(d, ".tmp/marketplaces/openai-internal-testing") : null;
            return b = [..."string" == typeof g ? [g] : g ?? h ?? [], ...null == i ? [] : [i]], c = d, Array.from(new Set(b.map(a => a.trim()).filter(a => {
                var b, d;
                return (0, f.Mh)(a) && (b = a, null == (d = c) || ((0, f.Yi)(d) || (0, f._i)(d) ? (0, f.Yi)(b) || (0, f._i)(b) : b.startsWith("/") && !b.startsWith("//")))
            })))
        }

        function al(a) {
            let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M,
                c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui",
                {
                    plugins: d,
                    freshDirectoryPluginIds: e
                } = (0, g.b)(a, c),
                f = new Map(b.map(a => [(0, g.f)(a.plugin), a])),
                h = !1,
                i = d.map(a => {
                    let b = {
                            ...a,
                            ...am(a.plugin)
                        },
                        c = (0, g.f)(b.plugin),
                        d = f.get(c);
                    return !b.plugin.installed || null == d || e.has(c) ? b : (h || (h = b.marketplaceName !== d.marketplaceName || b.marketplacePath !== d.marketplacePath), {
                        ...d,
                        plugin: {
                            ...b.plugin,
                            id: d.plugin.id,
                            interface: d.plugin.interface ?? b.plugin.interface,
                            keywords: d.plugin.keywords ?? b.plugin.keywords,
                            name: d.plugin.name,
                            remotePluginId: d.plugin.remotePluginId ?? b.plugin.remotePluginId,
                            shareContext: d.plugin.shareContext ?? b.plugin.shareContext,
                            source: d.plugin.source
                        }
                    })
                });
            if (!h) return i;
            let j = new Map(i.map(a => [(0, g.f)(a.plugin), a]));
            return [...b.flatMap(a => {
                let b = (0, g.f)(a.plugin),
                    c = j.get(b);
                return j.delete(b), null == c ? [] : [c]
            }), ...j.values()]
        }

        function am(a, b) {
            let c = (0, k.c)(a.remotePluginId)?.iconUrl;
            if (null != c) return {
                composerIconPath: c,
                logoDarkPath: c,
                logoPath: c
            };
            let d = a.interface,
                e = d?.composerIcon ?? d?.composerIconUrl,
                f = d?.logo ?? d?.logoUrl,
                g = d?.logoDark ?? d?.logoUrlDark,
                h = (0, A.a)(a),
                i = null != f || null != g,
                j = e ?? (i ? null : h),
                l = i ? f ?? g ?? null : h ?? b?.logoUrl ?? b?.logoUrlDark ?? null,
                m = i ? g ?? null : h ?? b?.logoUrlDark ?? b?.logoUrl ?? null;
            if (null != l) return {
                composerIconPath: j,
                logoDarkPath: m,
                logoPath: l
            };
            let n = (0, C.a)(a.remotePluginId ?? a.shareContext?.remotePluginId ?? a.id);
            return {
                composerIconPath: j ?? n,
                logoDarkPath: null,
                logoPath: n
            }
        }
        c.d(b, {
            a: () => E.a
        }, {
            b: S,
            c: function(a) {
                return {
                    ...am(a.summary),
                    description: a.summary.interface?.shortDescription ?? a.description ?? null,
                    displayName: a.summary.interface?.displayName ?? null,
                    marketplaceDisplayName: null,
                    marketplaceName: a.marketplaceName,
                    plugin: a.summary,
                    keywords: a.summary.keywords,
                    ...(0, g.e)({
                        marketplaceName: a.marketplaceName,
                        marketplacePath: a.marketplacePath
                    })
                }
            },
            d: Y,
            e: Z,
            f: function(a) {
                let {
                    buildFlavor: b,
                    plugins: c
                } = a, d = (0, f.Sg)(b);
                return c.filter(a => !(0, f.Ai)(a.marketplaceName) || a.marketplaceName === d)
            },
            g: al,
            h: am,
            i: U,
            j: T,
            k: function(a) {
                let b = a.plugin.remotePluginId ?? a.plugin.shareContext?.remotePluginId;
                return `${U(a)}:${a.plugin.id}:${b??""}`
            },
            l: function(a) {
                return {
                    ...T(a),
                    pluginName: (0, h.a)(a)
                }
            },
            m: ak,
            n: ai,
            o: ag,
            p: ad,
            q: ac,
            r: ab,
            s: Q,
            t: ah,
            u: function(a) {
                let {
                    enabled: b,
                    hostId: c,
                    installed: d,
                    pluginId: e,
                    queryClient: f
                } = a;
                f.setQueriesData({
                    queryKey: (0, E.b)(c, "list")
                }, a => {
                    if (null == a) return a;
                    let c = _({
                        enabled: b,
                        installed: d,
                        pluginId: e,
                        plugins: a.plugins
                    });
                    return c === a.plugins ? void 0 : {
                        ...a,
                        plugins: c
                    }
                }), f.setQueriesData({
                    queryKey: (0, E.b)(c, "marketplace-kind")
                }, a => {
                    if (null == a) return;
                    let c = _({
                        enabled: b,
                        installed: d,
                        pluginId: e,
                        plugins: a
                    });
                    return c === a ? void 0 : c
                }), f.setQueriesData({
                    queryKey: (0, E.d)(c, "installed")
                }, a => {
                    if (null == a) return;
                    if (!d) {
                        let b = a.filter(a => a.plugin.id !== e);
                        return b.length === a.length ? void 0 : b
                    }
                    let c = _({
                        enabled: b,
                        installed: d,
                        pluginId: e,
                        plugins: a
                    });
                    return c === a ? void 0 : c
                }), f.setQueriesData({
                    queryKey: (0, E.d)(c, "detail")
                }, a => {
                    if (null != a && a.summary.id === e && (a.summary.installed !== d || a.summary.enabled !== b)) return {
                        ...a,
                        summary: {
                            ...a.summary,
                            enabled: b,
                            installed: d
                        }
                    }
                })
            },
            v: function(a, b, c) {
                let f, g, h, i, k, s, u, w, y, z, A, C, D, F, K, N, O, P, R, S, T, U, _, aa = (0, d.c)(78),
                    ab = c?.enabled !== !1;
                aa[0] !== a || aa[1] !== ab ? (f = {
                    enabled: ab,
                    hostId: a
                }, aa[0] = a, aa[1] = ab, aa[2] = f) : f = aa[2];
                let ac = (0, q.a)(f) && ab,
                    ad = c?.additionalMarketplaceKinds ?? J,
                    ae = (0, x.f)("4218407052"),
                    af = (0, l.b)(a),
                    ag = c?.includeRemoteCatalog ?? !0;
                aa[3] !== ad || aa[4] !== af?.authMethod || aa[5] !== ae || aa[6] !== c?.includeRemoteCatalog || aa[7] !== ag ? (g = function(a) {
                    let {
                        additionalMarketplaceKinds: b,
                        includeRemoteCatalog: c,
                        includeVerticalCatalog: d
                    } = a;
                    return c && !d && 0 === b.length ? null : d ? ["local", "vertical", ...b] : ["local", ...b]
                }({
                    additionalMarketplaceKinds: ad,
                    includeRemoteCatalog: ag,
                    includeVerticalCatalog: c?.includeRemoteCatalog !== !1 && !ae && (0, B.a)(af?.authMethod ?? null)
                }), aa[3] = ad, aa[4] = af?.authMethod, aa[5] = ae, aa[6] = c?.includeRemoteCatalog, aa[7] = ag, aa[8] = g) : g = aa[8];
                let ah = g,
                    ai = (0, t.b)(),
                    aj = (0, e.z)(j.b);
                aa[9] !== a || aa[10] !== aj ? (h = aj.includes(a), aa[9] = a, aa[10] = aj, aa[11] = h) : h = aa[11];
                let al = h,
                    am = void 0 === b;
                aa[12] !== a ? (i = {
                    hostId: a
                }, aa[12] = a, aa[13] = i) : i = aa[13];
                let an = ac && al && am;
                aa[14] !== an ? (k = {
                    enabled: an
                }, aa[14] = an, aa[15] = k) : k = aa[15];
                let ao = (0, e.x)(v.j, i, k);
                aa[16] !== ac ? (s = {
                    enabled: ac
                }, aa[16] = ac, aa[17] = s) : s = aa[17];
                let ap = (0, m.a)(a, s),
                    aq = ac && al;
                aa[18] !== a || aa[19] !== aq ? (u = {
                    enabled: aq,
                    hostId: a
                }, aa[18] = a, aa[19] = aq, aa[20] = u) : u = aa[20];
                let ar = (0, n.a)(u);
                aa[21] !== ar || aa[22] !== a ? (w = {
                    computerUseAvailability: ar,
                    hostId: a
                }, aa[21] = ar, aa[22] = a, aa[23] = w) : w = aa[23];
                let as = (0, r.a)(w),
                    at = ac && al;
                aa[24] !== a || aa[25] !== at ? (y = {
                    enabled: at,
                    hostId: a
                }, aa[24] = a, aa[25] = at, aa[26] = y) : y = aa[26];
                let au = (0, p.a)(y),
                    av = ac && al;
                aa[27] !== a || aa[28] !== av ? (z = {
                    enabled: av,
                    hostId: a
                }, aa[27] = a, aa[28] = av, aa[29] = z) : z = aa[29];
                let aw = (0, o.a)(z),
                    ax = ao.data?.roots;
                aa[30] !== ap || aa[31] !== a || aa[32] !== b || aa[33] !== ax ? (A = ak({
                    codexHome: ap,
                    hostId: a,
                    rootsOverrideCwd: b,
                    workspaceRoots: ax
                }), aa[30] = ap, aa[31] = a, aa[32] = b, aa[33] = ax, aa[34] = A) : A = aa[34];
                let ay = A,
                    az = ac && af?.isLoading !== !0 && al && (void 0 !== b || ao.isFetched);
                aa[35] !== a || aa[36] !== ae || aa[37] !== ah || aa[38] !== ay ? (C = {
                    hostId: a,
                    isOpenAICuratedRemoteMarketplaceEnabled: ae,
                    marketplaceKinds: ah,
                    roots: ay
                }, aa[35] = a, aa[36] = ae, aa[37] = ah, aa[38] = ay, aa[39] = C) : C = aa[39], aa[40] !== az ? (D = {
                    enabled: az
                }, aa[40] = az, aa[41] = D) : D = aa[41];
                let aA = (0, e.x)(Q, C, D);
                if (!ac || !al) {
                    let a;
                    return aa[42] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                        availablePlugins: M,
                        featuredPluginIds: H,
                        installedPlugins: M,
                        marketplaceLoadErrors: I,
                        marketplaces: L,
                        errorMessage: null,
                        isLoading: !1,
                        isFetching: !1,
                        refetch: X,
                        reload: W,
                        forceReload: V
                    }, aa[42] = a) : a = aa[42], a
                }
                aa[43] !== ar.available || aa[44] !== aw.available || aa[45] !== au.available || aa[46] !== as.available || aa[47] !== aA.data?.bundledCodexAppToolsPlugin || aa[48] !== aA.data?.featuredPluginIds || aa[49] !== aA.data?.plugins ? (F = {
                    isComputerUseAvailable: ar.available,
                    isExternalBrowserUseAvailable: aw.available,
                    isInAppBrowserUseAvailable: au.available,
                    isMessagesAvailable: as.available
                }, N = Z({
                    plugins: K = aA.data?.plugins ?? M,
                    ...F
                }), O = aA.data?.bundledCodexAppToolsPlugin, P = Y({
                    featuredPluginIds: aA.data?.featuredPluginIds ?? H,
                    ...F
                }), aa[43] = ar.available, aa[44] = aw.available, aa[45] = au.available, aa[46] = as.available, aa[47] = aA.data?.bundledCodexAppToolsPlugin, aa[48] = aA.data?.featuredPluginIds, aa[49] = aA.data?.plugins, aa[50] = F, aa[51] = K, aa[52] = N, aa[53] = O, aa[54] = P) : (F = aa[50], K = aa[51], N = aa[52], O = aa[53], P = aa[54]), aa[55] !== K ? (R = $(K), aa[55] = K, aa[56] = R) : R = aa[56];
                let aB = aA.data?.marketplaceLoadErrors ?? I,
                    aC = aA.data?.marketplaces ?? L,
                    aD = aA.error ? aA.error.message : null,
                    aE = am && ao.isLoading || aA.isLoading || au.isLoading || aw.isLoading || ar.isLoading || as.isLoading,
                    aF = am && ao.isFetching || aA.isFetching || ar.isFetching;
                return aa[57] !== F || aa[58] !== aA ? (S = async () => {
                    let a = await aA.refetch(),
                        b = a.data?.plugins ?? M;
                    return {
                        availablePlugins: Z({
                            plugins: b,
                            ...F
                        }),
                        installedPlugins: $(b)
                    }
                }, aa[57] = F, aa[58] = aA, aa[59] = S) : S = aa[59], aa[60] !== ai ? (T = () => ai(E.a), aa[60] = ai, aa[61] = T) : T = aa[61], aa[62] !== a || aa[63] !== ai ? (U = async () => {
                    G.add(a), await (async () => {
                        await ai(E.a)
                    })().finally(() => {
                        G.delete(a)
                    })
                }, aa[62] = a, aa[63] = ai, aa[64] = U) : U = aa[64], aa[65] !== N || aa[66] !== O || aa[67] !== P || aa[68] !== R || aa[69] !== aB || aa[70] !== aC || aa[71] !== aD || aa[72] !== aE || aa[73] !== aF || aa[74] !== S || aa[75] !== T || aa[76] !== U ? (_ = {
                    availablePlugins: N,
                    bundledCodexAppToolsPlugin: O,
                    featuredPluginIds: P,
                    installedPlugins: R,
                    marketplaceLoadErrors: aB,
                    marketplaces: aC,
                    errorMessage: aD,
                    isLoading: aE,
                    isFetching: aF,
                    refetch: S,
                    reload: T,
                    forceReload: U
                }, aa[65] = N, aa[66] = O, aa[67] = P, aa[68] = R, aa[69] = aB, aa[70] = aC, aa[71] = aD, aa[72] = aE, aa[73] = aF, aa[74] = S, aa[75] = T, aa[76] = U, aa[77] = _) : _ = aa[77], _
            },
            w: function(a) {
                let b, c, f, g, h = (0, d.c)(10),
                    {
                        enabled: i,
                        hostId: j,
                        marketplaceKind: k
                    } = a;
                h[0] !== j ? (b = {
                    hostId: j
                }, h[0] = j, h[1] = b) : b = h[1];
                let m = (0, q.a)(b),
                    n = (0, l.b)(j);
                h[2] !== n?.authMethod || h[3] !== k ? (c = "local" === k || (0, B.a)(n?.authMethod ?? null), h[2] = n?.authMethod, h[3] = k, h[4] = c) : c = h[4];
                let o = c;
                h[5] !== j || h[6] !== k ? (f = {
                    hostId: j,
                    marketplaceKind: k
                }, h[5] = j, h[6] = k, h[7] = f) : f = h[7];
                let p = (void 0 === i || i) && m && o;
                return h[8] !== p ? (g = {
                    enabled: p
                }, h[8] = p, h[9] = g) : g = h[9], (0, e.x)(R, f, g)
            }
        })
    }),
    haw8: (function() {
        "function" != typeof AbortSignal.any && Object.defineProperty(AbortSignal, "any", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function(a) {
                let b = new AbortController,
                    c = a => {
                        b.abort(a.target.reason)
                    };
                for (let d of a) {
                    if (d.aborted) {
                        b.abort(d.reason);
                        break
                    }
                    d.addEventListener("abort", c, {
                        signal: b.signal
                    })
                }
                return b.signal
            }
        }), "function" != typeof AbortSignal.timeout && Object.defineProperty(AbortSignal, "timeout", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function(a) {
                let b = new AbortController;
                return globalThis.setTimeout(() => b.abort(new DOMException("The operation timed out.", "TimeoutError")), a), b.signal
            }
        })
    }),
    ipcG: (function(a, b, c) {
        let d, e = "u" < typeof Element || "u" < typeof Document ? [] : [Element.prototype, Document.prototype];

        function f(a) {
            return null != d && a.ariaNotify === d
        }
        c.d(b, {}, {
            a: function() {
                return e.some(f)
            },
            b: function(a) {
                for (let b of (d = a, e)) Reflect.has(b, "ariaNotify") || Object.defineProperty(b, "ariaNotify", {
                    value: a,
                    configurable: !0,
                    writable: !0
                })
            },
            c: function() {
                for (let a of e) f(a) && Reflect.deleteProperty(a, "ariaNotify")
            }
        })
    }),
    BX2G: (function(a, b, c) {
        let d;
        var e = c("ipcG");

        function f(a, b) {
            g().then(c => {
                c && this.ariaNotify(a, b)
            })
        }

        function g() {
            return null == d && (d = (globalThis.scheduler?.yield?.() ?? new Promise(a => setTimeout(a, 0))).then(() => c.e(959887).then(c.bind(c, "EHyc"))).then(a => a.installed).catch(() => ((0, e.b)(f), d = void 0, !1))), d
        }(0, e.b)(f), c.d(b, {}, {
            a: function() {
                (0, e.a)() && g()
            }
        })
    }),
    bW5B: (function(a, b, c) {
        c("eqYI"), c("yCBR")
    }),
    tFDr: (function(a, b, c) {
        c("UDML"), c("SDCy")
    }),
    UjfB: (function(a, b, c) {
        c("UDML"), c("mlfH")
    }),
    kzsq: (function(a, b, c) {
        c.a(a, async function(a, b) {
            try {
                let a = document.documentElement;
                ["feed", "grid", "itemcontrols", "noitemcontrols"].every(b => a.focusGroup?.supports(b)) || (await c.e(822370).then(c.bind(c, "GS9f"))).polyfillBodyAndObserve(), b()
            } catch (a) {
                b(a)
            }
        }, 1)
    }),
    D5xp: (function(a, b, c) {
        c.a(a, async function(a, b) {
            try {
                let a = ! function() {
                    try {
                        return "review" === new URL("codex://review").hostname
                    } catch {
                        return !1
                    }
                }();
                if (a || "function" != typeof URL.parse || "function" != typeof URL.canParse) {
                    let {
                        polyfillUrl: b
                    } = await c.e(329784).then(c.bind(c, "TsR8"));
                    await b(a)
                }("function" != typeof URL.createObjectURL || "function" != typeof URL.revokeObjectURL) && "u" > typeof webkitURL && await c.e(247248).then(c.t.bind(c, "jPdZ", 23)), b()
            } catch (a) {
                b(a)
            }
        }, 1)
    }),
    T5AA: (function(a, b, c) {
        c.d(b, {}, {
            a: function() {
                return null
            }
        })
    })
};