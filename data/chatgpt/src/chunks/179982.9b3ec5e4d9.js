export const __rspack_esm_id = 179982;
export const __rspack_esm_ids = [179982];
export const __webpack_modules__ = {
    HJNo: (function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            (0, o.default)(e), (t = (0, i.default)(t, a)).allow_trailing_dot && "." === e[e.length - 1] && (e = e.substring(0, e.length - 1)), !0 === t.allow_wildcard && 0 === e.indexOf("*.") && (e = e.substring(2));
            var r = e.split("."),
                n = r[r.length - 1];
            return !(t.require_tld && (r.length < 2 || !t.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(n) || /\s/.test(n))) && !(!t.allow_numeric_tld && /^\d+$/.test(n)) && r.every(function(e) {
                return !(e.length > 63 && !t.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(e) || /[\uff01-\uff5e]/.test(e) || /^-|-$/.test(e) || !t.allow_underscores && /_/.test(e))
            })
        };
        var o = n(r("NgaJ")),
            i = n(r("Y4hk"));

        function n(e) {
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
            (0, i.default)(t);
            var o = ("object" === n(r) ? r.version : arguments[1]) || "";
            return o ? "4" === o.toString() ? l.test(t) : "6" === o.toString() && u.test(t) : e(t, {
                version: 4
            }) || e(t, {
                version: 6
            })
        };
        var o, i = (o = r("NgaJ")) && o.__esModule ? o : {
            default: o
        };

        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var a = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
            s = "(".concat(a, "[.]){3}").concat(a),
            l = new RegExp("^".concat(s, "$")),
            c = "(?:[0-9a-fA-F]{1,4})",
            u = RegExp("^(" + "(?:".concat(c, ":){7}(?:").concat(c, "|:)|") + "(?:".concat(c, ":){6}(?:").concat(s, "|:").concat(c, "|:)|") + "(?:".concat(c, ":){5}(?::").concat(s, "|(:").concat(c, "){1,2}|:)|") + "(?:".concat(c, ":){4}(?:(:").concat(c, "){0,1}:").concat(s, "|(:").concat(c, "){1,3}|:)|") + "(?:".concat(c, ":){3}(?:(:").concat(c, "){0,2}:").concat(s, "|(:").concat(c, "){1,4}|:)|") + "(?:".concat(c, ":){2}(?:(:").concat(c, "){0,3}:").concat(s, "|(:").concat(c, "){1,5}|:)|") + "(?:".concat(c, ":){1}(?:(:").concat(c, "){0,4}:").concat(s, "|(:").concat(c, "){1,6}|:)|") + "(?::((?::".concat(c, "){0,5}:").concat(s, "|(?::").concat(c, "){1,7}|:))") + ")(%[0-9a-zA-Z.]{1,})?$");
        e.exports = t.default, e.exports.default = t.default
    }),
    Tv1c: (function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            if ((0, o.default)(e), !e || /[\s<>]/.test(e) || 0 === e.indexOf("mailto:") || (t = (0, l.default)(t, d)).validate_length && e.length > t.max_allowed_length || !t.allow_fragments && (0, n.default)(e, "#") || !t.allow_query_components && ((0, n.default)(e, "?") || (0, n.default)(e, "&"))) return !1;
            var r, c, p, m, f, _, g, v, y = (e = (g = (e = (g = e.split("#")).shift()).split("?")).shift()).match(/^([a-z][a-z0-9+\-.]*):/i),
                w = !1,
                b = function(o) {
                    return w = !0, r = o.toLowerCase(), (!t.require_valid_protocol || -1 !== t.protocols.indexOf(r)) && e.substring(y[0].length)
                };
            if (y) {
                var x = y[1],
                    k = e.substring(y[0].length);
                if ("//" === k.slice(0, 2)) {
                    if (!1 === (e = b(x))) return !1
                } else {
                    var C = k.indexOf("/"),
                        S = -1 === C ? k : k.substring(0, C),
                        M = S.indexOf("@");
                    if (-1 !== M) {
                        var T = S.substring(0, M),
                            F = /^[a-zA-Z0-9\-_.%:]*$/.test(T),
                            A = /%[0-9a-fA-F]{2}/.test(T);
                        if (F && !A) {
                            if (t.require_protocol) return !1
                        } else if (!1 === (e = b(x))) return !1
                    } else if (/^[0-9]/.test(k)) {
                        if (t.require_protocol) return !1
                    } else if (!1 === (e = b(x))) return !1
                }
            } else if (t.require_protocol) return !1;
            if ("//" === e.slice(0, 2)) {
                if (!w && !t.allow_protocol_relative_urls) return !1;
                e = e.slice(2)
            }
            if ("" === e) return !1;
            if ("" === (e = (g = e.split("/")).shift()) && !t.require_host) return !0;
            if ((g = e.split("@")).length > 1) {
                if (t.disallow_auth || "" === g[0] || (c = g.shift()).indexOf(":") >= 0 && c.split(":").length > 2) return !1;
                var E, R = function(e) {
                        if (Array.isArray(e)) return e
                    }(E = c.split(":")) || function(e) {
                        var t = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != t) {
                            var r, o, i, n, a = [],
                                s = !0,
                                l = !1;
                            try {
                                i = (t = t.call(e)).next, !1;
                                for (; !(s = (r = i.call(t)).done) && (a.push(r.value), 2 !== a.length); s = !0);
                            } catch (e) {
                                l = !0, o = e
                            } finally {
                                try {
                                    if (!s && null != t.return && (n = t.return(), Object(n) !== n)) return
                                } finally {
                                    if (l) throw o
                                }
                            }
                            return a
                        }
                    }(E) || function(e) {
                        if (e) {
                            if ("string" == typeof e) return u(e, 2);
                            var t = ({}).toString.call(e).slice(8, -1);
                            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? u(e, 2) : void 0
                        }
                    }(E) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(),
                    O = R[0],
                    $ = R[1];
                if ("" === O && "" === $) return !1
            }
            m = g.join("@"), _ = null, v = null;
            var j = m.match(h);
            if (j ? (p = "", v = j[1], _ = j[2] || null) : (p = (g = m.split(":")).shift(), g.length && (_ = g.join(":"))), null !== _ && _.length > 0) {
                if (f = parseInt(_, 10), !/^[0-9]+$/.test(_) || f <= 0 || f > 65535) return !1
            } else if (t.require_port) return !1;
            return t.host_whitelist ? (0, i.default)(p, t.host_whitelist) : "" === p && !t.require_host || (!!(0, s.default)(p) || !!(0, a.default)(p, t) || !!v && !!(0, s.default)(v, 6)) && (p = p || v, !(t.host_blacklist && (0, i.default)(p, t.host_blacklist)))
        };
        var o = c(r("NgaJ")),
            i = c(r("bPnx")),
            n = c(r("skvE")),
            a = c(r("HJNo")),
            s = c(r("BMmD")),
            l = c(r("Y4hk"));

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, o = Array(t); r < t; r++) o[r] = e[r];
            return o
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
            h = /^\[([^\]]+)\](?::([0-9]+))?$/;
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
                var o = t[r];
                if (e === o || "[object RegExp]" === Object.prototype.toString.call(o) && o.test(e)) return !0
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
    cDSo: (function(e, t, r) {
        r.d(t, {
            a: () => v,
            b: () => 32768,
            c: () => x,
            d: () => u,
            e: () => _,
            f: () => y,
            g: () => C,
            h: () => n
        });
        var o = r("NHPR");
        let i = new TextEncoder;

        function n(e) {
            return i.encode(JSON.stringify(e)).byteLength
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

        function c(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, o.c)(t),
                i = "unavailable" === r.coverage ? t.records : r.records,
                n = "complete" === r.coverage || "unavailable" === r.coverage && !t.truncated && 0 === t.dropped,
                a = t.runnerId,
                s = i.filter(e => e.runnerId === a);
            if ("frame_timeout" === e) {
                if (i.some(e => "module_load" === e.operation && "runner_module_script_error" === e.reason)) return "runner_module_script_error";
                if (i.some(e => "iframe_resource" === e.operation && null != e.httpStatus && e.httpStatus >= 400)) return "iframe_http_error";
                if (n && i.some(e => "observer_bootstrap" === e.operation) && !i.some(e => "module_entry" === e.operation)) return "module_entry_unobserved";
                if (n && i.some(e => "iframe_load" === e.operation) && !i.some(e => "observer_bootstrap" === e.operation)) return "iframe_loaded_bootstrap_unobserved";
                if (n && i.some(e => "iframe_create" === e.operation && "returned" === e.phase) && !i.some(e => "iframe_load" === e.operation)) return "iframe_load_unobserved"
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
                let o = s.filter(e => "runner_create" === e.operation && "received" === e.phase && null == e.hostReceivedAtMs);
                if (o.some(e => "worker" === e.realm)) return "worker_receipt_time_unavailable";
                if (o.some(e => "iframe" === e.realm)) return "iframe_receipt_time_unavailable";
                if ("frame_disposed" === t.postTimeoutCoverage) return "frame_disposed";
                if ("observation_interrupted" === t.postTimeoutCoverage || "window_shortened" === t.postTimeoutCoverage) return "observation_interrupted";
                let i = !t.truncated && 0 === t.dropped || s.some(t => "host" === t.realm && "frame_probe" === t.operation && "resolved" === t.phase && null != e && t.localTimeMs >= e.localTimeMs);
                if (e && n && i && t.observedRealms.includes("iframe")) {
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

        function u(e) {
            let t, r, i, s, u, {
                    metrics: h,
                    diagnosticsExpected: m = !1,
                    startupReporting: f,
                    presentation: _
                } = e,
                g = a(),
                v = new d(h, g),
                y = 0,
                w = !1,
                b = !1,
                x = !1,
                k = new Set,
                C = new Set,
                S = new Set,
                M = function(e) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "first_snapshot_success" === e ? "snapshot_effect" : "failure_observed";
                    if (null == t || !f) return;
                    let a = "first_snapshot_success" === e;
                    if (a) {
                        if ("first_snapshot_success" !== r || w || (w = !0, Math.random() >= .01)) return
                    } else {
                        let e = t.failureId ?? "host_error";
                        if ("post_timeout" === i) {
                            if (!C.has(e) || S.has(e)) return;
                            S.add(e)
                        } else {
                            if (k.has(e) || k.size >= 3) return;
                            k.add(e)
                        }
                    }
                    try {
                        if (!f.canPublish(e, i)) return;
                        let s = (0, o.b)(t, "render_result", "decision", {
                                reason: e
                            }),
                            l = (0, o.c)(s),
                            u = {
                                ..._?.diagnosticContext(),
                                render_attempt_id: g,
                                failure_id: s.failureId,
                                failure_boundary: a ? "unknown" : c(e, s, l),
                                summary_coverage: l.coverage,
                                observation_window_ms: s.postTimeoutWindowMs,
                                observation_elapsed_ms: s.postTimeoutElapsedMs,
                                observation_sample_rate: s.postTimeoutSampleRate,
                                result: e,
                                initial_result: r,
                                after_initial_success: !a && "first_snapshot_success" === r,
                                report_cutoff: i,
                                diagnostics: s
                            },
                            d = function(e) {
                                let {
                                    diagnostics: t,
                                    ...r
                                } = e, o = e => n(JSON.stringify(e)) - 2, i = t.records.map(o), a = t.openOperations.map(o), s = new Set, l = new Set, c = n({
                                    ...r,
                                    diagnostics_json: JSON.stringify({
                                        ...t,
                                        records: [],
                                        openOperations: [],
                                        dropped: t.dropped + i.length + a.length,
                                        truncated: !0
                                    })
                                }) + 1, u = (e, t, r) => {
                                    let o = t[e];
                                    if (void 0 === o || r.has(e)) return;
                                    let i = o + +(0 !== r.size);
                                    c + i <= 32768 && (r.add(e), c += i)
                                };
                                u(t.records.findIndex(e => null != e.fault), i, s);
                                for (let e = 0; e < a.length; e++) u(e, a, l);
                                for (let e = 0; e < Math.min(8, i.length); e++) u(e, i, s);
                                for (let e = i.length - 1; e >= 0; e--) u(e, i, s);
                                let d = i.length + a.length - s.size - l.size;
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
                            }(u);
                        if (!f.publish("DIL startup diagnostics", d, a)) return;
                        if (_?.recordDiagnosticReport(), !a) {
                            let e = t.failureId ?? "host_error";
                            "post_timeout" !== i && C.add(e)
                        }
                    } catch {
                        f.recordSuppression(e, i, "observer_error")
                    }
                },
                T = () => {
                    if (b || !r || "first_snapshot_success" === r || "unknown" === r || "abandoned" === r || !s && !m) return;
                    b = !0, u && clearTimeout(u);
                    let e = "unknown",
                        t = "unavailable";
                    try {
                        if (s) {
                            let i = (0, o.c)(s);
                            t = i.coverage, e = c(r, s, i)
                        }
                    } catch {}
                    try {
                        p(h, "startup.failure_boundary", {
                            result: r,
                            last_observed_boundary: e,
                            summary_coverage: t,
                            observation_window: "worker_timeout" === r ? s?.postTimeoutWindowMs === 1e4 ? "extended" : "short" : "none",
                            observation_status: "worker_timeout" === r ? s?.postTimeoutCoverage ?? "unavailable" : "not_applicable"
                        })
                    } catch {}
                },
                F = e => {
                    let o = void 0 === r;
                    r ??= e, v.finishRender(e), "unknown" !== e && "abandoned" !== e && (M(e), o && "first_snapshot_success" !== e && (i = t?.failureId, s = t, "worker_timeout" === e && (s || m) ? u = setTimeout(T, Math.min(1e4, Math.max(1e3, s?.postTimeoutWindowMs ?? 1e3)) + 500) : T()))
                },
                A = () => v.beginRenderAttempt(),
                E = e => {
                    A(), v.recordFailureStage(e), F(e)
                },
                R = e => {
                    A(), v.recordFailureStage(e), "runtime_error" === e && void 0 === r && (x ||= _?.deferStreamingRuntimeFailure(t => {
                        void 0 === r && F("unrecovered" === t ? e : "unknown" === t || "abandoned" === t ? t : "first_snapshot_success")
                    }) ?? !1) || F(e)
                };
            return {
                beginRenderAttempt: A,
                onPreparationEnd: e => {
                    let t = {
                        outcome: e.outcome,
                        readiness: e.readiness
                    };
                    p(h, "preparation.result", t), null != e.readyLeadMs && h.hist(`${l}.preparation.ready_before_input_ms`, t, e.readyLeadMs)
                },
                onDiagnostics: (e, o) => {
                    t = e;
                    let n = e.preReadyFrameRecovery;
                    n && _?.registerFrameRecovery(n, o), e.postTimeout && "worker_timeout" === r && e.failureId === i && (s = e, T(), M("worker_timeout", "post_timeout"))
                },
                onActionResult: (e, t) => {
                    p(h, "action.result", {
                        action_type: e,
                        result: t
                    })
                },
                onFallbackResult: (e, t) => {
                    A(), v.emitFallback(e, t ?? v.currentFailureStage())
                },
                onTerminalFailure: e => "runtime_error" === e ? R(e) : E(e),
                onHostRenderFailure: e => {
                    try {
                        t && (t = (0, o.b)(t, "host_error", "threw", {
                            error: e
                        }))
                    } catch {}
                    E("host_error")
                },
                onInitialRenderCommit: () => {
                    A(), F("first_snapshot_success")
                },
                onComposition: e => {
                    v.emitComposition(e)
                },
                onLifecycleEvent: e => {
                    "failure" === e.kind ? R(e.stage) : ("frame_ready" === e.kind && (y = 0), A(), v.recordLifecycleStage(e))
                },
                onSnapshot: e => {
                    if (!(e.version <= 0) && !(e.version <= y)) {
                        if (A(), y = e.version, null != e.error) return void R(v.currentFailureStage() ?? "runtime_error");
                        v.recordHostRender(), F("first_snapshot_success")
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
                let e = h();
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
                let r = h();
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
                p(this.metrics, "render.result", r, {
                    render_attempt_id: this.renderAttemptId
                }), f(this.metrics, "render.latency_ms", r, Math.max(0, h() - t.startedAtMs))
            }
            emitFallback(e, t) {
                let r = this.attempt;
                r && !r.fallbackEmitted && (r.fallbackEmitted = !0, p(this.metrics, "fallback.result", {
                    failure_stage: t ?? "host_error",
                    result: e
                }))
            }
            emitComposition(e) {
                this.compositionEmitted || (this.compositionEmitted = !0, function(e, t, r) {
                    let o = `${l}.render.composition`,
                        i = `${o}.result`;
                    try {
                        e.addAction?.(o, "complete" === r.status ? {
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
                        e.count(i, {
                            renderer: r.renderer,
                            result: r.status
                        })
                    } catch {}
                    if ("complete" === r.status) {
                        for (let [t, o] of(m(e, "render.total_component_count", {}, r.totalComponentCount), m(e, "render.distinct_component_type_count", {}, r.distinctComponentTypeCount), r.componentCounts)) m(e, "render.component_instances", {
                            component_type: t
                        }, o);
                        try {
                            e.count(`${l}.render.contains_svg`, {
                                contains_svg: String((r.componentCounts.get("svg") ?? 0) > 0)
                            })
                        } catch {}
                    }
                }(this.metrics, this.renderAttemptId, e))
            }
        }

        function h() {
            return "u" < typeof performance ? Date.now() : performance.now()
        }

        function p(e, t, r, o) {
            let i = `${l}.${t}`;
            try {
                e.addAction?.(i, {
                    ...r,
                    ...o
                })
            } catch {}
            try {
                e.count(i, r)
            } catch {}
        }

        function m(e, t, r, o) {
            try {
                e.hist(`${l}.${t}`, r, o)
            } catch {}
        }

        function f(e, t, r, o) {
            try {
                e.hist(`${l}.${t}`, r, o)
            } catch {}
        }

        function _(e, t) {
            let r, o, i, n, s, l, c = a(),
                u = !1,
                d = !0,
                h = !1,
                p = !1,
                m = 0,
                f = !1,
                _ = !1,
                g = 0,
                v = "unknown",
                y = 0,
                w = 0,
                b = 0,
                x = !1,
                k = !1,
                C = !1,
                S = !1,
                M = !1,
                T = !1,
                F = null,
                A = new Set,
                E = new Map,
                R = "complete",
                O = (t, r) => {
                    try {
                        e.count(`chatgpt.model_written_dil.v2.render.${t}`, {
                            platform: "web",
                            cohort: v,
                            ...r
                        })
                    } catch {}
                },
                $ = (e, t) => {
                    f && !o && (o = e, clearTimeout(n), O("presentation_startup_result", {
                        result: e,
                        reason: t
                    }))
                },
                j = function(r, n, a) {
                    let u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
                    if (!f || _) return;
                    let d = u - y;
                    for (let e of (o || (d > 5e3 ? $("unknown", "late_observation") : "abandon" === n ? $("abandoned", a) : "content" === n && "unknown" !== r ? $("met", "content_present") : $("unknown", a)), _ = !0, A)) e(r);
                    A.clear(), p = "abandoned" === r && "deselected" === a, clearTimeout(i), s?.(), s = void 0, l = void 0, O("presentation_result", {
                        result: r,
                        cutoff: n,
                        reason: a,
                        startup: o ?? "unknown"
                    });
                    try {
                        if (t?.enabled()) {
                            let e = S || "unrecovered" === r ? 1 : .01;
                            Math.random() < e && t.reporting.publish("DIL presentation outcome", {
                                presentation_id: c,
                                result: r,
                                reason: a,
                                cohort: v,
                                report_cutoff: n,
                                startup: o,
                                elapsed_ms: Math.round(d),
                                sample_rate: e,
                                diagnostic_reports: m,
                                ...E.size > 0 ? {
                                    recovery_summary_json: (() => {
                                        if (0 === E.size) return;
                                        let e = [],
                                            t = 0;
                                        for (let {
                                                initial: r,
                                                read: o
                                            }
                                            of E.values()) try {
                                            let i = o ? o() : r;
                                            i ? e.push({
                                                ...i,
                                                observation: o ? i.runnerDisposed ? "runner_disposed" : "settlement" : "snapshot"
                                            }) : t++
                                        } catch {
                                            t++
                                        }
                                        return JSON.stringify({
                                            attempts: e,
                                            coverage: R,
                                            unavailableAttempts: t
                                        })
                                    })()
                                } : {}
                            }, "unrecovered" !== r)
                        }
                    } catch {}
                    if (E.clear(), R = "complete", "content" === n && "unknown" !== r) try {
                        e.hist("chatgpt.model_written_dil.v2.render.presentation_first_content_ms", {
                            platform: "web",
                            cohort: v
                        }, d)
                    } catch {}
                },
                P = e => {
                    if (!f || _ || !d) return;
                    let t = performance.now();
                    !o && "startup" !== e && t - y > 5e3 && $("unknown", "late_observation");
                    let i = "startup" === e ? y + 5e3 : w,
                        n = "visible" !== document.visibilityState ? "background" : t - i > 1e3 || "content" === e && t > w ? "late_observation" : void 0;
                    if (n) {
                        "startup" === e && $("unknown", n), "deadline" === e && j("unknown", e, n), "content" === e && t > w && j("unknown", "deadline", n);
                        return
                    }
                    let a = "unknown",
                        c = performance.now();
                    try {
                        a = x ? "empty" : F && k && b < 64 ? function(e) {
                            if (null == e) return "empty";
                            if (!e.isConnected) return "unknown";
                            let t = performance.now(),
                                r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT),
                                o = 0;
                            for (let e = r.nextNode(); null != e; e = r.nextNode()) {
                                if (++o > 4096 || performance.now() - t > 8) return "unknown";
                                let r = e.nodeType === Node.TEXT_NODE && e.textContent?.replace(/[\u200B-\u200D\uFEFF]/g, "").trim(),
                                    i = e instanceof HTMLImageElement && e.complete && e.naturalWidth > 0;
                                if (!r && !i) continue;
                                let n = e instanceof Element ? e : e.parentElement;
                                if (!n || n.closest("[hidden]")) continue;
                                let a = document.createRange();
                                a.selectNodeContents(e);
                                let s = Array.from(r ? a.getClientRects() : n.getClientRects(), e => {
                                        let {
                                            left: t,
                                            right: r,
                                            top: o,
                                            bottom: i
                                        } = e;
                                        return {
                                            left: t,
                                            right: r,
                                            top: o,
                                            bottom: i
                                        }
                                    }),
                                    l = !0;
                                for (let e = n; null != e; e = e.parentElement) {
                                    if (performance.now() - t > 8) return "unknown";
                                    let r = getComputedStyle(e);
                                    if ("none" === r.display || "visible" !== r.visibility || "hidden" === r.contentVisibility || "0" === r.opacity) {
                                        l = !1;
                                        break
                                    }
                                    let o = "hidden" === r.overflowX || "clip" === r.overflowX,
                                        i = "hidden" === r.overflowY || "clip" === r.overflowY;
                                    if (o || i) {
                                        let t = e.getBoundingClientRect();
                                        s = s.map(e => ({
                                            left: o ? Math.max(e.left, t.left) : e.left,
                                            right: o ? Math.min(e.right, t.right) : e.right,
                                            top: i ? Math.max(e.top, t.top) : e.top,
                                            bottom: i ? Math.min(e.bottom, t.bottom) : e.bottom
                                        }))
                                    }
                                }
                                if (l && s.some(e => e.right > e.left && e.bottom > e.top)) return "present"
                            }
                            return e.querySelector("canvas, iframe, svg, video, input, textarea") ? "unknown" : "empty"
                        }(F) : "unknown"
                    } catch {
                        "startup" === e && $("unknown", "observer_error"), "deadline" === e && j("unknown", e, "observer_error");
                        return
                    } finally {
                        (b += performance.now() - c) >= 64 && (s?.(), s = void 0, l = void 0)
                    }
                    if ("startup" === e && ("empty" === a || C ? $("missed", "content_not_observed") : "present" !== a && $("unknown", "output_unobserved")), "present" === a) {
                        let e = performance.now();
                        if (e > w) return void j("unknown", "deadline", "late_observation");
                        j(T || M ? "usable_partial" : S ? "recovered" : "usable", "content", "content_present", e)
                    } else "deadline" === e && (C ? j("unrecovered", e, "host_failure") : !1 !== r ? j("unknown", e, r ? "streaming_unconfirmed" : "input_pending") : "empty" === a ? j("unrecovered", e, x ? "root_failure" : "empty_output") : j("unknown", e, b >= 64 ? "observer_budget" : "output_unobserved"))
                },
                L = () => {
                    let e = F;
                    if (!e || !f || _ || !d || b >= 64) return;
                    let t = 0,
                        r = () => {
                            !t && d && !_ && b < 64 && (t = requestAnimationFrame(() => {
                                t = 0, P("content")
                            }))
                        };
                    l = r;
                    let o = new MutationObserver(r);
                    o.observe(e, {
                        childList: !0,
                        subtree: !0,
                        characterData: !0,
                        attributes: !0,
                        attributeFilter: ["style", "class", "hidden", "aria-hidden"]
                    });
                    let i = new ResizeObserver(r);
                    i.observe(e);
                    let n = ["load", "transitionend", "animationend"];
                    for (let t of n) e.addEventListener(t, r, !0);
                    document.addEventListener("visibilitychange", r), s = () => {
                        for (let a of (cancelAnimationFrame(t), o.disconnect(), i.disconnect(), n)) e.removeEventListener(a, r, !0);
                        document.removeEventListener("visibilitychange", r)
                    }, r()
                },
                I = () => {
                    u && d && (!f || p) && (f && (c = a()), f = !0, _ = !1, p = !1, o = void 0, b = 0, h && (m = 0), h && (S = x || M || T), v = null == r ? "unknown" : r ? "streaming" : "nonstreaming", w = (y = performance.now()) + 3e4, O("presentation_started", {}), n = setTimeout(() => P("startup"), 5e3), i = setTimeout(() => P("deadline"), 3e4), L(), P("content"))
                };
            return {
                diagnosticContext: () => ({
                    presentation_id: c,
                    presentation_settled: _
                }),
                recordDiagnosticReport: () => {
                    d && !_ && m++
                },
                registerFrameRecovery: (e, t) => {
                    if (!d || _) return;
                    let r = `${e.frameId}:${e.runnerId??""}`;
                    E.has(r) || E.size < 3 ? E.set(r, {
                        initial: e,
                        read: t
                    }) : R = "truncated"
                },
                setPresented: e => {
                    d !== e && ((d = e) ? I() : (h = !0, j("abandoned", "abandon", "deselected")))
                },
                attach: e => {
                    let t = ++g;
                    return u = !0, r = e, I(), () => {
                        queueMicrotask(() => {
                            t === g && (u = !1, j("abandoned", "abandon", "unmounted"))
                        })
                    }
                },
                updateStreaming: e => {
                    r = e
                },
                deferStreamingRuntimeFailure: e => !!f && !0 === r && !_ && (A.add(e), !0),
                observeRoot: e => {
                    s?.(), s = void 0, l = void 0, k = !1, F = e, L()
                },
                reportRootFailure: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    x = !0, k = !1, C ||= e, S = !0
                },
                reportTransientFailure: () => {
                    S = !0, M = !0
                },
                reportCommittedRoot: () => {
                    k = !0, x = !1, C = !1, M = !1, l?.()
                },
                reportOmittedChild: e => {
                    T = e, S ||= e
                },
                onPageHide: () => j("abandoned", "abandon", "page_exit")
            }
        }
        let g = "chatgpt.model_written_dil.v2.image";
        class v {
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
                    this.metrics.count(`${g}.load_result`, t), this.metrics.hist(`${g}.load_duration_ms`, t, this.observedMs)
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

        function y(e, t, r, o, i, n, a) {
            try {
                var s;
                if ("image" !== e && "search-image" !== e || !i || !Number.isFinite(t) || !Number.isFinite(r) || t <= 0 || r <= 0) return;
                let l = i.innerWidth,
                    c = i.innerHeight,
                    u = {
                        component_type: e,
                        renderer: o,
                        os: a,
                        viewport_width_bucket: (s = l, !Number.isFinite(s) || s <= 0 ? "unknown" : s < 640 ? "lt640" : s < 768 ? "640_767" : s < 1024 ? "768_1023" : "ge1024"),
                        layout_unit: "css_px"
                    };
                for (let [e, o] of Object.entries({
                        rendered_width_layout_units: t,
                        rendered_height_layout_units: r,
                        rendered_area_layout_units2: t * r,
                        viewport_width_layout_units: l,
                        viewport_height_layout_units: c
                    })) Number.isFinite(o) && o > 0 && n.hist(`chatgpt.model_written_dil.v2.image.${e}`, u, o)
            } catch {}
        }
        let w = new Set(["as", "class", "className", "dangerouslySetInnerHTML", "style"]);

        function b() {
            return "u" < typeof performance ? Date.now() : performance.now()
        }

        function x(e) {
            let {
                onComposition: t,
                runIdle: r = k
            } = e, o = !1, i = !1, n = 0, a = !0, s = "frame", l = null, c = null, u = null, d = () => {
                n += 1, null != u && (clearTimeout(u), u = null)
            }, h = () => {
                if (d(), o || i || a || "frame" !== s || null == c || c.source !== l) return;
                let e = n;
                try {
                    u = setTimeout(() => {
                        u = null;
                        let s = () => o || i || a || n !== e;
                        try {
                            r(() => {
                                if (s() || null == c) return;
                                let {
                                    registeredTypes: e,
                                    snapshot: r
                                } = c, o = function(e, t, r) {
                                    let o = r.now ?? b,
                                        i = o(),
                                        n = [{
                                            iterator: [e][Symbol.iterator]()
                                        }],
                                        a = new Set,
                                        s = new Map,
                                        l = 0,
                                        c = 0;
                                    for (; n.length > 0;) {
                                        let e = n.at(-1)?.iterator.next();
                                        if (null == e || e.done) {
                                            let e = n.pop();
                                            e?.pathObject != null && a.delete(e.pathObject);
                                            continue
                                        }
                                        let d = e.value;
                                        if ((c += 1) > r.maxObjects || o() - i > r.maxMs) return {
                                            status: "budget_exceeded"
                                        };
                                        if (!(null == d || "object" != typeof d || a.has(d))) {
                                            var u;
                                            if (a.add(d), Array.isArray(d)) {
                                                n.push({
                                                    iterator: d.values(),
                                                    pathObject: d
                                                });
                                                continue
                                            }
                                            if (u = d, "string" == typeof u.type && null != u.props && "object" == typeof u.props && !Array.isArray(u.props) && Array.isArray(u.children)) {
                                                if (!t.has(d.type)) {
                                                    a.delete(d);
                                                    continue
                                                }
                                                s.set(d.type, (s.get(d.type) ?? 0) + 1), l += 1, n.push({
                                                    iterator: function*(e) {
                                                        for (let t in "svg" !== e.type && (yield* e.children), e.props) Object.prototype.hasOwnProperty.call(e.props, t) && !w.has(t) && (yield e.props[t])
                                                    }(d),
                                                    pathObject: d
                                                });
                                                continue
                                            }
                                            n.push({
                                                iterator: function*(e) {
                                                    for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (yield e[t])
                                                }(d),
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
                                    i = !0, c = null, l = null;
                                    try {
                                        t({
                                            ...o,
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
                    o = !0, d(), c = null, l = null
                },
                onRendererChange: e => {
                    o || i || s === e || (s = e, d(), c = null)
                },
                onSnapshot: (e, t, r) => {
                    o || i || "frame" !== s || (d(), e.version > 0 && null == e.error && (c = {
                        registeredTypes: t,
                        snapshot: e,
                        source: r
                    }), h())
                },
                onSourceChange: (e, t) => {
                    o || i || (l = e, c?.source === e && (c = {
                        ...c,
                        registeredTypes: t
                    }), h())
                },
                onStreamingChange: e => {
                    o || i || (a = e, h())
                }
            }
        }

        function k(e) {
            let {
                minimumTimeRemainingMs: t = 0,
                shouldCancel: r = () => !1
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Promise((o, i) => {
                let n = n => {
                        if (r()) return void o();
                        if (null != n && !n.didTimeout && n.timeRemaining() < t) return void a();
                        try {
                            e(), o()
                        } catch (e) {
                            i(e)
                        }
                    },
                    a = () => {
                        "requestIdleCallback" in window ? window.requestIdleCallback(n) : globalThis.setTimeout(() => n(), 0)
                    };
                a()
            })
        }

        function C(e) {
            if (null == e || "object" != typeof e || !("logging_metadata" in e)) return;
            let t = e.logging_metadata;
            if (null == t || "object" != typeof t || Array.isArray(t)) return;
            let r = {};
            for (let [e, o] of Object.entries(t)) "string" == typeof o && (r[e] = o);
            return Object.keys(r).length > 0 ? r : void 0
        }
    }),
    ZBaM: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "exclamation-mark-triangle-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-exclamation-mark-triangle-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 244e-6,
                    y: .081786,
                    overflows: !1
                },
                composite: {
                    x: 244e-6,
                    y: .081786,
                    overflows: !1
                }
            }
        }
    }),
    R0eE: (function(e, t) {
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
    p39r: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "map-point-of-interest-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-map-point-of-interest-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: .027343,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: .027343,
                    overflows: !1
                }
            }
        }
    }),
    ShnZ: (function(e, t, r) {
        r.d(t, {
            a: () => o
        });
        var o = {
            kind: "inline",
            preset: (0, r("nkTT").a)({
                name: "multicolor-verified-checkmark-light-20",
                canvas: {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    frame: {
                        x: 0,
                        y: 0,
                        width: 20,
                        height: 20
                    },
                    inkBounds: {
                        x: 2.236328,
                        y: 1.665039,
                        width: 15.526855,
                        height: 16.669434
                    },
                    visualBounds: {
                        x: 2.236328,
                        y: 1.665039,
                        width: 15.526855,
                        height: 16.669434
                    }
                },
                paint: {
                    kind: "multicolor",
                    layers: [{
                        role: "fixed",
                        color: "#00B1FF",
                        bounds: {
                            x: 2.236328,
                            y: 1.665039,
                            width: 15.526855,
                            height: 16.669434
                        },
                        wideGamut: "color(display-p3 0.0000 0.6941 1.0000)"
                    }, {
                        role: "fixed",
                        color: "#FFFFFF",
                        bounds: {
                            x: 6.599609,
                            y: 6.730957,
                            width: 6.698242,
                            height: 6.538574
                        }
                    }]
                },
                optical: {
                    shape: "non-circular",
                    bounds: {
                        x: 2.236328,
                        y: 1.665039,
                        width: 15.526855,
                        height: 16.669434
                    },
                    center: {
                        x: 9.999756,
                        y: 9.999756
                    },
                    insets: {
                        top: 1.665039,
                        right: 2.236817,
                        bottom: 1.665527,
                        left: 2.236328
                    },
                    anchors: {
                        frame: {
                            x: 10,
                            y: 10
                        },
                        ink: {
                            x: 9.999756,
                            y: 9.999756
                        }
                    }
                },
                capabilities: ["icon"],
                body: '<path d="M9.99996 1.66504C11.5465 1.66508 12.8908 2.52904 13.5781 3.80034C15.0232 3.75936 16.4445 4.49251 17.2181 5.83241C17.9915 7.17206 17.9155 8.76888 17.1578 9.9998C17.9155 11.2308 17.9915 12.8275 17.2181 14.1672C16.4445 15.5071 15.0232 16.2395 13.578 16.1985C12.8909 17.4702 11.5467 18.3346 9.99988 18.3347C8.45288 18.3347 7.10815 17.4704 6.42099 16.1986C4.97605 16.2394 3.55521 15.507 2.78175 14.1673C2.00838 12.8277 2.08378 11.2309 2.84132 9.99988C2.0838 8.76896 2.0084 7.17208 2.78179 5.8325C3.55527 4.49276 4.97613 3.75964 6.42107 3.80038C7.10834 2.52891 8.4533 1.66505 9.99996 1.66504Z" fill="#00B1FF"/> <path d="M11.7608 7.11839C12.007 6.72964 12.5218 6.61415 12.9107 6.86042C13.2993 7.10672 13.4148 7.62155 13.1686 8.01032L10.2308 12.6482C10.1994 12.6977 10.1472 12.782 10.0933 12.8525C10.0355 12.9279 9.91808 13.0675 9.723 13.1633C9.49192 13.2766 9.22675 13.3004 8.97917 13.23C8.76992 13.1705 8.6295 13.0539 8.55925 12.99C8.49342 12.93 8.42633 12.8565 8.38675 12.8134L6.81933 11.1101C6.50778 10.7715 6.53042 10.2441 6.86897 9.93254C7.20768 9.62095 7.73495 9.64262 8.04654 9.98137L9.172 11.2045L11.7608 7.11839Z" fill="white"/>'
            })
        }
    }),
    zymm: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "package-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-package-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .186035,
                    y: .172363,
                    overflows: !1
                },
                composite: {
                    x: .186035,
                    y: .172363,
                    overflows: !1
                }
            }
        }
    }),
    SAs7: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "phone-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-phone-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 366e-6,
                    y: -.499512,
                    overflows: !1
                },
                composite: {
                    x: 366e-6,
                    y: -.499512,
                    overflows: !1
                }
            }
        }
    }),
    CxoR: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "star-fill-regular-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-star-fill-regular-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 61e-6,
                    y: .065124,
                    overflows: !1
                },
                composite: {
                    x: 61e-6,
                    y: .065124,
                    overflows: !1
                }
            }
        }
    }),
    r7vP: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "truck-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-truck-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 214e-6,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 214e-6,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    u9gC: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "verified-badge-checkmark-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-verified-badge-checkmark-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 306e-6,
                    y: -.012817,
                    overflows: !1
                },
                composite: {
                    x: 306e-6,
                    y: -.012817,
                    overflows: !1
                }
            }
        }
    }),
    V23S: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "verified-checkmark-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-verified-checkmark-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -183e-6,
                    y: -.016297,
                    overflows: !1
                },
                composite: {
                    x: -183e-6,
                    y: -.016297,
                    overflows: !1
                }
            }
        }
    }),
    LeoU: (function(e, t, r) {
        let o = (0, r("nkTT").a)({
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
            body: '<path d="M8.07617 6.78906C8.8447 6.93761 9.52002 7.17067 10.0146 7.47461C10.4925 7.76835 10.9003 8.19408 10.9004 8.75C10.9003 9.1412 10.6942 9.47064 10.417 9.72559C10.14 9.9802 9.76135 10.1915 9.32715 10.3604C8.45593 10.6992 7.27935 10.8994 6 10.8994C4.72066 10.8994 3.54407 10.6992 2.67285 10.3604C2.23865 10.1915 1.85999 9.9802 1.58301 9.72559C1.30577 9.47064 1.0997 9.1412 1.09961 8.75C1.09974 8.19409 1.5075 7.76835 1.98535 7.47461C2.47998 7.17067 3.1553 6.93761 3.92383 6.78906C4.14053 6.74721 4.35042 6.8889 4.39258 7.10547C4.43447 7.32226 4.29288 7.53215 4.07617 7.57422C3.36362 7.71192 2.78913 7.91979 2.4043 8.15625C2.00292 8.40298 1.90053 8.61892 1.90039 8.75C1.90048 8.84183 1.94629 8.97324 2.12402 9.13672C2.30239 9.30072 2.583 9.4665 2.96289 9.61426C3.72035 9.90882 4.79406 10.0996 6 10.0996C7.20595 10.0996 8.27965 9.90882 9.03711 9.61426C9.417 9.4665 9.69761 9.30072 9.87598 9.13672C10.0537 8.97324 10.0995 8.84183 10.0996 8.75C10.0995 8.61892 9.99708 8.40298 9.5957 8.15625C9.21087 7.91979 8.63638 7.71192 7.92383 7.57422C7.70712 7.53215 7.56553 7.32226 7.60742 7.10547C7.64958 6.88889 7.85947 6.74721 8.07617 6.78906Z" fill="currentColor"/> <path d="M6 1.09961C7.04934 1.09961 7.90039 1.95066 7.90039 3C7.90039 3.91187 7.25738 4.67241 6.40039 4.85645V8.5C6.40039 8.72091 6.22091 8.90039 6 8.90039C5.77909 8.90039 5.59961 8.72091 5.59961 8.5V4.85645C4.74262 4.67241 4.09961 3.91187 4.09961 3C4.09961 1.95066 4.95066 1.09961 6 1.09961ZM6 1.90039C5.39249 1.90039 4.90039 2.39249 4.90039 3C4.90039 3.60751 5.39249 4.09961 6 4.09961C6.60751 4.09961 7.09961 3.60751 7.09961 3C7.09961 2.39249 6.60751 1.90039 6 1.90039Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    TKij: (function(e, t, r) {
        let o = (0, r("nkTT").a)({
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
                    x: .311523,
                    y: .492554,
                    width: 11.376221,
                    height: 10.898071
                },
                visualBounds: {
                    x: .311523,
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
                    x: .311523,
                    y: .492554,
                    width: 11.376221,
                    height: 10.898071
                },
                center: {
                    x: 5.999634,
                    y: 5.94159
                },
                insets: {
                    top: .492554,
                    right: .312256,
                    bottom: .609375,
                    left: .311523
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 5.999634,
                        y: 5.94159
                    },
                    foreground: {
                        x: 5.999634,
                        y: 5.94159
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M5.36559 0.80407C5.68213 0.388703 6.31758 0.388727 6.63414 0.80407L6.69664 0.899774L8.14781 3.47399L11.0453 4.05895C11.6562 4.18222 11.8977 4.92632 11.4759 5.38513L9.47496 7.55993L9.81481 10.4974C9.88625 11.1165 9.25352 11.5761 8.68688 11.3168L5.99938 10.0853L3.31188 11.3168C2.74534 11.5757 2.11256 11.1163 2.18395 10.4974L2.52379 7.56091L0.522814 5.38513C0.101618 4.92646 0.343211 4.18259 0.953478 4.05895L3.84996 3.47399L5.30309 0.899774L5.36559 0.80407Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    FER9: (function(e, t) {
        let r = String.raw,
            o = r`\p{Emoji}(?:\p{EMod}|[\u{E0020}-\u{E007E}]+\u{E007F}|\uFE0F?\u20E3?)`;
        t.a = () => RegExp(r`\p{RI}{2}|(?![#*\d](?!\uFE0F?\u20E3))${o}(?:\u200D${o})*`, "gu")
    }),
    EbvC: (function(e, t, r) {
        let o = (e, t) => t.some(t => t instanceof RegExp ? t.test(e) : t === e),
            i = new Set(["https:", "http:", "file:"]);

        function n(e, t) {
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
                    type: o,
                    data: i,
                    hash: n
                } = r.groups, a = o.split(";");
                n = t ? "" : n;
                let s = !1;
                "base64" === a[a.length - 1] && (a.pop(), s = !0);
                let l = a.shift()?.toLowerCase() ?? "",
                    c = [...a.map(e => {
                        let [t, r = ""] = e.split("=").map(e => e.trim());
                        return "charset" === t && "us-ascii" === (r = r.toLowerCase()) ? "" : `${t}${r?`=${r}`:""}`
                    }).filter(Boolean)];
                return s && c.push("base64"), (c.length > 0 || l && "text/plain" !== l) && c.unshift(l), `data:${c.join(";")},${s?i.trim():i}${n?`#${n}`:""}`
            })(e, t);
            if ((e => {
                    try {
                        let {
                            protocol: t
                        } = new URL(e);
                        return t.endsWith(":") && !t.includes(".") && !i.has(t)
                    } catch {
                        return !1
                    }
                })(e)) return e;
            let r = e.startsWith("//");
            !r && /^\.*\//.test(e) || (e = e.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, t.defaultProtocol));
            let n = new URL(e);
            if (t.forceHttp && t.forceHttps) throw Error("The `forceHttp` and `forceHttps` options cannot be used together");
            if (t.forceHttp && "https:" === n.protocol && (n.protocol = "http:"), t.forceHttps && "http:" === n.protocol && (n.protocol = "https:"), t.stripAuthentication && (n.username = "", n.password = ""), t.stripHash ? n.hash = "" : t.stripTextFragment && (n.hash = n.hash.replace(/#?:~:text.*?$/i, "")), n.pathname) {
                let e = /\b[a-z][a-z\d+\-.]{1,50}:\/\//g,
                    t = 0,
                    r = "";
                for (;;) {
                    let o = e.exec(n.pathname);
                    if (!o) break;
                    let i = o[0],
                        a = o.index;
                    r += n.pathname.slice(t, a).replace(/\/{2,}/g, "/"), r += i, t = a + i.length
                }
                r += n.pathname.slice(t, n.pathname.length).replace(/\/{2,}/g, "/"), n.pathname = r
            }
            if (n.pathname) try {
                n.pathname = decodeURI(n.pathname).replace(/\\/g, "%5C")
            } catch {}
            if (!0 === t.removeDirectoryIndex && (t.removeDirectoryIndex = [/^index\.[a-z]+$/]), Array.isArray(t.removeDirectoryIndex) && t.removeDirectoryIndex.length > 0) {
                let e = n.pathname.split("/");
                o(e[e.length - 1], t.removeDirectoryIndex) && (n.pathname = (e = e.slice(0, -1)).slice(1).join("/") + "/")
            }
            if (n.hostname && (n.hostname = n.hostname.replace(/\.$/, ""), t.stripWWW && /^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(n.hostname) && (n.hostname = n.hostname.replace(/^www\./, ""))), Array.isArray(t.removeQueryParameters))
                for (let e of [...n.searchParams.keys()]) o(e, t.removeQueryParameters) && n.searchParams.delete(e);
            if (Array.isArray(t.keepQueryParameters) || !0 !== t.removeQueryParameters || (n.search = ""), Array.isArray(t.keepQueryParameters) && t.keepQueryParameters.length > 0)
                for (let e of [...n.searchParams.keys()]) o(e, t.keepQueryParameters) || n.searchParams.delete(e);
            if (t.sortQueryParameters) {
                n.searchParams.sort();
                try {
                    n.search = decodeURIComponent(n.search)
                } catch {}
            }
            t.removeTrailingSlash && (n.pathname = n.pathname.replace(/\/$/, "")), t.removeExplicitPort && n.port && (n.port = "");
            let a = e;
            return e = n.toString(), t.removeSingleSlash || "/" !== n.pathname || a.endsWith("/") || "" !== n.hash || (e = e.replace(/\/$/, "")), (t.removeTrailingSlash || "/" === n.pathname) && "" === n.hash && t.removeSingleSlash && (e = e.replace(/\/$/, "")), r && !t.normalizeProtocol && (e = e.replace(/^http:\/\//, "//")), t.stripProtocol && (e = e.replace(/^(?:https?:)?\/\//, "")), e
        }
        r.d(t, {
            a: () => n
        })
    })
};