export const __rspack_esm_id = 55;
export const __rspack_esm_ids = [55];
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
            return o ? "4" === o.toString() ? _.test(t) : "6" === o.toString() && E.test(t) : e(t, {
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
            _ = new RegExp("^".concat(s, "$")),
            l = "(?:[0-9a-fA-F]{1,4})",
            E = RegExp("^(" + "(?:".concat(l, ":){7}(?:").concat(l, "|:)|") + "(?:".concat(l, ":){6}(?:").concat(s, "|:").concat(l, "|:)|") + "(?:".concat(l, ":){5}(?::").concat(s, "|(:").concat(l, "){1,2}|:)|") + "(?:".concat(l, ":){4}(?:(:").concat(l, "){0,1}:").concat(s, "|(:").concat(l, "){1,3}|:)|") + "(?:".concat(l, ":){3}(?:(:").concat(l, "){0,2}:").concat(s, "|(:").concat(l, "){1,4}|:)|") + "(?:".concat(l, ":){2}(?:(:").concat(l, "){0,3}:").concat(s, "|(:").concat(l, "){1,5}|:)|") + "(?:".concat(l, ":){1}(?:(:").concat(l, "){0,4}:").concat(s, "|(:").concat(l, "){1,6}|:)|") + "(?::((?::".concat(l, "){0,5}:").concat(s, "|(?::").concat(l, "){1,7}|:))") + ")(%[0-9a-zA-Z.]{1,})?$");
        e.exports = t.default, e.exports.default = t.default
    }),
    Tv1c: (function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            if ((0, o.default)(e), !e || /[\s<>]/.test(e) || 0 === e.indexOf("mailto:") || (t = (0, _.default)(t, c)).validate_length && e.length > t.max_allowed_length || !t.allow_fragments && (0, n.default)(e, "#") || !t.allow_query_components && ((0, n.default)(e, "?") || (0, n.default)(e, "&"))) return !1;
            var r, l, d, h, T, p, m, f, C = (e = (m = (e = (m = e.split("#")).shift()).split("?")).shift()).match(/^([a-z][a-z0-9+\-.]*):/i),
                N = !1,
                A = function(o) {
                    return N = !0, r = o.toLowerCase(), (!t.require_valid_protocol || -1 !== t.protocols.indexOf(r)) && e.substring(C[0].length)
                };
            if (C) {
                var v = C[1],
                    g = e.substring(C[0].length);
                if ("//" === g.slice(0, 2)) {
                    if (!1 === (e = A(v))) return !1
                } else {
                    var y = g.indexOf("/"),
                        I = -1 === y ? g : g.substring(0, y),
                        D = I.indexOf("@");
                    if (-1 !== D) {
                        var R = I.substring(0, D),
                            w = /^[a-zA-Z0-9\-_.%:]*$/.test(R),
                            b = /%[0-9a-fA-F]{2}/.test(R);
                        if (w && !b) {
                            if (t.require_protocol) return !1
                        } else if (!1 === (e = A(v))) return !1
                    } else if (/^[0-9]/.test(g)) {
                        if (t.require_protocol) return !1
                    } else if (!1 === (e = A(v))) return !1
                }
            } else if (t.require_protocol) return !1;
            if ("//" === e.slice(0, 2)) {
                if (!N && !t.allow_protocol_relative_urls) return !1;
                e = e.slice(2)
            }
            if ("" === e) return !1;
            if ("" === (e = (m = e.split("/")).shift()) && !t.require_host) return !0;
            if ((m = e.split("@")).length > 1) {
                if (t.disallow_auth || "" === m[0] || (l = m.shift()).indexOf(":") >= 0 && l.split(":").length > 2) return !1;
                var L, G = function(e) {
                        if (Array.isArray(e)) return e
                    }(L = l.split(":")) || function(e) {
                        var t = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != t) {
                            var r, o, i, n, a = [],
                                s = !0,
                                _ = !1;
                            try {
                                i = (t = t.call(e)).next, !1;
                                for (; !(s = (r = i.call(t)).done) && (a.push(r.value), 2 !== a.length); s = !0);
                            } catch (e) {
                                _ = !0, o = e
                            } finally {
                                try {
                                    if (!s && null != t.return && (n = t.return(), Object(n) !== n)) return
                                } finally {
                                    if (_) throw o
                                }
                            }
                            return a
                        }
                    }(L) || function(e) {
                        if (e) {
                            if ("string" == typeof e) return E(e, 2);
                            var t = ({}).toString.call(e).slice(8, -1);
                            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? E(e, 2) : void 0
                        }
                    }(L) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(),
                    P = G[0],
                    O = G[1];
                if ("" === P && "" === O) return !1
            }
            h = m.join("@"), p = null, f = null;
            var F = h.match(u);
            if (F ? (d = "", f = F[1], p = F[2] || null) : (d = (m = h.split(":")).shift(), m.length && (p = m.join(":"))), null !== p && p.length > 0) {
                if (T = parseInt(p, 10), !/^[0-9]+$/.test(p) || T <= 0 || T > 65535) return !1
            } else if (t.require_port) return !1;
            return t.host_whitelist ? (0, i.default)(d, t.host_whitelist) : "" === d && !t.require_host || (!!(0, s.default)(d) || !!(0, a.default)(d, t) || !!f && !!(0, s.default)(f, 6)) && (d = d || f, !(t.host_blacklist && (0, i.default)(d, t.host_blacklist)))
        };
        var o = l(r("NgaJ")),
            i = l(r("bPnx")),
            n = l(r("skvE")),
            a = l(r("HJNo")),
            s = l(r("BMmD")),
            _ = l(r("Y4hk"));

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function E(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, o = Array(t); r < t; r++) o[r] = e[r];
            return o
        }
        var c = {
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
            u = /^\[([^\]]+)\](?::([0-9]+))?$/;
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
    yFoU: (function(e, t, r) {
        var o, i = ((o = {}).CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_UNSPECIFIED = "CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_UNSPECIFIED", o.CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_LAUNCH_ATTEMPTED = "CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_LAUNCH_ATTEMPTED", o.CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_OPENED = "CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_OPENED", o.CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_RENDER_READY = "CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_RENDER_READY", o.CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_ERROR = "CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_ERROR", o.CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_CLOSED = "CHATGPT_ECOSYSTEM_WIDGET_LIFECYCLE_ACTION_CLOSED", o.UNRECOGNIZED = "UNRECOGNIZED", o);
        r.d(t, {
            b: () => i
        }, {
            a: {
                $type: "protobuf_analytics_events.v1.ChatgptEcosystemWidgetLifecycle"
            }
        })
    }),
    u7iS: (function(e, t, r) {
        var o, i = ((o = {}).CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_UNSPECIFIED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_UNSPECIFIED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ALL_ACCOUNTS_SYNCED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ALL_ACCOUNTS_SYNCED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_REQUESTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_REQUESTED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_RECENT_TRANSACTIONS_SUCCEEDED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_REFRESH_PROFILE_SUCCEEDED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_SELECTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_SELECTED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_OPEN_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_OPEN_SUCCEEDED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_INITIATED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_INITIATED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_DISCONNECTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_DISCONNECTED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_BUTTON_CLICKED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_BUTTON_CLICKED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_WEB_EXITED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_WEB_EXITED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_NATIVE_EXITED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_NATIVE_EXITED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHING = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHING", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_OAUTH_FLOW_FINISHED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADING_SHOWN = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADING_SHOWN", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_LOADED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_CLOSE_REQUESTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_DETAIL_CLOSE_REQUESTED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_FLOW_STARTED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_BANK_REAUTH_FLOW_STARTED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_INITIATED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_INITIATED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_SUCCEEDED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_RESYNC_SUCCEEDED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVE_INITIATED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVE_INITIATED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_REMOVED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_UNAVAILABLE = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_UNAVAILABLE", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_CLICKED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ACCOUNT_FOLLOW_UP_CLICKED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RECENT_TRANSACTIONS_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RECENT_TRANSACTIONS_FAILED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REAUTH_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REAUTH_FAILED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RESYNC_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_RESYNC_FAILED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_REMOVE_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_REMOVE_FAILED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_FOLLOW_UP_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_FOLLOW_UP_FAILED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_DETAIL_OPEN_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_ACCOUNT_DETAIL_OPEN_FAILED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REFRESH_PROFILE = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_REFRESH_PROFILE", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_DISCONNECT_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_DISCONNECT_FAILED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_UNKNOWN_ACTION = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_UNKNOWN_ACTION", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BOUNDARY_CATCH = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BOUNDARY_CATCH", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_MARK_INITIALIZING_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_MARK_INITIALIZING_FAILED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_START_FLOW_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_START_FLOW_FAILED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_POLLING_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_OAUTH_POLLING_FAILED", o.CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_REAUTH_FAILED = "CHATGPT_FINANCE_LEDGER_WIDGET_EVENT_TYPE_ERROR_BANK_REAUTH_FAILED", o.UNRECOGNIZED = "UNRECOGNIZED", o);
        r.d(t, {
            d: () => i
        }, {
            a: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceComponentInteraction"
            },
            b: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceConnectFlowStep"
            },
            c: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceLedgerWidgetEvent"
            },
            e: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceSurfaceClosed"
            },
            f: {
                $type: "protobuf_analytics_events.v1.ChatgptFinanceSurfaceViewed"
            }
        })
    }),
    vG85: (function(e, t, r) {
        r.d(t, {}, {
            a: {
                $type: "protobuf_analytics_events.v1.ChatgptSharePostDownloadClicked"
            },
            b: {
                $type: "protobuf_analytics_events.v1.ChatgptSharePostPageViewed"
            }
        })
    }),
    REzJ: (function(e, t, r) {
        r.d(t, {
            a: () => f,
            b: () => 32768,
            c: () => v,
            d: () => E,
            e: () => p,
            f: () => C,
            g: () => y,
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
        let _ = "chatgpt.model_written_dil.v2";

        function l(e, t) {
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

        function E(e) {
            let t, r, i, s, E, {
                    metrics: u,
                    diagnosticsExpected: h = !1,
                    startupReporting: T,
                    presentation: p
                } = e,
                m = a(),
                f = new c(u, m),
                C = 0,
                N = !1,
                A = !1,
                v = !1,
                g = new Set,
                y = new Set,
                I = new Set,
                D = function(e) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "first_snapshot_success" === e ? "snapshot_effect" : "failure_observed";
                    if (null == t || !T) return;
                    let a = "first_snapshot_success" === e;
                    if (a) {
                        if ("first_snapshot_success" !== r || N || (N = !0, Math.random() >= .01)) return
                    } else {
                        let e = t.failureId ?? "host_error";
                        if ("post_timeout" === i) {
                            if (!y.has(e) || I.has(e)) return;
                            I.add(e)
                        } else {
                            if (g.has(e) || g.size >= 3) return;
                            g.add(e)
                        }
                    }
                    try {
                        if (!T.canPublish(e, i)) return;
                        let s = (0, o.b)(t, "render_result", "decision", {
                                reason: e
                            }),
                            _ = (0, o.c)(s),
                            E = {
                                ...p?.diagnosticContext(),
                                render_attempt_id: m,
                                failure_id: s.failureId,
                                failure_boundary: a ? "unknown" : l(e, s, _),
                                summary_coverage: _.coverage,
                                observation_window_ms: s.postTimeoutWindowMs,
                                observation_elapsed_ms: s.postTimeoutElapsedMs,
                                observation_sample_rate: s.postTimeoutSampleRate,
                                result: e,
                                initial_result: r,
                                after_initial_success: !a && "first_snapshot_success" === r,
                                report_cutoff: i,
                                diagnostics: s
                            },
                            c = function(e) {
                                let {
                                    diagnostics: t,
                                    ...r
                                } = e, o = e => n(JSON.stringify(e)) - 2, i = t.records.map(o), a = t.openOperations.map(o), s = new Set, _ = new Set, l = n({
                                    ...r,
                                    diagnostics_json: JSON.stringify({
                                        ...t,
                                        records: [],
                                        openOperations: [],
                                        dropped: t.dropped + i.length + a.length,
                                        truncated: !0
                                    })
                                }) + 1, E = (e, t, r) => {
                                    let o = t[e];
                                    if (void 0 === o || r.has(e)) return;
                                    let i = o + +(0 !== r.size);
                                    l + i <= 32768 && (r.add(e), l += i)
                                };
                                E(t.records.findIndex(e => null != e.fault), i, s);
                                for (let e = 0; e < a.length; e++) E(e, a, _);
                                for (let e = 0; e < Math.min(8, i.length); e++) E(e, i, s);
                                for (let e = i.length - 1; e >= 0; e--) E(e, i, s);
                                let c = i.length + a.length - s.size - _.size;
                                return {
                                    ...r,
                                    diagnostics_json: JSON.stringify({
                                        ...t,
                                        records: t.records.filter((e, t) => s.has(t)),
                                        openOperations: t.openOperations.filter((e, t) => _.has(t)),
                                        dropped: t.dropped + c,
                                        truncated: t.truncated || c > 0
                                    })
                                }
                            }(E);
                        if (!T.publish("DIL startup diagnostics", c, a)) return;
                        if (p?.recordDiagnosticReport(), !a) {
                            let e = t.failureId ?? "host_error";
                            "post_timeout" !== i && y.add(e)
                        }
                    } catch {
                        T.recordSuppression(e, i, "observer_error")
                    }
                },
                R = () => {
                    if (A || !r || "first_snapshot_success" === r || "unknown" === r || "abandoned" === r || !s && !h) return;
                    A = !0, E && clearTimeout(E);
                    let e = "unknown",
                        t = "unavailable";
                    try {
                        if (s) {
                            let i = (0, o.c)(s);
                            t = i.coverage, e = l(r, s, i)
                        }
                    } catch {}
                    try {
                        d(u, "startup.failure_boundary", {
                            result: r,
                            last_observed_boundary: e,
                            summary_coverage: t,
                            observation_window: "worker_timeout" === r ? s?.postTimeoutWindowMs === 1e4 ? "extended" : "short" : "none",
                            observation_status: "worker_timeout" === r ? s?.postTimeoutCoverage ?? "unavailable" : "not_applicable"
                        })
                    } catch {}
                },
                w = e => {
                    let o = void 0 === r;
                    r ??= e, f.finishRender(e), "unknown" !== e && "abandoned" !== e && (D(e), o && "first_snapshot_success" !== e && (i = t?.failureId, s = t, "worker_timeout" === e && (s || h) ? E = setTimeout(R, Math.min(1e4, Math.max(1e3, s?.postTimeoutWindowMs ?? 1e3)) + 500) : R()))
                },
                b = () => f.beginRenderAttempt(),
                L = e => {
                    b(), f.recordFailureStage(e), w(e)
                },
                G = e => {
                    b(), f.recordFailureStage(e), "runtime_error" === e && void 0 === r && (v ||= p?.deferStreamingRuntimeFailure(t => {
                        void 0 === r && w("unrecovered" === t ? e : "unknown" === t || "abandoned" === t ? t : "first_snapshot_success")
                    }) ?? !1) || w(e)
                };
            return {
                beginRenderAttempt: b,
                onPreparationEnd: e => {
                    let t = {
                        outcome: e.outcome,
                        readiness: e.readiness
                    };
                    d(u, "preparation.result", t), null != e.readyLeadMs && u.hist(`${_}.preparation.ready_before_input_ms`, t, e.readyLeadMs)
                },
                onDiagnostics: (e, o) => {
                    t = e;
                    let n = e.preReadyFrameRecovery;
                    n && p?.registerFrameRecovery(n, o), e.postTimeout && "worker_timeout" === r && e.failureId === i && (s = e, R(), D("worker_timeout", "post_timeout"))
                },
                onActionResult: (e, t) => {
                    d(u, "action.result", {
                        action_type: e,
                        result: t
                    })
                },
                onFallbackResult: (e, t) => {
                    b(), f.emitFallback(e, t ?? f.currentFailureStage())
                },
                onTerminalFailure: e => "runtime_error" === e ? G(e) : L(e),
                onHostRenderFailure: e => {
                    try {
                        t && (t = (0, o.b)(t, "host_error", "threw", {
                            error: e
                        }))
                    } catch {}
                    L("host_error")
                },
                onInitialRenderCommit: () => {
                    b(), w("first_snapshot_success")
                },
                onComposition: e => {
                    f.emitComposition(e)
                },
                onLifecycleEvent: e => {
                    "failure" === e.kind ? G(e.stage) : ("frame_ready" === e.kind && (C = 0), b(), f.recordLifecycleStage(e))
                },
                onSnapshot: e => {
                    if (!(e.version <= 0) && !(e.version <= C)) {
                        if (b(), C = e.version, null != e.error) return void G(f.currentFailureStage() ?? "runtime_error");
                        f.recordHostRender(), w("first_snapshot_success")
                    }
                }
            }
        }
        class c {
            metrics;
            renderAttemptId;
            attempt = null;
            compositionEmitted = !1;
            constructor(e, t) {
                this.metrics = e, this.renderAttemptId = t
            }
            beginRenderAttempt() {
                if (this.attempt) return;
                let e = u();
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
                let r = u();
                T(this.metrics, "render.stage.latency_ms", {
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
                d(this.metrics, "render.result", r, {
                    render_attempt_id: this.renderAttemptId
                }), T(this.metrics, "render.latency_ms", r, Math.max(0, u() - t.startedAtMs))
            }
            emitFallback(e, t) {
                let r = this.attempt;
                r && !r.fallbackEmitted && (r.fallbackEmitted = !0, d(this.metrics, "fallback.result", {
                    failure_stage: t ?? "host_error",
                    result: e
                }))
            }
            emitComposition(e) {
                this.compositionEmitted || (this.compositionEmitted = !0, function(e, t, r) {
                    let o = `${_}.render.composition`,
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
                        for (let [t, o] of(h(e, "render.total_component_count", {}, r.totalComponentCount), h(e, "render.distinct_component_type_count", {}, r.distinctComponentTypeCount), r.componentCounts)) h(e, "render.component_instances", {
                            component_type: t
                        }, o);
                        try {
                            e.count(`${_}.render.contains_svg`, {
                                contains_svg: String((r.componentCounts.get("svg") ?? 0) > 0)
                            })
                        } catch {}
                    }
                }(this.metrics, this.renderAttemptId, e))
            }
        }

        function u() {
            return "u" < typeof performance ? Date.now() : performance.now()
        }

        function d(e, t, r, o) {
            let i = `${_}.${t}`;
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

        function h(e, t, r, o) {
            try {
                e.hist(`${_}.${t}`, r, o)
            } catch {}
        }

        function T(e, t, r, o) {
            try {
                e.hist(`${_}.${t}`, r, o)
            } catch {}
        }

        function p(e, t) {
            let r, o, i, n, s, _, l = a(),
                E = !1,
                c = !0,
                u = !1,
                d = !1,
                h = 0,
                T = !1,
                p = !1,
                m = 0,
                f = "unknown",
                C = 0,
                N = 0,
                A = 0,
                v = !1,
                g = !1,
                y = !1,
                I = !1,
                D = !1,
                R = !1,
                w = null,
                b = new Set,
                L = new Map,
                G = "complete",
                P = (t, r) => {
                    try {
                        e.count(`chatgpt.model_written_dil.v2.render.${t}`, {
                            platform: "web",
                            cohort: f,
                            ...r
                        })
                    } catch {}
                },
                O = (e, t) => {
                    T && !o && (o = e, clearTimeout(n), P("presentation_startup_result", {
                        result: e,
                        reason: t
                    }))
                },
                F = function(r, n, a) {
                    let E = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
                    if (!T || p) return;
                    let c = E - C;
                    for (let e of (o || (c > 5e3 ? O("unknown", "late_observation") : "abandon" === n ? O("abandoned", a) : "content" === n && "unknown" !== r ? O("met", "content_present") : O("unknown", a)), p = !0, b)) e(r);
                    b.clear(), d = "abandoned" === r && "deselected" === a, clearTimeout(i), s?.(), s = void 0, _ = void 0, P("presentation_result", {
                        result: r,
                        cutoff: n,
                        reason: a,
                        startup: o ?? "unknown"
                    });
                    try {
                        if (t?.enabled()) {
                            let e = I || "unrecovered" === r ? 1 : .01;
                            Math.random() < e && t.reporting.publish("DIL presentation outcome", {
                                presentation_id: l,
                                result: r,
                                reason: a,
                                cohort: f,
                                report_cutoff: n,
                                startup: o,
                                elapsed_ms: Math.round(c),
                                sample_rate: e,
                                diagnostic_reports: h,
                                ...L.size > 0 ? {
                                    recovery_summary_json: (() => {
                                        if (0 === L.size) return;
                                        let e = [],
                                            t = 0;
                                        for (let {
                                                initial: r,
                                                read: o
                                            }
                                            of L.values()) try {
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
                                            coverage: G,
                                            unavailableAttempts: t
                                        })
                                    })()
                                } : {}
                            }, "unrecovered" !== r)
                        }
                    } catch {}
                    if (L.clear(), G = "complete", "content" === n && "unknown" !== r) try {
                        e.hist("chatgpt.model_written_dil.v2.render.presentation_first_content_ms", {
                            platform: "web",
                            cohort: f
                        }, c)
                    } catch {}
                },
                S = e => {
                    if (!T || p || !c) return;
                    let t = performance.now();
                    !o && "startup" !== e && t - C > 5e3 && O("unknown", "late_observation");
                    let i = "startup" === e ? C + 5e3 : N,
                        n = "visible" !== document.visibilityState ? "background" : t - i > 1e3 || "content" === e && t > N ? "late_observation" : void 0;
                    if (n) {
                        "startup" === e && O("unknown", n), "deadline" === e && F("unknown", e, n), "content" === e && t > N && F("unknown", "deadline", n);
                        return
                    }
                    let a = "unknown",
                        l = performance.now();
                    try {
                        a = v ? "empty" : w && g && A < 64 ? function(e) {
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
                                    _ = !0;
                                for (let e = n; null != e; e = e.parentElement) {
                                    if (performance.now() - t > 8) return "unknown";
                                    let r = getComputedStyle(e);
                                    if ("none" === r.display || "visible" !== r.visibility || "hidden" === r.contentVisibility || "0" === r.opacity) {
                                        _ = !1;
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
                                if (_ && s.some(e => e.right > e.left && e.bottom > e.top)) return "present"
                            }
                            return e.querySelector("canvas, iframe, svg, video, input, textarea") ? "unknown" : "empty"
                        }(w) : "unknown"
                    } catch {
                        "startup" === e && O("unknown", "observer_error"), "deadline" === e && F("unknown", e, "observer_error");
                        return
                    } finally {
                        (A += performance.now() - l) >= 64 && (s?.(), s = void 0, _ = void 0)
                    }
                    if ("startup" === e && ("empty" === a || y ? O("missed", "content_not_observed") : "present" !== a && O("unknown", "output_unobserved")), "present" === a) {
                        let e = performance.now();
                        if (e > N) return void F("unknown", "deadline", "late_observation");
                        F(R || D ? "usable_partial" : I ? "recovered" : "usable", "content", "content_present", e)
                    } else "deadline" === e && (y ? F("unrecovered", e, "host_failure") : !1 !== r ? F("unknown", e, r ? "streaming_unconfirmed" : "input_pending") : "empty" === a ? F("unrecovered", e, v ? "root_failure" : "empty_output") : F("unknown", e, A >= 64 ? "observer_budget" : "output_unobserved"))
                },
                x = () => {
                    let e = w;
                    if (!e || !T || p || !c || A >= 64) return;
                    let t = 0,
                        r = () => {
                            !t && c && !p && A < 64 && (t = requestAnimationFrame(() => {
                                t = 0, S("content")
                            }))
                        };
                    _ = r;
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
                H = () => {
                    E && c && (!T || d) && (T && (l = a()), T = !0, p = !1, d = !1, o = void 0, A = 0, u && (h = 0), u && (I = v || D || R), f = null == r ? "unknown" : r ? "streaming" : "nonstreaming", N = (C = performance.now()) + 3e4, P("presentation_started", {}), n = setTimeout(() => S("startup"), 5e3), i = setTimeout(() => S("deadline"), 3e4), x(), S("content"))
                };
            return {
                diagnosticContext: () => ({
                    presentation_id: l,
                    presentation_settled: p
                }),
                recordDiagnosticReport: () => {
                    c && !p && h++
                },
                registerFrameRecovery: (e, t) => {
                    if (!c || p) return;
                    let r = `${e.frameId}:${e.runnerId??""}`;
                    L.has(r) || L.size < 3 ? L.set(r, {
                        initial: e,
                        read: t
                    }) : G = "truncated"
                },
                setPresented: e => {
                    c !== e && ((c = e) ? H() : (u = !0, F("abandoned", "abandon", "deselected")))
                },
                attach: e => {
                    let t = ++m;
                    return E = !0, r = e, H(), () => {
                        queueMicrotask(() => {
                            t === m && (E = !1, F("abandoned", "abandon", "unmounted"))
                        })
                    }
                },
                updateStreaming: e => {
                    r = e
                },
                deferStreamingRuntimeFailure: e => !!T && !0 === r && !p && (b.add(e), !0),
                observeRoot: e => {
                    s?.(), s = void 0, _ = void 0, g = !1, w = e, x()
                },
                reportRootFailure: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    v = !0, g = !1, y ||= e, I = !0
                },
                reportTransientFailure: () => {
                    I = !0, D = !0
                },
                reportCommittedRoot: () => {
                    g = !0, v = !1, y = !1, D = !1, _?.()
                },
                reportOmittedChild: e => {
                    R = e, I ||= e
                },
                onPageHide: () => F("abandoned", "abandon", "page_exit")
            }
        }
        let m = "chatgpt.model_written_dil.v2.image";
        class f {
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
                    this.metrics.count(`${m}.load_result`, t), this.metrics.hist(`${m}.load_duration_ms`, t, this.observedMs)
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

        function C(e, t, r, o, i, n, a) {
            try {
                var s;
                if ("image" !== e && "search-image" !== e || !i || !Number.isFinite(t) || !Number.isFinite(r) || t <= 0 || r <= 0) return;
                let _ = i.innerWidth,
                    l = i.innerHeight,
                    E = {
                        component_type: e,
                        renderer: o,
                        os: a,
                        viewport_width_bucket: (s = _, !Number.isFinite(s) || s <= 0 ? "unknown" : s < 640 ? "lt640" : s < 768 ? "640_767" : s < 1024 ? "768_1023" : "ge1024"),
                        layout_unit: "css_px"
                    };
                for (let [e, o] of Object.entries({
                        rendered_width_layout_units: t,
                        rendered_height_layout_units: r,
                        rendered_area_layout_units2: t * r,
                        viewport_width_layout_units: _,
                        viewport_height_layout_units: l
                    })) Number.isFinite(o) && o > 0 && n.hist(`chatgpt.model_written_dil.v2.image.${e}`, E, o)
            } catch {}
        }
        let N = new Set(["as", "class", "className", "dangerouslySetInnerHTML", "style"]);

        function A() {
            return "u" < typeof performance ? Date.now() : performance.now()
        }

        function v(e) {
            let {
                onComposition: t,
                runIdle: r = g
            } = e, o = !1, i = !1, n = 0, a = !0, s = "frame", _ = null, l = null, E = null, c = () => {
                n += 1, null != E && (clearTimeout(E), E = null)
            }, u = () => {
                if (c(), o || i || a || "frame" !== s || null == l || l.source !== _) return;
                let e = n;
                try {
                    E = setTimeout(() => {
                        E = null;
                        let s = () => o || i || a || n !== e;
                        try {
                            r(() => {
                                if (s() || null == l) return;
                                let {
                                    registeredTypes: e,
                                    snapshot: r
                                } = l, o = function(e, t, r) {
                                    let o = r.now ?? A,
                                        i = o(),
                                        n = [{
                                            iterator: [e][Symbol.iterator]()
                                        }],
                                        a = new Set,
                                        s = new Map,
                                        _ = 0,
                                        l = 0;
                                    for (; n.length > 0;) {
                                        let e = n.at(-1)?.iterator.next();
                                        if (null == e || e.done) {
                                            let e = n.pop();
                                            e?.pathObject != null && a.delete(e.pathObject);
                                            continue
                                        }
                                        let c = e.value;
                                        if ((l += 1) > r.maxObjects || o() - i > r.maxMs) return {
                                            status: "budget_exceeded"
                                        };
                                        if (!(null == c || "object" != typeof c || a.has(c))) {
                                            var E;
                                            if (a.add(c), Array.isArray(c)) {
                                                n.push({
                                                    iterator: c.values(),
                                                    pathObject: c
                                                });
                                                continue
                                            }
                                            if (E = c, "string" == typeof E.type && null != E.props && "object" == typeof E.props && !Array.isArray(E.props) && Array.isArray(E.children)) {
                                                if (!t.has(c.type)) {
                                                    a.delete(c);
                                                    continue
                                                }
                                                s.set(c.type, (s.get(c.type) ?? 0) + 1), _ += 1, n.push({
                                                    iterator: function*(e) {
                                                        for (let t in "svg" !== e.type && (yield* e.children), e.props) Object.prototype.hasOwnProperty.call(e.props, t) && !N.has(t) && (yield e.props[t])
                                                    }(c),
                                                    pathObject: c
                                                });
                                                continue
                                            }
                                            n.push({
                                                iterator: function*(e) {
                                                    for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (yield e[t])
                                                }(c),
                                                pathObject: c
                                            })
                                        }
                                    }
                                    return {
                                        componentCounts: s,
                                        distinctComponentTypeCount: s.size,
                                        status: "complete",
                                        totalComponentCount: _
                                    }
                                }(r.tree, e, {
                                    maxMs: 4,
                                    maxObjects: 4096
                                });
                                if (!s()) {
                                    i = !0, l = null, _ = null;
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
                    o = !0, c(), l = null, _ = null
                },
                onRendererChange: e => {
                    o || i || s === e || (s = e, c(), l = null)
                },
                onSnapshot: (e, t, r) => {
                    o || i || "frame" !== s || (c(), e.version > 0 && null == e.error && (l = {
                        registeredTypes: t,
                        snapshot: e,
                        source: r
                    }), u())
                },
                onSourceChange: (e, t) => {
                    o || i || (_ = e, l?.source === e && (l = {
                        ...l,
                        registeredTypes: t
                    }), u())
                },
                onStreamingChange: e => {
                    o || i || (a = e, u())
                }
            }
        }

        function g(e) {
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

        function y(e) {
            if (null == e || "object" != typeof e || !("logging_metadata" in e)) return;
            let t = e.logging_metadata;
            if (null == t || "object" != typeof t || Array.isArray(t)) return;
            let r = {};
            for (let [e, o] of Object.entries(t)) "string" == typeof o && (r[e] = o);
            return Object.keys(r).length > 0 ? r : void 0
        }
    }),
    RIFd: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "chevron-left-md-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-chevron-left-md-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .413452,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: .413452,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    jtDB: (function(e, t) {
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
    NtvA: (function(e, t) {
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
    zhEO: (function(e, t, r) {
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
    YDBm: (function(e, t) {
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
    WNKy: (function(e, t) {
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
    WSVP: (function(e, t) {
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
    UNnq: (function(e, t) {
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
    JB0j: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "verified-badge-checkmark-bold-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-verified-badge-checkmark-bold-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -123e-6,
                    y: -.015381,
                    overflows: !1
                },
                composite: {
                    x: -123e-6,
                    y: -.015381,
                    overflows: !1
                }
            }
        }
    }),
    Li1h: (function(e, t) {
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
    HVLy: (function(e, t) {
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
    mghv: (function(e, t, r) {
        let o = (0, r("nkTT").a)({
            name: "clock-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                frame: {
                    x: 0,
                    y: 0,
                    width: 24,
                    height: 24
                },
                inkBounds: {
                    x: 2.25,
                    y: 2.25,
                    width: 19.5,
                    height: 19.5
                },
                visualBounds: {
                    x: 2.25,
                    y: 2.25,
                    width: 19.5,
                    height: 19.5
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "circular",
                bounds: {
                    x: 2.25,
                    y: 2.25,
                    width: 19.5,
                    height: 19.5
                },
                center: {
                    x: 12,
                    y: 12
                },
                insets: {
                    top: 2.25,
                    right: 2.25,
                    bottom: 2.25,
                    left: 2.25
                },
                anchors: {
                    frame: {
                        x: 12,
                        y: 12
                    },
                    ink: {
                        x: 12,
                        y: 12
                    },
                    foreground: {
                        x: 12,
                        y: 12
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M12 6.25C12.4142 6.25003 12.75 6.58581 12.75 7V11.793C12.75 12.1244 12.6182 12.4424 12.3838 12.6768L10.0303 15.0303C9.73739 15.3232 9.26262 15.3231 8.96973 15.0303C8.67683 14.7374 8.67683 14.2626 8.96973 13.9697L11.25 11.6895V7C11.25 6.58579 11.5858 6.25 12 6.25Z" fill="currentColor"/> <path d="M12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25ZM12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    PVJr: (function(e, t, r) {
        let o = (0, r("nkTT").a)({
            name: "exclamation-mark-triangle-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                frame: {
                    x: 0,
                    y: 0,
                    width: 24,
                    height: 24
                },
                inkBounds: {
                    x: 1.812012,
                    y: 3.085938,
                    width: 20.375488,
                    height: 17.664551
                },
                visualBounds: {
                    x: 1.812012,
                    y: 3.085938,
                    width: 20.375488,
                    height: 17.664551
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.812012,
                    y: 3.085938,
                    width: 20.375488,
                    height: 17.664551
                },
                center: {
                    x: 11.999756,
                    y: 11.918214
                },
                insets: {
                    top: 3.085938,
                    right: 1.8125,
                    bottom: 3.249511,
                    left: 1.812012
                },
                anchors: {
                    frame: {
                        x: 12,
                        y: 12
                    },
                    ink: {
                        x: 11.999756,
                        y: 11.918214
                    },
                    foreground: {
                        x: 11.999756,
                        y: 11.918214
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M12.1217 15.1197C12.721 15.1805 13.1891 15.687 13.1891 16.3023C13.189 16.9585 12.6567 17.4906 12.0006 17.4908C11.3852 17.4908 10.8787 17.0228 10.818 16.4234L10.8121 16.3023L10.818 16.1803C10.879 15.5812 11.3855 15.1139 12.0006 15.1139L12.1217 15.1197Z" fill="currentColor"/> <path d="M12.0006 8.75058C12.4146 8.75084 12.7506 9.08653 12.7506 9.50058V12.7506C12.7503 13.1644 12.4144 13.5003 12.0006 13.5006C11.5865 13.5006 11.2509 13.1646 11.2506 12.7506V9.50058C11.2506 9.08636 11.5864 8.75058 12.0006 8.75058Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.65294 4.40194C10.7253 2.64727 13.274 2.64727 14.3463 4.40194L21.7799 16.567C22.8994 18.3994 21.5806 20.7506 19.4332 20.7506H4.56603C2.419 20.7503 1.10035 18.3992 2.21935 16.567L9.65294 4.40194ZM13.066 5.18417C12.5786 4.38675 11.4206 4.38675 10.9332 5.18417L3.49865 17.3492C2.99081 18.1819 3.59051 19.2503 4.56603 19.2506H19.4332C20.4091 19.2506 21.0089 18.1821 20.5006 17.3492L13.066 5.18417Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
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
    INJ7: (function(e, t, r) {
        let o = (0, r("nkTT").a)({
            name: "verified-badge-checkmark-bold-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                frame: {
                    x: 0,
                    y: 0,
                    width: 24,
                    height: 24
                },
                inkBounds: {
                    x: 1.278809,
                    y: 1.277344,
                    width: 21.442627,
                    height: 21.476074
                },
                visualBounds: {
                    x: 1.278809,
                    y: 1.277344,
                    width: 21.442627,
                    height: 21.476074
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.278809,
                    y: 1.277344,
                    width: 21.442627,
                    height: 21.476074
                },
                center: {
                    x: 12.000123,
                    y: 12.015381
                },
                insets: {
                    top: 1.277344,
                    right: 1.278564,
                    bottom: 1.246582,
                    left: 1.278809
                },
                anchors: {
                    frame: {
                        x: 12,
                        y: 12
                    },
                    ink: {
                        x: 12.000123,
                        y: 12.015381
                    },
                    foreground: {
                        x: 12.000123,
                        y: 12.015381
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M14.3137 8.29274C14.7135 7.69673 15.5212 7.53688 16.1175 7.9363C16.7136 8.33598 16.8732 9.14372 16.4739 9.74001L12.3176 15.9392C11.7616 16.7685 10.5779 16.8635 9.89675 16.1336L7.65554 13.7302C7.16594 13.2053 7.1941 12.383 7.71901 11.8933C8.24385 11.4039 9.06617 11.4323 9.55593 11.9568L10.8948 13.3914L14.3137 8.29274Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.66628 2.24392C10.955 0.955137 13.0446 0.95517 14.3333 2.24392L15.4085 3.31813C15.5398 3.44931 15.7181 3.52321 15.9036 3.52321H17.1751C18.9973 3.52339 20.4746 5.00082 20.4749 6.82302V8.09548C20.475 8.28082 20.549 8.45853 20.68 8.58962L21.7551 9.66481C23.0436 10.9535 23.0436 13.0432 21.7551 14.3318L20.68 15.407C20.5487 15.5383 20.4749 15.7165 20.4749 15.9021V17.2468C20.4746 19.0689 18.9974 20.5465 17.1751 20.5466H15.8889C15.7063 20.5468 15.5312 20.6184 15.4007 20.7459L14.305 21.8152C13.023 23.0663 10.9766 23.0663 9.6946 21.8152L8.58522 20.7312C8.45767 20.6067 8.2868 20.5354 8.10866 20.532L6.76589 20.5086C4.9667 20.4764 3.5248 19.0082 3.52468 17.2088V15.9021C3.52468 15.7166 3.45078 15.5383 3.3196 15.407L2.24538 14.3318C0.956602 13.0431 0.956635 10.9535 2.24538 9.66481L3.3196 8.58962C3.4507 8.45849 3.52451 8.28088 3.52468 8.09548V6.82302C3.52494 5.00086 5.00232 3.52347 6.82448 3.52321H8.09694C8.28235 3.52304 8.45995 3.44924 8.59108 3.31813L9.66628 2.24392ZM12.4954 4.08181C12.2221 3.80851 11.7785 3.8086 11.5051 4.08181L10.43 5.157C9.81123 5.7757 8.97191 6.12363 8.09694 6.1238H6.82448C6.43826 6.12406 6.12552 6.4368 6.12526 6.82302V8.09548C6.12509 8.97045 5.77716 9.80976 5.15847 10.4285L4.08327 11.5037C3.81006 11.777 3.80999 12.2207 4.08327 12.4939L5.15847 13.5681C5.77717 14.187 6.12526 15.027 6.12526 15.9021V17.2088C6.12538 17.5905 6.43124 17.9022 6.81276 17.909L8.15456 17.9324L8.46804 17.9529C9.1933 18.0353 9.87413 18.3569 10.4007 18.8709L11.51 19.9539C11.782 20.2191 12.2166 20.2193 12.4885 19.9539L13.5842 18.8855C14.2007 18.2836 15.0277 17.9472 15.8889 17.947H17.1751C17.5613 17.9469 17.875 17.6331 17.8753 17.2468V15.9021C17.8753 15.027 18.2222 14.187 18.8411 13.5681L19.9163 12.4939C20.1895 12.2207 20.1894 11.777 19.9163 11.5037L18.8411 10.4285C18.2225 9.80976 17.8754 8.97033 17.8753 8.09548V6.82302C17.875 6.43674 17.5614 6.12398 17.1751 6.1238H15.9036C15.0285 6.1238 14.1885 5.7757 13.5696 5.157L12.4954 4.08181Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
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
                let _ = a.shift()?.toLowerCase() ?? "",
                    l = [...a.map(e => {
                        let [t, r = ""] = e.split("=").map(e => e.trim());
                        return "charset" === t && "us-ascii" === (r = r.toLowerCase()) ? "" : `${t}${r?`=${r}`:""}`
                    }).filter(Boolean)];
                return s && l.push("base64"), (l.length > 0 || _ && "text/plain" !== _) && l.unshift(_), `data:${l.join(";")},${s?i.trim():i}${n?`#${n}`:""}`
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