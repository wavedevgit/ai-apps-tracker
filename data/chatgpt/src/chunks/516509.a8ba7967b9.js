export const __rspack_esm_ids = [516509];
export const __webpack_modules__ = {
    HJNo: (function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            (0, n.default)(e), (t = (0, o.default)(t, a)).allow_trailing_dot && "." === e[e.length - 1] && (e = e.substring(0, e.length - 1)), !0 === t.allow_wildcard && 0 === e.indexOf("*.") && (e = e.substring(2));
            var r = e.split("."),
                i = r[r.length - 1];
            return !(t.require_tld && (r.length < 2 || !t.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(i) || /\s/.test(i))) && !(!t.allow_numeric_tld && /^\d+$/.test(i)) && r.every(function(e) {
                return !(e.length > 63 && !t.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(e) || /[\uff01-\uff5e]/.test(e) || /^-|-$/.test(e) || !t.allow_underscores && /_/.test(e))
            })
        };
        var n = i(r("NgaJ")),
            o = i(r("Y4hk"));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var a = {
            require_tld: !0,
            allow_underscores: !1,
            allow_trailing_dot: !1,
            allow_numeric_tld: !1,
            allow_wildcard: !1,
            ignore_max_length: !1
        };
        e.exports = t.default, e.exports.default = t.default
    }),
    BMmD: (function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function e(t) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (0, o.default)(t);
            var n = ("object" === i(r) ? r.version : arguments[1]) || "";
            return n ? "4" === n.toString() ? l.test(t) : "6" === n.toString() && c.test(t) : e(t, {
                version: 4
            }) || e(t, {
                version: 6
            })
        };
        var n, o = (n = r("NgaJ")) && n.__esModule ? n : {
            default: n
        };

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var a = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
            s = "(".concat(a, "[.]){3}").concat(a),
            l = new RegExp("^".concat(s, "$")),
            u = "(?:[0-9a-fA-F]{1,4})",
            c = RegExp("^(" + "(?:".concat(u, ":){7}(?:").concat(u, "|:)|") + "(?:".concat(u, ":){6}(?:").concat(s, "|:").concat(u, "|:)|") + "(?:".concat(u, ":){5}(?::").concat(s, "|(:").concat(u, "){1,2}|:)|") + "(?:".concat(u, ":){4}(?:(:").concat(u, "){0,1}:").concat(s, "|(:").concat(u, "){1,3}|:)|") + "(?:".concat(u, ":){3}(?:(:").concat(u, "){0,2}:").concat(s, "|(:").concat(u, "){1,4}|:)|") + "(?:".concat(u, ":){2}(?:(:").concat(u, "){0,3}:").concat(s, "|(:").concat(u, "){1,5}|:)|") + "(?:".concat(u, ":){1}(?:(:").concat(u, "){0,4}:").concat(s, "|(:").concat(u, "){1,6}|:)|") + "(?::((?::".concat(u, "){0,5}:").concat(s, "|(?::").concat(u, "){1,7}|:))") + ")(%[0-9a-zA-Z.]{1,})?$");
        e.exports = t.default, e.exports.default = t.default
    }),
    Tv1c: (function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            if ((0, n.default)(e), !e || /[\s<>]/.test(e) || 0 === e.indexOf("mailto:") || (t = (0, l.default)(t, d)).validate_length && e.length > t.max_allowed_length || !t.allow_fragments && (0, i.default)(e, "#") || !t.allow_query_components && ((0, i.default)(e, "?") || (0, i.default)(e, "&"))) return !1;
            var r, u, h, m, f, _, v, g, y = (e = (v = (e = (v = e.split("#")).shift()).split("?")).shift()).match(/^([a-z][a-z0-9+\-.]*):/i),
                b = !1,
                w = function(n) {
                    return b = !0, r = n.toLowerCase(), (!t.require_valid_protocol || -1 !== t.protocols.indexOf(r)) && e.substring(y[0].length)
                };
            if (y) {
                var x = y[1],
                    C = e.substring(y[0].length);
                if ("//" === C.slice(0, 2)) {
                    if (!1 === (e = w(x))) return !1
                } else {
                    var k = C.indexOf("/"),
                        S = -1 === k ? C : C.substring(0, k),
                        M = S.indexOf("@");
                    if (-1 !== M) {
                        var E = S.substring(0, M),
                            T = /^[a-zA-Z0-9\-_.%:]*$/.test(E),
                            A = /%[0-9a-fA-F]{2}/.test(E);
                        if (T && !A) {
                            if (t.require_protocol) return !1
                        } else if (!1 === (e = w(x))) return !1
                    } else if (/^[0-9]/.test(C)) {
                        if (t.require_protocol) return !1
                    } else if (!1 === (e = w(x))) return !1
                }
            } else if (t.require_protocol) return !1;
            if ("//" === e.slice(0, 2)) {
                if (!b && !t.allow_protocol_relative_urls) return !1;
                e = e.slice(2)
            }
            if ("" === e) return !1;
            if ("" === (e = (v = e.split("/")).shift()) && !t.require_host) return !0;
            if ((v = e.split("@")).length > 1) {
                if (t.disallow_auth || "" === v[0] || (u = v.shift()).indexOf(":") >= 0 && u.split(":").length > 2) return !1;
                var R, F = function(e) {
                        if (Array.isArray(e)) return e
                    }(R = u.split(":")) || function(e) {
                        var t = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != t) {
                            var r, n, o, i, a = [],
                                s = !0,
                                l = !1;
                            try {
                                o = (t = t.call(e)).next, !1;
                                for (; !(s = (r = o.call(t)).done) && (a.push(r.value), 2 !== a.length); s = !0);
                            } catch (e) {
                                l = !0, n = e
                            } finally {
                                try {
                                    if (!s && null != t.return && (i = t.return(), Object(i) !== i)) return
                                } finally {
                                    if (l) throw n
                                }
                            }
                            return a
                        }
                    }(R) || function(e) {
                        if (e) {
                            if ("string" == typeof e) return c(e, 2);
                            var t = ({}).toString.call(e).slice(8, -1);
                            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? c(e, 2) : void 0
                        }
                    }(R) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(),
                    O = F[0],
                    L = F[1];
                if ("" === O && "" === L) return !1
            }
            m = v.join("@"), _ = null, g = null;
            var j = m.match(p);
            if (j ? (h = "", g = j[1], _ = j[2] || null) : (h = (v = m.split(":")).shift(), v.length && (_ = v.join(":"))), null !== _ && _.length > 0) {
                if (f = parseInt(_, 10), !/^[0-9]+$/.test(_) || f <= 0 || f > 65535) return !1
            } else if (t.require_port) return !1;
            return t.host_whitelist ? (0, o.default)(h, t.host_whitelist) : "" === h && !t.require_host || (!!(0, s.default)(h) || !!(0, a.default)(h, t) || !!g && !!(0, s.default)(g, 6)) && (h = h || g, !(t.host_blacklist && (0, o.default)(h, t.host_blacklist)))
        };
        var n = u(r("NgaJ")),
            o = u(r("bPnx")),
            i = u(r("skvE")),
            a = u(r("HJNo")),
            s = u(r("BMmD")),
            l = u(r("Y4hk"));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
            return n
        }
        var d = {
                protocols: ["http", "https", "ftp"],
                require_tld: !0,
                require_protocol: !1,
                require_host: !0,
                require_port: !1,
                require_valid_protocol: !0,
                allow_underscores: !1,
                allow_trailing_dot: !1,
                allow_protocol_relative_urls: !1,
                allow_fragments: !0,
                allow_query_components: !0,
                validate_length: !0,
                max_allowed_length: 2084
            },
            p = /^\[([^\]]+)\](?::([0-9]+))?$/;
        e.exports = t.default, e.exports.default = t.default
    }),
    NgaJ: (function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            if (null == e) throw TypeError("Expected a string but received a ".concat(e));
            if ("String" !== e.constructor.name) throw TypeError("Expected a string but received a ".concat(e.constructor.name))
        }, e.exports = t.default, e.exports.default = t.default
    }),
    bPnx: (function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                if (e === n || "[object RegExp]" === Object.prototype.toString.call(n) && n.test(e)) return !0
            }
            return !1
        }, e.exports = t.default, e.exports.default = t.default
    }),
    skvE: (function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0, t.default = function(e, t) {
            return -1 !== e.indexOf(t)
        }, e.exports = t.default, e.exports.default = t.default
    }),
    Y4hk: (function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 ? arguments[1] : void 0;
            for (var r in t) void 0 === e[r] && (e[r] = t[r]);
            return e
        }, e.exports = t.default, e.exports.default = t.default
    }),
    Nl8C: (function(e, t, r) {
        r.d(t, {
            a: () => g,
            b: () => 32768,
            c: () => k,
            d: () => c,
            e: () => _,
            f: () => y,
            g: () => M,
            h: () => i
        });
        var n = r("NHPR");
        let o = new TextEncoder;

        function i(e) {
            return o.encode(JSON.stringify(e)).byteLength
        }

        function a() {
            try {
                if ("function" == typeof globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID()
            } catch {}
            let e = new Uint8Array(16);
            if (globalThis.crypto?.getRandomValues) try {
                globalThis.crypto.getRandomValues(e)
            } catch {
                s(e)
            } else s(e);
            e[6] = (e[6] ?? 0) & 15 | 64, e[8] = (e[8] ?? 0) & 63 | 128;
            let t = Array.from(e, e => e.toString(16).padStart(2, "0"));
            return `${t.slice(0,4).join("")}-${t.slice(4,6).join("")}-${t.slice(6,8).join("")}-${t.slice(8,10).join("")}-${t.slice(10).join("")}`
        }

        function s(e) {
            for (let t = 0; t < e.length; t += 1) e[t] = Math.floor(256 * Math.random())
        }
        let l = "chatgpt.model_written_dil.v2";

        function u(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, n.c)(t),
                o = "unavailable" === r.coverage ? t.records : r.records,
                i = "complete" === r.coverage || "unavailable" === r.coverage && !t.truncated && 0 === t.dropped,
                a = t.runnerId,
                s = o.filter(e => e.runnerId === a);
            if ("frame_timeout" === e) {
                if (o.some(e => "module_load" === e.operation && "runner_module_script_error" === e.reason)) return "runner_module_script_error";
                if (o.some(e => "iframe_resource" === e.operation && null != e.httpStatus && e.httpStatus >= 400)) return "iframe_http_error";
                if (i && o.some(e => "observer_bootstrap" === e.operation) && !o.some(e => "module_entry" === e.operation)) return "module_entry_unobserved";
                if (i && o.some(e => "iframe_load" === e.operation) && !o.some(e => "observer_bootstrap" === e.operation)) return "iframe_loaded_bootstrap_unobserved";
                if (i && o.some(e => "iframe_create" === e.operation && "returned" === e.phase) && !o.some(e => "iframe_load" === e.operation)) return "iframe_load_unobserved"
            }
            if ("worker_timeout" === e) {
                let e = s.find(e => "host" === e.realm && "worker_timer" === e.operation && "fired" === e.phase),
                    r = s.filter(t => "runner_create" === t.operation && "received" === t.phase && null != e && null != t.hostReceivedAtMs && t.hostReceivedAtMs > e.localTimeMs);
                if (r.some(e => "worker" === e.realm)) return "worker_evidence_after_timeout";
                if (r.some(e => "iframe" === e.realm)) return "iframe_evidence_after_timeout";
                if (e) {
                    let t = s.filter(t => "runner_create" === t.operation && "received" === t.phase && null != t.hostReceivedAtMs && t.hostReceivedAtMs <= e.localTimeMs);
                    if (t.some(e => "worker" === e.realm)) return "worker_received_before_timeout";
                    if (t.some(e => "iframe" === e.realm)) return "iframe_received_worker_unobserved"
                }
                let n = s.filter(e => "runner_create" === e.operation && "received" === e.phase && null == e.hostReceivedAtMs);
                if (n.some(e => "worker" === e.realm)) return "worker_receipt_time_unavailable";
                if (n.some(e => "iframe" === e.realm)) return "iframe_receipt_time_unavailable";
                if ("frame_disposed" === t.postTimeoutCoverage) return "frame_disposed";
                if ("observation_interrupted" === t.postTimeoutCoverage || "window_shortened" === t.postTimeoutCoverage) return "observation_interrupted";
                let o = !t.truncated && 0 === t.dropped || s.some(t => "host" === t.realm && "frame_probe" === t.operation && "resolved" === t.phase && null != e && t.localTimeMs >= e.localTimeMs);
                if (e && i && o && t.observedRealms.includes("iframe")) {
                    if (t.postTimeout) return "no_receipt_within_window";
                    if (s.some(e => "host" === e.realm && "runner_create" === e.operation && "sent" === e.phase)) return "iframe_creation_unobserved"
                }
            }
            if ("runtime_error" === e) {
                let e = s.findLast(e => "quarantine" === e.operation && "decision" === e.phase)?.reason,
                    t = {
                        control_unavailable: "supervisor_control_unavailable",
                        probe_healthy_unacknowledged: "supervisor_probe_healthy_unacknowledged",
                        probe_timeout: "supervisor_probe_timeout",
                        peer_probe_timeout: "supervisor_peer_probe_timeout",
                        startup_exhausted: "supervisor_startup_exhausted",
                        worker_restart: "supervisor_worker_restart"
                    };
                if (e && Object.hasOwn(t, e)) return t[e];
                if (a && "unavailable" !== r.coverage && s.some(e => "iframe" === e.realm && "error" === e.operation && "reported_error" === e.phase && "worker_start_error" === e.reason)) return "supervisor_worker_start_error"
            }
            return "unknown"
        }

        function c(e) {
            let t, r, o, s, c, {
                    metrics: p,
                    diagnosticsExpected: m = !1,
                    startupReporting: f,
                    presentation: _
                } = e,
                v = a(),
                g = new d(p, v),
                y = 0,
                b = !1,
                w = !1,
                x = !1,
                C = new Set,
                k = new Set,
                S = new Set,
                M = function(e) {
                    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "first_snapshot_success" === e ? "snapshot_effect" : "failure_observed";
                    if (null == t || !f) return;
                    let a = "first_snapshot_success" === e;
                    if (a) {
                        if ("first_snapshot_success" !== r || b || (b = !0, Math.random() >= .01)) return
                    } else {
                        let e = t.failureId ?? "host_error";
                        if ("post_timeout" === o) {
                            if (!k.has(e) || S.has(e)) return;
                            S.add(e)
                        } else {
                            if (C.has(e) || C.size >= 3) return;
                            C.add(e)
                        }
                    }
                    try {
                        if (!f.canPublish(e, o)) return;
                        let s = (0, n.b)(t, "render_result", "decision", {
                                reason: e
                            }),
                            l = (0, n.c)(s),
                            c = {
                                ..._?.diagnosticContext(),
                                render_attempt_id: v,
                                failure_id: s.failureId,
                                failure_boundary: a ? "unknown" : u(e, s, l),
                                summary_coverage: l.coverage,
                                observation_window_ms: s.postTimeoutWindowMs,
                                observation_elapsed_ms: s.postTimeoutElapsedMs,
                                observation_sample_rate: s.postTimeoutSampleRate,
                                result: e,
                                initial_result: r,
                                after_initial_success: !a && "first_snapshot_success" === r,
                                report_cutoff: o,
                                diagnostics: s
                            },
                            d = function(e) {
                                let {
                                    diagnostics: t,
                                    ...r
                                } = e, n = e => i(JSON.stringify(e)) - 2, o = t.records.map(n), a = t.openOperations.map(n), s = new Set, l = new Set, u = i({
                                    ...r,
                                    diagnostics_json: JSON.stringify({
                                        ...t,
                                        records: [],
                                        openOperations: [],
                                        dropped: t.dropped + o.length + a.length,
                                        truncated: !0
                                    })
                                }) + 1, c = (e, t, r) => {
                                    let n = t[e];
                                    if (void 0 === n || r.has(e)) return;
                                    let o = n + +(0 !== r.size);
                                    u + o <= 32768 && (r.add(e), u += o)
                                };
                                c(t.records.findIndex(e => null != e.fault), o, s);
                                for (let e = 0; e < a.length; e++) c(e, a, l);
                                for (let e = 0; e < Math.min(8, o.length); e++) c(e, o, s);
                                for (let e = o.length - 1; e >= 0; e--) c(e, o, s);
                                let d = o.length + a.length - s.size - l.size;
                                return {
                                    ...r,
                                    diagnostics_json: JSON.stringify({
                                        ...t,
                                        records: t.records.filter((e, t) => s.has(t)),
                                        openOperations: t.openOperations.filter((e, t) => l.has(t)),
                                        dropped: t.dropped + d,
                                        truncated: t.truncated || d > 0
                                    })
                                }
                            }(c);
                        if (!f.publish("DIL startup diagnostics", d, a)) return;
                        if (_?.recordDiagnosticReport(), !a) {
                            let e = t.failureId ?? "host_error";
                            "post_timeout" !== o && k.add(e)
                        }
                    } catch {
                        f.recordSuppression(e, o, "observer_error")
                    }
                },
                E = () => {
                    if (w || !r || "first_snapshot_success" === r || "unknown" === r || "abandoned" === r || !s && !m) return;
                    w = !0, c && clearTimeout(c);
                    let e = "unknown",
                        t = "unavailable";
                    try {
                        if (s) {
                            let o = (0, n.c)(s);
                            t = o.coverage, e = u(r, s, o)
                        }
                    } catch {}
                    try {
                        h(p, "startup.failure_boundary", {
                            result: r,
                            last_observed_boundary: e,
                            summary_coverage: t,
                            observation_window: "worker_timeout" === r ? s?.postTimeoutWindowMs === 1e4 ? "extended" : "short" : "none",
                            observation_status: "worker_timeout" === r ? s?.postTimeoutCoverage ?? "unavailable" : "not_applicable"
                        })
                    } catch {}
                },
                T = e => {
                    let n = void 0 === r;
                    r ??= e, g.finishRender(e), "unknown" !== e && "abandoned" !== e && (M(e), n && "first_snapshot_success" !== e && (o = t?.failureId, s = t, "worker_timeout" === e && (s || m) ? c = setTimeout(E, Math.min(1e4, Math.max(1e3, s?.postTimeoutWindowMs ?? 1e3)) + 500) : E()))
                },
                A = () => g.beginRenderAttempt(),
                R = e => {
                    A(), g.recordFailureStage(e), T(e)
                },
                F = e => {
                    A(), g.recordFailureStage(e), "runtime_error" === e && void 0 === r && (x ||= _?.deferStreamingRuntimeFailure(t => {
                        void 0 === r && T("unrecovered" === t ? e : "unknown" === t || "abandoned" === t ? t : "first_snapshot_success")
                    }) ?? !1) || T(e)
                };
            return {
                beginRenderAttempt: A,
                onPreparationEnd: e => {
                    let t = {
                        outcome: e.outcome,
                        readiness: e.readiness
                    };
                    h(p, "preparation.result", t), null != e.readyLeadMs && p.hist(`${l}.preparation.ready_before_input_ms`, t, e.readyLeadMs)
                },
                onDiagnostics: (e, n) => {
                    t = e;
                    let i = e.preReadyFrameRecovery;
                    i && _?.registerFrameRecovery(i, n), e.postTimeout && "worker_timeout" === r && e.failureId === o && (s = e, E(), M("worker_timeout", "post_timeout"))
                },
                onActionResult: (e, t) => {
                    h(p, "action.result", {
                        action_type: e,
                        result: t
                    })
                },
                onFallbackResult: (e, t) => {
                    A(), g.emitFallback(e, t ?? g.currentFailureStage())
                },
                onTerminalFailure: e => "runtime_error" === e ? F(e) : R(e),
                onHostRenderFailure: e => {
                    try {
                        t && (t = (0, n.b)(t, "host_error", "threw", {
                            error: e
                        }))
                    } catch {}
                    R("host_error")
                },
                onInitialRenderCommit: () => {
                    A(), T("first_snapshot_success")
                },
                onComposition: e => {
                    g.emitComposition(e)
                },
                onLifecycleEvent: e => {
                    "failure" === e.kind ? F(e.stage) : ("frame_ready" === e.kind && (y = 0), A(), g.recordLifecycleStage(e))
                },
                onSnapshot: e => {
                    if (!(e.version <= 0) && !(e.version <= y)) {
                        if (A(), y = e.version, null != e.error) return void F(g.currentFailureStage() ?? "runtime_error");
                        g.recordHostRender(), T("first_snapshot_success")
                    }
                }
            }
        }
        class d {
            metrics;
            renderAttemptId;
            attempt = null;
            compositionEmitted = !1;
            constructor(e, t) {
                this.metrics = e, this.renderAttemptId = t
            }
            beginRenderAttempt() {
                if (this.attempt) return;
                let e = p();
                this.attempt = {
                    fallbackEmitted: !1,
                    failureStage: null,
                    frameState: null,
                    lastStage: null,
                    lastStageAtMs: e,
                    startedAtMs: e,
                    terminalEmitted: !1
                }
            }
            recordLifecycleStage(e) {
                let t = this.attempt;
                t && !t.terminalEmitted && ("frame_ready" === e.kind && null == t.lastStage ? (t.frameState = e.wasReady ? "ready" : "waiting", this.recordStage("frame_wait", t)) : "worker_ready" === e.kind && "frame_wait" === t.lastStage ? this.recordStage("worker_startup", t) : "first_snapshot_success" === e.kind && "worker_startup" === t.lastStage && this.recordStage("program_evaluation", t))
            }
            recordHostRender() {
                let e = this.attempt;
                e?.lastStage === "program_evaluation" && this.recordStage("host_render", e)
            }
            recordStage(e, t) {
                let r = p();
                f(this.metrics, "render.stage.latency_ms", {
                    frame_state: t.frameState ?? "waiting",
                    stage: e
                }, Math.max(0, r - t.lastStageAtMs)), t.lastStage = e, t.lastStageAtMs = r
            }
            recordFailureStage(e) {
                this.attempt && (this.attempt.failureStage = e)
            }
            currentFailureStage() {
                return this.attempt?.failureStage ?? null
            }
            finishRender(e) {
                let t = this.attempt;
                if (!t || t.terminalEmitted) return;
                t.terminalEmitted = !0;
                let r = {
                    result: e
                };
                h(this.metrics, "render.result", r, {
                    render_attempt_id: this.renderAttemptId
                }), f(this.metrics, "render.latency_ms", r, Math.max(0, p() - t.startedAtMs))
            }
            emitFallback(e, t) {
                let r = this.attempt;
                r && !r.fallbackEmitted && (r.fallbackEmitted = !0, h(this.metrics, "fallback.result", {
                    failure_stage: t ?? "host_error",
                    result: e
                }))
            }
            emitComposition(e) {
                this.compositionEmitted || (this.compositionEmitted = !0, function(e, t, r) {
                    let n = `${l}.render.composition`,
                        o = `${n}.result`;
                    try {
                        e.addAction?.(n, "complete" === r.status ? {
                            client_widget_count: r.componentCounts.get("__chatgptClientDefinedWidget") ?? 0,
                            contains_svg: (r.componentCounts.get("svg") ?? 0) > 0,
                            distinct_component_type_count: r.distinctComponentTypeCount,
                            image_count: r.componentCounts.get("image") ?? 0,
                            render_attempt_id: t,
                            renderer: r.renderer,
                            search_image_count: r.componentCounts.get("search-image") ?? 0,
                            ..."frame" === r.renderer ? {
                                snapshot_version: r.snapshotVersion
                            } : {},
                            status: r.status,
                            svg_count: r.componentCounts.get("svg") ?? 0,
                            total_component_count: r.totalComponentCount
                        } : {
                            render_attempt_id: t,
                            renderer: r.renderer,
                            snapshot_version: r.snapshotVersion,
                            status: r.status
                        })
                    } catch {}
                    try {
                        e.count(o, {
                            renderer: r.renderer,
                            result: r.status
                        })
                    } catch {}
                    if ("complete" === r.status) {
                        for (let [t, n] of(m(e, "render.total_component_count", {}, r.totalComponentCount), m(e, "render.distinct_component_type_count", {}, r.distinctComponentTypeCount), r.componentCounts)) m(e, "render.component_instances", {
                            component_type: t
                        }, n);
                        try {
                            e.count(`${l}.render.contains_svg`, {
                                contains_svg: String((r.componentCounts.get("svg") ?? 0) > 0)
                            })
                        } catch {}
                    }
                }(this.metrics, this.renderAttemptId, e))
            }
        }

        function p() {
            return "u" < typeof performance ? Date.now() : performance.now()
        }

        function h(e, t, r, n) {
            let o = `${l}.${t}`;
            try {
                e.addAction?.(o, {
                    ...r,
                    ...n
                })
            } catch {}
            try {
                e.count(o, r)
            } catch {}
        }

        function m(e, t, r, n) {
            try {
                e.hist(`${l}.${t}`, r, n)
            } catch {}
        }

        function f(e, t, r, n) {
            try {
                e.hist(`${l}.${t}`, r, n)
            } catch {}
        }

        function _(e, t) {
            let r, n, o, i, s, l, u = a(),
                c = !1,
                d = !0,
                p = !1,
                h = !1,
                m = 0,
                f = !1,
                _ = !1,
                v = 0,
                g = "unknown",
                y = 0,
                b = 0,
                w = 0,
                x = !1,
                C = !1,
                k = !1,
                S = !1,
                M = !1,
                E = !1,
                T = null,
                A = new Set,
                R = new Map,
                F = "complete",
                O = (t, r) => {
                    try {
                        e.count(`chatgpt.model_written_dil.v2.render.${t}`, {
                            platform: "web",
                            cohort: g,
                            ...r
                        })
                    } catch {}
                },
                L = (e, t) => {
                    f && !n && (n = e, clearTimeout(i), O("presentation_startup_result", {
                        result: e,
                        reason: t
                    }))
                },
                j = function(r, i, a) {
                    let c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
                    if (!f || _) return;
                    let d = c - y;
                    for (let e of (n || (d > 5e3 ? L("unknown", "late_observation") : "abandon" === i ? L("abandoned", a) : "content" === i && "unknown" !== r ? L("met", "content_present") : L("unknown", a)), _ = !0, A)) e(r);
                    A.clear(), h = "abandoned" === r && "deselected" === a, clearTimeout(o), s?.(), s = void 0, l = void 0, O("presentation_result", {
                        result: r,
                        cutoff: i,
                        reason: a,
                        startup: n ?? "unknown"
                    });
                    try {
                        if (t?.enabled()) {
                            let e = S || "unrecovered" === r ? 1 : .01;
                            Math.random() < e && t.reporting.publish("DIL presentation outcome", {
                                presentation_id: u,
                                result: r,
                                reason: a,
                                cohort: g,
                                report_cutoff: i,
                                startup: n,
                                elapsed_ms: Math.round(d),
                                sample_rate: e,
                                diagnostic_reports: m,
                                ...R.size > 0 ? {
                                    recovery_summary_json: (() => {
                                        if (0 === R.size) return;
                                        let e = [],
                                            t = 0;
                                        for (let {
                                                initial: r,
                                                read: n
                                            }
                                            of R.values()) try {
                                            let o = n ? n() : r;
                                            o ? e.push({
                                                ...o,
                                                observation: n ? o.runnerDisposed ? "runner_disposed" : "settlement" : "snapshot"
                                            }) : t++
                                        } catch {
                                            t++
                                        }
                                        return JSON.stringify({
                                            attempts: e,
                                            coverage: F,
                                            unavailableAttempts: t
                                        })
                                    })()
                                } : {}
                            }, "unrecovered" !== r)
                        }
                    } catch {}
                    if (R.clear(), F = "complete", "content" === i && "unknown" !== r) try {
                        e.hist("chatgpt.model_written_dil.v2.render.presentation_first_content_ms", {
                            platform: "web",
                            cohort: g
                        }, d)
                    } catch {}
                },
                P = e => {
                    if (!f || _ || !d) return;
                    let t = performance.now();
                    !n && "startup" !== e && t - y > 5e3 && L("unknown", "late_observation");
                    let o = "startup" === e ? y + 5e3 : b,
                        i = "visible" !== document.visibilityState ? "background" : t - o > 1e3 || "content" === e && t > b ? "late_observation" : void 0;
                    if (i) {
                        "startup" === e && L("unknown", i), "deadline" === e && j("unknown", e, i), "content" === e && t > b && j("unknown", "deadline", i);
                        return
                    }
                    let a = "unknown",
                        u = performance.now();
                    try {
                        a = x ? "empty" : T && C && w < 64 ? function(e) {
                            if (null == e) return "empty";
                            if (!e.isConnected) return "unknown";
                            let t = performance.now(),
                                r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT),
                                n = 0;
                            for (let e = r.nextNode(); null != e; e = r.nextNode()) {
                                if (++n > 4096 || performance.now() - t > 8) return "unknown";
                                let r = e.nodeType === Node.TEXT_NODE && e.textContent?.replace(/[\u200B-\u200D\uFEFF]/g, "").trim(),
                                    o = e instanceof HTMLImageElement && e.complete && e.naturalWidth > 0;
                                if (!r && !o) continue;
                                let i = e instanceof Element ? e : e.parentElement;
                                if (!i || i.closest("[hidden]")) continue;
                                let a = document.createRange();
                                a.selectNodeContents(e);
                                let s = Array.from(r ? a.getClientRects() : i.getClientRects(), e => {
                                        let {
                                            left: t,
                                            right: r,
                                            top: n,
                                            bottom: o
                                        } = e;
                                        return {
                                            left: t,
                                            right: r,
                                            top: n,
                                            bottom: o
                                        }
                                    }),
                                    l = !0;
                                for (let e = i; null != e; e = e.parentElement) {
                                    if (performance.now() - t > 8) return "unknown";
                                    let r = getComputedStyle(e);
                                    if ("none" === r.display || "visible" !== r.visibility || "hidden" === r.contentVisibility || "0" === r.opacity) {
                                        l = !1;
                                        break
                                    }
                                    let n = "hidden" === r.overflowX || "clip" === r.overflowX,
                                        o = "hidden" === r.overflowY || "clip" === r.overflowY;
                                    if (n || o) {
                                        let t = e.getBoundingClientRect();
                                        s = s.map(e => ({
                                            left: n ? Math.max(e.left, t.left) : e.left,
                                            right: n ? Math.min(e.right, t.right) : e.right,
                                            top: o ? Math.max(e.top, t.top) : e.top,
                                            bottom: o ? Math.min(e.bottom, t.bottom) : e.bottom
                                        }))
                                    }
                                }
                                if (l && s.some(e => e.right > e.left && e.bottom > e.top)) return "present"
                            }
                            return e.querySelector("canvas, iframe, svg, video, input, textarea") ? "unknown" : "empty"
                        }(T) : "unknown"
                    } catch {
                        "startup" === e && L("unknown", "observer_error"), "deadline" === e && j("unknown", e, "observer_error");
                        return
                    } finally {
                        (w += performance.now() - u) >= 64 && (s?.(), s = void 0, l = void 0)
                    }
                    if ("startup" === e && ("empty" === a || k ? L("missed", "content_not_observed") : "present" !== a && L("unknown", "output_unobserved")), "present" === a) {
                        let e = performance.now();
                        if (e > b) return void j("unknown", "deadline", "late_observation");
                        j(E || M ? "usable_partial" : S ? "recovered" : "usable", "content", "content_present", e)
                    } else "deadline" === e && (k ? j("unrecovered", e, "host_failure") : !1 !== r ? j("unknown", e, r ? "streaming_unconfirmed" : "input_pending") : "empty" === a ? j("unrecovered", e, x ? "root_failure" : "empty_output") : j("unknown", e, w >= 64 ? "observer_budget" : "output_unobserved"))
                },
                $ = () => {
                    let e = T;
                    if (!e || !f || _ || !d || w >= 64) return;
                    let t = 0,
                        r = () => {
                            !t && d && !_ && w < 64 && (t = requestAnimationFrame(() => {
                                t = 0, P("content")
                            }))
                        };
                    l = r;
                    let n = new MutationObserver(r);
                    n.observe(e, {
                        childList: !0,
                        subtree: !0,
                        characterData: !0,
                        attributes: !0,
                        attributeFilter: ["style", "class", "hidden", "aria-hidden"]
                    });
                    let o = new ResizeObserver(r);
                    o.observe(e);
                    let i = ["load", "transitionend", "animationend"];
                    for (let t of i) e.addEventListener(t, r, !0);
                    document.addEventListener("visibilitychange", r), s = () => {
                        for (let a of (cancelAnimationFrame(t), n.disconnect(), o.disconnect(), i)) e.removeEventListener(a, r, !0);
                        document.removeEventListener("visibilitychange", r)
                    }, r()
                },
                D = () => {
                    c && d && (!f || h) && (f && (u = a()), f = !0, _ = !1, h = !1, n = void 0, w = 0, p && (m = 0), p && (S = x || M || E), g = null == r ? "unknown" : r ? "streaming" : "nonstreaming", b = (y = performance.now()) + 3e4, O("presentation_started", {}), i = setTimeout(() => P("startup"), 5e3), o = setTimeout(() => P("deadline"), 3e4), $(), P("content"))
                };
            return {
                diagnosticContext: () => ({
                    presentation_id: u,
                    presentation_settled: _
                }),
                recordDiagnosticReport: () => {
                    d && !_ && m++
                },
                registerFrameRecovery: (e, t) => {
                    if (!d || _) return;
                    let r = `${e.frameId}:${e.runnerId??""}`;
                    R.has(r) || R.size < 3 ? R.set(r, {
                        initial: e,
                        read: t
                    }) : F = "truncated"
                },
                setPresented: e => {
                    d !== e && ((d = e) ? D() : (p = !0, j("abandoned", "abandon", "deselected")))
                },
                attach: e => {
                    let t = ++v;
                    return c = !0, r = e, D(), () => {
                        queueMicrotask(() => {
                            t === v && (c = !1, j("abandoned", "abandon", "unmounted"))
                        })
                    }
                },
                updateStreaming: e => {
                    r = e
                },
                deferStreamingRuntimeFailure: e => !!f && !0 === r && !_ && (A.add(e), !0),
                observeRoot: e => {
                    s?.(), s = void 0, l = void 0, C = !1, T = e, $()
                },
                reportRootFailure: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    x = !0, C = !1, k ||= e, S = !0
                },
                reportTransientFailure: () => {
                    S = !0, M = !0
                },
                reportCommittedRoot: () => {
                    C = !0, x = !1, k = !1, M = !1, l?.()
                },
                reportOmittedChild: e => {
                    E = e, S ||= e
                },
                onPageHide: () => j("abandoned", "abandon", "page_exit")
            }
        }
        let v = "chatgpt.model_written_dil.v2.image";
        class g {
            componentType;
            metrics;
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
            constructor(e, t) {
                this.componentType = e, this.metrics = t
            }
            setSourceState(e) {
                e !== this.source && (this.pause(), "ready" !== e || this.hasReadySource || (this.hasReadySource = !0, this.remainingMs = 3e4), this.source = e, this.onVisibilityChange())
            }
            recordFallback() {
                this.fallbackUsed = !0
            }
            recordLoad(e) {
                this.setSourceState("ready"), this.finish(e)
            }
            start(e) {
                this.active = !0;
                let t = ++this.generation;
                return !this.hostDocument && (this.hostDocument = e, e.addEventListener("visibilitychange", this.onVisibilityChange), this.setFrame(this.frame), this.onVisibilityChange(), this.outcome && this.finish(this.outcome)), () => {
                    this.active = !1, queueMicrotask(() => {
                        this.active || this.generation !== t || this.finish((this.detachedVisibility ?? this.visibility) === "offscreen" ? "not_visible" : "canceled")
                    })
                }
            }
            setFrame = e => {
                this.pause(), this.detachedVisibility = e ? void 0 : this.visibility, this.visibility = "unknown", this.frame = e, this.observer?.disconnect(), this.observer = void 0;
                let t = e?.ownerDocument.defaultView;
                e && t && this.hostDocument && !this.emitted && "function" == typeof t.IntersectionObserver && (this.observer = new t.IntersectionObserver(t => {
                    this.frame === e && (this.pause(), this.visibility = t.some(e => e.isIntersecting && e.intersectionRect.width > 0 && e.intersectionRect.height > 0) ? "visible" : "offscreen", this.onVisibilityChange())
                }), this.observer.observe(e))
            };
            finish(e) {
                if (this.emitted || (this.outcome ??= e, !this.hostDocument)) return;
                this.emitted = !0, this.pause(), this.observer?.disconnect(), this.hostDocument.removeEventListener("visibilitychange", this.onVisibilityChange);
                let t = {
                    component_type: this.componentType,
                    renderer: "frame",
                    platform: "web",
                    outcome: this.outcome,
                    source_state: this.source,
                    fallback_used: String(this.fallbackUsed),
                    visibility: this.detachedVisibility ?? this.visibility
                };
                try {
                    this.metrics.count(`${v}.load_result`, t), this.metrics.hist(`${v}.load_duration_ms`, t, this.observedMs)
                } catch {}
            }
            onVisibilityChange = () => {
                this.hostDocument?.visibilityState !== "visible" || "visible" !== this.visibility ? this.pause() : this.emitted || void 0 !== this.resumedAt || (this.resumedAt = Date.now(), this.timer = setTimeout(this.expire, this.remainingMs))
            };
            pause() {
                if (void 0 !== this.timer && clearTimeout(this.timer), this.timer = void 0, void 0 !== this.resumedAt) {
                    let e = Math.max(0, Date.now() - this.resumedAt);
                    this.observedMs += e, this.remainingMs = Math.max(0, this.remainingMs - e), this.resumedAt = void 0
                }
            }
            expire = () => {
                this.finish("missing" === this.source ? "missing_source" : "blocked" === this.source ? "blocked" : "pending" === this.source ? "approval_pending" : "visible" === this.visibility ? "timeout" : "not_visible")
            }
        }

        function y(e, t, r, n, o, i, a) {
            try {
                var s;
                if ("image" !== e && "search-image" !== e || !o || !Number.isFinite(t) || !Number.isFinite(r) || t <= 0 || r <= 0) return;
                let l = o.innerWidth,
                    u = o.innerHeight,
                    c = {
                        component_type: e,
                        renderer: n,
                        os: a,
                        viewport_width_bucket: (s = l, !Number.isFinite(s) || s <= 0 ? "unknown" : s < 640 ? "lt640" : s < 768 ? "640_767" : s < 1024 ? "768_1023" : "ge1024"),
                        layout_unit: "css_px"
                    };
                for (let [e, n] of Object.entries({
                        rendered_width_layout_units: t,
                        rendered_height_layout_units: r,
                        rendered_area_layout_units2: t * r,
                        viewport_width_layout_units: l,
                        viewport_height_layout_units: u
                    })) Number.isFinite(n) && n > 0 && i.hist(`chatgpt.model_written_dil.v2.image.${e}`, c, n)
            } catch {}
        }
        let b = new Set(["as", "class", "className", "dangerouslySetInnerHTML", "style"]);

        function* w(e) {
            for (let t in "svg" !== e.type && (yield* e.children), e.props) Object.prototype.hasOwnProperty.call(e.props, t) && !b.has(t) && (yield e.props[t])
        }

        function* x(e) {
            for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (yield e[t])
        }

        function C() {
            return "u" < typeof performance ? Date.now() : performance.now()
        }

        function k(e) {
            let {
                onComposition: t,
                runIdle: r = S
            } = e, n = !1, o = !1, i = 0, a = !0, s = "frame", l = null, u = null, c = null, d = () => {
                i += 1, null != c && (clearTimeout(c), c = null)
            }, p = () => {
                if (d(), n || o || a || "frame" !== s || null == u || u.source !== l) return;
                let e = i;
                try {
                    c = setTimeout(() => {
                        c = null;
                        let s = () => n || o || a || i !== e;
                        try {
                            r(() => {
                                if (s() || null == u) return;
                                let {
                                    registeredTypes: e,
                                    snapshot: r
                                } = u, n = function(e, t, r) {
                                    let n = r.now ?? C,
                                        o = n(),
                                        i = [{
                                            iterator: [e][Symbol.iterator]()
                                        }],
                                        a = new Set,
                                        s = new Map,
                                        l = 0,
                                        u = 0;
                                    for (; i.length > 0;) {
                                        let e = i.at(-1)?.iterator.next();
                                        if (null == e || e.done) {
                                            let e = i.pop();
                                            e?.pathObject != null && a.delete(e.pathObject);
                                            continue
                                        }
                                        let d = e.value;
                                        if ((u += 1) > r.maxObjects || n() - o > r.maxMs) return {
                                            status: "budget_exceeded"
                                        };
                                        if (!(null == d || "object" != typeof d || a.has(d))) {
                                            var c;
                                            if (a.add(d), Array.isArray(d)) {
                                                i.push({
                                                    iterator: d.values(),
                                                    pathObject: d
                                                });
                                                continue
                                            }
                                            if (c = d, "string" == typeof c.type && null != c.props && "object" == typeof c.props && !Array.isArray(c.props) && Array.isArray(c.children)) {
                                                if (!t.has(d.type)) {
                                                    a.delete(d);
                                                    continue
                                                }
                                                s.set(d.type, (s.get(d.type) ?? 0) + 1), l += 1, i.push({
                                                    iterator: w(d),
                                                    pathObject: d
                                                });
                                                continue
                                            }
                                            i.push({
                                                iterator: x(d),
                                                pathObject: d
                                            })
                                        }
                                    }
                                    return {
                                        componentCounts: s,
                                        distinctComponentTypeCount: s.size,
                                        status: "complete",
                                        totalComponentCount: l
                                    }
                                }(r.tree, e, {
                                    maxMs: 4,
                                    maxObjects: 4096
                                });
                                if (!s()) {
                                    o = !0, u = null, l = null;
                                    try {
                                        t({
                                            ...n,
                                            renderer: "frame",
                                            snapshotVersion: r.version
                                        })
                                    } catch {}
                                }
                            }, {
                                minimumTimeRemainingMs: 4,
                                shouldCancel: s
                            }).catch(() => {})
                        } catch {}
                    }, 500)
                } catch {}
            };
            return {
                dispose: () => {
                    n = !0, d(), u = null, l = null
                },
                onRendererChange: e => {
                    n || o || s === e || (s = e, d(), u = null)
                },
                onSnapshot: (e, t, r) => {
                    n || o || "frame" !== s || (d(), e.version > 0 && null == e.error && (u = {
                        registeredTypes: t,
                        snapshot: e,
                        source: r
                    }), p())
                },
                onSourceChange: (e, t) => {
                    n || o || (l = e, u?.source === e && (u = {
                        ...u,
                        registeredTypes: t
                    }), p())
                },
                onStreamingChange: e => {
                    n || o || (a = e, p())
                }
            }
        }

        function S(e) {
            let {
                minimumTimeRemainingMs: t = 0,
                shouldCancel: r = () => !1
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Promise((n, o) => {
                let i = i => {
                        if (r()) return void n();
                        if (null != i && !i.didTimeout && i.timeRemaining() < t) return void a();
                        try {
                            e(), n()
                        } catch (e) {
                            o(e)
                        }
                    },
                    a = () => {
                        "requestIdleCallback" in window ? window.requestIdleCallback(i) : globalThis.setTimeout(() => i(), 0)
                    };
                a()
            })
        }

        function M(e) {
            if (null == e || "object" != typeof e || !("logging_metadata" in e)) return;
            let t = e.logging_metadata;
            if (null == t || "object" != typeof t || Array.isArray(t)) return;
            let r = {};
            for (let [e, n] of Object.entries(t)) "string" == typeof n && (r[e] = n);
            return Object.keys(r).length > 0 ? r : void 0
        }
    }),
    bFOP: (function(e, t, r) {
        r.d(t, {
            a: () => m,
            b: () => v.b
        });
        var n = r("ABep"),
            o = r("on57"),
            i = r("YLKE"),
            a = r("zd8w"),
            s = r("Cmnu"),
            l = r("BAKu"),
            u = r("We8q"),
            c = r("fZ4G"),
            d = r("EYJV"),
            p = r("DL3o"),
            h = r("vliF");
        let m = e => {
                let {
                    open: t,
                    onOpenChange: r,
                    showOnHover: o = !1,
                    hoverOpenDelay: l = 150,
                    children: c
                } = e, [d, p] = (0, a.useState)(!1), [m, f] = (0, a.useState)(!1), _ = (0, a.useRef)(null), [v, g] = (0, a.useState)(null), y = (0, a.useRef)(null), b = (0, a.useRef)(void 0), w = (0, a.useRef)(!1), x = (0, a.useRef)(!1), C = t ?? d, [k, S] = (0, a.useState)(!1);
                (0, s.g)(() => S(!1), k ? 500 : null);
                let M = (0, u.a)(r),
                    E = (0, u.a)(e => {
                        clearTimeout(b.current), C !== e && (e || (f(!1), o && w.current && _.current?.focus(), w.current = !1), M.current?.(e), p(e), o && S(e))
                    }),
                    T = (0, a.useCallback)(e => {
                        E.current(e)
                    }, [E]),
                    A = (0, a.useCallback)(() => {
                        b.current = setTimeout(() => T(!0), l)
                    }, [T, l]),
                    R = (0, a.useCallback)(() => {
                        clearTimeout(b.current)
                    }, []);
                (0, a.useEffect)(() => () => {
                    clearTimeout(b.current)
                }, []);
                let F = (0, a.useMemo)(() => ({
                    open: C,
                    setOpen: T,
                    shake: m,
                    setShake: f,
                    showOnHover: o,
                    temporarilyPreventClickToClose: k,
                    onTriggerEnter: A,
                    onTriggerLeave: R,
                    isPointerInTransitRef: x,
                    triggerRef: _,
                    triggerElement: v,
                    setTriggerElement: g,
                    contentRef: y,
                    hoverOpenFocusedWithTab: w
                }), [C, T, m, f, o, k, w, x, v, A, R]);
                return (0, n.jsx)(h.a, {
                    value: F,
                    children: (0, n.jsx)(i.f, {
                        open: C,
                        onOpenChange: T,
                        modal: !1,
                        children: c
                    })
                })
            },
            f = e => {
                let {
                    children: t,
                    "aria-label": r,
                    "aria-labelledby": a,
                    avoidCollisions: s,
                    width: l,
                    minWidth: u,
                    maxWidth: d,
                    side: p,
                    sideOffset: m = 8,
                    align: f,
                    alignOffset: _,
                    translucent: v,
                    className: g,
                    autoFocus: y = !0,
                    onCloseAutoFocus: b,
                    preventCloseOnFocusOutside: w = !1
                } = e, {
                    showOnHover: x,
                    shake: C,
                    contentRef: k
                } = (0, h.b)();
                return (0, n.jsx)(i.d, {
                    forceMount: !0,
                    ref: k,
                    "aria-label": r,
                    "aria-labelledby": a,
                    className: (0, o.b)("Popover-x1v5UD", g),
                    style: (0, c.e)({
                        "popover-width": l,
                        "popover-min-width": u,
                        "popover-max-width": d
                    }),
                    onCloseAutoFocus: b ?? (x ? c.d : void 0),
                    "data-animate": C ? "shake" : void 0,
                    "data-translucent": v ? "true" : void 0,
                    side: p,
                    sideOffset: m,
                    align: f,
                    alignOffset: _ ?? ("center" === f ? 0 : -5),
                    avoidCollisions: s ?? !0,
                    hideWhenDetached: !0,
                    collisionPadding: 20,
                    onFocusOutside: w ? c.d : void 0,
                    onOpenAutoFocus: e => {
                        e.preventDefault();
                        let t = k.current;
                        y && !x && t && !t.contains(document.activeElement) && t.focus({
                            preventScroll: !0
                        })
                    },
                    onEscapeKeyDown: c.d,
                    onKeyDown: e => {
                        let t = k.current;
                        if (t && e.target === t && "Tab" === e.key && e.shiftKey) {
                            e.preventDefault(), e.stopPropagation();
                            let r = (0, c.a)(t),
                                n = r[r.length - 1];
                            n?.focus()
                        }
                    },
                    children: t
                })
            },
            _ = e => {
                let {
                    setOpen: t,
                    triggerRef: r,
                    contentRef: o,
                    isPointerInTransitRef: i,
                    hoverOpenFocusedWithTab: s
                } = (0, h.b)(), [l, u] = (0, a.useState)(null), d = (0, a.useCallback)(() => {
                    u(null), i.current = !1
                }, [i]), p = (0, a.useCallback)((e, t) => {
                    u(((e, t) => {
                        let r, n = e.currentTarget;
                        if (!(n instanceof HTMLElement)) return [];
                        let o = {
                                x: e.clientX,
                                y: e.clientY
                            },
                            i = function(e, t) {
                                let r = Math.abs(t.top - e.y),
                                    n = Math.abs(t.bottom - e.y),
                                    o = Math.abs(t.right - e.x),
                                    i = Math.abs(t.left - e.x);
                                switch (Math.min(r, n, o, i)) {
                                    case i:
                                        return "left";
                                    case o:
                                        return "right";
                                    case r:
                                        return "top";
                                    case n:
                                        return "bottom";
                                    default:
                                        throw Error("unreachable")
                                }
                            }(o, n.getBoundingClientRect()),
                            a = function(e, t) {
                                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                                    n = [];
                                switch (t) {
                                    case "top":
                                        n.push({
                                            x: e.x - r,
                                            y: e.y + r
                                        }, {
                                            x: e.x + r,
                                            y: e.y + r
                                        });
                                        break;
                                    case "bottom":
                                        n.push({
                                            x: e.x - r,
                                            y: e.y - r
                                        }, {
                                            x: e.x + r,
                                            y: e.y - r
                                        });
                                        break;
                                    case "left":
                                        n.push({
                                            x: e.x + r,
                                            y: e.y - r
                                        }, {
                                            x: e.x + r,
                                            y: e.y + r
                                        });
                                        break;
                                    case "right":
                                        n.push({
                                            x: e.x - r,
                                            y: e.y - r
                                        }, {
                                            x: e.x - r,
                                            y: e.y + r
                                        })
                                }
                                return n
                            }(o, i),
                            s = function(e) {
                                let {
                                    top: t,
                                    right: r,
                                    bottom: n,
                                    left: o
                                } = e;
                                return [{
                                    x: o,
                                    y: t
                                }, {
                                    x: r,
                                    y: t
                                }, {
                                    x: r,
                                    y: n
                                }, {
                                    x: o,
                                    y: n
                                }]
                            }(t.getBoundingClientRect());
                        return (r = [...a, ...s].slice()).sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : 1 * !!(e.y > t.y)),
                            function(e) {
                                if (e.length <= 1) return e.slice();
                                let t = [];
                                for (let r of e) {
                                    for (; t.length >= 2;) {
                                        let e = t.at(-1),
                                            n = t.at(-2);
                                        if (e && n && (e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
                                        else break
                                    }
                                    t.push(r)
                                }
                                t.pop();
                                let r = [];
                                for (let t of [...e].reverse()) {
                                    for (; r.length >= 2;) {
                                        let e = r.at(-1),
                                            n = r.at(-2);
                                        if (e && n && (e.x - n.x) * (t.y - n.y) >= (e.y - n.y) * (t.x - n.x)) r.pop();
                                        else break
                                    }
                                    r.push(t)
                                }
                                return (r.pop(), 1 === t.length && 1 === r.length && t[0]?.x === r[0]?.x && t[0]?.y === r[0]?.y) ? t : t.concat(r)
                            }(r)
                    })(e, t)), i.current = !0
                }, [i]);
                return (0, a.useEffect)(() => () => d(), [d]), (0, a.useEffect)(() => {
                    let e = r.current,
                        t = o.current;
                    if (!e || !t) return;
                    let n = e => p(e, t),
                        i = t => p(t, e);
                    return e.addEventListener("pointerleave", n), t.addEventListener("pointerleave", i), () => {
                        e.removeEventListener("pointerleave", n), t.removeEventListener("pointerleave", i)
                    }
                }, [o, r, p, d]), (0, a.useEffect)(() => {
                    if (!l) return;
                    let e = e => {
                        let n = r.current,
                            i = o.current,
                            a = e.target;
                        if (!(a instanceof Element)) return;
                        let s = {
                                x: e.clientX,
                                y: e.clientY
                            },
                            u = n?.contains(a) || i?.contains(a),
                            c = ! function(e, t) {
                                let {
                                    x: r,
                                    y: n
                                } = e, o = !1, i = t.at(-1);
                                for (let e of t) i && e.y > n != i.y > n && r < (i.x - e.x) * (n - e.y) / (i.y - e.y) + e.x && (o = !o), i = e;
                                return o
                            }(s, l),
                            p = a.hasAttribute("aria-haspopup");
                        u ? d() : (c || p) && (d(), t(!1))
                    };
                    return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
                }, [l, t, d, r, o]), (0, a.useEffect)(() => {
                    let e = t => {
                        if (o.current && "Tab" === t.key && !t.shiftKey) {
                            let [r] = (0, c.a)(o.current);
                            r && (t.preventDefault(), r.focus(), s.current = !0, document.removeEventListener("keydown", e))
                        }
                    };
                    return document.addEventListener("keydown", e), () => {
                        document.removeEventListener("keydown", e)
                    }
                }, [o, s]), (0, n.jsx)(f, {
                    ...e
                })
            };
        m.Trigger = e => {
            let {
                children: t,
                onPointerDown: r,
                onClick: o
            } = e, {
                setOpen: s,
                showOnHover: l,
                temporarilyPreventClickToClose: u,
                onTriggerEnter: c,
                onTriggerLeave: d,
                isPointerInTransitRef: p,
                triggerRef: m,
                setTriggerElement: f,
                contentRef: _
            } = (0, h.b)(), v = (0, a.useRef)(!1), g = (0, a.useCallback)(e => {
                m.current = e, f(e)
            }, [m, f]), y = e => {
                "a" !== e.currentTarget.nodeName.toLocaleLowerCase() && u && (e.preventDefault(), e.stopPropagation())
            };
            return (0, n.jsx)(i.g, {
                asChild: !0,
                ref: g,
                onPointerDown: e => {
                    y(e), r?.(e)
                },
                onClick: e => {
                    y(e), o?.(e)
                },
                onPointerMove: l ? e => {
                    "touch" !== e.pointerType && (v.current || p.current || (c(), v.current = !0))
                } : void 0,
                onPointerLeave: l ? () => {
                    v.current && (d(), v.current = !1)
                } : void 0,
                onFocus: l ? () => s(!0) : void 0,
                onBlur: l ? () => {
                    setTimeout(() => {
                        _.current?.contains(document.activeElement) || s(!1)
                    }, 50)
                } : void 0,
                children: t
            })
        }, m.Content = e => {
            let {
                open: t,
                showOnHover: r,
                setOpen: o,
                triggerElement: a
            } = (0, h.b)(), s = (0, d.b)() ?? a?.closest('[role="dialog"]') ?? void 0;
            return (0, l.b)(t, () => {
                o(!1)
            }), (0, n.jsx)(i.e, {
                forceMount: !0,
                container: s,
                children: (0, n.jsx)(p.b, {
                    enterDuration: 600,
                    exitDuration: 300,
                    className: "Transition-TpKe3L",
                    children: t && (r ? (0, n.jsx)(_, {
                        ...e
                    }, "popover-hover") : (0, n.jsx)(f, {
                        ...e
                    }, "popover"))
                })
            })
        };
        var v = r("U8Jh")
    }),
    vliF: (function(e, t, r) {
        var n = r("zd8w");
        let o = (0, n.createContext)(null);
        r.d(t, {}, {
            a: o,
            b: () => {
                let e = (0, n.use)(o);
                if (!e) throw Error("Popover components must be wrapped in <Popover />");
                return e
            }
        })
    }),
    U8Jh: (function(e, t, r) {
        var n = r("zd8w"),
            o = r("v7qY"),
            i = r("fZ4G"),
            a = r("vliF");
        let s = () => {
            let {
                setOpen: e
            } = (0, a.b)();
            return (0, n.useCallback)(() => e(!1), [e])
        };
        r.d(t, {}, {
            a: s,
            b: () => {
                let e = (() => {
                    let {
                        setShake: e
                    } = (0, a.b)();
                    return (0, n.useCallback)(() => {
                        (0, o.flushSync)(() => {
                            e(!1)
                        }), (0, i.j)(() => e(!0))
                    }, [e])
                })();
                return {
                    close: s(),
                    shake: e
                }
            }
        })
    }),
    BAmR: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "location-arrow-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-location-arrow-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .095947,
                    y: .020508,
                    overflows: !1
                },
                composite: {
                    x: .095947,
                    y: .020508,
                    overflows: !1
                }
            }
        }
    }),
    DmTj: (function(e, t, r) {
        let n = (0, r("iJY0").a)({
            name: "building-light-12",
            canvas: {
                width: 12,
                height: 12,
                viewBox: "0 0 12 12",
                frame: {
                    x: 0,
                    y: 0,
                    width: 12,
                    height: 12
                },
                inkBounds: {
                    x: .599609,
                    y: 1.599609,
                    width: 10.800781,
                    height: 8.800781
                },
                visualBounds: {
                    x: .599609,
                    y: 1.599609,
                    width: 10.800781,
                    height: 8.800781
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: .599609,
                    y: 1.599609,
                    width: 10.800781,
                    height: 8.800781
                },
                center: {
                    x: 6,
                    y: 6
                },
                insets: {
                    top: 1.599609,
                    right: .59961,
                    bottom: 1.59961,
                    left: .599609
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 6,
                        y: 6
                    },
                    foreground: {
                        x: 6,
                        y: 6
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M9.59961 5C9.59961 4.66863 9.33137 4.40039 9 4.40039H7.40039V9.59961H9.59961V5ZM6.59961 3C6.59961 2.66863 6.33137 2.40039 6 2.40039H3C2.66863 2.40039 2.40039 2.66863 2.40039 3V9.59961H4.09961V8.5C4.09961 8.27909 4.27909 8.09961 4.5 8.09961C4.72091 8.09961 4.90039 8.27909 4.90039 8.5V9.59961H6.59961V3ZM7.40039 3.59961H9C9.7732 3.59961 10.4004 4.2268 10.4004 5V9.59961H11C11.2209 9.59961 11.4004 9.77909 11.4004 10C11.4004 10.2209 11.2209 10.4004 11 10.4004H1C0.779086 10.4004 0.599609 10.2209 0.599609 10C0.599609 9.77909 0.779086 9.59961 1 9.59961H1.59961V3C1.59961 2.2268 2.2268 1.59961 3 1.59961H6C6.7732 1.59961 7.40039 2.2268 7.40039 3V3.59961Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: n
        })
    }),
    hnKH: (function(e, t, r) {
        let n = (0, r("iJY0").a)({
            name: "pin-location-light-12",
            canvas: {
                width: 12,
                height: 12,
                viewBox: "0 0 12 12",
                frame: {
                    x: 0,
                    y: 0,
                    width: 12,
                    height: 12
                },
                inkBounds: {
                    x: 1.099609,
                    y: 1.099609,
                    width: 9.800781,
                    height: 9.799805
                },
                visualBounds: {
                    x: 1.099609,
                    y: 1.099609,
                    width: 9.800781,
                    height: 9.799805
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.099609,
                    y: 1.099609,
                    width: 9.800781,
                    height: 9.799805
                },
                center: {
                    x: 6,
                    y: 5.999512
                },
                insets: {
                    top: 1.099609,
                    right: 1.09961,
                    bottom: 1.100586,
                    left: 1.099609
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 6,
                        y: 5.999512
                    },
                    foreground: {
                        x: 6,
                        y: 5.999512
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M8.07617 6.78906C8.8447 6.93761 9.52002 7.17067 10.0146 7.47461C10.4925 7.76835 10.9003 8.19408 10.9004 8.75C10.9003 9.1412 10.6942 9.47064 10.417 9.72559C10.14 9.9802 9.76135 10.1915 9.32715 10.3604C8.45593 10.6992 7.27935 10.8994 6 10.8994C4.72066 10.8994 3.54407 10.6992 2.67285 10.3604C2.23865 10.1915 1.85999 9.9802 1.58301 9.72559C1.30577 9.47064 1.0997 9.1412 1.09961 8.75C1.09974 8.19409 1.5075 7.76835 1.98535 7.47461C2.47998 7.17067 3.1553 6.93761 3.92383 6.78906C4.14053 6.74721 4.35042 6.8889 4.39258 7.10547C4.43447 7.32226 4.29288 7.53215 4.07617 7.57422C3.36362 7.71192 2.78913 7.91979 2.4043 8.15625C2.00292 8.40298 1.90053 8.61892 1.90039 8.75C1.90048 8.84183 1.94629 8.97324 2.12402 9.13672C2.30239 9.30072 2.583 9.4665 2.96289 9.61426C3.72035 9.90882 4.79406 10.0996 6 10.0996C7.20595 10.0996 8.27965 9.90882 9.03711 9.61426C9.417 9.4665 9.69761 9.30072 9.87598 9.13672C10.0537 8.97324 10.0995 8.84183 10.0996 8.75C10.0995 8.61892 9.99708 8.40298 9.5957 8.15625C9.21087 7.91979 8.63638 7.71192 7.92383 7.57422C7.70712 7.53215 7.56553 7.32226 7.60742 7.10547C7.64958 6.88889 7.85947 6.74721 8.07617 6.78906Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 1.09961C7.04934 1.09961 7.90039 1.95066 7.90039 3C7.90039 3.91187 7.25738 4.67241 6.40039 4.85645V8.5C6.40039 8.72091 6.22091 8.90039 6 8.90039C5.77909 8.90039 5.59961 8.72091 5.59961 8.5V4.85645C4.74262 4.67241 4.09961 3.91187 4.09961 3C4.09961 1.95066 4.95066 1.09961 6 1.09961ZM6 1.90039C5.39249 1.90039 4.90039 2.39249 4.90039 3C4.90039 3.60751 5.39249 4.09961 6 4.09961C6.60751 4.09961 7.09961 3.60751 7.09961 3C7.09961 2.39249 6.60751 1.90039 6 1.90039Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: n
        })
    }),
    tszw: (function(e, t, r) {
        let n = (0, r("iJY0").a)({
            name: "star-fill-regular-12",
            canvas: {
                width: 12,
                height: 12,
                viewBox: "0 0 12 12",
                frame: {
                    x: 0,
                    y: 0,
                    width: 12,
                    height: 12
                },
                inkBounds: {
                    x: .311462,
                    y: .492554,
                    width: 11.376221,
                    height: 10.898071
                },
                visualBounds: {
                    x: .311462,
                    y: .492554,
                    width: 11.376221,
                    height: 10.898071
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: .311462,
                    y: .492554,
                    width: 11.376221,
                    height: 10.898071
                },
                center: {
                    x: 5.999572,
                    y: 5.94159
                },
                insets: {
                    top: .492554,
                    right: .312317,
                    bottom: .609375,
                    left: .311462
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 5.999572,
                        y: 5.94159
                    },
                    foreground: {
                        x: 5.999572,
                        y: 5.94159
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M5.36559 0.80407C5.68213 0.388703 6.31758 0.388727 6.63414 0.80407L6.69664 0.899774L8.14781 3.47399L11.0453 4.05895C11.6562 4.18222 11.8977 4.92632 11.4759 5.38513L9.47496 7.55993L9.81481 10.4974C9.88625 11.1165 9.25352 11.5761 8.68688 11.3168L5.99938 10.0853L3.31188 11.3168C2.74534 11.5757 2.11256 11.1163 2.18395 10.4974L2.52379 7.56091L0.522814 5.38513C0.101618 4.92646 0.343211 4.18259 0.953478 4.05895L3.84996 3.47399L5.30309 0.899774L5.36559 0.80407Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: n
        })
    }),
    FER9: (function(e, t) {
        let r = String.raw,
            n = r`\p{Emoji}(?:\p{EMod}|[\u{E0020}-\u{E007E}]+\u{E007F}|\uFE0F?\u20E3?)`;
        t.a = () => RegExp(r`\p{RI}{2}|(?![#*\d](?!\uFE0F?\u20E3))${n}(?:\u200D${n})*`, "gu")
    }),
    EbvC: (function(e, t, r) {
        let n = (e, t) => t.some(t => t instanceof RegExp ? t.test(e) : t === e),
            o = new Set(["https:", "http:", "file:"]);
        r.d(t, {}, {
            a: function(e, t) {
                if ("string" != typeof(t = {
                        defaultProtocol: "http",
                        normalizeProtocol: !0,
                        forceHttp: !1,
                        forceHttps: !1,
                        stripAuthentication: !0,
                        stripHash: !1,
                        stripTextFragment: !0,
                        stripWWW: !0,
                        removeQueryParameters: [/^utm_\w+/i],
                        removeTrailingSlash: !0,
                        removeSingleSlash: !0,
                        removeDirectoryIndex: !1,
                        removeExplicitPort: !1,
                        sortQueryParameters: !0,
                        ...t
                    }).defaultProtocol || t.defaultProtocol.endsWith(":") || (t.defaultProtocol = `${t.defaultProtocol}:`), e = e.trim(), /^data:/i.test(e)) return ((e, {
                    stripHash: t
                }) => {
                    let r = /^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(e);
                    if (!r) throw Error(`Invalid URL: ${e}`);
                    let {
                        type: n,
                        data: o,
                        hash: i
                    } = r.groups, a = n.split(";");
                    i = t ? "" : i;
                    let s = !1;
                    "base64" === a[a.length - 1] && (a.pop(), s = !0);
                    let l = a.shift()?.toLowerCase() ?? "",
                        u = [...a.map(e => {
                            let [t, r = ""] = e.split("=").map(e => e.trim());
                            return "charset" === t && "us-ascii" === (r = r.toLowerCase()) ? "" : `${t}${r?`=${r}`:""}`
                        }).filter(Boolean)];
                    return s && u.push("base64"), (u.length > 0 || l && "text/plain" !== l) && u.unshift(l), `data:${u.join(";")},${s?o.trim():o}${i?`#${i}`:""}`
                })(e, t);
                if ((e => {
                        try {
                            let {
                                protocol: t
                            } = new URL(e);
                            return t.endsWith(":") && !t.includes(".") && !o.has(t)
                        } catch {
                            return !1
                        }
                    })(e)) return e;
                let r = e.startsWith("//");
                !r && /^\.*\//.test(e) || (e = e.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, t.defaultProtocol));
                let i = new URL(e);
                if (t.forceHttp && t.forceHttps) throw Error("The `forceHttp` and `forceHttps` options cannot be used together");
                if (t.forceHttp && "https:" === i.protocol && (i.protocol = "http:"), t.forceHttps && "http:" === i.protocol && (i.protocol = "https:"), t.stripAuthentication && (i.username = "", i.password = ""), t.stripHash ? i.hash = "" : t.stripTextFragment && (i.hash = i.hash.replace(/#?:~:text.*?$/i, "")), i.pathname) {
                    let e = /\b[a-z][a-z\d+\-.]{1,50}:\/\//g,
                        t = 0,
                        r = "";
                    for (;;) {
                        let n = e.exec(i.pathname);
                        if (!n) break;
                        let o = n[0],
                            a = n.index;
                        r += i.pathname.slice(t, a).replace(/\/{2,}/g, "/"), r += o, t = a + o.length
                    }
                    r += i.pathname.slice(t, i.pathname.length).replace(/\/{2,}/g, "/"), i.pathname = r
                }
                if (i.pathname) try {
                    i.pathname = decodeURI(i.pathname).replace(/\\/g, "%5C")
                } catch {}
                if (!0 === t.removeDirectoryIndex && (t.removeDirectoryIndex = [/^index\.[a-z]+$/]), Array.isArray(t.removeDirectoryIndex) && t.removeDirectoryIndex.length > 0) {
                    let e = i.pathname.split("/");
                    n(e[e.length - 1], t.removeDirectoryIndex) && (i.pathname = (e = e.slice(0, -1)).slice(1).join("/") + "/")
                }
                if (i.hostname && (i.hostname = i.hostname.replace(/\.$/, ""), t.stripWWW && /^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(i.hostname) && (i.hostname = i.hostname.replace(/^www\./, ""))), Array.isArray(t.removeQueryParameters))
                    for (let e of [...i.searchParams.keys()]) n(e, t.removeQueryParameters) && i.searchParams.delete(e);
                if (Array.isArray(t.keepQueryParameters) || !0 !== t.removeQueryParameters || (i.search = ""), Array.isArray(t.keepQueryParameters) && t.keepQueryParameters.length > 0)
                    for (let e of [...i.searchParams.keys()]) n(e, t.keepQueryParameters) || i.searchParams.delete(e);
                if (t.sortQueryParameters) {
                    i.searchParams.sort();
                    try {
                        i.search = decodeURIComponent(i.search)
                    } catch {}
                }
                t.removeTrailingSlash && (i.pathname = i.pathname.replace(/\/$/, "")), t.removeExplicitPort && i.port && (i.port = "");
                let a = e;
                return e = i.toString(), t.removeSingleSlash || "/" !== i.pathname || a.endsWith("/") || "" !== i.hash || (e = e.replace(/\/$/, "")), (t.removeTrailingSlash || "/" === i.pathname) && "" === i.hash && t.removeSingleSlash && (e = e.replace(/\/$/, "")), r && !t.normalizeProtocol && (e = e.replace(/^http:\/\//, "//")), t.stripProtocol && (e = e.replace(/^(?:https?:)?\/\//, "")), e
            }
        })
    })
};