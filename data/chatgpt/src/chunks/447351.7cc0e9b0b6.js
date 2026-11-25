/*! LICENSE: 447351.7cc0e9b0b6.js.LICENSE.txt */
export const __rspack_esm_ids = [447351];
export const __webpack_modules__ = {
    QWzg: (function(a) {
        a.exports = 0x7fffffff
    }),
    b2vf: (function(a, b, c) {
        var d = c("pUrh"),
            e = c("QWzg");
        a.exports = function(a) {
            if ((a = d(a)) > e) throw TypeError(a + " exceeds maximum possible timeout");
            return a
        }
    }),
    Z9kG: (function(a, b, c) {
        var d = c("Msc0");
        a.exports = function(a) {
            if ("function" != typeof a || !hasOwnProperty.call(a, "length")) return !1;
            try {
                if ("number" != typeof a.length || "function" != typeof a.call || "function" != typeof a.apply) return !1
            } catch (a) {
                return !1
            }
            return !d(a)
        }
    }),
    M1Wx: (function(a, b, c) {
        var d = c("NAx3"),
            e = {
                object: !0,
                function: !0,
                undefined: !0
            };
        a.exports = function(a) {
            return !!d(a) && hasOwnProperty.call(e, typeof a)
        }
    }),
    qAT6: (function(a, b, c) {
        var d = c("Z9kG"),
            e = /^\s*class[\s{/}]/,
            f = Function.prototype.toString;
        a.exports = function(a) {
            return !(!d(a) || e.test(f.call(a)))
        }
    }),
    Msc0: (function(a, b, c) {
        var d = c("M1Wx");
        a.exports = function(a) {
            if (!d(a)) return !1;
            try {
                if (!a.constructor) return !1;
                return a.constructor.prototype === a
            } catch (a) {
                return !1
            }
        }
    }),
    NAx3: (function(a) {
        var b = void 0;
        a.exports = function(a) {
            return a !== b && null !== a
        }
    }),
    Tm1V: (function(a, b, c) {
        c.d(b, {
            a: () => h
        });
        var d = c("zd8w");

        function e(a, b) {
            return "function" == typeof a ? a(b) : a && (a.current = b), a
        }
        var f = "u" > typeof window ? d.useLayoutEffect : d.useEffect,
            g = new WeakMap;

        function h(a, b) {
            var c, h, i, j = (c = b || null, h = function(b) {
                return a.forEach(function(a) {
                    return e(a, b)
                })
            }, (i = (0, d.useState)(function() {
                return {
                    value: c,
                    callback: h,
                    facade: {
                        get current() {
                            return i.value
                        },
                        set current(a) {
                            var b = i.value;
                            b !== a && (i.value = a, i.callback(a, b))
                        }
                    }
                }
            })[0]).callback = h, i.facade);
            return f(function() {
                var b = g.get(j);
                if (b) {
                    var c = new Set(b),
                        d = new Set(a),
                        f = j.current;
                    c.forEach(function(a) {
                        d.has(a) || e(a, null)
                    }), d.forEach(function(a) {
                        c.has(a) || e(a, f)
                    })
                }
                g.set(j, a)
            }, [a]), j
        }
    }),
    MIRj: (function(a, b, c) {
        var d = c("SRbQ"),
            e = c("zd8w"),
            f = function(a) {
                var b = a.sideCar,
                    c = (0, d.e)(a, ["sideCar"]);
                if (!b) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var f = b.read();
                if (!f) throw Error("Sidecar medium not found");
                return e.createElement(f, (0, d.a)({}, c))
            };
        f.isSideCarExport = !0, c.d(b, {}, {
            a: function(a, b) {
                return a.useMedium(b), f
            }
        })
    }),
    QdsV: (function(a, b, c) {
        var d = c("SRbQ");

        function e(a) {
            return a
        }
        c.d(b, {}, {
            a: function(a) {
                void 0 === a && (a = {});
                var b, c, f, g = (void 0 === b && (b = e), c = [], f = !1, {
                    read: function() {
                        if (f) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return c.length ? c[c.length - 1] : null
                    },
                    useMedium: function(a) {
                        var d = b(a, f);
                        return c.push(d),
                            function() {
                                c = c.filter(function(a) {
                                    return a !== d
                                })
                            }
                    },
                    assignSyncMedium: function(a) {
                        for (f = !0; c.length;) {
                            var b = c;
                            c = [], b.forEach(a)
                        }
                        c = {
                            push: function(b) {
                                return a(b)
                            },
                            filter: function() {
                                return c
                            }
                        }
                    },
                    assignMedium: function(a) {
                        f = !0;
                        var b = [];
                        if (c.length) {
                            var d = c;
                            c = [], d.forEach(a), b = c
                        }
                        var e = function() {
                                var c = b;
                                b = [], c.forEach(a)
                            },
                            g = function() {
                                return Promise.resolve().then(e)
                            };
                        g(), c = {
                            push: function(a) {
                                b.push(a), g()
                            },
                            filter: function(a) {
                                return b = b.filter(a), c
                            }
                        }
                    }
                });
                return g.options = (0, d.a)({
                    async: !0,
                    ssr: !1
                }, a), g
            }
        })
    }),
    jrim: (function(a, b, c) {
        var d = c("zd8w"),
            e = "function" == typeof Object.is ? Object.is : function(a, b) {
                return a === b && (0 !== a || 1 / a == 1 / b) || a != a && b != b
            },
            f = d.useSyncExternalStore,
            g = d.useRef,
            h = d.useEffect,
            i = d.useMemo,
            j = d.useDebugValue;
        b.useSyncExternalStoreWithSelector = function(a, b, c, d, k) {
            var l = g(null);
            if (null === l.current) {
                var m = {
                    hasValue: !1,
                    value: null
                };
                l.current = m
            } else m = l.current;
            var n = f(a, (l = i(function() {
                function a(a) {
                    if (!h) {
                        if (h = !0, f = a, a = d(a), void 0 !== k && m.hasValue) {
                            var b = m.value;
                            if (k(b, a)) return g = b
                        }
                        return g = a
                    }
                    if (b = g, e(f, a)) return b;
                    var c = d(a);
                    return void 0 !== k && k(b, c) ? (f = a, b) : (f = a, g = c)
                }
                var f, g, h = !1,
                    i = void 0 === c ? null : c;
                return [function() {
                    return a(b())
                }, null === i ? void 0 : function() {
                    return a(i())
                }]
            }, [b, c, d, k]))[0], l[1]);
            return h(function() {
                m.hasValue = !0, m.value = n
            }, [n]), j(n), n
        }
    }),
    jguW: (function(a, b, c) {
        a.exports = c("jrim")
    }),
    HJNo: (function(a, b, c) {
        Object.defineProperty(b, "__esModule", {
            value: !0
        }), b.default = function(a, b) {
            (0, d.default)(a), (b = (0, e.default)(b, g)).allow_trailing_dot && "." === a[a.length - 1] && (a = a.substring(0, a.length - 1)), !0 === b.allow_wildcard && 0 === a.indexOf("*.") && (a = a.substring(2));
            var c = a.split("."),
                f = c[c.length - 1];
            return !(b.require_tld && (c.length < 2 || !b.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(f) || /\s/.test(f))) && !(!b.allow_numeric_tld && /^\d+$/.test(f)) && c.every(function(a) {
                return !(a.length > 63 && !b.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(a) || /[\uff01-\uff5e]/.test(a) || /^-|-$/.test(a) || !b.allow_underscores && /_/.test(a))
            })
        };
        var d = f(c("NgaJ")),
            e = f(c("Y4hk"));

        function f(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        var g = {
            require_tld: !0,
            allow_underscores: !1,
            allow_trailing_dot: !1,
            allow_numeric_tld: !1,
            allow_wildcard: !1,
            ignore_max_length: !1
        };
        a.exports = b.default, a.exports.default = b.default
    }),
    BMmD: (function(a, b, c) {
        Object.defineProperty(b, "__esModule", {
            value: !0
        }), b.default = function a(b) {
            var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (0, e.default)(b);
            var d = ("object" === f(c) ? c.version : arguments[1]) || "";
            return d ? "4" === d.toString() ? i.test(b) : "6" === d.toString() && k.test(b) : a(b, {
                version: 4
            }) || a(b, {
                version: 6
            })
        };
        var d, e = (d = c("NgaJ")) && d.__esModule ? d : {
            default: d
        };

        function f(a) {
            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                return typeof a
            } : function(a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            })(a)
        }
        var g = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
            h = "(".concat(g, "[.]){3}").concat(g),
            i = new RegExp("^".concat(h, "$")),
            j = "(?:[0-9a-fA-F]{1,4})",
            k = RegExp("^(" + "(?:".concat(j, ":){7}(?:").concat(j, "|:)|") + "(?:".concat(j, ":){6}(?:").concat(h, "|:").concat(j, "|:)|") + "(?:".concat(j, ":){5}(?::").concat(h, "|(:").concat(j, "){1,2}|:)|") + "(?:".concat(j, ":){4}(?:(:").concat(j, "){0,1}:").concat(h, "|(:").concat(j, "){1,3}|:)|") + "(?:".concat(j, ":){3}(?:(:").concat(j, "){0,2}:").concat(h, "|(:").concat(j, "){1,4}|:)|") + "(?:".concat(j, ":){2}(?:(:").concat(j, "){0,3}:").concat(h, "|(:").concat(j, "){1,5}|:)|") + "(?:".concat(j, ":){1}(?:(:").concat(j, "){0,4}:").concat(h, "|(:").concat(j, "){1,6}|:)|") + "(?::((?::".concat(j, "){0,5}:").concat(h, "|(?::").concat(j, "){1,7}|:))") + ")(%[0-9a-zA-Z.]{1,})?$");
        a.exports = b.default, a.exports.default = b.default
    }),
    Tv1c: (function(a, b, c) {
        Object.defineProperty(b, "__esModule", {
            value: !0
        }), b.default = function(a, b) {
            if ((0, d.default)(a), !a || /[\s<>]/.test(a) || 0 === a.indexOf("mailto:") || (b = (0, i.default)(b, l)).validate_length && a.length > b.max_allowed_length || !b.allow_fragments && (0, f.default)(a, "#") || !b.allow_query_components && ((0, f.default)(a, "?") || (0, f.default)(a, "&"))) return !1;
            var c, j, n, o, p, q, r, s, t = (a = (r = (a = (r = a.split("#")).shift()).split("?")).shift()).match(/^([a-z][a-z0-9+\-.]*):/i),
                u = !1,
                v = function(d) {
                    return u = !0, c = d.toLowerCase(), (!b.require_valid_protocol || -1 !== b.protocols.indexOf(c)) && a.substring(t[0].length)
                };
            if (t) {
                var w = t[1],
                    x = a.substring(t[0].length);
                if ("//" === x.slice(0, 2)) {
                    if (!1 === (a = v(w))) return !1
                } else {
                    var y = x.indexOf("/"),
                        z = -1 === y ? x : x.substring(0, y),
                        A = z.indexOf("@");
                    if (-1 !== A) {
                        var B = z.substring(0, A),
                            C = /^[a-zA-Z0-9\-_.%:]*$/.test(B),
                            D = /%[0-9a-fA-F]{2}/.test(B);
                        if (C && !D) {
                            if (b.require_protocol) return !1
                        } else if (!1 === (a = v(w))) return !1
                    } else if (/^[0-9]/.test(x)) {
                        if (b.require_protocol) return !1
                    } else if (!1 === (a = v(w))) return !1
                }
            } else if (b.require_protocol) return !1;
            if ("//" === a.slice(0, 2)) {
                if (!u && !b.allow_protocol_relative_urls) return !1;
                a = a.slice(2)
            }
            if ("" === a) return !1;
            if ("" === (a = (r = a.split("/")).shift()) && !b.require_host) return !0;
            if ((r = a.split("@")).length > 1) {
                if (b.disallow_auth || "" === r[0] || (j = r.shift()).indexOf(":") >= 0 && j.split(":").length > 2) return !1;
                var E, F = function(a) {
                        if (Array.isArray(a)) return a
                    }(E = j.split(":")) || function(a) {
                        var b = null == a ? null : "u" > typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
                        if (null != b) {
                            var c, d, e, f, g = [],
                                h = !0,
                                i = !1;
                            try {
                                e = (b = b.call(a)).next, !1;
                                for (; !(h = (c = e.call(b)).done) && (g.push(c.value), 2 !== g.length); h = !0);
                            } catch (a) {
                                i = !0, d = a
                            } finally {
                                try {
                                    if (!h && null != b.return && (f = b.return(), Object(f) !== f)) return
                                } finally {
                                    if (i) throw d
                                }
                            }
                            return g
                        }
                    }(E) || function(a) {
                        if (a) {
                            if ("string" == typeof a) return k(a, 2);
                            var b = ({}).toString.call(a).slice(8, -1);
                            return "Object" === b && a.constructor && (b = a.constructor.name), "Map" === b || "Set" === b ? Array.from(a) : "Arguments" === b || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b) ? k(a, 2) : void 0
                        }
                    }(E) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(),
                    G = F[0],
                    H = F[1];
                if ("" === G && "" === H) return !1
            }
            o = r.join("@"), q = null, s = null;
            var I = o.match(m);
            if (I ? (n = "", s = I[1], q = I[2] || null) : (n = (r = o.split(":")).shift(), r.length && (q = r.join(":"))), null !== q && q.length > 0) {
                if (p = parseInt(q, 10), !/^[0-9]+$/.test(q) || p <= 0 || p > 65535) return !1
            } else if (b.require_port) return !1;
            return b.host_whitelist ? (0, e.default)(n, b.host_whitelist) : "" === n && !b.require_host || (!!(0, h.default)(n) || !!(0, g.default)(n, b) || !!s && !!(0, h.default)(s, 6)) && (n = n || s, !(b.host_blacklist && (0, e.default)(n, b.host_blacklist)))
        };
        var d = j(c("NgaJ")),
            e = j(c("bPnx")),
            f = j(c("skvE")),
            g = j(c("HJNo")),
            h = j(c("BMmD")),
            i = j(c("Y4hk"));

        function j(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }

        function k(a, b) {
            (null == b || b > a.length) && (b = a.length);
            for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c];
            return d
        }
        var l = {
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
            m = /^\[([^\]]+)\](?::([0-9]+))?$/;
        a.exports = b.default, a.exports.default = b.default
    }),
    NgaJ: (function(a, b) {
        Object.defineProperty(b, "__esModule", {
            value: !0
        }), b.default = function(a) {
            if (null == a) throw TypeError("Expected a string but received a ".concat(a));
            if ("String" !== a.constructor.name) throw TypeError("Expected a string but received a ".concat(a.constructor.name))
        }, a.exports = b.default, a.exports.default = b.default
    }),
    bPnx: (function(a, b) {
        Object.defineProperty(b, "__esModule", {
            value: !0
        }), b.default = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                if (a === d || "[object RegExp]" === Object.prototype.toString.call(d) && d.test(a)) return !0
            }
            return !1
        }, a.exports = b.default, a.exports.default = b.default
    }),
    skvE: (function(a, b) {
        Object.defineProperty(b, "__esModule", {
            value: !0
        }), b.default = void 0, b.default = function(a, b) {
            return -1 !== a.indexOf(b)
        }, a.exports = b.default, a.exports.default = b.default
    }),
    Y4hk: (function(a, b) {
        Object.defineProperty(b, "__esModule", {
            value: !0
        }), b.default = function() {
            var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                b = arguments.length > 1 ? arguments[1] : void 0;
            for (var c in b) void 0 === a[c] && (a[c] = b[c]);
            return a
        }, a.exports = b.default, a.exports.default = b.default
    }),
    Be82: (function(a, b, c) {
        function d(a) {
            return a && "u" > typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a
        }

        function e(a) {
            var b = function(a, b) {
                if ("object" !== d(a) || null === a) return a;
                var c = a[Symbol.toPrimitive];
                if (void 0 !== c) {
                    var e = c.call(a, b || "default");
                    if ("object" !== d(e)) return e;
                    throw TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === b ? String : Number)(a)
            }(a, "string");
            return "symbol" === d(b) ? b : String(b)
        }
        c.d(b, {
            _: () => e
        })
    }),
    aPIw: (function(a, b, c) {
        c.d(b, {}, {
            _: function(a, b, c) {
                if (null != b) {
                    var d, e;
                    if ("object" != typeof b && "function" != typeof b) throw TypeError("Object expected.");
                    if (c) {
                        if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
                        d = b[Symbol.asyncDispose]
                    }
                    if (void 0 === d) {
                        if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
                        d = b[Symbol.dispose], c && (e = d)
                    }
                    if ("function" != typeof d) throw TypeError("Object not disposable.");
                    e && (d = function() {
                        try {
                            e.call(this)
                        } catch (a) {
                            return Promise.reject(a)
                        }
                    }), a.stack.push({
                        value: b,
                        dispose: d,
                        async: c
                    })
                } else c && a.stack.push({
                    async: !0
                });
                return b
            }
        })
    }),
    WSqI: (function(a, b, c) {
        var d = "function" == typeof SuppressedError ? SuppressedError : function(a, b, c) {
            var d = Error(c);
            return d.name = "SuppressedError", d.error = a, d.suppressed = b, d
        };
        c.d(b, {}, {
            _: function(a) {
                function b(b) {
                    a.error = a.hasError ? new d(b, a.error, "An error was suppressed during disposal.") : b, a.hasError = !0
                }
                var c, e = 0;
                return function d() {
                    for (; c = a.stack.pop();) try {
                        if (!c.async && 1 === e) return e = 0, a.stack.push(c), Promise.resolve().then(d);
                        if (c.dispose) {
                            var f = c.dispose.call(c.value);
                            if (c.async) return e |= 2, Promise.resolve(f).then(d, function(a) {
                                return b(a), d()
                            })
                        } else e |= 1
                    } catch (a) {
                        b(a)
                    }
                    if (1 === e) return a.hasError ? Promise.reject(a.error) : Promise.resolve();
                    if (a.hasError) throw a.error
                }()
            }
        })
    }),
    wo6g: (function(a, b, c) {
        let d;
        var e = c("D7Ms"),
            f = (d = () => e.h, {
                isServer: () => d(),
                setIsServer(a) {
                    d = a
                }
            });
        c.d(b, {}, {
            a: f
        })
    }),
    wYVE: (function(a, b, c) {
        var d = c("H4sS"),
            e = new class extends d.a {
                #a;
                #b;
                #c;
                constructor() {
                    super(), this.#c = a => {
                        if ("u" > typeof window && window.addEventListener) {
                            let b = () => a();
                            return window.addEventListener("visibilitychange", b, !1), () => {
                                window.removeEventListener("visibilitychange", b)
                            }
                        }
                    }
                }
                onSubscribe() {
                    this.#b || this.setEventListener(this.#c)
                }
                onUnsubscribe() {
                    this.hasListeners() || (this.#b?.(), this.#b = void 0)
                }
                setEventListener(a) {
                    this.#c = a, this.#b?.(), this.#b = a(a => {
                        "boolean" == typeof a ? this.setFocused(a) : this.onFocus()
                    })
                }
                setFocused(a) {
                    this.#a !== a && (this.#a = a, this.onFocus())
                }
                onFocus() {
                    let a = this.isFocused();
                    this.listeners.forEach(b => {
                        b(a)
                    })
                }
                isFocused() {
                    return "boolean" == typeof this.#a ? this.#a : globalThis.document?.visibilityState !== "hidden"
                }
            };
        c.d(b, {}, {
            a: e
        })
    }),
    slNz: (function(a, b, c) {
        var d = c("D7Ms");

        function e(a, {
            pages: b,
            pageParams: c
        }) {
            let d = b.length - 1;
            return b.length > 0 ? a.getNextPageParam(b[d], b, c[d], c) : void 0
        }

        function f(a, {
            pages: b,
            pageParams: c
        }) {
            return b.length > 0 ? a.getPreviousPageParam?.(b[0], b, c[0], c) : void 0
        }
        c.d(b, {}, {
            a: function(a, b) {
                return !!b && null != e(a, b)
            },
            b: function(a, b) {
                return !!b && !!a.getPreviousPageParam && null != f(a, b)
            },
            c: function(a) {
                return {
                    onFetch: (b, c) => {
                        let g = b.options,
                            h = b.fetchOptions?.meta?.fetchMore?.direction,
                            i = b.state.data?.pages || [],
                            j = b.state.data?.pageParams || [],
                            k = {
                                pages: [],
                                pageParams: []
                            },
                            l = 0,
                            m = async () => {
                                let c = !1,
                                    m = (0, d.d)(b.options, b.fetchOptions),
                                    n = async (a, e, f) => {
                                        let g;
                                        if (c) return Promise.reject(b.signal.reason);
                                        if (null == e && a.pages.length) return Promise.resolve(a);
                                        let h = (g = {
                                                client: b.client,
                                                queryKey: b.queryKey,
                                                pageParam: e,
                                                direction: f ? "backward" : "forward",
                                                meta: b.options.meta
                                            }, (0, d.a)(g, () => b.signal, () => c = !0), g),
                                            i = await m(h),
                                            {
                                                maxPages: j
                                            } = b.options,
                                            k = f ? d.c : d.b;
                                        return {
                                            pages: k(a.pages, i, j),
                                            pageParams: k(a.pageParams, e, j)
                                        }
                                    };
                                if (h && i.length) {
                                    let a = "backward" === h,
                                        b = {
                                            pages: i,
                                            pageParams: j
                                        },
                                        c = (a ? f : e)(g, b);
                                    k = await n(b, c, a)
                                } else {
                                    let b = a ?? i.length;
                                    do {
                                        let a = 0 === l ? j[0] ?? g.initialPageParam : e(g, k);
                                        if (l > 0 && null == a) break;
                                        k = await n(k, a), l++
                                    } while (l < b)
                                }
                                return k
                            };
                        b.options.persister ? b.fetchFn = () => b.options.persister?.(m, {
                            client: b.client,
                            queryKey: b.queryKey,
                            meta: b.options.meta,
                            signal: b.signal
                        }, c) : b.fetchFn = m
                    }
                }
            }
        })
    }),
    CdjL: (function(a, b, c) {
        var d = c("suf3"),
            e = c("slNz"),
            f = class extends d.a {
                constructor(a, b) {
                    super(a, b)
                }
                bindMethods() {
                    super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
                }
                setOptions(a) {
                    a._type = "infinite", super.setOptions(a)
                }
                getOptimisticResult(a) {
                    return a._type = "infinite", super.getOptimisticResult(a)
                }
                fetchNextPage(a) {
                    return this.fetch({
                        ...a,
                        meta: {
                            fetchMore: {
                                direction: "forward"
                            }
                        }
                    })
                }
                fetchPreviousPage(a) {
                    return this.fetch({
                        ...a,
                        meta: {
                            fetchMore: {
                                direction: "backward"
                            }
                        }
                    })
                }
                createResult(a, b) {
                    let {
                        state: c
                    } = a, d = super.createResult(a, b), {
                        isFetching: f,
                        isRefetching: g,
                        isError: h,
                        isRefetchError: i
                    } = d, j = c.fetchMeta?.fetchMore?.direction, k = h && "forward" === j, l = f && "forward" === j, m = h && "backward" === j, n = f && "backward" === j;
                    return {
                        ...d,
                        fetchNextPage: this.fetchNextPage,
                        fetchPreviousPage: this.fetchPreviousPage,
                        hasNextPage: (0, e.a)(b, c.data),
                        hasPreviousPage: (0, e.b)(b, c.data),
                        isFetchNextPageError: k,
                        isFetchingNextPage: l,
                        isFetchPreviousPageError: m,
                        isFetchingPreviousPage: n,
                        isRefetchError: i && !k && !m,
                        isRefetching: g && !l && !n
                    }
                }
            };
        c.d(b, {}, {
            a: f
        })
    }),
    UKIm: (function(a, b, c) {
        var d = c("rbzn"),
            e = c("OLOS"),
            f = c("NxBK"),
            g = class extends e.a {
                #d;
                #e;
                #f;
                #g;
                constructor(a) {
                    super(), this.#d = a.client, this.mutationId = a.mutationId, this.#f = a.mutationCache, this.#e = [], this.state = a.state || h(), this.setOptions(a.options), this.scheduleGc()
                }
                setOptions(a) {
                    this.options = a, this.updateGcTime(this.options.gcTime)
                }
                get meta() {
                    return this.options.meta
                }
                addObserver(a) {
                    this.#e.includes(a) || (this.#e.push(a), this.clearGcTimeout(), this.#f.notify({
                        type: "observerAdded",
                        mutation: this,
                        observer: a
                    }))
                }
                removeObserver(a) {
                    this.#e = this.#e.filter(b => b !== a), this.scheduleGc(), this.#f.notify({
                        type: "observerRemoved",
                        mutation: this,
                        observer: a
                    })
                }
                optionalRemove() {
                    this.#e.length || ("pending" === this.state.status ? this.scheduleGc() : this.#f.remove(this))
                }
                continue () {
                    return this.#g?.continue() ?? this.execute(this.state.variables)
                }
                async execute(a) {
                    let b = () => {
                            this.#h({
                                type: "continue"
                            })
                        },
                        c = {
                            client: this.#d,
                            meta: this.options.meta,
                            mutationKey: this.options.mutationKey
                        };
                    this.#g = (0, f.c)({
                        fn: () => this.options.mutationFn ? this.options.mutationFn(a, c) : Promise.reject(Error("No mutationFn found")),
                        onFail: (a, b) => {
                            this.#h({
                                type: "failed",
                                failureCount: a,
                                error: b
                            })
                        },
                        onPause: () => {
                            this.#h({
                                type: "pause"
                            })
                        },
                        onContinue: b,
                        retry: this.options.retry ?? 0,
                        retryDelay: this.options.retryDelay,
                        networkMode: this.options.networkMode,
                        canRun: () => this.#f.canRun(this)
                    });
                    let d = "pending" === this.state.status,
                        e = !this.#g.canStart();
                    try {
                        if (d) b();
                        else {
                            this.#h({
                                type: "pending",
                                variables: a,
                                isPaused: e
                            }), this.#f.config.onMutate && await this.#f.config.onMutate(a, this, c);
                            let b = await this.options.onMutate?.(a, c);
                            b !== this.state.context && this.#h({
                                type: "pending",
                                context: b,
                                variables: a,
                                isPaused: e
                            })
                        }
                        let f = await this.#g.start();
                        return await this.#f.config.onSuccess?.(f, a, this.state.context, this, c), await this.options.onSuccess?.(f, a, this.state.context, c), await this.#f.config.onSettled?.(f, null, this.state.variables, this.state.context, this, c), await this.options.onSettled?.(f, null, a, this.state.context, c), this.#h({
                            type: "success",
                            data: f
                        }), f
                    } catch (b) {
                        try {
                            await this.#f.config.onError?.(b, a, this.state.context, this, c)
                        } catch (a) {
                            Promise.reject(a)
                        }
                        try {
                            await this.options.onError?.(b, a, this.state.context, c)
                        } catch (a) {
                            Promise.reject(a)
                        }
                        try {
                            await this.#f.config.onSettled?.(void 0, b, this.state.variables, this.state.context, this, c)
                        } catch (a) {
                            Promise.reject(a)
                        }
                        try {
                            await this.options.onSettled?.(void 0, b, a, this.state.context, c)
                        } catch (a) {
                            Promise.reject(a)
                        }
                        throw this.#h({
                            type: "error",
                            error: b
                        }), b
                    } finally {
                        this.#f.runNext(this)
                    }
                }
                #h(a) {
                    this.state = (b => {
                        switch (a.type) {
                            case "failed":
                                return {
                                    ...b, failureCount: a.failureCount, failureReason: a.error
                                };
                            case "pause":
                                return {
                                    ...b, isPaused: !0
                                };
                            case "continue":
                                return {
                                    ...b, isPaused: !1
                                };
                            case "pending":
                                return {
                                    ...b, context: a.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: a.isPaused, status: "pending", variables: a.variables, submittedAt: Date.now()
                                };
                            case "success":
                                return {
                                    ...b, data: a.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1
                                };
                            case "error":
                                return {
                                    ...b, data: void 0, error: a.error, failureCount: b.failureCount + 1, failureReason: a.error, isPaused: !1, status: "error"
                                }
                        }
                    })(this.state), d.a.batch(() => {
                        this.#e.forEach(b => {
                            b.onMutationUpdate(a)
                        }), this.#f.notify({
                            mutation: this,
                            type: "updated",
                            action: a
                        })
                    })
                }
            };

        function h() {
            return {
                context: void 0,
                data: void 0,
                error: null,
                failureCount: 0,
                failureReason: null,
                isPaused: !1,
                status: "idle",
                variables: void 0,
                submittedAt: 0
            }
        }
        c.d(b, {}, {
            a: g,
            b: h
        })
    }),
    rbzn: (function(a, b, c) {
        let d, e, f, g, h, i;
        var j = (c("pEZk")).a,
            k = (d = [], e = 0, f = a => {
                a()
            }, g = a => {
                a()
            }, h = j, {
                batch: a => {
                    let b;
                    e++;
                    try {
                        b = a()
                    } finally {
                        let a;
                        --e || (a = d, d = [], a.length && h(() => {
                            g(() => {
                                a.forEach(a => {
                                    f(a)
                                })
                            })
                        }))
                    }
                    return b
                },
                batchCalls: a => (...b) => {
                    i(() => {
                        a(...b)
                    })
                },
                schedule: i = a => {
                    e ? d.push(a) : h(() => {
                        f(a)
                    })
                },
                setNotifyFunction: a => {
                    f = a
                },
                setBatchNotifyFunction: a => {
                    g = a
                },
                setScheduler: a => {
                    h = a
                }
            });
        c.d(b, {}, {
            a: k
        })
    }),
    HY2m: (function(a, b, c) {
        var d = c("H4sS"),
            e = new class extends d.a {
                #i = !0;
                #b;
                #c;
                constructor() {
                    super(), this.#c = a => {
                        if ("u" > typeof window && window.addEventListener) {
                            let b = () => a(!0),
                                c = () => a(!1);
                            return window.addEventListener("online", b, !1), window.addEventListener("offline", c, !1), () => {
                                window.removeEventListener("online", b), window.removeEventListener("offline", c)
                            }
                        }
                    }
                }
                onSubscribe() {
                    this.#b || this.setEventListener(this.#c)
                }
                onUnsubscribe() {
                    this.hasListeners() || (this.#b?.(), this.#b = void 0)
                }
                setEventListener(a) {
                    this.#c = a, this.#b?.(), this.#b = a(this.setOnline.bind(this))
                }
                setOnline(a) {
                    this.#i !== a && (this.#i = a, this.listeners.forEach(b => {
                        b(a)
                    }))
                }
                isOnline() {
                    return this.#i
                }
            };
        c.d(b, {}, {
            a: e
        })
    }),
    MtYY: (function(a, b, c) {
        var d = c("D7Ms"),
            e = c("rbzn"),
            f = c("NxBK"),
            g = c("OLOS"),
            h = c("slNz"),
            i = class extends g.a {
                #j;
                #k;
                #l;
                #m;
                #d;
                #g;
                #n;
                #o;
                constructor(a) {
                    super(), this.#o = !1, this.#n = a.defaultOptions, this.setOptions(a.options), this.observers = [], this.#d = a.client, this.#m = this.#d.getQueryCache(), this.queryKey = a.queryKey, this.queryHash = a.queryHash, this.#k = l(this.options), this.state = a.state ?? this.#k, this.scheduleGc()
                }
                get meta() {
                    return this.options.meta
                }
                get queryType() {
                    return this.#j
                }
                get promise() {
                    return this.#g?.promise
                }
                setOptions(a) {
                    if (this.options = {
                            ...this.#n,
                            ...a
                        }, a?._type && (this.#j = a._type), this.updateGcTime(this.options.gcTime), this.state && void 0 === this.state.data) {
                        let a = l(this.options);
                        void 0 !== a.data && (this.setState(k(a.data, a.dataUpdatedAt)), this.#k = a)
                    }
                }
                optionalRemove() {
                    this.observers.length || "idle" !== this.state.fetchStatus || this.#m.remove(this)
                }
                setData(a, b) {
                    let c = (0, d.o)(this.state.data, a, this.options);
                    return this.#h({
                        data: c,
                        type: "success",
                        dataUpdatedAt: b?.updatedAt,
                        manual: b?.manual
                    }), c
                }
                setState(a) {
                    this.#h({
                        type: "setState",
                        state: a
                    })
                }
                cancel(a) {
                    let b = this.#g?.promise;
                    return this.#g?.cancel(a), b ? b.then(d.m).catch(d.m) : Promise.resolve()
                }
                destroy() {
                    super.destroy(), this.cancel({
                        silent: !0
                    })
                }
                get resetState() {
                    return this.#k
                }
                reset() {
                    this.destroy(), this.setState(this.resetState)
                }
                isActive() {
                    return this.observers.some(a => !1 !== (0, d.q)(a.options.enabled, this))
                }
                isDisabled() {
                    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === d.u || !this.isFetched()
                }
                isFetched() {
                    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0
                }
                isStatic() {
                    return this.getObserversCount() > 0 && this.observers.some(a => "static" === (0, d.r)(a.options.staleTime, this))
                }
                isStale() {
                    return this.getObserversCount() > 0 ? this.observers.some(a => a.getCurrentResult().isStale) : void 0 === this.state.data || this.state.isInvalidated
                }
                isStaleByTime(a = 0) {
                    return void 0 === this.state.data || "static" !== a && (!!this.state.isInvalidated || !(0, d.w)(this.state.dataUpdatedAt, a))
                }
                onFocus() {
                    let a = this.observers.find(a => a.shouldFetchOnWindowFocus());
                    a?.refetch({
                        cancelRefetch: !1
                    }), this.#g?.continue()
                }
                onOnline() {
                    let a = this.observers.find(a => a.shouldFetchOnReconnect());
                    a?.refetch({
                        cancelRefetch: !1
                    }), this.#g?.continue()
                }
                addObserver(a) {
                    this.observers.includes(a) || (this.observers.push(a), this.clearGcTimeout(), this.#m.notify({
                        type: "observerAdded",
                        query: this,
                        observer: a
                    }))
                }
                removeObserver(a) {
                    this.observers.includes(a) && (this.observers = this.observers.filter(b => b !== a), this.observers.length || (this.#g && (this.#o || this.#p() ? this.#g.cancel({
                        revert: !0
                    }) : this.#g.cancelRetry()), this.scheduleGc()), this.#m.notify({
                        type: "observerRemoved",
                        query: this,
                        observer: a
                    }))
                }
                getObserversCount() {
                    return this.observers.length
                }
                #p() {
                    return "paused" === this.state.fetchStatus && "pending" === this.state.status
                }
                invalidate() {
                    this.state.isInvalidated || this.#h({
                        type: "invalidate"
                    })
                }
                async fetch(a, b) {
                    let c;
                    if ("idle" !== this.state.fetchStatus && this.#g?.status() !== "rejected") {
                        if (void 0 !== this.state.data && b?.cancelRefetch) this.cancel({
                            silent: !0
                        });
                        else if (this.#g) return this.#g.continueRetry(), this.#g.promise
                    }
                    if (a && this.setOptions(a), !this.options.queryFn) {
                        let a = this.observers.find(a => a.options.queryFn);
                        a && this.setOptions(a.options)
                    }
                    let e = new AbortController,
                        g = a => {
                            Object.defineProperty(a, "signal", {
                                enumerable: !0,
                                get: () => (this.#o = !0, e.signal)
                            })
                        },
                        i = () => {
                            let a, c = (0, d.d)(this.options, b),
                                e = (g(a = {
                                    client: this.#d,
                                    queryKey: this.queryKey,
                                    meta: this.meta
                                }), a);
                            return (this.#o = !1, this.options.persister) ? this.options.persister(c, e, this) : c(e)
                        },
                        j = (g(c = {
                            fetchOptions: b,
                            options: this.options,
                            queryKey: this.queryKey,
                            client: this.#d,
                            state: this.state,
                            fetchFn: i
                        }), c),
                        k = "infinite" === this.#j ? (0, h.c)(this.options.pages) : this.options.behavior;
                    k?.onFetch(j, this), this.#l = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== j.fetchOptions?.meta) && this.#h({
                        type: "fetch",
                        meta: j.fetchOptions?.meta
                    }), this.#g = (0, f.c)({
                        initialPromise: b?.initialPromise,
                        fn: j.fetchFn,
                        onCancel: a => {
                            a instanceof f.a && a.revert && this.setState({
                                ...this.#l,
                                fetchStatus: "idle"
                            }), e.abort()
                        },
                        onFail: (a, b) => {
                            this.#h({
                                type: "failed",
                                failureCount: a,
                                error: b
                            })
                        },
                        onPause: () => {
                            this.#h({
                                type: "pause"
                            })
                        },
                        onContinue: () => {
                            this.#h({
                                type: "continue"
                            })
                        },
                        retry: j.options.retry,
                        retryDelay: j.options.retryDelay,
                        networkMode: j.options.networkMode,
                        canRun: () => !0
                    });
                    try {
                        let a = await this.#g.start();
                        if (void 0 === a) throw Error(`${this.queryHash} data is undefined`);
                        return this.setData(a), this.#m.config.onSuccess?.(a, this), this.#m.config.onSettled?.(a, this.state.error, this), a
                    } catch (a) {
                        if (a instanceof f.a) {
                            if (a.silent) return this.#g.promise;
                            else if (a.revert) {
                                if (void 0 === this.state.data) throw a;
                                return this.state.data
                            }
                        }
                        throw this.#h({
                            type: "error",
                            error: a
                        }), this.#m.config.onError?.(a, this), this.#m.config.onSettled?.(this.state.data, a, this), a
                    } finally {
                        this.scheduleGc()
                    }
                }
                #h(a) {
                    let b = b => {
                        switch (a.type) {
                            case "failed":
                                return {
                                    ...b, fetchFailureCount: a.failureCount, fetchFailureReason: a.error
                                };
                            case "pause":
                                return {
                                    ...b, fetchStatus: "paused"
                                };
                            case "continue":
                                return {
                                    ...b, fetchStatus: "fetching"
                                };
                            case "fetch":
                                return {
                                    ...b, ...j(b.data, this.options), fetchMeta: a.meta ?? null
                                };
                            case "success":
                                let c = {
                                    ...b,
                                    ...k(a.data, a.dataUpdatedAt),
                                    dataUpdateCount: b.dataUpdateCount + 1,
                                    ...!a.manual && {
                                        fetchStatus: "idle",
                                        fetchFailureCount: 0,
                                        fetchFailureReason: null
                                    }
                                };
                                return this.#l = a.manual ? c : void 0, c;
                            case "error":
                                let d = a.error;
                                return {
                                    ...b, error: d, errorUpdateCount: b.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: b.fetchFailureCount + 1, fetchFailureReason: d, fetchStatus: "idle", status: "error", isInvalidated: !0
                                };
                            case "invalidate":
                                return {
                                    ...b, isInvalidated: !0
                                };
                            case "setState":
                                return {
                                    ...b, ...a.state
                                }
                        }
                    };
                    this.state = b(this.state), e.a.batch(() => {
                        this.observers.forEach(a => {
                            a.onQueryUpdate()
                        }), this.#m.notify({
                            query: this,
                            type: "updated",
                            action: a
                        })
                    })
                }
            };

        function j(a, b) {
            return {
                fetchFailureCount: 0,
                fetchFailureReason: null,
                fetchStatus: (0, f.b)(b.networkMode) ? "fetching" : "paused",
                ...void 0 === a && {
                    error: null,
                    status: "pending"
                }
            }
        }

        function k(a, b) {
            return {
                data: a,
                dataUpdatedAt: b ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success"
            }
        }

        function l(a) {
            let b = "function" == typeof a.initialData ? a.initialData() : a.initialData,
                c = void 0 !== b,
                d = c ? "function" == typeof a.initialDataUpdatedAt ? a.initialDataUpdatedAt() : a.initialDataUpdatedAt : 0;
            return {
                data: b,
                dataUpdateCount: 0,
                dataUpdatedAt: c ? d ?? Date.now() : 0,
                error: null,
                errorUpdateCount: 0,
                errorUpdatedAt: 0,
                fetchFailureCount: 0,
                fetchFailureReason: null,
                fetchMeta: null,
                isInvalidated: !1,
                status: c ? "success" : "pending",
                fetchStatus: "idle"
            }
        }
        c.d(b, {}, {
            a: i,
            b: j
        })
    }),
    OtRH: (function(a, b, c) {
        var d = c("D7Ms"),
            e = c("MtYY"),
            f = c("rbzn"),
            g = c("H4sS"),
            h = class extends g.a {
                constructor(a = {}) {
                    super(), this.config = a, this.#q = new Map
                }
                #q;
                build(a, b, c) {
                    let f = b.queryKey,
                        g = b.queryHash ?? (0, d.g)(f, b),
                        h = this.get(g);
                    return h || (h = new e.a({
                        client: a,
                        queryKey: f,
                        queryHash: g,
                        options: a.defaultQueryOptions(b),
                        state: c,
                        defaultOptions: a.getQueryDefaults(f)
                    }), this.add(h)), h
                }
                add(a) {
                    this.#q.has(a.queryHash) || (this.#q.set(a.queryHash, a), this.notify({
                        type: "added",
                        query: a
                    }))
                }
                remove(a) {
                    let b = this.#q.get(a.queryHash);
                    b && (a.destroy(), b === a && this.#q.delete(a.queryHash), this.notify({
                        type: "removed",
                        query: a
                    }))
                }
                clear() {
                    f.a.batch(() => {
                        this.getAll().forEach(a => {
                            this.remove(a)
                        })
                    })
                }
                get(a) {
                    return this.#q.get(a)
                }
                getAll() {
                    return [...this.#q.values()]
                }
                find(a) {
                    let b = {
                        exact: !0,
                        ...a
                    };
                    return this.getAll().find(a => (0, d.l)(b, a))
                }
                findAll(a = {}) {
                    let b = this.getAll();
                    return Object.keys(a).length > 0 ? b.filter(b => (0, d.l)(a, b)) : b
                }
                notify(a) {
                    f.a.batch(() => {
                        this.listeners.forEach(b => {
                            b(a)
                        })
                    })
                }
                onFocus() {
                    f.a.batch(() => {
                        this.getAll().forEach(a => {
                            a.onFocus()
                        })
                    })
                }
                onOnline() {
                    f.a.batch(() => {
                        this.getAll().forEach(a => {
                            a.onOnline()
                        })
                    })
                }
            };
        c.d(b, {}, {
            a: h
        })
    }),
    suje: (function(a, b, c) {
        c.d(b, {
            a: () => m
        });
        var d = c("D7Ms"),
            e = c("OtRH"),
            f = c("rbzn"),
            g = c("UKIm"),
            h = c("H4sS"),
            i = class extends h.a {
                constructor(a = {}) {
                    super(), this.config = a, this.#r = new Set, this.#s = new Map, this.#t = 0
                }
                #r;
                #s;
                #t;
                build(a, b, c) {
                    let d = new g.a({
                        client: a,
                        mutationCache: this,
                        mutationId: ++this.#t,
                        options: a.defaultMutationOptions(b),
                        state: c
                    });
                    return this.add(d), d
                }
                add(a) {
                    this.#r.add(a);
                    let b = j(a);
                    if ("string" == typeof b) {
                        let c = this.#s.get(b);
                        c ? c.push(a) : this.#s.set(b, [a])
                    }
                    this.notify({
                        type: "added",
                        mutation: a
                    })
                }
                remove(a) {
                    if (this.#r.delete(a)) {
                        let b = j(a);
                        if ("string" == typeof b) {
                            let c = this.#s.get(b);
                            if (c)
                                if (c.length > 1) {
                                    let b = c.indexOf(a); - 1 !== b && c.splice(b, 1)
                                } else c[0] === a && this.#s.delete(b)
                        }
                    }
                    this.notify({
                        type: "removed",
                        mutation: a
                    })
                }
                canRun(a) {
                    let b = j(a);
                    if ("string" != typeof b) return !0;
                    {
                        let c = this.#s.get(b),
                            d = c?.find(a => "pending" === a.state.status);
                        return !d || d === a
                    }
                }
                runNext(a) {
                    let b = j(a);
                    if ("string" != typeof b) return Promise.resolve();
                    {
                        let c = this.#s.get(b)?.find(b => b !== a && b.state.isPaused);
                        return c?.continue() ?? Promise.resolve()
                    }
                }
                clear() {
                    f.a.batch(() => {
                        this.#r.forEach(a => {
                            this.notify({
                                type: "removed",
                                mutation: a
                            })
                        }), this.#r.clear(), this.#s.clear()
                    })
                }
                getAll() {
                    return Array.from(this.#r)
                }
                find(a) {
                    let b = {
                        exact: !0,
                        ...a
                    };
                    return this.getAll().find(a => (0, d.k)(b, a))
                }
                findAll(a = {}) {
                    return this.getAll().filter(b => (0, d.k)(a, b))
                }
                notify(a) {
                    f.a.batch(() => {
                        this.listeners.forEach(b => {
                            b(a)
                        })
                    })
                }
                resumePausedMutations() {
                    let a = this.getAll().filter(a => a.state.isPaused);
                    return f.a.batch(() => Promise.all(a.map(a => a.continue().catch(d.m))))
                }
            };

        function j(a) {
            return a.options.scope?.id
        }
        var k = c("wYVE"),
            l = c("HY2m"),
            m = class {
                #u;
                #f;
                #n;
                #v;
                #w;
                #x;
                #y;
                #z;
                constructor(a = {}) {
                    this.#u = a.queryCache || new e.a, this.#f = a.mutationCache || new i, this.#n = a.defaultOptions || {}, this.#v = new Map, this.#w = new Map, this.#x = 0
                }
                mount() {
                    this.#x++, 1 === this.#x && (this.#y = k.a.subscribe(async a => {
                        a && (await this.resumePausedMutations(), this.#u.onFocus())
                    }), this.#z = l.a.subscribe(async a => {
                        a && (await this.resumePausedMutations(), this.#u.onOnline())
                    }))
                }
                unmount() {
                    this.#x--, 0 === this.#x && (this.#y?.(), this.#y = void 0, this.#z?.(), this.#z = void 0)
                }
                isFetching(a) {
                    return this.#u.findAll({
                        ...a,
                        fetchStatus: "fetching"
                    }).length
                }
                isMutating(a) {
                    return this.#f.findAll({
                        ...a,
                        status: "pending"
                    }).length
                }
                getQueryData(a) {
                    let b = this.defaultQueryOptions({
                        queryKey: a
                    });
                    return this.#u.get(b.queryHash)?.state.data
                }
                ensureQueryData(a) {
                    let b = this.defaultQueryOptions(a),
                        c = this.#u.build(this, b),
                        e = c.state.data;
                    return void 0 === e ? this.fetchQuery(a) : (a.revalidateIfStale && c.isStaleByTime((0, d.r)(b.staleTime, c)) && this.prefetchQuery(b), Promise.resolve(e))
                }
                getQueriesData(a) {
                    return this.#u.findAll(a).map(({
                        queryKey: a,
                        state: b
                    }) => [a, b.data])
                }
                setQueryData(a, b, c) {
                    let e = this.defaultQueryOptions({
                            queryKey: a
                        }),
                        f = this.#u.get(e.queryHash),
                        g = f?.state.data,
                        h = (0, d.e)(b, g);
                    if (void 0 !== h) return this.#u.build(this, e).setData(h, {
                        ...c,
                        manual: !0
                    })
                }
                setQueriesData(a, b, c) {
                    return f.a.batch(() => this.#u.findAll(a).map(({
                        queryKey: a
                    }) => [a, this.setQueryData(a, b, c)]))
                }
                getQueryState(a) {
                    let b = this.defaultQueryOptions({
                        queryKey: a
                    });
                    return this.#u.get(b.queryHash)?.state
                }
                removeQueries(a) {
                    let b = this.#u;
                    f.a.batch(() => {
                        b.findAll(a).forEach(a => {
                            b.remove(a)
                        })
                    })
                }
                resetQueries(a, b) {
                    let c = this.#u;
                    return f.a.batch(() => (c.findAll(a).forEach(a => {
                        a.reset()
                    }), this.refetchQueries({
                        type: "active",
                        ...a
                    }, b)))
                }
                cancelQueries(a, b = {}) {
                    let c = {
                        revert: !0,
                        ...b
                    };
                    return Promise.all(f.a.batch(() => this.#u.findAll(a).map(a => a.cancel(c)))).then(d.m).catch(d.m)
                }
                invalidateQueries(a, b = {}) {
                    return f.a.batch(() => (this.#u.findAll(a).forEach(a => {
                        a.invalidate()
                    }), a?.refetchType === "none") ? Promise.resolve() : this.refetchQueries({
                        ...a,
                        type: a?.refetchType ?? a?.type ?? "active"
                    }, b))
                }
                refetchQueries(a, b = {}) {
                    let c = {
                        ...b,
                        cancelRefetch: b.cancelRefetch ?? !0
                    };
                    return Promise.all(f.a.batch(() => this.#u.findAll(a).filter(a => !a.isDisabled() && !a.isStatic()).map(a => {
                        let b = a.fetch(void 0, c);
                        return c.throwOnError || (b = b.catch(d.m)), "paused" === a.state.fetchStatus ? Promise.resolve() : b
                    }))).then(d.m)
                }
                fetchQuery(a) {
                    let b = this.defaultQueryOptions(a);
                    void 0 === b.retry && (b.retry = !1);
                    let c = this.#u.build(this, b);
                    return c.isStaleByTime((0, d.r)(b.staleTime, c)) ? c.fetch(b) : Promise.resolve(c.state.data)
                }
                prefetchQuery(a) {
                    return this.fetchQuery(a).then(d.m).catch(d.m)
                }
                fetchInfiniteQuery(a) {
                    return a._type = "infinite", this.fetchQuery(a)
                }
                prefetchInfiniteQuery(a) {
                    return this.fetchInfiniteQuery(a).then(d.m).catch(d.m)
                }
                ensureInfiniteQueryData(a) {
                    return a._type = "infinite", this.ensureQueryData(a)
                }
                resumePausedMutations() {
                    return l.a.isOnline() ? this.#f.resumePausedMutations() : Promise.resolve()
                }
                getQueryCache() {
                    return this.#u
                }
                getMutationCache() {
                    return this.#f
                }
                getDefaultOptions() {
                    return this.#n
                }
                setDefaultOptions(a) {
                    this.#n = a
                }
                setQueryDefaults(a, b) {
                    this.#v.set((0, d.f)(a), {
                        queryKey: a,
                        defaultOptions: b
                    })
                }
                getQueryDefaults(a) {
                    let b = [...this.#v.values()],
                        c = {};
                    return b.forEach(b => {
                        (0, d.n)(a, b.queryKey) && Object.assign(c, b.defaultOptions)
                    }), c
                }
                setMutationDefaults(a, b) {
                    this.#w.set((0, d.f)(a), {
                        mutationKey: a,
                        defaultOptions: b
                    })
                }
                getMutationDefaults(a) {
                    let b = [...this.#w.values()],
                        c = {};
                    return b.forEach(b => {
                        (0, d.n)(a, b.mutationKey) && Object.assign(c, b.defaultOptions)
                    }), c
                }
                defaultQueryOptions(a) {
                    if (a._defaulted) return a;
                    let b = {
                        ...this.#n.queries,
                        ...this.getQueryDefaults(a.queryKey),
                        ...a,
                        _defaulted: !0
                    };
                    return b.queryHash || (b.queryHash = (0, d.g)(b.queryKey, b)), void 0 === b.refetchOnReconnect && (b.refetchOnReconnect = "always" !== b.networkMode), void 0 === b.throwOnError && (b.throwOnError = !!b.suspense), !b.networkMode && b.persister && (b.networkMode = "offlineFirst"), b.queryFn === d.u && (b.enabled = !1), b
                }
                defaultMutationOptions(a) {
                    return a?._defaulted ? a : {
                        ...this.#n.mutations,
                        ...a?.mutationKey && this.getMutationDefaults(a.mutationKey),
                        ...a,
                        _defaulted: !0
                    }
                }
                clear() {
                    this.#u.clear(), this.#f.clear()
                }
            }
    }),
    suf3: (function(a, b, c) {
        var d = c("wYVE"),
            e = c("wo6g"),
            f = c("rbzn"),
            g = c("MtYY"),
            h = c("H4sS"),
            i = c("uyLo"),
            j = c("D7Ms"),
            k = c("pEZk"),
            l = class extends h.a {
                constructor(a, b) {
                    super(), this.options = b, this.#d = a, this.#A = null, this.#B = (0, i.a)(), this.bindMethods(), this.setOptions(b)
                }
                #d;
                #C = void 0;
                #D = void 0;
                #E = void 0;
                #F;
                #G;
                #B;
                #A;
                #H;
                #I;
                #J;
                #K;
                #L;
                #M;
                #N = new Set;
                bindMethods() {
                    this.refetch = this.refetch.bind(this)
                }
                onSubscribe() {
                    1 === this.listeners.size && (this.#C.addObserver(this), m(this.#C, this.options) ? this.#O() : this.updateResult(), this.#P())
                }
                onUnsubscribe() {
                    this.hasListeners() || this.destroy()
                }
                shouldFetchOnReconnect() {
                    return n(this.#C, this.options, this.options.refetchOnReconnect)
                }
                shouldFetchOnWindowFocus() {
                    return n(this.#C, this.options, this.options.refetchOnWindowFocus)
                }
                destroy() {
                    this.listeners = new Set, this.#Q(), this.#R(), this.#C.removeObserver(this)
                }
                setOptions(a) {
                    let b = this.options,
                        c = this.#C;
                    if (this.options = this.#d.defaultQueryOptions(a), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled && "function" != typeof this.options.enabled && "boolean" != typeof(0, j.q)(this.options.enabled, this.#C)) throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
                    this.#S(), this.#C.setOptions(this.options), b._defaulted && !(0, j.s)(this.options, b) && this.#d.getQueryCache().notify({
                        type: "observerOptionsUpdated",
                        query: this.#C,
                        observer: this
                    });
                    let d = this.hasListeners();
                    d && o(this.#C, c, this.options, b) && this.#O(), this.updateResult(), d && (this.#C !== c || (0, j.q)(this.options.enabled, this.#C) !== (0, j.q)(b.enabled, this.#C) || (0, j.r)(this.options.staleTime, this.#C) !== (0, j.r)(b.staleTime, this.#C)) && this.#T();
                    let e = this.#U();
                    d && (this.#C !== c || (0, j.q)(this.options.enabled, this.#C) !== (0, j.q)(b.enabled, this.#C) || e !== this.#M) && this.#V(e)
                }
                getOptimisticResult(a) {
                    var b, c;
                    let d = this.#d.getQueryCache().build(this.#d, a),
                        e = this.createResult(d, a);
                    return b = this, c = e, (0, j.s)(b.getCurrentResult(), c) || (this.#E = e, this.#G = this.options, this.#F = this.#C.state), e
                }
                getCurrentResult() {
                    return this.#E
                }
                trackResult(a, b) {
                    return new Proxy(a, {
                        get: (a, c) => (this.trackProp(c), b?.(c), "promise" === c && (this.trackProp("data"), this.options.experimental_prefetchInRender || "pending" !== this.#B.status || this.#B.reject(Error("experimental_prefetchInRender feature flag is not enabled"))), Reflect.get(a, c))
                    })
                }
                trackProp(a) {
                    this.#N.add(a)
                }
                getCurrentQuery() {
                    return this.#C
                }
                refetch({
                    ...a
                } = {}) {
                    return this.fetch({
                        ...a
                    })
                }
                fetchOptimistic(a) {
                    let b = this.#d.defaultQueryOptions(a),
                        c = this.#d.getQueryCache().build(this.#d, b);
                    return c.fetch().then(() => this.createResult(c, b))
                }
                fetch(a) {
                    return this.#O({
                        ...a,
                        cancelRefetch: a.cancelRefetch ?? !0
                    }).then(() => (this.updateResult(), this.#E))
                }
                #O(a) {
                    this.#S();
                    let b = this.#C.fetch(this.options, a);
                    return a?.throwOnError || (b = b.catch(j.m)), b
                }
                #T() {
                    this.#Q();
                    let a = (0, j.r)(this.options.staleTime, this.#C);
                    if (e.a.isServer() || this.#E.isStale || !(0, j.i)(a)) return;
                    let b = (0, j.w)(this.#E.dataUpdatedAt, a);
                    this.#K = k.b.setTimeout(() => {
                        this.#E.isStale || this.updateResult()
                    }, b + 1)
                }
                #U() {
                    return ("function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.#C) : this.options.refetchInterval) ?? !1
                }
                #V(a) {
                    this.#R(), this.#M = a, !e.a.isServer() && !1 !== (0, j.q)(this.options.enabled, this.#C) && (0, j.i)(this.#M) && 0 !== this.#M && (this.#L = k.b.setInterval(() => {
                        (this.options.refetchIntervalInBackground || d.a.isFocused()) && this.#O()
                    }, this.#M))
                }
                #P() {
                    this.#T(), this.#V(this.#U())
                }
                #Q() {
                    void 0 !== this.#K && (k.b.clearTimeout(this.#K), this.#K = void 0)
                }
                #R() {
                    void 0 !== this.#L && (k.b.clearInterval(this.#L), this.#L = void 0)
                }
                createResult(a, b) {
                    let c, d = this.#C,
                        e = this.options,
                        f = this.#E,
                        h = this.#F,
                        k = this.#G,
                        l = a !== d ? a.state : this.#D,
                        {
                            state: n
                        } = a,
                        q = {
                            ...n
                        },
                        r = !1;
                    if (b._optimisticResults) {
                        let c = this.hasListeners(),
                            f = !c && m(a, b),
                            h = c && o(a, d, b, e);
                        (f || h) && (q = {
                            ...q,
                            ...(0, g.b)(n.data, a.options)
                        }), "isRestoring" === b._optimisticResults && (q.fetchStatus = "idle")
                    }
                    let {
                        error: s,
                        errorUpdatedAt: t,
                        status: u
                    } = q;
                    c = q.data;
                    let v = !1;
                    if (void 0 !== b.placeholderData && void 0 === c && "pending" === u) {
                        let a;
                        f?.isPlaceholderData && b.placeholderData === k?.placeholderData ? (a = f.data, v = !0) : a = "function" == typeof b.placeholderData ? b.placeholderData(this.#J?.state.data, this.#J) : b.placeholderData, void 0 !== a && (u = "success", c = (0, j.o)(f?.data, a, b), r = !0)
                    }
                    if (b.select && void 0 !== c && !v)
                        if (f && c === h?.data && b.select === this.#H) c = this.#I;
                        else try {
                            this.#H = b.select, c = b.select(c), c = (0, j.o)(f?.data, c, b), this.#I = c, this.#A = null
                        } catch (a) {
                            this.#A = a
                        }
                    this.#A && (s = this.#A, c = this.#I, t = Date.now(), u = "error");
                    let w = "fetching" === q.fetchStatus,
                        x = "pending" === u,
                        y = "error" === u,
                        z = x && w,
                        A = void 0 !== c,
                        B = {
                            status: u,
                            fetchStatus: q.fetchStatus,
                            isPending: x,
                            isSuccess: "success" === u,
                            isError: y,
                            isInitialLoading: z,
                            isLoading: z,
                            data: c,
                            dataUpdatedAt: q.dataUpdatedAt,
                            error: s,
                            errorUpdatedAt: t,
                            failureCount: q.fetchFailureCount,
                            failureReason: q.fetchFailureReason,
                            errorUpdateCount: q.errorUpdateCount,
                            isFetched: a.isFetched(),
                            isFetchedAfterMount: q.dataUpdateCount > l.dataUpdateCount || q.errorUpdateCount > l.errorUpdateCount,
                            isFetching: w,
                            isRefetching: w && !x,
                            isLoadingError: y && !A,
                            isPaused: "paused" === q.fetchStatus,
                            isPlaceholderData: r,
                            isRefetchError: y && A,
                            isStale: p(a, b),
                            refetch: this.refetch,
                            promise: this.#B,
                            isEnabled: !1 !== (0, j.q)(b.enabled, a)
                        };
                    if (this.options.experimental_prefetchInRender) {
                        let b = void 0 !== B.data,
                            c = "error" === B.status && !b,
                            e = a => {
                                c ? a.reject(B.error) : b && a.resolve(B.data)
                            },
                            f = () => {
                                e(this.#B = B.promise = (0, i.a)())
                            },
                            g = this.#B;
                        switch (g.status) {
                            case "pending":
                                a.queryHash === d.queryHash && e(g);
                                break;
                            case "fulfilled":
                                (c || B.data !== g.value) && f();
                                break;
                            case "rejected":
                                c && B.error === g.reason || f()
                        }
                    }
                    return B
                }
                updateResult() {
                    let a = this.#E,
                        b = this.createResult(this.#C, this.options);
                    if (this.#F = this.#C.state, this.#G = this.options, void 0 !== this.#F.data && (this.#J = this.#C), (0, j.s)(b, a)) return;
                    this.#E = b;
                    let c = () => {
                        if (!a) return !0;
                        let {
                            notifyOnChangeProps: b
                        } = this.options, c = "function" == typeof b ? b() : b;
                        if ("all" === c || !c && !this.#N.size) return !0;
                        let d = new Set(c ?? this.#N);
                        return this.options.throwOnError && d.add("error"), Object.keys(this.#E).some(b => this.#E[b] !== a[b] && d.has(b))
                    };
                    this.#W({
                        listeners: c()
                    })
                }
                #S() {
                    let a = this.#d.getQueryCache().build(this.#d, this.options);
                    if (a === this.#C) return;
                    let b = this.#C;
                    this.#C = a, this.#D = a.state, this.hasListeners() && (b?.removeObserver(this), a.addObserver(this))
                }
                onQueryUpdate() {
                    this.updateResult(), this.hasListeners() && this.#P()
                }
                #W(a) {
                    f.a.batch(() => {
                        a.listeners && this.listeners.forEach(a => {
                            a(this.#E)
                        }), this.#d.getQueryCache().notify({
                            query: this.#C,
                            type: "observerResultsUpdated"
                        })
                    })
                }
            };

        function m(a, b) {
            return !1 !== (0, j.q)(b.enabled, a) && void 0 === a.state.data && ("error" !== a.state.status || !1 !== (0, j.q)(b.retryOnMount, a)) || void 0 !== a.state.data && n(a, b, b.refetchOnMount)
        }

        function n(a, b, c) {
            if (!1 !== (0, j.q)(b.enabled, a) && "static" !== (0, j.r)(b.staleTime, a)) {
                let d = "function" == typeof c ? c(a) : c;
                return "always" === d || !1 !== d && p(a, b)
            }
            return !1
        }

        function o(a, b, c, d) {
            return (a !== b || !1 === (0, j.q)(d.enabled, a)) && (!c.suspense || "error" !== a.state.status) && p(a, c)
        }

        function p(a, b) {
            return !1 !== (0, j.q)(b.enabled, a) && a.isStaleByTime((0, j.r)(b.staleTime, a))
        }
        c.d(b, {}, {
            a: l
        })
    }),
    OLOS: (function(a, b, c) {
        var d = c("pEZk"),
            e = c("wo6g"),
            f = c("D7Ms"),
            g = class {
                #X;
                destroy() {
                    this.clearGcTimeout()
                }
                scheduleGc() {
                    this.clearGcTimeout(), (0, f.i)(this.gcTime) && (this.#X = d.b.setTimeout(() => {
                        this.optionalRemove()
                    }, this.gcTime))
                }
                updateGcTime(a) {
                    this.gcTime = Math.max(this.gcTime || 0, a ?? (e.a.isServer() ? 1 / 0 : 3e5))
                }
                clearGcTimeout() {
                    void 0 !== this.#X && (d.b.clearTimeout(this.#X), this.#X = void 0)
                }
            };
        c.d(b, {}, {
            a: g
        })
    }),
    NxBK: (function(a, b, c) {
        var d = c("wYVE"),
            e = c("HY2m"),
            f = c("uyLo"),
            g = c("wo6g"),
            h = c("D7Ms");

        function i(a) {
            return Math.min(1e3 * 2 ** a, 3e4)
        }

        function j(a) {
            return (a ?? "online") !== "online" || e.a.isOnline()
        }
        var k = class extends Error {
            constructor(a) {
                super("CancelledError"), this.revert = a?.revert, this.silent = a?.silent
            }
        };
        c.d(b, {}, {
            a: k,
            b: j,
            c: function(a) {
                let b, c = !1,
                    l = 0,
                    m = (0, f.a)(),
                    n = () => d.a.isFocused() && ("always" === a.networkMode || e.a.isOnline()) && a.canRun(),
                    o = () => j(a.networkMode) && a.canRun(),
                    p = a => {
                        "pending" === m.status && (b?.(), m.resolve(a))
                    },
                    q = a => {
                        "pending" === m.status && (b?.(), m.reject(a))
                    },
                    r = () => new Promise(c => {
                        b = a => {
                            ("pending" !== m.status || n()) && c(a)
                        }, a.onPause?.()
                    }).then(() => {
                        b = void 0, "pending" === m.status && a.onContinue?.()
                    }),
                    s = () => {
                        let b;
                        if ("pending" !== m.status) return;
                        let d = 0 === l ? a.initialPromise : void 0;
                        try {
                            b = d ?? a.fn()
                        } catch (a) {
                            b = Promise.reject(a)
                        }
                        Promise.resolve(b).then(p).catch(b => {
                            if ("pending" !== m.status) return;
                            let d = a.retry ?? 3 * !g.a.isServer(),
                                e = a.retryDelay ?? i,
                                f = "function" == typeof e ? e(l, b) : e,
                                j = !0 === d || "number" == typeof d && l < d || "function" == typeof d && d(l, b);
                            c || !j ? q(b) : (l++, a.onFail?.(l, b), (0, h.v)(f).then(() => n() ? void 0 : r()).then(() => {
                                c ? q(b) : s()
                            }))
                        })
                    };
                return {
                    promise: m,
                    status: () => m.status,
                    cancel: b => {
                        if ("pending" === m.status) {
                            let c = new k(b);
                            q(c), a.onCancel?.(c)
                        }
                    },
                    continue: () => (b?.(), m),
                    cancelRetry: () => {
                        c = !0
                    },
                    continueRetry: () => {
                        c = !1
                    },
                    canStart: o,
                    start: () => (o() ? s() : r().then(s), m)
                }
            }
        })
    }),
    H4sS: (function(a, b, c) {
        c.d(b, {}, {
            a: class {
                constructor() {
                    this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
                }
                subscribe(a) {
                    return this.listeners.add(a), this.onSubscribe(), () => {
                        this.listeners.delete(a), this.onUnsubscribe()
                    }
                }
                hasListeners() {
                    return this.listeners.size > 0
                }
                onSubscribe() {}
                onUnsubscribe() {}
            }
        })
    }),
    uyLo: (function(a, b, c) {
        c.d(b, {}, {
            a: function() {
                let a, b, c = new Promise((c, d) => {
                    a = c, b = d
                });

                function d(a) {
                    Object.assign(c, a), delete c.resolve, delete c.reject
                }
                return c.status = "pending", c.catch(() => {}), c.resolve = b => {
                    d({
                        status: "fulfilled",
                        value: b
                    }), a(b)
                }, c.reject = a => {
                    d({
                        status: "rejected",
                        reason: a
                    }), b(a)
                }, c
            }
        })
    }),
    pEZk: (function(a, b, c) {
        var d = {
                setTimeout: (a, b) => setTimeout(a, b),
                clearTimeout: a => clearTimeout(a),
                setInterval: (a, b) => setInterval(a, b),
                clearInterval: a => clearInterval(a)
            },
            e = new class {
                #Y = d;
                #Z = !1;
                setTimeoutProvider(a) {
                    this.#Y = a
                }
                setTimeout(a, b) {
                    return this.#Y.setTimeout(a, b)
                }
                clearTimeout(a) {
                    this.#Y.clearTimeout(a)
                }
                setInterval(a, b) {
                    return this.#Y.setInterval(a, b)
                }
                clearInterval(a) {
                    this.#Y.clearInterval(a)
                }
            };
        c.d(b, {}, {
            a: function(a) {
                setTimeout(a, 0)
            },
            b: e
        })
    }),
    D7Ms: (function(a, b, c) {
        var d = c("pEZk"),
            e = "u" < typeof window || "Deno" in globalThis;

        function f(a, b) {
            return (b?.queryKeyHashFn || g)(a)
        }

        function g(a) {
            return JSON.stringify(a, (a, b) => l(b) ? Object.keys(b).sort().reduce((a, c) => (a[c] = b[c], a), {}) : b)
        }

        function h(a, b) {
            return a === b || typeof a == typeof b && !!a && !!b && "object" == typeof a && "object" == typeof b && Object.keys(b).every(c => h(a[c], b[c]))
        }
        var i = Object.prototype.hasOwnProperty;

        function j(a, b, c = 0) {
            if (a === b) return a;
            if (c > 500) return b;
            let d = k(a) && k(b);
            if (!d && !(l(a) && l(b))) return b;
            let e = (d ? a : Object.keys(a)).length,
                f = d ? b : Object.keys(b),
                g = f.length,
                h = d ? Array(g) : {},
                m = 0;
            for (let k = 0; k < g; k++) {
                let g = d ? k : f[k],
                    l = a[g],
                    n = b[g];
                if (l === n) {
                    h[g] = l, (d ? k < e : i.call(a, g)) && m++;
                    continue
                }
                if (null === l || null === n || "object" != typeof l || "object" != typeof n) {
                    h[g] = n;
                    continue
                }
                let o = j(l, n, c + 1);
                h[g] = o, o === l && m++
            }
            return e === g && m === e ? a : h
        }

        function k(a) {
            return Array.isArray(a) && a.length === Object.keys(a).length
        }

        function l(a) {
            if (!m(a)) return !1;
            let b = a.constructor;
            if (void 0 === b) return !0;
            let c = b.prototype;
            return !!m(c) && !!c.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(a) === Object.prototype
        }

        function m(a) {
            return "[object Object]" === Object.prototype.toString.call(a)
        }
        var n = Symbol();
        c.d(b, {}, {
            a: function(a, b, c) {
                let d, e = !1;
                return Object.defineProperty(a, "signal", {
                    enumerable: !0,
                    get: () => (d ??= b(), e || (e = !0, d.aborted ? c() : d.addEventListener("abort", c, {
                        once: !0
                    })), d)
                }), a
            },
            b: function(a, b, c = 0) {
                let d = [...a, b];
                return c && d.length > c ? d.slice(1) : d
            },
            c: function(a, b, c = 0) {
                let d = [b, ...a];
                return c && d.length > c ? d.slice(0, -1) : d
            },
            d: function(a, b) {
                return !a.queryFn && b?.initialPromise ? () => b.initialPromise : a.queryFn && a.queryFn !== n ? a.queryFn : () => Promise.reject(Error(`Missing queryFn: '${a.queryHash}'`))
            },
            e: function(a, b) {
                return "function" == typeof a ? a(b) : a
            },
            f: g,
            g: f,
            h: e,
            i: function(a) {
                return "number" == typeof a && a >= 0 && 1 / 0 !== a
            },
            j: function(a) {
                return a
            },
            k: function(a, b) {
                let {
                    exact: c,
                    status: d,
                    predicate: e,
                    mutationKey: f
                } = a;
                if (f) {
                    if (!b.options.mutationKey) return !1;
                    if (c) {
                        if (g(b.options.mutationKey) !== g(f)) return !1
                    } else if (!h(b.options.mutationKey, f)) return !1
                }
                return (!d || b.state.status === d) && (!e || !!e(b))
            },
            l: function(a, b) {
                let {
                    type: c = "all",
                    exact: d,
                    fetchStatus: e,
                    predicate: g,
                    queryKey: i,
                    stale: j
                } = a;
                if (i) {
                    if (d) {
                        if (b.queryHash !== f(i, b.options)) return !1
                    } else if (!h(b.queryKey, i)) return !1
                }
                if ("all" !== c) {
                    let a = b.isActive();
                    if ("active" === c && !a || "inactive" === c && a) return !1
                }
                return ("boolean" != typeof j || b.isStale() === j) && (!e || e === b.state.fetchStatus) && (!g || !!g(b))
            },
            m: function() {},
            n: h,
            o: function(a, b, c) {
                return "function" == typeof c.structuralSharing ? c.structuralSharing(a, b) : !1 !== c.structuralSharing ? j(a, b) : b
            },
            p: j,
            q: function(a, b) {
                return "function" == typeof a ? a(b) : a
            },
            r: function(a, b) {
                return "function" == typeof a ? a(b) : a
            },
            s: function(a, b) {
                if (!b || Object.keys(a).length !== Object.keys(b).length) return !1;
                for (let c in a)
                    if (a[c] !== b[c]) return !1;
                return !0
            },
            t: function(a, b) {
                return "function" == typeof a ? a(...b) : !!a
            },
            u: n,
            v: function(a) {
                return new Promise(b => {
                    d.b.setTimeout(b, a)
                })
            },
            w: function(a, b) {
                return Math.max(a + (b || 0) - Date.now(), 0)
            }
        })
    }),
    Xnfv: (function(a, b, c) {
        var d = c("zd8w"),
            e = d.createContext(!1);
        e.Provider, c.d(b, {}, {
            a: () => d.useContext(e)
        })
    }),
    irkb: (function(a, b, c) {
        var d = c("zd8w"),
            e = c("ABep"),
            f = d.createContext(void 0);
        c.d(b, {}, {
            a: f,
            b: ({
                client: a,
                children: b
            }) => (d.useEffect(() => (a.mount(), () => {
                a.unmount()
            }), [a]), (0, e.jsx)(f.Provider, {
                value: a,
                children: b
            })),
            c: a => {
                let b = d.useContext(f);
                if (a) return a;
                if (!b) throw Error("No QueryClient set, use QueryClientProvider to set one");
                return b
            }
        })
    }),
    jfj0: (function(a, b, c) {
        let d;
        var e = c("zd8w");
        c("ABep");
        var f = e.createContext((d = !1, {
            clearReset: () => {
                d = !1
            },
            reset: () => {
                d = !0
            },
            isReset: () => d
        }));
        c.d(b, {}, {
            a: () => e.useContext(f)
        })
    }),
    trGF: (function(a, b, c) {
        var d = c("zd8w"),
            e = c("D7Ms");
        c.d(b, {}, {
            a: (a, b, c) => {
                let d = c?.state.error && "function" == typeof a.throwOnError ? (0, e.t)(a.throwOnError, [c.state.error, c]) : a.throwOnError;
                (a.suspense || a.experimental_prefetchInRender || d) && !b.isReset() && (a.retryOnMount = !1)
            },
            b: ({
                result: a,
                errorResetBoundary: b,
                throwOnError: c,
                query: d,
                suspense: f
            }) => a.isError && !b.isReset() && !a.isFetching && d && (f && void 0 === a.data || (0, e.t)(c, [a.error, d])),
            c: a => {
                d.useEffect(() => {
                    a.clearReset()
                }, [a])
            }
        })
    }),
    WCbN: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a) {
                return a
            }
        })
    }),
    S2r0: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a) {
                return a
            }
        })
    }),
    VKEB: (function(a, b, c) {
        c.d(b, {}, {
            a: a => {
                if (a.suspense) {
                    let b = a => "static" === a ? a : Math.max(a ?? 1e3, 1e3),
                        c = a.staleTime;
                    a.staleTime = "function" == typeof c ? (...a) => b(c(...a)) : b(c), "number" == typeof a.gcTime && (a.gcTime = Math.max(a.gcTime, 1e3))
                }
            },
            b: (a, b, c) => b.fetchOptimistic(a).catch(() => {
                c.clearReset()
            }),
            c: (a, b) => a?.suspense && b.isPending,
            d: (a, b) => a.isLoading && a.isFetching && !b
        })
    }),
    fwQJ: (function(a, b, c) {
        var d = c("zd8w"),
            e = c("rbzn"),
            f = c("D7Ms"),
            g = c("wo6g"),
            h = c("irkb"),
            i = c("jfj0"),
            j = c("trGF"),
            k = c("Xnfv"),
            l = c("VKEB");
        c.d(b, {}, {
            a: function(a, b, c) {
                let m = (0, k.a)(),
                    n = (0, i.a)(),
                    o = (0, h.c)(c),
                    p = o.defaultQueryOptions(a);
                o.getDefaultOptions().queries?._experimental_beforeQuery?.(p);
                let q = o.getQueryCache().get(p.queryHash),
                    r = !1 !== a.subscribed;
                p._optimisticResults = m ? "isRestoring" : r ? "optimistic" : void 0, (0, l.a)(p), (0, j.a)(p, n, q), (0, j.c)(n);
                let s = !o.getQueryCache().get(p.queryHash),
                    [t] = d.useState(() => new b(o, p)),
                    u = t.getOptimisticResult(p),
                    v = !m && r;
                if (d.useSyncExternalStore(d.useCallback(a => {
                        let b = v ? t.subscribe(e.a.batchCalls(a)) : f.m;
                        return t.updateResult(), b
                    }, [t, v]), () => t.getCurrentResult(), () => t.getCurrentResult()), d.useEffect(() => {
                        t.setOptions(p)
                    }, [p, t]), (0, l.c)(p, u)) throw (0, l.b)(p, t, n);
                if ((0, j.b)({
                        result: u,
                        errorResetBoundary: n,
                        throwOnError: p.throwOnError,
                        query: q,
                        suspense: p.suspense
                    })) throw u.error;
                if (o.getDefaultOptions().queries?._experimental_afterQuery?.(p, u), p.experimental_prefetchInRender && !g.a.isServer() && (0, l.d)(u, m)) {
                    let a = s ? (0, l.b)(p, t, n) : q?.promise;
                    a?.catch(f.m).finally(() => {
                        t.updateResult()
                    })
                }
                return p.notifyOnChangeProps ? u : t.trackResult(u)
            }
        })
    }),
    uris: (function(a, b, c) {
        var d = c("CdjL"),
            e = c("fwQJ");
        c.d(b, {}, {
            a: function(a, b) {
                return (0, e.a)(a, d.a, b)
            }
        })
    }),
    xSOA: (function(a, b, c) {
        c.d(b, {
            a: () => k
        });
        var d = c("zd8w"),
            e = c("UKIm"),
            f = c("rbzn"),
            g = c("H4sS"),
            h = c("D7Ms"),
            i = class extends g.a {
                #d;
                #E = void 0;
                #$;
                #_;
                constructor(a, b) {
                    super(), this.#d = a, this.setOptions(b), this.bindMethods(), this.#aa()
                }
                bindMethods() {
                    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                }
                setOptions(a) {
                    let b = this.options;
                    this.options = this.#d.defaultMutationOptions(a), (0, h.s)(this.options, b) || this.#d.getMutationCache().notify({
                        type: "observerOptionsUpdated",
                        mutation: this.#$,
                        observer: this
                    }), b?.mutationKey && this.options.mutationKey && (0, h.f)(b.mutationKey) !== (0, h.f)(this.options.mutationKey) ? this.reset() : this.#$?.state.status === "pending" && this.#$.setOptions(this.options)
                }
                onUnsubscribe() {
                    this.hasListeners() || this.#$?.removeObserver(this)
                }
                onMutationUpdate(a) {
                    this.#aa(), this.#W(a)
                }
                getCurrentResult() {
                    return this.#E
                }
                reset() {
                    this.#$?.removeObserver(this), this.#$ = void 0, this.#aa(), this.#W()
                }
                mutate(a, b) {
                    return this.#_ = b, this.#$?.removeObserver(this), this.#$ = this.#d.getMutationCache().build(this.#d, this.options), this.#$.addObserver(this), this.#$.execute(a)
                }
                #aa() {
                    let a = this.#$?.state ?? (0, e.b)();
                    this.#E = {
                        ...a,
                        isPending: "pending" === a.status,
                        isSuccess: "success" === a.status,
                        isError: "error" === a.status,
                        isIdle: "idle" === a.status,
                        mutate: this.mutate,
                        reset: this.reset
                    }
                }
                #W(a) {
                    f.a.batch(() => {
                        if (this.#_ && this.hasListeners()) {
                            let b = this.#E.variables,
                                c = this.#E.context,
                                d = {
                                    client: this.#d,
                                    meta: this.options.meta,
                                    mutationKey: this.options.mutationKey
                                };
                            if (a?.type === "success") {
                                try {
                                    this.#_.onSuccess?.(a.data, b, c, d)
                                } catch (a) {
                                    Promise.reject(a)
                                }
                                try {
                                    this.#_.onSettled?.(a.data, null, b, c, d)
                                } catch (a) {
                                    Promise.reject(a)
                                }
                            } else if (a?.type === "error") {
                                try {
                                    this.#_.onError?.(a.error, b, c, d)
                                } catch (a) {
                                    Promise.reject(a)
                                }
                                try {
                                    this.#_.onSettled?.(void 0, a.error, b, c, d)
                                } catch (a) {
                                    Promise.reject(a)
                                }
                            }
                        }
                        this.listeners.forEach(a => {
                            a(this.#E)
                        })
                    })
                }
            },
            j = c("irkb");

        function k(a, b) {
            let c = (0, j.c)(b),
                [e] = d.useState(() => new i(c, a));
            d.useEffect(() => {
                e.setOptions(a)
            }, [e, a]);
            let g = d.useSyncExternalStore(d.useCallback(a => e.subscribe(f.a.batchCalls(a)), [e]), () => e.getCurrentResult(), () => e.getCurrentResult()),
                k = d.useCallback((a, b) => {
                    e.mutate(a, b).catch(h.m)
                }, [e]);
            if (g.error && (0, h.t)(e.options.throwOnError, [g.error])) throw g.error;
            return {
                ...g,
                mutate: k,
                mutateAsync: g.mutate
            }
        }
    }),
    cE8H: (function(a, b, c) {
        var d = c("zd8w"),
            e = c("D7Ms"),
            f = c("rbzn"),
            g = c("irkb");

        function h(a, b) {
            return a.findAll(b.filters).map(a => b.select ? b.select(a) : a.state)
        }

        function i(a = {}, b) {
            let c = (0, g.c)(b).getMutationCache(),
                j = d.useRef(a),
                k = d.useRef(null);
            return null === k.current && (k.current = h(c, a)), d.useEffect(() => {
                j.current = a
            }), d.useSyncExternalStore(d.useCallback(a => c.subscribe(() => {
                let b = (0, e.p)(k.current, h(c, j.current));
                k.current !== b && (k.current = b, f.a.schedule(a))
            }), [c]), () => k.current, () => k.current)
        }
        c.d(b, {}, {
            a: function(a, b) {
                let c = (0, g.c)(b);
                return i({
                    filters: {
                        ...a,
                        status: "pending"
                    }
                }, c).length
            },
            b: i
        })
    }),
    fxCc: (function(a, b, c) {
        c.d(b, {
            a: () => p
        });
        var d = c("zd8w"),
            e = c("rbzn"),
            f = c("suf3"),
            g = c("H4sS"),
            h = c("D7Ms");

        function i(a, b) {
            let c = new Set(b);
            return a.filter(a => !c.has(a))
        }
        var j = class extends g.a {
                #d;
                #ab;
                #q;
                #ac;
                #e;
                #ad;
                #ae;
                #af;
                #ag;
                #ah = [];
                constructor(a, b, c) {
                    super(), this.#d = a, this.#ac = c, this.#q = [], this.#e = [], this.#ab = [], this.setQueries(b)
                }
                onSubscribe() {
                    1 === this.listeners.size && this.#e.forEach(a => {
                        a.subscribe(b => {
                            this.#ai(a, b)
                        })
                    })
                }
                onUnsubscribe() {
                    this.listeners.size || this.destroy()
                }
                destroy() {
                    this.listeners = new Set, this.#e.forEach(a => {
                        a.destroy()
                    })
                }
                setQueries(a, b) {
                    this.#q = a, this.#ac = b, e.a.batch(() => {
                        let a = this.#e,
                            b = this.#aj(this.#q);
                        b.forEach(a => a.observer.setOptions(a.defaultedQueryOptions));
                        let c = b.map(a => a.observer),
                            d = c.map(a => a.getCurrentResult()),
                            e = a.length !== c.length,
                            f = c.some((b, c) => b !== a[c]),
                            g = e || f,
                            j = !!g || d.some((a, b) => {
                                let c = this.#ab[b];
                                return !c || !(0, h.s)(a, c)
                            });
                        (g || j) && (g && (this.#ah = b, this.#e = c), this.#ab = d, this.hasListeners() && (g && (i(a, c).forEach(a => {
                            a.destroy()
                        }), i(c, a).forEach(a => {
                            a.subscribe(b => {
                                this.#ai(a, b)
                            })
                        })), this.#W()))
                    })
                }
                getCurrentResult() {
                    return this.#ab
                }
                getQueries() {
                    return this.#e.map(a => a.getCurrentQuery())
                }
                getObservers() {
                    return this.#e
                }
                getOptimisticResult(a, b) {
                    let c = this.#aj(a),
                        d = c.map(a => a.observer.getOptimisticResult(a.defaultedQueryOptions)),
                        e = c.map(a => a.defaultedQueryOptions.queryHash);
                    return [d, a => this.#ak(a ?? d, b, e), () => this.#al(d, c)]
                }
                #al(a, b) {
                    return b.map((c, d) => {
                        let e = a[d];
                        return c.defaultedQueryOptions.notifyOnChangeProps ? e : c.observer.trackResult(e, a => {
                            b.forEach(b => {
                                b.observer.trackProp(a)
                            })
                        })
                    })
                }
                #ak(a, b, c) {
                    if (b) {
                        let d = this.#ag,
                            e = void 0 !== c && void 0 !== d && (d.length !== c.length || c.some((a, b) => a !== d[b]));
                        return (!this.#ad || this.#ab !== this.#af || e || b !== this.#ae) && (this.#ae = b, this.#af = this.#ab, void 0 !== c && (this.#ag = c), this.#ad = (0, h.p)(this.#ad, b(a))), this.#ad
                    }
                    return a
                }
                #am() {
                    return this.#ac?.combine !== void 0 && this.#e.some((a, b) => a.options.suspense && this.#ab[b]?.data === void 0)
                }
                #aj(a) {
                    let b = new Map;
                    this.#e.forEach(a => {
                        let c = a.options.queryHash;
                        if (!c) return;
                        let d = b.get(c);
                        d ? d.push(a) : b.set(c, [a])
                    });
                    let c = [];
                    return a.forEach(a => {
                        let d = this.#d.defaultQueryOptions(a),
                            e = b.get(d.queryHash)?.shift() ?? new f.a(this.#d, d);
                        c.push({
                            defaultedQueryOptions: d,
                            observer: e
                        })
                    }), c
                }
                #ai(a, b) {
                    let c = this.#e.indexOf(a);
                    if (-1 !== c) {
                        var d;
                        let a;
                        this.#ab = (d = this.#ab, (a = d.slice(0))[c] = b, a), this.#W()
                    }
                }
                #W() {
                    if (this.hasListeners()) {
                        let a = this.#al(this.#ab, this.#ah),
                            b = this.#am(),
                            c = this.#ad,
                            d = b ? c : this.#ak(a, this.#ac?.combine);
                        (b || c !== d) && e.a.batch(() => {
                            this.listeners.forEach(a => {
                                a(this.#ab)
                            })
                        })
                    }
                }
            },
            k = c("irkb"),
            l = c("Xnfv"),
            m = c("jfj0"),
            n = c("trGF"),
            o = c("VKEB");

        function p({
            queries: a,
            ...b
        }, c) {
            let g = (0, k.c)(c),
                i = (0, l.a)(),
                q = (0, m.a)(),
                r = d.useMemo(() => a.map(a => {
                    let b = g.defaultQueryOptions(a);
                    return b._optimisticResults = i ? "isRestoring" : "optimistic", b
                }), [a, g, i]);
            r.forEach(a => {
                (0, o.a)(a);
                let b = g.getQueryCache().get(a.queryHash);
                (0, n.a)(a, q, b)
            }), (0, n.c)(q);
            let [s] = d.useState(() => new j(g, r, b)), [t, u, v] = s.getOptimisticResult(r, b.combine), w = !i && !1 !== b.subscribed;
            d.useSyncExternalStore(d.useCallback(a => w ? s.subscribe(e.a.batchCalls(a)) : h.m, [s, w]), () => s.getCurrentResult(), () => s.getCurrentResult()), d.useEffect(() => {
                s.setQueries(r, b)
            }, [r, b, s]);
            let x = t.some((a, b) => (0, o.c)(r[b], a)) ? t.flatMap((a, b) => {
                let c = r[b];
                if (c && (0, o.c)(c, a)) {
                    let a = new f.a(g, c);
                    return (0, o.b)(c, a, q)
                }
                return []
            }) : [];
            if (x.length > 0) throw Promise.all(x);
            let y = t.find((a, b) => {
                let c = r[b];
                return c && (0, n.b)({
                    result: a,
                    errorResetBoundary: q,
                    throwOnError: c.throwOnError,
                    query: g.getQueryCache().get(c.queryHash),
                    suspense: c.suspense
                })
            });
            if (y?.error) throw y.error;
            return u(v())
        }
    }),
    T0Rc: (function(a, b, c) {
        var d = c("suf3"),
            e = c("fwQJ");
        c.d(b, {}, {
            a: function(a, b) {
                return (0, e.a)(a, d.a, b)
            }
        })
    }),
    P6QS: (function(a, b, c) {
        var d = c("zd8w"),
            e = c("v7qY");
        let f = Array(12).fill(0),
            g = ({
                visible: a,
                className: b
            }) => d.createElement("div", {
                className: ["sonner-loading-wrapper", b].filter(Boolean).join(" "),
                "data-visible": a
            }, d.createElement("div", {
                className: "sonner-spinner"
            }, f.map((a, b) => d.createElement("div", {
                className: "sonner-loading-bar",
                key: `spinner-bar-${b}`
            })))),
            h = d.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                height: "20",
                width: "20"
            }, d.createElement("path", {
                fillRule: "evenodd",
                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
                clipRule: "evenodd"
            })),
            i = d.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                height: "20",
                width: "20"
            }, d.createElement("path", {
                fillRule: "evenodd",
                d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
                clipRule: "evenodd"
            })),
            j = d.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                height: "20",
                width: "20"
            }, d.createElement("path", {
                fillRule: "evenodd",
                d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
                clipRule: "evenodd"
            })),
            k = d.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                height: "20",
                width: "20"
            }, d.createElement("path", {
                fillRule: "evenodd",
                d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
                clipRule: "evenodd"
            })),
            l = d.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "12",
                height: "12",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, d.createElement("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
            }), d.createElement("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
            })),
            m = 1,
            n = new class {
                constructor() {
                    this.subscribe = a => (this.subscribers.push(a), () => {
                        let b = this.subscribers.indexOf(a);
                        this.subscribers.splice(b, 1)
                    }), this.publish = a => {
                        this.subscribers.forEach(b => b(a))
                    }, this.addToast = a => {
                        this.publish(a), this.toasts = [...this.toasts, a]
                    }, this.create = a => {
                        var b;
                        let {
                            message: c,
                            ...d
                        } = a, e = "number" == typeof(null == a ? void 0 : a.id) || (null == (b = a.id) ? void 0 : b.length) > 0 ? a.id : m++, f = this.toasts.find(a => a.id === e), g = void 0 === a.dismissible || a.dismissible;
                        return this.dismissedToasts.has(e) && this.dismissedToasts.delete(e), f ? this.toasts = this.toasts.map(b => b.id === e ? (this.publish({
                            ...b,
                            ...a,
                            id: e,
                            title: c
                        }), {
                            ...b,
                            ...a,
                            id: e,
                            dismissible: g,
                            title: c
                        }) : b) : this.addToast({
                            title: c,
                            ...d,
                            dismissible: g,
                            id: e
                        }), e
                    }, this.dismiss = a => (a ? (this.dismissedToasts.add(a), requestAnimationFrame(() => this.subscribers.forEach(b => b({
                        id: a,
                        dismiss: !0
                    })))) : this.toasts.forEach(a => {
                        this.subscribers.forEach(b => b({
                            id: a.id,
                            dismiss: !0
                        }))
                    }), a), this.message = (a, b) => this.create({
                        ...b,
                        message: a
                    }), this.error = (a, b) => this.create({
                        ...b,
                        message: a,
                        type: "error"
                    }), this.success = (a, b) => this.create({
                        ...b,
                        type: "success",
                        message: a
                    }), this.info = (a, b) => this.create({
                        ...b,
                        type: "info",
                        message: a
                    }), this.warning = (a, b) => this.create({
                        ...b,
                        type: "warning",
                        message: a
                    }), this.loading = (a, b) => this.create({
                        ...b,
                        type: "loading",
                        message: a
                    }), this.promise = (a, b) => {
                        let c, e;
                        if (!b) return;
                        void 0 !== b.loading && (e = this.create({
                            ...b,
                            promise: a,
                            type: "loading",
                            message: b.loading,
                            description: "function" != typeof b.description ? b.description : void 0
                        }));
                        let f = Promise.resolve(a instanceof Function ? a() : a),
                            g = void 0 !== e,
                            h = f.then(async a => {
                                if (c = ["resolve", a], d.isValidElement(a)) g = !1, this.create({
                                    id: e,
                                    type: "default",
                                    message: a
                                });
                                else if (o(a) && !a.ok) {
                                    g = !1;
                                    let c = "function" == typeof b.error ? await b.error(`HTTP error! status: ${a.status}`) : b.error,
                                        f = "function" == typeof b.description ? await b.description(`HTTP error! status: ${a.status}`) : b.description,
                                        h = "object" != typeof c || d.isValidElement(c) ? {
                                            message: c
                                        } : c;
                                    this.create({
                                        id: e,
                                        type: "error",
                                        description: f,
                                        ...h
                                    })
                                } else if (a instanceof Error) {
                                    g = !1;
                                    let c = "function" == typeof b.error ? await b.error(a) : b.error,
                                        f = "function" == typeof b.description ? await b.description(a) : b.description,
                                        h = "object" != typeof c || d.isValidElement(c) ? {
                                            message: c
                                        } : c;
                                    this.create({
                                        id: e,
                                        type: "error",
                                        description: f,
                                        ...h
                                    })
                                } else if (void 0 !== b.success) {
                                    g = !1;
                                    let c = "function" == typeof b.success ? await b.success(a) : b.success,
                                        f = "function" == typeof b.description ? await b.description(a) : b.description,
                                        h = "object" != typeof c || d.isValidElement(c) ? {
                                            message: c
                                        } : c;
                                    this.create({
                                        id: e,
                                        type: "success",
                                        description: f,
                                        ...h
                                    })
                                }
                            }).catch(async a => {
                                if (c = ["reject", a], void 0 !== b.error) {
                                    g = !1;
                                    let c = "function" == typeof b.error ? await b.error(a) : b.error,
                                        f = "function" == typeof b.description ? await b.description(a) : b.description,
                                        h = "object" != typeof c || d.isValidElement(c) ? {
                                            message: c
                                        } : c;
                                    this.create({
                                        id: e,
                                        type: "error",
                                        description: f,
                                        ...h
                                    })
                                }
                            }).finally(() => {
                                g && (this.dismiss(e), e = void 0), null == b.finally || b.finally.call(b)
                            }),
                            i = () => new Promise((a, b) => h.then(() => "reject" === c[0] ? b(c[1]) : a(c[1])).catch(b));
                        return "string" != typeof e && "number" != typeof e ? {
                            unwrap: i
                        } : Object.assign(e, {
                            unwrap: i
                        })
                    }, this.custom = (a, b) => {
                        let c = (null == b ? void 0 : b.id) || m++;
                        return this.create({
                            jsx: a(c),
                            id: c,
                            ...b
                        }), c
                    }, this.getActiveToasts = () => this.toasts.filter(a => !this.dismissedToasts.has(a.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
                }
            },
            o = a => a && "object" == typeof a && "ok" in a && "boolean" == typeof a.ok && "status" in a && "number" == typeof a.status,
            p = Object.assign((a, b) => {
                let c = (null == b ? void 0 : b.id) || m++;
                return n.addToast({
                    title: a,
                    ...b,
                    id: c
                }), c
            }, {
                success: n.success,
                info: n.info,
                warning: n.warning,
                error: n.error,
                custom: n.custom,
                message: n.message,
                promise: n.promise,
                dismiss: n.dismiss,
                loading: n.loading
            }, {
                getHistory: () => n.toasts,
                getToasts: () => n.getActiveToasts()
            });

        function q(a) {
            return void 0 !== a.label
        }

        function r(...a) {
            return a.filter(Boolean).join(" ")
        }! function(a) {
            if (!a || "u" < typeof document) return;
            let b = document.head || document.getElementsByTagName("head")[0],
                c = document.createElement("style");
            c.type = "text/css", b.appendChild(c), c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(document.createTextNode(a))
        }("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
        let s = a => {
            var b, c, e, f, m, n, o, p, s, t, u, v, w;
            let {
                invert: x,
                toast: y,
                unstyled: z,
                interacting: A,
                setHeights: B,
                visibleToasts: C,
                heights: D,
                index: E,
                toasts: F,
                expanded: G,
                removeToast: H,
                defaultRichColors: I,
                closeButton: J,
                style: K,
                cancelButtonStyle: L,
                actionButtonStyle: M,
                className: N = "",
                descriptionClassName: O = "",
                duration: P,
                position: Q,
                gap: R,
                expandByDefault: S,
                classNames: T,
                icons: U,
                closeButtonAriaLabel: V = "Close toast"
            } = a, [W, X] = d.useState(null), [Y, Z] = d.useState(null), [$, _] = d.useState(!1), [aa, ab] = d.useState(!1), [ac, ad] = d.useState(!1), [ae, af] = d.useState(!1), [ag, ah] = d.useState(!1), [ai, aj] = d.useState(0), [ak, al] = d.useState(0), am = d.useRef(y.duration || P || 4e3), an = d.useRef(null), ao = d.useRef(null), ap = 0 === E, aq = E + 1 <= C, ar = y.type, as = !1 !== y.dismissible, at = y.className || "", au = y.descriptionClassName || "", av = d.useMemo(() => D.findIndex(a => a.toastId === y.id) || 0, [D, y.id]), aw = d.useMemo(() => {
                var a;
                return null != (a = y.closeButton) ? a : J
            }, [y.closeButton, J]), ax = d.useMemo(() => y.duration || P || 4e3, [y.duration, P]), ay = d.useRef(0), az = d.useRef(0), aA = d.useRef(0), aB = d.useRef(null), [aC, aD] = Q.split("-"), aE = d.useMemo(() => D.reduce((a, b, c) => c >= av ? a : a + b.height, 0), [D, av]), aF = (() => {
                let [a, b] = d.useState(document.hidden);
                return d.useEffect(() => {
                    let a = () => {
                        b(document.hidden)
                    };
                    return document.addEventListener("visibilitychange", a), () => window.removeEventListener("visibilitychange", a)
                }, []), a
            })(), aG = y.invert || x, aH = "loading" === ar;
            az.current = d.useMemo(() => av * R + aE, [av, aE]), d.useEffect(() => {
                am.current = ax
            }, [ax]), d.useEffect(() => {
                _(!0)
            }, []), d.useEffect(() => {
                let a = ao.current;
                if (a) {
                    let b = a.getBoundingClientRect().height;
                    return al(b), B(a => [{
                        toastId: y.id,
                        height: b,
                        position: y.position
                    }, ...a]), () => B(a => a.filter(a => a.toastId !== y.id))
                }
            }, [B, y.id]), d.useLayoutEffect(() => {
                if (!$) return;
                let a = ao.current,
                    b = a.style.height;
                a.style.height = "auto";
                let c = a.getBoundingClientRect().height;
                a.style.height = b, al(c), B(a => a.find(a => a.toastId === y.id) ? a.map(a => a.toastId === y.id ? {
                    ...a,
                    height: c
                } : a) : [{
                    toastId: y.id,
                    height: c,
                    position: y.position
                }, ...a])
            }, [$, y.title, y.description, B, y.id, y.jsx, y.action, y.cancel]);
            let aI = d.useCallback(() => {
                ab(!0), aj(az.current), B(a => a.filter(a => a.toastId !== y.id)), setTimeout(() => {
                    H(y)
                }, 200)
            }, [y, H, B, az]);
            d.useEffect(() => {
                let a;
                if ((!y.promise || "loading" !== ar) && 1 / 0 !== y.duration && "loading" !== y.type) {
                    if (G || A || aF) {
                        if (aA.current < ay.current) {
                            let a = new Date().getTime() - ay.current;
                            am.current = am.current - a
                        }
                        aA.current = new Date().getTime()
                    } else 1 / 0 !== am.current && (ay.current = new Date().getTime(), a = setTimeout(() => {
                        null == y.onAutoClose || y.onAutoClose.call(y, y), aI()
                    }, am.current));
                    return () => clearTimeout(a)
                }
            }, [G, A, y, ar, aF, aI]), d.useEffect(() => {
                y.delete && (aI(), null == y.onDismiss || y.onDismiss.call(y, y))
            }, [aI, y.delete]);
            let aJ = y.icon || (null == U ? void 0 : U[ar]) || (a => {
                switch (a) {
                    case "success":
                        return h;
                    case "info":
                        return j;
                    case "warning":
                        return i;
                    case "error":
                        return k;
                    default:
                        return null
                }
            })(ar);
            return d.createElement("li", {
                tabIndex: 0,
                ref: ao,
                className: r(N, at, null == T ? void 0 : T.toast, null == y || null == (b = y.classNames) ? void 0 : b.toast, null == T ? void 0 : T.default, null == T ? void 0 : T[ar], null == y || null == (c = y.classNames) ? void 0 : c[ar]),
                "data-sonner-toast": "",
                "data-rich-colors": null != (t = y.richColors) ? t : I,
                "data-styled": !(y.jsx || y.unstyled || z),
                "data-mounted": $,
                "data-promise": !!y.promise,
                "data-swiped": ag,
                "data-removed": aa,
                "data-visible": aq,
                "data-y-position": aC,
                "data-x-position": aD,
                "data-index": E,
                "data-front": ap,
                "data-swiping": ac,
                "data-dismissible": as,
                "data-type": ar,
                "data-invert": aG,
                "data-swipe-out": ae,
                "data-swipe-direction": Y,
                "data-expanded": !!(G || S && $),
                "data-testid": y.testId,
                style: {
                    "--index": E,
                    "--toasts-before": E,
                    "--z-index": F.length - E,
                    "--offset": `${aa?ai:az.current}px`,
                    "--initial-height": S ? "auto" : `${ak}px`,
                    ...K,
                    ...y.style
                },
                onDragEnd: () => {
                    ad(!1), X(null), aB.current = null
                },
                onPointerDown: a => {
                    2 === a.button || aH || !as || (an.current = new Date, aj(az.current), a.target.setPointerCapture(a.pointerId), "BUTTON" !== a.target.tagName && (ad(!0), aB.current = {
                        x: a.clientX,
                        y: a.clientY
                    }))
                },
                onPointerUp: () => {
                    var a, b, c, d, e;
                    if (ae || !as) return;
                    aB.current = null;
                    let f = Number((null == (a = ao.current) ? void 0 : a.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
                        g = Number((null == (b = ao.current) ? void 0 : b.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
                        h = new Date().getTime() - (null == (c = an.current) ? void 0 : c.getTime()),
                        i = "x" === W ? f : g,
                        j = Math.abs(i) / h;
                    if (Math.abs(i) >= 45 || j > .11) {
                        aj(az.current), null == y.onDismiss || y.onDismiss.call(y, y), "x" === W ? Z(f > 0 ? "right" : "left") : Z(g > 0 ? "down" : "up"), aI(), af(!0);
                        return
                    }
                    null == (d = ao.current) || d.style.setProperty("--swipe-amount-x", "0px"), null == (e = ao.current) || e.style.setProperty("--swipe-amount-y", "0px"), ah(!1), ad(!1), X(null)
                },
                onPointerMove: b => {
                    var c, d, e, f;
                    if (!aB.current || !as || (null == (c = window.getSelection()) ? void 0 : c.toString().length) > 0) return;
                    let g = b.clientY - aB.current.y,
                        h = b.clientX - aB.current.x,
                        i = null != (f = a.swipeDirections) ? f : function(a) {
                            let [b, c] = a.split("-"), d = [];
                            return b && d.push(b), c && d.push(c), d
                        }(Q);
                    !W && (Math.abs(h) > 1 || Math.abs(g) > 1) && X(Math.abs(h) > Math.abs(g) ? "x" : "y");
                    let j = {
                            x: 0,
                            y: 0
                        },
                        k = a => 1 / (1.5 + Math.abs(a) / 20);
                    if ("y" === W) {
                        if (i.includes("top") || i.includes("bottom"))
                            if (i.includes("top") && g < 0 || i.includes("bottom") && g > 0) j.y = g;
                            else {
                                let a = g * k(g);
                                j.y = Math.abs(a) < Math.abs(g) ? a : g
                            }
                    } else if ("x" === W && (i.includes("left") || i.includes("right")))
                        if (i.includes("left") && h < 0 || i.includes("right") && h > 0) j.x = h;
                        else {
                            let a = h * k(h);
                            j.x = Math.abs(a) < Math.abs(h) ? a : h
                        }(Math.abs(j.x) > 0 || Math.abs(j.y) > 0) && ah(!0), null == (d = ao.current) || d.style.setProperty("--swipe-amount-x", `${j.x}px`), null == (e = ao.current) || e.style.setProperty("--swipe-amount-y", `${j.y}px`)
                }
            }, aw && !y.jsx && "loading" !== ar ? d.createElement("button", {
                "aria-label": V,
                "data-disabled": aH,
                "data-close-button": !0,
                onClick: aH || !as ? () => {} : () => {
                    aI(), null == y.onDismiss || y.onDismiss.call(y, y)
                },
                className: r(null == T ? void 0 : T.closeButton, null == y || null == (e = y.classNames) ? void 0 : e.closeButton)
            }, null != (u = null == U ? void 0 : U.close) ? u : l) : null, (ar || y.icon || y.promise) && null !== y.icon && ((null == U ? void 0 : U[ar]) !== null || y.icon) ? d.createElement("div", {
                "data-icon": "",
                className: r(null == T ? void 0 : T.icon, null == y || null == (f = y.classNames) ? void 0 : f.icon)
            }, y.promise || "loading" === y.type && !y.icon ? y.icon || ((null == U ? void 0 : U.loading) ? d.createElement("div", {
                className: r(null == T ? void 0 : T.loader, null == y || null == (w = y.classNames) ? void 0 : w.loader, "sonner-loader"),
                "data-visible": "loading" === ar
            }, U.loading) : d.createElement(g, {
                className: r(null == T ? void 0 : T.loader, null == y || null == (v = y.classNames) ? void 0 : v.loader),
                visible: "loading" === ar
            })) : null, "loading" !== y.type ? aJ : null) : null, d.createElement("div", {
                "data-content": "",
                className: r(null == T ? void 0 : T.content, null == y || null == (m = y.classNames) ? void 0 : m.content)
            }, d.createElement("div", {
                "data-title": "",
                className: r(null == T ? void 0 : T.title, null == y || null == (n = y.classNames) ? void 0 : n.title)
            }, y.jsx ? y.jsx : "function" == typeof y.title ? y.title() : y.title), y.description ? d.createElement("div", {
                "data-description": "",
                className: r(O, au, null == T ? void 0 : T.description, null == y || null == (o = y.classNames) ? void 0 : o.description)
            }, "function" == typeof y.description ? y.description() : y.description) : null), d.isValidElement(y.cancel) ? y.cancel : y.cancel && q(y.cancel) ? d.createElement("button", {
                "data-button": !0,
                "data-cancel": !0,
                style: y.cancelButtonStyle || L,
                onClick: a => {
                    !q(y.cancel) || as && (null == y.cancel.onClick || y.cancel.onClick.call(y.cancel, a), aI())
                },
                className: r(null == T ? void 0 : T.cancelButton, null == y || null == (p = y.classNames) ? void 0 : p.cancelButton)
            }, y.cancel.label) : null, d.isValidElement(y.action) ? y.action : y.action && q(y.action) ? d.createElement("button", {
                "data-button": !0,
                "data-action": !0,
                style: y.actionButtonStyle || M,
                onClick: a => {
                    !q(y.action) || (null == y.action.onClick || y.action.onClick.call(y.action, a), a.defaultPrevented || aI())
                },
                className: r(null == T ? void 0 : T.actionButton, null == y || null == (s = y.classNames) ? void 0 : s.actionButton)
            }, y.action.label) : null)
        };

        function t() {
            if ("u" < typeof window || "u" < typeof document) return "ltr";
            let a = document.documentElement.getAttribute("dir");
            return "auto" !== a && a ? a : window.getComputedStyle(document.documentElement).direction
        }
        let u = d.forwardRef(function(a, b) {
            let {
                id: c,
                invert: f,
                position: g = "bottom-right",
                hotkey: h = ["altKey", "KeyT"],
                expand: i,
                closeButton: j,
                className: k,
                offset: l,
                mobileOffset: m,
                theme: o = "light",
                richColors: p,
                duration: q,
                style: r,
                visibleToasts: u = 3,
                toastOptions: v,
                dir: w = t(),
                gap: x = 14,
                icons: y,
                containerAriaLabel: z = "Notifications"
            } = a, [A, B] = d.useState([]), C = d.useMemo(() => c ? A.filter(a => a.toasterId === c) : A.filter(a => !a.toasterId), [A, c]), D = d.useMemo(() => Array.from(new Set([g].concat(C.filter(a => a.position).map(a => a.position)))), [C, g]), [E, F] = d.useState([]), [G, H] = d.useState(!1), [I, J] = d.useState(!1), [K, L] = d.useState("system" !== o ? o : "u" > typeof window && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), M = d.useRef(null), N = h.join("+").replace(/Key/g, "").replace(/Digit/g, ""), O = d.useRef(null), P = d.useRef(!1), Q = d.useCallback(a => {
                B(b => {
                    var c;
                    return (null == (c = b.find(b => b.id === a.id)) ? void 0 : c.delete) || n.dismiss(a.id), b.filter(({
                        id: b
                    }) => b !== a.id)
                })
            }, []);
            return d.useEffect(() => n.subscribe(a => {
                a.dismiss ? requestAnimationFrame(() => {
                    B(b => b.map(b => b.id === a.id ? {
                        ...b,
                        delete: !0
                    } : b))
                }) : setTimeout(() => {
                    e.flushSync(() => {
                        B(b => {
                            let c = b.findIndex(b => b.id === a.id);
                            return -1 !== c ? [...b.slice(0, c), {
                                ...b[c],
                                ...a
                            }, ...b.slice(c + 1)] : [a, ...b]
                        })
                    })
                })
            }), [A]), d.useEffect(() => {
                if ("system" !== o) return void L(o);
                if ("system" === o && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? L("dark") : L("light")), "u" < typeof window) return;
                let a = window.matchMedia("(prefers-color-scheme: dark)");
                try {
                    a.addEventListener("change", ({
                        matches: a
                    }) => {
                        a ? L("dark") : L("light")
                    })
                } catch (b) {
                    a.addListener(({
                        matches: a
                    }) => {
                        try {
                            a ? L("dark") : L("light")
                        } catch (a) {
                            console.error(a)
                        }
                    })
                }
            }, [o]), d.useEffect(() => {
                A.length <= 1 && H(!1)
            }, [A]), d.useEffect(() => {
                let a = a => {
                    var b, c;
                    h.every(b => a[b] || a.code === b) && (H(!0), null == (c = M.current) || c.focus()), "Escape" === a.code && (document.activeElement === M.current || (null == (b = M.current) ? void 0 : b.contains(document.activeElement))) && H(!1)
                };
                return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a)
            }, [h]), d.useEffect(() => {
                if (M.current) return () => {
                    O.current && (O.current.focus({
                        preventScroll: !0
                    }), O.current = null, P.current = !1)
                }
            }, [M.current]), d.createElement("section", {
                ref: b,
                "aria-label": `${z} ${N}`,
                tabIndex: -1,
                "aria-live": "polite",
                "aria-relevant": "additions text",
                "aria-atomic": "false",
                suppressHydrationWarning: !0
            }, D.map((b, c) => {
                var e;
                let g, [h, n] = b.split("-");
                return C.length ? d.createElement("ol", {
                    key: b,
                    dir: "auto" === w ? t() : w,
                    tabIndex: -1,
                    ref: M,
                    className: k,
                    "data-sonner-toaster": !0,
                    "data-sonner-theme": K,
                    "data-y-position": h,
                    "data-x-position": n,
                    style: {
                        "--front-toast-height": `${(null==(e=E[0])?void 0:e.height)||0}px`,
                        "--width": "356px",
                        "--gap": `${x}px`,
                        ...r,
                        ...(g = {}, [l, m].forEach((a, b) => {
                            let c = 1 === b,
                                d = c ? "--mobile-offset" : "--offset",
                                e = c ? "16px" : "24px";

                            function f(a) {
                                ["top", "right", "bottom", "left"].forEach(b => {
                                    g[`${d}-${b}`] = "number" == typeof a ? `${a}px` : a
                                })
                            }
                            "number" == typeof a || "string" == typeof a ? f(a) : "object" == typeof a ? ["top", "right", "bottom", "left"].forEach(b => {
                                void 0 === a[b] ? g[`${d}-${b}`] = e : g[`${d}-${b}`] = "number" == typeof a[b] ? `${a[b]}px` : a[b]
                            }) : f(e)
                        }), g)
                    },
                    onBlur: a => {
                        P.current && !a.currentTarget.contains(a.relatedTarget) && (P.current = !1, O.current && (O.current.focus({
                            preventScroll: !0
                        }), O.current = null))
                    },
                    onFocus: a => {
                        !(a.target instanceof HTMLElement && "false" === a.target.dataset.dismissible) && (P.current || (P.current = !0, O.current = a.relatedTarget))
                    },
                    onMouseEnter: () => H(!0),
                    onMouseMove: () => H(!0),
                    onMouseLeave: () => {
                        I || H(!1)
                    },
                    onDragEnd: () => H(!1),
                    onPointerDown: a => {
                        a.target instanceof HTMLElement && "false" === a.target.dataset.dismissible || J(!0)
                    },
                    onPointerUp: () => J(!1)
                }, C.filter(a => !a.position && 0 === c || a.position === b).map((c, e) => {
                    var g, h;
                    return d.createElement(s, {
                        key: c.id,
                        icons: y,
                        index: e,
                        toast: c,
                        defaultRichColors: p,
                        duration: null != (g = null == v ? void 0 : v.duration) ? g : q,
                        className: null == v ? void 0 : v.className,
                        descriptionClassName: null == v ? void 0 : v.descriptionClassName,
                        invert: f,
                        visibleToasts: u,
                        closeButton: null != (h = null == v ? void 0 : v.closeButton) ? h : j,
                        interacting: I,
                        position: b,
                        style: null == v ? void 0 : v.style,
                        unstyled: null == v ? void 0 : v.unstyled,
                        classNames: null == v ? void 0 : v.classNames,
                        cancelButtonStyle: null == v ? void 0 : v.cancelButtonStyle,
                        actionButtonStyle: null == v ? void 0 : v.actionButtonStyle,
                        closeButtonAriaLabel: null == v ? void 0 : v.closeButtonAriaLabel,
                        removeToast: Q,
                        toasts: C.filter(a => a.position == c.position),
                        heights: E.filter(a => a.position == c.position),
                        setHeights: F,
                        expandByDefault: i,
                        gap: x,
                        expanded: G,
                        swipeDirections: a.swipeDirections
                    })
                })) : null
            }))
        });
        c.d(b, {}, {
            a: u,
            b: p
        })
    }),
    fDOC: (function(a, b, c) {
        let d;
        c.d(b, {
            a: () => u,
            b: () => v
        });
        let e = /["&'<>`]/g,
            f = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            g = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
            h = /[|\\{}()[\]^$+*?.]/g,
            i = new WeakMap;

        function j(a, b) {
            var c;
            let d;
            if (a = a.replace(b.subset ? (c = b.subset, (d = i.get(c)) || (d = function(a) {
                    let b = [],
                        c = -1;
                    for (; ++c < a.length;) b.push(a[c].replace(h, "\\$&"));
                    return RegExp("(?:" + b.join("|") + ")", "g")
                }(c), i.set(c, d)), d) : e, j), b.subset || b.escapeOnly) return a;
            return a.replace(f, function(a, c, d) {
                return b.format((a.charCodeAt(0) - 55296) * 1024 + a.charCodeAt(1) - 56320 + 65536, d.charCodeAt(c + 2), b)
            }).replace(g, j);

            function j(a, c, d) {
                return b.format(a.charCodeAt(0), d.charCodeAt(c + 1), b)
            }
        }
        let k = /[\dA-Fa-f]/,
            l = /\d/;
        var m = c("hAsG"),
            n = c("VHhE");
        let o = ["cent", "copy", "divide", "gt", "lt", "not", "para", "times"],
            p = {}.hasOwnProperty,
            q = {};
        for (d in n.a) p.call(n.a, d) && (q[n.a[d]] = d);
        let r = /[^\dA-Za-z]/;

        function s(a, b, c) {
            var d, e;
            let f, g, h = (d = c.omitOptionalSemicolons, f = "&#x" + a.toString(16).toUpperCase(), d && b && !k.test(String.fromCharCode(b)) ? f : f + ";");
            if ((c.useNamedReferences || c.useShortestReferences) && (g = function(a, b, c, d) {
                    let e = String.fromCharCode(a);
                    if (p.call(q, e)) {
                        let a = q[e],
                            f = "&" + a;
                        return c && m.a.includes(a) && !o.includes(a) && (!d || b && 61 !== b && r.test(String.fromCharCode(b))) ? f : f + ";"
                    }
                    return ""
                }(a, b, c.omitOptionalSemicolons, c.attribute)), (c.useShortestReferences || !g) && c.useShortestReferences) {
                let d, f = (e = c.omitOptionalSemicolons, d = "&#" + String(a), e && b && !l.test(String.fromCharCode(b)) ? d : d + ";");
                f.length < h.length && (h = f)
            }
            return g && (!c.useShortestReferences || g.length < h.length) ? g : h
        }

        function t(a) {
            return "&#x" + a.toString(16).toUpperCase() + ";"
        }

        function u(a, b) {
            return j(a, Object.assign({
                format: s
            }, b))
        }

        function v(a, b) {
            return j(a, Object.assign({
                format: t
            }, b))
        }
    }),
    SRbQ: (function(a, b, c) {
        var d = function(a, b) {
                return (d = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(a, b) {
                    a.__proto__ = b
                } || function(a, b) {
                    for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                })(a, b)
            },
            e = function() {
                return (e = Object.assign || function(a) {
                    for (var b, c = 1, d = arguments.length; c < d; c++)
                        for (var e in b = arguments[c]) Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e]);
                    return a
                }).apply(this, arguments)
            };
        c.d(b, {
            a: () => e
        }, {
            b: function(a, b, c, d) {
                return new(c || (c = Promise))(function(e, f) {
                    function g(a) {
                        try {
                            i(d.next(a))
                        } catch (a) {
                            f(a)
                        }
                    }

                    function h(a) {
                        try {
                            i(d.throw(a))
                        } catch (a) {
                            f(a)
                        }
                    }

                    function i(a) {
                        var b;
                        a.done ? e(a.value) : ((b = a.value) instanceof c ? b : new c(function(a) {
                            a(b)
                        })).then(g, h)
                    }
                    i((d = d.apply(a, b || [])).next())
                })
            },
            c: function(a, b) {
                if ("function" != typeof b && null !== b) throw TypeError("Class extends value " + String(b) + " is not a constructor or null");

                function c() {
                    this.constructor = a
                }
                d(a, b), a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
            },
            d: function(a, b) {
                var c, d, e, f = {
                        label: 0,
                        sent: function() {
                            if (1 & e[0]) throw e[1];
                            return e[1]
                        },
                        trys: [],
                        ops: []
                    },
                    g = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return g.next = h(0), g.throw = h(1), g.return = h(2), "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                    return this
                }), g;

                function h(h) {
                    return function(i) {
                        var j = [h, i];
                        if (c) throw TypeError("Generator is already executing.");
                        for (; g && (g = 0, j[0] && (f = 0)), f;) try {
                            if (c = 1, d && (e = 2 & j[0] ? d.return : j[0] ? d.throw || ((e = d.return) && e.call(d), 0) : d.next) && !(e = e.call(d, j[1])).done) return e;
                            switch (d = 0, e && (j = [2 & j[0], e.value]), j[0]) {
                                case 0:
                                case 1:
                                    e = j;
                                    break;
                                case 4:
                                    return f.label++, {
                                        value: j[1],
                                        done: !1
                                    };
                                case 5:
                                    f.label++, d = j[1], j = [0];
                                    continue;
                                case 7:
                                    j = f.ops.pop(), f.trys.pop();
                                    continue;
                                default:
                                    if (!(e = (e = f.trys).length > 0 && e[e.length - 1]) && (6 === j[0] || 2 === j[0])) {
                                        f = 0;
                                        continue
                                    }
                                    if (3 === j[0] && (!e || j[1] > e[0] && j[1] < e[3])) {
                                        f.label = j[1];
                                        break
                                    }
                                    if (6 === j[0] && f.label < e[1]) {
                                        f.label = e[1], e = j;
                                        break
                                    }
                                    if (e && f.label < e[2]) {
                                        f.label = e[2], f.ops.push(j);
                                        break
                                    }
                                    e[2] && f.ops.pop(), f.trys.pop();
                                    continue
                            }
                            j = b.call(a, f)
                        } catch (a) {
                            j = [6, a], d = 0
                        } finally {
                            c = e = 0
                        }
                        if (5 & j[0]) throw j[1];
                        return {
                            value: j[0] ? j[1] : void 0,
                            done: !0
                        }
                    }
                }
            },
            e: function(a, b) {
                var c = {};
                for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && 0 > b.indexOf(d) && (c[d] = a[d]);
                if (null != a && "function" == typeof Object.getOwnPropertySymbols)
                    for (var e = 0, d = Object.getOwnPropertySymbols(a); e < d.length; e++) 0 > b.indexOf(d[e]) && Object.prototype.propertyIsEnumerable.call(a, d[e]) && (c[d[e]] = a[d[e]]);
                return c
            },
            f: function(a, b, c) {
                if (c || 2 == arguments.length)
                    for (var d, e = 0, f = b.length; e < f; e++) !d && e in b || (d || (d = Array.prototype.slice.call(b, 0, e)), d[e] = b[e]);
                return a.concat(d || Array.prototype.slice.call(b))
            }
        })
    }),
    iPs9: (function(a, b, c) {
        let d = /#/g,
            e = /&/g,
            f = /\//g,
            g = /=/g,
            h = /\+/g,
            i = /%5e/gi,
            j = /%60/gi,
            k = /%7c/gi,
            l = /%20/gi;

        function m(a) {
            return encodeURI("" + ("string" == typeof a ? a : JSON.stringify(a))).replace(k, "|").replace(h, "%2B").replace(l, "+").replace(d, "%23").replace(e, "%26").replace(j, "`").replace(i, "^").replace(f, "%2F")
        }

        function n(a) {
            return m(a).replace(g, "%3D")
        }

        function o(a = "") {
            try {
                return decodeURIComponent("" + a)
            } catch {
                return "" + a
            }
        }
        let p = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
            q = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
            r = /^([/\\]\s*){2,}[^/\\]/;

        function s(a, b = {}) {
            return ("boolean" == typeof b && (b = {
                acceptRelative: b
            }), b.strict) ? p.test(a) : q.test(a) || !!b.acceptRelative && r.test(a)
        }
        let t = Symbol.for("ufo:protocolRelative");

        function u(a = "", b) {
            let c = a.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
            if (c) {
                let [, a, b = ""] = c;
                return {
                    protocol: a.toLowerCase(),
                    pathname: b,
                    href: a + b,
                    auth: "",
                    host: "",
                    search: "",
                    hash: ""
                }
            }
            if (!s(a, {
                    acceptRelative: !0
                })) return b ? u(b + a) : v(a);
            let [, d = "", e, f = ""] = a.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [], [, g = "", h = ""] = f.match(/([^#/?]*)(.*)?/) || [];
            "file:" === d && (h = h.replace(/\/(?=[A-Za-z]:)/, ""));
            let {
                pathname: i,
                search: j,
                hash: k
            } = v(h);
            return {
                protocol: d.toLowerCase(),
                auth: e ? e.slice(0, Math.max(0, e.length - 1)) : "",
                host: g,
                pathname: i,
                search: j,
                hash: k,
                [t]: !d
            }
        }

        function v(a = "") {
            let [b = "", c = "", d = ""] = (a.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
            return {
                pathname: b,
                search: c,
                hash: d
            }
        }
        c.d(b, {}, {
            a: s,
            b: function(a = "") {
                let [b, c] = (a.match(/([^/:]*):?(\d+)?/) || []).splice(1);
                return {
                    hostname: o(b),
                    port: c
                }
            },
            c: u,
            d: function(a, b) {
                var c;
                let d, e, f, g, i, j = u(a),
                    k = {
                        ... function(a = "") {
                            let b = Object.create(null);
                            for (let c of ("?" === a[0] && (a = a.slice(1)), a.split("&"))) {
                                let a = c.match(/([^=]+)=?(.*)/) || [];
                                if (a.length < 2) continue;
                                let d = o(a[1].replace(h, " "));
                                if ("__proto__" === d || "constructor" === d) continue;
                                let e = o((a[2] || "").replace(h, " "));
                                void 0 === b[d] ? b[d] = e : Array.isArray(b[d]) ? b[d].push(e) : b[d] = [b[d], e]
                            }
                            return b
                        }(j.search),
                        ...b
                    };
                return j.search = Object.keys(k).filter(a => void 0 !== k[a]).map(a => {
                    var b;
                    return (("number" == typeof(b = k[a]) || "boolean" == typeof b) && (b = String(b)), b) ? Array.isArray(b) ? b.map(b => `${n(a)}=${m(b)}`).join("&") : `${n(a)}=${m(b)}` : n(a)
                }).filter(Boolean).join("&"), d = (c = j).pathname || "", e = c.search ? (c.search.startsWith("?") ? "" : "?") + c.search : "", f = c.hash || "", g = c.auth ? c.auth + "@" : "", i = c.host || "", (c.protocol || c[t] ? (c.protocol || "") + "//" : "") + g + i + d + e + f
            }
        })
    }),
    dz72: (function(a, b, c) {
        let d, e;
        c.d(b, {
            a: () => l
        });
        let f = new Uint8Array(12448),
            g = new Uint8Array(1440),
            h = new Uint8Array(2816);
        {
            let a = (a, b, c, d, e) => {
                    let f = d - b + 1,
                        g = a.length;
                    f > 0 && c - b < g && a.fill(e, c > b ? c - b : 0, f > g ? g : f)
                },
                b = new Uint32Array(320),
                c = new Uint32Array(320),
                i = 0;
            ! function(a, b, c) {
                let d = a.length,
                    e = 0,
                    f = 0,
                    g = -1,
                    h = () => {
                        let b = 0,
                            c = 0,
                            d;
                        do b += (15 & (d = parseInt(a[e++], 36))) << c, c += 4; while (16 & d) return b
                    };
                for (; e < d;) {
                    let a = g + 1 + h();
                    c(a, g = a + h(), b ? parseInt(b[f++], 36) : 0)
                }
            }("090001000h1v5g2903000hl2v6jh16ng1s210111110o35aa10u2k1g10l6600152113h2010u1q1r5aq3890o13181214r22k3158q2n1000v100h1k20000001207030001160721k171001h1j11610332010010321210090411021c1c02100o301201412230u1130b100h1j116111420120411001100k11l10051001h1j11611142011000321210072411021d0g10r3000000132120090o200200g1j11f2012031213711271t1001o301001000001121371b1f0c101h1l2011001031212000080a1t1001m40400102101600i11t301006c7i601008b6p41r10101041h3d0004115a1j290p3q223000511010100g1501010302003172030c0010016000e0i6v50n40n5tl12ir33s12t11u11cj30100060700010a90t220000l71i20m7203010241000502rd101004k300000006101027050920g3t22bk1300616g209030207u18c1000t10003010501b2o20000102000004g37070101o921c000640602001mcv3rg20000001o16d0c0m1fg6g2h30m10q55f1vm11c0ma0p1a42nc0ne1a090q3314902021204020112030318250105bb1201110i1021i15101131502141b15120511011k1155132040202510201010603060a1f02040104210b1g3290e0e0kn11vs12j11j3040pp12t80g6v1qi2500c0r51ktl7319g21g51gh103040n11010040j51i3f01q1h1d0m27p1a0000cs13200523j200010301010100v140018a4q2501010101c08000i1f12601011g3012215110u1a0001015000pcq181000100011000iji5fvc0u91g5bhg20ie0l94lo6002115303121s12240la1tj23h44tj11t45m4ah33q700000l3ep2021a200t220301012040a0i320j2040007f00100r20c100g3208000011531000s520201036020t900207l1101n311000000321210090a12634b910201l22001051020120011020000e1i520701020000n10h5001050000010000010001re0010323010001r11i520701000001q6000000107l600000230004gg12080001lc62027111n1000411230000000000t820321030030r10090n205001380800501020n2050c0001mc00002000000nc006150000i5l1100600010001q753011160000i441111000000rl11019100000c1h201043102n10ltk1f006eoss2b0202gs94r36si2033ku101m373h50b1rqs4113sli1t22m1uh2435070726u13k92rr7m34h380e0m141egl561g1261114k60ga6nn10t33sv13uf1jf0207150qt16t66pr60n23k6bf1f0e1l29g71c1e029j1n30p11ea0k1028139m16rb2v621122i52213040tf1u3b51n17127c0232041d120819052c28220104060306l5g3l4572g130152cqdl2c3o37a5o27u11c32d9m2cu2191obo57eh9gg1tv3", "262122424333333393233393339333333333393393bf3b3b3b3b3f3f3bffff33b3bb33ff3f33b3b3333333bffff3b33bb33f33bffff33b3bb33ff3f33b3bbb333b3ff33b333f33b3b3b3b3333b3bf33b3bb39333b33b33b3b3b333b333333b3b33333f3b33b3ffb3f3fff3f3b33f35dc33333f3b3b3b33323333b3bb3b33b3fb3b3333b33333bff3b3f33bfb3b3ff3b3b3b3b3b333b333b3323e224423444444444444444444444444444444444444444444444444444444444444444444444444444444433334433333333b3b3bb33333b353bff3b3b3b3f3ff3b3b333bfff3f33333fb3bb3fb3b3bb33232333f333fff333333333b3b3333bb3b39393f3b3fbf33bb3b393b3b3b3333b33b33b3bbb33b33ffff3b3333bb3933b3b3b333b3b3b3b3b33b3b3b33b3b3b33b3b33b33b3b3b3fffff3bb39b9b3b33b3bf3f3b33f3b3f93b33b3b3bb33b33b3b3b3333393b3b3b33b39bffb3b332333b333dd3b3333233332333333333333333333333333333444444444444a4444444444444344444444444444444444444444444444444444444444", (d, e, j) => {
                a(f, 0, d, e, j), a(g, 42592, d, e, j), a(h, 126976, d, e, j), e >= 65040 && !(d >= 126976 && e <= 129791) && (b[i] = d, c[i++] = e << 5 | j)
            }), d = b.slice(0, i), e = c.slice(0, i)
        }

        function i(a) {
            return a < 12448 ? f[a] : a < 42592 ? 4 * (12951 === a || 12953 === a) : a < 44032 ? g[a - 42592] : a < 55204 ? (a - 44032) % 28 ? 8 : 7 : a >= 126976 && a < 129792 ? h[a - 126976] : a >>> 4 == 4064 ? 3 : function(a) {
                if (a < 57344) return a <= 55238 ? 13 * (a >= 55216) : 12 * (a >= 55243 && a <= 55291);
                if (a < 65024) return 3 * (64286 === a);
                if (a >= 917504) return a > 921599 ? 0 : a >= 917536 && a < 917632 || a >= 917760 && a < 918e3 ? 3 : 2;
                var b = d,
                    c = e;
                let f = 0,
                    g = b.length - 1;
                for (; f <= g;) {
                    let d = f + g >>> 1,
                        e = c[d];
                    if (a < b[d]) g = d - 1;
                    else {
                        if (!(a > e >>> 5)) return 31 & e;
                        f = d + 1
                    }
                }
                return 0
            }(a)
        }
        let j = Uint8Array.from("0001000000010010000000100000000000000000000000000001000000010018000100000001001000010101100101100000000000000000000100000001111000010000000110101001110111111111000100000021001000010000000100100001000000011010000100000001111000014000000100180001000000010010");

        function k(a, b, c) {
            var d, e, f;
            return 3 === b ? 32 & a ? (d = a, 8204 === (e = c) ? 21 & d : 8 & d || 2381 === (f = e) || 2509 === f || 2765 === f || 2893 === f || 3149 === f || 3405 === f || 4153 === f || 6098 === f || 6752 === f || 6980 === f || 7083 === f || 43456 === f || 43766 === f || 68159 === f || 69939 === f || 70608 === f || 71998 === f || 72263 === f || 72345 === f || 73538 === f ? 21 & d | 40 : 21 & d | 32) : 21 & a : 4 === b ? 17 : 10 === b ? 2 & a ^ 3 : 14 === b ? (16 & a) >> 2 | 41 & a : 15 === b ? 33 : 1
        }

        function* l(a) {
            let b = a.length;
            if (0 === b) return;
            let c = a.codePointAt(0),
                d = c > 65535 ? 2 : 1,
                e = i(c),
                f = k(1, e, c),
                g = 0,
                h = c,
                l = e;
            for (; d < b;) {
                let b = i(c = a.codePointAt(d)),
                    m = !(f & j[e << 4 | b]);
                f = k(f, b, c), m && (yield {
                    segment: a.slice(g, d),
                    index: g,
                    input: a,
                    _hd: h,
                    _catBegin: 15 === l ? 0 : l,
                    _catEnd: 15 === e ? 0 : e
                }, g = d, h = c, l = b), d += c > 65535 ? 2 : 1, e = b
            }
            yield {
                segment: a.slice(g),
                index: g,
                input: a,
                _hd: h,
                _catBegin: 15 === l ? 0 : l,
                _catEnd: 15 === e ? 0 : e
            }
        }
    }),
    dOEv: (function(a, b, c) {
        c.d(b, {
            a: () => k
        });
        var d = c("U0Np"),
            e = c("LXAe"),
            f = c("EAw4"),
            g = c("oB0b"),
            h = c("rCYr");
        let i = function(a) {
                let b = this.constructor.prototype,
                    c = b[a],
                    d = function() {
                        return c.apply(d, arguments)
                    };
                return Object.setPrototypeOf(d, b), d
            },
            j = {}.hasOwnProperty,
            k = new class a extends i {
                constructor() {
                    let a, b;
                    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = (a = [], b = {
                        run: function(...b) {
                            let c = -1,
                                d = b.pop();
                            if ("function" != typeof d) throw TypeError("Expected function as last argument, not " + d);
                            ! function e(f, ...g) {
                                let h = a[++c],
                                    i = -1;
                                if (f) return void d(f);
                                for (; ++i < b.length;)(null === g[i] || void 0 === g[i]) && (g[i] = b[i]);
                                b = g, h ? (function(a, b) {
                                    let c;
                                    return function(...b) {
                                        let f, g = a.length > b.length;
                                        g && b.push(d);
                                        try {
                                            f = a.apply(this, b)
                                        } catch (a) {
                                            if (g && c) throw a;
                                            return d(a)
                                        }
                                        g || (f && f.then && "function" == typeof f.then ? f.then(e, d) : f instanceof Error ? d(f) : e(f))
                                    };

                                    function d(a, ...e) {
                                        c || (c = !0, b(a, ...e))
                                    }

                                    function e(a) {
                                        d(null, a)
                                    }
                                })(h, e)(...g) : d(null, ...g)
                            }(null, ...b)
                        },
                        use: function(c) {
                            if ("function" != typeof c) throw TypeError("Expected `middelware` to be a function, not " + c);
                            return a.push(c), b
                        }
                    })
                }
                copy() {
                    let b = new a,
                        c = -1;
                    for (; ++c < this.attachers.length;) {
                        let a = this.attachers[c];
                        b.use(...a)
                    }
                    return b.data(e(!0, {}, this.namespace)), b
                }
                data(a, b) {
                    return "string" == typeof a ? 2 == arguments.length ? (n("data", this.frozen), this.namespace[a] = b, this) : j.call(this.namespace, a) && this.namespace[a] || void 0 : a ? (n("data", this.frozen), this.namespace = a, this) : this.namespace
                }
                freeze() {
                    if (this.frozen) return this;
                    for (; ++this.freezeIndex < this.attachers.length;) {
                        let [a, ...b] = this.attachers[this.freezeIndex];
                        if (!1 === b[0]) continue;
                        !0 === b[0] && (b[0] = void 0);
                        let c = a.call(this, ...b);
                        "function" == typeof c && this.transformers.use(c)
                    }
                    return this.frozen = !0, this.freezeIndex = 1 / 0, this
                }
                parse(a) {
                    this.freeze();
                    let b = q(a),
                        c = this.parser || this.Parser;
                    return l("parse", c), c(String(b), b)
                }
                process(a, b) {
                    let c = this;
                    return this.freeze(), l("process", this.parser || this.Parser), m("process", this.compiler || this.Compiler), b ? d(void 0, b) : new Promise(d);

                    function d(d, e) {
                        let g = q(a),
                            h = c.parse(g);

                        function i(a, c) {
                            a || !c ? e(a) : d ? d(c) : ((0, f.a)(b, "`done` is defined if `resolve` is not"), b(void 0, c))
                        }
                        c.run(h, g, function(a, b, d) {
                            var e, f;
                            if (a || !b || !d) return i(a);
                            let g = c.stringify(b, d);
                            "string" == typeof(e = g) || (f = e) && "object" == typeof f && "byteLength" in f && "byteOffset" in f ? d.value = g : d.result = g, i(a, d)
                        })
                    }
                }
                processSync(a) {
                    let b, c = !1;
                    return this.freeze(), l("processSync", this.parser || this.Parser), m("processSync", this.compiler || this.Compiler), this.process(a, function(a, e) {
                        c = !0, (0, d.a)(a), b = e
                    }), p("processSync", "process", c), (0, f.a)(b, "we either bailed on an error or have a tree"), b
                }
                run(a, b, c) {
                    o(a), this.freeze();
                    let d = this.transformers;
                    return c || "function" != typeof b || (c = b, b = void 0), c ? e(void 0, c) : new Promise(e);

                    function e(e, g) {
                        (0, f.a)("function" != typeof b, "`file` can\u2019t be a `done` anymore, we checked");
                        let h = q(b);
                        d.run(a, h, function(b, d, h) {
                            let i = d || a;
                            b ? g(b) : e ? e(i) : ((0, f.a)(c, "`done` is defined if `resolve` is not"), c(void 0, i, h))
                        })
                    }
                }
                runSync(a, b) {
                    let c, e = !1;
                    return this.run(a, b, function(a, b) {
                        (0, d.a)(a), c = b, e = !0
                    }), p("runSync", "run", e), (0, f.a)(c, "we either bailed on an error or have a tree"), c
                }
                stringify(a, b) {
                    this.freeze();
                    let c = q(b),
                        d = this.compiler || this.Compiler;
                    return m("stringify", d), o(a), d(a, c)
                }
                use(a, ...b) {
                    let c = this.attachers,
                        d = this.namespace;
                    if (n("use", this.frozen), null == a);
                    else if ("function" == typeof a) i(a, b);
                    else if ("object" == typeof a) Array.isArray(a) ? h(a) : f(a);
                    else throw TypeError("Expected usable value, not `" + a + "`");
                    return this;

                    function f(a) {
                        if (!("plugins" in a) && !("settings" in a)) throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
                        h(a.plugins), a.settings && (d.settings = e(!0, d.settings, a.settings))
                    }

                    function h(a) {
                        let b = -1;
                        if (null == a);
                        else if (Array.isArray(a))
                            for (; ++b < a.length;) ! function(a) {
                                if ("function" == typeof a) i(a, []);
                                else if ("object" == typeof a)
                                    if (Array.isArray(a)) {
                                        let [b, ...c] = a;
                                        i(b, c)
                                    } else f(a);
                                else throw TypeError("Expected usable value, not `" + a + "`")
                            }(a[b]);
                        else throw TypeError("Expected a list of plugins, not `" + a + "`")
                    }

                    function i(a, b) {
                        let d = -1,
                            f = -1;
                        for (; ++d < c.length;)
                            if (c[d][0] === a) {
                                f = d;
                                break
                            } if (-1 === f) c.push([a, ...b]);
                        else if (b.length > 0) {
                            let [d, ...h] = b, i = c[f][1];
                            (0, g.a)(i) && (0, g.a)(d) && (d = e(!0, i, d)), c[f] = [a, d, ...h]
                        }
                    }
                }
            }().freeze();

        function l(a, b) {
            if ("function" != typeof b) throw TypeError("Cannot `" + a + "` without `parser`")
        }

        function m(a, b) {
            if ("function" != typeof b) throw TypeError("Cannot `" + a + "` without `compiler`")
        }

        function n(a, b) {
            if (b) throw Error("Cannot call `" + a + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
        }

        function o(a) {
            if (!(0, g.a)(a) || "string" != typeof a.type) throw TypeError("Expected node, got `" + a + "`")
        }

        function p(a, b, c) {
            if (!c) throw Error("`" + a + "` finished async. Use `" + b + "` instead")
        }

        function q(a) {
            var b;
            return (b = a) && "object" == typeof b && "message" in b && "messages" in b ? a : new h.a(a)
        }
    }),
    UFzK: (function(a, b, c) {
        let d = function(a) {
            var b, c;
            if (null == a) return f;
            if ("function" == typeof a) return e(a);
            if ("object" == typeof a) {
                return Array.isArray(a) ? function(a) {
                    let b = [],
                        c = -1;
                    for (; ++c < a.length;) b[c] = d(a[c]);
                    return e(function(...a) {
                        let c = -1;
                        for (; ++c < b.length;)
                            if (b[c].apply(this, a)) return !0;
                        return !1
                    })
                }(a) : (b = a, e(function(a) {
                    let c;
                    for (c in b)
                        if (a[c] !== b[c]) return !1;
                    return !0
                }))
            }
            if ("string" == typeof a) {
                return c = a, e(function(a) {
                    return a && a.type === c
                })
            }
            throw Error("Expected function, string, or object as test")
        };

        function e(a) {
            return function(b, c, d) {
                return !!(function(a) {
                    return null !== a && "object" == typeof a && "type" in a
                }(b) && a.call(this, b, "number" == typeof c ? c : void 0, d || void 0))
            }
        }

        function f() {
            return !0
        }
        c.d(b, {}, {
            a: d
        })
    }),
    huIc: (function(a, b, c) {
        function d(a) {
            return f(a && a.line) + ":" + f(a && a.column)
        }

        function e(a) {
            return d(a && a.start) + "-" + d(a && a.end)
        }

        function f(a) {
            return a && "number" == typeof a ? a : 1
        }
        c.d(b, {}, {
            a: function(a) {
                return a && "object" == typeof a ? "position" in a || "type" in a ? e(a.position) : "start" in a || "end" in a ? e(a) : "line" in a || "column" in a ? d(a) : "" : ""
            }
        })
    }),
    rBm5: (function(a, b, c) {
        c.d(b, {
            a: () => f
        });
        var d = c("UFzK");
        let e = [];

        function f(a, b, c, f) {
            let g;
            "function" == typeof b && "function" != typeof c ? (f = c, c = b) : g = b;
            let h = (0, d.a)(g),
                i = f ? -1 : 1;
            (function a(d, g, j) {
                let k = d && "object" == typeof d ? d : {};
                if ("string" == typeof k.type) {
                    let a = "string" == typeof k.tagName ? k.tagName : "string" == typeof k.name ? k.name : void 0;
                    Object.defineProperty(l, "name", {
                        value: "node (" + d.type + (a ? "<" + a + ">" : "") + ")"
                    })
                }
                return l;

                function l() {
                    var k;
                    let l, m, n, o = e;
                    if ((!b || h(d, g, j[j.length - 1] || void 0)) && !1 === (o = Array.isArray(k = c(d, j)) ? k : "number" == typeof k ? [!0, k] : null == k ? e : [k])[0]) return o;
                    if ("children" in d && d.children && d.children && "skip" !== o[0])
                        for (m = (f ? d.children.length : -1) + i, n = j.concat(d); m > -1 && m < d.children.length;) {
                            if (!1 === (l = a(d.children[m], m, n)())[0]) return l;
                            m = "number" == typeof l[1] ? l[1] : m + i
                        }
                    return o
                }
            })(a, void 0, [])()
        }
    }),
    JV89: (function(a, b, c) {
        var d = c("rBm5");
        c.d(b, {}, {
            a: function(a, b, c, e) {
                let f, g, h;
                "function" == typeof b && "function" != typeof c ? (g = void 0, h = b, f = c) : (g = b, h = c, f = e), (0, d.a)(a, g, function(a, b) {
                    let c = b[b.length - 1],
                        d = c ? c.children.indexOf(a) : void 0;
                    return h(a, d, c)
                }, f)
            }
        })
    }),
    Cmnu: (function(a, b, c) {
        var d = c("zd8w"),
            e = c("drWf"),
            f = "u" > typeof window ? d.useLayoutEffect : d.useEffect,
            g = "u" < typeof window,
            h = {
                width: void 0,
                height: void 0
            };

        function i(a, b, c) {
            return a[b] ? Array.isArray(a[b]) ? a[b][0][c] : a[b][c] : "contentBoxSize" === b ? a.contentRect["inlineSize" === c ? "width" : "height"] : void 0
        }
        c.d(b, {}, {
            a: function(a, b = 500, c) {
                var f;
                let g, h = (0, d.useRef)();
                f = () => {
                    h.current && h.current.cancel()
                }, (g = (0, d.useRef)(f)).current = f, (0, d.useEffect)(() => () => {
                    g.current()
                }, []);
                let i = (0, d.useMemo)(() => {
                    let d = e(a, b, c),
                        f = (...a) => d(...a);
                    return f.cancel = () => {
                        d.cancel()
                    }, f.isPending = () => !!h.current, f.flush = () => d.flush(), f
                }, [a, b, c]);
                return (0, d.useEffect)(() => {
                    h.current = e(a, b, c)
                }, [a, b, c]), i
            },
            b: function(a) {
                let b = (0, d.useRef)(() => {
                    throw Error("Cannot call an event handler while rendering.")
                });
                return f(() => {
                    b.current = a
                }, [a]), (0, d.useCallback)((...a) => {
                    var c;
                    return null == (c = b.current) ? void 0 : c.call(b, ...a)
                }, [b])
            },
            c: f,
            d: function(a, {
                defaultValue: b = !1,
                initializeWithValue: c = !0
            } = {}) {
                let e = a => g ? b : window.matchMedia(a).matches,
                    [h, i] = (0, d.useState)(() => c ? e(a) : b);

                function j() {
                    i(e(a))
                }
                return f(() => {
                    let b = window.matchMedia(a);
                    return j(), b.addListener ? b.addListener(j) : b.addEventListener("change", j), () => {
                        b.removeListener ? b.removeListener(j) : b.removeEventListener("change", j)
                    }
                }, [a]), h
            },
            e: function(a, b, c = "mousedown", e = {}) {
                var g, h;
                let i;
                g = c => {
                    let d = c.target;
                    d && d.isConnected && (Array.isArray(a) ? a.filter(a => !!a.current).every(a => a.current && !a.current.contains(d)) : a.current && !a.current.contains(d)) && b(c)
                }, h = void 0, i = (0, d.useRef)(g), f(() => {
                    i.current = g
                }, [g]), (0, d.useEffect)(() => {
                    let a = (null == h ? void 0 : h.current) ?? window;
                    if (!(a && a.addEventListener)) return;
                    let b = a => {
                        i.current(a)
                    };
                    return a.addEventListener(c, b, e), () => {
                        a.removeEventListener(c, b, e)
                    }
                }, [c, h, e])
            },
            f: function(a) {
                let b, {
                        ref: c,
                        box: e = "content-box"
                    } = a,
                    [{
                        width: f,
                        height: g
                    }, j] = (0, d.useState)(h),
                    k = (b = (0, d.useRef)(!1), (0, d.useEffect)(() => (b.current = !0, () => {
                        b.current = !1
                    }), []), (0, d.useCallback)(() => b.current, [])),
                    l = (0, d.useRef)({
                        ...h
                    }),
                    m = (0, d.useRef)(void 0);
                return m.current = a.onResize, (0, d.useEffect)(() => {
                    if (!c.current || "u" < typeof window || !("ResizeObserver" in window)) return;
                    let a = new ResizeObserver(([a]) => {
                        let b = "border-box" === e ? "borderBoxSize" : "device-pixel-content-box" === e ? "devicePixelContentBoxSize" : "contentBoxSize",
                            c = i(a, b, "inlineSize"),
                            d = i(a, b, "blockSize");
                        if (l.current.width !== c || l.current.height !== d) {
                            let a = {
                                width: c,
                                height: d
                            };
                            l.current.width = c, l.current.height = d, m.current ? m.current(a) : k() && j(a)
                        }
                    });
                    return a.observe(c.current, {
                        box: e
                    }), () => {
                        a.disconnect()
                    }
                }, [e, c, k]), {
                    width: f,
                    height: g
                }
            },
            g: function(a, b) {
                let c = (0, d.useRef)(a);
                f(() => {
                    c.current = a
                }, [a]), (0, d.useEffect)(() => {
                    if (!b && 0 !== b) return;
                    let a = setTimeout(() => {
                        c.current()
                    }, b);
                    return () => {
                        clearTimeout(a)
                    }
                }, [b])
            }
        })
    }),
    eUev: (function(a, b, c) {
        var d = c("huIc");
        class e extends Error {
            constructor(a, b, c) {
                super(), "string" == typeof b && (c = b, b = void 0);
                let e = "",
                    f = {},
                    g = !1;
                if (b && (f = "line" in b && "column" in b || "start" in b && "end" in b ? {
                        place: b
                    } : "type" in b ? {
                        ancestors: [b],
                        place: b.position
                    } : {
                        ...b
                    }), "string" == typeof a ? e = a : !f.cause && a && (g = !0, e = a.message, f.cause = a), !f.ruleId && !f.source && "string" == typeof c) {
                    let a = c.indexOf(":"); - 1 === a ? f.ruleId = c : (f.source = c.slice(0, a), f.ruleId = c.slice(a + 1))
                }
                if (!f.place && f.ancestors && f.ancestors) {
                    let a = f.ancestors[f.ancestors.length - 1];
                    a && (f.place = a.position)
                }
                let h = f.place && "start" in f.place ? f.place.start : f.place;
                this.ancestors = f.ancestors || void 0, this.cause = f.cause || void 0, this.column = h ? h.column : void 0, this.fatal = void 0, this.file, this.message = e, this.line = h ? h.line : void 0, this.name = (0, d.a)(f.place) || "1:1", this.place = f.place || void 0, this.reason = this.message, this.ruleId = f.ruleId || void 0, this.source = f.source || void 0, this.stack = g && f.cause && "string" == typeof f.cause.stack ? f.cause.stack : "", this.actual, this.expected, this.note, this.url
            }
        }
        e.prototype.file = "", e.prototype.name = "", e.prototype.reason = "", e.prototype.message = "", e.prototype.stack = "", e.prototype.column = void 0, e.prototype.line = void 0, e.prototype.ancestors = void 0, e.prototype.cause = void 0, e.prototype.fatal = void 0, e.prototype.place = void 0, e.prototype.ruleId = void 0, e.prototype.source = void 0, c.d(b, {}, {
            a: e
        })
    }),
    rCYr: (function(a, b, c) {
        c.d(b, {
            a: () => l
        });
        var d = c("eUev");
        let e = function(a, b) {
                let c;
                if (void 0 !== b && "string" != typeof b) throw TypeError('"ext" argument must be a string');
                i(a);
                let d = 0,
                    e = -1,
                    f = a.length;
                if (void 0 === b || 0 === b.length || b.length > a.length) {
                    for (; f--;)
                        if (47 === a.codePointAt(f)) {
                            if (c) {
                                d = f + 1;
                                break
                            }
                        } else e < 0 && (c = !0, e = f + 1);
                    return e < 0 ? "" : a.slice(d, e)
                }
                if (b === a) return "";
                let g = -1,
                    h = b.length - 1;
                for (; f--;)
                    if (47 === a.codePointAt(f)) {
                        if (c) {
                            d = f + 1;
                            break
                        }
                    } else g < 0 && (c = !0, g = f + 1), h > -1 && (a.codePointAt(f) === b.codePointAt(h--) ? h < 0 && (e = f) : (h = -1, e = g));
                return d === e ? e = g : e < 0 && (e = a.length), a.slice(d, e)
            },
            f = function(a) {
                let b;
                if (i(a), 0 === a.length) return ".";
                let c = -1,
                    d = a.length;
                for (; --d;)
                    if (47 === a.codePointAt(d)) {
                        if (b) {
                            c = d;
                            break
                        }
                    } else b || (b = !0);
                return c < 0 ? 47 === a.codePointAt(0) ? "/" : "." : 1 === c && 47 === a.codePointAt(0) ? "//" : a.slice(0, c)
            },
            g = function(a) {
                let b;
                i(a);
                let c = a.length,
                    d = -1,
                    e = 0,
                    f = -1,
                    g = 0;
                for (; c--;) {
                    let h = a.codePointAt(c);
                    if (47 === h) {
                        if (b) {
                            e = c + 1;
                            break
                        }
                        continue
                    }
                    d < 0 && (b = !0, d = c + 1), 46 === h ? f < 0 ? f = c : 1 !== g && (g = 1) : f > -1 && (g = -1)
                }
                return f < 0 || d < 0 || 0 === g || 1 === g && f === d - 1 && f === e + 1 ? "" : a.slice(f, d)
            },
            h = function(...a) {
                var b;
                let c, d, e, f = -1;
                for (; ++f < a.length;) i(a[f]), a[f] && (e = void 0 === e ? a[f] : e + "/" + a[f]);
                return void 0 === e ? "." : (i(b = e), c = 47 === b.codePointAt(0), 0 !== (d = function(a, b) {
                    let c, d, e = "",
                        f = 0,
                        g = -1,
                        h = 0,
                        i = -1;
                    for (; ++i <= a.length;) {
                        if (i < a.length) c = a.codePointAt(i);
                        else if (47 === c) break;
                        else c = 47;
                        if (47 === c) {
                            if (g === i - 1 || 1 === h);
                            else if (g !== i - 1 && 2 === h) {
                                if (e.length < 2 || 2 !== f || 46 !== e.codePointAt(e.length - 1) || 46 !== e.codePointAt(e.length - 2)) {
                                    if (e.length > 2) {
                                        if ((d = e.lastIndexOf("/")) !== e.length - 1) {
                                            d < 0 ? (e = "", f = 0) : f = (e = e.slice(0, d)).length - 1 - e.lastIndexOf("/"), g = i, h = 0;
                                            continue
                                        }
                                    } else if (e.length > 0) {
                                        e = "", f = 0, g = i, h = 0;
                                        continue
                                    }
                                }
                                b && (e = e.length > 0 ? e + "/.." : "..", f = 2)
                            } else e.length > 0 ? e += "/" + a.slice(g + 1, i) : e = a.slice(g + 1, i), f = i - g - 1;
                            g = i, h = 0
                        } else 46 === c && h > -1 ? h++ : h = -1
                    }
                    return e
                }(b, !c)).length || c || (d = "."), d.length > 0 && 47 === b.codePointAt(b.length - 1) && (d += "/"), c ? "/" + d : d)
            };

        function i(a) {
            if ("string" != typeof a) throw TypeError("Path must be a string. Received " + JSON.stringify(a))
        }

        function j(a) {
            return !!(null !== a && "object" == typeof a && "href" in a && a.href && "protocol" in a && a.protocol && void 0 === a.auth)
        }
        let k = ["history", "path", "basename", "stem", "extname", "dirname"];
        class l {
            constructor(a) {
                var b;
                let c, d;
                c = a ? j(a) ? {
                    path: a
                } : "string" == typeof a || (b = a) && "object" == typeof b && "byteLength" in b && "byteOffset" in b ? {
                    value: a
                } : a : {}, this.cwd = "cwd" in c ? "" : "/", this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
                let e = -1;
                for (; ++e < k.length;) {
                    let a = k[e];
                    a in c && void 0 !== c[a] && null !== c[a] && (this[a] = "history" === a ? [...c[a]] : c[a])
                }
                for (d in c) k.includes(d) || (this[d] = c[d])
            }
            get basename() {
                return "string" == typeof this.path ? e(this.path) : void 0
            }
            set basename(a) {
                n(a, "basename"), m(a, "basename"), this.path = h(this.dirname || "", a)
            }
            get dirname() {
                return "string" == typeof this.path ? f(this.path) : void 0
            }
            set dirname(a) {
                o(this.basename, "dirname"), this.path = h(a || "", this.basename)
            }
            get extname() {
                return "string" == typeof this.path ? g(this.path) : void 0
            }
            set extname(a) {
                if (m(a, "extname"), o(this.dirname, "extname"), a) {
                    if (46 !== a.codePointAt(0)) throw Error("`extname` must start with `.`");
                    if (a.includes(".", 1)) throw Error("`extname` cannot contain multiple dots")
                }
                this.path = h(this.dirname, this.stem + (a || ""))
            }
            get path() {
                return this.history[this.history.length - 1]
            }
            set path(a) {
                j(a) && (a = function(a) {
                    if ("string" == typeof a) a = new URL(a);
                    else if (!j(a)) {
                        let b = TypeError('The "path" argument must be of type string or an instance of URL. Received `' + a + "`");
                        throw b.code = "ERR_INVALID_ARG_TYPE", b
                    }
                    if ("file:" !== a.protocol) {
                        let a = TypeError("The URL must be of scheme file");
                        throw a.code = "ERR_INVALID_URL_SCHEME", a
                    }
                    return function(a) {
                        if ("" !== a.hostname) {
                            let a = TypeError('File URL host must be "localhost" or empty on darwin');
                            throw a.code = "ERR_INVALID_FILE_URL_HOST", a
                        }
                        let b = a.pathname,
                            c = -1;
                        for (; ++c < b.length;)
                            if (37 === b.codePointAt(c) && 50 === b.codePointAt(c + 1)) {
                                let a = b.codePointAt(c + 2);
                                if (70 === a || 102 === a) {
                                    let a = TypeError("File URL path must not include encoded / characters");
                                    throw a.code = "ERR_INVALID_FILE_URL_PATH", a
                                }
                            } return decodeURIComponent(b)
                    }(a)
                }(a)), n(a, "path"), this.path !== a && this.history.push(a)
            }
            get stem() {
                return "string" == typeof this.path ? e(this.path, this.extname) : void 0
            }
            set stem(a) {
                n(a, "stem"), m(a, "stem"), this.path = h(this.dirname || "", a + (this.extname || ""))
            }
            fail(a, b, c) {
                let d = this.message(a, b, c);
                throw d.fatal = !0, d
            }
            info(a, b, c) {
                let d = this.message(a, b, c);
                return d.fatal = void 0, d
            }
            message(a, b, c) {
                let e = new d.a(a, b, c);
                return this.path && (e.name = this.path + ":" + e.name, e.file = this.path), e.fatal = !1, this.messages.push(e), e
            }
            toString(a) {
                return void 0 === this.value ? "" : "string" == typeof this.value ? this.value : new TextDecoder(a || void 0).decode(this.value)
            }
        }

        function m(a, b) {
            if (a && a.includes("/")) throw Error("`" + b + "` cannot be a path: did not expect `/`")
        }

        function n(a, b) {
            if (!a) throw Error("`" + b + "` cannot be empty")
        }

        function o(a, b) {
            if (!a) throw Error("Setting `" + b + "` requires `path` to be set too")
        }
    }),
    BRZe: (function(a, b, c) {
        for (var d = {
                8: "Backspace",
                9: "Tab",
                10: "Enter",
                12: "NumLock",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                44: "PrintScreen",
                45: "Insert",
                46: "Delete",
                59: ";",
                61: "=",
                91: "Meta",
                92: "Meta",
                106: "*",
                107: "+",
                108: ",",
                109: "-",
                110: ".",
                111: "/",
                144: "NumLock",
                145: "ScrollLock",
                160: "Shift",
                161: "Shift",
                162: "Control",
                163: "Control",
                164: "Alt",
                165: "Alt",
                173: "-",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'"
            }, e = {
                48: ")",
                49: "!",
                50: "@",
                51: "#",
                52: "$",
                53: "%",
                54: "^",
                55: "&",
                56: "*",
                57: "(",
                59: ":",
                61: "+",
                173: "_",
                186: ":",
                187: "+",
                188: "<",
                189: "_",
                190: ">",
                191: "?",
                192: "~",
                219: "{",
                220: "|",
                221: "}",
                222: '"'
            }, f = "u" > typeof navigator && /Mac/.test(navigator.platform), g = "u" > typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), h = 0; h < 10; h++) d[48 + h] = d[96 + h] = String(h);
        for (var h = 1; h <= 24; h++) d[h + 111] = "F" + h;
        for (var h = 65; h <= 90; h++) d[h] = String.fromCharCode(h + 32), e[h] = String.fromCharCode(h);
        for (var i in d) e.hasOwnProperty(i) || (e[i] = d[i]);
        c.d(b, {}, {
            a: d,
            b: function(a) {
                var b = !(f && a.metaKey && a.shiftKey && !a.ctrlKey && !a.altKey || g && a.shiftKey && a.key && 1 == a.key.length || "Unidentified" == a.key) && a.key || (a.shiftKey ? e : d)[a.keyCode] || a.key || "Unidentified";
                return "Esc" == b && (b = "Escape"), "Del" == b && (b = "Delete"), "Left" == b && (b = "ArrowLeft"), "Up" == b && (b = "ArrowUp"), "Right" == b && (b = "ArrowRight"), "Down" == b && (b = "ArrowDown"), b
            },
            c: e
        })
    }),
    oNJZ: (function(a, b, c) {
        c.r(b);
        var d = c("P0lf"),
            e = c("emWR"),
            f = c("qy7F"),
            g = c("MjY3"),
            h = c("XyvO"),
            i = c("ZqMF"),
            j = c("V5oc"),
            k = c("ZzxD"),
            l = c("Ouwk"),
            m = c("Lbz6"),
            n = c("pI16"),
            o = c("g4hI"),
            p = c("o0Ei"),
            q = c("ts78"),
            r = c("vSAy"),
            s = c("ytld"),
            t = c("Ctbn"),
            u = c("yNp9"),
            v = c("vZiz");
        class w extends d.a {
            constructor(a, b) {
                super(), this.doc = a, this.awareness = b
            }
        }
        class x {
            constructor(a, b) {
                this.clock = a, this.len = b
            }
        }
        class y {
            constructor() {
                this.clients = new Map
            }
        }
        let z = (a, b, c) => b.clients.forEach((b, d) => {
                let e = a.doc.store.clients.get(d);
                if (null != e) {
                    let d = e[e.length - 1],
                        f = d.id.clock + d.length;
                    for (let d = 0, g = b[d]; d < b.length && g.clock < f; g = b[++d]) aD(a, e, g.clock, g.len, c)
                }
            }),
            A = (a, b) => {
                let c = a.clients.get(b.client);
                return void 0 !== c && null !== ((a, b) => {
                    let c = 0,
                        d = a.length - 1;
                    for (; c <= d;) {
                        let e = f.b((c + d) / 2),
                            g = a[e],
                            h = g.clock;
                        if (h <= b) {
                            if (b < h + g.len) return e;
                            c = e + 1
                        } else d = e - 1
                    }
                    return null
                })(c, b.clock)
            },
            B = a => {
                a.clients.forEach(a => {
                    let b, c;
                    for (a.sort((a, b) => a.clock - b.clock), b = 1, c = 1; b < a.length; b++) {
                        let d = a[c - 1],
                            e = a[b];
                        d.clock + d.len >= e.clock ? a[c - 1] = new x(d.clock, f.d(d.len, e.clock + e.len - d.clock)) : (c < b && (a[c] = e), c++)
                    }
                    a.length = c
                })
            },
            C = a => {
                let b = new y;
                for (let c = 0; c < a.length; c++) a[c].clients.forEach((d, f) => {
                    if (!b.clients.has(f)) {
                        let g = d.slice();
                        for (let b = c + 1; b < a.length; b++) e.a(g, a[b].clients.get(f) || []);
                        b.clients.set(f, g)
                    }
                });
                return B(b), b
            },
            D = (a, b, c, d) => {
                g.e(a.clients, b, () => []).push(new x(c, d))
            },
            E = () => new y,
            F = a => {
                let b = E();
                return a.clients.forEach((a, c) => {
                    let d = [];
                    for (let b = 0; b < a.length; b++) {
                        let c = a[b];
                        if (c.deleted) {
                            let e = c.id.clock,
                                f = c.length;
                            if (b + 1 < a.length)
                                for (let c = a[b + 1]; b + 1 < a.length && c.deleted; c = a[++b + 1]) f += c.length;
                            d.push(new x(e, f))
                        }
                    }
                    d.length > 0 && b.clients.set(c, d)
                }), b
            },
            G = (a, b) => {
                h.m(a.restEncoder, b.clients.size), e.c(b.clients.entries()).sort((a, b) => b[0] - a[0]).forEach(([b, c]) => {
                    a.resetDsCurVal(), h.m(a.restEncoder, b);
                    let d = c.length;
                    h.m(a.restEncoder, d);
                    for (let b = 0; b < d; b++) {
                        let d = c[b];
                        a.writeDsClock(d.clock), a.writeDsLen(d.len)
                    }
                })
            },
            H = a => {
                let b = new y,
                    c = i.k(a.restDecoder);
                for (let d = 0; d < c; d++) {
                    a.resetDsCurVal();
                    let c = i.k(a.restDecoder),
                        d = i.k(a.restDecoder);
                    if (d > 0) {
                        let e = g.e(b.clients, c, () => []);
                        for (let b = 0; b < d; b++) e.push(new x(a.readDsClock(), a.readDsLen()))
                    }
                }
                return b
            },
            I = (a, b, c) => {
                let d = new y,
                    e = i.k(a.restDecoder);
                for (let f = 0; f < e; f++) {
                    a.resetDsCurVal();
                    let e = i.k(a.restDecoder),
                        f = i.k(a.restDecoder),
                        g = c.clients.get(e) || [],
                        h = aw(c, e);
                    for (let c = 0; c < f; c++) {
                        let c = a.readDsClock(),
                            f = c + a.readDsLen();
                        if (c < h) {
                            h < f && D(d, e, h, f - h);
                            let a = ay(g, c),
                                i = g[a];
                            for (!i.deleted && i.id.clock < c && (g.splice(a + 1, 0, cf(b, i, c - i.id.clock)), a++); a < g.length && (i = g[a++]).id.clock < f;) i.deleted || (f < i.id.clock + i.length && g.splice(a, 0, cf(b, i, f - i.id.clock)), i.delete(b))
                        } else D(d, e, c, f - c)
                    }
                }
                if (d.clients.size > 0) {
                    let a = new T;
                    return h.m(a.restEncoder, 0), G(a, d), a.toUint8Array()
                }
                return null
            },
            J = (a, b) => {
                if (a.clients.size !== b.clients.size) return !1;
                for (let [c, d] of a.clients.entries()) {
                    let a = b.clients.get(c);
                    if (void 0 === a || d.length !== a.length) return !1;
                    for (let b = 0; b < d.length; b++) {
                        let c = d[b],
                            e = a[b];
                        if (c.clock !== e.clock || c.len !== e.len) return !1
                    }
                }
                return !0
            },
            K = j.a;
        class L extends d.a {
            constructor({
                guid: a = j.b(),
                collectionid: b = null,
                gc: c = !0,
                gcFilter: d = () => !0,
                meta: e = null,
                autoLoad: f = !1,
                shouldLoad: g = !0
            } = {}) {
                super(), this.gc = c, this.gcFilter = d, this.clientID = K(), this.guid = a, this.collectionid = b, this.share = new Map, this.store = new au, this._transaction = null, this._transactionCleanups = [], this.subdocs = new Set, this._item = null, this.shouldLoad = g, this.autoLoad = f, this.meta = e, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = k.a(a => {
                    this.on("load", () => {
                        this.isLoaded = !0, a(this)
                    })
                });
                let h = () => k.a(a => {
                    let b = c => {
                        (void 0 === c || !0 === c) && (this.off("sync", b), a())
                    };
                    this.on("sync", b)
                });
                this.on("sync", a => {
                    !1 === a && this.isSynced && (this.whenSynced = h()), this.isSynced = void 0 === a || !0 === a, this.isSynced && !this.isLoaded && this.emit("load", [this])
                }), this.whenSynced = h()
            }
            load() {
                let a = this._item;
                null === a || this.shouldLoad || aL(a.parent.doc, a => {
                    a.subdocsLoaded.add(this)
                }, null, !0), this.shouldLoad = !0
            }
            getSubdocs() {
                return this.subdocs
            }
            getSubdocGuids() {
                return new Set(e.c(this.subdocs).map(a => a.guid))
            }
            transact(a, b = null) {
                return aL(this, a, b)
            }
            get(a, b = be) {
                let c = g.e(this.share, a, () => {
                        let a = new b;
                        return a._integrate(this, null), a
                    }),
                    d = c.constructor;
                if (b !== be && d !== b)
                    if (d === be) {
                        let d = new b;
                        d._map = c._map, c._map.forEach(a => {
                            for (; null !== a; a = a.left) a.parent = d
                        }), d._start = c._start;
                        for (let a = d._start; null !== a; a = a.right) a.parent = d;
                        return d._length = c._length, this.share.set(a, d), d._integrate(this, null), d
                    } else throw Error(`Type with the name ${a} has already been defined with a different constructor`);
                return c
            }
            getArray(a = "") {
                return this.get(a, bv)
            }
            getText(a = "") {
                return this.get(a, bN)
            }
            getMap(a = "") {
                return this.get(a, bx)
            }
            getXmlElement(a = "") {
                return this.get(a, bQ)
            }
            getXmlFragment(a = "") {
                return this.get(a, bP)
            }
            toJSON() {
                let a = {};
                return this.share.forEach((b, c) => {
                    a[c] = b.toJSON()
                }), a
            }
            destroy() {
                this.isDestroyed = !0, e.c(this.subdocs).forEach(a => a.destroy());
                let a = this._item;
                if (null !== a) {
                    this._item = null;
                    let b = a.content;
                    b.doc = new L({
                        guid: this.guid,
                        ...b.opts,
                        shouldLoad: !1
                    }), b.doc._item = a, aL(a.parent.doc, c => {
                        let d = b.doc;
                        a.deleted || c.subdocsAdded.add(d), c.subdocsRemoved.add(this)
                    }, null, !0)
                }
                this.emit("destroyed", [!0]), this.emit("destroy", [this]), super.destroy()
            }
        }
        class M {
            constructor(a) {
                this.restDecoder = a
            }
            resetDsCurVal() {}
            readDsClock() {
                return i.k(this.restDecoder)
            }
            readDsLen() {
                return i.k(this.restDecoder)
            }
        }
        class N extends M {
            readLeftID() {
                return af(i.k(this.restDecoder), i.k(this.restDecoder))
            }
            readRightID() {
                return af(i.k(this.restDecoder), i.k(this.restDecoder))
            }
            readClient() {
                return i.k(this.restDecoder)
            }
            readInfo() {
                return i.h(this.restDecoder)
            }
            readString() {
                return i.j(this.restDecoder)
            }
            readParentInfo() {
                return 1 === i.k(this.restDecoder)
            }
            readTypeRef() {
                return i.k(this.restDecoder)
            }
            readLen() {
                return i.k(this.restDecoder)
            }
            readAny() {
                return i.g(this.restDecoder)
            }
            readBuf() {
                return l.a(i.l(this.restDecoder))
            }
            readJSON() {
                return JSON.parse(i.j(this.restDecoder))
            }
            readKey() {
                return i.j(this.restDecoder)
            }
        }
        class O {
            constructor(a) {
                this.dsCurrVal = 0, this.restDecoder = a
            }
            resetDsCurVal() {
                this.dsCurrVal = 0
            }
            readDsClock() {
                return this.dsCurrVal += i.k(this.restDecoder), this.dsCurrVal
            }
            readDsLen() {
                let a = i.k(this.restDecoder) + 1;
                return this.dsCurrVal += a, a
            }
        }
        class P extends O {
            constructor(a) {
                super(a), this.keys = [], i.k(a), this.keyClockDecoder = new i.a(i.l(a)), this.clientDecoder = new i.d(i.l(a)), this.leftClockDecoder = new i.a(i.l(a)), this.rightClockDecoder = new i.a(i.l(a)), this.infoDecoder = new i.b(i.l(a), i.h), this.stringDecoder = new i.c(i.l(a)), this.parentInfoDecoder = new i.b(i.l(a), i.h), this.typeRefDecoder = new i.d(i.l(a)), this.lenDecoder = new i.d(i.l(a))
            }
            readLeftID() {
                return new ad(this.clientDecoder.read(), this.leftClockDecoder.read())
            }
            readRightID() {
                return new ad(this.clientDecoder.read(), this.rightClockDecoder.read())
            }
            readClient() {
                return this.clientDecoder.read()
            }
            readInfo() {
                return this.infoDecoder.read()
            }
            readString() {
                return this.stringDecoder.read()
            }
            readParentInfo() {
                return 1 === this.parentInfoDecoder.read()
            }
            readTypeRef() {
                return this.typeRefDecoder.read()
            }
            readLen() {
                return this.lenDecoder.read()
            }
            readAny() {
                return i.g(this.restDecoder)
            }
            readBuf() {
                return i.l(this.restDecoder)
            }
            readJSON() {
                return i.g(this.restDecoder)
            }
            readKey() {
                let a = this.keyClockDecoder.read();
                if (a < this.keys.length) return this.keys[a];
                {
                    let a = this.stringDecoder.read();
                    return this.keys.push(a), a
                }
            }
        }
        class Q {
            constructor() {
                this.restEncoder = h.e()
            }
            toUint8Array() {
                return h.f(this.restEncoder)
            }
            resetDsCurVal() {}
            writeDsClock(a) {
                h.m(this.restEncoder, a)
            }
            writeDsLen(a) {
                h.m(this.restEncoder, a)
            }
        }
        class R extends Q {
            writeLeftID(a) {
                h.m(this.restEncoder, a.client), h.m(this.restEncoder, a.clock)
            }
            writeRightID(a) {
                h.m(this.restEncoder, a.client), h.m(this.restEncoder, a.clock)
            }
            writeClient(a) {
                h.m(this.restEncoder, a)
            }
            writeInfo(a) {
                h.i(this.restEncoder, a)
            }
            writeString(a) {
                h.l(this.restEncoder, a)
            }
            writeParentInfo(a) {
                h.m(this.restEncoder, +!!a)
            }
            writeTypeRef(a) {
                h.m(this.restEncoder, a)
            }
            writeLen(a) {
                h.m(this.restEncoder, a)
            }
            writeAny(a) {
                h.g(this.restEncoder, a)
            }
            writeBuf(a) {
                h.n(this.restEncoder, a)
            }
            writeJSON(a) {
                h.l(this.restEncoder, JSON.stringify(a))
            }
            writeKey(a) {
                h.l(this.restEncoder, a)
            }
        }
        class S {
            constructor() {
                this.restEncoder = h.e(), this.dsCurrVal = 0
            }
            toUint8Array() {
                return h.f(this.restEncoder)
            }
            resetDsCurVal() {
                this.dsCurrVal = 0
            }
            writeDsClock(a) {
                let b = a - this.dsCurrVal;
                this.dsCurrVal = a, h.m(this.restEncoder, b)
            }
            writeDsLen(a) {
                0 === a && m.c(), h.m(this.restEncoder, a - 1), this.dsCurrVal += a
            }
        }
        class T extends S {
            constructor() {
                super(), this.keyMap = new Map, this.keyClock = 0, this.keyClockEncoder = new h.a, this.clientEncoder = new h.d, this.leftClockEncoder = new h.a, this.rightClockEncoder = new h.a, this.infoEncoder = new h.b(h.i), this.stringEncoder = new h.c, this.parentInfoEncoder = new h.b(h.i), this.typeRefEncoder = new h.d, this.lenEncoder = new h.d
            }
            toUint8Array() {
                let a = h.e();
                return h.m(a, 0), h.n(a, this.keyClockEncoder.toUint8Array()), h.n(a, this.clientEncoder.toUint8Array()), h.n(a, this.leftClockEncoder.toUint8Array()), h.n(a, this.rightClockEncoder.toUint8Array()), h.n(a, h.f(this.infoEncoder)), h.n(a, this.stringEncoder.toUint8Array()), h.n(a, h.f(this.parentInfoEncoder)), h.n(a, this.typeRefEncoder.toUint8Array()), h.n(a, this.lenEncoder.toUint8Array()), h.j(a, h.f(this.restEncoder)), h.f(a)
            }
            writeLeftID(a) {
                this.clientEncoder.write(a.client), this.leftClockEncoder.write(a.clock)
            }
            writeRightID(a) {
                this.clientEncoder.write(a.client), this.rightClockEncoder.write(a.clock)
            }
            writeClient(a) {
                this.clientEncoder.write(a)
            }
            writeInfo(a) {
                this.infoEncoder.write(a)
            }
            writeString(a) {
                this.stringEncoder.write(a)
            }
            writeParentInfo(a) {
                this.parentInfoEncoder.write(+!!a)
            }
            writeTypeRef(a) {
                this.typeRefEncoder.write(a)
            }
            writeLen(a) {
                this.lenEncoder.write(a)
            }
            writeAny(a) {
                h.g(this.restEncoder, a)
            }
            writeBuf(a) {
                h.n(this.restEncoder, a)
            }
            writeJSON(a) {
                h.g(this.restEncoder, a)
            }
            writeKey(a) {
                let b = this.keyMap.get(a);
                void 0 === b ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(a)) : this.keyClockEncoder.write(b)
            }
        }
        let U = (a, b, c) => {
                let d = new Map;
                c.forEach((a, c) => {
                    aw(b, c) > a && d.set(c, a)
                }), av(b).forEach((a, b) => {
                    c.has(b) || d.set(b, 0)
                }), h.m(a.restEncoder, d.size), e.c(d.entries()).sort((a, b) => b[0] - a[0]).forEach(([c, d]) => {
                    ((a, b, c, d) => {
                        d = f.d(d, b[0].id.clock);
                        let e = ay(b, d);
                        h.m(a.restEncoder, b.length - e), a.writeClient(c), h.m(a.restEncoder, d);
                        let g = b[e];
                        g.write(a, d - g.id.clock);
                        for (let c = e + 1; c < b.length; c++) b[c].write(a, 0)
                    })(a, b.clients.get(c), c, d)
                })
            },
            V = (a, b, c, d = new P(a)) => aL(b, a => {
                a.local = !1;
                let b = !1,
                    c = a.doc,
                    f = c.store,
                    j = ((a, b, c) => {
                        let d = [],
                            f = e.c(c.keys()).sort((a, b) => a - b);
                        if (0 === f.length) return null;
                        let i = () => {
                                if (0 === f.length) return null;
                                let a = c.get(f[f.length - 1]);
                                for (; a.refs.length === a.i;) {
                                    if (f.pop(), !(f.length > 0)) return null;
                                    a = c.get(f[f.length - 1])
                                }
                                return a
                            },
                            j = i();
                        if (null === j) return null;
                        let k = new au,
                            l = new Map,
                            m = (a, b) => {
                                let c = l.get(a);
                                (null == c || c > b) && l.set(a, b)
                            },
                            n = j.refs[j.i++],
                            o = new Map,
                            p = () => {
                                for (let a of d) {
                                    let b = a.id.client,
                                        d = c.get(b);
                                    d ? (d.i--, k.clients.set(b, d.refs.slice(d.i)), c.delete(b), d.i = 0, d.refs = []) : k.clients.set(b, [a]), f = f.filter(a => a !== b)
                                }
                                d.length = 0
                            };
                        for (;;) {
                            if (n.constructor !== cl) {
                                let e = g.e(o, n.id.client, () => aw(b, n.id.client)) - n.id.clock;
                                if (e < 0) d.push(n), m(n.id.client, n.id.clock - 1), p();
                                else {
                                    let f = n.getMissing(a, b);
                                    if (null !== f) {
                                        d.push(n);
                                        let a = c.get(f) || {
                                            refs: [],
                                            i: 0
                                        };
                                        if (a.refs.length === a.i) m(f, aw(b, f)), p();
                                        else {
                                            n = a.refs[a.i++];
                                            continue
                                        }
                                    } else(0 === e || e < n.length) && (n.integrate(a, e), o.set(n.id.client, n.id.clock + n.length))
                                }
                            }
                            if (d.length > 0) n = d.pop();
                            else if (null !== j && j.i < j.refs.length) n = j.refs[j.i++];
                            else {
                                if (null === (j = i())) break;
                                n = j.refs[j.i++]
                            }
                        }
                        if (k.clients.size > 0) {
                            let a = new T;
                            return U(a, k, new Map), h.m(a.restEncoder, 0), {
                                missing: l,
                                update: a.toUint8Array()
                            }
                        }
                        return null
                    })(a, f, ((a, b) => {
                        let c = g.c(),
                            d = i.k(a.restDecoder);
                        for (let e = 0; e < d; e++) {
                            let d = i.k(a.restDecoder),
                                e = Array(d),
                                f = a.readClient(),
                                g = i.k(a.restDecoder);
                            c.set(f, {
                                i: 0,
                                refs: e
                            });
                            for (let c = 0; c < d; c++) {
                                let d = a.readInfo();
                                switch (31 & d) {
                                    case 0: {
                                        let b = a.readLen();
                                        e[c] = new bV(af(f, g), b), g += b;
                                        break
                                    }
                                    case 10: {
                                        let b = i.k(a.restDecoder);
                                        e[c] = new cl(af(f, g), b), g += b;
                                        break
                                    }
                                    default: {
                                        let h = (192 & d) == 0,
                                            i = new ci(af(f, g), null, (128 & d) == 128 ? a.readLeftID() : null, null, (64 & d) == 64 ? a.readRightID() : null, h ? a.readParentInfo() ? b.get(a.readString()) : a.readLeftID() : null, h && (32 & d) == 32 ? a.readString() : null, cj(a, d));
                                        e[c] = i, g += i.length
                                    }
                                }
                            }
                        }
                        return c
                    })(d, c)),
                    k = f.pendingStructs;
                if (k) {
                    for (let [a, c] of k.missing)
                        if (c < aw(f, a)) {
                            b = !0;
                            break
                        } if (j) {
                        for (let [a, b] of j.missing) {
                            let c = k.missing.get(a);
                            (null == c || c > b) && k.missing.set(a, b)
                        }
                        k.update = aY([k.update, j.update])
                    }
                } else f.pendingStructs = j;
                let l = I(d, a, f);
                if (f.pendingDs) {
                    let b = new P(i.e(f.pendingDs));
                    i.k(b.restDecoder);
                    let c = I(b, a, f);
                    l && c ? f.pendingDs = aY([l, c]) : f.pendingDs = l || c
                } else f.pendingDs = l;
                if (b) {
                    let b = f.pendingStructs.update;
                    f.pendingStructs = null, W(a.doc, b)
                }
            }, c, !1),
            W = (a, b, c, d = P) => {
                let e = i.e(b);
                V(e, a, c, new d(e))
            },
            X = (a, b = new Uint8Array([0]), c = new T) => {
                ((a, b, c = new Map) => {
                    U(a, b.store, c), G(a, F(b.store))
                })(c, a, Z(b));
                let d = [c.toUint8Array()];
                if (a.store.pendingDs && d.push(a.store.pendingDs), a.store.pendingStructs && d.push(aZ(a.store.pendingStructs.update, b)), d.length > 1) {
                    if (c.constructor === R) return aU(d.map((a, b) => 0 === b ? a : a3(a)));
                    else if (c.constructor === T) return aY(d)
                }
                return d[0]
            },
            Y = a => {
                let b = new Map,
                    c = i.k(a.restDecoder);
                for (let d = 0; d < c; d++) {
                    let c = i.k(a.restDecoder),
                        d = i.k(a.restDecoder);
                    b.set(c, d)
                }
                return b
            },
            Z = a => Y(new M(i.e(a))),
            $ = (a, b) => (h.m(a.restEncoder, b.size), e.c(b.entries()).sort((a, b) => b[0] - a[0]).forEach(([b, c]) => {
                h.m(a.restEncoder, b), h.m(a.restEncoder, c)
            }), a);
        class _ {
            constructor() {
                this.l = []
            }
        }
        let aa = () => new _,
            ab = (a, b) => {
                let c = a.l,
                    d = c.length;
                a.l = c.filter(a => b !== a), d === a.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.")
            },
            ac = (a, b, c) => n.a(a.l, [b, c]);
        class ad {
            constructor(a, b) {
                this.client = a, this.clock = b
            }
        }
        let ae = (a, b) => a === b || null !== a && null !== b && a.client === b.client && a.clock === b.clock,
            af = (a, b) => new ad(a, b),
            ag = (a, b) => {
                h.m(a, b.client), h.m(a, b.clock)
            },
            ah = a => af(i.k(a), i.k(a)),
            ai = a => {
                for (let [b, c] of a.doc.share.entries())
                    if (c === a) return b;
                throw m.c()
            },
            aj = (a, b) => {
                for (; null !== b;) {
                    if (b.parent === a) return !0;
                    b = b.parent._item
                }
                return !1
            };
        class ak {
            constructor(a, b, c, d = 0) {
                this.type = a, this.tname = b, this.item = c, this.assoc = d
            }
        }
        class al {
            constructor(a, b, c = 0) {
                this.type = a, this.index = b, this.assoc = c
            }
        }
        let am = (a, b, c) => {
            let d = null,
                e = null;
            return null === a._item ? e = ai(a) : d = af(a._item.id.client, a._item.id.clock), new ak(d, e, b, c)
        };
        class an {
            constructor(a, b) {
                this.ds = a, this.sv = b
            }
        }
        let ao = (a, b = new S) => (G(b, a.ds), $(b, a.sv), b.toUint8Array()),
            ap = (a, b = new O(i.e(a))) => new an(H(b), Y(b)),
            aq = (a, b) => new an(a, b),
            ar = aq(E(), new Map),
            as = (a, b) => void 0 === b ? !a.deleted : b.sv.has(a.id.client) && (b.sv.get(a.id.client) || 0) > a.id.clock && !A(b.ds, a.id),
            at = (a, b) => {
                let c = g.e(a.meta, at, o.a),
                    d = a.doc.store;
                c.has(b) || (b.sv.forEach((b, c) => {
                    b < aw(d, c) && aB(a, af(c, b))
                }), z(a, b.ds, a => {}), c.add(b))
            };
        class au {
            constructor() {
                this.clients = new Map, this.pendingStructs = null, this.pendingDs = null
            }
        }
        let av = a => {
                let b = new Map;
                return a.clients.forEach((a, c) => {
                    let d = a[a.length - 1];
                    b.set(c, d.id.clock + d.length)
                }), b
            },
            aw = (a, b) => {
                let c = a.clients.get(b);
                if (void 0 === c) return 0;
                let d = c[c.length - 1];
                return d.id.clock + d.length
            },
            ax = (a, b) => {
                let c = a.clients.get(b.id.client);
                if (void 0 === c) c = [], a.clients.set(b.id.client, c);
                else {
                    let a = c[c.length - 1];
                    if (a.id.clock + a.length !== b.id.clock) throw m.c()
                }
                c.push(b)
            },
            ay = (a, b) => {
                let c = 0,
                    d = a.length - 1,
                    e = a[d],
                    g = e.id.clock;
                if (g === b) return d;
                let h = f.b(b / (g + e.length - 1) * d);
                for (; c <= d;) {
                    if ((g = (e = a[h]).id.clock) <= b) {
                        if (b < g + e.length) return h;
                        c = h + 1
                    } else d = h - 1;
                    h = f.b((c + d) / 2)
                }
                throw m.c()
            },
            az = (a, b) => {
                let c = a.clients.get(b.client);
                return c[ay(c, b.clock)]
            },
            aA = (a, b, c) => {
                let d = ay(b, c),
                    e = b[d];
                return e.id.clock < c && e instanceof ci ? (b.splice(d + 1, 0, cf(a, e, c - e.id.clock)), d + 1) : d
            },
            aB = (a, b) => {
                let c = a.doc.store.clients.get(b.client);
                return c[aA(a, c, b.clock)]
            },
            aC = (a, b, c) => {
                let d = b.clients.get(c.client),
                    e = ay(d, c.clock),
                    f = d[e];
                return c.clock !== f.id.clock + f.length - 1 && f.constructor !== bV && d.splice(e + 1, 0, cf(a, f, c.clock - f.id.clock + 1)), f
            },
            aD = (a, b, c, d, e) => {
                let f;
                if (0 === d) return;
                let g = c + d,
                    h = aA(a, b, c);
                do g < (f = b[h++]).id.clock + f.length && aA(a, b, g), e(f); while (h < b.length && b[h].id.clock < g)
            };
        class aE {
            constructor(a, b, c) {
                this.doc = a, this.deleteSet = new y, this.beforeState = av(a.store), this.afterState = new Map, this.changed = new Map, this.changedParentTypes = new Map, this._mergeStructs = [], this.origin = b, this.meta = new Map, this.local = c, this.subdocsAdded = new Set, this.subdocsRemoved = new Set, this.subdocsLoaded = new Set, this._needFormattingCleanup = !1
            }
        }
        let aF = (a, b) => (0 !== b.deleteSet.clients.size || !!g.a(b.afterState, (a, c) => b.beforeState.get(c) !== a)) && (B(b.deleteSet), U(a, b.doc.store, b.beforeState), G(a, b.deleteSet), !0),
            aG = (a, b, c) => {
                let d = b._item;
                (null === d || d.id.clock < (a.beforeState.get(d.id.client) || 0) && !d.deleted) && g.e(a.changed, b, o.a).add(c)
            },
            aH = (a, b) => {
                let c = a[b],
                    d = a[b - 1],
                    e = b;
                for (; e > 0; c = d, d = a[--e - 1]) {
                    if (d.deleted === c.deleted && d.constructor === c.constructor && d.mergeWith(c)) {
                        c instanceof ci && null !== c.parentSub && c.parent._map.get(c.parentSub) === c && c.parent._map.set(c.parentSub, d);
                        continue
                    }
                    break
                }
                let f = b - e;
                return f && a.splice(b + 1 - f, f), f
            },
            aI = (a, b, c) => {
                for (let [d, e] of a.clients.entries()) {
                    let a = b.clients.get(d);
                    for (let d = e.length - 1; d >= 0; d--) {
                        let f = e[d],
                            g = f.clock + f.len;
                        for (let d = ay(a, f.clock), e = a[d]; d < a.length && e.id.clock < g; e = a[++d]) {
                            let e = a[d];
                            if (f.clock + f.len <= e.id.clock) break;
                            e instanceof ci && e.deleted && !e.keep && c(e) && e.gc(b, !1)
                        }
                    }
                }
            },
            aJ = (a, b) => {
                a.clients.forEach((a, c) => {
                    let d = b.clients.get(c);
                    for (let b = a.length - 1; b >= 0; b--) {
                        let c = a[b],
                            e = f.e(d.length - 1, 1 + ay(d, c.clock + c.len - 1));
                        for (let a = e, b = d[a]; a > 0 && b.id.clock >= c.clock; b = d[a]) a -= 1 + aH(d, a)
                    }
                })
            },
            aK = (a, b) => {
                if (b < a.length) {
                    let c = a[b],
                        d = c.doc,
                        e = d.store,
                        g = c.deleteSet,
                        h = c._mergeStructs;
                    try {
                        B(g), c.afterState = av(c.doc.store), d.emit("beforeObserverCalls", [c, d]);
                        let a = [];
                        c.changed.forEach((b, d) => a.push(() => {
                            null !== d._item && d._item.deleted || d._callObserver(c, b)
                        })), a.push(() => {
                            c.changedParentTypes.forEach((b, d) => {
                                d._dEH.l.length > 0 && (null === d._item || !d._item.deleted) && ((b = b.filter(a => null === a.target._item || !a.target._item.deleted)).forEach(a => {
                                    a.currentTarget = d, a._path = null
                                }), b.sort((a, b) => a.path.length - b.path.length), a.push(() => {
                                    ac(d._dEH, b, c)
                                }))
                            }), a.push(() => d.emit("afterTransaction", [c, d])), a.push(() => {
                                c._needFormattingCleanup && bK(c)
                            })
                        }), (0, n.a)(a, [])
                    } finally {
                        d.gc && aI(g, e, d.gcFilter), aJ(g, e), c.afterState.forEach((a, b) => {
                            let d = c.beforeState.get(b) || 0;
                            if (d !== a) {
                                let a = e.clients.get(b),
                                    c = f.d(ay(a, d), 1);
                                for (let b = a.length - 1; b >= c;) b -= 1 + aH(a, b)
                            }
                        });
                        for (let a = h.length - 1; a >= 0; a--) {
                            let {
                                client: b,
                                clock: c
                            } = h[a].id, d = e.clients.get(b), f = ay(d, c);
                            !(f + 1 < d.length && aH(d, f + 1) > 1) && f > 0 && aH(d, f)
                        }
                        if (c.local || c.afterState.get(d.clientID) === c.beforeState.get(d.clientID) || (p.a(q.e, q.b, "[yjs] ", q.h, q.g, "Changed the client-id because another client seems to be using it."), d.clientID = K()), d.emit("afterTransactionCleanup", [c, d]), d._observers.has("update")) {
                            let a = new R;
                            aF(a, c) && d.emit("update", [a.toUint8Array(), c.origin, d, c])
                        }
                        if (d._observers.has("updateV2")) {
                            let a = new T;
                            aF(a, c) && d.emit("updateV2", [a.toUint8Array(), c.origin, d, c])
                        }
                        let {
                            subdocsAdded: i,
                            subdocsLoaded: j,
                            subdocsRemoved: k
                        } = c;
                        (i.size > 0 || k.size > 0 || j.size > 0) && (i.forEach(a => {
                            a.clientID = d.clientID, null == a.collectionid && (a.collectionid = d.collectionid), d.subdocs.add(a)
                        }), k.forEach(a => d.subdocs.delete(a)), d.emit("subdocs", [{
                            loaded: j,
                            added: i,
                            removed: k
                        }, d, c]), k.forEach(a => a.destroy())), a.length <= b + 1 ? (d._transactionCleanups = [], d.emit("afterAllTransactions", [d, a])) : aK(a, b + 1)
                    }
                }
            },
            aL = (a, b, c = null, d = !0) => {
                let e = a._transactionCleanups,
                    f = !1,
                    g = null;
                null === a._transaction && (f = !0, a._transaction = new aE(a, c, d), e.push(a._transaction), 1 === e.length && a.emit("beforeAllTransactions", [a]), a.emit("beforeTransaction", [a._transaction, a]));
                try {
                    g = b(a._transaction)
                } finally {
                    if (f) {
                        let b = a._transaction === e[0];
                        a._transaction = null, b && aK(e, 0)
                    }
                }
                return g
            };
        class aM {
            constructor(a, b) {
                this.insertions = b, this.deletions = a, this.meta = new Map
            }
        }
        let aN = (a, b, c) => {
                z(a, c.deletions, c => {
                    c instanceof ci && b.scope.some(b => b === a.doc || aj(b, c)) && ce(c, !1)
                })
            },
            aO = (a, b, c) => {
                let d = null,
                    e = a.doc,
                    f = a.scope;
                aL(e, c => {
                    for (; b.length > 0 && null === a.currStackItem;) {
                        let d = e.store,
                            g = b.pop(),
                            h = new Set,
                            i = [],
                            j = !1;
                        z(c, g.insertions, a => {
                            if (a instanceof ci) {
                                if (null !== a.redone) {
                                    let {
                                        item: b,
                                        diff: e
                                    } = cd(d, a.id);
                                    e > 0 && (b = aB(c, af(b.id.client, b.id.clock + e))), a = b
                                }!a.deleted && f.some(b => b === c.doc || aj(b, a)) && i.push(a)
                            }
                        }), z(c, g.deletions, a => {
                            a instanceof ci && f.some(b => b === c.doc || aj(b, a)) && !A(g.insertions, a.id) && h.add(a)
                        }), h.forEach(b => {
                            j = null !== ch(c, b, h, g.insertions, a.ignoreRemoteMapChanges, a) || j
                        });
                        for (let b = i.length - 1; b >= 0; b--) {
                            let d = i[b];
                            a.deleteFilter(d) && (d.delete(c), j = !0)
                        }
                        a.currStackItem = j ? g : null
                    }
                    c.changed.forEach((a, b) => {
                        a.has(null) && b._searchMarker && (b._searchMarker.length = 0)
                    }), d = c
                }, a);
                let g = a.currStackItem;
                if (null != g) {
                    let b = d.changedParentTypes;
                    a.emit("stack-item-popped", [{
                        stackItem: g,
                        type: c,
                        changedParentTypes: b,
                        origin: a
                    }, a]), a.currStackItem = null
                }
                return g
            };
        class aP extends d.a {
            constructor(a, {
                captureTimeout: b = 500,
                captureTransaction: c = a => !0,
                deleteFilter: d = () => !0,
                trackedOrigins: f = new Set([null]),
                ignoreRemoteMapChanges: g = !1,
                doc: h = e.d(a) ? a[0].doc : a instanceof L ? a : a.doc
            } = {}) {
                super(), this.scope = [], this.doc = h, this.addToScope(a), this.deleteFilter = d, f.add(this), this.trackedOrigins = f, this.captureTransaction = c, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = g, this.captureTimeout = b, this.afterTransactionHandler = a => {
                    if (!this.captureTransaction(a) || !this.scope.some(b => a.changedParentTypes.has(b) || b === this.doc) || !this.trackedOrigins.has(a.origin) && (!a.origin || !this.trackedOrigins.has(a.origin.constructor))) return;
                    let b = this.undoing,
                        c = this.redoing,
                        d = b ? this.redoStack : this.undoStack;
                    b ? this.stopCapturing() : c || this.clear(!1, !0);
                    let e = new y;
                    a.afterState.forEach((b, c) => {
                        let d = a.beforeState.get(c) || 0,
                            f = b - d;
                        f > 0 && D(e, c, d, f)
                    });
                    let f = r.a(),
                        g = !1;
                    if (this.lastChange > 0 && f - this.lastChange < this.captureTimeout && d.length > 0 && !b && !c) {
                        let b = d[d.length - 1];
                        b.deletions = C([b.deletions, a.deleteSet]), b.insertions = C([b.insertions, e])
                    } else d.push(new aM(a.deleteSet, e)), g = !0;
                    b || c || (this.lastChange = f), z(a, a.deleteSet, b => {
                        b instanceof ci && this.scope.some(c => c === a.doc || aj(c, b)) && ce(b, !0)
                    });
                    let h = [{
                        stackItem: d[d.length - 1],
                        origin: a.origin,
                        type: b ? "redo" : "undo",
                        changedParentTypes: a.changedParentTypes
                    }, this];
                    g ? this.emit("stack-item-added", h) : this.emit("stack-item-updated", h)
                }, this.doc.on("afterTransaction", this.afterTransactionHandler), this.doc.on("destroy", () => {
                    this.destroy()
                })
            }
            addToScope(a) {
                let b = new Set(this.scope);
                (a = e.d(a) ? a : [a]).forEach(a => {
                    b.has(a) || (b.add(a), (a instanceof be ? a.doc !== this.doc : a !== this.doc) && p.b("[yjs#509] Not same Y.Doc"), this.scope.push(a))
                })
            }
            addTrackedOrigin(a) {
                this.trackedOrigins.add(a)
            }
            removeTrackedOrigin(a) {
                this.trackedOrigins.delete(a)
            }
            clear(a = !0, b = !0) {
                (a && this.canUndo() || b && this.canRedo()) && this.doc.transact(c => {
                    a && (this.undoStack.forEach(a => aN(c, this, a)), this.undoStack = []), b && (this.redoStack.forEach(a => aN(c, this, a)), this.redoStack = []), this.emit("stack-cleared", [{
                        undoStackCleared: a,
                        redoStackCleared: b
                    }])
                })
            }
            stopCapturing() {
                this.lastChange = 0
            }
            undo() {
                let a;
                this.undoing = !0;
                try {
                    a = aO(this, this.undoStack, "undo")
                } finally {
                    this.undoing = !1
                }
                return a
            }
            redo() {
                let a;
                this.redoing = !0;
                try {
                    a = aO(this, this.redoStack, "redo")
                } finally {
                    this.redoing = !1
                }
                return a
            }
            canUndo() {
                return this.undoStack.length > 0
            }
            canRedo() {
                return this.redoStack.length > 0
            }
            destroy() {
                this.trackedOrigins.delete(this), this.doc.off("afterTransaction", this.afterTransactionHandler), super.destroy()
            }
        }
        class aQ {
            constructor(a, b) {
                this.gen = function*(a) {
                    let b = i.k(a.restDecoder);
                    for (let c = 0; c < b; c++) {
                        let b = i.k(a.restDecoder),
                            c = a.readClient(),
                            d = i.k(a.restDecoder);
                        for (let e = 0; e < b; e++) {
                            let b = a.readInfo();
                            if (10 === b) {
                                let b = i.k(a.restDecoder);
                                yield new cl(af(c, d), b), d += b
                            } else if ((31 & b) != 0) {
                                let e = (192 & b) == 0,
                                    f = new ci(af(c, d), null, (128 & b) == 128 ? a.readLeftID() : null, null, (64 & b) == 64 ? a.readRightID() : null, e ? a.readParentInfo() ? a.readString() : a.readLeftID() : null, e && (32 & b) == 32 ? a.readString() : null, cj(a, b));
                                yield f, d += f.length
                            } else {
                                let b = a.readLen();
                                yield new bV(af(c, d), b), d += b
                            }
                        }
                    }
                }(a), this.curr = null, this.done = !1, this.filterSkips = b, this.next()
            }
            next() {
                do this.curr = this.gen.next().value || null; while (this.filterSkips && null !== this.curr && this.curr.constructor === cl) return this.curr
            }
        }
        let aR = (a, b = P) => {
                let c = [],
                    d = new b(i.e(a)),
                    e = new aQ(d, !1);
                for (let a = e.curr; null !== a; a = e.next()) c.push(a);
                p.a("Structs: ", c);
                let f = H(d);
                p.a("DeleteSet: ", f)
            },
            aS = (a, b = P) => {
                let c = [],
                    d = new b(i.e(a)),
                    e = new aQ(d, !1);
                for (let a = e.curr; null !== a; a = e.next()) c.push(a);
                return {
                    structs: c,
                    ds: H(d)
                }
            };
        class aT {
            constructor(a) {
                this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = a, this.clientStructs = []
            }
        }
        let aU = a => aY(a, N, R),
            aV = (a, b = S, c = P) => {
                let d = new b,
                    e = new aQ(new c(i.e(a)), !1),
                    f = e.curr;
                if (null === f) return h.m(d.restEncoder, 0), d.toUint8Array();
                {
                    let a = 0,
                        b = f.id.client,
                        c = 0 !== f.id.clock,
                        g = c ? 0 : f.id.clock + f.length;
                    for (; null !== f; f = e.next()) b !== f.id.client && (0 !== g && (a++, h.m(d.restEncoder, b), h.m(d.restEncoder, g)), b = f.id.client, g = 0, c = 0 !== f.id.clock), f.constructor === cl && (c = !0), c || (g = f.id.clock + f.length);
                    0 !== g && (a++, h.m(d.restEncoder, b), h.m(d.restEncoder, g));
                    let i = h.e();
                    return h.m(i, a), h.h(i, d.restEncoder), d.restEncoder = i, d.toUint8Array()
                }
            },
            aW = (a, b = P) => {
                let c = new Map,
                    d = new Map,
                    e = new aQ(new b(i.e(a)), !1),
                    f = e.curr;
                if (null !== f) {
                    let a = f.id.client,
                        b = f.id.clock;
                    for (c.set(a, b); null !== f; f = e.next()) a !== f.id.client && (d.set(a, b), c.set(f.id.client, f.id.clock), a = f.id.client), b = f.id.clock + f.length;
                    d.set(a, b)
                }
                return {
                    from: c,
                    to: d
                }
            },
            aX = (a, b) => {
                if (a.constructor === bV) {
                    let {
                        client: c,
                        clock: d
                    } = a.id;
                    return new bV(af(c, d + b), a.length - b)
                }
                if (a.constructor === cl) {
                    let {
                        client: c,
                        clock: d
                    } = a.id;
                    return new cl(af(c, d + b), a.length - b)
                } {
                    let {
                        client: c,
                        clock: d
                    } = a.id;
                    return new ci(af(c, d + b), null, af(c, d + b - 1), null, a.rightOrigin, a.parent, a.parentSub, a.content.splice(b))
                }
            },
            aY = (a, b = P, c = T) => {
                if (1 === a.length) return a[0];
                let d = a.map(a => new b(i.e(a))),
                    e = d.map(a => new aQ(a, !0)),
                    f = null,
                    g = new c,
                    h = new aT(g);
                for (;
                    (e = e.filter(a => null !== a.curr)).sort((a, b) => {
                        if (a.curr.id.client !== b.curr.id.client) return b.curr.id.client - a.curr.id.client;
                        {
                            let c = a.curr.id.clock - b.curr.id.clock;
                            return 0 === c ? a.curr.constructor === b.curr.constructor ? 0 : a.curr.constructor === cl ? 1 : -1 : c
                        }
                    }), 0 !== e.length;) {
                    let a = e[0],
                        b = a.curr.id.client;
                    if (null !== f) {
                        let c = a.curr,
                            d = !1;
                        for (; null !== c && c.id.clock + c.length <= f.struct.id.clock + f.struct.length && c.id.client >= f.struct.id.client;) c = a.next(), d = !0;
                        if (null === c || c.id.client !== b || d && c.id.clock > f.struct.id.clock + f.struct.length) continue;
                        if (b !== f.struct.id.client) a_(h, f.struct, f.offset), f = {
                            struct: c,
                            offset: 0
                        }, a.next();
                        else if (f.struct.id.clock + f.struct.length < c.id.clock)
                            if (f.struct.constructor === cl) f.struct.length = c.id.clock + c.length - f.struct.id.clock;
                            else {
                                a_(h, f.struct, f.offset);
                                let a = c.id.clock - f.struct.id.clock - f.struct.length;
                                f = {
                                    struct: new cl(af(b, f.struct.id.clock + f.struct.length), a),
                                    offset: 0
                                }
                            }
                        else {
                            let b = f.struct.id.clock + f.struct.length - c.id.clock;
                            b > 0 && (f.struct.constructor === cl ? f.struct.length -= b : c = aX(c, b)), f.struct.mergeWith(c) || (a_(h, f.struct, f.offset), f = {
                                struct: c,
                                offset: 0
                            }, a.next())
                        }
                    } else f = {
                        struct: a.curr,
                        offset: 0
                    }, a.next();
                    for (let c = a.curr; null !== c && c.id.client === b && c.id.clock === f.struct.id.clock + f.struct.length && c.constructor !== cl; c = a.next()) a_(h, f.struct, f.offset), f = {
                        struct: c,
                        offset: 0
                    }
                }
                return null !== f && (a_(h, f.struct, f.offset), f = null), a0(h), G(g, C(d.map(a => H(a)))), g.toUint8Array()
            },
            aZ = (a, b, c = P, d = T) => {
                let e = Z(b),
                    g = new d,
                    h = new aT(g),
                    j = new c(i.e(a)),
                    k = new aQ(j, !1);
                for (; k.curr;) {
                    let a = k.curr,
                        b = a.id.client,
                        c = e.get(b) || 0;
                    if (k.curr.constructor === cl) {
                        k.next();
                        continue
                    }
                    if (a.id.clock + a.length > c)
                        for (a_(h, a, f.d(c - a.id.clock, 0)), k.next(); k.curr && k.curr.id.client === b;) a_(h, k.curr, 0), k.next();
                    else
                        for (; k.curr && k.curr.id.client === b && k.curr.id.clock + k.curr.length <= c;) k.next()
                }
                return a0(h), G(g, H(j)), g.toUint8Array()
            },
            a$ = a => {
                a.written > 0 && (a.clientStructs.push({
                    written: a.written,
                    restEncoder: h.f(a.encoder.restEncoder)
                }), a.encoder.restEncoder = h.e(), a.written = 0)
            },
            a_ = (a, b, c) => {
                a.written > 0 && a.currClient !== b.id.client && a$(a), 0 === a.written && (a.currClient = b.id.client, a.encoder.writeClient(b.id.client), h.m(a.encoder.restEncoder, b.id.clock + c)), b.write(a.encoder, c), a.written++
            },
            a0 = a => {
                a$(a);
                let b = a.encoder.restEncoder;
                h.m(b, a.clientStructs.length);
                for (let c = 0; c < a.clientStructs.length; c++) {
                    let d = a.clientStructs[c];
                    h.m(b, d.written), h.j(b, d.restEncoder)
                }
            },
            a1 = (a, b, c, d) => {
                let e = new c(i.e(a)),
                    f = new aQ(e, !1),
                    g = new d,
                    h = new aT(g);
                for (let a = f.curr; null !== a; a = f.next()) a_(h, b(a), 0);
                return a0(h), G(g, H(e)), g.toUint8Array()
            },
            a2 = ({
                formatting: a = !0,
                subdocs: b = !0,
                yxml: c = !0
            } = {}) => {
                let d = 0,
                    e = g.c(),
                    f = g.c(),
                    h = g.c(),
                    i = g.c();
                return i.set(null, null), j => {
                    switch (j.constructor) {
                        case bV:
                        case cl:
                            return j;
                        case ci: {
                            let k = j.content;
                            switch (k.constructor) {
                                case bX:
                                    break;
                                case cc:
                                    if (c) {
                                        let a = k.type;
                                        a instanceof bQ && (a.nodeName = g.e(f, a.nodeName, () => "node-" + d)), a instanceof bS && (a.hookName = g.e(f, a.hookName, () => "hook-" + d))
                                    }
                                    break;
                                case b2:
                                    k.arr = k.arr.map(() => d);
                                    break;
                                case bW:
                                    k.content = new Uint8Array([d]);
                                    break;
                                case bZ:
                                    b && (k.opts = {}, k.doc.guid = d + "");
                                    break;
                                case b$:
                                    k.embed = {};
                                    break;
                                case b_:
                                    a && (k.key = g.e(h, k.key, () => d + ""), k.value = g.e(i, k.value, () => ({
                                        i: d
                                    })));
                                    break;
                                case b0:
                                    k.arr = k.arr.map(() => d);
                                    break;
                                case b3:
                                    k.str = s.d(d % 10 + "", k.str.length);
                                    break;
                                default:
                                    m.c()
                            }
                            return j.parentSub && (j.parentSub = g.e(e, j.parentSub, () => d + "")), d++, j
                        }
                        default:
                            m.c()
                    }
                }
            },
            a3 = a => a1(a, n.c, P, R),
            a4 = "You must not compute changes after the event-handler fired.";
        class a5 {
            constructor(a, b) {
                this.target = a, this.currentTarget = a, this.transaction = b, this._changes = null, this._keys = null, this._delta = null, this._path = null
            }
            get path() {
                return this._path || (this._path = a6(this.currentTarget, this.target))
            }
            deletes(a) {
                return A(this.transaction.deleteSet, a.id)
            }
            get keys() {
                if (null === this._keys) {
                    if (0 === this.transaction.doc._transactionCleanups.length) throw m.a(a4);
                    let a = new Map,
                        b = this.target;
                    this.transaction.changed.get(b).forEach(c => {
                        if (null !== c) {
                            let d, f, g = b._map.get(c);
                            if (this.adds(g)) {
                                let a = g.left;
                                for (; null !== a && this.adds(a);) a = a.left;
                                if (this.deletes(g))
                                    if (!(null !== a && this.deletes(a))) return;
                                    else d = "delete", f = e.e(a.content.getContent());
                                else null !== a && this.deletes(a) ? (d = "update", f = e.e(a.content.getContent())) : (d = "add", f = void 0)
                            } else {
                                if (!this.deletes(g)) return;
                                d = "delete", f = e.e(g.content.getContent())
                            }
                            a.set(c, {
                                action: d,
                                oldValue: f
                            })
                        }
                    }), this._keys = a
                }
                return this._keys
            }
            get delta() {
                return this.changes.delta
            }
            adds(a) {
                return a.id.clock >= (this.transaction.beforeState.get(a.id.client) || 0)
            }
            get changes() {
                let a = this._changes;
                if (null === a) {
                    if (0 === this.transaction.doc._transactionCleanups.length) throw m.a(a4);
                    let b = this.target,
                        c = o.a(),
                        d = o.a(),
                        e = [];
                    if (a = {
                            added: c,
                            deleted: d,
                            delta: e,
                            keys: this.keys
                        }, this.transaction.changed.get(b).has(null)) {
                        let a = null,
                            f = () => {
                                a && e.push(a)
                            };
                        for (let e = b._start; null !== e; e = e.right) e.deleted ? this.deletes(e) && !this.adds(e) && ((null === a || void 0 === a.delete) && (f(), a = {
                            delete: 0
                        }), a.delete += e.length, d.add(e)) : this.adds(e) ? ((null === a || void 0 === a.insert) && (f(), a = {
                            insert: []
                        }), a.insert = a.insert.concat(e.content.getContent()), c.add(e)) : ((null === a || void 0 === a.retain) && (f(), a = {
                            retain: 0
                        }), a.retain += e.length);
                        null !== a && void 0 === a.retain && f()
                    }
                    this._changes = a
                }
                return a
            }
        }
        let a6 = (a, b) => {
                let c = [];
                for (; null !== b._item && b !== a;) {
                    if (null !== b._item.parentSub) c.unshift(b._item.parentSub);
                    else {
                        let a = 0,
                            d = b._item.parent._start;
                        for (; d !== b._item && null !== d;) !d.deleted && d.countable && (a += d.length), d = d.right;
                        c.unshift(a)
                    }
                    b = b._item.parent
                }
                return c
            },
            a7 = () => {
                p.b("Invalid access: Add Yjs type to a document before reading data.")
            },
            a8 = 0;
        class a9 {
            constructor(a, b) {
                a.marker = !0, this.p = a, this.index = b, this.timestamp = a8++
            }
        }
        let ba = (a, b, c) => {
                a.p.marker = !1, a.p = b, b.marker = !0, a.index = c, a.timestamp = a8++
            },
            bb = (a, b) => {
                if (null === a._start || 0 === b || null === a._searchMarker) return null;
                let c = 0 === a._searchMarker.length ? null : a._searchMarker.reduce((a, c) => f.a(b - a.index) < f.a(b - c.index) ? a : c),
                    d = a._start,
                    e = 0;
                for (null !== c && (d = c.p, e = c.index, c.timestamp = a8++); null !== d.right && e < b;) {
                    if (!d.deleted && d.countable) {
                        if (b < e + d.length) break;
                        e += d.length
                    }
                    d = d.right
                }
                for (; null !== d.left && e > b;) !(d = d.left).deleted && d.countable && (e -= d.length);
                for (; null !== d.left && d.left.id.client === d.id.client && d.left.id.clock + d.left.length === d.id.clock;) !(d = d.left).deleted && d.countable && (e -= d.length);
                if (null !== c && f.a(c.index - e) < d.parent.length / 80) return ba(c, d, e), c;
                var g = a._searchMarker,
                    h = d,
                    i = e;
                if (g.length >= 80) {
                    let a = g.reduce((a, b) => a.timestamp < b.timestamp ? a : b);
                    return ba(a, h, i), a
                } {
                    let a = new a9(h, i);
                    return g.push(a), a
                }
            },
            bc = (a, b, c) => {
                for (let d = a.length - 1; d >= 0; d--) {
                    let e = a[d];
                    if (c > 0) {
                        let b = e.p;
                        for (b.marker = !1; b && (b.deleted || !b.countable);)(b = b.left) && !b.deleted && b.countable && (e.index -= b.length);
                        if (null === b || !0 === b.marker) {
                            a.splice(d, 1);
                            continue
                        }
                        e.p = b, b.marker = !0
                    }(b < e.index || c > 0 && b === e.index) && (e.index = f.d(b, e.index + c))
                }
            },
            bd = (a, b, c) => {
                let d = a,
                    e = b.changedParentTypes;
                for (; g.e(e, a, () => []).push(c), null !== a._item;) a = a._item.parent;
                ac(d._eH, c, b)
            };
        class be {
            constructor() {
                this._item = null, this._map = new Map, this._start = null, this.doc = null, this._length = 0, this._eH = aa(), this._dEH = aa(), this._searchMarker = null
            }
            get parent() {
                return this._item ? this._item.parent : null
            }
            _integrate(a, b) {
                this.doc = a, this._item = b
            }
            _copy() {
                throw m.b()
            }
            clone() {
                throw m.b()
            }
            _write(a) {}
            get _first() {
                let a = this._start;
                for (; null !== a && a.deleted;) a = a.right;
                return a
            }
            _callObserver(a, b) {
                !a.local && this._searchMarker && (this._searchMarker.length = 0)
            }
            observe(a) {
                let b;
                b = this._eH, b.l.push(a)
            }
            observeDeep(a) {
                let b;
                b = this._dEH, b.l.push(a)
            }
            unobserve(a) {
                ab(this._eH, a)
            }
            unobserveDeep(a) {
                ab(this._dEH, a)
            }
            toJSON() {}
        }
        let bf = (a, b, c) => {
                a.doc ?? a7(), b < 0 && (b = a._length + b), c < 0 && (c = a._length + c);
                let d = c - b,
                    e = [],
                    f = a._start;
                for (; null !== f && d > 0;) {
                    if (f.countable && !f.deleted) {
                        let a = f.content.getContent();
                        if (a.length <= b) b -= a.length;
                        else {
                            for (let c = b; c < a.length && d > 0; c++) e.push(a[c]), d--;
                            b = 0
                        }
                    }
                    f = f.right
                }
                return e
            },
            bg = a => {
                a.doc ?? a7();
                let b = [],
                    c = a._start;
                for (; null !== c;) {
                    if (c.countable && !c.deleted) {
                        let a = c.content.getContent();
                        for (let c = 0; c < a.length; c++) b.push(a[c])
                    }
                    c = c.right
                }
                return b
            },
            bh = (a, b) => {
                let c = 0,
                    d = a._start;
                for (a.doc ?? a7(); null !== d;) {
                    if (d.countable && !d.deleted) {
                        let e = d.content.getContent();
                        for (let d = 0; d < e.length; d++) b(e[d], c++, a)
                    }
                    d = d.right
                }
            },
            bi = (a, b) => {
                let c = [];
                return bh(a, (d, e) => {
                    c.push(b(d, e, a))
                }), c
            },
            bj = (a, b) => {
                a.doc ?? a7();
                let c = bb(a, b),
                    d = a._start;
                for (null !== c && (d = c.p, b -= c.index); null !== d; d = d.right)
                    if (!d.deleted && d.countable) {
                        if (b < d.length) return d.content.getContent()[b];
                        b -= d.length
                    }
            },
            bk = (a, b, c, d) => {
                let e = c,
                    f = a.doc,
                    g = f.clientID,
                    h = f.store,
                    i = null === c ? b._start : c.right,
                    j = [],
                    k = () => {
                        j.length > 0 && ((e = new ci(af(g, aw(h, g)), e, e && e.lastId, i, i && i.id, b, null, new b2(j))).integrate(a, 0), j = [])
                    };
                d.forEach(c => {
                    if (null === c) j.push(c);
                    else switch (c.constructor) {
                        case Number:
                        case Object:
                        case Boolean:
                        case Array:
                        case String:
                            j.push(c);
                            break;
                        default:
                            switch (k(), c.constructor) {
                                case Uint8Array:
                                case ArrayBuffer:
                                    (e = new ci(af(g, aw(h, g)), e, e && e.lastId, i, i && i.id, b, null, new bW(new Uint8Array(c)))).integrate(a, 0);
                                    break;
                                case L:
                                    (e = new ci(af(g, aw(h, g)), e, e && e.lastId, i, i && i.id, b, null, new bZ(c))).integrate(a, 0);
                                    break;
                                default:
                                    if (c instanceof be)(e = new ci(af(g, aw(h, g)), e, e && e.lastId, i, i && i.id, b, null, new cc(c))).integrate(a, 0);
                                    else throw Error("Unexpected content type in insert operation")
                            }
                    }
                }), k()
            },
            bl = (a, b, c, d) => {
                if (c > b._length) throw m.a("Length exceeded!");
                if (0 === c) return b._searchMarker && bc(b._searchMarker, c, d.length), bk(a, b, null, d);
                let e = c,
                    f = bb(b, c),
                    g = b._start;
                for (null !== f && (g = f.p, 0 == (c -= f.index) && (c += (g = g.prev) && g.countable && !g.deleted ? g.length : 0)); null !== g; g = g.right)
                    if (!g.deleted && g.countable) {
                        if (c <= g.length) {
                            c < g.length && aB(a, af(g.id.client, g.id.clock + c));
                            break
                        }
                        c -= g.length
                    } return b._searchMarker && bc(b._searchMarker, e, d.length), bk(a, b, g, d)
            },
            bm = (a, b, c, d) => {
                if (0 === d) return;
                let e = c,
                    f = d,
                    g = bb(b, c),
                    h = b._start;
                for (null !== g && (h = g.p, c -= g.index); null !== h && c > 0; h = h.right) !h.deleted && h.countable && (c < h.length && aB(a, af(h.id.client, h.id.clock + c)), c -= h.length);
                for (; d > 0 && null !== h;) h.deleted || (d < h.length && aB(a, af(h.id.client, h.id.clock + d)), h.delete(a), d -= h.length), h = h.right;
                if (d > 0) throw m.a("Length exceeded!");
                b._searchMarker && bc(b._searchMarker, e, -f + d)
            },
            bn = (a, b, c) => {
                let d = b._map.get(c);
                void 0 !== d && d.delete(a)
            },
            bo = (a, b, c, d) => {
                let e, f = b._map.get(c) || null,
                    g = a.doc,
                    h = g.clientID;
                if (null == d) e = new b2([d]);
                else switch (d.constructor) {
                    case Number:
                    case Object:
                    case Boolean:
                    case Array:
                    case String:
                    case Date:
                    case BigInt:
                        e = new b2([d]);
                        break;
                    case Uint8Array:
                        e = new bW(d);
                        break;
                    case L:
                        e = new bZ(d);
                        break;
                    default:
                        if (d instanceof be) e = new cc(d);
                        else throw Error("Unexpected content type")
                }
                new ci(af(h, aw(g.store, h)), f, f && f.lastId, null, null, b, c, e).integrate(a, 0)
            },
            bp = (a, b) => {
                a.doc ?? a7();
                let c = a._map.get(b);
                return void 0 === c || c.deleted ? void 0 : c.content.getContent()[c.length - 1]
            },
            bq = a => {
                let b = {};
                return a.doc ?? a7(), a._map.forEach((a, c) => {
                    a.deleted || (b[c] = a.content.getContent()[a.length - 1])
                }), b
            },
            br = (a, b) => {
                a.doc ?? a7();
                let c = a._map.get(b);
                return void 0 !== c && !c.deleted
            },
            bs = (a, b) => {
                let c = {};
                return a._map.forEach((a, d) => {
                    let e = a;
                    for (; null !== e && (!b.sv.has(e.id.client) || e.id.clock >= (b.sv.get(e.id.client) || 0));) e = e.left;
                    null !== e && as(e, b) && (c[d] = e.content.getContent()[e.length - 1])
                }), c
            },
            bt = a => (a.doc ?? a7(), t.a(a._map.entries(), a => !a[1].deleted));
        class bu extends a5 {}
        class bv extends be {
            constructor() {
                super(), this._prelimContent = [], this._searchMarker = []
            }
            static from(a) {
                let b = new bv;
                return b.push(a), b
            }
            _integrate(a, b) {
                super._integrate(a, b), this.insert(0, this._prelimContent), this._prelimContent = null
            }
            _copy() {
                return new bv
            }
            clone() {
                let a = new bv;
                return a.insert(0, this.toArray().map(a => a instanceof be ? a.clone() : a)), a
            }
            get length() {
                return this.doc ?? a7(), this._length
            }
            _callObserver(a, b) {
                super._callObserver(a, b), bd(this, a, new bu(this, a))
            }
            insert(a, b) {
                null !== this.doc ? aL(this.doc, c => {
                    bl(c, this, a, b)
                }) : this._prelimContent.splice(a, 0, ...b)
            }
            push(a) {
                null !== this.doc ? aL(this.doc, b => {
                    ((a, b, c) => {
                        let d = (b._searchMarker || []).reduce((a, b) => b.index > a.index ? b : a, {
                            index: 0,
                            p: b._start
                        }).p;
                        if (d)
                            for (; d.right;) d = d.right;
                        return bk(a, b, d, c)
                    })(b, this, a)
                }) : this._prelimContent.push(...a)
            }
            unshift(a) {
                this.insert(0, a)
            }
            delete(a, b = 1) {
                null !== this.doc ? aL(this.doc, c => {
                    bm(c, this, a, b)
                }) : this._prelimContent.splice(a, b)
            }
            get(a) {
                return bj(this, a)
            }
            toArray() {
                return bg(this)
            }
            slice(a = 0, b = this.length) {
                return bf(this, a, b)
            }
            toJSON() {
                return this.map(a => a instanceof be ? a.toJSON() : a)
            }
            map(a) {
                return bi(this, a)
            }
            forEach(a) {
                bh(this, a)
            } [Symbol.iterator]() {
                let a, b, c;
                return a = this._start, b = null, c = 0, {
                    [Symbol.iterator]() {
                        return this
                    },
                    next: () => {
                        if (null === b) {
                            for (; null !== a && a.deleted;) a = a.right;
                            if (null === a) return {
                                done: !0,
                                value: void 0
                            };
                            b = a.content.getContent(), c = 0, a = a.right
                        }
                        let d = b[c++];
                        return b.length <= c && (b = null), {
                            done: !1,
                            value: d
                        }
                    }
                }
            }
            _write(a) {
                a.writeTypeRef(b5)
            }
        }
        class bw extends a5 {
            constructor(a, b, c) {
                super(a, b), this.keysChanged = c
            }
        }
        class bx extends be {
            constructor(a) {
                super(), this._prelimContent = null, void 0 === a ? this._prelimContent = new Map : this._prelimContent = new Map(a)
            }
            _integrate(a, b) {
                super._integrate(a, b), this._prelimContent.forEach((a, b) => {
                    this.set(b, a)
                }), this._prelimContent = null
            }
            _copy() {
                return new bx
            }
            clone() {
                let a = new bx;
                return this.forEach((b, c) => {
                    a.set(c, b instanceof be ? b.clone() : b)
                }), a
            }
            _callObserver(a, b) {
                bd(this, a, new bw(this, a, b))
            }
            toJSON() {
                this.doc ?? a7();
                let a = {};
                return this._map.forEach((b, c) => {
                    if (!b.deleted) {
                        let d = b.content.getContent()[b.length - 1];
                        a[c] = d instanceof be ? d.toJSON() : d
                    }
                }), a
            }
            get size() {
                return [...bt(this)].length
            }
            keys() {
                return t.b(bt(this), a => a[0])
            }
            values() {
                return t.b(bt(this), a => a[1].content.getContent()[a[1].length - 1])
            }
            entries() {
                return t.b(bt(this), a => [a[0], a[1].content.getContent()[a[1].length - 1]])
            }
            forEach(a) {
                this.doc ?? a7(), this._map.forEach((b, c) => {
                    b.deleted || a(b.content.getContent()[b.length - 1], c, this)
                })
            } [Symbol.iterator]() {
                return this.entries()
            }
            delete(a) {
                null !== this.doc ? aL(this.doc, b => {
                    bn(b, this, a)
                }) : this._prelimContent.delete(a)
            }
            set(a, b) {
                return null !== this.doc ? aL(this.doc, c => {
                    bo(c, this, a, b)
                }) : this._prelimContent.set(a, b), b
            }
            get(a) {
                return bp(this, a)
            }
            has(a) {
                return br(this, a)
            }
            clear() {
                null !== this.doc ? aL(this.doc, a => {
                    this.forEach(function(b, c, d) {
                        bn(a, d, c)
                    })
                }) : this._prelimContent.clear()
            }
            _write(a) {
                a.writeTypeRef(b6)
            }
        }
        let by = (a, b) => a === b || "object" == typeof a && "object" == typeof b && a && b && u.c(a, b);
        class bz {
            constructor(a, b, c, d) {
                this.left = a, this.right = b, this.index = c, this.currentAttributes = d
            }
            forward() {
                null === this.right && m.c(), this.right.content.constructor === b_ ? this.right.deleted || bD(this.currentAttributes, this.right.content) : this.right.deleted || (this.index += this.right.length), this.left = this.right, this.right = this.right.right
            }
        }
        let bA = (a, b, c) => {
                for (; null !== b.right && c > 0;) b.right.content.constructor === b_ ? b.right.deleted || bD(b.currentAttributes, b.right.content) : b.right.deleted || (c < b.right.length && aB(a, af(b.right.id.client, b.right.id.clock + c)), b.index += b.right.length, c -= b.right.length), b.left = b.right, b.right = b.right.right;
                return b
            },
            bB = (a, b, c, d) => {
                let e = new Map,
                    f = d ? bb(b, c) : null;
                return f ? bA(a, new bz(f.p.left, f.p, f.index, e), c - f.index) : bA(a, new bz(null, b._start, 0, e), c)
            },
            bC = (a, b, c, d) => {
                for (; null !== c.right && (!0 === c.right.deleted || c.right.content.constructor === b_ && by(d.get(c.right.content.key), c.right.content.value));) c.right.deleted || d.delete(c.right.content.key), c.forward();
                let e = a.doc,
                    f = e.clientID;
                d.forEach((d, g) => {
                    let h = c.left,
                        i = c.right,
                        j = new ci(af(f, aw(e.store, f)), h, h && h.lastId, i, i && i.id, b, null, new b_(g, d));
                    j.integrate(a, 0), c.right = j, c.forward()
                })
            },
            bD = (a, b) => {
                let {
                    key: c,
                    value: d
                } = b;
                null === d ? a.delete(c) : a.set(c, d)
            },
            bE = (a, b) => {
                for (; null !== a.right && (a.right.deleted || a.right.content.constructor === b_ && by(b[a.right.content.key] ?? null, a.right.content.value));) {
                    ;
                    a.forward()
                }
            },
            bF = (a, b, c, d) => {
                let e = a.doc,
                    f = e.clientID,
                    g = new Map;
                for (let h in d) {
                    let i = d[h],
                        j = c.currentAttributes.get(h) ?? null;
                    if (!by(j, i)) {
                        g.set(h, j);
                        let {
                            left: d,
                            right: k
                        } = c;
                        c.right = new ci(af(f, aw(e.store, f)), d, d && d.lastId, k, k && k.id, b, null, new b_(h, i)), c.right.integrate(a, 0), c.forward()
                    }
                }
                return g
            },
            bG = (a, b, c, d, e) => {
                c.currentAttributes.forEach((a, b) => {
                    void 0 === e[b] && (e[b] = null)
                });
                let f = a.doc,
                    g = f.clientID;
                bE(c, e);
                let h = bF(a, b, c, e),
                    i = d.constructor === String ? new b3(d) : d instanceof be ? new cc(d) : new b$(d),
                    {
                        left: j,
                        right: k,
                        index: l
                    } = c;
                b._searchMarker && bc(b._searchMarker, c.index, i.getLength()), (k = new ci(af(g, aw(f.store, g)), j, j && j.lastId, k, k && k.id, b, null, i)).integrate(a, 0), c.right = k, c.index = l, c.forward(), bC(a, b, c, h)
            },
            bH = (a, b, c, d, e) => {
                let f = a.doc,
                    g = f.clientID;
                bE(c, e);
                let h = bF(a, b, c, e);
                for (; null !== c.right && (d > 0 || h.size > 0 && (c.right.deleted || c.right.content.constructor === b_));) {
                    if (!c.right.deleted)
                        if (c.right.content.constructor === b_) {
                            let {
                                key: b,
                                value: f
                            } = c.right.content, g = e[b];
                            if (void 0 !== g) {
                                if (by(g, f)) h.delete(b);
                                else {
                                    if (0 === d) break;
                                    h.set(b, f)
                                }
                                c.right.delete(a)
                            } else c.currentAttributes.set(b, f)
                        } else d < c.right.length && aB(a, af(c.right.id.client, c.right.id.clock + d)), d -= c.right.length;
                    c.forward()
                }
                if (d > 0) {
                    let e = "";
                    for (; d > 0; d--) e += "\n";
                    c.right = new ci(af(g, aw(f.store, g)), c.left, c.left && c.left.lastId, c.right, c.right && c.right.id, b, null, new b3(e)), c.right.integrate(a, 0), c.forward()
                }
                bC(a, b, c, h)
            },
            bI = (a, b, c, d, e) => {
                let f = b,
                    h = g.c();
                for (; f && (!f.countable || f.deleted);) {
                    if (!f.deleted && f.content.constructor === b_) {
                        let a = f.content;
                        h.set(a.key, a)
                    }
                    f = f.right
                }
                let i = 0,
                    j = !1;
                for (; b !== f;) {
                    if (c === b && (j = !0), !b.deleted) {
                        let c = b.content;
                        if (c.constructor === b_) {
                            let {
                                key: f,
                                value: g
                            } = c, k = d.get(f) ?? null;
                            (h.get(f) !== c || k === g) && (b.delete(a), i++, j || (e.get(f) ?? null) !== g || k === g || (null === k ? e.delete(f) : e.set(f, k))), j || b.deleted || bD(e, c)
                        }
                    }
                    b = b.right
                }
                return i
            },
            bJ = a => {
                let b = 0;
                return aL(a.doc, c => {
                    let d = a._start,
                        e = a._start,
                        f = g.c(),
                        h = g.b(f);
                    for (; e;) !1 === e.deleted && (e.content.constructor === b_ ? bD(h, e.content) : (b += bI(c, d, e, f, h), f = g.b(h), d = e)), e = e.right
                }), b
            },
            bK = a => {
                let b = new Set,
                    c = a.doc;
                for (let [d, e] of a.afterState.entries()) {
                    let f = a.beforeState.get(d) || 0;
                    e !== f && aD(a, c.store.clients.get(d), f, e, a => {
                        a.deleted || a.content.constructor !== b_ || a.constructor === bV || b.add(a.parent)
                    })
                }
                aL(c, c => {
                    for (let d of (z(a, a.deleteSet, a => {
                            if (a instanceof bV || !a.parent._hasFormatting || b.has(a.parent)) return;
                            let d = a.parent;
                            if (a.content.constructor === b_) b.add(d);
                            else {
                                for (var e = a; e && e.right && (e.right.deleted || !e.right.countable);) e = e.right;
                                let b = new Set;
                                for (; e && (e.deleted || !e.countable);) {
                                    if (!e.deleted && e.content.constructor === b_) {
                                        let a = e.content.key;
                                        b.has(a) ? e.delete(c) : b.add(a)
                                    }
                                    e = e.left
                                }
                            }
                        }), b)) bJ(d)
                })
            },
            bL = (a, b, c) => {
                let d = c,
                    e = g.b(b.currentAttributes),
                    f = b.right;
                for (; c > 0 && null !== b.right;) {
                    if (!1 === b.right.deleted) switch (b.right.content.constructor) {
                        case cc:
                        case b$:
                        case b3:
                            c < b.right.length && aB(a, af(b.right.id.client, b.right.id.clock + c)), c -= b.right.length, b.right.delete(a)
                    }
                    b.forward()
                }
                f && bI(a, f, b.right, e, b.currentAttributes);
                let h = (b.left || b.right).parent;
                return h._searchMarker && bc(h._searchMarker, b.index, -d + c), b
            };
        class bM extends a5 {
            constructor(a, b, c) {
                super(a, b), this.childListChanged = !1, this.keysChanged = new Set, c.forEach(a => {
                    null === a ? this.childListChanged = !0 : this.keysChanged.add(a)
                })
            }
            get changes() {
                if (null === this._changes) {
                    let a = {
                        keys: this.keys,
                        delta: this.delta,
                        added: new Set,
                        deleted: new Set
                    };
                    this._changes = a
                }
                return this._changes
            }
            get delta() {
                if (null === this._delta) {
                    let a = this.target.doc,
                        b = [];
                    aL(a, a => {
                        let c = new Map,
                            d = new Map,
                            e = this.target._start,
                            f = null,
                            g = {},
                            h = "",
                            i = 0,
                            j = 0,
                            k = () => {
                                if (null !== f) {
                                    let a = null;
                                    switch (f) {
                                        case "delete":
                                            j > 0 && (a = {
                                                delete: j
                                            }), j = 0;
                                            break;
                                        case "insert":
                                            ("object" == typeof h || h.length > 0) && (a = {
                                                insert: h
                                            }, c.size > 0 && (a.attributes = {}, c.forEach((b, c) => {
                                                null !== b && (a.attributes[c] = b)
                                            }))), h = "";
                                            break;
                                        case "retain":
                                            i > 0 && (a = {
                                                retain: i
                                            }, u.g(g) || (a.attributes = u.a({}, g))), i = 0
                                    }
                                    a && b.push(a), f = null
                                }
                            };
                        for (; null !== e;) {
                            switch (e.content.constructor) {
                                case cc:
                                case b$:
                                    this.adds(e) ? this.deletes(e) || (k(), f = "insert", h = e.content.getContent()[0], k()) : this.deletes(e) ? ("delete" !== f && (k(), f = "delete"), j += 1) : e.deleted || ("retain" !== f && (k(), f = "retain"), i += 1);
                                    break;
                                case b3:
                                    this.adds(e) ? this.deletes(e) || ("insert" !== f && (k(), f = "insert"), h += e.content.str) : this.deletes(e) ? ("delete" !== f && (k(), f = "delete"), j += e.length) : e.deleted || ("retain" !== f && (k(), f = "retain"), i += e.length);
                                    break;
                                case b_: {
                                    let {
                                        key: b,
                                        value: h
                                    } = e.content;
                                    if (this.adds(e)) this.deletes(e) || (by(c.get(b) ?? null, h) ? null !== h && e.delete(a) : ("retain" === f && k(), by(h, d.get(b) ?? null) ? delete g[b] : g[b] = h));
                                    else if (this.deletes(e)) {
                                        d.set(b, h);
                                        let a = c.get(b) ?? null;
                                        by(a, h) || ("retain" === f && k(), g[b] = a)
                                    } else if (!e.deleted) {
                                        d.set(b, h);
                                        let c = g[b];
                                        void 0 !== c && (by(c, h) ? null !== c && e.delete(a) : ("retain" === f && k(), null === h ? delete g[b] : g[b] = h))
                                    }
                                    e.deleted || ("insert" === f && k(), bD(c, e.content))
                                }
                            }
                            e = e.right
                        }
                        for (k(); b.length > 0;) {
                            let a = b[b.length - 1];
                            if (void 0 !== a.retain && void 0 === a.attributes) b.pop();
                            else break
                        }
                    }), this._delta = b
                }
                return this._delta
            }
        }
        class bN extends be {
            constructor(a) {
                super(), this._pending = void 0 !== a ? [() => this.insert(0, a)] : [], this._searchMarker = [], this._hasFormatting = !1
            }
            get length() {
                return this.doc ?? a7(), this._length
            }
            _integrate(a, b) {
                super._integrate(a, b);
                try {
                    this._pending.forEach(a => a())
                } catch (a) {
                    console.error(a)
                }
                this._pending = null
            }
            _copy() {
                return new bN
            }
            clone() {
                let a = new bN;
                return a.applyDelta(this.toDelta()), a
            }
            _callObserver(a, b) {
                super._callObserver(a, b);
                let c = new bM(this, a, b);
                bd(this, a, c), !a.local && this._hasFormatting && (a._needFormattingCleanup = !0)
            }
            toString() {
                this.doc ?? a7();
                let a = "",
                    b = this._start;
                for (; null !== b;) !b.deleted && b.countable && b.content.constructor === b3 && (a += b.content.str), b = b.right;
                return a
            }
            toJSON() {
                return this.toString()
            }
            applyDelta(a, {
                sanitize: b = !0
            } = {}) {
                null !== this.doc ? aL(this.doc, c => {
                    let d = new bz(null, this._start, 0, new Map);
                    for (let e = 0; e < a.length; e++) {
                        let f = a[e];
                        if (void 0 !== f.insert) {
                            let g = b || "string" != typeof f.insert || e !== a.length - 1 || null !== d.right || "\n" !== f.insert.slice(-1) ? f.insert : f.insert.slice(0, -1);
                            ("string" != typeof g || g.length > 0) && bG(c, this, d, g, f.attributes || {})
                        } else void 0 !== f.retain ? bH(c, this, d, f.retain, f.attributes || {}) : void 0 !== f.delete && bL(c, d, f.delete)
                    }
                }) : this._pending.push(() => this.applyDelta(a))
            }
            toDelta(a, b, c) {
                this.doc ?? a7();
                let d = [],
                    e = new Map,
                    f = this.doc,
                    g = "",
                    h = this._start;

                function i() {
                    if (g.length > 0) {
                        let a = {},
                            b = !1;
                        e.forEach((c, d) => {
                            b = !0, a[d] = c
                        });
                        let c = {
                            insert: g
                        };
                        b && (c.attributes = a), d.push(c), g = ""
                    }
                }
                let j = () => {
                    for (; null !== h;) {
                        if (as(h, a) || void 0 !== b && as(h, b)) switch (h.content.constructor) {
                            case b3: {
                                let d = e.get("ychange");
                                void 0 === a || as(h, a) ? void 0 === b || as(h, b) ? void 0 !== d && (i(), e.delete("ychange")) : (void 0 === d || d.user !== h.id.client || "added" !== d.type) && (i(), e.set("ychange", c ? c("added", h.id) : {
                                    type: "added"
                                })) : (void 0 === d || d.user !== h.id.client || "removed" !== d.type) && (i(), e.set("ychange", c ? c("removed", h.id) : {
                                    type: "removed"
                                })), g += h.content.str;
                                break
                            }
                            case cc:
                            case b$: {
                                i();
                                let a = {
                                    insert: h.content.getContent()[0]
                                };
                                if (e.size > 0) {
                                    let b = {};
                                    a.attributes = b, e.forEach((a, c) => {
                                        b[c] = a
                                    })
                                }
                                d.push(a);
                                break
                            }
                            case b_:
                                as(h, a) && (i(), bD(e, h.content))
                        }
                        h = h.right
                    }
                    i()
                };
                return a || b ? aL(f, c => {
                    a && at(c, a), b && at(c, b), j()
                }, "cleanup") : j(), d
            }
            insert(a, b, c) {
                if (b.length <= 0) return;
                let d = this.doc;
                null !== d ? aL(d, d => {
                    let e = bB(d, this, a, !c);
                    c || (c = {}, e.currentAttributes.forEach((a, b) => {
                        c[b] = a
                    })), bG(d, this, e, b, c)
                }) : this._pending.push(() => this.insert(a, b, c))
            }
            insertEmbed(a, b, c) {
                let d = this.doc;
                null !== d ? aL(d, d => {
                    let e = bB(d, this, a, !c);
                    bG(d, this, e, b, c || {})
                }) : this._pending.push(() => this.insertEmbed(a, b, c || {}))
            }
            delete(a, b) {
                if (0 === b) return;
                let c = this.doc;
                null !== c ? aL(c, c => {
                    bL(c, bB(c, this, a, !0), b)
                }) : this._pending.push(() => this.delete(a, b))
            }
            format(a, b, c) {
                if (0 === b) return;
                let d = this.doc;
                null !== d ? aL(d, d => {
                    let e = bB(d, this, a, !1);
                    null !== e.right && bH(d, this, e, b, c)
                }) : this._pending.push(() => this.format(a, b, c))
            }
            removeAttribute(a) {
                null !== this.doc ? aL(this.doc, b => {
                    bn(b, this, a)
                }) : this._pending.push(() => this.removeAttribute(a))
            }
            setAttribute(a, b) {
                null !== this.doc ? aL(this.doc, c => {
                    bo(c, this, a, b)
                }) : this._pending.push(() => this.setAttribute(a, b))
            }
            getAttribute(a) {
                return bp(this, a)
            }
            getAttributes() {
                return bq(this)
            }
            _write(a) {
                a.writeTypeRef(b7)
            }
        }
        class bO {
            constructor(a, b = () => !0) {
                this._filter = b, this._root = a, this._currentNode = a._start, this._firstCall = !0, a.doc ?? a7()
            } [Symbol.iterator]() {
                return this
            }
            next() {
                let a = this._currentNode,
                    b = a && a.content && a.content.type;
                if (null !== a && (!this._firstCall || a.deleted || !this._filter(b)))
                    do
                        if (b = a.content.type, a.deleted || b.constructor !== bQ && b.constructor !== bP || null === b._start)
                            for (; null !== a;) {
                                let b = a.next;
                                if (null !== b) {
                                    a = b;
                                    break
                                }
                                a = a.parent === this._root ? null : a.parent._item
                            } else a = b._start; while (null !== a && (a.deleted || !this._filter(a.content.type))) return (this._firstCall = !1, null === a) ? {
                        value: void 0,
                        done: !0
                    } : (this._currentNode = a, {
                        value: a.content.type,
                        done: !1
                    })
            }
        }
        class bP extends be {
            constructor() {
                super(), this._prelimContent = []
            }
            get firstChild() {
                let a = this._first;
                return a ? a.content.getContent()[0] : null
            }
            _integrate(a, b) {
                super._integrate(a, b), this.insert(0, this._prelimContent), this._prelimContent = null
            }
            _copy() {
                return new bP
            }
            clone() {
                let a = new bP;
                return a.insert(0, this.toArray().map(a => a instanceof be ? a.clone() : a)), a
            }
            get length() {
                return this.doc ?? a7(), null === this._prelimContent ? this._length : this._prelimContent.length
            }
            createTreeWalker(a) {
                return new bO(this, a)
            }
            querySelector(a) {
                a = a.toUpperCase();
                let b = new bO(this, b => b.nodeName && b.nodeName.toUpperCase() === a).next();
                return b.done ? null : b.value
            }
            querySelectorAll(a) {
                return a = a.toUpperCase(), e.c(new bO(this, b => b.nodeName && b.nodeName.toUpperCase() === a))
            }
            _callObserver(a, b) {
                bd(this, a, new bR(this, b, a))
            }
            toString() {
                return bi(this, a => a.toString()).join("")
            }
            toJSON() {
                return this.toString()
            }
            toDOM(a = document, b = {}, c) {
                let d = a.createDocumentFragment();
                return void 0 !== c && c._createAssociation(d, this), bh(this, e => {
                    d.insertBefore(e.toDOM(a, b, c), null)
                }), d
            }
            insert(a, b) {
                null !== this.doc ? aL(this.doc, c => {
                    bl(c, this, a, b)
                }) : this._prelimContent.splice(a, 0, ...b)
            }
            insertAfter(a, b) {
                if (null !== this.doc) aL(this.doc, c => {
                    bk(c, this, a && a instanceof be ? a._item : a, b)
                });
                else {
                    let c = this._prelimContent,
                        d = null === a ? 0 : c.findIndex(b => b === a) + 1;
                    if (0 === d && null !== a) throw m.a("Reference item not found");
                    c.splice(d, 0, ...b)
                }
            }
            delete(a, b = 1) {
                null !== this.doc ? aL(this.doc, c => {
                    bm(c, this, a, b)
                }) : this._prelimContent.splice(a, b)
            }
            toArray() {
                return bg(this)
            }
            push(a) {
                this.insert(this.length, a)
            }
            unshift(a) {
                this.insert(0, a)
            }
            get(a) {
                return bj(this, a)
            }
            slice(a = 0, b = this.length) {
                return bf(this, a, b)
            }
            forEach(a) {
                bh(this, a)
            }
            _write(a) {
                a.writeTypeRef(b9)
            }
        }
        class bQ extends bP {
            constructor(a = "UNDEFINED") {
                super(), this.nodeName = a, this._prelimAttrs = new Map
            }
            get nextSibling() {
                let a = this._item ? this._item.next : null;
                return a ? a.content.type : null
            }
            get prevSibling() {
                let a = this._item ? this._item.prev : null;
                return a ? a.content.type : null
            }
            _integrate(a, b) {
                super._integrate(a, b), this._prelimAttrs.forEach((a, b) => {
                    this.setAttribute(b, a)
                }), this._prelimAttrs = null
            }
            _copy() {
                return new bQ(this.nodeName)
            }
            clone() {
                let a = new bQ(this.nodeName),
                    b = this.getAttributes();
                return u.e(b, (b, c) => {
                    a.setAttribute(c, b)
                }), a.insert(0, this.toArray().map(a => a instanceof be ? a.clone() : a)), a
            }
            toString() {
                let a = this.getAttributes(),
                    b = [],
                    c = [];
                for (let b in a) c.push(b);
                c.sort();
                let d = c.length;
                for (let e = 0; e < d; e++) {
                    let d = c[e];
                    b.push(d + '="' + a[d] + '"')
                }
                let e = this.nodeName.toLocaleLowerCase(),
                    f = b.length > 0 ? " " + b.join(" ") : "";
                return `<${e}${f}>${super.toString()}</${e}>`
            }
            removeAttribute(a) {
                null !== this.doc ? aL(this.doc, b => {
                    bn(b, this, a)
                }) : this._prelimAttrs.delete(a)
            }
            setAttribute(a, b) {
                null !== this.doc ? aL(this.doc, c => {
                    bo(c, this, a, b)
                }) : this._prelimAttrs.set(a, b)
            }
            getAttribute(a) {
                return bp(this, a)
            }
            hasAttribute(a) {
                return br(this, a)
            }
            getAttributes(a) {
                return a ? bs(this, a) : bq(this)
            }
            toDOM(a = document, b = {}, c) {
                let d = a.createElement(this.nodeName),
                    e = this.getAttributes();
                for (let a in e) {
                    let b = e[a];
                    "string" == typeof b && d.setAttribute(a, b)
                }
                return bh(this, e => {
                    d.appendChild(e.toDOM(a, b, c))
                }), void 0 !== c && c._createAssociation(d, this), d
            }
            _write(a) {
                a.writeTypeRef(b8), a.writeKey(this.nodeName)
            }
        }
        class bR extends a5 {
            constructor(a, b, c) {
                super(a, c), this.childListChanged = !1, this.attributesChanged = new Set, b.forEach(a => {
                    null === a ? this.childListChanged = !0 : this.attributesChanged.add(a)
                })
            }
        }
        class bS extends bx {
            constructor(a) {
                super(), this.hookName = a
            }
            _copy() {
                return new bS(this.hookName)
            }
            clone() {
                let a = new bS(this.hookName);
                return this.forEach((b, c) => {
                    a.set(c, b)
                }), a
            }
            toDOM(a = document, b = {}, c) {
                let d, e = b[this.hookName];
                return (d = void 0 !== e ? e.createDom(this) : document.createElement(this.hookName)).setAttribute("data-yjs-hook", this.hookName), void 0 !== c && c._createAssociation(d, this), d
            }
            _write(a) {
                a.writeTypeRef(ca), a.writeKey(this.hookName)
            }
        }
        class bT extends bN {
            get nextSibling() {
                let a = this._item ? this._item.next : null;
                return a ? a.content.type : null
            }
            get prevSibling() {
                let a = this._item ? this._item.prev : null;
                return a ? a.content.type : null
            }
            _copy() {
                return new bT
            }
            clone() {
                let a = new bT;
                return a.applyDelta(this.toDelta()), a
            }
            toDOM(a = document, b, c) {
                let d = a.createTextNode(this.toString());
                return void 0 !== c && c._createAssociation(d, this), d
            }
            toString() {
                return this.toDelta().map(a => {
                    let b = [];
                    for (let c in a.attributes) {
                        let d = [];
                        for (let b in a.attributes[c]) d.push({
                            key: b,
                            value: a.attributes[c][b]
                        });
                        d.sort((a, b) => a.key < b.key ? -1 : 1), b.push({
                            nodeName: c,
                            attrs: d
                        })
                    }
                    b.sort((a, b) => a.nodeName < b.nodeName ? -1 : 1);
                    let c = "";
                    for (let a = 0; a < b.length; a++) {
                        let d = b[a];
                        c += `<${d.nodeName}`;
                        for (let a = 0; a < d.attrs.length; a++) {
                            let b = d.attrs[a];
                            c += ` ${b.key}="${b.value}"`
                        }
                        c += ">"
                    }
                    c += a.insert;
                    for (let a = b.length - 1; a >= 0; a--) c += `</${b[a].nodeName}>`;
                    return c
                }).join("")
            }
            toJSON() {
                return this.toString()
            }
            _write(a) {
                a.writeTypeRef(cb)
            }
        }
        class bU {
            constructor(a, b) {
                this.id = a, this.length = b
            }
            get deleted() {
                throw m.b()
            }
            mergeWith(a) {
                return !1
            }
            write(a, b, c) {
                throw m.b()
            }
            integrate(a, b) {
                throw m.b()
            }
        }
        class bV extends bU {
            get deleted() {
                return !0
            }
            delete() {}
            mergeWith(a) {
                return this.constructor === a.constructor && (this.length += a.length, !0)
            }
            integrate(a, b) {
                b > 0 && (this.id.clock += b, this.length -= b), ax(a.doc.store, this)
            }
            write(a, b) {
                a.writeInfo(0), a.writeLen(this.length - b)
            }
            getMissing(a, b) {
                return null
            }
        }
        class bW {
            constructor(a) {
                this.content = a
            }
            getLength() {
                return 1
            }
            getContent() {
                return [this.content]
            }
            isCountable() {
                return !0
            }
            copy() {
                return new bW(this.content)
            }
            splice(a) {
                throw m.b()
            }
            mergeWith(a) {
                return !1
            }
            integrate(a, b) {}
            delete(a) {}
            gc(a) {}
            write(a, b) {
                a.writeBuf(this.content)
            }
            getRef() {
                return 3
            }
        }
        class bX {
            constructor(a) {
                this.len = a
            }
            getLength() {
                return this.len
            }
            getContent() {
                return []
            }
            isCountable() {
                return !1
            }
            copy() {
                return new bX(this.len)
            }
            splice(a) {
                let b = new bX(this.len - a);
                return this.len = a, b
            }
            mergeWith(a) {
                return this.len += a.len, !0
            }
            integrate(a, b) {
                D(a.deleteSet, b.id.client, b.id.clock, this.len), b.markDeleted()
            }
            delete(a) {}
            gc(a) {}
            write(a, b) {
                a.writeLen(this.len - b)
            }
            getRef() {
                return 1
            }
        }
        let bY = (a, b) => new L({
            guid: a,
            ...b,
            shouldLoad: b.shouldLoad || b.autoLoad || !1
        });
        class bZ {
            constructor(a) {
                a._item && console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."), this.doc = a;
                let b = {};
                this.opts = b, a.gc || (b.gc = !1), a.autoLoad && (b.autoLoad = !0), null !== a.meta && (b.meta = a.meta)
            }
            getLength() {
                return 1
            }
            getContent() {
                return [this.doc]
            }
            isCountable() {
                return !0
            }
            copy() {
                return new bZ(bY(this.doc.guid, this.opts))
            }
            splice(a) {
                throw m.b()
            }
            mergeWith(a) {
                return !1
            }
            integrate(a, b) {
                this.doc._item = b, a.subdocsAdded.add(this.doc), this.doc.shouldLoad && a.subdocsLoaded.add(this.doc)
            }
            delete(a) {
                a.subdocsAdded.has(this.doc) ? a.subdocsAdded.delete(this.doc) : a.subdocsRemoved.add(this.doc)
            }
            gc(a) {}
            write(a, b) {
                a.writeString(this.doc.guid), a.writeAny(this.opts)
            }
            getRef() {
                return 9
            }
        }
        class b$ {
            constructor(a) {
                this.embed = a
            }
            getLength() {
                return 1
            }
            getContent() {
                return [this.embed]
            }
            isCountable() {
                return !0
            }
            copy() {
                return new b$(this.embed)
            }
            splice(a) {
                throw m.b()
            }
            mergeWith(a) {
                return !1
            }
            integrate(a, b) {}
            delete(a) {}
            gc(a) {}
            write(a, b) {
                a.writeJSON(this.embed)
            }
            getRef() {
                return 5
            }
        }
        class b_ {
            constructor(a, b) {
                this.key = a, this.value = b
            }
            getLength() {
                return 1
            }
            getContent() {
                return []
            }
            isCountable() {
                return !1
            }
            copy() {
                return new b_(this.key, this.value)
            }
            splice(a) {
                throw m.b()
            }
            mergeWith(a) {
                return !1
            }
            integrate(a, b) {
                let c = b.parent;
                c._searchMarker = null, c._hasFormatting = !0
            }
            delete(a) {}
            gc(a) {}
            write(a, b) {
                a.writeKey(this.key), a.writeJSON(this.value)
            }
            getRef() {
                return 6
            }
        }
        class b0 {
            constructor(a) {
                this.arr = a
            }
            getLength() {
                return this.arr.length
            }
            getContent() {
                return this.arr
            }
            isCountable() {
                return !0
            }
            copy() {
                return new b0(this.arr)
            }
            splice(a) {
                let b = new b0(this.arr.slice(a));
                return this.arr = this.arr.slice(0, a), b
            }
            mergeWith(a) {
                return this.arr = this.arr.concat(a.arr), !0
            }
            integrate(a, b) {}
            delete(a) {}
            gc(a) {}
            write(a, b) {
                let c = this.arr.length;
                a.writeLen(c - b);
                for (let d = b; d < c; d++) {
                    let b = this.arr[d];
                    a.writeString(void 0 === b ? "undefined" : JSON.stringify(b))
                }
            }
            getRef() {
                return 2
            }
        }
        let b1 = "development" === v.a("node_env");
        class b2 {
            constructor(a) {
                this.arr = a, b1 && u.b(a)
            }
            getLength() {
                return this.arr.length
            }
            getContent() {
                return this.arr
            }
            isCountable() {
                return !0
            }
            copy() {
                return new b2(this.arr)
            }
            splice(a) {
                let b = new b2(this.arr.slice(a));
                return this.arr = this.arr.slice(0, a), b
            }
            mergeWith(a) {
                return this.arr = this.arr.concat(a.arr), !0
            }
            integrate(a, b) {}
            delete(a) {}
            gc(a) {}
            write(a, b) {
                let c = this.arr.length;
                a.writeLen(c - b);
                for (let d = b; d < c; d++) {
                    let b = this.arr[d];
                    a.writeAny(b)
                }
            }
            getRef() {
                return 8
            }
        }
        class b3 {
            constructor(a) {
                this.str = a
            }
            getLength() {
                return this.str.length
            }
            getContent() {
                return this.str.split("")
            }
            isCountable() {
                return !0
            }
            copy() {
                return new b3(this.str)
            }
            splice(a) {
                let b = new b3(this.str.slice(a));
                this.str = this.str.slice(0, a);
                let c = this.str.charCodeAt(a - 1);
                return c >= 55296 && c <= 56319 && (this.str = this.str.slice(0, a - 1) + "\uFFFD", b.str = "\uFFFD" + b.str.slice(1)), b
            }
            mergeWith(a) {
                return this.str += a.str, !0
            }
            integrate(a, b) {}
            delete(a) {}
            gc(a) {}
            write(a, b) {
                a.writeString(0 === b ? this.str : this.str.slice(b))
            }
            getRef() {
                return 4
            }
        }
        let b4 = [a => new bv, a => new bx, a => new bN, a => new bQ(a.readKey()), a => new bP, a => new bS(a.readKey()), a => new bT],
            b5 = 0,
            b6 = 1,
            b7 = 2,
            b8 = 3,
            b9 = 4,
            ca = 5,
            cb = 6;
        class cc {
            constructor(a) {
                this.type = a
            }
            getLength() {
                return 1
            }
            getContent() {
                return [this.type]
            }
            isCountable() {
                return !0
            }
            copy() {
                return new cc(this.type._copy())
            }
            splice(a) {
                throw m.b()
            }
            mergeWith(a) {
                return !1
            }
            integrate(a, b) {
                this.type._integrate(a.doc, b)
            }
            delete(a) {
                let b = this.type._start;
                for (; null !== b;) b.deleted ? b.id.clock < (a.beforeState.get(b.id.client) || 0) && a._mergeStructs.push(b) : b.delete(a), b = b.right;
                this.type._map.forEach(b => {
                    b.deleted ? b.id.clock < (a.beforeState.get(b.id.client) || 0) && a._mergeStructs.push(b) : b.delete(a)
                }), a.changed.delete(this.type)
            }
            gc(a) {
                let b = this.type._start;
                for (; null !== b;) b.gc(a, !0), b = b.right;
                this.type._start = null, this.type._map.forEach(b => {
                    for (; null !== b;) b.gc(a, !0), b = b.left
                }), this.type._map = new Map
            }
            write(a, b) {
                this.type._write(a)
            }
            getRef() {
                return 7
            }
        }
        let cd = (a, b) => {
                let c, d = b,
                    e = 0;
                do e > 0 && (d = af(d.client, d.clock + e)), c = az(a, d), e = d.clock - c.id.clock, d = c.redone; while (null !== d && c instanceof ci) return {
                    item: c,
                    diff: e
                }
            },
            ce = (a, b) => {
                for (; null !== a && a.keep !== b;) a.keep = b, a = a.parent._item
            },
            cf = (a, b, c) => {
                let {
                    client: d,
                    clock: e
                } = b.id, f = new ci(af(d, e + c), b, af(d, e + c - 1), b.right, b.rightOrigin, b.parent, b.parentSub, b.content.splice(c));
                return b.deleted && f.markDeleted(), b.keep && (f.keep = !0), null !== b.redone && (f.redone = af(b.redone.client, b.redone.clock + c)), b.right = f, null !== f.right && (f.right.left = f), a._mergeStructs.push(f), null !== f.parentSub && null === f.right && f.parent._map.set(f.parentSub, f), b.length = c, f
            },
            cg = (a, b) => e.f(a, a => A(a.deletions, b)),
            ch = (a, b, c, d, e, f) => {
                let g, h = a.doc,
                    i = h.store,
                    j = h.clientID,
                    k = b.redone;
                if (null !== k) return aB(a, k);
                let l = b.parent._item,
                    m = null;
                if (null !== l && !0 === l.deleted) {
                    if (null === l.redone && (!c.has(l) || null === ch(a, l, c, d, e, f))) return null;
                    for (; null !== l.redone;) l = aB(a, l.redone)
                }
                let n = null === l ? b.parent : l.content.type;
                if (null === b.parentSub) {
                    for (m = b.left, g = b; null !== m;) {
                        let b = m;
                        for (; null !== b && b.parent._item !== l;) b = null === b.redone ? null : aB(a, b.redone);
                        if (null !== b && b.parent._item === l) {
                            m = b;
                            break
                        }
                        m = m.left
                    }
                    for (; null !== g;) {
                        let b = g;
                        for (; null !== b && b.parent._item !== l;) b = null === b.redone ? null : aB(a, b.redone);
                        if (null !== b && b.parent._item === l) {
                            g = b;
                            break
                        }
                        g = g.right
                    }
                } else {
                    if (g = null, b.right && !e) {
                        for (m = b; null !== m && null !== m.right && (m.right.redone || A(d, m.right.id) || cg(f.undoStack, m.right.id) || cg(f.redoStack, m.right.id));)
                            for (m = m.right; m.redone;) m = aB(a, m.redone);
                        if (m && null !== m.right) return null
                    } else m = n._map.get(b.parentSub) || null;
                    null !== m && m.parent._item !== l && (m = n._map.get(b.parentSub) || null)
                }
                let o = aw(i, j),
                    p = af(j, o),
                    q = new ci(p, m, m && m.lastId, g, g && g.id, n, b.parentSub, b.content.copy());
                return b.redone = p, ce(q, !0), q.integrate(a, 0), q
            };
        class ci extends bU {
            constructor(a, b, c, d, e, f, g, h) {
                super(a, h.getLength()), this.origin = c, this.left = b, this.right = d, this.rightOrigin = e, this.parent = f, this.parentSub = g, this.redone = null, this.content = h, this.info = 2 * !!this.content.isCountable()
            }
            set marker(a) {
                (8 & this.info) > 0 !== a && (this.info ^= 8)
            }
            get marker() {
                return (8 & this.info) > 0
            }
            get keep() {
                return (1 & this.info) > 0
            }
            set keep(a) {
                this.keep !== a && (this.info ^= 1)
            }
            get countable() {
                return (2 & this.info) > 0
            }
            get deleted() {
                return (4 & this.info) > 0
            }
            set deleted(a) {
                this.deleted !== a && (this.info ^= 4)
            }
            markDeleted() {
                this.info |= 4
            }
            getMissing(a, b) {
                if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= aw(b, this.origin.client)) return this.origin.client;
                if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= aw(b, this.rightOrigin.client)) return this.rightOrigin.client;
                if (this.parent && this.parent.constructor === ad && this.id.client !== this.parent.client && this.parent.clock >= aw(b, this.parent.client)) return this.parent.client;
                if (this.origin && (this.left = aC(a, b, this.origin), this.origin = this.left.lastId), this.rightOrigin && (this.right = aB(a, this.rightOrigin), this.rightOrigin = this.right.id), this.left && this.left.constructor === bV || this.right && this.right.constructor === bV) this.parent = null;
                else if (this.parent) {
                    if (this.parent.constructor === ad) {
                        let a = az(b, this.parent);
                        a.constructor === bV ? this.parent = null : this.parent = a.content.type
                    }
                } else this.left && this.left.constructor === ci ? (this.parent = this.left.parent, this.parentSub = this.left.parentSub) : this.right && this.right.constructor === ci && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
                return null
            }
            integrate(a, b) {
                if (b > 0 && (this.id.clock += b, this.left = aC(a, a.doc.store, af(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(b), this.length -= b), this.parent) {
                    if (!this.left && (!this.right || null !== this.right.left) || this.left && this.left.right !== this.right) {
                        let b, c = this.left;
                        if (null !== c) b = c.right;
                        else if (null !== this.parentSub)
                            for (b = this.parent._map.get(this.parentSub) || null; null !== b && null !== b.left;) b = b.left;
                        else b = this.parent._start;
                        let d = new Set,
                            e = new Set;
                        for (; null !== b && b !== this.right;) {
                            if (e.add(b), d.add(b), ae(this.origin, b.origin)) {
                                if (b.id.client < this.id.client) c = b, d.clear();
                                else if (ae(this.rightOrigin, b.rightOrigin)) break
                            } else if (null !== b.origin && e.has(az(a.doc.store, b.origin))) d.has(az(a.doc.store, b.origin)) || (c = b, d.clear());
                            else break;
                            b = b.right
                        }
                        this.left = c
                    }
                    if (null !== this.left) {
                        let a = this.left.right;
                        this.right = a, this.left.right = this
                    } else {
                        let a;
                        if (null !== this.parentSub)
                            for (a = this.parent._map.get(this.parentSub) || null; null !== a && null !== a.left;) a = a.left;
                        else a = this.parent._start, this.parent._start = this;
                        this.right = a
                    }
                    null !== this.right ? this.right.left = this : null !== this.parentSub && (this.parent._map.set(this.parentSub, this), null !== this.left && this.left.delete(a)), null === this.parentSub && this.countable && !this.deleted && (this.parent._length += this.length), ax(a.doc.store, this), this.content.integrate(a, this), aG(a, this.parent, this.parentSub), (null !== this.parent._item && this.parent._item.deleted || null !== this.parentSub && null !== this.right) && this.delete(a)
                } else new bV(this.id, this.length).integrate(a, 0)
            }
            get next() {
                let a = this.right;
                for (; null !== a && a.deleted;) a = a.right;
                return a
            }
            get prev() {
                let a = this.left;
                for (; null !== a && a.deleted;) a = a.left;
                return a
            }
            get lastId() {
                return 1 === this.length ? this.id : af(this.id.client, this.id.clock + this.length - 1)
            }
            mergeWith(a) {
                if (this.constructor === a.constructor && ae(a.origin, this.lastId) && this.right === a && ae(this.rightOrigin, a.rightOrigin) && this.id.client === a.id.client && this.id.clock + this.length === a.id.clock && this.deleted === a.deleted && null === this.redone && null === a.redone && this.content.constructor === a.content.constructor && this.content.mergeWith(a.content)) {
                    let b = this.parent._searchMarker;
                    return b && b.forEach(b => {
                        b.p === a && (b.p = this, !this.deleted && this.countable && (b.index -= this.length))
                    }), a.keep && (this.keep = !0), this.right = a.right, null !== this.right && (this.right.left = this), this.length += a.length, !0
                }
                return !1
            }
            delete(a) {
                if (!this.deleted) {
                    let b = this.parent;
                    this.countable && null === this.parentSub && (b._length -= this.length), this.markDeleted(), D(a.deleteSet, this.id.client, this.id.clock, this.length), aG(a, b, this.parentSub), this.content.delete(a)
                }
            }
            gc(a, b) {
                if (!this.deleted) throw m.c();
                if (this.content.gc(a), b) {
                    var c;
                    let b;
                    c = new bV(this.id, this.length), (b = a.clients.get(this.id.client))[ay(b, this.id.clock)] = c
                } else this.content = new bX(this.length)
            }
            write(a, b) {
                let c = b > 0 ? af(this.id.client, this.id.clock + b - 1) : this.origin,
                    d = this.rightOrigin,
                    e = this.parentSub,
                    f = 31 & this.content.getRef() | 128 * (null !== c) | 64 * (null !== d) | 32 * (null !== e);
                if (a.writeInfo(f), null !== c && a.writeLeftID(c), null !== d && a.writeRightID(d), null === c && null === d) {
                    let b = this.parent;
                    if (void 0 !== b._item) {
                        let c = b._item;
                        if (null === c) {
                            let c = ai(b);
                            a.writeParentInfo(!0), a.writeString(c)
                        } else a.writeParentInfo(!1), a.writeLeftID(c.id)
                    } else b.constructor === String ? (a.writeParentInfo(!0), a.writeString(b)) : b.constructor === ad ? (a.writeParentInfo(!1), a.writeLeftID(b)) : m.c();
                    null !== e && a.writeString(e)
                }
                this.content.write(a, b)
            }
        }
        let cj = (a, b) => ck[31 & b](a),
            ck = [() => {
                m.c()
            }, a => new bX(a.readLen()), a => {
                let b = a.readLen(),
                    c = [];
                for (let d = 0; d < b; d++) {
                    let b = a.readString();
                    "undefined" === b ? c.push(void 0) : c.push(JSON.parse(b))
                }
                return new b0(c)
            }, a => new bW(a.readBuf()), a => new b3(a.readString()), a => new b$(a.readJSON()), a => new b_(a.readKey(), a.readJSON()), a => new cc(b4[a.readTypeRef()](a)), a => {
                let b = a.readLen(),
                    c = [];
                for (let d = 0; d < b; d++) c.push(a.readAny());
                return new b2(c)
            }, a => new bZ(bY(a.readString(), a.readAny())), () => {
                m.c()
            }];
        class cl extends bU {
            get deleted() {
                return !0
            }
            delete() {}
            mergeWith(a) {
                return this.constructor === a.constructor && (this.length += a.length, !0)
            }
            integrate(a, b) {
                m.c()
            }
            write(a, b) {
                a.writeInfo(10), h.m(a.restEncoder, this.length - b)
            }
            getMissing(a, b) {
                return null
            }
        }
        let cm = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof global ? global : {},
            cn = "__ $YJS$ __";
        !0 === cm[cn] && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438"), cm[cn] = !0, c.d(b, {}, {
            AbsolutePosition: al,
            AbstractConnector: w,
            AbstractStruct: bU,
            AbstractType: be,
            Array: bv,
            ContentAny: b2,
            ContentBinary: bW,
            ContentDeleted: bX,
            ContentDoc: bZ,
            ContentEmbed: b$,
            ContentFormat: b_,
            ContentJSON: b0,
            ContentString: b3,
            ContentType: cc,
            Doc: L,
            GC: bV,
            ID: ad,
            Item: ci,
            Map: bx,
            PermanentUserData: class {
                constructor(a, b = a.getMap("users")) {
                    let c = new Map;
                    this.yusers = b, this.doc = a, this.clients = new Map, this.dss = c;
                    let d = (a, b) => {
                        let c = a.get("ds"),
                            d = a.get("ids"),
                            e = a => this.clients.set(a, b);
                        c.observe(a => {
                            a.changes.added.forEach(a => {
                                a.content.getContent().forEach(a => {
                                    a instanceof Uint8Array && this.dss.set(b, C([this.dss.get(b) || E(), H(new M(i.e(a)))]))
                                })
                            })
                        }), this.dss.set(b, C(c.map(a => H(new M(i.e(a)))))), d.observe(a => a.changes.added.forEach(a => a.content.getContent().forEach(e))), d.forEach(e)
                    };
                    b.observe(a => {
                        a.keysChanged.forEach(a => d(b.get(a), a))
                    }), b.forEach(d)
                }
                setUserMapping(a, b, c, {
                    filter: d = () => !0
                } = {}) {
                    let e = this.yusers,
                        f = e.get(c);
                    f || ((f = new bx).set("ids", new bv), f.set("ds", new bv), e.set(c, f)), f.get("ids").push([b]), e.observe(a => {
                        setTimeout(() => {
                            let a = e.get(c);
                            if (a !== f) {
                                f = a, this.clients.forEach((a, b) => {
                                    c === a && f.get("ids").push([b])
                                });
                                let b = new Q,
                                    d = this.dss.get(c);
                                d && (G(b, d), f.get("ds").push([b.toUint8Array()]))
                            }
                        }, 0)
                    }), a.on("afterTransaction", a => {
                        setTimeout(() => {
                            let b = f.get("ds"),
                                c = a.deleteSet;
                            if (a.local && c.clients.size > 0 && d(a, c)) {
                                let a = new Q;
                                G(a, c), b.push([a.toUint8Array()])
                            }
                        })
                    })
                }
                getUserByClientId(a) {
                    return this.clients.get(a) || null
                }
                getUserByDeletedId(a) {
                    for (let [b, c] of this.dss.entries())
                        if (A(c, a)) return b;
                    return null
                }
            },
            RelativePosition: ak,
            Skip: cl,
            Snapshot: an,
            Text: bN,
            Transaction: aE,
            UndoManager: aP,
            UpdateDecoderV1: N,
            UpdateDecoderV2: P,
            UpdateEncoderV1: R,
            UpdateEncoderV2: T,
            XmlElement: bQ,
            XmlFragment: bP,
            XmlHook: bS,
            XmlText: bT,
            YArrayEvent: bu,
            YEvent: a5,
            YMapEvent: bw,
            YTextEvent: bM,
            YXmlEvent: bR,
            applyUpdate: (a, b, c) => W(a, b, c, N),
            applyUpdateV2: W,
            cleanupYTextFormatting: bJ,
            compareIDs: ae,
            compareRelativePositions: (a, b) => a === b || null !== a && null !== b && a.tname === b.tname && ae(a.item, b.item) && ae(a.type, b.type) && a.assoc === b.assoc,
            convertUpdateFormatV1ToV2: a => a1(a, n.c, N, T),
            convertUpdateFormatV2ToV1: a3,
            createAbsolutePositionFromRelativePosition: (a, b, c = !0) => {
                let d = b.store,
                    e = a.item,
                    f = a.type,
                    g = a.tname,
                    h = a.assoc,
                    i = null,
                    j = 0;
                if (null !== e) {
                    let a, b;
                    if (aw(d, e.client) <= e.clock) return null;
                    let f = c ? cd(d, e) : (a = az(d, e), b = e.clock - a.id.clock, {
                            item: a,
                            diff: b
                        }),
                        g = f.item;
                    if (!(g instanceof ci)) return null;
                    if (null === (i = g.parent)._item || !i._item.deleted) {
                        j = g.deleted || !g.countable ? 0 : f.diff + (h >= 0 ? 0 : 1);
                        let a = g.left;
                        for (; null !== a;) !a.deleted && a.countable && (j += a.length), a = a.left
                    }
                } else {
                    if (null !== g) i = b.get(g);
                    else if (null !== f) {
                        if (aw(d, f.client) <= f.clock) return null;
                        let {
                            item: a
                        } = c ? cd(d, f) : {
                            item: az(d, f)
                        };
                        if (!(a instanceof ci) || !(a.content instanceof cc)) return null;
                        i = a.content.type
                    } else throw m.c();
                    j = h >= 0 ? i._length : 0
                }
                return ((a, b, c = 0) => new al(a, b, c))(i, j, a.assoc)
            },
            createDeleteSet: E,
            createDeleteSetFromStructStore: F,
            createDocFromSnapshot: (a, b, c = new L) => {
                if (a.gc) throw Error("Garbage-collection must be disabled in `originDoc`!");
                let {
                    sv: d,
                    ds: e
                } = b, f = new T;
                return a.transact(b => {
                    let c = 0;
                    for (let [e, g] of(d.forEach(a => {
                            a > 0 && c++
                        }), h.m(f.restEncoder, c), d)) {
                        if (0 === g) continue;
                        g < aw(a.store, e) && aB(b, af(e, g));
                        let c = a.store.clients.get(e) || [],
                            d = ay(c, g - 1);
                        h.m(f.restEncoder, d + 1), f.writeClient(e), h.m(f.restEncoder, 0);
                        for (let a = 0; a <= d; a++) c[a].write(f, 0)
                    }
                    G(f, e)
                }), W(c, f.toUint8Array(), "snapshot"), c
            },
            createID: af,
            createRelativePositionFromJSON: a => new ak(null == a.type ? null : af(a.type.client, a.type.clock), a.tname ?? null, null == a.item ? null : af(a.item.client, a.item.clock), null == a.assoc ? 0 : a.assoc),
            createRelativePositionFromTypeIndex: (a, b, c = 0) => {
                let d = a._start;
                if (c < 0) {
                    if (0 === b) return am(a, null, c);
                    b--
                }
                for (; null !== d;) {
                    if (!d.deleted && d.countable) {
                        if (d.length > b) return am(a, af(d.id.client, d.id.clock + b), c);
                        b -= d.length
                    }
                    if (null === d.right && c < 0) return am(a, d.lastId, c);
                    d = d.right
                }
                return am(a, null, c)
            },
            createSnapshot: aq,
            decodeRelativePosition: a => (a => {
                let b = null,
                    c = null,
                    d = null;
                switch (i.k(a)) {
                    case 0:
                        d = ah(a);
                        break;
                    case 1:
                        c = i.j(a);
                        break;
                    case 2:
                        b = ah(a)
                }
                return new ak(b, c, d, i.f(a) ? i.i(a) : 0)
            })(i.e(a)),
            decodeSnapshot: a => ap(a, new M(i.e(a))),
            decodeSnapshotV2: ap,
            decodeStateVector: Z,
            decodeUpdate: a => aS(a, N),
            decodeUpdateV2: aS,
            diffUpdate: (a, b) => aZ(a, b, N, R),
            diffUpdateV2: aZ,
            emptySnapshot: ar,
            encodeRelativePosition: a => {
                let b = h.e();
                return ((a, b) => {
                    let {
                        type: c,
                        tname: d,
                        item: e,
                        assoc: f
                    } = b;
                    if (null !== e) h.m(a, 0), ag(a, e);
                    else if (null !== d) h.i(a, 1), h.l(a, d);
                    else if (null !== c) h.i(a, 2), ag(a, c);
                    else throw m.c();
                    return h.k(a, f)
                })(b, a), h.f(b)
            },
            encodeSnapshot: a => ao(a, new Q),
            encodeSnapshotV2: ao,
            encodeStateAsUpdate: (a, b) => X(a, b, new R),
            encodeStateAsUpdateV2: X,
            encodeStateVector: a => ((a, b = new S) => (a instanceof Map ? $(b, a) : $(b, av(a.store)), b.toUint8Array()))(a, new Q),
            encodeStateVectorFromUpdate: a => aV(a, Q, N),
            encodeStateVectorFromUpdateV2: aV,
            equalDeleteSets: J,
            equalSnapshots: (a, b) => {
                let c = a.ds.clients,
                    d = b.ds.clients,
                    e = a.sv,
                    f = b.sv;
                if (e.size !== f.size || c.size !== d.size) return !1;
                for (let [a, b] of e.entries())
                    if (f.get(a) !== b) return !1;
                for (let [a, b] of c.entries()) {
                    let c = d.get(a) || [];
                    if (b.length !== c.length) return !1;
                    for (let a = 0; a < b.length; a++) {
                        let d = b[a],
                            e = c[a];
                        if (d.clock !== e.clock || d.len !== e.len) return !1
                    }
                }
                return !0
            },
            findIndexSS: ay,
            findRootTypeKey: ai,
            getItem: az,
            getItemCleanEnd: aC,
            getItemCleanStart: aB,
            getState: aw,
            getTypeChildren: a => {
                a.doc ?? a7();
                let b = a._start,
                    c = [];
                for (; b;) c.push(b), b = b.right;
                return c
            },
            isDeleted: A,
            isParentOf: aj,
            iterateDeletedStructs: z,
            logType: a => {
                let b = [],
                    c = a._start;
                for (; c;) b.push(c), c = c.right;
                console.log("Children: ", b), console.log("Children content: ", b.filter(a => !a.deleted).map(a => a.content))
            },
            logUpdate: a => aR(a, N),
            logUpdateV2: aR,
            mergeDeleteSets: C,
            mergeUpdates: aU,
            mergeUpdatesV2: aY,
            obfuscateUpdate: (a, b) => a1(a, a2(b), N, R),
            obfuscateUpdateV2: (a, b) => a1(a, a2(b), P, T),
            parseUpdateMeta: a => aW(a, N),
            parseUpdateMetaV2: aW,
            readUpdate: (a, b, c) => V(a, b, c, new N(a)),
            readUpdateV2: V,
            relativePositionToJSON: a => {
                let b = {};
                return a.type && (b.type = a.type), a.tname && (b.tname = a.tname), a.item && (b.item = a.item), null != a.assoc && (b.assoc = a.assoc), b
            },
            snapshot: a => aq(F(a.store), av(a.store)),
            snapshotContainsUpdate: (a, b) => ((a, b, c = P) => {
                let d = new c(i.e(b)),
                    e = new aQ(d, !1);
                for (let b = e.curr; null !== b; b = e.next())
                    if ((a.sv.get(b.id.client) || 0) < b.id.clock + b.length) return !1;
                let f = C([a.ds, H(d)]);
                return J(a.ds, f)
            })(a, b, N),
            transact: aL,
            tryGc: (a, b, c) => {
                aI(a, b, c), aJ(a, b)
            },
            typeListToArraySnapshot: (a, b) => {
                let c = [],
                    d = a._start;
                for (; null !== d;) {
                    if (d.countable && as(d, b)) {
                        let a = d.content.getContent();
                        for (let b = 0; b < a.length; b++) c.push(a[b])
                    }
                    d = d.right
                }
                return c
            },
            typeMapGetAllSnapshot: bs,
            typeMapGetSnapshot: (a, b, c) => {
                let d = a._map.get(b) || null;
                for (; null !== d && (!c.sv.has(d.id.client) || d.id.clock >= (c.sv.get(d.id.client) || 0));) d = d.left;
                return null !== d && as(d, c) ? d.content.getContent()[d.length - 1] : void 0
            }
        })
    }),
    jgbE: (function() {
        Symbol("Let zodToJsonSchema decide on which parser to use"), new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789")
    }),
    rycR: (function(a, b, c) {
        let d = {}.hasOwnProperty;
        c.d(b, {}, {
            a: function(a, b) {
                let c = b || {};

                function e(b, ...c) {
                    let f = e.invalid,
                        g = e.handlers;
                    if (b && d.call(b, a)) {
                        let c = String(b[a]);
                        f = d.call(g, c) ? g[c] : e.unknown
                    }
                    if (f) return f.call(this, b, ...c)
                }
                return e.handlers = c.handlers || {}, e.invalid = c.invalid, e.unknown = c.unknown, e
            }
        })
    })
};