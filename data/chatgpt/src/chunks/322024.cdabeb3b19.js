export const __rspack_esm_ids = [322024];
export const __webpack_modules__ = {
    NHPR: (function(a, b, c) {
        c.d(b, {
            a: () => 15,
            b: () => d.b,
            c: () => d.c
        }), c("giC1"), c("CVOS"), c("KmX9");
        var d = c("TJbQ");
        c("Nn8K")
    }),
    I2Ei: (function(a, b, c) {
        c.d(b, {
            a: () => s,
            b: () => 32768,
            c: () => y,
            d: () => k,
            e: () => q,
            f: () => t,
            g: () => A,
            h: () => f
        });
        var d = c("NHPR");
        let e = new TextEncoder;

        function f(a) {
            return e.encode(JSON.stringify(a)).byteLength
        }

        function g() {
            try {
                if ("function" == typeof globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID()
            } catch {}
            let a = new Uint8Array(16);
            if (globalThis.crypto?.getRandomValues) try {
                globalThis.crypto.getRandomValues(a)
            } catch {
                h(a)
            } else h(a);
            a[6] = (a[6] ?? 0) & 15 | 64, a[8] = (a[8] ?? 0) & 63 | 128;
            let b = Array.from(a, a => a.toString(16).padStart(2, "0"));
            return `${b.slice(0,4).join("")}-${b.slice(4,6).join("")}-${b.slice(6,8).join("")}-${b.slice(8,10).join("")}-${b.slice(10).join("")}`
        }

        function h(a) {
            for (let b = 0; b < a.length; b += 1) a[b] = Math.floor(256 * Math.random())
        }
        let i = "chatgpt.model_written_dil.v2";

        function j(a, b) {
            let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, d.c)(b),
                e = "unavailable" === c.coverage ? b.records : c.records,
                f = "complete" === c.coverage || "unavailable" === c.coverage && !b.truncated && 0 === b.dropped,
                g = b.runnerId,
                h = e.filter(a => a.runnerId === g);
            if ("frame_timeout" === a) {
                if (e.some(a => "module_load" === a.operation && "runner_module_script_error" === a.reason)) return "runner_module_script_error";
                if (e.some(a => "iframe_resource" === a.operation && null != a.httpStatus && a.httpStatus >= 400)) return "iframe_http_error";
                if (f && e.some(a => "observer_bootstrap" === a.operation) && !e.some(a => "module_entry" === a.operation)) return "module_entry_unobserved";
                if (f && e.some(a => "iframe_load" === a.operation) && !e.some(a => "observer_bootstrap" === a.operation)) return "iframe_loaded_bootstrap_unobserved";
                if (f && e.some(a => "iframe_create" === a.operation && "returned" === a.phase) && !e.some(a => "iframe_load" === a.operation)) return "iframe_load_unobserved"
            }
            if ("worker_timeout" === a) {
                let a = h.find(a => "host" === a.realm && "worker_timer" === a.operation && "fired" === a.phase),
                    c = h.filter(b => "runner_create" === b.operation && "received" === b.phase && null != a && null != b.hostReceivedAtMs && b.hostReceivedAtMs > a.localTimeMs);
                if (c.some(a => "worker" === a.realm)) return "worker_evidence_after_timeout";
                if (c.some(a => "iframe" === a.realm)) return "iframe_evidence_after_timeout";
                if (a) {
                    let b = h.filter(b => "runner_create" === b.operation && "received" === b.phase && null != b.hostReceivedAtMs && b.hostReceivedAtMs <= a.localTimeMs);
                    if (b.some(a => "worker" === a.realm)) return "worker_received_before_timeout";
                    if (b.some(a => "iframe" === a.realm)) return "iframe_received_worker_unobserved"
                }
                let d = h.filter(a => "runner_create" === a.operation && "received" === a.phase && null == a.hostReceivedAtMs);
                if (d.some(a => "worker" === a.realm)) return "worker_receipt_time_unavailable";
                if (d.some(a => "iframe" === a.realm)) return "iframe_receipt_time_unavailable";
                if ("frame_disposed" === b.postTimeoutCoverage) return "frame_disposed";
                if ("observation_interrupted" === b.postTimeoutCoverage || "window_shortened" === b.postTimeoutCoverage) return "observation_interrupted";
                let e = !b.truncated && 0 === b.dropped || h.some(b => "host" === b.realm && "frame_probe" === b.operation && "resolved" === b.phase && null != a && b.localTimeMs >= a.localTimeMs);
                if (a && f && e && b.observedRealms.includes("iframe")) {
                    if (b.postTimeout) return "no_receipt_within_window";
                    if (h.some(a => "host" === a.realm && "runner_create" === a.operation && "sent" === a.phase)) return "iframe_creation_unobserved"
                }
            }
            if ("runtime_error" === a) {
                let a = h.findLast(a => "quarantine" === a.operation && "decision" === a.phase)?.reason,
                    b = {
                        control_unavailable: "supervisor_control_unavailable",
                        probe_healthy_unacknowledged: "supervisor_probe_healthy_unacknowledged",
                        probe_timeout: "supervisor_probe_timeout",
                        peer_probe_timeout: "supervisor_peer_probe_timeout",
                        startup_exhausted: "supervisor_startup_exhausted",
                        worker_restart: "supervisor_worker_restart"
                    };
                if (a && Object.hasOwn(b, a)) return b[a];
                if (g && "unavailable" !== c.coverage && h.some(a => "iframe" === a.realm && "error" === a.operation && "reported_error" === a.phase && "worker_start_error" === a.reason)) return "supervisor_worker_start_error"
            }
            return "unknown"
        }

        function k(a) {
            let b, c, e, h, k, {
                    metrics: m,
                    diagnosticsExpected: o = !1,
                    startupReporting: p,
                    presentation: q
                } = a,
                r = g(),
                s = new l(m, r),
                t = 0,
                u = !1,
                v = !1,
                w = !1,
                x = new Set,
                y = new Set,
                z = new Set,
                A = function(a) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "first_snapshot_success" === a ? "snapshot_effect" : "failure_observed";
                    if (null == b || !p) return;
                    let g = "first_snapshot_success" === a;
                    if (g) {
                        if ("first_snapshot_success" !== c || u || (u = !0, Math.random() >= .01)) return
                    } else {
                        let a = b.failureId ?? "host_error";
                        if ("post_timeout" === e) {
                            if (!y.has(a) || z.has(a)) return;
                            z.add(a)
                        } else {
                            if (x.has(a) || x.size >= 3) return;
                            x.add(a)
                        }
                    }
                    try {
                        if (!p.canPublish(a, e)) return;
                        let h = (0, d.b)(b, "render_result", "decision", {
                                reason: a
                            }),
                            i = (0, d.c)(h),
                            k = {
                                ...q?.diagnosticContext(),
                                render_attempt_id: r,
                                failure_id: h.failureId,
                                failure_boundary: g ? "unknown" : j(a, h, i),
                                summary_coverage: i.coverage,
                                observation_window_ms: h.postTimeoutWindowMs,
                                observation_elapsed_ms: h.postTimeoutElapsedMs,
                                observation_sample_rate: h.postTimeoutSampleRate,
                                result: a,
                                initial_result: c,
                                after_initial_success: !g && "first_snapshot_success" === c,
                                report_cutoff: e,
                                diagnostics: h
                            },
                            l = function(a) {
                                let {
                                    diagnostics: b,
                                    ...c
                                } = a, d = a => f(JSON.stringify(a)) - 2, e = b.records.map(d), g = b.openOperations.map(d), h = new Set, i = new Set, j = f({
                                    ...c,
                                    diagnostics_json: JSON.stringify({
                                        ...b,
                                        records: [],
                                        openOperations: [],
                                        dropped: b.dropped + e.length + g.length,
                                        truncated: !0
                                    })
                                }) + 1, k = (a, b, c) => {
                                    let d = b[a];
                                    if (void 0 === d || c.has(a)) return;
                                    let e = d + +(0 !== c.size);
                                    j + e <= 32768 && (c.add(a), j += e)
                                };
                                k(b.records.findIndex(a => null != a.fault), e, h);
                                for (let a = 0; a < g.length; a++) k(a, g, i);
                                for (let a = 0; a < Math.min(8, e.length); a++) k(a, e, h);
                                for (let a = e.length - 1; a >= 0; a--) k(a, e, h);
                                let l = e.length + g.length - h.size - i.size;
                                return {
                                    ...c,
                                    diagnostics_json: JSON.stringify({
                                        ...b,
                                        records: b.records.filter((a, b) => h.has(b)),
                                        openOperations: b.openOperations.filter((a, b) => i.has(b)),
                                        dropped: b.dropped + l,
                                        truncated: b.truncated || l > 0
                                    })
                                }
                            }(k);
                        if (!p.publish("DIL startup diagnostics", l, g)) return;
                        if (q?.recordDiagnosticReport(), !g) {
                            let a = b.failureId ?? "host_error";
                            "post_timeout" !== e && y.add(a)
                        }
                    } catch {
                        p.recordSuppression(a, e, "observer_error")
                    }
                },
                B = () => {
                    if (v || !c || "first_snapshot_success" === c || "unknown" === c || "abandoned" === c || !h && !o) return;
                    v = !0, k && clearTimeout(k);
                    let a = "unknown",
                        b = "unavailable";
                    try {
                        if (h) {
                            let e = (0, d.c)(h);
                            b = e.coverage, a = j(c, h, e)
                        }
                    } catch {}
                    try {
                        n(m, "startup.failure_boundary", {
                            result: c,
                            last_observed_boundary: a,
                            summary_coverage: b,
                            observation_window: "worker_timeout" === c ? h?.postTimeoutWindowMs === 1e4 ? "extended" : "short" : "none",
                            observation_status: "worker_timeout" === c ? h?.postTimeoutCoverage ?? "unavailable" : "not_applicable"
                        })
                    } catch {}
                },
                C = a => {
                    let d = void 0 === c;
                    c ??= a, s.finishRender(a), "unknown" !== a && "abandoned" !== a && (A(a), d && "first_snapshot_success" !== a && (e = b?.failureId, h = b, "worker_timeout" === a && (h || o) ? k = setTimeout(B, Math.min(1e4, Math.max(1e3, h?.postTimeoutWindowMs ?? 1e3)) + 500) : B()))
                },
                D = () => s.beginRenderAttempt(),
                E = a => {
                    D(), s.recordFailureStage(a), C(a)
                },
                F = a => {
                    D(), s.recordFailureStage(a), "runtime_error" === a && void 0 === c && (w ||= q?.deferStreamingRuntimeFailure(b => {
                        void 0 === c && C("unrecovered" === b ? a : "unknown" === b || "abandoned" === b ? b : "first_snapshot_success")
                    }) ?? !1) || C(a)
                };
            return {
                beginRenderAttempt: D,
                onPreparationEnd: a => {
                    let b = {
                        outcome: a.outcome,
                        readiness: a.readiness
                    };
                    n(m, "preparation.result", b), null != a.readyLeadMs && m.hist(`${i}.preparation.ready_before_input_ms`, b, a.readyLeadMs)
                },
                onDiagnostics: (a, d) => {
                    b = a;
                    let f = a.preReadyFrameRecovery;
                    f && q?.registerFrameRecovery(f, d), a.postTimeout && "worker_timeout" === c && a.failureId === e && (h = a, B(), A("worker_timeout", "post_timeout"))
                },
                onActionResult: (a, b) => {
                    n(m, "action.result", {
                        action_type: a,
                        result: b
                    })
                },
                onFallbackResult: (a, b) => {
                    D(), s.emitFallback(a, b ?? s.currentFailureStage())
                },
                onTerminalFailure: a => "runtime_error" === a ? F(a) : E(a),
                onHostRenderFailure: a => {
                    try {
                        b && (b = (0, d.b)(b, "host_error", "threw", {
                            error: a
                        }))
                    } catch {}
                    E("host_error")
                },
                onInitialRenderCommit: () => {
                    D(), C("first_snapshot_success")
                },
                onComposition: a => {
                    s.emitComposition(a)
                },
                onLifecycleEvent: a => {
                    "failure" === a.kind ? F(a.stage) : ("frame_ready" === a.kind && (t = 0), D(), s.recordLifecycleStage(a))
                },
                onSnapshot: a => {
                    if (!(a.version <= 0) && !(a.version <= t)) {
                        if (D(), t = a.version, null != a.error) return void F(s.currentFailureStage() ?? "runtime_error");
                        s.recordHostRender(), C("first_snapshot_success")
                    }
                }
            }
        }
        class l {
            metrics;
            renderAttemptId;
            attempt = null;
            compositionEmitted = !1;
            constructor(a, b) {
                this.metrics = a, this.renderAttemptId = b
            }
            beginRenderAttempt() {
                if (this.attempt) return;
                let a = m();
                this.attempt = {
                    fallbackEmitted: !1,
                    failureStage: null,
                    frameState: null,
                    lastStage: null,
                    lastStageAtMs: a,
                    startedAtMs: a,
                    terminalEmitted: !1
                }
            }
            recordLifecycleStage(a) {
                let b = this.attempt;
                b && !b.terminalEmitted && ("frame_ready" === a.kind && null == b.lastStage ? (b.frameState = a.wasReady ? "ready" : "waiting", this.recordStage("frame_wait", b)) : "worker_ready" === a.kind && "frame_wait" === b.lastStage ? this.recordStage("worker_startup", b) : "first_snapshot_success" === a.kind && "worker_startup" === b.lastStage && this.recordStage("program_evaluation", b))
            }
            recordHostRender() {
                let a = this.attempt;
                a?.lastStage === "program_evaluation" && this.recordStage("host_render", a)
            }
            recordStage(a, b) {
                let c = m();
                p(this.metrics, "render.stage.latency_ms", {
                    frame_state: b.frameState ?? "waiting",
                    stage: a
                }, Math.max(0, c - b.lastStageAtMs)), b.lastStage = a, b.lastStageAtMs = c
            }
            recordFailureStage(a) {
                this.attempt && (this.attempt.failureStage = a)
            }
            currentFailureStage() {
                return this.attempt?.failureStage ?? null
            }
            finishRender(a) {
                let b = this.attempt;
                if (!b || b.terminalEmitted) return;
                b.terminalEmitted = !0;
                let c = {
                    result: a
                };
                n(this.metrics, "render.result", c, {
                    render_attempt_id: this.renderAttemptId
                }), p(this.metrics, "render.latency_ms", c, Math.max(0, m() - b.startedAtMs))
            }
            emitFallback(a, b) {
                let c = this.attempt;
                c && !c.fallbackEmitted && (c.fallbackEmitted = !0, n(this.metrics, "fallback.result", {
                    failure_stage: b ?? "host_error",
                    result: a
                }))
            }
            emitComposition(a) {
                this.compositionEmitted || (this.compositionEmitted = !0, function(a, b, c) {
                    let d = `${i}.render.composition`,
                        e = `${d}.result`;
                    try {
                        a.addAction?.(d, "complete" === c.status ? {
                            client_widget_count: c.componentCounts.get("__chatgptClientDefinedWidget") ?? 0,
                            contains_svg: (c.componentCounts.get("svg") ?? 0) > 0,
                            distinct_component_type_count: c.distinctComponentTypeCount,
                            image_count: c.componentCounts.get("image") ?? 0,
                            render_attempt_id: b,
                            renderer: c.renderer,
                            search_image_count: c.componentCounts.get("search-image") ?? 0,
                            ..."frame" === c.renderer ? {
                                snapshot_version: c.snapshotVersion
                            } : {},
                            status: c.status,
                            svg_count: c.componentCounts.get("svg") ?? 0,
                            total_component_count: c.totalComponentCount
                        } : {
                            render_attempt_id: b,
                            renderer: c.renderer,
                            snapshot_version: c.snapshotVersion,
                            status: c.status
                        })
                    } catch {}
                    try {
                        a.count(e, {
                            renderer: c.renderer,
                            result: c.status
                        })
                    } catch {}
                    if ("complete" === c.status) {
                        for (let [b, d] of(o(a, "render.total_component_count", {}, c.totalComponentCount), o(a, "render.distinct_component_type_count", {}, c.distinctComponentTypeCount), c.componentCounts)) o(a, "render.component_instances", {
                            component_type: b
                        }, d);
                        try {
                            a.count(`${i}.render.contains_svg`, {
                                contains_svg: String((c.componentCounts.get("svg") ?? 0) > 0)
                            })
                        } catch {}
                    }
                }(this.metrics, this.renderAttemptId, a))
            }
        }

        function m() {
            return "u" < typeof performance ? Date.now() : performance.now()
        }

        function n(a, b, c, d) {
            let e = `${i}.${b}`;
            try {
                a.addAction?.(e, {
                    ...c,
                    ...d
                })
            } catch {}
            try {
                a.count(e, c)
            } catch {}
        }

        function o(a, b, c, d) {
            try {
                a.hist(`${i}.${b}`, c, d)
            } catch {}
        }

        function p(a, b, c, d) {
            try {
                a.hist(`${i}.${b}`, c, d)
            } catch {}
        }

        function q(a, b) {
            let c, d, e, f, h, i, j = g(),
                k = !1,
                l = !0,
                m = !1,
                n = !1,
                o = 0,
                p = !1,
                q = !1,
                r = 0,
                s = "unknown",
                t = 0,
                u = 0,
                v = 0,
                w = !1,
                x = !1,
                y = !1,
                z = !1,
                A = !1,
                B = !1,
                C = null,
                D = new Set,
                E = new Map,
                F = "complete",
                G = (b, c) => {
                    try {
                        a.count(`chatgpt.model_written_dil.v2.render.${b}`, {
                            platform: "web",
                            cohort: s,
                            ...c
                        })
                    } catch {}
                },
                H = (a, b) => {
                    p && !d && (d = a, clearTimeout(f), G("presentation_startup_result", {
                        result: a,
                        reason: b
                    }))
                },
                I = function(c, f, g) {
                    let k = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
                    if (!p || q) return;
                    let l = k - t;
                    for (let a of (d || (l > 5e3 ? H("unknown", "late_observation") : "abandon" === f ? H("abandoned", g) : "content" === f && "unknown" !== c ? H("met", "content_present") : H("unknown", g)), q = !0, D)) a(c);
                    D.clear(), n = "abandoned" === c && "deselected" === g, clearTimeout(e), h?.(), h = void 0, i = void 0, G("presentation_result", {
                        result: c,
                        cutoff: f,
                        reason: g,
                        startup: d ?? "unknown"
                    });
                    try {
                        if (b?.enabled()) {
                            let a = z || "unrecovered" === c ? 1 : .01;
                            Math.random() < a && b.reporting.publish("DIL presentation outcome", {
                                presentation_id: j,
                                result: c,
                                reason: g,
                                cohort: s,
                                report_cutoff: f,
                                startup: d,
                                elapsed_ms: Math.round(l),
                                sample_rate: a,
                                diagnostic_reports: o,
                                ...E.size > 0 ? {
                                    recovery_summary_json: (() => {
                                        if (0 === E.size) return;
                                        let a = [],
                                            b = 0;
                                        for (let {
                                                initial: c,
                                                read: d
                                            }
                                            of E.values()) try {
                                            let e = d ? d() : c;
                                            e ? a.push({
                                                ...e,
                                                observation: d ? e.runnerDisposed ? "runner_disposed" : "settlement" : "snapshot"
                                            }) : b++
                                        } catch {
                                            b++
                                        }
                                        return JSON.stringify({
                                            attempts: a,
                                            coverage: F,
                                            unavailableAttempts: b
                                        })
                                    })()
                                } : {}
                            }, "unrecovered" !== c)
                        }
                    } catch {}
                    if (E.clear(), F = "complete", "content" === f && "unknown" !== c) try {
                        a.hist("chatgpt.model_written_dil.v2.render.presentation_first_content_ms", {
                            platform: "web",
                            cohort: s
                        }, l)
                    } catch {}
                },
                J = a => {
                    if (!p || q || !l) return;
                    let b = performance.now();
                    !d && "startup" !== a && b - t > 5e3 && H("unknown", "late_observation");
                    let e = "startup" === a ? t + 5e3 : u,
                        f = "visible" !== document.visibilityState ? "background" : b - e > 1e3 || "content" === a && b > u ? "late_observation" : void 0;
                    if (f) {
                        "startup" === a && H("unknown", f), "deadline" === a && I("unknown", a, f), "content" === a && b > u && I("unknown", "deadline", f);
                        return
                    }
                    let g = "unknown",
                        j = performance.now();
                    try {
                        g = w ? "empty" : C && x && v < 64 ? function(a) {
                            if (null == a) return "empty";
                            if (!a.isConnected) return "unknown";
                            let b = performance.now(),
                                c = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT),
                                d = 0;
                            for (let a = c.nextNode(); null != a; a = c.nextNode()) {
                                if (++d > 4096 || performance.now() - b > 8) return "unknown";
                                let c = a.nodeType === Node.TEXT_NODE && a.textContent?.replace(/[\u200B-\u200D\uFEFF]/g, "").trim(),
                                    e = a instanceof HTMLImageElement && a.complete && a.naturalWidth > 0;
                                if (!c && !e) continue;
                                let f = a instanceof Element ? a : a.parentElement;
                                if (!f || f.closest("[hidden]")) continue;
                                let g = document.createRange();
                                g.selectNodeContents(a);
                                let h = Array.from(c ? g.getClientRects() : f.getClientRects(), a => {
                                        let {
                                            left: b,
                                            right: c,
                                            top: d,
                                            bottom: e
                                        } = a;
                                        return {
                                            left: b,
                                            right: c,
                                            top: d,
                                            bottom: e
                                        }
                                    }),
                                    i = !0;
                                for (let a = f; null != a; a = a.parentElement) {
                                    if (performance.now() - b > 8) return "unknown";
                                    let c = getComputedStyle(a);
                                    if ("none" === c.display || "visible" !== c.visibility || "hidden" === c.contentVisibility || "0" === c.opacity) {
                                        i = !1;
                                        break
                                    }
                                    let d = "hidden" === c.overflowX || "clip" === c.overflowX,
                                        e = "hidden" === c.overflowY || "clip" === c.overflowY;
                                    if (d || e) {
                                        let b = a.getBoundingClientRect();
                                        h = h.map(a => ({
                                            left: d ? Math.max(a.left, b.left) : a.left,
                                            right: d ? Math.min(a.right, b.right) : a.right,
                                            top: e ? Math.max(a.top, b.top) : a.top,
                                            bottom: e ? Math.min(a.bottom, b.bottom) : a.bottom
                                        }))
                                    }
                                }
                                if (i && h.some(a => a.right > a.left && a.bottom > a.top)) return "present"
                            }
                            return a.querySelector("canvas, iframe, svg, video, input, textarea") ? "unknown" : "empty"
                        }(C) : "unknown"
                    } catch {
                        "startup" === a && H("unknown", "observer_error"), "deadline" === a && I("unknown", a, "observer_error");
                        return
                    } finally {
                        (v += performance.now() - j) >= 64 && (h?.(), h = void 0, i = void 0)
                    }
                    if ("startup" === a && ("empty" === g || y ? H("missed", "content_not_observed") : "present" !== g && H("unknown", "output_unobserved")), "present" === g) {
                        let a = performance.now();
                        if (a > u) return void I("unknown", "deadline", "late_observation");
                        I(B || A ? "usable_partial" : z ? "recovered" : "usable", "content", "content_present", a)
                    } else "deadline" === a && (y ? I("unrecovered", a, "host_failure") : !1 !== c ? I("unknown", a, c ? "streaming_unconfirmed" : "input_pending") : "empty" === g ? I("unrecovered", a, w ? "root_failure" : "empty_output") : I("unknown", a, v >= 64 ? "observer_budget" : "output_unobserved"))
                },
                K = () => {
                    let a = C;
                    if (!a || !p || q || !l || v >= 64) return;
                    let b = 0,
                        c = () => {
                            !b && l && !q && v < 64 && (b = requestAnimationFrame(() => {
                                b = 0, J("content")
                            }))
                        };
                    i = c;
                    let d = new MutationObserver(c);
                    d.observe(a, {
                        childList: !0,
                        subtree: !0,
                        characterData: !0,
                        attributes: !0,
                        attributeFilter: ["style", "class", "hidden", "aria-hidden"]
                    });
                    let e = new ResizeObserver(c);
                    e.observe(a);
                    let f = ["load", "transitionend", "animationend"];
                    for (let b of f) a.addEventListener(b, c, !0);
                    document.addEventListener("visibilitychange", c), h = () => {
                        for (let g of (cancelAnimationFrame(b), d.disconnect(), e.disconnect(), f)) a.removeEventListener(g, c, !0);
                        document.removeEventListener("visibilitychange", c)
                    }, c()
                },
                L = () => {
                    k && l && (!p || n) && (p && (j = g()), p = !0, q = !1, n = !1, d = void 0, v = 0, m && (o = 0), m && (z = w || A || B), s = null == c ? "unknown" : c ? "streaming" : "nonstreaming", u = (t = performance.now()) + 3e4, G("presentation_started", {}), f = setTimeout(() => J("startup"), 5e3), e = setTimeout(() => J("deadline"), 3e4), K(), J("content"))
                };
            return {
                diagnosticContext: () => ({
                    presentation_id: j,
                    presentation_settled: q
                }),
                recordDiagnosticReport: () => {
                    l && !q && o++
                },
                registerFrameRecovery: (a, b) => {
                    if (!l || q) return;
                    let c = `${a.frameId}:${a.runnerId??""}`;
                    E.has(c) || E.size < 3 ? E.set(c, {
                        initial: a,
                        read: b
                    }) : F = "truncated"
                },
                setPresented: a => {
                    l !== a && ((l = a) ? L() : (m = !0, I("abandoned", "abandon", "deselected")))
                },
                attach: a => {
                    let b = ++r;
                    return k = !0, c = a, L(), () => {
                        queueMicrotask(() => {
                            b === r && (k = !1, I("abandoned", "abandon", "unmounted"))
                        })
                    }
                },
                updateStreaming: a => {
                    c = a
                },
                deferStreamingRuntimeFailure: a => !!p && !0 === c && !q && (D.add(a), !0),
                observeRoot: a => {
                    h?.(), h = void 0, i = void 0, x = !1, C = a, K()
                },
                reportRootFailure: function() {
                    let a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    w = !0, x = !1, y ||= a, z = !0
                },
                reportTransientFailure: () => {
                    z = !0, A = !0
                },
                reportCommittedRoot: () => {
                    x = !0, w = !1, y = !1, A = !1, i?.()
                },
                reportOmittedChild: a => {
                    B = a, z ||= a
                },
                onPageHide: () => I("abandoned", "abandon", "page_exit")
            }
        }
        let r = "chatgpt.model_written_dil.v2.image";
        class s {
            componentType;
            metrics;
            mapAction;
            source = "missing";
            hasReadySource = !1;
            observedMs = 0;
            fallbackUsed = !1;
            visibility = "unknown";
            detachedVisibility;
            outcome;
            emitted = !1;
            remainingMs = 3e4;
            resumedAt;
            timer;
            hostDocument;
            frame = null;
            observer;
            active = !1;
            generation = 0;
            constructor(a, b, c) {
                this.componentType = a, this.metrics = b, this.mapAction = c
            }
            setSourceState(a) {
                a !== this.source && (this.pause(), "ready" !== a || this.hasReadySource || (this.hasReadySource = !0, this.remainingMs = 3e4), this.source = a, this.onVisibilityChange())
            }
            recordFallback() {
                this.fallbackUsed = !0
            }
            recordLoad(a) {
                this.setSourceState("ready"), this.finish(a)
            }
            start(a) {
                this.active = !0;
                let b = ++this.generation;
                return !this.hostDocument && (this.hostDocument = a, a.addEventListener("visibilitychange", this.onVisibilityChange), this.setFrame(this.frame), this.onVisibilityChange(), this.outcome && this.finish(this.outcome)), () => {
                    this.active = !1, queueMicrotask(() => {
                        this.active || this.generation !== b || this.finish((this.detachedVisibility ?? this.visibility) === "offscreen" ? "not_visible" : "canceled")
                    })
                }
            }
            setFrame = a => {
                this.pause(), this.detachedVisibility = a ? void 0 : this.visibility, this.visibility = "unknown", this.frame = a, this.observer?.disconnect(), this.observer = void 0;
                let b = a?.ownerDocument.defaultView;
                a && b && this.hostDocument && !this.emitted && "function" == typeof b.IntersectionObserver && (this.observer = new b.IntersectionObserver(b => {
                    this.frame === a && (this.pause(), this.visibility = b.some(a => a.isIntersecting && a.intersectionRect.width > 0 && a.intersectionRect.height > 0) ? "visible" : "offscreen", this.onVisibilityChange())
                }), this.observer.observe(a))
            };
            finish(a) {
                if (this.emitted || (this.outcome ??= a, !this.hostDocument)) return;
                this.emitted = !0, this.pause(), this.observer?.disconnect(), this.hostDocument.removeEventListener("visibilitychange", this.onVisibilityChange);
                let b = {
                    component_type: this.componentType,
                    ...this.mapAction ? {
                        map_action: this.mapAction
                    } : {},
                    renderer: "frame",
                    platform: "web",
                    outcome: this.outcome,
                    source_state: this.source,
                    fallback_used: String(this.fallbackUsed),
                    visibility: this.detachedVisibility ?? this.visibility
                };
                try {
                    this.metrics.count(`${r}.load_result`, b), this.metrics.hist(`${r}.load_duration_ms`, b, this.observedMs)
                } catch {}
            }
            onVisibilityChange = () => {
                this.hostDocument?.visibilityState !== "visible" || "visible" !== this.visibility ? this.pause() : this.emitted || void 0 !== this.resumedAt || (this.resumedAt = Date.now(), this.timer = setTimeout(this.expire, this.remainingMs))
            };
            pause() {
                if (void 0 !== this.timer && clearTimeout(this.timer), this.timer = void 0, void 0 !== this.resumedAt) {
                    let a = Math.max(0, Date.now() - this.resumedAt);
                    this.observedMs += a, this.remainingMs = Math.max(0, this.remainingMs - a), this.resumedAt = void 0
                }
            }
            expire = () => {
                this.finish("missing" === this.source ? "missing_source" : "blocked" === this.source ? "blocked" : "pending" === this.source ? "approval_pending" : "visible" === this.visibility ? "timeout" : "not_visible")
            }
        }

        function t(a, b, c, d, e, f, g) {
            try {
                var h;
                if ("image" !== a && "search-image" !== a || !e || !Number.isFinite(b) || !Number.isFinite(c) || b <= 0 || c <= 0) return;
                let i = e.innerWidth,
                    j = e.innerHeight,
                    k = {
                        component_type: a,
                        renderer: d,
                        os: g,
                        viewport_width_bucket: (h = i, !Number.isFinite(h) || h <= 0 ? "unknown" : h < 640 ? "lt640" : h < 768 ? "640_767" : h < 1024 ? "768_1023" : "ge1024"),
                        layout_unit: "css_px"
                    };
                for (let [a, d] of Object.entries({
                        rendered_width_layout_units: b,
                        rendered_height_layout_units: c,
                        rendered_area_layout_units2: b * c,
                        viewport_width_layout_units: i,
                        viewport_height_layout_units: j
                    })) Number.isFinite(d) && d > 0 && f.hist(`chatgpt.model_written_dil.v2.image.${a}`, k, d)
            } catch {}
        }
        let u = new Set(["as", "class", "className", "dangerouslySetInnerHTML", "style"]);

        function* v(a) {
            for (let b in "svg" !== a.type && (yield* a.children), a.props) Object.prototype.hasOwnProperty.call(a.props, b) && !u.has(b) && (yield a.props[b])
        }

        function* w(a) {
            for (let b in a) Object.prototype.hasOwnProperty.call(a, b) && (yield a[b])
        }

        function x() {
            return "u" < typeof performance ? Date.now() : performance.now()
        }

        function y(a) {
            let {
                onComposition: b,
                runIdle: c = z
            } = a, d = !1, e = !1, f = 0, g = !0, h = "frame", i = null, j = null, k = null, l = () => {
                f += 1, null != k && (clearTimeout(k), k = null)
            }, m = () => {
                if (l(), d || e || g || "frame" !== h || null == j || j.source !== i) return;
                let a = f;
                try {
                    k = setTimeout(() => {
                        k = null;
                        let h = () => d || e || g || f !== a;
                        try {
                            c(() => {
                                if (h() || null == j) return;
                                let {
                                    registeredTypes: a,
                                    snapshot: c
                                } = j, d = function(a, b, c) {
                                    let d = c.now ?? x,
                                        e = d(),
                                        f = [{
                                            iterator: [a][Symbol.iterator]()
                                        }],
                                        g = new Set,
                                        h = new Map,
                                        i = 0,
                                        j = 0;
                                    for (; f.length > 0;) {
                                        let a = f.at(-1)?.iterator.next();
                                        if (null == a || a.done) {
                                            let a = f.pop();
                                            a?.pathObject != null && g.delete(a.pathObject);
                                            continue
                                        }
                                        let l = a.value;
                                        if ((j += 1) > c.maxObjects || d() - e > c.maxMs) return {
                                            status: "budget_exceeded"
                                        };
                                        if (!(null == l || "object" != typeof l || g.has(l))) {
                                            var k;
                                            if (g.add(l), Array.isArray(l)) {
                                                f.push({
                                                    iterator: l.values(),
                                                    pathObject: l
                                                });
                                                continue
                                            }
                                            if (k = l, "string" == typeof k.type && null != k.props && "object" == typeof k.props && !Array.isArray(k.props) && Array.isArray(k.children)) {
                                                if (!b.has(l.type)) {
                                                    g.delete(l);
                                                    continue
                                                }
                                                h.set(l.type, (h.get(l.type) ?? 0) + 1), i += 1, f.push({
                                                    iterator: v(l),
                                                    pathObject: l
                                                });
                                                continue
                                            }
                                            f.push({
                                                iterator: w(l),
                                                pathObject: l
                                            })
                                        }
                                    }
                                    return {
                                        componentCounts: h,
                                        distinctComponentTypeCount: h.size,
                                        status: "complete",
                                        totalComponentCount: i
                                    }
                                }(c.tree, a, {
                                    maxMs: 4,
                                    maxObjects: 4096
                                });
                                if (!h()) {
                                    e = !0, j = null, i = null;
                                    try {
                                        b({
                                            ...d,
                                            renderer: "frame",
                                            snapshotVersion: c.version
                                        })
                                    } catch {}
                                }
                            }, {
                                minimumTimeRemainingMs: 4,
                                shouldCancel: h
                            }).catch(() => {})
                        } catch {}
                    }, 500)
                } catch {}
            };
            return {
                dispose: () => {
                    d = !0, l(), j = null, i = null
                },
                onRendererChange: a => {
                    d || e || h === a || (h = a, l(), j = null)
                },
                onSnapshot: (a, b, c) => {
                    d || e || "frame" !== h || (l(), a.version > 0 && null == a.error && (j = {
                        registeredTypes: b,
                        snapshot: a,
                        source: c
                    }), m())
                },
                onSourceChange: (a, b) => {
                    d || e || (i = a, j?.source === a && (j = {
                        ...j,
                        registeredTypes: b
                    }), m())
                },
                onStreamingChange: a => {
                    d || e || (g = a, m())
                }
            }
        }

        function z(a) {
            let {
                minimumTimeRemainingMs: b = 0,
                shouldCancel: c = () => !1
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Promise((d, e) => {
                let f = f => {
                        if (c()) return void d();
                        if (null != f && !f.didTimeout && f.timeRemaining() < b) return void g();
                        try {
                            a(), d()
                        } catch (a) {
                            e(a)
                        }
                    },
                    g = () => {
                        "requestIdleCallback" in window ? window.requestIdleCallback(f) : globalThis.setTimeout(() => f(), 0)
                    };
                g()
            })
        }

        function A(a) {
            if (null == a || "object" != typeof a || !("logging_metadata" in a)) return;
            let b = a.logging_metadata;
            if (null == b || "object" != typeof b || Array.isArray(b)) return;
            let c = {};
            for (let [a, d] of Object.entries(b)) "string" == typeof d && (c[a] = d);
            return Object.keys(c).length > 0 ? c : void 0
        }
    })
};